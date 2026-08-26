window.__require = function e(t, i, n) {
function o(a, s) {
if (!i[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var l = i[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return o(t[a][1][e] || e);
}, l, l.exports, e, t, i, n);
}
return i[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
return o;
}({
AdvUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f1fb5cymphK8KVY+Jv6kobh", "AdvUtils");
var n = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsAdvUtils = void 0;
var r = e("../hsgame"), a = e("../module/native/HsNative"), s = function() {
function e() {}
e.hideAdMask = function() {
var e = cc.director.getScene(), t = null == e ? void 0 : e.getChildByName("__AdMask__");
if (t) {
t.active = !1;
var i = cc.find("txt_Loading_EN", t);
i && i.getComponent(cc.Sprite).unscheduleAllCallbacks();
}
};
e.showAdMask = function(e) {
void 0 === e && (e = !1);
return n(this, void 0, void 0, function() {
var t, i, n, a, s, c;
return o(this, function(o) {
switch (o.label) {
case 0:
if (!cc.sys.isNative && !e) return [ 3, 4 ];
t = cc.director.getScene();
if (!(i = null == t ? void 0 : t.getChildByName("__AdMask__"))) return [ 3, 1 ];
i.active = !0;
return [ 3, 3 ];

case 1:
return [ 4, new Promise(function(e) {
cc.resources.load("hsres/ad/AdMask", function(t, i) {
if (t) {
console.error("[广告] 加载广告测试预制体失败:", t);
e(null);
} else {
var n = cc.instantiate(i);
n.name = "__AdMask__";
n.zIndex = 999;
var o = cc.director.getScene();
o || console.error("[广告] 无法找到当前场景，广告创建失败");
if (cc.isValid(o) && cc.isValid(n)) {
o.addChild(n);
e(n);
} else e(null);
}
});
}) ];

case 2:
i = o.sent();
o.label = 3;

case 3:
if (!cc.isValid(t) || !cc.isValid(i)) return [ 2 ];
n = {};
(a = function(e) {
i.getComponentsInChildren(cc.RenderComponent).forEach(function(t) {
n[t.node.uuid] || (n[t.node.uuid] = t.node.opacity);
t.node.opacity = e ? n[t.node.uuid] : 0;
});
})(!1);
s = cc.find("txt_Loading_EN", i);
c = cc.find("Txt_Conitnue_EN", i);
s.active = !0;
c.active = !1;
s.getComponent(cc.Sprite).unscheduleAllCallbacks();
s.getComponent(cc.Sprite).scheduleOnce(function() {
a(!0);
}, .9);
s.getComponent(cc.Sprite).scheduleOnce(function() {
s.active = !1;
c.active = !0;
r.hsgame.DataReporter.reportEvent("ui_ad_mask_show");
}, 2);
c.on(cc.Node.EventType.TOUCH_END, function() {
i.active = !1;
if (window.gameAdCallback) {
window.gameAdCallback(0);
window.gameAdCallback = null;
}
});
o.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.addGameCallback = function(t, i, n) {
var o = t.type, a = o.startsWith("4") || "702" == o, s = o.startsWith("5") || "703" == o;
window.gameAdCallback = function(t) {
e.hideAdMask();
i && (n ? i.call(n, t) : i(t));
window.gameAdCallback = null;
if (cc.sys.OS_ANDROID === cc.sys.os) {
var o = cc.director.getScene();
o && cc.director.getScheduler().schedule(function() {
a ? r.hsgame.Native.noticeLoad(0) : s && r.hsgame.Native.noticeLoad(2);
}, o, 1, 0, 0, !1);
}
};
};
e.showAdv = function(t, i, n) {
var o = t.type, r = "3" === o, s = o.startsWith("4") || "702" == o, c = o.startsWith("5") || "703" == o;
if (cc.sys.isNative) {
JSON.stringify(t);
(s || c) && e.addGameCallback(t, i, n);
if (!r) {
if (s && !e.isInterReady()) return;
if (c && !e.isRewardReady()) return;
e.showAdMask(!0);
}
a.HsNative.nativeShowAdv(t);
} else {
JSON.stringify(t);
e.showMockAdDialog(i, n, t);
r || e.showAdMask(!0);
}
};
e.isInterReady = function() {
var e = "";
if (cc.sys.os === cc.sys.OS_ANDROID) {
e = "interAd";
"9" === r.hsgame.App.GameType && (e = "inter");
} else e = (cc.sys.os, cc.sys.OS_IOS, "inter");
return r.hsgame.Native.getAdReady(e);
};
e.isRewardReady = function() {
var e = "";
if (cc.sys.os === cc.sys.OS_ANDROID) {
e = "rewardAd";
"9" === r.hsgame.App.GameType && (e = "reward");
} else e = (cc.sys.os, cc.sys.OS_IOS, "reward");
return r.hsgame.Native.getAdReady(e);
};
e.showMockAdDialog = function(t, i, n) {
var o = "3" !== n.type, r = o ? "hsres/ad/adtest" : "hsres/ad/bannertest";
this.adType = o ? 1 : 2;
cc.resources.load(r, function(r, a) {
if (r) {
console.error("[广告测试] 加载广告测试预制体失败:", r);
t && (i ? t.call(i, 0) : t(0));
} else o ? e.createAdMockDialog(a, t, i, n) : e.createBannerMockDialog(a);
});
};
e.createBannerMockDialog = function(e) {
var t = cc.director.getScene();
if (t) {
var i = t.getChildByName("__AdMask__banner__");
if (!i) {
(i = cc.instantiate(e)).zIndex = 999;
i.name = "__AdMask__banner__";
t.addChild(i);
}
cc.find("desc", i).getComponent(cc.Label).string = "banner" + Math.floor(1e3 * Math.random() + 1e4);
}
};
e.createAdMockDialog = function(t, i, n, o) {
var r = cc.instantiate(t);
r.zIndex = 999;
var a = cc.director.getScene();
if (a) {
a.addChild(r);
var s = cc.find("btn", r), c = cc.find("btn2", r), p = cc.find("desc", r);
p && (p.getComponent(cc.Label).string = o.type);
s ? s.on(cc.Node.EventType.TOUCH_END, function() {
e.hideAdMask();
r.destroy();
i && (n ? i.call(n, 1) : i(1));
}) : console.error("[广告测试] 未找到成功按钮");
c ? c.on(cc.Node.EventType.TOUCH_END, function() {
e.hideAdMask();
r.destroy();
i && (n ? i.call(n, 0) : i(0));
}) : console.error("[广告测试] 未找到失败按钮");
} else {
console.error("[广告测试] 无法找到当前场景，广告创建失败");
i && (n ? i.call(n, 0) : i(0));
}
};
e.adType = 0;
return e;
}();
i.HsAdvUtils = s;
cc._RF.pop();
}, {
"../hsgame": "hsgame",
"../module/native/HsNative": "HsNative"
} ],
"Block-android": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b4eee6CmLBAlLswzu01vmJ1", "Block-android");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Block_android = void 0;
var r = e("../../../enviroment/block_blast_android"), a = e("../base-native"), s = "org/cocos2dx/javascript/AppActivity", c = [ 0, 75, 100, 150, 200, 255 ], p = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.callNativeCommonInfo = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
JSON.stringify(e);
return jsb.reflection.callStaticMethod(s, "callNativeCommonInfo", "(Ljava/lang/String;)V", JSON.stringify(e));
}
};
t.userCommentInfo = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) return t.callNativeCommonInfo({
method: "userReview",
param: e
});
};
t.comment = function(e) {
void 0 === e && (e = 1);
cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod(s, "callNativeComment", "(Ljava/lang/String;)V", "" + e);
};
t.reportData = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
var t = JSON.stringify(e);
jsb.reflection.callStaticMethod(s, "callNativeDataUpload", "(Ljava/lang/String;)V", t);
}
};
t.noticeGameHide = function() {
return jsb.reflection.callStaticMethod(s, "callNativeHide", "()V");
};
t.closeNoSplash = function() {
return jsb.reflection.callStaticMethod(s, "callNativeHideLoading", "()V");
};
t.gameWay = function(e) {
return jsb.reflection.callStaticMethod(s, "userScheme", "(Ljava/lang/String;)V", "" + e);
};
t.getMaxEcpm = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
var t = jsb.reflection.callStaticMethod(s, "callNativeGetMaxEcpm", "(Ljava/lang/String;)Ljava/lang/String;", e);
if (!t) return 0;
var i = JSON.parse(t);
if (i.max_ecpm) return parseFloat(i.max_ecpm);
}
return 0;
};
t.getDeviceInfo = function() {
var e = jsb.reflection.callStaticMethod(s, "callNativeInfo", "(Ljava/lang/String;)Ljava/lang/String;", "");
try {
return JSON.parse(e);
} catch (e) {
return null;
}
};
t.showMoreSetting = function() {
jsb.reflection.callStaticMethod(s, "callMoreSettings", "()V");
};
t.noticeLoad = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = !0);
if (cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os) {
if (0 === (e = 1 === e ? 0 : e) && r.block_blast_android.ModelRemoveAd_getVipState()) return;
0 === e && r.block_blast_android.ClickDeviceModele_usr_data_ad_preload();
JSON.stringify({
type: e
});
jsb.reflection.callStaticMethod(s, "showLoad", "(Ljava/lang/String;)V", JSON.stringify({
type: e
}));
}
};
t.getAdReady = function(e) {
return !cc.sys.isNative || cc.sys.OS_ANDROID !== cc.sys.os || jsb.reflection.callStaticMethod(s, "getReadyByAdType", "(Ljava/lang/String;)Z", e);
};
t.nativeShowAdv = function(e) {
if (!r.block_blast_android.ModelRemoveAd_getVipState()) {
JSON.stringify(e);
jsb.reflection.callStaticMethod(s, "callNativeAd", "(Ljava/lang/String;)V", JSON.stringify(e));
}
};
t.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod(s, "hideBanner", "()V");
};
t.uploadUserData = function() {
cc.sys.isNative && (cc.sys.OS_ANDROID, cc.sys.os);
};
t.shakeOnce = function(e, t) {
e = c[e] || 255;
if (cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os) {
if (null == e || null == t) return;
e = Math.max(e, 0);
var i = {
method: "vibrateRepeat26",
param: "{timings:[0," + t + ",0,0],amplitudes:[0," + (e = Math.min(e, 255)) + ",0,0]}"
};
this.callNativeCommonInfo(i);
}
};
t.initWindowFunc = function() {
window.sandAdCallback = function(e) {
var t;
t = JSON.parse(e);
var i = 1 == parseInt(t.result) ? 1 : 0;
if (window.gameAdCallback) {
window.gameAdCallback(i);
window.gameAdCallback = null;
}
};
};
t.cleanWindowFunc = function() {
window.sandAdCallback = null;
};
return t;
}(a.HsBaseNative);
i.Block_android = p;
cc._RF.pop();
}, {
"../../../enviroment/block_blast_android": "block_blast_android",
"../base-native": "base-native"
} ],
"Block-ios": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "db9b4KcQElH+pTYcwm/jkCz", "Block-ios");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Block_ios = void 0;
var r = e("../base-native"), a = "RootViewController", s = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.userCommentInfo = function(e) {
jsb.reflection.callStaticMethod("BCInterActive", "callNativeCommonInfo:", e);
};
t.comment = function(e) {
void 0 === e && (e = 1);
jsb.reflection.callStaticMethod(a, "callNativeComment:info:", "", e);
};
t.reportData = function(e) {
var t = JSON.stringify(e);
jsb.reflection.callStaticMethod(a, "callNativeDataUpload:", t);
};
t.uploadUserData = function(e) {
cc.sys.isNative && cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod(a, "callNativeUserUpload:", JSON.stringify(e));
};
t.getDeviceInfo = function() {
return jsb.reflection.callStaticMethod("BCInterActive", "getClientInfo:", "");
};
t.getMaxEcpm = function(e) {
var t = jsb.reflection.callStaticMethod("BCInterActive", "callNativeGetMaxEcpm2:", e);
if (!t) return 0;
try {
var i = JSON.parse(t);
if (i.max_ecpm) return parseFloat(i.max_ecpm);
} catch (e) {
return 0;
}
};
t.showMoreSetting = function() {
jsb.reflection.callStaticMethod(a, "callMoreSettings:", "aa");
};
t.noticeLoad = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = !0);
jsb.reflection.callStaticMethod(a, "showLoad:", "" + JSON.stringify({
type: e
}));
};
t.getAdReady = function(e) {
return jsb.reflection.callStaticMethod(a, "getReadyByAdType:info:", "", e);
};
t.nativeShowAdv = function(e) {
if (cc.sys.OS_IOS === cc.sys.os) {
JSON.stringify(e);
jsb.reflection.callStaticMethod(a, "callNativeAd:info:", "", JSON.stringify(e));
}
};
t.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod(a, "hideBanner:", "aa");
};
t.shakeOnce = function(e) {
cc.sys.isNative && cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod(a, "PlayHaptic:", "" + e);
};
t.noticeGameHide = function() {
jsb.reflection.callStaticMethod(a, "callNativeHide:", "aa}");
};
t.closeNoSplash = function() {};
t.gameWay = function(e) {
jsb.reflection.callStaticMethod(a, "userScheme:", "" + e);
};
return t;
}(r.HsBaseNative);
i.Block_ios = s;
cc._RF.pop();
}, {
"../base-native": "base-native"
} ],
DataReporter: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "30a87e+AtFMPLooi70adgyH", "DataReporter");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsDataReporter = void 0;
var n = e("../../hsgame"), o = function() {
function e() {}
e.reportEvent = function(e, t) {
(t = t || {}).name = e;
this.extendData(t);
var i = [];
i.push(t);
n.hsgame.Native.reportData(i);
};
e.extendData = function(e) {
e.time = Date.now();
};
return e;
}();
i.HsDataReporter = o;
cc._RF.pop();
}, {
"../../hsgame": "hsgame"
} ],
Features: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "58d130sXDFHSYqELnhXZnAV", "Features");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.FeaturesMgr = void 0;
var n = e("./dependices"), o = function() {
function e() {}
Object.defineProperty(e, "event", {
get: function() {
this._event || (this._event = new cc.EventTarget());
return this._event;
},
enumerable: !1,
configurable: !0
});
e.boolFeature = function(e) {
var t = !1;
this.planConfig && void 0 !== this.planConfig[e] && null !== this.planConfig[e] && (t = this.planConfig[e]);
return t;
};
e.intFeature = function(e) {
return this.planConfig && this.planConfig[e] ? this.planConfig[e] : 0;
};
e.objFeature = function(e) {
return this.planConfig && this.planConfig[e] ? this.planConfig[e] : null;
};
e.getFeatureVal = function() {};
e.checkDependiceFeatures = function(e) {
if (n.feature_dependices.hasDependency(e)) {
if (n.feature_dependices.hasCyclicDependency(e)) {
console.error("存在循环依赖", e);
return !1;
}
var t = n.feature_dependices_config[e];
if (t) for (var i = 0; i < t.length; i++) if (!this.boolFeature(t[i])) {
t[i];
return !1;
}
}
return !0;
};
e.planConfig = {};
e.planId = 0;
e._event = null;
return e;
}();
i.FeaturesMgr = o;
cc._RF.pop();
}, {
"./dependices": "dependices"
} ],
FloorConfigData: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e1126ckeE1B7LTL1GyCbrid", "FloorConfigData");
var n = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc._decorator, r = o.ccclass, a = (o.property, function() {
function e() {}
e.ColorFloorConfigData = {
5420: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5421: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "70_1", "100_0" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_6" ], [ 350, "30_2", "100_6" ], [ 380, "30_2", "100_6" ], [ 430, "30_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_0", "100_6" ], [ 350, "70_0", "100_6" ], [ 380, "70_0", "100_6" ], [ 430, "70_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5509: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "70_1", "100_0" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_6" ], [ 350, "30_2", "100_6" ], [ 380, "30_2", "100_6" ], [ 430, "30_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_0", "100_6" ], [ 350, "70_0", "100_6" ], [ 380, "70_0", "100_6" ], [ 430, "70_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5515: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5516: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5517: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5518: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5521: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5422: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_6" ], [ 350, "30_2", "100_6" ], [ 380, "30_2", "100_6" ], [ 430, "30_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_0", "100_6" ], [ 350, "70_0", "100_6" ], [ 380, "70_0", "100_6" ], [ 430, "70_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5423: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5510: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
5424: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "100_6" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "100_0" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "50_0", "100_6" ] ] ],
5425: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5535: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5511: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5603: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
6008: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
7327: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "60_2", "80_0", "100_6" ], [ 310, "60_2", "70_0", "100_6" ], [ 330, "10_2", "40_0", "100_6" ], [ 350, "30_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "40_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "10_2", "20_0", "40_6", "100_4" ], [ 280, "10_2", "20_0", "40_6", "100_4" ], [ 310, "20_6", "100_4" ], [ 330, "10_2", "20_6", "100_4" ], [ 350, "100_4" ], [ 380, "20_2", "30_6", "100_4" ], [ 430, "20_2", "30_6", "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "60_2", "100_0" ], [ 280, "60_2", "100_0" ], [ 310, "60_2", "100_0" ], [ 330, "10_2", "90_6", "100_4" ], [ 350, "20_0", "100_6" ], [ 380, "10_2", "20_0", "100_6" ], [ 430, "10_2", "20_0", "100_6" ], [ "大于430", "70_0", "80_6", "100_4" ] ], [ [ 200, "10_0", "30_6", "100_4" ], [ 280, "30_6", "100_4" ], [ 310, "10_6", "100_4" ], [ 330, "10_2", "20_0", "100_4" ], [ 350, "10_2", "20_0", "40_6", "100_4" ], [ 380, "20_2", "30_0", "40_6", "100_4" ], [ 430, "10_2", "20_0", "30_6", "100_4" ], [ "大于430", "10_2", "20_0", "40_6", "100_4" ] ], [ [ 200, "50_2", "80_0", "100_6" ], [ 280, "50_2", "80_0", "100_6" ], [ 310, "40_2", "80_0", "100_6" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "10_2", "20_0", "100_6" ], [ 430, "10_2", "20_0", "100_6" ], [ "大于430", "60_0", "80_6", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "80_2", "90_0", "100_6" ], [ 310, "80_2", "90_0", "100_6" ], [ 330, "100_6" ], [ 350, "10_2", "20_0", "100_6" ], [ 380, "10_2", "100_6" ], [ 430, "100_6" ], [ "大于430", "60_0", "80_6", "100_4" ] ], [ [ 200, "20_6", "100_4" ], [ 280, "30_6", "100_4" ], [ 310, "10_2", "30_6", "100_4" ], [ 330, "10_6", "100_4" ], [ 350, "10_6", "100_4" ], [ 380, "10_2", "100_4" ], [ 430, "20_6", "100_4" ], [ "大于430", "10_6", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "50_2", "70_0", "100_6" ], [ 310, "80_2", "100_0" ], [ 330, "10_0", "90_6", "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "60_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "20_2", "40_6", "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "30_2", "50_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "60_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "10_2", "70_0", "100_4" ] ] ],
6106: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
6009: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "90_6", "100_4" ], [ 350, "90_6", "100_4" ], [ 380, "90_6", "100_4" ], [ 430, "90_6", "100_4" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "90_0", "100_4" ], [ 310, "90_0", "100_4" ], [ 330, "90_0", "100_4" ], [ 350, "90_0", "100_4" ], [ 380, "90_0", "100_4" ], [ 430, "90_0", "100_4" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_0", "90_6", "100_4" ], [ 350, "30_0", "90_6", "100_4" ], [ 380, "30_0", "90_6", "100_4" ], [ 430, "30_0", "90_6", "100_4" ], [ "大于430", "70_0", "100_4" ] ] ],
6107: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "90_6", "100_4" ], [ 350, "90_6", "100_4" ], [ 380, "90_6", "100_4" ], [ 430, "90_6", "100_4" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "90_0", "100_4" ], [ 310, "90_0", "100_4" ], [ 330, "90_0", "100_4" ], [ 350, "90_0", "100_4" ], [ 380, "90_0", "100_4" ], [ 430, "90_0", "100_4" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_0", "90_6", "100_4" ], [ 350, "30_0", "90_6", "100_4" ], [ 380, "30_0", "90_6", "100_4" ], [ 430, "30_0", "90_6", "100_4" ], [ "大于430", "70_0", "100_4" ] ] ],
6010: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "50_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "70_0", "100_4" ], [ "大于430", "50_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "50_0", "100_4" ] ] ],
6108: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "50_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "70_0", "100_4" ], [ "大于430", "50_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "50_0", "100_4" ] ] ],
5704: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5604: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5426: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5620: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5711: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "50_0", "100_4" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5427: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "70_1", "100_0" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_6" ], [ 350, "30_2", "100_6" ], [ 380, "30_2", "100_6" ], [ 430, "30_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_0" ], [ 350, "70_2", "100_0" ], [ 380, "70_2", "100_0" ], [ 430, "70_2", "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_2", "100_6" ], [ 350, "70_2", "100_6" ], [ 380, "70_2", "100_6" ], [ 430, "70_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5428: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "70_1", "100_0" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_6" ], [ 350, "30_2", "100_6" ], [ 380, "30_2", "100_6" ], [ 430, "30_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_0" ], [ 350, "30_2", "100_0" ], [ 380, "30_2", "100_0" ], [ 430, "30_2", "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "70_0", "100_6" ], [ 350, "30_2", "70_0", "100_6" ], [ 380, "30_2", "70_0", "100_6" ], [ 430, "30_2", "70_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
5429: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "70_1", "100_0" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "30_2", "100_6" ], [ 350, "30_2", "100_6" ], [ 380, "30_2", "100_6" ], [ 430, "30_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "70_0", "100_6" ], [ 350, "70_0", "100_6" ], [ 380, "70_0", "100_6" ], [ 430, "70_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
6310: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
6311: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
6312: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "100_1" ], [ 280, "100_1" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "100_2" ], [ 280, "100_2" ], [ 310, "100_2" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "100_2" ], [ 280, "100_2" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "100_2" ], [ 280, "100_2" ], [ 310, "100_2" ], [ 330, "50_2", "100_6" ], [ 350, "50_2", "100_6" ], [ 380, "50_2", "100_6" ], [ 430, "50_2", "100_6" ], [ "大于430", "70_0", "100_4" ] ] ],
6313: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
6314: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_1", "100_0" ], [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
6315: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
6316: [ [ [ 280, "70_1", "100_0" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ],
7822: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ]
};
e.GradeFloorConfigData = {
5420: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5421: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5509: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5422: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5423: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5510: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5424: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5425: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5535: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5511: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5603: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !0 ], [ 11, 1, !1 ], [ 13, 3, !0 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !0 ], [ 11, 1, !1 ], [ 13, 3, !0 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
6008: [ [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 8, 1, !1 ], [ 9, 6, !0 ], [ 13, 1, !1 ], [ 14, 3, !0 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ], [ [ 8, 1, !1 ], [ 9, 3, !0 ], [ 13, 1, !1 ], [ 14, 3, !0 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ],
7327: [ [ [ 10, 1, !1 ], [ 11, 2, !0 ], [ 17, 3, !1 ], [ 18, 4, !0 ], [ 20, 4, !1 ] ], [ [ 10, 7, !1 ], [ 11, 8, !0 ], [ 17, 9, !1 ], [ 18, 10, !0 ], [ 20, 10, !1 ] ], [ [ 8, 13, !1 ], [ 9, 14, !0 ], [ 13, 15, !1 ], [ 14, 16, !0 ], [ 17, 17, !1 ], [ 20, 18, !1 ] ], [ [ 8, 19, !1 ], [ 9, 20, !0 ], [ 13, 21, !1 ], [ 14, 22, !0 ], [ 17, 23, !1 ], [ 20, 24, !1 ] ] ],
6106: [ [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 8, 1, !1 ], [ 9, 6, !0 ], [ 13, 1, !1 ], [ 14, 3, !0 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ], [ [ 8, 1, !1 ], [ 9, 3, !0 ], [ 13, 1, !1 ], [ 14, 3, !0 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ],
6009: [ [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 8, 1, !1 ], [ 9, 6, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ], [ [ 8, 1, !1 ], [ 9, 3, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ],
6107: [ [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 8, 1, !1 ], [ 9, 6, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ], [ [ 8, 1, !1 ], [ 9, 3, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ],
6010: [ [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 8, 1, !1 ], [ 9, 6, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ], [ [ 8, 1, !1 ], [ 9, 3, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ],
6108: [ [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 10, 1, !1 ], [ 11, 1, !0 ], [ 17, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 8, 1, !1 ], [ 9, 6, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ], [ [ 8, 1, !1 ], [ 9, 3, !1 ], [ 13, 1, !1 ], [ 14, 3, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ],
5704: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5604: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5515: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5516: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5517: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5518: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5521: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5426: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5620: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5711: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5427: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5428: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 3, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
5429: [ [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 5, !0 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 1, !0 ], [ 16, 1, !1 ], [ 18, 6, !0 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
6310: [ [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 17, 5, !1 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 17, 6, !1 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
6311: [ [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 18, 1, !1 ], [ 20, 6, !1 ] ], [ [ 7, 1, !1 ], [ 11, 1, !1 ], [ 13, 6, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 15, 1, !1 ], [ 16, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 15, 1, !1 ], [ 16, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ] ],
6312: [ [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 18, 5, !1 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 18, 6, !1 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
6313: [ [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 18, 5, !1 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 18, 6, !1 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
6314: [ [ [ 7, 1, !1 ], [ 13, 1, !1 ], [ 16, 1, !1 ], [ 18, 1, !1 ], [ 20, 6, !1 ] ], [ [ 7, 1, !1 ], [ 11, 1, !1 ], [ 13, 6, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 15, 1, !1 ], [ 16, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 15, 1, !1 ], [ 16, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ] ],
6315: [ [ [ 7, 1, !1 ], [ 9, 2, !1 ], [ 16, 1, !1 ], [ 18, 5, !1 ], [ 20, 5, !1 ] ], [ [ 7, 1, !1 ], [ 9, 5, !1 ], [ 16, 1, !1 ], [ 18, 6, !1 ], [ 20, 6, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 16, 1, !1 ], [ 20, 3, !1 ] ] ],
6316: [ [ [ 7, 1, !1 ], [ 9, 1, !1 ], [ 16, 1, !1 ], [ 18, 1, !1 ], [ 20, 6, !1 ] ], [ [ 7, 1, !1 ], [ 11, 1, !1 ], [ 13, 6, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 5, 1, !1 ], [ 7, 6, !1 ], [ 11, 1, !1 ], [ 13, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 15, 1, !1 ], [ 16, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ], [ [ 3, 1, !1 ], [ 4, 3, !1 ], [ 6, 1, !1 ], [ 7, 3, !1 ], [ 9, 1, !1 ], [ 10, 3, !1 ], [ 12, 1, !1 ], [ 13, 3, !1 ], [ 15, 1, !1 ], [ 16, 3, !1 ], [ 18, 1, !1 ], [ 20, 3, !1 ] ] ],
7822: [ [ [ 7, 1, !1 ], [ 9, 1, !1 ], [ 16, 1, !1 ], [ 17, 1, !1 ], [ 20, 3, !1 ] ] ]
};
e.DefaultGameGrade = {
5420: 1440,
5421: 1080,
5509: 1440,
5422: 1080,
5423: 1080,
5510: 1440,
5424: 1080,
5425: 1080,
5535: 1080,
5511: 1440,
5603: 1440,
6008: 1440,
7327: 1440,
6106: 1440,
6009: 1440,
6107: 1440,
6010: 1440,
6108: 1440,
5704: 1440,
5604: 1440,
5426: 1080,
5620: 1440,
5711: 1440,
5427: 1080,
5428: 1080,
5429: 1440,
5521: 1440,
5515: 1440,
5516: 1440,
5517: 1440,
5518: 1440,
6310: 1440,
6311: 1440,
6312: 1440,
6313: 1440,
6314: 1440,
6315: 1440,
6316: 1440,
7822: 1440
};
return n([ r ], e);
}());
i.default = a;
cc._RF.pop();
}, {} ],
GMControlConfig: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "d0ca9ZL2z1KjaLHwsj6e92R", "GMControlConfig");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSGMControlType = void 0;
(function(e) {
e.Toggle = "toggle";
e.Slider = "slider";
e.Input = "input";
e.Dropdown = "dropdown";
e.Button = "button";
})(i.HSGMControlType || (i.HSGMControlType = {}));
cc._RF.pop();
}, {} ],
GMControlFactory: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "57aa8zsobtOr74ssBPUXJjQ", "GMControlFactory");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.createControl = function(e, t) {
switch (t.type) {
case "toggle":
return this.createToggle(e, t);

case "slider":
return this.createSlider(e, t);

case "input":
return this.createInput(e, t);

case "dropdown":
return this.createDropdown(e, t);

case "button":
return this.createButton(e, t);

default:
t.type;
return null;
}
};
e.createToggle = function(e, t) {
var i, n = new cc.Node("ToggleItem");
n.setContentSize(400, 60);
this.createHorizontalLayout(n, 20, 10);
var o = new cc.Node("title"), r = o.addComponent(cc.Label);
r.string = t.label;
r.fontSize = 30;
r.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
o.color = cc.Color.WHITE;
o.setContentSize(300, 40);
n.addChild(o);
var a = new cc.Node("toggle");
a.setContentSize(60, 60);
var s = a.addComponent(cc.Sprite);
s.type = cc.Sprite.Type.SLICED;
s.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var c = this.createSolidColorTexture(240, 240, 240), p = new cc.SpriteFrame(c);
s.spriteFrame = p;
var l = a.addComponent(cc.Toggle);
l.isChecked = (null === (i = t.defaultValue) || void 0 === i ? void 0 : i.call(t)) || !1;
var _ = new cc.Node("checkmark");
_.setContentSize(40, 40);
var u = _.addComponent(cc.Sprite);
u.type = cc.Sprite.Type.SIMPLE;
u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
for (var d = new cc.Texture2D(), b = new Uint8Array(6400), h = 0; h < 1600; h++) {
var f = 4 * h;
b[f] = 76;
b[f + 1] = 175;
b[f + 2] = 80;
b[f + 3] = 255;
}
for (var y = function(e, t) {
if (e >= 0 && e < 40 && t >= 0 && t < 40) {
var i = 4 * (40 * t + e);
b[i] = 255;
b[i + 1] = 255;
b[i + 2] = 255;
b[i + 3] = 255;
}
}, v = 0; v <= 1; v += .1) {
var m = Math.round(10 + 8 * v), g = Math.round(20 + 8 * v);
y(m, g);
y(m + 1, g);
y(m, g + 1);
}
for (v = 0; v <= 1; v += .1) {
var S = Math.round(18 + 12 * v), w = Math.round(28 - 16 * v);
y(S, w);
y(S + 1, w);
y(S, w + 1);
}
d.initWithData(b, cc.Texture2D.PixelFormat.RGBA8888, 40, 40);
var C = new cc.SpriteFrame(d);
u.spriteFrame = C;
_.active = l.isChecked;
a.addChild(_);
l.checkMark = u;
a.on("toggle", function(e) {
t.onChange && t.onChange(e.isChecked, n);
});
n.addChild(a);
this.leftAlignX(n, e);
e.addChild(n);
return n;
};
e.createSlider = function(e, t) {
var i, n = new cc.Node("SliderItem");
n.setContentSize(400, 60);
this.createHorizontalLayout(n, 20, 10);
var o = new cc.Node("title"), r = o.addComponent(cc.Label);
r.string = t.label;
r.fontSize = 30;
r.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
o.color = cc.Color.WHITE;
o.setContentSize(150, 40);
n.addChild(o);
var a = new cc.Node("slider");
a.setContentSize(200, 50);
var s = new cc.Node("background");
s.setContentSize(180, 10);
s.setPosition(0, 0);
var c = s.addComponent(cc.Sprite);
c.type = cc.Sprite.Type.SLICED;
c.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var p = this.createSolidColorTexture(102, 102, 102), l = new cc.SpriteFrame(p);
c.spriteFrame = l;
a.addChild(s);
var _ = new cc.Node("handle");
_.setContentSize(40, 40);
var u = new cc.Node("handleVisual");
u.setContentSize(24, 24);
var d = u.addComponent(cc.Sprite);
d.type = cc.Sprite.Type.SIMPLE;
d.sizeMode = cc.Sprite.SizeMode.CUSTOM;
for (var b = new cc.Texture2D(), h = new Uint8Array(2304), f = 0; f < 2304; f += 4) {
h[f] = 0;
h[f + 1] = 0;
h[f + 2] = 0;
h[f + 3] = 0;
}
for (var y = function(e, t, i, n, o, r) {
if (e >= 0 && e < 24 && t >= 0 && t < 24) {
var a = 4 * (24 * t + e);
h[a] = i;
h[a + 1] = n;
h[a + 2] = o;
h[a + 3] = r;
}
}, v = 0; v < 24; v++) for (var m = 0; m < 24; m++) {
var g = m - 12, S = v - 12, w = Math.sqrt(g * g + S * S);
w <= 10 ? w <= 6 ? y(m, v, 248, 248, 248, 255) : y(m, v, 255, 255, 255, 255) : w <= 11 && y(m, v, 204, 204, 204, 255);
}
b.initWithData(h, cc.Texture2D.PixelFormat.RGBA8888, 24, 24);
var C = new cc.SpriteFrame(b);
d.spriteFrame = C;
_.addChild(u);
a.addChild(_);
var I = _.addComponent(cc.Button);
I.target = u;
I.transition = cc.Button.Transition.SCALE;
I.zoomScale = 1.5;
var M = a.addComponent(cc.Slider);
M.handle = I;
M.direction = cc.Slider.Direction.Horizontal;
var O = (null === (i = t.defaultValue) || void 0 === i ? void 0 : i.call(t)) || t.minValue, N = (O - t.minValue) / (t.maxValue - t.minValue);
M.progress = Math.max(0, Math.min(1, N));
n.addChild(a);
var A = new cc.Node("value"), T = A.addComponent(cc.Label);
T.string = O.toString();
T.fontSize = 30;
T.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
A.color = cc.Color.WHITE;
A.setContentSize(70, 40);
A.y = -8;
n.addChild(A);
var R = t.step || 1, D = function(e) {
var i = Math.round(e * (t.maxValue - t.minValue) + t.minValue);
if (e <= 0) {
t.onChange(t.minValue, n);
T.string = Math.round(t.minValue).toString();
} else if (e >= 1) {
t.onChange(t.maxValue, n);
T.string = Math.round(t.maxValue).toString();
} else {
var o = parseInt(T.string);
if (Math.abs(i - o) >= R) {
var r = Math.round((i - o) / R) * R + o;
t.onChange(r, n);
T.string = r.toString();
}
}
};
M.node.on("slide", function(e) {
D(e.progress);
});
D(M.progress);
this.leftAlignX(n, e);
e.addChild(n);
return n;
};
e.createInput = function(e, t) {
var i, n = new cc.Node("InputItem");
n.setContentSize(550, 60);
this.createHorizontalLayout(n, 20, 10);
var o = new cc.Node("title"), r = o.addComponent(cc.Label);
r.string = t.label;
r.fontSize = 30;
r.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
o.color = cc.Color.WHITE;
o.setContentSize(150, 40);
n.addChild(o);
var a = new cc.Node("editbox");
a.y = 4;
a.setContentSize(380, 40);
var s = a.addComponent(cc.Sprite);
s.type = cc.Sprite.Type.SLICED;
s.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var c = this.createSolidColorTexture(240, 240, 240), p = new cc.SpriteFrame(c);
s.spriteFrame = p;
var l = new cc.Node("textLabel");
l.setContentSize(370, 30);
l.setAnchorPoint(0, .5);
l.setPosition(-155, 10);
var _ = l.addComponent(cc.Label);
_.fontSize = 24;
_.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
_.verticalAlign = cc.Label.VerticalAlign.CENTER;
l.color = cc.Color.BLACK;
a.addChild(l);
var u = new cc.Node("placeholderLabel");
u.setContentSize(370, 30);
u.setAnchorPoint(0, .5);
u.setPosition(-155, 0);
var d = u.addComponent(cc.Label);
d.fontSize = 24;
d.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
d.verticalAlign = cc.Label.VerticalAlign.CENTER;
u.color = cc.color(120, 120, 120, 255);
a.addChild(u);
var b = a.addComponent(cc.EditBox);
b.maxLength = 32;
b.textLabel = _;
b.placeholderLabel = d;
b.placeholder = t.placeholder || "请输入...";
var h = null === (i = t.defaultValue) || void 0 === i ? void 0 : i.call(t);
b.string = h;
b.node.on("editing-did-ended", function(e) {
t.onChange && h + "" !== e.string && t.onChange(e.string, n);
});
n.addChild(a);
this.leftAlignX(n, e);
e.addChild(n);
return n;
};
e.createButton = function(e, t) {
var i = new cc.Node("ButtonItem");
i.setContentSize(400, 60);
var n = new cc.Node("button");
n.setContentSize(350, 50);
var o = n.addComponent(cc.Sprite);
o.type = cc.Sprite.Type.SLICED;
o.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var r = this.createSolidColorTexture(70, 130, 180), a = new cc.SpriteFrame(r);
o.spriteFrame = a;
var s = new cc.Node("label"), c = s.addComponent(cc.Label);
c.string = t.label;
c.fontSize = 30;
c.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
c.verticalAlign = cc.Label.VerticalAlign.CENTER;
s.color = cc.Color.WHITE;
s.setContentSize(340, 40);
n.addChild(s);
n.addComponent(cc.Button).target = n;
n.on(cc.Node.EventType.TOUCH_END, function() {
t.onClick && t.onClick(i);
});
i.addChild(n);
this.leftAlignX(i, e);
e.addChild(i);
return i;
};
e.createDropdown = function(e, t) {
var i, n = this, o = new cc.Node("Dropdown");
o.setContentSize(400, 60);
this.createHorizontalLayout(o, 20, 10);
this.leftAlignX(o, e);
e.addChild(o);
var r = new cc.Node("Options");
r.active = !1;
this.createVerticalLayout(r, 6, 0, cc.Layout.ResizeMode.CONTAINER);
r.setContentSize(200, 42 * t.options.length);
e.addChild(r);
var a = new cc.Node("Label"), s = a.addComponent(cc.Label);
s.string = t.label;
s.fontSize = 30;
a.color = cc.Color.WHITE;
s.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
a.setContentSize(150, 40);
o.addChild(a);
var c = new cc.Node("DropdownButton");
c.setContentSize(230, 40);
var p = c.addComponent(cc.Sprite);
p.type = cc.Sprite.Type.SLICED;
p.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var l = this.createSolidColorTexture(240, 240, 240), _ = new cc.SpriteFrame(l);
p.spriteFrame = _;
var u = new cc.Node("ButtonLabel"), d = u.addComponent(cc.Label);
d.string = (null === (i = t.defaultValue) || void 0 === i ? void 0 : i.call(t)) || "请选择";
d.fontSize = 30;
u.color = cc.Color.BLACK;
d.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
u.setContentSize(220, 30);
c.addChild(u);
u.y = -6;
c.addComponent(cc.Button).target = c;
c.on(cc.Node.EventType.TOUCH_END, function() {
r.active = !r.active;
});
o.addChild(c);
var b = c.convertToWorldSpaceAR(cc.v3(0, 0)), h = e.convertToNodeSpaceAR(cc.v2(b.x, b.y - 50));
r.x = h.x;
t.options.forEach(function(e) {
var i = new cc.Node("DropdownOption");
i.setContentSize(200, 42);
var a = i.addComponent(cc.Sprite);
a.type = cc.Sprite.Type.SLICED;
a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var s = n.createSolidColorTexture(240, 240, 240), c = new cc.SpriteFrame(s);
a.spriteFrame = c;
var p = new cc.Node("OptionLabel"), l = p.addComponent(cc.Label);
l.string = e;
l.fontSize = 30;
p.color = cc.Color.BLACK;
l.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
p.setContentSize(190, 32);
p.y = -6;
i.addChild(p);
i.addComponent(cc.Button).target = i;
i.on(cc.Node.EventType.TOUCH_END, function() {
d.string = e;
r.active = !1;
t.onChange(e, o);
});
r.addChild(i);
});
return o;
};
e.createSolidColorTexture = function(e, t, i, n, o, r) {
void 0 === n && (n = 255);
void 0 === o && (o = 1);
void 0 === r && (r = 1);
for (var a = new cc.Texture2D(), s = new Uint8Array(o * r * 4), c = 0; c < o * r; c++) {
var p = 4 * c;
s[p] = e;
s[p + 1] = t;
s[p + 2] = i;
s[p + 3] = n;
}
a.initWithData(s, cc.Texture2D.PixelFormat.RGBA8888, o, r);
return a;
};
e.createFillParentWidget = function(e, t) {
void 0 === t && (t = 0);
var i = e.addComponent(cc.Widget);
i.isAlignLeft = !0;
i.isAlignRight = !0;
i.isAlignTop = !0;
i.isAlignBottom = !0;
i.left = t;
i.right = t;
i.top = t;
i.bottom = t;
i.updateAlignment();
return i;
};
e.createCenterWidget = function(e) {
var t = e.addComponent(cc.Widget);
t.isAlignHorizontalCenter = !0;
t.isAlignVerticalCenter = !0;
t.updateAlignment();
return t;
};
e.createVerticalLayout = function(e, t, i, n) {
void 0 === t && (t = 0);
void 0 === i && (i = 0);
void 0 === n && (n = cc.Layout.ResizeMode.NONE);
var o = e.addComponent(cc.Layout);
o.type = cc.Layout.Type.VERTICAL;
o.resizeMode = n;
o.spacingY = t;
o.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
o.paddingTop = i;
o.paddingBottom = i;
o.paddingLeft = i;
o.paddingRight = i;
return o;
};
e.createHorizontalLayout = function(e, t, i, n) {
void 0 === t && (t = 0);
void 0 === i && (i = 0);
void 0 === n && (n = cc.Layout.ResizeMode.NONE);
var o = e.addComponent(cc.Layout);
o.type = cc.Layout.Type.HORIZONTAL;
o.resizeMode = n;
o.spacingX = t;
o.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
o.paddingTop = i;
o.paddingBottom = i;
o.paddingLeft = i;
o.paddingRight = i;
return o;
};
e.createGridLayout = function(e, t, i, n, o) {
void 0 === t && (t = 2);
void 0 === i && (i = 2);
void 0 === n && (n = 5);
void 0 === o && (o = cc.Layout.ResizeMode.CONTAINER);
var r = e.addComponent(cc.Layout);
r.type = cc.Layout.Type.GRID;
r.resizeMode = o;
r.spacingX = t;
r.spacingY = i;
r.paddingTop = n;
r.paddingBottom = n;
r.paddingLeft = n;
r.paddingRight = n;
return r;
};
e.leftAlignX = function(e, t) {
e.x = (e.width - t.width) / 2 + 12;
};
return e;
}();
i.default = n;
cc._RF.pop();
}, {} ],
HSDelegateComponent: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "387e7pXgLJMcpfVRLdkB+Ax", "HSDelegateComponent");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSDelegateComponent = void 0;
var a = cc._decorator.ccclass, s = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.viewParams = null;
return t;
}
t.prototype.callLoadFinished = function() {
var e;
(null === (e = this.viewParams.callbacks) || void 0 === e ? void 0 : e.onInited) && this.viewParams.callbacks.onInited(this.node, this.viewParams);
};
t.prototype.add = function() {
var e = this.viewParams;
"function" == typeof e.callbacks.onAdded && e.callbacks.onAdded(this.node, e.params);
this.applyComponentsFunction("onAdded", e.params);
};
t.prototype.remove = function(e) {
var t = this, i = this.viewParams;
if (i.valid) {
this.applyComponentsFunction("onBeforeRemove", i.params);
"function" == typeof i.callbacks.onBeforeRemove ? i.callbacks.onBeforeRemove(this.node, function() {
t.removed(i, e);
}) : this.removed(i, e);
}
};
t.prototype.removed = function(e, t) {
e.valid = !1;
if (t) {
this.node.removeFromParent();
this.node.destroy();
} else this.node.removeFromParent();
"function" == typeof e.callbacks.onRemoved && e.callbacks.onRemoved(this.node, e.params);
this.applyComponentsFunction("onRemoved", e.params);
};
t.prototype.onDestroy = function() {
this.viewParams = null;
};
t.prototype.applyComponentsFunction = function(e, t) {
for (var i = 0; i < this.node._components.length; i++) {
var n = this.node._components[i], o = n[e];
o && o.call(n, t);
}
};
return r([ a ], t);
}(cc.Component);
i.HSDelegateComponent = s;
cc._RF.pop();
}, {} ],
HSHotUpdate: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2005coDPRZEYqizVEPS4yt7", "HSHotUpdate");
var n = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
this && this.__read;
this && this.__spread;
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSHotUpdate = i.UpdaterCompleteType = i.PackageType = void 0;
var r, a = e("../../utils/HSObjectUtils");
(function(e) {
e.Main = "package-main";
e.Sub = "package-sub";
})(r = i.PackageType || (i.PackageType = {}));
(function(e) {
e[e.Newest = 0] = "Newest";
e[e.DownloadCompleted = 1] = "DownloadCompleted";
e[e.DownloadError = 2] = "DownloadError";
})(i.UpdaterCompleteType || (i.UpdaterCompleteType = {}));
var s = function() {
function e() {
this.isCanRetry = !0;
this.currentModule = null;
this.currentModuleVersion = null;
this.downloadList = null;
this.downloadIndex = 0;
this.WORKSPACE_MAIN = "hotupdate-main";
this.WORKSPACE_SUB = "hotupdate-sub";
this.WORKSPACE_MAIN_TEMP = "hotupdate-main-temp";
this.WORKSPACE_SUB_TEMP = "hotupdate-sub-temp";
this.urlHotUpdate = "";
}
e.prototype.download = function(e, t, i, n) {
if (this.currentModule) this.log("currentModule return"); else {
this.isDownloading = !1;
this.jsbAssetManager = null;
if (cc.sys.isNative) {
if (!this.jsbAssetManager) {
this.currentModule = e;
this.currentModuleVersion = null;
this.needUpdateCallback = t;
this.progressCallback = i;
this.compeleteCallback = n;
var o = this.getWorkspaceTemp(e), r = this.getModuleManifestUrl();
this.jsbAssetManager = new jsb.AssetsManager(r, o, this.compareVersion.bind(this));
this.jsbAssetManager.setVerifyCallback(this.setVerifyCallback.bind(this));
this.checkDownload();
}
} else {
t && t(!1);
i && i(this.currentModule, 1, 1);
n && n(null, null, null, null);
}
}
};
e.prototype.addSearchPaths = function() {
var e = jsb.fileUtils.getSearchPaths(), t = this.getWorkspaceRoot(), i = this.getResWorkspaceRoot();
this.log("addSearchPaths:", e.length);
if (e.indexOf(t) < 0) {
this.log("addSearchPaths unshift1:", t);
e.unshift(t);
}
if (e.indexOf(i) < 0) {
this.log("addSearchPaths unshift2:", i);
e.unshift(i);
}
var n = jsb.fileUtils.getStringFromFile("assets/version.manifest");
if (n) {
var o = a.HSObjectUtils.safeJSONParse(n);
if (o && this.currentModule === r.Main) {
var s = o.url1, c = s.replace(/^http:\/\/[^/]+/, "");
s.indexOf("https://") >= 0 && (c = s.replace(/^https:\/\/[^/]+/, ""));
c = c.substring(1, c.indexOf(r.Main));
var p = "" + this.getWorkspaceRoot() + c;
if (e.indexOf(p) < 0) {
this.log("addSearchPaths unshift3:", p);
e.unshift(p);
}
}
}
cc.sys.localStorage.setItem("HotSearchPaths", JSON.stringify(e));
jsb.fileUtils.setSearchPaths(e);
};
e.prototype.getUrl = function() {
return this.urlHotUpdate;
};
e.prototype.isModuleExist = function(e) {
if (!cc.sys.isNative) return !0;
var t = this.getWorkspace(e);
return jsb.fileUtils.isDirectoryExist(t);
};
e.prototype.isResExistInWritablePath = function(e) {
if (!cc.sys.isNative) return !1;
var t = this.getModuleRealName(e), i = this.getResWorkspaceRoot() + "assets/" + t, n = i + "/config.json";
return jsb.fileUtils.isDirectoryExist(i) && jsb.fileUtils.isFileExist(n);
};
e.prototype.getModuleVersion = function(e) {
if (!cc.sys.isNative) return "1.0.0";
var t = this.getFilePath(e, "project");
return jsb.fileUtils.isFileExist(t) ? JSON.parse(jsb.fileUtils.getStringFromFile(t)).version : "1.0.0";
};
e.prototype.getMainVersion = function() {
if (!cc.sys.isNative) return "1.0.0";
var e = cc.sys.localStorage.getItem("NEWEST_VERSION");
e || (e = jsb.fileUtils.getStringFromFile("assets/version.txt"));
e || (e = "1.0.0");
return e;
};
e.prototype.hasTask = function() {
return this.downloadList && this.downloadList.length > 0;
};
e.prototype.downloadMultiple = function(e, t, i, n, o, r) {
var a, s = this;
void 0 === r && (r = !1);
if (!e || e.length <= 0) this.log("modules return", !e, e.length); else if (this.downloadList && this.downloadList.length > 0 && !r) {
this.log("downloadList return", null === (a = this.downloadList) || void 0 === a ? void 0 : a.length);
e.forEach(function(e) {
s.downloadList.indexOf(e) < 0 && s.downloadList.push(e);
});
} else {
this.downloadList = [];
for (var c = 0; c < e.length; c++) {
var p = e[c];
this.downloadList.push(p);
}
this.batchDownload(function(e, i) {
t && t(e, i);
}, function() {
s.downloadIndex = 0;
s.downloadList = [];
i && i(s.downloadList[s.downloadIndex]);
}, n, o);
}
};
e.prototype.compareVersion = function(e, t) {
var i = e.split("."), n = t.split(".");
this.log("versionA=" + e + "  versionB=" + t);
for (var o = 0; o < i.length; ++o) {
var r = parseInt(i[o]), a = parseInt(n[o]) || 0;
if (r !== a) return r - a;
}
return n.length > i.length ? -1 : 0;
};
e.prototype.setVerifyCallback = function(e) {
return jsb.fileUtils.isFileExist(e), !0;
};
e.prototype.getWorkspaceRoot = function() {
return "" + jsb.fileUtils.getWritablePath() + this.WORKSPACE_MAIN + "/";
};
e.prototype.log = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
e.prototype.getResWorkspaceRoot = function() {
return "" + jsb.fileUtils.getWritablePath() + this.WORKSPACE_SUB + "/";
};
e.prototype.getWorkspace = function(e) {
return e === r.Main ? this.getWorkspaceRoot() + "assets" : this.getResWorkspaceRoot() + "assets/" + this.getModuleRealName(e);
};
e.prototype.getModuleRealName = function(e) {
if (e.indexOf("/") < 0) return e;
var t = e.split("/");
return t[t.length - 1];
};
e.prototype.getWorkspaceTemp = function(e) {
return e === r.Main ? "" + jsb.fileUtils.getWritablePath() + this.WORKSPACE_MAIN_TEMP : "" + jsb.fileUtils.getWritablePath() + this.WORKSPACE_SUB_TEMP;
};
e.prototype.getFilePath = function(e, t) {
e = this.getModuleRealName(e);
var i = "" + this.getWorkspace(e);
if (jsb.fileUtils.isDirectoryExist(i)) {
i = e === r.Main ? i + "/" + t + ".manifest" : i + "/" + e + "/" + t + ".manifest";
if (jsb.fileUtils.isFileExist(i)) return i;
}
return e === r.Main ? "assets/" + t + ".manifest" : "assets/" + e + "/" + t + ".manifest";
};
e.prototype.getModuleManifestUrl = function() {
return this.getFilePath(this.currentModule, "project");
};
e.prototype.makeDefaultManifest = function() {
var e = this.urlHotUpdate + "/" + this.currentModule + "/", t = JSON.stringify({
version: "0.0.0",
url1: e,
url2: e + "project.manifest",
url3: e + "version.manifest",
assets: {},
searchPaths: [],
compressed: !0
});
this.log("热跟新数据" + t);
return t;
};
e.prototype.batchDownload = function(e, t, i, r) {
return n(this, void 0, void 0, function() {
var n, a = this;
return o(this, function() {
if (!(n = this.downloadList[this.downloadIndex])) {
this.downloadList = [];
this.downloadIndex = 0;
this.log("bundle return");
t && t(null);
return [ 2 ];
}
this.log("batchDownload start", n);
r && r(n);
this.download(n, null, function(t, i, n) {
e && e(i, n);
}, function(o, s, c, p) {
a.log("batchDownload callback:", n, a.downloadIndex, a.downloadList.length);
a.downloadIndex < a.downloadList.length && e && e(100, 100);
++a.downloadIndex;
i && i(o, s, c, p);
a.batchDownload(e, t, i, r);
});
return [ 2 ];
});
});
};
e.prototype.retry = function() {
if (!this.isDownloading && this.isCanRetry) {
this.isCanRetry = !1;
this.isDownloading = !0;
this.jsbAssetManager.downloadFailedAssets();
}
};
e.prototype.checkDownload = function() {
if (this.isDownloading) this.log("Checking or updating ..."); else {
if (this.jsbAssetManager.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.getModuleManifestUrl();
this.jsbAssetManager.loadLocalManifest(e);
}
if (!this.jsbAssetManager.getLocalManifest() || !this.jsbAssetManager.getLocalManifest().isLoaded()) {
this.log("Failed to load local manifest ...");
var t = new jsb.Manifest(this.makeDefaultManifest(), this.getWorkspace(this.currentModule));
this.jsbAssetManager.loadLocalManifest(t, this.getWorkspace(this.currentModule));
}
this.jsbAssetManager.setEventCallback(this.checkDownloadCallback.bind(this));
this.log("checkUpdate");
this.jsbAssetManager.checkUpdate();
this.isDownloading = !0;
}
};
e.prototype.checkDownloadCallback = function(e) {
var t, i;
this.log("Code: " + e.getEventCode());
var n = e.getEventCode();
switch (n) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.log("No local manifest file found, hot update skipped.");
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.log("Fail to download manifest file, hot update skipped.");
this.needUpdateCallback && this.needUpdateCallback(!1);
var o = this.currentModule;
this.freeDownloader();
this.compeleteCallback(o, "Fail to download manifest file, hot update skipped.", n, null);
return;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.log("Already up to date with the latest remote version.");
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
if (0 === (null === (t = this.jsbAssetManager) || void 0 === t ? void 0 : t.getTotalBytes())) {
this.downloadEnded();
return;
}
this.log("New version found, please try to update. (" + this.jsbAssetManager.getTotalBytes() + ")");
this.isDownloading = !1;
this.currentModuleVersion = null === (i = this.jsbAssetManager.getRemoteManifest()) || void 0 === i ? void 0 : i.getVersion();
this.jsbAssetManager.setEventCallback(null);
this.needUpdateCallback && this.needUpdateCallback(!0);
this.startDownload();
break;

default:
return;
}
this.isDownloading = !1;
this.jsbAssetManager.setEventCallback(null);
if (e.getEventCode() === jsb.EventAssetsManager.NEW_VERSION_FOUND) this.startDownload(); else {
this.freeDownloader();
this.needUpdateCallback && this.needUpdateCallback(!1);
}
};
e.prototype.startDownload = function() {
if (this.jsbAssetManager && !this.isDownloading) {
this.jsbAssetManager.setEventCallback(this.downloadCallback.bind(this));
if (this.jsbAssetManager.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.getModuleManifestUrl();
this.log("@@@@@@@@URL_____StartDownload", jsb.fileUtils.isFileExist(e));
this.jsbAssetManager.loadLocalManifest(e);
}
this.jsbAssetManager.update();
this.log("StartDownload start  update");
this.isDownloading = !0;
}
};
e.prototype.downloadCallback = function(e) {
var t = !1, i = !1, n = e.getEventCode(), o = null;
switch (n) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
this.progressCallback && this.progressCallback(this.currentModule, e.getDownloadedBytes(), e.getTotalBytes());
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
o = "Fail to download manifest file, hot update skipped.";
this.log("Fail to download manifest file, hot update skipped.");
i = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.log("Already up to date with the latest remote version.");
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
this.log("Update finished. " + e.getMessage());
t = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.log("Update failed. " + e.getMessage());
o = "Update failed. " + e.getMessage();
this.isDownloading = !1;
this.isCanRetry = !0;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.log("Asset update error: " + e.getCURLECode() + " " + e.getAssetId() + ", " + e.getMessage());
o = "Asset update error: " + e.getCURLECode() + " " + e.getAssetId() + ", " + e.getMessage();
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.log(e.getMessage());
o = e.getMessage();
}
if (this.isCanRetry) this.retry(); else {
if (i) {
this.isDownloading = !1;
this.jsbAssetManager.setEventCallback(null);
var r = this.currentModule;
this.freeDownloader();
this.compeleteCallback && this.compeleteCallback(r, o, n, null);
}
t && this.downloadEnded();
}
};
e.prototype.freeDownloader = function() {
if (this.jsbAssetManager) {
this.jsbAssetManager.setEventCallback(null);
this.jsbAssetManager = null;
delete this.jsbAssetManager;
}
this.currentModule = null;
this.isDownloading = !1;
};
e.prototype.downloadEnded = function() {
var e = this.currentModule;
this.addSearchPaths();
e !== r.Main && this.copyFileToWorkspace();
this.freeDownloader();
this.compeleteCallback && this.compeleteCallback(e, null, null, this.currentModuleVersion);
};
e.prototype.copyFileToWorkspace = function() {
var e = this.getWorkspaceTemp(this.currentModule), t = this.getWorkspace(this.currentModule);
jsb.fileUtils.isDirectoryExist(t) || jsb.fileUtils.createDirectory(t);
if (jsb.fileUtils.isDirectoryExist(e)) {
var i = [], n = e.length;
jsb.fileUtils.listFilesRecursively(e, i);
jsb.fileUtils.isDirectoryExist(t) || jsb.fileUtils.createDirectory(t);
for (var o = 0; o < i.length; o++) {
var r = i[o], a = t + r.substr(n);
if ("/" === r[r.length - 1]) jsb.fileUtils.createDirectory(a); else {
jsb.fileUtils.isFileExist(a) && jsb.fileUtils.removeFile(a);
this.log("移动文件" + r + "到 " + a);
var s = jsb.fileUtils.writeDataToFile(jsb.fileUtils.getDataFromFile(r), a);
this.log("移动文件ret", s);
}
}
jsb.fileUtils.removeDirectory(e);
}
};
return e;
}();
i.HSHotUpdate = s;
cc._RF.pop();
}, {
"../../utils/HSObjectUtils": "HSObjectUtils"
} ],
HSLayerBase: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "96b28tPSUNO2JvApg+tYSg/", "HSLayerBase");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], n = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSLayerBase = void 0;
var a = e("./HSDelegateComponent"), s = e("./HSResManager"), c = e("./HSUIInterface"), p = function(e) {
o(t, e);
function t(t) {
var i = e.call(this, t) || this;
i.ui_nodes = new Map();
i.ui_cache = new Map();
var n = i.addComponent(cc.Widget);
n.isAlignLeft = !0;
n.isAlignRight = !0;
n.isAlignTop = !0;
n.isAlignBottom = !0;
n.left = 0;
n.right = 0;
n.top = 0;
n.bottom = 0;
n.alignMode = cc.Widget.AlignMode.ALWAYS;
n.enabled = !0;
return i;
}
t.prototype.getUuid = function(e) {
return (this.name + "_" + e).replace(/\//g, "_");
};
t.prototype.add = function(e, t, i) {
var n = e.prefab, o = this.getUuid(n), r = this.ui_nodes.get(o);
if (r && r.valid) return "";
if (!r) {
(r = new c.HSViewParams()).uuid = o;
r.prefabPath = n;
r.config = e;
this.ui_nodes.set(r.uuid, r);
}
r.params = t || {};
r.callbacks = i || {};
r.valid = !0;
this.load(r, e.bundle);
return o;
};
t.prototype.load = function(e, t) {
var i = this, n = this.ui_nodes.get(e.uuid);
if (n && n.node) this.createNode(n); else {
t = t || "resources";
s.default.ins.load(e.prefabPath, t).then(function(t) {
if (t) if (e.valid) {
var n = cc.instantiate(t);
e.node = n;
n.addComponent(a.HSDelegateComponent).viewParams = e;
i.createNode(e);
} else i.ui_nodes.delete(e.uuid);
});
}
};
t.prototype.createNode = function(e) {
e.valid = !0;
var t = e.node, i = t.getComponent(a.HSDelegateComponent);
t.parent && t.removeFromParent();
if (cc.isValid(this)) {
this.addChild(t);
i.add();
return t;
}
};
t.prototype.remove = function(e) {
var t, i = this.getUuid(e), n = this.ui_nodes.get(i);
if (!n || n.node) for (var o = this.__nodes(), r = 0; r < o.length; r++) {
var a = o[r].viewParams;
if (a.prefabPath === e) {
var s = !(null === (t = a.config) || void 0 === t ? void 0 : t.cache);
if (s) {
this.removeCache(e);
a.node = null;
this.ui_nodes.delete(a.uuid);
} else this.ui_cache.set(a.prefabPath, a);
o[r].remove(s);
a.valid = !1;
}
} else n.valid = !1;
};
t.prototype.removeByUuid = function(e, t) {
var i = this.ui_nodes.get(e);
if (i) {
t && this.ui_nodes.delete(i.uuid);
i.node.getComponent(a.HSDelegateComponent).remove(t);
}
};
t.prototype.removeCache = function(e) {
var t = this.ui_cache.get(e);
if (t && !1 === t.valid) {
t.node.getComponent(a.HSDelegateComponent).remove(!0);
this.ui_nodes.delete(t.uuid);
this.ui_cache.delete(e);
}
};
t.prototype.getByUuid = function(e) {
var t, i, n = this.__nodes();
try {
for (var o = r(n), a = o.next(); !a.done; a = o.next()) {
var s = a.value;
if (s.viewParams && s.viewParams.uuid === e) return s.node;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (i = o.return) && i.call(o);
} finally {
if (t) throw t.error;
}
}
return null;
};
t.prototype.get = function(e) {
var t, i, n = [], o = this.__nodes();
try {
for (var a = r(o), s = a.next(); !s.done; s = a.next()) {
var c = s.value;
c.viewParams.prefabPath === e && n.push(c.node);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (i = a.return) && i.call(a);
} finally {
if (t) throw t.error;
}
}
return n;
};
t.prototype.has = function(e) {
var t, i, n = this.__nodes();
try {
for (var o = r(n), a = o.next(); !a.done; a = o.next()) {
var s = a.value;
if (s.viewParams.uuid === e || s.viewParams.prefabPath === e) return !0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (i = o.return) && i.call(o);
} finally {
if (t) throw t.error;
}
}
return !1;
};
t.prototype.find = function(e) {
var t, i, n = [], o = this.__nodes();
try {
for (var a = r(o), s = a.next(); !s.done; s = a.next()) {
var c = s.value;
e.test(c.viewParams.prefabPath) && n.push(c.node);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (i = a.return) && i.call(a);
} finally {
if (t) throw t.error;
}
}
return n;
};
t.prototype.__nodes = function() {
var e = [], t = this.children;
if (!t) return e;
for (var i = 0; i < t.length; i++) {
var n = t[i].getComponent(a.HSDelegateComponent);
n && n.viewParams && n.viewParams.valid && cc.isValid(n) && e.push(n);
}
return e;
};
t.prototype.size = function() {
return this.children.length;
};
t.prototype.clearLayer = function(e) {
var t = this;
this.ui_nodes.forEach(function(i) {
t.removeByUuid(i.uuid, e);
i.valid = !1;
});
this.ui_nodes.clear();
e && this.ui_cache.forEach(function(e, i) {
t.removeCache(i);
});
};
return t;
}(cc.Node);
i.HSLayerBase = p;
cc._RF.pop();
}, {
"./HSDelegateComponent": "HSDelegateComponent",
"./HSResManager": "HSResManager",
"./HSUIInterface": "HSUIInterface"
} ],
HSLayerDialog: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0a5ddCCl2RC9LN/Bz74Tdyc", "HSLayerDialog");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSLayerDialog = void 0;
var r = e("./HSLayerPopUp"), a = e("./HSUIInterface"), s = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.queue = [];
t.queue_params = [];
return t;
}
t.prototype.add = function(e, t, i) {
var n = this, o = e.prefab, r = this.getUuid(o), s = this.ui_nodes.get(r);
if (!s) {
(s = new a.HSViewParams()).uuid = this.getUuid(o);
s.prefabPath = o;
s.callbacks = i || {};
s.config = e;
var c = s.callbacks.onRemoved;
s.callbacks.onRemoved = function(e, t) {
c && c(e, t);
cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
n.next();
}, n);
};
s.valid = !0;
this.ui_nodes.set(s.uuid, s);
}
s.node = null;
if (this.current && this.current.valid) {
if (this.current.prefabPath !== e.prefab) {
this.queue.push(s);
this.queue_params.push(t || {});
}
} else {
s.params = t || {};
this.current = s;
this.load(s, e.bundle);
}
return r;
};
t.prototype.setBlackDisable = function() {
0 === this.queue.length && (this.black.enabled = !1);
};
t.prototype.next = function() {
var e;
if (this.queue.length > 0) {
var t = this.queue.shift(), i = this.queue_params.shift();
if ((null == t ? void 0 : t.prefabPath) === (null === (e = this.current) || void 0 === e ? void 0 : e.prefabPath)) return;
this.current = t;
this.current.params = i;
this.current.node ? this.createNode(this.current) : this.load(this.current, this.current.config.bundle);
}
};
return t;
}(r.HSLayerPopUp);
i.HSLayerDialog = s;
cc._RF.pop();
}, {
"./HSLayerPopUp": "HSLayerPopUp",
"./HSUIInterface": "HSUIInterface"
} ],
HSLayerGameUI: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f388bAlZgBOQI2dN/DaSwma", "HSLayerGameUI");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSLayerGameUI = void 0;
var r = e("./HSUIInterface"), a = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.add = function(e, t, i) {
var n;
if (e.prefab !== (null === (n = this.current) || void 0 === n ? void 0 : n.prefabPath)) {
var o = e.prefab, a = this.getUuid(o), s = this.ui_nodes.get(a);
if (!s) {
(s = new r.HSViewParams()).uuid = this.getUuid(o);
s.prefabPath = o;
s.callbacks = i || {};
s.config = e;
s.valid = !0;
this.ui_nodes.set(s.uuid, s);
}
if (!this.current || this.current.prefabPath !== o) {
this.current && this.current.valid && (s.callbacks.onInited = function() {});
s.params = t || {};
this.current = s;
this.load(s, e.bundle);
return a;
}
}
};
t.prototype.remove = function(t) {
this.current && this.current.prefabPath === t && (this.current = null);
e.prototype.remove.call(this, t);
};
return t;
}(e("./HSLayerPopUp").HSLayerPopUp);
i.HSLayerGameUI = a;
cc._RF.pop();
}, {
"./HSLayerPopUp": "HSLayerPopUp",
"./HSUIInterface": "HSUIInterface"
} ],
HSLayerNotify: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "01493hHch1LC7UICbfA6KqJ", "HSLayerNotify");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSLayerNotify = void 0;
var r = e("./HSLayerBase"), a = e("./HSUIInterface"), s = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.show = function(e, t) {
var i = new a.HSViewParams();
i.uuid = this.getUuid("common/prefab/notify");
i.prefabPath = "common/prefab/notify";
i.params = {
content: e,
useI18n: t
};
i.callbacks = {};
i.valid = !0;
this.ui_nodes.set(i.uuid, i);
this.load(i);
};
t.prototype.add = function(e, t, i) {
var n = e.prefab, o = this.getUuid(n), r = new a.HSViewParams();
r.uuid = o;
r.prefabPath = n;
r.config = e;
r.params = t || {};
r.callbacks = i || {};
r.valid = !0;
this.load(r, e.bundle);
return o;
};
return t;
}(r.HSLayerBase);
i.HSLayerNotify = s;
cc._RF.pop();
}, {
"./HSLayerBase": "HSLayerBase",
"./HSUIInterface": "HSUIInterface"
} ],
HSLayerPopUp: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b7d03S24OJOCodFlxtoZpnD", "HSLayerPopUp");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSLayerPopUp = void 0;
var s = function(e) {
o(t, e);
function t(t) {
var i = e.call(this, t) || this;
i.init();
return i;
}
t.prototype.init = function() {
this.black = this.addComponent(cc.BlockInputEvents);
this.black.enabled = !1;
};
t.prototype.add = function(t, i, n) {
var o = this;
this.black.enabled = !0;
var s = n.onAdded;
n.onAdded = function(e, i) {
return r(o, void 0, void 0, function() {
var o, r, c = this;
return a(this, function() {
null == s || s(e, i);
o = e.getChildByName("Popup_Background");
r = !1 !== (null == n ? void 0 : n.needBlackBg);
if (!o && r) {
o = this.createBackgroundLayer();
e.insertChild(o, 0);
if (null == n ? void 0 : n.touchClose) {
o.targetOff(o);
o.on(cc.Node.EventType.TOUCH_END, function() {
c.remove(t.prefab);
});
}
} else if (null == n ? void 0 : n.touchClose) {
o.targetOff(o);
o.on(cc.Node.EventType.TOUCH_END, function() {
c.remove(t.prefab);
});
}
return [ 2 ];
});
});
};
return e.prototype.add.call(this, t, i, n);
};
t.prototype.remove = function(t) {
e.prototype.remove.call(this, t);
this.setBlackDisable();
};
t.prototype.removeByUuid = function(t, i) {
e.prototype.removeByUuid.call(this, t, i);
this.setBlackDisable();
};
t.prototype.setBlackDisable = function() {
this.black.enabled = !1;
};
t.prototype.clearLayer = function(t) {
e.prototype.clearLayer.call(this, t);
this.black.enabled = !1;
this.active = !1;
};
t.prototype.createBackgroundLayer = function() {
var e = new cc.Node("Popup_Background");
e.setContentSize(cc.winSize);
e.addComponent(cc.BlockInputEvents);
var t = e.addComponent(cc.Sprite);
t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var i = new cc.Texture2D(), n = new cc.Color(0, 0, 0, 192), o = new Uint8Array([ n.r, n.g, n.b, n.a ]);
i.initWithData(o, cc.Texture2D.PixelFormat.RGBA8888, 1, 1);
t.spriteFrame = new cc.SpriteFrame(i);
t.node.width = cc.winSize.width;
t.node.height = cc.winSize.height;
return e;
};
return t;
}(e("./HSLayerBase").HSLayerBase);
i.HSLayerPopUp = s;
cc._RF.pop();
}, {
"./HSLayerBase": "HSLayerBase"
} ],
HSListItem: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "4bf7bv4S2pGWbZE2O/ZlUmm", "HSListItem");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a, s = cc._decorator, c = s.ccclass, p = s.property, l = s.disallowMultiple, _ = s.menu, u = s.executionOrder;
(function(e) {
e[e.NONE = 0] = "NONE";
e[e.TOGGLE = 1] = "TOGGLE";
e[e.SWITCH = 2] = "SWITCH";
})(a || (a = {}));
var d = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.icon = null;
t.title = null;
t.selectedMode = a.NONE;
t.selectedFlag = null;
t.selectedSpriteFrame = null;
t._unselectedSpriteFrame = null;
t.adaptiveSize = !1;
t._selected = !1;
t._eventReg = !1;
return t;
}
Object.defineProperty(t.prototype, "selected", {
get: function() {
return this._selected;
},
set: function(e) {
this._selected = e;
if (this.selectedFlag) switch (this.selectedMode) {
case a.TOGGLE:
this.selectedFlag.active = e;
break;

case a.SWITCH:
var t = this.selectedFlag.getComponent(cc.Sprite);
t && (t.spriteFrame = e ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "btnCom", {
get: function() {
this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
return this._btnCom;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
if (this.selectedMode === a.SWITCH) {
var e = this.selectedFlag.getComponent(cc.Sprite);
this._unselectedSpriteFrame = e.spriteFrame;
}
};
t.prototype.onDestroy = function() {
if (this.node && this.node.isValid) {
this.node.stopAllActions();
this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
}
this.list = null;
this.icon = null;
this.title = null;
this.selectedFlag = null;
this.selectedSpriteFrame = null;
this._unselectedSpriteFrame = null;
this._btnCom = null;
};
t.prototype._registerEvent = function() {
if (!this._eventReg) {
this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
this._eventReg = !0;
}
};
t.prototype._onSizeChange = function() {
this.list._onItemAdaptive(this.node);
};
t.prototype.createEvt = function(e, t, i) {
void 0 === i && (i = null);
if (e.isValid) {
e.comName = e.comName || e.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
var n = new cc.Component.EventHandler();
n.target = i || e.node;
n.component = e.comName;
n.handler = t;
return n;
}
};
t.prototype.showAni = function(e, t, i) {
var n, o = this;
switch (e) {
case 0:
n = cc.tween(o.node).to(.2, {
scale: .7
}).by(.3, {
y: 2 * o.node.height
});
break;

case 1:
n = cc.tween(o.node).to(.2, {
scale: .7
}).by(.3, {
x: 2 * o.node.width
});
break;

case 2:
n = cc.tween(o.node).to(.2, {
scale: .7
}).by(.3, {
y: -2 * o.node.height
});
break;

case 3:
n = cc.tween(o.node).to(.2, {
scale: .7
}).by(.3, {
x: -2 * o.node.width
});
break;

default:
n = cc.tween(o.node).to(.3, {
scale: .1
});
}
(t || i) && n.call(function() {
if (o && o.node && o.node.isValid) {
if (i) {
o.list._delSingleItem(o.node);
for (var e = o.list.displayData.length - 1; e >= 0; e--) if (o.list.displayData[e].id === o.listId) {
o.list.displayData.splice(e, 1);
break;
}
}
t();
}
});
n.start();
};
t.prototype.onClickThis = function() {
this.list.selectedId = this.listId;
};
r([ p({
type: cc.Sprite,
tooltip: !1
}) ], t.prototype, "icon", void 0);
r([ p({
type: cc.Node,
tooltip: !1
}) ], t.prototype, "title", void 0);
r([ p({
type: cc.Enum(a),
tooltip: !1
}) ], t.prototype, "selectedMode", void 0);
r([ p({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.selectedMode > a.NONE;
}
}) ], t.prototype, "selectedFlag", void 0);
r([ p({
type: cc.SpriteFrame,
tooltip: !1,
visible: function() {
return this.selectedMode === a.SWITCH;
}
}) ], t.prototype, "selectedSpriteFrame", void 0);
r([ p({
tooltip: !1
}) ], t.prototype, "adaptiveSize", void 0);
return r([ c, l(), _("自定义组件/List Item"), u(-5001) ], t);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {} ],
HSList: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2ca11At9z5GL46SNaiYqALK", "HSList");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a, s, c, p = cc._decorator, l = p.ccclass, _ = p.property, u = p.disallowMultiple, d = p.menu, b = p.executionOrder, h = p.requireComponent, f = e("./HSListItem");
(function(e) {
e[e.NODE = 1] = "NODE";
e[e.PREFAB = 2] = "PREFAB";
})(a || (a = {}));
(function(e) {
e[e.NORMAL = 1] = "NORMAL";
e[e.ADHERING = 2] = "ADHERING";
e[e.PAGE = 3] = "PAGE";
})(s || (s = {}));
(function(e) {
e[e.NONE = 0] = "NONE";
e[e.SINGLE = 1] = "SINGLE";
e[e.MULT = 2] = "MULT";
})(c || (c = {}));
var y = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.templateType = a.NODE;
t.tmpNode = null;
t.tmpPrefab = null;
t._slideMode = s.NORMAL;
t.pageDistance = .3;
t.pageChangeEvent = new cc.Component.EventHandler();
t._virtual = !0;
t.cyclic = !1;
t.lackCenter = !1;
t.lackSlide = !1;
t._updateRate = 0;
t.frameByFrameRenderNum = 0;
t.renderEvent = new cc.Component.EventHandler();
t.selectedMode = c.NONE;
t.repeatEventSingle = !1;
t.selectedEvent = new cc.Component.EventHandler();
t._selectedId = -1;
t._forceUpdate = !1;
t._updateDone = !0;
t._numItems = 0;
t._inited = !1;
t._needUpdateWidget = !1;
t._aniDelRuning = !1;
t._doneAfterUpdate = !1;
t.adhering = !1;
t._adheringBarrier = !1;
t.curPageNum = 0;
return t;
}
Object.defineProperty(t.prototype, "slideMode", {
get: function() {
return this._slideMode;
},
set: function(e) {
this._slideMode = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "virtual", {
get: function() {
return this._virtual;
},
set: function(e) {
null != e && (this._virtual = e);
0 != this._numItems && this._onScrolling();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "updateRate", {
get: function() {
return this._updateRate;
},
set: function(e) {
e >= 0 && e <= 6 && (this._updateRate = e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "selectedId", {
get: function() {
return this._selectedId;
},
set: function(e) {
var t, i = this;
switch (i.selectedMode) {
case c.SINGLE:
if (!i.repeatEventSingle && e == i._selectedId) return;
t = i.getItemByListId(e);
var n = void 0;
i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
i._selectedId = e;
t && ((n = t.getComponent(f.default)).selected = !0);
if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
var o = i.getItemByListId(i._lastSelectedId);
o && (o.getComponent(f.default).selected = !1);
}
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
break;

case c.MULT:
if (!(t = i.getItemByListId(e))) return;
n = t.getComponent(f.default);
i._selectedId >= 0 && (i._lastSelectedId = i._selectedId);
i._selectedId = e;
var r = !n.selected;
n.selected = r;
var a = i.multSelected.indexOf(e);
r && a < 0 ? i.multSelected.push(e) : !r && a >= 0 && i.multSelected.splice(a, 1);
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, r);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "numItems", {
get: function() {
return this._actualNumItems;
},
set: function(e) {
var t = this;
if (t.checkInited(!1)) if (null == e || e < 0) cc.error("numItems set the wrong::", e); else {
t._actualNumItems = t._numItems = e;
t._forceUpdate = !0;
if (t._virtual) {
t._resizeContent();
t.cyclic && (t._numItems = t._cyclicNum * t._numItems);
t._onScrolling();
t.frameByFrameRenderNum || t.slideMode != s.PAGE || (t.curPageNum = t.nearestListId);
} else {
if (t.cyclic) {
t._resizeContent();
t._numItems = t._cyclicNum * t._numItems;
}
var i = t.content.getComponent(cc.Layout);
i && (i.enabled = !0);
t._delRedundantItem();
t.firstListId = 0;
if (t.frameByFrameRenderNum > 0) {
for (var n = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum, o = 0; o < n; o++) t._createOrUpdateItem2(o);
if (t.frameByFrameRenderNum < t._numItems) {
t._updateCounter = t.frameByFrameRenderNum;
t._updateDone = !1;
}
} else {
for (o = 0; o < t._numItems; o++) t._createOrUpdateItem2(o);
t.displayItemNum = t._numItems;
}
}
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "scrollView", {
get: function() {
return this._scrollView;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this._init();
};
t.prototype.onDestroy = function() {
var e = this;
e.node && e.node.isValid && e.node.stopAllActions();
e.content && e.content.isValid && e.content.children.forEach(function(e) {
e && e.isValid && e.stopAllActions();
});
if (e._scrollToSo) {
e._scrollToSo.stop && e._scrollToSo.stop();
e._scrollToSo = null;
}
e._unregisterEvent();
cc.isValid(e._itemTmp) && e._itemTmp.destroy();
cc.isValid(e.tmpNode) && e.tmpNode.destroy();
e._pool && e._pool.clear();
e.content = null;
e._scrollView = null;
e._layout = null;
e.displayData = null;
e._lastDisplayData = null;
e.multSelected = null;
e._aniDelCB = null;
e._aniDelItem = null;
e._scrollItem = null;
e.tmpPrefab = null;
e.pageChangeEvent = null;
e.renderEvent = null;
e.selectedEvent = null;
};
t.prototype.onEnable = function() {
this._registerEvent();
this._init();
if (this._aniDelRuning) {
this._aniDelRuning = !1;
if (this._aniDelItem) {
if (this._aniDelBeforePos) {
this._aniDelItem.position = this._aniDelBeforePos;
delete this._aniDelBeforePos;
}
if (this._aniDelBeforeScale) {
this._aniDelItem.scale = this._aniDelBeforeScale;
delete this._aniDelBeforeScale;
}
delete this._aniDelItem;
}
if (this._aniDelCB) {
this._aniDelCB();
delete this._aniDelCB;
}
}
};
t.prototype.onDisable = function() {
this._unregisterEvent();
};
t.prototype._registerEvent = function() {
var e = this;
e.node.on(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.on("touch-up", e._onTouchUp, e);
e.node.on(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.on("scroll-began", e._onScrollBegan, e, !0);
e.node.on("scroll-ended", e._onScrollEnded, e, !0);
e.node.on("scrolling", e._onScrolling, e, !0);
e.node.on(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
};
t.prototype._unregisterEvent = function() {
var e = this;
e.node.off(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.off("touch-up", e._onTouchUp, e);
e.node.off(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.off("scroll-began", e._onScrollBegan, e, !0);
e.node.off("scroll-ended", e._onScrollEnded, e, !0);
e.node.off("scrolling", e._onScrolling, e, !0);
e.node.off(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
};
t.prototype._init = function() {
var e = this;
if (!e._inited) {
e._scrollView = e.node.getComponent(cc.ScrollView);
e.content = e._scrollView.content;
if (e.content) {
e._layout = e.content.getComponent(cc.Layout);
e._align = e._layout.type;
e._resizeMode = e._layout.resizeMode;
e._startAxis = e._layout.startAxis;
e._topGap = e._layout.paddingTop;
e._rightGap = e._layout.paddingRight;
e._bottomGap = e._layout.paddingBottom;
e._leftGap = e._layout.paddingLeft;
e._columnGap = e._layout.spacingX;
e._lineGap = e._layout.spacingY;
e._colLineNum;
e._verticalDir = e._layout.verticalDirection;
e._horizontalDir = e._layout.horizontalDirection;
e.setTemplateItem(cc.instantiate(e.templateType === a.PREFAB ? e.tmpPrefab : e.tmpNode));
if (e._slideMode === s.ADHERING || e._slideMode === s.PAGE) {
e._scrollView.inertia = !1;
e._scrollView._onMouseWheel = function() {};
}
e.virtual || (e.lackCenter = !1);
e._lastDisplayData = [];
e.displayData = [];
e._pool = new cc.NodePool();
e._forceUpdate = !1;
e._updateCounter = 0;
e._updateDone = !0;
e.curPageNum = 0;
if (e.cyclic) {
e._scrollView._processAutoScrolling = this._processAutoScrolling.bind(e);
e._scrollView._startBounceBackIfNeeded = function() {
return !1;
};
}
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
}
}
e.content.removeAllChildren();
e._inited = !0;
} else cc.error(e.node.name + "'s cc.ScrollView unset content!");
}
};
t.prototype._processAutoScrolling = function(e) {
this._scrollView._autoScrollAccumulatedTime += 1 * e;
var t = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
if (this._scrollView._autoScrollAttenuate) {
var i = t - 1;
t = i * i * i * i * i + 1;
}
var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(t)), o = this._scrollView.getScrollEndedEventTiming(), r = Math.abs(t - 1) <= o;
if (Math.abs(t - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
this._scrollView._dispatchEvent("scroll-ended-with-threshold");
this._scrollView._isScrollEndedWithThresholdEventFired = !0;
}
r && (this._scrollView._autoScrolling = !1);
var a = n.sub(this._scrollView.getContentPosition());
this._scrollView._moveContent(this._scrollView._clampDelta(a), r);
this._scrollView._dispatchEvent("scrolling");
if (!this._scrollView._autoScrolling) {
this._scrollView._isBouncing = !1;
this._scrollView._scrolling = !1;
this._scrollView._dispatchEvent("scroll-ended");
}
};
t.prototype.setTemplateItem = function(e) {
if (e) {
var t = this;
t._itemTmp = e;
t._resizeMode == cc.Layout.ResizeMode.CHILDREN ? t._itemSize = t._layout.cellSize : t._itemSize = cc.size(e.width, e.height);
var i = e.getComponent(f.default), n = !1;
i || (n = !0);
n && (t.selectedMode = c.NONE);
(i = e.getComponent(cc.Widget)) && i.enabled && (t._needUpdateWidget = !0);
t.selectedMode == c.MULT && (t.multSelected = []);
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
t._colLineNum = 1;
t._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
t._colLineNum = 1;
t._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var o = t.content.width - t._leftGap - t._rightGap;
t._colLineNum = Math.floor((o + t._columnGap) / (t._itemSize.width + t._columnGap));
t._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var r = t.content.height - t._topGap - t._bottomGap;
t._colLineNum = Math.floor((r + t._lineGap) / (t._itemSize.height + t._lineGap));
t._sizeType = !1;
}
}
}
};
t.prototype.checkInited = function(e) {
void 0 === e && (e = !0);
if (!this._inited) {
e && cc.error("List initialization not completed!");
return !1;
}
return !0;
};
t.prototype._resizeContent = function() {
var e, t = this;
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
if (t._customSize) {
var i = t._getFixedSize(null);
e = t._leftGap + i.val + t._itemSize.width * (t._numItems - i.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
} else e = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (t._customSize) {
i = t._getFixedSize(null);
e = t._topGap + i.val + t._itemSize.height * (t._numItems - i.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
} else e = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
break;

case cc.Layout.Type.GRID:
t.lackCenter && (t.lackCenter = !1);
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var n = Math.ceil(t._numItems / t._colLineNum);
e = t._topGap + t._itemSize.height * n + t._lineGap * (n - 1) + t._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var o = Math.ceil(t._numItems / t._colLineNum);
e = t._leftGap + t._itemSize.width * o + t._columnGap * (o - 1) + t._rightGap;
}
}
var r = t.content.getComponent(cc.Layout);
r && (r.enabled = !1);
t._allItemSize = e;
t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
if (t.cyclic) {
var a = t._sizeType ? t.node.height : t.node.width;
t._cyclicPos1 = 0;
a -= t._cyclicPos1;
t._cyclicNum = Math.ceil(a / t._allItemSizeNoEdge) + 1;
var s = t._sizeType ? t._lineGap : t._columnGap;
t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + s;
t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + s * (t._cyclicNum - 1);
t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
t._cycilcAllItemSizeNoEdge += s * (t._cyclicNum - 1);
}
t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
var c = t._lack && t.lackCenter || !t.lackSlide ? .1 : 0, p = t._lack ? (t._sizeType ? t.node.height : t.node.width) - c : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
p < 0 && (p = 0);
t._sizeType ? t.content.height = p : t.content.width = p;
};
t.prototype._onScrolling = function(e) {
void 0 === e && (e = null);
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && e && "scroll-ended" != e.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
if (this.cyclic) {
var t = this.content.getPosition();
t = this._sizeType ? t.y : t.x;
var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), n = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
switch (this._alignCalcType) {
case 1:
if (t > -this._cyclicPos1) {
this.content.x = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.x = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
break;

case 2:
if (t < this._cyclicPos1) {
this.content.x = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.x = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 3:
if (t < this._cyclicPos1) {
this.content.y = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.y = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 4:
if (t > -this._cyclicPos1) {
this.content.y = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.y = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
}
}
this._calcViewPos();
var o, r, a, s;
if (this._sizeType) {
o = this.viewTop;
a = this.viewBottom;
} else {
r = this.viewRight;
s = this.viewLeft;
}
if (this._virtual) {
this.displayData = [];
var c = void 0, p = 0, l = this._numItems - 1;
if (this._customSize) for (var _ = !1; p <= l && !_; p++) {
c = this._calcItemPos(p);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
c.right >= s && c.left <= r ? this.displayData.push(c) : 0 != p && this.displayData.length > 0 && (_ = !0);
break;

case cc.Layout.Type.VERTICAL:
c.bottom <= o && c.top >= a ? this.displayData.push(c) : 0 != p && this.displayData.length > 0 && (_ = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
c.bottom <= o && c.top >= a ? this.displayData.push(c) : 0 != p && this.displayData.length > 0 && (_ = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
c.right >= s && c.left <= r ? this.displayData.push(c) : 0 != p && this.displayData.length > 0 && (_ = !0);
}
}
} else {
var u = this._itemSize.width + this._columnGap, d = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
p = (s - this._leftGap) / u;
l = (r - this._leftGap) / u;
break;

case 2:
p = (-r - this._rightGap) / u;
l = (-s - this._rightGap) / u;
break;

case 3:
p = (-o - this._topGap) / d;
l = (-a - this._topGap) / d;
break;

case 4:
p = (a - this._bottomGap) / d;
l = (o - this._bottomGap) / d;
}
p = Math.floor(p) * this._colLineNum;
l = Math.ceil(l) * this._colLineNum;
p < 0 && (p = 0);
--l >= this._numItems && (l = this._numItems - 1);
for (;p <= l; p++) this.displayData.push(this._calcItemPos(p));
}
this._delRedundantItem();
if (this.displayData.length <= 0 || !this._numItems) {
this._lastDisplayData = [];
return;
}
this.firstListId = this.displayData[0].id;
this.displayItemNum = this.displayData.length;
var b = this._lastDisplayData.length, h = this.displayItemNum != b;
if (h) {
this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(e, t) {
return e - t;
});
h = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[b - 1];
}
if (this._forceUpdate || h) if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._updateCounter = 0;
this._updateDone = !0;
} else {
this._lastDisplayData = [];
for (var f = 0; f < this.displayItemNum; f++) this._createOrUpdateItem(this.displayData[f]);
this._forceUpdate = !1;
}
this._calcNearestItem();
}
}
}
};
t.prototype._calcViewPos = function() {
var e = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = e.x > 0 ? e.x : 0;
this.viewLeft = (e.x < 0 ? -e.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = e.x < 0 ? -e.x : 0;
this.viewRight = (e.x > 0 ? -e.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = e.y < 0 ? Math.abs(e.y) : 0;
this.viewTop = (e.y > 0 ? -e.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = e.y > 0 ? Math.abs(e.y) : 0;
this.viewBottom = (e.y < 0 ? -e.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
};
t.prototype._calcItemPos = function(e) {
var t, i, n, o, r, a, s, c;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this._customSize) {
var p = this._getFixedSize(e);
r = this._leftGap + (this._itemSize.width + this._columnGap) * (e - p.count) + (p.val + this._columnGap * p.count);
t = (l = this._customSize[e]) > 0 ? l : this._itemSize.width;
} else {
r = this._leftGap + (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
if (this.lackCenter) {
r -= this._leftGap;
r += this.content.width / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
left: r,
right: a = r + t,
x: r + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this._customSize) {
p = this._getFixedSize(e);
a = -this._rightGap - (this._itemSize.width + this._columnGap) * (e - p.count) - (p.val + this._columnGap * p.count);
t = (l = this._customSize[e]) > 0 ? l : this._itemSize.width;
} else {
a = -this._rightGap - (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
if (this.lackCenter) {
a += this._rightGap;
a -= this.content.width / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
right: a,
left: r = a - t,
x: r + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this._customSize) {
p = this._getFixedSize(e);
n = -this._topGap - (this._itemSize.height + this._lineGap) * (e - p.count) - (p.val + this._lineGap * p.count);
i = (l = this._customSize[e]) > 0 ? l : this._itemSize.height;
} else {
n = -this._topGap - (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
if (this.lackCenter) {
n += this._topGap;
n -= this.content.height / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
top: n,
bottom: o = n - i,
x: this._itemTmp.x,
y: o + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this._customSize) {
var l;
p = this._getFixedSize(e);
o = this._bottomGap + (this._itemSize.height + this._lineGap) * (e - p.count) + (p.val + this._lineGap * p.count);
i = (l = this._customSize[e]) > 0 ? l : this._itemSize.height;
} else {
o = this._bottomGap + (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
if (this.lackCenter) {
o -= this._bottomGap;
o += this.content.height / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
top: n = o + i,
bottom: o,
x: this._itemTmp.x,
y: o + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var _ = Math.floor(e / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c = (o = (n = -this._topGap - (this._itemSize.height + this._lineGap) * _) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
n = (o = this._bottomGap + (this._itemSize.height + this._lineGap) * _) + this._itemSize.height;
c = o + this._itemTmp.anchorY * this._itemSize.height;
}
s = this._leftGap + e % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
s += this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s += (1 - this._itemTmp.anchorX) * this._itemSize.width;
s -= (1 - this.content.anchorX) * this.content.width;
s *= -1;
}
return {
id: e,
top: n,
bottom: o,
x: s,
y: c
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
a = (r = this._leftGap + (this._itemSize.width + this._columnGap) * _) + this._itemSize.width;
s = r + this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s = (r = (a = -this._rightGap - (this._itemSize.width + this._columnGap) * _) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
s += (1 - this.content.anchorX) * this.content.width;
}
c = -this._topGap - e % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
c += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
c -= this._itemTmp.anchorY * this._itemSize.height;
c += this.content.anchorY * this.content.height;
c *= -1;
}
return {
id: e,
left: r,
right: a,
x: s,
y: c
};
}
}
};
t.prototype._calcExistItemPos = function(e) {
var t = this.getItemByListId(e);
if (!t) return null;
var i = {
id: e,
x: t.x,
y: t.y
};
if (this._sizeType) {
i.top = t.y + t.height * (1 - t.anchorY);
i.bottom = t.y - t.height * t.anchorY;
} else {
i.left = t.x - t.width * t.anchorX;
i.right = t.x + t.width * (1 - t.anchorX);
}
return i;
};
t.prototype.getItemPos = function(e) {
return this._virtual ? this._calcItemPos(e) : this.frameByFrameRenderNum ? this._calcItemPos(e) : this._calcExistItemPos(e);
};
t.prototype._getFixedSize = function(e) {
if (!this._customSize) return null;
null == e && (e = this._numItems);
var t = 0, i = 0;
for (var n in this._customSize) if (parseInt(n) < e) {
t += this._customSize[n];
i++;
}
return {
val: t,
count: i
};
};
t.prototype._onScrollBegan = function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
};
t.prototype._onScrollEnded = function() {
var e = this;
e.curScrollIsTouch = !1;
if (null != e.scrollToListId) {
var t = e.getItemByListId(e.scrollToListId);
e.scrollToListId = null;
t && cc.tween(t).to(.1, {
scale: 1.06
}).to(.1, {
scale: 1
}).start();
}
e._onScrolling();
e._slideMode != s.ADHERING || e.adhering ? e._slideMode == s.PAGE && (null != e._beganPos && e.curScrollIsTouch ? this._pageAdhere() : e.adhere()) : e.adhere();
};
t.prototype._onTouchStart = function(e, t) {
if (!this._scrollView.hasNestedViewGroup(e, t)) {
this.curScrollIsTouch = !0;
if (e.eventPhase !== cc.Event.AT_TARGET || e.target !== this.node) {
for (var i = e.target; null == i._listId && i.parent; ) i = i.parent;
this._scrollItem = null != i._listId ? i : e.target;
}
}
};
t.prototype._onTouchUp = function() {
var e = this;
e._scrollPos = null;
if (e._slideMode == s.ADHERING) {
this.adhering && (this._adheringBarrier = !0);
e.adhere();
} else e._slideMode == s.PAGE && (null != e._beganPos ? this._pageAdhere() : e.adhere());
this._scrollItem = null;
};
t.prototype._onTouchCancelled = function(e, t) {
var i = this;
if (!i._scrollView.hasNestedViewGroup(e, t) && !e.simulate) {
i._scrollPos = null;
if (i._slideMode == s.ADHERING) {
i.adhering && (i._adheringBarrier = !0);
i.adhere();
} else i._slideMode == s.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
this._scrollItem = null;
}
};
t.prototype._onSizeChanged = function() {
this.checkInited(!1) && this._onScrolling();
};
t.prototype._onItemAdaptive = function(e) {
if (!this._sizeType && e.width != this._itemSize.width || this._sizeType && e.height != this._itemSize.height) {
this._customSize || (this._customSize = {});
var t = this._sizeType ? e.height : e.width;
if (this._customSize[e._listId] != t) {
this._customSize[e._listId] = t;
this._resizeContent();
this.updateAll();
if (null != this._scrollToListId) {
this._scrollPos = null;
this.unschedule(this._scrollToSo);
this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
}
}
}
};
t.prototype._pageAdhere = function() {
var e = this;
if (e.cyclic || !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
var t = e._sizeType ? e.viewTop : e.viewLeft, i = (e._sizeType ? e.node.height : e.node.width) * e.pageDistance;
if (Math.abs(e._beganPos - t) > i) switch (e._alignCalcType) {
case 1:
case 4:
e._beganPos > t ? e.prePage(.5) : e.nextPage(.5);
break;

case 2:
case 3:
e._beganPos < t ? e.prePage(.5) : e.nextPage(.5);
} else e.elasticTop <= 0 && e.elasticRight <= 0 && e.elasticBottom <= 0 && e.elasticLeft <= 0 && e.adhere();
e._beganPos = null;
}
};
t.prototype.adhere = function() {
var e = this;
if (e.checkInited() && !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
e.adhering = !0;
e._calcNearestItem();
var t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width);
e.scrollTo(e.nearestListId, .7, t);
}
};
t.prototype.update = function() {
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var e = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, t = this._updateCounter; t < e; t++) {
var i = this.displayData[t];
i && this._createOrUpdateItem(i);
}
if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._doneAfterUpdate = !1;
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (e = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, 
t = this._updateCounter; t < e; t++) this._createOrUpdateItem2(t);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
}
};
t.prototype._createOrUpdateItem = function(e) {
var t = this.getItemByListId(e.id);
if (t) {
if (this._forceUpdate && this.renderEvent) {
t.setPosition(cc.v2(e.x, e.y));
this._resetItemSize(t);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
} else {
var i = this._pool.size() > 0;
t = i ? this._pool.get() : cc.instantiate(this._itemTmp);
if (!i || !cc.isValid(t)) {
t = cc.instantiate(this._itemTmp);
i = !1;
}
if (t._listId != e.id) {
t._listId = e.id;
t.setContentSize(this._itemSize);
}
t.setPosition(cc.v2(e.x, e.y));
this._resetItemSize(t);
this.content.addChild(t);
if (i && this._needUpdateWidget) {
var n = t.getComponent(cc.Widget);
n && n.updateAlignment();
}
t.setSiblingIndex(this.content.childrenCount - 1);
var o = t.getComponent(f.default);
t.listItem = o;
if (o) {
o.listId = e.id;
o.list = this;
o._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
this._resetItemSize(t);
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e.id) < 0 && this._lastDisplayData.push(e.id);
};
t.prototype._createOrUpdateItem2 = function(e) {
var t, i = this.content.children[e];
if (i) {
if (this._forceUpdate && this.renderEvent) {
i._listId = e;
t && (t.listId = e);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, e % this._actualNumItems);
}
} else {
(i = cc.instantiate(this._itemTmp))._listId = e;
this.content.addChild(i);
t = i.getComponent(f.default);
i.listItem = t;
if (t) {
t.listId = e;
t.list = this;
t._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], i, e % this._actualNumItems);
}
this._updateListItem(t);
this._lastDisplayData.indexOf(e) < 0 && this._lastDisplayData.push(e);
};
t.prototype._updateListItem = function(e) {
if (e && this.selectedMode > c.NONE) {
var t = e.node;
switch (this.selectedMode) {
case c.SINGLE:
e.selected = this.selectedId == t._listId;
break;

case c.MULT:
e.selected = this.multSelected.indexOf(t._listId) >= 0;
}
}
};
t.prototype._resetItemSize = function() {};
t.prototype._updateItemPos = function(e) {
var t = isNaN(e) ? e : this.getItemByListId(e), i = this.getItemPos(t._listId);
t.setPosition(i.x, i.y);
};
t.prototype.setMultSelected = function(e, t) {
var i = this;
if (i.checkInited()) {
Array.isArray(e) || (e = [ e ]);
if (null == t) i.multSelected = e; else {
var n = void 0, o = void 0;
if (t) for (var r = e.length - 1; r >= 0; r--) {
n = e[r];
(o = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n);
} else for (r = e.length - 1; r >= 0; r--) {
n = e[r];
(o = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(o, 1);
}
}
i._forceUpdate = !0;
i._onScrolling();
}
};
t.prototype.getMultSelected = function() {
return this.multSelected;
};
t.prototype.hasMultSelected = function(e) {
return this.multSelected && this.multSelected.indexOf(e) >= 0;
};
t.prototype.updateItem = function(e) {
if (this.checkInited()) {
Array.isArray(e) || (e = [ e ]);
for (var t = 0, i = e.length; t < i; t++) {
var n = e[t], o = this.getItemByListId(n);
o && cc.Component.EventHandler.emitEvents([ this.renderEvent ], o, n % this._actualNumItems);
}
}
};
t.prototype.updateAll = function() {
this.checkInited() && (this.numItems = this.numItems);
};
t.prototype.getItemByListId = function(e) {
if (this.content) for (var t = this.content.childrenCount - 1; t >= 0; t--) {
var i = this.content.children[t];
if (i._listId == e) return i;
}
};
t.prototype._getOutsideItem = function() {
for (var e, t = [], i = this.content.childrenCount - 1; i >= 0; i--) {
e = this.content.children[i];
this.displayData.find(function(t) {
return t.id == e._listId;
}) || t.push(e);
}
return t;
};
t.prototype._delRedundantItem = function() {
if (this._virtual) for (var e = this._getOutsideItem(), t = e.length - 1; t >= 0; t--) {
var i = e[t];
if (!this._scrollItem || i._listId != this._scrollItem._listId) {
i.isCached = !0;
this._pool.put(i);
for (var n = this._lastDisplayData.length - 1; n >= 0; n--) if (this._lastDisplayData[n] == i._listId) {
this._lastDisplayData.splice(n, 1);
break;
}
}
} else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
};
t.prototype._delSingleItem = function(e) {
e.removeFromParent();
e.destroy && e.destroy();
e = null;
};
t.prototype.aniDelItem = function(e, t, i) {
var n = this;
if (!n.checkInited() || n.cyclic || !n._virtual) return cc.error("This function is not allowed to be called!");
if (!t) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
var o, r = n.getItemByListId(e);
if (r) {
o = r.getComponent(f.default);
n._aniDelRuning = !0;
n._aniDelCB = t;
n._aniDelItem = r;
n._aniDelBeforePos = r.position;
n._aniDelBeforeScale = r.scale;
var a = n.displayData[n.displayData.length - 1].id, s = o.selected;
o.showAni(i, function() {
var i, o, p;
a < n._numItems - 2 && (i = a + 1);
if (null != i) {
var l = n._calcItemPos(i);
n.displayData.push(l);
n._virtual ? n._createOrUpdateItem(l) : n._createOrUpdateItem2(i);
} else n._numItems--;
if (n.selectedMode == c.SINGLE) s ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == c.MULT && n.multSelected.length) {
var _ = n.multSelected.indexOf(e);
_ >= 0 && n.multSelected.splice(_, 1);
for (var u = n.multSelected.length - 1; u >= 0; u--) (h = n.multSelected[u]) >= e && n.multSelected[u]--;
}
if (n._customSize) {
n._customSize[e] && delete n._customSize[e];
var d = {}, b = void 0;
for (var h in n._customSize) {
b = n._customSize[h];
var f = parseInt(h);
d[f - (f >= e ? 1 : 0)] = b;
}
n._customSize = d;
}
for (u = null != i ? i : a; u >= e + 1; u--) if (r = n.getItemByListId(u)) {
var y = n._calcItemPos(u - 1);
o = cc.tween(r).to(.2333, {
position: cc.v2(y.x, y.y)
});
if (u <= e + 1) {
p = !0;
o.call(function() {
n._aniDelRuning = !1;
t(e);
delete n._aniDelCB;
});
}
o.start();
}
if (!p) {
n._aniDelRuning = !1;
t(e);
n._aniDelCB = null;
}
}, !0);
} else t(e);
};
t.prototype.scrollTo = function(e, t, i, n) {
void 0 === t && (t = .5);
void 0 === i && (i = null);
void 0 === n && (n = !1);
var o = this;
if (o.checkInited(!1)) {
null == t ? t = .5 : t < 0 && (t = 0);
e < 0 ? e = 0 : e >= o._numItems && (e = o._numItems - 1);
!o._virtual && o._layout && o._layout.enabled && o._layout.updateLayout();
var r, a, s = o.getItemPos(e);
if (!s) return !1;
switch (o._alignCalcType) {
case 1:
r = s.left;
r -= null != i ? o.node.width * i : o._leftGap;
s = cc.v2(r, 0);
break;

case 2:
r = s.right - o.node.width;
r += null != i ? o.node.width * i : o._rightGap;
s = cc.v2(r + o.content.width, 0);
break;

case 3:
a = s.top;
a += null != i ? o.node.height * i : o._topGap;
s = cc.v2(0, -a);
break;

case 4:
a = s.bottom + o.node.height;
a -= null != i ? o.node.height * i : o._bottomGap;
s = cc.v2(0, -a + o.content.height);
}
var c = o.content.getPosition();
c = Math.abs(o._sizeType ? c.y : c.x);
var p = o._sizeType ? s.y : s.x;
if (Math.abs((null != o._scrollPos ? o._scrollPos : c) - p) > .5) {
o._scrollView.scrollToOffset(s, t);
o._scrollToListId = e;
o._scrollToEndTime = new Date().getTime() / 1e3 + t;
o._scrollToSo = o.scheduleOnce(function() {
o._adheringBarrier || (o.adhering = o._adheringBarrier = !1);
o._scrollPos = o._scrollToListId = o._scrollToEndTime = o._scrollToSo = null;
if (n) {
var t = o.getItemByListId(e);
t && cc.tween(t).to(.1, {
scale: 1.05
}).to(.1, {
scale: 1
}).start();
}
}, t + .1);
t <= 0 && o._onScrolling();
}
}
};
t.prototype._calcNearestItem = function() {
var e, t, i, n, o, r, a = this;
a.nearestListId = null;
a._virtual && a._calcViewPos();
i = a.viewTop;
n = a.viewRight;
o = a.viewBottom;
r = a.viewLeft;
for (var s = !1, c = 0; c < a.content.childrenCount && !s; c += a._colLineNum) if (e = a._virtual ? a.displayData[c] : a._calcExistItemPos(c)) {
t = a._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (a._alignCalcType) {
case 1:
if (e.right >= r) {
a.nearestListId = e.id;
r > t && (a.nearestListId += a._colLineNum);
s = !0;
}
break;

case 2:
if (e.left <= n) {
a.nearestListId = e.id;
n < t && (a.nearestListId += a._colLineNum);
s = !0;
}
break;

case 3:
if (e.bottom <= i) {
a.nearestListId = e.id;
i < t && (a.nearestListId += a._colLineNum);
s = !0;
}
break;

case 4:
if (e.top >= o) {
a.nearestListId = e.id;
o > t && (a.nearestListId += a._colLineNum);
s = !0;
}
}
}
if ((e = a._virtual ? a.displayData[a.displayItemNum - 1] : a._calcExistItemPos(a._numItems - 1)) && e.id == a._numItems - 1) {
t = a._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (a._alignCalcType) {
case 1:
n > t && (a.nearestListId = e.id);
break;

case 2:
r < t && (a.nearestListId = e.id);
break;

case 3:
o < t && (a.nearestListId = e.id);
break;

case 4:
i > t && (a.nearestListId = e.id);
}
}
};
t.prototype.prePage = function(e) {
void 0 === e && (e = .5);
this.checkInited() && this.skipPage(this.curPageNum - 1, e);
};
t.prototype.nextPage = function(e) {
void 0 === e && (e = .5);
this.checkInited() && this.skipPage(this.curPageNum + 1, e);
};
t.prototype.skipPage = function(e, t) {
var i = this;
if (i.checkInited()) {
if (i._slideMode != s.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(e < 0 || e >= i._numItems) && i.curPageNum != e) {
i.curPageNum = e;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], e);
i.scrollTo(e, t);
}
}
};
t.prototype.calcCustomSize = function(e) {
var t = this;
if (t.checkInited()) {
if (!t._itemTmp) return cc.error("Unset template item!");
if (!t.renderEvent) return cc.error("Unset Render-Event!");
t._customSize = {};
var i = cc.instantiate(t._itemTmp);
t.content.addChild(i);
for (var n = 0; n < e; n++) {
cc.Component.EventHandler.emitEvents([ t.renderEvent ], i, n);
i.height == t._itemSize.height && i.width == t._itemSize.width || (t._customSize[n] = t._sizeType ? i.height : i.width);
}
Object.keys(t._customSize).length || (t._customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return t._customSize;
}
};
r([ _({
type: cc.Enum(a),
tooltip: !1
}) ], t.prototype, "templateType", void 0);
r([ _({
type: cc.Node,
tooltip: !1,
visible: function() {
return this.templateType == a.NODE;
}
}) ], t.prototype, "tmpNode", void 0);
r([ _({
type: cc.Prefab,
tooltip: !1,
visible: function() {
return this.templateType == a.PREFAB;
}
}) ], t.prototype, "tmpPrefab", void 0);
r([ _() ], t.prototype, "_slideMode", void 0);
r([ _({
type: cc.Enum(s),
tooltip: !1
}) ], t.prototype, "slideMode", null);
r([ _({
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == s.PAGE;
}
}) ], t.prototype, "pageDistance", void 0);
r([ _({
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
return this._slideMode == s.PAGE;
}
}) ], t.prototype, "pageChangeEvent", void 0);
r([ _() ], t.prototype, "_virtual", void 0);
r([ _({
type: cc.Boolean,
tooltip: !1
}) ], t.prototype, "virtual", null);
r([ _({
tooltip: !1,
visible: function() {
var e = this.slideMode == s.NORMAL;
e || (this.cyclic = !1);
return e;
}
}) ], t.prototype, "cyclic", void 0);
r([ _({
tooltip: !1,
visible: function() {
return this.virtual;
}
}) ], t.prototype, "lackCenter", void 0);
r([ _({
tooltip: !1,
visible: function() {
var e = this.virtual && !this.lackCenter;
e || (this.lackSlide = !1);
return e;
}
}) ], t.prototype, "lackSlide", void 0);
r([ _({
type: cc.Integer
}) ], t.prototype, "_updateRate", void 0);
r([ _({
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0
}) ], t.prototype, "updateRate", null);
r([ _({
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
}) ], t.prototype, "frameByFrameRenderNum", void 0);
r([ _({
type: cc.Component.EventHandler,
tooltip: !1
}) ], t.prototype, "renderEvent", void 0);
r([ _({
type: cc.Enum(c),
tooltip: !1
}) ], t.prototype, "selectedMode", void 0);
r([ _({
tooltip: !1,
visible: function() {
return this.selectedMode == c.SINGLE;
}
}) ], t.prototype, "repeatEventSingle", void 0);
r([ _({
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
return this.selectedMode > c.NONE;
}
}) ], t.prototype, "selectedEvent", void 0);
r([ _({
serializable: !1
}) ], t.prototype, "_numItems", void 0);
return r([ l, u(), d("自定义组件/List"), h(cc.ScrollView), b(-5e3) ], t);
}(cc.Component);
i.default = y;
cc._RF.pop();
}, {
"./HSListItem": "HSListItem"
} ],
HSLogin: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e40a2ehlH9No5m/rm01iJni", "HSLogin");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSLogin = void 0;
var n = function() {
function e() {}
e.onAppStart = function() {};
return e;
}();
i.HSLogin = n;
cc._RF.pop();
}, {} ],
HSMathUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "21c65dmovFCK6GLax9DegJ1", "HSMathUtils");
var n = this && this.__read || function(e, t) {
var i = "function" == typeof Symbol && e[Symbol.iterator];
if (!i) return e;
var n, o, r = i.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = r.next()).done; ) a.push(n.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (o) throw o.error;
}
}
return a;
}, o = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSMathUtils = void 0;
var r = function() {
function e(e) {
this.seed = e || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}
e.prototype.random = function() {
this.seed = this.xorshift(this.seed);
return (this.seed >>> 0) / 4294967296;
};
e.prototype.randomInt = function(e, t) {
this.seed = this.xorshift(this.seed);
var i = t - e + 1, n = (this.seed >>> 0) / 4294967296;
return Math.floor(n * i) + e;
};
e.prototype.randomFloat = function(e, t) {
this.seed = this.xorshift(this.seed);
return (this.seed >>> 0) / 4294967296 * (t - e) + e;
};
e.prototype.xorshift = function(e) {
e ^= e << 13;
return (e ^= e >>> 17) ^ e << 5;
};
return e;
}(), a = function() {
function e() {}
e.randomInt = function(e, t) {
return Math.floor(Math.random() * (t - e + 1)) + e;
};
e.randomSeed = function() {
return e._randomSeed.random();
};
e.setSeed = function(t) {
e._randomSeed.seed = t;
};
e.getSeed = function() {
return e._randomSeed.seed;
};
e.randomIntSeed = function(t, i) {
return e._randomSeed.randomInt(t, i);
};
e.randomFloat = function(e, t) {
return Math.random() * (t - e) + e;
};
e.randomWeight = function(t) {
for (var i = e._randomSeed.randomFloat(0, t.reduce(function(e, t) {
return e + t;
})), n = 0, o = 0, r = t.length; o < r; o++) if (i < (n += t[o])) return o;
return 0;
};
e.weightedRandomArray = function(e) {
for (var t = [], i = Array.from({
length: e.length
}, function(e, t) {
return t;
}); i.length > 0; ) {
for (var n = i.map(function(t) {
return e[t];
}), o = n.reduce(function(e, t) {
return e + t;
}, 0), r = Math.random() * o, a = 0, s = null, c = 0; c < i.length; c++) if (r <= (a += n[c])) {
s = i[c];
break;
}
t.push(s);
i.splice(i.indexOf(s), 1);
}
return t;
};
e.randomFloatSeed = function(t, i) {
return e._randomSeed.randomFloat(t, i);
};
e.randomList = function(t) {
return t && 0 !== t.length ? t[e.randomInt(0, t.length - 1)] : null;
};
e.shuffleAry = function(e, t) {
var i;
void 0 === t && (t = e.length);
var r = o(e), a = r.length;
t = Math.min(t, a);
for (var s = a - 1; s > a - 1 - t; s--) {
var c = Math.floor(Math.random() * (s + 1));
i = n([ r[c], r[s] ], 2), r[s] = i[0], r[c] = i[1];
}
return r.slice(a - t);
};
e.randomListSeed = function(t) {
return t && 0 !== t.length ? t[e.randomIntSeed(0, t.length - 1)] : null;
};
e.getDistance = function(e, t) {
var i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
return Math.sqrt(i * i + n * n);
};
e.shuffle = function(e) {
for (var t, i, n = e.length; 0 !== n; ) {
i = Math.floor(Math.random() * n);
t = e[n -= 1];
e[n] = e[i];
e[i] = t;
}
return e;
};
e.deg2rad = function(e) {
return e * (Math.PI / 180);
};
e.rad2deg = function(e) {
return e * (180 / Math.PI);
};
e.rgb2hsl = function(e, t, i) {
var n, o = e / 255, r = t / 255, a = i / 255, s = Math.max(o, r, a), c = Math.min(o, r, a), p = (s + c) / 2, l = s - c;
n = 0 === l ? 0 : o === s ? (r - a) / l : r === s ? 2 + (a - o) / l : 4 + (o - r) / l;
(n *= 60) < 0 && (n += 360);
return [ n, s === c ? 0 : p <= .5 ? (s - c) / (s + c) : (s - c) / (2 - s - c), p ];
};
e.hsl2rgb = function(e, t, i) {
var n, o, r, a = (1 - Math.abs(2 * i - 1)) * t, s = e / 60, c = a * (1 - Math.abs(s % 2 - 1));
if (s < 1) {
n = a;
o = c;
r = 0;
} else if (s < 2) {
n = c;
o = a;
r = 0;
} else if (s < 3) {
n = 0;
o = a;
r = c;
} else if (s < 4) {
n = 0;
o = c;
r = a;
} else if (s < 5) {
n = c;
o = 0;
r = a;
} else {
n = a;
o = 0;
r = c;
}
var p = i - a / 2;
return [ n = Math.round(255 * (n + p)), o = Math.round(255 * (o + p)), r = Math.round(255 * (r + p)) ];
};
e.limit = function(e, t, i) {
return Math.min(i, Math.max(t, e));
};
e.removeFromArr = function(e, t) {
var i = e.indexOf(t);
-1 !== i && e.splice(i, 1);
};
e.calculateAngle = function(e, t) {
var i = t.x - e.x, n = t.y - e.y;
return (Math.atan2(n, i) * (180 / Math.PI) + 360) % 360 - 90;
};
e.getEasingFunction = function(e, t) {
return function(i) {
if (i <= 0) return 0;
if (i >= 1) return 1;
for (var n = i; ;) {
var o = 3 * (1 - n) * (1 - n) * (e.x - 0) + 6 * (1 - n) * n * (t.x - e.x) + 3 * n * n * (1 - t.x);
n -= o / (6 * (1 - n) * (e.x - 2 * t.x + 1) + 6 * n * (t.x - 1));
if (Math.abs(o) < 1e-5) break;
}
return (1 - n) * (1 - n) * 0 + 2 * (1 - n) * n * e.y + n * n * t.y;
};
};
e.generateUniqueId = function() {
return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};
e.getLast = function(e) {
if (e && 0 !== e.length) return e[e.length - 1];
};
e._randomSeed = new r();
return e;
}();
i.HSMathUtils = a;
cc._RF.pop();
}, {} ],
HSNodePool: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "72d32gxVvtIr6euMO+MEm0l", "HSNodePool");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSNodePool = void 0;
var n = function() {
function e() {
this.pool = new Map();
this.prefabs = new Map();
this.poolDetail = {};
this.poolCount = {};
}
Object.defineProperty(e, "ins", {
get: function() {
null === e._inst && (e._inst = new this());
return e._inst;
},
enumerable: !1,
configurable: !0
});
e.prototype.getNode = function(e) {
var t = null;
this.pool.has(e) || this.pool.set(e, []);
if (!(t = this.pool.get(e).shift()) || !cc.isValid(t, !0)) {
if (!this.prefabs.has(e)) return null;
t = cc.instantiate(this.prefabs.get(e));
}
if (t && !t.static_key && (t.parent || !cc.isValid(t, !0))) return this.getNode(e);
t.scale = 1;
t.opacity = 255;
t.x = 0;
t.y = 0;
t.angle = 0;
t.active = !0;
t.recycle_key = e;
return t;
};
e.prototype.recycleAllChildren = function(t) {
if (t) for (var i = t.length - 1; i >= 0; i--) e.ins.recycle(t[i]);
};
e.prototype.recycle = function(e) {
e.static_key ? e.active = !1 : e.removeFromParent();
cc.isValid(e, !0) && (void 0 !== e.recycle_key ? this.pool.get(e.recycle_key).includes(e) || this.pool.get(e.recycle_key).push(e) : e.destroy());
};
e.prototype.initNodePool = function(e, t, i, n) {
void 0 === i && (i = 8);
void 0 === n && (n = null);
if (!this.pool.has(e) || n) {
for (var o = [], r = 0; r < i; r++) {
var a = cc.instantiate(t);
a.recycle_key = e;
o.push(a);
if (n) {
a.opacity = 0;
n.addChild(a);
a.static_key = !0;
}
}
this.prefabs.set(e, t);
this.pool.set(e, o);
}
};
e.prototype.onDestroy = function() {
this.pool.forEach(function(e) {
e.forEach(function(e) {
e.destroy();
});
});
this.pool.clear();
this.prefabs.clear();
};
e._inst = null;
return e;
}();
i.HSNodePool = n;
cc._RF.pop();
}, {} ],
HSObjectUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "768205WuDxGFqgEVn6I3ZZG", "HSObjectUtils");
var n = this && this.__assign || function() {
return (n = Object.assign || function(e) {
for (var t, i = 1, n = arguments.length; i < n; i++) {
t = arguments[i];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__read || function(e, t) {
var i = "function" == typeof Symbol && e[Symbol.iterator];
if (!i) return e;
var n, o, r = i.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = r.next()).done; ) a.push(n.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (o) throw o.error;
}
}
return a;
}, r = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], n = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSObjectUtils = void 0;
var s = function() {
function e() {}
e.safeJSONParse = function(e) {
try {
return JSON.parse(e, function(e, t) {
return "object" == typeof t && null !== t && "Map" === t.datatype ? new Map(JSON.parse(t.value)) : t;
});
} catch (e) {
return null;
}
};
e.safeStringify = function(e) {
var t = this;
return JSON.stringify(e, function(e, i) {
return i instanceof cc.Node ? "CCNODE" : i instanceof cc.Component ? "CCComponent" : i instanceof Map ? {
datatype: "Map",
value: t.mapToJSON(i)
} : i;
});
};
e.mapToJSON = function(e) {
return JSON.stringify(Array.from(e.entries()));
};
e.deepCopy = function(t) {
if (null === t || "object" != typeof t) return t;
if (t instanceof Date) return new Date(t.getTime());
if (t instanceof Array) return t.map(function(t) {
return e.deepCopy(t);
});
if ("object" == typeof t) {
var i = {};
Object.keys(t).forEach(function(n) {
i[n] = e.deepCopy(t[n]);
});
return i;
}
return t;
};
e.shallowCopy = function(e) {
return null === e || "object" != typeof e ? e : e instanceof Array ? r(e) : n({}, e);
};
e.deepMerge = function(t) {
for (var i, n, o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
if (!o.length) return t;
var s = o.shift();
if (e.isObject(t) && e.isObject(s)) for (var c in s) if (e.isObject(s[c])) {
t[c] || Object.assign(t, ((i = {})[c] = {}, i));
e.deepMerge(t[c], s[c]);
} else Object.assign(t, ((n = {})[c] = s[c], n));
return e.deepMerge.apply(e, r([ t ], o));
};
e.isObject = function(e) {
return e && "object" == typeof e && !Array.isArray(e);
};
e.isEmpty = function(e) {
return null == e || (Array.isArray(e) ? 0 === e.length : "object" == typeof e && 0 === Object.keys(e).length);
};
e.get = function(e, t, i) {
var n, o, r = Array.isArray(t) ? t : t.split("."), s = e;
try {
for (var c = a(r), p = c.next(); !p.done; p = c.next()) {
var l = p.value;
if (null == s || "object" != typeof s) return i;
s = s[l];
}
} catch (e) {
n = {
error: e
};
} finally {
try {
p && !p.done && (o = c.return) && o.call(c);
} finally {
if (n) throw n.error;
}
}
return void 0 !== s ? s : i;
};
e.set = function(e, t, i) {
for (var n = Array.isArray(t) ? t : t.split("."), o = e, r = 0; r < n.length - 1; r++) {
var a = n[r];
a in o && "object" == typeof o[a] || (o[a] = {});
o = o[a];
}
o[n[n.length - 1]] = i;
};
e.isEqual = function(t, i) {
var n, o;
if (t === i) return !0;
if (null === t || null === i) return !1;
if (void 0 === t || void 0 === i) return !1;
if (typeof t != typeof i) return !1;
if ("object" != typeof t) return t === i;
if (Array.isArray(t) !== Array.isArray(i)) return !1;
var r = Object.keys(t), s = Object.keys(i);
if (r.length !== s.length) return !1;
try {
for (var c = a(r), p = c.next(); !p.done; p = c.next()) {
var l = p.value;
if (!s.includes(l)) return !1;
if (!e.isEqual(t[l], i[l])) return !1;
}
} catch (e) {
n = {
error: e
};
} finally {
try {
p && !p.done && (o = c.return) && o.call(c);
} finally {
if (n) throw n.error;
}
}
return !0;
};
e.pick = function(e, t) {
var i = {};
t.forEach(function(t) {
Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t]);
});
return i;
};
e.omit = function(e, t) {
var i = n({}, e);
t.forEach(function(e) {
delete i[e];
});
return i;
};
e.toQueryString = function(e) {
var t = new URLSearchParams();
Object.keys(e).forEach(function(i) {
null !== e[i] && void 0 !== e[i] && t.append(i, String(e[i]));
});
return t.toString();
};
e.fromQueryString = function(e) {
var t = new URLSearchParams(e), i = {};
t.forEach(function(e, t) {
i[t] = e;
});
return i;
};
e.mergeObjects = function(e, t) {
return Object.assign({}, e, t);
};
return e;
}();
i.HSObjectUtils = s;
cc._RF.pop();
}, {} ],
HSResManager: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "dd981KGWeFNxYM0snyYZ1Sd", "HSResManager");
var n = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = e("../utils/HSResourceUtils"), a = function() {
function e() {
this._loadingTask = new Map();
this.loadedBundles = new Array();
this.referenceCount = new Map();
this.moduleReference = new Map();
this.change65 = [ "galijiao", "kaochuan", "pisa" ];
}
Object.defineProperty(e, "ins", {
get: function() {
null === e._inst && (e._inst = new this());
return e._inst;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {};
e.prototype._loadRemote = function(t) {
var i = this;
return new Promise(function(n) {
cc.assetManager.loadRemote(t, function(o, r) {
if (i && e._inst) if (o) {
console.error("ResLoader loadRemote error:", t, o);
n(null);
} else n(r); else n(null);
});
});
};
e.prototype._loadFromBundle = function(t, i, a) {
return n(this, void 0, Promise, function() {
var n, s, c = this;
return o(this, function() {
return (n = cc.assetManager.getBundle(a.bundles)) && (s = n.get(t, i)) ? [ 2, s ] : [ 2, new Promise(function(n) {
r.HSResourceUtils.loadBundle(a.bundles).then(function(o) {
o && e._inst ? o.load(t, i, function(t, i) {
c && e._inst ? n(t ? null : i) : n(null);
}) : n(null);
});
}) ];
});
});
};
e.prototype._loadFromResoures = function(t, i) {
var n = this;
return new Promise(function(o) {
cc.resources.load(t, i, function(t, i) {
n && e._inst ? o(t ? null : i) : o(null);
});
});
};
e.prototype._loadAny = function(e, t, i) {
var n = this;
if (this._loadingTask.has(e)) return this._loadingTask.get(e);
var o = null;
(o = e.startsWith("http") ? this._loadRemote(e, i) : i.bundles ? this._loadFromBundle(e, t, i) : this._loadFromResoures(e, t, i)).then(function() {
return n._loadingTask.delete(e);
});
this._loadingTask.set(e, o);
return o;
};
e.prototype.load = function(e, t, i) {
if (!this.isRemoteRes(e) && !t) {
var n = this.getResBundle(e, i);
if (!(t = null == n ? void 0 : n.name)) {
Promise.resolve(null);
return;
}
}
return this._loadAny(e, null != i ? i : cc.Asset, {
bundles: t
});
};
e.prototype.ref = function(e, t) {
var i = cc.assetManager.dependUtil.getDepsRecursively(t);
if (!(i.length <= 0)) {
i.push(t);
for (var n = this.moduleReference.get(e) || [], o = 0; o < i.length; o++) {
var r = i[o];
if (n.indexOf(r) < 0) {
n.push(r);
var a = (this.referenceCount.get(r) || 0) + 1;
this.referenceCount.set(r, a);
}
}
this.moduleReference.set(e, n);
}
};
e.prototype.addRef = function(e, t) {
var i = this.moduleReference.get(e) || [];
if (i.indexOf(t) < 0) {
i.push(t);
var n = (this.referenceCount.get(t) || 0) + 1;
this.referenceCount.set(t, n);
}
};
e.prototype.unrefPartial = function(e, t) {
if (this.moduleReference.has(e)) {
for (var i = cc.assetManager.dependUtil.getDepsRecursively(t), n = 0; n < i.length; n++) {
var o = i[n], r = (this.referenceCount.get(o) || 0) - 1;
r <= 0 ? this.referenceCount.delete(o) : this.referenceCount.set(o, r);
}
var a = this.moduleReference.get(e) || [];
for (n = 0; n < i.length; n++) {
var s = i[n], c = cc.assetManager.assets.get(s);
c && cc.assetManager.releaseAsset(c);
}
for (n = a.length - 1; n >= 0; n--) {
s = a[n];
i.indexOf(s) >= 0 && a.splice(n, 1);
}
this.moduleReference.set(e, a);
}
};
e.prototype.unref = function(e, t) {
void 0 === t && (t = !1);
if (this.moduleReference.has(e)) {
for (var i = this.moduleReference.get(e), n = [], o = 0; o < i.length; o++) {
var r = i[o], a = (this.referenceCount.get(r) || 0) - 1;
if (a <= 0) {
n.push(r);
this.referenceCount.delete(r);
} else this.referenceCount.set(r, a);
}
this.moduleReference.delete(e);
if (!(n.length <= 0)) for (o = 0; o < n.length; o++) {
var s = n[o], c = cc.assetManager.assets.get(s);
c && cc.assetManager.releaseAsset(c);
}
}
};
e.prototype.initRef = function() {
var e = this;
this.loadedBundles = [];
cc.assetManager.bundles.forEach(function(t, i) {
e.loadedBundles.push(i);
});
var t = cc.assetManager.main.getSceneInfo("StartScene");
this.ref("StartScene", t.uuid);
};
e.prototype.unloadBundle = function(e) {
if (cc.assetManager.bundles.has(e)) {
var t = cc.assetManager.getBundle(e);
if (t) {
t.releaseAll();
cc.assetManager.removeBundle(t);
var i = this.loadedBundles.indexOf(e);
i >= 0 && this.loadedBundles.splice(i, 1);
}
}
};
e.prototype.unloadBundles = function(e) {
for (var t = 0; t < e.length; t++) this.unloadBundle(e[t]);
};
e.prototype.loadBundle = function(e, t) {
r.HSResourceUtils.loadBundle(e).then(function(e) {
t && t(null, e);
}).catch(function(e) {
t && t(e, null);
});
};
e.prototype.loadBundleSync = function(e) {
return n(this, void 0, Promise, function() {
return o(this, function() {
return [ 2, new Promise(function(t) {
r.HSResourceUtils.loadBundle(e).then(function(e) {
t(e);
}).catch(function() {
t(null);
});
}) ];
});
});
};
e.prototype.loadBundlesBatch = function(e) {
return n(this, void 0, Promise, function() {
var t, i = this;
return o(this, function() {
t = e.map(function(e) {
return i.loadBundleSync(e);
});
return [ 2, Promise.all(t).then(function(e) {
return e;
}) ];
});
});
};
e.prototype.loadBundles = function(e, t) {
for (var i = 0, n = 0; n < e.length; n++) this.loadBundle(e[n], function() {
if (++i >= e.length) {
i = null;
t();
}
});
};
e.prototype.getResBundle = function(e, t) {
var i = null;
cc.assetManager.bundles.forEach(function(n) {
(n.getInfoWithPath(e, t) || n.getSceneInfo(e)) && (i = n);
});
return i;
};
e.prototype.isRemoteRes = function(e) {
return e.startsWith("http://") || e.startsWith("https://");
};
e.prototype.removeModule = function(e, t) {
var i = e.substring(0, 1).toLowerCase() + e.substring(1, e.length), n = this.loadedBundles.indexOf(i);
this.loadedBundles.splice(n, 1);
var o = cc.assetManager.getBundle(i);
if (o) {
var r = o.getInfoWithPath(t, cc.Prefab);
if (r) {
var a = cc.assetManager.assets.get(r.uuid);
cc.assetManager.releaseAsset(a);
}
}
};
e.prototype.get = function(e, t) {
var i = this.getResBundle(e, t);
return null == i ? void 0 : i.get(e, t);
};
e.prototype.loadAssets = function(t, i, n, o) {
var r = this;
i.load(t, n, function(t, i) {
r && e._inst && !t && i ? o && o(i) : o && o(null);
});
};
e.prototype.loadArray = function(t) {
var i = this;
return new Promise(function(n) {
cc.assetManager.loadAny(t, function(t, o) {
i && e._inst ? n(o) : n(null);
});
});
};
e.prototype.loadBatch = function(e, t) {
var i = this;
return new Promise(function(n) {
for (var o = new Map(), r = function(r) {
var a = e[r];
i.load(a, null, t).then(function(t) {
o.set(a, t);
o.size >= e.length && n(o);
});
}, a = 0; a < e.length; a++) r(a);
});
};
e.prototype.loadBatchInBundle = function(e, t, i) {
var n = this;
return new Promise(function(o) {
for (var r = new Map(), a = function(a) {
var s = e[a];
n.load(s, t, i).then(function(t) {
r.set(s, t);
r.size >= e.length && o(r);
});
}, s = 0; s < e.length; s++) a(s);
});
};
e.prototype.loadPrefab = function(e, t) {
return this.load(e, t, cc.Prefab);
};
e.prototype.preloadPrefab = function(e, t) {
var i = this;
"string" == typeof t ? this.loadBundle(t, function(t, n) {
i.preloadPrefab(e, n);
}) : t instanceof cc.AssetManager.Bundle && t.preloadDir(e, function() {});
};
e.prototype.loadSpine = function(e, t, i, n, o) {
var r = this;
void 0 === n && (n = !1);
void 0 === o && (o = !0);
return new Promise(function(a) {
r.load(t, i, sp.SkeletonData).then(function(t) {
if (t) {
e.skeletonData && o && r.unrefPartial(i, e.skeletonData._uuid);
e.skeletonData = t;
e.premultipliedAlpha = n;
r.ref(i, t._uuid);
a();
} else a();
});
});
};
e.prototype.loadSprite = function(e, t, i, r) {
void 0 === r && (r = !0);
return n(this, void 0, void 0, function() {
var n, r, a, s;
return o(this, function(o) {
switch (o.label) {
case 0:
if (t.includes("9999")) return [ 2 ];
n = e.getComponent(cc.Sprite);
r = this.isRemoteRes(t) ? cc.Texture2D : cc.SpriteFrame;
return [ 4, this.load(t, i, r) ];

case 1:
if (!(a = o.sent())) return [ 2 ];
s = a instanceof cc.Texture2D ? new cc.SpriteFrame(a) : a;
n && (n.spriteFrame = s);
return [ 2, s ];
}
});
});
};
e.prototype.loadScene = function(e, t) {
cc.director.loadScene(e, function(e) {
e || null == t || t();
});
};
e._inst = null;
return e;
}();
i.default = a;
cc._RF.pop();
}, {
"../utils/HSResourceUtils": "HSResourceUtils"
} ],
HSResourceUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0c0a3gAKlhNMYNgBqIbTFCx", "HSResourceUtils");
var n = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSResourceUtils = void 0;
var r = function() {
function e() {}
e.loadPrefab = function(t, i) {
void 0 === i && (i = "resources");
return e.load(t, cc.Prefab, i);
};
e.loadNode = function(t, i, r, a) {
void 0 === a && (a = "resources");
return n(this, void 0, Promise, function() {
var n, s, c;
return o(this, function(o) {
switch (o.label) {
case 0:
n = r || "sand_default_node_name";
return (s = i.getChildByName(n)) ? [ 3, 2 ] : [ 4, e.loadPrefab(t, a) ];

case 1:
c = o.sent();
(s = cc.instantiate(c)).name = n;
i.addChild(s);
o.label = 2;

case 2:
return [ 2, s ];
}
});
});
};
e.loadJSON = function(t, i) {
void 0 === i && (i = "resources");
return e.load(t, cc.JsonAsset, i);
};
e.loadMaterial = function(t, i) {
void 0 === i && (i = "resources");
return e.load(t, cc.Material, i);
};
e.loadTexture2D = function(t, i) {
void 0 === i && (i = "resources");
return n(this, void 0, Promise, function() {
return o(this, function(n) {
switch (n.label) {
case 0:
return [ 4, e.load(t, cc.Texture2D, i) ];

case 1:
return [ 2, n.sent() ];
}
});
});
};
e.loadSpriteFrame = function(t, i) {
void 0 === i && (i = "resources");
return n(this, void 0, Promise, function() {
var n, r;
return o(this, function(o) {
switch (o.label) {
case 0:
return [ 4, e.load(t, cc.SpriteFrame, i) ];

case 1:
if ((n = o.sent()) instanceof cc.Texture2D) {
(r = new cc.SpriteFrame()).setTexture(n);
return [ 2, r ];
}
return [ 2, n ];
}
});
});
};
e.loadBundle = function(e) {
return n(this, void 0, Promise, function() {
return o(this, function() {
return [ 2, new Promise(function(t) {
var i = cc.assetManager.getBundle(e);
if (i) return t(i);
cc.assetManager.loadBundle(e, function(e, i) {
t(e ? null : i);
});
}) ];
});
});
};
e.runScene = function(t, i) {
return n(this, void 0, void 0, function() {
var n, r;
return o(this, function(o) {
switch (o.label) {
case 0:
return (n = cc.director.getScene()) && n.name === i ? [ 2 ] : [ 4, e.loadBundle(t) ];

case 1:
if (!(r = o.sent())) return [ 2 ];
r.loadScene(i, function(e, t) {
if (!e) {
var n = cc.director.getScene();
n && n.name === i || cc.director.runScene(t);
}
});
return [ 2 ];
}
});
});
};
e.runMiniScene = function(t, i) {
return n(this, void 0, void 0, function() {
var n, r;
return o(this, function(o) {
switch (o.label) {
case 0:
return (n = cc.director.getScene()) && n.name === i ? [ 2 ] : [ 4, e.loadBundle(t) ];

case 1:
if (!(r = o.sent())) return [ 2 ];
r.loadScene(i, function(e, t) {
if (!e) {
var n = cc.director.getScene();
n && n.name === i || cc.director.runScene(t);
}
});
return [ 2 ];
}
});
});
};
e.load = function(e, t, i) {
var r = this;
void 0 === i && (i = "resources");
return new Promise(function(a, s) {
return n(r, void 0, void 0, function() {
return o(this, function(n) {
switch (n.label) {
case 0:
return cc.assetManager.getBundle(i) ? [ 3, 2 ] : [ 4, new Promise(function(e) {
cc.assetManager.loadBundle(i, function() {
e(null);
});
}) ];

case 1:
n.sent();
n.label = 2;

case 2:
t ? cc.assetManager.getBundle(i).load(e, t, function(t, i) {
if (t) {
cc.error("load error:", e, t);
s(t);
} else a(i);
}) : cc.assetManager.getBundle(i).load(e, function(t, i) {
if (t) {
cc.error("load error:", e, t);
s(t);
} else a(i);
});
return [ 2 ];
}
});
});
});
};
e.loadAudio = function(e, t) {
void 0 === t && (t = "resources");
return n(this, void 0, Promise, function() {
var i;
return o(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.load(e, cc.AudioClip, t) ];

case 1:
return (i = n.sent()) ? [ 2, i ] : [ 2, null ];
}
});
});
};
e.playAudio = function(e, t) {
void 0 === t && (t = "resources");
return n(this, void 0, Promise, function() {
var i;
return o(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.loadAudio(e, t) ];

case 1:
return (i = n.sent()) ? [ 2, cc.audioEngine.play(i, !1, 1) ] : [ 2, null ];
}
});
});
};
e.playBGM = function(e, t) {
void 0 === t && (t = "resources");
return n(this, void 0, Promise, function() {
var i;
return o(this, function(n) {
switch (n.label) {
case 0:
this.isOpen = !0;
return [ 4, this.loadAudio(e, t) ];

case 1:
return (i = n.sent()) && this.isOpen ? [ 2, cc.audioEngine.playMusic(i, !0) ] : [ 2, null ];
}
});
});
};
e.pauseBGM = function() {
return n(this, void 0, void 0, function() {
return o(this, function() {
this.isOpen = !1;
cc.audioEngine.pauseMusic();
return [ 2 ];
});
});
};
e.isOpen = !0;
return e;
}();
i.HSResourceUtils = r;
cc._RF.pop();
}, {} ],
HSSkinManager: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "6719ci2YrlBT4amVjQsK/eA", "HSSkinManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSSkinManager = void 0;
var n = function() {
function e() {
this.skinConfigs = null;
this.skinRegConfigs = new Map();
this.CacheMap = new Map();
}
Object.defineProperty(e, "ins", {
get: function() {
null === e._inst && (e._inst = new this());
return e._inst;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
var e = this;
cc.assetManager.pipeline.insert(function(t, i) {
t.output = t.input;
for (var n = 0; n < t.input.length; n++) try {
e.replaceInputItem(t.input[n]);
} catch (e) {}
null == i || i(null);
}, 1);
};
e.prototype.replaceInputItem = function(e) {
if (e && this.skinConfigs) if (e.info && e.info.url && -1 != e.info.url.indexOf(".fire")) this.replaceSceneItem(e); else {
var t = this.getConfigWithItem(e);
if (t) {
var i = null;
try {
t.condition() && (i = t.replaceFunc(e.url));
} catch (e) {
console.error("[HSSkinManager] replaceItem: 执行config函数时出错", e);
return;
}
if (i && "string" == typeof i) {
var n = this.getBundleName(i);
n || (n = e.config.name);
var o = cc.assetManager.getBundle(n);
if (o) {
var r = this.getAssetPath(i), a = o.getInfoWithPath(r, e.info.ctor);
if (a) {
e.info = a;
e.config = o._config;
e.url && (e.url = this.generateUrl(e, a, o._config));
e.uuid && a.uuid && (e.uuid = a.uuid);
}
}
}
}
}
};
e.prototype.replaceSceneItem = function(e) {
var t, i, n, o, r = null === (i = null === (t = null == e ? void 0 : e.info) || void 0 === t ? void 0 : t.url) || void 0 === i ? void 0 : i.lastIndexOf("/"), a = null === (o = null === (n = null == e ? void 0 : e.info) || void 0 === n ? void 0 : n.url) || void 0 === o ? void 0 : o.substring(r + 1), s = this.skinConfigs.get(a);
if (s) {
var c = null;
try {
s.condition() && (c = s.replaceFunc());
} catch (e) {
console.error("[HSSkinManager] replaceItem: 执行config函数时出错", e);
return;
}
if (c && "string" == typeof c) {
var p = this.getAssetPath(c), l = this.getBundleName(c);
l || (l = e.config.name);
var _ = cc.assetManager.getBundle(l);
if (_ && p) {
var u = _.getSceneInfo(p);
if (u) {
e.info = u;
e.config = _._config;
e.url && (e.url = this.generateUrl(e, u, _._config));
e.uuid && u.uuid && (e.uuid = u.uuid);
}
}
}
}
};
e.prototype.generateUrl = function(e, t, i) {
var n;
n = e.isNative ? i && i.nativeBase ? i.base + i.nativeBase : "" : i && i.importBase ? i.base + i.importBase : "";
var o = t.uuid, r = "";
t && (r = e.isNative ? t.nativeVer ? "." + t.nativeVer : "" : t.ver ? "." + t.ver : "");
return ".ttf" === e.ext ? n + "/" + o.slice(0, 2) + "/" + o + r + "/" + e.options.__nativeName__ : n + "/" + o.slice(0, 2) + "/" + o + r + e.ext;
};
e.prototype.getConfigWithItem = function(e) {
var t, i, n = this.skinConfigs.get(null === (t = e.info) || void 0 === t ? void 0 : t.path);
n || (n = this.skinConfigs.get((null === (i = e.info) || void 0 === i ? void 0 : i.path) + e.ext));
return n;
};
e.prototype.getAssetPath = function(e) {
if (e.startsWith("res/")) return e;
var t = e.indexOf("/");
return -1 !== t ? e.substring(t + 1) : e;
};
e.prototype.getAssetInfo = function(e) {
var t = {
path: "",
type: null
};
e.startsWith("res/") && (t.path = e);
var i = e.indexOf("/");
-1 !== i && (t.path = e.substring(i + 1));
t.type = this.getAssetType(e);
return t;
};
e.prototype.getAssetType = function(e) {
switch (cc.path.extname(e)) {
case ".json":
return cc.Asset;

case ".png":
return cc.Texture2D;

case ".atlas":
return cc.SpriteAtlas;

default:
return null;
}
};
e.prototype.getBundleName = function(e) {
if (e.startsWith("res/")) return null;
var t = e.indexOf("/");
return -1 !== t ? e.substring(0, t) : null;
};
e.prototype.initConfig = function(e) {
this.init();
this.skinConfigs = e;
};
e.prototype.addSkinConfig = function(e, t) {
e.includes("##") ? this.skinRegConfigs.set(e.replace("##", ""), t) : this.skinConfigs.set(e, t);
};
e._inst = null;
return e;
}();
i.HSSkinManager = n;
cc._RF.pop();
}, {} ],
HSTimeUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "31b44M9sclFwbduByFNw7wA", "HSTimeUtils");
var n = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSTimeUtils = void 0;
var r = function() {
function e() {}
e.nextFrame = function() {
return new Promise(function(t) {
e.callLater(function() {
t(null);
}, null);
});
};
e.wait = function(t) {
return n(this, void 0, void 0, function() {
return o(this, function(i) {
switch (i.label) {
case 0:
return [ 4, new Promise(function(i) {
e.setTimeout(function() {
i(null);
}, null, t);
}) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.callLater = function(e, t) {
cc.director.once(cc.Director.EVENT_AFTER_UPDATE, e, t);
};
e.clearTimeout = function(e, t) {
var i = cc.director.getScheduler(), n = t || cc.director.getScene();
i.enableForTarget(n);
i.unschedule(e, n);
};
e.clearAllTimeout = function(e) {
var t = cc.director.getScheduler(), i = e || cc.director.getScene();
t.enableForTarget(i);
t.unscheduleAllForTarget(i);
};
e.interval = function(e, t, i) {
var n = cc.director.getScheduler(), o = t || cc.director.getScene();
if (!o || "undefined" == typeof o.isValid || o.isValid) {
n.enableForTarget(o);
n.schedule(e, o, i, cc.macro.REPEAT_FOREVER, 0, !1);
}
};
e.setTimeout = function(e, t, i) {
var n = cc.director.getScheduler(), o = t || cc.director.getScene();
if (!o || "undefined" == typeof o.isValid || o.isValid) {
n.enableForTarget(o);
n.schedule(e, o, i, 0, 0, !1);
}
};
e.timeOut = function(e, t) {
void 0 === e && (e = 0);
return new Promise(function(i, n) {
var o = cc.director.getScheduler(), r = t || cc.director.getScene();
if (!r || "undefined" == typeof r.isValid || r.isValid) {
o.enableForTarget(r);
o.schedule(function() {
!r || "undefined" == typeof r.isValid || r.isValid ? i(null) : n(new Error("回调执行时目标对象已失效"));
}, r, e, 0, 0, !1);
} else n(new Error("目标对象已失效"));
});
};
return e;
}();
i.HSTimeUtils = r;
cc._RF.pop();
}, {} ],
HSUIBase: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "52f69I8kFpJ3I9qk+9ukE0m", "HSUIBase");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = e("./HSDelegateComponent"), s = e("./HSResManager"), c = e("./HSUIInterface"), p = e("./HSUIManager"), l = cc._decorator.ccclass, _ = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadCost = 0;
t.loadResolve = null;
t.waitLoad = !1;
return t;
}
t.prototype.onLoad = function() {
var e;
(null === (e = this.params) || void 0 === e ? void 0 : e.onLoad) && this.params.onLoad();
};
t.prototype.onSysBack = function() {
this.closeSelf();
return !0;
};
t.prototype.removeEvents = function() {};
t.prototype.enter = function() {};
t.prototype.onAdded = function(e) {
var t;
this.enter(e);
this.waitLoad || null === (t = this.getComponent(a.HSDelegateComponent)) || void 0 === t || t.callLoadFinished();
};
t.prototype.loadFinish = function() {
var e;
null === (e = this.getComponent(a.HSDelegateComponent)) || void 0 === e || e.callLoadFinished();
};
t.prototype.onRemoved = function() {
this.leave();
};
t.prototype.onDestroy = function() {};
t.prototype.onBeforeRemove = function() {
this.leave();
};
t.prototype.playEnterAnimation = function(e) {
null == e || e();
};
t.prototype.onEnterAnimationEnd = function() {};
t.prototype.playLeaveAnimation = function(e) {
null == e || e();
};
t.prototype.leave = function() {};
t.prototype.closeSelf = function() {
var e;
(null === (e = this.params) || void 0 === e ? void 0 : e.onClose) && this.params.onClose();
this.isOnlyRemoveSelf() ? this.doRemoveSelf() : p.default.ins.close(this.config);
};
t.prototype.isOnlyRemoveSelf = function() {
return this.config && this.config.layer === c.HSLayerType.Notify;
};
t.prototype.doRemoveSelf = function() {
if (cc.isValid(this.node)) {
var e = this.getComponent(a.HSDelegateComponent);
if (e) {
var t = e.viewParams;
t.node = null;
e.remove(!0);
t.valid = !1;
} else this.node.destroy();
}
};
t.prototype.closeWithAnimation = function(e) {
this.playCloseAnimation(e, this.closeSelf.bind(this));
};
t.prototype.playCloseAnimation = function(e, t) {
var i = this.node.getComponent(cc.Animation);
if (i) {
var n = i.play(e);
i.scheduleOnce(function() {
null == t || t();
}, n.duration);
} else t();
};
t.prototype.loadPrefab = function(e, t) {
s.default.ins.loadPrefab(e, this.config.bundle).then(function(e) {
t(e);
});
};
t.prototype.setSprite = function(e, t) {
s.default.ins.loadSprite(e, t, this.config.bundle);
};
t.prototype.onHide = function() {};
t.prototype.onTop = function() {};
return r([ l ], t);
}(cc.Component);
i.default = _;
cc._RF.pop();
}, {
"./HSDelegateComponent": "HSDelegateComponent",
"./HSResManager": "HSResManager",
"./HSUIInterface": "HSUIInterface",
"./HSUIManager": "HSUIManager"
} ],
HSUIInterface: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c02480o34dL9664uIyrfBZN", "HSUIInterface");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HSViewParams = i.HSLayerType = void 0;
(function(e) {
e.MainScene = "LayerGame";
e.GameUI = "GameUI";
e.MainUI = "LayerUI";
e.PopUp = "HSLayerPopUp";
e.Dialog = "HSLayerDialog";
e.System = "LayerSystem";
e.Notify = "HSLayerNotify";
e.Guide = "LayerGuide";
e.BlackMask = "BlackMask";
})(i.HSLayerType || (i.HSLayerType = {}));
i.HSViewParams = function() {
this.valid = !0;
this.node = null;
};
cc._RF.pop();
}, {} ],
HSUIManager: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7f605muMGxKBb0L/WZMRmqC", "HSUIManager");
var n = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(o, r) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var i, n, o, r, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, r[1])).done) return o;
(n = 0, o) && (r = [ 2 & r[0], o.value ]);
switch (r[0]) {
case 0:
case 1:
o = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < o[1]) {
a.label = o[1];
o = r;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(r);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
i = o = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.UIZIndexEventType = i.ViewRoot = void 0;
var r = e("../utils/HSTimeUtils"), a = e("./HSResManager"), s = e("./HSUIBase"), c = e("./HSLayerBase"), p = e("./HSLayerNotify"), l = e("./HSLayerPopUp"), _ = e("./HSUIInterface"), u = e("./HSLayerGameUI");
i.ViewRoot = "views";
var d, b = function() {
function e() {
this.viewsCache = new Map();
this.openingViewsQueue = new Map();
this.viewsOpenedQueue = new Array();
this.viewOpenedTimes = new Map();
this.viewRoot = null;
this.lockNode = null;
this.blockMaskNode = null;
this.PURE_NAME = {
1: "PuzzleUI",
2: "MosaicUI",
4: "AdventureProcessUI",
5: "TetrisUI",
6: "ChaosUI",
7: "MosaicCoverUI",
8: "MosaicInsertUI",
9: "MosaicInsertUI",
10: "ClearPicUI",
11: "FillColorUI",
12: "RouteUI",
13: "MosaicRandomUI",
14: "PathUI",
15: "StoryUI",
16: "MosaicNoticeUI",
17: "ClearPicMosaicUI",
18: "MosaicClipUI",
19: "RaffleUI",
20: "StepUI",
21: "PuzzleGameUI"
};
this.initRoot();
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onSysKeyDown, this);
}
Object.defineProperty(e, "ins", {
get: function() {
null === e._inst && (e._inst = new this());
e._inst.rootNodeValid();
return e._inst;
},
enumerable: !1,
configurable: !0
});
e.prototype.onSysKeyDown = function(e) {
if ((e.keyCode === cc.macro.KEY.back || e.keyCode === cc.macro.KEY.escape) && cc.isValid(this.viewRoot, !0)) for (var t = [ this.guide, this.notify, this.system, this.popup, this.dialog, this.mainUI, this.gameUI, this.game ], i = 0; i < t.length; i++) if (cc.isValid(t[i]) && this.checkLayerOnKeyBack(t[i])) return;
};
e.prototype.checkLayerOnKeyBack = function(e) {
for (var t = e.children, i = 0; i < t.length; i++) {
var n = t[i];
if (cc.isValid(n) && n.activeInHierarchy) {
var o = n.getComponent(s.default);
if (o) {
if (o.config.isOptionLayer && o.onSysBack()) return !0;
if (o.config.stopSysClkEvent) return !0;
}
}
}
return !1;
};
e.prototype.destroy = function() {
this.viewsCache.clear();
this.viewsOpenedQueue = [];
};
e.prototype.rootNodeValid = function() {
var e = cc.director.getScene();
if (e) {
var t = null == e ? void 0 : e.getChildByName("Canvas");
this.viewRoot = null == t ? void 0 : t.getChildByName("ui_root");
this.viewRoot && cc.isValid(this.viewRoot) || this.initRoot();
}
};
e.prototype.initRoot = function() {
var e = cc.director.getScene(), t = null == e ? void 0 : e.getChildByName("Canvas");
this.viewRoot = null == t ? void 0 : t.getChildByName("ui_root");
if (!this.viewRoot) {
this.viewRoot = this.create_node("ui_root");
null == t || t.addChild(this.viewRoot);
}
this.blockMaskNode = this.viewRoot.getChildByName("topdark");
this.game = this.create_node(_.HSLayerType.MainScene);
this.gameUI = new u.HSLayerGameUI(_.HSLayerType.GameUI);
this.mainUI = new c.HSLayerBase(_.HSLayerType.MainUI);
this.dialog = new u.HSLayerGameUI(_.HSLayerType.Dialog);
this.popup = new l.HSLayerPopUp(_.HSLayerType.PopUp);
this.system = new c.HSLayerBase(_.HSLayerType.System);
this.notify = new p.HSLayerNotify(_.HSLayerType.Notify);
this.guide = this.create_node(_.HSLayerType.Guide);
this.viewRoot.addChild(this.game);
this.viewRoot.addChild(this.gameUI);
this.viewRoot.addChild(this.mainUI);
this.viewRoot.addChild(this.dialog);
this.viewRoot.addChild(this.popup);
this.viewRoot.addChild(this.system);
this.viewRoot.addChild(this.notify);
this.viewRoot.addChild(this.guide);
this.lockNode = this.create_node("LockNode");
this.lockNode.addComponent(cc.BlockInputEvents);
if (this.blockMaskNode) {
this.blockMaskNode.zIndex = 10;
this.blockMaskNode.active = !1;
}
this.system.addChild(this.lockNode);
this.unlock();
};
e.prototype.getPureName = function(e) {
return this.PURE_NAME[e] || "AdventureUI";
};
e.prototype.setViewOpenedTimes = function(e) {
var t = this.viewOpenedTimes.get(e) || 0;
this.viewOpenedTimes.set(e, t + 1);
};
e.prototype.getViewOpenedTimes = function(e) {
return this.viewOpenedTimes.get(e) || 0;
};
e.prototype.loadPrefab = function(e, t, n) {
var o = this;
a.default.ins.loadPrefab(e, t.bundle).then(function(e) {
if (e) {
var r = cc.instantiate(e);
o.openingViewsQueue.delete(t.prefab);
n(r);
} else if (t.manyStyles && t.tryTimes < 1) {
t.tryTimes += 1;
o.loadPrefab(i.ViewRoot + "/" + t.prefab + 1, t, n);
}
});
};
e.prototype.preLoad = function(e) {
a.default.ins.load(e.prefab, e.bundle);
};
e.prototype.open = function(t, i, n) {
var o = this;
return new Promise(function(r) {
n || (n = {});
var a = n.onAdded, c = n.onRemoved;
n.onAdded = function(i, n) {
var c = i.getComponent(s.default);
if (c) {
e.ins.viewsCache.set(t.prefab, c);
c.config = t;
var p = [ _.HSLayerType.GameUI, _.HSLayerType.PopUp, _.HSLayerType.Dialog ];
if (p.includes(t.layer)) {
if (o.viewsOpenedQueue.length > 0) {
var l = o.viewsOpenedQueue[o.viewsOpenedQueue.length - 1], u = o.viewsCache.get(l);
u && u.config && p.includes(u.config.layer) && u.config.layer <= t.layer && o.handleUIZIndexChange(d.COVERED_BY_OTHER, u, c);
}
var b = o.viewsOpenedQueue.indexOf(t.prefab);
b >= 0 && o.viewsOpenedQueue.splice(b, 1);
o.viewsOpenedQueue.push(t.prefab);
}
}
null == a || a(i, n);
r(c);
};
n.onRemoved = function(i, n) {
e.ins.viewsCache.delete(t.prefab);
null == c || c(i, n);
};
switch (t.layer) {
case _.HSLayerType.GameUI:
o.gameUI.add(t, i, n);
break;

case _.HSLayerType.MainUI:
o.mainUI.add(t, i, n);
break;

case _.HSLayerType.PopUp:
o.popup.add(t, i, n);
break;

case _.HSLayerType.Dialog:
o.dialog.add(t, i, n);
break;

case _.HSLayerType.System:
o.system.add(t, i, n);
break;

case _.HSLayerType.Notify:
o.notify.add(t, i, n);
break;

default:
console.error("未识别的UI层");
}
});
};
e.prototype.openScene = function(e, t) {
var i = this;
a.default.ins.loadScene(e, function() {
return n(i, void 0, void 0, function() {
return o(this, function(e) {
switch (e.label) {
case 0:
return t ? [ 4, r.HSTimeUtils.timeOut(0, this) ] : [ 3, 2 ];

case 1:
e.sent();
this.open(t);
e.label = 2;

case 2:
return [ 2 ];
}
});
});
});
};
e.prototype.close = function(e) {
if (e) {
var t = this.viewsOpenedQueue.indexOf(e.prefab);
if (t >= 0) {
this.viewsOpenedQueue.splice(t, 1);
var i = [ _.HSLayerType.GameUI, _.HSLayerType.PopUp, _.HSLayerType.Dialog ];
if (t === this.viewsOpenedQueue.length - 1 && this.viewsOpenedQueue.length > 0 && i.includes(e.layer)) {
var n = this.viewsOpenedQueue[this.viewsOpenedQueue.length - 1], o = this.viewsCache.get(n);
o && o.config && i.includes(o.config.layer) && this.handleUIZIndexChange(d.RESET_TO_FRONT, o);
}
}
switch (e.layer) {
case _.HSLayerType.GameUI:
this.gameUI.remove(e.prefab);
break;

case _.HSLayerType.MainUI:
this.mainUI.remove(e.prefab);
break;

case _.HSLayerType.PopUp:
this.popup.remove(e.prefab);
break;

case _.HSLayerType.Dialog:
this.dialog.remove(e.prefab);
break;

case _.HSLayerType.System:
this.system.remove(e.prefab);
break;

case _.HSLayerType.Notify:
this.notify.remove(e.prefab);
}
}
};
e.prototype.getUI = function(e) {
return this.viewsCache.get(e) || null;
};
e.prototype.getUIByConfig = function(e) {
return this.viewsCache.get(e.prefab) || null;
};
e.prototype.invoke = function(e, t) {
for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
var o = this.getUI(e.prefab);
if (o) return o[t].apply(o, i);
};
e.prototype.lock = function() {
this.lockNode.active = !0;
};
e.prototype.unlock = function() {
this.lockNode.active = !1;
};
e.prototype.pfNodeDo = function(e, t, i) {
for (var n = cc.instantiate(e.children[0]), o = 0; o < t; o++) {
var r = e.children[o];
r || ((r = o === t - 1 ? n : cc.instantiate(n)).parent = e);
null == i || i(r, o);
}
};
e.prototype.showBlackMask = function(e) {
this.blockMaskNode && (this.blockMaskNode.active = e);
};
e.prototype.create_node = function(e) {
var t = new cc.Node(e), i = t.addComponent(cc.Widget);
i.isAlignLeft = !0;
i.isAlignRight = !0;
i.isAlignTop = !0;
i.isAlignBottom = !0;
i.left = 0;
i.right = 0;
i.top = 0;
i.bottom = 0;
i.alignMode = cc.Widget.AlignMode.ALWAYS;
i.enabled = !0;
return t;
};
e.prototype.isUICovered = function(e) {
if (!e || !e.config) return null;
var t = this.viewsOpenedQueue.indexOf(e.config.prefab);
if (t < 0 || t === this.viewsOpenedQueue.length - 1) return null;
for (var i = this.viewsOpenedQueue.length - 1; i > t; i--) {
var n = this.viewsOpenedQueue[i], o = this.viewsCache.get(n);
if ((!o || !o.config || o.config.listenUILayerEvent) && o && o.config.layer >= e.config.layer) return o;
}
return null;
};
e.prototype.handleUIZIndexChange = function(e, t, i) {
if (t && t.config) {
var n = [ _.HSLayerType.GameUI, _.HSLayerType.PopUp, _.HSLayerType.Dialog ];
n.includes(t.config.layer) && (i && i.config && !n.includes(i.config.layer) && e === d.COVERED_BY_OTHER || (e === d.COVERED_BY_OTHER && t.onHide ? t.onHide(i) : e === d.RESET_TO_FRONT && t.onTop && t.onTop()));
}
};
e._inst = null;
return e;
}();
i.default = b;
(function(e) {
e[e.RESET_TO_FRONT = 0] = "RESET_TO_FRONT";
e[e.COVERED_BY_OTHER = 1] = "COVERED_BY_OTHER";
})(d = i.UIZIndexEventType || (i.UIZIndexEventType = {}));
cc._RF.pop();
}, {
"../utils/HSTimeUtils": "HSTimeUtils",
"./HSLayerBase": "HSLayerBase",
"./HSLayerGameUI": "HSLayerGameUI",
"./HSLayerNotify": "HSLayerNotify",
"./HSLayerPopUp": "HSLayerPopUp",
"./HSResManager": "HSResManager",
"./HSUIBase": "HSUIBase",
"./HSUIInterface": "HSUIInterface"
} ],
HsCommon: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "fa0f7Thy6FN2boUbe0RDk0R", "HsCommon");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsCommon = i.DataKey = void 0;
var n;
(function(e) {
e.adTime = "adTime";
e.adInterval = "adInterval";
})(n = i.DataKey || (i.DataKey = {}));
var o = function() {
function e() {}
e.DataKey = n;
return e;
}();
i.HsCommon = o;
cc._RF.pop();
}, {} ],
HsNative_desprate: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "66231jVVbdDZpHZK2Kd6gDj", "HsNative_desprate");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsNative = void 0;
var n = "org/cocos2dx/javascript/AppActivity", o = "RootViewController", r = function() {
function e() {}
e.userCommentInfo = function(t) {
if (cc.sys.isNative) if (cc.sys.OS_IOS === cc.sys.os) jsb.reflection.callStaticMethod("BCInterActive", "userCommentInfo:", t); else if (cc.sys.OS_ANDROID === cc.sys.os) return e.noticeApp({
name: "userCommentInfo",
info: t
});
};
e.noticeGameHide = function() {
return e.noticeApp({
name: "gameHide",
info: ""
});
};
e.closeNoSplash = function() {
cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideSplash", "()V");
return e.noticeApp({
name: "noSplash",
info: ""
});
};
e.gameWay = function(t) {
return e.noticeApp({
name: "gameWay",
info: t
});
};
e.getMaxEcpm = function(e) {
if (cc.sys.isNative) if (cc.sys.OS_IOS === cc.sys.os) {
if (!(t = jsb.reflection.callStaticMethod("BCInterActive", "getMaxEcpm:", e))) return 0;
try {
if ((i = JSON.parse(t)).max_ecpm) return parseFloat(i.max_ecpm);
} catch (e) {
return 0;
}
} else if (cc.sys.OS_ANDROID === cc.sys.os) {
var t, i;
if (!(t = jsb.reflection.callStaticMethod(n, "getMaxEcpm", "(Ljava/lang/String;)Ljava/lang/String;", e))) return 0;
if ((i = JSON.parse(t)).max_ecpm) return parseFloat(i.max_ecpm);
}
return 0;
};
e.noticeApp = function(e) {
if (cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os) {
var t = jsb.reflection.callStaticMethod(n, "noticeApp", "(Ljava/lang/String;)Ljava/lang/String;", e ? JSON.stringify(e) : e);
return t ? JSON.parse(t) : null;
}
return null;
};
e.reportData = function(e) {
if (cc.sys.isNative) {
var t = JSON.stringify(e);
cc.sys.OS_IOS === cc.sys.os ? jsb.reflection.callStaticMethod(o, "noticeDataUp:", t) : cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod(n, "noticeDataUp", "(Ljava/lang/String;)V", t);
}
};
e.getDeviceInfo = function() {
if (cc.sys.isNative) {
if (cc.sys.OS_IOS === cc.sys.os) return jsb.reflection.callStaticMethod("BCInterActive", "getAppBaseInfo:", "");
if (cc.sys.OS_ANDROID === cc.sys.os) return e.noticeApp({
name: "deviceLayer",
info: ""
});
}
};
e.showMoreSetting = function() {
cc.sys.isNative && (cc.sys.OS_IOS === cc.sys.os ? jsb.reflection.callStaticMethod(o, "moreSet:", "aa") : cc.sys.OS_ANDROID === cc.sys.os && e.noticeApp({
name: "moreSet",
info: ""
}));
};
e.noticeLoad = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = !0);
if (cc.sys.isNative) if (cc.sys.OS_IOS === cc.sys.os) jsb.reflection.callStaticMethod(o, "noticeLoad:", "" + JSON.stringify({
type: e
})); else if (cc.sys.OS_ANDROID === cc.sys.os) {
e = 1 === e ? 0 : e;
jsb.reflection.callStaticMethod(n, "noticeLoad", "(Ljava/lang/String;)V", JSON.stringify({
type: e
}));
}
};
e.getAdReady = function(e) {
if (cc.sys.isNative) {
if (cc.sys.OS_IOS === cc.sys.os) {
return jsb.reflection.callStaticMethod(o, "getAdReadyByType:info:", "", e);
}
if (cc.sys.OS_ANDROID === cc.sys.os) return jsb.reflection.callStaticMethod(n, "getAdReady", "(Ljava/lang/String;)Z", e);
}
return !0;
};
e.nativeShowAdv = function(e) {
if (cc.sys.OS_IOS === cc.sys.os) {
JSON.stringify(e);
jsb.reflection.callStaticMethod(o, "noticeShowAD:info:", "", JSON.stringify(e));
} else cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod(n, "noticeShowAD", "(Ljava/lang/String;)V", JSON.stringify(e));
};
e.closeBanner = function() {
cc.sys.isNative && (cc.sys.OS_IOS === cc.sys.os ? jsb.reflection.callStaticMethod(o, "noBanner:", "aa") : cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod(n, "noticeNoBanner", "()V"));
};
e.comment = function(t) {
void 0 === t && (t = 3);
cc.sys.isNative && (cc.sys.OS_IOS === cc.sys.os ? jsb.reflection.callStaticMethod(o, "comment:info:", "", t) : cc.sys.OS_ANDROID === cc.sys.os && e.noticeApp({
name: "comment",
info: "" + t
}));
};
e.uploadUserData = function(t) {
if (cc.sys.isNative) if (cc.sys.OS_IOS === cc.sys.os) jsb.reflection.callStaticMethod(o, "userUp:", JSON.stringify(t)); else if (cc.sys.OS_ANDROID === cc.sys.os) return e.noticeApp({
name: "userUp",
info: JSON.stringify(t)
});
};
e.shakeOnce = function(e) {
cc.sys.isNative && (cc.sys.OS_IOS === cc.sys.os ? jsb.reflection.callStaticMethod(o, "playVibrate:", "" + e) : (cc.sys.OS_ANDROID, 
cc.sys.os));
};
return e;
}();
i.HsNative = r;
cc._RF.pop();
}, {} ],
HsNative: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "497f7wuX01IKZ5QzkkJMwXn", "HsNative");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsNative = void 0;
var n = e("../../hsApp"), o = e("./base-native"), r = e("./impl/Block-android"), a = e("./impl/Block-ios"), s = e("./impl/Sand-android"), c = e("./impl/Sand-ios"), p = e("./impl/web-native"), l = {
sand_crush: {
android: s.Sand_android,
ios: c.Sand_ios
},
block_blast: {
android: r.Block_android,
ios: a.Block_ios
}
}, _ = [], u = 0, d = function() {
function e() {}
e.init = function() {
var t, i = "sand_crush";
"block_blast_android" !== n.hsApp.RUNTIME_ENV && "block_blast_ios" !== n.hsApp.RUNTIME_ENV || (i = "block_blast");
var o = l[i];
o || (o = l.sand_crush);
cc.sys.isNative ? cc.sys.os === cc.sys.OS_ANDROID ? e._iml = o.android : cc.sys.os === cc.sys.OS_IOS ? e._iml = o.ios : e._iml = p.web_native : e._iml = p.web_native;
e._iml, cc.sys.isNative, cc.sys.os;
e.initErrorHandler();
null === (t = e._iml) || void 0 === t || t.initWindowFunc();
};
e.initWindowFunc = function() {
e._iml.initWindowFunc();
};
e.cleanWindowFunc = function() {
var t;
null === (t = e._iml) || void 0 === t || t.cleanWindowFunc();
};
e.initErrorHandler = function() {
if ("sand_crush" === n.hsApp.RUNTIME_ENV) {
window.__resHandler = function(e) {
e && e.stack && e.stack;
var t = "";
e && e.message && (t = e.message);
var i = new Date().getTime();
if (!~_.indexOf(t) && i - u > 1e3) {
u = i;
_.push(t);
b.HsDataReporter.reportEvent("cocos_res_reporter", {
errorMsg: t
});
}
};
window.__errorEvent = function() {};
cc.sys.isNative && (window.__errorHandler = function(e, t, i, n) {
var o = {};
o.errorMessage = e;
o.file = t;
o.line = i;
o.message = n;
var r = JSON.stringify(o), a = new Date().getTime();
if (!~_.indexOf(e) && a - u > 1e3) {
u = a;
_.push(e);
b.HsDataReporter.reportEvent("cocos_log_reporter", {
error_str: r
});
}
});
}
};
e.userCommentInfo = function(t) {
var i;
return null === (i = e._iml) || void 0 === i ? void 0 : i.userCommentInfo(t);
};
e.noticeGameHide = function() {
var t;
return null === (t = e._iml) || void 0 === t ? void 0 : t.noticeGameHide();
};
e.closeNoSplash = function() {
var t;
return null === (t = e._iml) || void 0 === t ? void 0 : t.closeNoSplash();
};
e.gameWay = function(t) {
var i;
return null === (i = e._iml) || void 0 === i ? void 0 : i.gameWay(t);
};
e.getMaxEcpm = function(t) {
var i;
return null === (i = e._iml) || void 0 === i ? void 0 : i.getMaxEcpm(t);
};
e.reportData = function(t) {
var i;
return null === (i = e._iml) || void 0 === i ? void 0 : i.reportData(t);
};
e.getDeviceInfo = function() {
var t;
return null === (t = e._iml) || void 0 === t ? void 0 : t.getDeviceInfo();
};
e.showMoreSetting = function() {
var t;
return null === (t = e._iml) || void 0 === t ? void 0 : t.showMoreSetting();
};
e.noticeLoad = function(t, i) {
var n;
void 0 === t && (t = 0);
void 0 === i && (i = !0);
return null === (n = e._iml) || void 0 === n ? void 0 : n.noticeLoad(t, i);
};
e.getAdReady = function(t) {
var i;
return null === (i = e._iml) || void 0 === i ? void 0 : i.getAdReady(t);
};
e.nativeShowAdv = function(t) {
var i;
return null === (i = e._iml) || void 0 === i ? void 0 : i.nativeShowAdv(t);
};
e.closeBanner = function() {
var t;
return null === (t = e._iml) || void 0 === t ? void 0 : t.closeBanner();
};
e.comment = function(t) {
var i;
void 0 === t && (t = 1);
return null === (i = e._iml) || void 0 === i ? void 0 : i.comment(t);
};
e.uploadUserData = function(t) {
var i;
void 0 !== t.gameWayNum && null !== t.gameWayNum || (t.gameWayNum = t.user_waynum);
return null === (i = e._iml) || void 0 === i ? void 0 : i.uploadUserData(t);
};
e.shakeOnce = function(t, i) {
var n;
return null === (n = e._iml) || void 0 === n ? void 0 : n.shakeOnce(t, i);
};
e.isAStaues = function() {
return !1;
};
e._iml = o.HsBaseNative;
return e;
}();
i.HsNative = d;
var b = e("../dataReporter/DataReporter");
cc._RF.pop();
}, {
"../../hsApp": "hsApp",
"../dataReporter/DataReporter": "DataReporter",
"./base-native": "base-native",
"./impl/Block-android": "Block-android",
"./impl/Block-ios": "Block-ios",
"./impl/Sand-android": "Sand-android",
"./impl/Sand-ios": "Sand-ios",
"./impl/web-native": "web-native"
} ],
HsUIUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0c8281I1t9M65RU4E7Sroco", "HsUIUtils");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsUIUtils = void 0;
i.HsUIUtils = {
bindButton: function(e, t) {
if (cc.isValid(e)) {
e.getComponent(cc.Button) || e.addComponent(cc.Button);
e.off("click");
e.on("click", function(e) {
null == t || t(e);
});
}
}
};
cc._RF.pop();
}, {} ],
LocalPage1: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "066f3jAXjhFx7KZjAKuHoji", "LocalPage1");
var n = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc._decorator, r = o.ccclass, a = (o.property, function() {
function e() {}
e.prototype.start = function() {};
Object.defineProperty(e, "cfg2", {
get: function() {
return [ [ {
b: "1000000000000000000000000000000000000000000000000000000000000000",
p: [ 0 ]
}, {
b: "0100000000000000000000000000000000000000000000000000000000000000",
p: [ 1 ]
}, {
b: "0010000000000000000000000000000000000000000000000000000000000000",
p: [ 2 ]
}, {
b: "0001000000000000000000000000000000000000000000000000000000000000",
p: [ 3 ]
}, {
b: "0000100000000000000000000000000000000000000000000000000000000000",
p: [ 4 ]
}, {
b: "0000010000000000000000000000000000000000000000000000000000000000",
p: [ 5 ]
}, {
b: "0000001000000000000000000000000000000000000000000000000000000000",
p: [ 6 ]
}, {
b: "0000000100000000000000000000000000000000000000000000000000000000",
p: [ 7 ]
}, {
b: "0000000010000000000000000000000000000000000000000000000000000000",
p: [ 8 ]
}, {
b: "0000000001000000000000000000000000000000000000000000000000000000",
p: [ 9 ]
}, {
b: "0000000000100000000000000000000000000000000000000000000000000000",
p: [ 10 ]
}, {
b: "0000000000010000000000000000000000000000000000000000000000000000",
p: [ 11 ]
}, {
b: "0000000000001000000000000000000000000000000000000000000000000000",
p: [ 12 ]
}, {
b: "0000000000000100000000000000000000000000000000000000000000000000",
p: [ 13 ]
}, {
b: "0000000000000010000000000000000000000000000000000000000000000000",
p: [ 14 ]
}, {
b: "0000000000000001000000000000000000000000000000000000000000000000",
p: [ 15 ]
}, {
b: "0000000000000000100000000000000000000000000000000000000000000000",
p: [ 16 ]
}, {
b: "0000000000000000010000000000000000000000000000000000000000000000",
p: [ 17 ]
}, {
b: "0000000000000000001000000000000000000000000000000000000000000000",
p: [ 18 ]
}, {
b: "0000000000000000000100000000000000000000000000000000000000000000",
p: [ 19 ]
}, {
b: "0000000000000000000010000000000000000000000000000000000000000000",
p: [ 20 ]
}, {
b: "0000000000000000000001000000000000000000000000000000000000000000",
p: [ 21 ]
}, {
b: "0000000000000000000000100000000000000000000000000000000000000000",
p: [ 22 ]
}, {
b: "0000000000000000000000010000000000000000000000000000000000000000",
p: [ 23 ]
}, {
b: "0000000000000000000000001000000000000000000000000000000000000000",
p: [ 24 ]
}, {
b: "0000000000000000000000000100000000000000000000000000000000000000",
p: [ 25 ]
}, {
b: "0000000000000000000000000010000000000000000000000000000000000000",
p: [ 26 ]
}, {
b: "0000000000000000000000000001000000000000000000000000000000000000",
p: [ 27 ]
}, {
b: "0000000000000000000000000000100000000000000000000000000000000000",
p: [ 28 ]
}, {
b: "0000000000000000000000000000010000000000000000000000000000000000",
p: [ 29 ]
}, {
b: "0000000000000000000000000000001000000000000000000000000000000000",
p: [ 30 ]
}, {
b: "0000000000000000000000000000000100000000000000000000000000000000",
p: [ 31 ]
}, {
b: "0000000000000000000000000000000010000000000000000000000000000000",
p: [ 32 ]
}, {
b: "0000000000000000000000000000000001000000000000000000000000000000",
p: [ 33 ]
}, {
b: "0000000000000000000000000000000000100000000000000000000000000000",
p: [ 34 ]
}, {
b: "0000000000000000000000000000000000010000000000000000000000000000",
p: [ 35 ]
}, {
b: "0000000000000000000000000000000000001000000000000000000000000000",
p: [ 36 ]
}, {
b: "0000000000000000000000000000000000000100000000000000000000000000",
p: [ 37 ]
}, {
b: "0000000000000000000000000000000000000010000000000000000000000000",
p: [ 38 ]
}, {
b: "0000000000000000000000000000000000000001000000000000000000000000",
p: [ 39 ]
}, {
b: "0000000000000000000000000000000000000000100000000000000000000000",
p: [ 40 ]
}, {
b: "0000000000000000000000000000000000000000010000000000000000000000",
p: [ 41 ]
}, {
b: "0000000000000000000000000000000000000000001000000000000000000000",
p: [ 42 ]
}, {
b: "0000000000000000000000000000000000000000000100000000000000000000",
p: [ 43 ]
}, {
b: "0000000000000000000000000000000000000000000010000000000000000000",
p: [ 44 ]
}, {
b: "0000000000000000000000000000000000000000000001000000000000000000",
p: [ 45 ]
}, {
b: "0000000000000000000000000000000000000000000000100000000000000000",
p: [ 46 ]
}, {
b: "0000000000000000000000000000000000000000000000010000000000000000",
p: [ 47 ]
}, {
b: "0000000000000000000000000000000000000000000000001000000000000000",
p: [ 48 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000000000000",
p: [ 49 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000000000000",
p: [ 50 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000000000",
p: [ 51 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000000000",
p: [ 52 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000000000",
p: [ 53 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000000",
p: [ 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000100000000",
p: [ 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000010000000",
p: [ 56 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000001000000",
p: [ 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000100000",
p: [ 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000010000",
p: [ 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000001000",
p: [ 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000000100",
p: [ 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000000010",
p: [ 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000000001",
p: [ 63 ]
} ], [ {
b: "1000000010000000000000000000000000000000000000000000000000000000",
p: [ 0, 8 ]
}, {
b: "0100000001000000000000000000000000000000000000000000000000000000",
p: [ 1, 9 ]
}, {
b: "0010000000100000000000000000000000000000000000000000000000000000",
p: [ 2, 10 ]
}, {
b: "0001000000010000000000000000000000000000000000000000000000000000",
p: [ 3, 11 ]
}, {
b: "0000100000001000000000000000000000000000000000000000000000000000",
p: [ 4, 12 ]
}, {
b: "0000010000000100000000000000000000000000000000000000000000000000",
p: [ 5, 13 ]
}, {
b: "0000001000000010000000000000000000000000000000000000000000000000",
p: [ 6, 14 ]
}, {
b: "0000000100000001000000000000000000000000000000000000000000000000",
p: [ 7, 15 ]
}, {
b: "0000000010000000100000000000000000000000000000000000000000000000",
p: [ 8, 16 ]
}, {
b: "0000000001000000010000000000000000000000000000000000000000000000",
p: [ 9, 17 ]
}, {
b: "0000000000100000001000000000000000000000000000000000000000000000",
p: [ 10, 18 ]
}, {
b: "0000000000010000000100000000000000000000000000000000000000000000",
p: [ 11, 19 ]
}, {
b: "0000000000001000000010000000000000000000000000000000000000000000",
p: [ 12, 20 ]
}, {
b: "0000000000000100000001000000000000000000000000000000000000000000",
p: [ 13, 21 ]
}, {
b: "0000000000000010000000100000000000000000000000000000000000000000",
p: [ 14, 22 ]
}, {
b: "0000000000000001000000010000000000000000000000000000000000000000",
p: [ 15, 23 ]
}, {
b: "0000000000000000100000001000000000000000000000000000000000000000",
p: [ 16, 24 ]
}, {
b: "0000000000000000010000000100000000000000000000000000000000000000",
p: [ 17, 25 ]
}, {
b: "0000000000000000001000000010000000000000000000000000000000000000",
p: [ 18, 26 ]
}, {
b: "0000000000000000000100000001000000000000000000000000000000000000",
p: [ 19, 27 ]
}, {
b: "0000000000000000000010000000100000000000000000000000000000000000",
p: [ 20, 28 ]
}, {
b: "0000000000000000000001000000010000000000000000000000000000000000",
p: [ 21, 29 ]
}, {
b: "0000000000000000000000100000001000000000000000000000000000000000",
p: [ 22, 30 ]
}, {
b: "0000000000000000000000010000000100000000000000000000000000000000",
p: [ 23, 31 ]
}, {
b: "0000000000000000000000001000000010000000000000000000000000000000",
p: [ 24, 32 ]
}, {
b: "0000000000000000000000000100000001000000000000000000000000000000",
p: [ 25, 33 ]
}, {
b: "0000000000000000000000000010000000100000000000000000000000000000",
p: [ 26, 34 ]
}, {
b: "0000000000000000000000000001000000010000000000000000000000000000",
p: [ 27, 35 ]
}, {
b: "0000000000000000000000000000100000001000000000000000000000000000",
p: [ 28, 36 ]
}, {
b: "0000000000000000000000000000010000000100000000000000000000000000",
p: [ 29, 37 ]
}, {
b: "0000000000000000000000000000001000000010000000000000000000000000",
p: [ 30, 38 ]
}, {
b: "0000000000000000000000000000000100000001000000000000000000000000",
p: [ 31, 39 ]
}, {
b: "0000000000000000000000000000000010000000100000000000000000000000",
p: [ 32, 40 ]
}, {
b: "0000000000000000000000000000000001000000010000000000000000000000",
p: [ 33, 41 ]
}, {
b: "0000000000000000000000000000000000100000001000000000000000000000",
p: [ 34, 42 ]
}, {
b: "0000000000000000000000000000000000010000000100000000000000000000",
p: [ 35, 43 ]
}, {
b: "0000000000000000000000000000000000001000000010000000000000000000",
p: [ 36, 44 ]
}, {
b: "0000000000000000000000000000000000000100000001000000000000000000",
p: [ 37, 45 ]
}, {
b: "0000000000000000000000000000000000000010000000100000000000000000",
p: [ 38, 46 ]
}, {
b: "0000000000000000000000000000000000000001000000010000000000000000",
p: [ 39, 47 ]
}, {
b: "0000000000000000000000000000000000000000100000001000000000000000",
p: [ 40, 48 ]
}, {
b: "0000000000000000000000000000000000000000010000000100000000000000",
p: [ 41, 49 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000000000000",
p: [ 42, 50 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000000000000",
p: [ 43, 51 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000000000",
p: [ 44, 52 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000000000",
p: [ 45, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001000000000",
p: [ 46, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000010000000100000000",
p: [ 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001000000010000000",
p: [ 48, 56 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000001000000",
p: [ 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000000100000",
p: [ 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000010000",
p: [ 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000001000",
p: [ 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000000100",
p: [ 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000010",
p: [ 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000100000001",
p: [ 55, 63 ]
} ], [ {
b: "1100000000000000000000000000000000000000000000000000000000000000",
p: [ 0, 1 ]
}, {
b: "0110000000000000000000000000000000000000000000000000000000000000",
p: [ 1, 2 ]
}, {
b: "0011000000000000000000000000000000000000000000000000000000000000",
p: [ 2, 3 ]
}, {
b: "0001100000000000000000000000000000000000000000000000000000000000",
p: [ 3, 4 ]
}, {
b: "0000110000000000000000000000000000000000000000000000000000000000",
p: [ 4, 5 ]
}, {
b: "0000011000000000000000000000000000000000000000000000000000000000",
p: [ 5, 6 ]
}, {
b: "0000001100000000000000000000000000000000000000000000000000000000",
p: [ 6, 7 ]
}, {
b: "0000000011000000000000000000000000000000000000000000000000000000",
p: [ 8, 9 ]
}, {
b: "0000000001100000000000000000000000000000000000000000000000000000",
p: [ 9, 10 ]
}, {
b: "0000000000110000000000000000000000000000000000000000000000000000",
p: [ 10, 11 ]
}, {
b: "0000000000011000000000000000000000000000000000000000000000000000",
p: [ 11, 12 ]
}, {
b: "0000000000001100000000000000000000000000000000000000000000000000",
p: [ 12, 13 ]
}, {
b: "0000000000000110000000000000000000000000000000000000000000000000",
p: [ 13, 14 ]
}, {
b: "0000000000000011000000000000000000000000000000000000000000000000",
p: [ 14, 15 ]
}, {
b: "0000000000000000110000000000000000000000000000000000000000000000",
p: [ 16, 17 ]
}, {
b: "0000000000000000011000000000000000000000000000000000000000000000",
p: [ 17, 18 ]
}, {
b: "0000000000000000001100000000000000000000000000000000000000000000",
p: [ 18, 19 ]
}, {
b: "0000000000000000000110000000000000000000000000000000000000000000",
p: [ 19, 20 ]
}, {
b: "0000000000000000000011000000000000000000000000000000000000000000",
p: [ 20, 21 ]
}, {
b: "0000000000000000000001100000000000000000000000000000000000000000",
p: [ 21, 22 ]
}, {
b: "0000000000000000000000110000000000000000000000000000000000000000",
p: [ 22, 23 ]
}, {
b: "0000000000000000000000001100000000000000000000000000000000000000",
p: [ 24, 25 ]
}, {
b: "0000000000000000000000000110000000000000000000000000000000000000",
p: [ 25, 26 ]
}, {
b: "0000000000000000000000000011000000000000000000000000000000000000",
p: [ 26, 27 ]
}, {
b: "0000000000000000000000000001100000000000000000000000000000000000",
p: [ 27, 28 ]
}, {
b: "0000000000000000000000000000110000000000000000000000000000000000",
p: [ 28, 29 ]
}, {
b: "0000000000000000000000000000011000000000000000000000000000000000",
p: [ 29, 30 ]
}, {
b: "0000000000000000000000000000001100000000000000000000000000000000",
p: [ 30, 31 ]
}, {
b: "0000000000000000000000000000000011000000000000000000000000000000",
p: [ 32, 33 ]
}, {
b: "0000000000000000000000000000000001100000000000000000000000000000",
p: [ 33, 34 ]
}, {
b: "0000000000000000000000000000000000110000000000000000000000000000",
p: [ 34, 35 ]
}, {
b: "0000000000000000000000000000000000011000000000000000000000000000",
p: [ 35, 36 ]
}, {
b: "0000000000000000000000000000000000001100000000000000000000000000",
p: [ 36, 37 ]
}, {
b: "0000000000000000000000000000000000000110000000000000000000000000",
p: [ 37, 38 ]
}, {
b: "0000000000000000000000000000000000000011000000000000000000000000",
p: [ 38, 39 ]
}, {
b: "0000000000000000000000000000000000000000110000000000000000000000",
p: [ 40, 41 ]
}, {
b: "0000000000000000000000000000000000000000011000000000000000000000",
p: [ 41, 42 ]
}, {
b: "0000000000000000000000000000000000000000001100000000000000000000",
p: [ 42, 43 ]
}, {
b: "0000000000000000000000000000000000000000000110000000000000000000",
p: [ 43, 44 ]
}, {
b: "0000000000000000000000000000000000000000000011000000000000000000",
p: [ 44, 45 ]
}, {
b: "0000000000000000000000000000000000000000000001100000000000000000",
p: [ 45, 46 ]
}, {
b: "0000000000000000000000000000000000000000000000110000000000000000",
p: [ 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000000000001100000000000000",
p: [ 48, 49 ]
}, {
b: "0000000000000000000000000000000000000000000000000110000000000000",
p: [ 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000000000000011000000000000",
p: [ 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000000000001100000000000",
p: [ 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000000000000110000000000",
p: [ 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011000000000",
p: [ 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001100000000",
p: [ 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000011000000",
p: [ 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000001100000",
p: [ 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000110000",
p: [ 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000011000",
p: [ 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000001100",
p: [ 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000000110",
p: [ 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000000011",
p: [ 62, 63 ]
} ], [ {
b: "1000000010000000100000000000000000000000000000000000000000000000",
p: [ 0, 8, 16 ]
}, {
b: "0100000001000000010000000000000000000000000000000000000000000000",
p: [ 1, 9, 17 ]
}, {
b: "0010000000100000001000000000000000000000000000000000000000000000",
p: [ 2, 10, 18 ]
}, {
b: "0001000000010000000100000000000000000000000000000000000000000000",
p: [ 3, 11, 19 ]
}, {
b: "0000100000001000000010000000000000000000000000000000000000000000",
p: [ 4, 12, 20 ]
}, {
b: "0000010000000100000001000000000000000000000000000000000000000000",
p: [ 5, 13, 21 ]
}, {
b: "0000001000000010000000100000000000000000000000000000000000000000",
p: [ 6, 14, 22 ]
}, {
b: "0000000100000001000000010000000000000000000000000000000000000000",
p: [ 7, 15, 23 ]
}, {
b: "0000000010000000100000001000000000000000000000000000000000000000",
p: [ 8, 16, 24 ]
}, {
b: "0000000001000000010000000100000000000000000000000000000000000000",
p: [ 9, 17, 25 ]
}, {
b: "0000000000100000001000000010000000000000000000000000000000000000",
p: [ 10, 18, 26 ]
}, {
b: "0000000000010000000100000001000000000000000000000000000000000000",
p: [ 11, 19, 27 ]
}, {
b: "0000000000001000000010000000100000000000000000000000000000000000",
p: [ 12, 20, 28 ]
}, {
b: "0000000000000100000001000000010000000000000000000000000000000000",
p: [ 13, 21, 29 ]
}, {
b: "0000000000000010000000100000001000000000000000000000000000000000",
p: [ 14, 22, 30 ]
}, {
b: "0000000000000001000000010000000100000000000000000000000000000000",
p: [ 15, 23, 31 ]
}, {
b: "0000000000000000100000001000000010000000000000000000000000000000",
p: [ 16, 24, 32 ]
}, {
b: "0000000000000000010000000100000001000000000000000000000000000000",
p: [ 17, 25, 33 ]
}, {
b: "0000000000000000001000000010000000100000000000000000000000000000",
p: [ 18, 26, 34 ]
}, {
b: "0000000000000000000100000001000000010000000000000000000000000000",
p: [ 19, 27, 35 ]
}, {
b: "0000000000000000000010000000100000001000000000000000000000000000",
p: [ 20, 28, 36 ]
}, {
b: "0000000000000000000001000000010000000100000000000000000000000000",
p: [ 21, 29, 37 ]
}, {
b: "0000000000000000000000100000001000000010000000000000000000000000",
p: [ 22, 30, 38 ]
}, {
b: "0000000000000000000000010000000100000001000000000000000000000000",
p: [ 23, 31, 39 ]
}, {
b: "0000000000000000000000001000000010000000100000000000000000000000",
p: [ 24, 32, 40 ]
}, {
b: "0000000000000000000000000100000001000000010000000000000000000000",
p: [ 25, 33, 41 ]
}, {
b: "0000000000000000000000000010000000100000001000000000000000000000",
p: [ 26, 34, 42 ]
}, {
b: "0000000000000000000000000001000000010000000100000000000000000000",
p: [ 27, 35, 43 ]
}, {
b: "0000000000000000000000000000100000001000000010000000000000000000",
p: [ 28, 36, 44 ]
}, {
b: "0000000000000000000000000000010000000100000001000000000000000000",
p: [ 29, 37, 45 ]
}, {
b: "0000000000000000000000000000001000000010000000100000000000000000",
p: [ 30, 38, 46 ]
}, {
b: "0000000000000000000000000000000100000001000000010000000000000000",
p: [ 31, 39, 47 ]
}, {
b: "0000000000000000000000000000000010000000100000001000000000000000",
p: [ 32, 40, 48 ]
}, {
b: "0000000000000000000000000000000001000000010000000100000000000000",
p: [ 33, 41, 49 ]
}, {
b: "0000000000000000000000000000000000100000001000000010000000000000",
p: [ 34, 42, 50 ]
}, {
b: "0000000000000000000000000000000000010000000100000001000000000000",
p: [ 35, 43, 51 ]
}, {
b: "0000000000000000000000000000000000001000000010000000100000000000",
p: [ 36, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000100000001000000010000000000",
p: [ 37, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000010000000100000001000000000",
p: [ 38, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000001000000010000000100000000",
p: [ 39, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000100000001000000010000000",
p: [ 40, 48, 56 ]
}, {
b: "0000000000000000000000000000000000000000010000000100000001000000",
p: [ 41, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000000100000",
p: [ 42, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000000010000",
p: [ 43, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000001000",
p: [ 44, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000000100",
p: [ 45, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001000000010",
p: [ 46, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000010000000100000001",
p: [ 47, 55, 63 ]
} ], [ {
b: "1110000000000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2 ]
}, {
b: "0111000000000000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3 ]
}, {
b: "0011100000000000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4 ]
}, {
b: "0001110000000000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5 ]
}, {
b: "0000111000000000000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6 ]
}, {
b: "0000011100000000000000000000000000000000000000000000000000000000",
p: [ 5, 6, 7 ]
}, {
b: "0000000011100000000000000000000000000000000000000000000000000000",
p: [ 8, 9, 10 ]
}, {
b: "0000000001110000000000000000000000000000000000000000000000000000",
p: [ 9, 10, 11 ]
}, {
b: "0000000000111000000000000000000000000000000000000000000000000000",
p: [ 10, 11, 12 ]
}, {
b: "0000000000011100000000000000000000000000000000000000000000000000",
p: [ 11, 12, 13 ]
}, {
b: "0000000000001110000000000000000000000000000000000000000000000000",
p: [ 12, 13, 14 ]
}, {
b: "0000000000000111000000000000000000000000000000000000000000000000",
p: [ 13, 14, 15 ]
}, {
b: "0000000000000000111000000000000000000000000000000000000000000000",
p: [ 16, 17, 18 ]
}, {
b: "0000000000000000011100000000000000000000000000000000000000000000",
p: [ 17, 18, 19 ]
}, {
b: "0000000000000000001110000000000000000000000000000000000000000000",
p: [ 18, 19, 20 ]
}, {
b: "0000000000000000000111000000000000000000000000000000000000000000",
p: [ 19, 20, 21 ]
}, {
b: "0000000000000000000011100000000000000000000000000000000000000000",
p: [ 20, 21, 22 ]
}, {
b: "0000000000000000000001110000000000000000000000000000000000000000",
p: [ 21, 22, 23 ]
}, {
b: "0000000000000000000000001110000000000000000000000000000000000000",
p: [ 24, 25, 26 ]
}, {
b: "0000000000000000000000000111000000000000000000000000000000000000",
p: [ 25, 26, 27 ]
}, {
b: "0000000000000000000000000011100000000000000000000000000000000000",
p: [ 26, 27, 28 ]
}, {
b: "0000000000000000000000000001110000000000000000000000000000000000",
p: [ 27, 28, 29 ]
}, {
b: "0000000000000000000000000000111000000000000000000000000000000000",
p: [ 28, 29, 30 ]
}, {
b: "0000000000000000000000000000011100000000000000000000000000000000",
p: [ 29, 30, 31 ]
}, {
b: "0000000000000000000000000000000011100000000000000000000000000000",
p: [ 32, 33, 34 ]
}, {
b: "0000000000000000000000000000000001110000000000000000000000000000",
p: [ 33, 34, 35 ]
}, {
b: "0000000000000000000000000000000000111000000000000000000000000000",
p: [ 34, 35, 36 ]
}, {
b: "0000000000000000000000000000000000011100000000000000000000000000",
p: [ 35, 36, 37 ]
}, {
b: "0000000000000000000000000000000000001110000000000000000000000000",
p: [ 36, 37, 38 ]
}, {
b: "0000000000000000000000000000000000000111000000000000000000000000",
p: [ 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000000000000111000000000000000000000",
p: [ 40, 41, 42 ]
}, {
b: "0000000000000000000000000000000000000000011100000000000000000000",
p: [ 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000000000001110000000000000000000",
p: [ 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000000000000111000000000000000000",
p: [ 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000000000011100000000000000000",
p: [ 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000000000001110000000000000000",
p: [ 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000000000001110000000000000",
p: [ 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000000000000111000000000000",
p: [ 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000000000011100000000000",
p: [ 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000000000001110000000000",
p: [ 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111000000000",
p: [ 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011100000000",
p: [ 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000011100000",
p: [ 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000001110000",
p: [ 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000111000",
p: [ 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000011100",
p: [ 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000001110",
p: [ 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000000111",
p: [ 61, 62, 63 ]
} ], [ {
b: "1100000010000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 8 ]
}, {
b: "0110000001000000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 9 ]
}, {
b: "0011000000100000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 10 ]
}, {
b: "0001100000010000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 11 ]
}, {
b: "0000110000001000000000000000000000000000000000000000000000000000",
p: [ 4, 5, 12 ]
}, {
b: "0000011000000100000000000000000000000000000000000000000000000000",
p: [ 5, 6, 13 ]
}, {
b: "0000001100000010000000000000000000000000000000000000000000000000",
p: [ 6, 7, 14 ]
}, {
b: "0000000011000000100000000000000000000000000000000000000000000000",
p: [ 8, 9, 16 ]
}, {
b: "0000000001100000010000000000000000000000000000000000000000000000",
p: [ 9, 10, 17 ]
}, {
b: "0000000000110000001000000000000000000000000000000000000000000000",
p: [ 10, 11, 18 ]
}, {
b: "0000000000011000000100000000000000000000000000000000000000000000",
p: [ 11, 12, 19 ]
}, {
b: "0000000000001100000010000000000000000000000000000000000000000000",
p: [ 12, 13, 20 ]
}, {
b: "0000000000000110000001000000000000000000000000000000000000000000",
p: [ 13, 14, 21 ]
}, {
b: "0000000000000011000000100000000000000000000000000000000000000000",
p: [ 14, 15, 22 ]
}, {
b: "0000000000000000110000001000000000000000000000000000000000000000",
p: [ 16, 17, 24 ]
}, {
b: "0000000000000000011000000100000000000000000000000000000000000000",
p: [ 17, 18, 25 ]
}, {
b: "0000000000000000001100000010000000000000000000000000000000000000",
p: [ 18, 19, 26 ]
}, {
b: "0000000000000000000110000001000000000000000000000000000000000000",
p: [ 19, 20, 27 ]
}, {
b: "0000000000000000000011000000100000000000000000000000000000000000",
p: [ 20, 21, 28 ]
}, {
b: "0000000000000000000001100000010000000000000000000000000000000000",
p: [ 21, 22, 29 ]
}, {
b: "0000000000000000000000110000001000000000000000000000000000000000",
p: [ 22, 23, 30 ]
}, {
b: "0000000000000000000000001100000010000000000000000000000000000000",
p: [ 24, 25, 32 ]
}, {
b: "0000000000000000000000000110000001000000000000000000000000000000",
p: [ 25, 26, 33 ]
}, {
b: "0000000000000000000000000011000000100000000000000000000000000000",
p: [ 26, 27, 34 ]
}, {
b: "0000000000000000000000000001100000010000000000000000000000000000",
p: [ 27, 28, 35 ]
}, {
b: "0000000000000000000000000000110000001000000000000000000000000000",
p: [ 28, 29, 36 ]
}, {
b: "0000000000000000000000000000011000000100000000000000000000000000",
p: [ 29, 30, 37 ]
}, {
b: "0000000000000000000000000000001100000010000000000000000000000000",
p: [ 30, 31, 38 ]
}, {
b: "0000000000000000000000000000000011000000100000000000000000000000",
p: [ 32, 33, 40 ]
}, {
b: "0000000000000000000000000000000001100000010000000000000000000000",
p: [ 33, 34, 41 ]
}, {
b: "0000000000000000000000000000000000110000001000000000000000000000",
p: [ 34, 35, 42 ]
}, {
b: "0000000000000000000000000000000000011000000100000000000000000000",
p: [ 35, 36, 43 ]
}, {
b: "0000000000000000000000000000000000001100000010000000000000000000",
p: [ 36, 37, 44 ]
}, {
b: "0000000000000000000000000000000000000110000001000000000000000000",
p: [ 37, 38, 45 ]
}, {
b: "0000000000000000000000000000000000000011000000100000000000000000",
p: [ 38, 39, 46 ]
}, {
b: "0000000000000000000000000000000000000000110000001000000000000000",
p: [ 40, 41, 48 ]
}, {
b: "0000000000000000000000000000000000000000011000000100000000000000",
p: [ 41, 42, 49 ]
}, {
b: "0000000000000000000000000000000000000000001100000010000000000000",
p: [ 42, 43, 50 ]
}, {
b: "0000000000000000000000000000000000000000000110000001000000000000",
p: [ 43, 44, 51 ]
}, {
b: "0000000000000000000000000000000000000000000011000000100000000000",
p: [ 44, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000000000001100000010000000000",
p: [ 45, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000110000001000000000",
p: [ 46, 47, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000001100000010000000",
p: [ 48, 49, 56 ]
}, {
b: "0000000000000000000000000000000000000000000000000110000001000000",
p: [ 49, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000011000000100000",
p: [ 50, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000001100000010000",
p: [ 51, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000110000001000",
p: [ 52, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011000000100",
p: [ 53, 54, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001100000010",
p: [ 54, 55, 62 ]
} ], [ {
b: "1000000010000000100000001000000000000000000000000000000000000000",
p: [ 0, 8, 16, 24 ]
}, {
b: "0100000001000000010000000100000000000000000000000000000000000000",
p: [ 1, 9, 17, 25 ]
}, {
b: "0010000000100000001000000010000000000000000000000000000000000000",
p: [ 2, 10, 18, 26 ]
}, {
b: "0001000000010000000100000001000000000000000000000000000000000000",
p: [ 3, 11, 19, 27 ]
}, {
b: "0000100000001000000010000000100000000000000000000000000000000000",
p: [ 4, 12, 20, 28 ]
}, {
b: "0000010000000100000001000000010000000000000000000000000000000000",
p: [ 5, 13, 21, 29 ]
}, {
b: "0000001000000010000000100000001000000000000000000000000000000000",
p: [ 6, 14, 22, 30 ]
}, {
b: "0000000100000001000000010000000100000000000000000000000000000000",
p: [ 7, 15, 23, 31 ]
}, {
b: "0000000010000000100000001000000010000000000000000000000000000000",
p: [ 8, 16, 24, 32 ]
}, {
b: "0000000001000000010000000100000001000000000000000000000000000000",
p: [ 9, 17, 25, 33 ]
}, {
b: "0000000000100000001000000010000000100000000000000000000000000000",
p: [ 10, 18, 26, 34 ]
}, {
b: "0000000000010000000100000001000000010000000000000000000000000000",
p: [ 11, 19, 27, 35 ]
}, {
b: "0000000000001000000010000000100000001000000000000000000000000000",
p: [ 12, 20, 28, 36 ]
}, {
b: "0000000000000100000001000000010000000100000000000000000000000000",
p: [ 13, 21, 29, 37 ]
}, {
b: "0000000000000010000000100000001000000010000000000000000000000000",
p: [ 14, 22, 30, 38 ]
}, {
b: "0000000000000001000000010000000100000001000000000000000000000000",
p: [ 15, 23, 31, 39 ]
}, {
b: "0000000000000000100000001000000010000000100000000000000000000000",
p: [ 16, 24, 32, 40 ]
}, {
b: "0000000000000000010000000100000001000000010000000000000000000000",
p: [ 17, 25, 33, 41 ]
}, {
b: "0000000000000000001000000010000000100000001000000000000000000000",
p: [ 18, 26, 34, 42 ]
}, {
b: "0000000000000000000100000001000000010000000100000000000000000000",
p: [ 19, 27, 35, 43 ]
}, {
b: "0000000000000000000010000000100000001000000010000000000000000000",
p: [ 20, 28, 36, 44 ]
}, {
b: "0000000000000000000001000000010000000100000001000000000000000000",
p: [ 21, 29, 37, 45 ]
}, {
b: "0000000000000000000000100000001000000010000000100000000000000000",
p: [ 22, 30, 38, 46 ]
}, {
b: "0000000000000000000000010000000100000001000000010000000000000000",
p: [ 23, 31, 39, 47 ]
}, {
b: "0000000000000000000000001000000010000000100000001000000000000000",
p: [ 24, 32, 40, 48 ]
}, {
b: "0000000000000000000000000100000001000000010000000100000000000000",
p: [ 25, 33, 41, 49 ]
}, {
b: "0000000000000000000000000010000000100000001000000010000000000000",
p: [ 26, 34, 42, 50 ]
}, {
b: "0000000000000000000000000001000000010000000100000001000000000000",
p: [ 27, 35, 43, 51 ]
}, {
b: "0000000000000000000000000000100000001000000010000000100000000000",
p: [ 28, 36, 44, 52 ]
}, {
b: "0000000000000000000000000000010000000100000001000000010000000000",
p: [ 29, 37, 45, 53 ]
}, {
b: "0000000000000000000000000000001000000010000000100000001000000000",
p: [ 30, 38, 46, 54 ]
}, {
b: "0000000000000000000000000000000100000001000000010000000100000000",
p: [ 31, 39, 47, 55 ]
}, {
b: "0000000000000000000000000000000010000000100000001000000010000000",
p: [ 32, 40, 48, 56 ]
}, {
b: "0000000000000000000000000000000001000000010000000100000001000000",
p: [ 33, 41, 49, 57 ]
}, {
b: "0000000000000000000000000000000000100000001000000010000000100000",
p: [ 34, 42, 50, 58 ]
}, {
b: "0000000000000000000000000000000000010000000100000001000000010000",
p: [ 35, 43, 51, 59 ]
}, {
b: "0000000000000000000000000000000000001000000010000000100000001000",
p: [ 36, 44, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000100000001000000010000000100",
p: [ 37, 45, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000010000000100000001000000010",
p: [ 38, 46, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000001000000010000000100000001",
p: [ 39, 47, 55, 63 ]
} ], [ {
b: "1000000011100000000000000000000000000000000000000000000000000000",
p: [ 0, 8, 9, 10 ]
}, {
b: "0100000001110000000000000000000000000000000000000000000000000000",
p: [ 1, 9, 10, 11 ]
}, {
b: "0010000000111000000000000000000000000000000000000000000000000000",
p: [ 2, 10, 11, 12 ]
}, {
b: "0001000000011100000000000000000000000000000000000000000000000000",
p: [ 3, 11, 12, 13 ]
}, {
b: "0000100000001110000000000000000000000000000000000000000000000000",
p: [ 4, 12, 13, 14 ]
}, {
b: "0000010000000111000000000000000000000000000000000000000000000000",
p: [ 5, 13, 14, 15 ]
}, {
b: "0000000010000000111000000000000000000000000000000000000000000000",
p: [ 8, 16, 17, 18 ]
}, {
b: "0000000001000000011100000000000000000000000000000000000000000000",
p: [ 9, 17, 18, 19 ]
}, {
b: "0000000000100000001110000000000000000000000000000000000000000000",
p: [ 10, 18, 19, 20 ]
}, {
b: "0000000000010000000111000000000000000000000000000000000000000000",
p: [ 11, 19, 20, 21 ]
}, {
b: "0000000000001000000011100000000000000000000000000000000000000000",
p: [ 12, 20, 21, 22 ]
}, {
b: "0000000000000100000001110000000000000000000000000000000000000000",
p: [ 13, 21, 22, 23 ]
}, {
b: "0000000000000000100000001110000000000000000000000000000000000000",
p: [ 16, 24, 25, 26 ]
}, {
b: "0000000000000000010000000111000000000000000000000000000000000000",
p: [ 17, 25, 26, 27 ]
}, {
b: "0000000000000000001000000011100000000000000000000000000000000000",
p: [ 18, 26, 27, 28 ]
}, {
b: "0000000000000000000100000001110000000000000000000000000000000000",
p: [ 19, 27, 28, 29 ]
}, {
b: "0000000000000000000010000000111000000000000000000000000000000000",
p: [ 20, 28, 29, 30 ]
}, {
b: "0000000000000000000001000000011100000000000000000000000000000000",
p: [ 21, 29, 30, 31 ]
}, {
b: "0000000000000000000000001000000011100000000000000000000000000000",
p: [ 24, 32, 33, 34 ]
}, {
b: "0000000000000000000000000100000001110000000000000000000000000000",
p: [ 25, 33, 34, 35 ]
}, {
b: "0000000000000000000000000010000000111000000000000000000000000000",
p: [ 26, 34, 35, 36 ]
}, {
b: "0000000000000000000000000001000000011100000000000000000000000000",
p: [ 27, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000100000001110000000000000000000000000",
p: [ 28, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000010000000111000000000000000000000000",
p: [ 29, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000010000000111000000000000000000000",
p: [ 32, 40, 41, 42 ]
}, {
b: "0000000000000000000000000000000001000000011100000000000000000000",
p: [ 33, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000100000001110000000000000000000",
p: [ 34, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000010000000111000000000000000000",
p: [ 35, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000001000000011100000000000000000",
p: [ 36, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000100000001110000000000000000",
p: [ 37, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000100000001110000000000000",
p: [ 40, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000010000000111000000000000",
p: [ 41, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000001000000011100000000000",
p: [ 42, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000100000001110000000000",
p: [ 43, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000010000000111000000000",
p: [ 44, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000001000000011100000000",
p: [ 45, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001000000011100000",
p: [ 48, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000001110000",
p: [ 49, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000000111000",
p: [ 50, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000011100",
p: [ 51, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000001110",
p: [ 52, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000000111",
p: [ 53, 61, 62, 63 ]
} ], [ {
b: "1100000011000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 8, 9 ]
}, {
b: "0110000001100000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 9, 10 ]
}, {
b: "0011000000110000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 10, 11 ]
}, {
b: "0001100000011000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 11, 12 ]
}, {
b: "0000110000001100000000000000000000000000000000000000000000000000",
p: [ 4, 5, 12, 13 ]
}, {
b: "0000011000000110000000000000000000000000000000000000000000000000",
p: [ 5, 6, 13, 14 ]
}, {
b: "0000001100000011000000000000000000000000000000000000000000000000",
p: [ 6, 7, 14, 15 ]
}, {
b: "0000000011000000110000000000000000000000000000000000000000000000",
p: [ 8, 9, 16, 17 ]
}, {
b: "0000000001100000011000000000000000000000000000000000000000000000",
p: [ 9, 10, 17, 18 ]
}, {
b: "0000000000110000001100000000000000000000000000000000000000000000",
p: [ 10, 11, 18, 19 ]
}, {
b: "0000000000011000000110000000000000000000000000000000000000000000",
p: [ 11, 12, 19, 20 ]
}, {
b: "0000000000001100000011000000000000000000000000000000000000000000",
p: [ 12, 13, 20, 21 ]
}, {
b: "0000000000000110000001100000000000000000000000000000000000000000",
p: [ 13, 14, 21, 22 ]
}, {
b: "0000000000000011000000110000000000000000000000000000000000000000",
p: [ 14, 15, 22, 23 ]
}, {
b: "0000000000000000110000001100000000000000000000000000000000000000",
p: [ 16, 17, 24, 25 ]
}, {
b: "0000000000000000011000000110000000000000000000000000000000000000",
p: [ 17, 18, 25, 26 ]
}, {
b: "0000000000000000001100000011000000000000000000000000000000000000",
p: [ 18, 19, 26, 27 ]
}, {
b: "0000000000000000000110000001100000000000000000000000000000000000",
p: [ 19, 20, 27, 28 ]
}, {
b: "0000000000000000000011000000110000000000000000000000000000000000",
p: [ 20, 21, 28, 29 ]
}, {
b: "0000000000000000000001100000011000000000000000000000000000000000",
p: [ 21, 22, 29, 30 ]
}, {
b: "0000000000000000000000110000001100000000000000000000000000000000",
p: [ 22, 23, 30, 31 ]
}, {
b: "0000000000000000000000001100000011000000000000000000000000000000",
p: [ 24, 25, 32, 33 ]
}, {
b: "0000000000000000000000000110000001100000000000000000000000000000",
p: [ 25, 26, 33, 34 ]
}, {
b: "0000000000000000000000000011000000110000000000000000000000000000",
p: [ 26, 27, 34, 35 ]
}, {
b: "0000000000000000000000000001100000011000000000000000000000000000",
p: [ 27, 28, 35, 36 ]
}, {
b: "0000000000000000000000000000110000001100000000000000000000000000",
p: [ 28, 29, 36, 37 ]
}, {
b: "0000000000000000000000000000011000000110000000000000000000000000",
p: [ 29, 30, 37, 38 ]
}, {
b: "0000000000000000000000000000001100000011000000000000000000000000",
p: [ 30, 31, 38, 39 ]
}, {
b: "0000000000000000000000000000000011000000110000000000000000000000",
p: [ 32, 33, 40, 41 ]
}, {
b: "0000000000000000000000000000000001100000011000000000000000000000",
p: [ 33, 34, 41, 42 ]
}, {
b: "0000000000000000000000000000000000110000001100000000000000000000",
p: [ 34, 35, 42, 43 ]
}, {
b: "0000000000000000000000000000000000011000000110000000000000000000",
p: [ 35, 36, 43, 44 ]
}, {
b: "0000000000000000000000000000000000001100000011000000000000000000",
p: [ 36, 37, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000110000001100000000000000000",
p: [ 37, 38, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000011000000110000000000000000",
p: [ 38, 39, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000110000001100000000000000",
p: [ 40, 41, 48, 49 ]
}, {
b: "0000000000000000000000000000000000000000011000000110000000000000",
p: [ 41, 42, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000001100000011000000000000",
p: [ 42, 43, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000110000001100000000000",
p: [ 43, 44, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000011000000110000000000",
p: [ 44, 45, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000001100000011000000000",
p: [ 45, 46, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000110000001100000000",
p: [ 46, 47, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001100000011000000",
p: [ 48, 49, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000110000001100000",
p: [ 49, 50, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000011000000110000",
p: [ 50, 51, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000001100000011000",
p: [ 51, 52, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000110000001100",
p: [ 52, 53, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011000000110",
p: [ 53, 54, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001100000011",
p: [ 54, 55, 62, 63 ]
} ], [ {
b: "0100000011100000000000000000000000000000000000000000000000000000",
p: [ 1, 8, 9, 10 ]
}, {
b: "0010000001110000000000000000000000000000000000000000000000000000",
p: [ 2, 9, 10, 11 ]
}, {
b: "0001000000111000000000000000000000000000000000000000000000000000",
p: [ 3, 10, 11, 12 ]
}, {
b: "0000100000011100000000000000000000000000000000000000000000000000",
p: [ 4, 11, 12, 13 ]
}, {
b: "0000010000001110000000000000000000000000000000000000000000000000",
p: [ 5, 12, 13, 14 ]
}, {
b: "0000001000000111000000000000000000000000000000000000000000000000",
p: [ 6, 13, 14, 15 ]
}, {
b: "0000000001000000111000000000000000000000000000000000000000000000",
p: [ 9, 16, 17, 18 ]
}, {
b: "0000000000100000011100000000000000000000000000000000000000000000",
p: [ 10, 17, 18, 19 ]
}, {
b: "0000000000010000001110000000000000000000000000000000000000000000",
p: [ 11, 18, 19, 20 ]
}, {
b: "0000000000001000000111000000000000000000000000000000000000000000",
p: [ 12, 19, 20, 21 ]
}, {
b: "0000000000000100000011100000000000000000000000000000000000000000",
p: [ 13, 20, 21, 22 ]
}, {
b: "0000000000000010000001110000000000000000000000000000000000000000",
p: [ 14, 21, 22, 23 ]
}, {
b: "0000000000000000010000001110000000000000000000000000000000000000",
p: [ 17, 24, 25, 26 ]
}, {
b: "0000000000000000001000000111000000000000000000000000000000000000",
p: [ 18, 25, 26, 27 ]
}, {
b: "0000000000000000000100000011100000000000000000000000000000000000",
p: [ 19, 26, 27, 28 ]
}, {
b: "0000000000000000000010000001110000000000000000000000000000000000",
p: [ 20, 27, 28, 29 ]
}, {
b: "0000000000000000000001000000111000000000000000000000000000000000",
p: [ 21, 28, 29, 30 ]
}, {
b: "0000000000000000000000100000011100000000000000000000000000000000",
p: [ 22, 29, 30, 31 ]
}, {
b: "0000000000000000000000000100000011100000000000000000000000000000",
p: [ 25, 32, 33, 34 ]
}, {
b: "0000000000000000000000000010000001110000000000000000000000000000",
p: [ 26, 33, 34, 35 ]
}, {
b: "0000000000000000000000000001000000111000000000000000000000000000",
p: [ 27, 34, 35, 36 ]
}, {
b: "0000000000000000000000000000100000011100000000000000000000000000",
p: [ 28, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000010000001110000000000000000000000000",
p: [ 29, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000001000000111000000000000000000000000",
p: [ 30, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000001000000111000000000000000000000",
p: [ 33, 40, 41, 42 ]
}, {
b: "0000000000000000000000000000000000100000011100000000000000000000",
p: [ 34, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000010000001110000000000000000000",
p: [ 35, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000001000000111000000000000000000",
p: [ 36, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000100000011100000000000000000",
p: [ 37, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000010000001110000000000000000",
p: [ 38, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000010000001110000000000000",
p: [ 41, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000001000000111000000000000",
p: [ 42, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000100000011100000000000",
p: [ 43, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000010000001110000000000",
p: [ 44, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000001000000111000000000",
p: [ 45, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000100000011100000000",
p: [ 46, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000011100000",
p: [ 49, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000001110000",
p: [ 50, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000111000",
p: [ 51, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000011100",
p: [ 52, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000001110",
p: [ 53, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000111",
p: [ 54, 61, 62, 63 ]
} ], [ {
b: "1111100000000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 3, 4 ]
}, {
b: "0111110000000000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 4, 5 ]
}, {
b: "0011111000000000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 5, 6 ]
}, {
b: "0001111100000000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 6, 7 ]
}, {
b: "0000000011111000000000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 11, 12 ]
}, {
b: "0000000001111100000000000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 12, 13 ]
}, {
b: "0000000000111110000000000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 13, 14 ]
}, {
b: "0000000000011111000000000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 14, 15 ]
}, {
b: "0000000000000000111110000000000000000000000000000000000000000000",
p: [ 16, 17, 18, 19, 20 ]
}, {
b: "0000000000000000011111000000000000000000000000000000000000000000",
p: [ 17, 18, 19, 20, 21 ]
}, {
b: "0000000000000000001111100000000000000000000000000000000000000000",
p: [ 18, 19, 20, 21, 22 ]
}, {
b: "0000000000000000000111110000000000000000000000000000000000000000",
p: [ 19, 20, 21, 22, 23 ]
}, {
b: "0000000000000000000000001111100000000000000000000000000000000000",
p: [ 24, 25, 26, 27, 28 ]
}, {
b: "0000000000000000000000000111110000000000000000000000000000000000",
p: [ 25, 26, 27, 28, 29 ]
}, {
b: "0000000000000000000000000011111000000000000000000000000000000000",
p: [ 26, 27, 28, 29, 30 ]
}, {
b: "0000000000000000000000000001111100000000000000000000000000000000",
p: [ 27, 28, 29, 30, 31 ]
}, {
b: "0000000000000000000000000000000011111000000000000000000000000000",
p: [ 32, 33, 34, 35, 36 ]
}, {
b: "0000000000000000000000000000000001111100000000000000000000000000",
p: [ 33, 34, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000000000111110000000000000000000000000",
p: [ 34, 35, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000000000011111000000000000000000000000",
p: [ 35, 36, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000000000000111110000000000000000000",
p: [ 40, 41, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000000000011111000000000000000000",
p: [ 41, 42, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000000001111100000000000000000",
p: [ 42, 43, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000000000111110000000000000000",
p: [ 43, 44, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000000000001111100000000000",
p: [ 48, 49, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000000000111110000000000",
p: [ 49, 50, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000000011111000000000",
p: [ 50, 51, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000001111100000000",
p: [ 51, 52, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000011111000",
p: [ 56, 57, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000001111100",
p: [ 57, 58, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000111110",
p: [ 58, 59, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000011111",
p: [ 59, 60, 61, 62, 63 ]
} ], [ {
b: "1110000000100000001000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 10, 18 ]
}, {
b: "0111000000010000000100000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 11, 19 ]
}, {
b: "0011100000001000000010000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 12, 20 ]
}, {
b: "0001110000000100000001000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 13, 21 ]
}, {
b: "0000111000000010000000100000000000000000000000000000000000000000",
p: [ 4, 5, 6, 14, 22 ]
}, {
b: "0000011100000001000000010000000000000000000000000000000000000000",
p: [ 5, 6, 7, 15, 23 ]
}, {
b: "0000000011100000001000000010000000000000000000000000000000000000",
p: [ 8, 9, 10, 18, 26 ]
}, {
b: "0000000001110000000100000001000000000000000000000000000000000000",
p: [ 9, 10, 11, 19, 27 ]
}, {
b: "0000000000111000000010000000100000000000000000000000000000000000",
p: [ 10, 11, 12, 20, 28 ]
}, {
b: "0000000000011100000001000000010000000000000000000000000000000000",
p: [ 11, 12, 13, 21, 29 ]
}, {
b: "0000000000001110000000100000001000000000000000000000000000000000",
p: [ 12, 13, 14, 22, 30 ]
}, {
b: "0000000000000111000000010000000100000000000000000000000000000000",
p: [ 13, 14, 15, 23, 31 ]
}, {
b: "0000000000000000111000000010000000100000000000000000000000000000",
p: [ 16, 17, 18, 26, 34 ]
}, {
b: "0000000000000000011100000001000000010000000000000000000000000000",
p: [ 17, 18, 19, 27, 35 ]
}, {
b: "0000000000000000001110000000100000001000000000000000000000000000",
p: [ 18, 19, 20, 28, 36 ]
}, {
b: "0000000000000000000111000000010000000100000000000000000000000000",
p: [ 19, 20, 21, 29, 37 ]
}, {
b: "0000000000000000000011100000001000000010000000000000000000000000",
p: [ 20, 21, 22, 30, 38 ]
}, {
b: "0000000000000000000001110000000100000001000000000000000000000000",
p: [ 21, 22, 23, 31, 39 ]
}, {
b: "0000000000000000000000001110000000100000001000000000000000000000",
p: [ 24, 25, 26, 34, 42 ]
}, {
b: "0000000000000000000000000111000000010000000100000000000000000000",
p: [ 25, 26, 27, 35, 43 ]
}, {
b: "0000000000000000000000000011100000001000000010000000000000000000",
p: [ 26, 27, 28, 36, 44 ]
}, {
b: "0000000000000000000000000001110000000100000001000000000000000000",
p: [ 27, 28, 29, 37, 45 ]
}, {
b: "0000000000000000000000000000111000000010000000100000000000000000",
p: [ 28, 29, 30, 38, 46 ]
}, {
b: "0000000000000000000000000000011100000001000000010000000000000000",
p: [ 29, 30, 31, 39, 47 ]
}, {
b: "0000000000000000000000000000000011100000001000000010000000000000",
p: [ 32, 33, 34, 42, 50 ]
}, {
b: "0000000000000000000000000000000001110000000100000001000000000000",
p: [ 33, 34, 35, 43, 51 ]
}, {
b: "0000000000000000000000000000000000111000000010000000100000000000",
p: [ 34, 35, 36, 44, 52 ]
}, {
b: "0000000000000000000000000000000000011100000001000000010000000000",
p: [ 35, 36, 37, 45, 53 ]
}, {
b: "0000000000000000000000000000000000001110000000100000001000000000",
p: [ 36, 37, 38, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000111000000010000000100000000",
p: [ 37, 38, 39, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000111000000010000000100000",
p: [ 40, 41, 42, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000011100000001000000010000",
p: [ 41, 42, 43, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000001110000000100000001000",
p: [ 42, 43, 44, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000111000000010000000100",
p: [ 43, 44, 45, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000011100000001000000010",
p: [ 44, 45, 46, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000001110000000100000001",
p: [ 45, 46, 47, 55, 63 ]
} ], [ {
b: "1110000011100000111000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 8, 9, 10, 16, 17, 18 ]
}, {
b: "0111000001110000011100000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 9, 10, 11, 17, 18, 19 ]
}, {
b: "0011100000111000001110000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 10, 11, 12, 18, 19, 20 ]
}, {
b: "0001110000011100000111000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 11, 12, 13, 19, 20, 21 ]
}, {
b: "0000111000001110000011100000000000000000000000000000000000000000",
p: [ 4, 5, 6, 12, 13, 14, 20, 21, 22 ]
}, {
b: "0000011100000111000001110000000000000000000000000000000000000000",
p: [ 5, 6, 7, 13, 14, 15, 21, 22, 23 ]
}, {
b: "0000000011100000111000001110000000000000000000000000000000000000",
p: [ 8, 9, 10, 16, 17, 18, 24, 25, 26 ]
}, {
b: "0000000001110000011100000111000000000000000000000000000000000000",
p: [ 9, 10, 11, 17, 18, 19, 25, 26, 27 ]
}, {
b: "0000000000111000001110000011100000000000000000000000000000000000",
p: [ 10, 11, 12, 18, 19, 20, 26, 27, 28 ]
}, {
b: "0000000000011100000111000001110000000000000000000000000000000000",
p: [ 11, 12, 13, 19, 20, 21, 27, 28, 29 ]
}, {
b: "0000000000001110000011100000111000000000000000000000000000000000",
p: [ 12, 13, 14, 20, 21, 22, 28, 29, 30 ]
}, {
b: "0000000000000111000001110000011100000000000000000000000000000000",
p: [ 13, 14, 15, 21, 22, 23, 29, 30, 31 ]
}, {
b: "0000000000000000111000001110000011100000000000000000000000000000",
p: [ 16, 17, 18, 24, 25, 26, 32, 33, 34 ]
}, {
b: "0000000000000000011100000111000001110000000000000000000000000000",
p: [ 17, 18, 19, 25, 26, 27, 33, 34, 35 ]
}, {
b: "0000000000000000001110000011100000111000000000000000000000000000",
p: [ 18, 19, 20, 26, 27, 28, 34, 35, 36 ]
}, {
b: "0000000000000000000111000001110000011100000000000000000000000000",
p: [ 19, 20, 21, 27, 28, 29, 35, 36, 37 ]
}, {
b: "0000000000000000000011100000111000001110000000000000000000000000",
p: [ 20, 21, 22, 28, 29, 30, 36, 37, 38 ]
}, {
b: "0000000000000000000001110000011100000111000000000000000000000000",
p: [ 21, 22, 23, 29, 30, 31, 37, 38, 39 ]
}, {
b: "0000000000000000000000001110000011100000111000000000000000000000",
p: [ 24, 25, 26, 32, 33, 34, 40, 41, 42 ]
}, {
b: "0000000000000000000000000111000001110000011100000000000000000000",
p: [ 25, 26, 27, 33, 34, 35, 41, 42, 43 ]
}, {
b: "0000000000000000000000000011100000111000001110000000000000000000",
p: [ 26, 27, 28, 34, 35, 36, 42, 43, 44 ]
}, {
b: "0000000000000000000000000001110000011100000111000000000000000000",
p: [ 27, 28, 29, 35, 36, 37, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000111000001110000011100000000000000000",
p: [ 28, 29, 30, 36, 37, 38, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000011100000111000001110000000000000000",
p: [ 29, 30, 31, 37, 38, 39, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000011100000111000001110000000000000",
p: [ 32, 33, 34, 40, 41, 42, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000001110000011100000111000000000000",
p: [ 33, 34, 35, 41, 42, 43, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000111000001110000011100000000000",
p: [ 34, 35, 36, 42, 43, 44, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000011100000111000001110000000000",
p: [ 35, 36, 37, 43, 44, 45, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000001110000011100000111000000000",
p: [ 36, 37, 38, 44, 45, 46, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000111000001110000011100000000",
p: [ 37, 38, 39, 45, 46, 47, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000111000001110000011100000",
p: [ 40, 41, 42, 48, 49, 50, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000011100000111000001110000",
p: [ 41, 42, 43, 49, 50, 51, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000001110000011100000111000",
p: [ 42, 43, 44, 50, 51, 52, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000111000001110000011100",
p: [ 43, 44, 45, 51, 52, 53, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000011100000111000001110",
p: [ 44, 45, 46, 52, 53, 54, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000001110000011100000111",
p: [ 45, 46, 47, 53, 54, 55, 61, 62, 63 ]
} ], [ {
b: "0110000011000000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 8, 9 ]
}, {
b: "0011000001100000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 9, 10 ]
}, {
b: "0001100000110000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 10, 11 ]
}, {
b: "0000110000011000000000000000000000000000000000000000000000000000",
p: [ 4, 5, 11, 12 ]
}, {
b: "0000011000001100000000000000000000000000000000000000000000000000",
p: [ 5, 6, 12, 13 ]
}, {
b: "0000001100000110000000000000000000000000000000000000000000000000",
p: [ 6, 7, 13, 14 ]
}, {
b: "0000000001100000110000000000000000000000000000000000000000000000",
p: [ 9, 10, 16, 17 ]
}, {
b: "0000000000110000011000000000000000000000000000000000000000000000",
p: [ 10, 11, 17, 18 ]
}, {
b: "0000000000011000001100000000000000000000000000000000000000000000",
p: [ 11, 12, 18, 19 ]
}, {
b: "0000000000001100000110000000000000000000000000000000000000000000",
p: [ 12, 13, 19, 20 ]
}, {
b: "0000000000000110000011000000000000000000000000000000000000000000",
p: [ 13, 14, 20, 21 ]
}, {
b: "0000000000000011000001100000000000000000000000000000000000000000",
p: [ 14, 15, 21, 22 ]
}, {
b: "0000000000000000011000001100000000000000000000000000000000000000",
p: [ 17, 18, 24, 25 ]
}, {
b: "0000000000000000001100000110000000000000000000000000000000000000",
p: [ 18, 19, 25, 26 ]
}, {
b: "0000000000000000000110000011000000000000000000000000000000000000",
p: [ 19, 20, 26, 27 ]
}, {
b: "0000000000000000000011000001100000000000000000000000000000000000",
p: [ 20, 21, 27, 28 ]
}, {
b: "0000000000000000000001100000110000000000000000000000000000000000",
p: [ 21, 22, 28, 29 ]
}, {
b: "0000000000000000000000110000011000000000000000000000000000000000",
p: [ 22, 23, 29, 30 ]
}, {
b: "0000000000000000000000000110000011000000000000000000000000000000",
p: [ 25, 26, 32, 33 ]
}, {
b: "0000000000000000000000000011000001100000000000000000000000000000",
p: [ 26, 27, 33, 34 ]
}, {
b: "0000000000000000000000000001100000110000000000000000000000000000",
p: [ 27, 28, 34, 35 ]
}, {
b: "0000000000000000000000000000110000011000000000000000000000000000",
p: [ 28, 29, 35, 36 ]
}, {
b: "0000000000000000000000000000011000001100000000000000000000000000",
p: [ 29, 30, 36, 37 ]
}, {
b: "0000000000000000000000000000001100000110000000000000000000000000",
p: [ 30, 31, 37, 38 ]
}, {
b: "0000000000000000000000000000000001100000110000000000000000000000",
p: [ 33, 34, 40, 41 ]
}, {
b: "0000000000000000000000000000000000110000011000000000000000000000",
p: [ 34, 35, 41, 42 ]
}, {
b: "0000000000000000000000000000000000011000001100000000000000000000",
p: [ 35, 36, 42, 43 ]
}, {
b: "0000000000000000000000000000000000001100000110000000000000000000",
p: [ 36, 37, 43, 44 ]
}, {
b: "0000000000000000000000000000000000000110000011000000000000000000",
p: [ 37, 38, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000011000001100000000000000000",
p: [ 38, 39, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000000011000001100000000000000",
p: [ 41, 42, 48, 49 ]
}, {
b: "0000000000000000000000000000000000000000001100000110000000000000",
p: [ 42, 43, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000000110000011000000000000",
p: [ 43, 44, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000011000001100000000000",
p: [ 44, 45, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000001100000110000000000",
p: [ 45, 46, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000110000011000000000",
p: [ 46, 47, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000110000011000000",
p: [ 49, 50, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000011000001100000",
p: [ 50, 51, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000001100000110000",
p: [ 51, 52, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000110000011000",
p: [ 52, 53, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011000001100",
p: [ 53, 54, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001100000110",
p: [ 54, 55, 61, 62 ]
} ], [ {
b: "1100000001000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 9 ]
}, {
b: "0110000000100000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 10 ]
}, {
b: "0011000000010000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 11 ]
}, {
b: "0001100000001000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 12 ]
}, {
b: "0000110000000100000000000000000000000000000000000000000000000000",
p: [ 4, 5, 13 ]
}, {
b: "0000011000000010000000000000000000000000000000000000000000000000",
p: [ 5, 6, 14 ]
}, {
b: "0000001100000001000000000000000000000000000000000000000000000000",
p: [ 6, 7, 15 ]
}, {
b: "0000000011000000010000000000000000000000000000000000000000000000",
p: [ 8, 9, 17 ]
}, {
b: "0000000001100000001000000000000000000000000000000000000000000000",
p: [ 9, 10, 18 ]
}, {
b: "0000000000110000000100000000000000000000000000000000000000000000",
p: [ 10, 11, 19 ]
}, {
b: "0000000000011000000010000000000000000000000000000000000000000000",
p: [ 11, 12, 20 ]
}, {
b: "0000000000001100000001000000000000000000000000000000000000000000",
p: [ 12, 13, 21 ]
}, {
b: "0000000000000110000000100000000000000000000000000000000000000000",
p: [ 13, 14, 22 ]
}, {
b: "0000000000000011000000010000000000000000000000000000000000000000",
p: [ 14, 15, 23 ]
}, {
b: "0000000000000000110000000100000000000000000000000000000000000000",
p: [ 16, 17, 25 ]
}, {
b: "0000000000000000011000000010000000000000000000000000000000000000",
p: [ 17, 18, 26 ]
}, {
b: "0000000000000000001100000001000000000000000000000000000000000000",
p: [ 18, 19, 27 ]
}, {
b: "0000000000000000000110000000100000000000000000000000000000000000",
p: [ 19, 20, 28 ]
}, {
b: "0000000000000000000011000000010000000000000000000000000000000000",
p: [ 20, 21, 29 ]
}, {
b: "0000000000000000000001100000001000000000000000000000000000000000",
p: [ 21, 22, 30 ]
}, {
b: "0000000000000000000000110000000100000000000000000000000000000000",
p: [ 22, 23, 31 ]
}, {
b: "0000000000000000000000001100000001000000000000000000000000000000",
p: [ 24, 25, 33 ]
}, {
b: "0000000000000000000000000110000000100000000000000000000000000000",
p: [ 25, 26, 34 ]
}, {
b: "0000000000000000000000000011000000010000000000000000000000000000",
p: [ 26, 27, 35 ]
}, {
b: "0000000000000000000000000001100000001000000000000000000000000000",
p: [ 27, 28, 36 ]
}, {
b: "0000000000000000000000000000110000000100000000000000000000000000",
p: [ 28, 29, 37 ]
}, {
b: "0000000000000000000000000000011000000010000000000000000000000000",
p: [ 29, 30, 38 ]
}, {
b: "0000000000000000000000000000001100000001000000000000000000000000",
p: [ 30, 31, 39 ]
}, {
b: "0000000000000000000000000000000011000000010000000000000000000000",
p: [ 32, 33, 41 ]
}, {
b: "0000000000000000000000000000000001100000001000000000000000000000",
p: [ 33, 34, 42 ]
}, {
b: "0000000000000000000000000000000000110000000100000000000000000000",
p: [ 34, 35, 43 ]
}, {
b: "0000000000000000000000000000000000011000000010000000000000000000",
p: [ 35, 36, 44 ]
}, {
b: "0000000000000000000000000000000000001100000001000000000000000000",
p: [ 36, 37, 45 ]
}, {
b: "0000000000000000000000000000000000000110000000100000000000000000",
p: [ 37, 38, 46 ]
}, {
b: "0000000000000000000000000000000000000011000000010000000000000000",
p: [ 38, 39, 47 ]
}, {
b: "0000000000000000000000000000000000000000110000000100000000000000",
p: [ 40, 41, 49 ]
}, {
b: "0000000000000000000000000000000000000000011000000010000000000000",
p: [ 41, 42, 50 ]
}, {
b: "0000000000000000000000000000000000000000001100000001000000000000",
p: [ 42, 43, 51 ]
}, {
b: "0000000000000000000000000000000000000000000110000000100000000000",
p: [ 43, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000000000011000000010000000000",
p: [ 44, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000000000001100000001000000000",
p: [ 45, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000110000000100000000",
p: [ 46, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001100000001000000",
p: [ 48, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000110000000100000",
p: [ 49, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000011000000010000",
p: [ 50, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000001100000001000",
p: [ 51, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000110000000100",
p: [ 52, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011000000010",
p: [ 53, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001100000001",
p: [ 54, 55, 63 ]
} ], [ {
b: "1000000011000000010000000000000000000000000000000000000000000000",
p: [ 0, 8, 9, 17 ]
}, {
b: "0100000001100000001000000000000000000000000000000000000000000000",
p: [ 1, 9, 10, 18 ]
}, {
b: "0010000000110000000100000000000000000000000000000000000000000000",
p: [ 2, 10, 11, 19 ]
}, {
b: "0001000000011000000010000000000000000000000000000000000000000000",
p: [ 3, 11, 12, 20 ]
}, {
b: "0000100000001100000001000000000000000000000000000000000000000000",
p: [ 4, 12, 13, 21 ]
}, {
b: "0000010000000110000000100000000000000000000000000000000000000000",
p: [ 5, 13, 14, 22 ]
}, {
b: "0000001000000011000000010000000000000000000000000000000000000000",
p: [ 6, 14, 15, 23 ]
}, {
b: "0000000010000000110000000100000000000000000000000000000000000000",
p: [ 8, 16, 17, 25 ]
}, {
b: "0000000001000000011000000010000000000000000000000000000000000000",
p: [ 9, 17, 18, 26 ]
}, {
b: "0000000000100000001100000001000000000000000000000000000000000000",
p: [ 10, 18, 19, 27 ]
}, {
b: "0000000000010000000110000000100000000000000000000000000000000000",
p: [ 11, 19, 20, 28 ]
}, {
b: "0000000000001000000011000000010000000000000000000000000000000000",
p: [ 12, 20, 21, 29 ]
}, {
b: "0000000000000100000001100000001000000000000000000000000000000000",
p: [ 13, 21, 22, 30 ]
}, {
b: "0000000000000010000000110000000100000000000000000000000000000000",
p: [ 14, 22, 23, 31 ]
}, {
b: "0000000000000000100000001100000001000000000000000000000000000000",
p: [ 16, 24, 25, 33 ]
}, {
b: "0000000000000000010000000110000000100000000000000000000000000000",
p: [ 17, 25, 26, 34 ]
}, {
b: "0000000000000000001000000011000000010000000000000000000000000000",
p: [ 18, 26, 27, 35 ]
}, {
b: "0000000000000000000100000001100000001000000000000000000000000000",
p: [ 19, 27, 28, 36 ]
}, {
b: "0000000000000000000010000000110000000100000000000000000000000000",
p: [ 20, 28, 29, 37 ]
}, {
b: "0000000000000000000001000000011000000010000000000000000000000000",
p: [ 21, 29, 30, 38 ]
}, {
b: "0000000000000000000000100000001100000001000000000000000000000000",
p: [ 22, 30, 31, 39 ]
}, {
b: "0000000000000000000000001000000011000000010000000000000000000000",
p: [ 24, 32, 33, 41 ]
}, {
b: "0000000000000000000000000100000001100000001000000000000000000000",
p: [ 25, 33, 34, 42 ]
}, {
b: "0000000000000000000000000010000000110000000100000000000000000000",
p: [ 26, 34, 35, 43 ]
}, {
b: "0000000000000000000000000001000000011000000010000000000000000000",
p: [ 27, 35, 36, 44 ]
}, {
b: "0000000000000000000000000000100000001100000001000000000000000000",
p: [ 28, 36, 37, 45 ]
}, {
b: "0000000000000000000000000000010000000110000000100000000000000000",
p: [ 29, 37, 38, 46 ]
}, {
b: "0000000000000000000000000000001000000011000000010000000000000000",
p: [ 30, 38, 39, 47 ]
}, {
b: "0000000000000000000000000000000010000000110000000100000000000000",
p: [ 32, 40, 41, 49 ]
}, {
b: "0000000000000000000000000000000001000000011000000010000000000000",
p: [ 33, 41, 42, 50 ]
}, {
b: "0000000000000000000000000000000000100000001100000001000000000000",
p: [ 34, 42, 43, 51 ]
}, {
b: "0000000000000000000000000000000000010000000110000000100000000000",
p: [ 35, 43, 44, 52 ]
}, {
b: "0000000000000000000000000000000000001000000011000000010000000000",
p: [ 36, 44, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000100000001100000001000000000",
p: [ 37, 45, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000010000000110000000100000000",
p: [ 38, 46, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000100000001100000001000000",
p: [ 40, 48, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000010000000110000000100000",
p: [ 41, 49, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000001000000011000000010000",
p: [ 42, 50, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000100000001100000001000",
p: [ 43, 51, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000010000000110000000100",
p: [ 44, 52, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001000000011000000010",
p: [ 45, 53, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001100000001",
p: [ 46, 54, 55, 63 ]
} ], [ {
b: "1111000000000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 3 ]
}, {
b: "0111100000000000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 4 ]
}, {
b: "0011110000000000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 5 ]
}, {
b: "0001111000000000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 6 ]
}, {
b: "0000111100000000000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 7 ]
}, {
b: "0000000011110000000000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 11 ]
}, {
b: "0000000001111000000000000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 12 ]
}, {
b: "0000000000111100000000000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 13 ]
}, {
b: "0000000000011110000000000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 14 ]
}, {
b: "0000000000001111000000000000000000000000000000000000000000000000",
p: [ 12, 13, 14, 15 ]
}, {
b: "0000000000000000111100000000000000000000000000000000000000000000",
p: [ 16, 17, 18, 19 ]
}, {
b: "0000000000000000011110000000000000000000000000000000000000000000",
p: [ 17, 18, 19, 20 ]
}, {
b: "0000000000000000001111000000000000000000000000000000000000000000",
p: [ 18, 19, 20, 21 ]
}, {
b: "0000000000000000000111100000000000000000000000000000000000000000",
p: [ 19, 20, 21, 22 ]
}, {
b: "0000000000000000000011110000000000000000000000000000000000000000",
p: [ 20, 21, 22, 23 ]
}, {
b: "0000000000000000000000001111000000000000000000000000000000000000",
p: [ 24, 25, 26, 27 ]
}, {
b: "0000000000000000000000000111100000000000000000000000000000000000",
p: [ 25, 26, 27, 28 ]
}, {
b: "0000000000000000000000000011110000000000000000000000000000000000",
p: [ 26, 27, 28, 29 ]
}, {
b: "0000000000000000000000000001111000000000000000000000000000000000",
p: [ 27, 28, 29, 30 ]
}, {
b: "0000000000000000000000000000111100000000000000000000000000000000",
p: [ 28, 29, 30, 31 ]
}, {
b: "0000000000000000000000000000000011110000000000000000000000000000",
p: [ 32, 33, 34, 35 ]
}, {
b: "0000000000000000000000000000000001111000000000000000000000000000",
p: [ 33, 34, 35, 36 ]
}, {
b: "0000000000000000000000000000000000111100000000000000000000000000",
p: [ 34, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000000000011110000000000000000000000000",
p: [ 35, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000000000001111000000000000000000000000",
p: [ 36, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000000000000111100000000000000000000",
p: [ 40, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000000000011110000000000000000000",
p: [ 41, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000000000001111000000000000000000",
p: [ 42, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000000000111100000000000000000",
p: [ 43, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000000000011110000000000000000",
p: [ 44, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000000000001111000000000000",
p: [ 48, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000000000111100000000000",
p: [ 49, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000000000011110000000000",
p: [ 50, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000000001111000000000",
p: [ 51, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111100000000",
p: [ 52, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000011110000",
p: [ 56, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000001111000",
p: [ 57, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000111100",
p: [ 58, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000011110",
p: [ 59, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000000001111",
p: [ 60, 61, 62, 63 ]
} ], [ {
b: "1100000001100000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 9, 10 ]
}, {
b: "0110000000110000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 10, 11 ]
}, {
b: "0011000000011000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 11, 12 ]
}, {
b: "0001100000001100000000000000000000000000000000000000000000000000",
p: [ 3, 4, 12, 13 ]
}, {
b: "0000110000000110000000000000000000000000000000000000000000000000",
p: [ 4, 5, 13, 14 ]
}, {
b: "0000011000000011000000000000000000000000000000000000000000000000",
p: [ 5, 6, 14, 15 ]
}, {
b: "0000000011000000011000000000000000000000000000000000000000000000",
p: [ 8, 9, 17, 18 ]
}, {
b: "0000000001100000001100000000000000000000000000000000000000000000",
p: [ 9, 10, 18, 19 ]
}, {
b: "0000000000110000000110000000000000000000000000000000000000000000",
p: [ 10, 11, 19, 20 ]
}, {
b: "0000000000011000000011000000000000000000000000000000000000000000",
p: [ 11, 12, 20, 21 ]
}, {
b: "0000000000001100000001100000000000000000000000000000000000000000",
p: [ 12, 13, 21, 22 ]
}, {
b: "0000000000000110000000110000000000000000000000000000000000000000",
p: [ 13, 14, 22, 23 ]
}, {
b: "0000000000000000110000000110000000000000000000000000000000000000",
p: [ 16, 17, 25, 26 ]
}, {
b: "0000000000000000011000000011000000000000000000000000000000000000",
p: [ 17, 18, 26, 27 ]
}, {
b: "0000000000000000001100000001100000000000000000000000000000000000",
p: [ 18, 19, 27, 28 ]
}, {
b: "0000000000000000000110000000110000000000000000000000000000000000",
p: [ 19, 20, 28, 29 ]
}, {
b: "0000000000000000000011000000011000000000000000000000000000000000",
p: [ 20, 21, 29, 30 ]
}, {
b: "0000000000000000000001100000001100000000000000000000000000000000",
p: [ 21, 22, 30, 31 ]
}, {
b: "0000000000000000000000001100000001100000000000000000000000000000",
p: [ 24, 25, 33, 34 ]
}, {
b: "0000000000000000000000000110000000110000000000000000000000000000",
p: [ 25, 26, 34, 35 ]
}, {
b: "0000000000000000000000000011000000011000000000000000000000000000",
p: [ 26, 27, 35, 36 ]
}, {
b: "0000000000000000000000000001100000001100000000000000000000000000",
p: [ 27, 28, 36, 37 ]
}, {
b: "0000000000000000000000000000110000000110000000000000000000000000",
p: [ 28, 29, 37, 38 ]
}, {
b: "0000000000000000000000000000011000000011000000000000000000000000",
p: [ 29, 30, 38, 39 ]
}, {
b: "0000000000000000000000000000000011000000011000000000000000000000",
p: [ 32, 33, 41, 42 ]
}, {
b: "0000000000000000000000000000000001100000001100000000000000000000",
p: [ 33, 34, 42, 43 ]
}, {
b: "0000000000000000000000000000000000110000000110000000000000000000",
p: [ 34, 35, 43, 44 ]
}, {
b: "0000000000000000000000000000000000011000000011000000000000000000",
p: [ 35, 36, 44, 45 ]
}, {
b: "0000000000000000000000000000000000001100000001100000000000000000",
p: [ 36, 37, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000110000000110000000000000000",
p: [ 37, 38, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000110000000110000000000000",
p: [ 40, 41, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000011000000011000000000000",
p: [ 41, 42, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000001100000001100000000000",
p: [ 42, 43, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000110000000110000000000",
p: [ 43, 44, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000011000000011000000000",
p: [ 44, 45, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000001100000001100000000",
p: [ 45, 46, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001100000001100000",
p: [ 48, 49, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000110000000110000",
p: [ 49, 50, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000011000000011000",
p: [ 50, 51, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000001100000001100",
p: [ 51, 52, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000110000000110",
p: [ 52, 53, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011000000011",
p: [ 53, 54, 62, 63 ]
} ], [ {
b: "0100000011000000100000000000000000000000000000000000000000000000",
p: [ 1, 8, 9, 16 ]
}, {
b: "0010000001100000010000000000000000000000000000000000000000000000",
p: [ 2, 9, 10, 17 ]
}, {
b: "0001000000110000001000000000000000000000000000000000000000000000",
p: [ 3, 10, 11, 18 ]
}, {
b: "0000100000011000000100000000000000000000000000000000000000000000",
p: [ 4, 11, 12, 19 ]
}, {
b: "0000010000001100000010000000000000000000000000000000000000000000",
p: [ 5, 12, 13, 20 ]
}, {
b: "0000001000000110000001000000000000000000000000000000000000000000",
p: [ 6, 13, 14, 21 ]
}, {
b: "0000000100000011000000100000000000000000000000000000000000000000",
p: [ 7, 14, 15, 22 ]
}, {
b: "0000000001000000110000001000000000000000000000000000000000000000",
p: [ 9, 16, 17, 24 ]
}, {
b: "0000000000100000011000000100000000000000000000000000000000000000",
p: [ 10, 17, 18, 25 ]
}, {
b: "0000000000010000001100000010000000000000000000000000000000000000",
p: [ 11, 18, 19, 26 ]
}, {
b: "0000000000001000000110000001000000000000000000000000000000000000",
p: [ 12, 19, 20, 27 ]
}, {
b: "0000000000000100000011000000100000000000000000000000000000000000",
p: [ 13, 20, 21, 28 ]
}, {
b: "0000000000000010000001100000010000000000000000000000000000000000",
p: [ 14, 21, 22, 29 ]
}, {
b: "0000000000000001000000110000001000000000000000000000000000000000",
p: [ 15, 22, 23, 30 ]
}, {
b: "0000000000000000010000001100000010000000000000000000000000000000",
p: [ 17, 24, 25, 32 ]
}, {
b: "0000000000000000001000000110000001000000000000000000000000000000",
p: [ 18, 25, 26, 33 ]
}, {
b: "0000000000000000000100000011000000100000000000000000000000000000",
p: [ 19, 26, 27, 34 ]
}, {
b: "0000000000000000000010000001100000010000000000000000000000000000",
p: [ 20, 27, 28, 35 ]
}, {
b: "0000000000000000000001000000110000001000000000000000000000000000",
p: [ 21, 28, 29, 36 ]
}, {
b: "0000000000000000000000100000011000000100000000000000000000000000",
p: [ 22, 29, 30, 37 ]
}, {
b: "0000000000000000000000010000001100000010000000000000000000000000",
p: [ 23, 30, 31, 38 ]
}, {
b: "0000000000000000000000000100000011000000100000000000000000000000",
p: [ 25, 32, 33, 40 ]
}, {
b: "0000000000000000000000000010000001100000010000000000000000000000",
p: [ 26, 33, 34, 41 ]
}, {
b: "0000000000000000000000000001000000110000001000000000000000000000",
p: [ 27, 34, 35, 42 ]
}, {
b: "0000000000000000000000000000100000011000000100000000000000000000",
p: [ 28, 35, 36, 43 ]
}, {
b: "0000000000000000000000000000010000001100000010000000000000000000",
p: [ 29, 36, 37, 44 ]
}, {
b: "0000000000000000000000000000001000000110000001000000000000000000",
p: [ 30, 37, 38, 45 ]
}, {
b: "0000000000000000000000000000000100000011000000100000000000000000",
p: [ 31, 38, 39, 46 ]
}, {
b: "0000000000000000000000000000000001000000110000001000000000000000",
p: [ 33, 40, 41, 48 ]
}, {
b: "0000000000000000000000000000000000100000011000000100000000000000",
p: [ 34, 41, 42, 49 ]
}, {
b: "0000000000000000000000000000000000010000001100000010000000000000",
p: [ 35, 42, 43, 50 ]
}, {
b: "0000000000000000000000000000000000001000000110000001000000000000",
p: [ 36, 43, 44, 51 ]
}, {
b: "0000000000000000000000000000000000000100000011000000100000000000",
p: [ 37, 44, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000010000001100000010000000000",
p: [ 38, 45, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000001000000110000001000000000",
p: [ 39, 46, 47, 54 ]
}, {
b: "0000000000000000000000000000000000000000010000001100000010000000",
p: [ 41, 48, 49, 56 ]
}, {
b: "0000000000000000000000000000000000000000001000000110000001000000",
p: [ 42, 49, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000000100000011000000100000",
p: [ 43, 50, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000010000001100000010000",
p: [ 44, 51, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000001000000110000001000",
p: [ 45, 52, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000100000011000000100",
p: [ 46, 53, 54, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000010000001100000010",
p: [ 47, 54, 55, 62 ]
} ], [ {
b: "1000000011000000100000000000000000000000000000000000000000000000",
p: [ 0, 8, 9, 16 ]
}, {
b: "0100000001100000010000000000000000000000000000000000000000000000",
p: [ 1, 9, 10, 17 ]
}, {
b: "0010000000110000001000000000000000000000000000000000000000000000",
p: [ 2, 10, 11, 18 ]
}, {
b: "0001000000011000000100000000000000000000000000000000000000000000",
p: [ 3, 11, 12, 19 ]
}, {
b: "0000100000001100000010000000000000000000000000000000000000000000",
p: [ 4, 12, 13, 20 ]
}, {
b: "0000010000000110000001000000000000000000000000000000000000000000",
p: [ 5, 13, 14, 21 ]
}, {
b: "0000001000000011000000100000000000000000000000000000000000000000",
p: [ 6, 14, 15, 22 ]
}, {
b: "0000000010000000110000001000000000000000000000000000000000000000",
p: [ 8, 16, 17, 24 ]
}, {
b: "0000000001000000011000000100000000000000000000000000000000000000",
p: [ 9, 17, 18, 25 ]
}, {
b: "0000000000100000001100000010000000000000000000000000000000000000",
p: [ 10, 18, 19, 26 ]
}, {
b: "0000000000010000000110000001000000000000000000000000000000000000",
p: [ 11, 19, 20, 27 ]
}, {
b: "0000000000001000000011000000100000000000000000000000000000000000",
p: [ 12, 20, 21, 28 ]
}, {
b: "0000000000000100000001100000010000000000000000000000000000000000",
p: [ 13, 21, 22, 29 ]
}, {
b: "0000000000000010000000110000001000000000000000000000000000000000",
p: [ 14, 22, 23, 30 ]
}, {
b: "0000000000000000100000001100000010000000000000000000000000000000",
p: [ 16, 24, 25, 32 ]
}, {
b: "0000000000000000010000000110000001000000000000000000000000000000",
p: [ 17, 25, 26, 33 ]
}, {
b: "0000000000000000001000000011000000100000000000000000000000000000",
p: [ 18, 26, 27, 34 ]
}, {
b: "0000000000000000000100000001100000010000000000000000000000000000",
p: [ 19, 27, 28, 35 ]
}, {
b: "0000000000000000000010000000110000001000000000000000000000000000",
p: [ 20, 28, 29, 36 ]
}, {
b: "0000000000000000000001000000011000000100000000000000000000000000",
p: [ 21, 29, 30, 37 ]
}, {
b: "0000000000000000000000100000001100000010000000000000000000000000",
p: [ 22, 30, 31, 38 ]
}, {
b: "0000000000000000000000001000000011000000100000000000000000000000",
p: [ 24, 32, 33, 40 ]
}, {
b: "0000000000000000000000000100000001100000010000000000000000000000",
p: [ 25, 33, 34, 41 ]
}, {
b: "0000000000000000000000000010000000110000001000000000000000000000",
p: [ 26, 34, 35, 42 ]
}, {
b: "0000000000000000000000000001000000011000000100000000000000000000",
p: [ 27, 35, 36, 43 ]
}, {
b: "0000000000000000000000000000100000001100000010000000000000000000",
p: [ 28, 36, 37, 44 ]
}, {
b: "0000000000000000000000000000010000000110000001000000000000000000",
p: [ 29, 37, 38, 45 ]
}, {
b: "0000000000000000000000000000001000000011000000100000000000000000",
p: [ 30, 38, 39, 46 ]
}, {
b: "0000000000000000000000000000000010000000110000001000000000000000",
p: [ 32, 40, 41, 48 ]
}, {
b: "0000000000000000000000000000000001000000011000000100000000000000",
p: [ 33, 41, 42, 49 ]
}, {
b: "0000000000000000000000000000000000100000001100000010000000000000",
p: [ 34, 42, 43, 50 ]
}, {
b: "0000000000000000000000000000000000010000000110000001000000000000",
p: [ 35, 43, 44, 51 ]
}, {
b: "0000000000000000000000000000000000001000000011000000100000000000",
p: [ 36, 44, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000100000001100000010000000000",
p: [ 37, 45, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000010000000110000001000000000",
p: [ 38, 46, 47, 54 ]
}, {
b: "0000000000000000000000000000000000000000100000001100000010000000",
p: [ 40, 48, 49, 56 ]
}, {
b: "0000000000000000000000000000000000000000010000000110000001000000",
p: [ 41, 49, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000001000000011000000100000",
p: [ 42, 50, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000001100000010000",
p: [ 43, 51, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000000110000001000",
p: [ 44, 52, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000011000000100",
p: [ 45, 53, 54, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001100000010",
p: [ 46, 54, 55, 62 ]
} ], [ {
b: "1110000010000000100000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 8, 16 ]
}, {
b: "0111000001000000010000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 9, 17 ]
}, {
b: "0011100000100000001000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 10, 18 ]
}, {
b: "0001110000010000000100000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 11, 19 ]
}, {
b: "0000111000001000000010000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 12, 20 ]
}, {
b: "0000011100000100000001000000000000000000000000000000000000000000",
p: [ 5, 6, 7, 13, 21 ]
}, {
b: "0000000011100000100000001000000000000000000000000000000000000000",
p: [ 8, 9, 10, 16, 24 ]
}, {
b: "0000000001110000010000000100000000000000000000000000000000000000",
p: [ 9, 10, 11, 17, 25 ]
}, {
b: "0000000000111000001000000010000000000000000000000000000000000000",
p: [ 10, 11, 12, 18, 26 ]
}, {
b: "0000000000011100000100000001000000000000000000000000000000000000",
p: [ 11, 12, 13, 19, 27 ]
}, {
b: "0000000000001110000010000000100000000000000000000000000000000000",
p: [ 12, 13, 14, 20, 28 ]
}, {
b: "0000000000000111000001000000010000000000000000000000000000000000",
p: [ 13, 14, 15, 21, 29 ]
}, {
b: "0000000000000000111000001000000010000000000000000000000000000000",
p: [ 16, 17, 18, 24, 32 ]
}, {
b: "0000000000000000011100000100000001000000000000000000000000000000",
p: [ 17, 18, 19, 25, 33 ]
}, {
b: "0000000000000000001110000010000000100000000000000000000000000000",
p: [ 18, 19, 20, 26, 34 ]
}, {
b: "0000000000000000000111000001000000010000000000000000000000000000",
p: [ 19, 20, 21, 27, 35 ]
}, {
b: "0000000000000000000011100000100000001000000000000000000000000000",
p: [ 20, 21, 22, 28, 36 ]
}, {
b: "0000000000000000000001110000010000000100000000000000000000000000",
p: [ 21, 22, 23, 29, 37 ]
}, {
b: "0000000000000000000000001110000010000000100000000000000000000000",
p: [ 24, 25, 26, 32, 40 ]
}, {
b: "0000000000000000000000000111000001000000010000000000000000000000",
p: [ 25, 26, 27, 33, 41 ]
}, {
b: "0000000000000000000000000011100000100000001000000000000000000000",
p: [ 26, 27, 28, 34, 42 ]
}, {
b: "0000000000000000000000000001110000010000000100000000000000000000",
p: [ 27, 28, 29, 35, 43 ]
}, {
b: "0000000000000000000000000000111000001000000010000000000000000000",
p: [ 28, 29, 30, 36, 44 ]
}, {
b: "0000000000000000000000000000011100000100000001000000000000000000",
p: [ 29, 30, 31, 37, 45 ]
}, {
b: "0000000000000000000000000000000011100000100000001000000000000000",
p: [ 32, 33, 34, 40, 48 ]
}, {
b: "0000000000000000000000000000000001110000010000000100000000000000",
p: [ 33, 34, 35, 41, 49 ]
}, {
b: "0000000000000000000000000000000000111000001000000010000000000000",
p: [ 34, 35, 36, 42, 50 ]
}, {
b: "0000000000000000000000000000000000011100000100000001000000000000",
p: [ 35, 36, 37, 43, 51 ]
}, {
b: "0000000000000000000000000000000000001110000010000000100000000000",
p: [ 36, 37, 38, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000111000001000000010000000000",
p: [ 37, 38, 39, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000000111000001000000010000000",
p: [ 40, 41, 42, 48, 56 ]
}, {
b: "0000000000000000000000000000000000000000011100000100000001000000",
p: [ 41, 42, 43, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000001110000010000000100000",
p: [ 42, 43, 44, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000111000001000000010000",
p: [ 43, 44, 45, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000011100000100000001000",
p: [ 44, 45, 46, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001110000010000000100",
p: [ 45, 46, 47, 53, 61 ]
} ], [ {
b: "1000000010000000100000001000000010000000000000000000000000000000",
p: [ 0, 8, 16, 24, 32 ]
}, {
b: "0100000001000000010000000100000001000000000000000000000000000000",
p: [ 1, 9, 17, 25, 33 ]
}, {
b: "0010000000100000001000000010000000100000000000000000000000000000",
p: [ 2, 10, 18, 26, 34 ]
}, {
b: "0001000000010000000100000001000000010000000000000000000000000000",
p: [ 3, 11, 19, 27, 35 ]
}, {
b: "0000100000001000000010000000100000001000000000000000000000000000",
p: [ 4, 12, 20, 28, 36 ]
}, {
b: "0000010000000100000001000000010000000100000000000000000000000000",
p: [ 5, 13, 21, 29, 37 ]
}, {
b: "0000001000000010000000100000001000000010000000000000000000000000",
p: [ 6, 14, 22, 30, 38 ]
}, {
b: "0000000100000001000000010000000100000001000000000000000000000000",
p: [ 7, 15, 23, 31, 39 ]
}, {
b: "0000000010000000100000001000000010000000100000000000000000000000",
p: [ 8, 16, 24, 32, 40 ]
}, {
b: "0000000001000000010000000100000001000000010000000000000000000000",
p: [ 9, 17, 25, 33, 41 ]
}, {
b: "0000000000100000001000000010000000100000001000000000000000000000",
p: [ 10, 18, 26, 34, 42 ]
}, {
b: "0000000000010000000100000001000000010000000100000000000000000000",
p: [ 11, 19, 27, 35, 43 ]
}, {
b: "0000000000001000000010000000100000001000000010000000000000000000",
p: [ 12, 20, 28, 36, 44 ]
}, {
b: "0000000000000100000001000000010000000100000001000000000000000000",
p: [ 13, 21, 29, 37, 45 ]
}, {
b: "0000000000000010000000100000001000000010000000100000000000000000",
p: [ 14, 22, 30, 38, 46 ]
}, {
b: "0000000000000001000000010000000100000001000000010000000000000000",
p: [ 15, 23, 31, 39, 47 ]
}, {
b: "0000000000000000100000001000000010000000100000001000000000000000",
p: [ 16, 24, 32, 40, 48 ]
}, {
b: "0000000000000000010000000100000001000000010000000100000000000000",
p: [ 17, 25, 33, 41, 49 ]
}, {
b: "0000000000000000001000000010000000100000001000000010000000000000",
p: [ 18, 26, 34, 42, 50 ]
}, {
b: "0000000000000000000100000001000000010000000100000001000000000000",
p: [ 19, 27, 35, 43, 51 ]
}, {
b: "0000000000000000000010000000100000001000000010000000100000000000",
p: [ 20, 28, 36, 44, 52 ]
}, {
b: "0000000000000000000001000000010000000100000001000000010000000000",
p: [ 21, 29, 37, 45, 53 ]
}, {
b: "0000000000000000000000100000001000000010000000100000001000000000",
p: [ 22, 30, 38, 46, 54 ]
}, {
b: "0000000000000000000000010000000100000001000000010000000100000000",
p: [ 23, 31, 39, 47, 55 ]
}, {
b: "0000000000000000000000001000000010000000100000001000000010000000",
p: [ 24, 32, 40, 48, 56 ]
}, {
b: "0000000000000000000000000100000001000000010000000100000001000000",
p: [ 25, 33, 41, 49, 57 ]
}, {
b: "0000000000000000000000000010000000100000001000000010000000100000",
p: [ 26, 34, 42, 50, 58 ]
}, {
b: "0000000000000000000000000001000000010000000100000001000000010000",
p: [ 27, 35, 43, 51, 59 ]
}, {
b: "0000000000000000000000000000100000001000000010000000100000001000",
p: [ 28, 36, 44, 52, 60 ]
}, {
b: "0000000000000000000000000000010000000100000001000000010000000100",
p: [ 29, 37, 45, 53, 61 ]
}, {
b: "0000000000000000000000000000001000000010000000100000001000000010",
p: [ 30, 38, 46, 54, 62 ]
}, {
b: "0000000000000000000000000000000100000001000000010000000100000001",
p: [ 31, 39, 47, 55, 63 ]
} ], [ {
b: "1000000010000000111000000000000000000000000000000000000000000000",
p: [ 0, 8, 16, 17, 18 ]
}, {
b: "0100000001000000011100000000000000000000000000000000000000000000",
p: [ 1, 9, 17, 18, 19 ]
}, {
b: "0010000000100000001110000000000000000000000000000000000000000000",
p: [ 2, 10, 18, 19, 20 ]
}, {
b: "0001000000010000000111000000000000000000000000000000000000000000",
p: [ 3, 11, 19, 20, 21 ]
}, {
b: "0000100000001000000011100000000000000000000000000000000000000000",
p: [ 4, 12, 20, 21, 22 ]
}, {
b: "0000010000000100000001110000000000000000000000000000000000000000",
p: [ 5, 13, 21, 22, 23 ]
}, {
b: "0000000010000000100000001110000000000000000000000000000000000000",
p: [ 8, 16, 24, 25, 26 ]
}, {
b: "0000000001000000010000000111000000000000000000000000000000000000",
p: [ 9, 17, 25, 26, 27 ]
}, {
b: "0000000000100000001000000011100000000000000000000000000000000000",
p: [ 10, 18, 26, 27, 28 ]
}, {
b: "0000000000010000000100000001110000000000000000000000000000000000",
p: [ 11, 19, 27, 28, 29 ]
}, {
b: "0000000000001000000010000000111000000000000000000000000000000000",
p: [ 12, 20, 28, 29, 30 ]
}, {
b: "0000000000000100000001000000011100000000000000000000000000000000",
p: [ 13, 21, 29, 30, 31 ]
}, {
b: "0000000000000000100000001000000011100000000000000000000000000000",
p: [ 16, 24, 32, 33, 34 ]
}, {
b: "0000000000000000010000000100000001110000000000000000000000000000",
p: [ 17, 25, 33, 34, 35 ]
}, {
b: "0000000000000000001000000010000000111000000000000000000000000000",
p: [ 18, 26, 34, 35, 36 ]
}, {
b: "0000000000000000000100000001000000011100000000000000000000000000",
p: [ 19, 27, 35, 36, 37 ]
}, {
b: "0000000000000000000010000000100000001110000000000000000000000000",
p: [ 20, 28, 36, 37, 38 ]
}, {
b: "0000000000000000000001000000010000000111000000000000000000000000",
p: [ 21, 29, 37, 38, 39 ]
}, {
b: "0000000000000000000000001000000010000000111000000000000000000000",
p: [ 24, 32, 40, 41, 42 ]
}, {
b: "0000000000000000000000000100000001000000011100000000000000000000",
p: [ 25, 33, 41, 42, 43 ]
}, {
b: "0000000000000000000000000010000000100000001110000000000000000000",
p: [ 26, 34, 42, 43, 44 ]
}, {
b: "0000000000000000000000000001000000010000000111000000000000000000",
p: [ 27, 35, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000100000001000000011100000000000000000",
p: [ 28, 36, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000010000000100000001110000000000000000",
p: [ 29, 37, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000010000000100000001110000000000000",
p: [ 32, 40, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000001000000010000000111000000000000",
p: [ 33, 41, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000100000001000000011100000000000",
p: [ 34, 42, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000010000000100000001110000000000",
p: [ 35, 43, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000001000000010000000111000000000",
p: [ 36, 44, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000100000001000000011100000000",
p: [ 37, 45, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000100000001000000011100000",
p: [ 40, 48, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000010000000100000001110000",
p: [ 41, 49, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000000111000",
p: [ 42, 50, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000000011100",
p: [ 43, 51, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000001110",
p: [ 44, 52, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000000111",
p: [ 45, 53, 61, 62, 63 ]
} ], [ {
b: "0010000000100000111000000000000000000000000000000000000000000000",
p: [ 2, 10, 16, 17, 18 ]
}, {
b: "0001000000010000011100000000000000000000000000000000000000000000",
p: [ 3, 11, 17, 18, 19 ]
}, {
b: "0000100000001000001110000000000000000000000000000000000000000000",
p: [ 4, 12, 18, 19, 20 ]
}, {
b: "0000010000000100000111000000000000000000000000000000000000000000",
p: [ 5, 13, 19, 20, 21 ]
}, {
b: "0000001000000010000011100000000000000000000000000000000000000000",
p: [ 6, 14, 20, 21, 22 ]
}, {
b: "0000000100000001000001110000000000000000000000000000000000000000",
p: [ 7, 15, 21, 22, 23 ]
}, {
b: "0000000000100000001000001110000000000000000000000000000000000000",
p: [ 10, 18, 24, 25, 26 ]
}, {
b: "0000000000010000000100000111000000000000000000000000000000000000",
p: [ 11, 19, 25, 26, 27 ]
}, {
b: "0000000000001000000010000011100000000000000000000000000000000000",
p: [ 12, 20, 26, 27, 28 ]
}, {
b: "0000000000000100000001000001110000000000000000000000000000000000",
p: [ 13, 21, 27, 28, 29 ]
}, {
b: "0000000000000010000000100000111000000000000000000000000000000000",
p: [ 14, 22, 28, 29, 30 ]
}, {
b: "0000000000000001000000010000011100000000000000000000000000000000",
p: [ 15, 23, 29, 30, 31 ]
}, {
b: "0000000000000000001000000010000011100000000000000000000000000000",
p: [ 18, 26, 32, 33, 34 ]
}, {
b: "0000000000000000000100000001000001110000000000000000000000000000",
p: [ 19, 27, 33, 34, 35 ]
}, {
b: "0000000000000000000010000000100000111000000000000000000000000000",
p: [ 20, 28, 34, 35, 36 ]
}, {
b: "0000000000000000000001000000010000011100000000000000000000000000",
p: [ 21, 29, 35, 36, 37 ]
}, {
b: "0000000000000000000000100000001000001110000000000000000000000000",
p: [ 22, 30, 36, 37, 38 ]
}, {
b: "0000000000000000000000010000000100000111000000000000000000000000",
p: [ 23, 31, 37, 38, 39 ]
}, {
b: "0000000000000000000000000010000000100000111000000000000000000000",
p: [ 26, 34, 40, 41, 42 ]
}, {
b: "0000000000000000000000000001000000010000011100000000000000000000",
p: [ 27, 35, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000100000001000001110000000000000000000",
p: [ 28, 36, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000010000000100000111000000000000000000",
p: [ 29, 37, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000001000000010000011100000000000000000",
p: [ 30, 38, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000100000001000001110000000000000000",
p: [ 31, 39, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000100000001000001110000000000000",
p: [ 34, 42, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000010000000100000111000000000000",
p: [ 35, 43, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000001000000010000011100000000000",
p: [ 36, 44, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000100000001000001110000000000",
p: [ 37, 45, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000010000000100000111000000000",
p: [ 38, 46, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000001000000010000011100000000",
p: [ 39, 47, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000011100000",
p: [ 42, 50, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000001110000",
p: [ 43, 51, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000111000",
p: [ 44, 52, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000011100",
p: [ 45, 53, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001000001110",
p: [ 46, 54, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000010000000100000111",
p: [ 47, 55, 61, 62, 63 ]
} ], [ {
b: "0100000011000000010000000000000000000000000000000000000000000000",
p: [ 1, 8, 9, 17 ]
}, {
b: "0010000001100000001000000000000000000000000000000000000000000000",
p: [ 2, 9, 10, 18 ]
}, {
b: "0001000000110000000100000000000000000000000000000000000000000000",
p: [ 3, 10, 11, 19 ]
}, {
b: "0000100000011000000010000000000000000000000000000000000000000000",
p: [ 4, 11, 12, 20 ]
}, {
b: "0000010000001100000001000000000000000000000000000000000000000000",
p: [ 5, 12, 13, 21 ]
}, {
b: "0000001000000110000000100000000000000000000000000000000000000000",
p: [ 6, 13, 14, 22 ]
}, {
b: "0000000100000011000000010000000000000000000000000000000000000000",
p: [ 7, 14, 15, 23 ]
}, {
b: "0000000001000000110000000100000000000000000000000000000000000000",
p: [ 9, 16, 17, 25 ]
}, {
b: "0000000000100000011000000010000000000000000000000000000000000000",
p: [ 10, 17, 18, 26 ]
}, {
b: "0000000000010000001100000001000000000000000000000000000000000000",
p: [ 11, 18, 19, 27 ]
}, {
b: "0000000000001000000110000000100000000000000000000000000000000000",
p: [ 12, 19, 20, 28 ]
}, {
b: "0000000000000100000011000000010000000000000000000000000000000000",
p: [ 13, 20, 21, 29 ]
}, {
b: "0000000000000010000001100000001000000000000000000000000000000000",
p: [ 14, 21, 22, 30 ]
}, {
b: "0000000000000001000000110000000100000000000000000000000000000000",
p: [ 15, 22, 23, 31 ]
}, {
b: "0000000000000000010000001100000001000000000000000000000000000000",
p: [ 17, 24, 25, 33 ]
}, {
b: "0000000000000000001000000110000000100000000000000000000000000000",
p: [ 18, 25, 26, 34 ]
}, {
b: "0000000000000000000100000011000000010000000000000000000000000000",
p: [ 19, 26, 27, 35 ]
}, {
b: "0000000000000000000010000001100000001000000000000000000000000000",
p: [ 20, 27, 28, 36 ]
}, {
b: "0000000000000000000001000000110000000100000000000000000000000000",
p: [ 21, 28, 29, 37 ]
}, {
b: "0000000000000000000000100000011000000010000000000000000000000000",
p: [ 22, 29, 30, 38 ]
}, {
b: "0000000000000000000000010000001100000001000000000000000000000000",
p: [ 23, 30, 31, 39 ]
}, {
b: "0000000000000000000000000100000011000000010000000000000000000000",
p: [ 25, 32, 33, 41 ]
}, {
b: "0000000000000000000000000010000001100000001000000000000000000000",
p: [ 26, 33, 34, 42 ]
}, {
b: "0000000000000000000000000001000000110000000100000000000000000000",
p: [ 27, 34, 35, 43 ]
}, {
b: "0000000000000000000000000000100000011000000010000000000000000000",
p: [ 28, 35, 36, 44 ]
}, {
b: "0000000000000000000000000000010000001100000001000000000000000000",
p: [ 29, 36, 37, 45 ]
}, {
b: "0000000000000000000000000000001000000110000000100000000000000000",
p: [ 30, 37, 38, 46 ]
}, {
b: "0000000000000000000000000000000100000011000000010000000000000000",
p: [ 31, 38, 39, 47 ]
}, {
b: "0000000000000000000000000000000001000000110000000100000000000000",
p: [ 33, 40, 41, 49 ]
}, {
b: "0000000000000000000000000000000000100000011000000010000000000000",
p: [ 34, 41, 42, 50 ]
}, {
b: "0000000000000000000000000000000000010000001100000001000000000000",
p: [ 35, 42, 43, 51 ]
}, {
b: "0000000000000000000000000000000000001000000110000000100000000000",
p: [ 36, 43, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000100000011000000010000000000",
p: [ 37, 44, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000010000001100000001000000000",
p: [ 38, 45, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000001000000110000000100000000",
p: [ 39, 46, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000010000001100000001000000",
p: [ 41, 48, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000001000000110000000100000",
p: [ 42, 49, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000011000000010000",
p: [ 43, 50, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000001100000001000",
p: [ 44, 51, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000110000000100",
p: [ 45, 52, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000011000000010",
p: [ 46, 53, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000010000001100000001",
p: [ 47, 54, 55, 63 ]
} ], [ {
b: "1110000001000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 9 ]
}, {
b: "0111000000100000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 10 ]
}, {
b: "0011100000010000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 11 ]
}, {
b: "0001110000001000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 12 ]
}, {
b: "0000111000000100000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 13 ]
}, {
b: "0000011100000010000000000000000000000000000000000000000000000000",
p: [ 5, 6, 7, 14 ]
}, {
b: "0000000011100000010000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 17 ]
}, {
b: "0000000001110000001000000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 18 ]
}, {
b: "0000000000111000000100000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 19 ]
}, {
b: "0000000000011100000010000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 20 ]
}, {
b: "0000000000001110000001000000000000000000000000000000000000000000",
p: [ 12, 13, 14, 21 ]
}, {
b: "0000000000000111000000100000000000000000000000000000000000000000",
p: [ 13, 14, 15, 22 ]
}, {
b: "0000000000000000111000000100000000000000000000000000000000000000",
p: [ 16, 17, 18, 25 ]
}, {
b: "0000000000000000011100000010000000000000000000000000000000000000",
p: [ 17, 18, 19, 26 ]
}, {
b: "0000000000000000001110000001000000000000000000000000000000000000",
p: [ 18, 19, 20, 27 ]
}, {
b: "0000000000000000000111000000100000000000000000000000000000000000",
p: [ 19, 20, 21, 28 ]
}, {
b: "0000000000000000000011100000010000000000000000000000000000000000",
p: [ 20, 21, 22, 29 ]
}, {
b: "0000000000000000000001110000001000000000000000000000000000000000",
p: [ 21, 22, 23, 30 ]
}, {
b: "0000000000000000000000001110000001000000000000000000000000000000",
p: [ 24, 25, 26, 33 ]
}, {
b: "0000000000000000000000000111000000100000000000000000000000000000",
p: [ 25, 26, 27, 34 ]
}, {
b: "0000000000000000000000000011100000010000000000000000000000000000",
p: [ 26, 27, 28, 35 ]
}, {
b: "0000000000000000000000000001110000001000000000000000000000000000",
p: [ 27, 28, 29, 36 ]
}, {
b: "0000000000000000000000000000111000000100000000000000000000000000",
p: [ 28, 29, 30, 37 ]
}, {
b: "0000000000000000000000000000011100000010000000000000000000000000",
p: [ 29, 30, 31, 38 ]
}, {
b: "0000000000000000000000000000000011100000010000000000000000000000",
p: [ 32, 33, 34, 41 ]
}, {
b: "0000000000000000000000000000000001110000001000000000000000000000",
p: [ 33, 34, 35, 42 ]
}, {
b: "0000000000000000000000000000000000111000000100000000000000000000",
p: [ 34, 35, 36, 43 ]
}, {
b: "0000000000000000000000000000000000011100000010000000000000000000",
p: [ 35, 36, 37, 44 ]
}, {
b: "0000000000000000000000000000000000001110000001000000000000000000",
p: [ 36, 37, 38, 45 ]
}, {
b: "0000000000000000000000000000000000000111000000100000000000000000",
p: [ 37, 38, 39, 46 ]
}, {
b: "0000000000000000000000000000000000000000111000000100000000000000",
p: [ 40, 41, 42, 49 ]
}, {
b: "0000000000000000000000000000000000000000011100000010000000000000",
p: [ 41, 42, 43, 50 ]
}, {
b: "0000000000000000000000000000000000000000001110000001000000000000",
p: [ 42, 43, 44, 51 ]
}, {
b: "0000000000000000000000000000000000000000000111000000100000000000",
p: [ 43, 44, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000000000011100000010000000000",
p: [ 44, 45, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000000000001110000001000000000",
p: [ 45, 46, 47, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000001110000001000000",
p: [ 48, 49, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000111000000100000",
p: [ 49, 50, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000011100000010000",
p: [ 50, 51, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000001110000001000",
p: [ 51, 52, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111000000100",
p: [ 52, 53, 54, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011100000010",
p: [ 53, 54, 55, 62 ]
} ], [ {
b: "1000000011000000000000000000000000000000000000000000000000000000",
p: [ 0, 8, 9 ]
}, {
b: "0100000001100000000000000000000000000000000000000000000000000000",
p: [ 1, 9, 10 ]
}, {
b: "0010000000110000000000000000000000000000000000000000000000000000",
p: [ 2, 10, 11 ]
}, {
b: "0001000000011000000000000000000000000000000000000000000000000000",
p: [ 3, 11, 12 ]
}, {
b: "0000100000001100000000000000000000000000000000000000000000000000",
p: [ 4, 12, 13 ]
}, {
b: "0000010000000110000000000000000000000000000000000000000000000000",
p: [ 5, 13, 14 ]
}, {
b: "0000001000000011000000000000000000000000000000000000000000000000",
p: [ 6, 14, 15 ]
}, {
b: "0000000010000000110000000000000000000000000000000000000000000000",
p: [ 8, 16, 17 ]
}, {
b: "0000000001000000011000000000000000000000000000000000000000000000",
p: [ 9, 17, 18 ]
}, {
b: "0000000000100000001100000000000000000000000000000000000000000000",
p: [ 10, 18, 19 ]
}, {
b: "0000000000010000000110000000000000000000000000000000000000000000",
p: [ 11, 19, 20 ]
}, {
b: "0000000000001000000011000000000000000000000000000000000000000000",
p: [ 12, 20, 21 ]
}, {
b: "0000000000000100000001100000000000000000000000000000000000000000",
p: [ 13, 21, 22 ]
}, {
b: "0000000000000010000000110000000000000000000000000000000000000000",
p: [ 14, 22, 23 ]
}, {
b: "0000000000000000100000001100000000000000000000000000000000000000",
p: [ 16, 24, 25 ]
}, {
b: "0000000000000000010000000110000000000000000000000000000000000000",
p: [ 17, 25, 26 ]
}, {
b: "0000000000000000001000000011000000000000000000000000000000000000",
p: [ 18, 26, 27 ]
}, {
b: "0000000000000000000100000001100000000000000000000000000000000000",
p: [ 19, 27, 28 ]
}, {
b: "0000000000000000000010000000110000000000000000000000000000000000",
p: [ 20, 28, 29 ]
}, {
b: "0000000000000000000001000000011000000000000000000000000000000000",
p: [ 21, 29, 30 ]
}, {
b: "0000000000000000000000100000001100000000000000000000000000000000",
p: [ 22, 30, 31 ]
}, {
b: "0000000000000000000000001000000011000000000000000000000000000000",
p: [ 24, 32, 33 ]
}, {
b: "0000000000000000000000000100000001100000000000000000000000000000",
p: [ 25, 33, 34 ]
}, {
b: "0000000000000000000000000010000000110000000000000000000000000000",
p: [ 26, 34, 35 ]
}, {
b: "0000000000000000000000000001000000011000000000000000000000000000",
p: [ 27, 35, 36 ]
}, {
b: "0000000000000000000000000000100000001100000000000000000000000000",
p: [ 28, 36, 37 ]
}, {
b: "0000000000000000000000000000010000000110000000000000000000000000",
p: [ 29, 37, 38 ]
}, {
b: "0000000000000000000000000000001000000011000000000000000000000000",
p: [ 30, 38, 39 ]
}, {
b: "0000000000000000000000000000000010000000110000000000000000000000",
p: [ 32, 40, 41 ]
}, {
b: "0000000000000000000000000000000001000000011000000000000000000000",
p: [ 33, 41, 42 ]
}, {
b: "0000000000000000000000000000000000100000001100000000000000000000",
p: [ 34, 42, 43 ]
}, {
b: "0000000000000000000000000000000000010000000110000000000000000000",
p: [ 35, 43, 44 ]
}, {
b: "0000000000000000000000000000000000001000000011000000000000000000",
p: [ 36, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000100000001100000000000000000",
p: [ 37, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000010000000110000000000000000",
p: [ 38, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000100000001100000000000000",
p: [ 40, 48, 49 ]
}, {
b: "0000000000000000000000000000000000000000010000000110000000000000",
p: [ 41, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000001000000011000000000000",
p: [ 42, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000100000001100000000000",
p: [ 43, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000010000000110000000000",
p: [ 44, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000001000000011000000000",
p: [ 45, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001100000000",
p: [ 46, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001000000011000000",
p: [ 48, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000001100000",
p: [ 49, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000000110000",
p: [ 50, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000011000",
p: [ 51, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000001100",
p: [ 52, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000000110",
p: [ 53, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000011",
p: [ 54, 62, 63 ]
} ], [ {
b: "0100000011000000000000000000000000000000000000000000000000000000",
p: [ 1, 8, 9 ]
}, {
b: "0010000001100000000000000000000000000000000000000000000000000000",
p: [ 2, 9, 10 ]
}, {
b: "0001000000110000000000000000000000000000000000000000000000000000",
p: [ 3, 10, 11 ]
}, {
b: "0000100000011000000000000000000000000000000000000000000000000000",
p: [ 4, 11, 12 ]
}, {
b: "0000010000001100000000000000000000000000000000000000000000000000",
p: [ 5, 12, 13 ]
}, {
b: "0000001000000110000000000000000000000000000000000000000000000000",
p: [ 6, 13, 14 ]
}, {
b: "0000000100000011000000000000000000000000000000000000000000000000",
p: [ 7, 14, 15 ]
}, {
b: "0000000001000000110000000000000000000000000000000000000000000000",
p: [ 9, 16, 17 ]
}, {
b: "0000000000100000011000000000000000000000000000000000000000000000",
p: [ 10, 17, 18 ]
}, {
b: "0000000000010000001100000000000000000000000000000000000000000000",
p: [ 11, 18, 19 ]
}, {
b: "0000000000001000000110000000000000000000000000000000000000000000",
p: [ 12, 19, 20 ]
}, {
b: "0000000000000100000011000000000000000000000000000000000000000000",
p: [ 13, 20, 21 ]
}, {
b: "0000000000000010000001100000000000000000000000000000000000000000",
p: [ 14, 21, 22 ]
}, {
b: "0000000000000001000000110000000000000000000000000000000000000000",
p: [ 15, 22, 23 ]
}, {
b: "0000000000000000010000001100000000000000000000000000000000000000",
p: [ 17, 24, 25 ]
}, {
b: "0000000000000000001000000110000000000000000000000000000000000000",
p: [ 18, 25, 26 ]
}, {
b: "0000000000000000000100000011000000000000000000000000000000000000",
p: [ 19, 26, 27 ]
}, {
b: "0000000000000000000010000001100000000000000000000000000000000000",
p: [ 20, 27, 28 ]
}, {
b: "0000000000000000000001000000110000000000000000000000000000000000",
p: [ 21, 28, 29 ]
}, {
b: "0000000000000000000000100000011000000000000000000000000000000000",
p: [ 22, 29, 30 ]
}, {
b: "0000000000000000000000010000001100000000000000000000000000000000",
p: [ 23, 30, 31 ]
}, {
b: "0000000000000000000000000100000011000000000000000000000000000000",
p: [ 25, 32, 33 ]
}, {
b: "0000000000000000000000000010000001100000000000000000000000000000",
p: [ 26, 33, 34 ]
}, {
b: "0000000000000000000000000001000000110000000000000000000000000000",
p: [ 27, 34, 35 ]
}, {
b: "0000000000000000000000000000100000011000000000000000000000000000",
p: [ 28, 35, 36 ]
}, {
b: "0000000000000000000000000000010000001100000000000000000000000000",
p: [ 29, 36, 37 ]
}, {
b: "0000000000000000000000000000001000000110000000000000000000000000",
p: [ 30, 37, 38 ]
}, {
b: "0000000000000000000000000000000100000011000000000000000000000000",
p: [ 31, 38, 39 ]
}, {
b: "0000000000000000000000000000000001000000110000000000000000000000",
p: [ 33, 40, 41 ]
}, {
b: "0000000000000000000000000000000000100000011000000000000000000000",
p: [ 34, 41, 42 ]
}, {
b: "0000000000000000000000000000000000010000001100000000000000000000",
p: [ 35, 42, 43 ]
}, {
b: "0000000000000000000000000000000000001000000110000000000000000000",
p: [ 36, 43, 44 ]
}, {
b: "0000000000000000000000000000000000000100000011000000000000000000",
p: [ 37, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000010000001100000000000000000",
p: [ 38, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000001000000110000000000000000",
p: [ 39, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000010000001100000000000000",
p: [ 41, 48, 49 ]
}, {
b: "0000000000000000000000000000000000000000001000000110000000000000",
p: [ 42, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000000100000011000000000000",
p: [ 43, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000010000001100000000000",
p: [ 44, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000001000000110000000000",
p: [ 45, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000100000011000000000",
p: [ 46, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000010000001100000000",
p: [ 47, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000011000000",
p: [ 49, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000001100000",
p: [ 50, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000110000",
p: [ 51, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000011000",
p: [ 52, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000001100",
p: [ 53, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000110",
p: [ 54, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000100000011",
p: [ 55, 62, 63 ]
} ], [ {
b: "0100000001000000110000000000000000000000000000000000000000000000",
p: [ 1, 9, 16, 17 ]
}, {
b: "0010000000100000011000000000000000000000000000000000000000000000",
p: [ 2, 10, 17, 18 ]
}, {
b: "0001000000010000001100000000000000000000000000000000000000000000",
p: [ 3, 11, 18, 19 ]
}, {
b: "0000100000001000000110000000000000000000000000000000000000000000",
p: [ 4, 12, 19, 20 ]
}, {
b: "0000010000000100000011000000000000000000000000000000000000000000",
p: [ 5, 13, 20, 21 ]
}, {
b: "0000001000000010000001100000000000000000000000000000000000000000",
p: [ 6, 14, 21, 22 ]
}, {
b: "0000000100000001000000110000000000000000000000000000000000000000",
p: [ 7, 15, 22, 23 ]
}, {
b: "0000000001000000010000001100000000000000000000000000000000000000",
p: [ 9, 17, 24, 25 ]
}, {
b: "0000000000100000001000000110000000000000000000000000000000000000",
p: [ 10, 18, 25, 26 ]
}, {
b: "0000000000010000000100000011000000000000000000000000000000000000",
p: [ 11, 19, 26, 27 ]
}, {
b: "0000000000001000000010000001100000000000000000000000000000000000",
p: [ 12, 20, 27, 28 ]
}, {
b: "0000000000000100000001000000110000000000000000000000000000000000",
p: [ 13, 21, 28, 29 ]
}, {
b: "0000000000000010000000100000011000000000000000000000000000000000",
p: [ 14, 22, 29, 30 ]
}, {
b: "0000000000000001000000010000001100000000000000000000000000000000",
p: [ 15, 23, 30, 31 ]
}, {
b: "0000000000000000010000000100000011000000000000000000000000000000",
p: [ 17, 25, 32, 33 ]
}, {
b: "0000000000000000001000000010000001100000000000000000000000000000",
p: [ 18, 26, 33, 34 ]
}, {
b: "0000000000000000000100000001000000110000000000000000000000000000",
p: [ 19, 27, 34, 35 ]
}, {
b: "0000000000000000000010000000100000011000000000000000000000000000",
p: [ 20, 28, 35, 36 ]
}, {
b: "0000000000000000000001000000010000001100000000000000000000000000",
p: [ 21, 29, 36, 37 ]
}, {
b: "0000000000000000000000100000001000000110000000000000000000000000",
p: [ 22, 30, 37, 38 ]
}, {
b: "0000000000000000000000010000000100000011000000000000000000000000",
p: [ 23, 31, 38, 39 ]
}, {
b: "0000000000000000000000000100000001000000110000000000000000000000",
p: [ 25, 33, 40, 41 ]
}, {
b: "0000000000000000000000000010000000100000011000000000000000000000",
p: [ 26, 34, 41, 42 ]
}, {
b: "0000000000000000000000000001000000010000001100000000000000000000",
p: [ 27, 35, 42, 43 ]
}, {
b: "0000000000000000000000000000100000001000000110000000000000000000",
p: [ 28, 36, 43, 44 ]
}, {
b: "0000000000000000000000000000010000000100000011000000000000000000",
p: [ 29, 37, 44, 45 ]
}, {
b: "0000000000000000000000000000001000000010000001100000000000000000",
p: [ 30, 38, 45, 46 ]
}, {
b: "0000000000000000000000000000000100000001000000110000000000000000",
p: [ 31, 39, 46, 47 ]
}, {
b: "0000000000000000000000000000000001000000010000001100000000000000",
p: [ 33, 41, 48, 49 ]
}, {
b: "0000000000000000000000000000000000100000001000000110000000000000",
p: [ 34, 42, 49, 50 ]
}, {
b: "0000000000000000000000000000000000010000000100000011000000000000",
p: [ 35, 43, 50, 51 ]
}, {
b: "0000000000000000000000000000000000001000000010000001100000000000",
p: [ 36, 44, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000100000001000000110000000000",
p: [ 37, 45, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000010000000100000011000000000",
p: [ 38, 46, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000001000000010000001100000000",
p: [ 39, 47, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000010000000100000011000000",
p: [ 41, 49, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000001100000",
p: [ 42, 50, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000000110000",
p: [ 43, 51, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000011000",
p: [ 44, 52, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000001100",
p: [ 45, 53, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001000000110",
p: [ 46, 54, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000010000000100000011",
p: [ 47, 55, 62, 63 ]
} ], [ {
b: "1110000000100000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 10 ]
}, {
b: "0111000000010000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 11 ]
}, {
b: "0011100000001000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 12 ]
}, {
b: "0001110000000100000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 13 ]
}, {
b: "0000111000000010000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 14 ]
}, {
b: "0000011100000001000000000000000000000000000000000000000000000000",
p: [ 5, 6, 7, 15 ]
}, {
b: "0000000011100000001000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 18 ]
}, {
b: "0000000001110000000100000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 19 ]
}, {
b: "0000000000111000000010000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 20 ]
}, {
b: "0000000000011100000001000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 21 ]
}, {
b: "0000000000001110000000100000000000000000000000000000000000000000",
p: [ 12, 13, 14, 22 ]
}, {
b: "0000000000000111000000010000000000000000000000000000000000000000",
p: [ 13, 14, 15, 23 ]
}, {
b: "0000000000000000111000000010000000000000000000000000000000000000",
p: [ 16, 17, 18, 26 ]
}, {
b: "0000000000000000011100000001000000000000000000000000000000000000",
p: [ 17, 18, 19, 27 ]
}, {
b: "0000000000000000001110000000100000000000000000000000000000000000",
p: [ 18, 19, 20, 28 ]
}, {
b: "0000000000000000000111000000010000000000000000000000000000000000",
p: [ 19, 20, 21, 29 ]
}, {
b: "0000000000000000000011100000001000000000000000000000000000000000",
p: [ 20, 21, 22, 30 ]
}, {
b: "0000000000000000000001110000000100000000000000000000000000000000",
p: [ 21, 22, 23, 31 ]
}, {
b: "0000000000000000000000001110000000100000000000000000000000000000",
p: [ 24, 25, 26, 34 ]
}, {
b: "0000000000000000000000000111000000010000000000000000000000000000",
p: [ 25, 26, 27, 35 ]
}, {
b: "0000000000000000000000000011100000001000000000000000000000000000",
p: [ 26, 27, 28, 36 ]
}, {
b: "0000000000000000000000000001110000000100000000000000000000000000",
p: [ 27, 28, 29, 37 ]
}, {
b: "0000000000000000000000000000111000000010000000000000000000000000",
p: [ 28, 29, 30, 38 ]
}, {
b: "0000000000000000000000000000011100000001000000000000000000000000",
p: [ 29, 30, 31, 39 ]
}, {
b: "0000000000000000000000000000000011100000001000000000000000000000",
p: [ 32, 33, 34, 42 ]
}, {
b: "0000000000000000000000000000000001110000000100000000000000000000",
p: [ 33, 34, 35, 43 ]
}, {
b: "0000000000000000000000000000000000111000000010000000000000000000",
p: [ 34, 35, 36, 44 ]
}, {
b: "0000000000000000000000000000000000011100000001000000000000000000",
p: [ 35, 36, 37, 45 ]
}, {
b: "0000000000000000000000000000000000001110000000100000000000000000",
p: [ 36, 37, 38, 46 ]
}, {
b: "0000000000000000000000000000000000000111000000010000000000000000",
p: [ 37, 38, 39, 47 ]
}, {
b: "0000000000000000000000000000000000000000111000000010000000000000",
p: [ 40, 41, 42, 50 ]
}, {
b: "0000000000000000000000000000000000000000011100000001000000000000",
p: [ 41, 42, 43, 51 ]
}, {
b: "0000000000000000000000000000000000000000001110000000100000000000",
p: [ 42, 43, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000000000111000000010000000000",
p: [ 43, 44, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000000000011100000001000000000",
p: [ 44, 45, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000000000001110000000100000000",
p: [ 45, 46, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001110000000100000",
p: [ 48, 49, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000111000000010000",
p: [ 49, 50, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000011100000001000",
p: [ 50, 51, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000001110000000100",
p: [ 51, 52, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111000000010",
p: [ 52, 53, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011100000001",
p: [ 53, 54, 55, 63 ]
} ], [ {
b: "1100000010000000100000000000000000000000000000000000000000000000",
p: [ 0, 1, 8, 16 ]
}, {
b: "0110000001000000010000000000000000000000000000000000000000000000",
p: [ 1, 2, 9, 17 ]
}, {
b: "0011000000100000001000000000000000000000000000000000000000000000",
p: [ 2, 3, 10, 18 ]
}, {
b: "0001100000010000000100000000000000000000000000000000000000000000",
p: [ 3, 4, 11, 19 ]
}, {
b: "0000110000001000000010000000000000000000000000000000000000000000",
p: [ 4, 5, 12, 20 ]
}, {
b: "0000011000000100000001000000000000000000000000000000000000000000",
p: [ 5, 6, 13, 21 ]
}, {
b: "0000001100000010000000100000000000000000000000000000000000000000",
p: [ 6, 7, 14, 22 ]
}, {
b: "0000000011000000100000001000000000000000000000000000000000000000",
p: [ 8, 9, 16, 24 ]
}, {
b: "0000000001100000010000000100000000000000000000000000000000000000",
p: [ 9, 10, 17, 25 ]
}, {
b: "0000000000110000001000000010000000000000000000000000000000000000",
p: [ 10, 11, 18, 26 ]
}, {
b: "0000000000011000000100000001000000000000000000000000000000000000",
p: [ 11, 12, 19, 27 ]
}, {
b: "0000000000001100000010000000100000000000000000000000000000000000",
p: [ 12, 13, 20, 28 ]
}, {
b: "0000000000000110000001000000010000000000000000000000000000000000",
p: [ 13, 14, 21, 29 ]
}, {
b: "0000000000000011000000100000001000000000000000000000000000000000",
p: [ 14, 15, 22, 30 ]
}, {
b: "0000000000000000110000001000000010000000000000000000000000000000",
p: [ 16, 17, 24, 32 ]
}, {
b: "0000000000000000011000000100000001000000000000000000000000000000",
p: [ 17, 18, 25, 33 ]
}, {
b: "0000000000000000001100000010000000100000000000000000000000000000",
p: [ 18, 19, 26, 34 ]
}, {
b: "0000000000000000000110000001000000010000000000000000000000000000",
p: [ 19, 20, 27, 35 ]
}, {
b: "0000000000000000000011000000100000001000000000000000000000000000",
p: [ 20, 21, 28, 36 ]
}, {
b: "0000000000000000000001100000010000000100000000000000000000000000",
p: [ 21, 22, 29, 37 ]
}, {
b: "0000000000000000000000110000001000000010000000000000000000000000",
p: [ 22, 23, 30, 38 ]
}, {
b: "0000000000000000000000001100000010000000100000000000000000000000",
p: [ 24, 25, 32, 40 ]
}, {
b: "0000000000000000000000000110000001000000010000000000000000000000",
p: [ 25, 26, 33, 41 ]
}, {
b: "0000000000000000000000000011000000100000001000000000000000000000",
p: [ 26, 27, 34, 42 ]
}, {
b: "0000000000000000000000000001100000010000000100000000000000000000",
p: [ 27, 28, 35, 43 ]
}, {
b: "0000000000000000000000000000110000001000000010000000000000000000",
p: [ 28, 29, 36, 44 ]
}, {
b: "0000000000000000000000000000011000000100000001000000000000000000",
p: [ 29, 30, 37, 45 ]
}, {
b: "0000000000000000000000000000001100000010000000100000000000000000",
p: [ 30, 31, 38, 46 ]
}, {
b: "0000000000000000000000000000000011000000100000001000000000000000",
p: [ 32, 33, 40, 48 ]
}, {
b: "0000000000000000000000000000000001100000010000000100000000000000",
p: [ 33, 34, 41, 49 ]
}, {
b: "0000000000000000000000000000000000110000001000000010000000000000",
p: [ 34, 35, 42, 50 ]
}, {
b: "0000000000000000000000000000000000011000000100000001000000000000",
p: [ 35, 36, 43, 51 ]
}, {
b: "0000000000000000000000000000000000001100000010000000100000000000",
p: [ 36, 37, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000110000001000000010000000000",
p: [ 37, 38, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000011000000100000001000000000",
p: [ 38, 39, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000000110000001000000010000000",
p: [ 40, 41, 48, 56 ]
}, {
b: "0000000000000000000000000000000000000000011000000100000001000000",
p: [ 41, 42, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000001100000010000000100000",
p: [ 42, 43, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000110000001000000010000",
p: [ 43, 44, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000011000000100000001000",
p: [ 44, 45, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001100000010000000100",
p: [ 45, 46, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000110000001000000010",
p: [ 46, 47, 54, 62 ]
} ], [ {
b: "1100000001000000010000000000000000000000000000000000000000000000",
p: [ 0, 1, 9, 17 ]
}, {
b: "0110000000100000001000000000000000000000000000000000000000000000",
p: [ 1, 2, 10, 18 ]
}, {
b: "0011000000010000000100000000000000000000000000000000000000000000",
p: [ 2, 3, 11, 19 ]
}, {
b: "0001100000001000000010000000000000000000000000000000000000000000",
p: [ 3, 4, 12, 20 ]
}, {
b: "0000110000000100000001000000000000000000000000000000000000000000",
p: [ 4, 5, 13, 21 ]
}, {
b: "0000011000000010000000100000000000000000000000000000000000000000",
p: [ 5, 6, 14, 22 ]
}, {
b: "0000001100000001000000010000000000000000000000000000000000000000",
p: [ 6, 7, 15, 23 ]
}, {
b: "0000000011000000010000000100000000000000000000000000000000000000",
p: [ 8, 9, 17, 25 ]
}, {
b: "0000000001100000001000000010000000000000000000000000000000000000",
p: [ 9, 10, 18, 26 ]
}, {
b: "0000000000110000000100000001000000000000000000000000000000000000",
p: [ 10, 11, 19, 27 ]
}, {
b: "0000000000011000000010000000100000000000000000000000000000000000",
p: [ 11, 12, 20, 28 ]
}, {
b: "0000000000001100000001000000010000000000000000000000000000000000",
p: [ 12, 13, 21, 29 ]
}, {
b: "0000000000000110000000100000001000000000000000000000000000000000",
p: [ 13, 14, 22, 30 ]
}, {
b: "0000000000000011000000010000000100000000000000000000000000000000",
p: [ 14, 15, 23, 31 ]
}, {
b: "0000000000000000110000000100000001000000000000000000000000000000",
p: [ 16, 17, 25, 33 ]
}, {
b: "0000000000000000011000000010000000100000000000000000000000000000",
p: [ 17, 18, 26, 34 ]
}, {
b: "0000000000000000001100000001000000010000000000000000000000000000",
p: [ 18, 19, 27, 35 ]
}, {
b: "0000000000000000000110000000100000001000000000000000000000000000",
p: [ 19, 20, 28, 36 ]
}, {
b: "0000000000000000000011000000010000000100000000000000000000000000",
p: [ 20, 21, 29, 37 ]
}, {
b: "0000000000000000000001100000001000000010000000000000000000000000",
p: [ 21, 22, 30, 38 ]
}, {
b: "0000000000000000000000110000000100000001000000000000000000000000",
p: [ 22, 23, 31, 39 ]
}, {
b: "0000000000000000000000001100000001000000010000000000000000000000",
p: [ 24, 25, 33, 41 ]
}, {
b: "0000000000000000000000000110000000100000001000000000000000000000",
p: [ 25, 26, 34, 42 ]
}, {
b: "0000000000000000000000000011000000010000000100000000000000000000",
p: [ 26, 27, 35, 43 ]
}, {
b: "0000000000000000000000000001100000001000000010000000000000000000",
p: [ 27, 28, 36, 44 ]
}, {
b: "0000000000000000000000000000110000000100000001000000000000000000",
p: [ 28, 29, 37, 45 ]
}, {
b: "0000000000000000000000000000011000000010000000100000000000000000",
p: [ 29, 30, 38, 46 ]
}, {
b: "0000000000000000000000000000001100000001000000010000000000000000",
p: [ 30, 31, 39, 47 ]
}, {
b: "0000000000000000000000000000000011000000010000000100000000000000",
p: [ 32, 33, 41, 49 ]
}, {
b: "0000000000000000000000000000000001100000001000000010000000000000",
p: [ 33, 34, 42, 50 ]
}, {
b: "0000000000000000000000000000000000110000000100000001000000000000",
p: [ 34, 35, 43, 51 ]
}, {
b: "0000000000000000000000000000000000011000000010000000100000000000",
p: [ 35, 36, 44, 52 ]
}, {
b: "0000000000000000000000000000000000001100000001000000010000000000",
p: [ 36, 37, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000110000000100000001000000000",
p: [ 37, 38, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000011000000010000000100000000",
p: [ 38, 39, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000110000000100000001000000",
p: [ 40, 41, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000011000000010000000100000",
p: [ 41, 42, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000001100000001000000010000",
p: [ 42, 43, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000110000000100000001000",
p: [ 43, 44, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000011000000010000000100",
p: [ 44, 45, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001100000001000000010",
p: [ 45, 46, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000110000000100000001",
p: [ 46, 47, 55, 63 ]
} ], [ {
b: "0010000011100000000000000000000000000000000000000000000000000000",
p: [ 2, 8, 9, 10 ]
}, {
b: "0001000001110000000000000000000000000000000000000000000000000000",
p: [ 3, 9, 10, 11 ]
}, {
b: "0000100000111000000000000000000000000000000000000000000000000000",
p: [ 4, 10, 11, 12 ]
}, {
b: "0000010000011100000000000000000000000000000000000000000000000000",
p: [ 5, 11, 12, 13 ]
}, {
b: "0000001000001110000000000000000000000000000000000000000000000000",
p: [ 6, 12, 13, 14 ]
}, {
b: "0000000100000111000000000000000000000000000000000000000000000000",
p: [ 7, 13, 14, 15 ]
}, {
b: "0000000000100000111000000000000000000000000000000000000000000000",
p: [ 10, 16, 17, 18 ]
}, {
b: "0000000000010000011100000000000000000000000000000000000000000000",
p: [ 11, 17, 18, 19 ]
}, {
b: "0000000000001000001110000000000000000000000000000000000000000000",
p: [ 12, 18, 19, 20 ]
}, {
b: "0000000000000100000111000000000000000000000000000000000000000000",
p: [ 13, 19, 20, 21 ]
}, {
b: "0000000000000010000011100000000000000000000000000000000000000000",
p: [ 14, 20, 21, 22 ]
}, {
b: "0000000000000001000001110000000000000000000000000000000000000000",
p: [ 15, 21, 22, 23 ]
}, {
b: "0000000000000000001000001110000000000000000000000000000000000000",
p: [ 18, 24, 25, 26 ]
}, {
b: "0000000000000000000100000111000000000000000000000000000000000000",
p: [ 19, 25, 26, 27 ]
}, {
b: "0000000000000000000010000011100000000000000000000000000000000000",
p: [ 20, 26, 27, 28 ]
}, {
b: "0000000000000000000001000001110000000000000000000000000000000000",
p: [ 21, 27, 28, 29 ]
}, {
b: "0000000000000000000000100000111000000000000000000000000000000000",
p: [ 22, 28, 29, 30 ]
}, {
b: "0000000000000000000000010000011100000000000000000000000000000000",
p: [ 23, 29, 30, 31 ]
}, {
b: "0000000000000000000000000010000011100000000000000000000000000000",
p: [ 26, 32, 33, 34 ]
}, {
b: "0000000000000000000000000001000001110000000000000000000000000000",
p: [ 27, 33, 34, 35 ]
}, {
b: "0000000000000000000000000000100000111000000000000000000000000000",
p: [ 28, 34, 35, 36 ]
}, {
b: "0000000000000000000000000000010000011100000000000000000000000000",
p: [ 29, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000001000001110000000000000000000000000",
p: [ 30, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000000100000111000000000000000000000000",
p: [ 31, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000000100000111000000000000000000000",
p: [ 34, 40, 41, 42 ]
}, {
b: "0000000000000000000000000000000000010000011100000000000000000000",
p: [ 35, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000001000001110000000000000000000",
p: [ 36, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000000100000111000000000000000000",
p: [ 37, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000000010000011100000000000000000",
p: [ 38, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000001000001110000000000000000",
p: [ 39, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000001000001110000000000000",
p: [ 42, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000000100000111000000000000",
p: [ 43, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000000010000011100000000000",
p: [ 44, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000001000001110000000000",
p: [ 45, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000100000111000000000",
p: [ 46, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000010000011100000000",
p: [ 47, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000011100000",
p: [ 50, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000001110000",
p: [ 51, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000111000",
p: [ 52, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000011100",
p: [ 53, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000001110",
p: [ 54, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000100000111",
p: [ 55, 61, 62, 63 ]
} ], [ {
b: "1110000010000000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 8 ]
}, {
b: "0111000001000000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 9 ]
}, {
b: "0011100000100000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 10 ]
}, {
b: "0001110000010000000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 11 ]
}, {
b: "0000111000001000000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 12 ]
}, {
b: "0000011100000100000000000000000000000000000000000000000000000000",
p: [ 5, 6, 7, 13 ]
}, {
b: "0000000011100000100000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 16 ]
}, {
b: "0000000001110000010000000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 17 ]
}, {
b: "0000000000111000001000000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 18 ]
}, {
b: "0000000000011100000100000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 19 ]
}, {
b: "0000000000001110000010000000000000000000000000000000000000000000",
p: [ 12, 13, 14, 20 ]
}, {
b: "0000000000000111000001000000000000000000000000000000000000000000",
p: [ 13, 14, 15, 21 ]
}, {
b: "0000000000000000111000001000000000000000000000000000000000000000",
p: [ 16, 17, 18, 24 ]
}, {
b: "0000000000000000011100000100000000000000000000000000000000000000",
p: [ 17, 18, 19, 25 ]
}, {
b: "0000000000000000001110000010000000000000000000000000000000000000",
p: [ 18, 19, 20, 26 ]
}, {
b: "0000000000000000000111000001000000000000000000000000000000000000",
p: [ 19, 20, 21, 27 ]
}, {
b: "0000000000000000000011100000100000000000000000000000000000000000",
p: [ 20, 21, 22, 28 ]
}, {
b: "0000000000000000000001110000010000000000000000000000000000000000",
p: [ 21, 22, 23, 29 ]
}, {
b: "0000000000000000000000001110000010000000000000000000000000000000",
p: [ 24, 25, 26, 32 ]
}, {
b: "0000000000000000000000000111000001000000000000000000000000000000",
p: [ 25, 26, 27, 33 ]
}, {
b: "0000000000000000000000000011100000100000000000000000000000000000",
p: [ 26, 27, 28, 34 ]
}, {
b: "0000000000000000000000000001110000010000000000000000000000000000",
p: [ 27, 28, 29, 35 ]
}, {
b: "0000000000000000000000000000111000001000000000000000000000000000",
p: [ 28, 29, 30, 36 ]
}, {
b: "0000000000000000000000000000011100000100000000000000000000000000",
p: [ 29, 30, 31, 37 ]
}, {
b: "0000000000000000000000000000000011100000100000000000000000000000",
p: [ 32, 33, 34, 40 ]
}, {
b: "0000000000000000000000000000000001110000010000000000000000000000",
p: [ 33, 34, 35, 41 ]
}, {
b: "0000000000000000000000000000000000111000001000000000000000000000",
p: [ 34, 35, 36, 42 ]
}, {
b: "0000000000000000000000000000000000011100000100000000000000000000",
p: [ 35, 36, 37, 43 ]
}, {
b: "0000000000000000000000000000000000001110000010000000000000000000",
p: [ 36, 37, 38, 44 ]
}, {
b: "0000000000000000000000000000000000000111000001000000000000000000",
p: [ 37, 38, 39, 45 ]
}, {
b: "0000000000000000000000000000000000000000111000001000000000000000",
p: [ 40, 41, 42, 48 ]
}, {
b: "0000000000000000000000000000000000000000011100000100000000000000",
p: [ 41, 42, 43, 49 ]
}, {
b: "0000000000000000000000000000000000000000001110000010000000000000",
p: [ 42, 43, 44, 50 ]
}, {
b: "0000000000000000000000000000000000000000000111000001000000000000",
p: [ 43, 44, 45, 51 ]
}, {
b: "0000000000000000000000000000000000000000000011100000100000000000",
p: [ 44, 45, 46, 52 ]
}, {
b: "0000000000000000000000000000000000000000000001110000010000000000",
p: [ 45, 46, 47, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000001110000010000000",
p: [ 48, 49, 50, 56 ]
}, {
b: "0000000000000000000000000000000000000000000000000111000001000000",
p: [ 49, 50, 51, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000011100000100000",
p: [ 50, 51, 52, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000001110000010000",
p: [ 51, 52, 53, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111000001000",
p: [ 52, 53, 54, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011100000100",
p: [ 53, 54, 55, 61 ]
} ], [ {
b: "1110000011100000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 8, 9, 10 ]
}, {
b: "0111000001110000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 9, 10, 11 ]
}, {
b: "0011100000111000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 10, 11, 12 ]
}, {
b: "0001110000011100000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 11, 12, 13 ]
}, {
b: "0000111000001110000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 12, 13, 14 ]
}, {
b: "0000011100000111000000000000000000000000000000000000000000000000",
p: [ 5, 6, 7, 13, 14, 15 ]
}, {
b: "0000000011100000111000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 16, 17, 18 ]
}, {
b: "0000000001110000011100000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 17, 18, 19 ]
}, {
b: "0000000000111000001110000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 18, 19, 20 ]
}, {
b: "0000000000011100000111000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 19, 20, 21 ]
}, {
b: "0000000000001110000011100000000000000000000000000000000000000000",
p: [ 12, 13, 14, 20, 21, 22 ]
}, {
b: "0000000000000111000001110000000000000000000000000000000000000000",
p: [ 13, 14, 15, 21, 22, 23 ]
}, {
b: "0000000000000000111000001110000000000000000000000000000000000000",
p: [ 16, 17, 18, 24, 25, 26 ]
}, {
b: "0000000000000000011100000111000000000000000000000000000000000000",
p: [ 17, 18, 19, 25, 26, 27 ]
}, {
b: "0000000000000000001110000011100000000000000000000000000000000000",
p: [ 18, 19, 20, 26, 27, 28 ]
}, {
b: "0000000000000000000111000001110000000000000000000000000000000000",
p: [ 19, 20, 21, 27, 28, 29 ]
}, {
b: "0000000000000000000011100000111000000000000000000000000000000000",
p: [ 20, 21, 22, 28, 29, 30 ]
}, {
b: "0000000000000000000001110000011100000000000000000000000000000000",
p: [ 21, 22, 23, 29, 30, 31 ]
}, {
b: "0000000000000000000000001110000011100000000000000000000000000000",
p: [ 24, 25, 26, 32, 33, 34 ]
}, {
b: "0000000000000000000000000111000001110000000000000000000000000000",
p: [ 25, 26, 27, 33, 34, 35 ]
}, {
b: "0000000000000000000000000011100000111000000000000000000000000000",
p: [ 26, 27, 28, 34, 35, 36 ]
}, {
b: "0000000000000000000000000001110000011100000000000000000000000000",
p: [ 27, 28, 29, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000111000001110000000000000000000000000",
p: [ 28, 29, 30, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000011100000111000000000000000000000000",
p: [ 29, 30, 31, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000011100000111000000000000000000000",
p: [ 32, 33, 34, 40, 41, 42 ]
}, {
b: "0000000000000000000000000000000001110000011100000000000000000000",
p: [ 33, 34, 35, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000111000001110000000000000000000",
p: [ 34, 35, 36, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000011100000111000000000000000000",
p: [ 35, 36, 37, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000001110000011100000000000000000",
p: [ 36, 37, 38, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000111000001110000000000000000",
p: [ 37, 38, 39, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000111000001110000000000000",
p: [ 40, 41, 42, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000011100000111000000000000",
p: [ 41, 42, 43, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000001110000011100000000000",
p: [ 42, 43, 44, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000111000001110000000000",
p: [ 43, 44, 45, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000011100000111000000000",
p: [ 44, 45, 46, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000001110000011100000000",
p: [ 45, 46, 47, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001110000011100000",
p: [ 48, 49, 50, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000111000001110000",
p: [ 49, 50, 51, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000011100000111000",
p: [ 50, 51, 52, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000001110000011100",
p: [ 51, 52, 53, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111000001110",
p: [ 52, 53, 54, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011100000111",
p: [ 53, 54, 55, 61, 62, 63 ]
} ], [ {
b: "1100000011000000110000000000000000000000000000000000000000000000",
p: [ 0, 1, 8, 9, 16, 17 ]
}, {
b: "0110000001100000011000000000000000000000000000000000000000000000",
p: [ 1, 2, 9, 10, 17, 18 ]
}, {
b: "0011000000110000001100000000000000000000000000000000000000000000",
p: [ 2, 3, 10, 11, 18, 19 ]
}, {
b: "0001100000011000000110000000000000000000000000000000000000000000",
p: [ 3, 4, 11, 12, 19, 20 ]
}, {
b: "0000110000001100000011000000000000000000000000000000000000000000",
p: [ 4, 5, 12, 13, 20, 21 ]
}, {
b: "0000011000000110000001100000000000000000000000000000000000000000",
p: [ 5, 6, 13, 14, 21, 22 ]
}, {
b: "0000001100000011000000110000000000000000000000000000000000000000",
p: [ 6, 7, 14, 15, 22, 23 ]
}, {
b: "0000000011000000110000001100000000000000000000000000000000000000",
p: [ 8, 9, 16, 17, 24, 25 ]
}, {
b: "0000000001100000011000000110000000000000000000000000000000000000",
p: [ 9, 10, 17, 18, 25, 26 ]
}, {
b: "0000000000110000001100000011000000000000000000000000000000000000",
p: [ 10, 11, 18, 19, 26, 27 ]
}, {
b: "0000000000011000000110000001100000000000000000000000000000000000",
p: [ 11, 12, 19, 20, 27, 28 ]
}, {
b: "0000000000001100000011000000110000000000000000000000000000000000",
p: [ 12, 13, 20, 21, 28, 29 ]
}, {
b: "0000000000000110000001100000011000000000000000000000000000000000",
p: [ 13, 14, 21, 22, 29, 30 ]
}, {
b: "0000000000000011000000110000001100000000000000000000000000000000",
p: [ 14, 15, 22, 23, 30, 31 ]
}, {
b: "0000000000000000110000001100000011000000000000000000000000000000",
p: [ 16, 17, 24, 25, 32, 33 ]
}, {
b: "0000000000000000011000000110000001100000000000000000000000000000",
p: [ 17, 18, 25, 26, 33, 34 ]
}, {
b: "0000000000000000001100000011000000110000000000000000000000000000",
p: [ 18, 19, 26, 27, 34, 35 ]
}, {
b: "0000000000000000000110000001100000011000000000000000000000000000",
p: [ 19, 20, 27, 28, 35, 36 ]
}, {
b: "0000000000000000000011000000110000001100000000000000000000000000",
p: [ 20, 21, 28, 29, 36, 37 ]
}, {
b: "0000000000000000000001100000011000000110000000000000000000000000",
p: [ 21, 22, 29, 30, 37, 38 ]
}, {
b: "0000000000000000000000110000001100000011000000000000000000000000",
p: [ 22, 23, 30, 31, 38, 39 ]
}, {
b: "0000000000000000000000001100000011000000110000000000000000000000",
p: [ 24, 25, 32, 33, 40, 41 ]
}, {
b: "0000000000000000000000000110000001100000011000000000000000000000",
p: [ 25, 26, 33, 34, 41, 42 ]
}, {
b: "0000000000000000000000000011000000110000001100000000000000000000",
p: [ 26, 27, 34, 35, 42, 43 ]
}, {
b: "0000000000000000000000000001100000011000000110000000000000000000",
p: [ 27, 28, 35, 36, 43, 44 ]
}, {
b: "0000000000000000000000000000110000001100000011000000000000000000",
p: [ 28, 29, 36, 37, 44, 45 ]
}, {
b: "0000000000000000000000000000011000000110000001100000000000000000",
p: [ 29, 30, 37, 38, 45, 46 ]
}, {
b: "0000000000000000000000000000001100000011000000110000000000000000",
p: [ 30, 31, 38, 39, 46, 47 ]
}, {
b: "0000000000000000000000000000000011000000110000001100000000000000",
p: [ 32, 33, 40, 41, 48, 49 ]
}, {
b: "0000000000000000000000000000000001100000011000000110000000000000",
p: [ 33, 34, 41, 42, 49, 50 ]
}, {
b: "0000000000000000000000000000000000110000001100000011000000000000",
p: [ 34, 35, 42, 43, 50, 51 ]
}, {
b: "0000000000000000000000000000000000011000000110000001100000000000",
p: [ 35, 36, 43, 44, 51, 52 ]
}, {
b: "0000000000000000000000000000000000001100000011000000110000000000",
p: [ 36, 37, 44, 45, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000110000001100000011000000000",
p: [ 37, 38, 45, 46, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000011000000110000001100000000",
p: [ 38, 39, 46, 47, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000110000001100000011000000",
p: [ 40, 41, 48, 49, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000011000000110000001100000",
p: [ 41, 42, 49, 50, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000001100000011000000110000",
p: [ 42, 43, 50, 51, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000110000001100000011000",
p: [ 43, 44, 51, 52, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000011000000110000001100",
p: [ 44, 45, 52, 53, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001100000011000000110",
p: [ 45, 46, 53, 54, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000110000001100000011",
p: [ 46, 47, 54, 55, 62, 63 ]
} ], [ {
b: "1000000001000000000000000000000000000000000000000000000000000000",
p: [ 0, 9 ]
}, {
b: "0100000000100000000000000000000000000000000000000000000000000000",
p: [ 1, 10 ]
}, {
b: "0010000000010000000000000000000000000000000000000000000000000000",
p: [ 2, 11 ]
}, {
b: "0001000000001000000000000000000000000000000000000000000000000000",
p: [ 3, 12 ]
}, {
b: "0000100000000100000000000000000000000000000000000000000000000000",
p: [ 4, 13 ]
}, {
b: "0000010000000010000000000000000000000000000000000000000000000000",
p: [ 5, 14 ]
}, {
b: "0000001000000001000000000000000000000000000000000000000000000000",
p: [ 6, 15 ]
}, {
b: "0000000010000000010000000000000000000000000000000000000000000000",
p: [ 8, 17 ]
}, {
b: "0000000001000000001000000000000000000000000000000000000000000000",
p: [ 9, 18 ]
}, {
b: "0000000000100000000100000000000000000000000000000000000000000000",
p: [ 10, 19 ]
}, {
b: "0000000000010000000010000000000000000000000000000000000000000000",
p: [ 11, 20 ]
}, {
b: "0000000000001000000001000000000000000000000000000000000000000000",
p: [ 12, 21 ]
}, {
b: "0000000000000100000000100000000000000000000000000000000000000000",
p: [ 13, 22 ]
}, {
b: "0000000000000010000000010000000000000000000000000000000000000000",
p: [ 14, 23 ]
}, {
b: "0000000000000000100000000100000000000000000000000000000000000000",
p: [ 16, 25 ]
}, {
b: "0000000000000000010000000010000000000000000000000000000000000000",
p: [ 17, 26 ]
}, {
b: "0000000000000000001000000001000000000000000000000000000000000000",
p: [ 18, 27 ]
}, {
b: "0000000000000000000100000000100000000000000000000000000000000000",
p: [ 19, 28 ]
}, {
b: "0000000000000000000010000000010000000000000000000000000000000000",
p: [ 20, 29 ]
}, {
b: "0000000000000000000001000000001000000000000000000000000000000000",
p: [ 21, 30 ]
}, {
b: "0000000000000000000000100000000100000000000000000000000000000000",
p: [ 22, 31 ]
}, {
b: "0000000000000000000000001000000001000000000000000000000000000000",
p: [ 24, 33 ]
}, {
b: "0000000000000000000000000100000000100000000000000000000000000000",
p: [ 25, 34 ]
}, {
b: "0000000000000000000000000010000000010000000000000000000000000000",
p: [ 26, 35 ]
}, {
b: "0000000000000000000000000001000000001000000000000000000000000000",
p: [ 27, 36 ]
}, {
b: "0000000000000000000000000000100000000100000000000000000000000000",
p: [ 28, 37 ]
}, {
b: "0000000000000000000000000000010000000010000000000000000000000000",
p: [ 29, 38 ]
}, {
b: "0000000000000000000000000000001000000001000000000000000000000000",
p: [ 30, 39 ]
}, {
b: "0000000000000000000000000000000010000000010000000000000000000000",
p: [ 32, 41 ]
}, {
b: "0000000000000000000000000000000001000000001000000000000000000000",
p: [ 33, 42 ]
}, {
b: "0000000000000000000000000000000000100000000100000000000000000000",
p: [ 34, 43 ]
}, {
b: "0000000000000000000000000000000000010000000010000000000000000000",
p: [ 35, 44 ]
}, {
b: "0000000000000000000000000000000000001000000001000000000000000000",
p: [ 36, 45 ]
}, {
b: "0000000000000000000000000000000000000100000000100000000000000000",
p: [ 37, 46 ]
}, {
b: "0000000000000000000000000000000000000010000000010000000000000000",
p: [ 38, 47 ]
}, {
b: "0000000000000000000000000000000000000000100000000100000000000000",
p: [ 40, 49 ]
}, {
b: "0000000000000000000000000000000000000000010000000010000000000000",
p: [ 41, 50 ]
}, {
b: "0000000000000000000000000000000000000000001000000001000000000000",
p: [ 42, 51 ]
}, {
b: "0000000000000000000000000000000000000000000100000000100000000000",
p: [ 43, 52 ]
}, {
b: "0000000000000000000000000000000000000000000010000000010000000000",
p: [ 44, 53 ]
}, {
b: "0000000000000000000000000000000000000000000001000000001000000000",
p: [ 45, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000100000000100000000",
p: [ 46, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001000000001000000",
p: [ 48, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000000100000",
p: [ 49, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000000010000",
p: [ 50, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000001000",
p: [ 51, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000000100",
p: [ 52, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000000010",
p: [ 53, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000001",
p: [ 54, 63 ]
} ], [ {
b: "0100000010000000000000000000000000000000000000000000000000000000",
p: [ 1, 8 ]
}, {
b: "0010000001000000000000000000000000000000000000000000000000000000",
p: [ 2, 9 ]
}, {
b: "0001000000100000000000000000000000000000000000000000000000000000",
p: [ 3, 10 ]
}, {
b: "0000100000010000000000000000000000000000000000000000000000000000",
p: [ 4, 11 ]
}, {
b: "0000010000001000000000000000000000000000000000000000000000000000",
p: [ 5, 12 ]
}, {
b: "0000001000000100000000000000000000000000000000000000000000000000",
p: [ 6, 13 ]
}, {
b: "0000000100000010000000000000000000000000000000000000000000000000",
p: [ 7, 14 ]
}, {
b: "0000000001000000100000000000000000000000000000000000000000000000",
p: [ 9, 16 ]
}, {
b: "0000000000100000010000000000000000000000000000000000000000000000",
p: [ 10, 17 ]
}, {
b: "0000000000010000001000000000000000000000000000000000000000000000",
p: [ 11, 18 ]
}, {
b: "0000000000001000000100000000000000000000000000000000000000000000",
p: [ 12, 19 ]
}, {
b: "0000000000000100000010000000000000000000000000000000000000000000",
p: [ 13, 20 ]
}, {
b: "0000000000000010000001000000000000000000000000000000000000000000",
p: [ 14, 21 ]
}, {
b: "0000000000000001000000100000000000000000000000000000000000000000",
p: [ 15, 22 ]
}, {
b: "0000000000000000010000001000000000000000000000000000000000000000",
p: [ 17, 24 ]
}, {
b: "0000000000000000001000000100000000000000000000000000000000000000",
p: [ 18, 25 ]
}, {
b: "0000000000000000000100000010000000000000000000000000000000000000",
p: [ 19, 26 ]
}, {
b: "0000000000000000000010000001000000000000000000000000000000000000",
p: [ 20, 27 ]
}, {
b: "0000000000000000000001000000100000000000000000000000000000000000",
p: [ 21, 28 ]
}, {
b: "0000000000000000000000100000010000000000000000000000000000000000",
p: [ 22, 29 ]
}, {
b: "0000000000000000000000010000001000000000000000000000000000000000",
p: [ 23, 30 ]
}, {
b: "0000000000000000000000000100000010000000000000000000000000000000",
p: [ 25, 32 ]
}, {
b: "0000000000000000000000000010000001000000000000000000000000000000",
p: [ 26, 33 ]
}, {
b: "0000000000000000000000000001000000100000000000000000000000000000",
p: [ 27, 34 ]
}, {
b: "0000000000000000000000000000100000010000000000000000000000000000",
p: [ 28, 35 ]
}, {
b: "0000000000000000000000000000010000001000000000000000000000000000",
p: [ 29, 36 ]
}, {
b: "0000000000000000000000000000001000000100000000000000000000000000",
p: [ 30, 37 ]
}, {
b: "0000000000000000000000000000000100000010000000000000000000000000",
p: [ 31, 38 ]
}, {
b: "0000000000000000000000000000000001000000100000000000000000000000",
p: [ 33, 40 ]
}, {
b: "0000000000000000000000000000000000100000010000000000000000000000",
p: [ 34, 41 ]
}, {
b: "0000000000000000000000000000000000010000001000000000000000000000",
p: [ 35, 42 ]
}, {
b: "0000000000000000000000000000000000001000000100000000000000000000",
p: [ 36, 43 ]
}, {
b: "0000000000000000000000000000000000000100000010000000000000000000",
p: [ 37, 44 ]
}, {
b: "0000000000000000000000000000000000000010000001000000000000000000",
p: [ 38, 45 ]
}, {
b: "0000000000000000000000000000000000000001000000100000000000000000",
p: [ 39, 46 ]
}, {
b: "0000000000000000000000000000000000000000010000001000000000000000",
p: [ 41, 48 ]
}, {
b: "0000000000000000000000000000000000000000001000000100000000000000",
p: [ 42, 49 ]
}, {
b: "0000000000000000000000000000000000000000000100000010000000000000",
p: [ 43, 50 ]
}, {
b: "0000000000000000000000000000000000000000000010000001000000000000",
p: [ 44, 51 ]
}, {
b: "0000000000000000000000000000000000000000000001000000100000000000",
p: [ 45, 52 ]
}, {
b: "0000000000000000000000000000000000000000000000100000010000000000",
p: [ 46, 53 ]
}, {
b: "0000000000000000000000000000000000000000000000010000001000000000",
p: [ 47, 54 ]
}, {
b: "0000000000000000000000000000000000000000000000000100000010000000",
p: [ 49, 56 ]
}, {
b: "0000000000000000000000000000000000000000000000000010000001000000",
p: [ 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000000000000001000000100000",
p: [ 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000000100000010000",
p: [ 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010000001000",
p: [ 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000000001000000100",
p: [ 54, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000000100000010",
p: [ 55, 62 ]
} ], [ {
b: "1000000001000000001000000000000000000000000000000000000000000000",
p: [ 0, 9, 18 ]
}, {
b: "0100000000100000000100000000000000000000000000000000000000000000",
p: [ 1, 10, 19 ]
}, {
b: "0010000000010000000010000000000000000000000000000000000000000000",
p: [ 2, 11, 20 ]
}, {
b: "0001000000001000000001000000000000000000000000000000000000000000",
p: [ 3, 12, 21 ]
}, {
b: "0000100000000100000000100000000000000000000000000000000000000000",
p: [ 4, 13, 22 ]
}, {
b: "0000010000000010000000010000000000000000000000000000000000000000",
p: [ 5, 14, 23 ]
}, {
b: "0000000010000000010000000010000000000000000000000000000000000000",
p: [ 8, 17, 26 ]
}, {
b: "0000000001000000001000000001000000000000000000000000000000000000",
p: [ 9, 18, 27 ]
}, {
b: "0000000000100000000100000000100000000000000000000000000000000000",
p: [ 10, 19, 28 ]
}, {
b: "0000000000010000000010000000010000000000000000000000000000000000",
p: [ 11, 20, 29 ]
}, {
b: "0000000000001000000001000000001000000000000000000000000000000000",
p: [ 12, 21, 30 ]
}, {
b: "0000000000000100000000100000000100000000000000000000000000000000",
p: [ 13, 22, 31 ]
}, {
b: "0000000000000000100000000100000000100000000000000000000000000000",
p: [ 16, 25, 34 ]
}, {
b: "0000000000000000010000000010000000010000000000000000000000000000",
p: [ 17, 26, 35 ]
}, {
b: "0000000000000000001000000001000000001000000000000000000000000000",
p: [ 18, 27, 36 ]
}, {
b: "0000000000000000000100000000100000000100000000000000000000000000",
p: [ 19, 28, 37 ]
}, {
b: "0000000000000000000010000000010000000010000000000000000000000000",
p: [ 20, 29, 38 ]
}, {
b: "0000000000000000000001000000001000000001000000000000000000000000",
p: [ 21, 30, 39 ]
}, {
b: "0000000000000000000000001000000001000000001000000000000000000000",
p: [ 24, 33, 42 ]
}, {
b: "0000000000000000000000000100000000100000000100000000000000000000",
p: [ 25, 34, 43 ]
}, {
b: "0000000000000000000000000010000000010000000010000000000000000000",
p: [ 26, 35, 44 ]
}, {
b: "0000000000000000000000000001000000001000000001000000000000000000",
p: [ 27, 36, 45 ]
}, {
b: "0000000000000000000000000000100000000100000000100000000000000000",
p: [ 28, 37, 46 ]
}, {
b: "0000000000000000000000000000010000000010000000010000000000000000",
p: [ 29, 38, 47 ]
}, {
b: "0000000000000000000000000000000010000000010000000010000000000000",
p: [ 32, 41, 50 ]
}, {
b: "0000000000000000000000000000000001000000001000000001000000000000",
p: [ 33, 42, 51 ]
}, {
b: "0000000000000000000000000000000000100000000100000000100000000000",
p: [ 34, 43, 52 ]
}, {
b: "0000000000000000000000000000000000010000000010000000010000000000",
p: [ 35, 44, 53 ]
}, {
b: "0000000000000000000000000000000000001000000001000000001000000000",
p: [ 36, 45, 54 ]
}, {
b: "0000000000000000000000000000000000000100000000100000000100000000",
p: [ 37, 46, 55 ]
}, {
b: "0000000000000000000000000000000000000000100000000100000000100000",
p: [ 40, 49, 58 ]
}, {
b: "0000000000000000000000000000000000000000010000000010000000010000",
p: [ 41, 50, 59 ]
}, {
b: "0000000000000000000000000000000000000000001000000001000000001000",
p: [ 42, 51, 60 ]
}, {
b: "0000000000000000000000000000000000000000000100000000100000000100",
p: [ 43, 52, 61 ]
}, {
b: "0000000000000000000000000000000000000000000010000000010000000010",
p: [ 44, 53, 62 ]
}, {
b: "0000000000000000000000000000000000000000000001000000001000000001",
p: [ 45, 54, 63 ]
} ], [ {
b: "0010000001000000100000000000000000000000000000000000000000000000",
p: [ 2, 9, 16 ]
}, {
b: "0001000000100000010000000000000000000000000000000000000000000000",
p: [ 3, 10, 17 ]
}, {
b: "0000100000010000001000000000000000000000000000000000000000000000",
p: [ 4, 11, 18 ]
}, {
b: "0000010000001000000100000000000000000000000000000000000000000000",
p: [ 5, 12, 19 ]
}, {
b: "0000001000000100000010000000000000000000000000000000000000000000",
p: [ 6, 13, 20 ]
}, {
b: "0000000100000010000001000000000000000000000000000000000000000000",
p: [ 7, 14, 21 ]
}, {
b: "0000000000100000010000001000000000000000000000000000000000000000",
p: [ 10, 17, 24 ]
}, {
b: "0000000000010000001000000100000000000000000000000000000000000000",
p: [ 11, 18, 25 ]
}, {
b: "0000000000001000000100000010000000000000000000000000000000000000",
p: [ 12, 19, 26 ]
}, {
b: "0000000000000100000010000001000000000000000000000000000000000000",
p: [ 13, 20, 27 ]
}, {
b: "0000000000000010000001000000100000000000000000000000000000000000",
p: [ 14, 21, 28 ]
}, {
b: "0000000000000001000000100000010000000000000000000000000000000000",
p: [ 15, 22, 29 ]
}, {
b: "0000000000000000001000000100000010000000000000000000000000000000",
p: [ 18, 25, 32 ]
}, {
b: "0000000000000000000100000010000001000000000000000000000000000000",
p: [ 19, 26, 33 ]
}, {
b: "0000000000000000000010000001000000100000000000000000000000000000",
p: [ 20, 27, 34 ]
}, {
b: "0000000000000000000001000000100000010000000000000000000000000000",
p: [ 21, 28, 35 ]
}, {
b: "0000000000000000000000100000010000001000000000000000000000000000",
p: [ 22, 29, 36 ]
}, {
b: "0000000000000000000000010000001000000100000000000000000000000000",
p: [ 23, 30, 37 ]
}, {
b: "0000000000000000000000000010000001000000100000000000000000000000",
p: [ 26, 33, 40 ]
}, {
b: "0000000000000000000000000001000000100000010000000000000000000000",
p: [ 27, 34, 41 ]
}, {
b: "0000000000000000000000000000100000010000001000000000000000000000",
p: [ 28, 35, 42 ]
}, {
b: "0000000000000000000000000000010000001000000100000000000000000000",
p: [ 29, 36, 43 ]
}, {
b: "0000000000000000000000000000001000000100000010000000000000000000",
p: [ 30, 37, 44 ]
}, {
b: "0000000000000000000000000000000100000010000001000000000000000000",
p: [ 31, 38, 45 ]
}, {
b: "0000000000000000000000000000000000100000010000001000000000000000",
p: [ 34, 41, 48 ]
}, {
b: "0000000000000000000000000000000000010000001000000100000000000000",
p: [ 35, 42, 49 ]
}, {
b: "0000000000000000000000000000000000001000000100000010000000000000",
p: [ 36, 43, 50 ]
}, {
b: "0000000000000000000000000000000000000100000010000001000000000000",
p: [ 37, 44, 51 ]
}, {
b: "0000000000000000000000000000000000000010000001000000100000000000",
p: [ 38, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000001000000100000010000000000",
p: [ 39, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000000001000000100000010000000",
p: [ 42, 49, 56 ]
}, {
b: "0000000000000000000000000000000000000000000100000010000001000000",
p: [ 43, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000000010000001000000100000",
p: [ 44, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000001000000100000010000",
p: [ 45, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000100000010000001000",
p: [ 46, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000010000001000000100",
p: [ 47, 54, 61 ]
} ], [ {
b: "0010000001000000100000000000000000000000000000000000000000000000",
p: [ 2, 9, 16 ]
}, {
b: "0001000000100000010000000000000000000000000000000000000000000000",
p: [ 3, 10, 17 ]
}, {
b: "0000100000010000001000000000000000000000000000000000000000000000",
p: [ 4, 11, 18 ]
}, {
b: "0000010000001000000100000000000000000000000000000000000000000000",
p: [ 5, 12, 19 ]
}, {
b: "0000001000000100000010000000000000000000000000000000000000000000",
p: [ 6, 13, 20 ]
}, {
b: "0000000100000010000001000000000000000000000000000000000000000000",
p: [ 7, 14, 21 ]
}, {
b: "0000000000100000010000001000000000000000000000000000000000000000",
p: [ 10, 17, 24 ]
}, {
b: "0000000000010000001000000100000000000000000000000000000000000000",
p: [ 11, 18, 25 ]
}, {
b: "0000000000001000000100000010000000000000000000000000000000000000",
p: [ 12, 19, 26 ]
}, {
b: "0000000000000100000010000001000000000000000000000000000000000000",
p: [ 13, 20, 27 ]
}, {
b: "0000000000000010000001000000100000000000000000000000000000000000",
p: [ 14, 21, 28 ]
}, {
b: "0000000000000001000000100000010000000000000000000000000000000000",
p: [ 15, 22, 29 ]
}, {
b: "0000000000000000001000000100000010000000000000000000000000000000",
p: [ 18, 25, 32 ]
}, {
b: "0000000000000000000100000010000001000000000000000000000000000000",
p: [ 19, 26, 33 ]
}, {
b: "0000000000000000000010000001000000100000000000000000000000000000",
p: [ 20, 27, 34 ]
}, {
b: "0000000000000000000001000000100000010000000000000000000000000000",
p: [ 21, 28, 35 ]
}, {
b: "0000000000000000000000100000010000001000000000000000000000000000",
p: [ 22, 29, 36 ]
}, {
b: "0000000000000000000000010000001000000100000000000000000000000000",
p: [ 23, 30, 37 ]
}, {
b: "0000000000000000000000000010000001000000100000000000000000000000",
p: [ 26, 33, 40 ]
}, {
b: "0000000000000000000000000001000000100000010000000000000000000000",
p: [ 27, 34, 41 ]
}, {
b: "0000000000000000000000000000100000010000001000000000000000000000",
p: [ 28, 35, 42 ]
}, {
b: "0000000000000000000000000000010000001000000100000000000000000000",
p: [ 29, 36, 43 ]
}, {
b: "0000000000000000000000000000001000000100000010000000000000000000",
p: [ 30, 37, 44 ]
}, {
b: "0000000000000000000000000000000100000010000001000000000000000000",
p: [ 31, 38, 45 ]
}, {
b: "0000000000000000000000000000000000100000010000001000000000000000",
p: [ 34, 41, 48 ]
}, {
b: "0000000000000000000000000000000000010000001000000100000000000000",
p: [ 35, 42, 49 ]
}, {
b: "0000000000000000000000000000000000001000000100000010000000000000",
p: [ 36, 43, 50 ]
}, {
b: "0000000000000000000000000000000000000100000010000001000000000000",
p: [ 37, 44, 51 ]
}, {
b: "0000000000000000000000000000000000000010000001000000100000000000",
p: [ 38, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000001000000100000010000000000",
p: [ 39, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000000001000000100000010000000",
p: [ 42, 49, 56 ]
}, {
b: "0000000000000000000000000000000000000000000100000010000001000000",
p: [ 43, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000000010000001000000100000",
p: [ 44, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000001000000100000010000",
p: [ 45, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000100000010000001000",
p: [ 46, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000010000001000000100",
p: [ 47, 54, 61 ]
} ], [ {
b: "1000000010000000110000000000000000000000000000000000000000000000",
p: [ 0, 8, 16, 17 ]
}, {
b: "0100000001000000011000000000000000000000000000000000000000000000",
p: [ 1, 9, 17, 18 ]
}, {
b: "0010000000100000001100000000000000000000000000000000000000000000",
p: [ 2, 10, 18, 19 ]
}, {
b: "0001000000010000000110000000000000000000000000000000000000000000",
p: [ 3, 11, 19, 20 ]
}, {
b: "0000100000001000000011000000000000000000000000000000000000000000",
p: [ 4, 12, 20, 21 ]
}, {
b: "0000010000000100000001100000000000000000000000000000000000000000",
p: [ 5, 13, 21, 22 ]
}, {
b: "0000001000000010000000110000000000000000000000000000000000000000",
p: [ 6, 14, 22, 23 ]
}, {
b: "0000000010000000100000001100000000000000000000000000000000000000",
p: [ 8, 16, 24, 25 ]
}, {
b: "0000000001000000010000000110000000000000000000000000000000000000",
p: [ 9, 17, 25, 26 ]
}, {
b: "0000000000100000001000000011000000000000000000000000000000000000",
p: [ 10, 18, 26, 27 ]
}, {
b: "0000000000010000000100000001100000000000000000000000000000000000",
p: [ 11, 19, 27, 28 ]
}, {
b: "0000000000001000000010000000110000000000000000000000000000000000",
p: [ 12, 20, 28, 29 ]
}, {
b: "0000000000000100000001000000011000000000000000000000000000000000",
p: [ 13, 21, 29, 30 ]
}, {
b: "0000000000000010000000100000001100000000000000000000000000000000",
p: [ 14, 22, 30, 31 ]
}, {
b: "0000000000000000100000001000000011000000000000000000000000000000",
p: [ 16, 24, 32, 33 ]
}, {
b: "0000000000000000010000000100000001100000000000000000000000000000",
p: [ 17, 25, 33, 34 ]
}, {
b: "0000000000000000001000000010000000110000000000000000000000000000",
p: [ 18, 26, 34, 35 ]
}, {
b: "0000000000000000000100000001000000011000000000000000000000000000",
p: [ 19, 27, 35, 36 ]
}, {
b: "0000000000000000000010000000100000001100000000000000000000000000",
p: [ 20, 28, 36, 37 ]
}, {
b: "0000000000000000000001000000010000000110000000000000000000000000",
p: [ 21, 29, 37, 38 ]
}, {
b: "0000000000000000000000100000001000000011000000000000000000000000",
p: [ 22, 30, 38, 39 ]
}, {
b: "0000000000000000000000001000000010000000110000000000000000000000",
p: [ 24, 32, 40, 41 ]
}, {
b: "0000000000000000000000000100000001000000011000000000000000000000",
p: [ 25, 33, 41, 42 ]
}, {
b: "0000000000000000000000000010000000100000001100000000000000000000",
p: [ 26, 34, 42, 43 ]
}, {
b: "0000000000000000000000000001000000010000000110000000000000000000",
p: [ 27, 35, 43, 44 ]
}, {
b: "0000000000000000000000000000100000001000000011000000000000000000",
p: [ 28, 36, 44, 45 ]
}, {
b: "0000000000000000000000000000010000000100000001100000000000000000",
p: [ 29, 37, 45, 46 ]
}, {
b: "0000000000000000000000000000001000000010000000110000000000000000",
p: [ 30, 38, 46, 47 ]
}, {
b: "0000000000000000000000000000000010000000100000001100000000000000",
p: [ 32, 40, 48, 49 ]
}, {
b: "0000000000000000000000000000000001000000010000000110000000000000",
p: [ 33, 41, 49, 50 ]
}, {
b: "0000000000000000000000000000000000100000001000000011000000000000",
p: [ 34, 42, 50, 51 ]
}, {
b: "0000000000000000000000000000000000010000000100000001100000000000",
p: [ 35, 43, 51, 52 ]
}, {
b: "0000000000000000000000000000000000001000000010000000110000000000",
p: [ 36, 44, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000100000001000000011000000000",
p: [ 37, 45, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000010000000100000001100000000",
p: [ 38, 46, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000100000001000000011000000",
p: [ 40, 48, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000010000000100000001100000",
p: [ 41, 49, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000000110000",
p: [ 42, 50, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000000011000",
p: [ 43, 51, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000001100",
p: [ 44, 52, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000000110",
p: [ 45, 53, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001000000011",
p: [ 46, 54, 62, 63 ]
} ], [ {
b: "1000000011100000100000000000000000000000000000000000000000000000",
p: [ 0, 8, 9, 10, 16 ]
}, {
b: "0100000001110000010000000000000000000000000000000000000000000000",
p: [ 1, 9, 10, 11, 17 ]
}, {
b: "0010000000111000001000000000000000000000000000000000000000000000",
p: [ 2, 10, 11, 12, 18 ]
}, {
b: "0001000000011100000100000000000000000000000000000000000000000000",
p: [ 3, 11, 12, 13, 19 ]
}, {
b: "0000100000001110000010000000000000000000000000000000000000000000",
p: [ 4, 12, 13, 14, 20 ]
}, {
b: "0000010000000111000001000000000000000000000000000000000000000000",
p: [ 5, 13, 14, 15, 21 ]
}, {
b: "0000000010000000111000001000000000000000000000000000000000000000",
p: [ 8, 16, 17, 18, 24 ]
}, {
b: "0000000001000000011100000100000000000000000000000000000000000000",
p: [ 9, 17, 18, 19, 25 ]
}, {
b: "0000000000100000001110000010000000000000000000000000000000000000",
p: [ 10, 18, 19, 20, 26 ]
}, {
b: "0000000000010000000111000001000000000000000000000000000000000000",
p: [ 11, 19, 20, 21, 27 ]
}, {
b: "0000000000001000000011100000100000000000000000000000000000000000",
p: [ 12, 20, 21, 22, 28 ]
}, {
b: "0000000000000100000001110000010000000000000000000000000000000000",
p: [ 13, 21, 22, 23, 29 ]
}, {
b: "0000000000000000100000001110000010000000000000000000000000000000",
p: [ 16, 24, 25, 26, 32 ]
}, {
b: "0000000000000000010000000111000001000000000000000000000000000000",
p: [ 17, 25, 26, 27, 33 ]
}, {
b: "0000000000000000001000000011100000100000000000000000000000000000",
p: [ 18, 26, 27, 28, 34 ]
}, {
b: "0000000000000000000100000001110000010000000000000000000000000000",
p: [ 19, 27, 28, 29, 35 ]
}, {
b: "0000000000000000000010000000111000001000000000000000000000000000",
p: [ 20, 28, 29, 30, 36 ]
}, {
b: "0000000000000000000001000000011100000100000000000000000000000000",
p: [ 21, 29, 30, 31, 37 ]
}, {
b: "0000000000000000000000001000000011100000100000000000000000000000",
p: [ 24, 32, 33, 34, 40 ]
}, {
b: "0000000000000000000000000100000001110000010000000000000000000000",
p: [ 25, 33, 34, 35, 41 ]
}, {
b: "0000000000000000000000000010000000111000001000000000000000000000",
p: [ 26, 34, 35, 36, 42 ]
}, {
b: "0000000000000000000000000001000000011100000100000000000000000000",
p: [ 27, 35, 36, 37, 43 ]
}, {
b: "0000000000000000000000000000100000001110000010000000000000000000",
p: [ 28, 36, 37, 38, 44 ]
}, {
b: "0000000000000000000000000000010000000111000001000000000000000000",
p: [ 29, 37, 38, 39, 45 ]
}, {
b: "0000000000000000000000000000000010000000111000001000000000000000",
p: [ 32, 40, 41, 42, 48 ]
}, {
b: "0000000000000000000000000000000001000000011100000100000000000000",
p: [ 33, 41, 42, 43, 49 ]
}, {
b: "0000000000000000000000000000000000100000001110000010000000000000",
p: [ 34, 42, 43, 44, 50 ]
}, {
b: "0000000000000000000000000000000000010000000111000001000000000000",
p: [ 35, 43, 44, 45, 51 ]
}, {
b: "0000000000000000000000000000000000001000000011100000100000000000",
p: [ 36, 44, 45, 46, 52 ]
}, {
b: "0000000000000000000000000000000000000100000001110000010000000000",
p: [ 37, 45, 46, 47, 53 ]
}, {
b: "0000000000000000000000000000000000000000100000001110000010000000",
p: [ 40, 48, 49, 50, 56 ]
}, {
b: "0000000000000000000000000000000000000000010000000111000001000000",
p: [ 41, 49, 50, 51, 57 ]
}, {
b: "0000000000000000000000000000000000000000001000000011100000100000",
p: [ 42, 50, 51, 52, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000001110000010000",
p: [ 43, 51, 52, 53, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000000111000001000",
p: [ 44, 52, 53, 54, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000011100000100",
p: [ 45, 53, 54, 55, 61 ]
} ], [ {
b: "1010000011100000000000000000000000000000000000000000000000000000",
p: [ 0, 2, 8, 9, 10 ]
}, {
b: "0101000001110000000000000000000000000000000000000000000000000000",
p: [ 1, 3, 9, 10, 11 ]
}, {
b: "0010100000111000000000000000000000000000000000000000000000000000",
p: [ 2, 4, 10, 11, 12 ]
}, {
b: "0001010000011100000000000000000000000000000000000000000000000000",
p: [ 3, 5, 11, 12, 13 ]
}, {
b: "0000101000001110000000000000000000000000000000000000000000000000",
p: [ 4, 6, 12, 13, 14 ]
}, {
b: "0000010100000111000000000000000000000000000000000000000000000000",
p: [ 5, 7, 13, 14, 15 ]
}, {
b: "0000000010100000111000000000000000000000000000000000000000000000",
p: [ 8, 10, 16, 17, 18 ]
}, {
b: "0000000001010000011100000000000000000000000000000000000000000000",
p: [ 9, 11, 17, 18, 19 ]
}, {
b: "0000000000101000001110000000000000000000000000000000000000000000",
p: [ 10, 12, 18, 19, 20 ]
}, {
b: "0000000000010100000111000000000000000000000000000000000000000000",
p: [ 11, 13, 19, 20, 21 ]
}, {
b: "0000000000001010000011100000000000000000000000000000000000000000",
p: [ 12, 14, 20, 21, 22 ]
}, {
b: "0000000000000101000001110000000000000000000000000000000000000000",
p: [ 13, 15, 21, 22, 23 ]
}, {
b: "0000000000000000101000001110000000000000000000000000000000000000",
p: [ 16, 18, 24, 25, 26 ]
}, {
b: "0000000000000000010100000111000000000000000000000000000000000000",
p: [ 17, 19, 25, 26, 27 ]
}, {
b: "0000000000000000001010000011100000000000000000000000000000000000",
p: [ 18, 20, 26, 27, 28 ]
}, {
b: "0000000000000000000101000001110000000000000000000000000000000000",
p: [ 19, 21, 27, 28, 29 ]
}, {
b: "0000000000000000000010100000111000000000000000000000000000000000",
p: [ 20, 22, 28, 29, 30 ]
}, {
b: "0000000000000000000001010000011100000000000000000000000000000000",
p: [ 21, 23, 29, 30, 31 ]
}, {
b: "0000000000000000000000001010000011100000000000000000000000000000",
p: [ 24, 26, 32, 33, 34 ]
}, {
b: "0000000000000000000000000101000001110000000000000000000000000000",
p: [ 25, 27, 33, 34, 35 ]
}, {
b: "0000000000000000000000000010100000111000000000000000000000000000",
p: [ 26, 28, 34, 35, 36 ]
}, {
b: "0000000000000000000000000001010000011100000000000000000000000000",
p: [ 27, 29, 35, 36, 37 ]
}, {
b: "0000000000000000000000000000101000001110000000000000000000000000",
p: [ 28, 30, 36, 37, 38 ]
}, {
b: "0000000000000000000000000000010100000111000000000000000000000000",
p: [ 29, 31, 37, 38, 39 ]
}, {
b: "0000000000000000000000000000000010100000111000000000000000000000",
p: [ 32, 34, 40, 41, 42 ]
}, {
b: "0000000000000000000000000000000001010000011100000000000000000000",
p: [ 33, 35, 41, 42, 43 ]
}, {
b: "0000000000000000000000000000000000101000001110000000000000000000",
p: [ 34, 36, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000000000010100000111000000000000000000",
p: [ 35, 37, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000000000001010000011100000000000000000",
p: [ 36, 38, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000000000000101000001110000000000000000",
p: [ 37, 39, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000000000000101000001110000000000000",
p: [ 40, 42, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000000000010100000111000000000000",
p: [ 41, 43, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000000000001010000011100000000000",
p: [ 42, 44, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000000000000101000001110000000000",
p: [ 43, 45, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000000000010100000111000000000",
p: [ 44, 46, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000000000001010000011100000000",
p: [ 45, 47, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001010000011100000",
p: [ 48, 50, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000101000001110000",
p: [ 49, 51, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000010100000111000",
p: [ 50, 52, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000001010000011100",
p: [ 51, 53, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000101000001110",
p: [ 52, 54, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000010100000111",
p: [ 53, 55, 61, 62, 63 ]
} ], [ {
b: "1100000001000000110000000000000000000000000000000000000000000000",
p: [ 0, 1, 9, 16, 17 ]
}, {
b: "0110000000100000011000000000000000000000000000000000000000000000",
p: [ 1, 2, 10, 17, 18 ]
}, {
b: "0011000000010000001100000000000000000000000000000000000000000000",
p: [ 2, 3, 11, 18, 19 ]
}, {
b: "0001100000001000000110000000000000000000000000000000000000000000",
p: [ 3, 4, 12, 19, 20 ]
}, {
b: "0000110000000100000011000000000000000000000000000000000000000000",
p: [ 4, 5, 13, 20, 21 ]
}, {
b: "0000011000000010000001100000000000000000000000000000000000000000",
p: [ 5, 6, 14, 21, 22 ]
}, {
b: "0000001100000001000000110000000000000000000000000000000000000000",
p: [ 6, 7, 15, 22, 23 ]
}, {
b: "0000000011000000010000001100000000000000000000000000000000000000",
p: [ 8, 9, 17, 24, 25 ]
}, {
b: "0000000001100000001000000110000000000000000000000000000000000000",
p: [ 9, 10, 18, 25, 26 ]
}, {
b: "0000000000110000000100000011000000000000000000000000000000000000",
p: [ 10, 11, 19, 26, 27 ]
}, {
b: "0000000000011000000010000001100000000000000000000000000000000000",
p: [ 11, 12, 20, 27, 28 ]
}, {
b: "0000000000001100000001000000110000000000000000000000000000000000",
p: [ 12, 13, 21, 28, 29 ]
}, {
b: "0000000000000110000000100000011000000000000000000000000000000000",
p: [ 13, 14, 22, 29, 30 ]
}, {
b: "0000000000000011000000010000001100000000000000000000000000000000",
p: [ 14, 15, 23, 30, 31 ]
}, {
b: "0000000000000000110000000100000011000000000000000000000000000000",
p: [ 16, 17, 25, 32, 33 ]
}, {
b: "0000000000000000011000000010000001100000000000000000000000000000",
p: [ 17, 18, 26, 33, 34 ]
}, {
b: "0000000000000000001100000001000000110000000000000000000000000000",
p: [ 18, 19, 27, 34, 35 ]
}, {
b: "0000000000000000000110000000100000011000000000000000000000000000",
p: [ 19, 20, 28, 35, 36 ]
}, {
b: "0000000000000000000011000000010000001100000000000000000000000000",
p: [ 20, 21, 29, 36, 37 ]
}, {
b: "0000000000000000000001100000001000000110000000000000000000000000",
p: [ 21, 22, 30, 37, 38 ]
}, {
b: "0000000000000000000000110000000100000011000000000000000000000000",
p: [ 22, 23, 31, 38, 39 ]
}, {
b: "0000000000000000000000001100000001000000110000000000000000000000",
p: [ 24, 25, 33, 40, 41 ]
}, {
b: "0000000000000000000000000110000000100000011000000000000000000000",
p: [ 25, 26, 34, 41, 42 ]
}, {
b: "0000000000000000000000000011000000010000001100000000000000000000",
p: [ 26, 27, 35, 42, 43 ]
}, {
b: "0000000000000000000000000001100000001000000110000000000000000000",
p: [ 27, 28, 36, 43, 44 ]
}, {
b: "0000000000000000000000000000110000000100000011000000000000000000",
p: [ 28, 29, 37, 44, 45 ]
}, {
b: "0000000000000000000000000000011000000010000001100000000000000000",
p: [ 29, 30, 38, 45, 46 ]
}, {
b: "0000000000000000000000000000001100000001000000110000000000000000",
p: [ 30, 31, 39, 46, 47 ]
}, {
b: "0000000000000000000000000000000011000000010000001100000000000000",
p: [ 32, 33, 41, 48, 49 ]
}, {
b: "0000000000000000000000000000000001100000001000000110000000000000",
p: [ 33, 34, 42, 49, 50 ]
}, {
b: "0000000000000000000000000000000000110000000100000011000000000000",
p: [ 34, 35, 43, 50, 51 ]
}, {
b: "0000000000000000000000000000000000011000000010000001100000000000",
p: [ 35, 36, 44, 51, 52 ]
}, {
b: "0000000000000000000000000000000000001100000001000000110000000000",
p: [ 36, 37, 45, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000110000000100000011000000000",
p: [ 37, 38, 46, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000011000000010000001100000000",
p: [ 38, 39, 47, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000110000000100000011000000",
p: [ 40, 41, 49, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000011000000010000001100000",
p: [ 41, 42, 50, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000001100000001000000110000",
p: [ 42, 43, 51, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000110000000100000011000",
p: [ 43, 44, 52, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000011000000010000001100",
p: [ 44, 45, 53, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001100000001000000110",
p: [ 45, 46, 54, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000110000000100000011",
p: [ 46, 47, 55, 62, 63 ]
} ], [ {
b: "1110000010100000000000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 8, 10 ]
}, {
b: "0111000001010000000000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 9, 11 ]
}, {
b: "0011100000101000000000000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 10, 12 ]
}, {
b: "0001110000010100000000000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 11, 13 ]
}, {
b: "0000111000001010000000000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 12, 14 ]
}, {
b: "0000011100000101000000000000000000000000000000000000000000000000",
p: [ 5, 6, 7, 13, 15 ]
}, {
b: "0000000011100000101000000000000000000000000000000000000000000000",
p: [ 8, 9, 10, 16, 18 ]
}, {
b: "0000000001110000010100000000000000000000000000000000000000000000",
p: [ 9, 10, 11, 17, 19 ]
}, {
b: "0000000000111000001010000000000000000000000000000000000000000000",
p: [ 10, 11, 12, 18, 20 ]
}, {
b: "0000000000011100000101000000000000000000000000000000000000000000",
p: [ 11, 12, 13, 19, 21 ]
}, {
b: "0000000000001110000010100000000000000000000000000000000000000000",
p: [ 12, 13, 14, 20, 22 ]
}, {
b: "0000000000000111000001010000000000000000000000000000000000000000",
p: [ 13, 14, 15, 21, 23 ]
}, {
b: "0000000000000000111000001010000000000000000000000000000000000000",
p: [ 16, 17, 18, 24, 26 ]
}, {
b: "0000000000000000011100000101000000000000000000000000000000000000",
p: [ 17, 18, 19, 25, 27 ]
}, {
b: "0000000000000000001110000010100000000000000000000000000000000000",
p: [ 18, 19, 20, 26, 28 ]
}, {
b: "0000000000000000000111000001010000000000000000000000000000000000",
p: [ 19, 20, 21, 27, 29 ]
}, {
b: "0000000000000000000011100000101000000000000000000000000000000000",
p: [ 20, 21, 22, 28, 30 ]
}, {
b: "0000000000000000000001110000010100000000000000000000000000000000",
p: [ 21, 22, 23, 29, 31 ]
}, {
b: "0000000000000000000000001110000010100000000000000000000000000000",
p: [ 24, 25, 26, 32, 34 ]
}, {
b: "0000000000000000000000000111000001010000000000000000000000000000",
p: [ 25, 26, 27, 33, 35 ]
}, {
b: "0000000000000000000000000011100000101000000000000000000000000000",
p: [ 26, 27, 28, 34, 36 ]
}, {
b: "0000000000000000000000000001110000010100000000000000000000000000",
p: [ 27, 28, 29, 35, 37 ]
}, {
b: "0000000000000000000000000000111000001010000000000000000000000000",
p: [ 28, 29, 30, 36, 38 ]
}, {
b: "0000000000000000000000000000011100000101000000000000000000000000",
p: [ 29, 30, 31, 37, 39 ]
}, {
b: "0000000000000000000000000000000011100000101000000000000000000000",
p: [ 32, 33, 34, 40, 42 ]
}, {
b: "0000000000000000000000000000000001110000010100000000000000000000",
p: [ 33, 34, 35, 41, 43 ]
}, {
b: "0000000000000000000000000000000000111000001010000000000000000000",
p: [ 34, 35, 36, 42, 44 ]
}, {
b: "0000000000000000000000000000000000011100000101000000000000000000",
p: [ 35, 36, 37, 43, 45 ]
}, {
b: "0000000000000000000000000000000000001110000010100000000000000000",
p: [ 36, 37, 38, 44, 46 ]
}, {
b: "0000000000000000000000000000000000000111000001010000000000000000",
p: [ 37, 38, 39, 45, 47 ]
}, {
b: "0000000000000000000000000000000000000000111000001010000000000000",
p: [ 40, 41, 42, 48, 50 ]
}, {
b: "0000000000000000000000000000000000000000011100000101000000000000",
p: [ 41, 42, 43, 49, 51 ]
}, {
b: "0000000000000000000000000000000000000000001110000010100000000000",
p: [ 42, 43, 44, 50, 52 ]
}, {
b: "0000000000000000000000000000000000000000000111000001010000000000",
p: [ 43, 44, 45, 51, 53 ]
}, {
b: "0000000000000000000000000000000000000000000011100000101000000000",
p: [ 44, 45, 46, 52, 54 ]
}, {
b: "0000000000000000000000000000000000000000000001110000010100000000",
p: [ 45, 46, 47, 53, 55 ]
}, {
b: "0000000000000000000000000000000000000000000000001110000010100000",
p: [ 48, 49, 50, 56, 58 ]
}, {
b: "0000000000000000000000000000000000000000000000000111000001010000",
p: [ 49, 50, 51, 57, 59 ]
}, {
b: "0000000000000000000000000000000000000000000000000011100000101000",
p: [ 50, 51, 52, 58, 60 ]
}, {
b: "0000000000000000000000000000000000000000000000000001110000010100",
p: [ 51, 52, 53, 59, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000000000111000001010",
p: [ 52, 53, 54, 60, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000000000011100000101",
p: [ 53, 54, 55, 61, 63 ]
} ], [ {
b: "1100000010000000110000000000000000000000000000000000000000000000",
p: [ 0, 1, 8, 16, 17 ]
}, {
b: "0110000001000000011000000000000000000000000000000000000000000000",
p: [ 1, 2, 9, 17, 18 ]
}, {
b: "0011000000100000001100000000000000000000000000000000000000000000",
p: [ 2, 3, 10, 18, 19 ]
}, {
b: "0001100000010000000110000000000000000000000000000000000000000000",
p: [ 3, 4, 11, 19, 20 ]
}, {
b: "0000110000001000000011000000000000000000000000000000000000000000",
p: [ 4, 5, 12, 20, 21 ]
}, {
b: "0000011000000100000001100000000000000000000000000000000000000000",
p: [ 5, 6, 13, 21, 22 ]
}, {
b: "0000001100000010000000110000000000000000000000000000000000000000",
p: [ 6, 7, 14, 22, 23 ]
}, {
b: "0000000011000000100000001100000000000000000000000000000000000000",
p: [ 8, 9, 16, 24, 25 ]
}, {
b: "0000000001100000010000000110000000000000000000000000000000000000",
p: [ 9, 10, 17, 25, 26 ]
}, {
b: "0000000000110000001000000011000000000000000000000000000000000000",
p: [ 10, 11, 18, 26, 27 ]
}, {
b: "0000000000011000000100000001100000000000000000000000000000000000",
p: [ 11, 12, 19, 27, 28 ]
}, {
b: "0000000000001100000010000000110000000000000000000000000000000000",
p: [ 12, 13, 20, 28, 29 ]
}, {
b: "0000000000000110000001000000011000000000000000000000000000000000",
p: [ 13, 14, 21, 29, 30 ]
}, {
b: "0000000000000011000000100000001100000000000000000000000000000000",
p: [ 14, 15, 22, 30, 31 ]
}, {
b: "0000000000000000110000001000000011000000000000000000000000000000",
p: [ 16, 17, 24, 32, 33 ]
}, {
b: "0000000000000000011000000100000001100000000000000000000000000000",
p: [ 17, 18, 25, 33, 34 ]
}, {
b: "0000000000000000001100000010000000110000000000000000000000000000",
p: [ 18, 19, 26, 34, 35 ]
}, {
b: "0000000000000000000110000001000000011000000000000000000000000000",
p: [ 19, 20, 27, 35, 36 ]
}, {
b: "0000000000000000000011000000100000001100000000000000000000000000",
p: [ 20, 21, 28, 36, 37 ]
}, {
b: "0000000000000000000001100000010000000110000000000000000000000000",
p: [ 21, 22, 29, 37, 38 ]
}, {
b: "0000000000000000000000110000001000000011000000000000000000000000",
p: [ 22, 23, 30, 38, 39 ]
}, {
b: "0000000000000000000000001100000010000000110000000000000000000000",
p: [ 24, 25, 32, 40, 41 ]
}, {
b: "0000000000000000000000000110000001000000011000000000000000000000",
p: [ 25, 26, 33, 41, 42 ]
}, {
b: "0000000000000000000000000011000000100000001100000000000000000000",
p: [ 26, 27, 34, 42, 43 ]
}, {
b: "0000000000000000000000000001100000010000000110000000000000000000",
p: [ 27, 28, 35, 43, 44 ]
}, {
b: "0000000000000000000000000000110000001000000011000000000000000000",
p: [ 28, 29, 36, 44, 45 ]
}, {
b: "0000000000000000000000000000011000000100000001100000000000000000",
p: [ 29, 30, 37, 45, 46 ]
}, {
b: "0000000000000000000000000000001100000010000000110000000000000000",
p: [ 30, 31, 38, 46, 47 ]
}, {
b: "0000000000000000000000000000000011000000100000001100000000000000",
p: [ 32, 33, 40, 48, 49 ]
}, {
b: "0000000000000000000000000000000001100000010000000110000000000000",
p: [ 33, 34, 41, 49, 50 ]
}, {
b: "0000000000000000000000000000000000110000001000000011000000000000",
p: [ 34, 35, 42, 50, 51 ]
}, {
b: "0000000000000000000000000000000000011000000100000001100000000000",
p: [ 35, 36, 43, 51, 52 ]
}, {
b: "0000000000000000000000000000000000001100000010000000110000000000",
p: [ 36, 37, 44, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000110000001000000011000000000",
p: [ 37, 38, 45, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000011000000100000001100000000",
p: [ 38, 39, 46, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000110000001000000011000000",
p: [ 40, 41, 48, 56, 57 ]
}, {
b: "0000000000000000000000000000000000000000011000000100000001100000",
p: [ 41, 42, 49, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000001100000010000000110000",
p: [ 42, 43, 50, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000110000001000000011000",
p: [ 43, 44, 51, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000011000000100000001100",
p: [ 44, 45, 52, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001100000010000000110",
p: [ 45, 46, 53, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000110000001000000011",
p: [ 46, 47, 54, 62, 63 ]
} ], [ {
b: "0100000001000000111000000000000000000000000000000000000000000000",
p: [ 1, 9, 16, 17, 18 ]
}, {
b: "0010000000100000011100000000000000000000000000000000000000000000",
p: [ 2, 10, 17, 18, 19 ]
}, {
b: "0001000000010000001110000000000000000000000000000000000000000000",
p: [ 3, 11, 18, 19, 20 ]
}, {
b: "0000100000001000000111000000000000000000000000000000000000000000",
p: [ 4, 12, 19, 20, 21 ]
}, {
b: "0000010000000100000011100000000000000000000000000000000000000000",
p: [ 5, 13, 20, 21, 22 ]
}, {
b: "0000001000000010000001110000000000000000000000000000000000000000",
p: [ 6, 14, 21, 22, 23 ]
}, {
b: "0000000001000000010000001110000000000000000000000000000000000000",
p: [ 9, 17, 24, 25, 26 ]
}, {
b: "0000000000100000001000000111000000000000000000000000000000000000",
p: [ 10, 18, 25, 26, 27 ]
}, {
b: "0000000000010000000100000011100000000000000000000000000000000000",
p: [ 11, 19, 26, 27, 28 ]
}, {
b: "0000000000001000000010000001110000000000000000000000000000000000",
p: [ 12, 20, 27, 28, 29 ]
}, {
b: "0000000000000100000001000000111000000000000000000000000000000000",
p: [ 13, 21, 28, 29, 30 ]
}, {
b: "0000000000000010000000100000011100000000000000000000000000000000",
p: [ 14, 22, 29, 30, 31 ]
}, {
b: "0000000000000000010000000100000011100000000000000000000000000000",
p: [ 17, 25, 32, 33, 34 ]
}, {
b: "0000000000000000001000000010000001110000000000000000000000000000",
p: [ 18, 26, 33, 34, 35 ]
}, {
b: "0000000000000000000100000001000000111000000000000000000000000000",
p: [ 19, 27, 34, 35, 36 ]
}, {
b: "0000000000000000000010000000100000011100000000000000000000000000",
p: [ 20, 28, 35, 36, 37 ]
}, {
b: "0000000000000000000001000000010000001110000000000000000000000000",
p: [ 21, 29, 36, 37, 38 ]
}, {
b: "0000000000000000000000100000001000000111000000000000000000000000",
p: [ 22, 30, 37, 38, 39 ]
}, {
b: "0000000000000000000000000100000001000000111000000000000000000000",
p: [ 25, 33, 40, 41, 42 ]
}, {
b: "0000000000000000000000000010000000100000011100000000000000000000",
p: [ 26, 34, 41, 42, 43 ]
}, {
b: "0000000000000000000000000001000000010000001110000000000000000000",
p: [ 27, 35, 42, 43, 44 ]
}, {
b: "0000000000000000000000000000100000001000000111000000000000000000",
p: [ 28, 36, 43, 44, 45 ]
}, {
b: "0000000000000000000000000000010000000100000011100000000000000000",
p: [ 29, 37, 44, 45, 46 ]
}, {
b: "0000000000000000000000000000001000000010000001110000000000000000",
p: [ 30, 38, 45, 46, 47 ]
}, {
b: "0000000000000000000000000000000001000000010000001110000000000000",
p: [ 33, 41, 48, 49, 50 ]
}, {
b: "0000000000000000000000000000000000100000001000000111000000000000",
p: [ 34, 42, 49, 50, 51 ]
}, {
b: "0000000000000000000000000000000000010000000100000011100000000000",
p: [ 35, 43, 50, 51, 52 ]
}, {
b: "0000000000000000000000000000000000001000000010000001110000000000",
p: [ 36, 44, 51, 52, 53 ]
}, {
b: "0000000000000000000000000000000000000100000001000000111000000000",
p: [ 37, 45, 52, 53, 54 ]
}, {
b: "0000000000000000000000000000000000000010000000100000011100000000",
p: [ 38, 46, 53, 54, 55 ]
}, {
b: "0000000000000000000000000000000000000000010000000100000011100000",
p: [ 41, 49, 56, 57, 58 ]
}, {
b: "0000000000000000000000000000000000000000001000000010000001110000",
p: [ 42, 50, 57, 58, 59 ]
}, {
b: "0000000000000000000000000000000000000000000100000001000000111000",
p: [ 43, 51, 58, 59, 60 ]
}, {
b: "0000000000000000000000000000000000000000000010000000100000011100",
p: [ 44, 52, 59, 60, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001000000010000001110",
p: [ 45, 53, 60, 61, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000100000001000000111",
p: [ 46, 54, 61, 62, 63 ]
} ], [ {
b: "0010000011100000001000000000000000000000000000000000000000000000",
p: [ 2, 8, 9, 10, 18 ]
}, {
b: "0001000001110000000100000000000000000000000000000000000000000000",
p: [ 3, 9, 10, 11, 19 ]
}, {
b: "0000100000111000000010000000000000000000000000000000000000000000",
p: [ 4, 10, 11, 12, 20 ]
}, {
b: "0000010000011100000001000000000000000000000000000000000000000000",
p: [ 5, 11, 12, 13, 21 ]
}, {
b: "0000001000001110000000100000000000000000000000000000000000000000",
p: [ 6, 12, 13, 14, 22 ]
}, {
b: "0000000100000111000000010000000000000000000000000000000000000000",
p: [ 7, 13, 14, 15, 23 ]
}, {
b: "0000000000100000111000000010000000000000000000000000000000000000",
p: [ 10, 16, 17, 18, 26 ]
}, {
b: "0000000000010000011100000001000000000000000000000000000000000000",
p: [ 11, 17, 18, 19, 27 ]
}, {
b: "0000000000001000001110000000100000000000000000000000000000000000",
p: [ 12, 18, 19, 20, 28 ]
}, {
b: "0000000000000100000111000000010000000000000000000000000000000000",
p: [ 13, 19, 20, 21, 29 ]
}, {
b: "0000000000000010000011100000001000000000000000000000000000000000",
p: [ 14, 20, 21, 22, 30 ]
}, {
b: "0000000000000001000001110000000100000000000000000000000000000000",
p: [ 15, 21, 22, 23, 31 ]
}, {
b: "0000000000000000001000001110000000100000000000000000000000000000",
p: [ 18, 24, 25, 26, 34 ]
}, {
b: "0000000000000000000100000111000000010000000000000000000000000000",
p: [ 19, 25, 26, 27, 35 ]
}, {
b: "0000000000000000000010000011100000001000000000000000000000000000",
p: [ 20, 26, 27, 28, 36 ]
}, {
b: "0000000000000000000001000001110000000100000000000000000000000000",
p: [ 21, 27, 28, 29, 37 ]
}, {
b: "0000000000000000000000100000111000000010000000000000000000000000",
p: [ 22, 28, 29, 30, 38 ]
}, {
b: "0000000000000000000000010000011100000001000000000000000000000000",
p: [ 23, 29, 30, 31, 39 ]
}, {
b: "0000000000000000000000000010000011100000001000000000000000000000",
p: [ 26, 32, 33, 34, 42 ]
}, {
b: "0000000000000000000000000001000001110000000100000000000000000000",
p: [ 27, 33, 34, 35, 43 ]
}, {
b: "0000000000000000000000000000100000111000000010000000000000000000",
p: [ 28, 34, 35, 36, 44 ]
}, {
b: "0000000000000000000000000000010000011100000001000000000000000000",
p: [ 29, 35, 36, 37, 45 ]
}, {
b: "0000000000000000000000000000001000001110000000100000000000000000",
p: [ 30, 36, 37, 38, 46 ]
}, {
b: "0000000000000000000000000000000100000111000000010000000000000000",
p: [ 31, 37, 38, 39, 47 ]
}, {
b: "0000000000000000000000000000000000100000111000000010000000000000",
p: [ 34, 40, 41, 42, 50 ]
}, {
b: "0000000000000000000000000000000000010000011100000001000000000000",
p: [ 35, 41, 42, 43, 51 ]
}, {
b: "0000000000000000000000000000000000001000001110000000100000000000",
p: [ 36, 42, 43, 44, 52 ]
}, {
b: "0000000000000000000000000000000000000100000111000000010000000000",
p: [ 37, 43, 44, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000010000011100000001000000000",
p: [ 38, 44, 45, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000001000001110000000100000000",
p: [ 39, 45, 46, 47, 55 ]
}, {
b: "0000000000000000000000000000000000000000001000001110000000100000",
p: [ 42, 48, 49, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000111000000010000",
p: [ 43, 49, 50, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000011100000001000",
p: [ 44, 50, 51, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000001110000000100",
p: [ 45, 51, 52, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000111000000010",
p: [ 46, 52, 53, 54, 62 ]
}, {
b: "0000000000000000000000000000000000000000000000010000011100000001",
p: [ 47, 53, 54, 55, 63 ]
} ], [ {
b: "1110000001000000010000000000000000000000000000000000000000000000",
p: [ 0, 1, 2, 9, 17 ]
}, {
b: "0111000000100000001000000000000000000000000000000000000000000000",
p: [ 1, 2, 3, 10, 18 ]
}, {
b: "0011100000010000000100000000000000000000000000000000000000000000",
p: [ 2, 3, 4, 11, 19 ]
}, {
b: "0001110000001000000010000000000000000000000000000000000000000000",
p: [ 3, 4, 5, 12, 20 ]
}, {
b: "0000111000000100000001000000000000000000000000000000000000000000",
p: [ 4, 5, 6, 13, 21 ]
}, {
b: "0000011100000010000000100000000000000000000000000000000000000000",
p: [ 5, 6, 7, 14, 22 ]
}, {
b: "0000000011100000010000000100000000000000000000000000000000000000",
p: [ 8, 9, 10, 17, 25 ]
}, {
b: "0000000001110000001000000010000000000000000000000000000000000000",
p: [ 9, 10, 11, 18, 26 ]
}, {
b: "0000000000111000000100000001000000000000000000000000000000000000",
p: [ 10, 11, 12, 19, 27 ]
}, {
b: "0000000000011100000010000000100000000000000000000000000000000000",
p: [ 11, 12, 13, 20, 28 ]
}, {
b: "0000000000001110000001000000010000000000000000000000000000000000",
p: [ 12, 13, 14, 21, 29 ]
}, {
b: "0000000000000111000000100000001000000000000000000000000000000000",
p: [ 13, 14, 15, 22, 30 ]
}, {
b: "0000000000000000111000000100000001000000000000000000000000000000",
p: [ 16, 17, 18, 25, 33 ]
}, {
b: "0000000000000000011100000010000000100000000000000000000000000000",
p: [ 17, 18, 19, 26, 34 ]
}, {
b: "0000000000000000001110000001000000010000000000000000000000000000",
p: [ 18, 19, 20, 27, 35 ]
}, {
b: "0000000000000000000111000000100000001000000000000000000000000000",
p: [ 19, 20, 21, 28, 36 ]
}, {
b: "0000000000000000000011100000010000000100000000000000000000000000",
p: [ 20, 21, 22, 29, 37 ]
}, {
b: "0000000000000000000001110000001000000010000000000000000000000000",
p: [ 21, 22, 23, 30, 38 ]
}, {
b: "0000000000000000000000001110000001000000010000000000000000000000",
p: [ 24, 25, 26, 33, 41 ]
}, {
b: "0000000000000000000000000111000000100000001000000000000000000000",
p: [ 25, 26, 27, 34, 42 ]
}, {
b: "0000000000000000000000000011100000010000000100000000000000000000",
p: [ 26, 27, 28, 35, 43 ]
}, {
b: "0000000000000000000000000001110000001000000010000000000000000000",
p: [ 27, 28, 29, 36, 44 ]
}, {
b: "0000000000000000000000000000111000000100000001000000000000000000",
p: [ 28, 29, 30, 37, 45 ]
}, {
b: "0000000000000000000000000000011100000010000000100000000000000000",
p: [ 29, 30, 31, 38, 46 ]
}, {
b: "0000000000000000000000000000000011100000010000000100000000000000",
p: [ 32, 33, 34, 41, 49 ]
}, {
b: "0000000000000000000000000000000001110000001000000010000000000000",
p: [ 33, 34, 35, 42, 50 ]
}, {
b: "0000000000000000000000000000000000111000000100000001000000000000",
p: [ 34, 35, 36, 43, 51 ]
}, {
b: "0000000000000000000000000000000000011100000010000000100000000000",
p: [ 35, 36, 37, 44, 52 ]
}, {
b: "0000000000000000000000000000000000001110000001000000010000000000",
p: [ 36, 37, 38, 45, 53 ]
}, {
b: "0000000000000000000000000000000000000111000000100000001000000000",
p: [ 37, 38, 39, 46, 54 ]
}, {
b: "0000000000000000000000000000000000000000111000000100000001000000",
p: [ 40, 41, 42, 49, 57 ]
}, {
b: "0000000000000000000000000000000000000000011100000010000000100000",
p: [ 41, 42, 43, 50, 58 ]
}, {
b: "0000000000000000000000000000000000000000001110000001000000010000",
p: [ 42, 43, 44, 51, 59 ]
}, {
b: "0000000000000000000000000000000000000000000111000000100000001000",
p: [ 43, 44, 45, 52, 60 ]
}, {
b: "0000000000000000000000000000000000000000000011100000010000000100",
p: [ 44, 45, 46, 53, 61 ]
}, {
b: "0000000000000000000000000000000000000000000001110000001000000010",
p: [ 45, 46, 47, 54, 62 ]
} ], [ {
b: "0100000011100000010000000000000000000000000000000000000000000000",
p: [ 1, 8, 9, 10, 17 ]
}, {
b: "0010000001110000001000000000000000000000000000000000000000000000",
p: [ 2, 9, 10, 11, 18 ]
}, {
b: "0001000000111000000100000000000000000000000000000000000000000000",
p: [ 3, 10, 11, 12, 19 ]
}, {
b: "0000100000011100000010000000000000000000000000000000000000000000",
p: [ 4, 11, 12, 13, 20 ]
}, {
b: "0000010000001110000001000000000000000000000000000000000000000000",
p: [ 5, 12, 13, 14, 21 ]
}, {
b: "0000001000000111000000100000000000000000000000000000000000000000",
p: [ 6, 13, 14, 15, 22 ]
}, {
b: "0000000001000000111000000100000000000000000000000000000000000000",
p: [ 9, 16, 17, 18, 25 ]
}, {
b: "0000000000100000011100000010000000000000000000000000000000000000",
p: [ 10, 17, 18, 19, 26 ]
}, {
b: "0000000000010000001110000001000000000000000000000000000000000000",
p: [ 11, 18, 19, 20, 27 ]
}, {
b: "0000000000001000000111000000100000000000000000000000000000000000",
p: [ 12, 19, 20, 21, 28 ]
}, {
b: "0000000000000100000011100000010000000000000000000000000000000000",
p: [ 13, 20, 21, 22, 29 ]
}, {
b: "0000000000000010000001110000001000000000000000000000000000000000",
p: [ 14, 21, 22, 23, 30 ]
}, {
b: "0000000000000000010000001110000001000000000000000000000000000000",
p: [ 17, 24, 25, 26, 33 ]
}, {
b: "0000000000000000001000000111000000100000000000000000000000000000",
p: [ 18, 25, 26, 27, 34 ]
}, {
b: "0000000000000000000100000011100000010000000000000000000000000000",
p: [ 19, 26, 27, 28, 35 ]
}, {
b: "0000000000000000000010000001110000001000000000000000000000000000",
p: [ 20, 27, 28, 29, 36 ]
}, {
b: "0000000000000000000001000000111000000100000000000000000000000000",
p: [ 21, 28, 29, 30, 37 ]
}, {
b: "0000000000000000000000100000011100000010000000000000000000000000",
p: [ 22, 29, 30, 31, 38 ]
}, {
b: "0000000000000000000000000100000011100000010000000000000000000000",
p: [ 25, 32, 33, 34, 41 ]
}, {
b: "0000000000000000000000000010000001110000001000000000000000000000",
p: [ 26, 33, 34, 35, 42 ]
}, {
b: "0000000000000000000000000001000000111000000100000000000000000000",
p: [ 27, 34, 35, 36, 43 ]
}, {
b: "0000000000000000000000000000100000011100000010000000000000000000",
p: [ 28, 35, 36, 37, 44 ]
}, {
b: "0000000000000000000000000000010000001110000001000000000000000000",
p: [ 29, 36, 37, 38, 45 ]
}, {
b: "0000000000000000000000000000001000000111000000100000000000000000",
p: [ 30, 37, 38, 39, 46 ]
}, {
b: "0000000000000000000000000000000001000000111000000100000000000000",
p: [ 33, 40, 41, 42, 49 ]
}, {
b: "0000000000000000000000000000000000100000011100000010000000000000",
p: [ 34, 41, 42, 43, 50 ]
}, {
b: "0000000000000000000000000000000000010000001110000001000000000000",
p: [ 35, 42, 43, 44, 51 ]
}, {
b: "0000000000000000000000000000000000001000000111000000100000000000",
p: [ 36, 43, 44, 45, 52 ]
}, {
b: "0000000000000000000000000000000000000100000011100000010000000000",
p: [ 37, 44, 45, 46, 53 ]
}, {
b: "0000000000000000000000000000000000000010000001110000001000000000",
p: [ 38, 45, 46, 47, 54 ]
}, {
b: "0000000000000000000000000000000000000000010000001110000001000000",
p: [ 41, 48, 49, 50, 57 ]
}, {
b: "0000000000000000000000000000000000000000001000000111000000100000",
p: [ 42, 49, 50, 51, 58 ]
}, {
b: "0000000000000000000000000000000000000000000100000011100000010000",
p: [ 43, 50, 51, 52, 59 ]
}, {
b: "0000000000000000000000000000000000000000000010000001110000001000",
p: [ 44, 51, 52, 53, 60 ]
}, {
b: "0000000000000000000000000000000000000000000001000000111000000100",
p: [ 45, 52, 53, 54, 61 ]
}, {
b: "0000000000000000000000000000000000000000000000100000011100000010",
p: [ 46, 53, 54, 55, 62 ]
} ] ];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "cfg", {
get: function() {
return [ [ "1000000000000000000000000000000000000000000000000000000000000000", "0100000000000000000000000000000000000000000000000000000000000000", "0010000000000000000000000000000000000000000000000000000000000000", "0001000000000000000000000000000000000000000000000000000000000000", "0000100000000000000000000000000000000000000000000000000000000000", "0000010000000000000000000000000000000000000000000000000000000000", "0000001000000000000000000000000000000000000000000000000000000000", "0000000100000000000000000000000000000000000000000000000000000000", "0000000010000000000000000000000000000000000000000000000000000000", "0000000001000000000000000000000000000000000000000000000000000000", "0000000000100000000000000000000000000000000000000000000000000000", "0000000000010000000000000000000000000000000000000000000000000000", "0000000000001000000000000000000000000000000000000000000000000000", "0000000000000100000000000000000000000000000000000000000000000000", "0000000000000010000000000000000000000000000000000000000000000000", "0000000000000001000000000000000000000000000000000000000000000000", "0000000000000000100000000000000000000000000000000000000000000000", "0000000000000000010000000000000000000000000000000000000000000000", "0000000000000000001000000000000000000000000000000000000000000000", "0000000000000000000100000000000000000000000000000000000000000000", "0000000000000000000010000000000000000000000000000000000000000000", "0000000000000000000001000000000000000000000000000000000000000000", "0000000000000000000000100000000000000000000000000000000000000000", "0000000000000000000000010000000000000000000000000000000000000000", "0000000000000000000000001000000000000000000000000000000000000000", "0000000000000000000000000100000000000000000000000000000000000000", "0000000000000000000000000010000000000000000000000000000000000000", "0000000000000000000000000001000000000000000000000000000000000000", "0000000000000000000000000000100000000000000000000000000000000000", "0000000000000000000000000000010000000000000000000000000000000000", "0000000000000000000000000000001000000000000000000000000000000000", "0000000000000000000000000000000100000000000000000000000000000000", "0000000000000000000000000000000010000000000000000000000000000000", "0000000000000000000000000000000001000000000000000000000000000000", "0000000000000000000000000000000000100000000000000000000000000000", "0000000000000000000000000000000000010000000000000000000000000000", "0000000000000000000000000000000000001000000000000000000000000000", "0000000000000000000000000000000000000100000000000000000000000000", "0000000000000000000000000000000000000010000000000000000000000000", "0000000000000000000000000000000000000001000000000000000000000000", "0000000000000000000000000000000000000000100000000000000000000000", "0000000000000000000000000000000000000000010000000000000000000000", "0000000000000000000000000000000000000000001000000000000000000000", "0000000000000000000000000000000000000000000100000000000000000000", "0000000000000000000000000000000000000000000010000000000000000000", "0000000000000000000000000000000000000000000001000000000000000000", "0000000000000000000000000000000000000000000000100000000000000000", "0000000000000000000000000000000000000000000000010000000000000000", "0000000000000000000000000000000000000000000000001000000000000000", "0000000000000000000000000000000000000000000000000100000000000000", "0000000000000000000000000000000000000000000000000010000000000000", "0000000000000000000000000000000000000000000000000001000000000000", "0000000000000000000000000000000000000000000000000000100000000000", "0000000000000000000000000000000000000000000000000000010000000000", "0000000000000000000000000000000000000000000000000000001000000000", "0000000000000000000000000000000000000000000000000000000100000000", "0000000000000000000000000000000000000000000000000000000010000000", "0000000000000000000000000000000000000000000000000000000001000000", "0000000000000000000000000000000000000000000000000000000000100000", "0000000000000000000000000000000000000000000000000000000000010000", "0000000000000000000000000000000000000000000000000000000000001000", "0000000000000000000000000000000000000000000000000000000000000100", "0000000000000000000000000000000000000000000000000000000000000010", "0000000000000000000000000000000000000000000000000000000000000001" ], [ "1000000010000000000000000000000000000000000000000000000000000000", "0100000001000000000000000000000000000000000000000000000000000000", "0010000000100000000000000000000000000000000000000000000000000000", "0001000000010000000000000000000000000000000000000000000000000000", "0000100000001000000000000000000000000000000000000000000000000000", "0000010000000100000000000000000000000000000000000000000000000000", "0000001000000010000000000000000000000000000000000000000000000000", "0000000100000001000000000000000000000000000000000000000000000000", "0000000010000000100000000000000000000000000000000000000000000000", "0000000001000000010000000000000000000000000000000000000000000000", "0000000000100000001000000000000000000000000000000000000000000000", "0000000000010000000100000000000000000000000000000000000000000000", "0000000000001000000010000000000000000000000000000000000000000000", "0000000000000100000001000000000000000000000000000000000000000000", "0000000000000010000000100000000000000000000000000000000000000000", "0000000000000001000000010000000000000000000000000000000000000000", "0000000000000000100000001000000000000000000000000000000000000000", "0000000000000000010000000100000000000000000000000000000000000000", "0000000000000000001000000010000000000000000000000000000000000000", "0000000000000000000100000001000000000000000000000000000000000000", "0000000000000000000010000000100000000000000000000000000000000000", "0000000000000000000001000000010000000000000000000000000000000000", "0000000000000000000000100000001000000000000000000000000000000000", "0000000000000000000000010000000100000000000000000000000000000000", "0000000000000000000000001000000010000000000000000000000000000000", "0000000000000000000000000100000001000000000000000000000000000000", "0000000000000000000000000010000000100000000000000000000000000000", "0000000000000000000000000001000000010000000000000000000000000000", "0000000000000000000000000000100000001000000000000000000000000000", "0000000000000000000000000000010000000100000000000000000000000000", "0000000000000000000000000000001000000010000000000000000000000000", "0000000000000000000000000000000100000001000000000000000000000000", "0000000000000000000000000000000010000000100000000000000000000000", "0000000000000000000000000000000001000000010000000000000000000000", "0000000000000000000000000000000000100000001000000000000000000000", "0000000000000000000000000000000000010000000100000000000000000000", "0000000000000000000000000000000000001000000010000000000000000000", "0000000000000000000000000000000000000100000001000000000000000000", "0000000000000000000000000000000000000010000000100000000000000000", "0000000000000000000000000000000000000001000000010000000000000000", "0000000000000000000000000000000000000000100000001000000000000000", "0000000000000000000000000000000000000000010000000100000000000000", "0000000000000000000000000000000000000000001000000010000000000000", "0000000000000000000000000000000000000000000100000001000000000000", "0000000000000000000000000000000000000000000010000000100000000000", "0000000000000000000000000000000000000000000001000000010000000000", "0000000000000000000000000000000000000000000000100000001000000000", "0000000000000000000000000000000000000000000000010000000100000000", "0000000000000000000000000000000000000000000000001000000010000000", "0000000000000000000000000000000000000000000000000100000001000000", "0000000000000000000000000000000000000000000000000010000000100000", "0000000000000000000000000000000000000000000000000001000000010000", "0000000000000000000000000000000000000000000000000000100000001000", "0000000000000000000000000000000000000000000000000000010000000100", "0000000000000000000000000000000000000000000000000000001000000010", "0000000000000000000000000000000000000000000000000000000100000001" ], [ "1100000000000000000000000000000000000000000000000000000000000000", "0110000000000000000000000000000000000000000000000000000000000000", "0011000000000000000000000000000000000000000000000000000000000000", "0001100000000000000000000000000000000000000000000000000000000000", "0000110000000000000000000000000000000000000000000000000000000000", "0000011000000000000000000000000000000000000000000000000000000000", "0000001100000000000000000000000000000000000000000000000000000000", "0000000011000000000000000000000000000000000000000000000000000000", "0000000001100000000000000000000000000000000000000000000000000000", "0000000000110000000000000000000000000000000000000000000000000000", "0000000000011000000000000000000000000000000000000000000000000000", "0000000000001100000000000000000000000000000000000000000000000000", "0000000000000110000000000000000000000000000000000000000000000000", "0000000000000011000000000000000000000000000000000000000000000000", "0000000000000000110000000000000000000000000000000000000000000000", "0000000000000000011000000000000000000000000000000000000000000000", "0000000000000000001100000000000000000000000000000000000000000000", "0000000000000000000110000000000000000000000000000000000000000000", "0000000000000000000011000000000000000000000000000000000000000000", "0000000000000000000001100000000000000000000000000000000000000000", "0000000000000000000000110000000000000000000000000000000000000000", "0000000000000000000000001100000000000000000000000000000000000000", "0000000000000000000000000110000000000000000000000000000000000000", "0000000000000000000000000011000000000000000000000000000000000000", "0000000000000000000000000001100000000000000000000000000000000000", "0000000000000000000000000000110000000000000000000000000000000000", "0000000000000000000000000000011000000000000000000000000000000000", "0000000000000000000000000000001100000000000000000000000000000000", "0000000000000000000000000000000011000000000000000000000000000000", "0000000000000000000000000000000001100000000000000000000000000000", "0000000000000000000000000000000000110000000000000000000000000000", "0000000000000000000000000000000000011000000000000000000000000000", "0000000000000000000000000000000000001100000000000000000000000000", "0000000000000000000000000000000000000110000000000000000000000000", "0000000000000000000000000000000000000011000000000000000000000000", "0000000000000000000000000000000000000000110000000000000000000000", "0000000000000000000000000000000000000000011000000000000000000000", "0000000000000000000000000000000000000000001100000000000000000000", "0000000000000000000000000000000000000000000110000000000000000000", "0000000000000000000000000000000000000000000011000000000000000000", "0000000000000000000000000000000000000000000001100000000000000000", "0000000000000000000000000000000000000000000000110000000000000000", "0000000000000000000000000000000000000000000000001100000000000000", "0000000000000000000000000000000000000000000000000110000000000000", "0000000000000000000000000000000000000000000000000011000000000000", "0000000000000000000000000000000000000000000000000001100000000000", "0000000000000000000000000000000000000000000000000000110000000000", "0000000000000000000000000000000000000000000000000000011000000000", "0000000000000000000000000000000000000000000000000000001100000000", "0000000000000000000000000000000000000000000000000000000011000000", "0000000000000000000000000000000000000000000000000000000001100000", "0000000000000000000000000000000000000000000000000000000000110000", "0000000000000000000000000000000000000000000000000000000000011000", "0000000000000000000000000000000000000000000000000000000000001100", "0000000000000000000000000000000000000000000000000000000000000110", "0000000000000000000000000000000000000000000000000000000000000011" ], [ "1000000010000000100000000000000000000000000000000000000000000000", "0100000001000000010000000000000000000000000000000000000000000000", "0010000000100000001000000000000000000000000000000000000000000000", "0001000000010000000100000000000000000000000000000000000000000000", "0000100000001000000010000000000000000000000000000000000000000000", "0000010000000100000001000000000000000000000000000000000000000000", "0000001000000010000000100000000000000000000000000000000000000000", "0000000100000001000000010000000000000000000000000000000000000000", "0000000010000000100000001000000000000000000000000000000000000000", "0000000001000000010000000100000000000000000000000000000000000000", "0000000000100000001000000010000000000000000000000000000000000000", "0000000000010000000100000001000000000000000000000000000000000000", "0000000000001000000010000000100000000000000000000000000000000000", "0000000000000100000001000000010000000000000000000000000000000000", "0000000000000010000000100000001000000000000000000000000000000000", "0000000000000001000000010000000100000000000000000000000000000000", "0000000000000000100000001000000010000000000000000000000000000000", "0000000000000000010000000100000001000000000000000000000000000000", "0000000000000000001000000010000000100000000000000000000000000000", "0000000000000000000100000001000000010000000000000000000000000000", "0000000000000000000010000000100000001000000000000000000000000000", "0000000000000000000001000000010000000100000000000000000000000000", "0000000000000000000000100000001000000010000000000000000000000000", "0000000000000000000000010000000100000001000000000000000000000000", "0000000000000000000000001000000010000000100000000000000000000000", "0000000000000000000000000100000001000000010000000000000000000000", "0000000000000000000000000010000000100000001000000000000000000000", "0000000000000000000000000001000000010000000100000000000000000000", "0000000000000000000000000000100000001000000010000000000000000000", "0000000000000000000000000000010000000100000001000000000000000000", "0000000000000000000000000000001000000010000000100000000000000000", "0000000000000000000000000000000100000001000000010000000000000000", "0000000000000000000000000000000010000000100000001000000000000000", "0000000000000000000000000000000001000000010000000100000000000000", "0000000000000000000000000000000000100000001000000010000000000000", "0000000000000000000000000000000000010000000100000001000000000000", "0000000000000000000000000000000000001000000010000000100000000000", "0000000000000000000000000000000000000100000001000000010000000000", "0000000000000000000000000000000000000010000000100000001000000000", "0000000000000000000000000000000000000001000000010000000100000000", "0000000000000000000000000000000000000000100000001000000010000000", "0000000000000000000000000000000000000000010000000100000001000000", "0000000000000000000000000000000000000000001000000010000000100000", "0000000000000000000000000000000000000000000100000001000000010000", "0000000000000000000000000000000000000000000010000000100000001000", "0000000000000000000000000000000000000000000001000000010000000100", "0000000000000000000000000000000000000000000000100000001000000010", "0000000000000000000000000000000000000000000000010000000100000001" ], [ "1110000000000000000000000000000000000000000000000000000000000000", "0111000000000000000000000000000000000000000000000000000000000000", "0011100000000000000000000000000000000000000000000000000000000000", "0001110000000000000000000000000000000000000000000000000000000000", "0000111000000000000000000000000000000000000000000000000000000000", "0000011100000000000000000000000000000000000000000000000000000000", "0000000011100000000000000000000000000000000000000000000000000000", "0000000001110000000000000000000000000000000000000000000000000000", "0000000000111000000000000000000000000000000000000000000000000000", "0000000000011100000000000000000000000000000000000000000000000000", "0000000000001110000000000000000000000000000000000000000000000000", "0000000000000111000000000000000000000000000000000000000000000000", "0000000000000000111000000000000000000000000000000000000000000000", "0000000000000000011100000000000000000000000000000000000000000000", "0000000000000000001110000000000000000000000000000000000000000000", "0000000000000000000111000000000000000000000000000000000000000000", "0000000000000000000011100000000000000000000000000000000000000000", "0000000000000000000001110000000000000000000000000000000000000000", "0000000000000000000000001110000000000000000000000000000000000000", "0000000000000000000000000111000000000000000000000000000000000000", "0000000000000000000000000011100000000000000000000000000000000000", "0000000000000000000000000001110000000000000000000000000000000000", "0000000000000000000000000000111000000000000000000000000000000000", "0000000000000000000000000000011100000000000000000000000000000000", "0000000000000000000000000000000011100000000000000000000000000000", "0000000000000000000000000000000001110000000000000000000000000000", "0000000000000000000000000000000000111000000000000000000000000000", "0000000000000000000000000000000000011100000000000000000000000000", "0000000000000000000000000000000000001110000000000000000000000000", "0000000000000000000000000000000000000111000000000000000000000000", "0000000000000000000000000000000000000000111000000000000000000000", "0000000000000000000000000000000000000000011100000000000000000000", "0000000000000000000000000000000000000000001110000000000000000000", "0000000000000000000000000000000000000000000111000000000000000000", "0000000000000000000000000000000000000000000011100000000000000000", "0000000000000000000000000000000000000000000001110000000000000000", "0000000000000000000000000000000000000000000000001110000000000000", "0000000000000000000000000000000000000000000000000111000000000000", "0000000000000000000000000000000000000000000000000011100000000000", "0000000000000000000000000000000000000000000000000001110000000000", "0000000000000000000000000000000000000000000000000000111000000000", "0000000000000000000000000000000000000000000000000000011100000000", "0000000000000000000000000000000000000000000000000000000011100000", "0000000000000000000000000000000000000000000000000000000001110000", "0000000000000000000000000000000000000000000000000000000000111000", "0000000000000000000000000000000000000000000000000000000000011100", "0000000000000000000000000000000000000000000000000000000000001110", "0000000000000000000000000000000000000000000000000000000000000111" ], [ "1100000010000000000000000000000000000000000000000000000000000000", "0110000001000000000000000000000000000000000000000000000000000000", "0011000000100000000000000000000000000000000000000000000000000000", "0001100000010000000000000000000000000000000000000000000000000000", "0000110000001000000000000000000000000000000000000000000000000000", "0000011000000100000000000000000000000000000000000000000000000000", "0000001100000010000000000000000000000000000000000000000000000000", "0000000011000000100000000000000000000000000000000000000000000000", "0000000001100000010000000000000000000000000000000000000000000000", "0000000000110000001000000000000000000000000000000000000000000000", "0000000000011000000100000000000000000000000000000000000000000000", "0000000000001100000010000000000000000000000000000000000000000000", "0000000000000110000001000000000000000000000000000000000000000000", "0000000000000011000000100000000000000000000000000000000000000000", "0000000000000000110000001000000000000000000000000000000000000000", "0000000000000000011000000100000000000000000000000000000000000000", "0000000000000000001100000010000000000000000000000000000000000000", "0000000000000000000110000001000000000000000000000000000000000000", "0000000000000000000011000000100000000000000000000000000000000000", "0000000000000000000001100000010000000000000000000000000000000000", "0000000000000000000000110000001000000000000000000000000000000000", "0000000000000000000000001100000010000000000000000000000000000000", "0000000000000000000000000110000001000000000000000000000000000000", "0000000000000000000000000011000000100000000000000000000000000000", "0000000000000000000000000001100000010000000000000000000000000000", "0000000000000000000000000000110000001000000000000000000000000000", "0000000000000000000000000000011000000100000000000000000000000000", "0000000000000000000000000000001100000010000000000000000000000000", "0000000000000000000000000000000011000000100000000000000000000000", "0000000000000000000000000000000001100000010000000000000000000000", "0000000000000000000000000000000000110000001000000000000000000000", "0000000000000000000000000000000000011000000100000000000000000000", "0000000000000000000000000000000000001100000010000000000000000000", "0000000000000000000000000000000000000110000001000000000000000000", "0000000000000000000000000000000000000011000000100000000000000000", "0000000000000000000000000000000000000000110000001000000000000000", "0000000000000000000000000000000000000000011000000100000000000000", "0000000000000000000000000000000000000000001100000010000000000000", "0000000000000000000000000000000000000000000110000001000000000000", "0000000000000000000000000000000000000000000011000000100000000000", "0000000000000000000000000000000000000000000001100000010000000000", "0000000000000000000000000000000000000000000000110000001000000000", "0000000000000000000000000000000000000000000000001100000010000000", "0000000000000000000000000000000000000000000000000110000001000000", "0000000000000000000000000000000000000000000000000011000000100000", "0000000000000000000000000000000000000000000000000001100000010000", "0000000000000000000000000000000000000000000000000000110000001000", "0000000000000000000000000000000000000000000000000000011000000100", "0000000000000000000000000000000000000000000000000000001100000010" ], [ "1000000010000000100000001000000000000000000000000000000000000000", "0100000001000000010000000100000000000000000000000000000000000000", "0010000000100000001000000010000000000000000000000000000000000000", "0001000000010000000100000001000000000000000000000000000000000000", "0000100000001000000010000000100000000000000000000000000000000000", "0000010000000100000001000000010000000000000000000000000000000000", "0000001000000010000000100000001000000000000000000000000000000000", "0000000100000001000000010000000100000000000000000000000000000000", "0000000010000000100000001000000010000000000000000000000000000000", "0000000001000000010000000100000001000000000000000000000000000000", "0000000000100000001000000010000000100000000000000000000000000000", "0000000000010000000100000001000000010000000000000000000000000000", "0000000000001000000010000000100000001000000000000000000000000000", "0000000000000100000001000000010000000100000000000000000000000000", "0000000000000010000000100000001000000010000000000000000000000000", "0000000000000001000000010000000100000001000000000000000000000000", "0000000000000000100000001000000010000000100000000000000000000000", "0000000000000000010000000100000001000000010000000000000000000000", "0000000000000000001000000010000000100000001000000000000000000000", "0000000000000000000100000001000000010000000100000000000000000000", "0000000000000000000010000000100000001000000010000000000000000000", "0000000000000000000001000000010000000100000001000000000000000000", "0000000000000000000000100000001000000010000000100000000000000000", "0000000000000000000000010000000100000001000000010000000000000000", "0000000000000000000000001000000010000000100000001000000000000000", "0000000000000000000000000100000001000000010000000100000000000000", "0000000000000000000000000010000000100000001000000010000000000000", "0000000000000000000000000001000000010000000100000001000000000000", "0000000000000000000000000000100000001000000010000000100000000000", "0000000000000000000000000000010000000100000001000000010000000000", "0000000000000000000000000000001000000010000000100000001000000000", "0000000000000000000000000000000100000001000000010000000100000000", "0000000000000000000000000000000010000000100000001000000010000000", "0000000000000000000000000000000001000000010000000100000001000000", "0000000000000000000000000000000000100000001000000010000000100000", "0000000000000000000000000000000000010000000100000001000000010000", "0000000000000000000000000000000000001000000010000000100000001000", "0000000000000000000000000000000000000100000001000000010000000100", "0000000000000000000000000000000000000010000000100000001000000010", "0000000000000000000000000000000000000001000000010000000100000001" ], [ "1000000011100000000000000000000000000000000000000000000000000000", "0100000001110000000000000000000000000000000000000000000000000000", "0010000000111000000000000000000000000000000000000000000000000000", "0001000000011100000000000000000000000000000000000000000000000000", "0000100000001110000000000000000000000000000000000000000000000000", "0000010000000111000000000000000000000000000000000000000000000000", "0000000010000000111000000000000000000000000000000000000000000000", "0000000001000000011100000000000000000000000000000000000000000000", "0000000000100000001110000000000000000000000000000000000000000000", "0000000000010000000111000000000000000000000000000000000000000000", "0000000000001000000011100000000000000000000000000000000000000000", "0000000000000100000001110000000000000000000000000000000000000000", "0000000000000000100000001110000000000000000000000000000000000000", "0000000000000000010000000111000000000000000000000000000000000000", "0000000000000000001000000011100000000000000000000000000000000000", "0000000000000000000100000001110000000000000000000000000000000000", "0000000000000000000010000000111000000000000000000000000000000000", "0000000000000000000001000000011100000000000000000000000000000000", "0000000000000000000000001000000011100000000000000000000000000000", "0000000000000000000000000100000001110000000000000000000000000000", "0000000000000000000000000010000000111000000000000000000000000000", "0000000000000000000000000001000000011100000000000000000000000000", "0000000000000000000000000000100000001110000000000000000000000000", "0000000000000000000000000000010000000111000000000000000000000000", "0000000000000000000000000000000010000000111000000000000000000000", "0000000000000000000000000000000001000000011100000000000000000000", "0000000000000000000000000000000000100000001110000000000000000000", "0000000000000000000000000000000000010000000111000000000000000000", "0000000000000000000000000000000000001000000011100000000000000000", "0000000000000000000000000000000000000100000001110000000000000000", "0000000000000000000000000000000000000000100000001110000000000000", "0000000000000000000000000000000000000000010000000111000000000000", "0000000000000000000000000000000000000000001000000011100000000000", "0000000000000000000000000000000000000000000100000001110000000000", "0000000000000000000000000000000000000000000010000000111000000000", "0000000000000000000000000000000000000000000001000000011100000000", "0000000000000000000000000000000000000000000000001000000011100000", "0000000000000000000000000000000000000000000000000100000001110000", "0000000000000000000000000000000000000000000000000010000000111000", "0000000000000000000000000000000000000000000000000001000000011100", "0000000000000000000000000000000000000000000000000000100000001110", "0000000000000000000000000000000000000000000000000000010000000111" ], [ "1100000011000000000000000000000000000000000000000000000000000000", "0110000001100000000000000000000000000000000000000000000000000000", "0011000000110000000000000000000000000000000000000000000000000000", "0001100000011000000000000000000000000000000000000000000000000000", "0000110000001100000000000000000000000000000000000000000000000000", "0000011000000110000000000000000000000000000000000000000000000000", "0000001100000011000000000000000000000000000000000000000000000000", "0000000011000000110000000000000000000000000000000000000000000000", "0000000001100000011000000000000000000000000000000000000000000000", "0000000000110000001100000000000000000000000000000000000000000000", "0000000000011000000110000000000000000000000000000000000000000000", "0000000000001100000011000000000000000000000000000000000000000000", "0000000000000110000001100000000000000000000000000000000000000000", "0000000000000011000000110000000000000000000000000000000000000000", "0000000000000000110000001100000000000000000000000000000000000000", "0000000000000000011000000110000000000000000000000000000000000000", "0000000000000000001100000011000000000000000000000000000000000000", "0000000000000000000110000001100000000000000000000000000000000000", "0000000000000000000011000000110000000000000000000000000000000000", "0000000000000000000001100000011000000000000000000000000000000000", "0000000000000000000000110000001100000000000000000000000000000000", "0000000000000000000000001100000011000000000000000000000000000000", "0000000000000000000000000110000001100000000000000000000000000000", "0000000000000000000000000011000000110000000000000000000000000000", "0000000000000000000000000001100000011000000000000000000000000000", "0000000000000000000000000000110000001100000000000000000000000000", "0000000000000000000000000000011000000110000000000000000000000000", "0000000000000000000000000000001100000011000000000000000000000000", "0000000000000000000000000000000011000000110000000000000000000000", "0000000000000000000000000000000001100000011000000000000000000000", "0000000000000000000000000000000000110000001100000000000000000000", "0000000000000000000000000000000000011000000110000000000000000000", "0000000000000000000000000000000000001100000011000000000000000000", "0000000000000000000000000000000000000110000001100000000000000000", "0000000000000000000000000000000000000011000000110000000000000000", "0000000000000000000000000000000000000000110000001100000000000000", "0000000000000000000000000000000000000000011000000110000000000000", "0000000000000000000000000000000000000000001100000011000000000000", "0000000000000000000000000000000000000000000110000001100000000000", "0000000000000000000000000000000000000000000011000000110000000000", "0000000000000000000000000000000000000000000001100000011000000000", "0000000000000000000000000000000000000000000000110000001100000000", "0000000000000000000000000000000000000000000000001100000011000000", "0000000000000000000000000000000000000000000000000110000001100000", "0000000000000000000000000000000000000000000000000011000000110000", "0000000000000000000000000000000000000000000000000001100000011000", "0000000000000000000000000000000000000000000000000000110000001100", "0000000000000000000000000000000000000000000000000000011000000110", "0000000000000000000000000000000000000000000000000000001100000011" ], [ "0100000011100000000000000000000000000000000000000000000000000000", "0010000001110000000000000000000000000000000000000000000000000000", "0001000000111000000000000000000000000000000000000000000000000000", "0000100000011100000000000000000000000000000000000000000000000000", "0000010000001110000000000000000000000000000000000000000000000000", "0000001000000111000000000000000000000000000000000000000000000000", "0000000001000000111000000000000000000000000000000000000000000000", "0000000000100000011100000000000000000000000000000000000000000000", "0000000000010000001110000000000000000000000000000000000000000000", "0000000000001000000111000000000000000000000000000000000000000000", "0000000000000100000011100000000000000000000000000000000000000000", "0000000000000010000001110000000000000000000000000000000000000000", "0000000000000000010000001110000000000000000000000000000000000000", "0000000000000000001000000111000000000000000000000000000000000000", "0000000000000000000100000011100000000000000000000000000000000000", "0000000000000000000010000001110000000000000000000000000000000000", "0000000000000000000001000000111000000000000000000000000000000000", "0000000000000000000000100000011100000000000000000000000000000000", "0000000000000000000000000100000011100000000000000000000000000000", "0000000000000000000000000010000001110000000000000000000000000000", "0000000000000000000000000001000000111000000000000000000000000000", "0000000000000000000000000000100000011100000000000000000000000000", "0000000000000000000000000000010000001110000000000000000000000000", "0000000000000000000000000000001000000111000000000000000000000000", "0000000000000000000000000000000001000000111000000000000000000000", "0000000000000000000000000000000000100000011100000000000000000000", "0000000000000000000000000000000000010000001110000000000000000000", "0000000000000000000000000000000000001000000111000000000000000000", "0000000000000000000000000000000000000100000011100000000000000000", "0000000000000000000000000000000000000010000001110000000000000000", "0000000000000000000000000000000000000000010000001110000000000000", "0000000000000000000000000000000000000000001000000111000000000000", "0000000000000000000000000000000000000000000100000011100000000000", "0000000000000000000000000000000000000000000010000001110000000000", "0000000000000000000000000000000000000000000001000000111000000000", "0000000000000000000000000000000000000000000000100000011100000000", "0000000000000000000000000000000000000000000000000100000011100000", "0000000000000000000000000000000000000000000000000010000001110000", "0000000000000000000000000000000000000000000000000001000000111000", "0000000000000000000000000000000000000000000000000000100000011100", "0000000000000000000000000000000000000000000000000000010000001110", "0000000000000000000000000000000000000000000000000000001000000111" ], [ "1111100000000000000000000000000000000000000000000000000000000000", "0111110000000000000000000000000000000000000000000000000000000000", "0011111000000000000000000000000000000000000000000000000000000000", "0001111100000000000000000000000000000000000000000000000000000000", "0000000011111000000000000000000000000000000000000000000000000000", "0000000001111100000000000000000000000000000000000000000000000000", "0000000000111110000000000000000000000000000000000000000000000000", "0000000000011111000000000000000000000000000000000000000000000000", "0000000000000000111110000000000000000000000000000000000000000000", "0000000000000000011111000000000000000000000000000000000000000000", "0000000000000000001111100000000000000000000000000000000000000000", "0000000000000000000111110000000000000000000000000000000000000000", "0000000000000000000000001111100000000000000000000000000000000000", "0000000000000000000000000111110000000000000000000000000000000000", "0000000000000000000000000011111000000000000000000000000000000000", "0000000000000000000000000001111100000000000000000000000000000000", "0000000000000000000000000000000011111000000000000000000000000000", "0000000000000000000000000000000001111100000000000000000000000000", "0000000000000000000000000000000000111110000000000000000000000000", "0000000000000000000000000000000000011111000000000000000000000000", "0000000000000000000000000000000000000000111110000000000000000000", "0000000000000000000000000000000000000000011111000000000000000000", "0000000000000000000000000000000000000000001111100000000000000000", "0000000000000000000000000000000000000000000111110000000000000000", "0000000000000000000000000000000000000000000000001111100000000000", "0000000000000000000000000000000000000000000000000111110000000000", "0000000000000000000000000000000000000000000000000011111000000000", "0000000000000000000000000000000000000000000000000001111100000000", "0000000000000000000000000000000000000000000000000000000011111000", "0000000000000000000000000000000000000000000000000000000001111100", "0000000000000000000000000000000000000000000000000000000000111110", "0000000000000000000000000000000000000000000000000000000000011111" ], [ "1110000000100000001000000000000000000000000000000000000000000000", "0111000000010000000100000000000000000000000000000000000000000000", "0011100000001000000010000000000000000000000000000000000000000000", "0001110000000100000001000000000000000000000000000000000000000000", "0000111000000010000000100000000000000000000000000000000000000000", "0000011100000001000000010000000000000000000000000000000000000000", "0000000011100000001000000010000000000000000000000000000000000000", "0000000001110000000100000001000000000000000000000000000000000000", "0000000000111000000010000000100000000000000000000000000000000000", "0000000000011100000001000000010000000000000000000000000000000000", "0000000000001110000000100000001000000000000000000000000000000000", "0000000000000111000000010000000100000000000000000000000000000000", "0000000000000000111000000010000000100000000000000000000000000000", "0000000000000000011100000001000000010000000000000000000000000000", "0000000000000000001110000000100000001000000000000000000000000000", "0000000000000000000111000000010000000100000000000000000000000000", "0000000000000000000011100000001000000010000000000000000000000000", "0000000000000000000001110000000100000001000000000000000000000000", "0000000000000000000000001110000000100000001000000000000000000000", "0000000000000000000000000111000000010000000100000000000000000000", "0000000000000000000000000011100000001000000010000000000000000000", "0000000000000000000000000001110000000100000001000000000000000000", "0000000000000000000000000000111000000010000000100000000000000000", "0000000000000000000000000000011100000001000000010000000000000000", "0000000000000000000000000000000011100000001000000010000000000000", "0000000000000000000000000000000001110000000100000001000000000000", "0000000000000000000000000000000000111000000010000000100000000000", "0000000000000000000000000000000000011100000001000000010000000000", "0000000000000000000000000000000000001110000000100000001000000000", "0000000000000000000000000000000000000111000000010000000100000000", "0000000000000000000000000000000000000000111000000010000000100000", "0000000000000000000000000000000000000000011100000001000000010000", "0000000000000000000000000000000000000000001110000000100000001000", "0000000000000000000000000000000000000000000111000000010000000100", "0000000000000000000000000000000000000000000011100000001000000010", "0000000000000000000000000000000000000000000001110000000100000001" ], [ "1110000011100000111000000000000000000000000000000000000000000000", "0111000001110000011100000000000000000000000000000000000000000000", "0011100000111000001110000000000000000000000000000000000000000000", "0001110000011100000111000000000000000000000000000000000000000000", "0000111000001110000011100000000000000000000000000000000000000000", "0000011100000111000001110000000000000000000000000000000000000000", "0000000011100000111000001110000000000000000000000000000000000000", "0000000001110000011100000111000000000000000000000000000000000000", "0000000000111000001110000011100000000000000000000000000000000000", "0000000000011100000111000001110000000000000000000000000000000000", "0000000000001110000011100000111000000000000000000000000000000000", "0000000000000111000001110000011100000000000000000000000000000000", "0000000000000000111000001110000011100000000000000000000000000000", "0000000000000000011100000111000001110000000000000000000000000000", "0000000000000000001110000011100000111000000000000000000000000000", "0000000000000000000111000001110000011100000000000000000000000000", "0000000000000000000011100000111000001110000000000000000000000000", "0000000000000000000001110000011100000111000000000000000000000000", "0000000000000000000000001110000011100000111000000000000000000000", "0000000000000000000000000111000001110000011100000000000000000000", "0000000000000000000000000011100000111000001110000000000000000000", "0000000000000000000000000001110000011100000111000000000000000000", "0000000000000000000000000000111000001110000011100000000000000000", "0000000000000000000000000000011100000111000001110000000000000000", "0000000000000000000000000000000011100000111000001110000000000000", "0000000000000000000000000000000001110000011100000111000000000000", "0000000000000000000000000000000000111000001110000011100000000000", "0000000000000000000000000000000000011100000111000001110000000000", "0000000000000000000000000000000000001110000011100000111000000000", "0000000000000000000000000000000000000111000001110000011100000000", "0000000000000000000000000000000000000000111000001110000011100000", "0000000000000000000000000000000000000000011100000111000001110000", "0000000000000000000000000000000000000000001110000011100000111000", "0000000000000000000000000000000000000000000111000001110000011100", "0000000000000000000000000000000000000000000011100000111000001110", "0000000000000000000000000000000000000000000001110000011100000111" ], [ "0110000011000000000000000000000000000000000000000000000000000000", "0011000001100000000000000000000000000000000000000000000000000000", "0001100000110000000000000000000000000000000000000000000000000000", "0000110000011000000000000000000000000000000000000000000000000000", "0000011000001100000000000000000000000000000000000000000000000000", "0000001100000110000000000000000000000000000000000000000000000000", "0000000001100000110000000000000000000000000000000000000000000000", "0000000000110000011000000000000000000000000000000000000000000000", "0000000000011000001100000000000000000000000000000000000000000000", "0000000000001100000110000000000000000000000000000000000000000000", "0000000000000110000011000000000000000000000000000000000000000000", "0000000000000011000001100000000000000000000000000000000000000000", "0000000000000000011000001100000000000000000000000000000000000000", "0000000000000000001100000110000000000000000000000000000000000000", "0000000000000000000110000011000000000000000000000000000000000000", "0000000000000000000011000001100000000000000000000000000000000000", "0000000000000000000001100000110000000000000000000000000000000000", "0000000000000000000000110000011000000000000000000000000000000000", "0000000000000000000000000110000011000000000000000000000000000000", "0000000000000000000000000011000001100000000000000000000000000000", "0000000000000000000000000001100000110000000000000000000000000000", "0000000000000000000000000000110000011000000000000000000000000000", "0000000000000000000000000000011000001100000000000000000000000000", "0000000000000000000000000000001100000110000000000000000000000000", "0000000000000000000000000000000001100000110000000000000000000000", "0000000000000000000000000000000000110000011000000000000000000000", "0000000000000000000000000000000000011000001100000000000000000000", "0000000000000000000000000000000000001100000110000000000000000000", "0000000000000000000000000000000000000110000011000000000000000000", "0000000000000000000000000000000000000011000001100000000000000000", "0000000000000000000000000000000000000000011000001100000000000000", "0000000000000000000000000000000000000000001100000110000000000000", "0000000000000000000000000000000000000000000110000011000000000000", "0000000000000000000000000000000000000000000011000001100000000000", "0000000000000000000000000000000000000000000001100000110000000000", "0000000000000000000000000000000000000000000000110000011000000000", "0000000000000000000000000000000000000000000000000110000011000000", "0000000000000000000000000000000000000000000000000011000001100000", "0000000000000000000000000000000000000000000000000001100000110000", "0000000000000000000000000000000000000000000000000000110000011000", "0000000000000000000000000000000000000000000000000000011000001100", "0000000000000000000000000000000000000000000000000000001100000110" ], [ "1100000001000000000000000000000000000000000000000000000000000000", "0110000000100000000000000000000000000000000000000000000000000000", "0011000000010000000000000000000000000000000000000000000000000000", "0001100000001000000000000000000000000000000000000000000000000000", "0000110000000100000000000000000000000000000000000000000000000000", "0000011000000010000000000000000000000000000000000000000000000000", "0000001100000001000000000000000000000000000000000000000000000000", "0000000011000000010000000000000000000000000000000000000000000000", "0000000001100000001000000000000000000000000000000000000000000000", "0000000000110000000100000000000000000000000000000000000000000000", "0000000000011000000010000000000000000000000000000000000000000000", "0000000000001100000001000000000000000000000000000000000000000000", "0000000000000110000000100000000000000000000000000000000000000000", "0000000000000011000000010000000000000000000000000000000000000000", "0000000000000000110000000100000000000000000000000000000000000000", "0000000000000000011000000010000000000000000000000000000000000000", "0000000000000000001100000001000000000000000000000000000000000000", "0000000000000000000110000000100000000000000000000000000000000000", "0000000000000000000011000000010000000000000000000000000000000000", "0000000000000000000001100000001000000000000000000000000000000000", "0000000000000000000000110000000100000000000000000000000000000000", "0000000000000000000000001100000001000000000000000000000000000000", "0000000000000000000000000110000000100000000000000000000000000000", "0000000000000000000000000011000000010000000000000000000000000000", "0000000000000000000000000001100000001000000000000000000000000000", "0000000000000000000000000000110000000100000000000000000000000000", "0000000000000000000000000000011000000010000000000000000000000000", "0000000000000000000000000000001100000001000000000000000000000000", "0000000000000000000000000000000011000000010000000000000000000000", "0000000000000000000000000000000001100000001000000000000000000000", "0000000000000000000000000000000000110000000100000000000000000000", "0000000000000000000000000000000000011000000010000000000000000000", "0000000000000000000000000000000000001100000001000000000000000000", "0000000000000000000000000000000000000110000000100000000000000000", "0000000000000000000000000000000000000011000000010000000000000000", "0000000000000000000000000000000000000000110000000100000000000000", "0000000000000000000000000000000000000000011000000010000000000000", "0000000000000000000000000000000000000000001100000001000000000000", "0000000000000000000000000000000000000000000110000000100000000000", "0000000000000000000000000000000000000000000011000000010000000000", "0000000000000000000000000000000000000000000001100000001000000000", "0000000000000000000000000000000000000000000000110000000100000000", "0000000000000000000000000000000000000000000000001100000001000000", "0000000000000000000000000000000000000000000000000110000000100000", "0000000000000000000000000000000000000000000000000011000000010000", "0000000000000000000000000000000000000000000000000001100000001000", "0000000000000000000000000000000000000000000000000000110000000100", "0000000000000000000000000000000000000000000000000000011000000010", "0000000000000000000000000000000000000000000000000000001100000001" ], [ "1000000011000000010000000000000000000000000000000000000000000000", "0100000001100000001000000000000000000000000000000000000000000000", "0010000000110000000100000000000000000000000000000000000000000000", "0001000000011000000010000000000000000000000000000000000000000000", "0000100000001100000001000000000000000000000000000000000000000000", "0000010000000110000000100000000000000000000000000000000000000000", "0000001000000011000000010000000000000000000000000000000000000000", "0000000010000000110000000100000000000000000000000000000000000000", "0000000001000000011000000010000000000000000000000000000000000000", "0000000000100000001100000001000000000000000000000000000000000000", "0000000000010000000110000000100000000000000000000000000000000000", "0000000000001000000011000000010000000000000000000000000000000000", "0000000000000100000001100000001000000000000000000000000000000000", "0000000000000010000000110000000100000000000000000000000000000000", "0000000000000000100000001100000001000000000000000000000000000000", "0000000000000000010000000110000000100000000000000000000000000000", "0000000000000000001000000011000000010000000000000000000000000000", "0000000000000000000100000001100000001000000000000000000000000000", "0000000000000000000010000000110000000100000000000000000000000000", "0000000000000000000001000000011000000010000000000000000000000000", "0000000000000000000000100000001100000001000000000000000000000000", "0000000000000000000000001000000011000000010000000000000000000000", "0000000000000000000000000100000001100000001000000000000000000000", "0000000000000000000000000010000000110000000100000000000000000000", "0000000000000000000000000001000000011000000010000000000000000000", "0000000000000000000000000000100000001100000001000000000000000000", "0000000000000000000000000000010000000110000000100000000000000000", "0000000000000000000000000000001000000011000000010000000000000000", "0000000000000000000000000000000010000000110000000100000000000000", "0000000000000000000000000000000001000000011000000010000000000000", "0000000000000000000000000000000000100000001100000001000000000000", "0000000000000000000000000000000000010000000110000000100000000000", "0000000000000000000000000000000000001000000011000000010000000000", "0000000000000000000000000000000000000100000001100000001000000000", "0000000000000000000000000000000000000010000000110000000100000000", "0000000000000000000000000000000000000000100000001100000001000000", "0000000000000000000000000000000000000000010000000110000000100000", "0000000000000000000000000000000000000000001000000011000000010000", "0000000000000000000000000000000000000000000100000001100000001000", "0000000000000000000000000000000000000000000010000000110000000100", "0000000000000000000000000000000000000000000001000000011000000010", "0000000000000000000000000000000000000000000000100000001100000001" ], [ "1111000000000000000000000000000000000000000000000000000000000000", "0111100000000000000000000000000000000000000000000000000000000000", "0011110000000000000000000000000000000000000000000000000000000000", "0001111000000000000000000000000000000000000000000000000000000000", "0000111100000000000000000000000000000000000000000000000000000000", "0000000011110000000000000000000000000000000000000000000000000000", "0000000001111000000000000000000000000000000000000000000000000000", "0000000000111100000000000000000000000000000000000000000000000000", "0000000000011110000000000000000000000000000000000000000000000000", "0000000000001111000000000000000000000000000000000000000000000000", "0000000000000000111100000000000000000000000000000000000000000000", "0000000000000000011110000000000000000000000000000000000000000000", "0000000000000000001111000000000000000000000000000000000000000000", "0000000000000000000111100000000000000000000000000000000000000000", "0000000000000000000011110000000000000000000000000000000000000000", "0000000000000000000000001111000000000000000000000000000000000000", "0000000000000000000000000111100000000000000000000000000000000000", "0000000000000000000000000011110000000000000000000000000000000000", "0000000000000000000000000001111000000000000000000000000000000000", "0000000000000000000000000000111100000000000000000000000000000000", "0000000000000000000000000000000011110000000000000000000000000000", "0000000000000000000000000000000001111000000000000000000000000000", "0000000000000000000000000000000000111100000000000000000000000000", "0000000000000000000000000000000000011110000000000000000000000000", "0000000000000000000000000000000000001111000000000000000000000000", "0000000000000000000000000000000000000000111100000000000000000000", "0000000000000000000000000000000000000000011110000000000000000000", "0000000000000000000000000000000000000000001111000000000000000000", "0000000000000000000000000000000000000000000111100000000000000000", "0000000000000000000000000000000000000000000011110000000000000000", "0000000000000000000000000000000000000000000000001111000000000000", "0000000000000000000000000000000000000000000000000111100000000000", "0000000000000000000000000000000000000000000000000011110000000000", "0000000000000000000000000000000000000000000000000001111000000000", "0000000000000000000000000000000000000000000000000000111100000000", "0000000000000000000000000000000000000000000000000000000011110000", "0000000000000000000000000000000000000000000000000000000001111000", "0000000000000000000000000000000000000000000000000000000000111100", "0000000000000000000000000000000000000000000000000000000000011110", "0000000000000000000000000000000000000000000000000000000000001111" ], [ "1100000001100000000000000000000000000000000000000000000000000000", "0110000000110000000000000000000000000000000000000000000000000000", "0011000000011000000000000000000000000000000000000000000000000000", "0001100000001100000000000000000000000000000000000000000000000000", "0000110000000110000000000000000000000000000000000000000000000000", "0000011000000011000000000000000000000000000000000000000000000000", "0000000011000000011000000000000000000000000000000000000000000000", "0000000001100000001100000000000000000000000000000000000000000000", "0000000000110000000110000000000000000000000000000000000000000000", "0000000000011000000011000000000000000000000000000000000000000000", "0000000000001100000001100000000000000000000000000000000000000000", "0000000000000110000000110000000000000000000000000000000000000000", "0000000000000000110000000110000000000000000000000000000000000000", "0000000000000000011000000011000000000000000000000000000000000000", "0000000000000000001100000001100000000000000000000000000000000000", "0000000000000000000110000000110000000000000000000000000000000000", "0000000000000000000011000000011000000000000000000000000000000000", "0000000000000000000001100000001100000000000000000000000000000000", "0000000000000000000000001100000001100000000000000000000000000000", "0000000000000000000000000110000000110000000000000000000000000000", "0000000000000000000000000011000000011000000000000000000000000000", "0000000000000000000000000001100000001100000000000000000000000000", "0000000000000000000000000000110000000110000000000000000000000000", "0000000000000000000000000000011000000011000000000000000000000000", "0000000000000000000000000000000011000000011000000000000000000000", "0000000000000000000000000000000001100000001100000000000000000000", "0000000000000000000000000000000000110000000110000000000000000000", "0000000000000000000000000000000000011000000011000000000000000000", "0000000000000000000000000000000000001100000001100000000000000000", "0000000000000000000000000000000000000110000000110000000000000000", "0000000000000000000000000000000000000000110000000110000000000000", "0000000000000000000000000000000000000000011000000011000000000000", "0000000000000000000000000000000000000000001100000001100000000000", "0000000000000000000000000000000000000000000110000000110000000000", "0000000000000000000000000000000000000000000011000000011000000000", "0000000000000000000000000000000000000000000001100000001100000000", "0000000000000000000000000000000000000000000000001100000001100000", "0000000000000000000000000000000000000000000000000110000000110000", "0000000000000000000000000000000000000000000000000011000000011000", "0000000000000000000000000000000000000000000000000001100000001100", "0000000000000000000000000000000000000000000000000000110000000110", "0000000000000000000000000000000000000000000000000000011000000011" ], [ "0100000011000000100000000000000000000000000000000000000000000000", "0010000001100000010000000000000000000000000000000000000000000000", "0001000000110000001000000000000000000000000000000000000000000000", "0000100000011000000100000000000000000000000000000000000000000000", "0000010000001100000010000000000000000000000000000000000000000000", "0000001000000110000001000000000000000000000000000000000000000000", "0000000100000011000000100000000000000000000000000000000000000000", "0000000001000000110000001000000000000000000000000000000000000000", "0000000000100000011000000100000000000000000000000000000000000000", "0000000000010000001100000010000000000000000000000000000000000000", "0000000000001000000110000001000000000000000000000000000000000000", "0000000000000100000011000000100000000000000000000000000000000000", "0000000000000010000001100000010000000000000000000000000000000000", "0000000000000001000000110000001000000000000000000000000000000000", "0000000000000000010000001100000010000000000000000000000000000000", "0000000000000000001000000110000001000000000000000000000000000000", "0000000000000000000100000011000000100000000000000000000000000000", "0000000000000000000010000001100000010000000000000000000000000000", "0000000000000000000001000000110000001000000000000000000000000000", "0000000000000000000000100000011000000100000000000000000000000000", "0000000000000000000000010000001100000010000000000000000000000000", "0000000000000000000000000100000011000000100000000000000000000000", "0000000000000000000000000010000001100000010000000000000000000000", "0000000000000000000000000001000000110000001000000000000000000000", "0000000000000000000000000000100000011000000100000000000000000000", "0000000000000000000000000000010000001100000010000000000000000000", "0000000000000000000000000000001000000110000001000000000000000000", "0000000000000000000000000000000100000011000000100000000000000000", "0000000000000000000000000000000001000000110000001000000000000000", "0000000000000000000000000000000000100000011000000100000000000000", "0000000000000000000000000000000000010000001100000010000000000000", "0000000000000000000000000000000000001000000110000001000000000000", "0000000000000000000000000000000000000100000011000000100000000000", "0000000000000000000000000000000000000010000001100000010000000000", "0000000000000000000000000000000000000001000000110000001000000000", "0000000000000000000000000000000000000000010000001100000010000000", "0000000000000000000000000000000000000000001000000110000001000000", "0000000000000000000000000000000000000000000100000011000000100000", "0000000000000000000000000000000000000000000010000001100000010000", "0000000000000000000000000000000000000000000001000000110000001000", "0000000000000000000000000000000000000000000000100000011000000100", "0000000000000000000000000000000000000000000000010000001100000010" ], [ "1000000011000000100000000000000000000000000000000000000000000000", "0100000001100000010000000000000000000000000000000000000000000000", "0010000000110000001000000000000000000000000000000000000000000000", "0001000000011000000100000000000000000000000000000000000000000000", "0000100000001100000010000000000000000000000000000000000000000000", "0000010000000110000001000000000000000000000000000000000000000000", "0000001000000011000000100000000000000000000000000000000000000000", "0000000010000000110000001000000000000000000000000000000000000000", "0000000001000000011000000100000000000000000000000000000000000000", "0000000000100000001100000010000000000000000000000000000000000000", "0000000000010000000110000001000000000000000000000000000000000000", "0000000000001000000011000000100000000000000000000000000000000000", "0000000000000100000001100000010000000000000000000000000000000000", "0000000000000010000000110000001000000000000000000000000000000000", "0000000000000000100000001100000010000000000000000000000000000000", "0000000000000000010000000110000001000000000000000000000000000000", "0000000000000000001000000011000000100000000000000000000000000000", "0000000000000000000100000001100000010000000000000000000000000000", "0000000000000000000010000000110000001000000000000000000000000000", "0000000000000000000001000000011000000100000000000000000000000000", "0000000000000000000000100000001100000010000000000000000000000000", "0000000000000000000000001000000011000000100000000000000000000000", "0000000000000000000000000100000001100000010000000000000000000000", "0000000000000000000000000010000000110000001000000000000000000000", "0000000000000000000000000001000000011000000100000000000000000000", "0000000000000000000000000000100000001100000010000000000000000000", "0000000000000000000000000000010000000110000001000000000000000000", "0000000000000000000000000000001000000011000000100000000000000000", "0000000000000000000000000000000010000000110000001000000000000000", "0000000000000000000000000000000001000000011000000100000000000000", "0000000000000000000000000000000000100000001100000010000000000000", "0000000000000000000000000000000000010000000110000001000000000000", "0000000000000000000000000000000000001000000011000000100000000000", "0000000000000000000000000000000000000100000001100000010000000000", "0000000000000000000000000000000000000010000000110000001000000000", "0000000000000000000000000000000000000000100000001100000010000000", "0000000000000000000000000000000000000000010000000110000001000000", "0000000000000000000000000000000000000000001000000011000000100000", "0000000000000000000000000000000000000000000100000001100000010000", "0000000000000000000000000000000000000000000010000000110000001000", "0000000000000000000000000000000000000000000001000000011000000100", "0000000000000000000000000000000000000000000000100000001100000010" ], [ "1110000010000000100000000000000000000000000000000000000000000000", "0111000001000000010000000000000000000000000000000000000000000000", "0011100000100000001000000000000000000000000000000000000000000000", "0001110000010000000100000000000000000000000000000000000000000000", "0000111000001000000010000000000000000000000000000000000000000000", "0000011100000100000001000000000000000000000000000000000000000000", "0000000011100000100000001000000000000000000000000000000000000000", "0000000001110000010000000100000000000000000000000000000000000000", "0000000000111000001000000010000000000000000000000000000000000000", "0000000000011100000100000001000000000000000000000000000000000000", "0000000000001110000010000000100000000000000000000000000000000000", "0000000000000111000001000000010000000000000000000000000000000000", "0000000000000000111000001000000010000000000000000000000000000000", "0000000000000000011100000100000001000000000000000000000000000000", "0000000000000000001110000010000000100000000000000000000000000000", "0000000000000000000111000001000000010000000000000000000000000000", "0000000000000000000011100000100000001000000000000000000000000000", "0000000000000000000001110000010000000100000000000000000000000000", "0000000000000000000000001110000010000000100000000000000000000000", "0000000000000000000000000111000001000000010000000000000000000000", "0000000000000000000000000011100000100000001000000000000000000000", "0000000000000000000000000001110000010000000100000000000000000000", "0000000000000000000000000000111000001000000010000000000000000000", "0000000000000000000000000000011100000100000001000000000000000000", "0000000000000000000000000000000011100000100000001000000000000000", "0000000000000000000000000000000001110000010000000100000000000000", "0000000000000000000000000000000000111000001000000010000000000000", "0000000000000000000000000000000000011100000100000001000000000000", "0000000000000000000000000000000000001110000010000000100000000000", "0000000000000000000000000000000000000111000001000000010000000000", "0000000000000000000000000000000000000000111000001000000010000000", "0000000000000000000000000000000000000000011100000100000001000000", "0000000000000000000000000000000000000000001110000010000000100000", "0000000000000000000000000000000000000000000111000001000000010000", "0000000000000000000000000000000000000000000011100000100000001000", "0000000000000000000000000000000000000000000001110000010000000100" ], [ "1000000010000000100000001000000010000000000000000000000000000000", "0100000001000000010000000100000001000000000000000000000000000000", "0010000000100000001000000010000000100000000000000000000000000000", "0001000000010000000100000001000000010000000000000000000000000000", "0000100000001000000010000000100000001000000000000000000000000000", "0000010000000100000001000000010000000100000000000000000000000000", "0000001000000010000000100000001000000010000000000000000000000000", "0000000100000001000000010000000100000001000000000000000000000000", "0000000010000000100000001000000010000000100000000000000000000000", "0000000001000000010000000100000001000000010000000000000000000000", "0000000000100000001000000010000000100000001000000000000000000000", "0000000000010000000100000001000000010000000100000000000000000000", "0000000000001000000010000000100000001000000010000000000000000000", "0000000000000100000001000000010000000100000001000000000000000000", "0000000000000010000000100000001000000010000000100000000000000000", "0000000000000001000000010000000100000001000000010000000000000000", "0000000000000000100000001000000010000000100000001000000000000000", "0000000000000000010000000100000001000000010000000100000000000000", "0000000000000000001000000010000000100000001000000010000000000000", "0000000000000000000100000001000000010000000100000001000000000000", "0000000000000000000010000000100000001000000010000000100000000000", "0000000000000000000001000000010000000100000001000000010000000000", "0000000000000000000000100000001000000010000000100000001000000000", "0000000000000000000000010000000100000001000000010000000100000000", "0000000000000000000000001000000010000000100000001000000010000000", "0000000000000000000000000100000001000000010000000100000001000000", "0000000000000000000000000010000000100000001000000010000000100000", "0000000000000000000000000001000000010000000100000001000000010000", "0000000000000000000000000000100000001000000010000000100000001000", "0000000000000000000000000000010000000100000001000000010000000100", "0000000000000000000000000000001000000010000000100000001000000010", "0000000000000000000000000000000100000001000000010000000100000001" ], [ "1000000010000000111000000000000000000000000000000000000000000000", "0100000001000000011100000000000000000000000000000000000000000000", "0010000000100000001110000000000000000000000000000000000000000000", "0001000000010000000111000000000000000000000000000000000000000000", "0000100000001000000011100000000000000000000000000000000000000000", "0000010000000100000001110000000000000000000000000000000000000000", "0000000010000000100000001110000000000000000000000000000000000000", "0000000001000000010000000111000000000000000000000000000000000000", "0000000000100000001000000011100000000000000000000000000000000000", "0000000000010000000100000001110000000000000000000000000000000000", "0000000000001000000010000000111000000000000000000000000000000000", "0000000000000100000001000000011100000000000000000000000000000000", "0000000000000000100000001000000011100000000000000000000000000000", "0000000000000000010000000100000001110000000000000000000000000000", "0000000000000000001000000010000000111000000000000000000000000000", "0000000000000000000100000001000000011100000000000000000000000000", "0000000000000000000010000000100000001110000000000000000000000000", "0000000000000000000001000000010000000111000000000000000000000000", "0000000000000000000000001000000010000000111000000000000000000000", "0000000000000000000000000100000001000000011100000000000000000000", "0000000000000000000000000010000000100000001110000000000000000000", "0000000000000000000000000001000000010000000111000000000000000000", "0000000000000000000000000000100000001000000011100000000000000000", "0000000000000000000000000000010000000100000001110000000000000000", "0000000000000000000000000000000010000000100000001110000000000000", "0000000000000000000000000000000001000000010000000111000000000000", "0000000000000000000000000000000000100000001000000011100000000000", "0000000000000000000000000000000000010000000100000001110000000000", "0000000000000000000000000000000000001000000010000000111000000000", "0000000000000000000000000000000000000100000001000000011100000000", "0000000000000000000000000000000000000000100000001000000011100000", "0000000000000000000000000000000000000000010000000100000001110000", "0000000000000000000000000000000000000000001000000010000000111000", "0000000000000000000000000000000000000000000100000001000000011100", "0000000000000000000000000000000000000000000010000000100000001110", "0000000000000000000000000000000000000000000001000000010000000111" ], [ "0010000000100000111000000000000000000000000000000000000000000000", "0001000000010000011100000000000000000000000000000000000000000000", "0000100000001000001110000000000000000000000000000000000000000000", "0000010000000100000111000000000000000000000000000000000000000000", "0000001000000010000011100000000000000000000000000000000000000000", "0000000100000001000001110000000000000000000000000000000000000000", "0000000000100000001000001110000000000000000000000000000000000000", "0000000000010000000100000111000000000000000000000000000000000000", "0000000000001000000010000011100000000000000000000000000000000000", "0000000000000100000001000001110000000000000000000000000000000000", "0000000000000010000000100000111000000000000000000000000000000000", "0000000000000001000000010000011100000000000000000000000000000000", "0000000000000000001000000010000011100000000000000000000000000000", "0000000000000000000100000001000001110000000000000000000000000000", "0000000000000000000010000000100000111000000000000000000000000000", "0000000000000000000001000000010000011100000000000000000000000000", "0000000000000000000000100000001000001110000000000000000000000000", "0000000000000000000000010000000100000111000000000000000000000000", "0000000000000000000000000010000000100000111000000000000000000000", "0000000000000000000000000001000000010000011100000000000000000000", "0000000000000000000000000000100000001000001110000000000000000000", "0000000000000000000000000000010000000100000111000000000000000000", "0000000000000000000000000000001000000010000011100000000000000000", "0000000000000000000000000000000100000001000001110000000000000000", "0000000000000000000000000000000000100000001000001110000000000000", "0000000000000000000000000000000000010000000100000111000000000000", "0000000000000000000000000000000000001000000010000011100000000000", "0000000000000000000000000000000000000100000001000001110000000000", "0000000000000000000000000000000000000010000000100000111000000000", "0000000000000000000000000000000000000001000000010000011100000000", "0000000000000000000000000000000000000000001000000010000011100000", "0000000000000000000000000000000000000000000100000001000001110000", "0000000000000000000000000000000000000000000010000000100000111000", "0000000000000000000000000000000000000000000001000000010000011100", "0000000000000000000000000000000000000000000000100000001000001110", "0000000000000000000000000000000000000000000000010000000100000111" ], [ "0100000011000000010000000000000000000000000000000000000000000000", "0010000001100000001000000000000000000000000000000000000000000000", "0001000000110000000100000000000000000000000000000000000000000000", "0000100000011000000010000000000000000000000000000000000000000000", "0000010000001100000001000000000000000000000000000000000000000000", "0000001000000110000000100000000000000000000000000000000000000000", "0000000100000011000000010000000000000000000000000000000000000000", "0000000001000000110000000100000000000000000000000000000000000000", "0000000000100000011000000010000000000000000000000000000000000000", "0000000000010000001100000001000000000000000000000000000000000000", "0000000000001000000110000000100000000000000000000000000000000000", "0000000000000100000011000000010000000000000000000000000000000000", "0000000000000010000001100000001000000000000000000000000000000000", "0000000000000001000000110000000100000000000000000000000000000000", "0000000000000000010000001100000001000000000000000000000000000000", "0000000000000000001000000110000000100000000000000000000000000000", "0000000000000000000100000011000000010000000000000000000000000000", "0000000000000000000010000001100000001000000000000000000000000000", "0000000000000000000001000000110000000100000000000000000000000000", "0000000000000000000000100000011000000010000000000000000000000000", "0000000000000000000000010000001100000001000000000000000000000000", "0000000000000000000000000100000011000000010000000000000000000000", "0000000000000000000000000010000001100000001000000000000000000000", "0000000000000000000000000001000000110000000100000000000000000000", "0000000000000000000000000000100000011000000010000000000000000000", "0000000000000000000000000000010000001100000001000000000000000000", "0000000000000000000000000000001000000110000000100000000000000000", "0000000000000000000000000000000100000011000000010000000000000000", "0000000000000000000000000000000001000000110000000100000000000000", "0000000000000000000000000000000000100000011000000010000000000000", "0000000000000000000000000000000000010000001100000001000000000000", "0000000000000000000000000000000000001000000110000000100000000000", "0000000000000000000000000000000000000100000011000000010000000000", "0000000000000000000000000000000000000010000001100000001000000000", "0000000000000000000000000000000000000001000000110000000100000000", "0000000000000000000000000000000000000000010000001100000001000000", "0000000000000000000000000000000000000000001000000110000000100000", "0000000000000000000000000000000000000000000100000011000000010000", "0000000000000000000000000000000000000000000010000001100000001000", "0000000000000000000000000000000000000000000001000000110000000100", "0000000000000000000000000000000000000000000000100000011000000010", "0000000000000000000000000000000000000000000000010000001100000001" ], [ "1110000001000000000000000000000000000000000000000000000000000000", "0111000000100000000000000000000000000000000000000000000000000000", "0011100000010000000000000000000000000000000000000000000000000000", "0001110000001000000000000000000000000000000000000000000000000000", "0000111000000100000000000000000000000000000000000000000000000000", "0000011100000010000000000000000000000000000000000000000000000000", "0000000011100000010000000000000000000000000000000000000000000000", "0000000001110000001000000000000000000000000000000000000000000000", "0000000000111000000100000000000000000000000000000000000000000000", "0000000000011100000010000000000000000000000000000000000000000000", "0000000000001110000001000000000000000000000000000000000000000000", "0000000000000111000000100000000000000000000000000000000000000000", "0000000000000000111000000100000000000000000000000000000000000000", "0000000000000000011100000010000000000000000000000000000000000000", "0000000000000000001110000001000000000000000000000000000000000000", "0000000000000000000111000000100000000000000000000000000000000000", "0000000000000000000011100000010000000000000000000000000000000000", "0000000000000000000001110000001000000000000000000000000000000000", "0000000000000000000000001110000001000000000000000000000000000000", "0000000000000000000000000111000000100000000000000000000000000000", "0000000000000000000000000011100000010000000000000000000000000000", "0000000000000000000000000001110000001000000000000000000000000000", "0000000000000000000000000000111000000100000000000000000000000000", "0000000000000000000000000000011100000010000000000000000000000000", "0000000000000000000000000000000011100000010000000000000000000000", "0000000000000000000000000000000001110000001000000000000000000000", "0000000000000000000000000000000000111000000100000000000000000000", "0000000000000000000000000000000000011100000010000000000000000000", "0000000000000000000000000000000000001110000001000000000000000000", "0000000000000000000000000000000000000111000000100000000000000000", "0000000000000000000000000000000000000000111000000100000000000000", "0000000000000000000000000000000000000000011100000010000000000000", "0000000000000000000000000000000000000000001110000001000000000000", "0000000000000000000000000000000000000000000111000000100000000000", "0000000000000000000000000000000000000000000011100000010000000000", "0000000000000000000000000000000000000000000001110000001000000000", "0000000000000000000000000000000000000000000000001110000001000000", "0000000000000000000000000000000000000000000000000111000000100000", "0000000000000000000000000000000000000000000000000011100000010000", "0000000000000000000000000000000000000000000000000001110000001000", "0000000000000000000000000000000000000000000000000000111000000100", "0000000000000000000000000000000000000000000000000000011100000010" ], [ "1000000011000000000000000000000000000000000000000000000000000000", "0100000001100000000000000000000000000000000000000000000000000000", "0010000000110000000000000000000000000000000000000000000000000000", "0001000000011000000000000000000000000000000000000000000000000000", "0000100000001100000000000000000000000000000000000000000000000000", "0000010000000110000000000000000000000000000000000000000000000000", "0000001000000011000000000000000000000000000000000000000000000000", "0000000010000000110000000000000000000000000000000000000000000000", "0000000001000000011000000000000000000000000000000000000000000000", "0000000000100000001100000000000000000000000000000000000000000000", "0000000000010000000110000000000000000000000000000000000000000000", "0000000000001000000011000000000000000000000000000000000000000000", "0000000000000100000001100000000000000000000000000000000000000000", "0000000000000010000000110000000000000000000000000000000000000000", "0000000000000000100000001100000000000000000000000000000000000000", "0000000000000000010000000110000000000000000000000000000000000000", "0000000000000000001000000011000000000000000000000000000000000000", "0000000000000000000100000001100000000000000000000000000000000000", "0000000000000000000010000000110000000000000000000000000000000000", "0000000000000000000001000000011000000000000000000000000000000000", "0000000000000000000000100000001100000000000000000000000000000000", "0000000000000000000000001000000011000000000000000000000000000000", "0000000000000000000000000100000001100000000000000000000000000000", "0000000000000000000000000010000000110000000000000000000000000000", "0000000000000000000000000001000000011000000000000000000000000000", "0000000000000000000000000000100000001100000000000000000000000000", "0000000000000000000000000000010000000110000000000000000000000000", "0000000000000000000000000000001000000011000000000000000000000000", "0000000000000000000000000000000010000000110000000000000000000000", "0000000000000000000000000000000001000000011000000000000000000000", "0000000000000000000000000000000000100000001100000000000000000000", "0000000000000000000000000000000000010000000110000000000000000000", "0000000000000000000000000000000000001000000011000000000000000000", "0000000000000000000000000000000000000100000001100000000000000000", "0000000000000000000000000000000000000010000000110000000000000000", "0000000000000000000000000000000000000000100000001100000000000000", "0000000000000000000000000000000000000000010000000110000000000000", "0000000000000000000000000000000000000000001000000011000000000000", "0000000000000000000000000000000000000000000100000001100000000000", "0000000000000000000000000000000000000000000010000000110000000000", "0000000000000000000000000000000000000000000001000000011000000000", "0000000000000000000000000000000000000000000000100000001100000000", "0000000000000000000000000000000000000000000000001000000011000000", "0000000000000000000000000000000000000000000000000100000001100000", "0000000000000000000000000000000000000000000000000010000000110000", "0000000000000000000000000000000000000000000000000001000000011000", "0000000000000000000000000000000000000000000000000000100000001100", "0000000000000000000000000000000000000000000000000000010000000110", "0000000000000000000000000000000000000000000000000000001000000011" ], [ "0100000011000000000000000000000000000000000000000000000000000000", "0010000001100000000000000000000000000000000000000000000000000000", "0001000000110000000000000000000000000000000000000000000000000000", "0000100000011000000000000000000000000000000000000000000000000000", "0000010000001100000000000000000000000000000000000000000000000000", "0000001000000110000000000000000000000000000000000000000000000000", "0000000100000011000000000000000000000000000000000000000000000000", "0000000001000000110000000000000000000000000000000000000000000000", "0000000000100000011000000000000000000000000000000000000000000000", "0000000000010000001100000000000000000000000000000000000000000000", "0000000000001000000110000000000000000000000000000000000000000000", "0000000000000100000011000000000000000000000000000000000000000000", "0000000000000010000001100000000000000000000000000000000000000000", "0000000000000001000000110000000000000000000000000000000000000000", "0000000000000000010000001100000000000000000000000000000000000000", "0000000000000000001000000110000000000000000000000000000000000000", "0000000000000000000100000011000000000000000000000000000000000000", "0000000000000000000010000001100000000000000000000000000000000000", "0000000000000000000001000000110000000000000000000000000000000000", "0000000000000000000000100000011000000000000000000000000000000000", "0000000000000000000000010000001100000000000000000000000000000000", "0000000000000000000000000100000011000000000000000000000000000000", "0000000000000000000000000010000001100000000000000000000000000000", "0000000000000000000000000001000000110000000000000000000000000000", "0000000000000000000000000000100000011000000000000000000000000000", "0000000000000000000000000000010000001100000000000000000000000000", "0000000000000000000000000000001000000110000000000000000000000000", "0000000000000000000000000000000100000011000000000000000000000000", "0000000000000000000000000000000001000000110000000000000000000000", "0000000000000000000000000000000000100000011000000000000000000000", "0000000000000000000000000000000000010000001100000000000000000000", "0000000000000000000000000000000000001000000110000000000000000000", "0000000000000000000000000000000000000100000011000000000000000000", "0000000000000000000000000000000000000010000001100000000000000000", "0000000000000000000000000000000000000001000000110000000000000000", "0000000000000000000000000000000000000000010000001100000000000000", "0000000000000000000000000000000000000000001000000110000000000000", "0000000000000000000000000000000000000000000100000011000000000000", "0000000000000000000000000000000000000000000010000001100000000000", "0000000000000000000000000000000000000000000001000000110000000000", "0000000000000000000000000000000000000000000000100000011000000000", "0000000000000000000000000000000000000000000000010000001100000000", "0000000000000000000000000000000000000000000000000100000011000000", "0000000000000000000000000000000000000000000000000010000001100000", "0000000000000000000000000000000000000000000000000001000000110000", "0000000000000000000000000000000000000000000000000000100000011000", "0000000000000000000000000000000000000000000000000000010000001100", "0000000000000000000000000000000000000000000000000000001000000110", "0000000000000000000000000000000000000000000000000000000100000011" ], [ "0100000001000000110000000000000000000000000000000000000000000000", "0010000000100000011000000000000000000000000000000000000000000000", "0001000000010000001100000000000000000000000000000000000000000000", "0000100000001000000110000000000000000000000000000000000000000000", "0000010000000100000011000000000000000000000000000000000000000000", "0000001000000010000001100000000000000000000000000000000000000000", "0000000100000001000000110000000000000000000000000000000000000000", "0000000001000000010000001100000000000000000000000000000000000000", "0000000000100000001000000110000000000000000000000000000000000000", "0000000000010000000100000011000000000000000000000000000000000000", "0000000000001000000010000001100000000000000000000000000000000000", "0000000000000100000001000000110000000000000000000000000000000000", "0000000000000010000000100000011000000000000000000000000000000000", "0000000000000001000000010000001100000000000000000000000000000000", "0000000000000000010000000100000011000000000000000000000000000000", "0000000000000000001000000010000001100000000000000000000000000000", "0000000000000000000100000001000000110000000000000000000000000000", "0000000000000000000010000000100000011000000000000000000000000000", "0000000000000000000001000000010000001100000000000000000000000000", "0000000000000000000000100000001000000110000000000000000000000000", "0000000000000000000000010000000100000011000000000000000000000000", "0000000000000000000000000100000001000000110000000000000000000000", "0000000000000000000000000010000000100000011000000000000000000000", "0000000000000000000000000001000000010000001100000000000000000000", "0000000000000000000000000000100000001000000110000000000000000000", "0000000000000000000000000000010000000100000011000000000000000000", "0000000000000000000000000000001000000010000001100000000000000000", "0000000000000000000000000000000100000001000000110000000000000000", "0000000000000000000000000000000001000000010000001100000000000000", "0000000000000000000000000000000000100000001000000110000000000000", "0000000000000000000000000000000000010000000100000011000000000000", "0000000000000000000000000000000000001000000010000001100000000000", "0000000000000000000000000000000000000100000001000000110000000000", "0000000000000000000000000000000000000010000000100000011000000000", "0000000000000000000000000000000000000001000000010000001100000000", "0000000000000000000000000000000000000000010000000100000011000000", "0000000000000000000000000000000000000000001000000010000001100000", "0000000000000000000000000000000000000000000100000001000000110000", "0000000000000000000000000000000000000000000010000000100000011000", "0000000000000000000000000000000000000000000001000000010000001100", "0000000000000000000000000000000000000000000000100000001000000110", "0000000000000000000000000000000000000000000000010000000100000011" ], [ "1110000000100000000000000000000000000000000000000000000000000000", "0111000000010000000000000000000000000000000000000000000000000000", "0011100000001000000000000000000000000000000000000000000000000000", "0001110000000100000000000000000000000000000000000000000000000000", "0000111000000010000000000000000000000000000000000000000000000000", "0000011100000001000000000000000000000000000000000000000000000000", "0000000011100000001000000000000000000000000000000000000000000000", "0000000001110000000100000000000000000000000000000000000000000000", "0000000000111000000010000000000000000000000000000000000000000000", "0000000000011100000001000000000000000000000000000000000000000000", "0000000000001110000000100000000000000000000000000000000000000000", "0000000000000111000000010000000000000000000000000000000000000000", "0000000000000000111000000010000000000000000000000000000000000000", "0000000000000000011100000001000000000000000000000000000000000000", "0000000000000000001110000000100000000000000000000000000000000000", "0000000000000000000111000000010000000000000000000000000000000000", "0000000000000000000011100000001000000000000000000000000000000000", "0000000000000000000001110000000100000000000000000000000000000000", "0000000000000000000000001110000000100000000000000000000000000000", "0000000000000000000000000111000000010000000000000000000000000000", "0000000000000000000000000011100000001000000000000000000000000000", "0000000000000000000000000001110000000100000000000000000000000000", "0000000000000000000000000000111000000010000000000000000000000000", "0000000000000000000000000000011100000001000000000000000000000000", "0000000000000000000000000000000011100000001000000000000000000000", "0000000000000000000000000000000001110000000100000000000000000000", "0000000000000000000000000000000000111000000010000000000000000000", "0000000000000000000000000000000000011100000001000000000000000000", "0000000000000000000000000000000000001110000000100000000000000000", "0000000000000000000000000000000000000111000000010000000000000000", "0000000000000000000000000000000000000000111000000010000000000000", "0000000000000000000000000000000000000000011100000001000000000000", "0000000000000000000000000000000000000000001110000000100000000000", "0000000000000000000000000000000000000000000111000000010000000000", "0000000000000000000000000000000000000000000011100000001000000000", "0000000000000000000000000000000000000000000001110000000100000000", "0000000000000000000000000000000000000000000000001110000000100000", "0000000000000000000000000000000000000000000000000111000000010000", "0000000000000000000000000000000000000000000000000011100000001000", "0000000000000000000000000000000000000000000000000001110000000100", "0000000000000000000000000000000000000000000000000000111000000010", "0000000000000000000000000000000000000000000000000000011100000001" ], [ "1100000010000000100000000000000000000000000000000000000000000000", "0110000001000000010000000000000000000000000000000000000000000000", "0011000000100000001000000000000000000000000000000000000000000000", "0001100000010000000100000000000000000000000000000000000000000000", "0000110000001000000010000000000000000000000000000000000000000000", "0000011000000100000001000000000000000000000000000000000000000000", "0000001100000010000000100000000000000000000000000000000000000000", "0000000011000000100000001000000000000000000000000000000000000000", "0000000001100000010000000100000000000000000000000000000000000000", "0000000000110000001000000010000000000000000000000000000000000000", "0000000000011000000100000001000000000000000000000000000000000000", "0000000000001100000010000000100000000000000000000000000000000000", "0000000000000110000001000000010000000000000000000000000000000000", "0000000000000011000000100000001000000000000000000000000000000000", "0000000000000000110000001000000010000000000000000000000000000000", "0000000000000000011000000100000001000000000000000000000000000000", "0000000000000000001100000010000000100000000000000000000000000000", "0000000000000000000110000001000000010000000000000000000000000000", "0000000000000000000011000000100000001000000000000000000000000000", "0000000000000000000001100000010000000100000000000000000000000000", "0000000000000000000000110000001000000010000000000000000000000000", "0000000000000000000000001100000010000000100000000000000000000000", "0000000000000000000000000110000001000000010000000000000000000000", "0000000000000000000000000011000000100000001000000000000000000000", "0000000000000000000000000001100000010000000100000000000000000000", "0000000000000000000000000000110000001000000010000000000000000000", "0000000000000000000000000000011000000100000001000000000000000000", "0000000000000000000000000000001100000010000000100000000000000000", "0000000000000000000000000000000011000000100000001000000000000000", "0000000000000000000000000000000001100000010000000100000000000000", "0000000000000000000000000000000000110000001000000010000000000000", "0000000000000000000000000000000000011000000100000001000000000000", "0000000000000000000000000000000000001100000010000000100000000000", "0000000000000000000000000000000000000110000001000000010000000000", "0000000000000000000000000000000000000011000000100000001000000000", "0000000000000000000000000000000000000000110000001000000010000000", "0000000000000000000000000000000000000000011000000100000001000000", "0000000000000000000000000000000000000000001100000010000000100000", "0000000000000000000000000000000000000000000110000001000000010000", "0000000000000000000000000000000000000000000011000000100000001000", "0000000000000000000000000000000000000000000001100000010000000100", "0000000000000000000000000000000000000000000000110000001000000010" ], [ "1100000001000000010000000000000000000000000000000000000000000000", "0110000000100000001000000000000000000000000000000000000000000000", "0011000000010000000100000000000000000000000000000000000000000000", "0001100000001000000010000000000000000000000000000000000000000000", "0000110000000100000001000000000000000000000000000000000000000000", "0000011000000010000000100000000000000000000000000000000000000000", "0000001100000001000000010000000000000000000000000000000000000000", "0000000011000000010000000100000000000000000000000000000000000000", "0000000001100000001000000010000000000000000000000000000000000000", "0000000000110000000100000001000000000000000000000000000000000000", "0000000000011000000010000000100000000000000000000000000000000000", "0000000000001100000001000000010000000000000000000000000000000000", "0000000000000110000000100000001000000000000000000000000000000000", "0000000000000011000000010000000100000000000000000000000000000000", "0000000000000000110000000100000001000000000000000000000000000000", "0000000000000000011000000010000000100000000000000000000000000000", "0000000000000000001100000001000000010000000000000000000000000000", "0000000000000000000110000000100000001000000000000000000000000000", "0000000000000000000011000000010000000100000000000000000000000000", "0000000000000000000001100000001000000010000000000000000000000000", "0000000000000000000000110000000100000001000000000000000000000000", "0000000000000000000000001100000001000000010000000000000000000000", "0000000000000000000000000110000000100000001000000000000000000000", "0000000000000000000000000011000000010000000100000000000000000000", "0000000000000000000000000001100000001000000010000000000000000000", "0000000000000000000000000000110000000100000001000000000000000000", "0000000000000000000000000000011000000010000000100000000000000000", "0000000000000000000000000000001100000001000000010000000000000000", "0000000000000000000000000000000011000000010000000100000000000000", "0000000000000000000000000000000001100000001000000010000000000000", "0000000000000000000000000000000000110000000100000001000000000000", "0000000000000000000000000000000000011000000010000000100000000000", "0000000000000000000000000000000000001100000001000000010000000000", "0000000000000000000000000000000000000110000000100000001000000000", "0000000000000000000000000000000000000011000000010000000100000000", "0000000000000000000000000000000000000000110000000100000001000000", "0000000000000000000000000000000000000000011000000010000000100000", "0000000000000000000000000000000000000000001100000001000000010000", "0000000000000000000000000000000000000000000110000000100000001000", "0000000000000000000000000000000000000000000011000000010000000100", "0000000000000000000000000000000000000000000001100000001000000010", "0000000000000000000000000000000000000000000000110000000100000001" ], [ "0010000011100000000000000000000000000000000000000000000000000000", "0001000001110000000000000000000000000000000000000000000000000000", "0000100000111000000000000000000000000000000000000000000000000000", "0000010000011100000000000000000000000000000000000000000000000000", "0000001000001110000000000000000000000000000000000000000000000000", "0000000100000111000000000000000000000000000000000000000000000000", "0000000000100000111000000000000000000000000000000000000000000000", "0000000000010000011100000000000000000000000000000000000000000000", "0000000000001000001110000000000000000000000000000000000000000000", "0000000000000100000111000000000000000000000000000000000000000000", "0000000000000010000011100000000000000000000000000000000000000000", "0000000000000001000001110000000000000000000000000000000000000000", "0000000000000000001000001110000000000000000000000000000000000000", "0000000000000000000100000111000000000000000000000000000000000000", "0000000000000000000010000011100000000000000000000000000000000000", "0000000000000000000001000001110000000000000000000000000000000000", "0000000000000000000000100000111000000000000000000000000000000000", "0000000000000000000000010000011100000000000000000000000000000000", "0000000000000000000000000010000011100000000000000000000000000000", "0000000000000000000000000001000001110000000000000000000000000000", "0000000000000000000000000000100000111000000000000000000000000000", "0000000000000000000000000000010000011100000000000000000000000000", "0000000000000000000000000000001000001110000000000000000000000000", "0000000000000000000000000000000100000111000000000000000000000000", "0000000000000000000000000000000000100000111000000000000000000000", "0000000000000000000000000000000000010000011100000000000000000000", "0000000000000000000000000000000000001000001110000000000000000000", "0000000000000000000000000000000000000100000111000000000000000000", "0000000000000000000000000000000000000010000011100000000000000000", "0000000000000000000000000000000000000001000001110000000000000000", "0000000000000000000000000000000000000000001000001110000000000000", "0000000000000000000000000000000000000000000100000111000000000000", "0000000000000000000000000000000000000000000010000011100000000000", "0000000000000000000000000000000000000000000001000001110000000000", "0000000000000000000000000000000000000000000000100000111000000000", "0000000000000000000000000000000000000000000000010000011100000000", "0000000000000000000000000000000000000000000000000010000011100000", "0000000000000000000000000000000000000000000000000001000001110000", "0000000000000000000000000000000000000000000000000000100000111000", "0000000000000000000000000000000000000000000000000000010000011100", "0000000000000000000000000000000000000000000000000000001000001110", "0000000000000000000000000000000000000000000000000000000100000111" ], [ "1110000010000000000000000000000000000000000000000000000000000000", "0111000001000000000000000000000000000000000000000000000000000000", "0011100000100000000000000000000000000000000000000000000000000000", "0001110000010000000000000000000000000000000000000000000000000000", "0000111000001000000000000000000000000000000000000000000000000000", "0000011100000100000000000000000000000000000000000000000000000000", "0000000011100000100000000000000000000000000000000000000000000000", "0000000001110000010000000000000000000000000000000000000000000000", "0000000000111000001000000000000000000000000000000000000000000000", "0000000000011100000100000000000000000000000000000000000000000000", "0000000000001110000010000000000000000000000000000000000000000000", "0000000000000111000001000000000000000000000000000000000000000000", "0000000000000000111000001000000000000000000000000000000000000000", "0000000000000000011100000100000000000000000000000000000000000000", "0000000000000000001110000010000000000000000000000000000000000000", "0000000000000000000111000001000000000000000000000000000000000000", "0000000000000000000011100000100000000000000000000000000000000000", "0000000000000000000001110000010000000000000000000000000000000000", "0000000000000000000000001110000010000000000000000000000000000000", "0000000000000000000000000111000001000000000000000000000000000000", "0000000000000000000000000011100000100000000000000000000000000000", "0000000000000000000000000001110000010000000000000000000000000000", "0000000000000000000000000000111000001000000000000000000000000000", "0000000000000000000000000000011100000100000000000000000000000000", "0000000000000000000000000000000011100000100000000000000000000000", "0000000000000000000000000000000001110000010000000000000000000000", "0000000000000000000000000000000000111000001000000000000000000000", "0000000000000000000000000000000000011100000100000000000000000000", "0000000000000000000000000000000000001110000010000000000000000000", "0000000000000000000000000000000000000111000001000000000000000000", "0000000000000000000000000000000000000000111000001000000000000000", "0000000000000000000000000000000000000000011100000100000000000000", "0000000000000000000000000000000000000000001110000010000000000000", "0000000000000000000000000000000000000000000111000001000000000000", "0000000000000000000000000000000000000000000011100000100000000000", "0000000000000000000000000000000000000000000001110000010000000000", "0000000000000000000000000000000000000000000000001110000010000000", "0000000000000000000000000000000000000000000000000111000001000000", "0000000000000000000000000000000000000000000000000011100000100000", "0000000000000000000000000000000000000000000000000001110000010000", "0000000000000000000000000000000000000000000000000000111000001000", "0000000000000000000000000000000000000000000000000000011100000100" ], [ "1110000011100000000000000000000000000000000000000000000000000000", "0111000001110000000000000000000000000000000000000000000000000000", "0011100000111000000000000000000000000000000000000000000000000000", "0001110000011100000000000000000000000000000000000000000000000000", "0000111000001110000000000000000000000000000000000000000000000000", "0000011100000111000000000000000000000000000000000000000000000000", "0000000011100000111000000000000000000000000000000000000000000000", "0000000001110000011100000000000000000000000000000000000000000000", "0000000000111000001110000000000000000000000000000000000000000000", "0000000000011100000111000000000000000000000000000000000000000000", "0000000000001110000011100000000000000000000000000000000000000000", "0000000000000111000001110000000000000000000000000000000000000000", "0000000000000000111000001110000000000000000000000000000000000000", "0000000000000000011100000111000000000000000000000000000000000000", "0000000000000000001110000011100000000000000000000000000000000000", "0000000000000000000111000001110000000000000000000000000000000000", "0000000000000000000011100000111000000000000000000000000000000000", "0000000000000000000001110000011100000000000000000000000000000000", "0000000000000000000000001110000011100000000000000000000000000000", "0000000000000000000000000111000001110000000000000000000000000000", "0000000000000000000000000011100000111000000000000000000000000000", "0000000000000000000000000001110000011100000000000000000000000000", "0000000000000000000000000000111000001110000000000000000000000000", "0000000000000000000000000000011100000111000000000000000000000000", "0000000000000000000000000000000011100000111000000000000000000000", "0000000000000000000000000000000001110000011100000000000000000000", "0000000000000000000000000000000000111000001110000000000000000000", "0000000000000000000000000000000000011100000111000000000000000000", "0000000000000000000000000000000000001110000011100000000000000000", "0000000000000000000000000000000000000111000001110000000000000000", "0000000000000000000000000000000000000000111000001110000000000000", "0000000000000000000000000000000000000000011100000111000000000000", "0000000000000000000000000000000000000000001110000011100000000000", "0000000000000000000000000000000000000000000111000001110000000000", "0000000000000000000000000000000000000000000011100000111000000000", "0000000000000000000000000000000000000000000001110000011100000000", "0000000000000000000000000000000000000000000000001110000011100000", "0000000000000000000000000000000000000000000000000111000001110000", "0000000000000000000000000000000000000000000000000011100000111000", "0000000000000000000000000000000000000000000000000001110000011100", "0000000000000000000000000000000000000000000000000000111000001110", "0000000000000000000000000000000000000000000000000000011100000111" ], [ "1100000011000000110000000000000000000000000000000000000000000000", "0110000001100000011000000000000000000000000000000000000000000000", "0011000000110000001100000000000000000000000000000000000000000000", "0001100000011000000110000000000000000000000000000000000000000000", "0000110000001100000011000000000000000000000000000000000000000000", "0000011000000110000001100000000000000000000000000000000000000000", "0000001100000011000000110000000000000000000000000000000000000000", "0000000011000000110000001100000000000000000000000000000000000000", "0000000001100000011000000110000000000000000000000000000000000000", "0000000000110000001100000011000000000000000000000000000000000000", "0000000000011000000110000001100000000000000000000000000000000000", "0000000000001100000011000000110000000000000000000000000000000000", "0000000000000110000001100000011000000000000000000000000000000000", "0000000000000011000000110000001100000000000000000000000000000000", "0000000000000000110000001100000011000000000000000000000000000000", "0000000000000000011000000110000001100000000000000000000000000000", "0000000000000000001100000011000000110000000000000000000000000000", "0000000000000000000110000001100000011000000000000000000000000000", "0000000000000000000011000000110000001100000000000000000000000000", "0000000000000000000001100000011000000110000000000000000000000000", "0000000000000000000000110000001100000011000000000000000000000000", "0000000000000000000000001100000011000000110000000000000000000000", "0000000000000000000000000110000001100000011000000000000000000000", "0000000000000000000000000011000000110000001100000000000000000000", "0000000000000000000000000001100000011000000110000000000000000000", "0000000000000000000000000000110000001100000011000000000000000000", "0000000000000000000000000000011000000110000001100000000000000000", "0000000000000000000000000000001100000011000000110000000000000000", "0000000000000000000000000000000011000000110000001100000000000000", "0000000000000000000000000000000001100000011000000110000000000000", "0000000000000000000000000000000000110000001100000011000000000000", "0000000000000000000000000000000000011000000110000001100000000000", "0000000000000000000000000000000000001100000011000000110000000000", "0000000000000000000000000000000000000110000001100000011000000000", "0000000000000000000000000000000000000011000000110000001100000000", "0000000000000000000000000000000000000000110000001100000011000000", "0000000000000000000000000000000000000000011000000110000001100000", "0000000000000000000000000000000000000000001100000011000000110000", "0000000000000000000000000000000000000000000110000001100000011000", "0000000000000000000000000000000000000000000011000000110000001100", "0000000000000000000000000000000000000000000001100000011000000110", "0000000000000000000000000000000000000000000000110000001100000011" ], [ "1000000001000000000000000000000000000000000000000000000000000000", "0100000000100000000000000000000000000000000000000000000000000000", "0010000000010000000000000000000000000000000000000000000000000000", "0001000000001000000000000000000000000000000000000000000000000000", "0000100000000100000000000000000000000000000000000000000000000000", "0000010000000010000000000000000000000000000000000000000000000000", "0000001000000001000000000000000000000000000000000000000000000000", "0000000010000000010000000000000000000000000000000000000000000000", "0000000001000000001000000000000000000000000000000000000000000000", "0000000000100000000100000000000000000000000000000000000000000000", "0000000000010000000010000000000000000000000000000000000000000000", "0000000000001000000001000000000000000000000000000000000000000000", "0000000000000100000000100000000000000000000000000000000000000000", "0000000000000010000000010000000000000000000000000000000000000000", "0000000000000000100000000100000000000000000000000000000000000000", "0000000000000000010000000010000000000000000000000000000000000000", "0000000000000000001000000001000000000000000000000000000000000000", "0000000000000000000100000000100000000000000000000000000000000000", "0000000000000000000010000000010000000000000000000000000000000000", "0000000000000000000001000000001000000000000000000000000000000000", "0000000000000000000000100000000100000000000000000000000000000000", "0000000000000000000000001000000001000000000000000000000000000000", "0000000000000000000000000100000000100000000000000000000000000000", "0000000000000000000000000010000000010000000000000000000000000000", "0000000000000000000000000001000000001000000000000000000000000000", "0000000000000000000000000000100000000100000000000000000000000000", "0000000000000000000000000000010000000010000000000000000000000000", "0000000000000000000000000000001000000001000000000000000000000000", "0000000000000000000000000000000010000000010000000000000000000000", "0000000000000000000000000000000001000000001000000000000000000000", "0000000000000000000000000000000000100000000100000000000000000000", "0000000000000000000000000000000000010000000010000000000000000000", "0000000000000000000000000000000000001000000001000000000000000000", "0000000000000000000000000000000000000100000000100000000000000000", "0000000000000000000000000000000000000010000000010000000000000000", "0000000000000000000000000000000000000000100000000100000000000000", "0000000000000000000000000000000000000000010000000010000000000000", "0000000000000000000000000000000000000000001000000001000000000000", "0000000000000000000000000000000000000000000100000000100000000000", "0000000000000000000000000000000000000000000010000000010000000000", "0000000000000000000000000000000000000000000001000000001000000000", "0000000000000000000000000000000000000000000000100000000100000000", "0000000000000000000000000000000000000000000000001000000001000000", "0000000000000000000000000000000000000000000000000100000000100000", "0000000000000000000000000000000000000000000000000010000000010000", "0000000000000000000000000000000000000000000000000001000000001000", "0000000000000000000000000000000000000000000000000000100000000100", "0000000000000000000000000000000000000000000000000000010000000010", "0000000000000000000000000000000000000000000000000000001000000001" ], [ "0100000010000000000000000000000000000000000000000000000000000000", "0010000001000000000000000000000000000000000000000000000000000000", "0001000000100000000000000000000000000000000000000000000000000000", "0000100000010000000000000000000000000000000000000000000000000000", "0000010000001000000000000000000000000000000000000000000000000000", "0000001000000100000000000000000000000000000000000000000000000000", "0000000100000010000000000000000000000000000000000000000000000000", "0000000001000000100000000000000000000000000000000000000000000000", "0000000000100000010000000000000000000000000000000000000000000000", "0000000000010000001000000000000000000000000000000000000000000000", "0000000000001000000100000000000000000000000000000000000000000000", "0000000000000100000010000000000000000000000000000000000000000000", "0000000000000010000001000000000000000000000000000000000000000000", "0000000000000001000000100000000000000000000000000000000000000000", "0000000000000000010000001000000000000000000000000000000000000000", "0000000000000000001000000100000000000000000000000000000000000000", "0000000000000000000100000010000000000000000000000000000000000000", "0000000000000000000010000001000000000000000000000000000000000000", "0000000000000000000001000000100000000000000000000000000000000000", "0000000000000000000000100000010000000000000000000000000000000000", "0000000000000000000000010000001000000000000000000000000000000000", "0000000000000000000000000100000010000000000000000000000000000000", "0000000000000000000000000010000001000000000000000000000000000000", "0000000000000000000000000001000000100000000000000000000000000000", "0000000000000000000000000000100000010000000000000000000000000000", "0000000000000000000000000000010000001000000000000000000000000000", "0000000000000000000000000000001000000100000000000000000000000000", "0000000000000000000000000000000100000010000000000000000000000000", "0000000000000000000000000000000001000000100000000000000000000000", "0000000000000000000000000000000000100000010000000000000000000000", "0000000000000000000000000000000000010000001000000000000000000000", "0000000000000000000000000000000000001000000100000000000000000000", "0000000000000000000000000000000000000100000010000000000000000000", "0000000000000000000000000000000000000010000001000000000000000000", "0000000000000000000000000000000000000001000000100000000000000000", "0000000000000000000000000000000000000000010000001000000000000000", "0000000000000000000000000000000000000000001000000100000000000000", "0000000000000000000000000000000000000000000100000010000000000000", "0000000000000000000000000000000000000000000010000001000000000000", "0000000000000000000000000000000000000000000001000000100000000000", "0000000000000000000000000000000000000000000000100000010000000000", "0000000000000000000000000000000000000000000000010000001000000000", "0000000000000000000000000000000000000000000000000100000010000000", "0000000000000000000000000000000000000000000000000010000001000000", "0000000000000000000000000000000000000000000000000001000000100000", "0000000000000000000000000000000000000000000000000000100000010000", "0000000000000000000000000000000000000000000000000000010000001000", "0000000000000000000000000000000000000000000000000000001000000100", "0000000000000000000000000000000000000000000000000000000100000010" ], [ "1000000001000000001000000000000000000000000000000000000000000000", "0100000000100000000100000000000000000000000000000000000000000000", "0010000000010000000010000000000000000000000000000000000000000000", "0001000000001000000001000000000000000000000000000000000000000000", "0000100000000100000000100000000000000000000000000000000000000000", "0000010000000010000000010000000000000000000000000000000000000000", "0000000010000000010000000010000000000000000000000000000000000000", "0000000001000000001000000001000000000000000000000000000000000000", "0000000000100000000100000000100000000000000000000000000000000000", "0000000000010000000010000000010000000000000000000000000000000000", "0000000000001000000001000000001000000000000000000000000000000000", "0000000000000100000000100000000100000000000000000000000000000000", "0000000000000000100000000100000000100000000000000000000000000000", "0000000000000000010000000010000000010000000000000000000000000000", "0000000000000000001000000001000000001000000000000000000000000000", "0000000000000000000100000000100000000100000000000000000000000000", "0000000000000000000010000000010000000010000000000000000000000000", "0000000000000000000001000000001000000001000000000000000000000000", "0000000000000000000000001000000001000000001000000000000000000000", "0000000000000000000000000100000000100000000100000000000000000000", "0000000000000000000000000010000000010000000010000000000000000000", "0000000000000000000000000001000000001000000001000000000000000000", "0000000000000000000000000000100000000100000000100000000000000000", "0000000000000000000000000000010000000010000000010000000000000000", "0000000000000000000000000000000010000000010000000010000000000000", "0000000000000000000000000000000001000000001000000001000000000000", "0000000000000000000000000000000000100000000100000000100000000000", "0000000000000000000000000000000000010000000010000000010000000000", "0000000000000000000000000000000000001000000001000000001000000000", "0000000000000000000000000000000000000100000000100000000100000000", "0000000000000000000000000000000000000000100000000100000000100000", "0000000000000000000000000000000000000000010000000010000000010000", "0000000000000000000000000000000000000000001000000001000000001000", "0000000000000000000000000000000000000000000100000000100000000100", "0000000000000000000000000000000000000000000010000000010000000010", "0000000000000000000000000000000000000000000001000000001000000001" ], [ "0010000001000000100000000000000000000000000000000000000000000000", "0001000000100000010000000000000000000000000000000000000000000000", "0000100000010000001000000000000000000000000000000000000000000000", "0000010000001000000100000000000000000000000000000000000000000000", "0000001000000100000010000000000000000000000000000000000000000000", "0000000100000010000001000000000000000000000000000000000000000000", "0000000000100000010000001000000000000000000000000000000000000000", "0000000000010000001000000100000000000000000000000000000000000000", "0000000000001000000100000010000000000000000000000000000000000000", "0000000000000100000010000001000000000000000000000000000000000000", "0000000000000010000001000000100000000000000000000000000000000000", "0000000000000001000000100000010000000000000000000000000000000000", "0000000000000000001000000100000010000000000000000000000000000000", "0000000000000000000100000010000001000000000000000000000000000000", "0000000000000000000010000001000000100000000000000000000000000000", "0000000000000000000001000000100000010000000000000000000000000000", "0000000000000000000000100000010000001000000000000000000000000000", "0000000000000000000000010000001000000100000000000000000000000000", "0000000000000000000000000010000001000000100000000000000000000000", "0000000000000000000000000001000000100000010000000000000000000000", "0000000000000000000000000000100000010000001000000000000000000000", "0000000000000000000000000000010000001000000100000000000000000000", "0000000000000000000000000000001000000100000010000000000000000000", "0000000000000000000000000000000100000010000001000000000000000000", "0000000000000000000000000000000000100000010000001000000000000000", "0000000000000000000000000000000000010000001000000100000000000000", "0000000000000000000000000000000000001000000100000010000000000000", "0000000000000000000000000000000000000100000010000001000000000000", "0000000000000000000000000000000000000010000001000000100000000000", "0000000000000000000000000000000000000001000000100000010000000000", "0000000000000000000000000000000000000000001000000100000010000000", "0000000000000000000000000000000000000000000100000010000001000000", "0000000000000000000000000000000000000000000010000001000000100000", "0000000000000000000000000000000000000000000001000000100000010000", "0000000000000000000000000000000000000000000000100000010000001000", "0000000000000000000000000000000000000000000000010000001000000100" ], [ "0010000001000000100000000000000000000000000000000000000000000000", "0001000000100000010000000000000000000000000000000000000000000000", "0000100000010000001000000000000000000000000000000000000000000000", "0000010000001000000100000000000000000000000000000000000000000000", "0000001000000100000010000000000000000000000000000000000000000000", "0000000100000010000001000000000000000000000000000000000000000000", "0000000000100000010000001000000000000000000000000000000000000000", "0000000000010000001000000100000000000000000000000000000000000000", "0000000000001000000100000010000000000000000000000000000000000000", "0000000000000100000010000001000000000000000000000000000000000000", "0000000000000010000001000000100000000000000000000000000000000000", "0000000000000001000000100000010000000000000000000000000000000000", "0000000000000000001000000100000010000000000000000000000000000000", "0000000000000000000100000010000001000000000000000000000000000000", "0000000000000000000010000001000000100000000000000000000000000000", "0000000000000000000001000000100000010000000000000000000000000000", "0000000000000000000000100000010000001000000000000000000000000000", "0000000000000000000000010000001000000100000000000000000000000000", "0000000000000000000000000010000001000000100000000000000000000000", "0000000000000000000000000001000000100000010000000000000000000000", "0000000000000000000000000000100000010000001000000000000000000000", "0000000000000000000000000000010000001000000100000000000000000000", "0000000000000000000000000000001000000100000010000000000000000000", "0000000000000000000000000000000100000010000001000000000000000000", "0000000000000000000000000000000000100000010000001000000000000000", "0000000000000000000000000000000000010000001000000100000000000000", "0000000000000000000000000000000000001000000100000010000000000000", "0000000000000000000000000000000000000100000010000001000000000000", "0000000000000000000000000000000000000010000001000000100000000000", "0000000000000000000000000000000000000001000000100000010000000000", "0000000000000000000000000000000000000000001000000100000010000000", "0000000000000000000000000000000000000000000100000010000001000000", "0000000000000000000000000000000000000000000010000001000000100000", "0000000000000000000000000000000000000000000001000000100000010000", "0000000000000000000000000000000000000000000000100000010000001000", "0000000000000000000000000000000000000000000000010000001000000100" ], [ "1000000010000000110000000000000000000000000000000000000000000000", "0100000001000000011000000000000000000000000000000000000000000000", "0010000000100000001100000000000000000000000000000000000000000000", "0001000000010000000110000000000000000000000000000000000000000000", "0000100000001000000011000000000000000000000000000000000000000000", "0000010000000100000001100000000000000000000000000000000000000000", "0000001000000010000000110000000000000000000000000000000000000000", "0000000010000000100000001100000000000000000000000000000000000000", "0000000001000000010000000110000000000000000000000000000000000000", "0000000000100000001000000011000000000000000000000000000000000000", "0000000000010000000100000001100000000000000000000000000000000000", "0000000000001000000010000000110000000000000000000000000000000000", "0000000000000100000001000000011000000000000000000000000000000000", "0000000000000010000000100000001100000000000000000000000000000000", "0000000000000000100000001000000011000000000000000000000000000000", "0000000000000000010000000100000001100000000000000000000000000000", "0000000000000000001000000010000000110000000000000000000000000000", "0000000000000000000100000001000000011000000000000000000000000000", "0000000000000000000010000000100000001100000000000000000000000000", "0000000000000000000001000000010000000110000000000000000000000000", "0000000000000000000000100000001000000011000000000000000000000000", "0000000000000000000000001000000010000000110000000000000000000000", "0000000000000000000000000100000001000000011000000000000000000000", "0000000000000000000000000010000000100000001100000000000000000000", "0000000000000000000000000001000000010000000110000000000000000000", "0000000000000000000000000000100000001000000011000000000000000000", "0000000000000000000000000000010000000100000001100000000000000000", "0000000000000000000000000000001000000010000000110000000000000000", "0000000000000000000000000000000010000000100000001100000000000000", "0000000000000000000000000000000001000000010000000110000000000000", "0000000000000000000000000000000000100000001000000011000000000000", "0000000000000000000000000000000000010000000100000001100000000000", "0000000000000000000000000000000000001000000010000000110000000000", "0000000000000000000000000000000000000100000001000000011000000000", "0000000000000000000000000000000000000010000000100000001100000000", "0000000000000000000000000000000000000000100000001000000011000000", "0000000000000000000000000000000000000000010000000100000001100000", "0000000000000000000000000000000000000000001000000010000000110000", "0000000000000000000000000000000000000000000100000001000000011000", "0000000000000000000000000000000000000000000010000000100000001100", "0000000000000000000000000000000000000000000001000000010000000110", "0000000000000000000000000000000000000000000000100000001000000011" ], [ "1000000011100000100000000000000000000000000000000000000000000000", "0100000001110000010000000000000000000000000000000000000000000000", "0010000000111000001000000000000000000000000000000000000000000000", "0001000000011100000100000000000000000000000000000000000000000000", "0000100000001110000010000000000000000000000000000000000000000000", "0000010000000111000001000000000000000000000000000000000000000000", "0000000010000000111000001000000000000000000000000000000000000000", "0000000001000000011100000100000000000000000000000000000000000000", "0000000000100000001110000010000000000000000000000000000000000000", "0000000000010000000111000001000000000000000000000000000000000000", "0000000000001000000011100000100000000000000000000000000000000000", "0000000000000100000001110000010000000000000000000000000000000000", "0000000000000000100000001110000010000000000000000000000000000000", "0000000000000000010000000111000001000000000000000000000000000000", "0000000000000000001000000011100000100000000000000000000000000000", "0000000000000000000100000001110000010000000000000000000000000000", "0000000000000000000010000000111000001000000000000000000000000000", "0000000000000000000001000000011100000100000000000000000000000000", "0000000000000000000000001000000011100000100000000000000000000000", "0000000000000000000000000100000001110000010000000000000000000000", "0000000000000000000000000010000000111000001000000000000000000000", "0000000000000000000000000001000000011100000100000000000000000000", "0000000000000000000000000000100000001110000010000000000000000000", "0000000000000000000000000000010000000111000001000000000000000000", "0000000000000000000000000000000010000000111000001000000000000000", "0000000000000000000000000000000001000000011100000100000000000000", "0000000000000000000000000000000000100000001110000010000000000000", "0000000000000000000000000000000000010000000111000001000000000000", "0000000000000000000000000000000000001000000011100000100000000000", "0000000000000000000000000000000000000100000001110000010000000000", "0000000000000000000000000000000000000000100000001110000010000000", "0000000000000000000000000000000000000000010000000111000001000000", "0000000000000000000000000000000000000000001000000011100000100000", "0000000000000000000000000000000000000000000100000001110000010000", "0000000000000000000000000000000000000000000010000000111000001000", "0000000000000000000000000000000000000000000001000000011100000100" ], [ "1010000011100000000000000000000000000000000000000000000000000000", "0101000001110000000000000000000000000000000000000000000000000000", "0010100000111000000000000000000000000000000000000000000000000000", "0001010000011100000000000000000000000000000000000000000000000000", "0000101000001110000000000000000000000000000000000000000000000000", "0000010100000111000000000000000000000000000000000000000000000000", "0000000010100000111000000000000000000000000000000000000000000000", "0000000001010000011100000000000000000000000000000000000000000000", "0000000000101000001110000000000000000000000000000000000000000000", "0000000000010100000111000000000000000000000000000000000000000000", "0000000000001010000011100000000000000000000000000000000000000000", "0000000000000101000001110000000000000000000000000000000000000000", "0000000000000000101000001110000000000000000000000000000000000000", "0000000000000000010100000111000000000000000000000000000000000000", "0000000000000000001010000011100000000000000000000000000000000000", "0000000000000000000101000001110000000000000000000000000000000000", "0000000000000000000010100000111000000000000000000000000000000000", "0000000000000000000001010000011100000000000000000000000000000000", "0000000000000000000000001010000011100000000000000000000000000000", "0000000000000000000000000101000001110000000000000000000000000000", "0000000000000000000000000010100000111000000000000000000000000000", "0000000000000000000000000001010000011100000000000000000000000000", "0000000000000000000000000000101000001110000000000000000000000000", "0000000000000000000000000000010100000111000000000000000000000000", "0000000000000000000000000000000010100000111000000000000000000000", "0000000000000000000000000000000001010000011100000000000000000000", "0000000000000000000000000000000000101000001110000000000000000000", "0000000000000000000000000000000000010100000111000000000000000000", "0000000000000000000000000000000000001010000011100000000000000000", "0000000000000000000000000000000000000101000001110000000000000000", "0000000000000000000000000000000000000000101000001110000000000000", "0000000000000000000000000000000000000000010100000111000000000000", "0000000000000000000000000000000000000000001010000011100000000000", "0000000000000000000000000000000000000000000101000001110000000000", "0000000000000000000000000000000000000000000010100000111000000000", "0000000000000000000000000000000000000000000001010000011100000000", "0000000000000000000000000000000000000000000000001010000011100000", "0000000000000000000000000000000000000000000000000101000001110000", "0000000000000000000000000000000000000000000000000010100000111000", "0000000000000000000000000000000000000000000000000001010000011100", "0000000000000000000000000000000000000000000000000000101000001110", "0000000000000000000000000000000000000000000000000000010100000111" ], [ "1100000001000000110000000000000000000000000000000000000000000000", "0110000000100000011000000000000000000000000000000000000000000000", "0011000000010000001100000000000000000000000000000000000000000000", "0001100000001000000110000000000000000000000000000000000000000000", "0000110000000100000011000000000000000000000000000000000000000000", "0000011000000010000001100000000000000000000000000000000000000000", "0000001100000001000000110000000000000000000000000000000000000000", "0000000011000000010000001100000000000000000000000000000000000000", "0000000001100000001000000110000000000000000000000000000000000000", "0000000000110000000100000011000000000000000000000000000000000000", "0000000000011000000010000001100000000000000000000000000000000000", "0000000000001100000001000000110000000000000000000000000000000000", "0000000000000110000000100000011000000000000000000000000000000000", "0000000000000011000000010000001100000000000000000000000000000000", "0000000000000000110000000100000011000000000000000000000000000000", "0000000000000000011000000010000001100000000000000000000000000000", "0000000000000000001100000001000000110000000000000000000000000000", "0000000000000000000110000000100000011000000000000000000000000000", "0000000000000000000011000000010000001100000000000000000000000000", "0000000000000000000001100000001000000110000000000000000000000000", "0000000000000000000000110000000100000011000000000000000000000000", "0000000000000000000000001100000001000000110000000000000000000000", "0000000000000000000000000110000000100000011000000000000000000000", "0000000000000000000000000011000000010000001100000000000000000000", "0000000000000000000000000001100000001000000110000000000000000000", "0000000000000000000000000000110000000100000011000000000000000000", "0000000000000000000000000000011000000010000001100000000000000000", "0000000000000000000000000000001100000001000000110000000000000000", "0000000000000000000000000000000011000000010000001100000000000000", "0000000000000000000000000000000001100000001000000110000000000000", "0000000000000000000000000000000000110000000100000011000000000000", "0000000000000000000000000000000000011000000010000001100000000000", "0000000000000000000000000000000000001100000001000000110000000000", "0000000000000000000000000000000000000110000000100000011000000000", "0000000000000000000000000000000000000011000000010000001100000000", "0000000000000000000000000000000000000000110000000100000011000000", "0000000000000000000000000000000000000000011000000010000001100000", "0000000000000000000000000000000000000000001100000001000000110000", "0000000000000000000000000000000000000000000110000000100000011000", "0000000000000000000000000000000000000000000011000000010000001100", "0000000000000000000000000000000000000000000001100000001000000110", "0000000000000000000000000000000000000000000000110000000100000011" ], [ "1110000010100000000000000000000000000000000000000000000000000000", "0111000001010000000000000000000000000000000000000000000000000000", "0011100000101000000000000000000000000000000000000000000000000000", "0001110000010100000000000000000000000000000000000000000000000000", "0000111000001010000000000000000000000000000000000000000000000000", "0000011100000101000000000000000000000000000000000000000000000000", "0000000011100000101000000000000000000000000000000000000000000000", "0000000001110000010100000000000000000000000000000000000000000000", "0000000000111000001010000000000000000000000000000000000000000000", "0000000000011100000101000000000000000000000000000000000000000000", "0000000000001110000010100000000000000000000000000000000000000000", "0000000000000111000001010000000000000000000000000000000000000000", "0000000000000000111000001010000000000000000000000000000000000000", "0000000000000000011100000101000000000000000000000000000000000000", "0000000000000000001110000010100000000000000000000000000000000000", "0000000000000000000111000001010000000000000000000000000000000000", "0000000000000000000011100000101000000000000000000000000000000000", "0000000000000000000001110000010100000000000000000000000000000000", "0000000000000000000000001110000010100000000000000000000000000000", "0000000000000000000000000111000001010000000000000000000000000000", "0000000000000000000000000011100000101000000000000000000000000000", "0000000000000000000000000001110000010100000000000000000000000000", "0000000000000000000000000000111000001010000000000000000000000000", "0000000000000000000000000000011100000101000000000000000000000000", "0000000000000000000000000000000011100000101000000000000000000000", "0000000000000000000000000000000001110000010100000000000000000000", "0000000000000000000000000000000000111000001010000000000000000000", "0000000000000000000000000000000000011100000101000000000000000000", "0000000000000000000000000000000000001110000010100000000000000000", "0000000000000000000000000000000000000111000001010000000000000000", "0000000000000000000000000000000000000000111000001010000000000000", "0000000000000000000000000000000000000000011100000101000000000000", "0000000000000000000000000000000000000000001110000010100000000000", "0000000000000000000000000000000000000000000111000001010000000000", "0000000000000000000000000000000000000000000011100000101000000000", "0000000000000000000000000000000000000000000001110000010100000000", "0000000000000000000000000000000000000000000000001110000010100000", "0000000000000000000000000000000000000000000000000111000001010000", "0000000000000000000000000000000000000000000000000011100000101000", "0000000000000000000000000000000000000000000000000001110000010100", "0000000000000000000000000000000000000000000000000000111000001010", "0000000000000000000000000000000000000000000000000000011100000101" ], [ "1100000010000000110000000000000000000000000000000000000000000000", "0110000001000000011000000000000000000000000000000000000000000000", "0011000000100000001100000000000000000000000000000000000000000000", "0001100000010000000110000000000000000000000000000000000000000000", "0000110000001000000011000000000000000000000000000000000000000000", "0000011000000100000001100000000000000000000000000000000000000000", "0000001100000010000000110000000000000000000000000000000000000000", "0000000011000000100000001100000000000000000000000000000000000000", "0000000001100000010000000110000000000000000000000000000000000000", "0000000000110000001000000011000000000000000000000000000000000000", "0000000000011000000100000001100000000000000000000000000000000000", "0000000000001100000010000000110000000000000000000000000000000000", "0000000000000110000001000000011000000000000000000000000000000000", "0000000000000011000000100000001100000000000000000000000000000000", "0000000000000000110000001000000011000000000000000000000000000000", "0000000000000000011000000100000001100000000000000000000000000000", "0000000000000000001100000010000000110000000000000000000000000000", "0000000000000000000110000001000000011000000000000000000000000000", "0000000000000000000011000000100000001100000000000000000000000000", "0000000000000000000001100000010000000110000000000000000000000000", "0000000000000000000000110000001000000011000000000000000000000000", "0000000000000000000000001100000010000000110000000000000000000000", "0000000000000000000000000110000001000000011000000000000000000000", "0000000000000000000000000011000000100000001100000000000000000000", "0000000000000000000000000001100000010000000110000000000000000000", "0000000000000000000000000000110000001000000011000000000000000000", "0000000000000000000000000000011000000100000001100000000000000000", "0000000000000000000000000000001100000010000000110000000000000000", "0000000000000000000000000000000011000000100000001100000000000000", "0000000000000000000000000000000001100000010000000110000000000000", "0000000000000000000000000000000000110000001000000011000000000000", "0000000000000000000000000000000000011000000100000001100000000000", "0000000000000000000000000000000000001100000010000000110000000000", "0000000000000000000000000000000000000110000001000000011000000000", "0000000000000000000000000000000000000011000000100000001100000000", "0000000000000000000000000000000000000000110000001000000011000000", "0000000000000000000000000000000000000000011000000100000001100000", "0000000000000000000000000000000000000000001100000010000000110000", "0000000000000000000000000000000000000000000110000001000000011000", "0000000000000000000000000000000000000000000011000000100000001100", "0000000000000000000000000000000000000000000001100000010000000110", "0000000000000000000000000000000000000000000000110000001000000011" ], [ "0100000001000000111000000000000000000000000000000000000000000000", "0010000000100000011100000000000000000000000000000000000000000000", "0001000000010000001110000000000000000000000000000000000000000000", "0000100000001000000111000000000000000000000000000000000000000000", "0000010000000100000011100000000000000000000000000000000000000000", "0000001000000010000001110000000000000000000000000000000000000000", "0000000001000000010000001110000000000000000000000000000000000000", "0000000000100000001000000111000000000000000000000000000000000000", "0000000000010000000100000011100000000000000000000000000000000000", "0000000000001000000010000001110000000000000000000000000000000000", "0000000000000100000001000000111000000000000000000000000000000000", "0000000000000010000000100000011100000000000000000000000000000000", "0000000000000000010000000100000011100000000000000000000000000000", "0000000000000000001000000010000001110000000000000000000000000000", "0000000000000000000100000001000000111000000000000000000000000000", "0000000000000000000010000000100000011100000000000000000000000000", "0000000000000000000001000000010000001110000000000000000000000000", "0000000000000000000000100000001000000111000000000000000000000000", "0000000000000000000000000100000001000000111000000000000000000000", "0000000000000000000000000010000000100000011100000000000000000000", "0000000000000000000000000001000000010000001110000000000000000000", "0000000000000000000000000000100000001000000111000000000000000000", "0000000000000000000000000000010000000100000011100000000000000000", "0000000000000000000000000000001000000010000001110000000000000000", "0000000000000000000000000000000001000000010000001110000000000000", "0000000000000000000000000000000000100000001000000111000000000000", "0000000000000000000000000000000000010000000100000011100000000000", "0000000000000000000000000000000000001000000010000001110000000000", "0000000000000000000000000000000000000100000001000000111000000000", "0000000000000000000000000000000000000010000000100000011100000000", "0000000000000000000000000000000000000000010000000100000011100000", "0000000000000000000000000000000000000000001000000010000001110000", "0000000000000000000000000000000000000000000100000001000000111000", "0000000000000000000000000000000000000000000010000000100000011100", "0000000000000000000000000000000000000000000001000000010000001110", "0000000000000000000000000000000000000000000000100000001000000111" ], [ "0010000011100000001000000000000000000000000000000000000000000000", "0001000001110000000100000000000000000000000000000000000000000000", "0000100000111000000010000000000000000000000000000000000000000000", "0000010000011100000001000000000000000000000000000000000000000000", "0000001000001110000000100000000000000000000000000000000000000000", "0000000100000111000000010000000000000000000000000000000000000000", "0000000000100000111000000010000000000000000000000000000000000000", "0000000000010000011100000001000000000000000000000000000000000000", "0000000000001000001110000000100000000000000000000000000000000000", "0000000000000100000111000000010000000000000000000000000000000000", "0000000000000010000011100000001000000000000000000000000000000000", "0000000000000001000001110000000100000000000000000000000000000000", "0000000000000000001000001110000000100000000000000000000000000000", "0000000000000000000100000111000000010000000000000000000000000000", "0000000000000000000010000011100000001000000000000000000000000000", "0000000000000000000001000001110000000100000000000000000000000000", "0000000000000000000000100000111000000010000000000000000000000000", "0000000000000000000000010000011100000001000000000000000000000000", "0000000000000000000000000010000011100000001000000000000000000000", "0000000000000000000000000001000001110000000100000000000000000000", "0000000000000000000000000000100000111000000010000000000000000000", "0000000000000000000000000000010000011100000001000000000000000000", "0000000000000000000000000000001000001110000000100000000000000000", "0000000000000000000000000000000100000111000000010000000000000000", "0000000000000000000000000000000000100000111000000010000000000000", "0000000000000000000000000000000000010000011100000001000000000000", "0000000000000000000000000000000000001000001110000000100000000000", "0000000000000000000000000000000000000100000111000000010000000000", "0000000000000000000000000000000000000010000011100000001000000000", "0000000000000000000000000000000000000001000001110000000100000000", "0000000000000000000000000000000000000000001000001110000000100000", "0000000000000000000000000000000000000000000100000111000000010000", "0000000000000000000000000000000000000000000010000011100000001000", "0000000000000000000000000000000000000000000001000001110000000100", "0000000000000000000000000000000000000000000000100000111000000010", "0000000000000000000000000000000000000000000000010000011100000001" ], [ "1110000001000000010000000000000000000000000000000000000000000000", "0111000000100000001000000000000000000000000000000000000000000000", "0011100000010000000100000000000000000000000000000000000000000000", "0001110000001000000010000000000000000000000000000000000000000000", "0000111000000100000001000000000000000000000000000000000000000000", "0000011100000010000000100000000000000000000000000000000000000000", "0000000011100000010000000100000000000000000000000000000000000000", "0000000001110000001000000010000000000000000000000000000000000000", "0000000000111000000100000001000000000000000000000000000000000000", "0000000000011100000010000000100000000000000000000000000000000000", "0000000000001110000001000000010000000000000000000000000000000000", "0000000000000111000000100000001000000000000000000000000000000000", "0000000000000000111000000100000001000000000000000000000000000000", "0000000000000000011100000010000000100000000000000000000000000000", "0000000000000000001110000001000000010000000000000000000000000000", "0000000000000000000111000000100000001000000000000000000000000000", "0000000000000000000011100000010000000100000000000000000000000000", "0000000000000000000001110000001000000010000000000000000000000000", "0000000000000000000000001110000001000000010000000000000000000000", "0000000000000000000000000111000000100000001000000000000000000000", "0000000000000000000000000011100000010000000100000000000000000000", "0000000000000000000000000001110000001000000010000000000000000000", "0000000000000000000000000000111000000100000001000000000000000000", "0000000000000000000000000000011100000010000000100000000000000000", "0000000000000000000000000000000011100000010000000100000000000000", "0000000000000000000000000000000001110000001000000010000000000000", "0000000000000000000000000000000000111000000100000001000000000000", "0000000000000000000000000000000000011100000010000000100000000000", "0000000000000000000000000000000000001110000001000000010000000000", "0000000000000000000000000000000000000111000000100000001000000000", "0000000000000000000000000000000000000000111000000100000001000000", "0000000000000000000000000000000000000000011100000010000000100000", "0000000000000000000000000000000000000000001110000001000000010000", "0000000000000000000000000000000000000000000111000000100000001000", "0000000000000000000000000000000000000000000011100000010000000100", "0000000000000000000000000000000000000000000001110000001000000010" ], [ "0100000011100000010000000000000000000000000000000000000000000000", "0010000001110000001000000000000000000000000000000000000000000000", "0001000000111000000100000000000000000000000000000000000000000000", "0000100000011100000010000000000000000000000000000000000000000000", "0000010000001110000001000000000000000000000000000000000000000000", "0000001000000111000000100000000000000000000000000000000000000000", "0000000001000000111000000100000000000000000000000000000000000000", "0000000000100000011100000010000000000000000000000000000000000000", "0000000000010000001110000001000000000000000000000000000000000000", "0000000000001000000111000000100000000000000000000000000000000000", "0000000000000100000011100000010000000000000000000000000000000000", "0000000000000010000001110000001000000000000000000000000000000000", "0000000000000000010000001110000001000000000000000000000000000000", "0000000000000000001000000111000000100000000000000000000000000000", "0000000000000000000100000011100000010000000000000000000000000000", "0000000000000000000010000001110000001000000000000000000000000000", "0000000000000000000001000000111000000100000000000000000000000000", "0000000000000000000000100000011100000010000000000000000000000000", "0000000000000000000000000100000011100000010000000000000000000000", "0000000000000000000000000010000001110000001000000000000000000000", "0000000000000000000000000001000000111000000100000000000000000000", "0000000000000000000000000000100000011100000010000000000000000000", "0000000000000000000000000000010000001110000001000000000000000000", "0000000000000000000000000000001000000111000000100000000000000000", "0000000000000000000000000000000001000000111000000100000000000000", "0000000000000000000000000000000000100000011100000010000000000000", "0000000000000000000000000000000000010000001110000001000000000000", "0000000000000000000000000000000000001000000111000000100000000000", "0000000000000000000000000000000000000100000011100000010000000000", "0000000000000000000000000000000000000010000001110000001000000000", "0000000000000000000000000000000000000000010000001110000001000000", "0000000000000000000000000000000000000000001000000111000000100000", "0000000000000000000000000000000000000000000100000011100000010000", "0000000000000000000000000000000000000000000010000001110000001000", "0000000000000000000000000000000000000000000001000000111000000100", "0000000000000000000000000000000000000000000000100000011100000010" ] ];
},
enumerable: !1,
configurable: !0
});
return n([ r ], e);
}());
i.default = a;
cc._RF.pop();
}, {} ],
LocalPage2: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8b36dDj6DVJZoR2fyRkPsPG", "LocalPage2");
var n = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = cc._decorator, r = o.ccclass, a = (o.property, function() {
function e() {}
e.prototype.start = function() {};
Object.defineProperty(e, "cfg", {
get: function() {
return [ [ "1000000000000000000000000000000000000000000000000000000000000000", "0100000000000000000000000000000000000000000000000000000000000000", "0010000000000000000000000000000000000000000000000000000000000000", "0001000000000000000000000000000000000000000000000000000000000000", "0000100000000000000000000000000000000000000000000000000000000000", "0000010000000000000000000000000000000000000000000000000000000000", "0000001000000000000000000000000000000000000000000000000000000000", "0000000100000000000000000000000000000000000000000000000000000000", "0000000010000000000000000000000000000000000000000000000000000000", "0000000001000000000000000000000000000000000000000000000000000000", "0000000000100000000000000000000000000000000000000000000000000000", "0000000000010000000000000000000000000000000000000000000000000000", "0000000000001000000000000000000000000000000000000000000000000000", "0000000000000100000000000000000000000000000000000000000000000000", "0000000000000010000000000000000000000000000000000000000000000000", "0000000000000001000000000000000000000000000000000000000000000000", "0000000000000000100000000000000000000000000000000000000000000000", "0000000000000000010000000000000000000000000000000000000000000000", "0000000000000000001000000000000000000000000000000000000000000000", "0000000000000000000100000000000000000000000000000000000000000000", "0000000000000000000010000000000000000000000000000000000000000000", "0000000000000000000001000000000000000000000000000000000000000000", "0000000000000000000000100000000000000000000000000000000000000000", "0000000000000000000000010000000000000000000000000000000000000000", "0000000000000000000000001000000000000000000000000000000000000000", "0000000000000000000000000100000000000000000000000000000000000000", "0000000000000000000000000010000000000000000000000000000000000000", "0000000000000000000000000001000000000000000000000000000000000000", "0000000000000000000000000000100000000000000000000000000000000000", "0000000000000000000000000000010000000000000000000000000000000000", "0000000000000000000000000000001000000000000000000000000000000000", "0000000000000000000000000000000100000000000000000000000000000000", "0000000000000000000000000000000010000000000000000000000000000000", "0000000000000000000000000000000001000000000000000000000000000000", "0000000000000000000000000000000000100000000000000000000000000000", "0000000000000000000000000000000000010000000000000000000000000000", "0000000000000000000000000000000000001000000000000000000000000000", "0000000000000000000000000000000000000100000000000000000000000000", "0000000000000000000000000000000000000010000000000000000000000000", "0000000000000000000000000000000000000001000000000000000000000000", "0000000000000000000000000000000000000000100000000000000000000000", "0000000000000000000000000000000000000000010000000000000000000000", "0000000000000000000000000000000000000000001000000000000000000000", "0000000000000000000000000000000000000000000100000000000000000000", "0000000000000000000000000000000000000000000010000000000000000000", "0000000000000000000000000000000000000000000001000000000000000000", "0000000000000000000000000000000000000000000000100000000000000000", "0000000000000000000000000000000000000000000000010000000000000000", "0000000000000000000000000000000000000000000000001000000000000000", "0000000000000000000000000000000000000000000000000100000000000000", "0000000000000000000000000000000000000000000000000010000000000000", "0000000000000000000000000000000000000000000000000001000000000000", "0000000000000000000000000000000000000000000000000000100000000000", "0000000000000000000000000000000000000000000000000000010000000000", "0000000000000000000000000000000000000000000000000000001000000000", "0000000000000000000000000000000000000000000000000000000100000000", "0000000000000000000000000000000000000000000000000000000010000000", "0000000000000000000000000000000000000000000000000000000001000000", "0000000000000000000000000000000000000000000000000000000000100000", "0000000000000000000000000000000000000000000000000000000000010000", "0000000000000000000000000000000000000000000000000000000000001000", "0000000000000000000000000000000000000000000000000000000000000100", "0000000000000000000000000000000000000000000000000000000000000010", "0000000000000000000000000000000000000000000000000000000000000001" ], [ "1000000010000000000000000000000000000000000000000000000000000000", "0100000001000000000000000000000000000000000000000000000000000000", "0010000000100000000000000000000000000000000000000000000000000000", "0001000000010000000000000000000000000000000000000000000000000000", "0000100000001000000000000000000000000000000000000000000000000000", "0000010000000100000000000000000000000000000000000000000000000000", "0000001000000010000000000000000000000000000000000000000000000000", "0000000100000001000000000000000000000000000000000000000000000000", "0000000010000000100000000000000000000000000000000000000000000000", "0000000001000000010000000000000000000000000000000000000000000000", "0000000000100000001000000000000000000000000000000000000000000000", "0000000000010000000100000000000000000000000000000000000000000000", "0000000000001000000010000000000000000000000000000000000000000000", "0000000000000100000001000000000000000000000000000000000000000000", "0000000000000010000000100000000000000000000000000000000000000000", "0000000000000001000000010000000000000000000000000000000000000000", "0000000000000000100000001000000000000000000000000000000000000000", "0000000000000000010000000100000000000000000000000000000000000000", "0000000000000000001000000010000000000000000000000000000000000000", "0000000000000000000100000001000000000000000000000000000000000000", "0000000000000000000010000000100000000000000000000000000000000000", "0000000000000000000001000000010000000000000000000000000000000000", "0000000000000000000000100000001000000000000000000000000000000000", "0000000000000000000000010000000100000000000000000000000000000000", "0000000000000000000000001000000010000000000000000000000000000000", "0000000000000000000000000100000001000000000000000000000000000000", "0000000000000000000000000010000000100000000000000000000000000000", "0000000000000000000000000001000000010000000000000000000000000000", "0000000000000000000000000000100000001000000000000000000000000000", "0000000000000000000000000000010000000100000000000000000000000000", "0000000000000000000000000000001000000010000000000000000000000000", "0000000000000000000000000000000100000001000000000000000000000000", "0000000000000000000000000000000010000000100000000000000000000000", "0000000000000000000000000000000001000000010000000000000000000000", "0000000000000000000000000000000000100000001000000000000000000000", "0000000000000000000000000000000000010000000100000000000000000000", "0000000000000000000000000000000000001000000010000000000000000000", "0000000000000000000000000000000000000100000001000000000000000000", "0000000000000000000000000000000000000010000000100000000000000000", "0000000000000000000000000000000000000001000000010000000000000000", "0000000000000000000000000000000000000000100000001000000000000000", "0000000000000000000000000000000000000000010000000100000000000000", "0000000000000000000000000000000000000000001000000010000000000000", "0000000000000000000000000000000000000000000100000001000000000000", "0000000000000000000000000000000000000000000010000000100000000000", "0000000000000000000000000000000000000000000001000000010000000000", "0000000000000000000000000000000000000000000000100000001000000000", "0000000000000000000000000000000000000000000000010000000100000000", "0000000000000000000000000000000000000000000000001000000010000000", "0000000000000000000000000000000000000000000000000100000001000000", "0000000000000000000000000000000000000000000000000010000000100000", "0000000000000000000000000000000000000000000000000001000000010000", "0000000000000000000000000000000000000000000000000000100000001000", "0000000000000000000000000000000000000000000000000000010000000100", "0000000000000000000000000000000000000000000000000000001000000010", "0000000000000000000000000000000000000000000000000000000100000001" ], [ "1100000000000000000000000000000000000000000000000000000000000000", "0110000000000000000000000000000000000000000000000000000000000000", "0011000000000000000000000000000000000000000000000000000000000000", "0001100000000000000000000000000000000000000000000000000000000000", "0000110000000000000000000000000000000000000000000000000000000000", "0000011000000000000000000000000000000000000000000000000000000000", "0000001100000000000000000000000000000000000000000000000000000000", "0000000011000000000000000000000000000000000000000000000000000000", "0000000001100000000000000000000000000000000000000000000000000000", "0000000000110000000000000000000000000000000000000000000000000000", "0000000000011000000000000000000000000000000000000000000000000000", "0000000000001100000000000000000000000000000000000000000000000000", "0000000000000110000000000000000000000000000000000000000000000000", "0000000000000011000000000000000000000000000000000000000000000000", "0000000000000000110000000000000000000000000000000000000000000000", "0000000000000000011000000000000000000000000000000000000000000000", "0000000000000000001100000000000000000000000000000000000000000000", "0000000000000000000110000000000000000000000000000000000000000000", "0000000000000000000011000000000000000000000000000000000000000000", "0000000000000000000001100000000000000000000000000000000000000000", "0000000000000000000000110000000000000000000000000000000000000000", "0000000000000000000000001100000000000000000000000000000000000000", "0000000000000000000000000110000000000000000000000000000000000000", "0000000000000000000000000011000000000000000000000000000000000000", "0000000000000000000000000001100000000000000000000000000000000000", "0000000000000000000000000000110000000000000000000000000000000000", "0000000000000000000000000000011000000000000000000000000000000000", "0000000000000000000000000000001100000000000000000000000000000000", "0000000000000000000000000000000011000000000000000000000000000000", "0000000000000000000000000000000001100000000000000000000000000000", "0000000000000000000000000000000000110000000000000000000000000000", "0000000000000000000000000000000000011000000000000000000000000000", "0000000000000000000000000000000000001100000000000000000000000000", "0000000000000000000000000000000000000110000000000000000000000000", "0000000000000000000000000000000000000011000000000000000000000000", "0000000000000000000000000000000000000000110000000000000000000000", "0000000000000000000000000000000000000000011000000000000000000000", "0000000000000000000000000000000000000000001100000000000000000000", "0000000000000000000000000000000000000000000110000000000000000000", "0000000000000000000000000000000000000000000011000000000000000000", "0000000000000000000000000000000000000000000001100000000000000000", "0000000000000000000000000000000000000000000000110000000000000000", "0000000000000000000000000000000000000000000000001100000000000000", "0000000000000000000000000000000000000000000000000110000000000000", "0000000000000000000000000000000000000000000000000011000000000000", "0000000000000000000000000000000000000000000000000001100000000000", "0000000000000000000000000000000000000000000000000000110000000000", "0000000000000000000000000000000000000000000000000000011000000000", "0000000000000000000000000000000000000000000000000000001100000000", "0000000000000000000000000000000000000000000000000000000011000000", "0000000000000000000000000000000000000000000000000000000001100000", "0000000000000000000000000000000000000000000000000000000000110000", "0000000000000000000000000000000000000000000000000000000000011000", "0000000000000000000000000000000000000000000000000000000000001100", "0000000000000000000000000000000000000000000000000000000000000110", "0000000000000000000000000000000000000000000000000000000000000011" ], [ "1000000010000000100000000000000000000000000000000000000000000000", "0100000001000000010000000000000000000000000000000000000000000000", "0010000000100000001000000000000000000000000000000000000000000000", "0001000000010000000100000000000000000000000000000000000000000000", "0000100000001000000010000000000000000000000000000000000000000000", "0000010000000100000001000000000000000000000000000000000000000000", "0000001000000010000000100000000000000000000000000000000000000000", "0000000100000001000000010000000000000000000000000000000000000000", "0000000010000000100000001000000000000000000000000000000000000000", "0000000001000000010000000100000000000000000000000000000000000000", "0000000000100000001000000010000000000000000000000000000000000000", "0000000000010000000100000001000000000000000000000000000000000000", "0000000000001000000010000000100000000000000000000000000000000000", "0000000000000100000001000000010000000000000000000000000000000000", "0000000000000010000000100000001000000000000000000000000000000000", "0000000000000001000000010000000100000000000000000000000000000000", "0000000000000000100000001000000010000000000000000000000000000000", "0000000000000000010000000100000001000000000000000000000000000000", "0000000000000000001000000010000000100000000000000000000000000000", "0000000000000000000100000001000000010000000000000000000000000000", "0000000000000000000010000000100000001000000000000000000000000000", "0000000000000000000001000000010000000100000000000000000000000000", "0000000000000000000000100000001000000010000000000000000000000000", "0000000000000000000000010000000100000001000000000000000000000000", "0000000000000000000000001000000010000000100000000000000000000000", "0000000000000000000000000100000001000000010000000000000000000000", "0000000000000000000000000010000000100000001000000000000000000000", "0000000000000000000000000001000000010000000100000000000000000000", "0000000000000000000000000000100000001000000010000000000000000000", "0000000000000000000000000000010000000100000001000000000000000000", "0000000000000000000000000000001000000010000000100000000000000000", "0000000000000000000000000000000100000001000000010000000000000000", "0000000000000000000000000000000010000000100000001000000000000000", "0000000000000000000000000000000001000000010000000100000000000000", "0000000000000000000000000000000000100000001000000010000000000000", "0000000000000000000000000000000000010000000100000001000000000000", "0000000000000000000000000000000000001000000010000000100000000000", "0000000000000000000000000000000000000100000001000000010000000000", "0000000000000000000000000000000000000010000000100000001000000000", "0000000000000000000000000000000000000001000000010000000100000000", "0000000000000000000000000000000000000000100000001000000010000000", "0000000000000000000000000000000000000000010000000100000001000000", "0000000000000000000000000000000000000000001000000010000000100000", "0000000000000000000000000000000000000000000100000001000000010000", "0000000000000000000000000000000000000000000010000000100000001000", "0000000000000000000000000000000000000000000001000000010000000100", "0000000000000000000000000000000000000000000000100000001000000010", "0000000000000000000000000000000000000000000000010000000100000001" ], [ "1110000000000000000000000000000000000000000000000000000000000000", "0111000000000000000000000000000000000000000000000000000000000000", "0011100000000000000000000000000000000000000000000000000000000000", "0001110000000000000000000000000000000000000000000000000000000000", "0000111000000000000000000000000000000000000000000000000000000000", "0000011100000000000000000000000000000000000000000000000000000000", "0000000011100000000000000000000000000000000000000000000000000000", "0000000001110000000000000000000000000000000000000000000000000000", "0000000000111000000000000000000000000000000000000000000000000000", "0000000000011100000000000000000000000000000000000000000000000000", "0000000000001110000000000000000000000000000000000000000000000000", "0000000000000111000000000000000000000000000000000000000000000000", "0000000000000000111000000000000000000000000000000000000000000000", "0000000000000000011100000000000000000000000000000000000000000000", "0000000000000000001110000000000000000000000000000000000000000000", "0000000000000000000111000000000000000000000000000000000000000000", "0000000000000000000011100000000000000000000000000000000000000000", "0000000000000000000001110000000000000000000000000000000000000000", "0000000000000000000000001110000000000000000000000000000000000000", "0000000000000000000000000111000000000000000000000000000000000000", "0000000000000000000000000011100000000000000000000000000000000000", "0000000000000000000000000001110000000000000000000000000000000000", "0000000000000000000000000000111000000000000000000000000000000000", "0000000000000000000000000000011100000000000000000000000000000000", "0000000000000000000000000000000011100000000000000000000000000000", "0000000000000000000000000000000001110000000000000000000000000000", "0000000000000000000000000000000000111000000000000000000000000000", "0000000000000000000000000000000000011100000000000000000000000000", "0000000000000000000000000000000000001110000000000000000000000000", "0000000000000000000000000000000000000111000000000000000000000000", "0000000000000000000000000000000000000000111000000000000000000000", "0000000000000000000000000000000000000000011100000000000000000000", "0000000000000000000000000000000000000000001110000000000000000000", "0000000000000000000000000000000000000000000111000000000000000000", "0000000000000000000000000000000000000000000011100000000000000000", "0000000000000000000000000000000000000000000001110000000000000000", "0000000000000000000000000000000000000000000000001110000000000000", "0000000000000000000000000000000000000000000000000111000000000000", "0000000000000000000000000000000000000000000000000011100000000000", "0000000000000000000000000000000000000000000000000001110000000000", "0000000000000000000000000000000000000000000000000000111000000000", "0000000000000000000000000000000000000000000000000000011100000000", "0000000000000000000000000000000000000000000000000000000011100000", "0000000000000000000000000000000000000000000000000000000001110000", "0000000000000000000000000000000000000000000000000000000000111000", "0000000000000000000000000000000000000000000000000000000000011100", "0000000000000000000000000000000000000000000000000000000000001110", "0000000000000000000000000000000000000000000000000000000000000111" ], [ "1100000010000000000000000000000000000000000000000000000000000000", "0110000001000000000000000000000000000000000000000000000000000000", "0011000000100000000000000000000000000000000000000000000000000000", "0001100000010000000000000000000000000000000000000000000000000000", "0000110000001000000000000000000000000000000000000000000000000000", "0000011000000100000000000000000000000000000000000000000000000000", "0000001100000010000000000000000000000000000000000000000000000000", "0000000011000000100000000000000000000000000000000000000000000000", "0000000001100000010000000000000000000000000000000000000000000000", "0000000000110000001000000000000000000000000000000000000000000000", "0000000000011000000100000000000000000000000000000000000000000000", "0000000000001100000010000000000000000000000000000000000000000000", "0000000000000110000001000000000000000000000000000000000000000000", "0000000000000011000000100000000000000000000000000000000000000000", "0000000000000000110000001000000000000000000000000000000000000000", "0000000000000000011000000100000000000000000000000000000000000000", "0000000000000000001100000010000000000000000000000000000000000000", "0000000000000000000110000001000000000000000000000000000000000000", "0000000000000000000011000000100000000000000000000000000000000000", "0000000000000000000001100000010000000000000000000000000000000000", "0000000000000000000000110000001000000000000000000000000000000000", "0000000000000000000000001100000010000000000000000000000000000000", "0000000000000000000000000110000001000000000000000000000000000000", "0000000000000000000000000011000000100000000000000000000000000000", "0000000000000000000000000001100000010000000000000000000000000000", "0000000000000000000000000000110000001000000000000000000000000000", "0000000000000000000000000000011000000100000000000000000000000000", "0000000000000000000000000000001100000010000000000000000000000000", "0000000000000000000000000000000011000000100000000000000000000000", "0000000000000000000000000000000001100000010000000000000000000000", "0000000000000000000000000000000000110000001000000000000000000000", "0000000000000000000000000000000000011000000100000000000000000000", "0000000000000000000000000000000000001100000010000000000000000000", "0000000000000000000000000000000000000110000001000000000000000000", "0000000000000000000000000000000000000011000000100000000000000000", "0000000000000000000000000000000000000000110000001000000000000000", "0000000000000000000000000000000000000000011000000100000000000000", "0000000000000000000000000000000000000000001100000010000000000000", "0000000000000000000000000000000000000000000110000001000000000000", "0000000000000000000000000000000000000000000011000000100000000000", "0000000000000000000000000000000000000000000001100000010000000000", "0000000000000000000000000000000000000000000000110000001000000000", "0000000000000000000000000000000000000000000000001100000010000000", "0000000000000000000000000000000000000000000000000110000001000000", "0000000000000000000000000000000000000000000000000011000000100000", "0000000000000000000000000000000000000000000000000001100000010000", "0000000000000000000000000000000000000000000000000000110000001000", "0000000000000000000000000000000000000000000000000000011000000100", "0000000000000000000000000000000000000000000000000000001100000010" ], [ "1000000010000000100000001000000000000000000000000000000000000000", "0100000001000000010000000100000000000000000000000000000000000000", "0010000000100000001000000010000000000000000000000000000000000000", "0001000000010000000100000001000000000000000000000000000000000000", "0000100000001000000010000000100000000000000000000000000000000000", "0000010000000100000001000000010000000000000000000000000000000000", "0000001000000010000000100000001000000000000000000000000000000000", "0000000100000001000000010000000100000000000000000000000000000000", "0000000010000000100000001000000010000000000000000000000000000000", "0000000001000000010000000100000001000000000000000000000000000000", "0000000000100000001000000010000000100000000000000000000000000000", "0000000000010000000100000001000000010000000000000000000000000000", "0000000000001000000010000000100000001000000000000000000000000000", "0000000000000100000001000000010000000100000000000000000000000000", "0000000000000010000000100000001000000010000000000000000000000000", "0000000000000001000000010000000100000001000000000000000000000000", "0000000000000000100000001000000010000000100000000000000000000000", "0000000000000000010000000100000001000000010000000000000000000000", "0000000000000000001000000010000000100000001000000000000000000000", "0000000000000000000100000001000000010000000100000000000000000000", "0000000000000000000010000000100000001000000010000000000000000000", "0000000000000000000001000000010000000100000001000000000000000000", "0000000000000000000000100000001000000010000000100000000000000000", "0000000000000000000000010000000100000001000000010000000000000000", "0000000000000000000000001000000010000000100000001000000000000000", "0000000000000000000000000100000001000000010000000100000000000000", "0000000000000000000000000010000000100000001000000010000000000000", "0000000000000000000000000001000000010000000100000001000000000000", "0000000000000000000000000000100000001000000010000000100000000000", "0000000000000000000000000000010000000100000001000000010000000000", "0000000000000000000000000000001000000010000000100000001000000000", "0000000000000000000000000000000100000001000000010000000100000000", "0000000000000000000000000000000010000000100000001000000010000000", "0000000000000000000000000000000001000000010000000100000001000000", "0000000000000000000000000000000000100000001000000010000000100000", "0000000000000000000000000000000000010000000100000001000000010000", "0000000000000000000000000000000000001000000010000000100000001000", "0000000000000000000000000000000000000100000001000000010000000100", "0000000000000000000000000000000000000010000000100000001000000010", "0000000000000000000000000000000000000001000000010000000100000001" ], [ "1000000011100000000000000000000000000000000000000000000000000000", "0100000001110000000000000000000000000000000000000000000000000000", "0010000000111000000000000000000000000000000000000000000000000000", "0001000000011100000000000000000000000000000000000000000000000000", "0000100000001110000000000000000000000000000000000000000000000000", "0000010000000111000000000000000000000000000000000000000000000000", "0000000010000000111000000000000000000000000000000000000000000000", "0000000001000000011100000000000000000000000000000000000000000000", "0000000000100000001110000000000000000000000000000000000000000000", "0000000000010000000111000000000000000000000000000000000000000000", "0000000000001000000011100000000000000000000000000000000000000000", "0000000000000100000001110000000000000000000000000000000000000000", "0000000000000000100000001110000000000000000000000000000000000000", "0000000000000000010000000111000000000000000000000000000000000000", "0000000000000000001000000011100000000000000000000000000000000000", "0000000000000000000100000001110000000000000000000000000000000000", "0000000000000000000010000000111000000000000000000000000000000000", "0000000000000000000001000000011100000000000000000000000000000000", "0000000000000000000000001000000011100000000000000000000000000000", "0000000000000000000000000100000001110000000000000000000000000000", "0000000000000000000000000010000000111000000000000000000000000000", "0000000000000000000000000001000000011100000000000000000000000000", "0000000000000000000000000000100000001110000000000000000000000000", "0000000000000000000000000000010000000111000000000000000000000000", "0000000000000000000000000000000010000000111000000000000000000000", "0000000000000000000000000000000001000000011100000000000000000000", "0000000000000000000000000000000000100000001110000000000000000000", "0000000000000000000000000000000000010000000111000000000000000000", "0000000000000000000000000000000000001000000011100000000000000000", "0000000000000000000000000000000000000100000001110000000000000000", "0000000000000000000000000000000000000000100000001110000000000000", "0000000000000000000000000000000000000000010000000111000000000000", "0000000000000000000000000000000000000000001000000011100000000000", "0000000000000000000000000000000000000000000100000001110000000000", "0000000000000000000000000000000000000000000010000000111000000000", "0000000000000000000000000000000000000000000001000000011100000000", "0000000000000000000000000000000000000000000000001000000011100000", "0000000000000000000000000000000000000000000000000100000001110000", "0000000000000000000000000000000000000000000000000010000000111000", "0000000000000000000000000000000000000000000000000001000000011100", "0000000000000000000000000000000000000000000000000000100000001110", "0000000000000000000000000000000000000000000000000000010000000111" ], [ "1100000011000000000000000000000000000000000000000000000000000000", "0110000001100000000000000000000000000000000000000000000000000000", "0011000000110000000000000000000000000000000000000000000000000000", "0001100000011000000000000000000000000000000000000000000000000000", "0000110000001100000000000000000000000000000000000000000000000000", "0000011000000110000000000000000000000000000000000000000000000000", "0000001100000011000000000000000000000000000000000000000000000000", "0000000011000000110000000000000000000000000000000000000000000000", "0000000001100000011000000000000000000000000000000000000000000000", "0000000000110000001100000000000000000000000000000000000000000000", "0000000000011000000110000000000000000000000000000000000000000000", "0000000000001100000011000000000000000000000000000000000000000000", "0000000000000110000001100000000000000000000000000000000000000000", "0000000000000011000000110000000000000000000000000000000000000000", "0000000000000000110000001100000000000000000000000000000000000000", "0000000000000000011000000110000000000000000000000000000000000000", "0000000000000000001100000011000000000000000000000000000000000000", "0000000000000000000110000001100000000000000000000000000000000000", "0000000000000000000011000000110000000000000000000000000000000000", "0000000000000000000001100000011000000000000000000000000000000000", "0000000000000000000000110000001100000000000000000000000000000000", "0000000000000000000000001100000011000000000000000000000000000000", "0000000000000000000000000110000001100000000000000000000000000000", "0000000000000000000000000011000000110000000000000000000000000000", "0000000000000000000000000001100000011000000000000000000000000000", "0000000000000000000000000000110000001100000000000000000000000000", "0000000000000000000000000000011000000110000000000000000000000000", "0000000000000000000000000000001100000011000000000000000000000000", "0000000000000000000000000000000011000000110000000000000000000000", "0000000000000000000000000000000001100000011000000000000000000000", "0000000000000000000000000000000000110000001100000000000000000000", "0000000000000000000000000000000000011000000110000000000000000000", "0000000000000000000000000000000000001100000011000000000000000000", "0000000000000000000000000000000000000110000001100000000000000000", "0000000000000000000000000000000000000011000000110000000000000000", "0000000000000000000000000000000000000000110000001100000000000000", "0000000000000000000000000000000000000000011000000110000000000000", "0000000000000000000000000000000000000000001100000011000000000000", "0000000000000000000000000000000000000000000110000001100000000000", "0000000000000000000000000000000000000000000011000000110000000000", "0000000000000000000000000000000000000000000001100000011000000000", "0000000000000000000000000000000000000000000000110000001100000000", "0000000000000000000000000000000000000000000000001100000011000000", "0000000000000000000000000000000000000000000000000110000001100000", "0000000000000000000000000000000000000000000000000011000000110000", "0000000000000000000000000000000000000000000000000001100000011000", "0000000000000000000000000000000000000000000000000000110000001100", "0000000000000000000000000000000000000000000000000000011000000110", "0000000000000000000000000000000000000000000000000000001100000011" ], [ "0100000011100000000000000000000000000000000000000000000000000000", "0010000001110000000000000000000000000000000000000000000000000000", "0001000000111000000000000000000000000000000000000000000000000000", "0000100000011100000000000000000000000000000000000000000000000000", "0000010000001110000000000000000000000000000000000000000000000000", "0000001000000111000000000000000000000000000000000000000000000000", "0000000001000000111000000000000000000000000000000000000000000000", "0000000000100000011100000000000000000000000000000000000000000000", "0000000000010000001110000000000000000000000000000000000000000000", "0000000000001000000111000000000000000000000000000000000000000000", "0000000000000100000011100000000000000000000000000000000000000000", "0000000000000010000001110000000000000000000000000000000000000000", "0000000000000000010000001110000000000000000000000000000000000000", "0000000000000000001000000111000000000000000000000000000000000000", "0000000000000000000100000011100000000000000000000000000000000000", "0000000000000000000010000001110000000000000000000000000000000000", "0000000000000000000001000000111000000000000000000000000000000000", "0000000000000000000000100000011100000000000000000000000000000000", "0000000000000000000000000100000011100000000000000000000000000000", "0000000000000000000000000010000001110000000000000000000000000000", "0000000000000000000000000001000000111000000000000000000000000000", "0000000000000000000000000000100000011100000000000000000000000000", "0000000000000000000000000000010000001110000000000000000000000000", "0000000000000000000000000000001000000111000000000000000000000000", "0000000000000000000000000000000001000000111000000000000000000000", "0000000000000000000000000000000000100000011100000000000000000000", "0000000000000000000000000000000000010000001110000000000000000000", "0000000000000000000000000000000000001000000111000000000000000000", "0000000000000000000000000000000000000100000011100000000000000000", "0000000000000000000000000000000000000010000001110000000000000000", "0000000000000000000000000000000000000000010000001110000000000000", "0000000000000000000000000000000000000000001000000111000000000000", "0000000000000000000000000000000000000000000100000011100000000000", "0000000000000000000000000000000000000000000010000001110000000000", "0000000000000000000000000000000000000000000001000000111000000000", "0000000000000000000000000000000000000000000000100000011100000000", "0000000000000000000000000000000000000000000000000100000011100000", "0000000000000000000000000000000000000000000000000010000001110000", "0000000000000000000000000000000000000000000000000001000000111000", "0000000000000000000000000000000000000000000000000000100000011100", "0000000000000000000000000000000000000000000000000000010000001110", "0000000000000000000000000000000000000000000000000000001000000111" ], [ "1111100000000000000000000000000000000000000000000000000000000000", "0111110000000000000000000000000000000000000000000000000000000000", "0011111000000000000000000000000000000000000000000000000000000000", "0001111100000000000000000000000000000000000000000000000000000000", "0000000011111000000000000000000000000000000000000000000000000000", "0000000001111100000000000000000000000000000000000000000000000000", "0000000000111110000000000000000000000000000000000000000000000000", "0000000000011111000000000000000000000000000000000000000000000000", "0000000000000000111110000000000000000000000000000000000000000000", "0000000000000000011111000000000000000000000000000000000000000000", "0000000000000000001111100000000000000000000000000000000000000000", "0000000000000000000111110000000000000000000000000000000000000000", "0000000000000000000000001111100000000000000000000000000000000000", "0000000000000000000000000111110000000000000000000000000000000000", "0000000000000000000000000011111000000000000000000000000000000000", "0000000000000000000000000001111100000000000000000000000000000000", "0000000000000000000000000000000011111000000000000000000000000000", "0000000000000000000000000000000001111100000000000000000000000000", "0000000000000000000000000000000000111110000000000000000000000000", "0000000000000000000000000000000000011111000000000000000000000000", "0000000000000000000000000000000000000000111110000000000000000000", "0000000000000000000000000000000000000000011111000000000000000000", "0000000000000000000000000000000000000000001111100000000000000000", "0000000000000000000000000000000000000000000111110000000000000000", "0000000000000000000000000000000000000000000000001111100000000000", "0000000000000000000000000000000000000000000000000111110000000000", "0000000000000000000000000000000000000000000000000011111000000000", "0000000000000000000000000000000000000000000000000001111100000000", "0000000000000000000000000000000000000000000000000000000011111000", "0000000000000000000000000000000000000000000000000000000001111100", "0000000000000000000000000000000000000000000000000000000000111110", "0000000000000000000000000000000000000000000000000000000000011111" ], [ "1110000000100000001000000000000000000000000000000000000000000000", "0111000000010000000100000000000000000000000000000000000000000000", "0011100000001000000010000000000000000000000000000000000000000000", "0001110000000100000001000000000000000000000000000000000000000000", "0000111000000010000000100000000000000000000000000000000000000000", "0000011100000001000000010000000000000000000000000000000000000000", "0000000011100000001000000010000000000000000000000000000000000000", "0000000001110000000100000001000000000000000000000000000000000000", "0000000000111000000010000000100000000000000000000000000000000000", "0000000000011100000001000000010000000000000000000000000000000000", "0000000000001110000000100000001000000000000000000000000000000000", "0000000000000111000000010000000100000000000000000000000000000000", "0000000000000000111000000010000000100000000000000000000000000000", "0000000000000000011100000001000000010000000000000000000000000000", "0000000000000000001110000000100000001000000000000000000000000000", "0000000000000000000111000000010000000100000000000000000000000000", "0000000000000000000011100000001000000010000000000000000000000000", "0000000000000000000001110000000100000001000000000000000000000000", "0000000000000000000000001110000000100000001000000000000000000000", "0000000000000000000000000111000000010000000100000000000000000000", "0000000000000000000000000011100000001000000010000000000000000000", "0000000000000000000000000001110000000100000001000000000000000000", "0000000000000000000000000000111000000010000000100000000000000000", "0000000000000000000000000000011100000001000000010000000000000000", "0000000000000000000000000000000011100000001000000010000000000000", "0000000000000000000000000000000001110000000100000001000000000000", "0000000000000000000000000000000000111000000010000000100000000000", "0000000000000000000000000000000000011100000001000000010000000000", "0000000000000000000000000000000000001110000000100000001000000000", "0000000000000000000000000000000000000111000000010000000100000000", "0000000000000000000000000000000000000000111000000010000000100000", "0000000000000000000000000000000000000000011100000001000000010000", "0000000000000000000000000000000000000000001110000000100000001000", "0000000000000000000000000000000000000000000111000000010000000100", "0000000000000000000000000000000000000000000011100000001000000010", "0000000000000000000000000000000000000000000001110000000100000001" ], [ "1110000011100000111000000000000000000000000000000000000000000000", "0111000001110000011100000000000000000000000000000000000000000000", "0011100000111000001110000000000000000000000000000000000000000000", "0001110000011100000111000000000000000000000000000000000000000000", "0000111000001110000011100000000000000000000000000000000000000000", "0000011100000111000001110000000000000000000000000000000000000000", "0000000011100000111000001110000000000000000000000000000000000000", "0000000001110000011100000111000000000000000000000000000000000000", "0000000000111000001110000011100000000000000000000000000000000000", "0000000000011100000111000001110000000000000000000000000000000000", "0000000000001110000011100000111000000000000000000000000000000000", "0000000000000111000001110000011100000000000000000000000000000000", "0000000000000000111000001110000011100000000000000000000000000000", "0000000000000000011100000111000001110000000000000000000000000000", "0000000000000000001110000011100000111000000000000000000000000000", "0000000000000000000111000001110000011100000000000000000000000000", "0000000000000000000011100000111000001110000000000000000000000000", "0000000000000000000001110000011100000111000000000000000000000000", "0000000000000000000000001110000011100000111000000000000000000000", "0000000000000000000000000111000001110000011100000000000000000000", "0000000000000000000000000011100000111000001110000000000000000000", "0000000000000000000000000001110000011100000111000000000000000000", "0000000000000000000000000000111000001110000011100000000000000000", "0000000000000000000000000000011100000111000001110000000000000000", "0000000000000000000000000000000011100000111000001110000000000000", "0000000000000000000000000000000001110000011100000111000000000000", "0000000000000000000000000000000000111000001110000011100000000000", "0000000000000000000000000000000000011100000111000001110000000000", "0000000000000000000000000000000000001110000011100000111000000000", "0000000000000000000000000000000000000111000001110000011100000000", "0000000000000000000000000000000000000000111000001110000011100000", "0000000000000000000000000000000000000000011100000111000001110000", "0000000000000000000000000000000000000000001110000011100000111000", "0000000000000000000000000000000000000000000111000001110000011100", "0000000000000000000000000000000000000000000011100000111000001110", "0000000000000000000000000000000000000000000001110000011100000111" ], [ "0110000011000000000000000000000000000000000000000000000000000000", "0011000001100000000000000000000000000000000000000000000000000000", "0001100000110000000000000000000000000000000000000000000000000000", "0000110000011000000000000000000000000000000000000000000000000000", "0000011000001100000000000000000000000000000000000000000000000000", "0000001100000110000000000000000000000000000000000000000000000000", "0000000001100000110000000000000000000000000000000000000000000000", "0000000000110000011000000000000000000000000000000000000000000000", "0000000000011000001100000000000000000000000000000000000000000000", "0000000000001100000110000000000000000000000000000000000000000000", "0000000000000110000011000000000000000000000000000000000000000000", "0000000000000011000001100000000000000000000000000000000000000000", "0000000000000000011000001100000000000000000000000000000000000000", "0000000000000000001100000110000000000000000000000000000000000000", "0000000000000000000110000011000000000000000000000000000000000000", "0000000000000000000011000001100000000000000000000000000000000000", "0000000000000000000001100000110000000000000000000000000000000000", "0000000000000000000000110000011000000000000000000000000000000000", "0000000000000000000000000110000011000000000000000000000000000000", "0000000000000000000000000011000001100000000000000000000000000000", "0000000000000000000000000001100000110000000000000000000000000000", "0000000000000000000000000000110000011000000000000000000000000000", "0000000000000000000000000000011000001100000000000000000000000000", "0000000000000000000000000000001100000110000000000000000000000000", "0000000000000000000000000000000001100000110000000000000000000000", "0000000000000000000000000000000000110000011000000000000000000000", "0000000000000000000000000000000000011000001100000000000000000000", "0000000000000000000000000000000000001100000110000000000000000000", "0000000000000000000000000000000000000110000011000000000000000000", "0000000000000000000000000000000000000011000001100000000000000000", "0000000000000000000000000000000000000000011000001100000000000000", "0000000000000000000000000000000000000000001100000110000000000000", "0000000000000000000000000000000000000000000110000011000000000000", "0000000000000000000000000000000000000000000011000001100000000000", "0000000000000000000000000000000000000000000001100000110000000000", "0000000000000000000000000000000000000000000000110000011000000000", "0000000000000000000000000000000000000000000000000110000011000000", "0000000000000000000000000000000000000000000000000011000001100000", "0000000000000000000000000000000000000000000000000001100000110000", "0000000000000000000000000000000000000000000000000000110000011000", "0000000000000000000000000000000000000000000000000000011000001100", "0000000000000000000000000000000000000000000000000000001100000110" ], [ "1100000001000000000000000000000000000000000000000000000000000000", "0110000000100000000000000000000000000000000000000000000000000000", "0011000000010000000000000000000000000000000000000000000000000000", "0001100000001000000000000000000000000000000000000000000000000000", "0000110000000100000000000000000000000000000000000000000000000000", "0000011000000010000000000000000000000000000000000000000000000000", "0000001100000001000000000000000000000000000000000000000000000000", "0000000011000000010000000000000000000000000000000000000000000000", "0000000001100000001000000000000000000000000000000000000000000000", "0000000000110000000100000000000000000000000000000000000000000000", "0000000000011000000010000000000000000000000000000000000000000000", "0000000000001100000001000000000000000000000000000000000000000000", "0000000000000110000000100000000000000000000000000000000000000000", "0000000000000011000000010000000000000000000000000000000000000000", "0000000000000000110000000100000000000000000000000000000000000000", "0000000000000000011000000010000000000000000000000000000000000000", "0000000000000000001100000001000000000000000000000000000000000000", "0000000000000000000110000000100000000000000000000000000000000000", "0000000000000000000011000000010000000000000000000000000000000000", "0000000000000000000001100000001000000000000000000000000000000000", "0000000000000000000000110000000100000000000000000000000000000000", "0000000000000000000000001100000001000000000000000000000000000000", "0000000000000000000000000110000000100000000000000000000000000000", "0000000000000000000000000011000000010000000000000000000000000000", "0000000000000000000000000001100000001000000000000000000000000000", "0000000000000000000000000000110000000100000000000000000000000000", "0000000000000000000000000000011000000010000000000000000000000000", "0000000000000000000000000000001100000001000000000000000000000000", "0000000000000000000000000000000011000000010000000000000000000000", "0000000000000000000000000000000001100000001000000000000000000000", "0000000000000000000000000000000000110000000100000000000000000000", "0000000000000000000000000000000000011000000010000000000000000000", "0000000000000000000000000000000000001100000001000000000000000000", "0000000000000000000000000000000000000110000000100000000000000000", "0000000000000000000000000000000000000011000000010000000000000000", "0000000000000000000000000000000000000000110000000100000000000000", "0000000000000000000000000000000000000000011000000010000000000000", "0000000000000000000000000000000000000000001100000001000000000000", "0000000000000000000000000000000000000000000110000000100000000000", "0000000000000000000000000000000000000000000011000000010000000000", "0000000000000000000000000000000000000000000001100000001000000000", "0000000000000000000000000000000000000000000000110000000100000000", "0000000000000000000000000000000000000000000000001100000001000000", "0000000000000000000000000000000000000000000000000110000000100000", "0000000000000000000000000000000000000000000000000011000000010000", "0000000000000000000000000000000000000000000000000001100000001000", "0000000000000000000000000000000000000000000000000000110000000100", "0000000000000000000000000000000000000000000000000000011000000010", "0000000000000000000000000000000000000000000000000000001100000001" ], [ "1000000011000000010000000000000000000000000000000000000000000000", "0100000001100000001000000000000000000000000000000000000000000000", "0010000000110000000100000000000000000000000000000000000000000000", "0001000000011000000010000000000000000000000000000000000000000000", "0000100000001100000001000000000000000000000000000000000000000000", "0000010000000110000000100000000000000000000000000000000000000000", "0000001000000011000000010000000000000000000000000000000000000000", "0000000010000000110000000100000000000000000000000000000000000000", "0000000001000000011000000010000000000000000000000000000000000000", "0000000000100000001100000001000000000000000000000000000000000000", "0000000000010000000110000000100000000000000000000000000000000000", "0000000000001000000011000000010000000000000000000000000000000000", "0000000000000100000001100000001000000000000000000000000000000000", "0000000000000010000000110000000100000000000000000000000000000000", "0000000000000000100000001100000001000000000000000000000000000000", "0000000000000000010000000110000000100000000000000000000000000000", "0000000000000000001000000011000000010000000000000000000000000000", "0000000000000000000100000001100000001000000000000000000000000000", "0000000000000000000010000000110000000100000000000000000000000000", "0000000000000000000001000000011000000010000000000000000000000000", "0000000000000000000000100000001100000001000000000000000000000000", "0000000000000000000000001000000011000000010000000000000000000000", "0000000000000000000000000100000001100000001000000000000000000000", "0000000000000000000000000010000000110000000100000000000000000000", "0000000000000000000000000001000000011000000010000000000000000000", "0000000000000000000000000000100000001100000001000000000000000000", "0000000000000000000000000000010000000110000000100000000000000000", "0000000000000000000000000000001000000011000000010000000000000000", "0000000000000000000000000000000010000000110000000100000000000000", "0000000000000000000000000000000001000000011000000010000000000000", "0000000000000000000000000000000000100000001100000001000000000000", "0000000000000000000000000000000000010000000110000000100000000000", "0000000000000000000000000000000000001000000011000000010000000000", "0000000000000000000000000000000000000100000001100000001000000000", "0000000000000000000000000000000000000010000000110000000100000000", "0000000000000000000000000000000000000000100000001100000001000000", "0000000000000000000000000000000000000000010000000110000000100000", "0000000000000000000000000000000000000000001000000011000000010000", "0000000000000000000000000000000000000000000100000001100000001000", "0000000000000000000000000000000000000000000010000000110000000100", "0000000000000000000000000000000000000000000001000000011000000010", "0000000000000000000000000000000000000000000000100000001100000001" ], [ "1111000000000000000000000000000000000000000000000000000000000000", "0111100000000000000000000000000000000000000000000000000000000000", "0011110000000000000000000000000000000000000000000000000000000000", "0001111000000000000000000000000000000000000000000000000000000000", "0000111100000000000000000000000000000000000000000000000000000000", "0000000011110000000000000000000000000000000000000000000000000000", "0000000001111000000000000000000000000000000000000000000000000000", "0000000000111100000000000000000000000000000000000000000000000000", "0000000000011110000000000000000000000000000000000000000000000000", "0000000000001111000000000000000000000000000000000000000000000000", "0000000000000000111100000000000000000000000000000000000000000000", "0000000000000000011110000000000000000000000000000000000000000000", "0000000000000000001111000000000000000000000000000000000000000000", "0000000000000000000111100000000000000000000000000000000000000000", "0000000000000000000011110000000000000000000000000000000000000000", "0000000000000000000000001111000000000000000000000000000000000000", "0000000000000000000000000111100000000000000000000000000000000000", "0000000000000000000000000011110000000000000000000000000000000000", "0000000000000000000000000001111000000000000000000000000000000000", "0000000000000000000000000000111100000000000000000000000000000000", "0000000000000000000000000000000011110000000000000000000000000000", "0000000000000000000000000000000001111000000000000000000000000000", "0000000000000000000000000000000000111100000000000000000000000000", "0000000000000000000000000000000000011110000000000000000000000000", "0000000000000000000000000000000000001111000000000000000000000000", "0000000000000000000000000000000000000000111100000000000000000000", "0000000000000000000000000000000000000000011110000000000000000000", "0000000000000000000000000000000000000000001111000000000000000000", "0000000000000000000000000000000000000000000111100000000000000000", "0000000000000000000000000000000000000000000011110000000000000000", "0000000000000000000000000000000000000000000000001111000000000000", "0000000000000000000000000000000000000000000000000111100000000000", "0000000000000000000000000000000000000000000000000011110000000000", "0000000000000000000000000000000000000000000000000001111000000000", "0000000000000000000000000000000000000000000000000000111100000000", "0000000000000000000000000000000000000000000000000000000011110000", "0000000000000000000000000000000000000000000000000000000001111000", "0000000000000000000000000000000000000000000000000000000000111100", "0000000000000000000000000000000000000000000000000000000000011110", "0000000000000000000000000000000000000000000000000000000000001111" ], [ "1100000001100000000000000000000000000000000000000000000000000000", "0110000000110000000000000000000000000000000000000000000000000000", "0011000000011000000000000000000000000000000000000000000000000000", "0001100000001100000000000000000000000000000000000000000000000000", "0000110000000110000000000000000000000000000000000000000000000000", "0000011000000011000000000000000000000000000000000000000000000000", "0000000011000000011000000000000000000000000000000000000000000000", "0000000001100000001100000000000000000000000000000000000000000000", "0000000000110000000110000000000000000000000000000000000000000000", "0000000000011000000011000000000000000000000000000000000000000000", "0000000000001100000001100000000000000000000000000000000000000000", "0000000000000110000000110000000000000000000000000000000000000000", "0000000000000000110000000110000000000000000000000000000000000000", "0000000000000000011000000011000000000000000000000000000000000000", "0000000000000000001100000001100000000000000000000000000000000000", "0000000000000000000110000000110000000000000000000000000000000000", "0000000000000000000011000000011000000000000000000000000000000000", "0000000000000000000001100000001100000000000000000000000000000000", "0000000000000000000000001100000001100000000000000000000000000000", "0000000000000000000000000110000000110000000000000000000000000000", "0000000000000000000000000011000000011000000000000000000000000000", "0000000000000000000000000001100000001100000000000000000000000000", "0000000000000000000000000000110000000110000000000000000000000000", "0000000000000000000000000000011000000011000000000000000000000000", "0000000000000000000000000000000011000000011000000000000000000000", "0000000000000000000000000000000001100000001100000000000000000000", "0000000000000000000000000000000000110000000110000000000000000000", "0000000000000000000000000000000000011000000011000000000000000000", "0000000000000000000000000000000000001100000001100000000000000000", "0000000000000000000000000000000000000110000000110000000000000000", "0000000000000000000000000000000000000000110000000110000000000000", "0000000000000000000000000000000000000000011000000011000000000000", "0000000000000000000000000000000000000000001100000001100000000000", "0000000000000000000000000000000000000000000110000000110000000000", "0000000000000000000000000000000000000000000011000000011000000000", "0000000000000000000000000000000000000000000001100000001100000000", "0000000000000000000000000000000000000000000000001100000001100000", "0000000000000000000000000000000000000000000000000110000000110000", "0000000000000000000000000000000000000000000000000011000000011000", "0000000000000000000000000000000000000000000000000001100000001100", "0000000000000000000000000000000000000000000000000000110000000110", "0000000000000000000000000000000000000000000000000000011000000011" ], [ "0100000011000000100000000000000000000000000000000000000000000000", "0010000001100000010000000000000000000000000000000000000000000000", "0001000000110000001000000000000000000000000000000000000000000000", "0000100000011000000100000000000000000000000000000000000000000000", "0000010000001100000010000000000000000000000000000000000000000000", "0000001000000110000001000000000000000000000000000000000000000000", "0000000100000011000000100000000000000000000000000000000000000000", "0000000001000000110000001000000000000000000000000000000000000000", "0000000000100000011000000100000000000000000000000000000000000000", "0000000000010000001100000010000000000000000000000000000000000000", "0000000000001000000110000001000000000000000000000000000000000000", "0000000000000100000011000000100000000000000000000000000000000000", "0000000000000010000001100000010000000000000000000000000000000000", "0000000000000001000000110000001000000000000000000000000000000000", "0000000000000000010000001100000010000000000000000000000000000000", "0000000000000000001000000110000001000000000000000000000000000000", "0000000000000000000100000011000000100000000000000000000000000000", "0000000000000000000010000001100000010000000000000000000000000000", "0000000000000000000001000000110000001000000000000000000000000000", "0000000000000000000000100000011000000100000000000000000000000000", "0000000000000000000000010000001100000010000000000000000000000000", "0000000000000000000000000100000011000000100000000000000000000000", "0000000000000000000000000010000001100000010000000000000000000000", "0000000000000000000000000001000000110000001000000000000000000000", "0000000000000000000000000000100000011000000100000000000000000000", "0000000000000000000000000000010000001100000010000000000000000000", "0000000000000000000000000000001000000110000001000000000000000000", "0000000000000000000000000000000100000011000000100000000000000000", "0000000000000000000000000000000001000000110000001000000000000000", "0000000000000000000000000000000000100000011000000100000000000000", "0000000000000000000000000000000000010000001100000010000000000000", "0000000000000000000000000000000000001000000110000001000000000000", "0000000000000000000000000000000000000100000011000000100000000000", "0000000000000000000000000000000000000010000001100000010000000000", "0000000000000000000000000000000000000001000000110000001000000000", "0000000000000000000000000000000000000000010000001100000010000000", "0000000000000000000000000000000000000000001000000110000001000000", "0000000000000000000000000000000000000000000100000011000000100000", "0000000000000000000000000000000000000000000010000001100000010000", "0000000000000000000000000000000000000000000001000000110000001000", "0000000000000000000000000000000000000000000000100000011000000100", "0000000000000000000000000000000000000000000000010000001100000010" ], [ "1000000011000000100000000000000000000000000000000000000000000000", "0100000001100000010000000000000000000000000000000000000000000000", "0010000000110000001000000000000000000000000000000000000000000000", "0001000000011000000100000000000000000000000000000000000000000000", "0000100000001100000010000000000000000000000000000000000000000000", "0000010000000110000001000000000000000000000000000000000000000000", "0000001000000011000000100000000000000000000000000000000000000000", "0000000010000000110000001000000000000000000000000000000000000000", "0000000001000000011000000100000000000000000000000000000000000000", "0000000000100000001100000010000000000000000000000000000000000000", "0000000000010000000110000001000000000000000000000000000000000000", "0000000000001000000011000000100000000000000000000000000000000000", "0000000000000100000001100000010000000000000000000000000000000000", "0000000000000010000000110000001000000000000000000000000000000000", "0000000000000000100000001100000010000000000000000000000000000000", "0000000000000000010000000110000001000000000000000000000000000000", "0000000000000000001000000011000000100000000000000000000000000000", "0000000000000000000100000001100000010000000000000000000000000000", "0000000000000000000010000000110000001000000000000000000000000000", "0000000000000000000001000000011000000100000000000000000000000000", "0000000000000000000000100000001100000010000000000000000000000000", "0000000000000000000000001000000011000000100000000000000000000000", "0000000000000000000000000100000001100000010000000000000000000000", "0000000000000000000000000010000000110000001000000000000000000000", "0000000000000000000000000001000000011000000100000000000000000000", "0000000000000000000000000000100000001100000010000000000000000000", "0000000000000000000000000000010000000110000001000000000000000000", "0000000000000000000000000000001000000011000000100000000000000000", "0000000000000000000000000000000010000000110000001000000000000000", "0000000000000000000000000000000001000000011000000100000000000000", "0000000000000000000000000000000000100000001100000010000000000000", "0000000000000000000000000000000000010000000110000001000000000000", "0000000000000000000000000000000000001000000011000000100000000000", "0000000000000000000000000000000000000100000001100000010000000000", "0000000000000000000000000000000000000010000000110000001000000000", "0000000000000000000000000000000000000000100000001100000010000000", "0000000000000000000000000000000000000000010000000110000001000000", "0000000000000000000000000000000000000000001000000011000000100000", "0000000000000000000000000000000000000000000100000001100000010000", "0000000000000000000000000000000000000000000010000000110000001000", "0000000000000000000000000000000000000000000001000000011000000100", "0000000000000000000000000000000000000000000000100000001100000010" ], [ "1110000010000000100000000000000000000000000000000000000000000000", "0111000001000000010000000000000000000000000000000000000000000000", "0011100000100000001000000000000000000000000000000000000000000000", "0001110000010000000100000000000000000000000000000000000000000000", "0000111000001000000010000000000000000000000000000000000000000000", "0000011100000100000001000000000000000000000000000000000000000000", "0000000011100000100000001000000000000000000000000000000000000000", "0000000001110000010000000100000000000000000000000000000000000000", "0000000000111000001000000010000000000000000000000000000000000000", "0000000000011100000100000001000000000000000000000000000000000000", "0000000000001110000010000000100000000000000000000000000000000000", "0000000000000111000001000000010000000000000000000000000000000000", "0000000000000000111000001000000010000000000000000000000000000000", "0000000000000000011100000100000001000000000000000000000000000000", "0000000000000000001110000010000000100000000000000000000000000000", "0000000000000000000111000001000000010000000000000000000000000000", "0000000000000000000011100000100000001000000000000000000000000000", "0000000000000000000001110000010000000100000000000000000000000000", "0000000000000000000000001110000010000000100000000000000000000000", "0000000000000000000000000111000001000000010000000000000000000000", "0000000000000000000000000011100000100000001000000000000000000000", "0000000000000000000000000001110000010000000100000000000000000000", "0000000000000000000000000000111000001000000010000000000000000000", "0000000000000000000000000000011100000100000001000000000000000000", "0000000000000000000000000000000011100000100000001000000000000000", "0000000000000000000000000000000001110000010000000100000000000000", "0000000000000000000000000000000000111000001000000010000000000000", "0000000000000000000000000000000000011100000100000001000000000000", "0000000000000000000000000000000000001110000010000000100000000000", "0000000000000000000000000000000000000111000001000000010000000000", "0000000000000000000000000000000000000000111000001000000010000000", "0000000000000000000000000000000000000000011100000100000001000000", "0000000000000000000000000000000000000000001110000010000000100000", "0000000000000000000000000000000000000000000111000001000000010000", "0000000000000000000000000000000000000000000011100000100000001000", "0000000000000000000000000000000000000000000001110000010000000100" ], [ "1000000010000000100000001000000010000000000000000000000000000000", "0100000001000000010000000100000001000000000000000000000000000000", "0010000000100000001000000010000000100000000000000000000000000000", "0001000000010000000100000001000000010000000000000000000000000000", "0000100000001000000010000000100000001000000000000000000000000000", "0000010000000100000001000000010000000100000000000000000000000000", "0000001000000010000000100000001000000010000000000000000000000000", "0000000100000001000000010000000100000001000000000000000000000000", "0000000010000000100000001000000010000000100000000000000000000000", "0000000001000000010000000100000001000000010000000000000000000000", "0000000000100000001000000010000000100000001000000000000000000000", "0000000000010000000100000001000000010000000100000000000000000000", "0000000000001000000010000000100000001000000010000000000000000000", "0000000000000100000001000000010000000100000001000000000000000000", "0000000000000010000000100000001000000010000000100000000000000000", "0000000000000001000000010000000100000001000000010000000000000000", "0000000000000000100000001000000010000000100000001000000000000000", "0000000000000000010000000100000001000000010000000100000000000000", "0000000000000000001000000010000000100000001000000010000000000000", "0000000000000000000100000001000000010000000100000001000000000000", "0000000000000000000010000000100000001000000010000000100000000000", "0000000000000000000001000000010000000100000001000000010000000000", "0000000000000000000000100000001000000010000000100000001000000000", "0000000000000000000000010000000100000001000000010000000100000000", "0000000000000000000000001000000010000000100000001000000010000000", "0000000000000000000000000100000001000000010000000100000001000000", "0000000000000000000000000010000000100000001000000010000000100000", "0000000000000000000000000001000000010000000100000001000000010000", "0000000000000000000000000000100000001000000010000000100000001000", "0000000000000000000000000000010000000100000001000000010000000100", "0000000000000000000000000000001000000010000000100000001000000010", "0000000000000000000000000000000100000001000000010000000100000001" ], [ "1000000010000000111000000000000000000000000000000000000000000000", "0100000001000000011100000000000000000000000000000000000000000000", "0010000000100000001110000000000000000000000000000000000000000000", "0001000000010000000111000000000000000000000000000000000000000000", "0000100000001000000011100000000000000000000000000000000000000000", "0000010000000100000001110000000000000000000000000000000000000000", "0000000010000000100000001110000000000000000000000000000000000000", "0000000001000000010000000111000000000000000000000000000000000000", "0000000000100000001000000011100000000000000000000000000000000000", "0000000000010000000100000001110000000000000000000000000000000000", "0000000000001000000010000000111000000000000000000000000000000000", "0000000000000100000001000000011100000000000000000000000000000000", "0000000000000000100000001000000011100000000000000000000000000000", "0000000000000000010000000100000001110000000000000000000000000000", "0000000000000000001000000010000000111000000000000000000000000000", "0000000000000000000100000001000000011100000000000000000000000000", "0000000000000000000010000000100000001110000000000000000000000000", "0000000000000000000001000000010000000111000000000000000000000000", "0000000000000000000000001000000010000000111000000000000000000000", "0000000000000000000000000100000001000000011100000000000000000000", "0000000000000000000000000010000000100000001110000000000000000000", "0000000000000000000000000001000000010000000111000000000000000000", "0000000000000000000000000000100000001000000011100000000000000000", "0000000000000000000000000000010000000100000001110000000000000000", "0000000000000000000000000000000010000000100000001110000000000000", "0000000000000000000000000000000001000000010000000111000000000000", "0000000000000000000000000000000000100000001000000011100000000000", "0000000000000000000000000000000000010000000100000001110000000000", "0000000000000000000000000000000000001000000010000000111000000000", "0000000000000000000000000000000000000100000001000000011100000000", "0000000000000000000000000000000000000000100000001000000011100000", "0000000000000000000000000000000000000000010000000100000001110000", "0000000000000000000000000000000000000000001000000010000000111000", "0000000000000000000000000000000000000000000100000001000000011100", "0000000000000000000000000000000000000000000010000000100000001110", "0000000000000000000000000000000000000000000001000000010000000111" ], [ "0010000000100000111000000000000000000000000000000000000000000000", "0001000000010000011100000000000000000000000000000000000000000000", "0000100000001000001110000000000000000000000000000000000000000000", "0000010000000100000111000000000000000000000000000000000000000000", "0000001000000010000011100000000000000000000000000000000000000000", "0000000100000001000001110000000000000000000000000000000000000000", "0000000000100000001000001110000000000000000000000000000000000000", "0000000000010000000100000111000000000000000000000000000000000000", "0000000000001000000010000011100000000000000000000000000000000000", "0000000000000100000001000001110000000000000000000000000000000000", "0000000000000010000000100000111000000000000000000000000000000000", "0000000000000001000000010000011100000000000000000000000000000000", "0000000000000000001000000010000011100000000000000000000000000000", "0000000000000000000100000001000001110000000000000000000000000000", "0000000000000000000010000000100000111000000000000000000000000000", "0000000000000000000001000000010000011100000000000000000000000000", "0000000000000000000000100000001000001110000000000000000000000000", "0000000000000000000000010000000100000111000000000000000000000000", "0000000000000000000000000010000000100000111000000000000000000000", "0000000000000000000000000001000000010000011100000000000000000000", "0000000000000000000000000000100000001000001110000000000000000000", "0000000000000000000000000000010000000100000111000000000000000000", "0000000000000000000000000000001000000010000011100000000000000000", "0000000000000000000000000000000100000001000001110000000000000000", "0000000000000000000000000000000000100000001000001110000000000000", "0000000000000000000000000000000000010000000100000111000000000000", "0000000000000000000000000000000000001000000010000011100000000000", "0000000000000000000000000000000000000100000001000001110000000000", "0000000000000000000000000000000000000010000000100000111000000000", "0000000000000000000000000000000000000001000000010000011100000000", "0000000000000000000000000000000000000000001000000010000011100000", "0000000000000000000000000000000000000000000100000001000001110000", "0000000000000000000000000000000000000000000010000000100000111000", "0000000000000000000000000000000000000000000001000000010000011100", "0000000000000000000000000000000000000000000000100000001000001110", "0000000000000000000000000000000000000000000000010000000100000111" ], [ "0100000011000000010000000000000000000000000000000000000000000000", "0010000001100000001000000000000000000000000000000000000000000000", "0001000000110000000100000000000000000000000000000000000000000000", "0000100000011000000010000000000000000000000000000000000000000000", "0000010000001100000001000000000000000000000000000000000000000000", "0000001000000110000000100000000000000000000000000000000000000000", "0000000100000011000000010000000000000000000000000000000000000000", "0000000001000000110000000100000000000000000000000000000000000000", "0000000000100000011000000010000000000000000000000000000000000000", "0000000000010000001100000001000000000000000000000000000000000000", "0000000000001000000110000000100000000000000000000000000000000000", "0000000000000100000011000000010000000000000000000000000000000000", "0000000000000010000001100000001000000000000000000000000000000000", "0000000000000001000000110000000100000000000000000000000000000000", "0000000000000000010000001100000001000000000000000000000000000000", "0000000000000000001000000110000000100000000000000000000000000000", "0000000000000000000100000011000000010000000000000000000000000000", "0000000000000000000010000001100000001000000000000000000000000000", "0000000000000000000001000000110000000100000000000000000000000000", "0000000000000000000000100000011000000010000000000000000000000000", "0000000000000000000000010000001100000001000000000000000000000000", "0000000000000000000000000100000011000000010000000000000000000000", "0000000000000000000000000010000001100000001000000000000000000000", "0000000000000000000000000001000000110000000100000000000000000000", "0000000000000000000000000000100000011000000010000000000000000000", "0000000000000000000000000000010000001100000001000000000000000000", "0000000000000000000000000000001000000110000000100000000000000000", "0000000000000000000000000000000100000011000000010000000000000000", "0000000000000000000000000000000001000000110000000100000000000000", "0000000000000000000000000000000000100000011000000010000000000000", "0000000000000000000000000000000000010000001100000001000000000000", "0000000000000000000000000000000000001000000110000000100000000000", "0000000000000000000000000000000000000100000011000000010000000000", "0000000000000000000000000000000000000010000001100000001000000000", "0000000000000000000000000000000000000001000000110000000100000000", "0000000000000000000000000000000000000000010000001100000001000000", "0000000000000000000000000000000000000000001000000110000000100000", "0000000000000000000000000000000000000000000100000011000000010000", "0000000000000000000000000000000000000000000010000001100000001000", "0000000000000000000000000000000000000000000001000000110000000100", "0000000000000000000000000000000000000000000000100000011000000010", "0000000000000000000000000000000000000000000000010000001100000001" ], [ "1110000001000000000000000000000000000000000000000000000000000000", "0111000000100000000000000000000000000000000000000000000000000000", "0011100000010000000000000000000000000000000000000000000000000000", "0001110000001000000000000000000000000000000000000000000000000000", "0000111000000100000000000000000000000000000000000000000000000000", "0000011100000010000000000000000000000000000000000000000000000000", "0000000011100000010000000000000000000000000000000000000000000000", "0000000001110000001000000000000000000000000000000000000000000000", "0000000000111000000100000000000000000000000000000000000000000000", "0000000000011100000010000000000000000000000000000000000000000000", "0000000000001110000001000000000000000000000000000000000000000000", "0000000000000111000000100000000000000000000000000000000000000000", "0000000000000000111000000100000000000000000000000000000000000000", "0000000000000000011100000010000000000000000000000000000000000000", "0000000000000000001110000001000000000000000000000000000000000000", "0000000000000000000111000000100000000000000000000000000000000000", "0000000000000000000011100000010000000000000000000000000000000000", "0000000000000000000001110000001000000000000000000000000000000000", "0000000000000000000000001110000001000000000000000000000000000000", "0000000000000000000000000111000000100000000000000000000000000000", "0000000000000000000000000011100000010000000000000000000000000000", "0000000000000000000000000001110000001000000000000000000000000000", "0000000000000000000000000000111000000100000000000000000000000000", "0000000000000000000000000000011100000010000000000000000000000000", "0000000000000000000000000000000011100000010000000000000000000000", "0000000000000000000000000000000001110000001000000000000000000000", "0000000000000000000000000000000000111000000100000000000000000000", "0000000000000000000000000000000000011100000010000000000000000000", "0000000000000000000000000000000000001110000001000000000000000000", "0000000000000000000000000000000000000111000000100000000000000000", "0000000000000000000000000000000000000000111000000100000000000000", "0000000000000000000000000000000000000000011100000010000000000000", "0000000000000000000000000000000000000000001110000001000000000000", "0000000000000000000000000000000000000000000111000000100000000000", "0000000000000000000000000000000000000000000011100000010000000000", "0000000000000000000000000000000000000000000001110000001000000000", "0000000000000000000000000000000000000000000000001110000001000000", "0000000000000000000000000000000000000000000000000111000000100000", "0000000000000000000000000000000000000000000000000011100000010000", "0000000000000000000000000000000000000000000000000001110000001000", "0000000000000000000000000000000000000000000000000000111000000100", "0000000000000000000000000000000000000000000000000000011100000010" ], [ "1000000011000000000000000000000000000000000000000000000000000000", "0100000001100000000000000000000000000000000000000000000000000000", "0010000000110000000000000000000000000000000000000000000000000000", "0001000000011000000000000000000000000000000000000000000000000000", "0000100000001100000000000000000000000000000000000000000000000000", "0000010000000110000000000000000000000000000000000000000000000000", "0000001000000011000000000000000000000000000000000000000000000000", "0000000010000000110000000000000000000000000000000000000000000000", "0000000001000000011000000000000000000000000000000000000000000000", "0000000000100000001100000000000000000000000000000000000000000000", "0000000000010000000110000000000000000000000000000000000000000000", "0000000000001000000011000000000000000000000000000000000000000000", "0000000000000100000001100000000000000000000000000000000000000000", "0000000000000010000000110000000000000000000000000000000000000000", "0000000000000000100000001100000000000000000000000000000000000000", "0000000000000000010000000110000000000000000000000000000000000000", "0000000000000000001000000011000000000000000000000000000000000000", "0000000000000000000100000001100000000000000000000000000000000000", "0000000000000000000010000000110000000000000000000000000000000000", "0000000000000000000001000000011000000000000000000000000000000000", "0000000000000000000000100000001100000000000000000000000000000000", "0000000000000000000000001000000011000000000000000000000000000000", "0000000000000000000000000100000001100000000000000000000000000000", "0000000000000000000000000010000000110000000000000000000000000000", "0000000000000000000000000001000000011000000000000000000000000000", "0000000000000000000000000000100000001100000000000000000000000000", "0000000000000000000000000000010000000110000000000000000000000000", "0000000000000000000000000000001000000011000000000000000000000000", "0000000000000000000000000000000010000000110000000000000000000000", "0000000000000000000000000000000001000000011000000000000000000000", "0000000000000000000000000000000000100000001100000000000000000000", "0000000000000000000000000000000000010000000110000000000000000000", "0000000000000000000000000000000000001000000011000000000000000000", "0000000000000000000000000000000000000100000001100000000000000000", "0000000000000000000000000000000000000010000000110000000000000000", "0000000000000000000000000000000000000000100000001100000000000000", "0000000000000000000000000000000000000000010000000110000000000000", "0000000000000000000000000000000000000000001000000011000000000000", "0000000000000000000000000000000000000000000100000001100000000000", "0000000000000000000000000000000000000000000010000000110000000000", "0000000000000000000000000000000000000000000001000000011000000000", "0000000000000000000000000000000000000000000000100000001100000000", "0000000000000000000000000000000000000000000000001000000011000000", "0000000000000000000000000000000000000000000000000100000001100000", "0000000000000000000000000000000000000000000000000010000000110000", "0000000000000000000000000000000000000000000000000001000000011000", "0000000000000000000000000000000000000000000000000000100000001100", "0000000000000000000000000000000000000000000000000000010000000110", "0000000000000000000000000000000000000000000000000000001000000011" ], [ "0100000011000000000000000000000000000000000000000000000000000000", "0010000001100000000000000000000000000000000000000000000000000000", "0001000000110000000000000000000000000000000000000000000000000000", "0000100000011000000000000000000000000000000000000000000000000000", "0000010000001100000000000000000000000000000000000000000000000000", "0000001000000110000000000000000000000000000000000000000000000000", "0000000100000011000000000000000000000000000000000000000000000000", "0000000001000000110000000000000000000000000000000000000000000000", "0000000000100000011000000000000000000000000000000000000000000000", "0000000000010000001100000000000000000000000000000000000000000000", "0000000000001000000110000000000000000000000000000000000000000000", "0000000000000100000011000000000000000000000000000000000000000000", "0000000000000010000001100000000000000000000000000000000000000000", "0000000000000001000000110000000000000000000000000000000000000000", "0000000000000000010000001100000000000000000000000000000000000000", "0000000000000000001000000110000000000000000000000000000000000000", "0000000000000000000100000011000000000000000000000000000000000000", "0000000000000000000010000001100000000000000000000000000000000000", "0000000000000000000001000000110000000000000000000000000000000000", "0000000000000000000000100000011000000000000000000000000000000000", "0000000000000000000000010000001100000000000000000000000000000000", "0000000000000000000000000100000011000000000000000000000000000000", "0000000000000000000000000010000001100000000000000000000000000000", "0000000000000000000000000001000000110000000000000000000000000000", "0000000000000000000000000000100000011000000000000000000000000000", "0000000000000000000000000000010000001100000000000000000000000000", "0000000000000000000000000000001000000110000000000000000000000000", "0000000000000000000000000000000100000011000000000000000000000000", "0000000000000000000000000000000001000000110000000000000000000000", "0000000000000000000000000000000000100000011000000000000000000000", "0000000000000000000000000000000000010000001100000000000000000000", "0000000000000000000000000000000000001000000110000000000000000000", "0000000000000000000000000000000000000100000011000000000000000000", "0000000000000000000000000000000000000010000001100000000000000000", "0000000000000000000000000000000000000001000000110000000000000000", "0000000000000000000000000000000000000000010000001100000000000000", "0000000000000000000000000000000000000000001000000110000000000000", "0000000000000000000000000000000000000000000100000011000000000000", "0000000000000000000000000000000000000000000010000001100000000000", "0000000000000000000000000000000000000000000001000000110000000000", "0000000000000000000000000000000000000000000000100000011000000000", "0000000000000000000000000000000000000000000000010000001100000000", "0000000000000000000000000000000000000000000000000100000011000000", "0000000000000000000000000000000000000000000000000010000001100000", "0000000000000000000000000000000000000000000000000001000000110000", "0000000000000000000000000000000000000000000000000000100000011000", "0000000000000000000000000000000000000000000000000000010000001100", "0000000000000000000000000000000000000000000000000000001000000110", "0000000000000000000000000000000000000000000000000000000100000011" ], [ "0100000001000000110000000000000000000000000000000000000000000000", "0010000000100000011000000000000000000000000000000000000000000000", "0001000000010000001100000000000000000000000000000000000000000000", "0000100000001000000110000000000000000000000000000000000000000000", "0000010000000100000011000000000000000000000000000000000000000000", "0000001000000010000001100000000000000000000000000000000000000000", "0000000100000001000000110000000000000000000000000000000000000000", "0000000001000000010000001100000000000000000000000000000000000000", "0000000000100000001000000110000000000000000000000000000000000000", "0000000000010000000100000011000000000000000000000000000000000000", "0000000000001000000010000001100000000000000000000000000000000000", "0000000000000100000001000000110000000000000000000000000000000000", "0000000000000010000000100000011000000000000000000000000000000000", "0000000000000001000000010000001100000000000000000000000000000000", "0000000000000000010000000100000011000000000000000000000000000000", "0000000000000000001000000010000001100000000000000000000000000000", "0000000000000000000100000001000000110000000000000000000000000000", "0000000000000000000010000000100000011000000000000000000000000000", "0000000000000000000001000000010000001100000000000000000000000000", "0000000000000000000000100000001000000110000000000000000000000000", "0000000000000000000000010000000100000011000000000000000000000000", "0000000000000000000000000100000001000000110000000000000000000000", "0000000000000000000000000010000000100000011000000000000000000000", "0000000000000000000000000001000000010000001100000000000000000000", "0000000000000000000000000000100000001000000110000000000000000000", "0000000000000000000000000000010000000100000011000000000000000000", "0000000000000000000000000000001000000010000001100000000000000000", "0000000000000000000000000000000100000001000000110000000000000000", "0000000000000000000000000000000001000000010000001100000000000000", "0000000000000000000000000000000000100000001000000110000000000000", "0000000000000000000000000000000000010000000100000011000000000000", "0000000000000000000000000000000000001000000010000001100000000000", "0000000000000000000000000000000000000100000001000000110000000000", "0000000000000000000000000000000000000010000000100000011000000000", "0000000000000000000000000000000000000001000000010000001100000000", "0000000000000000000000000000000000000000010000000100000011000000", "0000000000000000000000000000000000000000001000000010000001100000", "0000000000000000000000000000000000000000000100000001000000110000", "0000000000000000000000000000000000000000000010000000100000011000", "0000000000000000000000000000000000000000000001000000010000001100", "0000000000000000000000000000000000000000000000100000001000000110", "0000000000000000000000000000000000000000000000010000000100000011" ], [ "1110000000100000000000000000000000000000000000000000000000000000", "0111000000010000000000000000000000000000000000000000000000000000", "0011100000001000000000000000000000000000000000000000000000000000", "0001110000000100000000000000000000000000000000000000000000000000", "0000111000000010000000000000000000000000000000000000000000000000", "0000011100000001000000000000000000000000000000000000000000000000", "0000000011100000001000000000000000000000000000000000000000000000", "0000000001110000000100000000000000000000000000000000000000000000", "0000000000111000000010000000000000000000000000000000000000000000", "0000000000011100000001000000000000000000000000000000000000000000", "0000000000001110000000100000000000000000000000000000000000000000", "0000000000000111000000010000000000000000000000000000000000000000", "0000000000000000111000000010000000000000000000000000000000000000", "0000000000000000011100000001000000000000000000000000000000000000", "0000000000000000001110000000100000000000000000000000000000000000", "0000000000000000000111000000010000000000000000000000000000000000", "0000000000000000000011100000001000000000000000000000000000000000", "0000000000000000000001110000000100000000000000000000000000000000", "0000000000000000000000001110000000100000000000000000000000000000", "0000000000000000000000000111000000010000000000000000000000000000", "0000000000000000000000000011100000001000000000000000000000000000", "0000000000000000000000000001110000000100000000000000000000000000", "0000000000000000000000000000111000000010000000000000000000000000", "0000000000000000000000000000011100000001000000000000000000000000", "0000000000000000000000000000000011100000001000000000000000000000", "0000000000000000000000000000000001110000000100000000000000000000", "0000000000000000000000000000000000111000000010000000000000000000", "0000000000000000000000000000000000011100000001000000000000000000", "0000000000000000000000000000000000001110000000100000000000000000", "0000000000000000000000000000000000000111000000010000000000000000", "0000000000000000000000000000000000000000111000000010000000000000", "0000000000000000000000000000000000000000011100000001000000000000", "0000000000000000000000000000000000000000001110000000100000000000", "0000000000000000000000000000000000000000000111000000010000000000", "0000000000000000000000000000000000000000000011100000001000000000", "0000000000000000000000000000000000000000000001110000000100000000", "0000000000000000000000000000000000000000000000001110000000100000", "0000000000000000000000000000000000000000000000000111000000010000", "0000000000000000000000000000000000000000000000000011100000001000", "0000000000000000000000000000000000000000000000000001110000000100", "0000000000000000000000000000000000000000000000000000111000000010", "0000000000000000000000000000000000000000000000000000011100000001" ], [ "1100000010000000100000000000000000000000000000000000000000000000", "0110000001000000010000000000000000000000000000000000000000000000", "0011000000100000001000000000000000000000000000000000000000000000", "0001100000010000000100000000000000000000000000000000000000000000", "0000110000001000000010000000000000000000000000000000000000000000", "0000011000000100000001000000000000000000000000000000000000000000", "0000001100000010000000100000000000000000000000000000000000000000", "0000000011000000100000001000000000000000000000000000000000000000", "0000000001100000010000000100000000000000000000000000000000000000", "0000000000110000001000000010000000000000000000000000000000000000", "0000000000011000000100000001000000000000000000000000000000000000", "0000000000001100000010000000100000000000000000000000000000000000", "0000000000000110000001000000010000000000000000000000000000000000", "0000000000000011000000100000001000000000000000000000000000000000", "0000000000000000110000001000000010000000000000000000000000000000", "0000000000000000011000000100000001000000000000000000000000000000", "0000000000000000001100000010000000100000000000000000000000000000", "0000000000000000000110000001000000010000000000000000000000000000", "0000000000000000000011000000100000001000000000000000000000000000", "0000000000000000000001100000010000000100000000000000000000000000", "0000000000000000000000110000001000000010000000000000000000000000", "0000000000000000000000001100000010000000100000000000000000000000", "0000000000000000000000000110000001000000010000000000000000000000", "0000000000000000000000000011000000100000001000000000000000000000", "0000000000000000000000000001100000010000000100000000000000000000", "0000000000000000000000000000110000001000000010000000000000000000", "0000000000000000000000000000011000000100000001000000000000000000", "0000000000000000000000000000001100000010000000100000000000000000", "0000000000000000000000000000000011000000100000001000000000000000", "0000000000000000000000000000000001100000010000000100000000000000", "0000000000000000000000000000000000110000001000000010000000000000", "0000000000000000000000000000000000011000000100000001000000000000", "0000000000000000000000000000000000001100000010000000100000000000", "0000000000000000000000000000000000000110000001000000010000000000", "0000000000000000000000000000000000000011000000100000001000000000", "0000000000000000000000000000000000000000110000001000000010000000", "0000000000000000000000000000000000000000011000000100000001000000", "0000000000000000000000000000000000000000001100000010000000100000", "0000000000000000000000000000000000000000000110000001000000010000", "0000000000000000000000000000000000000000000011000000100000001000", "0000000000000000000000000000000000000000000001100000010000000100", "0000000000000000000000000000000000000000000000110000001000000010" ], [ "1100000001000000010000000000000000000000000000000000000000000000", "0110000000100000001000000000000000000000000000000000000000000000", "0011000000010000000100000000000000000000000000000000000000000000", "0001100000001000000010000000000000000000000000000000000000000000", "0000110000000100000001000000000000000000000000000000000000000000", "0000011000000010000000100000000000000000000000000000000000000000", "0000001100000001000000010000000000000000000000000000000000000000", "0000000011000000010000000100000000000000000000000000000000000000", "0000000001100000001000000010000000000000000000000000000000000000", "0000000000110000000100000001000000000000000000000000000000000000", "0000000000011000000010000000100000000000000000000000000000000000", "0000000000001100000001000000010000000000000000000000000000000000", "0000000000000110000000100000001000000000000000000000000000000000", "0000000000000011000000010000000100000000000000000000000000000000", "0000000000000000110000000100000001000000000000000000000000000000", "0000000000000000011000000010000000100000000000000000000000000000", "0000000000000000001100000001000000010000000000000000000000000000", "0000000000000000000110000000100000001000000000000000000000000000", "0000000000000000000011000000010000000100000000000000000000000000", "0000000000000000000001100000001000000010000000000000000000000000", "0000000000000000000000110000000100000001000000000000000000000000", "0000000000000000000000001100000001000000010000000000000000000000", "0000000000000000000000000110000000100000001000000000000000000000", "0000000000000000000000000011000000010000000100000000000000000000", "0000000000000000000000000001100000001000000010000000000000000000", "0000000000000000000000000000110000000100000001000000000000000000", "0000000000000000000000000000011000000010000000100000000000000000", "0000000000000000000000000000001100000001000000010000000000000000", "0000000000000000000000000000000011000000010000000100000000000000", "0000000000000000000000000000000001100000001000000010000000000000", "0000000000000000000000000000000000110000000100000001000000000000", "0000000000000000000000000000000000011000000010000000100000000000", "0000000000000000000000000000000000001100000001000000010000000000", "0000000000000000000000000000000000000110000000100000001000000000", "0000000000000000000000000000000000000011000000010000000100000000", "0000000000000000000000000000000000000000110000000100000001000000", "0000000000000000000000000000000000000000011000000010000000100000", "0000000000000000000000000000000000000000001100000001000000010000", "0000000000000000000000000000000000000000000110000000100000001000", "0000000000000000000000000000000000000000000011000000010000000100", "0000000000000000000000000000000000000000000001100000001000000010", "0000000000000000000000000000000000000000000000110000000100000001" ], [ "0010000011100000000000000000000000000000000000000000000000000000", "0001000001110000000000000000000000000000000000000000000000000000", "0000100000111000000000000000000000000000000000000000000000000000", "0000010000011100000000000000000000000000000000000000000000000000", "0000001000001110000000000000000000000000000000000000000000000000", "0000000100000111000000000000000000000000000000000000000000000000", "0000000000100000111000000000000000000000000000000000000000000000", "0000000000010000011100000000000000000000000000000000000000000000", "0000000000001000001110000000000000000000000000000000000000000000", "0000000000000100000111000000000000000000000000000000000000000000", "0000000000000010000011100000000000000000000000000000000000000000", "0000000000000001000001110000000000000000000000000000000000000000", "0000000000000000001000001110000000000000000000000000000000000000", "0000000000000000000100000111000000000000000000000000000000000000", "0000000000000000000010000011100000000000000000000000000000000000", "0000000000000000000001000001110000000000000000000000000000000000", "0000000000000000000000100000111000000000000000000000000000000000", "0000000000000000000000010000011100000000000000000000000000000000", "0000000000000000000000000010000011100000000000000000000000000000", "0000000000000000000000000001000001110000000000000000000000000000", "0000000000000000000000000000100000111000000000000000000000000000", "0000000000000000000000000000010000011100000000000000000000000000", "0000000000000000000000000000001000001110000000000000000000000000", "0000000000000000000000000000000100000111000000000000000000000000", "0000000000000000000000000000000000100000111000000000000000000000", "0000000000000000000000000000000000010000011100000000000000000000", "0000000000000000000000000000000000001000001110000000000000000000", "0000000000000000000000000000000000000100000111000000000000000000", "0000000000000000000000000000000000000010000011100000000000000000", "0000000000000000000000000000000000000001000001110000000000000000", "0000000000000000000000000000000000000000001000001110000000000000", "0000000000000000000000000000000000000000000100000111000000000000", "0000000000000000000000000000000000000000000010000011100000000000", "0000000000000000000000000000000000000000000001000001110000000000", "0000000000000000000000000000000000000000000000100000111000000000", "0000000000000000000000000000000000000000000000010000011100000000", "0000000000000000000000000000000000000000000000000010000011100000", "0000000000000000000000000000000000000000000000000001000001110000", "0000000000000000000000000000000000000000000000000000100000111000", "0000000000000000000000000000000000000000000000000000010000011100", "0000000000000000000000000000000000000000000000000000001000001110", "0000000000000000000000000000000000000000000000000000000100000111" ], [ "1110000010000000000000000000000000000000000000000000000000000000", "0111000001000000000000000000000000000000000000000000000000000000", "0011100000100000000000000000000000000000000000000000000000000000", "0001110000010000000000000000000000000000000000000000000000000000", "0000111000001000000000000000000000000000000000000000000000000000", "0000011100000100000000000000000000000000000000000000000000000000", "0000000011100000100000000000000000000000000000000000000000000000", "0000000001110000010000000000000000000000000000000000000000000000", "0000000000111000001000000000000000000000000000000000000000000000", "0000000000011100000100000000000000000000000000000000000000000000", "0000000000001110000010000000000000000000000000000000000000000000", "0000000000000111000001000000000000000000000000000000000000000000", "0000000000000000111000001000000000000000000000000000000000000000", "0000000000000000011100000100000000000000000000000000000000000000", "0000000000000000001110000010000000000000000000000000000000000000", "0000000000000000000111000001000000000000000000000000000000000000", "0000000000000000000011100000100000000000000000000000000000000000", "0000000000000000000001110000010000000000000000000000000000000000", "0000000000000000000000001110000010000000000000000000000000000000", "0000000000000000000000000111000001000000000000000000000000000000", "0000000000000000000000000011100000100000000000000000000000000000", "0000000000000000000000000001110000010000000000000000000000000000", "0000000000000000000000000000111000001000000000000000000000000000", "0000000000000000000000000000011100000100000000000000000000000000", "0000000000000000000000000000000011100000100000000000000000000000", "0000000000000000000000000000000001110000010000000000000000000000", "0000000000000000000000000000000000111000001000000000000000000000", "0000000000000000000000000000000000011100000100000000000000000000", "0000000000000000000000000000000000001110000010000000000000000000", "0000000000000000000000000000000000000111000001000000000000000000", "0000000000000000000000000000000000000000111000001000000000000000", "0000000000000000000000000000000000000000011100000100000000000000", "0000000000000000000000000000000000000000001110000010000000000000", "0000000000000000000000000000000000000000000111000001000000000000", "0000000000000000000000000000000000000000000011100000100000000000", "0000000000000000000000000000000000000000000001110000010000000000", "0000000000000000000000000000000000000000000000001110000010000000", "0000000000000000000000000000000000000000000000000111000001000000", "0000000000000000000000000000000000000000000000000011100000100000", "0000000000000000000000000000000000000000000000000001110000010000", "0000000000000000000000000000000000000000000000000000111000001000", "0000000000000000000000000000000000000000000000000000011100000100" ], [ "1110000011100000000000000000000000000000000000000000000000000000", "0111000001110000000000000000000000000000000000000000000000000000", "0011100000111000000000000000000000000000000000000000000000000000", "0001110000011100000000000000000000000000000000000000000000000000", "0000111000001110000000000000000000000000000000000000000000000000", "0000011100000111000000000000000000000000000000000000000000000000", "0000000011100000111000000000000000000000000000000000000000000000", "0000000001110000011100000000000000000000000000000000000000000000", "0000000000111000001110000000000000000000000000000000000000000000", "0000000000011100000111000000000000000000000000000000000000000000", "0000000000001110000011100000000000000000000000000000000000000000", "0000000000000111000001110000000000000000000000000000000000000000", "0000000000000000111000001110000000000000000000000000000000000000", "0000000000000000011100000111000000000000000000000000000000000000", "0000000000000000001110000011100000000000000000000000000000000000", "0000000000000000000111000001110000000000000000000000000000000000", "0000000000000000000011100000111000000000000000000000000000000000", "0000000000000000000001110000011100000000000000000000000000000000", "0000000000000000000000001110000011100000000000000000000000000000", "0000000000000000000000000111000001110000000000000000000000000000", "0000000000000000000000000011100000111000000000000000000000000000", "0000000000000000000000000001110000011100000000000000000000000000", "0000000000000000000000000000111000001110000000000000000000000000", "0000000000000000000000000000011100000111000000000000000000000000", "0000000000000000000000000000000011100000111000000000000000000000", "0000000000000000000000000000000001110000011100000000000000000000", "0000000000000000000000000000000000111000001110000000000000000000", "0000000000000000000000000000000000011100000111000000000000000000", "0000000000000000000000000000000000001110000011100000000000000000", "0000000000000000000000000000000000000111000001110000000000000000", "0000000000000000000000000000000000000000111000001110000000000000", "0000000000000000000000000000000000000000011100000111000000000000", "0000000000000000000000000000000000000000001110000011100000000000", "0000000000000000000000000000000000000000000111000001110000000000", "0000000000000000000000000000000000000000000011100000111000000000", "0000000000000000000000000000000000000000000001110000011100000000", "0000000000000000000000000000000000000000000000001110000011100000", "0000000000000000000000000000000000000000000000000111000001110000", "0000000000000000000000000000000000000000000000000011100000111000", "0000000000000000000000000000000000000000000000000001110000011100", "0000000000000000000000000000000000000000000000000000111000001110", "0000000000000000000000000000000000000000000000000000011100000111" ], [ "1100000011000000110000000000000000000000000000000000000000000000", "0110000001100000011000000000000000000000000000000000000000000000", "0011000000110000001100000000000000000000000000000000000000000000", "0001100000011000000110000000000000000000000000000000000000000000", "0000110000001100000011000000000000000000000000000000000000000000", "0000011000000110000001100000000000000000000000000000000000000000", "0000001100000011000000110000000000000000000000000000000000000000", "0000000011000000110000001100000000000000000000000000000000000000", "0000000001100000011000000110000000000000000000000000000000000000", "0000000000110000001100000011000000000000000000000000000000000000", "0000000000011000000110000001100000000000000000000000000000000000", "0000000000001100000011000000110000000000000000000000000000000000", "0000000000000110000001100000011000000000000000000000000000000000", "0000000000000011000000110000001100000000000000000000000000000000", "0000000000000000110000001100000011000000000000000000000000000000", "0000000000000000011000000110000001100000000000000000000000000000", "0000000000000000001100000011000000110000000000000000000000000000", "0000000000000000000110000001100000011000000000000000000000000000", "0000000000000000000011000000110000001100000000000000000000000000", "0000000000000000000001100000011000000110000000000000000000000000", "0000000000000000000000110000001100000011000000000000000000000000", "0000000000000000000000001100000011000000110000000000000000000000", "0000000000000000000000000110000001100000011000000000000000000000", "0000000000000000000000000011000000110000001100000000000000000000", "0000000000000000000000000001100000011000000110000000000000000000", "0000000000000000000000000000110000001100000011000000000000000000", "0000000000000000000000000000011000000110000001100000000000000000", "0000000000000000000000000000001100000011000000110000000000000000", "0000000000000000000000000000000011000000110000001100000000000000", "0000000000000000000000000000000001100000011000000110000000000000", "0000000000000000000000000000000000110000001100000011000000000000", "0000000000000000000000000000000000011000000110000001100000000000", "0000000000000000000000000000000000001100000011000000110000000000", "0000000000000000000000000000000000000110000001100000011000000000", "0000000000000000000000000000000000000011000000110000001100000000", "0000000000000000000000000000000000000000110000001100000011000000", "0000000000000000000000000000000000000000011000000110000001100000", "0000000000000000000000000000000000000000001100000011000000110000", "0000000000000000000000000000000000000000000110000001100000011000", "0000000000000000000000000000000000000000000011000000110000001100", "0000000000000000000000000000000000000000000001100000011000000110", "0000000000000000000000000000000000000000000000110000001100000011" ], [ "1000000001000000000000000000000000000000000000000000000000000000", "0100000000100000000000000000000000000000000000000000000000000000", "0010000000010000000000000000000000000000000000000000000000000000", "0001000000001000000000000000000000000000000000000000000000000000", "0000100000000100000000000000000000000000000000000000000000000000", "0000010000000010000000000000000000000000000000000000000000000000", "0000001000000001000000000000000000000000000000000000000000000000", "0000000010000000010000000000000000000000000000000000000000000000", "0000000001000000001000000000000000000000000000000000000000000000", "0000000000100000000100000000000000000000000000000000000000000000", "0000000000010000000010000000000000000000000000000000000000000000", "0000000000001000000001000000000000000000000000000000000000000000", "0000000000000100000000100000000000000000000000000000000000000000", "0000000000000010000000010000000000000000000000000000000000000000", "0000000000000000100000000100000000000000000000000000000000000000", "0000000000000000010000000010000000000000000000000000000000000000", "0000000000000000001000000001000000000000000000000000000000000000", "0000000000000000000100000000100000000000000000000000000000000000", "0000000000000000000010000000010000000000000000000000000000000000", "0000000000000000000001000000001000000000000000000000000000000000", "0000000000000000000000100000000100000000000000000000000000000000", "0000000000000000000000001000000001000000000000000000000000000000", "0000000000000000000000000100000000100000000000000000000000000000", "0000000000000000000000000010000000010000000000000000000000000000", "0000000000000000000000000001000000001000000000000000000000000000", "0000000000000000000000000000100000000100000000000000000000000000", "0000000000000000000000000000010000000010000000000000000000000000", "0000000000000000000000000000001000000001000000000000000000000000", "0000000000000000000000000000000010000000010000000000000000000000", "0000000000000000000000000000000001000000001000000000000000000000", "0000000000000000000000000000000000100000000100000000000000000000", "0000000000000000000000000000000000010000000010000000000000000000", "0000000000000000000000000000000000001000000001000000000000000000", "0000000000000000000000000000000000000100000000100000000000000000", "0000000000000000000000000000000000000010000000010000000000000000", "0000000000000000000000000000000000000000100000000100000000000000", "0000000000000000000000000000000000000000010000000010000000000000", "0000000000000000000000000000000000000000001000000001000000000000", "0000000000000000000000000000000000000000000100000000100000000000", "0000000000000000000000000000000000000000000010000000010000000000", "0000000000000000000000000000000000000000000001000000001000000000", "0000000000000000000000000000000000000000000000100000000100000000", "0000000000000000000000000000000000000000000000001000000001000000", "0000000000000000000000000000000000000000000000000100000000100000", "0000000000000000000000000000000000000000000000000010000000010000", "0000000000000000000000000000000000000000000000000001000000001000", "0000000000000000000000000000000000000000000000000000100000000100", "0000000000000000000000000000000000000000000000000000010000000010", "0000000000000000000000000000000000000000000000000000001000000001" ], [ "0100000010000000000000000000000000000000000000000000000000000000", "0010000001000000000000000000000000000000000000000000000000000000", "0001000000100000000000000000000000000000000000000000000000000000", "0000100000010000000000000000000000000000000000000000000000000000", "0000010000001000000000000000000000000000000000000000000000000000", "0000001000000100000000000000000000000000000000000000000000000000", "0000000100000010000000000000000000000000000000000000000000000000", "0000000001000000100000000000000000000000000000000000000000000000", "0000000000100000010000000000000000000000000000000000000000000000", "0000000000010000001000000000000000000000000000000000000000000000", "0000000000001000000100000000000000000000000000000000000000000000", "0000000000000100000010000000000000000000000000000000000000000000", "0000000000000010000001000000000000000000000000000000000000000000", "0000000000000001000000100000000000000000000000000000000000000000", "0000000000000000010000001000000000000000000000000000000000000000", "0000000000000000001000000100000000000000000000000000000000000000", "0000000000000000000100000010000000000000000000000000000000000000", "0000000000000000000010000001000000000000000000000000000000000000", "0000000000000000000001000000100000000000000000000000000000000000", "0000000000000000000000100000010000000000000000000000000000000000", "0000000000000000000000010000001000000000000000000000000000000000", "0000000000000000000000000100000010000000000000000000000000000000", "0000000000000000000000000010000001000000000000000000000000000000", "0000000000000000000000000001000000100000000000000000000000000000", "0000000000000000000000000000100000010000000000000000000000000000", "0000000000000000000000000000010000001000000000000000000000000000", "0000000000000000000000000000001000000100000000000000000000000000", "0000000000000000000000000000000100000010000000000000000000000000", "0000000000000000000000000000000001000000100000000000000000000000", "0000000000000000000000000000000000100000010000000000000000000000", "0000000000000000000000000000000000010000001000000000000000000000", "0000000000000000000000000000000000001000000100000000000000000000", "0000000000000000000000000000000000000100000010000000000000000000", "0000000000000000000000000000000000000010000001000000000000000000", "0000000000000000000000000000000000000001000000100000000000000000", "0000000000000000000000000000000000000000010000001000000000000000", "0000000000000000000000000000000000000000001000000100000000000000", "0000000000000000000000000000000000000000000100000010000000000000", "0000000000000000000000000000000000000000000010000001000000000000", "0000000000000000000000000000000000000000000001000000100000000000", "0000000000000000000000000000000000000000000000100000010000000000", "0000000000000000000000000000000000000000000000010000001000000000", "0000000000000000000000000000000000000000000000000100000010000000", "0000000000000000000000000000000000000000000000000010000001000000", "0000000000000000000000000000000000000000000000000001000000100000", "0000000000000000000000000000000000000000000000000000100000010000", "0000000000000000000000000000000000000000000000000000010000001000", "0000000000000000000000000000000000000000000000000000001000000100", "0000000000000000000000000000000000000000000000000000000100000010" ], [ "1000000001000000001000000000000000000000000000000000000000000000", "0100000000100000000100000000000000000000000000000000000000000000", "0010000000010000000010000000000000000000000000000000000000000000", "0001000000001000000001000000000000000000000000000000000000000000", "0000100000000100000000100000000000000000000000000000000000000000", "0000010000000010000000010000000000000000000000000000000000000000", "0000000010000000010000000010000000000000000000000000000000000000", "0000000001000000001000000001000000000000000000000000000000000000", "0000000000100000000100000000100000000000000000000000000000000000", "0000000000010000000010000000010000000000000000000000000000000000", "0000000000001000000001000000001000000000000000000000000000000000", "0000000000000100000000100000000100000000000000000000000000000000", "0000000000000000100000000100000000100000000000000000000000000000", "0000000000000000010000000010000000010000000000000000000000000000", "0000000000000000001000000001000000001000000000000000000000000000", "0000000000000000000100000000100000000100000000000000000000000000", "0000000000000000000010000000010000000010000000000000000000000000", "0000000000000000000001000000001000000001000000000000000000000000", "0000000000000000000000001000000001000000001000000000000000000000", "0000000000000000000000000100000000100000000100000000000000000000", "0000000000000000000000000010000000010000000010000000000000000000", "0000000000000000000000000001000000001000000001000000000000000000", "0000000000000000000000000000100000000100000000100000000000000000", "0000000000000000000000000000010000000010000000010000000000000000", "0000000000000000000000000000000010000000010000000010000000000000", "0000000000000000000000000000000001000000001000000001000000000000", "0000000000000000000000000000000000100000000100000000100000000000", "0000000000000000000000000000000000010000000010000000010000000000", "0000000000000000000000000000000000001000000001000000001000000000", "0000000000000000000000000000000000000100000000100000000100000000", "0000000000000000000000000000000000000000100000000100000000100000", "0000000000000000000000000000000000000000010000000010000000010000", "0000000000000000000000000000000000000000001000000001000000001000", "0000000000000000000000000000000000000000000100000000100000000100", "0000000000000000000000000000000000000000000010000000010000000010", "0000000000000000000000000000000000000000000001000000001000000001" ], [ "0010000001000000100000000000000000000000000000000000000000000000", "0001000000100000010000000000000000000000000000000000000000000000", "0000100000010000001000000000000000000000000000000000000000000000", "0000010000001000000100000000000000000000000000000000000000000000", "0000001000000100000010000000000000000000000000000000000000000000", "0000000100000010000001000000000000000000000000000000000000000000", "0000000000100000010000001000000000000000000000000000000000000000", "0000000000010000001000000100000000000000000000000000000000000000", "0000000000001000000100000010000000000000000000000000000000000000", "0000000000000100000010000001000000000000000000000000000000000000", "0000000000000010000001000000100000000000000000000000000000000000", "0000000000000001000000100000010000000000000000000000000000000000", "0000000000000000001000000100000010000000000000000000000000000000", "0000000000000000000100000010000001000000000000000000000000000000", "0000000000000000000010000001000000100000000000000000000000000000", "0000000000000000000001000000100000010000000000000000000000000000", "0000000000000000000000100000010000001000000000000000000000000000", "0000000000000000000000010000001000000100000000000000000000000000", "0000000000000000000000000010000001000000100000000000000000000000", "0000000000000000000000000001000000100000010000000000000000000000", "0000000000000000000000000000100000010000001000000000000000000000", "0000000000000000000000000000010000001000000100000000000000000000", "0000000000000000000000000000001000000100000010000000000000000000", "0000000000000000000000000000000100000010000001000000000000000000", "0000000000000000000000000000000000100000010000001000000000000000", "0000000000000000000000000000000000010000001000000100000000000000", "0000000000000000000000000000000000001000000100000010000000000000", "0000000000000000000000000000000000000100000010000001000000000000", "0000000000000000000000000000000000000010000001000000100000000000", "0000000000000000000000000000000000000001000000100000010000000000", "0000000000000000000000000000000000000000001000000100000010000000", "0000000000000000000000000000000000000000000100000010000001000000", "0000000000000000000000000000000000000000000010000001000000100000", "0000000000000000000000000000000000000000000001000000100000010000", "0000000000000000000000000000000000000000000000100000010000001000", "0000000000000000000000000000000000000000000000010000001000000100" ], [ "0010000001000000100000000000000000000000000000000000000000000000", "0001000000100000010000000000000000000000000000000000000000000000", "0000100000010000001000000000000000000000000000000000000000000000", "0000010000001000000100000000000000000000000000000000000000000000", "0000001000000100000010000000000000000000000000000000000000000000", "0000000100000010000001000000000000000000000000000000000000000000", "0000000000100000010000001000000000000000000000000000000000000000", "0000000000010000001000000100000000000000000000000000000000000000", "0000000000001000000100000010000000000000000000000000000000000000", "0000000000000100000010000001000000000000000000000000000000000000", "0000000000000010000001000000100000000000000000000000000000000000", "0000000000000001000000100000010000000000000000000000000000000000", "0000000000000000001000000100000010000000000000000000000000000000", "0000000000000000000100000010000001000000000000000000000000000000", "0000000000000000000010000001000000100000000000000000000000000000", "0000000000000000000001000000100000010000000000000000000000000000", "0000000000000000000000100000010000001000000000000000000000000000", "0000000000000000000000010000001000000100000000000000000000000000", "0000000000000000000000000010000001000000100000000000000000000000", "0000000000000000000000000001000000100000010000000000000000000000", "0000000000000000000000000000100000010000001000000000000000000000", "0000000000000000000000000000010000001000000100000000000000000000", "0000000000000000000000000000001000000100000010000000000000000000", "0000000000000000000000000000000100000010000001000000000000000000", "0000000000000000000000000000000000100000010000001000000000000000", "0000000000000000000000000000000000010000001000000100000000000000", "0000000000000000000000000000000000001000000100000010000000000000", "0000000000000000000000000000000000000100000010000001000000000000", "0000000000000000000000000000000000000010000001000000100000000000", "0000000000000000000000000000000000000001000000100000010000000000", "0000000000000000000000000000000000000000001000000100000010000000", "0000000000000000000000000000000000000000000100000010000001000000", "0000000000000000000000000000000000000000000010000001000000100000", "0000000000000000000000000000000000000000000001000000100000010000", "0000000000000000000000000000000000000000000000100000010000001000", "0000000000000000000000000000000000000000000000010000001000000100" ], [ "1000000010000000110000000000000000000000000000000000000000000000", "0100000001000000011000000000000000000000000000000000000000000000", "0010000000100000001100000000000000000000000000000000000000000000", "0001000000010000000110000000000000000000000000000000000000000000", "0000100000001000000011000000000000000000000000000000000000000000", "0000010000000100000001100000000000000000000000000000000000000000", "0000001000000010000000110000000000000000000000000000000000000000", "0000000010000000100000001100000000000000000000000000000000000000", "0000000001000000010000000110000000000000000000000000000000000000", "0000000000100000001000000011000000000000000000000000000000000000", "0000000000010000000100000001100000000000000000000000000000000000", "0000000000001000000010000000110000000000000000000000000000000000", "0000000000000100000001000000011000000000000000000000000000000000", "0000000000000010000000100000001100000000000000000000000000000000", "0000000000000000100000001000000011000000000000000000000000000000", "0000000000000000010000000100000001100000000000000000000000000000", "0000000000000000001000000010000000110000000000000000000000000000", "0000000000000000000100000001000000011000000000000000000000000000", "0000000000000000000010000000100000001100000000000000000000000000", "0000000000000000000001000000010000000110000000000000000000000000", "0000000000000000000000100000001000000011000000000000000000000000", "0000000000000000000000001000000010000000110000000000000000000000", "0000000000000000000000000100000001000000011000000000000000000000", "0000000000000000000000000010000000100000001100000000000000000000", "0000000000000000000000000001000000010000000110000000000000000000", "0000000000000000000000000000100000001000000011000000000000000000", "0000000000000000000000000000010000000100000001100000000000000000", "0000000000000000000000000000001000000010000000110000000000000000", "0000000000000000000000000000000010000000100000001100000000000000", "0000000000000000000000000000000001000000010000000110000000000000", "0000000000000000000000000000000000100000001000000011000000000000", "0000000000000000000000000000000000010000000100000001100000000000", "0000000000000000000000000000000000001000000010000000110000000000", "0000000000000000000000000000000000000100000001000000011000000000", "0000000000000000000000000000000000000010000000100000001100000000", "0000000000000000000000000000000000000000100000001000000011000000", "0000000000000000000000000000000000000000010000000100000001100000", "0000000000000000000000000000000000000000001000000010000000110000", "0000000000000000000000000000000000000000000100000001000000011000", "0000000000000000000000000000000000000000000010000000100000001100", "0000000000000000000000000000000000000000000001000000010000000110", "0000000000000000000000000000000000000000000000100000001000000011" ] ];
},
enumerable: !1,
configurable: !0
});
return n([ r ], e);
}());
i.default = a;
cc._RF.pop();
}, {} ],
MultTextures: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "9adc5aULtFMOZEhCtCp6XHg", "MultTextures");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.getMultMaterial = i.MultBatch2D = void 0;
var n = e("./MultUtils");
cc.Component.prototype.useMult = !1;
var o = {
texture: null,
defalut: new cc.Texture2D(),
getImpl: function() {
return this.texture;
}
};
cc.gfx.Texture2D.prototype.texID = -1;
var r = 0, a = !1, s = [];
i.MultBatch2D = {
nativeObj: null,
enable: !1,
parent: null,
curID: 0,
incID: 0,
count: 0,
hash: 0,
reset: function() {
this.count > 0 && this.curID++;
this.incID += this.count;
this.count = 0;
},
clear: function() {
for (var e = s, t = 0; t < e.length; t++) {
var i = e[t];
i.destroy();
i.decRef();
}
s.length = 0;
}
};
var c = function() {
i.MultBatch2D.enable = !1;
cc.resources.load("multTextures/Mult-material", cc.Material, function(e, t) {
if (!e) {
var o = cc.Material.getBuiltinMaterial("2d-sprite");
if (o) {
i.MultBatch2D.hash = n.getMaterialHash(o);
i.MultBatch2D.parent = t;
i.MultBatch2D.enable = !0;
t.addRef();
}
}
});
};
i.getMultMaterial = function(e) {
i.MultBatch2D.reset();
a = !1;
if (!i.MultBatch2D.enable || !e || !e.isMultTextures) return e;
if (!i.MultBatch2D.parent || !i.MultBatch2D.parent.isValid) {
c();
return e;
}
var t = s[r++];
if (!t || !t.isValid) {
t = new (0, cc.MaterialVariant)(i.MultBatch2D.parent);
s[r - 1] = t;
for (var n = 0; n < 8; n++) t.setProperty("texture" + n, o.defalut);
t.updateHash(i.MultBatch2D.hash);
t.define("USE_TEXTURE", !0);
t.isMultTextures = !0;
t.cacheTextures = [ -1 ];
t.addRef();
t._effect._nativeObj.updateHash(r + .5);
}
a = !0;
return t;
};
var p = function(e, t) {
var i = e._assembler._renderData;
if (!i) return !1;
var n = 0, o = i.vDatas[0];
if (e.dataDirty) {
e.dataDirty = !1;
for (var r = 0, a = o.length; r < a; r += 5) {
n = ~~(1e5 * o[r + 2]);
o[r + 2] = 10 * n + t;
}
} else if (e.texID != t) for (r = 0, a = o.length; r < a; r += 5) {
n = ~~(.1 * o[r + 2]);
o[r + 2] = 10 * n + t;
}
e.texID = t;
}, l = function(e, t, n) {
if (a && t) {
var r = t.effect.passes[0].getProperty("texture");
if (!r) {
e.node.name;
t.setProperty("texture", o.defalut);
r = o.defalut;
}
var s = i.MultBatch2D, c = (t.effect, r.texID - s.incID);
if (c < 0) {
if (s.count >= 8) {
n.material = i.getMultMaterial(t);
n.node = t.getDefine("CC_USE_MODEL") ? e.node : n._dummyNode;
}
c = s.count++;
r.texID = c + s.incID;
var l = n.material, _ = l.cacheTextures;
if (_[c] !== r._id) {
_[c] = r._id;
o.texture = r;
l.setProperty("texture" + c, o);
l.effect._dirty = !1;
l._dirty = !1;
}
}
var u = e._assembler;
null == u || u.updateMaterial(0, n.material);
p(e, c);
}
}, _ = function() {
if (cc.MotionStreak) {
var e = cc.MotionStreak.prototype, t = e.lateUpdate;
e.useMult = !0;
e.lateUpdate = function(e) {
t.call(this, e);
this._assembler && this._points.length >= 2 && (this.dataDirty = !0);
};
}
}, u = function() {
var e = cc.RenderComponent.prototype;
e.texID = -1;
e.vDitry = !0;
e.dataDirty = !0;
Object.defineProperty(e, "_vertsDirty", {
get: function() {
return this.vDitry;
},
set: function(e) {
!e && this.vDitry && (this.dataDirty = !0);
this.vDitry = e;
}
});
var t = e.setMaterial;
e.setMaterial = function(e, i) {
var n = t.call(this, e, i);
this.setVertsDirty();
return n;
};
var o = cc.Material.prototype, a = o.getHash;
o.getHash = function() {
var e = this._effect;
if (i.MultBatch2D.enable && e && e._dirty) {
this.isMultTextures = !1;
var t = this._owner;
if (t && !t.node.is3DNode) {
var o = t instanceof cc.Label, r = t instanceof cc.Sprite;
if (t.useMult || r || o && !t._nativeTTF()) {
var s = n.getMaterialHash(this);
if (s == i.MultBatch2D.hash) {
this.isMultTextures = !0;
e._dirty = !1;
e._hash = s;
return s;
}
}
}
}
return a.call(this);
};
e._checkBacth = function(e, t) {
var n = this._materials[0];
if (n && n.getHash() !== e.material.getHash() || e.cullingMask !== t) {
e.node = n.getDefine("CC_USE_MODEL") ? this.node : e._dummyNode;
e.material = i.getMultMaterial(n);
e.cullingMask = t;
}
l(this, n, e);
};
cc.director.on(cc.Director.EVENT_BEFORE_DRAW, function() {
r = 0;
i.MultBatch2D.reset();
i.MultBatch2D.curID = 0;
});
}, d = function() {
cc.Material.prototype._hash = -1;
cc.Material.prototype._obj = null;
cc.Component.prototype.isFlush = !1;
if (cc.MeshRenderer) {
var e = cc.MeshRenderer.prototype, t = e.onEnable;
e.onEnable = function() {
t.call(this);
this.isFlush = !0;
};
}
if (cc.ParticleSystem3D) {
var n = cc.ParticleSystem3D.prototype, o = n.onEnable;
n.onEnable = function() {
o.call(this);
this.isFlush = !0;
};
}
var r = cc.RenderFlow;
r.FLAG_REORDER_CHILDREN = 1 << 29;
r.FLAG_WORLD_TRANSFORM_CHANGED = 1 << 30;
r.FLAG_OPACITY_CHANGED = 1 << 31;
var a = [], s = [], c = !1;
cc.director;
r.render = function(e, t, i) {
void 0 === i && (i = null);
c = !0;
r.validateRenderers();
for (var n = 0, o = a.length; n < o; n++) {
var p = a[n];
p._inJsbDirtyList = !1;
var l = p._renderComponent;
if (l) {
var _ = l._assembler;
if (_) {
var u = p._dirtyPtr[0];
if (u & r.FLAG_UPDATE_RENDER_DATA) {
p._dirtyPtr[0] &= ~r.FLAG_UPDATE_RENDER_DATA;
_._updateRenderData && _._updateRenderData();
}
if (u & r.FLAG_COLOR) {
p._dirtyPtr[0] &= ~r.FLAG_COLOR;
l._updateColor && l._updateColor();
}
}
}
}
a.length = 0;
this.visitBegin(e);
t = t || 0;
this._nativeFlow.render(e._proxy, t, i);
a = s.slice(0);
s.length = 0;
c = !1;
};
r.renderCamera = function(e, t) {
r.render(t, 0, e);
};
r.init = function(e) {
cc.EventTarget.call(this);
this._nativeFlow = e;
};
r.register = function(e) {
if (!e._inJsbDirtyList) {
c ? s.push(e) : a.push(e);
e._inJsbDirtyList = !0;
}
};
var p = new cc.Node(), l = new cc.Material(), _ = {
node: p,
material: l,
cullingMask: 1,
_dummyNode: p,
reset: function() {
this.node = p;
this.empty_material = l;
this.cullingMask = 1;
this.material = i.getMultMaterial(l);
},
flush: function(e) {
this.cullingMask = e._cullingMask;
this.material = i.getMultMaterial(l);
}
};
cc.Node.prototype.realOpacity = 1;
var u = r.FLAG_RENDER, d = r.FLAG_DONOTHING, b = r.FLAG_POST_RENDER, h = function(e) {
var t = 0, i = e.realOpacity;
if (0 != i && e._activeInHierarchy) {
var n = e._renderComponent;
if (n) {
if (!e._dirtyPtr) return;
if ((t = e._renderFlag) & d) return;
if (t & b) _.flush(e); else if (t & u) {
n._checkBacth(_, e._cullingMask);
n.isFlush && _.flush(e);
}
}
for (var o = e._children, r = 0, a = o.length; r < a; r++) {
var s = o[r];
s.realOpacity = i * (~~s._opacity / 255);
h(s);
}
n && t & b && _.flush(e);
}
};
r.visitBegin = function(e) {
if (i.MultBatch2D.enable) {
e && h(e);
_.reset();
}
};
};
function b(e) {
var t = cc.sys.localStorage.getItem(e);
if (!t) return !1;
try {
return JSON.parse(t);
} catch (e) {}
return !1;
}
cc.game.once(cc.game.EVENT_GAME_INITED, function() {
var e = cc.ENGINE_VERSION.split(".");
if (!(parseInt(e[2]) < 3 || parseInt(e[1]) < 4 || parseInt(e[0]) < 2) && b("opt_98k_mult_key")) {
c();
_();
u();
d();
}
});
cc._RF.pop();
}, {
"./MultUtils": "MultUtils"
} ],
MultUtils: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "4cc4f2NmTJMGaluoWmweHIF", "MultUtils");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.getMaterialHash = i.murmurhash2 = i.serializeUniforms = i.serializePasses = i.serializePass = i.serializeDefines = void 0;
var n = [];
function o(e, t) {
if (t) {
for (var i = t.length, o = 0; o < i; o++) {
var r = t[o];
n[o] = r + e[r];
}
n.length = i;
} else {
o = 0;
for (var r in e) n[o++] = r + e[r];
n.length = o;
}
return n.join("");
}
i.serializeDefines = o;
function r(e, t) {
void 0 === t && (t = !1);
var i = e._programName + e._cullMode;
e._blend && (i += e._blendEq + e._blendAlphaEq + e._blendSrc + e._blendDst + e._blendSrcAlpha + e._blendDstAlpha + e._blendColor);
e._depthTest && (i += e._depthWrite + e._depthFunc);
e._stencilTest && (i += e._stencilFuncFront + e._stencilRefFront + e._stencilMaskFront + e._stencilFailOpFront + e._stencilZFailOpFront + e._stencilZPassOpFront + e._stencilWriteMaskFront + e._stencilFuncBack + e._stencilRefBack + e._stencilMaskBack + e._stencilFailOpBack + e._stencilZFailOpBack + e._stencilZPassOpBack + e._stencilWriteMaskBack);
i += o(e._defines, e._defineNames);
t || (i += s(e._properties, e._propertyNames));
return i;
}
i.serializePass = r;
function a(e, t) {
void 0 === t && (t = !1);
for (var i = "", n = 0; n < e.length; n++) i += r(e[n], t);
return i;
}
i.serializePasses = a;
function s(e, t) {
var i = 0;
if (t) {
for (var o = 0, r = t.length; o < r; o++) if ((s = e[t[o]].value) && null == s._id) {
n[i] = s.toString();
i++;
}
} else for (var a in e) {
var s;
if ((s = e[a].value) && null == s._id) {
n[i] = s.toString();
i++;
}
}
n.length = i;
return n.join(";");
}
i.serializeUniforms = s;
function c(e, t) {
for (var i, n = e.length, o = t ^ n, r = 0; n >= 4; ) {
i = 1540483477 * (65535 & (i = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + ((1540483477 * (i >>> 16) & 65535) << 16);
o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16) ^ (i = 1540483477 * (65535 & (i ^= i >>> 24)) + ((1540483477 * (i >>> 16) & 65535) << 16));
n -= 4;
++r;
}
switch (n) {
case 3:
o ^= (255 & e.charCodeAt(r + 2)) << 16;

case 2:
o ^= (255 & e.charCodeAt(r + 1)) << 8;

case 1:
o = 1540483477 * (65535 & (o ^= 255 & e.charCodeAt(r))) + ((1540483477 * (o >>> 16) & 65535) << 16);
}
o = 1540483477 * (65535 & (o ^= o >>> 13)) + ((1540483477 * (o >>> 16) & 65535) << 16);
return (o ^= o >>> 15) >>> 0;
}
i.murmurhash2 = c;
i.getMaterialHash = function(e) {
var t = "", i = e._effect;
i && (t += a(i.passes, !1));
return c(t, 666);
};
cc._RF.pop();
}, {} ],
"Sand-android": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "55d38m+ortCOoMtDTYj4MEm", "Sand-android");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Sand_android = void 0;
var r = e("../../../hsApp"), a = e("../base-native"), s = "org/cocos2dx/javascript/AppActivity", c = [ 0, 75, 100, 150, 200, 255 ], p = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.userCommentInfo = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) return t.noticeApp({
name: "userCommentInfo",
info: e
});
};
t.comment = function(e) {
void 0 === e && (e = 1);
cc.sys.OS_ANDROID === cc.sys.os && t.noticeApp({
name: "comment",
info: "" + e
});
};
t.reportData = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
var t = JSON.stringify(e);
jsb.reflection.callStaticMethod(s, "noticeDataUp", "(Ljava/lang/String;)V", t);
}
};
t.noticeGameHide = function() {
return t.noticeApp({
name: "gameHide",
info: ""
});
};
t.closeNoSplash = function() {
return t.noticeApp({
name: "noSplash",
info: ""
});
};
t.gameWay = function(e) {
return t.noticeApp({
name: "gameWay",
info: e
});
};
t.getMaxEcpm = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
var t = jsb.reflection.callStaticMethod(s, "getMaxEcpm", "(Ljava/lang/String;)Ljava/lang/String;", e);
if (!t) return 0;
var i = JSON.parse(t);
if (i.max_ecpm) return parseFloat(i.max_ecpm);
}
return 0;
};
t.noticeApp = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
var t = jsb.reflection.callStaticMethod(s, "noticeApp", "(Ljava/lang/String;)Ljava/lang/String;", e ? JSON.stringify(e) : e);
return t ? JSON.parse(t) : null;
}
return null;
};
t.getDeviceInfo = function() {
return t.noticeApp({
name: "deviceLayer",
info: ""
});
};
t.showMoreSetting = function() {
return t.noticeApp({
name: "moreSet",
info: ""
});
};
t.noticeLoad = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = !0);
if (cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os) {
e = 1 === e ? 0 : e;
JSON.stringify({
type: e
});
jsb.reflection.callStaticMethod(s, "noticeLoad", "(Ljava/lang/String;)V", JSON.stringify({
type: e
}));
}
};
t.getAdReady = function(e) {
return !cc.sys.isNative || cc.sys.OS_ANDROID !== cc.sys.os || jsb.reflection.callStaticMethod(s, "getAdReady", "(Ljava/lang/String;)Z", e);
};
t.nativeShowAdv = function(e) {
if (cc.sys.OS_ANDROID === cc.sys.os) {
JSON.stringify(e);
jsb.reflection.callStaticMethod(s, "noticeShowAD", "(Ljava/lang/String;)V", JSON.stringify(e));
}
};
t.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os && jsb.reflection.callStaticMethod(s, "noticeNoBanner", "()V");
};
t.uploadUserData = function(e) {
if (cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os) return t.noticeApp({
name: "userUp",
info: JSON.stringify(e)
});
};
t.shakeOnce = function(e, t) {
if (cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os) {
if (null == (e = c[e] || 255) || null == t) return;
e = Math.max(e, 0);
var i = "{timings:[0," + t + ",0,0],amplitudes:[0," + (e = Math.min(e, 255)) + ",0,0]}";
jsb.reflection.callStaticMethod(s, "noticeVibrateRepeat", "(Ljava/lang/String;)V", i);
}
};
t.initWindowFunc = function() {
cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID && "sand_crush" === r.hsApp.RUNTIME_ENV && (window.getAppNotice = function(e) {
if (e) try {
var t = void 0;
"string" == typeof e && (t = JSON.parse(e));
switch (t.name) {
case "adBack":
case "adBack2":
break;

case "runBack":
cc.director.resume();
}
if ("adBack" === t.name || "adBack2" === t.name) {
var i = 0;
"adBack" === t.name && 1 === parseInt(t.info.result + "") && (i = 1);
if (window.gameAdCallback) {
window.gameAdCallback(i);
window.gameAdCallback = null;
}
}
} catch (e) {
console.error("[广告回调] 处理广告回调时发生错误:", e);
}
});
};
return t;
}(a.HsBaseNative);
i.Sand_android = p;
cc._RF.pop();
}, {
"../../../hsApp": "hsApp",
"../base-native": "base-native"
} ],
"Sand-ios": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b4e2bLGDgRNRpd3QE/ndpdt", "Sand-ios");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Sand_ios = void 0;
var r = e("../../../hsApp"), a = e("../base-native"), s = "RootViewController", c = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.userCommentInfo = function(e) {
jsb.reflection.callStaticMethod("BCInterActive", "userCommentInfo:", e);
};
t.comment = function(e) {
void 0 === e && (e = 1);
jsb.reflection.callStaticMethod(s, "comment:info:", "", e);
};
t.reportData = function(e) {
var t = JSON.stringify(e);
jsb.reflection.callStaticMethod(s, "noticeDataUp:", t);
};
t.uploadUserData = function(e) {
cc.sys.isNative && cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod(s, "userUp:", JSON.stringify(e));
};
t.getDeviceInfo = function() {
return jsb.reflection.callStaticMethod("BCInterActive", "getAppBaseInfo:", "");
};
t.getMaxEcpm = function(e) {
var t = jsb.reflection.callStaticMethod("BCInterActive", "getMaxEcpm:", e);
if (!t) return 0;
try {
var i = JSON.parse(t);
if (i.max_ecpm) return parseFloat(i.max_ecpm);
} catch (e) {
return 0;
}
};
t.showMoreSetting = function() {
jsb.reflection.callStaticMethod(s, "moreSet:", "aa");
};
t.noticeLoad = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = !0);
jsb.reflection.callStaticMethod(s, "noticeLoad:", "" + JSON.stringify({
type: e
}));
};
t.getAdReady = function(e) {
return jsb.reflection.callStaticMethod(s, "getAdReadyByType:info:", "", e);
};
t.nativeShowAdv = function(e) {
if (cc.sys.OS_IOS === cc.sys.os) {
JSON.stringify(e);
jsb.reflection.callStaticMethod(s, "noticeShowAD:info:", "", JSON.stringify(e));
}
};
t.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod(s, "noBanner:", "aa");
};
t.shakeOnce = function(e) {
cc.sys.isNative && cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod(s, "playVibrate:", "" + e);
};
t.noticeGameHide = function() {
jsb.reflection.callStaticMethod(s, "callNativeHide:", "aa}");
};
t.closeNoSplash = function() {};
t.gameWay = function(e) {
jsb.reflection.callStaticMethod(s, "userScheme:", "" + e);
};
t.initWindowFunc = function() {
cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS && "sand_crush" === r.hsApp.RUNTIME_ENV && (window.getAdPlayInfo = function(e) {
if (cc.sys.isNative) {
var t = e;
try {
"string" == typeof e && (t = JSON.parse(e));
JSON.stringify(t);
if (window.gameAdCallback) {
var i = 0;
t.adstatus && ("show_success" === t.adstatus || "reward_complete" === t.adstatus ? i = 1 : t.adstatus);
window.gameAdCallback(i);
window.gameAdCallback = null;
}
if (t.adtype && "interstitial" === t.adtype) {
t.adstatus && t.adstatus;
t.adstatus && t.adstatus;
} else t.adtype && "reward" === t.adtype ? t.adstatus && ("show_success" == t.adstatus || "close" == t.adstatus || t.adstatus) : t.adtype;
} catch (e) {
console.error("[广告回调] 处理广告回调时发生错误:", e);
}
}
});
};
t.isAStaues = function() {
return !1;
};
return t;
}(a.HsBaseNative);
i.Sand_ios = c;
cc._RF.pop();
}, {
"../../../hsApp": "hsApp",
"../base-native": "base-native"
} ],
SceneAdapter: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "eca3fQmeEhFpI0jgnAo6sv4", "SceneAdapter");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.menu, p = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.resize();
cc.view.on("canvas-resize", this.resize.bind(this), this);
};
t.prototype.resize = function() {
var e = cc.view.getDesignResolutionSize(), t = this.node.getComponent(cc.Canvas);
if (cc.winSize.width / cc.winSize.height < e.width / e.height) {
t.fitWidth = !0;
t.fitHeight = !1;
} else {
t.fitWidth = !1;
t.fitHeight = !0;
}
};
return r([ s, c("通用/分辨率适配") ], t);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {} ],
TabButton: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "71203VuuDdEYame7FsxANcp", "TabButton");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = e("./GMControlFactory"), s = cc._decorator.ccclass, c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.background = null;
t.normalColor = cc.color(136, 129, 129);
t.selectedColor = cc.color(60, 60, 124);
t._index = 0;
t._callback = null;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
};
t.prototype.createUI = function() {
this.node.setContentSize(130, 60);
var e = new cc.Node("Background");
e.setContentSize(130, 60);
e.setParent(this.node);
this.background = e.addComponent(cc.Sprite);
this.background.type = cc.Sprite.Type.SLICED;
this.background.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var t = a.default.createSolidColorTexture(136, 129, 129), i = new cc.SpriteFrame(t);
this.background.spriteFrame = i;
a.default.createFillParentWidget(e);
var n = new cc.Node("Label");
n.setContentSize(130, 60);
n.setParent(e);
a.default.createFillParentWidget(n);
this.label = n.addComponent(cc.Label);
this.label.string = "button";
this.label.fontSize = 24;
this.label.lineHeight = 24;
this.label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
this.label.verticalAlign = cc.Label.VerticalAlign.CENTER;
this.label.overflow = cc.Label.Overflow.CLAMP;
this.label.node.color = cc.color(255, 255, 255, 255);
this.label.useSystemFont = !0;
this.label.cacheMode = cc.Label.CacheMode.NONE;
};
t.prototype.init = function(e, t, i) {
this._index = e;
this._callback = i;
this.label || this.createUI();
if (this.label) {
this.label.string = t;
this.label.node.active = !1;
this.label.node.active = !0;
} else console.error("HSTabButton " + e + ": 创建UI后label仍为null");
this.setSelected(!1);
};
t.prototype.onClick = function() {
this._callback && this._callback(this._index);
};
t.prototype.setSelected = function(e) {
this.background && (this.background.node.color = e ? this.selectedColor : this.normalColor);
};
return r([ s() ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {
"./GMControlFactory": "GMControlFactory"
} ],
TabViewConfig: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7be8eE3aapPbIWldkFz5H75", "TabViewConfig");
Object.defineProperty(i, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
TabView: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "28d18w86ZZER64CLOFZXMaI", "TabView");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = e("./GMControlFactory"), s = e("./TabButton"), c = cc._decorator.ccclass, p = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.tabButtonContainer = null;
t.contentContainer = null;
t._tabButtons = [];
t._currentIndex = -1;
t._tabConfig = null;
return t;
}
t.prototype.onLoad = function() {
this.createUI();
};
t.prototype.createUI = function() {
a.default.createFillParentWidget(this.node);
var e = cc.view.getVisibleSize(), t = 3 * e.width / 4, i = 2 * e.height / 3, n = new cc.Node("MainContainer");
n.setContentSize(t, i + 60);
n.setAnchorPoint(.5, .5);
n.setParent(this.node);
a.default.createCenterWidget(n);
a.default.createVerticalLayout(n, 0, 0, cc.Layout.ResizeMode.NONE);
this.tabButtonContainer = new cc.Node("TabButtonContainer");
this.tabButtonContainer.setParent(n);
this.tabButtonContainer.width = t;
a.default.createGridLayout(this.tabButtonContainer, 2, 2, 5, cc.Layout.ResizeMode.CONTAINER);
var o = this.tabButtonContainer.addComponent(cc.Sprite);
o.type = cc.Sprite.Type.SLICED;
o.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var r = a.default.createSolidColorTexture(64, 64, 64), s = new cc.SpriteFrame(r);
o.spriteFrame = s;
var c = new cc.Node("ScrollView");
c.setContentSize(t, i);
c.setParent(n);
var p = c.addComponent(cc.Sprite);
p.type = cc.Sprite.Type.SLICED;
p.sizeMode = cc.Sprite.SizeMode.CUSTOM;
var l = a.default.createSolidColorTexture(42, 42, 42), _ = new cc.SpriteFrame(l);
p.spriteFrame = _;
var u = new cc.Node("Mask");
u.setContentSize(t, i);
u.setParent(c);
u.addComponent(cc.Mask).type = cc.Mask.Type.RECT;
this.contentContainer = new cc.Node("Content");
this.contentContainer.setContentSize(t, 2 * i);
this.contentContainer.setAnchorPoint(.5, 1);
this.contentContainer.setPosition(0, i / 2);
this.contentContainer.setParent(u);
a.default.createVerticalLayout(this.contentContainer, 2, 10, cc.Layout.ResizeMode.NONE);
var d = c.addComponent(cc.ScrollView);
d.horizontal = !1;
d.vertical = !0;
d.inertia = !0;
d.brake = .75;
d.elastic = !0;
d.bounceDuration = .23;
d.content = this.contentContainer;
};
t.prototype.initWithConfig = function(e) {
this.tabButtonContainer.removeAllChildren();
this.contentContainer.removeAllChildren();
this._tabButtons = [];
this._tabConfig = e;
if (e && e.tabs && 0 !== e.tabs.length) {
var t = this;
e.tabs.forEach(function(e, i) {
var n = new cc.Node("TabButton_" + i), o = n.addComponent(s.default);
t.tabButtonContainer.addChild(n);
t._tabButtons.push(n);
o.init(i, e.title, function(e) {
return t.switchTab(e);
});
});
this.switchTab(e.defaultIndex || 0);
e.defaultIndex;
}
};
t.prototype._setupContentFromConfig = function(e) {
for (var t = 0; t < e.length; t++) a.default.createControl(this.contentContainer, e[t]);
};
t.prototype.switchTab = function(e) {
var t, i;
if (e !== this._currentIndex) {
this._currentIndex = e;
this.updateTabStates();
this.contentContainer.removeAllChildren();
this._setupContentFromConfig(this._tabConfig.tabs[e].controls);
null === (i = (t = this._tabConfig.tabs[e]).onTabClick) || void 0 === i || i.call(t, e, this._tabButtons[e]);
}
};
t.prototype.updateTabStates = function() {
var e = this;
this._tabButtons.forEach(function(t, i) {
var n = t.getComponent(s.default);
n && n.setSelected(i === e._currentIndex);
});
};
return r([ c() ], t);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"./GMControlFactory": "GMControlFactory",
"./TabButton": "TabButton"
} ],
"base-native": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f634aiLBy5K7ZLwA3WCtWCz", "base-native");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsBaseNative = void 0;
var n = function() {
function e() {}
e.userCommentInfo = function() {};
e.noticeGameHide = function() {};
e.closeNoSplash = function() {};
e.gameWay = function() {};
e.getMaxEcpm = function() {
return 0;
};
e.reportData = function() {};
e.getDeviceInfo = function() {};
e.showMoreSetting = function() {};
e.noticeLoad = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = !0);
};
e.getAdReady = function() {
return !0;
};
e.nativeShowAdv = function() {};
e.closeBanner = function() {};
e.comment = function(e) {
void 0 === e && (e = 1);
};
e.uploadUserData = function() {};
e.shakeOnce = function() {};
e.initWindowFunc = function() {};
e.cleanWindowFunc = function() {};
e.isAStaues = function() {
return !1;
};
return e;
}();
i.HsBaseNative = n;
cc._RF.pop();
}, {} ],
block_blast_android: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c4a44/qDs5KeoIv6CqBKdeb", "block_blast_android");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.block_blast_android = void 0;
var n = e("../hsgame"), o = function() {
function e() {}
e.ModelRemoveAd_getVipState = function() {
var e;
return !!window.BBA_ModelRemoveAd_getVipState && (null === (e = window.BBA_ModelRemoveAd_getVipState()) || void 0 === e ? void 0 : e.isVip);
};
e.ClickDeviceModele_usr_data_ad_preload = function() {
if (window.BBA_ClickDeviceModele_usr_data_ad_preload) return window.BBA_ClickDeviceModele_usr_data_ad_preload();
};
e.AdLoadFreqExpCtrl_addTodyNum = function() {
if (window.BBA_AdLoadFreqExpCtrl_addTodyNum) return window.BBA_AdLoadFreqExpCtrl_addTodyNum();
};
e.FeatureController_isFeatureOpen = function(e) {
return !!window.BBA_FeatureController_isFeatureOpen && window.BBA_FeatureController_isFeatureOpen(e);
};
e.FeatureController_getFeatureKeyParam = function(e, t) {
return window.BBA_FeatureController_getFeatureKeyParam ? window.BBA_FeatureController_getFeatureKeyParam(e, t) : null;
};
e.init = function() {
var e = this;
n.hsgame.Features.boolFeature = function(t) {
return !!e.FeatureController_isFeatureOpen(t);
};
n.hsgame.Features.intFeature = function(t) {
var i = e.FeatureController_getFeatureKeyParam(t, "value");
return null == i ? 0 : i;
};
n.hsgame.Features.objFeature = function(t) {
var i = e.FeatureController_getFeatureKeyParam(t, "value");
return null == i ? null : i;
};
window.BBA_SandLoadMgr_loadBundle && (n.hsgame.ResourceUtils.loadBundle = function(e) {
return window.BBA_SandLoadMgr_loadBundle(e);
});
n.hsgame.DataReporter.reportEvent = function(e, t) {
if (window.BBA_ClickDeviceModule_sandFirstClickData) {
var i = t || {};
i.name = e;
window.BBA_ClickDeviceModule_sandFirstClickData(i);
}
};
};
return e;
}();
i.block_blast_android = o;
cc._RF.pop();
}, {
"../hsgame": "hsgame"
} ],
dependices: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "714c741+5NPDZdMNN7/323y", "dependices");
var n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], n = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.feature_dependices = i.depenicesResult = i.feature_dependices_config = void 0;
i.feature_dependices_config = {
feature1: [ "feature1", "feature2" ],
feature2: [ "feature1" ],
feature3: [ "feature1" ]
};
i.depenicesResult = {};
var o = function() {
function e() {}
e.hasCyclicDependency = function(e) {
if (e in i.depenicesResult) return i.depenicesResult[e];
var t = new Set(), o = new Set(), r = function(e) {
var a, s;
if (o.has(e)) return !0;
if (t.has(e)) return !1;
t.add(e);
o.add(e);
var c = i.feature_dependices_config[e] || [];
try {
for (var p = n(c), l = p.next(); !l.done; l = p.next()) {
var _ = l.value;
if (r(_)) return !0;
}
} catch (e) {
a = {
error: e
};
} finally {
try {
l && !l.done && (s = p.return) && s.call(p);
} finally {
if (a) throw a.error;
}
}
o.delete(e);
return !1;
}, a = r(e);
i.depenicesResult[e] = a;
return a;
};
e.hasDependency = function(e) {
return void 0 !== i.feature_dependices_config[e];
};
e.clearCache = function(e) {
if (e) delete i.depenicesResult[e]; else for (var t = Object.keys(i.depenicesResult), n = 0; n < t.length; n++) delete i.depenicesResult[t[n]];
};
return e;
}();
i.feature_dependices = o;
cc._RF.pop();
}, {} ],
enviromentMgr: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "9b3c7pert9MOKdzJOcBYezj", "enviromentMgr");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.enviromentMgr = void 0;
var n = e("../hsApp"), o = e("./block_blast_android"), r = function() {
function e() {}
e.initEnv = function() {
"block_blast_android" === n.hsApp.RUNTIME_ENV && o.block_blast_android.init();
};
return e;
}();
i.enviromentMgr = r;
cc._RF.pop();
}, {
"../hsApp": "hsApp",
"./block_blast_android": "block_blast_android"
} ],
hsApp: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "3a6b2JY89lGWII8JbMxG73u", "hsApp");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.hsApp = void 0;
var n = {}, o = function() {
function e() {}
e.set = function(t, i) {
e._map[t] = i;
};
e.get = function(t) {
return e._map[t] || null;
};
Object.defineProperty(e, "GameType", {
get: function() {
return "sand_crush" === e.RUNTIME_ENV ? "0" : "9";
},
enumerable: !1,
configurable: !0
});
e.updateDeviceInfo = function() {
cc.sys.isBrowser ? e._deviceInfo = n : e._deviceInfo = r.hsgame.Native.getDeviceInfo();
e._deviceInfo;
};
Object.defineProperty(e, "DeviceInfo", {
get: function() {
return e._deviceInfo || {};
},
enumerable: !1,
configurable: !0
});
e.initEnv = function() {
e.RUNTIME_ENV = window.__SH_GAME_ENV || "sand_crush";
};
e.isSandCrushGame = function() {
return "sand_crush" === e.RUNTIME_ENV;
};
e.isBlockBlastGame = function() {
return "block_blast_ios" === e.RUNTIME_ENV || "block_blast_android" === e.RUNTIME_ENV;
};
e.RUNTIME_ENV = "sand_crush";
e._deviceInfo = null;
e._deviceInfoMore = null;
e._map = {};
return e;
}();
i.hsApp = o;
var r = e("./hsgame");
cc._RF.pop();
}, {
"./hsgame": "hsgame"
} ],
hsgame: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "349765ekC9AILrDolNDJhmB", "hsgame");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.hsgame = void 0;
var n = e("./utils/HSMathUtils"), o = e("./utils/HSTimeUtils"), r = e("./utils/HSResourceUtils"), a = e("./utils/HSNodePool"), s = e("./ui/HSUIManager"), c = e("./module/dataReporter/DataReporter"), p = e("./utils/HSObjectUtils"), l = e("./hsApp"), _ = e("./module/features/Features"), u = e("./ui/HSSkinManager"), d = e("./utils/AdvUtils"), b = e("./module/native/HsNative"), h = e("./enviroment/enviromentMgr"), f = e("./utils/HsUIUtils"), y = e("./common/HsCommon");
(function(e) {
e.initEnvironment = function() {
l.hsApp.initEnv();
b.HsNative.init();
h.enviromentMgr.initEnv();
};
e.Common = y.HsCommon;
e.MathUtils = n.HSMathUtils;
e.TimeUtils = o.HSTimeUtils;
e.ResourceUtils = r.HSResourceUtils;
e.NodePool = a.HSNodePool;
e.UIManager = s.default;
e.Native = b.HsNative;
e.SkinManager = u.HSSkinManager;
e.DataReporter = c.HsDataReporter;
e.ObjectUtils = p.HSObjectUtils;
e.App = l.hsApp;
e.Features = _.FeaturesMgr;
e.AdvUtils = d.HsAdvUtils;
e.UIUtils = f.HsUIUtils;
})(i.hsgame || (i.hsgame = {}));
cc._RF.pop();
}, {
"./common/HsCommon": "HsCommon",
"./enviroment/enviromentMgr": "enviromentMgr",
"./hsApp": "hsApp",
"./module/dataReporter/DataReporter": "DataReporter",
"./module/features/Features": "Features",
"./module/native/HsNative": "HsNative",
"./ui/HSSkinManager": "HSSkinManager",
"./ui/HSUIManager": "HSUIManager",
"./utils/AdvUtils": "AdvUtils",
"./utils/HSMathUtils": "HSMathUtils",
"./utils/HSNodePool": "HSNodePool",
"./utils/HSObjectUtils": "HSObjectUtils",
"./utils/HSResourceUtils": "HSResourceUtils",
"./utils/HSTimeUtils": "HSTimeUtils",
"./utils/HsUIUtils": "HsUIUtils"
} ],
"web-native": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "9a67dxrdu9PWqkNQ9+X1rOv", "web-native");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.web_native = void 0;
var r = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return t;
}(e("../base-native").HsBaseNative);
i.web_native = r;
cc._RF.pop();
}, {
"../base-native": "base-native"
} ]
}, {}, [ "FloorConfigData", "LocalPage1", "LocalPage2", "HsCommon", "SceneAdapter", "block_blast_android", "enviromentMgr", "hsApp", "hsgame", "DataReporter", "Features", "dependices", "HSHotUpdate", "HSLogin", "HsNative", "base-native", "Block-android", "Block-ios", "Sand-android", "Sand-ios", "web-native", "HSDelegateComponent", "HSLayerBase", "HSLayerDialog", "HSLayerGameUI", "HSLayerNotify", "HSLayerPopUp", "HSResManager", "HSSkinManager", "HSUIBase", "HSUIInterface", "HSUIManager", "HSList", "HSListItem", "GMControlConfig", "GMControlFactory", "TabButton", "TabView", "TabViewConfig", "AdvUtils", "HSMathUtils", "HSNodePool", "HSObjectUtils", "HSResourceUtils", "HSTimeUtils", "HsNative_desprate", "HsUIUtils", "MultTextures", "MultUtils" ]);