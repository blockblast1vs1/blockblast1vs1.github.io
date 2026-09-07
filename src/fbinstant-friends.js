/**
 * Facebook Instant Games — Play with Friends (context + PvP room share).
 * Zero Permissions: no PII read; Meta dialogs + entryPointData only.
 *
 * Invite requires:
 *  - custom_update_templates.pvp_invite in fbapp-config.json
 *  - updateAsync with raw base64 image (+ template)
 *  - inviteAsync / shareAsync as visible fallbacks
 *  - game HTML overlays must be hidden while FB dialogs open
 */
(function (global) {
  'use strict';

  var STORAGE_FRIENDS = 'pvp_friends_mode';
  var STORAGE_PENDING_JOIN = 'pvp_friends_join_code';
  var DATA_KEY_CODE = 'code';
  var UPDATE_TEMPLATE = 'pvp_invite';

  function bridge() {
    return global.FBInstantBridge;
  }

  function hasSdk() {
    return typeof global.FBInstant !== 'undefined' && global.FBInstant;
  }

  function isInstant() {
    var b = bridge();
    return b && typeof b.isInstant === 'function' && b.isInstant();
  }

  function hasContextApi() {
    return (
      hasSdk() &&
      global.FBInstant.context &&
      typeof global.FBInstant.context.chooseAsync === 'function'
    );
  }

  function getContextId() {
    try {
      if (!hasSdk() || !global.FBInstant.context) return null;
      return global.FBInstant.context.getID() || null;
    } catch (e) {
      return null;
    }
  }

  function getContextType() {
    try {
      if (!hasSdk() || !global.FBInstant.context) return null;
      return global.FBInstant.context.getType
        ? global.FBInstant.context.getType()
        : null;
    } catch (e) {
      return null;
    }
  }

  function getEntryPointData() {
    try {
      if (!hasSdk() || typeof global.FBInstant.getEntryPointData !== 'function') {
        return null;
      }
      return global.FBInstant.getEntryPointData() || null;
    } catch (e) {
      return null;
    }
  }

  function normalizeCode(raw) {
    var s = String(raw || '').replace(/\D/g, '').slice(0, 4);
    return /^\d{4}$/.test(s) ? s : null;
  }

  function extractCodeFromData(data) {
    if (!data || typeof data !== 'object') return null;
    return (
      normalizeCode(data[DATA_KEY_CODE]) ||
      normalizeCode(data.pvpCode) ||
      normalizeCode(data.room) ||
      normalizeCode(data.hostId)
    );
  }

  function setFriendsMode(on) {
    try {
      if (on) localStorage.setItem(STORAGE_FRIENDS, '1');
      else localStorage.removeItem(STORAGE_FRIENDS);
    } catch (e) {}
  }

  function isFriendsMode() {
    try {
      return localStorage.getItem(STORAGE_FRIENDS) === '1';
    } catch (e) {
      return false;
    }
  }

  function setPendingJoinCode(code) {
    var c = normalizeCode(code);
    try {
      if (c) localStorage.setItem(STORAGE_PENDING_JOIN, c);
      else localStorage.removeItem(STORAGE_PENDING_JOIN);
    } catch (e) {}
    return c;
  }

  function getPendingJoinCode() {
    try {
      return normalizeCode(localStorage.getItem(STORAGE_PENDING_JOIN));
    } catch (e) {
      return null;
    }
  }

  function clearFriendsSession() {
    setFriendsMode(false);
    setPendingJoinCode(null);
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /** Compact JPEG for Meta (PNG ~270KB can break invite cards silently). */
  function buildInviteImage(roomCode) {
    try {
      var canvas = document.createElement('canvas');
      canvas.width = 480;
      canvas.height = 270;
      var ctx = canvas.getContext('2d');
      if (!ctx) return null;

      var g = ctx.createLinearGradient(0, 0, 480, 270);
      g.addColorStop(0, '#0b3a6e');
      g.addColorStop(1, '#071a32');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 480, 270);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Block Blast 1vs1', 240, 80);

      ctx.font = '22px sans-serif';
      ctx.fillStyle = 'rgba(232,244,255,0.9)';
      ctx.fillText('Play with me!', 240, 120);

      if (roomCode) {
        ctx.fillStyle = 'rgba(0,20,45,0.55)';
        roundRect(ctx, 110, 150, 260, 70, 14);
        ctx.fill();
        ctx.fillStyle = '#4db7ff';
        ctx.font = 'bold 42px monospace';
        ctx.fillText(String(roomCode), 240, 198);
      }

      var jpgUrl = canvas.toDataURL('image/jpeg', 0.82);
      var pngUrl = canvas.toDataURL('image/png');
      function splitRaw(url) {
        return url.indexOf('base64,') >= 0 ? url.split('base64,')[1] : url;
      }
      return {
        // Prefer JPEG for size; keep PNG as alt
        dataUrl: jpgUrl,
        raw: splitRaw(jpgUrl),
        jpgUrl: jpgUrl,
        jpgRaw: splitRaw(jpgUrl),
        pngUrl: pngUrl,
        pngRaw: splitRaw(pngUrl),
      };
    } catch (e) {
      console.warn('[FBInstant] invite image failed', e);
      return null;
    }
  }

  function errInfo(err) {
    if (!err) return 'unknown';
    if (typeof err === 'string') return err;
    try {
      return (
        (err.code || '') +
        ' ' +
        (err.message || '') +
        ' ' +
        JSON.stringify(err)
      ).trim();
    } catch (e) {
      return String(err.code || err.message || err);
    }
  }

  function playWithFriends() {
    if (!isInstant() || !hasContextApi()) {
      return Promise.reject(new Error('FB context API unavailable'));
    }

    // Prefer 1:1 Messenger thread (maxSize:2) — only THREAD gets chat via updateAsync
    var chooseOpts = { minSize: 2, maxSize: 2 };
    return global.FBInstant.context
      .chooseAsync(chooseOpts)
      .catch(function () {
        // Some clients reject size filters — fall back to default picker
        return global.FBInstant.context.chooseAsync();
      })
      .then(function () {
        setFriendsMode(true);
        setPendingJoinCode(null);
        var ctx = getContextId();
        var typ = getContextType();
        console.log('[FBInstant] friends context chosen:', ctx, 'type=', typ);
        if (!typ || String(typ).toUpperCase() !== 'THREAD') {
          console.warn(
            '[FBInstant] context is not THREAD (' +
              typ +
              ') — Messenger chat bubble may not post. Pick a 1:1 Messenger chat.',
          );
        }
        return { ok: true, contextId: ctx, role: 'host', contextType: typ };
      });
  }

  function consumeEntryInvite() {
    var data = getEntryPointData();
    var code = extractCodeFromData(data);
    if (!code) return null;

    setFriendsMode(true);
    setPendingJoinCode(code);
    try {
      localStorage.setItem('pvp_peer_host', code);
      localStorage.setItem('pvp_peer_role', 'guest');
    } catch (e) {}
    console.log('[FBInstant] friends invite entry → join code', code);
    return code;
  }

  function postContextUpdate(code, text, cta) {
    if (typeof global.FBInstant.updateAsync !== 'function') {
      return Promise.resolve(false);
    }
    var ctx = getContextId();
    var typ = getContextType();
    if (!ctx) {
      console.warn('[FBInstant] updateAsync skipped — no context id');
      return Promise.resolve(false);
    }

    var img = buildInviteImage(code);
    if (!img || !(img.jpgRaw || img.raw)) {
      console.warn('[FBInstant] updateAsync skipped — no invite image');
      return Promise.resolve(false);
    }

    // JPEG is smaller; updateAsync already worked with raw jpeg in THREAD contexts
    var imgPrimary = img.jpgRaw || img.raw;
    var imgAlt = img.jpgUrl || img.dataUrl;

    var payload = {
      action: 'CUSTOM',
      cta: cta || 'Play',
      image: imgPrimary,
      template: UPDATE_TEMPLATE,
      data: { pvp: 1, code: String(code) },
      text: { default: text, localizations: { en_US: text } },
      strategy: 'IMMEDIATE',
      notification: 'PUSH',
    };

    console.log(
      '[FBInstant] updateAsync… ctx=',
      ctx,
      'type=',
      typ,
      'img≈',
      imgPrimary.length,
    );

    return global.FBInstant
      .updateAsync(payload)
      .then(function () {
        console.log('[FBInstant] context update OK, code', code, 'ctx', ctx);
        return true;
      })
      .catch(function (err) {
        console.warn('[FBInstant] updateAsync failed:', errInfo(err));
        payload.image = imgAlt;
        payload.notification = 'NO_PUSH';
        return global.FBInstant
          .updateAsync(payload)
          .then(function () {
            console.log('[FBInstant] context update OK (dataUrl), code', code);
            return true;
          })
          .catch(function (err2) {
            console.warn('[FBInstant] updateAsync retry failed:', errInfo(err2));
            return false;
          });
      });
  }

  function openInviteDialog(code, text) {
    if (typeof global.FBInstant.inviteAsync !== 'function') {
      return Promise.resolve(false);
    }
    var img = buildInviteImage(code);
    if (!img || !img.raw) {
      console.warn('[FBInstant] inviteAsync skipped — no image (required)');
      return Promise.resolve(false);
    }

    var msg = String(text || 'Play Block Blast 1vs1 with me!');
    var dataObj = { pvp: 1, code: String(code) };
    // InvitePayload (web SDK): ONLY image, text, data — no dialogTitle/cta
    var locText = {
      default: msg,
      localizations: { en_US: msg },
    };

    var attempts = [
      // Exact Meta docs example shape
      { image: img.dataUrl, text: locText, data: dataObj },
      { image: img.raw, text: locText, data: dataObj },
      { image: img.jpgUrl, text: locText, data: dataObj },
      { image: img.jpgRaw, text: locText, data: dataObj },
      { image: img.dataUrl, text: msg, data: dataObj },
      { image: img.raw, text: msg, data: dataObj },
    ];

    function tryAt(i) {
      if (i >= attempts.length) return Promise.resolve(false);
      var body = attempts[i];
      console.log(
        '[FBInstant] inviteAsync attempt',
        i + 1,
        'imgLen=',
        String(body.image || '').length,
        'textType=',
        typeof body.text,
      );
      return global.FBInstant
        .inviteAsync(body)
        .then(function () {
          console.log('[FBInstant] inviteAsync done, code', code);
          return true;
        })
        .catch(function (err) {
          console.warn(
            '[FBInstant] inviteAsync attempt',
            i + 1,
            'failed:',
            errInfo(err),
          );
          return tryAt(i + 1);
        });
    }

    return tryAt(0);
  }

  function openShareDialog(code, text) {
    if (typeof global.FBInstant.shareAsync !== 'function') {
      return Promise.resolve(false);
    }
    var img = buildInviteImage(code);
    if (!img || !img.raw) return Promise.resolve(false);

    var msg = String(text || 'Play Block Blast 1vs1 with me!');
    var dataObj = { pvp: 1, code: String(code) };

    var attempts = [
      {
        intent: 'INVITE',
        image: img.dataUrl,
        text: msg,
        data: dataObj,
      },
      {
        intent: 'INVITE',
        image: img.raw,
        text: msg,
        data: dataObj,
      },
      {
        intent: 'SHARE',
        image: img.dataUrl,
        text: msg,
        data: dataObj,
      },
    ];

    function tryAt(i) {
      if (i >= attempts.length) return Promise.resolve(false);
      console.log('[FBInstant] shareAsync attempt', i + 1);
      return global.FBInstant
        .shareAsync(attempts[i])
        .then(function () {
          console.log('[FBInstant] shareAsync done, code', code);
          return true;
        })
        .catch(function (err) {
          console.warn(
            '[FBInstant] shareAsync attempt',
            i + 1,
            'failed:',
            errInfo(err),
          );
          return tryAt(i + 1);
        });
    }

    return tryAt(0);
  }

  /**
   * Messenger chat bubble = updateAsync in a THREAD (from chooseAsync).
   * inviteAsync "Play" only sends a game invite — it does NOT post chat text.
   */
  function shareRoomCode(roomCode, opts) {
    opts = opts || {};
    var code = normalizeCode(roomCode);
    if (!code) return Promise.resolve(false);
    if (!isInstant() || !hasSdk()) return Promise.resolve(false);

    var text =
      opts.text || 'Play Block Blast 1vs1 with me! Room code: ' + code;
    var wantInviteDialog = opts.openInvite === true;
    var typ = getContextType();
    var isThread = typ && String(typ).toUpperCase() === 'THREAD';

    console.log(
      '[FBInstant] shareRoomCode',
      code,
      'ctxType=',
      typ,
      'inviteDialog=',
      wantInviteDialog,
    );

    // 1) Always try THREAD chat update first (this is the Messenger message)
    return postContextUpdate(code, text, opts.cta || 'Play').then(function (
      updated,
    ) {
      if (!wantInviteDialog) {
        if (!updated && !isThread) {
          console.warn(
            '[FBInstant] no chat posted — need a Messenger THREAD from Play with Friends',
          );
        }
        return !!updated;
      }

      // 2) Optional mass-invite dialog (Play ≠ chat; attaches entryPointData)
      return openInviteDialog(code, text).then(function (invited) {
        // Re-post update in case invite switched context (usually it does not)
        return postContextUpdate(code, text, opts.cta || 'Play').then(function (
          updated2,
        ) {
          if (invited || updated || updated2) return true;
          return openShareDialog(code, text);
        });
      });
    });
  }

  function resolveAutoRole() {
    var join = getPendingJoinCode();
    if (join) {
      return { role: 'guest', hostId: join, friends: true };
    }
    if (isFriendsMode()) {
      return { role: 'host', hostId: null, friends: true };
    }
    return null;
  }

  global.FBInstantFriends = {
    hasContextApi: hasContextApi,
    playWithFriends: playWithFriends,
    consumeEntryInvite: consumeEntryInvite,
    shareRoomCode: shareRoomCode,
    resolveAutoRole: resolveAutoRole,
    isFriendsMode: isFriendsMode,
    getPendingJoinCode: getPendingJoinCode,
    clearFriendsSession: clearFriendsSession,
    getContextId: getContextId,
    getEntryPointData: getEntryPointData,
  };

  if (typeof global.__pvpPendingFriendsHook === 'function') {
    global.FBInstantFriends._onInviteJoin = global.__pvpPendingFriendsHook;
  }
})(typeof window !== 'undefined' ? window : this);
