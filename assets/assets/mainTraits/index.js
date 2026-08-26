window.__require = function t(e, r, o) {
function i(n, s) {
if (!r[n]) {
if (!e[n]) {
var c = n.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = c;
}
var p = r[n] = {
exports: {}
};
e[n][0].call(p.exports, function(t) {
return i(e[n][1][t] || t);
}, p, p.exports, t, e, r, o);
}
return r[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < o.length; n++) i(o[n]);
return i;
}({
AchievementPushV2Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f86c50VarFKsqliYvRPfIxC", "AchievementPushV2Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AchievementPushV2Trait = void 0;
var c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/falcon/EventManager"), u = t("../../../../../../../scripts/modules/achievement/vo/AchievementInfo"), d = t("../../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../../scripts/modules/launch/config/LaunchConfig"), m = t("../../../../../../../scripts/modules/launch/vo/LaunchInfo"), h = t("../../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Game"), y = t("../../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Show"), g = t("../../../../../../../scripts/modules/native/NativePush"), _ = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), v = {
choice: [ "cj03", "cj04", "cj07", "cj08" ],
class: [ "cj01", "cj06" ],
chapter: [ "cj02", "cj05" ]
}, T = {
17: {
key: "achieve_high_score",
achievementTargetType: 1,
cjpushcftype: "highscores",
scheme: "cj17"
},
18: {
key: "achieve_high_score",
achievementTargetType: 1,
cjpushcftype: "highscores",
scheme: "cj18"
},
19: {
key: "achieve_win_streak",
achievementTargetType: 2,
cjpushcftype: "travelwinning",
scheme: "cj19"
},
20: {
key: "achieve_win_streak",
achievementTargetType: 2,
cjpushcftype: "travelwinning",
scheme: "cj20"
},
21: {
key: "achieve_all_levels",
achievementTargetType: 4,
cjpushcftype: "levescompleted",
scheme: "cj21"
},
22: {
key: "achieve_all_levels",
achievementTargetType: 4,
cjpushcftype: "levescompleted",
scheme: "cj22"
},
23: {
key: "achieve_adventure_map",
achievementTargetType: 8,
cjpushcftype: "mosaicmaps",
scheme: "cj23"
},
24: {
key: "achieve_adventure_map",
achievementTargetType: 8,
cjpushcftype: "mosaicmaps",
scheme: "cj24"
},
25: {
key: "achieve_elimination_multi",
achievementTargetType: 5,
cjpushcftype: "clear_master",
scheme: "cj25"
},
26: {
key: "achieve_elimination_multi",
achievementTargetType: 5,
cjpushcftype: "clear_master",
scheme: "cj26"
},
27: {
key: "achieve_elimination_block",
achievementTargetType: 9,
cjpushcftype: "master_cleaner",
scheme: "cj27"
},
28: {
key: "achieve_elimination_block",
achievementTargetType: 9,
cjpushcftype: "master_cleaner",
scheme: "cj28"
},
29: {
key: "achieve_collect_gem",
achievementTargetType: 6,
cjpushcftype: "jewelry_tycoon",
scheme: "cj29"
},
30: {
key: "achieve_collect_gem",
achievementTargetType: 6,
cjpushcftype: "jewelry_tycoon",
scheme: "cj30"
}
}, b = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "lastPushData", {
get: function() {
return c.storage.getItem("AchievementPushV2TraitKey", {
key: "",
pushIndex: -1,
needContinuePush: !0
});
},
enumerable: !1,
configurable: !0
});
e.prototype.updateLastPushData = function(t) {
c.storage.setItem("AchievementPushV2TraitKey", t);
};
e.prototype.data = function() {
return {
pushSubType: "",
isTriggerChapter: !1
};
};
e.prototype.onActive = function(t) {
if (NativeBridge.isNative()) {
_.tp.isAchievementInfoUpdataAchievementStatisticsData(t) && this.checkPushCase();
if (_.tp.isLaunchStartEnter(t)) {
var e = g.default.callNativeGetPushStrategy();
if (e) {
this.state.pushSubType = e;
var r = this.decideLaunchScene();
r && this.changeLaunchScene(r) && (t.replace = !0);
}
}
}
};
e.prototype.checkPushCase = function() {
var t = this.props.subType;
if (t) {
var e = T[t];
if (e) {
var r = e.key, o = e.achievementTargetType, i = e.cjpushcftype;
if (e.scheme && r && i) {
var a = this.getRealKey(r);
if (a) {
var n = this.lastPushData;
if (n.key !== a) this.updateLastPushData({
key: a,
pushIndex: -1,
needContinuePush: !1
}); else {
var s = u.achievementInfo.achievementAwardData.find(function(t) {
return t.key === a;
});
if (!s) return;
var l = u.achievementInfo.getAchievementInfoData(a);
if (!l) return;
if (s.curAchieveIndex === l.achieve_list.length - 1) {
if (null == n ? void 0 : n.needContinuePush) {
this.doPushTask("remove", t, i);
this.updateLastPushData({
key: a,
pushIndex: -1,
needContinuePush: !1
});
}
} else {
var p = s.curAchieveIndex + 1, d = u.achievementInfo.getQueryAchievementStatisticsData(o, a) / l.achieve_list[p];
if (23 == t || 24 == t) {
d = c.storage.getItem("chapterNum", 0) / 96;
}
if (d >= .5) {
if (n.pushIndex !== p) {
this.doPushTask("subscribe", t, i);
this.updateLastPushData({
key: a,
pushIndex: p,
needContinuePush: !0
});
}
} else if ((null == n ? void 0 : n.needContinuePush) && n.pushIndex !== p) {
this.doPushTask("remove", t, i);
this.updateLastPushData({
key: a,
pushIndex: -1,
needContinuePush: !1
});
}
}
}
}
}
}
}
};
e.prototype.getRealKey = function(t) {
var e = u.achievementInfo.achievementAwardData;
if (e && e.length > 0) {
var r = e.find(function(e) {
return e.key === t;
});
return null == r ? void 0 : r.key;
}
return null;
};
e.prototype.doPushTask = function(t, e, r) {
var o = "cj" + (e < 10 ? "0" + e : e);
"subscribe" === t ? g.default.subscribePushTask(o) : g.default.removePushTask(o);
DS("usr_data_gamefinish_cjpushcf_success", {
cjpushcftype: r,
cjpushcfsend: "subscribe" === t ? 0 : 1
});
};
e.prototype.decideLaunchScene = function() {
var t, e, r = this.state.pushSubType;
try {
for (var o = n(Object.entries(v)), i = o.next(); !i.done; i = o.next()) {
var a = s(i.value, 2), c = a[0];
if (a[1].includes(r)) return c;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (e = o.return) && e.call(o);
} finally {
if (t) throw t.error;
}
}
return null;
};
e.prototype.changeLaunchScene = function(t) {
switch (t) {
case "class":
this.enterClass();
return !0;

case "choice":
this.enterChoice();
return !0;

case "chapter":
this.enterChapter();
return !0;

default:
return !1;
}
};
e.prototype.enterClass = function() {
p.EventManager.dispatchModuleEvent(new h.E_ModeChoice_Game(d.GameType.Class));
};
e.prototype.enterChoice = function() {
m.launchInfo.intoModeChoice && m.launchInfo.chapterModelSwitch() ? p.EventManager.dispatchModuleEvent(new y.E_ModeChoice_Show()) : p.EventManager.dispatchModuleEvent(new h.E_ModeChoice_Game(d.GameType.Class));
};
e.prototype.enterChapter = function() {
if (m.launchInfo.openChapterModule()) {
if (c.storage.getItem("chapterNum", 0) >= 96) {
p.EventManager.dispatchModuleEvent(new y.E_ModeChoice_Show());
return;
}
p.EventManager.dispatchModuleEvent(new h.E_ModeChoice_Game(d.GameType.Chapter, {
isEnterGame: !0
}));
} else {
if (!c.storage.getItem("isFinishedGuide", !1)) {
c.storage.setItem("isFinishedGuide", !0);
c.storage.setItem("classGuideStep", 3);
}
c.storage.setItem("classGameNum", f.openChapterGameNum);
p.EventManager.dispatchModuleEvent(new h.E_ModeChoice_Game(d.GameType.Chapter, {
isEnterGame: !0
}));
}
};
return a([ classId("AchievementPushV2Trait") ], e);
}(l.Trait);
r.AchievementPushV2Trait = b;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/achievement/vo/AchievementInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/launch/config/LaunchConfig": void 0,
"../../../../../../../scripts/modules/launch/vo/LaunchInfo": void 0,
"../../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Game": void 0,
"../../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Show": void 0,
"../../../../../../../scripts/modules/native/NativePush": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Achievement_DownJumpAchievementTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "85114Ebb2NOJqoEkTGV+/j0", "Achievement_DownJumpAchievementTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Achievement_DownJumpAchievementTrait = void 0;
var c = t("../../../../../../../scripts/base/async/Barrier"), l = t("../../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../../scripts/base/storage/Storage"), u = t("../../../../../../../scripts/base/trait/Trait"), d = t("../../../../../../../scripts/modules/achievement/types/AchievementType"), f = t("../../../../../../../scripts/modules/achievement/vo/AchievementInfo"), m = t("../../../../../../../scripts/modules/game/type/GameType"), h = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._spriteFrame = null;
return e;
}
e.prototype.onActive = function(t) {
if (h.tp.isAchievement_DetailOnClickConfirm(t)) {
var e = t.target.state.awardData, r = f.achievementInfo.getAchievementInfoData(e.key), o = t.target.onDidAchievement_Detail_GoToGame;
this.onGoToGame(o, r);
}
if (h.tp.isAchievement_DetailShowConfirmAnim(t)) {
var i = t.target.node, a = t.args[0], n = t.args[1];
e = t.args[2];
this._changeConfirm(i, a, n, e);
t.replace = !0;
}
};
e.prototype._changeConfirm = function(t, e, r, o) {
return n(this, void 0, void 0, function() {
var i, a, p, u = this;
return s(this, function() {
i = o.curAchieveIndex + 1;
r.active = !1;
if (i < o.achieveCount) {
if (!(a = r.getChildByName("spTxt"))) return [ 2 ];
if (!(p = a.getComponent(cc.Sprite))) return [ 2 ];
r.scale = .6;
if (null == this._spriteFrame) {
this._textureTimeoutBarrier = new c.TimeoutBarrier(2e3);
l.ResLoader.loadByBundle("Remote_104400001_Achievement_UpJumpAchievement", "textures/details_txt_Go", cc.SpriteFrame, function(t, e) {
if (t) ; else {
u._spriteFrame = e;
u._textureTimeoutBarrier.open();
}
});
}
cc.tween(t).delay(e).call(function() {
return n(u, void 0, void 0, function() {
var t;
return s(this, function(e) {
switch (e.label) {
case 0:
return (null === (t = this._textureTimeoutBarrier) || void 0 === t ? void 0 : t.isOpen) ? [ 3, 2 ] : [ 4, this._textureTimeoutBarrier.wait() ];

case 1:
e.sent();
e.label = 2;

case 2:
null != this._spriteFrame && (p.spriteFrame = this._spriteFrame);
r.active = !0;
cc.tween(r).to(.17, {
scale: 1.05
}).to(.1, {
scale: 1
}).start();
return [ 2 ];
}
});
});
}).start();
}
return [ 2 ];
});
});
};
e.prototype.onGoToGame = function(t, e) {
if (e.go_to != d.AchievementGoToType.None) switch (e.go_to) {
case d.AchievementGoToType.Class:
this.trackerData(m.GameType.Class, e);
t.fire(m.GameType.Class);
break;

case d.AchievementGoToType.Chapter:
if (p.storage.getItem("chapterNum", 0) >= 96) {
this.trackerData(m.GameType.Class, e);
t.fire(m.GameType.Class);
} else {
this.trackerData(m.GameType.Class, e);
t.fire(m.GameType.Chapter);
}
break;

case d.AchievementGoToType.MiniGame:
this.trackerData(m.GameType.Class, e);
}
};
e.prototype.trackerData = function(t, e) {
var r = {
medal_name: e.key,
game_type: t
};
DS("usr_data_medals_detail_click", r);
};
return a([ classId("Achievement_DownJumpAchievementTrait") ], e);
}(u.Trait);
r.Achievement_DownJumpAchievementTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/async/Barrier": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/achievement/types/AchievementType": void 0,
"../../../../../../../scripts/modules/achievement/vo/AchievementInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Achievement_UpJumpAchievementTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7429dIviNdCS68aQ3HD6Fi2", "Achievement_UpJumpAchievementTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Achievement_UpJumpAchievementTrait = void 0;
var c, l = t("../../../../../../../scripts/base/async/Barrier"), p = t("../../../../../../../scripts/base/cache/CacheRender"), u = t("../../../../../../../scripts/base/loader/ResLoader"), d = t("../../../../../../../scripts/base/storage/Storage"), f = t("../../../../../../../scripts/base/timer/Timer"), m = t("../../../../../../../scripts/base/trait/Trait"), h = t("../../../../../../../scripts/modules/achievement/components/Achievement_Awards_Item"), y = t("../../../../../../../scripts/modules/achievement/components/Achievement_Awards_Item_Icon"), g = t("../../../../../../../scripts/modules/achievement/components/Achievement_Statistics_Item"), _ = t("../../../../../../../scripts/modules/achievement/components/Achievement_Statistics_Item_Bg"), v = t("../../../../../../../scripts/modules/achievement/types/AchievementType"), T = t("../../../../../../../scripts/modules/achievement/vo/AchievementInfo"), b = t("../../../../../../../scripts/modules/game/type/GameType"), S = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate");
(function(t) {
t[t.Detail = 0] = "Detail";
t[t.Wall = 1] = "Wall";
})(c || (c = {}));
var P = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._bundleName = "Remote_104400001_Achievement_UpJumpAchievement";
e._cacheRenderTagTypeTag = "Achievement_UpJumpAchievementTrait";
e._awardTitlePath = "prefabs/Achievement_UpJumpAchievement_AwardTitle";
e._awardTitle = null;
e._awardTitleNode = null;
e._awardTitlePool = null;
e.ndStatisticsContent = null;
e._awardTitleBarrier = new l.Barrier();
e._spriteFrame = null;
e._statisticsItemPath = "prefabs/Achievement_UpJumpAchievement_Statistics_Item";
e._statisticsItemBgPath = "prefabs/Achievement_UpJumpAchievement_Statistics_Item_Bg";
e._awardItemPath = "prefabs/Achievement_UpJumpAchievement_AwardItem";
e._awardItemIconPath = "prefabs/Achievement_UpJumpAchievement_AwardItem_Icon";
e._resLoaded = !1;
return e;
}
e.prototype.onCreate = function() {
this._preLoadRes();
this._awardTitlePool = new cc.NodePool();
this._achievementStatisticsItem = [];
this._achievementAwardItem = [];
this._achievementAwardItemIcon = [];
};
e.prototype.onActive = function(t) {
if (S.tp.isAchievement_MainShowAchievementTitle(t)) {
var e = t.args[0], r = t.args[1], o = t.target.state.awardDataList;
this._addAchievementTitle(e, r, o);
}
if (S.tp.isAchievement_MainShowAchievementStatisticsList(t)) {
var i = t.target.node, a = t.args[0];
this._showAchievementStatisticsList(a, i);
t.replace = !0;
}
if (S.tp.isAchievement_MainShowAchievementAwardsList(t)) {
i = t.target.node;
var n = t.args[0];
this._showAchievementAwardsList(n, i);
t.replace = !0;
}
if (S.tp.isAchievement_Awards_ItemChangeItemShow(t)) {
var s = t.args[0], l = t.args[1];
this._changeAchievementAwardsItemShow(s, l);
t.replace = !0;
}
if (S.tp.isAchievement_Awards_Item_IconLoadPermanentIconRes(t)) {
var p = (f = t.target).node, u = t.args[0], d = t.args[1];
this._loadPermanentIconRes(p, u, d);
t.replace = !0;
}
if (S.tp.isAchievement_Awards_ItemOnAwardClick(t)) {
var f = t.target, m = t.args[0], h = t.args[1];
l = t.target.state.awardData;
this._achievementAwardsItemOnAwardClick(f, m, h, l);
t.replace = !0;
}
if (S.tp.isAchievement_Awards_Item_IconChangeItemIconShow(t)) {
p = t.args[0], l = t.args[1];
this._changeAchievementAwardsItemIconShow(p, l);
}
if (S.tp.isAchievement_DetailShowConfirmAnim(t)) {
var y = t.target.node, g = t.args[0], _ = t.args[1];
l = t.args[2];
this._changeConfirm(y, g, _, l);
t.replace = !0;
}
if (S.tp.isAchievement_DetailOnClickConfirm(t)) {
l = t.target.state.awardData, u = T.achievementInfo.getAchievementInfoData(l.key);
var v = (f = t.target).onDidAchievement_Detail_GoToGame;
this.onGoToGame(v, u, c.Detail);
}
};
e.prototype.onDisable = function() {
if (cc.isValid(this.ndStatisticsContent)) {
var t = cc.find("ndStatisticsLabelContent", this.ndStatisticsContent), e = cc.find("ndStatisticsBgContent", this.ndStatisticsContent);
t.setContentSize(300, 387);
e.setContentSize(472, 200);
}
};
e.prototype._preLoadRes = function() {
var t = this;
u.ResLoader.loadByBundle(this._bundleName, this._awardTitlePath, cc.Prefab, function(e, r) {
if (e) ; else {
t._awardTitle = r;
t._awardTitleBarrier.open();
}
});
};
e.prototype._addAchievementTitle = function(t, e, r) {
return n(this, void 0, void 0, function() {
var o, i, a, n, c;
return s(this, function(s) {
switch (s.label) {
case 0:
e.active = !1;
DS("ui_achievement_show");
return this._awardTitleBarrier.isOpen ? [ 3, 2 ] : [ 4, this._awardTitleBarrier.wait() ];

case 1:
s.sent();
s.label = 2;

case 2:
if (cc.isValid(this._awardTitleNode)) {
this._awardTitlePool.put(this._awardTitleNode);
this._awardTitleNode = null;
}
o = r.length;
i = 0;
for (a = 0; a < r.length; a++) {
n = r[a].curAchieveIndex + 1;
c = r[a].achieveCount;
n >= c && i++;
}
this._awardTitlePool.size() > 0 ? this._awardTitleNode = this._awardTitlePool.get() : this._awardTitleNode = cc.instantiate(this._awardTitle);
t.addChild(this._awardTitleNode);
cc.find("prcentTxt/lbProgress", this._awardTitleNode).getComponent(cc.Label).string = i + "/" + o;
this._updateAchievementTitlePosition();
return [ 2 ];
}
});
});
};
e.prototype._updateAchievementTitlePosition = function() {
if (cc.isValid(this._awardTitleNode)) {
var t = this._awardTitleNode.getComponent(cc.Widget);
t.top = 38;
t.updateAlignment();
}
};
e.prototype._showAchievementStatisticsList = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, i, a, n, c, l, d, m, h, y, v, T, b, S;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!(this._achievementStatisticsItem.length <= 0)) return [ 3, 4 ];
r = cc.find("ndAllContainer/ndStatisticsContainer", e);
o = cc.find("svStatisticsContainer", r);
i = cc.find("view/ndStatisticsContent", o);
a = cc.find("ndStatisticsLabelContent", i);
n = cc.find("ndStatisticsBgContent", i);
cc.find("lbStatisticesTitle", e).active = !1;
c = r.getComponent(cc.Widget);
r.height = 350;
c.top = -15;
c.bottom = 24;
c.updateAlignment();
(l = o.getComponent(cc.Widget)).top = 0;
l.bottom = 0;
l.updateAlignment();
(d = new cc.Node("lineNode")).parent = r;
d.height = 6;
d.width = r.width;
(m = d.addComponent(cc.Widget)).isAlignLeft = m.isAlignRight = m.isAlignBottom = !0;
m.left = m.right = m.bottom = 0;
(h = d.addComponent(cc.Sprite)).type = cc.Sprite.Type.SLICED;
h.sizeMode = cc.Sprite.SizeMode.CUSTOM;
u.ResLoader.loadByBundle(this._bundleName, "textures/achievement_bg_line", cc.SpriteFrame, function(t, e) {
t || (h.spriteFrame = e);
});
i.height = a.height = n.height = o.height - 20;
(y = a.getComponent(cc.Layout)).type = cc.Layout.Type.HORIZONTAL;
y.spacingX = 14;
y.paddingLeft = 27;
y.paddingRight = 27;
return [ 4, p.cacheRender.createOrUpdateCacheListComponents({
tag: this._cacheRenderTagTypeTag,
prefabUrl: this._statisticsItemPath,
bundleName: this._bundleName,
count: t.length,
typeOrClassName: g.default,
parent: a
}) ];

case 1:
v = s.sent();
for (S = 0; S < t.length; S++) if (t[S]) {
v[S].setState({
statisticsData: t[S]
});
this._achievementStatisticsItem.push(v[S]);
}
return [ 4, f.nextFrame() ];

case 2:
s.sent();
n.width = i.width = a.width;
return [ 4, p.cacheRender.createOrUpdateCacheListComponents({
tag: this._cacheRenderTagTypeTag,
prefabUrl: this._statisticsItemBgPath,
bundleName: this._bundleName,
count: t.length,
typeOrClassName: _.default,
parent: n
}) ];

case 3:
T = s.sent();
for (S = 0; S < t.length; S++) if (t[S]) {
b = v[S].node.getPosition();
T[S].setState({
x: b.x,
y: b.y - 8
});
}
this._updateAchievementTitlePosition();
return [ 3, 5 ];

case 4:
for (S = 0; S < this._achievementStatisticsItem.length; S++) t[S] && this._achievementStatisticsItem[S].setState({
statisticsData: t[S]
});
s.label = 5;

case 5:
return [ 2 ];
}
});
});
};
e.prototype._showAchievementAwardsList = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, i, a, n, c, l, u, d, m, g, _, v;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!(this._achievementAwardItem.length <= 0)) return [ 3, 5 ];
r = cc.find("spAwardsBg", e);
o = cc.find("ndAllContainer/ndAwardsContainer", e);
i = cc.find("svAwardsListContainer", o);
a = cc.find("view/ndAwardsContent", i);
n = cc.find("ndAwardsLabelContent", a);
c = cc.find("ndAwardsIconContent", a);
(l = r.getComponent(cc.Widget)).top = 0;
l.updateAlignment();
(u = o.getComponent(cc.Widget)).top = 335;
u.updateAlignment();
(d = i.getComponent(cc.Widget)).top = 200;
d.updateAlignment();
cc.find("view", i).getComponent(cc.Widget).updateAlignment();
n.getComponent(cc.Layout).paddingBottom = 30;
return [ 4, f.nextFrame() ];

case 1:
s.sent();
return [ 4, p.cacheRender.createOrUpdateCacheListComponents({
tag: this._cacheRenderTagTypeTag,
prefabUrl: this._awardItemPath,
bundleName: this._bundleName,
count: t.length,
typeOrClassName: h.default,
parent: n
}) ];

case 2:
m = s.sent();
for (v = 0; v < t.length; v++) if (t[v]) {
m[v].setState({
awardData: t[v]
});
this._achievementAwardItem.push(m[v]);
}
return [ 4, f.nextFrame() ];

case 3:
s.sent();
c.height = a.height = n.height;
c.width = a.width = n.width;
return [ 4, p.cacheRender.createOrUpdateCacheListComponents({
tag: this._cacheRenderTagTypeTag,
prefabUrl: this._awardItemIconPath,
bundleName: this._bundleName,
count: t.length,
typeOrClassName: y.default,
parent: c
}) ];

case 4:
g = s.sent();
for (v = 0; v < t.length; v++) if (t[v]) {
_ = m[v].node.getPosition();
g[v].setState({
awardData: t[v],
x: _.x,
y: _.y
});
this._achievementAwardItemIcon.push(g[v]);
}
this._updateAchievementTitlePosition();
return [ 3, 6 ];

case 5:
for (v = 0; v < this._achievementAwardItem.length; v++) if (t[v]) {
this._achievementAwardItem[v].setState({
awardData: t[v]
});
this._achievementAwardItemIcon[v].setState({
awardData: t[v]
});
}
s.label = 6;

case 6:
T.achievementInfo.setRedPointState();
return [ 2 ];
}
});
});
};
e.prototype._changeAchievementAwardsItemShow = function(t, e) {
var r = cc.find("lbTime", t).getComponent(cc.Label), o = cc.find("btnGoforit", t).getComponent(cc.Button), i = cc.find("ndPercent", t), a = cc.find("lbPercent", i).getComponent(cc.Label), n = cc.find("AwardNum", t), s = cc.find("AwardName", t).getComponent(cc.Label), c = cc.find("reddot", t), l = e.curAchieveIndex + 1, p = T.achievementInfo.getAchievementInfoData(e.key);
n.active = !1;
s.string = p.en_name;
c.active = e.isNew;
if (0 == l || l >= e.achieveCount) {
i.active = !1;
if (0 != l) {
s.node.opacity = 255;
o.node.active = !1;
r.node.active = !0;
r.string = e.achieveTime;
} else {
r.node.active = !1;
o.node.active = !0;
s.node.opacity = 76;
}
} else if (l < e.achieveCount) {
s.node.opacity = 255;
i.active = !0;
r.node.active = !1;
var u = Math.round(l / e.achieveCount * 100);
a.string = u + "%";
o.node.active = !0;
}
};
e.prototype._loadPermanentIconRes = function(t, e) {
var r = cc.find("mask/AwardIcon", t).getComponent(cc.Sprite), o = cc.find("mask/AwardBg", t).getComponent(cc.Sprite), i = "textures/achievement/icons", a = e.award_icon + "_color";
u.ResLoader.load(i + "/" + a, cc.SpriteFrame, function(t, e) {
t || (r.spriteFrame = e);
});
u.ResLoader.load(i + "/badge_smallPanel_color", cc.SpriteFrame, function(t, e) {
t || (o.spriteFrame = e);
});
};
e.prototype._achievementAwardsItemOnAwardClick = function(t, e, r, o) {
o.isNew = !1;
switch (r) {
case "touchIcon":
var i = {
medal_name: o.key
};
DS("usr_data_medals_click", i);
t.onDidAchievement_Awards_Item_AwardClick.fire(o);
break;

case "goto":
var a = T.achievementInfo.getAchievementInfoData(o.key), n = t.onDidAchievement_Awards_ItemClick_GoToGame;
this.onGoToGame(n, a, c.Wall);
}
};
e.prototype.onGoToGame = function(t, e, r) {
if (e.go_to != v.AchievementGoToType.None) switch (e.go_to) {
case v.AchievementGoToType.Class:
this.trackerGoToGameData(b.GameType.Class, e, r);
t.fire(b.GameType.Class);
break;

case v.AchievementGoToType.Chapter:
if (d.storage.getItem("chapterNum", 0) >= 96) {
this.trackerGoToGameData(b.GameType.Class, e, r);
t.fire(b.GameType.Class);
} else {
this.trackerGoToGameData(b.GameType.Chapter, e, r);
t.fire(b.GameType.Chapter);
}
break;

case v.AchievementGoToType.MiniGame:
this.trackerGoToGameData(b.GameType.Class, e, r);
}
};
e.prototype.trackerGoToGameData = function(t, e, r) {
var o = {
medal_name: e.key,
game_type: t
};
switch (r) {
case c.Detail:
DS("usr_data_medals_detail_click", o);
break;

case c.Wall:
DS("usr_data_medals_entrance_click", o);
}
};
e.prototype._changeAchievementAwardsItemIconShow = function(t, e) {
var r = T.achievementInfo.getAchievementInfoData(e.key), o = cc.find("mask", t), i = cc.find("GreyAwardBg", t).getComponent(cc.Sprite), a = cc.find("GreyAwardIcon", t).getComponent(cc.Sprite), n = e.curAchieveIndex + 1, s = Math.round(n / e.achieveCount * 100);
if (0 == n || n >= e.achieveCount) {
o.height = 220;
i.node.active = !1;
a.node.active = !1;
} else if (n < e.achieveCount) {
o.height = 220 * s / 100;
i.node.active = !0;
a.node.active = !0;
a.node.scale = .87;
var c = "textures/achievement/icons/", l = c + r.award_icon;
u.ResLoader.load(c + "badge_smallPanel_color", cc.SpriteFrame, function(t, e) {
t || (i.spriteFrame = e);
});
u.ResLoader.load(l + "_color", cc.SpriteFrame, function(t, e) {
t || (a.spriteFrame = e);
});
}
};
e.prototype._changeConfirm = function(t, e, r, o) {
return n(this, void 0, void 0, function() {
var i, a, c, p, d = this;
return s(this, function() {
i = {
medal_name: o.key
};
DS("usr_data_medals_detail_show", i);
a = o.curAchieveIndex + 1;
r.active = !1;
if (a < o.achieveCount) {
if (!(c = r.getChildByName("spTxt"))) return [ 2 ];
if (!(p = c.getComponent(cc.Sprite))) return [ 2 ];
r.scale = .6;
if (null == this._spriteFrame) {
this._textureTimeoutBarrier = new l.TimeoutBarrier(2e3);
u.ResLoader.loadByBundle("Remote_104400001_Achievement_UpJumpAchievement", "textures/details_txt_Go", cc.SpriteFrame, function(t, e) {
if (t) ; else {
d._spriteFrame = e;
d._textureTimeoutBarrier.open();
}
});
}
cc.tween(t).delay(e).call(function() {
return n(d, void 0, void 0, function() {
var t;
return s(this, function(e) {
switch (e.label) {
case 0:
return (null === (t = this._textureTimeoutBarrier) || void 0 === t ? void 0 : t.isOpen) ? [ 3, 2 ] : [ 4, this._textureTimeoutBarrier.wait() ];

case 1:
e.sent();
e.label = 2;

case 2:
null != this._spriteFrame && (p.spriteFrame = this._spriteFrame);
r.active = !0;
cc.tween(r).to(.17, {
scale: 1.05
}).to(.1, {
scale: 1
}).start();
return [ 2 ];
}
});
});
}).start();
}
return [ 2 ];
});
});
};
return a([ classId("Achievement_UpJumpAchievementTrait") ], e);
}(m.Trait);
r.Achievement_UpJumpAchievementTrait = P;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/async/Barrier": void 0,
"../../../../../../../scripts/base/cache/CacheRender": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/timer/Timer": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/achievement/components/Achievement_Awards_Item": void 0,
"../../../../../../../scripts/modules/achievement/components/Achievement_Awards_Item_Icon": void 0,
"../../../../../../../scripts/modules/achievement/components/Achievement_Statistics_Item": void 0,
"../../../../../../../scripts/modules/achievement/components/Achievement_Statistics_Item_Bg": void 0,
"../../../../../../../scripts/modules/achievement/types/AchievementType": void 0,
"../../../../../../../scripts/modules/achievement/vo/AchievementInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdIntervalTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1e8e9+9aI9FzKZ+RvMHKE/Q", "AdIntervalTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdIntervalTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/advertisement/type/AdvertisementType"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._timeTag = 0;
e._lastPlayTime = 0;
return e;
}
e.prototype.onActive = function(t) {
if (l.tp.isChapterAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) && !this.isCanPlayAdInterstitial()) {
t.args[0] = !0;
t.returnState = !0;
}
if (l.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) && !this.isCanPlayAdInterstitial()) {
t.args[0] = !0;
t.returnState = !0;
}
l.tp.isChapterAdvertisement_FullScreenProxyAdvertisementCallBack(t) && (null == t ? void 0 : t.args[0]) == c.AdvertiseCallBackState.Advertise_Success && this.setLastPlayTime(new Date().getTime() / 1e3);
l.tp.isClassAdvertisement_FullScreenProxyAdvertisementCallBack(t) && (null == t ? void 0 : t.args[1]) == c.AdvertiseCallBackState.Advertise_Success && this.setLastPlayTime(new Date().getTime() / 1e3);
};
Object.defineProperty(e.prototype, "timeTag", {
get: function() {
this._timeTag || this.props.time && (this._timeTag = this.props.time);
return this._timeTag;
},
enumerable: !1,
configurable: !0
});
e.prototype.isCanPlayAdInterstitial = function() {
var t = !0;
if (this.lastPlayTime) {
new Date().getTime() / 1e3 - this.lastPlayTime < this.timeTag && (t = !1);
}
return t;
};
Object.defineProperty(e.prototype, "lastPlayTime", {
get: function() {
if (!this._lastPlayTime) {
var t = n.storage.getItem("adInterstitialLastPlayTime", 0);
if (t) {
t = JSON.parse(t);
this._lastPlayTime = t;
}
}
return this._lastPlayTime;
},
enumerable: !1,
configurable: !0
});
e.prototype.setLastPlayTime = function(t) {
this._lastPlayTime = t;
n.storage.setItem("adInterstitialLastPlayTime", JSON.stringify(this._lastPlayTime));
};
return a([ classId("AdIntervalTrait") ], e);
}(s.Trait);
r.AdIntervalTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/advertisement/type/AdvertisementType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdProtectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8671eWRYvtHuI+FJKMH2tUA", "AdProtectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdProtectTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo"), l = t("../../../../../../../scripts/modules/game/vo/GameInfo"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (p.tp.isAdvertisement_FullScene_ProxyShieldPlayAdvertisement(t) || p.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) || p.tp.isChapterAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) || p.tp.isJewelAdvertisement_FullScreen_ProxyShieldPlayAdvertisement(t)) {
var e = n.storage.getItem("chapterGameNumNoRefresh", 0), r = n.storage.getItem("classGameNumNoRefresh", 0), o = n.storage.getItem("jewelGameNumNoRefresh", 0);
if (c.advertisementGameInfo.judgeInterstitialstate(c.advertisementGameInfo.advertisementParemeters)) {
var i = r + e + o;
if (1 == l.gameInfo.gameEntryCount && i < this.props.first + 1) {
t.args[0] = !0;
t.returnState = !0;
} else if (l.gameInfo.gameEntryCount > 1 && i < this.props.noFirst + 1) {
t.args[0] = !0;
t.returnState = !0;
}
}
}
(p.tp.isAdvertisement_Load_ProxyIsCanLoadClassFullScreenAd(t) || p.tp.isAdvertisement_Load_ProxyIsCanLoadChapterFullScreenAd(t) || p.tp.isAdvertisement_Load_ProxyIsCanLoadOtherFullScreenAd(t)) && this.canLoadFullScreenAd(t);
};
e.prototype.canLoadFullScreenAd = function(t) {
var e = n.storage.getItem("chapterGameNumNoRefresh", 0), r = n.storage.getItem("classGameNumNoRefresh", 0) + e + n.storage.getItem("jewelGameNumNoRefresh", 0);
if (1 == l.gameInfo.gameEntryCount && r < this.props.first) {
t.args[0] = !1;
t.returnState = !0;
} else if (l.gameInfo.gameEntryCount > 1 && r < this.props.noFirst) {
t.args[0] = !1;
t.returnState = !0;
}
};
return a([ classId("AdProtectTrait") ], e);
}(s.Trait);
r.AdProtectTrait = u;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdSubEntryTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "953e4prozxLPZ2azEWgOy1y", "AdSubEntryTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdSubEntryTrait = void 0;
var s = t("../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../scripts/base/ui/UI"), l = t("../../../../../../scripts/modules/ipa/components/IpaSubEntry"), p = t("../../../../../../scripts/modules/ipa/config/IpaPrefabConfig"), u = t("../../../../../../scripts/modules/ipa/type/IpaType"), d = t("../../../../../../scripts/modules/ipa/vo/IpaModelRemoveAdMethodInfo"), f = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
f.tp.isModeChoiceAddOtherNode(t) && this.addEntry(t, u.EIpaAdEntryTraitFromEnum.Main);
if (f.tp.isIpa_ProxyUpdateAddAdEntry(t)) {
var e = n(t.args, 2), r = e[0];
e[1] ? this.addEntry(t, r) : this.removeEntry();
}
!f.tp.isRevive_ProxyOnIpaOpen(t) && !f.tp.isRevive_ProxyOnIpaClose(t) || this.isOpenEntry(u.EIpaAdEntryTraitFromEnum.Revive) || (t.args[0] = !0);
f.tp.isIpa_ProxyUpdateRemoveAdEntry(t) && this.removeEntry();
};
e.prototype.isOpenEntry = function(t) {
var e;
return !(null === (e = d.ipaModelRemoveAdMethodInfo.getVipState()) || void 0 === e ? void 0 : e.isVip) && (this.props.entryType == t || this.props.entryType == u.EIpaAdEntryTraitFromEnum.Default);
};
e.prototype.addEntry = function(t, e, r) {
void 0 === r && (r = !1);
if (this.isOpenEntry(e)) {
var o = t.target.node;
o && cc.isValid(o) && c.UI.show(e === u.EIpaAdEntryTraitFromEnum.Revive ? p.IpaPrefabConfig.IpaSubEntry2 : p.IpaPrefabConfig.IpaSubEntry, o).then(function(t) {
var o;
t.getComponent(l.default).setState({
from: e,
type2: r
});
if (e == u.EIpaAdEntryTraitFromEnum.Main && (null === (o = TRAIT("IsShowAchievementTrait")) || void 0 === o ? void 0 : o.active)) {
var i = t.getComponent(cc.Widget);
if (i) {
i.top = 240;
i.updateAlignment();
}
}
});
}
};
e.prototype.removeEntry = function() {
c.UI.hideUI(p.IpaPrefabConfig.IpaSubEntry);
c.UI.hideUI(p.IpaPrefabConfig.IpaSubEntry2);
};
return a([ classId("AdSubEntryTrait") ], e);
}(s.Trait);
r.AdSubEntryTrait = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/modules/ipa/components/IpaSubEntry": void 0,
"../../../../../../scripts/modules/ipa/config/IpaPrefabConfig": void 0,
"../../../../../../scripts/modules/ipa/type/IpaType": void 0,
"../../../../../../scripts/modules/ipa/vo/IpaModelRemoveAdMethodInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdSubScribeLateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "488ceakK5BAOoArOSEtgAj2", "AdSubScribeLateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdSubScribeLateTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isIpa_ProxyStartIPANative(t) && (t.args[1] = !0);
s.tp.isIpa_ProxyStartGetRestoreSubscribe(t) && (t.args[1] = !0);
};
return a([ classId("AdSubScribeLateTrait") ], e);
}(n.Trait);
r.AdSubScribeLateTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdSubScribeNativeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "10a24bWtOVN6Ji62tKnxPnP", "AdSubScribeNativeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdSubScribeNativeTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isIpa_ProxyStartIPANative(t) && (t.args[0] = !0);
s.tp.isIpa_ProxyStartGetRestoreSubscribe(t) && (t.args[0] = !0);
};
return a([ classId("AdSubScribeNativeTrait") ], e);
}(n.Trait);
r.AdSubScribeNativeTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdSubScribeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a6840pcp7NKoaoO6eBdNCnq", "AdSubScribeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdSubScribeTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function() {};
return a([ classId("AdSubScribeTrait") ], e);
}(t("../../../../../../scripts/base/trait/Trait").Trait);
r.AdSubScribeTrait = n;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0
} ],
AddClearTipsExTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1d0dci0PKNKl4TKiwtFJlY6", "AddClearTipsExTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
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
}, p = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AddClearTipsExTrait = void 0;
var u = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), d = t("../../../../../../../scripts/base/layer/GameLayer"), f = t("../../../../../../../scripts/base/loader/ResLoader"), m = t("../../../../../../../scripts/base/trait/Trait"), h = t("../../../../../../../scripts/modules/eliminate/config/EliminateConfig"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = t("../../dragonBones/MainDragonBonesConfig"), _ = t("../../prefab/TraitsPrefabConfig"), v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._board = null;
e._blockUnderNode = null;
e._blockOverNode = null;
e._maxPreEliCount = 6;
e._allUnderEliArray = [];
e._allOverEliArray = [];
e._allClearEffectArray = [];
e._showUnderEliCnt = 0;
e._showOverEliCnt = 0;
e._showClearEffectCnt = 0;
e._rowAngle = 0;
e._colAngle = -90;
return e;
}
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c, l, p, u, d, f, m, h;
return s(this, function() {
if (y.tp.isBoardInitBoard(t)) {
this._board = t.target;
this._blockUnderNode = this._board.blockUnderPreEliminate;
this._blockOverNode = this._board.blockOverPreEliminate;
this._loadPreEliArray(t);
}
if (y.tp.isEliminate_Effects_ProxyTouchOnMoveCanSnap(t)) {
e = t.args[0];
r = e.rowCanEliminateShaders, o = e.colCanEliminateShaders, h = e.color, i = e.continuousEliminateTimes;
this._showPreEliminate(r, o, h, i);
}
if (y.tp.isEliminate_Effects_ProxyOnBlockProducerTouchEnd(t)) {
d = t.args[0];
a = d.state, n = a.putPos, l = a.eliminateCols, m = a.eliminateRows;
this.computeEliminateAngle(n, l, m);
}
y.tp.isEliminate_Effects_ProxyOnBlockProducerAnyTouchEnd(t) && this._recycleAllPreEliminate();
if (y.tp.isEliminate_Effects_ProxyPlayColumnEliminateEffect(t)) {
if ((null == (p = TRAIT("IsOpenChangeSkinTrait")) ? void 0 : p.active) && (null == (u = TRAIT("ComboRainbowTrait")) ? void 0 : u.active) && !u.isPlayRainbow) return [ 2 ];
d = t.args[0];
c = d.state, l = c.eliminateCols, h = c.color;
this._playColumnEliminateEffect(l, h);
t.replace = !0;
}
if (y.tp.isEliminate_Effects_ProxyPlayRowEliminateEffect(t)) {
if ((null == (p = TRAIT("IsOpenChangeSkinTrait")) ? void 0 : p.active) && (null == (u = TRAIT("ComboRainbowTrait")) ? void 0 : u.active) && !u.isPlayRainbow) return [ 2 ];
d = t.args[0];
f = d.state, m = f.eliminateRows, h = f.color;
this._playRowEliminateEffect(m, h);
t.replace = !0;
}
y.tp.isBlocksProducerTouchBackBlocks(t) && this._recycleAllPreEliminate();
y.tp.isChapterEliminate_Effects_ProxyDealEliminateClearEffect(t) && this._recycleAllPreEliminate();
y.tp.isClassEliminate_Effects_ProxyDealEliminateClearEffect(t) && this._recycleAllPreEliminate();
y.tp.isEliminate_Effects_ProxyTouchOnMoveNoCanSnap(t) && this._recycleAllPreEliminate();
return [ 2 ];
});
});
};
e.prototype.convertToColMap = function(t) {
for (var e = Object.keys(t), r = {}, o = 0; o < e.length; o++) for (var i = t[e[o]], a = Object.keys(i), n = 0; n < a.length; n++) {
var s = a[n];
r[s] = r[s] || {};
r[s][e[o]] = i[s];
}
return r;
};
e.prototype.arraysEqual = function(t, e) {
t.sort(function(t, e) {
return t - e;
});
e.sort(function(t, e) {
return t - e;
});
return t.length === e.length && t.every(function(t, r) {
return t === e[r];
});
};
e.prototype._loadPreEliArray = function() {
var t = this;
this._showClearEffectCnt = 0;
this._allUnderEliArray.length = 0;
this._allOverEliArray.length = 0;
var e = cc.director.getScheduler();
f.ResLoader.loadByBundle(_.TraitsPrefabConfig.preEliminatePrefab.bundleName, _.TraitsPrefabConfig.preEliminatePrefab.url, cc.Prefab, function(r, o) {
if (r) ; else {
cc.isValid(t._blockUnderNode) && e.schedule(function() {
var e = cc.instantiate(o);
t._allUnderEliArray.push(e);
e.opacity = 0;
}, t._blockUnderNode, 0, t._maxPreEliCount - 1, 0, !1);
cc.isValid(t._blockOverNode) && e.schedule(function() {
var e = cc.instantiate(o);
t._allOverEliArray.push(e);
e.opacity = 0;
}, t._blockOverNode, 0, t._maxPreEliCount - 1, 0, !1);
}
});
Promise.all([ f.ResLoader.asyncLoadByBundle(g.MainDragonBonesConfig.comboRainbowEffectEliminate1.bundleName, g.MainDragonBonesConfig.comboRainbowEffectEliminate1.dragonAssetUrl, dragonBones.DragonBonesAsset), f.ResLoader.asyncLoadByBundle(g.MainDragonBonesConfig.comboRainbowEffectEliminate1.bundleName, g.MainDragonBonesConfig.comboRainbowEffectEliminate1.dragonAtlasAssetUrl, dragonBones.DragonBonesAtlasAsset) ]).then(function(r) {
var o = c(r, 2), i = o[0], a = o[1];
cc.isValid(t._blockOverNode) && null != i && null != a && e.schedule(function() {
var e = t._createEliEffect(i, a);
t._allClearEffectArray.push(e);
e.node.opacity = 0;
}, t._blockOverNode, 0, t._maxPreEliCount - 1, 0, !1);
}).catch(function() {});
};
e.prototype._recycleAllPreEliminate = function() {
var t, e, r, o;
this._showUnderEliCnt = 0;
this._showOverEliCnt = 0;
try {
for (var i = l(this._allUnderEliArray), a = i.next(); !a.done; a = i.next()) {
var n = a.value;
cc.isValid(n) && (n.opacity = 0);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
try {
for (var s = l(this._allOverEliArray), c = s.next(); !c.done; c = s.next()) {
n = c.value;
cc.isValid(n) && (n.opacity = 0);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
c && !c.done && (o = s.return) && o.call(s);
} finally {
if (r) throw r.error;
}
}
};
e.prototype._playClearEffect = function(t, e, r) {
var o = this;
if (this._showClearEffectCnt < this._allClearEffectArray.length) {
var i = this._allClearEffectArray[this._showClearEffectCnt];
this._showClearEffectCnt++;
if (i && cc.isValid(i.node)) {
cc.isValid(i.node.parent) || this._blockOverNode.addChild(i.node);
i.node.opacity = 255;
i.node.x = t.x;
i.node.y = t.y;
i.node.angle = e;
i.timeScale = 1.5;
i.removeEventListener(dragonBones.EventObject.COMPLETE);
i.playAnimation(r, 1);
i.once(dragonBones.EventObject.COMPLETE, function() {
i.node.opacity = 0;
o._showClearEffectCnt > 0 && o._showClearEffectCnt--;
}, this);
}
}
};
e.prototype._playColumnEliminateEffect = function(t, e) {
var r = this._board;
if (r && r.boardGrid && cc.isValid(this._blockOverNode)) {
var o = r.boardGrid.getBoundingBoxToWorld(), i = this._blockOverNode;
for (var a in t) {
var n = cc.v2(t[a].x, o.y + 437), s = d.gameUiLayer.convertToWorldSpaceAR(n), c = i.convertToNodeSpaceAR(s), l = 0 == (1 & parseInt(a)) ? "_A" : "_B", p = this._changeAnimationName(e, l);
this._playClearEffect(c, this._colAngle, p);
}
}
};
e.prototype._playRowEliminateEffect = function(t, e) {
var r = this._blockOverNode;
if (cc.isValid(r)) for (var o in t) {
var i = cc.v2(cc.view.getVisibleSize().width / 2, t[o].y), a = d.gameUiLayer.convertToWorldSpaceAR(i), n = r.convertToNodeSpaceAR(a), s = parseInt(o) % 2 == 0 ? "_A" : "_B", c = this._changeAnimationName(e, s);
this._playClearEffect(n, this._rowAngle, c);
}
};
e.prototype._changeAnimationName = function(t, e) {
return h.eliminateColors[t - 1] + "_elimination" + e;
};
e.prototype._showPreEliminate = function(t, e, r, o) {
var i = Object.keys(t), a = this.convertToColMap(e), n = Object.keys(a);
this._checkEliminateCount(i.length, n.length, o);
this._recycleAllPreEliminate();
this.showPreEliminate(t, r, 0);
this.showPreEliminate(a, r, -90);
};
e.prototype._checkEliminateCount = function() {};
e.prototype.showPreEliminate = function(t, e, r) {
var o, i, a = Object.keys(t);
try {
for (var n = l(a), s = n.next(); !s.done; s = n.next()) {
var c = s.value, p = Object.values(t[c]), u = this.getPosition(p[0], r);
this._showPreEliminateEffect(u, r, e);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (i = n.return) && i.call(n);
} finally {
if (o) throw o.error;
}
}
};
e.prototype._showPreEliminateEffect = function(t, e, r) {
if (cc.isValid(this._blockOverNode) && cc.isValid(this._blockUnderNode)) {
if (this._showUnderEliCnt < this._allUnderEliArray.length) {
var o = this._allUnderEliArray[this._showUnderEliCnt];
this._showUnderEliCnt++;
var i = {
newNode: o,
pos: t,
angle: e,
aniName: "in_" + r + "_2"
};
cc.isValid(o.parent) || this._blockUnderNode.addChild(o);
this.addPreEliminateEffect("PreEliminateComponent", i);
}
if (this._showOverEliCnt < this._allOverEliArray.length) {
o = this._allOverEliArray[this._showOverEliCnt];
this._showOverEliCnt++;
i = {
newNode: o,
pos: t,
angle: e,
aniName: "in_" + r + "_1"
};
cc.isValid(o.parent) || this._blockOverNode.addChild(o);
this.addPreEliminateEffect("PreEliminateComponent", i);
}
}
};
e.prototype.addPreEliminateEffect = function(t, e) {
var r = e.newNode, o = e.pos, i = e.angle, a = e.aniName;
r.x = o.x;
r.y = o.y;
r.angle = i;
r.opacity = 255;
var n = r.getComponent(t);
n && n.setState({
aniName: a,
playTimes: 0
});
};
e.prototype.getPosition = function(t, e) {
var r = cc.v2(0, 0);
if (-90 === e) {
r.y = 0;
r.x = t.x;
} else {
r.y = t.y + 5;
r.x = 0;
}
return r;
};
e.prototype.computeEliminateAngle = function(t, e, r) {
var o, i, a = [ 0, 0, 0, 0 ], n = t.map(function(t) {
return [ t.y, t.x ];
});
try {
for (var s = l(n), p = s.next(); !p.done; p = s.next()) {
var u = c(p.value, 2), d = u[0], f = u[1];
d >= 4 && f <= 3 ? a[0] += 1 : d <= 3 && f <= 3 ? a[1] += 1 : d <= 3 && f >= 4 ? a[2] += 1 : d >= 4 && f >= 4 && (a[3] += 1);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
p && !p.done && (i = s.return) && i.call(s);
} finally {
if (o) throw o.error;
}
}
var m = this.getQuadrantIndex(a), h = Object.keys(r), y = Object.keys(e);
if (h.length > 0 && y.length > 0) {
this._rowAngle = 2 === m || 3 === m || -1 === m ? 0 : 180;
this._colAngle = 1 === m || 2 === m || -1 === m ? -90 : 90;
} else {
this._rowAngle = 0;
this._colAngle = -90;
}
};
e.prototype.getQuadrantIndex = function(t) {
return t.every(function(e) {
return e === t[0];
}) ? -1 : t.indexOf(Math.max.apply(Math, p(t))) + 1;
};
e.prototype._createEliEffect = function(t, e) {
var r = new cc.Node().addComponent(dragonBones.ArmatureDisplay);
r.enableBatch = !0;
r.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);
r.dragonAsset = t;
r.dragonAtlasAsset = e;
r.armatureName = "Armature";
return r;
};
a([ u.trait("ComboRainbowTrait", "多消和大块消除变彩虹色") ], e.prototype, "_recycleAllPreEliminate", null);
a([ u.trait("ComboRainbowTrait", "多消和大块消除变彩虹色") ], e.prototype, "_changeAnimationName", null);
a([ u.trait("ComboRainbowTrait", "多消和大块消除变彩虹色") ], e.prototype, "_checkEliminateCount", null);
a([ u.trait("ComboRainbowTrait", "多消和大块消除变彩虹色") ], e.prototype, "_showPreEliminateEffect", null);
return a([ u.templateTrait([ "ComboRainbowTrait" ]), classId("AddClearTipsExTrait") ], e);
}(m.Trait);
r.AddClearTipsExTrait = v;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/eliminate/config/EliminateConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../dragonBones/MainDragonBonesConfig": "MainDragonBonesConfig",
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig"
} ],
AddMoreGameTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4a5f1QeBlZOtoupsJqJ/K5n", "AddMoreGameTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AddMoreGameTrait = void 0;
var c = t("../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../scripts/modules/gameLobby/components/GameLobbyGLHallMoreGamesPopupView"), u = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo"), d = t("../../../../../../scripts/modules/modeChoice/components/ModeChoice"), f = t("../../../../../../scripts/modules/prefab/PrefabConfig"), m = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
m.tp.isModeChoiceAddOtherNode(t) && this.addMoreGame(t);
};
e.prototype.addMoreGame = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!(e = t.target.node)) return [ 3, 2 ];
r = e.getComponent(d.default);
return cc.isValid(null == r ? void 0 : r.btnParent) ? [ 4, c.ResLoader.asyncLoad(f.PrefabConfig.GameLobbyAddMoreGame.url, cc.Prefab) ] : [ 3, 2 ];

case 1:
if ((o = s.sent()) && cc.isValid(null == r ? void 0 : r.btnParent) && !r.btnParent.getChildByName("GameLobbyAddMoreGame")) {
(i = cc.instantiate(o)).name = "GameLobbyAddMoreGame";
r.btnParent.addChild(i);
if (a = r.btnParent.getComponent(cc.Layout)) {
a.spacingY = 30;
a.updateLayout();
}
(n = i.getChildByName("red")) && (n.active = u.gameLobby_DataInfo.isRed);
i.on("click", function() {
if (n) {
n.active = !1;
u.gameLobby_DataInfo.setIsRed(!0);
u.gameLobby_DataInfo.enterGameLobby(function() {
var t = Cinst(p.default);
null == t || t.setState({
isShow: !1
});
});
}
});
}
s.label = 2;

case 2:
return [ 2 ];
}
});
});
};
return a([ classId("AddMoreGameTrait") ], e);
}(l.Trait);
r.AddMoreGameTrait = h;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/gameLobby/components/GameLobbyGLHallMoreGamesPopupView": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo": void 0,
"../../../../../../scripts/modules/modeChoice/components/ModeChoice": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AddSpaceAdd4Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6add801uxRP/L2TqF3vA4tb", "AddSpaceAdd4Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AddSpaceAdd4Trait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), p = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if ((p.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t) || p.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t)) && (-1 != c.algorithmStrategyInfo.algorithmList.indexOf(s.OFFER_TYPE.SHANG_ZENG_3) || -1 != c.algorithmStrategyInfo.algorithmFailList.indexOf(s.OFFER_TYPE.SHANG_ZENG_3) || -1 != c.algorithmStrategyInfo.algorithmSuccessList.indexOf(s.OFFER_TYPE.SHANG_ZENG_3))) {
c.algorithmStrategyInfo.setAlgorithmList(l.algorithmStrategyLogic.replaceAlgorithmType(c.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SHANG_ZENG_3, s.OFFER_TYPE.SHANG_ZENG_4));
c.algorithmStrategyInfo.setAlgorithmFailList(l.algorithmStrategyLogic.replaceAlgorithmType(c.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.SHANG_ZENG_3, s.OFFER_TYPE.SHANG_ZENG_4));
c.algorithmStrategyInfo.setAlgorithmSuccessList(l.algorithmStrategyLogic.replaceAlgorithmType(c.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.SHANG_ZENG_3, s.OFFER_TYPE.SHANG_ZENG_4));
c.algorithmStrategyInfo.algorithmFailList.push(s.OFFER_TYPE.SUI_JI_WU_SI);
}
};
return a([ classId("AddSpaceAdd4Trait") ], e);
}(n.Trait);
r.AddSpaceAdd4Trait = u;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdvertisementLoadDelayTimeNoClear30Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "da982M5XE5BG7kgtGTh6OpF", "AdvertisementLoadDelayTimeNoClear30Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdvertisementLoadDelayTimeNoClear30Trait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isAdvertisement_Load_ProxyLoadAdTrait(t) && (t.args[1] = !0);
};
return a([ classId("AdvertisementLoadDelayTimeNoClear30Trait") ], e);
}(n.Trait);
r.AdvertisementLoadDelayTimeNoClear30Trait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AdvertisementLoadDelayTimeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "eff8eZLHPlLZKrj1a/e00mB", "AdvertisementLoadDelayTimeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdvertisementLoadDelayTimeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isAdvertisement_Load_ProxyLoadAdTrait(t) && (t.args[0] = !0);
};
return a([ classId("AdvertisementLoadDelayTimeTrait") ], e);
}(n.Trait);
r.AdvertisementLoadDelayTimeTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AlgoFillSortEdgeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b887dro49pNIYkf3FJnZbEU", "AlgoFillSortEdgeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AlgoFillSortEdgeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), l = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = t("../../../../../../../scripts/base/storage/Storage"), m = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (d.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(t) && f.storage.getItem("classRoundNum", 0) > 1 && this.checkCanReplace()) {
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.ALL_COMBINATION_ID70));
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SUI_JI_WU_SI, s.OFFER_TYPE.ALL_COMBINATION_ID70));
p.algorithmStrategyInfo.setAlgorithmFailList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.ALL_COMBINATION_ID70));
p.algorithmStrategyInfo.setAlgorithmFailList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.SUI_JI_WU_SI, s.OFFER_TYPE.ALL_COMBINATION_ID70));
p.algorithmStrategyInfo.setAlgorithmSuccessList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.ALL_COMBINATION_ID70));
p.algorithmStrategyInfo.setAlgorithmSuccessList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.SUI_JI_WU_SI, s.OFFER_TYPE.ALL_COMBINATION_ID70));
}
if (d.tp.isClassAlgorithmProcessInfoBottomOfferBefore(t)) {
var e = !1, r = t.args[0] || [], o = TRAIT("ContinueSameMoreRoundLimitTrait");
(null == o ? void 0 : o.active) && (e = o.state.isDealID70);
if (f.storage.getItem("classRoundNum", 0) > 1 && !e && 98 == this.props.way && c.algorithmName.algoActualId != s.OFFER_TYPE.SUI_JI_GUIDE && c.algorithmName.algoActualName.every(function(t) {
return t === m.ALGO_NAME_TYPE.NAME_RANDOM || t === m.ALGO_NAME_TYPE.NAME_NODIE;
})) {
r.push(s.OFFER_TYPE.ALL_COMBINATION_ID70);
t.args[0] = r;
}
}
};
e.prototype.checkCanReplace = function() {
if (this.props.random) {
return Math.random() < this.props.random;
}
return !0;
};
e.prototype.updateAlgorithmLists = function(t, e, r) {
t.algorithmList = u.algorithmStrategyLogic.replaceAlgorithmType(t.algorithmList, e, r);
t.algorithmFailList = u.algorithmStrategyLogic.replaceAlgorithmType(t.algorithmFailList, e, r);
};
a([ l.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("AlgoFillSortEdgeTrait") ], e);
}(n.Trait);
r.AlgoFillSortEdgeTrait = h;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AlgoRandomNoDeathToBinaryTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c9366NZ145JQ7bm66hkFNJF", "AlgoRandomNoDeathToBinaryTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AlgoRandomNoDeathToBinaryTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isAlgorithmSDKArgsInfoIsRandomNoDieToBinary(t)) {
t.returnValue = 1;
t.replace = !0;
t.returnState = !0;
}
};
return a([ classId("AlgoRandomNoDeathToBinaryTrait") ], e);
}(n.Trait);
r.AlgoRandomNoDeathToBinaryTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AlgoUseSeedTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e62f4cK09dPXo/umoFAGdv/", "AlgoUseSeedTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AlgoUseSeedTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isAlgorithmSDKArgsInfoIsUseSeed(t)) {
t.returnValue = 1;
t.replace = !0;
t.returnState = !0;
}
};
return a([ classId("AlgoUseSeedTrait") ], e);
}(n.Trait);
r.AlgoUseSeedTrait = c;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
AppShowPlayInterstitialAdTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "289eePBomxOOJ5s8BeXRvJc", "AppShowPlayInterstitialAdTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AppShowPlayInterstitialAdTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/base/ui/UI"), l = t("../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo"), p = t("../../../../../../../scripts/modules/native/NativeReceivedNative"), u = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.time = 0;
e.infinity = 0;
e.moreSettingClose = !1;
e.moreSettingShow = !1;
return e;
}
e.prototype.onCreate = function() {
var t, e, r = this;
this.time = null !== (t = this.props.time) && void 0 !== t ? t : 60;
this.infinity = null !== (e = this.props.infinity) && void 0 !== e ? e : 0;
p.onNativeReponse("playBtnSound", function(t) {
r.onNativePlayBtnSound(t);
});
};
e.prototype.onActive = function(t) {
if (d.tp.isAdvertisement_FullScene_ProxyOnAppShow(t)) {
if (this.moreSettingClose) {
this.moreSettingShow = !1;
this.moreSettingClose = !1;
return;
}
if (this.moreSettingShow) return;
this.canPlayInterstitialAd() && (t.args[0] = !0);
}
d.tp.isNativeGameCallMoreSettings(t) && cc.sys.isNative && cc.sys.OS_ANDROID === cc.sys.os && (this.moreSettingShow = !0);
};
e.prototype.onNativePlayBtnSound = function() {
this.moreSettingClose = !0;
};
e.prototype.checkTime = function() {
return (new Date().getTime() - l.advertisementGameInfo.inAppHideTime) / 1e3 > this.time;
};
e.prototype.checkCondition = function() {
var t = [];
switch (this.props.type) {
case "iOS":
t.push(u.PrefabConfig.ModeChoice.url);
t.push(u.PrefabConfig.ChapterList.url);
t.push("prefabs/game/ChapterGame");
t.push(u.PrefabConfig.ClassGame.url);
t.push("prefabs/fail/ClassFail");
t.push("prefabs/win/ClassWin");
t.push(u.PrefabConfig.Achievement_Main.url);
break;

case "android":
t.push(u.PrefabConfig.ClassGame.url);
t.push("prefabs/game/ChapterGame");
break;

default:
t = [];
}
return t.some(function(t) {
return c.UI.activeState(t);
});
};
e.prototype.canPlayInterstitialAd = function() {
var t, e = null === (t = cc.director.getScene()) || void 0 === t ? void 0 : t.children[0];
if (!cc.isValid(e)) return !1;
var r = l.advertisementGameInfo.inAppHide2State, o = l.advertisementGameInfo.interstitialAdState, i = l.advertisementGameInfo.appShowInterstitialNotPlayed;
l.advertisementGameInfo._inAppHide2State = !0;
if (!this.checkCondition(e)) return !1;
if (!(this.checkTime() && r && o && i)) return !1;
0 == this.infinity && (l.advertisementGameInfo._appShowInterstitialNotPlayed = !1);
return !0;
};
a([ n.trait("NoShowInterAdRateTrait", "根据概率屏蔽插屏广告") ], e.prototype, "canPlayInterstitialAd", null);
return a([ classId("AppShowPlayInterstitialAdTrait") ], e);
}(s.Trait);
r.AppShowPlayInterstitialAdTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo": void 0,
"../../../../../../../scripts/modules/native/NativeReceivedNative": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BAlgorithmDynamicDifficultyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d1f10NdoMtGj6T5aQ9AZK6V", "BAlgorithmDynamicDifficultyTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
this && this.__read;
this && this.__spread;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BAlgorithmDynamicDifficultyTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/modules/game/vo/GameInfo"), u = t("../../../../../../../scripts/modules/game/type/GameType"), d = t("../../../../../../../scripts/base/enum/enum"), f = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), m = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tag = "【算法】交叉动态难度";
return e;
}
e.prototype.log = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
e.prototype.isUnlocked = function() {
return l.storage.getItem("chapterGameNum", 0) >= 1;
};
e.prototype.isHardExpected = function(t) {
return !!Array.isArray(t) && t.some(function(t) {
return d.isValueInEnum(t, f.OFFER_TYPE_DIFFICULTY) || t === f.OFFER_TYPE.SI_WANG || t === f.OFFER_TYPE.ZHI_SI_TI;
});
};
e.prototype.onActive = function(t) {
if (!(l.storage.getItem("chapterGameNum", 0) <= 0)) {
var e = function(t, e) {
var r = l.storage.getItem(t, 0) || 0, o = Math.min(r + 1, e);
l.storage.setItem(t, o);
};
c.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && e("bAlgorithmDynamicDifficulty_chapterCount", 3);
c.tp.isChapterGameOver_GameEnd_ProxyOnGameOver(t) && 0 == t.args[1] && e("bAlgorithmDynamicDifficulty_classCount", 3);
c.tp.isClassGame_Replay_ProxyOnGameReplay(t) && e("bAlgorithmDynamicDifficulty_chapterCount", 3);
c.tp.isChapterGame_Replay_ProxyOnGameReplay(t) && e("bAlgorithmDynamicDifficulty_classCount", 3);
if (c.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithmAfter(t) || c.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithmAfter(t)) {
if (!this.isUnlocked()) return;
var r = m.algorithmStrategyInfo.algorithmList || [], o = [ f.OFFER_TYPE.HEJI_KUN_NAN_TI, f.OFFER_TYPE.HEJI_ALGORITHMENTROPY, f.OFFER_TYPE.HEJI_ALGORITHMENTROPYMORECLEAR, f.OFFER_TYPE.HEJI_ALGODIFFSPREAD1, f.OFFER_TYPE.HEJI_ALGODIFFSPREAD2 ];
if ("TravelHappyOverTrait" === m.algorithmStrategyInfo.algorithmSourceLevel2 && r.some(function(t) {
return -1 !== o.indexOf(t);
})) return;
if (!this.isHardExpected(r)) return;
var i = function(t) {
var e = l.storage.getItem(t, 0) || 0;
if (e > 0) {
var r = [ f.OFFER_TYPE.TIAN_KONG_XIAO_CHU ];
h.algorithmName.setAlgoExpectedId(f.OFFER_TYPE.NONE);
h.algorithmName.setAlgoExpectedId(f.OFFER_TYPE.TIAN_KONG_XIAO_CHU);
m.algorithmStrategyInfo.setAlgorithmList(r);
m.algorithmStrategyInfo.setAlgorithmFailList([ f.OFFER_TYPE.SUI_JI_WU_SI ]);
l.storage.setItem(t, e - 1);
}
};
p.gameInfo.gameMode === u.GameMode.Class ? i("bAlgorithmDynamicDifficulty_classCount") : p.gameInfo.gameMode === u.GameMode.Chapter && i("bAlgorithmDynamicDifficulty_chapterCount");
}
}
};
a([ s.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("BAlgorithmDynamicDifficultyTrait") ], e);
}(n.Trait);
r.BAlgorithmDynamicDifficultyTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BAlgorithmGaohuibaoARGTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0109f9mOhBP447COnCKqr/F", "BAlgorithmGaohuibaoARGTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BAlgorithmGaohuibaoARGTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../scripts/modules/score/vo/ScoreInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (d.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingDiffAlgorithm(t) && u.scoreInfo.score < 3e3) {
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.KUN_NAN_TI, s.OFFER_TYPE.DIFFICULTY_GAOHUIBAO));
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.ZHI_JUE_NAN_TI, s.OFFER_TYPE.DIFFICULTY_GAOHUIBAO));
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SIMPLE_ZHIJUE, s.OFFER_TYPE.DIFFICULTY_GAOHUIBAO));
}
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("BAlgorithmGaohuibaoARGTrait") ], e);
}(n.Trait);
r.BAlgorithmGaohuibaoARGTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BCommentDisplayTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "56cefkhD+BFlpV5cfYH0H69", "BCommentDisplayTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__assign || function() {
return (a = Object.assign || function(t) {
for (var e, r = 1, o = arguments.length; r < o; r++) {
e = arguments[r];
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
}
return t;
}).apply(this, arguments);
}, n = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, s = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BCommentDisplayTrait = void 0;
var l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../../scripts/base/ui/UI"), d = t("../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), f = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), m = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), h = t("../../../../../../../scripts/modules/commentSkin/components/CommentSkin"), y = t("../../../../../../../scripts/modules/commentSkin/vo/CommentSkinBCommentDisplayInfo"), g = t("../../../../../../../scripts/modules/game/type/GameType"), _ = t("../../../../../../../scripts/modules/game/vo/GameInfo"), v = t("../../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo"), T = t("../../../../../../../scripts/modules/gameWay/vo/GameWayInfo"), b = t("../../../../../../../scripts/modules/http/HComment"), S = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), P = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), O = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), C = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bHadShowComment = !1;
e.round_id = 0;
e.his_max_score = 0;
e.score = 0;
e.dataStaticsInfo = null;
return e;
}
e.prototype.data = function() {
return a({
isShow: !1,
listTime: [],
listTravel: [],
historyMaxComboTime: 0,
travelGameNum: 0,
comboGameNum: 0,
overMaxNum: 0,
maxComboTimeH: 0,
travelWinNum: 0
}, y.commentSkinBCommentDisplayInfo.commentDisplayData);
};
e.prototype.onActive = function(t) {
if (O.tp.isChapterGameOver_GameEnd_ProxyOnGameOver(t)) {
this.round_id = l.storage.getItem("chapterRoundNum", 0);
if (_.gameInfo.gameMode === g.GameMode.Chapter) {
this.state.travelGameNum += 1;
t.args[1] ? this.state.travelWinNum += 1 : this.state.travelWinNum = 0;
l.storage.setItem("BCommentDisplayTraitData", this.state);
}
}
if (O.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t)) {
this.round_id = l.storage.getItem("classRoundNum", 0);
this.his_max_score = l.storage.getItem("classHighScore", 0);
this.score = l.storage.getItem("classScore", 0);
this.dataStaticsInfo = l.storage.getItem("classDataStatisticsInfo", null);
if (_.gameInfo.gameMode === g.GameMode.Class) {
this.state.comboGameNum += 1;
l.storage.getItem("classRecordHigh", !1) && (this.state.overMaxNum += 1);
l.storage.setItem("BCommentDisplayTraitData", this.state);
}
}
O.tp.isCommentSkin_proxyOnResultPanelShow(t) && this.showCommentDisplayHandle();
};
e.prototype.showCommentDisplayHandle = function() {
var t, e;
this.bHadShowComment = !1;
if (this.state.isShow) {
if (this.isCommentVisibleToday()) {
if (_.gameInfo.gameMode === g.GameMode.Class) {
this.showCommentByOverHightScore();
this.showCommentByOverMaxComboTime();
} else this.showCommentByTravelComboWin();
l.storage.setItem("BCommentDisplayTraitData", this.state);
}
} else {
if (2 === this.props.http) {
this.requestShowCommentDisplay();
return;
}
var r = m.chapterConfigInfo.canAchievedGoal();
if (_.gameInfo.gameMode === g.GameMode.Chapter && !r) return;
var o = this.getPlayAllGameNum();
if (o > (null !== (t = this.props.finshClassTime) && void 0 !== t ? t : -1)) {
if (_.gameInfo.gameMode === g.GameMode.Class) {
this.showCommentUI();
this.resetLocalData();
return;
}
if (r) {
this.showCommentUI();
this.resetLocalData();
}
}
if (o >= (null !== (e = this.props.finshTravelWin) && void 0 !== e ? e : -1)) {
if (l.storage.getItem("chapterGameNum", 0) > 0 && _.gameInfo.gameMode === g.GameMode.Chapter && r) {
this.showCommentUI();
this.resetLocalData();
return;
}
if (_.gameInfo.gameMode === g.GameMode.Class) {
this.showCommentUI();
this.resetLocalData();
return;
}
}
}
};
e.prototype.getTodayTime = function() {
var t = new Date();
return 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
};
e.prototype.isCommentVisibleToday = function() {
var t = this.getTodayTime();
return -1 === this.state.listTime.indexOf(t);
};
e.prototype.setShowCommentData = function() {
this.state.isShow = !0;
var t = this.getTodayTime();
this.state.listTime.push(t);
for (var e = this.props.showDay, r = 1; r < e; r++) {
var o = new Date(Date.now() + 864e5 * r), i = 1e4 * o.getFullYear() + 100 * (o.getMonth() + 1) + o.getDate();
this.state.listTime.push(i);
}
l.storage.setItem("BCommentDisplayTraitData", this.state);
};
e.prototype.showCommentByOverHightScore = function() {
var t, e = null !== (t = this.props.times) && void 0 !== t ? t : -1;
if (this.state.overMaxNum >= e) {
this.state.overMaxNum = 0;
this.showCommentUI();
}
};
e.prototype.showCommentByOverMaxComboTime = function() {
var t, e = null !== (t = this.props.comboTime) && void 0 !== t ? t : -1;
if (-1 !== e) {
var r = l.storage.getItem("classDataStatisticsInfo", null);
if (r) {
var o = this.state.historyMaxComboTime, i = r.comboMaxNum;
if (i > e && i > o) {
this.state.historyMaxComboTime = i;
this.showCommentUI();
}
}
}
};
e.prototype.showCommentByTravelComboWin = function() {
var t, e, r = null !== (t = this.props.chapters) && void 0 !== t ? t : -1;
if (-1 !== r) {
var o = null !== (e = this.props.winning) && void 0 !== e ? e : -1, i = this.state.travelWinNum;
if (i >= r && i < 1e4) {
this.state.travelWinNum = 1 === o ? 1e4 : 0;
this.showCommentUI();
}
}
};
e.prototype.resetLocalData = function() {
this.state.overMaxNum = 0;
this.state.travelWinNum = 0;
this.state.travelGameNum = 0;
this.state.comboGameNum = 0;
l.storage.setItem("BCommentDisplayTraitData", this.state);
};
e.prototype.showCommentUI = function() {
return s(this, void 0, void 0, function() {
return c(this, function(t) {
switch (t.label) {
case 0:
if (this.bHadShowComment) return [ 2 ];
this.bHadShowComment = !0;
this.setShowCommentData();
return [ 4, u.UI.show(P.PrefabConfig.commentSkin, S.alertLayer) ];

case 1:
t.sent().getComponent(h.default).setState({
startState: -1
});
return [ 2 ];
}
});
});
};
e.prototype.requestShowCommentDisplay = function() {
var t = this, e = T.gameWayInfo.gameWayNum, r = cc.view.getFrameSize(), o = r.width, i = {
user_waynum: e,
screen_height: r.height,
screen_width: o,
game_type: _.gameInfo.gameMode === g.GameMode.Class ? 0 : 2
};
if (_.gameInfo.gameMode === g.GameMode.Class) {
var a = this.getClassParams();
i.game = a;
} else {
var n = this.getTravelParams();
i.travel = n;
}
this.getPlayAllGameNum() <= 2 || _.gameInfo.gameMode === g.GameMode.Chapter && !v.gameOverGameInfo.isChapterWin || b.HComment.sendCommentData("https://block-score-opt.afafb.com/infer/v1/block_scoring_optimize", i).then(function(e) {
var r = e;
if (r && "success" == r.message && 1 == r.data) {
t.showCommentUI();
t.resetLocalData();
DS("block_model_evaluate", {
model_feature: i,
model_label: r
});
}
}).catch(function() {});
};
e.prototype.getTravelParams = function() {
var t = l.storage.getItem("chapterGameNum", 0), e = this.round_id, r = m.chapterConfigInfo.getChapterProgress(), o = m.chapterConfigInfo.canAchievedGoal() ? 1 : 0, i = {
game_id: t,
round_id: e,
progress: Math.floor(1e5 * r) / 1e5,
result_type: o
}, a = this.state.listTravel;
a.push(i);
a.length > 3 && a.shift();
for (var n = [], s = 0, c = a.length - 1; c >= 0; c--) {
var p = {};
p["game_id_" + s] = a[c].game_id;
p["round_id_" + s] = a[c].round_id;
p["process_" + s] = a[c].progress;
p["result_type_" + s] = a[c].result_type;
n.push(p);
s++;
}
l.storage.setItem("BCommentDisplayTraitData", this.state);
return n;
};
e.prototype.getClassParams = function() {
var t = this.his_max_score, e = this.score, r = l.storage.getItem("classGameNum", 0);
r > 0 && (r -= 1);
var o = this.round_id, i = this.dataStaticsInfo;
return {
his_max_score: t,
score: e,
game_id: r,
round_id: o,
combo_cnt: i.comboRoundNum,
max_combo: i.comboMaxNum,
one_clean: i.eliminate1,
two_clean: i.eliminate2,
three_clean: i.eliminate3,
four_clean: i.eliminate4,
five_clean: i.eliminate5,
six_clean: i.eliminate6,
rec_strategy: d.OFFER_TYPE_STRINGS[f.algorithmName.algoExpectedId]
};
};
e.prototype.getPlayAllGameNum = function() {
var t = l.storage.getItem("chapterGameNum", 0);
return l.storage.getItem("classGameNum", 0) + t;
};
return n([ classId("BCommentDisplayTrait") ], e);
}(p.Trait);
r.BCommentDisplayTrait = C;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/commentSkin/components/CommentSkin": void 0,
"../../../../../../../scripts/modules/commentSkin/vo/CommentSkinBCommentDisplayInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/gameOver/vo/GameOverGameInfo": void 0,
"../../../../../../../scripts/modules/gameWay/vo/GameWayInfo": void 0,
"../../../../../../../scripts/modules/http/HComment": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BReplaceGoodEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fe00dlStz1DVZH6wUFnsDsV", "BReplaceGoodEffectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BReplaceGoodEffectTrait = void 0;
var c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/encourage/type/EncourageType"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), d = t("../../../../../../../scripts/base/ui/UI"), f = [ l.EncouragePromptType.PROMPT0, l.EncouragePromptType.PROMPT1, l.EncouragePromptType.PROMPT2, l.EncouragePromptType.PROMPT3, l.EncouragePromptType.PROMPT4 ], m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e, r, o, i, a, n;
if (p.tp.isEncourage_ProxySetEffectState(t) && t.args[0].promptType != l.EncouragePromptType.PROMPT5 && t.args[0].promptType != l.EncouragePromptType.PROMPT_NONE) {
t.replace = !0;
this.playAnimation(null === (e = t.args[0]) || void 0 === e ? void 0 : e.eliminateCount, t.args[1]);
}
if (p.tp.isEncourage_ProxyGetPosition(t) && t.args[0].promptType != l.EncouragePromptType.PROMPT5 && t.args[0].promptType != l.EncouragePromptType.PROMPT_NONE) {
t.args[0].y = cc.visibleRect.height / 2 + 30;
t.args[0].x = cc.visibleRect.width / 2;
}
if (p.tp.isClassEncourage_ProxyOnPlayLevelColor(t)) {
var s = null === (o = null === (r = t.args[0]) || void 0 === r ? void 0 : r.state) || void 0 === o ? void 0 : o.eliminateCount, c = Math.min(5, Math.max(0, s - 2)), u = l.EncouragePromptType["PROMPT" + c];
if (-1 != f.indexOf(u)) {
var d = null === (n = null === (a = null === (i = t.args[0]) || void 0 === i ? void 0 : i.state) || void 0 === a ? void 0 : a.armature) || void 0 === n ? void 0 : n.node;
cc.isValid(d) && (d.active = !1);
d.getPosition();
t.replace = !0;
this.playAnimation(s, d.getPosition());
}
}
};
e.prototype.playAnimation = function(t, e) {
return n(this, void 0, void 0, function() {
var r;
return s(this, function(o) {
switch (o.label) {
case 0:
return [ 4, d.UI.show(u.PrefabConfig.EncourageReplaceGood) ];

case 1:
(r = o.sent()).x = e.x;
r.y = e.y;
r.getComponent("EncourageReplaceGood").setState({
eliminateCount: t
});
return [ 2 ];
}
});
});
};
return a([ classId("BReplaceGoodEffectTrait") ], e);
}(c.Trait);
r.BReplaceGoodEffectTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/encourage/type/EncourageType": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BackSpaceClickLimitTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b306dWLOk1JxIVWWh0bt/Rh", "BackSpaceClickLimitTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BackSpaceClickLimitTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/backSpace/vo/BackSpaceInfo"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._timeOutId = -1;
return e;
}
e.prototype.onActive = function(t) {
(c.tp.isClassBackSpace_ProxyOnTouchEnd(t) || c.tp.isChapterBackSpace_ProxyOnTouchEnd(t)) && this.onTouchEnd();
(c.tp.isClassBackSpace_ProxyOnCloseClassGame(t) || c.tp.isChapterBackSpace_ProxyOnCloseChapterGame(t)) && this.onCloseGame();
};
e.prototype.onTouchEnd = function() {
var t = this;
this.clearTimeout();
s.backSpaceInfo._isCanClick = !1;
var e = this.props.limitSeconds;
this._timeOutId = setTimeoutSafe(function() {
t._timeOutId = -1;
s.backSpaceInfo._isCanClick = !0;
}, 1e3 * e);
};
e.prototype.onCloseGame = function() {
s.backSpaceInfo._isCanClick = !0;
this.clearTimeout();
};
e.prototype.clearTimeout = function() {
if (-1 !== this._timeOutId) {
clearTimeout(this._timeOutId);
this._timeOutId = -1;
}
};
return a([ classId("BackSpaceClickLimitTrait") ], e);
}(n.Trait);
r.BackSpaceClickLimitTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/backSpace/vo/BackSpaceInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BeforeThreeRoundRemoveHunHeTianKongTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8325a307BtB06ToNRmGEueq", "BeforeThreeRoundRemoveHunHeTianKongTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BeforeThreeRoundRemoveHunHeTianKongTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/game/type/GameType"), c = t("../../../../../../../scripts/modules/game/vo/GameInfo"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
l.tp.isFastTkxcHelpTraitClassWeightThreeHundredToFourHundred(t) && c.gameInfo.gameMode == s.GameMode.Class && storage.getItem("classRoundNum", 0) <= 3 && (t.replace = !0);
};
return a([ classId("BeforeThreeRoundRemoveHunHeTianKongTrait") ], e);
}(n.Trait);
r.BeforeThreeRoundRemoveHunHeTianKongTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BlockLimitClassicsTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "659f0iPUclJxogejE70w9EI", "BlockLimitClassicsTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BlockLimitClassicsTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo"), c = t("../../../../../../../../scripts/modules/game/type/GameType"), l = t("../../../../../../../../scripts/modules/game/vo/GameInfo"), p = t("../../../../../../../../scripts/modules/score/vo/ScoreInfo"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isAlgorithmSDKTraitInfoGetLimitSmall(t)) {
if (l.gameInfo.gameMode != c.GameMode.Class) return;
p.scoreInfo.score >= this.props.score && s.algorithmSDKTraitInfo.setLimitBlock(!0);
}
};
return a([ classId("BlockLimitClassicsTrait") ], e);
}(n.Trait);
r.BlockLimitClassicsTrait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo": void 0,
"../../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
BlockLimitLevelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c96f7knJXlIRYyApQAJsfnm", "BlockLimitLevelTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BlockLimitLevelTrait = void 0;
var n = t("../../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo"), l = t("../../../../../../../../scripts/modules/game/type/GameType"), p = t("../../../../../../../../scripts/modules/game/vo/GameInfo"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isAlgorithmSDKTraitInfoGetLimitSmall(t)) {
if (p.gameInfo.gameMode != l.GameMode.Chapter) return;
n.storage.getItem("chapterNum", 0) >= 12 && c.algorithmSDKTraitInfo.setLimitBlock(!0);
}
};
return a([ classId("BlockLimitLevelTrait") ], e);
}(s.Trait);
r.BlockLimitLevelTrait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo": void 0,
"../../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTAdvertisementMultipleCallTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "faae8lZC9FKpJ3wdxd/0BT6", "CTAdvertisementMultipleCallTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAdvertisementMultipleCallTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
advertisementFullscreenShow: !1,
advertisementRewardShow: !1
};
};
e.prototype.onActive = function(t) {
(s.tp.isClassAdvertisement_RewardProxyShowAdvertisement(t) || s.tp.isChapterAdvertisement_RewardProxyShowAdvertisement(t)) && (this.state.advertisementRewardShow = !1);
if (s.tp.isAdvertisement_ProxyOnRewardOver(t)) {
this.state.advertisementRewardShow && (t.replace = !0);
this.state.advertisementRewardShow = !0;
}
};
return a([ classId("CTAdvertisementMultipleCallTrait") ], e);
}(n.Trait);
r.CTAdvertisementMultipleCallTrait = c;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTAdvertisementNoHideTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "06f92SbrRFNSL/TUWNSzjkg", "CTAdvertisementNoHideTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAdvertisementNoHideTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {};
};
e.prototype.onActive = function() {};
return a([ classId("CTAdvertisementNoHideTrait") ], e);
}(t("../../../../../../../../scripts/base/trait/Trait").Trait);
r.CTAdvertisementNoHideTrait = n;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0
} ],
CTAgloNameSpecialTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5a1e7Qsk9tKJIj5obhTUOyV", "CTAgloNameSpecialTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAgloNameSpecialTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), c = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {};
};
e.prototype.onActive = function(t) {
if (u.tp.isAlgorithm_ProxyFailStrategy(t) && 3 == l.algorithmInfo.blockIdList.length && l.algorithmInfo.algoSource == c.algorithmSource.NORMAL && p.algorithmName.algoActualId == c.OFFER_TYPE.ZHI_SI_TI) {
p.algorithmName.setAlgoActualName([ s.ALGO_NAME_TYPE.NAME_DIE, s.ALGO_NAME_TYPE.NAME_DIE, s.ALGO_NAME_TYPE.NAME_DIE ]);
p.algorithmName.setAlgoActualChangeName([ s.ALGO_NAME_TYPE.NAME_DIE, s.ALGO_NAME_TYPE.NAME_DIE, s.ALGO_NAME_TYPE.NAME_DIE ]);
}
};
return a([ classId("CTAgloNameSpecialTrait") ], e);
}(n.Trait);
r.CTAgloNameSpecialTrait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTAgloNameTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a3729QWfc9DsaxuCowkgoVf", "CTAgloNameTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAgloNameTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), c = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), u = t("../../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), d = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), f = t("../../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../../scripts/modules/game/vo/GameInfo"), h = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lastAlgoExpectedId = c.OFFER_TYPE.TIAN_KONG_XIAO_CHU;
e.PRIORITY_ALGORITHMS = [ {
type: c.OFFER_TYPE.ALGO_MIX_TKXC,
name: "混合填空2"
}, {
type: c.OFFER_TYPE.ALGO_QUICK,
name: "快速填空"
}, {
type: c.OFFER_TYPE.ALGO_FILL_MORE_AREA,
name: "大面积填空"
}, {
type: c.OFFER_TYPE.CLEAR_BOARD,
name: "清屏plus"
}, {
type: c.OFFER_TYPE.SIMPLE_ZHIJUE,
name: "简单直觉题"
}, {
type: c.OFFER_TYPE.CLASSTERMINATE_CYCLE,
name: "终止刷分"
}, {
type: c.OFFER_TYPE.CHAPTERTERMINATE_CYCLE,
name: "终止刷分"
}, {
type: c.OFFER_TYPE.ELIMINTE_PLEASURE,
name: "消除爽"
} ];
e.ALGORITHM_MAPPINGS = [ {
from: c.OFFER_TYPE.SUI_JI,
to: c.OFFER_TYPE.SUI_JI_WU_SI
}, {
from: c.OFFER_TYPE.SHANG_ZENG_1,
to: c.OFFER_TYPE.SHANG_ZENG_3
}, {
from: c.OFFER_TYPE.ZHI_JUE_NAN_TI,
to: c.OFFER_TYPE.KUN_NAN_TI
} ];
e.TERMINATE_ALGORITHMS = [ c.OFFER_TYPE.CLASSTERMINATE_CYCLE, c.OFFER_TYPE.CHAPTERTERMINATE_CYCLE ];
return e;
}
e.prototype.data = function() {
return {
algoExpectedId: c.OFFER_TYPE.NONE
};
};
e.prototype.onActive = function(t) {
if (h.tp.isClassAlgorithmStrategy_Run_ProxyOnTriggerStrategyRun(t) || h.tp.isChapterAlgorithmStrategy_Run_ProxyOnTriggerStrategy(t)) {
this.state.algoExpectedId = c.OFFER_TYPE.NONE;
p.algorithmName.setAlgoExpectedId(c.OFFER_TYPE.NONE);
}
if (h.tp.isAlgorithmStrategyInfoSetAlgorithmList(t)) {
var e = t.args[0];
if (e.length > 0 && this.state.algoExpectedId == c.OFFER_TYPE.NONE) {
m.gameInfo.gameMode == f.GameMode.Class ? d.algorithmStrategyInfo.algorithmSourceLevel1 == u.ClassAlgorithmSourceType.AlgoRevive || d.algorithmStrategyInfo.algorithmSourceLevel1 == u.ClassAlgorithmSourceType.AlgoReviveTrait ? this.state.algoExpectedId = this.lastAlgoExpectedId : this.state.algoExpectedId = e[0] : m.gameInfo.gameMode == f.GameMode.Chapter && ("RatioAdjustTrait" == d.algorithmStrategyInfo.algorithmSourceLevel2 && (d.algorithmStrategyInfo.algorithmSourceLevel1 == u.ChapterAlgorithmSourceType.TravelStage1 || d.algorithmStrategyInfo.algorithmSourceLevel1 == u.ChapterAlgorithmSourceType.TravelStage2_simple || d.algorithmStrategyInfo.algorithmSourceLevel1 == u.ChapterAlgorithmSourceType.TravelStage2_hard || d.algorithmStrategyInfo.algorithmSourceLevel1 == u.ChapterAlgorithmSourceType.TravelStage3) || d.algorithmStrategyInfo.algorithmSourceLevel1 != u.ChapterAlgorithmSourceType.TravelRevive && d.algorithmStrategyInfo.algorithmSourceLevel1 != u.ChapterAlgorithmSourceType.TravelReviveTrait ? this.state.algoExpectedId = e[0] : this.state.algoExpectedId = this.lastAlgoExpectedId);
this.onDealCommon();
}
this.onDealTrait(e);
}
h.tp.isAlgorithm_ProxyFailStrategy(t) && this.onDealFailTraitBefore();
h.tp.isAlgorithm_ProxyPriorityStrategy(t) && this.onSyncAlgoExpectedId();
h.tp.isAlgorithmProcessInfoAlgorithmSuccess(t) && this.onDealSuccessTraitBefore();
};
e.prototype.onSyncAlgoExpectedId = function() {
this.lastAlgoExpectedId = this.state.algoExpectedId;
p.algorithmName.setAlgoExpectedId(this.state.algoExpectedId);
};
e.prototype.onDealCommon = function() {
var t = this, e = this.ALGORITHM_MAPPINGS.find(function(e) {
return e.from === t.state.algoExpectedId;
});
e && (this.state.algoExpectedId = e.to);
};
e.prototype.onDealTrait = function(t) {
if (t.length > 0 && this.state.algoExpectedId != c.OFFER_TYPE.NONE) {
var e = t[0], r = this.PRIORITY_ALGORITHMS.find(function(t) {
return t.type === e;
});
r && (this.state.algoExpectedId = r.type);
}
};
e.prototype.onDealFailTraitBefore = function() {
this.handleAlgorithmDowngrade(c.OFFER_TYPE.CLEAR_BOARD, "清屏plus", 3, !1);
this.handleAlgorithmDowngrade(c.OFFER_TYPE.ELIMINTE_PLEASURE, "消除爽", 3, !1);
this.handleSimpleZhiJueDowngrade();
};
e.prototype.handleAlgorithmDowngrade = function(t, e, r, o) {
var i = o ? l.algorithmInfo.blockIdList.length == r : l.algorithmInfo.blockIdList.length != r;
if (p.algorithmName.algoExpectedId == t && i) {
var a = d.algorithmStrategyInfo.algorithmFailList;
p.algorithmName.setAlgoExpectedId(c.OFFER_TYPE.NONE);
a.length > 0 ? this.state.algoExpectedId = a[0] : this.state.algoExpectedId = c.OFFER_TYPE.TIAN_KONG_XIAO_CHU;
this.onSyncAlgoExpectedId();
}
};
e.prototype.handleSimpleZhiJueDowngrade = function() {
if (p.algorithmName.algoExpectedId == c.OFFER_TYPE.SIMPLE_ZHIJUE && 3 == l.algorithmInfo.blockIdList.length) {
l.algorithmInfo.algoSource == c.algorithmSource.NORMAL && p.algorithmName.algoActualName.includes(s.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE) && this.setAlgorithmNames([ s.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, s.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, s.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO ]);
l.algorithmInfo.algoSource == c.algorithmSource.NORMAL && (p.algorithmName.algoActualName.includes("死亡难题") || p.algorithmName.algoActualName.includes("困难难题")) && this.setAlgorithmNames([ s.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE, s.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE, s.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE ]);
}
};
e.prototype.setAlgorithmNames = function(t) {
p.algorithmName.setAlgoActualName(t);
p.algorithmName.setAlgoActualChangeName(t);
};
e.prototype.onDealSuccessTraitBefore = function() {
if (this.isTerminateAlgorithm(p.algorithmName.algoExpectedId)) this.setAlgorithmNames([ "终止刷分", "终止刷分", "终止刷分" ]); else if (p.algorithmName.algoActualId == c.OFFER_TYPE.LINK_SMALL_BORDER) {
this.lastAlgoExpectedId = c.OFFER_TYPE.LINK_SMALL_BORDER;
p.algorithmName.forceSetAlgoExpectedId(c.OFFER_TYPE.LINK_SMALL_BORDER);
} else if (p.algorithmName.algoActualId == c.OFFER_TYPE.ALGO_FILL_MORE_AREA) {
this.lastAlgoExpectedId = c.OFFER_TYPE.ALGO_FILL_MORE_AREA;
p.algorithmName.forceSetAlgoExpectedId(c.OFFER_TYPE.ALGO_FILL_MORE_AREA);
} else if (p.algorithmName.algoExpectedId == c.OFFER_TYPE.ZHI_SI_TI || p.algorithmName.algoActualId == c.OFFER_TYPE.ZHI_SI_TI) {
this.lastAlgoExpectedId = c.OFFER_TYPE.ZHI_SI_TI;
p.algorithmName.forceSetAlgoExpectedId(c.OFFER_TYPE.ZHI_SI_TI);
}
};
e.prototype.isTerminateAlgorithm = function(t) {
return this.TERMINATE_ALGORITHMS.includes(t);
};
return a([ classId("CTAgloNameTrait") ], e);
}(n.Trait);
r.CTAgloNameTrait = y;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTAgloReviveTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a897fcPY2BJ7oHSKWs6V1aT", "CTAgloReviveTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAgloReviveTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), c = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curReviveNum = -1;
return e;
}
e.prototype.data = function() {
return {
algoName: []
};
};
e.prototype.onActive = function(t) {
(c.tp.isClassAlgorithmStrategy_Run_ProxyOnTriggerStrategyRun(t) || c.tp.isChapterAlgorithmStrategy_Run_ProxyOnTriggerStrategy(t)) && (this.state.algoName = s.algorithmName.algoActualName);
if (c.tp.isAlgorithmProcessInfoAlgorithmSuccess(t)) {
var e = s.algorithmName.algoActualName.includes("复活算法"), r = s.algorithmName.algoActualName.includes("复活");
if (e || r) {
s.algorithmName.setAlgoActualName(this.state.algoName);
s.algorithmName.setAlgoActualChangeName(this.state.algoName);
}
}
};
return a([ classId("CTAgloReviveTrait") ], e);
}(n.Trait);
r.CTAgloReviveTrait = l;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTAgloStrategyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1fb8fCywYRFo6hEK8geyLD7", "CTAgloStrategyTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAgloStrategyTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), p = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curReviveNum = -1;
return e;
}
e.prototype.data = function() {
return {};
};
e.prototype.onActive = function(t) {
if (p.tp.isAlgorithmStrategy_Deal_ProxyPreprocessingAlgorithm(t)) {
c.algorithmStrategyInfo.algorithmList.includes(s.OFFER_TYPE.SIMPLE_ZHIJUE);
c.algorithmStrategyInfo.setAlgorithmList(l.algorithmStrategyLogic.replaceAlgorithmType(c.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SIMPLE_ZHIJUE, s.OFFER_TYPE.KUN_NAN_TI));
}
};
return a([ classId("CTAgloStrategyTrait") ], e);
}(n.Trait);
r.CTAgloStrategyTrait = u;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTAutoClassInfo2Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5377dCSxh1LcalGJkbnSv5z", "CTAutoClassInfo2Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTAutoClassInfo2Trait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/time/Time"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
reviveIndex: -1
};
};
e.prototype.onActive = function(t) {
if (s.tp.isClassRevive_ProxyIsTriggerRevive(t)) {
if (0 == this.state.reviveIndex) {
t.replace = !0;
t.returnState = !0;
t.returnValue = !1;
}
if (1 == this.state.reviveIndex) {
t.replace = !0;
t.returnState = !0;
t.returnValue = !0;
}
}
if (s.tp.isClassGame_GameInfoUpdate_ProxyUpdateGameNumNoRefresh(t)) {
var e = c.storage.getItem("classDayGameNumNoRefresh", 0);
l.isNewDay() ? c.storage.setItem("classDayGameNumNoRefresh", 1) : c.storage.setItem("classDayGameNumNoRefresh", e + 1);
}
};
return a([ classId("CTAutoClassInfo2Trait") ], e);
}(n.Trait);
r.CTAutoClassInfo2Trait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/time/Time": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTBAlgorithmGaohuibaoARGTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "59fffsrH6tI4YCEQVpbzXBc", "CTBAlgorithmGaohuibaoARGTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTBAlgorithmGaohuibaoARGTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), c = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), p = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
p.tp.isAlgorithm_ProxySuccessStrategy(t) && l.algorithmName.algoActualId == c.OFFER_TYPE.DIFFICULTY_GAOHUIBAO && l.algorithmName.setAlgoActualName([ s.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, s.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, s.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO ]);
};
return a([ classId("CTBAlgorithmGaohuibaoARGTrait") ], e);
}(n.Trait);
r.CTBAlgorithmGaohuibaoARGTrait = u;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTChapterWinOverTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4dd23y4x6VFj7A/mMxF83Qs", "CTChapterWinOverTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTChapterWinOverTrait = void 0;
var n = t("../../../../../../../scripts/base/async/WaitFor"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isChapterTopInfo_CollectEffect_ProxyShowItemAnim(t) && n.waitFor.end("chapterCollectItemAnimState");
};
return a([ classId("CTChapterWinOverTrait") ], e);
}(s.Trait);
r.CTChapterWinOverTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/async/WaitFor": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTComboDotTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3d18327FJRAyIAMzc02Q6MS", "CTComboDotTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTComboDotTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/base/storage/Storage"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {};
};
e.prototype.onActive = function(t) {
if (s.tp.isClassBlocksProducer_TouchDot_ProxyOnTouchEndDelay(t)) {
var e = c.storage.getItem("classRoundNum", 0);
c.storage.getItem("classGameNum", 0) > 0 && 0 == e && (t.replace = !0);
}
};
return a([ classId("CTComboDotTrait") ], e);
}(n.Trait);
r.CTComboDotTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTDotClickGameEndInfoTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e9466/4SCNL4qBGVDPBRfWH", "CTDotClickGameEndInfoTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTDotClickGameEndInfoTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function() {};
return a([ classId("CTDotClickGameEndInfoTrait") ], e);
}(t("../../../../../../../scripts/base/trait/Trait").Trait);
r.CTDotClickGameEndInfoTrait = n;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0
} ],
CTDotClickUsrDataGameEndTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4754dLYDD1CUJZIG0EN/EjR", "CTDotClickUsrDataGameEndTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
}, s = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
return t;
}, c = this && this.__values || function(t) {
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
r.CTDotClickUsrDataGameEndTrait = void 0;
var l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../../../../../../../scripts/base/storage/Storage"), d = t("../../../../../../../scripts/modules/game/vo/GameInfo"), f = t("../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), h = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), y = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), g = t("../../../../../../../scripts/modules/blocksProducer/config/BlocksProducerConfig"), _ = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), v = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), T = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.STRATEGY_NAMES = [ "填空消除", "熵增", "难题", "随机无死" ];
e.BLOCK_NUMS = [ 1, 2, 3, 4, 5, 6, 9 ];
e.SAVE_LOCAL_KEY = "clickRecordClass";
e.SAVE_TRAVEL_KEY = "clickRecordTravel";
return e;
}
e.prototype.onActive = function(t) {
if (p.tp.isChapterDataStatistics_AddUsrDataGameEnd_ProxyOnChapterAlgorithmStrategy_RunState(t) && 1 === t.args[0].runStateType) {
var e = this.getData(this.SAVE_TRAVEL_KEY);
this.setStrategyData(e);
u.storage.setItem(this.SAVE_TRAVEL_KEY, e);
}
if (p.tp.isClassDataStatistics_AddUsrDataGameEnd_ProxyOnClassAlgorithmStrategy_RunState(t) && 1 === t.args[0].runStateType) {
e = this.getData(this.SAVE_LOCAL_KEY);
this.setStrategyData(e);
u.storage.setItem(this.SAVE_LOCAL_KEY, e);
}
if (p.tp.isDot_ClickUsrDataGameEndTrait_ProxyOnGameEventHide(t)) if (d.gameInfo.gameMode === f.GameMode.Class) {
(e = this.getData(this.SAVE_LOCAL_KEY)).interval_cnt++;
u.storage.setItem(this.SAVE_LOCAL_KEY, e);
} else {
(e = this.getData(this.SAVE_TRAVEL_KEY)).interval_cnt++;
u.storage.setItem(this.SAVE_TRAVEL_KEY, e);
}
if (p.tp.isChapterGame_ProxyOnBackHome(t)) {
(e = this.getData(this.SAVE_TRAVEL_KEY)).interval_cnt++;
u.storage.setItem(this.SAVE_TRAVEL_KEY, e);
}
if (p.tp.isClassGame_ProxyOnGameBackHome(t)) {
(e = this.getData(this.SAVE_LOCAL_KEY)).interval_cnt++;
u.storage.setItem(this.SAVE_LOCAL_KEY, e);
}
if (p.tp.isDot_ClickUsrDataGameEndTrait_ProxyOnBlocksProducer_TouchEnd(t)) {
var r = t.args[0].state.touchStartTime;
if (d.gameInfo.gameMode === f.GameMode.Class) {
if (0 == u.storage.getItem("classRoundNum", 0)) return;
(e = this.getData(this.SAVE_LOCAL_KEY)).dragging_time.push(Date.now() - r);
u.storage.setItem(this.SAVE_LOCAL_KEY, e);
} else {
if (0 == u.storage.getItem("chapterRoundNum", 0)) return;
(e = this.getData(this.SAVE_TRAVEL_KEY)).dragging_time.push(Date.now() - r);
u.storage.setItem(this.SAVE_TRAVEL_KEY, e);
}
}
p.tp.isDot_ClickUsrDataGameEndTrait_ProxyOnGame_Replay(t) && (d.gameInfo.gameMode === f.GameMode.Class ? this.setDefaultData(this.SAVE_LOCAL_KEY) : this.setDefaultData(this.SAVE_TRAVEL_KEY));
if (p.tp.isDot_ClickUsrDataGameEndTrait_ProxyOnRevive_Click(t)) if (d.gameInfo.gameMode === f.GameMode.Class) {
(e = this.getData(this.SAVE_LOCAL_KEY)).revive_click++;
u.storage.setItem(this.SAVE_LOCAL_KEY, e);
} else {
(e = this.getData(this.SAVE_TRAVEL_KEY)).revive_click++;
u.storage.setItem(this.SAVE_TRAVEL_KEY, e);
}
if (p.tp.isDot_ClickUsrDataGameEndTrait_ProxyOnRevive_Show(t)) if (d.gameInfo.gameMode === f.GameMode.Class) {
(e = this.getData(this.SAVE_LOCAL_KEY)).revive_show++;
u.storage.setItem(this.SAVE_LOCAL_KEY, e);
} else {
(e = this.getData(this.SAVE_TRAVEL_KEY)).revive_show++;
u.storage.setItem(this.SAVE_TRAVEL_KEY, e);
}
};
e.prototype.setStrategyData = function(t) {
var e = m.OFFER_TYPE_STRINGS[h.algorithmName.algoExpectedId], r = h.algorithmName.algoActualName[0];
if (e && r) {
for (var o = 0; o < this.STRATEGY_NAMES.length; o++) {
e.includes(this.STRATEGY_NAMES[o]) && t.count_strategy[o]++;
r.includes(this.STRATEGY_NAMES[o]) && t.count_strategy_fact[o]++;
}
var i = y.algorithmInfo.blockIdList;
for (o = 0; o < i.length; o++) if (!(i[o] < 0)) {
for (var a = g.blockPosInfo[i[o] - 1], n = 0, c = 0; c < a.length; c++) for (var l = 0; l < a[c].length; l++) 1 === a[c][l] && n++;
var p = this.BLOCK_NUMS.indexOf(n);
-1 != p && t.block_cnt[p]++;
}
if (d.gameInfo.gameMode === f.GameMode.Class) {
var _ = u.storage.getItem("classRoundNum", 0);
e.includes("难题") && t.first_difficult <= 0 && (t.first_difficult = _);
h.algorithmName.algoActualName.some(function(t) {
return t.includes("难题");
}) && t.first_difficult_fact <= 0 && (t.first_difficult_fact = _);
var v = i.sort(function(t, e) {
return t - e;
}).join(","), T = t.top_block_group.find(function(t) {
return t.blockIds.join(",") === v;
});
T ? T.count++ : t.top_block_group.push({
blockIds: s(i),
count: 1
});
t.top_block_group.sort(function(t, e) {
return e.count - t.count;
});
t.top_block_group.length > 5 && (t.top_block_group = t.top_block_group.slice(0, 5));
}
}
};
e.prototype.getDotData = function(t) {
var e, r, o, i, a, n, s, l, p, d;
if ("class" === t) {
var f = (E = null !== (p = (R = this.getData(this.SAVE_LOCAL_KEY)).dragging_time) && void 0 !== p ? p : []).length > 0 ? E.sort(function(t, e) {
return t - e;
})[Math.floor(E.length / 2)] : 0, m = E.length > 0 ? E.reduce(function(t, e) {
return t + e;
}, 0) / E.length : 0, h = (0 == u.storage.getItem("classGameNum", 0) ? [ [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ], [ -1, -1, -1, -1, -1, -1, -1, -1 ] ] : u.storage.getItem("classInitialFaceBlocks", v.boardInfo.NULL)).map(function(t) {
return t.map(function(t) {
return -1 === t ? 0 : t > 0 ? 1 : t;
}).join("");
}).join(""), y = R.top_matrix.find(function(t) {
return t.matrix === h;
});
y ? y.count++ : R.top_matrix.push({
matrix: h,
count: 1
});
R.top_matrix.sort(function(t, e) {
return e.count - t.count;
});
R.top_matrix.length > 5 && (R.top_matrix = R.top_matrix.slice(0, 5));
var g = [];
try {
for (var T = c(R.top_matrix), b = T.next(); !b.done; b = T.next()) {
var S = b.value;
g.push(((o = {})[S.matrix] = S.count, o));
}
} catch (t) {
e = {
error: t
};
} finally {
try {
b && !b.done && (r = T.return) && r.call(T);
} finally {
if (e) throw e.error;
}
}
var P = [];
try {
for (var O = c(R.top_block_group), C = O.next(); !C.done; C = O.next()) {
var I = C.value;
P.push(((n = {})[JSON.stringify(I.blockIds)] = I.count, n));
}
} catch (t) {
i = {
error: t
};
} finally {
try {
C && !C.done && (a = O.return) && a.call(O);
} finally {
if (i) throw i.error;
}
}
var A = {
count_strategy: JSON.stringify(R.count_strategy),
count_strategy_fact: JSON.stringify(R.count_strategy_fact),
interval_cnt: R.interval_cnt,
block_cnt: JSON.stringify(R.block_cnt),
dragging_time_median: f,
dragging_time_avg: m,
first_difficult: R.first_difficult,
first_difficult_fact: R.first_difficult_fact,
top_block_group: JSON.stringify(P) || "",
top_matrix: JSON.stringify(g) || "",
reward_ad_click_cnt: R.revive_click > R.revive_show ? R.revive_show : R.revive_click
};
this.setDefaultData(this.SAVE_LOCAL_KEY);
return A;
}
var R, E = null !== (d = (R = this.getData(this.SAVE_TRAVEL_KEY)).dragging_time) && void 0 !== d ? d : [], w = u.storage.getItem("chapterNum", 0), G = _.chapterConfigInfo.chapterDatasCfg[w].Condition.Way, k = (f = E.length > 0 ? E.sort(function(t, e) {
return t - e;
})[Math.floor(E.length / 2)] : 0, m = E.length > 0 ? E.reduce(function(t, e) {
return t + e;
}, 0) / E.length : 0, ""), L = 0;
if (0 == G) {
k = "score";
L = _.chapterConfigInfo.chapterDatasCfg[w].Condition.RequiredScore;
} else {
k = "gem";
var N = _.chapterConfigInfo.chapterDatasCfg[w].Condition.RequiredCollections, D = 0;
try {
for (var F = c(N), j = F.next(); !j.done; j = F.next()) D += j.value.Value;
} catch (t) {
s = {
error: t
};
} finally {
try {
j && !j.done && (l = F.return) && l.call(F);
} finally {
if (s) throw s.error;
}
}
L = D;
}
A = {
count_strategy: JSON.stringify(R.count_strategy),
count_strategy_fact: JSON.stringify(R.count_strategy_fact),
interval_cnt: R.interval_cnt,
block_cnt: JSON.stringify(R.block_cnt),
dragging_time_median: f,
dragging_time_avg: m,
target_type: k,
target_num: L,
dda_status: R.dda_status,
reward_ad_click_cnt: R.revive_click > R.revive_show ? R.revive_show : R.revive_click
};
this.setDefaultData(this.SAVE_TRAVEL_KEY);
return A;
};
e.prototype.getData = function(t) {
return u.storage.getItem(t, {
count_strategy: [ 0, 0, 0, 0 ],
count_strategy_fact: [ 0, 0, 0, 0 ],
interval_cnt: 0,
block_cnt: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
dragging_time: [],
first_difficult: 0,
first_difficult_fact: 0,
top_block_group: [],
top_matrix: [],
dda_status: 0,
revive_click: 0,
revive_show: 0
});
};
e.prototype.setDefaultData = function(t) {
u.storage.setItem(t, {
count_strategy: [ 0, 0, 0, 0 ],
count_strategy_fact: [ 0, 0, 0, 0 ],
interval_cnt: 0,
block_cnt: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
dragging_time: [],
first_difficult: 0,
first_difficult_fact: 0,
top_block_group: [],
top_matrix: [],
dda_status: 0,
revive_click: 0,
revive_show: 0
});
};
return a([ classId("CTDotClickUsrDataGameEndTrait") ], e);
}(l.Trait);
r.CTDotClickUsrDataGameEndTrait = T;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/blocksProducer/config/BlocksProducerConfig": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTDotDeadReportToUsrDataGameEndTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c4984NDu8pPH4CCyr881/ZS", "CTDotDeadReportToUsrDataGameEndTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTDotDeadReportToUsrDataGameEndTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/modules/game/vo/GameInfo"), p = t("../../../../../../../scripts/modules/game/type/GameType"), u = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), d = t("../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.GameEndAddPointControlClassKey = "GameEndAddPointControlClassKey";
e.GameEndAddPointControlTravelKey = "GameEndAddPointControlTravelKey";
e.dead_report = [];
return e;
}
e.prototype.onActive = function(t) {
if (s.tp.isClassDefaultBoard_ProxyOnProduceClassDefaultBoard(t)) if (t.args[0].data.newRound) {
this.dead_report = [];
this.saveDead_report(this.dead_report);
} else this.dead_report = this.getDead_report();
if (s.tp.isChapterDefaultBoard_ProxyOnProduceChapterDefaultBoard(t)) if (t.args[0].data.newGame) {
this.dead_report = [];
this.saveDead_report(this.dead_report);
} else this.dead_report = this.getDead_report();
if (s.tp.isBlocksProducerTouchShowGameOverStatus(t)) if (l.gameInfo.gameMode == p.GameMode.Class) {
(o = this.getDefaultDeadOne())[0] = this.dead_report.length;
var e = c.storage.getItem("classScore", 0);
o[1] = e;
var r = c.storage.getItem("classRoundNum", 0);
o[3] = r;
this.dead_report.push(o);
this.saveDead_report(this.dead_report);
} else {
var o;
(o = this.getDefaultDeadOne())[0] = this.dead_report.length;
c.storage.getItem("chapterCondition").Way == d.ChapterType.score && (o[1] = c.storage.getItem("chapterScore", 0));
o[2] = u.chapterConfigInfo.getChapterProgress();
var i = c.storage.getItem("chapterRoundNum", 0);
o[3] = i;
this.dead_report.push(o);
this.saveDead_report(this.dead_report);
}
};
e.prototype.saveDead_report = function(t) {
l.gameInfo.gameMode == p.GameMode.Class ? c.storage.setItem(this.GameEndAddPointControlClassKey, t) : c.storage.setItem(this.GameEndAddPointControlTravelKey, t);
};
e.prototype.getDead_report = function() {
return l.gameInfo.gameMode == p.GameMode.Class ? c.storage.getItem(this.GameEndAddPointControlClassKey, []) : c.storage.getItem(this.GameEndAddPointControlTravelKey, []);
};
e.prototype.getDefaultDeadOne = function() {
return l.gameInfo.gameMode == p.GameMode.Class ? [ 0, 0, -1, 0 ] : c.storage.getItem("chapterCondition").Way == d.ChapterType.score ? [ 0, 0, 0, 0 ] : [ 0, -1, 0, 0 ];
};
return a([ classId("CTDotDeadReportToUsrDataGameEndTrait") ], e);
}(n.Trait);
r.CTDotDeadReportToUsrDataGameEndTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTDotFirstClickDataGameEndTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b843cjkNbVO/6hEgfogdaUC", "CTDotFirstClickDataGameEndTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTDotFirstClickDataGameEndTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function() {};
return a([ classId("CTDotFirstClickDataGameEndTrait") ], e);
}(t("../../../../../../../scripts/base/trait/Trait").Trait);
r.CTDotFirstClickDataGameEndTrait = n;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0
} ],
CTEffectAccTraitTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8aa5aoBaXlDRKwLOBUqjzW4", "CTEffectAccTraitTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTEffectAccTraitTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/kSpeed/type/KSpeedType"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isKSpeed_ProxySetKSpeed(t)) {
if (!(null == t ? void 0 : t.args[1])) return;
t.args[1] == s.EffectAccTraitEventName.OpenGame_UI && (t.args[0] = 1.5);
}
};
return a([ classId("CTEffectAccTraitTrait") ], e);
}(n.Trait);
r.CTEffectAccTraitTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/kSpeed/type/KSpeedType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTGBMClearTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "88f07MFi15PPpIR1Vq1BqKl", "CTGBMClearTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTGBMClearTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.maxGameNum = 5;
return e;
}
e.prototype.onActive = function(t) {
if (s.tp.isClassGBM_ProxyOnGameEndReady(t)) {
var e = t.args[0];
if (!e) return;
if (e.length < this.maxGameNum) return;
var r = e[3].round_info, o = e[4].round_info;
e[1].round_info = r;
e[3].round_info = o;
for (var i = 0; i < e.length; i++) {
e[i].remain_block_cnt = [];
if (i % 2 == 0) e[i].round_info = []; else for (var a = 0; a < e[i].round_info.length; a++) e[i].round_info[a][0] -= 1;
}
t.args[0] = e;
}
};
return a([ classId("CTGBMClearTrait") ], e);
}(n.Trait);
r.CTGBMClearTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTGMAlgorithmTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9b022yqYvRN5JEWMY6Fxd8R", "CTGMAlgorithmTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTGMAlgorithmTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), l = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isShieldDot: !0,
repeatBlocks: [],
putBlocks: [],
putAlgorithm: s.OFFER_TYPE.NONE
};
};
e.prototype.onActive = function(t) {
if (p.tp.isAlgorithmBottomInfoModifyComplete(t)) if (0 == this.state.isShieldDot) {
this.state.repeatBlocks = [];
this.state.putBlocks = [];
c.algorithmInfo.setBlockIdList([ 1, 1, 1 ]);
} else if (3 == this.state.repeatBlocks.length) {
this.state.putBlocks = [];
c.algorithmInfo.setBlockIdList(this.state.repeatBlocks);
} else if (3 == this.state.putBlocks.length) {
c.algorithmInfo.setBlockIdList(this.state.putBlocks);
this.state.putBlocks = [];
}
(p.tp.isChapterAlgorithmStrategy_Deal_ProxyFallbackPlan(t) || p.tp.isClassAlgorithmStrategy_Deal_ProxyFallbackPlan(t)) && this.state.putAlgorithm != s.OFFER_TYPE.NONE && l.algorithmStrategyInfo.setAlgorithmList([ this.state.putAlgorithm ]);
};
return a([ classId("CTGMAlgorithmTrait") ], e);
}(n.Trait);
r.CTGMAlgorithmTrait = u;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTGMIsOpenOperaPosTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bd3dfQaUIxLPpaXp5GS92QO", "CTGMIsOpenOperaPosTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTGMIsOpenOperaPosTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = (t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), 
t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType")), c = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
locksPosList: []
};
};
e.prototype.onActive = function(t) {
if (l.tp.isIsOpenOperaPosTraitSetIsUseMultiple(t) && this.state.locksPosList && this.state.locksPosList.length > 0) {
t.replace = !0;
var e = this.state.locksPosList;
c.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(e);
var r = s.OPERA_POS_TYPE.LEFT;
"012" === e.join("") ? r = s.OPERA_POS_TYPE.LEFT : "120" === e.join("") ? r = s.OPERA_POS_TYPE.MIDDLE : "210" === e.join("") ? r = s.OPERA_POS_TYPE.RIGHT : "021" === e.join("") ? r = s.OPERA_POS_TYPE.LEFT_RIGHT : "102" === e.join("") ? r = s.OPERA_POS_TYPE.MIDDLE_LEFT : "201" === e.join("") && (r = s.OPERA_POS_TYPE.RIGHT_LEFT);
c.algorithmStrategyBlocksPosInfo._blocksPosList = r;
}
};
return a([ classId("CTGMIsOpenOperaPosTrait") ], e);
}(n.Trait);
r.CTGMIsOpenOperaPosTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTGMReviveTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c670eQUDSxBXpFSkYNscrqo", "CTGMReviveTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTGMReviveTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isInfinityRevive: !1,
isInfinityAdvertise: !1
};
};
e.prototype.onActive = function(t) {
if ((s.tp.isClassRevive_ProxyIsTriggerRevive(t) || s.tp.isChapterRevive_ProxyIsOpenRevive(t)) && this.state.isInfinityRevive) {
t.returnValue = !0;
t.replace = !0;
}
s.tp.isAdvertisementGameInfoGetIsCanPlayAd(t) && this.state.isInfinityAdvertise && (t.returnValue = !1);
};
return a([ classId("CTGMReviveTrait") ], e);
}(n.Trait);
r.CTGMReviveTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTGameComboScoreTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7f4bbVZTEpBCrns/Ql2T5pA", "CTGameComboScoreTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTGameComboScoreTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isChapterGameOver_GameEnd_Dot_ProxyOnGameEndDMDot(t) && (t.data.CTGameComboScoreStatus = !0);
};
return a([ classId("CTGameComboScoreTrait") ], e);
}(n.Trait);
r.CTGameComboScoreTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTLogAddAdLogTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3ed6actb01Kxa17RvvBb8pI", "CTLogAddAdLogTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
}, s = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTLogAddAdLogTrait = void 0;
var c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/logHijack/vo/LogHijackInfo"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tag = "广告";
e.logColor = "orange";
e.logs = [];
e._originalConsoleLog = console.log;
e._isConsoleHijacked = !1;
e._storedLogs = [];
e._testStoredFields = [];
return e;
}
e.prototype.data = function() {
return {
openTrait: !1
};
};
e.prototype.hijackConsoleLog = function() {
var t = this;
if (!this._isConsoleHijacked) {
this._originalConsoleLog = console.log;
this._storedLogs = [];
this._testStoredFields = [];
console.log = function() {
for (var e, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
(e = t._originalConsoleLog).call.apply(e, s([ console ], r));
t._storedLogs.push({
args: s(r)
});
if (r.length > 0 && "string" == typeof r[0]) {
var i = l.logHijackInfo.getNeedArguments(r);
i && t._testStoredFields.push(i);
}
};
this._isConsoleHijacked = !0;
}
};
e.prototype.unhijackConsoleLog = function() {
if (this._isConsoleHijacked) {
console.log = this._originalConsoleLog;
this._isConsoleHijacked = !1;
}
};
e.prototype.printStoredLogs = function() {
l.logHijackInfo.printStoredLogs(this._testStoredFields);
this._storedLogs = [];
this._testStoredFields = [];
};
e.prototype.onActive = function(t) {
if (0 != this.state.openTrait) {
(p.tp.isChapterAdvertisement_FullScreenProxyShowFullScreenAdvertisement(t) || p.tp.isClassAdvertisement_FullScreenProxyShowFullScreenAdvertisement(t) || p.tp.isAdvertisement_FullScene_ProxyShowFullScreenAdvertisement(t) || p.tp.isChapterAdvertisement_RewardProxyShowAdvertisement(t) || p.tp.isClassAdvertisement_RewardProxyShowAdvertisement(t)) && this.hijackConsoleLog();
if (p.tp.isClassAdvertisement_FullScreenProxyAdvertisementCallBack(t) || p.tp.isChapterAdvertisement_FullScreenProxyAdvertisementCallBack(t) || p.tp.isAdvertisement_FullScene_ProxyAdvertisementCallBack(t) || p.tp.isAdvertisement_ProxyOnRewardOver(t)) {
this.unhijackConsoleLog();
this.printStoredLogs();
}
}
};
return a([ classId("CTLogAddAdLogTrait") ], e);
}(c.Trait);
r.CTLogAddAdLogTrait = u;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/logHijack/vo/LogHijackInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTLowDeviceEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "43084FzNwhPspOFo8E31/C4", "CTLowDeviceEffectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTLowDeviceEffectTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (0 != c.deviceInfo.isLowLevel) {
if (s.tp.isBlocksProducerPlayBlockAppearAnimation(t)) {
var e = t.args[0], r = t.args[2];
e.scale = .45;
e.opacity = 255;
t.replace = !0;
r();
}
s.tp.isBlocksProducerShowShaderAnim(t) && (t.replace = !0);
}
};
return a([ classId("CTLowDeviceEffectTrait") ], e);
}(n.Trait);
r.CTLowDeviceEffectTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTReviveTimeOutSkipSplashTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "342adsDEK1IIaznOXynRg9G", "CTReviveTimeOutSkipSplashTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTReviveTimeOutSkipSplashTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isFromTimeOut: !1
};
};
e.prototype.onActive = function(t) {
s.tp.isRevive_ProxyOnClickClose(t) && (this.state.isFromTimeOut = !0);
s.tp.isRevive_ProxyOnGameReady(t) && (this.state.isFromTimeOut = !1);
s.tp.isClassGameOver_GameEndPre_ProxyIsCanShowSplash(t) && this.state.isFromTimeOut && (t.returnValue = !1);
s.tp.isChapterGameOver_GameEndPre_ProxyIsCanShowSplash(t) && this.state.isFromTimeOut && (t.returnValue = !1);
};
return a([ classId("CTReviveTimeOutSkipSplashTrait") ], e);
}(n.Trait);
r.CTReviveTimeOutSkipSplashTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTRobotAddReviveNumTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e2803myG7ZAgq5sydf/vFXY", "CTRobotAddReviveNumTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRobotAddReviveNumTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curReviveNum = -1;
return e;
}
e.prototype.data = function() {
return {
revivenum: -1
};
};
e.prototype.onActive = function(t) {
if (s.tp.isClassRevive_ProxyIsTraitTriggerRevive(t)) {
0 == this.curReviveNum && (t.args[0] = !1);
if (this.curReviveNum > 0) {
this.curReviveNum -= 1;
t.args[0] = !0;
}
}
s.tp.isClassGameDataClear_Disk_ProxyResetReviveAndAdvertisementData(t) && (this.curReviveNum = this.state.revivenum);
s.tp.isClassTopInfo_ProxyOnGameStart(t) && t.args[0].data.newGame && (this.curReviveNum = this.state.revivenum);
};
return a([ classId("CTRobotAddReviveNumTrait") ], e);
}(n.Trait);
r.CTRobotAddReviveNumTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTRobotChapterTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "381f5NVnFRIHJWsDGTskYeW", "CTRobotChapterTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRobotChapterTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/base/storage/Storage"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curReviveNum = -1;
return e;
}
e.prototype.data = function() {
return {
chapterNum: -1,
isEnterChapter: !1
};
};
e.prototype.onActive = function(t) {
s.tp.isLaunch_ProxyOnTraitConfigInitComplete(t) && this.state.isEnterChapter && c.storage.setItem("intoModeChoice", !0);
s.tp.isModeChoiceOnJourneyClick(t) && this.state.chapterNum > 0 && c.storage.setItem("chapterNum", this.state.chapterNum);
s.tp.isChapterFail_ProxyHideUI(t) && this.state.chapterNum > 0 && c.storage.setItem("chapterNum", this.state.chapterNum);
};
return a([ classId("CTRobotChapterTrait") ], e);
}(n.Trait);
r.CTRobotChapterTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CTSkinBonesTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "72d8bhEqxZPdY2F59jkj4LJ", "CTSkinBonesTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTSkinBonesTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/layer/GameLayer"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
l.tp.isSkin_Board_ProxyUpdateSkinBoard(t) && this.onBoard(t.args[0]);
l.tp.isSetupOnSetupRender(t) && this.onSetupRender(t.target);
if (l.tp.isEliminate_Effects_ProxyPlayRowEliminateEffect(t)) {
var e = t.args[0];
this.onPlayColumnEliminateEffects(s.gameUiLayer, e, t);
}
if (l.tp.isEliminate_Effects_ProxyPlayColumnEliminateEffect(t)) {
e = t.args[0];
this.onPlayRowEliminateEffects(s.gameUiLayer, e, t);
}
if (l.tp.isEncourage_ProxySetEffectState(t)) {
var r = t.args[0], o = t.args[1];
this.onPlayEncourage(s.gameUiLayer, r, o, t);
}
l.tp.isBoardOnLoad(t) && this.onLoadBlock();
l.tp.isBlockLoadBlockSpriteFrame(t) && this.onLoadBlockSpriteFrame(t);
l.tp.isBlockLoadGemsSpriteFrame(t) && this.onLoadGemsBlockSpriteFrame(t);
l.tp.isBlockLoadOtherCollectionSpriteFrame(t) && this.onLoadOtherCollectionSpriteFrame(t);
l.tp.isSkin_Block_ProxyOnSkinReadyComplete(t) && this.onSwitchSkinId();
l.tp.isSkin_Block_ProxyOnSkinBlock(t) && this.onSkinBlock(t);
l.tp.isBlocksProducerItemSetShadow(t) && this.onSetShadowOpacity(t);
if (l.tp.isBlocksProducerItemSetShadowSprite(t)) {
var i = t.args[0];
this.onUpShadowData(i, t);
}
l.tp.isSkin_BoardSplashAnimation_ProxyOnBoardSplashAnimationClear_End(t) && this.onBoardSplashAnimationClear_End();
};
e.prototype.onBoardSplashAnimationClear_End = function() {};
e.prototype.onSkinBlock = function() {};
e.prototype.onBoard = function() {};
e.prototype.onSetup = function() {};
e.prototype.onSetupRender = function() {};
e.prototype.onPlayRowEliminateEffects = function() {};
e.prototype.onPlayColumnEliminateEffects = function() {};
e.prototype.onPlayEncourage = function() {};
e.prototype.onLoadBlock = function() {};
e.prototype.onAddBlock = function() {};
e.prototype.onLoadBlockSpriteFrame = function() {};
e.prototype.onLoadGemsBlockSpriteFrame = function() {};
e.prototype.onLoadOtherCollectionSpriteFrame = function() {};
e.prototype.onSwitchSkinId = function() {};
e.prototype.onSetShadowOpacity = function() {};
e.prototype.onUpShadowData = function() {};
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onBoardSplashAnimationClear_End", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onSkinBlock", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onBoard", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onSetup", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onSetupRender", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onPlayRowEliminateEffects", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onPlayColumnEliminateEffects", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onPlayEncourage", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onLoadBlock", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onAddBlock", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onLoadBlockSpriteFrame", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onLoadGemsBlockSpriteFrame", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onLoadOtherCollectionSpriteFrame", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onSwitchSkinId", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onSetShadowOpacity", null);
a([ n.trait("IsOpenChangeSkinTrait", "皮肤功能") ], e.prototype, "onUpShadowData", null);
return a([ classId("CTSkinBonesTrait") ], e);
}(c.Trait);
r.CTSkinBonesTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CancelMiniGameForbiddenTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8ddd3hyu/JCH4FGZUWCImVo", "CancelMiniGameForbiddenTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CancelMiniGameForbiddenTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/base/ui/UI"), c = t("../../../../../../scripts/modules/prefab/PrefabConfig"), l = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (l.tp.isAdvertisement_Load_ProxyLoadFullScreenAdInterface(t) && s.UI.activeState(c.PrefabConfig.GameLobbyMainView.url)) if (t.target && t.target.loadFullScreenAd && t.target.loadFullScreenAd instanceof Function) {
t.target.loadFullScreenAd();
t.returnState = !0;
t.replace = !0;
} else assertError(!1, "Advertisement_Load_Proxy 上 loadFullScreenAd 方法不存在");
};
return a([ classId("CancelMiniGameForbiddenTrait") ], e);
}(n.Trait);
r.CancelMiniGameForbiddenTrait = p;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CenterMessagePositionStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "eb30695XfBDgqU8zSZOJhzb", "CenterMessagePositionStateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CenterMessagePositionStateTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(t) && (t.args[1] = 30);
if (s.tp.isEncourage_ProxyGetEncourageLevelColorPos(t)) {
var e = this.getCustomPosition(), r = e.x, o = e.y;
t.args[0].x = r;
t.args[0].y = o;
}
if (s.tp.isClassScoreTip_ProxyPlayClearScreenScoreAnim(t)) {
var i = this.getCustomPosition();
r = i.x, o = i.y;
t.args[2] = r;
t.args[3] = o;
}
if (s.tp.isClassScoreTip_ProxyPlayComboScoreAnim(t)) {
var a = t.args[0], n = a.eliminateCount, c = a.continuousEliminateTimes, l = this.getCustomPosition();
r = l.x, o = l.y;
if (n > 1 && c <= 1) {
t.args[0].putEliminateCenter.x = r;
t.args[0].putEliminateCenter.y = o + 30;
} else {
t.args[0].putEliminateCenter.x = r;
t.args[0].putEliminateCenter.y = o;
}
}
s.tp.isClassCombo_ProxyChangeComboDisplayTime(t) && (t.args[0] = 30);
if (s.tp.isClassCombo_ProxyChangeComboPos(t) || s.tp.isChapterCombo_ProxyChangeComboPos(t)) {
var p = this.getCustomPosition();
r = p.x, o = p.y;
t.args[0] = r;
t.args[1] = o;
}
if (s.tp.isChapterComboScoreTip_ProxyOnTouchEnd(t)) {
var u = this.getCustomPosition();
r = u.x, o = u.y;
t.args[0].state.putEliminateCenter.x = r;
t.args[0].state.putEliminateCenter.y = o;
}
};
e.prototype.getCustomPosition = function() {
return {
x: cc.view.getVisibleSize().width / 2,
y: cc.view.getVisibleSize().height / 6 + cc.view.getVisibleSize().height / 2
};
};
return a([ classId("CenterMessagePositionStateTrait") ], e);
}(n.Trait);
r.CenterMessagePositionStateTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ChangeLowDeviceEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "952d22IDV1G6rt8+L9ThqBX", "ChangeLowDeviceEffectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChangeLowDeviceEffectTrait = void 0;
var n = t("../../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/block/components/Block"), l = t("../../../../../../../scripts/modules/board/vo/BoardRendererInfo"), p = t("../../../../../../../scripts/modules/device/type/DeviceType"), u = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), d = t("../../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../../scripts/modules/game/vo/GameInfo"), m = t("../../../../../../../scripts/modules/resUrl/type/ResUrlType"), h = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.deviceInfo.deviceLevel == p.DEVICE_LEVEL.LOW) {
if (h.tp.isClassTopInfoInitComboAnim(t)) {
if (null == (r = TRAIT("Combo_tips_lv_blockTrait")) ? void 0 : r.active) return;
var e = t.target;
n.ResLoader.renderDragonbonesByBundle({
bundleName: "class",
dragonBonesArmatureDisplay: e.comboAnim,
dragonAssetUrl: "dragonbones/topInfo/comnb_ske-lite",
dragonAtlasAssetUrl: "dragonbones/topInfo/comnb_tex-lite",
armatureName: e.comboAnim.armatureName,
animationName: "newAnimation",
playTimes: 0,
completeRemove: !1
});
t.returnState = !0;
}
if (h.tp.isClassTopInfoComboAnimState(t)) {
var r;
if (null == (r = TRAIT("Combo_tips_lv_blockTrait")) ? void 0 : r.active) return;
t.returnState = !0;
}
if (h.tp.isBoardSplashAnimationDownAnimation(t) || h.tp.isBoardSplashAnimationUpAnimation(t)) {
var o = l.boardRendererInfo.splashBlocks, i = m.ResUrlType.BLOCKS_LITE;
n.ResLoader.load(i, cc.SpriteAtlas, function(t, e) {
if (t) ; else if (e) for (var r = 0; r < l.ROW; r++) for (var i = 0; i < l.COL; i++) {
var a = o[r][i].getComponent(c.default), n = a.state.color;
if (n < 8 && n > 0) {
a.block.sizeMode = cc.Sprite.SizeMode.CUSTOM;
a.block.spriteFrame = e.getSpriteFrame("game_cube_" + n);
}
}
});
}
if (h.tp.isComboBasePlayAnimation(t)) {
if (f.gameInfo.gameMode != d.GameMode.Class) return;
var a = t.target;
n.ResLoader.renderDragonbonesByBundle({
bundleName: "class",
dragonBonesArmatureDisplay: a.effects,
dragonAssetUrl: "dragonbones/combo/comb_ske-lite",
dragonAtlasAssetUrl: "dragonbones/combo/comb_tex-lite",
armatureName: a.effects.armatureName,
animationName: "newAnimation",
playTimes: 0,
completeRemove: !1
});
t.returnState = !0;
}
if (h.tp.isEncourageOnLoad(t)) {
var s = t.target;
n.ResLoader.renderDragonbones({
dragonBonesArmatureDisplay: s.armatureDisplay,
dragonAssetUrl: "dragonbones/encourage/encourage_ske-lite",
dragonAtlasAssetUrl: "dragonbones/encourage/encourage_tex-lite",
armatureName: s.armatureDisplay.armatureName,
animationName: s.armatureDisplay.animationName,
playTimes: 1
});
t.returnState = !0;
}
}
};
return a([ classId("ChangeLowDeviceEffectTrait") ], e);
}(s.Trait);
r.ChangeLowDeviceEffectTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/block/components/Block": void 0,
"../../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../../scripts/modules/device/type/DeviceType": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/resUrl/type/ResUrlType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ChapterSdkNewElimintePleasureTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4cbbbJ7/bdPoqOfX1bjMH19", "ChapterSdkNewElimintePleasureTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterSdkNewElimintePleasureTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isAlgorithmSDKTraitInfoGetClearCool(t) && (t.returnValue = 1);
};
return a([ classId("ChapterSdkNewElimintePleasureTrait") ], e);
}(n.Trait);
r.ChapterSdkNewElimintePleasureTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ClearComboAnimTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f6ceelBq01Bnq0h34uXopSN", "ClearComboAnimTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ClearComboAnimTrait = void 0;
var c = t("../../../../../../../scripts/base/animation/DragonbonesAnim"), l = t("../../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../../scripts/base/events/Events"), u = t("../../../../../../../scripts/base/layer/GameLayer"), d = t("../../../../../../../scripts/base/loader/ResLoader"), f = t("../../../../../../../scripts/base/storage/Storage"), m = t("../../../../../../../scripts/base/trait/Trait"), h = t("../../../../../../../scripts/base/ui/UI"), y = t("../../../../../../../scripts/modules/board/components/Board"), g = t("../../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType"), _ = t("../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), v = t("../../../../../../../scripts/modules/encourage/components/Encourage"), T = t("../../../../../../../scripts/modules/encourage/type/EncourageType"), b = t("../../../../../../../scripts/modules/game/type/GameType"), S = t("../../../../../../../scripts/modules/game/vo/GameInfo"), P = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), O = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), C = t("../../audioConfig/MainTraitAudioConfig "), I = t("../../dragonBones/MainDragonBonesConfig"), A = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.clearNd = null;
e.numNd = null;
e.comboNd = null;
e._onClearAnimComplete = new p.Emitter();
return e;
}
e.prototype.onActive = function(t) {
if (O.tp.isClassBoardSplashAnimation_ProxySetBoardSplashAnimationState(t)) {
this.playClear(300, t.args[3]);
t.replace = !0;
}
O.tp.isClassBoardSplashAnimation_ProxyClearScreenScoreAnim(t) && (t.args[0] = this._onClearAnimComplete);
if (O.tp.isChapterScore_ProxyOnTouchEnd(t) && t.args[0].state.clearScreen) {
var e = f.storage.getItem("chapterCondition");
if (e && e.Way == _.ChapterType.score) {
var r = f.storage.getItem("chapterScore", 0) + 150;
f.storage.setItem("chapterScore", r);
this.playClear(150);
} else this.playClear();
}
O.tp.isClassCombo_ProxyChangeComboPos(t) && this.playCombo();
O.tp.isSetup_ProxyOnClick_home(t) && this.removeNodes();
O.tp.isClassBoardSplashAnimation_ProxyOnGameStart(t) && this.removeNodes();
O.tp.isChapterBoardSplashAnimation_ProxyOnGameStart(t) && this.removeNodes();
O.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(t) && (t.replace = !0);
O.tp.isClassEncourage_ProxyPlayEncourageUnbelievableAudio(t) && (t.replace = !0);
O.tp.isClassScoreTip_ProxyPlayClearScreenScoreAnim(t) && (t.replace = !0);
};
e.prototype.playClear = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = null);
return n(this, void 0, void 0, function() {
var r = this;
return s(this, function() {
cc.tween(u.gameUiLayer).delay(.4).call(function() {
var o = Cinst(y.default);
if (cc.isValid(o) && cc.isValid(o.node)) {
var i, a = c.dragonbonesAnim.play(o.node.parent, {
armatureName: "Armature",
animationName: "in",
playTimes: 1,
completeRemove: !0
}, I.MainDragonBonesConfig.clearComboAnim);
if (a) {
a.scale = 2;
a.x = 0;
a.y = 0;
r.clearNd = a;
e && a.getComponent(dragonBones.ArmatureDisplay).once(dragonBones.EventObject.COMPLETE, function() {
e(g.BoardSplashAnimationPlayType.UP_DOWN);
});
}
if (t > 0) {
i = cc.view.getVisibleSize().height / 6;
r.showNum(o.node.y, t);
} else i = o.node.y;
r.playExcellent(i);
l.audioInfo.play(C.MainTraitAudioConfig.clearComboAnim);
S.gameInfo.gameMode === b.GameMode.Class && r._onClearAnimComplete.fire();
}
}).start();
return [ 2 ];
});
});
};
e.prototype.showNum = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, i, a, n = this;
return s(this, function(s) {
switch (s.label) {
case 0:
if (cc.isValid(this.numNd)) return [ 3, 2 ];
(r = new cc.Node()).x = cc.view.getVisibleSize().width / 2;
r.y = cc.view.getVisibleSize().height / 2 + t;
this.numNd = r;
return [ 4, d.ResLoader.asyncLoadByBundle("mainTraits", "fonts/boardEffect/clearComboAnim/gameplay_num_allClear", cc.Font) ];

case 1:
o = s.sent();
(i = r.addComponent(cc.Label)).font = o;
i.lineHeight = 90;
i.fontSize = 50;
s.label = 2;

case 2:
cc.Tween.stopAllByTarget(this.numNd);
this.numNd.parent = u.gameUiLayer;
this.numNd.opacity = 0;
this.numNd.scale = .1;
a = this.numNd.getComponent(cc.Label);
if (!cc.isValid(a)) return [ 2 ];
a.string = "+" + e;
cc.tween(this.numNd).to(.4, {
opacity: 255,
scale: 1
}, {
easing: cc.easing.backOut
}).delay(.6).to(.1, {
opacity: 0
}, {
easing: cc.easing.sineOut
}).call(function() {
n.numNd.removeFromParent();
}).start();
return [ 2 ];
}
});
});
};
e.prototype.playExcellent = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o;
return s(this, function(i) {
switch (i.label) {
case 0:
return [ 4, h.UI.show(P.PrefabConfig.Encourage) ];

case 1:
(e = i.sent()).x = cc.view.getVisibleSize().width / 2;
e.y = t + cc.view.getVisibleSize().height / 2;
r = e.getComponent(v.default);
o = {
type: T.EncourageType.LEVEL_COLOR,
eliminateCount: 4,
color: 7
};
r.setState(o);
return [ 2 ];
}
});
});
};
e.prototype.playCombo = function() {
var t = c.dragonbonesAnim.play(u.gameUiLayer, {
armatureName: "Armature",
animationName: "combo",
playTimes: 1,
completeRemove: !0
}, I.MainDragonBonesConfig.clearComboAnim);
if (t) {
t.scale = 2;
t.x = cc.view.getVisibleSize().width / 2;
t.y = cc.view.getVisibleSize().height / 2;
this.comboNd = t;
}
};
e.prototype.removeNodes = function() {
cc.isValid(this.clearNd) && this.clearNd.removeFromParent();
this.clearNd = null;
cc.isValid(this.numNd) && this.numNd.removeFromParent();
cc.isValid(this.comboNd) && this.comboNd.removeFromParent();
this.comboNd = null;
};
return a([ classId("ClearComboAnimTrait") ], e);
}(m.Trait);
r.ClearComboAnimTrait = A;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/animation/DragonbonesAnim": void 0,
"../../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../../scripts/base/events/Events": void 0,
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType": void 0,
"../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../../scripts/modules/encourage/components/Encourage": void 0,
"../../../../../../../scripts/modules/encourage/type/EncourageType": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../audioConfig/MainTraitAudioConfig ": "MainTraitAudioConfig ",
"../../dragonBones/MainDragonBonesConfig": "MainDragonBonesConfig"
} ],
ComboAddRemoveNumTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "12412lCwB9HMY2/WRf1NfJK", "ComboAddRemoveNumTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ComboAddRemoveNumTrait = void 0;
var c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/game/type/GameType"), p = t("../../../../../../../scripts/modules/game/vo/GameInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../../../../../../scripts/base/storage/Storage"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
preUnEliminateTimes: 0
};
};
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n;
return s(this, function() {
if (p.gameInfo.gameMode !== l.GameMode.Class) return [ 2 ];
u.tp.isBlocksProducerTouchComputeContinuousEliminateTimes(t) && (null == (e = TRAIT("IsOpenComboContinuousTrait")) ? void 0 : e.active) && e.setState({
isStorageOnClear: !0
});
if (u.tp.isBlocksProducerTouchPrecessUnEliminateTimes(t)) {
r = t.args[0].unEliminateTimes;
this.setState({
preUnEliminateTimes: r
});
}
if (u.tp.isBlocksProducerTouchTouchFollowUpEliminateTimes(t)) {
o = d.storage.getItem("isFinishedGuide", !1);
i = t.args[0];
a = i.eliminateCount, n = i.comboAllowNoContinuousTimes;
if (this.state.preUnEliminateTimes >= n || !o) return [ 2 ];
i.continuousEliminateTimes += Math.max(0, a - 1);
}
return [ 2 ];
});
});
};
return a([ classId("ComboAddRemoveNumTrait") ], e);
}(c.Trait);
r.ComboAddRemoveNumTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ComboRainbowTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0bfd8z7DiZPir7oRkX+PaU/", "ComboRainbowTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
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
r.ComboRainbowTrait = void 0;
var p = t("../../../../../../../scripts/base/audio/AudioInfo"), u = t("../../../../../../../scripts/base/loader/ResLoader"), d = t("../../../../../../../scripts/base/trait/Trait"), f = t("../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../scripts/modules/game/vo/GameInfo"), h = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = t("../../audioConfig/MainTraitAudioConfig "), g = t("../../prefab/TraitsPrefabConfig"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isPlayRainbow = !1;
e._board = null;
e._blockUnderNode = null;
e._blockOverNode = null;
e._maxPreEliCount = 6;
e._allUnderEliRainbowArray = [];
e._allOverEliRainbowArray = [];
e._showUnderEliRainbowCnt = 0;
e._showOverEliRainbowCnt = 0;
e._continuousEliminateTimes = 0;
return e;
}
Object.defineProperty(e.prototype, "isPlayRainbow", {
get: function() {
return this._isPlayRainbow;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, l, p, u, d, y, g, _;
return s(this, function() {
if (h.tp.isBoardInitBoard(t)) {
this._board = t.target;
this._blockUnderNode = this._board.blockUnderPreEliminate;
this._blockOverNode = this._board.blockOverPreEliminate;
this._loadPreEliArray();
}
if (h.tp.isAddClearTipsExTrait_changeAnimationName(t) && this._isPlayRainbow) {
e = t.args[1];
r = "colour_elimination" + e;
t.returnValue = r;
}
if (h.tp.isAddClearTipsExTrait_showPreEliminateEffect(t) && this._isPlayRainbow) {
o = t.args[0];
i = t.args[1];
this._showPreEliminateEffect(o, i);
t.replace = !0;
}
if (h.tp.isClassEliminate_Sound_ProxyPlayEliminateSound(t)) {
d = t.args[0];
this.playAudio(d.state);
}
if (h.tp.isAddClearTipsExTrait_checkEliminateCount(t)) {
a = c(t.args, 3), n = a[0], l = a[1], _ = a[2];
this._continuousEliminateTimes = _;
y = n + l;
p = TRAIT("ComboAddRemoveNumTrait");
u = this._continuousEliminateTimes;
(null == p ? void 0 : p.active) && (u += n + l);
this.checkPlayRainbow(y, u);
}
h.tp.isAddClearTipsExTrait_recycleAllPreEliminate(t) && this.recycleAllPreEliminate();
if (h.tp.isEliminate_Effects_ProxyPlayEliminateEffects(t)) {
d = t.args[0];
y = d.state.eliminateCount;
m.gameInfo.gameMode === f.GameMode.Class ? this._isPlayRainbow = y >= 3 || this._continuousEliminateTimes - 1 >= 5 : this._isPlayRainbow = y >= 3;
}
if (h.tp.isBlocksProducerTouchTouchFollowUpEliminateTimes(t)) {
g = t.args[0];
_ = g.continuousEliminateTimes;
this._continuousEliminateTimes = _;
}
return [ 2 ];
});
});
};
e.prototype.checkPlayRainbow = function(t, e) {
m.gameInfo.gameMode === f.GameMode.Class ? this._isPlayRainbow = t >= 3 || e - 1 >= 5 : this._isPlayRainbow = t >= 3;
};
e.prototype.recycleAllPreEliminate = function() {
var t, e, r, o;
this._showUnderEliRainbowCnt = 0;
this._showOverEliRainbowCnt = 0;
try {
for (var i = l(this._allUnderEliRainbowArray), a = i.next(); !a.done; a = i.next()) {
var n = a.value;
cc.isValid(n) && (n.opacity = 0);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
try {
for (var s = l(this._allOverEliRainbowArray), c = s.next(); !c.done; c = s.next()) {
n = c.value;
cc.isValid(n) && (n.opacity = 0);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
c && !c.done && (o = s.return) && o.call(s);
} finally {
if (r) throw r.error;
}
}
};
e.prototype._loadPreEliArray = function() {
var t = this;
u.ResLoader.loadByBundle(g.TraitsPrefabConfig.preEliComboRainbow.bundleName, g.TraitsPrefabConfig.preEliComboRainbow.url, cc.Prefab, function(e, r) {
if (e) ; else {
t._allUnderEliRainbowArray.length = 0;
t._allOverEliRainbowArray.length = 0;
for (var o = cc.director.getScheduler(), i = function() {
cc.isValid(t._blockUnderNode) && o.schedule(function() {
var e = cc.instantiate(r);
t._allUnderEliRainbowArray.push(e);
e.opacity = 0;
}, t._blockUnderNode, 0, t._maxPreEliCount, 0, !1);
cc.isValid(t._blockOverNode) && o.schedule(function() {
var e = cc.instantiate(r);
t._allOverEliRainbowArray.push(e);
e.opacity = 0;
}, t._blockOverNode, 0, t._maxPreEliCount, 0, !1);
}, a = 0; a < t._maxPreEliCount; a++) i();
}
});
};
e.prototype._showPreEliminateEffect = function(t, e) {
if (cc.isValid(this._blockOverNode) && cc.isValid(this._blockUnderNode)) {
if (this._isPlayRainbow && this._showUnderEliRainbowCnt < this._allUnderEliRainbowArray.length) {
var r = this._allUnderEliRainbowArray[this._showUnderEliRainbowCnt];
this._showUnderEliRainbowCnt++;
var o = {
newNode: r,
pos: t,
angle: e,
aniName: "in_colour_2"
};
cc.isValid(r.parent) || this._blockUnderNode.addChild(r);
this.addPreEliminateEffect("PreEliComboRainbow", o);
}
if (this._isPlayRainbow && this._showOverEliRainbowCnt < this._allOverEliRainbowArray.length) {
r = this._allOverEliRainbowArray[this._showOverEliRainbowCnt];
this._showOverEliRainbowCnt++;
o = {
newNode: r,
pos: t,
angle: e,
aniName: "in_colour_1"
};
cc.isValid(r.parent) || this._blockOverNode.addChild(r);
this.addPreEliminateEffect("PreEliComboRainbow", o);
}
}
};
e.prototype.addPreEliminateEffect = function(t, e) {
var r = e.newNode;
if (cc.isValid(r)) {
var o = e.pos, i = e.angle, a = e.aniName;
r.x = o.x;
r.y = o.y;
r.angle = i;
r.opacity = 255;
var n = r.getComponent(t);
n && n.setState({
aniName: a,
playTimes: 0
});
}
};
e.prototype.playAudio = function(t) {
if (t.canEliminate) {
var e = t.eliminateCols, r = t.eliminateRows, o = Object.keys(e).length, i = Object.keys(r).length, a = y.MainTraitAudioConfig.streak_rock1;
o > 0 && i > 0 && (a = y.MainTraitAudioConfig.streak_rock2);
o + i >= 3 && (a = y.MainTraitAudioConfig.streak_rock3);
p.audioInfo.play(a);
}
};
return a([ classId("ComboRainbowTrait") ], e);
}(d.Trait);
r.ComboRainbowTrait = _;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../audioConfig/MainTraitAudioConfig ": "MainTraitAudioConfig ",
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig"
} ],
ComboTimeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6507dYFP29FcJQ56FzMVFFI", "ComboTimeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ComboTimeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._producerBlocksCount = 0;
return e;
}
e.prototype.onActive = function(t) {
s.tp.isBlocksProducerTouchComputeContinuousEliminateTimes(t) && (t.args[0] = t.args[0] + this._producerBlocksCount);
s.tp.isClassGame_Ready_ProxyResetBlocksProducerTouch(t) && (this._producerBlocksCount = 0);
if (s.tp.isBlocksProducer_ProxyOnTouchEnd(t)) {
var e = t.args[0].state;
if (e.eliminateCount > 0) {
for (var r = 0, o = 0; o < e.producerBlocks.length; o++) -1 !== e.producerBlocks[o] && r++;
this._producerBlocksCount = r;
}
}
};
return a([ classId("ComboTimeTrait") ], e);
}(n.Trait);
r.ComboTimeTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ComboflyScoreTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "867222+nR1FTZjqaRrUY6oq", "ComboflyScoreTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ComboflyScoreTrait = void 0;
var n = t("../../../../../../../scripts/base/layer/GameLayer"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/falcon/EventManager"), l = t("../../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_PlayAnimation"), p = t("../../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_ScoreAnim"), u = t("../../../../../../../scripts/modules/comboScoreTip/vo/ComboScoreTipInfo"), d = t("../../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../../scripts/modules/game/vo/GameInfo"), m = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curNodePosition = null;
return e;
}
e.prototype.onActive = function(t) {
var e = this;
if (f.gameInfo.gameMode === d.GameMode.Class) {
if (m.tp.isComboScoreTipPlayNodeAnimation(t)) {
var r = TRAIT("OpenComboModelTrait");
(null == r ? void 0 : r.active) && r.setState({
isHitScoreNode: !0
});
}
if (m.tp.isClassTopInfoUpdateScore(t)) {
var o = t.target;
o && !this.curNodePosition && o.scheduleOnce(function() {
var t = o.curNode.parent.convertToWorldSpaceAR(o.curNode.getPosition());
e.curNodePosition = n.gameUiLayer.convertToNodeSpaceAR(t);
}, .3);
}
if (m.tp.isComboScoreTipAnimalEndScoreNode(t)) {
t.args[0] = !0;
var i = t.target, a = i.state.eliminateCount, s = i.node;
if (this.curNodePosition) {
n.gameUiLayer.convertToNodeSpaceAR(this.curNodePosition);
var h = cc.tween(s).to(.3, {
position: new cc.Vec3(this.curNodePosition.x, this.curNodePosition.y, 0)
}).to(.2, {
scale: 0
}, {
easing: cc.easing.sineOut
});
a <= 1 && h.delay(.3);
h.call(function() {
i.setState({
type: "reset"
});
s.opacity = 0;
u.comboScoreTipInfo.putComboScoreTip(i);
c.EventManager.dispatchModuleEvent(new p.E_ComboScoreTip_ScoreAnim({
score: storage.getItem("classScore", 0),
highScore: storage.getItem("classHighScore", 0)
}));
}).start();
c.EventManager.dispatchModuleEvent(new l.E_ComboScoreTip_PlayAnimation());
}
t.replace = !0;
}
}
};
return a([ classId("ComboflyScoreTrait") ], e);
}(s.Trait);
r.ComboflyScoreTrait = h;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_PlayAnimation": void 0,
"../../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_ScoreAnim": void 0,
"../../../../../../../scripts/modules/comboScoreTip/vo/ComboScoreTipInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ContinueSameMoreRoundLimitTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0af1eB232pIhqH/GCqGXFZ9", "ContinueSameMoreRoundLimitTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.ContinueSameMoreRoundLimitTrait = void 0;
var s = t("../../../../../../../../scripts/base/enum/enum"), c = t("../../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmDataStatistics"), u = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), d = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), f = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmProcessInfo"), m = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKArgsInfo"), h = t("../../../../../../../../scripts/modules/game/type/GameType"), y = t("../../../../../../../../scripts/modules/game/vo/GameInfo"), g = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.newBlockIds = [];
e.replacePosIndex = 0;
return e;
}
e.prototype.data = function() {
return {
round: 2,
isDealID70: !1
};
};
e.prototype.onActive = function(t) {
var e = this;
if (!(u.algorithmInfo.blockIdList.length < 3)) {
if (g.tp.isAlgorithmSDKArgsInfoOnBlockInfo(t) && d.algorithmName.algoActualId == l.OFFER_TYPE.REPLACE_ROUNDLIMIT) {
m.algorithmSDKArgsInfo.setBlockIds(this.newBlockIds);
m.algorithmSDKArgsInfo.setBlockNames(d.algorithmName.algoActualName);
if (3 == u.algorithmInfo.blockPosList.length && -1 != this.replacePosIndex) {
var r = u.algorithmInfo.blockPosList.filter(function(t, r) {
return r !== e.replacePosIndex;
});
m.algorithmSDKArgsInfo.setBlockPoses(r);
}
}
if (g.tp.isAlgorithm_ProxyOnReplaceCheck(t)) {
if (y.gameInfo.gameMode !== h.GameMode.Class) return;
if (s.isValueInEnum(d.algorithmName.algoActualId, l.OFFER_TYPE_DIFFICULTY) || d.algorithmName.algoActualId == l.OFFER_TYPE.ZIMU_SHANGZENG || d.algorithmName.algoActualId == l.OFFER_TYPE.CLEAR_BOARD || d.algorithmName.algoActualId == l.OFFER_TYPE.REVIVE_CLEAR) return;
if ([ l.OFFER_TYPE.ALGO_FILL_MORE_AREA ].includes(d.algorithmName.algoActualId)) return;
var o = TRAIT("IsOpenMoreCleanTrait");
if ((null == o ? void 0 : o.active) && o.isUsedAndSuccess()) return;
if ((a = this.comparePreOut()).length < 2) return;
var i = null;
this.replacePosIndex = -1;
2 == a.length && (i = a[0]);
this.replacePosIndex = u.algorithmInfo.blockIdList.indexOf(i);
this.newBlockIds = u.algorithmInfo.blockIdList;
this.newBlockIds.splice(this.newBlockIds.indexOf(i), 1);
t.args[0] = l.OFFER_TYPE.REPLACE_ROUNDLIMIT;
t.args[1] = l.OFFER_TYPE.SUI_JI_WU_SI;
}
if (g.tp.isAlgorithm_ProxyAlgoFollowUp(t)) {
if (y.gameInfo.gameMode !== h.GameMode.Class) return;
this.state.isDealID70 = !1;
if (d.algorithmName.algoActualId == l.OFFER_TYPE.TIAN_KONG_XIAO_CHU || d.algorithmName.algoActualId == l.OFFER_TYPE.SHANG_ZENG_3 || d.algorithmName.algoActualId == l.OFFER_TYPE.EMPTYDONGFILL || d.algorithmName.algoActualId == l.OFFER_TYPE.ALL_COMBINATION_ID70) {
var a;
if ((a = this.comparePreOut()).length >= 2) {
var n = p.algorithmDataStatistics.algorithmDataStatistics;
n.length >= 1 && n[n.length - 1].blocksList, n.length >= 2 && n[n.length - 2].blocksList;
2 == this.state.round || this.state.round;
var c = t.args[0] || [], _ = t.args[1] || [], v = m.algorithmSDKArgsInfo.getArgs();
if (d.algorithmName.algoActualId == l.OFFER_TYPE.ALL_COMBINATION_ID70) {
c.push(l.OFFER_TYPE.SUI_JI_WU_SI);
f.algorithmProcessInfo.handleArgs(v, l.OFFER_TYPE.SUI_JI_WU_SI);
_.push(v);
this.state.isDealID70 = !0;
} else {
c.push(d.algorithmName.algoActualId);
m.algorithmSDKArgsInfo.setOverTime(100);
m.algorithmSDKArgsInfo.setFilterBlocks(a);
f.algorithmProcessInfo.handleArgs(v, d.algorithmName.algoActualId);
_.push(v);
}
t.args[0] = c;
t.args[1] = _;
}
}
}
}
};
e.prototype.comparePreOut = function() {
var t = p.algorithmDataStatistics.algorithmDataStatistics, e = u.algorithmInfo.blockIdList, r = t.length >= 1 ? t[t.length - 1].blocksList : [], o = t.length >= 2 ? t[t.length - 2].blocksList : [];
switch (this.state.round) {
case 2:
if (0 == r.length) return [];
break;

case 3:
if (0 == r.length || 0 == o.length) return [];
}
var i = function(t, e) {
var r, o, i, a, s = {}, c = [];
try {
for (var l = n(t), p = l.next(); !p.done; p = l.next()) s[f = p.value] = (s[f] || 0) + 1;
} catch (t) {
r = {
error: t
};
} finally {
try {
p && !p.done && (o = l.return) && o.call(l);
} finally {
if (r) throw r.error;
}
}
try {
for (var u = n(e), d = u.next(); !d.done; d = u.next()) {
var f;
if (s[f = d.value] > 0) {
c.push(f);
s[f]--;
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
d && !d.done && (a = u.return) && a.call(u);
} finally {
if (i) throw i.error;
}
}
return c;
}, a = i(e, r);
if (a.length >= 2) return a.slice(0, 2);
if (3 == this.state.round) {
var s = i(e, o);
if (s.length >= 2) return s.slice(0, 2);
}
return [];
};
return a([ classId("ContinueSameMoreRoundLimitTrait") ], e);
}(c.Trait);
r.ContinueSameMoreRoundLimitTrait = _;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmDataStatistics": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmProcessInfo": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKArgsInfo": void 0,
"../../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CrossClearHardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b3209VJfjNMYJoNTbZ3PUiy", "CrossClearHardTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CrossClearHardTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/enum/enum"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), d = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmBetaRandomInfo"), f = t("../../../../../../../scripts/modules/game/vo/GameInfo"), m = t("../../../../../../../scripts/modules/game/type/GameType"), h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.ensureFirstTime = function(t) {
if (!t.firstTime || t.firstTime <= 0) {
t.firstTime = d.algorithmBetaRandomInfo.samplePuzzleFirstTimeSeconds(128, .8, 2.4);
s.storage.setItem("CrossClearHard", t);
}
};
e.prototype.ensureInitTime = function(t) {
if (!t.initTime || t.initTime <= 0) {
t.initTime = Date.now();
s.storage.setItem("CrossClearHard", t);
}
};
e.prototype.isHardOfferNow = function() {
try {
var t = u.algorithmName.algoExpectedId, e = (u.algorithmName.algoActualName || [])[0] || "";
if (e.includes("复活")) return !1;
if (c.isValueInEnum(t, p.OFFER_TYPE_DIFFICULTY)) return !0;
if ("string" == typeof e && e.includes("难题")) return !0;
} catch (t) {}
return !1;
};
e.prototype.isHardActualNow = function() {
try {
var t = (u.algorithmName.algoActualName || [])[0] || "";
return !t.includes("复活") && (!t.includes("消两次") && ("string" == typeof t && t.includes("难题")));
} catch (t) {
return !1;
}
};
e.prototype.computeReplaceProb = function(t) {
var e = 1 - Math.exp(-.11 * (t + 3));
return Math.max(0, Math.min(1, e));
};
Object.defineProperty(e.prototype, "algo_id", {
get: function() {
return this.props.algo_id ? this.props.algo_id : p.OFFER_TYPE.CROSS_CLEAR_HARD;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
if (f.gameInfo.gameMode === m.GameMode.Class) {
if (l.tp.isClassAlgorithmProcessInfoBottomOffer(t) || l.tp.isChapterAlgorithmProcessInfoBottomOffer(t)) {
var e = s.storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
if (!this.isHardOfferNow()) return;
var r = this.computeReplaceProb(e.hardCount);
if (Math.random() >= r) return;
var o = t.args[0] || [], i = this.algo_id;
if (!o.includes(i)) {
o.push(i);
t.args[0] = o;
}
}
if (l.tp.isAlgorithmProcessInfoAlgorithmSuccess(t)) {
e = s.storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
if (this.isHardActualNow()) {
e.hardCount = (e.hardCount || 0) + 1;
e.pendingMinus = !0;
s.storage.setItem("CrossClearHard", e);
}
}
if (l.tp.isClassRevive_ProxyOnRevive_Success(t) && (e = s.storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
})).pendingMinus && e.hardCount > 0) {
e.hardCount = e.hardCount - 1;
e.pendingMinus = !1;
s.storage.setItem("CrossClearHard", e);
}
if (l.tp.isClassGame_ProxyOnGameStart(t)) {
var a = t.args ? t.args[0] : null, n = !(!a || !a.data || !a.data.newGame);
e = s.storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
if (n) {
e.hardCount = 0;
e.pendingMinus = !1;
e.initTime = Date.now();
e.firstTime = 0;
this.ensureFirstTime(e);
s.storage.setItem("CrossClearHard", e);
} else this.ensureInitTime(e);
}
if (l.tp.isClassAlgorithmStrategy_Reset_ProxyPreprocessing_PuzzleTime(t)) {
var c = TRAIT("IsPuzzleTimeTrait");
if (c) {
e = s.storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
this.ensureFirstTime(e);
c.setState({
puzzleTimeFirst: Math.round(e.firstTime)
});
}
}
}
};
return a([ classId("CrossClearHardTrait") ], e);
}(n.Trait);
r.CrossClearHardTrait = h;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmBetaRandomInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
CtrlAlgoLimitTimeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "84f1dfwzgZABIXSxBWBPo3o", "CtrlAlgoLimitTimeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CtrlAlgoLimitTimeTrait = void 0;
var s = t("../../../../../../../../scripts/base/trait/Trait"), c = (t("../../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), 
t("../../../../../../../../scripts/modules/algorithm/interface/AlgorithmInterface")), l = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.algoTypeObj = null;
e.algoLimitIdObj = null;
return e;
}
e.prototype.onCreate = function() {
var t = this.props.para, e = {};
if (t && t.length > 0) {
for (var r = 0, o = (u = t.split("|")).length; r < o; r++) {
var i = n(u[r].split(":"), 2), a = i[0], s = i[1], c = parseInt(a, 10), l = parseInt(s, 10);
isNaN(c) || isNaN(l) || (e[c] = l);
}
this.algoTypeObj = e;
}
var p = this.props.algoLimitId;
if (p && p.length > 0) {
var u;
for (r = 0, o = (u = p.split("|")).length; r < o; r++) {
var d = n(u[r].split(":"), 2);
a = d[0], s = d[1], c = parseInt(a, 10), l = parseInt(s, 10);
isNaN(c) || isNaN(l) || (e[c] = l);
}
this.algoLimitIdObj = e;
}
};
e.prototype.onActive = function(t) {
if (p.tp.isAlgorithmProcessInfoHandleArgs(t)) {
var e = t.args[0], r = t.args[1];
if (this.algoLimitIdObj) {
var o = this.algoLimitIdObj[r];
e.overTime = o || 100;
}
if (this.algoTypeObj) {
var i = l.algorithmInfo.getOfferTypeCategory(r), a = c.algorithmMainTypeEnum[i] || 999, n = this.algoTypeObj[a] || this.algoTypeObj[999];
n && (e.overTime = n);
}
}
};
return a([ classId("CtrlAlgoLimitTimeTrait") ], e);
}(s.Trait);
r.CtrlAlgoLimitTimeTrait = u;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../../../scripts/modules/algorithm/interface/AlgorithmInterface": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
DailyWinStreakStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "db1afoPchtHBaVHZqZfyPsf", "DailyWinStreakStateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DailyWinStreakStateTrait = void 0;
var n = t("../../../../../../../scripts/base/adapter/AdapterFringe"), s = t("../../../../../../../scripts/base/date/Date"), c = t("../../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../../scripts/modules/dailyWinStreakState/components/DailyWinStreakState"), d = t("../../../../../../../scripts/modules/dailyWinStreakState/vo/DailyWinStreakStateInfo"), f = t("../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../scripts/modules/game/vo/GameInfo"), h = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dailyWinStreakState = null;
return e;
}
Object.defineProperty(e.prototype, "win_streak", {
get: function() {
return d.dailyWinStreakStateInfo.dailyWinStreakStateInfoData.winCount;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
if (y.tp.isModeChoiceAddOtherNode(t)) {
d.dailyWinStreakStateInfo.clearWinCount();
l.storage.getItem("chapterNum", 0) >= 96 && d.dailyWinStreakStateInfo.setWinCount();
this.showDailyWinStreakState(t);
}
if (y.tp.isChapterGameOver_GameEnd_ProxyOnGameOver(t)) {
var e = t.args[1];
m.gameInfo.gameMode === f.GameMode.Chapter && (1 == this.props.upgrade || e) && d.dailyWinStreakStateInfo.setWinCount();
}
y.tp.isDailyWinStreakState_ProxyOnGameOver(t) && 1 == this.props.upgrade && m.gameInfo.gameMode === f.GameMode.Class && d.dailyWinStreakStateInfo.setWinCount();
if (y.tp.isDailyWinStreakState_ProxyOnGameReplay(t)) {
if (m.gameInfo.gameMode === f.GameMode.Jewel) return;
1 == this.props.upgrade && d.dailyWinStreakStateInfo.setWinCount();
}
};
e.prototype.showDailyWinStreakState = function(t) {
var e = this, r = t.target.node, o = d.dailyWinStreakStateInfo.dailyWinStreakStateInfoData, i = 0;
if (o.winCount > o.winCountOld) {
i = 3;
d.dailyWinStreakStateInfo.setWinCountOld();
} else {
var a = s.getDiffDays(Date.now(), o.winCountTime);
i = 0 == a && o.winCount == o.winCountOld ? 2 : 1;
}
this.dailyWinStreakState ? this.dailyWinStreakState.setState({
winState: i,
winCount: o.winCount,
oldWinCount: o.winCountOld
}) : c.ResLoader.load(h.PrefabConfig.DailyWinStreakState.url, cc.Prefab, function(t, a) {
if (!t && cc.isValid(r)) {
var s = cc.instantiate(a);
r.addChild(s);
e.dailyWinStreakState = s.getComponent(u.default);
if (e.dailyWinStreakState) {
e.dailyWinStreakState.setState({
winState: i,
winCount: o.winCount,
oldWinCount: o.winCountOld
});
n.applyAdapterFringe(s);
}
}
});
};
return a([ classId("DailyWinStreakStateTrait") ], e);
}(p.Trait);
r.DailyWinStreakStateTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/adapter/AdapterFringe": void 0,
"../../../../../../../scripts/base/date/Date": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/dailyWinStreakState/components/DailyWinStreakState": void 0,
"../../../../../../../scripts/modules/dailyWinStreakState/vo/DailyWinStreakStateInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
DragRateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "83182il+x1AZ4yPGIAHpeki", "DragRateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DragRateTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e;
s.tp.isBlocksProducer_ProxyOnTriggerBlocksTouch(t) && (t.args[0] = null !== (e = this.props.rate) && void 0 !== e ? e : 1.5);
};
return a([ classId("DragRateTrait") ], e);
}(n.Trait);
r.DragRateTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
EffectAccTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "324f1shzj9Lm4xxyDeIjhaR", "EffectAccTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.EffectAccTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/kSpeed/type/KSpeedType"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
acc: 0
};
};
e.prototype.onActive = function(t) {
var e;
if (c.tp.isKSpeed_ProxySetKSpeed(t)) {
if (!(null == t ? void 0 : t.args[1])) return;
t.args[1] == s.EffectAccTraitEventName.OpenGame_UI && 1 == this.props.state && (0 == this.state.acc ? t.args[0] = null !== (e = this.props.acc) && void 0 !== e ? e : 1 : t.args[0] = this.state.acc);
}
};
return a([ classId("EffectAccTrait") ], e);
}(n.Trait);
r.EffectAccTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/kSpeed/type/KSpeedType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
EffectAllClearPlusTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "17a1coWWSRAGLGM4QpxK7VK", "EffectAllClearPlusTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.EffectAllClearPlusTrait = void 0;
var c = t("../../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch"), d = t("../../../../../../../scripts/modules/boardClear/components/BoardClearAnimationDisplay"), f = t("../../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType"), m = t("../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), h = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.effectPrefab = null;
e.effectNode = null;
e.chapterClearScore = 150;
e.classClearScore = 300;
e.onCompleteCallback = null;
return e;
}
e.prototype.onActive = function(t) {
if (y.tp.isClassBoardSplashAnimation_ProxySetBoardSplashAnimationState(t)) {
this.onCompleteCallback = t.args[3];
this.playEffect(this.classClearScore);
t.replace = !0;
}
if (y.tp.isChapterScore_ProxyOnTouchEnd(t) && t.args[0].state.clearScreen) {
var e = l.storage.getItem("chapterCondition");
if ((null == e ? void 0 : e.Way) === m.ChapterType.score) {
var r = l.storage.getItem("chapterScore", 0) + this.chapterClearScore;
l.storage.setItem("chapterScore", r);
this.playEffect(this.chapterClearScore);
} else this.playEffect();
}
y.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(t) && (t.replace = !0);
y.tp.isClassEncourage_ProxyPlayEncourageUnbelievableAudio(t) && (t.replace = !0);
y.tp.isClassScoreTip_ProxyPlayClearScreenScoreAnim(t) && (t.replace = !0);
};
e.prototype.playEffect = function(t) {
void 0 === t && (t = 0);
return n(this, void 0, void 0, function() {
var e, r, o = this;
return s(this, function(i) {
switch (i.label) {
case 0:
e = this.createSafeMaskCallback();
return [ 4, this.getEffectNode() ];

case 1:
r = i.sent();
cc.tween(r).delay(.7).call(function() {
r.getComponent(d.default).setState({
animName: d.BoardClearAnim.Qingchang,
score: t,
callback: function() {
var t;
e();
null === (t = o.onCompleteCallback) || void 0 === t || t.call(o, f.BoardSplashAnimationPlayType.DOWN);
o.onCompleteCallback = null;
}
});
}).start();
return [ 2 ];
}
});
});
};
e.prototype.createSafeMaskCallback = function(t) {
void 0 === t && (t = 5e3);
var e = Cinst(u.default);
e && e.setMaskActive(!0);
var r = !1, o = setTimeoutSafe(function() {
if (!r) {
r = !0;
e && e.setMaskActive(!1);
}
}, t);
return function() {
if (!r) {
r = !0;
clearTimeout(o);
e && e.setMaskActive(!1);
}
};
};
e.prototype.getEffectNode = function() {
return n(this, void 0, Promise, function() {
var t;
return s(this, function(e) {
switch (e.label) {
case 0:
if (this.effectPrefab) return [ 3, 2 ];
t = this;
return [ 4, this.loadPrefabRes() ];

case 1:
t.effectPrefab = e.sent();
e.label = 2;

case 2:
if (!this.effectNode) {
this.effectNode = cc.instantiate(this.effectPrefab);
this.effectNode.setParent(h.gameEffectLayer);
}
return [ 2, this.effectNode ];
}
});
});
};
e.prototype.loadPrefabRes = function() {
return n(this, void 0, void 0, function() {
return s(this, function() {
return [ 2, c.ResLoader.asyncLoadByBundle("Remote_effectAllClearPlus", "prefabs/showprefabs_bgAllClearPlus", cc.Prefab) ];
});
});
};
return a([ classId("EffectAllClearPlusTrait") ], e);
}(p.Trait);
r.EffectAllClearPlusTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/blocksProducer/components/BlocksProducerTouch": void 0,
"../../../../../../../scripts/modules/boardClear/components/BoardClearAnimationDisplay": void 0,
"../../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType": void 0,
"../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
EightHoursTravelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "09df6lSdzJELJoVZ62TnqcN", "EightHoursTravelTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.EightHoursTravelTrait = void 0;
var s = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
eightHours: Math.ceil(new Date().getTime() / 1e3),
reduceBuffer: !1,
isEnterGame: !1
};
};
e.prototype.onActive = function(t) {
if (u.tp.isModeChoice_ProxyShowModeChoice(t)) {
var e = Math.ceil(new Date().getTime() / 1e3);
this.state.eightHours = c.storage.getItem("chapterEightHours", e);
0 == this.state.reduceBuffer && (this.state.reduceBuffer = e - this.state.eightHours >= 9600);
this.state.eightHours = e;
c.storage.setItem("chapterEightHours", e);
}
if (u.tp.isCollectionProducer_ProxyOnOpenClassView(t)) {
this.setRecordTime();
this.state.reduceBuffer = !1;
}
if (u.tp.isCollectionProducer_ProxyOnOpenChapterView(t)) {
this.setRecordTime();
var r = c.storage.getItem("chapterNum", 0), o = c.storage.getItem("chapterPeriodsIndex", 1);
0 == r && 1 == o ? this.state.reduceBuffer = !1 : this.reductionTarget();
}
};
e.prototype.reductionTarget = function() {
var t, e;
if (this.state.reduceBuffer) {
var r = c.storage.getItem("chapterNum", 0), o = c.storage.getItem("chapterScore", 0), i = c.storage.getItem("chapterCollectRemainCollectItems", {});
if (0 == p.chapterConfigInfo.chapterDatasCfg[r].Condition.Way) {
var a = o, s = p.chapterConfigInfo.chapterDatasCfg[r].Condition.RequiredScore, l = a + Math.ceil(.4 * (s - a));
c.storage.setItem("chapterCollectTotalScore", l);
c.storage.setItem("chapterHighScore", l);
} else {
var u = p.chapterConfigInfo.chapterDatasCfg[r].Condition.RequiredCollections, d = i;
try {
for (var f = n(u), m = f.next(); !m.done; m = f.next()) {
var h = m.value, y = d[h.Key], g = Math.ceil(.4 * y);
d[h.Key] = g;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
m && !m.done && (e = f.return) && e.call(f);
} finally {
if (t) throw t.error;
}
}
c.storage.setItem("chapterCollectRemainCollectItems", d);
}
this.state.reduceBuffer = !1;
}
};
e.prototype.setRecordTime = function() {
var t = Math.ceil(new Date().getTime() / 1e3);
c.storage.setItem("chapterEightHours", t);
this.state.eightHours = t;
if (!this.state.isEnterGame) {
this.state.isEnterGame = !0;
var e = 0;
this.setInterval(function() {
this.state.eightHours++;
if (++e >= 300) {
c.storage.setItem("chapterEightHours", this.state.eightHours);
e = 0;
}
}, this, 1);
}
};
e.prototype.setInterval = function(t, e, r) {
var o = cc.director.getScheduler(), i = e || cc.director.getScene();
o.enableForTarget(i);
o.schedule(t, i, r, cc.macro.REPEAT_FOREVER, 0, !1);
};
a([ s.trait("IsWarmhandsTrait", "暖手局") ], e.prototype, "reductionTarget", null);
return a([ classId("EightHoursTravelTrait") ], e);
}(l.Trait);
r.EightHoursTravelTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
EmptyDongFillTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e1073QQIrZD66qWLrYIxApG", "EmptyDongFillTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.EmptyDongFillTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../scripts/modules/binary/vo/BinarySupport"), d = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), f = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (f.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t)) {
if (u.binarySupport.getWeightValue(d.boardInfo.faceBlocks) > 280) {
var e = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.TIAN_KONG_XIAO_CHU, s.OFFER_TYPE.EMPTYDONGFILL);
l.algorithmStrategyInfo.setAlgorithmList(e);
var r = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.TIAN_KONG_XIAO_CHU, s.OFFER_TYPE.EMPTYDONGFILL);
l.algorithmStrategyInfo.setAlgorithmFailList(r);
var o = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmPriorityList, s.OFFER_TYPE.TIAN_KONG_XIAO_CHU, s.OFFER_TYPE.EMPTYDONGFILL);
l.algorithmStrategyInfo.setAlgorithmPriorityList(o);
}
}
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("EmptyDongFillTrait") ], e);
}(n.Trait);
r.EmptyDongFillTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
EncourageReplaceGood: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e5c44vlcMlH96HhqZl9pV8T", "EncourageReplaceGood");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../../scripts/base/components/Component"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.armatureDisplay = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function() {
t.armatureDisplay.node.active = !1;
}, this);
};
e.prototype.render = function() {
this.armatureDisplay.node.active = !0;
this.armatureDisplay.node.scale = 1.7;
this.playLevelColorAnimation(this.state.eliminateCount);
};
e.prototype.playLevelColorAnimation = function(t) {
var e = Math.min(5, Math.max(0, t - 2));
e > 3 && (e = 3);
this.armatureDisplay.playAnimation([ "good_in", "great_in", "excellent_in", "amazing_in" ][e], 1);
};
a([ l(dragonBones.ArmatureDisplay) ], e.prototype, "armatureDisplay", void 0);
return a([ c ], e);
}(n.default);
r.default = p;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/components/Component": void 0
} ],
EntropyAddWithClearTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "40024Lo4t1FUIWYN6ogjgx0", "EntropyAddWithClearTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.EntropyAddWithClearTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), l = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (p.tp.isClassAlgorithmProcessInfoBottomOffer(t)) {
var e = t.args[0] || [], r = c.algorithmName.algoActualChangeName;
if (r.length > 0 && r[0].includes("熵增")) {
if (r[0].includes("子母")) return;
if (Math.random() > .7) return;
e.push(s.OFFER_TYPE.CLEAR_SHANGZENG);
t.args[0] = e;
}
}
};
a([ l.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("EntropyAddWithClearTrait") ], e);
}(n.Trait);
r.EntropyAddWithClearTrait = u;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ExtremeHardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "74f37gssclDEKbqfrruNFd0", "ExtremeHardTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ExtremeHardTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithmAfter(t) && p.algorithmStrategyInfo.algorithmSourceLevel1 == u.ClassAlgorithmSourceType.Puzzle100) {
p.algorithmStrategyInfo.setAlgorithmList([ l.OFFER_TYPE.EXTREME_HARD ]);
p.algorithmStrategyInfo.setAlgorithmFailList([ l.OFFER_TYPE.SHANG_ZENG_4 ]);
}
};
a([ s.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("ExtremeHardTrait") ], e);
}(n.Trait);
r.ExtremeHardTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FailedHollowOutEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "11256GcC3xB74wTqleNZwf4", "FailedHollowOutEffectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FailedHollowOutEffectTrait = void 0;
var n = t("../../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/block/components/Block"), l = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), p = t("../../../../../../../scripts/modules/board/vo/BoardRendererInfo"), u = t("../../../../../../../scripts/modules/boardSplashAnimation/components/BoardSplashAnimation"), d = t("../../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType"), f = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sframe = null;
e.sframe_record = new Map();
return e;
}
e.prototype.onCreate = function() {
this.preloadAsset();
};
e.prototype.onActive = function(t) {
if (f.tp.isBoardSplashAnimationDoAnimation(t) && this.playBloardSplashAnimation()) {
t.replace = !0;
t.returnState = !0;
}
f.tp.isBoardSplashAnimation_ProxyOnBoardSplashAnimationEnd(t) && this.restoreSpriteFrame();
};
e.prototype.preloadAsset = function() {
var t = this;
n.ResLoader.loadByBundle("Remote_FailedHollowOutEffect", "textures/block_padding", cc.SpriteFrame, function(e, r) {
cc.isValid(r) && r instanceof cc.SpriteFrame && (t.sframe = r);
});
};
e.prototype.playBloardSplashAnimation = function() {
var t, e = Cinst(u.default);
if (!cc.isValid(this.sframe) || !cc.isValid(e.node) || e.state.stage !== d.BoardSplashAnimationPlayStage.GAME_OVER_FAIL) return !1;
for (var r = l.boardInfo.faceBlocks, o = p.boardRendererInfo.splashBlocks, i = e.state.time || .07, a = [], n = 0, s = void 0; n < r.length; n++) {
s = (r.length - n) * i;
for (var f = 0, m = void 0; f < r[n].length; f++) if ([ -1, 10 ].includes(r[n][f])) {
m = null === (t = null == o ? void 0 : o[n]) || void 0 === t ? void 0 : t[f];
if (cc.isValid(m)) {
this.replaceSpriteFrame(m.getComponent(c.default).block);
m.scale = .5;
m.opacity = 0;
cc.Tween.stopAllByTarget(m);
a.push(cc.tween(m).delay(s).to(i, {
scale: 1,
opacity: 255
}));
}
}
}
a.forEach(function(t) {
return t.start();
});
return !0;
};
e.prototype.replaceSpriteFrame = function(t) {
if (cc.isValid(t) && cc.isValid(this.sframe)) {
this.sframe_record.set(t, t.spriteFrame);
t.spriteFrame = this.sframe;
} else this.sframe_record.delete(t);
};
e.prototype.restoreSpriteFrame = function() {
this.sframe_record.forEach(function(t, e) {
e.spriteFrame = t;
});
this.sframe_record.clear();
};
e.prototype.print = function(t) {
for (var e, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
r[0] = "328232001." + r[0];
null === (e = Reflect.get(console, t)) || void 0 === e || e.apply(console, r);
};
return a([ classId("FailedHollowOutEffectTrait") ], e);
}(s.Trait);
r.FailedHollowOutEffectTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/block/components/Block": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../../scripts/modules/boardSplashAnimation/components/BoardSplashAnimation": void 0,
"../../../../../../../scripts/modules/boardSplashAnimation/type/BoardSplashAnimationType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FastNearTkxcTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5a23fo5gvlMVJe6Vzxli3jJ", "FastNearTkxcTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FastNearTkxcTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), d = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), f = t("../../../../../../../scripts/modules/game/vo/GameInfo"), m = t("../../../../../../../scripts/modules/game/type/GameType"), h = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), y = t("../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tag = "sfaa";
e._groupTimes = 0;
e._roundNum = 0;
return e;
}
e.prototype.onActive = function(t) {
c.tp.isClassGame_ProxyOnClassGameShow(t) && (this._groupTimes = 0);
c.tp.isChapterGame_ProxyOnChapterGameShow(t) && (this._roundNum = 0);
if (c.tp.isAlgorithmProcessInfoHandleArgs(t)) {
var e = t.args[0];
p.algorithmStrategyInfo.algorithmList.includes(d.OFFER_TYPE.SUI_JI_PUT) && p.algorithmStrategyInfo.algorithmList.includes(d.OFFER_TYPE.ALGO_QUICK) && ((e.extra || {}).AlgoRandomPut = {
blockNum: 4,
isClear: !1,
isOne: !0,
isRandom: !0
});
}
if (c.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(t) || c.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(t)) if (f.gameInfo.gameMode == m.GameMode.Class) l.storage.getItem("classSolidColor", 0) > 0 ? this.__handle_class_color(t) : this.__handle_class(t); else if (f.gameInfo.gameMode == m.GameMode.Chapter) {
var r = l.storage.getItem("currentLevelDifficulty", 0), o = l.storage.getItem("chapterTryTimes", 1);
if (3 == r || 5 == r) {
if (0 == o || 1 == o) {
this.__chapter_tkxc_fast(t);
if (0 == o) {
this._roundNum++;
this._roundNum >= 4 && p.algorithmStrategyInfo.algorithmList.unshift(d.OFFER_TYPE.HIGH_NEAR);
}
}
} else 2 == r && 0 == o && this.__chapter_tkxc_fast(t);
}
if (c.tp.isClassAlgorithmProcessInfoBottomOffer(t)) {
var i = t.args[0] || [];
if (i && i.includes(d.OFFER_TYPE.ALL_COMBINATION_ID70) && this.__is_replace_group_tkxc()) {
var a = i.indexOf(d.OFFER_TYPE.ALL_COMBINATION_ID70);
if (-1 != a) {
i[a] = d.OFFER_TYPE.ALGO_QUICK;
i.splice(a + 1, 0, d.OFFER_TYPE.SUI_JI_PUT);
t.args[0] = i;
}
}
}
if (c.tp.isClassBlockOutStrategy_ProxyModifyBlockOutResult(t)) {
var n = y.OFFER_TYPE_STRINGS[d.OFFER_TYPE.HIGH_NEAR];
h.algorithmName.algoActualName.includes(n) && (this._groupTimes = 0);
}
if (c.tp.isChapterBlockOutStrategy_ProxyModifyBlockOutResult(t)) {
n = y.OFFER_TYPE_STRINGS[d.OFFER_TYPE.HIGH_NEAR];
h.algorithmName.algoActualName.includes(n) && (this._roundNum = 0);
}
};
e.prototype.__handle_class = function() {
if (this.__is_replace_group_tkxc()) {
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, d.OFFER_TYPE.ALL_COMBINATION_ID70, d.OFFER_TYPE.ALGO_QUICK));
this.__fast_tkxc_low();
}
};
e.prototype.__handle_class_color = function() {
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, d.OFFER_TYPE.TIAN_KONG_XIAO_CHU, d.OFFER_TYPE.ALGO_QUICK));
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, d.OFFER_TYPE.EMPTYDONGFILL, d.OFFER_TYPE.ALGO_QUICK));
this.__fast_tkxc_low();
p.algorithmStrategyInfo.algorithmList.includes(d.OFFER_TYPE.ALL_COMBINATION_ID70) && this._groupTimes++;
this._groupTimes >= 4 && -1 != p.algorithmStrategyInfo.algorithmList.indexOf(d.OFFER_TYPE.ALL_COMBINATION_ID70) && p.algorithmStrategyInfo.algorithmList.splice(0, 0, d.OFFER_TYPE.HIGH_NEAR);
};
e.prototype.__chapter_tkxc_fast = function() {
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, d.OFFER_TYPE.TIAN_KONG_XIAO_CHU, d.OFFER_TYPE.ALGO_QUICK));
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithmType(p.algorithmStrategyInfo.algorithmList, d.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, d.OFFER_TYPE.ALGO_QUICK));
this.__fast_tkxc_low();
};
e.prototype.__fast_tkxc_low = function() {
var t = p.algorithmStrategyInfo.algorithmList.indexOf(d.OFFER_TYPE.ALGO_QUICK);
-1 != t && p.algorithmStrategyInfo.algorithmList.splice(t + 1, 0, d.OFFER_TYPE.SUI_JI_PUT);
};
e.prototype.__is_replace_group_tkxc = function() {
return Math.random() <= .2;
};
a([ s.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("FastNearTkxcTrait") ], e);
}(n.Trait);
r.FastNearTkxcTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FastTkxcHelpTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "847a2ZMVNBCFLfVIITeu1q1", "FastTkxcHelpTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FastTkxcHelpTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/trait/Trait"), c = (t("../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), 
t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType")), l = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), d = t("../../../../../../../scripts/modules/binary/vo/BinarySupport"), f = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), m = t("../../../../../../../scripts/modules/game/type/GameType"), h = t("../../../../../../../scripts/modules/game/vo/GameInfo"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._weightAry = [ 300, 400 ];
return e;
}
e.prototype.onActive = function(t) {
if (y.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t) || y.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t)) {
var e = d.binarySupport.getWeightValue(f.boardInfo.faceBlocks);
if (h.gameInfo.gameMode == m.GameMode.Class) if (e <= this._weightAry[0]) {
var r = [ c.OFFER_TYPE.TIAN_KONG_XIAO_CHU ];
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmList, r, c.OFFER_TYPE.ALGO_QUICK));
p.algorithmStrategyInfo.setAlgorithmFailList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmFailList, r, c.OFFER_TYPE.ALGO_QUICK));
p.algorithmStrategyInfo.setAlgorithmSuccessList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmSuccessList, r, c.OFFER_TYPE.ALGO_QUICK));
} else e > this._weightAry[0] && e <= this._weightAry[1] && this.ClassWeightThreeHundredToFourHundred(e); else if (h.gameInfo.gameMode == m.GameMode.Chapter) if (e <= this._weightAry[0]) {
r = [ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, c.OFFER_TYPE.TIAN_KONG_XIAO_CHU ];
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmList, r, c.OFFER_TYPE.ALGO_QUICK));
p.algorithmStrategyInfo.setAlgorithmFailList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmFailList, r, c.OFFER_TYPE.ALGO_QUICK));
p.algorithmStrategyInfo.setAlgorithmSuccessList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmSuccessList, r, c.OFFER_TYPE.ALGO_QUICK));
} else if (e > this._weightAry[0] && e <= this._weightAry[1]) {
r = [ c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, c.OFFER_TYPE.TIAN_KONG_XIAO_CHU ];
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmList, r, c.OFFER_TYPE.ALGO_MIX_TKXC));
p.algorithmStrategyInfo.setAlgorithmFailList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmFailList, r, c.OFFER_TYPE.ALGO_MIX_TKXC));
p.algorithmStrategyInfo.setAlgorithmSuccessList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmSuccessList, r, c.OFFER_TYPE.ALGO_MIX_TKXC));
}
}
};
e.prototype.ClassWeightThreeHundredToFourHundred = function() {
var t = [ c.OFFER_TYPE.TIAN_KONG_XIAO_CHU ];
p.algorithmStrategyInfo.setAlgorithmList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmList, t, c.OFFER_TYPE.ALGO_MIX_TKXC));
p.algorithmStrategyInfo.setAlgorithmFailList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmFailList, t, c.OFFER_TYPE.ALGO_MIX_TKXC));
p.algorithmStrategyInfo.setAlgorithmSuccessList(u.algorithmStrategyLogic.replaceAlgorithms(p.algorithmStrategyInfo.algorithmSuccessList, t, c.OFFER_TYPE.ALGO_MIX_TKXC));
};
a([ l.Algorithm() ], e.prototype, "onActive", null);
a([ n.trait("BeforeThreeRoundRemoveHunHeTianKongTrait", "混合填空调参1（前3轮、去除盘面权重300-400填空消除替换成混合填空）") ], e.prototype, "ClassWeightThreeHundredToFourHundred", null);
return a([ classId("FastTkxcHelpTrait") ], e);
}(s.Trait);
r.FastTkxcHelpTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FeatclearscreenbombTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5e6748oJ81NcIA1qMrtU+ix", "FeatclearscreenbombTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FeatclearscreenbombTrait = void 0;
var c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../../scripts/base/storage/Storage"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), f = t("../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../scripts/modules/game/vo/GameInfo"), h = t("../../../../../../../scripts/base/timer/Timer"), y = t("../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), g = "__ClearScreenBombSaveData", _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.localData = null;
e._isAnimPlaying = !1;
e._animationWaitResolvers = [];
return e;
}
e.prototype.onActive = function(t) {
if (u.tp.isChapterGameOver_ProxyGetGameEndDelayTime(t)) {
if (!this.isResReday()) return;
if (!t.args[0].state.clearScreen) return;
t.replace = !0;
t.returnState = !0;
t.returnValue = this.createAnimationWaitPromise();
}
u.tp.isChapterScore_ProxyExtraScore(t) && t.args[0].state.clearScreen && this.isScoreChapter() && t.args[1].push({
value: 150
});
u.tp.isChapterScore_ProxyApplyScoreDelta(t) && t.args[0].state.clearScreen && this.isScoreChapter() && (t.args[2] = 1300);
if (u.tp.isClassBoardSplashAnimation_ProxySetBoardSplashAnimationState(t) || u.tp.isChapterBoardSplashAnimation_ProxyPlayBoardSplashAnimationForTraitOnly(t)) {
if (!this.isResReday()) return;
this.getLocalData();
var e = t.data || {}, r = e.screenScore, o = e.startPos, i = e.endPos;
if (void 0 === r || void 0 === o || void 0 === i) {
var a = p.storage.getItem("clearScreenEffectContext", null);
if (a) {
r = null != r ? r : a.screenScore;
!o && a.startPos && (o = cc.v2(a.startPos.x, a.startPos.y));
!i && a.endPos && (i = cc.v2(a.endPos.x, a.endPos.y));
}
}
if ((!o || !isFinite(o.x) || !isFinite(o.y)) && d.gameEffectLayer) {
var n = d.gameEffectLayer.getContentSize();
o = cc.v2(n.width / 2, .6 * n.height);
}
if ((!i || !isFinite(i.x) || !isFinite(i.y)) && d.gameEffectLayer) {
n = d.gameEffectLayer.getContentSize();
i = cc.v2(n.width / 2 + 120, .8 * n.height);
}
this.isScoreChapter() && (r = 150);
this.showAnim(d.gameEffectLayer, null != r ? r : 0, o, i, function() {
if (m.gameInfo.gameMode == f.GameMode.Class) {
var e = t.args[3];
null == e || e();
}
});
t.replace = !0;
t.returnState = !0;
}
u.tp.isClassGameDataClear_Disk_ProxyResetReviveAndAdvertisementData(t) && this.reset();
if (u.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(t)) {
if (!this.isResReday()) return;
t.replace = !0;
}
if (u.tp.isClassScoreTip_ProxyPlayClearScreenScoreAnim(t)) {
if (!this.isResReday()) return;
t.replace = !0;
}
if (u.tp.isChapterComboScoreTip_ProxySkipComboScoreTip(t)) {
if (!this.isResReday()) return;
if (0 === t.args[0].option.eliminate) {
t.returnValue = !0;
t.returnState = !0;
t.replace = !0;
}
}
};
e.prototype.isResReday = function() {
var t = TRAIT("FeatclearscreenbombfixTrait");
if (null == t ? void 0 : t.active) {
var e = l.ResLoader.getAsset("Remote_Featclearscreenbomb_ClearScreenBomb");
if (!e || !cc.isValid(e)) return !1;
}
return !0;
};
e.prototype.getLocalData = function() {
if (!this.localData) {
var t = p.storage.getItem(g, null);
this.localData = t || {
gameNum: 0,
animPlayCount: 0,
animShowCount: 0,
curAddScore: 0,
gameNumTravel: 0,
animPlayCountTravel: 0,
animShowCountTravel: 0,
curAddScoreTravel: 0
};
}
return this.localData;
};
e.prototype.reset = function() {
this.getLocalData();
if (m.gameInfo.gameMode == f.GameMode.Class) {
this.localData.animPlayCount = 0;
this.localData.animShowCount = 0;
this.localData.curAddScore = 0;
} else {
this.localData.animPlayCountTravel = 0;
this.localData.animShowCountTravel = 0;
this.localData.curAddScoreTravel = 0;
}
p.storage.setItem(g, this.localData);
};
e.prototype.showAnim = function(t, e, r, o, i) {
return n(this, void 0, void 0, function() {
var a, n, c, p, u, d, y, g = this;
return s(this, function(s) {
switch (s.label) {
case 0:
return [ 4, h.nextFrame() ];

case 1:
s.sent();
this._isAnimPlaying = !0;
if (!t || !cc.isValid(t)) {
this.onAnimationComplete();
null == i || i();
return [ 2 ];
}
this.getLocalData();
this.addCount(!1);
this.setCurScore(e);
(null == (n = TRAIT("FeatclearscreenbombfixTrait")) ? void 0 : n.active) && (a = l.ResLoader.getAsset("Remote_Featclearscreenbomb_ClearScreenBomb"));
if (a) return [ 3, 5 ];
s.label = 2;

case 2:
s.trys.push([ 2, 4, , 5 ]);
return [ 4, new Promise(function(t, e) {
l.ResLoader.loadByBundle("Remote_Featclearscreenbomb", "ClearScreenBomb", cc.Prefab, function(r, o) {
r ? e(r) : t(o);
});
}) ];

case 3:
a = s.sent();
return [ 3, 5 ];

case 4:
s.sent();
this.onAnimationComplete();
null == i || i();
return [ 2 ];

case 5:
if (!cc.isValid(a)) {
this.onAnimationComplete();
null == i || i();
return [ 2 ];
}
if (!t || !cc.isValid(t)) {
this.onAnimationComplete();
null == i || i();
return [ 2 ];
}
c = cc.instantiate(a);
t.addChild(c);
c.setPosition(r);
p = cc.director._kSpeed || 1;
if (u = c.getComponentInChildren(dragonBones.ArmatureDisplay)) {
u.timeScale = 1 / p;
u.playAnimation(e <= 0 ? "in" : "in_word", 1);
}
d = c.getComponentInChildren(cc.Label);
y = d.node.parent.convertToNodeSpaceAR(o);
if ((m.gameInfo.gameMode == f.GameMode.Class || this.isScoreChapter()) && d && e > 0) {
d.node.opacity = 0;
d.string = "" + e;
cc.tween(d.node).delay(.16 * p).to(.1 * p, {
opacity: 255,
scale: 1.2
}).to(.2 * p, {
scale: 1
}).delay(.34 * p).to(.6 * p, {
scale: 1.4,
y: 150
}).start();
cc.tween(d.node).delay(1.3 * p).to(.16 * p, {
opacity: 0
}).delay(.1).call(function() {
d.node.y = y.y + 120;
d.node.scale = 1.2;
}).to(.1 * p, {
scale: 1.4,
opacity: 255
}).to(.17 * p, {
scale: 1
}).delay(.2 * p).to(.17 * p, {
scale: 1.2
}).to(.17 * p, {
scale: 1,
opacity: 0,
y: y.y
}).call(function() {
g.onAnimationComplete();
null == i || i();
c.destroy();
}).start();
} else cc.tween(c).delay(3.3).call(function() {
g.onAnimationComplete();
null == i || i();
c.destroy();
}).start();
return [ 2 ];
}
});
});
};
e.prototype.addCount = function(t) {
void 0 === t && (t = !1);
this.getLocalData();
m.gameInfo.gameMode == f.GameMode.Class ? t ? this.localData.animShowCount++ : this.localData.animPlayCount++ : t ? this.localData.animShowCountTravel++ : this.localData.animPlayCountTravel++;
p.storage.setItem(g, this.localData);
};
e.prototype.setCurScore = function(t) {
void 0 === t && (t = 0);
this.getLocalData();
m.gameInfo.gameMode == f.GameMode.Class ? this.localData.curAddScore = t : this.isScoreChapter() && (this.localData.curAddScoreTravel = t);
p.storage.setItem(g, this.localData);
};
e.prototype.isScoreChapter = function() {
if (m.gameInfo.gameMode != f.GameMode.Chapter) return !1;
var t = p.storage.getItem("chapterCondition");
return (null == t ? void 0 : t.Way) === y.ChapterType.score;
};
e.prototype.createAnimationWaitPromise = function() {
var t = this;
return new Promise(function(e) {
t._animationWaitResolvers.push(e);
setTimeoutSafe(function() {
t._isAnimPlaying || t.onAnimationComplete();
}, 150);
});
};
e.prototype.onAnimationComplete = function() {
if (this._isAnimPlaying) {
this._isAnimPlaying = !1;
this._animationWaitResolvers.forEach(function(t) {
return t();
});
this._animationWaitResolvers = [];
}
};
return a([ classId("FeatclearscreenbombTrait") ], e);
}(c.Trait);
r.FeatclearscreenbombTrait = _;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/timer/Timer": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FeatclearscreenbombfixTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "93ff94Q/ANEcpuaIOdNnMaS", "FeatclearscreenbombfixTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FeatclearscreenbombfixTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/modules/preload/vo/PreloadTraitInfo"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isBoardEffect_Launch_ProxyOnGameInitComplete(t) && c.preloadTraitInfo.add({
traitClassName: "FeatclearscreenbombfixTrait",
url: "ClearScreenBomb",
type: cc.Prefab,
bundleName: "Remote_Featclearscreenbomb"
});
};
return a([ classId("FeatclearscreenbombfixTrait") ], e);
}(n.Trait);
r.FeatclearscreenbombfixTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/preload/vo/PreloadTraitInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FeatclearscreeneffectwithputTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "74579p2LVJMtK6X329dLqGp", "FeatclearscreeneffectwithputTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FeatclearscreeneffectwithputTrait = void 0;
var c = t("../../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = t("../../../../../../../scripts/modules/binary/vo/BinaryBoard"), d = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), f = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), m = t("../../../../../../../scripts/base/layer/GameLayer"), h = t("../../../../../../../scripts/base/async/Barrier"), y = t("../components/boardSplashAnimationClearScreenEffectWithPut"), g = t("../../../../../../../scripts/modules/game/type/GameType"), _ = t("../../../../../../../scripts/modules/game/vo/GameInfo"), v = t("../../../../../../../scripts/base/storage/Storage"), T = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.effectNodeScr = null;
e.nodes = [];
e._prefab = null;
e._prefabBarrier = new h.Barrier();
e.beUesful = !1;
e.prefabNodeName = "ClearScreenEffectWithPut";
e.traitPrefab_effect = "prefabs/ClearPreEffect";
return e;
}
e.prototype.onActive = function(t) {
if (p.tp.isBoardGetBlockOverPreEliminateNode(t)) {
var e = t.args[0], r = e.parent, o = r.getContentSize(), i = r.getChildByName("Block"), a = (null == i ? void 0 : i.getPosition()) || cc.v2(0, 5), n = e.convertToWorldSpaceAR(cc.v2(0, 0)), s = m.gameUiLayer.convertToNodeSpaceAR(n), c = cc.v2(s.x + a.x, s.y + a.y);
this.loadNode(f.gameEffectLayer, c, o);
}
if (p.tp.isEliminate_Effects_ProxyTouchOnMoveCanSnap(t)) {
var l = t.args[0];
this.doWithMoveShape(l);
}
p.tp.isEliminate_Effects_ProxyTouchOnMoveNoCanSnap(t) && this.removeBlockHeart("", !0);
if (p.tp.isBoardSplashAnimation_ProxyOnBlocksProducerTouchEnd(t)) {
l = t.args[0].state;
this.beUesful && this.isCanClear() && this.addRowEffect(l);
}
};
e.prototype.onEnable = function() {};
e.prototype.onDisable = function() {
this.clearNodeArr();
};
e.prototype.onCreate = function() {
var t = this;
c.ResLoader.loadByBundle("Remote_Featclearscreeneffectwithput", this.traitPrefab_effect, cc.Prefab, function(e, r) {
if (e) ; else {
t._prefab = r;
t._prefabBarrier.open();
}
});
};
e.prototype.doWithMoveShape = function(t) {
var e = v.storage.getItem("classGuideStep", 0), r = v.storage.getItem("classRoundNum", 0);
this.beUesful = !1;
if (_.gameInfo.gameMode === g.GameMode.Class && !(e > 2 && r >= 6)) return !1;
var o = d.boardInfo.faceBlocks, i = [];
for (var a in t._showShaders) for (var n in t._showShaders[a]) {
i.push(new cc.Vec2(+a, +n));
o[a][n] = 1;
}
var s = new u.BinaryBoard();
s.convertToBinaryBoard(o);
s.canClearBlockArr(!0);
s.rowBinary.every(function(t) {
return 0 === t;
}) ? this.addBlockHeartImg(t) : this.removeBlockHeart("", !0);
};
e.prototype.isCanClear = function(t, e) {
var r = new u.BinaryBoard();
r.convertToBinaryBoard(d.boardInfo.faceBlocks);
t && t.forEach(function(t) {
r.clearRow(t);
});
e && e.forEach(function(t) {
r.clearCol(t);
});
r.record();
r.canClearBlockArr(!0);
return r.getEmptyNumObj() >= 64;
};
e.prototype.loadNode = function(t, e, r) {
return n(this, void 0, void 0, function() {
var o, i;
return s(this, function(a) {
switch (a.label) {
case 0:
return t && t.isValid ? this._prefabBarrier.isOpen ? [ 3, 2 ] : [ 4, this._prefabBarrier.wait() ] : [ 2 ];

case 1:
a.sent();
a.label = 2;

case 2:
t.getChildByName(this.prefabNodeName) && this.removeNode();
(o = cc.instantiate(this._prefab)).setContentSize(r);
t.addChild(o);
o.setPosition(e || cc.v2(0, 5));
o.name = this.prefabNodeName;
i = o.getComponent(y.default);
this.effectNodeScr = i;
return [ 2 ];
}
});
});
};
e.prototype.removeNode = function() {
this.effectNodeScr && this.effectNodeScr.isValid && this.effectNodeScr.node.removeFromParent();
this.effectNodeScr = null;
};
e.prototype.addNodeToArr = function(t, e) {
this.nodes.push({
node: e,
color: t
});
};
e.prototype.clearNodeArr = function() {
this.nodes = [];
};
e.prototype.addBlockHeartImg = function(t) {
this.beUesful = !0;
if (this.effectNodeScr && this.effectNodeScr.isValid) {
this.nodes = [];
for (var e in t._canEliminateShaders) {
var r = t._canEliminateShaders[e];
for (var o in r) t._showShaders[e] && t._showShaders[e][o] || this.addNodeToArr(t.color, r[o]);
}
if (this.nodes.length > 0) for (var i = 0; i < this.nodes.length; i++) this.effectNodeScr.addBlockHeartImg(this.nodes[i].color, this.nodes[i].node);
}
};
e.prototype.addRowEffect = function(t) {
if (this.effectNodeScr && this.effectNodeScr.isValid) {
var e = t.eliminateRows, r = t.eliminateCols, o = Object.keys(e).map(Number), i = Object.keys(r).map(Number);
this.effectNodeScr.addRowEffect(o, i);
}
};
e.prototype.removeBlockHeart = function(t, e) {
void 0 === e && (e = !1);
this.beUesful = !1;
this.effectNodeScr && this.effectNodeScr.isValid && this.effectNodeScr.removeBlockHeart(t, e);
};
return a([ classId("FeatclearscreeneffectwithputTrait") ], e);
}(l.Trait);
r.FeatclearscreeneffectwithputTrait = T;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/async/Barrier": void 0,
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/binary/vo/BinaryBoard": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../components/boardSplashAnimationClearScreenEffectWithPut": "boardSplashAnimationClearScreenEffectWithPut"
} ],
FeatrandomblockbyefficientTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0f321JvcPpLra/a312WUzD2", "FeatrandomblockbyefficientTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FeatrandomblockbyefficientTrait = void 0;
var n, s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), u = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKArgsInfo"), d = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), f = t("../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../scripts/modules/game/vo/GameInfo"), h = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate");
(function(t) {
t[t.ParamDefault = 0] = "ParamDefault";
t[t.Param1 = 1] = "Param1";
t[t.Param2 = 2] = "Param2";
})(n || (n = {}));
var y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.activeMinTime = 18e4;
e.activeMaxTime = 3e5;
e.activeBeforeTime = -1;
return e;
}
e.prototype.onActive = function(t) {
if (m.gameInfo.gameMode === f.GameMode.Class) {
if (h.tp.isClassAlgorithmProcessInfoBottomOfferBefore(t) || h.tp.isChapterAlgorithmProcessInfoBottomOfferBefore(t)) {
var e = t.args[0] || [];
this.activeBeforeTime <= 0 && (this.activeBeforeTime = Math.floor(Math.random() * (this.activeMaxTime - this.activeMinTime + 1) + this.activeMinTime));
if (m.gameInfo.gameTime >= this.activeBeforeTime && this.props.param === n.Param2) return t.args[0];
if (-64 == d.boardInfo.faceBlocks.reduce(function(t, e) {
return t.concat(e);
}).reduce(function(t, e) {
return t + e;
})) return t.args[0];
for (var r = [], o = 0; o < p.algorithmName.algoActualName.length; o++) "随机" == p.algorithmName.algoActualName[o] && r.push(o);
if (r.length <= 0) return t.args[0];
if (r.length <= 3) {
e.push(c.OFFER_TYPE.RANDOM_BLOCK_BOTTOM);
t.args[0] = e;
}
}
h.tp.isAlgorithmBottomInfoCheckGuaranteedBlock(t) && this.isContainRandom() && (t.args[0] = !0);
h.tp.isAlgorithmBottomInfoReplaceBottomOffer(t) && (t.args[0] = c.OFFER_TYPE.RANDOM_BLOCK_BOTTOM);
h.tp.isAlgorithmSDKTraitInfoGetPassThroughAlgoName(t) && p.algorithmName.algoActualId == c.OFFER_TYPE.RANDOM_BLOCK_BOTTOM && (t.args[0] = p.algorithmName.algoActualName);
if (h.tp.isAlgorithmSDKArgsInfoOnBlockInfo(t) && p.algorithmName.algoActualId == c.OFFER_TYPE.RANDOM_BLOCK_BOTTOM) {
u.algorithmSDKArgsInfo.setBlockIds(l.algorithmInfo.blockIdList);
u.algorithmSDKArgsInfo.setBlockNames(p.algorithmName.algoActualName);
u.algorithmSDKArgsInfo.setBlockPoses(l.algorithmInfo.blockPosList);
}
}
};
e.prototype.isContainRandom = function() {
return p.algorithmName.algoActualName.filter(function(t) {
return "随机" == t;
}).length > 0;
};
return a([ classId("FeatrandomblockbyefficientTrait") ], e);
}(s.Trait);
r.FeatrandomblockbyefficientTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKArgsInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FillCleanAlgoTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "03879H86UpIVZUW5pu69Xd6", "FillCleanAlgoTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FillCleanAlgoTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), l = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (l.tp.isAlgorithmSDKTraitInfoGetLianGuan(t)) {
if (12 != this.props.algo) return;
c.algorithmName.algoActualId != s.OFFER_TYPE.TIAN_KONG_XIAO_CHU && c.algorithmName.algoActualId != s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU || (t.args[0] = !0);
}
l.tp.isClassGameDataClear_Disk_ProxyResetAlgorithmData(t) && storage.setItem("classBlockExtraList", {
better_block: 0,
better_space: 0
});
l.tp.isChapterGameDataClear_Disk_ProxyResetAlgorithm(t) && storage.setItem("chapterBlockExtraList", {
better_block: 0,
better_space: 0
});
};
return a([ classId("FillCleanAlgoTrait") ], e);
}(n.Trait);
r.FillCleanAlgoTrait = p;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FillClearTopicTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "26a85hY7VFO0LqxLvOVUCRd", "FillClearTopicTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FillClearTopicTrait = void 0;
var n = t("../../../../../../../scripts/base/enum/enum"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), u = t("../../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig"), d = t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), f = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo"), m = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (m.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || m.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t)) {
if (3 != l.algorithmInfo.blockIdList.length) return;
var e = TRAIT("RecoverBlockSortTrait");
if (null == e ? void 0 : e.active) {
if (-1 != [ c.OFFER_TYPE.TIAN_KONG_XIAO_CHU, c.OFFER_TYPE.EMPTYDONGFILL, c.OFFER_TYPE.ALGO_QUICK, c.OFFER_TYPE.ALGO_MIX_TKXC ].indexOf(p.algorithmName.algoActualId)) {
f.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(u.operaPosMiddle);
f.algorithmStrategyBlocksPosInfo._blocksPosList = d.OPERA_POS_TYPE.MIDDLE;
t.replace = !0;
}
return;
}
if (n.isValueInEnum(p.algorithmName.algoActualId, c.OFFER_TYPE_BLANK) && p.algorithmName.algoActualId != c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) {
f.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(u.operaPosMiddle);
f.algorithmStrategyBlocksPosInfo._blocksPosList = d.OPERA_POS_TYPE.MIDDLE;
t.replace = !0;
}
}
};
return a([ classId("FillClearTopicTrait") ], e);
}(s.Trait);
r.FillClearTopicTrait = h;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FillExcludeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "92393RnrmNJYo+xMPHerwKj", "FillExcludeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FillExcludeTrait = void 0;
var n = t("../../../../../../../../scripts/base/enum/enum"), s = t("../../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), p = t("../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo"), u = t("../../../../../../../../scripts/modules/game/type/GameType"), d = t("../../../../../../../../scripts/modules/game/vo/GameInfo"), f = t("../../../../../../../../scripts/modules/score/vo/ScoreInfo"), m = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (m.tp.isAlgorithmSDKTraitInfoGetLimitSmall(t)) {
if (d.gameInfo.gameMode != u.GameMode.Class) return;
n.isValueInEnum(l.algorithmName.algoActualId, c.OFFER_TYPE_BLANK) && f.scoreInfo.highRecordScore >= this.props.score && p.algorithmSDKTraitInfo.setLimitBlock(!0);
}
};
return a([ classId("FillExcludeTrait") ], e);
}(s.Trait);
r.FillExcludeTrait = h;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../../scripts/modules/algorithm/vo/AlgorithmSDKTraitInfo": void 0,
"../../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FirstHomeGuideComponent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "062cb2OLAVCH5WwG8jvQyaW", "FirstHomeGuideComponent");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../../scripts/base/components/Component"), s = t("../../../../../../../../scripts/modules/modeChoice/components/ModeChoice"), c = cc._decorator, l = c.ccclass, p = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.armatureDisplay = null;
e.eventNode = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.eventNode.on("touchstart", this.onTouchNode, this);
this.armatureDisplay && this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(e) {
var r, o, i = e;
"newMod_in" !== (null === (r = null == i ? void 0 : i.animationState) || void 0 === r ? void 0 : r.name) ? "continue_in" !== (null === (o = null == i ? void 0 : i.animationState) || void 0 === o ? void 0 : o.name) || t.armatureDisplay.playAnimation("continue_init", 0) : t.armatureDisplay.playAnimation("newMod_init", 0);
});
};
e.prototype.onTouchNode = function() {
var t = this.state.aniName, e = Cinst(s.default);
if (cc.isValid(e)) {
"newMod_init" === t && e.onJourneyClick();
"continue_init" === t && e.onClassClick();
}
};
e.prototype.render = function() {
var t, e;
this.node.active = null !== (t = this.state.isVisible) && void 0 !== t && t;
var r = this.state.aniName;
this.eventNode.position.y = "newMod_init" == r ? 31 : 35;
null === (e = this.armatureDisplay) || void 0 === e || e.playAnimation(r, 0);
};
a([ p(dragonBones.ArmatureDisplay) ], e.prototype, "armatureDisplay", void 0);
a([ p(cc.Node) ], e.prototype, "eventNode", void 0);
return a([ l ], e);
}(n.default);
r.default = u;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/components/Component": void 0,
"../../../../../../../../scripts/modules/modeChoice/components/ModeChoice": void 0
} ],
FixAlgoVersionTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8bdd33IugFPIaXP27UlYTno", "FixAlgoVersionTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FixAlgoVersionTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isAlgorithmSDKTraitInfoFixAlgoVersion(t)) {
t.returnValue = this.props.FixVersion.concat();
t.replace = !0;
t.returnState = !0;
}
};
return a([ classId("FixAlgoVersionTrait") ], e);
}(n.Trait);
r.FixAlgoVersionTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FixIsOpenOperaPosTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "03a57OAct9NHrAdCXSWjVd+", "FixIsOpenOperaPosTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FixIsOpenOperaPosTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || s.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t)) {
var e = TRAIT("IsOpenOperaPosTrait");
(null == e ? void 0 : e.active) && e.setState({
isFixIsOpenOperaPos: !0
});
}
};
return a([ classId("FixIsOpenOperaPosTrait") ], e);
}(n.Trait);
r.FixIsOpenOperaPosTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
FullScreenAdvtisementSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6b05e62ms5EIrbwUc2rR2d3", "FullScreenAdvtisementSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FullScreenAdvtisementSortTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/advertisement/config/AdvertisementConfig"), c = t("../../../../../../../scripts/modules/gameOver/type/GameOverType"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e, r, o, i;
if (l.tp.isChapterAdvertisement_FullScreenProxyOnChangeAdvType(t)) {
var a = null === (r = null === (e = t.args[0]) || void 0 === e ? void 0 : e.data) || void 0 === r ? void 0 : r.source, n = t.args[1];
void 0 !== a && a != c.GameOverSourceType.NormalFail && n == s.AD_TYPE.TYPE_45 && (t.returnValue = s.AD_TYPE.TYPE_44);
}
if (l.tp.isClassAdvertisement_FullScreenProxyOnChangeAdvType(t)) {
a = null === (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.data) || void 0 === i ? void 0 : i.source, 
n = t.args[1];
void 0 !== a && a != c.GameOverSourceType.NormalFail && n == s.AD_TYPE.TYPE_4 && (t.returnValue = s.AD_TYPE.TYPE_43);
}
};
return a([ classId("FullScreenAdvtisementSortTrait") ], e);
}(n.Trait);
r.FullScreenAdvtisementSortTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/advertisement/config/AdvertisementConfig": void 0,
"../../../../../../../scripts/modules/gameOver/type/GameOverType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLModelLevelPlan1CtrlTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "766fcY5aaxFX6HOF8tXuAYc", "GLModelLevelPlan1CtrlTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLModelLevelPlan1CtrlTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("GLModelLevelPlan1CtrlTrait") ], e);
}(n.Trait);
r.GLModelLevelPlan1CtrlTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLOnetGameTimeExperiment4Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "43b63JTz2ZA9ZokyLhJg5Hp", "GLOnetGameTimeExperiment4Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLOnetGameTimeExperiment4Trait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("GLOnetGameTimeExperiment4Trait") ], e);
}(n.Trait);
r.GLOnetGameTimeExperiment4Trait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLOnetNewGuideCtrlTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "834ddYQewxLKo9J2HDtQ1py", "GLOnetNewGuideCtrlTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLOnetNewGuideCtrlTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("GLOnetNewGuideCtrlTrait") ], e);
}(n.Trait);
r.GLOnetNewGuideCtrlTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLResultView6Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1a184VccS1OFolE4fwJf1dK", "GLResultView6Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLResultView6Trait = void 0;
var c = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/base/ui/UI"), p = t("../../../../../../scripts/falcon/EventManager"), u = t("../../../../../../scripts/falcon/ModuleManager"), d = t("../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../scripts/modules/gameLobby/type/GamelobbyType"), m = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), h = t("../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Game"), y = t("../../../../../../scripts/modules/prefab/PrefabConfig"), g = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), _ = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
return s(this, function() {
g.tp.isGameLobby_DataInfoExitGameLobby(t) && (t.args[0] == f.GameLobbyExitGameType.FromGameMain ? t.args[1] = !0 : t.args[1] = !1);
if (g.tp.isSetup_ProxyOnClick_exit(t)) {
t.replace = !0;
l.UI.hideUI(y.PrefabConfig.Setup);
u.ModuleManager.setCurrentModuleType(u.ModuleType.Class);
p.EventManager.dispatchModuleEvent(new h.E_ModeChoice_Game(d.GameType.Class));
setTimeoutSafe(function() {
l.UI.show(y.PrefabConfig.GLHallMoreGamesPopupView, m.gameAlertLayer);
}, 10);
}
return [ 2 ];
});
});
};
return a([ classId("GLResultView6Trait") ], e);
}(c.Trait);
r.GLResultView6Trait = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/falcon/ModuleManager": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/gameLobby/type/GamelobbyType": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../scripts/modules/modeChoice/events/E_ModeChoice_Game": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLShowAdsByGameTimeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c098esEka5LtL5KrY0hX9U1", "GLShowAdsByGameTimeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLShowAdsByGameTimeTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isWork: !1
};
};
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t) && (this.state.isWork = !0);
};
return a([ classId("GLShowAdsByGameTimeTrait") ], e);
}(n.Trait);
r.GLShowAdsByGameTimeTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLShowAdsPopupByCountTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f70f5ehW0FNPrKUZsCWQrcv", "GLShowAdsPopupByCountTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLShowAdsPopupByCountTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("GLShowAdsPopupByCountTrait") ], e);
}(n.Trait);
r.GLShowAdsPopupByCountTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GLShowInsertAdsBySecondsTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8e43fJnPEJPcYiE1gGqxIIz", "GLShowInsertAdsBySecondsTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GLShowInsertAdsBySecondsTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("GLShowInsertAdsBySecondsTrait") ], e);
}(n.Trait);
r.GLShowInsertAdsBySecondsTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GameInfoDisplayTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3cf1fvryPtPALkOEWxeBrWW", "GameInfoDisplayTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameInfoDisplayTrait = void 0;
var n = t("../../../../../../../scripts/base/loader/ResLoader"), s = (t("../../../../../../../scripts/base/storage/Storage"), 
t("../../../../../../../scripts/base/trait/Trait")), c = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = t("../../prefab/TraitsPrefabConfig"), u = t("../components/gameInfoDisplay/GameInfoDisplay"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e = this;
l.tp.isGame_ProxyOnGameShow(t) && (r = Cinst(u.default)) && (r.node.active = !0);
if (l.tp.isGame_ProxyOnGameHide(t)) {
var r;
(r = Cinst(u.default)) && (r.node.active = !1);
}
l.tp.isLaunch_ProxyOnTraitConfigInitComplete(t) && n.ResLoader.loadByBundle("mainTraits", p.TraitsPrefabConfig.GameInfoDisplay.url, cc.Prefab, function(t, r) {
if (!t) {
var o = cc.instantiate(r);
c.uiLayer.addChild(o);
var i = o.getComponent(u.default);
if (i) {
i.node.opacity = e.props.opacity;
i.setState();
}
}
});
};
return a([ classId("GameInfoDisplayTrait") ], e);
}(s.Trait);
r.GameInfoDisplayTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig",
"../components/gameInfoDisplay/GameInfoDisplay": "GameInfoDisplay"
} ],
GameInfoDisplay: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "75d2e6L+rJD1b6puR8Nf7il", "GameInfoDisplay");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../../scripts/base/components/Component"), s = t("../../../../../../../../scripts/modules/gameWay/vo/GameWayInfo"), c = t("../../../../../../../../scripts/modules/traitServer/vo/TraitServerRequestInfo"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.textInfo1 = null;
e.textInfo2 = null;
return e;
}
e.prototype.render = function() {
this.textInfo1.string = this.getGameWayNum();
var t = c.traitServerRequestInfo.uid;
this.textInfo2.string = t;
};
e.prototype.getGameWayNum = function() {
return s.gameWayInfo.gameWayNum;
};
a([ u(cc.Label) ], e.prototype, "textInfo1", void 0);
a([ u(cc.Label) ], e.prototype, "textInfo2", void 0);
return a([ p ], e);
}(n.default);
r.default = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/components/Component": void 0,
"../../../../../../../../scripts/modules/gameWay/vo/GameWayInfo": void 0,
"../../../../../../../../scripts/modules/traitServer/vo/TraitServerRequestInfo": void 0
} ],
GameLobbyNewEntryCtrlTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "124adsfiRBGQLJdEACBRa6T", "GameLobbyNewEntryCtrlTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameLobbyNewEntryCtrlTrait = void 0;
var n = t("../../../../../../scripts/base/adapter/AdapterFringe"), s = t("../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/modules/gameLobby/type/GamelobbyType"), p = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_miniGameVersionInfo"), u = t("../../../../../../scripts/modules/modeChoice/components/ModeChoice"), d = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
d.tp.isModeChoiceAddOtherNode(t) && this.showBtn(t);
};
e.prototype.showBtn = function(t) {
var e = TRAIT("AddMoreGameTrait");
if (null == e || !e.active) {
var r = TRAIT("GameLobbyOpenOpentionByScoreTrait");
if ((null == r ? void 0 : r.active) && storage.getItem("classHighScore", 0) <= 4e4) return;
var o = t.target.node;
if (cc.isValid(o) && !o.getChildByName("GameLobbyEntry")) {
var i = function() {
s.ResLoader.load("prefabs/gamelobby/GameLobbyEntry", cc.Prefab, function(t, e) {
if (!t && e) {
var r = Cinst(u.default);
if (r && r.node) {
var o = cc.instantiate(e);
o.name = "GameLobbyEntry";
r.node.addChild(o, 99);
n.applyAdapterFringe(o);
}
}
});
};
p.gameLobbyBundleVersionInfo.checkBundleIsNew(l.GameLobbyBundleName.GL_HALL) ? i() : s.ResLoader.loadBundle(l.GameLobbyBundleName.GL_HALL, function(t) {
t || i();
}, {
isRemote: !0
});
}
}
};
return a([ classId("GameLobbyNewEntryCtrlTrait") ], e);
}(c.Trait);
r.GameLobbyNewEntryCtrlTrait = f;
cc._RF.pop();
}, {
"../../../../../../scripts/base/adapter/AdapterFringe": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/gameLobby/type/GamelobbyType": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_miniGameVersionInfo": void 0,
"../../../../../../scripts/modules/modeChoice/components/ModeChoice": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GameLobbyOpenOpentionByScoreTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4099fAIuL5Fv6f7TKIqpEck", "GameLobbyOpenOpentionByScoreTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameLobbyOpenOpentionByScoreTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../../../../scripts/modules/setup/config/SetupConfig"), p = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo"), u = t("../../../../../../scripts/base/loader/ResLoader"), d = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_miniGameVersionInfo"), f = t("../../../../../../scripts/modules/gameLobby/type/GamelobbyType"), m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isSetup_ProxyOnClick_moreGames(t) && s.storage.getItem("classHighScore", 0) <= 4e4 && (t.returnState = !0);
c.tp.isSetup_ProxyOnClick_exit(t) && s.storage.getItem("classHighScore", 0) <= 4e4 && (t.returnState = !0);
if (c.tp.isSetupBtnItemRefreshMoreGamesBtnUI(t) && (a = t.target) && a.state.key === l.enSetupKeys.moreGames && this.isGetHighScore() && d.gameLobbyBundleVersionInfo.checkBundleIsNew(f.GameLobbyBundleName.GL_HALL)) {
if (p.gameLobby_DataInfo.isRed) {
a.state.redPoint = !0;
a.redNode.active = !0;
} else {
a.state.redPoint = !1;
a.redNode.active = !1;
}
for (var e = a.state.bottomBtnPre || l.SetupConfig.bottomBtnPre, r = [ {
path: l.SetupConfig.resUrl + e + "moreGames2",
sp: a.icon_img
} ], o = function(t) {
u.ResLoader.load(r[t].path, cc.SpriteFrame, function(e, o) {
e || r[t].sp && (r[t].sp.spriteFrame = o);
});
}, i = 0; i < r.length; i++) o(i);
}
c.tp.isSetupBtnItemRender(t) && (a = t.target) && a.state.key === l.enSetupKeys.moreGames && (this.isGetHighScore() || (t.returnState = !0));
if (c.tp.isSetupBtnItemOnClick(t)) {
var a;
if ((a = t.target) && a.state.key === l.enSetupKeys.moreGames && this.isGetHighScore() && p.gameLobby_DataInfo.isRed && d.gameLobbyBundleVersionInfo.checkBundleIsNew(f.GameLobbyBundleName.GL_HALL)) {
p.gameLobby_DataInfo.setIsRed(!0);
a.redNode.active = !1;
}
}
c.tp.isJewelFail_ProxyOnExitClick(t) && (this.isGetHighScore() || (t.returnState = !0));
};
e.prototype.isGetHighScore = function() {
return s.storage.getItem("classHighScore", 0) > 4e4;
};
return a([ classId("GameLobbyOpenOpentionByScoreTrait") ], e);
}(n.Trait);
r.GameLobbyOpenOpentionByScoreTrait = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/gameLobby/type/GamelobbyType": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_miniGameVersionInfo": void 0,
"../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GameLobbyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "dfdacHYi/VL/ZISgMjpYvmW", "GameLobbyTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__assign || function() {
return (a = Object.assign || function(t) {
for (var e, r = 1, o = arguments.length; r < o; r++) {
e = arguments[r];
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
}
return t;
}).apply(this, arguments);
}, n = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, s = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameLobbyTrait = void 0;
var l = t("../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../scripts/base/ui/UI"), d = t("../../../../../../scripts/falcon/EventManager"), f = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerHide"), m = t("../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerShow"), h = t("../../../../../../scripts/modules/advertisement/type/AdvertisementType"), y = t("../../../../../../scripts/modules/audio/events/E_Audio_AudioSwitch"), g = t("../../../../../../scripts/modules/audio/events/E_Audio_BgmSwitch"), _ = t("../../../../../../scripts/modules/audio/vo/AudioInfoData"), v = t("../../../../../../scripts/modules/gameLobby/components/GameLobbyGameLoadingManager"), T = t("../../../../../../scripts/modules/gameLobby/events/E_GameLobby_FullScreen"), b = t("../../../../../../scripts/modules/gameLobby/type/GamelobbyType"), S = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo"), P = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_featureSwitchInfo"), O = t("../../../../../../scripts/modules/prefab/PrefabConfig"), C = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), I = t("../../../../../../scripts/modules/tip/events/E_Tip_Show"), A = t("../../../../../../scripts/modules/gameLobby/events/E_GameLobby_Reward"), R = t("../../../../../../scripts/modules/setup/config/SetupConfig"), E = t("../../../../../../scripts/modules/gameLobby/vo/GameLobbyBundleVersInfo"), w = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.miniGamePeriodKey = "miniGamePeriodKey";
e.hall_name = "gl_hall";
e._nodePopupBinder = null;
e.isGoINClass = !1;
e.loadHallMax = 3;
e._initializeStatus = b.gameLobby_InitializeStatus.Uninitialize;
e.gameRedNode = null;
e._gameRedNodeRoot = null;
e._isLoadingRed = !1;
e.loadingManager = null;
return e;
}
e.prototype.data = function() {
return {};
};
e.prototype.onActive = function(t) {
var e, r;
C.tp.isGameLobby_ProxyOnGameInitComplete(t) && this.initializeBundle();
if (C.tp.isSetupBtnItemRender(t)) {
var o = t.target;
if (o && o.state.key === R.enSetupKeys.moreGames) {
o.state.bottomBtnSuffix = "2";
o.state.redPoint = S.gameLobby_DataInfo.isRed;
}
}
if (C.tp.isGameLobby_FullScreen_ProxyAdvertisementCallBack(t)) {
var i = t.args[0], a = t.args[1];
S.gameLobby_DataInfo.emit({
type: b.GameLobbyEventType.InterstAdCall,
call: null === (e = null == a ? void 0 : a.data) || void 0 === e ? void 0 : e.call,
data: {
state: i
}
});
S.gameLobby_DataInfo.sceneShowBanner || d.EventManager.dispatchModuleEvent(new f.E_Advertisement_BannerHide());
}
if (C.tp.isGameLobby_Reward_ProxyAdvertisementCallBack(t)) {
i = t.args[0], a = t.args[1];
S.gameLobby_DataInfo.emit({
type: b.GameLobbyEventType.rewardsAdCall,
call: null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.call,
data: {
state: i
}
});
i == h.AdvertiseCallBackState.Advertise_Fail ? d.EventManager.dispatchModuleEvent(new I.E_Tip_Show({
label: "",
sframeIndex: 0
})) : i == h.AdvertiseCallBackState.Advertise_TimeOut && d.EventManager.dispatchModuleEvent(new I.E_Tip_Show({
label: "",
sframeIndex: 0
}));
S.gameLobby_DataInfo.sceneShowBanner || d.EventManager.dispatchModuleEvent(new f.E_Advertisement_BannerHide());
}
};
e.prototype.initPeriod = function() {
storage.getItem("miniGamePeriodKey", "") || (S.gameLobby_DataInfo.getDownloadGameList().length >= 2 ? storage.setItem("miniGamePeriodKey", "1") : storage.setItem("miniGamePeriodKey", S.gameLobby_DataInfo.miniGamePeriod + ""));
};
Object.defineProperty(e.prototype, "isActive", {
get: function() {
return this.active;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isReady", {
get: function() {
return !!S.gameLobby_DataInfo.addOpention() && this.isActive && this._initializeStatus === b.gameLobby_InitializeStatus.Initialized;
},
enumerable: !1,
configurable: !0
});
e.prototype.loadMinigameJson = function() {
return s(this, void 0, void 0, function() {
var t;
return c(this, function(e) {
switch (e.label) {
case 0:
return [ 4, E.gameLobbyBundleVersInfo.getBundleVers() ];

case 1:
t = e.sent();
l.ResLoader.addBundleVers(t);
return [ 2 ];
}
});
});
};
e.prototype.initializeBundle = function() {
return s(this, void 0, void 0, function() {
return c(this, function(t) {
switch (t.label) {
case 0:
this.initPeriod();
return [ 4, this.loadMinigameJson() ];

case 1:
t.sent();
if (this._initializeStatus !== b.gameLobby_InitializeStatus.Uninitialize) return [ 2 ];
this._initializeStatus = b.gameLobby_InitializeStatus.Initializing;
t.label = 2;

case 2:
t.trys.push([ 2, 5, , 6 ]);
return [ 4, this.addPersistRootNode(null) ];

case 3:
t.sent();
this.initListener();
return [ 4, this.loadHallBundle() ];

case 4:
case 5:
t.sent();
return [ 3, 6 ];

case 6:
return [ 2 ];
}
});
});
};
e.prototype.loadHallBundle = function() {
return s(this, void 0, void 0, function() {
var t = this;
return c(this, function() {
l.ResLoader.loadBundle("gl_hall", function(e, r) {
if (e || !r) {
if (S.gameLobby_DataInfo.isPreAllMiniGame()) {
t.loadHallMax--;
t.loadHallMax > 0 && t.loadHallBundle();
}
} else if (r) {
DS("moregame_hall_download_success", {
period: S.gameLobby_DataInfo.getPeriod()
});
S.gameLobby_DataInfo.isPreAllMiniGame() && t.initLoadingManeger();
l.ResLoader.bundlePreloadScene(r, "gl_hall", function(e) {
t._initializeStatus = e ? b.gameLobby_InitializeStatus.InitializedError : b.gameLobby_InitializeStatus.Initialized;
});
}
}, {
isRemote: !0
});
return [ 2 ];
});
});
};
e.prototype.initListener = function() {
cc.systemEvent.on(b.GameLobbyEmitEventType.MINIGAME_EVENT, function(t) {
if (t.source !== b.GameLobbyEventSource.Main) switch (t.type) {
case b.GameLobbyEventType.SettingUpdate:
t.soundSwitch !== _.audioInfoData.audioSwitch && d.EventManager.dispatchModuleEvent(new y.E_Audio_AudioSwitch());
t.musicSwitch !== _.audioInfoData.bgmSwitch && d.EventManager.dispatchModuleEvent(new g.E_Audio_BgmSwitch());
break;

case b.GameLobbyEventType.EnterGame:
S.gameLobby_DataInfo.emit({
type: b.GameLobbyEventType.EnterGame,
gameKey: t.gameKey,
isBeforeGameEnter: !0
});
S.gameLobby_DataInfo.enterGame(t.gameKey);
break;

case b.GameLobbyEventType.EnterMiniGame:
}
}, this);
cc.systemEvent.on(b.GameLobbyEmitEventType.MINIGAME_AD, function(t) {
switch (t.eventType) {
case b.GameLobbyEmitEventType.MINIGAME_EVENTTYPE_SHOWBANNER:
if (u.UI.activeState(O.PrefabConfig.ModeChoice.url)) return;
d.EventManager.dispatchModuleEvent(new m.E_Advertisement_BannerShow());
break;

case b.GameLobbyEmitEventType.MINIGAME_EVENTTYPE_HIDEBANNER:
d.EventManager.dispatchModuleEvent(new f.E_Advertisement_BannerHide());
break;

case b.GameLobbyEmitEventType.MINIGAME_EVENTTYPE_SHOWINSERTAD:
t.data && NativeBridge.send("trackGameEndRevenue", JSON.stringify(t.data), "(Ljava/lang/String;)V", "org/cocos2dx/javascript/JsCallJava");
d.EventManager.dispatchModuleEvent(new T.E_GameLobby_FullScreen({
type: h.AdvertiseType.interstitial,
call: t.call,
data: t.data
}));
break;

case b.GameLobbyEmitEventType.MINIGAME_EVENTTYPE_SHOWREWARDSAD:
t.data && NativeBridge.send("trackGameEndRevenue", JSON.stringify(t.data), "(Ljava/lang/String;)V", "org/cocos2dx/javascript/JsCallJava");
d.EventManager.dispatchModuleEvent(new A.E_GameLobby_Reward({
type: h.AdvertiseType.reward,
call: t.call,
data: t.data
}));
}
}, this);
cc.systemEvent.on(b.GameLobbyEmitEventType.MINIGAME_SUBMIT, function(t) {
var e = t.data;
switch (t.eventType) {
case "usr_data_game_end":
t = S.gameLobby_DataInfo.GameTimeRoundUp(t);
DS("usr_data_game_end", a({
period: S.gameLobby_DataInfo.getPeriod()
}, e));
break;

default:
DS(t.eventType, a({
period: S.gameLobby_DataInfo.getPeriod()
}, e));
}
});
cc.systemEvent.on(b.GameLobbyEmitEventType.MINIGAME_FEATURE_CONFIG, function(t) {
switch (t.eventType) {
case b.GameLobbyEmitEventType.MINIGAME_FEATURE_ISOPEN:
if (t.data && t.data.feature && t.call) {
var e = P.gameLobby_featureSwitchInfo.checkIsOpenByOldFeatureName(t.data.feature);
t.call(e);
}
break;

case b.GameLobbyEmitEventType.MINIGAME_FEATURE_GETKEYPARAM:
if (t.data && t.data.feature && t.call) {
var r = P.gameLobby_featureSwitchInfo.getFeatureKeyParamByOldFeatureName(t.data.feature);
t.call(r[t.data.key]);
}
}
});
};
e.prototype.updateMusicState = function() {
var t = storage.getItem("audioSwitch", !0), e = storage.getItem("bgmSwitch", !1);
cc.systemEvent.emit(b.GameLobbyEmitEventType.MINIGAME_EVENT, {
type: b.GameLobbyEventType.SettingUpdate,
soundSwitch: t,
musicSwitch: e,
vibrationSwitch: !0
});
};
e.prototype.changeBundleList = function(t) {
S.gameLobby_DataInfo.setGamelobbyList(t);
};
e.prototype.exitToGameLobby = function(t) {
S.gameLobby_DataInfo.emit({
type: b.GameLobbyEventType.ExitToGameLobby,
gameKey: t
});
};
e.prototype.addPersistRootNode = function(t) {
return s(this, void 0, void 0, function() {
var e;
return c(this, function(r) {
switch (r.label) {
case 0:
return null != this._nodePopupBinder ? [ 3, 2 ] : [ 4, l.ResLoader.asyncLoadByBundle("gl_hall", "gl_moreGamesPopup/prefabs/GLHallMoreGamesPopupEnter", cc.Prefab, void 0, {
isRemote: !0
}) ];

case 1:
if (!(e = r.sent())) return [ 2 ];
this._nodePopupBinder = cc.instantiate(e);
cc.game.addPersistRootNode(this._nodePopupBinder);
t && t();
r.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.initLoadingManeger = function() {
if (!this.loadingManager) {
var t = new cc.Node();
t.name = "LoadingManeger";
var e = t.addComponent(v.default);
cc.game.addPersistRootNode(t);
this.loadingManager = t;
e.tryShowLoader();
}
};
e.prototype.resumeGameSpeed = function() {};
e.prototype.initGameRedNode = function() {
var t = this;
if (S.gameLobby_DataInfo.isRed && !this.gameRedNode && !this._isLoadingRed && this._gameRedNodeRoot && this._gameRedNodeRoot.isValid) {
var e = cc.assetManager.getBundle("gl_hall");
if (e) {
this._isLoadingRed = !0;
var r = this._gameRedNodeRoot;
e.load("gl_set/resource/setting_icon_redpoint2", cc.SpriteFrame, function(e, o) {
t._isLoadingRed = !1;
if (!e && r && r.isValid) try {
var i = new cc.Node();
i.name = "red_point";
t._gameRedNodeRoot.addChild(i);
i.addComponent(cc.Sprite).spriteFrame = o;
i.setPosition(550, 60);
t.gameRedNode = i;
} catch (t) {}
});
}
}
};
return n([ classId("GameLobbyTrait") ], e);
}(p.Trait);
r.GameLobbyTrait = w;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerHide": void 0,
"../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerShow": void 0,
"../../../../../../scripts/modules/advertisement/type/AdvertisementType": void 0,
"../../../../../../scripts/modules/audio/events/E_Audio_AudioSwitch": void 0,
"../../../../../../scripts/modules/audio/events/E_Audio_BgmSwitch": void 0,
"../../../../../../scripts/modules/audio/vo/AudioInfoData": void 0,
"../../../../../../scripts/modules/gameLobby/components/GameLobbyGameLoadingManager": void 0,
"../../../../../../scripts/modules/gameLobby/events/E_GameLobby_FullScreen": void 0,
"../../../../../../scripts/modules/gameLobby/events/E_GameLobby_Reward": void 0,
"../../../../../../scripts/modules/gameLobby/type/GamelobbyType": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobbyBundleVersInfo": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_featureSwitchInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../scripts/modules/tip/events/E_Tip_Show": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GamePlayDianZan: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d7012FsprdOQb+9F9nCxmqI", "GamePlayDianZan");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("../../../../../../../scripts/base/components/Component"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bone = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.bone.node.active = !1;
this.bone.addEventListener(dragonBones.EventObject.COMPLETE, function() {
t.bone.node.active = !1;
}, this);
};
e.prototype.render = function() {
return n(this, void 0, void 0, function() {
return s(this, function() {
this.bone.node.active = !0;
this.node.position = this.state.position;
this.bone.playAnimation(this.state.animation, 1);
return [ 2 ];
});
});
};
a([ u(dragonBones.ArmatureDisplay) ], e.prototype, "bone", void 0);
return a([ p ], e);
}(c.default);
r.default = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0
} ],
GamePlayDianzanTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "80773mPJTZMX7UMp1HyHzy9", "GamePlayDianzanTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(t) {
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
r.GamePlayDianzanTrait = void 0;
var l = t("../../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../../scripts/base/cache/CacheRender"), u = t("../../../../../../../scripts/base/trait/Trait"), d = t("../../../../../../../scripts/base/ui/UI"), f = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), m = t("../../../../../../../scripts/modules/audio/config/AudioConfig"), h = t("../../../../../../../scripts/modules/binary/vo/BinarySupport"), y = t("../../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo"), g = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), _ = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), v = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), T = t("../../prefab/TraitsPrefabConfig"), b = t("../components/GamePlayDianZan"), S = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.thinkTime = 0;
e.GifBlue = 0;
e.GifBrown = 0;
e.GifSilver = 0;
e.GifGold = 0;
return e;
}
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o;
return s(this, function(i) {
switch (i.label) {
case 0:
v.tp.isBoardEffect_ProxyOnGenerateEnd(t) && this.recordThinkStartTime();
if (!v.tp.isBoardEffect_ProxyOnTouchEnd(t)) return [ 3, 2 ];
e = t.args[0].state, r = e.eliminateCount, o = e.putPosOriginal;
return [ 4, this.showDianzanAnim(r, o) ];

case 1:
i.sent();
i.label = 2;

case 2:
if (v.tp.isGameDataClear_Disk_ProxyResetBoardEffectData(t)) {
this.GifBlue = 0;
this.GifBrown = 0;
this.GifSilver = 0;
this.GifGold = 0;
Cinst(b.default) && d.UI.hideUI(T.TraitsPrefabConfig.GamePlayDianZan);
}
return [ 2 ];
}
});
});
};
e.prototype.recordThinkStartTime = function() {
this.hasUnputBlock() ? this.thinkTime = Date.now() : this.thinkTime = 0;
};
e.prototype.hasUnputBlock = function() {
for (var t = 0; t < 3; t++) {
var e = y.blocksProducerInfo.producerBlocks[t];
if (-1 != e && !f.algorithmStrategyLogic.canPutBlock(e, g.boardInfo.faceBlocks)) return !0;
}
return !1;
};
e.prototype.showDianzanAnim = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, i, a, n, c, u;
return s(this, function(s) {
switch (s.label) {
case 0:
if (0 == this.thinkTime) return [ 2 ];
if (0 === e.length) return [ 2 ];
if (0 == (r = y.blocksProducerInfo.producerBlocks.filter(function(t) {
return -1 != t;
})).length) return [ 2 ];
if (!h.binarySupport.hasLiveWay(g.boardInfo.faceBlocks, y.blocksProducerInfo.producerBlocks)) return [ 2 ];
o = 3 - r.length;
i = Date.now();
a = i - this.thinkTime;
this.thinkTime = i;
n = "";
if (1 == o) if (a <= 5e3) {
n = "copper";
this.GifBrown++;
0 == t && l.audioInfo.play(m.AudioConfig.DianZan2);
} else {
n = "blue";
this.GifBlue++;
0 == t && l.audioInfo.play(m.AudioConfig.DianZan1);
} else if (2 == o) if (a <= 3e3) {
n = "gold";
this.GifGold++;
0 == t && l.audioInfo.play(m.AudioConfig.DianZan4);
} else {
this.GifSilver++;
n = "silver";
0 == t && l.audioInfo.play(m.AudioConfig.DianZan3);
}
return [ 4, p.cacheRender.createOrUpdateCacheListComponents({
tag: "GamePlayDianzanTrait",
prefabUrl: T.TraitsPrefabConfig.GamePlayDianZan.url,
bundleName: "mainTraits",
count: e.length,
typeOrClassName: b.default,
parent: _.gameEffectLayer
}) ];

case 1:
c = s.sent();
for (u = 0; u < c.length; u++) c[u].setState({
position: e[u],
animation: n
});
return [ 2 ];
}
});
});
};
e.prototype.calculateCenterPoint = function(t) {
var e, r, o = 0, i = 0;
try {
for (var a = c(t), n = a.next(); !n.done; n = a.next()) {
var s = n.value;
o += s.x;
i += s.y;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (r = a.return) && r.call(a);
} finally {
if (e) throw e.error;
}
}
var l = o / t.length, p = i / t.length;
return new cc.Vec3(l, p, 0);
};
return a([ classId("GamePlayDianzanTrait") ], e);
}(u.Trait);
r.GamePlayDianzanTrait = S;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../../scripts/base/cache/CacheRender": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig",
"../components/GamePlayDianZan": "GamePlayDianZan"
} ],
Gl_changeBlockFillMTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "65b0bauNDZNk6+/d1HiX2/D", "Gl_changeBlockFillMTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_changeBlockFillMTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_changeBlockFillMTrait") ], e);
}(n.Trait);
r.Gl_changeBlockFillMTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_changeDimension_blockFillTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "790ccTzwJpPiZT2vWmSEO7e", "Gl_changeDimension_blockFillTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_changeDimension_blockFillTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_changeDimension_blockFillTrait") ], e);
}(n.Trait);
r.Gl_changeDimension_blockFillTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_changeWeight_waterSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "29f51g9wGVA8oXREN0Jt5cT", "Gl_changeWeight_waterSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_changeWeight_waterSortTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_changeWeight_waterSortTrait") ], e);
}(n.Trait);
r.Gl_changeWeight_waterSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_deleteDimension_onetTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bfeb86crktF3pjRGosly1al", "Gl_deleteDimension_onetTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_deleteDimension_onetTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_deleteDimension_onetTrait") ], e);
}(n.Trait);
r.Gl_deleteDimension_onetTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_deletePatch1_onetTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0535aUaALhFgZksxV8Pk95u", "Gl_deletePatch1_onetTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_deletePatch1_onetTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_deletePatch1_onetTrait") ], e);
}(n.Trait);
r.Gl_deletePatch1_onetTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_deletePatch4_mahjongTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "70646CR/bBBjIWiwPHK/IJY", "Gl_deletePatch4_mahjongTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_deletePatch4_mahjongTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_deletePatch4_mahjongTrait") ], e);
}(n.Trait);
r.Gl_deletePatch4_mahjongTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_initCapablity_onetTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "70e788oCc1DJ4SeQGefdg6A", "Gl_initCapablity_onetTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_initCapablity_onetTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_initCapablity_onetTrait") ], e);
}(n.Trait);
r.Gl_initCapablity_onetTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_jingZiQiDrawTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c99b2p7kwhBvZScaCB9kgZV", "Gl_jingZiQiDrawTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_jingZiQiDrawTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_jingZiQiDrawTrait") ], e);
}(n.Trait);
r.Gl_jingZiQiDrawTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_jingZiQiWinTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d5c788dbbZG6rhK/V0uftPu", "Gl_jingZiQiWinTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_jingZiQiWinTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_jingZiQiWinTrait") ], e);
}(n.Trait);
r.Gl_jingZiQiWinTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_jingZiQi_ADTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1fb21Y7hR9HdpiAnSfMPKy4", "Gl_jingZiQi_ADTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_jingZiQi_ADTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_jingZiQi_ADTrait") ], e);
}(n.Trait);
r.Gl_jingZiQi_ADTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_newSkin_waterSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "87d7bjTgqVOO5KHfSYI2w6X", "Gl_newSkin_waterSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_newSkin_waterSortTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_newSkin_waterSortTrait") ], e);
}(n.Trait);
r.Gl_newSkin_waterSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_newTube_waterSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "18a12H3qztM8Z2r2tm0WsRf", "Gl_newTube_waterSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_newTube_waterSortTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_newTube_waterSortTrait") ], e);
}(n.Trait);
r.Gl_newTube_waterSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_noGuide_waterSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9f12crJN7FBGapxQj4jZvqm", "Gl_noGuide_waterSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_noGuide_waterSortTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_noGuide_waterSortTrait") ], e);
}(n.Trait);
r.Gl_noGuide_waterSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_question_waterSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "31ce6KTYbhMWZQl7l4Pc+uB", "Gl_question_waterSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_question_waterSortTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_question_waterSortTrait") ], e);
}(n.Trait);
r.Gl_question_waterSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Gl_revertNum_waterSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "aa780N3tB9IQYh146OIPYnk", "Gl_revertNum_waterSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Gl_revertNum_waterSortTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("Gl_revertNum_waterSortTrait") ], e);
}(n.Trait);
r.Gl_revertNum_waterSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
GuideFirstLifeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "572676BwHhGnI3iwHw/W724", "GuideFirstLifeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GuideFirstLifeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/base/watch/watch"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isBlocksProducerTouchOnTouchMove(t) && s.reactive({
target: t.target,
propertyName: "_canput",
pos: "GuideFirstLifeTrait",
callback: function(e, r, o) {
var i = o ? 116 : 149, a = t.target;
a && a.setState({
SNAP_OFFSET: i
});
}
});
};
return a([ classId("GuideFirstLifeTrait") ], e);
}(n.Trait);
r.GuideFirstLifeTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/watch/watch": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
HardTopicTriggerRoundTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c9925Vx6oRPRI0LIut5HGef", "HardTopicTriggerRoundTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.HardTopicTriggerRoundTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), l = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), p = t("../../../../../../../scripts/modules/game/type/GameType"), u = t("../../../../../../../scripts/modules/game/vo/GameInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (d.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingDiffAlgorithm(t)) {
if (u.gameInfo.gameMode !== p.GameMode.Class) return;
storage.getItem("classGameNum", 0) >= this.props.gameNum && c.algorithmStrategyInfo.setAlgorithmList(l.algorithmStrategyLogic.replaceAlgorithmType(c.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.KUN_NAN_TI, s.OFFER_TYPE.HEJI_ALGORITHMENTROPY));
}
};
return a([ classId("HardTopicTriggerRoundTrait") ], e);
}(n.Trait);
r.HardTopicTriggerRoundTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
HighHardSetFps120Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5bc52jV/WpAPobAAi+m/Nc+", "HighHardSetFps120Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.HighHardSetFps120Trait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isPerformance_ProxyOnGameInitComplete(t) && this.setFrameRateForHighDevice();
};
e.prototype.setFrameRateForHighDevice = function() {
if (s.deviceInfo.isHighLevel) {
var t = this.props.fpsNumber || 120;
s.deviceInfo.setDeviceFPS(t);
}
};
return a([ classId("HighHardSetFps120Trait") ], e);
}(n.Trait);
r.HighHardSetFps120Trait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
HotAreaAdaptScreenBottomStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3703cuIdh5Nhp4FPGEeF/5h", "HotAreaAdaptScreenBottomStateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.HotAreaAdaptScreenBottomStateTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isBlocksProducerTouchChangeTouchBox(t)) {
var e = t.args[0], r = e.y + e.height - 50, o = new cc.Rect(e.x, 50, e.width, r);
t.args[0] = o;
}
};
return a([ classId("HotAreaAdaptScreenBottomStateTrait") ], e);
}(n.Trait);
r.HotAreaAdaptScreenBottomStateTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
HotAreaClickUtilTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "063e0TYckVBn4+XihcN6mFL", "HotAreaClickUtilTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.HotAreaClickUtilTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/blocksProducer/components/BlocksProducerItem"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeWidth = 0;
return e;
}
e.prototype.onActive = function(t) {
if (c.tp.isBlocksProducerTouchChangeTouchBox(t)) {
for (var e = t.args[1], r = t.args[2], o = [], i = 0; i < (null == e ? void 0 : e.length); i++) {
var a = e[i], n = a.getComponent(s.default);
0 != a.opacity && o.push(n.state.index);
}
if (0 == o.includes(1) && (0 == r || 2 == r)) {
var l = t.args[0], p = l.width;
l.width = 3 * p / 2;
2 === r && (l.x = l.x - p / 2);
t.args[0] = l;
}
}
};
return a([ classId("HotAreaClickUtilTrait") ], e);
}(n.Trait);
r.HotAreaClickUtilTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/blocksProducer/components/BlocksProducerItem": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsCacheReviveNumTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bf131EKSCRNioj35K0BSsQK", "IsCacheReviveNumTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsCacheReviveNumTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function() {};
return a([ classId("IsCacheReviveNumTrait") ], e);
}(t("../../../../../../../scripts/base/trait/Trait").Trait);
r.IsCacheReviveNumTrait = n;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0
} ],
IsCollectElement15Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "83b492WBhJMcJ5aFz79BonQ", "IsCollectElement15Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.IsCollectElement15Trait = void 0;
var s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo"), u = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), d = t("../../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config"), f = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), m = t("../../../../../../../scripts/modules/collectionProducer/vo/CollectionProducerGameInfo"), h = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e, r;
h.tp.isChapterConfig_ProxyGetChapterGamePath(t) && 1 === s.storage.getItem("chapterPeriodsIndex", 1) && (t.args[0] = d.ChapterConfig_Config.levelJson61Path);
if (h.tp.isChapterCollectionProducer_ProxyProduceCollection(t)) {
m.collectionProducerGameInfo._collectiomTrait = !0;
var o = [ [], [], [] ], i = s.storage.getItem("chapterNum", 0), a = f.chapterConfigInfo.chapterDatasCfg[i].Condition.RequiredCollections, c = [];
try {
for (var y = n(a), g = y.next(); !g.done; g = y.next()) {
var _ = g.value, v = s.storage.getItem("chapterCollectRemainCollectItems", {})[_.Key] || 0;
if (!(v <= 0)) {
for (var T = 0, b = 0; b < 8; b++) for (var S = 0; S < 8; S++) u.boardInfo.faceBlocks[b][S] == _.Key && T++;
var P = _.Value, O = T + P - v, C = O / P < 1.25, I = Math.ceil(1.25 * P - O);
I && C && c.push([ _, I ]);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
g && !g.done && (r = y.return) && r.call(y);
} finally {
if (e) throw e.error;
}
}
var A = 0, R = Math.random();
switch (a.length) {
case 1:
A = Math.floor(3 * R) + 2;
break;

case 2:
A = Math.floor(3 * R) + 3;
break;

default:
A = Math.floor(3 * R) + 4;
}
for (var E = 0; E < A && c.length > 0; E++) {
var w = Math.floor(Math.random() * c.length), G = (_ = c[w])[0], k = Math.floor(Math.random() * l.algorithmInfo.blockIdList.length), L = p.algorithmPosInfo.getPos(l.algorithmInfo.blockIdList[k]).length;
o[k].push({
Key: G.Key,
pos: Math.floor(Math.random() * L)
});
_[1] = _[1] - 1;
0 == _[1] && c.splice(w, 1);
}
for (var N = 0; N < o.length; N++) {
o[N].sort(function() {
return Math.random() - .5;
});
var D = o[N];
if (D.length > 0) {
L = p.algorithmPosInfo.getPos(l.algorithmInfo.blockIdList[N]).length;
var F = Math.min(L, D.length), j = [], B = D[0].pos;
for (E = 0; E < F; E++) {
var M = D[E], x = (B + E) % L;
M.pos = x;
j.push(M);
}
o[N] = j;
}
}
var H = o.map(function(t) {
return t.length > 0 ? t.reduce(function(t, e) {
t[e.pos] = e;
return t;
}, {}) : [];
});
s.storage.setItem("chapterCollectionLists", H);
t.returnState = !0;
}
};
return a([ classId("IsCollectElement15Trait") ], e);
}(c.Trait);
r.IsCollectElement15Trait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/collectionProducer/vo/CollectionProducerGameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsFirstHomeGuideTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5c40fW7Cs5IdL7hBXlAGWaB", "IsFirstHomeGuideTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsFirstHomeGuideTrait = void 0;
var n = t("../../../../../../../scripts/base/date/Date"), s = t("../../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/game/vo/GameInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../prefab/TraitsPrefabConfig"), f = t("../components/traits/FirstHomeGuideComponent"), m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._journeyBtnNode = null;
e._classBtnNode = null;
return e;
}
e.prototype.data = function() {
return {
isFromSetting: !1,
isFirstDay: !1
};
};
e.prototype.onActive = function(t) {
if (u.tp.isModeChoiceAddChildToBtn(t)) {
var e = t.args[0], r = t.args[1];
this._journeyBtnNode = e;
this._classBtnNode = r;
if (c.storage.getItem("IsFirstHomeGuideTrait", {
isClickChoiceBtn: !1
}).isClickChoiceBtn) {
this.addNewMod(e, "newMod_init", !1);
this.addNewMod(r, "continue_init", !1);
return;
}
var o = this.state, i = o.isFromSetting, a = o.isFirstDay;
if (i && a) {
this.addNewMod(e, "newMod_init", !0);
this.addNewMod(r, "continue_init", !1);
this.setState({
isFromSetting: !1,
isFirstDay: !1
});
this.dotGuideFirst(1, 0);
return;
}
this.setState({
isFromSetting: !1,
isFirstDay: !1
});
this.addNewMod(e, "newMod_init", !0);
this.addNewMod(r, "continue_init", !0);
this.dotGuideFirst(2, 1);
}
if (u.tp.isModeChoiceOnJourneyClick(t)) {
0 !== this.getVisibleNum() && this.dotGuideDuring(1);
c.storage.setItem("IsFirstHomeGuideTrait", {
isClickChoiceBtn: !0
});
}
if (u.tp.isModeChoiceOnClassClick(t)) {
0 !== this.getVisibleNum() && this.dotGuideDuring(2);
c.storage.setItem("IsFirstHomeGuideTrait", {
isClickChoiceBtn: !0
});
}
if (u.tp.isSetup_ProxyOnClick_home(t)) {
var s = c.storage.getItem("classHighScore", 0), l = c.storage.getItem("classGameNum", 0);
a = n.getTodayDate() == n.convertTimestampToDate(p.gameInfo.firstEntryTime) && (s > 1e3 || l >= 5);
this.setState({
isFromSetting: !0,
isFirstDay: a
});
}
};
e.prototype.getVisibleNum = function() {
var t = 0;
if (cc.isValid(this._journeyBtnNode)) {
var e = this._journeyBtnNode.getChildByName("IsFirstHomeGuide");
cc.isValid(e) && e.active && (t += 1);
}
if (cc.isValid(this._classBtnNode)) {
e = this._classBtnNode.getChildByName("IsFirstHomeGuide");
cc.isValid(e) && e.active && (t += 1);
}
return t;
};
e.prototype.addNewMod = function(t, e, r) {
if (cc.isValid(t)) {
var o = t.getChildByName("IsFirstHomeGuide");
if (cc.isValid(o)) {
var i = o.getComponent(f.default);
i && i.setState({
aniName: e,
isVisible: r
});
} else r && s.ResLoader.loadByBundle("mainTraits", d.TraitsPrefabConfig.IsFirstHomeGuide.url, cc.Prefab, function(o, i) {
if (o) ; else if (cc.isValid(t)) {
var a = cc.instantiate(i);
a.setParent(t);
a.name = "IsFirstHomeGuide";
a.x = t.width / 2 - a.width / 6;
a.y = t.height / 2 + 5;
var n = a.getComponent(f.default);
n && n.setState({
aniName: e,
isVisible: r
});
}
});
}
};
e.prototype.dotGuideDuring = function(t) {
DS("ui_main_guide_during", {
type: t
});
};
e.prototype.dotGuideFirst = function(t, e) {
DS("ui_main_guide_first", {
num: t,
entertype: e
});
};
return a([ classId("IsFirstHomeGuideTrait") ], e);
}(l.Trait);
r.IsFirstHomeGuideTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/date/Date": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig",
"../components/traits/FirstHomeGuideComponent": "FirstHomeGuideComponent"
} ],
IsI18NSwitchTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "93081UqjilHdp3qYdhuKtgW", "IsI18NSwitchTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsI18NSwitchTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isDotInfoDC(t) && (t.data.language = "english");
};
return a([ classId("IsI18NSwitchTrait") ], e);
}(n.Trait);
r.IsI18NSwitchTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenAdReadyLowTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a7200Cns4BHeIW6Hby9y33K", "IsOpenAdReadyLowTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenAdReadyLowTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo"), c = t("../../../../../../../scripts/modules/game/type/GameType"), l = t("../../../../../../../scripts/modules/game/vo/GameInfo"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.days = 6;
e._adReadyLowConfig = null;
return e;
}
e.prototype.data = function() {
return {
todayDate: {
date: "",
succNum: 0,
allNum: 0,
playNum: 0
},
canEnterState: !1,
succNum: 0,
allNum: 0,
currentRate: 0
};
};
e.prototype.onCreate = function() {
this._adReadyLowConfig = storage.getItem("AdReadyLow", {
adReadyDateList: []
});
if (this._adReadyLowConfig.adReadyDateList.length > 0) {
this.getTodayInfo();
this.getSixDayReadyAndAction();
this.state.canEnterState = !0;
} else {
this.state.todayDate.date = this.formatDate(new Date());
this._adReadyLowConfig.adReadyDateList.push(this.state.todayDate);
storage.setItem("AdReadyLow", this._adReadyLowConfig);
}
};
e.prototype.onActive = function(t) {
if ((p.tp.isAdvertisement_FullScene_ProxyShieldPlayAdvertisement(t) || p.tp.isChapterAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) || p.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t)) && this.isLowRate() && !this.isPlayAd()) {
t.args[0] = !0;
t.returnState = !0;
}
if ((p.tp.isAdvertisement_Load_ProxyIsCanLoadClassFullScreenAd(t) || p.tp.isAdvertisement_Load_ProxyIsCanLoadChapterFullScreenAd(t)) && this.isNoAdLoadAd()) {
t.args[0] = !1;
t.returnState = !0;
}
(p.tp.isAdvertisement_ProxyOnGameReplay(t) || p.tp.isAdvertisement_ProxyOnGameOverGameEndPre(t)) && this.addTodyNum(0, 0, 1);
if (p.tp.isAdvertisement_Native_ProxyHandleCallback(t)) {
if (l.gameInfo.gameMode !== c.GameMode.Class && l.gameInfo.gameMode !== c.GameMode.Chapter) return;
1 === t.args[0] && s.advertisementGameInfo.judgeInterstitialstate(s.advertisementGameInfo.advertisementParemeters) && this.addTodyNum(1, 0, 0);
}
if (p.tp.isClassAdvertisement_FullScreenProxyShowFullSuccess(t) || p.tp.isAdvertisement_FullScene_ProxyShowFullSuccess(t) || p.tp.isChapterAdvertisement_FullScreenProxyShowFullSuccess(t)) {
if (l.gameInfo.gameMode !== c.GameMode.Class && l.gameInfo.gameMode !== c.GameMode.Chapter) return;
this.addTodyNum(0, 1, 0);
}
};
e.prototype.isLowRate = function() {
var t;
if (!this.state.canEnterState) return !1;
if (0 === this.state.allNum) return !1;
var e = null !== (t = this.props.rate) && void 0 !== t ? t : 0;
return this.state.currentRate <= e;
};
e.prototype.isPlayAd = function() {
return this.state.todayDate.playNum % 2 == 0;
};
e.prototype.isNoAdLoadAd = function() {
var t = !1;
this.isLowRate() ? (this.state.todayDate.playNum + 1) % 2 == 0 ? t = !1 : 0 === this.props.cacheAd && (this.state.todayDate.playNum + 1) % 2 != 0 && (t = !0) : t = !1;
return t;
};
e.prototype.getTodayInfo = function() {
for (var t = this.formatDate(new Date()), e = !1, r = 0; r < this._adReadyLowConfig.adReadyDateList.length; r++) {
var o = this._adReadyLowConfig.adReadyDateList[r];
if (o.date === t) {
this.state.todayDate = o;
e = !0;
break;
}
}
if (!e) {
var i = new Date();
i.setHours(0, 0, 0);
this.state.todayDate.date = this.formatDate(i);
this._adReadyLowConfig.adReadyDateList.push(this.state.todayDate);
storage.setItem("AdReadyLow", this._adReadyLowConfig);
}
};
e.prototype.getSixDayReadyAndAction = function() {
for (var t = storage.getItem("AdReadyLow", {
adReadyDateList: []
}), e = new Date(), r = new Date(e.getTime() - 864e5 * this.days), o = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime(), i = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime(), a = 0; a < t.adReadyDateList.length; a++) {
var n = t.adReadyDateList[a], s = new Date(n.date), c = new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
if (c >= o && c <= i) {
this.state.succNum += n.succNum;
this.state.allNum += n.allNum;
}
}
0 !== this.state.allNum && (this.state.currentRate = this.state.succNum / this.state.allNum);
};
e.prototype.addTodyNum = function(t, e, r) {
void 0 === t && (t = 0);
void 0 === e && (e = 0);
void 0 === r && (r = 0);
this.addReadyNum(t);
this.addActionNum(e);
this.addPlayNum(r);
storage.setItem("AdReadyLow", this._adReadyLowConfig);
};
e.prototype.addReadyNum = function(t) {
this.state.todayDate.succNum >= this.state.todayDate.allNum || (this.state.todayDate.succNum += t);
};
e.prototype.addActionNum = function(t) {
this.state.todayDate.allNum += t;
};
e.prototype.addPlayNum = function(t) {
void 0 === t && (t = 1);
this.state.todayDate.playNum += t;
};
e.prototype.formatDate = function(t, e) {
void 0 === e && (e = "yyyy-MM-dd");
var r = t.getFullYear().toString(), o = (t.getMonth() + 1).toString().padStart(2, "0"), i = t.getDate().toString().padStart(2, "0"), a = t.getHours().toString().padStart(2, "0"), n = t.getMinutes().toString().padStart(2, "0"), s = t.getSeconds().toString().padStart(2, "0");
return e.replace("yyyy", r).replace("MM", o).replace("dd", i).replace("HH", a).replace("mm", n).replace("ss", s);
};
return a([ classId("IsOpenAdReadyLowTrait") ], e);
}(n.Trait);
r.IsOpenAdReadyLowTrait = u;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenBannerTimeCtrTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1bd27vy6pVNsbLKJG6vCKSF", "IsOpenBannerTimeCtrTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenBannerTimeCtrTrait = void 0;
var c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/base/ui/UI"), u = t("../../../../../../../scripts/base/watch/watch"), d = t("../../../../../../../scripts/falcon/EventManager"), f = t("../../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerShow"), m = t("../../../../../../../scripts/modules/game/type/GameType"), h = t("../../../../../../../scripts/modules/game/vo/GameInfo"), y = t("../../../../../../../scripts/modules/memory/vo/MemoryInfo"), g = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), _ = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._delayId = null;
e._data = null;
return e;
}
e.prototype.data = function() {
return {
isStartup: !0,
bannerStatus: "idle",
bannerShowCount: 0,
isGameEnd: !1
};
};
e.prototype.onCreate = function() {
var t = this;
p.UI.addEventListener("close", function(e) {
e === g.PrefabConfig.ClassGame && (t.state.isGameEnd || t.clear());
});
p.UI.addEventListener("open", function(e) {
"GameLobbyMainView" !== e.name && "JewelGame" !== e.name || t.clear();
});
};
e.prototype.onEnable = function() {
var t = this;
this._data = c.storage.getItem("IsOpenBannerTimeCtrTraitKey", {
gameNum: 0,
startTime: 0
});
u.reactive({
target: this,
propertyName: "_data",
pos: "IsOpenBannerTimeCtrTrait_Enable",
callback: function() {
c.storage.setItem("IsOpenBannerTimeCtrTraitKey", t._data);
}
});
};
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
var e, r = this;
return s(this, function() {
if (!this.doCheck()) return [ 2 ];
_.tp.isAdvertisement_Banner_ProxyOnGameEnd(t) && (this.state.isGameEnd = !0);
if (_.tp.isAdvertisement_Banner_ProxyIsCanPlayAd(t)) {
if (!(e = t.args[0])) return [ 2 ];
this.state.isGameEnd = !1;
if ("show" === this.state.bannerStatus) t.returnValue = e; else {
if (this._delayId) ; else {
this.generateTime();
this._delayId = setInterval(function() {
if (90 - Math.floor((Date.now() - r._data.startTime) / 1e3) <= 0) {
r.clear();
r.startShowBanner();
}
}, 1e3);
}
t.returnValue = !1;
}
}
_.tp.isAdvertisement_Banner_ProxyShowBannerTrait(t) && this.doBannerDS();
_.tp.isAdvertisement_Banner_ProxyOnGameStart(t) && (this.state.bannerShowCount = 0);
return [ 2 ];
});
});
};
e.prototype.generateTime = function() {
if (this.state.isStartup) {
this.state.isStartup = !1;
if (90 - Math.floor((Date.now() - this._data.startTime) / 1e3) <= 0 && c.storage.getItem("classGameNum", 0) !== this._data.gameNum) {
this._data.gameNum = c.storage.getItem("classGameNum", 0);
this._data.startTime = Date.now();
}
} else if (c.storage.getItem("classGameNum", 0) !== this._data.gameNum) {
this._data.gameNum = c.storage.getItem("classGameNum", 0);
this._data.startTime = Date.now();
}
};
e.prototype.doCheck = function() {
if (!NativeBridge.isNative()) return !1;
if (!p.UI.activeState(g.PrefabConfig.ClassGame.url)) return !1;
var t = h.gameInfo.gameMode, e = y.memoryInfo.totalRAM;
return t === m.GameMode.Class && e <= 3;
};
e.prototype.startShowBanner = function() {
if (h.gameInfo.gameMode === m.GameMode.Class && p.UI.activeState(g.PrefabConfig.ClassGame.url)) {
this.state.bannerStatus = "show";
d.EventManager.dispatchModuleEvent(new f.E_Advertisement_BannerShow());
}
};
e.prototype.clear = function() {
this._delayId && clearInterval(this._delayId);
this._delayId = null;
this.state.bannerStatus = "idle";
};
e.prototype.doBannerDS = function() {
this.state.bannerShowCount++;
var t = h.gameInfo.gameType, e = c.storage.getItem("classGameNum", 0), r = c.storage.getItem("classRoundNum", 0), o = c.storage.getItem("classEntryTime", Date.now()), i = (Date.now() - o) / 1e3;
DS("banner_request", {
game_id: e,
game_type: t,
round_id: r,
time_until_the_game_starts: i,
banner_id: this.state.bannerShowCount
});
};
a([ u.watch() ], e.prototype, "_data", void 0);
return a([ classId("IsOpenBannerTimeCtrTrait") ], e);
}(l.Trait);
r.IsOpenBannerTimeCtrTrait = v;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/base/watch/watch": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/advertisement/events/E_Advertisement_BannerShow": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/memory/vo/MemoryInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenBottomCoverChangeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ac9b7KuOLhOe703KK6fFQiL", "IsOpenBottomCoverChangeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenBottomCoverChangeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/blockOutStrategy/vo/BlockOutStrategyGameInfo"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isAlgorithmBottomInfoModifyFinalBlock(t) && (s.blockOutStrategyGameInfo._replaceSecondBlock = !0);
};
return a([ classId("IsOpenBottomCoverChangeTrait") ], e);
}(n.Trait);
r.IsOpenBottomCoverChangeTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/blockOutStrategy/vo/BlockOutStrategyGameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenChangeSkinTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1ea7eO8GRpCgoleTy3Fd2K2", "IsOpenChangeSkinTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(t) {
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
r.IsOpenChangeSkinTrait = void 0;
var l = t("../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../scripts/modules/skin/components/crown/SkinCrownComponent"), d = t("../../../../../../scripts/modules/skin/components/gameBg/SkinGameBgComponent"), f = t("../../../../../../scripts/modules/skin/vo/SkinInfo"), m = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../../../../../scripts/base/storage/Storage"), y = t("../../../../../../scripts/modules/skin/components/board/SkinBoardComponent"), g = t("../../../../../../scripts/modules/skin/components/setup/SkinSetupBtnComponent"), _ = t("../../../../../../scripts/modules/skin/components/setup/SkinSetupBgOuterFrameComponent"), v = t("../../../../../../scripts/modules/skin/components/setup/SkinSetupBgInnerFrameComponent"), T = t("../../../../../../scripts/modules/skin/components/setup/SkinSetupBgSeparationLineComponent"), b = t("../../../../../../scripts/modules/skin/components/setup/SkinSetupCloseBtnComponent"), S = t("../../../../../../scripts/modules/skin/components/setup/SkinSetupDescComponent"), P = t("../../../../../../scripts/modules/setup/components/Setup"), O = t("../../../../../../scripts/modules/skin/components/travelGameBackBtn/SkinTravelGameBackBtnComponent"), C = t("../../../../../../scripts/modules/board/components/Board"), I = t("../../../../../../scripts/modules/skin/components/eliminate/SkinEliminateComponent"), A = t("../../../../../../scripts/modules/skin/components/encourage/SkinEncourageComponent"), R = t("../../../../../../scripts/modules/encourage/type/EncourageType"), E = t("../../../../../../scripts/base/ui/UI"), w = t("../../../../../../scripts/modules/skin/components/combo/SkinComboComponent"), G = t("../../../../../../scripts/modules/skin/components/comboHeart/SkinComboHeartComponent"), k = t("../../../../../../scripts/modules/skin/components/score/SkinScoreComponent"), L = t("../../../../../../scripts/modules/skin/components/travelTargetRibbon/SkinTravelTargetRibbonComponent"), N = t("../../../../../../scripts/modules/block/components/Block"), D = t("../../../../../../scripts/modules/skin/vo/SkinLoadInfo"), F = t("../../../../../../scripts/modules/blocksProducer/components/BlocksProducer"), j = t("../../../../../../scripts/modules/skin/type/SkinType"), B = t("../../../../../../scripts/modules/skin/Base/SkinAtlas"), M = t("../../../../../../scripts/modules/game/type/GameType"), x = t("../../../../../../scripts/modules/game/vo/GameInfo"), H = t("../../../../../../scripts/modules/skin/vo/SkinAtlasInfo"), U = t("../../../../../../scripts/base/timer/Timer"), V = t("../../../../../../scripts/modules/resUrl/type/ResUrlType"), Y = t("../../../../../../scripts/base/decorators/DecoratorTrait"), K = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
(m.tp.isCTClassSkinBonesTraitOnGameBg(t) || m.tp.isCTChapterSkinBonesTraitOnGameBg(t)) && this.updateSkinGameBg(t.args[0]);
(m.tp.isCTClassSkinBonesTraitOnSetupBtn(t) || m.tp.isCTChapterSkinBonesTraitOnSetupBtn(t)) && this.updateSkinSetupBtn(t.args[0]);
m.tp.isCTChapterSkinBonesTraitOnGameBackBtn(t) && this.updateChapterGameBackBtn(t.args[0]);
m.tp.isCTClassSkinBonesTraitOnCrown(t) && this.updateSkinCrown(t.args[0]);
m.tp.isCTClassSkinBonesTraitOnHighScore(t) && this.onHighScore(t.args[0]);
m.tp.isCTClassSkinBonesTraitOnPlayCombo(t) && this.onPlayCombo(t);
m.tp.isCTClassSkinBonesTraitOnPlayComboTips(t) && this.onPlayComboTips(t);
m.tp.isCTClassSkinBonesTraitOnScore(t) && this.onScore(t);
m.tp.isCTChapterSkinBonesTraitOnTravelTargetRibbonBgNode(t) && this.updateTravelTargetRibbonBgNode(t.args[0]);
m.tp.isCTSkinBonesTraitOnBoard(t) && this.updateSkinBoard(t.args[0]);
m.tp.isCTSkinBonesTraitOnSkinBlock(t) && this.onSkinBlock();
m.tp.isCTSkinBonesTraitOnSetup(t) && this.onSkinSetup(t.args[0]);
if (m.tp.isCTSkinBonesTraitOnPlayColumnEliminateEffects(t)) {
if ((null == (e = TRAIT("ComboRainbowTrait")) ? void 0 : e.active) && this.isPlayRainbow(t.args[1].state.eliminateCount, t.args[1].state.continuousEliminateTimes)) return;
if (f.skinInfo.skinEnabled) {
(r = t.args[2]).replace = !0;
r.returnState = !0;
this.playEliminateEffects(t.args[0], t.args[1], "column");
}
}
if (m.tp.isCTSkinBonesTraitOnPlayRowEliminateEffects(t)) {
var e;
if ((null == (e = TRAIT("ComboRainbowTrait")) ? void 0 : e.active) && this.isPlayRainbow(t.args[1].state.eliminateCount, t.args[1].state.continuousEliminateTimes)) return;
if (f.skinInfo.skinEnabled) {
var r;
(r = t.args[2]).replace = !0;
r.returnState = !0;
this.playEliminateEffects(t.args[0], t.args[1], "row");
}
}
m.tp.isCTSkinBonesTraitOnPlayEncourage(t) && f.skinInfo.skinEnabled && this.updateEncourageEffects(t);
m.tp.isCTSkinBonesTraitOnLoadBlock(t) && this.loadSkinBlockOrBlockShadow();
if (m.tp.isCTSkinBonesTraitOnAddBlock(t)) var o = t.args[0];
if (m.tp.isCTSkinBonesTraitOnLoadBlockSpriteFrame(t)) {
o = (a = t.args[0]).target;
var i = a.args[0];
this.loadBlockSpriteFrame(o, i, a);
}
if (m.tp.isCTSkinBonesTraitOnLoadGemsBlockSpriteFrame(t)) {
o = (a = t.args[0]).target, i = a.args[0];
this.loadGemsBlockSpriteFrame(o, i, a);
}
if (m.tp.isCTSkinBonesTraitOnLoadOtherCollectionSpriteFrame(t)) {
var a;
o = (a = t.args[0]).target, i = a.args[0];
this.loadOtherCollectionSpriteFrame(o, i, a);
}
m.tp.isCTSkinBonesTraitOnSwitchSkinId(t) && this.onSwitchSkinId();
if (m.tp.isCTSkinBonesTraitOnUpShadowData(t)) {
o = t.args[0];
var n = t.args[1];
this.onSetShadow(o, n);
}
m.tp.isCTSkinBonesTraitOnSetShadowOpacity(t) && this.onSetShadowRender(t);
if (m.tp.isCTSkinBonesTraitOnSetupRender(t)) {
var s = t.args[0];
this.onSkinSetup(s.node);
}
m.tp.isCTSkinBonesTraitOnBoardSplashAnimationClear_End(t) && this.onBoardSplashAnimationClear_End();
m.tp.isCTClassSkinBonesTraitOnScoreTipShow(t) && this.onScoreTipShow(t.args[0]);
};
e.prototype.onScore = function(t) {
var e = f.skinInfo.skinEnabled, r = t.args[0];
r.curScore.node.opacity = e ? 0 : 255;
var o = r.curScore.node.parent.getChildByName("SkinScore");
if (e) {
cc.isValid(o) && (o.active = !0);
this.updateScore(r.curScore.node, t.args[1]);
} else cc.isValid(o) && (o.active = !1);
};
e.prototype.onSetShadowRender = function(t) {
var e = t.args[0];
if (f.skinInfo.skinEnabled) {
var r = f.skinInfo.blockShadowSkinInfo;
r && (e.args[2] = r.opacity);
}
};
e.prototype.onPlayComboTips = function(t) {
var e = t.args[0], r = f.skinInfo.skinEnabled, o = e.comboAnim.getComponent(dragonBones.ArmatureDisplay);
o && (o.enabled = !r);
if (r) {
var i = t.args[2];
i.replace = !0;
i.returnState = !0;
this.updateComboAnimState(t.args[0], t.args[1]);
(null == (a = TRAIT("Combo_tips_lv_blockTrait")) ? void 0 : a.active) && a.comboAnim && a.comboAnim.comboAnim && (a.comboAnim.comboAnim.enabled = !1);
} else {
e.comboAnim.node && cc.isValid(e.comboAnim.node) && (e.comboAnim.node.opacity = 0);
var a;
(null == (a = TRAIT("Combo_tips_lv_blockTrait")) ? void 0 : a.active) && a.comboAnim && a.comboAnim.comboAnim && (a.comboAnim.comboAnim.enabled = !0);
}
};
e.prototype.onScoreTipShow = function() {};
e.prototype.loadSkinBlockOrBlockShadow = function() {
return n(this, void 0, void 0, function() {
return s(this, function() {
try {
f.skinInfo.loadSkinBlock();
f.skinInfo.loadSkinBlockShadow();
} catch (t) {}
return [ 2 ];
});
});
};
e.prototype.loadBlockSpriteFrame = function(t, e, r) {
return n(this, void 0, void 0, function() {
var o, i, a;
return s(this, function() {
o = f.skinInfo.isColorEffectiveId(e);
i = f.skinInfo.blockSkinInfoList;
if (f.skinInfo.skinEnabled && o && i) {
if (!(a = i[e - 1]) || !a.colorList) {
this.setDefaultBlock(t.block.node);
return [ 2 ];
}
this.setSkinBlockColor(r, t, e, a.colorList);
} else this.setDefaultBlock(t.block.node);
return [ 2 ];
});
});
};
e.prototype.loadGemsBlockSpriteFrame = function(t, e, r) {
return n(this, void 0, void 0, function() {
var o, i;
return s(this, function() {
o = f.skinInfo.isColorEffectiveId(e);
i = f.skinInfo.blockGemstoneSKinInfo;
if (f.skinInfo.skinEnabled && o && i) {
if (!i.status_one || !i.status_two) {
this.setDefaultBlock(t.block.node);
return [ 2 ];
}
this.setSkinBlockColor(r, t, e, i.status_one);
} else this.setDefaultBlock(t.block.node);
return [ 2 ];
});
});
};
e.prototype.loadOtherCollectionSpriteFrame = function(t) {
return n(this, void 0, void 0, function() {
return s(this, function() {
this.setDefaultBlock(t.block.node);
return [ 2 ];
});
});
};
e.prototype.setSkinBlockColor = function(t, e, r, o) {
return n(this, void 0, void 0, function() {
var i, a, n, c;
return s(this, function(s) {
switch (s.label) {
case 0:
i = f.skinInfo.getBlockMaterial(e.block.node);
t.replace = !0;
t.returnState = !0;
return D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 1:
s.sent();
s.label = 2;

case 2:
if (!e || !cc.isValid(e.node)) return [ 2 ];
if (a = B.skinAtlas.getBlockSpriteFrame(o[4].colorParam, r)) {
i.setMaterial(!1);
n = e.block;
if ((c = n.getMaterial(0)) && c.effect && c.effect.passes) {
e.block.spriteFrame = a;
return [ 2 ];
}
}
i.setMaterial(!0);
i.setAllParams(r, o);
return [ 2 ];
}
});
});
};
e.prototype.setDefaultBlock = function(t) {
f.skinInfo.getBlockMaterial(t).setMaterial(!1);
};
e.prototype.blockShadowRender = function() {
return n(this, void 0, void 0, function() {
return s(this, function() {
return [ 2 ];
});
});
};
e.prototype.onSwitchSkinId = function() {
return n(this, void 0, void 0, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
return D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 1:
t.sent();
t.label = 2;

case 2:
f.skinInfo.upDataBlockColorValueMap();
this.updateAllBlockShader();
this.changeSkinBlockCompelet();
return H.skinAtlasInfo.skinAutoAtlas ? [ 4, U.delayTimeFrame(30) ] : [ 3, 4 ];

case 3:
t.sent();
B.skinAtlas.createBlockAtlas();
t.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.changeSkinBlockCompelet = function() {};
e.prototype.onBoardSplashAnimationClear_End = function() {};
e.prototype.onSkinBlock = function() {
return n(this, void 0, void 0, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
return D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 1:
t.sent();
t.label = 2;

case 2:
this.updateAllBlockShader();
return [ 2 ];
}
});
});
};
e.prototype.updateAllBlockShader = function() {
return n(this, void 0, void 0, function() {
var t, e, r, o, i, a, n, l, p, u, d, m, h, y, g, _, v, T;
return s(this, function() {
t = Cinst(F.default);
if (cc.isValid(t)) try {
for (e = c(t.blocksContainer.children), r = e.next(); !r.done; r = e.next()) {
o = r.value;
if (cc.isValid(o.children) && 255 == o.opacity) try {
for (i = (g = void 0, c(o.children)), a = i.next(); !a.done; a = i.next()) if (255 == (d = a.value).opacity && (m = d.getComponent(N.default))) {
m.setState({
color: m.state.color
});
n = f.skinInfo.blockShadowSkinInfo;
this.setBlockShadowMaterial(m.shadow.node, n);
}
} catch (t) {
g = {
error: t
};
} finally {
try {
a && !a.done && (_ = i.return) && _.call(i);
} finally {
if (g) throw g.error;
}
}
}
} catch (t) {
h = {
error: t
};
} finally {
try {
r && !r.done && (y = e.return) && y.call(e);
} finally {
if (h) throw h.error;
}
}
l = Cinst(C.default);
if (cc.isValid(l)) try {
for (p = c(l.blocks.children), u = p.next(); !u.done; u = p.next()) {
d = u.value;
cc.isValid(d) && 255 == d.opacity && (m = d.getComponent(N.default)) && m.setState({
color: m.state.color
});
}
} catch (t) {
v = {
error: t
};
} finally {
try {
u && !u.done && (T = p.return) && T.call(p);
} finally {
if (v) throw v.error;
}
}
return [ 2 ];
});
});
};
e.prototype.updateTravelTargetRibbonBgNode = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!t) return [ 2 ];
if (!f.skinInfo.travelTargetRibbonSkinInfo) return [ 2 ];
e = f.skinInfo.travelTargetRibbonSkinInfo, r = e.travel_target_ribbon_up, o = e.travel_target_ribbon_down;
return [ 4, E.UI.show({
name: "SkinBg" + f.skinInfo.currentSkinId,
url: o.shaderPrefabPath
}, t) ];

case 1:
i = s.sent();
a = f.skinInfo.skinEnabled;
if (i) {
i.x = 0;
i.y = 0;
i.width = t.width;
i.height = t.height;
i.scale = t.scale;
i.zIndex = -100;
(n = i.getComponent(L.default)) && n.setState({
colorData: {
travel_target_ribbon_up: r,
travel_target_ribbon_down: o
}
});
i.active = a;
}
(c = t.getComponent(cc.Sprite)) && (c.enabled = !a);
return [ 2 ];
}
});
});
};
e.prototype.updateScore = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, i, a, n, c, l, p, u, d;
return s(this, function(s) {
switch (s.label) {
case 0:
return D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 1:
s.sent();
s.label = 2;

case 2:
if (!(r = f.skinInfo.scoreSkinInfo)) return [ 2 ];
if (!(o = t.parent.getChildByName("SkinScore"))) {
if (!(i = D.skinLoadInfo.skinResList.score.asset)) return [ 2 ];
(o = cc.instantiate(i)).name = "SkinScore";
t.parent.addChild(o);
}
a = t.x, n = t.y, c = t.scaleX, l = t.scaleY, p = t.width, u = t.height;
o.setPosition(a, n);
o.width = p;
o.height = u;
o.setScale(c, l);
(d = o.getComponent(k.default)) && d.setState({
colorData: r,
score: e
});
return [ 2 ];
}
});
});
};
e.prototype.onHighScore = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i;
return s(this, function() {
if (!(e = t.target)) return [ 2 ];
if (!(r = e.highNode.getChildByName("SkinCrown"))) return [ 2 ];
if (o = r.getComponent(u.default)) {
i = t.args[0];
o.setState({
score: i
});
}
return [ 2 ];
});
});
};
e.prototype.updateComboAnimState = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o, i, a, n, c, l, p, u;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!(r = f.skinInfo.comboHeartSkinInfo) || 0 === r.length) return [ 2 ];
o = r[0].noShaderPrefabPath;
i = t.comboAnim.node;
return [ 4, E.UI.show({
name: "SkinComboTips" + f.skinInfo.currentSkinId,
url: o
}, i) ];

case 1:
a = s.sent();
t.comboAnim.node.active = !0;
t.comboAnim.node.opacity = 255;
n = e.continuousEliminateTimes, c = e.comboAnimState;
l = function(t) {
return t < 7 ? 0 : t < 13 ? 1 : 2;
};
if ([ j.TopInfoType.ShowCombo, j.TopInfoType.CancelCombo, j.TopInfoType.None ].includes(c)) {
p = l(n - 1);
(u = a.getComponent(G.default)) && u.setState({
colorData: r[p],
comboAnimState: e.comboAnimState,
comboLevel: p
});
}
return [ 2 ];
}
});
});
};
e.prototype.onPlayCombo = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c, l, p, u, d;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!f.skinInfo.skinEnabled) return [ 2 ];
(e = t.args[3]).replace = !0;
e.returnState = !0;
r = t.args[0];
o = t.args[1];
i = t.args[2];
if (!(a = f.skinInfo.comboSkinInfo) || 0 === a.length) return [ 2 ];
n = a[0].noShaderPrefabPath;
return [ 4, E.UI.show({
name: "SkinCombo" + f.skinInfo.currentSkinId,
url: n
}, r) ];

case 1:
(c = s.sent()).setPosition(i);
l = o.state, p = l.color, u = l.continuousEliminateTimes;
(d = c.getComponent(w.default)) && d.setState({
colorData: a[p - 1],
continuousEliminateTimes: u
});
return [ 2 ];
}
});
});
};
e.prototype.updateEncourageEffects = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c, l, p, u, d;
return s(this, function(s) {
switch (s.label) {
case 0:
(e = t.args[3]).replace = !0;
e.returnState = !0;
r = t.args[0];
o = t.args[1];
i = t.args[2];
if (!(a = f.skinInfo.encourageSkinInfo) || 0 === a.length) return [ 2 ];
n = a[0].noShaderPrefabPath;
return [ 4, E.UI.show({
name: "SkinEncourage" + f.skinInfo.currentSkinId,
url: n
}, r) ];

case 1:
(c = s.sent()).x = i.x;
c.y = i.y;
if (!(l = c.getComponent(A.default))) return [ 2 ];
switch (o.type) {
case R.EncourageType.NEW_HIGH_SCORE:
f.skinInfo.newHighScoreSkinInfo && l.setState({
eliminateCount: 6,
colorData: f.skinInfo.newHighScoreSkinInfo
});
break;

case R.EncourageType.LEVEL_COLOR:
p = o.eliminateCount, u = o.color;
d = Math.min(5, Math.max(0, p - 2));
l.setState({
eliminateCount: d,
colorData: a[u - 1]
});
}
return [ 2 ];
}
});
});
};
e.prototype.playEliminateEffects = function(t, e, r) {
return n(this, void 0, void 0, function() {
var o, i, a, n, c, p, u, d, m, h, y, g, _, v;
return s(this, function(s) {
switch (s.label) {
case 0:
return [ 4, CinstAsync(C.default) ];

case 1:
o = s.sent();
i = o.boardGrid.getBoundingBoxToWorld();
a = e.state, n = a.eliminateCols, c = a.color, p = a.eliminateRows;
if (!(u = f.skinInfo.eliminateSkinInfo) || 0 === u.length) return [ 2 ];
if (!(d = u[c - 1])) return [ 2 ];
m = d.noShaderPrefabPath;
return [ 4, l.ResLoader.asyncLoad(m, cc.Prefab) ];

case 2:
h = s.sent();
if (!cc.isValid(h) || !cc.isValid(t)) return [ 2 ];
if ("column" === r) for (y in n) {
(_ = cc.instantiate(h)).name = "SkinEliminate" + f.skinInfo.currentSkinId;
t.addChild(_);
if (_) {
(v = _.getComponent(I.default)) && v.setState({
colorData: d
});
_.x = n[y].x;
_.y = i.y + 437;
_.angle = 90;
}
}
if ("row" === r) for (g in p) {
(_ = cc.instantiate(h)).name = "SkinEliminate" + f.skinInfo.currentSkinId;
t.addChild(_);
if (_) {
(v = _.getComponent(I.default)) && v.setState({
colorData: d
});
_.x = cc.view.getVisibleSize().width / 2;
_.y = p[g].y;
_.angle = 0;
}
}
return [ 2 ];
}
});
});
};
e.prototype.isPlayRainbow = function(t, e) {
return x.gameInfo.gameMode === M.GameMode.Class ? t >= 3 || e - 1 + t > 5 : t >= 3;
};
e.prototype.updateChapterGameBackBtn = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c;
return s(this, function(s) {
switch (s.label) {
case 0:
e = f.skinInfo.travelGameBackBtnSkinInfo;
if (!t || !e) return [ 2 ];
r = e.shaderPrefabPath;
return (o = t.getChildByName("SkinBackBtn")) ? [ 3, 2 ] : [ 4, l.ResLoader.asyncLoad(r, cc.Prefab) ];

case 1:
i = s.sent();
(o = cc.instantiate(i)).name = "SkinBackBtn";
t.addChild(o);
s.label = 2;

case 2:
(a = o.getComponent(O.default)) && a.setState({
colorData: e
});
n = f.skinInfo.skinEnabled;
o.active = n;
(c = t.getComponent(cc.Sprite)) && (c.enabled = !n);
return [ 2 ];
}
});
});
};
e.prototype.onSkinSetup = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c, l, p, u, d, m, h, y, g, O, C, I, A, R, E, w, G, k, L;
return s(this, function(s) {
switch (s.label) {
case 0:
return D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 1:
s.sent();
s.label = 2;

case 2:
e = Cinst(P.default);
r = f.skinInfo.setupSkinInfo;
if (!t || !e || !r) return [ 2 ];
this.loadSetup(t);
o = r.setup_outer_frame, i = r.setup_inner_frame, a = r.setup_separation_line, n = r.setup_close_btn, 
c = r.skin_setup_msg;
l = f.skinInfo.skinEnabled;
if (p = t.getChildByName("SkinSetupOuterFrame")) {
p.x = 0;
p.y = 0;
p.width = e.outNode.width;
p.height = e.outNode.height;
(u = p.getComponent(_.default)) && u.setState({
colorData: o
});
p.active = l;
}
(d = e.outNode.getComponent(cc.Sprite)) && (d.enabled = !l);
(m = e.inNode.getComponent(cc.Sprite)) && (m.enabled = !l);
(h = e.inNode.getComponent(cc.Widget)) && h.updateAlignment();
if (y = t.getChildByName("SkinSetupInnerFrame")) {
y.setPosition(0, -22);
y.width = e.inNode.width;
y.height = e.inNode.height;
(g = y.getComponent(v.default)) && g.setState({
colorData: i
});
y.active = l;
}
if (O = e.line.node.getChildByName("SkinSetupSeparationLine")) {
O.setPosition(0, 0);
O.width = e.line.node.width;
O.height = e.line.node.height;
(C = O.getComponent(T.default)) && C.setState({
colorData: a
});
O.active = l;
}
(I = e.line.node.getComponent(cc.Sprite)) && (I.enabled = !l);
A = e.closeBtnNode;
if (R = A.getChildByName("SkinSetupCloseBtn")) {
R.setPosition(0, 0);
R.width = A.width;
R.height = A.height;
R.scale = A.scale;
(E = R.getComponent(b.default)) && E.setState({
colorData: n
});
R.active = l;
}
(w = A.getChildByName("Background")) && (w.active = !l);
if (G = e.titleImg.node.getChildByName("SkinSetupTitle")) {
(k = G.getComponent(S.default)) && k.setState({
colorData: c,
text: "Settings",
fontSize: 60
});
G.active = l;
}
(L = e.titleImg.node.getComponent(cc.Sprite)) && (L.enabled = !l);
return [ 2 ];
}
});
});
};
e.prototype.updateSkinSetupBtn = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n;
return s(this, function(s) {
switch (s.label) {
case 0:
return D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 1:
s.sent();
s.label = 2;

case 2:
return [ 4, U.nextFrame() ];

case 3:
s.sent();
e = f.skinInfo.setupBtnSkinInfo;
if (!t || !e) return [ 2 ];
if (!(r = t.getChildByName("SkinSetupBtn"))) {
if (!(o = D.skinLoadInfo.skinResList.setupBtn.asset)) return [ 2 ];
(r = cc.instantiate(o)).name = "SkinSetupBtn";
t.addChild(r);
r.x = 0;
r.y = 0;
r.zIndex = -100;
}
i = f.skinInfo.skinEnabled;
r.active = i;
(a = t.getComponent(cc.Sprite)) && (a.enabled = !i);
(n = r.getComponent(g.default)) && n.setState({
colorData: e
});
return [ 2 ];
}
});
});
};
e.prototype.updateSkinBoard = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c, p, u, d, m;
return s(this, function(s) {
switch (s.label) {
case 0:
e = f.skinInfo.boardSkinInfo;
if (!t || !e) return [ 2 ];
r = e.board_out_line, o = e.board_bg, i = e.board_line;
a = r.shaderPrefabPath;
return (n = t.getChildByName("SkinBoard")) ? [ 3, 2 ] : [ 4, l.ResLoader.asyncLoad(a, cc.Prefab) ];

case 1:
c = s.sent();
(n = cc.instantiate(c)).name = "SkinBoard";
t.addChild(n);
n.x = 0;
n.y = 0;
n.zIndex = -100;
s.label = 2;

case 2:
p = f.skinInfo.skinEnabled;
n.active = p;
(u = t.getComponent(cc.Sprite)) && (u.enabled = !p);
(d = n.getComponent(y.default)) && ((m = B.skinAtlas.getBoardInfoSpriteFrame(f.skinInfo.currentSkinId, o.color.colorParam)) ? d.setState({
colorData: null,
spriteFrame: m
}) : d.setState({
colorData: {
board_out_line: r,
board_bg: o,
board_line: i
},
spriteFrame: null
}));
return [ 4, U.delayTimeFrame(50) ];

case 3:
s.sent();
B.skinAtlas.createBoardAtlas(n);
return [ 2 ];
}
});
});
};
e.prototype.updateSkinCrown = function(t) {
var e = f.skinInfo.crownSkinInfo, r = D.skinLoadInfo.skinResList.crownAndHightScore.asset;
if (t && r && e) {
var o = e.crown, i = e.crown_score, a = t.getChildByName("SkinCrown");
if (!a) {
(a = cc.instantiate(r)).name = "SkinCrown";
t.addChild(a);
a.x = 0;
a.y = 0;
}
var n = f.skinInfo.skinEnabled;
a.active = n;
var s = t.getChildByName("highImg");
s && (s.active = !n);
var c = t.getChildByName("highNum");
c && (c.active = !n);
var l = a.getComponent(u.default);
if (l) {
var p = h.storage.getItem("classHighScore", 0);
l.setState({
colorData: {
crown: o,
crown_score: i
},
score: p
});
}
}
};
e.prototype.updateSkinGameBg = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n;
return s(this, function(s) {
switch (s.label) {
case 0:
e = f.skinInfo.gameBgSkinInfo;
r = D.skinLoadInfo.skinResList.gameBg.asset;
if (!t || !e || !r) return [ 2 ];
if (!(o = t.getChildByName("SkinGameBg"))) {
(o = cc.instantiate(r)).name = "SkinGameBg";
t.addChild(o);
o.x = 0;
o.y = 0;
}
o.active = f.skinInfo.skinEnabled;
(i = t.getComponent(cc.Sprite)) && (i.enabled = !f.skinInfo.skinEnabled);
(a = o.getComponent(d.default)) && ((n = B.skinAtlas.getBgSpriteFrame(f.skinInfo.currentSkinId, e.color.colorParam)) ? a.setState({
colorData: null,
spriteFrame: n
}) : a.setState({
colorData: e,
spriteFrame: null
}));
x.gameInfo.gameMode === M.GameMode.Class ? H.skinAtlasInfo.skinClassBgBarrier.open() : x.gameInfo.gameMode === M.GameMode.Chapter && H.skinAtlasInfo.skinChapterBgBarrier.open();
return [ 4, U.delayTimeFrame(80) ];

case 1:
s.sent();
B.skinAtlas.createBgAtlas(o);
return [ 2 ];
}
});
});
};
e.prototype.loadSetup = function(t) {
var e = Cinst(P.default), r = f.skinInfo.setupSkinInfo;
if (t && e && r) {
var o = D.skinLoadInfo.skinResList, i = o.setupBgOuter, a = o.setupBgInner, n = o.setupBgSeparationLine, s = o.setupCloseBtn, c = o.setupDesc, l = i.asset, p = t.getChildByName("SkinSetupOuterFrame");
if (!p && l) {
(p = cc.instantiate(l)).name = "SkinSetupOuterFrame";
t.addChild(p);
p.zIndex = -100;
}
var u = a.asset, d = t.getChildByName("SkinSetupInnerFrame");
if (!d && u) {
(d = cc.instantiate(u)).name = "SkinSetupInnerFrame";
t.addChild(d);
d.zIndex = -99;
}
var m = n.asset, h = e.line.node.getChildByName("SkinSetupSeparationLine");
if (!h && m) {
(h = cc.instantiate(m)).name = "SkinSetupSeparationLine";
e.line.node.addChild(h);
h.zIndex = -98;
}
var y = s.asset, g = e.closeBtnNode, _ = g.getChildByName("SkinSetupCloseBtn");
if (!_ && y) {
(_ = cc.instantiate(y)).name = "SkinSetupCloseBtn";
g.addChild(_);
_.zIndex = -97;
}
var v = c.asset, T = e.titleImg.node.getChildByName("SkinSetupTitle");
if (!T) {
(T = cc.instantiate(v)).name = "SkinSetupTitle";
e.titleImg.node.addChild(T);
}
}
};
e.prototype.onSetShadow = function(t, e) {
return n(this, void 0, void 0, function() {
var r, o;
return s(this, function(i) {
switch (i.label) {
case 0:
e.replace = !0;
r = t.shadow;
return f.skinInfo.skinEnabled ? D.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 2 ] : [ 4, D.skinLoadInfo.skinResLoadedBarrier.wait() ] : [ 3, 3 ];

case 1:
i.sent();
i.label = 2;

case 2:
if (o = f.skinInfo.blockShadowSkinInfo) {
e.replace = !0;
e.returnState = !0;
this.setBlockShadowMaterial(r.node, o);
} else this.setDefaultBlockShadow(r.node);
return [ 3, 4 ];

case 3:
this.setDefaultBlockShadow(r.node);
i.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.setBlockShadowMaterial = function(t, e) {
if (f.skinInfo.skinEnabled) {
if (e) {
var r = B.skinAtlas.getBlockSpriteFrame(e.color.colorParam, 1e4);
if (r) {
(o = f.skinInfo.getBlockShadowMaterial(t)).setMaterial(!1);
t.getComponent(cc.Sprite).spriteFrame = r;
} else {
var o;
(o = f.skinInfo.getBlockShadowMaterial(t)).setMaterial(!0);
o.setAllParams(e.color);
}
t.opacity = e.opacity;
}
} else this.setDefaultBlockShadow(t);
};
e.prototype.setDefaultBlockShadow = function(t) {
f.skinInfo.getBlockShadowMaterial(t).setMaterial(!1);
var e = t.getComponent(cc.Sprite);
l.ResLoader.renderSprite(e, V.ResUrlType.SHADOW);
t.opacity = 255;
};
a([ Y.trait("CleanSceneUseSequenceSkinTrait", "清屏换皮肤用固定序列2"), Y.trait("CleanSceneRandomSkinTrait", "清屏时触发随机皮肤") ], e.prototype, "onScoreTipShow", null);
a([ Y.trait("CleanSceneUseSequenceSkinTrait", "清屏换皮肤用固定序列2"), Y.trait("CleanSceneRandomSkinTrait", "清屏时触发随机皮肤") ], e.prototype, "changeSkinBlockCompelet", null);
a([ Y.trait("CleanSceneUseSequenceSkinTrait", "清屏换皮肤用固定序列2"), Y.trait("CleanSceneRandomSkinTrait", "清屏时触发随机皮肤") ], e.prototype, "onBoardSplashAnimationClear_End", null);
return a([ classId("IsOpenChangeSkinTrait") ], e);
}(p.Trait);
r.IsOpenChangeSkinTrait = K;
cc._RF.pop();
}, {
"../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/timer/Timer": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/modules/block/components/Block": void 0,
"../../../../../../scripts/modules/blocksProducer/components/BlocksProducer": void 0,
"../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../scripts/modules/encourage/type/EncourageType": void 0,
"../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../scripts/modules/resUrl/type/ResUrlType": void 0,
"../../../../../../scripts/modules/setup/components/Setup": void 0,
"../../../../../../scripts/modules/skin/Base/SkinAtlas": void 0,
"../../../../../../scripts/modules/skin/components/board/SkinBoardComponent": void 0,
"../../../../../../scripts/modules/skin/components/combo/SkinComboComponent": void 0,
"../../../../../../scripts/modules/skin/components/comboHeart/SkinComboHeartComponent": void 0,
"../../../../../../scripts/modules/skin/components/crown/SkinCrownComponent": void 0,
"../../../../../../scripts/modules/skin/components/eliminate/SkinEliminateComponent": void 0,
"../../../../../../scripts/modules/skin/components/encourage/SkinEncourageComponent": void 0,
"../../../../../../scripts/modules/skin/components/gameBg/SkinGameBgComponent": void 0,
"../../../../../../scripts/modules/skin/components/score/SkinScoreComponent": void 0,
"../../../../../../scripts/modules/skin/components/setup/SkinSetupBgInnerFrameComponent": void 0,
"../../../../../../scripts/modules/skin/components/setup/SkinSetupBgOuterFrameComponent": void 0,
"../../../../../../scripts/modules/skin/components/setup/SkinSetupBgSeparationLineComponent": void 0,
"../../../../../../scripts/modules/skin/components/setup/SkinSetupBtnComponent": void 0,
"../../../../../../scripts/modules/skin/components/setup/SkinSetupCloseBtnComponent": void 0,
"../../../../../../scripts/modules/skin/components/setup/SkinSetupDescComponent": void 0,
"../../../../../../scripts/modules/skin/components/travelGameBackBtn/SkinTravelGameBackBtnComponent": void 0,
"../../../../../../scripts/modules/skin/components/travelTargetRibbon/SkinTravelTargetRibbonComponent": void 0,
"../../../../../../scripts/modules/skin/type/SkinType": void 0,
"../../../../../../scripts/modules/skin/vo/SkinAtlasInfo": void 0,
"../../../../../../scripts/modules/skin/vo/SkinInfo": void 0,
"../../../../../../scripts/modules/skin/vo/SkinLoadInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenChangeTouchSpaceTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9e0e7EfRWNMVaaoF01hVzCc", "IsOpenChangeTouchSpaceTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenChangeTouchSpaceTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.time = new Date().getTime();
return e;
}
e.prototype.onActive = function(t) {
if (s.tp.isBlocksProducerTouchOnTouchStart(t)) {
var e = new Date().getTime();
if (e - this.time < 170) {
t.replace = !0;
t.returnState = !0;
return;
}
this.time = e;
}
};
return a([ classId("IsOpenChangeTouchSpaceTrait") ], e);
}(n.Trait);
r.IsOpenChangeTouchSpaceTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenComboContinuousTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4ef5dFOkrRAXqWUZ9biGMIS", "IsOpenComboContinuousTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenComboContinuousTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isNextCheckComboNum = !1;
return e;
}
e.prototype.data = function() {
return {
continousNum: 0,
isNextCheckCombo: !1,
isStorageOnClear: !1
};
};
Object.defineProperty(e.prototype, "ContinousCount", {
get: function() {
return n.storage.getItem("classComboContinuous", 0);
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
if (c.tp.isClassGameDataClear_Disk_ProxyResetClassScore(t)) {
this.state.continousNum = 0;
n.storage.setItem("classComboContinuous", 0);
}
c.tp.isClassGame_Ready_ProxyResetBlocksProducerTouch(t) && (this.state.continousNum = 0);
if (c.tp.isBlocksProducerTouchTouchFollowUpEliminateTimes(t)) {
var e = t.args[0], r = e.continuousEliminateTimes, o = e.eliminateCount;
0 == this.state.isNextCheckCombo && o >= 1 && (this._isNextCheckComboNum = !1);
if (this.state.isNextCheckCombo) {
if (o < 2) {
this.state.isNextCheckCombo = !1;
this.state.continousNum = 0;
return;
}
if (this.state.continousNum < 3) {
this.state.isNextCheckCombo = !1;
this.state.continousNum = 0;
return;
}
if (this._isNextCheckComboNum) {
this._isNextCheckComboNum = !1;
this.state.isNextCheckCombo = !1;
this.state.continousNum = 0;
return;
}
e.continuousEliminateTimes = this.state.continousNum + 1;
e.unEliminateTimes = 0;
var i = TRAIT("ComboAddRemoveNumTrait");
(null == i ? void 0 : i.active) && i.setState({
preUnEliminateTimes: 0
});
this.state.continousNum = 0;
this._isNextCheckComboNum = !0;
var a = n.storage.getItem("classComboContinuous", 0);
n.storage.setItem("classComboContinuous", a + 1);
}
if (0 == r && 0 != this.state.continousNum) this.state.isNextCheckCombo = !0; else {
this.state.isNextCheckCombo = !1;
this.state.isStorageOnClear ? this.state.isStorageOnClear && o > 0 && (this.state.continousNum = r) : this.state.continousNum = r;
}
}
};
return a([ classId("IsOpenComboContinuousTrait") ], e);
}(s.Trait);
r.IsOpenComboContinuousTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenComboSpecialColor2Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "221fbwDLvZJ1b5/uGuqVRe7", "IsOpenComboSpecialColor2Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenComboSpecialColor2Trait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isClassColorProducer_ProxyProduceColorBase(t)) {
var e = TRAIT("OpenComboSpecialColorTrait");
(null == e ? void 0 : e.active) && e.setState({
isSaveColor: !0
});
}
};
return a([ classId("IsOpenComboSpecialColor2Trait") ], e);
}(n.Trait);
r.IsOpenComboSpecialColor2Trait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenEcpmGpGameDataChacheTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a4e46hfp2JASYR8KTZlEsaR", "IsOpenEcpmGpGameDataChacheTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenEcpmGpGameDataChacheTrait = void 0;
var s = t("../../../../../../../scripts/base/copy/Copy"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), p = t("../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType"), u = t("../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpGameDataChacheInfo"), d = t("../../../../../../../scripts/modules/game/type/GameType"), f = t("../../../../../../../scripts/modules/game/vo/GameInfo"), m = t("../../../../../../../scripts/modules/score/vo/ScoreInfo"), h = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.historyEndlessInfo = [];
e.historyTravelInfo = [];
return e;
}
e.prototype.onCreate = function() {
u.ecpmIsOpenEcpmGpGameDataChacheInfo.initData();
};
e.prototype.onActive = function(t) {
if (h.tp.isChapterDataStatistics_Ecpm_ProxyOnGameReady(t)) {
this.resetData();
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setInitMatrix(s.deepCopy(l.boardInfo.faceBlocks));
var e = t.args[0], r = e.Way, o = e.RequiredScore, i = e.RequiredCollections, a = r == p.ChapterType.score ? {
RequiredScore: o,
RequiredCollections: i
} : {
RequiredScore: 0,
RequiredCollections: []
};
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setItemCollectTarget(JSON.stringify(a));
}
if (h.tp.isChapterDataStatistics_Ecpm_ProxyOnStartGame(t)) {
var c = t.args[0];
t.args[1] && this.resetData();
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setGameTime(Math.floor((new Date().getTime() - c) / 1e3));
}
if (h.tp.isChapterDataStatistics_Ecpm_ProxyOnBlocksTouchEnd(t) && (g = t.args[0])) {
this.OperateEndEvent(g.state.eliminateCount, g.state.clearScreen, t.args[4]);
0 == t.args[1] && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setScore(t.args[2]);
}
h.tp.isChapterDataStatistics_Ecpm_ProxyOnGameReplay(t) && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setIsReplay(!0);
if (h.tp.isChapterDataStatistics_Ecpm_ProxyOnGameEndEcpm(t)) {
var f = t.args[3];
if ((f.Way == p.ChapterType.score ? f.score / f.RequiredScore : f.collectNum / f.RequiredCollections.reduce(function(t, e) {
return t + e.Value;
}, 0)) < 1) {
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setMatrix(s.deepCopy(l.boardInfo.faceBlocks));
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setDeadBlockList(f.producerBlocks);
}
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setRoundCnt(t.args[1]);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setGameTime(Math.floor((new Date().getTime() - f.entryTime) / 1e3));
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setMutipleCleanCnt(u.ecpmIsOpenEcpmGpGameDataChacheInfo.clean_cnt - u.ecpmIsOpenEcpmGpGameDataChacheInfo.one_clean);
if (f.Way == p.ChapterType.collect) {
var y = [];
Object.entries(f.collectRemainCollectItems).forEach(function(t) {
var e = n(t, 2), r = e[0], o = e[1];
y.push({
Key: Number(r),
Value: o
});
});
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setItemCollectDetail(JSON.stringify(y));
}
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setSessionEndData(d.GameMode.Chapter);
}
h.tp.isClassDataStatistics_Ecpm_ProxyOnGameReady(t) && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setInitMatrix(s.deepCopy(l.boardInfo.faceBlocks));
h.tp.isClassDataStatistics_Ecpm_ProxyOnGuideChange(t) && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setInitMatrix(s.deepCopy(l.boardInfo.faceBlocks));
if (h.tp.isClassDataStatistics_Ecpm_ProxyOnStartGame(t)) {
c = t.args[0];
t.args[1] && this.resetData();
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setGameTime(Math.floor((new Date().getTime() - c) / 1e3));
}
if (h.tp.isClassDataStatistics_Ecpm_ProxyOnBlocksTouchEnd(t)) {
var g;
if (g = t.args[0]) {
this.OperateEndEvent(g.state.eliminateCount, g.state.clearScreen, t.args[2]);
var _ = storage.getItem("classDataStatisticsInfo", null);
_ && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setMaxCombo(_.comboMaxNum);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setHisMaxScore(m.scoreInfo.highRecordScore);
}
}
if (h.tp.isClassDataStatistics_Ecpm_ProxyOnGameReplay(t)) {
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setIsReplay(!0);
this.saveGameEndData(t);
}
h.tp.isClassDefaultBoard_ProxyOnGameOverPre(t) && this.saveGameEndData(t);
if (h.tp.isClassDataStatistics_Ecpm_ProxyOnClassStrategyRunState(t) && 1 == storage.getItem("classHardQuestionNum", 0)) {
var v = n(t.args, 2), T = v[0];
c = v[1];
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setFirstHardRound(T);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setFirstHardTime(Math.floor((new Date().getTime() - c) / 1e3));
}
if (h.tp.isChapterDataStatistics_Ecpm_ProxyOnChapterStrategyRunState(t) && 1 == storage.getItem("chapterHardQuestionNum", 0)) {
var b = n(t.args, 2);
T = b[0], c = b[1];
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setFirstHardRound(T);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setFirstHardTime(Math.floor((new Date().getTime() - c) / 1e3));
}
};
e.prototype.saveGameEndData = function(t) {
var e = n(t.args, 4), r = e[0], o = e[1], i = e[2], a = e[3];
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setRoundCnt(r);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setGameTime(Math.floor((new Date().getTime() - o) / 1e3));
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setMatrix(s.deepCopy(l.boardInfo.faceBlocks));
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setDeadBlockList(a);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setMutipleCleanCnt(u.ecpmIsOpenEcpmGpGameDataChacheInfo.clean_cnt - u.ecpmIsOpenEcpmGpGameDataChacheInfo.one_clean);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setScore(i);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setHisMaxScore(m.scoreInfo.highRecordScore);
var c = storage.getItem("classDataStatisticsInfo", null);
c && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setMaxCombo(c.comboMaxNum);
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setSessionEndData(d.GameMode.Class);
};
e.prototype.getDefaultInfo = function() {
return {
isReplay: !1,
init_matrix: null,
clear_screen_cnt: 0,
dead_block_list: null,
matrix: null,
first_clear_screen_round_cnt: -1,
round_cnt: 0,
clean_cnt: 0,
one_clean: 0,
mutiple_clean_cnt: 0,
game_time: 0,
score: 0,
first_hard_round: -1,
first_hard_time: -1,
max_combo: 0,
his_max_score: 0,
item_collect_detail: "",
item_collect_target: ""
};
};
e.prototype.resetData = function() {
f.gameInfo.gameMode === d.GameMode.Class ? u.ecpmIsOpenEcpmGpGameDataChacheInfo.setDataCacheEndless(this.getDefaultInfo()) : f.gameInfo.gameMode === d.GameMode.Chapter && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setDataCacheTravel(this.getDefaultInfo());
};
e.prototype.OperateEndEvent = function(t, e, r) {
if (t > 0) {
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setCleanCnt(u.ecpmIsOpenEcpmGpGameDataChacheInfo.clean_cnt + 1);
1 == t && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setOneClean(u.ecpmIsOpenEcpmGpGameDataChacheInfo.one_clean + 1);
}
if (e) {
u.ecpmIsOpenEcpmGpGameDataChacheInfo.setClearScreenCnt(u.ecpmIsOpenEcpmGpGameDataChacheInfo.clear_screen_cnt + 1);
1 == u.ecpmIsOpenEcpmGpGameDataChacheInfo.clear_screen_cnt && u.ecpmIsOpenEcpmGpGameDataChacheInfo.setFirstClearScreenRoundCnt(r);
}
};
return a([ classId("IsOpenEcpmGpGameDataChacheTrait") ], e);
}(c.Trait);
r.IsOpenEcpmGpGameDataChacheTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/copy/Copy": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/chapterConfig/type/ChapterConfigType": void 0,
"../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpGameDataChacheInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenEcpmGpTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b8b08nUNuNCmJs5NDt+Npvq", "IsOpenEcpmGpTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenEcpmGpTrait = void 0;
var s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/advertisement/type/AdvertisementType"), p = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), u = t("../../../../../../../scripts/modules/ecpm/config/EcpmIsOpenEcpmGpConfig"), d = t("../../../../../../../scripts/modules/ecpm/types/EcpmIsOpenEcpmGpType"), f = t("../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpCanPlayInfo"), m = t("../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpConfigInfo"), h = t("../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpStoreInfo"), y = (t("../../../../../../../scripts/modules/gm/config/GmTraitConfig"), 
t("../../../../../../../scripts/modules/gm/vo/GmMainInfo"), t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate")), g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {};
e.prototype.onActive = function(t) {
this.addTraitGmMenu();
if (y.tp.isLaunch_ProxyOnTraitConfigInitComplete(t)) {
h.ecpmIsOpenEcpmGpStoreInfo.init();
m.ecpmIsOpenEcpmGpConfigInfo.setConfig(this.props);
}
if (y.tp.isClassDataStatistics_Ecpm_ProxyOnGameEndEcpm(t)) {
var e = n(t.args, 2), r = e[0], o = e[1];
h.ecpmIsOpenEcpmGpStoreInfo.setGameTime(r);
h.ecpmIsOpenEcpmGpStoreInfo.setGameRound(o);
var i = s.storage.getItem("classDataStatisticsInfo", null);
h.ecpmIsOpenEcpmGpStoreInfo.setCleanNum([ i.eliminate3, i.eliminate4, i.eliminate5, i.eliminate6, i.eliminateAll ], i.comboMaxNum);
}
if (y.tp.isChapterDataStatistics_Ecpm_ProxyOnGameEndEcpm(t)) {
var a = n(t.args, 2);
r = a[0], o = a[1];
h.ecpmIsOpenEcpmGpStoreInfo.setGameTime(r);
h.ecpmIsOpenEcpmGpStoreInfo.setGameRound(o);
}
if (y.tp.isChapterAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) || y.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t)) if (this.checkCanPlayAd()) {
t.args[0] = !1;
h.ecpmIsOpenEcpmGpStoreInfo.increaseAdTimes(1);
h.ecpmIsOpenEcpmGpStoreInfo.setPlayAdTime(Date.now());
} else t.args[0] = !0;
if (y.tp.isEcpmInfoSetLastAdEcpm(t)) {
var c = t.args[0], p = t.args[1];
c === l.AdvertiseType.interstitial && h.ecpmIsOpenEcpmGpStoreInfo.setEcpm(p);
}
};
e.prototype.addTraitGmMenu = function() {};
e.prototype.checkCanPlayAd = function() {
var t, e, r, o, i, a, s, c, l;
if (!h.ecpmIsOpenEcpmGpStoreInfo.bInit || !m.ecpmIsOpenEcpmGpConfigInfo.bInit) return !0;
var y = null !== (r = null === (e = p.deviceInfo.data) || void 0 === e ? void 0 : e.country) && void 0 !== r ? r : "other", g = m.ecpmIsOpenEcpmGpConfigInfo.configData, _ = m.ecpmIsOpenEcpmGpConfigInfo.regEcpm, v = m.ecpmIsOpenEcpmGpConfigInfo.props;
if (1 == v.noCut && y && u.IsOpenEcpmGpConfig.noCutCountrys.includes(y.toLocaleLowerCase())) return !0;
var T = h.ecpmIsOpenEcpmGpStoreInfo.gameTime, b = h.ecpmIsOpenEcpmGpStoreInfo.gameRound, S = h.ecpmIsOpenEcpmGpStoreInfo.maxComboNum, P = h.ecpmIsOpenEcpmGpStoreInfo.adTimesAfterStart, O = h.ecpmIsOpenEcpmGpStoreInfo.cleanNumArr, C = h.ecpmIsOpenEcpmGpStoreInfo.ecpm, I = h.ecpmIsOpenEcpmGpStoreInfo.data, A = I.lastPlayAdTimestamp, R = I.lastPlayAdTimestamp2, E = I.lastPlayAdTimestamp3, w = I.lastPlayAdTimestamp4, G = I.adTimesDay, k = I.adTimesDay2, L = I.cutTimes, N = ((t = {})[d.EIsOpenEcpmGpCutAdType.Type_0_AdTimesDayThenCountry] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_1_AdTimesDayThenLocalCountry, [ g, A, C, G, y ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_1_AdTimesDay2ThenRemoteEcpm] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_2_AdTimeDay2ThenRemoteEcpm, [ g, R, C, k, P ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_2_RemoteAdTimestampAndEcpm] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_3_RemoteAdTimestampAndEcpm, [ g, E ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_3_RemoteRevOrPropsCutTimes] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_4_RemoteRevOrPropsCutTimes, [ g, L, null !== (o = v.cutTimes) && void 0 !== o ? o : 0 ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_4_RemoteRevOrPropsCutTimes] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_4_RemoteRevOrPropsCutTimes, [ g, L, null !== (i = v.cutTimes) && void 0 !== i ? i : 0 ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_5_PropsRandom] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_5_PropsRandom, [ null !== (a = v.random) && void 0 !== a ? a : 0 ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_6_PropsGameTime] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_6_PropsGameTime, [ g, T ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_7_RemoteRound] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_7_RemoteRound, [ g, b ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_8_RemoteAdTimestamp] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_8_RemoteAdTimestamp, [ g, w ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_9_RemoteRev] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_9_RemoteRev, [ g ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_10_EcpmAndPropsRegEcpm] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_10_EcpmAndPropsRegEcpm, [ _ ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_11_GameTimeAndPropsCutTimes] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_11_GameTimeAndPropsCutTimes, [ T, null !== (s = v.cutTimes) && void 0 !== s ? s : 0 ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_12_CountryThenPropsRegEcpm] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_12_CountryThenPropsRegEcpm, [ _ ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_13_MaxComboNumAndPropsComboNum] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_13_MaxComboNumAndPropsComboNum, [ S, null !== (c = v.comboNum) && void 0 !== c ? c : 0 ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_14_ClearNumAndPropsComboNum] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_14_ClearNumAndPropsComboNum, [ O, null !== (l = v.comboNum) && void 0 !== l ? l : 0 ] ], 
t[d.EIsOpenEcpmGpCutAdType.Type_15_LocalMaxCombos] = [ f.ecpmIsOpenEcpmGpCanPlayInfo.checkCanPlay_15_LocalMaxCombos, [ g, S ] ], 
t), D = n(N[m.ecpmIsOpenEcpmGpConfigInfo.adType], 2), F = D[0], j = D[1];
return !F || !j || F.apply(f.ecpmIsOpenEcpmGpCanPlayInfo, j);
};
return a([ classId("IsOpenEcpmGpTrait") ], e);
}(c.Trait);
r.IsOpenEcpmGpTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/advertisement/type/AdvertisementType": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/ecpm/config/EcpmIsOpenEcpmGpConfig": void 0,
"../../../../../../../scripts/modules/ecpm/types/EcpmIsOpenEcpmGpType": void 0,
"../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpCanPlayInfo": void 0,
"../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpConfigInfo": void 0,
"../../../../../../../scripts/modules/ecpm/vo/EcpmIsOpenEcpmGpStoreInfo": void 0,
"../../../../../../../scripts/modules/gm/config/GmTraitConfig": void 0,
"../../../../../../../scripts/modules/gm/vo/GmMainInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenEndaniDealyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bcd083EGwpIcI67PHiwdow0", "IsOpenEndaniDealyTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenEndaniDealyTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/game/type/GameType"), c = t("../../../../../../../scripts/modules/game/vo/GameInfo"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
l.tp.isGameOver_Splash_ProxyOnGameEndSplash(t) && c.gameInfo.gameMode === s.GameMode.Class && (t.args[0] = .5);
};
return a([ classId("IsOpenEndaniDealyTrait") ], e);
}(n.Trait);
r.IsOpenEndaniDealyTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenFreeADByBadReceiveTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5ad01B3AyBG8or4J3ybN27J", "IsOpenFreeADByBadReceiveTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenFreeADByBadReceiveTrait = void 0;
var n, s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/binary/vo/BinarySupport"), l = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), p = t("../../../../../../../scripts/modules/game/type/GameType"), u = t("../../../../../../../scripts/modules/game/vo/GameInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate");
(function(t) {
t[t.none = 0] = "none";
t[t.clearTime = 1] = "clearTime";
t[t.clearHVCount = 2] = "clearHVCount";
t[t.time = 3] = "time";
t[t.revive = 4] = "revive";
t[t.condition = 5] = "condition";
})(n || (n = {}));
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.type = n.none;
e.round = 0;
e._saveData = [];
e.roundWeightData = null;
e._config = null;
return e;
}
e.prototype.onActive = function(t) {
if (u.gameInfo.gameMode == p.GameMode.Class) {
d.tp.isClassAdvertisement_FullScreenProxyOnGameReady(t) && this.init();
if (d.tp.isClassAdvertisement_FullScreenProxyOnReviveShow(t)) {
this.revive++;
this.save();
}
d.tp.isClassAdvertisement_FullScreenProxyOnBlocksEndState(t) && this.saveWeightValue();
if (d.tp.isClassAdvertisement_FullScreenProxyOnBlocksTouchEnd(t)) {
var e = t.args[0].state, r = e.eliminateCols, o = e.eliminateRows, i = Object.keys(r).length, a = Object.keys(o).length;
if (i > 0 || a > 0) {
this.clearTimes++;
this.clearHVCount += i / 8 + a / 8;
this.save();
}
}
if (d.tp.isClassAdvertisement_FullScreenProxyOnGameEndDataClearPre(t)) {
var n = storage.getItem("classSpendTime", 0);
this.time = n / 1e3;
this.save();
}
if (d.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) && this.judgeIsBadReceive()) {
t.args[0] = !0;
t.returnState = !0;
}
}
};
Object.defineProperty(e.prototype, "saveData", {
get: function() {
return this._saveData;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "clearTimes", {
get: function() {
return this._saveData.length > 0 && this._saveData[this.saveData.length - 1].clearTimes;
},
set: function(t) {
this._saveData.length > 0 && (this._saveData[this.saveData.length - 1].clearTimes = t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "clearHVCount", {
get: function() {
return this._saveData.length > 0 && this._saveData[this.saveData.length - 1].clearHVCount;
},
set: function(t) {
this._saveData.length > 0 && (this._saveData[this.saveData.length - 1].clearHVCount = t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "revive", {
get: function() {
return this.saveData[this.saveData.length - 1].revive;
},
set: function(t) {
this._saveData.length > 0 && (this.saveData[this.saveData.length - 1].revive = t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "time", {
get: function() {
return this.saveData[this.saveData.length - 1].time;
},
set: function(t) {
this.saveData.length > 0 && (this.saveData[this.saveData.length - 1].time = t);
},
enumerable: !1,
configurable: !0
});
e.prototype.saveWeightValue = function() {
var t = c.binarySupport.getWeightValue(l.boardInfo.faceBlocks), e = storage.getItem("classRoundNum", 0);
this.roundWeightData || this.initRoundWight();
if (t <= 400) {
if (this.roundWeightData.roundNum == e - 1 && this.roundWeightData.weight > 400) {
this.revive++;
this.save();
this.roundWeightData.roundNum = e;
this.roundWeightData.weight = t;
this.saveRoundWight();
}
} else {
this.roundWeightData.roundNum = e;
this.roundWeightData.weight = t;
this.saveRoundWight();
}
};
e.prototype.dealCurrent = function() {
var t = storage.getItem("classGameNum", 0);
if (0 == this.saveData.length) {
this._saveData.push({
gameId: t,
clearTimes: 0,
clearHVCount: 0,
revive: 0,
time: 0
});
this.save();
} else if (this.saveData[this.saveData.length - 1].gameId != t) {
this._saveData.length >= this.round && this._saveData.shift();
this.setNewData();
}
};
e.prototype.init = function() {
this._saveData = storage.getItem("isOpenFreeADByBadReceiveKey", []);
var t = this.props;
if (t) {
this._config = t;
t.round && (this.round = t.round);
if (t.conditionCount && t.conditionCount > 0) this.type = n.condition; else {
t.clearTimes && (this.type = n.clearTime);
t.clearHVCount && (this.type = n.clearHVCount);
t.totalTime && (this.type = n.time);
t.reviveTimes && (this.type = n.revive);
}
this.dealCurrent();
this.initRoundWight();
}
};
e.prototype.setNewData = function() {
var t = {
gameId: storage.getItem("classGameNum", 0),
clearTimes: 0,
clearHVCount: 0,
revive: 0,
time: 0
};
this._saveData.push(t);
this.save();
};
e.prototype.save = function() {
this.saveData && storage.setItem("isOpenFreeADByBadReceiveKey", this.saveData);
};
e.prototype.initRoundWight = function() {
this.roundWeightData || (this.roundWeightData = storage.getItem("isOpenFreeADByBadReceive_roundWightKey", {
roundNum: -1,
weight: 0
}));
};
e.prototype.saveRoundWight = function() {
this.roundWeightData && storage.setItem("isOpenFreeADByBadReceive_roundWightKey", this.roundWeightData);
};
e.prototype.setData = function(t) {
if (t) {
for (var e = -1, r = 0; r < this._saveData.length; r++) if (this._saveData[r].gameId == t.gameId) {
e = r;
break;
}
-1 != e && (this._saveData[e] = t);
}
};
e.prototype.calcAvg = function(t, e) {
var r = t.length, o = 0;
t.forEach(function(t) {
o += t[e];
});
return o / r;
};
e.prototype.calcSum = function(t, e) {
var r = 0;
t.forEach(function(t) {
r += t[e];
});
return r;
};
e.prototype.judgeIsBadReceive = function() {
var t = this;
if (this.saveData.length <= 0) return !1;
var e = this.saveData[this.saveData.length - 1];
if (this.type == n.condition) {
var r = 0;
[ "clearTimes", "clearHVCount", "revive", "time" ].forEach(function(o) {
var i = 0;
if ("revive" == o) {
i = t._config.reviveTimes;
e[o] < t.calcSum(t.saveData, o) * i && r++;
} else {
i = "time" == o ? t._config.totalTime : t._config[o];
e[o] < t.calcAvg(t.saveData, o) * i && r++;
}
});
if (r >= this._config.conditionCount) return !0;
} else if (this.type == n.clearTime) {
var o = this.calcAvg(this._saveData, "clearTimes");
if (e.clearTimes < o * this._config.clearTimes) return !0;
} else if (this.type == n.clearHVCount) {
o = this.calcAvg(this._saveData, "clearHVCount");
if (e.clearHVCount < o * this._config.clearHVCount) return !0;
} else if (this.type == n.time) {
o = this.calcAvg(this._saveData, "time");
if (e.time < o * this._config.totalTime) return !0;
} else if (this.type == n.revive) {
var i = this.calcSum(this._saveData, "revive");
if (e.revive < i * this._config.reviveTimes) return !0;
}
return !1;
};
return a([ classId("IsOpenFreeADByBadReceiveTrait") ], e);
}(s.Trait);
r.IsOpenFreeADByBadReceiveTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLFruitMidRollAdTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "04c5beU3+5C+oMvF/NsdLPP", "IsOpenGLFruitMidRollAdTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLFruitMidRollAdTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLFruitMidRollAdTrait") ], e);
}(n.Trait);
r.IsOpenGLFruitMidRollAdTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLFruitRandomWeightTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bd6e2Uq3k1OeKj693X7yeUx", "IsOpenGLFruitRandomWeightTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLFruitRandomWeightTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLFruitRandomWeightTrait") ], e);
}(n.Trait);
r.IsOpenGLFruitRandomWeightTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLHallMoreGamesPopupTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "375b7vch3lEKLADKLs/lg0p", "IsOpenGLHallMoreGamesPopupTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLHallMoreGamesPopupTrait = void 0;
var c = t("../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../scripts/base/ui/UI"), p = t("../../../../../../scripts/modules/prefab/PrefabConfig"), u = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), f = t("../../../../../../scripts/base/loader/ResLoader"), m = t("../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo"), h = t("../../../../../../scripts/modules/gameLobby/components/GameLobbyGLHallMoreGamesPopupView"), y = t("../../../../../../scripts/modules/gameLobby/type/GamelobbyType"), g = t("../../../../../../scripts/modules/setup/components/Setup"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._releaseNewComobSceneCallBack = null;
return e;
}
e.prototype.data = function() {
return {
isHallShowing: !1
};
};
e.prototype.onActive = function(t) {
u.tp.isGameLobbyGLHallMoreGamesPopupViewOnShow(t) && this.changeGameConfig();
u.tp.isSetup_ProxyOnClick_moreGames(t) && this.onSetup_ProxyOnClick_moreGames(t);
(u.tp.isSetup_ProxyOnClick_exit(t) || u.tp.isJewelFail_ProxyOnExitClick(t)) && l.UI.show(p.PrefabConfig.GLHallMoreGamesPopupView, d.gameAlertLayer);
u.tp.isGameLobbyGLHallMoreGamesPopupViewOnDestroy(t) && this.clear();
};
e.prototype.onSetup_ProxyOnClick_moreGames = function(t) {
return n(this, void 0, void 0, function() {
var e;
return s(this, function(r) {
switch (r.label) {
case 0:
m.gameLobby_DataInfo.setIsRed(!0);
(e = Cinst(g.default)) && e.setState({
redPoint: {
moreGames: !m.gameLobby_DataInfo.isRed
}
});
DS("ui_setting_moregame_button_click");
t.returnState = !0;
t.replace = !0;
return [ 4, m.gameLobby_DataInfo.enterGameLobby(function() {
var t = Cinst(h.default);
null == t || t.setState({
isShow: !1
});
}) ];

case 1:
r.sent();
l.UI.hideUI(p.PrefabConfig.Setup);
return [ 2 ];
}
});
});
};
e.prototype.changeGameConfig = function() {};
e.prototype.show = function(t) {
return n(this, void 0, void 0, function() {
var e;
return s(this, function(r) {
switch (r.label) {
case 0:
(null == (e = TRAIT("GameLobbyTrait")) ? void 0 : e.active) && null == e._nodePopupBinder && f.ResLoader.asyncLoadByBundle(y.GameLobbyBundleName.GL_HALL, "gl_moreGamesPopup/prefabs/GLHallMoreGamesPopupEnter", cc.Prefab, void 0, {
isRemote: !0
}).then(function(t) {
if (t) {
e._nodePopupBinder = cc.instantiate(t);
cc.game.addPersistRootNode(e._nodePopupBinder);
m.gameLobby_DataInfo.onAfterEnterGameLobby(!0);
}
});
return [ 4, l.UI.show(p.PrefabConfig.GLHallMoreGamesPopupView, d.gameAlertLayer) ];

case 1:
r.sent();
m.gameLobby_DataInfo.onAfterEnterGameLobby();
this.state.isHallShowing = !0;
this.logEventHallOpen();
t && t();
return [ 2 ];
}
});
});
};
e.prototype.logEventHallOpen = function() {
if (storage.getItem("gl_hall_logEvent_usr_data_hall_open", 0)) cc.systemEvent.emit("gameLobby_submit", {
eventType: "usr_data_hall_open",
data: {
is_first_open: 0,
is_show: 1
}
}); else {
storage.setItem("gl_hall_logEvent_usr_data_hall_open", 1);
cc.systemEvent.emit("gameLobby_submit", {
eventType: "usr_data_hall_open",
data: {
is_first_open: 1,
is_show: 1
}
});
}
};
e.prototype.enterGame = function(t) {
return n(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
return [ 4, m.gameLobby_DataInfo.enterGame(t) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.emit = function(t) {
cc.systemEvent.emit(y.GameLobbyEmitEventType.MINIGAME_EVENT, t);
};
e.prototype.releaseNewComobSceneBlocks = function() {
this._releaseNewComobSceneCallBack && this._releaseNewComobSceneCallBack();
};
e.prototype.getGameList = function(t) {
this.emit({
type: y.GameLobbyEventType.GetMiniGameList,
gameKey: "",
call: function(e) {
t && t(e);
},
data: null,
source: y.GameLobbyEventSource.Main
});
};
e.prototype.resumeGameSpeed = function() {
var t = TRAIT("GameLobbyTrait");
(null == t ? void 0 : t.active) && t.resumeGameSpeed();
};
e.prototype.clear = function() {
this.state.isHallShowing = !1;
};
return a([ classId("IsOpenGLHallMoreGamesPopupTrait") ], e);
}(c.Trait);
r.IsOpenGLHallMoreGamesPopupTrait = _;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../scripts/modules/gameLobby/components/GameLobbyGLHallMoreGamesPopupView": void 0,
"../../../../../../scripts/modules/gameLobby/type/GamelobbyType": void 0,
"../../../../../../scripts/modules/gameLobby/vo/GameLobby_DataInfo": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../scripts/modules/setup/components/Setup": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLMahjongAllComboDieTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a40f5B22qpL2IMlkQ88dWIT", "IsOpenGLMahjongAllComboDieTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLMahjongAllComboDieTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLMahjongAllComboDieTrait") ], e);
}(n.Trait);
r.IsOpenGLMahjongAllComboDieTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLMahjongClickLockDarkTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cd3630fJ0lMApmrwzbA3PJU", "IsOpenGLMahjongClickLockDarkTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLMahjongClickLockDarkTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLMahjongClickLockDarkTrait") ], e);
}(n.Trait);
r.IsOpenGLMahjongClickLockDarkTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLMahjongComboEffectTextTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "56274qLcFxOVI/Yg/tHcQKr", "IsOpenGLMahjongComboEffectTextTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLMahjongComboEffectTextTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLMahjongComboEffectTextTrait") ], e);
}(n.Trait);
r.IsOpenGLMahjongComboEffectTextTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLMahjongFourWayLockTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "917fefqBHdNtKu3W6UbL2hf", "IsOpenGLMahjongFourWayLockTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLMahjongFourWayLockTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLMahjongFourWayLockTrait") ], e);
}(n.Trait);
r.IsOpenGLMahjongFourWayLockTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGLMahjongGuidePhase2Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b14bfZ0okZMzaDShNimMrTO", "IsOpenGLMahjongGuidePhase2Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGLMahjongGuidePhase2Trait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("IsOpenGLMahjongGuidePhase2Trait") ], e);
}(n.Trait);
r.IsOpenGLMahjongGuidePhase2Trait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenGlLoadAllGameBackTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4da11nSxXhC4aRaNfwdZZlm", "IsOpenGlLoadAllGameBackTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenGlLoadAllGameBackTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isWork: !1
};
};
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t) && (this.state.isWork = !0);
};
return a([ classId("IsOpenGlLoadAllGameBackTrait") ], e);
}(n.Trait);
r.IsOpenGlLoadAllGameBackTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenIncreaseGlobalVolumeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "36545vRd8pJlI7mv9AOD2zb", "IsOpenIncreaseGlobalVolumeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenIncreaseGlobalVolumeTrait = void 0;
var n = t("../../../../../../../scripts/base/audio/AudioInfo"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isHijacked = !1;
return e;
}
e.prototype.onActive = function(t) {
if (c.tp.isAudio_ProxyOnGameInitComplete(t) && !this.isHijacked) {
this.isHijacked = !0;
this.hijackPlay();
this.monitorMusicVolume();
}
};
e.prototype.hijackPlay = function() {
n.audioInfo.onBeforePlay(function(t) {
if (t.type === n.AudioType.EFFECT) {
var e = t.volume;
t.volume = 1.3 * e;
}
});
};
e.prototype.monitorMusicVolume = function() {
n.audioInfo.onBeforeMusicVolumeSet(function(t) {
var e = t.volume;
t.volume = 1.3 * e;
});
};
return a([ classId("IsOpenIncreaseGlobalVolumeTrait") ], e);
}(s.Trait);
r.IsOpenIncreaseGlobalVolumeTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenJourneyAnotherStyleTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a12b6lLUUVHwJTH4FjU9CJD", "IsOpenJourneyAnotherStyleTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenJourneyAnotherStyleTrait = r.OpenJourneyAnotherStyleTraitType = void 0;
var n, s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate");
(function(t) {
t[t.TYPE_SCORE = 0] = "TYPE_SCORE";
t[t.TYPE_ELIMINATE_2 = 1] = "TYPE_ELIMINATE_2";
t[t.TYPE_ELIMINATE_3 = 2] = "TYPE_ELIMINATE_3";
t[t.TYPE_ELIMINATE_4 = 3] = "TYPE_ELIMINATE_4";
t[t.TYPE_COMBO_3 = 4] = "TYPE_COMBO_3";
t[t.TYPE_COMBO_5 = 5] = "TYPE_COMBO_5";
t[t.TYPE_COMBO_10 = 6] = "TYPE_COMBO_10";
})(n = r.OpenJourneyAnotherStyleTraitType || (r.OpenJourneyAnotherStyleTraitType = {}));
var p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
scoreArray: [ 0, 0, 0, 0 ],
isAlready: !1
};
};
e.prototype.onCreate = function() {
this.state.scoreArray = s.storage.getItem("IsOpenJourneyAnotherStyleTraitKey", [ 0, 0, 0, 0 ]);
};
e.prototype.onActive = function(t) {
if (l.tp.isLaunchInfoOpenChapterModule(t)) {
t.returnValue = this.isCompleted();
t.returnState = !0;
t.replace = !0;
}
l.tp.isLaunch_ProxyOnTraitConfigInitComplete(t) && this.checkIsAlready();
if (l.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && !this.state.isAlready) {
this.resetData();
this.checkIsAlready();
}
if (l.tp.isClassGameDataClear_Disk_ProxyResetClassScore(t) && !this.state.isAlready) {
this.resetData();
this.checkIsAlready();
}
if (l.tp.isClassScore_ProxyOnTouchEnd(t)) {
var e = t.args[0].state, r = e.eliminateCount, o = e.continuousEliminateTimes;
if (r > 0) {
this.addScoreByRemoveNum(r);
o > 0 && this.addScoreByCombo(o - 1);
}
}
l.tp.isClassScore_ProxyComputeScoreAddOption(t) && this.addScore();
};
e.prototype.addScoreByRemoveNum = function(t) {
2 === t ? this.addScore(n.TYPE_ELIMINATE_2) : 3 === t ? this.addScore(n.TYPE_ELIMINATE_3) : t >= 4 && this.addScore(n.TYPE_ELIMINATE_4);
};
e.prototype.addScoreByCombo = function(t) {
3 === t ? this.addScore(n.TYPE_COMBO_3) : 5 === t ? this.addScore(n.TYPE_COMBO_5) : 10 === t && this.addScore(n.TYPE_COMBO_10);
};
e.prototype.addScore = function(t) {
void 0 === t && (t = n.TYPE_SCORE);
if (!(this.state.scoreArray[0] > 19)) if (s.storage.getItem("classGuideStep", 0) < 3) {
var e = s.storage.getItem("classScore", 0);
this.state.scoreArray[3] = e;
this.saveScoreArray();
} else {
var r = 0;
switch (t) {
case n.TYPE_SCORE:
if ((e = s.storage.getItem("classScore", 0)) - this.state.scoreArray[3] >= 1e3) {
r += 2;
this.state.scoreArray[3] = e;
}
break;

case n.TYPE_ELIMINATE_2:
r += 2;
break;

case n.TYPE_ELIMINATE_3:
r += 5;
break;

case n.TYPE_ELIMINATE_4:
r += 10;
break;

case n.TYPE_COMBO_3:
r += 5;
break;

case n.TYPE_COMBO_5:
r += 10;
break;

case n.TYPE_COMBO_10:
r += 20;
}
var o = s.storage.getItem("classHighScore", 0);
if (o >= 4e3 && 0 == this.state.scoreArray[1]) {
r += 8;
this.state.scoreArray[1] = 1;
} else if (o >= 2e3 && 0 == this.state.scoreArray[2]) {
r += 4;
this.state.scoreArray[2] = 1;
}
if (r > 0) {
this.state.scoreArray[0] += r;
this.saveScoreArray();
}
}
};
e.prototype.checkIsAlready = function() {
this.state.isAlready = ~~this.state.scoreArray[0] > 19;
};
e.prototype.resetData = function() {
this.state.scoreArray[3] = 0;
this.saveScoreArray();
};
e.prototype.isCompleted = function() {
var t = this.state.scoreArray, e = this.state.isAlready;
return !!(t[0] > 19 && e);
};
e.prototype.saveScoreArray = function() {
s.storage.setItem("IsOpenJourneyAnotherStyleTraitKey", this.state.scoreArray);
};
e.prototype.getJourneyOpenReport = function() {
return this.isCompleted() ? 1 : 0;
};
return a([ classId("IsOpenJourneyAnotherStyleTrait") ], e);
}(c.Trait);
r.IsOpenJourneyAnotherStyleTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenMotivatorComboTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9433eujnYhCMbs7GiDlWLe8", "IsOpenMotivatorComboTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenMotivatorComboTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/game/type/GameType"), c = t("../../../../../../../scripts/modules/game/vo/GameInfo"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
color: 0,
eliminateCount: 0
};
};
e.prototype.onActive = function(t) {
if (c.gameInfo.gameMode === s.GameMode.Class) {
if (l.tp.isClassScore_ProxyOnTouchEnd(t)) {
var e = t.args[0].state, r = e.color, o = e.eliminateCount;
this.state.color = r;
this.state.eliminateCount = o;
}
if (l.tp.isOpenComboModelTraitGetScoreInfo(t)) {
var i = this.state;
r = i.color, o = i.eliminateCount;
if (r >= 1 && r <= 7 && o >= 1) {
var a = "fonts/comboScoreTip/isOpenMotivatorCombo/num_" + r, n = t.args[3];
t.args[0] = 148;
t.args[1] = a;
t.args[2] = "+" + n;
t.args[3] = -55;
}
}
}
};
return a([ classId("IsOpenMotivatorComboTrait") ], e);
}(n.Trait);
r.IsOpenMotivatorComboTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenNoVideoNoRevivieTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c35e2HrBYpFbq0o9VJHi+yX", "IsOpenNoVideoNoRevivieTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenNoVideoNoRevivieTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/native/NativeAd"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isClassRevive_ProxyIsTraitTriggerRevive(t) && (s.NativeAd.getReadyByAdType("reward") || (t.args[0] = !1));
if (c.tp.isChapterRevive_ProxyIsOpenRevive(t) && !s.NativeAd.getReadyByAdType("reward")) {
t.args[0] = !1;
t.args[1] = !1;
}
};
return a([ classId("IsOpenNoVideoNoRevivieTrait") ], e);
}(n.Trait);
r.IsOpenNoVideoNoRevivieTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/native/NativeAd": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenOperaPosTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "df73arF0PlE0pJTy56+CYly", "IsOpenOperaPosTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenOperaPosTrait = void 0;
var n = t("../../../../../../../scripts/base/arrays/arrays"), s = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), u = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), d = (t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), 
t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName")), f = t("../../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig"), m = t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), h = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo"), y = t("../../../../../../../scripts/modules/game/type/GameType"), g = t("../../../../../../../scripts/modules/game/vo/GameInfo"), _ = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.recordMaxNum = 5;
return e;
}
e.prototype.data = function() {
return {
modeKey: "classOperaChangePos",
isUseMultiple: !1,
isFixIsOpenOperaPos: !1
};
};
e.prototype.onActive = function(t) {
if (_.tp.isGameDataClear_Disk_ProxyResetAlgorithmData(t)) {
this.state.modeKey = g.gameInfo.gameMode === y.GameMode.Class ? "classOperaChangePos" : "chapterOperaChangePos";
if ((e = this.getPosInfo()).rcurRcordNum < this.recordMaxNum) {
e.rcurRcordNum++;
c.storage.setItem(this.state.modeKey, e);
}
}
if (_.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t) || _.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t)) {
this.state.modeKey = g.gameInfo.gameMode === y.GameMode.Class ? "classOperaChangePos" : "chapterOperaChangePos";
this.generateOperaPosArrInfo();
}
if (_.tp.isAlgorithmStrategy_BlocksPos_ProxyOnCollectBlockInfo(t)) {
var e, r = t.args[0].touchIndex;
this.state.modeKey = g.gameInfo.gameMode === y.GameMode.Class ? "classOperaChangePos" : "chapterOperaChangePos";
if ((e = this.getPosInfo()).rcurRcordNum < this.recordMaxNum) {
e.posInfo["" + r] = Number(e.posInfo["" + r]) + 1;
c.storage.setItem(this.state.modeKey, e);
}
}
(_.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || _.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t)) && (t.replace = !0);
};
e.prototype.getPosInfo = function() {
var t, e = c.storage.getItem(this.state.modeKey, null);
if (null == e) {
e = {
posInfo: (t = {}, t[m.OPERA_POS_TYPE.LEFT] = 0, t[m.OPERA_POS_TYPE.MIDDLE] = 0, 
t[m.OPERA_POS_TYPE.RIGHT] = 0, t),
rcurRcordNum: 0
};
c.storage.setItem(this.state.modeKey, e);
}
e.type = m.OPERA_POS_TYPE.NONE;
return e;
};
e.prototype.getOperaPosType = function() {
var t = this.getPosInfo();
if (!t || t.rcurRcordNum < this.recordMaxNum) return m.OPERA_POS_TYPE.NONE;
var e = t.posInfo["" + m.OPERA_POS_TYPE.LEFT], r = t.posInfo["" + m.OPERA_POS_TYPE.MIDDLE], o = t.posInfo["" + m.OPERA_POS_TYPE.RIGHT], i = m.OPERA_POS_TYPE.LEFT, a = e;
if (o >= a) {
i = m.OPERA_POS_TYPE.RIGHT;
a = o;
}
r >= a && (i = m.OPERA_POS_TYPE.MIDDLE);
return i;
};
e.prototype.generateOperaPosArrInfo = function() {
if (d.algorithmName.algoActualId != u.OFFER_TYPE.REVIVE && d.algorithmName.algoActualId != u.OFFER_TYPE.REVIVE_CLEAR) {
var t = d.algorithmName.algoActualName;
if (!t.some(function(t) {
return t === p.ALGO_NAME_TYPE.NAME_ZIMUSHANG;
}) && !t.some(function(t) {
return "消除爽" === t;
})) {
var e = this.getPosInfo();
if (e.rcurRcordNum >= this.recordMaxNum) {
e.type = this.getOperaPosType();
e.type == m.OPERA_POS_TYPE.LEFT || e.type == m.OPERA_POS_TYPE.MIDDLE || (e.type, 
m.OPERA_POS_TYPE.RIGHT);
h.algorithmStrategyBlocksPosInfo.blocksPosList == m.OPERA_POS_TYPE.LEFT || (h.algorithmStrategyBlocksPosInfo.blocksPosList == m.OPERA_POS_TYPE.MIDDLE ? h.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(f.operaReversePosMidele) : h.algorithmStrategyBlocksPosInfo.blocksPosList == m.OPERA_POS_TYPE.RIGHT && h.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(f.operaReversePosRight));
this.setIsUseMultiple(e);
c.storage.setItem(this.state.modeKey, e);
} else {
if (this.state.isFixIsOpenOperaPos) {
if (h.algorithmStrategyBlocksPosInfo.blocksPosList == m.OPERA_POS_TYPE.MIDDLE) ; else {
h.algorithmStrategyBlocksPosInfo._blocksPosList = m.OPERA_POS_TYPE.RANDOM;
var r = n.shuffleArray([ 0, 1, 2 ]);
h.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(r);
c.storage.setItem(this.state.modeKey, e);
}
return;
}
if (this.state.isUseMultiple) {
h.algorithmStrategyBlocksPosInfo._blocksPosList = m.OPERA_POS_TYPE.RANDOM;
r = n.shuffleArray([ 0, 1, 2 ]);
h.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(r);
c.storage.setItem(this.state.modeKey, e);
}
}
}
}
};
e.prototype.setIsUseMultiple = function(t) {
f.operaPosLeft;
if (t.type == m.OPERA_POS_TYPE.MIDDLE) {
h.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(f.operaPosMiddle);
f.operaPosMiddle;
h.algorithmStrategyBlocksPosInfo._blocksPosList = m.OPERA_POS_TYPE.MIDDLE;
} else if (t.type == m.OPERA_POS_TYPE.RIGHT) {
h.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(f.operaPosRight);
f.operaPosRight;
h.algorithmStrategyBlocksPosInfo._blocksPosList = m.OPERA_POS_TYPE.RIGHT;
}
};
a([ s.trait("CTGMIsOpenOperaPosTrait", "GM 设置左中右") ], e.prototype, "setIsUseMultiple", null);
return a([ classId("IsOpenOperaPosTrait") ], e);
}(l.Trait);
r.IsOpenOperaPosTrait = v;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/arrays/arrays": void 0,
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/config/AlgorithmStrategyConfig": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyBlocksPosInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenRandomShangToRandomDieTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "de159KVPS5G1LDxcasWlgg8", "IsOpenRandomShangToRandomDieTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenRandomShangToRandomDieTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isAlgorithmStrategyLogicGetShangZengAndSuiJi(t) && (t.args[1] = !0);
};
return a([ classId("IsOpenRandomShangToRandomDieTrait") ], e);
}(n.Trait);
r.IsOpenRandomShangToRandomDieTrait = c;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenRandomToRandomNoDieTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6f0d4ewAKpDgbE0saQrtSvO", "IsOpenRandomToRandomNoDieTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenRandomToRandomNoDieTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t) || u.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t)) {
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.SUI_JI_WU_SI));
l.algorithmStrategyInfo.setAlgorithmFailList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.SUI_JI_WU_SI));
l.algorithmStrategyInfo.setAlgorithmSuccessList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.SUI_JI_WU_SI));
}
u.tp.isAlgorithmSDKTraitInfoGetRandomToRandomNoDie(t) && (t.args[0] = !0);
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("IsOpenRandomToRandomNoDieTrait") ], e);
}(n.Trait);
r.IsOpenRandomToRandomNoDieTrait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenRestartFirstNoLifeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8d599+QJg5B1JWjxCPdRVts", "IsOpenRestartFirstNoLifeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenRestartFirstNoLifeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
chapterCount: 0,
classCount: 0
};
};
e.prototype.onActive = function(t) {
s.tp.isClassRevive_ProxyCheckRevive(t) && (this.state.classCount += 1);
s.tp.isChapterRevive_ProxyCheckRevive(t) && (this.state.chapterCount += 1);
if (s.tp.isClassRevive_ProxyIsTraitTriggerRevive(t)) {
if (t.args[1]) return;
1 === this.state.classCount && (t.args[0] = !1);
}
s.tp.isChapterRevive_ProxyIsOpenRevive(t) && 1 === this.state.chapterCount && (t.args[0] = !1);
s.tp.isChapterRevive_ProxyReviveFailPostProcessing(t) && 1 === this.state.chapterCount && (t.returnState = !0);
};
return a([ classId("IsOpenRestartFirstNoLifeTrait") ], e);
}(n.Trait);
r.IsOpenRestartFirstNoLifeTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenReviveSpecialTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "75347uALINGlJdfecRi7ykH", "IsOpenReviveSpecialTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenReviveSpecialTrait = void 0;
var l, p = t("../../../../../../../scripts/base/loader/ResLoader"), u = t("../../../../../../../scripts/base/pool/PrefabPool"), d = t("../../../../../../../scripts/base/storage/Storage"), f = t("../../../../../../../scripts/base/trait/Trait"), m = t("../../../../../../../scripts/falcon/EventManager"), h = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), y = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), g = t("../../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Run"), _ = t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), v = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), T = t("../../../../../../../scripts/modules/binary/config/BinaryConfig"), b = t("../../../../../../../scripts/modules/binary/vo/BinarySupport"), S = t("../../../../../../../scripts/modules/block/components/Block"), P = t("../../../../../../../scripts/modules/board/components/Board"), O = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), C = t("../../../../../../../scripts/modules/board/vo/BoardRendererInfo"), I = t("../../../../../../../scripts/modules/game/type/GameType"), A = t("../../../../../../../scripts/modules/game/vo/GameInfo"), R = t("../../../../../../../scripts/modules/modal/components/modal"), E = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), w = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), G = t("../../prefab/TraitsPrefabConfig");
(function(t) {
t[t.colType = 1] = "colType";
t[t.rowType = 2] = "rowType";
})(l || (l = {}));
var k = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.blockPrefab = null;
e.skinBlockPrefab = null;
e.isStartOutBlocks = !1;
e.isCanUseBlock = !1;
e.preEliPool = null;
e.blockNodeList = [];
e.blockPool = null;
e.effectNodeList = [];
e.putNodeList = [];
e.blocksNode = null;
return e;
}
e.prototype.data = function() {
return {
blockList: [],
colorList: [],
clearInfo: null
};
};
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
return w.tp.isBoardInitBoard(t) ? [ 4, this.initUI() ] : [ 3, 2 ];

case 1:
e.sent();
this.addSpecialShowNode();
e.label = 2;

case 2:
w.tp.isChapterGame_ProxyOnReviveShow(t) && this.requestOutBlocks();
w.tp.isClassGame_ProxyOnReviveShow(t) && this.requestOutBlocks();
if (w.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerAlgorithmRevive(t) && (this.isStartOutBlocks || this.isCanUseBlock)) {
t.replace = !0;
v.algorithmStrategyInfo.setAlgorithmSourceLevel1(_.ClassAlgorithmSourceType.AlgoReviveTrait);
v.algorithmStrategyInfo.setAlgorithmList([ h.OFFER_TYPE.REVIVE_CLEAR ]);
}
if (w.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithmRevive(t) && (this.isStartOutBlocks || this.isCanUseBlock)) {
t.replace = !0;
v.algorithmStrategyInfo.setAlgorithmSourceLevel1(_.ChapterAlgorithmSourceType.TravelReviveTrait);
v.algorithmStrategyInfo.setAlgorithmList([ h.OFFER_TYPE.REVIVE_CLEAR ]);
}
w.tp.isAlgorithmBottomInfoCheckGuaranteedBlock(t) && this.isCanUseBlock && (t.replace = !0);
if (w.tp.isChapterColorProducer_ProxyProduceColorBase(t) && this.isCanUseBlock && null != this.state.clearInfo && v.algorithmStrategyInfo.algorithmSourceLevel1 == _.ChapterAlgorithmSourceType.TravelReviveTrait) {
d.storage.setItem("chapterColorLists", this.state.colorList);
t.replace = !0;
t.returnState = !0;
}
if (w.tp.isClassColorProducer_ProxyProduceColorBase(t) && this.isCanUseBlock && null != this.state.clearInfo && v.algorithmStrategyInfo.algorithmSourceLevel1 == _.ClassAlgorithmSourceType.AlgoReviveTrait) {
d.storage.setItem("classColorLists", this.state.colorList);
t.replace = !0;
t.returnState = !0;
}
if (w.tp.isChapterColorProducer_ProxyProduceColorPostprocessing(t) && this.isCanUseBlock && this.state.colorList.length > 0) {
d.storage.setItem("chapterColorLists", this.state.colorList);
t.returnState = !0;
this.isCanUseBlock = !1;
this.resetData();
}
if (w.tp.isClassColorProducer_ProxyProduceColorPostprocessing(t) && this.isCanUseBlock && this.state.colorList.length > 0) {
d.storage.setItem("classColorLists", this.state.colorList);
t.returnState = !0;
this.isCanUseBlock = !1;
this.resetData();
}
w.tp.isAlgorithmStrategyLogicIsAlgorithmSendEvent(t) && this.isStartOutBlocks && (t.args[0] = !1);
w.tp.isClassRevive_ProxyOnRevive_Success(t) && this.reviveSuccess();
w.tp.isChapterRevive_ProxyOnRevive_Success(t) && this.reviveSuccess();
w.tp.isChapterGame_Replay_ProxyOnGameReplay(t) && this.gameEndClear();
w.tp.isClassGame_Replay_ProxyOnGameReplay(t) && this.gameEndClear();
w.tp.isChapterGameOver_GameEnd_ProxyOnGameOver(t) && this.gameEndClear();
w.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && this.gameEndClear();
(w.tp.isClassAlgorithmStrategyInfoShouldExecuteClassBlockOutStrategy(t) || w.tp.isChapterAlgorithmStrategyGameInfoShouldExecuteChapterBlockOutStrategy(t)) && this.isStartOutBlocks && (t.args[0] = !1);
return [ 2 ];
}
});
});
};
e.prototype.gameEndClear = function() {
this.resetData();
this.resetAllView();
};
e.prototype.getBlockPositions = function(t, e) {
var r = T.BlockShapeMap[t];
if (!r) return [ [], cc.v2(0, 0) ];
for (var o = [], i = r.width, a = r.height, n = r.shape, s = e.x, c = e.y, l = cc.v2(0, 0), p = 0, u = 0; u < a; u++) for (var d = n[u], f = 0; f < i; f++) if (d & 1 << i - 1 - f) {
var m = c + u, h = s + f, y = C.OFFSETX - C.BOARD_CONTAINER_HALF_WIDTH + C.BLOCK_HALF_SIZE + C.BLOCK_SIZE * h, g = C.OFFSETY + C.BOARD_CONTAINER_HALF_HEIGHT - C.BLOCK_HALF_SIZE - C.BLOCK_SIZE * m;
p++;
l.addSelf(cc.v2(y, g));
o.push({
realPos: cc.v2(y, g),
row: m,
col: h
});
}
return [ o, l.divide(p) ];
};
e.prototype.reviveSuccess = function() {
return n(this, void 0, void 0, function() {
return s(this, function() {
this.resetAllView();
return [ 2 ];
});
});
};
e.prototype.resetAllView = function() {
for (var t = 0; t < this.blockNodeList.length; t++) {
var e = this.blockNodeList[t];
if (cc.isValid(e)) {
e.removeFromParent();
this.blockPool.put(e);
}
}
for (t = 0; t < this.effectNodeList.length; t++) {
var r = this.effectNodeList[t];
if (cc.isValid(r)) {
r.removeFromParent();
this.preEliPool.put(r);
}
}
for (t = 0; t < this.putNodeList.length; t++) {
var o = this.putNodeList[t];
if (cc.isValid(o)) {
o.removeFromParent();
this.blockPool.put(o);
}
}
this.blockNodeList.splice(0, this.blockNodeList.length);
this.effectNodeList.splice(0, this.effectNodeList.length);
this.putNodeList.splice(0, this.putNodeList.length);
if (cc.isValid(this.blocksNode)) {
this.blocksNode.stopAllActions();
this.blocksNode.destroy();
this.blocksNode = null;
}
};
e.prototype.reviveShow = function() {
var t;
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n, c, p, u, d, f, m;
return s(this, function(s) {
switch (s.label) {
case 0:
return [ 4, CinstAsync(P.default) ];

case 1:
e = s.sent();
r = e.blockOverPreEliminate;
o = r.getChildByName("reviveSpecialNode");
i = e.blocks;
if (cc.isValid(o) && null != this.state.clearInfo) {
a = this.state.clearInfo.blockId;
n = this.state.clearInfo.pos;
c = null !== (t = this.state.colorList[1]) && void 0 !== t ? t : 1;
p = this.state.clearInfo, u = p.row, d = p.col;
f = {
blocksNode: i,
color: c,
list: u,
blockId: a,
pos: n,
dir: l.rowType
};
m = {
blocksNode: i,
color: c,
list: d,
blockId: a,
pos: n,
dir: l.colType
};
this.updateModel();
this.createRemoveNodes(o, f);
this.createRemoveNodes(o, m);
this.addPreEffectBlockNode(o, m);
this.addPreEffectBlockNode(o, f);
this.blocksNode = this.addPreBlocksNode(o, f);
}
return [ 2 ];
}
});
});
};
e.prototype.updateModel = function() {
return n(this, void 0, void 0, function() {
var t;
return s(this, function(e) {
switch (e.label) {
case 0:
return [ 4, CinstAsync(R.default) ];

case 1:
t = e.sent();
cc.isValid(t) && cc.isValid(t.node, !0) && t.setState({
bgOpacity: 130
});
return [ 2 ];
}
});
});
};
e.prototype.addPreBlocksNode = function(t, e) {
if (cc.isValid(t, !0) && cc.isValid(e.blocksNode, !0)) {
var r = c(this.getBlockPositions(e.blockId, e.pos), 2), o = r[0], i = r[1], a = new cc.Node("specialPreBlocksNode");
t.addChild(a, 3);
var n = e.blocksNode, s = n.convertToWorldSpaceAR(i), l = t.convertToNodeSpaceAR(s);
a.setPosition(l);
for (var p = 0; p < o.length; p++) {
var u = o[p], d = this.blockSpecialNode;
if (cc.isValid(d)) {
var f = n.convertToWorldSpaceAR(u.realPos), m = a.convertToNodeSpaceAR(f);
d.setPosition(m);
a.addChild(d);
d.getComponent(S.default).setState({
color: e.color
});
this.putNodeList.push(d);
}
}
cc.tween(a).repeatForever(cc.tween().to(.3, {
scale: 1.12
}).to(.3, {
scale: 1
})).start();
return a;
}
};
e.prototype.addPreEffectBlockNode = function(t, e) {
if (cc.isValid(t, !0) && cc.isValid(e.blocksNode, !0)) for (var r = e.blocksNode, o = r.convertToWorldSpaceAR(cc.v2(0, 0)), i = t.convertToNodeSpaceAR(o), a = e.list, n = e.dir === l.rowType, s = 0; s < a.length; s++) {
var c = a[s], p = C.OFFSETX - C.BOARD_CONTAINER_HALF_WIDTH + C.BLOCK_HALF_SIZE + C.BLOCK_SIZE * c, u = C.OFFSETY + C.BOARD_CONTAINER_HALF_HEIGHT - C.BLOCK_HALF_SIZE - C.BLOCK_SIZE * c, d = r.convertToWorldSpaceAR(cc.v2(p, u)), f = t.convertToNodeSpaceAR(d), m = this.preEliPool.get();
if (cc.isValid(m)) {
this.addPreEliminateEffect(t, {
idx: 0,
pos: n ? cc.v2(i.x, f.y) : cc.v2(f.x, i.y),
angle: n ? 0 : 90,
aniName: "in_" + e.color + "_2"
});
this.addPreEliminateEffect(t, {
idx: 2,
pos: n ? cc.v2(i.x, f.y) : cc.v2(f.x, i.y),
angle: n ? 0 : 90,
aniName: "in_" + e.color + "_1"
});
}
}
};
e.prototype.createRemoveNodes = function(t, e) {
if (cc.isValid(t, !0) && cc.isValid(e.blocksNode, !0)) for (var r = e.list, o = e.blocksNode, i = O.boardInfo.faceBlocks, a = 0; a < e.list.length; a++) for (var n = e.dir, s = n === l.colType ? C.ROW : C.COL, c = 0; c < s; c++) {
var p = n === l.colType ? r[a] : c, u = n === l.rowType ? r[a] : c, d = C.OFFSETX - C.BOARD_CONTAINER_HALF_WIDTH + C.BLOCK_HALF_SIZE + C.BLOCK_SIZE * p, f = C.OFFSETY + C.BOARD_CONTAINER_HALF_HEIGHT - C.BLOCK_HALF_SIZE - C.BLOCK_SIZE * u, m = o.convertToWorldSpaceAR(cc.v2(d, f)), h = t.convertToNodeSpaceAR(m), y = this.blockSpecialNode;
if (cc.isValid(y)) {
y.setPosition(h);
t.addChild(y, 1);
y.getComponent(S.default).setState({
color: i[u][p] < 100 ? e.color : i[u][p]
});
y.active = !0;
this.blockNodeList.push(y);
}
}
};
e.prototype.requestOutBlocks = function() {
return n(this, void 0, void 0, function() {
var t, e;
return s(this, function(r) {
switch (r.label) {
case 0:
r.trys.push([ 0, 2, , 3 ]);
this.resetAllView();
this.state.clearInfo = null;
this.isStartOutBlocks = !0;
this.isCanUseBlock = !1;
return [ 4, m.EventManager.dispatchModuleEventAsync(new g.E_AlgorithmStrategy_Run({
type: _.ALGO_STRATEGY_TYPE.REVIVE
})) ];

case 1:
r.sent();
this.isStartOutBlocks = !1;
t = y.algorithmInfo.blockIdList;
e = y.algorithmInfo.blockPosList;
this.checkCanClearAndPut(t, e);
return [ 3, 3 ];

case 2:
r.sent();
this.isStartOutBlocks = !1;
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
e.prototype.checkCanClearAndPut = function(t, e) {
if (3 == t.length && 3 == e.length) {
var r = t[1], o = cc.v2(e[1].col, e[1].row);
this.isCanUseBlock = !1;
var i = this.getRemoveColAndRow(o, r);
if (i && (i[0].length > 0 || i[1].length > 0)) {
this.isCanUseBlock = !0;
this.state.clearInfo = {
row: i[0],
col: i[1],
blockId: r,
pos: o
};
this.state.blockList = t;
this.updateReviveData();
this.reviveShow();
return;
}
}
this.resetData();
};
e.prototype.updateReviveData = function() {
var t = null;
A.gameInfo.gameMode != I.GameMode.Chapter ? t = d.storage.getItem("classColorLists", [ 1, 4, 2 ]) : A.gameInfo.gameMode == I.GameMode.Chapter && (t = d.storage.getItem("chapterColorLists", []));
this.state.colorList = JSON.parse(JSON.stringify(t));
};
e.prototype.resetData = function() {
this.state.clearInfo = null;
this.state.blockList = [];
this.state.colorList = [];
};
e.prototype.addSpecialShowNode = function() {
return n(this, void 0, void 0, function() {
var t, e, r, o, i, a;
return s(this, function(n) {
switch (n.label) {
case 0:
return [ 4, CinstAsync(P.default) ];

case 1:
t = n.sent();
e = t.blockOverPreEliminate;
r = t.blocks;
if (cc.isValid(e) && cc.isValid(r)) {
o = new cc.Node("reviveSpecialNode");
e.addChild(o);
i = r.convertToWorldSpaceAR(cc.v2(0, 0));
a = e.convertToNodeSpaceAR(i);
o.setPosition(a);
}
return [ 2 ];
}
});
});
};
e.prototype.initUI = function() {
return n(this, void 0, void 0, function() {
var t = this;
return s(this, function() {
this.preEliPool || (this.preEliPool = new u.default(G.TraitsPrefabConfig.preEliminatePrefab, 3));
this.blockPool || p.ResLoader.load(E.PrefabConfig.Block.url, cc.Prefab, function(e, r) {
if (e) ; else {
t.blockPool = new cc.NodePool();
t.blockPrefab = r;
if (cc.isValid(r)) for (var o = 0; o < 16; o++) t.blockPool.put(cc.instantiate(r));
}
});
this.state.clearInfo = null;
return [ 2 ];
});
});
};
Object.defineProperty(e.prototype, "blockSpecialNode", {
get: function() {
if (this.blockPool) {
0 == this.blockPool.size() && cc.isValid(this.blockPrefab) && this.blockPool.put(cc.instantiate(this.blockPrefab));
if (this.blockPool.size() > 0) return this.blockPool.get();
}
return null;
},
enumerable: !1,
configurable: !0
});
e.prototype.getRemoveColAndRow = function(t, e) {
return b.binarySupport.canClearRowCols(O.boardInfo.faceBlocks, e, t);
};
e.prototype.addPreEliminateEffect = function(t, e) {
if (cc.isValid(t, !0)) {
var r = this.preEliPool.get(), o = e.pos, i = e.angle, a = e.aniName;
t.addChild(r, e.idx, "specilEliNode");
r.setPosition(o);
r.angle = i;
var n = r.getComponent("PreEliminateComponent");
n && n.setState({
aniName: a,
playTimes: 0
});
this.effectNodeList.push(r);
}
};
return a([ classId("IsOpenReviveSpecialTrait") ], e);
}(f.Trait);
r.IsOpenReviveSpecialTrait = k;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/pool/PrefabPool": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/events/E_AlgorithmStrategy_Run": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/binary/config/BinaryConfig": void 0,
"../../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../../scripts/modules/block/components/Block": void 0,
"../../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/modal/components/modal": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig"
} ],
IsOpenRightPutTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "55353rki7FNkKOMBvLBz1cL", "IsOpenRightPutTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.IsOpenRightPutTrait = void 0;
var s = t("../../../../../../../scripts/base/audio/AudioInfo"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/audio/config/AudioConfig"), p = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), u = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), d = t("../../../../../../../scripts/base/storage/Storage"), f = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = t("../../../../../../../scripts/base/enum/enum"), h = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), y = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), g = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), _ = t("../../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo"), v = t("../../../../../../../scripts/modules/game/type/GameType"), T = t("../../../../../../../scripts/modules/game/vo/GameInfo"), b = t("../../../../../../../scripts/modules/algorithm/config/AlgorithmDataSetConfig"), S = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.putData = [];
e.isRightPut = !1;
return e;
}
e.prototype.onActive = function(t) {
f.tp.isGameDataClear_Disk_ProxyResetBoardEffectData(t) && this.resetData();
f.tp.isAlgorithmStrategyInfoAlgorithmComplete(t) && this.saveBlock();
if (f.tp.isBoardEffect_ProxyOnTouchEnd(t)) {
var e = t.args[0].state, r = e.touchBlockId, o = e.putPos;
this.checkBlock(r, this.getDstMovePos(o));
}
f.tp.isEncourage_ProxyOnEncourageEffectsPlay(t) && this.isRightPut && (t.args[2] = 1e3);
};
e.prototype.getDstMovePos = function(t) {
var e, r, o = 8, i = 8;
try {
for (var a = n(t), s = a.next(); !s.done; s = a.next()) {
var c = s.value;
c.x < o && (o = c.x);
c.y < i && (i = c.y);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (r = a.return) && r.call(a);
} finally {
if (e) throw e.error;
}
}
return new cc.Vec2(i, o);
};
e.prototype.resetData = function() {
d.storage.setItem("BlockPutData", [ {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
} ]);
};
e.prototype.saveBlock = function() {
this.isRightPut = !1;
if (!(d.storage.getItem("classRoundNum", 0) < 1 && T.gameInfo.gameMode == v.GameMode.Class)) {
this.putData = [ {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
} ];
if (m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_DIFFICULTY) || m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_BLANK) || m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_DIE)) {
if (b.checkExcludeRightPut.has(h.algorithmName.algoActualId)) return;
if (6 == h.algorithmName.algoActualId && 4e3 == h.algorithmName.algoExpectedId) return;
var t = g.algorithmInfo.blockIdList, e = h.algorithmName.algoActualChangeName, r = g.algorithmInfo.blockPosList;
if (3 != t.length || 3 != r.length) return;
if (m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_DIFFICULTY) || m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_DIE)) {
for (var o = 0; o < 3; o++) {
this.putData[o].id = 0;
this.putData[o].row = 0;
this.putData[o].col = 0;
this.putData[o].check = 1;
this.putData[o].isRight = 0;
}
d.storage.setItem("BlockPutData", this.putData);
return;
}
if (3 != e.length) return;
for (o = 0; o < 3; o++) if ("随机" == e[o] || "随机无死" == e[o] || "" == e[o]) ; else {
this.putData[o].id = t[o];
this.putData[o].row = r[o].row;
this.putData[o].col = r[o].col;
this.putData[o].check = 1;
this.putData[o].isRight = 0;
}
}
d.storage.setItem("BlockPutData", this.putData);
}
};
e.prototype.checkBlock = function(t, e) {
var r, o, i, a, c, f;
this.putData = d.storage.getItem("BlockPutData", [ {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
} ]);
var g = !1;
try {
for (var v = n(this.putData), T = v.next(); !T.done; T = v.next()) if (1 == (I = T.value).check) {
g = !0;
break;
}
} catch (t) {
r = {
error: t
};
} finally {
try {
T && !T.done && (o = v.return) && o.call(v);
} finally {
if (r) throw r.error;
}
}
if (0 != g) {
this.putData = d.storage.getItem("BlockPutData", [ {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
} ]);
try {
for (var S = n(this.putData), P = S.next(); !P.done; P = S.next()) if ((I = P.value).id == t && I.row == e.y && I.col == e.x && 1 == I.check && 0 == I.isRight) {
I.isRight = 1;
break;
}
} catch (t) {
i = {
error: t
};
} finally {
try {
P && !P.done && (a = S.return) && a.call(S);
} finally {
if (i) throw i.error;
}
}
d.storage.setItem("BlockPutData", this.putData);
if (3 == _.blocksProducerInfo.producerBlocks.filter(function(t) {
return -1 === t;
}).length) {
if (m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_BLANK)) {
if (b.checkExcludeRightPut.has(h.algorithmName.algoActualId)) return;
try {
for (var O = n(this.putData), C = O.next(); !C.done; C = O.next()) {
var I;
if (1 == (I = C.value).check && 0 == I.isRight) return;
}
} catch (t) {
c = {
error: t
};
} finally {
try {
C && !C.done && (f = O.return) && f.call(O);
} finally {
if (c) throw c.error;
}
}
} else if (m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_DIFFICULTY)) {
if (b.checkExcludeRightPut.has(h.algorithmName.algoActualId)) return;
if (6 == h.algorithmName.algoActualId && 4e3 == h.algorithmName.algoExpectedId) return;
} else if (!m.isValueInEnum(h.algorithmName.algoActualId, y.OFFER_TYPE_DIE)) return;
this.isRightPut = !0;
cc.loader.loadRes(u.PrefabConfig.RightPutPerfect.url, function(t, e) {
if (t) ; else {
var r = cc.instantiate(e);
r.x = cc.winSize.width / 2;
r.y = cc.winSize.height / 2 + 100;
if (cc.isValid(p.gameEffectLayer)) {
p.gameEffectLayer.addChild(r, 100);
r.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function() {
r.destroy();
}, null);
s.audioInfo.play(l.AudioConfig.putRightPerfect);
}
}
});
}
}
};
return a([ classId("IsOpenRightPutTrait") ], e);
}(c.Trait);
r.IsOpenRightPutTrait = S;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/config/AlgorithmDataSetConfig": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenShang1ToShang3Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "d3b685EflBKKqubWjUKQgB2", "IsOpenShang1ToShang3Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenShang1ToShang3Trait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t) || u.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t)) {
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SHANG_ZENG_1, s.OFFER_TYPE.SHANG_ZENG_3));
l.algorithmStrategyInfo.setAlgorithmFailList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.SHANG_ZENG_1, s.OFFER_TYPE.SHANG_ZENG_3));
l.algorithmStrategyInfo.setAlgorithmSuccessList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.SHANG_ZENG_1, s.OFFER_TYPE.SHANG_ZENG_3));
}
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("IsOpenShang1ToShang3Trait") ], e);
}(n.Trait);
r.IsOpenShang1ToShang3Trait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenShowBannerTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ae21e5Q1ixBPbz05egXfR9I", "IsOpenShowBannerTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenShowBannerTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/advertisement/config/AdvertisementConfig"), l = t("../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo"), p = t("../../../../../../../scripts/modules/advertisement/vo/AdvertisementNativeInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.requestGameNum = 3;
e.bannerStatus = "hide";
return e;
}
e.prototype.onActive = function(t) {
u.tp.isAdvertisement_Banner_ProxyOnBannerShow(t) && (t.replace = !0);
if (u.tp.isChapterAdvertisement_Banner_ProxyOnGameStart(t) && n.storage.getItem("chapterGameNum", 0) >= this.requestGameNum && "hide" === this.bannerStatus) {
this.showBanner();
this.bannerStatus = "show";
}
if (u.tp.isClassAdvertisement_Banner_ProxyOnGameStart(t) && n.storage.getItem("classGameNum", 0) >= this.requestGameNum && "hide" === this.bannerStatus) {
this.showBanner();
this.bannerStatus = "show";
}
if (u.tp.isJewelAdvertisement_Banner_proxyOnGameStart(t) && n.storage.getItem("jewelGameNum", 0) >= this.requestGameNum && "hide" === this.bannerStatus) {
this.showBanner();
this.bannerStatus = "show";
}
u.tp.isAdvertisement_Banner_ProxyOnBannerHide(t) && (this.bannerStatus = "hide");
};
e.prototype.showBanner = function() {
if (l.advertisementGameInfo.getIsCanPlayAd()) {
l.advertisementGameInfo.setAdvertisementParameters({
type: c.AD_TYPE.TYPE_3,
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: "0"
},
param: c.MESSAGE_ID.C2G_NONE
});
p.advertisementNativeInfo.processingAdInterface(function() {}, this);
}
};
return a([ classId("IsOpenShowBannerTrait") ], e);
}(s.Trait);
r.IsOpenShowBannerTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/advertisement/config/AdvertisementConfig": void 0,
"../../../../../../../scripts/modules/advertisement/vo/AdvertisementGameInfo": void 0,
"../../../../../../../scripts/modules/advertisement/vo/AdvertisementNativeInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenSimpleIntuitionProblemTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0787dudxmNPlYfODRnTKtQY", "IsOpenSimpleIntuitionProblemTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenSimpleIntuitionProblemTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../../scripts/modules/binary/vo/BinarySupport"), d = t("../../../../../../../../scripts/modules/board/vo/BoardInfo"), f = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (f.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingDiffAlgorithm(t)) {
if (u.binarySupport.getWeightValue(d.boardInfo.faceBlocks) > 350) {
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SHANG_ZENG_1, s.OFFER_TYPE.SIMPLE_ZHIJUE));
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.SHANG_ZENG_3, s.OFFER_TYPE.SIMPLE_ZHIJUE));
}
l.algorithmStrategyInfo.setAlgorithmList(p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.KUN_NAN_TI, s.OFFER_TYPE.SIMPLE_ZHIJUE));
}
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("IsOpenSimpleIntuitionProblemTrait") ], e);
}(n.Trait);
r.IsOpenSimpleIntuitionProblemTrait = m;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenSolveDifficultProblemsAmazingTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c1022pUzS1KJ6NSlCiHHs2U", "IsOpenSolveDifficultProblemsAmazingTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(t) {
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
r.IsOpenSolveDifficultProblemsAmazingTrait = void 0;
var l = t("../../../../../../../scripts/base/audio/AudioInfo"), p = t("../../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../../scripts/base/ui/UI"), d = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), f = t("../../../../../../../scripts/modules/audio/config/AudioConfig"), m = t("../../../../../../../scripts/modules/encourage/components/Encourage"), h = t("../../../../../../../scripts/modules/encourage/type/EncourageType"), y = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), g = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.topicNameList = [ "困难难题", "死亡难题", "直觉难题", "简单直觉题", "高回报难题", "贰盘困难题", "消两次难题", "连续边数少难题", "十字解困难难题", "更困难困难难题", "无不可放入块难题", "难题概率", "规整块难题" ];
e.recordTime = 0;
e.canPlayAmazing = !1;
e.continuousEliminateTimes = -1;
e.eliminateCount = -1;
e.color = -1;
e._isRevive = !1;
e._preAlgoActualName = null;
return e;
}
e.prototype.onEnable = function() {
this.addEventListener();
};
e.prototype.addEventListener = function() {
var t = this;
u.UI.addEventListener("open", function(e) {
e !== y.PrefabConfig.ClassGame && e !== y.PrefabConfig.ChapterMain || t.recordStartTime();
});
};
e.prototype.onActive = function(t) {
var e;
return n(this, void 0, void 0, function() {
var r, o, i, a, n, c;
return s(this, function() {
(g.tp.isClassBlocksProducer_Revive_ProxyOnReviveSuccess(t) || g.tp.isChapterBlocksProducer_Revive_ProxyOnReviveSuccess(t)) && (this._isRevive = !0);
if (g.tp.isClassBlocksProducer_Round_ProxyOnAlgorithmStrategyRequest(t) || g.tp.isChapterBlocksProducer_Round_ProxyOnAlgorithmStrategyRequest(t)) {
if (this._isRevive) {
this._isRevive = !1;
this._preAlgoActualName = d.algorithmName.algoActualName;
return [ 2 ];
}
r = null !== (e = this._preAlgoActualName) && void 0 !== e ? e : d.algorithmName.algoActualName;
this.topicEnd(r);
this.recordStartTime();
}
(g.tp.isChapterGame_ProxyOnStartGame(t) || g.tp.isClassGame_ProxyOnClassGameStart(t)) && this.recordStartTime();
if (g.tp.isClassEncourage_ProxyOnTouchEnd(t) || g.tp.isChapterEncourage_ProxyOnTouchEnd(t)) {
o = t.args[0];
i = o.state.touchEndState, a = i.continuousEliminateTimes, n = i.eliminateCount, 
c = i.color;
this.continuousEliminateTimes = a;
this.eliminateCount = n;
this.color = c;
}
return [ 2 ];
});
});
};
e.prototype.recordStartTime = function() {
this.continuousEliminateTimes = -1;
this.eliminateCount = -1;
this.canPlayAmazing = !1;
this.recordTime = Date.now();
this._isRevive = !1;
this._preAlgoActualName = null;
};
e.prototype.topicEnd = function(t) {
var e, r;
this.canPlayAmazing = !1;
var o = !1;
try {
for (var i = c(t), a = i.next(); !a.done; a = i.next()) {
var n = a.value;
if (this.topicNameList.includes(n)) {
o = !0;
break;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (r = i.return) && r.call(i);
} finally {
if (e) throw e.error;
}
}
if (o) if ((Date.now() - this.recordTime) / 1e3 < 10.3) ; else {
this.canPlayAmazing = !0;
this.play();
}
};
e.prototype.play = function() {
var t = this;
if (this.canPlayAmazing) {
this.canPlayAmazing = !1;
var e = this.continuousEliminateTimes, r = this.eliminateCount, o = this.color, i = e >= 2 && r >= 1, a = r >= 2, n = 1;
i && a ? n = 1.5 : a && (n = 1);
i || a ? cc.tween(new cc.Node()).delay(n).call(function() {
t.playAmazing(o);
}).start() : cc.tween(new cc.Node()).delay(.35).call(function() {
t.playAmazing(o);
}).start();
}
};
e.prototype.playAmazing = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a;
return s(this, function(n) {
switch (n.label) {
case 0:
e = cc.view.getVisibleSize().width / 2;
r = cc.view.getVisibleSize().height / 6 + cc.view.getVisibleSize().height / 2 + 30;
o = {
type: h.EncourageType.LEVEL_COLOR,
eliminateCount: 6,
color: t
};
return [ 4, u.UI.show(y.PrefabConfig.Encourage) ];

case 1:
i = n.sent();
if (cc.isValid(i)) {
i.x = e;
i.y = r;
i.getComponent(m.default).setState(o);
}
a = h.EncourageSoundType.SOUND4;
l.audioInfo.play(f.AudioConfig[a]);
return [ 2 ];
}
});
});
};
return a([ classId("IsOpenSolveDifficultProblemsAmazingTrait") ], e);
}(p.Trait);
r.IsOpenSolveDifficultProblemsAmazingTrait = _;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../../scripts/modules/encourage/components/Encourage": void 0,
"../../../../../../../scripts/modules/encourage/type/EncourageType": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenVibrateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fdffbaKMaBK/aOU0vq2xj6a", "IsOpenVibrateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.IsOpenVibrateTrait = void 0;
var s = t("../../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/native/NativeVibrator"), u = t("../../../../../../../scripts/modules/setup/components/SetupVibrateItem"), d = t("../../../../../../../scripts/modules/setup/config/SetupConfig"), f = t("../../../../../../../scripts/modules/shake/vo/ShakeInfo"), m = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = [ 0, 1, 10, 20, 35, 50, 65, 80, 100, 150, 200 ], y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ShakeValueMap = null;
e.shakeBaseTime = .1;
e.isShowRed = !1;
e.shakeSpFrame = null;
e.iconNodeList = [];
return e;
}
e.prototype.data = function() {
var t = this.getShakeStrengthData(), e = t[0] - 1 >= t[1] - 1, r = t[0] - 1 <= 0;
return {
shakeStrength: c.storage.getItem("shakeStrength", 6),
strengthData: t,
hasRed: !c.storage.getItem("shake_redp_node_clicked", !1),
isMax: e,
isMin: r
};
};
e.prototype.isRealOpen = function() {
return !(!f.shakeInfo.shakeSwitch || cc.sys.isNative && cc.sys.OS_ANDROID != cc.sys.os);
};
e.prototype.handleButtonClickShake = function(t) {
if (m.tp.isButtonClick_ProxyPlayButtonClickSound(t)) {
var e = t.args[0];
if (e && e.length > 0) {
var r = e;
if (r == d.enSetupKeys.vibration_add && this.state.isMax) {
t.replace = !0;
return !1;
}
if (r == d.enSetupKeys.vibration_sub && this.state.isMin) {
t.replace = !0;
return !1;
}
}
return !0;
}
return !!(m.tp.isChapterScoreFailOnClickPlay(t) || m.tp.isChapterScoreFailOnClickBack(t) || m.tp.isChapterCollectFailOnClickPlay(t) || m.tp.isChapterCollectFailOnClickBack(t));
};
e.prototype.onActive = function(t) {
var e, r, o, i, a;
if (m.tp.isSetup_ProxyOnSetupShow(t)) {
var s = t.args[0], l = c.storage.getItem("shake_redp_node_clicked", !1);
if (!s.keys.includes(d.enSetupKeys.vibration)) {
s.keys.push(d.enSetupKeys.vibration);
s.value = s.value || {};
s.value[d.enSetupKeys.vibration] = !l;
}
t.args[0] = s;
if (!l) try {
for (var p = n(this.iconNodeList), h = p.next(); !h.done; h = p.next()) {
var y = h.value;
cc.isValid(y) && (y.active = !1);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
h && !h.done && (r = p.return) && r.call(p);
} finally {
if (e) throw e.error;
}
}
}
if ((m.tp.isSetup_ProxyOnClick_closeSelf(t) || m.tp.isSetup_ProxyOnSetupClose(t)) && !(l = c.storage.getItem("shake_redp_node_clicked", !1))) try {
for (var g = n(this.iconNodeList), _ = g.next(); !_.done; _ = g.next()) {
y = _.value;
cc.isValid(y) && (y.active = !0);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
_ && !_.done && (i = g.return) && i.call(g);
} finally {
if (o) throw o.error;
}
}
if (m.tp.isSetup_ProxyUpdateUI(t)) {
(s = t.args[0] || {}).redPoint = s.redPoint || {};
s.redPoint[d.enSetupKeys.vibration] = !c.storage.getItem("shake_redp_node_clicked", !1);
s.value = s.value || {};
s.value[d.enSetupKeys.vibration] = f.shakeInfo.shakeSwitch;
t.args[0] = s;
(S = Cinst(u.default)) && S.setState({
isOpen: f.shakeInfo.shakeSwitch
});
}
if (m.tp.isSetupIconItemUpdateBtnState(t) && t.args[0].key == d.enSetupKeys.vibration) {
this.state.strengthData = this.getShakeStrengthData();
var v = t.args[1], T = this.getVibrateSliderNode();
T && !v.getChildByName("vibrate_slider") && v.addChild(T);
}
if (m.tp.isSetup_ProxyOnClick_vibration_add(t)) {
this.setShakeStrength(!0);
if (S = Cinst(u.default)) {
var b = this.getShakeStrengthData();
this.state.strengthData = b;
S.setState({
strengthData: b
});
}
}
if (m.tp.isSetup_ProxyOnClick_vibration_sub(t)) {
this.setShakeStrength(!1);
var S;
if (S = Cinst(u.default)) {
b = this.getShakeStrengthData();
this.state.strengthData = b;
S.setState({
strengthData: b
});
}
}
m.tp.isSetup_ProxyOnSetupClick(t) && this.isRealOpen() && this.doShake();
if (m.tp.isBlocksProducer_ProxyOnTouchEnd(t)) {
var P = null === (a = t.args[0]) || void 0 === a ? void 0 : a.state;
this.isRealOpen() && (null == P ? void 0 : P.clearScreen) && this.doShake("clean");
}
m.tp.isClassTopInfoInitCompelte(t) && (c.storage.getItem("shake_redp_node_clicked", !1) || (O = t.args[0]) && this.createShakeIcon(O));
if (m.tp.isChapterTopInfoBtnInitCompelte(t) && !c.storage.getItem("shake_redp_node_clicked", !1)) {
var O;
(O = t.args[0]) && this.createShakeIcon(O);
}
m.tp.isShake_ProxySetShakeSwitch(t) && c.storage.setItem("shake_redp_node_clicked", !0);
(m.tp.isClassEliminate_Sound_ProxyPlayEliminateSound(t) || m.tp.isEliminate_ChapterSound_ProxyPlayEliminateSound(t)) && this.dealEliminateAndComboShake(t);
(this.handleButtonClickShake(t) || m.tp.isSetup_ProxyOnMoreSettingsClose(t)) && this.isRealOpen() && this.doShake("btn_clicked");
};
e.prototype.setShakeStrength = function(t) {
if (this.isRealOpen()) {
var e = c.storage.getItem("shakeStrength", 6);
t ? e += 1 : e -= 1;
e = Math.max(e, 1);
e = Math.min(e, 11);
c.storage.setItem("shakeStrength", e);
}
};
e.prototype.getShakeStrengthData = function() {
return [ c.storage.getItem("shakeStrength", 6), h.length ];
};
e.prototype.initShakeData = function() {
this.ShakeValueMap = {};
this.ShakeValueMap.btn_clicked = {
time: 0
};
this.ShakeValueMap.shake_add = {
time: 0
};
this.ShakeValueMap.shake_sub = {
time: 0
};
this.ShakeValueMap.shake_open = {
time: 0
};
this.ShakeValueMap.playComboEffect_1 = {
time: 0
};
this.ShakeValueMap.playComboEffect_n = {
time: 0
};
this.ShakeValueMap.playEffect_n = {
time: 0
};
this.ShakeValueMap.playEffect_1 = {
time: 0
};
this.ShakeValueMap.clean = {
time: 10
};
};
e.prototype.doShake = function(t) {
void 0 === t && (t = "btn_clicked");
if (this.isRealOpen()) {
null == this.ShakeValueMap && this.initShakeData();
var e = this.ShakeValueMap[t];
if (null != e) {
var r = c.storage.getItem("shakeStrength", 6), o = h[r - 1] + (e.time || 0);
(o = parseInt(o + this.shakeBaseTime)) <= 0 || p.NativeVibrator.shakeOnce(150, o);
}
}
};
e.prototype.getVibrateSliderNode = function() {
if (this.isRealOpen()) {
var t = new cc.Node("vibrate_slider");
s.ResLoader.load("prefabs/setup/components/SetupVibrateItem", cc.Prefab, function(e, r) {
if (e) ; else if (r) {
var o = cc.instantiate(r);
t.addChild(o);
}
});
return t;
}
};
e.prototype.createShakeIcon = function(t) {
if (cc.isValid(t)) {
var e = new cc.Node("shake_icon");
t.addChild(e);
e.setPosition(38, 32);
var r = e.addComponent(cc.Sprite);
s.ResLoader.load("textures/setup/gameplay_img_vibrate", cc.SpriteFrame, function(t, o) {
t || o && cc.isValid(e) && (r.spriteFrame = o);
});
this.iconNodeList.push(e);
}
};
e.prototype.dealEliminateAndComboShake = function(t) {
var e, r = this, o = t.args[1] || {};
if (this.isRealOpen()) {
var i = null === (e = t.args[0]) || void 0 === e ? void 0 : e.state, a = i.eliminateCount, n = i.continuousEliminateTimes;
if (a > 0 && n > 1) {
var s = o.IsOpenVibrateTrait_delayTime || 0;
setTimeoutSafe(function() {
n > 2 ? r.doShake("playComboEffect_n") : r.doShake("playComboEffect_1");
}, s);
} else a > 0 && (a > 1 ? this.doShake("playEffect_n") : this.doShake("playEffect_1"));
}
};
return a([ classId("IsOpenVibrateTrait") ], e);
}(l.Trait);
r.IsOpenVibrateTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/native/NativeVibrator": void 0,
"../../../../../../../scripts/modules/setup/components/SetupVibrateItem": void 0,
"../../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../../scripts/modules/shake/vo/ShakeInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenWarmhandsResetDataTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "edf97dDXlxACLzCJY024EHA", "IsOpenWarmhandsResetDataTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenWarmhandsResetDataTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isIsWarmhandsTraitResetClearBoardTime(t) && (t.args[0] = !0);
};
return a([ classId("IsOpenWarmhandsResetDataTrait") ], e);
}(n.Trait);
r.IsOpenWarmhandsResetDataTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenZhiJueToKunNanTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f07b9Yp+iBLu7Wwk8KF0GMV", "IsOpenZhiJueToKunNanTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenZhiJueToKunNanTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t) || u.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t)) {
var e = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.ZHI_JUE_NAN_TI, s.OFFER_TYPE.KUN_NAN_TI);
l.algorithmStrategyInfo.setAlgorithmList(e);
var r = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.ZHI_JUE_NAN_TI, s.OFFER_TYPE.KUN_NAN_TI);
l.algorithmStrategyInfo.setAlgorithmFailList(r);
var o = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.ZHI_JUE_NAN_TI, s.OFFER_TYPE.KUN_NAN_TI);
l.algorithmStrategyInfo.setAlgorithmSuccessList(o);
}
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("IsOpenZhiJueToKunNanTrait") ], e);
}(n.Trait);
r.IsOpenZhiJueToKunNanTrait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenZiMuShangZengChapterOpenTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "442b3rC3dpEb40OuV/gj8qt", "IsOpenZiMuShangZengChapterOpenTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenZiMuShangZengChapterOpenTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/modules/game/type/GameType"), l = t("../../../../../../../scripts/modules/game/vo/GameInfo"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isIsOpenZiMuShangZengTraitCanTrigger(t) && l.gameInfo.gameMode === c.GameMode.Chapter) {
t.returnValue = !0;
t.returnState = !0;
}
};
return a([ classId("IsOpenZiMuShangZengChapterOpenTrait") ], e);
}(n.Trait);
r.IsOpenZiMuShangZengChapterOpenTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsOpenZiMuShangZengTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0c09cYaX6pK5JyXkU6o5tmK", "IsOpenZiMuShangZengTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenZiMuShangZengTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), p = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), d = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), f = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), m = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), h = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), y = t("../../../../../../../scripts/modules/game/type/GameType"), g = t("../../../../../../../scripts/modules/game/vo/GameInfo"), _ = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), v = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (this.canTrigger()) {
if (_.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t) || _.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t)) {
var e = g.gameInfo.gameMode === y.GameMode.Class ? s.storage.getItem("classZiMuShangZengCount", 0) : s.storage.getItem("chapterZiMuShangZengCount", 0), r = Math.random();
if (0 === e || e < 3 && r < .3) {
m.algorithmStrategyInfo.setAlgorithmList(h.algorithmStrategyLogic.replaceAlgorithmType(m.algorithmStrategyInfo.algorithmList, p.OFFER_TYPE.SHANG_ZENG_3, p.OFFER_TYPE.ZIMU_SHANGZENG));
m.algorithmStrategyInfo.setAlgorithmFailList(h.algorithmStrategyLogic.replaceAlgorithmType(m.algorithmStrategyInfo.algorithmFailList, p.OFFER_TYPE.SHANG_ZENG_3, p.OFFER_TYPE.ZIMU_SHANGZENG));
m.algorithmStrategyInfo.setAlgorithmSuccessList(h.algorithmStrategyLogic.replaceAlgorithmType(m.algorithmStrategyInfo.algorithmSuccessList, p.OFFER_TYPE.SHANG_ZENG_3, p.OFFER_TYPE.ZIMU_SHANGZENG));
}
}
if (_.tp.isClassAlgorithmProcessInfoStrategyOver(t) && -1 != d.algorithmName.algoActualName.indexOf(l.ALGO_NAME_TYPE.NAME_ZIMUSHANG)) {
e = s.storage.getItem("classZiMuShangZengCount", 0);
s.storage.setItem("classZiMuShangZengCount", e + 1);
}
if (_.tp.isChapterAlgorithmProcessInfoStrategyOver(t) && -1 != d.algorithmName.algoActualName.indexOf(l.ALGO_NAME_TYPE.NAME_ZIMUSHANG)) {
e = s.storage.getItem("chapterZiMuShangZengCount", 0);
s.storage.setItem("chapterZiMuShangZengCount", e + 1);
}
_.tp.isGameDataClear_Disk_ProxyResetAlgorithmData(t) && (g.gameInfo.gameMode === y.GameMode.Class ? s.storage.setItem("classZiMuShangZengCount", 0) : s.storage.setItem("chapterZiMuShangZengCount", 0));
_.tp.isAlgorithmBottomInfoCheckGuaranteedBlock(t) && -1 != d.algorithmName.algoActualName.indexOf(l.ALGO_NAME_TYPE.NAME_ZIMUSHANG) && 3 == u.algorithmInfo.blockIdList.length && (t.replace = !0);
}
};
e.prototype.canTrigger = function() {
return g.gameInfo.gameMode === y.GameMode.Class;
};
a([ f.Algorithm() ], e.prototype, "onActive", null);
a([ n.trait("IsOpenZiMuShangZengChapterOpenTrait", "旅途字母熵增替换熵3") ], e.prototype, "canTrigger", null);
return a([ classId("IsOpenZiMuShangZengTrait") ], e);
}(c.Trait);
r.IsOpenZiMuShangZengTrait = v;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsShowAchievementTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cd150CPfIVMe5+H5MPCQbU8", "IsShowAchievementTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsShowAchievementTrait = void 0;
var n = t("../../../../../../../scripts/base/adapter/AdapterFringe"), s = t("../../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/achievement/components/Achievement_Entrance"), p = t("../../../../../../../scripts/modules/achievement/types/AchievementType"), u = t("../../../../../../../scripts/modules/achievement/vo/AchievementInfo"), d = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), f = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.achievementEntrance = null;
return e;
}
e.prototype.onActive = function(t) {
if (f.tp.isLaunch_ProxyOnTraitConfigInitComplete(t)) {
u.achievementInfo.setAchievementInfoOpen(!0);
u.achievementInfo.loadAchievementInfoData(this.props);
}
f.tp.isModeChoiceAddOtherNode(t) && this.showAchievementEntrance(t);
};
e.prototype.showAchievementEntrance = function(t) {
var e = this;
if (u.achievementInfo.getQueryAchievementStatisticsData(p.Achievement_Target_Type.achieve_open_condition) < 1) ; else {
var r = t.target.node, o = u.achievementInfo.getRedPointState();
this.achievementEntrance ? this.achievementEntrance.setState({
isShowRedPoint: o
}) : s.ResLoader.load(d.PrefabConfig.Achievement_Entrance.url, cc.Prefab, function(t, i) {
if (!t && cc.isValid(r)) {
var a = cc.instantiate(i);
r.addChild(a);
e.achievementEntrance = a.getComponent(l.default);
if (e.achievementEntrance) {
e.achievementEntrance.setState({
isShowRedPoint: o
});
n.applyAdapterFringe(a);
}
}
});
}
};
return a([ classId("IsShowAchievementTrait") ], e);
}(c.Trait);
r.IsShowAchievementTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/adapter/AdapterFringe": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/achievement/components/Achievement_Entrance": void 0,
"../../../../../../../scripts/modules/achievement/types/AchievementType": void 0,
"../../../../../../../scripts/modules/achievement/vo/AchievementInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsShowOfficialHomePageTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bfdf8zqwCFFdKYAjNnhG0Qk", "IsShowOfficialHomePageTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsShowOfficialHomePageTrait = void 0;
var s = t("../../../../../../../scripts/base/async/Barrier"), c = t("../../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/launch/vo/LaunchInfo"), u = t("../../../../../../../scripts/modules/native/NativeShare"), d = t("../../../../../../../scripts/modules/setup/config/SetupConfig"), f = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._shareGameBtnPre = null;
e._shareGameSocialMediapPre = null;
e._shareGameBtnFrame = null;
e._shareGameBtnTextFrame = null;
e._resLoadTimeoutBarrier = null;
return e;
}
e.prototype.onCreate = function() {
this._preLoadRes();
};
e.prototype.onActive = function(t) {
if (this._resLoadTimeoutBarrier.isOpen) {
if (f.tp.isModeChoiceRender(t)) {
var e = t.target, r = cc.instantiate(this._shareGameBtnPre);
e.btnParent.addChild(r);
e.btnParent.getComponent(cc.Layout).spacingY = 20;
var o = cc.instantiate(this._shareGameSocialMediapPre);
e.btnParent.addChild(o);
}
if (f.tp.isClassTopInfo_ProxyGetSetupKeys(t)) {
var i = p.launchInfo.openChapterModule() ? [ d.enSetupKeys.sound, d.enSetupKeys.BGM, d.enSetupKeys.moreSettings, d.enSetupKeys.home, d.enSetupKeys.replay, d.enSetupKeys.share ] : [ d.enSetupKeys.sound, d.enSetupKeys.BGM, d.enSetupKeys.moreSettings, d.enSetupKeys.replay, d.enSetupKeys.share ];
t.returnValue = i;
t.replace = !0;
}
if (f.tp.isSetup_ProxyGetSetupPosData(t)) {
var a = {
infoNodeWidth: d.SetupConfig.nodePosData.infoNodeWidth,
topLayout: d.SetupConfig.nodePosData.topLayout,
bottomLayout: d.SetupConfig.nodePosData.bottomLayout,
lineWidth: d.SetupConfig.nodePosData.lineWidth,
infoNodeExtraHeight: 110,
inNodeWeight: {
top: 115,
bottom: 180,
left: 50,
right: 50
}
};
t.returnValue = a;
t.replace = !0;
}
if (f.tp.isSetupBtnItemRender(t)) {
var n = t.target;
if (n.state.key === d.enSetupKeys.share) {
n.icon_img.spriteFrame = this._shareGameBtnFrame;
n.txt_img.spriteFrame = this._shareGameBtnTextFrame;
n.redNode.active = !!n.state.redPoint;
t.replace = !0;
}
}
if (f.tp.isSetupRender(t)) {
var s = t.target;
o = cc.instantiate(this._shareGameSocialMediapPre);
s.outNode.addChild(o);
o.getComponent(cc.Widget).bottom = 40;
o.position.x = s.outNode.width / 2;
}
if (f.tp.isSetup_ProxyOnSetupClick(t) && t.args[0].key === d.enSetupKeys.share) {
u.NativeShare.callNativeShare();
t.replace = !0;
}
}
};
e.prototype._preLoadRes = function() {
var t = this;
this._resLoadTimeoutBarrier = new s.TimeoutBarrier(2e3);
var e = [ "prefabs/main_Share", "prefabs/setup_Share", "textures/setting_icon_shareGames", "textures/setting_txt_shareGame" ];
c.ResLoader.loadBundle("Remote_shareGame", function(r, o) {
if (r) ; else {
var i = e.map(function(t) {
return new Promise(function(e, r) {
var i = t.includes("prefabs/") ? cc.Prefab : cc.SpriteFrame;
o.load(t, i, function(t, o) {
t ? r(t) : e(o);
});
});
});
Promise.all(i).then(function(e) {
var r = n(e, 4), o = r[0], i = r[1], a = r[2], s = r[3];
t._shareGameBtnPre = o;
t._shareGameSocialMediapPre = i;
t._shareGameBtnFrame = a;
t._shareGameBtnTextFrame = s;
t._resLoadTimeoutBarrier.open();
}).catch(function() {});
Promise.all(i).then(function(e) {
var r = n(e, 4), o = r[0], i = r[1], a = r[2], s = r[3];
t._shareGameBtnPre = o;
t._shareGameSocialMediapPre = i;
t._shareGameBtnFrame = a;
t._shareGameBtnTextFrame = s;
t._resLoadTimeoutBarrier.open();
}).catch(function() {});
}
});
};
return a([ classId("IsShowOfficialHomePageTrait") ], e);
}(l.Trait);
r.IsShowOfficialHomePageTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/async/Barrier": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/launch/vo/LaunchInfo": void 0,
"../../../../../../../scripts/modules/native/NativeShare": void 0,
"../../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsStatisticalDataCollectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4e6dajhvm1BcJRBsui72Zxi", "IsStatisticalDataCollectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsStatisticalDataCollectTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/achievement/types/AchievementType"), l = t("../../../../../../../scripts/modules/achievement/vo/AchievementInfo"), p = t("../../../../../../../scripts/modules/game/type/GameType"), u = t("../../../../../../../scripts/modules/game/vo/GameInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (d.tp.isChapterGameOver_GameEnd_ProxyOnGameOver(t)) {
var e = t.args[1];
u.gameInfo.gameMode === p.GameMode.Chapter && e && (e ? l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_win_streak, 1) : l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_win_streak, 0));
}
d.tp.isAchievement_ProxyOnGameReplay(t) && u.gameInfo.gameMode === p.GameMode.Chapter && l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_win_streak, 0);
if (d.tp.isAchievement_ProxyOnBlocksProducer_TouchEnd(t)) {
var r = t.args[0].state, o = n.storage.getItem("classGuideStep", 0);
r.eliminateCount >= 2 && o > 2 && l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_elimination_multi, 1);
if (r.collectItems) {
var i = 0;
for (var a in r.collectItems) i += r.collectItems[a];
l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_collect_gem, i);
}
r.continuousEliminateTimes && u.gameInfo.gameMode === p.GameMode.Class && o > 2 && l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_high_combo, r.continuousEliminateTimes - 1);
r.putEliminatesInfo && o > 2 && l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_elimination_block, r.putEliminatesInfo.length);
}
d.tp.isClassScoreTip_ProxyPlayHighScoreEffects(t) && l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_high_score, t.args[0]);
d.tp.isAchievement_ProxyOnAchievement_Chapter_Pass(t) && l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_adventure_map, 1);
d.tp.isClassGame_GameInfoUpdate_ProxyUpdateClassGameNumAfter(t) && this.onGameCancel();
d.tp.isChapterGame_GameInfoUpdate_ProxyUpdateChapterGameNumAfter(t) && this.onGameCancel();
};
e.prototype.onGameCancel = function() {
l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.month_achieve, 1);
l.achievementInfo.updataAchievementStatisticsData(c.Achievement_Target_Type.achieve_all_levels, 1);
};
return a([ classId("IsStatisticalDataCollectTrait") ], e);
}(s.Trait);
r.IsStatisticalDataCollectTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/achievement/types/AchievementType": void 0,
"../../../../../../../scripts/modules/achievement/vo/AchievementInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
IsWarmhandsTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7ed4chfXYtHy7VqHwzqI68I", "IsWarmhandsTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsWarmhandsTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/falcon/EventManager"), p = t("../../../../../../../scripts/modules/game/events/E_Game_Start"), u = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isFirstTrigger = 0;
e._isWarmHand = 0;
return e;
}
e.prototype.onActive = function(t) {
if (s.tp.isClassGame_Ready_ProxyOnClassGameReadyComplete(t)) {
var e = c.storage.getItem("classGuideStep", 0);
if (0 == this._isFirstTrigger && this.isClearBoard && e > 2) {
c.storage.setItem("classScore", 0);
c.storage.setItem("classRoundNum", 0);
c.storage.setItem("classProducerBlocks", [ -1, -1, -1 ]);
c.storage.setItem("classZiMuShangZengCount", 0);
this._isWarmHand = 1;
c.storage.setItem("classTimeSinceGameReady", new Date().getTime());
l.EventManager.dispatchModuleEvent(new p.E_Game_Start({
newGame: !0
}));
this.clearBoardTime();
t.replace = !0;
} else {
this._isWarmHand = 0;
this.resetClearBoardTime();
}
this._isFirstTrigger = 1;
}
if (s.tp.isChapterGame_Ready_ProxyOnChapterGameReadyComplete(t)) if (0 == this._isFirstTrigger && this.isClearBoard) {
c.storage.setItem("chapterScore", 0);
c.storage.setItem("chapterCollectRemainCollectItems", {});
c.storage.setItem("chapterCollectTotalCollectItems", {});
c.storage.setItem("chapterCollectTotalScore", {});
c.storage.setItem("chapterZiMuShangZengCount", 0);
c.storage.setItem("chapterRoundNum", 0);
c.storage.setItem("chapterProducerBlocks", [ -1, -1, -1 ]);
this._isWarmHand = 1;
c.storage.setItem("chapterTimeSinceGameReady", new Date().getTime());
l.EventManager.dispatchModuleEvent(new p.E_Game_Start({
newGame: !0
}));
this.clearBoardTime();
this._isFirstTrigger = 2;
t.replace = !0;
} else {
this._isWarmHand = 0;
this.resetClearBoardTime();
}
s.tp.isEightHoursTravelTraitReductionTarget(t) && 2 == this._isFirstTrigger && (t.replace = !0);
s.tp.isLaunch_ProxyOnTraitConfigInitComplete(t) && this.recordClearBoardTime();
};
Object.defineProperty(e.prototype, "isClearBoard", {
get: function() {
var t = c.storage.getItem("WarnHandClearTime", 0);
return !!t && Date.now() - t > this.props.coldClarTime;
},
enumerable: !1,
configurable: !0
});
e.prototype.resetClearBoardTime = function(t) {
void 0 === t && (t = !1);
t && this.clearBoardTime();
};
e.prototype.clearBoardTime = function() {
c.storage.setItem("WarnHandClearTime", Date.now());
};
e.prototype.recordClearBoardTime = function() {
0 == c.storage.getItem("WarnHandClearTime", 0) && c.storage.setItem("WarnHandClearTime", Date.now());
};
a([ u.trait("IsOpenWarmhandsResetDataTrait", "暖手局启动后重置数据") ], e.prototype, "resetClearBoardTime", null);
return a([ classId("IsWarmhandsTrait") ], e);
}(n.Trait);
r.IsWarmhandsTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelConfigTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cd9ceEgtQhNcribF7KULzfi", "LevelConfigTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelConfigTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e;
if (l.tp.isChapterConfig_ProxyGetChapterGamePath(t) && 1 == n.storage.getItem("chapterPeriodsIndex", 1)) {
var r = ((e = {}).GameL49 = c.ChapterConfig_Config.defaultLevelJsonPath, e);
t.args[0] = r[this.props.levelCfg];
}
};
return a([ classId("LevelConfigTrait") ], e);
}(s.Trait);
r.LevelConfigTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/chapterConfig/configs/ChapterConfig_Config": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelFillClearAimTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c6fffdmsiJGL60r+J8dXCbS", "LevelFillClearAimTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelFillClearAimTrait = void 0;
var n = t("../../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), l = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), p = t("../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic"), u = t("../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t)) {
var e = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmList, s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, s.OFFER_TYPE.EFFICIENT_ELIMINATE);
l.algorithmStrategyInfo.setAlgorithmList(e);
var r = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmFailList, s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, s.OFFER_TYPE.EFFICIENT_ELIMINATE);
l.algorithmStrategyInfo.setAlgorithmFailList(r);
var o = p.algorithmStrategyLogic.replaceAlgorithmType(l.algorithmStrategyInfo.algorithmSuccessList, s.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, s.OFFER_TYPE.EFFICIENT_ELIMINATE);
l.algorithmStrategyInfo.setAlgorithmSuccessList(o);
}
};
a([ c.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("LevelFillClearAimTrait") ], e);
}(n.Trait);
r.LevelFillClearAimTrait = d;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyLogic": void 0,
"../../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LevelRemoteThemeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ca090bHN8ZMGYSw+cRAWKXZ", "LevelRemoteThemeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LevelRemoteThemeTrait = void 0;
var n = t("../../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/theme/vo/ThemeInfo"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e = this;
if (l.tp.isChapterConfig_ProxyGetChapterListPath(t) && c.themeInfo.remoteLoad) {
var r = "https://bband1.afafb.com/syy_travel_google_game/" + c.themeInfo.currentThemeName + "/file/data/NoTheme.json";
t.args[0] = r;
}
if (l.tp.isChapterConfig_ProxyGetChapterGamePath(t) && c.themeInfo.remoteLoad) {
var o = c.themeInfo.currentThemeName, i = "https://bband1.afafb.com/syy_travel_google_game/" + o + "/file/data/config.json";
n.ResLoader.load(i, cc.JsonAsset, function(t, r) {
if (!t) {
var i = r.json;
if (i) {
var a = i[e.props.start - 1].config, n = "https://bband1.afafb.com/syy_travel_google_game/" + o + "/file/data/" + a + ".json";
c.themeInfo.onRemoteThemeUrlLoaded.resolve(n);
}
}
});
}
l.tp.isChapterItemColorInfo(t) && c.themeInfo.remoteLoad && (t.args[1] = {
type: "remote",
url: "https://bband1.afafb.com/syy_travel_google_game/color/" + t.args[0] + ".png"
});
};
return a([ classId("LevelRemoteThemeTrait") ], e);
}(s.Trait);
r.LevelRemoteThemeTrait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/theme/vo/ThemeInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LoadingTieringTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bfa995px8ZG9aBHQniajOvu", "LoadingTieringTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LoadingTieringTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/performanceTiering/vo/PerformanceTieringInfo"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e = t.target;
"dragonBones.ArmatureDisplay" === this.props.component && (e.node.scaleX = e.node.scaleY = 2);
s.performanceTieringInfo.tieringRender(e.node, this);
return null;
};
return a([ classId("LoadingTieringTrait") ], e);
}(n.Trait);
r.LoadingTieringTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/performanceTiering/vo/PerformanceTieringInfo": void 0
} ],
LocalThemeSaveTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "daf8ewkfdZCLpTBZX/3Y3KH", "LocalThemeSaveTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LocalThemeSaveTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/theme/config/ThemeConfig"), l = t("../../../../../../../scripts/modules/theme/vo/ThemeInfo"), p = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e = n.storage.getItem("chapterPeriodsIndex", 1);
if (p.tp.isChapterConfig_ProxyGetChapterListPath(t) && e > 1 && e <= l.themeInfo.getThemeConfig().length) {
var r = l.themeInfo.currentThemeName, o = c.chapterListDataUrl + r + "NoTheme";
t.args[0] = o;
}
if (p.tp.isChapterConfig_ProxyGetChapterGamePath(t) && e > 1 && e <= l.themeInfo.getThemeConfig().length) {
r = l.themeInfo.currentThemeName, o = l.themeInfo.getThemeConfigResUrl(r);
t.args[0] = o;
}
p.tp.isChapterConfig_ProxyIsExistNextData(t) && (e < l.themeInfo.getThemeConfig().length ? t.args[0] = !0 : t.args[0] = !1);
};
return a([ classId("LocalThemeSaveTrait") ], e);
}(s.Trait);
r.LocalThemeSaveTrait = u;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/theme/config/ThemeConfig": void 0,
"../../../../../../../scripts/modules/theme/vo/ThemeInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LowHardOfferTimesToEverayoneTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ed085EMSqxCX7uuMeu+ndFg", "LowHardOfferTimesToEverayoneTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LowHardOfferTimesToEverayoneTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isClassGame_ProxyOnIntoGame(t)) {
var e = TRAIT("LowHardOfferTimesTrait");
e && e.setState({
isToEverayone: !0
});
}
};
return a([ classId("LowHardOfferTimesToEverayoneTrait") ], e);
}(n.Trait);
r.LowHardOfferTimesToEverayoneTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LowHardOfferTimesTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0a474CHTqhNUYAsx/Vma2PC", "LowHardOfferTimesTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LowHardOfferTimesTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/enum/enum"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), d = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), f = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), m = t("../../../../../../../scripts/modules/game/type/GameType"), h = t("../../../../../../../scripts/modules/game/vo/GameInfo"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isTrigger: !0,
isToEverayone: !1
};
};
e.prototype.onActive = function(t) {
if ((0 != f.deviceInfo.isLowLevel || this.state.isToEverayone) && h.gameInfo.gameMode == m.GameMode.Class) {
y.tp.isClassAlgorithmStrategy_Deal_ProxyResetAlgorithmData(t) && (this.state.isTrigger = !0);
if (y.tp.isClassAlgorithmStrategy_Deal_ProxyPostPreprocessing(t)) {
if (0 == this.state.isTrigger) return;
if (d.algorithmStrategyInfo.algorithmList.length > 0 && s.isValueInEnum(d.algorithmStrategyInfo.algorithmList[0], p.OFFER_TYPE_DIFFICULTY) && (e = c.storage.getItem("lowHardsTimesHardIndex", 2)) > 0) {
d.algorithmStrategyInfo.setAlgorithmSuccessList([ p.OFFER_TYPE.TIAN_KONG_XIAO_CHU ]);
d.algorithmStrategyInfo.setAlgorithmSuccessIndex(p.algorithmSuccessIndex.DIFFICULTY);
}
}
if (y.tp.isAlgorithm_ProxyOnSuccessTrait(t)) {
d.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
var e = c.storage.getItem("lowHardsTimesHardIndex", 2);
c.storage.setItem("lowHardsTimesHardIndex", Math.max(0, e - 1));
}
y.tp.isClassGameDataClear_Disk_ProxyResetAlgorithmData(t) && c.storage.setItem("lowHardsTimesHardIndex", 2);
}
};
a([ u.Algorithm() ], e.prototype, "onActive", null);
return a([ n.templateTrait([ "LowHardOfferTimesToEverayoneTrait" ]), classId("LowHardOfferTimesTrait") ], e);
}(l.Trait);
r.LowHardOfferTimesTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
LowHardSetFps30Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f137c40uslKYoWEpjawEsJN", "LowHardSetFps30Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LowHardSetFps30Trait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isPerformance_ProxyOnGameInitComplete(t) && this.setFrameRateForLowDevice();
};
e.prototype.setFrameRateForLowDevice = function() {
if (c.deviceInfo.isLowLevel) {
var t = this.props.fpsNum || 30;
c.deviceInfo.setDeviceFPS(t);
}
};
return a([ classId("LowHardSetFps30Trait") ], e);
}(n.Trait);
r.LowHardSetFps30Trait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
MainDragonBonesConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "66368NMoGxGqZzryHfhrDE7", "MainDragonBonesConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DragonbonesConfigType = r.satisfies = r.MainDragonBonesConfig = void 0;
r.MainDragonBonesConfig = {
comboRainbowEffectPrompt: {
dragonAssetUrl: "dragonbones/eliminate/comboRainbow/gameplay_eliminatePrompt_ske",
dragonAtlasAssetUrl: "dragonbones/eliminate/comboRainbow/gameplay_eliminatePrompt_tex",
frameSplitting: !0,
bundleName: "mainTraits"
},
comboRainbowEffectEliminate1: {
dragonAssetUrl: "dragonbones/eliminate/comboRainbow/playgame_elimination_ske",
dragonAtlasAssetUrl: "dragonbones/eliminate/comboRainbow/playgame_elimination_tex",
frameSplitting: !0,
bundleName: "mainTraits"
},
comboRainbowEffectEliminate2: {
dragonAssetUrl: "dragonbones/eliminate/comboRainbow/playgame_elimination2_ske",
dragonAtlasAssetUrl: "dragonbones/eliminate/comboRainbow/playgame_elimination2_tex",
frameSplitting: !0,
bundleName: "mainTraits"
},
clearComboAnim: {
dragonAssetUrl: "dragonbones/boardEffect/clearComboAnim/gameplay_welldone_ske",
dragonAtlasAssetUrl: "dragonbones/boardEffect/clearComboAnim/gameplay_welldone_tex",
frameSplitting: !0,
bundleName: "mainTraits"
},
gameplay_eliminatePrompt: {
dragonAssetUrl: "dragonbones/preEliminate/gameplay_eliminatePrompt_ske",
dragonAtlasAssetUrl: "dragonbones/preEliminate/gameplay_eliminatePrompt_tex",
frameSplitting: !0,
bundleName: "mainTraits"
}
};
cc._RF.pop();
}, {} ],
"MainTraitAudioConfig ": [ function(t, e, r) {
"use strict";
cc._RF.push(e, "05b96kt7mZD3KlOXKuqEOdw", "MainTraitAudioConfig ");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AudioConfigType = r.satisfies = r.MainTraitAudioConfig = void 0;
var o = t("../../../../../../scripts/base/audio/AudioInfo");
r.MainTraitAudioConfig = {
streak_rock1: {
url: "audios/eliminate/comboRainbow/streak_rock1",
type: o.AudioType.EFFECT,
volume: 1,
bundleName: "mainTraits"
},
streak_rock2: {
url: "audios/eliminate/comboRainbow/streak_rock2",
type: o.AudioType.EFFECT,
volume: 1,
bundleName: "mainTraits"
},
streak_rock3: {
url: "audios/eliminate/comboRainbow/streak_rock3",
type: o.AudioType.EFFECT,
volume: 1,
bundleName: "mainTraits"
},
clearComboAnim: {
url: "audios/boardEffect/clearComboAnim/all_clean_djh",
type: o.AudioType.EFFECT,
volume: 1,
bundleName: "mainTraits"
}
};
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0
} ],
MoreAreaTKXCTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c862fmSe8tLC6shoFOL4DNk", "MoreAreaTKXCTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MoreAreaTKXCTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/modules/game/vo/GameInfo"), u = t("../../../../../../../scripts/modules/game/type/GameType"), d = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), f = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), m = t("../../../../../../../scripts/base/enum/enum"), h = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.continuousThreshold = 4;
e.curScore = 0;
e.isShieldMore = !1;
return e;
}
r = e;
e.prototype.log = function() {};
e.prototype.getRoundAverage = function(t) {
var e, o = 1 === (null === (e = this.props) || void 0 === e ? void 0 : e.gameWayType) ? r.roundAvgActive : r.roundAvgNewPlayer;
return t > o.length ? -1 : o[t > 1 ? t - 2 : 0] || 0;
};
e.prototype.hasDifficultyExpected = function(t) {
return !!Array.isArray(t) && t.some(function(t) {
return m.isValueInEnum(t, f.OFFER_TYPE_DIFFICULTY) || t == f.OFFER_TYPE.ALL_COMBINATION_ID70;
});
};
e.prototype.hasDifficultyExpectedCondition = function(t) {
return !(!m.isValueInEnum(t, f.OFFER_TYPE_DIFFICULTY) && t != f.OFFER_TYPE.CLEAR_BOARD);
};
e.prototype.calcClassLowEfficiencyNextTimes = function() {
if (p.gameInfo.gameMode !== u.GameMode.Class) return {
valid: !1,
nextTimes: 0,
round: 0,
average: 0,
score: 0,
currentTimes: 0
};
var t = Math.max(0, l.storage.getItem("classRoundNum", 0) - 1);
if (t <= 0) return {
valid: !1,
nextTimes: 0,
round: t,
average: 0,
score: 0,
currentTimes: 0
};
var e = this.curScore, r = this.getRoundAverage(t);
if (r < 0) return {
valid: !1,
nextTimes: 0,
round: t,
average: r,
score: e,
currentTimes: 0
};
var o = l.storage.getItem("MoreAreaTKXC", 0);
return {
valid: !0,
nextTimes: e < r ? o + 1 : 0,
round: t,
average: r,
score: e,
currentTimes: o
};
};
e.prototype.checkNameNanTi = function(t) {
return t == f.OFFER_TYPE.KUN_NAN_TI || t == f.OFFER_TYPE.ZHI_JUE_NAN_TI || t == f.OFFER_TYPE.DIFFICULTY_GAOHUIBAO || t == f.OFFER_TYPE.LINK_SMALL_BORDER || t == f.OFFER_TYPE.CLEAR_BOARD;
};
e.prototype.checkIsLessThanAverage = function(t, e) {
return t < this.getRoundAverage(e);
};
e.prototype.onActive = function(t) {
var e = TRAIT("ShieldMoreAreaTKXCTrait");
(null == e ? void 0 : e.active) && (this.isShieldMore = e.state.isShieldMoreAreaTKXC);
if (c.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(t) && p.gameInfo.gameMode === u.GameMode.Class) {
if (this.isShieldMore) return;
var r = l.storage.getItem("classRoundNum", 0);
if (r <= 1) {
var o = TRAIT("IsTurnAroundSurfaceTrait");
if ((null == o ? void 0 : o.active) && l.storage.getItem("classTurnAroundSurfaceInfo", {
beTurn: !1,
curStep: 0,
randomColor: 1,
turnAround: !1
}).turnAround) return;
}
if (this.checkNoReplace()) return;
var i = this.getRoundAverage(r), a = l.storage.getItem("MoreAreaTKXC", 0);
if (i <= 0) {
a = 0;
l.storage.setItem("MoreAreaTKXC", a);
} else if (this.curScore < i) {
a++;
l.storage.setItem("MoreAreaTKXC", a);
} else {
a = 0;
l.storage.setItem("MoreAreaTKXC", a);
}
if (a >= this.continuousThreshold) for (var n = d.algorithmStrategyInfo.algorithmList || [], s = 0; s < n.length; s++) if (!this.checkNameNanTi(n[s])) {
d.algorithmStrategyInfo.algorithmList.unshift(f.OFFER_TYPE.ALGO_FILL_MORE_AREA);
return;
}
}
if ((c.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t) || c.tp.isChapterAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t)) && p.gameInfo.gameMode === u.GameMode.Chapter) {
Math.random() < .5 && (this.replaceAlgorithm(d.algorithmStrategyInfo.algorithmList) || this.replaceAlgorithm(d.algorithmStrategyInfo.algorithmFailList) || this.replaceAlgorithm(d.algorithmStrategyInfo.algorithmSuccessList));
}
if (c.tp.isClassScore_ProxyComputeScoreAddOption(t)) {
var m = t.args[0];
this.curScore = m.curScore + m.baseScore;
}
if (c.tp.isAlgorithm_ProxyFailStrategy(t)) {
if (p.gameInfo.gameMode === u.GameMode.Chapter) return;
if (this.isShieldMore) return;
a = l.storage.getItem("MoreAreaTKXC", 0);
if (3 == this.props.offerType && a >= this.continuousThreshold) {
var y = d.algorithmStrategyInfo.algorithmFailList || [];
for (s = 0; s < y.length; s++) if (!this.checkNameNanTi(y[s])) {
d.algorithmStrategyInfo.algorithmFailList.unshift(f.OFFER_TYPE.ALGO_FILL_MORE_AREA);
break;
}
}
}
if (c.tp.isClassGame_ProxyOnGameStart(t)) {
var g = t.args ? t.args[0] : null;
if (g && g.data && g.data.newGame) {
l.storage.setItem("MoreAreaTKXC", 0);
this.curScore = 0;
}
}
if (c.tp.isAlgorithmSDKTraitInfoGetMoreAreaFill(t) && h.algorithmName.algoActualId == f.OFFER_TYPE.CLEAR_BOARD && p.gameInfo.gameMode === u.GameMode.Class) {
var _ = this.calcClassLowEfficiencyNextTimes();
_.valid && _.nextTimes >= this.continuousThreshold && (t.args[0] = !0);
}
};
e.prototype.replaceAlgorithm = function(t) {
for (var e = 0; e < t.length; e++) {
var r = t[e];
if (r == f.OFFER_TYPE.TIAN_KONG_XIAO_CHU || r == f.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) {
t.splice(e, 0, f.OFFER_TYPE.ALGO_FILL_MORE_AREA);
return !0;
}
}
return !1;
};
e.prototype.checkNoReplace = function() {
for (var t = d.algorithmStrategyInfo.algorithmList || [], e = 0; e < t.length; e++) if (t[e] == f.OFFER_TYPE.CLASSTERMINATE_CYCLE) return !0;
return !1;
};
var r;
e.roundAvgNewPlayer = [ 38.8, 119.42, 277.22, 535.29, 917.94, 1453.22, 2102.52, 2840.54, 3630.66, 4457.54, 5301.4, 6145.31, 6996.73, 7831.55, 8653.27, 9454.57, 10229.07, 10980.83, 11703.94, 12406.62, 13085.65, 13752.23, 14388.48, 15009.41, 15605.82, 16196.66, 16771.54, 17335.41, 17902.95, 18442.7, 18988.84, 19525.74, 20059.67, 20573.16, 21089.93, 21578.43, 22115.86, 22606.72, 23114.66, 23614.35, 24135.78, 24666.36, 25160.91, 25653.25, 26067.62, 26578.39, 27090.16, 27550.54, 28048.15, 28637.33, 29122.47, 29605.34, 30025.25, 30447.97, 30913.83, 31308.02, 31772.2, 32217.48, 32681.56, 33166.66, 33691.49, 34283.48, 34871.03, 35287.52, 35818.27, 36202.96, 36622.35, 36954.63, 37337.89, 37877.75, 38359.79, 38665.7, 39111.13, 39301.61, 40024.24, 40565.82, 41113.43, 41629.23, 42386.45, 42470.86, 42880.58, 43443.86, 44174.93, 44557.48, 45192.32, 45284.05, 46092.99, 46791.04, 47568.7, 47869.04, 48759.1, 49577.54, 49699.02, 49795.67, 50813.35, 52259.89, 53030.52, 54085.88, 54435.59, 55466.98 ];
e.roundAvgActive = [ 31.99, 95.92, 203.34, 384.42, 662.9, 1036.57, 1521.19, 2131.49, 2842.77, 3613.21, 4409.53, 5204.1, 5984.74, 6749.72, 7496.22, 8221.75, 8927.82, 9611.23, 10271.25, 10911.04, 11529.2, 12127.44, 12709.23, 13276.46, 13829.03, 14374.38, 14911.45, 15439.91, 15966.86, 16490.03, 17012.11, 17531.88, 18045.39, 18563.67, 19078.18, 19597.03, 20109.64, 20615.91, 21119.69, 21615.24, 22109.8, 22597.75, 23085.31, 23554.46, 24018.97, 24487.9, 24952.08, 25416.04, 25870.42, 26326.94, 26777.58, 27221.58, 27665.36, 28107.83, 28541.88, 28984.72, 29411.66, 29838.1, 30270.33, 30715.32, 31134.04, 31577.08, 31998.77, 32437.05, 32872.84, 33321.43, 33729.04, 34175.28, 34597.16, 35034.94, 35459.24, 35894.26, 36325.42, 36740.49, 37163.14, 37594.69, 38035.16, 38496.01, 38932.37, 39389.05, 39860.76, 40358.07, 40803.97, 41293.8, 41728.22, 42155.06, 42638.53, 43094.91, 43621.18, 44057.18, 44506.58, 44979.79, 45515, 45940.26, 46420.43, 46940.03, 47402.79, 47839.3, 48364.63, 48883.74 ];
a([ s.Algorithm() ], e.prototype, "onActive", null);
return r = a([ classId("MoreAreaTKXCTrait") ], e);
}(n.Trait);
r.MoreAreaTKXCTrait = y;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
MoreTimeToOpreateStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e048cUxw3JFWKrJf4P9K1OD", "MoreTimeToOpreateStateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MoreTimeToOpreateStateTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countDownStart = null;
e._countDownGameOverStatusLast = null;
e.startTime = 0;
e._isCanPutBlock = !1;
e.component = null;
e.disTime = 0;
e.countDownEnabled = !1;
return e;
}
e.prototype.onCreate = function() {
var t = this;
cc.director.on(cc.Director.EVENT_AFTER_UPDATE, function(e) {
if (t.countDownEnabled) {
t.disTime += e;
if (t.disTime >= 1) {
t.countDownEnabled = !1;
t.disTime = 0;
t.onNotCanPut();
}
}
}, this);
};
e.prototype.onActive = function(t) {
var e = this;
if (s.tp.isBlocksProducerTouchOnTouchStart(t)) {
this.startTime = new Date().getTime();
if (!cc.isValid(this.component)) return;
if (this._isCanPutBlock) {
this.countDownEnabled = !1;
if (this._countDownStart) {
this.component.unschedule(this._countDownStart);
this._countDownStart = null;
}
this._countDownStart = function() {
if (e._countDownStart) {
cc.isValid(e.component) && e.component.unschedule(e._countDownStart);
e._countDownStart = null;
}
e.onNotCanPut();
};
this.component.scheduleOnce(this._countDownStart, 10);
}
}
if (s.tp.isBlocksProducerTouchOnTouchEnd(t)) {
if (!cc.isValid(this.component)) return;
if (this._isCanPutBlock) {
if (this._countDownStart) {
this.component.unschedule(this._countDownStart);
this._countDownStart = null;
}
if (this._countDownGameOverStatusLast) {
this.component.unschedule(this._countDownGameOverStatusLast);
this._countDownGameOverStatusLast = null;
}
this.onNotCanPut();
}
}
if (s.tp.isBlocksProducerTouchShowGameOverStatus(t)) {
this.component = t.target;
t.replace = !0;
this._isCanPutBlock = !0;
if (this.component.isTouchDown) {
var r = (new Date().getTime() - this.startTime) / 1e3;
if (r >= 10) this.onNotCanPut(); else {
var o = 10 - r;
if (this._countDownGameOverStatusLast) {
this.component.unschedule(this._countDownGameOverStatusLast);
this._countDownGameOverStatusLast = null;
}
this._countDownGameOverStatusLast = function() {
cc.isValid(e.component) && e.component.unschedule(e._countDownGameOverStatusLast);
e._countDownGameOverStatusLast = null;
e.onNotCanPut();
};
this.component.scheduleOnce(this._countDownGameOverStatusLast, o);
}
} else this.countDownEnabled = !0;
}
if (s.tp.isBlocksProducerTouchOnDisable(t)) {
this.countDownEnabled = !1;
if (!cc.isValid(this.component)) return;
if (this._countDownGameOverStatusLast) {
this.component.unschedule(this._countDownGameOverStatusLast);
this._countDownGameOverStatusLast = null;
}
if (this._countDownStart) {
this.component.unschedule(this._countDownStart);
this._countDownStart = null;
}
}
};
e.prototype.onNotCanPut = function() {
this._isCanPutBlock = !1;
if (cc.isValid(this.component)) {
this.component.onCanNotPut();
this.component = null;
}
};
return a([ classId("MoreTimeToOpreateStateTrait") ], e);
}(n.Trait);
r.MoreTimeToOpreateStateTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
NewBestScoreEffect: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "84577uYyB1EG5ZIpo3wKqfO", "NewBestScoreEffect");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../scripts/base/components/Component"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ndDragonBones_in = null;
e.ndDragonBones_in_mask = null;
e.lbHighScore = null;
return e;
}
e.prototype.render = function() {
this.ndDragonBones_in.node.active = !0;
var t = this.state.highScore;
this.lbHighScore.string = t.toString();
this.playAnimal();
};
e.prototype.playAnimal = function() {
var t = this;
this.node.opacity = 255;
this.ndDragonBones_in.node.active = !0;
this.ndDragonBones_in_mask.node.active = !0;
this.ndDragonBones_in.playAnimation("in", 1);
this.ndDragonBones_in_mask.playAnimation("in_mask", 1);
this.lbHighScore.node.opacity = 0;
this.lbHighScore.node.y = -30;
cc.tween(this.lbHighScore.node).delay(1.5).to(.2, {
opacity: 255,
y: -280
}).start().to(.15, {
y: -250
}).start().delay(.45).to(.1, {
opacity: 0
}).call(function() {
t.ndDragonBones_in.node.active = !1;
t.ndDragonBones_in_mask.node.active = !1;
t.node.opacity = 0;
}).start();
};
a([ l(dragonBones.ArmatureDisplay) ], e.prototype, "ndDragonBones_in", void 0);
a([ l(dragonBones.ArmatureDisplay) ], e.prototype, "ndDragonBones_in_mask", void 0);
a([ l(cc.Label) ], e.prototype, "lbHighScore", void 0);
return a([ c ], e);
}(n.default);
r.default = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0
} ],
NewSeasonGuidanceComponent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1cbba0g0AhMdZWSOkOGwtTr", "NewSeasonGuidanceComponent");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../../scripts/base/components/Component"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.armatureDisplay = null;
return e;
}
e.prototype.onLoad = function() {
this.armatureDisplay && this.armatureDisplay.playAnimation("in", 1);
};
e.prototype.render = function() {
var t, e, r = this;
this.node.active = null !== (t = this.state.isVisible) && void 0 !== t && t;
var o = this.state.aniName;
null === (e = this.armatureDisplay) || void 0 === e || e.playAnimation(o, 1);
var i = this.node.parent;
cc.isValid(i) && cc.tween(i).delay(.25).call(function() {
r.node.setSiblingIndex(i.childrenCount);
}).start();
};
a([ l(dragonBones.ArmatureDisplay) ], e.prototype, "armatureDisplay", void 0);
return a([ c ], e);
}(n.default);
r.default = p;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/components/Component": void 0
} ],
NewSeasonGuidanceTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f81d0a7N9VMtYcGP2VuzQPC", "NewSeasonGuidanceTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewSeasonGuidanceTrait = void 0;
var n = t("../../../../../../../scripts/base/loader/ResLoader"), s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo"), p = t("../../../../../../../scripts/modules/launch/vo/LaunchInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = t("../../prefab/TraitsPrefabConfig"), f = t("../components/traits/NewSeasonGuidanceComponent"), m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._journeyBtnNode = null;
e.dragonBonesNewSeasonGuidanceNode = null;
e.dragonBonesNewSeasonGuidanceTween = null;
return e;
}
e.prototype.onActive = function(t) {
u.tp.isChapterGame_GameInfoUpdate_ProxyUpdateChapterGameNumAfter(t) && (e = s.storage.getItem("chapterNum", 0)) >= l.chapterConfigInfo.chapterDatasCfg.length && s.storage.setItem("isShowNewSeasonGuidance", 1);
if (u.tp.isModeChoiceAddChildToBtn(t)) {
var e = s.storage.getItem("chapterNum", 0), r = p.launchInfo.openChapterModule() && 1 == p.launchInfo.isShowChapterRedPoint && 0 === e;
void 0 === s.storage.getItem("isShowNewSeasonGuidance") && r && s.storage.setItem("isShowNewSeasonGuidance", 1);
if (1 === s.storage.getItem("isShowNewSeasonGuidance")) {
this._journeyBtnNode = t.args[0];
this.addNewMod(this._journeyBtnNode, "in", !0);
}
}
if (u.tp.isModeChoiceOnJourneyClick(t) && 1 === s.storage.getItem("isShowNewSeasonGuidance")) {
s.storage.setItem("isShowNewSeasonGuidance", 0);
this.removeDragonBonesNewSeasonGuidanceNode();
}
u.tp.isChapterGame_ProxyOnStartGame(t) && s.storage.setItem("isShowNewSeasonGuidance", 0);
};
e.prototype.addNewMod = function(t, e, r) {
var o = this;
void 0 === e && (e = "in");
if (cc.isValid(t)) {
var i = t.getChildByName("NewSeasonGuidanceTrait");
if (cc.isValid(i)) {
var a = i.getComponent(f.default);
a && a.setState({
aniName: e,
isVisible: r
});
} else r && n.ResLoader.loadByBundle("mainTraits", d.TraitsPrefabConfig.NewSeasonGuidance.url, cc.Prefab, function(i, a) {
if (i) ; else if (cc.isValid(t)) {
var n = cc.instantiate(a);
o.dragonBonesNewSeasonGuidanceNode = n;
n.setParent(t);
n.name = "NewSeasonGuidanceTrait";
var s = n.getComponent(f.default);
s && s.setState({
aniName: e,
isVisible: r
});
t.scale = 1;
o.dragonBonesNewSeasonGuidanceTween = cc.tween(t).repeatForever(cc.tween().delay(1).to(.1, {
scaleX: 1.2,
scaleY: .8
}).to(.1, {
scaleX: .8,
scaleY: 1.2
}).to(.1, {
scaleX: 1.1,
scaleY: .9
}).to(.1, {
scaleX: 1,
scaleY: 1
}).delay(5)).start();
}
});
}
};
e.prototype.removeDragonBonesNewSeasonGuidanceNode = function() {
var t;
if (this.dragonBonesNewSeasonGuidanceTween) {
this.dragonBonesNewSeasonGuidanceTween.stop();
this.dragonBonesNewSeasonGuidanceTween = null;
}
(null === (t = this.dragonBonesNewSeasonGuidanceNode) || void 0 === t ? void 0 : t.parent) && (this.dragonBonesNewSeasonGuidanceNode.parent.scale = 1);
if (this.dragonBonesNewSeasonGuidanceNode && cc.isValid(this.dragonBonesNewSeasonGuidanceNode)) {
this.dragonBonesNewSeasonGuidanceNode.destroy();
this.dragonBonesNewSeasonGuidanceNode = null;
}
};
return a([ classId("NewSeasonGuidanceTrait") ], e);
}(c.Trait);
r.NewSeasonGuidanceTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/chapterConfig/vo/ChapterConfigInfo": void 0,
"../../../../../../../scripts/modules/launch/vo/LaunchInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig",
"../components/traits/NewSeasonGuidanceComponent": "NewSeasonGuidanceComponent"
} ],
New_best_scoreTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1fc577msh9K1oAapzh51ubJ", "New_best_scoreTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.New_best_scoreTrait = void 0;
var c = t("../../../../../../../scripts/base/layer/GameLayer"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/base/ui/UI"), u = t("../../../../../../../scripts/modules/board/components/Board"), d = t("../../../../../../../scripts/modules/encourage/type/EncourageType"), f = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), m = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = t("../../prefab/TraitsPrefabConfig"), y = t("../components/NewBestScoreEffect"), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.clearScreen = !1;
return e;
}
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
var e, r, o, i, a, n;
return s(this, function(s) {
switch (s.label) {
case 0:
if (m.tp.isEncourage_ProxyOnTouchEnd(t)) {
e = t.args[0];
this.clearScreen = e.state.clearScreen;
}
if (!m.tp.isEncourage_ProxyOnEncourageEffectsPlay(t)) return [ 3, 4 ];
if ((e = t.args[0]).state.type !== d.EncourageType.NEW_HIGH_SCORE) return [ 3, 4 ];
t.args[1] = !1;
return this.clearScreen ? [ 4, this.delay(1.5) ] : [ 3, 2 ];

case 1:
s.sent();
s.label = 2;

case 2:
r = e.state.highScore;
return [ 4, p.UI.show(h.TraitsPrefabConfig.NewBestScoreEffect, f.gameEffectLayer) ];

case 3:
o = s.sent();
if (!cc.isValid(o)) return [ 2 ];
i = Cinst(u.default);
if (!cc.isValid(i) || !cc.isValid(i.node)) return [ 2 ];
a = i.node.parent.convertToWorldSpaceAR(i.node.getPosition());
n = c.gameUiLayer.convertToNodeSpaceAR(a);
o.setPosition(n);
o.getComponent(y.default).setState({
highScore: r
});
s.label = 4;

case 4:
m.tp.isEncourage_ProxyOnGameReplay(t) && p.UI.hideUI(h.TraitsPrefabConfig.NewBestScoreEffect);
m.tp.isEncourage_ProxyOnGameOverGameEnd(t) && p.UI.hideUI(h.TraitsPrefabConfig.NewBestScoreEffect);
return [ 2 ];
}
});
});
};
e.prototype.delay = function(t) {
return new Promise(function(e) {
cc.tween(f.gameEffectLayer).delay(t).call(function() {
e();
}).start();
});
};
return a([ classId("New_best_scoreTrait") ], e);
}(l.Trait);
r.New_best_scoreTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../../scripts/modules/encourage/type/EncourageType": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig",
"../components/NewBestScoreEffect": "NewBestScoreEffect"
} ],
New_clear_effectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9d55ezQiQhFpL35vfZJnOWF", "New_clear_effectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.New_clear_effectTrait = r.BgMaterialList = r.BoardEffectUrlList = r.BgDragonBonesUrl = r.FrameDragonBonesUrl = void 0;
var c = t("../../../../../../../scripts/base/animation/DragonbonesAnim"), l = t("../../../../../../../scripts/base/layer/GameLayer"), p = t("../../../../../../../scripts/base/loader/ResLoader"), u = t("../../../../../../../scripts/base/shake/Shake"), d = t("../../../../../../../scripts/base/trait/Trait"), f = t("../../../../../../../scripts/base/ui/UI"), m = t("../../../../../../../scripts/modules/board/components/Board"), h = t("../../../../../../../scripts/modules/dragonBones/DragonBonesConfig"), y = t("../../../../../../../scripts/modules/game/type/GameType"), g = t("../../../../../../../scripts/modules/game/vo/GameInfo"), _ = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), v = t("../../prefab/TraitsPrefabConfig");
r.FrameDragonBonesUrl = "dragonbones/boardEffect/trait/new_clear_effect/gameplay_moreEliminate_tilemapFrame_ske";
r.BgDragonBonesUrl = "dragonbones/boardEffect/trait/new_clear_effect/gameplay_moreEliminate_bgPar_ske";
r.BoardEffectUrlList = [ "textures/board/new_clear_effect/tilemap_blue", "textures/board/new_clear_effect/tilemap_cyan", "textures/board/new_clear_effect/tilemap_blue", "textures/board/new_clear_effect/tilemap_blue", "textures/board/new_clear_effect/tilemap_purple" ];
r.BgMaterialList = [ "materials/new_clear_effect/cyan_effect", "materials/new_clear_effect/cyan_effect", "materials/new_clear_effect/blue_3_effect", "materials/new_clear_effect/blue_4_effect", "materials/new_clear_effect/purple_effect" ];
var T = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isShaking = !1;
return e;
}
e.prototype.data = function() {
return {
eliminateCount: 0,
isGuideEnd: !1
};
};
e.prototype.onActive = function(t) {
if (_.tp.isBoardEffect_ProxyOnTouchEnd(t)) {
var e = t.args[0].state.eliminateCount;
this.state.eliminateCount = e;
this.playAnimation();
}
};
e.prototype.getEliminateEffectLevel = function() {
var t = this.state.eliminateCount;
return t <= 2 ? 1 : Math.min(t - 1, 5);
};
e.prototype.playAnimation = function() {
return n(this, void 0, Promise, function() {
var t = this;
return s(this, function() {
g.gameInfo.gameMode, y.GameMode.Class;
if (this.state.eliminateCount <= 0) return [ 2 ];
setTimeoutSafe(function() {
t.playFrameEffect();
t.playBgAnimation();
t.playScreenShake();
t.playBoardEffect();
}, 100);
return [ 2 ];
});
});
};
e.prototype.playScreenShake = function() {
var t, e = this.getEliminateEffectLevel();
if (!(e < 2)) {
var r = null !== (t = [ 0, 0, 4, 4, 6, 8 ][e]) && void 0 !== t ? t : 8;
u.shake.startWithAmplitude(.33, r, .066);
}
};
e.prototype.playFrameEffect = function() {
return n(this, void 0, void 0, function() {
var t, e, r, o;
return s(this, function(i) {
switch (i.label) {
case 0:
return [ 4, CinstAsync(m.default) ];

case 1:
if (!(t = i.sent())) return [ 2 ];
if ((e = this.getEliminateEffectLevel()) < 2) return [ 2 ];
r = {
armatureName: "armatureName",
animationName: "in_" + e,
playTimes: 1
};
(o = c.dragonbonesAnim.play(t.node, r, h.DragonBonesConfig.new_clear_effectFrame)) && (o.scale = 2);
return [ 2 ];
}
});
});
};
e.prototype.playBgAnimation = function() {
return n(this, void 0, void 0, function() {
var t, e, r;
return s(this, function() {
if ((t = this.getEliminateEffectLevel()) < 2) return [ 2 ];
e = null;
if (e = g.gameInfo.gameMode === y.GameMode.Chapter ? l.gameUiLayer.getChildByName("ChapterGame") : l.gameUiLayer.getChildByName("ClassGame")) {
r = e.getChildByName("bgContainer");
this.playBgEffect(t, r);
}
return [ 2 ];
});
});
};
e.prototype.playBgEffect = function(t, e) {
return n(this, void 0, Promise, function() {
var o, i;
return s(this, function(a) {
switch (a.label) {
case 0:
if (t >= 4) {
o = {
armatureName: "armatureName",
animationName: "in_" + t,
playTimes: 1
};
c.dragonbonesAnim.play(e, o, h.DragonBonesConfig.new_clear_effectBg);
}
return [ 4, f.UI.show(v.TraitsPrefabConfig.BGEffect, e) ];

case 1:
i = a.sent();
p.ResLoader.loadByBundle("mainTraits", r.BgMaterialList[t - 1], cc.Material, function(t, e) {
if (t) ; else if (i) {
i.getComponent(cc.Sprite).setMaterial(0, e);
i.opacity = 0;
cc.tween(i).to(.2, {
opacity: 255
}, {
easing: "backOut"
}).to(2.33, {
opacity: 0
}, {
easing: "backIn"
}).call(function() {
i && f.UI.hide(i);
}).start();
}
});
return [ 2 ];
}
});
});
};
e.prototype.playBoardEffect = function() {
return n(this, void 0, Promise, function() {
var t, e, o, i;
return s(this, function(a) {
switch (a.label) {
case 0:
return [ 4, CinstAsync(m.default) ];

case 1:
if (!(t = a.sent())) return [ 2 ];
if ((e = this.getEliminateEffectLevel()) < 2) return [ 2 ];
o = t.node.getChildByName("boardGrid");
return [ 4, f.UI.show(v.TraitsPrefabConfig.BoardEffect, o) ];

case 2:
i = a.sent();
p.ResLoader.loadByBundle("mainTraits", r.BoardEffectUrlList[e - 1], cc.SpriteFrame, function(t, e) {
t || i && (i.getComponent(cc.Sprite).spriteFrame = e);
});
cc.tween(i).to(.2, {
opacity: 255
}, {
easing: "backOut"
}).to(2, {
opacity: 0
}, {
easing: "backIn"
}).call(function() {
i && f.UI.hide(i);
}).start();
return [ 2 ];
}
});
});
};
return a([ classId("New_clear_effectTrait") ], e);
}(d.Trait);
r.New_clear_effectTrait = T;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/animation/DragonbonesAnim": void 0,
"../../../../../../../scripts/base/layer/GameLayer": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/shake/Shake": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/ui/UI": void 0,
"../../../../../../../scripts/modules/board/components/Board": void 0,
"../../../../../../../scripts/modules/dragonBones/DragonBonesConfig": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0,
"../../prefab/TraitsPrefabConfig": "TraitsPrefabConfig"
} ],
New_player_direct_guide_to_thirdTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "cbda3GsDCJDqZk6R3V7Gt18", "New_player_direct_guide_to_thirdTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.New_player_direct_guide_to_thirdTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e = n.storage.getItem("classGuideStep", 0);
if (c.tp.isLaunch_ProxyOnTraitConfigInitComplete(t)) {
if (e >= 2) return;
n.storage.setItem("classGuideStep", 2);
}
};
return a([ classId("New_player_direct_guide_to_thirdTrait") ], e);
}(s.Trait);
r.New_player_direct_guide_to_thirdTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
NoShowInterAdRateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "17077GrXe9LOov9ISrzhWH6", "NoShowInterAdRateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NoShowInterAdRateTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (s.tp.isChapterAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) && this.isCanNoPlayAdInterstitial()) {
t.args[0] = !0;
t.returnState = !0;
}
if (s.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t) && this.isCanNoPlayAdInterstitial()) {
t.args[0] = !0;
t.returnState = !0;
}
if (s.tp.isGameLobby_FullScreen_ProxyShieldPlayAdvertisement(t) && this.isCanNoPlayAdInterstitial()) {
t.args[0] = !0;
t.returnState = !0;
}
if (s.tp.isJewelAdvertisement_FullScreen_ProxyShieldPlayAdvertisement(t) && this.isCanNoPlayAdInterstitial()) {
t.args[0] = !0;
t.returnState = !0;
}
s.tp.isAppShowPlayInterstitialAdTraitCanPlayInterstitialAd(t) && this.isCanNoPlayAdInterstitial() && (t.returnState = !1);
};
e.prototype.isCanNoPlayAdInterstitial = function() {
return Math.random() <= this.props.Rate;
};
return a([ classId("NoShowInterAdRateTrait") ], e);
}(n.Trait);
r.NoShowInterAdRateTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
OpenChangeContinueHardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4e02a1p/rpDM6CjRsrmQ9am", "OpenChangeContinueHardTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.OpenChangeContinueHardTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), c = t("../../../../../../../scripts/base/storage/Storage"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), u = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), d = t("../../../../../../../scripts/modules/game/vo/GameInfo"), f = t("../../../../../../../scripts/modules/game/type/GameType"), m = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isLoadLocalData = !1;
e.localData = {};
return e;
}
e.prototype.data = function() {
if (!this.isLoadLocalData) {
this.loadLocalData();
this.isLoadLocalData = !0;
}
return this.localData;
};
e.prototype.onActive = function(t) {
var e;
if (d.gameInfo.gameMode == f.GameMode.Class) {
if (l.tp.isClassGame_ProxyNewGameInit(t)) {
var r = c.storage.getItem("classGameNum", 0);
this.state.gameNum = r;
this.state.lastRoundNum = null;
this.state.hardSuccessContinueNum = 0;
this.saveLocalData();
}
if (l.tp.isAlgorithmProcessInfoOnResultSuccess(t)) {
if (d.gameInfo.gameMode != f.GameMode.Class) return;
r = c.storage.getItem("classGameNum", 0);
var o = c.storage.getItem("classRoundNum", 0), i = !1;
if (this.state.gameNum != r) {
this.state.gameNum = r;
this.state.lastRoundNum = null;
this.state.hardSuccessContinueNum = 0;
i = !0;
}
if (this.state.lastRoundNum != o && (null === (e = p.algorithmName.algoActualName[0]) || void 0 === e ? void 0 : e.includes("难题"))) {
this.state.hardSuccessContinueNum++;
this.state.lastRoundNum = o;
i = !0;
}
i && this.saveLocalData();
}
if ((l.tp.isClassAlgorithmProcessInfoBottomStart(t) || l.tp.isChapterAlgorithmProcessInfoBottomStart(t)) && (2 == this.state.hardSuccessContinueNum && (p.algorithmName.algoActualName.every(function(t) {
return t == m.ALGO_NAME_TYPE.NAME_RANDOM;
}) || p.algorithmName.algoActualName.every(function(t) {
return t == m.ALGO_NAME_TYPE.NAME_SHANG3;
})) || 3 == this.state.hardSuccessContinueNum)) {
t.args[0] = t.args[0] || [];
t.args[0].push(u.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU);
p.algorithmName.setAlgoExpectedId(u.OFFER_TYPE.NONE);
p.algorithmName.setAlgoExpectedId(u.OFFER_TYPE.TIAN_KONG_XIAO_CHU);
this.state.hardSuccessContinueNum = 0;
this.saveLocalData();
}
}
};
e.prototype.loadLocalData = function() {
var t = c.storage.getItem("OpenChangeContinueHardTraitState", {});
this.localData = t || {};
};
e.prototype.saveLocalData = function() {
c.storage.setItem("OpenChangeContinueHardTraitState", this.localData);
};
a([ s.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("OpenChangeContinueHardTrait") ], e);
}(n.Trait);
r.OpenChangeContinueHardTrait = h;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
OpenComboModelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "34e3caWPS5DEY6vr7hlQroh", "OpenComboModelTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.OpenComboModelTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/game/type/GameType"), p = t("../../../../../../../scripts/modules/game/vo/GameInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
isHitScoreNode: !1,
eliminationFontUrl: "fonts/comboScoreTip/scoreTip1",
fontUrl: "fonts/comboScoreTip/scoreTip2",
fontSize: 50
};
};
e.prototype.onActive = function(t) {
var e = this;
if (u.tp.isComboScoreTipPlayNodeAnimation(t)) {
var r = t.target, o = r.state, i = o.score, a = (o.eliminateCount, o.combo), n = TRAIT("CTChapterScoreComboTrait");
if (null == n ? void 0 : n.active) ; else if (l.GameMode.Chapter === p.gameInfo.gameMode) return;
if (isNaN(i)) return;
if (!this.bg) {
var c = new cc.Node();
this.bg = c.addComponent(cc.Sprite);
c.name = "ComboScoreTipBg";
r.node.addChild(c);
}
cc.isValid(this.bg) && (this.bg.node.active = !0);
s.ResLoader.loadByBundle("class", "textures/comboScoreTip/ComboScoreTipBg1", cc.SpriteFrame, function(t, r) {
t || cc.isValid(e.bg) && (e.bg.spriteFrame = r);
});
var d = a > 1 ? this.state.eliminationFontUrl : this.state.fontUrl, f = a > 1 ? -55 : -5, m = a > 1 ? 120 : 0, h = {
fontSize: this.state.fontSize,
fontUrl: d,
fontStr: i + "",
spacingX: f
};
this.showComboScoreTip(r, h, m);
t.replace = !0;
}
};
e.prototype.getScoreInfo = function(t, e, r, o) {
return {
fontSize: t,
fontUrl: e,
fontStr: r,
spacingX: o
};
};
e.prototype.showComboScoreTip = function(t, e, r) {
var o = this, i = this.getScoreInfo(e.fontSize, e.fontUrl, e.fontStr, e.spacingX), a = i.fontSize, n = i.fontUrl, c = i.fontStr, u = i.spacingX, d = c.startsWith("+") ? c : "+" + c, f = t.state, m = (f.score, 
f.eliminateCount), h = f.x, y = f.y, g = t.node, _ = t.scoreLabel, v = (t.timeNum, 
t.speedRate), T = t.maxScale;
t.nNumTime;
s.ResLoader.load(n, cc.Font, function(e, i) {
if (!e && cc.isValid(g)) {
_.fontSize = a;
_.font = i;
_.spacingX = u;
_.string = d;
g.x = h;
g.y = y + r;
g.opacity = 0;
g.scale = 0;
if (p.gameInfo.gameMode !== l.GameMode.Chapter) if (m > 1) {
var n = cc.tween(g).call(function() {
g.opacity = 255;
}).to(.17 * v, {
scale: 1.3 * T
}).to(.08 * v, {
scale: T
}).to(.25 * v, {
scale: T
});
o.state.isHitScoreNode || n.to(.25 * v, {
opacity: 0
});
n.call(function() {
cc.isValid(o.bg.node) && (o.bg.node.active = !1);
t.animalEndScoreNode();
}).start();
} else {
n = cc.tween(g).to(.12 * v, {
opacity: 255,
scale: T,
x: h
}).delay(.3);
o.state.isHitScoreNode || n.to(.1 * v, {
opacity: 0
}, {
easing: cc.easing.sineOut
});
n.call(function() {
cc.isValid(o.bg.node) && (o.bg.node.active = !1);
t.animalEndScoreNode();
}).start();
} else cc.tween(g).to(.4, {
opacity: 255,
scale: 1
}, {
easing: cc.easing.backOut
}).delay(.6).to(.1, {
opacity: 0
}, {
easing: cc.easing.sineOut
}).call(function() {
cc.isValid(o.bg.node) && (o.bg.node.active = !1);
t.animalEndScoreNode();
}).start();
}
});
};
a([ n.trait("IsOpenMotivatorComboTrait", "《无尽模式combo分数时机与显色优化》") ], e.prototype, "getScoreInfo", null);
a([ n.trait("IsOpenClassicAdaptScorePositionTrait", "《消除得分适配位置调整》修改offsetY") ], e.prototype, "showComboScoreTip", null);
return a([ n.templateTrait([ "ComboflyScoreTrait" ]), classId("OpenComboModelTrait") ], e);
}(c.Trait);
r.OpenComboModelTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
OpenComboSpecialColorTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "66ae0t0lqhDe613Git+f+lI", "OpenComboSpecialColorTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.OpenComboSpecialColorTrait = void 0;
var s = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), p = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), u = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo"), d = t("../../../../../../../scripts/modules/board/vo/BoardRendererInfo"), f = t("../../../../../../../scripts/modules/board/vo/BoardInfo"), m = t("../../../../../../../scripts/base/storage/Storage"), h = t("../../../../../../../scripts/base/numbers/numbers"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.alreadyGetColor = [];
return e;
}
e.prototype.data = function() {
return {
overSort: !1,
isSaveColor: !1,
arrColor: []
};
};
e.prototype.isTriggerTrait = function() {
var t = p.algorithmName.algoActualName;
if (this.state.isSaveColor) {
var e = new Set([ "填空消除", "次优解填空消除", "即可行消又可列消" ]);
if (t.some(function(t) {
return e.has(t);
})) return !0;
} else if (t.every(function(t) {
return "填空消除" === t;
})) return !0;
return !1;
};
e.prototype.onActive = function(t) {
if (y.tp.isClassColorProducer_ProxyProduceColorBase(t) && this.isTriggerTrait()) {
this.getColorArr();
t.replace = !0;
t.returnState = !0;
}
};
e.prototype.getColorArr = function() {
var t, e = l.algorithmInfo.blockIdList;
t = l.algorithmInfo.blockPosList ? this.processNormalColorLogic(e) : this.processGuideColorLogic(e);
this.saveColorResult(t);
};
e.prototype.processNormalColorLogic = function(t) {
var e = [ l.algorithmInfo.blockPosList[0], l.algorithmInfo.blockPosList[1], l.algorithmInfo.blockPosList[2] ];
this.alreadyGetColor.length = 0;
var r = f.boardInfo.faceBlocks, o = [ 0, 0, 0 ];
if (!this.validateSaveArr(r)) return [ 0, 0, 0 ];
this.updateArrColorIfNeeded(r);
for (var i = 0; i < e.length; i++) {
var a = e[i];
a && (o[i] = this.processBlockColor(t[i], a, r, i));
a && 0 !== o[i] || (o[i] = this.getRandomColor(i));
r = this.putBlock(t[i], a.row, a.col, r, o[i]);
}
return o;
};
e.prototype.validateSaveArr = function(t) {
return !(!t || !Array.isArray(t) || 0 === t.length);
};
e.prototype.updateArrColorIfNeeded = function(t) {
var e, r, o, i;
if (this.state.isSaveColor) {
this.state.arrColor = [];
try {
for (var a = n(t), s = a.next(); !s.done; s = a.next()) {
var c = s.value;
try {
for (var l = (o = void 0, n(c)), p = l.next(); !p.done; p = l.next()) {
var u = p.value;
u >= 1 && u <= 7 && !this.state.arrColor.includes(u) && this.state.arrColor.push(u);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
p && !p.done && (i = l.return) && i.call(l);
} finally {
if (o) throw o.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (r = a.return) && r.call(a);
} finally {
if (e) throw e.error;
}
}
}
};
e.prototype.processBlockColor = function(t, e, r) {
for (var o = [ {
dex: 1,
num: 0
}, {
dex: 2,
num: 0
}, {
dex: 3,
num: 0
}, {
dex: 4,
num: 0
}, {
dex: 5,
num: 0
}, {
dex: 6,
num: 0
}, {
dex: 7,
num: 0
} ], i = this.getBlockpPsArr(t), a = 0; a < i.length; a++) {
var n = i[a], s = this.getSurroundingColors(n, e, r);
o = this.updateTmpColorArr(s.left, o);
o = this.updateTmpColorArr(s.right, o);
o = this.updateTmpColorArr(s.up, o);
o = this.updateTmpColorArr(s.down, o);
}
if (i) {
o.sort(function(t, e) {
return e.num - t.num;
});
var c = o[0];
if (c && c.num > 0) {
this.alreadyGetColor.push(c.dex);
return c.dex;
}
}
return 0;
};
e.prototype.getSurroundingColors = function(t, e, r) {
var o = t.x + e.col, i = t.y + e.row, a = -1;
i - 1 >= 0 && i - 1 < r.length && o >= 0 && o < r[i - 1].length && (a = r[i - 1][o]);
var n = -1;
i + 1 >= 0 && i + 1 < r.length && o >= 0 && o < r[i + 1].length && (n = r[i + 1][o]);
var s = -1;
i >= 0 && i < r.length && o - 1 >= 0 && o - 1 < r[i].length && (s = r[i][o - 1]);
var c = -1;
i >= 0 && i < r.length && o + 1 >= 0 && o + 1 < r[i].length && (c = r[i][o + 1]);
return {
up: a,
down: n,
left: s,
right: c
};
};
e.prototype.getRandomColor = function() {
for (var t = [], e = [], r = 1; r < 8; r++) if (-1 == this.alreadyGetColor.indexOf(r)) if (this.state.isSaveColor) {
-1 == this.state.arrColor.indexOf(r) && t.push(r);
e.push(r);
} else t.push(r);
if (this.state.isSaveColor && !t.length) {
e.sort(function() {
return Math.random() - .5;
});
var o = this.getInt(0, e.length - 1);
t[0] = e[o];
}
t.sort(function() {
return Math.random() - .5;
});
var i = this.getInt(0, t.length - 1), a = 1;
if (t[i]) {
a = t[i];
this.alreadyGetColor.push(a);
}
return a;
};
e.prototype.processGuideColorLogic = function(t) {
var e = m.storage.getItem("classGameNum", 0), r = m.storage.getItem("classRoundNum", 0);
if (0 == e && 1 == r && t && 3 == t.length && -1 != t.indexOf(9)) {
for (var o = [ 0, 0, 0 ], i = [ 1, 3, 4, 5, 6, 7 ], a = 0; a < t.length; a++) if (9 == t[a]) o[a] = 2; else {
var n = i[h.randomInt(0, i.length - 1)];
o[a] = n;
}
return o;
}
return [ 0, 0, 0 ];
};
e.prototype.saveColorResult = function(t) {
t.includes(0) || m.storage.setItem("classColorLists", t);
};
e.prototype.getBlockpPsArr = function(t) {
if (!t) return [];
var e = u.algorithmPosInfo.getPos(t);
if (!e || !Array.isArray(e) || 0 === e.length) return [];
for (var r = [], o = 0; o < e.length; o++) if (0 == o) {
var i = new cc.Vec2(0, 0);
r.push(i);
} else {
var a = Math.floor((e[o].x - e[0].x) / d.BLOCK_SIZE), n = -Math.floor((e[o].y - e[0].y) / d.BLOCK_SIZE);
i = new cc.Vec2(a, n);
r.push(i);
}
return r;
};
e.prototype.updateTmpColorArr = function(t, e) {
t && t > 0 && -1 === this.alreadyGetColor.indexOf(t) && e[t - 1] && e[t - 1].num++;
return e;
};
e.prototype.getFloat = function(t, e) {
return Math.random() * (e - t) + t;
};
e.prototype.getInt = function(t, e) {
return Math.round(this.getFloat(t, e));
};
e.prototype.putBlock = function(t, e, r, o, i) {
if (!e || !r) return o;
if (!o || !Array.isArray(o) || 0 === o.length) return o;
for (var a = this.getBlockpPsArr(t), n = [], s = 0; s < a.length; s++) if (0 == s) {
var c = new cc.Vec2(0, 0);
n.push(c);
} else {
var l = Math.floor((a[s].x - a[0].x) / d.BLOCK_SIZE), p = -Math.floor((a[s].y - a[0].y) / d.BLOCK_SIZE);
c = new cc.Vec2(l, p);
n.push(c);
}
for (var u = 0; u < n.length; u++) {
var f = e + n[u].y, m = r + n[u].x;
f >= 0 && f < o.length && m >= 0 && m < o[f].length && (o[f][m] = i);
}
return o;
};
return a([ s.templateTrait([ "IsOpenComboSpecialColor2Trait" ]), classId("OpenComboSpecialColorTrait") ], e);
}(c.Trait);
r.OpenComboSpecialColorTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/numbers/numbers": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmPosInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
OpenLevelModelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a7bf6rWurhPvZ1CM59mzyXo", "OpenLevelModelTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.OpenLevelModelTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isLaunchInfoChapterModelSwitch(t) && (t.args[0] = !0);
};
return a([ classId("OpenLevelModelTrait") ], e);
}(n.Trait);
r.OpenLevelModelTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ParallelClearHardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bb7a0IpWcZAVaNIMTVGV/vB", "ParallelClearHardTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ParallelClearHardTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig"), l = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType"), p = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), u = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), d = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), f = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (f.tp.isClassAlgorithmStrategy_Reset_ProxyPreprocessing_OtherTrait(t) && null == (o = n.storage.getItem("parallelClearHardObj", null))) {
var e = !1;
o && o.startTime && this.isToday(o.startTime) && (e = o.todayPlayed);
n.storage.setItem("parallelClearHardObj", {
startTime: new Date().getTime(),
downChanged: 0,
todayPlayed: e,
firstChanged: !1
});
}
if (f.tp.isClassGameDataClear_Disk_ProxyResetAlgorithmData(t)) {
e = !1;
(o = n.storage.getItem("parallelClearHardObj", null)) && o.startTime && this.isToday(o.startTime) && (e = o.todayPlayed);
n.storage.setItem("parallelClearHardObj", {
startTime: new Date().getTime(),
downChanged: 0,
todayPlayed: e,
firstChanged: !1
});
}
if (f.tp.isClassAlgorithmProcessInfoBottomOffer(t)) {
var r = t.args[0] || [], o = n.storage.getItem("parallelClearHardObj", null), i = n.storage.getItem("classScore", 0);
if (u.algorithmName.algoActualChangeName[0] == l.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO && i <= 3e3) return;
if (!o.firstChanged && this.curGameActive() && this.isHardOffer()) {
r.push(p.OFFER_TYPE.HPARALLELCLEAR_HARD);
t.args[0] = r;
return;
}
if (i > 3e4) return;
if (o.downChanged >= 5) return;
if (this.isHardDown()) {
r.push(p.OFFER_TYPE.HPARALLELCLEAR_HARD);
t.args[0] = r;
return;
}
}
f.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t) && "消两次难题" == u.algorithmName.algoActualChangeName[0] && (t.returnState = !0);
if (f.tp.isClassBlockOutStrategy_ProxyModifyBlockOutResult(t) && "消两次难题" == u.algorithmName.algoActualChangeName[0]) {
(o = n.storage.getItem("parallelClearHardObj", null)).firstChanged = !0;
this.isToday(o.startTime) && (o.todayPlayed = !0);
this.isHardDown() && o.downChanged++;
n.storage.setItem("parallelClearHardObj", o);
u.algorithmName.setAlgoExpectedId(p.OFFER_TYPE.NONE);
u.algorithmName.setAlgoExpectedId(p.OFFER_TYPE.HPARALLELCLEAR_HARD);
}
};
e.prototype.isToday = function(t) {
var e = new Date(t), r = new Date();
return e.getDate() == r.getDate() && e.getMonth() == r.getMonth() && e.getFullYear() == r.getFullYear();
};
e.prototype.curGameActive = function() {
var t = n.storage.getItem("classGameNum", 0), e = n.storage.getItem("parallelClearHardObj", null);
return t < 2 || (!e.todayPlayed || Math.random() < .5);
};
e.prototype.isHardOffer = function() {
var t = n.storage.getItem("parallelClearHardObj", null);
if ([ "困难难题", "死亡难题", "直觉难题", l.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE ].includes(c.OFFER_TYPE_STRINGS[u.algorithmName.algoExpectedId]) && !t.firstChanged) return !0;
var e = u.algorithmName.algoActualChangeName[0];
return !(![ "困难难题", "死亡难题", "直觉难题", l.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE ].includes(e) || t.firstChanged);
};
e.prototype.isHardDown = function() {
var t = c.OFFER_TYPE_STRINGS[u.algorithmName.algoExpectedId];
if (3 != u.algorithmName.algoActualChangeName.length) return !1;
var e = u.algorithmName.algoActualChangeName[0];
return !e.includes(l.ALGO_NAME_TYPE.NAME_REVIVE) && !(![ "困难难题", "死亡难题", "直觉难题", "简单直觉题" ].includes(t) || [ "困难难题", "死亡难题", "直觉难题", "简单直觉题" ].includes(e));
};
a([ d.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("ParallelClearHardTrait") ], e);
}(s.Trait);
r.ParallelClearHardTrait = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmNameType": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
Param230012Interface: [ function(t, e) {
"use strict";
cc._RF.push(e, "e7cc1YiMABEn623s2Opl1+g", "Param230012Interface");
cc._RF.pop();
}, {} ],
Param230012Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "db27cLEcWpHpbFEbc+vNgQH", "Param230012Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Param230012Trait = void 0;
var s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/score/vo/ScoreParam230012Info"), l = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dataCache = null;
e._lastDataTime = 0;
e.CACHE_DURATION = 100;
e.paramStrategies = {
3: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.played, n = Math.min(1 + Math.log10(1 + 8 * a), 1 + Math.log(1 + a / 50));
return Math.ceil(n * i);
},
4: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = 2.5 * o.ad1 + o.ad2, n = Math.min(1 + Math.log10(1 + 8 * a), 1 + Math.log(1 + a / 50));
return Math.ceil(n * i);
},
5: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curDay, n = a <= 0 ? 1 : Math.pow(a, .25);
return Math.ceil(n * i);
},
6: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.fakeDays, n = a <= 0 ? 1 : 1 + Math.log(a);
return Math.ceil(n * i);
},
7: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curRatio;
return Math.ceil(a * i);
},
8: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curDay / 3 + o.curTotal / 180 + o.played / 30, n = Math.min(1 + Math.log10(1 + 4 * a), 1 + Math.log(1 + a / 100));
return Math.ceil(n * i);
},
11: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curDay, n = a <= 0 ? 1 + 1 / (1 + a % 10) : 1 + Math.log10(a) + 1 / (1 + a % 10);
return Math.ceil(n * i);
},
12: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curDay, n = a <= 0 ? 1 : 1 + .5 * Math.log(2 * a);
return Math.ceil(n * i);
},
13: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curDay, n = a <= 0 ? 1 : 1 + 1.5 * Math.log(a);
return Math.ceil(n * i);
},
14: function(t, r, o) {
var i = e.calculateBaseScore(t, r), a = o.curDay, n = a <= 0 ? 1 : 1 + .05 * a;
return Math.ceil(n * i);
}
};
return e;
}
e.prototype.onCreate = function() {};
e.prototype.onActive = function(t) {
var e = this.props.type;
l.tp.isScore_Param230012_ProxyOnGameStart(t) && c.param230012Info.init(e);
l.tp.isScore_Param230012_ProxyOnGameInitComplete(t) && c.param230012Info.recordLogin(e);
l.tp.isClassGame_GameInfoUpdate_ProxyUpdateGameNumNoRefresh(t) && c.param230012Info.recordGame(e);
if (l.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(t)) {
var r = t.args[0];
c.param230012Info.recordAd(r, e);
}
if (l.tp.isClassScoreInfoGetEliminateScore(t) && this.getCachedData().inited) {
var o = n(t.args, 3), i = o[0], a = o[1], s = o[2], p = this.getScore(a, i, s);
t.returnValue = p;
t.returnState = !0;
}
l.tp.isNativeGameCallExitGame(t) && c.param230012Info.recordAppTime();
};
e.prototype.calculateBaseScore = function(t, e) {
return 1 === e ? 10 * t : 10 * t * e * (e - 1);
};
e.prototype.getCachedData = function() {
var t = Date.now();
if (!this._dataCache || t - this._lastDataTime > this.CACHE_DURATION) {
this._dataCache = c.param230012Info.paramData;
this._lastDataTime = t;
}
return this._dataCache;
};
e.prototype.getScore = function(t, e, r) {
var o = this.getCachedData();
if (!o.inited) return r;
var i = this.paramStrategies[this.props.type];
return i ? i(t, e, o) : r;
};
return a([ classId("Param230012Trait") ], e);
}(s.Trait);
r.Param230012Trait = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/score/vo/ScoreParam230012Info": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
PlacementBlocksEliminateEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2c6fetpv59GIamlSrsKCuJ8", "PlacementBlocksEliminateEffectTrait");
var o, i, a = this && this.__extends || (o = function(t, e) {
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
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PlacementBlocksEliminateEffectTrait = void 0;
var c = t("../../../../../../../scripts/base/copy/Copy"), l = t("../../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../../scripts/base/storage/Storage"), u = t("../../../../../../../scripts/base/trait/Trait"), d = t("../../../../../../../scripts/falcon/EventManager"), f = t("../../../../../../../scripts/modules/comboScoreTip/components/ComboScoreTip"), m = t("../../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_ScoreAnim"), h = t("../../../../../../../scripts/modules/game/type/GameType"), y = t("../../../../../../../scripts/modules/game/vo/GameInfo"), g = t("../../../../../../../scripts/modules/layer/vo/LayerInfo"), _ = t("../../../../../../../scripts/modules/prefab/PrefabConfig"), v = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), T = ((i = {})[1] = "blue", 
i[2] = "yellow", i[3] = "purple", i[4] = "orange", i[5] = "red", i[6] = "green", 
i[7] = "cyan", i), b = [ 1, 2, 37, 38 ], S = [ 6, 27, 28, 15, 3, 5, 4, 17, 7, 11, 22, 39, 40, 41 ], P = [ 2, 5 ], O = [ 1, 3 ];
function C(t, e) {
if (!t || 0 == t.length) return -1;
if (void 0 === e) return -1;
for (var r = 0; r < t.length; r++) if (t[r] === e) return r;
return -1;
}
var I = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._animPrefabs = null;
e._noFeedbackBlocks = null;
e._probTriggerBlocks = null;
e._probValue = null;
e._scoreInfo = null;
e._elementInfo = null;
e.classTriggerBlockIds = null;
e.travelTriggerBlockIds = null;
e._emptyGridInfo = [];
e.itemArr = [];
e._addScore = 0;
e._classScoreLabel = null;
return e;
}
e.prototype.onCreate = function() {
this.preloadResource();
};
e.prototype.onActive = function(t) {
var e, r;
if (v.tp.isClassTopInfoInitComboAnim(t)) {
var o = t.target.curScore;
this._classScoreLabel = o;
}
if (v.tp.isChapterGame_ProxyOnStartGame(t)) {
this.readData();
0 == p.storage.getItem("classScore", 0) && this.resetBlockIds();
}
v.tp.isClassGame_ProxyOnClassGameStart(t) && this.readData();
if (v.tp.isChapterScore_ProxyOnTouchEnd(t)) {
this.clearEmptyGridInfo();
var i = null === (e = t.args[0]) || void 0 === e ? void 0 : e.state;
this.handleEliminateScoreForChapter(i);
}
if (v.tp.isChapterTopInfo_CollectEffect_ProxyOnTouchEnd(t)) {
var a = t.args[0].state, n = a.eliminateInfos, s = a.putEliminatesInfo;
this.handleCollectEffectForChapter(n, s);
}
if (v.tp.isChapterCollect_ProxyOnTouchEnd(t)) {
var c = t.args[0].state.collectItems;
this.handleCollectDataForChapter(c);
}
v.tp.isClassScore_ProxyOnTouchEnd(t) && this.handleEliminateScoreForClassic(null === (r = t.args[0]) || void 0 === r ? void 0 : r.state);
v.tp.isClassScore_ProxyComputeScoreAddOption(t) && this.handleComputeScoreAddOptionForClassic();
};
e.prototype.getNotContainBlocks = function() {
if (null != this._noFeedbackBlocks) return this._noFeedbackBlocks;
this._noFeedbackBlocks = b;
return this._noFeedbackBlocks;
};
e.prototype.getProbTriggerBlocks = function() {
if (null != this._probTriggerBlocks) return this._probTriggerBlocks;
this._probTriggerBlocks = S;
return this._probTriggerBlocks;
};
e.prototype.getAddElementNum = function() {
if (null != this._elementInfo) return this._elementInfo;
this._elementInfo = O;
return this._elementInfo;
};
e.prototype.getAddScore = function() {
if (null != this._scoreInfo) return this._scoreInfo;
this._scoreInfo = P;
return this._scoreInfo;
};
e.prototype.getProbValue = function() {
if (void 0 !== this._probValue) return this._probValue;
this._probValue = .333334;
return this._probValue;
};
e.prototype.trigger = function(t, e) {
-1 !== C(this.getProbTriggerBlocks(), t) && this.getProbValue(), Math.random();
this.recordBlock(t, e);
return !0;
};
e.prototype.checkFullEliminate = function(t, e, r, o) {
if (0 == r) return !1;
if (-1 !== C(this.getNotContainBlocks(), t)) return !1;
for (var i = 0, a = 0; a < o.length; a++) {
var n = cc.v2(o[a].row, o[a].col);
this.isInEliminateArr(n, e) && (i += 1);
}
return i >= e.length;
};
e.prototype.isInEliminateArr = function(t, e) {
for (var r = 0; r < e.length; r++) if (this.isEqualVec2(t, e[r])) return !0;
return !1;
};
e.prototype.isEqualVec2 = function(t, e) {
return t.x == e.x && t.y == e.y;
};
e.prototype.addScore = function(t, e) {
var r = this.getAddScore(), o = -1 !== C(this.getProbTriggerBlocks(), t) ? r[0] : r[1];
return [ o, e * o ];
};
e.prototype.addElement = function(t) {
var e = this.getAddElementNum();
return -1 !== C(this.getProbTriggerBlocks(), t) ? e[0] : e[1];
};
e.prototype.clearEmptyGridInfo = function() {
this._emptyGridInfo.length = 0;
};
e.prototype.addEmptyGridInfo = function(t, e, r, o) {
for (var i = 0; i < o.length; i++) if (o[i].row == t && o[i].col == e) {
if (o[i].color > 100) return;
this._emptyGridInfo[this._emptyGridInfo.length] = [ t, e, r ];
}
};
e.prototype.addBlocksEliminateEffectForClassic = function(t, e, r) {
this.addBlocksEliminateEffect(t, e, r, !0, !0);
};
e.prototype.addBlocksEliminateEffectForChapter = function(t, e, r) {
var o = this.getConditionWay(), i = t.length * (r || 0);
if (i > 0) {
var a = p.storage.getItem("chapterScore", 0), n = Math.ceil(a + i);
p.storage.setItem("chapterScore", n);
}
this.addBlocksEliminateEffect(t, e, r, 0 == o, !1);
};
e.prototype.getAnimParent = function() {
return g.gameEffectLayer;
};
e.prototype.addBlocksEliminateEffect = function(t, e, r, o, i) {
var a = this;
if (this._animPrefabs) {
var n = [], s = this.getAnimParent();
if (s) {
for (var c = 0; c < t.length; c++) n[c] = [ t[c].x, t[c].y ];
cc.tween(s).delay(.16).call(function() {
for (var c = function(t) {
var c = cc.instantiate(a._animPrefabs);
s.addChild(c, 300);
c.x = n[t][0];
c.y = n[t][1];
c.getComponent(dragonBones.ArmatureDisplay).playAnimation(T[e], 1);
c.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function() {
c.destroy();
});
o && !0 !== s._skipAddBlocksEliminateEffectAnim && a.showBlockExtraScore(n[t], r, i);
}, l = 0; l < t.length; l++) c(l);
}).start();
}
}
};
e.prototype.showBlockExtraScore = function(t, e, r) {
var o = this;
l.ResLoader.load(_.PrefabConfig.ComboScoreTip.url, cc.Prefab, function(i, a) {
var n, s;
if (!i && cc.isValid(g.gameEffectLayer)) {
var c = cc.instantiate(a);
c.parent = g.gameEffectLayer;
var l = c.getComponent(f.default);
l.scoreLabel.string = e.toString();
var p = (null === (n = c.parent) || void 0 === n ? void 0 : n.convertToNodeSpaceAR(new cc.Vec2(t[0], t[1]))) || cc.v2(t[0], t[1]);
c.setPosition(p.x, p.y + 10);
var u = p.x, d = p.y;
if (cc.isValid(o._classScoreLabel) && r) {
var m = null === (s = o._classScoreLabel.node.parent) || void 0 === s ? void 0 : s.convertToWorldSpaceAR(o._classScoreLabel.node.getPosition()), h = c.parent.convertToNodeSpaceAR(m);
u = h.x;
d = h.y;
}
cc.tween(c).to(.3 * l.speedRate, {
opacity: 255,
scale: l.maxScale
}, {
easing: cc.easing.backInOut
}).delay(.2).delay(l.nNumTime).to(.4 * l.speedRate, {
x: u,
y: d,
opacity: 200,
scale: .5
}, {
easing: cc.easing.sineOut
}).call(function() {
c.opacity = 0;
c.destroy();
}).start();
}
});
};
e.prototype.addExtraElementEffect = function(t, e) {
var r = this.addElement(t), o = e.length - this._emptyGridInfo.length;
if (0 == (r = Math.min(r, e.length - o))) return null;
for (var i = [], a = {}, n = 0, s = p.storage.getItem("chapterCondition").RequiredCollections, c = p.storage.getItem("chapterCollectRemainCollectItems", {}), l = 0; l < s.length; l++) if (c[(m = s[l]).Key] > 0) {
i[i.length] = [ m.Key, c[m.Key], l ];
a[m.Key] = c[m.Key];
n += c[m.Key];
}
i.sort(function(t, e) {
return e[1] - t[1];
});
var u = [];
if (r <= i.length) for (var d = 0; d < r; d++) u[d] = [ i[d][0], 1, i[d][2] ]; else if (n > r) for (var f = 0; r > 0; ) {
var m;
if ((m = i[f])[1] > 0) {
u[f] = u[f] || [ m[0], 0, m[2] ];
u[f][1] = u[f][1] + 1;
r -= 1;
i[f][1] = i[f][1] - 1;
}
(f += 1) >= i.length && (f = 0);
} else {
r = Math.min(r, n);
for (d = 0; d < i.length; d++) u[d] = [ i[d][0], i[d][1], i[d][2] ];
}
u.sort(function(t, e) {
return e[1] - t[1];
});
return u;
};
e.prototype.addEliminateElements = function(t) {
if (0 != this.getConditionWay()) for (var e = c.deepCopy(this._emptyGridInfo), r = 0, o = 0; o < t.length; o++) for (var i = t[o], a = i[0], n = 0; n < i[1]; n++) {
var l = s(e[r], 3), p = l[0], u = l[1];
l[2];
r += 1;
var d = {
Key: a,
row: p,
col: u
};
this.itemArr.push(d);
}
};
e.prototype.getConditionWay = function() {
var t = p.storage.getItem("chapterCondition");
return null == t ? void 0 : t.Way;
};
e.prototype.recordBlock = function(t, e) {
var r = this.getBlockIDs(e);
r[r.length] = t;
this.saveData();
};
e.prototype.resetBlockIds = function() {
y.gameInfo.gameMode == h.GameMode.Class ? this.classTriggerBlockIds = [] : this.travelTriggerBlockIds = [];
this.saveData();
};
e.prototype.getBlockIDs = function(t) {
var e = t ? this.classTriggerBlockIds : this.travelTriggerBlockIds;
if (!e) {
e = [];
t ? this.classTriggerBlockIds = e : this.travelTriggerBlockIds = e;
}
return e;
};
e.prototype.saveData = function() {
cc.sys.localStorage.setItem("PlacementBlocksEliminateBlocks", JSON.stringify({
class: this.classTriggerBlockIds,
travel: this.travelTriggerBlockIds
}));
};
e.prototype.readData = function() {
this.itemArr = [];
if (!this.classTriggerBlockIds) {
var t = cc.sys.localStorage.getItem("PlacementBlocksEliminateBlocks");
if (null != t) {
var e = JSON.parse(t);
this.classTriggerBlockIds = e.class;
this.travelTriggerBlockIds = e.travel;
} else {
this.classTriggerBlockIds = [];
this.travelTriggerBlockIds = [];
this.saveData();
}
}
};
e.prototype.preloadResource = function() {
var t = this;
null == this._animPrefabs && l.ResLoader.loadByBundle("Remote_PlacementBlocksEliminateEffect", "placementBlockEliminateEffect", cc.Prefab, function(e, r) {
e || (t._animPrefabs = r);
});
};
e.prototype.isResourceLoaded = function() {
return !!cc.isValid(this._animPrefabs);
};
e.prototype.handleComputeScoreAddOptionForClassic = function() {
if (0 != this._addScore && this.isResourceLoaded()) {
var t = p.storage.getItem("classScore", 0), e = Math.ceil(t + this._addScore);
this._addScore = 0;
p.storage.setItem("classScore", e);
var r = p.storage.getItem("classHighScore", 0);
if (e > r) {
r = e;
p.storage.setItem("classHighScore", r);
}
d.EventManager.dispatchModuleEvent(new m.E_ComboScoreTip_ScoreAnim({
score: e,
highScore: r
}));
}
};
e.prototype.handleEliminateScoreForChapter = function(t) {
for (var e, r = t.touchBlockId, o = t.putPos || [], i = t.eliminateCount || 0, a = t.putEliminatesInfo || [], n = 0; n < o.length; n++) this.addEmptyGridInfo(o[n].x, o[n].y, n, a);
var s = {
score: [],
elements: []
};
if (this.checkFullEliminate(r, o, i, a) && this.trigger(r, !1)) {
var c = t.color, l = t.putPosOriginal || [];
0 == this.getConditionWay() ? s.score = this.addScore(r, o.length) : s.elements = this.addExtraElementEffect(r, o);
this.addBlocksEliminateEffectForChapter(l, c, null === (e = s.score) || void 0 === e ? void 0 : e[0], i);
}
var p = s.elements;
this.itemArr = [];
p && p.length > 0 && this.addEliminateElements(p);
};
e.prototype.handleCollectEffectForChapter = function(t, e) {
if (this.itemArr.length > 0 && this.isResourceLoaded()) for (var r = 0; r < this.itemArr.length; r++) {
var o = this.itemArr[r];
t[o.row] && t[o.row][o.col] && (t[o.row][o.col].color = Number(o.Key));
for (var i = 0; i < e.length; i++) {
var a = e[i];
a.row == o.row && a.col == o.col && (a.color = Number(o.Key));
}
}
};
e.prototype.handleCollectDataForChapter = function(t) {
if (this.itemArr.length > 0 && this.isResourceLoaded()) for (var e = 0; e < this.itemArr.length; e++) {
var r = this.itemArr[e];
t[r.Key] && t[r.Key]++;
}
};
e.prototype.handleEliminateScoreForClassic = function(t) {
var e = t.touchBlockId, r = t.putPos || [], o = t.eliminateCount || 0, i = t.putEliminatesInfo || [];
if (this.checkFullEliminate(e, r, o, i) && this.trigger(e, !0) && this.isResourceLoaded()) {
var a = t.color, n = this.addScore(e, r.length), s = t.putPosOriginal || [];
this.addBlocksEliminateEffectForClassic(s, a, n[0], o);
this._addScore = n[1];
}
};
return n([ classId("PlacementBlocksEliminateEffectTrait") ], e);
}(u.Trait);
r.PlacementBlocksEliminateEffectTrait = I;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/copy/Copy": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/comboScoreTip/components/ComboScoreTip": void 0,
"../../../../../../../scripts/modules/comboScoreTip/events/E_ComboScoreTip_ScoreAnim": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../../scripts/modules/prefab/PrefabConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
PostGameToServerTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "73fc6XzL3xLSbPL5N5reTY2", "PostGameToServerTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PostGameToServerTrait = void 0;
var c = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../../scripts/base/url/Url"), d = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), f = t("../../../../../../../scripts/modules/game/vo/GameInfo"), m = t("../../../../../../../scripts/modules/gameWay/vo/GameWayInfo"), h = t("../../../../../../../scripts/modules/GBM/type/GBMType"), y = t("../../../../../../../scripts/modules/http/HGBM"), g = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.maxGameNum = 5;
return e;
}
Object.defineProperty(e.prototype, "url", {
get: function() {
var t, e = this.props.url || "http://18.189.190.183:7700/infer/v1/online_service_pred";
return (null === (t = cc.sys) || void 0 === t ? void 0 : t.isNative) ? e : u.getUrlParameterValue("url") || e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "params", {
get: function() {
return {
user_hists: {
block_hists: []
},
user_info: {
timestamp: Date.now(),
exp_name: m.gameWayInfo.gameWayNum.toString(),
req_id: this.getUniqueLaneId(),
install_time: Math.floor(f.gameInfo.installTime / 1e3)
},
user_context: d.deviceInfo.data
};
},
enumerable: !1,
configurable: !0
});
e.prototype.getUniqueLaneId = function() {
var t = l.storage.getItem("PostGameToServerTrait", {
uniqueLaneId: 0
});
t.uniqueLaneId += 1;
l.storage.setItem("PostGameToServerTrait", t);
return t.uniqueLaneId.toString();
};
e.prototype.onActive = function(t) {
var e, r, o, i;
if (g.tp.isClassGBM_ProxyOnGameEnd(t)) {
var a = c.GBMTraitsMaps;
try {
for (var p = n(a), u = p.next(); !u.done; u = p.next()) {
var d = s(u.value, 2), f = (d[0], d[1]);
if (null == (P = c.getOrCreateTraitInstance(f)) ? void 0 : P.active) {
var m = "GBM_" + P.traitName;
l.storage.setItem(m, {
msgStatus: h.GBMStateType.Init,
msgData: null
});
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (r = p.return) && r.call(p);
} finally {
if (e) throw e.error;
}
}
}
if (g.tp.isClassGBM_ProxyOnGameEndReady(t)) {
var _ = this.params;
_.user_info.req_type = [];
var v = c.GBMTraitsMaps, T = 0;
try {
for (var b = n(v), S = b.next(); !S.done; S = b.next()) {
var P, O = s(S.value, 2);
O[0], f = O[1];
if (null == (P = c.getOrCreateTraitInstance(f)) ? void 0 : P.active) {
m = "GBM_" + P.traitName;
var C = P.tag;
_.user_info.req_type[T] = C;
var I = P.state;
T++;
l.storage.setItem(m, Object.assign({
msgStatus: h.GBMStateType.Req,
msgData: P.state.msgData
}, I));
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
S && !S.done && (i = b.return) && i.call(b);
} finally {
if (o) throw o.error;
}
}
var A = t.args[0];
if (!A) return;
if (A.length < this.maxGameNum) return;
_.user_hists.block_hists = A;
_.user_context = null;
y.HGBM.online_service_pred(this.url, _).then(function(t) {
var e, r, o = t.block_resp_info, i = 0;
try {
for (var a = n(v), p = a.next(); !p.done; p = a.next()) {
var u = s(p.value, 2), d = (u[0], u[1]), f = c.getOrCreateTraitInstance(d);
if (null == f ? void 0 : f.active) {
var m = "GBM_" + f.traitName, y = f.tag;
_.user_info.req_type[i] = y;
var g = f.state;
i++;
var T = o[y];
f.state.msgStatus = 0;
f.state.msgData = T;
f.onResponse(T);
l.storage.setItem(m, Object.assign({
msgStatus: h.GBMStateType.Resp,
msgData: f.state.msgData
}, g));
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
p && !p.done && (r = a.return) && r.call(a);
} finally {
if (e) throw e.error;
}
}
}).catch(function() {});
}
};
return a([ classId("PostGameToServerTrait") ], e);
}(p.Trait);
r.PostGameToServerTrait = _;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/base/url/Url": void 0,
"../../../../../../../scripts/modules/GBM/type/GBMType": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/gameWay/vo/GameWayInfo": void 0,
"../../../../../../../scripts/modules/http/HGBM": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
PreEliComboRainbow: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "12c09gJfPREgJfPfW8ZXTFX", "PreEliComboRainbow");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../../scripts/base/components/Component"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.armatureDisplay = null;
e._isAnimed = !1;
return e;
}
e.prototype.render = function() {
var t, e;
if (!this._isAnimed) {
this._isAnimed = !0;
var r = null !== (t = this.state.aniName) && void 0 !== t ? t : "";
null === (e = this.armatureDisplay) || void 0 === e || e.playAnimation(r, this.state.playTimes);
}
};
a([ l(dragonBones.ArmatureDisplay) ], e.prototype, "armatureDisplay", void 0);
return a([ c ], e);
}(n.default);
r.default = p;
cc._RF.pop();
}, {
"../../../../../../../../scripts/base/components/Component": void 0
} ],
PreEliminateComponent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c6d7ftLJ+tAKaoe4f9ETXgE", "PreEliminateComponent");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../scripts/base/components/Component"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.armatureDisplay = null;
e._lastAniName = "";
return e;
}
e.prototype.render = function() {
var t, e;
if (this._lastAniName != this.state.aniName) {
var r = null !== (t = this.state.aniName) && void 0 !== t ? t : "";
this._lastAniName = r;
null === (e = this.armatureDisplay) || void 0 === e || e.playAnimation(r, this.state.playTimes);
}
};
a([ l(dragonBones.ArmatureDisplay) ], e.prototype, "armatureDisplay", void 0);
return a([ c ], e);
}(n.default);
r.default = p;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0
} ],
RandBlockDownwardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5cb76eMajVB2ZRyqFPZImV9", "RandBlockDownwardTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.RandBlockDownwardTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = [ 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 23, 24, 29, 33, 35, 36, 42 ], p = [ 7, 8, 9, 10, 11, 13, 23, 24, 29, 33, 35, 36, 42 ], u = [ s.OFFER_TYPE.SUI_JI, s.OFFER_TYPE.SHANG_ZENG_3, s.OFFER_TYPE.SUI_JI_WU_SI, s.OFFER_TYPE.ALL_COMBINATION_ID21, s.OFFER_TYPE.ALL_COMBINATION_ID70, s.OFFER_TYPE.ALGO_FILL_CHANGE_EDGE ], d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isAlgorithmProcessInfoHandleArgs(t)) {
var e = t.args[0];
this.isUseRandomPool(e, t.args[1]) && (e.blocksGroup = this.isLimitSmall(e) ? [ p ] : [ l ]);
}
};
e.prototype.isUseRandomPool = function(t, e) {
return !!u.includes(e);
};
e.prototype.isLimitSmall = function(t) {
var e, r;
return !(null === (r = null === (e = null == t ? void 0 : t.extra) || void 0 === e ? void 0 : e.feature) || void 0 === r || !r.limitSmall);
};
return a([ classId("RandBlockDownwardTrait") ], e);
}(n.Trait);
r.RandBlockDownwardTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
RecoverBlockSortTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9327eW9SrZAyIA5MVv8XpFL", "RecoverBlockSortTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.RecoverBlockSortTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || s.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t);
};
return a([ classId("RecoverBlockSortTrait") ], e);
}(n.Trait);
r.RecoverBlockSortTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
RepateCPlusPlusRandomNoDeathTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3f6bfzwG6dKi7dSJ6njbV5K", "RepateCPlusPlusRandomNoDeathTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.RepateCPlusPlusRandomNoDeathTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isAlgorithmSDKTraitInfoRepeatCPlusPlusRandomNoDeath(t) && (t.returnValue = 1);
};
return a([ classId("RepateCPlusPlusRandomNoDeathTrait") ], e);
}(n.Trait);
r.RepateCPlusPlusRandomNoDeathTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ReusingMiniGameAssetsTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f814eWxqGhNe5jf2PHrwUdd", "ReusingMiniGameAssetsTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ReusingMiniGameAssetsTrait = void 0;
var n = t("../../../../../../../scripts/base/cocos/cocos.cacheManager"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isCache_ProxyOnResusingMiniGameRes(t) && n.useCacheMananger();
};
return a([ classId("ReusingMiniGameAssetsTrait") ], e);
}(s.Trait);
r.ReusingMiniGameAssetsTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/cocos/cocos.cacheManager": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
RightPutHintCtrTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f44eeM2+eFGI4/PzkyAlciX", "RightPutHintCtrTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__values || function(t) {
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
r.RightPutHintCtrTrait = void 0;
var s = t("../../../../../../scripts/base/audio/AudioInfo"), c = t("../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../scripts/base/posListReverse/PosListReverse"), p = t("../../../../../../scripts/base/storage/Storage"), u = t("../../../../../../scripts/base/trait/Trait"), d = t("../../../../../../scripts/modules/algorithm/config/AlgorithmDataSetConfig"), f = t("../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), m = t("../../../../../../scripts/modules/audio/config/AudioConfig"), h = t("../../../../../../scripts/modules/blocksProducer/components/traits/RightPutHintCtrTrait/RightPutHint"), y = t("../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo"), g = t("../../../../../../scripts/modules/layer/vo/LayerInfo"), _ = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), v = "RightPutHintCtrTrait_RightPutRoot", T = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rightPutRootPre = null;
e.rightPutRoot = null;
e.isPutRight = !1;
return e;
}
e.prototype.onActive = function(t) {
(_.tp.isClassGame_ProxyOnClassGameStart(t) || _.tp.isChapterGame_ProxyOnStartGame(t)) && this._createRightPutRoot();
_.tp.isBoardEffect_ProxyOnTouchEnd(t) && this.checkIsNeedShowRightPutHint(t);
};
e.prototype.getIsPutRight = function() {
return this.isPutRight;
};
e.prototype._createRightPutRoot = function() {
var t = this;
if (cc.isValid(g.gameEffectLayer)) if (this.rightPutRootPre) {
var e = g.gameEffectLayer.getSiblingIndex();
this.rightPutRoot = cc.instantiate(this.rightPutRootPre);
this.rightPutRoot.name = v;
this.rightPutRoot.setPosition(cc.v2(0, 0));
g.gameEffectLayer.insertChild(this.rightPutRoot, e + 1);
} else c.ResLoader.loadByBundle("Remote_19855", "prefab/RightPutRoot", cc.Prefab, function(e, r) {
if (e) ; else if (r) {
t.rightPutRootPre = r;
var o = g.gameEffectLayer.getSiblingIndex();
t.rightPutRoot = cc.instantiate(t.rightPutRootPre);
t.rightPutRoot.name = v;
t.rightPutRoot.setPosition(cc.v2(0, 0));
g.gameEffectLayer.insertChild(t.rightPutRoot, o + 1);
}
});
};
e.prototype.getRightPutRoot = function() {
var t = this;
if (cc.isValid(this.rightPutRoot)) return this.rightPutRoot;
if (this.rightPutRootPre) {
var e = g.gameEffectLayer.getSiblingIndex();
this.rightPutRoot = cc.instantiate(this.rightPutRootPre);
this.rightPutRoot.name = v;
this.rightPutRoot.setPosition(cc.v2(0, 0));
g.gameEffectLayer.insertChild(this.rightPutRoot, e + 1);
return this.rightPutRoot;
}
c.ResLoader.loadByBundle("Remote_19855", "prefab/RightPutRoot", cc.Prefab, function(e, r) {
if (e) ; else if (r) {
t.rightPutRootPre = r;
var o = g.gameEffectLayer.getSiblingIndex();
t.rightPutRoot = cc.instantiate(t.rightPutRootPre);
t.rightPutRoot.name = v;
t.rightPutRoot.setPosition(cc.v2(0, 0));
g.gameEffectLayer.insertChild(t.rightPutRoot, o + 1);
}
});
};
e.prototype.getDstMovePos = function(t) {
var e, r, o = 8, i = 8;
try {
for (var a = n(t), s = a.next(); !s.done; s = a.next()) {
var c = s.value;
c.x < o && (o = c.x);
c.y < i && (i = c.y);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (r = a.return) && r.call(a);
} finally {
if (e) throw e.error;
}
}
return new cc.Vec2(i, o);
};
e.prototype.checkIsNeedShowRightPutHint = function(t) {
var e = !0;
d.checkExcludeRightPut.has(f.algorithmName.algoActualId) && (e = !1);
e && this.showRightPutHint(t);
};
e.prototype.showRightPutHint = function(t) {
var e, r, o, i = t.args[0].state, a = i.touchBlockId, s = i.putPosOriginal, c = i.putPos, u = i.color, d = p.storage.getItem("BlockPutData", [ {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
} ]), f = y.blocksProducerInfo.producerBlocks.filter(function(t) {
return -1 === t;
}).length;
this.isPutRight = !1;
var m = this.getDstMovePos(c);
try {
for (var g = n(d), _ = g.next(); !_.done; _ = g.next()) {
var v = _.value;
if (v.id == a && v.row == m.y && v.col == m.x && 1 == v.check) {
this.isPutRight = !0;
break;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
_ && !_.done && (r = g.return) && r.call(g);
} finally {
if (e) throw e.error;
}
}
if (3 != f && this.isPutRight) {
var T = [];
c.forEach(function() {
return T.push(u);
});
var b = null === (o = this.getRightPutRoot()) || void 0 === o ? void 0 : o.getComponent(h.default);
if (b) {
b.refashHint(l.default.convertPutPos(c), T, s);
this.playSound();
}
} else this.hideRightPutHint();
};
e.prototype.hideRightPutHint = function() {
var t;
this.isPutRight = !1;
if (cc.isValid(g.gameEffectLayer)) {
var e = null === (t = this.getRightPutRoot()) || void 0 === t ? void 0 : t.getComponent(h.default);
e && e.hideHint();
}
};
e.prototype.playSound = function() {
for (var t = 0, e = p.storage.getItem("classProducerBlocks", [ -1, -1, -1 ]), r = 0, o = (null == e ? void 0 : e.length) || 0; r < o; r++) -1 !== e[r] && t++;
var i = {
1: m.AudioConfig.RightPutHintThumb2,
2: m.AudioConfig.RightPutHintThumb1
}, a = i[t] || i[2];
s.audioInfo.play(a);
};
return a([ classId("RightPutHintCtrTrait") ], e);
}(u.Trait);
r.RightPutHintCtrTrait = T;
cc._RF.pop();
}, {
"../../../../../../scripts/base/audio/AudioInfo": void 0,
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/posListReverse/PosListReverse": void 0,
"../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/algorithm/config/AlgorithmDataSetConfig": void 0,
"../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../scripts/modules/audio/config/AudioConfig": void 0,
"../../../../../../scripts/modules/blocksProducer/components/traits/RightPutHintCtrTrait/RightPutHint": void 0,
"../../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo": void 0,
"../../../../../../scripts/modules/layer/vo/LayerInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SetAddDefultSkinBtnTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f5f8bK245VDipc+lkkGfXYf", "SetAddDefultSkinBtnTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SetAddDefultSkinBtnTrait = void 0;
var n = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), s = t("../../../../../../../scripts/base/loader/ResLoader"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/falcon/EventManager"), p = t("../../../../../../../scripts/modules/game/type/GameType"), u = t("../../../../../../../scripts/modules/game/vo/GameInfo"), d = t("../../../../../../../scripts/modules/setup/config/SetupConfig"), f = t("../../../../../../../scripts/modules/skin/events/E_Skin_Update"), m = t("../../../../../../../scripts/modules/skin/vo/SkinInfo"), h = t("../../../../../../../scripts/modules/spriteFrame/config/SpriteFrameConfig"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (u.gameInfo.gameType === p.GameType.Chapter || u.gameInfo.gameType === p.GameType.Class) {
if (y.tp.isSetup_ProxyOnSetupShow(t)) {
var e = t.args[0];
if (!this.getIsTrigger()) {
var r = e.keys.indexOf(d.enSetupKeys.SetAddDefultSkinBtn);
if (r >= 0) {
e.keys.splice(r, 1);
t.args[0] = e;
}
return;
}
e.keys.includes(d.enSetupKeys.SetAddDefultSkinBtn) || e.keys.push(d.enSetupKeys.SetAddDefultSkinBtn);
t.args[0] = e;
}
if (y.tp.isSetupRefreshBtnState(t)) {
var o = t.args[0], i = t.args[1];
i && o && cc.isValid(o) && i == d.enSetupKeys.SetAddDefultSkinBtn && s.ResLoader.renderSpriteByBundle(o.getComponent(cc.Sprite), h.SpriteFrameConfig.SetAddDefultSkinBtn.spriteFrame, h.SpriteFrameConfig.SetAddDefultSkinBtn.bundleName);
}
y.tp.isSetup_SetAddDefultSkinBtn_ProxySetAddRandomSwitchSwitch(t) && this.SetDefultSkin();
if (y.tp.isSetup_SetAddDefultSkinBtn_ProxyOnNewGameStart(t)) {
if (!t.args[0].data.newGame) return;
u.gameInfo.gameType === p.GameType.Chapter ? storage.setItem("SetAddDefultSkinBtn_travelClickNum", 0) : u.gameInfo.gameType === p.GameType.Class && storage.setItem("SetAddDefultSkinBtn_classClickNum", 0);
}
}
};
e.prototype.SetDefultSkin = function() {
DS("ui_setting_defaultskin_click", {
game_type: u.gameInfo.gameType
});
var t = storage.getItem("SetAddDefultSkinBtn_classClickNum", 0), e = storage.getItem("SetAddDefultSkinBtn_travelClickNum", 0);
if (u.gameInfo.gameType === p.GameType.Chapter) {
e++;
storage.setItem("SetAddDefultSkinBtn_travelClickNum", e);
} else if (u.gameInfo.gameType === p.GameType.Class) {
t++;
storage.setItem("SetAddDefultSkinBtn_classClickNum", t);
}
m.skinInfo.currentSkinId != m.skinInfo.originSkinId && l.EventManager.dispatchModuleEvent(new f.E_Skin_Update(m.skinInfo.originSkinId));
};
e.prototype.getIsTrigger = function() {
return !0;
};
a([ n.trait("TravelNoSkinTrait", "关卡不生效皮肤换色效果") ], e.prototype, "getIsTrigger", null);
return a([ classId("SetAddDefultSkinBtnTrait") ], e);
}(c.Trait);
r.SetAddDefultSkinBtnTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../../scripts/modules/skin/events/E_Skin_Update": void 0,
"../../../../../../../scripts/modules/skin/vo/SkinInfo": void 0,
"../../../../../../../scripts/modules/spriteFrame/config/SpriteFrameConfig": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SetAddRandomSwitchTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "af3bdGbVjdL0rTth/d57xgb", "SetAddRandomSwitchTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SetAddRandomSwitchTrait = void 0;
var c = t("../../../../../../../scripts/base/decorators/DecoratorTrait"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/falcon/EventManager"), u = t("../../../../../../../scripts/modules/game/type/GameType"), d = t("../../../../../../../scripts/modules/game/vo/GameInfo"), f = t("../../../../../../../scripts/modules/setup/config/SetupConfig"), m = t("../../../../../../../scripts/modules/skin/events/E_Skin_Update"), h = t("../../../../../../../scripts/modules/skin/vo/SkinInfo"), y = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
var e, r, o, i, a;
return n(this, void 0, void 0, function() {
var n, c, l, p, m;
return s(this, function() {
if (d.gameInfo.gameType !== u.GameType.Chapter && d.gameInfo.gameType !== u.GameType.Class) return [ 2 ];
if (y.tp.isSetup_ProxyUpdateUI(t)) {
c = t.args[0] || {};
if (!this.getIsTrigger()) {
if ((n = null !== (r = null === (e = c.keys) || void 0 === e ? void 0 : e.indexOf(f.enSetupKeys.SetAddRandomSwitch)) && void 0 !== r ? r : -1) >= 0) {
c.keys.splice(n, 1);
t.args[0] = c;
}
return [ 2 ];
}
l = storage.getItem("SetAddRandomSwitch_isClose", !1);
c.value = c.value || {};
c.value[f.enSetupKeys.SetAddRandomSwitch] = !l;
t.args[0] = c;
}
y.tp.isCleanSceneRandomSkinTraitGetIsTrigger(t) && storage.getItem("SetAddRandomSwitch_isClose", !1) && (t.returnValue = !1);
y.tp.isCleanSceneUseSequenceSkinTraitGetIsTrigger(t) && storage.getItem("SetAddRandomSwitch_isClose", !1) && (t.returnValue = !1);
if (y.tp.isSetup_ProxyOnSetupShow(t)) {
c = t.args[0];
l = storage.getItem("SetAddRandomSwitch_isClose", !1);
if (!c.keys.includes(f.enSetupKeys.SetAddRandomSwitch)) {
c.keys.push(f.enSetupKeys.SetAddRandomSwitch);
c.value = c.value || {};
c.value[f.enSetupKeys.SetAddRandomSwitch] = !l;
}
t.args[0] = c;
}
if (y.tp.isSetup_SetAddRandomSwitch_ProxyOnNewGameStart(t)) {
if (!t.args[0].data.newGame) return [ 2 ];
d.gameInfo.gameType === u.GameType.Chapter ? storage.setItem("SetAddDefultSkinBtn_travelClickNum", 0) : d.gameInfo.gameType === u.GameType.Class && storage.setItem("SetAddDefultSkinBtn_classClickNum", 0);
}
y.tp.isSetup_SetAddRandomSwitch_ProxySetAddRandomSwitchSwitch(t) && this.SetAddRandomSwitchSwitch();
if (y.tp.isSetupRender(t)) {
p = t.target;
(m = p.state.keys.filter(function(t) {
return f.SetupConfig.topList.indexOf(t) >= 0;
})) && 4 == m.length && (null === (a = null === (i = null === (o = null == p ? void 0 : p.state) || void 0 === o ? void 0 : o.nodePosData) || void 0 === i ? void 0 : i.topLayout) || void 0 === a ? void 0 : a.spaceX) && (p.state.nodePosData.topLayout.spaceX = 100);
}
return [ 2 ];
});
});
};
e.prototype.SetAddRandomSwitchSwitch = function() {
var t = storage.getItem("SetAddRandomSwitch_classClickNum", 0), e = storage.getItem("SetAddRandomSwitch_travelClickNum", 0), r = storage.getItem("SetAddRandomSwitch_isClose", !1), o = r ? 1 : 0;
DS("ui_setting_randomskin_click", {
game_type: d.gameInfo.gameType,
type: o
});
storage.setItem("SetAddRandomSwitch_isClose", !r);
d.gameInfo.gameType === u.GameType.Chapter ? e++ : d.gameInfo.gameType === u.GameType.Class && t++;
storage.setItem("SetAddRandomSwitch_travelClickNum", e);
storage.setItem("SetAddRandomSwitch_classClickNum", t);
if (r) {
var i = storage.getItem("SetAddRandomSwitch_beforeId", h.skinInfo.originSkinId);
h.skinInfo.currentSkinId == h.skinInfo.originSkinId && p.EventManager.dispatchModuleEvent(new m.E_Skin_Update(i));
} else {
if (!h.skinInfo.skinEnabled) return;
storage.setItem("SetAddRandomSwitch_beforeId", h.skinInfo.currentSkinId);
p.EventManager.dispatchModuleEvent(new m.E_Skin_Update(h.skinInfo.originSkinId));
}
};
e.prototype.getIsTrigger = function() {
return !0;
};
a([ c.trait("TravelNoSkinTrait", "关卡不生效皮肤换色效果") ], e.prototype, "getIsTrigger", null);
return a([ classId("SetAddRandomSwitchTrait") ], e);
}(l.Trait);
r.SetAddRandomSwitchTrait = g;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/decorators/DecoratorTrait": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/setup/config/SetupConfig": void 0,
"../../../../../../../scripts/modules/skin/events/E_Skin_Update": void 0,
"../../../../../../../scripts/modules/skin/vo/SkinInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SetFPSByScreenSizeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3ced5M5c0lKXbe3MKQBLnsC", "SetFPSByScreenSizeTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SetFPSByScreenSizeTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isPerformance_ProxyOnGameInitComplete(t) && this.setFrameRateForDevice();
};
e.prototype.setFrameRateForDevice = function() {
if (c.deviceInfo.is720P) {
var t = this.props.screen720size || 30;
c.deviceInfo.setDeviceFPS(t);
} else if (c.deviceInfo.is1080P) {
t = this.props.screen1080size || 60;
c.deviceInfo.setDeviceFPS(t);
}
};
return a([ classId("SetFPSByScreenSizeTrait") ], e);
}(n.Trait);
r.SetFPSByScreenSizeTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ShareMainComponent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e15fc6RGrZEJZZtgsa+F7BW", "ShareMainComponent");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = t("../../../../../../../scripts/base/components/Component"), s = t("../../../../../../../scripts/base/decorators/DecoratorThrottle"), c = t("../../../../../../../scripts/modules/native/NativeShare"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon_1 = null;
e.icon_2 = null;
return e;
}
e.prototype.render = function() {
this.onShow(this.state.showType);
};
e.prototype.onShow = function(t) {
this.icon_1.active = 1 == t;
this.icon_2.active = !this.icon_1.active;
};
e.prototype.onClick = function() {
c.NativeShare.callNativeShare();
};
a([ u(cc.Node) ], e.prototype, "icon_1", void 0);
a([ u(cc.Node) ], e.prototype, "icon_2", void 0);
a([ s.throttle(500) ], e.prototype, "onClick", null);
return a([ p ], e);
}(n.default);
r.default = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0,
"../../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../../scripts/modules/native/NativeShare": void 0
} ],
ShareMediaComponent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "eea33sDasxGz5sq+psK7cKU", "ShareMediaComponent");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
}, s = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("../../../../../../../scripts/base/components/Component"), l = t("../../../../../../../scripts/base/decorators/DecoratorThrottle"), p = t("../../../../../../../scripts/modules/device/vo/DeviceInfo"), u = t("../../../../../../../scripts/modules/native/NativeShare"), d = cc._decorator, f = d.ccclass, m = (d.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onClick = function(t, e) {
var r = {
type: null == e ? void 0 : e.toString(),
from: this.state.fromType
};
if (p.deviceInfo.data) {
var o = p.deviceInfo.data.network, i = new Set([ "WIFI", "4G", "5G" ]);
s(i).some(function(t) {
return o.includes(t);
}) && u.NativeShare.callNativeShareAppClick(JSON.stringify(r));
}
};
a([ l.throttle(500) ], e.prototype, "onClick", null);
return a([ f ], e);
}(c.default));
r.default = m;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0,
"../../../../../../../scripts/base/decorators/DecoratorThrottle": void 0,
"../../../../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../../../../scripts/modules/native/NativeShare": void 0
} ],
ShowPutEffectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1629fNG/vpG0rUXdHepsRmF", "ShowPutEffectTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(t) {
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
r.ShowPutEffectTrait = void 0;
var l = t("../../../../../../scripts/base/loader/ResLoader"), p = t("../../../../../../scripts/base/trait/Trait"), u = t("../../../../../../scripts/modules/board/vo/BoardRendererInfo"), d = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = [ "in_1", "in_2", "in_3", "in_4", "in_5", "in_6", "in_7", "in_8" ], m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.effect_list = [];
return e;
}
e.prototype.onActive = function(t) {
var e, r;
if (d.tp.isBlocksProducer_ProxyOnTouchEnd(t)) {
var o = t.args[0].state, i = o.putPos;
try {
for (var a = c(i), n = a.next(); !n.done; n = a.next()) {
var s = n.value;
this.playEffect(u.boardRendererInfo.blockSprites[s.x][s.y], o.color);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (r = a.return) && r.call(a);
} finally {
if (e) throw e.error;
}
}
}
};
e.prototype.onDisable = function() {
for (;this.effect_list.length > 0; ) {
var t = this.effect_list.pop();
if (cc.isValid(t)) {
t.node.removeFromParent();
t.destroy();
}
}
};
e.prototype.playEffect = function(t, e) {
var r;
return n(this, void 0, void 0, function() {
var o, i;
return s(this, function(a) {
switch (a.label) {
case 0:
return cc.isValid(null == t ? void 0 : t.node) ? (o = null === (r = t.node.getChildByName("effect_skeleton-put")) || void 0 === r ? void 0 : r.getComponent(sp.Skeleton)) ? [ 3, 2 ] : [ 4, this.createEffectComp(t.node) ] : [ 2, void 0 ];

case 1:
o = a.sent();
cc.isValid(o) && this.effect_list.push(o);
a.label = 2;

case 2:
if (!cc.isValid(o) || !this.isVisibleBlock(t)) return [ 2, void 0 ];
i = "in_" + e;
f.includes(i) || (i = "in_1");
o.node.active = !0;
o.setAnimation(0, i, !1);
return [ 2 ];
}
});
});
};
e.prototype.createEffectComp = function(t) {
return new Promise(function(e) {
l.ResLoader.load("dragonbones/blockPutDownEffect/gameplay_spine_blocklight_plan1", sp.SkeletonData, function(r, o) {
if (r) e(null); else if (cc.isValid(t)) {
var i = new cc.Node("effect_skeleton-put").addComponent(sp.Skeleton);
i.premultipliedAlpha = !1;
i.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
i.enableBatch = !0;
i.skeletonData = o;
i.node.setParent(t);
i.node.setPosition(0, 0, i.node.position.z);
i.setCompleteListener(function() {
return i.node.active = !1;
});
e(i);
} else e(null);
});
});
};
e.prototype.isVisibleBlock = function(t) {
var e;
return cc.isValid(null === (e = null == t ? void 0 : t.block) || void 0 === e ? void 0 : e.node) && t.block.node.activeInHierarchy && cc.isValid(t.block.spriteFrame) && t.block.enabled;
};
return a([ classId("ShowPutEffectTrait") ], e);
}(p.Trait);
r.ShowPutEffectTrait = m;
cc._RF.pop();
}, {
"../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/board/vo/BoardRendererInfo": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
ShowUpdateCapcityAnimaCtrlTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "0d7b4J58ZZHuqYtCdS2yETd", "ShowUpdateCapcityAnimaCtrlTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ShowUpdateCapcityAnimaCtrlTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("ShowUpdateCapcityAnimaCtrlTrait") ], e);
}(n.Trait);
r.ShowUpdateCapcityAnimaCtrlTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SkinRandomTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f34951uYF5HT4GLu351MHMl", "SkinRandomTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SkinRandomTrait = void 0;
var c = t("../../../../../../../scripts/base/loader/ResLoader"), l = t("../../../../../../../scripts/base/trait/Trait"), p = t("../../../../../../../scripts/modules/skin/vo/SkinRandomInfo"), u = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skinPool = [];
return e;
}
e.prototype.onCreate = function() {
var t = this, e = "configs/skin/randomPool/" + this.props.skinPoolPath;
c.ResLoader.load(e, cc.JsonAsset, function(e, r) {
if (!e && r && r.json) {
t.skinPool = r.json;
p.skinRandomInfo.refreshRandomSkinPool(t.skinPool);
}
});
};
e.prototype.onActive = function(t) {
return n(this, void 0, void 0, function() {
return s(this, function() {
u.tp.isSkin_ProxyTraitConfigInitComplete(t);
return [ 2 ];
});
});
};
return a([ classId("SkinRandomTrait") ], e);
}(l.Trait);
r.SkinRandomTrait = d;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/loader/ResLoader": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/skin/vo/SkinRandomInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SolidColorTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "42f9b4jIGZE8amz+HHm9L0Q", "SolidColorTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SolidColorTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isClassDefaultBoard_ProxyProduceDefaultColor(t)) {
var e = n.storage.getItem("classGameNum", 0);
if (e > 0 && e % 10 == 0) {
if (0 == (a = n.storage.getItem("classSolidColor", 0))) {
var r = Math.floor(7 * Math.random() + 1);
n.storage.setItem("classSolidColor", r);
}
var o = t.args[0];
o.forEach(function(t) {
t.forEach(function(e, r) {
-1 !== e && (t[r] = n.storage.getItem("classSolidColor", 0));
});
});
t.args[0] = o;
t.returnState = !0;
} else {
n.storage.setItem("classSolidColor", 0);
t.returnState = !1;
}
}
if (c.tp.isClassColorProducer_ProxyProduceColorBase(t)) if (0 == (a = n.storage.getItem("classSolidColor", 0))) t.returnState = !1; else {
t.returnState = !0;
var i = [ a, a, a ];
n.storage.setItem("classColorLists", i);
t.args[0] = !0;
t.replace = !0;
}
if (c.tp.isGameOver_Splash_ProxyGetBoardSplashAnimationColor(t) || c.tp.isClassBoardSplashAnimation_ProxyGetBoardSplashAnimationColor(t)) {
var a = n.storage.getItem("classSolidColor", 0);
t.args[0] = a;
}
if (c.tp.isClassColorProducer_ProxyProduceColorPostprocessing(t) && (a = n.storage.getItem("classSolidColor", 0)) > 0) {
t.returnState = !0;
t.replace = !0;
}
if (c.tp.isClassBlocksProducerInfoComputeEliminateColor(t)) if ((a = n.storage.getItem("classSolidColor", 0)) > 0) {
t.args[0] = a;
t.returnState = !0;
} else t.returnState = !1;
};
return a([ classId("SolidColorTrait") ], e);
}(s.Trait);
r.SolidColorTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SudokuRemoveInGameAdTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b00f6DAl7xBzrY54H5dWD2V", "SudokuRemoveInGameAdTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SudokuRemoveInGameAdTrait = void 0;
var n = t("../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
s.tp.isGameLobby_ProxyUpdateTraitStatus(t);
};
return a([ classId("SudokuRemoveInGameAdTrait") ], e);
}(n.Trait);
r.SudokuRemoveInGameAdTrait = c;
cc._RF.pop();
}, {
"../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SurfaceOptimizeStateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4ca280CRhJOTZ2KcPluywvN", "SurfaceOptimizeStateTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SurfaceOptimizeStateTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
(s.tp.isChapterGame_ProxyGetBoardBgPath(t) || s.tp.isClassGame_ProxyGetBoardBgPath(t)) && (t.args[0] = "textures/board/trait/surfaceOptimizeState/backgroundkuai2-8x8");
};
return a([ classId("SurfaceOptimizeStateTrait") ], e);
}(n.Trait);
r.SurfaceOptimizeStateTrait = c;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
SwitchingModesCBStrategyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "bc829bV+YNEVb9qRF04ZRqD", "SwitchingModesCBStrategyTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SwitchingModesCBStrategyTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/game/vo/GameInfo"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = t("../../../../../../../scripts/base/storage/Storage"), p = t("../../../../../../../scripts/modules/game/type/GameType"), u = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmName"), d = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {};
e.prototype.onActive = function(t) {
var e, r, o;
if (c.tp.isClassGame_ProxyOnClassGameShow(t)) {
this.isChangeMode = !1;
this.lastGameMode || (this.lastGameMode = s.gameInfo.gameMode);
if (s.gameInfo.gameMode !== this.lastGameMode) {
this.lastGameMode = s.gameInfo.gameMode;
this.isChangeMode = !0;
}
}
if (c.tp.isChapterGame_ProxyOnChapterGameShow(t)) {
this.isChangeMode = !1;
this.lastGameMode || (this.lastGameMode = s.gameInfo.gameMode);
if (s.gameInfo.gameMode !== this.lastGameMode) {
this.lastGameMode = s.gameInfo.gameMode;
this.isChangeMode = !0;
}
}
if ((c.tp.isClassAlgorithmProcessInfoBottomOfferBefore(t) || c.tp.isChapterAlgorithmProcessInfoBottomOfferBefore(t)) && this.isChangeMode) {
var i = l.storage.getItem("classEntryTime", Date.now());
s.gameInfo.gameMode == p.GameMode.Chapter && (i = l.storage.getItem("chapterEntryTime", Date.now()));
if (Date.now() - i < 6e4) {
var a = u.algorithmName.algoActualName.every(function(t) {
return t.includes("困难难题");
}), n = u.algorithmName.algoActualName.every(function(t) {
return t.includes("死亡难题");
}), f = u.algorithmName.algoActualName.every(function(t) {
return t.includes("直觉难题");
}), m = null === (e = u.algorithmName.algoActualName[0]) || void 0 === e ? void 0 : e.includes("难题矩阵"), h = null === (r = u.algorithmName.algoActualName[0]) || void 0 === r ? void 0 : r.includes("极其困难难题"), y = null === (o = u.algorithmName.algoActualName[0]) || void 0 === o ? void 0 : o.includes("难题");
if (a || n || f || m || h || y) {
t.args[0] = t.args[0] || [];
t.args[0].push(d.OFFER_TYPE.SUI_JI_WU_SI);
u.algorithmName.setAlgoExpectedId(d.OFFER_TYPE.NONE);
u.algorithmName.setAlgoExpectedId(d.OFFER_TYPE.SUI_JI_WU_SI);
}
}
}
};
return a([ classId("SwitchingModesCBStrategyTrait") ], e);
}(n.Trait);
r.SwitchingModesCBStrategyTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
TarvelRedPointTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6678aUj+9FPkqGutVTw+Nrn", "TarvelRedPointTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TarvelRedPointTrait = void 0;
var n = t("../../../../../../../scripts/base/storage/Storage"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (c.tp.isModeChoice_ProxyIsRedPointActive(t)) {
var e = n.storage.getItem("chapterNum", 0);
n.storage.getItem("lastChapterNum", 0) < e && (t.args[0] = !0);
}
};
return a([ classId("TarvelRedPointTrait") ], e);
}(s.Trait);
r.TarvelRedPointTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
TerminateRefreshScoreTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5d1b4us63dAebt8Fo48AL2j", "TerminateRefreshScoreTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, a = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = a.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TerminateRefreshScoreTrait = void 0;
var s = t("../../../../../../../scripts/base/storage/Storage"), c = t("../../../../../../../scripts/base/trait/Trait"), l = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), p = t("../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), u = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), d = t("../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType"), f = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), m = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {};
};
e.prototype.classCheckCanOut = function() {
var t = s.storage.getItem("classTerminateRefreshScoreData", null);
return !!t && !((t = new y(t)).length < 4) && t.checkData();
};
e.prototype.chapterCheckCanOut = function() {
var t = s.storage.getItem("chapterTerminateRefreshScoreData", null);
return !!t && !((t = new y(t)).length < 4) && t.checkData();
};
e.prototype.onActive = function(t) {
m.tp.isClassGameDataClear_Disk_ProxyResetAlgorithmData(t) && s.storage.setItem("classTerminateRefreshScoreData", null);
if (m.tp.isClassBlockOutStrategy_ProxyModifyBlockOutResult(t) && 3 == (r = p.algorithmInfo.blockIdList).length) {
1 == s.storage.getItem("classRoundNum", 0) && s.storage.setItem("classTerminateRefreshScoreDataTimes", 0);
(o = (o = s.storage.getItem("classTerminateRefreshScoreData", null)) ? new y(o) : new y()).push(r);
s.storage.setItem("classTerminateRefreshScoreData", o);
}
if (m.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerSpecialTrait(t) && this.classCheckCanOut()) {
f.algorithmStrategyInfo.setAlgorithmSourceLevel1(d.ClassAlgorithmSourceType.AlgoTrait);
f.algorithmStrategyInfo.setAlgorithmList([ l.OFFER_TYPE.CLASSTERMINATE_CYCLE ]);
f.algorithmStrategyInfo.setAlgorithmFailList([ l.OFFER_TYPE.SUI_JI_WU_SI ]);
f.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
t.returnState = !0;
var e = s.storage.getItem("classTerminateRefreshScoreDataTimes", 0);
s.storage.setItem("classTerminateRefreshScoreDataTimes", e + 1);
}
m.tp.isChapterGameDataClear_Disk_ProxyResetAlgorithm(t) && s.storage.setItem("chapterTerminateRefreshScoreData", null);
if (m.tp.isChapterBlockOutStrategy_ProxyModifyBlockOutResult(t)) {
var r;
if (3 == (r = p.algorithmInfo.blockIdList).length) {
1 == s.storage.getItem("chapterRoundNum", 0) && s.storage.setItem("chapterTerminateRefreshScoreDataTimes", 0);
var o;
(o = (o = s.storage.getItem("chapterTerminateRefreshScoreData", null)) ? new y(o) : new y()).push(r);
s.storage.setItem("chapterTerminateRefreshScoreData", o);
}
}
if (m.tp.isChapterAlgorithmStrategy_Deal_ProxyTriggerAlgorithmTrait(t) && this.chapterCheckCanOut()) {
f.algorithmStrategyInfo.setAlgorithmSourceLevel1(d.ChapterAlgorithmSourceType.TravelTrait);
f.algorithmStrategyInfo.setAlgorithmList([ l.OFFER_TYPE.CHAPTERTERMINATE_CYCLE ]);
f.algorithmStrategyInfo.setAlgorithmFailList([ l.OFFER_TYPE.SUI_JI_WU_SI ]);
f.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
e = s.storage.getItem("chapterTerminateRefreshScoreDataTimes", 0);
s.storage.setItem("chapterTerminateRefreshScoreDataTimes", e + 1);
t.returnState = !0;
}
};
a([ u.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("TerminateRefreshScoreTrait") ], e);
}(c.Trait);
r.TerminateRefreshScoreTrait = h;
var y = function() {
function t(t) {
var e, r;
this.stack = [];
this.maxSize = 10;
if (t) {
this.stack = null !== (e = t.stack) && void 0 !== e ? e : [];
this.maxSize = null !== (r = t.maxSize) && void 0 !== r ? r : 10;
} else {
this.stack = [];
this.maxSize = 10;
}
}
t.prototype.push = function(t) {
this.stack.push(t);
this.stack.length > this.maxSize && this.stack.shift();
};
Object.defineProperty(t.prototype, "length", {
get: function() {
return this.stack.length;
},
enumerable: !1,
configurable: !0
});
t.prototype.checkData = function() {
if (this.stack.length >= 4) {
var t = this.getLastN(4), e = n(this.splitArrayEvenly(t), 2), r = e[0], o = e[1];
if (this.checkSame(r, o)) return !0;
}
if (this.stack.length >= 6) {
t = this.getLastN(6);
var i = n(this.splitArrayEvenly(t), 2);
r = i[0], o = i[1];
if (this.checkSame(r, o)) return !0;
}
if (this.stack.length >= 8) {
t = this.getLastN(8);
var a = n(this.splitArrayEvenly(t), 2);
r = a[0], o = a[1];
if (this.checkSame(r, o)) return !0;
}
if (this.stack.length >= 10) {
t = this.getLastN(10);
var s = n(this.splitArrayEvenly(t), 2);
r = s[0], o = s[1];
if (this.checkSame(r, o)) return !0;
}
return !1;
};
t.prototype.splitArrayEvenly = function(t) {
var e = Math.floor(t.length / 2);
return [ t.slice(0, e), t.slice(e) ];
};
t.prototype.checkSame = function(t, e) {
for (var r = 0; r < t.length; r++) {
var o = t[r], i = e[r];
if (!this.areArraysEqual(o, i)) return !1;
}
return !0;
};
t.prototype.areArraysEqual = function(t, e) {
if (t.length !== e.length) return !1;
for (var r = t.slice().sort(function(t, e) {
return t - e;
}), o = e.slice().sort(function(t, e) {
return t - e;
}), i = 0; i < r.length; i++) if (r[i] !== o[i]) return !1;
return !0;
};
t.prototype.getLastN = function(t) {
var e = Math.min(t, this.stack.length);
return this.stack.slice(-e);
};
t.prototype.pop = function() {
return this.stack.pop();
};
t.prototype.peek = function() {
return this.stack[this.stack.length - 1];
};
t.prototype.getAll = function() {
return this.stack;
};
return t;
}();
cc._RF.pop();
}, {
"../../../../../../../scripts/base/storage/Storage": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/type/AlgorithmStrategyType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
TestReadyByAdTypeInterfaceTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f09902Ey/xANq4wmHzBVXkp", "TestReadyByAdTypeInterfaceTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TestReadyByAdTypeInterfaceTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/modules/native/NativeAd"), c = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
c.tp.isClassRevive_ProxyIsTraitTriggerRevive(t) && (s.NativeAd.getReadyByAdTypeOld("reward") || (t.args[0] = !1));
if (c.tp.isChapterRevive_ProxyIsOpenRevive(t) && !s.NativeAd.getReadyByAdTypeOld("reward")) {
t.args[0] = !1;
t.args[1] = !1;
}
};
return a([ classId("TestReadyByAdTypeInterfaceTrait") ], e);
}(n.Trait);
r.TestReadyByAdTypeInterfaceTrait = l;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/native/NativeAd": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
TraitsClassMap: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5bcc9ku3U5CSrtgemTNQWWL", "TraitsClassMap");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TraitsClassMap = void 0;
var o = t("../../achievement/traits/Achievement_DownJumpAchievementTrait"), i = t("../../achievement/traits/Achievement_UpJumpAchievementTrait"), a = t("../../achievement/traits/AchievementPushV2Trait"), n = t("../../eliminate/traits/AddClearTipsExTrait"), s = t("../../gameLobby/AddMoreGameTrait"), c = t("../../algorithmStrategy/traits/AddSpaceAdd4Trait/AddSpaceAdd4Trait"), l = t("../../advertisement/traits/AdIntervalTrait"), p = t("../../advertisement/traits/AdProtectTrait"), u = t("../../ipa/AdSubEntryTrait"), d = t("../../ipa/AdSubScribeLateTrait"), f = t("../../ipa/AdSubScribeNativeTrait"), m = t("../../ipa/AdSubScribeTrait"), h = t("../../advertisement/traits/AdvertisementLoadDelayTimeNoClear30Trait"), y = t("../../advertisement/traits/AdvertisementLoadDelayTimeTrait"), g = t("../../algorithm/traits/AlgoFillSortEdgeTrait"), _ = t("../../algorithmStrategy/traits/AlgoRandomNoDeathToBinaryTrait"), v = t("../../algorithmStrategy/traits/replaceAlgorithm/AlgoUseSeedTrait"), T = t("../../advertisement/traits/AppShowPlayInterstitialAdTrait"), b = t("../../backSpace/traits/BackSpaceClickLimitTrait"), S = t("../../algorithm/traits/BAlgorithmDynamicDifficultyTrait"), P = t("../../algorithmStrategy/traits/BAlgorithmGaohuibaoARGTrait"), O = t("../../commentSkin/traits/BCommentDisplayTrait"), C = t("../../algorithmStrategy/traits/BeforeThreeRoundRemoveHunHeTianKongTrait"), I = t("../../algorithm/traits/sdkMatch/BlockLimitClassicsTrait"), A = t("../../algorithm/traits/sdkMatch/BlockLimitLevelTrait"), R = t("../../encourage/traits/BReplaceGoodEffectTrait"), E = t("../../gameLobby/CancelMiniGameForbiddenTrait"), w = t("../../encourage/traits/CenterMessagePositionStateTrait"), G = t("../../boardEffect/traits/ChangeLowDeviceEffectTrait"), k = t("../../algorithm/traits/ChapterSdkNewElimintePleasureTrait"), L = t("../../boardSplashAnimation/traits/ClearComboAnimTrait"), N = t("../../combo/traits/ComboAddRemoveNumTrait"), D = t("../../comboScoreTip/traits/ComboflyScoreTrait"), F = t("../../eliminate/traits/ComboRainbowTrait"), j = t("../../blocksProducer/traits/ComboTimeTrait"), B = t("../../algorithm/traits/replaceStrategy/ContinueSameMoreRoundLimitTrait"), M = t("../../algorithm/traits/CrossClearHardTrait"), x = t("../../advertisement/traits/ct/CTAdvertisementMultipleCallTrait"), H = t("../../advertisement/traits/ct/CTAdvertisementNoHideTrait"), U = t("../../algorithmStrategy/traits/ct/CTAgloNameSpecialTrait"), V = t("../../algorithmStrategy/traits/ct/CTAgloNameTrait"), Y = t("../../algorithmStrategy/traits/ct/CTAgloReviveTrait"), K = t("../../algorithmStrategy/traits/ct/CTAgloStrategyTrait"), W = t("../../auto/traits/CTAutoClassInfo2Trait"), Z = t("../../algorithmStrategy/traits/ct/CTBAlgorithmGaohuibaoARGTrait"), J = t("../../gameOver/traits/CTChapterWinOverTrait"), z = t("../../eliminate/ct/CTComboDotTrait"), X = t("../../dot/traits/CTDotClickGameEndInfoTrait"), q = t("../../dot/traits/CTDotClickUsrDataGameEndTrait"), Q = t("../../dot/traits/CTDotDeadReportToUsrDataGameEndTrait"), $ = t("../../dot/traits/CTDotFirstClickDataGameEndTrait"), tt = t("../../kSpeed/traits/CTEffectAccTraitTrait"), et = t("../../comboScoreTip/traits/CTGameComboScoreTrait"), rt = t("../../GBM/traits/CTGBMClearTrait"), ot = t("../../gm/traits/CTGMAlgorithmTrait"), it = t("../../gm/traits/CTGMIsOpenOperaPosTrait"), at = t("../../gm/traits/CTGMReviveTrait"), nt = t("../../log/traits/CTLogAddAdLogTrait"), st = t("../../game/traits/CTLowDeviceEffectTrait"), ct = t("../../revive/traits/CTReviveTimeOutSkipSplashTrait"), lt = t("../../algorithm/traits/sdkMatch/CtrlAlgoLimitTimeTrait"), pt = t("../../revive/traits/CTRobotAddReviveNumTrait"), ut = t("../../chapterConfig/traits/CTRobotChapterTrait"), dt = t("../../skin/traits/CTSkinBonesTrait"), ft = t("../../dailyWinStreakState/traits/DailyWinStreakStateTrait"), mt = t("../../blocksProducer/traits/DragRateTrait"), ht = t("../../kSpeed/traits/EffectAccTrait"), yt = t("../../boardClear/traits/EffectAllClearPlusTrait"), gt = t("../../collectionProducer/traits/EightHoursTravelTrait"), _t = t("../../algorithmStrategy/traits/EmptyDongFillTrait"), vt = t("../../algorithm/traits/EntropyAddWithClearTrait"), Tt = t("../../algorithm/traits/ExtremeHardTrait"), bt = t("../../boardEffect/traits/FailedHollowOutEffectTrait"), St = t("../../algorithm/traits/FastNearTkxcTrait"), Pt = t("../../algorithmStrategy/traits/FastTkxcHelpTrait"), Ot = t("../../boardEffect/traits/FeatclearscreenbombfixTrait"), Ct = t("../../boardEffect/traits/FeatclearscreenbombTrait"), It = t("../../boardSplashAnimation/traits/FeatclearscreeneffectwithputTrait"), At = t("../../algorithm/traits/FeatrandomblockbyefficientTrait"), Rt = t("../../algorithmStrategy/traits/replaceAlgorithm/FillCleanAlgoTrait"), Et = t("../../algorithm/traits/FillClearTopicTrait"), wt = t("../../algorithm/traits/sdkMatch/FillExcludeTrait"), Gt = t("../../algorithmStrategy/traits/FixAlgoVersionTrait"), kt = t("../../algorithmStrategy/traits/FixIsOpenOperaPosTrait"), Lt = t("../../advertisement/traits/FullScreenAdvtisementSortTrait"), Nt = t("../../game/traits/GameInfoDisplayTrait"), Dt = t("../../gameLobby/GameLobbyNewEntryCtrlTrait"), Ft = t("../../gameLobby/GameLobbyOpenOpentionByScoreTrait"), jt = t("../../gameLobby/GameLobbyTrait"), Bt = t("../../boardEffect/traits/GamePlayDianzanTrait"), Mt = t("../../gameLobby/Gl_changeBlockFillMTrait"), xt = t("../../gameLobby/Gl_changeDimension_blockFillTrait"), Ht = t("../../gameLobby/Gl_changeWeight_waterSortTrait"), Ut = t("../../gameLobby/Gl_deleteDimension_onetTrait"), Vt = t("../../gameLobby/Gl_deletePatch1_onetTrait"), Yt = t("../../gameLobby/Gl_deletePatch4_mahjongTrait"), Kt = t("../../gameLobby/Gl_initCapablity_onetTrait"), Wt = t("../../gameLobby/Gl_jingZiQi_ADTrait"), Zt = t("../../gameLobby/Gl_jingZiQiDrawTrait"), Jt = t("../../gameLobby/Gl_jingZiQiWinTrait"), zt = t("../../gameLobby/Gl_newSkin_waterSortTrait"), Xt = t("../../gameLobby/Gl_newTube_waterSortTrait"), qt = t("../../gameLobby/Gl_noGuide_waterSortTrait"), Qt = t("../../gameLobby/Gl_question_waterSortTrait"), $t = t("../../gameLobby/Gl_revertNum_waterSortTrait"), te = t("../../gameLobby/GLModelLevelPlan1CtrlTrait"), ee = t("../../gameLobby/GLOnetGameTimeExperiment4Trait"), re = t("../../gameLobby/GLOnetNewGuideCtrlTrait"), oe = t("../../gameLobby/GLResultView6Trait"), ie = t("../../gameLobby/GLShowAdsByGameTimeTrait"), ae = t("../../gameLobby/GLShowAdsPopupByCountTrait"), ne = t("../../gameLobby/GLShowInsertAdsBySecondsTrait"), se = t("../../blocksProducer/traits/GuideFirstLifeTrait"), ce = t("../../algorithmStrategy/traits/HardTopicTriggerRoundTrait"), le = t("../../performance/traits/HighHardSetFps120Trait"), pe = t("../../blocksProducer/traits/HotAreaAdaptScreenBottomStateTrait"), ue = t("../../blocksProducer/traits/HotAreaClickUtilTrait"), de = t("../../revive/traits/IsCacheReviveNumTrait"), fe = t("../../collectionProducer/traits/IsCollectElement15Trait"), me = t("../../modeChoice/traits/IsFirstHomeGuideTrait"), he = t("../../dot/traits/IsI18NSwitchTrait"), ye = t("../../advertisement/traits/IsOpenAdReadyLowTrait"), ge = t("../../advertisement/traits/IsOpenBannerTimeCtrTrait"), _e = t("../../blockOutStrategy/traits/IsOpenBottomCoverChangeTrait"), ve = t("../../skin/IsOpenChangeSkinTrait"), Te = t("../../blocksProducer/traits/IsOpenChangeTouchSpaceTrait"), be = t("../../eliminate/traits/IsOpenComboContinuousTrait"), Se = t("../../colorProducer/traits/IsOpenComboSpecialColor2Trait"), Pe = t("../../ecpm/traits/IsOpenEcpmGpGameDataChacheTrait"), Oe = t("../../ecpm/traits/IsOpenEcpmGpTrait"), Ce = t("../../boardSplashAnimation/traits/IsOpenEndaniDealyTrait"), Ie = t("../../advertisement/traits/IsOpenFreeADByBadReceiveTrait"), Ae = t("../../gameLobby/IsOpenGLFruitMidRollAdTrait"), Re = t("../../gameLobby/IsOpenGLFruitRandomWeightTrait"), Ee = t("../../gameLobby/IsOpenGLHallMoreGamesPopupTrait"), we = t("../../gameLobby/IsOpenGlLoadAllGameBackTrait"), Ge = t("../../gameLobby/IsOpenGLMahjongAllComboDieTrait"), ke = t("../../gameLobby/IsOpenGLMahjongClickLockDarkTrait"), Le = t("../../gameLobby/IsOpenGLMahjongComboEffectTextTrait"), Ne = t("../../gameLobby/IsOpenGLMahjongFourWayLockTrait"), De = t("../../gameLobby/IsOpenGLMahjongGuidePhase2Trait"), Fe = t("../../sound/traits/IsOpenIncreaseGlobalVolumeTrait"), je = t("../../launch/traits/IsOpenJourneyAnotherStyleTrait"), Be = t("../../comboScoreTip/traits/IsOpenMotivatorComboTrait"), Me = t("../../revive/traits/IsOpenNoVideoNoRevivieTrait"), xe = t("../../algorithmStrategy/traits/IsOpenOperaPosTrait"), He = t("../../algorithmStrategy/traits/replaceAlgorithm/IsOpenRandomShangToRandomDieTrait"), Ue = t("../../algorithmStrategy/traits/replaceAlgorithm/IsOpenRandomToRandomNoDieTrait"), Ve = t("../../revive/traits/IsOpenRestartFirstNoLifeTrait"), Ye = t("../../revive/traits/IsOpenReviveSpecialTrait"), Ke = t("../../boardEffect/traits/IsOpenRightPutTrait"), We = t("../../algorithmStrategy/traits/replaceAlgorithm/IsOpenShang1ToShang3Trait"), Ze = t("../../advertisement/traits/IsOpenShowBannerTrait"), Je = t("../../algorithmStrategy/traits/replaceAlgorithm/IsOpenSimpleIntuitionProblemTrait"), ze = t("../../encourage/traits/IsOpenSolveDifficultProblemsAmazingTrait"), Xe = t("../../setup/traits/IsOpenVibrateTrait"), qe = t("../../board/traits/IsOpenWarmhandsResetDataTrait"), Qe = t("../../algorithmStrategy/traits/replaceAlgorithm/IsOpenZhiJueToKunNanTrait"), $e = t("../../algorithm/traits/IsOpenZiMuShangZengChapterOpenTrait"), tr = t("../../algorithm/traits/IsOpenZiMuShangZengTrait"), er = t("../../achievement/traits/IsShowAchievementTrait"), rr = t("../../shareGame/traits/IsShowOfficialHomePageTrait"), or = t("../../achievement/traits/IsStatisticalDataCollectTrait"), ir = t("../../board/traits/IsWarmhandsTrait"), ar = t("../../chapterConfig/traits/LevelConfigTrait"), nr = t("../../algorithmStrategy/traits/replaceAlgorithm/LevelFillClearAimTrait"), sr = t("../../theme/traits/LevelRemoteThemeTrait"), cr = t("../../loading/traits/LoadingTieringTrait"), lr = t("../../theme/traits/LocalThemeSaveTrait"), pr = t("../../algorithmStrategy/traits/LowHardOfferTimesToEverayoneTrait"), ur = t("../../algorithmStrategy/traits/LowHardOfferTimesTrait"), dr = t("../../performance/traits/LowHardSetFps30Trait"), fr = t("../../algorithm/traits/MoreAreaTKXCTrait"), mr = t("../../blocksProducer/traits/MoreTimeToOpreateStateTrait"), hr = t("../../encourage/traits/New_best_scoreTrait"), yr = t("../../boardEffect/traits/New_clear_effectTrait"), gr = t("../../launch/traits/New_player_direct_guide_to_thirdTrait"), _r = t("../../modeChoice/traits/NewSeasonGuidanceTrait"), vr = t("../../advertisement/traits/NoShowInterAdRateTrait"), Tr = t("../../algorithmStrategy/traits/OpenChangeContinueHardTrait"), br = t("../../comboScoreTip/traits/OpenComboModelTrait"), Sr = t("../../colorProducer/traits/OpenComboSpecialColorTrait"), Pr = t("../../launch/traits/OpenLevelModelTrait"), Or = t("../../algorithm/traits/ParallelClearHardTrait"), Cr = t("../../score/traits/Param230012Trait"), Ir = t("../../boardEffect/traits/PlacementBlocksEliminateEffectTrait"), Ar = t("../../GBM/traits/PostGameToServerTrait"), Rr = t("../../algorithm/traits/RandBlockDownwardTrait"), Er = t("../../algorithmStrategy/traits/RecoverBlockSortTrait"), wr = t("../../algorithmStrategy/traits/RepateCPlusPlusRandomNoDeathTrait"), Gr = t("../../cache/traits/ReusingMiniGameAssetsTrait"), kr = t("../../blockPutDownEffect/RightPutHintCtrTrait"), Lr = t("../../setup/traits/SetAddDefultSkinBtnTrait"), Nr = t("../../setup/traits/SetAddRandomSwitchTrait"), Dr = t("../../performance/traits/SetFPSByScreenSizeTrait"), Fr = t("../../blockPutDownEffect/ShowPutEffectTrait"), jr = t("../../gameLobby/ShowUpdateCapcityAnimaCtrlTrait"), Br = t("../../skin/traits/SkinRandomTrait"), Mr = t("../../colorProducer/traits/SolidColorTrait"), xr = t("../../gameLobby/SudokuRemoveInGameAdTrait"), Hr = t("../../boardEffect/traits/SurfaceOptimizeStateTrait"), Ur = t("../../algorithmStrategy/traits/SwitchingModesCBStrategyTrait"), Vr = t("../../modeChoice/traits/TarvelRedPointTrait"), Yr = t("../../algorithmStrategy/traits/TerminateRefreshScoreTrait"), Kr = t("../../revive/traits/TestReadyByAdTypeInterfaceTrait"), Wr = t("../../skin/traits/TravelNoSkinTrait"), Zr = t("../../algorithmStrategy/traits/TryCleanAllBlocksTrait");
r.TraitsClassMap = {
Achievement_DownJumpAchievementTrait: o.Achievement_DownJumpAchievementTrait,
Achievement_UpJumpAchievementTrait: i.Achievement_UpJumpAchievementTrait,
AchievementPushV2Trait: a.AchievementPushV2Trait,
AddClearTipsExTrait: n.AddClearTipsExTrait,
AddMoreGameTrait: s.AddMoreGameTrait,
AddSpaceAdd4Trait: c.AddSpaceAdd4Trait,
AdIntervalTrait: l.AdIntervalTrait,
AdProtectTrait: p.AdProtectTrait,
AdSubEntryTrait: u.AdSubEntryTrait,
AdSubScribeLateTrait: d.AdSubScribeLateTrait,
AdSubScribeNativeTrait: f.AdSubScribeNativeTrait,
AdSubScribeTrait: m.AdSubScribeTrait,
AdvertisementLoadDelayTimeNoClear30Trait: h.AdvertisementLoadDelayTimeNoClear30Trait,
AdvertisementLoadDelayTimeTrait: y.AdvertisementLoadDelayTimeTrait,
AlgoFillSortEdgeTrait: g.AlgoFillSortEdgeTrait,
AlgoRandomNoDeathToBinaryTrait: _.AlgoRandomNoDeathToBinaryTrait,
AlgoUseSeedTrait: v.AlgoUseSeedTrait,
AppShowPlayInterstitialAdTrait: T.AppShowPlayInterstitialAdTrait,
BackSpaceClickLimitTrait: b.BackSpaceClickLimitTrait,
BAlgorithmDynamicDifficultyTrait: S.BAlgorithmDynamicDifficultyTrait,
BAlgorithmGaohuibaoARGTrait: P.BAlgorithmGaohuibaoARGTrait,
BCommentDisplayTrait: O.BCommentDisplayTrait,
BeforeThreeRoundRemoveHunHeTianKongTrait: C.BeforeThreeRoundRemoveHunHeTianKongTrait,
BlockLimitClassicsTrait: I.BlockLimitClassicsTrait,
BlockLimitLevelTrait: A.BlockLimitLevelTrait,
BReplaceGoodEffectTrait: R.BReplaceGoodEffectTrait,
CancelMiniGameForbiddenTrait: E.CancelMiniGameForbiddenTrait,
CenterMessagePositionStateTrait: w.CenterMessagePositionStateTrait,
ChangeLowDeviceEffectTrait: G.ChangeLowDeviceEffectTrait,
ChapterSdkNewElimintePleasureTrait: k.ChapterSdkNewElimintePleasureTrait,
ClearComboAnimTrait: L.ClearComboAnimTrait,
ComboAddRemoveNumTrait: N.ComboAddRemoveNumTrait,
ComboflyScoreTrait: D.ComboflyScoreTrait,
ComboRainbowTrait: F.ComboRainbowTrait,
ComboTimeTrait: j.ComboTimeTrait,
ContinueSameMoreRoundLimitTrait: B.ContinueSameMoreRoundLimitTrait,
CrossClearHardTrait: M.CrossClearHardTrait,
CTAdvertisementMultipleCallTrait: x.CTAdvertisementMultipleCallTrait,
CTAdvertisementNoHideTrait: H.CTAdvertisementNoHideTrait,
CTAgloNameSpecialTrait: U.CTAgloNameSpecialTrait,
CTAgloNameTrait: V.CTAgloNameTrait,
CTAgloReviveTrait: Y.CTAgloReviveTrait,
CTAgloStrategyTrait: K.CTAgloStrategyTrait,
CTAutoClassInfo2Trait: W.CTAutoClassInfo2Trait,
CTBAlgorithmGaohuibaoARGTrait: Z.CTBAlgorithmGaohuibaoARGTrait,
CTChapterWinOverTrait: J.CTChapterWinOverTrait,
CTComboDotTrait: z.CTComboDotTrait,
CTDotClickGameEndInfoTrait: X.CTDotClickGameEndInfoTrait,
CTDotClickUsrDataGameEndTrait: q.CTDotClickUsrDataGameEndTrait,
CTDotDeadReportToUsrDataGameEndTrait: Q.CTDotDeadReportToUsrDataGameEndTrait,
CTDotFirstClickDataGameEndTrait: $.CTDotFirstClickDataGameEndTrait,
CTEffectAccTraitTrait: tt.CTEffectAccTraitTrait,
CTGameComboScoreTrait: et.CTGameComboScoreTrait,
CTGBMClearTrait: rt.CTGBMClearTrait,
CTGMAlgorithmTrait: ot.CTGMAlgorithmTrait,
CTGMIsOpenOperaPosTrait: it.CTGMIsOpenOperaPosTrait,
CTGMReviveTrait: at.CTGMReviveTrait,
CTLogAddAdLogTrait: nt.CTLogAddAdLogTrait,
CTLowDeviceEffectTrait: st.CTLowDeviceEffectTrait,
CTReviveTimeOutSkipSplashTrait: ct.CTReviveTimeOutSkipSplashTrait,
CtrlAlgoLimitTimeTrait: lt.CtrlAlgoLimitTimeTrait,
CTRobotAddReviveNumTrait: pt.CTRobotAddReviveNumTrait,
CTRobotChapterTrait: ut.CTRobotChapterTrait,
CTSkinBonesTrait: dt.CTSkinBonesTrait,
DailyWinStreakStateTrait: ft.DailyWinStreakStateTrait,
DragRateTrait: mt.DragRateTrait,
EffectAccTrait: ht.EffectAccTrait,
EffectAllClearPlusTrait: yt.EffectAllClearPlusTrait,
EightHoursTravelTrait: gt.EightHoursTravelTrait,
EmptyDongFillTrait: _t.EmptyDongFillTrait,
EntropyAddWithClearTrait: vt.EntropyAddWithClearTrait,
ExtremeHardTrait: Tt.ExtremeHardTrait,
FailedHollowOutEffectTrait: bt.FailedHollowOutEffectTrait,
FastNearTkxcTrait: St.FastNearTkxcTrait,
FastTkxcHelpTrait: Pt.FastTkxcHelpTrait,
FeatclearscreenbombfixTrait: Ot.FeatclearscreenbombfixTrait,
FeatclearscreenbombTrait: Ct.FeatclearscreenbombTrait,
FeatclearscreeneffectwithputTrait: It.FeatclearscreeneffectwithputTrait,
FeatrandomblockbyefficientTrait: At.FeatrandomblockbyefficientTrait,
FillCleanAlgoTrait: Rt.FillCleanAlgoTrait,
FillClearTopicTrait: Et.FillClearTopicTrait,
FillExcludeTrait: wt.FillExcludeTrait,
FixAlgoVersionTrait: Gt.FixAlgoVersionTrait,
FixIsOpenOperaPosTrait: kt.FixIsOpenOperaPosTrait,
FullScreenAdvtisementSortTrait: Lt.FullScreenAdvtisementSortTrait,
GameInfoDisplayTrait: Nt.GameInfoDisplayTrait,
GameLobbyNewEntryCtrlTrait: Dt.GameLobbyNewEntryCtrlTrait,
GameLobbyOpenOpentionByScoreTrait: Ft.GameLobbyOpenOpentionByScoreTrait,
GameLobbyTrait: jt.GameLobbyTrait,
GamePlayDianzanTrait: Bt.GamePlayDianzanTrait,
Gl_changeBlockFillMTrait: Mt.Gl_changeBlockFillMTrait,
Gl_changeDimension_blockFillTrait: xt.Gl_changeDimension_blockFillTrait,
Gl_changeWeight_waterSortTrait: Ht.Gl_changeWeight_waterSortTrait,
Gl_deleteDimension_onetTrait: Ut.Gl_deleteDimension_onetTrait,
Gl_deletePatch1_onetTrait: Vt.Gl_deletePatch1_onetTrait,
Gl_deletePatch4_mahjongTrait: Yt.Gl_deletePatch4_mahjongTrait,
Gl_initCapablity_onetTrait: Kt.Gl_initCapablity_onetTrait,
Gl_jingZiQi_ADTrait: Wt.Gl_jingZiQi_ADTrait,
Gl_jingZiQiDrawTrait: Zt.Gl_jingZiQiDrawTrait,
Gl_jingZiQiWinTrait: Jt.Gl_jingZiQiWinTrait,
Gl_newSkin_waterSortTrait: zt.Gl_newSkin_waterSortTrait,
Gl_newTube_waterSortTrait: Xt.Gl_newTube_waterSortTrait,
Gl_noGuide_waterSortTrait: qt.Gl_noGuide_waterSortTrait,
Gl_question_waterSortTrait: Qt.Gl_question_waterSortTrait,
Gl_revertNum_waterSortTrait: $t.Gl_revertNum_waterSortTrait,
GLModelLevelPlan1CtrlTrait: te.GLModelLevelPlan1CtrlTrait,
GLOnetGameTimeExperiment4Trait: ee.GLOnetGameTimeExperiment4Trait,
GLOnetNewGuideCtrlTrait: re.GLOnetNewGuideCtrlTrait,
GLResultView6Trait: oe.GLResultView6Trait,
GLShowAdsByGameTimeTrait: ie.GLShowAdsByGameTimeTrait,
GLShowAdsPopupByCountTrait: ae.GLShowAdsPopupByCountTrait,
GLShowInsertAdsBySecondsTrait: ne.GLShowInsertAdsBySecondsTrait,
GuideFirstLifeTrait: se.GuideFirstLifeTrait,
HardTopicTriggerRoundTrait: ce.HardTopicTriggerRoundTrait,
HighHardSetFps120Trait: le.HighHardSetFps120Trait,
HotAreaAdaptScreenBottomStateTrait: pe.HotAreaAdaptScreenBottomStateTrait,
HotAreaClickUtilTrait: ue.HotAreaClickUtilTrait,
IsCacheReviveNumTrait: de.IsCacheReviveNumTrait,
IsCollectElement15Trait: fe.IsCollectElement15Trait,
IsFirstHomeGuideTrait: me.IsFirstHomeGuideTrait,
IsI18NSwitchTrait: he.IsI18NSwitchTrait,
IsOpenAdReadyLowTrait: ye.IsOpenAdReadyLowTrait,
IsOpenBannerTimeCtrTrait: ge.IsOpenBannerTimeCtrTrait,
IsOpenBottomCoverChangeTrait: _e.IsOpenBottomCoverChangeTrait,
IsOpenChangeSkinTrait: ve.IsOpenChangeSkinTrait,
IsOpenChangeTouchSpaceTrait: Te.IsOpenChangeTouchSpaceTrait,
IsOpenComboContinuousTrait: be.IsOpenComboContinuousTrait,
IsOpenComboSpecialColor2Trait: Se.IsOpenComboSpecialColor2Trait,
IsOpenEcpmGpGameDataChacheTrait: Pe.IsOpenEcpmGpGameDataChacheTrait,
IsOpenEcpmGpTrait: Oe.IsOpenEcpmGpTrait,
IsOpenEndaniDealyTrait: Ce.IsOpenEndaniDealyTrait,
IsOpenFreeADByBadReceiveTrait: Ie.IsOpenFreeADByBadReceiveTrait,
IsOpenGLFruitMidRollAdTrait: Ae.IsOpenGLFruitMidRollAdTrait,
IsOpenGLFruitRandomWeightTrait: Re.IsOpenGLFruitRandomWeightTrait,
IsOpenGLHallMoreGamesPopupTrait: Ee.IsOpenGLHallMoreGamesPopupTrait,
IsOpenGlLoadAllGameBackTrait: we.IsOpenGlLoadAllGameBackTrait,
IsOpenGLMahjongAllComboDieTrait: Ge.IsOpenGLMahjongAllComboDieTrait,
IsOpenGLMahjongClickLockDarkTrait: ke.IsOpenGLMahjongClickLockDarkTrait,
IsOpenGLMahjongComboEffectTextTrait: Le.IsOpenGLMahjongComboEffectTextTrait,
IsOpenGLMahjongFourWayLockTrait: Ne.IsOpenGLMahjongFourWayLockTrait,
IsOpenGLMahjongGuidePhase2Trait: De.IsOpenGLMahjongGuidePhase2Trait,
IsOpenIncreaseGlobalVolumeTrait: Fe.IsOpenIncreaseGlobalVolumeTrait,
IsOpenJourneyAnotherStyleTrait: je.IsOpenJourneyAnotherStyleTrait,
IsOpenMotivatorComboTrait: Be.IsOpenMotivatorComboTrait,
IsOpenNoVideoNoRevivieTrait: Me.IsOpenNoVideoNoRevivieTrait,
IsOpenOperaPosTrait: xe.IsOpenOperaPosTrait,
IsOpenRandomShangToRandomDieTrait: He.IsOpenRandomShangToRandomDieTrait,
IsOpenRandomToRandomNoDieTrait: Ue.IsOpenRandomToRandomNoDieTrait,
IsOpenRestartFirstNoLifeTrait: Ve.IsOpenRestartFirstNoLifeTrait,
IsOpenReviveSpecialTrait: Ye.IsOpenReviveSpecialTrait,
IsOpenRightPutTrait: Ke.IsOpenRightPutTrait,
IsOpenShang1ToShang3Trait: We.IsOpenShang1ToShang3Trait,
IsOpenShowBannerTrait: Ze.IsOpenShowBannerTrait,
IsOpenSimpleIntuitionProblemTrait: Je.IsOpenSimpleIntuitionProblemTrait,
IsOpenSolveDifficultProblemsAmazingTrait: ze.IsOpenSolveDifficultProblemsAmazingTrait,
IsOpenVibrateTrait: Xe.IsOpenVibrateTrait,
IsOpenWarmhandsResetDataTrait: qe.IsOpenWarmhandsResetDataTrait,
IsOpenZhiJueToKunNanTrait: Qe.IsOpenZhiJueToKunNanTrait,
IsOpenZiMuShangZengChapterOpenTrait: $e.IsOpenZiMuShangZengChapterOpenTrait,
IsOpenZiMuShangZengTrait: tr.IsOpenZiMuShangZengTrait,
IsShowAchievementTrait: er.IsShowAchievementTrait,
IsShowOfficialHomePageTrait: rr.IsShowOfficialHomePageTrait,
IsStatisticalDataCollectTrait: or.IsStatisticalDataCollectTrait,
IsWarmhandsTrait: ir.IsWarmhandsTrait,
LevelConfigTrait: ar.LevelConfigTrait,
LevelFillClearAimTrait: nr.LevelFillClearAimTrait,
LevelRemoteThemeTrait: sr.LevelRemoteThemeTrait,
LoadingTieringTrait: cr.LoadingTieringTrait,
LocalThemeSaveTrait: lr.LocalThemeSaveTrait,
LowHardOfferTimesToEverayoneTrait: pr.LowHardOfferTimesToEverayoneTrait,
LowHardOfferTimesTrait: ur.LowHardOfferTimesTrait,
LowHardSetFps30Trait: dr.LowHardSetFps30Trait,
MoreAreaTKXCTrait: fr.MoreAreaTKXCTrait,
MoreTimeToOpreateStateTrait: mr.MoreTimeToOpreateStateTrait,
New_best_scoreTrait: hr.New_best_scoreTrait,
New_clear_effectTrait: yr.New_clear_effectTrait,
New_player_direct_guide_to_thirdTrait: gr.New_player_direct_guide_to_thirdTrait,
NewSeasonGuidanceTrait: _r.NewSeasonGuidanceTrait,
NoShowInterAdRateTrait: vr.NoShowInterAdRateTrait,
OpenChangeContinueHardTrait: Tr.OpenChangeContinueHardTrait,
OpenComboModelTrait: br.OpenComboModelTrait,
OpenComboSpecialColorTrait: Sr.OpenComboSpecialColorTrait,
OpenLevelModelTrait: Pr.OpenLevelModelTrait,
ParallelClearHardTrait: Or.ParallelClearHardTrait,
Param230012Trait: Cr.Param230012Trait,
PlacementBlocksEliminateEffectTrait: Ir.PlacementBlocksEliminateEffectTrait,
PostGameToServerTrait: Ar.PostGameToServerTrait,
RandBlockDownwardTrait: Rr.RandBlockDownwardTrait,
RecoverBlockSortTrait: Er.RecoverBlockSortTrait,
RepateCPlusPlusRandomNoDeathTrait: wr.RepateCPlusPlusRandomNoDeathTrait,
ReusingMiniGameAssetsTrait: Gr.ReusingMiniGameAssetsTrait,
RightPutHintCtrTrait: kr.RightPutHintCtrTrait,
SetAddDefultSkinBtnTrait: Lr.SetAddDefultSkinBtnTrait,
SetAddRandomSwitchTrait: Nr.SetAddRandomSwitchTrait,
SetFPSByScreenSizeTrait: Dr.SetFPSByScreenSizeTrait,
ShowPutEffectTrait: Fr.ShowPutEffectTrait,
ShowUpdateCapcityAnimaCtrlTrait: jr.ShowUpdateCapcityAnimaCtrlTrait,
SkinRandomTrait: Br.SkinRandomTrait,
SolidColorTrait: Mr.SolidColorTrait,
SudokuRemoveInGameAdTrait: xr.SudokuRemoveInGameAdTrait,
SurfaceOptimizeStateTrait: Hr.SurfaceOptimizeStateTrait,
SwitchingModesCBStrategyTrait: Ur.SwitchingModesCBStrategyTrait,
TarvelRedPointTrait: Vr.TarvelRedPointTrait,
TerminateRefreshScoreTrait: Yr.TerminateRefreshScoreTrait,
TestReadyByAdTypeInterfaceTrait: Kr.TestReadyByAdTypeInterfaceTrait,
TravelNoSkinTrait: Wr.TravelNoSkinTrait,
TryCleanAllBlocksTrait: Zr.TryCleanAllBlocksTrait
};
window.__traitsClassMap__ || (window.__traitsClassMap__ = {});
Object.assign(window.__traitsClassMap__, r.TraitsClassMap);
cc._RF.pop();
}, {
"../../GBM/traits/CTGBMClearTrait": "CTGBMClearTrait",
"../../GBM/traits/PostGameToServerTrait": "PostGameToServerTrait",
"../../achievement/traits/AchievementPushV2Trait": "AchievementPushV2Trait",
"../../achievement/traits/Achievement_DownJumpAchievementTrait": "Achievement_DownJumpAchievementTrait",
"../../achievement/traits/Achievement_UpJumpAchievementTrait": "Achievement_UpJumpAchievementTrait",
"../../achievement/traits/IsShowAchievementTrait": "IsShowAchievementTrait",
"../../achievement/traits/IsStatisticalDataCollectTrait": "IsStatisticalDataCollectTrait",
"../../advertisement/traits/AdIntervalTrait": "AdIntervalTrait",
"../../advertisement/traits/AdProtectTrait": "AdProtectTrait",
"../../advertisement/traits/AdvertisementLoadDelayTimeNoClear30Trait": "AdvertisementLoadDelayTimeNoClear30Trait",
"../../advertisement/traits/AdvertisementLoadDelayTimeTrait": "AdvertisementLoadDelayTimeTrait",
"../../advertisement/traits/AppShowPlayInterstitialAdTrait": "AppShowPlayInterstitialAdTrait",
"../../advertisement/traits/FullScreenAdvtisementSortTrait": "FullScreenAdvtisementSortTrait",
"../../advertisement/traits/IsOpenAdReadyLowTrait": "IsOpenAdReadyLowTrait",
"../../advertisement/traits/IsOpenBannerTimeCtrTrait": "IsOpenBannerTimeCtrTrait",
"../../advertisement/traits/IsOpenFreeADByBadReceiveTrait": "IsOpenFreeADByBadReceiveTrait",
"../../advertisement/traits/IsOpenShowBannerTrait": "IsOpenShowBannerTrait",
"../../advertisement/traits/NoShowInterAdRateTrait": "NoShowInterAdRateTrait",
"../../advertisement/traits/ct/CTAdvertisementMultipleCallTrait": "CTAdvertisementMultipleCallTrait",
"../../advertisement/traits/ct/CTAdvertisementNoHideTrait": "CTAdvertisementNoHideTrait",
"../../algorithm/traits/AlgoFillSortEdgeTrait": "AlgoFillSortEdgeTrait",
"../../algorithm/traits/BAlgorithmDynamicDifficultyTrait": "BAlgorithmDynamicDifficultyTrait",
"../../algorithm/traits/ChapterSdkNewElimintePleasureTrait": "ChapterSdkNewElimintePleasureTrait",
"../../algorithm/traits/CrossClearHardTrait": "CrossClearHardTrait",
"../../algorithm/traits/EntropyAddWithClearTrait": "EntropyAddWithClearTrait",
"../../algorithm/traits/ExtremeHardTrait": "ExtremeHardTrait",
"../../algorithm/traits/FastNearTkxcTrait": "FastNearTkxcTrait",
"../../algorithm/traits/FeatrandomblockbyefficientTrait": "FeatrandomblockbyefficientTrait",
"../../algorithm/traits/FillClearTopicTrait": "FillClearTopicTrait",
"../../algorithm/traits/IsOpenZiMuShangZengChapterOpenTrait": "IsOpenZiMuShangZengChapterOpenTrait",
"../../algorithm/traits/IsOpenZiMuShangZengTrait": "IsOpenZiMuShangZengTrait",
"../../algorithm/traits/MoreAreaTKXCTrait": "MoreAreaTKXCTrait",
"../../algorithm/traits/ParallelClearHardTrait": "ParallelClearHardTrait",
"../../algorithm/traits/RandBlockDownwardTrait": "RandBlockDownwardTrait",
"../../algorithm/traits/replaceStrategy/ContinueSameMoreRoundLimitTrait": "ContinueSameMoreRoundLimitTrait",
"../../algorithm/traits/sdkMatch/BlockLimitClassicsTrait": "BlockLimitClassicsTrait",
"../../algorithm/traits/sdkMatch/BlockLimitLevelTrait": "BlockLimitLevelTrait",
"../../algorithm/traits/sdkMatch/CtrlAlgoLimitTimeTrait": "CtrlAlgoLimitTimeTrait",
"../../algorithm/traits/sdkMatch/FillExcludeTrait": "FillExcludeTrait",
"../../algorithmStrategy/traits/AddSpaceAdd4Trait/AddSpaceAdd4Trait": "AddSpaceAdd4Trait",
"../../algorithmStrategy/traits/AlgoRandomNoDeathToBinaryTrait": "AlgoRandomNoDeathToBinaryTrait",
"../../algorithmStrategy/traits/BAlgorithmGaohuibaoARGTrait": "BAlgorithmGaohuibaoARGTrait",
"../../algorithmStrategy/traits/BeforeThreeRoundRemoveHunHeTianKongTrait": "BeforeThreeRoundRemoveHunHeTianKongTrait",
"../../algorithmStrategy/traits/EmptyDongFillTrait": "EmptyDongFillTrait",
"../../algorithmStrategy/traits/FastTkxcHelpTrait": "FastTkxcHelpTrait",
"../../algorithmStrategy/traits/FixAlgoVersionTrait": "FixAlgoVersionTrait",
"../../algorithmStrategy/traits/FixIsOpenOperaPosTrait": "FixIsOpenOperaPosTrait",
"../../algorithmStrategy/traits/HardTopicTriggerRoundTrait": "HardTopicTriggerRoundTrait",
"../../algorithmStrategy/traits/IsOpenOperaPosTrait": "IsOpenOperaPosTrait",
"../../algorithmStrategy/traits/LowHardOfferTimesToEverayoneTrait": "LowHardOfferTimesToEverayoneTrait",
"../../algorithmStrategy/traits/LowHardOfferTimesTrait": "LowHardOfferTimesTrait",
"../../algorithmStrategy/traits/OpenChangeContinueHardTrait": "OpenChangeContinueHardTrait",
"../../algorithmStrategy/traits/RecoverBlockSortTrait": "RecoverBlockSortTrait",
"../../algorithmStrategy/traits/RepateCPlusPlusRandomNoDeathTrait": "RepateCPlusPlusRandomNoDeathTrait",
"../../algorithmStrategy/traits/SwitchingModesCBStrategyTrait": "SwitchingModesCBStrategyTrait",
"../../algorithmStrategy/traits/TerminateRefreshScoreTrait": "TerminateRefreshScoreTrait",
"../../algorithmStrategy/traits/TryCleanAllBlocksTrait": "TryCleanAllBlocksTrait",
"../../algorithmStrategy/traits/ct/CTAgloNameSpecialTrait": "CTAgloNameSpecialTrait",
"../../algorithmStrategy/traits/ct/CTAgloNameTrait": "CTAgloNameTrait",
"../../algorithmStrategy/traits/ct/CTAgloReviveTrait": "CTAgloReviveTrait",
"../../algorithmStrategy/traits/ct/CTAgloStrategyTrait": "CTAgloStrategyTrait",
"../../algorithmStrategy/traits/ct/CTBAlgorithmGaohuibaoARGTrait": "CTBAlgorithmGaohuibaoARGTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/AlgoUseSeedTrait": "AlgoUseSeedTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/FillCleanAlgoTrait": "FillCleanAlgoTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/IsOpenRandomShangToRandomDieTrait": "IsOpenRandomShangToRandomDieTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/IsOpenRandomToRandomNoDieTrait": "IsOpenRandomToRandomNoDieTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/IsOpenShang1ToShang3Trait": "IsOpenShang1ToShang3Trait",
"../../algorithmStrategy/traits/replaceAlgorithm/IsOpenSimpleIntuitionProblemTrait": "IsOpenSimpleIntuitionProblemTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/IsOpenZhiJueToKunNanTrait": "IsOpenZhiJueToKunNanTrait",
"../../algorithmStrategy/traits/replaceAlgorithm/LevelFillClearAimTrait": "LevelFillClearAimTrait",
"../../auto/traits/CTAutoClassInfo2Trait": "CTAutoClassInfo2Trait",
"../../backSpace/traits/BackSpaceClickLimitTrait": "BackSpaceClickLimitTrait",
"../../blockOutStrategy/traits/IsOpenBottomCoverChangeTrait": "IsOpenBottomCoverChangeTrait",
"../../blockPutDownEffect/RightPutHintCtrTrait": "RightPutHintCtrTrait",
"../../blockPutDownEffect/ShowPutEffectTrait": "ShowPutEffectTrait",
"../../blocksProducer/traits/ComboTimeTrait": "ComboTimeTrait",
"../../blocksProducer/traits/DragRateTrait": "DragRateTrait",
"../../blocksProducer/traits/GuideFirstLifeTrait": "GuideFirstLifeTrait",
"../../blocksProducer/traits/HotAreaAdaptScreenBottomStateTrait": "HotAreaAdaptScreenBottomStateTrait",
"../../blocksProducer/traits/HotAreaClickUtilTrait": "HotAreaClickUtilTrait",
"../../blocksProducer/traits/IsOpenChangeTouchSpaceTrait": "IsOpenChangeTouchSpaceTrait",
"../../blocksProducer/traits/MoreTimeToOpreateStateTrait": "MoreTimeToOpreateStateTrait",
"../../board/traits/IsOpenWarmhandsResetDataTrait": "IsOpenWarmhandsResetDataTrait",
"../../board/traits/IsWarmhandsTrait": "IsWarmhandsTrait",
"../../boardClear/traits/EffectAllClearPlusTrait": "EffectAllClearPlusTrait",
"../../boardEffect/traits/ChangeLowDeviceEffectTrait": "ChangeLowDeviceEffectTrait",
"../../boardEffect/traits/FailedHollowOutEffectTrait": "FailedHollowOutEffectTrait",
"../../boardEffect/traits/FeatclearscreenbombTrait": "FeatclearscreenbombTrait",
"../../boardEffect/traits/FeatclearscreenbombfixTrait": "FeatclearscreenbombfixTrait",
"../../boardEffect/traits/GamePlayDianzanTrait": "GamePlayDianzanTrait",
"../../boardEffect/traits/IsOpenRightPutTrait": "IsOpenRightPutTrait",
"../../boardEffect/traits/New_clear_effectTrait": "New_clear_effectTrait",
"../../boardEffect/traits/PlacementBlocksEliminateEffectTrait": "PlacementBlocksEliminateEffectTrait",
"../../boardEffect/traits/SurfaceOptimizeStateTrait": "SurfaceOptimizeStateTrait",
"../../boardSplashAnimation/traits/ClearComboAnimTrait": "ClearComboAnimTrait",
"../../boardSplashAnimation/traits/FeatclearscreeneffectwithputTrait": "FeatclearscreeneffectwithputTrait",
"../../boardSplashAnimation/traits/IsOpenEndaniDealyTrait": "IsOpenEndaniDealyTrait",
"../../cache/traits/ReusingMiniGameAssetsTrait": "ReusingMiniGameAssetsTrait",
"../../chapterConfig/traits/CTRobotChapterTrait": "CTRobotChapterTrait",
"../../chapterConfig/traits/LevelConfigTrait": "LevelConfigTrait",
"../../collectionProducer/traits/EightHoursTravelTrait": "EightHoursTravelTrait",
"../../collectionProducer/traits/IsCollectElement15Trait": "IsCollectElement15Trait",
"../../colorProducer/traits/IsOpenComboSpecialColor2Trait": "IsOpenComboSpecialColor2Trait",
"../../colorProducer/traits/OpenComboSpecialColorTrait": "OpenComboSpecialColorTrait",
"../../colorProducer/traits/SolidColorTrait": "SolidColorTrait",
"../../combo/traits/ComboAddRemoveNumTrait": "ComboAddRemoveNumTrait",
"../../comboScoreTip/traits/CTGameComboScoreTrait": "CTGameComboScoreTrait",
"../../comboScoreTip/traits/ComboflyScoreTrait": "ComboflyScoreTrait",
"../../comboScoreTip/traits/IsOpenMotivatorComboTrait": "IsOpenMotivatorComboTrait",
"../../comboScoreTip/traits/OpenComboModelTrait": "OpenComboModelTrait",
"../../commentSkin/traits/BCommentDisplayTrait": "BCommentDisplayTrait",
"../../dailyWinStreakState/traits/DailyWinStreakStateTrait": "DailyWinStreakStateTrait",
"../../dot/traits/CTDotClickGameEndInfoTrait": "CTDotClickGameEndInfoTrait",
"../../dot/traits/CTDotClickUsrDataGameEndTrait": "CTDotClickUsrDataGameEndTrait",
"../../dot/traits/CTDotDeadReportToUsrDataGameEndTrait": "CTDotDeadReportToUsrDataGameEndTrait",
"../../dot/traits/CTDotFirstClickDataGameEndTrait": "CTDotFirstClickDataGameEndTrait",
"../../dot/traits/IsI18NSwitchTrait": "IsI18NSwitchTrait",
"../../ecpm/traits/IsOpenEcpmGpGameDataChacheTrait": "IsOpenEcpmGpGameDataChacheTrait",
"../../ecpm/traits/IsOpenEcpmGpTrait": "IsOpenEcpmGpTrait",
"../../eliminate/ct/CTComboDotTrait": "CTComboDotTrait",
"../../eliminate/traits/AddClearTipsExTrait": "AddClearTipsExTrait",
"../../eliminate/traits/ComboRainbowTrait": "ComboRainbowTrait",
"../../eliminate/traits/IsOpenComboContinuousTrait": "IsOpenComboContinuousTrait",
"../../encourage/traits/BReplaceGoodEffectTrait": "BReplaceGoodEffectTrait",
"../../encourage/traits/CenterMessagePositionStateTrait": "CenterMessagePositionStateTrait",
"../../encourage/traits/IsOpenSolveDifficultProblemsAmazingTrait": "IsOpenSolveDifficultProblemsAmazingTrait",
"../../encourage/traits/New_best_scoreTrait": "New_best_scoreTrait",
"../../game/traits/CTLowDeviceEffectTrait": "CTLowDeviceEffectTrait",
"../../game/traits/GameInfoDisplayTrait": "GameInfoDisplayTrait",
"../../gameLobby/AddMoreGameTrait": "AddMoreGameTrait",
"../../gameLobby/CancelMiniGameForbiddenTrait": "CancelMiniGameForbiddenTrait",
"../../gameLobby/GLModelLevelPlan1CtrlTrait": "GLModelLevelPlan1CtrlTrait",
"../../gameLobby/GLOnetGameTimeExperiment4Trait": "GLOnetGameTimeExperiment4Trait",
"../../gameLobby/GLOnetNewGuideCtrlTrait": "GLOnetNewGuideCtrlTrait",
"../../gameLobby/GLResultView6Trait": "GLResultView6Trait",
"../../gameLobby/GLShowAdsByGameTimeTrait": "GLShowAdsByGameTimeTrait",
"../../gameLobby/GLShowAdsPopupByCountTrait": "GLShowAdsPopupByCountTrait",
"../../gameLobby/GLShowInsertAdsBySecondsTrait": "GLShowInsertAdsBySecondsTrait",
"../../gameLobby/GameLobbyNewEntryCtrlTrait": "GameLobbyNewEntryCtrlTrait",
"../../gameLobby/GameLobbyOpenOpentionByScoreTrait": "GameLobbyOpenOpentionByScoreTrait",
"../../gameLobby/GameLobbyTrait": "GameLobbyTrait",
"../../gameLobby/Gl_changeBlockFillMTrait": "Gl_changeBlockFillMTrait",
"../../gameLobby/Gl_changeDimension_blockFillTrait": "Gl_changeDimension_blockFillTrait",
"../../gameLobby/Gl_changeWeight_waterSortTrait": "Gl_changeWeight_waterSortTrait",
"../../gameLobby/Gl_deleteDimension_onetTrait": "Gl_deleteDimension_onetTrait",
"../../gameLobby/Gl_deletePatch1_onetTrait": "Gl_deletePatch1_onetTrait",
"../../gameLobby/Gl_deletePatch4_mahjongTrait": "Gl_deletePatch4_mahjongTrait",
"../../gameLobby/Gl_initCapablity_onetTrait": "Gl_initCapablity_onetTrait",
"../../gameLobby/Gl_jingZiQiDrawTrait": "Gl_jingZiQiDrawTrait",
"../../gameLobby/Gl_jingZiQiWinTrait": "Gl_jingZiQiWinTrait",
"../../gameLobby/Gl_jingZiQi_ADTrait": "Gl_jingZiQi_ADTrait",
"../../gameLobby/Gl_newSkin_waterSortTrait": "Gl_newSkin_waterSortTrait",
"../../gameLobby/Gl_newTube_waterSortTrait": "Gl_newTube_waterSortTrait",
"../../gameLobby/Gl_noGuide_waterSortTrait": "Gl_noGuide_waterSortTrait",
"../../gameLobby/Gl_question_waterSortTrait": "Gl_question_waterSortTrait",
"../../gameLobby/Gl_revertNum_waterSortTrait": "Gl_revertNum_waterSortTrait",
"../../gameLobby/IsOpenGLFruitMidRollAdTrait": "IsOpenGLFruitMidRollAdTrait",
"../../gameLobby/IsOpenGLFruitRandomWeightTrait": "IsOpenGLFruitRandomWeightTrait",
"../../gameLobby/IsOpenGLHallMoreGamesPopupTrait": "IsOpenGLHallMoreGamesPopupTrait",
"../../gameLobby/IsOpenGLMahjongAllComboDieTrait": "IsOpenGLMahjongAllComboDieTrait",
"../../gameLobby/IsOpenGLMahjongClickLockDarkTrait": "IsOpenGLMahjongClickLockDarkTrait",
"../../gameLobby/IsOpenGLMahjongComboEffectTextTrait": "IsOpenGLMahjongComboEffectTextTrait",
"../../gameLobby/IsOpenGLMahjongFourWayLockTrait": "IsOpenGLMahjongFourWayLockTrait",
"../../gameLobby/IsOpenGLMahjongGuidePhase2Trait": "IsOpenGLMahjongGuidePhase2Trait",
"../../gameLobby/IsOpenGlLoadAllGameBackTrait": "IsOpenGlLoadAllGameBackTrait",
"../../gameLobby/ShowUpdateCapcityAnimaCtrlTrait": "ShowUpdateCapcityAnimaCtrlTrait",
"../../gameLobby/SudokuRemoveInGameAdTrait": "SudokuRemoveInGameAdTrait",
"../../gameOver/traits/CTChapterWinOverTrait": "CTChapterWinOverTrait",
"../../gm/traits/CTGMAlgorithmTrait": "CTGMAlgorithmTrait",
"../../gm/traits/CTGMIsOpenOperaPosTrait": "CTGMIsOpenOperaPosTrait",
"../../gm/traits/CTGMReviveTrait": "CTGMReviveTrait",
"../../ipa/AdSubEntryTrait": "AdSubEntryTrait",
"../../ipa/AdSubScribeLateTrait": "AdSubScribeLateTrait",
"../../ipa/AdSubScribeNativeTrait": "AdSubScribeNativeTrait",
"../../ipa/AdSubScribeTrait": "AdSubScribeTrait",
"../../kSpeed/traits/CTEffectAccTraitTrait": "CTEffectAccTraitTrait",
"../../kSpeed/traits/EffectAccTrait": "EffectAccTrait",
"../../launch/traits/IsOpenJourneyAnotherStyleTrait": "IsOpenJourneyAnotherStyleTrait",
"../../launch/traits/New_player_direct_guide_to_thirdTrait": "New_player_direct_guide_to_thirdTrait",
"../../launch/traits/OpenLevelModelTrait": "OpenLevelModelTrait",
"../../loading/traits/LoadingTieringTrait": "LoadingTieringTrait",
"../../log/traits/CTLogAddAdLogTrait": "CTLogAddAdLogTrait",
"../../modeChoice/traits/IsFirstHomeGuideTrait": "IsFirstHomeGuideTrait",
"../../modeChoice/traits/NewSeasonGuidanceTrait": "NewSeasonGuidanceTrait",
"../../modeChoice/traits/TarvelRedPointTrait": "TarvelRedPointTrait",
"../../performance/traits/HighHardSetFps120Trait": "HighHardSetFps120Trait",
"../../performance/traits/LowHardSetFps30Trait": "LowHardSetFps30Trait",
"../../performance/traits/SetFPSByScreenSizeTrait": "SetFPSByScreenSizeTrait",
"../../revive/traits/CTReviveTimeOutSkipSplashTrait": "CTReviveTimeOutSkipSplashTrait",
"../../revive/traits/CTRobotAddReviveNumTrait": "CTRobotAddReviveNumTrait",
"../../revive/traits/IsCacheReviveNumTrait": "IsCacheReviveNumTrait",
"../../revive/traits/IsOpenNoVideoNoRevivieTrait": "IsOpenNoVideoNoRevivieTrait",
"../../revive/traits/IsOpenRestartFirstNoLifeTrait": "IsOpenRestartFirstNoLifeTrait",
"../../revive/traits/IsOpenReviveSpecialTrait": "IsOpenReviveSpecialTrait",
"../../revive/traits/TestReadyByAdTypeInterfaceTrait": "TestReadyByAdTypeInterfaceTrait",
"../../score/traits/Param230012Trait": "Param230012Trait",
"../../setup/traits/IsOpenVibrateTrait": "IsOpenVibrateTrait",
"../../setup/traits/SetAddDefultSkinBtnTrait": "SetAddDefultSkinBtnTrait",
"../../setup/traits/SetAddRandomSwitchTrait": "SetAddRandomSwitchTrait",
"../../shareGame/traits/IsShowOfficialHomePageTrait": "IsShowOfficialHomePageTrait",
"../../skin/IsOpenChangeSkinTrait": "IsOpenChangeSkinTrait",
"../../skin/traits/CTSkinBonesTrait": "CTSkinBonesTrait",
"../../skin/traits/SkinRandomTrait": "SkinRandomTrait",
"../../skin/traits/TravelNoSkinTrait": "TravelNoSkinTrait",
"../../sound/traits/IsOpenIncreaseGlobalVolumeTrait": "IsOpenIncreaseGlobalVolumeTrait",
"../../theme/traits/LevelRemoteThemeTrait": "LevelRemoteThemeTrait",
"../../theme/traits/LocalThemeSaveTrait": "LocalThemeSaveTrait"
} ],
TraitsMain: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b25988au9JAhK0kgA155dGo", "TraitsMain");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
t("./modules/traits/map/TraitsClassMap");
var n = cc._decorator, s = n.ccclass, c = (n.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {};
return a([ s ], e);
}(cc.Component));
r.default = c;
cc._RF.pop();
}, {
"./modules/traits/map/TraitsClassMap": "TraitsClassMap"
} ],
TraitsPrefabConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "4a16e+lC8pFL5PL+MZ1/ebC", "TraitsPrefabConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PrefabConfigType = r.satisfies = r.TraitsPrefabConfig = void 0;
r.TraitsPrefabConfig = {
NewBestScoreEffect: {
name: "NewBestScoreEffect",
url: "prefabs/encourage/new_best_score/NewBestScoreEffect",
bundleName: "mainTraits"
},
GamePlayDianZan: {
name: "GamePlayDianZan",
url: "prefabs/boardEffect/gamePlayDianzan/GamePlayDianZan",
bundleName: "mainTraits"
},
GameInfoDisplay: {
name: "GameInfoDisplay",
url: "prefabs/game/gameInfoDisplay/gameInfoDisplay",
bundleName: "mainTraits"
},
BoardEffect: {
name: "BoardEffect",
url: "prefabs/boardEffect/new_clear_effect/BoardEffect",
bundleName: "mainTraits"
},
BGEffect: {
name: "BGEffect",
url: "prefabs/boardEffect/new_clear_effect/BGEffect",
bundleName: "mainTraits"
},
IsFirstHomeGuide: {
name: "IsFirstHomeGuide",
url: "prefabs/modeChoice/IsFirstHomeGuideTrait/firstHomeGuidePrefab",
bundleName: "mainTraits"
},
NewSeasonGuidance: {
name: "NewSeasonGuidance",
url: "prefabs/modeChoice/NewSeasonGuidanceTrait/newSeasonGuidancePrefab"
},
preEliComboRainbow: {
name: "preEliComboRainbow",
url: "prefabs/preEliminate/comboRainbow/preEliComboRainbow",
bundleName: "mainTraits"
},
preEliminatePrefab: {
name: "preEliminatePrefab",
url: "prefabs/preEliminate/preEliminatePrefab",
bundleName: "mainTraits"
}
};
cc._RF.pop();
}, {} ],
TravelNoSkinTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6f4bfyamNpHiqLP1FOCTe3o", "TravelNoSkinTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelNoSkinTrait = void 0;
var n = t("../../../../../../../scripts/base/trait/Trait"), s = t("../../../../../../../scripts/falcon/EventManager"), c = t("../../../../../../../scripts/modules/game/type/GameType"), l = t("../../../../../../../scripts/modules/game/vo/GameInfo"), p = t("../../../../../../../scripts/modules/skin/events/E_Skin_Show"), u = t("../../../../../../../scripts/modules/skin/vo/SkinInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
d.tp.isChapterSkin_ProxyOnOpenChapter(t) && s.EventManager.dispatchModuleEvent(new p.E_Skin_Show(!1));
d.tp.isChapterSkin_ProxyOnCloseChapter(t) && s.EventManager.dispatchModuleEvent(new p.E_Skin_Show(!0));
d.tp.isChapterSkin_Board_ProxyOnGameStart(t) && u.skinInfo.restoreBlockColorValueMap();
d.tp.isClassSkin_Board_ProxyOnGameStart(t) && u.skinInfo.upDataBlockColorValueMap();
d.tp.isSetAddRandomSwitchTraitGetIsTrigger(t) && l.gameInfo.gameMode === c.GameMode.Chapter && (t.returnValue = !1);
d.tp.isSetAddDefultSkinBtnTraitGetIsTrigger(t) && l.gameInfo.gameMode === c.GameMode.Chapter && (t.returnValue = !1);
};
return a([ classId("TravelNoSkinTrait") ], e);
}(n.Trait);
r.TravelNoSkinTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/falcon/EventManager": void 0,
"../../../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../../../../scripts/modules/skin/events/E_Skin_Show": void 0,
"../../../../../../../scripts/modules/skin/vo/SkinInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
TryCleanAllBlocksTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b8279eV+JNGH4tikT6xcZZy", "TryCleanAllBlocksTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TryCleanAllBlocksTrait = void 0;
var n = t("../../../../../../../scripts/base/enum/enum"), s = t("../../../../../../../scripts/base/trait/Trait"), c = t("../../../../../../../scripts/modules/algorithm/type/AlgorithmType"), l = t("../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm"), p = t("../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo"), u = t("../../../../../../../scripts/modules/score/vo/ScoreInfo"), d = t("../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate"), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
d.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t) && u.scoreInfo.score < u.scoreInfo.highRecordScore && u.scoreInfo.score >= u.scoreInfo.highRecordScore - 450 && this.updateAlgorithmLists();
};
e.prototype.updateAlgorithmLists = function() {
var t = !1;
if (p.algorithmStrategyInfo.algorithmList && Array.isArray(p.algorithmStrategyInfo.algorithmList)) for (var e = 0; e < p.algorithmStrategyInfo.algorithmList.length; e++) {
var r = p.algorithmStrategyInfo.algorithmList[e];
if (this.shouldUpdateAlgorithm(r)) {
t = !0;
p.algorithmStrategyInfo.algorithmList[e] = c.OFFER_TYPE.CLEAR_BOARD_BLANK;
}
}
if (t) p.algorithmStrategyInfo.setAlgorithmFailList([ c.OFFER_TYPE.TIAN_KONG_XIAO_CHU, c.OFFER_TYPE.SUI_JI_WU_SI ]); else if (p.algorithmStrategyInfo.algorithmFailList && Array.isArray(p.algorithmStrategyInfo.algorithmFailList)) for (e = 0; e < p.algorithmStrategyInfo.algorithmFailList.length; e++) {
r = p.algorithmStrategyInfo.algorithmFailList[e];
this.shouldUpdateAlgorithm(r) && (p.algorithmStrategyInfo.algorithmFailList[e] = c.OFFER_TYPE.CLEAR_BOARD_BLANK);
}
};
e.prototype.shouldUpdateAlgorithm = function(t) {
return n.isValueInEnum(t, c.OFFER_TYPE_BLANK) && t != c.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU && t != c.OFFER_TYPE.ALL_COMBINATION_ID70 && t != c.OFFER_TYPE.EMPTYDONGFILL;
};
a([ l.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("TryCleanAllBlocksTrait") ], e);
}(s.Trait);
r.TryCleanAllBlocksTrait = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/enum/enum": void 0,
"../../../../../../../scripts/base/trait/Trait": void 0,
"../../../../../../../scripts/modules/algorithm/type/AlgorithmType": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/decorate/DecoratorAlgorithm": void 0,
"../../../../../../../scripts/modules/algorithmStrategy/vo/AlgorithmStrategyInfo": void 0,
"../../../../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../../../../../../../scripts/modules/traits/typePredicate/TraitTypePredicate": void 0
} ],
boardSplashAnimationClearScreenEffectWithPut: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c02f4jP9tlA7L1Ydb3Ceccb", "boardSplashAnimationClearScreenEffectWithPut");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, r, n) : i(e, r)) || n);
return a > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(i, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, i, a, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, a[1])).done) return i;
(o = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < i[1]) {
n.label = i[1];
i = a;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(a);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("../../../../../../../scripts/base/components/Component"), l = t("../../../../../../../scripts/modules/native/NativeVibrator"), p = cc._decorator, u = p.ccclass, d = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.heart_img = null;
e.row_node = null;
e.blockNode = null;
e.rowEffectNode = null;
e.imgColors = [];
e.endEffect = null;
e.addColorNodes = null;
return e;
}
e.prototype.start = function() {};
e.prototype.render = function() {
return n(this, void 0, void 0, function() {
return s(this, function() {
return [ 2 ];
});
});
};
e.prototype.addBlockHeartImg = function(t, e) {
if (e && e.isValid) if (this.addColorNodes && this.addColorNodes[e.uuid]) this.addColorNodes[e.uuid].position = e.position; else {
var r = cc.instantiate(this.heart_img);
r.active = !0;
r.position = e.position;
r.opacity = 0;
this.blockNode.addChild(r);
var o = r.getComponent(cc.Sprite);
o && (o.spriteFrame = this.imgColors[t - 1]);
var i = cc.director._kSpeed || 1;
cc.tween(r).repeatForever(cc.tween().to(.33 * i, {
opacity: 255
}).delay(.34 * i).to(.33 * i, {
opacity: 0
})).start();
this.addColorNodes || (this.addColorNodes = {});
this.addColorNodes[e.uuid] = r;
}
};
e.prototype.addRowEffect = function(t, e) {
for (var r = this, o = function(t, e) {
var o = cc.instantiate(r.row_node);
o.active = !0;
o.angle = 90 * t;
o.position = e;
r.rowEffectNode.addChild(o);
var i = o.getComponent(dragonBones.ArmatureDisplay);
if (i) {
i.timeScale = 1 / (cc.director._kSpeed || 1);
i.playAnimation("in", 1);
}
}, i = cc.v2(-this.node.width / 2, this.node.height / 2), a = 0, n = 0, s = 0; s < t.length; s++) {
o(0, cc.v3(0, i.y - 106 * t[s] - 53, 0));
a += t[s];
}
for (s = 0; s < e.length; s++) {
o(1, cc.v3(i.x + 106 * e[s] + 53, 0, 0));
n += e[s];
}
cc.tween(this.node).delay(.2).call(function() {
r.removeBlockHeart(null, !0);
r.playEndEffect(cc.v2(i.x + n / 2 * 106 + 53, i.y - a / 2 * 106 + 53));
}).start();
};
e.prototype.removeBlockHeart = function(t, e) {
void 0 === e && (e = !1);
if (e) {
this.blockNode.childrenCount && this.blockNode.destroyAllChildren();
this.addColorNodes = {};
} else if (this.addColorNodes && this.addColorNodes[t]) {
this.addColorNodes[t].destroy();
delete this.addColorNodes[t];
}
};
e.prototype.playEndEffect = function(t) {
var e = this;
this.endEffect.node.active = !0;
this.endEffect.node.setPosition(t);
this.endEffect.playAnimation("in", 1);
this.endEffect.timeScale = 1 / (cc.director._kSpeed || 1);
l.NativeVibrator.vibrateByType(3);
cc.tween(this.node).delay(1.5).call(function() {
e.rowEffectNode.childrenCount && e.rowEffectNode.destroyAllChildren();
e.endEffect.node.active = !1;
}).start();
};
a([ d(cc.Node) ], e.prototype, "heart_img", void 0);
a([ d(cc.Node) ], e.prototype, "row_node", void 0);
a([ d(cc.Node) ], e.prototype, "blockNode", void 0);
a([ d(cc.Node) ], e.prototype, "rowEffectNode", void 0);
a([ d([ cc.SpriteFrame ]) ], e.prototype, "imgColors", void 0);
a([ d(dragonBones.ArmatureDisplay) ], e.prototype, "endEffect", void 0);
return a([ u ], e);
}(c.default);
r.default = f;
cc._RF.pop();
}, {
"../../../../../../../scripts/base/components/Component": void 0,
"../../../../../../../scripts/modules/native/NativeVibrator": void 0
} ]
}, {}, [ "TraitsMain", "CTGBMClearTrait", "PostGameToServerTrait", "AchievementPushV2Trait", "Achievement_DownJumpAchievementTrait", "Achievement_UpJumpAchievementTrait", "IsShowAchievementTrait", "IsStatisticalDataCollectTrait", "AdIntervalTrait", "AdProtectTrait", "AdvertisementLoadDelayTimeNoClear30Trait", "AdvertisementLoadDelayTimeTrait", "AppShowPlayInterstitialAdTrait", "FullScreenAdvtisementSortTrait", "IsOpenAdReadyLowTrait", "IsOpenBannerTimeCtrTrait", "IsOpenFreeADByBadReceiveTrait", "IsOpenShowBannerTrait", "NoShowInterAdRateTrait", "CTAdvertisementMultipleCallTrait", "CTAdvertisementNoHideTrait", "AlgoFillSortEdgeTrait", "BAlgorithmDynamicDifficultyTrait", "ChapterSdkNewElimintePleasureTrait", "CrossClearHardTrait", "EntropyAddWithClearTrait", "ExtremeHardTrait", "FastNearTkxcTrait", "FeatrandomblockbyefficientTrait", "FillClearTopicTrait", "IsOpenZiMuShangZengChapterOpenTrait", "IsOpenZiMuShangZengTrait", "MoreAreaTKXCTrait", "ParallelClearHardTrait", "RandBlockDownwardTrait", "ContinueSameMoreRoundLimitTrait", "BlockLimitClassicsTrait", "BlockLimitLevelTrait", "CtrlAlgoLimitTimeTrait", "FillExcludeTrait", "AddSpaceAdd4Trait", "AlgoRandomNoDeathToBinaryTrait", "BAlgorithmGaohuibaoARGTrait", "BeforeThreeRoundRemoveHunHeTianKongTrait", "EmptyDongFillTrait", "FastTkxcHelpTrait", "FixAlgoVersionTrait", "FixIsOpenOperaPosTrait", "HardTopicTriggerRoundTrait", "IsOpenOperaPosTrait", "LowHardOfferTimesToEverayoneTrait", "LowHardOfferTimesTrait", "OpenChangeContinueHardTrait", "RecoverBlockSortTrait", "RepateCPlusPlusRandomNoDeathTrait", "SwitchingModesCBStrategyTrait", "TerminateRefreshScoreTrait", "TryCleanAllBlocksTrait", "CTAgloNameSpecialTrait", "CTAgloNameTrait", "CTAgloReviveTrait", "CTAgloStrategyTrait", "CTBAlgorithmGaohuibaoARGTrait", "AlgoUseSeedTrait", "FillCleanAlgoTrait", "IsOpenRandomShangToRandomDieTrait", "IsOpenRandomToRandomNoDieTrait", "IsOpenShang1ToShang3Trait", "IsOpenSimpleIntuitionProblemTrait", "IsOpenZhiJueToKunNanTrait", "LevelFillClearAimTrait", "MainTraitAudioConfig ", "CTAutoClassInfo2Trait", "BackSpaceClickLimitTrait", "IsOpenBottomCoverChangeTrait", "RightPutHintCtrTrait", "ShowPutEffectTrait", "ComboTimeTrait", "DragRateTrait", "GuideFirstLifeTrait", "HotAreaAdaptScreenBottomStateTrait", "HotAreaClickUtilTrait", "IsOpenChangeTouchSpaceTrait", "MoreTimeToOpreateStateTrait", "IsOpenWarmhandsResetDataTrait", "IsWarmhandsTrait", "EffectAllClearPlusTrait", "GamePlayDianZan", "ChangeLowDeviceEffectTrait", "FailedHollowOutEffectTrait", "FeatclearscreenbombTrait", "FeatclearscreenbombfixTrait", "GamePlayDianzanTrait", "IsOpenRightPutTrait", "New_clear_effectTrait", "PlacementBlocksEliminateEffectTrait", "SurfaceOptimizeStateTrait", "boardSplashAnimationClearScreenEffectWithPut", "ClearComboAnimTrait", "FeatclearscreeneffectwithputTrait", "IsOpenEndaniDealyTrait", "ReusingMiniGameAssetsTrait", "CTRobotChapterTrait", "LevelConfigTrait", "EightHoursTravelTrait", "IsCollectElement15Trait", "IsOpenComboSpecialColor2Trait", "OpenComboSpecialColorTrait", "SolidColorTrait", "ComboAddRemoveNumTrait", "CTGameComboScoreTrait", "ComboflyScoreTrait", "IsOpenMotivatorComboTrait", "OpenComboModelTrait", "BCommentDisplayTrait", "DailyWinStreakStateTrait", "CTDotClickGameEndInfoTrait", "CTDotClickUsrDataGameEndTrait", "CTDotDeadReportToUsrDataGameEndTrait", "CTDotFirstClickDataGameEndTrait", "IsI18NSwitchTrait", "MainDragonBonesConfig", "IsOpenEcpmGpGameDataChacheTrait", "IsOpenEcpmGpTrait", "PreEliComboRainbow", "CTComboDotTrait", "AddClearTipsExTrait", "ComboRainbowTrait", "IsOpenComboContinuousTrait", "NewBestScoreEffect", "EncourageReplaceGood", "BReplaceGoodEffectTrait", "CenterMessagePositionStateTrait", "IsOpenSolveDifficultProblemsAmazingTrait", "New_best_scoreTrait", "GameInfoDisplay", "CTLowDeviceEffectTrait", "GameInfoDisplayTrait", "AddMoreGameTrait", "CancelMiniGameForbiddenTrait", "GLModelLevelPlan1CtrlTrait", "GLOnetGameTimeExperiment4Trait", "GLOnetNewGuideCtrlTrait", "GLResultView6Trait", "GLShowAdsByGameTimeTrait", "GLShowAdsPopupByCountTrait", "GLShowInsertAdsBySecondsTrait", "GameLobbyNewEntryCtrlTrait", "GameLobbyOpenOpentionByScoreTrait", "GameLobbyTrait", "Gl_changeBlockFillMTrait", "Gl_changeDimension_blockFillTrait", "Gl_changeWeight_waterSortTrait", "Gl_deleteDimension_onetTrait", "Gl_deletePatch1_onetTrait", "Gl_deletePatch4_mahjongTrait", "Gl_initCapablity_onetTrait", "Gl_jingZiQiDrawTrait", "Gl_jingZiQiWinTrait", "Gl_jingZiQi_ADTrait", "Gl_newSkin_waterSortTrait", "Gl_newTube_waterSortTrait", "Gl_noGuide_waterSortTrait", "Gl_question_waterSortTrait", "Gl_revertNum_waterSortTrait", "IsOpenGLFruitMidRollAdTrait", "IsOpenGLFruitRandomWeightTrait", "IsOpenGLHallMoreGamesPopupTrait", "IsOpenGLMahjongAllComboDieTrait", "IsOpenGLMahjongClickLockDarkTrait", "IsOpenGLMahjongComboEffectTextTrait", "IsOpenGLMahjongFourWayLockTrait", "IsOpenGLMahjongGuidePhase2Trait", "IsOpenGlLoadAllGameBackTrait", "ShowUpdateCapcityAnimaCtrlTrait", "SudokuRemoveInGameAdTrait", "CTChapterWinOverTrait", "CTGMAlgorithmTrait", "CTGMIsOpenOperaPosTrait", "CTGMReviveTrait", "AdSubEntryTrait", "AdSubScribeLateTrait", "AdSubScribeNativeTrait", "AdSubScribeTrait", "CTEffectAccTraitTrait", "EffectAccTrait", "IsOpenJourneyAnotherStyleTrait", "New_player_direct_guide_to_thirdTrait", "OpenLevelModelTrait", "LoadingTieringTrait", "CTLogAddAdLogTrait", "FirstHomeGuideComponent", "NewSeasonGuidanceComponent", "IsFirstHomeGuideTrait", "NewSeasonGuidanceTrait", "TarvelRedPointTrait", "HighHardSetFps120Trait", "LowHardSetFps30Trait", "SetFPSByScreenSizeTrait", "PreEliminateComponent", "TraitsPrefabConfig", "CTReviveTimeOutSkipSplashTrait", "CTRobotAddReviveNumTrait", "IsCacheReviveNumTrait", "IsOpenNoVideoNoRevivieTrait", "IsOpenRestartFirstNoLifeTrait", "IsOpenReviveSpecialTrait", "TestReadyByAdTypeInterfaceTrait", "Param230012Interface", "Param230012Trait", "IsOpenVibrateTrait", "SetAddDefultSkinBtnTrait", "SetAddRandomSwitchTrait", "ShareMainComponent", "ShareMediaComponent", "IsShowOfficialHomePageTrait", "IsOpenChangeSkinTrait", "CTSkinBonesTrait", "SkinRandomTrait", "TravelNoSkinTrait", "IsOpenIncreaseGlobalVolumeTrait", "LevelRemoteThemeTrait", "LocalThemeSaveTrait", "TraitsClassMap" ]);