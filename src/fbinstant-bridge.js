/**
 * Facebook Instant Games bridge.
 * Works inside Facebook/Messenger; times out only in a plain browser (not in FB embed).
 */
(function (global) {
  'use strict';

  var INIT_TIMEOUT_MS = 2500;
  var DEFAULT_LEADERBOARD = 'high_score';
  var started = false;
  var readyPromise = null;
  var lastProgress = -1;
  var isInstant = false;
  var lastSubmittedScores = {};

  function hasSdk() {
    return typeof global.FBInstant !== 'undefined' && global.FBInstant;
  }

  function isFacebookInstantContext() {
    try {
      var host = global.location.hostname || '';
      if (/fbsbx\.com|facebook\.com|fb\.gg|messenger\.com/i.test(host)) {
        return true;
      }
      var q = global.location.search || '';
      if (
        q.indexOf('is_shield_env=true') !== -1 ||
        q.indexOf('entry_point=embedded_player') !== -1
      ) {
        return true;
      }
      var ref = global.document.referrer || '';
      if (/facebook\.com|fb\.gg|messenger\.com|fbsbx\.com/i.test(ref)) {
        return true;
      }
      if (global.location !== global.top.location) {
        return true;
      }
    } catch (e) {}
    return false;
  }

  function isLocalDevBrowser() {
    try {
      var host = global.location.hostname || '';
      return (
        (host === 'localhost' || host === '127.0.0.1') &&
        !isFacebookInstantContext()
      );
    } catch (e) {
      return false;
    }
  }

  function setProgress(value) {
    var n = Math.max(0, Math.min(100, Math.floor(value)));
    if (n <= lastProgress) return;
    lastProgress = n;
    if (!isInstant) return;
    try {
      global.FBInstant.setLoadingProgress(n);
    } catch (err) {
      console.warn('[FBInstant] setLoadingProgress failed:', err);
    }
  }

  function ready() {
    if (readyPromise) return readyPromise;

    readyPromise = new Promise(function (resolve) {
      if (!hasSdk()) {
        console.log('[FBInstant] SDK not present — local/browser mode');
        resolve({ instant: false });
        return;
      }

      var useTimeout = isLocalDevBrowser();
      var done = false;

      function finish(instant, reason) {
        if (done) return;
        done = true;
        isInstant = !!instant;
        if (instant) {
          setProgress(5);
          console.log('[FBInstant] initialized');
        } else {
          console.warn('[FBInstant] ' + (reason || 'not available') + ' — local mode');
        }
        resolve({ instant: isInstant });
      }

      var timer = null;
      if (useTimeout) {
        timer = setTimeout(function () {
          finish(false, 'init timeout after ' + INIT_TIMEOUT_MS + 'ms');
        }, INIT_TIMEOUT_MS);
      }

      try {
        global.FBInstant.initializeAsync()
          .then(function () {
            if (timer) clearTimeout(timer);
            finish(true);
            // Restore cloud saves ASAP (before GameData.initData if possible)
            if (
              global.FBInstantCloudSave &&
              typeof global.FBInstantCloudSave.start === 'function'
            ) {
              global.FBInstantCloudSave.start();
            }
          })
          .catch(function (err) {
            if (timer) clearTimeout(timer);
            finish(false, 'initialize failed: ' + err);
          });
      } catch (err) {
        if (timer) clearTimeout(timer);
        finish(false, 'initialize threw: ' + err);
      }
    });

    return readyPromise;
  }

  /**
   * Dismiss Facebook loading screen once the first scene is playable.
   * Safe to call multiple times.
   */
  function notifyGameReady() {
    if (started) return Promise.resolve();
    started = true;
    setProgress(100);

    if (!isInstant || !hasSdk()) {
      return Promise.resolve();
    }

    return global.FBInstant.startGameAsync()
      .then(function () {
        var playerId = null;
        try {
          playerId = global.FBInstant.player.getID();
        } catch (e) {}
        console.log('[FBInstant] startGameAsync ok, player:', playerId);
        if (
          global.FBInstantLeaderboardHook &&
          typeof global.FBInstantLeaderboardHook.markGameReady === 'function'
        ) {
          global.FBInstantLeaderboardHook.markGameReady();
        }
        if (
          global.FBInstantProfile &&
          typeof global.FBInstantProfile.start === 'function'
        ) {
          // Profile only on home (StartGameScene2); hide in gameplay
          global.FBInstantProfile.start();
        }
        if (
          global.FBInstantFriends &&
          typeof global.FBInstantFriends.consumeEntryInvite === 'function'
        ) {
          var inviteCode = global.FBInstantFriends.consumeEntryInvite();
          if (
            inviteCode &&
            global.FBInstantFriends._onInviteJoin &&
            typeof global.FBInstantFriends._onInviteJoin === 'function'
          ) {
            try {
              global.FBInstantFriends._onInviteJoin(inviteCode);
            } catch (e) {}
          }
        }
        if (
          global.FBInstantCloudSave &&
          typeof global.FBInstantCloudSave.start === 'function'
        ) {
          // Second pass after startGameAsync (APIs fully available on all clients)
          global.FBInstantCloudSave.start();
        }
        if (!hasLeaderboardApi() && hasSessionScoreApi()) {
          console.log(
            '[FBInstant] using postSessionScoreAsync (SDK 8 / NEZP)',
          );
        } else if (!hasLeaderboardApi()) {
          console.log(
            '[FBInstant] no score API available — session/leaderboard skipped',
          );
        }
      })
      .catch(function (err) {
        console.error('[FBInstant] startGameAsync failed:', err);
      });
  }

  function hasLeaderboardApi() {
    return (
      hasSdk() &&
      typeof global.FBInstant.getLeaderboardAsync === 'function'
    );
  }

  function hasSessionScoreApi() {
    return (
      hasSdk() &&
      (typeof global.FBInstant.postSessionScoreAsync === 'function' ||
        typeof global.FBInstant.postSessionScore === 'function')
    );
  }

  function getPlayerId() {
    if (!isInstant || !hasSdk()) return null;
    try {
      return global.FBInstant.player.getID();
    } catch (e) {
      return null;
    }
  }

  /**
   * SDK 8 / Zero Permissions: send score signal to Facebook for discovery & re-engagement.
   */
  function postSessionScore(score) {
    if (!isInstant || !hasSessionScoreApi()) {
      return Promise.resolve(false);
    }

    var n = Math.floor(Number(score));
    if (!isFinite(n) || n < 0) {
      return Promise.resolve(false);
    }

    var key = '__session__';
    if (lastSubmittedScores[key] != null && n <= lastSubmittedScores[key]) {
      return Promise.resolve(false);
    }

    var p;
    if (typeof global.FBInstant.postSessionScoreAsync === 'function') {
      p = global.FBInstant.postSessionScoreAsync(n);
    } else {
      try {
        global.FBInstant.postSessionScore(n);
        p = Promise.resolve();
      } catch (err) {
        return Promise.resolve(false);
      }
    }

    return Promise.resolve(p)
      .then(function () {
        lastSubmittedScores[key] = n;
        console.log('[FBInstant] session score posted:', n);
        return true;
      })
      .catch(function (err) {
        var code = err && err.code;
        if (code === 'RATE_LIMITED') {
          console.warn('[FBInstant] postSessionScore rate-limited — will retry on next record');
        } else {
          console.warn('[FBInstant] postSessionScore failed:', err);
        }
        return false;
      });
  }

  /**
   * Legacy leaderboard API (pre-SDK 8). No-ops when unavailable.
   */
  function submitScore(leaderboardName, score) {
    if (!isInstant || !hasLeaderboardApi()) {
      return Promise.resolve(false);
    }

    var name = leaderboardName || DEFAULT_LEADERBOARD;
    var n = Math.floor(Number(score));
    if (!isFinite(n) || n < 0) {
      return Promise.resolve(false);
    }
    if (lastSubmittedScores[name] != null && n <= lastSubmittedScores[name]) {
      return Promise.resolve(false);
    }

    return global.FBInstant.getLeaderboardAsync(name)
      .then(function (lb) {
        return lb.setScoreAsync(n);
      })
      .then(function () {
        lastSubmittedScores[name] = n;
        console.log('[FBInstant] score submitted:', name, n);
        return true;
      })
      .catch(function (err) {
        console.warn('[FBInstant] submitScore failed:', name, err);
        return false;
      });
  }

  /**
   * Preferred: postSessionScoreAsync (SDK 8). Falls back to legacy leaderboard if present.
   */
  function submitHighScore(score) {
    return postSessionScore(score).then(function (ok) {
      if (hasLeaderboardApi()) {
        return submitScore(DEFAULT_LEADERBOARD, score).then(function (lbOk) {
          return ok || lbOk;
        });
      }
      return ok;
    });
  }

  function getEntries(leaderboardName, limit) {
    var name = leaderboardName || DEFAULT_LEADERBOARD;
    limit = limit || 10;
    if (!isInstant || !hasLeaderboardApi()) {
      return Promise.resolve([]);
    }
    return global.FBInstant.getLeaderboardAsync(name)
      .then(function (lb) {
        return lb.getEntriesAsync(limit, 0);
      })
      .then(function (entries) {
        return entries.map(function (entry, index) {
          var playerId = null;
          try {
            playerId = entry.getPlayer().getID();
          } catch (e) {}
          return {
            rank: index + 1,
            score: entry.getScore(),
            playerId: playerId,
          };
        });
      })
      .catch(function (err) {
        console.warn('[FBInstant] getEntries failed:', name, err);
        return [];
      });
  }

  global.FBInstantBridge = {
    ready: ready,
    setProgress: setProgress,
    notifyGameReady: notifyGameReady,
    isInstant: function () {
      return isInstant;
    },
    getPlayerId: getPlayerId,
    hasLeaderboardApi: hasLeaderboardApi,
    hasSessionScoreApi: hasSessionScoreApi,
    postSessionScore: postSessionScore,
    submitScore: submitScore,
    submitHighScore: submitHighScore,
    getEntries: getEntries,
    DEFAULT_LEADERBOARD: DEFAULT_LEADERBOARD,
  };
})(typeof window !== 'undefined' ? window : this);
