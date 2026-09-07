/**
 * Post Facebook session score only when:
 *  1) high_cord increased during the run (new personal best), AND
 *  2) game over is detected (storage / scene).
 * Mid-game pending updates do NOT call Facebook APIs.
 */
(function (global) {
  'use strict';

  var HIGH_FIELD = 'high_cord';
  var GAME_OVER_KEY_RE =
    /GameEnd|game_over|GameOver|gameOver|classGameEnd|HistoryScore|history_score|winStreakCount/i;
  var GAME_OVER_SCENE_RE = /GameOver|game_over|OverScene|Settlement|ResultScene|FailScene/i;
  var FLUSH_DEBOUNCE_MS = 800;
  var DEBUG = false;

  var gameReady = false;
  var lastPostedHigh = 0;
  var pendingNewHigh = 0;
  var postInFlight = false;
  var flushTimer = null;
  var directorHooked = false;

  function log() {
    if (!DEBUG) return;
    console.log.apply(console, arguments);
  }

  function extractHighCord(value) {
    if (typeof value !== 'string') return null;
    var trimmed = value.trim();
    if (!trimmed || trimmed.charAt(0) !== '{') return null;

    try {
      var obj = JSON.parse(trimmed);
      var data = obj && obj.GameDataObj ? obj.GameDataObj : obj;
      if (!data || typeof data !== 'object') return null;
      if (typeof data[HIGH_FIELD] !== 'number') return null;
      var n = Math.floor(data[HIGH_FIELD]);
      return n >= 0 ? n : null;
    } catch (e) {
      return null;
    }
  }

  function canPost() {
    var bridge = global.FBInstantBridge;
    if (!bridge || typeof bridge.submitHighScore !== 'function') return false;
    if (!bridge.isInstant || !bridge.isInstant()) return false;
    return (
      (typeof bridge.hasSessionScoreApi === 'function' &&
        bridge.hasSessionScoreApi()) ||
      (typeof bridge.hasLeaderboardApi === 'function' &&
        bridge.hasLeaderboardApi())
    );
  }

  function noteHighCord(high) {
    if (high == null) return;
    // Ignore scores already posted or currently sending
    if (high <= lastPostedHigh) return;
    if (postInFlight && high <= pendingNewHigh) return;
    if (high <= pendingNewHigh) return;

    pendingNewHigh = high;
    log('[FBInstant] new high_cord pending until game over:', high);
  }

  function doFlush(reason) {
    flushTimer = null;
    if (!gameReady || !canPost()) return;
    if (postInFlight) return;
    if (!pendingNewHigh || pendingNewHigh <= lastPostedHigh) return;

    var score = pendingNewHigh;
    // Lock immediately so duplicate GameEnd keys cannot double-post
    pendingNewHigh = 0;
    lastPostedHigh = score;
    postInFlight = true;

    console.log(
      '[FBInstant] game over + new record → post session score:',
      score,
      '(' + (reason || 'signal') + ')',
    );

    global.FBInstantBridge
      .submitHighScore(score)
      .then(function (ok) {
        postInFlight = false;
        if (!ok) {
          // Allow retry on next game over for this score
          lastPostedHigh = Math.min(lastPostedHigh, score - 1);
          pendingNewHigh = Math.max(pendingNewHigh, score);
        }
      })
      .catch(function () {
        postInFlight = false;
        lastPostedHigh = Math.min(lastPostedHigh, score - 1);
        pendingNewHigh = Math.max(pendingNewHigh, score);
      });
  }

  function flushOnGameOver(reason) {
    if (!gameReady) return;
    if (!pendingNewHigh || pendingNewHigh <= lastPostedHigh) return;
    if (postInFlight) return;

    if (flushTimer) clearTimeout(flushTimer);
    flushTimer = setTimeout(function () {
      doFlush(reason);
    }, FLUSH_DEBOUNCE_MS);
  }

  function onStorageWrite(key, value) {
    if (!gameReady) return;

    var high = extractHighCord(value);
    if (high != null) noteHighCord(high);

    if (key && GAME_OVER_KEY_RE.test(String(key))) {
      flushOnGameOver('storage:' + key);
    }
  }

  function hookDirectorScenes() {
    if (directorHooked) return;
    if (!global.cc || !cc.director || typeof cc.director.loadScene !== 'function') {
      return;
    }
    directorHooked = true;
    var original = cc.director.loadScene;
    cc.director.loadScene = function (name) {
      try {
        if (name && GAME_OVER_SCENE_RE.test(String(name))) {
          flushOnGameOver('scene:' + name);
        }
      } catch (e) {}
      return original.apply(this, arguments);
    };
  }

  function markGameReady() {
    gameReady = true;
    hookDirectorScenes();
    var tries = 0;
    var wait = setInterval(function () {
      hookDirectorScenes();
      if (directorHooked || ++tries > 100) clearInterval(wait);
    }, 200);
  }

  if (global.Storage && global.Storage.prototype.setItem) {
    var nativeSetItem = global.Storage.prototype.setItem;
    global.Storage.prototype.setItem = function (key, value) {
      nativeSetItem.call(this, key, value);
      try {
        onStorageWrite(key, value);
      } catch (e) {}
    };
  }

  global.notifyFBGameOver = function (score) {
    if (typeof score === 'number' && isFinite(score) && score > 0) {
      noteHighCord(Math.floor(score));
    }
    flushOnGameOver('manual');
  };

  global.submitFBHighScore = function (score) {
    var bridge = global.FBInstantBridge;
    if (bridge && typeof bridge.submitHighScore === 'function') {
      return bridge.submitHighScore(score);
    }
    return Promise.resolve(false);
  };

  global.FBInstantLeaderboardHook = {
    markGameReady: markGameReady,
    notifyGameOver: global.notifyFBGameOver,
  };
})(typeof window !== 'undefined' ? window : this);
