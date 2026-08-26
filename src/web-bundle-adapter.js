/**
 * Redirect remote Cocos bundle loads to local assets/ for browser play.
 * Load as early as possible (head) so XHR/fetch/script hooks run before the engine.
 */
(function () {
    'use strict';

    var REMOTE_PREFIX = /\/remote\/android\/prod\//;
    var REMOTE_HOST = /bband1\.afafb\.com/i;
    var LOCAL_BUNDLE_FILE = /assets\/([^/]+)\/(config|index)\.([a-f0-9]+)\.(json|js)/i;
    var nativeAssetMap = null;
    var nativeUuidMap = null;

    function extPriority(ext) {
        switch ((ext || '').toLowerCase()) {
            case '.png':
                return 4;
            case '.webp':
                return 3;
            case '.jpg':
            case '.jpeg':
                return 2;
            case '.pkm':
                return 1;
            default:
                return 0;
        }
    }

    function rememberNativeAsset(map, nativeRel, fullPath) {
        var key = nativeRel.toLowerCase();
        var existing = map[key];
        if (!existing) {
            map[key] = fullPath;
            return;
        }
        if (extPriority(key.slice(key.lastIndexOf('.'))) > extPriority(existing.slice(existing.lastIndexOf('.')))) {
            map[key] = fullPath;
        }
    }

    function loadNativeAssetMap() {
        fetch('/src/project.manifest')
            .then(function (resp) {
                return resp.ok ? resp.json() : null;
            })
            .then(function (manifest) {
                if (!manifest || !manifest.assets) {
                    return;
                }

                var map = {};
                var uuidMap = {};
                for (var assetPath in manifest.assets) {
                    if (!Object.prototype.hasOwnProperty.call(manifest.assets, assetPath)) {
                        continue;
                    }
                    var match = assetPath.match(
                        /^assets\/([^/]+)\/(native\/[0-9a-f]{2}\/[0-9a-f-]+)\.([a-z0-9]+)$/i
                    );
                    if (!match) {
                        continue;
                    }

                    var nativeRel = match[2] + '.' + match[3].toLowerCase();
                    rememberNativeAsset(map, nativeRel, assetPath);

                    var ext = '.' + match[3].toLowerCase();
                    var uuidMatch = match[2].match(/\/([0-9a-f-]+)$/i);
                    var uuid = uuidMatch && uuidMatch[1];
                    if (uuid && extPriority(ext) > 0) {
                        var prev = uuidMap[uuid];
                        if (!prev || extPriority(ext) > extPriority(prev.ext)) {
                            uuidMap[uuid] = { path: assetPath, ext: ext };
                        }
                    }
                }

                nativeAssetMap = map;
                nativeUuidMap = uuidMap;
                console.log('[web-bundle-adapter] Native asset map loaded:', Object.keys(map).length);
            })
            .catch(function () {});
    }

    function rewriteNativeAssetPath(url) {
        if (!nativeAssetMap || typeof url !== 'string') {
            return url;
        }

        var suffix = '';
        var hashIndex = url.indexOf('#');
        var queryIndex = url.indexOf('?');
        var splitAt = -1;
        if (queryIndex >= 0 && hashIndex >= 0) {
            splitAt = Math.min(queryIndex, hashIndex);
        } else if (queryIndex >= 0) {
            splitAt = queryIndex;
        } else if (hashIndex >= 0) {
            splitAt = hashIndex;
        }
        var clean = splitAt >= 0 ? url.slice(0, splitAt) : url;
        if (splitAt >= 0) {
            suffix = url.slice(splitAt);
        }

        var match = clean.match(/assets\/[^/]+\/(native\/[0-9a-f]{2}\/[0-9a-f-]+)\.([a-z0-9]+)$/i);
        if (!match) {
            return url;
        }

        var nativeRel = match[1] + '.' + match[2].toLowerCase();
        var canonical = nativeAssetMap[nativeRel];

        if (!canonical && match[2].toLowerCase() === 'pkm') {
            canonical = nativeAssetMap[match[1] + '.png'];
        }

        if (!canonical && nativeUuidMap) {
            var uuidMatch = match[1].match(/\/([0-9a-f-]+)$/i);
            var uuid = uuidMatch && uuidMatch[1];
            if (uuid && nativeUuidMap[uuid]) {
                canonical = nativeUuidMap[uuid].path;
            }
        }

        if (canonical && clean !== canonical && clean.indexOf(canonical) === -1) {
            return canonical + suffix;
        }

        return url;
    }

    function getLocalBundleVers() {
        return (window._CCSettings && window._CCSettings.bundleVers) || null;
    }

    function extractBundleName(nameOrUrl) {
        if (!nameOrUrl || typeof nameOrUrl !== 'string') {
            return nameOrUrl;
        }
        var name = nameOrUrl.split('?')[0].split('#')[0];
        var remoteMatch = name.match(/\/remote\/android\/prod\/([^/]+)\//);
        if (remoteMatch) {
            return remoteMatch[1];
        }
        remoteMatch = name.match(/\/remote\/android\/prod\/([^/]+)\/?$/);
        if (remoteMatch) {
            return remoteMatch[1];
        }
        var localMatch = name.match(/assets\/([^/]+)\//);
        if (localMatch) {
            return localMatch[1];
        }
        if (/^https?:\/\//i.test(name)) {
            name = name.replace(/\/+$/, '');
            return name.slice(name.lastIndexOf('/') + 1);
        }
        return name;
    }

    function getUrlFileName(url) {
        if (typeof url !== 'string') {
            return '';
        }
        var clean = url.split('?')[0].split('#')[0].replace(/\/+$/, '');
        return clean.slice(clean.lastIndexOf('/') + 1);
    }

    /**
     * Remote plain JSON configs (ABTestMaiDianOpen.json, comment.json, ...)
     * must NOT be treated as Cocos asset bundles.
     */
    function isPlainRemoteJson(url) {
        if (typeof url !== 'string') {
            return false;
        }
        if (/\/remote\/android\/prod\//i.test(url)) {
            return false;
        }
        var fileName = getUrlFileName(url);
        if (!/\.json$/i.test(fileName)) {
            return false;
        }
        // Real bundle config files: config.json / config.<hash>.json
        if (/^config(\.[a-f0-9]+)?\.json$/i.test(fileName)) {
            return false;
        }
        return true;
    }

    function isCocosRemoteBundleUrl(url) {
        if (typeof url !== 'string') {
            return false;
        }
        if (/\/remote\/android\/prod\//i.test(url)) {
            return true;
        }
        var fileName = getUrlFileName(url);
        return /^config(\.[a-f0-9]+)?\.json$/i.test(fileName) || /^index(\.[a-f0-9]+)?\.js$/i.test(fileName);
    }

    function hasLocalBundle(bundleName) {
        var vers = getLocalBundleVers();
        return !!(vers && vers[bundleName]);
    }

    function applyLocalBundleVersion(bundleName, options) {
        if (!options) {
            options = {};
        }
        var vers = getLocalBundleVers();
        if (vers && vers[bundleName]) {
            options.version = vers[bundleName];
        }
        delete options.isRemote;
        return options;
    }

    function shouldForceLocal(nameOrUrl, options) {
        var bundleName = extractBundleName(nameOrUrl);
        if (hasLocalBundle(bundleName)) {
            return true;
        }
        if (options && options.isRemote) {
            return true;
        }
        if (typeof nameOrUrl === 'string') {
            if (REMOTE_PREFIX.test(nameOrUrl) || REMOTE_HOST.test(nameOrUrl)) {
                return true;
            }
        }
        return false;
    }

    function normalizeBundleArgs(nameOrUrl, options, onComplete) {
        if (typeof options === 'function') {
            onComplete = options;
            options = {};
        }
        options = options || {};

        var bundleName = extractBundleName(nameOrUrl);
        if (hasLocalBundle(bundleName)) {
            return {
                name: bundleName,
                options: applyLocalBundleVersion(bundleName, options),
                onComplete: onComplete,
            };
        }

        if (!shouldForceLocal(nameOrUrl, options)) {
            return { name: nameOrUrl, options: options, onComplete: onComplete };
        }

        return {
            name: bundleName,
            options: applyLocalBundleVersion(bundleName, options),
            onComplete: onComplete,
        };
    }

    function rewriteLocalBundleVersion(url) {
        if (typeof url !== 'string') {
            return url;
        }

        var vers = getLocalBundleVers();
        if (!vers) {
            return url;
        }

        var match = url.match(LOCAL_BUNDLE_FILE);
        if (!match) {
            return url;
        }

        var bundleName = match[1];
        var fileKind = match[2];
        var remoteHash = match[3];
        var ext = match[4];
        var localVersion = vers[bundleName];

        if (localVersion && remoteHash !== localVersion) {
            return url.replace(
                fileKind + '.' + remoteHash + '.' + ext,
                fileKind + '.' + localVersion + '.' + ext
            );
        }

        return url;
    }

    // ETC1 (.pkm) textures only ship a PNG fallback under resources/.
    var PKM_ONLY_UUIDS = {
        '091e36f7-6ee5-4a92-884a-c9e1b2648d5e': true,
        '164d3636-fc71-4405-9524-c983b9ddb412': true,
        '23908cbe-1471-4199-ba44-847337fd55b1': true,
        '466aed5c-2fe1-4f9d-87ee-6ed1df211aa7': true,
        '468f8cd7-4593-4c08-abc6-274386d26359': true,
        '73b2548c-7276-4336-823a-239d37e9d58e': true,
        '78f59207-e4fe-4946-bd8e-060e6017b1ff': true,
        '7b501f5f-0c2e-4d88-8166-ce2651426599': true,
        'b368395a-614d-42c1-8a21-2c643cdeb7dc': true,
        'b8cccc3a-e850-454f-9b72-57f240296ca4': true,
        'bf28e74b-3fe0-4bd5-b400-cc5d4fda3a4b': true,
        'cd747dae-1131-4c2c-8af6-45dc2fc4e1c5': true,
        'd801c7a0-1b20-4280-b9f0-5b940335c960': true,
        'd805f9a8-1a52-4906-a288-bd854e3b2000': true,
        'dc2dcc7c-49a5-4dd7-beb0-e8d87790c3e4': true,
        'ee7c7704-aa7c-4fe6-9e7b-516326b535a7': true,
    };

    function rewriteEtcNativeToResourcesPng(url) {
        if (typeof url !== 'string') {
            return url;
        }

        var nativeMatch = url.match(
            /assets\/[^/]+\/(native\/[0-9a-f]{2}\/([0-9a-f-]+))\.(?:pkm|png)(\?|#|$)/i
        );
        if (nativeMatch) {
            var nativePath = nativeMatch[1];
            var uuid = nativeMatch[2];
            var suffix = nativeMatch[3] || '';
            if (/\.pkm(\?|#|$)/i.test(url) || PKM_ONLY_UUIDS[uuid]) {
                return 'assets/resources/' + nativePath + '.png' + suffix;
            }
            return url;
        }

        if (/\.pkm(\?|#|$)/i.test(url)) {
            return url.replace(/\.pkm(\?|#|$)/i, '.png$1');
        }

        return url;
    }

    function rewriteRemoteUrl(url) {
        if (typeof url !== 'string') {
            return url;
        }

        // Plain remote JSON configs → local stubs under remote-config/
        if ((REMOTE_HOST.test(url) || /syy_travel_google_game/i.test(url)) && isPlainRemoteJson(url)) {
            return 'remote-config/' + getUrlFileName(url);
        }

        if (REMOTE_PREFIX.test(url) || (REMOTE_HOST.test(url) && isCocosRemoteBundleUrl(url))) {
            var bundleName = extractBundleName(url);
            var vers = getLocalBundleVers();
            var version = vers && vers[bundleName];
            var fileName = getUrlFileName(url);
            if (version && /^config\.[a-f0-9]+\.json$/i.test(fileName)) {
                fileName = 'config.' + version + '.json';
            } else if (version && /^index\.[a-f0-9]+\.js$/i.test(fileName)) {
                fileName = 'index.' + version + '.js';
            }
            url = 'assets/' + bundleName + '/' + fileName;
        }

        return rewriteEtcNativeToResourcesPng(rewriteNativeAssetPath(rewriteLocalBundleVersion(url)));
    }

    function syncLocalBundleVers() {
        var localVers = getLocalBundleVers();
        if (!localVers || typeof cc === 'undefined' || !cc.assetManager || !cc.assetManager.downloader) {
            return false;
        }

        var bundleVers = cc.assetManager.downloader.bundleVers;
        for (var bundleName in localVers) {
            if (Object.prototype.hasOwnProperty.call(localVers, bundleName)) {
                bundleVers[bundleName] = localVers[bundleName];
            }
        }
        return true;
    }

    function installNetworkInterceptors() {
        if (window.__webBundleNetworkPatched) {
            return;
        }
        window.__webBundleNetworkPatched = true;

        var originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url) {
            var args = Array.prototype.slice.call(arguments);
            args[1] = rewriteRemoteUrl(url);
            return originalOpen.apply(this, args);
        };

        if (window.fetch) {
            var originalFetch = window.fetch.bind(window);
            window.fetch = function (input, init) {
                if (typeof input === 'string') {
                    input = rewriteRemoteUrl(input);
                } else if (input && input.url) {
                    input = rewriteRemoteUrl(input.url);
                }
                return originalFetch(input, init);
            };
        }

        var scriptSrcDesc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
        if (scriptSrcDesc && scriptSrcDesc.set) {
            Object.defineProperty(HTMLScriptElement.prototype, 'src', {
                configurable: true,
                enumerable: scriptSrcDesc.enumerable,
                get: scriptSrcDesc.get,
                set: function (value) {
                    scriptSrcDesc.set.call(this, rewriteRemoteUrl(value));
                },
            });
        }

        var originalSetAttribute = HTMLScriptElement.prototype.setAttribute;
        HTMLScriptElement.prototype.setAttribute = function (name, value) {
            if (name === 'src' && typeof value === 'string') {
                value = rewriteRemoteUrl(value);
            }
            return originalSetAttribute.call(this, name, value);
        };

        // Mobile browsers often load textures via new Image() instead of XHR.
        var imageSrcDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
        if (imageSrcDesc && imageSrcDesc.set) {
            Object.defineProperty(HTMLImageElement.prototype, 'src', {
                configurable: true,
                enumerable: imageSrcDesc.enumerable,
                get: imageSrcDesc.get,
                set: function (value) {
                    imageSrcDesc.set.call(this, rewriteRemoteUrl(value));
                },
            });
        }

        var originalImageSetAttribute = HTMLImageElement.prototype.setAttribute;
        HTMLImageElement.prototype.setAttribute = function (name, value) {
            if (name === 'src' && typeof value === 'string') {
                value = rewriteRemoteUrl(value);
            }
            return originalImageSetAttribute.call(this, name, value);
        };
    }

    function patchAssetManager() {
        if (typeof cc === 'undefined' || !cc.assetManager || cc.assetManager.__webBundlePatched) {
            return false;
        }

        var assetManager = cc.assetManager;
        var originalLoadBundle = assetManager.loadBundle.bind(assetManager);

        assetManager.loadBundle = function (nameOrUrl, options, onComplete) {
            syncLocalBundleVers();
            var normalized = normalizeBundleArgs(nameOrUrl, options, onComplete);
            return originalLoadBundle(normalized.name, normalized.options, normalized.onComplete);
        };

        if (assetManager.loadRemote) {
            var originalLoadRemote = assetManager.loadRemote.bind(assetManager);
            assetManager.loadRemote = function (url, options, onComplete) {
                // JsonAsset / plain .json remotes must stay as loadRemote, not loadBundle.
                if (typeof url === 'string' && isPlainRemoteJson(url)) {
                    return originalLoadRemote(rewriteRemoteUrl(url), options, onComplete);
                }
                if (typeof url === 'string' && isCocosRemoteBundleUrl(url) && (REMOTE_PREFIX.test(url) || REMOTE_HOST.test(url))) {
                    var bundleName = extractBundleName(url);
                    // Strip trailing .json mistakenly treated as bundle names
                    if (/\.json$/i.test(bundleName) && !/^config(\.[a-f0-9]+)?\.json$/i.test(bundleName)) {
                        return originalLoadRemote(rewriteRemoteUrl(url), options, onComplete);
                    }
                    syncLocalBundleVers();
                    return originalLoadBundle(
                        bundleName,
                        applyLocalBundleVersion(bundleName, options),
                        onComplete
                    );
                }
                return originalLoadRemote(rewriteRemoteUrl(url), options, onComplete);
            };
        }

        if (assetManager.downloader && assetManager.downloader.downloadDomImage && !assetManager.downloader.__webDomImagePatched) {
            var originalDownloadDomImage = assetManager.downloader.downloadDomImage.bind(assetManager.downloader);
            assetManager.downloader.downloadDomImage = function (url, options, onComplete) {
                if (window.NativeImageDecrypt && NativeImageDecrypt.downloadDomImage) {
                    return NativeImageDecrypt.downloadDomImage(url, options, onComplete);
                }
                return originalDownloadDomImage(rewriteRemoteUrl(url), options, onComplete);
            };
            assetManager.downloader.__webDomImagePatched = true;
        }

        syncLocalBundleVers();

        var syncTimer = setInterval(function () {
            syncLocalBundleVers();
        }, 200);

        setTimeout(function () {
            clearInterval(syncTimer);
        }, 120000);

        assetManager.__webBundlePatched = true;
        console.log('[web-bundle-adapter] Local bundle redirect enabled');
        return true;
    }

    window.__rewriteRemoteUrl = rewriteRemoteUrl;
    window.__syncLocalBundleVers = syncLocalBundleVers;
    installNetworkInterceptors();
    loadNativeAssetMap();

    var timer = setInterval(function () {
        if (patchAssetManager()) {
            clearInterval(timer);
        }
    }, 10);

    setTimeout(function () {
        clearInterval(timer);
    }, 60000);
})();
