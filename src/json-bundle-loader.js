/**
 * Cocos Creator JSON Bundle Loader v2
 * 
 * 功能：
 * 1. Hook Cocos Creator 的 JSON 下载器
 * 2. 从预打包的 bundle.json.gz 中返回 JSON 内容
 * 3. 记录所有请求的 JSON 路径，方便导出打包列表
 * 
 * 使用方法:
 * 1. 在 index.html 中，在加载 cocos 引擎之前引入此脚本
 * 2. 游戏中开启记录: JsonBundleLoader.setRecording(true)
 * 3. 玩游戏后导出路径: JsonBundleLoader.exportRecordedPaths()
 * 4. 将路径复制到 tools/bundle-json-list.txt
 * 5. 运行 node tools/bundle-json.cjs pages/arrowgo 打包
 */

(function() {
    'use strict';
    
    // 配置
    const CONFIG = {
        // bundle文件路径 (使用gzip压缩版本)
        bundleUrl: 'json-bundles/bundle.json.gz',
        // 是否启用调试日志
        debug: false,
        // 是否启用路径记录
        recording: false
    };
    
    // 日志工具
    const log = {
        info: (...args) => CONFIG.debug && console.log('[JsonBundleLoader]', ...args),
        warn: (...args) => console.warn('[JsonBundleLoader]', ...args),
        error: (...args) => console.error('[JsonBundleLoader]', ...args)
    };
    
    // 统计数据
    const stats = {
        totalRequests: 0,
        bundleHits: 0,
        bundleMisses: 0,
        startTime: Date.now()
    };
    
    // JSON缓存 - 从bundle加载后存储
    // 结构: { "main/import/xx/file.json": jsonObject }
    let jsonCache = null;
    
    // Bundle加载状态
    let bundleLoadPromise = null;
    let bundleLoaded = false;
    
    // 记录的JSON路径
    const recordedPaths = new Set();

    /**
     * 深拷贝 JSON 数据，避免 Cocos 反序列化过程改写原始 JSON
     * （Creator 2.x 里 deserialize/parseImport 会直接修改传入对象/数组）
     */
    function cloneJson(value) {
        if (value === null || value === undefined) return value;
        // Modern browsers
        if (typeof structuredClone === 'function') {
            try {
                return structuredClone(value);
            } catch (_) {
                // fall through
            }
        }
        // Fallback: works for plain JSON data
        return JSON.parse(JSON.stringify(value));
    }
    
    /**
     * 从URL中提取相对路径
     * 例如: http://localhost/assets/main/import/xx/file.json
     * -> main/import/xx/file.json
     */
    function extractRelativePath(url) {
        const cleanUrl = url.split('?')[0].split('#')[0];
        
        // 匹配 assets/{subpackage}/import/... 或 assets/{subpackage}/native/...
        const match = cleanUrl.match(/assets\/([^\/]+\/(?:import|native)\/.+\.json)/i);
        if (match) {
            return match[1];
        }
        return null;
    }
    
    /**
     * 加载并解压 gzip bundle
     */
    async function loadBundle() {
        if (bundleLoaded && jsonCache) {
            return jsonCache;
        }
        
        if (bundleLoadPromise) {
            return bundleLoadPromise;
        }
        
        bundleLoadPromise = (async () => {
            try {
                log.info('Loading bundle:', CONFIG.bundleUrl);
                
                const response = await fetch(CONFIG.bundleUrl);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                
                // 解压gzip
                let bundle;
                if (typeof DecompressionStream !== 'undefined') {
                    // 使用原生 DecompressionStream API 解压
                    const ds = new DecompressionStream('gzip');
                    const decompressedStream = response.body.pipeThrough(ds);
                    const decompressedResponse = new Response(decompressedStream);
                    bundle = await decompressedResponse.json();
                } else {
                    // 如果浏览器不支持 DecompressionStream，尝试直接解析
                    // (某些服务器会自动解压gzip)
                    log.warn('DecompressionStream not supported, trying direct parse');
                    bundle = await response.json();
                }
                
                jsonCache = bundle.files || {};
                bundleLoaded = true;
                
                const fileCount = Object.keys(jsonCache).length;
                log.info(`✓ Bundle loaded: ${fileCount} files`);
                
                return jsonCache;
            } catch (e) {
                log.warn('Failed to load bundle:', e.message);
                jsonCache = {};
                bundleLoaded = true;
                throw e;
            }
        })();
        
        return bundleLoadPromise;
    }
    
    /**
     * 从缓存获取JSON
     */
    function getFromCache(relativePath) {
        if (jsonCache && jsonCache[relativePath] !== undefined) {
            return jsonCache[relativePath];
        }
        return null;
    }
    
    /**
     * Hook Cocos Creator的Downloader
     */
    function hookCocosDownloader() {
        const checkInterval = setInterval(() => {
            if (typeof cc !== 'undefined' && cc.assetManager && cc.assetManager.downloader) {
                clearInterval(checkInterval);
                installHook();
            }
        }, 10);
        
        setTimeout(() => {
            clearInterval(checkInterval);
        }, 30000);
    }
    
    /**
     * 安装Hook
     */
    function installHook() {
        const downloader = cc.assetManager.downloader;
        const originalDownloadJson = downloader._downloaders['.json']; // downloader._downloadJson;
        
        if (!originalDownloadJson) {
            log.error('_downloadJson method not found');
            return;
        }
        
        log.info('Installing JSON downloader hook...');
        
        // 预加载bundle
        loadBundle().catch(() => {});
        
        // 创建hook函数
        const hookedDownloader = function(url, options, callback) {
            stats.totalRequests++;
            
            const relativePath = extractRelativePath(url);
            
            // 记录路径（如果开启了记录功能）
            if (CONFIG.recording && relativePath) {
                recordedPaths.add(relativePath);
            }
            
            if (!relativePath) {
                log.info('Non-asset JSON, passthrough:', url);
                return originalDownloadJson.call(downloader, url, options, callback);
            }
            
            log.info('Intercepted:', relativePath);
            
            // 如果bundle已加载，直接查找
            if (bundleLoaded) {
                const cached = getFromCache(relativePath);
                if (cached !== null) {
                    stats.bundleHits++;
                    log.info('✓ Bundle hit:', relativePath);
                    const cloned = cloneJson(cached);
                    setTimeout(() => callback(null, cloned), 0);
                    return;
                }
                
                // bundle中没有，走原始下载
                stats.bundleMisses++;
                log.info('→ Not in bundle:', relativePath);
                return originalDownloadJson.call(downloader, url, options, callback);
            }
            
            // bundle还在加载中，等待加载完成
            loadBundle()
                .then(() => {
                    const cached = getFromCache(relativePath);
                    if (cached !== null) {
                        stats.bundleHits++;
                        log.info('✓ Bundle hit:', relativePath);
                        callback(null, cloneJson(cached));
                    } else {
                        stats.bundleMisses++;
                        log.info('→ Not in bundle:', relativePath);
                        originalDownloadJson.call(downloader, url, options, callback);
                    }
                })
                .catch(() => {
                    originalDownloadJson.call(downloader, url, options, callback);
                });
        };
        
        // 安装hook
        // downloader._downloadJson = hookedDownloader;
        
        if (downloader._downloaders) {
            downloader._downloaders['.json'] = hookedDownloader;
            downloader._downloaders['.ExportJson'] = hookedDownloader;
        }
        
        log.info('✓ JSON downloader hook installed');
    }
    
    /**
     * 获取统计信息
     */
    function getStats() {
        const elapsed = (Date.now() - stats.startTime) / 1000;
        return {
            ...stats,
            elapsedSeconds: elapsed.toFixed(1),
            hitRate: stats.totalRequests > 0 
                ? ((stats.bundleHits / stats.totalRequests) * 100).toFixed(1) + '%'
                : '0%',
            cacheSize: jsonCache ? Object.keys(jsonCache).length : 0
        };
    }
    
    /**
     * 导出记录的路径
     */
    function exportRecordedPaths() {
        const paths = Array.from(recordedPaths).sort();
        
        console.log('\n========== Recorded JSON Paths ==========');
        console.log(`Total: ${paths.length} files\n`);
        console.log(paths.join('\n'));
        console.log('\n==========================================');
        console.log('Copy the paths above to tools/bundle-json-list.txt');
        
        return paths;
    }
    
    /**
     * 打印统计报告
     */
    function report() {
        const s = getStats();
        console.log('\n=== JsonBundleLoader Report ===');
        console.log(`Total Requests: ${s.totalRequests}`);
        console.log(`Bundle Hits: ${s.bundleHits}`);
        console.log(`Bundle Misses: ${s.bundleMisses}`);
        console.log(`Hit Rate: ${s.hitRate}`);
        console.log(`Cache Size: ${s.cacheSize} files`);
        console.log(`Elapsed: ${s.elapsedSeconds}s`);
        if (CONFIG.recording) {
            console.log(`Recorded Paths: ${recordedPaths.size}`);
        }
        console.log('===============================\n');
        return s;
    }
    
    // 导出到全局
    window.JsonBundleLoader = {
        config: CONFIG,
        
        // 开启/关闭调试日志
        setDebug: (enabled) => {
            CONFIG.debug = enabled;
            console.log('[JsonBundleLoader] Debug:', enabled ? 'ON' : 'OFF');
        },
        
        // 开启/关闭路径记录
        setRecording: (enabled) => {
            CONFIG.recording = enabled;
            console.log('[JsonBundleLoader] Recording:', enabled ? 'ON' : 'OFF');
            if (enabled) {
                console.log('Play the game, then call JsonBundleLoader.exportRecordedPaths() to export');
            }
        },
        
        // 导出记录的路径
        exportRecordedPaths,
        
        // 获取记录的路径（返回数组）
        getRecordedPaths: () => Array.from(recordedPaths),
        
        // 清除记录的路径
        clearRecordedPaths: () => {
            recordedPaths.clear();
            console.log('[JsonBundleLoader] Recorded paths cleared');
        },
        
        // 获取统计信息
        getStats,
        
        // 打印报告
        report,
        
        // 获取缓存
        getCache: () => jsonCache,
        
        // 检查是否已加载
        isLoaded: () => bundleLoaded,
        
        // 手动加载bundle
        loadBundle,
        
        // 测试URL解析
        testUrl: (url) => {
            const path = extractRelativePath(url);
            console.log('URL:', url);
            console.log('Extracted path:', path);
            if (path && jsonCache) {
                const inCache = jsonCache[path] !== undefined;
                console.log('In cache:', inCache);
            }
            return path;
        }
    };
    
    // 同时暴露到 window.jsonBundleRecordedPaths 方便查看
    Object.defineProperty(window, 'jsonBundleRecordedPaths', {
        get: () => Array.from(recordedPaths)
    });
    
    // 自动安装hook
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hookCocosDownloader);
    } else {
        hookCocosDownloader();
    }
    
    log.info('JsonBundleLoader v2 initialized');
    JsonBundleLoader.setRecording(false);
})();
