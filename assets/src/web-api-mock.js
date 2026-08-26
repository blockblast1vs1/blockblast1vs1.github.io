/**
 * Offline web API mocks for Block Blast.
 * - Mock game_init login (CORS bypass)
 * - Redirect miniGame CDN scripts to local empty stubs
 */
(function () {
  'use strict';

  var LOGIN_URL_RE = /game_init|unigate-test\.afafb\.com|gametester\.afafb\.com/i;
  var MINIGAME_URL_RE = /files\.hs99\.vip\/miniGame\//i;

  var LOGIN_RESPONSE = {
    code: 0,
    message: 'ok',
    serverKey: 'web-local',
    experimentDataMap: {
      defaultLayer: {
        gameWayNum: '10001',
        experimentType: 0,
        bucketId: 1,
        configData: {
          conditions: [],
          features: [],
          planId: 10001,
        },
      },
    },
  };

  try {
    localStorage.removeItem('__server_experiment_canapplynew__');
  } catch (e) {}

  function shouldMockLogin(url) {
    return typeof url === 'string' && LOGIN_URL_RE.test(url);
  }

  function shouldRewriteMiniGame(url) {
    return typeof url === 'string' && MINIGAME_URL_RE.test(url);
  }

  function rewriteMiniGameUrl(url) {
    if (!shouldRewriteMiniGame(url)) return url;
    var clean = url.split('?')[0].split('#')[0];
    var file = clean.slice(clean.lastIndexOf('/') + 1) || 'index.js';
    var bundleMatch = clean.match(/miniGame\/([^/]+)\//i);
    var bundle = (bundleMatch && bundleMatch[1]) || 'gl_hall';
    if (/^index(\.[a-f0-9]+)?\.js$/i.test(file)) file = 'index.js';
    if (/^config(\.[a-f0-9]+)?\.json$/i.test(file)) file = 'config.json';
    var local = 'assets/' + bundle + '/' + file;
    console.log('[web-api-mock] miniGame ->', local);
    return local;
  }

  function fakeXhr(xhr, body, status) {
    status = status || 200;
    var text = typeof body === 'string' ? body : JSON.stringify(body);
    Object.defineProperty(xhr, 'readyState', { configurable: true, get: function () { return 4; } });
    Object.defineProperty(xhr, 'status', { configurable: true, get: function () { return status; } });
    Object.defineProperty(xhr, 'responseText', { configurable: true, get: function () { return text; } });
    Object.defineProperty(xhr, 'response', { configurable: true, get: function () { return text; } });
    try {
      if (typeof xhr.onreadystatechange === 'function') xhr.onreadystatechange();
    } catch (e1) {}
    try {
      xhr.dispatchEvent(new Event('load'));
    } catch (e2) {
      if (typeof xhr.onload === 'function') {
        try { xhr.onload(); } catch (e3) {}
      }
    }
  }

  var nativeOpen = XMLHttpRequest.prototype.open;
  var nativeSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method, url) {
    if (shouldRewriteMiniGame(url)) {
      url = rewriteMiniGameUrl(url);
      arguments[1] = url;
    }
    this.__webMockUrl = url;
    return nativeOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function (body) {
    var url = this.__webMockUrl || '';
    if (shouldMockLogin(url)) {
      var self = this;
      console.log('[web-api-mock] login -> local stub', url);
      setTimeout(function () { fakeXhr(self, LOGIN_RESPONSE, 200); }, 20);
      return;
    }
    return nativeSend.apply(this, arguments);
  };

  if (window.fetch) {
    var nativeFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      if (shouldMockLogin(url)) {
        return Promise.resolve(
          new Response(JSON.stringify(LOGIN_RESPONSE), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      }
      if (shouldRewriteMiniGame(url)) {
        input = rewriteMiniGameUrl(url);
      }
      return nativeFetch(input, init);
    };
  }

  var scriptSrcDesc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
  if (scriptSrcDesc && scriptSrcDesc.set) {
    Object.defineProperty(HTMLScriptElement.prototype, 'src', {
      configurable: true,
      enumerable: scriptSrcDesc.enumerable,
      get: scriptSrcDesc.get,
      set: function (value) {
        scriptSrcDesc.set.call(this, rewriteMiniGameUrl(value));
      },
    });
  }

  console.log('[web-api-mock] enabled');
})();
