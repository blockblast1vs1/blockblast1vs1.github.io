/**
 * Decrypt Cocos Creator native image assets (XXTEA) for web playback.
 * Keys: UUID basename prefix, default app key, or alternate bundle key.
 */
(function () {
  'use strict';

  var DEFAULT_KEY = '65485d8a-8161-4c';
  var ALT_KEY = 'a317fbf2-577d-44';
  var JYCRYPT = 'jycrypt';

  function padKey(key) {
    var bytes = [];
    for (var i = 0; i < key.length; i++) bytes.push(key.charCodeAt(i));
    while (bytes.length < 16) bytes.push(0);
    return bytes.slice(0, 16);
  }

  function toUint32Array(data, includeLength) {
    var n = (((data.length + 3) >>> 2) + (includeLength ? 1 : 0)) | 0;
    var out = new Uint32Array(n);
    for (var i = 0; i < data.length; i++) {
      out[i >>> 2] |= data[i] << ((i & 3) << 3);
    }
    if (includeLength) out[n - 1] = data.length;
    return out;
  }

  function toByteArray(data, length) {
    var out = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
      out[i] = (data[i >>> 2] >>> ((i & 3) << 3)) & 0xff;
    }
    return out;
  }

  function mx(sum, y, z, p, e, k) {
    return (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^ ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
  }

  function xxteaDecrypt(data, keyBytes) {
    if (!data || data.length < 8) return null;
    var v = toUint32Array(data, false);
    var k = toUint32Array(new Uint8Array(keyBytes), false);
    var n = v.length;
    if (n < 2) return null;

    var rounds = 6 + Math.floor(52 / n);
    var sum = (rounds * 0x9e3779b9) >>> 0;
    var y = v[0];
    var z;

    while (sum !== 0) {
      var e = (sum >>> 2) & 3;
      for (var p = n - 1; p > 0; p--) {
        z = v[p - 1];
        y = v[p] = (v[p] - mx(sum, y, z, p, e, k)) >>> 0;
      }
      z = v[n - 1];
      y = v[0] = (v[0] - mx(sum, y, z, 0, e, k)) >>> 0;
      sum = (sum - 0x9e3779b9) >>> 0;
    }

    var length = v[n - 1];
    if (length < 0 || length > (n - 1) * 4) return null;
    return toByteArray(v, length);
  }

  function xorJycrypt(data) {
    var out = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
      out[i] = data[i] ^ JYCRYPT.charCodeAt(i % JYCRYPT.length);
    }
    return out;
  }

  function isImageMagic(data) {
    if (!data || data.length < 4) return false;
    if (data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4e && data[3] === 0x47) return true;
    if (data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff) return true;
    if (data[0] === 0x52 && data[1] === 0x49 && data[2] === 0x46 && data[3] === 0x46) return true;
    if (data[0] === 0x47 && data[1] === 0x49 && data[2] === 0x46) return true;
    return false;
  }

  function mimeFromMagic(data) {
    if (!data || data.length < 4) return 'application/octet-stream';
    if (data[0] === 0x89 && data[1] === 0x50) return 'image/png';
    if (data[0] === 0xff && data[1] === 0xd8) return 'image/jpeg';
    if (data[0] === 0x47 && data[1] === 0x49) return 'image/gif';
    if (data[0] === 0x52 && data[1] === 0x49) return 'image/webp';
    return 'application/octet-stream';
  }

  function collectKeys(baseName) {
    var keys = [];
    var seen = {};
    function add(key) {
      var id = key.join(',');
      if (!seen[id]) {
        seen[id] = true;
        keys.push(key);
      }
    }
    if (baseName.length >= 17) add(padKey(baseName.slice(0, 16)));
    add(padKey(DEFAULT_KEY));
    add(padKey(ALT_KEY));
    return keys;
  }

  function buildPayloads(data) {
    var payloads = [];
    var seen = {};
    function add(payload) {
      if (!payload || !payload.length) return;
      var id = payload.byteOffset + ':' + payload.byteLength + ':' + payload[0];
      if (seen[id]) return;
      seen[id] = true;
      payloads.push(payload);
    }
    add(data);
    if (data.length > JYCRYPT.length) {
      var header = '';
      for (var i = 0; i < JYCRYPT.length; i++) {
        header += String.fromCharCode(data[i]);
      }
      if (header === JYCRYPT) {
        add(data.slice(JYCRYPT.length));
      }
    }
    add(xorJycrypt(data));
    return payloads;
  }

  function decryptNativeImage(data, baseName) {
    if (!data || !data.length) return data;
    if (isImageMagic(data)) return data;

    var keys = collectKeys(baseName || '');
    var payloads = buildPayloads(data);
    for (var ki = 0; ki < keys.length; ki++) {
      for (var pi = 0; pi < payloads.length; pi++) {
        var dec = xxteaDecrypt(payloads[pi], keys[ki]);
        if (dec && isImageMagic(dec)) return dec;
      }
    }
    return data;
  }

  function baseNameFromPath(path) {
    var clean = path.split('?')[0].split('#')[0];
    var parts = clean.split('/');
    var file = parts[parts.length - 1] || '';
    var dot = file.lastIndexOf('.');
    return dot >= 0 ? file.slice(0, dot) : file;
  }

  function toImageBlob(data, fallbackType) {
    var bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    var type = mimeFromMagic(bytes);
    if (type === 'application/octet-stream' && fallbackType) {
      type = fallbackType;
    }
    return new Blob([bytes], { type: type });
  }

  function decryptBlob(blob, baseName, callback) {
    if (!(blob instanceof Blob)) {
      callback(null, blob);
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      var bytes = new Uint8Array(reader.result);
      var out = decryptNativeImage(bytes, baseName);
      callback(null, toImageBlob(out, blob.type));
    };
    reader.onerror = function () {
      callback(reader.error || new Error('read blob failed'), null);
    };
    reader.readAsArrayBuffer(blob);
  }

  function normalizeAssetUrl(url) {
    if (typeof url !== 'string') {
      return url;
    }
    if (typeof window.__rewriteRemoteUrl === 'function') {
      return window.__rewriteRemoteUrl(url);
    }
    return url;
  }

  function fetchDecryptedBlob(url, callback) {
    url = normalizeAssetUrl(url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (xhr.status !== 200 && xhr.status !== 0) {
        callback(new Error('download failed: ' + url + ', status: ' + xhr.status), null);
        return;
      }
      decryptBlob(xhr.response, baseNameFromPath(url), callback);
    };
    xhr.onerror = function () {
      callback(new Error('download failed: ' + url + ', status: ' + xhr.status + '(error)'), null);
    };
    xhr.send(null);
    return xhr;
  }

  function downloadDomImage(url, options, onComplete) {
    url = normalizeAssetUrl(url);
    fetchDecryptedBlob(url, function (err, blob) {
      if (err || !blob) {
        onComplete && onComplete(err || new Error('download failed: ' + url), null);
        return;
      }

      var img = new Image();
      var objectUrl = URL.createObjectURL(blob);

      function cleanup() {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onError);
        URL.revokeObjectURL(objectUrl);
      }

      function onLoad() {
        cleanup();
        onComplete && onComplete(null, img);
      }

      function onError() {
        cleanup();
        onComplete && onComplete(new Error('download failed: ' + url + ', status: decode'), null);
      }

      if (window.location.protocol !== 'file:') {
        img.crossOrigin = 'anonymous';
      }
      img.addEventListener('load', onLoad);
      img.addEventListener('error', onError);
      img.src = objectUrl;
    });
  }

  window.NativeImageDecrypt = {
    decryptNativeImage: decryptNativeImage,
    decryptBlob: decryptBlob,
    baseNameFromPath: baseNameFromPath,
    isImageMagic: isImageMagic,
    mimeFromMagic: mimeFromMagic,
    toImageBlob: toImageBlob,
    fetchDecryptedBlob: fetchDecryptedBlob,
    downloadDomImage: downloadDomImage,
  };
})();
