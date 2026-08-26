window.__require = function t(e, o, a) {
    function n(r, s) {
        if (!o[r]) {
            if (!e[r]) {
                var c = r.split("/");
                c = c[c.length - 1];
                if (!e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (i) return i(c, !0);
                    throw new Error("Cannot find module '" + r + "'");
                }
                r = c;
            }
            var u = o[r] = {
                exports: {}
            };
            e[r][0].call(u.exports, function(t) {
                return n(e[r][1][t] || t);
            }, u, u.exports, t, e, o, a);
        }
        return o[r].exports;
    }
    for (var i = "function" == typeof __require && __require, r = 0; r < a.length; r++) n(a[r]);
    return n;
}({
    BlockItemPoolScript: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "708e6aX+tVBLZtQxKRh2J6W", "BlockItemPoolScript");
        var a, n = this && this.__extends || (a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    })(t, e);
            }, function(t, e) {
                a(t, e);

                function o() {
                    this.constructor = t;
                }
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
            }),
            i = this && this.__decorate || function(t, e, o, a) {
                var n, i = arguments.length,
                    r = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (r = (i < 3 ? n(r) : i > 3 ? n(e, o, r) : n(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../../scripts/common/Base"),
            s = cc._decorator,
            c = s.ccclass,
            l = (s.property,
                function(t) {
                    n(e, t);

                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        e.prefab = null;
                        e.endPool = new cc.NodePool();
                        return e;
                    }
                    e.getInstance = function() {
                        return t.getInstance.call(this);
                    };
                    e.prototype.setPrefab = function(t) {
                        this.prefab = t;
                    };
                    e.prototype.getPrefab = function() {
                        return !!this.prefab;
                    };
                    e.prototype.createEnemy = function() {
                        var t = null;
                        if (this.endPool.size() > 0) t = this.endPool.get();
                        else if (this.prefab) {
                            var e = cc.instantiate(this.prefab);
                            this.endPool.put(e);
                            t = this.endPool.get();
                        }
                        return t;
                    };
                    e.prototype.onEnemyKilled = function(t) {
                        this.endPool.put(t);
                    };
                    e.prototype.delNodePool = function() {
                        this.prefab = null;
                        this.endPool.clear();
                    };
                    return i([c], e);
                }(r.Base));
        o.default = l;
        cc._RF.pop();
    }, {
        "../../../scripts/common/Base": void 0
    }],
    BlockItemScript: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0e90fDtIXVDOZ8oW2AnZv9u", "BlockItemScript");
        var a, n = this && this.__extends || (a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    })(t, e);
            }, function(t, e) {
                a(t, e);

                function o() {
                    this.constructor = t;
                }
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
            }),
            i = this && this.__decorate || function(t, e, o, a) {
                var n, i = arguments.length,
                    r = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (r = (i < 3 ? n(r) : i > 3 ? n(e, o, r) : n(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../../scripts/common/Controller"),
            s = t("../../../scripts/func/allo_block/AlloBlockHelper"),
            c = t("../../../scripts/func/ResourceTool/ResourceEnum"),
            l = t("../../../scripts/func/FeatureIsOpen/FeatureController"),
            u = cc._decorator,
            h = u.ccclass,
            d = u.property,
            f = function(t) {
                n(e, t);

                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    e.spr = null;
                    e._currentId = 0;
                    e.blockId = 0;
                    e.nameArr = ["blue", "yellow", "purple", "orange", "red", "green", "cyan"];
                    return e;
                }
                e.prototype.onLoad = function() {
                    s.AlloBlockHelper.isOpen() && this.nameArr.push("gray");
                };
                e.prototype.setSprData = function(t, e) {
                    void 0 === e && (e = 0);
                    this.spr.width = 106 * t;
                    this.blockId = t + 10 * e;
                    t = 1;
                    this._currentId = t;
                    r.default.getInstance().loadSpriteFrameBundle("resources/block/block_" + this.nameArr[e] + "_" + t, this.spr.getComponent(cc.Sprite));
                };
                e.prototype.setGrayData = function() {
                    l.default.IsFeatureOpen("uniView") ? r.default.getInstance().loadSpriteFrameBundle(c.ResourceEnum.block_gray_new + this._currentId, this.spr.getComponent(cc.Sprite), null, !1) : r.default.getInstance().loadSpriteFrameBundle("resources/block/block_gray_" + this._currentId, this.spr.getComponent(cc.Sprite), null, !1);
                };
                e.prototype.clearSprData = function() {
                    this.spr.getComponent(cc.Sprite).spriteFrame = null;
                };
                e.prototype.start = function() {};
                e.prototype.getCurrentId = function() {
                    return this.blockId;
                };
                i([d(cc.Node)], e.prototype, "spr", void 0);
                return i([h], e);
            }(cc.Component);
        o.default = f;
        cc._RF.pop();
    }, {
        "../../../scripts/common/Controller": void 0,
        "../../../scripts/func/FeatureIsOpen/FeatureController": void 0,
        "../../../scripts/func/ResourceTool/ResourceEnum": void 0,
        "../../../scripts/func/allo_block/AlloBlockHelper": void 0
    }],
    GuideItemPoolScript: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0a24cssp3tK14mQSZW2Ukxx", "GuideItemPoolScript");
        var a, n = this && this.__extends || (a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    })(t, e);
            }, function(t, e) {
                a(t, e);

                function o() {
                    this.constructor = t;
                }
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
            }),
            i = this && this.__decorate || function(t, e, o, a) {
                var n, i = arguments.length,
                    r = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (r = (i < 3 ? n(r) : i > 3 ? n(e, o, r) : n(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../../scripts/common/Base"),
            s = cc._decorator,
            c = s.ccclass,
            l = (s.property,
                function(t) {
                    n(e, t);

                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        e.prefab = null;
                        e.endPool = new cc.NodePool();
                        return e;
                    }
                    e.getInstance = function() {
                        return t.getInstance.call(this);
                    };
                    e.prototype.setPrefab = function(t) {
                        this.prefab = t;
                    };
                    e.prototype.getPrefab = function() {
                        return !!this.prefab;
                    };
                    e.prototype.createEnemy = function() {
                        var t = null;
                        if (this.endPool.size() > 0) t = this.endPool.get();
                        else if (this.prefab) {
                            var e = cc.instantiate(this.prefab);
                            this.endPool.put(e);
                            t = this.endPool.get();
                        }
                        return t;
                    };
                    e.prototype.onEnemyKilled = function(t) {
                        t.active = !1;
                        this.endPool.put(t);
                    };
                    e.prototype.delNodePool = function() {
                        this.prefab = null;
                        this.endPool.clear();
                    };
                    return i([c], e);
                }(r.Base));
        o.default = l;
        cc._RF.pop();
    }, {
        "../../../scripts/common/Base": void 0
    }],
    JewelGameSceneScript: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "143a7QMaOBAdqFRUbXenlFY", "JewelGameSceneScript");
        var a, n = this && this.__extends || (a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    })(t, e);
            }, function(t, e) {
                a(t, e);

                function o() {
                    this.constructor = t;
                }
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
            }),
            i = this && this.__decorate || function(t, e, o, a) {
                var n, i = arguments.length,
                    r = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (r = (i < 3 ? n(r) : i > 3 ? n(e, o, r) : n(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../../iapScript/utils/EventCenter"),
            s = t("../../../scripts/common/ClickDeviceModule"),
            c = t("../../../scripts/common/Controller"),
            l = t("../../../scripts/common/GameController"),
            u = t("../../../scripts/common/GameDefine"),
            h = t("../../../scripts/common/NativePort"),
            d = t("../../../scripts/common/SetupPoolScript"),
            f = t("../../../scripts/common/SoundController"),
            p = t("../../../scripts/data/GameData"),
            g = t("../../../scripts/func/DataStatistics/DataStatisticsController"),
            m = t("../../../scripts/func/FeatureIsOpen/FeatureController"),
            v = t("../../../scripts/func/ResourceTool/ResourceEnum"),
            _ = t("../../../scripts/func/ResourceTool/ResourceTool"),
            y = t("../../../scripts/func/ecpmgpmodel/EcpmGpModelUtil"),
            b = t("../../../scripts/func/newSettingSwitchStyle/SettingStyle"),
            S = t("../../../scripts/func/simplify_btn/SimplifyBtnControl"),
            w = t("./BlockItemPoolScript"),
            O = t("./GuideItemPoolScript"),
            C = t("../../../scripts/func/endless_motivator_feedback/EndlessMotivatorFeedbackCtrl"),
            D = t("../../../scripts/func/endless_motivator_optimize/EndlessMotivatorOptimizeCtrl"),
            G = t("../../../scripts/func/egameReport/SceneJumpControl"),
            E = t("../../../scripts/func/tripleScoreAndMatchPng/TripleScoreAndMatchPngControl"),
            I = t("../../../scripts/func/gameLobby/GameLobby"),
            N = t("../../../scripts/func/enums/GameTypeEnum"),
            k = t("./JewelNewOutBlock"),
            B = t("../../../scripts/func/button_feedback/BtnFeedBackCtrl"),
            j = t("../../../scripts/func/AppShowPlayInterstitialAd/AppShowPlayInterstitialAd"),
            P = t("../../../scripts/ChangeSkin/Setting/SkinSettingController"),
            R = t("../../../scripts/ChangeSkin/ChangeSkinController"),
            x = t("../../../scripts/common/ServerEventUpLoadCtrl"),
            T = cc._decorator,
            M = T.ccclass,
            A = T.property,
            W = function(t) {
                n(e, t);

                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    e.show_up = null;
                    e.exit_node = null;
                    e.show2_up = null;
                    e.stop_node = null;
                    e.guide_bg = null;
                    e.current_txt = null;
                    e.high_txt = null;
                    e.touchEndState = !1;
                    e.onTouchTime = 0;
                    e.getWidth = 106;
                    e.endGameState = !1;
                    e.isCheckStateError = 0;
                    e.touchBeginPos = null;
                    e.touchAimNode = null;
                    e.touchAimNodePos = null;
                    e.getRow = 0;
                    e.getCol = 0;
                    e.ClickState = !1;
                    e.getCleanArr = 0;
                    e.setupNode = null;
                    e.getSoundNum = 0;
                    return e;
                }
                e.prototype.onLoad = function() {
                    B.default.isOpen() && B.default.noChangeBtn(this.exit_node.getChildByName("game-block-bg_black"));
                    if (I.default.getInstance().isReady) {
                        p.default.chapter = "jewel";
                        p.default.getInstance().initData();
                        I.default.getInstance().JewelStartSubmit(p.default.GameDataObj.gameNum);
                    }
                    l.default.getInstance().loadSceneLevelFont(this.high_txt, this.current_txt);
                    c.default.getInstance().normalGameSpeedRatio();
                    R.ChangeSkinController.isOpen() && P.default.ins().init();
                    h.NativePort.setGameMode(N.GameTypeEnum.MoreGame);
                    c.default.getInstance().setAdpter();
                    this.setData();
                    this.endGameState = !1;
                    this.beginProduceGuide();
                    k.default.generateValidBlockCombinations();
                    f.default.getInstance().playBgMusic();
                    h.NativePort.showGameLoad();
                    l.default.getInstance().adpterIphoneX(this.node.getChildByName("top").getChildByName("score_highest"));
                    l.default.getInstance().adpterIphoneX(this.node.getChildByName("stop2"));
                    var t = this.node.getChildByName("top").getChildByName("score_highest").getComponent(cc.Widget).top;
                    this.node.getChildByName("top").getChildByName("score_score").getComponent(cc.Widget).top = t + (cc.view.getVisibleSize().height / 2 - t - (this.show_up.y + this.show_up.height / 2)) / 2 - 30;
                    c.default.getInstance().wholeSceneReduceHigh(this.node, p.default.topHighValue);
                    if (m.default.IsFeatureOpen("uniView")) {
                        var e = v.ResourceBundleEnum.highest,
                            o = cc.find("top/score_highest", this.node).getComponent(cc.Sprite),
                            a = v.ResourceEnum.highest;
                        _.default.replaceSprite(o, a, e);
                    }
                    S.default.getInstance().isOpen() && S.default.getInstance().setInit(this.node, !0, null);
                    p.default.tripleScoreAndMatchPng && (E.default.removeNum = 0);
                    p.default.inAppHide2State = !0;
                    j.default.isOpen() && (p.default.appShowInterstitialNotPlayed = !0);
                    G.default.curSceneType = G.SCENE_TYPE.JEWEL_GAME_SCENE;
                    this.isCheckStateError = 0;
                };
                e.prototype.beginProduceGuide = function() {
                    for (var t = !0, e = p.default.GameDataObj.opera_arr, o = 0; o < e.length; o++)
                        if (e[o] > 0) {
                            t = !1;
                            break;
                        }
                    var a = !0,
                        n = p.default.GameDataObj.save_arr;
                    for (o = 0; o < n.length; o++)
                        for (var i = 0; i < n[o].length; i++) {
                            if (n[o][i] > 0) {
                                a = !1;
                                break;
                            }
                            if (!a) break;
                        }
                    if (a) {
                        this.produceItems();
                        p.default.GameDataObj.save_arr[8] = this.getProduceItemsData();
                        p.default.GameDataObj.save_arr[9] = this.getProduceItemsData();
                        this.setProduceBlock();
                        p.default.getInstance().saveData();
                    } else if (t) {
                        this.produceItems();
                        p.default.getInstance().saveData();
                    }
                    this.produceGuide();
                    this.produceBlock();
                };
                e.prototype.setProduceBlock = function() {
                    if (this.dropData()) {
                        p.default.GameDataObj.save_arr[9] = this.getProduceItemsData();
                        this.setProduceBlock();
                    }
                };
                e.prototype.setData = function() {
                    this.current_txt.string = "" + p.default.GameDataObj.current_cord;
                    this.high_txt.string = "" + p.default.GameDataObj.high_cord;
                };
                e.prototype.produceGuide = function() {
                    var t = this;
                    O.default.getInstance().getPrefab() ? this.showGuide() : c.default.getInstance().getJewelGameBundle(function(e) {
                        e.load("resources/prefabs/guideItem", function(e, o) {
                            if (!e && o instanceof cc.Prefab) {
                                O.default.getInstance().setPrefab(o);
                                t.showGuide();
                            }
                        });
                    }, this);
                };
                e.prototype.produceBlock = function() {
                    var t = this;
                    if (w.default.getInstance().getPrefab())
                        for (var e = 0; e < 10; e++) this.showBlockArr(e);
                    else c.default.getInstance().getJewelGameBundle(function(e) {
                        e.load("resources/prefabs/blockItem", function(e, o) {
                            if (!e && o instanceof cc.Prefab) {
                                w.default.getInstance().setPrefab(o);
                                for (var a = 0; a < 10; a++) t.showBlockArr(a);
                            }
                        });
                    }, this);
                };
                e.prototype.showBlockArr = function(t) {
                    var e = p.default.GameDataObj.save_arr[t],
                        o = this.getWidth;
                    if (e && e.length)
                        for (var a = 0; a < e.length; a++)
                            if (e[a] > 0) {
                                var n = w.default.getInstance().createEnemy();
                                n.getComponent("BlockItemScript").setSprData(e[a] % 10, Math.floor(e[a] / 10));
                                n.x = a * o + e[a] % 10 * o / 2 - 4 * o;
                                n.y = 5 * o - o / 2 - o * t;
                                this && this.show_up && this.show_up.addChild(n);
                                a = a + e[a] % 10 - 1;
                            }
                };
                e.prototype.showGuide = function() {
                    if (this.guide_bg)
                        for (var t = p.default.GameDataObj.opera_arr, e = 0; e < t.length; e++)
                            if (t[e] > 0) {
                                var o = O.default.getInstance().createEnemy();
                                o.getComponent("guideItemScript").setItemWidth(t[e] % 10);
                                o.x = 106 * e + t[e] % 10 * 106 / 2 - this.guide_bg.width / 2;
                                this.guide_bg.addChild(o);
                                e = e + t[e] % 10 - 1;
                            }
                };
                e.prototype.getProduceItemsData = function() {
                    var t = [0, 0, 0, 0, 0, 0, 0, 0];
                    if (2 == Math.floor(2 * Math.random()) + 1) {
                        t[e = Math.floor(7 * Math.random())] = -1;
                        t[e + 1] = -1;
                    } else {
                        var e;
                        t[e = Math.floor(8 * Math.random())] = -1;
                    }
                    for (var o = 0; o < t.length; o++)
                        if (0 == t[o]) {
                            for (var a = Math.floor(4 * Math.random()) + 1, n = 0, i = o; i < t.length && 0 == t[i]; i++) n++;
                            if (a > n)
                                for (i = o; i < o + n; i++) t[i] = n;
                            else
                                for (i = o; i < o + a; i++) t[i] = a;
                        }
                    for (o = 0; o < t.length; o++)
                        if (t[o] > 0) {
                            var r = t[o],
                                s = (n = r + o, 10 * Math.floor(7 * Math.random()) + r);
                            for (i = o; i < n; i++) t[i] = s;
                            o += r - 1;
                        }
                    return t;
                };
                e.prototype.produceItems = function() {
                    p.default.GameDataObj.roundNum ? p.default.GameDataObj.roundNum++ : p.default.GameDataObj.roundNum = 1;
                    p.default.GameDataObj.roundNum;
                    var t = [0, 0, 0, 0, 0, 0, 0, 0];
                    if (k.default.isOpen() && k.default.hasData()) {
                        t = k.default.generateCurDiffString().combination.split("").map(Number);
                        for (var e = 0; e < t.length; e++) 0 === t[e] && (t[e] = -1);
                    } else {
                        if (2 == Math.floor(2 * Math.random()) + 1) {
                            t[o = Math.floor(7 * Math.random())] = -1;
                            t[o + 1] = -1;
                        } else {
                            var o;
                            t[o = Math.floor(8 * Math.random())] = -1;
                        }
                        for (e = 0; e < t.length; e++)
                            if (0 == t[e]) {
                                var a = Math.floor(4 * Math.random()) + 1;
                                p.default.GameDataObj.current_cord > 2e3 ? a = Math.floor(3 * Math.random()) + 2 : p.default.GameDataObj.current_cord > 1e3 && 0 == Math.floor(2 * Math.random()) && (a = Math.floor(3 * Math.random()) + 2);
                                for (var n = 0, i = e; i < t.length && 0 == t[i]; i++) n++;
                                if (a > n)
                                    for (i = e; i < e + n; i++) t[i] = n;
                                else
                                    for (i = e; i < e + a; i++) t[i] = a;
                            }
                    }
                    for (e = 0; e < t.length; e++)
                        if (t[e] > 0) {
                            var r = t[e],
                                s = (n = r + e, 10 * Math.floor(7 * Math.random()) + r);
                            for (i = e; i < n; i++) t[i] = s;
                            e += r - 1;
                        }
                    for (e = 0; e < t.length; e++) p.default.GameDataObj.opera_arr[e] = t[e];
                    p.default.getInstance().saveData();
                };
                e.prototype.onLoadEvent = function() {
                    this.show_up.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                    this.show_up.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
                    this.show_up.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
                    this.show_up.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
                    l.default.getInstance().addMessage(l.default.MESSAGE_ACTIVE_BG, this.setActiveBg, this);
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart2, this);
                };
                e.prototype.onTouchStart2 = function(t) {
                    if (new Date().getTime() - this.onTouchTime > 500) {
                        this.onTouchTime = new Date().getTime();
                        var e = t.getLocation(),
                            o = this.node.convertToNodeSpaceAR(e);
                        l.default.getInstance().showPrefab(l.default.path_perfabs + "showprefabsclick", o.x, o.y, .7, null, 0, this.node);
                    }
                };
                e.prototype.onKeyDown = function(t) {
                    switch (t.keyCode) {
                        case cc.macro.KEY.back:
                            if (this.setupNode && this.setupNode.active) {
                                f.default.getInstance().playBgMusic();
                                f.default.getInstance().playEffect(f.SOUND.SOUND_s_button, 1);
                                this.exit_node.active = !1;
                                if (this.setupNode) {
                                    this.setupNode.active = !1;
                                    d.default.getInstance().onEnemyKilled(this.setupNode);
                                }
                            } else this.onClick(null, "exit");
                    }
                };
                e.prototype.onDestroyEvent = function() {
                    G.default.lastSceneType = G.SCENE_TYPE.JEWEL_GAME_SCENE;
                    this.show_up.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                    this.show_up.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
                    this.show_up.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
                    this.show_up.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
                    l.default.getInstance().removeMessage(l.default.MESSAGE_ACTIVE_BG);
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart2, this);
                };
                e.prototype.onTouchStart = function(t) {
                    if (!this.touchEndState) {
                        var e = t.getLocation();
                        this.touchBeginPos = {
                            x: e.x,
                            y: e.y
                        };
                        var o = this.stop_node.parent.convertToWorldSpaceAR(this.stop_node.getPosition());
                        if (new cc.Rect(o.x - this.stop_node.width / 2, o.y - this.stop_node.height / 2, this.stop_node.width, this.stop_node.height).contains(e)) {
                            this.ClickState = !1;
                            cc.macro.ENABLE_MULTI_TOUCH = !0;
                            t.target._touchListener.setSwallowTouches(!1);
                        } else {
                            this.ClickState = !1;
                            for (var a = 0; a < this.show_up.children.length; a++) {
                                var n = this.show_up.children[a],
                                    i = n.parent.convertToWorldSpaceAR(n.getPosition());
                                if (new cc.Rect(i.x - n.width / 2, i.y - n.height / 2, n.width, n.height).contains(e)) {
                                    this.ClickState = !0;
                                    this.touchEndState = !0;
                                    this.getSoundNum = 0;
                                    this.touchAimNode = n;
                                    this.touchAimNodePos = {
                                        x: this.touchAimNode.x,
                                        y: this.touchAimNode.y
                                    };
                                    this.getRow = 10 - (this.touchAimNode.y + 5 * this.getWidth + this.getWidth / 2) / this.getWidth;
                                    this.getCol = Math.floor((this.touchAimNode.x + 4 * this.getWidth - this.getWidth / 2) / this.getWidth);
                                    this.getCol, this.getRow;
                                    this.getRow = Math.round(this.getRow);
                                    this.getRow = this.getRow < 0 ? 0 : this.getRow > 9 ? 9 : this.getRow;
                                    this.getCol = this.getCol < 0 ? 0 : this.getCol > 7 ? 7 : this.getCol;
                                    this.getCol, this.getRow;
                                    cc.macro.ENABLE_MULTI_TOUCH = !1;
                                    t.target._touchListener.setSwallowTouches(!0);
                                    break;
                                }
                            }
                        }
                    }
                };
                e.prototype.onTouchMove = function(t) {
                    if (this.ClickState) {
                        var e = t.getLocation();
                        this.getRow = Math.floor(this.getRow);
                        this.getCol = Math.floor(this.getCol);
                        if (p.default.GameDataObj.save_arr && p.default.GameDataObj.save_arr[this.getRow] && p.default.GameDataObj.save_arr[this.getRow][this.getCol]) {
                            var o = p.default.GameDataObj.save_arr[this.getRow][this.getCol],
                                a = 0,
                                n = 0;
                            if (o % 10 == 1) {
                                for (var i = this.getCol - 1; i >= 0 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i--) a++;
                                for (i = this.getCol + 1; i < 8 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i++) n++;
                            } else if (o % 10 == 2) {
                                for (i = this.getCol - 1; i >= 0 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i--) a++;
                                for (i = this.getCol + 2; i < 8 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i++) n++;
                            } else if (o % 10 == 3) {
                                for (i = this.getCol - 2; i >= 0 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i--) a++;
                                for (i = this.getCol + 2; i < 8 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i++) n++;
                            } else if (o % 10 == 4) {
                                for (i = this.getCol - 2; i >= 0 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i--) a++;
                                for (i = this.getCol + 3; i < 8 && p.default.GameDataObj.save_arr[this.getRow][i] < 0; i++) n++;
                            }
                            e.x < this.touchBeginPos.x ? a * this.getWidth >= this.touchBeginPos.x - e.x ? this.touchAimNode.x = this.touchAimNodePos.x - (this.touchBeginPos.x - e.x) : this.touchAimNode.x = this.touchAimNodePos.x - a * this.getWidth : e.x > this.touchBeginPos.x && (n * this.getWidth >= e.x - this.touchBeginPos.x ? this.touchAimNode.x = this.touchAimNodePos.x + (e.x - this.touchBeginPos.x) : this.touchAimNode.x = this.touchAimNodePos.x + n * this.getWidth);
                        }
                    }
                };
                e.prototype.onTouchEnd = function() {
                    if (this.ClickState) {
                        this.ClickState = !1;
                        var t = Math.round((this.touchAimNode.x - this.touchAimNodePos.x) / this.getWidth),
                            e = !1;
                        if (t) {
                            e = !0;
                            this.touchAimNode.x = this.touchAimNodePos.x + t * this.getWidth;
                            f.default.getInstance().playEffect(f.SOUND.SOUND_s_touch, .5);
                        } else {
                            e = !1;
                            this.touchAimNode.x = this.touchAimNodePos.x;
                        }
                        if (e) {
                            this.getCleanArr = 0;
                            var o = p.default.GameDataObj.save_arr,
                                a = o[this.getRow][this.getCol];
                            if (a % 10 == 1) {
                                o[this.getRow][this.getCol + t] = a;
                                o[this.getRow][this.getCol] = -1;
                            } else if (a % 10 == 2) {
                                o[this.getRow][this.getCol] = -1;
                                o[this.getRow][this.getCol + 1] = -1;
                                o[this.getRow][this.getCol + t] = a;
                                o[this.getRow][this.getCol + t + 1] = a;
                            } else if (a % 10 == 3) {
                                o[this.getRow][this.getCol] = -1;
                                o[this.getRow][this.getCol - 1] = -1;
                                o[this.getRow][this.getCol + 1] = -1;
                                o[this.getRow][this.getCol + t] = a;
                                o[this.getRow][this.getCol - 1 + t] = a;
                                o[this.getRow][this.getCol + 1 + t] = a;
                            } else if (a % 10 == 4) {
                                o[this.getRow][this.getCol] = -1;
                                o[this.getRow][this.getCol - 1] = -1;
                                o[this.getRow][this.getCol + 1] = -1;
                                o[this.getRow][this.getCol + 2] = -1;
                                o[this.getRow][this.getCol + t] = a;
                                o[this.getRow][this.getCol - 1 + t] = a;
                                o[this.getRow][this.getCol + 1 + t] = a;
                                o[this.getRow][this.getCol + 2 + t] = a;
                            }
                            this.goCallBack();
                        } else this.touchEndState = !1;
                    }
                };
                e.prototype.goCallBack = function() {
                    var t = this,
                        e = this.dropData();
                    if (e) {
                        var o = this.touchAimNode,
                            a = {
                                x: 0,
                                y: 0
                            };
                        if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 1) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth;
                        } else if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 2) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth + this.getWidth / 2;
                        } else if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 3) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth + this.getWidth / 2 * 2;
                        } else if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 4) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth + this.getWidth / 2 * 3;
                        }
                        if (this.show_up && this.show_up.isValid)
                            for (var n = 0; n < this.show_up.children.length; n++)
                                if (this.show_up.children[n].x == a.x && this.show_up.children[n].y == a.y) {
                                    o = this.show_up.children[n];
                                    break;
                                }
                        var i = o.y - e.dropNum * this.getWidth;
                        cc.tween(o).to(.2, {
                            y: i
                        }).call(function() {
                            t.dropDataFinish(e);
                        }).start();
                    } else this.freshData();
                };
                e.prototype.goEndCallBack = function() {
                    var t = this,
                        e = this.dropData();
                    if (e) {
                        var o = this.touchAimNode,
                            a = {
                                x: 0,
                                y: 0
                            };
                        if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 1) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth;
                        } else if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 2) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth + this.getWidth / 2;
                        } else if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 3) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth + this.getWidth / 2 * 2;
                        } else if (p.default.GameDataObj.save_arr[e.row][e.col] % 10 == 4) {
                            a.y = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * e.row;
                            a.x = e.col * this.getWidth + this.getWidth / 2 - 4 * this.getWidth + this.getWidth / 2 * 3;
                        }
                        for (var n = 0; n < this.show_up.children.length; n++)
                            if (this.show_up.children[n].x == a.x && this.show_up.children[n].y == a.y) {
                                o = this.show_up.children[n];
                                break;
                            }
                        var i = o.y - e.dropNum * this.getWidth;
                        cc.tween(o).to(.2, {
                            y: i
                        }).call(function() {
                            o.y = i;
                            t.dropDataFinish(e, !0);
                        }).start();
                    } else this.dropEnd();
                };
                e.prototype.dropDataFinish = function(t, e) {
                    var o = this;
                    void 0 === e && (e = !1);
                    for (var a = p.default.GameDataObj.save_arr[t.row][t.col], n = 0; n < a % 10; n++) {
                        p.default.GameDataObj.save_arr[t.row][t.col + n] = -1;
                        p.default.GameDataObj.save_arr[t.row + t.dropNum][t.col + n] = a;
                    }
                    var i = [];
                    for (n = 0; n < p.default.GameDataObj.save_arr.length; n++) {
                        for (var r = !0, s = 0; s < p.default.GameDataObj.save_arr[n].length; s++) p.default.GameDataObj.save_arr[n][s] < 0 && (r = !1);
                        r && i.push(n);
                    }
                    if (0 != i.length) {
                        var l = [];
                        if (this.show_up && this.show_up.isValid)
                            for (n = 0; n < i.length; n++) {
                                for (var u = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * i[n], h = 0; h < this.show_up.children.length; h++) u == this.show_up.children[h].y && l.push(this.show_up.children[h]);
                                c.default.getInstance().showEndScript(c.default.path_perfabs + "show_end", 0, u, 1, null, 0, this.show2_up, null, Math.floor(a / 10) + 1);
                                p.default.GameDataObj.save_arr[i[n]] = [-1, -1, -1, -1, -1, -1, -1, -1];
                                this.playMusicScale();
                            }
                        this.getCleanArr += i.length;
                        for (n = 0; n < l.length; n++) {
                            var d = l[n];
                            w.default.getInstance().onEnemyKilled(d);
                        }
                        var f = !1,
                            g = [];
                        if (this.show_up && this.show_up.isValid)
                            for (n = 0; n < this.show_up.children.length; n++) g.push(this.show_up.children[n]);
                        g = g.sort(function(t, e) {
                            return t.y - e.y;
                        });
                        for (n = 0; n < g.length; n++) g[n].y;
                        i.length > 0 && (f = !0);
                        for (h = 0; h < g.length; h++) {
                            var m = 0;
                            for (n = 0; n < i.length; n++)(u = 5 * this.getWidth - this.getWidth / 2 - this.getWidth * i[n]) < g[h].y && m++;
                            if (m) {
                                f = !0;
                                var v = 10 - (g[h].y + 5 * this.getWidth + this.getWidth / 2) / this.getWidth,
                                    _ = Math.floor((g[h].x + 4 * this.getWidth - this.getWidth / 2) / this.getWidth);
                                v = (v = Math.round(v)) < 0 ? 0 : v > 9 ? 9 : v;
                                _ = _ < 0 ? 0 : _ > 7 ? 7 : _;
                                var y = g[h].y - m * this.getWidth;
                                cc.tween(g[h]).delay(.6).to(.1, {
                                    y: y
                                }).start();
                                var b = p.default.GameDataObj.save_arr[v][_];
                                if (b % 10 == 1) {
                                    p.default.GameDataObj.save_arr[v + m][_] = b;
                                    p.default.GameDataObj.save_arr[v][_] = -1;
                                } else if (b % 10 == 2) {
                                    p.default.GameDataObj.save_arr[v][_] = -1;
                                    p.default.GameDataObj.save_arr[v][_ + 1] = -1;
                                    p.default.GameDataObj.save_arr[v + m][_] = b;
                                    p.default.GameDataObj.save_arr[v + m][_ + 1] = b;
                                } else if (b % 10 == 3) {
                                    p.default.GameDataObj.save_arr[v][_] = -1;
                                    p.default.GameDataObj.save_arr[v][_ - 1] = -1;
                                    p.default.GameDataObj.save_arr[v][_ + 1] = -1;
                                    p.default.GameDataObj.save_arr[v + m][_] = b;
                                    p.default.GameDataObj.save_arr[v + m][_ - 1] = b;
                                    p.default.GameDataObj.save_arr[v + m][_ + 1] = b;
                                } else if (b % 10 == 4) {
                                    p.default.GameDataObj.save_arr[v][_] = -1;
                                    p.default.GameDataObj.save_arr[v][_ - 1] = -1;
                                    p.default.GameDataObj.save_arr[v][_ + 1] = -1;
                                    p.default.GameDataObj.save_arr[v][_ + 2] = -1;
                                    p.default.GameDataObj.save_arr[v + m][_] = b;
                                    p.default.GameDataObj.save_arr[v + m][_ - 1] = b;
                                    p.default.GameDataObj.save_arr[v + m][_ + 1] = b;
                                    p.default.GameDataObj.save_arr[v + m][_ + 2] = b;
                                }
                            }
                        }
                        f ? cc.tween(this.node).delay(.7).call(function() {
                            e ? o.goEndCallBack() : o.goCallBack();
                        }).start() : e ? this.goEndCallBack() : this.goCallBack();
                    } else e ? this.goEndCallBack() : this.goCallBack();
                };
                e.prototype.dropData = function() {
                    p.default.GameDataObj.save_arr;
                    for (var t = 0, e = 8; e >= 0; e--)
                        for (var o = 0; o < 8; o++)
                            if (e < p.default.GameDataObj.save_arr.length && p.default.GameDataObj.save_arr[e][o] > 0) {
                                for (var a = !0, n = p.default.GameDataObj.save_arr[e][o], i = e + 1; i <= 9; i++) {
                                    for (var r = 0; r < n % 10; r++)
                                        if (p.default.GameDataObj.save_arr[i][o + r] > 0) {
                                            a = !1;
                                            break;
                                        }
                                    if (!a) break;
                                    t++;
                                }
                                if (t > 0) return {
                                    dropNum: t,
                                    row: e,
                                    col: o
                                };
                                o += n % 10 - 1;
                            }
                    return null;
                };
                e.prototype.freshData = function() {
                    var t = this;
                    if (this.show_up && this.show_up.isValid)
                        for (var e = function(t) {
                                var e = o.show_up.children[t];
                                if (e && e.isValid) {
                                    var a = e.y + o.getWidth;
                                    cc.tween(e).to(.18, {
                                        y: a
                                    }).call(function() {
                                        e.y = a;
                                    }).start();
                                }
                            }, o = this, a = 0; a < this.show_up.children.length; a++) e(a);
                    var n = [];
                    if (this.guide_bg && this.guide_bg.isValid)
                        for (a = 0; a < this.guide_bg.children.length; a++) n.push(this.guide_bg.children[a]);
                    for (a = 0; a < n.length; a++) O.default.getInstance().onEnemyKilled(n[a]);
                    cc.tween(this.node).delay(.2).call(function() {
                        for (var e = p.default.GameDataObj.save_arr, o = 0; o < 10; o++)
                            for (var a = 0; a < 8; a++) 9 == o ? e[9][a] = p.default.GameDataObj.opera_arr[a] : e[o][a] = e[o + 1][a];
                        t.showBlockArr(9);
                        t.goEndCallBack();
                    }).start();
                };
                e.prototype.onClick = function(t, e) {
                    var o = this;
                    if (!this.touchEndState && !this.endGameState) switch (e) {
                        case "home":
                            p.default.isOpenRecovery && c.default.getInstance().setRecoverySceneTag(u.RECOVERY_SCENE_TAG.NONE);
                            f.default.getInstance && f.default.getInstance().stopBgMusic && f.default.getInstance().stopBgMusic();
                            f.default.getInstance().playEffect(f.SOUND.site_button, 1);
                            b.default.isOpen() && b.default.backToHome();
                            break;

                        case "exit":
                            f.default.getInstance().playEffect(f.SOUND.SOUND_s_button, 1);
                            if ("glhallScene" == p.default.jumpHistoryScene && I.default.getInstance().isReady) {
                                I.default.getInstance().enterGameLobby();
                                I.default.getInstance().exitToGameLobby("gl_blockslide");
                            } else {
                                p.default.chapter = "class";
                                p.default.getInstance().initData();
                                c.default.getInstance().getOpenRotateModelState() ? cc.director.loadScene("NewComobRotateGameSkinScene9") : c.default.getWayState() || 3100 == p.default.gameWayNum || 4600 == p.default.gameWayNum || 4700 == p.default.gameWayNum ? cc.director.loadScene("NewComobGameSkinScene" + p.default.GameDataObj.skinNum) : cc.director.loadScene("NewGameSkinScene" + p.default.GameDataObj.skinNum);
                            }
                            O.default.getInstance().delNodePool();
                            w.default.getInstance().delNodePool();
                            c.default.getInstance().removeJewelGameBundle();
                            break;

                        case "continue":
                            f.default.getInstance().playBgMusic();
                            f.default.getInstance().playEffect(f.SOUND.SOUND_s_button, 1);
                            this.exit_node.active = !1;
                            if (S.default.getInstance().isOpen()) S.default.getInstance().bordCloseOROpen();
                            else if (this.setupNode) {
                                this.setupNode.active = !1;
                                d.default.getInstance().onEnemyKilled(this.setupNode);
                            }
                            break;

                        case "restart":
                            this.endGameState = !0;
                            if (this.setupNode) {
                                this.exit_node.active = !1;
                                this.setupNode.active = !1;
                                d.default.getInstance().onEnemyKilled(this.setupNode);
                            }
                            this.setDefaultData();
                            f.default.getInstance().playEffect(f.SOUND.SOUND_s_button, 1);
                            h.NativePort.addGoOnGame(this.node, h.NativePort.ADLOCK_TYPE.MOREGAME_LIFE);
                            x.ServerEventUpLoadCtrl.isOpen() && x.ServerEventUpLoadCtrl.onBeforeAdShow(1, N.GameTypeEnum.MoreGame);
                            l.default.getInstance().showAgainInterstitial(function() {
                                c.default.getInstance().getJewelGameBundle(function(t) {
                                    t.preloadScene("JewelGameScene", function(e) {
                                        e || t.loadScene("JewelGameScene", function(t, e) {
                                            t || cc.director.runScene(e);
                                        });
                                    });
                                }, o);
                            }, this.node, "GameSkinScene", "");
                            break;

                        case "stop":
                            h.NativePort.setBugsangContext("state-set-moregame");
                            f.default.getInstance().stopBgMusic();
                            f.default.getInstance().playEffect(f.SOUND.SOUND_s_button, 1);
                            if (S.default.getInstance().isOpen()) S.default.getInstance().bordCloseOROpen();
                            else {
                                this.exit_node.active = !0;
                                this.setupNode = d.default.getInstance().createEnemy();
                                this.node.addChild(this.setupNode);
                                this.setupNode.active = !0;
                                if (p.default.addBoneSpeedSetting && this.setupNode.getComponent("SetupBoneSpeedSetting")) {
                                    var a = this.setupNode.getComponent("SetupBoneSpeedSetting");
                                    a && a.setData();
                                } else if (p.default.setBetterState || 8441 == p.default.gameWayNum || 7534 == p.default.gameWayNum)(n = this.setupNode.getComponent("SetupNewScript")) && n.setData();
                                else {
                                    var n;
                                    (n = this.setupNode.getComponent("SetupScript")) && n.setData();
                                }
                            }
                            break;

                        case "music_open":
                        case "music_close":
                            f.default.getInstance().setSoundState();
                            this.updateMiniGameMusic();
                            break;

                        case "music_open2":
                        case "music_close2":
                            f.default.getInstance().setBGMState();
                            this.updateMiniGameMusic();
                            break;

                        case "openIap":
                            r.EventCenter.dispatchEvent(r.EventName.UPDATE_SETTING_OPEN_IAP);
                    }
                };
                e.prototype.updateMiniGameMusic = function() {
                    I.default.getInstance().isReady && I.default.getInstance().updateMusicState();
                };
                e.prototype.setDefaultData = function() {
                    p.default.GameDataObj.save_arr = [];
                    p.default.GameDataObj.current_cord = 0;
                    p.default.GameDataObj.gameNum++;
                    p.default.GameDataObj.roundNum = 0;
                    for (var t = 0; t < 10; t++) p.default.GameDataObj.save_arr.push([-1, -1, -1, -1, -1, -1, -1, -1]);
                    p.default.GameDataObj.opera_arr = [-1, -1, -1, -1, -1, -1, -1, -1];
                    p.default.getInstance().saveData();
                };
                e.prototype.playMusicScale = function() {
                    this.getSoundNum++;
                    this.getSoundNum >= 7 && (this.getSoundNum = 6);
                    f.default.getInstance().playEffect(f.SOUND.SOUND_s_combo + this.getSoundNum - 1, .5);
                };
                e.prototype.addOverMovie = function() {
                    var t = [];
                    if (this.show_up && this.show_up.isValid)
                        for (var e = 0; e < this.show_up.children.length; e++) {
                            var o = this.show_up.children[e];
                            t.push(o);
                        }
                    var a = t.sort(function() {
                            return Math.random() - .5;
                        }),
                        n = function(t) {
                            var e = a[t].getComponent("BlockItemScript"),
                                o = 1.2 * Math.random();
                            cc.tween(a[t]).delay(o).call(function() {
                                e && e.setGrayData();
                            }).start();
                        };
                    for (e = 0; e < a.length; e++) n(e);
                };
                e.prototype.judgeCurrentBlockState = function() {
                    for (var t = [], e = Math.round(this.getWidth / 2), o = 0; o < this.show_up.children.length; o++) {
                        var a = this.show_up.children[o].x,
                            n = this.show_up.children[o].y;
                        a = Math.round(a / e) * e;
                        n = Math.round(n / e) * e;
                        t.push(a + "_" + n);
                    }
                    for (var i = [], r = 0; r < 10; r++) {
                        var s = p.default.GameDataObj.save_arr[r],
                            c = this.getWidth,
                            l = !1;
                        for (o = 0; o < s.length; o++)
                            if (s[o] > 0) {
                                l = !0;
                                a = o * c + s[o] % 10 * c / 2 - 4 * this.getWidth, n = 5 * this.getWidth - c / 2 - c * r;
                                o = o + s[o] % 10 - 1;
                                if (-1 == t.indexOf(a + "_" + n)) return !1;
                            }
                        if (!l && r && i[r - 1]) return !1;
                        i.push(l);
                    }
                    return !0;
                };
                e.prototype.dropEnd = function() {
                    var t = this;
                    if (this.getCleanArr > 0 && 0 == this.isCheckStateError) {
                        var e = 30 * this.getCleanArr;
                        this.getCleanArr > 1 && (e = 30 * (this.getCleanArr - 1) * this.getCleanArr);
                        p.default.GameDataObj.current_cord += e;
                        p.default.GameDataObj.current_cord >= p.default.GameDataObj.high_cord && (p.default.GameDataObj.high_cord = p.default.GameDataObj.current_cord);
                        p.default.getInstance().saveData();
                        this.setData();
                        if (this.getCleanArr > 1) {
                            var o = this.getCleanArr >= 6 ? 6 : this.getCleanArr;
                            f.default.getInstance().playWomanPersonEffect(o - 2, 1);
                            C.default.isOpen || D.default.isOpen ? c.default.getInstance().showPROMPT_TXT(o - 2, null, 0, 400, 1, 1, -100, !0) : c.default.getInstance().showPROMPT_TXT(o - 2, null, 0, 400, 1, 1, -100, !1);
                        }
                        l.default.getInstance().showMoveNum(new cc.Vec2(0, 200), new cc.Vec2(0, 0), "" + e);
                    }
                    if (this.judgeCurrentBlockState()) {
                        this.validateAndFixBlocks();
                        this.isCheckStateError = 0;
                        this.produceItems();
                        this.produceGuide();
                        if (this.isGameOver()) {
                            g.default.isOpen() && g.default.getInstance().updateTargetInfoParam("hasPlayMiniGame", !0);
                            p.default.currentGrade = p.default.GameDataObj.current_cord;
                            this.endGameState = !0;
                            this.setDefaultData();
                            this.onDestroyEvent();
                            this.addOverMovie();
                            f.default.getInstance().playEffect(f.SOUND.SOUND_s_fail, 1);
                            s.ClickDeviceModule.gameFirstClickData(["name", "" + s.ClickDeviceModule.ClickEvent.usr_data_game_end, "GameType", 6, "grade", p.default.currentGrade]);
                            f.default.getInstance().stopBgMusic();
                            cc.tween(this.node).delay(2.6).call(function() {
                                c.default.getInstance().getJewelGameBundle(function(e) {
                                    e.preloadScene("JewelOverScene", function(o) {
                                        o || e.loadScene("JewelOverScene", function(e, o) {
                                            if (!e) {
                                                h.NativePort.addGoOnGame(t.node, h.NativePort.ADLOCK_TYPE.MOREGAME_END);
                                                x.ServerEventUpLoadCtrl.isOpen() && x.ServerEventUpLoadCtrl.onBeforeAdShow(1, N.GameTypeEnum.MoreGame);
                                                c.default.getInstance().showInterstitial(function() {
                                                    cc.director.runScene(o);
                                                }, t, "RussiaGameSceneScript", "");
                                            }
                                        });
                                    });
                                }, t);
                            }).start();
                        } else {
                            for (var a = !0, n = 0; n < p.default.GameDataObj.save_arr.length; n++) {
                                for (var i = 0; i < p.default.GameDataObj.save_arr[n].length; i++)
                                    if (p.default.GameDataObj.save_arr[n][i] > 0) {
                                        a = !1;
                                        break;
                                    }
                                if (!a) break;
                            }
                            var r = !0;
                            for (i = 0; i < p.default.GameDataObj.save_arr[8].length; i++)
                                if (p.default.GameDataObj.save_arr[8][i] > 0) {
                                    r = !1;
                                    break;
                                }
                            if (a) {
                                for (n = 0; n < p.default.GameDataObj.save_arr[9].length; n++) {
                                    p.default.GameDataObj.save_arr[9][n] = p.default.GameDataObj.opera_arr[n];
                                    p.default.GameDataObj.save_arr[8][n] = p.default.GameDataObj.opera_arr[n];
                                }
                                p.default.getInstance().saveData();
                                this.showBlockArr(8);
                                this.showBlockArr(9);
                            } else if (r) {
                                for (n = 0; n < p.default.GameDataObj.save_arr[9].length; n++) p.default.GameDataObj.save_arr[8][n] = p.default.GameDataObj.save_arr[9][n];
                                p.default.getInstance().saveData();
                                this.showBlockArr(8);
                            }
                            p.default.GameDataObj.save_arr;
                            this.touchEndState = !1;
                        }
                    } else {
                        if (this.isCheckStateError < 5) {
                            this.isCheckStateError;
                            4 == this.isCheckStateError && this.validateAndFixBlocks();
                            this.isCheckStateError++;
                            this.scheduleOnce(function() {
                                t.dropEnd();
                            }, .3);
                            return;
                        }
                        this.setDefaultData();
                        this.onDestroyEvent();
                        c.default.getInstance().getJewelGameBundle(function(t) {
                            t.preloadScene("JewelGameScene", function(e) {
                                e || t.loadScene("JewelGameScene", function(t, e) {
                                    t || cc.director.runScene(e);
                                });
                            });
                        }, this);
                    }
                };
                e.prototype.isGameOver = function() {
                    var t, e;
                    if (!(null === (e = null === (t = p.default.GameDataObj) || void 0 === t ? void 0 : t.save_arr) || void 0 === e ? void 0 : e[0]) || !Array.isArray(p.default.GameDataObj.save_arr[0])) return !0;
                    if (8 !== p.default.GameDataObj.save_arr[0].length) {
                        p.default.GameDataObj.save_arr[0].length;
                        return !0;
                    }
                    for (var o = 0; o < p.default.GameDataObj.save_arr[0].length; o++) {
                        var a = p.default.GameDataObj.save_arr[0][o];
                        if ("number" != typeof a) return !0;
                        if (a > 0) return !0;
                    }
                    return !1;
                };
                e.prototype.start = function() {
                    var t = this;
                    h.NativePort.setBugsangContext("state-moregame-fight");
                    cc.tween(this.node).delay(.2).call(function() {
                        t.onLoadEvent();
                    }).start();
                    if (p.default.isOpenShowBanner) {
                        c.default.getInstance().getLocalDataByKey(!0, "gameNum", 0) + c.default.getInstance().getLocalDataByKey(!1, "gameNum", 0) >= 3 && l.default.getInstance().showBanner();
                    } else 1 == p.default.bHideRebrithBanner && 0 != p.default.GameDataObj.adPlayNum && l.default.getInstance().showBanner();
                    y.default.isOpen() && y.default.callNativeCutPreEcpm();
                };
                e.prototype.setActiveBg = function(t) {
                    if (t && t.detail) switch (t.detail.txt) {
                        case "close":
                            this.onClick(null, "continue");
                            break;

                        case "exit":
                            this.onClick(null, "exit");
                            break;

                        case "home":
                            this.onClick(null, "home");
                            break;

                        case "replay":
                            this.onClick(null, "restart");
                            break;

                        case "openIap":
                            this.onClick(null, "openIap");
                    }
                };
                e.prototype.onDestroy = function() {
                    S.default.getInstance().isOpen() && S.default.getInstance().onDestory();
                    cc.Tween.stopAllByTarget(this.node);
                };
                e.prototype.validateAndFixBlocks = function() {
                    for (var t = this.getWidth, e = this.show_up.children, o = e.length - 1; o >= 0; o--) {
                        var a = (u = e[o]).getComponent("BlockItemScript"),
                            n = Math.floor((5 * t - t / 2 - u.y) / t),
                            i = Math.floor((u.x + 4 * t - u.width / 2) / t);
                        if (n < 0 || n > 9 || i < 0 || i > 7) {
                            w.default.getInstance().onEnemyKilled(u);
                            u.x, u.y, a.getCurrentId();
                        } else if (!(c = p.default.GameDataObj.save_arr[n]) || c[i] <= 0) {
                            w.default.getInstance().onEnemyKilled(u);
                            u.x, u.y, a.getCurrentId();
                        } else {
                            var r = i * t + c[i] % 10 * t / 2 - 4 * t,
                                s = 5 * t - t / 2 - t * n;
                            if (Math.abs(u.x - r) > 1 || Math.abs(u.y - s) > 1) {
                                u.x = r;
                                u.y = s;
                                a.getCurrentId();
                            }
                            if (a.getCurrentId() !== c[i]) {
                                a.getCurrentId(), c[i];
                                w.default.getInstance().onEnemyKilled(u);
                            }
                        }
                    }
                    for (n = 0; n < 10; n++) {
                        var c;
                        if (c = p.default.GameDataObj.save_arr[n])
                            for (i = 0; i < c.length; i++)
                                if (c[i] > 0) {
                                    var l = !1;
                                    for (o = 0; o < e.length; o++) {
                                        var u = e[o],
                                            h = Math.floor((5 * t - t / 2 - u.y) / t),
                                            d = Math.floor((u.x + 4 * t - u.width / 2) / t);
                                        if (h === n && d === i) {
                                            l = !0;
                                            break;
                                        }
                                    }
                                    if (!l) {
                                        (a = (u = w.default.getInstance().createEnemy()).getComponent("BlockItemScript")).setSprData(c[i] % 10, Math.floor(c[i] / 10));
                                        u.x = i * t + c[i] % 10 * t / 2 - 4 * t;
                                        u.y = 5 * t - t / 2 - t * n;
                                        c[i], a.getCurrentId();
                                        this.show_up.addChild(u);
                                    }
                                    i += c[i] % 10 - 1;
                                }
                    }
                };
                i([A(cc.Node)], e.prototype, "show_up", void 0);
                i([A(cc.Node)], e.prototype, "exit_node", void 0);
                i([A(cc.Node)], e.prototype, "show2_up", void 0);
                i([A(cc.Node)], e.prototype, "stop_node", void 0);
                i([A(cc.Node)], e.prototype, "guide_bg", void 0);
                i([A(cc.Label)], e.prototype, "current_txt", void 0);
                i([A(cc.Label)], e.prototype, "high_txt", void 0);
                return i([M], e);
            }(cc.Component);
        o.default = W;
        cc._RF.pop();
    }, {
        "../../../iapScript/utils/EventCenter": void 0,
        "../../../scripts/ChangeSkin/ChangeSkinController": void 0,
        "../../../scripts/ChangeSkin/Setting/SkinSettingController": void 0,
        "../../../scripts/common/ClickDeviceModule": void 0,
        "../../../scripts/common/Controller": void 0,
        "../../../scripts/common/GameController": void 0,
        "../../../scripts/common/GameDefine": void 0,
        "../../../scripts/common/NativePort": void 0,
        "../../../scripts/common/ServerEventUpLoadCtrl": void 0,
        "../../../scripts/common/SetupPoolScript": void 0,
        "../../../scripts/common/SoundController": void 0,
        "../../../scripts/data/GameData": void 0,
        "../../../scripts/func/AppShowPlayInterstitialAd/AppShowPlayInterstitialAd": void 0,
        "../../../scripts/func/DataStatistics/DataStatisticsController": void 0,
        "../../../scripts/func/FeatureIsOpen/FeatureController": void 0,
        "../../../scripts/func/ResourceTool/ResourceEnum": void 0,
        "../../../scripts/func/ResourceTool/ResourceTool": void 0,
        "../../../scripts/func/button_feedback/BtnFeedBackCtrl": void 0,
        "../../../scripts/func/ecpmgpmodel/EcpmGpModelUtil": void 0,
        "../../../scripts/func/egameReport/SceneJumpControl": void 0,
        "../../../scripts/func/endless_motivator_feedback/EndlessMotivatorFeedbackCtrl": void 0,
        "../../../scripts/func/endless_motivator_optimize/EndlessMotivatorOptimizeCtrl": void 0,
        "../../../scripts/func/enums/GameTypeEnum": void 0,
        "../../../scripts/func/gameLobby/GameLobby": void 0,
        "../../../scripts/func/newSettingSwitchStyle/SettingStyle": void 0,
        "../../../scripts/func/simplify_btn/SimplifyBtnControl": void 0,
        "../../../scripts/func/tripleScoreAndMatchPng/TripleScoreAndMatchPngControl": void 0,
        "./BlockItemPoolScript": "BlockItemPoolScript",
        "./GuideItemPoolScript": "GuideItemPoolScript",
        "./JewelNewOutBlock": "JewelNewOutBlock"
    }],
    JewelNewOutBlock: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "84f94/cWP9KdoFJLTNjEibe", "JewelNewOutBlock");
        var a = this && this.__read || function(t, e) {
                var o = "function" == typeof Symbol && t[Symbol.iterator];
                if (!o) return t;
                var a, n, i = o.call(t),
                    r = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(a = i.next()).done;) r.push(a.value);
                } catch (t) {
                    n = {
                        error: t
                    };
                } finally {
                    try {
                        a && !a.done && (o = i.return) && o.call(i);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return r;
            },
            n = this && this.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
                return t;
            },
            i = this && this.__values || function(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    o = e && t[e],
                    a = 0;
                if (o) return o.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        t && a >= t.length && (t = void 0);
                        return {
                            value: t && t[a++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../../scripts/data/GameData"),
            s = t("../../../scripts/func/FeatureIsOpen/FeatureController"),
            c = function() {
                function t() {}
                t.isOpen = function() {
                    return s.default.IsFeatureOpen("jewelNewOutBlock");
                };
                t.generateCurDiffString = function() {
                    var t = Math.min(this.minDifficulty + (this.maxDifficulty - this.minDifficulty) * r.default.GameDataObj.roundNum / this.maxDifficultyRound, this.maxDifficulty),
                        e = Math.min(t + (this.maxDifficulty - this.minDifficulty) * r.default.GameDataObj.roundNum / this.maxDifficultyRound, this.maxDifficulty),
                        o = 1 - Math.random(),
                        a = 1 - Math.random();
                    e += Math.sqrt(-2 * Math.log(o)) * Math.sin(2 * Math.PI * a) * 2.5;
                    return this.findClosestByDifficulty(e);
                };
                t.hasData = function() {
                    return this.sortedCombinations.length > 0;
                };
                t.generateValidBlockCombinations = function() {
                    var t = this;
                    if (this.hasData()) this.sortedCombinations;
                    else {
                        Date.now();
                        var e = [];
                        this.generateBlockCombinations().forEach(function(o) {
                            var a = 8 - o.reduce(function(t, e) {
                                return t + e;
                            }, 0);
                            if (a >= t.minEmptyCount && a <= t.maxEmptyCount) {
                                var i = t.generateArrangements(o, a);
                                e.push.apply(e, n(i));
                            }
                        });
                        Array.from(new Set(e)).filter(function(e) {
                            return t.isValidCombination(e);
                        }).forEach(function(e) {
                            var o = t.calculateCombinationInfo(e);
                            t.combinationsCache.set(e, o);
                        });
                        this.sortedCombinations = Array.from(this.combinationsCache.values()).sort(function(t, e) {
                            return t.difficulty - e.difficulty;
                        });
                        Date.now();
                    }
                };
                t.findClosestByDifficulty = function(t) {
                    var e, o, a = this.sortedCombinations;
                    if (0 === a.length) return null;
                    for (var n = a[0].difficulty, r = Math.abs(a[0].difficulty - t), s = 1; s < a.length; s++) {
                        var c = Math.abs(a[s].difficulty - t);
                        if (c < r) {
                            r = c;
                            n = a[s].difficulty;
                        }
                    }
                    var l = [];
                    try {
                        for (var u = i(a), h = u.next(); !h.done; h = u.next()) {
                            var d = h.value;
                            d.difficulty === n && l.push(d);
                        }
                    } catch (t) {
                        e = {
                            error: t
                        };
                    } finally {
                        try {
                            h && !h.done && (o = u.return) && o.call(u);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    return l.length > 0 ? l[Math.floor(Math.random() * l.length)] : a[Math.floor(Math.random() * a.length)];
                };
                t.calculateCombinationInfo = function(t) {
                    var e = 8 - this.countEmptyPositions(t);
                    return {
                        combination: t,
                        difficulty: (e * e * 1 / this.countBlocks(t) * (1 + 1 * (this.countConsecutiveZeros(t) - 1) / 10)).toFixed(3)
                    };
                };
                t.countConsecutiveZeros = function(t) {
                    if (!t || 0 === t.length) return 0;
                    for (var e = 0, o = !1, a = 0; a < t.length; a++)
                        if ("0" === t[a]) {
                            if (!o) {
                                e++;
                                o = !0;
                            }
                        } else o = !1;
                    return e;
                };
                t.generateBlockCombinations = function() {
                    var t = this,
                        e = [],
                        o = function(a, i) {
                            i >= t.minEmptyCount && i <= t.maxEmptyCount && a.length >= t.minBlockCount && a.length <= t.maxBlockCount && e.push(n(a));
                            if (!(i < t.minEmptyCount || a.length >= t.maxBlockCount))
                                for (var r = 1; r <= 4; r++)
                                    if (i - r >= 0) {
                                        a.push(r);
                                        o(a, i - r);
                                        a.pop();
                                    }
                        };
                    o([], 8);
                    return e;
                };
                t.generateArrangements = function(t, e) {
                    var o = [];
                    1 === t.length ? o.push.apply(o, n(this.generateSingleBlockArrangements(t[0], e))) : 2 === t.length && 1 === t[0] && 1 === t[1] ? o.push.apply(o, n(this.generateTwoSingleBlockArrangements(e))) : this.generateComplexArrangements(t, e, o);
                    return Array.from(new Set(o));
                };
                t.generateSingleBlockArrangements = function(t) {
                    for (var e = [], o = 8 - t, a = 0; a <= o; a++) {
                        for (var n = "", i = 0; i < 8; i++) n += i >= a && i < a + t ? t.toString() : "0";
                        e.push(n);
                    }
                    return e;
                };
                t.generateTwoSingleBlockArrangements = function() {
                    for (var t = [], e = 0; e < 8; e++)
                        for (var o = e + 1; o < 8; o++) {
                            for (var a = "", n = 0; n < 8; n++) a += n === e || n === o ? "1" : "0";
                            t.push(a);
                        }
                    return t;
                };
                t.generateComplexArrangements = function(t, e, o) {
                    this.generateCombinationsOnGrid(t, e, "", 0, o);
                };
                t.generateCombinationsOnGrid = function(t, e, o, a, r) {
                    var s, c;
                    if (8 !== a) {
                        if (!(t.reduce(function(t, e) {
                                return t + e;
                            }, 0) + e > 8 - a)) {
                            e > 0 && this.generateCombinationsOnGrid(t, e - 1, o + "0", a + 1, r);
                            var l = Array.from(new Set(t));
                            try {
                                for (var u = i(l), h = u.next(); !h.done; h = u.next()) {
                                    var d = h.value;
                                    if (a + d <= 8) {
                                        var f = n(t),
                                            p = f.indexOf(d);
                                        f.splice(p, 1);
                                        var g = d.toString().repeat(d);
                                        this.generateCombinationsOnGrid(f, e, o + g, a + d, r);
                                    }
                                }
                            } catch (t) {
                                s = {
                                    error: t
                                };
                            } finally {
                                try {
                                    h && !h.done && (c = u.return) && c.call(u);
                                } finally {
                                    if (s) throw s.error;
                                }
                            }
                        }
                    } else 0 === t.length && 0 === e && r.push(o);
                };
                t.logGlobalStatistics = function(t) {
                    var e = this,
                        o = {};
                    t.forEach(function(t) {
                        var a = e.countEmptyPositions(t) + "空位-" + e.countBlocks(t) + "方块";
                        o[a] = (o[a] || 0) + 1;
                    });
                    Object.keys(o).sort().forEach(function(e) {
                        (o[e] / t.length * 100).toFixed(1);
                    });
                    t.length;
                };
                t.countEmptyPositions = function(t) {
                    return (t.match(/0/g) || []).length;
                };
                t.countBlocks = function(t) {
                    for (var e = 0, o = 0; o < t.length;) {
                        var a = t[o];
                        if ("0" === a) o++;
                        else if (a >= "1" && a <= "4") {
                            e++;
                            o += parseInt(a);
                        } else o++;
                    }
                    return e;
                };
                t.isAllEmpty = function(t) {
                    return "00000000" === t;
                };
                t.isValidCombination = function(t) {
                    if (8 !== t.length) return !1;
                    if (this.isAllEmpty(t)) return !1;
                    var e = this.countEmptyPositions(t);
                    if (e < this.minEmptyCount || e > this.maxEmptyCount) return !1;
                    var o = this.countBlocks(t);
                    if (o < this.minBlockCount || o > this.maxBlockCount) return !1;
                    for (var a = 0; a < t.length;) {
                        var n = t[a];
                        if ("0" === n) a++;
                        else {
                            if (!(n >= "1" && n <= "4")) return !1;
                            var i = parseInt(n);
                            if (a + i > t.length) return !1;
                            for (var r = 0; r < i; r++)
                                if (t[a + r] !== n) return !1;
                            a += i;
                        }
                    }
                    return !0;
                };
                t.minRowsCount = 2;
                t.minEmptyCount = 1;
                t.maxEmptyCount = 3;
                t.minBlockCount = 2;
                t.maxBlockCount = 6;
                t.combinationsCache = new Map();
                t.sortedCombinations = [];
                t.minDifficulty = 10;
                t.maxDifficulty = 16;
                t.maxDifficultyRound = 63;
                return t;
            }();
        o.default = c;
        cc._RF.pop();
    }, {
        "../../../scripts/data/GameData": void 0,
        "../../../scripts/func/FeatureIsOpen/FeatureController": void 0
    }],
    JewelOverSceneScript: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dd85fu+a0ZIj4niYWsbi+9b", "JewelOverSceneScript");
        var a, n = this && this.__extends || (a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    })(t, e);
            }, function(t, e) {
                a(t, e);

                function o() {
                    this.constructor = t;
                }
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
            }),
            i = this && this.__decorate || function(t, e, o, a) {
                var n, i = arguments.length,
                    r = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (r = (i < 3 ? n(r) : i > 3 ? n(e, o, r) : n(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../../scripts/common/Controller"),
            s = t("../../../scripts/common/GameController"),
            c = t("../../../scripts/common/NativePort"),
            l = t("../../../scripts/common/SceneManager"),
            u = t("../../../scripts/common/SoundController"),
            h = t("../../../scripts/data/GameData"),
            d = t("../../../scripts/func/egameReport/SceneJumpControl"),
            f = t("../../../scripts/func/FeatureIsOpen/FeatureController"),
            p = t("../../../scripts/func/gameLobby/GameLobby"),
            g = t("../../../scripts/func/i18n/I18nMgr"),
            m = t("../../../scripts/func/newSettingSwitchStyle/SettingStyle"),
            v = t("../../../scripts/func/ResourceTool/ResourceEnum"),
            _ = t("../../../scripts/func/ResourceTool/ResourceTool"),
            y = t("./BlockItemPoolScript"),
            b = t("./GuideItemPoolScript"),
            S = cc._decorator,
            w = S.ccclass,
            O = S.property,
            C = function(t) {
                n(e, t);

                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    e.current_txt_1 = null;
                    e.goBtn = null;
                    e.nextBtn = null;
                    e.endOver = !1;
                    e.current_cord = 0;
                    e.gameTime = 0;
                    e.onKeyBackTime = 0;
                    e.fileNumT = 2;
                    e.moveInterval = -1;
                    e.backtime = 0;
                    return e;
                }
                e.prototype.onLoad = function() {
                    c.NativePort.setBugsangContext("state-moregame-end");
                    r.default.getInstance().setAdpter();
                    this.showAdpter();
                    this.current_cord = h.default.currentGrade;
                    this.current_txt_1.string = "0";
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart2, this);
                    if (g.default.isI18n_baseOpen() && g.default.isOtherLang()) {
                        var t = cc.find("show_move", this.node);
                        g.default.updateSp(t, "overview_name");
                        var e = cc.find("HighestRank/SCORE", this.node);
                        g.default.updateSp(e, "overview_SCORE");
                    }
                    d.default.curSceneType = d.SCENE_TYPE.JEWEL_GAME_OVER_SCENE;
                };
                e.prototype.onTouchStart2 = function(t) {
                    if (new Date().getTime() - this.gameTime > 200) {
                        this.gameTime = new Date().getTime();
                        var e = t.getLocation(),
                            o = this.node.convertToNodeSpaceAR(e);
                        s.default.getInstance().showPrefab(s.default.path_perfabs + "showprefabsclick", o.x, o.y, .7);
                    }
                };
                e.prototype.onDestroyEvent = function() {
                    d.default.lastSceneType = d.SCENE_TYPE.JEWEL_GAME_OVER_SCENE;
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart2, this);
                };
                e.prototype.onKeyDown = function(t) {
                    switch (t.keyCode) {
                        case cc.macro.KEY.back:
                            this.onClick(null, "exit");
                    }
                };
                e.prototype.showAdpter = function() {
                    var t = cc.view.getVisibleSize();
                    if (t.height / t.width >= 1334 / 750)
                        for (var e = 0; e < this.node.children.length; e++) 0 != this.node.children[e].y && (this.node.children[e].y = t.height / t.width / (1334 / 750) * this.node.children[e].y);
                };
                e.prototype.beginMovie = function() {
                    var t = this;
                    cc.tween(this.node).delay(.2).call(function() {
                        t.node.getChildByName("show_move").active = !0;
                    }).delay(.33).call(function() {
                        t.node.getChildByName("HighestRank").active = !0;
                        t.showNum();
                    }).start();
                };
                e.prototype.onLoadEvent = function() {
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                };
                e.prototype.showButton = function() {
                    var t = this;
                    if (this.goBtn && this.nextBtn) {
                        this.goBtn.node.active = !0;
                        this.goBtn.node.scale = .6;
                        this.nextBtn.node.active = !0;
                        this.nextBtn.node.scale = .6;
                        cc.tween(this.goBtn.node).to(.13, {
                            scale: 1.1
                        }).to(.07, {
                            scale: 1
                        }).call(function() {
                            t.goBtn.interactable = !0;
                            t.onLoadEvent();
                        }).start();
                        cc.tween(this.nextBtn.node).to(.13, {
                            scale: 1.1
                        }).to(.07, {
                            scale: 1
                        }).call(function() {
                            t.nextBtn.interactable = !0;
                        }).start();
                    }
                };
                e.prototype.update = function(t) {
                    this.fileNumT += t;
                    if (cc.sys.isNative && this.fileNumT > 1) {
                        c.NativePort.hideBanner();
                        this.fileNumT = 0;
                    }
                };
                e.prototype.showNum = function() {
                    var t = this,
                        e = 3;
                    e *= Math.floor(this.current_cord / 400) + 1;
                    var o = 0,
                        a = 0;
                    this.moveInterval = window.setInterval(function() {
                        var n;
                        if (cc.isValid(t.current_txt_1) && t.current_cord > parseInt(t.current_txt_1.string) + e) t.current_txt_1 && (t.current_txt_1.string = "" + (parseInt(t.current_txt_1.string) + e));
                        else {
                            t.showButton();
                            t.current_txt_1 && (t.current_txt_1.string = "" + t.current_cord);
                            window.clearInterval(t.moveInterval);
                            t.moveInterval = -1;
                        }
                        ++a % 5 == 0 && u.default.getInstance().playEffect(u.SOUND.SOUND_number, .5);
                        parseInt(null === (n = null == t ? void 0 : t.current_txt_1) || void 0 === n ? void 0 : n.string) % 100 >= o && o++;
                    }, 10, this);
                };
                e.prototype.start = function() {
                    this.beginMovie();
                };
                e.prototype.onClick = function(t, e) {
                    if (!this.endOver && new Date().getTime() - this.backtime > 300) {
                        this.backtime = new Date().getTime();
                        switch (e) {
                            case "exit":
                                u.default.getInstance().playEffect(u.SOUND.SOUND_s_button, 1);
                                if ("glhallScene" == h.default.jumpHistoryScene && p.default.getInstance().isReady) p.default.getInstance().enterGameLobby();
                                else {
                                    if (m.default.isOpen() && l.default.getInstance().getFrom() == l.default.TRAVEL_GAME_SCENE) {
                                        this.endOver = !0;
                                        h.default.getInstance().initData();
                                        m.default.backToHome();
                                        b.default.getInstance().delNodePool();
                                        y.default.getInstance().delNodePool();
                                        r.default.getInstance().removeJewelGameBundle();
                                        return;
                                    }
                                    this.endOver = !0;
                                    h.default.chapter = "class";
                                    h.default.getInstance().initData();
                                    r.default.getInstance().getOpenRotateModelState() ? cc.director.loadScene("NewComobRotateGameSkinScene9") : r.default.getWayState() || 3100 == h.default.gameWayNum || 4600 == h.default.gameWayNum || 4700 == h.default.gameWayNum ? cc.director.loadScene("NewComobGameSkinScene" + h.default.GameDataObj.skinNum) : cc.director.loadScene("NewGameSkinScene" + h.default.GameDataObj.skinNum);
                                }
                                b.default.getInstance().delNodePool();
                                y.default.getInstance().delNodePool();
                                r.default.getInstance().removeJewelGameBundle();
                                break;

                            case "continue":
                                this.endOver = !0;
                                u.default.getInstance().playEffect(u.SOUND.SOUND_s_button, 1);
                                r.default.getInstance().getJewelGameBundle(function(t) {
                                    f.default.IsFeatureOpen("uniView") && _.default.preloadResource(v.ResourceEnum.highest, null, t);
                                    t.preloadScene("JewelGameScene", function(e) {
                                        e || t.loadScene("JewelGameScene", function(t, e) {
                                            t || cc.director.runScene(e);
                                        });
                                    });
                                }, this);
                        }
                    }
                };
                i([O(cc.Label)], e.prototype, "current_txt_1", void 0);
                i([O(cc.Button)], e.prototype, "goBtn", void 0);
                i([O(cc.Button)], e.prototype, "nextBtn", void 0);
                return i([w], e);
            }(cc.Component);
        o.default = C;
        cc._RF.pop();
    }, {
        "../../../scripts/common/Controller": void 0,
        "../../../scripts/common/GameController": void 0,
        "../../../scripts/common/NativePort": void 0,
        "../../../scripts/common/SceneManager": void 0,
        "../../../scripts/common/SoundController": void 0,
        "../../../scripts/data/GameData": void 0,
        "../../../scripts/func/FeatureIsOpen/FeatureController": void 0,
        "../../../scripts/func/ResourceTool/ResourceEnum": void 0,
        "../../../scripts/func/ResourceTool/ResourceTool": void 0,
        "../../../scripts/func/egameReport/SceneJumpControl": void 0,
        "../../../scripts/func/gameLobby/GameLobby": void 0,
        "../../../scripts/func/i18n/I18nMgr": void 0,
        "../../../scripts/func/newSettingSwitchStyle/SettingStyle": void 0,
        "./BlockItemPoolScript": "BlockItemPoolScript",
        "./GuideItemPoolScript": "GuideItemPoolScript"
    }],
    guideItemScript: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dd0ecMEz1lN9qbRFJCLKkTW", "guideItemScript");
        var a, n = this && this.__extends || (a = function(t, e) {
                return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e;
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    })(t, e);
            }, function(t, e) {
                a(t, e);

                function o() {
                    this.constructor = t;
                }
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
            }),
            i = this && this.__decorate || function(t, e, o, a) {
                var n, i = arguments.length,
                    r = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (r = (i < 3 ? n(r) : i > 3 ? n(e, o, r) : n(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = function(t) {
                n(e, t);

                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    e.guide = null;
                    e.widthArr = [98, 204, 310, 416];
                    return e;
                }
                e.prototype.onLoad = function() {};
                e.prototype.setItemWidth = function(t) {
                    this.node.active = !0;
                    this.guide.width = this.widthArr[t - 1];
                };
                e.prototype.start = function() {};
                i([c(cc.Node)], e.prototype, "guide", void 0);
                return i([s], e);
            }(cc.Component);
        o.default = l;
        cc._RF.pop();
    }, {}]
}, {}, ["BlockItemPoolScript", "BlockItemScript", "GuideItemPoolScript", "JewelGameSceneScript", "JewelNewOutBlock", "JewelOverSceneScript", "guideItemScript"]);