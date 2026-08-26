'use strict';

/** 热更修复标志 */
window['__hotUpdateFix__'] = true;
/**
 * 性能统计初始化
 */
localStorage.setItem('main.refactored.start', Date.now());

/** app 版本 处理缓存资源*/
const AppCacheResManager = {
    getProjectManifest() {
        return this.getManifest("src/project.manifest");
    },
    getManifest(fileName) {
        if (!jsb.fileUtils.isFileExist(fileName)) {
            // reject(new Error(`${fileName} 不存在！`));
            console.error(`${fileName} 不存在！`);
            return null;
        }
        const content = jsb.fileUtils.getStringFromFile(fileName);
        if (content) {
            try {
                const data = JSON.parse(content);
                return data;
            } catch (e) {
                console.error(`${fileName} 内容 JSON 解析失败：${e.message}`);
                return null;
            }
        } else {
            console.error(`文件：${fileName} 获取的内容为空！`);
            return null;
        }
    },

    /** 清理缓存 */
    clearCacheIfVersionChanged() {
        try {
            const manifest = this.getProjectManifest();
            if (manifest) {
                const currProjectVersion = manifest.version;
                const cachedVersion = localStorage.getItem('blockBlastAppProjectVersion');
                if (cachedVersion !== currProjectVersion) {
                    console.log('[热更新] main.js => 版本不同或不存在:', '缓存app版本', cachedVersion, '当前app版本', currProjectVersion);
                    localStorage.setItem('blockBlastAppProjectVersion', currProjectVersion);
                    localStorage.setItem('block-blast-hotFinishedState', 'boolean^_^false');//storage 存储的数据至为false时特殊
                    this.clearHotUpdateCache();

                    console.log('[热更新] main.js => 缓存目录清除完成:', 'hotFinishedState:', localStorage.getItem('block-blast-hotFinishedState'), 'blockBlastAppProjectVersion:', localStorage.getItem('blockBlastAppProjectVersion'));
                } else {
                    console.log('[热更新] main.js => 版本相同', '缓存app版本', cachedVersion, '当前app版本', currProjectVersion);
                }
            } else {
                console.log('[热更新] 未找到 manifest 文件');
            }
        } catch (e) {
            console.log('[热更新] main.js => 获取 manifest 出错', e);
        }
    },
    /**
     * TODO 需改成异步删除防止缓存过多造成卡顿
     * （异步删除可能又会因删除中途退出，下次启动缓存目录依然存在）
     * */
    clearHotUpdateCache() {
        const hotSearchPathsStr = localStorage.getItem('blockBlastHotUpdateData');
        if (!hotSearchPathsStr) {
            console.log('[热更新] main.js 不存在搜索路径:', hotSearchPathsStr);
            return;
        }

        try {
            const hotSearchPaths = JSON.parse(hotSearchPathsStr);
            hotSearchPaths.forEach((path) => {
                try {
                    console.log('[热更新] main.js => 删除目录:', path);
                    if (jsb.fileUtils.isDirectoryExist(path)) {
                        jsb.fileUtils.removeDirectory(path);
                        console.log('[热更新] main.js => 删除成功:', path);
                    } else {
                        console.log('[热更新] main.js => 删除目录不存在:', path);
                    }
                } catch (error) {
                    console.log('[热更新] main.js => 删除目录失败:', path, error);
                }

            });
        } catch (e) {
            console.log('[热更新] main.js main.js => 清理缓存目录失败（路径解析失败）:', e);
        }

        localStorage.setItem('blockBlastHotUpdateData', '');
        console.log('[热更新] main.js => 发生版更 清除所有缓存目录路径');
    }
};

