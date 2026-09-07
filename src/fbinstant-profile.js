/**
 * Facebook Instant Games profile overlay (Zero Permissions / SDK 8).
 * Name + photo via Meta overlay iframe — game never reads PII.
 * Visible only on the home scene (StartGameScene2).
 */
(function (global) {
  'use strict';

  var OVERLAY_XML = 'overlays/profile_card.xml';
  var OVERLAY_CSS = 'overlays/profile.css';
  var CONTAINER_ID = 'fb-profile-overlay';
  /** Main menu / home */
  var HOME_SCENE_RE = /^StartGameScene2$/i;

  var created = false;
  var visible = false;
  /** Desired visibility (home vs not) — create may finish after leave. */
  var wantVisible = false;
  var creating = null;
  var overlayRef = null;
  var directorHooked = false;
  var watching = false;
  var pollTimer = null;

  function hasOverlayApi() {
    return (
      typeof global.FBInstant !== 'undefined' &&
      global.FBInstant &&
      global.FBInstant.overlayViews &&
      typeof global.FBInstant.overlayViews.createOverlayViewAsync === 'function'
    );
  }

  function ensureContainer() {
    var el = document.getElementById(CONTAINER_ID);
    if (el) return el;

    el = document.createElement('div');
    el.id = CONTAINER_ID;
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
    return el;
  }

  function sceneBaseName(name) {
    if (!name) return '';
    var s = String(name);
    var slash = Math.max(s.lastIndexOf('/'), s.lastIndexOf('\\'));
    if (slash >= 0) s = s.slice(slash + 1);
    return s.replace(/\.fire$/i, '');
  }

  function isHomeSceneName(name) {
    return HOME_SCENE_RE.test(sceneBaseName(name));
  }

  /** Home UI marker used by web-pvp (Canvas/btn/btnNode). */
  function hasHomeUi() {
    try {
      if (!global.cc || !cc.find) return false;
      return !!(cc.find('Canvas/btn/btnNode') || cc.find('btn/btnNode'));
    } catch (e) {
      return false;
    }
  }

  function getCurrentSceneName() {
    try {
      if (!global.cc || !cc.director || typeof cc.director.getScene !== 'function') {
        return null;
      }
      var sc = cc.director.getScene();
      return sc && sc.name ? sc.name : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * loadScene gets a string; runScene* often gets a Scene object.
   * Never treat a non-scene-name arg as "not home".
   */
  function resolveSceneName(arg) {
    if (typeof arg === 'string' && arg) return arg;
    if (arg && typeof arg === 'object' && typeof arg.name === 'string' && arg.name) {
      return arg.name;
    }
    return getCurrentSceneName();
  }

  function isOnHome(nameHint) {
    var name = nameHint || getCurrentSceneName();
    if (isHomeSceneName(name)) return true;
    // Fallback: scene name empty/odd but home canvas is up
    if (hasHomeUi() && !isGameplayScene(name)) return true;
    return false;
  }

  function isGameplayScene(name) {
    var base = sceneBaseName(name);
    if (!base) return false;
    return /GameScene|TravelGame|JewelGame|Puzzle|Achievement|pvp|LevelNoTheme|Comob|Rotate/i.test(
      base,
    ) && !HOME_SCENE_RE.test(base);
  }

  function setHostVisible(on) {
    var el = ensureContainer();
    if (on) el.classList.add('is-visible');
    else el.classList.remove('is-visible');
  }

  function showLocalFallback() {
    var el = ensureContainer();
    el.classList.add('is-local');
    if (!el.querySelector('.fb-profile-local')) {
      el.innerHTML =
        '<div class="fb-profile-local">' +
        '<div class="fb-profile-local-avatar"></div>' +
        '<div class="fb-profile-local-name">Player</div>' +
        '</div>';
    }
    created = true;
  }

  function createOverlayOnce() {
    if (created && (overlayRef || ensureContainer().querySelector('.fb-profile-local'))) {
      return Promise.resolve(overlayRef);
    }
    if (creating) return creating;

    var bridge = global.FBInstantBridge;
    var instant =
      bridge && typeof bridge.isInstant === 'function' && bridge.isInstant();

    if (!instant || !hasOverlayApi()) {
      console.log('[FBInstant] profile overlay — local fallback');
      showLocalFallback();
      return Promise.resolve(null);
    }

    var container = ensureContainer();
    container.classList.remove('is-local');
    if (!container.querySelector('iframe')) container.innerHTML = '';

    var style =
      'width: 100%; height: 100%; border: none; background: transparent; display: block;';

    creating = global.FBInstant.overlayViews
      .createOverlayViewAsync(OVERLAY_XML, container, style, OVERLAY_CSS)
      .then(function (overlay) {
        overlayRef = overlay;
        created = true;
        creating = null;
        if (overlay && typeof overlay.showAsync === 'function') {
          return overlay.showAsync().then(function () {
            console.log('[FBInstant] profile overlay created');
            return overlay;
          });
        }
        console.log('[FBInstant] profile overlay created');
        return overlay;
      })
      .catch(function (err) {
        creating = null;
        console.warn('[FBInstant] profile overlay failed:', err);
        showLocalFallback();
        return null;
      });

    return creating;
  }

  function showProfile() {
    wantVisible = true;
    if (visible) {
      setHostVisible(true);
      return Promise.resolve(overlayRef);
    }

    return createOverlayOnce().then(function () {
      if (!wantVisible) {
        setHostVisible(false);
        visible = false;
        return overlayRef;
      }
      setHostVisible(true);
      visible = true;
      console.log('[FBInstant] profile shown (home)');
      return overlayRef;
    });
  }

  function hideProfile() {
    wantVisible = false;
    setHostVisible(false);
    visible = false;
  }

  function syncToScene(nameHint) {
    if (isOnHome(nameHint)) showProfile();
    else hideProfile();
  }

  function onSceneChange(arg) {
    try {
      var name = resolveSceneName(arg);
      // Defer one tick so getScene().name is updated after runScene*
      setTimeout(function () {
        syncToScene(resolveSceneName(name) || getCurrentSceneName());
      }, 0);
    } catch (e) {}
  }

  function wrapLoadScene() {
    if (!cc.director.loadScene || cc.director.loadScene.__fbProfileWrapped) return;
    var original = cc.director.loadScene;
    var wrapped = function (name) {
      var result = original.apply(this, arguments);
      try {
        if (typeof name === 'string' && name) onSceneChange(name);
      } catch (e) {}
      return result;
    };
    wrapped.__fbProfileWrapped = true;
    cc.director.loadScene = wrapped;
  }

  function hookDirector() {
    if (directorHooked) return true;
    if (!global.cc || !cc.director) return false;
    directorHooked = true;

    wrapLoadScene();

    try {
      if (
        cc.Director &&
        cc.Director.EVENT_AFTER_SCENE_LAUNCH &&
        typeof cc.director.on === 'function'
      ) {
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          onSceneChange(getCurrentSceneName());
        });
      }
    } catch (e) {}

    return true;
  }

  function startPolling() {
    if (pollTimer) return;
    var ticks = 0;
    pollTimer = setInterval(function () {
      ticks++;
      hookDirector();
      syncToScene(getCurrentSceneName());
      // Keep light polling — scene hooks miss some transitions
      if (ticks > 150) {
        // After ~45s, poll less often
        clearInterval(pollTimer);
        pollTimer = setInterval(function () {
          syncToScene(getCurrentSceneName());
        }, 1000);
      }
    }, 300);
  }

  /**
   * Call after startGameAsync. Shows profile only while on home;
   * hides on gameplay / other scenes.
   */
  function startWatching() {
    if (watching) {
      syncToScene(getCurrentSceneName());
      return;
    }
    watching = true;

    hookDirector();
    startPolling();
    syncToScene(getCurrentSceneName());
    // Home often loads a moment after startGameAsync (StartScene → StartGameScene2)
    setTimeout(function () {
      syncToScene(getCurrentSceneName());
    }, 500);
    setTimeout(function () {
      syncToScene(getCurrentSceneName());
    }, 1500);
    setTimeout(function () {
      syncToScene(getCurrentSceneName());
    }, 3000);
  }

  global.FBInstantProfile = {
    show: showProfile,
    hide: hideProfile,
    start: startWatching,
    sync: function () {
      syncToScene(getCurrentSceneName());
    },
  };
})(typeof window !== 'undefined' ? window : this);
