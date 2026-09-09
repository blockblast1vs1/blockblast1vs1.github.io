/**
 * PeerJS room Create / Join HTML UI (replaces window.prompt).
 * Font: font/Use Font.ttf
 */
(function () {
  "use strict";

  var STYLE_ID = "pvp-room-ui-style";
  var ROOT_ID = "pvp-room-ui-root";

  function ensureStyle() {
    var cssText =
      '@font-face{font-family:"PvpUseFont";src:url("font/Use Font.ttf") format("truetype");font-weight:400;font-style:normal;font-display:swap;}' +
      "#" +
      ROOT_ID +
      '{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;font-family:"PvpUseFont",sans-serif;-webkit-font-smoothing:antialiased;}' +
      "#" +
      ROOT_ID +
      " .pvp-room-backdrop{position:absolute;inset:0;background:rgba(4,18,42,.72);backdrop-filter:blur(6px);}" +
      "#" +
      ROOT_ID +
      " .pvp-room-card{position:relative;width:min(420px,100%);border-radius:22px;padding:28px 24px 22px;background:linear-gradient(165deg,#0b3a6e 0%,#0a2748 48%,#071a32 100%);border:1px solid rgba(120,190,255,.28);box-shadow:0 18px 50px rgba(0,0,0,.45);color:#e8f4ff;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-title{margin:0 0 6px;font-size:28px;letter-spacing:.02em;text-align:center;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-sub{margin:0 0 22px;font-size:14px;line-height:1.35;opacity:.78;text-align:center;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-actions{display:flex;flex-direction:column;gap:12px;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn{appearance:none;border:0;border-radius:999px;padding:14px 18px;font:inherit;font-size:18px;cursor:pointer;transition:transform .12s ease,opacity .12s ease,background .12s ease;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn:active{transform:scale(.98);}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn-primary{background:linear-gradient(180deg,#4db7ff,#1f7fd6);color:#04233f;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn-secondary{background:rgba(255,255,255,.1);color:#e8f4ff;border:1px solid rgba(170,210,255,.25);}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn-bot{background:linear-gradient(180deg,#6ee7a0,#2f9e5f);color:#062816;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn-friends{background:linear-gradient(180deg,#7aa7ff,#3b5bdb);color:#f4f7ff;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn-ghost{background:transparent;color:rgba(232,244,255,.7);font-size:15px;padding:8px;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-btn:disabled{opacity:.55;cursor:wait;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-field{display:none;flex-direction:column;gap:10px;margin-top:4px;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-field.is-open{display:flex;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-input{width:100%;box-sizing:border-box;border-radius:14px;border:1px solid rgba(150,200,255,.35);background:rgba(0,20,45,.45);color:#fff;padding:13px 14px;font:inherit;font-size:22px;letter-spacing:0.35em;text-align:center;outline:none;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-input::placeholder{color:rgba(220,235,255,.45);letter-spacing:0.08em;text-align:center;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-idbox{margin:8px 0 14px;padding:14px;border-radius:14px;background:rgba(0,20,45,.5);border:1px dashed rgba(140,200,255,.4);word-break:break-all;text-align:center;font-size:15px;line-height:1.4;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-row{display:flex;gap:10px;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-row .pvp-room-btn{flex:1;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-hint{margin:10px 0 0;font-size:13px;opacity:.7;text-align:center;line-height:1.35;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-error{margin:0 0 12px;padding:10px 12px;border-radius:12px;background:rgba(180,40,50,.35);border:1px solid rgba(255,120,120,.45);color:#ffd4d4;font-size:14px;text-align:center;line-height:1.35;display:none;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-error.is-on{display:block;}" +
      "#" +
      ROOT_ID +
      " .pvp-room-input.is-bad{border-color:rgba(255,120,120,.7);background:rgba(80,10,20,.4);}" +
      "#" +
      ROOT_ID +
      " .pvp-room-toast{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);background:rgba(20,60,110,.95);border:1px solid rgba(140,200,255,.35);padding:8px 14px;border-radius:999px;font-size:13px;opacity:0;pointer-events:none;transition:opacity .2s ease;}";
    var css = document.getElementById(STYLE_ID);
    if (css) {
      css.textContent = cssText;
      return;
    }
    css = document.createElement("style");
    css.id = STYLE_ID;
    css.textContent = cssText;
    document.head.appendChild(css);
  }

  function removeRoot() {
    var el = document.getElementById(ROOT_ID);
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showToast(root, text) {
    var toast = root.querySelector(".pvp-room-toast");
    if (!toast) return;
    toast.textContent = text;
    toast.style.opacity = "1";
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.style.opacity = "0";
    }, 1600);
  }

  function friendsAvailable() {
    var f = window.FBInstantFriends;
    var b = window.FBInstantBridge;
    return !!(
      f &&
      typeof f.hasContextApi === "function" &&
      f.hasContextApi() &&
      b &&
      typeof b.isInstant === "function" &&
      b.isInstant()
    );
  }

  function isFacebookInstant() {
    var b = window.FBInstantBridge;
    return !!(b && typeof b.isInstant === "function" && b.isInstant());
  }

  function chooseMode() {
    ensureStyle();
    removeRoot();
    return new Promise(function (resolve) {
      var canRandom =
        window.PvpRandomMatch &&
        typeof window.PvpRandomMatch.findMatch === "function" &&
        typeof window.PvpRandomMatch.matchUrl === "function" &&
        !!window.PvpRandomMatch.matchUrl();

      var root = document.createElement("div");
      root.id = ROOT_ID;
      root.innerHTML =
        '<div class="pvp-room-backdrop" data-act="cancel"></div>' +
        '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
        '<h2 class="pvp-room-title">PvP</h2>' +
        '<p class="pvp-room-sub">Random Match, Online room, or Bot</p>' +
        '<div class="pvp-room-actions">' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-friends" data-act="random"' +
        (canRandom ? "" : ' disabled style="opacity:0.55"') +
        ">Random Match</button>" +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="online">Online</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-bot" data-act="bot">Bot</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-ghost" data-act="cancel">Cancel</button>' +
        "</div>" +
        (!canRandom
          ? '<p class="pvp-room-hint">Random Match needs __PVP_SOCKET_URL (Northflank)</p>'
          : "") +
        '<div class="pvp-room-toast"></div>' +
        "</div>";
      document.body.appendChild(root);

      var done = false;
      function finish(result) {
        if (done) return;
        done = true;
        removeRoot();
        resolve(result);
      }

      root.addEventListener("click", function (ev) {
        var act = ev.target && ev.target.getAttribute("data-act");
        if (!act) return;
        if ("cancel" === act) {
          finish({ cancelled: true });
          return;
        }
        if ("random" === act) {
          if (!canRandom) {
            showToast(root, "Set __PVP_SOCKET_URL first");
            return;
          }
          try {
            window.FBInstantFriends &&
              window.FBInstantFriends.clearFriendsSession &&
              window.FBInstantFriends.clearFriendsSession();
          } catch (e) {}
          finish({ mode: "random" });
          return;
        }
        if ("online" === act) {
          try {
            window.PvpRandomMatch &&
              window.PvpRandomMatch.clearMatchResult &&
              window.PvpRandomMatch.clearMatchResult();
          } catch (e) {}
          try {
            window.FBInstantFriends &&
              window.FBInstantFriends.clearFriendsSession &&
              window.FBInstantFriends.clearFriendsSession();
          } catch (e) {}
          finish({ mode: "online" });
          return;
        }
        if ("bot" === act) {
          try {
            window.PvpRandomMatch &&
              window.PvpRandomMatch.clearMatchResult &&
              window.PvpRandomMatch.clearMatchResult();
          } catch (e) {}
          try {
            window.FBInstantFriends &&
              window.FBInstantFriends.clearFriendsSession &&
              window.FBInstantFriends.clearFriendsSession();
          } catch (e) {}
          finish({ mode: "bot" });
        }
      });
    });
  }

  function chooseRole(errorMsg) {
    // Random Match pending: show original MatchWaitingUI + match server, then auto role
    if (
      window.__pvpRandomPending &&
      window.PvpRandomMatch &&
      typeof window.PvpRandomMatch.runPendingMatchForRole === "function"
    ) {
      console.log(
        "[pvp-room-ui] random pending → native MatchWaitingUI + match",
      );
      return window.PvpRandomMatch.runPendingMatchForRole()
        .then(function (role) {
          if (!role || !role.role) {
            throw new Error("match failed");
          }
          console.log(
            "[pvp-room-ui] random auto role",
            role.role,
            role.hostId || "",
          );
          return role;
        })
        .catch(function (err) {
          console.warn("[pvp-room-ui] random match failed", err);
          try {
            window.PvpRandomMatch.clearMatchResult &&
              window.PvpRandomMatch.clearMatchResult();
          } catch (e) {}
          // Red Cancel: stay in PvP as silent host (no Room Code UI).
          // Match → MatchWaitingUI again.
          if (err && err.message === "cancelled") {
            console.log("[pvp-room-ui] random cancelled → silent host lobby");
            window.__pvpSkipHostRoomUi = true;
            window.__pvpHostUiSilent = true;
            return { role: "host", hostId: null };
          }
          var msg =
            err && err.message === "timeout"
              ? "No opponent found"
              : "Match failed";
          try {
            alert(msg);
          } catch (e2) {}
          try {
            window.__pvpGoHome && window.__pvpGoHome();
          } catch (e3) {}
          return { cancelled: true };
        });
    }

    // Already matched (legacy path) / Friends: skip Create/Join UI
    try {
      var randomAuto =
        window.PvpRandomMatch &&
        typeof window.PvpRandomMatch.resolveAutoRole === "function"
          ? window.PvpRandomMatch.resolveAutoRole()
          : null;
      if (randomAuto && randomAuto.role) {
        console.log(
          "[pvp-room-ui] random auto role",
          randomAuto.role,
          randomAuto.hostId || "",
        );
        return Promise.resolve(randomAuto);
      }
    } catch (e) {}

    try {
      var auto =
        window.FBInstantFriends &&
        typeof window.FBInstantFriends.resolveAutoRole === "function"
          ? window.FBInstantFriends.resolveAutoRole()
          : null;
      if (auto && auto.role) {
        console.log(
          "[pvp-room-ui] friends auto role",
          auto.role,
          auto.hostId || "",
        );
        return Promise.resolve(auto);
      }
    } catch (e) {}

    ensureStyle();
    removeRoot();
    var last = "";
    try {
      last = localStorage.getItem("pvp_peer_host") || "";
    } catch (e) {}
    var errText = errorMsg ? String(errorMsg) : "";

    return new Promise(function (resolve) {
      var root = document.createElement("div");
      root.id = ROOT_ID;
      root.innerHTML =
        '<div class="pvp-room-backdrop" data-act="cancel"></div>' +
        '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
        '<h2 class="pvp-room-title">PvP Room</h2>' +
        '<p class="pvp-room-sub">Create a room or join with a 4-digit code</p>' +
        '<div class="pvp-room-error' +
        (errText ? " is-on" : "") +
        '" id="pvp-room-error">' +
        (errText || "") +
        "</div>" +
        '<div class="pvp-room-actions">' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="create">Create Room</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-secondary" data-act="show-join">Join Room</button>' +
        '<div class="pvp-room-field' +
        (errText ? " is-open" : "") +
        '" id="pvp-room-join-field">' +
        '<input class="pvp-room-input' +
        (errText ? " is-bad" : "") +
        '" id="pvp-room-host-input" type="tel" inputmode="numeric" maxlength="4" autocomplete="off" spellcheck="false" placeholder="4-digit code" value="' +
        String(last).replace(/\D/g, "").slice(0, 4).replace(/"/g, "&quot;") +
        '" />' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="join">Join</button>' +
        "</div>" +
        '<button type="button" class="pvp-room-btn pvp-room-btn-ghost" data-act="cancel">Cancel</button>' +
        "</div>" +
        '<div class="pvp-room-toast"></div>' +
        "</div>";
      document.body.appendChild(root);

      var joinField = root.querySelector("#pvp-room-join-field");
      var input = root.querySelector("#pvp-room-host-input");
      var errEl = root.querySelector("#pvp-room-error");
      var done = false;

      function clearError() {
        if (errEl) {
          errEl.classList.remove("is-on");
          errEl.textContent = "";
        }
        if (input) input.classList.remove("is-bad");
      }

      function showError(text) {
        if (errEl) {
          errEl.textContent = text;
          errEl.classList.add("is-on");
        }
        if (input) input.classList.add("is-bad");
        showToast(root, text);
      }

      function finish(result) {
        if (done) return;
        done = true;
        removeRoot();
        resolve(result);
      }

      root.addEventListener("click", function (ev) {
        var act = ev.target && ev.target.getAttribute("data-act");
        if (!act) return;
        if ("cancel" === act) {
          try {
            window.__pvpClearPlayBot && window.__pvpClearPlayBot();
          } catch (e) {}
          finish({ cancelled: true });
          return;
        }
        if ("create" === act) {
          try {
            window.__pvpClearPlayBot && window.__pvpClearPlayBot();
          } catch (e) {}
          finish({ role: "host", hostId: null });
          return;
        }
        if ("show-join" === act) {
          joinField.classList.add("is-open");
          setTimeout(function () {
            input && input.focus();
            input && input.select && input.select();
          }, 30);
          return;
        }
        if ("join" === act) {
          var id = (input && input.value ? input.value : "")
            .replace(/\D/g, "")
            .slice(0, 4);
          if (input) input.value = id;
          if (!/^\d{4}$/.test(id)) {
            showError("Enter 4-digit code");
            input && input.focus();
            return;
          }
          clearError();
          try {
            window.__pvpClearPlayBot && window.__pvpClearPlayBot();
          } catch (e) {}
          finish({ role: "guest", hostId: id });
        }
      });

      if (input) {
        input.addEventListener("input", function () {
          input.value = String(input.value || "")
            .replace(/\D/g, "")
            .slice(0, 4);
          clearError();
        });
        input.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter") {
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
    // Cancel after Random Match: stay host, no Room Code / invite popup
    if (window.__pvpHostUiSilent) {
      window.__pvpHostUiSilent = false;
      window.__pvpSkipHostRoomUi = false;
      removeRoot();
      console.log("[pvp-room-ui] silent host after cancel, code", peerId);
      return;
    }
    // Random Match: skip Create-room share UI (opponent already paired)
    if (window.__pvpSkipHostRoomUi) {
      window.__pvpSkipHostRoomUi = false;
      console.log("[pvp-room-ui] random host ready, code", peerId);
      removeRoot();
      var toastRoot = document.createElement("div");
      toastRoot.id = ROOT_ID;
      toastRoot.innerHTML =
        '<div class="pvp-room-backdrop" data-act="ok"></div>' +
        '<div class="pvp-room-card" role="dialog">' +
        '<h2 class="pvp-room-title">Opponent Found</h2>' +
        '<p class="pvp-room-sub">Waiting for guest to connect…</p>' +
        '<div class="pvp-room-idbox" style="font-size:28px;letter-spacing:0.2em;font-weight:700;">' +
        String(peerId || "") +
        "</div>" +
        '<div class="pvp-room-actions">' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="ok">OK</button>' +
        "</div></div>";
      document.body.appendChild(toastRoot);
      toastRoot.addEventListener("click", function (ev) {
        if (ev.target && ev.target.getAttribute("data-act") === "ok")
          removeRoot();
      });
      var poll = setInterval(function () {
        var sync = window.__pvpPeerSync;
        if (sync && sync.role === "host" && sync.guestUid && sync.connReady) {
          clearInterval(poll);
          removeRoot();
        }
      }, 400);
      setTimeout(function () {
        clearInterval(poll);
        removeRoot();
      }, 12000);
      return;
    }

    removeRoot();
    // Invite button after Create Room whenever FB Instant friends APIs exist
    var canInvite = friendsAvailable();

    function resetInviteBtn(inviteBtn) {
      if (!inviteBtn) return;
      inviteBtn.disabled = false;
      inviteBtn.textContent = "Invite more friends";
    }

    function runInviteFlow(root, inviteBtn) {
      var f = window.FBInstantFriends;
      if (!f || typeof f.shareRoomCode !== "function") {
        root.style.display = "";
        showToast(root, "Invite unavailable");
        resetInviteBtn(inviteBtn);
        return;
      }

      // 1) Pick Messenger friend (THREAD), 2) post room code / invite dialog
      var pick =
        typeof f.playWithFriends === "function"
          ? f.playWithFriends().catch(function (err) {
              console.warn("[pvp-room-ui] choose friend failed", err);
              return null;
            })
          : Promise.resolve(null);

      pick
        .then(function () {
          return f.shareRoomCode(peerId, { openInvite: true });
        })
        .then(function (ok) {
          root.style.display = "";
          showToast(root, ok ? "Invite sent / shared" : "Invite cancelled");
          resetInviteBtn(inviteBtn);
        })
        .catch(function () {
          root.style.display = "";
          showToast(root, "Invite cancelled");
          resetInviteBtn(inviteBtn);
        });
    }

    function mountUi(statusMsg) {
      removeRoot();
      var root = document.createElement("div");
      root.id = ROOT_ID;
      root.innerHTML =
        '<div class="pvp-room-backdrop" data-act="ok"></div>' +
        '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
        '<h2 class="pvp-room-title">Room Code</h2>' +
        '<p class="pvp-room-sub">' +
        (canInvite
          ? "Share this code, or invite a Facebook friend"
          : "Share this 4-digit code with your guest") +
        "</p>" +
        '<div class="pvp-room-idbox" id="pvp-room-host-id" style="font-size:36px;letter-spacing:0.35em;font-weight:700;">' +
        String(peerId || "") +
        "</div>" +
        '<div class="pvp-room-actions">' +
        (canInvite
          ? '<button type="button" class="pvp-room-btn pvp-room-btn-friends" data-act="invite">Invite more friends</button>'
          : "") +
        '<div class="pvp-room-row">' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="copy">Copy</button>' +
        '<button type="button" class="pvp-room-btn pvp-room-btn-secondary" data-act="ok">OK</button>' +
        "</div>" +
        "</div>" +
        '<p class="pvp-room-hint">After Guest joins, both press Match</p>' +
        '<div class="pvp-room-toast"></div>' +
        "</div>";
      document.body.appendChild(root);

      if (statusMsg) showToast(root, statusMsg);

      root.addEventListener("click", function (ev) {
        var act = ev.target && ev.target.getAttribute("data-act");
        if ("ok" === act) {
          removeRoot();
          return;
        }
        if ("invite" === act) {
          var inviteBtn = root.querySelector('[data-act="invite"]');
          if (inviteBtn) {
            inviteBtn.disabled = true;
            inviteBtn.textContent = "Opening…";
          }
          root.style.display = "none";
          runInviteFlow(root, inviteBtn);
          return;
        }
        if ("copy" === act) {
          var text = String(peerId || "");
          var done = function () {
            showToast(root, "Copied");
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
              .writeText(text)
              .then(done)
              .catch(function () {
                fallbackCopy(text);
                done();
              });
          } else {
            fallbackCopy(text);
            done();
          }
        }
      });

      var poll = setInterval(function () {
        var sync = window.__pvpPeerSync;
        if (sync && sync.role === "host" && sync.guestUid && sync.connReady) {
          clearInterval(poll);
          // Full message handled by showHostGuestJoined from PeerJS hello
          showToast(root, "Guest joined");
          setTimeout(removeRoot, 500);
        }
      }, 400);
      setTimeout(function () {
        clearInterval(poll);
      }, 120000);
    }

    // Always show room UI first; invite is user-triggered via button
    mountUi();
  }

  /** Guest successfully joined host room — show confirmation message. */
  function showGuestJoined(roomCode) {
    ensureStyle();
    removeRoot();
    var code = String(roomCode || "")
      .replace(/\D/g, "")
      .slice(0, 4);
    try {
      if (!code)
        code = (localStorage.getItem("pvp_peer_host") || "")
          .replace(/\D/g, "")
          .slice(0, 4);
    } catch (e) {}

    var root = document.createElement("div");
    root.id = ROOT_ID;
    root.innerHTML =
      '<div class="pvp-room-backdrop" data-act="ok"></div>' +
      '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
      '<h2 class="pvp-room-title">Joined Room</h2>' +
      '<p class="pvp-room-sub">You are in the room. Wait for host, then both press Match.</p>' +
      (code
        ? '<div class="pvp-room-idbox" style="font-size:36px;letter-spacing:0.35em;font-weight:700;">' +
          code +
          "</div>"
        : "") +
      '<div class="pvp-room-actions">' +
      '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="ok">OK</button>' +
      "</div>" +
      '<p class="pvp-room-hint">Connected to host</p>' +
      '<div class="pvp-room-toast"></div>' +
      "</div>";
    document.body.appendChild(root);
    showToast(root, "Joined successfully");

    root.addEventListener("click", function (ev) {
      var act = ev.target && ev.target.getAttribute("data-act");
      if ("ok" === act) removeRoot();
    });

    // Auto-dismiss after a few seconds so Match is not blocked
    setTimeout(function () {
      var el = document.getElementById(ROOT_ID);
      if (el === root) removeRoot();
    }, 4500);
  }

  /** Host side: guest connected — show message (even if room-code UI was closed). */
  function showHostGuestJoined(guestName) {
    ensureStyle();
    removeRoot();
    var name = String(guestName || "Guest");
    var root = document.createElement("div");
    root.id = ROOT_ID;
    root.innerHTML =
      '<div class="pvp-room-backdrop" data-act="ok"></div>' +
      '<div class="pvp-room-card" role="dialog" aria-modal="true">' +
      '<h2 class="pvp-room-title">Guest Joined</h2>' +
      '<p class="pvp-room-sub"><b>' +
      name.replace(/[<>&]/g, "") +
      "</b> entered the room. Both press Match when ready.</p>" +
      '<div class="pvp-room-actions">' +
      '<button type="button" class="pvp-room-btn pvp-room-btn-primary" data-act="ok">OK</button>' +
      "</div>" +
      '<p class="pvp-room-hint">2P ready</p>' +
      '<div class="pvp-room-toast"></div>' +
      "</div>";
    document.body.appendChild(root);
    showToast(root, "Guest connected");

    root.addEventListener("click", function (ev) {
      var act = ev.target && ev.target.getAttribute("data-act");
      if ("ok" === act) removeRoot();
    });

    setTimeout(function () {
      var el = document.getElementById(ROOT_ID);
      if (el === root) removeRoot();
    }, 4500);
  }

  function fallbackCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } catch (e) {}
  }

  function hide() {
    removeRoot();
  }

  function goHome() {
    hide();
    try {
      window.__pvpGuestJoinedMsgShown = false;
      window.__pvpHostGuestMsgShown = false;
    } catch (e) {}
    try {
      if (!window.__pvpSwitchingToBot) {
        window.__pvpClearPlayBot && window.__pvpClearPlayBot();
      }
    } catch (e) {}
    try {
      if (window.__pvpPeerDisconnect) {
        window.__pvpPeerDisconnect({ reason: "home", immediate: true });
      } else if (window.__pvpPeerSync) {
        window.__pvpPeerSync = null;
      }
    } catch (e) {}
    try {
      localStorage.removeItem("pvp_peer_role");
    } catch (e) {}
    try {
      window.FBInstantFriends &&
        window.FBInstantFriends.clearFriendsSession &&
        window.FBInstantFriends.clearFriendsSession();
    } catch (e) {}
    try {
      showHostId._sharedFor = null;
    } catch (e) {}
    try {
      if (window.cc && cc.director) {
        // Same destination as in-game Settings → Home
        cc.director.loadScene("StartGameScene2");
        return;
      }
    } catch (e) {
      console.warn("[pvp-room-ui] goHome loadScene failed", e);
    }
  }

  window.__pvpGoHome = goHome;

  window.__pvpRoomUI = {
    chooseMode: chooseMode,
    chooseRole: chooseRole,
    showHostId: showHostId,
    showGuestJoined: showGuestJoined,
    showHostGuestJoined: showHostGuestJoined,
    hide: hide,
    goHome: goHome,
  };
})();
