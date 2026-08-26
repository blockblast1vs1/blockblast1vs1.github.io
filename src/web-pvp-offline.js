/**
 * Web PVP helpers.
 * - Home: hide Adventure, show PvP; click → Online / Bot modal
 * - Always loads assets/pvp/index.js (single bundle — no index.offline.js swap)
 * - Online / Bot = runtime flags only (pvp_play_bot + __PVP_FORCE_OFFLINE)
 * - No boot-time prefetch (keeps first load fast); deps load on enterPvp
 */
(function () {
  "use strict";

  // Runtime mode: false = Online (PeerJS), true = Bot (OfflineClient)
  var FORCE_OFFLINE = false;
  var pvpBundleReady = false;
  var pvpDepsPromise = null;

  try {
    localStorage.setItem("open_pvp", "1");
    localStorage.setItem("SCORE_FOR_PVP", "1");
    // Never leave a stale bot flag from a previous session
    localStorage.removeItem("pvp_play_bot");
    localStorage.setItem("pvp_force_offline", "0");
  } catch (e) {}

  var PVP_WS_RE = /pvp-global\.blockblast\.com|:22601/i;

  var PVP_DEPS = [
    "src/assets/games/pvp/proto/protobuf.min.js",
    "src/assets/games/pvp/proto/protobufpvp.js",
    "src/assets/games/pvp/proto/peerjs.min.js",
    "src/assets/scripts/func/LoginSever/axios.min.js",
  ];

  function isBotMode() {
    return !!FORCE_OFFLINE;
  }

  function setPvpMode(mode) {
    var bot = mode === "bot" || mode === "offline" || mode === true;
    FORCE_OFFLINE = !!bot;
    window.__PVP_FORCE_OFFLINE = FORCE_OFFLINE;
    try {
      localStorage.setItem("pvp_force_offline", FORCE_OFFLINE ? "1" : "0");
      if (FORCE_OFFLINE) localStorage.setItem("pvp_play_bot", "1");
      else localStorage.removeItem("pvp_play_bot");
    } catch (e) {}
    console.log(
      "[web-pvp] mode →",
      FORCE_OFFLINE ? "bot (offline client)" : "online (PeerJS / index.js)",
    );
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var ver = window.__ASSET_VER || "";
      var url = src;
      if (ver && url.indexOf("?") === -1) {
        url += "?v=" + ver;
      }
      var s = document.createElement("script");
      s.async = true;
      s.charset = "utf-8";
      s.src = url;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error("Failed to load " + src));
      };
      document.head.appendChild(s);
    });
  }

  /** Load PeerJS / protobuf / axios only when PvP is entered. */
  function ensurePvpDeps() {
    if (pvpDepsPromise) return pvpDepsPromise;
    pvpDepsPromise = PVP_DEPS.reduce(function (chain, src) {
      return chain.then(function () {
        return loadScript(src);
      });
    }, Promise.resolve()).catch(function (err) {
      pvpDepsPromise = null;
      throw err;
    });
    return pvpDepsPromise;
  }

  // Never rewrite pvp/index.js → index.offline.js (mode is runtime-only).
  // Still block dead online WS host when in bot mode.
  (function installWsGuard() {
    var NativeWS = window.WebSocket;
    if (typeof NativeWS !== "function") return;

    function BlockedPvpWebSocket(url) {
      var self = this;
      this.url = String(url || "");
      this.readyState = NativeWS.CONNECTING;
      this.bufferedAmount = 0;
      this.extensions = "";
      this.protocol = "";
      this.binaryType = "blob";
      setTimeout(function () {
        self.readyState = NativeWS.CLOSED;
        var err = new Event("error");
        if (typeof self.onerror === "function") {
          try {
            self.onerror(err);
          } catch (e1) {}
        }
        try {
          self.dispatchEvent(err);
        } catch (e2) {}
        var closeEvt =
          typeof CloseEvent === "function"
            ? new CloseEvent("close", {
                code: 1006,
                reason: "web-pvp-bot-mode",
                wasClean: false,
              })
            : new Event("close");
        if (typeof self.onclose === "function") {
          try {
            self.onclose(closeEvt);
          } catch (e3) {}
        }
        try {
          self.dispatchEvent(closeEvt);
        } catch (e4) {}
      }, 0);
    }
    BlockedPvpWebSocket.prototype.send = function () {};
    BlockedPvpWebSocket.prototype.close = function () {
      this.readyState = NativeWS.CLOSED;
    };
    BlockedPvpWebSocket.prototype.addEventListener = function () {};
    BlockedPvpWebSocket.prototype.removeEventListener = function () {};
    BlockedPvpWebSocket.prototype.dispatchEvent = function () {
      return true;
    };

    window.WebSocket = function (url, protocols) {
      if (FORCE_OFFLINE && PVP_WS_RE.test(String(url || ""))) {
        console.warn("[web-pvp] blocked online WS (bot mode):", url);
        return new BlockedPvpWebSocket(url);
      }
      return protocols !== undefined
        ? new NativeWS(url, protocols)
        : new NativeWS(url);
    };
    window.WebSocket.prototype = NativeWS.prototype;
    window.WebSocket.CONNECTING = NativeWS.CONNECTING;
    window.WebSocket.OPEN = NativeWS.OPEN;
    window.WebSocket.CLOSING = NativeWS.CLOSING;
    window.WebSocket.CLOSED = NativeWS.CLOSED;
  })();

  /**
   * Home: hide Adventure (btn_JourneyLoading), show PvP in its place.
   */
  function findHomeBtnNode() {
    if (!window.cc || !cc.find) return null;
    return cc.find("Canvas/btn/btnNode") || cc.find("btn/btnNode") || null;
  }

  function openPvpModePicker() {
    if (openPvpModePicker._busy) return;
    openPvpModePicker._busy = true;
    var ui = window.__pvpRoomUI;
    var p =
      ui && typeof ui.chooseMode === "function"
        ? ui.chooseMode()
        : Promise.resolve({ mode: "online" });
    Promise.resolve(p)
      .then(function (choice) {
        openPvpModePicker._busy = false;
        if (!choice || choice.cancelled) return;
        enterPvp(choice.mode === "bot" ? "bot" : "online");
      })
      .catch(function (err) {
        openPvpModePicker._busy = false;
        console.warn("[web-pvp] mode picker failed", err);
      });
  }

  function installHomePvpClick(pvp) {
    if (!pvp || !cc.isValid(pvp)) return;
    var btn = pvp.getComponent(cc.Button);
    if (btn && btn.clickEvents && btn.clickEvents.length) {
      btn.clickEvents = [];
    }
    if (pvp.__pvpModePicker) return;
    pvp.__pvpModePicker = true;
    pvp.on("click", function () {
      openPvpModePicker();
    });
  }

  function applyHomeAdventureToPvp() {
    var btnNode = findHomeBtnNode();
    if (!btnNode || !cc.isValid(btnNode)) return false;

    var journey = btnNode.getChildByName("btn_JourneyLoading");
    var pvp = btnNode.getChildByName("btn_PVP");
    if (!pvp || !cc.isValid(pvp)) return false;

    if (journey && cc.isValid(journey)) {
      var targetIdx = journey.getSiblingIndex();
      if (journey.active) journey.active = false;
      if (pvp.getSiblingIndex() !== targetIdx) {
        pvp.setSiblingIndex(targetIdx);
      }
    }

    if (!pvp.active) pvp.active = true;
    installHomePvpClick(pvp);

    var layout = btnNode.getComponent(cc.Layout);
    if (layout) {
      if (layout.spacingY !== 8) layout.spacingY = 8;
      if (layout.updateLayout) layout.updateLayout();
    }
    return true;
  }

  function startHomeBtnSwapWatcher() {
    function onSceneReady() {
      applyHomeAdventureToPvp();
      setTimeout(applyHomeAdventureToPvp, 200);
      setTimeout(applyHomeAdventureToPvp, 800);
      setTimeout(applyHomeAdventureToPvp, 1600);
      setTimeout(applyHomeAdventureToPvp, 3000);
      // After home is up, warm PvP bundle in idle time (does not compete with first load)
      if (!onSceneReady._pvpWarm) {
        onSceneReady._pvpWarm = true;
        var warm = function () {
          try {
            if (window.fetch) {
              fetch("assets/pvp/index.js", {
                credentials: "same-origin",
                cache: "force-cache",
              }).catch(function () {});
            }
          } catch (e) {}
        };
        if (typeof requestIdleCallback === "function") {
          requestIdleCallback(warm, { timeout: 10000 });
        } else {
          setTimeout(warm, 6000);
        }
      }
    }

    function hookDirector() {
      if (!window.cc || !cc.director) return false;
      try {
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, onSceneReady);
        onSceneReady();
        return true;
      } catch (e) {
        return false;
      }
    }

    if (!hookDirector()) {
      var waitCc = setInterval(function () {
        if (hookDirector()) clearInterval(waitCc);
      }, 200);
    }

    setInterval(function () {
      if (findHomeBtnNode()) applyHomeAdventureToPvp();
    }, 1000);

    console.log("[web-pvp] Home: Adventure → PvP + Online/Bot picker");
  }

  function runPvpScene(bundle) {
    bundle.loadScene("scene/pvp", function (e2, scene) {
      if (e2) {
        console.error("[web-pvp] loadScene failed", e2);
        return;
      }
      cc.director.runScene(scene);
      console.log(
        "[web-pvp] entered scene/pvp as",
        FORCE_OFFLINE ? "bot" : "online",
      );
      try {
        window.__pvpSwitchingToBot = false;
      } catch (e) {}
    });
  }

  function enterPvp(mode) {
    if (!window.cc || !cc.assetManager) {
      console.error("[web-pvp] cc not ready");
      return;
    }

    if (mode === "bot" || mode === "offline" || mode === true)
      setPvpMode("bot");
    else setPvpMode("online");

    try {
      window.__pvpSwitchingToBot = FORCE_OFFLINE;
    } catch (e) {}

    // Always the same bundle script (index.js). Mode = flags only.
    console.log(
      "[web-pvp] loading pvp bundle… mode=",
      FORCE_OFFLINE ? "bot" : "online",
      "(index.js, no file swap)",
    );

    ensurePvpDeps()
      .then(function () {
        var existing = null;
        try {
          existing = cc.assetManager.getBundle("pvp");
        } catch (e) {}

        if (existing && pvpBundleReady) {
          // Reuse loaded bundle — just re-enter scene with new flags
          runPvpScene(existing);
          return;
        }

        try {
          if (existing) cc.assetManager.removeBundle(existing);
        } catch (e) {}

        cc.assetManager.loadBundle("pvp", function (err, bundle) {
          if (err) {
            console.error("[web-pvp] loadBundle failed", err);
            return;
          }
          pvpBundleReady = true;
          runPvpScene(bundle);
        });
      })
      .catch(function (err) {
        console.error("[web-pvp] deps failed", err);
      });
  }

  window.__enterPvp = enterPvp;
  window.__setPvpMode = setPvpMode;
  window.__pvpIsBotMode = isBotMode;
  window.__pvpPlayBot = function () {
    try {
      window.__pvpSwitchingToBot = true;
    } catch (e) {}
    enterPvp("bot");
  };
  window.__pvpClearPlayBot = function () {
    try {
      localStorage.removeItem("pvp_play_bot");
    } catch (e) {}
    setPvpMode("online");
  };

  window.__PVP_FORCE_OFFLINE = FORCE_OFFLINE;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startHomeBtnSwapWatcher);
  } else {
    startHomeBtnSwapWatcher();
  }

  console.log(
    "[web-pvp] enabled — single index.js; Online/Bot via flags (lazy deps, no boot prefetch)",
  );
})();
