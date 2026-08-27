/**
 * Cocos Creator Image Bundle Loader v1
 *
 * 目标：把首关需要的图片（png/jpg/webp）预打包到一个 gzip 的二进制文件里，启动阶段一次拉取。
 *
 * 配套打包工具：node tools/bundle-images.cjs pages/magicsort
 * 列表文件：tools/bundle-image-list.txt（每行一个相对 assets/ 的路径）
 *
 * Bundle 格式（gzip 前的原始内容）：
 * - 4 bytes: magic "IBDL"
 * - 4 bytes: index JSON length (uint32 LE)
 * - N bytes: index JSON (utf8)
 * - ...   : file data concatenated
 *
 * index JSON:
 * { version: 1, timestamp, files: { [path]: { o, l, m } } }
 * 其中 o/l 相对于 data 区起始（即 header+index 之后）。
 */

(function () {
  "use strict";

  const CONFIG = {
    bundleUrl:
      "https://pub-884738475c4b45d5aa9108b09fd6e501.r2.dev/bundle.bin.gz",
    debug: false,
    recording: false,
  };

  const log = {
    info: (...args) =>
      CONFIG.debug && console.log("[ImageBundleLoader]", ...args),
    warn: (...args) => console.warn("[ImageBundleLoader]", ...args),
    error: (...args) => console.error("[ImageBundleLoader]", ...args),
  };

  const stats = {
    totalRequests: 0,
    bundleHits: 0,
    bundleMisses: 0,
    startTime: Date.now(),
  };

  // bundle state
  let bundleLoadPromise = null;
  let bundleLoaded = false;
  let bundleArrayBuffer = null;
  let bundleIndex = null;
  let dataStartOffset = 0;

  const recordedPaths = new Set();

  function extractRelativePath(url) {
    const cleanUrl = url.split("?")[0].split("#")[0];
    // assets/{subpackage}/native/.../*.png|jpg|jpeg|webp
    const match = cleanUrl.match(
      /assets\/([^\/]+\/native\/.+\.(?:png|jpg|jpeg|webp))/i,
    );
    return match ? match[1] : null;
  }

  function normalizeImageUrl(url) {
    if (typeof url !== "string") {
      return url;
    }
    if (typeof window.__rewriteRemoteUrl === "function") {
      return window.__rewriteRemoteUrl(url);
    }
    return url;
  }

  function buildImageFallbackUrls(url) {
    const cleanUrl = normalizeImageUrl(url).split("?")[0].split("#")[0];
    const match = cleanUrl.match(
      /assets\/([^/]+)\/(native\/[0-9a-f]{2}\/[0-9a-f-]+)\.(png|jpg|jpeg|webp)$/i,
    );
    if (!match) {
      return [];
    }

    const currentBundle = match[1];
    const nativePath = match[2];
    const ext = match[3];
    const fallbacks = [];
    const candidateBundles = [
      "mainTraits",
      "resources",
      "class",
      "refactoredResources",
      "chapter",
      "jewel",
      "main",
      "refactoredMain",
      "gl_hall",
    ];

    candidateBundles.forEach((bundle) => {
      if (bundle === currentBundle) {
        return;
      }
      fallbacks.push(`assets/${bundle}/${nativePath}.${ext}`);
    });

    return fallbacks;
  }

  function resolveImageUrls(url) {
    const primary = normalizeImageUrl(url);
    const urls = [primary];
    buildImageFallbackUrls(primary).forEach((candidate) => {
      const normalized = normalizeImageUrl(candidate);
      if (urls.indexOf(normalized) === -1) {
        urls.push(normalized);
      }
    });
    return urls;
  }

  function decodeUtf8(uint8Array) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(uint8Array);
    }
    // Fallback (older browsers): this is best-effort
    let s = "";
    for (let i = 0; i < uint8Array.length; i++)
      s += String.fromCharCode(uint8Array[i]);
    try {
      return decodeURIComponent(escape(s));
    } catch (_) {
      return s;
    }
  }

  async function fetchAndMaybeDecompressGzip(url) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    // Prefer native gzip decompression when the file is a raw .gz
    if (typeof DecompressionStream !== "undefined" && resp.body) {
      try {
        const ds = new DecompressionStream("gzip");
        const decompressedStream = resp.body.pipeThrough(ds);
        const decompressedResp = new Response(decompressedStream);
        return await decompressedResp.arrayBuffer();
      } catch (e) {
        log.warn(
          "DecompressionStream failed, trying direct arrayBuffer:",
          e && e.message,
        );
      }
    }

    // Fallback: if server uses Content-Encoding:gzip, browser may already decompress.
    return await resp.arrayBuffer();
  }

  function parseBundle(arrayBuffer) {
    const u8 = new Uint8Array(arrayBuffer);
    if (u8.length < 8) throw new Error("Bundle too small");

    const magic = String.fromCharCode(u8[0], u8[1], u8[2], u8[3]);
    if (magic !== "IBDL") throw new Error(`Invalid bundle magic: ${magic}`);

    const dv = new DataView(arrayBuffer);
    const indexLen = dv.getUint32(4, true);
    const headerLen = 8;
    const indexStart = headerLen;
    const indexEnd = headerLen + indexLen;
    if (indexEnd > u8.length) throw new Error("Index length out of range");

    const indexJson = decodeUtf8(u8.subarray(indexStart, indexEnd));
    const index = JSON.parse(indexJson);

    return {
      index,
      dataStartOffset: indexEnd,
    };
  }

  async function loadBundle() {
    if (bundleLoaded && bundleArrayBuffer && bundleIndex) return bundleIndex;
    if (bundleLoadPromise) return bundleLoadPromise;

    bundleLoadPromise = (async () => {
      log.info("Loading image bundle:", CONFIG.bundleUrl);

      const ab = await fetchAndMaybeDecompressGzip(CONFIG.bundleUrl);
      const parsed = parseBundle(ab);

      bundleArrayBuffer = ab;
      bundleIndex =
        parsed.index && parsed.index.files ? parsed.index : { files: {} };
      dataStartOffset = parsed.dataStartOffset;
      bundleLoaded = true;

      const fileCount = Object.keys(bundleIndex.files || {}).length;
      log.info(`✓ Image bundle loaded: ${fileCount} files`);

      return bundleIndex;
    })().catch((e) => {
      bundleLoaded = true;
      bundleArrayBuffer = null;
      bundleIndex = { files: {} };
      throw e;
    });

    return bundleLoadPromise;
  }

  function getEntry(relativePath) {
    if (!bundleIndex || !bundleIndex.files) return null;
    const entry = bundleIndex.files[relativePath];
    return entry || null;
  }

  function makeBlobFromEntry(entry, relativePath) {
    const start = dataStartOffset + entry.o;
    const view = new Uint8Array(bundleArrayBuffer, start, entry.l);
    const baseName = window.NativeImageDecrypt
      ? NativeImageDecrypt.baseNameFromPath(relativePath)
      : relativePath
          .split("/")
          .pop()
          .replace(/\.[^.]+$/, "");
    const decrypted = window.NativeImageDecrypt
      ? NativeImageDecrypt.decryptNativeImage(view, baseName)
      : view;
    const mime = window.NativeImageDecrypt
      ? NativeImageDecrypt.mimeFromMagic(decrypted)
      : entry.m || "image/png";
    return new Blob([decrypted], {
      type: mime !== "application/octet-stream" ? mime : entry.m || "image/png",
    });
  }

  function deliverImage(original, downloader, url, options, callback) {
    const urls = resolveImageUrls(url);

    function finishBlob(err, blob) {
      if (!err && blob) {
        callback(null, blob);
        return;
      }
      callback(err, blob);
    }

    function tryDownload(index) {
      const tryUrl = urls[index];

      if (window.NativeImageDecrypt && NativeImageDecrypt.fetchDecryptedBlob) {
        NativeImageDecrypt.fetchDecryptedBlob(tryUrl, function (err, blob) {
          if (!err && blob) {
            finishBlob(null, blob);
            return;
          }

          if (index + 1 < urls.length) {
            log.info("Image miss, trying fallback:", urls[index + 1]);
            tryDownload(index + 1);
            return;
          }

          finishBlob(err, blob);
        });
        return;
      }

      original.call(downloader, tryUrl, options, function (err, blob) {
        if (!err && blob) {
          finishBlob(null, blob);
          return;
        }

        if (index + 1 < urls.length) {
          log.info("Image miss, trying fallback:", urls[index + 1]);
          tryDownload(index + 1);
          return;
        }

        finishBlob(err, blob);
      });
    }

    tryDownload(0);
  }

  let installedExtensions = null;
  let installedHooks = null;

  function wrapDownloader(ext, original) {
    return function (url, options, callback) {
      stats.totalRequests++;

      const relativePath = extractRelativePath(url);
      if (CONFIG.recording && relativePath) recordedPaths.add(relativePath);

      if (!relativePath) {
        return deliverImage(original, downloaderRef, url, options, callback);
      }

      // Bundle ready: serve from pack
      if (bundleLoaded && bundleArrayBuffer && bundleIndex) {
        const entry = getEntry(relativePath);
        if (entry) {
          stats.bundleHits++;
          const blob = makeBlobFromEntry(entry, relativePath);
          setTimeout(() => callback(null, blob), 0);
          return;
        }
        stats.bundleMisses++;
        return deliverImage(original, downloaderRef, url, options, callback);
      }

      // Lazy: do not block first paint on ~63MB R2 download — network passthrough
      stats.bundleMisses++;
      return deliverImage(original, downloaderRef, url, options, callback);
    };
  }

  let downloaderRef = null;

  function installHook() {
    const downloader = cc.assetManager.downloader;
    const downloaders = downloader._downloaders;
    if (!downloaders) return false;

    downloaderRef = downloader;
    const exts = [".png", ".jpg", ".jpeg", ".webp"];
    let changed = false;

    if (!installedExtensions) {
      installedExtensions = exts;
      installedHooks = {};
    }

    exts.forEach((ext) => {
      const current = downloaders[ext];
      if (!current) return;
      if (installedHooks[ext] === current) return;

      const base = current.__imageBundleOriginal || current;
      if (!installedHooks[ext]) {
        const hooked = wrapDownloader(ext, base);
        hooked.__imageBundleOriginal = base;
        installedHooks[ext] = hooked;
      }
      downloaders[ext] = installedHooks[ext];
      changed = true;
    });

    if (changed) {
      log.info("✓ Image downloader hook installed/ refreshed");
    }
    return changed;
  }

  /** After first scene (Home), warm R2 image bundle in idle time. */
  function scheduleWarmAfterFirstScene() {
    function warm() {
      loadBundle()
        .then(() => log.info("✓ Image bundle warmed after scene"))
        .catch(() => {});
    }

    function onScene() {
      if (scheduleWarmAfterFirstScene._done) return;
      scheduleWarmAfterFirstScene._done = true;
      if (typeof requestIdleCallback === "function") {
        requestIdleCallback(warm, { timeout: 8000 });
      } else {
        setTimeout(warm, 2500);
      }
    }

    function hookDirector() {
      if (!window.cc || !cc.director) return false;
      try {
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, onScene);
        return true;
      } catch (e) {
        return false;
      }
    }

    if (!hookDirector()) {
      const wait = setInterval(() => {
        if (hookDirector()) clearInterval(wait);
      }, 100);
      setTimeout(() => clearInterval(wait), 60000);
    }
  }

  function hookCocosDownloader() {
    // Option B: no boot-time loadBundle — wait until after first scene
    scheduleWarmAfterFirstScene();

    const checkInterval = setInterval(() => {
      if (
        typeof cc !== "undefined" &&
        cc.assetManager &&
        cc.assetManager.downloader &&
        cc.assetManager.downloader._downloaders
      ) {
        installHook();
      }
    }, 50);

    setTimeout(() => clearInterval(checkInterval), 120000);
  }

  function getStats() {
    const elapsed = (Date.now() - stats.startTime) / 1000;
    return {
      ...stats,
      elapsedSeconds: elapsed.toFixed(1),
      hitRate:
        stats.totalRequests > 0
          ? ((stats.bundleHits / stats.totalRequests) * 100).toFixed(1) + "%"
          : "0%",
      cacheSize:
        bundleIndex && bundleIndex.files
          ? Object.keys(bundleIndex.files).length
          : 0,
      recordingCount: recordedPaths.size,
    };
  }

  function exportRecordedPaths() {
    const paths = Array.from(recordedPaths).sort();

    console.log("\n========== Recorded Image Paths ==========");
    console.log(`Total: ${paths.length} files\n`);
    console.log(paths.join("\n"));
    console.log("\n=========================================");
    console.log("Copy the paths above to tools/bundle-image-list.txt");

    return paths;
  }

  function report() {
    const s = getStats();
    console.log("\n=== ImageBundleLoader Report ===");
    console.log(`Total Requests: ${s.totalRequests}`);
    console.log(`Bundle Hits: ${s.bundleHits}`);
    console.log(`Bundle Misses: ${s.bundleMisses}`);
    console.log(`Hit Rate: ${s.hitRate}`);
    console.log(`Cache Size: ${s.cacheSize} files`);
    console.log(`Elapsed: ${s.elapsedSeconds}s`);
    console.log(`Recorded Paths: ${s.recordingCount}`);
    console.log("===============================\n");
    return s;
  }

  window.ImageBundleLoader = {
    config: CONFIG,

    setDebug: (enabled) => {
      CONFIG.debug = enabled;
      console.log("[ImageBundleLoader] Debug:", enabled ? "ON" : "OFF");
    },

    setRecording: (enabled) => {
      CONFIG.recording = enabled;
      console.log("[ImageBundleLoader] Recording:", enabled ? "ON" : "OFF");
      if (enabled) {
        console.log(
          "Play to first level, then call ImageBundleLoader.exportRecordedPaths()",
        );
      }
    },

    exportRecordedPaths,

    getRecordedPaths: () => Array.from(recordedPaths),

    clearRecordedPaths: () => {
      recordedPaths.clear();
      console.log("[ImageBundleLoader] Recorded paths cleared");
    },

    getStats,
    report,

    isLoaded: () => bundleLoaded,
    loadBundle,
  };

  Object.defineProperty(window, "imageBundleRecordedPaths", {
    get: () => Array.from(recordedPaths),
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hookCocosDownloader);
  } else {
    hookCocosDownloader();
  }

  log.info("ImageBundleLoader v1 initialized");
  // 为了和 json 方案一致：默认开启记录（你也可以在控制台关掉）
  ImageBundleLoader.setRecording(false);
})();
