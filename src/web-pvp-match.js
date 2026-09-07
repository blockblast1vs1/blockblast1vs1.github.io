/**
 * Random Match client — Cloudflare Worker + original PvP MatchWaiting UI.
 *
 * Set URL via window.__PVP_MATCH_URL or DEFAULT_MATCH_URL below.
 */
(function (global) {
  "use strict";

  var DEFAULT_MATCH_URL = "https://blockblast-pvp-match.batk32474.workers.dev";

  var POLL_MS = 1000;
  var MAX_WAIT_MS = 50000;
  var NATIVE_PREFAB = "res/prefabs/token/matchwaiting";

  function matchUrl() {
    var u =
      (global.__PVP_MATCH_URL &&
        String(global.__PVP_MATCH_URL).replace(/\/$/, "")) ||
      DEFAULT_MATCH_URL;
    return u;
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

  function setMatchResult(role, roomCode) {
    global.__pvpRandomMatch = {
      role: role,
      roomCode: String(roomCode || ""),
      at: Date.now(),
    };
    global.__pvpSkipHostRoomUi = true;
    global.__pvpIsRandomJoin = true;
    global.__pvpRandomPending = false;
    try {
      localStorage.setItem("pvp_peer_role", role);
      localStorage.setItem("pvp_is_random", "1");
      if (role === "guest") {
        localStorage.setItem("pvp_peer_host", String(roomCode));
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
    try {
      localStorage.removeItem("pvp_forced_room");
      localStorage.removeItem("pvp_is_random");
    } catch (e) {}
  }

  /**
   * Poll Worker until matched.
   * opts.preferNativeUi — use original matchwaiting prefab when possible.
   */
  function findMatch(opts) {
    opts = opts || {};
    var preferNative = opts.preferNativeUi !== false;
    var base = matchUrl();
    if (!base) {
      return Promise.reject(
        new Error(
          "Set window.__PVP_MATCH_URL to your Cloudflare Worker URL (see workers/pvp-match/README.md)",
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

    /** HTML Cancel only for full-screen fallback (never over native MatchWaitingUI). */
    function armHtmlCancel(el) {
      var cancelBtn = el && el.querySelector
        ? el.querySelector("#pvp-random-match-cancel")
        : document.getElementById("pvp-random-match-cancel");
      if (cancelBtn) {
        cancelBtn.onclick = function () {
          doCancel();
        };
      }
    }

    /**
     * Prefer WaitingMatchUI red Cancel (via __pvpCfMatchCancel hook in pvp bundle).
     * Also attach TOUCH_END on Cancel inside MatchWaiting UI (keeps original handlers).
     */
    function wireNativeCancel() {
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
        if (cancelled || !global.cc) return true;
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
        if (tryBind() || tries > 25 || cancelled) clearInterval(iv);
      }, 80);
    }

    var uiReady = preferNative
      ? openNativeMatchWaiting().then(function (ok) {
          usedNative = !!ok;
          if (!ok) {
            armHtmlCancel(showHtmlFindingUi());
          } else {
            // No bottom HTML Cancel — red Cancel on MatchWaitingUI only
            hideHtmlFindingUi();
            wireNativeCancel();
          }
        })
      : Promise.resolve().then(function () {
          armHtmlCancel(showHtmlFindingUi());
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
          setMatchResult(data.role, data.roomCode);
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

  function resolveAutoRole() {
    var m = global.__pvpRandomMatch;
    if (m && m.role && m.roomCode) {
      var role = m.role;
      var code = m.roomCode;
      global.__pvpRandomMatch = null;
      return {
        role: role,
        hostId: role === "guest" ? code : null,
        random: true,
      };
    }
    return null;
  }

  /**
   * Called from chooseRole when Random Match entered PvP before CF pairing.
   */
  function runPendingMatchForRole() {
    if (!global.__pvpRandomPending) return Promise.resolve(null);
    global.__pvpRandomPending = false;
    return findMatch({ preferNativeUi: true }).then(function (result) {
      return {
        role: result.role,
        hostId: result.role === "guest" ? result.roomCode : null,
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
    hideFindingUi: hideFindingUi,
  };
})(typeof window !== "undefined" ? window : this);
