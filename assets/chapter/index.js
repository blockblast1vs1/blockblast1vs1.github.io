window.__require = function t(e, r, o) {
function a(i, c) {
if (!r[i]) {
if (!e[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(s, !0);
if (n) return n(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var l = r[i] = {
exports: {}
};
e[i][0].call(l.exports, function(t) {
return a(e[i][1][t] || t);
}, l, l.exports, t, e, r, o);
}
return r[i].exports;
}
for (var n = "function" == typeof __require && __require, i = 0; i < o.length; i++) a(o[i]);
return a;
}({
AdLevelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ba628J9fO9NT5MdpKL4KxbO", "AdLevelTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdLevelTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = t("../../game/vo/ChapterGameInfo"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
adStageFirst: 1,
adStageSecond: 10,
currLevel: 0
};
};
e.prototype.onActive = function(t) {
if (c.tp.isChapterAdvertisement_FullScreenProxyOnGameStart(t)) {
0 == (e = s.chapterGameInfo.chapterNum) && storage.setItem("chapterOneChapterGameNum", s.chapterGameInfo.gameNum);
this.state.currLevel = e;
}
if (c.tp.isChapterAdvertisement_FullScreenProxyShieldPlayAdvertisement(t)) {
this.state.adStageFirst = this.props.noAd;
this.state.adStageSecond = this.props.end;
var e = this.state.currLevel + 1, r = s.chapterGameInfo.gameNum, o = s.chapterGameInfo.oneChapterGameNum;
if (e <= this.props.noAd) t.args[0] = !0; else if (e <= this.props.end) {
(r - o) % 2 != 0 && (t.args[0] = !0);
}
}
};
return n([ classId("AdLevelTrait") ], e);
}(i.Trait);
r.AdLevelTrait = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
AlloBlockStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "99801rXklFAVLuu3q7f3Y3o", "AlloBlockStateTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AlloBlockStateTrait = void 0;
var i = t("../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), u = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../../../../../../scripts/modules/block/components/Block"), f = t("../../../../../../scripts/modules/colorProducer/type/ColorProducerType"), d = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), y = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = t("../../collectionProducer/vo/ChapterCollectionProducerGameInfo"), _ = t("../../colorProducer/vo/ChapterColorProducerGameInfo"), v = t("../../game/vo/ChapterGameInfo"), g = t("../../prefab/ChapterPrefabConfig"), C = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.grayEffects = {};
return e;
}
e.prototype.data = function() {
return {
state: [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ],
travelId: 1
};
};
Object.defineProperty(e.prototype, "valid", {
get: function() {
var t = v.chapterGameInfo.roundNum, e = v.chapterGameInfo.chapterNum;
return 1 === t && -1 !== (this.props.stage || this.state.state).indexOf(e + 1);
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
if (y.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithmTrait(t) && this.valid) {
u.algorithmStrategyInfo.setAlgorithmSourceLevel1(l.ChapterAlgorithmSourceType.TravelTrait);
u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.IRREVERSIBLE_ALIEN ]);
t.returnState = !0;
}
if (y.tp.isChapterColorProducer_ProxyProduceColorBase(t) && this.valid) {
_.chapterColorProducerGameInfo.setColorList([ f.ColorProducerType.COLOR_GREY, f.ColorProducerType.COLOR_GREY, f.ColorProducerType.COLOR_GREY ]);
t.replace = !0;
t.returnState = !0;
}
if (y.tp.isChapterBlocksProducer_ProxyOnTouchEnd(t)) {
var e = t.args[0];
if (e) {
var r = e.state.grays;
if (r && Object.keys(r).length) for (var o in r) {
var a = r[o];
for (var n in a) {
var i = a[n].node.getComponent(h.default);
this.playGrayEffects(Number(o), Number(n), i);
}
}
}
}
if (y.tp.isChapterBlocksProducerInfoGetItemColors(t) && this.valid) {
for (var c = [], p = 0; p < m.chapterCollectionProducerGameInfo.collectionList.length; p++) {
var d = m.chapterCollectionProducerGameInfo.collectionList[p];
c[p] = {};
for (var v in d) c[p][v] = f.ColorProducerType.COLOR_GREY;
}
t.returnValue = c;
t.replace = !0;
}
};
e.prototype.playGrayEffects = function(t, e, r) {
var o = this;
this.grayEffects[t] || (this.grayEffects[t] = {});
if (this.grayEffects[t][e]) {
var a = this.grayEffects[t][e];
a.node.active = !0;
a.playAnimation("in", 1);
} else i.ResLoader.loadByBundle("chapter", g.ChapterPrefabConfig.GrayEffect.url, cc.Prefab, function(a, n) {
if (!a) {
var i = cc.instantiate(n), c = i.getComponent(dragonBones.ArmatureDisplay);
c.playAnimation("in", 1);
d.gameEffectLayer.addChild(i);
var s = r.node.parent.convertToWorldSpaceAR(new cc.Vec2(r.node.x, r.node.y)), p = d.gameEffectLayer.convertToNodeSpaceAR(s);
i.x = p.x;
i.y = p.y;
c.addEventListener(dragonBones.EventObject.COMPLETE, function() {
c.node.active = !1;
});
o.grayEffects[t][e] = c;
}
});
};
n([ p.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("AlloBlockStateTrait") ], e);
}(c.Trait);
r.AlloBlockStateTrait = C;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/block/components/Block": void 0,
"../../../../../../scripts/modules/colorProducer/type/ColorProducerType": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../collectionProducer/vo/ChapterCollectionProducerGameInfo": "ChapterCollectionProducerGameInfo",
"../../colorProducer/vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig"
} ],
BPuzzleTimeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9a76cjhWuxKc76H0CsHUhNn", "BPuzzleTimeTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BPuzzleTimeTrait = void 0;
var s = t("../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../../game/vo/ChapterGameInfo"), h = t("../../../../../../scripts/base/storage/Storage"), f = t("../components/ChapterList"), d = t("../../../../../../scripts/falcon/EventManager"), y = t("../../../../../../scripts/modules/chapterConfig/events/E_ChapterConfig_Load"), m = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), _ = t("../../../../../../scripts/modules/native/NativeNetwork"), v = t("../../../../../../scripts/modules/theme/vo/ThemeInfo"), g = t("../../../../../../scripts/modules/prefab/PrefabConfig"), C = t("../../../../../../scripts/modules/tip/events/E_Tip_Show"), b = t("../../../../../../scripts/modules/modeChoice/components/ChapterBtnConfigLoading"), P = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chapterBtn = null;
e.isLoadNewConfig = !0;
e.isEmitter = !1;
return e;
}
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, p, f, d = this;
return c(this, function(y) {
switch (y.label) {
case 0:
l.tp.isChapterGame_GameInfoUpdate_ProxyUpdateChapterGameNumAfter(t) && u.chapterGameInfo.isThroughAll && h.storage.setItem("isShowChapterRedPoint", 1);
if (!l.tp.isChapterListSetChapterBtnState(t)) return [ 3, 4 ];
e = t.target, r = e.chapterBtn, o = e.nextTip, a = e.chapterLb;
if (v.themeInfo.remoteLoadBefore && u.chapterGameInfo.isThroughAll && !_.NativeNetwork.getNetWorkState()) {
r.active = !1;
o.active = !0;
a.node.active = !1;
return [ 2 ];
}
this.chapterBtn = r;
return u.chapterGameInfo.isThroughAll ? [ 3, 2 ] : [ 4, s.ResLoader.asyncLoad("textures/setup/setting_btn_common", cc.SpriteFrame) ];

case 1:
(n = y.sent()) && (this.chapterBtn.getComponent(cc.Sprite).spriteFrame = n);
this.chapterBtn.getComponent(cc.Button).interactable = !0;
return [ 2 ];

case 2:
if (m.chapterConfigInfo.isChapterMaxNum && u.chapterGameInfo.isThroughAll) return [ 2 ];
h.storage.setItem("isShowChapterRedPoint", 1);
t.replace = !0;
r.active = !0;
o.active = !1;
a.node.active = !1;
return [ 4, s.ResLoader.asyncLoadByBundle("chapter", "textures/chapterList/traits/BPuzzleTimeTrait/btn_continue", cc.SpriteFrame) ];

case 3:
(p = y.sent()) && (this.chapterBtn.getComponent(cc.Sprite).spriteFrame = p);
this.chapterBtn.getComponent(cc.Button).interactable = !1;
y.label = 4;

case 4:
if (l.tp.isChapterContentShowCupAnimation(t)) {
if (!u.chapterGameInfo.isThroughAll) return [ 2 ];
this.chapterBtn && (this.chapterBtn.getComponent(cc.Button).interactable = !0);
}
if (l.tp.isChapterListOnClickStartGame(t)) if (null == (f = TRAIT("Travel_pass_animationTrait")) ? void 0 : f.active) {
if (!this.isEmitter) {
this.isEmitter = !0;
f.onDidChangeAnimCompleteEmitter.event(function() {
return i(d, void 0, void 0, function() {
return c(this, function() {
this._updateChapterConfig(t);
return [ 2 ];
});
});
});
}
} else this._updateChapterConfig(t);
return [ 2 ];
}
});
});
};
e.prototype._updateChapterConfig = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i, p = this;
return c(this, function(c) {
switch (c.label) {
case 0:
if (m.chapterConfigInfo.isOverChapterMaxNum) return [ 2 ];
if (!u.chapterGameInfo.isThroughAll || !this.isLoadNewConfig) {
this.isLoadNewConfig || (t.replace = !0);
return [ 2 ];
}
if (v.themeInfo.remoteLoadBefore && !_.NativeNetwork.getNetWorkState()) {
d.EventManager.dispatchModuleEvent(new C.E_Tip_Show({
label: "Network connection error!"
}));
return [ 2 ];
}
this.isLoadNewConfig = !1;
t.replace = !0;
e = null;
r = t.target.chapterBtn;
o = r.getChildByName(g.PrefabConfig.ChapterBtnConfigLoading.name);
a = null;
return o ? [ 3, 2 ] : [ 4, s.ResLoader.asyncLoad(g.PrefabConfig.ChapterBtnConfigLoading.url, cc.Prefab) ];

case 1:
if (n = c.sent()) {
(o = cc.instantiate(n)).name = g.PrefabConfig.ChapterBtnConfigLoading.name;
r.addChild(o);
o.opacity = 0;
a = o.getComponent(b.default);
}
return [ 3, 3 ];

case 2:
a = o.getComponent(b.default);
c.label = 3;

case 3:
e = v.themeInfo.remoteLoadBefore && a ? new y.E_ChapterConfig_Load(function() {
a.node.opacity = 255;
a.setState({
width: 564,
progress: .8,
totalCount: 1,
playAnimal: !0
});
}, function() {
p.isLoadNewConfig = !0;
d.EventManager.dispatchModuleEvent(new C.E_Tip_Show({
label: "Loading failed, please check the network and try again"
}));
}) : new y.E_ChapterConfig_Load();
return [ 4, d.EventManager.dispatchModuleEventAsync(e) ];

case 4:
c.sent();
if (!v.themeInfo.remoteLoad || !cc.isValid(a.node)) return [ 3, 6 ];
a.setState({
width: 564,
progress: 1,
totalCount: 1,
playAnimal: !0
});
return [ 4, a.onAnimationComplete.wait() ];

case 5:
c.sent();
a.setState({
width: 564,
playAnimal: !1
});
a.node.opacity = 0;
c.label = 6;

case 6:
this.isLoadNewConfig = !0;
(i = Cinst(f.default)) && i.setState({
curChapter: 0,
lastChapter: 0,
isThrough: !1,
isForceDraw: !0
});
h.storage.setItem("isShowChapterRedPoint", 2);
h.storage.setItem("lastChapterNum", 0);
return [ 2 ];
}
});
});
};
return n([ classId("BPuzzleTimeTrait") ], e);
}(p.Trait);
r.BPuzzleTimeTrait = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/chapterConfig/events/E_ChapterConfig_Load": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/modeChoice/components/ChapterBtnConfigLoading": void 0,
"../../../../../../scripts/modules/native/NativeNetwork": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/theme/vo/ThemeInfo": void 0,
"../../../../../../scripts/modules/tip/events/E_Tip_Show": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../components/ChapterList": "ChapterList"
} ],
CTChapterScoreComboTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "218e47JMB9H0bHSJbLg15xe", "CTChapterScoreComboTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTChapterScoreComboTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = t("../../../../../../scripts/base/decorators/DecoratorClassId"), p = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), l = t("../../game/vo/ChapterGameInfo"), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isChapterScoreInfoOnComputeComplete(t) && l.chapterGameInfo.chapterCondition.Way == p.ChapterType.collect) {
var e = t.args[0];
t.args[1];
t.replace = !0;
t.returnValue = e > 0 ? 10 * (e - 1) : 0;
}
};
return n([ s.classId("CTChapterScoreComboTrait") ], e);
}(i.Trait);
r.CTChapterScoreComboTrait = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorClassId": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
CTChapterSkinBonesTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4e2e7hNYiRMNLt3ZlPEnBsV", "CTChapterSkinBonesTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTChapterSkinBonesTrait = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isChapterSkin_ProxyUpdateSkinGameBg(t) && this.onGameBg(t.args[0]);
s.tp.isChapterSkin_SetupBtn_ProxyUpdateSkinSetupBtn(t) && this.onSetupBtn(t.args[0]);
s.tp.isChapterSkin_GameBackBtn_ProxyUpdateSkinBackBtn(t) && this.onGameBackBtn(t.args[0]);
s.tp.isChapterGoalGetBgNode(t) && this.onTravelTargetRibbonBgNode(t.args[0]);
};
e.prototype.onGameBg = function() {};
e.prototype.onGameBackBtn = function() {};
e.prototype.onSetupBtn = function() {};
e.prototype.onTravelTargetRibbonBgNode = function() {};
n([ i.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onGameBg", null);
n([ i.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onGameBackBtn", null);
n([ i.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onSetupBtn", null);
n([ i.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onTravelTargetRibbonBgNode", null);
return n([ classId("CTChapterSkinBonesTrait") ], e);
}(c.Trait);
r.CTChapterSkinBonesTrait = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ChapterAdvertisementGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e869eQnT9BDx6jUpa7zde+C", "ChapterAdvertisementGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterAdvertisementGameInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "advertisementShowNum", {
get: function() {
return o.storage.getItem("chapterAdvertisementShowNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "advertisementSuccessNum", {
get: function() {
return o.storage.getItem("chapterAdvertisementSuccessNum", 0);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterAdvertisementGameInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterAdvertisementType: [ function(t, e) {
"use strict";
cc._RF.push(e, "9501bRkP+xB0bpwbN0w6uHO", "ChapterAdvertisementType");
cc._RF.pop();
}, {} ],
ChapterAdvertisement_Banner_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "52ac88jBpVEr4LKXkCIH0sm", "ChapterAdvertisement_Banner_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAdvertisement_Banner_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerHide"), l = t("../../../../../../scripts/modules/game/events/E_Game_Start"), u = t("../../game/vo/ChapterGameInfo"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.registerEvents = function() {
return [ l.E_Game_Start ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_Game_Start:
this.onGameStart();
}
};
e.prototype.addEventListener = function() {
var t = this;
c.UI.addEventListener("open", function(e) {
u.chapterGameInfo.isOpenModuleLayer(e.name) && t.onBannerHide();
});
};
e.prototype.onBannerHide = function() {
this.dispatchModuleEvent(new p.E_Advertisement_BannerHide());
};
e.prototype.onGameStart = function() {};
n([ i.trait("IsOpenShowBannerTrait", "从第3局开始展示banner") ], e.prototype, "onGameStart", null);
return n([ classId("ChapterAdvertisement_Banner_Proxy") ], e);
}(s.Proxy);
r.ChapterAdvertisement_Banner_Proxy = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerHide": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
ChapterAdvertisement_FullScreenProxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "32282QCZeZFwo63ICdMKUpe", "ChapterAdvertisement_FullScreenProxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAdvertisement_FullScreenProxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/EventManager"), p = t("../../../../../../scripts/falcon/Proxy"), l = t("../../../../../../scripts/modules/advertisement/config/AdvertisementConfig"), u = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenOver"), h = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenShow"), f = t("../../../../../../scripts/modules/advertisement/type/AdvertisementType"), d = t("../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo"), y = t("../../../../../../scripts/modules/advertisement/vo/AdvertisementNativeInfo"), m = t("../../../../../../scripts/modules/dot/events/E_Dot_Advertisement"), _ = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), v = t("../../../../../../scripts/modules/game/events/E_Game_Start"), g = t("../../../../../../scripts/modules/game/type/GameType"), C = t("../../../../../../scripts/modules/game/vo/GameInfo"), b = t("../../../../../../scripts/modules/gameOver/type/GameOverType"), P = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), S = t("../../../../../../scripts/modules/prefab/PrefabConfig"), I = t("../../fail/events/E_ChapterFail_Show"), T = t("../../win/events/E_ChapterWin_Show"), E = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ v.E_Game_Start, h.E_Advertisement_FullScreenShow ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case v.E_Game_Start:
this.onGameStart();
break;

case h.E_Advertisement_FullScreenShow:
this.showFullScreenAdvertisement(t);
}
};
e.prototype.onGameStart = function() {};
e.prototype.onChangeAdvType = function(t, e) {
return e;
};
e.prototype.showFullScreenAdvertisement = function(t) {
var e = this, r = t.data.type == f.FullScreenAdvertisePosState.FullScreen_GameOver ? l.AD_TYPE.TYPE_45 : l.AD_TYPE.TYPE_47, o = t.data.source;
void 0 !== o && o != b.GameOverSourceType.NormalFail && r == l.AD_TYPE.TYPE_45 && (r = l.AD_TYPE.TYPE_44);
this.showRewardVideo(function(r) {
if (!c.UI.activeState(S.PrefabConfig.ModeChoice.url) && C.gameInfo.gameMode == g.GameMode.Chapter) {
r == f.AdvertiseCallBackState.Advertise_Success || f.AdvertiseCallBackState.Advertise_Fail;
e.advertisementCallBack(r, t);
e.dispatchModuleEvent(new u.E_Advertisement_FullScreenOver({
state: r
}));
}
}, this, r);
};
e.prototype.advertisementCallBack = function(t, e) {
e.data.type == f.FullScreenAdvertisePosState.FullScreen_Replay ? this.dispatchModuleEvent(new _.E_Game_Ready()) : e.data.type == f.FullScreenAdvertisePosState.FullScreen_GameOver && this.onGameOver(P.gameOverGameInfo.isChapterWin);
};
e.prototype.onGameOver = function(t) {
t ? this.dispatchModuleEvent(new T.E_ChapterWin_Show()) : this.dispatchModuleEvent(new I.E_ChapterFail_Show());
};
e.prototype.showRewardVideo = function(t, e, r) {
void 0 === r && (r = "500");
s.EventManager.dispatchModuleEvent(new m.E_Dot_Advertisement(m.AdShowDotType.INTERSTITIAL, g.GameType.Chapter));
if (0 != d.advertisementGameInfo.getIsCanPlayAd()) {
d.advertisementGameInfo._inAppHide2State = !1;
d.advertisementGameInfo.setAdvertisementParameters({
type: r,
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: ""
},
param: l.MESSAGE_ID.C2G_NONE
});
cc.sys.isNative && d.advertisementGameInfo.setAdRegists({
cb: t,
arg: e,
time: Math.floor(new Date().getTime() / 1e3),
type: r
});
if (this.shieldPlayAdvertisement()) t && t.call(e, 2); else {
this.showFullSuccess();
y.advertisementNativeInfo.processingAdInterface(t, e);
}
} else t && t.call(e, 1);
};
e.prototype.showFullSuccess = function() {};
e.prototype.shieldPlayAdvertisement = function(t) {
return t || !1;
};
n([ i.trait("AdLevelTrait", "轮数控制插屏广告(开局记录关卡数)") ], e.prototype, "onGameStart", null);
n([ i.trait("FullScreenAdvtisementSortTrait", "全屏广告分类") ], e.prototype, "onChangeAdvType", null);
n([ i.trait("CTLogAddAdLogTrait", "广告日志收集开始") ], e.prototype, "showFullScreenAdvertisement", null);
n([ i.trait("AdIntervalTrait", "播放成功后记录插屏广告时间戳"), i.trait("CTLogAddAdLogTrait", "广告日志收集结束") ], e.prototype, "advertisementCallBack", null);
n([ i.trait("IsOpenAdReadyLowTrait", "降低广告ready率低用户插屏缓存请求及播放频次,请求播放广告通知") ], e.prototype, "showFullSuccess", null);
n([ i.trait("NoShowInterAdRateTrait", "根据概率屏蔽插屏广告"), i.trait("AdIntervalTrait", "根据时间间隔插屏广告"), i.trait("AdProtectTrait"), i.trait("IsOpenAdReadyLowTrait", "降低广告ready率低用户插屏缓存请求及播放频次,处理是否可播放广告"), i.trait("AdLevelTrait", "轮数控制插屏广告(检测播放)"), i.trait("IsOpenEcpmGpTrait", "检测是否可播放广告") ], e.prototype, "shieldPlayAdvertisement", null);
return n([ classId("ChapterAdvertisement_FullScreenProxy") ], e);
}(p.Proxy);
r.ChapterAdvertisement_FullScreenProxy = E;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/advertisement/config/AdvertisementConfig": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenOver": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenShow": void 0,
"../../../../../../scripts/modules/advertisement/type/AdvertisementType": void 0,
"../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo": void 0,
"../../../../../../scripts/modules/advertisement/vo/AdvertisementNativeInfo": void 0,
"../../../../../../scripts/modules/dot/events/E_Dot_Advertisement": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../fail/events/E_ChapterFail_Show": "E_ChapterFail_Show",
"../../win/events/E_ChapterWin_Show": "E_ChapterWin_Show"
} ],
ChapterAdvertisement_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a1217KN0llGoL2uI52/e5f9", "ChapterAdvertisement_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAdvertisement_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterAdvertisement_Banner_Proxy"), c = t("./proxys/ChapterAdvertisement_FullScreenProxy"), s = t("./proxys/ChapterAdvertisement_RewardProxy"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ s.ChapterAdvertisement_RewardProxy, c.ChapterAdvertisement_FullScreenProxy, i.ChapterAdvertisement_Banner_Proxy ];
};
return e;
}(n.Module);
r.ChapterAdvertisement_Module = p;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterAdvertisement_Banner_Proxy": "ChapterAdvertisement_Banner_Proxy",
"./proxys/ChapterAdvertisement_FullScreenProxy": "ChapterAdvertisement_FullScreenProxy",
"./proxys/ChapterAdvertisement_RewardProxy": "ChapterAdvertisement_RewardProxy"
} ],
ChapterAdvertisement_RewardProxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fb948MOPH9NebLg8Uxshp32", "ChapterAdvertisement_RewardProxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAdvertisement_RewardProxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/falcon/EventManager"), p = t("../../../../../../scripts/falcon/Proxy"), l = t("../../../../../../scripts/modules/advertisement/config/AdvertisementConfig"), u = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_RewardOver"), h = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_RewardOver_Pre"), f = t("../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo"), d = t("../../../../../../scripts/modules/advertisement/vo/AdvertisementNativeInfo"), y = t("../../../../../../scripts/modules/dot/events/E_Dot_Advertisement"), m = t("../../../../../../scripts/modules/game/type/GameType"), _ = t("../events/E_ChapterAdvertisement_Show"), v = t("../vo/ChapterAdvertisementGameInfo"), g = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ _.E_ChapterAdvertisement_Show ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case _.E_ChapterAdvertisement_Show:
this.showAdvertisement(t);
}
};
e.prototype.showAdvertisement = function() {
var t = this, e = v.chapterAdvertisementGameInfo.advertisementShowNum;
c.storage.setItem("chapterAdvertisementShowNum", e + 1);
this.showRewardVideo(function(e) {
t.onRewardOver(e);
t.dispatchModuleEvent(new h.E_Advertisement_RewardOver_Pre({
state: e
}));
s.EventManager.dispatchModuleEvent(new u.E_Advertisement_RewardOver({
state: e
}));
}, this, l.AD_TYPE.TYPE_51);
};
e.prototype.onRewardOver = function() {};
e.prototype.showRewardVideo = function(t, e, r) {
void 0 === r && (r = "500");
s.EventManager.dispatchModuleEvent(new y.E_Dot_Advertisement(y.AdShowDotType.REWARD, m.GameType.Chapter));
if (0 != f.advertisementGameInfo.getIsCanPlayAd()) {
f.advertisementGameInfo.setAdvertisementParameters({
type: r,
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: "0"
},
param: l.MESSAGE_ID.C2G_RESULT
});
cc.sys.isNative && f.advertisementGameInfo.setAdRegists({
cb: t,
arg: e,
time: Math.floor(new Date().getTime() / 1e3),
type: r
});
this.shieldPlayAdvertisement() ? t && t.call(e, 2) : d.advertisementNativeInfo.processingAdInterface(t, e);
} else t && t.call(e, 1);
};
e.prototype.shieldPlayAdvertisement = function(t) {
return t || !1;
};
n([ i.trait("CTAdvertisementMultipleCallTrait", "兜底广告多次回来"), i.trait("CTLogAddAdLogTrait", "广告日志收集开始") ], e.prototype, "showAdvertisement", null);
n([ i.trait("ReviveBuffTrait", "处理buff数据存储") ], e.prototype, "onRewardOver", null);
return n([ classId("ChapterAdvertisement_RewardProxy") ], e);
}(p.Proxy);
r.ChapterAdvertisement_RewardProxy = g;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/advertisement/config/AdvertisementConfig": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_RewardOver": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_RewardOver_Pre": void 0,
"../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo": void 0,
"../../../../../../scripts/modules/advertisement/vo/AdvertisementNativeInfo": void 0,
"../../../../../../scripts/modules/dot/events/E_Dot_Advertisement": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../events/E_ChapterAdvertisement_Show": "E_ChapterAdvertisement_Show",
"../vo/ChapterAdvertisementGameInfo": "ChapterAdvertisementGameInfo"
} ],
ChapterAlgoStrategyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "605b9Hp0hFCB7bvEEFdFK46", "ChapterAlgoStrategyTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgoStrategyTrait = void 0;
var i = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), u = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), f = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = t("../../../game/vo/ChapterGameInfo"), m = t("../../data/TryTimeConfig"), _ = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ratio = 0;
return e;
}
e.prototype.data = function() {
return {
isChapterFirstHardState: !1,
ratioArr: [],
isOpenLevelHelp: !1,
tryTimesJsonData: m.tryTimeConfig
};
};
Object.defineProperty(e.prototype, "canLevelHelpState", {
get: function() {
return this.state.tryTimesJsonData[0].tryTimes.length > y.chapterGameInfo.chapterNum && y.chapterGameInfo.tryTimes >= this.state.tryTimesJsonData[0].tryTimes[y.chapterGameInfo.chapterNum];
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
var e;
if (d.tp.isChapterAlgorithmStrategy_Reset_ProxyPreprocessAlgorithmData(t)) {
i.storage.setItem("chapterFirstHardState_base", !1);
this.state.ratioArr = [ .4, .8 ];
var r = TRAIT("LevelWayHelpTrait"), o = !r || 1 == (null === (e = r.props) || void 0 === e ? void 0 : e.firing);
this.state.isOpenLevelHelp = !!o && this.canLevelHelpState;
}
if (d.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithm(t)) {
this.ratio = f.chapterConfigInfo.getChapterProgress();
this.state.isOpenLevelHelp && (t.returnState = !0);
if (this.ratio <= this.state.ratioArr[0]) {
u.algorithmStrategyInfo.setAlgorithmSourceLevel1(l.ChapterAlgorithmSourceType.TravelStage1);
u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]);
} else if (this.ratio <= this.state.ratioArr[1]) {
if (this.state.isOpenLevelHelp) {
u.algorithmStrategyInfo.setAlgorithmSourceLevel1(l.ChapterAlgorithmSourceType.TravelStage2_simple);
return this.manyTopicSimple();
}
u.algorithmStrategyInfo.setAlgorithmSourceLevel1(l.ChapterAlgorithmSourceType.TravelStage2_hard);
} else u.algorithmStrategyInfo.setAlgorithmSourceLevel1(l.ChapterAlgorithmSourceType.TravelStage3);
}
};
e.prototype.manyTopicSimple = function() {
var t = y.chapterGameInfo.chapterNum;
t % 12 < 2 ? u.algorithmStrategyInfo.algorithmList.push(s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) : t % 12 < 10 ? u.algorithmStrategyInfo.algorithmList.push(s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) : u.algorithmStrategyInfo.algorithmList.push(s.OFFER_TYPE.SUI_JI);
};
e.prototype.manyTopicHard = function() {
var t = y.chapterGameInfo.chapterNum;
if (t % 12 < 2) u.algorithmStrategyInfo.algorithmList.push(s.OFFER_TYPE.SUI_JI); else if (t % 12 < 10) u.algorithmStrategyInfo.algorithmList.push(h.algorithmStrategyLogic.getShangZengAndSuiJi()); else if (0 == i.storage.getItem("chapterFirstHardState_base")) {
i.storage.setItem("chapterFirstHardState_base", !0);
u.algorithmStrategyInfo.algorithmList.push(s.OFFER_TYPE.KUN_NAN_TI);
u.algorithmStrategyInfo.algorithmFailList.push(s.OFFER_TYPE.SUI_JI);
} else u.algorithmStrategyInfo.algorithmList.push(s.OFFER_TYPE.SUI_JI);
};
n([ p.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("ChapterAlgoStrategyTrait") ], e);
}(c.Trait);
r.ChapterAlgoStrategyTrait = _;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../data/TryTimeConfig": "TryTimeConfig"
} ],
ChapterAlgorithmHardData: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6b9a7H3qjxCAL95I4Sq+y6C", "ChapterAlgorithmHardData");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterAlgorithmHardData = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "hardQuestionNum", {
get: function() {
return o.storage.getItem("chapterHardQuestionNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "hardQuestionSuccess", {
get: function() {
return o.storage.getItem("chapterHardQuestionSuccess", 0);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterAlgorithmHardData = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterAlgorithmInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6949bcVI6BCSIMuPNThlF8x", "ChapterAlgorithmInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterAlgorithmInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "blockIdList", {
get: function() {
return o.storage.getItem("chapterBlockLists", []);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "blockPosList", {
get: function() {
return o.storage.getItem("chapterBlockPosLists", []);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterAlgorithmInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterAlgorithmName: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4e81bAc78dCDpfMXbss3aID", "ChapterAlgorithmName");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterAlgorithmName = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), n = function() {
function t() {}
Object.defineProperty(t.prototype, "algoExpectedId", {
get: function() {
return o.storage.getItem("chapterAlgoExpectedId", a.OFFER_TYPE.NONE);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "algoActualName", {
get: function() {
return o.storage.getItem("chapterAlgoActualName", []);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "algoActualId", {
get: function() {
return o.storage.getItem("chapterAlgoActualId", a.OFFER_TYPE.NONE);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterAlgorithmName = new n();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0
} ],
ChapterAlgorithmStrategyDiffTypeConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b41e84g3Q1D9JtOh68oYWqH", "ChapterAlgorithmStrategyDiffTypeConfig");
var o;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CHAPTER_DIFF_TYPE_DESC = void 0;
var a = t("../../difficultyStrategy/type/ChapterDifficultyStrategyType");
r.CHAPTER_DIFF_TYPE_DESC = ((o = {})[a.CHAPTER_DIFF_TYPE.NONE] = "空", o[a.CHAPTER_DIFF_TYPE.SIMPLE] = "简单关", 
o[a.CHAPTER_DIFF_TYPE.MEDIUM] = "中等关", o[a.CHAPTER_DIFF_TYPE.DIFFICULT] = "困难关", 
o[a.CHAPTER_DIFF_TYPE.NOVICE] = "新手关", o[a.CHAPTER_DIFF_TYPE.SIMPLE_DIFFICULT] = "一般困难关", 
o);
cc._RF.pop();
}, {
"../../difficultyStrategy/type/ChapterDifficultyStrategyType": "ChapterDifficultyStrategyType"
} ],
ChapterAlgorithmStrategyGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "62853mTNNVNAL5vdHk7aiPY", "ChapterAlgorithmStrategyGameInfo");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterAlgorithmStrategyGameInfo = void 0;
var a = t("../../../../../../scripts/base/decorators/DecoratorTrait"), n = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), i = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), c = function() {
function t() {}
t.prototype.getRandomFloatedArray = function(t) {
return t.map(function(t) {
var e = Math.floor(9 * Math.random()) - 4;
return Math.floor(t + e);
});
};
t.prototype.shouldExecuteAlgorithmStrategyDeal = function() {
return !this.isSpecialChapterStrategy();
};
t.prototype.shouldExecuteChapterBlockOutStrategy = function(t) {
void 0 === t && (t = !0);
return t;
};
t.prototype.isSpecialChapterStrategy = function() {
return i.algorithmStrategyInfo.algorithmSourceLevel1 == n.ChapterAlgorithmSourceType.TravelRevive || i.algorithmStrategyInfo.algorithmSourceLevel1 == n.ChapterAlgorithmSourceType.TravelReviveTrait;
};
o([ a.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现,提前计算出块不计入实际出块,") ], t.prototype, "shouldExecuteChapterBlockOutStrategy", null);
return o([ classId("ChapterAlgorithmStrategyGameInfo") ], t);
}();
r.chapterAlgorithmStrategyGameInfo = new c();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0
} ],
ChapterAlgorithmStrategyInterface: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ac5c3+V1vdIV6upKqLvj8+r", "ChapterAlgorithmStrategyInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ChapterAlgorithmStrategyType: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "05169bBxxhKX6rmbjdRL855", "ChapterAlgorithmStrategyType");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategyRunStateType = void 0;
(function(t) {
t[t.START = 0] = "START";
t[t.BLOCK = 1] = "BLOCK";
t[t.END = 2] = "END";
})(r.ChapterAlgorithmStrategyRunStateType || (r.ChapterAlgorithmStrategyRunStateType = {}));
cc._RF.pop();
}, {} ],
ChapterAlgorithmStrategy_BlocksPos_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "547abRlWNNGBb3eHJy4bjtk", "ChapterAlgorithmStrategy_BlocksPos_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_BlocksPos_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/enum/enum"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), h = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), f = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), d = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), y = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo"), m = t("../../../../../../scripts/modules/block/vo/BlockInfo"), _ = t("../events/E_ChapterAlgorithmStrategy_BlocksPos"), v = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ _.E_ChapterAlgorithmBlocksPos_Exe ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case _.E_ChapterAlgorithmBlocksPos_Exe:
this.onBlocksPos(t);
}
};
e.prototype.onBlocksPos = function(t) {
return i(this, void 0, void 0, function() {
var e;
return c(this, function() {
y.algorithmStrategyBlocksPosInfo._blocksPosList = d.OPERA_POS_TYPE.LEFT;
if (this.isModifyPos()) {
this.triggerBlocksPosBase();
this.triggerBlocksPosTrait();
}
(e = t.callback) && "function" == typeof e && e();
return [ 2 ];
});
});
};
e.prototype.isModifyPos = function() {
return !0;
};
e.prototype.triggerBlocksPosBase = function() {
if (p.isValueInEnum(f.algorithmName.algoActualId, u.OFFER_TYPE_DIFFICULTY) || p.isValueInEnum(f.algorithmName.algoActualId, u.OFFER_TYPE_DIE) || p.isValueInEnum(f.algorithmName.algoActualId, u.OFFER_TYPE_BLANK)) {
var t = h.algorithmInfo.blockIdList.slice(), e = m.blockInfo.sortIdBlock(t.slice()).map(function(e) {
return t.indexOf(e);
});
y.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(e);
y.algorithmStrategyBlocksPosInfo._blocksPosList = d.OPERA_POS_TYPE.RANDOM;
}
};
e.prototype.triggerBlocksPosTrait = function() {};
n([ s.trait("IsIncreaseEnjoyCollectionTrait", "消除爽不修改位置") ], e.prototype, "isModifyPos", null);
n([ s.trait("FixIsOpenOperaPosTrait", "修复主包的出块排序"), s.trait("RecoverBlockSortTrait", "恢复主包的出块排序"), s.trait("FillClearTopicTrait", "调整填空算法合集的摆放位置"), s.trait("MultiElementCollectTrait", "多元素收集,无威胁、首期1.5倍，填空消除路径三合一2"), s.trait("IsOpenOperaPosTrait", "调整填空算法合集的摆放位置") ], e.prototype, "triggerBlocksPosBase", null);
n([ s.trait("IsOpenOperaPosTrait", "调整填空算法合集的摆放位置") ], e.prototype, "triggerBlocksPosTrait", null);
return n([ classId("ChapterAlgorithmStrategy_BlocksPos_Proxy") ], e);
}(l.Proxy);
r.ChapterAlgorithmStrategy_BlocksPos_Proxy = v;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo": void 0,
"../../../../../../scripts/modules/block/vo/BlockInfo": void 0,
"../events/E_ChapterAlgorithmStrategy_BlocksPos": "E_ChapterAlgorithmStrategy_BlocksPos"
} ],
ChapterAlgorithmStrategy_Deal_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9c882K0NstDZ74dHpgI2zfJ", "ChapterAlgorithmStrategy_Deal_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_Deal_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorMeasure"), c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/falcon/Proxy"), p = (t("../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), 
t("../../../../../../scripts/modules/algorithm/type/AlgorithmType")), l = (t("../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig"), 
t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm")), u = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), h = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), f = t("../../game/vo/ChapterGameInfo"), d = t("../events/E_ChapterAlgorithmStrategy_Deal"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ d.E_ChapterAlgorithmStrategy_Deal ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_ChapterAlgorithmStrategy_Deal:
this.onTriggerStrategy(t);
}
};
e.prototype.onTriggerStrategy = function(t) {
if (t.option.strategyState == u.ALGO_STRATEGY_TYPE.REVIVE) this.triggerAlgorithmRevive(); else {
this.triggerAlgorithmStrategy();
this.postPreprocessing();
}
this.fallbackPlan();
var e = t.callback;
e && "function" == typeof e && e();
};
e.prototype.triggerAlgorithmRevive = function() {
h.algorithmStrategyInfo.setAlgorithmSourceLevel1(u.ChapterAlgorithmSourceType.TravelRevive);
h.algorithmStrategyInfo.setAlgorithmList([ p.OFFER_TYPE.REVIVE ]);
};
e.prototype.triggerAlgorithmStrategy = function() {
this.triggerAlgorithmTrait();
this.triggerBaseAlgorithm();
};
e.prototype.triggerAlgorithmTrait = function() {};
e.prototype.triggerBaseAlgorithm = function(t) {
if (h.algorithmStrategyInfo.algorithmSourceLevel1 == u.ChapterAlgorithmSourceType.TravelStageNone) if (t) this.triggerAlgorithm(); else {
h.algorithmStrategyInfo.setAlgorithmSourceLevel1(u.ChapterAlgorithmSourceType.TravelBase);
f.chapterGameInfo.roundNum > 2 ? h.algorithmStrategyInfo.setAlgorithmList([ p.OFFER_TYPE.SUI_JI ]) : h.algorithmStrategyInfo.setAlgorithmList([ p.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]);
}
};
e.prototype.triggerAlgorithm = function() {};
e.prototype.postPreprocessing = function() {};
e.prototype.fallbackPlan = function() {
h.algorithmStrategyInfo.algorithmList.length > 0 && h.algorithmStrategyInfo.algorithmList[h.algorithmStrategyInfo.algorithmList.length - 1] == p.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU && h.algorithmStrategyInfo.setAlgorithmFailList([ p.OFFER_TYPE.SUI_JI_WU_SI ]);
h.algorithmStrategyInfo.algorithmSourceLevel1 == u.ChapterAlgorithmSourceType.TravelStageNone && h.algorithmStrategyInfo.algorithmList.push(p.OFFER_TYPE.SUI_JI);
h.algorithmStrategyInfo.algorithmSourceLevel1 != u.ChapterAlgorithmSourceType.TravelStageNone && 0 == h.algorithmStrategyInfo.algorithmList.length && h.algorithmStrategyInfo.algorithmList.push(p.OFFER_TYPE.SUI_JI);
};
n([ c.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现,复活策略出块") ], e.prototype, "triggerAlgorithmRevive", null);
n([ i.measure ], e.prototype, "triggerAlgorithmStrategy", null);
n([ c.trait("AlloBlockStateTrait", "异形牌面"), c.trait("TerminateRefreshScoreTrait", "终止刷分循环算法"), c.trait("TravelHappyOverTrait", "关卡终局爽且难题") ], e.prototype, "triggerAlgorithmTrait", null);
n([ c.trait("LevelExpAlgorithmTrait", "是否使用实验7") ], e.prototype, "triggerBaseAlgorithm", null);
n([ c.trait("ChapterAlgoStrategyTrait", "实验7"), c.trait("RatioAdjustTrait", "关卡节奏调整，打断下面逻辑"), c.trait("LevelLoopTrait", "关卡10循环") ], e.prototype, "triggerAlgorithm", null);
n([ c.trait("TravelAlgorithmNewDirectionBTrait", "关卡算法新方向B"), c.trait("LevelRandomReplaceTrait", "关卡随机替换为 随机无死熵增3。 1:1") ], e.prototype, "postPreprocessing", null);
n([ l.Algorithm(), c.trait("CTGMAlgorithmTrait", "使用GM算法") ], e.prototype, "fallbackPlan", null);
return n([ classId("ChapterAlgorithmStrategy_Deal_Proxy") ], e);
}(s.Proxy);
r.ChapterAlgorithmStrategy_Deal_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorMeasure": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../events/E_ChapterAlgorithmStrategy_Deal": "E_ChapterAlgorithmStrategy_Deal"
} ],
ChapterAlgorithmStrategy_Init_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1b3ebCajklPB44f8tQTE8Ej", "ChapterAlgorithmStrategy_Init_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_Init_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../prefab/ChapterPrefabConfig"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
c.UI.addEventListener("create", function(e) {
e === p.ChapterPrefabConfig.ChapterGame && t.onTriggerStrategy();
});
};
e.prototype.onTriggerStrategy = function() {
this.preprocessAlgorithmData();
};
e.prototype.preprocessAlgorithmData = function() {};
n([ i.trait("LevelWayHelpConfigTrait") ], e.prototype, "preprocessAlgorithmData", null);
return n([ classId("ChapterAlgorithmStrategy_Init_Proxy") ], e);
}(s.Proxy);
r.ChapterAlgorithmStrategy_Init_Proxy = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig"
} ],
ChapterAlgorithmStrategy_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4b33fiJWvJExrNp8AeN2tax", "ChapterAlgorithmStrategy_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterAlgorithmStrategy_BlocksPos_Proxy"), c = t("./proxys/ChapterAlgorithmStrategy_Deal_Proxy"), s = t("./proxys/ChapterAlgorithmStrategy_Init_Proxy"), p = t("./proxys/ChapterAlgorithmStrategy_Replace_Proxy"), l = t("./proxys/ChapterAlgorithmStrategy_Reset_Proxy"), u = t("./proxys/ChapterAlgorithmStrategy_Run_Proxy"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ l.ChapterAlgorithmStrategy_Reset_Proxy, i.ChapterAlgorithmStrategy_BlocksPos_Proxy, u.ChapterAlgorithmStrategy_Run_Proxy, s.ChapterAlgorithmStrategy_Init_Proxy, p.ChapterAlgorithmStrategy_Replace_Proxy, c.ChapterAlgorithmStrategy_Deal_Proxy ];
};
return e;
}(n.Module);
r.ChapterAlgorithmStrategy_Module = h;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterAlgorithmStrategy_BlocksPos_Proxy": "ChapterAlgorithmStrategy_BlocksPos_Proxy",
"./proxys/ChapterAlgorithmStrategy_Deal_Proxy": "ChapterAlgorithmStrategy_Deal_Proxy",
"./proxys/ChapterAlgorithmStrategy_Init_Proxy": "ChapterAlgorithmStrategy_Init_Proxy",
"./proxys/ChapterAlgorithmStrategy_Replace_Proxy": "ChapterAlgorithmStrategy_Replace_Proxy",
"./proxys/ChapterAlgorithmStrategy_Reset_Proxy": "ChapterAlgorithmStrategy_Reset_Proxy",
"./proxys/ChapterAlgorithmStrategy_Run_Proxy": "ChapterAlgorithmStrategy_Run_Proxy"
} ],
ChapterAlgorithmStrategy_Replace_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d2ccd4q6INHXKnZ3Gzp/jQT", "ChapterAlgorithmStrategy_Replace_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_Replace_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/enum/enum"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithmCache"), u = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../events/E_ChapterAlgorithmStrategy_Replace"), f = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ h.E_ChapterAlgorithmStrategy_Replace ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case h.E_ChapterAlgorithmStrategy_Replace:
this.onTriggerStrategyReplace(t);
}
};
e.prototype.onTriggerStrategyReplace = function(t) {
this.addAlgorithmStrategy();
this.preprocessingBaseAlgorithm();
this.preprocessingBaseAlgorithmAfter();
this.preprocessingShangAlgorithm();
this.preprocessingBlankAlgorithm();
this.preprocessingDiffAlgorithm();
this.preprocessingAlgorithm();
var e = t.callback;
e && "function" == typeof e && e();
};
e.prototype.addAlgorithmStrategy = function() {
if (0 === u.algorithmStrategyInfo.algorithmFailList.length && u.algorithmStrategyInfo.algorithmList.length > 0) {
var t = u.algorithmStrategyInfo.algorithmList[u.algorithmStrategyInfo.algorithmList.length - 1];
(c.isValueInEnum(t, p.OFFER_TYPE_DIFFICULTY) || c.isValueInEnum(t, p.OFFER_TYPE_DIE)) && u.algorithmStrategyInfo.algorithmFailList.push(p.OFFER_TYPE.SHANG_ZENG_3);
}
};
e.prototype.preprocessingBaseAlgorithm = function() {};
e.prototype.preprocessingBaseAlgorithmAfter = function() {};
e.prototype.preprocessingShangAlgorithm = function() {};
e.prototype.preprocessingBlankAlgorithm = function() {};
e.prototype.preprocessingDiffAlgorithm = function() {};
e.prototype.preprocessingAlgorithm = function() {};
n([ l.AlgorithmCacheClear ], e.prototype, "addAlgorithmStrategy", null);
n([ i.trait("IsOpenRandomToRandomNoDieTrait", "随机无死替换随机"), i.trait("IsOpenShang1ToShang3Trait", "熵3替换熵1"), i.trait("IsOpenZhiJueToKunNanTrait", "困难难题替换直觉难题") ], e.prototype, "preprocessingBaseAlgorithm", null);
n([ i.trait("RandomReplaceStrategyTrait", "随机替换策略更改"), i.trait("BAlgorithmDynamicDifficultyTrait", "交叉动态难度：优先将难题替换为填空") ], e.prototype, "preprocessingBaseAlgorithmAfter", null);
n([ i.trait("AddSpaceAdd4Trait", "熵增3换成面积扩大的熵增4"), i.trait("IsOpenZiMuShangZengTrait", "字母熵增替换熵3") ], e.prototype, "preprocessingShangAlgorithm", null);
n([ i.trait("FastTkxcHelpTrait", "【算法小组】底板填空消除&快速填空的混合填空"), i.trait("MoreAreaTKXCTrait", "大面积填空-仅得分效率低时触发"), i.trait("LevelFillClearAimTrait", "高效消除") ], e.prototype, "preprocessingBlankAlgorithm", null);
n([ i.trait("FastNearTkxcTrait", "无尽和关卡填空消除难度(调参)") ], e.prototype, "preprocessingAlgorithm", null);
return n([ classId("ChapterAlgorithmStrategy_Replace_Proxy") ], e);
}(s.Proxy);
r.ChapterAlgorithmStrategy_Replace_Proxy = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithmCache": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../events/E_ChapterAlgorithmStrategy_Replace": "E_ChapterAlgorithmStrategy_Replace"
} ],
ChapterAlgorithmStrategy_Reset_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b705bPIuB1JE6Viv1RNgv+m", "ChapterAlgorithmStrategy_Reset_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_Reset_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), l = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), u = t("../../prefab/ChapterPrefabConfig"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
c.UI.addEventListener("open", function(e) {
e === u.ChapterPrefabConfig.ChapterGame && t.onTriggerStrategy();
});
};
e.prototype.registerEvents = function() {
return [ p.E_GameOver_GameEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case p.E_GameOver_GameEnd:
this.onGameEnd(t);
}
};
e.prototype.onGameEnd = function() {
0 == l.gameOverGameInfo.isChapterWin && this.onGameFail();
};
e.prototype.onGameFail = function() {};
e.prototype.onTriggerStrategy = function() {
this.preprocessAlgorithmData();
};
e.prototype.preprocessAlgorithmData = function() {};
n([ i.trait("LevelHelpStateTrait", "关卡由易到难根据能力帮扶") ], e.prototype, "onGameEnd", null);
n([ i.trait("LevelWayHelpTrait", "开启关卡局间帮助,判断是否开启局间"), i.trait("ChapterAlgoStrategyTrait", "底板泳道逻辑"), i.trait("LevelPiecesThreeRanTrait", "关卡三段算法(40-80)"), i.trait("RatioAdjustTrait", "关卡节奏调整"), i.trait("LevelHelpStateTrait", "关卡由易到难根据能力帮扶") ], e.prototype, "preprocessAlgorithmData", null);
return n([ classId("ChapterAlgorithmStrategy_Reset_Proxy") ], e);
}(s.Proxy);
r.ChapterAlgorithmStrategy_Reset_Proxy = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig"
} ],
ChapterAlgorithmStrategy_Run_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "94620ENkd1Bb7k/Hi8z3KF/", "ChapterAlgorithmStrategy_Run_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAlgorithmStrategy_Run_Proxy = void 0;
var s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/algorithm/events/E_Algorithm_Exe"), l = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), h = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), f = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), d = t("../../blockOutStrategy/events/E_ChapterBlockOutStrategy_Exe"), y = t("../../collectionProducer/events/E_ChapterCollectionProducer_Exe"), m = t("../../colorProducer/events/E_ChapterColorProducer_Exe"), _ = t("../../colorProducer/vo/ChapterColorProducerGameInfo"), v = t("../events/E_ChapterAlgorithmStrategy_BlocksPos"), g = t("../events/E_ChapterAlgorithmStrategy_Run"), C = t("../events/E_ChapterAlgorithmStrategy_RunState"), b = t("../type/ChapterAlgorithmStrategyType"), P = t("../../../../../../scripts/base/storage/Storage"), S = t("../../../../../../scripts/modules/game/type/GameType"), I = t("../../../../../../scripts/modules/game/vo/GameInfo"), T = t("../../../../../../scripts/base/async/Sequence"), E = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorCheckColor"), O = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorCheckBlock"), A = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), R = t("../../../../../../scripts/modules/algorithm/config/AlgorithmBlockConfig"), w = t("../events/E_ChapterAlgorithmStrategy_Deal"), G = t("../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Deal"), x = t("../../../../../../scripts/base/perf/Perf"), k = t("../../../../../../scripts/modules/dataStatistics/vo/DataStatisticsInfo"), B = t("../../../../../../scripts/modules/board/vo/BoardInfo"), M = t("../../../../../../scripts/base/decorators/DecoratorTrait"), D = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), j = t("../vo/ChapterAlgorithmStrategyGameInfo"), F = t("../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_RunState"), L = t("../../../../../../scripts/modules/prefab/PrefabConfig"), N = t("../../../../../../scripts/base/ui/UI"), U = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), W = t("../events/E_ChapterAlgorithmStrategy_Replace"), H = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ g.E_ChapterAlgorithmStrategy_Run, C.E_ChapterAlgorithmStrategy_RunState ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case g.E_ChapterAlgorithmStrategy_Run:
this.onTriggerStrategy(t);
break;

case C.E_ChapterAlgorithmStrategy_RunState:
this.flowState(t);
}
};
e.prototype.flowState = function(t) {
var e = t.option.runStateType;
this.dispatchModuleEvent(new F.E_AlgorithmStrategy_RunState({
type: S.GameMode.Chapter,
state: e
}));
};
e.prototype.onTriggerStrategy = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, s = this;
return c(this, function(l) {
switch (l.label) {
case 0:
x.perf.markStart("chapterAlgorithm");
U.algorithmStrategyLogic.isAlgorithmSendEvent() && this.dispatchModuleEvent(new C.E_ChapterAlgorithmStrategy_RunState({
runStateType: b.ChapterAlgorithmStrategyRunStateType.START,
strategyState: t.option.strategyState
}));
this.resetAlgorithmData();
l.label = 1;

case 1:
l.trys.push([ 1, 3, , 4 ]);
r = (e = [ {
name: "E_ChapterAlgorithmStrategy_Deal",
execute: function() {
return s.dispatchModuleEventAsync(new w.E_ChapterAlgorithmStrategy_Deal({
strategyState: t.option.strategyState
}));
},
condition: function() {
return !0;
}
}, {
name: "E_ChapterAlgorithmStrategy_Replace",
execute: function() {
return s.dispatchModuleEventAsync(new W.E_ChapterAlgorithmStrategy_Replace());
},
condition: function() {
return !0;
}
}, {
name: "E_AlgorithmStrategy_Deal",
execute: function() {
return s.dispatchModuleEventAsync(new G.E_AlgorithmStrategy_Deal());
},
condition: function() {
return j.chapterAlgorithmStrategyGameInfo.shouldExecuteAlgorithmStrategyDeal();
}
}, {
name: "E_Algorithm_Exe",
execute: function() {
return s.dispatchModuleEventAsync(new p.E_Algorithm_Exe());
},
condition: function() {
return !0;
}
}, {
name: "E_ChapterBlockOutStrategy_Exe",
execute: function() {
return s.dispatchModuleEventAsync(new d.E_ChapterBlockOutStrategy_Exe());
},
condition: function() {
return j.chapterAlgorithmStrategyGameInfo.shouldExecuteChapterBlockOutStrategy();
}
}, {
name: "E_ChapterAlgorithmBlocksPos_Exe",
execute: function() {
return s.dispatchModuleEventAsync(new v.E_ChapterAlgorithmBlocksPos_Exe());
},
condition: function() {
return !0;
}
}, {
name: "E_ChapterCollectionProducer_Exe",
execute: function() {
return s.dispatchModuleEventAsync(new y.E_ChapterCollectionProducer_Exe());
},
condition: function() {
return !0;
}
}, {
name: "E_ChapterColorProducer_Exe",
execute: function() {
return s.dispatchModuleEventAsync(new m.E_ChapterColorProducer_Exe());
},
condition: function() {
return !0;
}
} ]).map(function(t) {
return t.execute;
});
o = e.map(function(t) {
return t.condition;
});
a = function() {
return i(s, void 0, Promise, function() {
return c(this, function() {
return [ 2, I.gameInfo.gameMode !== S.GameMode.Chapter || 1 == D.gameOverGameInfo.chapterTriggerGameOver ];
});
});
};
n = !0;
return [ 4, T.sequence(r, a, o).then(function(t) {
if (t.includes(void 0)) {
n = !1;
P.storage.setItem("chapterBlockLists", []);
s.resetAlgorithmData();
if (D.gameOverGameInfo.chapterTriggerGameOver) {
n = !0;
P.storage.setItem("chapterBlockLists", j.chapterAlgorithmStrategyGameInfo.getRandomFloatedArray([ 10, 20, 30 ]));
}
N.UI.activeState(L.PrefabConfig.ChapterContent.url) && 0 == n && (n = !0);
}
}) ];

case 2:
l.sent();
n && this.handleAlgorithmCompletion(t);
return [ 3, 4 ];

case 3:
l.sent();
this.handleAlgorithmCompletion(t);
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.handleAlgorithmCompletion = function(t) {
this.algorithmComplete();
var e = t.option.callback;
if (e && "function" == typeof e) {
U.algorithmStrategyLogic.isAlgorithmSendEvent() && this.dispatchModuleEvent(new C.E_ChapterAlgorithmStrategy_RunState({
runStateType: b.ChapterAlgorithmStrategyRunStateType.END,
strategyState: t.option.strategyState
}));
e();
}
};
e.prototype.resetAlgorithmData = function() {
f.algorithmStrategyInfo.clearAlgorithmStrategyInfo();
};
e.prototype.algorithmComplete = function() {
x.perf.markEnd("chapterAlgorithm");
k.dataStatisticsInfo.setBlockProduceBoardList(B.boardInfo.faceBlocks);
if (this.checkBlockError) {
u.algorithmInfo.setBlockIdList(R.DEFAULT_BLOCKS);
A.algorithmName.setAlgoActualId(l.OFFER_TYPE.SUI_JI);
}
this.checkColorError && _.chapterColorProducerGameInfo.setColorList([ 1, 1, 1 ]);
f.algorithmStrategyInfo.algorithmComplete();
};
n([ M.trait("CTAgloReviveTrait", "复活记录上一局算法名"), M.trait("CTAgloNameTrait", "算法预出题名") ], e.prototype, "onTriggerStrategy", null);
n([ h.AlgorithmInit() ], e.prototype, "resetAlgorithmData", null);
n([ E.checkColorError, O.checkBlockError ], e.prototype, "algorithmComplete", null);
return n([ classId("ChapterAlgorithmStrategy_Run_Proxy") ], e);
}(s.Proxy);
r.ChapterAlgorithmStrategy_Run_Proxy = H;
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/Sequence": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/perf/Perf": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmBlockConfig": void 0,
"../../../../../../scripts/modules/algorithm/events/E_Algorithm_Exe": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorCheckBlock": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorCheckColor": void 0,
"../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Deal": void 0,
"../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_RunState": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/dataStatistics/vo/DataStatisticsInfo": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../blockOutStrategy/events/E_ChapterBlockOutStrategy_Exe": "E_ChapterBlockOutStrategy_Exe",
"../../collectionProducer/events/E_ChapterCollectionProducer_Exe": "E_ChapterCollectionProducer_Exe",
"../../colorProducer/events/E_ChapterColorProducer_Exe": "E_ChapterColorProducer_Exe",
"../../colorProducer/vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo",
"../events/E_ChapterAlgorithmStrategy_BlocksPos": "E_ChapterAlgorithmStrategy_BlocksPos",
"../events/E_ChapterAlgorithmStrategy_Deal": "E_ChapterAlgorithmStrategy_Deal",
"../events/E_ChapterAlgorithmStrategy_Replace": "E_ChapterAlgorithmStrategy_Replace",
"../events/E_ChapterAlgorithmStrategy_Run": "E_ChapterAlgorithmStrategy_Run",
"../events/E_ChapterAlgorithmStrategy_RunState": "E_ChapterAlgorithmStrategy_RunState",
"../type/ChapterAlgorithmStrategyType": "ChapterAlgorithmStrategyType",
"../vo/ChapterAlgorithmStrategyGameInfo": "ChapterAlgorithmStrategyGameInfo"
} ],
ChapterAudioConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b1a26SMw7NNeawdZrhOkz52", "ChapterAudioConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AudioConfigType = r.satisfies = r.ChapterAudioConfig = void 0;
r.ChapterAudioConfig = {
travel_game_collect_item1: {
url: "audios/collects/travel_game_collect_item1",
bundleName: "chapter"
},
travel_game_collect_item2: {
url: "audios/collects/travel_game_collect_item2",
bundleName: "chapter"
},
travel_targetui_show: {
url: "audios/travel_targetui_show",
bundleName: "chapter"
},
travel_score_change: {
url: "audios/travel_score_change",
bundleName: "chapter"
},
travel_score_suc: {
url: "audios/travel_score_suc",
bundleName: "chapter"
},
travel_overui_score_suc: {
url: "audios/travel_overui_score_suc",
bundleName: "chapter"
},
travel_win_logo: {
url: "audios/travel_win_logo",
bundleName: "chapter"
},
travel_overui_collect_items: {
url: "audios/travel_overui_collect_items",
bundleName: "chapter"
},
travel_cup_award: {
url: "audios/travel_cup_award",
bundleName: "chapter"
},
travel_unlock_lvmark: {
url: "audios/travel_unlock_lvmark",
bundleName: "chapter"
}
};
cc._RF.pop();
}, {} ],
ChapterAudio_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8799fi/ecRLgoxviYDrE9Bq", "ChapterAudio_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAudio_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterAudio_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterAudio_Proxy ];
};
return e;
}(n.Module);
r.ChapterAudio_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterAudio_Proxy": "ChapterAudio_Proxy"
} ],
ChapterAudio_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f3d786hxPNIJraneQiBUph+", "ChapterAudio_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterAudio_Proxy = void 0;
var n = t("../../../../../../scripts/base/ui/UI"), i = t("../../../../../../scripts/falcon/EventManager"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/audio/config/AudioConfig"), p = t("../../../../../../scripts/modules/audio/events/E_Audio_Play"), l = t("../../../../../../scripts/modules/audio/events/E_Audio_stop"), u = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), h = t("../../../../../../scripts/modules/prefab/PrefabConfig"), f = t("../../prefab/ChapterPrefabConfig"), d = [ h.PrefabConfig.Setup, h.PrefabConfig.Revive, f.ChapterPrefabConfig.ChapterReduceScoreFail, f.ChapterPrefabConfig.ChapterReduceCollectFail, f.ChapterPrefabConfig.ChapterReduceScoreWin, f.ChapterPrefabConfig.ChapterReduceCollectWin ], y = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isPlaying = !1;
return e;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.registerEvents = function() {
return [ u.E_Game_BackHome ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case u.E_Game_BackHome:
this.onBackHome();
}
};
e.prototype.onBackHome = function() {
i.EventManager.dispatchModuleEvent(new l.E_Audio_stop(s.AudioConfig.CommonBgm));
};
e.prototype.addEventListener = function() {
n.UI.addEventListener("open", this.handleOpenUI.bind(this));
n.UI.addEventListener("close", this.handleCloseUI.bind(this));
};
e.prototype.handleCloseUI = function(t) {
t !== f.ChapterPrefabConfig.ChapterGame ? n.UI.activeState(h.PrefabConfig.ModeChoice.url) || d.includes(t) && setTimeoutSafe(function() {
i.EventManager.dispatchModuleEvent(new p.E_Audio_Play(s.AudioConfig.CommonBgm));
}, 0) : i.EventManager.dispatchModuleEvent(new l.E_Audio_stop(s.AudioConfig.CommonBgm));
};
e.prototype.handleOpenUI = function(t) {
t !== f.ChapterPrefabConfig.ChapterGame ? d.includes(t) && i.EventManager.dispatchModuleEvent(new l.E_Audio_stop(s.AudioConfig.CommonBgm)) : setTimeoutSafe(function() {
i.EventManager.dispatchModuleEvent(new p.E_Audio_Play(s.AudioConfig.CommonBgm));
}, 0);
};
return e;
}(c.Proxy);
r.ChapterAudio_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/audio/events/E_Audio_Play": void 0,
"../../../../../../scripts/modules/audio/events/E_Audio_stop": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig"
} ],
ChapterBackSpace_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "45d45pa1flJ54AJJIQ5eFHZ", "ChapterBackSpace_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBackSpace_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterBackSpace_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterBackSpace_Proxy ];
};
return e;
}(n.Module);
r.ChapterBackSpace_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterBackSpace_Proxy": "ChapterBackSpace_Proxy"
} ],
ChapterBackSpace_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3bc78fDS49Jaq7tCmUcBqWs", "ChapterBackSpace_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBackSpace_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/falcon/EventManager"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/backSpace/vo/BackSpaceInfo"), f = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), d = t("../../../../../../scripts/modules/commentSkin/components/CommentSkin"), y = t("../../../../../../scripts/modules/commentSkin/events/E_CommentSkin_Close"), m = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), _ = t("../../../../../../scripts/modules/game/type/GameType"), v = t("../../../../../../scripts/modules/game/vo/GameInfo"), g = t("../../../../../../scripts/modules/prefab/PrefabConfig"), C = t("../../../../../../scripts/modules/setup/config/SetupConfig"), b = t("../../../../../../scripts/modules/setup/events/E_Setup_Click"), P = t("../../gameOver/vo/ChapterGameOverGameInfo"), S = t("../../prefab/ChapterPrefabConfig"), I = t("../../topInfo/components/ChapterTopInfoBtn"), T = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
var t = this;
p.UI.addEventListener("close", function(e) {
e === S.ChapterPrefabConfig.ChapterGame && t.onCloseChapterGame();
});
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.registerEvents = function() {
return [ f.E_BlocksProducer_TouchEnd ];
};
e.prototype.receivedEvents = function(t) {
return i(this, void 0, Promise, function() {
return c(this, function() {
switch (t.getClass()) {
case f.E_BlocksProducer_TouchEnd:
this.onTouchEnd();
}
return [ 2 ];
});
});
};
e.prototype.onTouchEnd = function() {};
e.prototype.onCloseChapterGame = function() {};
e.prototype.onKeyDown = function(t) {
this.onkeyCode(t.keyCode);
};
e.prototype.onkeyCode = function(t) {
switch (t) {
case cc.macro.KEY.back:
if (!h.backSpaceInfo.isCanClick) return;
if (v.gameInfo.gameMode !== _.GameMode.Chapter) return;
if (p.UI.activeState(g.PrefabConfig.commentSkin.url)) {
var e = 0;
(o = Cinst(d.default)) && (e = o.state.startState);
l.EventManager.dispatchModuleEvent(new y.E_CommentSkin_Close(e));
return;
}
if (p.UI.activeState(g.PrefabConfig.Setup.url)) {
l.EventManager.dispatchModuleEvent(new b.E_Setup_Click(C.enSetupKeys.closeSelf));
return;
}
if (p.UI.activeState(g.PrefabConfig.Revive.url)) return;
var r = [ P.chapterGameOverGameInfo.getChapterScoreFailConfig(), P.chapterGameOverGameInfo.getChapterCollectFailConfig(), P.chapterGameOverGameInfo.getChapterScoreWinConfig(), P.chapterGameOverGameInfo.getChapterCollectWinConfig(), g.PrefabConfig.ChapterList ].find(function(t) {
return p.UI.activeState(t.url);
});
if (r) {
p.UI.hideUI(r);
l.EventManager.dispatchModuleEvent(new m.E_Game_BackHome());
} else if (p.UI.activeState(S.ChapterPrefabConfig.ChapterGame.url)) {
var o;
(o = Cinst(I.default)) && (null == o || o.onClickBack());
}
}
};
n([ s.trait("BackSpaceClickLimitTrait", "物理返回键限制特性") ], e.prototype, "onTouchEnd", null);
n([ s.trait("BackSpaceClickLimitTrait", "物理返回键限制特性") ], e.prototype, "onCloseChapterGame", null);
return n([ classId("ChapterBackSpace_Proxy") ], e);
}(u.Proxy);
r.ChapterBackSpace_Proxy = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/backSpace/vo/BackSpaceInfo": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/commentSkin/components/CommentSkin": void 0,
"../../../../../../scripts/modules/commentSkin/events/E_CommentSkin_Close": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../scripts/modules/setup/events/E_Setup_Click": void 0,
"../../gameOver/vo/ChapterGameOverGameInfo": "ChapterGameOverGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../topInfo/components/ChapterTopInfoBtn": "ChapterTopInfoBtn"
} ],
ChapterBlockOutStrategyGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ec94a8gXQNMiYDSRxHWkSMb", "ChapterBlockOutStrategyGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterBlockOutStrategyGameInfo = void 0;
r.chapterBlockOutStrategyGameInfo = new function() {}();
cc._RF.pop();
}, {} ],
ChapterBlockOutStrategy_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cb1aboul61CYaioizA0IIFT", "ChapterBlockOutStrategy_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlockOutStrategy_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterBlockOutStrategy_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterBlockOutStrategy_Proxy ];
};
return e;
}(n.Module);
r.ChapterBlockOutStrategy_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterBlockOutStrategy_Proxy": "ChapterBlockOutStrategy_Proxy"
} ],
ChapterBlockOutStrategy_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d18b9HoPRtOv6nUVzHDQPk4", "ChapterBlockOutStrategy_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlockOutStrategy_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/enum/enum"), s = t("../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../scripts/falcon/Proxy"), l = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), h = t("../../algorithm/vo/ChapterAlgorithmHardData"), f = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState"), d = t("../../algorithmStrategy/type/ChapterAlgorithmStrategyType"), y = t("../events/E_ChapterBlockOutStrategy_Exe"), m = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ y.E_ChapterBlockOutStrategy_Exe ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case y.E_ChapterBlockOutStrategy_Exe:
this.onTriggerStrategy(t);
}
};
e.prototype.onTriggerStrategy = function(t) {
this.modifyBlockOutResult();
this.dispatchModuleEvent(new f.E_ChapterAlgorithmStrategy_RunState({
runStateType: d.ChapterAlgorithmStrategyRunStateType.BLOCK
}));
if (t instanceof y.E_ChapterBlockOutStrategy_Exe) {
var e = t.callback;
e && "function" == typeof e && e();
}
};
e.prototype.modifyBlockOutResult = function() {
if (c.isValueInEnum(u.algorithmName.algoExpectedId, l.OFFER_TYPE_DIFFICULTY)) {
var t = h.chapterAlgorithmHardData.hardQuestionNum + 1;
s.storage.setItem("chapterHardQuestionNum", t);
}
if (c.isValueInEnum(u.algorithmName.algoActualId, l.OFFER_TYPE_DIFFICULTY)) {
var e = h.chapterAlgorithmHardData.hardQuestionSuccess;
s.storage.setItem("chapterHardQuestionSuccess", e);
}
};
n([ i.trait("FastNearTkxcTrait", "高贴边陷阱出题"), i.trait("TerminateRefreshScoreTrait", "清除终止刷分循环算法"), i.trait("TravelAlgorithmNewDirectionBTrait", "关卡算法新方向B") ], e.prototype, "modifyBlockOutResult", null);
return n([ classId("ChapterBlockOutStrategy_Proxy") ], e);
}(p.Proxy);
r.ChapterBlockOutStrategy_Proxy = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../algorithm/vo/ChapterAlgorithmHardData": "ChapterAlgorithmHardData",
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState": "E_ChapterAlgorithmStrategy_RunState",
"../../algorithmStrategy/type/ChapterAlgorithmStrategyType": "ChapterAlgorithmStrategyType",
"../events/E_ChapterBlockOutStrategy_Exe": "E_ChapterBlockOutStrategy_Exe"
} ],
ChapterBlocksProducerInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "29e207lUQVM84t4uIR8SJ/W", "ChapterBlocksProducerInfo");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterBlocksProducerInfo = void 0;
var n = t("../../../../../../scripts/base/decorators/DecoratorTrait"), i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../collectionProducer/vo/ChapterCollectionProducerGameInfo"), s = function() {
function t() {}
Object.defineProperty(t.prototype, "producerBlocks", {
get: function() {
return i.storage.getItem("chapterProducerBlocks", [ -1, -1, -1 ]);
},
enumerable: !1,
configurable: !0
});
t.prototype.getItemColors = function() {
for (var t = [], e = 0; e < c.chapterCollectionProducerGameInfo.collectionList.length; e++) {
var r = c.chapterCollectionProducerGameInfo.collectionList[e];
t[e] = {};
for (var o in r) {
var a = r[o];
t[e][a.pos] = a.Key;
}
}
return t;
};
t.prototype.hasValidBlock = function() {
var t, e, r = this.producerBlocks;
if (3 == r.length) try {
for (var o = a(r), n = o.next(); !n.done; n = o.next()) if (-1 !== n.value) return !0;
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = o.return) && e.call(o);
} finally {
if (t) throw t.error;
}
}
return !1;
};
o([ n.trait("AlloBlockStateTrait") ], t.prototype, "getItemColors", null);
return o([ classId("ChapterBlocksProducerInfo") ], t);
}();
r.chapterBlocksProducerInfo = new s();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../collectionProducer/vo/ChapterCollectionProducerGameInfo": "ChapterCollectionProducerGameInfo"
} ],
ChapterBlocksProducer_BlocksProducerValidate_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2c242WO+otC0LHPijJJ1CVM", "ChapterBlocksProducer_BlocksProducerValidate_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_BlocksProducerValidate_Proxy = void 0;
var c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/base/ui/UI"), p = t("../../../../../../scripts/falcon/EventManager"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), h = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducer"), f = t("../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo"), d = t("../../algorithm/vo/ChapterAlgorithmInfo"), y = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run"), m = t("../../board/events/E_ChapterBoard_CanPutValidateStart"), _ = t("../../colorProducer/vo/ChapterColorProducerGameInfo"), v = t("../../game/components/ChapterGame"), g = t("../../prefab/ChapterPrefabConfig"), C = t("../vo/ChapterBlocksProducerInfo"), b = t("./ChapterBlocksProducer_Proxy"), P = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
s.UI.addEventListener("open", function(e) {
e === g.ChapterPrefabConfig.ChapterGame && Cinst(v.default) && t.onChapterGameShow();
});
};
e.prototype.onChapterGameShow = function() {
var t = this, e = C.chapterBlocksProducerInfo.producerBlocks;
!e || f.blocksProducerInfo.isNullProducerBlocks ? p.EventManager.dispatchModuleEvent(new y.E_ChapterAlgorithmStrategy_Run({
strategyState: u.ALGO_STRATEGY_TYPE.DEFAULT,
callback: function() {
var e = d.chapterAlgorithmInfo.blockIdList;
if (e && 0 !== e.length) {
c.storage.setItem("chapterProducerBlocks", e);
t.generatorChapterProducerBlocks(e, _.chapterColorProducerGameInfo.colorList);
}
}
})) : this.generatorChapterProducerBlocks(e, _.chapterColorProducerGameInfo.colorList);
};
e.prototype.generatorChapterProducerBlocks = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o;
return i(this, function(a) {
switch (a.label) {
case 0:
r = C.chapterBlocksProducerInfo.getItemColors();
return [ 4, this.getModule().getProxy(b.ChapterBlocksProducer_Proxy).updateBlocksProducerState(t, e, r) ];

case 1:
a.sent();
return [ 4, CinstAsync(h.default) ];

case 2:
(o = a.sent()) && (o.loaded ? p.EventManager.dispatchModuleEvent(new m.E_ChapterBoard_CanPutValidateStart()) : o.onDidBlocksProducerLoadComplete(function() {
p.EventManager.dispatchModuleEvent(new m.E_ChapterBoard_CanPutValidateStart());
}));
return [ 2 ];
}
});
});
};
return e;
}(l.Proxy);
r.ChapterBlocksProducer_BlocksProducerValidate_Proxy = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducer": void 0,
"../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run": "E_ChapterAlgorithmStrategy_Run",
"../../board/events/E_ChapterBoard_CanPutValidateStart": "E_ChapterBoard_CanPutValidateStart",
"../../colorProducer/vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo",
"../../game/components/ChapterGame": "ChapterGame",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo",
"./ChapterBlocksProducer_Proxy": "ChapterBlocksProducer_Proxy"
} ],
ChapterBlocksProducer_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "849ba62M39JCL/vkMays0sl", "ChapterBlocksProducer_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterBlocksProducer_BlocksProducerValidate_Proxy"), c = t("./proxys/ChapterBlocksProducer_Render_Proxy"), s = t("./proxys/ChapterBlocksProducer_Proxy"), p = t("./proxys/ChapterBlocksProducer_Revive_Proxy"), l = t("./proxys/ChapterBlocksProducer_Round_Proxy"), u = t("./proxys/ChapterBlocksProducer_RoundDot_Proxy"), h = t("./proxys/ChapterBlocksProducer_Run_Proxy"), f = t("./proxys/ChapterBlocksProducer_TouchDot_Proxy"), d = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ s.ChapterBlocksProducer_Proxy, p.ChapterBlocksProducer_Revive_Proxy, u.ChapterBlocksProducer_RoundDot_Proxy, i.ChapterBlocksProducer_BlocksProducerValidate_Proxy, f.ChapterBlocksProducer_TouchDot_Proxy, l.ChapterBlocksProducer_Round_Proxy, c.ChapterBlocksProducer_Render_Proxy, h.ChapterBlocksProducer_Run_Proxy ];
};
return e;
}(n.Module);
r.ChapterBlocksProducer_Module = d;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterBlocksProducer_BlocksProducerValidate_Proxy": "ChapterBlocksProducer_BlocksProducerValidate_Proxy",
"./proxys/ChapterBlocksProducer_Proxy": "ChapterBlocksProducer_Proxy",
"./proxys/ChapterBlocksProducer_Render_Proxy": "ChapterBlocksProducer_Render_Proxy",
"./proxys/ChapterBlocksProducer_Revive_Proxy": "ChapterBlocksProducer_Revive_Proxy",
"./proxys/ChapterBlocksProducer_RoundDot_Proxy": "ChapterBlocksProducer_RoundDot_Proxy",
"./proxys/ChapterBlocksProducer_Round_Proxy": "ChapterBlocksProducer_Round_Proxy",
"./proxys/ChapterBlocksProducer_Run_Proxy": "ChapterBlocksProducer_Run_Proxy",
"./proxys/ChapterBlocksProducer_TouchDot_Proxy": "ChapterBlocksProducer_TouchDot_Proxy"
} ],
ChapterBlocksProducer_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "34093BVX5xHB5Wv8EJmtGE1", "ChapterBlocksProducer_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../scripts/base/ui/UI"), u = t("../../../../../../scripts/falcon/EventManager"), h = t("../../../../../../scripts/falcon/Proxy"), f = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), d = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducer"), y = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), m = t("../../../../../../scripts/modules/board/vo/BoardInfo"), _ = t("../../../../../../scripts/modules/prefab/PrefabConfig"), v = t("../../algorithm/vo/ChapterAlgorithmInfo"), g = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run"), C = t("../../board/events/E_ChapterBoard_CanPutValidateStart"), b = t("../../board/events/E_ChapterBoard_Render"), P = t("../../colorProducer/vo/ChapterColorProducerGameInfo"), S = t("../../game/components/ChapterGame"), I = t("../vo/ChapterBlocksProducerInfo"), T = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ y.E_BlocksProducer_TouchEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case y.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
}
};
e.prototype.onTouchEnd = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o;
return c(this, function() {
e = t.state, r = e.clearProducer, o = e.clearScreen;
r && this.requestBlocksProducer({
clearScreen: o,
strategyState: f.ALGO_STRATEGY_TYPE.DEFAULT
});
return [ 2 ];
});
});
};
e.prototype.requestBlocksProducer = function(t) {
var e = this;
u.EventManager.dispatchModuleEvent(new g.E_ChapterAlgorithmStrategy_Run({
strategyState: t.strategyState,
callback: function() {
e.renderUpdate(t);
u.EventManager.dispatchModuleEvent(new C.E_ChapterBoard_CanPutValidateStart());
}
}));
};
e.prototype.updateBlocksProducerState = function(t, e, r) {
return i(this, void 0, void 0, function() {
var o, a;
return c(this, function(n) {
switch (n.label) {
case 0:
return [ 4, CinstAsync(S.default) ];

case 1:
o = n.sent();
a = o.blocksProducerContainer;
return [ 4, l.UI.show(_.PrefabConfig.BlockProducer, a) ];

case 2:
n.sent().getComponent(d.default).setState({
producerBlocks: t,
colors: e,
itemsColors: r
});
return [ 2 ];
}
});
});
};
e.prototype.renderUpdate = function(t) {
t.clearScreen && u.EventManager.dispatchModuleEvent(new b.E_ChapterBoard_Render(m.boardInfo.NULL));
var e = v.chapterAlgorithmInfo.blockIdList;
if (e && 0 !== e.length) {
p.storage.setItem("chapterProducerBlocks", e);
var r = P.chapterColorProducerGameInfo.colorList, o = I.chapterBlocksProducerInfo.getItemColors();
this.updateBlocksProducerState(e, r, o);
}
};
n([ s.trait("AlloBlockStateTrait") ], e.prototype, "onTouchEnd", null);
return n([ classId("ChapterBlocksProducer_Proxy") ], e);
}(h.Proxy);
r.ChapterBlocksProducer_Proxy = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducer": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run": "E_ChapterAlgorithmStrategy_Run",
"../../board/events/E_ChapterBoard_CanPutValidateStart": "E_ChapterBoard_CanPutValidateStart",
"../../board/events/E_ChapterBoard_Render": "E_ChapterBoard_Render",
"../../colorProducer/vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo",
"../../game/components/ChapterGame": "ChapterGame",
"../vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo"
} ],
ChapterBlocksProducer_Render_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2cb55Yxhj9GBa5rIJHot1H0", "ChapterBlocksProducer_Render_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_Render_Proxy = void 0;
var c = t("../../../../../../scripts/falcon/EventManager"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../scripts/base/ui/UI"), u = t("../../../../../../scripts/modules/prefab/PrefabConfig"), h = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducer"), f = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run"), d = t("../../colorProducer/vo/ChapterColorProducerGameInfo"), y = t("../../algorithm/vo/ChapterAlgorithmInfo"), m = t("../../game/components/ChapterGame"), _ = t("../vo/ChapterBlocksProducerInfo"), v = t("../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Render"), g = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ v.E_AlgorithmStrategy_Render ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case v.E_AlgorithmStrategy_Render:
this.onAlgorithmGm(t);
}
};
e.prototype.onAlgorithmGm = function(t) {
var e = this;
c.EventManager.dispatchModuleEvent(new f.E_ChapterAlgorithmStrategy_Run({
strategyState: t.option.type,
callback: function() {
var t = y.chapterAlgorithmInfo.blockIdList;
p.storage.setItem("chapterProducerBlocks", t);
e.updateBlocksProducerState(t, d.chapterColorProducerGameInfo.colorList);
}
}));
};
e.prototype.updateBlocksProducerState = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, a, n, c;
return i(this, function(i) {
switch (i.label) {
case 0:
return [ 4, CinstAsync(m.default) ];

case 1:
r = i.sent();
o = r.blocksProducerContainer;
return [ 4, l.UI.show(u.PrefabConfig.BlockProducer, o) ];

case 2:
a = i.sent();
n = a.getComponent(h.default);
c = _.chapterBlocksProducerInfo.getItemColors();
n.setState({
producerBlocks: t,
colors: e,
itemsColors: c
});
return [ 2 ];
}
});
});
};
return e;
}(s.Proxy);
r.ChapterBlocksProducer_Render_Proxy = g;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Render": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducer": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run": "E_ChapterAlgorithmStrategy_Run",
"../../colorProducer/vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo",
"../../game/components/ChapterGame": "ChapterGame",
"../vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo"
} ],
ChapterBlocksProducer_Revive_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ce76dMgj3tNf6LqVWWNYI8s", "ChapterBlocksProducer_Revive_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_Revive_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), p = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), l = t("../../../../../../scripts/modules/boardSplashAnimation/components/BoardSplashAnimation"), u = t("../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType"), h = t("../../../../../../scripts/modules/revive/events/E_Revive_Success"), f = t("./ChapterBlocksProducer_Proxy"), d = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ h.E_Revive_Success ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case h.E_Revive_Success:
this.onReviveSuccess();
}
};
e.prototype.onReviveSuccess = function() {
var t = Cinst(p.default);
t && t.onTouchActivation();
var e = Cinst(l.default);
e && e.setState({
type: u.BoardSplashAnimationPlayType.RESET
});
this.getModule().getProxy(f.ChapterBlocksProducer_Proxy).requestBlocksProducer({
clearScreen: !1,
strategyState: s.ALGO_STRATEGY_TYPE.REVIVE
});
};
n([ i.trait("IsOpenSolveDifficultProblemsAmazingTrait", "解决困难难题用时超过10.3秒，成功解题后播放激励词动画&音效") ], e.prototype, "onReviveSuccess", null);
return n([ classId("ChapterBlocksProducer_Revive_Proxy") ], e);
}(c.Proxy);
r.ChapterBlocksProducer_Revive_Proxy = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../scripts/modules/boardSplashAnimation/components/BoardSplashAnimation": void 0,
"../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Success": void 0,
"./ChapterBlocksProducer_Proxy": "ChapterBlocksProducer_Proxy"
} ],
ChapterBlocksProducer_RoundDot_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5d585TojlRAOoUBaorOh05G", "ChapterBlocksProducer_RoundDot_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_RoundDot_Proxy = void 0;
var c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), p = t("../../../../../../scripts/modules/board/vo/BoardInfo"), l = t("../../../../../../scripts/modules/game/type/GameType"), u = t("../../algorithm/vo/ChapterAlgorithmName"), h = t("../vo/ChapterBlocksProducerInfo"), f = t("../../game/vo/ChapterGameInfo"), d = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState"), y = t("../../algorithmStrategy/type/ChapterAlgorithmStrategyType"), m = t("../../dataStatistics/vo/ChapterDataStatisticsInfo"), _ = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), v = t("../../../../../../scripts/modules/binary/vo/BinarySupport"), g = t("../../collectionProducer/vo/ChapterCollectionProducerGameInfo"), C = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), b = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategySourceInfo"), P = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), S = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ d.E_ChapterAlgorithmStrategy_RunState ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_ChapterAlgorithmStrategy_RunState:
this.onAlgorithmStrategyRequest(t);
}
};
e.prototype.onAlgorithmStrategyRequest = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, a, n, c, d, S;
return i(this, function(i) {
switch (i.label) {
case 0:
e = t.option, r = e.runStateType, o = e.strategyState;
a = f.chapterGameInfo.gameNum, n = f.chapterGameInfo.roundNum, c = f.chapterGameInfo.stage, 
d = f.chapterGameInfo.chapterNum;
S = p.boardInfo.faceBlocks;
h.chapterBlocksProducerInfo.producerBlocks;
switch (r) {
case y.ChapterAlgorithmStrategyRunStateType.START:
return [ 3, 1 ];

case y.ChapterAlgorithmStrategyRunStateType.BLOCK:
return [ 3, 2 ];

case y.ChapterAlgorithmStrategyRunStateType.END:
return [ 3, 3 ];
}
return [ 3, 6 ];

case 1:
this.algorithmRunStartTime = Date.now();
m.chapterDataStatisticsInfo.deferredRunStateEndPromise.reset();
return [ 3, 6 ];

case 2:
this.algorithmRunBlockTime = Date.now();
return [ 3, 6 ];

case 3:
return m.chapterDataStatisticsInfo.deferredRunStateEndPromise.isResoved ? [ 3, 5 ] : [ 4, m.chapterDataStatisticsInfo.deferredRunStateEndPromise.wait() ];

case 4:
i.sent();
i.label = 5;

case 5:
if (o && o == C.ALGO_STRATEGY_TYPE.REVIVE) return [ 3, 6 ];
DC("game_get_block_end", {
weight: v.binarySupport.getWeightValue(p.boardInfo.faceBlocks),
game_type: l.GameType.Chapter,
game_id: a,
round_id: n,
matrix: S,
block_list: _.algorithmInfo.blockIdList,
cost_time: this.algorithmRunBlockTime - this.algorithmRunStartTime,
rec_strategy: s.OFFER_TYPE_STRINGS[u.chapterAlgorithmName.algoExpectedId],
rec_strategy_fact: u.chapterAlgorithmName.algoActualName,
travel_id: c,
travel_lv: d + 1,
block_list_detail: g.chapterCollectionProducerGameInfo.collectionList
}, [ {
class: "CTDotFirstClickDataGameEndTrait",
assign: function() {
return {};
}
}, {
class: "CTDotFirstClickDataGameEndTrait",
assign: function() {
return {
switch_strategy_list: b.algorithmStrategySourceInfo.getAllTraitNamesArray(),
actual_strategy_list: [ s.OFFER_TYPE_REAL_STRINGS[P.algorithmName.algoActualId] ],
callAlgorithmList: storage.getItem("chapterAlgorithmTripLists", []),
algorithmSourceList: storage.getItem("chapterAlgorithmSourceLists", [])
};
}
} ]);
return [ 3, 6 ];

case 6:
return [ 2 ];
}
});
});
};
return e;
}(c.Proxy);
r.ChapterBlocksProducer_RoundDot_Proxy = S;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategySourceInfo": void 0,
"../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../algorithm/vo/ChapterAlgorithmName": "ChapterAlgorithmName",
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState": "E_ChapterAlgorithmStrategy_RunState",
"../../algorithmStrategy/type/ChapterAlgorithmStrategyType": "ChapterAlgorithmStrategyType",
"../../collectionProducer/vo/ChapterCollectionProducerGameInfo": "ChapterCollectionProducerGameInfo",
"../../dataStatistics/vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo"
} ],
ChapterBlocksProducer_Round_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7e2b8dJI7NLo5T9czzQ3tQf", "ChapterBlocksProducer_Round_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_Round_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), l = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run"), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ l.E_ChapterAlgorithmStrategy_Run ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_ChapterAlgorithmStrategy_Run:
this.onAlgorithmStrategyRequest(t);
}
};
e.prototype.onAlgorithmStrategyRequest = function(t) {
if (t.option.strategyState !== p.ALGO_STRATEGY_TYPE.REVIVE) {
var e = c.storage.getItem("chapterRoundNum", 0);
c.storage.setItem("chapterRoundNum", e + 1);
}
};
n([ i.trait("IsOpenSolveDifficultProblemsAmazingTrait", "解决困难难题用时超过10.3秒，成功解题后播放激励词动画&音效") ], e.prototype, "onAlgorithmStrategyRequest", null);
return n([ classId("ChapterBlocksProducer_Round_Proxy") ], e);
}(s.Proxy);
r.ChapterBlocksProducer_Round_Proxy = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run": "E_ChapterAlgorithmStrategy_Run"
} ],
ChapterBlocksProducer_Run_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cd790DytoFN1ag/f7Z2YkKK", "ChapterBlocksProducer_Run_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_Run_Proxy = void 0;
var c = t("../../../../../../scripts/falcon/EventManager"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run"), l = t("../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Run"), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ l.E_AlgorithmStrategy_Run ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_AlgorithmStrategy_Run:
this.onAlgorithmRun(t);
}
};
e.prototype.onAlgorithmRun = function(t) {
return n(this, void 0, Promise, function() {
var e, r, o;
return i(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 2, , 3 ]);
o = t.callback, e = t.option;
r = this.createSafeCallback(o);
return [ 4, c.EventManager.dispatchModuleEventAsync(new p.E_ChapterAlgorithmStrategy_Run({
strategyState: null == e ? void 0 : e.type,
callback: r
})) ];

case 1:
a.sent();
return [ 3, 3 ];

case 2:
a.sent();
if ((o = t.callback) && "function" == typeof o) try {
o();
} catch (t) {}
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
e.prototype.createSafeCallback = function(t) {
return function() {
if (t && "function" == typeof t) try {
t();
} catch (t) {}
};
};
return e;
}(s.Proxy);
r.ChapterBlocksProducer_Run_Proxy = u;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Run": void 0,
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_Run": "E_ChapterAlgorithmStrategy_Run"
} ],
ChapterBlocksProducer_TouchDot_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "71509TRlQZDqr4kVLcRvF0q", "ChapterBlocksProducer_TouchDot_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBlocksProducer_TouchDot_Proxy = void 0;
var n = t("./../../../../../../scripts/falcon/ModuleManager"), i = t("../../../../../../scripts/falcon/EventManager"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), p = t("../../../../../../scripts/modules/game/vo/GameInfo"), l = t("../../../../../../scripts/modules/score/vo/ScoreInfo"), u = t("../../board/vo/ChapterBoardInfo"), h = t("../../game/vo/ChapterGameInfo"), f = t("../../score/vo/ChapterScoreInfo"), d = t("../vo/ChapterBlocksProducerInfo"), y = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), m = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
var t = this;
i.EventManager.onEventAllCompleted(n.ModuleType.Chapter, s.E_BlocksProducer_TouchEnd, function(e) {
t.onTouchEndDelay(e);
});
};
e.prototype.onTouchEndDelay = function(t) {
var e = t.state, r = e.touchIndex, o = e.touchBlockId, a = e.touchStartTime, n = e.putPos, i = e.eliminateCount, c = e.clearScreen, s = e.continuousEliminateTimes, m = e.movePosList, _ = e.collectItems, v = e.remainBlockProducerCount, g = e.eliminateCols, C = e.eliminateRows, b = p.gameInfo.gameType, P = h.chapterGameInfo.gameNum, S = h.chapterGameInfo.roundNum, I = h.chapterGameInfo.stage, T = h.chapterGameInfo.chapterNum, E = u.chapterBoardInfo.faceBlocks, O = d.chapterBlocksProducerInfo.producerBlocks, A = l.scoreInfo.score, R = f.chapterScoreInfo.computeAddScore({
putCount: n.length,
eliminateRowColCount: i,
continuousEliminateTimes: s
}), w = [ "a", "b", "c", "d", "e", "f", "g", "h" ], G = Object.keys(C).map(function(t) {
return w[t];
}).concat(Object.keys(g).map(function(t) {
return +t;
}));
DC("game_touchend_block_done", {
is_clean_screen: c ? 1 : 0,
click_rank_per_round: v,
positionArr: m,
last_click_time: a,
game_type: b,
game_id: P,
round_id: S,
travel_id: I,
travel_lv: T,
matrix: E,
block_id: o,
block_list: O,
index_id: r,
position: n && n.length ? [ n[0].x, n[0].y ] : [ 0, 0 ],
clean: G,
gain_score: A,
gain_score_per_done: R.addScore,
gain_item: _,
process: y.chapterConfigInfo.getChapterProgress()
});
};
return e;
}(c.Proxy);
r.ChapterBlocksProducer_TouchDot_Proxy = m;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../board/vo/ChapterBoardInfo": "ChapterBoardInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo",
"./../../../../../../scripts/falcon/ModuleManager": void 0
} ],
ChapterBoardInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "be2fa4RbI9F7aMXMn1+br/q", "ChapterBoardInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterBoardInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = t("../../../../../../scripts/modules/board/vo/BoardInfo"), n = function() {
function t() {}
Object.defineProperty(t.prototype, "faceBlocks", {
get: function() {
return o.storage.getItem("chapterFaceBlocks", a.boardInfo.NULL);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterBoardInfo = new n();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0
} ],
ChapterBoardSplashAnimation_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "44fd61ulGtOl7qfjWbiy4qh", "ChapterBoardSplashAnimation_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBoardSplashAnimation_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterBoardSplashAnimation_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterBoardSplashAnimation_Proxy ];
};
return e;
}(n.Module);
r.ChapterBoardSplashAnimation_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterBoardSplashAnimation_Proxy": "ChapterBoardSplashAnimation_Proxy"
} ],
ChapterBoardSplashAnimation_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b5fc9wgrHZJF5vWzxb3C8aG", "ChapterBoardSplashAnimation_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBoardSplashAnimation_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../game/components/ChapterGame"), p = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), l = t("../../../../../../scripts/modules/game/events/E_Game_Start"), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {};
e.prototype.registerEvents = function() {
return [ p.E_BlocksProducer_TouchEnd, l.E_Game_Start ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case p.E_BlocksProducer_TouchEnd:
this.onShowClearScreen(t);
break;

case l.E_Game_Start:
this.onGameStart(t);
}
};
e.prototype.onShowClearScreen = function(t) {
t.state.clearScreen && Cinst(s.default) && this.playBoardSplashAnimationForTraitOnly();
};
e.prototype.playBoardSplashAnimationForTraitOnly = function() {};
e.prototype.onGameStart = function() {};
n([ i.trait("FeatclearscreenbombTrait", "清盘动画方块爆发涌现，将分数上顶积分") ], e.prototype, "playBoardSplashAnimationForTraitOnly", null);
n([ i.trait("ClearComboAnimTrait", "清盘和combo和well done动效强化 新的一局清除动画") ], e.prototype, "onGameStart", null);
return n([ classId("ChapterBoardSplashAnimation_Proxy") ], e);
}(c.Proxy);
r.ChapterBoardSplashAnimation_Proxy = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../game/components/ChapterGame": "ChapterGame"
} ],
ChapterBoard_CanPutValidate_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8108fn7XsVDp6sgi7jLwYdv", "ChapterBoard_CanPutValidate_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBoard_CanPutValidate_Proxy = void 0;
var c = t("../../../../../../scripts/falcon/EventManager"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), l = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), u = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre"), h = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), f = t("../events/E_ChapterBoard_CanPutValidateStart"), d = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ f.E_ChapterBoard_CanPutValidateStart ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case f.E_ChapterBoard_CanPutValidateStart:
this.onChapterBoardCanPutValidate();
}
};
e.prototype.onChapterBoardCanPutValidate = function() {
return n(this, void 0, void 0, function() {
var t, e;
return i(this, function() {
if (h.gameOverGameInfo.chapterTriggerGameOver) return [ 2 ];
if (l.chapterConfigInfo.canAchievedGoal()) {
(t = Cinst(p.default)) && t.setMaskActive(!0);
c.EventManager.dispatchModuleEvent(new u.E_GameOver_GameEndPre({
win: !0
}));
return [ 2 ];
}
(e = Cinst(p.default)) && e.computeRemainBlocksCanPut();
return [ 2 ];
});
});
};
return e;
}(s.Proxy);
r.ChapterBoard_CanPutValidate_Proxy = d;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../events/E_ChapterBoard_CanPutValidateStart": "E_ChapterBoard_CanPutValidateStart"
} ],
ChapterBoard_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a8b9chZLQRM37vpeXAzvI5V", "ChapterBoard_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBoard_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterBoard_CanPutValidate_Proxy"), c = t("./proxys/ChapterBoard_Proxy"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ c.ChapterBoard_Proxy, i.ChapterBoard_CanPutValidate_Proxy ];
};
return e;
}(n.Module);
r.ChapterBoard_Module = s;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterBoard_CanPutValidate_Proxy": "ChapterBoard_CanPutValidate_Proxy",
"./proxys/ChapterBoard_Proxy": "ChapterBoard_Proxy"
} ],
ChapterBoard_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "dd14aurxk9HsZXFhNKhrLVr", "ChapterBoard_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterBoard_Proxy = void 0;
var c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/board/components/Board"), l = t("../../../../../../scripts/modules/board/events/E_Board_GmRender"), u = t("../events/E_ChapterBoard_Render"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ u.E_ChapterBoard_Render, l.E_Board_GmRender ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case u.E_ChapterBoard_Render:
this.onBoardRender(t);
break;

case l.E_Board_GmRender:
this.onBoardGmRender(t);
}
};
e.prototype.onBoardRender = function(t) {
Cinst(p.default).setState({
boards: t.boards
});
c.storage.setItem("chapterFaceBlocks", t.boards);
};
e.prototype.onBoardGmRender = function(t) {
return n(this, void 0, void 0, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
return [ 4, CinstAsync(p.default) ];

case 1:
e.sent().setState({
boards: t.boards
});
c.storage.setItem("chapterFaceBlocks", t.boards);
return [ 2 ];
}
});
});
};
return e;
}(s.Proxy);
r.ChapterBoard_Proxy = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../scripts/modules/board/events/E_Board_GmRender": void 0,
"../events/E_ChapterBoard_Render": "E_ChapterBoard_Render"
} ],
ChapterChapterListScreenshotInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c35804C2zhFroY6D5eAkNrf", "ChapterChapterListScreenshotInfo");
var o = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterChapterListScreenshotInfo = void 0;
var n = function() {
function t() {}
t.prototype.createScreenshotNode = function(t, e) {
var r = new cc.Node("Screenshot");
r.addComponent(cc.Sprite).spriteFrame = t;
r.width = t.getRect().width;
r.height = t.getRect().height;
e && e.addChild(r);
return r;
};
t.prototype.captureNode = function(t, e) {
void 0 === e && (e = {});
return o(this, void 0, Promise, function() {
var r = this;
return a(this, function() {
return [ 2, new Promise(function(o, a) {
try {
if (!t || !t.isValid) {
a(new Error("Invalid node for screenshot"));
return;
}
var n = {
width: e.width || t.width,
height: e.height || t.height,
scale: e.scale || 1,
quality: e.quality || .9,
format: e.format || "png",
transparent: !1 !== e.transparent,
backgroundColor: e.backgroundColor || cc.Color.WHITE,
disableMask: !1 !== e.disableMask
}, i = Math.floor(n.width * n.scale), c = Math.floor(n.height * n.scale), s = new cc.RenderTexture();
s.initWithSize(i, c, cc.RenderTexture.DepthStencilFormat.RB_FMT_D24S8);
var p = new cc.Node("TempScreenshotCamera"), l = p.addComponent(cc.Camera);
l.clearFlags = n.transparent ? cc.Camera.ClearFlags.DEPTH : cc.Camera.ClearFlags.COLOR | cc.Camera.ClearFlags.DEPTH;
l.backgroundColor = n.backgroundColor;
l.cullingMask = 4294967295;
l.targetTexture = s;
var u = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
p.position = cc.v3(u.x, u.y, 1e3);
l.orthoSize = Math.max(n.height, n.width) / 2;
var h = cc.director.getScene();
h.addChild(p);
var f = n.disableMask ? t.getComponentsInChildren(cc.Mask) : [], d = [];
n.disableMask && f.forEach(function(t, e) {
d[e] = t.enabled;
t.enabled = !1;
});
var y = t.active, m = t.opacity;
t.active = !0;
t.opacity = 255;
try {
l.render(h);
} finally {
t.active = y;
t.opacity = m;
n.disableMask && f.forEach(function(t, e) {
t && t.isValid && (t.enabled = d[e]);
});
}
p.removeFromParent();
p.destroy();
r._processRenderTexture(s, n).then(o).catch(a);
} catch (t) {
a(t);
}
}) ];
});
});
};
t.prototype._processRenderTexture = function(t) {
return o(this, void 0, Promise, function() {
var e = this;
return a(this, function() {
return [ 2, new Promise(function(r, o) {
try {
var a = null;
try {
a = t.readPixels();
} catch (t) {
o(new Error("Failed to read pixels from render texture"));
return;
}
if (!a) {
o(new Error("Failed to read pixels from render texture"));
return;
}
var n = e._flipVertical(a, t.width, t.height);
if (!n) {
o(new Error("Failed to flip vertical"));
return;
}
var i = new cc.Texture2D();
i.initWithData(n, cc.Texture2D.PixelFormat.RGBA8888, t.width, t.height);
var c = new cc.SpriteFrame();
c.setTexture(i);
t.destroy();
r({
spriteFrame: c,
texture: i,
width: t.width,
height: t.height
});
} catch (t) {
o(t);
}
}) ];
});
});
};
t.prototype._flipVertical = function(t, e, r) {
try {
for (var o = 4 * e, a = Math.floor(r / 2), n = new Uint8Array(o), i = 0; i < a; i++) {
var c = i * o, s = (r - i - 1) * o;
n.set(t.subarray(c, c + o));
t.set(t.subarray(s, s + o), c);
t.set(n, s);
}
return t;
} catch (t) {
return null;
}
};
return t;
}();
r.chapterChapterListScreenshotInfo = new n();
cc._RF.pop();
}, {} ],
ChapterCollectEffectItem: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4e2df4Uy29O5YJRp6nNS96z", "ChapterCollectEffectItem");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Gems103Light = null;
e.Gems103H = null;
e.Gems103Big = null;
e.bone = null;
e.gems = null;
return e;
}
e.prototype.render = function() {
var t, e = this.state, r = e.playAnimation, o = e.color, a = e.showLight;
r && (null === (t = this.bone) || void 0 === t || t.playAnimation("HS_2", 1));
if (void 0 !== o) {
this.Gems103H.spriteFrame = this.gems.getSpriteFrame("Gems" + o + "H");
this.Gems103Big.spriteFrame = this.gems.getSpriteFrame("Gems" + o + "Big");
}
if (a) {
this.Gems103Light.spriteFrame = this.gems.getSpriteFrame("Gems" + o + "Light");
this.Gems103Light.node.active = !0;
} else this.Gems103Light.node.active = !1;
};
n([ p(cc.Sprite) ], e.prototype, "Gems103Light", void 0);
n([ p(cc.Sprite) ], e.prototype, "Gems103H", void 0);
n([ p(cc.Sprite) ], e.prototype, "Gems103Big", void 0);
n([ p(dragonBones.ArmatureDisplay) ], e.prototype, "bone", void 0);
n([ p(cc.SpriteAtlas) ], e.prototype, "gems", void 0);
return n([ s ], e);
}(i.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0
} ],
ChapterCollectEndItem: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cbdb4QqgAhC6Z8CvM8TsZT6", "ChapterCollectEndItem");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gemImg = null;
e.boneAni = null;
e.atlas = null;
return e;
}
e.prototype.render = function() {
var t, e;
this.gemImg.spriteFrame = this.atlas.getSpriteFrame("Gems" + this.state.color + "Big");
var r = null !== (t = this.state.position) && void 0 !== t ? t : this.boneAni.node.position;
this.boneAni.node.setPosition(r);
this.boneAni.playAnimation("" + this.state.color, 1);
var o = null !== (e = this.state.scale) && void 0 !== e ? e : this.gemImg.node.scale;
this.gemImg.node.scale = o;
this.state.position && this.gemImg.node.setPosition(this.state.position);
};
e.prototype.reset = function() {
this.gemImg.spriteFrame = null;
};
n([ p(cc.Sprite) ], e.prototype, "gemImg", void 0);
n([ p(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni", void 0);
n([ p(cc.SpriteAtlas) ], e.prototype, "atlas", void 0);
return n([ s ], e);
}(i.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0
} ],
ChapterCollectEndPool: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5b6f26cVj9OG6jOYNqOpupP", "ChapterCollectEndPool");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, a = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterCollectEndPool = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorMemoize"), c = t("../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../scripts/base/pool/ObjectPool"), p = t("../config/ChapterCollectItemCfg"), l = function() {
function t() {
this.pool = null;
}
t.prototype.init = function() {
this.pool = new s.ObjectPool(this.create, this.reset, {
size: 10
});
};
t.prototype.create = function() {
return a(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
t = null;
return [ 4, c.ResLoader.asyncLoadByBundle("chapter", p.endItemPath, cc.Prefab).then(function(e) {
t = cc.instantiate(e);
}) ];

case 1:
e.sent();
return [ 2, t ];
}
});
});
};
t.prototype.reset = function(t) {
t.parent = null;
var e = t.getComponent("ChapterCollectEndItem");
e && e.reset();
};
t.prototype.getNode = function() {
this.pool || this.init();
return this.pool.get();
};
t.prototype.release = function(t) {
this.reset(t);
this.pool && this.pool.release(t);
};
t.prototype.clear = function() {
this.pool && this.pool.clear();
};
o([ i.memoize ], t.prototype, "init", null);
return t;
}();
r.chapterCollectEndPool = new l();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorMemoize": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/pool/ObjectPool": void 0,
"../config/ChapterCollectItemCfg": "ChapterCollectItemCfg"
} ],
ChapterCollectFail: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d9ba2bAAN1Kbb+S71F+Gvpk", "ChapterCollectFail");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../scripts/base/components/Component"), l = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), u = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), h = t("../../../../../../scripts/base/decorators/DecoratorTrait"), f = t("../../../../../../scripts/falcon/EventManager"), d = t("../../../../../../scripts/modules/audio/config/AudioConfig"), y = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), m = t("../../audio/config/ChapterAudioConfig"), _ = t("../../collectItem/components/ChapterCollectEndItem"), v = t("../../collectItem/components/ChapterCollectTopItem"), g = t("../../collectItem/config/ChapterCollectItemCfg"), C = t("../../collectItem/pools/ChapterCollectEndPool"), b = t("../../collectItem/pools/ChapterCollectTopPool"), P = t("../../gameOver/events/E_ChapterGameOver_ShowFinish"), S = t("../../gameOver/type/ChapterGameOverType"), I = t("../events/E_ChapterFail_Hide"), T = cc._decorator, E = T.ccclass, O = T.property, A = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.collectImg = null;
e.boneAni = null;
e.collectItemNode = null;
e.playBtn = null;
e.backBtn = null;
e.boneAni_1 = null;
e.endItems = [];
e.topItems = [];
return e;
}
e.prototype.onLoad = function() {
this.collectImg.y = 130;
};
e.prototype.onDisable = function() {
this.collectImg.active = this.boneAni.node.active = this.backBtn.node.active = this.backBtn.node.active = !1;
for (var t = 0; t < this.endItems.length; t++) C.chapterCollectEndPool.release(this.endItems[t]);
for (t = 0; t < this.topItems.length; t++) b.chapterCollectTopPool.release(this.topItems[t]);
this.endItems = [];
this.topItems = [];
};
e.prototype.render = function() {
this.resetBtnState();
this.showAction();
};
e.prototype.resetBtnState = function() {
this.backBtn.node.active = !1;
this.backBtn.node.scale = 0;
this.playBtn.node.active = !1;
this.playBtn.node.scale = 0;
cc.isValid(this.boneAni_1) && (this.boneAni_1.node.active = !1);
};
e.prototype.showAction = function() {
var t = this;
setTimeoutSafe(function() {
t.changeUI();
}, 100);
cc.tween(this.node).delay(.57).call(function() {
t.collectImg.active = !0;
t.collectImg.opacity = 0;
cc.tween(t.collectImg).to(.33, {
opacity: 255
}).start();
}).delay(.33).call(function() {
if (t.state.isShowDefTip) {
if (cc.isValid(t.boneAni_1)) {
t.boneAni_1.node.active = !0;
t.boneAni_1.playAnimation("in", 1);
}
} else t.boneAni.node.active = !1;
t.showOtherTraitAnim();
s.audioInfo.play(m.ChapterAudioConfig.travel_overui_collect_items);
t.addItem();
}).delay(1.1).call(function() {
t.showBtnAnim();
}).start();
};
e.prototype.showBtnAnim = function() {
var t = this;
this.backBtn.node.active = !0;
this.backBtn.node.scale = .6;
this.playBtn.node.active = !0;
this.playBtn.node.scale = .6;
s.audioInfo.play(d.AudioConfig.s_btnShow);
cc.tween(this.backBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.backBtn.interactable = !0;
}).start();
cc.tween(this.playBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.playBtn.interactable = !0;
}).start();
};
e.prototype.changeUI = function() {};
e.prototype.showOtherTraitAnim = function() {};
e.prototype.addItem = function() {
var t;
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i, s, p, l;
return c(this, function(c) {
switch (c.label) {
case 0:
if (!this.state.requiredCollections || !Array.isArray(this.state.requiredCollections)) return [ 2 ];
if (0 === (e = this.state.requiredCollections.length)) return [ 2 ];
r = -(g.endTopDistanceArr[e - 1] + 200) * (e - 1) / 2;
o = g.endTopDistanceArr[e - 1] + 200;
a = 0;
c.label = 1;

case 1:
if (!(a < e)) return [ 3, 6 ];
if (!(n = this.state.requiredCollections[a]) || "undefined" == typeof n.Key) return [ 3, 5 ];
i = n.Key;
return 0 == (s = (null === (t = this.state.remainCollect) || void 0 === t ? void 0 : t[i]) || 0) ? [ 3, 3 ] : [ 4, b.chapterCollectTopPool.getNode() ];

case 2:
p = c.sent();
(l = p.getComponent(v.default)) && l.setState({
color: Number(i),
remainCollectCount: s,
targetCount: n.Value || 0,
scale: 1,
position: cc.v2(0, 30)
});
p.x = r + o * a;
this.topItems.push(p);
p.setParent(null);
this.collectItemNode.addChild(p);
l && l.showNumLab();
return [ 3, 5 ];

case 3:
return [ 4, C.chapterCollectEndPool.getNode() ];

case 4:
p = c.sent();
(l = p.getComponent(_.default)) && l.setState({
color: Number(i),
scale: 1,
position: cc.v2(0, 30),
boneAniPosition: cc.v2(0, 30)
});
p.x = r + o * a;
this.endItems.push(p);
p.setParent(null);
this.collectItemNode.addChild(p);
c.label = 5;

case 5:
a++;
return [ 3, 1 ];

case 6:
return [ 2 ];
}
});
});
};
e.prototype.onClickPlay = function() {
this.clearView();
f.EventManager.dispatchModuleEvent(new I.E_ChapterFail_Hide({
gameOverType: S.GameOverType.CollectFail
}));
f.EventManager.dispatchModuleEvent(new P.E_ChapterGameOver_ShowFinish({
gameOverType: S.GameOverType.CollectFail
}));
};
e.prototype.onClickBack = function() {
this.clearView();
f.EventManager.dispatchModuleEvent(new I.E_ChapterFail_Hide({
gameOverType: S.GameOverType.CollectFail
}));
f.EventManager.dispatchModuleEvent(new y.E_Game_BackHome());
};
e.prototype.clearView = function() {
this.resetBtnState();
this.endItems = [];
this.topItems = [];
this.collectItemNode && this.collectItemNode.removeAllChildren();
};
n([ O(cc.Node) ], e.prototype, "collectImg", void 0);
n([ O(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni", void 0);
n([ O(cc.Node) ], e.prototype, "collectItemNode", void 0);
n([ O(cc.Button) ], e.prototype, "playBtn", void 0);
n([ O(cc.Button) ], e.prototype, "backBtn", void 0);
n([ O(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni_1", void 0);
n([ l.adapterFringe("backBtn") ], e.prototype, "onLoad", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "resetBtnState", null);
n([ h.trait("ReduceTravelSettlementTrait") ], e.prototype, "showAction", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "changeUI", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "showOtherTraitAnim", null);
n([ u.throttle(300), h.trait("IsOpenVibrateTrait", "点击开始按钮时触发震动") ], e.prototype, "onClickPlay", null);
n([ u.throttle(300), h.trait("IsOpenVibrateTrait", "点击返回按钮时触发震动") ], e.prototype, "onClickBack", null);
return n([ classId("ChapterCollectFail"), E ], e);
}(p.default);
r.default = A;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../collectItem/components/ChapterCollectEndItem": "ChapterCollectEndItem",
"../../collectItem/components/ChapterCollectTopItem": "ChapterCollectTopItem",
"../../collectItem/config/ChapterCollectItemCfg": "ChapterCollectItemCfg",
"../../collectItem/pools/ChapterCollectEndPool": "ChapterCollectEndPool",
"../../collectItem/pools/ChapterCollectTopPool": "ChapterCollectTopPool",
"../../gameOver/events/E_ChapterGameOver_ShowFinish": "E_ChapterGameOver_ShowFinish",
"../../gameOver/type/ChapterGameOverType": "ChapterGameOverType",
"../events/E_ChapterFail_Hide": "E_ChapterFail_Hide"
} ],
ChapterCollectInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7a9b2kYR8dB5b5kC8MeEcZQ", "ChapterCollectInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterCollectInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "collectRemainCollectItems", {
get: function() {
return o.storage.getItem("chapterCollectRemainCollectItems", {});
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "collectTotalCollectItems", {
get: function() {
return o.storage.getItem("chapterCollectTotalCollectItems", {});
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "remainCollections", {
get: function() {
var t = this.collectRemainCollectItems;
return Object.keys(t).map(function(e) {
return {
Key: +e,
Value: +t[e]
};
});
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "requiredCollections", {
get: function() {
var t = this.collectTotalCollectItems;
return Object.keys(t).map(function(e) {
return {
Key: +e,
Value: +t[e]
};
});
},
enumerable: !1,
configurable: !0
});
t.prototype.getRemainCollectNum = function(t) {
return this.collectRemainCollectItems[t];
};
t.prototype.getCollectTotalNum = function(t) {
return this.collectTotalCollectItems[t] || 0;
};
t.prototype.getAllCollectNum = function() {
var t = this, e = 0, r = this.collectTotalCollectItems;
Object.keys(r).map(function(r) {
e += t.getCollectTotalNum(+r) - t.getRemainCollectNum(+r);
});
return e;
};
Object.defineProperty(t.prototype, "collectTotalScore", {
get: function() {
return o.storage.getItem("chapterCollectTotalScore", 0);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterCollectInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterCollectItemCfg: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c4a98b6oOBFC5MeCcJgzdM7", "ChapterCollectItemCfg");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.endItemPath = r.topEffectItemPath = r.topItemPath = r.endTopDistanceArr = r.beginDistanceArr = r.topDistanceArr = void 0;
r.topDistanceArr = [ 0, 20, -55, -65, -75, -75, -75 ];
r.beginDistanceArr = [ 0, 50, 0, -25, -50, -50, -50 ];
r.endTopDistanceArr = [ 0, 0, 0, -20, -20, -20, -20 ];
r.topItemPath = "prefabs/collectItem/ChapterCollectTopItem";
r.topEffectItemPath = "prefabs/collectItem/ChapterCollectTopEffectItem";
r.endItemPath = "prefabs/collectItem/ChapterCollectEndItem";
cc._RF.pop();
}, {} ],
ChapterCollectItem_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "937a7rXTNBBiab6csBq7q2K", "ChapterCollectItem_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollectItem_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterCollectItem_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterCollectItem_Proxy ];
};
return e;
}(n.Module);
r.ChapterCollectItem_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterCollectItem_Proxy": "ChapterCollectItem_Proxy"
} ],
ChapterCollectItem_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "edb96CxdVNL8rjYBfkLxHAj", "ChapterCollectItem_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollectItem_Proxy = void 0;
var n = t("../../../../../../scripts/falcon/Proxy"), i = t("../pools/ChapterCollectEndPool"), c = t("../pools/ChapterCollectTopPool"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
c.chapterCollectTopPool.init();
i.chapterCollectEndPool.init();
};
return e;
}(n.Proxy);
r.ChapterCollectItem_Proxy = s;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/Proxy": void 0,
"../pools/ChapterCollectEndPool": "ChapterCollectEndPool",
"../pools/ChapterCollectTopPool": "ChapterCollectTopPool"
} ],
ChapterCollectScoreFixedTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ca7b9ZFvQhFnrJiKL+zWDoN", "ChapterCollectScoreFixedTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollectScoreFixedTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = t("../../game/vo/ChapterGameInfo"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isChapterScoreInfoComputeAddScoreForCollect(t) && p.chapterGameInfo.chapterCondition.Way == c.ChapterType.collect && (t.args[0] = this.props.score);
};
return n([ classId("ChapterCollectScoreFixedTrait") ], e);
}(i.Trait);
r.ChapterCollectScoreFixedTrait = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
ChapterCollectTopEffectItem: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9e5d1tOzUhLgob6cxpiNDJf", "ChapterCollectTopEffectItem");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gemBg = null;
e.gemImg = null;
e.lightImg = null;
e.flyAnim = null;
e.atlas = null;
return e;
}
e.prototype.render = function() {
this.gemBg.spriteFrame = this.atlas.getSpriteFrame("Gems" + this.state.color + "Bg");
this.gemImg.spriteFrame = this.atlas.getSpriteFrame("Gems" + this.state.color + "Big");
this.lightImg.spriteFrame = this.atlas.getSpriteFrame("Gems" + this.state.color + "Light");
this.playFlyAni();
};
e.prototype.playFlyAni = function() {
this.flyAnim.node.stopAllActions();
this.flyAnim.playAnimation("HS_2", 1);
};
e.prototype.reset = function() {
this.gemBg.spriteFrame = null;
this.gemImg.spriteFrame = null;
this.lightImg.spriteFrame = null;
};
n([ p(cc.Sprite) ], e.prototype, "gemBg", void 0);
n([ p(cc.Sprite) ], e.prototype, "gemImg", void 0);
n([ p(cc.Sprite) ], e.prototype, "lightImg", void 0);
n([ p(dragonBones.ArmatureDisplay) ], e.prototype, "flyAnim", void 0);
n([ p(cc.SpriteAtlas) ], e.prototype, "atlas", void 0);
return n([ s ], e);
}(i.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0
} ],
ChapterCollectTopEffectPool: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "19da5gL61lKi4yy7GDU3mXC", "ChapterCollectTopEffectPool");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, a = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterCollectTopEffectPool = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorMemoize"), c = t("../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../scripts/base/pool/ObjectPool"), p = t("../config/ChapterCollectItemCfg"), l = function() {
function t() {
this.pool = null;
}
t.prototype.init = function() {
this.pool = new s.ObjectPool(this.create, this.reset, {
size: 10
});
};
t.prototype.create = function() {
return a(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
t = null;
return [ 4, c.ResLoader.asyncLoadByBundle("chapter", p.topEffectItemPath, cc.Prefab).then(function(e) {
t = cc.instantiate(e);
}) ];

case 1:
e.sent();
return [ 2, t ];
}
});
});
};
t.prototype.reset = function(t) {
t.parent = null;
var e = t.getComponent("ChapterCollectTopEffectItem");
e && e.reset();
};
t.prototype.getNode = function() {
this.pool || this.init();
return this.pool.get();
};
t.prototype.release = function(t) {
this.reset(t);
this.pool && this.pool.release(t);
};
t.prototype.clear = function() {
this.pool && this.pool.clear();
};
o([ i.memoize ], t.prototype, "init", null);
return t;
}();
r.chapterCollectTopEffectPool = new l();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorMemoize": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/pool/ObjectPool": void 0,
"../config/ChapterCollectItemCfg": "ChapterCollectItemCfg"
} ],
ChapterCollectTopItem: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a6d40P1rQBBjIOWeF2+uoDu", "ChapterCollectTopItem");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = t("../../../../../../scripts/modules/native/NativeVibrator"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gemBg = null;
e.gemImg = null;
e.numLab = null;
e.lightImg = null;
e.lightAnim = null;
e.finishAnim = null;
e.atlas = null;
return e;
}
e.prototype.onEnable = function() {
this.numLab.node.active = !1;
this.finishAnim.node.active = !1;
};
e.prototype.render = function() {
var t, e, r = this.state, o = r.color, a = r.remainCollectCount;
this.gemBg.spriteFrame = this.atlas.getSpriteFrame("Gems" + o + "Bg");
this.gemImg.spriteFrame = this.atlas.getSpriteFrame("Gems" + o + "Big");
this.lightImg.spriteFrame = this.atlas.getSpriteFrame("Gems" + o + "Light");
var n = Math.max(a, 0);
this.numLab.string = "" + n;
this.gemImg.node.scale = null !== (t = this.state.scale) && void 0 !== t ? t : this.gemImg.node.scale;
this.gemImg.node.setPosition(null !== (e = this.state.position) && void 0 !== e ? e : this.gemImg.node.position);
};
e.prototype.showNumLab = function() {
this.numLab.node.active = !0;
};
e.prototype.playAction = function() {
var t = this.state, e = t.remainCollectCount, r = (t.targetCount, t.showMoveAnim), o = Math.max(e, 0);
this.numLab.node.active = o > 0;
this.finishAnim.node.active = 0 === o;
0 == e && this.finishAnim.playAnimation("newAnimation", 1);
if (r && e >= 0) {
this.numLab.node.scale = .25;
cc.tween(this.numLab.node).to(.1, {
scale: .6
}).to(.1, {
scale: .5
}).start();
this.gemImg.node.scale = .7;
cc.tween(this.gemImg.node).to(.1, {
scale: 1.15 * .7
}).to(.1, {
scale: .7
}).start();
this.playLightAni();
}
};
e.prototype.playLightAni = function() {
this.lightAnim.node.stopAllActions();
this.lightAnim.node.angle += 90;
this.lightAnim.node.active = !0;
this.lightAnim.playAnimation("HS_yellow", 1);
this.lightImg.node.stopAllActions();
this.lightImg.node.opacity = 255;
cc.tween(this.lightImg.node).delay(.2).to(.2, {
opacity: 0
}).start();
c.NativeVibrator.vibrateByType(9);
};
n([ l(cc.Sprite) ], e.prototype, "gemBg", void 0);
n([ l(cc.Sprite) ], e.prototype, "gemImg", void 0);
n([ l(cc.Label) ], e.prototype, "numLab", void 0);
n([ l(cc.Sprite) ], e.prototype, "lightImg", void 0);
n([ l(dragonBones.ArmatureDisplay) ], e.prototype, "lightAnim", void 0);
n([ l(dragonBones.ArmatureDisplay) ], e.prototype, "finishAnim", void 0);
n([ l(cc.SpriteAtlas) ], e.prototype, "atlas", void 0);
return n([ p ], e);
}(i.default);
r.default = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/modules/native/NativeVibrator": void 0
} ],
ChapterCollectTopPool: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "41028uh3kRD3oOpnggQlgk2", "ChapterCollectTopPool");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, a = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterCollectTopPool = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorMemoize"), c = t("../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../scripts/base/pool/ObjectPool"), p = t("../config/ChapterCollectItemCfg"), l = function() {
function t() {
this.pool = null;
}
t.prototype.init = function() {
this.pool = new s.ObjectPool(this.create, this.reset, {
size: 10
});
};
t.prototype.create = function() {
return a(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
t = null;
return [ 4, c.ResLoader.asyncLoadByBundle("chapter", p.topItemPath, cc.Prefab).then(function(e) {
t = cc.instantiate(e);
}) ];

case 1:
e.sent();
return [ 2, t ];
}
});
});
};
t.prototype.reset = function(t) {
t.parent = null;
var e = t.getComponent("ChapterCollectItem");
e && e.reset();
};
t.prototype.getNode = function() {
this.pool || this.init();
return this.pool.get();
};
t.prototype.release = function(t) {
this.reset(t);
this.pool && this.pool.release(t);
};
t.prototype.clear = function() {
this.pool && this.pool.clear();
};
o([ i.memoize ], t.prototype, "init", null);
return t;
}();
r.chapterCollectTopPool = new l();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorMemoize": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/pool/ObjectPool": void 0,
"../config/ChapterCollectItemCfg": "ChapterCollectItemCfg"
} ],
ChapterCollectWin: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e0f9dBl1txJ1pg4gaWUbDJM", "ChapterCollectWin");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../scripts/base/components/Component"), l = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), u = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), h = t("../../../../../../scripts/base/decorators/DecoratorTrait"), f = t("../../../../../../scripts/base/loader/ResLoader"), d = t("../../../../../../scripts/falcon/EventManager"), y = t("../../../../../../scripts/modules/audio/config/AudioConfig"), m = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), _ = t("../../audio/config/ChapterAudioConfig"), v = t("../../chapterList/events/E_ChapterList_Show"), g = t("../../collectItem/components/ChapterCollectEndItem"), C = t("../../collectItem/config/ChapterCollectItemCfg"), b = t("../../gameOver/events/E_ChapterGameOver_ShowFinish"), P = t("../../gameOver/type/ChapterGameOverType"), S = t("../events/E_ChapterWin_Hide"), I = cc._decorator, T = I.ccclass, E = I.property, O = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.collectImg = null;
e.collectItemNode = null;
e.boneAni = null;
e.playBtn = null;
e.backBtn = null;
e.scoreEffectBoneAni = null;
e._cacheCollectItems = [];
return e;
}
e.prototype.onLoad = function() {};
e.prototype.getBtnRes = function() {
return f.ResLoader.asyncLoadByBundle("chapter", this.state.btnPath, cc.SpriteFrame);
};
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t, e;
return c(this, function(r) {
switch (r.label) {
case 0:
if (!(t = this.playBtn.node.getComponent(cc.Sprite))) return [ 3, 2 ];
e = t;
return [ 4, this.getBtnRes() ];

case 1:
e.spriteFrame = r.sent();
r.label = 2;

case 2:
this.resetBtnState();
this.showAction();
return [ 2 ];
}
});
});
};
e.prototype.resetBtnState = function() {
cc.isValid(this.scoreEffectBoneAni) && (this.scoreEffectBoneAni.node.active = !1);
this.boneAni.node.active = !1;
this.collectItemNode.removeAllChildren();
this.collectImg.active = !1;
this.backBtn.node.active = !1;
this.playBtn.node.active = !1;
this.backBtn.node.scale = 0;
this.playBtn.node.scale = 0;
};
e.prototype.showAction = function() {
var t = this;
this.boneAni.node.active = !0;
this.boneAni.playAnimation("newAnimation", 1);
setTimeoutSafe(function() {
t.changeUI();
}, 100);
s.audioInfo.play(_.ChapterAudioConfig.travel_win_logo);
cc.tween(this.node).delay(.57).call(function() {
t.collectImg.active = !0;
t.collectImg.opacity = 0;
cc.tween(t.collectImg).to(.33, {
opacity: 255
}).start();
}).delay(.33).call(function() {
t.showOtherTraitAnim();
s.audioInfo.play(_.ChapterAudioConfig.travel_overui_collect_items);
t.addItem();
}).delay(1.1).call(function() {
t.showBtnAnim();
}).start();
};
e.prototype.showBtnAnim = function() {
var t = this;
this.backBtn.node.active = !0;
this.backBtn.node.scale = .6;
this.playBtn.node.active = !0;
this.playBtn.node.scale = .6;
s.audioInfo.play(y.AudioConfig.s_btnShow);
cc.tween(this.backBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.backBtn.interactable = !0;
}).start();
cc.tween(this.playBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.playBtn.interactable = !0;
}).start();
};
e.prototype.changeUI = function() {};
e.prototype.showOtherTraitAnim = function() {};
e.prototype.addItem = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o, a, n, i, s, p = this;
return c(this, function(l) {
switch (l.label) {
case 0:
t = this.state.requiredCollections;
e = t.length;
r = -(C.endTopDistanceArr[e - 1] + 200) * (e - 1) / 2;
o = C.endTopDistanceArr[e - 1] + 200;
a = this.state.delayInterval;
n = function(e) {
var n, s, l;
return c(this, function(c) {
switch (c.label) {
case 0:
n = t[e].Key;
return i._cacheCollectItems[e] ? [ 3, 2 ] : [ 4, f.ResLoader.asyncLoadByBundle("chapter", C.endItemPath, cc.Prefab) ];

case 1:
l = c.sent();
s = cc.instantiate(l);
i._cacheCollectItems[e] = {
color: +n,
node: s
};
return [ 3, 3 ];

case 2:
i._cacheCollectItems[e].color = +n;
s = i._cacheCollectItems[e].node;
c.label = 3;

case 3:
cc.tween(s).delay(a * e).call(function() {
var t = s.getComponent(g.default);
t && t.setState({
color: +n
});
s.x = r + o * e;
s.setParent(null);
p.collectItemNode.addChild(s);
}).start();
return [ 2 ];
}
});
};
i = this;
s = 0;
l.label = 1;

case 1:
return s < e ? [ 5, n(s) ] : [ 3, 4 ];

case 2:
l.sent();
l.label = 3;

case 3:
s++;
return [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.onClickPlay = function() {
this.resetBtnState();
if (this.state.throughAll) this.onCompleteGame(); else {
d.EventManager.dispatchModuleEvent(new S.E_ChapterWin_Hide({
gameOverType: P.GameOverType.CollectWin
}));
d.EventManager.dispatchModuleEvent(new b.E_ChapterGameOver_ShowFinish({
gameOverType: P.GameOverType.CollectWin
}));
}
};
e.prototype.onCompleteGame = function() {
d.EventManager.dispatchModuleEvent(new v.E_ChapterList_Show({}));
};
e.prototype.onClickBack = function() {
this.resetBtnState();
d.EventManager.dispatchModuleEvent(new S.E_ChapterWin_Hide({
gameOverType: P.GameOverType.CollectWin
}));
d.EventManager.dispatchModuleEvent(new m.E_Game_BackHome());
};
n([ E(cc.Node) ], e.prototype, "collectImg", void 0);
n([ E(cc.Node) ], e.prototype, "collectItemNode", void 0);
n([ E(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni", void 0);
n([ E(cc.Button) ], e.prototype, "playBtn", void 0);
n([ E(cc.Button) ], e.prototype, "backBtn", void 0);
n([ E(dragonBones.ArmatureDisplay) ], e.prototype, "scoreEffectBoneAni", void 0);
n([ l.adapterFringe("backBtn") ], e.prototype, "onLoad", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "resetBtnState", null);
n([ h.trait("ReduceTravelSettlementTrait") ], e.prototype, "showAction", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "changeUI", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "showOtherTraitAnim", null);
n([ u.throttle(300) ], e.prototype, "onClickPlay", null);
n([ h.trait("ReduceTravelSettlementTrait"), h.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 结算点击继续") ], e.prototype, "onCompleteGame", null);
n([ u.throttle(300) ], e.prototype, "onClickBack", null);
return n([ classId("ChapterCollectWin"), T ], e);
}(p.default);
r.default = O;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../chapterList/events/E_ChapterList_Show": "E_ChapterList_Show",
"../../collectItem/components/ChapterCollectEndItem": "ChapterCollectEndItem",
"../../collectItem/config/ChapterCollectItemCfg": "ChapterCollectItemCfg",
"../../gameOver/events/E_ChapterGameOver_ShowFinish": "E_ChapterGameOver_ShowFinish",
"../../gameOver/type/ChapterGameOverType": "ChapterGameOverType",
"../events/E_ChapterWin_Hide": "E_ChapterWin_Hide"
} ],
ChapterCollect_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "421cfW1M+ZAw6wgJOITdiAB", "ChapterCollect_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollect_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterCollect_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterCollect_Proxy ];
};
return e;
}(n.Module);
r.ChapterCollect_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterCollect_Proxy": "ChapterCollect_Proxy"
} ],
ChapterCollect_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f3d36A8ytZJjIlROEt+lvo5", "ChapterCollect_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollect_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/falcon/EventManager"), p = t("../../../../../../scripts/falcon/Proxy"), l = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), u = t("../../gameOver/vo/ChapterGameOverGameInfo"), h = t("../events/E_ChapterCollect_Reset"), f = t("../events/E_ChapterCollect_Update"), d = t("../type/CollectUpdateType"), y = t("../vo/ChapterCollectInfo"), m = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ h.E_ChapterCollect_Reset, l.E_BlocksProducer_TouchEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case h.E_ChapterCollect_Reset:
this.collectReset();
break;

case l.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
}
};
e.prototype.collectReset = function() {
u.chapterGameOverGameInfo._collectTotalInfo = y.chapterCollectInfo.collectTotalCollectItems;
u.chapterGameOverGameInfo._collectRemainInfo = y.chapterCollectInfo.collectRemainCollectItems;
u.chapterGameOverGameInfo._scoreTotal = y.chapterCollectInfo.collectTotalScore;
c.storage.setItem("chapterCollectRemainCollectItems", {});
c.storage.setItem("chapterCollectTotalCollectItems", {});
c.storage.setItem("chapterCollectTotalScore", {});
s.EventManager.dispatchModuleEvent(new f.E_ChapterCollect_Update({
type: d.CollectUpdateType.Reset
}));
};
e.prototype.onTouchEnd = function(t) {
var e = t.state.collectItems;
s.EventManager.dispatchModuleEvent(new f.E_ChapterCollect_Update({
type: d.CollectUpdateType.Add,
addNums: e
}));
};
n([ i.trait("TravelEasterEggTrait", "旅行处理消除行列里有彩蛋收集物"), i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化"), i.trait("PlacementBlocksEliminateEffectTrait", "放块全消除反馈 储存数据同步") ], e.prototype, "onTouchEnd", null);
return n([ classId("ChapterCollect_Proxy") ], e);
}(p.Proxy);
r.ChapterCollect_Proxy = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../gameOver/vo/ChapterGameOverGameInfo": "ChapterGameOverGameInfo",
"../events/E_ChapterCollect_Reset": "E_ChapterCollect_Reset",
"../events/E_ChapterCollect_Update": "E_ChapterCollect_Update",
"../type/CollectUpdateType": "CollectUpdateType",
"../vo/ChapterCollectInfo": "ChapterCollectInfo"
} ],
ChapterCollectionProducerGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7f6c4LXIx1E46NNCBFXtWT2", "ChapterCollectionProducerGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterCollectionProducerGameInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "collectionList", {
get: function() {
return o.storage.getItem("chapterCollectionLists", []);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterCollectionProducerGameInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterCollectionProducerITMDAInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "44644lMN9dFwpsyrMkCiVO2", "ChapterCollectionProducerITMDAInfo");
var o = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, a, n = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (a) throw a.error;
}
}
return i;
}, a = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterCollectionProducerITMDAInfo = void 0;
var n = t("../../../../../../scripts/modules/binary/vo/BinaryClip"), i = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), c = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), s = t("../../collect/vo/ChapterCollectInfo"), p = t("../../combo/vo/ChapterComboInfo"), l = t("./ChapterCollectionProducerGameInfo"), u = function() {
function t() {
this._local_key = "ReviveThreeTimesController";
this.need_key = [];
this.need_key_value = [];
}
Object.defineProperty(t.prototype, "local_data", {
get: function() {
this._local_data || (this._local_data = storage.getItem(this._local_key, {
numAddCollectBrick: 0,
numAddNextRound: 0,
isHasCollectionTargetNumMultiple: -1
}));
return this._local_data;
},
enumerable: !1,
configurable: !0
});
t.prototype.set = function(t, e) {
var r = this.local_data;
if (r[t] !== e) {
r[t] = e;
storage.setItem(this._local_key, r);
}
};
t.prototype.update = function(t) {
var e = !1, r = this.local_data;
Reflect.ownKeys(t).forEach(function(o) {
if (r[o] !== t[o]) {
r[o] = t[o];
e = !0;
}
});
e && storage.setItem(this._local_key, r);
};
t.prototype.clone = function() {
return Object.assign({}, this.local_data);
};
t.prototype.isCollectWay = function(t) {
var e, r;
return (null === (r = null === (e = this.__getChapterCfgData(t)) || void 0 === e ? void 0 : e.Condition) || void 0 === r ? void 0 : r.Way) === i.ChapterType.collect;
};
t.prototype.updateCollectInfos = function() {
var t = this;
this.need_key.splice(0, this.need_key.length);
this.need_key_value.splice(0, this.need_key_value.length);
var e = s.chapterCollectInfo.collectRemainCollectItems;
Reflect.ownKeys(e).forEach(function(r) {
var o = Reflect.get(e, r);
if (o > 0) {
t.need_key.push(Number(r));
t.need_key_value.push(o);
}
});
};
t.prototype.produceItemForAllBlocks = function(t) {
if (this.local_data.numAddCollectBrick <= 0) ; else if (!t || t.length < 3) ; else {
this.updateCollectInfos();
var e = this.clone();
if (1 == e.numAddCollectBrick) {
var r = Math.floor(Math.random() * t.length);
this.changeOneBlockInfo(t[r], r);
} else for (var o = 0; o < t.length && !(e.numAddCollectBrick <= 0); o++) {
this.changeOneBlockInfo(t[o], o);
e.numAddCollectBrick--;
}
e.numAddCollectBrick = 0;
this.update(e);
}
};
t.prototype.isBlockAllCollect = function(t, e) {
var r, o, a = null === (r = null === l.chapterCollectionProducerGameInfo || void 0 === l.chapterCollectionProducerGameInfo ? void 0 : l.chapterCollectionProducerGameInfo.collectionList) || void 0 === r ? void 0 : r[e];
if (!a) return !1;
var i = null === (o = n.default.getBlockArray(t)) || void 0 === o ? void 0 : o.coords;
if (!i || i.length <= 0) return !1;
for (var c = 0; c < i.length; c++) {
var s = a[c];
if (!s || s.Key < 100) return !1;
}
return !0;
};
t.prototype.changeOneBlockInfo = function(t, e) {
var r;
if (!this.need_key || !this.need_key_value || this.need_key.length !== this.need_key_value.length) return !1;
var o = null === l.chapterCollectionProducerGameInfo || void 0 === l.chapterCollectionProducerGameInfo ? void 0 : l.chapterCollectionProducerGameInfo.collectionList;
o || (o = []);
var i = this.need_key_value.indexOf(Math.max.apply(Math, a(this.need_key_value)));
if (i < 0 || this.need_key_value[i] <= 0) return !1;
var c = null === (r = n.default.getBlockArray(t)) || void 0 === r ? void 0 : r.coords;
if (!c || c.length <= 0) return !1;
for (var s = {}, p = 0; p < c.length; p++) s[p] = {
Key: this.need_key[i],
pos: p
};
o[e] = s;
storage.setItem("chapterCollectionLists", o);
return !0;
};
t.prototype.setTravelTargetCondition = function(t) {
var e;
if (!this.isCollectWay(t)) {
p.chapterComboInfo.setComboState(!1);
return null;
}
p.chapterComboInfo.setComboState(!0);
this.set("isHasCollectionTargetNumMultiple", t);
var r = this.__getChapterCfgData(t), o = null !== (e = c.chapterConfigInfo.getChapterOriginConfig(t)) && void 0 !== e ? e : r;
if (!(null == o ? void 0 : o.Condition) || !(null == r ? void 0 : r.Condition)) return null;
this.__cacheOriginChapterConfig(o);
r.Condition.RequiredCollections = o.Condition.RequiredCollections.map(function(t) {
var e = Object.assign({}, t);
e.Value = Math.ceil(2 * t.Value);
return e;
});
return r.Condition;
};
t.prototype.getOriginChapterConfig = function(t) {
var e = storage.getItem("ReviveThreeTimesController-OriginChapterConfig", null);
return Number(null == e ? void 0 : e.Num) === t + 1 ? e : null;
};
t.prototype.__getChapterCfgData = function(t) {
var e;
t = Number(t) + 1;
var r = c.chapterConfigInfo.chapterDatasCfg;
return r.length > 0 && null !== (e = r.find(function(e) {
return Number(null == e ? void 0 : e.Num) === t;
})) && void 0 !== e ? e : null;
};
t.prototype.__cacheOriginChapterConfig = function(t) {
var e = storage.getItem("ReviveThreeTimesController-OriginChapterConfig", null);
if ("undefined" != typeof (null == t ? void 0 : t.Num) && (null == e ? void 0 : e.Num) != t.Num) {
if (e) {
e.Num = Number(e.Num);
for (var r = 0; r < c.chapterConfigInfo.chapterDatasCfg.length; r++) if (Number(c.chapterConfigInfo.chapterDatasCfg[r].Num) === e.Num) {
c.chapterConfigInfo.chapterDatasCfg[r] = e;
break;
}
}
storage.setItem("ReviveThreeTimesController-OriginChapterConfig", t);
}
};
return t;
}();
r.chapterCollectionProducerITMDAInfo = new u();
cc._RF.pop();
}, {
"../../../../../../scripts/modules/binary/vo/BinaryClip": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../combo/vo/ChapterComboInfo": "ChapterComboInfo",
"./ChapterCollectionProducerGameInfo": "ChapterCollectionProducerGameInfo"
} ],
ChapterCollectionProducer_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "12bceV/VM1CjZEuG+PxIdjj", "ChapterCollectionProducer_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollectionProducer_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterCollectionProducer_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterCollectionProducer_Proxy ];
};
return e;
}(n.Module);
r.ChapterCollectionProducer_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterCollectionProducer_Proxy": "ChapterCollectionProducer_Proxy"
} ],
ChapterCollectionProducer_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "54a4bKzbPNFH7+dEIwG5OH2", "ChapterCollectionProducer_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, s = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCollectionProducer_Proxy = void 0;
var p = t("../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../scripts/base/storage/Storage"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo"), f = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), d = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchStart"), y = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), m = t("../../../../../../scripts/modules/collectionProducer/vo/CollectionProducerGameInfo"), _ = t("../../../../../../scripts/modules/game/events/E_Game_Replay"), v = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), g = t("../../../../../../scripts/modules/revive/events/E_Revive_Success"), C = t("../../algorithm/vo/ChapterAlgorithmInfo"), b = t("../../board/vo/ChapterBoardInfo"), P = t("../../collect/vo/ChapterCollectInfo"), S = t("../../dataStatistics/vo/ChapterDataStatisticsInfo"), I = t("../../game/vo/ChapterGameInfo"), T = t("../events/E_ChapterCollectionProducer_Exe"), E = (t("../vo/ChapterCollectionProducerGameInfo"), 
function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ T.E_ChapterCollectionProducer_Exe, d.E_BlocksProducer_TouchStart, f.E_BlocksProducer_TouchEnd, v.E_GameOver_GameEnd, _.E_Game_Replay, g.E_Revive_Success ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case T.E_ChapterCollectionProducer_Exe:
this.onTriggerStrategy(t);
break;

case d.E_BlocksProducer_TouchStart:
this.onBlockProducerTouchStart(t);
break;

case f.E_BlocksProducer_TouchEnd:
this.onBlockProducerTouchEnd(t);
break;

case v.E_GameOver_GameEnd:
this.onGameEnd(t);
break;

case _.E_Game_Replay:
this.onGameReplay(t);
break;

case g.E_Revive_Success:
this.onReviveSuccess(t);
}
};
e.prototype.onTriggerStrategy = function(t) {
var e, r;
if (1 == (null === (r = null === (e = y.chapterConfigInfo.chapterDatasCfg[I.chapterGameInfo.chapterNum]) || void 0 === e ? void 0 : e.Condition) || void 0 === r ? void 0 : r.Way)) {
this.resetCollectionData();
this.produceCollection();
this.changeCollection();
} else l.storage.setItem("chapterCollectionLists", []);
var o = t.callback;
o && "function" == typeof o && o();
};
e.prototype.resetCollectionData = function() {
m.collectionProducerGameInfo._collectiomTrait = !1;
};
e.prototype.produceCollection = function() {
var t, e, r = [ [], [], [] ], o = y.chapterConfigInfo.chapterDatasCfg[I.chapterGameInfo.chapterNum].Condition.RequiredCollections;
try {
for (var a = s(o), n = a.next(); !n.done; n = a.next()) {
var i = n.value, c = P.chapterCollectInfo.getRemainCollectNum(i.Key);
if (!(c <= 0)) {
for (var p = b.chapterBoardInfo.faceBlocks, u = [ 0, 1, 2 ].sort(function() {
return Math.random() - .5;
}), f = 0, d = 0; d < 8; d++) for (var m = 0; m < 8; m++) p && p[d][m] == i.Key && f++;
var _ = (f + (i.Value - c)) / i.Value < 1.25, v = Math.ceil(1.25 * i.Value - (f + (i.Value - c)));
if (_) for (var g = Math.min(Math.floor(3 * Math.random()) + 1, v), S = 0; S < g; S++) {
var T = Math.floor(Math.random() * h.algorithmPosInfo.getPos(C.chapterAlgorithmInfo.blockIdList[u[S]]).length);
r[u[S]].push({
Key: i.Key,
pos: T
});
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
for (var E = [], O = 0; O < r.length; O++) {
E[O] = [];
if (r[O].length > 0) {
var A = r[O].sort(function() {
return Math.random() - .5;
});
E[O].push(A[0]);
} else E[O].push([]);
}
l.storage.setItem("chapterCollectionLists", E);
};
e.prototype.changeCollection = function() {};
e.prototype.onBlockProducerTouchStart = function() {
S.chapterDataStatisticsInfo.deferredDataStatisticsEndPromise.reset();
};
e.prototype.onBlockProducerTouchEnd = function(t) {
return i(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
return S.chapterDataStatisticsInfo.deferredDataStatisticsEndPromise.isResoved ? [ 3, 2 ] : [ 4, S.chapterDataStatisticsInfo.deferredDataStatisticsEndPromise.wait() ];

case 1:
e.sent();
e.label = 2;

case 2:
this.onBlockProducerTouchEndExecuted(t);
return [ 2 ];
}
});
});
};
e.prototype.onBlockProducerTouchEndExecuted = function() {};
e.prototype.onGameEnd = function() {};
e.prototype.onGameReplay = function() {};
e.prototype.onReviveSuccess = function() {};
n([ p.trait("PureGemTrait", "关卡模式纯宝石关卡。！！！！！生成的块全部都变成收集物所以下面的都不执行"), p.trait("IsIncreaseEnjoyCollectionTrait", "增加凑堆收集物的消除爽感"), p.trait("TravelHappyOverTrait", "关卡终局爽且难题"), p.trait("MultiElementCollectTrait", "多元素收集,无威胁、首期1.5倍，填空消除路径三合一2") ], e.prototype, "produceCollection", null);
n([ p.trait("IsTravelMoreDiamondAwardTrait", "生成满快的收集物"), p.trait("TravelEasterEggTrait", "旅行 块上概率生成彩蛋"), p.trait("IsOpenCollectLevelOfferNormalAndGemTrait", "关卡模式，收集关只出普通块和宝石块") ], e.prototype, "changeCollection", null);
n([ p.trait("IsTravelMoreDiamondAwardTrait", "在消除了blocks后的处理,会处理连消和combo") ], e.prototype, "onBlockProducerTouchEndExecuted", null);
n([ p.trait("IsTravelMoreDiamondAwardTrait", "对局结束处理") ], e.prototype, "onGameEnd", null);
n([ p.trait("IsTravelMoreDiamondAwardTrait", "对局结束处理") ], e.prototype, "onGameReplay", null);
n([ p.trait("IsTravelMoreDiamondAwardTrait", "复活处理") ], e.prototype, "onReviveSuccess", null);
return n([ classId("ChapterCollectionProducer_Proxy") ], e);
}(u.Proxy));
r.ChapterCollectionProducer_Proxy = E;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchStart": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/collectionProducer/vo/CollectionProducerGameInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Success": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../board/vo/ChapterBoardInfo": "ChapterBoardInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../dataStatistics/vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../events/E_ChapterCollectionProducer_Exe": "E_ChapterCollectionProducer_Exe",
"../vo/ChapterCollectionProducerGameInfo": "ChapterCollectionProducerGameInfo"
} ],
ChapterCollectionProducterEasterEggPool: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "996c8gxVpBM4roQL0cJKdx5", "ChapterCollectionProducterEasterEggPool");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, a = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.easterEggPool = void 0;
var i = t("../../../../../../../scripts/base/decorators/DecoratorMemoize"), c = t("../../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../../scripts/base/pool/ObjectPool"), p = t("./ChapterCollectionProducterEasterEgg"), l = function() {
function t() {
this.pool = null;
this._isInit = !1;
}
t.prototype.initPool = function() {
this._isInit || this.init();
};
t.prototype.init = function() {
var t = this;
this.pool = new s.ObjectPool(this.create, this.reset, {
size: 4,
onCreateComplete: function(e) {
e || (t._isInit = !0);
}
});
};
t.prototype.create = function() {
return a(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
t = null;
return [ 4, c.ResLoader.asyncLoadByBundle("Remote_TravelEasterEgg", "prefabs/easterEgg", cc.Prefab).then(function(e) {
t = cc.instantiate(e);
}) ];

case 1:
e.sent();
return [ 2, t ];
}
});
});
};
t.prototype.reset = function(t) {
t.parent = null;
var e = t.getComponent(p.default);
e && e.unuse();
};
Object.defineProperty(t.prototype, "isInit", {
get: function() {
return this._isInit;
},
enumerable: !1,
configurable: !0
});
t.prototype.createEnemy = function() {
this.pool || this.init();
return this.pool.get();
};
t.prototype.release = function(t) {
this.reset(t);
this.pool && this.pool.release(t);
};
t.prototype.clear = function() {
this.pool && this.pool.clear();
};
o([ i.memoize ], t.prototype, "init", null);
return t;
}();
r.easterEggPool = new l();
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorMemoize": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/pool/ObjectPool": void 0,
"./ChapterCollectionProducterEasterEgg": "ChapterCollectionProducterEasterEgg"
} ],
ChapterCollectionProducterEasterEgg: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "839cc9hlY5OmIGnZXK8KO0x", "ChapterCollectionProducterEasterEgg");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../../scripts/base/components/Component"), p = t("./ChapterCollectionProducterEasterEggPool"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dragonBones = null;
return e;
}
e.prototype.onLoad = function() {
this.dragonBones.addEventListener(dragonBones.EventObject.COMPLETE, this.removeEgg, this);
};
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
return [ 2 ];
});
});
};
e.prototype.play = function() {
this.dragonBones.playAnimation("in", 1);
};
e.prototype.removeEgg = function() {
cc.isValid(this.node) && p.easterEggPool.release(this.node);
};
e.prototype.unuse = function() {
this.dragonBones.removeEventListener(dragonBones.EventObject.COMPLETE);
};
e.prototype.reuse = function() {
this.dragonBones.addEventListener(dragonBones.EventObject.COMPLETE, this.removeEgg, this);
};
n([ h(dragonBones.ArmatureDisplay) ], e.prototype, "dragonBones", void 0);
return n([ u ], e);
}(s.default);
r.default = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0,
"./ChapterCollectionProducterEasterEggPool": "ChapterCollectionProducterEasterEggPool"
} ],
ChapterColorProducerGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f08e71/ZNhPdYmckgys1bBo", "ChapterColorProducerGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterColorProducerGameInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "colorList", {
get: function() {
return o.storage.getItem("chapterColorLists", []);
},
enumerable: !1,
configurable: !0
});
t.prototype.setColorList = function(t) {
o.storage.setItem("chapterColorLists", t);
};
return t;
}();
r.chapterColorProducerGameInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterColorProducer_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "25096AjUUZDP6xhvFeREagv", "ChapterColorProducer_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterColorProducer_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterColorProducer_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterColorProducer_Proxy ];
};
return e;
}(n.Module);
r.ChapterColorProducer_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterColorProducer_Proxy": "ChapterColorProducer_Proxy"
} ],
ChapterColorProducer_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a3853KwrohLord2X4ik4ewu", "ChapterColorProducer_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterColorProducer_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../events/E_ChapterColorProducer_Exe"), p = t("../vo/ChapterColorProducerGameInfo"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ s.E_ChapterColorProducer_Exe ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case s.E_ChapterColorProducer_Exe:
this.onTriggerStrategy(t);
}
};
e.prototype.onTriggerStrategy = function(t) {
this.resetColorData();
this.produceColorBase();
this.produceColorPostprocessing();
var e = t.callback;
e && "function" == typeof e && e();
};
e.prototype.resetColorData = function() {};
e.prototype.produceColorBase = function() {
var t = Array.from({
length: 7
}, function(t, e) {
return e + 1;
}).sort(function() {
return Math.random() - .5;
}).slice(0, 3);
p.chapterColorProducerGameInfo.setColorList(t);
};
e.prototype.produceColorPostprocessing = function() {};
n([ i.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现,劫持颜色产生"), i.trait("AlloBlockStateTrait", "首轮刷块使玩家手动放置不可消除块形成异形盘面"), i.trait("TravelCollectSingleColorTrait", "关卡单一颜色") ], e.prototype, "produceColorBase", null);
n([ i.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现，劫持颜色后处理,请将其它劫持颜色后处理逻辑放在后面") ], e.prototype, "produceColorPostprocessing", null);
return n([ classId("ChapterColorProducer_Proxy") ], e);
}(c.Proxy);
r.ChapterColorProducer_Proxy = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../events/E_ChapterColorProducer_Exe": "E_ChapterColorProducer_Exe",
"../vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo"
} ],
ChapterComboInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "48e8brzT01Mz4n0G0lQ3QOm", "ChapterComboInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterComboInfo = r.ChapterComboInfo = void 0;
var o = function() {
function t() {
this._comboState = !1;
}
Object.defineProperty(t.prototype, "comboState", {
get: function() {
return this._comboState;
},
enumerable: !1,
configurable: !0
});
t.prototype.setComboState = function(t) {
this._comboState = t;
};
return t;
}();
r.ChapterComboInfo = o;
r.chapterComboInfo = new o();
cc._RF.pop();
}, {} ],
ChapterComboScoreTip_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f27a8mLIeFNBbL/3l88mC1l", "ChapterComboScoreTip_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterComboScoreTip_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterComboScoreTip_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterComboScoreTip_Proxy ];
};
return e;
}(n.Module);
r.ChapterComboScoreTip_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterComboScoreTip_Proxy": "ChapterComboScoreTip_Proxy"
} ],
ChapterComboScoreTip_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "53da2E9CGxMq7A6AWvRP4kM", "ChapterComboScoreTip_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterComboScoreTip_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/task/Task"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), h = t("../../../../../../scripts/modules/comboScoreTip/vo/ComboScoreTipInfo"), f = t("../../../../../../scripts/modules/score/type/ScoreType"), d = t("../../score/events/E_ChapterScore_Update"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ u.E_BlocksProducer_TouchEnd, d.E_ChapterScore_Update ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case u.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
break;

case d.E_ChapterScore_Update:
this.onChapterScoreUpdate(t);
}
};
e.prototype.onChapterScoreUpdate = function(t) {
var e = this;
if (t.option.type === f.ScoreUpdateType.Add) {
var r = t.option.addScore;
if (!this.state) return;
if (this.skipComboScoreTip(t)) return;
var o = this.state, a = o.canEliminate, n = o.eliminateCount, s = o.putEliminateCenter;
a && p.task.run(function() {
return i(e, void 0, void 0, function() {
return c(this, function(t) {
switch (t.label) {
case 0:
return [ 4, h.comboScoreTipInfo.getComboScoreTip() ];

case 1:
t.sent().setState({
score: r,
eliminateCount: n,
x: s.x,
y: s.y
});
return [ 2 ];
}
});
});
});
}
};
e.prototype.skipComboScoreTip = function() {
return !1;
};
e.prototype.onTouchEnd = function(t) {
this.state = t.state;
};
n([ s.trait("FeatclearscreenbombTrait", "清盘动画方块爆发涌现，将分数上顶积分 在清屏时加的额外分数在这里不显示") ], e.prototype, "skipComboScoreTip", null);
n([ s.trait("CenterMessagePositionStateTrait", "玩家消除时体验视觉优化") ], e.prototype, "onTouchEnd", null);
return n([ classId("ChapterComboScoreTip_Proxy") ], e);
}(l.Proxy);
r.ChapterComboScoreTip_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/task/Task": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/comboScoreTip/vo/ComboScoreTipInfo": void 0,
"../../../../../../scripts/modules/score/type/ScoreType": void 0,
"../../score/events/E_ChapterScore_Update": "E_ChapterScore_Update"
} ],
ChapterCombo_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2e807bwdspOp7qQ/iTGu0UN", "ChapterCombo_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCombo_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterCombo_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterCombo_Proxy ];
};
return e;
}(n.Module);
r.ChapterCombo_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterCombo_Proxy": "ChapterCombo_Proxy"
} ],
ChapterCombo_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3db4baoXmBKHb56BOqSoPGm", "ChapterCombo_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterCombo_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), l = t("../../../../../../scripts/modules/combo/components/ComboBase"), u = t("../../../../../../scripts/modules/prefab/PrefabConfig"), h = t("../vo/ChapterComboInfo"), f = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ p.E_BlocksProducer_TouchEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case p.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
}
};
e.prototype.onTouchEnd = function(t) {
var e = this;
if (this.isOpenComboState(h.chapterComboInfo.comboState)) {
var r = t.state, o = r.eliminateCount, a = r.putEliminates, n = r.putEliminateCenter, i = r.continuousEliminateTimes;
if (o > 0 && i > 1) {
var c = this.changeComboDisplayTime(100);
setTimeoutSafe(function() {
var r = cc.v2(0, 0);
if (null == a ? void 0 : a.length) {
var o = n.x, i = cc.winSize.width / 2 - 480, c = i + 330, s = i + 620;
o < c && (o = c);
o > s && (o = s);
var p = n.y, l = e.changeComboPos(o, p), u = l.comboPosX, h = l.comboPosY;
r.x = u;
r.y = h;
}
e.showCombo(t, r);
}, c);
}
}
};
e.prototype.isOpenComboState = function(t) {
return t;
};
e.prototype.showCombo = function(t, e) {
var r = t.state.continuousEliminateTimes;
c.UI.show(u.PrefabConfig.ComboBase).then(function(t) {
var o = t.getComponent(l.default);
o.setState({
count: r
});
o.node.setPosition(e);
});
};
e.prototype.changeComboPos = function(t, e) {
return {
comboPosX: t,
comboPosY: e
};
};
e.prototype.changeComboDisplayTime = function(t) {
return t;
};
n([ i.trait("CenterMessagePositionStateTrait", "玩家消除时体验视觉优化") ], e.prototype, "changeComboPos", null);
return n([ classId("ChapterCombo_Proxy") ], e);
}(s.Proxy);
r.ChapterCombo_Proxy = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/combo/components/ComboBase": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../vo/ChapterComboInfo": "ChapterComboInfo"
} ],
ChapterContent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "db5bfGG0j5HeaHgQiEKfgPn", "ChapterContent");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s, p = t("../../../../../../scripts/base/audio/AudioInfo"), l = t("../../../../../../scripts/base/cache/CacheRender"), u = t("../../../../../../scripts/base/components/Component"), h = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), f = t("../../../../../../scripts/base/decorators/DecoratorTrait"), d = t("../../../../../../scripts/base/loader/ResLoader"), y = t("../../../../../../scripts/base/storage/Storage"), m = t("../../../../../../scripts/base/timer/Timer"), _ = t("../../../../../../scripts/falcon/EventManager"), v = t("../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config"), g = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), C = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), b = t("../../../../../../scripts/modules/prefab/PrefabConfig"), P = t("../../audio/config/ChapterAudioConfig"), S = t("../config/ChapterListConfig"), I = t("../vo/ChapterListInfo"), T = t("./ChapterCurSeat"), E = t("./ChapterItem"), O = t("./ChapterLevelTxt"), A = t("./ChapterThroughCupBone");
(function(t) {
t[t.upToDown = 0] = "upToDown";
t[t.downToUp = 1] = "downToUp";
})(s || (s = {}));
var R = cc._decorator, w = R.ccclass, G = R.property, x = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scroll = null;
e.itemContainer = null;
e.cupContainer = null;
e.cup = null;
e.cupBoneParent = null;
e.curChapterBtn = null;
e.content = null;
e.cupBoneNode = null;
e.curBoneNode = null;
e.itemList = [];
e.isInit = !1;
e.levelTextComps = [];
e.levelTextParent = null;
e.levelCount = 0;
e.contentPos = null;
e.stage = -1;
return e;
}
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t;
return c(this, function(e) {
switch (e.label) {
case 0:
cc.Tween.stopAllByTarget(this.node);
return [ 4, this.init() ];

case 1:
e.sent();
this.cup.node.active = !this.state.isThrough;
this.curChapterBtn.active = this.state.curChapter == this.state.lastChapter && !this.state.isThrough;
this.state.isThrough || (this.cupBoneParent.active = !1);
this.resetNotPassLevelCell();
if (this.state.isPreviewAllThrough) {
this.previewAllThrough(this.node, this.levelTextComps, this.itemList, this.state);
this.refreshUIState();
} else this.moveChapter();
if (this.state.isThrough) {
t = cc.view.getVisibleSize();
this.scroll.content.position = cc.v3(0, -t.height / 2, 0);
}
return [ 2 ];
}
});
});
};
e.prototype.shouldComponentUpdate = function(t) {
var e = this.state, r = e.curChapter, o = e.lastChapter, a = e.isNewLevel, n = e.isThrough, i = e.redraw, c = e.isShowChapterBtn, s = e.isPreviewAllThrough, p = r != t.curChapter, l = o != t.lastChapter, u = a != t.isNewLevel, h = n != t.isThrough, f = i != t.redraw, d = c != t.isShowChapterBtn, y = s != t.isPreviewAllThrough;
return p || l || u || h || f || d || y;
};
e.prototype.init = function() {
return i(this, void 0, void 0, function() {
var t;
return c(this, function(e) {
switch (e.label) {
case 0:
t = y.storage.getItem("chapterPeriodsIndex", 1);
if (this.isInit && !this.state.redraw && this.stage === t) return [ 2 ];
this.node.opacity = 0;
this.contentPos || (this.contentPos = this.content.position);
return [ 4, this.initCurBone() ];

case 1:
e.sent();
return [ 4, m.nextFrame() ];

case 2:
e.sent();
return [ 4, this.loadItem() ];

case 3:
e.sent();
return [ 4, this.loadLevelText() ];

case 4:
e.sent();
return [ 4, m.nextFrame() ];

case 5:
e.sent();
return [ 4, this.initThroughCupBone() ];

case 6:
e.sent();
this.node.opacity = 255;
this.state.isThrough || this.scroll.scrollToBottom(0);
this.isInit = !0;
this.state.redraw = !1;
this.stage = t;
return [ 2 ];
}
});
});
};
e.prototype.loadItem = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o, a, n, i, s, p, u, h, f, d, y = this;
return c(this, function(c) {
switch (c.label) {
case 0:
if (0 === (t = g.chapterConfigInfo.chapterListCfg).length) return [ 2 ];
e = t.length;
r = t[0].length;
o = S.ChapterListConfig.itemHeight;
this.scroll.content.height = e * o + S.ChapterListConfig.itemsContentHeightAdd;
a = cc.view.getVisibleSize();
n = !1;
if (a.height > this.scroll.content.height) {
this.scroll.content.height = a.height;
n = !0;
}
this.scroll.content.position = cc.v3(0, -this.scroll.content.height / 2, 0);
n && (this.contentPos = this.content.position);
this.levelCount = 0;
t.forEach(function(t) {
t.forEach(function(t) {
-1 != t && y.levelCount++;
});
});
return [ 4, l.cacheRender.createOrUpdateCacheListComponents({
tag: "ChapterContent",
parent: this.itemContainer,
prefabUrl: b.PrefabConfig.ChapterItem.url,
count: this.levelCount,
typeOrClassName: E.default,
bundleName: "chapter"
}) ];

case 1:
i = c.sent();
this.itemList = [];
s = 0;
p = e - 1;
c.label = 2;

case 2:
return p >= 0 ? [ 4, m.nextFrame() ] : [ 3, 5 ];

case 3:
c.sent();
u = e % 2;
for (h = 0; h < t[p].length; h++) if (-1 != t[p][h]) {
f = 0 != u ? cc.v3(-Math.floor(r / 2) * o + o * h, 250 + (e - p) * o) : cc.v3(-r / 2 * o + o / 2 + o * h, 250 + (e - p) * o);
if (d = i[s]) {
s++;
d.node.setPosition(f);
this.itemList[s - 1] = d;
}
}
c.label = 4;

case 4:
p--;
return [ 3, 2 ];

case 5:
this.setItemListOrder();
return [ 2 ];
}
});
});
};
e.prototype.getItemListColor = function() {
for (var t = g.chapterConfigInfo.chapterListCfg, e = [], r = t.length - 1; r >= 0; r--) for (var o = 0; o < t[r].length; o++) -1 != t[r][o] && e.push(t[r][o]);
return e;
};
e.prototype.setItemListOrder = function() {
var t, e = y.storage.getItem("chapterPeriodsIndex", 1), r = this.getItemListColor();
if (1 == g.chapterConfigInfo.way[0]) {
var o = I.chapterListInfo.stageItemOrderList;
if (o.stage == e && o.orderList.length > 0) {
for (var a = [], n = 0; n < o.orderList.length; n++) a.push(this.itemList[o.orderList[n]]);
this.itemList = a;
var i = [];
for (n = 0; n < o.orderList.length; n++) i.push(r[o.orderList[n]]);
r = i;
} else {
var c = [];
for (n = 0; n < this.itemList.length; n++) c.push(n);
c.sort(function() {
return Math.random() - .5;
});
y.storage.setItem("chapterContentItemOrder", {
stage: e,
orderList: c
});
for (a = [], n = 0; n < c.length; n++) a.push(this.itemList[c[n]]);
for (i = [], n = 0; n < c.length; n++) i.push(r[c[n]]);
r = i;
this.itemList = a;
}
} else if (2 == g.chapterConfigInfo.way[0]) {
var s = g.chapterConfigInfo.order, p = [];
for (i = [], n = 0; n < s.length; n++) for (var l = 0; l < r.length; l++) if (r[l] == s[n]) {
p.push(l);
i.push(r[l]);
}
for (a = [], n = 0; n < p.length; n++) a.push(this.itemList[p[n]]);
r = i;
this.itemList = a;
}
for (n = 0; n < this.itemList.length; n++) null === (t = this.itemList[n]) || void 0 === t || t.setState({
levelNum: n + 1,
color: r[n],
showColor: n + 1 <= this.state.lastChapter
});
};
e.prototype.loadLevelText = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o, a;
return c(this, function(n) {
switch (n.label) {
case 0:
if (0 === this.itemList.length) return [ 2 ];
if (!this.levelTextParent) {
this.levelTextParent = new cc.Node();
this.levelTextParent.parent = this.itemContainer;
}
return [ 4, l.cacheRender.createOrUpdateCacheListComponents({
tag: "ChapterContent",
parent: this.levelTextParent,
prefabUrl: b.PrefabConfig.ChapterLevelTxt.url,
count: this.levelCount,
typeOrClassName: O.default,
bundleName: "chapter"
}) ];

case 1:
t = n.sent();
this.levelTextComps = t;
for (e = 0; e < this.levelCount; e++) {
r = this.itemList[e];
if (t[e] && r) {
o = e + 1;
t[e].node.x = r.node.x;
t[e].node.y = r.node.y;
t[e].level = o;
t[e].node.name = "关卡数字" + o;
void 0;
a = g.chapterConfigInfo.isStageShowFromBottom ? o <= this.state.lastChapter ? 0 : 255 : 0;
t[e].setState({
text: o.toString(),
opacity: a
});
}
}
return [ 2 ];
}
});
});
};
e.prototype.initThroughCupBone = function() {
return i(this, void 0, void 0, function() {
var t, e;
return c(this, function(r) {
switch (r.label) {
case 0:
if (this.cupBoneNode) {
this.setCupPos();
return [ 2 ];
}
return [ 4, d.ResLoader.asyncLoadByBundle("chapter", v.ChapterPrefabPathConfig_Config.cupBonePath, cc.Prefab) ];

case 1:
if (!(t = r.sent())) return [ 2 ];
if (e = cc.instantiate(t)) {
this.cupBoneParent.addChild(e);
this.cupBoneNode = e.getComponent(A.default);
}
this.setCupPos();
return [ 2 ];
}
});
});
};
e.prototype.initCurBone = function() {
return i(this, void 0, void 0, function() {
var t, e;
return c(this, function(r) {
switch (r.label) {
case 0:
return g.chapterConfigInfo.isStageShowFromBottom ? this.curBoneNode ? [ 2 ] : [ 4, d.ResLoader.asyncLoadByBundle("chapter", v.ChapterPrefabPathConfig_Config.curBonePath, cc.Prefab) ] : [ 2 ];

case 1:
if (!(t = r.sent())) return [ 2 ];
if (e = cc.instantiate(t)) {
this.curChapterBtn.addChild(e);
this.curBoneNode = e.getComponent(T.default);
}
return [ 2 ];
}
});
});
};
e.prototype.setCupPos = function() {
var t = g.chapterConfigInfo.chapterListCfg;
this.cupContainer.y = t.length * S.ChapterListConfig.itemHeight + S.ChapterListConfig.cupNodeOffsetY;
};
e.prototype.moveChapter = function() {
var t = this;
if (this.state.curChapter - this.state.lastChapter <= 0) {
for (var e = 0; e < this.itemList.length; e++) {
var r = this.itemList[e], o = this.levelTextComps[e];
if (e < this.state.lastChapter) {
null == r || r.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
null == o || o.setState({
opacity: 0
});
} else null == r || r.setState({
isStopAllAction: !0,
isShowAnimation: !1,
isOpacityAni: !1
});
}
this.refreshUIState();
} else {
var a = this.state.curChapter - 1, n = function(e) {
var r = i.itemList[e], o = i.levelTextComps[e];
if (e < i.state.lastChapter) {
null == o || o.setState({
opacity: 0
});
null == r || r.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
} else e <= a && cc.tween(i.node).delay(.07 * (e - i.state.lastChapter + 1)).call(function() {
p.audioInfo.play(P.ChapterAudioConfig.travel_unlock_lvmark);
var r = t.itemList[e];
null == o || o.setState({
opacity: 0
});
null == r || r.setState({
isShowAnimation: !0,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
e != a || t.refreshUIState();
}).start();
}, i = this;
for (e = 0; e < this.itemList.length; e++) n(e);
}
};
e.prototype.refreshUIState = function() {
var t = this, e = this.state, r = e.isThrough, o = e.curChapter;
if (r) this.showWaveAnimation().then(function() {
t.showCupAnimation();
}); else if (g.chapterConfigInfo.isStageShowFromBottom) {
this.curBoneNode && this.curBoneNode.setState({
animName: "stand",
playTimes: 1,
curNumId: o + 1
});
if (this.itemList[o]) {
this.curChapterBtn.active = !0;
this.curChapterBtn.position = this.itemList[o].node.position;
}
} else this.curChapterBtn && (this.curChapterBtn.active = !1);
};
e.prototype.resetNotPassLevelCell = function() {
for (var t = this.itemList, e = function(e) {
if (cc.isValid(t[e])) {
cc.Tween.stopAllByTarget(r.levelTextComps[e]);
var o = t[e].getComponent(E.default), a = r.levelTextComps.find(function(t) {
return t.level === o.state.levelNum;
});
if (r.state.lastChapter < o.state.levelNum) {
null == o || o.setState({
isThrough: !1,
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !1,
isOpacityAni: !1
});
var n = 255;
g.chapterConfigInfo.isStageShowFromBottom || (n = 0);
null == a || a.setState({
opacity: n
});
} else {
null == o || o.setState({
isThrough: !1,
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1
});
null == a || a.setState({
opacity: 0
});
}
}
}, r = this, o = 0; o < t.length; o++) e(o);
};
e.prototype.previewAllThrough = function() {};
e.prototype.onEnable = function() {
cc.Tween.stopAllByTarget(this.node);
this.resetNotPassLevelCell();
};
e.prototype.showWaveAnimation = function() {
for (var t = this, e = this.getSortedAnimationList(), r = e.length, o = function(t) {
for (var r = e[t], o = function(e) {
cc.tween(a.node).delay(.07 * (t + 1)).call(function() {
r[e].setState({
isThrough: !0,
isShowAnimation: !1,
throughRatio: 1
});
}).start();
}, n = 0; n < r.length; n++) o(n);
}, a = this, n = 0; n < e.length; n++) o(n);
return new Promise(function(e) {
cc.tween(t.node).delay(r / 2 * .07).call(function() {
e(1);
}).start();
});
};
e.prototype.getSortedAnimationList = function() {
for (var t = {}, e = 0; e < this.itemList.length; e++) {
var r = this.itemList[e];
if (r) {
var o = r.node.position.x, a = r.node.position.y, n = parseInt("" + .0125 * (a - 330 + o));
t["" + n] ? t["" + n].push(r) : t["" + n] = [ r ];
}
}
var i = Object.keys(t).sort(function(t, e) {
return parseInt(t) - parseInt(e);
}), c = [];
i.forEach(function(e) {
c.push(t[e]);
});
return c;
};
e.prototype.showCupAnimation = function() {
var t = this;
this.cupBoneParent.active = this.state.isThrough;
this.scroll.scrollToOffset(new cc.Vec2(0, 0), .4);
p.audioInfo.play(P.ChapterAudioConfig.travel_cup_award);
this.cupBoneNode.onAnimationComplete.wait().then(function() {
t.allAnimationComplete();
});
this.cupBoneNode.setState({
playTimes: 1,
animName: "newAnimation"
});
};
e.prototype.allAnimationComplete = function() {};
e.prototype.onClickStartGame = function() {
_.EventManager.dispatchModuleEvent(new C.E_Game_Ready());
DS("ui_theme_travel_click_board");
};
e.prototype.getLevelTextComp = function(t) {
return this.levelTextComps[t];
};
n([ G(cc.ScrollView) ], e.prototype, "scroll", void 0);
n([ G(cc.Node) ], e.prototype, "itemContainer", void 0);
n([ G(cc.Node) ], e.prototype, "cupContainer", void 0);
n([ G(cc.Sprite) ], e.prototype, "cup", void 0);
n([ G(cc.Node) ], e.prototype, "cupBoneParent", void 0);
n([ G(cc.Node) ], e.prototype, "curChapterBtn", void 0);
n([ G(cc.Node) ], e.prototype, "content", void 0);
n([ f.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 关卡展示逻辑") ], e.prototype, "moveChapter", null);
n([ f.trait("IsOPenLevelSceneEffectTrait", "马赛克界面可重复游览通关效果") ], e.prototype, "previewAllThrough", null);
n([ f.trait("BPuzzleTimeTrait", "解开continue 按钮") ], e.prototype, "showCupAnimation", null);
n([ h.throttle(300) ], e.prototype, "onClickStartGame", null);
return n([ classId("ChapterContent"), w ], e);
}(u.default);
r.default = x;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/cache/CacheRender": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/timer/Timer": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../config/ChapterListConfig": "ChapterListConfig",
"../vo/ChapterListInfo": "ChapterListInfo",
"./ChapterCurSeat": "ChapterCurSeat",
"./ChapterItem": "ChapterItem",
"./ChapterLevelTxt": "ChapterLevelTxt",
"./ChapterThroughCupBone": "ChapterThroughCupBone"
} ],
ChapterCurSeat: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7dadcaDD4FN9ZhLukndm+Ra", "ChapterCurSeat");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curLab = null;
e.bone = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.bone.addEventListener(dragonBones.EventObject.COMPLETE, function(e) {
e && e.animationState && e.animationState.name && "stand" == e.animationState.name && t.bone.playAnimation("idle", -1);
}, this);
};
e.prototype.shouldComponentUpdate = function(t) {
return !this.state || !t || this.state.animName != t.animName || this.state.curNumId != t.curNumId;
};
e.prototype.render = function() {
if (this.state) {
this.bone.playAnimation(this.state.animName, this.state.playTimes || 1);
this.state.atlas && (this.curLab.font.spriteFrame = this.state.atlas.getSpriteFrame("item"));
this.curLab.string = "" + this.state.curNumId;
this.curLab._forceUpdateRenderData();
}
};
e.prototype.onClick = function() {};
e.prototype.onDestroy = function() {};
n([ p(cc.Label) ], e.prototype, "curLab", void 0);
n([ p(dragonBones.ArmatureDisplay) ], e.prototype, "bone", void 0);
return n([ s ], e);
}(i.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0
} ],
ChapterDataStatisticsInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d7069QD6ppC9q5Txtq247uq", "ChapterDataStatisticsInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterDataStatisticsInfo = void 0;
var o = t("../../../../../../scripts/base/async/DeferredPromise"), a = t("../../../../../../scripts/base/storage/Storage"), n = function() {
function t() {
this._deferredRunStateEndPromise = new o.DeferredPromise();
this._deferredDataStatisticsEndPromise = new o.DeferredPromise();
this.dataStatisticsObj = {
comboMaxNum: 0,
comboRoundNum: 0,
comboTouchNum: 0,
eliminateCols: 0,
eliminateRows: 0,
eliminateAll: 0,
eliminate1: 0,
eliminate2: 0,
eliminate3: 0,
eliminate4: 0,
eliminate5: 0,
eliminate6: 0,
clearNum: 0
};
}
Object.defineProperty(t.prototype, "deferredRunStateEndPromise", {
get: function() {
return this._deferredRunStateEndPromise;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "deferredDataStatisticsEndPromise", {
get: function() {
return this._deferredDataStatisticsEndPromise;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "dataStatisticsInfo", {
get: function() {
return a.storage.getItem("chapterDataStatisticsInfo", this.dataStatisticsObj);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "gameEndStatisticsForeverInfo", {
get: function() {
return a.storage.getItem("chapterGameEndStatisticsForeverInfo", {
levelOneGameNum: 0
});
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "timeStatisticsInfo", {
get: function() {
return a.storage.getItem("chapterTimeStatisticsInfo", {
time: new Date().getTime(),
spend: 0
});
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "collectPosDetail", {
get: function() {
return a.storage.getItem("chapterCollectPosDetail", []);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "roundGameTime", {
get: function() {
return this.timeStatisticsInfo.spend;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "historyGameOverGBMServerDataList", {
get: function() {
return [ {
game_id: 1,
RevivePostion1: 1,
RevivePostion2: 1,
game_time: 1,
weight: 1,
ReviveSuccess: 1,
ReviveShow: 1,
roundId: 1,
process: 1,
TravelId: 1,
Travellevelid: 1,
TryTimes: 1
} ];
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterDataStatisticsInfo = new n();
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/DeferredPromise": void 0,
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterDataStatisticsInterface: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1ba66VaUtlJhZv5YS1eLW3F", "ChapterDataStatisticsInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ChapterDataStatistics_AddUsrDataGameEnd_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cc9cejtbFxCqo9Q9vVosFeD", "ChapterDataStatistics_AddUsrDataGameEnd_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDataStatistics_AddUsrDataGameEnd_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ s.E_ChapterAlgorithmStrategy_RunState ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case s.E_ChapterAlgorithmStrategy_RunState:
this.onChapterAlgorithmStrategy_RunState(t);
}
};
e.prototype.onChapterAlgorithmStrategy_RunState = function() {};
n([ i.trait("CTDotClickUsrDataGameEndTrait") ], e.prototype, "onChapterAlgorithmStrategy_RunState", null);
return n([ classId("ChapterDataStatistics_AddUsrDataGameEnd_Proxy") ], e);
}(c.Proxy);
r.ChapterDataStatistics_AddUsrDataGameEnd_Proxy = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState": "E_ChapterAlgorithmStrategy_RunState"
} ],
ChapterDataStatistics_Ecpm_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4342erSCu9A/JtvJS+9RNo9", "ChapterDataStatistics_Ecpm_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDataStatistics_Ecpm_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), l = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), u = t("../../../../../../scripts/modules/game/events/E_Game_Replay"), h = t("../../../../../../scripts/modules/game/events/E_Game_Start"), f = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), d = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState"), y = t("../../collect/vo/ChapterCollectInfo"), m = t("../../game/vo/ChapterGameInfo"), _ = t("../../score/vo/ChapterScoreInfo"), v = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ f.E_GameOver_GameEnd, u.E_Game_Replay, p.E_BlocksProducer_TouchEnd, l.E_Game_Ready, h.E_Game_Start, d.E_ChapterAlgorithmStrategy_RunState ];
};
e.prototype.receivedEvents = function(t) {
var e = m.chapterGameInfo.chapterCondition, r = m.chapterGameInfo.entryTime;
switch (t.getClass()) {
case f.E_GameOver_GameEnd:
this.onGameEnd();
break;

case u.E_Game_Replay:
this.onGameReplay(r);
this.onGameEnd();
break;

case p.E_BlocksProducer_TouchEnd:
this.onBlocksTouchEnd(t, e.Way, _.chapterScoreInfo.score, r, m.chapterGameInfo.roundNum);
break;

case l.E_Game_Ready:
this.onGameReady(e);
break;

case h.E_Game_Start:
var o = t;
this.onStartGame(r, o.data.newGame);
break;

case d.E_ChapterAlgorithmStrategy_RunState:
this.onChapterStrategyRunState(m.chapterGameInfo.roundNum, m.chapterGameInfo.entryTime);
}
};
e.prototype.onChapterStrategyRunState = function() {};
e.prototype.onGameEnd = function() {
var t = m.chapterGameInfo.roundNum, e = m.chapterGameInfo.gameNum, r = m.chapterGameInfo.gameTime, o = {
Name: m.chapterGameInfo.chapterCondition.Name,
Way: m.chapterGameInfo.chapterCondition.Way,
RequiredScore: m.chapterGameInfo.chapterCondition.RequiredScore,
RequiredCollections: m.chapterGameInfo.chapterCondition.RequiredCollections,
score: _.chapterScoreInfo.score,
collectNum: y.chapterCollectInfo.getAllCollectNum(),
entryTime: m.chapterGameInfo.entryTime,
producerBlocks: s.algorithmInfo.blockIdList,
collectRemainCollectItems: y.chapterCollectInfo.collectRemainCollectItems
};
this.onGameEndEcpm(r, t, e, o);
};
e.prototype.onGameEndEcpm = function() {};
e.prototype.onBlocksTouchEnd = function() {};
e.prototype.onGameReady = function() {};
e.prototype.onGameReplay = function() {};
e.prototype.onStartGame = function() {};
n([ i.trait("IsOpenEcpmGpGameDataChacheTrait", "基于用户session的预估服务二期 Android(数据存储)") ], e.prototype, "onChapterStrategyRunState", null);
n([ i.trait("IsOpenEcpmGpTrait", "旅途结束时统计数据"), i.trait("IsOpenEcpmGpGameDataChacheTrait", "基于用户session的预估服务二期 Android(数据存储)") ], e.prototype, "onGameEndEcpm", null);
n([ i.trait("IsOpenEcpmGpGameDataChacheTrait", "结束时统计数据") ], e.prototype, "onBlocksTouchEnd", null);
n([ i.trait("IsOpenEcpmGpGameDataChacheTrait", "基于用户session的预估服务二期 Android(数据存储)") ], e.prototype, "onGameReady", null);
n([ i.trait("IsOpenEcpmGpGameDataChacheTrait", "基于用户session的预估服务二期 Android(数据存储)") ], e.prototype, "onGameReplay", null);
n([ i.trait("IsOpenEcpmGpGameDataChacheTrait", "基于用户session的预估服务二期 Android(数据存储)") ], e.prototype, "onStartGame", null);
return n([ classId("ChapterDataStatistics_Ecpm_Proxy") ], e);
}(c.Proxy);
r.ChapterDataStatistics_Ecpm_Proxy = v;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState": "E_ChapterAlgorithmStrategy_RunState",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo"
} ],
ChapterDataStatistics_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "115495cCKhEKof5fYpjaQks", "ChapterDataStatistics_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDataStatistics_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterDataStatistics_AddUsrDataGameEnd_Proxy"), c = t("./proxys/ChapterDataStatistics_Ecpm_Proxy"), s = t("./proxys/ChapterDataStatistics_Proxy"), p = t("./proxys/ChapterDataStatistics_Time_Proxy"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ p.ChapterDataStatistics_Time_Proxy, s.ChapterDataStatistics_Proxy, i.ChapterDataStatistics_AddUsrDataGameEnd_Proxy, c.ChapterDataStatistics_Ecpm_Proxy ];
};
return e;
}(n.Module);
r.ChapterDataStatistics_Module = l;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterDataStatistics_AddUsrDataGameEnd_Proxy": "ChapterDataStatistics_AddUsrDataGameEnd_Proxy",
"./proxys/ChapterDataStatistics_Ecpm_Proxy": "ChapterDataStatistics_Ecpm_Proxy",
"./proxys/ChapterDataStatistics_Proxy": "ChapterDataStatistics_Proxy",
"./proxys/ChapterDataStatistics_Time_Proxy": "ChapterDataStatistics_Time_Proxy"
} ],
ChapterDataStatistics_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6f880/uoaJMMpUaNiivjWxc", "ChapterDataStatistics_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDataStatistics_Proxy = void 0;
var i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), l = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo"), u = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), h = t("../../../../../../scripts/modules/board/vo/BoardRendererInfo"), f = t("../../../../../../scripts/modules/board/vo/BoardInfo"), d = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), y = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), m = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), _ = t("../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState"), v = t("../../algorithmStrategy/type/ChapterAlgorithmStrategyType"), g = t("../../collect/vo/ChapterCollectInfo"), C = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), b = t("../../game/vo/ChapterGameInfo"), P = t("../../prefab/ChapterPrefabConfig"), S = t("../events/E_ChapterDataStatistics_Clear"), I = t("../vo/ChapterDataStatisticsInfo"), T = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
c.UI.addEventListener("open", function(e) {
e === P.ChapterPrefabConfig.ChapterGame && t.onStartGame();
});
};
e.prototype.registerEvents = function() {
return [ u.E_BlocksProducer_TouchEnd, _.E_ChapterAlgorithmStrategy_RunState, y.E_GameOver_GameEnd, S.E_ChapterDataStatistics_Clear ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case u.E_BlocksProducer_TouchEnd:
this.onBlocksTouchEnd(t);
break;

case _.E_ChapterAlgorithmStrategy_RunState:
this.onTouchEnd(t);
break;

case y.E_GameOver_GameEnd:
this.onGameOver(t);
break;

case S.E_ChapterDataStatistics_Clear:
this.onDataClear(t);
}
};
e.prototype.onDataClear = function() {
i.storage.setItem("chapterDataStatisticsInfo", I.chapterDataStatisticsInfo.dataStatisticsObj);
};
e.prototype.onBlocksTouchEnd = function(t) {
var e = I.chapterDataStatisticsInfo.dataStatisticsInfo, r = t.state, o = r.eliminateCols, a = r.eliminateRows, n = r.eliminateCount, c = r.clearScreen, s = r.continuousEliminateTimes, p = n > 0 && s > 1;
n > 0 && e.clearNum++;
c && e.clearNum >= 5 && e.eliminateAll++;
if (p) {
s - 1 > e.comboMaxNum && (e.comboMaxNum = s - 1);
e.comboRoundNum++;
e.comboTouchNum = s - 1;
} else 0 === s && (e.comboTouchNum = 0);
Object.keys(o).length > 0 && (e.eliminateCols += Object.keys(o).length);
Object.keys(a).length > 0 && (e.eliminateRows += Object.keys(a).length);
n >= 1 && n <= 6 && e["eliminate" + n]++;
i.storage.setItem("chapterDataStatisticsInfo", e);
I.chapterDataStatisticsInfo.deferredDataStatisticsEndPromise.resolve(!0);
};
e.prototype.onTouchEnd = function(t) {
if (t.option.runStateType == v.ChapterAlgorithmStrategyRunStateType.END) {
this.addCollectBlock();
I.chapterDataStatisticsInfo.deferredRunStateEndPromise.resolve(!0);
}
};
e.prototype.addCollectBlock = function() {
for (var t, e, r = {
101: 0,
102: 0,
103: 0,
104: 0,
105: 0,
106: 0,
107: 0
}, o = [], a = f.boardInfo.faceBlocks, c = 0; c < h.ROW; c++) for (var s = 0; s < h.COL; s++) a && a[c][s] > 100 && r[a[c][s]]++;
var u = C.chapterDifficultyInfo.chapterDifficultyList.get(b.chapterGameInfo.chapterNum), y = d.chapterConfigInfo.chapterDatasCfg[b.chapterGameInfo.chapterNum].Condition.RequiredCollections;
try {
for (var m = n(y), _ = m.next(); !_.done; _ = m.next()) {
var v = _.value, P = g.chapterCollectInfo.getRemainCollectNum(v.Key);
P > 0 && (C.chapterDifficultyInfo.isChapterSimple(u) && Math.ceil(1.8 * P) > r[v.Key] ? o.push(v.Key) : C.chapterDifficultyInfo.isChapterMedium(u) && Math.ceil(1.4 * P) > r[v.Key] ? o.push(v.Key) : C.chapterDifficultyInfo.isChapterDifficulty(u) && Math.ceil(1.1 * P) > r[v.Key] && o.push(v.Key));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
_ && !_.done && (e = m.return) && e.call(m);
} finally {
if (t) throw t.error;
}
}
if (0 != o.length) {
var S = p.algorithmInfo.blockIdList, I = [];
for (c = 0; c < 3; c++) {
var T = l.algorithmPosInfo.getPos(S[c]), E = Math.floor(Math.random() * T.length), O = Math.floor(Math.random() * o.length);
I[c] = {
Key: o[O],
pos: E
};
}
i.storage.setItem("chapterCollectPosDetail", I);
} else i.storage.setItem("chapterCollectPosDetail", []);
};
e.prototype.onGameOver = function() {
if (m.gameOverGameInfo.isChapterWin && 0 == b.chapterGameInfo.chapterNum) {
var t = I.chapterDataStatisticsInfo.gameEndStatisticsForeverInfo;
t.levelOneGameNum = b.chapterGameInfo.gameNum;
i.storage.setItem("chapterGameEndStatisticsForeverInfo", t);
}
};
e.prototype.onStartGame = function() {};
return e;
}(s.Proxy);
r.ChapterDataStatistics_Proxy = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../algorithmStrategy/events/E_ChapterAlgorithmStrategy_RunState": "E_ChapterAlgorithmStrategy_RunState",
"../../algorithmStrategy/type/ChapterAlgorithmStrategyType": "ChapterAlgorithmStrategyType",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../events/E_ChapterDataStatistics_Clear": "E_ChapterDataStatistics_Clear",
"../vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo"
} ],
ChapterDataStatistics_Time_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "63779+QM0VHQa1zq5zNx2F8", "ChapterDataStatistics_Time_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDataStatistics_Time_Proxy = void 0;
var c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/base/ui/UI"), p = t("../../../../../../scripts/falcon/Proxy"), l = t("../../../../../../scripts/modules/game/events/E_Game_EventHide"), u = t("../../../../../../scripts/modules/game/events/E_Game_EventShow"), h = t("../../prefab/ChapterPrefabConfig"), f = t("../events/E_ChapterDataStatistics_Clear"), d = t("../events/E_ChapterDataStatistics_Count"), y = t("../vo/ChapterDataStatisticsInfo"), m = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
s.UI.addEventListener("open", function(e) {
e === h.ChapterPrefabConfig.ChapterGame && t.onStartGame();
});
};
e.prototype.registerEvents = function() {
return [ d.E_ChapterDataStatistics_Count, f.E_ChapterDataStatistics_Clear, u.E_Game_EventShow, l.E_Game_EventHide ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_ChapterDataStatistics_Count:
case l.E_Game_EventHide:
this.onTouchEnd(t);
break;

case f.E_ChapterDataStatistics_Clear:
this.onDataClear(t);
break;

case u.E_Game_EventShow:
this.onStartGame();
}
};
e.prototype.onStartGame = function() {
var t = y.chapterDataStatisticsInfo.timeStatisticsInfo;
t.time = new Date().getTime();
c.storage.setItem("chapterTimeStatisticsInfo", t);
};
e.prototype.onTouchEnd = function() {
return n(this, void 0, void 0, function() {
var t, e;
return i(this, function() {
t = y.chapterDataStatisticsInfo.timeStatisticsInfo;
e = new Date().getTime() - t.time;
t.spend += e;
c.storage.setItem("chapterTimeStatisticsInfo", t);
return [ 2 ];
});
});
};
e.prototype.onDataClear = function() {
return n(this, void 0, void 0, function() {
return i(this, function() {
c.storage.setItem("chapterTimeStatisticsInfo", {
time: new Date().getTime(),
spend: 0
});
return [ 2 ];
});
});
};
return e;
}(p.Proxy);
r.ChapterDataStatistics_Time_Proxy = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/game/events/E_Game_EventHide": void 0,
"../../../../../../scripts/modules/game/events/E_Game_EventShow": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../events/E_ChapterDataStatistics_Clear": "E_ChapterDataStatistics_Clear",
"../events/E_ChapterDataStatistics_Count": "E_ChapterDataStatistics_Count",
"../vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo"
} ],
ChapterDefaultBoardInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9cc5fPutqxF3ZModItXgMPI", "ChapterDefaultBoardInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterDefaultBoardInfo = void 0;
r.chapterDefaultBoardInfo = new function() {}();
cc._RF.pop();
}, {} ],
ChapterDefaultBoard_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bf4229H3IdIDbz1TLSDL5Lx", "ChapterDefaultBoard_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDefaultBoard_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterDefaultBoard_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterDefaultBoard_Proxy ];
};
return e;
}(n.Module);
r.ChapterDefaultBoard_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterDefaultBoard_Proxy": "ChapterDefaultBoard_Proxy"
} ],
ChapterDefaultBoard_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8a1134BenxO1pV4xfpnI14z", "ChapterDefaultBoard_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDefaultBoard_Proxy = void 0;
var c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../scripts/falcon/EventManager"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/board/vo/BoardRendererInfo"), h = t("../../../../../../scripts/modules/board/vo/BoardInfo"), f = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), d = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), y = t("../../../../../../scripts/modules/game/events/E_Game_Start"), m = t("../../../../../../scripts/modules/gameWay/vo/GameWayInfo"), _ = t("../../board/vo/ChapterBoardInfo"), v = t("../../collect/vo/ChapterCollectInfo"), g = t("../../game/vo/ChapterGameInfo"), C = t("../../score/events/E_ChapterScore_Reset"), b = t("../../score/vo/ChapterScoreInfo"), P = t("../../topInfo/components/ChapterTopInfoCollect"), S = t("../events/E_ChapterDefaultBoard_ReadyComplete"), I = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ y.E_Game_Start ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case y.E_Game_Start:
this.onProduceChapterDefaultBoard(t);
}
};
e.prototype.onProduceChapterDefaultBoard = function(t) {
var e, r, o, a, n, c;
this.setChapterConditionCfg(g.chapterGameInfo.chapterNum);
if (1 == (null === (c = null === (n = f.chapterConfigInfo.chapterDatasCfg[g.chapterGameInfo.chapterNum]) || void 0 === n ? void 0 : n.Condition) || void 0 === c ? void 0 : c.Way)) {
var l = v.chapterCollectInfo.collectTotalCollectItems, u = f.chapterConfigInfo.chapterDatasCfg[g.chapterGameInfo.chapterNum].Condition.RequiredCollections;
if (0 === Object.keys(l).length) {
try {
for (var h = i(u), d = h.next(); !d.done; d = h.next()) l[(P = d.value).Key] = P.Value;
} catch (t) {
e = {
error: t
};
} finally {
try {
d && !d.done && (r = h.return) && r.call(h);
} finally {
if (e) throw e.error;
}
}
s.storage.setItem("chapterCollectTotalCollectItems", l);
}
var y = v.chapterCollectInfo.collectRemainCollectItems;
if (0 === Object.keys(y).length) {
try {
for (var m = i(u), _ = m.next(); !_.done; _ = m.next()) {
var P;
y[(P = _.value).Key] = v.chapterCollectInfo.getCollectTotalNum(P.Key);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
_ && !_.done && (a = m.return) && a.call(m);
} finally {
if (o) throw o.error;
}
}
s.storage.setItem("chapterCollectRemainCollectItems", y);
}
} else {
t.data.newGame && p.EventManager.dispatchModuleEvent(new C.E_ChapterScore_Reset());
0 != v.chapterCollectInfo.collectTotalScore && "number" == typeof v.chapterCollectInfo.collectTotalScore || s.storage.setItem("chapterCollectTotalScore", f.chapterConfigInfo.chapterDatasCfg[g.chapterGameInfo.chapterNum].Condition.RequiredScore);
}
if (t.data.newGame) {
this.setChapterBoardCfg(g.chapterGameInfo.chapterNum);
this.resetCollecTop();
}
this.setChapterColor();
0 === b.chapterScoreInfo.score && this.onDot();
p.EventManager.dispatchModuleEvent(new S.E_ChapterDefaultBoard_ReadyComplete());
};
e.prototype.resetCollecTop = function() {
var t = Cinst(P.default);
t && t.reset();
};
e.prototype.setChapterBoardCfg = function(t) {
for (var e = _.chapterBoardInfo.faceBlocks, r = 0; r < e.length; r++) e[r] = h.boardInfo.NULL[r];
var o = f.chapterConfigInfo.chapterDatasCfg;
if (o) for (r = 0; r < o.length; r++) if (o[r].Num == t + 1) {
for (var a = 0; a < o[r].Map.length; a++) if (0 == o[r].Map[a]) {
var n = Math.floor(a / u.ROW), i = Math.floor(a % u.COL);
e[n][i] = -1;
} else {
n = Math.floor(a / u.ROW), i = Math.floor(a % u.COL);
e[n][i] = o[r].Map[a];
}
break;
}
s.storage.setItem("chapterFaceBlocks", e);
};
e.prototype.setChapterColor = function() {};
e.prototype.setChapterConditionCfg = function(t) {
var e = this.createChapterCondition(t);
if (e) s.storage.setItem("chapterCondition", e); else {
s.storage.setItem("chapterCondition", {});
p.EventManager.dispatchModuleEvent(new d.E_Game_BackHome());
}
};
e.prototype.onDot = function() {
if (0 === b.chapterScoreInfo.score) {
var t = g.chapterGameInfo.gameNum, e = g.chapterGameInfo.tryTimes, r = g.chapterGameInfo.stage, o = g.chapterGameInfo.chapterNum;
DS("usr_data_game_start", {
gameId: t,
GameType: 3,
TryTimes: e,
TravelId: r,
Travellevelid: o + 1,
ComboWayType: m.gameWayInfo.gameWayNum
});
}
};
e.prototype.createChapterCondition = function(t) {
if (f.chapterConfigInfo.chapterDatasCfg.length > 0) for (var e = 0; e < f.chapterConfigInfo.chapterDatasCfg.length; e++) if (f.chapterConfigInfo.chapterDatasCfg[e].Num == t + 1) return f.chapterConfigInfo.chapterDatasCfg[e].Condition;
return null;
};
n([ c.trait("CTDotDeadReportToUsrDataGameEndTrait", "添加死亡报告到用户数据"), c.trait("PureGemTrait", "关卡模式纯宝石关卡"), c.trait("TravelAlgorithmNewDirectionBTrait", "关卡算法新方向B") ], e.prototype, "onProduceChapterDefaultBoard", null);
n([ c.trait("PureGemTrait", "关卡模式纯宝石关卡"), c.trait("TravelCollectSingleColorTrait", "关卡单一颜色") ], e.prototype, "setChapterColor", null);
n([ c.trait("IsTravelMoreDiamondAwardTrait", "[return]当前关卡目标翻倍过") ], e.prototype, "createChapterCondition", null);
return n([ classId("ChapterDefaultBoard_Proxy") ], e);
}(l.Proxy);
r.ChapterDefaultBoard_Proxy = I;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../scripts/modules/gameWay/vo/GameWayInfo": void 0,
"../../board/vo/ChapterBoardInfo": "ChapterBoardInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../score/events/E_ChapterScore_Reset": "E_ChapterScore_Reset",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../../topInfo/components/ChapterTopInfoCollect": "ChapterTopInfoCollect",
"../events/E_ChapterDefaultBoard_ReadyComplete": "E_ChapterDefaultBoard_ReadyComplete"
} ],
ChapterDifficultyStrategyGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "03577xGUs9M/IE1V6/B2rzK", "ChapterDifficultyStrategyGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterDifficultyInfo = void 0;
var o = t("../type/ChapterDifficultyStrategyType"), a = function() {
function t() {
this._chapterDifficultyList = new Map();
}
Object.defineProperty(t.prototype, "chapterDifficultyList", {
get: function() {
return this._chapterDifficultyList;
},
enumerable: !1,
configurable: !0
});
t.prototype.isChapterDifficulty = function(t) {
return t == o.CHAPTER_DIFF_TYPE.DIFFICULT;
};
t.prototype.isChapterMedium = function(t) {
return t == o.CHAPTER_DIFF_TYPE.MEDIUM;
};
t.prototype.isChapterSimple = function(t) {
return t == o.CHAPTER_DIFF_TYPE.SIMPLE || t == o.CHAPTER_DIFF_TYPE.NOVICE || t == o.CHAPTER_DIFF_TYPE.SIMPLE_DIFFICULT;
};
return t;
}();
r.chapterDifficultyInfo = new a();
cc._RF.pop();
}, {
"../type/ChapterDifficultyStrategyType": "ChapterDifficultyStrategyType"
} ],
ChapterDifficultyStrategyType: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7d5d73LZN5OqKmFXyv5hOme", "ChapterDifficultyStrategyType");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CHAPTER_DIFF_TYPE = void 0;
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.SIMPLE = 1] = "SIMPLE";
t[t.MEDIUM = 2] = "MEDIUM";
t[t.DIFFICULT = 3] = "DIFFICULT";
t[t.NOVICE = 4] = "NOVICE";
t[t.SIMPLE_DIFFICULT = 5] = "SIMPLE_DIFFICULT";
})(r.CHAPTER_DIFF_TYPE || (r.CHAPTER_DIFF_TYPE = {}));
cc._RF.pop();
}, {} ],
ChapterDifficultyStrategy_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2e0c4d16x9PF6ux/7zS6Com", "ChapterDifficultyStrategy_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDifficultyStrategy_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterDifficultyStrategy_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterDifficultyStrategy_Proxy ];
};
return e;
}(n.Module);
r.ChapterDifficultyStrategy_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterDifficultyStrategy_Proxy": "ChapterDifficultyStrategy_Proxy"
} ],
ChapterDifficultyStrategy_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "056c0KwzPdEVYxTFayLXgXV", "ChapterDifficultyStrategy_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterDifficultyStrategy_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../game/vo/ChapterGameInfo"), p = t("../events/E_ChapterDifficultyStrategy_Event"), l = t("../type/ChapterDifficultyStrategyType"), u = t("../vo/ChapterDifficultyStrategyGameInfo"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ p.E_ChapterDifficultyStrategy_Event ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case p.E_ChapterDifficultyStrategy_Event:
this.setChapterDifficult(t);
}
};
e.prototype.setChapterDifficult = function(t) {
for (var e = 0; e < s.chapterGameInfo.chapterAllNum; e++) {
var r = this.getChapterDifficult(e);
u.chapterDifficultyInfo.chapterDifficultyList.set(e, r);
}
var o = t.callback;
o && "function" == typeof o && o();
};
e.prototype.getChapterDifficult = function(t) {
var e = u.chapterDifficultyInfo.chapterDifficultyList.get(t);
return null != e ? e : this.determineDifficulty(t);
};
e.prototype.determineDifficulty = function(t) {
var e = t % 3;
return 2 === e ? l.CHAPTER_DIFF_TYPE.DIFFICULT : 1 === e ? l.CHAPTER_DIFF_TYPE.MEDIUM : l.CHAPTER_DIFF_TYPE.SIMPLE;
};
n([ i.trait("LevelLoopTrait", "关卡10循环") ], e.prototype, "determineDifficulty", null);
return n([ classId("ChapterDifficultyStrategy_Proxy") ], e);
}(c.Proxy);
r.ChapterDifficultyStrategy_Proxy = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../events/E_ChapterDifficultyStrategy_Event": "E_ChapterDifficultyStrategy_Event",
"../type/ChapterDifficultyStrategyType": "ChapterDifficultyStrategyType",
"../vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo"
} ],
ChapterEliminate_Effects_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e12e8MSgCpACqugYx27n5i/", "ChapterEliminate_Effects_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterEliminate_Effects_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../prefab/ChapterPrefabConfig"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
var t = this;
c.UI.addEventListener("open", function(e) {
e === p.ChapterPrefabConfig.ChapterGame && t.dealEliminateClearEffect(e);
});
};
e.prototype.dealEliminateClearEffect = function() {};
n([ i.trait("AddClearTipsExTrait", "移入可消除效果优化GP依赖项") ], e.prototype, "dealEliminateClearEffect", null);
return n([ classId("ChapterEliminate_Effects_Proxy") ], e);
}(s.Proxy);
r.ChapterEliminate_Effects_Proxy = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig"
} ],
ChapterEliminate_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4eacf7B1vZHOa1c228KcBqh", "ChapterEliminate_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterEliminate_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterEliminate_Effects_Proxy"), c = t("./proxys/Eliminate_ChapterSound_Proxy"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ c.Eliminate_ChapterSound_Proxy, i.ChapterEliminate_Effects_Proxy ];
};
return e;
}(n.Module);
r.ChapterEliminate_Module = s;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterEliminate_Effects_Proxy": "ChapterEliminate_Effects_Proxy",
"./proxys/Eliminate_ChapterSound_Proxy": "Eliminate_ChapterSound_Proxy"
} ],
ChapterEncourage_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "51774XMH/RNL6icxqLHkIPF", "ChapterEncourage_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterEncourage_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterEncourage_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterEncourage_Proxy ];
};
return e;
}(n.Module);
r.ChapterEncourage_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterEncourage_Proxy": "ChapterEncourage_Proxy"
} ],
ChapterEncourage_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "45fb76ZW5RLSJ5sOwCQOr2k", "ChapterEncourage_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterEncourage_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/modules/encourage/type/EncourageType"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/encourage/events/E_Encourage_TouchEnd"), l = t("../../../../../../scripts/modules/encourage/events/E_Encourage_PlayLevelColor"), u = t("../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_PlayNodeAnimation"), h = t("../../../../../../scripts/modules/encourage/events/E_Encourage_ShouldPlayEncourage"), f = t("../../../../../../scripts/modules/encourage/events/E_Encourage_SoundPlay"), d = t("../../../../../../scripts/modules/encourage/events/E_Encourage_setEffectPos"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ p.E_Encourage_TouchEnd, h.E_Encourage_ShouldPlayEncourage, f.E_Encourage_SoundPlay, d.E_Encourage_SetEffectPos, l.E_Encourage_PlayLevelColor, u.E_ComboScoreTip_PlayNodeAnimation ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case p.E_Encourage_TouchEnd:
this.onTouchEnd(t);
break;

case h.E_Encourage_ShouldPlayEncourage:
this.onEncouragePlayCondition(t);
break;

case f.E_Encourage_SoundPlay:
this.onEncourageSoundPlay(t);
break;

case d.E_Encourage_SetEffectPos:
this.onSetEffectPos(t);
break;

case l.E_Encourage_PlayLevelColor:
this.onPlayLevelColor(t);
break;

case u.E_ComboScoreTip_PlayNodeAnimation:
this.onPlayComboScoreTipNodeAnimation(t);
}
};
e.prototype.onTouchEnd = function(t) {
var e = t.state, r = e.touchEndState.eliminateCount;
if (r >= 2) {
var o = Math.min(5, Math.max(0, r - 2));
e.promptType = c.EncouragePromptType["PROMPT" + o];
} else e.promptType = c.EncouragePromptType.PROMPT_NONE;
};
e.prototype.onEncouragePlayCondition = function() {};
e.prototype.onEncourageSoundPlay = function() {};
e.prototype.onSetEffectPos = function() {};
e.prototype.onPlayLevelColor = function(t) {
var e = t.state, r = e.armature, o = e.eliminateCount, a = e.color;
if (cc.isValid(r.node)) {
var n = Math.min(5, Math.max(0, o - 2)), i = c.EncouragePromptType["PROMPT" + n] + "_" + c.EncourageColorType["COLOR" + (a - 1)];
i && r.playAnimation(i, 1);
}
};
e.prototype.onPlayComboScoreTipNodeAnimation = function() {};
n([ i.trait("IsOpenSolveDifficultProblemsAmazingTrait", "解决困难难题用时超过10.3秒，成功解题后播放激励词动画&音效"), i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化，根据收集物数量去播放激励词，替换returnValue") ], e.prototype, "onTouchEnd", null);
n([ i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化，根据收集物数量去播放激励词，替换returnValue") ], e.prototype, "onEncouragePlayCondition", null);
n([ i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化，根据收集物数量去播放激励词，变更参数值为收集物的数量, replace=true") ], e.prototype, "onEncourageSoundPlay", null);
n([ i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化，根据收集物数量去播放激励词，变更参数值为收集物的数量") ], e.prototype, "onSetEffectPos", null);
n([ i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化，根据收集物数量去播放激励词") ], e.prototype, "onPlayLevelColor", null);
n([ i.trait("TravelWordOptTrait", "旅行模式更多正反馈激励词优化，这个特性下不嫖激励词的分数") ], e.prototype, "onPlayComboScoreTipNodeAnimation", null);
return n([ classId("ChapterEncourage_Proxy") ], e);
}(s.Proxy);
r.ChapterEncourage_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_PlayNodeAnimation": void 0,
"../../../../../../scripts/modules/encourage/events/E_Encourage_PlayLevelColor": void 0,
"../../../../../../scripts/modules/encourage/events/E_Encourage_ShouldPlayEncourage": void 0,
"../../../../../../scripts/modules/encourage/events/E_Encourage_SoundPlay": void 0,
"../../../../../../scripts/modules/encourage/events/E_Encourage_TouchEnd": void 0,
"../../../../../../scripts/modules/encourage/events/E_Encourage_setEffectPos": void 0,
"../../../../../../scripts/modules/encourage/type/EncourageType": void 0
} ],
ChapterFailConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "eb4aeoT93lAz7hw1pBepMs6", "ChapterFailConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.tipsPath = void 0;
r.tipsPath = "prefabs/fail/ChapterTipsFail";
cc._RF.pop();
}, {} ],
ChapterFail_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "543ffqJ3z9GZaZSbIBibN6t", "ChapterFail_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterFail_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterFail_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterFail_Proxy ];
};
return e;
}(n.Module);
r.ChapterFail_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterFail_Proxy": "ChapterFail_Proxy"
} ],
ChapterFail_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "96ef959xnVOm7U+tCS1bLCo", "ChapterFail_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterFail_Proxy = r.ChapterOverPanelType = void 0;
var s, p = t("../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../scripts/base/ui/UI"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), f = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), d = t("../../game/vo/ChapterGameInfo"), y = t("../../gameOver/vo/ChapterGameOverGameInfo"), m = t("../components/ChapterCollectFail"), _ = t("../components/ChapterScoreFail"), v = t("../events/E_ChapterFail_Hide"), g = t("../events/E_ChapterFail_Show");
(function(t) {
t.chapterScoreFail = "chapterScoreFail";
t.chapterCollectFail = "chapterCollectFail";
})(s = r.ChapterOverPanelType || (r.ChapterOverPanelType = {}));
var C = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ g.E_ChapterFail_Show, v.E_ChapterFail_Hide ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case g.E_ChapterFail_Show:
this.openUI(t);
break;

case v.E_ChapterFail_Hide:
this.hideUI(t);
}
};
e.prototype.openUI = function() {
var t;
return i(this, void 0, void 0, function() {
var e, r, o;
return c(this, function(a) {
switch (a.label) {
case 0:
if ((null === (t = d.chapterGameInfo.chapterCondition) || void 0 === t ? void 0 : t.Way) != h.ChapterType.score) return [ 3, 3 ];
e = y.chapterGameOverGameInfo.scoreRemain;
r = y.chapterGameOverGameInfo.scoreTotal;
(isNaN(e) || e < 0) && (e = 0);
(isNaN(r) || r < 0) && (r = 0);
return l.UI.activeState(y.chapterGameOverGameInfo.getChapterScoreFailConfig().url) ? [ 3, 2 ] : [ 4, l.UI.show(y.chapterGameOverGameInfo.getChapterScoreFailConfig(), f.uiLayer) ];

case 1:
a.sent();
o = {
score: e,
goalScore: r,
isShowDefTip: !1
};
this.chapterOverPanelShowFinished(s.chapterScoreFail, o);
a.label = 2;

case 2:
return [ 2 ];

case 3:
return l.UI.activeState(y.chapterGameOverGameInfo.getChapterCollectFailConfig().url) ? [ 3, 5 ] : [ 4, l.UI.show(y.chapterGameOverGameInfo.getChapterCollectFailConfig(), f.uiLayer) ];

case 4:
a.sent();
if (d.chapterGameInfo.chapterCondition) {
o = {
requiredCollections: d.chapterGameInfo.chapterCondition.RequiredCollections,
remainCollect: y.chapterGameOverGameInfo.collectRemainInfo,
isShowDefTip: !0
};
this.chapterOverPanelShowFinished(s.chapterCollectFail, o);
}
a.label = 5;

case 5:
return [ 2 ];
}
});
});
};
e.prototype.hideUI = function() {
var t, e;
return i(this, void 0, void 0, function() {
return c(this, function() {
l.UI.activeState(null === (t = y.chapterGameOverGameInfo.getChapterScoreFailConfig()) || void 0 === t ? void 0 : t.url) && l.UI.hideUI(y.chapterGameOverGameInfo.getChapterScoreFailConfig());
l.UI.activeState(null === (e = y.chapterGameOverGameInfo.getChapterCollectFailConfig()) || void 0 === e ? void 0 : e.url) && l.UI.hideUI(y.chapterGameOverGameInfo.getChapterCollectFailConfig());
return [ 2 ];
});
});
};
e.prototype.chapterOverPanelShowFinished = function(t, e) {
t === s.chapterScoreFail ? Cinst(_.default).setState(e) : t === s.chapterCollectFail && Cinst(m.default).setState(e);
};
n([ p.trait("IsOpenLevelOverTipsChangeTrait", "开始隐藏修改提示语，避免闪烁") ], e.prototype, "openUI", null);
n([ p.trait("ReduceTravelSettlementTrait"), p.trait("CTRobotChapterTrait", "机器人调整关卡") ], e.prototype, "hideUI", null);
n([ p.trait("IsOpenLevelOverTipsChangeTrait", "修改提示语") ], e.prototype, "chapterOverPanelShowFinished", null);
return n([ classId("ChapterFail_Proxy") ], e);
}(u.Proxy);
r.ChapterFail_Proxy = C;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../gameOver/vo/ChapterGameOverGameInfo": "ChapterGameOverGameInfo",
"../components/ChapterCollectFail": "ChapterCollectFail",
"../components/ChapterScoreFail": "ChapterScoreFail",
"../events/E_ChapterFail_Hide": "E_ChapterFail_Hide",
"../events/E_ChapterFail_Show": "E_ChapterFail_Show"
} ],
ChapterFontConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e3dd5lnr6tAnLcnuqLlFz+5", "ChapterFontConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FontConfigType = r.satisfies = r.ChapterFontConfig = void 0;
r.ChapterFontConfig = {};
cc._RF.pop();
}, {} ],
ChapterGBM_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "640ea5DOHdDl7Jc1npqMGck", "ChapterGBM_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGBM_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterGBM_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterGBM_Proxy ];
};
return e;
}(n.Module);
r.ChapterGBM_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterGBM_Proxy": "ChapterGBM_Proxy"
} ],
ChapterGBM_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f1f91CtWiRB1Z0gYRP2P5e9", "ChapterGBM_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGBM_Proxy = void 0;
var i = t("../../../../../../scripts/falcon/Proxy"), c = t("../../../../../../scripts/modules/game/events/E_Game_Replay"), s = t("../../dataStatistics/vo/ChapterDataStatisticsInfo"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ c.E_Game_Replay ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case c.E_Game_Replay:
this.onGameReplay(s.chapterDataStatisticsInfo.historyGameOverGBMServerDataList);
}
};
e.prototype.onGameReplay = function() {};
return n([ classId("ChapterGBM_Proxy") ], e);
}(i.Proxy);
r.ChapterGBM_Proxy = p;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../dataStatistics/vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo"
} ],
ChapterGameDataClear_Disk_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8f4acDmVeBHhq9MFVFnXFJs", "ChapterGameDataClear_Disk_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameDataClear_Disk_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../scripts/falcon/EventManager"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/board/vo/BoardInfo"), f = t("../../../../../../scripts/modules/gameDataClear/events/E_GameDataClear_Disk"), d = t("../../../../../../scripts/modules/score/vo/ScoreInfo"), y = t("../../collect/events/E_ChapterCollect_Reset"), m = t("../../dataStatistics/events/E_ChapterDataStatistics_Clear"), _ = t("../../gameOver/vo/ChapterGameOverGameInfo"), v = t("../../revive/vo/ChapterReviveStatisticsInfo"), g = t("../../score/vo/ChapterScoreInfo"), C = t("../events/E_ChapterGameDataClear_Disk"), b = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.type = 0;
return e;
}
e.prototype.registerEvents = function() {
return [ C.E_ChapterGameDataClear_Disk ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case C.E_ChapterGameDataClear_Disk:
this.onClearChapterDist(t);
}
};
e.prototype.onClearChapterDist = function(t) {
this.type = t.option.Type;
l.EventManager.dispatchModuleEvent(new f.E_GameDataClear_Disk());
this.resetDiskReviveData();
this.resetAlgorithm();
this.disposeReviveData();
this.resetScore();
this.resetBoard();
this.resetCollection();
this.resetBlocksProducer();
this.resetRound();
l.EventManager.dispatchModuleEvent(new m.E_ChapterDataStatistics_Clear());
};
e.prototype.resetAlgorithm = function() {
p.storage.setItem("chapterHardQuestionNum", 0);
p.storage.setItem("chapterHardQuestionSuccess", 0);
};
e.prototype.disposeReviveData = function() {};
e.prototype.resetDiskReviveData = function() {
p.storage.setItem("chapterReviveProgressArr", []);
p.storage.setItem("chapterReviveShowNum", 0);
p.storage.setItem("chapterAdvertisementShowNum", 0);
p.storage.setItem("chapterAdvertisementSuccessNum", 0);
p.storage.setItem("chapterReviveNum", 0);
p.storage.setItem("chapterActualReviveNum", 0);
p.storage.setItem("chapterReviveSuccessStatisticsInfo", v.chapterReviveStatisticsInfo.reviveSuccessStatisticsObj);
};
e.prototype.resetScore = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
p.storage.setItem("chapterHighRecordScore", d.scoreInfo.highScore);
_.chapterGameOverGameInfo._scoreRemain = g.chapterScoreInfo.score;
p.storage.setItem("chapterScore", 0);
return [ 2 ];
});
});
};
e.prototype.resetCollection = function() {
l.EventManager.dispatchModuleEvent(new y.E_ChapterCollect_Reset());
};
e.prototype.resetBoard = function() {
p.storage.setItem("chapterFaceBlocks", h.boardInfo.NULL);
};
e.prototype.resetBlocksProducer = function() {
p.storage.setItem("chapterProducerBlocks", [ -1, -1, -1 ]);
};
e.prototype.resetRound = function() {
p.storage.setItem("chapterRoundNum", 0);
};
n([ s.trait("TerminateRefreshScoreTrait"), s.trait("FillCleanAlgoTrait", "填空消除连贯清除数据") ], e.prototype, "resetAlgorithm", null);
n([ s.trait("GateWinStreakStateTrait") ], e.prototype, "disposeReviveData", null);
n([ s.trait("ReviveBuffTrait", "结算重置数据") ], e.prototype, "resetDiskReviveData", null);
return n([ classId("ChapterGameDataClear_Disk_Proxy") ], e);
}(u.Proxy);
r.ChapterGameDataClear_Disk_Proxy = b;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/gameDataClear/events/E_GameDataClear_Disk": void 0,
"../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../collect/events/E_ChapterCollect_Reset": "E_ChapterCollect_Reset",
"../../dataStatistics/events/E_ChapterDataStatistics_Clear": "E_ChapterDataStatistics_Clear",
"../../gameOver/vo/ChapterGameOverGameInfo": "ChapterGameOverGameInfo",
"../../revive/vo/ChapterReviveStatisticsInfo": "ChapterReviveStatisticsInfo",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../events/E_ChapterGameDataClear_Disk": "E_ChapterGameDataClear_Disk"
} ],
ChapterGameDataClear_Memory_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "585104OkwNCHId+VJ5mualp", "ChapterGameDataClear_Memory_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameDataClear_Memory_Proxy = void 0;
var n = t("../../../../../../scripts/falcon/Proxy"), i = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), c = t("../../../../../../scripts/modules/eliminate/vo/EliminateGameInfo"), s = t("../events/E_ChapterGameDataClear_Memory"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ s.E_ChapterGameDataClear_Memory ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case s.E_ChapterGameDataClear_Memory:
this.onChapterMemoryClear();
}
};
e.prototype.onChapterMemoryClear = function() {
this.resetAlgorithmData();
this.resetEliminateData();
};
e.prototype.resetAlgorithmData = function() {
i.algorithmStrategyInfo.clearAlgorithmStrategyInfo();
};
e.prototype.resetEliminateData = function() {
c.eliminateGameInfo._eliminateMusicIndex = 0;
c.eliminateGameInfo._noEliminateNum = 0;
};
return e;
}(n.Proxy);
r.ChapterGameDataClear_Memory_Proxy = p;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/eliminate/vo/EliminateGameInfo": void 0,
"../events/E_ChapterGameDataClear_Memory": "E_ChapterGameDataClear_Memory"
} ],
ChapterGameDataClear_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3df01irThZObrdQi9vZbpz6", "ChapterGameDataClear_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameDataClear_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterGameDataClear_Disk_Proxy"), c = t("./proxys/ChapterGameDataClear_Memory_Proxy"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterGameDataClear_Disk_Proxy, c.ChapterGameDataClear_Memory_Proxy ];
};
return e;
}(n.Module);
r.ChapterGameDataClear_Module = s;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterGameDataClear_Disk_Proxy": "ChapterGameDataClear_Disk_Proxy",
"./proxys/ChapterGameDataClear_Memory_Proxy": "ChapterGameDataClear_Memory_Proxy"
} ],
ChapterGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bc95cJC5yZNbLwkSeKtzRmE", "ChapterGameInfo");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterGameInfo = void 0;
var a = t("../../../../../../scripts/base/decorators/DecoratorMemoize"), n = t("../../../../../../scripts/base/decorators/DecoratorTrait"), i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), s = function() {
function t() {
this._moduleLayer = [ "ChapterList", "ChapterScoreFail", "ChapterCollectFail", "ChapterScoreWin", "ChapterCollectWin", "ChapterReduceScoreFail", "ChapterReduceScoreWin", "ChapterReduceCollectFail", "ChapterReduceCollectWin" ];
}
Object.defineProperty(t.prototype, "roundNum", {
get: function() {
return i.storage.getItem("chapterRoundNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "gameNum", {
get: function() {
return i.storage.getItem("chapterGameNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "oneChapterGameNum", {
get: function() {
return i.storage.getItem("chapterOneChapterGameNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "gameNumNoRefresh", {
get: function() {
return i.storage.getItem("chapterGameNumNoRefresh", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "stage", {
get: function() {
return i.storage.getItem("chapterPeriodsIndex", 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "chapterNum", {
get: function() {
return i.storage.getItem("chapterNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "lastChapterNum", {
get: function() {
return i.storage.getItem("lastChapterNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "chapterAllNum", {
get: function() {
return c.chapterConfigInfo.chapterDatasCfg.length || 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "chapterFirstJoin", {
get: function() {
return i.storage.getItem("chapterFirstJoin", !0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "chapterCondition", {
get: function() {
return i.storage.getItem("chapterCondition");
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isThroughAll", {
get: function() {
return this.chapterNum >= this.chapterAllNum;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tryTimes", {
get: function() {
return i.storage.getItem("chapterTryTimes", 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "entryTime", {
get: function() {
return i.storage.getItem("chapterEntryTime", Date.now());
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "gameTime", {
get: function() {
return Date.now() - this.entryTime;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "currentLevelDifficulty", {
get: function() {
return i.storage.getItem("currentLevelDifficulty", 0);
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpenModuleLayer = function(t) {
return this._moduleLayer.includes(t);
};
t.prototype.init = function() {};
o([ n.trait("ReduceTravelSettlementTrait") ], t.prototype, "isOpenModuleLayer", null);
o([ a.memoize ], t.prototype, "init", null);
return o([ classId("ChapterGameInfo") ], t);
}();
r.chapterGameInfo = new s();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorMemoize": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0
} ],
ChapterGameOverGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5cc381l+XZOF6alDr2/UbvV", "ChapterGameOverGameInfo");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterGameOverGameInfo = void 0;
var a = t("../../../../../../scripts/base/decorators/DecoratorTrait"), n = t("../../prefab/ChapterPrefabConfig"), i = function() {
function t() {
this._collectTotalInfo = {};
this._collectRemainInfo = {};
this._scoreTotal = 0;
this._scoreRemain = 0;
}
Object.defineProperty(t.prototype, "collectTotalInfo", {
get: function() {
return this._collectTotalInfo;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "collectRemainInfo", {
get: function() {
return this._collectRemainInfo;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "scoreTotal", {
get: function() {
return this._scoreTotal;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "scoreRemain", {
get: function() {
return this._scoreRemain;
},
enumerable: !1,
configurable: !0
});
t.prototype.getChapterScoreFailConfig = function(t) {
return t || n.ChapterPrefabConfig.ChapterScoreFail;
};
t.prototype.getChapterCollectFailConfig = function(t) {
return t || n.ChapterPrefabConfig.ChapterCollectFail;
};
t.prototype.getChapterScoreWinConfig = function(t) {
return t || n.ChapterPrefabConfig.ChapterScoreWin;
};
t.prototype.getChapterCollectWinConfig = function(t) {
return t || n.ChapterPrefabConfig.ChapterCollectWin;
};
o([ a.trait("ReduceTravelSettlementTrait") ], t.prototype, "getChapterScoreFailConfig", null);
o([ a.trait("ReduceTravelSettlementTrait") ], t.prototype, "getChapterCollectFailConfig", null);
o([ a.trait("ReduceTravelSettlementTrait") ], t.prototype, "getChapterScoreWinConfig", null);
o([ a.trait("ReduceTravelSettlementTrait") ], t.prototype, "getChapterCollectWinConfig", null);
return o([ classId("ChapterGameOverGameInfo") ], t);
}();
r.chapterGameOverGameInfo = new i();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig"
} ],
ChapterGameOverType: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "70b78Kyx2lJQKpuxEZIz+fn", "ChapterGameOverType");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameOverType = void 0;
(function(t) {
t[t.ScoreFail = 0] = "ScoreFail";
t[t.ScoreWin = 1] = "ScoreWin";
t[t.CollectFail = 2] = "CollectFail";
t[t.CollectWin = 3] = "CollectWin";
})(r.GameOverType || (r.GameOverType = {}));
cc._RF.pop();
}, {} ],
ChapterGameOver_GameEndPre_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cdab3XVF4VNCJR4U/LNKMYw", "ChapterGameOver_GameEndPre_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameOver_GameEndPre_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/EventManager"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), l = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre"), u = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_Splash"), h = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), f = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ l.E_GameOver_GameEndPre ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_GameOver_GameEndPre:
this.onGameEndPre(t);
}
};
e.prototype.onGameEndPre = function(t) {
var e = this.canDirectEnterGameEnd(t.option.win);
h.gameOverGameInfo._isChapterWin = e;
e ? c.EventManager.dispatchModuleEvent(new p.E_GameOver_GameEnd({
source: t.option.source
})) : this.isCanShowSplash() ? c.EventManager.dispatchModuleEvent(new u.E_GameOver_Splash({
source: t.option.source
})) : c.EventManager.dispatchModuleEvent(new p.E_GameOver_GameEnd({
source: t.option.source
}));
};
e.prototype.isCanShowSplash = function() {
return !0;
};
e.prototype.canDirectEnterGameEnd = function(t) {
return t;
};
n([ i.trait("CTReviveTimeOutSkipSplashTrait", "复活倒计时结束，不展示刷屏(检测是否触发刷屏动画)") ], e.prototype, "isCanShowSplash", null);
return n([ classId("ChapterGameOver_GameEndPre_Proxy") ], e);
}(s.Proxy);
r.ChapterGameOver_GameEndPre_Proxy = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_Splash": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0
} ],
ChapterGameOver_GameEnd_Dot_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e32bdsb/6ZDo66KkkqVTkPw", "ChapterGameOver_GameEnd_Dot_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameOver_GameEnd_Dot_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), l = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), u = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), h = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), f = t("../../../../../../scripts/modules/binary/vo/BinaryBoard"), d = t("../../../../../../scripts/modules/binary/vo/BinarySupport"), y = t("../../../../../../scripts/modules/board/vo/BoardInfo"), m = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), _ = t("../../../../../../scripts/modules/dataStatistics/vo/DataStatisticsInfo"), v = t("../../../../../../scripts/modules/game/events/E_Game_Replay"), g = t("../../../../../../scripts/modules/game/type/GameType"), C = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataClearPre"), b = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), P = t("../../../../../../scripts/modules/score/vo/ScoreInfo"), S = t("../../../../../../scripts/modules/skin/vo/SkinInfo"), I = t("../../advertisement/vo/ChapterAdvertisementGameInfo"), T = t("../../algorithm/vo/ChapterAlgorithmHardData"), E = t("../../algorithm/vo/ChapterAlgorithmName"), O = t("../../blocksProducer/vo/ChapterBlocksProducerInfo"), A = t("../../board/vo/ChapterBoardInfo"), R = t("../../collect/vo/ChapterCollectInfo"), w = t("../../dataStatistics/vo/ChapterDataStatisticsInfo"), G = t("../../game/vo/ChapterGameInfo"), x = t("../../revive/vo/ChapterReviveGameInfo"), k = t("../../revive/vo/ChapterReviveStatisticsInfo"), B = t("../../score/vo/ChapterScoreInfo"), M = t("../../timer/vo/ChapterTimerInfo"), D = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._ResultType = 0;
return e;
}
e.prototype.registerEvents = function() {
return [ C.E_GameOver_GameEndDataClearPre, v.E_Game_Replay ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case C.E_GameOver_GameEndDataClearPre:
this.onGameEndReady(t);
break;

case v.E_Game_Replay:
this.onGameReplay();
}
};
e.prototype.onGameEndReady = function() {
b.gameOverGameInfo.isChapterWin ? this._ResultType = 1 : this._ResultType = 0;
this.onGameEndDMDot();
this.onGameEndDSDot();
};
e.prototype.onGameReplay = function() {
this._ResultType = 2;
this.onGameEndDMDot();
};
e.prototype.onGameEndDMDot = function() {
var t, e = this, r = B.chapterScoreInfo.score, o = G.chapterGameInfo.roundNum, a = G.chapterGameInfo.gameNum, n = G.chapterGameInfo.stage, i = G.chapterGameInfo.chapterNum, s = G.chapterGameInfo.tryTimes, v = A.chapterBoardInfo.faceBlocks, C = O.chapterBlocksProducerInfo.producerBlocks, b = M.chapterTimerInfo.timeSinceGameReady, E = m.chapterConfigInfo.chapterDatasCfg[i].Condition.Way, D = new f.BinaryBoard();
D.convertToBinaryBoard(_.dataStatisticsInfo.blockProduceBoardList);
t = D.checkPutAllBlocks(l.algorithmInfo.blockIdList, null) ? 1 : 0;
DS("usr_data_game_end", {
warmhand: 0,
IsReplay: G.chapterGameInfo.tryTimes > 0 ? 1 : 0,
weight: d.binarySupport.getWeightValue(y.boardInfo.faceBlocks),
grade: 0 == E ? P.scoreInfo.score : 0,
gameId: a,
roundId: o,
entropy: 1,
edgeId: h.algorithmStrategyLogic.getEdgeNum(v),
emptyGridNum: h.algorithmStrategyLogic.getEmptyNum(v),
deadViewGrid: v,
deadId: 1 !== this._ResultType ? C.filter(function(t) {
return -1 !== t;
}) : [],
GameType: g.GameType.Chapter,
TravelId: n,
Travellevelid: i + 1,
travellevelidstring: (i + 1).toString(),
TryTimes: s,
ResultType: this._ResultType,
process: m.chapterConfigInfo.getChapterProgress(),
ReviveShow: x.chapterReviveGameInfo.reviveShowNum,
ReviveSuccess: I.chapterAdvertisementGameInfo.advertisementSuccessNum,
matrix_of_last_round: _.dataStatisticsInfo.blockProduceBoardList,
block_state_id: l.algorithmInfo.blockIdList ? JSON.parse(JSON.stringify(l.algorithmInfo.blockIdList)) : [],
RealTime: Math.floor(M.chapterTimerInfo.spendTime / 1e3),
GameTime: Math.floor((new Date().getTime() - b) / 1e3)
}, [ {
assign: function() {
var t, e, r, o, a = I.chapterAdvertisementGameInfo.advertisementSuccessNum, n = x.chapterReviveGameInfo.reviveShowNum, i = k.chapterReviveStatisticsInfo.reviveSuccessStatisticsInfo;
return {
ReviveShow: n,
ReviveSuccess: a,
RevivePostion1: null !== (e = null === (t = i.progress) || void 0 === t ? void 0 : t[0]) && void 0 !== e ? e : 0,
RevivePostion2: null !== (o = null === (r = i.progress) || void 0 === r ? void 0 : r[1]) && void 0 !== o ? o : 0
};
},
class: "IsCacheReviveNumTrait"
}, {
assign: function() {
var t = l.algorithmInfo.blockExtraList;
return {
better_block: t.better_block,
better_space: t.better_space
};
},
class: "FillCleanAlgoTrait"
}, {
assign: function(t) {
return {
all_jewel: t.state.all_jewel
};
},
class: "PureGemTrait"
}, {
class: "IsWarmhandsTrait",
assign: function(t) {
return {
warmhand: t._isWarmHand
};
}
}, {
class: "TerminateRefreshScoreTrait",
assign: function() {
var t = c.storage.getItem("chapterTerminateRefreshScoreDataTimes", 0);
return {
forbid_same_block_travel: 0 === t ? null : t
};
}
}, {
class: "CTDotFirstClickDataGameEndTrait",
assign: function() {
var o = 0 == E ? {
RequiredScore: m.chapterConfigInfo.chapterDatasCfg[i].Condition.RequiredScore,
RequiredCollections: m.chapterConfigInfo.chapterDatasCfg[i].Condition.RequiredCollections
} : {
RequiredScore: 0,
RequiredCollections: m.chapterConfigInfo.chapterDatasCfg[i].Condition.RequiredCollections
};
return {
LevelHelp: 1,
his_max_score: null,
name: "usr_data_game_end",
ExtraGameType: 0,
dead_block_list_detail: w.chapterDataStatisticsInfo.collectPosDetail,
real_grade: r,
score: 0 == E ? P.scoreInfo.score : 0,
totalGameId: 2 == e._ResultType ? G.chapterGameInfo.gameNum : G.chapterGameInfo.gameNumNoRefresh,
travel_type: E,
travel_detail: o,
is_solvable: t
};
}
}, {
class: "CTDotClickGameEndInfoTrait",
assign: function() {
var t = m.chapterConfigInfo.chapterDatasCfg[i].Condition.Way, e = R.chapterCollectInfo.remainCollections, r = w.chapterDataStatisticsInfo.dataStatisticsInfo, o = (r.comboTouchNum, 
r.comboRoundNum, r.comboMaxNum, r.eliminate1), a = r.eliminate2, n = r.eliminate3, c = r.eliminate4, s = r.eliminate5, l = r.eliminate6;
return {
combo_cnt: 0,
rec_strategy: p.OFFER_TYPE_STRINGS[u.algorithmName.algoExpectedId],
rec_strategy_fact: u.algorithmName.algoActualName,
count_combo: 0,
max_combo: 0,
one_clean: o,
two_clean: a,
three_clean: n,
four_clean: c,
five_clean: s,
six_clean: l,
puzzle_cnt: T.chapterAlgorithmHardData.hardQuestionSuccess,
item_collect_detail: 0 == t ? [] : e
};
}
}, {
assign: function(t) {
return {
win_streak: t.win_streak
};
},
class: "DailyWinStreakStateTrait"
}, {
assign: function(t) {
var e = t.getDotData("chapter");
return {
count_strategy: e.count_strategy,
count_strategy_fact: e.count_strategy_fact,
interval_cnt: e.interval_cnt,
block_cnt: e.block_cnt,
dragging_time_median: e.dragging_time_median,
dragging_time_avg: e.dragging_time_avg,
target_type: e.target_type,
target_num: e.target_num,
dda_status: e.dda_status,
reward_ad_click_cnt: e.reward_ad_click_cnt
};
},
class: "CTDotClickUsrDataGameEndTrait"
}, {
assign: function(t) {
var e = t.getDead_report();
return {
dead_report: JSON.stringify(e)
};
},
class: "CTDotDeadReportToUsrDataGameEndTrait"
}, {
assign: function(t) {
return {
LevelHelp: t.state.levelHelp
};
},
class: "LevelHelpStateTrait"
}, {
assign: function() {
return {
skin_switch_num: c.storage.getItem("SetAddRandomSwitch_travelClickNum", 0),
skin_switch: c.storage.getItem("SetAddRandomSwitch_isClose", 0) ? 0 : 1
};
},
class: "SetAddRandomSwitchTrait"
}, {
assign: function() {
return {
defaultskin_num: c.storage.getItem("SetAddDefultSkinBtn_travelClickNum", 0)
};
},
class: "SetAddDefultSkinBtnTrait"
}, {
assign: function() {
return {
skin_used: S.skinInfo.currentSkinId
};
},
class: "IsOpenChangeSkinTrait"
} ]);
i >= 48 && DS("finishTravel", {
travelId: n
});
};
e.prototype.onGameEndDSDot = function() {
B.chapterScoreInfo.score;
var t = B.chapterScoreInfo.highScore, e = G.chapterGameInfo.roundNum, r = G.chapterGameInfo.gameNum, o = G.chapterGameInfo.stage, a = G.chapterGameInfo.chapterNum, n = A.chapterBoardInfo.faceBlocks, i = O.chapterBlocksProducerInfo.producerBlocks, c = M.chapterTimerInfo.timeSinceGameReady, s = E.chapterAlgorithmName.algoExpectedId, l = E.chapterAlgorithmName.algoActualName, u = m.chapterConfigInfo.chapterDatasCfg[a].Condition.Way, h = R.chapterCollectInfo.requiredCollections, f = R.chapterCollectInfo.remainCollections, _ = I.chapterAdvertisementGameInfo.advertisementShowNum, v = I.chapterAdvertisementGameInfo.advertisementSuccessNum, C = x.chapterReviveGameInfo.reviveShowNum;
DC("game_end", {
weight: d.binarySupport.getWeightValue(y.boardInfo.faceBlocks),
result_type: this._ResultType,
his_max_score: t,
score: 0 == u ? P.scoreInfo.score : 0,
game_type: g.GameType.Chapter,
game_id: r,
round_id: e,
matrix: n,
dead_block_list: i,
RealTime: Math.floor(M.chapterTimerInfo.spendTime / 1e3),
game_time: Math.floor((new Date().getTime() - c) / 1e3),
item_collect_detail: 0 == u ? [] : f,
process: m.chapterConfigInfo.getChapterProgress(),
travel_id: o,
travel_lv: a + 1,
travel_type: u,
travel_detail: {
RequiredScore: 0 == u ? m.chapterConfigInfo.chapterDatasCfg[a].Condition.RequiredScore : 0,
RequiredCollections: h
},
rec_strategy: p.OFFER_TYPE_STRINGS[s],
rec_strategy_fact: l,
session_control: {
trace_id: "-1"
},
revive_show_cnt: C,
reward_ad_click_cnt: _,
revice_success_cnt: v,
puzzle_cnt: 1
});
};
n([ i.trait("CTGameComboScoreTrait", "combo分数补丁") ], e.prototype, "onGameEndDMDot", null);
return n([ classId("ChapterGameOver_GameEnd_Dot_Proxy") ], e);
}(s.Proxy);
r.ChapterGameOver_GameEnd_Dot_Proxy = D;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../scripts/modules/binary/vo/BinaryBoard": void 0,
"../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/dataStatistics/vo/DataStatisticsInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataClearPre": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../scripts/modules/skin/vo/SkinInfo": void 0,
"../../advertisement/vo/ChapterAdvertisementGameInfo": "ChapterAdvertisementGameInfo",
"../../algorithm/vo/ChapterAlgorithmHardData": "ChapterAlgorithmHardData",
"../../algorithm/vo/ChapterAlgorithmName": "ChapterAlgorithmName",
"../../blocksProducer/vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo",
"../../board/vo/ChapterBoardInfo": "ChapterBoardInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../dataStatistics/vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../revive/vo/ChapterReviveGameInfo": "ChapterReviveGameInfo",
"../../revive/vo/ChapterReviveStatisticsInfo": "ChapterReviveStatisticsInfo",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../../timer/vo/ChapterTimerInfo": "ChapterTimerInfo"
} ],
ChapterGameOver_GameEnd_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9871cDr2axHRa8O71wBTmH7", "ChapterGameOver_GameEnd_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameOver_GameEnd_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenShow"), p = t("../../../../../../scripts/modules/advertisement/type/AdvertisementType"), l = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), u = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataCleared"), h = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataClearPre"), f = t("../../../../../../scripts/modules/gameOver/type/GameOverType"), d = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), y = t("../../gameDataClear/events/E_ChapterGameDataClear_Disk"), m = t("../../gameDataClear/events/E_ChapterGameDataClear_Memory"), _ = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ l.E_GameOver_GameEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_GameOver_GameEnd:
this.onGameOver(t, d.gameOverGameInfo.isChapterWin);
}
};
e.prototype.onGameOver = function(t) {
var e = this;
setTimeoutSafe(function() {
e.dispatchModuleEvent(new h.E_GameOver_GameEndDataClearPre());
e.clearData();
e.dispatchModuleEvent(new u.E_GameOver_GameEndDataCleared());
e.dispatchModuleEvent(new s.E_Advertisement_FullScreenShow({
type: p.FullScreenAdvertisePosState.FullScreen_GameOver,
source: t.option.source
}));
}, 0);
};
e.prototype.clearData = function() {
this.dispatchModuleEvent(new y.E_ChapterGameDataClear_Disk({
Type: f.GameOverDiskType.Over
}));
this.dispatchModuleEvent(new m.E_ChapterGameDataClear_Memory());
};
n([ i.trait("IsStatisticalDataCollectTrait", "成就数据统计"), i.trait("DailyWinStreakStateTrait", "每日连胜状态"), i.trait("BAlgorithmDynamicDifficultyTrait", "交叉动态难度, 关卡失败后, 无尽的换题计数+1"), i.trait("BCommentDisplayTrait", "根据配置或服务器下发来显示评论框"), i.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现，数据清理") ], e.prototype, "onGameOver", null);
return n([ classId("ChapterGameOver_GameEnd_Proxy") ], e);
}(c.Proxy);
r.ChapterGameOver_GameEnd_Proxy = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenShow": void 0,
"../../../../../../scripts/modules/advertisement/type/AdvertisementType": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataClearPre": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataCleared": void 0,
"../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../gameDataClear/events/E_ChapterGameDataClear_Disk": "E_ChapterGameDataClear_Disk",
"../../gameDataClear/events/E_ChapterGameDataClear_Memory": "E_ChapterGameDataClear_Memory"
} ],
ChapterGameOver_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3ee3e/+BqJNbboKgu7Hc8WV", "ChapterGameOver_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameOver_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterGameOver_GameEnd_Dot_Proxy"), c = t("./proxys/ChapterGameOver_GameEnd_Proxy"), s = t("./proxys/ChapterGameOver_GameEndPre_Proxy"), p = t("./proxys/ChapterGameOver_Proxy"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ p.ChapterGameOver_Proxy, c.ChapterGameOver_GameEnd_Proxy, i.ChapterGameOver_GameEnd_Dot_Proxy, s.ChapterGameOver_GameEndPre_Proxy ];
};
return e;
}(n.Module);
r.ChapterGameOver_Module = l;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterGameOver_GameEndPre_Proxy": "ChapterGameOver_GameEndPre_Proxy",
"./proxys/ChapterGameOver_GameEnd_Dot_Proxy": "ChapterGameOver_GameEnd_Dot_Proxy",
"./proxys/ChapterGameOver_GameEnd_Proxy": "ChapterGameOver_GameEnd_Proxy",
"./proxys/ChapterGameOver_Proxy": "ChapterGameOver_Proxy"
} ],
ChapterGameOver_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e0768GpcvlO7IKZ7quTtTaZ", "ChapterGameOver_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGameOver_Proxy = void 0;
var s = t("../../../../../../scripts/base/async/WaitFor"), p = t("../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../scripts/falcon/EventManager"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), f = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_CanNotPut"), d = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), y = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), m = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), _ = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre"), v = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), g = t("../../game/vo/ChapterGameInfo"), C = t("../../revive/events/E_ChapterRevive_Check"), b = t("../events/E_ChapterGameOver_ShowFinish"), P = t("./../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), S = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ P.E_BlocksProducer_TouchEnd, f.E_BlocksProducer_CanNotPut, b.E_ChapterGameOver_ShowFinish ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case P.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
break;

case f.E_BlocksProducer_CanNotPut:
this.onCanNotPut();
break;

case b.E_ChapterGameOver_ShowFinish:
this.onShowFinish(t);
}
};
e.prototype.onTouchEnd = function(t) {
return i(this, void 0, void 0, function() {
var e;
return c(this, function(r) {
switch (r.label) {
case 0:
if (!y.chapterConfigInfo.canAchievedGoal()) return [ 3, 2 ];
v.gameOverGameInfo.setChapterTriggerGameOver(!0);
(e = Cinst(h.default)) && e.setMaskActive(!0);
return [ 4, this.getGameEndDelayTime(t) ];

case 1:
r.sent();
this.dealGameEnd();
r.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.getGameEndDelayTime = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
return [ 2, Promise.resolve() ];
});
});
};
e.prototype.dealGameEnd = function() {
var t = this, e = g.chapterGameInfo.chapterCondition;
if (e.Way === d.ChapterType.score) setTimeoutSafe(function() {
t.onGameEnd(!0);
}, 600); else if (e.Way === d.ChapterType.collect) {
var r = s.waitFor.wait("chapterCollectItemAnimState");
r && r.then(function() {
t.onGameEnd(!0);
});
}
};
e.prototype.onCanNotPut = function() {
l.EventManager.dispatchModuleEvent(new C.E_ChapterRevive_Check());
};
e.prototype.onShowFinish = function() {
l.EventManager.dispatchModuleEvent(new m.E_Game_Ready());
};
e.prototype.onGameEnd = function(t) {
l.EventManager.dispatchModuleEvent(new _.E_GameOver_GameEndPre({
win: t
}));
};
n([ p.trait("FeatclearscreenbombTrait", "清盘动画方块爆发涌现，将分数上顶积分") ], e.prototype, "getGameEndDelayTime", null);
n([ p.trait("ReduceTravelSettlementTrait") ], e.prototype, "onShowFinish", null);
return n([ classId("ChapterGameOver_Proxy") ], e);
}(u.Proxy);
r.ChapterGameOver_Proxy = S;
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/WaitFor": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_CanNotPut": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../revive/events/E_ChapterRevive_Check": "E_ChapterRevive_Check",
"../events/E_ChapterGameOver_ShowFinish": "E_ChapterGameOver_ShowFinish",
"./../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0
} ],
ChapterGame_Dot_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a981aficYNNx52q0Qo3McC4", "ChapterGame_Dot_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_Dot_Proxy = void 0;
var n = t("../../../../../../scripts/base/ui/UI"), i = t("../../../../../../scripts/falcon/Proxy"), c = t("../../../../../../scripts/modules/board/vo/BoardInfo"), s = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), p = t("../../prefab/ChapterPrefabConfig"), l = t("../../score/vo/ChapterScoreInfo"), u = t("../components/ChapterGame"), h = t("../vo/ChapterGameInfo"), f = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
n.UI.addEventListener("open", function(e) {
e === p.ChapterPrefabConfig.ChapterGame && Cinst(u.default) && t.onChapterGameShow();
});
};
e.prototype.onChapterGameShow = function() {
if (0 === l.chapterScoreInfo.score) {
var t = h.chapterGameInfo.gameNum, e = h.chapterGameInfo.stage, r = h.chapterGameInfo.chapterNum, o = h.chapterGameInfo.gameNumNoRefresh, a = c.boardInfo.faceBlocks, n = s.chapterConfigInfo.chapterDatasCfg[r].Condition, i = n.Way, p = 0 == i ? {
RequiredScore: n.RequiredScore,
RequiredCollections: n.RequiredCollections
} : {
RequiredScore: 0,
RequiredCollections: n.RequiredCollections
};
DC("game_start", {
game_total: o,
game_type: 2,
game_id: t,
matrix: a,
travel_id: e,
travel_lv: r + 1,
dda_status: 0,
travel_type: i,
travel_detail: p
});
}
};
return e;
}(i.Proxy);
r.ChapterGame_Dot_Proxy = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../components/ChapterGame": "ChapterGame",
"../vo/ChapterGameInfo": "ChapterGameInfo"
} ],
ChapterGame_GameInfoUpdate_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8b7e27R1G9On5/aZKv9Snq0", "ChapterGame_GameInfoUpdate_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_GameInfoUpdate_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/achievement/events/E_Achievement_Chapter_Pass"), l = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataCleared"), u = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), h = t("../events/E_ChapterGame_GameReplayDataCleared"), f = t("../vo/ChapterGameInfo"), d = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ l.E_GameOver_GameEndDataCleared, h.E_ChapterGame_GameReplayDataCleared ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_GameOver_GameEndDataCleared:
this.updateGameNumNoRefresh();
this.onDataCleared(u.gameOverGameInfo.isChapterWin);
this.dispatchModuleEvent(new p.E_Achievement_Chapter_Pass());
break;

case h.E_ChapterGame_GameReplayDataCleared:
this.onDataCleared(!1);
}
};
e.prototype.onDataCleared = function(t) {
this.updateOneChapterGameWay();
this.updateChapterNum(t);
this.updateGameNum();
};
e.prototype.updateChapterNum = function(t) {
t && c.storage.setItem("chapterNum", f.chapterGameInfo.chapterNum + 1);
};
e.prototype.updateGameNum = function() {
c.storage.setItem("chapterGameNum", f.chapterGameInfo.gameNum + 1);
this.updateChapterGameNumAfter();
};
e.prototype.updateChapterGameNumAfter = function() {};
e.prototype.updateOneChapterGameWay = function() {
var t = f.chapterGameInfo.chapterNum, e = f.chapterGameInfo.oneChapterGameNum;
0 === t && c.storage.setItem("chapterOneChapterGameNum", e + 1);
};
e.prototype.updateGameNumNoRefresh = function() {
c.storage.setItem("chapterGameNumNoRefresh", f.chapterGameInfo.gameNumNoRefresh + 1);
};
n([ i.trait("NewSeasonGuidanceTrait", "更新新赛季动效"), i.trait("BPuzzleTimeTrait", "更新红点"), i.trait("IsStatisticalDataCollectTrait", "更新游戏局数后") ], e.prototype, "updateChapterGameNumAfter", null);
return n([ classId("ChapterGame_GameInfoUpdate_Proxy") ], e);
}(s.Proxy);
r.ChapterGame_GameInfoUpdate_Proxy = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/achievement/events/E_Achievement_Chapter_Pass": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataCleared": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../events/E_ChapterGame_GameReplayDataCleared": "E_ChapterGame_GameReplayDataCleared",
"../vo/ChapterGameInfo": "ChapterGameInfo"
} ],
ChapterGame_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1b980kEpFdAQbsMYZCDlTAs", "ChapterGame_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterGame_Proxy"), c = t("./proxys/ChapterGame_Ready_Proxy"), s = t("./proxys/ChapterGame_Replay_Proxy"), p = t("./proxys/ChapterGame_GameInfoUpdate_Proxy"), l = t("./proxys/ChapterGame_Dot_Proxy"), u = t("./proxys/ChapterGame_Native_Proxy"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterGame_Proxy, s.ChapterGame_Replay_Proxy, c.ChapterGame_Ready_Proxy, p.ChapterGame_GameInfoUpdate_Proxy, l.ChapterGame_Dot_Proxy, u.ChapterGame_Native_Proxy ];
};
return e;
}(n.Module);
r.ChapterGame_Module = h;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterGame_Dot_Proxy": "ChapterGame_Dot_Proxy",
"./proxys/ChapterGame_GameInfoUpdate_Proxy": "ChapterGame_GameInfoUpdate_Proxy",
"./proxys/ChapterGame_Native_Proxy": "ChapterGame_Native_Proxy",
"./proxys/ChapterGame_Proxy": "ChapterGame_Proxy",
"./proxys/ChapterGame_Ready_Proxy": "ChapterGame_Ready_Proxy",
"./proxys/ChapterGame_Replay_Proxy": "ChapterGame_Replay_Proxy"
} ],
ChapterGame_Native_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ce193QFPe9BJqFuP5gfZc3B", "ChapterGame_Native_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_Native_Proxy = void 0;
var n = t("../../../../../../scripts/falcon/Proxy"), i = t("../../../../../../scripts/modules/game/events/E_Game_Start"), c = t("../../../../../../scripts/modules/game/type/GameType"), s = t("../../../../../../scripts/modules/native/NativeGameMode"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ i.E_Game_Start ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case i.E_Game_Start:
this.onGameStart(t);
}
};
e.prototype.onGameStart = function() {
s.NativeGameMode.callNativeGameMode(c.GameType.Chapter);
};
return e;
}(n.Proxy);
r.ChapterGame_Native_Proxy = p;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/native/NativeGameMode": void 0
} ],
ChapterGame_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6bc8d48PJ9GYqEkwUJsaITx", "ChapterGame_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../scripts/base/ui/UI"), p = t("../../../../../../scripts/falcon/EventManager"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), h = t("../../../../../../scripts/modules/board/components/Board"), f = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), d = t("../../../../../../scripts/modules/game/events/E_Game_Replay"), y = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), m = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_Splash"), _ = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), v = t("../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Show"), g = t("../../../../../../scripts/modules/prefab/PrefabConfig"), C = t("../../../../../../scripts/modules/revive/events/E_Revive_Show"), b = (t("../../algorithmStrategy/config/ChapterAlgorithmStrategyDiffTypeConfig"), 
t("../../board/vo/ChapterBoardInfo")), P = t("../../collect/vo/ChapterCollectInfo"), S = t("../../defaultBoard/events/E_ChapterDefaultBoard_ReadyComplete"), I = t("../../difficultyStrategy/type/ChapterDifficultyStrategyType"), T = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), E = t("../../prefab/ChapterPrefabConfig"), O = t("../../score/vo/ChapterScoreInfo"), A = t("../../topInfo/components/ChapterTopInfo"), R = t("../components/ChapterGame"), w = t("../vo/ChapterGameInfo"), G = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
s.UI.addEventListener("open", function(e) {
if (e === E.ChapterPrefabConfig.ChapterGame) {
var r = Cinst(R.default);
r && t.onChapterGameShow(r);
}
});
};
e.prototype.registerEvents = function() {
return [ f.E_Game_BackHome, S.E_ChapterDefaultBoard_ReadyComplete, y.E_GameOver_GameEnd, d.E_Game_Replay, m.E_GameOver_Splash, C.E_Revive_Show ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case f.E_Game_BackHome:
this.onBackHome();
break;

case S.E_ChapterDefaultBoard_ReadyComplete:
this.onStartGame();
break;

case y.E_GameOver_GameEnd:
this.onGameOver(t);
break;

case d.E_Game_Replay:
this.onRelayGame();
break;

case m.E_GameOver_Splash:
this.onGameOverPre(t);
break;

case C.E_Revive_Show:
this.onReviveShow(t);
}
};
e.prototype.onReviveShow = function() {};
e.prototype.onBackHome = function() {
p.EventManager.dispatchModuleEvent(new v.E_ModeChoice_Show());
};
e.prototype.onStartGame = function() {
s.UI.show(E.ChapterPrefabConfig.ChapterGame);
};
e.prototype.onChapterGameShow = function(t) {
var e = this, r = t.topContainer, o = t.boardContainer;
c.storage.setItem("chapterEntryTime", Date.now());
var a = T.chapterDifficultyInfo.chapterDifficultyList.get(w.chapterGameInfo.chapterNum);
c.storage.setItem("currentLevelDifficulty", a || I.CHAPTER_DIFF_TYPE.NONE);
s.UI.show(E.ChapterPrefabConfig.ChapterTopInfo, r).then(function(t) {
if (t) {
var e = t.getComponent(A.default);
e && e.setState({
chapter: w.chapterGameInfo.chapterNum,
chapterCondition: w.chapterGameInfo.chapterCondition,
collectRemainCollectItems: P.chapterCollectInfo.collectRemainCollectItems,
score: O.chapterScoreInfo.score
});
}
});
s.UI.show(g.PrefabConfig.Board, o).then(function(t) {
t.getComponent(h.default).setState({
boards: b.chapterBoardInfo.faceBlocks,
backPath: e.getBoardBgPath()
});
});
this.onDot();
};
e.prototype.getBoardBgPath = function(t) {
return t || "";
};
e.prototype.onGameOver = function() {
this.onGameEndData(_.gameOverGameInfo.isChapterWin);
};
e.prototype.onRelayGame = function() {
this.onGameEndData(!1);
};
e.prototype.onGameEndData = function(t) {
if (t) c.storage.setItem("chapterTryTimes", 0); else {
var e = w.chapterGameInfo.tryTimes;
c.storage.setItem("chapterTryTimes", e + 1);
}
};
e.prototype.onGameOverPre = function() {
var t = Cinst(u.default);
if (t) {
t.setMaskActive(!0);
s.UI.show(g.PrefabConfig.NoSpace, t.mask);
}
};
e.prototype.onDot = function() {
DS("ui_theme_travel_battle_show");
};
n([ i.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现，复活展示") ], e.prototype, "onReviveShow", null);
n([ i.trait("CTDotClickUsrDataGameEndTrait") ], e.prototype, "onBackHome", null);
n([ i.trait("TravelEasterEggTrait", "进入关卡游戏界面"), i.trait("NewSeasonGuidanceTrait", "进入关卡游戏界面"), i.trait("IsOpenSolveDifficultProblemsAmazingTrait", "解决困难难题用时超过10.3秒，成功解题后播放激励词动画&音效"), i.trait("PlacementBlocksEliminateEffectTrait", "初始化数据"), i.trait("RightPutHintCtrTrait", "初始化数据") ], e.prototype, "onStartGame", null);
n([ i.trait("SwitchingModesCBStrategyTrait", "切换模式时首局60秒内无难题"), i.trait("FastNearTkxcTrait", "无尽和关卡填空消除难度(调参)") ], e.prototype, "onChapterGameShow", null);
n([ i.trait("SurfaceOptimizeStateTrait") ], e.prototype, "getBoardBgPath", null);
return n([ classId("ChapterGame_Proxy") ], e);
}(l.Proxy);
r.ChapterGame_Proxy = G;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_Splash": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Show": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Show": void 0,
"../../algorithmStrategy/config/ChapterAlgorithmStrategyDiffTypeConfig": "ChapterAlgorithmStrategyDiffTypeConfig",
"../../board/vo/ChapterBoardInfo": "ChapterBoardInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../defaultBoard/events/E_ChapterDefaultBoard_ReadyComplete": "E_ChapterDefaultBoard_ReadyComplete",
"../../difficultyStrategy/type/ChapterDifficultyStrategyType": "ChapterDifficultyStrategyType",
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../../topInfo/components/ChapterTopInfo": "ChapterTopInfo",
"../components/ChapterGame": "ChapterGame",
"../vo/ChapterGameInfo": "ChapterGameInfo"
} ],
ChapterGame_Ready_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "734cevysTtFCYsxMcrbROC+", "ChapterGame_Ready_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_Ready_Proxy = void 0;
var i = t("../../../../../../scripts/base/ui/UI"), c = t("../../../../../../scripts/falcon/EventManager"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), l = t("../../../../../../scripts/modules/board/vo/BoardInfo"), u = t("../../../../../../scripts/modules/boardSplashAnimation/components/BoardSplashAnimation"), h = t("../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType"), f = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), d = t("../../../../../../scripts/modules/game/events/E_Game_Start"), y = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), m = t("../../../../../../scripts/modules/prefab/PrefabConfig"), _ = t("../../blocksProducer/vo/ChapterBlocksProducerInfo"), v = t("../../score/vo/ChapterScoreInfo"), g = t("../../../../../../scripts/base/storage/Storage"), C = t("../../../../../../scripts/base/decorators/DecoratorTrait"), b = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ f.E_Game_Ready ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case f.E_Game_Ready:
this.onChapterGameReady();
}
};
e.prototype.onChapterGameReady = function() {
this.resetChapterData();
this.resetBoardSplashAnimation();
this.onChapterGameReadyComplete();
this.resetBlocksProducerTouch();
};
e.prototype.resetChapterData = function() {
y.gameOverGameInfo.setChapterTriggerGameOver(!1);
y.gameOverGameInfo.setClassTriggerGameOver(!1);
};
e.prototype.resetBoardSplashAnimation = function() {
var t = Cinst(u.default);
t && t.setState({
type: h.BoardSplashAnimationPlayType.RESET
});
};
e.prototype.onChapterGameReadyComplete = function() {
var t = !1;
0 == _.chapterBlocksProducerInfo.hasValidBlock() && 0 == v.chapterScoreInfo.score && l.boardInfo.isNullBoard() && (t = !0);
g.storage.setItem("chapterTimeSinceGameReady", new Date().getTime());
c.EventManager.dispatchModuleEvent(new d.E_Game_Start({
newGame: t
}));
};
e.prototype.resetBlocksProducerTouch = function() {
var t = Cinst(p.default);
t && t.reset();
i.UI.hideUI(m.PrefabConfig.NoSpace);
};
n([ C.trait("IsWarmhandsTrait", "暖手局") ], e.prototype, "onChapterGameReadyComplete", null);
return n([ classId("ChapterGame_Ready_Proxy") ], e);
}(s.Proxy);
r.ChapterGame_Ready_Proxy = b;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/boardSplashAnimation/components/BoardSplashAnimation": void 0,
"../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../blocksProducer/vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo"
} ],
ChapterGame_Replay_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "06c6aRiseRFrrJvwIMOFnbC", "ChapterGame_Replay_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGame_Replay_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/base/ui/UI"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenShow"), l = t("../../../../../../scripts/modules/advertisement/type/AdvertisementType"), u = t("../../../../../../scripts/modules/game/events/E_Game_Replay"), h = t("../../../../../../scripts/modules/gameOver/type/GameOverType"), f = t("../../../../../../scripts/modules/prefab/PrefabConfig"), d = t("../../gameDataClear/events/E_ChapterGameDataClear_Disk"), y = t("../../gameDataClear/events/E_ChapterGameDataClear_Memory"), m = t("../events/E_ChapterGame_GameReplayDataCleared"), _ = t("../events/E_ChapterGame_GameReplayReady"), v = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ u.E_Game_Replay ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case u.E_Game_Replay:
this.onGameReplay();
}
};
e.prototype.onGameReplay = function() {
var t = this;
setTimeoutSafe(function() {
t.dispatchModuleEvent(new _.E_ChapterGame_GameReplayReady());
t.hideBlocksProducer();
t.clearData();
t.dispatchModuleEvent(new m.E_ChapterGame_GameReplayDataCleared());
setTimeoutSafe(function() {
t.dispatchModuleEvent(new p.E_Advertisement_FullScreenShow({
type: l.FullScreenAdvertisePosState.FullScreen_Replay
}));
}, 0);
}, 0);
};
e.prototype.clearData = function() {
this.dispatchModuleEvent(new d.E_ChapterGameDataClear_Disk({
Type: h.GameOverDiskType.Replay
}));
this.dispatchModuleEvent(new y.E_ChapterGameDataClear_Memory());
};
e.prototype.hideBlocksProducer = function() {
c.UI.hideUI(f.PrefabConfig.BlockProducer);
};
n([ i.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现，清除数据"), i.trait("BAlgorithmDynamicDifficultyTrait", "【算法】交叉动态难度 关卡重玩时给无尽增加换题计数") ], e.prototype, "onGameReplay", null);
return n([ classId("ChapterGame_Replay_Proxy") ], e);
}(s.Proxy);
r.ChapterGame_Replay_Proxy = v;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_FullScreenShow": void 0,
"../../../../../../scripts/modules/advertisement/type/AdvertisementType": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../gameDataClear/events/E_ChapterGameDataClear_Disk": "E_ChapterGameDataClear_Disk",
"../../gameDataClear/events/E_ChapterGameDataClear_Memory": "E_ChapterGameDataClear_Memory",
"../events/E_ChapterGame_GameReplayDataCleared": "E_ChapterGame_GameReplayDataCleared",
"../events/E_ChapterGame_GameReplayReady": "E_ChapterGame_GameReplayReady"
} ],
ChapterGame: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "41620KYb7BFxoidMlJ10AgP", "ChapterGame");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), s = t("../../../../../../scripts/base/storage/Storage"), p = t("../../timer/vo/ChapterTimerInfo"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bgContainer = null;
e.topContainer = null;
e.boardContainer = null;
e.blocksProducerContainer = null;
e.boardSplashAnimation = null;
e.operator = null;
e.goalContainer = null;
e.collectEffectContainer = null;
e.deltaTime = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.update = function(t) {
this.deltaTime += t;
if (this.deltaTime > 2) {
this.deltaTime = 0;
var e = Date.now(), r = e - p.chapterTimerInfo.spendStartTime, o = p.chapterTimerInfo.spendTime + r;
s.storage.setItem("chapterSpendTime", o);
s.storage.setItem("chapterSpendStartTime", e);
}
};
n([ h(cc.Node) ], e.prototype, "bgContainer", void 0);
n([ h(cc.Node) ], e.prototype, "topContainer", void 0);
n([ h(cc.Node) ], e.prototype, "boardContainer", void 0);
n([ h(cc.Node) ], e.prototype, "blocksProducerContainer", void 0);
n([ h(cc.Node) ], e.prototype, "boardSplashAnimation", void 0);
n([ h(cc.Node) ], e.prototype, "operator", void 0);
n([ h(cc.Node) ], e.prototype, "goalContainer", void 0);
n([ h(cc.Node) ], e.prototype, "collectEffectContainer", void 0);
n([ c.adapterFringe("operator") ], e.prototype, "onLoad", null);
return n([ u ], e);
}(i.default);
r.default = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../timer/vo/ChapterTimerInfo": "ChapterTimerInfo"
} ],
ChapterGoalCollect: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4d23cDU6IpB6q9tG9WarCBL", "ChapterGoalCollect");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/audio/AudioInfo"), c = t("../../../../../../scripts/base/components/Component"), s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/loader/ResLoader"), l = t("../../audio/config/ChapterAudioConfig"), u = t("../../collect/vo/ChapterCollectInfo"), h = t("../../collectItem/components/ChapterCollectTopItem"), f = t("../../prefab/ChapterPrefabConfig"), d = t("../../topInfo/config/ChapterTopInfoConfig"), y = t("./ChapterGoal"), m = cc._decorator, _ = m.ccclass, v = m.property, g = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._cacheCollectItems = [];
e.items = null;
return e;
}
e.prototype.render = function() {
var t = this, e = this.state.targetCollect;
if (e) {
var r = e.length, o = d.ChapterTopInfoConfig.collectDisArr[r], a = 0;
r > 0 && (a = o * (r - 1));
var n = a / 2 * -1;
this.items.removeAllChildren();
var i = 0;
this.items.position = new cc.Vec3(0, 0);
for (var c = function(r) {
var a = e[r], c = a.Key;
a.Value;
p.ResLoader.asyncLoadByBundle("chapter", f.ChapterPrefabConfig.ChapterCollectTopItem.url, cc.Prefab).then(function(a) {
var s;
if (t._cacheCollectItems[r]) s = t._cacheCollectItems[r].node; else {
s = cc.instantiate(a);
t._cacheCollectItems[r] = {
node: s,
color: c,
collectCount: u.chapterCollectInfo.collectTotalCollectItems[c]
};
}
s.x = n + o * r;
s.y = 0;
s.opacity = 255;
s.setParent(null);
t.items.addChild(s);
s.getComponent(h.default).setState({
color: +c,
showMoveAnim: !0,
remainCollectCount: u.chapterCollectInfo.collectRemainCollectItems[c],
targetCount: u.chapterCollectInfo.collectTotalCollectItems[c]
});
++i === e.length && t.showAction();
});
}, s = 0; s < e.length; s++) c(s);
}
};
e.prototype.showAction = function() {
var t = this.state, e = t.topCollectItems, r = t.targetCollect;
this.items.position = new cc.Vec3(0, 0);
cc.tween(this.items).to(.13, {
opacity: 255
}).start();
var o = .53;
o = this.percentStreamerChangeDelayTime(o);
for (var a = 0, n = function(t) {
var n = r[t], s = n.Key, p = (n.Value, c._cacheCollectItems[t]), u = (p.color, p.node), f = (p.collectCount, 
e.find(function(t) {
return t.color === s;
}));
if (!f) {
a++;
return "continue";
}
var d = u.getComponent(h.default);
d.numLab.node.active = !0;
cc.tween(u).to(.13, {
scale: 1.2
}).call(function() {
var e = u.parent.convertToWorldSpaceAR(u.getPosition()), n = f.node.parent.convertToWorldSpaceAR(f.node.getPosition()), c = new cc.Vec2(n.x - e.x, n.y - e.y), s = Math.floor(c.y / 2), p = Math.floor(c.y), m = new cc.Vec2(s, -p);
cc.tween(u).delay(o + .07 * t).call(function() {
d.numLab.node.active = !1;
}).to(.27, {
scale: 1
}).start();
cc.tween(u).delay(o + .07 * t).bezierBy(.27, new cc.Vec2(0, 0), m, c).call(function() {
var t = u.getPosition();
u.position = new cc.Vec3(t.x + c.x, t.y + c.y);
f.node.getComponent(h.default).playAction();
if (++a == r.length) {
i.audioInfo.play(l.ChapterAudioConfig.travel_game_collect_item2);
Cinst(y.default).hideAction();
}
}).start();
}).start();
}, c = this, s = 0; s < r.length; s++) n(s);
};
e.prototype.percentStreamerChangeDelayTime = function(t) {
void 0 === t && (t = .53);
return t;
};
n([ v(cc.Node) ], e.prototype, "items", void 0);
n([ s.trait("PercentStreamerTrait", "初始挑战横幅的设计-旅行模式生效-添加百分比横幅") ], e.prototype, "percentStreamerChangeDelayTime", null);
return n([ classId("ChapterGoalCollect"), _ ], e);
}(c.default);
r.default = g;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../collectItem/components/ChapterCollectTopItem": "ChapterCollectTopItem",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../topInfo/config/ChapterTopInfoConfig": "ChapterTopInfoConfig",
"./ChapterGoal": "ChapterGoal"
} ],
ChapterGoalScore: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "87007DQTShHsKZUrUN1C7X4", "ChapterGoalScore");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../topInfo/components/ChapterTopInfoScore"), p = t("./ChapterGoal"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.goalScoreBg = null;
e.goalScoreLb = null;
return e;
}
e.prototype.onEnable = function() {
this.node.position = new cc.Vec3(0, 0);
this.node.scale = 1;
this.node.opacity = 0;
this.goalScoreBg.scale = 1;
this.goalScoreBg.position = new cc.Vec3(0, -26);
};
e.prototype.render = function() {
var t = this, e = Cinst(s.default);
e.targetLab.node.active = !1;
this.goalScoreLb.string = "" + this.state.goalScore;
this.node.opacity = 0;
cc.tween(this.node).to(.13, {
opacity: 255
}).start();
this.goalScoreBg.scale = .7;
this.goalScoreBg.position = new cc.Vec3(0, -26);
cc.tween(this.goalScoreBg).to(.13, {
scale: 1
}).call(function() {
var r = t.goalScoreBg.parent.convertToWorldSpaceAR(t.goalScoreBg.getPosition()), o = t.state.goalNode.parent.convertToWorldSpaceAR(t.state.goalNode.getPosition()), a = new cc.Vec2(o.x - r.x, o.y - r.y), n = Math.floor(a.y / 2), i = new cc.Vec2(n, 300), c = .53;
c = t.percentStreamerChangeDelayTime(c);
cc.tween(t.goalScoreBg).delay(c).bezierBy(.27, new cc.Vec2(0, 0), i, a).start();
cc.tween(t.goalScoreBg).delay(c).to(.27, {
scale: .6
}, {
easing: cc.easing.cubicIn
}).call(function() {
var t = Cinst(p.default);
e.targetLab.node.active = !0;
cc.tween(e.targetLab.node).to(.1, {
scale: 1.1 * .4
}).to(.1, {
scale: .4
}).start();
t.hideAction();
}).start();
}).start();
};
e.prototype.percentStreamerChangeDelayTime = function(t) {
void 0 === t && (t = .53);
return t;
};
n([ h(cc.Node) ], e.prototype, "goalScoreBg", void 0);
n([ h(cc.Label) ], e.prototype, "goalScoreLb", void 0);
n([ c.trait("PercentStreamerTrait", "初始挑战横幅的设计-旅行模式生效-添加百分比横幅") ], e.prototype, "percentStreamerChangeDelayTime", null);
return n([ classId("ChapterGoalScore"), u ], e);
}(i.default);
r.default = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../topInfo/components/ChapterTopInfoScore": "ChapterTopInfoScore",
"./ChapterGoal": "ChapterGoal"
} ],
ChapterGoal_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "96a82mxKMFLr5jkBGYVkT2e", "ChapterGoal_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGoal_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterGoal_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterGoal_Proxy ];
};
return e;
}(n.Module);
r.ChapterGoal_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterGoal_Proxy": "ChapterGoal_Proxy"
} ],
ChapterGoal_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a3dcdZiF8NKQqEQEx6NQhy6", "ChapterGoal_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterGoal_Proxy = void 0;
var c = t("../../../../../../scripts/base/async/WaitFor"), s = t("../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), h = t("../../audio/config/ChapterAudioConfig"), f = t("../../collect/vo/ChapterCollectInfo"), d = t("../../game/components/ChapterGame"), y = t("../../game/vo/ChapterGameInfo"), m = t("../../prefab/ChapterPrefabConfig"), _ = t("../../topInfo/components/ChapterTopInfoCollect"), v = t("../../topInfo/components/ChapterTopInfoScore"), g = t("../components/ChapterGoal"), C = t("../components/ChapterGoalCollect"), b = t("../components/ChapterGoalScore"), P = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
p.UI.addEventListener("open", function(e) {
e == m.ChapterPrefabConfig.ChapterGame && t.onShowGoalUI();
});
};
e.prototype.onShowGoalUI = function() {
return n(this, void 0, void 0, function() {
var t, e, r, o, a, n, l;
return i(this, function(i) {
switch (i.label) {
case 0:
c.waitFor.start("chapterTopInfoRender");
return [ 4, CinstAsync(d.default) ];

case 1:
t = i.sent();
return [ 4, p.UI.show(m.ChapterPrefabConfig.ChapterGoal, t.goalContainer) ];

case 2:
i.sent();
return [ 4, CinstAsync(g.default) ];

case 3:
e = i.sent();
s.audioInfo.play(h.ChapterAudioConfig.travel_targetui_show);
return (r = y.chapterGameInfo.chapterCondition.Way) != u.ChapterType.score ? [ 3, 6 ] : [ 4, p.UI.show(m.ChapterPrefabConfig.ChapterGoalScore, e.goalInfoContainer) ];

case 4:
i.sent();
p.UI.hideUI(m.ChapterPrefabConfig.ChapterGoalCollect);
return [ 4, CinstAsync(v.default) ];

case 5:
o = i.sent();
(a = Cinst(b.default)) && a.setState({
goalScore: f.chapterCollectInfo.collectTotalScore,
goalNode: o.targetLab.node,
play: !1
});
return [ 3, 10 ];

case 6:
return r != u.ChapterType.collect ? [ 3, 10 ] : [ 4, p.UI.show(m.ChapterPrefabConfig.ChapterGoalCollect, e.goalInfoContainer) ];

case 7:
i.sent();
p.UI.hideUI(m.ChapterPrefabConfig.ChapterGoalScore);
return [ 4, CinstAsync(_.default) ];

case 8:
n = i.sent();
return [ 4, c.waitFor.wait("chapterTopInfoRender") ];

case 9:
i.sent();
(l = Cinst(C.default)) && l.setState({
topCollectItems: n.cacheCollectItems,
targetCollect: y.chapterGameInfo.chapterCondition.RequiredCollections
});
i.label = 10;

case 10:
e.setState({
way: r
});
return [ 2 ];
}
});
});
};
return e;
}(l.Proxy);
r.ChapterGoal_Proxy = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/WaitFor": void 0,
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/components/ChapterGame": "ChapterGame",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../topInfo/components/ChapterTopInfoCollect": "ChapterTopInfoCollect",
"../../topInfo/components/ChapterTopInfoScore": "ChapterTopInfoScore",
"../components/ChapterGoal": "ChapterGoal",
"../components/ChapterGoalCollect": "ChapterGoalCollect",
"../components/ChapterGoalScore": "ChapterGoalScore"
} ],
ChapterGoal: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "debe5LsbR1KAKK7GAW28f+w", "ChapterGoal");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/base/ui/UI"), p = t("../../../../../../scripts/falcon/EventManager"), l = t("../events/E_ChapterGoal_playOver"), u = cc._decorator, h = u.ccclass, f = u.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.mask = null;
e.goalInfoContainer = null;
return e;
}
e.prototype.onEnable = function() {
this.bg.scaleY = .8;
this.bg.opacity = 255;
this.mask.opacity = 255;
cc.tween(this.bg).to(.13, {
scaleY: 1
}).start();
this.addPercentStreamer();
this.getBgNode(this.bg);
};
e.prototype.getBgNode = function(t) {
return t;
};
e.prototype.hideAction = function() {
var t = this;
cc.tween(this.bg).to(.3, {
opacity: 0
}).start();
cc.tween(this.mask).to(.3, {
opacity: 0
}).call(function() {
s.UI.hide(t);
p.EventManager.dispatchModuleEvent(new l.E_ChapterGoal_playOver(t.state.way));
}).start();
};
e.prototype.resetAction = function() {
this.mask.opacity = 255;
this.bg.scaleY = 1;
};
e.prototype.addPercentStreamer = function() {
return !0;
};
n([ f(cc.Node) ], e.prototype, "bg", void 0);
n([ f(cc.Node) ], e.prototype, "mask", void 0);
n([ f(cc.Node) ], e.prototype, "goalInfoContainer", void 0);
n([ c.trait("CTChapterSkinBonesTrait", "旅行彩带") ], e.prototype, "getBgNode", null);
n([ c.trait("PercentStreamerTrait", "初始挑战横幅的设计-旅行模式生效-添加百分比横幅") ], e.prototype, "addPercentStreamer", null);
return n([ classId("ChapterGoal"), h ], e);
}(i.default);
r.default = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../events/E_ChapterGoal_playOver": "E_ChapterGoal_playOver"
} ],
ChapterItem: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2fc56DiLxlOTrOP9bGYZOJh", "ChapterItem");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/components/Component"), p = t("../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../scripts/base/loader/ResLoader"), u = t("../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config"), h = t("../../../../../../scripts/modules/theme/vo/ThemeInfo"), f = t("../vo/ChapterListInfo"), d = cc._decorator, y = d.ccclass, m = d.property, _ = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.colorImg = null;
e.light = null;
return e;
}
e.prototype.shouldComponentUpdate = function(t) {
return this.state.color != t.color || this.state.isStopAllAction != t.isStopAllAction || this.state.isThrough != t.isThrough || this.state.isShowAnimation != t.isShowAnimation || this.state.levelNum != t.levelNum || this.state.showColor != t.showColor;
};
e.prototype.render = function() {
var t;
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i = this;
return c(this, function(c) {
switch (c.label) {
case 0:
this.state.isStopAllAction && this.stopAllAction();
e = this.bg;
return [ 4, l.ResLoader.asyncLoadByBundle("chapter", u.ChapterResPathConfig_Config.commonBgPath, cc.SpriteFrame) ];

case 1:
e.spriteFrame = c.sent();
if (!this.state.showColor) return [ 3, 4 ];
r = this.colorInfo(this.state.color, {
type: "local",
url: f.chapterListInfo.getBlockColorResUrl(this.state.color)
}), o = r.type, a = r.url;
if ("local" !== o || h.themeInfo.remoteLoad) return [ 3, 3 ];
n = this.colorImg;
return [ 4, l.ResLoader.asyncLoadByBundle("chapter", a, cc.SpriteFrame) ];

case 2:
n.spriteFrame = c.sent();
return [ 3, 4 ];

case 3:
l.ResLoader.asyncLoad(a, cc.Texture2D).then(function(t) {
i.colorImg.spriteFrame = new cc.SpriteFrame();
i.colorImg.spriteFrame.setTexture(t);
});
c.label = 4;

case 4:
this.colorImg.node.scale = this.state.showColor ? 1 : 0;
this.colorImg.node.active = this.state.showColor;
this.colorImg.node.opacity = null !== (t = this.state.opacity) && void 0 !== t ? t : 0;
this.state.isShowAnimation && this.showAnimation();
this.state.isThrough && this.addHeightMovie();
this.state.isOpacityAni && this.playOpacityAni();
return [ 2 ];
}
});
});
};
e.prototype.colorInfo = function(t, e) {
return e;
};
e.prototype.playOpacityAni = function() {
cc.tween(this.colorImg.node).stop();
this.colorImg.node.opacity = this.state.fromOpacity;
this.colorImg.node.scale = 1;
this.colorImg.node.active = !0;
cc.tween(this.colorImg.node).to(.2, {
opacity: this.state.toOpacity
}).start();
};
e.prototype.showAnimation = function() {
this.colorImg.node.opacity = 255;
this.colorImg.node.active = !0;
this.colorImg.node.scale = .2;
cc.tween(this.colorImg.node).to(.1, {
scale: 1.05
}).to(.7, {
scale: 1
}).start();
this.light.opacity = 0;
cc.tween(this.light).to(.1, {
opacity: 255
}).to(.17, {
opacity: 0
}).start();
};
e.prototype.stopAllAction = function() {
cc.Tween.stopAllByTarget(this.node);
cc.Tween.stopAllByTarget(this.colorImg.node);
cc.Tween.stopAllByTarget(this.light);
};
e.prototype.addHeightMovie = function() {
var t, e = null !== (t = this.state.throughRatio) && void 0 !== t ? t : 1;
this.colorImg.node.opacity = 255;
cc.tween(this.colorImg.node).to(.13 * e, {
scale: 1.1,
y: 10
}).to(.3 * e, {
scale: 1,
y: 0
}).start();
this.light.opacity = 0;
cc.tween(this.light).to(.13 * e, {
opacity: 255
}).to(.3 * e, {
opacity: 0
}).start();
};
e.prototype.onClick = function() {};
e.prototype.reset = function() {
this.colorImg.spriteFrame = null;
};
n([ m(cc.Sprite) ], e.prototype, "bg", void 0);
n([ m(cc.Sprite) ], e.prototype, "colorImg", void 0);
n([ m(cc.Node) ], e.prototype, "light", void 0);
n([ p.trait("LevelRemoteThemeTrait") ], e.prototype, "colorInfo", null);
return n([ classId("ChapterItem"), y ], e);
}(s.default);
r.default = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config": void 0,
"../../../../../../scripts/modules/theme/vo/ThemeInfo": void 0,
"../vo/ChapterListInfo": "ChapterListInfo"
} ],
ChapterKSpeed_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ed532ZbSKpHw5Wmicy76uRD", "ChapterKSpeed_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterKSpeed_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterKSpeed_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterKSpeed_Proxy ];
};
return e;
}(n.Module);
r.ChapterKSpeed_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterKSpeed_Proxy": "ChapterKSpeed_Proxy"
} ],
ChapterKSpeed_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a3edfIvFFNIr5HgJpvAfmpt", "ChapterKSpeed_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterKSpeed_Proxy = void 0;
var i = t("../../../../../../scripts/falcon/Proxy"), c = t("../../../../../../scripts/modules/kSpeed/type/KSpeedType"), s = t("../../chapterList/events/E_ChapterList_Show"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ s.E_ChapterList_Show ];
};
e.prototype.receivedEvents = function(t) {
var e = null;
switch (t.getClass()) {
case s.E_ChapterList_Show:
e = c.EffectAccTraitEventName.ChapterList_Show;
this.setKSpeed(1, e);
}
};
e.prototype.setKSpeed = function(t) {
cc.director._kSpeed = null != t ? t : 1;
};
return n([ classId("ChapterKSpeed_Proxy") ], e);
}(i.Proxy);
r.ChapterKSpeed_Proxy = p;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/kSpeed/type/KSpeedType": void 0,
"../../chapterList/events/E_ChapterList_Show": "E_ChapterList_Show"
} ],
ChapterLevelTxt: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f2a708jas9AGaH6QfQP313G", "ChapterLevelTxt");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/components/Component"), p = cc._decorator.ccclass, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._level = 0;
return e;
}
Object.defineProperty(e.prototype, "level", {
get: function() {
return this._level;
},
set: function(t) {
this._level = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o, a;
return c(this, function() {
if (!(t = this.node.getComponent(cc.Label))) return [ 2 ];
e = this.state, r = e.text, o = e.fontSize, a = e.opacity;
t.node.opacity = null != a ? a : 255;
t.fontSize = null != o ? o : 50;
t.string = r;
return [ 2 ];
});
});
};
return n([ p ], e);
}(s.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0
} ],
ChapterListConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "08e6bv2O19NjbD+9xajQDW3", "ChapterListConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterItemBlockColorResMap = r.ChapterListConfig = void 0;
r.ChapterListConfig = {
atlasPath: {
NoTheme96Config: "textures/chapterList/periods/block/chapterListBlocks"
},
itemPath: "prefabs/chapterList/ChapterItem",
itemHeight: 80,
cupNodeOffsetY: 350,
itemsContentHeightAdd: 900,
defaultHeightLength: 13
};
r.chapterItemBlockColorResMap = {
334: 321,
314: 297,
312: 279,
226: 213,
224: 215,
209: 182,
208: 181,
126: 102
};
cc._RF.pop();
}, {} ],
ChapterListInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "75687+o/3hBsrVkHBG7x9WK", "ChapterListInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterListInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = t("../../game/vo/ChapterGameInfo"), n = t("../config/ChapterListConfig"), i = function() {
function t() {}
Object.defineProperty(t.prototype, "isNotFirstStage", {
get: function() {
return a.chapterGameInfo.stage > 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "stageItemOrderList", {
get: function() {
return o.storage.getItem("chapterContentItemOrder", {
stage: 1,
orderList: []
});
},
enumerable: !1,
configurable: !0
});
t.prototype.getBlockColorResUrl = function(t) {
var e = "textures/chapterList/periods/block";
return isNaN(t) || 0 === t ? e + "/1" : n.chapterItemBlockColorResMap[t] ? e + "/" + n.chapterItemBlockColorResMap[t] : e + "/" + t;
};
return t;
}();
r.chapterListInfo = new i();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../config/ChapterListConfig": "ChapterListConfig"
} ],
ChapterList_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a98e0glIXVFq67pccb6Y8MT", "ChapterList_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterList_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterList_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterList_Proxy ];
};
return e;
}(n.Module);
r.ChapterList_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterList_Proxy": "ChapterList_Proxy"
} ],
ChapterList_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "25722OS0RxBsZh/NXGsYIcl", "ChapterList_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterList_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../scripts/base/ui/UI"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), f = t("../../../../../../scripts/modules/launch/vo/LaunchInfo"), d = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), y = t("../../../../../../scripts/modules/prefab/PrefabConfig"), m = t("../../difficultyStrategy/events/E_ChapterDifficultyStrategy_Event"), _ = t("../../game/vo/ChapterGameInfo"), v = t("../../win/events/E_ChapterWin_Show"), g = t("../components/ChapterList"), C = t("../events/E_ChapterList_Select"), b = t("../events/E_ChapterList_Show"), P = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListeners();
};
e.prototype.registerEvents = function() {
return [ b.E_ChapterList_Show, C.E_ChapterList_Select, v.E_ChapterWin_Show ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case b.E_ChapterList_Show:
this.openUI(t);
break;

case C.E_ChapterList_Select:
this.onChapterSelect(t);
break;

case v.E_ChapterWin_Show:
this.chapterWinShow();
}
};
e.prototype.addEventListeners = function() {
var t = this;
l.UI.addEventListener("open", function(e) {
if (e === y.PrefabConfig.ChapterList) {
var r = _.chapterGameInfo.chapterNum;
t.onChapterSelect({
chapterNum: r
});
}
});
};
e.prototype.openUI = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o, a;
return c(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.dispatchModuleEventAsync(new m.E_ChapterDifficultyStrategy_Event()) ];

case 1:
n.sent();
return [ 4, l.UI.show(y.PrefabConfig.ChapterList, d.uiLayer) ];

case 2:
n.sent();
f.launchInfo.isShowChapterRedPoint <= 1 && p.storage.setItem("isShowChapterRedPoint", 2);
t = Cinst(g.default);
e = _.chapterGameInfo.chapterNum, r = _.chapterGameInfo.lastChapterNum, o = _.chapterGameInfo.isThroughAll;
a = h.chapterConfigInfo.isForceDraw;
t && t.setState({
curChapter: e,
lastChapter: r,
isThrough: o,
isForceDraw: a
});
this.setItemChapterNum(e);
return [ 2 ];
}
});
});
};
e.prototype.onChapterSelect = function(t) {
var e = t.chapterNum;
p.storage.setItem("chapterNum", e);
};
e.prototype.chapterWinShow = function() {};
e.prototype.setItemChapterNum = function(t) {
p.storage.setItem("lastChapterNum", t);
};
n([ s.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 更改lastChapterNum") ], e.prototype, "chapterWinShow", null);
n([ s.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 在特性里面不设置这个chapterNum") ], e.prototype, "setItemChapterNum", null);
return n([ classId("ChapterList_Proxy") ], e);
}(u.Proxy);
r.ChapterList_Proxy = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/launch/vo/LaunchInfo": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../difficultyStrategy/events/E_ChapterDifficultyStrategy_Event": "E_ChapterDifficultyStrategy_Event",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../win/events/E_ChapterWin_Show": "E_ChapterWin_Show",
"../components/ChapterList": "ChapterList",
"../events/E_ChapterList_Select": "E_ChapterList_Select",
"../events/E_ChapterList_Show": "E_ChapterList_Show"
} ],
ChapterList: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e8daeAlM6hGHYTYWOJcmMAR", "ChapterList");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/components/Component"), p = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), l = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), u = t("../../../../../../scripts/base/decorators/DecoratorTrait"), h = t("../../../../../../scripts/base/ui/UI"), f = t("../../../../../../scripts/falcon/EventManager"), d = (t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), 
t("../../../../../../scripts/modules/game/events/E_Game_Ready")), y = t("../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Show"), m = t("../../../../../../scripts/modules/native/NativeAd"), _ = t("../../../../../../scripts/modules/prefab/PrefabConfig"), v = t("./ChapterContent"), g = cc._decorator, C = g.ccclass, b = g.property, P = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.midContainer = null;
e.topContainer = null;
e.chapterLb = null;
e.nextTip = null;
e.chapterBtn = null;
e.atlas = null;
e.content = null;
e._hideBannerScheduler = null;
return e;
}
e.prototype.onLoad = function() {
this.chapterBtn.active = !1;
};
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o;
return c(this, function(a) {
switch (a.label) {
case 0:
t = !1;
if (this.content && !this.state.isForceDraw) return [ 3, 2 ];
this.state.isForceDraw = !1;
t = !0;
return [ 4, h.UI.show(_.PrefabConfig.ChapterContent, this.midContainer) ];

case 1:
e = a.sent();
this.content = e.getComponent(v.default);
a.label = 2;

case 2:
r = {
curChapter: this.state.curChapter,
lastChapter: this.state.lastChapter,
isThrough: this.state.isThrough,
redraw: t
};
r = this.resetChapterState(r, this.content.state.isNewLevel);
o = this.getChapterContentState(r);
this.content.setState(o);
0 == this.state.isThrough && (this.content.content.position = this.content.contentPos);
this.setChapterBtnState();
this.getTopContainer(this.topContainer);
return [ 2 ];
}
});
});
};
e.prototype.getChapterContentState = function(t) {
return t;
};
e.prototype.getTopContainer = function() {};
e.prototype.setChapterBtnState = function() {
if (this.state.isThrough) {
this.nextTip.active = !0;
this.chapterBtn.active = !1;
} else {
this.nextTip.active = !1;
this.chapterBtn.active = !0;
this.chapterLb.node.active = !0;
var t = this.state.curChapter + 1;
this.chapterLb.string = "+" + t;
}
};
e.prototype.onClickBack = function() {
f.EventManager.dispatchModuleEvent(new y.E_ModeChoice_Show());
};
e.prototype.onClickStartGame = function() {
f.EventManager.dispatchModuleEvent(new d.E_Game_Ready());
DS("ui_theme_travel_click_board");
};
e.prototype.resetChapterState = function(t) {
return t;
};
e.prototype.hideBanner = function() {
cc.sys.isNative && m.NativeAd.hideBanner();
};
e.prototype.onEnable = function() {
var t = this;
if (cc.sys.isNative) {
this.hideBanner();
this._hideBannerScheduler = function() {
return t.hideBanner();
};
this.schedule(this._hideBannerScheduler, 1);
}
};
e.prototype.onDisable = function() {
if (this._hideBannerScheduler) {
this.unschedule(this._hideBannerScheduler);
this._hideBannerScheduler = null;
}
};
n([ b(cc.Node) ], e.prototype, "midContainer", void 0);
n([ b(cc.Node) ], e.prototype, "topContainer", void 0);
n([ b(cc.Label) ], e.prototype, "chapterLb", void 0);
n([ b(cc.Node) ], e.prototype, "nextTip", void 0);
n([ b(cc.Node) ], e.prototype, "chapterBtn", void 0);
n([ p.adapterFringe("topContainer") ], e.prototype, "onLoad", null);
n([ u.trait("IsOPenLevelSceneEffectTrait", "马赛克界面可重复游览通关效果") ], e.prototype, "getChapterContentState", null);
n([ u.trait("IsOPenLevelSceneEffectTrait", "马赛克界面可重复游览通关效果") ], e.prototype, "getTopContainer", null);
n([ u.trait("BPuzzleTimeTrait", "[replace]更换关卡按钮"), u.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 从外面进来隐藏按钮") ], e.prototype, "setChapterBtnState", null);
n([ l.throttle(300) ], e.prototype, "onClickBack", null);
n([ u.trait("IsOPenLevelSceneEffectTrait", "马赛克界面可重复游览通关效果"), u.trait("BPuzzleTimeTrait", "[replace]打完换期 开始下个关卡"), u.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 开启下个关卡"), l.throttle(500) ], e.prototype, "onClickStartGame", null);
n([ u.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 开启下个关卡") ], e.prototype, "resetChapterState", null);
return n([ classId("ChapterList"), C ], e);
}(s.default);
r.default = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Show": void 0,
"../../../../../../scripts/modules/native/NativeAd": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"./ChapterContent": "ChapterContent"
} ],
ChapterMain: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8fb18AN2OtAwZXtn0Z6Q7M5", "ChapterMain");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../scripts/falcon/EventManager"), c = t("./Chapter_ModuleList"), s = t("./modules/chapterList/events/E_ChapterList_Show"), p = t("./modules/game/vo/ChapterGameInfo");
t("./modules/traits/map/ChapterTraitsClassMap");
var l = cc._decorator, u = l.ccclass, h = (l.property, function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
p.chapterGameInfo.init();
c.Chapter_ModuleList.start();
};
e.prototype.executeFunc = function(t) {
"function" != typeof t ? i.EventManager.dispatchModuleEvent(new s.E_ChapterList_Show({})) : t.call(this);
};
return n([ u ], e);
}(cc.Component));
r.default = h;
cc._RF.pop();
}, {
"../../../scripts/falcon/EventManager": void 0,
"./Chapter_ModuleList": "Chapter_ModuleList",
"./modules/chapterList/events/E_ChapterList_Show": "E_ChapterList_Show",
"./modules/game/vo/ChapterGameInfo": "ChapterGameInfo",
"./modules/traits/map/ChapterTraitsClassMap": "ChapterTraitsClassMap"
} ],
ChapterPrefabConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c318eq0G0NJn49MvWv4FsJ7", "ChapterPrefabConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PrefabConfigType = r.satisfies = r.ChapterPrefabConfig = void 0;
r.ChapterPrefabConfig = {
ChapterGame: {
name: "ChapterGame",
url: "prefabs/game/ChapterGame",
bundleName: "chapter",
page: !0
},
ChapterTopInfo: {
name: "ChapterTopInfo",
url: "prefabs/topInfo/ChapterTopInfo",
bundleName: "chapter"
},
ChapterTopInfoBtn: {
name: "ChapterTopInfoBtn",
url: "prefabs/topInfo/ChapterTopInfoBtn",
bundleName: "chapter"
},
ChapterTopInfoCollect: {
name: "ChapterTopInfoCollect",
url: "prefabs/topInfo/ChapterTopInfoCollect",
bundleName: "chapter"
},
ChapterTopInfoScore: {
name: "ChapterTopInfoScore",
url: "prefabs/topInfo/ChapterTopInfoScore",
bundleName: "chapter"
},
ChapterCollectItem: {
name: "ChapterCollectItem",
url: "prefabs/chapterCollectItem/ChapterCollectItem",
bundleName: "chapter"
},
ChapterScoreFail: {
name: "ChapterScoreFail",
url: "prefabs/fail/ChapterScoreFail",
bundleName: "chapter",
page: !0
},
ChapterCollectFail: {
name: "ChapterCollectFail",
url: "prefabs/fail/ChapterCollectFail",
bundleName: "chapter",
page: !0
},
ChapterScoreWin: {
name: "ChapterScoreWin",
url: "prefabs/win/ChapterScoreWin",
bundleName: "chapter",
page: !0
},
ChapterCollectWin: {
name: "ChapterCollectWin",
url: "prefabs/win/ChapterCollectWin",
bundleName: "chapter",
page: !0
},
ChapterReduceScoreFail: {
name: "ChapterReduceScoreFail",
url: "prefabs/fail/trait/reduceTravelSettlement/ChapterReduceScoreFail",
bundleName: "chapter"
},
ChapterReduceCollectFail: {
name: "ChapterReduceCollectFail",
url: "prefabs/fail/trait/reduceTravelSettlement/ChapterReduceCollectFail",
bundleName: "chapter"
},
ChapterReduceScoreWin: {
name: "ChapterReduceScoreWin",
url: "prefabs/win/trait/reduceTravelSettlement/ChapterReduceScoreWin",
bundleName: "chapter"
},
ChapterReduceCollectWin: {
name: "ChapterReduceCollectWin",
url: "prefabs/win/trait/reduceTravelSettlement/ChapterReduceCollectWin",
bundleName: "chapter"
},
ChapterGoal: {
name: "ChapterGoal",
url: "prefabs/goal/ChapterGoal",
bundleName: "chapter"
},
ChapterGoalScore: {
name: "ChapterGoalScore",
url: "prefabs/goal/ChapterGoalScore",
bundleName: "chapter"
},
ChapterGoalCollect: {
name: "ChapterGoalCollect",
url: "prefabs/goal/ChapterGoalCollect",
bundleName: "chapter"
},
ChapterCollectEffectItem: {
name: "ChapterCollectEffectItem",
url: "prefabs/collectItem/ChapterCollectEffectItem",
bundleName: "chapter"
},
ChapterCollectTopItem: {
name: "ChapterCollectTopItem",
url: "prefabs/collectItem/ChapterCollectTopItem",
bundleName: "chapter"
},
ChapterTipsFail: {
name: "ChapterTipsFail",
url: "prefabs/fail/ChapterTipsFail",
bundleName: "chapter"
},
GrayEffect: {
name: "GrayEffect",
url: "prefabs/blocksProducer/traits/GrayEffect",
bundleName: "chapter"
},
Winstreak: {
name: "Winstreak",
url: "prefabs/gameover/trait/gateWinStreakState/Winstreak",
bundleName: "chapter"
},
repeatPreview: {
name: "repeatPreview",
url: "prefabs/repeatPreview/repeatPreviewPrefab",
bundleName: "chapter"
}
};
cc._RF.pop();
}, {} ],
ChapterReviveCacheGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "da40dgSoMRAgbQFDAiEhjhT", "ChapterReviveCacheGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterReviveCacheGameInfo = void 0;
var o = function() {
function t() {
this._collectionProcessTarget = 0;
}
Object.defineProperty(t.prototype, "collectionProcessTarget", {
get: function() {
return this._collectionProcessTarget;
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterReviveCacheGameInfo = new o();
cc._RF.pop();
}, {} ],
ChapterReviveGameInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "94f0bRMbgpCPbCEk+xNS1Ja", "ChapterReviveGameInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterReviveGameInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "reviveProgressArr", {
get: function() {
return o.storage.getItem("chapterReviveProgressArr", []);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "reviveShowNum", {
get: function() {
return o.storage.getItem("chapterReviveShowNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "reviveNum", {
get: function() {
return o.storage.getItem("chapterReviveNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "actualReviveNum", {
get: function() {
return o.storage.getItem("chapterActualReviveNum", 0);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterReviveGameInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterReviveInterface: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "116afSEVAFMOpjdUN+cKRtv", "ChapterReviveInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ChapterReviveStatisticsInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "29e07/NixtMKJTj7uN7Ftxg", "ChapterReviveStatisticsInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterReviveStatisticsInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {
this.reviveSuccessStatisticsObj = {
progress: []
};
}
Object.defineProperty(t.prototype, "reviveSuccessStatisticsInfo", {
get: function() {
return o.storage.getItem("chapterReviveSuccessStatisticsInfo", this.reviveSuccessStatisticsObj);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterReviveStatisticsInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterRevive_Dot_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "20d678YgNxJIr2gv2pxpGSn", "ChapterRevive_Dot_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterRevive_Dot_Proxy = void 0;
var n = t("../../../../../../scripts/base/ui/UI"), i = t("../../../../../../scripts/falcon/Proxy"), c = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_RewardOver_Pre"), s = t("../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), p = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), l = t("../../../../../../scripts/modules/board/vo/BoardInfo"), u = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), h = t("../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../scripts/modules/game/vo/GameInfo"), d = t("../../../../../../scripts/modules/prefab/PrefabConfig"), y = t("../../algorithm/vo/ChapterAlgorithmName"), m = t("../../blocksProducer/vo/ChapterBlocksProducerInfo"), _ = t("../../collect/vo/ChapterCollectInfo"), v = t("../../dataStatistics/vo/ChapterDataStatisticsInfo"), g = t("../../game/vo/ChapterGameInfo"), C = t("../../score/vo/ChapterScoreInfo"), b = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListeners();
};
e.prototype.addEventListeners = function() {
var t = this;
n.UI.addEventListener("open", function(e) {
e === d.PrefabConfig.Revive && f.gameInfo.gameType === h.GameType.Chapter && t.onDot();
});
};
e.prototype.registerEvents = function() {
return [ c.E_Advertisement_RewardOver_Pre ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case c.E_Advertisement_RewardOver_Pre:
this.onAdvertisementRewardOver(t);
}
};
e.prototype.onDot = function() {
var t = g.chapterGameInfo.roundNum, e = g.chapterGameInfo.gameNum, r = g.chapterGameInfo.stage, o = g.chapterGameInfo.chapterNum, a = C.chapterScoreInfo.score, n = C.chapterScoreInfo.highScore, i = l.boardInfo.faceBlocks, c = u.chapterConfigInfo.chapterDatasCfg[o].Condition.Way, p = _.chapterCollectInfo.remainCollections, h = m.chapterBlocksProducerInfo.producerBlocks;
DC("game_revive_ui_show", {
game_type: 2,
game_id: e,
round_id: t,
his_max_score: n,
score: 0 == c ? a : _.chapterCollectInfo.getAllCollectNum(),
matrix: i,
block_list: h,
operation_type: 1,
rec_strategy: s.OFFER_TYPE_STRINGS[y.chapterAlgorithmName.algoExpectedId],
rec_strategy_fact: y.chapterAlgorithmName.algoActualName,
travel_id: r,
travel_lv: o + 1,
process: u.chapterConfigInfo.getChapterProgress(),
item_collect_detail: 0 == c ? [] : p,
dead_block_list_detail: v.chapterDataStatisticsInfo.collectPosDetail
});
};
e.prototype.onAdvertisementRewardOver = function(t) {
var e = g.chapterGameInfo.roundNum, r = g.chapterGameInfo.gameNum, o = g.chapterGameInfo.stage, a = g.chapterGameInfo.chapterNum, n = C.chapterScoreInfo.score, i = C.chapterScoreInfo.highScore, c = l.boardInfo.faceBlocks, h = u.chapterConfigInfo.chapterDatasCfg[a].Condition.Way, f = _.chapterCollectInfo.remainCollections;
1 === t.data.state && DC("game_revive", {
game_type: 2,
game_id: r,
round_id: e,
his_max_score: i,
score: 0 == h ? n : _.chapterCollectInfo.getAllCollectNum(),
matrix: c,
block_list: p.algorithmInfo.blockIdList,
travel_id: o,
travel_lv: a + 1,
process: u.chapterConfigInfo.getChapterProgress(),
item_collect_detail: 0 == h ? [] : f,
rec_strategy: s.OFFER_TYPE_STRINGS[y.chapterAlgorithmName.algoExpectedId],
rec_strategy_fact: y.chapterAlgorithmName.algoActualName
});
};
return e;
}(i.Proxy);
r.ChapterRevive_Dot_Proxy = b;
cc._RF.pop();
}, {
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_RewardOver_Pre": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../algorithm/vo/ChapterAlgorithmName": "ChapterAlgorithmName",
"../../blocksProducer/vo/ChapterBlocksProducerInfo": "ChapterBlocksProducerInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../dataStatistics/vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo"
} ],
ChapterRevive_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "96b7fEnoIVAkJCmu82+LFzC", "ChapterRevive_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterRevive_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterRevive_Dot_Proxy"), c = t("./proxys/ChapterRevive_Proxy"), s = t("./proxys/ChapterRevive_Statistics_Proxy"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ c.ChapterRevive_Proxy, s.ChapterRevive_Statistics_Proxy, i.ChapterRevive_Dot_Proxy ];
};
return e;
}(n.Module);
r.ChapterRevive_Module = p;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterRevive_Dot_Proxy": "ChapterRevive_Dot_Proxy",
"./proxys/ChapterRevive_Proxy": "ChapterRevive_Proxy",
"./proxys/ChapterRevive_Statistics_Proxy": "ChapterRevive_Statistics_Proxy"
} ],
ChapterRevive_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f5cdaFCDtVIwrZdFc8CNnz4", "ChapterRevive_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterRevive_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../scripts/falcon/EventManager"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), h = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), f = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre"), d = t("../../../../../../scripts/modules/gameOver/type/GameOverType"), y = t("../../../../../../scripts/modules/revive/events/E_Revive_Click"), m = t("../../../../../../scripts/modules/revive/events/E_Revive_Close"), _ = t("../../../../../../scripts/modules/revive/events/E_Revive_Show"), v = t("../../../../../../scripts/modules/revive/events/E_Revive_Success"), g = t("../../advertisement/events/E_ChapterAdvertisement_Show"), C = t("../../advertisement/vo/ChapterAdvertisementGameInfo"), b = t("../../game/vo/ChapterGameInfo"), P = t("../events/E_ChapterRevive_Check"), S = t("../vo/ChapterReviveCacheGameInfo"), I = t("../vo/ChapterReviveGameInfo"), T = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ h.E_Game_Ready, P.E_ChapterRevive_Check, y.E_Revive_Click, m.E_Revive_Close, v.E_Revive_Success ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case P.E_ChapterRevive_Check:
this.checkRevive(t);
break;

case h.E_Game_Ready:
this.resetCacheReviveData();
break;

case y.E_Revive_Click:
this.onClick_ok();
break;

case m.E_Revive_Close:
this.onClick_close();
break;

case v.E_Revive_Success:
var e = I.chapterReviveGameInfo.reviveProgressArr;
e.push(u.chapterConfigInfo.getChapterProgress());
s.storage.setItem("chapterReviveProgressArr", e);
var r = C.chapterAdvertisementGameInfo.advertisementSuccessNum;
s.storage.setItem("chapterAdvertisementSuccessNum", r + 1);
this.onRevive_Success(t);
}
};
e.prototype.onRevive_Success = function() {};
e.prototype.resetCacheReviveData = function() {
S.chapterReviveCacheGameInfo._collectionProcessTarget = .5;
};
e.prototype.checkRevive = function() {
this.reviveProcessingData();
if (this.isOpenRevive()) {
var t = I.chapterReviveGameInfo.actualReviveNum;
s.storage.setItem("chapterActualReviveNum", t + 1);
var e = I.chapterReviveGameInfo.reviveNum;
s.storage.setItem("chapterReviveNum", e + 1);
this.showReviveView();
this.reviveSuccessPostProcessing();
} else {
this.reviveFailPostProcessing();
p.EventManager.dispatchModuleEvent(new f.E_GameOver_GameEndPre());
}
};
e.prototype.reviveProcessingData = function() {};
e.prototype.isOpenRevive = function(t, e) {
void 0 === t && (t = !1);
void 0 === e && (e = !1);
return e || t && this.meetConditions();
};
e.prototype.meetConditions = function() {
return this.meetLevelProgress() && this.meetReviveNum();
};
e.prototype.meetLevelProgress = function() {
return u.chapterConfigInfo.getChapterProgress() >= S.chapterReviveCacheGameInfo.collectionProcessTarget;
};
e.prototype.meetReviveNum = function() {
return 0 === I.chapterReviveGameInfo.reviveNum;
};
e.prototype.showReviveView = function() {
var t = I.chapterReviveGameInfo.reviveShowNum;
s.storage.setItem("chapterReviveShowNum", t + 1);
setTimeoutSafe(function() {
p.EventManager.dispatchModuleEvent(new _.E_Revive_Show({}));
}, 700);
};
e.prototype.reviveSuccessPostProcessing = function() {};
e.prototype.reviveFailPostProcessing = function() {};
e.prototype.onClick_close = function() {
this.reviveFailPostProcessing();
p.EventManager.dispatchModuleEvent(new f.E_GameOver_GameEndPre({
source: d.GameOverSourceType.ReviveFail
}));
};
e.prototype.onClick_ok = function() {
this.onReviveDot();
p.EventManager.dispatchModuleEvent(new g.E_ChapterAdvertisement_Show());
};
e.prototype.onReviveDot = function() {
var t = b.chapterGameInfo.roundNum, e = b.chapterGameInfo.gameNum;
DS("game_popup_revive_click", {
withProp: 0,
game_type: 2,
game_id: e,
round_id: t
});
};
n([ c.trait("IsOpenReviveSpecialTrait", "要出复活界面前的死亡盘面特殊表现,复活后，将清除特殊表现") ], e.prototype, "onRevive_Success", null);
n([ c.trait("IsOpenRestartFirstNoLifeTrait", "冷启动后首局不触发复活(标记结算局数)") ], e.prototype, "checkRevive", null);
n([ c.trait("LevelReviveCondiTrait", "修改收集物进度") ], e.prototype, "reviveProcessingData", null);
n([ c.trait("LevelReviveTrait", "是否打开关卡复活功能,放在最上层"), c.trait("ReviveBuffTrait", "使用爱复活buff，与LevelReviveTrait并行判断"), c.trait("TestReadyByAdTypeInterfaceTrait", "无激励缓存自动跳过复活(旧接口)"), c.trait("IsOpenRestartFirstNoLifeTrait", "冷启动后首局不触发复活(检测跳过)"), c.trait("IsOpenNoVideoNoRevivieTrait", "无激励缓存自动跳过复活"), c.trait("CTGMReviveTrait", "GM复活控制") ], e.prototype, "isOpenRevive", null);
n([ c.trait("LevelReviveCountTrait", "2次复活") ], e.prototype, "reviveSuccessPostProcessing", null);
n([ c.trait("IsOpenRestartFirstNoLifeTrait", "冷启动后首局不触发复活(首局跳过复活广告，排除掉(复活buff抵抗复活)状态改变)"), c.trait("ReviveBuffTrait", "处理buff数据存储") ], e.prototype, "reviveFailPostProcessing", null);
n([ i.throttle(300) ], e.prototype, "onClick_close", null);
n([ i.throttle(300) ], e.prototype, "onClick_ok", null);
return n([ classId("ChapterRevive_Proxy") ], e);
}(l.Proxy);
r.ChapterRevive_Proxy = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre": void 0,
"../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Click": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Close": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Show": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Success": void 0,
"../../advertisement/events/E_ChapterAdvertisement_Show": "E_ChapterAdvertisement_Show",
"../../advertisement/vo/ChapterAdvertisementGameInfo": "ChapterAdvertisementGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../events/E_ChapterRevive_Check": "E_ChapterRevive_Check",
"../vo/ChapterReviveCacheGameInfo": "ChapterReviveCacheGameInfo",
"../vo/ChapterReviveGameInfo": "ChapterReviveGameInfo"
} ],
ChapterRevive_Statistics_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9f035c4KDlCPpIJtNfQR+j1", "ChapterRevive_Statistics_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterRevive_Statistics_Proxy = void 0;
var n = t("../../../../../../scripts/base/storage/Storage"), i = t("../../../../../../scripts/falcon/Proxy"), c = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), s = t("../../../../../../scripts/modules/revive/events/E_Revive_Success"), p = t("../vo/ChapterReviveStatisticsInfo"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ s.E_Revive_Success ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case s.E_Revive_Success:
this.onRevive_Success();
}
};
e.prototype.onRevive_Success = function() {
var t = p.chapterReviveStatisticsInfo.reviveSuccessStatisticsInfo;
t.progress.push(c.chapterConfigInfo.getChapterProgress());
n.storage.setItem("chapterReviveSuccessStatisticsInfo", t);
};
return e;
}(i.Proxy);
r.ChapterRevive_Statistics_Proxy = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/revive/events/E_Revive_Success": void 0,
"../vo/ChapterReviveStatisticsInfo": "ChapterReviveStatisticsInfo"
} ],
ChapterScoreConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "72f83fCvJhJO62ke17HfcOJ", "ChapterScoreConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.scoreGainSegments = void 0;
r.scoreGainSegments = [ 10, 30, 60, 100, 150, 210, 300 ];
cc._RF.pop();
}, {} ],
ChapterScoreFail: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7e9edaKjddL/7YoGQ3X0sp7", "ChapterScoreFail");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/audio/AudioInfo"), c = t("../../../../../../scripts/base/components/Component"), s = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), p = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), l = t("../../../../../../scripts/base/decorators/DecoratorTrait"), u = t("../../../../../../scripts/falcon/EventManager"), h = t("../../../../../../scripts/modules/audio/config/AudioConfig"), f = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), d = t("../../audio/config/ChapterAudioConfig"), y = t("../../gameOver/events/E_ChapterGameOver_ShowFinish"), m = t("../../gameOver/type/ChapterGameOverType"), _ = t("../events/E_ChapterFail_Hide"), v = cc._decorator, g = v.ccclass, C = v.property, b = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scoreImg = null;
e.playBtn = null;
e.backBtn = null;
e.boneAni = null;
e.progress = null;
e.mask = null;
e.goalNum = null;
e.scoreBg = null;
e.curNum = null;
e.boneAni_1 = null;
e.basePosX = null;
e.aniIndex = 0;
return e;
}
e.prototype.onLoad = function() {
this.basePosX = this.scoreBg.x;
this.scoreImg.y = 130;
this.resetBtnState();
};
e.prototype.render = function() {
this.curNum.string = "" + this.state.score;
this.goalNum.string = "" + this.state.goalScore;
this.resetBtnState();
this.showAction();
};
e.prototype.resetBtnState = function() {
this.backBtn.node.active = !1;
this.playBtn.node.active = !1;
this.progress.active = !1;
this.scoreImg.active = !1;
this.scoreBg.x = this.basePosX;
this.backBtn.node.scale = 0;
this.playBtn.node.scale = 0;
this.boneAni_1.node.active = !1;
};
e.prototype.showAction = function() {
var t = this;
if (this.state.isShowDefTip) {
this.boneAni.node.active = !0;
this.boneAni.playAnimation("newAnimation", 1);
} else this.boneAni.node.active = !1;
setTimeoutSafe(function() {
t.changeUI();
}, 100);
cc.tween(this.node).delay(.57).call(function() {
t.scoreImg.active = !0;
t.scoreImg.opacity = 0;
cc.tween(t.scoreImg).to(.33, {
opacity: 255
}).start();
}).delay(.33).call(function() {
t.showOtherTraitAnim();
i.audioInfo.play(d.ChapterAudioConfig.travel_score_change);
t.progress.active = !0;
t.mask.width = .1;
var e = t.basePosX + Math.floor(t.state.score / t.state.goalScore * 531);
cc.tween(t.mask).to(.3, {
width: Math.floor(t.state.score / t.state.goalScore * 531)
}).start();
cc.tween(t.scoreBg).to(.3, {
x: e
}).start();
}).delay(1.1).call(function() {
t.showBtnAnim();
}).start();
};
e.prototype.showBtnAnim = function() {
var t = this;
this.backBtn.node.active = !0;
this.backBtn.node.scale = .6;
this.playBtn.node.active = !0;
this.playBtn.node.scale = .6;
i.audioInfo.play(h.AudioConfig.s_btnShow);
cc.tween(this.backBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.backBtn.interactable = !0;
}).start();
cc.tween(this.playBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.playBtn.interactable = !0;
}).start();
};
e.prototype.changeUI = function() {};
e.prototype.showOtherTraitAnim = function() {};
e.prototype.onClickPlay = function() {
u.EventManager.dispatchModuleEvent(new _.E_ChapterFail_Hide({
gameOverType: m.GameOverType.ScoreFail
}));
u.EventManager.dispatchModuleEvent(new y.E_ChapterGameOver_ShowFinish({
gameOverType: m.GameOverType.ScoreFail
}));
};
e.prototype.onClickBack = function() {
u.EventManager.dispatchModuleEvent(new _.E_ChapterFail_Hide({
gameOverType: m.GameOverType.ScoreFail
}));
u.EventManager.dispatchModuleEvent(new f.E_Game_BackHome());
};
e.prototype.onDisable = function() {
this.resetBtnState();
};
n([ C(cc.Node) ], e.prototype, "scoreImg", void 0);
n([ C(cc.Button) ], e.prototype, "playBtn", void 0);
n([ C(cc.Button) ], e.prototype, "backBtn", void 0);
n([ C(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni", void 0);
n([ C(cc.Node) ], e.prototype, "progress", void 0);
n([ C(cc.Node) ], e.prototype, "mask", void 0);
n([ C(cc.Label) ], e.prototype, "goalNum", void 0);
n([ C(cc.Node) ], e.prototype, "scoreBg", void 0);
n([ C(cc.Label) ], e.prototype, "curNum", void 0);
n([ C(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni_1", void 0);
n([ s.adapterFringe("backBtn") ], e.prototype, "onLoad", null);
n([ l.trait("GateWinStreakStateTrait") ], e.prototype, "resetBtnState", null);
n([ l.trait("ReduceTravelSettlementTrait") ], e.prototype, "showAction", null);
n([ l.trait("GateWinStreakStateTrait") ], e.prototype, "changeUI", null);
n([ l.trait("GateWinStreakStateTrait") ], e.prototype, "showOtherTraitAnim", null);
n([ p.throttle(300), l.trait("IsOpenVibrateTrait", "点击开始按钮时触发震动") ], e.prototype, "onClickPlay", null);
n([ p.throttle(300), l.trait("IsOpenVibrateTrait", "点击返回按钮时触发震动") ], e.prototype, "onClickBack", null);
return n([ classId("ChapterScoreFail"), g ], e);
}(c.default);
r.default = b;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../gameOver/events/E_ChapterGameOver_ShowFinish": "E_ChapterGameOver_ShowFinish",
"../../gameOver/type/ChapterGameOverType": "ChapterGameOverType",
"../events/E_ChapterFail_Hide": "E_ChapterFail_Hide"
} ],
ChapterScoreInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "10cdbMj7YtJAYkEBi3wCzql", "ChapterScoreInfo");
var o = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterScoreInfo = void 0;
var a = t("../../../../../../scripts/base/decorators/DecoratorTrait"), n = t("../../../../../../scripts/base/storage/Storage"), i = t("../config/ChapterScoreConfig"), c = function() {
function t() {}
Object.defineProperty(t.prototype, "score", {
get: function() {
return n.storage.getItem("chapterScore", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "highScore", {
get: function() {
return n.storage.getItem("chapterHighScore", 0);
},
enumerable: !1,
configurable: !0
});
t.prototype.onComputeComplete = function() {
return 0;
};
t.prototype.computeAddScore = function(t) {
if (!t) return {
addScore: 0,
showScore: 0
};
var e = t.eliminateRowColCount, r = t.putCount, o = t.continuousEliminateTimes, a = 0, n = this.computeComboAndEliminateTimesScore(e, o);
a += n;
a += r;
return {
addScore: a = this.computeAddScoreForCollect(a),
showScore: n
};
};
t.prototype.computeAddScoreForCollect = function(t) {
return t;
};
t.prototype.computeComboAndEliminateTimesScore = function(t, e) {
var r = 0;
t > 0 && (r = i.scoreGainSegments[t - 1]);
return r + this.onComputeComplete(e, r);
};
o([ a.trait("CTChapterScoreComboTrait") ], t.prototype, "onComputeComplete", null);
o([ a.trait("ChapterCollectScoreFixedTrait", "旅途收集关每次得分固定") ], t.prototype, "computeAddScoreForCollect", null);
return o([ classId("ChapterScoreInfo") ], t);
}();
r.chapterScoreInfo = new c();
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../config/ChapterScoreConfig": "ChapterScoreConfig"
} ],
ChapterScoreInterface: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fe675IjlWlJgqzY3Qrag1d3", "ChapterScoreInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ChapterScoreWin: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d0920Ahm75Ml5yZAa3iMgGp", "ChapterScoreWin");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../scripts/base/components/Component"), l = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), u = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), h = t("../../../../../../scripts/base/decorators/DecoratorTrait"), f = t("../../../../../../scripts/base/loader/ResLoader"), d = t("../../../../../../scripts/falcon/EventManager"), y = t("../../../../../../scripts/modules/audio/config/AudioConfig"), m = t("../../../../../../scripts/modules/game/events/E_Game_BackHome"), _ = t("../../audio/config/ChapterAudioConfig"), v = t("../../chapterList/events/E_ChapterList_Show"), g = t("../../gameOver/events/E_ChapterGameOver_ShowFinish"), C = t("../../gameOver/type/ChapterGameOverType"), b = t("../events/E_ChapterWin_Hide"), P = cc._decorator, S = P.ccclass, I = P.property, T = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scoreImg = null;
e.playBtn = null;
e.backBtn = null;
e.score = null;
e.boneAni = null;
e.scoreBoneAni = null;
e.scoreEffectBoneAni = null;
e.scoreEffect = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onDisable = function() {
this.scoreBoneAni.node.active = this.scoreImg.active = this.boneAni.node.active = this.backBtn.node.active = this.backBtn.node.active = !1;
};
e.prototype.getBtnRes = function() {
return f.ResLoader.asyncLoadByBundle("chapter", this.state.btnPath, cc.SpriteFrame);
};
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t, e;
return c(this, function(r) {
switch (r.label) {
case 0:
this.score.string = "" + this.state.score;
if (!(t = this.playBtn.node.getComponent(cc.Sprite))) return [ 3, 2 ];
e = t;
return [ 4, this.getBtnRes() ];

case 1:
e.spriteFrame = r.sent();
r.label = 2;

case 2:
this.resetBtnState();
this.showAction();
return [ 2 ];
}
});
});
};
e.prototype.resetBtnState = function() {
cc.isValid(this.scoreEffectBoneAni) && (this.scoreEffectBoneAni.node.active = !1);
this.boneAni.node.active = !1;
this.backBtn.node.active = !1;
this.backBtn.node.scale = 0;
this.playBtn.node.active = !1;
this.playBtn.node.scale = 0;
};
e.prototype.showAction = function() {
var t = this;
this.boneAni.node.active = !0;
this.boneAni.playAnimation("newAnimation", 1);
setTimeoutSafe(function() {
t.changeUI();
}, 100);
s.audioInfo.play(_.ChapterAudioConfig.travel_win_logo);
cc.tween(this.node).delay(.57).call(function() {
t.scoreImg.active = !0;
t.scoreImg.opacity = 0;
cc.tween(t.scoreImg).to(.33, {
opacity: 255
}).start();
}).delay(.33).call(function() {
t.showOtherTraitAnim();
t.scoreBoneAni.node.active = !0;
t.scoreBoneAni.playAnimation("newAnimation", 1);
s.audioInfo.play(_.ChapterAudioConfig.travel_overui_score_suc);
}).delay(1.1).call(function() {
t.showBtnAnim();
}).start();
};
e.prototype.showBtnAnim = function() {
var t = this;
this.backBtn.node.active = !0;
this.backBtn.node.scale = .6;
this.playBtn.node.active = !0;
this.playBtn.node.scale = .6;
s.audioInfo.play(y.AudioConfig.s_btnShow);
cc.tween(this.backBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.backBtn.interactable = !0;
}).start();
cc.tween(this.playBtn.node).to(.13, {
scale: 1.1
}).to(.07, {
scale: 1
}).call(function() {
t.playBtn.interactable = !0;
}).start();
};
e.prototype.changeUI = function() {};
e.prototype.showOtherTraitAnim = function() {};
e.prototype.onClickPlay = function() {
this.resetBtnState();
if (this.state.throughAll) this.onCompleteGame(); else {
d.EventManager.dispatchModuleEvent(new b.E_ChapterWin_Hide({
gameOverType: C.GameOverType.ScoreWin
}));
d.EventManager.dispatchModuleEvent(new g.E_ChapterGameOver_ShowFinish({
gameOverType: C.GameOverType.ScoreWin
}));
}
};
e.prototype.onCompleteGame = function() {
d.EventManager.dispatchModuleEvent(new v.E_ChapterList_Show({}));
};
e.prototype.onClickBack = function() {
this.resetBtnState();
d.EventManager.dispatchModuleEvent(new b.E_ChapterWin_Hide({
gameOverType: C.GameOverType.ScoreWin
}));
d.EventManager.dispatchModuleEvent(new m.E_Game_BackHome());
};
n([ I(cc.Node) ], e.prototype, "scoreImg", void 0);
n([ I(cc.Button) ], e.prototype, "playBtn", void 0);
n([ I(cc.Button) ], e.prototype, "backBtn", void 0);
n([ I(cc.Label) ], e.prototype, "score", void 0);
n([ I(dragonBones.ArmatureDisplay) ], e.prototype, "boneAni", void 0);
n([ I(dragonBones.ArmatureDisplay) ], e.prototype, "scoreBoneAni", void 0);
n([ I(dragonBones.ArmatureDisplay) ], e.prototype, "scoreEffectBoneAni", void 0);
n([ I(cc.Label) ], e.prototype, "scoreEffect", void 0);
n([ l.adapterFringe("backBtn") ], e.prototype, "onLoad", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "resetBtnState", null);
n([ h.trait("ReduceTravelSettlementTrait") ], e.prototype, "showAction", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "changeUI", null);
n([ h.trait("GateWinStreakStateTrait") ], e.prototype, "showOtherTraitAnim", null);
n([ u.throttle(300) ], e.prototype, "onClickPlay", null);
n([ h.trait("ReduceTravelSettlementTrait"), h.trait("Travel_pass_animationTrait", "[replace]设计时间换期动画衔接-兼容 结算点击继续") ], e.prototype, "onCompleteGame", null);
n([ u.throttle(300) ], e.prototype, "onClickBack", null);
return n([ classId("ChapterScoreWin"), S ], e);
}(p.default);
r.default = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/game/events/E_Game_BackHome": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../chapterList/events/E_ChapterList_Show": "E_ChapterList_Show",
"../../gameOver/events/E_ChapterGameOver_ShowFinish": "E_ChapterGameOver_ShowFinish",
"../../gameOver/type/ChapterGameOverType": "ChapterGameOverType",
"../events/E_ChapterWin_Hide": "E_ChapterWin_Hide"
} ],
ChapterScore_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "43a29q+VodP25WZeI2lgXE3", "ChapterScore_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterScore_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterScore_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterScore_Proxy ];
};
return e;
}(n.Module);
r.ChapterScore_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterScore_Proxy": "ChapterScore_Proxy"
} ],
ChapterScore_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "15e6b39QnREqIigmc9eCYj2", "ChapterScore_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterScore_Proxy = void 0;
var c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../scripts/falcon/EventManager"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), h = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), f = t("../../game/vo/ChapterGameInfo"), d = t("../../../../../../scripts/modules/score/type/ScoreType"), y = t("../events/E_ChapterScore_Reset"), m = t("../events/E_ChapterScore_Update"), _ = t("../vo/ChapterScoreInfo"), v = t("../../combo/vo/ChapterComboInfo"), g = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ u.E_BlocksProducer_TouchEnd, y.E_ChapterScore_Reset ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case u.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
break;

case y.E_ChapterScore_Reset:
this.onScoreReset();
}
};
e.prototype.onScoreReset = function() {
s.storage.setItem("chapterScore", 0);
p.EventManager.dispatchModuleEvent(new m.E_ChapterScore_Update({
type: d.ScoreUpdateType.Reset,
score: 0
}));
};
e.prototype.onTouchEnd = function(t) {
var e, r, o = f.chapterGameInfo.chapterNum, a = t.state, n = a.putPos, c = a.eliminateCount, l = a.continuousEliminateTimes, u = _.chapterScoreInfo.computeAddScore({
putCount: n.length,
eliminateRowColCount: c,
continuousEliminateTimes: l
}), y = u.addScore, g = u.showScore, C = s.storage.getItem("chapterScore", 0) + y;
0 === h.chapterConfigInfo.chapterDatasCfg[o].Condition.Way && C > h.chapterConfigInfo.chapterDatasCfg[o].Condition.RequiredScore && (C = h.chapterConfigInfo.chapterDatasCfg[o].Condition.RequiredScore);
s.storage.setItem("chapterScore", C);
var b = 0;
v.chapterComboInfo.comboState && (b = 500);
setTimeoutSafe(function() {
p.EventManager.dispatchModuleEvent(new m.E_ChapterScore_Update({
type: d.ScoreUpdateType.Add,
addScore: g,
score: C
}));
}, b);
var P = [];
this.extraScore(t, P);
if (P.length > 0) {
P.sort(function(t, e) {
return (null != t.priority ? t.priority : 100) - (null != e.priority ? e.priority : 100);
});
try {
for (var S = i(P), I = S.next(); !I.done; I = S.next()) {
var T = I.value;
this.applyScoreDelta(t, T, b);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
I && !I.done && (r = S.return) && r.call(S);
} finally {
if (e) throw e.error;
}
}
}
};
e.prototype.extraScore = function() {};
e.prototype.applyScoreDelta = function(t, e, r) {
void 0 === r && (r = 0);
var o = f.chapterGameInfo.chapterNum, a = s.storage.getItem("chapterScore", 0) + e.value;
if (0 === h.chapterConfigInfo.chapterDatasCfg[o].Condition.Way) {
var n = h.chapterConfigInfo.chapterDatasCfg[o].Condition.RequiredScore;
a > n && (a = n);
a < 0 && (a = 0);
}
s.storage.setItem("chapterScore", a);
var i = null != e.showValue ? e.showValue : e.value;
setTimeoutSafe(function() {
p.EventManager.dispatchModuleEvent(new m.E_ChapterScore_Update({
type: d.ScoreUpdateType.Add,
addScore: i,
score: a,
eliminate: 0
}));
}, r);
};
n([ c.trait("EffectAllClearPlusTrait", "新版本清盘动效搭配音效"), c.trait("PlacementBlocksEliminateEffectTrait", "播放特效+更新数据（加分、加收集物）"), c.trait("ClearComboAnimTrait", "清盘和combo和well done动效强化 旅行加清屏") ], e.prototype, "onTouchEnd", null);
n([ c.trait("FeatclearscreenbombTrait", "清盘动画方块爆发涌现，将分数上顶积分") ], e.prototype, "extraScore", null);
n([ c.trait("FeatclearscreenbombTrait", "清盘动画方块爆发涌现，将分数上顶积分") ], e.prototype, "applyScoreDelta", null);
return n([ classId("ChapterScore_Proxy") ], e);
}(l.Proxy);
r.ChapterScore_Proxy = g;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/score/type/ScoreType": void 0,
"../../combo/vo/ChapterComboInfo": "ChapterComboInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../events/E_ChapterScore_Reset": "E_ChapterScore_Reset",
"../events/E_ChapterScore_Update": "E_ChapterScore_Update",
"../vo/ChapterScoreInfo": "ChapterScoreInfo"
} ],
ChapterSkin_Board_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "afacdx9fohD2oxm7RBaiKpk", "ChapterSkin_Board_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterSkin_Board_Proxy = void 0;
var i = t("../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../scripts/falcon/Proxy"), s = t("../../../../../../scripts/modules/game/events/E_Game_Start"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ s.E_Game_Start ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case s.E_Game_Start:
this.OnGameStart();
}
};
e.prototype.OnGameStart = function() {};
n([ i.trait("TravelNoSkinTrait", "关卡不生效皮肤换色效果") ], e.prototype, "OnGameStart", null);
return n([ classId("ChapterSkin_Board_Proxy") ], e);
}(c.Proxy);
r.ChapterSkin_Board_Proxy = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0
} ],
ChapterSkin_GameBackBtn_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a0e76TYnJhJ05k3oRxMjUh2", "ChapterSkin_GameBackBtn_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterSkin_GameBackBtn_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/skin/events/E_Skin_Ready_Complete"), h = t("../../prefab/ChapterPrefabConfig"), f = t("../../topInfo/components/ChapterTopInfoBtn"), d = t("../events/E_ChapterSkin_GameBackBtn"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
p.UI.addEventListener("open", function(e) {
e === h.ChapterPrefabConfig.ChapterTopInfoBtn && t.onReadyComplete();
});
};
e.prototype.registerEvents = function() {
return [ u.E_Skin_Ready_Complete, d.E_ChapterSkin_GameBackBtn ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_ChapterSkin_GameBackBtn:
case u.E_Skin_Ready_Complete:
this.onReadyComplete();
}
};
e.prototype.onReadyComplete = function() {
var t = this.getSkinBackBtnParent();
t && this.updateSkinBackBtn(t);
};
e.prototype.updateSkinBackBtn = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
return [ 2 ];
});
});
};
e.prototype.getSkinBackBtnParent = function() {
var t = Cinst(f.default);
return t ? t.backBtn.node : null;
};
n([ s.trait("CTChapterSkinBonesTrait", "皮肤骨骼") ], e.prototype, "updateSkinBackBtn", null);
return n([ classId("ChapterSkin_GameBackBtn_Proxy") ], e);
}(l.Proxy);
r.ChapterSkin_GameBackBtn_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/skin/events/E_Skin_Ready_Complete": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../topInfo/components/ChapterTopInfoBtn": "ChapterTopInfoBtn",
"../events/E_ChapterSkin_GameBackBtn": "E_ChapterSkin_GameBackBtn"
} ],
ChapterSkin_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "927eaTtqfFHMqN8DEOnvUfm", "ChapterSkin_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterSkin_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterSkin_SetupBtn_Proxy"), c = t("./proxys/ChapterSkin_GameBackBtn_Proxy"), s = t("./proxys/ChapterSkin_Board_Proxy"), p = t("./proxys/ChapterSkin_Proxy"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterSkin_SetupBtn_Proxy, c.ChapterSkin_GameBackBtn_Proxy, s.ChapterSkin_Board_Proxy, p.ChapterSkin_Proxy ];
};
return e;
}(n.Module);
r.ChapterSkin_Module = l;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterSkin_Board_Proxy": "ChapterSkin_Board_Proxy",
"./proxys/ChapterSkin_GameBackBtn_Proxy": "ChapterSkin_GameBackBtn_Proxy",
"./proxys/ChapterSkin_Proxy": "ChapterSkin_Proxy",
"./proxys/ChapterSkin_SetupBtn_Proxy": "ChapterSkin_SetupBtn_Proxy"
} ],
ChapterSkin_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a4b95UUiYJLT7hthZYi8Cck", "ChapterSkin_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterSkin_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/skin/events/E_Skin_Ready_Complete"), h = t("../../game/components/ChapterGame"), f = t("../../prefab/ChapterPrefabConfig"), d = t("../events/E_ChapterSkin_GameBg"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
p.UI.addEventListener("open", function(e) {
if (e === f.ChapterPrefabConfig.ChapterGame) {
t.onOpenChapter();
t.onReadyComplete();
}
});
p.UI.addEventListener("close", function(e) {
e === f.ChapterPrefabConfig.ChapterGame && t.onCloseChapter();
});
};
e.prototype.registerEvents = function() {
return [ u.E_Skin_Ready_Complete, d.E_ChapterSkin_GameBg ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_ChapterSkin_GameBg:
case u.E_Skin_Ready_Complete:
this.onReadyComplete();
}
};
e.prototype.onOpenChapter = function() {};
e.prototype.onCloseChapter = function() {};
e.prototype.onReadyComplete = function() {
var t = this.getSkinGameBgParent();
t && this.updateSkinGameBg(t);
};
e.prototype.updateSkinGameBg = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
return [ 2 ];
});
});
};
e.prototype.getSkinGameBgParent = function() {
var t = Cinst(h.default);
return t ? t.bgContainer : null;
};
n([ s.trait("TravelNoSkinTrait", "关卡不生效皮肤换色效果") ], e.prototype, "onOpenChapter", null);
n([ s.trait("TravelNoSkinTrait", "关卡不生效皮肤换色效果") ], e.prototype, "onCloseChapter", null);
n([ s.trait("CTChapterSkinBonesTrait", "皮肤骨骼") ], e.prototype, "updateSkinGameBg", null);
return n([ classId("ChapterSkin_Proxy") ], e);
}(l.Proxy);
r.ChapterSkin_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/skin/events/E_Skin_Ready_Complete": void 0,
"../../game/components/ChapterGame": "ChapterGame",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../events/E_ChapterSkin_GameBg": "E_ChapterSkin_GameBg"
} ],
ChapterSkin_SetupBtn_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f1122TI30tNUKhZQcJ6c+4M", "ChapterSkin_SetupBtn_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterSkin_SetupBtn_Proxy = void 0;
var s = t("../../../../../../scripts/base/decorators/DecoratorTrait"), p = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/falcon/Proxy"), u = t("../../../../../../scripts/modules/skin/events/E_Skin_Ready_Complete"), h = t("../../prefab/ChapterPrefabConfig"), f = t("../../topInfo/components/ChapterTopInfoBtn"), d = t("../events/E_ChapterSkin_SetupBtn"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
p.UI.addEventListener("open", function(e) {
e === h.ChapterPrefabConfig.ChapterTopInfoBtn && t.onReadyComplete();
});
};
e.prototype.registerEvents = function() {
return [ u.E_Skin_Ready_Complete, d.E_ChapterSkin_SetupBtn ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_ChapterSkin_SetupBtn:
case u.E_Skin_Ready_Complete:
this.onReadyComplete();
}
};
e.prototype.onReadyComplete = function() {
var t = this.getSkinSetupBtnParent();
t && this.updateSkinSetupBtn(t);
};
e.prototype.updateSkinSetupBtn = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
return [ 2 ];
});
});
};
e.prototype.getSkinSetupBtnParent = function() {
var t = Cinst(f.default);
return t ? t.setup.node : null;
};
n([ s.trait("CTChapterSkinBonesTrait", "皮肤骨骼") ], e.prototype, "updateSkinSetupBtn", null);
return n([ classId("ChapterSkin_SetupBtn_Proxy") ], e);
}(l.Proxy);
r.ChapterSkin_SetupBtn_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/skin/events/E_Skin_Ready_Complete": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../topInfo/components/ChapterTopInfoBtn": "ChapterTopInfoBtn",
"../events/E_ChapterSkin_SetupBtn": "E_ChapterSkin_SetupBtn"
} ],
ChapterSpriteFrameConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "11a39R5zMxOdLrL6iaFSoeG", "ChapterSpriteFrameConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SpriteFrameConfigType = r.satisfies = r.ClassSpriteFrameConfig = void 0;
r.ClassSpriteFrameConfig = {};
cc._RF.pop();
}, {} ],
ChapterThroughCupBone: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b535d3Hit5MdaM3u7mNqz0d", "ChapterThroughCupBone");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/async/DeferredPromise"), c = t("../../../../../../scripts/base/components/Component"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bone = null;
e._onAnimationComplete = new i.DeferredPromise();
return e;
}
Object.defineProperty(e.prototype, "onAnimationComplete", {
get: function() {
return this._onAnimationComplete;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
var t = this;
this.bone.addEventListener(dragonBones.EventObject.COMPLETE, function(e) {
e && e.animationState && e.animationState.name && "newAnimation" == e.animationState.name && t._onAnimationComplete.resolve(!0);
}, this);
};
e.prototype.render = function() {
this.bone.playAnimation(this.state.animName, this.state.playTimes || 1);
};
n([ l(dragonBones.ArmatureDisplay) ], e.prototype, "bone", void 0);
return n([ p ], e);
}(c.default);
r.default = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/DeferredPromise": void 0,
"../../../../../../scripts/base/components/Component": void 0
} ],
ChapterTimerInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9234f5oAydEaqlusUaLwWXf", "ChapterTimerInfo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.chapterTimerInfo = void 0;
var o = t("../../../../../../scripts/base/storage/Storage"), a = function() {
function t() {}
Object.defineProperty(t.prototype, "timeSinceGameReady", {
get: function() {
return o.storage.getItem("chapterTimeSinceGameReady", new Date().getTime());
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "spendStartTime", {
get: function() {
return o.storage.getItem("chapterSpendStartTime", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "spendTime", {
get: function() {
return o.storage.getItem("chapterSpendTime", 0);
},
enumerable: !1,
configurable: !0
});
return t;
}();
r.chapterTimerInfo = new a();
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ChapterTimer_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e550bBcxE1Mc63yUmWkVE7/", "ChapterTimer_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTimer_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterTimer_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterTimer_Proxy ];
};
return e;
}(n.Module);
r.ChapterTimer_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterTimer_Proxy": "ChapterTimer_Proxy"
} ],
ChapterTimer_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "90b9djazUtAJItXjrPiaZEa", "ChapterTimer_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTimer_Proxy = void 0;
var n = t("../../../../../../scripts/falcon/Proxy"), i = t("../../../../../../scripts/modules/game/events/E_Game_EventHide"), c = t("../../../../../../scripts/modules/game/events/E_Game_EventShow"), s = t("../events/E_ChapterTimer_updateSpendTime"), p = t("../vo/ChapterTimerInfo"), l = t("../../../../../../scripts/base/storage/Storage"), u = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd"), h = t("../../../../../../scripts/modules/game/events/E_Game_Ready"), f = t("../../score/vo/ChapterScoreInfo"), d = t("../../prefab/ChapterPrefabConfig"), y = t("../../../../../../scripts/base/ui/UI"), m = t("../../../../../../scripts/modules/game/vo/GameInfo"), _ = t("../../../../../../scripts/modules/game/type/GameType"), v = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onInit = function() {
var t = this;
y.UI.addEventListener("close", function(e) {
e === d.ChapterPrefabConfig.ChapterGame && t.onCloseChapterGame();
});
};
e.prototype.registerEvents = function() {
return [ i.E_Game_EventHide, s.E_ChapterTimer_updateSpendTime, c.E_Game_EventShow, h.E_Game_Ready, u.E_GameOver_GameEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case i.E_Game_EventHide:
this.onGameHide();
break;

case s.E_ChapterTimer_updateSpendTime:
this.updateSpendTime();
break;

case c.E_Game_EventShow:
this.onGameShow();
break;

case h.E_Game_Ready:
this.onGameReady();
break;

case u.E_GameOver_GameEnd:
this.onGameOver();
}
};
e.prototype.updateSpendTime = function() {
var t = Date.now(), e = t - p.chapterTimerInfo.spendStartTime, r = p.chapterTimerInfo.spendTime + e;
l.storage.setItem("chapterSpendTime", r);
l.storage.setItem("chapterSpendStartTime", t);
};
e.prototype.onCloseChapterGame = function() {
this.updateSpendTime();
};
e.prototype.onGameReady = function() {
0 === f.chapterScoreInfo.score && l.storage.setItem("chapterSpendTime", 0);
l.storage.setItem("chapterSpendStartTime", Date.now());
};
e.prototype.onGameOver = function() {
this.updateSpendTime();
};
e.prototype.onGameHide = function() {
m.gameInfo.gameMode === _.GameMode.Chapter && this.updateSpendTime();
};
e.prototype.onGameShow = function() {
0 === f.chapterScoreInfo.score && l.storage.setItem("chapterSpendTime", 0);
l.storage.setItem("chapterSpendStartTime", Date.now());
};
return e;
}(n.Proxy);
r.ChapterTimer_Proxy = v;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/game/events/E_Game_EventHide": void 0,
"../../../../../../scripts/modules/game/events/E_Game_EventShow": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Ready": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEnd": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../events/E_ChapterTimer_updateSpendTime": "E_ChapterTimer_updateSpendTime",
"../vo/ChapterTimerInfo": "ChapterTimerInfo"
} ],
ChapterTopInfoBtn: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "78a08IPjQNA5ItiJJO/wF7a", "ChapterTopInfoBtn");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../scripts/base/components/Component"), l = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), u = t("../../../../../../scripts/base/decorators/DecoratorThrottle"), h = t("../../../../../../scripts/base/decorators/DecoratorTrait"), f = t("../../../../../../scripts/falcon/EventManager"), d = t("../../../../../../scripts/modules/audio/config/AudioConfig"), y = t("../../../../../../scripts/modules/game/events/E_Game_TopInfoBack"), m = t("../../../../../../scripts/modules/setup/config/SetupConfig"), _ = t("../../../../../../scripts/modules/setup/events/E_Setup_Show"), v = t("../../chapterList/events/E_ChapterList_Show"), g = cc._decorator, C = g.ccclass, b = g.property, P = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.backBtn = null;
e.setup = null;
return e;
}
e.prototype.onLoad = function() {
this.initCompelte(this.setup.node);
};
e.prototype.onEnable = function() {
var t;
this.setBtnEnabled(null === (t = this.state.btnState) || void 0 === t || t);
};
e.prototype.render = function() {
var t;
return i(this, void 0, void 0, function() {
return c(this, function() {
this.setBtnEnabled(null === (t = this.state.btnState) || void 0 === t || t);
return [ 2 ];
});
});
};
e.prototype.setBtnEnabled = function(t) {
this.backBtn.enabled = t;
this.setup.enabled = t;
};
e.prototype.initCompelte = function() {};
e.prototype.onClickSetup = function() {
var t = [ m.enSetupKeys.sound, m.enSetupKeys.BGM, m.enSetupKeys.moreSettings, m.enSetupKeys.home, m.enSetupKeys.replay ];
f.EventManager.dispatchModuleEvent(new _.E_Setup_Show({
keys: t
}));
};
e.prototype.onClickBack = function() {
s.audioInfo.stop(d.AudioConfig.CommonBgm);
f.EventManager.dispatchModuleEvent(new y.E_Game_TopInfo());
f.EventManager.dispatchModuleEvent(new v.E_ChapterList_Show({}));
};
n([ b(cc.Button) ], e.prototype, "backBtn", void 0);
n([ b(cc.Button) ], e.prototype, "setup", void 0);
n([ l.adapterFringe("backBtn", "setup") ], e.prototype, "onLoad", null);
n([ h.trait("IsOpenVibrateTrait", "设置按钮增加震动 icon 提示") ], e.prototype, "initCompelte", null);
n([ u.throttle(300) ], e.prototype, "onClickSetup", null);
n([ u.throttle(300) ], e.prototype, "onClickBack", null);
return n([ classId("ChapterTopInfoBtn"), C ], e);
}(p.default);
r.default = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/game/events/E_Game_TopInfoBack": void 0,
"../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../scripts/modules/setup/events/E_Setup_Show": void 0,
"../../chapterList/events/E_ChapterList_Show": "E_ChapterList_Show"
} ],
ChapterTopInfoCollect: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6410bgtTy1F65kdsTZozAwN", "ChapterTopInfoCollect");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/async/WaitFor"), p = t("../../../../../../scripts/base/components/Component"), l = t("../../../../../../scripts/base/loader/ResLoader"), u = t("../../collectItem/components/ChapterCollectTopItem"), h = t("../../prefab/ChapterPrefabConfig"), f = t("../config/ChapterTopInfoConfig"), d = cc._decorator, y = d.ccclass, m = d.property, _ = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._cacheCollectItems = [];
e.items = null;
return e;
}
Object.defineProperty(e.prototype, "cacheCollectItems", {
get: function() {
return this._cacheCollectItems;
},
enumerable: !1,
configurable: !0
});
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t, e, r, o, a, n, i, p, d, y, m, _, v, g, C, b, P;
return c(this, function(c) {
switch (c.label) {
case 0:
t = this.state, e = t.collectRemainCollectItems, r = t.targetCollect;
o = Object.keys(e).length;
a = o > f.ChapterTopInfoConfig.collectDisArr.length - 1 ? f.ChapterTopInfoConfig.collectDisArr.length - 1 : o;
n = f.ChapterTopInfoConfig.collectDisArr[a];
i = 0;
o > 0 && (i = n * (o - 1));
p = i / 2 * -1;
d = this._cacheCollectItems.length;
y = r.length;
if (d > y) for (v = y - 1; v < d; v++) (m = this._cacheCollectItems[v].node).parent && m.parent.removeChild(m);
return [ 4, l.ResLoader.asyncLoadByBundle("chapter", h.ChapterPrefabConfig.ChapterCollectTopItem.url, cc.Prefab) ];

case 1:
_ = c.sent();
this.items.removeAllChildren();
for (v = 0; v < r.length; v++) {
g = r[v], C = g.Key, b = g.Value;
try {
P = void 0;
if (this._cacheCollectItems[v]) {
P = this._cacheCollectItems[v].node;
this._cacheCollectItems[v].color = C;
this._cacheCollectItems[v].collectCount = b;
} else {
P = cc.instantiate(_);
this._cacheCollectItems[v] = {
node: P,
color: C,
collectCount: b
};
}
P.x = p + n * v;
P.getComponent(u.default).setState({
color: +C,
showMoveAnim: !0,
remainCollectCount: e[C],
targetCount: b
});
P.setParent(null);
this.items.addChild(P);
} catch (t) {}
}
s.waitFor.end("chapterTopInfoRender");
return [ 2 ];
}
});
});
};
e.prototype.reset = function() {
this.items.removeAllChildren();
};
n([ m(cc.Node) ], e.prototype, "items", void 0);
return n([ y ], e);
}(p.default);
r.default = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/WaitFor": void 0,
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../collectItem/components/ChapterCollectTopItem": "ChapterCollectTopItem",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../config/ChapterTopInfoConfig": "ChapterTopInfoConfig"
} ],
ChapterTopInfoConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "846d8x9KAVDLr7bZWvBkKnZ", "ChapterTopInfoConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTopInfoConfig = void 0;
r.ChapterTopInfoConfig = {
scoreMaskWith: 363,
collectDisArr: [ 0, 0, 200, 140, 130, 120 ]
};
cc._RF.pop();
}, {} ],
ChapterTopInfoScore: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b4061HYYyNP46KJ5oBO0iNk", "ChapterTopInfoScore");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = t("../config/ChapterTopInfoConfig"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.targetLab = null;
e.mask = null;
e.curScoreBg = null;
e.curScoreLab = null;
e.isInit = !1;
return e;
}
e.prototype.shouldComponentUpdate = function(t) {
return this.state.curScore != t.curScore || this.state.targetScore != t.targetScore;
};
e.prototype.render = function() {
var t = this;
if (this.isInit) {
var e = Number(this.curScoreLab.string) || 0;
this.targetLab.string = "" + this.state.targetScore;
if (this.state.curScore != e) {
var r = {
score: e
}, o = Math.min(.2, .02 * (this.state.curScore - e));
o < 0 && (o = 0);
cc.tween(r).to(o, {
score: this.state.curScore
}, {
progress: function(e, r, o, a) {
t.refreshProgress(parseInt(o));
return e + (r - e) * a;
}
}).call(function() {
t.refreshProgress(t.state.curScore);
}).start();
}
} else {
this.isInit = !0;
this.targetLab.string = "" + this.state.targetScore;
this.refreshProgress(this.state.curScore);
}
};
e.prototype.refreshProgress = function(t) {
if (t >= this.state.targetScore) {
this.mask.width = c.ChapterTopInfoConfig.scoreMaskWith;
this.curScoreLab.string = "" + this.state.targetScore;
} else {
this.mask.width = Math.floor(t / this.state.targetScore * c.ChapterTopInfoConfig.scoreMaskWith);
this.curScoreLab.string = "" + t;
}
this.curScoreBg.x = this.mask.x + this.mask.width;
};
n([ l(cc.Label) ], e.prototype, "targetLab", void 0);
n([ l(cc.Node) ], e.prototype, "mask", void 0);
n([ l(cc.Node) ], e.prototype, "curScoreBg", void 0);
n([ l(cc.Label) ], e.prototype, "curScoreLab", void 0);
return n([ p ], e);
}(i.default);
r.default = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../config/ChapterTopInfoConfig": "ChapterTopInfoConfig"
} ],
ChapterTopInfo_CollectEffect_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "72417keJbtN1pgO/np8t270", "ChapterTopInfo_CollectEffect_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTopInfo_CollectEffect_Proxy = void 0;
var s = t("../../../../../../scripts/base/async/WaitFor"), p = t("../../../../../../scripts/base/audio/AudioInfo"), l = t("../../../../../../scripts/base/decorators/DecoratorTrait"), u = t("../../../../../../scripts/base/loader/ResLoader"), h = t("../../../../../../scripts/base/ui/UI"), f = t("../../../../../../scripts/falcon/Proxy"), d = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), y = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), m = t("../../../../../../scripts/modules/game/events/E_Game_RefreshView"), _ = t("../../audio/config/ChapterAudioConfig"), v = t("../../collectItem/components/ChapterCollectEffectItem"), g = t("../../collectItem/components/ChapterCollectTopItem"), C = t("../../game/components/ChapterGame"), b = t("../../game/vo/ChapterGameInfo"), P = t("../../prefab/ChapterPrefabConfig"), S = t("../components/ChapterTopInfoCollect"), I = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._playAnimCount = 0;
return e;
}
r = e;
e.prototype.onInit = function() {
h.UI.addEventListener("close", function(t) {
t === P.ChapterPrefabConfig.ChapterGame && (Cinst(C.default).collectEffectContainer.opacity = 0);
});
};
e.prototype.registerEvents = function() {
return [ d.E_BlocksProducer_TouchEnd, m.E_Game_RefreshView ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case d.E_BlocksProducer_TouchEnd:
this.onTouchEnd(t);
break;

case m.E_Game_RefreshView:
this.onGameRefreshView(t);
}
};
e.prototype.onGameRefreshView = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o;
return c(this, function(a) {
switch (a.label) {
case 0:
return t.data.chapterChangeCollection ? [ 4, Cinst(S.default) ] : [ 3, 2 ];

case 1:
e = a.sent().cacheCollectItems;
for (r = 0; r < e.length; r++) (o = e[r].node).parent && o.getComponent(g.default).setState({
remainCollectCount: t.data.chapterCollectionNum
});
a.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.onTouchEnd = function(t) {
return i(this, void 0, void 0, function() {
var e, o, a, n, i, l, h, f, d, m, g, I, T, E, O, A, R = this;
return c(this, function() {
if (b.chapterGameInfo.chapterCondition.Way !== y.ChapterType.collect) return [ 2 ];
if (!(e = Cinst(S.default))) return [ 2 ];
o = Cinst(C.default);
a = t.state.eliminateInfos;
o.collectEffectContainer.opacity = 255;
s.waitFor.start("chapterCollectItemAnimState");
if (a && Object.keys(a).length > 0) {
n = [];
for (i in a) for (l in a[i]) {
h = a[i][l], g = h.color, I = h.node;
g > 100 && n.push({
color: g,
node: I
});
}
f = {};
d = e.cacheCollectItems;
for (A = 0; A < d.length; A++) {
m = d[A], g = m.color;
if ((I = m.node).parent) {
T = I.parent.convertToWorldSpaceAR(I.getPosition());
f[g] = T;
}
}
this._playAnimCount = 0;
E = function(t) {
var e = n[t], a = e.node, i = e.color;
if (!f[i]) {
O._playAnimCount++;
return "continue";
}
var c = a.parent.convertToWorldSpaceAR(a.getPosition()), s = cc.Vec2.ZERO, l = new cc.Vec2(f[i].x - c.x, f[i].y - c.y);
u.ResLoader.asyncLoadByBundle("chapter", P.ChapterPrefabConfig.ChapterCollectEffectItem.url, cc.Prefab).then(function(e) {
var a = cc.instantiate(e);
o.collectEffectContainer.addChild(a);
a.active = !1;
a.x = c.x;
a.y = c.y;
var u = a.getComponent(v.default), h = R.calculateCenterPosition(s, l);
cc.tween(a).delay(t * r.ITEM_DELAY).call(function() {
a.active = !0;
u.setState({
playAnimation: !0,
color: i
});
}).delay(r.ACTIVATE_DELAY).call(function() {
p.audioInfo.play(_.ChapterAudioConfig.travel_game_collect_item1);
}).delay(r.ANIM_START_DELAY).call(function() {
R.showItemAnim(a, {
cacheCollectItems: d,
collectInfosLength: n.length,
color: i,
positions: {
begin: s,
center: h,
end: l
}
});
}).start();
});
};
O = this;
for (A = 0; A < n.length; A++) E(A);
}
return [ 2 ];
});
});
};
e.prototype.calculateCenterPosition = function(t, e) {
var o = Math.min(e.y - t.y, r.MAX_HEIGHT_OFFSET), a = Math.floor(o / 2), n = Math.floor(o);
a = t.x > e.x ? a + (t.x - e.x) : -a + (t.x - e.x);
return new cc.Vec2(t.x + a, t.y - n);
};
e.prototype.showItemAnim = function(t, e) {
var o = this, a = e.cacheCollectItems, n = e.collectInfosLength, i = e.color, c = e.positions;
cc.tween(t).bezierBy(r.ANIMATION_DURATION, c.begin, c.center, c.end).call(function() {
t.parent && t.parent.removeChild(t);
var e = a.find(function(t) {
return Number(t.color) === Number(i);
});
if (e) {
var r = e.node.getComponent(g.default);
if (r) {
r.setState({
color: i,
showMoveAnim: !0,
remainCollectCount: r.state.remainCollectCount - 1,
targetCount: r.state.targetCount
});
r.playAction();
}
}
p.audioInfo.play(_.ChapterAudioConfig.travel_game_collect_item2);
o._playAnimCount++;
o._playAnimCount === n && s.waitFor.end("chapterCollectItemAnimState");
}).start();
};
var r;
e.ANIMATION_DURATION = .6;
e.ITEM_DELAY = .13;
e.ACTIVATE_DELAY = .2;
e.ANIM_START_DELAY = .4;
e.MAX_HEIGHT_OFFSET = 500;
n([ l.trait("PlacementBlocksEliminateEffectTrait", "消除加分、加收集物特效"), l.trait("TravelEasterEggTrait", "消除彩蛋时 播放彩蛋特效") ], e.prototype, "onTouchEnd", null);
n([ l.trait("CTChapterWinOverTrait", "胜利去掉胜利动画") ], e.prototype, "showItemAnim", null);
return r = n([ classId("ChapterTopInfo_CollectEffect_Proxy") ], e);
}(f.Proxy);
r.ChapterTopInfo_CollectEffect_Proxy = I;
cc._RF.pop();
}, {
"../../../../../../scripts/base/async/WaitFor": void 0,
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/game/events/E_Game_RefreshView": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../collectItem/components/ChapterCollectEffectItem": "ChapterCollectEffectItem",
"../../collectItem/components/ChapterCollectTopItem": "ChapterCollectTopItem",
"../../game/components/ChapterGame": "ChapterGame",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../components/ChapterTopInfoCollect": "ChapterTopInfoCollect"
} ],
ChapterTopInfo_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9cabefvCaNN1LXqGUu37nwz", "ChapterTopInfo_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTopInfo_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterTopInfo_Proxy"), c = t("./proxys/ChapterTopInfo_CollectEffect_Proxy"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterTopInfo_Proxy, c.ChapterTopInfo_CollectEffect_Proxy ];
};
return e;
}(n.Module);
r.ChapterTopInfo_Module = s;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterTopInfo_CollectEffect_Proxy": "ChapterTopInfo_CollectEffect_Proxy",
"./proxys/ChapterTopInfo_Proxy": "ChapterTopInfo_Proxy"
} ],
ChapterTopInfo_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "14553zrdZhM1LBbZsdhG4wt", "ChapterTopInfo_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTopInfo_Proxy = void 0;
var n = t("../../../../../../scripts/base/storage/Storage"), i = t("../../../../../../scripts/falcon/Proxy"), c = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), s = t("../../../../../../scripts/modules/game/events/E_Game_RefreshView"), p = t("../../../../../../scripts/modules/game/events/E_Game_Start"), l = t("../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre"), u = t("../../collect/events/E_ChapterCollect_Update"), h = t("../../collect/type/CollectUpdateType"), f = t("../../collect/vo/ChapterCollectInfo"), d = t("../../game/vo/ChapterGameInfo"), y = t("../../score/events/E_ChapterScore_Update"), m = t("../../score/vo/ChapterScoreInfo"), _ = t("../components/ChapterTopInfo"), v = t("../components/ChapterTopInfoBtn"), g = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ y.E_ChapterScore_Update, u.E_ChapterCollect_Update, s.E_Game_RefreshView, p.E_Game_Start, l.E_GameOver_GameEndPre ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case y.E_ChapterScore_Update:
this.scoreRender(t);
break;

case u.E_ChapterCollect_Update:
this.collectRender(t);
break;

case s.E_Game_RefreshView:
this.onRefreshView(t);
break;

case l.E_GameOver_GameEndPre:
this.setChapterTopBtnState(!1);
break;

case p.E_Game_Start:
this.setChapterTopBtnState(!0);
}
};
e.prototype.setChapterTopBtnState = function(t) {
var e = Cinst(v.default);
e && e.setState({
btnState: t
});
};
e.prototype.onRefreshView = function(t) {
t.data.chapterChangeScore && this.scoreRender();
};
e.prototype.scoreRender = function(t) {
if (d.chapterGameInfo.chapterCondition.Way === c.ChapterType.score) {
var e = Cinst(_.default);
if (e) {
var r = m.chapterScoreInfo.score;
(null == t ? void 0 : t.option) && "number" == typeof t.option.score && (r = t.option.score);
e.setState({
score: r
});
}
}
};
e.prototype.collectRender = function(t) {
var e = t.option;
if (e.type === h.CollectUpdateType.Add && Cinst(_.default)) {
var r = f.chapterCollectInfo.collectRemainCollectItems;
for (var o in r) if (e.addNums[o]) {
r[o] -= e.addNums[o];
r[o] < 0 && (r[o] = 0);
}
var a = r;
n.storage.setItem("chapterCollectRemainCollectItems", a);
}
};
return e;
}(i.Proxy);
r.ChapterTopInfo_Proxy = g;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/game/events/E_Game_RefreshView": void 0,
"../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../scripts/modules/gameOver/events/E_GameOver_GameEndPre": void 0,
"../../collect/events/E_ChapterCollect_Update": "E_ChapterCollect_Update",
"../../collect/type/CollectUpdateType": "CollectUpdateType",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../score/events/E_ChapterScore_Update": "E_ChapterScore_Update",
"../../score/vo/ChapterScoreInfo": "ChapterScoreInfo",
"../components/ChapterTopInfo": "ChapterTopInfo",
"../components/ChapterTopInfoBtn": "ChapterTopInfoBtn"
} ],
ChapterTopInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bc45d7PcDFJjr0IUIVAIr0u", "ChapterTopInfo");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var s = t("../../../../../../scripts/base/components/Component"), p = t("../../../../../../scripts/base/decorators/DecoratorAdapter"), l = t("../../../../../../scripts/base/ui/UI"), u = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), h = t("../../collect/vo/ChapterCollectInfo"), f = t("../../prefab/ChapterPrefabConfig"), d = t("./ChapterTopInfoBtn"), y = t("./ChapterTopInfoCollect"), m = t("./ChapterTopInfoScore"), _ = cc._decorator, v = _.ccclass, g = _.property, C = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.container = null;
e.setupPosNd = null;
return e;
}
e.prototype.onLoad = function() {
var t = this.setupPosNd.getComponent(cc.Widget).top, e = .5 * (.5 * cc.view.getVisibleSize().height - t - 680);
this.container.getComponent(cc.Widget).top = t + e + 80;
};
e.prototype.onEnable = function() {};
e.prototype.onDisable = function() {
this.lastNode && l.UI.hide(this.lastNode);
};
e.prototype.render = function() {
return i(this, void 0, void 0, function() {
var t, e, r;
return c(this, function(o) {
switch (o.label) {
case 0:
this.lastNode && this.lastWay != this.state.chapterCondition.Way && l.UI.hide(this.lastNode);
this.lastWay = this.state.chapterCondition.Way;
return [ 4, l.UI.show(f.ChapterPrefabConfig.ChapterTopInfoBtn, this.node) ];

case 1:
o.sent().getComponent(d.default).setState({
btnState: this.state.btnState
});
return (t = this.state.chapterCondition).Way != u.ChapterType.score ? [ 3, 3 ] : [ 4, l.UI.show(f.ChapterPrefabConfig.ChapterTopInfoScore, this.container) ];

case 2:
(e = o.sent()).getComponent(m.default).setState({
curScore: this.state.score,
targetScore: h.chapterCollectInfo.collectTotalScore
});
this.lastNode = e;
return [ 3, 5 ];

case 3:
return [ 4, l.UI.show(f.ChapterPrefabConfig.ChapterTopInfoCollect, this.container) ];

case 4:
(r = o.sent()).getComponent(y.default).setState({
targetCollect: t.RequiredCollections,
collectRemainCollectItems: this.state.collectRemainCollectItems
});
this.lastNode = r;
o.label = 5;

case 5:
return [ 2 ];
}
});
});
};
n([ g(cc.Node) ], e.prototype, "container", void 0);
n([ g(cc.Node) ], e.prototype, "setupPosNd", void 0);
n([ p.adapterFringe("setupPosNd") ], e.prototype, "onLoad", null);
return n([ classId("ChapterTopInfo"), v ], e);
}(s.default);
r.default = C;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/decorators/DecoratorAdapter": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"./ChapterTopInfoBtn": "ChapterTopInfoBtn",
"./ChapterTopInfoCollect": "ChapterTopInfoCollect",
"./ChapterTopInfoScore": "ChapterTopInfoScore"
} ],
ChapterTraitsClassMap: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4d7a6yC5xlGVIFwqeczJxt0", "ChapterTraitsClassMap");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterTraitsClassMap = void 0;
var o = t("../../advertisement/traits/AdLevelTrait"), a = t("../../blocksProducer/traits/AlloBlockStateTrait"), n = t("../../chapterList/tratis/BPuzzleTimeTrait"), i = t("../../algorithmStrategy/traits/travelAglo/ChapterAlgoStrategyTrait"), c = t("../../score/traits/ChapterCollectScoreFixedTrait"), s = t("../../score/traits/CTChapterScoreComboTrait"), p = t("../../skin/traits/CTChapterSkinBonesTrait"), l = t("../../win/traits/DifficultChangeColorTrait"), u = t("../../algorithmStrategy/traits/FastTkxcHelpTravelTrait"), h = t("../../gameOver/traits/GateWinStreakStateTrait"), f = t("../../algorithmStrategy/traits/IsIncreaseEnjoyCollectionTrait"), d = t("../../algorithmStrategy/traits/IsOpenCollectLevelOfferNormalAndGemTrait"), y = t("../../fail/traits/IsOpenLevelOverTipsChangeTrait"), m = t("../../chapterList/tratis/IsOPenLevelSceneEffectTrait"), _ = t("../../collectionProducer/traits/IsTravelMoreDiamondAwardTrait"), v = t("../../algorithmStrategy/traits/LevelExpAlgorithmTrait"), g = t("../../algorithmStrategy/traits/travelAglo/LevelHelpStateTrait"), C = t("../../algorithmStrategy/traits/LevelLoopTrait"), b = t("../../algorithmStrategy/traits/travelAglo/LevelPiecesThreeRanTrait"), P = t("../../algorithmStrategy/traits/LevelRandomReplaceTrait"), S = t("../../revive/traits/LevelReviveCondiTrait"), I = t("../../revive/traits/LevelReviveCountTrait"), T = t("../../revive/traits/LevelReviveTrait"), E = t("../../algorithmStrategy/traits/travelAglo/LevelWayHelpConfigTrait"), O = t("../../algorithmStrategy/traits/travelAglo/LevelWayHelpTrait"), A = t("../../collectionProducer/traits/MultiElementCollectTrait"), R = t("../../game/traits/PercentStreamerTrait"), w = t("../../collectionProducer/traits/PureGemTrait"), G = t("../../algorithmStrategy/traits/RatioAdjustTrait"), x = t("../../gameOver/traits/ReduceTravelSettlementTrait"), k = t("../../revive/traits/ReviveBuffTrait"), B = t("../../chapterList/tratis/Travel_pass_animationTrait"), M = t("../../algorithmStrategy/traits/TravelAlgorithmNewDirectionBTrait"), D = t("../../colorProducer/traits/TravelCollectSingleColorTrait"), j = t("../../collectionProducer/traits/TravelEasterEggTrait"), F = t("../../algorithmStrategy/traits/TravelHappyOverTrait"), L = t("../../win/traits/TravelResultOptimizingTrait"), N = t("../../win/traits/TravelResultTrait"), U = t("../../encourage/traits/TravelWordOptTrait");
r.ChapterTraitsClassMap = {
AdLevelTrait: o.AdLevelTrait,
AlloBlockStateTrait: a.AlloBlockStateTrait,
BPuzzleTimeTrait: n.BPuzzleTimeTrait,
ChapterAlgoStrategyTrait: i.ChapterAlgoStrategyTrait,
ChapterCollectScoreFixedTrait: c.ChapterCollectScoreFixedTrait,
CTChapterScoreComboTrait: s.CTChapterScoreComboTrait,
CTChapterSkinBonesTrait: p.CTChapterSkinBonesTrait,
DifficultChangeColorTrait: l.DifficultChangeColorTrait,
FastTkxcHelpTravelTrait: u.FastTkxcHelpTravelTrait,
GateWinStreakStateTrait: h.GateWinStreakStateTrait,
IsIncreaseEnjoyCollectionTrait: f.IsIncreaseEnjoyCollectionTrait,
IsOpenCollectLevelOfferNormalAndGemTrait: d.IsOpenCollectLevelOfferNormalAndGemTrait,
IsOpenLevelOverTipsChangeTrait: y.IsOpenLevelOverTipsChangeTrait,
IsOPenLevelSceneEffectTrait: m.IsOPenLevelSceneEffectTrait,
IsTravelMoreDiamondAwardTrait: _.IsTravelMoreDiamondAwardTrait,
LevelExpAlgorithmTrait: v.LevelExpAlgorithmTrait,
LevelHelpStateTrait: g.LevelHelpStateTrait,
LevelLoopTrait: C.LevelLoopTrait,
LevelPiecesThreeRanTrait: b.LevelPiecesThreeRanTrait,
LevelRandomReplaceTrait: P.LevelRandomReplaceTrait,
LevelReviveCondiTrait: S.LevelReviveCondiTrait,
LevelReviveCountTrait: I.LevelReviveCountTrait,
LevelReviveTrait: T.LevelReviveTrait,
LevelWayHelpConfigTrait: E.LevelWayHelpConfigTrait,
LevelWayHelpTrait: O.LevelWayHelpTrait,
MultiElementCollectTrait: A.MultiElementCollectTrait,
PercentStreamerTrait: R.PercentStreamerTrait,
PureGemTrait: w.PureGemTrait,
RatioAdjustTrait: G.RatioAdjustTrait,
ReduceTravelSettlementTrait: x.ReduceTravelSettlementTrait,
ReviveBuffTrait: k.ReviveBuffTrait,
Travel_pass_animationTrait: B.Travel_pass_animationTrait,
TravelAlgorithmNewDirectionBTrait: M.TravelAlgorithmNewDirectionBTrait,
TravelCollectSingleColorTrait: D.TravelCollectSingleColorTrait,
TravelEasterEggTrait: j.TravelEasterEggTrait,
TravelHappyOverTrait: F.TravelHappyOverTrait,
TravelResultOptimizingTrait: L.TravelResultOptimizingTrait,
TravelResultTrait: N.TravelResultTrait,
TravelWordOptTrait: U.TravelWordOptTrait
};
window.__traitsClassMap__ || (window.__traitsClassMap__ = {});
Object.assign(window.__traitsClassMap__, r.ChapterTraitsClassMap);
cc._RF.pop();
}, {
"../../advertisement/traits/AdLevelTrait": "AdLevelTrait",
"../../algorithmStrategy/traits/FastTkxcHelpTravelTrait": "FastTkxcHelpTravelTrait",
"../../algorithmStrategy/traits/IsIncreaseEnjoyCollectionTrait": "IsIncreaseEnjoyCollectionTrait",
"../../algorithmStrategy/traits/IsOpenCollectLevelOfferNormalAndGemTrait": "IsOpenCollectLevelOfferNormalAndGemTrait",
"../../algorithmStrategy/traits/LevelExpAlgorithmTrait": "LevelExpAlgorithmTrait",
"../../algorithmStrategy/traits/LevelLoopTrait": "LevelLoopTrait",
"../../algorithmStrategy/traits/LevelRandomReplaceTrait": "LevelRandomReplaceTrait",
"../../algorithmStrategy/traits/RatioAdjustTrait": "RatioAdjustTrait",
"../../algorithmStrategy/traits/TravelAlgorithmNewDirectionBTrait": "TravelAlgorithmNewDirectionBTrait",
"../../algorithmStrategy/traits/TravelHappyOverTrait": "TravelHappyOverTrait",
"../../algorithmStrategy/traits/travelAglo/ChapterAlgoStrategyTrait": "ChapterAlgoStrategyTrait",
"../../algorithmStrategy/traits/travelAglo/LevelHelpStateTrait": "LevelHelpStateTrait",
"../../algorithmStrategy/traits/travelAglo/LevelPiecesThreeRanTrait": "LevelPiecesThreeRanTrait",
"../../algorithmStrategy/traits/travelAglo/LevelWayHelpConfigTrait": "LevelWayHelpConfigTrait",
"../../algorithmStrategy/traits/travelAglo/LevelWayHelpTrait": "LevelWayHelpTrait",
"../../blocksProducer/traits/AlloBlockStateTrait": "AlloBlockStateTrait",
"../../chapterList/tratis/BPuzzleTimeTrait": "BPuzzleTimeTrait",
"../../chapterList/tratis/IsOPenLevelSceneEffectTrait": "IsOPenLevelSceneEffectTrait",
"../../chapterList/tratis/Travel_pass_animationTrait": "Travel_pass_animationTrait",
"../../collectionProducer/traits/IsTravelMoreDiamondAwardTrait": "IsTravelMoreDiamondAwardTrait",
"../../collectionProducer/traits/MultiElementCollectTrait": "MultiElementCollectTrait",
"../../collectionProducer/traits/PureGemTrait": "PureGemTrait",
"../../collectionProducer/traits/TravelEasterEggTrait": "TravelEasterEggTrait",
"../../colorProducer/traits/TravelCollectSingleColorTrait": "TravelCollectSingleColorTrait",
"../../encourage/traits/TravelWordOptTrait": "TravelWordOptTrait",
"../../fail/traits/IsOpenLevelOverTipsChangeTrait": "IsOpenLevelOverTipsChangeTrait",
"../../game/traits/PercentStreamerTrait": "PercentStreamerTrait",
"../../gameOver/traits/GateWinStreakStateTrait": "GateWinStreakStateTrait",
"../../gameOver/traits/ReduceTravelSettlementTrait": "ReduceTravelSettlementTrait",
"../../revive/traits/LevelReviveCondiTrait": "LevelReviveCondiTrait",
"../../revive/traits/LevelReviveCountTrait": "LevelReviveCountTrait",
"../../revive/traits/LevelReviveTrait": "LevelReviveTrait",
"../../revive/traits/ReviveBuffTrait": "ReviveBuffTrait",
"../../score/traits/CTChapterScoreComboTrait": "CTChapterScoreComboTrait",
"../../score/traits/ChapterCollectScoreFixedTrait": "ChapterCollectScoreFixedTrait",
"../../skin/traits/CTChapterSkinBonesTrait": "CTChapterSkinBonesTrait",
"../../win/traits/DifficultChangeColorTrait": "DifficultChangeColorTrait",
"../../win/traits/TravelResultOptimizingTrait": "TravelResultOptimizingTrait",
"../../win/traits/TravelResultTrait": "TravelResultTrait"
} ],
ChapterWinConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f9acehU/DRKHLK76zX5jjYc", "ChapterWinConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterWinBtnPath = void 0;
r.ChapterWinBtnPath = {
next: "textures/win/btn_NextLevel",
continue: "textures/win/btn_Continue",
hard: "textures/win/trait/difficultChangeColorTrait/btn_nextHardLevel"
};
cc._RF.pop();
}, {} ],
ChapterWin_Module: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4532eddwjdHJJLwwXFKpLXz", "ChapterWin_Module");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterWin_Module = void 0;
var n = t("../../../../../scripts/falcon/Module"), i = t("./proxys/ChapterWin_Proxy"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerProxys = function() {
return [ i.ChapterWin_Proxy ];
};
return e;
}(n.Module);
r.ChapterWin_Module = c;
cc._RF.pop();
}, {
"../../../../../scripts/falcon/Module": void 0,
"./proxys/ChapterWin_Proxy": "ChapterWin_Proxy"
} ],
ChapterWin_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8e1ffV8MCBO0bTy2AzAU6T6", "ChapterWin_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterWin_Proxy = r.ChapterWinType = void 0;
var s, p = t("../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../scripts/base/ui/UI"), u = t("../../../../../../scripts/falcon/Proxy"), h = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), f = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), d = t("../../game/vo/ChapterGameInfo"), y = t("../../gameOver/vo/ChapterGameOverGameInfo"), m = t("../components/ChapterCollectWin"), _ = t("../components/ChapterScoreWin"), v = t("../config/ChapterWinConfig"), g = t("../events/E_ChapterWin_Hide"), C = t("../events/E_ChapterWin_Show");
(function(t) {
t.chapterCollectWin = "chapterCollectWin";
t.chapterScoreWin = "chapterScoreWin";
})(s = r.ChapterWinType || (r.ChapterWinType = {}));
var b = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ C.E_ChapterWin_Show, g.E_ChapterWin_Hide ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case C.E_ChapterWin_Show:
this.openUI(t);
break;

case g.E_ChapterWin_Hide:
this.hideUI(t);
}
};
e.prototype.getBtnPath = function(t) {
return d.chapterGameInfo.isThroughAll ? v.ChapterWinBtnPath.continue : t || v.ChapterWinBtnPath.next;
};
e.prototype.openUI = function() {
return i(this, void 0, void 0, function() {
var t, e;
return c(this, function(r) {
switch (r.label) {
case 0:
return d.chapterGameInfo.chapterCondition.Way !== h.ChapterType.score ? [ 3, 2 ] : [ 4, l.UI.show(y.chapterGameOverGameInfo.getChapterScoreWinConfig(), f.uiLayer) ];

case 1:
r.sent();
t = y.chapterGameOverGameInfo.scoreTotal;
e = {
score: t,
throughAll: d.chapterGameInfo.isThroughAll,
btnPath: this.getBtnPath()
};
this.chapterWinPanelShowFinished(s.chapterScoreWin, e);
return [ 3, 4 ];

case 2:
return [ 4, l.UI.show(y.chapterGameOverGameInfo.getChapterCollectWinConfig(), f.uiLayer) ];

case 3:
r.sent();
e = {
requiredCollections: d.chapterGameInfo.chapterCondition.RequiredCollections,
throughAll: d.chapterGameInfo.isThroughAll,
btnPath: this.getBtnPath(),
delayInterval: 0
};
this.chapterWinPanelShowFinished(s.chapterCollectWin, e);
r.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.hideUI = function() {
var t, e;
return i(this, void 0, void 0, function() {
return c(this, function() {
l.UI.activeState(null === (t = y.chapterGameOverGameInfo.getChapterScoreWinConfig()) || void 0 === t ? void 0 : t.url) && l.UI.hideUI(y.chapterGameOverGameInfo.getChapterScoreWinConfig());
l.UI.activeState(null === (e = y.chapterGameOverGameInfo.getChapterCollectWinConfig()) || void 0 === e ? void 0 : e.url) && l.UI.hideUI(y.chapterGameOverGameInfo.getChapterCollectWinConfig());
return [ 2 ];
});
});
};
e.prototype.chapterWinPanelShowFinished = function(t, e) {
t === s.chapterScoreWin ? Cinst(_.default).setState(e) : t === s.chapterCollectWin && Cinst(m.default).setState(e);
};
n([ p.trait("DifficultChangeColorTrait") ], e.prototype, "getBtnPath", null);
n([ p.trait("ReduceTravelSettlementTrait") ], e.prototype, "hideUI", null);
n([ p.trait("TravelResultTrait", "关卡结算优化") ], e.prototype, "chapterWinPanelShowFinished", null);
return n([ classId("ChapterWin_Proxy") ], e);
}(u.Proxy);
r.ChapterWin_Proxy = b;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../gameOver/vo/ChapterGameOverGameInfo": "ChapterGameOverGameInfo",
"../components/ChapterCollectWin": "ChapterCollectWin",
"../components/ChapterScoreWin": "ChapterScoreWin",
"../config/ChapterWinConfig": "ChapterWinConfig",
"../events/E_ChapterWin_Hide": "E_ChapterWin_Hide",
"../events/E_ChapterWin_Show": "E_ChapterWin_Show"
} ],
Chapter_ModuleList: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a8d89vdzu5OgagT2HFhr+Si", "Chapter_ModuleList");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Chapter_ModuleList = void 0;
var o = t("../../../scripts/falcon/ModuleManager"), a = t("./modules/blocksProducer/ChapterBlocksProducer_Module"), n = t("./modules/blockOutStrategy/ChapterBlockOutStrategy_Module"), i = t("./modules/difficultyStrategy/ChapterDifficultyStrategy_Module"), c = t("./modules/game/ChapterGame_Module"), s = t("./modules/score/ChapterScore_Module"), p = t("./modules/algorithmStrategy/ChapterAlgorithmStrategy_Module"), l = t("./modules/chapterList/ChapterList_Module"), u = t("./modules/topInfo/ChapterTopInfo_Module"), h = t("./modules/collectItem/ChapterCollectItem_Module"), f = t("./modules/board/ChapterBoard_Module"), d = t("./modules/collect/ChapterCollect_Module"), y = t("./modules/collectionProducer/ChapterCollectionProducer_Module"), m = t("./modules/comboScoreTip/ChapterComboScoreTip_Module"), _ = t("./modules/boardSplashAnimation/ChapterBoardSplashAnimation_Module"), v = t("./modules/colorProducer/ChapterColorProducer_Module"), g = t("./modules/fail/ChapterFail_Module"), C = t("./modules/win/ChapterWin_Module"), b = t("./modules/gameOver/ChapterGameOver_Module"), P = t("./modules/revive/ChapterRevive_Module"), S = t("./modules/goal/ChapterGoal_Module"), I = t("./modules/advertisement/ChapterAdvertisement_Module"), T = t("./modules/gameDataClear/ChapterGameDataClear_Module"), E = t("./modules/backSpace/ChapterBackSpace_Module"), O = t("./modules/defaultBoard/ChapterDefaultBoard_Module"), A = t("./modules/GBM/ChapterGBM_Module"), R = t("./modules/kSpeed/ChapterKSpeed_Module"), w = t("./modules/eliminate/ChapterEliminate_Module"), G = t("./modules/timer/ChapterTimer_Module"), x = t("./modules/dataStatistics/ChapterDataStatistics_Module"), k = t("./modules/skin/ChapterSkin_Module"), B = t("./modules/encourage/ChapterEncourage_Module"), M = t("./modules/audio/ChapterAudio_Module"), D = t("./modules/combo/ChapterCombo_Module"), j = function() {
function t() {}
t.start = function() {
o.ModuleManager.resigerModule([ k.ChapterSkin_Module, c.ChapterGame_Module, T.ChapterGameDataClear_Module, s.ChapterScore_Module, a.ChapterBlocksProducer_Module, D.ChapterCombo_Module, f.ChapterBoard_Module, m.ChapterComboScoreTip_Module, _.ChapterBoardSplashAnimation_Module, p.ChapterAlgorithmStrategy_Module, n.ChapterBlockOutStrategy_Module, i.ChapterDifficultyStrategy_Module, l.ChapterList_Module, u.ChapterTopInfo_Module, h.ChapterCollectItem_Module, d.ChapterCollect_Module, y.ChapterCollectionProducer_Module, v.ChapterColorProducer_Module, g.ChapterFail_Module, C.ChapterWin_Module, b.ChapterGameOver_Module, S.ChapterGoal_Module, P.ChapterRevive_Module, I.ChapterAdvertisement_Module, E.ChapterBackSpace_Module, O.ChapterDefaultBoard_Module, w.ChapterEliminate_Module, A.ChapterGBM_Module, R.ChapterKSpeed_Module, G.ChapterTimer_Module, x.ChapterDataStatistics_Module, B.ChapterEncourage_Module, M.ChapterAudio_Module ]);
o.ModuleManager.startModule(o.ModuleType.Chapter);
};
return t;
}();
r.Chapter_ModuleList = j;
cc._RF.pop();
}, {
"../../../scripts/falcon/ModuleManager": void 0,
"./modules/GBM/ChapterGBM_Module": "ChapterGBM_Module",
"./modules/advertisement/ChapterAdvertisement_Module": "ChapterAdvertisement_Module",
"./modules/algorithmStrategy/ChapterAlgorithmStrategy_Module": "ChapterAlgorithmStrategy_Module",
"./modules/audio/ChapterAudio_Module": "ChapterAudio_Module",
"./modules/backSpace/ChapterBackSpace_Module": "ChapterBackSpace_Module",
"./modules/blockOutStrategy/ChapterBlockOutStrategy_Module": "ChapterBlockOutStrategy_Module",
"./modules/blocksProducer/ChapterBlocksProducer_Module": "ChapterBlocksProducer_Module",
"./modules/board/ChapterBoard_Module": "ChapterBoard_Module",
"./modules/boardSplashAnimation/ChapterBoardSplashAnimation_Module": "ChapterBoardSplashAnimation_Module",
"./modules/chapterList/ChapterList_Module": "ChapterList_Module",
"./modules/collect/ChapterCollect_Module": "ChapterCollect_Module",
"./modules/collectItem/ChapterCollectItem_Module": "ChapterCollectItem_Module",
"./modules/collectionProducer/ChapterCollectionProducer_Module": "ChapterCollectionProducer_Module",
"./modules/colorProducer/ChapterColorProducer_Module": "ChapterColorProducer_Module",
"./modules/combo/ChapterCombo_Module": "ChapterCombo_Module",
"./modules/comboScoreTip/ChapterComboScoreTip_Module": "ChapterComboScoreTip_Module",
"./modules/dataStatistics/ChapterDataStatistics_Module": "ChapterDataStatistics_Module",
"./modules/defaultBoard/ChapterDefaultBoard_Module": "ChapterDefaultBoard_Module",
"./modules/difficultyStrategy/ChapterDifficultyStrategy_Module": "ChapterDifficultyStrategy_Module",
"./modules/eliminate/ChapterEliminate_Module": "ChapterEliminate_Module",
"./modules/encourage/ChapterEncourage_Module": "ChapterEncourage_Module",
"./modules/fail/ChapterFail_Module": "ChapterFail_Module",
"./modules/game/ChapterGame_Module": "ChapterGame_Module",
"./modules/gameDataClear/ChapterGameDataClear_Module": "ChapterGameDataClear_Module",
"./modules/gameOver/ChapterGameOver_Module": "ChapterGameOver_Module",
"./modules/goal/ChapterGoal_Module": "ChapterGoal_Module",
"./modules/kSpeed/ChapterKSpeed_Module": "ChapterKSpeed_Module",
"./modules/revive/ChapterRevive_Module": "ChapterRevive_Module",
"./modules/score/ChapterScore_Module": "ChapterScore_Module",
"./modules/skin/ChapterSkin_Module": "ChapterSkin_Module",
"./modules/timer/ChapterTimer_Module": "ChapterTimer_Module",
"./modules/topInfo/ChapterTopInfo_Module": "ChapterTopInfo_Module",
"./modules/win/ChapterWin_Module": "ChapterWin_Module"
} ],
CollectUpdateInterface: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "36092A00YFJ7YfiuwejzZWk", "CollectUpdateInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
CollectUpdateType: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "097d4zMFSdNCYY7MU0tfA2c", "CollectUpdateType");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CollectUpdateType = void 0;
(function(t) {
t.Add = "Add";
t.Reset = "Reset";
})(r.CollectUpdateType || (r.CollectUpdateType = {}));
cc._RF.pop();
}, {} ],
DifficultChangeColorTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6673cqQ9J1J9Jd3NkGVTxr8", "DifficultChangeColorTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DifficultChangeColorTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), p = t("../../game/vo/ChapterGameInfo"), l = t("../config/ChapterWinConfig"), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isChapterWin_ProxyGetBtnPath(t)) {
var e = s.chapterDifficultyInfo.chapterDifficultyList.get(p.chapterGameInfo.chapterNum);
s.chapterDifficultyInfo.isChapterDifficulty(e) && (t.args[0] = l.ChapterWinBtnPath.hard);
}
};
return n([ classId("DifficultChangeColorTrait") ], e);
}(i.Trait);
r.DifficultChangeColorTrait = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../config/ChapterWinConfig": "ChapterWinConfig"
} ],
E_ChapterAdvertisement_Show: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b3a95D9wPxI4KjfaY3xSzZL", "E_ChapterAdvertisement_Show");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAdvertisement_Show = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAdvertisement_Show = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterAlgorithmStrategy_BlocksPos: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "59e46r8T0NA27H4imG5D45h", "E_ChapterAlgorithmStrategy_BlocksPos");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAlgorithmBlocksPos_Exe = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAlgorithmBlocksPos_Exe = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterAlgorithmStrategy_Deal: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "48525UzIpZBk42ssKNgnV9D", "E_ChapterAlgorithmStrategy_Deal");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAlgorithmStrategy_Deal = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAlgorithmStrategy_Deal = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterAlgorithmStrategy_Replace: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "afed2cUssFM8aWCQP2E9VR4", "E_ChapterAlgorithmStrategy_Replace");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAlgorithmStrategy_Replace = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAlgorithmStrategy_Replace = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterAlgorithmStrategy_Reset: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a9e15cclNFMTqbOANW2/oBQ", "E_ChapterAlgorithmStrategy_Reset");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAlgorithmStrategy_Reset = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAlgorithmStrategy_Reset = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterAlgorithmStrategy_RunState: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2186c1VNJFPfrG7dPY5ha57", "E_ChapterAlgorithmStrategy_RunState");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAlgorithmStrategy_RunState = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAlgorithmStrategy_RunState = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterAlgorithmStrategy_Run: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e251bEhxQhKkJ9G658NbBjR", "E_ChapterAlgorithmStrategy_Run");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterAlgorithmStrategy_Run = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterAlgorithmStrategy_Run = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterBlockOutStrategy_Exe: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6725fCCu51IK5rPDEYRqFzC", "E_ChapterBlockOutStrategy_Exe");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterBlockOutStrategy_Exe = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterBlockOutStrategy_Exe = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterBoard_CanPutValidateStart: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "20f2bUH/tVL1qKezSkDz1Xb", "E_ChapterBoard_CanPutValidateStart");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterBoard_CanPutValidateStart = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterBoard_CanPutValidateStart = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterBoard_Render: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2b541C7/ixN9qaDB0Bk80IX", "E_ChapterBoard_Render");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterBoard_Render = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.boards = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterBoard_Render = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterCollect_Reset: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "30516NG9wVGaKZwIZqjL/Mq", "E_ChapterCollect_Reset");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterCollect_Reset = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterCollect_Reset = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterCollect_Update: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "24a17iqIxxGn5D+XhElWhEQ", "E_ChapterCollect_Update");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterCollect_Update = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterCollect_Update = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterCollectionProducer_Exe: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "21af93oPXdIOaPHS6aDQbHv", "E_ChapterCollectionProducer_Exe");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterCollectionProducer_Exe = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterCollectionProducer_Exe = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterColorProducer_Exe: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8ea56gq3odI37QEhrvIAlQZ", "E_ChapterColorProducer_Exe");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterColorProducer_Exe = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterColorProducer_Exe = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterDataStatistics_Clear: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "17c20tQsH5NuL7KF6LDS0qQ", "E_ChapterDataStatistics_Clear");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterDataStatistics_Clear = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterDataStatistics_Clear = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterDataStatistics_Count: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7c30fwH2kNPLq8y1fvn+gKb", "E_ChapterDataStatistics_Count");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterDataStatistics_Count = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterDataStatistics_Count = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterDefaultBoard_ReadyComplete: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "82ccevp/5VE/5eJGMOviLpW", "E_ChapterDefaultBoard_ReadyComplete");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterDefaultBoard_ReadyComplete = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterDefaultBoard_ReadyComplete = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterDifficultyStrategy_Event: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d5e54umGApNP6EWf62uhIcE", "E_ChapterDifficultyStrategy_Event");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterDifficultyStrategy_Event = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterDifficultyStrategy_Event = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterFail_Hide: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a48bdnRL0tFdaUySlwLHJyC", "E_ChapterFail_Hide");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterFail_Hide = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterFail_Hide = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterFail_Show: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c91d4bpkK9BdZtQ2ipvlI9E", "E_ChapterFail_Show");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterFail_Show = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterFail_Show = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterGameDataClear_Disk: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8bcbdy/gctAg7Y9aTIKWn3l", "E_ChapterGameDataClear_Disk");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterGameDataClear_Disk = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterGameDataClear_Disk = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterGameDataClear_Memory: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7b7462tE4dDk4NuolXLxJq4", "E_ChapterGameDataClear_Memory");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterGameDataClear_Memory = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterGameDataClear_Memory = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterGameOver_ShowFinish: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7f2a9RsyVpAj73mClwO0e+A", "E_ChapterGameOver_ShowFinish");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterGameOver_ShowFinish = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterGameOver_ShowFinish = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterGame_GameReplayDataCleared: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fcc23XY9D5NoaiIgOdmkXzH", "E_ChapterGame_GameReplayDataCleared");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterGame_GameReplayDataCleared = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterGame_GameReplayDataCleared = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterGame_GameReplayReady: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "19075LMv/FOpLFYqR5Iv8Zh", "E_ChapterGame_GameReplayReady");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterGame_GameReplayReady = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterGame_GameReplayReady = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterGoal_playOver: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "07915taq4pBa44rsgWJ5xPW", "E_ChapterGoal_playOver");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterGoal_playOver = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.chapterType = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterGoal_playOver = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterList_Select: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "64a27DdP+BLno3rqGWRahzo", "E_ChapterList_Select");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterList_Select = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.chapterNum = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterList_Select = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterList_Show: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "dfbbf/5AsNEqLUz8JD21hcl", "E_ChapterList_Show");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterList_Show = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.data = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterList_Show = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterRevive_Check: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "61a90wPGZhIap5pfSEdJ2RG", "E_ChapterRevive_Check");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterRevive_Check = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterRevive_Check = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterScore_Reset: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8ca8azyjR1DqIOyr/o8TCxB", "E_ChapterScore_Reset");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterScore_Reset = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterScore_Reset = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterScore_Update: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b8f100SLbhLtL0G7aHCwzas", "E_ChapterScore_Update");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterScore_Update = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterScore_Update = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterSkin_GameBackBtn: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f2385zvsXNGLYRnd+sLzc1m", "E_ChapterSkin_GameBackBtn");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterSkin_GameBackBtn = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.cfg = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterSkin_GameBackBtn = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterSkin_GameBg: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "41118yJNMhF6KJkXQ6hgZwm", "E_ChapterSkin_GameBg");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterSkin_GameBg = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.cfg = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterSkin_GameBg = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterSkin_SetupBtn: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2c5e6dZm69IqYJg3ebeite9", "E_ChapterSkin_SetupBtn");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterSkin_SetupBtn = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.cfg = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterSkin_SetupBtn = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterTimer_updateSpendTime: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0acacm1LP5Ebo0+SwBzH3dO", "E_ChapterTimer_updateSpendTime");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterTimer_updateSpendTime = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterTimer_updateSpendTime = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterTopInfo_CollectEffectAnimComplete: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7ddb5vwiNVLWoVtjPrvtjwJ", "E_ChapterTopInfo_CollectEffectAnimComplete");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterTopInfo_CollectEffectAnimComplete = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.isGameOver = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterTopInfo_CollectEffectAnimComplete = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterWin_Hide: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bbe82JA26JM06ad896l8ibP", "E_ChapterWin_Hide");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterWin_Hide = void 0;
var n = function(t) {
a(e, t);
function e(e) {
var r = t.call(this) || this;
r.option = e;
return r;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterWin_Hide = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
E_ChapterWin_Show: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "58b31on1eJECrMDDnlKHDDt", "E_ChapterWin_Show");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.E_ChapterWin_Show = void 0;
var n = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(t("../../../../../../scripts/falcon/ModuleEvent").ModuleEvent);
r.E_ChapterWin_Show = n;
cc._RF.pop();
}, {
"../../../../../../scripts/falcon/ModuleEvent": void 0
} ],
Eliminate_ChapterSound_Proxy: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "09217jZ1KdHNrMNSxr8HOeZ", "Eliminate_ChapterSound_Proxy");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Eliminate_ChapterSound_Proxy = void 0;
var i = t("../../../../../../scripts/base/audio/AudioInfo"), c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/falcon/Proxy"), p = t("../../../../../../scripts/modules/audio/config/AudioConfig"), l = t("../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd"), u = t("../../../../../../scripts/modules/eliminate/vo/EliminateGameInfo"), h = t("../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../scripts/modules/game/vo/GameInfo"), d = t("../../combo/vo/ChapterComboInfo"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerEvents = function() {
return [ l.E_BlocksProducer_TouchEnd ];
};
e.prototype.receivedEvents = function(t) {
switch (t.getClass()) {
case l.E_BlocksProducer_TouchEnd:
this.onBlockProducerTouchEnd(t);
}
};
e.prototype.onBlockProducerTouchEnd = function(t) {
f.gameInfo.gameMode == h.GameMode.Chapter && this.playEliminateSound(t);
};
e.prototype.playEliminateSound = function(t) {
var e = t.state, r = e.canEliminate, o = e.continuousEliminateTimes, a = u.eliminateGameInfo.eliminateMusicIndex, n = u.eliminateGameInfo.noEliminateNum;
if (r) {
++a >= 7 && (a = 6);
(4 === a && n > 3 || 5 === a && n >= 2 || 6 === a && n >= 1) && (a = 1);
n = 0;
var c = a;
d.chapterComboInfo.comboState && (c = this.updateComboSoundIndex(o));
i.audioInfo.play(p.AudioConfig["e_score_streak_" + c]);
u.eliminateGameInfo._noEliminateNum = n;
u.eliminateGameInfo._eliminateMusicIndex = a;
} else {
n++;
u.eliminateGameInfo._noEliminateNum = n;
i.audioInfo.play(p.AudioConfig.s_put);
}
};
e.prototype.updateComboSoundIndex = function(t) {
return t > 10 ? 10 : t;
};
n([ c.trait("IsOpenVibrateTrait", "消除时震动反馈") ], e.prototype, "playEliminateSound", null);
return n([ classId("Eliminate_ChapterSound_Proxy") ], e);
}(s.Proxy);
r.Eliminate_ChapterSound_Proxy = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/falcon/Proxy": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_TouchEnd": void 0,
"../../../../../../scripts/modules/eliminate/vo/EliminateGameInfo": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../combo/vo/ChapterComboInfo": "ChapterComboInfo"
} ],
FastTkxcHelpTravelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "eed5a1PoF9Mcb7RRLf2cvex", "FastTkxcHelpTravelTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FastTkxcHelpTravelTrait = void 0;
var i = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function() {};
return n([ classId("FastTkxcHelpTravelTrait") ], e);
}(t("../../../../../../scripts/base/trait/Trait").Trait);
r.FastTkxcHelpTravelTrait = i;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0
} ],
GateWinStreakStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2b64dzMkSlMVovSXoyo3FjV", "GateWinStreakStateTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, s = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GateWinStreakStateTrait = void 0;
var p = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../../prefab/ChapterPrefabConfig"), h = t("../components/trait/gateWinStreakState/GateWinStreakState"), f = t("../../../../../../scripts/base/storage/Storage"), d = t("../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), y = t("../../../../../../scripts/base/cache/CacheRender"), m = t("../../../../../../scripts/modules/gameOver/type/GameOverType"), _ = t("../../../../../../scripts/base/decorators/DecoratorTrait"), v = function(t) {
a(e, t);
function e() {
var e = t.call(this) || this;
e._lastWinStreakCount = 0;
e._curNode = null;
e._uiStates = new Map();
e._initUIStates();
return e;
}
e.prototype._initUIStates = function() {
var t = this;
this._uiStates.set("scoreFail", {
isChanged: !1,
adjustUI: function(e) {
return t._adjustChildrenPosition(e, -100);
}
});
this._uiStates.set("collectFail", {
isChanged: !1,
adjustUI: function(e) {
return t._adjustChildrenPosition(e, -100);
}
});
this._uiStates.set("scoreWin", {
isChanged: !1,
adjustUI: function(e) {
return t._adjustChildrenPosition(e, -100);
}
});
this._uiStates.set("collectWin", {
isChanged: !1,
adjustUI: function(e) {
return t._adjustChildrenPosition(e, -100);
}
});
};
e.prototype._adjustChildrenPosition = function(t, e) {
var r, o;
try {
for (var a = s(t.node.children), n = a.next(); !n.done; n = a.next()) {
var i = n.value;
"backBtn" !== i.name && "bg" !== i.name && "bg1" !== i.name && (i.y += e);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
n && !n.done && (o = a.return) && o.call(a);
} finally {
if (r) throw r.error;
}
}
};
e.prototype._showWinStreakAnimation = function(t, e, r) {
void 0 === r && (r = !1);
return i(this, void 0, Promise, function() {
var o, a, n;
return c(this, function(i) {
switch (i.label) {
case 0:
return [ 4, y.cacheRender.createOrUpdateCacheListComponents({
tag: "GateWinStreakStateTrait",
prefabUrl: u.ChapterPrefabConfig.Winstreak.url,
bundleName: "chapter",
count: 1,
typeOrClassName: h.default,
parent: t.node
}) ];

case 1:
o = i.sent();
a = o[0];
r ? a.setDynamic(e) : a.scrollToZero(e);
n = cc.v2(0, cc.winSize.height / 2 - a.node.height / 2 - 25);
a.node.setPosition(n);
this._curNode = a.node;
return [ 2 ];
}
});
});
};
e.prototype._handleUIChange = function(t, e) {
var r = this._uiStates.get(t);
if (r && !r.isChanged) {
r.isChanged = !0;
r.adjustUI(e);
}
};
e.prototype._handleResetBtnState = function() {
this._curNode && (this._curNode.active = !1);
};
e.prototype._updateWinStreakCount = function() {
var t = f.storage.getItem("winStreakCount", 0);
this._lastWinStreakCount = t;
f.storage.setItem("winStreakCount", d.gameOverGameInfo.isChapterWin ? t + 1 : 0);
};
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e;
return c(this, function(r) {
switch (r.label) {
case 0:
l.tp.isChapterScoreFailChangeUI(t) && this._handleUIChange("scoreFail", t.target);
l.tp.isChapterCollectFailChangeUI(t) && this._handleUIChange("collectFail", t.target);
l.tp.isChapterScoreWinChangeUI(t) && this._handleUIChange("scoreWin", t.target);
l.tp.isChapterCollectWinChangeUI(t) && this._handleUIChange("collectWin", t.target);
return l.tp.isChapterScoreFailShowOtherTraitAnim(t) && this._lastWinStreakCount > 0 ? [ 4, this._showWinStreakAnimation(t.target, this._lastWinStreakCount) ] : [ 3, 2 ];

case 1:
r.sent();
r.label = 2;

case 2:
return l.tp.isChapterCollectFailShowOtherTraitAnim(t) && this._lastWinStreakCount > 0 ? [ 4, this._showWinStreakAnimation(t.target, this._lastWinStreakCount) ] : [ 3, 4 ];

case 3:
r.sent();
r.label = 4;

case 4:
if (!l.tp.isChapterScoreWinShowOtherTraitAnim(t)) return [ 3, 6 ];
e = f.storage.getItem("winStreakCount", 0);
return [ 4, this._showWinStreakAnimation(t.target, e, !0) ];

case 5:
r.sent();
r.label = 6;

case 6:
if (!l.tp.isChapterCollectWinShowOtherTraitAnim(t)) return [ 3, 8 ];
e = f.storage.getItem("winStreakCount", 0);
return [ 4, this._showWinStreakAnimation(t.target, e, !0) ];

case 7:
r.sent();
r.label = 8;

case 8:
(l.tp.isChapterScoreFailResetBtnState(t) || l.tp.isChapterScoreWinResetBtnState(t) || l.tp.isChapterCollectFailResetBtnState(t) || l.tp.isChapterCollectWinResetBtnState(t)) && this._handleResetBtnState();
l.tp.isChapterGameDataClear_Disk_ProxyDisposeReviveData(t) && t.target.type == m.GameOverDiskType.Over && this._updateWinStreakCount();
return [ 2 ];
}
});
});
};
n([ _.trait("TravelResultOptimizingTrait", "旅行模式结算优化, 同步选关界面") ], e.prototype, "_adjustChildrenPosition", null);
return n([ classId("GateWinStreakStateTrait") ], e);
}(p.Trait);
r.GateWinStreakStateTrait = v;
cc._RF.pop();
}, {
"../../../../../../scripts/base/cache/CacheRender": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../components/trait/gateWinStreakState/GateWinStreakState": "GateWinStreakState"
} ],
GateWinStreakState: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "79d77fY10pGLK5e/RbJJJpm", "GateWinStreakState");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../../../scripts/base/components/Component"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeAni = null;
e.winCountLabel = null;
e.winCount = -1;
return e;
}
e.prototype.render = function() {};
e.prototype.updateUI = function() {
this.winCountLabel.string = "" + this.winCount;
};
e.prototype.scrollToZero = function(t) {
var e = this;
this.nodeAni.getComponent(dragonBones.ArmatureDisplay).playAnimation("in", 1);
this.winCount = t;
this.updateUI();
this.scheduleOnce(function() {
var t = {
targetNum: e.winCount
};
cc.tween(t).to(.5, {
targetNum: 0
}, {
progress: function(t, r, o, a) {
cc.isValid(e.winCountLabel) && (e.winCountLabel.string = "" + Math.floor(t + (r - t) * a));
}
}).start();
}, .5);
};
e.prototype.setDynamic = function(t) {
var e = this;
this.nodeAni.active = !0;
this.winCount = t - 1;
this.updateUI();
var r = this.nodeAni.getComponent(dragonBones.ArmatureDisplay);
r.playAnimation("in", 1);
r.timeScale = 1;
this.scheduleOnce(function() {
e.winCount = t;
e.updateUI();
if (e.winCountLabel && cc.isValid(e.winCountLabel)) {
var r = cc.sequence(cc.scaleTo(.25, 1.4, 1.4), cc.scaleTo(.25, 1, 1));
e.winCountLabel.node.runAction(r);
}
}, .5);
};
n([ p(cc.Node) ], e.prototype, "nodeAni", void 0);
n([ p(cc.Label) ], e.prototype, "winCountLabel", void 0);
return n([ s ], e);
}(i.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/components/Component": void 0
} ],
IsIncreaseEnjoyCollectionTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3ec99q3S/xPq4u2NZUvEUon", "IsIncreaseEnjoyCollectionTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsIncreaseEnjoyCollectionTrait = void 0;
var c = t("../../../../../../scripts/base/enum/enum"), s = t("../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../scripts/modules/board/vo/BoardInfo"), h = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = t("../../collect/vo/ChapterCollectInfo"), d = t("../../game/vo/ChapterGameInfo"), y = t("../../../../../../scripts/base/storage/Storage"), m = t("../../algorithm/vo/ChapterAlgorithmInfo"), _ = t("../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig"), v = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), g = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), C = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), b = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), P = t("../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), S = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), I = t("../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), T = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {};
};
e.prototype.onActive = function(t) {
var e, r;
if (h.tp.isChapterAlgorithmProcessInfoBottomOffer(t)) {
if ((C.algorithmName.algoActualName || [])[0].includes(I.ALGO_NAME_TYPE.NAME_REVIVE)) return;
if ("TravelHappyOverTrait" == l.algorithmStrategyInfo.algorithmSourceLevel2) return;
var o = l.algorithmStrategyInfo.algorithmList[l.algorithmStrategyInfo.algorithmList.length - 1];
if (C.algorithmName.algoActualId == p.OFFER_TYPE.KUN_NAN_TI || C.algorithmName.algoActualId == p.OFFER_TYPE.ALGO_FILL_MORE_AREA || S.algorithmInfo.algoSource == p.algorithmSource.FAIL && c.isValueInEnum(o, p.OFFER_TYPE_DIFFICULTY)) return;
if (0 == b.chapterConfigInfo.chapterDatasCfg[d.chapterGameInfo.chapterNum].Condition.Way) return;
if ([ p.OFFER_TYPE.KUN_NAN_TI ].includes(C.algorithmName.algoActualId)) return;
if (-1 == this.findPileUpPos()) return;
if (l.algorithmStrategyInfo.algorithmList.includes(p.OFFER_TYPE.ELIMINTE_PLEASURE)) return;
l.algorithmStrategyInfo.setAlgorithmSourceLevel1(g.ChapterAlgorithmSourceType.TravelTrait);
C.algorithmName.forceSetAlgoExpectedId(p.OFFER_TYPE.ELIMINTE_PLEASURE);
t.args[0] = [ p.OFFER_TYPE.ELIMINTE_PLEASURE ];
t.returnState = !0;
}
h.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyIsModifyPos(t) && C.algorithmName.algoActualId == p.OFFER_TYPE.ELIMINTE_PLEASURE && (t.returnValue = !1);
if (h.tp.isChapterCollectionProducer_ProxyProduceCollection(t) && C.algorithmName.algoActualId == p.OFFER_TYPE.ELIMINTE_PLEASURE) {
var a = 0, n = 0, s = b.chapterConfigInfo.chapterDatasCfg[d.chapterGameInfo.chapterNum].Condition.RequiredCollections, u = f.chapterCollectInfo.collectRemainCollectItems;
try {
for (var v = i(s), T = v.next(); !T.done; T = v.next()) {
var E = T.value, O = u[E.Key];
if (0 != O) {
if (n < O) {
a = E.Key;
n = O;
}
0;
} else 0;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
T && !T.done && (r = v.return) && r.call(v);
} finally {
if (e) throw e.error;
}
}
if (a < 100) return;
for (var A = [], R = !1, w = 0; w < m.chapterAlgorithmInfo.blockIdList.length; w++) {
var G = m.chapterAlgorithmInfo.blockIdList[w];
if (C.algorithmName.algoActualName[w] == P.OFFER_TYPE_STRINGS[p.OFFER_TYPE.ELIMINTE_PLEASURE]) {
for (var x = _.AlgorithmPosType[G], k = {}, B = 0; B < x.length; B++) k[B] = {
Key: a,
pos: B
};
R = !0;
A.push(k);
} else A.push({});
}
if (R) {
var M = [].concat(A);
y.storage.setItem("chapterCollectionLists", M);
t.returnState = !0;
t.replace = !0;
var D = TRAIT("IsOpenCollectLevelOfferNormalAndGemTrait");
(null == D ? void 0 : D.active) && D.recordIncreaseEnjoyCollection();
}
}
};
e.prototype.canCollect = function(t) {
return t > 100 && t < 1e3;
};
e.prototype.findPileUpPos = function() {
for (var t = u.boardInfo.faceBlocks, e = [ 0, 0, 0, 0, 0, 0, 0, 0 ], r = [ 0, 0, 0, 0, 0, 0, 0, 0 ], o = {}, a = 0; a < 8; a++) {
for (var n = -1, i = 0; i < 8; i++) if (t[a][i] < 0) {
if (-1 != n) {
n = -1;
break;
}
n = i;
} else this.canCollect(t[a][i]) && e[a]++;
-1 != n && e[a] >= 3 && (o[l = 8 * a + n] ? o[l] += e[a] : o[l] = e[a]);
}
for (i = 0; i < 8; i++) {
var c = -1;
for (a = 0; a < 8; a++) if (t[a][i] < 0) {
if (-1 != c) {
c = -1;
break;
}
c = a;
} else this.canCollect(t[a][i]) && r[i]++;
-1 != c && r[i] >= 3 && (o[l = 8 * c + i] ? o[l] += r[i] : o[l] = r[i]);
}
var s = -Infinity, p = -1;
for (var l in o) if (o[l] > s) {
s = o[l];
p = parseInt(l, 10);
} else o[l] == s && Math.random() > .5 && (p = parseInt(l, 10));
return p;
};
n([ v.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("IsIncreaseEnjoyCollectionTrait") ], e);
}(s.Trait);
r.IsIncreaseEnjoyCollectionTrait = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
IsOPenLevelSceneEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2fc64wRtO5EFJX4nh6fPEGi", "IsOPenLevelSceneEffectTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, a, n = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (a) throw a.error;
}
}
return i;
}, p = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
return t;
}, l = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOPenLevelSceneEffectTrait = void 0;
var u = t("../../../../../../scripts/base/audio/AudioInfo"), h = t("../../../../../../scripts/base/loader/ResLoader"), f = t("../../../../../../scripts/base/storage/Storage"), d = t("../../../../../../scripts/base/trait/Trait"), y = t("../../../../../../scripts/modules/audio/config/AudioConfig"), m = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), _ = t("../../game/vo/ChapterGameInfo"), v = t("../../prefab/ChapterPrefabConfig"), g = t("../components/ChapterContent"), C = t("../components/ChapterItem"), b = t("../components/traits/RepeatPreviewComponent"), P = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), S = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.magnifierComp = null;
return e;
}
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i, s;
return c(this, function() {
if (m.tp.isChapterListGetChapterContentState(t)) {
e = f.storage.getItem("lastChapterNum");
r = f.storage.getItem("chapterPeriodsIndex", 1);
if (f.storage.getItem("IsOPenLevelSceneEffectTrait", {
stage: 0
}).stage !== r && 0 === e) {
f.storage.setItem("IsOPenLevelSceneEffectTrait", {
stage: r
});
t.args[0].isPreviewAllThrough = !0;
return [ 2 ];
}
t.args[0].isPreviewAllThrough = !1;
}
if (m.tp.isChapterListGetTopContainer(t)) {
o = t.args[0];
cc.isValid(o) && this.showMagnifier(o, !_.chapterGameInfo.isThroughAll);
}
m.tp.isChapterListOnClickStartGame(t) && cc.isValid(this.magnifierComp) && this.magnifierComp.setState({
isVisible: !1
});
if (m.tp.isChapterContentPreviewAllThrough(t)) {
o = t.args[0];
a = t.args[1];
n = t.args[2];
i = t.args[3];
s = this.groupByY(n.map(function(t) {
return t.node;
}));
this.previewAllThrough(o, a, n, s, i);
}
return [ 2 ];
});
});
};
e.prototype.showMagnifier = function(t, e) {
var r = this;
this.magnifierComp ? this.magnifierComp.setState({
isVisible: e,
aniName: "FangDaJing_in"
}) : h.ResLoader.loadByBundle("chapter", v.ChapterPrefabConfig.repeatPreview.url, cc.Prefab, function(o, a) {
if (!o && cc.isValid(t)) {
var n = cc.instantiate(a);
n.parent = t;
n.x = t.width / 2 - n.width / 5 * 4;
n.y = -t.height / 2 - 60;
var i = n.getComponent(b.default);
n.name = "RepeatPreviewComponent";
n.on("click", r.onClickMagnifierEvent, r);
i.setState({
isVisible: e
});
r.magnifierComp = i;
}
});
};
e.prototype.onClickMagnifierEvent = function() {
if (cc.isValid(this.magnifierComp)) {
this.magnifierComp.setState({
aniName: "FangDaJing_dianji"
});
var t = Cinst(g.default);
t && t.setState({
isPreviewAllThrough: !0
});
this.onDot();
}
};
e.prototype.groupByY = function(t, e) {
var r, o;
void 0 === e && (e = 5);
var a = p(t).sort(function(t, e) {
return t.y - e.y;
}), n = [], i = [];
try {
for (var c = l(a), s = c.next(); !s.done; s = c.next()) {
var u = s.value;
if (0 === i.length || cc.isValid(u) && Math.abs(u.y - i[0].y) <= e) i.push(u); else {
n.push(i);
i = [ u ];
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
s && !s.done && (o = c.return) && o.call(c);
} finally {
if (r) throw r.error;
}
}
i.length > 0 && n.push(i);
return n;
};
e.prototype.onDot = function() {
var t = f.storage.getItem("chapterPeriodsIndex", 1);
DS("usr_data_adventure_magnifying_glass_click", {
TravelId: t.toString()
});
};
e.prototype.previewAllThrough = function(t, e, r, o, a) {
void 0 === r && (r = []);
void 0 === o && (o = []);
if (0 !== o.length && 0 !== r.length) {
u.audioInfo.play(y.AudioConfig.s_restart);
cc.Tween.stopAllByTarget(t);
for (var n = 0; n < o.length; n++) for (var i = o[n], c = function(r) {
cc.Tween.stopAllByTarget(i[r]);
if (cc.isValid(i[r])) {
var o = i[r].getComponent(C.default);
cc.tween(t).delay(.03 * n).call(function() {
var t = e.find(function(t) {
return t.level === o.state.levelNum;
});
if (t) {
cc.Tween.stopAllByTarget(t.node);
null == t || t.setState({
opacity: 0
});
}
a.curChapter < o.state.levelNum ? o.setState({
isThrough: !1,
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !0,
fromOpacity: 0,
toOpacity: 255
}) : o.setState({
isThrough: !1,
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
}).start();
}
}, s = 0; s < i.length; s++) c(s);
var p = .03 * o.length, l = this.getSortedAnimationList(r);
cc.tween(t).delay(p).call(function() {
for (var e = function(e) {
for (var r = l[e], o = function(o) {
cc.tween(t).delay(.03 * (e + 1)).call(function() {
r[o].setState({
isThrough: !0,
isShowAnimation: !1,
throughRatio: .2,
isOpacityAni: !1
});
}).start();
}, a = 0; a < r.length; a++) o(a);
}, r = 0; r < l.length; r++) e(r);
}).start();
var h = p + .03 * l.length + .4 * .2;
cc.tween(t).delay(h).call(function() {
for (var r = function(r, n) {
for (var i = o[r], c = function(r) {
cc.tween(t).delay(.03 * n).call(function() {
var o = i[r].getComponent(C.default), n = e.find(function(t) {
return t.level === o.state.levelNum;
});
if (a.curChapter < o.state.levelNum) {
o.setState({
isThrough: !1,
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !0,
fromOpacity: 255,
toOpacity: 0
});
P.chapterConfigInfo.isStageShowFromBottom && n && cc.tween(t).delay(.2).call(function() {
cc.isValid(n) && n.setState({
opacity: 255
});
}).start();
} else {
o.setState({
isThrough: !1,
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
null == n || n.setState({
opacity: 0
});
}
}).start();
}, s = 0; s < i.length; s++) c(s);
}, n = o.length - 1, i = 0; n >= 0; n--, i++) r(n, i);
}).start();
}
};
e.prototype.getSortedAnimationList = function(t) {
for (var e = {}, r = 0; r < t.length; r++) {
var o = t[r];
if (o) {
var a = o.node.position.x, n = o.node.position.y, i = parseInt("" + .0125 * (n - 330 + a));
e["" + i] ? e["" + i].push(o) : e["" + i] = [ o ];
}
}
var c = Object.keys(e).sort(function(t, e) {
return parseInt(t) - parseInt(e);
}), s = [];
c.forEach(function(t) {
s.push(e[t]);
});
return s;
};
return n([ classId("IsOPenLevelSceneEffectTrait") ], e);
}(d.Trait);
r.IsOPenLevelSceneEffectTrait = S;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../components/ChapterContent": "ChapterContent",
"../components/ChapterItem": "ChapterItem",
"../components/traits/RepeatPreviewComponent": "RepeatPreviewComponent"
} ],
IsOpenCollectLevelOfferNormalAndGemTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e113898WUNMOqc204EWslz/", "IsOpenCollectLevelOfferNormalAndGemTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, a, n = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (a) throw a.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenCollectLevelOfferNormalAndGemTrait = void 0;
var c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig"), p = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../../algorithm/vo/ChapterAlgorithmInfo"), h = t("../../collect/vo/ChapterCollectInfo"), f = t("../../game/vo/ChapterGameInfo"), d = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
pure_collection_block_probability: .6,
isCanChange: !1,
needChangeIndex: -1,
has_increase_enjoy_collection: !1,
has_travel_happy_over: !1
};
};
e.prototype.onActive = function(t) {
if (l.tp.isChapterCollectionProducer_ProxyChangeCollection(t)) {
this.isCanChangeColor();
this.tryChangeLevelOnlyNormalAndGem(this.state.needChangeIndex);
}
};
e.prototype.isCanChangeColor = function() {
var t = p.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition;
if (!t || 1 !== t.Way || !t.RequiredCollections) {
this.resetState();
return !1;
}
if (this.state.has_increase_enjoy_collection) {
this.resetState();
return !1;
}
if (this.state.has_travel_happy_over) {
this.resetState();
return !1;
}
if (Math.random() >= this.state.pure_collection_block_probability) {
this.resetState();
return !1;
}
var e = u.chapterAlgorithmInfo.blockIdList;
if (!e || 0 === e.length) {
this.resetState();
return !1;
}
var r = Math.floor(Math.random() * e.length);
this.state.needChangeIndex = r;
this.state.isCanChange = !0;
return !0;
};
e.prototype.resetState = function() {
this.state.isCanChange = !1;
this.state.needChangeIndex = -1;
this.state.has_increase_enjoy_collection = !1;
this.state.has_travel_happy_over = !1;
};
e.prototype.tryChangeLevelOnlyNormalAndGem = function(t) {
if (this.state.isCanChange && -1 !== this.state.needChangeIndex) {
var e = u.chapterAlgorithmInfo.blockIdList, r = h.chapterCollectInfo.collectRemainCollectItems, o = this.getValidCollectionItems(r);
if (0 !== o.length) {
var a = o[Math.floor(Math.random() * o.length)].Key;
t === this.state.needChangeIndex && this.updateBlockToCollection(e[t], a);
storage.getItem("chapterCollectionLists", []);
} else this.resetState();
}
};
e.prototype.updateBlockToCollection = function(t, e) {
for (var r = s.AlgorithmPosType[t], o = {}, a = storage.getItem("chapterCollectionLists", []), n = 0; n < r.length; n++) o["" + n] = {
Key: e,
pos: n
};
for (var i = 0; i < a.length; i++) a[i] = {};
a[this.state.needChangeIndex] = o;
storage.setItem("chapterCollectionLists", a);
};
e.prototype.getValidCollectionItems = function(t) {
var e = [];
Object.entries(t).forEach(function(t) {
var r = i(t, 2), o = r[0], a = r[1], n = Number(o);
a > 0 && e.push({
Key: n,
Value: a
});
});
return e;
};
e.prototype.recordIncreaseEnjoyCollection = function() {
this.state.has_increase_enjoy_collection = !0;
};
e.prototype.recordTravelHappyOver = function() {
this.state.has_travel_happy_over = !0;
};
return n([ classId("IsOpenCollectLevelOfferNormalAndGemTrait") ], e);
}(c.Trait);
r.IsOpenCollectLevelOfferNormalAndGemTrait = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
IsOpenLevelOverTipsChangeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ded946y6RNJpI6DDRqEs6pU", "IsOpenLevelOverTipsChangeTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenLevelOverTipsChangeTrait = void 0;
var s = t("../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../game/vo/ChapterGameInfo"), f = t("../components/ChapterCollectFail"), d = t("../components/ChapterScoreFail"), y = t("../config/ChapterFailConfig"), m = t("../proxys/ChapterFail_Proxy"), _ = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e;
return i(this, void 0, void 0, function() {
var r, o, a, n, i, p, _, v, g, C;
return c(this, function(c) {
switch (c.label) {
case 0:
if (u.tp.isChapterFail_ProxyOpenUI(t)) {
r = null;
if (!(r = (null === (e = h.chapterGameInfo.chapterCondition) || void 0 === e ? void 0 : e.Way) == l.ChapterType.score ? Cinst(d.default) : Cinst(f.default))) return [ 2 ];
(o = r.node.getChildByName("IsOpenLevelOverTipsChangeTraitTipAni")) && (o.active = !1);
}
if (!u.tp.isChapterFail_ProxyChapterOverPanelShowFinished(t)) return [ 3, 3 ];
a = m.ChapterOverPanelType.chapterScoreFail, n = m.ChapterOverPanelType.chapterCollectFail;
i = null;
t.args[0] === a ? i = Cinst(d.default) : t.args[0] === n && (i = Cinst(f.default));
if (!i) return [ 2 ];
p = i.node.getChildByName("IsOpenLevelOverTipsChangeTraitTipAni");
_ = [ "KeepFighting", "YouCanDoIt", "notThisTime", "TryAgain" ];
if (4 === (v = Math.floor(Math.random() * (_.length + 1)))) {
t.args[1].isShowDefTip = !0;
p && (p.active = !1);
return [ 2 ];
}
t.args[1].isShowDefTip = !1;
return p ? [ 3, 2 ] : [ 4, s.ResLoader.asyncLoadByBundle("chapter", y.tipsPath, cc.Prefab).then(function(t) {
(p = cc.instantiate(t)).name = "IsOpenLevelOverTipsChangeTraitTipAni";
p.y = i.boneAni.node.y;
}) ];

case 1:
c.sent();
c.label = 2;

case 2:
p.parent = i.node;
g = p.getComponent(dragonBones.ArmatureDisplay);
C = .33;
t.args[0] === a && (C = .63);
cc.tween(g.node).delay(C).call(function() {
p.active = !0;
g.playAnimation(_[v], 1);
}).start();
c.label = 3;

case 3:
return [ 2 ];
}
});
});
};
return n([ classId("IsOpenLevelOverTipsChangeTrait") ], e);
}(p.Trait);
r.IsOpenLevelOverTipsChangeTrait = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../components/ChapterCollectFail": "ChapterCollectFail",
"../components/ChapterScoreFail": "ChapterScoreFail",
"../config/ChapterFailConfig": "ChapterFailConfig",
"../proxys/ChapterFail_Proxy": "ChapterFail_Proxy"
} ],
IsTravelMoreDiamondAwardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9d9dd0in+hKEZoq000BLezV", "IsTravelMoreDiamondAwardTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsTravelMoreDiamondAwardTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducer"), s = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerItem"), p = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../algorithm/vo/ChapterAlgorithmInfo"), u = t("../../dataStatistics/vo/ChapterDataStatisticsInfo"), h = t("../../game/vo/ChapterGameInfo"), f = t("../vo/ChapterCollectionProducerGameInfo"), d = t("../vo/ChapterCollectionProducerITMDAInfo"), y = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.last_combo_count = 0;
return e;
}
e.prototype.onCreate = function() {
i.Trait.dynamicDisableTraits([ 38700001, 198800001 ]);
};
e.prototype.onActive = function(t) {
var e;
p.tp.isChapterCollectionProducer_ProxyOnReviveSuccess(t) && d.chapterCollectionProducerITMDAInfo.set("numAddCollectBrick", 3);
(p.tp.isChapterCollectionProducer_ProxyOnGameEnd(t) || p.tp.isChapterCollectionProducer_ProxyOnGameReplay(t)) && d.chapterCollectionProducerITMDAInfo.set("numAddCollectBrick", 0);
p.tp.isChapterCollectionProducer_ProxyOnBlockProducerTouchEndExecuted(t) && this.resolveAfterRemoveBlocks(t.args[0].state);
p.tp.isChapterCollectionProducer_ProxyChangeCollection(t) && d.chapterCollectionProducerITMDAInfo.produceItemForAllBlocks(l.chapterAlgorithmInfo.blockIdList);
if (p.tp.isChapterDefaultBoard_ProxyCreateChapterCondition(t)) {
var r = d.chapterCollectionProducerITMDAInfo.setTravelTargetCondition(t.args[0]);
if (r) {
t.replace = !0;
t.returnValue = r;
t.returnState = !0;
}
}
if (p.tp.isChapterConfigInfoGetChapterOriginConfig(t)) {
var o = d.chapterCollectionProducerITMDAInfo.getOriginChapterConfig(Number(null !== (e = t.args[0]) && void 0 !== e ? e : h.chapterGameInfo.chapterNum));
if (o) {
t.replace = !0;
t.returnValue = o;
t.returnState = !0;
}
}
};
e.prototype.resolveAfterRemoveBlocks = function(t) {
if (d.chapterCollectionProducerITMDAInfo.isCollectWay(h.chapterGameInfo.chapterNum) && !(t.eliminateCount <= 0)) {
var e = u.chapterDataStatisticsInfo.dataStatisticsInfo.comboTouchNum, r = d.chapterCollectionProducerITMDAInfo.clone();
r.numAddCollectBrick = 0;
r.numAddNextRound = 0;
this.last_combo_count != e && e > 0 && r.numAddCollectBrick++;
this.last_combo_count = e;
if (2 === t.eliminateCount) r.numAddCollectBrick++; else if (3 === t.eliminateCount) {
r.numAddCollectBrick++;
r.numAddNextRound = 1;
} else if (t.eliminateCount > 3) {
r.numAddCollectBrick = 3;
r.numAddNextRound = 3;
}
if (0 !== r.numAddCollectBrick) {
var o = !1, a = 0;
if (t.producerBlocks) for (var n = 0; n < t.producerBlocks.length && !(r.numAddCollectBrick <= 0); n++) if (n !== t.touchIndex) {
var i = this.getProduceItem(n);
if (cc.isValid(null == i ? void 0 : i.node) && !(i.node.childrenCount <= 0)) {
a++;
if (!o) {
d.chapterCollectionProducerITMDAInfo.updateCollectInfos();
o = !0;
}
var c = t.producerBlocks[n];
if (!d.chapterCollectionProducerITMDAInfo.isBlockAllCollect(c, n) && d.chapterCollectionProducerITMDAInfo.changeOneBlockInfo(c, n)) {
this.changeOneBlockColor(i, n);
r.numAddCollectBrick--;
r.numAddNextRound = 0;
}
}
}
if (a > 0) {
r.numAddCollectBrick = r.numAddNextRound;
r.numAddNextRound = 0;
}
d.chapterCollectionProducerITMDAInfo.update(r);
}
}
};
e.prototype.getProduceItem = function(t) {
var e, r = null === (e = Cinst(c.default)) || void 0 === e ? void 0 : e.blocksContainer;
if (!cc.isValid(r)) return null;
for (var o = 0; o < r.children.length; o++) {
var a = r.children[o].getComponent(s.default);
if (a.state.index === t && a.node.opacity > 0) return a;
}
return null;
};
e.prototype.changeOneBlockColor = function(t, e) {
var r;
if (cc.isValid(t)) {
var o = null === (r = null === f.chapterCollectionProducerGameInfo || void 0 === f.chapterCollectionProducerGameInfo ? void 0 : f.chapterCollectionProducerGameInfo.collectionList) || void 0 === r ? void 0 : r[e];
if (o) {
var a = {};
Reflect.ownKeys(o).forEach(function(t) {
var e = Reflect.get(o, t);
e && (a[e.pos] = e.Key);
});
var n = Object.assign({}, t.state);
n.itemColors = a;
t.setState(n);
}
}
};
return n([ classId("IsTravelMoreDiamondAwardTrait") ], e);
}(i.Trait);
r.IsTravelMoreDiamondAwardTrait = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducer": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerItem": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../dataStatistics/vo/ChapterDataStatisticsInfo": "ChapterDataStatisticsInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../vo/ChapterCollectionProducerGameInfo": "ChapterCollectionProducerGameInfo",
"../vo/ChapterCollectionProducerITMDAInfo": "ChapterCollectionProducerITMDAInfo"
} ],
LevelExpAlgorithmTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ae8ae8/52pCCIEWnGu0ZRnn", "LevelExpAlgorithmTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelExpAlgorithmTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerBaseAlgorithm(t) && (t.args[0] = !0);
};
return n([ classId("LevelExpAlgorithmTrait") ], e);
}(i.Trait);
r.LevelExpAlgorithmTrait = s;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelHelpStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "506d0jIVAxPeoRg7N2+2xVx", "LevelHelpStateTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelHelpStateTrait = void 0;
var i = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../game/vo/ChapterGameInfo"), u = t("../../data/RoundConfig"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e;
if (p.tp.isChapterAlgorithmStrategy_Reset_ProxyOnGameEnd(t)) {
var r = s.gameOverGameInfo.isChapterWin, o = u.roundConfig[l.chapterGameInfo.chapterNum];
o && r && (l.chapterGameInfo.roundNum <= o.round ? i.storage.setItem("chapterLevelHelp", !1) : i.storage.setItem("chapterLevelHelp", !0));
}
if (p.tp.isChapterAlgorithmStrategy_Reset_ProxyPreprocessAlgorithmData(t)) {
var a = TRAIT("ChapterAlgoStrategyTrait"), n = TRAIT("LevelWayHelpTrait"), c = !0;
if (null == a ? void 0 : a.active) {
n && (c = 1 == (null === (e = n.props) || void 0 === e ? void 0 : e.firing));
if (c) {
var h = i.storage.getItem("chapterLevelHelp", !1);
this.state.levelHelp = h ? 1 : 0;
a.setState({
isOpenLevelHelp: h
});
}
}
}
};
return n([ classId("LevelHelpStateTrait") ], e);
}(c.Trait);
r.LevelHelpStateTrait = h;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../../data/RoundConfig": "RoundConfig"
} ],
LevelLoopTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "517a1BMln1MdrASRFQPmjR2", "LevelLoopTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelLoopTrait = void 0;
var i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), u = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), f = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../difficultyStrategy/type/ChapterDifficultyStrategyType"), y = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), m = t("../../game/vo/ChapterGameInfo"), _ = {
start: [ 2 ],
range: [ 1 ],
length: 3
}, v = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.initialized = !1;
return e;
}
e.prototype.onActive = function(t) {
if (f.tp.isChapterDifficultyStrategy_ProxyDetermineDifficulty(t)) {
var e = t.args[0], r = this.getChapterDifficulty(e);
t.replace = !0;
t.returnValue = r;
}
if (f.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithm(t)) if (u.algorithmStrategyInfo.algorithmSourceLevel1 == l.ChapterAlgorithmSourceType.TravelStage2_simple) {
u.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
var o = y.chapterDifficultyInfo.chapterDifficultyList.get(m.chapterGameInfo.chapterNum);
y.chapterDifficultyInfo.isChapterDifficulty(o) ? u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.SUI_JI ]) : u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]);
} else if (u.algorithmStrategyInfo.algorithmSourceLevel1 == l.ChapterAlgorithmSourceType.TravelStage2_hard) {
u.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
o = y.chapterDifficultyInfo.chapterDifficultyList.get(m.chapterGameInfo.chapterNum);
if (y.chapterDifficultyInfo.isChapterMedium(o)) u.algorithmStrategyInfo.setAlgorithmList([ h.algorithmStrategyLogic.getShangZengAndSuiJi() ]); else if (y.chapterDifficultyInfo.isChapterDifficulty(o)) if (0 == i.storage.getItem("chapterFirstHardState_levelloop")) {
u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.KUN_NAN_TI ]);
u.algorithmStrategyInfo.setAlgorithmFailList([ s.OFFER_TYPE.SUI_JI ]);
} else u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.SUI_JI ]); else u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]);
}
};
Object.defineProperty(e.prototype, "levelLoopParam", {
get: function() {
return this.props || _;
},
enumerable: !1,
configurable: !0
});
e.prototype.getChapterDifficulty = function(t) {
var e = this.props || _, r = t % e.length;
return e.start.includes(r) ? d.CHAPTER_DIFF_TYPE.DIFFICULT : e.range.includes(r) ? d.CHAPTER_DIFF_TYPE.MEDIUM : e.simple_difficult && e.simple_difficult.includes(r) ? d.CHAPTER_DIFF_TYPE.SIMPLE_DIFFICULT : e.novice && e.novice.includes(r) ? d.CHAPTER_DIFF_TYPE.NOVICE : d.CHAPTER_DIFF_TYPE.SIMPLE;
};
n([ p.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("LevelLoopTrait") ], e);
}(c.Trait);
r.LevelLoopTrait = v;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../difficultyStrategy/type/ChapterDifficultyStrategyType": "ChapterDifficultyStrategyType",
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
LevelPiecesThreeRanTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a4a9dW4/9dBHpQdTzAAgYp+", "LevelPiecesThreeRanTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelPiecesThreeRanTrait = void 0;
var i = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
oneStagePercent: .4,
twoStagePercent: .8
};
};
e.prototype.onActive = function(t) {
if (c.tp.isChapterAlgorithmStrategy_Reset_ProxyPreprocessAlgorithmData(t)) {
var e = this.props.range1, r = this.props.range2;
if (this.props.default1) {
this.state.oneStagePercent = Math.floor(Math.random() * (e[1] - e[0])) + e[0];
this.state.twoStagePercent = this.state.oneStagePercent + Math.floor(Math.random() * (r[1] - r[0])) + r[0];
} else if (this.props.default2) {
var o = [ e, r, this.props.range3 ], a = Math.floor(Math.random() * o.length);
if (o[a]) {
this.state.oneStagePercent = o[a][0];
this.state.twoStagePercent = o[a][1];
}
} else {
this.state.oneStagePercent = Math.floor(Math.random() * (e[1] - e[0])) + e[0];
this.state.twoStagePercent = Math.floor(Math.random() * (r[1] - r[0])) + r[0];
}
var n = TRAIT("ChapterAlgoStrategyTrait");
(null == n ? void 0 : n.active) && n.setState({
ratioArr: [ this.state.oneStagePercent / 100, this.state.twoStagePercent / 100 ]
});
}
};
return n([ classId("LevelPiecesThreeRanTrait") ], e);
}(i.Trait);
r.LevelPiecesThreeRanTrait = s;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelRandomReplaceTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "220f2OTBOpAm5CzPUdZ5ozo", "LevelRandomReplaceTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelRandomReplaceTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), s = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e = this;
if (u.tp.isChapterAlgorithmStrategy_Deal_ProxyPostPreprocessing(t)) {
var r = c.algorithmStrategyInfo.algorithmList.map(function(t) {
return t === s.OFFER_TYPE.SUI_JI ? e.getOfferType() : t;
});
c.algorithmStrategyInfo.setAlgorithmList(r);
var o = c.algorithmStrategyInfo.algorithmFailList.map(function(t) {
return t === s.OFFER_TYPE.SUI_JI ? e.getOfferType() : t;
});
c.algorithmStrategyInfo.setAlgorithmFailList(o);
}
};
e.prototype.getOfferType = function() {
return l.algorithmStrategyLogic.getShangZengAndSuiJi();
};
n([ p.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("LevelRandomReplaceTrait") ], e);
}(i.Trait);
r.LevelRandomReplaceTrait = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelReviveCondiTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8080aZTgxFFL6ypONa7+RCh", "LevelReviveCondiTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelReviveCondiTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = t("../vo/ChapterReviveCacheGameInfo"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isChapterRevive_ProxyReviveProcessingData(t) && (s.chapterReviveCacheGameInfo._collectionProcessTarget = this.props.per);
};
return n([ classId("LevelReviveCondiTrait") ], e);
}(i.Trait);
r.LevelReviveCondiTrait = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../vo/ChapterReviveCacheGameInfo": "ChapterReviveCacheGameInfo"
} ],
LevelReviveCountTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ac038GDPXpFLbnOcO5Aqxvc", "LevelReviveCountTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelReviveCountTrait = void 0;
var i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = t("../vo/ChapterReviveGameInfo"), l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isChapterRevive_ProxyReviveSuccessPostProcessing(t) && p.chapterReviveGameInfo.actualReviveNum < this.props.count && i.storage.setItem("chapterReviveNum", 0);
};
return n([ classId("LevelReviveCountTrait") ], e);
}(c.Trait);
r.LevelReviveCountTrait = l;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../vo/ChapterReviveGameInfo": "ChapterReviveGameInfo"
} ],
LevelReviveTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "53d1abb+fVN6Kkl9GiQhbmn", "LevelReviveTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelReviveTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isChapterRevive_ProxyIsOpenRevive(t) && (t.args[0] = !0);
};
return n([ classId("LevelReviveTrait") ], e);
}(i.Trait);
r.LevelReviveTrait = s;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelWayHelpConfigTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cbf446KQJVCZ5vIEJwjpJu1", "LevelWayHelpConfigTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelWayHelpConfigTrait = void 0;
var i = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = t("../../data/TryTimeConfig"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e;
if (c.tp.isChapterAlgorithmStrategy_Init_ProxyPreprocessAlgorithmData(t)) {
var r = TRAIT("ChapterAlgoStrategyTrait"), o = ((e = {}).trytimes = s.tryTimeConfig, 
e);
(null == r ? void 0 : r.active) && r.setState({
tryTimesJsonData: o[this.props.fileCfg]
});
}
};
return n([ classId("LevelWayHelpConfigTrait") ], e);
}(i.Trait);
r.LevelWayHelpConfigTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../data/TryTimeConfig": "TryTimeConfig"
} ],
LevelWayHelpTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e4d16jIrT5Oh7s8kuhtjegq", "LevelWayHelpTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelWayHelpTrait = void 0;
var i = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isChapterAlgorithmStrategy_Reset_ProxyPreprocessAlgorithmData(t)) {
var e = TRAIT("ChapterAlgoStrategyTrait");
(null == e ? void 0 : e.active) && 0 == e.state.isOpenLevelHelp && e.setState({
isOpenLevelHelp: 1 == this.props.firing
});
}
};
return n([ classId("LevelWayHelpTrait") ], e);
}(i.Trait);
r.LevelWayHelpTrait = s;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
MultiElementCollectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2c083aRKeVCd5vPNDPTlRKf", "MultiElementCollectTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, a, n = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (a) throw a.error;
}
}
return i;
}, p = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MultiElementCollectTrait = void 0;
var l = t("../../../../../../scripts/base/arrays/arrays"), u = t("../../../../../../scripts/base/trait/Trait"), h = t("../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig"), f = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), d = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), y = t("../../../../../../scripts/modules/binary/config/BinaryConfig"), m = t("../../../../../../scripts/modules/binary/vo/BinaryBoard"), _ = t("../../../../../../scripts/modules/board/vo/BoardInfo"), v = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), g = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), C = t("../../algorithm/vo/ChapterAlgorithmInfo"), b = t("../../collect/vo/ChapterCollectInfo"), P = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), S = t("../../game/vo/ChapterGameInfo"), I = t("../../../../../../scripts/base/storage/Storage"), T = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), E = t("../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig"), O = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo"), A = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), R = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e, r;
return c(this, function() {
if (g.tp.isChapterCollectionProducer_ProxyProduceCollection(t) && -1 == d.algorithmName.algoActualChangeName.indexOf("消除爽")) {
this.produceItemsForBlock();
t.returnState = !0;
t.replace = !0;
}
if (g.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t)) {
if (3 != f.algorithmInfo.blockIdList.length) return [ 2 ];
if (d.algorithmName.algoActualId == T.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) {
if (null == (e = TRAIT("RecoverBlockSortTrait")) ? void 0 : e.active) {
O.algorithmStrategyBlocksPosInfo._blocksPosList = A.OPERA_POS_TYPE.RANDOM;
r = l.shuffleArray([ 0, 1, 2 ]);
O.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(r);
} else {
O.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(E.operaPosLeft);
O.algorithmStrategyBlocksPosInfo._blocksPosList = A.OPERA_POS_TYPE.LEFT;
}
t.replace = !0;
}
}
return [ 2 ];
});
});
};
e.prototype.produceItemsForBlock = function() {
var t = f.algorithmInfo.blockIdList, e = [ [ [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ], [ [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ], [ [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ] ], r = this.props.segmentCountWeightArr;
this.props.firstPeriodCountWeightArr && 1 == S.chapterGameInfo.stage && (r = this.props.firstPeriodCountWeightArr);
if (r) {
var o = P.chapterDifficultyInfo.chapterDifficultyList.get(S.chapterGameInfo.chapterNum);
P.chapterDifficultyInfo.isChapterSimple(o) && (o = 1);
var a = r[o - 1];
if (a) for (var n = 0; n < a.length; n++) {
var i = a[n];
if ("number" == typeof i[0] && .1 <= i[0]) {
e = i[1];
break;
}
}
}
var c = this.getCollectElementsInfo(), s = e[c.length - 1] || e[e.length - 1], p = c.length > 0 ? this.getElementByWeight(s)[0] : 0, l = this.getElementArrayByWeight(c, p), u = this.getElementMapOnBlock(l), h = this.props.fillPathFirst && 3 == d.algorithmName.algoActualChangeName.filter(function(t) {
return "填空消除" == t;
}).length ? 2 : 1;
this.generateElementPosOnBlock(t, u, h);
};
e.prototype.getCollectElementsInfo = function() {
for (var t = v.chapterConfigInfo.chapterDatasCfg[S.chapterGameInfo.chapterNum].Condition.RequiredCollections, e = b.chapterCollectInfo.collectRemainCollectItems, r = t.length, o = [], a = _.boardInfo.faceBlocks, n = function(r) {
var n = t[r], i = e[n.Key];
if (0 == i) return "continue";
var c = a.reduce(function(t, e) {
return t + e.reduce(function(t, e) {
return t + (e == n.Key ? 1 : 0);
}, 0);
}, 0), s = n.Value, p = c + (s - i), l = Math.ceil(1.25 * s), u = l - p;
u && p < l && o.push([ n.Key, u ]);
}, i = 0; i < r; i++) n(i);
return o;
};
e.prototype.getElementByWeight = function(t) {
var e, r, o = t.reduce(function(t, e) {
var r = s(e, 2);
r[0];
return t + r[1];
}, 0), a = Math.random() * o;
try {
for (var n = p(t), i = n.next(); !i.done; i = n.next()) {
var c = i.value;
if (a < c[1]) return c;
a -= c[1];
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (r = n.return) && r.call(n);
} finally {
if (e) throw e.error;
}
}
return t[t.length - 1];
};
e.prototype.getElementArrayByWeight = function(t, e, r) {
void 0 === r && (r = {});
if (0 == e) return [];
for (var o = Array.from(Array(t.length), function(e, o) {
var a = t[o];
return [ a[0], r[a[0]] || 1, a[1] ];
}), a = [], n = 0; n < e && o.length > 0; n++) {
var i = this.getElementByWeight(o), c = i[0];
a.push(c);
0 == --i[2] && o.splice(o.indexOf(i), 1);
}
return a;
};
e.prototype.getElementMapOnBlock = function(t) {
var e, r;
if (0 == t.length) return [ [], [], [] ];
for (var o = [], a = [], n = t.length, i = Math.floor(n / 3), c = n % 3, s = 0; s < 3; s++) a.push(i + (s < c ? 1 : 0));
l.shuffleArray(a);
var u = 0;
try {
for (var h = p(a), f = h.next(); !f.done; f = h.next()) {
var d = f.value;
o.push(t.slice(u, u + d));
u += d;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
f && !f.done && (r = h.return) && r.call(h);
} finally {
if (e) throw e.error;
}
}
return o;
};
e.prototype.getCanClearPosOnBlock = function(t) {
var e = new m.BinaryBoard();
e.convertToBinaryBoard(_.boardInfo.faceBlocks);
e.record();
for (var r = e.getEdgeGameNum(), o = [ [], [], [] ], a = 0; a < t.length; a++) {
var n = t[a];
e.revert();
var i = null, c = null, s = void 0, p = void 0, l = r, u = r, h = void 0, f = void 0, d = null;
if (!y.BlockShapeMap[n]) return o;
for (var v = e.getCanPutPoss(n), g = 0, C = v.length; g < C; g++) {
e.revert();
e.putBlock(n, v[g]);
var b = e.getEdgeGameNum(), P = e.canClearBlockArr();
if (b < l && P) {
s = n;
i = e.rowBinary.concat();
l = b;
h = v[g];
} else if (b < u) {
p = n;
c = e.rowBinary.concat();
u = b;
f = v[g];
}
}
if (s) {
e.setBoard(i);
r = l;
e.record();
d = h;
} else if (p) {
e.setBoard(c);
r = u;
e.record();
d = f;
}
var S = e.canClearBlockArr(!0);
if (d && S) {
var I = y.BlockShapeMap[n];
if (!I) return o;
for (var T = 0, E = 0; E < I.height; E++) for (var O = I.shape[E].toString(2).padStart(I.width, "0").split("").map(Number), A = 0; A < I.width; A++) if (O[A]) {
var R = cc.v2(d.x + A, d.y + E);
e.emptyAt(R.x, R.y) && o[a].push(T);
T++;
}
}
}
return o;
};
e.prototype.generateElementPosOnBlock = function(t, e, r) {
void 0 === r && (r = 1);
for (var o = [ [], [], [] ], a = e.reduce(function(t, e) {
return t + e.length;
}, 0), n = 2 == r && a > 0 ? this.getCanClearPosOnBlock(t) : null, i = 0; i < 3; i++) for (var c = h.AlgorithmPosType[C.chapterAlgorithmInfo.blockIdList[i]].length, s = e[i], p = Math.min(c, s.length), l = Math.floor(Math.random() * c), u = 0; u < p; u++) {
var f = s[u], d = 0;
n && n[i].length > 0 ? l = d = n[i].shift() : d = (l + u) % c;
o[i].push({
Key: f,
pos: d
});
}
for (var y = [], m = function(t) {
if (o[t].length > 0) {
var e = {};
o[t].forEach(function(t) {
e[t.pos] = t;
});
y.push(e);
} else y.push({});
}, _ = 0; _ < o.length; _++) m(_);
var v = [].concat(y);
I.storage.setItem("chapterCollectionLists", v);
};
return n([ classId("MultiElementCollectTrait") ], e);
}(u.Trait);
r.MultiElementCollectTrait = R;
cc._RF.pop();
}, {
"../../../../../../scripts/base/arrays/arrays": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo": void 0,
"../../../../../../scripts/modules/binary/config/BinaryConfig": void 0,
"../../../../../../scripts/modules/binary/vo/BinaryBoard": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
PercentStreamerTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ea475lkiNZJM45xh6hwXiWc", "PercentStreamerTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PercentStreamerTrait = void 0;
var s = t("../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e, r;
return c(this, function(o) {
switch (o.label) {
case 0:
if (!l.tp.isChapterGoalAddPercentStreamer(t)) return [ 3, 3 ];
if (!(e = t.target) || !e.bg) return [ 3, 3 ];
e.goalInfoContainer.y = 30;
e.bg.height = 480;
if (null == (r = e.bg.getChildByName("PercentStreamerTrait"))) return [ 3, 1 ];
r.active = !0;
return [ 3, 3 ];

case 1:
return [ 4, s.ResLoader.asyncLoadByBundle("Remote_percentStreamer", "prefab/percentStreamer", cc.Prefab).then(function(t) {
(r = cc.instantiate(t)).name = "PercentStreamerTrait";
r.parent = e.bg;
r.active = !0;
r.y = -e.bg.height / 2 + 100;
}) ];

case 2:
o.sent();
o.label = 3;

case 3:
if (l.tp.isChapterGoalCollectPercentStreamerChangeDelayTime(t)) {
t.target;
t.args[0] = 1;
}
if (l.tp.isChapterGoalScorePercentStreamerChangeDelayTime(t)) {
t.target;
t.args[0] = 1;
}
return [ 2 ];
}
});
});
};
return n([ classId("PercentStreamerTrait") ], e);
}(p.Trait);
r.PercentStreamerTrait = u;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
PercentStreamer: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0d740SaLX9Fx6SSMzQ5Dszz", "PercentStreamer");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../scripts/base/components/Component"), c = t("../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../scripts/base/storage/Storage"), p = t("../../difficultyStrategy/type/ChapterDifficultyStrategyType"), l = t("../vo/ChapterGameInfo"), u = cc._decorator, h = u.ccclass, f = u.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.percentStreamerTxt = null;
e.percentStreamerBg = null;
return e;
}
e.prototype.onEnable = function() {
var t = this, e = 0;
switch (l.chapterGameInfo.currentLevelDifficulty) {
case p.CHAPTER_DIFF_TYPE.DIFFICULT:
e = 2;
break;

case p.CHAPTER_DIFF_TYPE.MEDIUM:
case p.CHAPTER_DIFF_TYPE.SIMPLE_DIFFICULT:
e = 1;
break;

case p.CHAPTER_DIFF_TYPE.SIMPLE:
case p.CHAPTER_DIFF_TYPE.NOVICE:
e = 0;
break;

default:
e = 0;
}
var r = s.storage.getItem("chapterStreamerInfo", null), o = 1e3 * l.chapterGameInfo.roundNum + l.chapterGameInfo.chapterNum, a = Math.floor(5 * Math.random()) % 5, n = [ [ 30, 72 ], [ 40, 84 ], [ 50, 97 ] ], i = -1;
if (r && r[0] === o) {
a = r[1];
i = r[2];
} else {
i = Math.floor(Math.random() * (n[e][1] - n[e][0])) + n[e][0];
s.storage.setItem("chapterStreamerInfo", [ o, a, i ]);
}
1 == a && (i = 100 - i);
this.percentStreamerTxt.string = i + "%";
this.percentStreamerTxt.node.x = [ -296, -230, 172, -370, -396 ][a];
this.percentStreamerTxt.node.active = !1;
this.percentStreamerBg.node.active = !1;
c.ResLoader.loadByBundle("Remote_percentStreamer", "textures/txt" + (a + 1), cc.SpriteFrame, function(e, r) {
if (!e) {
t.percentStreamerBg.spriteFrame = r;
t.percentStreamerTxt.node.active = !0;
t.percentStreamerBg.node.active = !0;
}
});
};
n([ f(cc.Label) ], e.prototype, "percentStreamerTxt", void 0);
n([ f(cc.Sprite) ], e.prototype, "percentStreamerBg", void 0);
return n([ h ], e);
}(i.default);
r.default = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/components/Component": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../difficultyStrategy/type/ChapterDifficultyStrategyType": "ChapterDifficultyStrategyType",
"../vo/ChapterGameInfo": "ChapterGameInfo"
} ],
PureGemTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f45b57yQUNOEaovgrSuSdu8", "PureGemTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PureGemTrait = void 0;
var i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig"), p = t("../../../../../../scripts/modules/board/vo/BoardInfo"), l = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../algorithm/vo/ChapterAlgorithmInfo"), f = t("../../game/vo/ChapterGameInfo"), d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isPureGemModel = !1;
e._randomInx = -1;
e._pureColorId = -1;
e._currdata = {
prePureGemLocalData: null,
pureGemRandomStart: null
};
return e;
}
e.prototype.onActive = function(t) {
u.tp.isChapterDefaultBoard_ProxyOnProduceChapterDefaultBoard(t) && this.initPureGemData();
if (u.tp.isChapterDefaultBoard_ProxySetChapterColor(t) && this._isPureGemModel) {
var e = i.storage.getItem("chapterFaceBlocks", p.boardInfo.NULL);
if (e && Array.isArray(e)) for (var r = 0; r < e.length; r++) if (Array.isArray(e[r])) for (var o = 0; o < e[r].length; o++) "number" == typeof e[r][o] && -1 != e[r][o] && (e[r][o] = this._pureColorId);
i.storage.setItem("chapterFaceBlocks", e);
}
if (u.tp.isChapterCollectionProducer_ProxyProduceCollection(t) && this._isPureGemModel) {
for (var a = [], n = 0; n < 3; n++) {
var c = s.AlgorithmPosType[h.chapterAlgorithmInfo.blockIdList[n]], l = {};
for (r = 0; r < c.length; r++) l[r] = {
Key: this._pureColorId,
pos: r
};
a.push(l);
}
i.storage.setItem("chapterCollectionLists", a);
t.returnState = !0;
t.replace = !0;
}
};
e.prototype.getGemPureColor = function() {
return this._pureColorId;
};
e.prototype.initPureGemData = function() {
this.loadData();
if (this.isTriggered()) {
this._isPureGemModel = !0;
this.state.all_jewel = 1;
this.initRandomInx();
var t = l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.RequiredCollections[0];
this._pureColorId = t.Key;
} else {
this._isPureGemModel = !1;
this.state.all_jewel = 0;
}
};
e.prototype.initRandomInx = function() {
var t = f.chapterGameInfo.stage, e = f.chapterGameInfo.chapterNum + 1, r = l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.RequiredCollections.length;
if (!this.currIsPureGem() || r > 1) {
this._randomInx = Math.floor(Math.random() * r);
if (this.currIsPureGem()) {
var o = this._currdata.prePureGemLocalData;
o && o.randomInx && (this._randomInx = parseInt(o.randomInx));
}
this._currdata.prePureGemLocalData = {
travelid: t,
travellevelid: e,
randomInx: this._randomInx
};
this.initPureRequiredCollections();
this.saveData();
}
};
e.prototype.initPureCurrentArry = function() {};
e.prototype.initPureRequiredCollections = function() {
var t = this.newRandomRequiredCollection();
l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.RequiredCollections = [];
l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.RequiredCollections.push(t);
};
e.prototype.newRandomRequiredCollection = function() {
for (var t = this.props && this.props.multipleNum ? this.props.multipleNum : 6, e = l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.RequiredCollections, r = {
Key: l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.RequiredCollections[this._randomInx].Key,
Value: 0
}, o = 0; o < e.length; o++) r.Value += e[o].Value;
r.Value *= t;
return r;
};
e.prototype.isTriggered = function() {
return !!this.currIsPureGem() || !!(this.isBiggerLevel() && this.isCollection() && this.isIntervalLevel());
};
e.prototype.isIntervalLevel = function() {
var t = this.props.interval, e = f.chapterGameInfo.stage, r = f.chapterGameInfo.chapterNum + 1, o = this._currdata.prePureGemLocalData;
if (o) {
var a = o.travelid, n = o.travellevelid;
return e == a && (r - n >= t || r == n) || e != a;
}
return !0;
};
e.prototype.isCollection = function() {
return 1 == l.chapterConfigInfo.chapterDatasCfg[f.chapterGameInfo.chapterNum].Condition.Way;
};
e.prototype.isBiggerLevel = function() {
var t = f.chapterGameInfo.chapterNum + 1, e = this.props.startRange[0], r = this.props.startRange[1], o = Math.floor(Math.random() * (r - e + 1) + e);
if (this._currdata.pureGemRandomStart && this._currdata.pureGemRandomStart >= e) o = this._currdata.pureGemRandomStart; else {
this._currdata.pureGemRandomStart = o;
this.saveData();
}
return t > o;
};
e.prototype.currIsPureGem = function() {
var t = f.chapterGameInfo.stage, e = f.chapterGameInfo.chapterNum + 1, r = this._currdata.prePureGemLocalData;
if (r) {
var o = r.travelid, a = r.travellevelid;
if (t == o && e == a) return !0;
}
return !1;
};
e.prototype.loadData = function() {
var t = i.storage.getItem("chapterPureGemTraitData", null);
if (t) try {
this._currdata = t;
} catch (t) {}
};
e.prototype.saveData = function() {
i.storage.setItem("chapterPureGemTraitData", this._currdata);
};
return n([ classId("PureGemTrait") ], e);
}(c.Trait);
r.PureGemTrait = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
RatioAdjustTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f64e5OPziRH6aC0p3r6VTFL", "RatioAdjustTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.RatioAdjustTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), s = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), p = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), l = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), f = t("../../game/vo/ChapterGameInfo"), d = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isChapterAlgorithmStrategy_Reset_ProxyPreprocessAlgorithmData(t)) {
var e = TRAIT("ChapterAlgoStrategyTrait");
(null == e ? void 0 : e.active) && e.setState({
ratioArr: [ .5, .75 ]
});
}
if (u.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithm(t)) if (l.algorithmStrategyInfo.algorithmSourceLevel1 == p.ChapterAlgorithmSourceType.TravelStage2_hard) {
l.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
var r = Math.floor(10 * Math.random()), o = h.chapterDifficultyInfo.chapterDifficultyList.get(f.chapterGameInfo.chapterNum);
if (h.chapterDifficultyInfo.isChapterSimple(o)) l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else if (h.chapterDifficultyInfo.isChapterMedium(o)) if (r < 7) l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else {
l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.SI_WANG ]);
l.algorithmStrategyInfo.setAlgorithmFailList([ c.OFFER_TYPE.SUI_JI ]);
} else if (r < 5) l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else {
l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.SI_WANG ]);
l.algorithmStrategyInfo.setAlgorithmFailList([ c.OFFER_TYPE.SUI_JI ]);
}
t.returnState = !0;
} else if (l.algorithmStrategyInfo.algorithmSourceLevel1 == p.ChapterAlgorithmSourceType.TravelStage3) {
l.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
r = Math.floor(10 * Math.random()), o = h.chapterDifficultyInfo.chapterDifficultyList.get(f.chapterGameInfo.chapterNum);
if (h.chapterDifficultyInfo.isChapterSimple(o)) if (r < 7) l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else {
l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.SI_WANG ]);
l.algorithmStrategyInfo.setAlgorithmFailList([ c.OFFER_TYPE.SUI_JI ]);
} else if (h.chapterDifficultyInfo.isChapterMedium(o)) if (r < 5) l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else {
l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.SI_WANG ]);
l.algorithmStrategyInfo.setAlgorithmFailList([ c.OFFER_TYPE.SUI_JI ]);
} else if (r < 7) l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else {
l.algorithmStrategyInfo.setAlgorithmList([ c.OFFER_TYPE.KUN_NAN_TI ]);
l.algorithmStrategyInfo.setAlgorithmFailList([ c.OFFER_TYPE.SUI_JI ]);
}
t.returnState = !0;
}
};
n([ s.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("RatioAdjustTrait") ], e);
}(i.Trait);
r.RatioAdjustTrait = d;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
ReduceTravelSettlementTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1935cF3TIxKVp8p16XFhGuU", "ReduceTravelSettlementTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ReduceTravelSettlementTrait = void 0;
var i = t("../../../../../../scripts/base/audio/AudioInfo"), c = t("../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../audio/config/ChapterAudioConfig"), f = t("../../prefab/ChapterPrefabConfig"), d = t("../type/ChapterGameOverType"), y = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
u.tp.isChapterGameOverGameInfoGetChapterScoreFailConfig(t) && (t.args[0] = f.ChapterPrefabConfig.ChapterReduceScoreFail);
u.tp.isChapterGameOverGameInfoGetChapterScoreWinConfig(t) && (t.args[0] = f.ChapterPrefabConfig.ChapterReduceScoreWin);
u.tp.isChapterGameOverGameInfoGetChapterCollectFailConfig(t) && (t.args[0] = f.ChapterPrefabConfig.ChapterReduceCollectFail);
u.tp.isChapterGameOverGameInfoGetChapterCollectWinConfig(t) && (t.args[0] = f.ChapterPrefabConfig.ChapterReduceCollectWin);
u.tp.isChapterWin_ProxyHideUI(t);
u.tp.isChapterFail_ProxyHideUI(t);
u.tp.isChapterGameOver_ProxyOnShowFinish(t) && this.onBlockTouchActivation();
if (u.tp.isChapterGameInfoIsOpenModuleLayer(t)) {
var e = t.args[0];
"ChapterScoreFail" == e ? t.args[0] = "ChapterReduceScoreFail" : "ChapterScoreWin" == e ? t.args[0] = "ChapterReduceScoreWin" : "ChapterCollectFail" == e ? t.args[0] = "ChapterReduceCollectFail" : "ChapterCollectWin" == e && (t.args[0] = "ChapterReduceCollectWin");
}
if (u.tp.isChapterCollectWinOnCompleteGame(t)) {
p.UI.hideUI(f.ChapterPrefabConfig.ChapterReduceCollectWin);
this.onBlockTouchActivation();
}
if (u.tp.isChapterScoreWinOnCompleteGame(t)) {
p.UI.hideUI(f.ChapterPrefabConfig.ChapterReduceScoreWin);
this.onBlockTouchActivation();
}
u.tp.isChapterScoreFailShowAction(t) && this.playScoreFailShowAction(t);
u.tp.isChapterScoreWinShowAction(t) && this.playScoreWinShowAction(t);
u.tp.isChapterCollectFailShowAction(t) && this.playCollectFailShowAction(t);
u.tp.isChapterCollectWinShowAction(t) && this.playCollectWinShowAction(t);
};
e.prototype.onHideUI = function(t) {
switch (t) {
case d.GameOverType.CollectFail:
p.UI.hideUI(f.ChapterPrefabConfig.ChapterReduceCollectFail);
break;

case d.GameOverType.CollectWin:
p.UI.hideUI(f.ChapterPrefabConfig.ChapterReduceCollectWin);
break;

case d.GameOverType.ScoreFail:
p.UI.hideUI(f.ChapterPrefabConfig.ChapterReduceScoreFail);
break;

case d.GameOverType.ScoreWin:
p.UI.hideUI(f.ChapterPrefabConfig.ChapterReduceScoreWin);
}
};
e.prototype.playScoreFailShowAction = function(t) {
var e = t.target;
setTimeoutSafe(function() {
e.changeUI();
}, 100);
cc.tween(e.node).delay(.57).call(function() {
e.showOtherTraitAnim();
i.audioInfo.play(h.ChapterAudioConfig.travel_score_change);
if (e.state.isShowDefTip) {
e.boneAni.node.active = !1;
e.boneAni_1.playAnimation("in", 1);
e.boneAni_1.node.active = !0;
} else e.boneAni.node.active = !1;
e.progress.active = !0;
e.mask.width = .1;
var t = e.basePosX + Math.floor(e.state.score / e.state.goalScore * 531);
cc.tween(e.mask).to(.3, {
width: Math.floor(e.state.score / e.state.goalScore * 531)
}).start();
cc.tween(e.scoreBg).to(.3, {
x: t
}).start();
}).delay(1.1).call(function() {
e.showBtnAnim();
}).start();
t.replace = !0;
};
e.prototype.playScoreWinShowAction = function(t) {
var e = t.target;
e.scoreBoneAni.node.active = !1;
e.scoreEffectBoneAni.node.active = !1;
var r = parseInt(e.score.string);
e.scoreEffect.string = "0";
var o = !1;
cc.tween({
a: 0
}).to(.55, {
a: r
}, {
progress: function(t, a, n, c) {
var s = t + (a - t) * c;
if (s >= .5 * r && !o) {
i.audioInfo.play(h.ChapterAudioConfig.travel_score_suc);
o = !0;
}
e.scoreEffect.string = String(parseInt(s));
}
}).start();
setTimeoutSafe(function() {
e.changeUI();
}, 100);
this.playScoreWinEffectBoneAni(e, r);
t.replace = !0;
};
e.prototype.playScoreWinEffectBoneAni = function(t, e) {
cc.tween(t.node).delay(0).call(function() {
t.scoreEffect.string = String(e);
t.scoreEffectBoneAni.node.active = !0;
t.scoreEffectBoneAni.playAnimation("HS_1", 1);
t.scoreEffectBoneAni.once(dragonBones.EventObject.COMPLETE, function() {
t.showOtherTraitAnim();
});
}).delay(2.8).call(function() {
t.showBtnAnim();
}).start();
};
e.prototype.playCollectFailShowAction = function(t) {
var e = t.target;
setTimeoutSafe(function() {
e.changeUI();
}, 100);
cc.tween(e.node).call(function() {
e.boneAni.node.active = !1;
e.boneAni_1.node.active = !1;
}).delay(.57).call(function() {
if (e.state.isShowDefTip) {
e.boneAni.node.active = !1;
e.boneAni_1.playAnimation("in", 1);
e.boneAni_1.node.active = !0;
} else e.boneAni.node.active = !1;
e.showOtherTraitAnim();
i.audioInfo.play(h.ChapterAudioConfig.travel_overui_collect_items);
e.addItem();
}).delay(1.1).call(function() {
e.showBtnAnim();
}).start();
t.replace = !0;
};
e.prototype.playCollectWinShowAction = function(t) {
var e = t.target;
e.boneAni.node.active = !1;
e.scoreEffectBoneAni.node.active = !1;
setTimeoutSafe(function() {
e.changeUI();
}, 100);
this.playCollectWinScoreEffectBoneAni(e);
t.replace = !0;
};
e.prototype.playCollectWinScoreEffectBoneAni = function(t) {
cc.tween(t.node).delay(.57).call(function() {
t.scoreEffectBoneAni.node.active = !0;
t.scoreEffectBoneAni.playAnimation("HS_3", 1);
i.audioInfo.play(h.ChapterAudioConfig.travel_win_logo);
t.showOtherTraitAnim();
t.addItem();
}).delay(2.1).call(function() {
t.showBtnAnim();
}).start();
};
e.prototype.onBlockTouchActivation = function() {
var t = Cinst(l.default);
t && t.onTouchActivation();
};
n([ c.trait("TravelResultOptimizingTrait", "旅行模式结算优化, 同步选关界面") ], e.prototype, "playScoreWinEffectBoneAni", null);
n([ c.trait("TravelResultOptimizingTrait", "旅行模式结算优化, 同步选关界面") ], e.prototype, "playCollectWinScoreEffectBoneAni", null);
return n([ classId("ReduceTravelSettlementTrait") ], e);
}(s.Trait);
r.ReduceTravelSettlementTrait = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../prefab/ChapterPrefabConfig": "ChapterPrefabConfig",
"../type/ChapterGameOverType": "ChapterGameOverType"
} ],
RepeatPreviewComponent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "29e2awhqv1MYZPSK1PX4q7k", "RepeatPreviewComponent");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = t("../../../../../../../scripts/base/components/Component"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.armatureDisplay = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function() {
cc.isValid(t.node) && t.armatureDisplay.playAnimation("FangDaJing_idle", 0);
}, this);
};
e.prototype.render = function() {
var t, e = this.state.isVisible;
this.node.active = null != e && e;
if (this.armatureDisplay) {
var r = null !== (t = this.state.aniName) && void 0 !== t ? t : "FangDaJing_in";
this.armatureDisplay.playAnimation(r, 1);
}
};
n([ p(dragonBones.ArmatureDisplay) ], e.prototype, "armatureDisplay", void 0);
return n([ s ], e);
}(i.default);
r.default = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0
} ],
ReviveBuffTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b5321dLhSdAPbVtCuq/ZlFK", "ReviveBuffTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ReviveBuffTrait = void 0;
var i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), p = t("../../../../../../scripts/modules/gameOver/type/GameOverType"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../vo/ChapterReviveCacheGameInfo"), h = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.updateBuff = function(t) {
i.storage.setItem("chapteReviveBuff", t);
};
e.prototype.onActive = function(t) {
var e = i.storage.getItem("chapteReviveBuff", 0);
if (l.tp.isChapterRevive_ProxyIsOpenRevive(t)) if (2 == e) t.args[1] = !0; else if (1 == e) {
t.args[0] = !1;
this.updateBuff(4);
}
if (l.tp.isChapterAdvertisement_RewardProxyOnRewardOver(t)) {
var r = t.args[0];
2 === e ? this.updateBuff(3) : 1 == r ? 0 == e && this.updateBuff(2) : 0 == e && this.updateBuff(1);
}
l.tp.isChapterRevive_ProxyReviveFailPostProcessing(t) && 0 == e && s.chapterConfigInfo.getChapterProgress() >= u.chapterReviveCacheGameInfo.collectionProcessTarget && this.updateBuff(1);
if (l.tp.isChapterGameDataClear_Disk_ProxyResetDiskReviveData(t)) {
3 != e && 4 != e || this.updateBuff(0);
2 == e && t.target.type == p.GameOverDiskType.Over && this.updateBuff(0);
1 == e && i.storage.getItem("chapterNum", 0) >= s.chapterConfigInfo.chapterDatasCfg.length && this.updateBuff(0);
}
};
return n([ classId("ReviveBuffTrait") ], e);
}(c.Trait);
r.ReviveBuffTrait = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../vo/ChapterReviveCacheGameInfo": "ChapterReviveCacheGameInfo"
} ],
RoundConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "15065vvtuxAwawNGT08EMP8", "RoundConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.roundConfig = void 0;
r.roundConfig = [ {
id: 1,
round: 11
}, {
id: 2,
round: 15
}, {
id: 3,
round: 21
}, {
id: 4,
round: 12
}, {
id: 5,
round: 15
}, {
id: 6,
round: 22
}, {
id: 7,
round: 13
}, {
id: 8,
round: 14
}, {
id: 9,
round: 22
}, {
id: 10,
round: 12
}, {
id: 11,
round: 19
}, {
id: 12,
round: 23
}, {
id: 13,
round: 13
}, {
id: 14,
round: 17
}, {
id: 15,
round: 25
}, {
id: 16,
round: 14
}, {
id: 17,
round: 22
}, {
id: 18,
round: 27
}, {
id: 19,
round: 14
}, {
id: 20,
round: 21
}, {
id: 21,
round: 26
}, {
id: 22,
round: 12
}, {
id: 23,
round: 21
}, {
id: 24,
round: 26
}, {
id: 25,
round: 14
}, {
id: 26,
round: 21
}, {
id: 27,
round: 34
}, {
id: 28,
round: 13
}, {
id: 29,
round: 21
}, {
id: 30,
round: 34
}, {
id: 31,
round: 15
}, {
id: 32,
round: 24
}, {
id: 33,
round: 33
}, {
id: 34,
round: 13
}, {
id: 35,
round: 24
}, {
id: 36,
round: 33
}, {
id: 37,
round: 16
}, {
id: 38,
round: 29
}, {
id: 39,
round: 45
}, {
id: 40,
round: 17
}, {
id: 41,
round: 33
}, {
id: 42,
round: 43
}, {
id: 43,
round: 18
}, {
id: 44,
round: 33
}, {
id: 45,
round: 41
}, {
id: 46,
round: 15
}, {
id: 47,
round: 32
}, {
id: 48,
round: 44
}, {
id: 49,
round: 14
}, {
id: 50,
round: 12
}, {
id: 51,
round: 24
}, {
id: 52,
round: 17
}, {
id: 53,
round: 25
}, {
id: 54,
round: 28
}, {
id: 55,
round: 17
}, {
id: 56,
round: 17
}, {
id: 57,
round: 26
}, {
id: 58,
round: 14
}, {
id: 59,
round: 27
}, {
id: 60,
round: 27
}, {
id: 61,
round: 19
}, {
id: 62,
round: 20
}, {
id: 63,
round: 36
}, {
id: 64,
round: 18
}, {
id: 65,
round: 38
}, {
id: 66,
round: 41
}, {
id: 67,
round: 20
}, {
id: 68,
round: 29
}, {
id: 69,
round: 39
}, {
id: 70,
round: 17
}, {
id: 71,
round: 38
}, {
id: 72,
round: 42
}, {
id: 73,
round: 21
}, {
id: 74,
round: 25
}, {
id: 75,
round: 56
}, {
id: 76,
round: 20
}, {
id: 77,
round: 43
}, {
id: 78,
round: 51
}, {
id: 79,
round: 20
}, {
id: 80,
round: 31
}, {
id: 81,
round: 55
}, {
id: 82,
round: 16
}, {
id: 83,
round: 43
}, {
id: 84,
round: 48
}, {
id: 85,
round: 20
}, {
id: 86,
round: 37
}, {
id: 87,
round: 57
}, {
id: 88,
round: 22
}, {
id: 89,
round: 51
}, {
id: 90,
round: 60
}, {
id: 91,
round: 30
}, {
id: 92,
round: 38
}, {
id: 93,
round: 56
}, {
id: 94,
round: 17
}, {
id: 95,
round: 50
}, {
id: 96,
round: 57
} ];
cc._RF.pop();
}, {} ],
TravelAlgorithmNewDirectionBTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ffb3cVZR/tOLpMOB0iiUh+J", "TravelAlgorithmNewDirectionBTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelAlgorithmNewDirectionBTrait = void 0;
var i = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), l = t("../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), u = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), f = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), y = t("../../game/vo/ChapterGameInfo"), m = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isHardState = !1;
e.hardRadio = 0;
return e;
}
e.prototype.onActive = function(t) {
if (f.tp.isChapterAlgorithmStrategy_Deal_ProxyPostPreprocessing(t)) {
this.GetIdAry();
t.returnState = !0;
}
if (f.tp.isChapterBlockOutStrategy_ProxyModifyBlockOutResult(t) && p.algorithmName.algoActualName.includes("死亡难题")) {
var e = h.chapterConfigInfo.getChapterProgress();
this.hardRadio = e;
this.isHardState = !0;
this.setLocalData();
}
f.tp.isChapterDefaultBoard_ProxyOnProduceChapterDefaultBoard(t) && t.args[0].data.newGame && this.cleanData();
};
e.prototype.cleanData = function() {
this.hardRadio = 0;
this.isHardState = !1;
this.setLocalData();
};
e.prototype.GetIdAry = function() {
this.getLocalData();
var t = h.chapterConfigInfo.getChapterProgress(), e = d.chapterDifficultyInfo.chapterDifficultyList.get(y.chapterGameInfo.chapterNum);
if (d.chapterDifficultyInfo.isChapterSimple(e)) u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else if (d.chapterDifficultyInfo.isChapterMedium(e)) t < .4 ? u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]) : t < .8 ? u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.SUI_JI_WU_SI ]) : u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else if (d.chapterDifficultyInfo.isChapterDifficulty(e)) if (t < .4) u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]); else if (t < .8) {
this.isHardState ? u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.SUI_JI_WU_SI ]) : u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.KUN_NAN_TI ]);
this.setLocalData();
} else {
this.hardRadio < .8 && (this.isHardState = !1);
this.isHardState ? u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]) : u.algorithmStrategyInfo.setAlgorithmList([ s.OFFER_TYPE.KUN_NAN_TI ]);
this.setLocalData();
}
};
e.prototype.getLocalData = function() {
var t = i.storage.getItem("TravelAlgorithmNewDirectionB", {
isHardState: !1,
hardRadio: 0
});
if (t) {
this.isHardState = t.isHardState;
this.hardRadio = t.hardRadio;
} else {
this.isHardState = !1;
this.hardRadio = 0;
}
};
e.prototype.setLocalData = function() {
var t = {
isHardState: this.isHardState,
hardRadio: this.hardRadio
};
i.storage.setItem("TravelAlgorithmNewDirectionB", t);
};
n([ l.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("TravelAlgorithmNewDirectionBTrait") ], e);
}(c.Trait);
r.TravelAlgorithmNewDirectionBTrait = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
TravelCollectSingleColorTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e42b4kQfwVItrrulD2cXwRZ", "TravelCollectSingleColorTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelCollectSingleColorTrait = void 0;
var s = t("../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../scripts/modules/board/vo/BoardInfo"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../vo/ChapterColorProducerGameInfo"), h = t("../../../../../../scripts/base/storage/Storage"), f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._travelSingleColorNumber = 0;
return e;
}
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o;
return c(this, function() {
if (l.tp.isChapterDefaultBoard_ProxySetChapterColor(t)) {
this._travelSingleColorNumber = [ 1, 2, 5 ][Math.floor(3 * Math.random())];
if ((e = h.storage.getItem("chapterFaceBlocks", p.boardInfo.NULL)) && Array.isArray(e)) for (r = 0; r < e.length; r++) if (Array.isArray(e[r])) for (o = 0; o < e[r].length; o++) "number" == typeof e[r][o] && e[r][o] >= 1 && e[r][o] <= 7 && (e[r][o] = this._travelSingleColorNumber);
u.chapterColorProducerGameInfo.setColorList([ this._travelSingleColorNumber, this._travelSingleColorNumber, this._travelSingleColorNumber ]);
h.storage.setItem("chapterFaceBlocks", e);
}
if (l.tp.isChapterColorProducer_ProxyProduceColorBase(t)) {
0 == this._travelSingleColorNumber && (this._travelSingleColorNumber = [ 1, 2, 5 ][Math.floor(3 * Math.random())]);
u.chapterColorProducerGameInfo.setColorList([ this._travelSingleColorNumber, this._travelSingleColorNumber, this._travelSingleColorNumber ]);
t.replace = !0;
t.returnState = !0;
}
return [ 2 ];
});
});
};
return n([ classId("TravelCollectSingleColorTrait") ], e);
}(s.Trait);
r.TravelCollectSingleColorTrait = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../vo/ChapterColorProducerGameInfo": "ChapterColorProducerGameInfo"
} ],
TravelEasterEggTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e442aHyrNpCAKbYbCzCW9k6", "TravelEasterEggTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelEasterEggTrait = void 0;
var s = t("../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../components/ChapterCollectionProducterEasterEgg/ChapterCollectionProducterEasterEggPool"), u = t("../../../../../../scripts/base/storage/Storage"), h = t("../../../../../../scripts/modules/blocksProducer/type/BlocksProducerType"), f = t("../../collect/vo/ChapterCollectInfo"), d = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), y = t("../components/ChapterCollectionProducterEasterEgg/ChapterCollectionProducterEasterEgg"), m = t("../../../../../../scripts/base/numbers/numbers"), _ = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
p.tp.isChapterGame_ProxyOnStartGame(t) && this.initEasterEggPool();
if (p.tp.isChapterCollectionProducer_ProxyChangeCollection(t)) {
if (!this.isCanWork()) return;
if (!this.setEasterEggId()) return;
}
if (p.tp.isChapterTopInfo_CollectEffect_ProxyOnTouchEnd(t)) {
if (!this.isCanWork()) return;
var e = t.args[0].state, r = e.eliminateInfos, o = e.color;
if (r && Object.keys(r).length > 0) {
var a = f.chapterCollectInfo.collectRemainCollectItems;
for (var n in r) for (var i in r[n]) {
var c = r[n][i], s = c.color, l = c.node;
if (s === h.CollectionType.Gems107) {
var u = l.parent.convertToWorldSpaceAR(l.position);
this.showEasterEggEliminateEffect(u);
r[n][i].color = o;
for (var d in a) r[n][i + d] = {
node: l,
color: +d
};
}
}
}
t.args[0].state.eliminateInfos = r;
}
if (p.tp.isChapterCollect_ProxyOnTouchEnd(t)) {
if (!this.isCanWork()) return;
a = f.chapterCollectInfo.collectRemainCollectItems;
var y = t.args[0].state.collectItems;
if (y[107] && y[107] > 0) {
var m = y[107];
delete y[107];
for (var d in a) y[d] = (y[d] || 0) + m;
}
t.args[0].state.collectItems = y;
}
};
e.prototype.initEasterEggPool = function() {
l.easterEggPool.isInit || l.easterEggPool.initPool();
};
e.prototype.isCanWork = function() {
l.easterEggPool.isInit || l.easterEggPool.initPool();
return l.easterEggPool.isInit;
};
e.prototype.setEasterEggId = function() {
for (var t = 0, e = this.props.produceEasterEggPro, r = u.storage.getItem("chapterCollectionLists", []), o = 0; o < r.length; o++) {
var a = r[o], n = Object.keys(a);
if (100 * Math.random() <= e && t < 2 && n.length > 0) {
var i = a[n[m.randomInt(0, n.length - 1)]];
i.Key && (i.Key = 107);
t++;
}
r[o] = a;
}
t > 0 && u.storage.setItem("chapterCollectionLists", r);
return t > 0;
};
e.prototype.showEasterEggEliminateEffect = function(t) {
return i(this, void 0, void 0, function() {
var e;
return c(this, function(r) {
switch (r.label) {
case 0:
return [ 4, l.easterEggPool.createEnemy() ];

case 1:
if (e = r.sent()) {
d.gameEffectLayer.addChild(e);
e.setPosition(t);
e.getComponent(y.default).play();
}
return [ 2 ];
}
});
});
};
return n([ classId("TravelEasterEggTrait") ], e);
}(s.Trait);
r.TravelEasterEggTrait = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/numbers/numbers": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/blocksProducer/type/BlocksProducerType": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../components/ChapterCollectionProducterEasterEgg/ChapterCollectionProducterEasterEgg": "ChapterCollectionProducterEasterEgg",
"../components/ChapterCollectionProducterEasterEgg/ChapterCollectionProducterEasterEggPool": "ChapterCollectionProducterEasterEggPool"
} ],
TravelHappyOverTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "71ddaiW0mVM24fFGVBFHjs0", "TravelHappyOverTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, c = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, a, n = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (a) throw a.error;
}
}
return i;
}, s = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelHappyOverTrait = void 0;
var p = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), h = t("../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), f = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), d = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = t("../../collect/vo/ChapterCollectInfo"), m = t("../../game/vo/ChapterGameInfo"), _ = t("../../../../../../scripts/base/storage/Storage"), v = t("../../algorithm/vo/ChapterAlgorithmInfo"), g = t("../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig"), C = t("../../../../../../scripts/modules/game/vo/GameInfo"), b = t("../../../../../../scripts/modules/game/type/GameType"), P = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), S = t("../../../../../../scripts/modules/score/vo/ScoreInfo"), I = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo"), T = t("../../../../../../scripts/base/arrays/arrays"), E = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e, r;
if (d.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithmTrait(t) && this.isOfferStep()) {
h.algorithmStrategyInfo.setAlgorithmSourceLevel1(u.ChapterAlgorithmSourceType.TravelTrait);
var o = this.getHardIdByRandomHard();
h.algorithmStrategyInfo.setAlgorithmList(o);
h.algorithmStrategyInfo.setAlgorithmTimeOut(50);
h.algorithmStrategyInfo.setAlgorithmFailList([ l.OFFER_TYPE.SHANG_ZENG_3, l.OFFER_TYPE.SUI_JI_WU_SI ]);
h.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
t.returnState = !0;
}
if (d.tp.isAlgorithmSDKTraitInfoOnChapterLimitSmall(t)) {
if (C.gameInfo.gameMode != b.GameMode.Chapter) return;
P.algorithmName.algoActualId != l.OFFER_TYPE.HEJI_KUN_NAN_TI && P.algorithmName.algoActualId != l.OFFER_TYPE.HEJI_ALGORITHMENTROPY && P.algorithmName.algoActualId != l.OFFER_TYPE.HEJI_ALGORITHMENTROPYMORECLEAR && P.algorithmName.algoActualId != l.OFFER_TYPE.HEJI_ALGODIFFSPREAD1 && P.algorithmName.algoActualId != l.OFFER_TYPE.HEJI_ALGODIFFSPREAD2 || (S.scoreInfo.score >= 2e3 ? I.algorithmSDKTraitInfo.setLimitBlock(!0) : I.algorithmSDKTraitInfo.setLimitBlock(!1));
}
if (d.tp.isChapterCollectionProducer_ProxyProduceCollection(t) && this.isOfferStep()) {
var a = [], n = [], c = f.chapterConfigInfo.chapterDatasCfg[m.chapterGameInfo.chapterNum].Condition.RequiredCollections, p = y.chapterCollectInfo.collectRemainCollectItems;
try {
for (var T = i(c), E = T.next(); !E.done; E = T.next()) {
var O = E.value, A = p[O.Key];
if (0 != A) {
a.push(O.Key);
n.push(A);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
E && !E.done && (r = T.return) && r.call(T);
} finally {
if (e) throw e.error;
}
}
for (var R = [], w = 0; w < 3; w++) {
var G = n.indexOf(Math.max.apply(Math, s(n)));
if (n[G] <= 0) R.push({}); else {
var x = g.AlgorithmPosType[v.chapterAlgorithmInfo.blockIdList[w]];
n[G] -= x.length;
for (var k = {}, B = 0; B < x.length; B++) k[B] = {
Key: a[G],
pos: B
};
R.push(k);
}
}
var M = [].concat(R);
_.storage.setItem("chapterCollectionLists", M);
t.returnState = !0;
t.replace = !0;
var D = TRAIT("IsOpenCollectLevelOfferNormalAndGemTrait");
(null == D ? void 0 : D.active) && D.recordTravelHappyOver();
}
};
e.prototype.isOfferStep = function() {
var t, e;
if (C.gameInfo.gameMode == b.GameMode.Chapter) {
var r = f.chapterConfigInfo.chapterDatasCfg[m.chapterGameInfo.chapterNum].Condition.RequiredCollections, o = 0;
try {
for (var a = i(r), n = a.next(); !n.done; n = a.next()) {
var c = n.value;
0 == y.chapterCollectInfo.getRemainCollectNum(c.Key) && o++;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
return o != r.length && o > 0;
}
};
e.prototype.getHardIdByRandomHard = function() {
var t = [ l.OFFER_TYPE.HEJI_KUN_NAN_TI, l.OFFER_TYPE.HEJI_ALGORITHMENTROPY, l.OFFER_TYPE.HEJI_ALGORITHMENTROPYMORECLEAR, l.OFFER_TYPE.HEJI_KUN_NAN_TI, l.OFFER_TYPE.HEJI_ALGODIFFSPREAD1, l.OFFER_TYPE.HEJI_ALGODIFFSPREAD2 ];
return T.shuffleArray(t);
};
return n([ classId("TravelHappyOverTrait") ], e);
}(p.Trait);
r.TravelHappyOverTrait = E;
cc._RF.pop();
}, {
"../../../../../../scripts/base/arrays/arrays": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmPosConfig": void 0,
"../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo": void 0,
"../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../algorithm/vo/ChapterAlgorithmInfo": "ChapterAlgorithmInfo",
"../../collect/vo/ChapterCollectInfo": "ChapterCollectInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
TravelResultOptimizingTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9cdbcSzgvZCHLjTid041kiu", "TravelResultOptimizingTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, s = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelResultOptimizingTrait = void 0;
var p = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../chapterList/vo/ChapterListInfo"), f = t("../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo"), d = t("../../game/vo/ChapterGameInfo"), y = t("../../../../../../scripts/base/storage/Storage"), m = t("../../../../../../scripts/modules/prefab/PrefabConfig"), _ = t("../../chapterList/components/ChapterItem"), v = t("../../../../../../scripts/base/cache/CacheRender"), g = t("../../chapterList/config/ChapterListConfig"), C = t("../../../../../../scripts/base/audio/AudioInfo"), b = t("../../audio/config/ChapterAudioConfig"), P = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemList = [];
e.levelCount = 0;
return e;
}
e.prototype.onActive = function(t) {
var e, r;
if (u.tp.isReduceTravelSettlementTraitPlayCollectWinScoreEffectBoneAni(t)) {
var o = t.args[0];
if (!o) return;
var a = o.node;
if (!cc.isValid(a)) return;
if (this.isHard()) {
var n = a.getChildByName("ResultOptimizing_UI");
cc.isValid(n) && (n.active = !1);
return;
}
this.loadItem(a);
C.audioInfo.play(b.ChapterAudioConfig.travel_win_logo);
cc.tween(a).delay(0).call(function() {
o.showOtherTraitAnim();
}).delay(1.2).call(function() {
o.showBtnAnim();
}).start();
t.replace = !0;
}
if (u.tp.isReduceTravelSettlementTraitPlayScoreWinEffectBoneAni(t)) {
var i = t.args[0];
if (!i) return;
a = i.node;
if (!cc.isValid(a)) return;
if (this.isHard()) {
n = a.getChildByName("ResultOptimizing_UI");
cc.isValid(n) && (n.active = !1);
return;
}
this.loadItem(a);
cc.tween(a).delay(0).call(function() {
i.showOtherTraitAnim();
}).delay(1.2).call(function() {
i.showBtnAnim();
}).start();
t.replace = !0;
}
if (u.tp.isGateWinStreakStateTrait_adjustChildrenPosition(t)) {
var c = t.args[0], p = t.args[1];
try {
for (var l = s(c.node.children), h = l.next(); !h.done; h = l.next()) {
var f = h.value;
"backBtn" !== f.name && "bg" !== f.name && "ResultOptimizing_UI" !== f.name && "bg1" !== f.name && (f.y += p);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
h && !h.done && (r = l.return) && r.call(l);
} finally {
if (e) throw e.error;
}
}
t.replace = !0;
}
};
e.prototype.isHard = function() {
var t = f.chapterDifficultyInfo.chapterDifficultyList.get(d.chapterGameInfo.chapterNum - 1);
return !!f.chapterDifficultyInfo.isChapterDifficulty(t);
};
e.prototype.loadItem = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i, s, p, u, h, f, d, y, C, b = this;
return c(this, function(c) {
switch (c.label) {
case 0:
this.itemList = [];
this.levelCount = 0;
e = t.getChildByName("ResultOptimizing_UI");
if (!cc.isValid(e)) {
(e = new cc.Node("ResultOptimizing_UI")).scale = .5;
(null == (r = TRAIT("GateWinStreakStateTrait")) ? void 0 : r.active) ? e.y = -350 : e.y = -250;
e.parent = t;
}
e.active = !0;
e.stopAllActions();
o = l.chapterConfigInfo.chapterListCfg;
a = o.length;
n = o[0].length;
i = g.ChapterListConfig.itemHeight;
o.forEach(function(t) {
t.forEach(function(t) {
-1 !== t && b.levelCount++;
});
});
return [ 4, v.cacheRender.createOrUpdateCacheListComponents({
tag: "TravelResultOptimizing",
parent: e,
prefabUrl: m.PrefabConfig.ChapterItem.url,
count: this.levelCount,
typeOrClassName: _.default,
bundleName: "chapter"
}) ];

case 1:
s = c.sent();
p = 0;
for (u = a - 1; u >= 0; u--) {
h = a % 2;
for (f = 0; f < o[u].length; f++) if (-1 != (d = o[u][f])) {
y = 0 != h ? cc.v3(-Math.floor(n / 2) * i + i * f, 250 + (a - u) * i) : cc.v3(-n / 2 * i + i / 2 + i * f, 250 + (a - u) * i);
if (C = s[p]) {
p++;
C.node.setPosition(y);
C.setState({
levelNum: p,
color: d,
showColor: !1,
isShowAnimation: !1,
isThrough: !1,
isOpacityAni: !1
});
this.itemList.push(C);
}
}
}
this.setItemListOrder(e);
return [ 2 ];
}
});
});
};
e.prototype.getItemListColor = function() {
for (var t = l.chapterConfigInfo.chapterListCfg, e = [], r = t.length - 1; r >= 0; r--) for (var o = 0; o < t[r].length; o++) -1 != t[r][o] && e.push(t[r][o]);
return e;
};
e.prototype.setItemListOrder = function(t) {
var e = d.chapterGameInfo.lastChapterNum, r = y.storage.getItem("chapterPeriodsIndex", 1), o = this.getItemListColor();
if (1 == l.chapterConfigInfo.way[0]) {
var a = h.chapterListInfo.stageItemOrderList;
if (a.stage == r && a.orderList.length > 0) {
for (var n = [], i = 0; i < a.orderList.length; i++) n.push(this.itemList[a.orderList[i]]);
this.itemList = n;
var c = [];
for (i = 0; i < a.orderList.length; i++) c.push(o[a.orderList[i]]);
o = c;
} else {
var s = [];
for (i = 0; i < this.itemList.length; i++) s.push(i);
s.sort(function() {
return Math.random() - .5;
});
for (n = [], i = 0; i < s.length; i++) n.push(this.itemList[s[i]]);
for (c = [], i = 0; i < s.length; i++) c.push(o[s[i]]);
o = c;
this.itemList = n;
}
} else if (2 == l.chapterConfigInfo.way[0]) {
var p = l.chapterConfigInfo.order, u = [];
for (c = [], i = 0; i < p.length; i++) for (var f = 0; f < o.length; f++) if (o[f] == p[i]) {
u.push(f);
c.push(o[f]);
}
for (n = [], i = 0; i < u.length; i++) n.push(this.itemList[u[i]]);
o = c;
this.itemList = n;
}
for (i = 0; i < this.itemList.length; i++) this.itemList[i].setState({
levelNum: i + 1,
color: o[i],
showColor: i + 1 <= e
});
this.moveChapter(t);
};
e.prototype.moveChapter = function(t) {
var e = this, r = d.chapterGameInfo.chapterNum, o = d.chapterGameInfo.lastChapterNum, a = r - o, n = !1;
d.chapterGameInfo.isThroughAll && (n = !0);
if (a <= 0) {
for (var i = 0; i < this.itemList.length; i++) {
var c = this.itemList[i];
i < o ? c.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
}) : c.setState({
isStopAllAction: !0,
isShowAnimation: !1,
isOpacityAni: !1
});
}
n || y.storage.setItem("lastChapterNum", d.chapterGameInfo.chapterNum);
} else {
var s = r - 1, p = function(r) {
var a = l.itemList[r];
r < o ? a.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
}) : r <= s && cc.tween(t).delay(.07 * (r - o + 1)).call(function() {
e.itemList[r].setState({
isShowAnimation: !0,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
r != s || n || y.storage.setItem("lastChapterNum", d.chapterGameInfo.chapterNum);
}).start();
}, l = this;
for (i = 0; i < this.itemList.length; i++) p(i);
}
};
return n([ classId("TravelResultOptimizingTrait") ], e);
}(p.Trait);
r.TravelResultOptimizingTrait = P;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/cache/CacheRender": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../audio/config/ChapterAudioConfig": "ChapterAudioConfig",
"../../chapterList/components/ChapterItem": "ChapterItem",
"../../chapterList/config/ChapterListConfig": "ChapterListConfig",
"../../chapterList/vo/ChapterListInfo": "ChapterListInfo",
"../../difficultyStrategy/vo/ChapterDifficultyStrategyGameInfo": "ChapterDifficultyStrategyGameInfo",
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
TravelResultTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ba415z2z4RMQomA7VzLrK1m", "TravelResultTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelResultTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), s = t("../proxys/ChapterWin_Proxy"), p = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isChapterWin_ProxyChapterWinPanelShowFinished(t) && t.args[0] === s.ChapterWinType.chapterCollectWin && (t.args[1].delayInterval = 0);
};
return n([ classId("TravelResultTrait") ], e);
}(i.Trait);
r.TravelResultTrait = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../proxys/ChapterWin_Proxy": "ChapterWin_Proxy"
} ],
TravelWordOptTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "014b8ryLb1Gka0yI6D5byVr", "TravelWordOptTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelWordOptTrait = void 0;
var i = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/modules/board/components/Board"), s = t("../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), p = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), l = t("../../../../../../scripts/modules/encourage/type/EncourageType"), u = t("../../../../../../scripts/modules/game/type/GameType"), h = t("../../../../../../scripts/modules/game/vo/GameInfo"), f = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../game/vo/ChapterGameInfo"), y = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.collectItemAmount = 0;
e.chapterNum = 0;
e.eliminateCount = -1;
e.conditionWay = s.ChapterType.collect;
return e;
}
e.prototype.onActive = function(t) {
if (h.gameInfo.gameMode == u.GameMode.Chapter) {
this.chapterNum = d.chapterGameInfo.chapterNum;
this.conditionWay = p.chapterConfigInfo.chapterDatasCfg[this.chapterNum].Condition.Way;
if (this.conditionWay == s.ChapterType.collect) {
if (f.tp.isChapterCollect_ProxyOnTouchEnd(t)) {
this.collectItemAmount = 0;
this.eliminateCount = -1;
var e = t.args[0].state.collectItems;
for (var r in e) this.collectItemAmount += e[r];
if (this.collectItemAmount > 1) switch (this.collectItemAmount) {
case 2:
this.eliminateCount = 2;
break;

case 3:
this.eliminateCount = 3;
break;

case 4:
this.eliminateCount = 4;
break;

default:
this.eliminateCount = 6;
}
}
if (f.tp.isChapterEncourage_ProxyOnTouchEnd(t)) if (this.collectItemAmount > 1) {
t.replace = !0;
var o = Math.min(5, Math.max(0, this.eliminateCount - 2));
t.args[0].state.promptType = l.EncouragePromptType["PROMPT" + o];
} else t.args[0].state.promptType = l.EncouragePromptType.PROMPT_NONE;
f.tp.isChapterEncourage_ProxyOnEncouragePlayCondition(t) && (this.collectItemAmount > 1 ? t.args[0].state.shouldPlay = !0 : t.args[0].state.shouldPlay = !1);
f.tp.isChapterEncourage_ProxyOnEncourageSoundPlay(t) && this.collectItemAmount > 1 && (t.args[0].state.eliminateCount = this.eliminateCount);
if (f.tp.isChapterEncourage_ProxyOnSetEffectPos(t) && this.collectItemAmount > 1) {
var a = Cinst(c.default);
if (a) {
var n = 15;
this.collectItemAmount >= 4 && (n = 20);
var i = t.args[0].state.effectPos;
if (i.x + a.node.position.x - n <= -a.node.width / 2) {
i.x = -a.node.width / 2 + n;
i.y = i.y + 100;
} else if (i.x + a.node.position.x + n >= a.node.width / 2) {
i.x = a.node.width / 2 - n;
i.y = i.y + 100;
} else {
i.x = i.x + a.node.x;
i.y = i.y + 100;
}
}
}
f.tp.isChapterEncourage_ProxyOnPlayLevelColor(t) && this.collectItemAmount > 1 && (t.args[0].state.eliminateCount = this.eliminateCount);
f.tp.isChapterEncourage_ProxyOnPlayComboScoreTipNodeAnimation(t) && this.collectItemAmount > 1 && (t.args[0].state.isPlay = !1);
}
}
};
return n([ classId("TravelWordOptTrait") ], e);
}(i.Trait);
r.TravelWordOptTrait = y;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/encourage/type/EncourageType": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo"
} ],
Travel_pass_animationTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fd41dU3JQVLDKQf8lCLHoKO", "Travel_pass_animationTrait");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var a, n = arguments.length, i = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, r, i) : a(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(a, n) {
function i(t) {
try {
s(o.next(t));
} catch (t) {
n(t);
}
}
function c(t) {
try {
s(o.throw(t));
} catch (t) {
n(t);
}
}
function s(t) {
t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(i, c);
var e;
}
s((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, a, n, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function c(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
i.label++;
return {
value: n[1],
done: !1
};

case 5:
i.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
i = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
i.label = n[1];
break;
}
if (6 === n[0] && i.label < a[1]) {
i.label = a[1];
a = n;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(n);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
n = e.call(t, i);
} catch (t) {
n = [ 6, t ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Travel_pass_animationTrait = void 0;
var s = t("../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../components/ChapterList"), u = t("../../../../../../scripts/base/events/Events"), h = t("../../../../../../scripts/falcon/EventManager"), f = t("../../../../../../scripts/modules/chapterConfig/events/E_ChapterConfig_Load"), d = t("../vo/ChapterChapterListScreenshotInfo"), y = t("../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), m = t("../../game/vo/ChapterGameInfo"), _ = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isClickStartGame = !1;
e._isRunAnimation = !1;
e._isClickContinue = !1;
e._onDidChangeAnimComplete = new u.Emitter();
e.onDidChangeAnimCompleteEmitter = e._onDidChangeAnimComplete;
return e;
}
e.prototype.onActive = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i, s, u, h, f, d = this;
return c(this, function() {
if (p.tp.isChapterListOnClickStartGame(t)) {
if (y.chapterConfigInfo.isOverChapterMaxNum) return [ 2 ];
if ((u = t.target).state.isThrough) {
t.replace = !0;
this._isClickStartGame = !0;
this._btnHideAnimation(u);
} else this._onDidChangeAnimComplete.fire();
}
p.tp.isChapterList_ProxyChapterWinShow(t) && storage.setItem("classTravelPassGameOver", !0);
if (p.tp.isChapterContentMoveChapter(t)) {
e = t.target;
r = e.node.parent.parent.getComponent(l.default);
o = r.state.isThrough;
f = storage.getItem("classTravelPassGameOver", !1);
if (!this._isClickStartGame && o && f && !this._isClickContinue) {
storage.setItem("lastChapterNum", m.chapterGameInfo.chapterNum);
this._isClickStartGame = !1;
storage.setItem("classTravelPassGameOver", !1);
for (a = 0; a < e.itemList.length; a++) {
n = e.itemList[a];
i = null;
"function" == typeof e.getLevelTextComp && (i = e.getLevelTextComp(a));
i.setState({
opacity: 0
});
n.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
}
r.node.stopAllActions();
cc.tween(r).delay(.5).call(function() {
d._runAnimation(r);
}).start();
t.replace = !0;
} else o || storage.setItem("lastChapterNum", m.chapterGameInfo.chapterNum);
this._isClickStartGame = !1;
this._isClickContinue = !1;
}
if (p.tp.isChapterListSetChapterBtnState(t)) {
s = storage.getItem("classTravelPassGameOver", !1);
if ((u = t.target).state.isThrough && s && !this._isClickContinue) {
u.nextTip.active = !1;
u.chapterBtn.active = !1;
t.replace = !0;
} else if (this._isRunAnimation) {
this._isRunAnimation = !1;
u.nextTip.active = !1;
u.chapterLb.node.active = !0;
h = u.state.curChapter + 1;
u.chapterLb.string = "+" + h;
t.replace = !0;
}
}
p.tp.isChapterCollectWinOnCompleteGame(t) && (this._isClickContinue = !0);
p.tp.isChapterScoreWinOnCompleteGame(t) && (this._isClickContinue = !0);
p.tp.isChapterListResetChapterState(t) && (f = storage.getItem("classTravelPassGameOver", !1)) && (t.args[0].isNewLevel = !t.args[1]);
p.tp.isChapterList_ProxySetItemChapterNum(t) && (t.replace = !0);
return [ 2 ];
});
});
};
e.prototype._runAnimation = function(t) {
return i(this, void 0, void 0, function() {
var e, r, o, a, n, i, s, p = this;
return c(this, function(c) {
switch (c.label) {
case 0:
if (!(e = t.midContainer.getChildByName("ChapterContent"))) return [ 3, 6 ];
this._isRunAnimation = !0;
storage.setItem("lastChapterNum", m.chapterGameInfo.chapterNum);
c.label = 1;

case 1:
c.trys.push([ 1, 4, , 5 ]);
r = {
scale: 1,
quality: .7,
format: "png",
transparent: !0,
disableMask: !0
};
return [ 4, d.chapterChapterListScreenshotInfo.captureNode(e, r) ];

case 2:
o = c.sent();
a = t.midContainer.getChildByName("Travel_pass_animation_screenshot");
if (o && o.spriteFrame) if (a) {
a.getComponent(cc.Sprite).spriteFrame = o.spriteFrame;
a.active = !0;
a.setPosition(-a.width, 0, 0);
} else {
(a = d.chapterChapterListScreenshotInfo.createScreenshotNode(o.spriteFrame, t.midContainer)).name = "Travel_pass_animation_screenshot";
a.active = !0;
a.setPosition(-a.width, 0, 0);
}
e.active = !1;
return [ 4, h.EventManager.dispatchModuleEventAsync(new f.E_ChapterConfig_Load()) ];

case 3:
c.sent();
(n = t) && n.setState({
curChapter: 0,
lastChapter: 0,
isThrough: !1,
isForceDraw: !0
});
e.active = !0;
e.opacity = 0;
i = t.chapterBtn;
cc.tween(i).to(.1, {
opacity: 0
}).start();
a && t.midContainer.setPosition(a.width, 0, 0);
s = t.midContainer.position;
cc.tween(t.midContainer).to(.47, {
position: new cc.Vec3(0, 0, s.z)
}, {
easing: "quadInOut"
}).call(function() {
a && a.destroy();
p._btnShowAnimation(t);
}).start();
return [ 3, 5 ];

case 4:
c.sent();
return [ 3, 5 ];

case 5:
return [ 3, 7 ];

case 6:
c.label = 7;

case 7:
return [ 2 ];
}
});
});
};
e.prototype._btnHideAnimation = function(t) {
var e = this, r = t.chapterBtn;
r.active = !0;
r && cc.tween(r).set({
scale: 1,
opacity: 255
}).to(.23, {
scale: 1.12
}).to(.2, {
scale: 1,
opacity: 0
}).call(function() {
e._runAnimation(t);
}).start();
};
e.prototype._btnShowAnimation = function(t) {
var e = this, r = t.chapterBtn;
r.active = !0;
r && cc.tween(r).set({
scale: .6,
opacity: 0
}).set({
active: !0
}).to(.2, {
scale: 1.12,
opacity: 255
}).to(.23, {
scale: 1
}).call(function() {
r.getComponent(cc.Button).interactable = !0;
e._onDidChangeAnimComplete.fire();
}).start();
};
return n([ classId("Travel_pass_animationTrait") ], e);
}(s.Trait);
r.Travel_pass_animationTrait = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/events/Events": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/chapterConfig/events/E_ChapterConfig_Load": void 0,
"../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../game/vo/ChapterGameInfo": "ChapterGameInfo",
"../components/ChapterList": "ChapterList",
"../vo/ChapterChapterListScreenshotInfo": "ChapterChapterListScreenshotInfo"
} ],
TryTimeConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "08ae9Qr0ntHQqBc4G19dNLt", "TryTimeConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.tryTimeConfig = void 0;
r.tryTimeConfig = [ {
tryTimes: [ 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 3, 3, 3, 4, 4, 4, 4, 4, 10, 11, 12, 18, 3, 4, 4, 5, 6, 6, 7, 9, 13, 20, 22, 20, 5, 4, 4, 5, 7, 7, 3, 4, 7, 10, 13, 25, 1, 1 ],
id: 1
} ];
cc._RF.pop();
}, {} ]
}, {}, [ "ChapterMain", "Chapter_ModuleList", "ChapterGBM_Module", "ChapterGBM_Proxy", "ChapterAdvertisement_Module", "E_ChapterAdvertisement_Show", "ChapterAdvertisement_Banner_Proxy", "ChapterAdvertisement_FullScreenProxy", "ChapterAdvertisement_RewardProxy", "AdLevelTrait", "ChapterAdvertisementType", "ChapterAdvertisementGameInfo", "ChapterAlgorithmHardData", "ChapterAlgorithmInfo", "ChapterAlgorithmName", "ChapterAlgorithmStrategy_Module", "ChapterAlgorithmStrategyDiffTypeConfig", "RoundConfig", "TryTimeConfig", "E_ChapterAlgorithmStrategy_BlocksPos", "E_ChapterAlgorithmStrategy_Deal", "E_ChapterAlgorithmStrategy_Replace", "E_ChapterAlgorithmStrategy_Reset", "E_ChapterAlgorithmStrategy_Run", "E_ChapterAlgorithmStrategy_RunState", "ChapterAlgorithmStrategyInterface", "ChapterAlgorithmStrategy_BlocksPos_Proxy", "ChapterAlgorithmStrategy_Deal_Proxy", "ChapterAlgorithmStrategy_Init_Proxy", "ChapterAlgorithmStrategy_Replace_Proxy", "ChapterAlgorithmStrategy_Reset_Proxy", "ChapterAlgorithmStrategy_Run_Proxy", "FastTkxcHelpTravelTrait", "IsIncreaseEnjoyCollectionTrait", "IsOpenCollectLevelOfferNormalAndGemTrait", "LevelExpAlgorithmTrait", "LevelLoopTrait", "LevelRandomReplaceTrait", "RatioAdjustTrait", "TravelAlgorithmNewDirectionBTrait", "TravelHappyOverTrait", "ChapterAlgoStrategyTrait", "LevelHelpStateTrait", "LevelPiecesThreeRanTrait", "LevelWayHelpConfigTrait", "LevelWayHelpTrait", "ChapterAlgorithmStrategyType", "ChapterAlgorithmStrategyGameInfo", "ChapterAudio_Module", "ChapterAudioConfig", "ChapterAudio_Proxy", "ChapterBackSpace_Module", "ChapterBackSpace_Proxy", "ChapterBlockOutStrategy_Module", "E_ChapterBlockOutStrategy_Exe", "ChapterBlockOutStrategy_Proxy", "ChapterBlockOutStrategyGameInfo", "ChapterBlocksProducer_Module", "ChapterBlocksProducer_BlocksProducerValidate_Proxy", "ChapterBlocksProducer_Proxy", "ChapterBlocksProducer_Render_Proxy", "ChapterBlocksProducer_Revive_Proxy", "ChapterBlocksProducer_RoundDot_Proxy", "ChapterBlocksProducer_Round_Proxy", "ChapterBlocksProducer_Run_Proxy", "ChapterBlocksProducer_TouchDot_Proxy", "AlloBlockStateTrait", "ChapterBlocksProducerInfo", "ChapterBoard_Module", "E_ChapterBoard_CanPutValidateStart", "E_ChapterBoard_Render", "ChapterBoard_CanPutValidate_Proxy", "ChapterBoard_Proxy", "ChapterBoardInfo", "ChapterBoardSplashAnimation_Module", "ChapterBoardSplashAnimation_Proxy", "ChapterList_Module", "ChapterContent", "ChapterCurSeat", "ChapterItem", "ChapterLevelTxt", "ChapterList", "ChapterThroughCupBone", "RepeatPreviewComponent", "ChapterListConfig", "E_ChapterList_Select", "E_ChapterList_Show", "ChapterList_Proxy", "BPuzzleTimeTrait", "IsOPenLevelSceneEffectTrait", "Travel_pass_animationTrait", "ChapterChapterListScreenshotInfo", "ChapterListInfo", "ChapterCollect_Module", "E_ChapterCollect_Reset", "E_ChapterCollect_Update", "CollectUpdateInterface", "ChapterCollect_Proxy", "CollectUpdateType", "ChapterCollectInfo", "ChapterCollectItem_Module", "ChapterCollectEffectItem", "ChapterCollectEndItem", "ChapterCollectTopEffectItem", "ChapterCollectTopItem", "ChapterCollectItemCfg", "ChapterCollectEndPool", "ChapterCollectTopEffectPool", "ChapterCollectTopPool", "ChapterCollectItem_Proxy", "ChapterCollectionProducer_Module", "ChapterCollectionProducterEasterEgg", "ChapterCollectionProducterEasterEggPool", "E_ChapterCollectionProducer_Exe", "ChapterCollectionProducer_Proxy", "IsTravelMoreDiamondAwardTrait", "MultiElementCollectTrait", "PureGemTrait", "TravelEasterEggTrait", "ChapterCollectionProducerGameInfo", "ChapterCollectionProducerITMDAInfo", "ChapterColorProducer_Module", "E_ChapterColorProducer_Exe", "ChapterColorProducer_Proxy", "TravelCollectSingleColorTrait", "ChapterColorProducerGameInfo", "ChapterCombo_Module", "ChapterCombo_Proxy", "ChapterComboInfo", "ChapterComboScoreTip_Module", "ChapterComboScoreTip_Proxy", "ChapterDataStatistics_Module", "E_ChapterDataStatistics_Clear", "E_ChapterDataStatistics_Count", "ChapterDataStatisticsInterface", "ChapterDataStatistics_AddUsrDataGameEnd_Proxy", "ChapterDataStatistics_Ecpm_Proxy", "ChapterDataStatistics_Proxy", "ChapterDataStatistics_Time_Proxy", "ChapterDataStatisticsInfo", "ChapterDefaultBoard_Module", "E_ChapterDefaultBoard_ReadyComplete", "ChapterDefaultBoard_Proxy", "ChapterDefaultBoardInfo", "ChapterDifficultyStrategy_Module", "E_ChapterDifficultyStrategy_Event", "ChapterDifficultyStrategy_Proxy", "ChapterDifficultyStrategyType", "ChapterDifficultyStrategyGameInfo", "ChapterEliminate_Module", "ChapterEliminate_Effects_Proxy", "Eliminate_ChapterSound_Proxy", "ChapterEncourage_Module", "ChapterEncourage_Proxy", "TravelWordOptTrait", "ChapterFail_Module", "ChapterCollectFail", "ChapterScoreFail", "ChapterFailConfig", "E_ChapterFail_Hide", "E_ChapterFail_Show", "ChapterFail_Proxy", "IsOpenLevelOverTipsChangeTrait", "ChapterFontConfig", "ChapterGame_Module", "ChapterGame", "PercentStreamer", "E_ChapterGame_GameReplayDataCleared", "E_ChapterGame_GameReplayReady", "ChapterGame_Dot_Proxy", "ChapterGame_GameInfoUpdate_Proxy", "ChapterGame_Native_Proxy", "ChapterGame_Proxy", "ChapterGame_Ready_Proxy", "ChapterGame_Replay_Proxy", "PercentStreamerTrait", "ChapterGameInfo", "ChapterGameDataClear_Module", "E_ChapterGameDataClear_Disk", "E_ChapterGameDataClear_Memory", "ChapterGameDataClear_Disk_Proxy", "ChapterGameDataClear_Memory_Proxy", "ChapterGameOver_Module", "GateWinStreakState", "E_ChapterGameOver_ShowFinish", "ChapterGameOver_GameEndPre_Proxy", "ChapterGameOver_GameEnd_Dot_Proxy", "ChapterGameOver_GameEnd_Proxy", "ChapterGameOver_Proxy", "GateWinStreakStateTrait", "ReduceTravelSettlementTrait", "ChapterGameOverType", "ChapterGameOverGameInfo", "ChapterGoal_Module", "ChapterGoal", "ChapterGoalCollect", "ChapterGoalScore", "E_ChapterGoal_playOver", "ChapterGoal_Proxy", "ChapterKSpeed_Module", "ChapterKSpeed_Proxy", "ChapterPrefabConfig", "ChapterRevive_Module", "E_ChapterRevive_Check", "ChapterReviveInterface", "ChapterRevive_Dot_Proxy", "ChapterRevive_Proxy", "ChapterRevive_Statistics_Proxy", "LevelReviveCondiTrait", "LevelReviveCountTrait", "LevelReviveTrait", "ReviveBuffTrait", "ChapterReviveCacheGameInfo", "ChapterReviveGameInfo", "ChapterReviveStatisticsInfo", "ChapterScore_Module", "ChapterScoreConfig", "E_ChapterScore_Reset", "E_ChapterScore_Update", "ChapterScoreInterface", "ChapterScore_Proxy", "CTChapterScoreComboTrait", "ChapterCollectScoreFixedTrait", "ChapterScoreInfo", "ChapterSkin_Module", "E_ChapterSkin_GameBackBtn", "E_ChapterSkin_GameBg", "E_ChapterSkin_SetupBtn", "ChapterSkin_Board_Proxy", "ChapterSkin_GameBackBtn_Proxy", "ChapterSkin_Proxy", "ChapterSkin_SetupBtn_Proxy", "CTChapterSkinBonesTrait", "ChapterSpriteFrameConfig", "ChapterTimer_Module", "E_ChapterTimer_updateSpendTime", "ChapterTimer_Proxy", "ChapterTimerInfo", "ChapterTopInfo_Module", "ChapterTopInfo", "ChapterTopInfoBtn", "ChapterTopInfoCollect", "ChapterTopInfoScore", "ChapterTopInfoConfig", "E_ChapterTopInfo_CollectEffectAnimComplete", "ChapterTopInfo_CollectEffect_Proxy", "ChapterTopInfo_Proxy", "ChapterTraitsClassMap", "ChapterWin_Module", "ChapterCollectWin", "ChapterScoreWin", "ChapterWinConfig", "E_ChapterWin_Hide", "E_ChapterWin_Show", "ChapterWin_Proxy", "DifficultChangeColorTrait", "TravelResultOptimizingTrait", "TravelResultTrait" ]);