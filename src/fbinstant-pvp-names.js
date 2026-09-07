/**
 * PvP in-room Facebook names via Overlay Views (NEZP / SDK 8).
 * getName() is empty under Zero Permissions — Meta renders name in iframe.
 */
(function (global) {
  "use strict";

  var XML_SELF = "overlays/pvp_name_self.xml";
  var XML_OTHER = "overlays/pvp_name_other.xml";
  var CSS_PATH = "overlays/pvp_name.css";
  var SELF_ID = "fb-pvp-name-self";
  var OTHER_ID = "fb-pvp-name-other";

  var selfOverlay = null;
  var otherOverlay = null;
  var selfCreating = null;
  var otherCreating = null;
  var visible = false;
  var lastOtherFbId = "";

  function hasOverlayApi() {
    return (
      typeof global.FBInstant !== "undefined" &&
      global.FBInstant &&
      global.FBInstant.overlayViews &&
      typeof global.FBInstant.overlayViews.createOverlayViewAsync === "function"
    );
  }

  function isInstant() {
    try {
      var b = global.FBInstantBridge;
      return b && typeof b.isInstant === "function" && b.isInstant();
    } catch (e) {
      return false;
    }
  }

  function getMyFbId() {
    try {
      if (global.FBInstant && global.FBInstant.player) {
        return String(global.FBInstant.player.getID() || "");
      }
    } catch (e) {}
    return "";
  }

  function ensureHost(id, side) {
    var el = document.getElementById(id);
    if (el) return el;
    el = document.createElement("div");
    el.id = id;
    el.setAttribute("aria-hidden", "true");
    el.style.cssText =
      "position:fixed;z-index:2147482500;width:150px;height:36px;" +
      "pointer-events:none;opacity:0;transition:opacity 0.15s;" +
      (side === "left"
        ? "left:3%;top:7%;"
        : "right:3%;top:7%;text-align:right;");
    document.body.appendChild(el);
    return el;
  }

  function setHostShown(el, on) {
    if (!el) return;
    el.style.opacity = on ? "1" : "0";
    el.style.visibility = on ? "visible" : "hidden";
  }

  function createSelfOverlay() {
    if (selfOverlay) return Promise.resolve(selfOverlay);
    if (selfCreating) return selfCreating;
    if (!hasOverlayApi()) return Promise.resolve(null);

    var host = ensureHost(SELF_ID, "left");
    host.innerHTML = "";
    var style =
      "width:100%;height:100%;border:none;background:transparent;display:block;";

    selfCreating = global.FBInstant.overlayViews
      .createOverlayViewAsync(XML_SELF, host, style, CSS_PATH)
      .then(function (ov) {
        selfOverlay = ov;
        selfCreating = null;
        if (ov && typeof ov.showAsync === "function") {
          return ov.showAsync().then(function () {
            return ov;
          });
        }
        return ov;
      })
      .catch(function (err) {
        selfCreating = null;
        console.warn("[FBInstant] pvp self-name overlay failed", err);
        return null;
      });
    return selfCreating;
  }

  function createOtherOverlay(fbId) {
    fbId = String(fbId || "").trim();
    if (!fbId) return Promise.resolve(null);
    if (otherOverlay && lastOtherFbId === fbId) {
      return Promise.resolve(otherOverlay);
    }

    // Recreate when opponent changes
    try {
      if (otherOverlay && typeof otherOverlay.dismissAsync === "function") {
        otherOverlay.dismissAsync().catch(function () {});
      }
    } catch (e) {}
    otherOverlay = null;
    lastOtherFbId = fbId;

    if (otherCreating) return otherCreating;
    if (!hasOverlayApi()) return Promise.resolve(null);

    var host = ensureHost(OTHER_ID, "right");
    host.innerHTML = "";
    var style =
      "width:100%;height:100%;border:none;background:transparent;display:block;";
    var initialData = JSON.stringify({ playerID: fbId });

    var create = global.FBInstant.overlayViews.createOverlayViewAsync;
    var p;
    try {
      // SDK 8: (xml, parent, style, css, initialData?)
      p = create.call(
        global.FBInstant.overlayViews,
        XML_OTHER,
        host,
        style,
        CSS_PATH,
        initialData,
      );
    } catch (e1) {
      try {
        p = create(XML_OTHER, host, style, CSS_PATH);
      } catch (e2) {
        console.warn("[FBInstant] pvp other-name overlay create threw", e2);
        return Promise.resolve(null);
      }
    }

    otherCreating = Promise.resolve(p)
      .then(function (ov) {
        otherOverlay = ov;
        otherCreating = null;
        if (ov && typeof ov.updateAsync === "function") {
          return ov
            .updateAsync(initialData)
            .catch(function () {})
            .then(function () {
              return ov;
            });
        }
        return ov;
      })
      .then(function (ov) {
        if (ov && typeof ov.showAsync === "function") {
          return ov.showAsync().then(function () {
            return ov;
          });
        }
        return ov;
      })
      .catch(function (err) {
        otherCreating = null;
        console.warn("[FBInstant] pvp other-name overlay failed", err);
        return null;
      });
    return otherCreating;
  }

  function blankCocosNameLabels() {
    try {
      if (!global.cc || !cc.director) return;
      var scene = cc.director.getScene();
      if (!scene) return;
      function walk(node) {
        if (!node || !cc.isValid(node)) return;
        var label = node.getComponent && node.getComponent(cc.Label);
        if (label) {
          var s = String(label.string || "").trim();
          var n = String(node.name || "").toLowerCase();
          if (
            s === "You" ||
            s === "Opponent" ||
            s === "--" ||
            /myname|othername|opponentname/i.test(n)
          ) {
            label.string = " ";
          }
        }
        var kids = node.children || [];
        for (var i = 0; i < kids.length; i++) walk(kids[i]);
      }
      walk(scene);
    } catch (e) {}
  }

  function show(opts) {
    opts = opts || {};
    if (!isInstant() || !hasOverlayApi()) {
      console.log("[FBInstant] pvp name overlays skipped (not Instant / no API)");
      return Promise.resolve(false);
    }

    var otherId =
      opts.otherFbId ||
      (global.__pvpPeerSync && global.__pvpPeerSync.otherFbId) ||
      global.__pvpOpponentFbId ||
      "";

    visible = true;
    blankCocosNameLabels();

    return Promise.all([
      createSelfOverlay().then(function () {
        setHostShown(ensureHost(SELF_ID, "left"), true);
      }),
      otherId
        ? createOtherOverlay(otherId).then(function () {
            setHostShown(ensureHost(OTHER_ID, "right"), !!otherOverlay);
          })
        : Promise.resolve().then(function () {
            setHostShown(document.getElementById(OTHER_ID), false);
          }),
    ]).then(function () {
      console.log(
        "[FBInstant] pvp name overlays shown",
        "me=",
        getMyFbId(),
        "other=",
        otherId || "(waiting)",
      );
      // Labels may reappear after UI rebuild — blank a few times
      [200, 600, 1500].forEach(function (ms) {
        setTimeout(blankCocosNameLabels, ms);
      });
      return true;
    });
  }

  function hide() {
    visible = false;
    setHostShown(document.getElementById(SELF_ID), false);
    setHostShown(document.getElementById(OTHER_ID), false);
  }

  function onPeerFbId(fbId) {
    fbId = String(fbId || "").trim();
    if (!fbId) return;
    global.__pvpOpponentFbId = fbId;
    try {
      if (global.__pvpPeerSync) global.__pvpPeerSync.otherFbId = fbId;
    } catch (e) {}
    if (visible) show({ otherFbId: fbId });
  }

  global.FBInstantPvpNames = {
    show: show,
    hide: hide,
    onPeerFbId: onPeerFbId,
    getMyFbId: getMyFbId,
  };
})(typeof window !== "undefined" ? window : this);
