/**
 * PeerJS room Create / Join HTML UI (replaces window.prompt).
 * Font: font/Use Font.ttf
 */
(function () {
  'use strict';

  var STYLE_ID = 'pvp-room-ui-style';
  var ROOT_ID = 'pvp-room-ui-root';

  function ensureStyle() {
    var cssText =
      '@font-face{font-family:"PvpUseFont";src:url("font/Use Font.ttf") format("truetype");font-weight:400;font-style:normal;font-display:swap;}' +
      '#' +
      ROOT_ID +
      '{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;font-family:"PvpUseFont",sans-serif;-webkit-font-smoothing:antialiased;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-backdrop{position:absolute;inset:0;background:rgba(4,18,42,.72);backdrop-filter:blur(6px);}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-card{position:relative;width:min(420px,100%);border-radius:22px;padding:28px 24px 22px;background:linear-gradient(165deg,#0b3a6e 0%,#0a2748 48%,#071a32 100%);border:1px solid rgba(120,190,255,.28);box-shadow:0 18px 50px rgba(0,0,0,.45);color:#e8f4ff;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-title{margin:0 0 6px;font-size:28px;letter-spacing:.02em;text-align:center;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-sub{margin:0 0 22px;font-size:14px;line-height:1.35;opacity:.78;text-align:center;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-actions{display:flex;flex-direction:column;gap:12px;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-btn{appearance:none;border:0;border-radius:999px;padding:14px 18px;font:inherit;font-size:18px;cursor:pointer;transition:transform .12s ease,opacity .12s ease,background .12s ease;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-btn:active{transform:scale(.98);}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-btn-primary{background:linear-gradient(180deg,#4db7ff,#1f7fd6);color:#04233f;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-btn-secondary{background:rgba(255,255,255,.1);color:#e8f4ff;border:1px solid rgba(170,210,255,.25);}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-btn-bot{background:linear-gradient(180deg,#6ee7a0,#2f9e5f);color:#062816;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-btn-ghost{background:transparent;color:rgba(232,244,255,.7);font-size:15px;padding:8px;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-field{display:none;flex-direction:column;gap:10px;margin-top:4px;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-field.is-open{display:flex;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-input{width:100%;box-sizing:border-box;border-radius:14px;border:1px solid rgba(150,200,255,.35);background:rgba(0,20,45,.45);color:#fff;padding:13px 14px;font:inherit;font-size:22px;letter-spacing:0.35em;text-align:center;outline:none;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-input::placeholder{color:rgba(220,235,255,.45);letter-spacing:0.08em;text-align:center;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-idbox{margin:8px 0 14px;padding:14px;border-radius:14px;background:rgba(0,20,45,.5);border:1px dashed rgba(140,200,255,.4);word-break:break-all;text-align:center;font-size:15px;line-height:1.4;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-row{display:flex;gap:10px;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-row .pvp-room-btn{flex:1;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-hint{margin:10px 0 0;font-size:13px;opacity:.7;text-align:center;line-height:1.35;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-error{margin:0 0 12px;padding:10px 12px;border-radius:12px;background:rgba(180,40,50,.35);border:1px solid rgba(255,120,120,.45);color:#ffd4d4;font-size:14px;text-align:center;line-height:1.35;display:none;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-error.is-on{display:block;}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-input.is-bad{border-color:rgba(255,120,120,.7);background:rgba(80,10,20,.4);}' +
      '#' +
      ROOT_ID +
      ' .pvp-room-toast{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);background:rgba(20,60,110,.95);border:1px solid rgba(140,200,255,.35);padding:8px 14px;border-radius:999px;font-size:13px;opacity:0;pointer-events:none;transition:opacity .2s ease;}';
    var css = document.getElementById(STYLE_ID);
    if (css) {
      css.textContent = cssText;
      return;
    }
    css = document.createElement('style');
    css.id = STYLE_ID;
    css.textContent = cssText;
    document.head.appendChild(css);
  }

  function removeRoot() {
    var el = document.getElementById(ROOT_ID);
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showToast(root, text) {
    var toast = root.querySelector('.pvp-room-toast');
    if (!toast) return;
    toast.textContent = text;
    toast.style.opacity = '1';
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.style.opacity = '0';
    }, 1600);
  }

  function chooseMode() {
    ensureStyle();
    removeRoot();
    return new Promise(function (resolve) {
      var root = document.createElement('div');
      root.id = ROOT_ID;
      root.innerHTML =
        '<div class="pvp-room-backdrop" data-act="cancel"></div>' +
        '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
        '<h2 class="pvp-room-title">PvP</h2>' +
        '<p class="pvp-room-sub">Choose Online (PeerJS) or Bot (offline)</p>' +
        '<div class="pvp-room-actions">' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="online">Online</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-bot" data-act="bot">Bot</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-ghost" data-act="cancel">Cancel</button>' +
        '</div>' +
        '<div class="pvp-room-toast"></div>' +
        '</div>';
      document.body.appendChild(root);

      var done = false;
      function finish(result) {
        if (done) return;
        done = true;
        removeRoot();
        resolve(result);
      }

      root.addEventListener('click', function (ev) {
        var act = ev.target && ev.target.getAttribute('data-act');
        if (!act) return;
        if ('cancel' === act) {
          finish({ cancelled: true });
          return;
        }
        if ('online' === act) {
          finish({ mode: 'online' });
          return;
        }
        if ('bot' === act) {
          finish({ mode: 'bot' });
        }
      });
    });
  }

  function chooseRole(errorMsg) {
    ensureStyle();
    removeRoot();
    var last = '';
    try {
      last = localStorage.getItem('pvp_peer_host') || '';
    } catch (e) {}
    var errText = errorMsg ? String(errorMsg) : '';

    return new Promise(function (resolve) {
      var root = document.createElement('div');
      root.id = ROOT_ID;
      root.innerHTML =
        '<div class="pvp-room-backdrop" data-act="cancel"></div>' +
        '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
        '<h2 class="pvp-room-title">PvP Room</h2>' +
        '<p class="pvp-room-sub">Create a room or join with a 4-digit code</p>' +
        '<div class="pvp-room-error' +
        (errText ? ' is-on' : '') +
        '" id="pvp-room-error">' +
        (errText || '') +
        '</div>' +
        '<div class="pvp-room-actions">' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="create">Create Room</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-secondary" data-act="show-join">Join Room</button>' +
        '<div class="pvp-room-field' +
        (errText ? ' is-open' : '') +
        '" id="pvp-room-join-field">' +
        '<input class="pvp-room-input' +
        (errText ? ' is-bad' : '') +
        '" id="pvp-room-host-input" type="tel" inputmode="numeric" maxlength="4" autocomplete="off" spellcheck="false" placeholder="4-digit code" value="' +
        String(last)
          .replace(/\D/g, '')
          .slice(0, 4)
          .replace(/"/g, '&quot;') +
        '" />' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="join">Join</button>' +
        '</div>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-ghost" data-act="cancel">Cancel</button>' +
        '</div>' +
        '<div class="pvp-room-toast"></div>' +
        '</div>';
      document.body.appendChild(root);

      var joinField = root.querySelector('#pvp-room-join-field');
      var input = root.querySelector('#pvp-room-host-input');
      var errEl = root.querySelector('#pvp-room-error');
      var done = false;

      function clearError() {
        if (errEl) {
          errEl.classList.remove('is-on');
          errEl.textContent = '';
        }
        if (input) input.classList.remove('is-bad');
      }

      function showError(text) {
        if (errEl) {
          errEl.textContent = text;
          errEl.classList.add('is-on');
        }
        if (input) input.classList.add('is-bad');
        showToast(root, text);
      }

      function finish(result) {
        if (done) return;
        done = true;
        removeRoot();
        resolve(result);
      }

      root.addEventListener('click', function (ev) {
        var act = ev.target && ev.target.getAttribute('data-act');
        if (!act) return;
        if ('cancel' === act) {
          try {
            window.__pvpClearPlayBot && window.__pvpClearPlayBot();
          } catch (e) {}
          finish({ cancelled: true });
          return;
        }
        if ('create' === act) {
          try {
            window.__pvpClearPlayBot && window.__pvpClearPlayBot();
          } catch (e) {}
          finish({ role: 'host', hostId: null });
          return;
        }
        if ('show-join' === act) {
          joinField.classList.add('is-open');
          setTimeout(function () {
            input && input.focus();
            input && input.select && input.select();
          }, 30);
          return;
        }
        if ('join' === act) {
          var id = (input && input.value ? input.value : '')
            .replace(/\D/g, '')
            .slice(0, 4);
          if (input) input.value = id;
          if (!/^\d{4}$/.test(id)) {
            showError('Enter 4-digit code');
            input && input.focus();
            return;
          }
          clearError();
          try {
            window.__pvpClearPlayBot && window.__pvpClearPlayBot();
          } catch (e) {}
          finish({ role: 'guest', hostId: id });
        }
      });

      if (input) {
        input.addEventListener('input', function () {
          input.value = String(input.value || '')
            .replace(/\D/g, '')
            .slice(0, 4);
          clearError();
        });
        input.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter') {
            var btn = root.querySelector('[data-act="join"]');
            btn && btn.click();
          }
        });
      }

      if (errText) {
        showToast(root, errText);
        setTimeout(function () {
          input && input.focus();
          input && input.select && input.select();
        }, 40);
      }
    });
  }

  function showHostId(peerId) {
    ensureStyle();
    removeRoot();
    var root = document.createElement('div');
    root.id = ROOT_ID;
    root.innerHTML =
      '<div class="pvp-room-backdrop" data-act="ok"></div>' +
      '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
      '<h2 class="pvp-room-title">Room Code</h2>' +
      '<p class="pvp-room-sub">Share this 4-digit code with your guest</p>' +
      '<div class="pvp-room-idbox" id="pvp-room-host-id" style="font-size:36px;letter-spacing:0.35em;font-weight:700;">' +
      String(peerId || '') +
      '</div>' +
      '<div class="pvp-room-row">' +
      '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="copy">Copy Code</button>' +
      '<button type="button" class="pvp-room-btn pvp-room-btn-secondary" data-act="ok">OK</button>' +
      '</div>' +
      '<p class="pvp-room-hint">After Guest joins, both press Match</p>' +
      '<div class="pvp-room-toast"></div>' +
      '</div>';
    document.body.appendChild(root);

    root.addEventListener('click', function (ev) {
      var act = ev.target && ev.target.getAttribute('data-act');
      if ('ok' === act) {
        removeRoot();
        return;
      }
      if ('copy' === act) {
        var text = String(peerId || '');
        var done = function () {
          showToast(root, 'Copied');
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () {
            fallbackCopy(text);
            done();
          });
        } else {
          fallbackCopy(text);
          done();
        }
      }
    });

    // Auto-hide when guest joins
    var poll = setInterval(function () {
      var sync = window.__pvpPeerSync;
      if (sync && sync.role === 'host' && sync.guestUid && sync.connReady) {
        clearInterval(poll);
        showToast(root, 'Guest joined');
        setTimeout(removeRoot, 700);
      }
    }, 400);
    setTimeout(function () {
      clearInterval(poll);
    }, 120000);
  }

  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (e) {}
  }

  function hide() {
    removeRoot();
  }

  function goHome() {
    hide();
    try {
      if (!window.__pvpSwitchingToBot) {
        window.__pvpClearPlayBot && window.__pvpClearPlayBot();
      }
    } catch (e) {}
    try {
      if (window.__pvpPeerDisconnect) {
        window.__pvpPeerDisconnect({ reason: 'home', immediate: true });
      } else if (window.__pvpPeerSync) {
        window.__pvpPeerSync = null;
      }
    } catch (e) {}
    try {
      localStorage.removeItem('pvp_peer_role');
    } catch (e) {}
    try {
      if (window.cc && cc.director) {
        // Same destination as in-game Settings → Home
        cc.director.loadScene('StartGameScene2');
        return;
      }
    } catch (e) {
      console.warn('[pvp-room-ui] goHome loadScene failed', e);
    }
  }

  window.__pvpGoHome = goHome;

  window.__pvpRoomUI = {
    chooseMode: chooseMode,
    chooseRole: chooseRole,
    showHostId: showHostId,
    hide: hide,
    goHome: goHome,
  };
})();
