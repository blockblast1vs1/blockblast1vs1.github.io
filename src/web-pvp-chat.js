/**
 * PvP chat + emoji over PeerJS.
 * - Left chat button opens emoji / text panel
 * - Messages flash briefly over the opponent board, then fade out
 */
(function (global) {
  "use strict";

  var ROOT_ID = "pvp-chat-root";
  var STYLE_ID = "pvp-chat-style";
  var BUBBLE_MS = 2800;
  var MAX_LEN = 48;
  var EMOJI_DIR = "emojipic/";
  var EMOJIS = [
    "7529_KEKW.png",
    "5498_catJAM.gif",
    "2579-cat-yipee.gif",
    "3568-catkiss.gif",
    "5891-cat-sus.png",
    "6779-cat-whaaa.png",
    "5163-95-crythumbsup.png",
    "3124_cry.gif",
    "35636-huh.gif",
    "4208-panic-depression.gif",
    "3274-thevoices.gif",
    "4373-amongus-dancing.gif",
    "679076-dogkeyboard.gif",
    "8810-cat-washing-clothes.gif",
    "6718-mrincredible.png",
  ];
  var EMOJI_SET = {};
  for (var ei = 0; ei < EMOJIS.length; ei++) EMOJI_SET[EMOJIS[ei]] = true;
  var SEND_COOLDOWN_MS = 420;

  var root = null;
  var bubbleHost = null;
  var localHost = null;
  var inputEl = null;
  var panelEl = null;
  var toggleBtn = null;
  var visible = false;
  var panelOpen = false;
  var watchTimer = null;
  var lastSendAt = 0;

  function ensureStyle() {
    var css = document.getElementById(STYLE_ID);
    var cssText =
      "#" +
      ROOT_ID +
      "{position:fixed;inset:0;z-index:2147482000;pointer-events:none;" +
      'font-family:"PvpUseFont",system-ui,-apple-system,sans-serif;' +
      "-webkit-font-smoothing:antialiased;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubbles{position:absolute;left:4%;top:7%;width:42%;height:22%;" +
      "display:flex;flex-direction:column;align-items:center;justify-content:flex-end;" +
      "gap:8px;overflow:visible;pointer-events:none;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-local{position:absolute;left:max(12px,env(safe-area-inset-left));" +
      "bottom:calc(76px + env(safe-area-inset-bottom,0px));width:min(220px,70vw);" +
      "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;" +
      "gap:6px;overflow:visible;pointer-events:none;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble{max-width:100%;padding:9px 14px;border-radius:16px;" +
      "background:rgba(6,22,44,.92);border:1px solid rgba(140,200,255,.4);" +
      "color:#f2f8ff;font-size:15px;line-height:1.3;text-align:center;" +
      "box-shadow:0 10px 28px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.08);" +
      "animation:pvpChatIn .2s cubic-bezier(.2,.9,.2,1);word-break:break-word;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-emoji{padding:0;background:transparent;border:0;" +
      "box-shadow:none;animation:pvpEmojiPop .28s cubic-bezier(.2,1.2,.3,1);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-emoji img{width:84px;height:84px;object-fit:contain;" +
      "display:block;pointer-events:none;" +
      "filter:drop-shadow(0 6px 14px rgba(0,0,0,.45));}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-mine{border-color:rgba(77,183,255,.65);text-align:left;" +
      "box-shadow:0 10px 28px rgba(0,80,160,.28),inset 0 1px 0 rgba(255,255,255,.1);" +
      "animation:pvpMineIn .22s cubic-bezier(.2,.9,.2,1);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-mine.is-emoji{background:transparent;border:0;" +
      "box-shadow:none;padding:0;" +
      "animation:pvpEmojiPop .28s cubic-bezier(.2,1.2,.3,1);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-mine.is-emoji img{width:76px;height:76px;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-out{opacity:0;transform:translateY(-10px) scale(.96);" +
      "transition:opacity .32s ease,transform .32s ease;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-bubble.is-mine.is-out{transform:translateY(8px) scale(.96);}" +
      "@keyframes pvpChatIn{from{opacity:0;transform:translateY(12px) scale(.94)}" +
      "to{opacity:1;transform:translateY(0) scale(1)}}" +
      "@keyframes pvpMineIn{from{opacity:0;transform:translateY(14px) scale(.92)}" +
      "to{opacity:1;transform:translateY(0) scale(1)}}" +
      "@keyframes pvpEmojiPop{0%{opacity:0;transform:scale(.55)}" +
      "70%{opacity:1;transform:scale(1.1)}100%{transform:scale(1)}}" +
      "@keyframes pvpPanelIn{from{opacity:0;transform:translateY(14px) scale(.94)}" +
      "to{opacity:1;transform:translateY(0) scale(1)}}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-toggle{position:absolute;left:max(12px,env(safe-area-inset-left));" +
      "bottom:max(14px,env(safe-area-inset-bottom));pointer-events:auto;" +
      "appearance:none;border:0;width:54px;height:54px;border-radius:50%;" +
      "cursor:pointer;display:flex;align-items:center;justify-content:center;" +
      "font-size:26px;line-height:1;" +
      "background:linear-gradient(160deg,#2a78c4 0%,#0d3a6e 100%);" +
      "border:1.5px solid rgba(150,210,255,.45);" +
      "box-shadow:0 10px 26px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.18);" +
      "color:#eaf5ff;transition:transform .15s ease,background .2s ease,box-shadow .2s ease;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-toggle:active{transform:scale(.92);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-toggle.is-open{" +
      "background:linear-gradient(160deg,#5bc0ff 0%,#1f8ae0 100%);" +
      "border-color:rgba(255,255,255,.55);color:#032038;" +
      "box-shadow:0 0 0 3px rgba(77,183,255,.28),0 10px 26px rgba(0,100,200,.35);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-panel{position:absolute;left:max(12px,env(safe-area-inset-left));" +
      "bottom:calc(76px + env(safe-area-inset-bottom,0px));width:min(308px,86vw);" +
      "pointer-events:auto;display:none;flex-direction:column;gap:12px;" +
      "padding:14px;border-radius:22px;" +
      "background:linear-gradient(165deg,rgba(16,58,108,.98),rgba(5,18,40,.99));" +
      "border:1px solid rgba(140,200,255,.38);" +
      "box-shadow:0 20px 48px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.12);" +
      "-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-panel.is-open{display:flex;animation:pvpPanelIn .18s cubic-bezier(.2,.9,.2,1);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-panel::after{content:'';position:absolute;left:18px;bottom:-7px;" +
      "width:14px;height:14px;background:rgba(7,24,48,.99);" +
      "border-right:1px solid rgba(140,200,255,.38);" +
      "border-bottom:1px solid rgba(140,200,255,.38);" +
      "transform:rotate(45deg);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-label{font-size:11px;letter-spacing:.08em;text-transform:uppercase;" +
      "color:rgba(190,220,255,.7);padding:0 2px 2px;font-weight:700;text-align:center;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-emojis{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;" +
      "max-height:none;overflow:visible;padding:0;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-emoji{appearance:none;border:0;border-radius:14px;" +
      "aspect-ratio:1;width:100%;min-height:0;padding:6px;" +
      "cursor:pointer;display:flex;align-items:center;justify-content:center;" +
      "background:rgba(255,255,255,.06);" +
      "border:1px solid rgba(170,210,255,.14);" +
      "transition:transform .12s ease,background .15s ease,border-color .15s ease,box-shadow .15s ease;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-emoji img{width:100%;height:100%;object-fit:contain;" +
      "display:block;pointer-events:none;" +
      "filter:drop-shadow(0 2px 4px rgba(0,0,0,.25));}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-emoji:hover{background:rgba(100,180,255,.16);" +
      "border-color:rgba(190,220,255,.45);transform:translateY(-1px);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-emoji:active,.pvp-chat-emoji.is-flash{" +
      "transform:scale(.9);background:rgba(77,183,255,.3);" +
      "border-color:rgba(255,255,255,.8);" +
      "box-shadow:0 0 0 2px rgba(77,183,255,.4);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-divider{height:1px;margin:2px 4px 0;" +
      "background:linear-gradient(90deg,transparent,rgba(140,190,255,.4),transparent);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-row{display:flex;gap:8px;align-items:center;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-input{flex:1;min-width:0;box-sizing:border-box;border-radius:999px;" +
      "border:1px solid rgba(150,200,255,.28);background:rgba(0,12,32,.82);color:#fff;" +
      "padding:12px 14px;font:inherit;font-size:14px;outline:none;" +
      "transition:border-color .15s ease,box-shadow .15s ease;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-input:focus{border-color:rgba(100,190,255,.75);" +
      "box-shadow:0 0 0 3px rgba(77,183,255,.2);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-input::placeholder{color:rgba(200,225,255,.38);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-send{appearance:none;border:0;border-radius:999px;padding:12px 18px;" +
      "font:inherit;font-size:14px;cursor:pointer;flex-shrink:0;" +
      "background:linear-gradient(180deg,#6bc8ff,#1f8ae0);color:#032038;font-weight:700;" +
      "box-shadow:0 4px 14px rgba(0,100,200,.35),inset 0 1px 0 rgba(255,255,255,.4);" +
      "transition:transform .12s ease,filter .15s ease;}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-send:hover{filter:brightness(1.06);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-send:active{transform:scale(.96);}" +
      "#" +
      ROOT_ID +
      " .pvp-chat-send:disabled{opacity:.45;cursor:default;filter:none;}" +
      "#" +
      ROOT_ID +
      ".is-hidden{display:none!important;}";
    if (css) {
      css.textContent = cssText;
      return;
    }
    css = document.createElement("style");
    css.id = STYLE_ID;
    css.textContent = cssText;
    document.head.appendChild(css);
  }

  function normalizeEmojiId(id) {
    if (!id) return "";
    var s = String(id).replace(/^.*[\\/]/, "");
    return EMOJI_SET[s] ? s : "";
  }

  function emojiSrc(id) {
    var n = normalizeEmojiId(id);
    return n ? EMOJI_DIR + n : "";
  }

  function setPanelOpen(on) {
    panelOpen = !!on;
    ensureRoot();
    if (panelEl) {
      if (panelOpen) panelEl.classList.add("is-open");
      else panelEl.classList.remove("is-open");
    }
    if (toggleBtn) {
      if (panelOpen) toggleBtn.classList.add("is-open");
      else toggleBtn.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", panelOpen ? "true" : "false");
      toggleBtn.textContent = panelOpen ? "✕" : "💬";
    }
    if (panelOpen && inputEl) {
      setTimeout(function () {
        try {
          inputEl.focus();
        } catch (e) {}
      }, 40);
    }
  }

  function flashEmojiBtn(btn) {
    if (!btn) return;
    btn.classList.add("is-flash");
    setTimeout(function () {
      btn.classList.remove("is-flash");
    }, 220);
  }

  function ensureRoot() {
    ensureStyle();
    root = document.getElementById(ROOT_ID);
    if (
      root &&
      root.querySelector(".pvp-chat-toggle") &&
      root.querySelector(".pvp-chat-local")
    ) {
      bubbleHost = root.querySelector(".pvp-chat-bubbles");
      localHost = root.querySelector(".pvp-chat-local");
      panelEl = root.querySelector(".pvp-chat-panel");
      toggleBtn = root.querySelector(".pvp-chat-toggle");
      inputEl = root.querySelector(".pvp-chat-input");
      return root;
    }
    if (root && root.parentNode) root.parentNode.removeChild(root);

    root = document.createElement("div");
    root.id = ROOT_ID;
    root.className = "is-hidden";
    var emojiHtml = EMOJIS.map(function (e) {
      return (
        '<button type="button" class="pvp-chat-emoji" data-emoji="' +
        e +
        '" aria-label="' +
        e.replace(/\.[^.]+$/, "") +
        '"><img src="' +
        EMOJI_DIR +
        e +
        '" alt="" draggable="false" /></button>'
      );
    }).join("");
    root.innerHTML =
      '<div class="pvp-chat-bubbles" aria-live="polite"></div>' +
      '<div class="pvp-chat-local" aria-live="polite"></div>' +
      '<div class="pvp-chat-panel" role="dialog" aria-label="Chat">' +
      '<div class="pvp-chat-label">Quick react</div>' +
      '<div class="pvp-chat-emojis">' +
      emojiHtml +
      "</div>" +
      '<div class="pvp-chat-divider"></div>' +
      '<div class="pvp-chat-row">' +
      '<input class="pvp-chat-input" type="text" maxlength="' +
      MAX_LEN +
      '" autocomplete="off" spellcheck="false" placeholder="Type a message…" inputmode="text" />' +
      '<button type="button" class="pvp-chat-send">Send</button>' +
      "</div></div>" +
      '<button type="button" class="pvp-chat-toggle" aria-label="Chat" aria-expanded="false">💬</button>';
    document.body.appendChild(root);
    bubbleHost = root.querySelector(".pvp-chat-bubbles");
    localHost = root.querySelector(".pvp-chat-local");
    panelEl = root.querySelector(".pvp-chat-panel");
    toggleBtn = root.querySelector(".pvp-chat-toggle");
    inputEl = root.querySelector(".pvp-chat-input");

    root.addEventListener("click", function (ev) {
      var t = ev.target;
      if (!t) return;
      var toggle = t.closest ? t.closest(".pvp-chat-toggle") : null;
      if (toggle || (t.classList && t.classList.contains("pvp-chat-toggle"))) {
        setPanelOpen(!panelOpen);
        return;
      }
      var emojiBtn = t.closest ? t.closest(".pvp-chat-emoji") : null;
      var emoji =
        (emojiBtn && emojiBtn.getAttribute("data-emoji")) ||
        (t.getAttribute && t.getAttribute("data-emoji"));
      if (emoji) {
        flashEmojiBtn(emojiBtn || t);
        if (sendChat({ emoji: emoji, text: "" })) {
          setPanelOpen(false);
        }
        return;
      }
      var sendBtn = t.closest ? t.closest(".pvp-chat-send") : null;
      if (sendBtn || (t.classList && t.classList.contains("pvp-chat-send"))) {
        submitInput();
      }
    });

    document.addEventListener(
      "pointerdown",
      function (ev) {
        if (!panelOpen || !root || !visible) return;
        var t = ev.target;
        if (!t) return;
        if (root.contains(t)) return;
        setPanelOpen(false);
      },
      true,
    );

    if (inputEl) {
      inputEl.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          ev.preventDefault();
          submitInput();
        } else if (ev.key === "Escape") {
          setPanelOpen(false);
        }
      });
    }
    return root;
  }

  function findOpponentAnchor() {
    try {
      if (!global.cc || !cc.find || !cc.director) return null;
      var paths = [
        "Canvas/ui_root/GameUI/pvp99rootVSN/top/opponents",
        "Canvas/ui_root/GameUI/pvp99root/top/opponents",
        "Canvas/ui_root/GameUI/pvp99rootVSN/nodeOpponents",
        "Canvas/ui_root/GameUI/pvp99root/nodeOpponents",
      ];
      for (var i = 0; i < paths.length; i++) {
        var n = cc.find(paths[i]);
        if (n && cc.isValid(n)) return n;
      }
      var scene = cc.director.getScene();
      if (!scene) return null;
      var stack = [scene];
      while (stack.length) {
        var cur = stack.pop();
        if (!cur || !cc.isValid(cur)) continue;
        if (cur.name === "opponents" || cur.name === "nodeOpponents")
          return cur;
        var kids = cur.children || [];
        for (var k = 0; k < kids.length; k++) stack.push(kids[k]);
      }
    } catch (e) {}
    return null;
  }

  function placeBubbleHost() {
    if (!bubbleHost) return;
    var node = findOpponentAnchor();
    if (!node || !global.cc) {
      bubbleHost.style.left = "4%";
      bubbleHost.style.top = "7%";
      bubbleHost.style.width = "42%";
      bubbleHost.style.height = "22%";
      return;
    }
    try {
      var rect = node.getBoundingBoxToWorld
        ? node.getBoundingBoxToWorld()
        : null;
      var canvas =
        document.getElementById("GameCanvas") ||
        document.querySelector("canvas");
      if (!rect || !canvas) return;
      var cRect = canvas.getBoundingClientRect();
      var vs = cc.view.getVisibleSize();
      var sx = cRect.width / vs.width;
      var sy = cRect.height / vs.height;
      var left = cRect.left + rect.x * sx;
      var top = cRect.top + (vs.height - rect.y - rect.height) * sy;
      var w = Math.max(80, rect.width * sx);
      var h = Math.max(60, rect.height * sy);
      bubbleHost.style.left = left + "px";
      bubbleHost.style.top = top + "px";
      bubbleHost.style.width = w + "px";
      bubbleHost.style.height = h + "px";
    } catch (e) {}
  }

  function showBubble(payload, mine) {
    ensureRoot();
    var host = mine ? localHost : bubbleHost;
    if (!host) return;
    if (!mine) placeBubbleHost();

    var text = payload && payload.text ? String(payload.text).trim() : "";
    var emoji = normalizeEmojiId(payload && payload.emoji);
    if (!text && !emoji) return;

    var el = document.createElement("div");
    el.className =
      "pvp-chat-bubble" +
      (emoji && !text ? " is-emoji" : "") +
      (mine ? " is-mine" : "");

    if (emoji && !text) {
      var img = document.createElement("img");
      img.src = emojiSrc(emoji);
      img.alt = "";
      img.draggable = false;
      el.appendChild(img);
    } else if (emoji) {
      var img2 = document.createElement("img");
      img2.src = emojiSrc(emoji);
      img2.alt = "";
      img2.draggable = false;
      img2.style.width = "28px";
      img2.style.height = "28px";
      img2.style.verticalAlign = "middle";
      img2.style.marginRight = "6px";
      el.appendChild(img2);
      el.appendChild(document.createTextNode(text));
    } else {
      el.textContent = text;
    }
    host.appendChild(el);

    setTimeout(function () {
      el.classList.add("is-out");
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 380);
    }, BUBBLE_MS);
  }

  function canSend() {
    var sync = global.__pvpPeerSync;
    return !!(sync && sync.connReady && typeof sync.send === "function");
  }

  function sendChat(payload) {
    var now = Date.now();
    if (now - lastSendAt < SEND_COOLDOWN_MS) return false;
    var text = payload && payload.text ? String(payload.text).trim() : "";
    var emoji = normalizeEmojiId(payload && payload.emoji);
    if (text) text = text.slice(0, MAX_LEN);
    if (!text && !emoji) return false;
    if (!canSend()) {
      console.warn("[pvp-chat] peer not ready");
      return false;
    }
    var msg = { k: "chat", text: text, emoji: emoji, t: now };
    try {
      global.__pvpPeerSync.send(msg);
    } catch (e) {
      console.warn("[pvp-chat] send failed", e);
      return false;
    }
    lastSendAt = now;
    showBubble(msg, true);
    return true;
  }

  function submitInput() {
    if (!inputEl) return;
    var v = String(inputEl.value || "").trim();
    if (!v) return;
    if (sendChat({ text: v, emoji: "" })) {
      inputEl.value = "";
      setPanelOpen(false);
    }
  }

  function setVisible(on) {
    ensureRoot();
    visible = !!on;
    if (visible) {
      root.classList.remove("is-hidden");
      placeBubbleHost();
    } else {
      root.classList.add("is-hidden");
      setPanelOpen(false);
      if (bubbleHost) bubbleHost.innerHTML = "";
      if (localHost) localHost.innerHTML = "";
    }
  }

  function shouldShow() {
    try {
      var sync = global.__pvpPeerSync;
      if (!sync || !sync.connReady) return false;
      if (!global.cc || !cc.director) return true;
      var scene = cc.director.getScene();
      if (!scene) return true;
      var name = String(scene.name || "");
      // Hide on pure home / adventure hubs
      if (/adventure|hall|home|login|start/i.test(name) && !/pvp/i.test(name)) {
        return false;
      }
      if (/pvp|endless|peer|game|match/i.test(name)) return true;
      return !!(
        cc.find("Canvas/ui_root/GameUI/pvp99rootVSN") ||
        cc.find("Canvas/ui_root/GameUI/pvp99root") ||
        cc.find("Canvas/ui_root/GameUI/endLessRoot") ||
        cc.find("Canvas/ui_root/GameUI") ||
        cc.find("Canvas/GameUI")
      );
    } catch (e) {
      return !!(global.__pvpPeerSync && global.__pvpPeerSync.connReady);
    }
  }

  function tick() {
    var on = shouldShow();
    if (on !== visible) setVisible(on);
    else if (on) placeBubbleHost();
  }

  function startWatcher() {
    if (watchTimer) return;
    watchTimer = setInterval(tick, 700);
    if (global.cc && cc.director) {
      try {
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          setTimeout(tick, 300);
          setTimeout(tick, 1200);
        });
      } catch (e) {}
    }
  }

  global.__pvpOnPeerChat = function (msg) {
    if (!msg || msg.k !== "chat") return;
    showBubble(
      {
        text: msg.text || "",
        emoji: msg.emoji || "",
      },
      false,
    );
    if (!visible) setVisible(true);
  };

  global.__pvpChat = {
    send: sendChat,
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
    openPanel: function () {
      setVisible(true);
      setPanelOpen(true);
    },
    closePanel: function () {
      setPanelOpen(false);
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startWatcher);
  } else {
    startWatcher();
  }

  console.log("[pvp-chat] ready — polished panel");
})(typeof window !== "undefined" ? window : this);
