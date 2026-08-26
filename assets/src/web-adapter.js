/**
 * Browser adapter for JSB-built cocos2d-js-min.js (CC_JSB=true).
 * Must load before the Cocos engine script.
 */
(function () {
    'use strict';

    var ua = navigator.userAgent.toLowerCase();

    window.__globalAdapter = {
        adaptSys: function (sys) {
            sys.isNative = false;
            sys.isBrowser = true;

            var isMobile = /mobile|android|iphone|ipad|ipod|windows phone/i.test(ua);
            sys.platform = isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
            sys.isMobile = isMobile;

            if (/android/i.test(ua)) {
                sys.os = sys.OS_ANDROID;
            } else if (/iphone|ipad|ipod/i.test(ua)) {
                sys.os = sys.OS_IOS;
            } else if (/windows/i.test(ua)) {
                sys.os = sys.OS_WINDOWS;
            } else if (/mac/i.test(ua)) {
                sys.os = sys.OS_OSX;
            } else if (/linux/i.test(ua)) {
                sys.os = sys.OS_LINUX;
            } else {
                sys.os = sys.OS_UNKNOWN;
            }

            var lang = (navigator.language || 'en').toLowerCase();
            sys.language = lang.slice(0, 2);
            sys.languageCode = lang;
            sys.osVersion = '10';
            sys.osMainVersion = 10;
            sys.browserType = sys.BROWSER_TYPE_CHROME;
            sys.browserVersion = '';

            var w = window.innerWidth || document.documentElement.clientWidth;
            var h = window.innerHeight || document.documentElement.clientHeight;
            var ratio = window.devicePixelRatio || 1;
            sys.windowPixelResolution = {
                width: ratio * w,
                height: ratio * h,
            };
            sys.localStorage = window.localStorage;

            sys.capabilities = {
                canvas: true,
                opengl: !!window.WebGLRenderingContext,
                webp: true,
                touches: 'ontouchstart' in window || isMobile,
                mouse: 'onmouseup' in document.documentElement,
                keyboard: 'onkeyup' in document.documentElement,
                imageBitmap: typeof createImageBitmap === 'function',
            };

            var AudioCtx = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
            var audioSupport = {
                ONLY_ONE: false,
                WEB_AUDIO: !!AudioCtx,
                DELAY_CREATE_CTX: true,
                format: ['.mp3', '.ogg', '.wav'],
                _ctx: null,
            };

            // Lazy context: created on first decode/play, resumed on user gesture.
            if (AudioCtx) {
                Object.defineProperty(audioSupport, 'context', {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        if (!this._ctx) {
                            try {
                                this._ctx = new AudioCtx();
                            } catch (err) {
                                console.warn('[web-adapter] AudioContext init failed:', err);
                                this.WEB_AUDIO = false;
                            }
                        }
                        return this._ctx;
                    },
                    set: function (value) {
                        this._ctx = value;
                    },
                });
            }

            sys.__audioSupport = audioSupport;

            if (AudioCtx && !window.__webAudioGestureBound) {
                window.__webAudioGestureBound = true;
                var resumeAudio = function () {
                    var support = (typeof cc !== 'undefined' && cc.sys && cc.sys.__audioSupport) || audioSupport;
                    if (!support) return;
                    var ctx = support.context;
                    if (ctx && ctx.state === 'suspended') {
                        ctx.resume().catch(function () {});
                    }
                };
                var resumeEvents = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'];
                resumeEvents.forEach(function (eventName) {
                    document.addEventListener(eventName, resumeAudio, true);
                });
            }

            var audioPatchTimer = setInterval(function () {
                if (typeof cc === 'undefined' || !cc.audioEngine || cc.audioEngine.__webAudioPlayPatched) {
                    return;
                }
                var originalPlay = cc.audioEngine.play;
                cc.audioEngine.play = function () {
                    var support = sys.__audioSupport;
                    if (support && support.context && support.context.state === 'suspended') {
                        support.context.resume().catch(function () {});
                    }
                    return originalPlay.apply(this, arguments);
                };
                cc.audioEngine.__webAudioPlayPatched = true;
                clearInterval(audioPatchTimer);
            }, 50);

            setTimeout(function () {
                clearInterval(audioPatchTimer);
            }, 120000);

            sys.openURL = function (url) {
                window.open(url, '_blank');
            };
        },
    };

    window.__getPlatform = function () {
        return /mobile|android|iphone|ipad|ipod/i.test(ua) ? 100 : 101;
    };
    window.__getOS = function () {
        if (/android/i.test(ua)) return 'Android';
        if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';
        if (/windows/i.test(ua)) return 'Windows';
        if (/mac/i.test(ua)) return 'OS X';
        return 'Unknown';
    };
    window.__getCurrentLanguage = function () {
        return (navigator.language || 'en').slice(0, 2);
    };
    window.__getCurrentLanguageCode = function () {
        return navigator.language || 'en';
    };
    window.__getOSVersion = function () {
        return '10';
    };

    /**
     * Mobile browsers report OS_ANDROID / OS_IOS, but there is no Java/ObjC bridge.
     * NativePort.nativeInfo() (and similar) call jsb.reflection without checking
     * isNative — that crashes on phone while desktop (Windows/OS X) skips the call.
     */
    function webCallStaticMethod(className, methodName, signature) {
        var sig = typeof signature === 'string' ? signature : '';
        // Android JNI: (... )Z / )I / )Ljava/lang/String; / )V
        if (sig.indexOf(')Z') !== -1) return false;
        if (sig.indexOf(')I') !== -1) return 0;
        if (sig.indexOf(')F') !== -1 || sig.indexOf(')D') !== -1) return 0;
        if (/\)Ljava\/lang\/String;/.test(sig)) return '{}';
        if (sig.indexOf(')V') !== -1) return undefined;
        // iOS-style callStaticMethod(class, method, format, ...) — often expects string
        return '';
    }

    window.jsb = window.jsb || {
        openURL: function (url) {
            window.open(url, '_blank');
        },
        setPreferredFramesPerSecond: function () {},
        device: {
            setMotionEnabled: function () {},
            setMotionInterval: function () {},
        },
        __isLittleEndian__: true,
        LabelRenderer: null,
    };

    if (!window.jsb.reflection) {
        window.jsb.reflection = {
            callStaticMethod: webCallStaticMethod,
        };
    } else if (typeof window.jsb.reflection.callStaticMethod !== 'function') {
        window.jsb.reflection.callStaticMethod = webCallStaticMethod;
    }
})();
