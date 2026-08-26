
(function () {
    if (typeof window.jsb === 'object' && window.jsb.fileUtils) {
        var versionCompareState = function(versionA, versionB)
        {
            /**
             * 特殊处理
            */
            if(!versionB)
            {
                return false;
            }
            console.log("Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }else {
                    return (a - b) > 0 ? true : false;
                }
            }
            if(vA.length == vB.length)
                return false;
            return false;
        }
        var getWritePath=jsb.fileUtils.getWritablePath();
        var hot = localStorage.getItem('fangkuaipintuHot');
        console.log(hot);
        if (hot) {
            var paths = JSON.parse(hot);
            const remotePath = "blackjack-remote-asset";
            const wayPath = "way";
            /**
             * 当前版本号
             */
            const currentVersion = "7.1.9";
            const nativeResVersion = localStorage.getItem('fangkuaipintuNativeResVersion');
            console.log("========"+nativeResVersion);
            var nativeResVersionState = false;
            if(nativeResVersion && nativeResVersion !== currentVersion)
            {
                nativeResVersionState = true;
            }
            var newPaths = [];
            let setHotState = false;
            for(let i=0;i<paths.length;i++)
            {
                const pathIndex = paths[i].indexOf(remotePath);
                const wayIndex = paths[i].indexOf(wayPath);
                if(pathIndex != -1 && wayIndex != -1 && wayIndex >= (pathIndex + remotePath.length))
                {
                    const getAimVersion = paths[i].substring(pathIndex + remotePath.length,wayIndex);
                    console.log(getAimVersion);
                    if((getAimVersion==="")||(getAimVersion.indexOf(".") != -1 && (nativeResVersionState || versionCompareState(currentVersion,getAimVersion))))
                    {
                        console.log("移除");
                        if(jsb.fileUtils.isDirectoryExist(paths[i]))
                        {
                            jsb.fileUtils.removeDirectory(paths[i]);
                        }
                        setHotState = true;
                        paths[i]="";
                    }
                }
                if(paths[i].length>2&&paths[i].indexOf(getWritePath)==-1&&paths[i].indexOf('/Documents/')!=-1)
                {
                    var getArr =paths[i].split('/Documents/');
                    if(getArr.length>=2)
                    {
                        paths[i]=getWritePath+getArr[getArr.length-1];
                    }
                }
                if(paths[i] !== "")
                {
                    newPaths.push(paths[i]);
                }
            }
            if(currentVersion !== nativeResVersion)
            {
                localStorage.setItem('fangkuaipintuNativeResVersion',currentVersion);
            }
            jsb.fileUtils.setSearchPaths(newPaths);
            if(setHotState)
            {
                localStorage.setItem('fangkuaipintuHot',JSON.stringify(newPaths));
            }
            var fileList = [];
            var storagePath = paths[0] || '';
            var tempPath = storagePath + '_temp/';
            var baseOffset = tempPath.length;
            if (jsb.fileUtils.isDirectoryExist(tempPath) && !jsb.fileUtils.isFileExist(tempPath + '')) {
                jsb.fileUtils.listFilesRecursively(tempPath, fileList);
                fileList.forEach(srcPath => {
                    var relativePath = srcPath.substr(baseOffset);
                    var dstPath = storagePath + relativePath;

                    if (srcPath[srcPath.length] == '/') {
                        jsb.fileUtils.createDirectory(dstPath)
                    }
                    else {
                        if (jsb.fileUtils.isFileExist(dstPath)) {
                            jsb.fileUtils.removeFile(dstPath)
                        }
                        jsb.fileUtils.renameFile(srcPath, dstPath);
                    }
                })
                jsb.fileUtils.removeDirectory(tempPath);
            }
        }
    }
})();
window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;
    /**
     * 最小包
     */
    
    var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
    var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
    var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;

    // Web: prefer PNG over native compressed textures (.pkm/.pvr/.astc)
    if (cc.Texture2D && typeof cc.Texture2D._parseExt === 'function' && !cc.Texture2D.__webPngFallback) {
        var originalParseExt = cc.Texture2D._parseExt;
        cc.Texture2D._parseExt = function (extStr, format) {
            var result = originalParseExt.call(this, extStr, format);
            if (!result.bestExt) {
                result.bestExt = '.png';
                result.bestFormat = typeof format === 'number' ? format : 0;
                result.defaultExt = result.defaultExt || '.png';
            }
            return result;
        };
        cc.Texture2D.__webPngFallback = true;
        if (cc.macro && Array.isArray(cc.macro.SUPPORT_TEXTURE_FORMATS)) {
            cc.macro.SUPPORT_TEXTURE_FORMATS = ['.png', '.jpg', '.jpeg', '.webp', '.bmp', '.pkm', '.pvr', '.astc'];
        }
    }
    function hideSplash () {
        var splash = document.getElementById('splash');
        if (splash) {
            splash.style.display = 'none';
            splash.remove();
        }
    }

    function showGameCanvas () {
        document.body.classList.add('game-ready');
        hideSplash();
        var canvas = document.getElementById('GameCanvas');
        if (canvas) {
            canvas.style.visibility = 'visible';
        }
        var container = document.getElementById('Cocos2dGameContainer');
        if (container) {
            container.style.visibility = 'visible';
        }
    }

    function setLoadingDisplay () {
        // Keep HTML splash until first scene launches (avoids black WebGL flash)
        onProgress = null;
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, showGameCanvas);
    }

    var onStart = function () {

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);

        if (cc.sys.isBrowser) {
            setLoadingDisplay();
        }

        if (cc.sys.isMobile) {
            if (settings.orientation === 'landscape') {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            else if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            cc.view.enableAutoFullScreen([
                cc.sys.BROWSER_TYPE_BAIDU,
                cc.sys.BROWSER_TYPE_BAIDU_APP,
                cc.sys.BROWSER_TYPE_WECHAT,
                cc.sys.BROWSER_TYPE_MOBILE_QQ,
                cc.sys.BROWSER_TYPE_MIUI,
                cc.sys.BROWSER_TYPE_HUAWEI,
                cc.sys.BROWSER_TYPE_UC,
            ].indexOf(cc.sys.browserType) < 0);
        }

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 4;
            cc.assetManager.downloader.maxRequestsPerFrame = 4;
        } else if (cc.sys.isBrowser) {
            cc.assetManager.downloader.maxConcurrency = 8;
            cc.assetManager.downloader.maxRequestsPerFrame = 6;
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });
        
        bundle.loadScene(launchScene, null, onProgress,
            function (err, scene) {
                if (!err) {
                    cc.director.runSceneImmediate(scene);
                    if (cc.sys.isBrowser) {
                        showGameCanvas();
                        var div = document.getElementById('GameDiv');
                        if (div) {
                            div.style.backgroundImage = '';
                        }
                        console.log('Success to load scene: ' + launchScene);
                    }
                } else {
                    console.error('Failed to load scene:', err);
                    showGameCanvas();
                }
            }
        );

    };

    var option = {
        id: 'GameCanvas',
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({ 
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    });
    
    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb (err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.assetManager.loadBundle(MAIN, function (err) {
                if (!err) cc.game.run(option, onStart);
            });
        }
    }

    var jsList = settings.jsList || [];
    if (jsList.length) {
        cc.assetManager.loadScript(jsList.map(function (x) { return 'src/' + x; }), cb);
    } else {
        cb();
    }

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
};

if (window.jsb && window.jsb.fileUtils) {
    var isRuntime = (typeof loadRuntime === 'function');
    if (isRuntime) {
        require('src/settings.js');
        require('src/cocos2d-runtime.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/engine/index.js');
    }
    else {
        require('src/settings.js');
        require('src/cocos2d-jsb.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/jsb-engine.js');
    }

    cc.macro.CLEANUP_IMAGE_CACHE = true;
    window.boot();
}