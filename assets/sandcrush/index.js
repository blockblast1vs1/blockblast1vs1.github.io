window.__require = function e(t, n, o) {
function a(i, c) {
if (!n[i]) {
if (!t[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var u = n[i] = {
exports: {}
};
t[i][0].call(u.exports, function(e) {
return a(t[i][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < o.length; i++) a(o[i]);
return a;
}({
AdPlayingState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "67823YSJ8JFWLWBc7fejJSO", "AdPlayingState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../statemachine/State"), i = e("../SandAdManager"), c = e("../SandGameMgr"), s = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.adFromScene = "";
t.adCallback = null;
return t;
}
t.prototype.onEnter = function() {
this.adFromScene = this.machine.getData("adFromScene");
this.adCallback = this.machine.getData("adCallback");
c.SandGameMgr.pauseBgm();
i.SandAdManager.instance.showSettleAd(this.onAdComplete.bind(this), this.adFromScene, !1);
};
t.prototype.onAdComplete = function(e) {
this.adCallback && this.adCallback(e);
c.SandGameMgr.playBgm();
};
return t;
}(r.State);
n.default = s;
cc._RF.pop();
}, {
"../SandAdManager": "SandAdManager",
"../SandGameMgr": "SandGameMgr",
"../statemachine/State": "State"
} ],
AntContourTracer: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "85a43yglTJKWaGhViLJRjdZ", "AntContourTracer");
var o, a, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.antContourTracer = n.AntContourTracer = void 0;
(function(e) {
e[e.RIGHT = 0] = "RIGHT";
e[e.DOWN = 1] = "DOWN";
e[e.LEFT = 2] = "LEFT";
e[e.UP = 3] = "UP";
})(a || (a = {}));
var i = {
0: [ 3, 0, 1 ],
1: [ 0, 1, 2 ],
2: [ 1, 2, 3 ],
3: [ 2, 3, 0 ]
}, c = {
0: [ 1, 0, 3 ],
1: [ 2, 1, 0 ],
2: [ 3, 2, 1 ],
3: [ 0, 3, 2 ]
}, s = ((o = {})[a.RIGHT] = {
x: 1,
y: 0
}, o[a.DOWN] = {
x: 0,
y: -1
}, o[a.LEFT] = {
x: -1,
y: 0
}, o[a.UP] = {
x: 0,
y: 1
}, o), l = function() {
function e() {
this._color = -1;
this._isRightStart = !1;
}
e.getInstance = function() {
e.instance || (e.instance = new e());
return e.instance;
};
e.prototype.checkConnectBlock = function(e, t, n, o) {
this.vertex_max_y = o.length;
this.vertex_max_x = o[0].length;
this.sandMatrix = o;
this._color = n;
var r = {
x: t,
y: e
};
if (0 !== r.x && r.x !== this.vertex_max_x - 1 || r.y < 0 || r.y >= this.vertex_max_y) {
this.clear();
return {
isConnected: !1,
points: [],
bounds: {
minRow: 0,
maxRow: 0,
minCol: 0,
maxCol: 0
}
};
}
var i = a.RIGHT;
this._isRightStart = r.x === this.vertex_max_x - 1;
if (this._isRightStart) {
r.x = this.vertex_max_x;
i = a.LEFT;
}
this._vertexPath = [];
this._vertexPath.push(r);
var c = this.walk(r, i);
this.clear();
return {
isConnected: c.isConnected
};
};
e.prototype.clear = function() {
this.sandMatrix = null;
this._vertexPath = [];
this._color = -1;
};
e.prototype.findNextEnablePos = function(e, t) {
var n, o, a = c[t];
this._isRightStart && (a = i[t]);
try {
for (var s = r(a), l = s.next(); !l.done; l = s.next()) {
var u = l.value, d = this.getNextPos(e, u);
if (!(d.x < 0 || d.x > this.vertex_max_x || d.y < 0 || d.y > this.vertex_max_y) && this.canPass(e, u)) return {
pos: d,
direction: u
};
}
} catch (e) {
n = {
error: e
};
} finally {
try {
l && !l.done && (o = s.return) && o.call(s);
} finally {
if (n) throw n.error;
}
}
return null;
};
e.prototype.getNextPos = function(e, t) {
var n = s[t];
return {
x: e.x + n.x,
y: e.y + n.y
};
};
e.prototype.canPass = function(e, t) {
var n, o, a = [];
0 === t ? a = [ {
row: e.y - 1,
col: e.x
}, {
row: e.y,
col: e.x
} ] : 1 === t ? a = [ {
row: e.y - 1,
col: e.x - 1
}, {
row: e.y - 1,
col: e.x
} ] : 2 === t ? a = [ {
row: e.y - 1,
col: e.x - 1
}, {
row: e.y,
col: e.x - 1
} ] : 3 === t && (a = [ {
row: e.y,
col: e.x - 1
}, {
row: e.y,
col: e.x
} ]);
var i = !1, c = !1;
try {
for (var s = r(a), l = s.next(); !l.done; l = s.next()) {
var u = l.value;
this.isValidBlock(u.row, u.col) ? i = !0 : c = !0;
}
} catch (e) {
n = {
error: e
};
} finally {
try {
l && !l.done && (o = s.return) && o.call(s);
} finally {
if (n) throw n.error;
}
}
return i && c;
};
e.prototype.isValidBlock = function(e, t) {
var n = this.sandMatrix.length, o = this.sandMatrix[0].length;
if (e < 0 || e >= n || t < 0 || t >= o) return !1;
var a = this.sandMatrix[e][t];
return a && a.color === this._color;
};
e.prototype.walk = function(e, t) {
for (var n = e, o = t, a = !1, r = !1, i = this.vertex_max_x * this.vertex_max_y * 2 + this.vertex_max_x + this.vertex_max_y, c = 0, s = this.findNextEnablePos(n, o); s && c < i; ) {
c++;
this._vertexPath.push(s.pos);
n = s.pos;
o = s.direction;
if (this._isRightStart) {
if (n.x <= 0) {
a = !0;
break;
}
if (n.x >= this.vertex_max_x) {
r = !0;
break;
}
} else {
if (n.x >= this.vertex_max_x) {
a = !0;
break;
}
if (n.x <= 0) {
r = !0;
break;
}
}
s = this.findNextEnablePos(n, o);
}
return {
isConnected: a,
isClosed: r
};
};
return e;
}();
n.AntContourTracer = l;
n.antContourTracer = l.getInstance();
cc._RF.pop();
}, {} ],
ChildrenMap: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3b47cLxZ2lLKqI/fooPursA", "ChildrenMap");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = i.menu, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.list = [];
t._map = new Map();
return t;
}
t.prototype.init = function() {
var e = this;
this.list.forEach(function(t) {
e._map.set(t.name, t);
});
};
t.prototype.getNode = function(e) {
0 == this._map.size && this.init();
return this._map.get(e) || null;
};
t.prototype.hasNode = function(e) {
return this._map.has(e);
};
r([ s([ cc.Node ]) ], t.prototype, "list", void 0);
return r([ c, l("UITool/ChildrenMap") ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
DeathAnimationState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c9816zEvFNGBKvCtf7INAXy", "DeathAnimationState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../statemachine/State"), i = e("../GameStateEnum"), c = e("../EventMgr"), s = e("../../data/SandLocalData"), l = e("../SandGameMgr"), u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.animationDuration = 1.5;
t.elapsedTime = 0;
t.isAnimationFinished = !1;
return t;
}
t.prototype.onEnter = function() {
this.elapsedTime = 0;
this.isAnimationFinished = !1;
l.SandGameMgr.saveGameState();
s.SandLocalData.forceSave();
this.playDeathGrayAnimation();
};
t.prototype.onUpdate = function(e) {
if (!this.isAnimationFinished) {
this.elapsedTime += e;
this.elapsedTime;
if (this.elapsedTime >= this.animationDuration) {
this.isAnimationFinished = !0;
this.onAnimationComplete();
}
}
};
t.prototype.playDeathGrayAnimation = function() {
c.EventMgr.emit(c.EventType.gameOver);
};
t.prototype.onAnimationComplete = function() {
this.machine.changeState(i.GameState.GAME_RESULT);
};
return t;
}(r.State);
n.default = u;
cc._RF.pop();
}, {
"../../data/SandLocalData": "SandLocalData",
"../EventMgr": "EventMgr",
"../GameStateEnum": "GameStateEnum",
"../SandGameMgr": "SandGameMgr",
"../statemachine/State": "State"
} ],
DeathGrayRenderer: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ba30fLoTMhO85KF+eSU2cVw", "DeathGrayRenderer");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../sandLogic/SandMapHelper"), c = e("../../config/SandDefines"), s = e("../../data/SandLocalData"), l = e("../../mgr/SandGameMgr"), u = e("../../utils/SandSoundUtils"), d = e("./SandTileColorHelper"), p = cc._decorator.ccclass, h = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.graphics = null;
t._isPlaying = !1;
t._effectCompleted = !1;
t._redFlashFrames = [ 204, 204, 0, 0, 240, 240, 0, 0, 204, 204, 0, 0, 204, 0 ];
t._currentFlashFrame = 0;
t._frameTimer = 0;
t._grayDelayTimer = 0;
t._grayTimer = 0;
t._redFlashComplete = !1;
t._grayComplete = !1;
t._redOverlayAlpha = 0;
t._grayProgress = new Map();
t._effectStartTime = 0;
t._needsRedraw = !1;
t._colorCache = new Map();
return t;
}
n = t;
t.prototype.onLoad = function() {
this.graphics = this.node.getComponent(cc.Graphics);
if (this.graphics) {
this.node.active = !0;
this.node.opacity = 255;
this.clear();
this.node.name, this.node.zIndex;
} else console.error("[DeathGrayRenderer] Graphics组件未找到，请确保节点上有cc.Graphics组件");
};
t.prototype.startDeathEffect = function(e) {
if (!this._isPlaying) if (this.graphics) {
e.length, s.SandLocalData.deadlineHeight;
u.SandSoundUtils.playEffect(u.SAND_SOUND_EFFECT.SAND_FAIL);
this._isPlaying = !0;
this._effectCompleted = !1;
this._effectStartTime = Date.now();
this._redFlashComplete = !1;
this._grayComplete = !1;
this._currentFlashFrame = 0;
this._frameTimer = 0;
this._grayDelayTimer = 0;
this._grayTimer = 0;
this._redOverlayAlpha = 0;
this._grayProgress.clear();
this.schedule(this.updateDeathEffect, n.FRAME_TIME, cc.macro.REPEAT_FOREVER);
this.renderAllSands(e);
} else console.error("[DeathGrayRenderer] Graphics组件未初始化，无法开始死亡效果");
};
t.prototype.stopDeathEffect = function() {
this._isPlaying = !1;
this._effectCompleted = !1;
this._redFlashComplete = !1;
this._grayComplete = !1;
this._redOverlayAlpha = 0;
this._grayProgress.clear();
this.unschedule(this.updateDeathEffect);
};
t.prototype.clearDeathEffect = function() {
this.stopDeathEffect();
this.clear();
};
t.prototype.updateDeathEffect = function(e) {
if (this._isPlaying) {
if (this.updateEffectState(e)) {
this._needsRedraw = !0;
var t = l.SandGameMgr.getBoxLogic().getMapSands();
this.renderAllSands(t);
}
} else this.unschedule(this.updateDeathEffect);
};
t.prototype.updateEffectState = function(e) {
if (!this._isPlaying) return !1;
var t = !1, o = n.FRAME_TIME;
this._frameTimer += e;
if (!this._redFlashComplete && this._frameTimer >= o) {
this._frameTimer -= o;
if (this._currentFlashFrame < this._redFlashFrames.length) {
var a = this._redFlashFrames[this._currentFlashFrame];
if (a !== this._redOverlayAlpha) {
this._redOverlayAlpha = a;
t = !0;
}
this._currentFlashFrame++;
} else {
this._redFlashComplete = !0;
this._redOverlayAlpha = 0;
this._grayDelayTimer = n.DELAY_FRAMES * n.FRAME_TIME;
this.updateAboveDeadlineGray();
t = !0;
}
}
if (this._redFlashComplete && !this._grayComplete) if (this._grayDelayTimer > 0) this._grayDelayTimer -= e; else {
var r = this._grayTimer;
this.updateBelowDeadlineGrayEffect();
this._grayTimer !== r && (t = !0);
}
if (this._redFlashComplete && this._grayComplete) {
((Date.now() - this._effectStartTime) / 1e3).toFixed(2);
this._effectCompleted = !0;
this._isPlaying = !1;
this.unschedule(this.updateDeathEffect);
l.SandGameMgr.deathGrayEffectFinish();
}
return t;
};
t.prototype.updateAboveDeadlineGray = function() {
for (var e = s.SandLocalData.deadlineHeight, t = 0; t < i.SandMapHelper.maxRow; t++) t > e && this._grayProgress.set(t, 1);
};
t.prototype.updateBelowDeadlineGrayEffect = function() {
var e = s.SandLocalData.deadlineHeight;
this._grayTimer++;
for (var t = e + 1, o = t > 0 ? n.GRAY_TOTAL_FRAMES / t : 0, a = Math.min(t, Math.floor(this._grayTimer / o)), r = 0; r <= e; r++) e - r < a ? this._grayProgress.set(r, 1) : this._grayProgress.has(r) || this._grayProgress.set(r, 0);
if (this._grayTimer >= n.GRAY_TOTAL_FRAMES) {
this._grayComplete = !0;
n.GRAY_TOTAL_FRAMES;
}
};
t.prototype.renderAllSands = function(e) {
this.graphics && this.graphics.clear();
for (var t = 0; t < e.length; t++) for (var n = 0; n < e[t].length; n++) {
var o = e[t][n];
o && o.row < i.SandMapHelper.maxRow && o.col < i.SandMapHelper.maxCol && this.renderSingleTile(o.row, o.col, o.color, o.isDamp, o.dampColor);
}
this._needsRedraw = !1;
};
t.prototype.renderSingleTile = function(e, t, n, o, a) {
var r = t * c.SIZE_SAND, i = e * c.SIZE_SAND;
this.fillRect(r, i, c.SIZE_SAND, n, o, e, a);
};
t.prototype.fillRect = function(e, t, o, a, r, i, l) {
a -= 1;
if (s.SandLocalData.sandTileColorType === c.SandTileColorType.two) {
var u = a + "_" + r + "_" + this._redOverlayAlpha + "_" + this.getGrayProgress(i) + "_" + this.isAboveDeadline(i);
if (!(m = this._colorCache.get(u))) {
var p = (y = d.SandTileColorHelper.getColor(r, l))[0][a], h = y[1][a];
if (this._isPlaying || this._effectCompleted) if (this.isAboveDeadline(i)) {
var f = this.getRedOverlayAlpha();
p = n.applyRedOverlay(p, f);
h = n.applyRedOverlay(h, f);
var g = this.getGrayProgress(i);
p = n.convertToGray(p, g, 34);
h = n.convertToGray(h, g, 34);
} else {
g = this.getGrayProgress(i);
p = n.convertToGray(p, g, 34);
h = n.convertToGray(h, g, 34);
}
m = {
outer: p,
inner: h
};
this._colorCache.size > 1e3 && this._colorCache.clear();
this._colorCache.set(u, m);
}
this.graphics.fillColor = m.outer;
this.graphics.rect(e, t, o, o);
this.graphics.fill();
var S = .1 * o;
this.graphics.fillColor = m.inner;
this.graphics.rect(e + S, t + S, o - 2 * S, o - 2 * S);
this.graphics.fill();
} else if (s.SandLocalData.sandTileColorType === c.SandTileColorType.three) {
var m;
u = a + "_" + r + "_" + this._redOverlayAlpha + "_" + this.getGrayProgress(i) + "_" + this.isAboveDeadline(i);
if (!(m = this._colorCache.get(u))) {
p = (y = d.SandTileColorHelper.getColor(r, l))[0][a];
var y, _ = y[1][a];
h = y[2][a];
if (this._isPlaying || this._effectCompleted) if (this.isAboveDeadline(i)) {
f = this.getRedOverlayAlpha();
p = n.applyRedOverlay(p, f);
_ = n.applyRedOverlay(_, f);
h = n.applyRedOverlay(h, f);
g = this.getGrayProgress(i);
p = n.convertToGray(p, g, 34);
_ = n.convertToGray(_, g, 34);
h = n.convertToGray(h, g, 34);
} else {
g = this.getGrayProgress(i);
p = n.convertToGray(p, g, 34);
_ = n.convertToGray(_, g, 34);
h = n.convertToGray(h, g, 34);
}
m = {
outer: p,
middle: _,
inner: h
};
this._colorCache.size > 1e3 && this._colorCache.clear();
this._colorCache.set(u, m);
}
this.graphics.fillColor = m.outer;
this.graphics.rect(e, t, o, o);
this.graphics.fill();
var v = .1 * o;
this.graphics.fillColor = m.middle;
this.graphics.rect(e + v, t + 2 * v, o - 3 * v, o - 3 * v);
this.graphics.fill();
var b = .1 * o;
this.graphics.fillColor = m.inner;
this.graphics.rect(e + b, t + 6 * b, o - 7 * b, o - 7 * b);
this.graphics.fill();
}
};
t.prototype.clear = function() {
this.graphics && this.graphics.clear();
this._colorCache.clear();
};
t.prototype.isPlaying = function() {
return this._isPlaying;
};
t.prototype.shouldBlockNormalRender = function() {
return this._isPlaying || this._effectCompleted;
};
t.prototype.getRedOverlayAlpha = function() {
return this._redOverlayAlpha;
};
t.prototype.getGrayProgress = function(e) {
return (this._isPlaying || this._effectCompleted) && this._grayProgress.get(e) || 0;
};
t.prototype.isAboveDeadline = function(e) {
return e > s.SandLocalData.deadlineHeight - 1;
};
t.convertToGray = function(e, t, n) {
void 0 === n && (n = 34);
if (!e) return cc.Color.BLACK;
var o = Math.round(.299 * e.r + .587 * e.g + .114 * e.b), a = Math.min(255, o + n), r = Math.round(e.r * (1 - t) + a * t), i = Math.round(e.g * (1 - t) + a * t), c = Math.round(e.b * (1 - t) + a * t);
return cc.color(r, i, c, e.a);
};
t.applyRedOverlay = function(e, t) {
if (!e || t <= 0) return e || cc.Color.BLACK;
var n = cc.color(255, 0, 0, t), o = t / 255, a = Math.round(e.r * (1 - o) + n.r * o), r = Math.round(e.g * (1 - o) + n.g * o), i = Math.round(e.b * (1 - o) + n.b * o);
return cc.color(a, r, i, e.a);
};
t.prototype.onDestroy = function() {
this.stopDeathEffect();
this._colorCache.clear();
};
var n;
t.FRAME_RATE = 60;
t.FRAME_TIME = 1 / n.FRAME_RATE;
t.DELAY_FRAMES = 6;
t.GRAY_TOTAL_FRAMES = 40;
return n = r([ p ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../config/SandDefines": "SandDefines",
"../../data/SandLocalData": "SandLocalData",
"../../mgr/SandGameMgr": "SandGameMgr",
"../../sandLogic/SandMapHelper": "SandMapHelper",
"../../utils/SandSoundUtils": "SandSoundUtils",
"./SandTileColorHelper": "SandTileColorHelper"
} ],
DeathWarningEffect: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "89dc3wbhhBJlYw5kZJDA5dJ", "DeathWarningEffect");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DeathWarningEffect = void 0;
var r = e("../sandLogic/SandMapHelper"), i = e("../data/SandLocalData"), c = e("../mgr/EventMgr"), s = e("../mgr/HSUIMgrAdapter"), l = e("../config/SandUIConfig"), u = e("./SandMainUI"), d = e("../../../../resources/hsgame/utils/HSResourceUtils"), p = function() {
function e() {
this._isWarningActive = !1;
this._redNode = null;
this.init();
}
Object.defineProperty(e.prototype, "_warningDistance", {
get: function() {
return i.SandLocalData.deathWarningDistance;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
c.EventMgr.on(c.EventType.restart, this.onGameRestart, this);
};
e.prototype.checkWarning = function(e) {
e >= i.SandLocalData.deadlineHeight - this._warningDistance ? this._isWarningActive || this.triggerWarning(e) : this._isWarningActive && this.stopWarning();
};
e.prototype.triggerWarning = function() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
i.SandLocalData.deadlineHeight;
this._isWarningActive = !0;
return [ 4, this.playWarningAnimation() ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.stopWarning = function() {
if (this._isWarningActive) {
this._isWarningActive = !1;
cc.isValid(this._redNode) && (this._redNode.active = !1);
}
};
e.prototype.playWarningAnimation = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function(t) {
switch (t.label) {
case 0:
t.trys.push([ 0, 2, , 3 ]);
return [ 4, this.loadSpineAsset() ];

case 1:
t.sent();
if (this._redNode && this._isWarningActive) {
this._redNode.active = !0;
this.updateTransform();
this.playAnim();
}
return [ 3, 3 ];

case 2:
e = t.sent();
console.error("[DeathWarningEffect] 播放警告动画失败:", e);
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
e.prototype.playAnim = function() {
if (this._redNode && cc.isValid(this._redNode)) {
cc.Tween.stopAllByTarget(this._redNode);
this._redNode.opacity = 125;
cc.tween(this._redNode).to(.5, {
opacity: 255
}).to(.5, {
opacity: 125
}).union().repeatForever().start();
}
};
e.prototype.updateTransform = function() {
var e = s.HSUIMgrAdapter.get(l.SandUIConfig.mainUI), t = this.getWarningPosition();
this._redNode.x = t.x;
this._redNode.y = t.y;
var n = r.SandMapHelper.contentWidth, o = r.SandMapHelper.contentHeight - e.node.getComponent(u.default).deadlineNode.y;
this._redNode.setContentSize(n, o);
};
e.prototype.loadSpineAsset = function() {
return o(this, void 0, Promise, function() {
var t, n, o, r;
return a(this, function(a) {
switch (a.label) {
case 0:
if (cc.isValid(this._redNode)) return [ 2 ];
a.label = 1;

case 1:
a.trys.push([ 1, 3, , 4 ]);
if (!(t = s.HSUIMgrAdapter.get(l.SandUIConfig.mainUI))) return [ 2 ];
n = t.node.getComponent(u.default).redLight || t.node;
return [ 4, d.HSResourceUtils.loadNode("res/prefabs/UI/redlight", n, "DeathWarningSpine", "sand_prefab") ];

case 2:
o = a.sent();
if (e._instance !== this) {
o && cc.isValid(o) && o.destroy();
return [ 2 ];
}
this._redNode = o;
o.active = !1;
o.zIndex = 1e3;
return [ 3, 4 ];

case 3:
r = a.sent();
console.error("[DeathWarningEffect] 加载spine资源失败:", r);
throw r;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.getWarningPosition = function() {
var e = s.HSUIMgrAdapter.get(l.SandUIConfig.mainUI);
if (e) {
var t = r.SandMapHelper.getPos(r.SandMapHelper.maxRow, Math.floor(r.SandMapHelper.maxCol / 2)), n = e.node.getComponent(u.default).content.convertToWorldSpaceAR(t), o = cc.director.getScene().getChildByName("Canvas").convertToNodeSpaceAR(n);
return cc.v2(o.x + 5, o.y + 4);
}
return cc.v2(0, 0);
};
e.prototype.onGameRestart = function() {
this.stopWarning();
};
e.prototype.destroy = function() {
c.EventMgr.off(c.EventType.restart, this.onGameRestart, this);
this._isWarningActive = !1;
this._redNode = null;
e._instance = null;
};
e._instance = null;
return e;
}();
n.DeathWarningEffect = p;
cc._RF.pop();
}, {
"../../../../resources/hsgame/utils/HSResourceUtils": void 0,
"../config/SandUIConfig": "SandUIConfig",
"../data/SandLocalData": "SandLocalData",
"../mgr/EventMgr": "EventMgr",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../sandLogic/SandMapHelper": "SandMapHelper",
"./SandMainUI": "SandMainUI"
} ],
Dialogbox: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "db066HM5sRC2p1afjRtx7Hy", "Dialogbox");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../mgr/HSUIMgrAdapter"), c = e("../config/SandUIConfig"), s = cc._decorator, l = s.ccclass, u = s.property, d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
i.HSUIMgrAdapter.bindButton(this.btn1, this.onBtn1.bind(this));
i.HSUIMgrAdapter.bindButton(this.btn2, this.onBtn2.bind(this));
};
t.prototype.onEnable = function() {};
t.prototype.onParam = function(e) {
this.cb1 = e.cb1;
this.cb2 = e.cb2;
this.tipLabel.getComponent(cc.Label).string = e.tip;
};
t.prototype.start = function() {};
t.prototype.onDisable = function() {};
t.prototype.onBtn1 = function() {
this.cb1 && this.cb1();
i.HSUIMgrAdapter.hide(c.SandUIConfig.dialogUI);
};
t.prototype.onBtn2 = function() {
this.cb2 && this.cb2();
i.HSUIMgrAdapter.hide(c.SandUIConfig.dialogUI);
};
r([ u(cc.Node) ], t.prototype, "btn1", void 0);
r([ u(cc.Node) ], t.prototype, "btn2", void 0);
r([ u(cc.Node) ], t.prototype, "tipLabel", void 0);
return r([ l ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../config/SandUIConfig": "SandUIConfig",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter"
} ],
EventMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "46a1b9Txl9GbbEqDSWo495U", "EventMgr");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EventType = n.EventMgr = void 0;
var o;
(function(e) {
e.updateScore = "addScore";
e.restart = "restart";
e.revive = "revive";
e.reviveAccept = "reviveAccept";
e.reviveReject = "reviveReject";
e.placeSand = "placeSand";
e.eliminateSand = "eliminateSand";
e.clearBoard = "clearBoard";
e.drawBoxSand = "drawBoxSand";
e.drawDragSand = "drawDragSand";
e.drawMapSand = "drawMapSand";
e.clearSand = "clearSand";
e.gameOver = "gameOver";
e.drag_begin = "drag_begin";
e.drag_cancel = "drag_cancel";
e.drawShapeOption = "drawShapeOption";
e.resetBox = "resetBox";
e.tutorialCompleted = "tutorialCompleted";
})(o || (o = {}));
n.EventType = o;
var a = new cc.EventTarget();
n.EventMgr = a;
cc._RF.pop();
}, {} ],
FeaturesEnum: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c0d82sPdT5LepA3vaBCGgLD", "FeaturesEnum");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.FeaturesEnum = void 0;
(function(e) {
e.sand_feat_skin = "sand_feat_skin";
e.no_ad_settle_in_first_n_games = "no_ad_settle_in_first_n_games";
e.no_ad_ingame_in_first_n_games = "no_ad_ingame_in_first_n_games";
e.ad_close_drag_no_splash = "ad_close_drag_no_splash";
e.ad_close_first_install_n_seconds = "ad_close_first_install_n_seconds";
e.ad_interval_ingame = "ad_interval_ingame";
e.ad_interval_settle_with_ingame = "ad_interval_settle_with_ingame";
e.ad_close_before_tips = "ad_close_before_tips";
e.scorerateUnitID = "scorerateUnitID";
e.sandalgoUnitID = "sandalgoUnitID";
e.triggeralgoUnitID = "triggeralgoUnitID";
e.open_target_score = "open_target_score";
e.long_term_color = "long_term_color";
e.clear_board = "clear_board";
e.huge_eliminate = "huge_eliminate";
e.chain_eliminate = "chain_eliminate";
e.roll_array = "roll_array";
e.damp_open = "damp_open";
e.cheat_close = "cheat_close";
e.blocksize = "blocksize";
e.peak_open = "peak_open";
e.sandcrushopen = "sandcrushopen";
e.sliencedownload = "sliencedownload";
e.clickdownload = "clickdownload";
e.box_drop_speed = "box_drop_speed";
e.sand_step_speed = "sand_step_speed";
e.sandcrsh_open_10000 = "sandcrsh_open_10000";
e.dead_line_Height = "dead_line_Height";
e.sand_stop_loader_status = "sand_stop_loader_status";
})(n.FeaturesEnum || (n.FeaturesEnum = {}));
cc._RF.pop();
}, {} ],
GMConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f6862bFsQhG4Z2D13gZdu9K", "GMConfig");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, r = n.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (a) throw a.error;
}
}
return i;
}, c = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.gmConfig = void 0;
var s = e("../../config/SandDefines"), l = e("../../module/gamePlan/LocalPlanConfig"), u = e("../../config/SandGameConfig"), d = e("../../data/SandLocalData"), p = e("../../mgr/EventMgr"), h = e("../../mgr/HSUIMgrAdapter"), f = e("../../mgr/SandAdManager"), g = e("../../sandLogic/SandMapHelper"), S = e("../../../../../resources/hsgame/ui/gm/GMControlConfig"), m = e("../SandMainUI"), y = e("./GMView"), _ = e("../../../../../resources/hsgame/hsgame"), v = e("../../config/SandUIConfig"), b = e("../../mgr/SandGameMgr"), C = e("../../sandLogic/SandBlockPoolUtils"), A = e("../../sandLogic/SandLogicSimulate"), w = e("../../../../../resources/hsgame/ui/gm/GMControlFactory"), E = e("../../flow/SandFlowManager");
n.gmConfig = {
tabs: [ {
title: "沙子",
controls: [ {
type: S.HSGMControlType.Input,
label: "下落速度(1帧x格):",
placeholder: "",
defaultValue: function() {
return d.SandLocalData.boxDropSpeed;
},
onChange: function(e) {
d.SandLocalData.boxDropSpeed = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "滚动速度(1帧x格):",
placeholder: "",
defaultValue: function() {
return d.SandLocalData.sandStepSpeed;
},
onChange: function(e) {
d.SandLocalData.sandStepSpeed = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "拖动倍率:",
placeholder: "",
defaultValue: function() {
return d.SandLocalData.dragScalar;
},
onChange: function(e) {
d.SandLocalData.dragScalar = parseInt(e);
}
}, {
type: S.HSGMControlType.Toggle,
label: "是否启用GM修改颜色",
defaultValue: function() {
return d.SandLocalData.isGMModifyColor;
},
onChange: function(e) {
d.SandLocalData.isGMModifyColor = e;
}
}, {
type: S.HSGMControlType.Dropdown,
label: "出块颜色:",
options: [ "绿", "蓝", "青", "橙", "紫", "红", "黄" ],
defaultValue: function() {
return [ "绿", "蓝", "青", "橙", "紫", "红", "黄" ][d.SandLocalData.genSandColor - 1];
},
onChange: function(e) {
d.SandLocalData.genSandColor = [ "绿", "蓝", "青", "橙", "紫", "红", "黄" ].indexOf(e) + 1;
}
}, {
type: S.HSGMControlType.Input,
label: "滚动高度:",
placeholder: "1,1",
defaultValue: function() {
return d.SandLocalData.rollHeightAry.join(",");
},
onChange: function(e) {
d.SandLocalData.rollHeightAry = e.split(",").map(Number);
}
}, {
type: S.HSGMControlType.Input,
label: "选择块池UnitID",
placeholder: "填数字",
defaultValue: function() {
return d.SandLocalData.blockUnitID;
},
onChange: function(e) {
d.SandLocalData.blockUnitID = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "选择颜色算法UnitID",
placeholder: "填数字",
defaultValue: function() {
return d.SandLocalData.colorAlgoUnitID;
},
onChange: function(e) {
d.SandLocalData.colorAlgoUnitID = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "选择触发算法UnitID",
placeholder: "填数字",
defaultValue: function() {
return d.SandLocalData.triggerAlgoAlgoUnitID;
},
onChange: function(e) {
d.SandLocalData.triggerAlgoAlgoUnitID = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "分数解锁颜色:",
placeholder: "必须填满3个数值, 用逗号隔开",
defaultValue: function() {
return d.SandLocalData.scoreUnlockColor.join(",");
},
onChange: function(e) {
var t = e.split(",").map(Number);
t && 4 === t.length || (t = [ 3e3, 5e3, 7e3, 4e4 ]);
d.SandLocalData.scoreUnlockColor = t;
}
}, {
type: S.HSGMControlType.Toggle,
label: "潮湿块是否影响滚动高度",
defaultValue: function() {
return d.SandLocalData.dampTileAffectRoll;
},
onChange: function(e) {
d.SandLocalData.dampTileAffectRoll = e;
}
}, {
type: S.HSGMControlType.Slider,
label: "潮湿块概率(0-100)",
minValue: 0,
maxValue: 100,
step: 5,
defaultValue: function() {
return d.SandLocalData.dampPercent;
},
onChange: function(e) {
d.SandLocalData.dampPercent = e;
}
}, {
type: S.HSGMControlType.Input,
label: "潮湿块数量范围:",
placeholder: "填两个数值, 用逗号隔开",
defaultValue: function() {
return d.SandLocalData.dampNumberAry.join(",");
},
onChange: function(e) {
var t = e.split(",").map(Number);
t && 2 == t.length || (t = [ 1, 5 ]);
d.SandLocalData.dampNumberAry = t;
}
}, {
type: S.HSGMControlType.Toggle,
label: "画一次（程序用）",
defaultValue: function() {
return !1;
},
onChange: function() {
p.EventMgr.emit(p.EventType.drawBoxSand);
p.EventMgr.emit(p.EventType.drawDragSand);
p.EventMgr.emit(p.EventType.drawMapSand);
}
}, {
type: S.HSGMControlType.Input,
label: "沙子特效延迟时间:",
placeholder: "填数字",
defaultValue: function() {
return d.SandLocalData.clearSandEffectDelayTime;
},
onChange: function(e) {
d.SandLocalData.clearSandEffectDelayTime = parseFloat(e);
}
}, {
type: S.HSGMControlType.Input,
label: "大消沙特效延迟时间:",
placeholder: "填数字",
defaultValue: function() {
return d.SandLocalData.clearSandEffectDelayTimeBig;
},
onChange: function(e) {
d.SandLocalData.clearSandEffectDelayTimeBig = parseFloat(e);
}
}, {
type: S.HSGMControlType.Toggle,
label: "颜色算法关闭防作弊",
defaultValue: function() {
return d.SandLocalData.closeCalCheat;
},
onChange: function(e) {
d.SandLocalData.closeCalCheat = e;
}
} ]
}, {
title: "全局",
controls: [ {
type: S.HSGMControlType.Toggle,
label: "是否显示帧率",
defaultValue: function() {
return !0;
},
onChange: function(e) {
cc.debug.setDisplayStats(e);
}
}, {
type: S.HSGMControlType.Input,
label: "时间缩放系数:",
placeholder: "输入浮点数(例如:1.0)",
defaultValue: function() {
return d.SandLocalData.timeScale;
},
onChange: function(e) {
var t = parseFloat(e);
if (!isNaN(t) && t > 0) {
d.SandLocalData.timeScale = t;
cc.director.getScheduler().setTimeScale(t);
h.HSUIMgrAdapter.showToast("设置时间缩放为: " + t);
d.SandLocalData.forceSave();
} else h.HSUIMgrAdapter.showToast("无效的时间缩放值，请输入大于0的数字");
}
}, {
type: S.HSGMControlType.Input,
label: "当前分数:",
placeholder: "请输入分数",
defaultValue: function() {
return d.SandLocalData.score;
},
onChange: function(e) {
d.SandLocalData.score = Number(e);
d.SandLocalData.score > d.SandLocalData.highScore && (d.SandLocalData.highScore = d.SandLocalData.score);
h.HSUIMgrAdapter.showToast("设置分数成功: " + e);
p.EventMgr.emit(p.EventType.updateScore, {
score: Number(e)
});
}
}, {
type: S.HSGMControlType.Dropdown,
label: "相邻判断:",
options: [ "4格", "8格" ],
defaultValue: function() {
return [ "4格", "8格" ][d.SandLocalData.boxNearType];
},
onChange: function(e) {
d.SandLocalData.boxNearType = "4格" === e ? s.eSand_BoxNearType.Four : s.eSand_BoxNearType.Eight;
}
}, {
type: S.HSGMControlType.Dropdown,
label: "方案号:",
options: [ "自研", "竞品" ],
defaultValue: function() {
return 10001001 === d.SandLocalData.getPlanId() ? "自研" : "竞品";
},
onChange: function(e) {
return o(void 0, void 0, void 0, function() {
var t;
return a(this, function(n) {
switch (n.label) {
case 0:
t = "自研" === e ? 10001001 : 10001002;
if (isNaN(t) || !l.LocalPlan[t]) return [ 3, 2 ];
d.SandLocalData.setPlanId(t);
return [ 4, _.hsgame.TimeUtils.wait(1.5) ];

case 1:
n.sent();
h.HSUIMgrAdapter.showToast("方案号已修改为: " + t);
l.LocalPlan[t];
cc.game.restart();
return [ 3, 3 ];

case 2:
h.HSUIMgrAdapter.showToast("无效的方案号: " + t);
console.error("无效的方案号:", t);
n.label = 3;

case 3:
return [ 2 ];
}
});
});
}
}, {
type: S.HSGMControlType.Input,
label: "盘面宽度:",
placeholder: "请输入盘面宽度",
defaultValue: function() {
return d.SandLocalData.GetData("boardwidth") || g.SandMapHelper.contentWidth;
},
onChange: function(e) {
g.SandMapHelper.contentWidth = parseInt(e);
d.SandLocalData.SetData("boardwidth", g.SandMapHelper.contentWidth);
cc.game.restart();
}
}, {
type: S.HSGMControlType.Input,
label: "每格颗粒数:",
placeholder: "请输入每格颗粒数",
defaultValue: function() {
return d.SandLocalData.blocksize;
},
onChange: function(e) {
d.SandLocalData.blocksize = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "死亡高度:",
placeholder: "请输入死亡宽度",
defaultValue: function() {
return d.SandLocalData.deadlineHeight;
},
onChange: function(e) {
d.SandLocalData.deadlineHeight = parseInt(e);
var t = h.HSUIMgrAdapter.get(v.SandUIConfig.mainUI);
t && t.node.getComponent(m.default).getView().setLineY();
}
}, {
type: S.HSGMControlType.Input,
label: "死亡警告距离:",
placeholder: "请输入警告距离",
defaultValue: function() {
return d.SandLocalData.deathWarningDistance;
},
onChange: function(e) {
d.SandLocalData.deathWarningDistance = parseInt(e);
}
}, {
type: S.HSGMControlType.Toggle,
label: "清空保存数据",
defaultValue: function() {
return d.SandLocalData.hasSavedGame;
},
onChange: function() {
d.SandLocalData.hasSavedGame = !1;
}
}, {
type: S.HSGMControlType.Toggle,
label: "加载远程配置",
defaultValue: function() {
return !1;
},
onChange: function() {
return o(void 0, void 0, void 0, function() {
var e, t, n, o, i, c, s, l, d, p;
return a(this, function(a) {
switch (a.label) {
case 0:
e = [ "blockattr", "sandalgo", "scorerate", "topsands", "triggeralgo" ];
t = function(e) {
return new Promise(function(t, n) {
cc.assetManager.assets.forEach(function(t, n) {
n.includes(e) && n.includes("192.168.0.162") && cc.assetManager.releaseAsset(t);
});
cc.assetManager.loadRemote("http://192.168.0.162/sand/" + e + ".json?v=" + Date.now(), function(e, o) {
e ? n(e) : t(o.json);
});
});
};
a.label = 1;

case 1:
a.trys.push([ 1, 8, 9, 10 ]);
n = r(e), o = n.next();
a.label = 2;

case 2:
if (o.done) return [ 3, 7 ];
i = o.value;
a.label = 3;

case 3:
a.trys.push([ 3, 5, , 6 ]);
return [ 4, t(i) ];

case 4:
c = a.sent();
"blockattr" === i ? u.SandGameConfig.setBlockAttr(c) : "sandalgo" === i ? u.SandGameConfig.setSandAlgo(c) : "scorerate" === i ? u.SandGameConfig.setScoreRate(c) : "topsands" === i ? u.SandGameConfig.setTopsands(c) : "triggeralgo" === i && u.SandGameConfig.setTriggerAlgo(c);
return [ 3, 6 ];

case 5:
s = a.sent();
console.error("加载配置 " + i + " 失败:", s.message, s.stack);
return [ 3, 7 ];

case 6:
o = n.next();
return [ 3, 2 ];

case 7:
return [ 3, 10 ];

case 8:
l = a.sent();
d = {
error: l
};
return [ 3, 10 ];

case 9:
try {
o && !o.done && (p = n.return) && p.call(n);
} finally {
if (d) throw d.error;
}
return [ 7 ];

case 10:
return [ 2 ];
}
});
});
}
}, {
type: S.HSGMControlType.Button,
label: "打印配置表",
onClick: function() {
u.SandGameConfig.logConfig();
}
}, {
type: S.HSGMControlType.Toggle,
label: "程序测试用",
defaultValue: function() {
return !0;
},
onChange: function() {}
}, {
type: S.HSGMControlType.Toggle,
label: "是否打印形状",
defaultValue: function() {
return d.SandLocalData.isLogShape;
},
onChange: function(e) {
d.SandLocalData.isLogShape = e;
}
}, {
label: "测试报错捕获",
type: S.HSGMControlType.Toggle,
defaultValue: function() {
return !1;
},
onChange: function() {}
}, {
type: S.HSGMControlType.Button,
label: "连消盘面",
onClick: function() {
b.SandGameMgr.getBoxLogic().setInitialBoard([ [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ], [ 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], [ 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ], [ 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ] ]);
var e = h.HSUIMgrAdapter.get(v.SandUIConfig.mainUI);
e && e.getView().drawMapSand();
}
} ]
}, {
title: "积分",
controls: [ {
type: S.HSGMControlType.Input,
label: "combo数:",
placeholder: "请输入combo数",
defaultValue: function() {
return d.SandLocalData.combolimit;
},
onChange: function(e) {
d.SandLocalData.combolimit = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "巨大消除数值:",
placeholder: "巨大消除数值",
defaultValue: function() {
return d.SandLocalData.HugeEliminationlimit;
},
onChange: function(e) {
d.SandLocalData.HugeEliminationlimit = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "每粒放置分值:",
placeholder: "请输入每粒放置分值",
defaultValue: function() {
return d.SandLocalData.sandPutScore;
},
onChange: function(e) {
d.SandLocalData.sandPutScore = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "每粒消除分值:",
placeholder: "请输入每粒消除分值",
defaultValue: function() {
return d.SandLocalData.sandEliminationScore;
},
onChange: function(e) {
d.SandLocalData.sandEliminationScore = parseInt(e);
}
}, {
type: S.HSGMControlType.Input,
label: "激励词播放延迟时间:",
placeholder: "延迟时间(巨大，combo/serial,base,allclear)",
defaultValue: function() {
return d.SandLocalData.motivationDelays;
},
onChange: function(e) {
d.SandLocalData.motivationDelays = e.split(",").map(parseFloat);
}
} ]
}, {
title: "广告",
controls: [ {
type: S.HSGMControlType.Input,
label: "局中广告间隔(秒)",
placeholder: "局中广告间隔(秒",
defaultValue: function() {
return f.SandAdManager.instance.getInGameAdIntervalSeconds();
},
onChange: function(e) {
f.SandAdManager.instance.setInGameAdIntervalSeconds(parseFloat(e));
}
}, {
type: S.HSGMControlType.Input,
label: "moregame局中广告间隔(秒)",
placeholder: "moregame局中广告间隔(秒",
defaultValue: function() {
return d.SandLocalData.adInGameIntervalMoreGame;
},
onChange: function(e) {
d.SandLocalData.adInGameIntervalMoreGame = parseFloat(e);
}
}, {
type: S.HSGMControlType.Slider,
label: "结算广告间隔(局数)",
minValue: 1,
maxValue: 5,
step: 1,
defaultValue: function() {
return f.SandAdManager.instance.getSettleAdIntervalGames();
},
onChange: function(e) {
f.SandAdManager.instance.setSettleAdIntervalGames(e);
}
}, {
type: S.HSGMControlType.Toggle,
label: "重置广告计时",
defaultValue: function() {
return !1;
},
onChange: function() {
f.SandAdManager.instance.resetGamePlayTime();
}
}, {
type: S.HSGMControlType.Toggle,
label: "触发局中广告",
defaultValue: function() {
return !1;
},
onChange: function() {
f.SandAdManager.instance.triggerInGameAd();
}
}, {
type: S.HSGMControlType.Toggle,
label: "触发结算广告",
defaultValue: function() {
return !1;
},
onChange: function() {
f.SandAdManager.instance.triggerSettleAd();
}
}, {
type: S.HSGMControlType.Toggle,
label: "测试显示Banner",
defaultValue: function() {
return !1;
},
onChange: function() {
f.SandAdManager.instance.showBanner();
}
}, {
type: S.HSGMControlType.Toggle,
label: "隐藏Banner",
defaultValue: function() {
return !1;
},
onChange: function() {
f.SandAdManager.instance.hideBanner();
}
} ]
}, {
title: "Native接口",
controls: [ {
type: S.HSGMControlType.Button,
label: "测试震动1",
onClick: function() {
_.hsgame.Native.shakeOnce(1, 10);
h.HSUIMgrAdapter.showToast("震动测试完成");
}
}, {
type: S.HSGMControlType.Button,
label: "测试震动2",
onClick: function() {
_.hsgame.Native.shakeOnce(2, 10);
h.HSUIMgrAdapter.showToast("震动测试完成");
}
}, {
type: S.HSGMControlType.Button,
label: "测试震动3",
onClick: function() {
_.hsgame.Native.shakeOnce(3, 10);
h.HSUIMgrAdapter.showToast("震动测试完成");
}
}, {
type: S.HSGMControlType.Button,
label: "测试震动4",
onClick: function() {
_.hsgame.Native.shakeOnce(4, 10);
h.HSUIMgrAdapter.showToast("震动测试完成");
}
}, {
type: S.HSGMControlType.Button,
label: "测试震动5",
onClick: function() {
_.hsgame.Native.shakeOnce(5, 10);
h.HSUIMgrAdapter.showToast("震动测试完成");
}
}, {
type: S.HSGMControlType.Button,
label: "获取设备信息",
onClick: function() {
_.hsgame.App.updateDeviceInfo();
}
} ]
}, {
title: "decompress",
controls: [],
onTabClick: function() {
_.hsgame.ResourceUtils.runScene("dcmain", "dcmain");
}
}, {
title: "close",
controls: [],
onTabClick: function() {
var e = h.HSUIMgrAdapter.get(v.SandUIConfig.gmUI);
if (null == e ? void 0 : e.node) {
var t = e.node.getComponent(y.default);
t.tabView.node.active = !1;
t.gmBtn.node.active = !0;
}
}
}, {
title: "方案设置",
controls: [ {
type: S.HSGMControlType.Input,
label: "当前planId",
placeholder: "输入新的planId",
defaultValue: function() {
return d.SandLocalData.getPlanId().toString();
},
onChange: function(e) {
var t = parseInt(e);
isNaN(t) || d.SandLocalData.setPlanId(t);
}
}, {
type: S.HSGMControlType.Button,
label: "重启游戏",
onClick: function() {
d.SandLocalData.immediatelyCache();
h.HSUIMgrAdapter.showToast("正在重启游戏...");
var e = cc.director.getScene();
e && cc.director.getScheduler().schedule(function() {
if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_IOS) {
cc.game.end();
cc.director.loadScene(cc.director.getScene().name);
} else cc.game.restart(); else cc.sys.isBrowser && window.location.reload();
}, e, .5, 0, 0, !1);
}
} ]
}, {
title: "程序调试用",
controls: [ {
type: S.HSGMControlType.Button,
label: "画出块render",
onClick: function() {
p.EventMgr.emit(p.EventType.drawShapeOption);
}
}, {
type: S.HSGMControlType.Button,
label: "打印底部是否有块",
onClick: function() {
h.HSUIMgrAdapter.showToast("底部是否有块:" + !C.SandBlockPoolUtils.ins.isAllBoxDataNull());
}
}, {
type: S.HSGMControlType.Button,
label: "重置底部方块",
onClick: function() {
p.EventMgr.emit(p.EventType.resetBox);
}
}, {
type: S.HSGMControlType.Button,
label: "模拟盘面是否超时",
onClick: function() {
h.HSUIMgrAdapter.showToast("是否超时:" + A.SandLogicSimulate.isOverTime());
}
}, {
type: S.HSGMControlType.Button,
label: "设置按钮是否可交互",
onClick: function() {
var e = E.SandFlowManager.getInstance().isFirstTimeUser();
h.HSUIMgrAdapter.showToast("第一次:" + e + " 正在灰" + window._sandMainUI.deathGrayRender.isPlaying() + " 标记" + window._sandMainUI.isExitBtnClicking);
}
} ]
}, {
title: "日志查看",
controls: [ {
type: S.HSGMControlType.Button,
label: "刷新日志",
onClick: function(e) {
var t = e.parent;
if (t) {
var n = t.getChildByName("logDisplayContainer");
n && M(n);
}
h.HSUIMgrAdapter.showToast("日志已刷新");
}
}, {
type: S.HSGMControlType.Button,
label: "清空日志",
onClick: function(e) {
D.instance.clearLogs();
var t = e.parent;
if (t) {
var n = t.getChildByName("logDisplayContainer");
n && M(n);
}
h.HSUIMgrAdapter.showToast("日志已清空");
}
} ],
onTabClick: function(e, t) {
var n = h.HSUIMgrAdapter.get(v.SandUIConfig.gmUI);
if (null == n ? void 0 : n.node) {
var o = n.node.getComponent(y.default), a = (o.tabView.node, o.tabView.contentContainer);
if (a) {
var r = new cc.Node("LogDisplayContainer");
r.setContentSize(800, 300);
r.setPosition(50, -50);
var i = r.addComponent(cc.Sprite), c = w.default.createSolidColorTexture(40, 40, 40, 255), s = new cc.SpriteFrame(c);
i.spriteFrame = s;
M(r);
a.addChild(r);
}
}
setTimeout(function() {
t.parent;
}, 100);
}
} ],
defaultIndex: 0
};
var D = function() {
function e() {
this._logs = [];
this._cachedLogs = [];
this._maxLogs = 100;
this._maxCachedLogs = 1e3;
this._logNode = null;
this._debugMode = !1;
}
Object.defineProperty(e, "instance", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.setLogNode = function(e) {
this._logNode = e;
this.updateLogDisplay();
};
e.prototype.addLog = function(e) {
var t = "[" + new Date().toLocaleTimeString() + "] " + e;
this._cachedLogs.push(t);
this._cachedLogs.length > this._maxCachedLogs && this._cachedLogs.shift();
if (this._debugMode || this._logs.length < this._maxLogs) {
this._logs.push(t);
this._debugMode && this._logs.length > this._maxLogs && this._logs.shift();
}
this.updateLogDisplay();
};
e.prototype.clearLogs = function() {
this._logs = [];
this._cachedLogs = [];
this.updateLogDisplay();
};
e.prototype.setDebugMode = function(e) {
this._debugMode = e;
if (e) {
this._logs = c(this._cachedLogs);
this._logs.length > this._maxLogs && (this._logs = this._logs.slice(-this._maxLogs));
} else {
var t = Math.min(20, this._maxLogs / 5);
this._logs = this._logs.slice(-t);
}
this.updateLogDisplay();
};
e.prototype.getDebugMode = function() {
return this._debugMode;
};
e.prototype.getLogs = function() {
return this._logs.join("\n");
};
e.prototype.getCachedLogsCount = function() {
return this._cachedLogs.length;
};
e.prototype.getDisplayLogsCount = function() {
return this._logs.length;
};
e.prototype.getRecentLogs = function(e) {
void 0 === e && (e = 10);
return (this._cachedLogs.length > 0 ? this._cachedLogs : this._logs).slice(-e);
};
e.prototype.getAllLogs = function() {
return this._cachedLogs.length > 0 ? this._cachedLogs : this._logs;
};
e.prototype.updateLogDisplay = function() {
if (this._logNode && this._logNode.textLabel) {
this._logNode.textLabel.string = this.getLogs();
var e = this._logNode.getComponentInChildren(cc.ScrollView);
e && e.scrollToBottom(.1);
}
};
return e;
}();
function M(e) {
e.removeAllChildren();
var t = D.instance.getAllLogs(), n = c(t).reverse();
e.width = 800;
if (0 !== n.length) {
var o = e.height / 2 - 20;
n.forEach(function(t, n) {
var a = new cc.Node("LogLine_" + n), r = a.addComponent(cc.Label);
r.string = t;
r.fontSize = 22;
r.lineHeight = 22;
r.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
r.verticalAlign = cc.Label.VerticalAlign.TOP;
r.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
r.enableWrapText = !0;
a.setContentSize(600, 0);
a.setAnchorPoint(0, 1);
cc.director.getScheduler().schedule(function() {
var e = r.node.height;
a.setContentSize(600, e);
}, a, 0, 0, 0, !1);
a.setPosition(-e.width / 2 + 20, o);
a.color = cc.Color.YELLOW;
e.addChild(a);
var i = 22 * Math.ceil(t.length / (600 / 22 * 2));
o -= i + 10;
});
} else {
var a = new cc.Node("EmptyLabel"), r = a.addComponent(cc.Label);
r.string = "暂无日志记录";
r.fontSize = 16;
r.node.color = cc.Color.GRAY;
a.setPosition(0, 0);
e.addChild(a);
}
}
window.GM_LOG = function(e) {
D.instance.addLog(e);
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../../../../resources/hsgame/ui/gm/GMControlConfig": void 0,
"../../../../../resources/hsgame/ui/gm/GMControlFactory": void 0,
"../../config/SandDefines": "SandDefines",
"../../config/SandGameConfig": "SandGameConfig",
"../../config/SandUIConfig": "SandUIConfig",
"../../data/SandLocalData": "SandLocalData",
"../../flow/SandFlowManager": "SandFlowManager",
"../../mgr/EventMgr": "EventMgr",
"../../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../../mgr/SandAdManager": "SandAdManager",
"../../mgr/SandGameMgr": "SandGameMgr",
"../../module/gamePlan/LocalPlanConfig": "LocalPlanConfig",
"../../sandLogic/SandBlockPoolUtils": "SandBlockPoolUtils",
"../../sandLogic/SandLogicSimulate": "SandLogicSimulate",
"../../sandLogic/SandMapHelper": "SandMapHelper",
"../SandMainUI": "SandMainUI",
"./GMView": "GMView"
} ],
GMView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d68b5y40cJPX6RNR9zwMO5e", "GMView");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../../../../resources/hsgame/ui/gm/TabView"), c = e("../../../../../resources/hsgame/ui/HSUIBase"), s = e("./GMConfig"), l = cc._decorator, u = l.ccclass, d = l.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gmBtn = null;
t._dragging = !1;
t._offsetPos = cc.v2(0, 0);
t._screenRect = null;
t.gmVisible = !1;
t.tabView = null;
return t;
}
t.prototype.onLoad = function() {
var e = new cc.Node("TabView");
e.setContentSize(700, 1062);
this.node.addChild(e);
this.tabView = e.addComponent(i.default);
this.tabView.node.active = !1;
this.tabView.node.scale = 1.3;
this.tabView.initWithConfig(s.gmConfig);
this._screenRect = new cc.Rect(0, 0, cc.winSize.width, cc.winSize.height);
this.gmBtn.node.on(cc.Node.EventType.TOUCH_START, this.onDragStart, this);
this.gmBtn.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDragMove, this);
this.gmBtn.node.on(cc.Node.EventType.TOUCH_END, this.onDragEnd, this);
this.gmBtn.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onDragEnd, this);
};
t.prototype.onDragStart = function(e) {
this._dragging = !0;
var t = e.getLocation();
this._offsetPos = this.gmBtn.node.convertToNodeSpaceAR(t);
};
t.prototype.onDragMove = function(e) {
if (this._dragging) {
var t = e.getLocation(), n = this.node.convertToNodeSpaceAR(t).sub(this._offsetPos), o = this.gmBtn.node.getContentSize(), a = this.node.getContentSize(), r = -a.width / 2 + o.width / 2, i = a.width / 2 - o.width / 2, c = -a.height / 2 + o.height / 2, s = a.height / 2 - o.height / 2;
n.x = cc.misc.clampf(n.x, r, i);
n.y = cc.misc.clampf(n.y, c, s);
this.gmBtn.node.position = cc.v3(n.x, n.y, 0);
}
};
t.prototype.onDragEnd = function() {
this._dragging = !1;
};
t.prototype.onGMClick = function() {
this.tabView.node.active = !0;
this.tabView.switchTab(0);
this.gmBtn.node.active = !1;
};
r([ d(cc.Button) ], t.prototype, "gmBtn", void 0);
return r([ u ], t);
}(c.default);
n.default = p;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/ui/HSUIBase": void 0,
"../../../../../resources/hsgame/ui/gm/TabView": void 0,
"./GMConfig": "GMConfig"
} ],
GameOverState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b4974+tsRFKUakGEGUJr/sV", "GameOverState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameOverState = void 0;
var r = e("../../UI/DeathWarningEffect"), i = e("../GameStatistics"), c = e("../statemachine/State"), s = e("../GameStateEnum"), l = e("../../data/SandGameController"), u = e("../SandAdManager"), d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {
var e = this.machine.getOwner();
e._over = !0;
i.GameStatistics.instance.setDeadType(1);
i.GameStatistics.instance.endGame();
r.DeathWarningEffect.instance.checkWarning(0);
u.SandAdManager.instance.resetGamePlayTime();
e.saveGameState();
l.SandGameController.hasReviveCount() ? this.machine.changeState(s.GameState.REVIVE_PROCESS) : this.machine.changeState(s.GameState.DEATH_ANIMATION);
};
return t;
}(c.State);
n.GameOverState = d;
cc._RF.pop();
}, {
"../../UI/DeathWarningEffect": "DeathWarningEffect",
"../../data/SandGameController": "SandGameController",
"../GameStateEnum": "GameStateEnum",
"../GameStatistics": "GameStatistics",
"../SandAdManager": "SandAdManager",
"../statemachine/State": "State"
} ],
GameResultState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "df619/WIxBJ0b0ZCi3wiF1g", "GameResultState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../statemachine/State"), i = e("../GameStateEnum"), c = e("../../data/SandLocalData"), s = e("../HSUIMgrAdapter"), l = e("../../config/SandUIConfig"), u = e("../SandAdManager"), d = e("../../../../../resources/hsgame/hsApp"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {
var e = this;
c.SandLocalData.isLastGameOver = !0;
this.owner.saveGameState();
c.SandLocalData.forceSave();
if (u.SandAdManager.instance.shouldShowSettleAd("gameover")) {
this.machine.setData("adFromScene", "gameover");
this.machine.setData("adCallback", function() {
e.showGameOverUI();
});
this.machine.changeState(i.GameState.AD_PLAYING);
} else this.showGameOverUI();
};
t.prototype.showGameOverUI = function() {
c.SandLocalData.hasTriggeredHighScore && d.hsApp.isBlockBlastGame() ? s.HSUIMgrAdapter.show(l.SandUIConfig.overBestUI) : s.HSUIMgrAdapter.show(l.SandUIConfig.overUI);
};
return t;
}(r.State);
n.default = p;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsApp": void 0,
"../../config/SandUIConfig": "SandUIConfig",
"../../data/SandLocalData": "SandLocalData",
"../GameStateEnum": "GameStateEnum",
"../HSUIMgrAdapter": "HSUIMgrAdapter",
"../SandAdManager": "SandAdManager",
"../statemachine/State": "State"
} ],
GameStateEnum: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c2ac4hmWa1CU5jaSULn7Pio", "GameStateEnum");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameState = void 0;
(function(e) {
e.IDLE = "idle";
e.INIT = "init";
e.RUNNING = "running";
e.PAUSED = "paused";
e.GAME_OVER = "gameover";
e.DEATH_ANIMATION = "deathAnimation";
e.REVIVE = "revive";
e.REVIVE_PROCESS = "reviveProcess";
e.AD_PLAYING = "adPlaying";
e.GAME_RESULT = "gameResult";
})(n.GameState || (n.GameState = {}));
cc._RF.pop();
}, {} ],
GameStatistics: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d72fcTx8UtBsptQX98aKdSj", "GameStatistics");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameStatistics = void 0;
var o = e("../data/SandGameController"), a = e("../data/SandLocalData"), r = function() {
function e() {
this._totalPauseTime = 0;
this._deadType = 1;
this._maxCleanArea = 0;
}
Object.defineProperty(e, "instance", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.startGame = function() {
a.SandLocalData.gameData.gameStartTime = Date.now();
a.SandLocalData.gameData.realBeginTime = Date.now();
a.SandLocalData.gameData.gameStartTime;
};
e.prototype.endGame = function() {
a.SandLocalData.gameData.pauseStartTime && (this._totalPauseTime += Date.now() - a.SandLocalData.gameData.pauseStartTime);
Date.now(), this._totalPauseTime;
};
e.prototype.pauseGame = function() {
a.SandLocalData.gameData.pauseStartTime = Date.now();
a.SandLocalData.gameData.pauseStartTime;
};
e.prototype.setDeadType = function(e) {
this._deadType = e;
};
e.prototype.resumeGame = function() {
if (a.SandLocalData.gameData.pauseStartTime) {
var e = Date.now() - a.SandLocalData.gameData.pauseStartTime;
this._totalPauseTime += e;
delete a.SandLocalData.gameData.pauseStartTime;
this._totalPauseTime;
}
};
e.prototype.recordCleanArea = function(e) {
if (e > this._maxCleanArea) {
this._maxCleanArea = e;
this._maxCleanArea;
}
this._maxCleanArea;
};
e.prototype.recordClearAll = function() {
++a.SandLocalData.gameData.cleanAllCount;
a.SandLocalData.gameData.cleanAllCount;
};
e.prototype.recordRecStrategy = function(e) {
a.SandLocalData.gameData.recStrategy = e;
};
e.prototype.recordRecStrategyFact = function(e) {
a.SandLocalData.gameData.recStrategyFact = e;
};
e.prototype.getGameTime = function() {
if (!a.SandLocalData.gameData.gameStartTime) return 0;
var e = Date.now(), t = this._totalPauseTime;
a.SandLocalData.gameData.pauseStartTime && (t += Date.now() - a.SandLocalData.gameData.pauseStartTime);
var n = a.SandLocalData.gameData.offlineTime, o = a.SandLocalData.gameData.gameStartTime;
return Math.floor((e - o - t - n) / 1e3);
};
e.prototype.getRealTime = function() {
return a.SandLocalData.gameData.realBeginTime ? Math.floor((Date.now() - a.SandLocalData.gameData.realBeginTime) / 1e3) : 0;
};
e.prototype.getAllStats = function() {
var e;
return {
gameTime: this.getRealTime(),
realTime: this.getGameTime(),
maxCombo: a.SandLocalData.maxCombo,
currentCombo: o.SandGameController.getComboCount(),
comboCount: a.SandLocalData.comboCount,
maxCleanArea: this._maxCleanArea,
clearAllCount: a.SandLocalData.gameData.cleanAllCount,
recStrategy: a.SandLocalData.gameData.recStrategy,
recStrategyFact: a.SandLocalData.gameData.recStrategyFact,
activeWaynum: "0",
newWaynum: (null === (e = a.SandLocalData.getPlanId()) || void 0 === e ? void 0 : e.toString()) || "0",
deadType: this._deadType
};
};
e._instance = null;
return e;
}();
n.GameStatistics = r;
cc._RF.pop();
}, {
"../data/SandGameController": "SandGameController",
"../data/SandLocalData": "SandLocalData"
} ],
HSUIMgrAdapter: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f54d8LlgPtDRKWndsomgPWk", "HSUIMgrAdapter");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, r = n.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (a) throw a.error;
}
}
return i;
}, i = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HSUIMgrAdapter = void 0;
var c = e("../../../../resources/hsgame/hsgame"), s = e("../utils/SandSoundUtils"), l = e("../utils/SandUtils");
n.HSUIMgrAdapter = {
_toastNode: null,
init: function() {
var e = cc.director.getScene(), t = null == e ? void 0 : e.getChildByName("Canvas");
this._toastNode = null == t ? void 0 : t.getChildByName("toastNode");
c.hsgame.UIManager.ins;
},
destroy: function() {
c.hsgame.UIManager.ins.destroy();
},
show: function(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
return o(this, void 0, void 0, function() {
var n, o;
return a(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 2, , 3 ]);
return [ 4, c.hsgame.UIManager.ins.open(e, t) ];

case 1:
n = a.sent();
console.log.apply(console, i([ "show ui -- > " + e.cnName ], t));
return [ 2, n ];

case 2:
o = a.sent();
console.error("Failed to show UI:", e.cnName, o);
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
},
hide: function(e) {
e.cnName;
this.close(e);
},
close: function(e) {
c.hsgame.UIManager.ins.close(e);
},
get: function(e) {
return c.hsgame.UIManager.ins.getUI(e.prefab);
},
bindButton: function(e, t) {
if (cc.isValid(e)) {
e.getComponent(cc.Button) || e.addComponent(cc.Button);
var n = e.getComponent(cc.Button);
if (n.transition !== cc.Button.Transition.SPRITE) {
n.transition = cc.Button.Transition.COLOR;
n.duration = .1;
n.normalColor = cc.color(255, 255, 255, 255);
n.hoverColor = cc.color(255, 255, 255, 255);
n.pressedColor = cc.color(211, 211, 211, 255);
n.disabledColor = cc.Color.WHITE;
}
e.off("click");
e.on("click", function(n) {
var o = Date.now();
if (!(o - (e.click_time || 0) < 500)) {
l.SandUtils.shake();
e.click_time = o;
s.SandSoundUtils.playEffect(s.SAND_SOUND_EFFECT.CLICK);
null == t || t(n);
}
});
}
},
bindToggle: function(e, t) {
if (cc.isValid(e)) {
e.getComponent(cc.Toggle) || e.addComponent(cc.Toggle);
var n = e.getComponent(cc.Toggle);
n.transition = cc.Toggle.Transition.COLOR;
n.duration = .1;
n.normalColor = cc.color(255, 255, 255, 255);
n.hoverColor = cc.color(255, 255, 255, 255);
n.pressedColor = cc.color(211, 211, 211, 255);
n.disabledColor = cc.Color.WHITE;
e.off("toggle");
e.on("toggle", function(n) {
var o = Date.now();
e.click_time;
e.click_time = o;
s.SandSoundUtils.playEffect(s.SAND_SOUND_EFFECT.CLICK);
l.SandUtils.shake();
null == t || t(n);
});
}
},
showToast: function(e) {
if (this._toastNode && cc.isValid(this._toastNode)) {
this._toastNode.active = !0;
var t = this._toastNode.getComponent("toastNode");
t && t.show && t.show(e);
}
}
};
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../utils/SandSoundUtils": "SandSoundUtils",
"../utils/SandUtils": "SandUtils"
} ],
IFlow: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "14ff4ZdRcBILp/DQZI1ajMG", "IFlow");
Object.defineProperty(n, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
IdleState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "060e4X/aDBNHaqolmv+udW8", "IdleState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {};
return t;
}(e("../statemachine/State").State);
n.default = r;
cc._RF.pop();
}, {
"../statemachine/State": "State"
} ],
InitState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "290b02EawhHkJ0tJufkJrRg", "InitState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.InitState = void 0;
var r = e("../statemachine/State"), i = e("../../sandLogic/SandLogic"), c = e("../../sandLogic/SandLogicSimulate"), s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {
this.owner._over = !1;
this.owner._boxLogic = new i.SandLogic(!1);
c.SandLogicSimulate.init();
this.owner.registerEventHandlers();
this.owner.initManagers();
};
return t;
}(r.State);
n.InitState = s;
cc._RF.pop();
}, {
"../../sandLogic/SandLogic": "SandLogic",
"../../sandLogic/SandLogicSimulate": "SandLogicSimulate",
"../statemachine/State": "State"
} ],
InitialBoard: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a23a9yZ/BZEQKpoo5rkUCFr", "InitialBoard");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.InitialBoard = void 0;
n.InitialBoard = [ [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 7, 7, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ] ];
cc._RF.pop();
}, {} ],
LocalPlanConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a5e020QW0FAtaZVpDdV1Sm8", "LocalPlanConfig");
var o = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, r = n.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (a) throw a.error;
}
}
return i;
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LOCAL_NEW_PLANS = n.getFilteredPlans = n.PLAN_ANDROID = n.PLAN_IOS = n.ID_ANDROID_BASE = n.ID_IOS_BASE = n.LocalPlan = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../config/SandDefines"), c = e("../../utils/SandUtils");
n.LocalPlan = {
10001001: {
scorerateUnitID: 2,
sandalgoUnitID: 1,
triggeralgoUnitID: 1,
long_term_color: [ 3e3, 1e4, 2e4, 4e4 ],
peak_open: !0,
dead_line_Height: 83,
clear_board: !0,
huge_eliminate: 800,
chain_eliminate: !0
},
10001002: {
scorerateUnitID: 3,
sandalgoUnitID: 2,
triggeralgoUnitID: 1,
long_term_color: [ 5e4, 1e5, 25e4, 5e5 ],
peak_open: !1,
dead_line_Height: 85,
clear_board: !0,
huge_eliminate: 800,
chain_eliminate: !0
},
20001001: {
scorerateUnitID: 2,
sandalgoUnitID: 1,
triggeralgoUnitID: 1,
long_term_color: [ 3e3, 1e4, 2e4, 4e4 ],
peak_open: !0,
dead_line_Height: 83,
clear_board: !0,
huge_eliminate: 800,
chain_eliminate: !0
},
20001002: {
scorerateUnitID: 3,
sandalgoUnitID: 2,
triggeralgoUnitID: 1,
long_term_color: [ 5e4, 1e5, 25e4, 5e5 ],
peak_open: !1,
dead_line_Height: 85,
clear_board: !0,
huge_eliminate: 800,
chain_eliminate: !0
}
};
n.ID_IOS_BASE = 10001002;
n.ID_ANDROID_BASE = 20001002;
n.PLAN_IOS = [ 10001001, 10001002 ];
n.PLAN_ANDROID = [ 20001001, 20001002 ];
function s(e, t) {
void 0 === t && (t = {});
if (e) for (var o in e) n.LocalPlan[o] = r.hsgame.ObjectUtils.mergeObjects(t, e[o]);
}
var l = n.LocalPlan[n.ID_IOS_BASE], u = n.LocalPlan[n.ID_ANDROID_BASE];
s({
10002001: {
ad_close_first_install_n_seconds: 300,
ad_close_drag_no_splash: !0
},
10002002: {
ad_close_first_install_n_seconds: 300,
ad_close_drag_no_splash: !0
},
10002003: {
ad_close_first_install_n_seconds: 300,
ad_close_drag_no_splash: !0
},
10002004: {
sandalgoUnitID: 5,
triggeralgoUnitID: 2
},
10002005: {
sand_feat_skin: i.SandSkinEnum.pixel
},
10002006: {
sand_feat_skin: i.SandSkinEnum.nonPixel
},
10002007: {
sand_feat_skin: i.SandSkinEnum.neon
},
10002008: {
sand_feat_skin: i.SandSkinEnum.wood2
},
10002009: {
ad_close_first_install_300: !0
},
10002010: {
ad_close_drag_no_splash: !0
},
10002011: {
ad_interval_ingame: 300
}
}, l);
s({
20002001: {
ad_close_first_install_n_seconds: 300,
ad_close_drag_no_splash: !0
},
20002002: {
ad_close_first_install_n_seconds: 300,
ad_close_drag_no_splash: !0
},
20002003: {
ad_close_first_install_n_seconds: 300,
ad_close_drag_no_splash: !0
},
20002004: {
sandalgoUnitID: 5,
triggeralgoUnitID: 2
},
20002005: {
sand_feat_skin: i.SandSkinEnum.pixel
},
20002006: {
sand_feat_skin: i.SandSkinEnum.nonPixel
},
20002007: {
sand_feat_skin: i.SandSkinEnum.neon
},
20002008: {
sand_feat_skin: i.SandSkinEnum.wood2
},
20002009: {
ad_close_first_install_300: !0
},
20002010: {
ad_close_drag_no_splash: !0
},
20002011: {
ad_interval_ingame: 300
}
}, u);
var d = [];
n.LOCAL_NEW_PLANS = d;
cc.sys.os === cc.sys.OS_IOS ? d.push.apply(d, a([ 10002001, 10002002, 10002003, 10002004, 10002005, 10002006, 10002007, 10002008, 10002009, 10002010, 10002011 ])) : d.push.apply(d, a([ 20002001, 20002002, 20002003, 20002004, 20002005, 20002006, 20002007, 20002008, 20002009, 20002010, 20002011 ]));
n.getFilteredPlans = function() {
var e = d;
cc.sys.os === cc.sys.OS_IOS && c.SandUtils.inAppleTime() && (e = e.filter(function(e) {
return !n.LocalPlan[e].sand_feat_skin;
}));
return e;
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/SandDefines": "SandDefines",
"../../utils/SandUtils": "SandUtils"
} ],
MotivationalWordsMap: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e8149Zt299KJqpymZRL04yd", "MotivationalWordsMap");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BlockColorMap = n.MotivationalWordsMap = void 0;
n.MotivationalWordsMap = {
1: [ "Good", "Well Done", "Great", "Excellent" ],
2: [ "Amazing", "Incredible", "Awesome" ],
3: [ "Legendary" ]
};
n.BlockColorMap = {
0: cc.color(255, 255, 255),
1: cc.color(255, 182, 193),
2: cc.color(0, 255, 255),
3: cc.color(138, 43, 226),
4: cc.color(0, 0, 255)
};
cc._RF.pop();
}, {} ],
MotivationalWordsMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "65c34lXAd1CLL5eDKxtkCLl", "MotivationalWordsMgr");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MotivationalWordsMgr = n.MotivationalType = n.MotivationalLevel = void 0;
var i, c, s = e("../../../../resources/hsgame/hsgame"), l = e("../config/FeaturesEnum"), u = e("../config/SandUIConfig"), d = e("../data/SandLocalData"), p = e("../mgr/EventMgr"), h = e("../mgr/HSUIMgrAdapter"), f = e("../sandLogic/SandMapHelper"), g = e("../UI/Component/ChildrenMap"), S = e("../UI/Component/TNFLabel"), m = e("../UI/SandMainUI"), y = e("../utils/SandSoundUtils"), _ = e("../utils/SandUtils");
(function(e) {
e[e.NONE = 0] = "NONE";
e[e.GOOD = 1] = "GOOD";
e[e.GREAT = 2] = "GREAT";
e[e.AMAZING = 3] = "AMAZING";
e[e.EXCELLENT = 4] = "EXCELLENT";
e[e.UNBELIEVABLE = 5] = "UNBELIEVABLE";
})(i = n.MotivationalLevel || (n.MotivationalLevel = {}));
(function(e) {
e.BASIC = "basic";
e.COMBO = "combo";
e.HUGE_BLAST = "huge_blast";
e.SERIAL_BLAST = "serial_blast";
e.ALL_CLEAR = "all_clear";
e.NEW_HIGH_SCORE = "new_high_score";
})(c = n.MotivationalType || (n.MotivationalType = {}));
var v = [ {
groupId: "huge",
types: [ c.HUGE_BLAST ],
duration: 300
}, {
groupId: "combo_serial",
types: [ c.COMBO, c.SERIAL_BLAST ],
duration: 400
}, {
groupId: "basic",
types: [ c.BASIC ],
duration: 500
}, {
groupId: "clear",
types: [ c.ALL_CLEAR ],
duration: 1200
}, {
groupId: "newscore",
types: [ c.NEW_HIGH_SCORE ],
duration: 3e3
} ], b = function() {
function e() {
this._currentLevel = i.NONE;
this._comboCount = 0;
this._chainCount = 0;
this._offsetY = 0;
this.playGroupConfigs = new Map();
this.animationQueues = new Map();
this.isPlaying = !1;
this.typeToGroupMap = new Map();
}
e.prototype.init = function() {
this.initPlayGroups(v);
v.forEach(function(e, t) {
d.SandLocalData.motivationDelays[t] && (e.duration = 1e3 * d.SandLocalData.motivationDelays[t]);
});
};
e.prototype.initPlayGroups = function(e) {
var t = this;
this.playGroupConfigs.clear();
this.typeToGroupMap.clear();
this.animationQueues.clear();
e.forEach(function(e) {
t.playGroupConfigs.set(e.groupId, e);
e.types.forEach(function(n) {
t.typeToGroupMap.set(n, e.groupId);
});
});
};
e.prototype.getGroupIdForType = function(e) {
return this.typeToGroupMap.get(e) || "default";
};
e.prototype.calcSandTopy = function(e) {
var t = 0;
e.forEach(function(e) {
t = Math.max(t, e.x);
});
return t;
};
e.prototype.onPlacementSand = function(e) {
this.showHightScoreWord(e);
this.tryStartPlayback();
};
e.prototype.onEliminateSand = function(e) {
var t = (null == e ? void 0 : e.comboCount) || 0, n = (null == e ? void 0 : e.chainCount) || 0;
this._offsetY = this.calcSandTopy(null == e ? void 0 : e.eliminatedPositions);
this._chainCount = e.chainCount;
n > 0 && (this._currentLevel += 1);
if (t > 0) {
this._currentLevel += t;
this._comboCount = t;
} else {
this._currentLevel = i.NONE;
this._comboCount = 0;
}
this._currentLevel = Math.min(this._currentLevel, i.UNBELIEVABLE);
e.isHuge && this.showExtraMotivationalWord(c.HUGE_BLAST);
e.chainCount > 0 && this.showExtraMotivationalWord(c.SERIAL_BLAST);
if (this._comboCount > 0) {
var o = {
level: i.NONE,
type: c.COMBO,
comboCount: this._comboCount,
chainCount: this._chainCount
};
this.displayMotivationalWord(o);
}
this.tryStartPlayback();
};
e.prototype.showLastMotivation = function(e) {
var t = this._currentLevel;
e.isClear && (t = i.UNBELIEVABLE);
this.showBasicMotivationalWord(t);
this._currentLevel = i.NONE;
e.isClear && this.showExtraMotivationalWord(c.ALL_CLEAR);
this.showHightScoreWord(e);
this.tryStartPlayback();
};
e.prototype.showHightScoreWord = function(e) {
if (e.isNewHighScore) {
var t = {
level: i.NONE,
type: c.NEW_HIGH_SCORE,
chainCount: this._chainCount
};
this.displayMotivationalWord(t);
e.isNewHighScore = !1;
}
};
e.prototype.showBasicMotivationalWord = function(e) {
if (e !== i.NONE) {
var t = {
level: e,
type: c.BASIC,
chainCount: this._chainCount
};
this.displayMotivationalWord(t);
} else p.EventMgr.emit(p.EventType.updateScore, {
score: d.SandLocalData.score
});
};
e.prototype.showExtraMotivationalWord = function(e) {
var t = {
level: i.NONE,
type: e,
chainCount: this._chainCount
};
this.displayMotivationalWord(t);
};
e.prototype.displayMotivationalWord = function(e) {
JSON.stringify(e);
var t = e.groupId || this.getGroupIdForType(e.type);
e.groupId = t;
this.animationQueues.get(e.chainCount) || this.animationQueues.set(e.chainCount, []);
var n = this.animationQueues.get(e.chainCount), o = n.find(function(e) {
return e.config.groupId === t;
});
if (!o) {
var a = this.playGroupConfigs.get(t);
if (!a) return;
o = {
config: a,
words: []
};
n.push(o);
}
o.words.push(e);
};
e.prototype.tryStartPlayback = function() {
if (!this.isPlaying) {
var e = this.getNextPlayableGroup();
e && this.startGroupPlayback(e);
}
};
e.prototype.getNextPlayableGroup = function() {
var e = null;
this.animationQueues.forEach(function(t) {
var n, o;
try {
for (var a = r(t), i = a.next(); !i.done; i = a.next()) {
var c = i.value;
!e && c.words.length > 0 && (e = c).config.groupId;
}
} catch (e) {
n = {
error: e
};
} finally {
try {
i && !i.done && (o = a.return) && o.call(a);
} finally {
if (n) throw n.error;
}
}
});
return e;
};
e.prototype.startGroupPlayback = function(e) {
var t = this;
if (e && 0 !== e.words.length) {
var n = e.config.groupId, o = e.config;
this.isPlaying = !0;
var a = e.words;
a.length;
if ("basic" === n) {
a.forEach(function(e, n) {
e.topy = Math.min(t._offsetY + 10 * n, 95);
});
p.EventMgr.emit(p.EventType.updateScore, {
score: d.SandLocalData.score
});
} else if ("clear" === n) {
a.forEach(function(e) {
e.topy = f.SandMapHelper.maxRow / 2 - 16;
_.SandUtils.isNeonSkin() && (e.topy = f.SandMapHelper.maxRow / 2 - 4);
});
y.SandSoundUtils.playEffect(y.SAND_SOUND_EFFECT.ALL_CLEAR);
} else "newscore" === n ? a.forEach(function(e) {
e.topy = 0;
}) : a.forEach(function(e, n) {
e.topy = Math.min(t._offsetY + 10 * n, 95);
});
var r = o.duration / 1e3;
cc.Canvas.instance.scheduleOnce(function() {
t.endGroupPlayback(e);
}, r);
this.playGroupQueue(e);
}
};
e.prototype.playGroupQueue = function(e) {
var t = this, n = e.words, o = e.config.groupId, a = 0, r = n.length, i = function() {
++a >= r && t.endGroupPlayback(e);
};
try {
n.forEach(function(e) {
t.playSpineAnimation(e, i);
});
} catch (e) {
console.error("[MotivationalWordsMgr] 组 " + o + "播放出错:", e);
}
};
e.prototype.endGroupPlayback = function(e) {
var t = this, n = (e.config.groupId, e.words);
if (this.isPlaying) {
if (n && n.length > 0) {
n.forEach(function(e) {
t.hideSpineNode(e);
});
var o = n.length;
e.words.splice(0, o);
e.words.length;
}
this.isPlaying = !1;
this.tryStartPlayback();
}
};
e.prototype.playSpineAnimation = function(e, t) {
var n = this;
this.getSpineComponent(e).then(function(o) {
n.handleSpineAnimation(e, o, t);
}).catch(function() {
t && t();
});
};
e.prototype.handleSpineAnimation = function(e, t, n) {
var o = this, a = new Date();
if (t && cc.isValid(t.node)) {
var r = 0;
e.topy > 0 && (r = this.convertSandY(e.topy));
t.node.y = r;
e.type == c.COMBO && this.showComboCountAni(t, "comboNum", e.comboCount);
var i = this.getAnimationName(e);
if (i) {
t.node.active = !0;
this.playMotivationalSound(e);
t.setCompleteListener(function() {
new Date().getTime(), a.getTime();
t.node.active = !1;
t.setCompleteListener(null);
o.HideComboCountAni(t, "comboNum");
n && n();
});
t.setAnimation(0, i, !1);
} else {
e.type, e.level;
n && n();
}
} else n && n();
};
e.prototype.sleepSync = function(e) {
return o(this, void 0, Promise, function() {
return a(this, function() {
return [ 2, new Promise(function(t) {
cc.Canvas.instance.scheduleOnce(function() {
t();
}, e);
}) ];
});
});
};
e.prototype.convertSandY = function(e) {
var t = h.HSUIMgrAdapter.get(u.SandUIConfig.mainUI);
if (t) {
var n = t.node.getComponent(m.default).content.convertToWorldSpaceAR(cc.v2(0, e * f.SandMapHelper.height));
return t.node.convertToNodeSpaceAR(n).y + 60;
}
return 0;
};
e.prototype.showComboCountAni = function(e, t, n) {
var o, a, r = null === (o = e.node.getComponent(g.default).getNode(t)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
if (r) {
null === (a = e.node.getComponent(g.default).getComponent(S.default)) || void 0 === a || a.setCombo(n);
r.node.active = !0;
r.string = n.toString();
this.startLabelSync(e, r.node);
}
};
e.prototype.HideComboCountAni = function(e, t) {
var n, o, a = null === (o = null === (n = e.node.getComponent(g.default)) || void 0 === n ? void 0 : n.getNode(t)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
if (a) {
a.node.active = !1;
this.stopLabelSync(a.node);
}
};
e.prototype.getAnimationName = function(e) {
var t = "";
switch (e.type) {
case c.BASIC:
t = this.getBasicAnimationName(e.level);
break;

case c.COMBO:
t = this.getWoodSkinAnimationName();
break;

case c.HUGE_BLAST:
t = "6_hugeblast";
break;

case c.SERIAL_BLAST:
s.hsgame.Features.boolFeature(l.FeaturesEnum.chain_eliminate) && (t = "7_serialblast");
break;

case c.ALL_CLEAR:
t = "8_clear";
break;

case c.NEW_HIGH_SCORE:
t = "9_newScore";
}
return t;
};
e.prototype.getWoodSkinAnimationName = function() {
return this._comboCount >= 1 && this._comboCount <= 4 ? "combo_1_4" : this._comboCount >= 5 && this._comboCount <= 9 ? "combo_5_9" : this._comboCount >= 10 && this._comboCount <= 14 ? "combo_10_14" : this._comboCount >= 15 && this._comboCount <= 19 ? "combo_15_19" : "combo_20";
};
e.prototype.getBasicAnimationName = function(e) {
switch (e) {
case i.GOOD:
return "1_good";

case i.GREAT:
return "2_great";

case i.AMAZING:
return "3_amazing";

case i.EXCELLENT:
return "4_excellent";

case i.UNBELIEVABLE:
return "5_unbelievable";

default:
return "";
}
};
e.prototype.playMotivationalSound = function(e) {
if (e.type === c.BASIC) {
var t = "";
switch (e.level) {
case i.GOOD:
t = "good";
break;

case i.GREAT:
t = "great";
break;

case i.AMAZING:
t = "amazing";
break;

case i.EXCELLENT:
t = "excellent";
break;

case i.UNBELIEVABLE:
t = "unbelievable";
break;

default:
e.level;
return;
}
t && y.SandSoundUtils.playEffect(t);
}
};
e.prototype.getMotivationalSpineNode = function(e) {
return o(this, void 0, Promise, function() {
var t;
return a(this, function() {
return (t = h.HSUIMgrAdapter.get(u.SandUIConfig.mainUI).node) ? [ 2, t.getChildByName(e) ] : [ 2, null ];
});
});
};
e.prototype.getSpineComponent = function(e) {
return o(this, void 0, Promise, function() {
var t, n;
return a(this, function(o) {
switch (o.label) {
case 0:
t = "BaseMotivationalSpine";
e.type !== c.BASIC && e.type !== c.COMBO && e.type !== c.NEW_HIGH_SCORE || e.type === c.COMBO && (t = "combo_ani_wood");
return [ 4, this.getMotivationalSpineNode(t) ];

case 1:
if (n = o.sent()) {
n.active = !1;
n.scale = _.SandUtils.isWoodSkin2() ? .95 : 1;
return [ 2, n.getComponent(sp.Skeleton) ];
}
return [ 2, null ];
}
});
});
};
e.prototype.hideSpineNode = function(e) {
return o(this, void 0, Promise, function() {
var t;
return a(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.getSpineComponent(e) ];

case 1:
if (t = n.sent()) {
t.node.active = !1;
t.setCompleteListener(null);
e.type === c.COMBO && this.HideComboCountAni(t, "ATTACHED_NODE_TREE/ATTACHED_NODE_root/ATTACHED_NODE_jilici_1/ATTACHED_NODE_combo/ATTACHED_NODE_NODE_1");
}
e.type;
return [ 2 ];
}
});
});
};
e.prototype.reset = function() {
this._currentLevel = i.NONE;
this._comboCount = 0;
this._chainCount = 0;
this.animationQueues.clear();
this.isPlaying = !1;
};
e.prototype.startLabelSync = function(e, t) {
if (e && t) {
if (!t._originalScaleX) {
t._originalScaleX = t.scaleX;
t._originalScaleY = t.scaleY;
}
var n = t._originalScaleX, o = t._originalScaleY, a = function() {
if (cc.isValid(e, !0) && cc.isValid(t, !0) && e.node.active) {
var a = e.findBone("combo");
if (a) {
t.scaleX = n * Math.abs(a.scaleX);
t.scaleY = o * Math.abs(a.scaleY);
} else {
t.scaleX = n;
t.scaleY = o;
}
}
};
t._syncTransform = a;
var r = cc.director.getScene();
if (r) {
t._syncInterval && cc.director.getScheduler().unschedule(t._syncInterval, r);
var i = function() {
cc.isValid(t, !0) ? a() : cc.director.getScheduler().unschedule(i, r);
};
t._syncInterval = i;
cc.director.getScheduler().schedule(i, r, 0, cc.macro.REPEAT_FOREVER, 0, !1);
}
a();
}
};
e.prototype.stopLabelSync = function(e) {
if (e && cc.isValid(e, !0)) try {
var t = e._syncInterval;
if (t) {
var n = cc.director.getScene();
n && cc.director.getScheduler().unschedule(t, n);
delete e._syncInterval;
}
void 0 !== e._originalScaleX && (e.scaleX = e._originalScaleX);
void 0 !== e._originalScaleY && (e.scaleY = e._originalScaleY);
delete e._syncTransform;
} catch (e) {
console.error("[MotivationalWordsMgr] 停止Label同步时发生错误:", e);
}
};
e.prototype.destroy = function() {
this.isPlaying = !1;
this.animationQueues.clear();
this.playGroupConfigs.clear();
this.typeToGroupMap.clear();
this._currentLevel = i.NONE;
this._comboCount = 0;
this._chainCount = 0;
this._offsetY = 0;
var e = cc.director.getScene();
e && cc.director.getScheduler().unscheduleAllForTarget(e);
};
return e;
}();
n.MotivationalWordsMgr = new b();
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../UI/Component/ChildrenMap": "ChildrenMap",
"../UI/Component/TNFLabel": "TNFLabel",
"../UI/SandMainUI": "SandMainUI",
"../config/FeaturesEnum": "FeaturesEnum",
"../config/SandUIConfig": "SandUIConfig",
"../data/SandLocalData": "SandLocalData",
"../mgr/EventMgr": "EventMgr",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../sandLogic/SandMapHelper": "SandMapHelper",
"../utils/SandSoundUtils": "SandSoundUtils",
"../utils/SandUtils": "SandUtils"
} ],
OptionGraphics: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d7caekA6zdHA6z0q8Lcz6y7", "OptionGraphics");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../config/SandDefines"), c = e("../../data/SandLocalData"), s = e("./SandTileColorHelper"), l = cc._decorator, u = l.ccclass, d = l.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.graphicsArray = [];
t.cachedData = [ null, null, null ];
t.cachedPositions = [ cc.Vec3.ZERO, cc.Vec3.ZERO, cc.Vec3.ZERO ];
return t;
}
t.prototype.onLoad = function() {
this.createGraphicsArray();
this.clear();
};
t.prototype.createGraphicsArray = function() {
if (!(this.graphicsArray.length >= 3)) {
this.graphicsArray = [];
for (var e = 0; e < 3; e++) {
var t = new cc.Node("OptionGraphics_" + e), n = t.addComponent(cc.Graphics);
this.node.addChild(t);
this.graphicsArray.push(n);
}
}
};
t.prototype.draw = function(e, t) {
this.clear();
this.renderOptions(e, t);
};
t.prototype.updateSingleOption = function(e, t, n) {
if (!(e < 0 || e >= 3) && this.graphicsArray[e]) {
var o = this.graphicsArray[e], a = o.node;
if (t) {
var r = this.isDataChanged(e, t), i = !this.cachedPositions[e].equals(n);
if (r || i || !a.active) if (r || !i) {
o.clear();
a.position = n;
a.active = !0;
this.renderShadowLayer(o, t);
this.renderMainLayer(o, t);
this.cachedData[e] = this.cloneData(t);
this.cachedPositions[e] = n.clone();
} else {
a.position = n;
this.cachedPositions[e] = n.clone();
a.active = !0;
}
} else {
a.active = !1;
this.cachedData[e] = null;
}
}
};
t.prototype.renderOptions = function(e, t) {
if (!(this.graphicsArray.length < 3)) for (var n = 0; n < Math.min(e.length, 3); n++) {
var o = e[n], a = this.graphicsArray[n];
if (a) if (o) {
t && t[n] && (a.node.position = t[n]);
a.node.active = !0;
this.renderShadowLayer(a, o);
this.renderMainLayer(a, o);
} else a.node.active = !1;
}
};
t.prototype.renderShadowLayer = function(e, t) {
for (var n = cc.color(35, 15, 26, 102), o = 0; o < t.length; o++) for (var a = 0; a < t[o].length; a++) {
var r = t[o][a];
if (r) {
e.fillColor = n;
e.rect(r.x + 4, r.y - 7, i.SIZE_SAND * i.optionBlockScale, i.SIZE_SAND * i.optionBlockScale);
e.fill();
}
}
};
t.prototype.renderMainLayer = function(e, t) {
for (var n = 0; n < t.length; n++) for (var o = 0; o < t[n].length; o++) {
var a = t[n][o];
a && this.fillRect(e, a.x, a.y, i.SIZE_SAND * i.optionBlockScale, a.color, a.isDamp, a.dampColor);
}
};
t.prototype.fillRect = function(e, t, n, o, a, r, l) {
a -= 1;
if (c.SandLocalData.sandTileColorType === i.SandTileColorType.two) {
var u = (h = s.SandTileColorHelper.getColor(r, l))[0][a], d = h[1][a];
e.fillColor = u;
e.rect(t, n, o, o);
e.fill();
var p = .1 * o;
e.fillColor = d;
e.rect(t + p, n + p, o - 2 * p, o - 2 * p);
e.fill();
} else if (c.SandLocalData.sandTileColorType === i.SandTileColorType.three) {
u = (h = s.SandTileColorHelper.getColor(r, l))[0][a];
var h, f = h[1][a];
d = h[2][a];
e.fillColor = u;
e.rect(t, n, o, o);
e.fill();
var g = .1 * o;
e.fillColor = f;
e.rect(t + g, n + 2 * g, o - 3 * g, o - 3 * g);
e.fill();
var S = .1 * o;
e.fillColor = d;
e.rect(t + S, n + 6 * S, o - 7 * S, o - 7 * S);
e.fill();
}
};
t.prototype.isDataChanged = function(e, t) {
var n = this.cachedData[e];
if (!n) return !0;
if (n.length !== t.length) return !0;
for (var o = 0; o < t.length; o++) {
if (n[o].length !== t[o].length) return !0;
for (var a = 0; a < t[o].length; a++) {
var r = n[o][a], i = t[o][a];
if (r || i) {
if (!r || !i) return !0;
if (r.x !== i.x || r.y !== i.y || r.color !== i.color || r.isDamp !== i.isDamp) return !0;
}
}
}
return !1;
};
t.prototype.cloneData = function(e) {
return e.map(function(e) {
return e.map(function(e) {
return e ? {
x: e.x,
y: e.y,
color: e.color,
isDamp: e.isDamp,
row: e.row,
col: e.col
} : null;
});
});
};
t.prototype.clear = function() {
this.graphicsArray.forEach(function(e) {
if (e) {
e.clear();
e.node.active = !1;
}
});
this.cachedData = [ null, null, null ];
this.cachedPositions = [ cc.Vec3.ZERO, cc.Vec3.ZERO, cc.Vec3.ZERO ];
};
r([ d([ cc.Graphics ]) ], t.prototype, "graphicsArray", void 0);
return r([ u ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../config/SandDefines": "SandDefines",
"../../data/SandLocalData": "SandLocalData",
"./SandTileColorHelper": "SandTileColorHelper"
} ],
PausedState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b273bForthHDryXPN66LKKA", "PausedState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PausedState = void 0;
var r = e("../statemachine/State"), i = e("../GameStatistics"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {
i.GameStatistics.instance.pauseGame();
};
t.prototype.onExit = function() {
i.GameStatistics.instance.resumeGame();
};
return t;
}(r.State);
n.PausedState = c;
cc._RF.pop();
}, {
"../GameStatistics": "GameStatistics",
"../statemachine/State": "State"
} ],
ReviveProcessState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0122dopYZBMap4KoG2jDtpO", "ReviveProcessState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReviveProcessState = void 0;
var r = e("../statemachine/State"), i = e("../GameStateEnum"), c = e("../../data/SandGameController"), s = e("../SandAdManager"), l = e("../HSUIMgrAdapter"), u = e("../../config/SandUIConfig"), d = e("../EventMgr"), p = e("../../utils/SandSoundUtils"), h = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hasProcessed = !1;
return t;
}
t.prototype.onEnter = function() {
if (c.SandGameController.hasReviveCount() && s.SandAdManager.instance.isRewardReady()) {
this.hasProcessed = !1;
l.HSUIMgrAdapter.show(u.SandUIConfig.reviveUI);
p.SandSoundUtils.playEffect(p.SAND_SOUND_EFFECT.CLOCK_POP);
d.EventMgr.on(d.EventType.reviveAccept, this.onReviveAccept, this);
d.EventMgr.on(d.EventType.reviveReject, this.onReviveReject, this);
} else this.machine.changeState(i.GameState.DEATH_ANIMATION);
};
t.prototype.onExit = function() {
d.EventMgr.off(d.EventType.reviveAccept, this.onReviveAccept, this);
d.EventMgr.off(d.EventType.reviveReject, this.onReviveReject, this);
};
t.prototype.onReviveAccept = function() {
if (!this.hasProcessed) {
this.hasProcessed = !0;
this.machine.changeState(i.GameState.REVIVE);
}
};
t.prototype.onReviveReject = function() {
if (!this.hasProcessed) {
this.hasProcessed = !0;
this.machine.changeState(i.GameState.DEATH_ANIMATION);
}
};
return t;
}(r.State);
n.ReviveProcessState = h;
cc._RF.pop();
}, {
"../../config/SandUIConfig": "SandUIConfig",
"../../data/SandGameController": "SandGameController",
"../../utils/SandSoundUtils": "SandSoundUtils",
"../EventMgr": "EventMgr",
"../GameStateEnum": "GameStateEnum",
"../HSUIMgrAdapter": "HSUIMgrAdapter",
"../SandAdManager": "SandAdManager",
"../statemachine/State": "State"
} ],
ReviveState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3260dNN43hGob4YuvTqlFs2", "ReviveState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReviveState = void 0;
var r = e("../statemachine/State"), i = e("../GameStateEnum"), c = e("../../data/SandLocalData"), s = e("../../data/SandGameController"), l = e("../../utils/SandSoundUtils"), u = e("../SandGameMgr"), d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {
s.SandGameController.consumeRevive();
this.owner.doRevive();
l.SandSoundUtils.playEffect(l.SAND_SOUND_EFFECT.REVIVE);
u.SandGameMgr.saveGameState(!0);
c.SandLocalData.forceSave();
this.machine.changeState(i.GameState.RUNNING);
};
return t;
}(r.State);
n.ReviveState = d;
cc._RF.pop();
}, {
"../../data/SandGameController": "SandGameController",
"../../data/SandLocalData": "SandLocalData",
"../../utils/SandSoundUtils": "SandSoundUtils",
"../GameStateEnum": "GameStateEnum",
"../SandGameMgr": "SandGameMgr",
"../statemachine/State": "State"
} ],
RewardProgressBar: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6d7a2Pp3txI66D2FxNW16hk", "RewardProgressBar");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../../data/SandLocalData"), c = e("../../../utils/SandUtils"), s = cc._decorator, l = s.ccclass, u = s.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.progressFill = null;
t.startScoreLabel = null;
t.targetScoreLabel = null;
t.edgeAnimation = null;
t.edgeEffect = null;
t.targetEffect = null;
t.currentScoreLabel = null;
t.canMove = !1;
t.curPercent = 0;
t.targetPercent = 0;
return t;
}
t.prototype.onLoad = function() {
this.targetEffect.node.active = !1;
this.edgeEffect.active = !1;
};
t.prototype.refresh = function(e, t, n) {
this.startScoreLabel.string = c.SandUtils.formatScore(e);
this.targetScoreLabel.string = c.SandUtils.formatScore(t);
this.currentScoreLabel.string = Math.floor(i.SandLocalData.score).toString();
this.updateProgress(n);
};
t.prototype.updateProgress = function(e) {
this.targetPercent = e;
if (this.curPercent < this.targetPercent) this.startDisplay(); else {
this.curPercent = this.targetPercent;
this.progressFill.width = this.progressFill.parent.width * this.curPercent;
}
};
t.prototype.startDisplay = function() {
this.canMove = !0;
this.edgeEffect.active = !0;
this.edgeAnimation.setAnimation(0, "init", !0);
};
t.prototype.stopDisplay = function() {
this.canMove = !1;
this.edgeEffect.active = !1;
};
t.prototype.update = function(e) {
if (this.canMove) {
if (this.curPercent < this.targetPercent) {
this.curPercent += .1 * e;
if (this.curPercent >= this.targetPercent) {
this.curPercent = this.targetPercent;
this.stopDisplay();
}
this.progressFill.width = this.progressFill.parent.width * this.curPercent;
}
this.edgeEffect.x = this.progressFill.width;
}
};
t.prototype.playGoalAnimation = function() {
var e = this;
cc.tween(this.targetScoreLabel.node).to(.1, {
scale: 1.2
}, {
easing: "easeOut"
}).to(.23, {
scale: 1
}, {
easing: "easeInOut"
}).start();
this.targetEffect.node.active = !0;
this.targetEffect.setAnimation(0, "in", !1);
this.targetEffect.setEndListener(function() {
e.targetEffect.node.active = !1;
});
};
r([ u(cc.Node) ], t.prototype, "progressFill", void 0);
r([ u(cc.Label) ], t.prototype, "startScoreLabel", void 0);
r([ u(cc.Label) ], t.prototype, "targetScoreLabel", void 0);
r([ u(sp.Skeleton) ], t.prototype, "edgeAnimation", void 0);
r([ u(cc.Node) ], t.prototype, "edgeEffect", void 0);
r([ u(sp.Skeleton) ], t.prototype, "targetEffect", void 0);
r([ u(cc.Label) ], t.prototype, "currentScoreLabel", void 0);
return r([ l ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../data/SandLocalData": "SandLocalData",
"../../../utils/SandUtils": "SandUtils"
} ],
RewordManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "07a13ImExRDpKemBp7wAMt6", "RewordManager");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../../../../../resources/hsgame/hsgame"), c = e("../../../config/FeaturesEnum"), s = e("../../../config/SandGameConfig"), l = e("../../../config/SandUIConfig"), u = e("../../../data/SandLocalData"), d = e("../../../mgr/HSUIMgrAdapter"), p = e("./RewardProgressBar"), h = cc._decorator, f = h.ccclass, g = h.property, S = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.progressBar = null;
t.lastTableId = -1;
return t;
}
t.prototype.getStageByScore = function(e, t) {
for (var n = Object.values(t).sort(function(e, t) {
return e.TargetScore - t.TargetScore;
}), o = null, a = null, r = 0; r < n.length; r++) {
var s = n[r];
if (s.UnitID === i.hsgame.Features.intFeature(c.FeaturesEnum.open_target_score)) {
if (!(e >= s.TargetScore)) {
a = s;
break;
}
o = s;
}
}
return {
current: o,
next: a
};
};
t.prototype.init = function() {
var e = u.SandLocalData.score, t = s.SandGameConfig.getTargetScore(), n = this.getStageByScore(e, t), o = n.current;
n.next;
this.lastTableId = (null == o ? void 0 : o.id) || -1;
};
t.prototype.refresh = function() {
var e = u.SandLocalData.score, t = s.SandGameConfig.getTargetScore(), n = this.getStageByScore(e, t), o = n.current, a = n.next, r = (null == o ? void 0 : o.TargetScore) || 0, i = (null == o ? void 0 : o.id) || -1;
if (0 !== ((null == a ? void 0 : a.TargetScore) || 0)) {
var c = Math.min((e - r) / (a.TargetScore - r), 1);
this.progressBar.refresh(r, a.TargetScore, c);
} else this.progressBar.refresh(r, 0, 1);
if (this.lastTableId !== i && o) {
this.progressBar.playGoalAnimation();
this.scheduleOnce(function() {
d.HSUIMgrAdapter.show(l.SandUIConfig.StageGoalPopup, o);
}, .5);
}
this.lastTableId = i;
};
r([ g(p.default) ], t.prototype, "progressBar", void 0);
return r([ f ], t);
}(cc.Component);
n.default = S;
cc._RF.pop();
}, {
"../../../../../../resources/hsgame/hsgame": void 0,
"../../../config/FeaturesEnum": "FeaturesEnum",
"../../../config/SandGameConfig": "SandGameConfig",
"../../../config/SandUIConfig": "SandUIConfig",
"../../../data/SandLocalData": "SandLocalData",
"../../../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"./RewardProgressBar": "RewardProgressBar"
} ],
RunningState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "624597N7tpIDahzL8yjjRKy", "RunningState");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.RunningState = void 0;
var r = e("../statemachine/State"), i = e("../SandAdManager"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnter = function() {
this.owner._over = !1;
this.owner._boxLogic.activate();
};
t.prototype.onUpdate = function(e) {
this.owner._boxLogic && this.owner._boxLogic.update();
this.owner._over || i.SandAdManager.instance.update(e);
};
t.prototype.onExit = function() {
this.owner.saveGameState();
this.owner._boxLogic.deactivate();
};
return t;
}(r.State);
n.RunningState = c;
cc._RF.pop();
}, {
"../SandAdManager": "SandAdManager",
"../statemachine/State": "State"
} ],
SandActionBackStrategy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1d686tub4tLhKrVzQ8h3v6d", "SandActionBackStrategy");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__assign || function() {
return (r = Object.assign || function(e) {
for (var t, n = 1, o = arguments.length; n < o; n++) {
t = arguments[n];
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
}
return e;
}).apply(this, arguments);
}, i = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionBackStrategy = void 0;
var s = e("../../config/SandDefines"), l = e("../base/SandAlgoAction"), u = e("../SandAlgoFactory"), d = e("../../mgr/GameStatistics"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return i(this, void 0, void 0, function() {
var t, n, o;
return c(this, function(a) {
switch (a.label) {
case 0:
t = {
algo: s.SandAlgoEnum.Random,
algoName: s.SandAlgoName.get(s.SandAlgoEnum.Random),
type: "back"
};
return [ 4, u.SandAlgoFactory.executeAlgo(s.SandAlgoEnum.Random, e) ];

case 1:
n = a.sent();
e.colors = n;
s.SandAlgoName.get(s.SandAlgoEnum.Random), e.colorsName;
o = r(r({}, t), {
result: n,
success: !0,
colors: e.colorsName
});
d.GameStatistics.instance.recordRecStrategyFact(o);
return [ 2, !0 ];
}
});
});
};
return t;
}(l.SandAlgoAction);
n.SandActionBackStrategy = p;
cc._RF.pop();
}, {
"../../config/SandDefines": "SandDefines",
"../../mgr/GameStatistics": "GameStatistics",
"../SandAlgoFactory": "SandAlgoFactory",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionChooseAlgoTrigger: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5ba04CArX9EW7jaGet24XLt", "SandActionChooseAlgoTrigger");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionChooseAlgoTrigger = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../config/SandGameConfig"), l = e("../../data/SandLocalData"), u = e("../../config/SandDefines"), d = e("../../../../../resources/hsgame/hsgame"), p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._startTime = -1;
t._intervalTime = -1;
return t;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a, r, c, p, h, f;
return i(this, function() {
this._context = e;
t = l.SandLocalData.triggerAlgoAlgoUnitID;
n = s.SandGameConfig.getTriggerAlgo();
o = [];
for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (r = n[a]).UnitID === t && this.checkTrigger(r.triggerList) && o.push(r);
if (0 === o.length) return [ 2, !1 ];
o.sort(function(e, t) {
return e.Priority - t.Priority;
});
c = o[0].Priority;
if (1 === (p = o.filter(function(e) {
return e.Priority === c;
})).length) {
h = p[0].TriggerAlgo;
f = u.SandConfigToAlgoEnum.get(h);
e.algo = f;
} else {
h = d.hsgame.MathUtils.randomListSeed(p).TriggerAlgo;
f = u.SandConfigToAlgoEnum.get(h);
e.algo = f;
}
e.algo, u.SandAlgoName.get(e.algo);
return [ 2, !0 ];
});
});
};
t.prototype.checkTrigger = function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
if (this.checkTriggerItem(n)) return !0;
}
return !1;
};
t.prototype.checkTriggerItem = function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
if (!this.checkTypeAndParam(n)) return !1;
}
return !0;
};
t.prototype.checkTypeAndParam = function(e) {
var t = this._context, n = e.type, o = e.param;
switch (n) {
case 1:
var a = parseInt(o[0]);
return t.cheatCount >= a;

case 2:
var r = parseInt(o[0]), i = parseInt(o[1]);
return t.score >= r && t.score <= i;

case 3:
var c = parseInt(o[0]), s = parseInt(o[1]);
return t.boardTileCount >= c && t.boardTileCount <= s;

case 4:
if (-1 === this._intervalTime) {
var l = parseInt(o[0]), u = parseInt(o[1]);
this._intervalTime = d.hsgame.MathUtils.randomFloat(l, u);
this._startTime = Date.now();
return !1;
}
var p = Date.now();
if (p - this._startTime > this._intervalTime) {
this._startTime = p;
l = parseInt(o[0]), u = parseInt(o[1]);
this._intervalTime = d.hsgame.MathUtils.randomFloat(l, u);
return !0;
}
return !1;

default:
return !1;
}
};
return t;
}(c.SandAlgoAction);
n.SandActionChooseAlgoTrigger = p;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/SandDefines": "SandDefines",
"../../config/SandGameConfig": "SandGameConfig",
"../../data/SandLocalData": "SandLocalData",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionChooseAlgo: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e7983Xc61lBZJup/iOPchLK", "SandActionChooseAlgo");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionChooseAlgo = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../config/SandGameConfig"), l = e("../../config/SandDefines"), u = e("../../data/SandLocalData"), d = e("../../../../../resources/hsgame/hsgame"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
return i(this, function() {
e.algo = this.getAlgoFromConfig(e);
e.algo, l.SandAlgoName.get(e.algo);
return [ 2, !0 ];
});
});
};
t.prototype.getAlgoFromConfig = function(e) {
var t = [], n = u.SandLocalData.colorAlgoUnitID, o = s.SandGameConfig.getSandAlgo();
for (var a in o) if (Object.prototype.hasOwnProperty.call(o, a)) {
var r = o[a];
r.UnitID === n && e.score >= r.ScoreBeg && (e.score < r.ScoreEnd || -1 === r.ScoreEnd) && e.roundCount >= r.RoundBeg && (e.roundCount <= r.RoundEnd || -1 === r.RoundEnd) && e.boardTileCount >= r.CubeNumBeg && (e.boardTileCount <= r.CubeNumEnd || -1 === r.CubeNumEnd) && t.push(r);
}
t.sort(function(e, t) {
return e.Priority - t.Priority;
});
var i = t[0];
i.ID, i.TypeChoose;
return 1 === i.TypeChoose ? this.getAlgoByType1(i) : this.getAlgoByType2(i, e);
};
t.prototype.getAlgoByType1 = function(e) {
var t = [], n = [];
l.SandConfigToAlgoEnum.forEach(function(o, a) {
if (e[a] > 0) {
t.push(o);
n.push(e[a]);
}
});
var o = this.randomWeightForQA(n);
return t[o];
};
t.prototype.getAlgoByType2 = function(e, t) {
if (e.ID === t.colorAlgoConfigID && t.colorAlgoConfigIndex < t.colorAlgoConfigAry.length - 1) {
t.colorAlgoConfigIndex++;
return t.colorAlgoConfigAry[t.colorAlgoConfigIndex].algo;
}
t.colorAlgoConfigID = e.ID;
t.colorAlgoConfigIndex = 0;
var n = [];
l.SandConfigToAlgoEnum.forEach(function(t, o) {
e[o] > 0 && n.push({
algo: t,
weight: e[o]
});
});
for (var o = new Map(), a = 0; a < n.length; a++) {
var r = n[a];
o.has(r.weight) ? o.get(r.weight).push(r.algo) : o.set(r.weight, [ r.algo ]);
}
var i = [];
o.forEach(function(e, t) {
i.push({
weight: t,
algo: d.hsgame.MathUtils.randomListSeed(e)
});
});
i.sort(function(e, t) {
return t.weight - e.weight;
});
t.colorAlgoConfigAry = i;
return i[0].algo;
};
t.prototype.randomWeightForQA = function(e) {
for (var t = e.reduce(function(e, t) {
return e + t;
}), n = Math.random() * t, o = 0, a = 0, r = e.length; a < r; a++) if (n < (o += e[a])) return a;
return 0;
};
return t;
}(c.SandAlgoAction);
n.SandActionChooseAlgo = p;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/SandDefines": "SandDefines",
"../../config/SandGameConfig": "SandGameConfig",
"../../data/SandLocalData": "SandLocalData",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionColorPool: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "98e63iThgRH7IsvskZSHNVW", "SandActionColorPool");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionColorPool = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../sandLogic/SandColorPoolUtils"), l = e("../../config/SandDefines"), u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o;
return i(this, function() {
t = s.SandColorPoolUtils.ins.getColorPool();
n = [];
for (o = 0; o < t.length; o++) n.push(l.emojiColors[t[o] - 1]);
n.join(" "), JSON.stringify(t);
e.colorPool = t;
return [ 2, !0 ];
});
});
};
return t;
}(c.SandAlgoAction);
n.SandActionColorPool = u;
cc._RF.pop();
}, {
"../../config/SandDefines": "SandDefines",
"../../sandLogic/SandColorPoolUtils": "SandColorPoolUtils",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionDamps: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "53d241iVkRGerd65wTMD3Zc", "SandActionDamps");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionDamps = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../data/SandLocalData"), l = e("../../../../../resources/hsgame/hsgame"), u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a;
return i(this, function() {
t = [];
for (n = 0; n < 3; n++) {
o = l.hsgame.MathUtils.randomSeed();
a = s.SandLocalData.dampPercent / 100;
o < a ? t.push(l.hsgame.MathUtils.randomInt(s.SandLocalData.dampNumberAry[0], s.SandLocalData.dampNumberAry[1])) : t.push(0);
}
e.damps = t;
JSON.stringify(e.damps);
return [ 2, !0 ];
});
});
};
return t;
}(c.SandAlgoAction);
n.SandActionDamps = u;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionDoubleColor: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dc135UOe09F27GK3QG4qDlB", "SandActionDoubleColor");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionDoubleColor = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../config/SandGameConfig"), l = e("../../../../../resources/hsgame/hsgame"), u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._excludeHandColor = [];
t._excludeTop1Color = [];
t._commonColor = [];
return t;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a, r, c, s;
return i(this, function() {
t = e.blocks;
n = e.colors;
o = e.colorPool.slice();
this.calExcludeColor(n, e.top1, o);
a = [ -1, -1, -1 ];
for (r = 0; r < 3; r++) {
c = t[r];
s = n[r];
a[r] = this.getDoubleColor(c, s, o);
}
e.doubleColors = a;
JSON.stringify(e.doubleColors);
return [ 2, !0 ];
});
});
};
t.prototype.calExcludeColor = function(e, t, n) {
var o = this;
this._excludeHandColor = n.filter(function(t) {
return !e.includes(t);
});
this._excludeTop1Color = [];
for (var a = 0; a < n.length; a++) {
var r = n[a];
t[r] || this._excludeTop1Color.push(r);
}
this._commonColor = this._excludeHandColor.filter(function(e) {
return o._excludeTop1Color.includes(e);
});
};
t.prototype.removeUsedColor = function(e) {
for (var t = 0; t < this._excludeHandColor.length; ++t) if (this._excludeHandColor[t] === e) {
this._excludeHandColor.splice(t, 1);
break;
}
for (t = 0; t < this._excludeTop1Color.length; ++t) if (this._excludeTop1Color[t] === e) {
this._excludeTop1Color.splice(t, 1);
break;
}
for (t = 0; t < this._commonColor.length; ++t) if (this._commonColor[t] === e) {
this._commonColor.splice(t, 1);
break;
}
};
t.prototype.getDoubleColor = function(e, t, n) {
for (var o = s.SandGameConfig.getBlockAttr()[e].shape, a = !1, r = 0; r < o.length; r++) {
for (var i = 0; i < o[r].length; i++) if (2 === o[r][i].color) {
a = !0;
break;
}
if (a) break;
}
return a ? this.getDoubleColorResult(t, n) : -1;
};
t.prototype.getDoubleColorResult = function(e, t) {
if (this._commonColor.length > 0) {
var n = l.hsgame.MathUtils.randomListSeed(this._commonColor);
this.removeUsedColor(n);
return n;
}
if (this._excludeHandColor.length > 0) {
n = l.hsgame.MathUtils.randomListSeed(this._excludeHandColor);
this.removeUsedColor(n);
return n;
}
if (this._excludeTop1Color.length > 0) {
for (var o = 0; o < this._excludeTop1Color.length; ++o) if ((n = this._excludeTop1Color[o]) !== e) {
this.removeUsedColor(n);
return n;
}
return this.getWithoutColor(e, t);
}
return this.getWithoutColor(e, t);
};
t.prototype.getWithoutColor = function(e, t) {
for (var n = [], o = 0; o < t.length; o++) t[o] !== e && n.push(t[o]);
return l.hsgame.MathUtils.randomListSeed(n);
};
return t;
}(c.SandAlgoAction);
n.SandActionDoubleColor = u;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/SandGameConfig": "SandGameConfig",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionFinal: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7ed74qC0lFDpIWjIuWkdBCB", "SandActionFinal");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionFinal = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../config/SandGameConfig"), l = e("../../sandLogic/SandMapHelper"), u = e("../../sandLogic/SandObjectPoolFactory"), d = e("../../../../../resources/hsgame/hsgame"), p = [ 1, 2, 3 ], h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a, r, c, s, l, u, d;
return i(this, function() {
t = e.damps;
n = e.blocks;
o = e.colors;
a = e.doubleColors;
r = [];
for (c = 0; c < 3; c++) {
s = n[c];
l = o[c];
u = t[c];
d = a[c];
r[c] = this.getOneBlock(s, l, u, d);
}
e.finalyBlocks = r;
Date.now(), e.timeStart;
return [ 2, !0 ];
});
});
};
t.prototype.getOneBlock = function(e, t, n, o) {
for (var a = s.SandGameConfig.getBlockAttr()[e].shape, r = [], i = [], c = a.length - 1; c >= 0; c--) for (var h = a[c], f = h[0].height, g = 0; g < f; ++g) {
for (var S = [], m = 0; m < h.length; ++m) for (var y = h[m].color, _ = h[m].width, v = 0; v < _; ++v) if (0 === y) S.push(null); else {
(C = u.SandObjectPoolFactory.ins.get()).color = 1 === y ? t : o;
S.push(C);
r.push(C);
}
i.push(S);
}
if (n > 0) {
var b = d.hsgame.MathUtils.shuffleAry(r, n);
for (c = 0; c < b.length; c++) {
var C;
(C = b[c]).isDamp = !0;
C.dampColor = d.hsgame.MathUtils.randomListSeed(p);
}
}
l.SandMapHelper.logShape(i);
return i;
};
return t;
}(c.SandAlgoAction);
n.SandActionFinal = h;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/SandGameConfig": "SandGameConfig",
"../../sandLogic/SandMapHelper": "SandMapHelper",
"../../sandLogic/SandObjectPoolFactory": "SandObjectPoolFactory",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionGMColor: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f56f2vSW8NBTZP2iqzAQPWG", "SandActionGMColor");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionGMColor = void 0;
var c = e("../../../../../resources/hsgame/hsgame"), s = e("../../data/SandLocalData"), l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o;
return i(this, function() {
if (s.SandLocalData.isGMModifyColor) {
t = Math.floor(c.hsgame.MathUtils.randomSeed() * s.SandLocalData.genSandColor);
n = Math.floor(c.hsgame.MathUtils.randomSeed() * s.SandLocalData.genSandColor);
o = Math.floor(c.hsgame.MathUtils.randomSeed() * s.SandLocalData.genSandColor);
e.colors = [ t + 1, n + 1, o + 1 ];
}
e.colors;
return [ 2, !0 ];
});
});
};
return t;
}(e("../base/SandAlgoAction").SandAlgoAction);
n.SandActionGMColor = l;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionGetBlock: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "591703dAahLWqHQt01zoSnw", "SandActionGetBlock");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionGetBlock = void 0;
var c = e("../base/SandAlgoAction"), s = e("../../config/SandGameConfig"), l = e("../../../../../resources/hsgame/hsgame"), u = e("../../config/SandDefines"), d = e("../../data/SandLocalData"), p = e("../../config/FeaturesEnum"), h = function(e) {
a(t, e);
function t(t) {
var n = e.call(this) || this;
n.isDoubleBlock = t;
return n;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a, r, c, h, f, g, S, m, y, _, v = this;
return i(this, function() {
t = this.isDoubleBlock ? u.DOUBLE_BLOCK_UNIT_ID : d.SandLocalData.blockUnitID;
n = e.score;
o = s.SandGameConfig.getScoreRate();
a = null;
for (r in o) if (Object.prototype.hasOwnProperty.call(o, r) && (g = o[r]).UnitID === t && g.ScoreBeg <= n && (-1 === g.ScoreEnd || g.ScoreEnd > n)) {
a = g.cubeData;
break;
}
c = e.peakCount;
h = this.getPeakData(e.boardTileCount, c);
f = [];
if (l.hsgame.Features.boolFeature(p.FeaturesEnum.peak_open)) for (_ = 0; _ < h.length; _++) {
g = h[_];
a.has(g.cubeNum) && f.push(g);
}
S = [];
m = function() {
var e = [];
if (f.length > 0) {
for (var t = [], n = 0; n < f.length; ++n) t.push(f[n].weight);
var o = l.hsgame.MathUtils.randomWeight(t), r = f[o].cubeNum;
e = e.concat(y.addCubeNum(r, a));
} else a.forEach(function(t, n) {
e = e.concat(v.addCubeNum(n, a));
});
S.push(y.getRandomBlock(e));
};
y = this;
for (_ = 0; _ < 3; _++) m();
t === u.DOUBLE_BLOCK_UNIT_ID ? e.doubleBlocks = S : e.blocks = S;
JSON.stringify(S);
return [ 2, !0 ];
});
});
};
t.prototype.getPeakData = function(e, t) {
var n = s.SandGameConfig.getTopsands(), o = [];
for (var a in n) if (Object.prototype.hasOwnProperty.call(n, a)) {
var r = n[a];
e >= r.min && (e <= r.max || -1 === r.max) && (t === r.topnum || -1 === r.topnum) && o.push(r);
}
o.sort(function(e, t) {
return -1 !== e.topnum && -1 === t.topnum ? -1 : -1 === e.topnum && -1 !== t.topnum ? 1 : e.priority - t.priority;
});
var i = o[0];
i.id;
var c = [];
i.one > 0 && c.push({
cubeNum: 1,
weight: i.one
});
i.two > 0 && c.push({
cubeNum: 2,
weight: i.two
});
i.three > 0 && c.push({
cubeNum: 3,
weight: i.three
});
i.four > 0 && c.push({
cubeNum: 4,
weight: i.four
});
i.five > 0 && c.push({
cubeNum: 5,
weight: i.five
});
i.six > 0 && c.push({
cubeNum: 6,
weight: i.six
});
i.more > 0 && c.push({
cubeNum: 9,
weight: i.six
});
return c;
};
t.prototype.addCubeNum = function(e, t) {
return t.get(e);
};
t.prototype.getRandomBlock = function(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(e[n].weight);
return e[l.hsgame.MathUtils.randomWeight(t)].cubeID;
};
return t;
}(c.SandAlgoAction);
n.SandActionGetBlock = h;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/FeaturesEnum": "FeaturesEnum",
"../../config/SandDefines": "SandDefines",
"../../config/SandGameConfig": "SandGameConfig",
"../../data/SandLocalData": "SandLocalData",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionInit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "67c4exNXeNGvpJHBElayB6n", "SandActionInit");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionInit = void 0;
var c = e("../../data/SandLocalData"), s = e("../../mgr/SandGameMgr"), l = e("../base/SandAlgoAction"), u = e("../../sandLogic/SandLogicHelper"), d = e("../../sandLogic/SandLogicSimulate"), p = e("../../data/SandGameController"), h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a;
return i(this, function(r) {
switch (r.label) {
case 0:
e.timeStart = Date.now();
d.SandLogicSimulate.syncData();
p.SandGameController.checkNewRoundCheat();
e.blocks = [];
e.doubleBlocks = [];
e.colors = [];
e.colorsName = [];
e.score = c.SandLocalData.score;
e.doubleColors = [ -1, -1, -1 ];
e.roundCount = s.SandGameMgr.getRound();
e.finalyBlocks = [];
return [ 4, u.SandLogicHelper.getTop1And2Colors() ];

case 1:
t = r.sent(), n = t.top1, o = t.top2, a = t.maps;
e.top1 = n;
e.top2 = o;
e.maps = a;
e.peakCount = u.SandLogicHelper.getPeakCount(e.maps);
e.boardTileCount = d.SandLogicSimulate.getMapCount();
e.boardTileCount < 0 && (e.boardTileCount = 0);
e.cheatCount = p.SandGameController.getCheatCount();
e.score;
e.roundCount;
e.boardTileCount;
JSON.stringify(n);
JSON.stringify(o);
e.peakCount;
e.cheatCount;
c.SandLocalData.sequenceColorPool;
return [ 2, !0 ];
}
});
});
};
return t;
}(l.SandAlgoAction);
n.SandActionInit = h;
cc._RF.pop();
}, {
"../../data/SandGameController": "SandGameController",
"../../data/SandLocalData": "SandLocalData",
"../../mgr/SandGameMgr": "SandGameMgr",
"../../sandLogic/SandLogicHelper": "SandLogicHelper",
"../../sandLogic/SandLogicSimulate": "SandLogicSimulate",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionMainStrategy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0e3ebOQ3gFBobgC02qIgisB", "SandActionMainStrategy");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__assign || function() {
return (r = Object.assign || function(e) {
for (var t, n = 1, o = arguments.length; n < o; n++) {
t = arguments[n];
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
}
return e;
}).apply(this, arguments);
}, i = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionMainStrategy = void 0;
var s = e("../../config/SandDefines"), l = e("../base/SandAlgoAction"), u = e("../SandAlgoFactory"), d = e("../../mgr/GameStatistics"), p = e("../../../../../resources/hsgame/hsgame"), h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return i(this, void 0, void 0, function() {
var t, n, o;
return c(this, function(a) {
switch (a.label) {
case 0:
s.SandAlgoName.get(e.algo);
t = {
algo: e.algo,
algoName: s.SandAlgoName.get(e.algo),
type: "main"
};
d.GameStatistics.instance.recordRecStrategy(t);
return [ 4, u.SandAlgoFactory.executeAlgo(e.algo, e) ];

case 1:
if (3 === (n = a.sent()).length) {
this.checkAllSameColor(n, e);
e.colors = n;
s.SandAlgoName.get(e.algo), e.colorsName;
o = r(r({}, t), {
result: n,
success: !0,
colors: e.colorsName
});
d.GameStatistics.instance.recordRecStrategyFact(o);
return [ 2, !0 ];
}
s.SandAlgoName.get(e.algo), e.colorsName;
return [ 2, !1 ];
}
});
});
};
t.prototype.checkAllSameColor = function(e, t) {
var n = t.colorPool.slice();
if (e[0] === e[1] && e[1] === e[2]) {
for (var o = [], a = 0; a < n.length; a++) n[a] !== e[0] && o.push(n[a]);
e[1] = p.hsgame.MathUtils.randomListSeed(o);
t.colorsName[1] = "兜底随机";
}
};
return t;
}(l.SandAlgoAction);
n.SandActionMainStrategy = h;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/SandDefines": "SandDefines",
"../../mgr/GameStatistics": "GameStatistics",
"../SandAlgoFactory": "SandAlgoFactory",
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandActionReturnTrue: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7503fW52OVN/o+u6RpcAccx", "SandActionReturnTrue");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandActionReturnTrue = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function() {
return r(this, void 0, void 0, function() {
return i(this, function() {
return [ 2, !0 ];
});
});
};
return t;
}(e("../base/SandAlgoAction").SandAlgoAction);
n.SandActionReturnTrue = c;
cc._RF.pop();
}, {
"../base/SandAlgoAction": "SandAlgoAction"
} ],
SandAdManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "11687vFe0NJEqA9h2Zp3674", "SandAdManager");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAdManager = void 0;
var r = e("../../../../resources/hsgame/hsApp"), i = e("../../../../resources/hsgame/hsgame"), c = e("../config/FeaturesEnum"), s = e("../config/SandUIConfig"), l = e("../data/SandLocalData"), u = e("../UI/SandMainUI"), d = e("./HSUIMgrAdapter"), p = e("./SandGameMgr"), h = function() {
function e() {
this.logPrefix = "[ad]";
this._isAdPlaying = !1;
this.adGamePlayTime = 0;
this.isFirstInstallDelayPassed = !1;
this.firstInstallCountdown = 0;
this.settleAdIntervalWithInGameAdSeconds = 0;
this.interReadyLimitTimer = 0;
this.init();
}
Object.defineProperty(e, "instance", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isAdPlaying", {
get: function() {
return this._isAdPlaying;
},
set: function(e) {
this._isAdPlaying = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.resetSettleAdIntervalWithInGameAdSeconds = function() {
this.settleAdIntervalWithInGameAdSeconds = this.getSettleAdIntervalWithInGameAdSeconds();
};
e.prototype.init = function() {
this.logPrefix;
var e = Date.now() - l.SandLocalData.firstInstallTime, t = 1e3 * i.hsgame.Features.intFeature(c.FeaturesEnum.ad_close_first_install_n_seconds);
if (e >= t) {
this.isFirstInstallDelayPassed = !0;
this.firstInstallCountdown = 0;
} else {
this.isFirstInstallDelayPassed = !1;
this.firstInstallCountdown = (t - e) / 1e3;
}
cc.director.getScheduler().enableForTarget(this);
var n = i.hsgame.App.get(i.hsgame.Common.DataKey.adTime);
if (null != n) {
this.adGamePlayTime = Math.min(n, this.getInGameAdIntervalSeconds() - 60);
i.hsgame.App.set(i.hsgame.Common.DataKey.adTime, void 0);
}
this.interReadyLimitTimer = 0;
};
e.prototype.requestAd = function() {
var t = this;
i.hsgame.Native.noticeLoad(0);
var n = cc.director.getScene();
n && cc.director.getScheduler().schedule(function() {
if (t && e._instance) {
t.logPrefix;
i.hsgame.Native.noticeLoad(2);
}
}, n, 2, 0, 0, !1);
};
e.prototype.destroy = function() {
this.logPrefix;
cc.director.getScheduler().unscheduleAllForTarget(this);
e._instance = null;
};
e.prototype.update = function(e) {
if (!this.isAdPlaying) {
var t = e * cc.director.getScheduler().getTimeScale();
this.adGamePlayTime += t;
this.settleAdIntervalWithInGameAdSeconds -= t;
if (this.interReadyLimitTimer > 0) {
this.interReadyLimitTimer -= t;
if (this.interReadyLimitTimer <= 0) {
this.interReadyLimitTimer = 0;
this.logPrefix;
}
}
if (i.hsgame.Features.intFeature(c.FeaturesEnum.ad_close_first_install_n_seconds) > 0 && !this.isFirstInstallDelayPassed && this.firstInstallCountdown > 0) {
this.firstInstallCountdown -= t;
if (this.firstInstallCountdown <= 0) {
this.isFirstInstallDelayPassed = !0;
this.firstInstallCountdown = 0;
this.logPrefix;
}
}
if (this.interReadyLimitTimer <= 0) {
this.interReadyLimitTimer = 3;
this.logPrefix;
if (this.shouldShowInGameAd()) {
this.logPrefix, this.getInGameAdIntervalSeconds();
this.doShowInGameAd();
}
}
}
};
e.prototype.doShowInGameAd = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function(t) {
switch (t.label) {
case 0:
if (i.hsgame.Features.boolFeature(c.FeaturesEnum.ad_close_before_tips) || !this.isInterReady()) return [ 3, 2 ];
e = cc.director.getScene();
return [ 4, new Promise(function(t) {
d.HSUIMgrAdapter.show(s.SandUIConfig.waitAdUI, t);
e ? cc.director.getScheduler().schedule(function() {
d.HSUIMgrAdapter.close(s.SandUIConfig.waitAdUI);
t(null);
}, e, 1, 0, 0, !1) : t(null);
}) ];

case 1:
t.sent();
if (!cc.isValid(e)) return [ 2 ];
t.label = 2;

case 2:
p.SandGameMgr.pauseBgm();
this.showInGameAd(function() {
p.SandGameMgr.playBgm();
}, !1);
return [ 2 ];
}
});
});
};
e.prototype.getGamePlayTime = function() {
return this.adGamePlayTime;
};
e.prototype.resetGamePlayTime = function() {
this.logPrefix, this.adGamePlayTime;
this.adGamePlayTime = 0;
};
e.prototype.canShowInterAd = function() {
if (!this.isFirstInstallDelayPassed) {
this.logPrefix, this.firstInstallCountdown;
return !1;
}
if (this.isAdPlaying) {
this.logPrefix;
return !1;
}
this.logPrefix, this.isFirstInstallDelayPassed, this.isAdPlaying;
return !0;
};
e.prototype.shouldShowInGameAd = function() {
var e;
if (this.adGamePlayTime < this.getInGameAdIntervalSeconds()) {
this.logPrefix, this.adGamePlayTime, this.getInGameAdIntervalSeconds();
return !1;
}
var t = d.HSUIMgrAdapter.get(s.SandUIConfig.mainUI);
if (t && (null === (e = t.node.getComponent(u.default).getView()) || void 0 === e ? void 0 : e.isDragging()) && !i.hsgame.Features.boolFeature(c.FeaturesEnum.ad_close_drag_no_splash)) {
this.logPrefix;
return !1;
}
var n = i.hsgame.Features.intFeature(c.FeaturesEnum.no_ad_ingame_in_first_n_games);
if (n > 0 && l.SandLocalData.playingCount <= n) {
this.logPrefix, l.SandLocalData.playingCount;
return !1;
}
if (!this.canShowInterAd()) return !1;
this.logPrefix, this.adGamePlayTime, this.getInGameAdIntervalSeconds(), l.SandLocalData.playingCount;
return !0;
};
e.prototype.showInGameAd = function(t, n) {
var o = this;
void 0 === n && (n = !1);
this.logPrefix, this.isAdPlaying;
this.isAdPlaying = !0;
var a = {
type: "sand_crush" === r.hsApp.RUNTIME_ENV ? "402" : "401",
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: "0"
},
param: "1006"
};
this.logPrefix, JSON.stringify(a);
i.hsgame.AdvUtils.showAdv(a, function(n) {
o.logPrefix;
var a = 1 === n;
o.isAdPlaying = !1;
if (a) {
o.logPrefix;
o.resetSettleAdIntervalWithInGameAdSeconds();
o.resetGamePlayTime();
} else {
o.logPrefix;
o.adGamePlayTime = o.getInGameAdIntervalSeconds() - 60;
o.adGamePlayTime = Math.max(o.adGamePlayTime, 0);
i.hsgame.TimeUtils.setTimeout(function() {
e.instance.requestAd();
}, o, 1);
}
l.SandLocalData.forceSave();
null == t || t(a);
i.hsgame.TimeUtils.setTimeout(function() {
o.showBanner();
}, o, 1);
}, this);
};
e.prototype.shouldShowSettleAd = function(e) {
if (!this.canShowInterAd()) return !1;
var t = i.hsgame.Features.intFeature(c.FeaturesEnum.no_ad_settle_in_first_n_games);
if (t > 0 && l.SandLocalData.playingCount <= t) return !1;
if ("gameover_replay" === e) return !1;
if (l.SandLocalData.playingCount % l.SandLocalData.adSettleInterval != 0) {
this.logPrefix, l.SandLocalData.adSettleInterval, l.SandLocalData.playingCount;
return !1;
}
if (this.settleAdIntervalWithInGameAdSeconds > 0) {
this.logPrefix, this.settleAdIntervalWithInGameAdSeconds;
return !1;
}
return !0;
};
e.prototype.getSettleAdIntervalWithInGameAdSeconds = function() {
var e = i.hsgame.Features.intFeature(c.FeaturesEnum.ad_interval_settle_with_ingame);
return 0 == e ? 90 : e;
};
e.prototype.showRewardVideo = function(e, t) {
var n = this;
if (!this.isAdPlaying && this.isRewardReady()) {
this.isAdPlaying = !0;
var o = {
type: (r.hsApp.RUNTIME_ENV, "500"),
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: ""
},
param: "1005"
};
i.hsgame.AdvUtils.showAdv(o, function(t) {
var o = 1 === t;
n.isAdPlaying = !1;
n.logPrefix;
e(o);
i.hsgame.TimeUtils.setTimeout(function() {
n.showBanner();
}, n, 1);
}, t || this);
} else {
this.logPrefix, this.isAdPlaying;
e(!1);
}
};
e.prototype.showSettleAd = function(e, t, n) {
var o = this;
void 0 === n && (n = !1);
if (n || !this.isAdPlaying && this.isInterReady()) {
this.isAdPlaying = !0;
var a = {
type: (r.hsApp.RUNTIME_ENV, "401"),
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: "0"
},
param: "1005"
};
i.hsgame.AdvUtils.showAdv(a, function(t) {
var n = 1 === t;
o.logPrefix;
o.isAdPlaying = !1;
null == e || e(n);
}, this);
} else {
this.logPrefix, this.isAdPlaying;
e(!1);
}
};
e.prototype.isInterReady = function() {
var e = "";
if (cc.sys.os === cc.sys.OS_ANDROID) {
e = "interAd";
"9" === i.hsgame.App.GameType && (e = "inter");
} else e = (cc.sys.os, cc.sys.OS_IOS, "inter");
var t = i.hsgame.Native.getAdReady(e);
this.logPrefix;
return t;
};
e.prototype.isRewardReady = function() {
var e = "";
if (cc.sys.os === cc.sys.OS_ANDROID) {
e = "rewardAd";
"9" === i.hsgame.App.GameType && (e = "reward");
} else e = (cc.sys.os, cc.sys.OS_IOS, "reward");
var t = i.hsgame.Native.getAdReady(e);
this.logPrefix;
return t;
};
e.prototype.showBanner = function() {
this.logPrefix;
i.hsgame.AdvUtils.showAdv({
type: "3",
size: {
x: "0",
y: "0",
w: "0",
h: "0",
device_h: "0"
},
param: "1005"
}, null, this);
};
e.prototype.hideBanner = function() {
this.logPrefix;
i.hsgame.Native.closeBanner();
};
e.prototype.getInGameAdIntervalSeconds = function() {
var e = i.hsgame.Features.intFeature(c.FeaturesEnum.ad_interval_ingame);
return 0 == e ? l.SandLocalData.adInGameInterval : e;
};
e.prototype.setInGameAdIntervalSeconds = function(e) {
l.SandLocalData.adInGameInterval;
l.SandLocalData.adInGameInterval = e;
this.logPrefix;
l.SandLocalData.forceSave();
};
e.prototype.getSettleAdIntervalGames = function() {
return l.SandLocalData.adSettleInterval;
};
e.prototype.setSettleAdIntervalGames = function(e) {
l.SandLocalData.adSettleInterval;
l.SandLocalData.adSettleInterval = Math.max(1, e);
this.logPrefix, l.SandLocalData.adSettleInterval;
l.SandLocalData.forceSave();
};
e.prototype.triggerInGameAd = function() {
var e = this;
this.logPrefix;
p.SandGameMgr.pauseBgm();
this.showInGameAd(function() {
p.SandGameMgr.playBgm();
e.logPrefix;
}, !0);
};
e.prototype.triggerSettleAd = function() {
var e = this;
this.logPrefix;
p.SandGameMgr.pauseBgm();
this.showSettleAd(function() {
p.SandGameMgr.playBgm();
e.logPrefix;
}, "gameover", !0);
};
e.prototype.isPlayingAd = function() {
return this.isAdPlaying;
};
e._instance = null;
return e;
}();
n.SandAdManager = h;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsApp": void 0,
"../../../../resources/hsgame/hsgame": void 0,
"../UI/SandMainUI": "SandMainUI",
"../config/FeaturesEnum": "FeaturesEnum",
"../config/SandUIConfig": "SandUIConfig",
"../data/SandLocalData": "SandLocalData",
"./HSUIMgrAdapter": "HSUIMgrAdapter",
"./SandGameMgr": "SandGameMgr"
} ],
SandAlgo1001: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e74eb3ic1ZMN4OLP4k4VpIv", "SandAlgo1001");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1001 = void 0;
var r = e("../../../../../resources/hsgame/hsgame");
n.SandAlgo1001 = function(e) {
return o(this, void 0, void 0, function() {
var t;
return a(this, function() {
t = e.colorPool.slice();
-1 === e.singleColor && (e.singleColor = r.hsgame.MathUtils.randomListSeed(t));
e.colorsName = [ "纯色", "纯色", "纯色" ];
return [ 2, [ e.singleColor, e.singleColor, e.singleColor ] ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0
} ],
SandAlgo1002: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a98ec825kNI25dgMgJKZ2Rn", "SandAlgo1002");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1002 = void 0;
var r = e("../../../../../resources/hsgame/hsgame");
n.SandAlgo1002 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, i, c;
return a(this, function() {
t = e.colorPool.slice();
n = [];
for (c = 0; c < 3; c++) {
o = r.hsgame.MathUtils.randomListSeed(t);
n.push(o);
}
e.colorsName = [ "随机", "随机", "随机" ];
if (n[0] === n[1] && n[1] === n[2]) {
i = [];
for (c = 0; c < t.length; c++) t[c] !== n[0] && i.push(t[c]);
n[1] = r.hsgame.MathUtils.randomListSeed(i);
}
return [ 2, n ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0
} ],
SandAlgo1003: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9ba7bMk5nhOg5fuiTShlDlt", "SandAlgo1003");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1003 = void 0;
var r = e("./SandAlgoHelper"), i = e("../../../../../resources/hsgame/hsgame");
n.SandAlgo1003 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c, s, l;
return a(this, function() {
if (!r.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
if (e.colorPool.length === r.SandAlgoHelper.getColorCount(e.top1)) return [ 2, [] ];
t = [];
n = r.SandAlgoHelper.getColorPoolExcludeTop12(e.colorPool, e.top1, e.top2);
o = 3 - n.length;
if (n.length > 0) {
t = i.hsgame.MathUtils.shuffleAry(n, 3);
for (l = 0; l < n.length; l++) e.colorsName[l] = "前两层不存在";
}
if (o > 0) {
c = [];
for (s in e.top2) Object.prototype.hasOwnProperty.call(e.top2, s) && ("none" === s || e.top1[s] || c.push({
color: parseInt(s),
col: e.top2[s]
}));
c.sort(function(e, t) {
return e.col - t.col;
});
for (l = 0; l < o; l++) if (l < c.length) {
t.push(c[l].color);
e.colorsName.push("第二层列数最低");
} else {
t.push(i.hsgame.MathUtils.randomListSeed(e.colorPool));
e.colorsName.push("块池中随机");
}
}
return [ 2, t ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1004: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c664aTb+j5PmZkCUf9b7rFE", "SandAlgo1004");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1004 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("./SandAlgoHelper");
n.SandAlgo1004 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c, s;
return a(this, function() {
if (!i.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
t = [];
if (1 === (n = i.SandAlgoHelper.getTopAry(e.top2)).length) {
t.push(n[0]);
t.push(n[0]);
} else if (2 === n.length) {
t.push(n[0]);
t.push(n[1]);
} else t = r.hsgame.MathUtils.shuffleAry(n, 2);
for (o = 0; o < t.length; o++) e.colorsName[o] = "第二层随机";
if (0 === (c = i.SandAlgoHelper.getColorPoolExcludeTop12(e.colorPool, e.top1, e.top2)).length) {
s = i.SandAlgoHelper.getColMinColor(e.top2);
t.push(s);
e.colorsName.push("第二层列数最低");
} else {
t.push(r.hsgame.MathUtils.randomListSeed(c));
e.colorsName.push("前两层不存在");
}
return [ 2, t ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1005: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9dd89VKIadIvrZQU6zDkAJh", "SandAlgo1005");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1005 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("./SandAlgoHelper");
n.SandAlgo1005 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c, s;
return a(this, function() {
if (!i.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
t = [];
n = i.SandAlgoHelper.getTopAry(e.top1);
t.push(r.hsgame.MathUtils.randomListSeed(n));
e.colorsName.push("第一层随机");
o = i.SandAlgoHelper.getTopAry(e.top2);
t.push(r.hsgame.MathUtils.randomListSeed(o));
e.colorsName.push("第二层随机");
if (0 === (c = i.SandAlgoHelper.getColorPoolExcludeTop12(e.colorPool, e.top1, e.top2)).length) {
s = i.SandAlgoHelper.getColMinColorWithTwo(e.top1, e.top2);
t.push(s);
e.colorsName.push("前两层列数最低");
} else {
t.push(r.hsgame.MathUtils.randomListSeed(c));
e.colorsName.push("前两层不存在");
}
return [ 2, t ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1006: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4a603HZNsxFObfS6Er6xcfC", "SandAlgo1006");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1006 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("./SandAlgoHelper");
n.SandAlgo1006 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c;
return a(this, function() {
if (!i.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
if (e.colorPool.length === i.SandAlgoHelper.getColorCount(e.top1)) return [ 2, [] ];
t = [];
n = i.SandAlgoHelper.getColorPoolExcludeTop(e.colorPool, e.top1);
o = r.hsgame.MathUtils.randomListSeed(n);
t.push(o);
t.push(o);
e.colorsName.push("第一层不存在");
e.colorsName.push("第一层不存在");
c = i.SandAlgoHelper.getColMinColor(e.top1);
t.push(c);
e.colorsName.push("第一层权重最低");
return [ 2, t ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1007: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d08fcILIxdG+558ZwB7Jgvx", "SandAlgo1007");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1007 = void 0;
var r = e("./SandAlgoHelper"), i = e("../../sandLogic/SandLogicHelper");
n.SandAlgo1007 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c, s;
return a(this, function() {
if (!r.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
t = [];
n = r.SandAlgoHelper.getColorByWeight(e.top1);
t.push(n);
e.colorsName.push("第一层权重最高");
o = e.maps;
c = i.SandLogicHelper.getTopColorPoints(o, n);
i.SandLogicHelper.clearPointsInAry(o, c);
s = i.SandLogicHelper.getTopColors(o, null, !0);
t.push(r.SandAlgoHelper.getColorByWeight(s));
t.push(r.SandAlgoHelper.getColorByWeight(s));
e.colorsName.push("去除后权重最高");
e.colorsName.push("去除后权重最高");
return [ 2, t ];
});
});
};
cc._RF.pop();
}, {
"../../sandLogic/SandLogicHelper": "SandLogicHelper",
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1008: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5874frTDdBB3KrRJRJcQvPM", "SandAlgo1008");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1008 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("./SandAlgoHelper");
n.SandAlgo1008 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c;
return a(this, function() {
if (!i.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
t = [];
if (1 === (n = i.SandAlgoHelper.getTopAry(e.top2)).length) {
t.push(n[0]);
t.push(n[0]);
} else if (2 === n.length) {
t.push(n[0]);
t.push(n[1]);
} else t = r.hsgame.MathUtils.shuffleAry(n, 2);
if (0 === (o = i.SandAlgoHelper.getColorPoolExcludeTop12(e.colorPool, e.top1, e.top2)).length) {
c = i.SandAlgoHelper.getColMinColor(e.top2);
t.push(c);
} else t.push(r.hsgame.MathUtils.randomListSeed(o));
return [ 2, t ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1009: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c3757Hy+U9DXKImXW2W7eOC", "SandAlgo1009");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1009 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../sandLogic/SandMapHelper"), c = e("./SandAlgoHelper");
n.SandAlgo1009 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, s, l, u, d, p;
return a(this, function() {
if (!c.SandAlgoHelper.hasTwoLayers(e.top1, e.top2)) return [ 2, [] ];
t = e.colorPool.slice();
n = i.SandMapHelper.maxCol - e.top1.none;
o = {};
for (s in e.top1) Object.prototype.hasOwnProperty.call(e.top1, s) && "none" !== s && e.top1[s] / n > .3 && (o[s] = !0);
l = [];
for (p = 0; p < t.length; p++) o[t[p]] || l.push(t[p]);
if (0 === l.length) return [ 2, [] ];
u = [];
for (p = 0; p < 3; p++) {
u.push(r.hsgame.MathUtils.randomListSeed(l));
e.colorsName.push("强制堆叠");
}
if (u[0] === u[1] && u[1] === u[2]) {
d = [];
for (p = 0; p < t.length; p++) t[p] !== u[0] && d.push(t[p]);
u[1] = r.hsgame.MathUtils.randomListSeed(d);
e.colorsName[1] = "随机";
}
return [ 2, u ];
});
});
};
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../sandLogic/SandMapHelper": "SandMapHelper",
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1010: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "936ccZXvL5Oabfuok6aVQxm", "SandAlgo1010");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1010 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../data/SandLocalData");
n.SandAlgo1010 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o;
return a(this, function() {
t = [];
n = e.colorPool.slice();
if (0 === i.SandLocalData.sequenceColorPool.length) {
i.SandLocalData.sequenceColorPool = n.slice();
for (o = 0; o < 3; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (1 === i.SandLocalData.sequenceColorPool.length) {
t[0] = i.SandLocalData.sequenceColorPool[0];
e.colorsName.push("池子剩1");
i.SandLocalData.sequenceColorPool = n.slice();
for (o = 0; o < 2; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (2 === i.SandLocalData.sequenceColorPool.length) {
t[0] = r.hsgame.MathUtils.randomListSeed(i.SandLocalData.sequenceColorPool);
e.colorsName.push("池子剩2");
i.SandLocalData.sequenceColorPool = n.slice();
for (o = 0; o < 2; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else for (o = 0; o < 3; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
return [ 2, t ];
});
});
};
function c(e) {
var t = Math.floor(Math.random() * e.length), n = e[t];
e.splice(t, 1);
return n;
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData"
} ],
SandAlgo1011: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1cdd6zJ+/dDXrZ68UQGOnfg", "SandAlgo1011");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1011 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../data/SandLocalData");
n.SandAlgo1011 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o;
return a(this, function() {
t = [];
n = e.colorPool.slice();
if (0 === i.SandLocalData.sequenceColorPool.length) {
i.SandLocalData.sequenceColorPool = n.slice();
c(0, e.top1);
for (o = 0; o < 3; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (1 === i.SandLocalData.sequenceColorPool.length) {
t[0] = i.SandLocalData.sequenceColorPool[0];
e.colorsName.push("池子剩1");
i.SandLocalData.sequenceColorPool = n.slice();
c(0, e.top1);
for (o = 0; o < 2; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (2 === i.SandLocalData.sequenceColorPool.length) {
t[0] = r.hsgame.MathUtils.randomListSeed(i.SandLocalData.sequenceColorPool);
e.colorsName.push("池子剩2");
i.SandLocalData.sequenceColorPool = n.slice();
for (o = 0; o < 2; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (3 === i.SandLocalData.sequenceColorPool.length) for (o = 0; o < 3; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
} else {
c(0, e.top1);
for (o = 0; o < 3; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
}
return [ 2, t ];
});
});
};
function c(e, t) {
void 0 === t && (t = {});
for (var n = i.SandLocalData.sequenceColorPool.slice(), o = i.SandLocalData.sequenceColorPool.length - 1; o >= 0; o--) t[i.SandLocalData.sequenceColorPool[o]] && t[i.SandLocalData.sequenceColorPool[o]] > 0 && i.SandLocalData.sequenceColorPool.splice(o, 1);
i.SandLocalData.sequenceColorPool.length < 3 && (i.SandLocalData.sequenceColorPool = n);
}
function s(e) {
var t = Math.floor(Math.random() * e.length), n = e[t];
e.splice(t, 1);
return n;
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData"
} ],
SandAlgo1012: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "eb7cewUQAJLypMxjUkUHAub", "SandAlgo1012");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1012 = void 0;
var r = e("./SandAlgo1010"), i = e("./SandAlgo1011");
n.SandAlgo1012 = function(e) {
return o(this, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
return Math.random() < .5 ? [ 4, r.SandAlgo1010(e) ] : [ 3, 2 ];

case 1:
return [ 2, t.sent() ];

case 2:
return [ 4, i.SandAlgo1011(e) ];

case 3:
return [ 2, t.sent() ];
}
});
});
};
cc._RF.pop();
}, {
"./SandAlgo1010": "SandAlgo1010",
"./SandAlgo1011": "SandAlgo1011"
} ],
SandAlgo1013: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a8a03qfNBJDn4sjO5Eok3R+", "SandAlgo1013");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1013 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../data/SandLocalData");
n.SandAlgo1013 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, r, l;
return a(this, function() {
t = e.colorPool.slice();
i.SandLocalData.sequenceColorPool.length < 3 && (i.SandLocalData.sequenceColorPool = t.slice());
n = [];
for (o = 0; o < 3; ++o) n.push(c(i.SandLocalData.sequenceColorPool));
r = [ n[0][0], n[1][0], n[2][0] ];
l = [ n[0][1], n[1][1], n[2][1] ];
if (Math.random() < .66) {
e.blocks[0] = e.doubleBlocks[0];
e.blocks[1] = e.doubleBlocks[1];
e.blocks[2] = e.doubleBlocks[2];
} else {
e.blocks[0] = e.doubleBlocks[0];
e.blocks[1] = e.doubleBlocks[1];
}
e.doubleColors = l;
e.colorsName = [ "序列双色", "序列双色", "序列双色" ];
s(l, i.SandLocalData.sequenceColorPool);
s(r, i.SandLocalData.sequenceColorPool);
return [ 2, r ];
});
});
};
function c(e) {
for (var t = r.hsgame.MathUtils.randomListSeed(e), n = [], o = 0; o < e.length; ++o) e[o] !== t && n.push(e[o]);
return [ t, r.hsgame.MathUtils.randomListSeed(n) ];
}
function s(e, t) {
for (var n = 0; n < e.length; ++n) {
var o = t.indexOf(e[n]);
-1 !== o && t.splice(o, 1);
}
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData"
} ],
SandAlgo1014: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c0d53svAK1FVq/MyFdxfq40", "SandAlgo1014");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1014 = void 0;
var r = e("../../../../../resources/hsgame/hsgame");
n.SandAlgo1014 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, c, s, l;
return a(this, function() {
t = e.colorPool.slice();
n = r.hsgame.MathUtils.shuffleAry(t, 2);
o = r.hsgame.MathUtils.randomListSeed(n);
c = i(t, o);
s = r.hsgame.MathUtils.randomListSeed(c);
l = [ n[0], n[1], s ];
e.colorsName = [ "可重复随机", "可重复随机", "可重复随机" ];
return [ 2, l ];
});
});
};
function i(e, t) {
for (var n = [], o = 0; o < e.length; o++) e[o] !== t && n.push(e[o]);
return n;
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0
} ],
SandAlgo1015: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "31ff4njS5lOTazVGjzxz4+d", "SandAlgo1015");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1015 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("./SandAlgoHelper");
n.SandAlgo1015 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, s, l, u, d, p;
return a(this, function() {
t = e.colorPool.slice();
if ((n = i.SandAlgoHelper.getColorPoolExcludeTop(e.colorPool, e.top1)).length <= 2) {
o = r.hsgame.MathUtils.shuffleAry(t, 3 - n.length);
n = n.concat(o);
}
s = r.hsgame.MathUtils.shuffleAry(n, 2);
l = r.hsgame.MathUtils.randomListSeed(s);
u = c(t, l);
d = r.hsgame.MathUtils.randomListSeed(u);
p = [ s[0], s[1], d ];
e.colorsName = [ "过滤可重复随机", "过滤可重复随机", "过滤可重复随机" ];
return [ 2, p ];
});
});
};
function c(e, t) {
for (var n = [], o = 0; o < e.length; o++) e[o] !== t && n.push(e[o]);
return n;
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1016: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ac77bXEvAhFEJBpDE+h8v3b", "SandAlgo1016");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1016 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("./SandAlgoHelper");
n.SandAlgo1016 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, s, l, u;
return a(this, function() {
t = e.colorPool.slice();
if ((n = i.SandAlgoHelper.getColorPoolExcludeTop(e.colorPool, e.top1)).length <= 2) {
o = r.hsgame.MathUtils.shuffleAry(t, 3 - n.length);
n = n.concat(o);
}
n.length < 5 && (n = n.concat(n));
JSON.stringify(n);
(s = []).push(c(n[0], n));
s.push(c(n[2], n));
s.push(c(n[4], n));
l = [ s[0][0], s[1][0], s[2][0] ];
u = [ s[0][1], s[1][1], s[2][1] ];
if (Math.random() < .66) {
e.blocks[0] = e.doubleBlocks[0];
e.blocks[1] = e.doubleBlocks[1];
e.blocks[2] = e.doubleBlocks[2];
} else {
e.blocks[0] = e.doubleBlocks[0];
e.blocks[1] = e.doubleBlocks[1];
}
e.doubleColors = u;
e.colorsName = [ "随机双色", "随机双色", "随机双色" ];
return [ 2, l ];
});
});
};
function c(e, t) {
for (var n = [], o = 0; o < t.length; ++o) t[o] !== e && n.push(t[o]);
return [ e, r.hsgame.MathUtils.randomListSeed(n) ];
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"./SandAlgoHelper": "SandAlgoHelper"
} ],
SandAlgo1017: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e2de13+pS1Jbp9leFsH2AEv", "SandAlgo1017");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1017 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../data/SandLocalData");
n.SandAlgo1017 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o;
return a(this, function() {
t = [];
n = e.colorPool.slice();
if (0 === i.SandLocalData.sequenceColorPool.length) {
i.SandLocalData.sequenceColorPool = n.slice();
for (o = 0; o < 3; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (1 === i.SandLocalData.sequenceColorPool.length) {
t[0] = i.SandLocalData.sequenceColorPool[0];
e.colorsName.push("池子剩1");
i.SandLocalData.sequenceColorPool = n.slice();
for (o = 0; o < 2; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (2 === i.SandLocalData.sequenceColorPool.length) {
t[2] = r.hsgame.MathUtils.randomListSeed(i.SandLocalData.sequenceColorPool);
e.colorsName[2] = "池子剩2";
for (o = 0; o < 2; o++) {
t[o] = c(i.SandLocalData.sequenceColorPool);
e.colorsName[o] = "池子剩2";
}
} else for (o = 0; o < 3; o++) {
t.push(c(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
return [ 2, t ];
});
});
};
function c(e) {
var t = Math.floor(Math.random() * e.length), n = e[t];
e.splice(t, 1);
return n;
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData"
} ],
SandAlgo1018: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4f42d6I+EtK2qyekU7tiuSB", "SandAlgo1018");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1018 = void 0;
var r = e("../../../../../resources/hsgame/hsgame"), i = e("../../data/SandLocalData");
n.SandAlgo1018 = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o;
return a(this, function() {
t = [];
n = e.colorPool.slice();
if (0 === i.SandLocalData.sequenceColorPool.length) {
i.SandLocalData.sequenceColorPool = n.slice();
c(0, e.top1);
for (o = 0; o < 3; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (1 === i.SandLocalData.sequenceColorPool.length) {
t[0] = i.SandLocalData.sequenceColorPool[0];
e.colorsName.push("池子剩1");
i.SandLocalData.sequenceColorPool = n.slice();
c(0, e.top1);
for (o = 0; o < 2; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
} else if (2 === i.SandLocalData.sequenceColorPool.length) {
t[2] = r.hsgame.MathUtils.randomListSeed(i.SandLocalData.sequenceColorPool);
e.colorsName[2] = "池子剩2";
for (o = 0; o < 2; o++) {
t[o] = s(i.SandLocalData.sequenceColorPool);
e.colorsName[o] = "池子剩2";
}
} else if (3 === i.SandLocalData.sequenceColorPool.length) for (o = 0; o < 3; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
} else {
c(0, e.top1);
for (o = 0; o < 3; o++) {
t.push(s(i.SandLocalData.sequenceColorPool));
e.colorsName.push("池子中随机");
}
}
return [ 2, t ];
});
});
};
function c(e, t) {
void 0 === t && (t = {});
for (var n = i.SandLocalData.sequenceColorPool.slice(), o = i.SandLocalData.sequenceColorPool.length - 1; o >= 0; o--) t[i.SandLocalData.sequenceColorPool[o]] && t[i.SandLocalData.sequenceColorPool[o]] > 0 && i.SandLocalData.sequenceColorPool.splice(o, 1);
i.SandLocalData.sequenceColorPool.length < 3 && (i.SandLocalData.sequenceColorPool = n);
}
function s(e) {
var t = Math.floor(Math.random() * e.length), n = e[t];
e.splice(t, 1);
return n;
}
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData"
} ],
SandAlgo1019: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "07714QwUQBC1JdZezB+bVme", "SandAlgo1019");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgo1019 = void 0;
var r = e("./SandAlgo1017"), i = e("./SandAlgo1018");
n.SandAlgo1019 = function(e) {
return o(this, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
return Math.random() < .5 ? [ 4, r.SandAlgo1017(e) ] : [ 3, 2 ];

case 1:
return [ 2, t.sent() ];

case 2:
return [ 4, i.SandAlgo1018(e) ];

case 3:
return [ 2, t.sent() ];
}
});
});
};
cc._RF.pop();
}, {
"./SandAlgo1017": "SandAlgo1017",
"./SandAlgo1018": "SandAlgo1018"
} ],
SandAlgoAction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "68bafyLbkNC4Zv8JneMzD2/", "SandAlgoAction");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoAction = void 0;
var r = function() {
function e() {}
e.prototype.do = function() {
return o(this, void 0, void 0, function() {
return a(this, function() {
return [ 2, !0 ];
});
});
};
return e;
}();
n.SandAlgoAction = r;
cc._RF.pop();
}, {} ],
SandAlgoComposite: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3e016LMDbRCkL+5ZW+ocyMo", "SandAlgoComposite");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoComposite = void 0;
var r = function(e) {
a(t, e);
function t(t) {
void 0 === t && (t = []);
var n = e.call(this) || this;
n._algoComps = [];
n._algoComps = t;
return n;
}
t.prototype.init = function(e) {
this._algoComps = e;
};
return t;
}(e("./SandAlgoAction").SandAlgoAction);
n.SandAlgoComposite = r;
cc._RF.pop();
}, {
"./SandAlgoAction": "SandAlgoAction"
} ],
SandAlgoContext: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9b573kv0MlJmoY0Om59+giR", "SandAlgoContext");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoContext = void 0;
var o = e("../../data/SandLocalData"), a = function() {
function e() {
this.timeStart = 0;
this.singleColor = -1;
this.algo = 0;
this.blocks = [ 1, 1, 1 ];
this.doubleBlocks = [ 1, 1, 1 ];
this.roundCount = 0;
this.score = 0;
this.boardTileCount = 0;
this.colors = [];
this.colorsName = [];
this.doubleColors = [ -1, -1, -1 ];
this.damps = [ 0, 0, 0 ];
this.finalyBlocks = [];
this.colorPool = [];
this.top1 = {};
this.top2 = {};
this.maps = [];
this.peakCount = 0;
this.cheatCount = 0;
this.colorAlgoConfigIndex = 0;
this.colorAlgoConfigID = 0;
this.colorAlgoConfigAry = [];
}
e.prototype.newGameRound = function() {
o.SandLocalData.sequenceColorPool = [];
this.colorAlgoConfigIndex = 0;
};
return e;
}();
n.SandAlgoContext = a;
cc._RF.pop();
}, {
"../../data/SandLocalData": "SandLocalData"
} ],
SandAlgoFactory: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5b265sEseZDsLxX0Lr8sn2M", "SandAlgoFactory");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoFactory = void 0;
var r = e("../config/SandDefines"), i = e("./algos/SandAlgo1001"), c = e("./algos/SandAlgo1002"), s = e("./algos/SandAlgo1003"), l = e("./algos/SandAlgo1004"), u = e("./algos/SandAlgo1005"), d = e("./algos/SandAlgo1006"), p = e("./algos/SandAlgo1007"), h = e("./algos/SandAlgo1008"), f = e("./algos/SandAlgo1009"), g = e("./algos/SandAlgo1010"), S = e("./algos/SandAlgo1011"), m = e("./algos/SandAlgo1012"), y = e("./algos/SandAlgo1013"), _ = e("./algos/SandAlgo1014"), v = e("./algos/SandAlgo1015"), b = e("./algos/SandAlgo1016"), C = e("./algos/SandAlgo1017"), A = e("./algos/SandAlgo1018"), w = e("./algos/SandAlgo1019"), E = function() {
function e() {}
e.executeAlgo = function(e, t) {
return o(this, void 0, void 0, function() {
var n;
return a(this, function(o) {
switch (o.label) {
case 0:
if (!r.SandAlgoName.get(e)) return [ 2, [] ];
n = [];
switch (e) {
case r.SandAlgoEnum.Single:
return [ 3, 1 ];

case r.SandAlgoEnum.Random:
return [ 3, 3 ];

case r.SandAlgoEnum.PileForce:
return [ 3, 5 ];

case r.SandAlgoEnum.PileSoft:
return [ 3, 7 ];

case r.SandAlgoEnum.PileNoChange:
return [ 3, 9 ];

case r.SandAlgoEnum.PileSameColor:
return [ 3, 11 ];

case r.SandAlgoEnum.FillClear:
return [ 3, 13 ];

case r.SandAlgoEnum.FillPerfect:
return [ 3, 15 ];

case r.SandAlgoEnum.PileForce2:
return [ 3, 17 ];

case r.SandAlgoEnum.SequenceFill:
return [ 3, 19 ];

case r.SandAlgoEnum.SequenceFilter:
return [ 3, 21 ];

case r.SandAlgoEnum.SequenceProbFilter:
return [ 3, 23 ];

case r.SandAlgoEnum.SequenceDoubleColor:
return [ 3, 25 ];

case r.SandAlgoEnum.RepeatableRandom:
return [ 3, 27 ];

case r.SandAlgoEnum.FilterRepeatableRandom:
return [ 3, 29 ];

case r.SandAlgoEnum.RandomDoubleColor:
return [ 3, 31 ];

case r.SandAlgoEnum.RepSequenceFill:
return [ 3, 33 ];

case r.SandAlgoEnum.RepSequenceFilter:
return [ 3, 35 ];

case r.SandAlgoEnum.RepSequenceProbFilter:
return [ 3, 37 ];
}
return [ 3, 39 ];

case 1:
return [ 4, i.SandAlgo1001(t) ];

case 2:
n = o.sent();
return [ 3, 40 ];

case 3:
return [ 4, c.SandAlgo1002(t) ];

case 4:
n = o.sent();
return [ 3, 40 ];

case 5:
return [ 4, s.SandAlgo1003(t) ];

case 6:
n = o.sent();
return [ 3, 40 ];

case 7:
return [ 4, l.SandAlgo1004(t) ];

case 8:
n = o.sent();
return [ 3, 40 ];

case 9:
return [ 4, u.SandAlgo1005(t) ];

case 10:
n = o.sent();
return [ 3, 40 ];

case 11:
return [ 4, d.SandAlgo1006(t) ];

case 12:
n = o.sent();
return [ 3, 40 ];

case 13:
return [ 4, p.SandAlgo1007(t) ];

case 14:
n = o.sent();
return [ 3, 40 ];

case 15:
return [ 4, h.SandAlgo1008(t) ];

case 16:
n = o.sent();
return [ 3, 40 ];

case 17:
return [ 4, f.SandAlgo1009(t) ];

case 18:
n = o.sent();
return [ 3, 40 ];

case 19:
return [ 4, g.SandAlgo1010(t) ];

case 20:
n = o.sent();
return [ 3, 40 ];

case 21:
return [ 4, S.SandAlgo1011(t) ];

case 22:
n = o.sent();
return [ 3, 40 ];

case 23:
return [ 4, m.SandAlgo1012(t) ];

case 24:
n = o.sent();
return [ 3, 40 ];

case 25:
return [ 4, y.SandAlgo1013(t) ];

case 26:
n = o.sent();
return [ 3, 40 ];

case 27:
return [ 4, _.SandAlgo1014(t) ];

case 28:
n = o.sent();
return [ 3, 40 ];

case 29:
return [ 4, v.SandAlgo1015(t) ];

case 30:
n = o.sent();
return [ 3, 40 ];

case 31:
return [ 4, b.SandAlgo1016(t) ];

case 32:
n = o.sent();
return [ 3, 40 ];

case 33:
return [ 4, C.SandAlgo1017(t) ];

case 34:
n = o.sent();
return [ 3, 40 ];

case 35:
return [ 4, A.SandAlgo1018(t) ];

case 36:
n = o.sent();
return [ 3, 40 ];

case 37:
return [ 4, w.SandAlgo1019(t) ];

case 38:
n = o.sent();
return [ 3, 40 ];

case 39:
return [ 3, 40 ];

case 40:
return [ 2, n ];
}
});
});
};
return e;
}();
n.SandAlgoFactory = E;
cc._RF.pop();
}, {
"../config/SandDefines": "SandDefines",
"./algos/SandAlgo1001": "SandAlgo1001",
"./algos/SandAlgo1002": "SandAlgo1002",
"./algos/SandAlgo1003": "SandAlgo1003",
"./algos/SandAlgo1004": "SandAlgo1004",
"./algos/SandAlgo1005": "SandAlgo1005",
"./algos/SandAlgo1006": "SandAlgo1006",
"./algos/SandAlgo1007": "SandAlgo1007",
"./algos/SandAlgo1008": "SandAlgo1008",
"./algos/SandAlgo1009": "SandAlgo1009",
"./algos/SandAlgo1010": "SandAlgo1010",
"./algos/SandAlgo1011": "SandAlgo1011",
"./algos/SandAlgo1012": "SandAlgo1012",
"./algos/SandAlgo1013": "SandAlgo1013",
"./algos/SandAlgo1014": "SandAlgo1014",
"./algos/SandAlgo1015": "SandAlgo1015",
"./algos/SandAlgo1016": "SandAlgo1016",
"./algos/SandAlgo1017": "SandAlgo1017",
"./algos/SandAlgo1018": "SandAlgo1018",
"./algos/SandAlgo1019": "SandAlgo1019"
} ],
SandAlgoHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "03e52Q6wuhGlJN1nJ5zA/ib", "SandAlgoHelper");
var o = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoHelper = void 0;
var a = e("../../../../../resources/hsgame/hsgame"), r = e("../../sandLogic/SandMapHelper"), i = function() {
function e() {}
e.hasTwoLayers = function(e, t) {
return e.none !== r.SandMapHelper.maxCol && t.none !== r.SandMapHelper.maxCol;
};
e.getTopAry = function(e) {
var t = [];
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && "none" !== n && t.push(parseInt(n));
return t;
};
e.getColorPoolExcludeTop = function(e, t) {
var n, a, r = [];
try {
for (var i = o(e), c = i.next(); !c.done; c = i.next()) {
var s = c.value;
t[s] || r.push(s);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
c && !c.done && (a = i.return) && a.call(i);
} finally {
if (n) throw n.error;
}
}
return r;
};
e.getColorPoolExcludeTop12 = function(e, t, n) {
var a, r, i = [];
try {
for (var c = o(e), s = c.next(); !s.done; s = c.next()) {
var l = s.value;
t[l] || n[l] || i.push(l);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
s && !s.done && (r = c.return) && r.call(c);
} finally {
if (a) throw a.error;
}
}
return i;
};
e.getColMinColor = function(e) {
var t = Number.MAX_SAFE_INTEGER, n = -1;
for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && "none" !== o && e[o] < t) {
t = e[o];
n = parseInt(o);
}
return n;
};
e.getColMinColorWithTwo = function(e, t) {
var n = Number.MAX_SAFE_INTEGER, o = -1;
for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a) && "none" !== a && e[a] < n) {
n = e[a];
o = parseInt(a);
}
for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a) && "none" !== a && t[a] < n) {
n = t[a];
o = parseInt(a);
}
return o;
};
e.getColorCount = function(e) {
var t = 0;
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && "none" !== n && t++;
return t;
};
e.getColorByWeight = function(e, t) {
void 0 === t && (t = !1);
var n = [], o = [];
for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && "none" !== i) {
n.push(parseInt(i));
t ? o.push(r.SandMapHelper.maxCol - e[i]) : o.push(e[i]);
}
return n[a.hsgame.MathUtils.randomWeight(o)];
};
return e;
}();
n.SandAlgoHelper = i;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../sandLogic/SandMapHelper": "SandMapHelper"
} ],
SandAlgoSelector: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6293atVynZGsY0UfWHiEVqA", "SandAlgoSelector");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoSelector = void 0;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a, r;
return i(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 5, 6, 7 ]);
t = c(this._algoComps), n = t.next();
i.label = 1;

case 1:
return n.done ? [ 3, 4 ] : [ 4, n.value.do(e) ];

case 2:
if (i.sent()) return [ 2, !0 ];
i.label = 3;

case 3:
n = t.next();
return [ 3, 1 ];

case 4:
return [ 3, 7 ];

case 5:
o = i.sent();
a = {
error: o
};
return [ 3, 7 ];

case 6:
try {
n && !n.done && (r = t.return) && r.call(t);
} finally {
if (a) throw a.error;
}
return [ 7 ];

case 7:
return [ 2, !1 ];
}
});
});
};
return t;
}(e("./SandAlgoComposite").SandAlgoComposite);
n.SandAlgoSelector = s;
cc._RF.pop();
}, {
"./SandAlgoComposite": "SandAlgoComposite"
} ],
SandAlgoSequence: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "824a4Qj/5BOnoTyRr0HVRJA", "SandAlgoSequence");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoSequence = void 0;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.do = function(e) {
return r(this, void 0, void 0, function() {
var t, n, o, a, r;
return i(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 5, 6, 7 ]);
t = c(this._algoComps), n = t.next();
i.label = 1;

case 1:
return n.done ? [ 3, 4 ] : [ 4, n.value.do(e) ];

case 2:
if (!1 === i.sent()) return [ 2, !1 ];
i.label = 3;

case 3:
n = t.next();
return [ 3, 1 ];

case 4:
return [ 3, 7 ];

case 5:
o = i.sent();
a = {
error: o
};
return [ 3, 7 ];

case 6:
try {
n && !n.done && (r = t.return) && r.call(t);
} finally {
if (a) throw a.error;
}
return [ 7 ];

case 7:
return [ 2, !0 ];
}
});
});
};
return t;
}(e("./SandAlgoComposite").SandAlgoComposite);
n.SandAlgoSequence = s;
cc._RF.pop();
}, {
"./SandAlgoComposite": "SandAlgoComposite"
} ],
SandAlgoTree1001: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ed53ftUriVGzIi7VbYMXHrR", "SandAlgoTree1001");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandAlgoTree1001 = void 0;
var o = e("./base/SandAlgoSequence"), a = e("./action/SandActionInit"), r = e("./base/SandAlgoSelector"), i = e("./action/SandActionChooseAlgo"), c = e("./action/SandActionMainStrategy"), s = e("./action/SandActionBackStrategy"), l = e("./action/SandActionGetBlock"), u = e("./action/SandActionDamps"), d = e("./action/SandActionFinal"), p = e("./action/SandActionGMColor"), h = e("./action/SandActionColorPool"), f = e("./action/SandActionChooseAlgoTrigger");
n.SandAlgoTree1001 = function() {
var e = new o.SandAlgoSequence();
e.init([ new a.SandActionInit(), new u.SandActionDamps(), new l.SandActionGetBlock(!1), new l.SandActionGetBlock(!0), new h.SandActionColorPool(), new r.SandAlgoSelector([ new f.SandActionChooseAlgoTrigger(), new i.SandActionChooseAlgo() ]), new r.SandAlgoSelector([ new c.SandActionMainStrategy(), new s.SandActionBackStrategy() ]), new p.SandActionGMColor(), new d.SandActionFinal() ]);
return e;
};
cc._RF.pop();
}, {
"./action/SandActionBackStrategy": "SandActionBackStrategy",
"./action/SandActionChooseAlgo": "SandActionChooseAlgo",
"./action/SandActionChooseAlgoTrigger": "SandActionChooseAlgoTrigger",
"./action/SandActionColorPool": "SandActionColorPool",
"./action/SandActionDamps": "SandActionDamps",
"./action/SandActionFinal": "SandActionFinal",
"./action/SandActionGMColor": "SandActionGMColor",
"./action/SandActionGetBlock": "SandActionGetBlock",
"./action/SandActionInit": "SandActionInit",
"./action/SandActionMainStrategy": "SandActionMainStrategy",
"./base/SandAlgoSelector": "SandAlgoSelector",
"./base/SandAlgoSequence": "SandAlgoSequence"
} ],
SandBlockPoolUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "76eddQeIlxEkqNGrDMx6CrF", "SandBlockPoolUtils");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandBlockPoolUtils = void 0;
var r = e("../mgr/SandGameMgr"), i = e("../sandAlgo/base/SandAlgoContext"), c = e("../sandAlgo/SandAlgoTree1001"), s = e("../sandAlgo/action/SandActionFinal"), l = function() {
function e() {
this.boxDataList = [];
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
this._context = new i.SandAlgoContext();
this._tree = c.SandAlgoTree1001();
};
e.prototype.newGameRound = function() {
this._context && this._context.newGameRound();
};
e.prototype.genNewRoundBlocks = function() {
return o(this, void 0, void 0, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
r.SandGameMgr.addRound();
return [ 4, this._tree.do(this._context) ];

case 1:
e.sent();
this.boxDataList = this._context.finalyBlocks;
r.SandGameMgr.saveGameState();
return [ 2 ];
}
});
});
};
e.prototype.clearBoxDataIndex = function(e) {
this.boxDataList[e] = null;
r.SandGameMgr.saveGameState();
};
e.prototype.isAllBoxDataNull = function() {
return this.boxDataList.every(function(e) {
return null === e;
});
};
e.prototype.getBoxData = function() {
return this.boxDataList;
};
e.prototype.setNewbieData = function() {
this.boxDataList = [];
var e = new s.SandActionFinal().getOneBlock(18, 6, 0, -1);
this.boxDataList[0] = null;
this.boxDataList[1] = e;
this.boxDataList[2] = null;
};
e.prototype.setBoxData = function(e) {
this.boxDataList = e;
};
e._inst = null;
return e;
}();
n.SandBlockPoolUtils = l;
cc._RF.pop();
}, {
"../mgr/SandGameMgr": "SandGameMgr",
"../sandAlgo/SandAlgoTree1001": "SandAlgoTree1001",
"../sandAlgo/action/SandActionFinal": "SandActionFinal",
"../sandAlgo/base/SandAlgoContext": "SandAlgoContext"
} ],
SandClearRenderer: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "af55b2kIVVIO7NC9nE6Fvdt", "SandClearRenderer");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
}, i = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = e("../../sandLogic/SandMapHelper"), l = e("../../data/SandLocalData"), u = e("../../config/SandDefines"), d = e("./SandTileColorHelper"), p = e("../../../../../resources/hsgame/hsgame"), h = e("../../config/FeaturesEnum"), f = cc._decorator.ccclass, g = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.graphics = null;
t.animationTiles = [];
t.animationDuration = .3;
t.isAnimating = !1;
t.totalPushDuration = .3;
return t;
}
t.prototype.onLoad = function() {
this.graphics = this.node.getComponent(cc.Graphics);
this.clear();
};
t.prototype.draw = function(e) {
this.clear();
this.prepareAnimationData(e);
this.startClearAnimation();
};
t.prototype.prepareAnimationData = function(e) {
var t = this;
this.animationTiles = [];
e.forEach(function(e) {
e.forEach(function(e) {
e && e.row < s.SandMapHelper.maxRow && e.col < s.SandMapHelper.maxCol && t.animationTiles.push({
row: e.row,
col: e.col,
color: e.color,
scale: 1,
animationStartTime: 0
});
});
});
this.animationTiles.sort(function(e, t) {
return e.col - t.col;
});
};
t.prototype.startClearAnimation = function() {
return i(this, void 0, void 0, function() {
var e, t, n, o, a;
return c(this, function(r) {
switch (r.label) {
case 0:
return 0 === this.animationTiles.length ? [ 2 ] : this.animationTiles.length >= l.SandLocalData.HugeEliminationlimit && p.hsgame.Features.boolFeature(h.FeaturesEnum.huge_eliminate) ? [ 4, this.doBlink() ] : [ 3, 2 ];

case 1:
r.sent();
r.label = 2;

case 2:
this.isAnimating = !0;
e = Date.now();
t = new Map();
this.animationTiles.forEach(function(e) {
t.has(e.col) || t.set(e.col, []);
t.get(e.col).push(e);
});
n = Array.from(t.keys()).sort(function(e, t) {
return e - t;
});
o = n.length;
a = o > 1 ? this.totalPushDuration / (o - 1) : 0;
n.forEach(function(n, o) {
var r = t.get(n), i = e + o * a * 1e3;
r.forEach(function(e) {
e.animationStartTime = i;
});
});
this.updateAnimation();
return [ 2 ];
}
});
});
};
t.prototype.doBlink = function() {
return i(this, void 0, void 0, function() {
var e, t, n = this;
return c(this, function(o) {
switch (o.label) {
case 0:
e = [ cc.color().fromHEX("#A6FF88"), cc.color().fromHEX("#A0C1FF"), cc.color().fromHEX("#85FFFF"), cc.color().fromHEX("#FFD686"), cc.color().fromHEX("#C991FF"), cc.color().fromHEX("#FF8083"), cc.color().fromHEX("#FFFF95"), cc.color().fromHEX("#ffa1ce") ];
t = 0;
o.label = 1;

case 1:
return t < 8 ? [ 4, p.hsgame.TimeUtils.nextFrame() ] : [ 3, 7 ];

case 2:
case 3:
case 4:
o.sent();
return [ 4, p.hsgame.TimeUtils.nextFrame() ];

case 5:
o.sent();
this.graphics.clear();
t % 2 == 0 ? this.animationTiles.forEach(function(e) {
n.renderSingleTile(e.row, e.col, e.color, 1);
}) : this.animationTiles.forEach(function(t) {
var o = t.col * u.SIZE_SAND, a = t.row * u.SIZE_SAND;
n.graphics.fillColor = e[t.color - 1];
n.graphics.rect(o, a, u.SIZE_SAND, u.SIZE_SAND);
n.graphics.fill();
});
o.label = 6;

case 6:
++t;
return [ 3, 1 ];

case 7:
t = 0;
o.label = 8;

case 8:
return t < 8 ? [ 4, p.hsgame.TimeUtils.nextFrame() ] : [ 3, 11 ];

case 9:
o.sent();
o.label = 10;

case 10:
++t;
return [ 3, 8 ];

case 11:
return [ 2 ];
}
});
});
};
t.prototype.updateAnimation = function() {
var e = this;
if (this.isAnimating) {
var t = Date.now(), n = !0;
if (this.animationTiles) {
this.animationTiles.forEach(function(o) {
if (t >= o.animationStartTime) {
var a = (t - o.animationStartTime) / 1e3, r = Math.min(a / e.animationDuration, 1);
o.scale = 1 - r;
r < 1 && (n = !1);
} else {
o.scale = 1;
n = !1;
}
});
this.renderAllTiles();
if (n) {
this.isAnimating = !1;
this.clear();
} else requestAnimationFrame(function() {
return e.updateAnimation();
});
}
}
};
t.prototype.renderAllTiles = function() {
var e = this;
this.graphics.clear();
this.animationTiles.forEach(function(t) {
t.scale > 0 && e.renderSingleTile(t.row, t.col, t.color, t.scale);
});
};
t.prototype.renderSingleTile = function(e, t, n, o) {
var a = t * u.SIZE_SAND, r = e * u.SIZE_SAND;
this.fillRect(a, r, u.SIZE_SAND, n, o);
};
t.prototype.fillRect = function(e, t, n, o, a) {
void 0 === a && (a = 1);
o -= 1;
if (!(a <= 0)) if (l.SandLocalData.sandTileColorType === u.SandTileColorType.two) {
var r = (h = d.SandTileColorHelper.getColor(!1))[0][o], i = h[1][o], c = e + (g = (n - (f = n * a)) / 2), s = t + g;
this.graphics.fillColor = r;
this.graphics.rect(c, s, f, f);
this.graphics.fill();
var p = .1 * f;
this.graphics.fillColor = i;
this.graphics.rect(c + p, s + p, f - 2 * p, f - 2 * p);
this.graphics.fill();
} else if (l.SandLocalData.sandTileColorType === u.SandTileColorType.three) {
r = (h = d.SandTileColorHelper.getColor(!1))[0][o];
var h, f, g, S = h[1][o];
i = h[2][o], c = e + (g = (n - (f = n * a)) / 2), s = t + g;
this.graphics.fillColor = r;
this.graphics.rect(c, s, f, f);
this.graphics.fill();
var m = .1 * f;
this.graphics.fillColor = S;
this.graphics.rect(c + m, s + 2 * m, f - 3 * m, f - 3 * m);
this.graphics.fill();
var y = .1 * f;
this.graphics.fillColor = i;
this.graphics.rect(c + y, s + 6 * y, f - 7 * y, f - 7 * y);
this.graphics.fill();
}
};
t.prototype.clear = function() {
this.isAnimating = !1;
this.animationTiles = [];
this.graphics && this.graphics.clear();
};
return r([ f ], t);
}(cc.Component);
n.default = g;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../config/FeaturesEnum": "FeaturesEnum",
"../../config/SandDefines": "SandDefines",
"../../data/SandLocalData": "SandLocalData",
"../../sandLogic/SandMapHelper": "SandMapHelper",
"./SandTileColorHelper": "SandTileColorHelper"
} ],
SandColorPoolUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dde65pKsaVFEq83cK33qAPY", "SandColorPoolUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandColorPoolUtils = void 0;
var o = e("../data/SandLocalData"), a = function() {
function e() {}
Object.defineProperty(e, "ins", {
get: function() {
null === e._inst && (e._inst = new this());
return e._inst;
},
enumerable: !1,
configurable: !0
});
e.prototype.getColorPool = function() {
var e = o.SandLocalData.score, t = o.SandLocalData.scoreUnlockColor;
return e <= t[0] ? [ 6, 1, 2, 7 ] : e <= t[1] ? [ 6, 1, 2, 7, 4 ] : e <= t[2] ? [ 6, 1, 2, 7, 4, 5 ] : e <= t[3] ? [ 6, 1, 2, 7, 4, 5, 3 ] : [ 6, 1, 2, 7, 4, 5, 3, 8 ];
};
e._inst = null;
return e;
}();
n.SandColorPoolUtils = a;
cc._RF.pop();
}, {
"../data/SandLocalData": "SandLocalData"
} ],
SandDefines: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4d571+BCdtHRar7rBYwweVJ", "SandDefines");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandSkinEnum = n.SandConfigToAlgoEnum = n.SandAlgoName = n.SandAlgoEnum = n.SandTileColorType = n.Eight_Direction = n.Four_Direction = n.eSand_BoxNearType = n.emojiColors = n.DOUBLE_BLOCK_UNIT_ID = n.optionBlockScale = n.SIZE_SAND = n.RES_VERSION = n.GAME_VERSION = void 0;
n.GAME_VERSION = "v0802_2006";
n.RES_VERSION = "1.0.4";
n.SIZE_SAND = 10;
n.optionBlockScale = .6;
n.DOUBLE_BLOCK_UNIT_ID = 100;
n.emojiColors = [ "🟩", "🟦", "🟫", "🟧", "🟪", "🟥", "🟨", "🚺️" ];
var o;
(function(e) {
e[e.Four = 0] = "Four";
e[e.Eight = 1] = "Eight";
})(n.eSand_BoxNearType || (n.eSand_BoxNearType = {}));
n.Four_Direction = [ cc.v3(1, 0), cc.v3(0, -1), cc.v3(-1, 0), cc.v3(0, 1) ];
n.Eight_Direction = [ cc.v3(1, 0), cc.v3(0, -1), cc.v3(-1, 0), cc.v3(0, 1), cc.v3(1, 1), cc.v3(-1, -1), cc.v3(1, -1), cc.v3(-1, 1) ];
(function(e) {
e[e.two = 0] = "two";
e[e.three = 1] = "three";
})(n.SandTileColorType || (n.SandTileColorType = {}));
(function(e) {
e[e.Single = 1001] = "Single";
e[e.Random = 1002] = "Random";
e[e.PileForce = 1003] = "PileForce";
e[e.PileSoft = 1004] = "PileSoft";
e[e.PileNoChange = 1005] = "PileNoChange";
e[e.PileSameColor = 1006] = "PileSameColor";
e[e.FillClear = 1007] = "FillClear";
e[e.FillPerfect = 1008] = "FillPerfect";
e[e.PileForce2 = 1009] = "PileForce2";
e[e.SequenceFill = 1010] = "SequenceFill";
e[e.SequenceFilter = 1011] = "SequenceFilter";
e[e.SequenceProbFilter = 1012] = "SequenceProbFilter";
e[e.SequenceDoubleColor = 1013] = "SequenceDoubleColor";
e[e.RepeatableRandom = 1014] = "RepeatableRandom";
e[e.FilterRepeatableRandom = 1015] = "FilterRepeatableRandom";
e[e.RandomDoubleColor = 1016] = "RandomDoubleColor";
e[e.RepSequenceFill = 1017] = "RepSequenceFill";
e[e.RepSequenceFilter = 1018] = "RepSequenceFilter";
e[e.RepSequenceProbFilter = 1019] = "RepSequenceProbFilter";
})(o = n.SandAlgoEnum || (n.SandAlgoEnum = {}));
n.SandAlgoName = new Map();
n.SandAlgoName.set(o.Single, "纯色");
n.SandAlgoName.set(o.Random, "随机");
n.SandAlgoName.set(o.PileForce, "强制堆叠");
n.SandAlgoName.set(o.PileSoft, "温和堆叠");
n.SandAlgoName.set(o.PileNoChange, "不变堆叠");
n.SandAlgoName.set(o.PileSameColor, "同色堆叠");
n.SandAlgoName.set(o.FillClear, "填空消除");
n.SandAlgoName.set(o.FillPerfect, "完美填空");
n.SandAlgoName.set(o.PileForce2, "强制堆叠2");
n.SandAlgoName.set(o.SequenceFill, "序列填空");
n.SandAlgoName.set(o.SequenceFilter, "序列过滤");
n.SandAlgoName.set(o.SequenceProbFilter, "从1010或1011中随机选择一个");
n.SandAlgoName.set(o.SequenceDoubleColor, "序列双色");
n.SandAlgoName.set(o.RepeatableRandom, "可重复随机");
n.SandAlgoName.set(o.FilterRepeatableRandom, "过滤可重复随机");
n.SandAlgoName.set(o.RandomDoubleColor, "随机双色块");
n.SandAlgoName.set(o.RepSequenceFill, "序列填空[2]");
n.SandAlgoName.set(o.RepSequenceFilter, "序列过滤[2]");
n.SandAlgoName.set(o.RepSequenceProbFilter, "从1010或1011中随机选择一个[2]");
n.SandConfigToAlgoEnum = new Map();
n.SandConfigToAlgoEnum.set("SameColor", o.Single);
n.SandConfigToAlgoEnum.set("Random", o.Random);
n.SandConfigToAlgoEnum.set("FastHigher", o.PileForce);
n.SandConfigToAlgoEnum.set("SlowHigher", o.PileSoft);
n.SandConfigToAlgoEnum.set("SameHigh", o.PileNoChange);
n.SandConfigToAlgoEnum.set("TwoColor", o.PileSameColor);
n.SandConfigToAlgoEnum.set("MultipleBlast", o.FillClear);
n.SandConfigToAlgoEnum.set("PrefectBlast", o.FillPerfect);
n.SandConfigToAlgoEnum.set("FastHigher2", o.PileForce2);
n.SandConfigToAlgoEnum.set("SequenceFill", o.SequenceFill);
n.SandConfigToAlgoEnum.set("SequenceFilter", o.SequenceFilter);
n.SandConfigToAlgoEnum.set("SequenceProbFilter", o.SequenceProbFilter);
n.SandConfigToAlgoEnum.set("SequenceDoubleColor", o.SequenceDoubleColor);
n.SandConfigToAlgoEnum.set("RepeatableRandom", o.RepeatableRandom);
n.SandConfigToAlgoEnum.set("FilterRepeatableRandom", o.FilterRepeatableRandom);
n.SandConfigToAlgoEnum.set("RandomDoubleColor", o.RandomDoubleColor);
n.SandConfigToAlgoEnum.set("RepSequenceFill", o.RepSequenceFill);
n.SandConfigToAlgoEnum.set("RepSequenceFilter", o.RepSequenceFilter);
n.SandConfigToAlgoEnum.set("RepSequenceProbFilter", o.RepSequenceProbFilter);
n.SandSkinEnum = {
wood: 1,
pixel: 2,
nonPixel: 3,
neon: 4,
wood2: 5
};
cc._RF.pop();
}, {} ],
SandDraggingRenderer: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a0bafIkaKdPurXCXXxW9eO8", "SandDraggingRenderer");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../config/SandDefines"), c = e("../../data/SandLocalData"), s = e("./SandTileColorHelper"), l = cc._decorator.ccclass, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.graphics = null;
t._hasContent = !1;
t._basePosition = null;
t._originalPosition = null;
return t;
}
t.prototype.onLoad = function() {
this.graphics = this.node.getComponent(cc.Graphics);
this._originalPosition = {
x: this.node.x,
y: this.node.y
};
this.clear();
};
t.prototype.draw = function(e) {
var t = this._isMapQueueEmpty(e);
if (this._hasContent || !t) if (this._hasContent || t) if (this._hasContent && t) {
this.clear();
this._resetNodePosition();
this._hasContent = !1;
this._basePosition = null;
} else this._moveNodeByOffset(e); else {
this._renderMapQueue(e);
this._hasContent = !0;
this._basePosition = this._getFirstSandPosition(e);
}
};
t.prototype._isMapQueueEmpty = function(e) {
for (var t = 0; t < e.length; t++) for (var n = 0; n < e[t].length; n++) if (e[t][n]) return !1;
return !0;
};
t.prototype._getFirstSandPosition = function(e) {
for (var t = 0; t < e.length; t++) for (var n = 0; n < e[t].length; n++) {
var o = e[t][n];
if (o) return {
x: o.x,
y: o.y
};
}
return null;
};
t.prototype._moveNodeByOffset = function(e) {
var t = this._getFirstSandPosition(e);
if (t && this._basePosition) {
var n = t.x - this._basePosition.x, o = t.y - this._basePosition.y;
this.node.x = this._originalPosition.x + n;
this.node.y = this._originalPosition.y + o;
}
};
t.prototype._resetNodePosition = function() {
this.node.x = this._originalPosition.x;
this.node.y = this._originalPosition.y;
};
t.prototype._renderMapQueue = function(e) {
this.graphics.clear();
for (var t = 0; t < e.length; t++) for (var n = 0; n < e[t].length; n++) {
var o = e[t][n];
o && this.fillRect(o.x, o.y, i.SIZE_SAND, o.color, o.isDamp, o.dampColor);
}
};
t.prototype.fillRect = function(e, t, n, o, a, r) {
o -= 1;
if (c.SandLocalData.sandTileColorType === i.SandTileColorType.two) {
var l = (p = s.SandTileColorHelper.getColor(a, r))[0][o], u = p[1][o];
this.graphics.fillColor = l;
this.graphics.rect(e, t, n, n);
this.graphics.fill();
var d = .1 * n;
this.graphics.fillColor = u;
this.graphics.rect(e + d, t + d, n - 2 * d, n - 2 * d);
this.graphics.fill();
} else if (c.SandLocalData.sandTileColorType === i.SandTileColorType.three) {
l = (p = s.SandTileColorHelper.getColor(a, r))[0][o];
var p, h = p[1][o];
u = p[2][o];
this.graphics.fillColor = l;
this.graphics.rect(e, t, n, n);
this.graphics.fill();
var f = .1 * n;
this.graphics.fillColor = h;
this.graphics.rect(e + f, t + 2 * f, n - 3 * f, n - 3 * f);
this.graphics.fill();
var g = .1 * n;
this.graphics.fillColor = u;
this.graphics.rect(e + g, t + 6 * g, n - 7 * g, n - 7 * g);
this.graphics.fill();
}
};
t.prototype.clear = function() {
this.graphics && this.graphics.clear();
this._hasContent = !1;
this._basePosition = null;
};
return r([ l ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../config/SandDefines": "SandDefines",
"../../data/SandLocalData": "SandLocalData",
"./SandTileColorHelper": "SandTileColorHelper"
} ],
SandFlowManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fa21165l6xIVL1AfPQSJ1Eo", "SandFlowManager");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, r = n.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (a) throw a.error;
}
}
return i;
}, i = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandFlowManager = void 0;
var c = e("../data/SandLocalData"), s = e("./SandPreloadFlow"), l = e("./SandTutorialFlow"), u = e("../mgr/HSUIMgrAdapter"), d = e("../config/SandUIConfig"), p = function() {
function e() {
this.flowConfigs = [];
this.currentFlowIndex = -1;
this.isExecuting = !1;
this.executionResults = [];
this.initializeFlowConfigs();
}
e.getInstance = function() {
e.instance || (e.instance = new e());
return e.instance;
};
e.prototype.initializeFlowConfigs = function() {
var e = this;
this.flowConfigs = [ {
flow: new s.SandPreloadFlow(),
required: !0,
condition: function() {
return !0;
}
}, {
flow: new l.SandTutorialFlow(),
required: !1,
condition: function() {
return e.isFirstTimeUser();
}
} ];
};
e.prototype.startAllFlows = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function(t) {
switch (t.label) {
case 0:
if (this.isExecuting) return [ 2 ];
this.isExecuting = !0;
this.currentFlowIndex = -1;
this.executionResults = [];
t.label = 1;

case 1:
t.trys.push([ 1, 3, 4, 5 ]);
return [ 4, this.executeNextFlow() ];

case 2:
t.sent();
this.switchToGameMain();
return [ 3, 5 ];

case 3:
e = t.sent();
console.error("[SandFlowManager] 流程执行失败:", e);
return [ 3, 5 ];

case 4:
this.isExecuting = !1;
return [ 7 ];

case 5:
return [ 2 ];
}
});
});
};
e.prototype.executeNextFlow = function() {
return o(this, void 0, Promise, function() {
var e, t, n, o;
return a(this, function(a) {
switch (a.label) {
case 0:
this.currentFlowIndex++;
if (this.currentFlowIndex >= this.flowConfigs.length) return [ 2 ];
e = this.flowConfigs[this.currentFlowIndex];
t = e.flow;
if (e.condition && !e.condition()) {
t.name;
return [ 2, this.executeNextFlow() ];
}
t.name;
a.label = 1;

case 1:
a.trys.push([ 1, 4, , 6 ]);
return [ 4, t.execute() ];

case 2:
a.sent();
this.executionResults.push({
success: !0
});
return [ 4, this.executeNextFlow() ];

case 3:
a.sent();
return [ 3, 6 ];

case 4:
n = a.sent();
o = n.message || n.toString();
this.executionResults.push({
success: !1,
error: o
});
console.error("[SandFlowManager] 流程执行失败: " + t.name, n);
if (e.required) throw new Error("必须流程执行失败: " + t.name + " - " + o);
return [ 4, this.executeNextFlow() ];

case 5:
a.sent();
return [ 3, 6 ];

case 6:
return [ 2 ];
}
});
});
};
e.prototype.switchToGameMain = function() {
var e = u.HSUIMgrAdapter.get(d.SandUIConfig.mainUI);
e ? e.node.active = !0 : u.HSUIMgrAdapter.show(d.SandUIConfig.mainUI);
};
e.prototype.resetAllFlows = function() {
this.flowConfigs.forEach(function(e) {
return e.flow.reset();
});
this.currentFlowIndex = -1;
this.executionResults = [];
};
e.prototype.getCurrentFlowName = function() {
return this.currentFlowIndex >= 0 && this.currentFlowIndex < this.flowConfigs.length ? this.flowConfigs[this.currentFlowIndex].flow.name : "None";
};
e.prototype.isFirstTimeUser = function() {
return !c.SandLocalData.GetData("tutorial_completed");
};
e.prototype.getExecutionResults = function() {
return i(this.executionResults);
};
Object.defineProperty(e.prototype, "executing", {
get: function() {
return this.isExecuting;
},
enumerable: !1,
configurable: !0
});
e.prototype.getPreloadFlow = function() {
var e = this.flowConfigs.find(function(e) {
return e.flow instanceof s.SandPreloadFlow;
});
return null == e ? void 0 : e.flow;
};
e.prototype.getTutorialFlow = function() {
var e = this.flowConfigs.find(function(e) {
return e.flow instanceof l.SandTutorialFlow;
});
return null == e ? void 0 : e.flow;
};
return e;
}();
n.SandFlowManager = p;
cc._RF.pop();
}, {
"../config/SandUIConfig": "SandUIConfig",
"../data/SandLocalData": "SandLocalData",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"./SandPreloadFlow": "SandPreloadFlow",
"./SandTutorialFlow": "SandTutorialFlow"
} ],
SandGameConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a9e995kM35GEYkHfEALGLaC", "SandGameConfig");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandGameConfig = void 0;
var r = e("../../../../resources/hsgame/hsgame"), i = e("../data/SandLocalData"), c = function() {
function e() {}
e.initCoing = function() {
return o(this, void 0, void 0, function() {
var e, t, n, o, i, c;
return a(this, function(a) {
switch (a.label) {
case 0:
return [ 4, r.hsgame.ResourceUtils.loadJSON("res/json/blockattr", "sandcrush") ];

case 1:
e = a.sent().json;
return [ 4, r.hsgame.ResourceUtils.loadJSON("res/json/sandalgo", "sandcrush") ];

case 2:
t = a.sent().json;
return [ 4, r.hsgame.ResourceUtils.loadJSON("res/json/scorerate", "sandcrush") ];

case 3:
n = a.sent().json;
return [ 4, r.hsgame.ResourceUtils.loadJSON("res/json/topsands", "sandcrush") ];

case 4:
o = a.sent().json;
return [ 4, r.hsgame.ResourceUtils.loadJSON("res/json/targetscore", "sandcrush") ];

case 5:
i = a.sent().json;
return [ 4, r.hsgame.ResourceUtils.loadJSON("res/json/triggeralgo", "sandcrush") ];

case 6:
c = a.sent().json;
this.setBlockAttr(e);
this.setSandAlgo(t);
this.setScoreRate(n);
this.setTopsands(o);
this.setTargetScore(i);
this.setTriggerAlgo(c);
this.logConfig();
return [ 2 ];
}
});
});
};
e.logConfig = function() {
this.blockattr;
this.sandalgo;
this.scorerate;
this.topsands;
this.targetscore;
this.triggeralgo;
};
e.setBlockAttr = function(e) {
var t = {};
e = e[1].value;
for (var n = 0; n < e.length; ++n) {
var o = e[n], a = this._getBlockAttrData(o);
t[o.cubeID] = {
shape: a.shape,
shapeNum: a.shapeNum
};
}
this.blockattr = t;
};
e._getBlockAttrData = function(e) {
for (var t = 0, n = e.data.split("|"), o = [], a = 0; a < n.length; a++) {
for (var r = n[a].split(","), i = [], c = 0; c < r.length; c++) {
var s = r[c], l = this._getBlockAttrStr(s);
i[c] = l.value;
t += l.num;
}
o[a] = i;
}
return {
shape: o,
shapeNum: t
};
};
e._getBlockAttrStr = function(e) {
var t = 0;
if (1 === e.length) {
var n = parseInt(e);
n > 0 && t++;
return {
value: {
color: n,
width: i.SandLocalData.blocksize,
height: i.SandLocalData.blocksize
},
num: t
};
}
var o = e.split(";"), a = parseInt(o[0]);
a > 0 && t++;
return {
value: {
color: a,
width: parseInt(o[1]),
height: parseInt(o[2])
},
num: t
};
};
e.setSandAlgo = function(e) {
this.sandalgo = e;
};
e.setScoreRate = function(e) {
for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
for (var n = e[t], o = new Map(), a = n.CubeIDWeight.split("|"), r = 0; r < a.length; ++r) {
var i = a[r].split(","), c = parseInt(i[0]), s = parseInt(i[1]);
if (s > 0) {
var l = this.blockattr[c].shapeNum;
o.has(l) ? o.get(l).push({
cubeID: c,
weight: s
}) : o.set(l, [ {
cubeID: c,
weight: s
} ]);
}
}
n.cubeData = o;
}
this.scorerate = e;
};
e.setTopsands = function(e) {
this.topsands = e;
};
e.getBlockAttr = function() {
return this.blockattr;
};
e.getSandAlgo = function() {
return this.sandalgo;
};
e.getScoreRate = function() {
return this.scorerate;
};
e.getTopsands = function() {
return this.topsands;
};
e.setTargetScore = function(e) {
this.targetscore = e;
};
e.getTargetScore = function() {
return this.targetscore;
};
e.setTriggerAlgo = function(e) {
for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
var n = e[t];
n.triggerList = this._getTriggerList(n.TriggerType);
}
this.triggeralgo = e;
};
e._getTriggerList = function(e) {
for (var t = e.split("|"), n = [], o = 0; o < t.length; o++) {
for (var a = t[o].split("&"), r = [], i = 0; i < a.length; i++) {
var c = a[i].split(",");
r.push({
type: parseInt(c[0]),
param: c.slice(1)
});
}
n.push(r);
}
return n;
};
e.getTriggerAlgo = function() {
return this.triggeralgo;
};
e.blockattr = null;
e.sandalgo = null;
e.scorerate = null;
e.topsands = null;
e.targetscore = null;
e.triggeralgo = null;
return e;
}();
n.SandGameConfig = c;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../data/SandLocalData": "SandLocalData"
} ],
SandGameController: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5ba03jPQdFGJYrZk2TFdeFG", "SandGameController");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandGameController = void 0;
var o = e("../mgr/EventMgr"), a = e("../score/ScoreManager"), r = e("../Motivation/MotivationalWordsMgr"), i = e("./SandLocalData"), c = e("../utils/SandSoundUtils"), s = e("../mgr/SandGameMgr"), l = e("../../../../resources/hsgame/hsgame"), u = e("../config/FeaturesEnum"), d = function() {
function e() {
this.isSerialCombo = !1;
this.eliminationContext = null;
}
Object.defineProperty(e.prototype, "hasRevive3000", {
get: function() {
return i.SandLocalData.hasRevive3000InRound;
},
set: function(e) {
i.SandLocalData.hasRevive3000InRound = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hasRevive80Percent", {
get: function() {
return i.SandLocalData.hasRevive80PercentInRound;
},
set: function(e) {
i.SandLocalData.hasRevive80PercentInRound = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
this.eliminationContext = {
placementCount: i.SandLocalData.placementCount,
sandCount: 0,
isCombo: i.SandLocalData.curCombo > 0,
comboCount: i.SandLocalData.curCombo,
isChain: !1,
chainCount: 0,
isHuge: !1,
isClear: !1,
eliminatedPositions: [],
isNewHighScore: !1
};
a.ScoreManager.instance.init();
r.MotivationalWordsMgr.init();
o.EventMgr.on(o.EventType.placeSand, this.onPlaceSand, this);
o.EventMgr.on(o.EventType.eliminateSand, this.onEliminateSand, this);
o.EventMgr.on(o.EventType.clearBoard, this.onClearBoard, this);
o.EventMgr.on(o.EventType.restart, this.restart, this);
o.EventMgr.on(o.EventType.updateScore, this.onScoreUpdated, this);
};
e.prototype.onPlaceSand = function(e) {
var t = (null == e ? void 0 : e.sandCount) || 0, n = (null == e ? void 0 : e.position) || {
x: 0,
y: 0
}, o = (null == e ? void 0 : e.placedBlocks) || [];
(t > 0 || o.length > 0) && this.recordPlacement();
this.eliminationContext.sandCount = t;
a.ScoreManager.instance.onPlacementScore(this.eliminationContext);
r.MotivationalWordsMgr.onPlacementSand(this.eliminationContext);
c.SandSoundUtils.playEffect(c.SAND_SOUND_EFFECT.SAND_PUT);
n.x, n.y, i.SandLocalData.score;
};
e.prototype.recordPlacement = function() {
this.eliminationContext.placementCount++;
if (this.eliminationContext.placementCount > i.SandLocalData.combolimit) {
this.eliminationContext.comboCount = 0;
this.eliminationContext.isCombo = !1;
}
this.updateEliminationData();
};
e.prototype.onEliminateSand = function(e) {
if (e.sands && !(e.sands.length <= 0)) {
var t = e.sands.length;
this.eliminationContext.isHuge = t >= i.SandLocalData.HugeEliminationlimit && l.hsgame.Features.boolFeature(u.FeaturesEnum.huge_eliminate);
if (this.eliminationContext.isCombo) {
this.eliminationContext.comboCount++;
i.SandLocalData.comboCount++;
if (!1 === this.isSerialCombo) {
this.isSerialCombo = !0;
i.SandLocalData.comboTimes++;
}
} else {
this.eliminationContext.isCombo = !0;
this.isSerialCombo = !1;
}
if (this.eliminationContext.isChain) this.eliminationContext.chainCount++; else {
this.eliminationContext.isChain = !0;
this.eliminationContext.chainCount = 0;
}
this.eliminationContext.sandCount = t;
this.eliminationContext.isClear = !1;
this.eliminationContext.eliminatedPositions = e.sands;
this.eliminationContext.placementCount = 0;
0 == s.SandGameMgr.getBoxLogic().getMapCount() && (this.eliminationContext.isClear = !0);
this.updateEliminationData();
a.ScoreManager.instance.onElimateScore(this.eliminationContext);
r.MotivationalWordsMgr.onEliminateSand(this.eliminationContext);
this.playEliminationSound();
this.eliminationContext.isCombo, this.eliminationContext.comboCount, this.eliminationContext.isChain, 
this.eliminationContext.chainCount, this.eliminationContext.isHuge;
}
};
e.prototype.onClearBoard = function(e) {
var t = (null == e ? void 0 : e.isCleared) || !1;
null == e || e.totalSandCount;
this.eliminationContext.isClear = t && l.hsgame.Features.boolFeature(u.FeaturesEnum.clear_board);
};
e.prototype.onScoreUpdated = function(e) {
var t = e.score;
if (!this.hasRevive3000 && t >= 3e3) {
this.hasRevive3000 = !0;
i.SandLocalData.reviveCount++;
}
if (!this.hasRevive80Percent && i.SandLocalData.highScore > 0 && t >= .8 * i.SandLocalData.highScore) {
this.hasRevive80Percent = !0;
i.SandLocalData.reviveCount++;
}
};
e.prototype.endChainElimination = function() {
if (0 == this.eliminationContext.placementCount) {
this.eliminationContext.isChain = !1;
this.eliminationContext.chainCount = 0;
r.MotivationalWordsMgr.showLastMotivation(this.eliminationContext);
}
};
e.prototype.playEliminationSound = function() {
var e = this.eliminationContext.comboCount.toString();
this.eliminationContext.comboCount > 10 && (e = "10");
c.SandSoundUtils.playEffect(this.eliminationContext.comboCount > 0 ? "e_score_streak_" + e : "e_score_streak_1");
this.eliminationContext.isHuge && l.hsgame.Features.boolFeature(u.FeaturesEnum.huge_eliminate) && c.SandSoundUtils.playEffect(c.SAND_SOUND_EFFECT.HUGE_BLAST);
this.eliminationContext.chainCount > 0 && l.hsgame.Features.boolFeature(u.FeaturesEnum.chain_eliminate) && c.SandSoundUtils.playEffect(c.SAND_SOUND_EFFECT.SERIAL_BLAST);
};
e.prototype.getComboCount = function() {
return this.eliminationContext.comboCount;
};
e.prototype.updateEliminationData = function() {
i.SandLocalData.curCombo = this.eliminationContext.comboCount;
i.SandLocalData.placementCount = this.eliminationContext.placementCount;
this.eliminationContext.comboCount > i.SandLocalData.maxCombo && (i.SandLocalData.maxCombo = this.eliminationContext.comboCount);
};
e.prototype.restart = function() {
i.SandLocalData.isLastGameOver = !1;
i.SandLocalData.cheatCount = 0;
i.SandLocalData.curReviveCount = 0;
i.SandLocalData.maxCombo = 0;
i.SandLocalData.comboCount = 0;
i.SandLocalData.comboTimes = 0;
i.SandLocalData.reviveCount = 0;
this.hasRevive3000 = !1;
this.hasRevive80Percent = !1;
this.eliminationContext = {
placementCount: 0,
sandCount: 0,
isCombo: !1,
comboCount: 0,
isChain: !1,
chainCount: 0,
isHuge: !1,
isClear: !1,
eliminatedPositions: [],
isNewHighScore: !1
};
this.updateEliminationData();
};
e.prototype.calcCheatCount = function() {
if (i.SandLocalData.closeCalCheat) i.SandLocalData.cheatCount = 0; else if (s.SandGameMgr.getBoxLogic()) {
var e = i.SandLocalData.curCombo, t = s.SandGameMgr.getBoxLogic().getEmptyColorsRow();
if (e > 0) if (t > 42) i.SandLocalData.cheatCount++; else {
i.SandLocalData.cheatCount--;
i.SandLocalData.cheatCount < 0 && (i.SandLocalData.cheatCount = 0);
} else i.SandLocalData.cheatCount = 0;
i.SandLocalData.cheatCount;
}
};
e.prototype.getCheatCount = function() {
return i.SandLocalData.cheatCount;
};
e.prototype.checkNewRoundCheat = function() {
i.SandLocalData.curCombo < 1 && (i.SandLocalData.cheatCount = 0);
};
e.prototype.hasReviveCount = function() {
return i.SandLocalData.reviveCount > 0;
};
e.prototype.consumeRevive = function() {
if (i.SandLocalData.reviveCount > 0) {
i.SandLocalData.reviveCount--;
i.SandLocalData.reviveCount;
return !0;
}
return !1;
};
e.prototype.getReviveCount = function() {
return i.SandLocalData.reviveCount;
};
e.prototype.destroy = function() {
o.EventMgr.off(o.EventType.placeSand, this.onPlaceSand, this);
o.EventMgr.off(o.EventType.eliminateSand, this.onEliminateSand, this);
o.EventMgr.off(o.EventType.clearBoard, this.onClearBoard, this);
o.EventMgr.off(o.EventType.restart, this.restart, this);
o.EventMgr.off(o.EventType.updateScore, this.onScoreUpdated, this);
a.ScoreManager.instance.destroy();
};
return e;
}();
n.SandGameController = new d();
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../Motivation/MotivationalWordsMgr": "MotivationalWordsMgr",
"../config/FeaturesEnum": "FeaturesEnum",
"../mgr/EventMgr": "EventMgr",
"../mgr/SandGameMgr": "SandGameMgr",
"../score/ScoreManager": "ScoreManager",
"../utils/SandSoundUtils": "SandSoundUtils",
"./SandLocalData": "SandLocalData"
} ],
SandGameMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9072b0J6YFBEZr0JCCBONPe", "SandGameMgr");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandGameMgr = n.SandGameMgrClass = void 0;
var r = e("../sandLogic/SandBlockPoolUtils"), i = e("./EventMgr"), c = e("../data/SandLocalData"), s = e("./SandAdManager"), l = e("../UI/DeathWarningEffect"), u = e("./GameStatistics"), d = e("../data/SandGameController"), p = e("../flow/SandFlowManager"), h = e("./SandGameStateManager"), f = e("./GameStateEnum"), g = e("../data/SandSnapshot"), S = e("../utils/SandUtils"), m = e("../../../../resources/hsgame/hsgame"), y = e("../../../../resources/hsgame/module/dataReporter/DataReporter"), _ = e("../config/TrackEnum"), v = e("./HSUIMgrAdapter"), b = function() {
function e() {
this._over = !1;
this._boxLogic = null;
this.stateMgr = null;
}
e.prototype.init = function() {
this.stateMgr = h.SandGameStateManager.initStateMachine(this);
this.stateMgr.changeState(f.GameState.INIT);
};
e.prototype.startGame = function() {
var e;
null === (e = this.stateMgr) || void 0 === e || e.changeState(f.GameState.RUNNING);
};
e.prototype.registerEventHandlers = function() {
i.EventMgr.on(i.EventType.eliminateSand, this.onEliminateSand, this);
i.EventMgr.on(i.EventType.clearBoard, this.onClearBoard, this);
};
e.prototype.initManagers = function() {
d.SandGameController.init();
r.SandBlockPoolUtils.ins.init();
p.SandFlowManager.getInstance().startAllFlows();
};
e.prototype.update = function(e) {
var t;
null === (t = this.stateMgr) || void 0 === t || t.update(e);
};
e.prototype.pause = function() {
var e;
null === (e = this.stateMgr) || void 0 === e || e.changeState(f.GameState.PAUSED);
};
e.prototype.resume = function() {
var e;
null === (e = this.stateMgr) || void 0 === e || e.changeState(f.GameState.RUNNING);
};
e.prototype.isOver = function() {
return this._over;
};
e.prototype.gameOver = function() {
var e;
if (!this._over) {
this._over = !0;
null === (e = this.stateMgr) || void 0 === e || e.changeState(f.GameState.GAME_OVER);
}
};
e.prototype.showGameResultUI = function(e) {
var t, o = this;
void 0 === e && (e = !1);
var a = cc.director.getScene();
!a || cc.isValid(a);
if (s.SandAdManager.instance.shouldShowSettleAd("gameover") && !e) {
n.SandGameMgr.pauseBgm();
this.showSettleAd("gameover", function() {
var e;
i.EventMgr.emit(i.EventType.gameOver);
n.SandGameMgr.playBgm();
null === (e = o.stateMgr) || void 0 === e || e.changeState(f.GameState.GAME_RESULT);
});
} else {
i.EventMgr.emit(i.EventType.gameOver);
null === (t = this.stateMgr) || void 0 === t || t.changeState(f.GameState.GAME_RESULT);
}
};
e.prototype.showSettleAd = function(e, t) {
if (this.stateMgr) {
this.stateMgr.setData("adFromScene", e);
this.stateMgr.setData("adCallback", t);
this.stateMgr.changeState(f.GameState.AD_PLAYING);
}
};
e.prototype.deathGrayEffectFinish = function() {};
e.prototype.restart = function(e) {
var t, n, r, i;
return o(this, void 0, void 0, function() {
var o = this;
return a(this, function() {
if (s.SandAdManager.instance.shouldShowSettleAd(e)) {
null === (t = this.stateMgr) || void 0 === t || t.setData("adFromScene", e);
null === (n = this.stateMgr) || void 0 === n || n.setData("adCallback", function() {
var t;
o.doRestart(e);
null === (t = o.stateMgr) || void 0 === t || t.changeState(f.GameState.RUNNING);
});
null === (r = this.stateMgr) || void 0 === r || r.changeState(f.GameState.AD_PLAYING);
} else {
c.SandLocalData.forceSave();
this.doRestart(e);
null === (i = this.stateMgr) || void 0 === i || i.changeState(f.GameState.RUNNING);
}
return [ 2 ];
});
});
};
e.prototype.doRestart = function() {
n.SandGameMgr.reportGameEnd();
u.GameStatistics.instance.startGame();
this.reset(!1);
i.EventMgr.emit(i.EventType.restart);
};
e.prototype.doRevive = function() {
this.reset(!0);
i.EventMgr.emit(i.EventType.revive);
};
e.prototype.reset = function(e) {
r.SandBlockPoolUtils.ins.newGameRound();
if (!e) {
c.SandLocalData.playingCount++;
c.SandLocalData.roundCount = 0;
this.reportGameStart();
}
this._boxLogic.restart();
this._over = !1;
r.SandBlockPoolUtils.ins.setBoxData([]);
this.clearSavedGameState();
};
e.prototype.saveGameState = function(e) {
void 0 === e && (e = !1);
if (this._over) return !1;
if (e) {
m.hsgame.TimeUtils.clearTimeout(this._doSaveGameState, this);
this._doSaveGameState();
} else {
m.hsgame.TimeUtils.clearTimeout(this._doSaveGameState, this);
m.hsgame.TimeUtils.setTimeout(this._doSaveGameState, this, 1);
}
return !0;
};
e.prototype._doSaveGameState = function() {
if ((!this._over || r.SandBlockPoolUtils.ins) && this._boxLogic) {
c.SandLocalData.snapShot = new g.SandSnapshot(r.SandBlockPoolUtils.ins.getBoxData(), this._boxLogic.getSyncData(!1));
c.SandLocalData.hasSavedGame = !0;
}
};
e.prototype.restoreGameState = function() {
var e, t, n;
try {
if (this.doRestoreGameState()) {
null === (e = this.stateMgr) || void 0 === e || e.changeState(f.GameState.RUNNING);
return !0;
}
null === (t = this.stateMgr) || void 0 === t || t.changeState(f.GameState.RUNNING);
return !1;
} catch (e) {
console.error("[SandGameMgr] 恢复游戏状态发生错误:", e);
null === (n = this.stateMgr) || void 0 === n || n.changeState(f.GameState.RUNNING);
return !1;
}
};
e.prototype.doRestoreGameState = function() {
if (!c.SandLocalData.snapShot) return !1;
try {
var e = c.SandLocalData.snapShot, t = Object.create(g.SandSnapshot.prototype);
t._savedBoxBlocks = e._savedBoxBlocks;
t._savedMap = e._savedMap;
if (!t.checkRestore()) return !1;
l.DeathWarningEffect.instance.checkWarning(this._boxLogic.getEmptyColorsRow());
return !0;
} catch (e) {
console.error("[SandGameMgr] 恢复游戏状态失败:", e);
this.clearSavedGameState();
return !1;
}
};
e.prototype.clearSavedGameState = function() {
c.SandLocalData.snapShot = null;
c.SandLocalData.hasSavedGame = !1;
};
e.prototype.hasSavedGameState = function() {
return c.SandLocalData.hasSavedGame;
};
e.prototype.getBoxLogic = function() {
return this._boxLogic;
};
e.prototype.destroy = function() {
this.unregisterEventHandlers();
this.destroyManagers();
h.SandGameStateManager.destroyStateMachine();
this.stateMgr = null;
this._boxLogic = null;
v.HSUIMgrAdapter.destroy();
};
e.prototype.unregisterEventHandlers = function() {
i.EventMgr.off(i.EventType.eliminateSand, this.onEliminateSand, this);
i.EventMgr.off(i.EventType.clearBoard, this.onClearBoard, this);
};
e.prototype.destroyManagers = function() {
l.DeathWarningEffect.instance.destroy();
d.SandGameController.destroy();
m.hsgame.App.set(m.hsgame.Common.DataKey.adTime, s.SandAdManager.instance.getGamePlayTime());
m.hsgame.App.set(m.hsgame.Common.DataKey.adInterval, c.SandLocalData.adInGameIntervalMoreGame);
s.SandAdManager.instance.hideBanner();
s.SandAdManager.instance.destroy();
};
e.prototype.addRound = function() {
c.SandLocalData.roundCount++;
};
e.prototype.getRound = function() {
return c.SandLocalData.roundCount;
};
e.prototype.onEliminateSand = function(e) {
e && e.sands && this.recordEliminateSand(e.sands.length);
};
e.prototype.onClearBoard = function(e) {
e && e.isCleared && this.recordClearBoard();
};
e.prototype.reportGameStart = function() {
y.HsDataReporter.reportEvent(_.TrackEnum.usr_data_game_start, {
GameType: m.hsgame.App.GameType,
game_id: c.SandLocalData.playingCount
});
};
e.prototype.reportGameEnd = function() {
var e, t, n = u.GameStatistics.instance.getAllStats(), o = {
GameType: m.hsgame.App.GameType,
game_id: c.SandLocalData.playingCount,
round_id: c.SandLocalData.roundCount,
grade: Math.floor(c.SandLocalData.score),
topGrade: Math.floor(c.SandLocalData.highScore),
GameTime: n.gameTime.toString(),
Realtime: n.realTime.toString(),
combo_cnt: c.SandLocalData.comboCount,
max_combo: c.SandLocalData.maxCombo,
count_combo: c.SandLocalData.comboTimes,
clean_all_cnt: n.clearAllCount,
weight: this._boxLogic.getMapCount(),
deadViewGrid: "",
dead_type: n.deadType,
rec_strategy: (null === (e = n.recStrategy) || void 0 === e ? void 0 : e.algoName) || "",
rec_strategy_fact: (null === (t = n.recStrategy) || void 0 === t ? void 0 : t.algoName) || "",
active_waynum: n.activeWaynum,
new_waynum: n.newWaynum
};
y.HsDataReporter.reportEvent(_.TrackEnum.usr_data_game_end, o);
c.SandLocalData.resetGameData();
};
e.prototype.recordEliminateSand = function(e) {
u.GameStatistics.instance.recordCleanArea(e);
};
e.prototype.recordClearBoard = function() {
u.GameStatistics.instance.recordClearAll();
};
e.prototype.uploadHighScore = function() {
m.hsgame.Native.uploadUserData({
gameWayNum: c.SandLocalData.getPlanId(),
user_waynum: c.SandLocalData.getPlanId(),
topGrade: Math.floor(c.SandLocalData.highScore)
});
};
e.prototype.playBgm = function() {
c.SandLocalData.getBgmEnabled() && S.SandUtils.playBGM("bgm");
};
e.prototype.pauseBgm = function() {
m.hsgame.ResourceUtils.pauseBGM();
};
return e;
}();
n.SandGameMgrClass = b;
n.SandGameMgr = new b();
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/module/dataReporter/DataReporter": void 0,
"../UI/DeathWarningEffect": "DeathWarningEffect",
"../config/TrackEnum": "TrackEnum",
"../data/SandGameController": "SandGameController",
"../data/SandLocalData": "SandLocalData",
"../data/SandSnapshot": "SandSnapshot",
"../flow/SandFlowManager": "SandFlowManager",
"../sandLogic/SandBlockPoolUtils": "SandBlockPoolUtils",
"../utils/SandUtils": "SandUtils",
"./EventMgr": "EventMgr",
"./GameStateEnum": "GameStateEnum",
"./GameStatistics": "GameStatistics",
"./HSUIMgrAdapter": "HSUIMgrAdapter",
"./SandAdManager": "SandAdManager",
"./SandGameStateManager": "SandGameStateManager"
} ],
SandGamePlan: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6c48dZNCMpHD5Sddu9t0Acz", "SandGamePlan");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandGamePlan = void 0;
var o = e("../../../../../resources/hsgame/hsgame"), a = e("../../data/SandLocalData"), r = e("./LocalPlanConfig"), i = function() {
function e() {}
e.ins = function() {
this.instance || (this.instance = new e());
return this.instance;
};
e.prototype.initGamePlan = function() {
if ("sand_crush" === o.hsgame.App.RUNTIME_ENV) {
if (!a.SandLocalData.getPlanId()) {
var e = r.getFilteredPlans();
a.SandLocalData.setPlanId(+o.hsgame.MathUtils.randomList(e));
}
o.hsgame.Features.planId = a.SandLocalData.getPlanId();
o.hsgame.Features.planConfig = r.LocalPlan[a.SandLocalData.getPlanId()];
a.SandLocalData.getPlanId(), r.LocalPlan[a.SandLocalData.getPlanId()];
r.LocalPlan;
}
};
e.instance = null;
return e;
}();
n.SandGamePlan = i;
cc._RF.pop();
}, {
"../../../../../resources/hsgame/hsgame": void 0,
"../../data/SandLocalData": "SandLocalData",
"./LocalPlanConfig": "LocalPlanConfig"
} ],
SandGameStateManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a0fb8qs+NVL4qc5rtnXQVBn", "SandGameStateManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandGameStateManager = void 0;
var o = e("./statemachine/StateMachine"), a = e("./GameStateEnum"), r = e("./states/AdPlayingState"), i = e("./states/DeathAnimationState"), c = e("./states/GameOverState"), s = e("./states/GameResultState"), l = e("./states/IdleState"), u = e("./states/InitState"), d = e("./states/PausedState"), p = e("./states/ReviveProcessState"), h = e("./states/ReviveState"), f = e("./states/RunningState"), g = function() {
function e() {
this.stateMachine = null;
}
e.getInstance = function() {
this.instance || (this.instance = new e());
return this.instance;
};
e.initStateMachine = function(e) {
var t = this.getInstance();
t.stateMachine = new o.StateMachine(e);
t.registerStates();
return t.stateMachine;
};
e.prototype.registerStates = function() {
this.stateMachine.registerState(a.GameState.IDLE, new l.default(this.stateMachine));
this.stateMachine.registerState(a.GameState.INIT, new u.InitState(this.stateMachine));
this.stateMachine.registerState(a.GameState.RUNNING, new f.RunningState(this.stateMachine));
this.stateMachine.registerState(a.GameState.PAUSED, new d.PausedState(this.stateMachine));
this.stateMachine.registerState(a.GameState.GAME_OVER, new c.GameOverState(this.stateMachine));
this.stateMachine.registerState(a.GameState.DEATH_ANIMATION, new i.default(this.stateMachine));
this.stateMachine.registerState(a.GameState.REVIVE, new h.ReviveState(this.stateMachine));
this.stateMachine.registerState(a.GameState.REVIVE_PROCESS, new p.ReviveProcessState(this.stateMachine));
this.stateMachine.registerState(a.GameState.AD_PLAYING, new r.default(this.stateMachine));
this.stateMachine.registerState(a.GameState.GAME_RESULT, new s.default(this.stateMachine));
};
e.prototype.getStateMachine = function() {
return this.stateMachine;
};
e.destroyStateMachine = function() {
var e = this.getInstance();
e.stateMachine && (e.stateMachine = null);
this.instance = null;
};
e.instance = null;
return e;
}();
n.SandGameStateManager = g;
cc._RF.pop();
}, {
"./GameStateEnum": "GameStateEnum",
"./statemachine/StateMachine": "StateMachine",
"./states/AdPlayingState": "AdPlayingState",
"./states/DeathAnimationState": "DeathAnimationState",
"./states/GameOverState": "GameOverState",
"./states/GameResultState": "GameResultState",
"./states/IdleState": "IdleState",
"./states/InitState": "InitState",
"./states/PausedState": "PausedState",
"./states/ReviveProcessState": "ReviveProcessState",
"./states/ReviveState": "ReviveState",
"./states/RunningState": "RunningState"
} ],
SandLoadingUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "eefa4U/v3dJD6cRq5t66YkA", "SandLoadingUI");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../../../resources/hsgame/ui/HSUIBase"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadingSpine = null;
return t;
}
t.prototype.enter = function(t) {
e.prototype.enter.call(this, t);
};
t.prototype.start = function() {
this.loadingSpine && this.loadingSpine.setAnimation(0, "init", !0);
};
r([ l(sp.Skeleton) ], t.prototype, "loadingSpine", void 0);
return r([ s ], t);
}(i.default);
n.default = u;
cc._RF.pop();
}, {
"../../../../resources/hsgame/ui/HSUIBase": void 0
} ],
SandLocalData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8ae99eHgl1IULKBa77fhatA", "SandLocalData");
var o = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLocalData = void 0;
var a = e("../../../../resources/hsgame/hsgame"), r = e("../config/FeaturesEnum"), i = e("../config/SandDefines"), c = e("../utils/SandUtils"), s = e("./SandLocalDecorator"), l = function() {
function e() {
this.cacheData = {};
this._saveScheduled = null;
this.version = "";
this.planId = 0;
this.boxDropSpeed = 4;
this.sandStepSpeed = 4;
this.dragScalar = 1.5;
this.genSandColor = 7;
this.isGMModifyColor = !1;
this.rollHeightAry = [ 1 ];
this.boxNearType = i.eSand_BoxNearType.Eight;
this.deadlineHeight = 85;
this.deathWarningDistance = 10;
this.score = 0;
this.snapShot = null;
this.hasSavedGame = !1;
this.highScore = 0;
this.combolimit = 3;
this.curCombo = 0;
this.maxCombo = 0;
this.comboCount = 0;
this.placementCount = 0;
this.HugeEliminationlimit = 800;
this.sandPutScore = .1;
this.sandEliminationScore = .4;
this.blockUnitID = 2;
this.colorAlgoUnitID = 2;
this.triggerAlgoAlgoUnitID = 1;
this.scoreUnlockColor = [ 3e3, 1e4, 2e4, 4e4 ];
this.dampTileAffectRoll = !1;
this.dampPercent = 100;
this.dampNumberAry = [ 10, 25 ];
this.isLogShape = !1;
this.reviveCount = 0;
this.curReviveCount = 0;
this.soundEnabled = !0;
this.sequenceColorPool = [];
this.vibrationEnabled = !0;
this.bgmEnabled = !1;
this.adInGameInterval = 180;
this.adInGameIntervalMoreGame = 90;
this.adSettleInterval = 1;
this.adDebugUIVisible = !0;
this.playingCount = 1;
this.timeScale = 1;
this.isLastGameOver = !1;
this.firstInstallTime = 0;
this.hasTriggeredHighScore = !1;
this.clearSandEffectDelayTime = .7;
this.clearSandEffectDelayTimeBig = 1;
this.motivationDelays = [ .3, .7, 1, 1 ];
this.blocksize = 8;
this.sandTileColorType = i.SandTileColorType.two;
this.isFirstInToGame = !0;
this.closeCalCheat = !1;
this.comboTimes = 0;
this.hasRevive3000InRound = !1;
this.hasRevive80PercentInRound = !1;
this.cheatCount = 0;
this.roundCount = 0;
this.gameData = {
cleanAllCount: 0,
offlineTime: 0
};
}
e.prototype.getPlanId = function() {
return this.planId;
};
e.prototype.setPlanId = function(e) {
this.planId = e;
};
e.prototype.getSoundEnabled = function() {
return this.soundEnabled;
};
e.prototype.setSoundEnabled = function(e) {
this.soundEnabled = e;
};
e.prototype.getVibrationEnabled = function() {
return this.vibrationEnabled;
};
e.prototype.setVibrationEnabled = function(e) {
this.vibrationEnabled = e;
};
e.prototype.getBgmEnabled = function() {
return this.bgmEnabled;
};
e.prototype.setBgmEnabled = function(e) {
this.bgmEnabled = e;
};
Object.defineProperty(e.prototype, "lastActiveTime", {
get: function() {
return cc.sys.localStorage.getItem("lastActiveTime") ? parseInt(cc.sys.localStorage.getItem("lastActiveTime")) : 0;
},
set: function(e) {
cc.sys.localStorage.setItem("lastActiveTime", e.toString());
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
var e = cc.sys.localStorage.getItem("sand_blast");
this.cacheData = "" == e || "undefined" == e || null == e || null == e ? {} : JSON.parse(e);
if (this.version !== i.GAME_VERSION) {
this.version = i.GAME_VERSION;
this.hasSavedGame = !1;
}
if (0 === this.firstInstallTime) {
this.firstInstallTime = Date.now();
this.firstInstallTime;
}
null === this.lastActiveTime && (this.gameData.offlineTime = 0);
n.SandLocalData.gameData.realBeginTime = Date.now();
};
e.prototype.resetGameData = function() {
this.gameData = {
cleanAllCount: 0,
offlineTime: 0
};
};
e.prototype.GetData = function(e) {
return this.cacheData[e];
};
e.prototype.SetData = function(e, t) {
this.cacheData[e] = t;
this.lazyCache();
};
e.prototype.lazyCache = function() {
if (!this._saveScheduled) {
var e = cc.director.getScene();
if (e && cc.isValid(e)) {
this._saveScheduled = this.immediatelyCache.bind(this);
cc.director.getScheduler().schedule(this._saveScheduled, e, 1, 0, 0, !1);
} else this.immediatelyCache();
}
};
e.prototype.immediatelyCache = function() {
this._saveScheduled = null;
var e = JSON.stringify(this.cacheData);
cc.sys.localStorage.setItem("sand_blast", e);
};
e.prototype.forceSave = function() {
if (this._saveScheduled) {
var e = cc.director.getScene();
e && cc.isValid(e) && cc.director.getScheduler().unschedule(this._saveScheduled, e);
this._saveScheduled = null;
}
this.immediatelyCache();
};
e.prototype.cleanup = function() {
if (this._saveScheduled) {
var e = cc.director.getScene();
e && cc.isValid(e) && cc.director.getScheduler().unschedule(this._saveScheduled, e);
this._saveScheduled = null;
}
};
e.prototype.handleFeatures = function() {
this.blockUnitID = a.hsgame.Features.intFeature(r.FeaturesEnum.scorerateUnitID);
0 === this.blockUnitID && (this.blockUnitID = 3);
this.colorAlgoUnitID = a.hsgame.Features.intFeature(r.FeaturesEnum.sandalgoUnitID);
0 === this.colorAlgoUnitID && (this.colorAlgoUnitID = 2);
this.triggerAlgoAlgoUnitID = a.hsgame.Features.intFeature(r.FeaturesEnum.triggeralgoUnitID);
0 === this.triggerAlgoAlgoUnitID && (this.triggerAlgoAlgoUnitID = 1);
a.hsgame.Features.intFeature(r.FeaturesEnum.huge_eliminate) > 0 && (this.HugeEliminationlimit = a.hsgame.Features.intFeature(r.FeaturesEnum.huge_eliminate));
if (a.hsgame.Features.objFeature(r.FeaturesEnum.long_term_color)) {
var e = [];
(t = a.hsgame.Features.objFeature(r.FeaturesEnum.long_term_color)).forEach(function(t) {
e.push(+t);
});
this.scoreUnlockColor = e;
} else this.scoreUnlockColor = [ 5e4, 1e5, 25e4, 5e5 ];
if (a.hsgame.Features.objFeature(r.FeaturesEnum.roll_array)) {
var t = a.hsgame.Features.objFeature(r.FeaturesEnum.roll_array);
this.rollHeightAry = t.map(Number);
} else this.rollHeightAry = [ 1 ];
if (a.hsgame.Features.boolFeature(r.FeaturesEnum.damp_open)) {
this.dampTileAffectRoll = !0;
this.dampPercent = 100;
this.dampNumberAry = [ 5, 10 ];
} else {
this.dampTileAffectRoll = !1;
this.dampPercent = 100;
this.dampNumberAry = [ 10, 25 ];
}
a.hsgame.Features.intFeature(r.FeaturesEnum.blocksize) > 0 ? this.blocksize = a.hsgame.Features.intFeature(r.FeaturesEnum.blocksize) : this.blocksize = 8;
c.SandUtils.isNeonSkin() ? this.sandTileColorType = i.SandTileColorType.three : this.sandTileColorType = i.SandTileColorType.two;
a.hsgame.Features.boolFeature(r.FeaturesEnum.cheat_close) ? this.closeCalCheat = !0 : this.closeCalCheat = !1;
a.hsgame.Features.intFeature(r.FeaturesEnum.box_drop_speed) > 0 ? this.boxDropSpeed = a.hsgame.Features.intFeature(r.FeaturesEnum.box_drop_speed) : this.boxDropSpeed = 4;
a.hsgame.Features.intFeature(r.FeaturesEnum.sand_step_speed) > 0 ? this.sandStepSpeed = a.hsgame.Features.intFeature(r.FeaturesEnum.sand_step_speed) : this.sandStepSpeed = 4;
a.hsgame.Features.intFeature(r.FeaturesEnum.dead_line_Height) > 0 ? n.SandLocalData.deadlineHeight = a.hsgame.Features.intFeature(r.FeaturesEnum.dead_line_Height) : n.SandLocalData.deadlineHeight = 85;
n.SandLocalData.clearSandEffectDelayTime = .7;
n.SandLocalData.clearSandEffectDelayTimeBig = 1;
};
o([ s.SandLocalStorage() ], e.prototype, "version", void 0);
o([ s.SandLocalStorage() ], e.prototype, "planId", void 0);
o([ s.SandLocalStorage() ], e.prototype, "boxDropSpeed", void 0);
o([ s.SandLocalStorage() ], e.prototype, "sandStepSpeed", void 0);
o([ s.SandLocalStorage() ], e.prototype, "dragScalar", void 0);
o([ s.SandLocalStorage() ], e.prototype, "genSandColor", void 0);
o([ s.SandLocalStorage() ], e.prototype, "isGMModifyColor", void 0);
o([ s.SandLocalStorage() ], e.prototype, "rollHeightAry", void 0);
o([ s.SandLocalStorage() ], e.prototype, "boxNearType", void 0);
o([ s.SandLocalStorage() ], e.prototype, "deadlineHeight", void 0);
o([ s.SandLocalStorage() ], e.prototype, "deathWarningDistance", void 0);
o([ s.SandLocalStorage() ], e.prototype, "score", void 0);
o([ s.SandLocalStorage() ], e.prototype, "snapShot", void 0);
o([ s.SandLocalStorage() ], e.prototype, "hasSavedGame", void 0);
o([ s.SandLocalStorage() ], e.prototype, "highScore", void 0);
o([ s.SandLocalStorage() ], e.prototype, "combolimit", void 0);
o([ s.SandLocalStorage() ], e.prototype, "curCombo", void 0);
o([ s.SandLocalStorage() ], e.prototype, "maxCombo", void 0);
o([ s.SandLocalStorage() ], e.prototype, "comboCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "placementCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "HugeEliminationlimit", void 0);
o([ s.SandLocalStorage() ], e.prototype, "sandPutScore", void 0);
o([ s.SandLocalStorage() ], e.prototype, "sandEliminationScore", void 0);
o([ s.SandLocalStorage() ], e.prototype, "blockUnitID", void 0);
o([ s.SandLocalStorage() ], e.prototype, "colorAlgoUnitID", void 0);
o([ s.SandLocalStorage() ], e.prototype, "triggerAlgoAlgoUnitID", void 0);
o([ s.SandLocalStorage() ], e.prototype, "scoreUnlockColor", void 0);
o([ s.SandLocalStorage() ], e.prototype, "dampTileAffectRoll", void 0);
o([ s.SandLocalStorage() ], e.prototype, "dampPercent", void 0);
o([ s.SandLocalStorage() ], e.prototype, "dampNumberAry", void 0);
o([ s.SandLocalStorage() ], e.prototype, "isLogShape", void 0);
o([ s.SandLocalStorage() ], e.prototype, "reviveCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "curReviveCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "soundEnabled", void 0);
o([ s.SandLocalStorage() ], e.prototype, "sequenceColorPool", void 0);
o([ s.SandLocalStorage() ], e.prototype, "vibrationEnabled", void 0);
o([ s.SandLocalStorage() ], e.prototype, "bgmEnabled", void 0);
o([ s.SandLocalStorage() ], e.prototype, "adInGameInterval", void 0);
o([ s.SandLocalStorage() ], e.prototype, "adInGameIntervalMoreGame", void 0);
o([ s.SandLocalStorage() ], e.prototype, "adSettleInterval", void 0);
o([ s.SandLocalStorage() ], e.prototype, "adDebugUIVisible", void 0);
o([ s.SandLocalStorage() ], e.prototype, "playingCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "timeScale", void 0);
o([ s.SandLocalStorage() ], e.prototype, "isLastGameOver", void 0);
o([ s.SandLocalStorage() ], e.prototype, "firstInstallTime", void 0);
o([ s.SandLocalStorage() ], e.prototype, "hasTriggeredHighScore", void 0);
o([ s.SandLocalStorage() ], e.prototype, "clearSandEffectDelayTime", void 0);
o([ s.SandLocalStorage() ], e.prototype, "clearSandEffectDelayTimeBig", void 0);
o([ s.SandLocalStorage() ], e.prototype, "motivationDelays", void 0);
o([ s.SandLocalStorage() ], e.prototype, "blocksize", void 0);
o([ s.SandLocalStorage() ], e.prototype, "sandTileColorType", void 0);
o([ s.SandLocalStorage() ], e.prototype, "isFirstInToGame", void 0);
o([ s.SandLocalStorage() ], e.prototype, "closeCalCheat", void 0);
o([ s.SandLocalStorage() ], e.prototype, "comboTimes", void 0);
o([ s.SandLocalStorage() ], e.prototype, "hasRevive3000InRound", void 0);
o([ s.SandLocalStorage() ], e.prototype, "hasRevive80PercentInRound", void 0);
o([ s.SandLocalStorage() ], e.prototype, "cheatCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "roundCount", void 0);
o([ s.SandLocalStorage() ], e.prototype, "gameData", void 0);
return e;
}();
n.SandLocalData = new l();
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../config/FeaturesEnum": "FeaturesEnum",
"../config/SandDefines": "SandDefines",
"../utils/SandUtils": "SandUtils",
"./SandLocalDecorator": "SandLocalDecorator"
} ],
SandLocalDecorator: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "977f0eQdWxElameKhzkkAek", "SandLocalDecorator");
var o = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, r = n.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (a) throw a.error;
}
}
return i;
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLocalStorage = void 0;
var r = e("./SandLocalData");
n.SandLocalStorage = function(e) {
var t = {};
return function(n, o) {
var i = e || n.constructor.name + "_" + o, c = "_" + o, s = n.constructor;
n.constructor = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
var n = new (s.bind.apply(s, a([ void 0 ], e)))(), o = r.SandLocalData.GetData(i);
null != o && (n[c] = o);
return n;
};
n.constructor.prototype = s.prototype;
Object.defineProperty(n, o, {
get: function() {
var e = r.SandLocalData.GetData(i);
return null != e ? e : this[c];
},
set: function(e) {
this[c] = e;
if (t[i]) try {
r.SandLocalData.SetData(i, e);
} catch (e) {
console.error("本地存储保存失败:", e);
} else {
t[i] = !0;
this[c] = e;
}
},
enumerable: !0,
configurable: !0
});
};
};
cc._RF.pop();
}, {
"./SandLocalData": "SandLocalData"
} ],
SandLogicEvent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b92879qHChGbY4mQIx347By", "SandLogicEvent");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLogicEvent = n.SandLogicEventEnum = void 0;
var o, a = e("../data/SandGameController"), r = e("../mgr/EventMgr"), i = e("../mgr/EventMgr"), c = e("../mgr/SandGameMgr"), s = e("../UI/DeathWarningEffect"), l = e("../utils/SandSoundUtils"), u = e("../utils/SandUtils");
(function(e) {
e.BoxPutSuccess = "boxPutSuccess";
e.BoxPutFail = "boxPutFail";
e.BoxToMap = "boxToMap";
e.MapDropStart = "mapDropStart";
e.MapDropEnd = "mapDropEnd";
e.ClearSandStart = "ClearSandStart";
e.ClearSandEnd = "ClearSandEnd";
e.MapStable = "mapStable";
e.GameLogicOver = "gameLogicOver";
})(o = n.SandLogicEventEnum || (n.SandLogicEventEnum = {}));
var d = function() {
function e() {
this.seed = 0;
}
e.prototype.doEvent = function(e, t) {
switch (e) {
case o.BoxToMap:
this.onBoxToMap(t);
break;

case o.BoxPutSuccess:
this.onBoxPutSuccess();
break;

case o.BoxPutFail:
this.onBoxPutFail();
break;

case o.MapStable:
this.onMapStable(t);
break;

case o.ClearSandStart:
this.onClearSandStart(t);
break;

case o.ClearSandEnd:
this.onClearSandFinish(t);
break;

case o.MapDropStart:
this.onMapDropStart();
break;

case o.MapDropEnd:
this.onMapDropEnd();
break;

case o.GameLogicOver:
this.onGameLogicOver();
}
};
e.prototype.onBoxToMap = function(e) {
r.EventMgr.emit(i.EventType.placeSand, {
sandCount: e.placedSandCount
});
r.EventMgr.emit(i.EventType.drawBoxSand);
};
e.prototype.onBoxPutSuccess = function() {};
e.prototype.onBoxPutFail = function() {
r.EventMgr.emit(i.EventType.drawDragSand);
};
e.prototype.onMapStable = function(e) {
!1 === e.isFirst && r.EventMgr.emit(i.EventType.drawMapSand);
a.SandGameController.endChainElimination();
c.SandGameMgr.saveGameState();
s.DeathWarningEffect.instance.checkWarning(e.emptyColorsRow);
};
e.prototype.onClearSandStart = function(e) {
r.EventMgr.emit(i.EventType.eliminateSand, {
sands: e.points
});
r.EventMgr.emit(i.EventType.clearSand, e.clearSands);
u.SandUtils.shake();
};
e.prototype.onClearSandFinish = function(e) {
0 === e.mapCount && r.EventMgr.emit(i.EventType.clearBoard, {
isCleared: !0
});
a.SandGameController.calcCheatCount();
};
e.prototype.onMapDropStart = function() {
l.SandSoundUtils.playEffectOnce(l.SAND_SOUND_EFFECT.SAND_POUR);
};
e.prototype.onMapDropEnd = function() {
l.SandSoundUtils.stopEffect(l.SAND_SOUND_EFFECT.SAND_POUR);
};
e.prototype.onGameLogicOver = function() {
c.SandGameMgr.gameOver();
};
return e;
}();
n.SandLogicEvent = d;
cc._RF.pop();
}, {
"../UI/DeathWarningEffect": "DeathWarningEffect",
"../data/SandGameController": "SandGameController",
"../mgr/EventMgr": "EventMgr",
"../mgr/SandGameMgr": "SandGameMgr",
"../utils/SandSoundUtils": "SandSoundUtils",
"../utils/SandUtils": "SandUtils"
} ],
SandLogicHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5de971YNoxB15ciQrOZLgqM", "SandLogicHelper");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLogicHelper = void 0;
var i = e("../mgr/SandGameMgr"), c = e("./SandMapHelper"), s = e("./SandObjectPoolFactory"), l = e("../config/SandDefines"), u = e("../data/SandLocalData"), d = e("../config/SandDefines"), p = e("./SandLogicSimulate"), h = function() {
function e() {}
e.prototype.getBlocksByColor = function(e) {
for (var t = [], n = i.SandGameMgr.getBoxLogic().getMapSands(), o = 0; o < n.length; o++) for (var a = n[o], r = 0; r < a.length; r++) {
var c = a[r];
c && c.color === e && t.push(c);
}
return t;
};
e.prototype.getMapColors = function() {
for (var e = [], t = i.SandGameMgr.getBoxLogic().getMapSands(), n = 0; n < t.length; n++) for (var o = t[n], a = 0; a < o.length; a++) {
var r = o[a];
r && !e.includes(r.color) && e.push(r.color);
}
return e;
};
e.prototype.getTop1And2Colors = function() {
return o(this, void 0, void 0, function() {
var e, t, n, o, r;
return a(this, function(a) {
switch (a.label) {
case 0:
return [ 4, p.SandLogicSimulate.getMap() ];

case 1:
e = a.sent();
t = p.SandLogicSimulate.getMapClone();
n = [];
o = this.getTopColors(e, n);
this.clearPointsInAry(e, n);
r = this.getTopColors(e, null, !0);
return [ 2, {
top1: o,
top2: r,
maps: t
} ];
}
});
});
};
e.prototype.getTopColors = function(e, t, n) {
void 0 === t && (t = null);
void 0 === n && (n = !1);
for (var o = {
none: 0
}, a = e.length - 1, r = 0; r < c.SandMapHelper.maxCol; r++) {
var i = this.getColTopItemRow(e, a, r);
a = n ? e.length - 1 : i;
if (e.length > 0 && e[i][r]) {
var s = e[i][r].color;
o[s] ? o[s]++ : o[s] = 1;
t && t.push(cc.v3(i, r));
} else o.none++;
}
return o;
};
e.prototype.getTopColorPoints = function(e, t) {
for (var n = [], o = 0, a = 0; a < c.SandMapHelper.maxCol; a++) {
var r = this.getColTopItemRow(e, o, a);
o = r;
e.length > 0 && e[r][a] && t === e[r][a].color && n.push(cc.v3(r, a));
}
return n;
};
e.prototype.getPeakCount = function(e) {
if (0 === e.length) return 0;
for (var t = 0, n = [], o = 0; o < c.SandMapHelper.maxCol; o++) {
var a = this.getColTopItemRow(e, t, o);
t = a;
0 === n.length ? n.push(a) : n[n.length - 1] !== a && n.push(a);
}
if (n.length <= 2) return 0;
var r = n[1] > n[0], i = [];
i.push(n[0]);
for (var s = 0; s < n.length - 1; ++s) if (r) {
if (n[s + 1] < n[s]) {
i.push(n[s]);
r = !1;
}
} else if (n[s + 1] > n[s]) {
i.push(n[s]);
r = !0;
}
i.push(n[n.length - 1]);
var l = 0;
for (s = 0; s < i.length; ++s) 0 === s ? i[s] - i[s + 1] >= 5 && l++ : s === i.length - 1 ? i[s] - i[s - 1] >= 5 && l++ : 1 === s ? i[s] - i[s + 1] >= 5 && l++ : s === i.length - 2 ? i[s] - i[s - 1] >= 5 && l++ : i[s] - i[s + 1] >= 5 && i[s] - i[s - 1] >= 5 && l++;
return l;
};
e.prototype.getColTopItemRow = function(e, t, n) {
if (0 === e.length) return t;
if (e[t][n]) {
for (;t < e.length && e[t][n]; ) t++;
return t - 1;
}
for (;t > 0 && !e[t][n]; ) t--;
return t;
};
e.prototype.clearPointsInAry = function(e, t) {
c.SandMapHelper.logShape(e);
if (0 !== e.length && 0 !== t.length) {
for (var n = Array.from({
length: e.length
}, function() {
return Array(e[0].length).fill(!1);
}), o = 0; o < t.length; o++) {
var a = t[o];
n[a.x][a.y] || this.clearPointInAry(e, a.x, a.y, n);
}
c.SandMapHelper.logShape(e);
}
};
e.prototype.clearPointInAry = function(e, t, n, o) {
var a = e.length, i = e[0].length, c = l.Four_Direction;
u.SandLocalData.boxNearType == d.eSand_BoxNearType.Eight && (c = l.Eight_Direction);
function p(e, t) {
return t >= 0 && e >= 0 && t < i && e < a;
}
if (!p(t, n)) throw new Error("Start coordinates are out of bounds");
(function(t, n, a) {
for (var i, l, u = [ new cc.Vec3(t, n) ]; u.length > 0; ) {
var d = u.pop();
if (!o[d.x][d.y]) {
o[d.x][d.y] = !0;
s.SandObjectPoolFactory.ins.recycle(e[d.x][d.y]);
e[d.x][d.y] = null;
try {
for (var h = (i = void 0, r(c)), f = h.next(); !f.done; f = h.next()) {
var g = f.value, S = d.add(g);
p(S.x, S.y) && !o[S.x][S.y] && e[S.x][S.y] && e[S.x][S.y].color === a && u.push(S);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
f && !f.done && (l = h.return) && l.call(h);
} finally {
if (i) throw i.error;
}
}
}
}
})(t, n, e[t][n].color);
};
return e;
}();
n.SandLogicHelper = new h();
cc._RF.pop();
}, {
"../config/SandDefines": "SandDefines",
"../data/SandLocalData": "SandLocalData",
"../mgr/SandGameMgr": "SandGameMgr",
"./SandLogicSimulate": "SandLogicSimulate",
"./SandMapHelper": "SandMapHelper",
"./SandObjectPoolFactory": "SandObjectPoolFactory"
} ],
SandLogicRandomSeed: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8e54fO/bnVNqZF3CkEOky1d", "SandLogicRandomSeed");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLogicRandomSeed = void 0;
var o = function() {
function e() {
this.seed = 0;
this.seed = Date.now();
}
e.prototype.setSeed = function(e) {
this.seed = e;
};
e.prototype.getSeed = function() {
return this.seed;
};
e.prototype.xorshift = function(e) {
e ^= e << 13;
return (e ^= e >>> 17) ^ e << 5;
};
e.prototype.random = function() {
this.seed = this.xorshift(this.seed);
return (this.seed >>> 0) / 4294967296;
};
e.prototype.randomInt = function(e, t) {
var n = t - e + 1, o = this.random();
return Math.floor(o * n) + e;
};
e.prototype.randomFloat = function(e, t) {
return this.random() * (t - e) + e;
};
e.prototype.randomListSeed = function(e) {
return e && 0 !== e.length ? e[this.randomInt(0, e.length - 1)] : null;
};
return e;
}();
n.SandLogicRandomSeed = o;
cc._RF.pop();
}, {} ],
SandLogicSimulate: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dfa88r4z0NMEYlpmIRuO1Fl", "SandLogicSimulate");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLogicSimulate = void 0;
var r = e("../../../../resources/hsgame/hsgame"), i = e("../mgr/SandGameMgr"), c = e("./SandLogic"), s = e("./SandMapHelper"), l = e("./SandObjectPoolFactory"), u = function() {
function e() {}
e.init = function() {
this._sandPureLogicLogic = new c.SandLogic(!0);
};
e.syncData = function() {
var e = i.SandGameMgr.getBoxLogic(), t = this._sandPureLogicLogic, n = e.getSyncData(!0);
t.setSyncData(n);
};
e.getMap = function() {
return o(this, void 0, void 0, function() {
var e, t, n, o, i, c, l;
return a(this, function(a) {
switch (a.label) {
case 0:
this._isOverTime = !1;
Date.now();
if (!(e = this._sandPureLogicLogic)) {
this._map = [];
return [ 2, [] ];
}
t = 0;
a.label = 1;

case 1:
return e.isAllStable() ? [ 3, 4 ] : 1 != (1 & ++t) ? [ 3, 3 ] : [ 4, r.hsgame.TimeUtils.nextFrame() ];

case 2:
a.sent();
a.label = 3;

case 3:
e.logicUpdate();
if (t > 500) {
this._isOverTime = !0;
console.error("模拟逻辑超时", e._boxSands.length, e.isDroping, e.clearing);
return [ 3, 4 ];
}
return [ 3, 1 ];

case 4:
Date.now();
n = e.getMapSands();
o = e.getEmptyColorsRow();
i = Array.from({
length: o
}, function() {
return Array(s.SandMapHelper.maxCol).fill(null);
});
for (c = 0; c < o; c++) {
l = n[c];
i[c] = l;
}
this._map = i;
s.SandMapHelper.logShape(i);
return [ 2, i ];
}
});
});
};
e.getMapClone = function() {
for (var e = Array.from({
length: this._map.length
}, function() {
return Array(s.SandMapHelper.maxCol).fill(null);
}), t = 0; t < this._map.length; t++) for (var n = this._map[t], o = 0; o < n.length; o++) {
var a = n[o];
if (a) {
var r = l.SandObjectPoolFactory.ins.get();
r.row = t;
r.col = o;
r.color = a.color;
e[t][o] = r;
}
}
return e;
};
e.getMapCount = function() {
return this._sandPureLogicLogic.getMapCount();
};
e.isOverTime = function() {
return this._isOverTime;
};
e._map = null;
e._sandPureLogicLogic = null;
e._isOverTime = !1;
return e;
}();
n.SandLogicSimulate = u;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../mgr/SandGameMgr": "SandGameMgr",
"./SandLogic": "SandLogic",
"./SandMapHelper": "SandMapHelper",
"./SandObjectPoolFactory": "SandObjectPoolFactory"
} ],
SandLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "01fd4SgraNFfrNMUoMjRgPs", "SandLogic");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandLogic = void 0;
var i = e("../config/SandDefines"), c = e("../data/SandLocalData"), s = e("./SandMapHelper"), l = e("./SandObjectPoolFactory"), u = e("../../../../resources/hsgame/hsgame"), d = e("./SandLogicRandomSeed"), p = e("./AntContourTracer"), h = e("./SandLogicEvent"), f = e("../config/FeaturesEnum"), g = function() {
function e(e) {
this._dragSands = [];
this._boxSands = [];
this._boxWidth = 0;
this._boxHeight = 0;
this._curPos = cc.v3(0, 0, 0);
this._mapSands = [];
this._clearSands = [];
this.stepFrames = 0;
this.boxFrames = 0;
this.emptyColorsRow = -1;
this.isDroping = !1;
this.clearing = !1;
this.needCheckAfterClear = !1;
this._rollHeightAllAry = [];
this.mapCount = 0;
this.isPureLogic = !1;
this.logicEvent = null;
this.activated = !1;
this.nonStableRow = 0;
this.isPureLogic = e;
this.randSeed = new d.SandLogicRandomSeed();
if (!1 === e) {
this.logicEvent = new h.SandLogicEvent();
window.logiccc = this;
}
this.restart();
}
e.prototype.update = function() {
if (this.isActive() && !this.clearing) {
this.logicUpdate();
this.checkLogicOver();
}
};
e.prototype.activate = function() {
this.activated = !0;
};
e.prototype.deactivate = function() {
this.activated = !1;
};
e.prototype.isActive = function() {
return this.activated;
};
e.prototype.logicUpdate = function() {
++this.boxFrames;
if (this.boxFrames >= 1) {
this.boxFrames = 0;
for (var e = 0; e < c.SandLocalData.boxDropSpeed && this.boxStep(); e++) ;
}
++this.stepFrames;
if (this.stepFrames >= 1) {
this.stepFrames = 0;
for (e = 0; e < c.SandLocalData.sandStepSpeed; e++) if (this.isPureLogic) {
if (this.isMapStable()) break;
this.mapStep(0 === e);
} else {
if (this.isMapStable() || this.clearing) break;
this.mapStep(0 === e);
}
}
};
e.prototype.restart = function() {
this.isDroping = !1;
this.clearing = !1;
this._dragSands = [];
this._boxSands = [];
this._curPos = cc.v3(0, 0, 0);
this._mapSands = Array.from({
length: s.SandMapHelper.maxRow
}, function() {
return Array(s.SandMapHelper.maxCol).fill(null);
});
this.sandsVisited = Array.from({
length: s.SandMapHelper.maxRow
}, function() {
return Array(s.SandMapHelper.maxCol).fill(!1);
});
this.emptyColorsRow = -1;
this.mapCount = 0;
this.nonStableRow = 0;
};
e.prototype.isMapStable = function() {
return !1 === this.isDroping && !1 === this.clearing && !1 === this.needCheckAfterClear;
};
e.prototype.isAllStable = function() {
return this.isMapStable() && 0 === this._boxSands.length;
};
e.prototype.genBox = function(e, t) {
this._boxWidth = e[0].length * i.SIZE_SAND;
this._boxHeight = e.length * i.SIZE_SAND;
t.x -= this._boxWidth / 2;
t.y -= this._boxHeight / 2;
for (var n = Array.from({
length: e.length
}, function() {
return Array(e[0].length).fill(null);
}), o = 0; o < e.length; o++) for (var a = 0; a < e[o].length; a++) if (e[o][a]) {
var r = s.SandMapHelper.getPos(o, a), c = l.SandObjectPoolFactory.ins.get();
c.row = o;
c.col = a;
c.x = r.x + t.x;
c.y = r.y + t.y;
c.color = e[o][a].color;
c.isDamp = e[o][a].isDamp;
c.dampColor = e[o][a].dampColor;
n[o][a] = c;
}
this._dragSands = n;
this._curPos = t;
};
e.prototype.hasBoxData = function() {
return this._boxSands.length > 0;
};
e.prototype.hasDragData = function() {
return this._dragSands.length > 0;
};
e.prototype.getDragSands = function() {
return this._dragSands;
};
e.prototype.getBoxSands = function() {
return this._boxSands;
};
e.prototype.getMapSands = function() {
return this._mapSands;
};
e.prototype.moveBoxDelta = function(e) {
var t = this._curPos.add(e);
t.x < 0 && (t.x = 0);
t.x > s.SandMapHelper.contentWidth - this._boxWidth && (t.x = s.SandMapHelper.contentWidth - this._boxWidth);
t.y > s.SandMapHelper.contentHeight - this._boxHeight && (t.y = s.SandMapHelper.contentHeight - this._boxHeight);
this._curPos = t;
for (var n = 0; n < this._dragSands.length; n++) for (var o = 0; o < this._dragSands[n].length; o++) {
var a = this._dragSands[n][o];
if (a) {
var r = s.SandMapHelper.getPos(n, o);
a.x = r.x + this._curPos.x;
a.y = r.y + this._curPos.y;
}
}
};
e.prototype.checkPutBox = function() {
for (var e = this, t = 0; t < this._dragSands.length; t++) for (var n = 0; n < this._dragSands[t].length; n++) if ((o = this._dragSands[t][n]) && (!(a = s.SandMapHelper.getPoint(o.x, o.y)) || this._mapSands[a.x][a.y])) {
this._dragSands = [];
this._boxWidth = 0;
this._boxHeight = 0;
this._curPos = new cc.Vec3(0, 0, 0);
this.doLogicEvent(h.SandLogicEventEnum.BoxPutFail);
return !1;
}
this._boxSands = Array.from({
length: this._dragSands.length
}, function() {
return Array(e._dragSands[0].length).fill(null);
});
for (t = 0; t < this._dragSands.length; t++) for (n = 0; n < this._dragSands[t].length; n++) {
var o;
if (o = this._dragSands[t][n]) {
var a = s.SandMapHelper.getPoint(o.x, o.y);
o.row = a.x;
o.col = a.y;
var r = s.SandMapHelper.getPos(o.row, o.col);
o.x = r.x;
o.y = r.y;
this._boxSands[t][n] = o;
}
}
this._dragSands = [];
this.doLogicEvent(h.SandLogicEventEnum.BoxPutSuccess);
return !0;
};
e.prototype.boxStep = function() {
if (0 === this._boxSands.length) return !1;
for (var e = 0; e < this._boxSands.length; e++) for (var t = 0; t < this._boxSands[e].length; t++) if (n = this._boxSands[e][t]) {
if (o = s.SandMapHelper.downPoint(n.row, n.col)) {
if (this.getSand(o.x, o.y)) {
this.boxToMap();
return !1;
}
continue;
}
this.boxToMap();
return !1;
}
for (e = 0; e < this._boxSands.length; e++) for (t = 0; t < this._boxSands[e].length; t++) {
var n;
if (n = this._boxSands[e][t]) {
var o = s.SandMapHelper.downPoint(n.row, n.col);
n.row = o.x;
n.col = o.y;
var a = s.SandMapHelper.getPos(n.row, n.col);
n.x = a.x;
n.y = a.y;
}
}
return !0;
};
e.prototype.boxToMap = function() {
for (var e = s.SandMapHelper.maxCol, t = -1, n = 0, o = 0; o < this._boxSands.length; o++) for (var a = 0; a < this._boxSands[o].length; a++) {
var r = this._boxSands[o][a];
if (r) {
this.setSand(r.row, r.col, r);
r.col < e && (e = r.col);
r.col > t && (t = r.col);
n++;
}
}
this.mapCount += n;
if (!1 === this.isDroping) {
for (var i = e + Math.ceil((t - e) / 2), l = 0; l < s.SandMapHelper.maxCol; l++) {
this._rollHeightAllAry[i % s.SandMapHelper.maxCol] = c.SandLocalData.rollHeightAry[l % c.SandLocalData.rollHeightAry.length];
i++;
}
this._rollHeightAllAry;
}
this.setDrop(!0);
this._boxSands = [];
this.doLogicEvent(h.SandLogicEventEnum.BoxToMap, {
placedSandCount: n
});
};
e.prototype.getSand = function(e, t) {
return s.SandMapHelper.checkPoint(e, t) ? this._mapSands[e][t] : null;
};
e.prototype.setSand = function(e, t, n) {
if (!s.SandMapHelper.checkPoint(e, t)) return null;
if (null !== n) {
n.row = e;
n.col = t;
n.movable = !0;
this._mapSands[e][t] = n;
} else {
l.SandObjectPoolFactory.ins.recycle(this._mapSands[e][t]);
this._mapSands[e][t] = null;
}
};
e.prototype.checkLogicOver = function() {
this._boxSands.length > 0 || this.isDroping || this.clearing || this.emptyColorsRow <= c.SandLocalData.deadlineHeight || this.doLogicEvent(h.SandLogicEventEnum.GameLogicOver);
};
e.prototype.mapStep = function(e) {
this.needCheckAfterClear = !1;
this.calcEmptyRowCount();
for (var t = !1, n = this.nonStableRow; n < this.emptyColorsRow; n++) {
for (var o = this._mapSands[n], a = !0, r = 0; r < o.length; r++) o[r] ? this.sandDownMove(o[r]) && (t = !0) : a = !1;
a && this.nonStableRow === n && this.nonStableRow++;
}
this.setDrop(t);
if (!1 === t) {
var i = this.getCommonColorSands();
this.checkSandpile(i);
if (!1 === this.clearing) {
this.isPureLogic || this.deactivateMapSands();
this.doLogicEvent(h.SandLogicEventEnum.MapStable, {
emptyColorsRow: this.emptyColorsRow,
isFirst: e
});
}
}
};
e.prototype.setDrop = function(e) {
if (this.isDroping !== e) {
this.isDroping = e;
e ? this.doLogicEvent(h.SandLogicEventEnum.MapDropStart) : this.doLogicEvent(h.SandLogicEventEnum.MapDropEnd);
}
};
e.prototype.getCommonColorSands = function() {
this.leftSandCtrls = [];
this.rightSandCtrls = [];
for (var e = 0; e < this.emptyColorsRow; e++) {
var t = this._mapSands[e];
this.calcRowColors(t);
}
var n = [];
if (this.leftSandCtrls.length < this.rightSandCtrls.length) for (var o = 0; o < this.leftSandCtrls.length; o++) for (var a = this.leftSandCtrls[o], r = 0; r < this.rightSandCtrls.length; r++) {
var i = this.rightSandCtrls[r];
if (a.color === i.color) {
n.push(a);
break;
}
} else for (o = 0; o < this.rightSandCtrls.length; o++) for (i = this.rightSandCtrls[o], 
r = 0; r < this.leftSandCtrls.length; r++) {
a = this.leftSandCtrls[r];
if (i.color === a.color) {
n.push(i);
break;
}
}
return n.reverse();
};
e.prototype.calcRowColors = function(e) {
var t = e[0];
t && (this.leftSandCtrls.length ? t.color !== this.leftSandCtrls[this.leftSandCtrls.length - 1].color && this.leftSandCtrls.push(t) : this.leftSandCtrls.push(t));
var n = e[e.length - 1];
n && (this.rightSandCtrls.length ? n.color !== this.rightSandCtrls[this.rightSandCtrls.length - 1].color && this.rightSandCtrls.push(n) : this.rightSandCtrls.push(n));
};
e.prototype.deactivateMapSands = function() {
for (var e = 0; e < this._mapSands.length; e++) for (var t = 0; t < this._mapSands[e].length; t++) {
var n = this._mapSands[e][t];
n && (n.movable = !1);
}
};
e.prototype.activateMapSandsByRow = function(e) {
for (var t = e; t < this._mapSands.length; t++) for (var n = 0; n < this._mapSands[t].length; n++) {
var o = this._mapSands[t][n];
o && (o.movable = !0);
}
};
e.prototype.calcEmptyRowCount = function() {
this.emptyColorsRow = this._mapSands.length;
for (var e = this._mapSands.length - 1; e >= 0; e--) {
for (var t = this._mapSands[e], n = !0, o = 0; o < t.length; o++) if (t[o]) {
n = !1;
break;
}
if (!n) break;
this.emptyColorsRow = e;
}
};
e.prototype.getEmptyColorsRow = function() {
return this.emptyColorsRow;
};
e.prototype.sandDownMove = function(e) {
if (e.row <= 0) return !1;
if (!this.getSand(e.row - 1, e.col)) {
this.setSand(e.row, e.col, null);
this.setSand(e.row - 1, e.col, e);
return !0;
}
if (!1 === e.movable) {
if (e.row === s.SandMapHelper.maxRow - 1) return !1;
var t = this.getSand(e.row + 1, e.col);
if (!t || !1 === t.movable) return !1;
}
var n = [];
if (e.col > 0 && !this.getSand(e.row, e.col - 1) && !this.getSand(e.row - 1, e.col - 1)) {
var o = s.SandMapHelper.leftDownPoint(e.row, e.col);
this.checkCanPushRoll(o, e.col, e.isDamp) && n.push(o);
}
if (e.col < s.SandMapHelper.maxCol - 1 && !this.getSand(e.row, e.col + 1) && !this.getSand(e.row - 1, e.col + 1)) {
var a = s.SandMapHelper.rightDownPoint(e.row, e.col);
this.checkCanPushRoll(a, e.col, e.isDamp) && n.push(a);
}
if (n.length) {
var r = this.randSeed.randomListSeed(n);
if (!r) {
cc.error("随机点为空", n.length);
return !1;
}
this.setSand(e.row, e.col, null);
this.setSand(r.x, r.y, e);
return !0;
}
return !1;
};
e.prototype.checkCanPushRoll = function(e, t, n) {
var o = Math.max(this._rollHeightAllAry[t], 1);
n && c.SandLocalData.dampTileAffectRoll && o++;
if (o <= 1) return !0;
for (var a = 0; a < o - 1; a++) {
var r = a + 1, i = s.SandMapHelper.downPointByHeight(e.x, e.y, r);
if (null === i || this.getSand(i.x, i.y)) return !1;
}
return !0;
};
e.prototype.checkSandpile = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, i, c, l, u, d, h, f, g, S, m, y, _, v;
return a(this, function(a) {
switch (a.label) {
case 0:
if (!e.length) return [ 2 ];
t = null;
for (n = 0; n < e.length; n++) {
o = e[n];
if ((i = p.antContourTracer.checkConnectBlock(o.row, o.col, o.color, this._mapSands)).isConnected) {
i.isConnected;
t = o;
break;
}
}
if (!t) return [ 3, 4 ];
for (c = 0; c < this.sandsVisited.length; ++c) for (l = 0; l < this.sandsVisited[c].length; ++l) this.sandsVisited[c][l] = !1;
u = this.findBlockFromStart(this._mapSands, t.row, t.col), d = u.points, h = u.maxCheckCol, 
f = u.minCheckCol, g = u.minCheckRow;
if (0 !== f || h !== s.SandMapHelper.maxCol - 1) return [ 3, 4 ];
this.needCheckAfterClear = !0;
if (!this.isPureLogic) return [ 3, 1 ];
this.mapCount -= d.length;
try {
for (S = r(d), m = S.next(); !m.done; m = S.next()) {
y = m.value;
this.setSand(y.x, y.y, null);
}
} catch (e) {
_ = {
error: e
};
} finally {
try {
m && !m.done && (v = S.return) && v.call(S);
} finally {
if (_) throw _.error;
}
}
return [ 3, 3 ];

case 1:
this.clearing = !0;
return [ 4, this.clearSands(d) ];

case 2:
a.sent();
this.clearing = !1;
a.label = 3;

case 3:
this.nonStableRow = Math.min(this.nonStableRow, g);
this.activateMapSandsByRow(g);
a.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.findBlockFromStart = function(e, t, n) {
var o = e.length, a = e[0].length, s = 0, l = a, u = o, d = this.sandsVisited, p = i.Four_Direction;
c.SandLocalData.boxNearType === i.eSand_BoxNearType.Eight && (p = i.Eight_Direction);
function h(e, t) {
return t >= 0 && e >= 0 && t < a && e < o;
}
if (!h(t, n)) throw new Error("Start coordinates are out of bounds");
return {
points: function(t, n, o) {
for (var a, i, c = [ new cc.Vec3(t, n) ], f = []; c.length > 0; ) {
var g = c.pop();
if (!d[g.x][g.y]) {
d[g.x][g.y] = !0;
f.push(g);
g.x < u && (u = g.x);
g.y > s && (s = g.y);
g.y < l && (l = g.y);
try {
for (var S = (a = void 0, r(p)), m = S.next(); !m.done; m = S.next()) {
var y = m.value, _ = g.add(y);
h(_.x, _.y) && !d[_.x][_.y] && e[_.x][_.y] && e[_.x][_.y].color === o && c.push(_);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
m && !m.done && (i = S.return) && i.call(S);
} finally {
if (a) throw a.error;
}
}
}
}
return f;
}(t, n, e[t][n].color),
maxCheckCol: s,
minCheckCol: l,
minCheckRow: u
};
};
e.prototype.clearSands = function(e) {
return o(this, void 0, void 0, function() {
var t, n, o, i, d, p, g, S, m, y, _, v, b, C, A, w, E, D, M, L, T;
return a(this, function(a) {
switch (a.label) {
case 0:
this.mapCount -= e.length;
t = new Array(s.SandMapHelper.maxCol);
try {
for (n = r(e), o = n.next(); !o.done; o = n.next()) {
_ = o.value;
t[_.y] ? t[_.y].push(_) : t[_.y] = [ _ ];
}
} catch (e) {
w = {
error: e
};
} finally {
try {
o && !o.done && (E = n.return) && E.call(n);
} finally {
if (w) throw w.error;
}
}
this._clearSands = new Array(s.SandMapHelper.maxCol);
i = 0;
d = 12;
try {
for (p = r(t), g = p.next(); !g.done; g = p.next()) if ((S = g.value) && 0 !== S.length) {
try {
for (m = (L = void 0, r(S)), y = m.next(); !y.done; y = m.next()) {
_ = y.value;
if (v = this.getSand(_.x, _.y)) {
b = s.SandMapHelper.getPos(v.row, v.col);
(C = l.SandObjectPoolFactory.ins.get()).row = v.row;
C.col = v.col;
C.x = b.x;
C.y = b.y;
C.color = v.color;
this._clearSands[v.col] ? this._clearSands[v.col].push(C) : this._clearSands[v.col] = [ C ];
}
this.setSand(_.x, _.y, null);
}
} catch (e) {
L = {
error: e
};
} finally {
try {
y && !y.done && (T = m.return) && T.call(m);
} finally {
if (L) throw L.error;
}
}
++i >= d && (i = 0);
}
} catch (e) {
D = {
error: e
};
} finally {
try {
g && !g.done && (M = p.return) && M.call(p);
} finally {
if (D) throw D.error;
}
}
return [ 4, u.hsgame.TimeUtils.nextFrame() ];

case 1:
a.sent();
this.doLogicEvent(h.SandLogicEventEnum.ClearSandStart, {
points: e,
clearSands: this._clearSands
});
i = 0;
d = 6;
A = c.SandLocalData.clearSandEffectDelayTime;
e.length >= c.SandLocalData.HugeEliminationlimit && u.hsgame.Features.boolFeature(f.FeaturesEnum.huge_eliminate) && (A = c.SandLocalData.clearSandEffectDelayTimeBig);
return [ 4, u.hsgame.TimeUtils.timeOut(A, this) ];

case 2:
a.sent();
this._clearSands = [];
this.doLogicEvent(h.SandLogicEventEnum.ClearSandEnd, {
mapCount: this.mapCount
});
return [ 2 ];
}
});
});
};
e.prototype.isClearing = function() {
return this.clearing;
};
e.prototype.getMapCount = function() {
return this.mapCount;
};
e.prototype.getSyncData = function(e) {
return {
mapSands: e ? JSON.parse(JSON.stringify(this._mapSands)) : this._mapSands,
boxSands: e ? JSON.parse(JSON.stringify(this._boxSands)) : this._boxSands,
rollHeightAllAry: JSON.parse(JSON.stringify(this._rollHeightAllAry)),
emptyColorsRow: this.emptyColorsRow,
mapCount: this.mapCount,
isDroping: this.isDroping,
needCheckAfterClear: this.needCheckAfterClear,
randSeed: this.randSeed.getSeed(),
boxFrames: this.boxFrames,
stepFrames: this.stepFrames
};
};
e.prototype.setSyncData = function(e) {
this._mapSands = e.mapSands;
this._boxSands = e.boxSands;
this._rollHeightAllAry = e.rollHeightAllAry;
this.emptyColorsRow = e.emptyColorsRow;
this.mapCount = e.mapCount;
this.isDroping = e.isDroping;
this.clearing = !1;
this.needCheckAfterClear = e.needCheckAfterClear;
this.randSeed.setSeed(e.randSeed);
this.boxFrames = e.boxFrames;
this.stepFrames = e.stepFrames;
};
e.prototype.setInitialBoard = function(e) {
this.mapCount = 0;
this._mapSands = Array.from({
length: s.SandMapHelper.maxRow
}, function() {
return Array(s.SandMapHelper.maxCol).fill(null);
});
for (var t = e.length - 1; t >= 0; --t) for (var n = 0; n < e[t].length; ++n) {
var o = e[t][n];
if (0 !== o) {
var a = l.SandObjectPoolFactory.ins.get();
a.row = t;
a.col = n;
a.color = Math.abs(o);
o < 0 && (a.isDamp = !0);
this.setSand(e.length - 1 - t, n, a);
this.mapCount++;
}
}
};
e.prototype.doLogicEvent = function(e, t) {
if (this.logicEvent) try {
this.logicEvent.doEvent(e, t);
} catch (e) {
console.error("[SandLogic] doLogicEvent error: " + e);
}
};
return e;
}();
n.SandLogic = g;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../config/FeaturesEnum": "FeaturesEnum",
"../config/SandDefines": "SandDefines",
"../data/SandLocalData": "SandLocalData",
"./AntContourTracer": "AntContourTracer",
"./SandLogicEvent": "SandLogicEvent",
"./SandLogicRandomSeed": "SandLogicRandomSeed",
"./SandMapHelper": "SandMapHelper",
"./SandObjectPoolFactory": "SandObjectPoolFactory"
} ],
SandMainScene: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6931b385WVJsJytbop8qg9i", "SandMainScene");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
}, i = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = e("../../../resources/hsgame/hsgame"), l = e("./config/SandDefines"), u = e("./mgr/SandGameMgr"), d = cc._decorator.ccclass, p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
return i(this, void 0, void 0, function() {
return c(this, function() {
l.GAME_VERSION;
s.hsgame.Native.initWindowFunc();
u.SandGameMgr.init();
return [ 2 ];
});
});
};
t.prototype.update = function(e) {
u.SandGameMgr.update(e);
};
t.prototype.onDestroy = function() {
s.hsgame.Native.cleanWindowFunc();
u.SandGameMgr.destroy();
};
return r([ d ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../../resources/hsgame/hsgame": void 0,
"./config/SandDefines": "SandDefines",
"./mgr/SandGameMgr": "SandGameMgr"
} ],
SandMainUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "793afRTx5JIjolyW8rByJm3", "SandMainUI");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../mgr/EventMgr"), c = e("../mgr/HSUIMgrAdapter"), s = e("../mgr/SandGameMgr"), l = e("../data/SandLocalData"), u = e("../config/SandUIConfig"), d = e("./graphicsRender/SandMapCustomAssembler"), p = e("./graphicsRender/OptionGraphics"), h = e("../score/ScoreLabelAni"), f = e("../../../../resources/hsgame/hsgame"), g = e("./graphicsRender/SandDraggingRenderer"), S = e("./graphicsRender/SandClearRenderer"), m = e("./graphicsRender/DeathGrayRenderer"), y = e("../sandLogic/SandView"), _ = e("../config/TrackEnum"), v = e("../../../../resources/hsgame/ui/HSUIBase"), b = e("./Component/GoalProgress/RewordManager"), C = e("../config/FeaturesEnum"), A = e("../flow/SandFlowManager"), w = cc._decorator, E = w.ccclass, D = w.property, M = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.scoreLabel = null;
t.bestScoreLabel = null;
t.exitBtn = null;
t.boxContent = null;
t.content = null;
t.redLight = null;
t.sandrender = null;
t.draggingRender = null;
t.clearRender = null;
t.deathGrayRender = null;
t.optionRender = null;
t.deadlineNode = null;
t.rewordManager = null;
t.lineOffset = 0;
t.sandView = null;
t.isExitBtnClicking = !1;
return t;
}
t.prototype.getView = function() {
return this.sandView;
};
t.prototype.onParam = function() {};
t.prototype.start = function() {
window._sandMainUI = this;
i.EventMgr.on(i.EventType.updateScore, this.updateScore, this);
i.EventMgr.on(i.EventType.tutorialCompleted, this.updateExitButtonState, this);
c.HSUIMgrAdapter.bindButton(this.exitBtn, this.onExitBtn.bind(this));
f.hsgame.DataReporter.reportEvent(_.TrackEnum.ui_battle_show, {
GameType: f.hsgame.App.GameType
});
s.SandGameMgr.playBgm();
this.init();
this.adapter();
this.updateExitButtonState();
cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
};
t.prototype.onGameShow = function() {
l.SandLocalData.gameData.offlineTime += Date.now() - l.SandLocalData.lastActiveTime;
};
t.prototype.onGameHide = function() {
l.SandLocalData.lastActiveTime = Date.now();
};
t.prototype.adapter = function() {
var e, t = null === (e = this.node.getChildByName("root")) || void 0 === e ? void 0 : e.getChildByName("main");
if (t) {
if (cc.winSize.width / cc.winSize.height > .56) {
t.scale = .95;
t.getComponent(cc.Widget).updateAlignment();
}
}
};
t.prototype.lateUpdate = function() {
this.sandView.lateUpdate();
};
t.prototype.init = function() {
this.sandView = new y.SandView();
this.sandView.init({
boxContent: this.boxContent,
content: this.content,
sandrender: this.sandrender,
draggingRender: this.draggingRender,
clearRender: this.clearRender,
deathGrayRender: this.deathGrayRender,
optionRender: this.optionRender,
deadlineNode: this.deadlineNode,
lineOffset: this.lineOffset,
redLight: this.redLight
});
s.SandGameMgr.startGame();
if (this.rewordManager) if (f.hsgame.Features.intFeature(C.FeaturesEnum.open_target_score)) {
this.rewordManager.node.active = !0;
this.scoreLabel.node.active = !1;
this.rewordManager.init();
} else {
this.rewordManager.node.active = !1;
this.scoreLabel.node.active = !0;
}
this.bestScoreLabel.string = "" + Math.floor(l.SandLocalData.highScore);
this.updateScore();
this.isExitBtnClicking = !1;
};
t.prototype.updateExitButtonState = function() {
var e = A.SandFlowManager.getInstance().isFirstTimeUser(), t = this.exitBtn.getComponent(cc.Button);
t && (t.interactable = !e);
};
t.prototype.onExitBtn = function() {
var e = this;
if (!this.deathGrayRender.isPlaying() && !this.isExitBtnClicking) {
this.isExitBtnClicking = !0;
f.hsgame.UIManager.ins.open(u.SandUIConfig.SettingUI, null, {
touchClose: !0
});
f.hsgame.DataReporter.reportEvent(_.TrackEnum.game_setting_button_click, {
GameType: f.hsgame.App.GameType
});
this.scheduleOnce(function() {
e.isExitBtnClicking = !1;
}, .5);
}
};
t.prototype.updateScore = function() {
var e, t;
null === (e = this.scoreLabel.getComponent(h.ScoreAnimComponent)) || void 0 === e || e.onUpdatePlayerScore(Math.floor(l.SandLocalData.score));
l.SandLocalData.score > parseInt(this.bestScoreLabel.string) ? null === (t = this.bestScoreLabel.getComponent(h.ScoreAnimComponent)) || void 0 === t || t.onUpdatePlayerScore(Math.floor(l.SandLocalData.score)) : this.bestScoreLabel.string = "" + Math.floor(l.SandLocalData.highScore);
f.hsgame.Features.intFeature(C.FeaturesEnum.open_target_score) && this.rewordManager && this.rewordManager.refresh();
};
t.prototype.updateProgress = function() {};
t.prototype.onDestroy = function() {
cc.isValid(this.sandView) && this.sandView.destroy();
i.EventMgr.off(i.EventType.updateScore, this.updateScore, this);
i.EventMgr.off(i.EventType.tutorialCompleted, this.updateExitButtonState, this);
cc.game.off(cc.game.EVENT_SHOW, this.onGameShow, this);
cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
};
r([ D(cc.Label) ], t.prototype, "scoreLabel", void 0);
r([ D(cc.Label) ], t.prototype, "bestScoreLabel", void 0);
r([ D(cc.Node) ], t.prototype, "exitBtn", void 0);
r([ D(cc.Node) ], t.prototype, "boxContent", void 0);
r([ D(cc.Node) ], t.prototype, "content", void 0);
r([ D(cc.Node) ], t.prototype, "redLight", void 0);
r([ D(d.default) ], t.prototype, "sandrender", void 0);
r([ D(g.default) ], t.prototype, "draggingRender", void 0);
r([ D(S.default) ], t.prototype, "clearRender", void 0);
r([ D(m.default) ], t.prototype, "deathGrayRender", void 0);
r([ D(p.default) ], t.prototype, "optionRender", void 0);
r([ D(cc.Node) ], t.prototype, "deadlineNode", void 0);
r([ D(b.default) ], t.prototype, "rewordManager", void 0);
r([ D(Number) ], t.prototype, "lineOffset", void 0);
return r([ E ], t);
}(v.default);
n.default = M;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/ui/HSUIBase": void 0,
"../config/FeaturesEnum": "FeaturesEnum",
"../config/SandUIConfig": "SandUIConfig",
"../config/TrackEnum": "TrackEnum",
"../data/SandLocalData": "SandLocalData",
"../flow/SandFlowManager": "SandFlowManager",
"../mgr/EventMgr": "EventMgr",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../mgr/SandGameMgr": "SandGameMgr",
"../sandLogic/SandView": "SandView",
"../score/ScoreLabelAni": "ScoreLabelAni",
"./Component/GoalProgress/RewordManager": "RewordManager",
"./graphicsRender/DeathGrayRenderer": "DeathGrayRenderer",
"./graphicsRender/OptionGraphics": "OptionGraphics",
"./graphicsRender/SandClearRenderer": "SandClearRenderer",
"./graphicsRender/SandDraggingRenderer": "SandDraggingRenderer",
"./graphicsRender/SandMapCustomAssembler": "SandMapCustomAssembler"
} ],
SandMapCustomAssembler: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "87986YyjadPT7MsCtBmADku", "SandMapCustomAssembler");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../sandLogic/SandMapHelper"), c = e("../../config/SandDefines"), s = e("./SandTileColorHelper"), l = e("../../data/SandLocalData"), u = e("../../utils/SandUtils"), d = cc._decorator, p = d.ccclass, h = d.property, f = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.graphics = null;
t.eraserColor = cc.color(48, 15, 8, 255);
t._curStates = [];
t._lastStates = [];
t.count = 0;
return t;
}
t.prototype.onLoad = function() {
this._curStates = Array.from({
length: i.SandMapHelper.maxRow
}, function() {
return Array(i.SandMapHelper.maxCol).fill(null);
});
this._lastStates = Array.from({
length: i.SandMapHelper.maxRow
}, function() {
return Array(i.SandMapHelper.maxCol).fill(null);
});
this.clear();
u.SandUtils.isNonPixelSkin() ? this.eraserColor = cc.color(20, 7, 48, 255) : u.SandUtils.isPixelSkin() ? this.eraserColor = cc.color(3, 12, 39, 255) : u.SandUtils.isWoodSkin() || u.SandUtils.isWoodSkin2() ? this.eraserColor = cc.color(48, 15, 8, 255) : u.SandUtils.isNeonSkin() ? this.eraserColor = cc.color(58, 27, 63, 255) : this.eraserColor = cc.color(1, 15, 36, 255);
};
t.prototype.draw = function(e) {
this.count += 1;
if (512 === this.count) {
this.count = 0;
this.graphics.clear();
this._lastStates = Array.from({
length: i.SandMapHelper.maxRow
}, function() {
return Array(i.SandMapHelper.maxCol).fill(null);
});
}
for (var t = 0; t < this._curStates.length; t++) for (var n = 0; n < this._curStates[t].length; n++) this._curStates[t][n] = null;
for (t = 0; t < e.length; t++) for (n = 0; n < e[t].length; n++) {
var o = e[t][n];
o && o.row < i.SandMapHelper.maxRow && o.col < i.SandMapHelper.maxCol && (this._curStates[o.row][o.col] = {
color: o.color,
isDamp: o.isDamp
});
if (this.hasStateChanged(this._lastStates[t][n], this._curStates[t][n])) {
this._curStates[t][n] ? this.renderSingleTile(t, n, this._curStates[t][n], o.dampColor) : this.renderBlackTile(t, n);
this._lastStates[t][n] = this._curStates[t][n];
}
}
};
t.prototype.hasStateChanged = function(e, t) {
return !(!e && !t || e && t && e.color === t.color && e.isDamp === t.isDamp);
};
t.prototype.renderSingleTile = function(e, t, n, o) {
var a = t * c.SIZE_SAND, r = e * c.SIZE_SAND;
this.fillRect(a, r, c.SIZE_SAND, n.color, n.isDamp, o);
};
t.prototype.renderBlackTile = function(e, t) {
var n = t * c.SIZE_SAND, o = e * c.SIZE_SAND;
this.graphics.fillColor = this.eraserColor;
this.graphics.rect(n, o, c.SIZE_SAND, c.SIZE_SAND);
this.graphics.fill();
};
t.prototype.fillRect = function(e, t, n, o, a, r) {
o -= 1;
if (l.SandLocalData.sandTileColorType === c.SandTileColorType.two) {
var i = (p = s.SandTileColorHelper.getColor(a, r))[0][o], u = p[1][o];
this.graphics.fillColor = i;
this.graphics.rect(e, t, n, n);
this.graphics.fill();
var d = .1 * n;
this.graphics.fillColor = u;
this.graphics.rect(e + d, t + d, n - 2 * d, n - 2 * d);
this.graphics.fill();
} else if (l.SandLocalData.sandTileColorType === c.SandTileColorType.three) {
i = (p = s.SandTileColorHelper.getColor(a, r))[0][o];
var p, h = p[1][o];
u = p[2][o];
this.graphics.fillColor = i;
this.graphics.rect(e, t, n, n);
this.graphics.fill();
var f = .1 * n;
this.graphics.fillColor = h;
this.graphics.rect(e + f, t + 2 * f, n - 3 * f, n - 3 * f);
this.graphics.fill();
var g = .1 * n;
this.graphics.fillColor = u;
this.graphics.rect(e + g, t + 6 * g, n - 7 * g, n - 7 * g);
this.graphics.fill();
}
};
t.prototype.clear = function() {
this.graphics && this.graphics.clear();
for (var e = 0; e < this._lastStates.length; e++) for (var t = 0; t < this._lastStates[e].length; t++) this._lastStates[e][t] = null;
};
r([ h(cc.Graphics) ], t.prototype, "graphics", void 0);
return r([ p ], t);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../config/SandDefines": "SandDefines",
"../../data/SandLocalData": "SandLocalData",
"../../sandLogic/SandMapHelper": "SandMapHelper",
"../../utils/SandUtils": "SandUtils",
"./SandTileColorHelper": "SandTileColorHelper"
} ],
SandMapHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5d1a5QV559Nx6nrqnIrVHQ8", "SandMapHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandMapHelper = void 0;
var o = e("../config/SandDefines"), a = e("../data/SandLocalData"), r = function() {
function e() {
this._vec3Cache = [];
this.height = o.SIZE_SAND;
this.width = o.SIZE_SAND;
this.contentHeight = 1090;
this._contentWidth = 850;
this.maxRow = Math.floor(this.contentHeight / this.height);
this.maxCol = Math.floor(this.contentWidth / this.width);
this.initVec3Cache();
}
e.prototype.initVec3Cache = function() {
for (var e = 0; e < this.maxRow; e++) {
this._vec3Cache[e] = [];
for (var t = 0; t < this.maxCol; t++) this._vec3Cache[e][t] = cc.v3(e, t);
}
};
e.prototype.getCachedVec3 = function(e, t) {
return e >= 0 && e < this.maxRow && t >= 0 && t < this.maxCol ? this._vec3Cache[e][t] : cc.v3(e, t);
};
Object.defineProperty(e.prototype, "contentWidth", {
get: function() {
return a.SandLocalData.GetData("boardwidth") || this._contentWidth;
},
set: function(e) {
this._contentWidth = e;
this.maxCol = Math.floor(this.contentWidth / this.width);
},
enumerable: !1,
configurable: !0
});
e.prototype.getPoint = function(e, t) {
var n = Math.round(e / this.width), o = Math.round(t / this.height);
return n > this.maxCol - 1 || n < 0 ? null : o > this.maxRow - 1 || o < 0 ? null : this.getCachedVec3(o, n);
};
e.prototype.getPos = function(e, t, n) {
void 0 === n && (n = 1);
return cc.v3(t * this.width * n, e * this.height * n);
};
e.prototype.checkPoint = function(e, t) {
return e >= 0 && e < this.maxRow && t >= 0 && t < this.maxCol;
};
e.prototype.upPoint = function(e, t) {
return e >= this.maxRow - 1 ? null : this.getCachedVec3(e + 1, t);
};
e.prototype.downPoint = function(e, t) {
return e - 1 < 0 ? null : this.getCachedVec3(e - 1, t);
};
e.prototype.leftPoint = function(e, t) {
return t - 1 < 0 ? null : this.getCachedVec3(e, t - 1);
};
e.prototype.rightPoint = function(e, t) {
return t + 1 >= this.maxCol ? null : this.getCachedVec3(e, t + 1);
};
e.prototype.downPointByHeight = function(e, t, n) {
return e - n < 0 ? null : this.getCachedVec3(e - n, t);
};
e.prototype.leftDownPoint = function(e, t) {
return t <= 0 ? null : e <= 0 ? null : this.getCachedVec3(e - 1, t - 1);
};
e.prototype.rightDownPoint = function(e, t) {
return t >= this.maxCol - 1 ? null : e <= 0 ? null : this.getCachedVec3(e - 1, t + 1);
};
e.prototype.logShape = function(e) {
if (a.SandLocalData.isLogShape) {
for (var t = "[SA]打印形状\n", n = e.length - 1; n >= 0; n--) {
for (var r = 0; r < e[n].length; r++) {
var i = e[n][r];
i ? i.isDamp ? t += "💠" : t += o.emojiColors[i.color - 1] : t += "⬜";
}
t += "\n";
}
return t;
}
};
return e;
}();
n.SandMapHelper = new r();
cc._RF.pop();
}, {
"../config/SandDefines": "SandDefines",
"../data/SandLocalData": "SandLocalData"
} ],
SandObjectPoolFactory: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2df77/G0CdACY13xCX+TByy", "SandObjectPoolFactory");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandObjectPoolFactory = void 0;
var o = e("./SandTile"), a = function() {
function e() {
this.pool = [];
}
Object.defineProperty(e, "ins", {
get: function() {
null === e._inst && (e._inst = new this());
return e._inst;
},
enumerable: !1,
configurable: !0
});
e.prototype.get = function() {
return new o.SandTile();
};
e.prototype.recycle = function() {};
e._inst = null;
return e;
}();
n.SandObjectPoolFactory = a;
cc._RF.pop();
}, {
"./SandTile": "SandTile"
} ],
SandOverUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c3fb0EibPxH06iIYkg02Sw1", "SandOverUI");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../config/SandUIConfig"), c = e("../data/SandLocalData"), s = e("../mgr/SandGameMgr"), l = e("../mgr/HSUIMgrAdapter"), u = e("../../../../resources/hsgame/hsgame"), d = e("../config/TrackEnum"), p = e("../../../../resources/hsgame/ui/HSUIBase"), h = e("../mgr/SandAdManager"), f = e("../../../../resources/hsgame/hsApp"), g = cc._decorator, S = g.ccclass, m = g.property, y = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.btnReplay = null;
t.curScoreLbl = null;
t.bestScoreLbl = null;
t.gameoverNode = null;
t.scoreNode = null;
t.bestScoreNode = null;
t.MOVE_OFFSET = -112;
t.MOVE_DURATION = 20 / 60;
t.FADE_DURATION = 4 / 60;
t.SCALE_DURATION = 10 / 60;
t.BUTTON_SCALE = .6;
return t;
}
t.prototype.start = function() {
var e = this;
h.SandAdManager.instance.hideBanner();
l.HSUIMgrAdapter.bindButton(this.btnReplay, this.onReplayBtnBtn.bind(this));
this.curScoreLbl.string = Math.floor(c.SandLocalData.score).toString();
this.bestScoreLbl.string = Math.floor(c.SandLocalData.highScore).toString();
if (f.hsApp.isBlockBlastGame()) {
this.initUIElements();
this.scheduleOnce(function() {
e.playEntranceAnimation();
}, 5 / 60);
}
2 === c.SandLocalData.playingCount && "sand_crush" === u.hsgame.App.RUNTIME_ENV && l.HSUIMgrAdapter.show(i.SandUIConfig.StarView);
u.hsgame.DataReporter.reportEvent(d.TrackEnum.usr_data_game_end_show, {
GameType: u.hsgame.App.GameType,
game_id: c.SandLocalData.playingCount,
round_id: s.SandGameMgr.getRound()
});
c.SandLocalData.score > c.SandLocalData.highScore && u.hsgame.Native.uploadUserData({
gameWayNum: c.SandLocalData.getPlanId(),
user_waynum: c.SandLocalData.getPlanId(),
topGrade: Math.floor(c.SandLocalData.highScore)
});
};
t.prototype.onReplayBtnBtn = function() {
u.hsgame.DataReporter.reportEvent(d.TrackEnum.usr_data_game_end_restart_click, {
GameType: u.hsgame.App.GameType,
game_id: c.SandLocalData.playingCount,
round_id: s.SandGameMgr.getRound()
});
l.HSUIMgrAdapter.close(i.SandUIConfig.overUI);
l.HSUIMgrAdapter.close(i.SandUIConfig.overBestUI);
s.SandGameMgr.restart("gameover_replay");
h.SandAdManager.instance.showBanner();
};
t.prototype.initUIElements = function() {
var e = this.MOVE_OFFSET;
[ this.gameoverNode, this.scoreNode, this.bestScoreNode ].forEach(function(t) {
if (t) {
t.y += e;
t.opacity = 0;
}
});
if (this.btnReplay) {
this.btnReplay.scale = 0;
this.btnReplay.opacity = 0;
}
};
t.prototype.playEntranceAnimation = function() {
var e = this;
this.scheduleOnce(function() {
e.playElementAnimation(e.gameoverNode, 0);
}, 2 / 60);
this.scheduleOnce(function() {
e.playElementAnimation(e.scoreNode, 0);
}, 4 / 60);
this.scheduleOnce(function() {
e.playElementAnimation(e.bestScoreNode, 0);
}, .1);
this.scheduleOnce(function() {
e.playButtonAnimation();
}, .25);
};
t.prototype.playElementAnimation = function(e, t) {
e && cc.tween(e).parallel(cc.tween().delay(t).by(this.MOVE_DURATION, {
y: -this.MOVE_OFFSET
}), cc.tween().delay(t).to(this.FADE_DURATION, {
opacity: 255
})).start();
};
t.prototype.playButtonAnimation = function() {
this.btnReplay && cc.tween(this.btnReplay).set({
opacity: 0
}).parallel(cc.tween().to(this.FADE_DURATION, {
opacity: 255
}, {
easing: "sineOut"
}), cc.tween().to(this.SCALE_DURATION, {
scale: 1
}, {
easing: "sineOut"
})).start();
};
r([ m(cc.Node) ], t.prototype, "btnReplay", void 0);
r([ m(cc.Label) ], t.prototype, "curScoreLbl", void 0);
r([ m(cc.Label) ], t.prototype, "bestScoreLbl", void 0);
r([ m(cc.Node) ], t.prototype, "gameoverNode", void 0);
r([ m(cc.Node) ], t.prototype, "scoreNode", void 0);
r([ m(cc.Node) ], t.prototype, "bestScoreNode", void 0);
return r([ S ], t);
}(p.default);
n.default = y;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsApp": void 0,
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/ui/HSUIBase": void 0,
"../config/SandUIConfig": "SandUIConfig",
"../config/TrackEnum": "TrackEnum",
"../data/SandLocalData": "SandLocalData",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../mgr/SandAdManager": "SandAdManager",
"../mgr/SandGameMgr": "SandGameMgr"
} ],
SandPreloadFlow: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c7b15f1cZtPi5n2CBBKWxPt", "SandPreloadFlow");
var o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, n = 1, o = arguments.length; n < o; n++) {
t = arguments[n];
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
}
return e;
}).apply(this, arguments);
}, a = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandPreloadFlow = n.PreloadState = void 0;
var i, c = e("../../../../resources/hsgame/hsgame"), s = e("../config/SandUIConfig"), l = e("../mgr/HSUIMgrAdapter"), u = e("../utils/SandSoundUtils"), d = e("../config/SandGameConfig"), p = e("../utils/SandUtils"), h = e("../../../../resources/hsgame/hsApp"), f = e("../../../../resources/hsgame/utils/HSResourceUtils");
(function(e) {
e.IDLE = "idle";
e.LOADING = "loading";
e.COMPLETED = "completed";
})(i = n.PreloadState || (n.PreloadState = {}));
var g = function() {
function e() {
this.name = "PreloadFlow";
this.state = i.IDLE;
this.currentProgress = 0;
this.callbacks = {};
}
e.prototype.setCallbacks = function(e) {
this.callbacks = o({}, e);
};
e.prototype.execute = function() {
return a(this, void 0, Promise, function() {
var e, t;
return r(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.preloadSkinBundles() ];

case 1:
n.sent();
h.hsApp.isSandCrushGame() && l.HSUIMgrAdapter.show(s.SandUIConfig.loadingUI);
return [ 4, this.preloadUIPrefabs() ];

case 2:
n.sent();
if (this.state === i.LOADING) return [ 2 ];
if (this.state === i.COMPLETED) return [ 2 ];
this.state = i.LOADING;
this.currentProgress = 0;
n.label = 3;

case 3:
n.trys.push([ 3, 7, 8, 9 ]);
return [ 4, Promise.all([ d.SandGameConfig.initCoing(), this.preloadSoundEffects() ]) ];

case 4:
n.sent();
this.currentProgress = 100;
this.notifyProgress();
this.state = i.COMPLETED;
this.callbacks.onComplete && this.callbacks.onComplete();
return h.hsApp.isSandCrushGame() ? [ 4, c.hsgame.TimeUtils.timeOut(.5, cc.director.getScene()) ] : [ 3, 6 ];

case 5:
n.sent();
l.HSUIMgrAdapter.close(s.SandUIConfig.loadingUI);
n.label = 6;

case 6:
return [ 3, 9 ];

case 7:
e = n.sent();
t = "预加载失败: " + (e.message || e);
console.error("[SandPreloadFlow]", t);
this.callbacks.onError && this.callbacks.onError(t);
throw e;

case 8:
this.state === i.LOADING && (this.state = i.IDLE);
return [ 7 ];

case 9:
return [ 2 ];
}
});
});
};
e.prototype.preloadUIPrefabs = function() {
return a(this, void 0, Promise, function() {
var e, t;
return r(this, function(n) {
switch (n.label) {
case 0:
n.trys.push([ 0, 6, , 7 ]);
l.HSUIMgrAdapter.init();
return [ 4, l.HSUIMgrAdapter.show(s.SandUIConfig.mainUI) ];

case 1:
(e = n.sent()).node.active = !1;
return e ? [ 4, c.hsgame.ResourceUtils.loadNode("res/prefabs/spine/motivationwords", e.node, "BaseMotivationalSpine", "sand_prefab") ] : [ 3, 5 ];

case 2:
n.sent().active = !1;
return [ 4, c.hsgame.ResourceUtils.loadNode("res/prefabs/spine/motivationwords", e.node, "ExtraMotivationalSpine", "sand_prefab") ];

case 3:
n.sent().active = !1;
return [ 4, c.hsgame.ResourceUtils.loadNode("res/prefabs/spine/combo", e.node, "combo_ani_wood", "sand_prefab") ];

case 4:
n.sent().active = !1;
n.label = 5;

case 5:
return [ 3, 7 ];

case 6:
t = n.sent();
console.error("[SandPreloadFlow] 预制体预加载失败:", t);
throw t;

case 7:
return [ 2 ];
}
});
});
};
e.prototype.preloadSoundEffects = function() {
return a(this, void 0, Promise, function() {
var e, t, n, o = this;
return r(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 2, , 3 ]);
e = this.getSoundEffectList();
t = e.map(function(e) {
return a(o, void 0, void 0, function() {
var t;
return r(this, function(n) {
switch (n.label) {
case 0:
n.trys.push([ 0, 2, , 3 ]);
return [ 4, p.SandUtils.loadAudio(e) ];

case 1:
n.sent();
return [ 3, 3 ];

case 2:
t = n.sent();
console.error("[SandPreloadFlow] 音效预加载失败: " + e, t);
throw t;

case 3:
return [ 2 ];
}
});
});
});
return [ 4, Promise.all(t) ];

case 1:
i.sent();
return [ 3, 3 ];

case 2:
n = i.sent();
console.error("[SandPreloadFlow] 音效资源预加载失败:", n);
throw n;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.getSoundEffectList = function() {
return [ u.SAND_SOUND_EFFECT.HUGE_BLAST, u.SAND_SOUND_EFFECT.SERIAL_BLAST, u.SAND_SOUND_EFFECT.ALL_CLEAR, u.SAND_SOUND_EFFECT.SREAK1, u.SAND_SOUND_EFFECT.SREAK2, u.SAND_SOUND_EFFECT.SREAK3, u.SAND_SOUND_EFFECT.SREAK4, u.SAND_SOUND_EFFECT.SREAK5, u.SAND_SOUND_EFFECT.SREAK6, u.SAND_SOUND_EFFECT.SREAK7, u.SAND_SOUND_EFFECT.SREAK8, u.SAND_SOUND_EFFECT.SREAK9, u.SAND_SOUND_EFFECT.SREAK10, u.SAND_SOUND_EFFECT.PUT, u.SAND_SOUND_EFFECT.TOUCH, u.SAND_SOUND_EFFECT.CLICK, u.SAND_SOUND_EFFECT.COUNT_TIME, u.SAND_SOUND_EFFECT.REVIVE, u.SAND_SOUND_EFFECT.SNAD_DOWN, u.SAND_SOUND_EFFECT.COUNT, u.SAND_SOUND_EFFECT.SAND_FAIL, u.SAND_SOUND_EFFECT.CLOCK_POP, u.SAND_SOUND_EFFECT.SAND_PUT, u.SAND_SOUND_EFFECT.SAND_POUR ];
};
e.prototype.isCompleted = function() {
return this.state === i.COMPLETED;
};
e.prototype.reset = function() {
this.state = i.IDLE;
this.currentProgress = 0;
this.callbacks = {};
};
e.prototype.getProgress = function() {
return this.currentProgress;
};
e.prototype.isPreloading = function() {
return this.state === i.LOADING;
};
e.prototype.getState = function() {
return this.state;
};
e.prototype.preloadSkinBundles = function() {
return a(this, void 0, Promise, function() {
var e, t, n, o = this;
return r(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 2, , 3 ]);
e = this.getSkinBundleList();
t = e.map(function(e) {
return a(o, void 0, void 0, function() {
var t;
return r(this, function(n) {
switch (n.label) {
case 0:
n.trys.push([ 0, 2, , 3 ]);
return [ 4, this.loadSkinBundle(e) ];

case 1:
n.sent();
return [ 3, 3 ];

case 2:
t = n.sent();
console.error("[SandPreloadFlow] 皮肤bundle预加载失败: " + e, t);
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
});
return [ 4, Promise.all(t) ];

case 1:
i.sent();
return [ 3, 3 ];

case 2:
n = i.sent();
console.error("[SandPreloadFlow] 皮肤资源预加载失败:", n);
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
e.prototype.getSkinBundleList = function() {
var e = [ "sand_audio", "sand_prefab" ];
if (p.SandUtils.isNeonSkin()) if (h.hsApp.isSandCrushGame()) {
e.push("neonskin_sand");
e.push("neonskin");
} else e.push("neonskin");
p.SandUtils.isNonPixelSkin() && e.push("nonpixelskin");
p.SandUtils.isWoodSkin2() && e.push("woodskin2_sand");
return e;
};
e.prototype.loadSkinBundle = function(e) {
var t = this;
return new Promise(function(n, o) {
return a(t, void 0, void 0, function() {
var t, a;
return r(this, function(r) {
switch (r.label) {
case 0:
if (t = cc.assetManager.getBundle(e)) {
n(t);
return [ 2 ];
}
return [ 4, f.HSResourceUtils.loadBundle(e) ];

case 1:
if (!(a = r.sent())) {
o(new Error("皮肤bundle加载失败: " + e));
return [ 2 ];
}
n(a);
return [ 2 ];
}
});
});
});
};
e.prototype.notifyProgress = function() {
this.callbacks.onProgress && this.callbacks.onProgress(this.currentProgress);
};
return e;
}();
n.SandPreloadFlow = g;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsApp": void 0,
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/utils/HSResourceUtils": void 0,
"../config/SandGameConfig": "SandGameConfig",
"../config/SandUIConfig": "SandUIConfig",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../utils/SandSoundUtils": "SandSoundUtils",
"../utils/SandUtils": "SandUtils"
} ],
SandReviveUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c972ffe5QRNfZtNr19yhmso", "SandReviveUI");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../config/SandUIConfig"), c = e("../mgr/SandGameMgr"), s = e("../mgr/HSUIMgrAdapter"), l = e("../mgr/SandAdManager"), u = e("../../../../resources/hsgame/hsgame"), d = e("../data/SandLocalData"), p = e("../utils/SandSoundUtils"), h = e("../mgr/EventMgr"), f = e("../config/TrackEnum"), g = cc._decorator, S = g.ccclass, m = g.property, y = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.btnRevive = null;
t.countDownSpine = null;
t.reviveBtnSpine = null;
t._isAnimationPlaying = !1;
return t;
}
t.prototype.start = function() {
s.HSUIMgrAdapter.bindButton(this.btnRevive, this.onReviveBtn.bind(this));
this.playReviveAnimation();
u.hsgame.DataReporter.reportEvent(f.TrackEnum.game_revive_ui_show, {
GameType: u.hsgame.App.GameType,
game_id: d.SandLocalData.playingCount,
round_id: c.SandGameMgr.getRound()
});
};
t.prototype.playReviveAnimation = function() {
var e = this;
if (!this._isAnimationPlaying) {
this._isAnimationPlaying = !0;
this.countDownSpine && this.countDownSpine.setAnimation(0, "in", !1);
if (this.reviveBtnSpine) {
this.reviveBtnSpine.setAnimation(0, "in", !1);
this.reviveBtnSpine.setCompleteListener(function() {
e.onAnimationComplete();
});
}
this.schedule(function() {
p.SandSoundUtils.playEffect(p.SAND_SOUND_EFFECT.COUNT);
}, 1, 5);
}
};
t.prototype.pause = function() {
this._isAnimationPlaying = !1;
this.reviveBtnSpine && (this.reviveBtnSpine.timeScale = 0);
};
t.prototype.resume = function() {
this._isAnimationPlaying = !0;
this.reviveBtnSpine && (this.reviveBtnSpine.timeScale = 1);
};
t.prototype.onAnimationComplete = function() {
this._isAnimationPlaying = !1;
s.HSUIMgrAdapter.close(i.SandUIConfig.reviveUI);
h.EventMgr.emit(h.EventType.reviveReject);
};
t.prototype.onReviveBtn = function() {
var e = this;
if (this._isAnimationPlaying) {
this.pause();
c.SandGameMgr.pauseBgm();
l.SandAdManager.instance.showRewardVideo(function(t) {
if (t) {
s.HSUIMgrAdapter.close(i.SandUIConfig.reviveUI);
h.EventMgr.emit(h.EventType.reviveAccept);
} else {
e.reviveBtnSpine.clearTracks();
e.countDownSpine.clearTracks();
e.reviveBtnSpine.setAnimation(0, "in", !1);
e.countDownSpine.setAnimation(0, "in", !1);
e.resume();
}
c.SandGameMgr.playBgm();
});
u.hsgame.DataReporter.reportEvent(f.TrackEnum.game_popup_revive_click, {
GameType: u.hsgame.App.GameType,
game_id: d.SandLocalData.playingCount,
round_id: c.SandGameMgr.getRound(),
revive_type: 1,
revive_times: ++d.SandLocalData.curReviveCount,
topGrade: d.SandLocalData.highScore,
grade: d.SandLocalData.score
});
}
};
t.prototype.onDestroy = function() {
this.countDownSpine && this.countDownSpine.setCompleteListener(null);
e.prototype.onDestroy && e.prototype.onDestroy.call(this);
};
r([ m(cc.Node) ], t.prototype, "btnRevive", void 0);
r([ m(sp.Skeleton) ], t.prototype, "countDownSpine", void 0);
r([ m(sp.Skeleton) ], t.prototype, "reviveBtnSpine", void 0);
return r([ S ], t);
}(cc.Component);
n.default = y;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../config/SandUIConfig": "SandUIConfig",
"../config/TrackEnum": "TrackEnum",
"../data/SandLocalData": "SandLocalData",
"../mgr/EventMgr": "EventMgr",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../mgr/SandAdManager": "SandAdManager",
"../mgr/SandGameMgr": "SandGameMgr",
"../utils/SandSoundUtils": "SandSoundUtils"
} ],
SandSettingMore: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bcd6al/8rZKoZZtWa1k6luO", "SandSettingMore");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
}, i = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = e("../../../../resources/hsgame/hsgame"), l = e("../config/TrackEnum"), u = e("../config/SandUIConfig"), d = e("../mgr/HSUIMgrAdapter"), p = e("../../../../resources/hsgame/ui/HSUIBase"), h = cc._decorator, f = h.ccclass, g = h.property, S = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.closeNode = null;
t.flowerNode = null;
t.bubbleNode = null;
t.isSwitchingScene = !1;
return t;
}
t.prototype.start = function() {
this.initButtons();
};
t.prototype.initButtons = function() {
d.HSUIMgrAdapter.bindButton(this.closeNode, this.onCloseBtn.bind(this));
d.HSUIMgrAdapter.bindButton(this.flowerNode, this.onFlowerBtn.bind(this));
d.HSUIMgrAdapter.bindButton(this.bubbleNode, this.onBubbleBtn.bind(this));
};
t.prototype.onFlowerBtn = function() {
if (!this.isSwitchingScene) {
this.isSwitchingScene = !0;
s.hsgame.App.set("flower", {
bundleName: "sandcrush",
sceneName: "sand"
});
s.hsgame.DataReporter.reportEvent(l.TrackEnum.game_moregame_start_click, {
button_name: "flowe",
mini_game_type: 1
});
this.isSwitchingScene = !0;
s.hsgame.ResourceUtils.loadBundle("dcmain").then(function() {
s.hsgame.ResourceUtils.runScene("flower", "flower");
});
}
};
t.prototype.onBubbleBtn = function() {
return i(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
if (this.isSwitchingScene) return [ 2 ];
this.isSwitchingScene = !0;
s.hsgame.App.set("bubble", {
bundleName: "sandcrush",
sceneName: "sand"
});
s.hsgame.DataReporter.reportEvent(l.TrackEnum.game_moregame_start_click, {
button_name: "ball",
mini_game_type: 2
});
return [ 4, s.hsgame.ResourceUtils.loadBundle("dcmain") ];

case 1:
e.sent();
s.hsgame.ResourceUtils.runScene("bubble", "bubble");
return [ 2 ];
}
});
});
};
t.prototype.onCloseBtn = function() {
d.HSUIMgrAdapter.close(u.SandUIConfig.SettingMoreUI);
};
r([ g(cc.Node) ], t.prototype, "closeNode", void 0);
r([ g(cc.Node) ], t.prototype, "flowerNode", void 0);
r([ g(cc.Node) ], t.prototype, "bubbleNode", void 0);
return r([ f ], t);
}(p.default);
n.default = S;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/ui/HSUIBase": void 0,
"../config/SandUIConfig": "SandUIConfig",
"../config/TrackEnum": "TrackEnum",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter"
} ],
SandSettingUIHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8bb68NLmzBMpqoHm4aXNTCH", "SandSettingUIHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandSettingUIHelper = void 0;
var o = function() {
function e() {}
e.canShowShake = function() {
return !0;
};
return e;
}();
n.SandSettingUIHelper = o;
cc._RF.pop();
}, {} ],
SandSettingUI: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "07821o+C4pGKo0FjwVeJZbA", "SandSettingUI");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandSettingUI = void 0;
var i = e("../data/SandLocalData"), c = e("../mgr/SandGameMgr"), s = e("../mgr/HSUIMgrAdapter"), l = e("../config/SandUIConfig"), u = e("../../../../resources/hsgame/hsgame"), d = e("../config/TrackEnum"), p = e("../../../../resources/hsgame/ui/HSUIBase"), h = e("../../../../resources/hsgame/ui/HSUIManager"), f = e("../mgr/GameStatistics"), g = e("./helpers/SandSettingUIHelper"), S = e("../mgr/SandAdManager"), m = e("../utils/SandSoundUtils"), y = cc._decorator, _ = y.ccclass, v = y.property, b = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.closeNode = null;
t.voiceNode = null;
t.shakeNode = null;
t.moreNode = null;
t.moreGamesNode = null;
t.homeNode = null;
t.replayNode = null;
t.bgmNode = null;
t.homeClick = !1;
return t;
}
t.prototype.start = function() {
var e = this;
this.homeClick = !1;
var t = this.node.getChildByName("bg");
cc.isValid(t) && !t.getComponent(cc.BlockInputEvents) && t.addComponent(cc.BlockInputEvents);
var n = new cc.Node("closeNode");
n.setContentSize(cc.winSize);
this.node.insertChild(n, 1);
n.targetOff(n);
n.on(cc.Node.EventType.TOUCH_END, function() {
e.onCloseBtn();
m.SandSoundUtils.playEffect(m.SAND_SOUND_EFFECT.CLICK);
});
var o = this.node.getChildByName("blockTouch");
o && s.HSUIMgrAdapter.bindButton(o, this.onCloseBtn.bind(this));
this.initButtons();
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_show, {
sound_state: i.SandLocalData.getSoundEnabled() ? 1 : 0,
bgm_state: i.SandLocalData.getBgmEnabled() ? 1 : 0,
vibration_state: i.SandLocalData.getVibrationEnabled() ? 1 : 0
});
};
t.prototype.initButtons = function() {
s.HSUIMgrAdapter.bindButton(this.closeNode, this.onCloseBtn.bind(this));
if (this.voiceNode) {
this.voiceNode.isChecked = !i.SandLocalData.getSoundEnabled();
s.HSUIMgrAdapter.bindToggle(this.voiceNode.node, this.onVoiceToggle);
}
if (this.shakeNode) {
this.shakeNode.node.active = !1;
if (g.SandSettingUIHelper.canShowShake()) {
this.shakeNode.node.active = !0;
this.shakeNode.isChecked = !i.SandLocalData.getVibrationEnabled();
}
s.HSUIMgrAdapter.bindToggle(this.shakeNode.node, this.onShakeToggle);
}
this.moreNode && s.HSUIMgrAdapter.bindButton(this.moreNode, this.onMoreBtn.bind(this));
this.moreGamesNode && s.HSUIMgrAdapter.bindButton(this.moreGamesNode, this.onMoreGamesBtn.bind(this));
this.replayNode && s.HSUIMgrAdapter.bindButton(this.replayNode, this.onReplayBtn.bind(this));
this.homeNode && s.HSUIMgrAdapter.bindButton(this.homeNode, this.onHomeBtn.bind(this));
if (this.bgmNode) {
this.bgmNode.isChecked = !i.SandLocalData.getBgmEnabled();
s.HSUIMgrAdapter.bindToggle(this.bgmNode.node, this.onBgmToggle.bind(this));
}
};
t.prototype.onCloseBtn = function() {
s.HSUIMgrAdapter.close(l.SandUIConfig.SettingUI);
};
t.prototype.onVoiceToggle = function(e) {
i.SandLocalData.setSoundEnabled(!e.isChecked);
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_sound_button_click);
};
t.prototype.onShakeToggle = function(e) {
i.SandLocalData.setVibrationEnabled(!e.isChecked);
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_vibration_button_click);
};
t.prototype.onBgmToggle = function(e) {
i.SandLocalData.setBgmEnabled(!e.isChecked);
i.SandLocalData.getBgmEnabled() ? c.SandGameMgr.playBgm() : c.SandGameMgr.pauseBgm();
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_bgm_button_click);
};
t.prototype.onMoreBtn = function() {
if (!this.homeClick) {
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_moresetting_button_click);
u.hsgame.Native.showMoreSetting();
}
};
t.prototype.onMoreGamesBtn = function() {
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_moregame_button_click);
u.hsgame.UIManager.ins.open(l.SandUIConfig.SettingMoreUI, null, {
touchClose: !0
});
};
t.prototype.onReplayBtn = function() {
f.GameStatistics.instance.setDeadType(2);
h.default.ins.close(this.config);
i.SandLocalData.forceSave();
c.SandGameMgr.restart("settings");
S.SandAdManager.instance.resetGamePlayTime();
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_replay_button_click);
};
t.prototype.onHomeBtn = function() {
this.homeClick = !0;
u.hsgame.DataReporter.reportEvent(d.TrackEnum.game_setting_home_button_click);
c.SandGameMgr.pauseBgm();
h.default.ins.close(this.config);
c.SandGameMgr.saveGameState(!0);
i.SandLocalData.forceSave();
cc.director.loadScene("StartGameScene2");
};
t.prototype.leave = function() {
this.voiceNode && this.voiceNode.node.off("toggle", this.onVoiceToggle, this);
this.shakeNode && this.shakeNode.node.off("toggle", this.onShakeToggle, this);
e.prototype.leave.call(this);
};
r([ v(cc.Node) ], t.prototype, "closeNode", void 0);
r([ v(cc.Toggle) ], t.prototype, "voiceNode", void 0);
r([ v(cc.Toggle) ], t.prototype, "shakeNode", void 0);
r([ v(cc.Node) ], t.prototype, "moreNode", void 0);
r([ v(cc.Node) ], t.prototype, "moreGamesNode", void 0);
r([ v(cc.Node) ], t.prototype, "homeNode", void 0);
r([ v(cc.Node) ], t.prototype, "replayNode", void 0);
r([ v(cc.Toggle) ], t.prototype, "bgmNode", void 0);
return r([ _ ], t);
}(p.default);
n.SandSettingUI = b;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/ui/HSUIBase": void 0,
"../../../../resources/hsgame/ui/HSUIManager": void 0,
"../config/SandUIConfig": "SandUIConfig",
"../config/TrackEnum": "TrackEnum",
"../data/SandLocalData": "SandLocalData",
"../mgr/GameStatistics": "GameStatistics",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../mgr/SandAdManager": "SandAdManager",
"../mgr/SandGameMgr": "SandGameMgr",
"../utils/SandSoundUtils": "SandSoundUtils",
"./helpers/SandSettingUIHelper": "SandSettingUIHelper"
} ],
SandSkinConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "86168NIfSZG5YPpY0qoq+CT", "SandSkinConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.getSkinConfig = void 0;
var o = e("../../../../resources/hsgame/hsApp"), a = e("../utils/SandUtils");
n.getSkinConfig = function() {
var e = new Map();
e.set("res/gameplay_bg", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_bg";
}
});
e.set("res/gameplay_bg", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_bg";
}
});
e.set("res/gameplay_icon_bubbles_1", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_1";
}
});
e.set("res/gameplay_icon_bubbles_2", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_2";
}
});
e.set("res/gameplay_icon_bubbles_3", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_3";
}
});
e.set("res/gameplay_icon_bubbles_4", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_4";
}
});
e.set("res/gameplay_icon_bubbles_5", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_5";
}
});
e.set("res/gameplay_icon_bubbles_6", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_6";
}
});
e.set("res/gameplay_icon_bubbles_7", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_7";
}
});
e.set("res/gameplay_icon_bubbles_8", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_8";
}
});
e.set("res/gameplay_icon_chaHao", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_chaHao";
}
});
e.set("res/gameplay_icon_fanHui", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_fanHui";
}
});
e.set("res/gameplay_icon_sheZhi", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_sheZhi";
}
});
e.set("res/gameplay_icon_yinXiao", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_yinXiao";
}
});
e.set("res/gameplay_icon_yinXiao_2", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_yinXiao_2";
}
});
e.set("res/gameplay_icon_zhenDong", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_zhenDong";
}
});
e.set("res/gameplay_icon_zhenDong_2", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_zhenDong_2";
}
});
e.set("res/gameplay_icon_bubbles_8", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/gameplay_icon_bubbles_8";
}
});
e.set("res/prefab/settingBtn", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/prefab/settingBtn";
}
});
e.set("res/prefab/bg2", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/prefab/bg2";
}
});
e.set("res/prefab/score", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/prefab/score";
}
});
e.set("res/prefab/flower", {
condition: function() {
return a.SandUtils.isWoodSkin();
},
replaceFunc: function() {
return "res_wooden/prefab/flower";
}
});
e.set("res/prefabs/MainUI", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/MainUI" : a.SandUtils.isWoodSkin() ? "res/prefabs/woodskin/MainUI" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/MainUI" : a.SandUtils.isNeonSkin() ? o.hsApp.isSandCrushGame() ? "neonskin_sand/prefabs/MainUI" : "neonskin/prefabs/MainUI" : void 0;
}
});
e.set("res/prefabs/UI/setting", {
condition: function() {
return a.SandUtils.isPixelSkin() || a.SandUtils.isWoodSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isPixelSkin() ? o.hsApp.isSandCrushGame() ? "res/prefabs/UI/setting" : "res/prefabs/UI/setting_bb" : a.SandUtils.isNonPixelSkin() ? o.hsApp.isSandCrushGame() ? "nonpixelskin/prefabs/setting_sc" : "nonpixelskin/prefabs/setting" : a.SandUtils.isWoodSkin() ? "res/prefabs/woodskin/setting" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/setting" : a.SandUtils.isNeonSkin() ? o.hsApp.isSandCrushGame() ? "neonskin_sand/prefabs/setting" : "neonskin/prefabs/setting" : void 0;
}
});
e.set("res/prefabs/UI/moregame", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isWoodSkin2() || a.SandUtils.isNonPixelSkin();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() && o.hsApp.isSandCrushGame() ? "neonskin_sand/prefabs/moregame" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/moregame" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/moregame" : "res/prefabs/woodskin/moregame";
}
});
e.set("res/prefabs/UI/overUI", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? o.hsApp.isSandCrushGame() ? "neonskin_sand/prefabs/overUI" : "neonskin/prefabs/overUI" : a.SandUtils.isNonPixelSkin() ? o.hsApp.isSandCrushGame() ? "nonpixelskin/prefabs/overUI_sc" : "nonpixelskin/prefabs/overUI" : a.SandUtils.isWoodSkin() ? "res/prefabs/woodskin/overUI" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/overUI" : void 0;
}
});
e.set("res/prefabs/UI/overUIBest", {
condition: function() {
return a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/prefabs/overUIBest" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/overUIBest" : void 0;
}
});
e.set("res/prefabs/UI/loading", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/loading" : a.SandUtils.isNeonSkin() ? "neonskin_sand/prefabs/loading" : a.SandUtils.isWoodSkin() ? "res/prefabs/woodskin/loading" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/loading" : void 0;
}
});
e.set("res/prefabs/UI/StarView", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
if (a.SandUtils.isNeonSkin()) {
if (o.hsApp.isSandCrushGame()) return "neonskin_sand/prefabs/StarView";
} else {
if (a.SandUtils.isNonPixelSkin()) return "nonpixelskin/prefabs/StarView";
if (a.SandUtils.isWoodSkin2()) return "woodskin2_sand/prefabs/StarView";
}
return "res/prefabs/UI/StarViewBlock";
}
});
e.set("res/prefabs/UI/reviveUI", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/prefabs/reviveUI" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/reviveUI" : a.SandUtils.isWoodSkin() ? "res/prefabs/woodskin/reviveUI" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/spine/reviveUI" : void 0;
}
});
e.set("res/prefabs/spine/teaching", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/prefabs/spine/teaching" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/spine/teaching" : a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2() ? "res/prefabs/spine/woodskin/teaching" : void 0;
}
});
e.set("res/prefabs/spine/motivationwords", {
condition: function() {
return a.SandUtils.isWoodSkin() || a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/prefabs/spine/motivationwords" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/spine/motivationwords" : a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2() ? "res/prefabs/spine/woodskin/motivationwords" : void 0;
}
});
e.set("res/prefabs/spine/combo", {
condition: function() {
return a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/prefabs/spine/combo" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/prefabs/spine/combo" : a.SandUtils.isWoodSkin() ? "res/prefabs/spine/woodskin/combo" : a.SandUtils.isWoodSkin2() ? "woodskin2_sand/prefabs/spine/combo" : void 0;
}
});
e.set("sand.fire", {
condition: function() {
return a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/sand" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/sand" : a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2() ? "woodsand" : void 0;
}
});
e.set("start.fire", {
condition: function() {
return a.SandUtils.isNeonSkin() || a.SandUtils.isNonPixelSkin() || a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2();
},
replaceFunc: function() {
return a.SandUtils.isNeonSkin() ? "neonskin/start" : a.SandUtils.isNonPixelSkin() ? "nonpixelskin/start" : a.SandUtils.isWoodSkin() || a.SandUtils.isWoodSkin2() ? "woodstart" : void 0;
}
});
return e;
};
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsApp": void 0,
"../utils/SandUtils": "SandUtils"
} ],
SandSnapshot: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6f541kEkW1Bso1v/Sus6cul", "SandSnapshot");
var o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, n = 1, o = arguments.length; n < o; n++) {
t = arguments[n];
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
}
return e;
}).apply(this, arguments);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandSnapshot = n.attributeNum = void 0;
var a = e("../mgr/SandGameMgr"), r = e("../sandLogic/SandBlockPoolUtils"), i = e("../sandLogic/SandMapHelper"), c = e("../sandLogic/SandObjectPoolFactory");
n.attributeNum = new Map();
n.attributeNum.set("color", {
num: 4,
isBoolean: !1
});
n.attributeNum.set("isDamp", {
num: 1,
isBoolean: !0
});
n.attributeNum.set("dampColor", {
num: 3,
isBoolean: !1
});
n.attributeNum.set("row", {
num: 8,
isBoolean: !1
});
n.attributeNum.set("col", {
num: 8,
isBoolean: !1
});
n.attributeNum.set("movable", {
num: 1,
isBoolean: !0
});
var s = function() {
function e(e, t) {
this._savedBoxBlocks = this.compressBoxDataList(e);
this._savedMap = this.compressMapData(t);
}
e.prototype.checkRestore = function() {
var e = this.decompressMapData(this._savedMap);
if (!e) return !1;
a.SandGameMgr.getBoxLogic().setSyncData(e);
var t = this.decompressBoxDataList(this._savedBoxBlocks);
r.SandBlockPoolUtils.ins.setBoxData(t);
return !0;
};
e.prototype.compressBoxDataList = function(e) {
for (var t = [], n = 0; n < e.length; n++) {
var o = e[n];
if (null === o) t.push(null); else {
var a = this.compressSandsToIntArray(o);
t.push(a);
}
}
return t;
};
e.prototype.compressSandsToIntArray = function(e) {
for (var t = [], o = 0; o < e.length; o++) {
for (var a = [], r = !1, i = function(t) {
var i = e[o][t];
if (null === i) a.push(-1); else {
r = !0;
var c = 0, s = 0;
n.attributeNum.forEach(function(e, t) {
if (e.isBoolean) {
c |= i[t] ? 1 << s : 0;
s += e.num;
} else {
c |= i[t] << s;
s += e.num;
}
});
a.push(c);
}
}, c = 0; c < e[o].length; c++) i(c);
if (r) {
var s = this.runLengthEncode(a);
t.push(s);
} else t.push([]);
}
return t;
};
e.prototype.runLengthEncode = function(e) {
if (0 === e.length) return [];
for (var t = [], n = e[0], o = 1, a = 1; a < e.length; a++) if (e[a] === n) o++; else {
t.push(n, o);
n = e[a];
o = 1;
}
t.push(n, o);
return t;
};
e.prototype.decompressBoxDataList = function(e) {
for (var t = [], n = 0; n < e.length; n++) {
var o = e[n];
if (null === o) t.push(null); else {
var a = this.restoreSandsFromIntArray(o);
t.push(a);
}
}
return t;
};
e.prototype.restoreSandsFromIntArray = function(e) {
for (var t = [], o = 0; o < e.length; o++) {
var a = [];
if (0 === e[o].length) for (var r = e.length > 0 && e.find(function(e) {
return e.length > 0;
}) ? this.getDecodedLength(e.find(function(e) {
return e.length > 0;
})) : i.SandMapHelper.maxCol, s = 0; s < r; s++) a.push(null); else {
var l = this.runLengthDecode(e[o]), u = function(e) {
var t = l[e];
if (-1 === t) a.push(null); else {
var r = c.SandObjectPoolFactory.ins.get(), s = 0;
n.attributeNum.forEach(function(e, n) {
if (e.isBoolean) {
var o = 1;
r[n] = 1 == (t >> s & o);
s += e.num;
} else {
o = (1 << e.num) - 1;
r[n] = t >> s & o;
s += e.num;
}
});
var u = i.SandMapHelper.getPos(o, e);
r.x = u.x;
r.y = u.y;
a.push(r);
}
};
for (s = 0; s < l.length; s++) u(s);
}
t.push(a);
}
return t;
};
e.prototype.runLengthDecode = function(e) {
for (var t = [], n = 0; n < e.length; n += 2) for (var o = e[n], a = e[n + 1], r = 0; r < a; r++) t.push(o);
return t;
};
e.prototype.getDecodedLength = function(e) {
for (var t = 0, n = 1; n < e.length; n += 2) t += e[n];
return t;
};
e.prototype.compressMapData = function(e) {
if (!e) return null;
var t = o({}, e);
e.mapSands && (t.mapSands = this.compressSandsToIntArray(e.mapSands));
e.boxSands && (t.boxSands = this.compressSandsToIntArray(e.boxSands));
return t;
};
e.prototype.decompressMapData = function(e) {
if (!e) return !1;
var t = o({}, e);
if (e.mapSands) {
t.mapSands = this.restoreSandsFromIntArray(e.mapSands);
if (t.mapSands.length !== i.SandMapHelper.maxRow || t.mapSands[0].length !== i.SandMapHelper.maxCol) return !1;
}
e.boxSands && (t.boxSands = this.restoreSandsFromIntArray(e.boxSands));
return t;
};
return e;
}();
n.SandSnapshot = s;
cc._RF.pop();
}, {
"../mgr/SandGameMgr": "SandGameMgr",
"../sandLogic/SandBlockPoolUtils": "SandBlockPoolUtils",
"../sandLogic/SandMapHelper": "SandMapHelper",
"../sandLogic/SandObjectPoolFactory": "SandObjectPoolFactory"
} ],
SandSoundUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "61bc3L5L6hG3J+8KD2V/rxp", "SandSoundUtils");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandSoundUtils = n.SAND_SOUND_EFFECT = void 0;
var r = e("../data/SandLocalData"), i = e("./SandUtils");
(function(e) {
e.HUGE_BLAST = "sand_huge";
e.SERIAL_BLAST = "sand_serial";
e.ALL_CLEAR = "sand_allclear";
e.SREAK1 = "e_score_streak_1";
e.SREAK2 = "e_score_streak_2";
e.SREAK3 = "e_score_streak_3";
e.SREAK4 = "e_score_streak_4";
e.SREAK5 = "e_score_streak_5";
e.SREAK6 = "e_score_streak_6";
e.SREAK7 = "e_score_streak_7";
e.SREAK8 = "e_score_streak_8";
e.SREAK9 = "e_score_streak_9";
e.SREAK10 = "e_score_streak_10";
e.PUT = "s_put";
e.TOUCH = "s_touch";
e.CLICK = "s_button";
e.REVIVE = "revive";
e.COUNT_TIME = "counttime";
e.SNAD_DOWN = "sand_down";
e.COUNT = "count";
e.SAND_FAIL = "sand_fail";
e.CLOCK_POP = "clock_pop";
e.SAND_PUT = "sand_put";
e.SAND_POUR = "sand_pour";
e.GOOD = "good";
e.GREAT = "great";
e.AMAZING = "amazing";
e.UNBELIEVABLE = "unbelievable";
e.EXCELLENT = "excellent";
})(n.SAND_SOUND_EFFECT || (n.SAND_SOUND_EFFECT = {}));
var c = function() {
function e() {}
e.playEffectOnce = function(t) {
return o(this, void 0, Promise, function() {
var n;
return a(this, function(o) {
switch (o.label) {
case 0:
if (!r.SandLocalData.getSoundEnabled()) return [ 2 ];
if (e.mapAudio.has(t)) return [ 2, e.mapAudio.get(t) ];
e.mapAudio.set(t, -1);
return [ 4, i.SandUtils.playAudio(t) ];

case 1:
if (null == (n = o.sent()) || n < 0) {
console.error("[SandSoundUtils] 音频播放失败:", t);
e.mapAudio.delete(t);
return [ 2, null ];
}
e.mapAudio.set(t, n);
cc.audioEngine.setFinishCallback(n, function() {
e.mapAudio && e.mapAudio.has(t) && e.mapAudio.delete(t);
});
return [ 2, n ];
}
});
});
};
e.playEffect = function(t) {
return o(this, void 0, Promise, function() {
var n;
return a(this, function(o) {
switch (o.label) {
case 0:
return r.SandLocalData.getSoundEnabled() ? [ 4, i.SandUtils.playAudio(t) ] : [ 2 ];

case 1:
n = o.sent();
e.mapAudio.set(t, n);
return [ 2, n ];
}
});
});
};
e.playLoopEffect = function(t) {
return o(this, void 0, void 0, function() {
var n;
return a(this, function(o) {
switch (o.label) {
case 0:
return [ 4, e.playEffect(t) ];

case 1:
n = o.sent();
cc.audioEngine.setLoop(n, !0);
return [ 2 ];
}
});
});
};
e.stopEffect = function(t) {
return o(this, void 0, void 0, function() {
var n;
return a(this, function() {
if (!r.SandLocalData.getSoundEnabled()) return [ 2 ];
if (!e.mapAudio || !e.mapAudio.has(t)) return [ 2 ];
if (null != (n = e.mapAudio.get(t)) && n >= 0) try {
cc.audioEngine.stop(n);
} catch (e) {
console.error("[SandSoundUtils] 停止音频时发生错误:", e);
}
e.mapAudio && e.mapAudio.has(t) && e.mapAudio.delete(t);
return [ 2 ];
});
});
};
e.mapAudio = new Map();
return e;
}();
n.SandSoundUtils = c;
cc._RF.pop();
}, {
"../data/SandLocalData": "SandLocalData",
"./SandUtils": "SandUtils"
} ],
SandStarViewManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a44d3vLkbhPT6LOx4+/Vvzj", "SandStarViewManager");
var o = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandStarViewManager = n.DataChangeType = void 0;
var a, r = e("../config/SandUIConfig"), i = e("./HSUIMgrAdapter");
(function(e) {
e.SCORE = "score";
e.TIME = "time";
e.ELIMINATE = "eliminate";
e.GAME_START = "game_start";
e.GAME_END = "game_end";
e.UNLOCK = "unlock";
})(a = n.DataChangeType || (n.DataChangeType = {}));
var c = function() {
function e() {
this.conditions = new Map();
this.isShowing = !1;
this.lastShowTime = 0;
this.showInterval = 3e4;
this.STORAGE_PREFIX = "SandStarView_";
this.registerDefaultConditions();
}
e.getInstance = function() {
this.instance || (this.instance = new e());
return this.instance;
};
e.prototype.registerCondition = function(e) {
this.conditions.set(e.id, e);
e.id;
};
e.prototype.removeCondition = function(e) {
this.conditions.delete(e);
};
e.prototype.onDataChange = function(e, t) {
var n, a, r = Array.from(this.conditions.values()).filter(function(t) {
return t.dataType === e;
});
try {
for (var i = o(r), c = i.next(); !c.done; c = i.next()) {
var s = c.value;
this.checkAndTrigger(s, t);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
c && !c.done && (a = i.return) && a.call(i);
} finally {
if (n) throw n.error;
}
}
};
e.prototype.checkAndTrigger = function(e, t) {
if (!this.isShowing && !(Date.now() - this.lastShowTime < this.showInterval) && (!e.isDailyLimit || !this.isDailyTriggered(e.id)) && e.checkFunction(t)) {
e.id;
e.isDailyLimit && this.setDailyTriggered(e.id);
this.showStarView();
}
};
e.prototype.onScoreChange = function(e) {
this.onDataChange(a.SCORE, e);
};
e.prototype.onTimeChange = function(e) {
this.onDataChange(a.TIME, e);
};
e.prototype.onEliminateChange = function(e) {
this.onDataChange(a.ELIMINATE, e);
};
e.prototype.onGameStart = function() {
this.onDataChange(a.GAME_START, null);
};
e.prototype.onGameEnd = function(e) {
this.onDataChange(a.GAME_END, e);
};
e.prototype.onUnlock = function(e) {
this.onDataChange(a.UNLOCK, e);
};
e.prototype.isDailyTriggered = function(e) {
var t = this.getTodayString(), n = "" + this.STORAGE_PREFIX + e + "_" + t;
return "true" === localStorage.getItem(n);
};
e.prototype.setDailyTriggered = function(e) {
var t = this.getTodayString(), n = "" + this.STORAGE_PREFIX + e + "_" + t;
localStorage.setItem(n, "true");
};
e.prototype.getTodayString = function() {
var e = new Date();
return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
};
e.prototype.showStarView = function() {
try {
this.isShowing = !0;
this.lastShowTime = Date.now();
i.HSUIMgrAdapter.show(r.SandUIConfig.StarView);
return !0;
} catch (e) {
console.error("[SandStarViewManager] 显示 StarView 失败:", e);
this.isShowing = !1;
return !1;
}
};
e.prototype.onStarViewClosed = function() {
this.isShowing = !1;
};
e.prototype.registerDefaultConditions = function() {
var e = this;
this.registerCondition({
id: "daily_first_score_5w",
dataType: a.GAME_END,
isDailyLimit: !0,
checkFunction: function(e) {
return e >= 5e4;
},
description: "每日首次得分大于5万，对局结束触发评分弹窗"
});
this.registerCondition({
id: "game_start_5s",
dataType: a.GAME_START,
checkFunction: function() {
setTimeout(function() {
e.isShowing || e.showStarView();
}, 5e3);
return !1;
},
description: "游戏开始5秒后弹出评分框"
});
this.registerCondition({
id: "daily_first_unlock_color",
dataType: a.UNLOCK,
isDailyLimit: !0,
checkFunction: function(e) {
return "thirdColor" === e;
},
description: "每日首次解锁第三个颜色"
});
this.registerCondition({
id: "first_300_seconds",
dataType: a.TIME,
checkFunction: function(e) {
return e >= 300;
},
description: "300秒首次弹出评分框"
});
this.registerCondition({
id: "score_10k",
dataType: a.SCORE,
checkFunction: function(e) {
return e >= 1e4;
},
description: "得分超出10000分时触发"
});
this.registerCondition({
id: "daily_first_3_eliminate",
dataType: a.ELIMINATE,
isDailyLimit: !0,
checkFunction: function(e) {
return e >= 3;
},
description: "每日首次3消以上触发评分弹窗"
});
};
e.instance = null;
return e;
}();
n.SandStarViewManager = c;
cc._RF.pop();
}, {
"../config/SandUIConfig": "SandUIConfig",
"./HSUIMgrAdapter": "HSUIMgrAdapter"
} ],
SandTileColorHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d7940ymodtLOJy0iC6DP2iS", "SandTileColorHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandTileColorHelper = void 0;
var o = e("../../utils/SandUtils"), a = [ [ cc.color().fromHEX("#449432"), cc.color().fromHEX("#416db3"), cc.color().fromHEX("#1e8898"), cc.color().fromHEX("#c86527"), cc.color().fromHEX("#874da3"), cc.color().fromHEX("#c23132"), cc.color().fromHEX("#d99607"), cc.color().fromHEX("#c13f7c") ], [ cc.color().fromHEX("#72b342"), cc.color().fromHEX("#558dd3"), cc.color().fromHEX("#45b5c5"), cc.color().fromHEX("#e5823f"), cc.color().fromHEX("#a65dc9"), cc.color().fromHEX("#fd3333"), cc.color().fromHEX("#e7bb0b"), cc.color().fromHEX("#f6609c") ] ], r = [ [ cc.color().fromHEX("#367426"), cc.color().fromHEX("#335587"), cc.color().fromHEX("#176a75"), cc.color().fromHEX("#aa4a0f"), cc.color().fromHEX("#74378d"), cc.color().fromHEX("#9b1e1e"), cc.color().fromHEX("#b87706"), cc.color().fromHEX("#9c1b5b") ], [ cc.color().fromHEX("#3d852b"), cc.color().fromHEX("#3a629c"), cc.color().fromHEX("#1f8696"), cc.color().fromHEX("#bc591d"), cc.color().fromHEX("#863d9c"), cc.color().fromHEX("#b51c1c"), cc.color().fromHEX("#c48703"), cc.color().fromHEX("#bf286c") ] ], i = [ [ cc.color().fromHEX("#3c812a"), cc.color().fromHEX("#32578c"), cc.color().fromHEX("#1a7682"), cc.color().fromHEX("#ba4c09"), cc.color().fromHEX("#7e3997"), cc.color().fromHEX("#b02727"), cc.color().fromHEX("#c2800c"), cc.color().fromHEX("#a71d68") ], [ cc.color().fromHEX("#449430"), cc.color().fromHEX("#416dae"), cc.color().fromHEX("#2395a7"), cc.color().fromHEX("#c85916"), cc.color().fromHEX("#8e42a6"), cc.color().fromHEX("#cc2222"), cc.color().fromHEX("#d99709"), cc.color().fromHEX("#d0337a") ] ], c = [ [ cc.color().fromHEX("#3c8e27"), cc.color().fromHEX("#38629e"), cc.color().fromHEX("#127f8d"), cc.color().fromHEX("#be5614"), cc.color().fromHEX("#89409e"), cc.color().fromHEX("#bc2828"), cc.color().fromHEX("#ca8711"), cc.color().fromHEX("#b92669") ], [ cc.color().fromHEX("#4ca636"), cc.color().fromHEX("#497bc3"), cc.color().fromHEX("#27a8bc"), cc.color().fromHEX("#cf6525"), cc.color().fromHEX("#9e4cb8"), cc.color().fromHEX("#db2525"), cc.color().fromHEX("#e9a30c"), cc.color().fromHEX("#d93680") ] ], s = [ [ cc.color().fromHEX("0c9728"), cc.color().fromHEX("0f58df"), cc.color().fromHEX("1e9be3"), cc.color().fromHEX("b05d1a"), cc.color().fromHEX("8d14ba"), cc.color().fromHEX("a81d1d"), cc.color().fromHEX("c7c018"), cc.color().fromHEX("b53d72") ], [ cc.color().fromHEX("51cb34"), cc.color().fromHEX("2369ef"), cc.color().fromHEX("1fceee"), cc.color().fromHEX("e97e17"), cc.color().fromHEX("b823f6"), cc.color().fromHEX("ca2424"), cc.color().fromHEX("e6df1c"), cc.color().fromHEX("e2518b") ] ], l = [ [ cc.color().fromHEX("088120"), cc.color().fromHEX("0f4ab9"), cc.color().fromHEX("1889c9"), cc.color().fromHEX("9c5318"), cc.color().fromHEX("5f0d7d"), cc.color().fromHEX("7e1414"), cc.color().fromHEX("afa915"), cc.color().fromHEX("a33164") ], [ cc.color().fromHEX("37a11d"), cc.color().fromHEX("1b5cd9"), cc.color().fromHEX("1cbdda"), cc.color().fromHEX("cc6c0e"), cc.color().fromHEX("891bb7"), cc.color().fromHEX("971515"), cc.color().fromHEX("cbc41b"), cc.color().fromHEX("d1467d") ] ], u = [ [ cc.color().fromHEX("057e1e"), cc.color().fromHEX("1152cd"), cc.color().fromHEX("198dcf"), cc.color().fromHEX("a55719"), cc.color().fromHEX("6e0f91"), cc.color().fromHEX("9d1b1b"), cc.color().fromHEX("bbb519"), cc.color().fromHEX("b1386e") ], [ cc.color().fromHEX("3cae20"), cc.color().fromHEX("2163e4"), cc.color().fromHEX("1dc2e0"), cc.color().fromHEX("d8720e"), cc.color().fromHEX("961cc9"), cc.color().fromHEX("c02121"), cc.color().fromHEX("d2cb1d"), cc.color().fromHEX("d64b82") ] ], d = [ [ cc.color().fromHEX("10a02d"), cc.color().fromHEX("1861ea"), cc.color().fromHEX("39abed"), cc.color().fromHEX("ab5c1c"), cc.color().fromHEX("922db8"), cc.color().fromHEX("b11e1e"), cc.color().fromHEX("d0c921"), cc.color().fromHEX("c0427a") ], [ cc.color().fromHEX("58d13b"), cc.color().fromHEX("3173f2"), cc.color().fromHEX("49d5ef"), cc.color().fromHEX("e07b18"), cc.color().fromHEX("c03cf7"), cc.color().fromHEX("d62c2c"), cc.color().fromHEX("e5de23"), cc.color().fromHEX("e95992") ] ], p = [ [ cc.color().fromHEX("#1e9601"), cc.color().fromHEX("#0057e6"), cc.color().fromHEX("#009ee0"), cc.color().fromHEX("#b74500"), cc.color().fromHEX("#8100e4"), cc.color().fromHEX("#8c1516"), cc.color().fromHEX("#bc9f00"), cc.color().fromHEX("#bf3aba") ], [ cc.color().fromHEX("#2bb10a"), cc.color().fromHEX("#1266ff"), cc.color().fromHEX("#12b9ff"), cc.color().fromHEX("#e05107"), cc.color().fromHEX("#9812ff"), cc.color().fromHEX("#b11a1d"), cc.color().fromHEX("#d2bc02"), cc.color().fromHEX("#dc4cd7") ] ], h = [ [ cc.color().fromHEX("#145d02"), cc.color().fromHEX("#003b9d"), cc.color().fromHEX("#00658f"), cc.color().fromHEX("#7b2c04"), cc.color().fromHEX("#590585"), cc.color().fromHEX("#690203"), cc.color().fromHEX("#7d5803"), cc.color().fromHEX("#710062") ], [ cc.color().fromHEX("#177600"), cc.color().fromHEX("#0042bc"), cc.color().fromHEX("#0077a8"), cc.color().fromHEX("#923403"), cc.color().fromHEX("#5d0899"), cc.color().fromHEX("#7b0205"), cc.color().fromHEX("#8c6a02"), cc.color().fromHEX("#95007e") ] ], f = [ [ cc.color().fromHEX("#187800"), cc.color().fromHEX("#0047bd"), cc.color().fromHEX("#077fb1"), cc.color().fromHEX("#8c3000"), cc.color().fromHEX("#5d03a3"), cc.color().fromHEX("#770506"), cc.color().fromHEX("#916707"), cc.color().fromHEX("#8f0674") ], [ cc.color().fromHEX("#1c8602"), cc.color().fromHEX("#0050e1"), cc.color().fromHEX("#0390ca"), cc.color().fromHEX("#a03700"), cc.color().fromHEX("#6c00b7"), cc.color().fromHEX("#8b0509"), cc.color().fromHEX("#a17900"), cc.color().fromHEX("#a60c84") ] ], g = [ [ cc.color().fromHEX("#1a8400"), cc.color().fromHEX("#004fd1"), cc.color().fromHEX("#0092cf"), cc.color().fromHEX("#a33700"), cc.color().fromHEX("#6e00c2"), cc.color().fromHEX("#810002"), cc.color().fromHEX("#937900"), cc.color().fromHEX("#951290") ], [ cc.color().fromHEX("#1d9600"), cc.color().fromHEX("#0057f7"), cc.color().fromHEX("#009dde"), cc.color().fromHEX("#b74206"), cc.color().fromHEX("#7d00d5"), cc.color().fromHEX("#9b070a"), cc.color().fromHEX("#ab8d00"), cc.color().fromHEX("#b91eb4") ] ], S = [ [ cc.color().fromHEX("228e08"), cc.color().fromHEX("0b59db"), cc.color().fromHEX("0b99d5"), cc.color().fromHEX("ae4709"), cc.color().fromHEX("7e0ac8"), cc.color().fromHEX("861b1c"), cc.color().fromHEX("b39809"), cc.color().fromHEX("e93ee2") ], [ cc.color().fromHEX("2fa912"), cc.color().fromHEX("1d68f3"), cc.color().fromHEX("1db3f3"), cc.color().fromHEX("d55411"), cc.color().fromHEX("9221ea"), cc.color().fromHEX("a92124"), cc.color().fromHEX("c8b30c"), cc.color().fromHEX("f760e6") ] ], m = [ [ cc.color().fromHEX("165806"), cc.color().fromHEX("073c95"), cc.color().fromHEX("76288"), cc.color().fromHEX("752e0a"), cc.color().fromHEX("5c0788"), cc.color().fromHEX("640708"), cc.color().fromHEX("775509"), cc.color().fromHEX("6b055d") ], [ cc.color().fromHEX("1b7006"), cc.color().fromHEX("0945b3"), cc.color().fromHEX("0873a0"), cc.color().fromHEX("8b360a"), cc.color().fromHEX("670fa6"), cc.color().fromHEX("75080b"), cc.color().fromHEX("856608"), cc.color().fromHEX("9e137f") ] ], y = [ [ cc.color().fromHEX("1c7206"), cc.color().fromHEX("0949b4"), cc.color().fromHEX("0f7ba8"), cc.color().fromHEX("853207"), cc.color().fromHEX("681291"), cc.color().fromHEX("710a0b"), cc.color().fromHEX("8a630d"), cc.color().fromHEX("8e1889") ], [ cc.color().fromHEX("1f7f08"), cc.color().fromHEX("0b53d6"), cc.color().fromHEX("0c8bc0"), cc.color().fromHEX("983908"), cc.color().fromHEX("6f14b1"), cc.color().fromHEX("840b0f"), cc.color().fromHEX("997508"), cc.color().fromHEX("b125ac") ] ], _ = [ [ cc.color().fromHEX("1d7d06"), cc.color().fromHEX("0c5aeb"), cc.color().fromHEX("0a8dc5"), cc.color().fromHEX("9b3908"), cc.color().fromHEX("7109ad"), cc.color().fromHEX("7a0608"), cc.color().fromHEX("8c7407"), cc.color().fromHEX("b431ae") ], [ cc.color().fromHEX("218e07"), cc.color().fromHEX("0949b4"), cc.color().fromHEX("0b98d3"), cc.color().fromHEX("ae440e"), cc.color().fromHEX("7a0aca"), cc.color().fromHEX("940e11"), cc.color().fromHEX("a28608"), cc.color().fromHEX("ce3cc9") ] ], v = [ [ cc.color().fromHEX("009a07"), cc.color().fromHEX("0054f2"), cc.color().fromHEX("00b4c9"), cc.color().fromHEX("f45c00"), cc.color().fromHEX("510fb4"), cc.color().fromHEX("cc0003"), cc.color().fromHEX("df9a00"), cc.color().fromHEX("e72d89") ], [ cc.color().fromHEX("00b709"), cc.color().fromHEX("1486ff"), cc.color().fromHEX("00dfff"), cc.color().fromHEX("ff9000"), cc.color().fromHEX("8e42ff"), cc.color().fromHEX("ff3b3b"), cc.color().fromHEX("ffc621"), cc.color().fromHEX("f05fa6") ], [ cc.color().fromHEX("3def23"), cc.color().fromHEX("4ebdff"), cc.color().fromHEX("2cfff8"), cc.color().fromHEX("ffba61"), cc.color().fromHEX("bf66ff"), cc.color().fromHEX("ff7c7c"), cc.color().fromHEX("ffff4d"), cc.color().fromHEX("ff81bf") ] ], b = [ [ cc.color().fromHEX("007505"), cc.color().fromHEX("004ad5"), cc.color().fromHEX("008f9d"), cc.color().fromHEX("de3a00"), cc.color().fromHEX("4e0fae"), cc.color().fromHEX("9b0002"), cc.color().fromHEX("aa7400"), cc.color().fromHEX("c2005f") ], [ cc.color().fromHEX("008b07"), cc.color().fromHEX("0475ee"), cc.color().fromHEX("00adc3"), cc.color().fromHEX("ff5d04"), cc.color().fromHEX("731ff2"), cc.color().fromHEX("e30c0c"), cc.color().fromHEX("d5a007"), cc.color().fromHEX("da1174") ], [ cc.color().fromHEX("1fca07"), cc.color().fromHEX("109bee"), cc.color().fromHEX("09dad3"), cc.color().fromHEX("ff8d41"), cc.color().fromHEX("a329fd"), cc.color().fromHEX("e63a3a"), cc.color().fromHEX("eded0f"), cc.color().fromHEX("de2f84") ] ], C = [ [ cc.color().fromHEX("008806"), cc.color().fromHEX("004ad5"), cc.color().fromHEX("00a0b4"), cc.color().fromHEX("e84900"), cc.color().fromHEX("4e0eae"), cc.color().fromHEX("b10003"), cc.color().fromHEX("c88a00"), cc.color().fromHEX("f9007c") ], [ cc.color().fromHEX("00a108"), cc.color().fromHEX("0475ee"), cc.color().fromHEX("00c7e4"), cc.color().fromHEX("ff7302"), cc.color().fromHEX("731ff2"), cc.color().fromHEX("ff1111"), cc.color().fromHEX("f8ba0a"), cc.color().fromHEX("ff2f95") ], [ cc.color().fromHEX("23ea07"), cc.color().fromHEX("26aeff"), cc.color().fromHEX("0dfef6"), cc.color().fromHEX("ffa14f"), cc.color().fromHEX("a329fd"), cc.color().fromHEX("ff4949"), cc.color().fromHEX("feff2b"), cc.color().fromHEX("ff5bab") ] ], A = [ [ cc.color().fromHEX("59bd5e"), cc.color().fromHEX("4384ff"), cc.color().fromHEX("7fd9e4"), cc.color().fromHEX("f78d4c"), cc.color().fromHEX("9164d4"), cc.color().fromHEX("db4c4e"), cc.color().fromHEX("ecc266"), cc.color().fromHEX("ee6cac") ], [ cc.color().fromHEX("59d05f"), cc.color().fromHEX("5aaaff"), cc.color().fromHEX("7feeff"), cc.color().fromHEX("ffb14c"), cc.color().fromHEX("b482ff"), cc.color().fromHEX("ff7575"), cc.color().fromHEX("ffdd7a"), cc.color().fromHEX("f48fc1") ], [ cc.color().fromHEX("81f570"), cc.color().fromHEX("83d0ff"), cc.color().fromHEX("95fffa"), cc.color().fromHEX("ffcf90"), cc.color().fromHEX("d294ff"), cc.color().fromHEX("ffa3a3"), cc.color().fromHEX("ffff94"), cc.color().fromHEX("ffa7d2") ] ], w = function() {
function e() {}
e.getColor = function(e, t) {
void 0 === t && (t = 1);
return e ? 1 === t ? o.SandUtils.isNeonSkin() ? b : o.SandUtils.isWoodSkin() ? r : o.SandUtils.isWoodSkin2() ? l : o.SandUtils.isNonPixelSkin() ? m : o.SandUtils.isPixelSkin() ? h : m : 2 === t ? o.SandUtils.isNeonSkin() ? C : o.SandUtils.isWoodSkin() ? i : o.SandUtils.isWoodSkin2() ? u : o.SandUtils.isNonPixelSkin() ? y : o.SandUtils.isPixelSkin() ? f : y : 3 === t ? o.SandUtils.isNeonSkin() ? A : o.SandUtils.isWoodSkin() ? c : o.SandUtils.isWoodSkin2() ? d : o.SandUtils.isNonPixelSkin() ? _ : o.SandUtils.isPixelSkin() ? g : _ : void 0 : o.SandUtils.isNeonSkin() ? v : o.SandUtils.isWoodSkin() ? a : o.SandUtils.isWoodSkin2() ? s : o.SandUtils.isNonPixelSkin() ? S : o.SandUtils.isPixelSkin() ? p : S;
};
return e;
}();
n.SandTileColorHelper = w;
cc._RF.pop();
}, {
"../../utils/SandUtils": "SandUtils"
} ],
SandTile: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4c2bcotaq1Du4ql0Akknr6Y", "SandTile");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandTile = void 0;
var o = function() {
function e() {
this.color = 0;
this.row = 0;
this.col = 0;
this.x = 0;
this.y = 0;
this.isDamp = !1;
this.dampColor = 0;
this.movable = !1;
}
e.prototype.reset = function() {
this.color = 0;
this.row = 0;
this.col = 0;
this.x = 0;
this.y = 0;
this.isDamp = !1;
this.movable = !1;
this.dampColor = 0;
};
return e;
}();
n.SandTile = o;
cc._RF.pop();
}, {} ],
SandTutorialFlow: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7da4fEs5gNEk7+tGfn0jwP1", "SandTutorialFlow");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandTutorialFlow = void 0;
var r = e("../data/SandLocalData"), i = e("../../../../resources/hsgame/hsgame"), c = e("../mgr/HSUIMgrAdapter"), s = e("../config/SandUIConfig"), l = e("../mgr/EventMgr"), u = e("../config/TrackEnum"), d = e("../mgr/SandAdManager"), p = function() {
function e() {
this.name = "TutorialFlow";
this.isRunning = !1;
this.completed = !1;
this.tutorialSpine = null;
this.isAnimationLoaded = !1;
this.isTouching = !1;
}
e.prototype.execute = function() {
return o(this, void 0, Promise, function() {
var e, t;
return a(this, function(n) {
switch (n.label) {
case 0:
(e = c.HSUIMgrAdapter.get(s.SandUIConfig.mainUI)) && (e.node.active = !0);
if (this.isRunning) return [ 2 ];
if (this.completed) return [ 2 ];
this.isRunning = !0;
d.SandAdManager.instance.showBanner();
n.label = 1;

case 1:
n.trys.push([ 1, 3, 4, 5 ]);
this.setupEventListeners();
return [ 4, this.executeTutorialSteps() ];

case 2:
n.sent();
return [ 3, 5 ];

case 3:
t = n.sent();
console.error("[SandTutorialFlow] 教程执行失败:", t);
this.removeEventListeners();
throw t;

case 4:
this.isRunning = !1;
return [ 7 ];

case 5:
return [ 2 ];
}
});
});
};
e.prototype.executeTutorialSteps = function() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.loadSpineAsset() ];

case 1:
e.sent();
this.showTutorialUI();
return [ 2 ];
}
});
});
};
e.prototype.setupEventListeners = function() {
l.EventMgr.on(l.EventType.drag_begin, this.onDragStart, this);
l.EventMgr.on(l.EventType.drag_cancel, this.onDragEnd, this);
l.EventMgr.on(l.EventType.placeSand, this.onBlockPlaced, this);
};
e.prototype.removeEventListeners = function() {
l.EventMgr.off(l.EventType.drag_begin, this.onDragStart, this);
l.EventMgr.off(l.EventType.drag_cancel, this.onDragEnd, this);
l.EventMgr.off(l.EventType.placeSand, this.onBlockPlaced, this);
};
e.prototype.onDragStart = function() {
this.isTouching = !0;
this.hideSpineAnimation();
};
e.prototype.onDragEnd = function() {
this.isTouching = !1;
this.showSpineAnimation();
};
e.prototype.onBlockPlaced = function() {
this.completeTutorial();
};
e.prototype.loadSpineAsset = function() {
return o(this, void 0, Promise, function() {
var e, t, n, o;
return a(this, function(a) {
switch (a.label) {
case 0:
if (!(e = c.HSUIMgrAdapter.get(s.SandUIConfig.mainUI))) {
console.error("[SandTutorialFlow] 无法获取主UI");
return [ 2 ];
}
if (!(t = e.node) || !cc.isValid(t, !0)) {
console.error("[SandTutorialFlow] 主UI节点无效");
return [ 2 ];
}
a.label = 1;

case 1:
a.trys.push([ 1, 3, , 4 ]);
return [ 4, i.hsgame.ResourceUtils.loadNode("res/prefabs/spine/teaching", t, "TutorialSpine", "sand_prefab") ];

case 2:
if (!(n = a.sent()) || !cc.isValid(n, !0)) {
console.error("[SandTutorialFlow] 加载Spine预制体失败或节点无效");
return [ 2 ];
}
if (!cc.isValid(t, !0) || !t.children) {
console.error("[SandTutorialFlow] 主UI节点在加载过程中变为无效");
n.destroy();
return [ 2 ];
}
n.setSiblingIndex(t.children.length - 1);
this.tutorialSpine = n.getComponent("sp.Skeleton");
if (!this.tutorialSpine) {
console.error("[SandTutorialFlow] 无法获取Spine组件");
n.destroy();
return [ 2 ];
}
this.tutorialSpine.node.setPosition(0, -580);
this.tutorialSpine.node.active = !1;
this.isAnimationLoaded = !0;
return [ 3, 4 ];

case 3:
o = a.sent();
console.error("[SandTutorialFlow] 加载Spine资源时发生异常:", o);
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.showTutorialUI = function() {
this.hideOtherBlocks();
this.showSpineAnimation();
i.hsgame.DataReporter.reportEvent(u.TrackEnum.usr_data_guide_start);
};
e.prototype.hideTutorialUI = function() {
this.showOtherBlocks();
this.hideSpineAnimation();
};
e.prototype.showSpineAnimation = function() {
if (this.tutorialSpine && this.isAnimationLoaded && !this.completed && !this.isTouching) {
this.tutorialSpine.node.active = !0;
this.tutorialSpine.setAnimation(0, "in", !0);
}
};
e.prototype.hideSpineAnimation = function() {
if (this.tutorialSpine && this.isAnimationLoaded) {
this.tutorialSpine.clearTracks();
this.tutorialSpine.node.active = !1;
}
};
e.prototype.hideOtherBlocks = function() {
l.EventMgr.emit(l.EventType.drawShapeOption);
};
e.prototype.showOtherBlocks = function() {};
e.prototype.completeTutorial = function() {
this.removeEventListeners();
this.completed = !0;
this.hideTutorialUI();
r.SandLocalData.SetData("tutorial_completed", !0);
i.hsgame.DataReporter.reportEvent(u.TrackEnum.usr_data_guide_end);
l.EventMgr.emit(l.EventType.tutorialCompleted);
};
e.prototype.isCompleted = function() {
return this.completed;
};
e.prototype.reset = function() {
this.isRunning = !1;
this.completed = !1;
this.isAnimationLoaded = !1;
if (this.tutorialSpine && cc.isValid(this.tutorialSpine.node, !0)) {
this.tutorialSpine.clearTracks();
this.tutorialSpine.node.destroy();
}
this.tutorialSpine = null;
this.removeEventListeners();
};
e.isFirstTimeUser = function() {
return !r.SandLocalData.GetData("tutorial_completed");
};
return e;
}();
n.SandTutorialFlow = p;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../config/SandUIConfig": "SandUIConfig",
"../config/TrackEnum": "TrackEnum",
"../data/SandLocalData": "SandLocalData",
"../mgr/EventMgr": "EventMgr",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"../mgr/SandAdManager": "SandAdManager"
} ],
SandUIConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d6e76tUOAFHO7Pz34GJi1J8", "SandUIConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandUIConfig = void 0;
var o = e("../../../../resources/hsgame/ui/HSUIInterface"), a = function() {
function e() {}
e.mainUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/MainUI",
cnName: "主界面",
layer: o.HSLayerType.GameUI,
cache: !1
};
e.loadingUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/loading",
cnName: "loading",
layer: o.HSLayerType.GameUI,
cache: !1
};
e.dialogUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/Dialogbox",
cnName: "对话框",
layer: o.HSLayerType.Dialog,
cache: !1
};
e.overUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/overUI",
cnName: "结束界面",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.overBestUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/overUIBest",
cnName: "结束界面",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.gmUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/GM/GmView",
cnName: "GM界面",
layer: o.HSLayerType.Notify,
cache: !1
};
e.reviveUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/reviveUI",
cnName: "复活界面",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.waitAdUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/woodskin/waitAd",
cnName: "等待广告界面",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.SettingUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/setting",
cnName: "setting",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.SettingMoreUI = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/moregame",
cnName: "moregames",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.StarView = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/StarView",
cnName: "评分反馈界面",
layer: o.HSLayerType.PopUp,
cache: !1
};
e.StageGoalPopup = {
bundle: "sand_prefab",
prefab: "res/prefabs/UI/levelup/SandLevelUp",
cnName: "阶段目标实现",
layer: o.HSLayerType.PopUp,
cache: !1
};
return e;
}();
n.SandUIConfig = a;
cc._RF.pop();
}, {
"../../../../resources/hsgame/ui/HSUIInterface": void 0
} ],
SandUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ed37dwgb3BBhJs11lDqb94j", "SandUtils");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandUtils = void 0;
var r = e("../../../../resources/hsgame/hsgame"), i = e("../config/FeaturesEnum"), c = e("../data/SandLocalData"), s = e("../config/SandDefines"), l = e("../../../../resources/hsgame/hsApp"), u = function() {
function e() {}
e.Vibrate = function(t) {
void 0 === t && (t = {});
return function(n, o, a) {
var r = a.value, i = t.strength, c = void 0 === i ? 3 : i, s = t.duration, l = void 0 === s ? 100 : s;
a.value = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.shake(c, l);
return r.apply(this, t);
};
return a;
};
};
e.shake = function(e, t) {
void 0 === e && (e = 3);
void 0 === t && (t = 100);
c.SandLocalData.getVibrationEnabled() && r.hsgame.Native.shakeOnce(e, t);
};
e.mixColorsV2 = function(e, t) {
var n = e.r, o = e.g, a = e.b, r = e.a / 255, i = t.r, c = t.g, s = t.b, l = t.a / 255, u = r * (1 - l) + l;
255 != e.a && 255 != t.a || (u = 1);
return cc.color(Math.round(n * r * (r - l) + i * l), Math.round(o * r * (r - l) + c * l), Math.round(a * r * (r - l) + s * l), Math.round(255 * u));
};
e.getCurrentSkinType = function() {
var e = s.SandSkinEnum.wood;
"block_blast_android" === l.hsApp.RUNTIME_ENV && (e = s.SandSkinEnum.pixel);
return r.hsgame.Features.intFeature(i.FeaturesEnum.sand_feat_skin) || e;
};
e.isWoodSkin = function() {
return this.getCurrentSkinType() === s.SandSkinEnum.wood;
};
e.isPixelSkin = function() {
return this.getCurrentSkinType() === s.SandSkinEnum.pixel;
};
e.isWoodSkin2 = function() {
return this.getCurrentSkinType() === s.SandSkinEnum.wood2;
};
e.isNonPixelSkin = function() {
return this.getCurrentSkinType() === s.SandSkinEnum.nonPixel;
};
e.isNeonSkin = function() {
return this.getCurrentSkinType() === s.SandSkinEnum.neon;
};
e.loadAudio = function(e) {
return o(this, void 0, void 0, function() {
var t;
return a(this, function(n) {
switch (n.label) {
case 0:
t = e;
return [ 4, r.hsgame.ResourceUtils.loadAudio(t, "sand_audio") ];

case 1:
n.sent();
return [ 2 ];
}
});
});
};
e.playAudio = function(e) {
return o(this, void 0, Promise, function() {
var t;
return a(this, function(n) {
switch (n.label) {
case 0:
t = this.getAudioPath(e);
return [ 4, r.hsgame.ResourceUtils.playAudio(t, "sand_audio") ];

case 1:
return [ 2, n.sent() ];
}
});
});
};
e.getAudioPath = function(e) {
return [ "amazing", "excellent", "great", "unbelievable", "excellent", "clock_pop", "count", "sand_pour", "sand_put" ].includes(e) && l.hsApp.isBlockBlastGame() ? "bb/" + e : e;
};
e.playBGM = function(e) {
return o(this, void 0, void 0, function() {
var t;
return a(this, function(n) {
switch (n.label) {
case 0:
t = this.getAudioPath(e);
return [ 4, r.hsgame.ResourceUtils.playBGM(t, "sand_audio") ];

case 1:
n.sent();
return [ 2 ];
}
});
});
};
e.formatScore = function(e) {
return e >= 1e6 ? Math.floor(e / 1e3) + "k" : e >= 1e3 ? Math.floor(e / 1e3) + "k" : e.toString();
};
e.inAppleTime = function() {
var e = new Date("2025-08-06T04:00:00.000Z").getTime();
return Date.now() <= e;
};
return e;
}();
n.SandUtils = u;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsApp": void 0,
"../../../../resources/hsgame/hsgame": void 0,
"../config/FeaturesEnum": "FeaturesEnum",
"../config/SandDefines": "SandDefines",
"../data/SandLocalData": "SandLocalData"
} ],
SandView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a80d5LJGapEY6N2PovqC+cJ", "SandView");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(a, r) {
function i(e) {
try {
s(o.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(o.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(i, c);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, a, r, i = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, r[1])).done) return a;
(o = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
i.label++;
return {
value: r[1],
done: !1
};

case 5:
i.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
i = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
i.label = r[1];
break;
}
if (6 === r[0] && i.label < a[1]) {
i.label = a[1];
a = r;
break;
}
if (a && i.label < a[2]) {
i.label = a[2];
i.ops.push(r);
break;
}
a[2] && i.ops.pop();
i.trys.pop();
continue;
}
r = t.call(e, i);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SandView = void 0;
var r = e("../mgr/EventMgr"), i = e("../utils/SandSoundUtils"), c = e("../utils/SandSoundUtils"), s = e("../mgr/SandGameMgr"), l = e("../data/SandLocalData"), u = e("./SandMapHelper"), d = e("../flow/SandFlowManager"), p = e("./SandBlockPoolUtils"), h = e("../../../../resources/hsgame/module/dataReporter/DataReporter"), f = e("../config/InitialBoard"), g = e("../config/SandDefines"), S = e("./SandObjectPoolFactory"), m = e("../config/TrackEnum"), y = e("../../../../resources/hsgame/hsgame"), _ = e("../mgr/SandAdManager"), v = e("../mgr/GameStatistics"), b = function() {
function e() {
this.boxContent = null;
this.content = null;
this.sandrender = null;
this.draggingRender = null;
this.clearRender = null;
this.deathGrayRender = null;
this.optionRender = null;
this.deadlineNode = null;
this.redLight = null;
this.dragStartPos = null;
this.dragThreshold = 0;
this.touchIndex = -1;
this.lineOffset = 0;
}
e.prototype.init = function(e) {
this.content = e.content;
this.deadlineNode = e.deadlineNode;
this.boxContent = e.boxContent;
this.sandrender = e.sandrender;
this.draggingRender = e.draggingRender;
this.clearRender = e.clearRender;
this.deathGrayRender = e.deathGrayRender;
this.optionRender = e.optionRender;
this.lineOffset = e.lineOffset;
this.redLight = e.redLight;
r.EventMgr.on(r.EventType.restart, this.onRestart, this);
r.EventMgr.on(r.EventType.revive, this.onRestart, this);
r.EventMgr.on(r.EventType.drawMapSand, this.onDrawMapSand, this);
r.EventMgr.on(r.EventType.drawBoxSand, this.onDrawBoxSand, this);
r.EventMgr.on(r.EventType.drawDragSand, this.onDrawDragSand, this);
r.EventMgr.on(r.EventType.clearSand, this.onClearSand, this);
r.EventMgr.on(r.EventType.gameOver, this.onGameOver, this);
r.EventMgr.on(r.EventType.drawShapeOption, this.drawShapeOption, this);
r.EventMgr.on(r.EventType.resetBox, this.resetBox, this);
this.content.setContentSize(u.SandMapHelper.contentWidth, this.content.height);
this.content.x = -u.SandMapHelper.contentWidth / 2;
this.setLineY();
this.deadlineNode.setContentSize(u.SandMapHelper.contentWidth, this.deadlineNode.getContentSize().height);
this.initTouchBox();
if (d.SandFlowManager.getInstance().isFirstTimeUser()) {
var t = f.InitialBoard;
p.SandBlockPoolUtils.ins.setNewbieData();
this.drawShapeOption();
s.SandGameMgr.getBoxLogic().setInitialBoard(t);
this.drawMapSand();
v.GameStatistics.instance.startGame();
} else this.tryRestoreGameState();
if (l.SandLocalData.isFirstInToGame) {
l.SandLocalData.isFirstInToGame = !1;
l.SandLocalData.immediatelyCache();
h.HsDataReporter.reportEvent(m.TrackEnum.usr_data_game_start, {
GameType: y.hsgame.App.GameType,
game_id: l.SandLocalData.playingCount
});
}
};
e.prototype.setLineY = function() {
this.deadlineNode.y = (l.SandLocalData.deadlineHeight - 1) * u.SandMapHelper.height + this.lineOffset;
};
e.prototype.lateUpdate = function() {
if (s.SandGameMgr.getBoxLogic().isActive()) {
s.SandGameMgr.getBoxLogic().isMapStable() || this.drawMapSand();
s.SandGameMgr.getBoxLogic().hasBoxData() && this.drawBoxSand();
s.SandGameMgr.getBoxLogic().hasDragData() && this.drawDragSand();
}
};
e.prototype.destroy = function() {
r.EventMgr.off(r.EventType.restart, this.onRestart, this);
r.EventMgr.off(r.EventType.revive, this.onRestart, this);
r.EventMgr.off(r.EventType.drawMapSand, this.onDrawMapSand, this);
r.EventMgr.off(r.EventType.drawBoxSand, this.onDrawBoxSand, this);
r.EventMgr.off(r.EventType.drawDragSand, this.onDrawDragSand, this);
r.EventMgr.off(r.EventType.clearSand, this.onClearSand, this);
r.EventMgr.off(r.EventType.gameOver, this.onGameOver, this);
r.EventMgr.off(r.EventType.drawShapeOption, this.drawShapeOption, this);
r.EventMgr.off(r.EventType.resetBox, this.resetBox, this);
};
e.prototype.isDragging = function() {
return -1 !== this.touchIndex;
};
e.prototype.tryRestoreGameState = function() {
return o(this, void 0, void 0, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
if (!s.SandGameMgr.hasSavedGameState()) return [ 3, 6 ];
if (!l.SandLocalData.isLastGameOver) return [ 3, 2 ];
s.SandGameMgr.doRestart();
return [ 4, this.resetBox() ];

case 1:
e.sent();
return [ 3, 5 ];

case 2:
if (!s.SandGameMgr.restoreGameState()) return [ 3, 3 ];
this.drawMapSand();
this.checkResetBox() || this.drawShapeOption();
return [ 3, 5 ];

case 3:
return [ 4, this.resetBox() ];

case 4:
e.sent();
e.label = 5;

case 5:
return [ 3, 8 ];

case 6:
return [ 4, this.resetBox() ];

case 7:
e.sent();
e.label = 8;

case 8:
_.SandAdManager.instance.showBanner();
return [ 2 ];
}
});
});
};
e.prototype.initTouchBox = function() {
var e = this;
this.boxContent.children.forEach(function(t, n) {
t.on(cc.Node.EventType.TOUCH_START, function(t) {
e.onDragStart(t, n);
});
t.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
e.onDragMove(t);
});
t.on(cc.Node.EventType.TOUCH_END, function(t) {
e.onDragEnd(t);
});
t.on(cc.Node.EventType.TOUCH_CANCEL, function(t) {
e.onDragEnd(t);
});
});
};
e.prototype.onDragStart = function(e, t) {
var n = e.getTouches();
if (!(n && n.length > 1)) {
this.touchIndex;
if (-1 === this.touchIndex) {
var o = p.SandBlockPoolUtils.ins.getBoxData()[t];
if (o) {
s.SandGameMgr.getBoxLogic().isClearing(), s.SandGameMgr.getBoxLogic().hasBoxData(), 
s.SandGameMgr.getBoxLogic().hasDragData();
if (!(s.SandGameMgr.getBoxLogic().isClearing() || s.SandGameMgr.getBoxLogic().hasBoxData() || s.SandGameMgr.getBoxLogic().hasDragData())) {
this.dragStartPos = e.getLocation();
var a = this.boxContent.children[t].convertToWorldSpaceAR(cc.Vec2.ZERO), l = this.content.convertToNodeSpaceAR(a), u = cc.v3(l.x, 200);
s.SandGameMgr.getBoxLogic().genBox(o, u);
this.touchIndex = t;
this.updateSingleShapeOption(t);
c.SandSoundUtils.playEffect(i.SAND_SOUND_EFFECT.TOUCH);
r.EventMgr.emit(r.EventType.drag_begin);
}
}
}
}
};
e.prototype.onDragMove = function(e) {
var t = e.getTouches();
if (!(t && t.length > 1) && -1 !== this.touchIndex && this.dragStartPos) {
var n = e.getLocation(), o = n.sub(this.dragStartPos);
if (!(o.mag() <= this.dragThreshold)) {
var a = o.mul(l.SandLocalData.dragScalar);
s.SandGameMgr.getBoxLogic().moveBoxDelta(new cc.Vec3(a.x, a.y, 0));
this.dragStartPos = n;
}
}
};
e.prototype.onDragEnd = function(e) {
var t = e.getTouches();
if (!(t && t.length > 1) && -1 !== this.touchIndex) {
this.dragStartPos = null;
var n = this.touchIndex;
this.touchIndex = -1;
if (s.SandGameMgr.getBoxLogic().checkPutBox()) {
p.SandBlockPoolUtils.ins.clearBoxDataIndex(n);
this.checkResetBox();
} else r.EventMgr.emit(r.EventType.drag_cancel);
this.drawDragSand();
this.updateSingleShapeOption(n);
}
};
e.prototype.checkResetBox = function() {
if (p.SandBlockPoolUtils.ins.isAllBoxDataNull()) {
this.resetBox();
return !0;
}
return !1;
};
e.prototype.resetBox = function() {
return o(this, void 0, void 0, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, p.SandBlockPoolUtils.ins.genNewRoundBlocks() ];

case 1:
e.sent();
this.drawShapeOption();
return [ 2 ];
}
});
});
};
e.prototype.drawShapeOption = function() {
for (var e = [], t = [], n = p.SandBlockPoolUtils.ins.getBoxData(), o = 0; o < 3; ++o) {
var a = this.createOptionData(o, n);
e.push(a.ary);
t.push(a.position);
}
this.optionRender && this.optionRender.draw(e, t);
};
e.prototype.updateSingleShapeOption = function(e) {
if (!(e < 0 || e >= 3) && this.optionRender) {
var t = p.SandBlockPoolUtils.ins.getBoxData(), n = this.createOptionData(e, t);
this.optionRender.updateSingleOption(e, n.ary, n.position);
}
};
e.prototype.createOptionData = function(e, t) {
if (this.touchIndex === e) return {
ary: null,
position: cc.Vec3.ZERO
};
var n = t[e];
if (!n) return {
ary: null,
position: cc.Vec3.ZERO
};
for (var o = this.boxContent.children[e].position.clone(), a = n[0].length * g.SIZE_SAND * g.optionBlockScale, r = n.length * g.SIZE_SAND * g.optionBlockScale, i = cc.v3(-a / 2, -r / 2 + 50, 0), c = Array.from({
length: n.length
}, function() {
return Array(n[0].length).fill(null);
}), s = 0; s < n.length; s++) for (var l = 0; l < n[s].length; l++) if (n[s][l]) {
var d = u.SandMapHelper.getPos(s, l, g.optionBlockScale), p = S.SandObjectPoolFactory.ins.get();
p.row = s;
p.col = l;
p.x = d.x + i.x;
p.y = d.y + i.y;
p.color = n[s][l].color;
p.isDamp = n[s][l].isDamp;
p.dampColor = n[s][l].dampColor;
c[s][l] = p;
}
return {
ary: c,
position: o
};
};
e.prototype.onRestart = function() {
this.deathGrayRender && this.deathGrayRender.clearDeathEffect();
this.drawMapSand();
this.drawShapeOption();
this.resetBox();
};
e.prototype.drawBoxSand = function() {
this.draggingRender && this.draggingRender.draw(s.SandGameMgr.getBoxLogic().getBoxSands());
};
e.prototype.drawDragSand = function() {
this.draggingRender && this.draggingRender.draw(s.SandGameMgr.getBoxLogic().getDragSands());
};
e.prototype.drawMapSand = function() {
this.sandrender && this.sandrender.draw(s.SandGameMgr.getBoxLogic().getMapSands());
};
e.prototype.onDrawMapSand = function() {
this.drawMapSand();
};
e.prototype.onDrawBoxSand = function() {
this.drawBoxSand();
};
e.prototype.onDrawDragSand = function() {
this.drawDragSand();
};
e.prototype.onClearSand = function(e) {
this.clearRender.draw(e);
};
e.prototype.onGameOver = function() {
if (this.deathGrayRender) {
var e = s.SandGameMgr.getBoxLogic().getMapSands();
e && e.length > 0 && this.deathGrayRender.startDeathEffect(e);
}
};
return e;
}();
n.SandView = b;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/module/dataReporter/DataReporter": void 0,
"../config/InitialBoard": "InitialBoard",
"../config/SandDefines": "SandDefines",
"../config/TrackEnum": "TrackEnum",
"../data/SandLocalData": "SandLocalData",
"../flow/SandFlowManager": "SandFlowManager",
"../mgr/EventMgr": "EventMgr",
"../mgr/GameStatistics": "GameStatistics",
"../mgr/SandAdManager": "SandAdManager",
"../mgr/SandGameMgr": "SandGameMgr",
"../utils/SandSoundUtils": "SandSoundUtils",
"./SandBlockPoolUtils": "SandBlockPoolUtils",
"./SandMapHelper": "SandMapHelper",
"./SandObjectPoolFactory": "SandObjectPoolFactory"
} ],
ScoreLabelAni: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ff40bMJ0mZOlKG8HwNpy6h3", "ScoreLabelAni");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ScoreAnimComponent = void 0;
var i = cc._decorator, c = i.ccclass, s = (i.property, i.menu), l = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.myScore = null;
t._currentScore = 0;
t._targetScore = 0;
t._scoreAnimActive = !1;
t._scoreAnimStart = 0;
t._scoreAnimDuration = 1.2;
t._scoreAnimFrom = 0;
t._scoreAnimTo = 0;
return t;
}
t.prototype.onLoad = function() {
this.myScore || (this.myScore = this.node.getComponent(cc.Label));
};
t.prototype.onUpdatePlayerScore = function(e) {
if (this.myScore) {
var t = e;
if (t <= 0) {
this.stopScoreAnim();
this._currentScore = 0;
this.myScore.string = "0";
} else this._targetScore !== t && this._animateScoreTo(t);
}
};
t.prototype._animateScoreTo = function(e) {
if (this._scoreAnimActive) {
this._currentScore = this._targetScore;
this.myScore.string = this._currentScore + "";
this._scoreAnimActive = !1;
}
this._scoreAnimFrom = this._currentScore;
this._scoreAnimTo = e;
this._scoreAnimStart = 0;
this._scoreAnimActive = !0;
this._targetScore = e;
};
t.prototype.updateScoreAnimLabel = function() {
this._currentScore = this._targetScore;
this.myScore.string = this._currentScore + "";
this._scoreAnimActive = !1;
};
t.prototype.update = function() {
this.updateScore();
};
t.prototype.updateScore = function() {
if (this._scoreAnimActive) {
0 === this._scoreAnimStart && (this._scoreAnimStart = Date.now());
var e = (Date.now() - this._scoreAnimStart) / 1e3, t = this._scoreAnimDuration;
if (e >= t) this.updateScoreAnimLabel(); else {
var n = this._scoreAnimFrom, o = this._scoreAnimTo, a = n + e / t * (o - n), r = o > n ? Math.floor(a) : Math.ceil(a);
if (r !== this._currentScore) {
this._currentScore = r;
this.myScore.string = this._currentScore + "";
}
}
}
};
t.prototype.stopScoreAnim = function() {
this._scoreAnimActive = !1;
};
t.prototype.onDestroy = function() {
this.stopScoreAnim();
};
return r([ c, s("UI/ScoreAnimComponent") ], t);
}(cc.Component);
n.ScoreAnimComponent = l;
cc._RF.pop();
}, {} ],
ScoreManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "445davM0OdI0IBUWro4wtBn", "ScoreManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ScoreManager = void 0;
var o, a = e("../../../../resources/hsgame/hsgame"), r = e("../config/FeaturesEnum"), i = e("../data/SandLocalData"), c = e("../mgr/EventMgr"), s = e("../mgr/SandGameMgr"), l = e("./ScoreStrategy");
(function(e) {
e.PLACEMENT = "score_placement";
e.ELIMINATION = "score_elimination";
e.COMBO = "score_combo";
e.CHAIN_ELIMINATION = "score_chain_elimination";
e.MULTI_ELIMINATION = "score_multi_elimination";
e.CLEAR_BOARD = "score_clear_board";
e.SCORE_UPDATED = "score_updated";
})(o || (o = {}));
var u = function() {
function e() {
this._strategies = new Map();
this._observers = new Map();
}
Object.defineProperty(e, "instance", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
var e = this;
Object.values(o).forEach(function(t) {
e._observers.set(t, []);
});
this.registerEventListeners();
this.initStrategys();
};
e.prototype.registerEventListeners = function() {
c.EventMgr.on(c.EventType.restart, this.reset, this);
};
Object.defineProperty(e.prototype, "score", {
get: function() {
return i.SandLocalData.score;
},
enumerable: !1,
configurable: !0
});
e.prototype.initStrategys = function() {
this.registerStrategy(o.PLACEMENT, new l.PlacementScoreStrategy());
this.registerStrategy(o.ELIMINATION, new l.EliminationScoreStrategy());
this.registerStrategy(o.COMBO, new l.ComboScoreStrategy());
this.registerStrategy(o.CHAIN_ELIMINATION, new l.ChainEliminationScoreStrategy());
this.registerStrategy(o.MULTI_ELIMINATION, new l.MultiEliminationScoreStrategy());
this.registerStrategy(o.CLEAR_BOARD, new l.ClearBoardScoreStrategy());
};
e.prototype.onPlacementScore = function(e) {
var t = this.addScore(o.PLACEMENT, {
sandCount: e.sandCount
});
i.SandLocalData.score += t;
this.checkHighScore(e);
c.EventMgr.emit(c.EventType.updateScore, {
score: i.SandLocalData.score
});
};
e.prototype.onElimateScore = function(e) {
var t = 0;
t = e.isHuge && a.hsgame.Features.boolFeature(r.FeaturesEnum.huge_eliminate) ? this.addScore(o.MULTI_ELIMINATION, {
sandCount: e.sandCount
}) : this.addScore(o.ELIMINATION, {
sandCount: e.sandCount
});
e.comboCount > 0 && (t = this.addScore(o.COMBO, {
comboCount: e.comboCount,
baseScore: t,
placementCount: e.placementCount
}));
e.chainCount > 0 && a.hsgame.Features.boolFeature(r.FeaturesEnum.chain_eliminate) && (t = this.addScore(o.CHAIN_ELIMINATION, {
chainCount: e.chainCount,
baseScore: t
}));
0 == s.SandGameMgr.getBoxLogic().getMapCount() && a.hsgame.Features.boolFeature(r.FeaturesEnum.clear_board) && (t = this.addScore(o.CLEAR_BOARD, {
isCleared: !0,
totalScore: t
}));
i.SandLocalData.score += t;
this.checkHighScore(e);
i.SandLocalData.score;
};
e.prototype.checkHighScore = function(e) {
i.SandLocalData.score, i.SandLocalData.highScore;
if (i.SandLocalData.score > i.SandLocalData.highScore) {
i.SandLocalData.highScore = i.SandLocalData.score;
if (!i.SandLocalData.hasTriggeredHighScore) {
i.SandLocalData.hasTriggeredHighScore = !0;
i.SandLocalData.playingCount > 1 && (e.isNewHighScore = !0);
i.SandLocalData.score, i.SandLocalData.highScore;
}
i.SandLocalData.forceSave();
}
};
e.prototype.addScore = function(e, t) {
var n = this._strategies.get(e);
if (!n) return 0;
var o = n.calculate(t);
this.notifyObservers(e, {
score: o,
type: e,
details: t
});
return o;
};
e.prototype.reset = function() {
i.SandLocalData.hasTriggeredHighScore = !1;
i.SandLocalData.score = 0;
this.notifyObservers(o.SCORE_UPDATED, {
score: this.score,
type: o.SCORE_UPDATED
});
c.EventMgr.emit(c.EventType.updateScore, {
score: i.SandLocalData.score
});
};
e.prototype.registerStrategy = function(e, t) {
this._strategies.set(e, t);
};
e.prototype.addObserver = function(e, t) {
var n = this._observers.get(e) || [];
if (!n.includes(t)) {
n.push(t);
this._observers.set(e, n);
}
};
e.prototype.removeObserver = function(e, t) {
var n = this._observers.get(e) || [], o = n.indexOf(t);
if (-1 !== o) {
n.splice(o, 1);
this._observers.set(e, n);
}
};
e.prototype.notifyObservers = function(e, t) {
(this._observers.get(e) || []).forEach(function(e) {
return e(t);
});
e !== o.SCORE_UPDATED && (this._observers.get(o.SCORE_UPDATED) || []).forEach(function(e) {
return e({
score: i.SandLocalData.score,
type: o.SCORE_UPDATED
});
});
};
e.prototype.destroy = function() {
c.EventMgr.off(c.EventType.restart, this.reset, this);
this._observers.clear();
e._instance = null;
};
e._instance = null;
return e;
}();
n.ScoreManager = u;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../config/FeaturesEnum": "FeaturesEnum",
"../data/SandLocalData": "SandLocalData",
"../mgr/EventMgr": "EventMgr",
"../mgr/SandGameMgr": "SandGameMgr",
"./ScoreStrategy": "ScoreStrategy"
} ],
ScoreStrategy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3bd49iHJ0hBF7QG9ZZ05qAT", "ScoreStrategy");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ClearBoardScoreStrategy = n.MultiEliminationScoreStrategy = n.ChainEliminationScoreStrategy = n.ComboScoreStrategy = n.EliminationScoreStrategy = n.PlacementScoreStrategy = void 0;
var o = e("../data/SandLocalData"), a = function() {
function e() {}
e.prototype.calculate = function(e) {
var t = e.sandCount * o.SandLocalData.sandPutScore;
e.sandCount;
return t;
};
return e;
}();
n.PlacementScoreStrategy = a;
var r = function() {
function e() {}
e.prototype.calculate = function(e) {
var t = e.sandCount * o.SandLocalData.sandEliminationScore;
e.sandCount;
return t;
};
return e;
}();
n.EliminationScoreStrategy = r;
var i = function() {
function e() {}
e.prototype.calculate = function(e) {
var t = e.comboCount, n = e.baseScore;
if (e.placementCount > 3) return 0;
var o = 0, a = n * (o = t <= 3 ? t + 1 : t <= 10 ? 4 + .2 * (t - 3) : 5.4 + .1 * (t - 10));
o.toFixed(2), a.toFixed(2);
return a;
};
e.COMBO_THRESHOLD = 1.5;
return e;
}();
n.ComboScoreStrategy = i;
var c = function() {
function e() {}
e.prototype.calculate = function(e) {
var t = e.chainCount, n = e.baseScore;
if (t > 0) {
var o = n * (1 + .5 * t);
o.toFixed(2);
return o;
}
return 0;
};
return e;
}();
n.ChainEliminationScoreStrategy = c;
var s = function() {
function e() {}
e.prototype.calculate = function(e) {
var t = e.sandCount, n = 0;
t >= 500 && t < 1e3 ? n = .5 : t >= 1e3 && t < 1500 ? n = .6 : t >= 1500 && t < 2e3 ? n = .7 : t >= 2e3 && t < 2500 ? n = .9 : t >= 2500 && (n = 1.2);
var o = t * n;
o.toFixed(2);
return o;
};
return e;
}();
n.MultiEliminationScoreStrategy = s;
var l = function() {
function e() {}
e.prototype.calculate = function(t) {
var n = t.isCleared, o = t.totalScore;
if (n) {
var a = o * (e.CLEAR_MULTIPLIER + 1);
e.CLEAR_MULTIPLIER;
return a;
}
return 0;
};
e.CLEAR_MULTIPLIER = 1;
return e;
}();
n.ClearBoardScoreStrategy = l;
cc._RF.pop();
}, {
"../data/SandLocalData": "SandLocalData"
} ],
StageGoalPopup: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4136a1nXTVEKaDbX3XQk8eO", "StageGoalPopup");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = e("../../../../../../resources/hsgame/ui/HSUIBase"), u = e("../../../mgr/HSUIMgrAdapter"), d = e("./MotivationalWordsMap"), p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.motivationalLabel = null;
t.scoreLabel = null;
t.colorUnlockLabel = null;
t.blockColorSprite = null;
t.nextButton = null;
t.nextLevelButton = null;
t.blockSpriteAsset = [];
t.switchNodeArray = [];
return t;
}
t.prototype.enter = function(t) {
e.prototype.enter.call(this, t);
this.init(t[0]);
var n = this.node.getChildByName("base");
n.scale = 0;
cc.tween(n).to(.26, {
scale: 1
}, {
easing: "backOut"
}).start();
var o = this.node.getChildByName("Popup_Background");
o.opacity = 0;
cc.tween(o).to(.16, {
opacity: 160
}).start();
};
t.prototype.init = function(e) {
var t = e.BlockColor;
this.switchNodeArray[0].active = 0 !== t;
this.switchNodeArray[1].active = 0 === t;
var n = d.MotivationalWordsMap[e.MotivationalWords];
if (n) {
var o = Math.floor(Math.random() * n.length);
this.motivationalLabel.string = n[o];
}
if (0 === e.BlockColor) this.scoreLabel.string = e.ScoreDisplay > 0 ? e.ScoreDisplay.toString() : ""; else {
this.scoreLabel.string = "";
this.blockColorSprite.spriteFrame = this.blockSpriteAsset[e.BlockColor];
}
this.colorUnlockLabel.string = "0" !== e.ColorUnlock ? e.ColorUnlock : "";
u.HSUIMgrAdapter.bindButton(this.nextButton, this.onNextClicked.bind(this));
u.HSUIMgrAdapter.bindButton(this.nextLevelButton, this.onNextClicked.bind(this));
};
t.prototype.onNextClicked = function() {
this.closeSelf();
};
r([ s(cc.Label) ], t.prototype, "motivationalLabel", void 0);
r([ s(cc.Label) ], t.prototype, "scoreLabel", void 0);
r([ s(cc.RichText) ], t.prototype, "colorUnlockLabel", void 0);
r([ s(cc.Sprite) ], t.prototype, "blockColorSprite", void 0);
r([ s(cc.Node) ], t.prototype, "nextButton", void 0);
r([ s(cc.Node) ], t.prototype, "nextLevelButton", void 0);
r([ s([ cc.SpriteFrame ]) ], t.prototype, "blockSpriteAsset", void 0);
r([ s([ cc.Node ]) ], t.prototype, "switchNodeArray", void 0);
return r([ c ], t);
}(l.default);
n.default = p;
cc._RF.pop();
}, {
"../../../../../../resources/hsgame/ui/HSUIBase": void 0,
"../../../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"./MotivationalWordsMap": "MotivationalWordsMap"
} ],
StarFeedBack: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e09fdOxtSFAz4dMhh9vT0Dp", "StarFeedBack");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../../../resources/hsgame/hsgame"), c = e("../../../../resources/hsgame/ui/HSUIBase"), s = e("../config/TrackEnum"), l = e("../mgr/HSUIMgrAdapter"), u = e("./Component/StarRating"), d = cc._decorator, p = d.ccclass, h = d.property, f = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.closeBtn = null;
t.confirmBtn = null;
t.starRating = null;
return t;
}
t.prototype.enter = function(t) {
e.prototype.enter.call(this, t);
l.HSUIMgrAdapter.bindButton(this.closeBtn, this.onClickClose.bind(this));
l.HSUIMgrAdapter.bindButton(this.confirmBtn, this.onClickConfirm.bind(this));
i.hsgame.DataReporter.reportEvent(s.TrackEnum.game_user_rate_show);
};
t.prototype.onClickClose = function() {
var e = this.starRating.getScore();
i.hsgame.DataReporter.reportEvent(s.TrackEnum.game_user_rate_click, {
index_type: 0,
rate_score: e
});
this.closeSelf();
};
t.prototype.onClickConfirm = function() {
var e = this.starRating.getScore();
e >= 5 ? i.hsgame.Native.comment(1) : i.hsgame.Native.comment(3);
i.hsgame.DataReporter.reportEvent(s.TrackEnum.game_user_rate_click, {
index_type: 1,
rate_score: e
});
this.closeSelf();
};
r([ h(cc.Node) ], t.prototype, "closeBtn", void 0);
r([ h(cc.Node) ], t.prototype, "confirmBtn", void 0);
r([ h(u.default) ], t.prototype, "starRating", void 0);
return r([ p ], t);
}(c.default);
n.default = f;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"../../../../resources/hsgame/ui/HSUIBase": void 0,
"../config/TrackEnum": "TrackEnum",
"../mgr/HSUIMgrAdapter": "HSUIMgrAdapter",
"./Component/StarRating": "StarRating"
} ],
StarRating: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "caffcB+6LxMVIJ19DTo1zkr", "StarRating");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.starOn = null;
t.starOff = null;
t.starCount = 5;
t.starSpacing = 10;
t.starOns = [];
t.starOffs = [];
t.stars = [];
t._score = 0;
return t;
}
t.prototype.onLoad = function() {
this.createStars();
this.setScore(0);
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
t.prototype.createStars = function() {
var e = this, t = this.node.children;
if (t.length !== this.starCount) {
this.node.removeAllChildren();
this.stars = [];
var n = function(t) {
var n = new cc.Node("star" + t), a = n.addComponent(cc.Sprite);
o.starOffs && o.starOffs.length >= 5 ? a.spriteFrame = o.starOffs[t] : a.spriteFrame = o.starOff;
n.anchorX = 0;
n.anchorY = .5;
n.x = t * (o.starSpacing + (o.starOn ? o.starOn.getRect().width : 40));
n.y = 0;
n.on(cc.Node.EventType.TOUCH_END, function() {
e.setScore(t + 1);
}, o);
o.node.addChild(n);
o.stars.push(n);
}, o = this;
for (i = 0; i < this.starCount; i++) n(i);
} else {
this.stars = [];
for (var a = function(n) {
var o = t[n];
o.addComponent(cc.Sprite);
r.stars.push(o);
o.off(cc.Node.EventType.TOUCH_END);
o.on(cc.Node.EventType.TOUCH_END, function() {
e.setScore(n + 1);
}, r);
}, r = this, i = 0; i < t.length; i++) a(i);
}
};
t.prototype.setScore = function(e) {
this._score = e;
for (var t = 0; t < this.stars.length; t++) {
var n = this.stars[t].getComponent(cc.Sprite);
this.starOns && this.starOns.length >= 5 && this.starOffs && this.starOffs.length >= 5 ? n.spriteFrame = t < e ? this.starOns[t] : this.starOffs[t] : n.spriteFrame = t < e ? this.starOn : this.starOff;
}
};
t.prototype.getScore = function() {
return this._score;
};
t.prototype.setSpacing = function(e) {
this.starSpacing = e;
for (var t = 0; t < this.stars.length; t++) this.stars[t].x = t * (this.starSpacing + (this.starOn ? this.starOn.getRect().width : 40));
};
t.prototype.onTouchMove = function(e) {
var t = this.node.convertToNodeSpaceAR(e.getLocation()), n = this.starOn ? this.starOn.getRect().width : 40, o = this.starCount * n + (this.starCount - 1) * this.starSpacing, a = t.x;
a = Math.max(0, Math.min(a, o));
var r = Math.floor(a / (n + this.starSpacing));
r >= this.starCount && (r = this.starCount - 1);
this.setScore(r + 1);
};
t.prototype.onTouchEnd = function() {};
r([ s({
type: cc.SpriteFrame
}) ], t.prototype, "starOn", void 0);
r([ s({
type: cc.SpriteFrame
}) ], t.prototype, "starOff", void 0);
r([ s({
type: cc.Integer,
tooltip: "星星数量"
}) ], t.prototype, "starCount", void 0);
r([ s({
type: cc.Integer,
tooltip: "星星间距"
}) ], t.prototype, "starSpacing", void 0);
r([ s({
type: [ cc.SpriteFrame ],
displayName: "亮星星"
}) ], t.prototype, "starOns", void 0);
r([ s({
type: [ cc.SpriteFrame ],
displayName: "暗星星"
}) ], t.prototype, "starOffs", void 0);
return r([ c ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
StateMachine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "114f4UOh79PILwb7PlEbGpR", "StateMachine");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.StateMachine = void 0;
var o = function() {
function e(e) {
this.currentState = null;
this.states = new Map();
this.data = new Map();
this.lastStateName = "";
this.owner = e;
this.data.set("owner", e);
}
e.prototype.registerState = function(e, t) {
this.states.set(e, t);
};
e.prototype.changeState = function(e) {
var t;
this.lastStateName;
var n = this.lastStateName, o = e;
this.lastStateName = e;
if (n || o) {
if (!n || n !== o) {
this.currentState && this.currentState.onExit();
var a = this.states.get(e);
null === (t = this.currentState) || void 0 === t || t.constructor.name, null == a || a.constructor.name;
if (a) {
this.currentState = a;
this.currentState.onEnter();
}
}
} else cc.error("[StateMachine] 切换状态失败，curStateName:" + n + ", newStateName:" + o);
};
e.prototype.update = function(e) {
this.currentState && this.currentState.onUpdate(e);
};
e.prototype.setData = function(e, t) {
this.data.set(e, t);
};
e.prototype.getData = function(e) {
return this.data.get(e);
};
e.prototype.getOwner = function() {
return this.owner;
};
return e;
}();
n.StateMachine = o;
cc._RF.pop();
}, {} ],
State: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4cce7PfEnpPr7bk2Naxzgl9", "State");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.State = void 0;
var o = function() {
function e(e) {
this.machine = e;
}
Object.defineProperty(e.prototype, "owner", {
get: function() {
return this.machine.getOwner();
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnter = function() {};
e.prototype.onExit = function() {};
e.prototype.onUpdate = function() {};
return e;
}();
n.State = o;
cc._RF.pop();
}, {} ],
TNFLabel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d41caYfNoRMsraldcwOSPRo", "TNFLabel");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = i.menu, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.tnfFonts = [];
t.defaultFont = null;
t._comboCount = 0;
return t;
}
t.prototype.onLoad = function() {
this.label || (this.label = this.getComponent(cc.Label));
this.updateFont();
};
t.prototype.getFontByCombo = function(e) {
return e <= 0 || 0 === this.tnfFonts.length ? this.defaultFont : e >= 1 && e <= 4 ? this.tnfFonts[0] || this.defaultFont : e >= 5 && e <= 9 ? this.tnfFonts[1] || this.defaultFont : e >= 10 && e <= 14 ? this.tnfFonts[2] || this.defaultFont : e >= 15 && e <= 19 ? this.tnfFonts[3] || this.defaultFont : this.tnfFonts[4] || this.defaultFont;
};
t.prototype.updateFont = function() {
if (this.label) {
var e = this.getFontByCombo(this._comboCount);
e && (this.label.font = e);
}
};
t.prototype.setCombo = function(e) {
void 0 === e && (e = 0);
if (this._comboCount !== e) {
this._comboCount = e;
this.updateFont();
}
};
r([ s({
type: cc.Label,
tooltip: "要控制的Label组件"
}) ], t.prototype, "label", void 0);
r([ s({
type: [ cc.Font ],
tooltip: "TNF字体资源数组，按照combo次数范围排序：1-4, 5-9, 10-14, 15-19, 20+"
}) ], t.prototype, "tnfFonts", void 0);
r([ s({
type: cc.Font,
tooltip: "默认字体资源"
}) ], t.prototype, "defaultFont", void 0);
r([ s ], t.prototype, "_comboCount", void 0);
return r([ c, l("UI/TNFLabel") ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
TrackEnum: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ad9b5oQOAdKUbYcfKPQrLwu", "TrackEnum");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TrackEnum = void 0;
(function(e) {
e.app_init = "app_init";
e.s_init_sdk = "s_init_sdk";
e.s_device_info = "s_device_info";
e.ta_app_install = "ta_app_install";
e.ta_app_start = "ta_app_start";
e.usr_data_enter_first = "usr_data_enter_first";
e.ta_app_crash = "ta_app_crash";
e.ta_app_view = "ta_app_view";
e.ta_app_end = "ta_app_end";
e.s_p1_action = "s_p1_action";
e.ui_theme_show = "ui_theme_show";
e.ui_theme_shop_click = "ui_theme_shop_click";
e.ui_theme_shoppage_view = "ui_theme_shoppage_view";
e.ui_theme_setting_button_click = "ui_theme_setting_button_click";
e.ui_theme_setting_show = "ui_theme_setting_show";
e.ui_theme_setting_sound_button_click = "ui_theme_setting_sound_button_click";
e.ui_theme_setting_moregame_button_click = "ui_theme_setting_moregame_button_click";
e.ui_theme_moregame_start_click = "ui_theme_moregame_start_click";
e.game_setting_button_click = "game_setting_button_click";
e.game_setting_show = "game_setting_show";
e.game_setting_sound_button_click = "game_setting_sound_button_click";
e.game_setting_vibration_button_click = "game_setting_vibration_button_click";
e.game_setting_bgm_button_click = "game_setting_bgm_button_click";
e.game_setting_replay_button_click = "game_setting_replay_button_click";
e.game_setting_moregame_button_click = "game_setting_moregame_button_click";
e.game_setting_moresetting_button_click = "game_setting_moresetting_button_click";
e.game_setting_home_button_click = "game_setting_home_button_click";
e.game_moregame_start_click = "game_moregame_start_click";
e.ui_moregame_flower_button_click = "ui_moregame_flower_button_click";
e.ui_moregame_ball_button_click = "ui_moregame_ball_button_click";
e.ui_theme_classic_click = "ui_theme_classic_click";
e.usr_data_guide_start = "usr_data_guide_start";
e.usr_data_guide_end = "usr_data_guide_end";
e.ui_battle_show = "ui_battle_show";
e.usr_data_game_start = "usr_data_game_start";
e.usr_data_game_end = "usr_data_game_end";
e.game_get_block_end = "game_get_block_end";
e.game_touchend_block_done = "game_touchend_block_done";
e.game_revive_ui_show = "game_revive_ui_show";
e.game_popup_revive_click = "game_popup_revive_click";
e.usr_data_game_end_show = "usr_data_game_end_show";
e.game_user_rate_show = "game_user_rate_show";
e.game_user_rate_click = "game_user_rate_click";
e.ui_mini_game_battle_show = "ui_mini_game_battle_show";
e.ui_mini_game_back_click = "ui_mini_game_back_click";
e.user_attribute = "user_attribute";
e.usr_data_game_end_restart_click = "usr_data_game_end_restart_click";
e.ui_ad_mask_show = "ui_ad_mask_show";
e.sand_download_success = "sand_download_success";
e.ui_theme_sand_click = "ui_theme_sand_click";
})(n.TrackEnum || (n.TrackEnum = {}));
cc._RF.pop();
}, {} ],
sand_block_android: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a15d6+9UOlEzbeDsvg4YSRQ", "sand_block_android");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.sand_block_android = void 0;
var o = e("../data/SandLocalData"), a = e("../UI/helpers/SandSettingUIHelper"), r = function() {
function e() {}
e.init = function() {
o.SandLocalData.getPlanId = function() {
return window.bb_GameData_GameWay ? window.bb_GameData_GameWay() : 0;
};
o.SandLocalData.setPlanId = function() {};
o.SandLocalData.getSoundEnabled = function() {
return !!window.BLK_getSoundState && window.BLK_getSoundState();
};
o.SandLocalData.setSoundEnabled = function() {
window.BLK_setSoundState && window.BLK_setSoundState();
};
o.SandLocalData.getVibrationEnabled = function() {
return !!window.BLK_getShakeState && window.BLK_getShakeState();
};
o.SandLocalData.setVibrationEnabled = function() {
window.BLK_setShakeState && window.BLK_setShakeState();
};
o.SandLocalData.getBgmEnabled = function() {
return !!window.BLK_getBgmState && window.BLK_getBgmState();
};
o.SandLocalData.setBgmEnabled = function() {
window.BLK_setBgmState && window.BLK_setBgmState();
};
a.SandSettingUIHelper.canShowShake = function() {
return !!window.BLK_VibrateCtrl_isOpen && window.BLK_VibrateCtrl_isOpen();
};
};
return e;
}();
n.sand_block_android = r;
cc._RF.pop();
}, {
"../UI/helpers/SandSettingUIHelper": "SandSettingUIHelper",
"../data/SandLocalData": "SandLocalData"
} ],
sand_env_mgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "58707hZakpClq2uZNNFil58", "sand_env_mgr");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.sand_env_mgr = void 0;
var o = e("../../../../resources/hsgame/hsgame"), a = e("./sand_block_android"), r = function() {
function e() {}
e.initEnv = function() {
"block_blast_android" === o.hsgame.App.RUNTIME_ENV && a.sand_block_android.init();
};
e.sand_res_version = "1.0.7";
return e;
}();
n.sand_env_mgr = r;
cc._RF.pop();
}, {
"../../../../resources/hsgame/hsgame": void 0,
"./sand_block_android": "sand_block_android"
} ],
start: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b13f6pW85xKea/ijL7vrvOu", "start");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../scripts/data/SandLocalData"), c = e("../../../resources/hsgame/hsgame"), s = e("../scripts/skin/SandSkinConfig"), l = e("../scripts/mgr/SandAdManager"), u = e("../scripts/enviroment/sand_env_mgr"), d = e("../scripts/module/gamePlan/SandGamePlan"), p = e("../../../resources/hsgame/utils/HSResourceUtils"), h = cc._decorator.ccclass, f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
c.hsgame.initEnvironment();
u.sand_env_mgr.initEnv();
};
t.prototype.start = function() {
var e = this;
console.log = function() {};
console.warn = function() {};
p.HSResourceUtils.loadBundle("sandcrush").then(function(t) {
if (t) {
c.hsgame.SkinManager.ins.initConfig(s.getSkinConfig());
t.loadScene("sand", function(t, n) {
e.init();
if (t) return console.error(t.message, t.stack);
cc.director.runScene(n);
});
}
});
};
t.prototype.init = function() {
i.SandLocalData.init();
d.SandGamePlan.ins().initGamePlan();
i.SandLocalData.handleFeatures();
c.hsgame.Native.closeNoSplash();
l.SandAdManager.instance.requestAd();
c.hsgame.Native.uploadUserData({
gameWayNum: i.SandLocalData.getPlanId(),
user_waynum: i.SandLocalData.getPlanId(),
topGrade: Math.floor(i.SandLocalData.highScore)
});
};
return r([ h ], t);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../../resources/hsgame/hsgame": void 0,
"../../../resources/hsgame/utils/HSResourceUtils": void 0,
"../scripts/data/SandLocalData": "SandLocalData",
"../scripts/enviroment/sand_env_mgr": "sand_env_mgr",
"../scripts/mgr/SandAdManager": "SandAdManager",
"../scripts/module/gamePlan/SandGamePlan": "SandGamePlan",
"../scripts/skin/SandSkinConfig": "SandSkinConfig"
} ],
toastNode: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9a7302N2XxAybaoJ3WY4Dd1", "toastNode");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
return r > 3 && i && Object.defineProperty(t, n, i), i;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {};
t.prototype.show = function(e) {
this.myLabel.getComponent(cc.Label).string = e;
this.unschedule(this.hideToast);
this.scheduleOnce(this.hideToast, 2);
};
t.prototype.hideToast = function() {
this.node.active = !1;
};
t.prototype.onDestroy = function() {
this.unschedule(this.hideToast);
};
r([ s(cc.Node) ], t.prototype, "myLabel", void 0);
return r([ c ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "start", "MotivationalWordsMgr", "SandMainScene", "ChildrenMap", "RewardProgressBar", "RewordManager", "MotivationalWordsMap", "StageGoalPopup", "StarRating", "TNFLabel", "DeathWarningEffect", "Dialogbox", "SandLoadingUI", "SandMainUI", "SandOverUI", "SandReviveUI", "SandSettingMore", "SandSettingUI", "StarFeedBack", "GMConfig", "GMView", "DeathGrayRenderer", "OptionGraphics", "SandClearRenderer", "SandDraggingRenderer", "SandMapCustomAssembler", "SandTileColorHelper", "SandSettingUIHelper", "toastNode", "FeaturesEnum", "InitialBoard", "SandDefines", "SandGameConfig", "SandUIConfig", "TrackEnum", "SandGameController", "SandLocalData", "SandLocalDecorator", "SandSnapshot", "sand_block_android", "sand_env_mgr", "IFlow", "SandFlowManager", "SandPreloadFlow", "SandTutorialFlow", "EventMgr", "GameStateEnum", "GameStatistics", "HSUIMgrAdapter", "SandAdManager", "SandGameMgr", "SandGameStateManager", "SandStarViewManager", "State", "StateMachine", "AdPlayingState", "DeathAnimationState", "GameOverState", "GameResultState", "IdleState", "InitState", "PausedState", "ReviveProcessState", "ReviveState", "RunningState", "LocalPlanConfig", "SandGamePlan", "SandAlgoFactory", "SandAlgoTree1001", "SandActionBackStrategy", "SandActionChooseAlgo", "SandActionChooseAlgoTrigger", "SandActionColorPool", "SandActionDamps", "SandActionDoubleColor", "SandActionFinal", "SandActionGMColor", "SandActionGetBlock", "SandActionInit", "SandActionMainStrategy", "SandActionReturnTrue", "SandAlgo1001", "SandAlgo1002", "SandAlgo1003", "SandAlgo1004", "SandAlgo1005", "SandAlgo1006", "SandAlgo1007", "SandAlgo1008", "SandAlgo1009", "SandAlgo1010", "SandAlgo1011", "SandAlgo1012", "SandAlgo1013", "SandAlgo1014", "SandAlgo1015", "SandAlgo1016", "SandAlgo1017", "SandAlgo1018", "SandAlgo1019", "SandAlgoHelper", "SandAlgoAction", "SandAlgoComposite", "SandAlgoContext", "SandAlgoSelector", "SandAlgoSequence", "AntContourTracer", "SandBlockPoolUtils", "SandColorPoolUtils", "SandLogic", "SandLogicEvent", "SandLogicHelper", "SandLogicRandomSeed", "SandLogicSimulate", "SandMapHelper", "SandObjectPoolFactory", "SandTile", "SandView", "ScoreLabelAni", "ScoreManager", "ScoreStrategy", "SandSkinConfig", "SandSoundUtils", "SandUtils" ]);