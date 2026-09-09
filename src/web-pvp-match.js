/**
 * Random Match client — Socket.io (Northflank) preferred, Cloudflare Worker HTTP fallback.
 *
 * Config:
 *   window.__PVP_SOCKET_URL  — e.g. https://….northflank.app  (recommended)
 *   window.__PVP_MATCH_URL   — Cloudflare Worker HTTP poll (legacy)
 */
(function (global) {
  "use strict";

  var DEFAULT_MATCH_URL = "https://blockblast-pvp-match.batk32474.workers.dev";
  /** Set after Northflank deploy, or override via window.__PVP_SOCKET_URL */
  var DEFAULT_SOCKET_URL = "";

  var POLL_MS = 1000;
  var MAX_WAIT_MS = 50000;
  var NATIVE_PREFAB = "res/prefabs/token/matchwaiting";
  var SOCKET_CDN =
    "https://cdn.socket.io/4.8.1/socket.io.min.js";

  var _socket = null;
  var _resumeToken = null;
  var _oppDiscTimer = null;
  /** Grace before treating socket disconnect as match forfeit (ms). */
  var OPP_DISC_GRACE_MS = 25000;

  function clearOppDiscTimer() {
    if (_oppDiscTimer) {
      clearTimeout(_oppDiscTimer);
      _oppDiscTimer = null;
    }
  }

  function triggerOpponentGone(reasonCode) {
    clearOppDiscTimer();
    var sync = global.__pvpPeerSync;
    if (!sync || !sync.inMatch) {
      console.log("[pvp-match] opponent gone (lobby) — no WIN");
      return;
    }
    console.warn("[pvp-match] opponent gone → force WIN", reasonCode);
    try {
      if (typeof global.__pvpForceOpponentLeft === "function") {
        global.__pvpForceOpponentLeft(reasonCode || 12);
      }
    } catch (e) {
      console.warn("[pvp-match] force opponent left failed", e);
    }
  }

  function leaveRoom(opts) {
    opts = opts || {};
    clearOppDiscTimer();
    if (!usesSocket()) {
      _resumeToken = null;
      try {
        localStorage.removeItem("pvp_resume_token");
      } catch (e) {}
      return Promise.resolve(null);
    }
    var token = _resumeToken;
    try {
      if (!token) token = localStorage.getItem("pvp_resume_token");
    } catch (e) {}
    return getSocket()
      .then(function (sock) {
        return new Promise(function (resolve) {
          sock.emit("room:leave", { resumeToken: token || "" }, function () {
            resolve(true);
          });
          setTimeout(function () {
            resolve(false);
          }, 2000);
        });
      })
      .catch(function () {
        return null;
      })
      .then(function (ok) {
        _resumeToken = null;
        try {
          localStorage.removeItem("pvp_resume_token");
        } catch (e) {}
        if (!opts.silent) {
          console.log("[pvp-match] room:leave", ok ? "ok" : "done");
        }
        return ok;
      });
  }

  function socketUrl() {
    var u =
      (global.__PVP_SOCKET_URL &&
        String(global.__PVP_SOCKET_URL).replace(/\/$/, "")) ||
      DEFAULT_SOCKET_URL;
    return u || "";
  }

  function matchUrl() {
    var sock = socketUrl();
    if (sock) return sock;
    var u =
      (global.__PVP_MATCH_URL &&
        String(global.__PVP_MATCH_URL).replace(/\/$/, "")) ||
      DEFAULT_MATCH_URL;
    return u;
  }

  function usesSocket() {
    return !!socketUrl();
  }

  function newTicket() {
    try {
      if (global.crypto && typeof global.crypto.randomUUID === "function") {
        return global.crypto.randomUUID();
      }
    } catch (e) {}
    return (
      "t_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).slice(2, 10)
    );
  }

  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function loadSocketIo() {
    if (global.io && typeof global.io === "function") {
      return Promise.resolve(global.io);
    }
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[data-pvp-socket-io]');
      if (existing) {
        existing.addEventListener("load", function () {
          resolve(global.io);
        });
        existing.addEventListener("error", function () {
          reject(new Error("socket.io CDN load failed"));
        });
        return;
      }
      var s = document.createElement("script");
      s.src = SOCKET_CDN;
      s.async = true;
      s.setAttribute("data-pvp-socket-io", "1");
      s.onload = function () {
        if (global.io) resolve(global.io);
        else reject(new Error("socket.io missing after load"));
      };
      s.onerror = function () {
        reject(new Error("socket.io CDN load failed"));
      };
      document.head.appendChild(s);
    });
  }

  function getSocket() {
    var url = socketUrl();
    if (!url) return Promise.reject(new Error("no __PVP_SOCKET_URL"));
    return loadSocketIo().then(function (ioFn) {
      if (_socket && _socket.connected) return _socket;
      if (_socket) {
        try {
          _socket.removeAllListeners();
          _socket.disconnect();
        } catch (e) {}
        _socket = null;
      }
      _socket = ioFn(url, {
        transports: ["websocket", "polling"],
        reconnection: true,
        reconnectionAttempts: 8,
        reconnectionDelay: 800,
        timeout: 12000,
      });
      return new Promise(function (resolve, reject) {
        var done = false;
        var t = setTimeout(function () {
          if (done) return;
          done = true;
          reject(new Error("socket connect timeout"));
        }, 15000);
        _socket.once("connect", function () {
          if (done) return;
          done = true;
          clearTimeout(t);
          resolve(_socket);
        });
        _socket.once("connect_error", function (err) {
          if (done) return;
          done = true;
          clearTimeout(t);
          reject(err || new Error("socket connect_error"));
        });
      });
    });
  }

  function postJson(path, body) {
    var base = matchUrl();
    if (!base) {
      return Promise.reject(
        new Error("Match server URL not set (__PVP_MATCH_URL)"),
      );
    }
    return fetch(base + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body || {}),
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (t) {
          throw new Error("Match HTTP " + res.status + " " + t);
        });
      }
      return res.json();
    });
  }

  /** Original PvP matchwaiting prefab (same as MatchWaitingUI). */
  function openNativeMatchWaiting() {
    return new Promise(function (resolve) {
      try {
        if (typeof global.__pvpShowMatchWaiting === "function") {
          var p = global.__pvpShowMatchWaiting();
          Promise.resolve(p)
            .then(function () {
              resolve(true);
            })
            .catch(function () {
              resolve(false);
            });
          return;
        }
      } catch (e) {}

      if (!global.cc || !cc.assetManager) {
        resolve(false);
        return;
      }
      var bundle = null;
      try {
        bundle = cc.assetManager.getBundle("pvp");
      } catch (e) {}
      if (!bundle || typeof bundle.load !== "function") {
        resolve(false);
        return;
      }

      bundle.load(NATIVE_PREFAB, cc.Prefab, function (err, prefab) {
        if (err || !prefab) {
          console.warn("[pvp-match] native MatchWaitingUI load failed", err);
          resolve(false);
          return;
        }
        try {
          closeNativeMatchWaiting();
          var node = cc.instantiate(prefab);
          node.name = "__pvp_cf_matchwaiting";
          node.zIndex = 32000;
          var scene = cc.director.getScene();
          var parent =
            (scene &&
              (cc.find("Canvas", scene) ||
                scene.getChildByName("Canvas") ||
                scene)) ||
            null;
          if (!parent) {
            resolve(false);
            return;
          }
          parent.addChild(node);
          global.__pvpCfMatchWaitingNode = node;
          console.log("[pvp-match] opened original MatchWaitingUI prefab");
          resolve(true);
        } catch (e2) {
          console.warn("[pvp-match] native UI mount failed", e2);
          resolve(false);
        }
      });
    });
  }

  function closeNativeMatchWaiting() {
    try {
      if (typeof global.__pvpHideMatchWaiting === "function") {
        global.__pvpHideMatchWaiting();
      }
    } catch (e) {}
    try {
      var n = global.__pvpCfMatchWaitingNode;
      if (n && global.cc && cc.isValid && cc.isValid(n)) {
        n.destroy();
      }
    } catch (e2) {}
    global.__pvpCfMatchWaitingNode = null;
  }

  function showHtmlFindingUi() {
    var id = "pvp-random-match-overlay";
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      el.setAttribute(
        "style",
        "position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;" +
          "background:rgba(7,26,50,0.92);color:#e8f4ff;font-family:sans-serif;text-align:center;padding:24px;",
      );
      el.innerHTML =
        "<div>" +
        '<div style="font-size:22px;font-weight:700;margin-bottom:8px;">Finding opponent…</div>' +
        '<div id="pvp-random-match-sub" style="font-size:14px;opacity:0.85;margin-bottom:18px;">Random Match</div>' +
        '<div style="width:36px;height:36px;margin:0 auto 18px;border:3px solid rgba(255,255,255,0.25);' +
        'border-top-color:#4db7ff;border-radius:50%;animation:pvpJoinSpin 0.8s linear infinite;"></div>' +
        '<button type="button" id="pvp-random-match-cancel" style="margin-top:8px;padding:10px 18px;border:0;border-radius:10px;' +
        'background:#3a4a63;color:#fff;font-weight:600;cursor:pointer;">Cancel</button>' +
        "</div>";
      if (!document.getElementById("pvp-friends-join-style")) {
        var st = document.createElement("style");
        st.id = "pvp-friends-join-style";
        st.textContent =
          "@keyframes pvpJoinSpin{to{transform:rotate(360deg)}}";
        document.head.appendChild(st);
      }
      document.body.appendChild(el);
    }
    return el;
  }

  function hideHtmlFindingUi() {
    var el = document.getElementById("pvp-random-match-overlay");
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function hideFindingUi() {
    closeNativeMatchWaiting();
    hideHtmlFindingUi();
  }

  function setMatchResult(role, roomCode, extra) {
    extra = extra || {};
    global.__pvpRandomMatch = {
      role: role,
      roomCode: String(roomCode || ""),
      resumeToken: extra.resumeToken || _resumeToken || null,
      hostPeerId: extra.hostPeerId || "",
      guestPeerId: extra.guestPeerId || "",
      at: Date.now(),
    };
    global.__pvpSkipHostRoomUi = true;
    global.__pvpIsRandomJoin = true;
    global.__pvpRandomPending = false;
    if (extra.resumeToken) {
      _resumeToken = extra.resumeToken;
      try {
        localStorage.setItem("pvp_resume_token", String(extra.resumeToken));
      } catch (e) {}
    }
    try {
      localStorage.setItem("pvp_peer_role", role);
      localStorage.setItem("pvp_is_random", "1");
      if (role === "guest") {
        var hostId = extra.hostPeerId || roomCode;
        localStorage.setItem("pvp_peer_host", String(hostId));
        localStorage.removeItem("pvp_forced_room");
      } else {
        localStorage.setItem("pvp_forced_room", String(roomCode));
        localStorage.removeItem("pvp_peer_host");
      }
    } catch (e) {}
  }

  function clearMatchResult() {
    global.__pvpRandomMatch = null;
    global.__pvpSkipHostRoomUi = false;
    global.__pvpIsRandomJoin = false;
    global.__pvpRandomPending = false;
    hideFindingUi();
    clearOppDiscTimer();
    try {
      localStorage.removeItem("pvp_forced_room");
      localStorage.removeItem("pvp_is_random");
      localStorage.removeItem("pvp_resume_token");
    } catch (e) {}
    _resumeToken = null;
  }

  function playerName() {
    try {
      if (global.__pvpMyDisplayName) return String(global.__pvpMyDisplayName);
      var n = localStorage.getItem("pvp_display_name");
      if (n) return n;
    } catch (e) {}
    return "Player";
  }

  // —— UI helpers (shared) ——
  function armHtmlCancel(el, doCancel) {
    var cancelBtn = el && el.querySelector
      ? el.querySelector("#pvp-random-match-cancel")
      : document.getElementById("pvp-random-match-cancel");
    if (cancelBtn) {
      cancelBtn.onclick = function () {
        doCancel();
      };
    }
  }

  function wireNativeCancel(doCancel, cancelledFn) {
    global.__pvpCfMatchCancel = doCancel;

    function nameLooksCancel(n) {
      var s = String(n || "").toLowerCase();
      return s.indexOf("cancel") >= 0;
    }

    function nameLooksWaiting(n) {
      var s = String(n || "").toLowerCase();
      return (
        s.indexOf("matchwait") >= 0 ||
        s.indexOf("waitingmatch") >= 0 ||
        s === "matchwaiting" ||
        s.indexOf("waiting") >= 0
      );
    }

    function walkCancel(node) {
      if (!node || !cc.isValid(node)) return null;
      if (nameLooksCancel(node.name)) return node;
      var label = node.getComponent && node.getComponent(cc.Label);
      if (label && /^cancel$/i.test(String(label.string || "").trim())) {
        return node;
      }
      var kids = node.children || [];
      for (var i = 0; i < kids.length; i++) {
        var hit = walkCancel(kids[i]);
        if (hit) return hit;
      }
      return null;
    }

    function findWaitingRoots(node, out) {
      if (!node || !cc.isValid(node)) return;
      if (nameLooksWaiting(node.name)) out.push(node);
      var kids = node.children || [];
      for (var i = 0; i < kids.length; i++) findWaitingRoots(kids[i], out);
    }

    function tryBind() {
      if (cancelledFn() || !global.cc) return true;
      var roots = [];
      if (global.__pvpCfMatchWaitingNode) {
        roots.push(global.__pvpCfMatchWaitingNode);
      }
      try {
        var scene =
          cc.director && cc.director.getScene && cc.director.getScene();
        if (scene) findWaitingRoots(scene, roots);
      } catch (e) {}
      if (!roots.length) return false;
      var bound = false;
      for (var r = 0; r < roots.length; r++) {
        var btn = walkCancel(roots[r]);
        if (!btn || !cc.isValid(btn)) continue;
        try {
          if (btn.__pvpCfCancelWired) {
            bound = true;
            continue;
          }
          btn.__pvpCfCancelWired = true;
          btn.on(cc.Node.EventType.TOUCH_END, function () {
            doCancel();
          });
          bound = true;
        } catch (e2) {}
      }
      return bound;
    }

    if (tryBind()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (tryBind() || tries > 25 || cancelledFn()) clearInterval(iv);
    }, 80);
  }

  function prepareFindingUi(preferNative) {
    var usedNative = false;
    if (!preferNative) {
      return Promise.resolve().then(function () {
        return { usedNative: false, el: showHtmlFindingUi() };
      });
    }
    return openNativeMatchWaiting().then(function (ok) {
      usedNative = !!ok;
      if (!ok) {
        return { usedNative: false, el: showHtmlFindingUi() };
      }
      hideHtmlFindingUi();
      return { usedNative: true, el: null };
    });
  }

  /**
   * Socket.io matchmaking (Northflank).
   */
  function findMatchSocket(opts) {
    opts = opts || {};
    var preferNative = opts.preferNativeUi !== false;
    var ticket = newTicket();
    var cancelled = false;
    var started = Date.now();
    var usedNative = false;
    var sock = null;

    function clearCfCancelHook() {
      try {
        global.__pvpCfMatchCancel = null;
      } catch (e) {}
    }

    function doCancel() {
      if (cancelled) return;
      cancelled = true;
      clearCfCancelHook();
      if (sock) {
        try {
          sock.emit("match:cancel", { ticket: ticket });
        } catch (e) {}
      }
      hideFindingUi();
      clearMatchResult();
      if (typeof opts.onCancel === "function") opts.onCancel();
    }

    function isCancelled() {
      return cancelled;
    }

    return prepareFindingUi(preferNative)
      .then(function (ui) {
        usedNative = ui.usedNative;
        if (ui.el) armHtmlCancel(ui.el, doCancel);
        else wireNativeCancel(doCancel, isCancelled);
        return getSocket();
      })
      .then(function (s) {
        sock = s;
        return new Promise(function (resolve, reject) {
          function cleanup() {
            try {
              sock.off("match:waiting", onWaiting);
              sock.off("match:matched", onMatched);
              sock.off("match:timeout", onTimeout);
              sock.off("match:cancelled", onCancelled);
              sock.off("disconnect", onDisc);
            } catch (e) {}
          }

          function fail(err) {
            cleanup();
            clearCfCancelHook();
            hideFindingUi();
            reject(err);
          }

          function onWaiting(data) {
            if (cancelled) return;
            var sub = document.getElementById("pvp-random-match-sub");
            if (sub) {
              sub.textContent =
                "Searching… " +
                Math.floor((Date.now() - started) / 1000) +
                "s" +
                (data && data.queue ? " · queue " + data.queue : "");
            }
          }

          function onMatched(data) {
            if (cancelled) return;
            if (!data || data.status !== "matched" || !data.roomCode || !data.role) {
              return;
            }
            cleanup();
            clearCfCancelHook();
            hideFindingUi();
            setMatchResult(data.role, data.roomCode, {
              resumeToken: data.resumeToken,
              hostPeerId: data.hostPeerId || data.roomCode,
              guestPeerId: data.guestPeerId || "",
            });
            installPeerLifecycle(sock);
            console.log(
              "[pvp-match] socket matched",
              data.role,
              "room",
              data.roomCode,
              usedNative ? "(native UI)" : "(html UI)",
            );
            resolve({
              role: data.role,
              roomCode: String(data.roomCode),
              ticket: ticket,
              resumeToken: data.resumeToken || null,
              hostPeerId: data.hostPeerId || data.roomCode,
              guestPeerId: data.guestPeerId || "",
            });
          }

          function onTimeout() {
            if (cancelled) return;
            fail(new Error("timeout"));
          }

          function onCancelled() {
            if (!cancelled) doCancel();
            fail(new Error("cancelled"));
          }

          function onDisc() {
            if (cancelled) return;
            var sub = document.getElementById("pvp-random-match-sub");
            if (sub) sub.textContent = "Reconnecting…";
          }

          sock.on("match:waiting", onWaiting);
          sock.on("match:matched", onMatched);
          sock.on("match:timeout", onTimeout);
          sock.on("match:cancelled", onCancelled);
          sock.on("disconnect", onDisc);

          var maxTimer = setTimeout(function () {
            if (cancelled) return;
            doCancel();
            fail(new Error("timeout"));
          }, MAX_WAIT_MS);

          var origResolve = resolve;
          var origReject = reject;
          resolve = function (v) {
            clearTimeout(maxTimer);
            origResolve(v);
          };
          reject = function (e) {
            clearTimeout(maxTimer);
            origReject(e);
          };

          sock.emit(
            "match:find",
            {
              ticket: ticket,
              name: playerName(),
              peerId: "",
            },
            function (ack) {
              if (cancelled) return;
              if (ack && ack.ok === false) {
                fail(new Error(ack.error || "match_find_failed"));
              }
            },
          );
        });
      })
      .catch(function (err) {
        clearCfCancelHook();
        hideFindingUi();
        throw err;
      });
  }

  /**
   * Keep socket for peer:set + reconnect after match.
   */
  function installPeerLifecycle(sock) {
    if (!sock || sock.__pvpLifecycle) return;
    sock.__pvpLifecycle = true;

    sock.on("peer:exchange", function (data) {
      global.__pvpPeerExchange = data || null;
      if (typeof global.__pvpOnPeerExchange === "function") {
        try {
          global.__pvpOnPeerExchange(data);
        } catch (e) {}
      }
    });

    sock.on("opponent:disconnected", function (data) {
      console.warn("[pvp-match] opponent disconnected", data);
      global.__pvpOpponentOnline = false;
      if (typeof global.__pvpOnOpponentDisconnect === "function") {
        try {
          global.__pvpOnOpponentDisconnect(data);
        } catch (e) {}
      }
      clearOppDiscTimer();
      var sync = global.__pvpPeerSync;
      if (!sync || !sync.inMatch) return;

      var wait = OPP_DISC_GRACE_MS;
      if (data && data.resumeUntil) {
        wait = Math.max(5000, Math.min(OPP_DISC_GRACE_MS, data.resumeUntil - Date.now()));
      }
      // PeerJS already dead → shorter wait
      if (!sync.connReady) wait = Math.min(wait, 8000);

      console.log("[pvp-match] WIN grace", Math.round(wait / 1000) + "s");
      _oppDiscTimer = setTimeout(function () {
        if (global.__pvpOpponentOnline) return;
        triggerOpponentGone(12);
      }, wait);
    });

    sock.on("opponent:reconnected", function (data) {
      console.log("[pvp-match] opponent reconnected", data);
      global.__pvpOpponentOnline = true;
      clearOppDiscTimer();
      if (typeof global.__pvpOnOpponentReconnect === "function") {
        try {
          global.__pvpOnOpponentReconnect(data);
        } catch (e) {}
      }
    });

    sock.on("opponent:left", function (data) {
      console.warn("[pvp-match] opponent left", data);
      global.__pvpOpponentOnline = false;
      if (typeof global.__pvpOnOpponentLeft === "function") {
        try {
          global.__pvpOnOpponentLeft(data);
        } catch (e) {}
      }
      triggerOpponentGone(12);
    });

    sock.on("disconnect", function () {
      console.warn("[pvp-match] socket disconnected — will try resume");
    });

    sock.on("connect", function () {
      var token = _resumeToken;
      try {
        if (!token) token = localStorage.getItem("pvp_resume_token");
      } catch (e) {}
      if (!token) return;
      sock.emit(
        "session:hello",
        {
          resumeToken: token,
          name: playerName(),
          peerId: (global.__pvpPeerSync && global.__pvpPeerSync.peerId) || "",
        },
        function (res) {
          if (res && res.ok) {
            console.log("[pvp-match] session resumed", res.role, res.roomCode);
            _resumeToken = res.resumeToken || token;
            global.__pvpOpponentOnline = true;
            clearOppDiscTimer();
          } else {
            console.warn("[pvp-match] resume failed", res && res.error);
          }
        },
      );
    });
  }

  /** Publish local PeerJS id to opponent via Socket.io. */
  function publishPeerId(peerId) {
    if (!usesSocket() || !peerId) return Promise.resolve(null);
    return getSocket().then(function (sock) {
      installPeerLifecycle(sock);
      return new Promise(function (resolve) {
        sock.emit(
          "peer:set",
          { peerId: String(peerId), name: playerName() },
          function (ack) {
            resolve(ack || null);
          },
        );
      });
    });
  }

  function listRooms() {
    if (!usesSocket()) return Promise.resolve({ rooms: [] });
    return getSocket().then(function (sock) {
      return new Promise(function (resolve) {
        sock.emit("room:list", {}, function (ack) {
          resolve(ack || { rooms: [] });
        });
      });
    });
  }

  function createRoom(opts) {
    opts = opts || {};
    if (!usesSocket()) {
      return Promise.reject(new Error("Socket URL required for room:create"));
    }
    return getSocket().then(function (sock) {
      installPeerLifecycle(sock);
      return new Promise(function (resolve, reject) {
        sock.emit(
          "room:create",
          {
            roomCode: opts.roomCode || "",
            peerId: opts.peerId || "",
            name: opts.name || playerName(),
            public: opts.public !== false,
          },
          function (ack) {
            if (!ack || !ack.ok) {
              reject(new Error((ack && ack.error) || "room_create_failed"));
              return;
            }
            _resumeToken = ack.resumeToken || null;
            setMatchResult("host", ack.roomCode, {
              resumeToken: ack.resumeToken,
              hostPeerId: ack.hostPeerId || ack.roomCode,
            });
            resolve(ack);
          },
        );
      });
    });
  }

  function joinRoom(roomCodeVal, opts) {
    opts = opts || {};
    if (!usesSocket()) {
      return Promise.reject(new Error("Socket URL required for room:join"));
    }
    return getSocket().then(function (sock) {
      installPeerLifecycle(sock);
      return new Promise(function (resolve, reject) {
        sock.emit(
          "room:join",
          {
            roomCode: roomCodeVal,
            peerId: opts.peerId || "",
            name: opts.name || playerName(),
          },
          function (ack) {
            if (!ack || !ack.ok) {
              reject(new Error((ack && ack.error) || "room_join_failed"));
              return;
            }
            _resumeToken = ack.resumeToken || null;
            setMatchResult("guest", ack.roomCode, {
              resumeToken: ack.resumeToken,
              hostPeerId: ack.hostPeerId || ack.roomCode,
              guestPeerId: ack.guestPeerId || "",
            });
            resolve(ack);
          },
        );
      });
    });
  }

  /**
   * Legacy Cloudflare Worker HTTP poll.
   */
  function findMatchHttp(opts) {
    opts = opts || {};
    var preferNative = opts.preferNativeUi !== false;
    var base = matchUrl();
    if (!base) {
      return Promise.reject(
        new Error(
          "Set window.__PVP_SOCKET_URL (Northflank) or window.__PVP_MATCH_URL",
        ),
      );
    }

    var ticket = newTicket();
    var cancelled = false;
    var started = Date.now();
    var usedNative = false;

    function clearCfCancelHook() {
      try {
        global.__pvpCfMatchCancel = null;
      } catch (e) {}
    }

    function doCancel() {
      if (cancelled) return;
      cancelled = true;
      clearCfCancelHook();
      postJson("/cancel", { ticket: ticket }).catch(function () {});
      hideFindingUi();
      clearMatchResult();
      if (typeof opts.onCancel === "function") opts.onCancel();
    }

    function isCancelled() {
      return cancelled;
    }

    var uiReady = prepareFindingUi(preferNative).then(function (ui) {
      usedNative = ui.usedNative;
      if (ui.el) armHtmlCancel(ui.el, doCancel);
      else wireNativeCancel(doCancel, isCancelled);
    });

    function loop() {
      if (cancelled) return Promise.reject(new Error("cancelled"));
      if (Date.now() - started > MAX_WAIT_MS) {
        clearCfCancelHook();
        postJson("/cancel", { ticket: ticket }).catch(function () {});
        hideFindingUi();
        return Promise.reject(new Error("timeout"));
      }

      return postJson("/match", { ticket: ticket }).then(function (data) {
        if (cancelled) return Promise.reject(new Error("cancelled"));
        var sub = document.getElementById("pvp-random-match-sub");
        if (data.status === "waiting") {
          if (sub) {
            sub.textContent =
              "Searching… " +
              Math.floor((Date.now() - started) / 1000) +
              "s" +
              (data.queue ? " · queue " + data.queue : "");
          }
          return sleep(POLL_MS).then(loop);
        }
        if (data.status === "timeout") {
          clearCfCancelHook();
          hideFindingUi();
          return Promise.reject(new Error("timeout"));
        }
        if (data.status === "matched" && data.roomCode && data.role) {
          clearCfCancelHook();
          hideFindingUi();
          setMatchResult(data.role, data.roomCode, {});
          console.log(
            "[pvp-match] matched",
            data.role,
            "room",
            data.roomCode,
            usedNative ? "(native UI)" : "(html UI)",
          );
          return {
            role: data.role,
            roomCode: String(data.roomCode),
            ticket: ticket,
          };
        }
        return sleep(POLL_MS).then(loop);
      });
    }

    return uiReady
      .then(loop)
      .catch(function (err) {
        clearCfCancelHook();
        hideFindingUi();
        throw err;
      });
  }

  function findMatch(opts) {
    if (usesSocket()) return findMatchSocket(opts);
    return findMatchHttp(opts);
  }

  function resolveAutoRole() {
    var m = global.__pvpRandomMatch;
    if (m && m.role && m.roomCode) {
      var role = m.role;
      var code = m.roomCode;
      var hostPeer = m.hostPeerId || code;
      global.__pvpRandomMatch = null;
      return {
        role: role,
        // Both roles need the room/host PeerJS id (host claims it, guest dials it)
        hostId: hostPeer,
        random: true,
      };
    }
    return null;
  }

  function runPendingMatchForRole() {
    if (!global.__pvpRandomPending) return Promise.resolve(null);
    global.__pvpRandomPending = false;
    return findMatch({ preferNativeUi: true }).then(function (result) {
      var code = result.hostPeerId || result.roomCode;
      return {
        role: result.role,
        hostId: code || null,
        random: true,
      };
    });
  }

  global.PvpRandomMatch = {
    findMatch: findMatch,
    resolveAutoRole: resolveAutoRole,
    runPendingMatchForRole: runPendingMatchForRole,
    clearMatchResult: clearMatchResult,
    matchUrl: matchUrl,
    socketUrl: socketUrl,
    usesSocket: usesSocket,
    hideFindingUi: hideFindingUi,
    publishPeerId: publishPeerId,
    listRooms: listRooms,
    createRoom: createRoom,
    joinRoom: joinRoom,
    leaveRoom: leaveRoom,
    getSocket: function () {
      return usesSocket() ? getSocket() : Promise.reject(new Error("no socket"));
    },
  };
})(typeof window !== "undefined" ? window : this);