if (typeof window.jsb === 'object') {

    const fileUtilSearchPaths = jsb.fileUtils.getSearchPaths();
    const storageSearchPaths = localStorage.getItem('blockBlastHotUpdateData');
    const hotSuccessMark = localStorage.getItem('block-blast-hotFinishedState');

    console.log('[热更新] main.js => fileUtils默认搜索路径1:', fileUtilSearchPaths, JSON.stringify(fileUtilSearchPaths));
    console.log('[热更新] main.js => 存储的缓存目录搜索路径2:', storageSearchPaths, JSON.stringify(storageSearchPaths));
    console.log('[热更新] main.js => 热更成功标记，重启，不走热更检测标记3:', hotSuccessMark);

    //根据版本处理缓存问题
    AppCacheResManager.clearCacheIfVersionChanged();

    console.log('[热更新] main.js => 版更，删除缓存目录，清理缓存资源的搜索路径完成4');
    let isCopyTempPath = false;
    const newVersionStoragePath = localStorage.getItem("newVersionFoundBlockBlast");
    if (newVersionStoragePath) {
        const fileList = [];
        const tempPath = newVersionStoragePath + '_temp/';
        const baseOffset = tempPath.length;

        console.log('[热更新] main.js => 开始检查 新版本资源已下载完，是否全部拷贝至缓存目录5', newVersionStoragePath);

        if (jsb.fileUtils.isDirectoryExist(tempPath) && !jsb.fileUtils.isFileExist(tempPath + 'project.manifest.temp')) {

            console.log('[热更新] main.js => 存在新资源未完全拷贝至缓存目录下6', newVersionStoragePath);

            jsb.fileUtils.listFilesRecursively(tempPath, fileList);
            fileList.forEach((srcPath) => {
                const relativePath = srcPath.substr(baseOffset);
                const dstPath = newVersionStoragePath + relativePath;

                if (srcPath[srcPath.length - 1] == '/') {
                    jsb.fileUtils.createDirectory(dstPath);
                } else {
                    if (jsb.fileUtils.isFileExist(dstPath)) {
                        jsb.fileUtils.removeFile(dstPath);
                    }
                    jsb.fileUtils.renameFile(srcPath, dstPath);
                }
            });
            jsb.fileUtils.removeDirectory(tempPath);

            console.log('[热更新] main.js => 新版本资源全部拷贝完成至缓存目录7', newVersionStoragePath);

            /** 拷贝完成 新版本的缓存路径存入搜索路径中 */
            const searchPaths = [newVersionStoragePath];
            jsb.fileUtils.setSearchPaths(searchPaths);

            localStorage.setItem('blockBlastHotUpdateData', JSON.stringify(searchPaths));
            localStorage.setItem("newVersionFoundBlockBlast", '');
            isCopyTempPath = true;
        }
    }
    //如果新版本资源不需要拷贝，需要把存储的缓存目录存入搜索路径下
    if (!isCopyTempPath && storageSearchPaths) {
        const searchPaths = JSON.parse(storageSearchPaths);
        jsb.fileUtils.setSearchPaths(searchPaths);
    }

    console.log('[热更新] main.js => 最终得到的 fileUtils 搜索路径8:', jsb.fileUtils.getSearchPaths());
}

const strategy = localStorage.getItem('blockblast.distribution.strategy');

window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;

    var RESOURCES = 'refactoredResources';
    var INTERNAL = 'refactoredInternal';
    var MAIN = 'refactoredMain';

    function setLoadingDisplay() {
        // Loading splash scene
        var splash = document.getElementById('splash');
        var progressBar = splash.querySelector('.progress-bar span');
        onProgress = function (finish, total) {
            var percent = (100 * finish) / total;
            if (progressBar) {
                progressBar.style.width = percent.toFixed(2) + '%';
            }
        };
        splash.style.display = 'block';
        progressBar.style.width = '0%';

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            splash.style.display = 'none';
        });
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
            } else if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            cc.view.enableAutoFullScreen(
                [
                    cc.sys.BROWSER_TYPE_BAIDU,
                    cc.sys.BROWSER_TYPE_BAIDU_APP,
                    cc.sys.BROWSER_TYPE_WECHAT,
                    cc.sys.BROWSER_TYPE_MOBILE_QQ,
                    cc.sys.BROWSER_TYPE_MIUI,
                    cc.sys.BROWSER_TYPE_HUAWEI,
                    cc.sys.BROWSER_TYPE_UC,
                ].indexOf(cc.sys.browserType) < 0
            );
        }

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 2;
            cc.assetManager.downloader.maxRequestsPerFrame = 2;
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });

        bundle.loadScene(launchScene, null, onProgress, function (err, scene) {
            if (!err) {
                cc.director.runSceneImmediate(scene);
                if (cc.sys.isBrowser) {
                    // show canvas
                    var canvas = document.getElementById('GameCanvas');
                    canvas.style.visibility = '';
                    var div = document.getElementById('GameDiv');
                    if (div) {
                        div.style.backgroundImage = '';
                    }
                    console.log('Success to load scene: ' + launchScene);
                }
            }
        });
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
        server: settings.server,
    });

    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb(err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.assetManager.loadBundle(MAIN, function (err) {
                if (!err) cc.game.run(option, onStart);
            });
        }

    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x; }), cb);

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
};

if (window.jsb) {
    // 新架构包使用新的(settings.js、coscos2d-jsb.js、jsb-engine.js）为了避免相互修改，这里不与主包共享
    // jsb-builtin.js、physics.js 这个文件共享
    if (strategy === 'refactored') {
        require('src/refactored/settings.js');
        require('src/refactored/cocos2d-jsb.js'); // 增加 255 kb 左右
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/refactored/jsb-engine.js'); // 增加 188 kb 左右
    } else {
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
