/**
 * Facebook Instant Games player cloud save (Zero Permissions / SDK 8).
 * Syncs Block Blast localStorage ↔ FBInstant.player data.
 * Includes classic saves + Highest Combo / awards (separate keys).
 * Never stores name/photo — only game progress JSON.
 */
(function (global) {
  'use strict';

  var CLOUD_BLOB_KEY = 'bb_cloud_v1';
  var CLOUD_HIGH_KEY = 'bb_high_cord';
  var CLOUD_TS_KEY = 'bb_updated_at';

  /** Classic + mode save keys used by Controller / GameData */
  var GAME_SAVE_KEYS = [
    'fangkuaipintu',
    'fangkuaipintutravel',
    'fangkuaipintuduoLinGuoTravel',
    'fangkuaipintujewel',
    'fangkuaipinturussia',
    'fangkuaipintu_dengguan',
    'fangkuaipintuHot',
  ];

  /**
   * Achievement UI (Highest Combo, awards/badges) — NOT inside fangkuaipintu.
   * LocalStorgeMgr.set("AchieveTargetDataInfo" / "AchievementAwardData0703", ...)
   */
  var ACHIEVE_KEYS = [
    'AchieveTargetDataInfo',
    'AchievementAwardData0703',
    'Achievement_commonInfo_1006',
    'AchievementPopData',
    'achievementUnlockedData',
    'breakCombKey',
  ];

  var SAVE_KEYS = GAME_SAVE_KEYS.concat(ACHIEVE_KEYS);

  var SAVE_KEY_SET = {};
  for (var i = 0; i < SAVE_KEYS.length; i++) SAVE_KEY_SET[SAVE_KEYS[i]] = true;

  var MAX_BLOB_CHARS = 900000;
  var SAVE_DEBOUNCE_MS = 2000;
  var FLUSH_DEBOUNCE_MS = 400;

  var started = false;
  var restoring = false;
  var saveTimer = null;
  var flushTimer = null;
  var pendingDirty = false;
  var lastCloudHigh = 0;
  var storageHooked = false;

  function hasSdk() {
    return typeof global.FBInstant !== 'undefined' && global.FBInstant;
  }

  function isInstant() {
    var b = global.FBInstantBridge;
    return !!(b && typeof b.isInstant === 'function' && b.isInstant());
  }

  function hasDataApi() {
    return (
      hasSdk() &&
      global.FBInstant.player &&
      typeof global.FBInstant.player.setDataAsync === 'function' &&
      typeof global.FBInstant.player.getDataAsync === 'function'
    );
  }

  function parseJson(raw) {
    if (raw == null || raw === '') return null;
    if (typeof raw === 'object') return raw;
    if (typeof raw !== 'string') return null;
    var t = raw.trim();
    if (!t || (t.charAt(0) !== '{' && t.charAt(0) !== '[')) return null;
    try {
      return JSON.parse(t);
    } catch (e) {
      return null;
    }
  }

  /** ~UTF-8 bytes for ASCII-heavy JSON (string.length). */
  function formatBytes(n) {
    var bytes = Math.max(0, Math.floor(Number(n) || 0));
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(3) + ' MB';
  }

  function byteLen(value) {
    if (value == null) return 0;
    if (typeof value === 'string') return value.length;
    try {
      return JSON.stringify(value).length;
    } catch (e) {
      return 0;
    }
  }

  function logPayloadSize(label, encoded, keysObj) {
    var total = byteLen(encoded);
    var pct = ((total / 1048576) * 100).toFixed(1);
    console.log(
      '[FBInstant] ' + label + ' size=',
      formatBytes(total),
      '(' + total + ' bytes, ' + pct + '% of 1MB)',
    );
    if (keysObj && typeof keysObj === 'object') {
      var parts = [];
      for (var k in keysObj) {
        if (!Object.prototype.hasOwnProperty.call(keysObj, k)) continue;
        parts.push(k + '=' + formatBytes(byteLen(keysObj[k])));
      }
      if (parts.length) {
        console.log('[FBInstant] ' + label + ' keys:', parts.join(', '));
      }
    }
  }

  function extractHigh(obj) {
    if (!obj || typeof obj !== 'object') return 0;
    var data = obj.GameDataObj && typeof obj.GameDataObj === 'object' ? obj.GameDataObj : obj;
    var n = data && typeof data.high_cord === 'number' ? Math.floor(data.high_cord) : 0;
    return n > 0 ? n : 0;
  }

  function extractHighCombo(obj) {
    if (!obj || typeof obj !== 'object') return 0;
    var n =
      typeof obj.highComboNum === 'number'
        ? obj.highComboNum
        : typeof obj.highComboRecord === 'number'
          ? obj.highComboRecord
          : typeof obj.maxComb === 'number'
            ? obj.maxComb
            : 0;
    return n > 0 ? Math.floor(n) : 0;
  }

  function awardProgressScore(awardMap) {
    if (!awardMap || typeof awardMap !== 'object') return 0;
    var score = 0;
    for (var k in awardMap) {
      if (!Object.prototype.hasOwnProperty.call(awardMap, k)) continue;
      var e = awardMap[k];
      if (!e || typeof e !== 'object') continue;
      if (typeof e.curAchieveIndex === 'number' && e.curAchieveIndex >= 0) {
        score += (e.curAchieveIndex + 1) * 1000;
      }
      if (typeof e.currentValue === 'number' && e.currentValue > 0) {
        score += e.currentValue;
      }
    }
    return score;
  }

  function mergeAwardMaps(localMap, remoteMap) {
    var out = {};
    var srcLocal = localMap && typeof localMap === 'object' ? localMap : {};
    var srcRemote = remoteMap && typeof remoteMap === 'object' ? remoteMap : {};
    var names = {};
    var k;
    for (k in srcLocal) {
      if (Object.prototype.hasOwnProperty.call(srcLocal, k)) names[k] = 1;
    }
    for (k in srcRemote) {
      if (Object.prototype.hasOwnProperty.call(srcRemote, k)) names[k] = 1;
    }
    for (k in names) {
      var L = srcLocal[k];
      var R = srcRemote[k];
      if (!L) {
        out[k] = R;
        continue;
      }
      if (!R) {
        out[k] = L;
        continue;
      }
      var li = typeof L.curAchieveIndex === 'number' ? L.curAchieveIndex : -1;
      var ri = typeof R.curAchieveIndex === 'number' ? R.curAchieveIndex : -1;
      var lv = typeof L.currentValue === 'number' ? L.currentValue : 0;
      var rv = typeof R.currentValue === 'number' ? R.currentValue : 0;
      if (ri > li || (ri === li && rv > lv)) out[k] = R;
      else out[k] = L;
    }
    return out;
  }

  function shouldPreferRemote(key, localObj, remoteObj) {
    if (!localObj) return true;
    if (!remoteObj) return false;

    if (key === 'AchieveTargetDataInfo') {
      return extractHighCombo(remoteObj) > extractHighCombo(localObj);
    }
    if (key === 'AchievementPopData' || key === 'breakCombKey') {
      return extractHighCombo(remoteObj) > extractHighCombo(localObj);
    }
    if (key === 'AchievementAwardData0703') {
      return awardProgressScore(remoteObj) > awardProgressScore(localObj);
    }
    if (key === 'achievementUnlockedData') {
      var ls = typeof localObj === 'string' ? localObj : JSON.stringify(localObj);
      var rs = typeof remoteObj === 'string' ? remoteObj : JSON.stringify(remoteObj);
      return rs.length > ls.length;
    }
    if (key === 'Achievement_commonInfo_1006') {
      return JSON.stringify(remoteObj).length > JSON.stringify(localObj).length;
    }

    return extractHigh(remoteObj) > extractHigh(localObj);
  }

  function localGet(key) {
    try {
      return global.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function localSet(key, value) {
    try {
      global.localStorage.setItem(key, value);
    } catch (e) {}
  }

  function collectLocalSaves() {
    var keys = {};
    var bestHigh = 0;
    for (var i = 0; i < SAVE_KEYS.length; i++) {
      var k = SAVE_KEYS[i];
      var raw = localGet(k);
      if (!raw) continue;
      var obj = parseJson(raw);
      if (!obj) {
        if (String(raw).length < 200000) keys[k] = String(raw);
        continue;
      }
      keys[k] = obj;
      var h = extractHigh(obj);
      if (h > bestHigh) bestHigh = h;
    }
    return { keys: keys, high_cord: bestHigh };
  }

  function buildCloudPayload() {
    var local = collectLocalSaves();
    var blob = {
      v: 2,
      updatedAt: Date.now(),
      high_cord: local.high_cord,
      keys: local.keys,
    };
    var encoded = JSON.stringify(blob);
    if (encoded.length > MAX_BLOB_CHARS) {
      var slimKeys = {};
      var keepOrder = [
        'fangkuaipintu',
        'AchieveTargetDataInfo',
        'AchievementAwardData0703',
        'Achievement_commonInfo_1006',
        'achievementUnlockedData',
        'AchievementPopData',
        'breakCombKey',
        'fangkuaipintutravel',
      ];
      for (var si = 0; si < keepOrder.length; si++) {
        var kk = keepOrder[si];
        if (local.keys[kk]) slimKeys[kk] = local.keys[kk];
      }
      blob.keys = slimKeys;
      encoded = JSON.stringify(blob);
      if (encoded.length > MAX_BLOB_CHARS) {
        slimKeys = {};
        if (local.keys.AchieveTargetDataInfo) {
          slimKeys.AchieveTargetDataInfo = local.keys.AchieveTargetDataInfo;
        }
        if (local.keys.AchievementAwardData0703) {
          slimKeys.AchievementAwardData0703 = local.keys.AchievementAwardData0703;
        }
        if (local.keys.fangkuaipintu) {
          var c = local.keys.fangkuaipintu;
          slimKeys.fangkuaipintu = {
            high_cord: extractHigh(c),
            old_high_cord: c.old_high_cord || 0,
            comobTimes: c.comobTimes || 0,
            gameNum: c.gameNum || 0,
          };
        }
        blob.keys = slimKeys;
        blob.note = 'oversized_kept_achieve';
        encoded = JSON.stringify(blob);
      }
      console.warn(
        '[FBInstant] cloud save trimmed to fit 1MB, high_cord=',
        blob.high_cord,
        'size=',
        formatBytes(encoded.length),
      );
    }
    return {
      payload: blob,
      encoded: encoded,
      high: local.high_cord,
      bytes: encoded.length,
    };
  }

  function applyCloudToLocal(cloudBlob, cloudHigh) {
    if (!cloudBlob && !(cloudHigh > 0)) return false;

    var blob = typeof cloudBlob === 'string' ? parseJson(cloudBlob) : cloudBlob;
    var applied = false;
    var cloudKeys = blob && blob.keys && typeof blob.keys === 'object' ? blob.keys : null;
    var cHigh =
      typeof cloudHigh === 'number' && cloudHigh > 0
        ? Math.floor(cloudHigh)
        : blob
          ? extractHigh(blob) || (blob.high_cord | 0)
          : 0;

    restoring = true;
    try {
      if (cloudKeys) {
        for (var k in cloudKeys) {
          if (!Object.prototype.hasOwnProperty.call(cloudKeys, k)) continue;
          if (!SAVE_KEY_SET[k]) continue;
          var remote = cloudKeys[k];
          var remoteStr =
            typeof remote === 'string' ? remote : JSON.stringify(remote);
          var remoteObj = parseJson(remoteStr);
          if (!remoteObj && typeof remote === 'string') remoteObj = remote;

          var localRaw = localGet(k);
          var localObj = parseJson(localRaw);
          if (!localObj && localRaw) localObj = localRaw;

          if (
            k === 'AchievementAwardData0703' &&
            localObj &&
            remoteObj &&
            typeof localObj === 'object' &&
            typeof remoteObj === 'object'
          ) {
            var merged = mergeAwardMaps(localObj, remoteObj);
            var mergedStr = JSON.stringify(merged);
            if (mergedStr !== JSON.stringify(localObj)) {
              localSet(k, mergedStr);
              applied = true;
            }
            continue;
          }

          if (!localObj) {
            localSet(k, remoteStr);
            applied = true;
            continue;
          }

          if (shouldPreferRemote(k, localObj, remoteObj)) {
            localSet(k, remoteStr);
            applied = true;
          }
        }
      }

      if (cHigh > 0) {
        var classicRaw = localGet('fangkuaipintu');
        var classic = parseJson(classicRaw);
        if (classic) {
          var data =
            classic.GameDataObj && typeof classic.GameDataObj === 'object'
              ? classic.GameDataObj
              : classic;
          if (typeof data.high_cord !== 'number' || data.high_cord < cHigh) {
            data.high_cord = cHigh;
            localSet('fangkuaipintu', JSON.stringify(classic));
            applied = true;
          }
        } else if (!classicRaw) {
          localSet(
            'fangkuaipintu',
            JSON.stringify({
              high_cord: cHigh,
              current_cord: 0,
              old_high_cord: 0,
              gameNum: 0,
              __fb_cloud_seed: 1,
            }),
          );
          applied = true;
        }
      }
    } finally {
      restoring = false;
    }

    if (cHigh > lastCloudHigh) lastCloudHigh = cHigh;
    return applied;
  }

  function pushToCloud(forceFlush) {
    if (!started || !isInstant() || !hasDataApi()) {
      return Promise.resolve(false);
    }
    if (restoring) return Promise.resolve(false);

    var built = buildCloudPayload();
    if (!built.payload.keys || !Object.keys(built.payload.keys).length) {
      if (!(built.high > 0)) return Promise.resolve(false);
    }

    logPayloadSize('cloud save', built.encoded, built.payload.keys);

    var data = {};
    data[CLOUD_BLOB_KEY] = built.payload;
    data[CLOUD_HIGH_KEY] = built.high;
    data[CLOUD_TS_KEY] = built.payload.updatedAt;

    return global.FBInstant.player
      .setDataAsync(data)
      .then(function () {
        pendingDirty = false;
        lastCloudHigh = Math.max(lastCloudHigh, built.high);
        console.log(
          '[FBInstant] cloud save scheduled, high_cord=',
          built.high,
          'keys=',
          Object.keys(built.payload.keys || {}).length,
          'size=',
          formatBytes(built.bytes || built.encoded.length),
        );
        if (forceFlush && typeof global.FBInstant.player.flushDataAsync === 'function') {
          return global.FBInstant.player.flushDataAsync().then(function () {
            console.log('[FBInstant] cloud save flushed');
            return true;
          });
        }
        return true;
      })
      .catch(function (err) {
        console.warn('[FBInstant] cloud save failed:', err);
        pendingDirty = true;
        return false;
      });
  }

  function scheduleSave(flushSoon) {
    pendingDirty = true;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      saveTimer = null;
      pushToCloud(!!flushSoon);
    }, flushSoon ? FLUSH_DEBOUNCE_MS : SAVE_DEBOUNCE_MS);
  }

  function scheduleFlush() {
    if (!pendingDirty && !saveTimer) return;
    if (flushTimer) clearTimeout(flushTimer);
    flushTimer = setTimeout(function () {
      flushTimer = null;
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
      }
      pushToCloud(true);
    }, FLUSH_DEBOUNCE_MS);
  }

  function onStorageWrite(key, value) {
    if (!started || restoring) return;
    if (!key || !SAVE_KEY_SET[String(key)]) return;
    if (value == null) return;
    scheduleSave(false);
  }

  function hookStorage() {
    if (storageHooked) return;
    if (!global.Storage || !global.Storage.prototype.setItem) return;
    storageHooked = true;

    var prev = global.Storage.prototype.setItem;
    global.Storage.prototype.setItem = function (key, value) {
      prev.call(this, key, value);
      try {
        onStorageWrite(key, value);
      } catch (e) {}
    };
  }

  function pullFromCloud() {
    if (!isInstant() || !hasDataApi()) {
      return Promise.resolve(false);
    }

    return global.FBInstant.player
      .getDataAsync([CLOUD_BLOB_KEY, CLOUD_HIGH_KEY, CLOUD_TS_KEY])
      .then(function (data) {
        data = data || {};
        var blob = data[CLOUD_BLOB_KEY];
        if (blob) {
          logPayloadSize(
            'cloud restore',
            typeof blob === 'string' ? blob : JSON.stringify(blob),
            blob && blob.keys,
          );
        }
        var applied = applyCloudToLocal(blob, data[CLOUD_HIGH_KEY]);
        if (applied) {
          console.log(
            '[FBInstant] cloud restore applied, high_cord=',
            data[CLOUD_HIGH_KEY] || extractHigh(blob),
          );
        } else {
          console.log('[FBInstant] cloud restore — nothing newer');
        }
        return applied;
      })
      .catch(function (err) {
        console.warn('[FBInstant] cloud restore failed:', err);
        return false;
      });
  }

  function start() {
    if (!isInstant() || !hasDataApi()) {
      console.log('[FBInstant] cloud save skipped — no player data API');
      return Promise.resolve(false);
    }

    hookStorage();

    if (started) {
      return pullFromCloud().then(function (applied) {
        var local = collectLocalSaves();
        if (local.high_cord > lastCloudHigh || Object.keys(local.keys).length) {
          scheduleSave(true);
        }
        return applied;
      });
    }

    return pullFromCloud().then(function (applied) {
      started = true;
      var local = collectLocalSaves();
      if (local.high_cord > lastCloudHigh || Object.keys(local.keys).length) {
        scheduleSave(true);
      }

      try {
        global.document.addEventListener('visibilitychange', function () {
          if (global.document.visibilityState === 'hidden') scheduleFlush();
        });
        global.addEventListener('pagehide', scheduleFlush);
      } catch (e) {}

      console.log('[FBInstant] cloud save ready (game + combo/awards)');
      return applied;
    });
  }

  global.FBInstantCloudSave = {
    start: start,
    pull: pullFromCloud,
    push: function () {
      return pushToCloud(true);
    },
    flush: scheduleFlush,
  };
})(typeof window !== 'undefined' ? window : this);
