var y = /* @__PURE__ */ ((s) => (s[s.Stop = 1] = "Stop", s[s.ForceStop = 2] = "ForceStop", s))(y || {}), p = /* @__PURE__ */ ((s) => (s[s.None = 1] = "None", s[s.Left = 2] = "Left", s[s.Right = 4] = "Right", s[s.Up = 8] = "Up", s[s.Down = 16] = "Down", s[s.Horizontal = 6] = "Horizontal", s[s.Vertical = 24] = "Vertical", s[s.All = 30] = "All", s))(p || {});
const q = 6, B = 24;
var r = /* @__PURE__ */ ((s) => (s[s.Start = 1] = "Start", s[s.Move = 2] = "Move", s[s.End = 4] = "End", s[s.Cancel = 8] = "Cancel", s))(r || {}), m = /* @__PURE__ */ ((s) => (s.Touch = "touch", s.Mouse = "mouse", s.Pen = "pen", s.Kinect = "kinect", s))(m || {});
const U = 25, H = /mobile|tablet|ip(ad|hone|od)|android/i, S = "ontouchstart" in window || navigator.maxTouchPoints > 0, Y = "PointerEvent" in window, k = S && H.test(navigator.userAgent);
var c = /* @__PURE__ */ ((s) => (s[s.Possible = 1] = "Possible", s[s.Began = 2] = "Began", s[s.Changed = 4] = "Changed", s[s.Ended = 8] = "Ended", s[s.Canceled = 16] = "Canceled", s[s.Failed = 32] = "Failed", s))(c || {}), v = /* @__PURE__ */ ((s) => (s.Secret = "touch-fusion.input", s.Unknown = "unknown", s.Swipe = "swipe", s.Pan = "pan", s.Pinch = "pinch", s.Rotate = "rotate", s.Press = "press", s.Tap = "tap", s))(v || {}), j = /* @__PURE__ */ ((s) => (s.COMPUTE = "compute", s.AUTO = "auto", s.MANIPULATION = "manipulation", s.NONE = "none", s.PAN_X = "pan-x", s.PAN_Y = "pan-y", s))(j || {});
const G = [
  "none",
  "pan-x",
  "pan-y",
  "auto",
  "manipulation",
  "compute"
], C = {
  domEvents: !1,
  touchActions: ["compute"],
  enable: !0,
  preventDefault: !1,
  stopPropagation: !1,
  stopImmediatePropagation: !1,
  inputTarget: null,
  cssProps: {
    userSelect: "none",
    touchAction: "none"
  }
}, Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACTIONS: G,
  COMPUTE_INTERVAL: U,
  DEFAULT_OPTIONS: C,
  DIRECTION: p,
  DIRECTION_HORIZONTAL: q,
  DIRECTION_VERTICAL: B,
  INPUT_STATE: r,
  INPUT_TYPE: m,
  MOBILE_REGEX: H,
  RECOGNIZER_STATE: c,
  RECOGNIZER_TYPE: v,
  STOP_TYPE: y,
  SUPPORT_ONLY_TOUCH: k,
  SUPPORT_POINTER_EVENTS: Y,
  SUPPORT_TOUCH: S,
  TOUCH_ACTION: j
}, Symbol.toStringTag, { value: "Module" })), D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
class w extends Error {
  constructor(t) {
    super(t), this.name = "TouchFusionError", Error.captureStackTrace && Error.captureStackTrace(this, w);
  }
}
const tt = (s) => {
  throw new w(s);
}, et = (s) => {
  console.warn(`[TouchFusionWarning]: ${s}`);
}, $ = (s) => typeof s == "boolean", st = (s) => typeof s == "number", z = (s) => typeof s == "string", I = (s) => typeof s == "function", K = (s) => s === null || Object.prototype.toString.call(s) === "[object Array]" ? !1 : typeof s == "object", f = (s) => Array.isArray(s), nt = (s) => s instanceof Element, it = (s) => s instanceof HTMLElement, ot = (s) => s instanceof TouchEvent, rt = (s) => s instanceof MouseEvent, ct = (s) => s instanceof PointerEvent, ht = (s) => s instanceof TouchList, lt = (s) => s !== void 0, at = (s) => s === void 0, ut = (s) => s === null, dt = (s) => s == null, J = (s) => `${s}-${Date.now()}-${Math.floor(Math.random() * 1e5)}`, M = (s, t, e) => {
  if (!(!K(s) && !f(s)))
    if (f(s))
      s.forEach(t, e);
    else
      for (const n in s)
        Object.prototype.hasOwnProperty.call(s, n) && t.call(e, s[n], n, s);
}, _ = (s, t, e) => !f(s) || !I(e[t]) ? !1 : (M(
  s,
  e[t],
  e
), !0), O = (s, t, e = !1) => {
  const n = [], i = [];
  for (let o = 0; o < s.length; o++) {
    const h = t ? s[o][t] : s[o];
    i.indexOf(h) === -1 && n.push(s[o]), i[o] = h;
  }
  return e && (t ? n.sort((o, h) => o[t] > h[t] ? 1 : -1) : n.sort()), n;
}, P = (s, t, e) => {
  M(t, (n) => {
    z(n) && s.addEventListener(n, e, !1);
  });
}, x = (s, t, e) => {
  M(t, (n) => {
    z(n) && s.removeEventListener(n, e, !1);
  });
}, F = (s, t) => {
  for (; s; ) {
    if (s === t)
      return !0;
    s = s.parentNode;
  }
  return !1;
}, Q = (s, t) => function(...n) {
  return s.apply(t, n);
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addEventListener: P,
  bindFn: Q,
  each: M,
  generateId: J,
  hasParentNode: F,
  invokeArrayArg: _,
  isArray: f,
  isBoolean: $,
  isDefined: lt,
  isElement: nt,
  isFunction: I,
  isHTMLElement: it,
  isMouseEvent: rt,
  isNil: dt,
  isNull: ut,
  isNumber: st,
  isObject: K,
  isPointerEvent: ct,
  isString: z,
  isTouchEvent: ot,
  isTouchList: ht,
  isUndefined: at,
  removeEventListener: x,
  throwError: tt,
  throwWarning: et,
  uniqueArray: O
}, Symbol.toStringTag, { value: "Module" }));
let A = class {
  constructor(t) {
    this._type = v.Unknown, this._options = { ...t }, this._id = J(this.type), this._manager = null, this._options.enable = this._options.enable ?? !0, this._state = c.Possible, this.simultaneous = {}, this.requireFails = [];
  }
  get type() {
    return this._type;
  }
  get id() {
    return this._id;
  }
  get state() {
    return this._state;
  }
  get options() {
    return this._options;
  }
  get hasRequireFailures() {
    return this.requireFails.length > 0;
  }
  set state(t) {
    this._state = t;
  }
  set manager(t) {
    this._manager = t;
  }
  set(t) {
    var e;
    this._options = { ...this._options, ...t }, (e = this._manager) == null || e.touchAction.update();
  }
  canRecognizeWith(t) {
    return !!this.simultaneous[t.id];
  }
  recognizeWith(t) {
    if (f(t) && _(t, "recognizeWidth", this))
      return this;
    const e = this.getRecognizerByNameIfManager(t, this);
    return e && !this.simultaneous[e.id] && (this.simultaneous[e.id] = e, e.recognizeWith(this)), this;
  }
  dropRecognizeWith(t) {
    if (f(t) && _(t, "recognizeWidth", this))
      return this;
    const e = this.getRecognizerByNameIfManager(t, this);
    return e && delete this.simultaneous[e.id], this;
  }
  requireFailure(t) {
    if (f(t) && _(t, "requireFailure", this))
      return this;
    const e = this.getRecognizerByNameIfManager(t, this);
    return e && !this.requireFails.includes(e) && (this.requireFails.push(e), e.requireFailure(this)), this;
  }
  dropRequireFailure(t) {
    if (f(t) && _(t, "dropRequireFailure", this))
      return this;
    const e = this.getRecognizerByNameIfManager(t, this);
    if (e) {
      const n = this.requireFails.indexOf(e);
      n > -1 && this.requireFails.splice(n, 1);
    }
    return this;
  }
  emit(t) {
    ((n) => {
      var i;
      (i = this._manager) == null || i.emit(n, t);
    })(this._type);
  }
  tryEmit(t) {
    this.canEmit() && this.emit(t), this._state = c.Failed;
  }
  canEmit() {
    for (const t of this.requireFails)
      if (t._state !== c.Ended && t._state !== c.Possible)
        return !1;
    return !0;
  }
  recognize(t) {
    const e = { ...t };
    this._options.enable || (this.reset(), this._state = c.Failed), this._state & (c.Ended | c.Canceled | c.Failed) && (this._state = c.Possible), this._state = this.process(e), this._state & (c.Began | c.Changed | c.Ended | c.Canceled) && this.tryEmit(e);
  }
  getRecognizerByNameIfManager(t, e) {
    return e.manager ? e.manager.get(t.type) : t;
  }
};
class ft extends A {
  constructor(t) {
    super(t);
  }
  attrTest(t) {
    var n;
    const { pointers: e } = this.options;
    return e === 0 || ((n = t.pointers) == null ? void 0 : n.length) === e;
  }
  reset() {
    this.state = c.Possible;
  }
  process(t) {
    const { eventType: e } = t, n = this.state & (c.Began | c.Changed), i = this.attrTest(t);
    return n && (e & r.Cancel || !i) ? c.Canceled : n || i ? e & r.End ? c.Ended : this.state & c.Began ? c.Changed : c.Began : c.Failed;
  }
}
const T = class T extends A {
  constructor(t = {}) {
    super({
      ...T.defaults,
      ...t
    }), this._timer = null, this._isRecognized = !1, this._type = v.Press;
  }
  getTouchAction() {
    return ["auto"];
  }
  process(t) {
    const e = t.pointers.length === this.options.pointers, n = t.distance < this.options.threshold, i = t.deltaTime > this.options.time;
    if (!n || !e || t.eventType & (r.End | r.Cancel) && !i)
      this.reset();
    else if (t.eventType & r.Start)
      this.reset(), this._timer = setTimeout(() => {
        this.state = c.Ended, this._isRecognized = !0, this.tryEmit(t);
      }, this.options.time);
    else if (t.eventType & r.End)
      return c.Ended;
    return c.Failed;
  }
  reset() {
    this._timer && clearTimeout(this._timer), this._timer = null;
  }
  // 重写Emit方法覆盖抽象类中的方法，在识别器处于非识别中状态时，不会触发Emit
  emit(t) {
    this._isRecognized && (this._isRecognized = !1, t.deltaTime = Date.now() - t.timestamp, t.timestamp = Date.now(), super.emit(t));
  }
};
T.defaults = {
  threshold: 9,
  pointers: 1,
  time: 251
};
let E = T;
const pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AttrRecognizer: ft,
  PressRecognizer: E,
  Recognizer: A
}, Symbol.toStringTag, { value: "Module" }));
class mt {
  constructor(t, e) {
    this.manager = t, this.actions = [...e], this.set(e);
  }
  /**
   * @description set the touchAction value on the element
   * @param value touchActions of browser supported
   */
  set(t) {
    const e = t.join(" ");
    this.manager.element.style.touchAction = e.toLowerCase().trim();
  }
  /**
   * @description update the touchAction value on the element
   */
  update() {
    this.manager.options.touchActions && this.set([
      ...this.manager.options.touchActions
    ]);
  }
  /**
   * @description compute the touchAction value based on the recognizer's settings
   * @returns value of touchAction
   */
  compute() {
    let t = [];
    return this.manager.recognizers.forEach((e) => {
      $(e.options.enable) && e.options.enable && (t = t.concat(e.getTouchAction()));
    }), this.cleanTouchActions(t);
  }
  /**
   * @description prevent the browser default actions
   * @param input input of the recognizer
   */
  preventDefault(t) {
    const { srcEvent: e } = t, n = t.offsetDirection;
    if (this.manager.session.prevented) {
      e.preventDefault();
      return;
    }
    const i = this.actions.includes("none"), o = this.actions.includes("pan-x"), h = this.actions.includes("pan-y");
    if (i) {
      const l = t.pointers.length === 1, d = t.distance < 2, a = t.deltaTime < 250;
      if (l && d && a)
        return;
    }
    if (!(o && h) && (i || o && n === q || h && n === B))
      return this.preventSrc(e);
  }
  /**
   * @description clean the invalid touchAction value
   * @param actions actions of user defined
   * @returns 
   */
  cleanTouchActions(t) {
    if (t.includes("none"))
      return "none";
    const e = t.includes("pan-x"), n = t.includes("pan-y");
    return e && n ? "none" : e || n ? e ? "pan-x" : "pan-y" : t.includes("manipulation") ? "manipulation" : "auto";
  }
  /**
   * 
   * @description call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param srcEvent 
   */
  preventSrc(t) {
    this.manager.session.prevented = !0, t.preventDefault();
  }
}
class b {
  constructor(t, e) {
    this._evEl = [], this._evWin = [], this._evTarget = [], this._manager = t, this.el = t.element, this._target = t.options.inputTarget, this.callback = e, this.domHandler = (n) => {
      this._manager.options.enable && this.handler(n);
    };
  }
  get manager() {
    return this._manager;
  }
  get target() {
    return this._target;
  }
  set evEl(t) {
    this._evEl = t;
  }
  set evWin(t) {
    this._evWin = t;
  }
  set evTarget(t) {
    this._evTarget = t;
  }
  init() {
    this._evEl.length !== 0 && P(this.el, this._evEl, this.domHandler), this._evTarget.length !== 0 && this.target && P(this.target, this._evTarget, this.domHandler), this._evWin.length !== 0 && P(window, this._evWin, this.domHandler);
  }
  destroy() {
    this._evEl.length !== 0 && x(this.el, this._evEl, this.domHandler), this._evTarget.length !== 0 && this.target && x(this.target, this._evTarget, this.domHandler), this._evWin.length !== 0 && x(window, this._evWin, this.domHandler);
  }
}
const _t = {
  mousedown: r.Start,
  mousemove: r.Move,
  mouseup: r.End
}, yt = ["mousedown"], vt = ["mousemove", "mouseup"];
class N extends b {
  constructor(t, e) {
    super(t, e), this.evEl = yt, this.evWin = vt, this._pressed = !1, this.init();
  }
  handler(t) {
    const e = _t[t.type];
    e === r.Start && t.button === 0 && (this._pressed = !0), this._pressed && (e === r.End && (this._pressed = !1), this.callback(this.manager, e, {
      pointers: [t],
      changedPointers: [t],
      pointerType: m.Mouse,
      srcEvent: t
    }));
  }
}
const Mt = {
  touchstart: r.Start,
  touchmove: r.Move,
  touchend: r.End,
  touchcancel: r.Cancel
}, Pt = ["touchstart", "touchmove", "touchend", "touchcancel"];
class R extends b {
  constructor(t, e) {
    super(t, e), this.evTarget = Pt, this.targetIds = {}, this.init();
  }
  handler(t) {
    const e = Mt[t.type], n = this.getTouches(t, e);
    n && this.callback(this.manager, e, {
      pointers: n[0],
      changedPointers: n[1],
      pointerType: m.Touch,
      srcEvent: t
    });
  }
  /**
   * 获取触摸事件
   * @param ev 触摸事件
   * @param type 事件类型
   * @returns [allTouches, changedTouches]
   */
  getTouches(t, e) {
    const n = Array.from(t.touches);
    if (e & (r.Start | r.Move) && n.length === 1) {
      const l = n[0];
      return this.targetIds[l.identifier] = !0, [n, n];
    }
    const i = n.filter((l) => F(l.target, this.target));
    if (e === r.Start)
      for (let l = 0; l < i.length; l++)
        this.targetIds[i[l].identifier] = !0;
    const o = Array.from(t.changedTouches), h = [];
    for (let l = 0; l < i.length; l++)
      this.targetIds[i[l].identifier] && h.push(o[l]), (e === r.End || e === r.Cancel) && delete this.targetIds[o[l].identifier];
    return h.length ? [
      O(i.concat(h), "identifier", !0),
      h
    ] : null;
  }
}
const xt = {
  pointerdown: r.Start,
  pointermove: r.Move,
  pointerup: r.End,
  pointercancel: r.Cancel,
  pointerout: r.Cancel
}, Tt = ["pointerdown"], bt = ["pointermove", "pointerup", "pointercancel", "pointerout"];
class Et extends b {
  constructor(t, e) {
    super(t, e), this.evEl = Tt, this.evWin = bt, this._store = [], this.init();
  }
  handler(t) {
    const e = xt[t.type], n = t.pointerType === m.Touch;
    let i = this._store.findIndex((h) => h.pointerId === t.pointerId), o = !1;
    e === r.Start && (t.button === 0 || n) ? i === -1 && (this._store.push(t), i = this._store.length - 1) : (e === r.End || e === r.Cancel) && (o = !0), i !== -1 && (this._store[i] = t, this.callback(this.manager, e, {
      pointers: this._store,
      changedPointers: [t],
      pointerType: t.pointerType,
      srcEvent: t
    }), o && this._store.splice(i, 1));
  }
}
const St = 2500, X = 25;
class wt extends b {
  constructor(t, e) {
    super(t, e);
    const n = Q(this.handler, this);
    this._mouse = new N(t, n), this._touch = new R(t, n), this._primaryTouch = null, this._lastTouches = [];
  }
  handler(t, e, n) {
    const i = n.pointerType === m.Touch, o = n.pointerType === m.Mouse;
    if (i)
      this._recordTouches(e, n);
    else if (o && this._isSyntheticEvent(n))
      return;
  }
  destroy() {
    this._mouse.destroy(), this._touch.destroy();
  }
  _recordTouches(t, e) {
    t === r.Start ? (this._primaryTouch = e.changedPointers[0].identifier, this._setLastTouch(e)) : (t === r.End || t === r.Cancel) && this._setLastTouch(e);
  }
  _setLastTouch(t) {
    const e = t.changedPointers[0];
    if (e.identifier === this._primaryTouch) {
      const n = {
        x: e.clientX,
        y: e.clientY
      };
      this._lastTouches.push(n);
      const i = setTimeout(() => {
        const o = this._lastTouches.indexOf(n);
        o > -1 && this._lastTouches.splice(o, 1), clearTimeout(i);
      }, St);
    }
  }
  _isSyntheticEvent(t) {
    const e = t.srcEvent, n = e.clientX, i = e.clientY;
    for (let o = 0; o < this._lastTouches.length; o++) {
      const h = this._lastTouches[o], l = Math.abs(n - h.x), d = Math.abs(i - h.y);
      if (l <= X && d <= X)
        return !0;
    }
    return !1;
  }
}
class u {
  /**
   * 计算从起始点到终点的角度
   * @param p1 
   * @param p2 
   * @returns 
   */
  static getAngle(t, e) {
    return Math.atan2(e.y - t.y, e.x - t.x) * 180 / Math.PI;
  }
  /**
   * 计算从起始点到终点的距离
   * @param p1 
   * @param p2 
   * @returns 
   */
  static getDistance(t, e) {
    const n = e.x - t.x, i = e.y - t.y;
    return Math.sqrt(n * n + i * i);
  }
  /**
   * 计算从起始点到终点的移动方向
   * @param p1 
   * @param p2 
   * @returns 
   */
  static getDirection(t, e) {
    return t === e ? p.None : Math.abs(t) >= Math.abs(e) ? t < 0 ? p.Left : p.Right : e < 0 ? p.Up : p.Down;
  }
  /**
   * 计算多个像素点的中心
   * @param points 
   * @returns 
   */
  static getCenter(t) {
    const e = Math.round(t.reduce((i, o) => i + o.x, 0) / t.length), n = Math.round(t.reduce((i, o) => i + o.y, 0) / t.length);
    return { x: e, y: n };
  }
  /**
   * 计算旋转角度
   * @param starts 
   * @param ends 
   * @returns 
   */
  static getRotation(t, e) {
    return this.getAngle(e[1], e[0]) + this.getAngle(t[1], t[0]);
  }
  /**
   * 计算缩放比例
   * @param starts 
   * @param ends 
   * @returns 
   */
  static getScale(t, e) {
    return this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]);
  }
  /**
   * 计算速度
   * @param deltaTime 
   * @param distance 
   * @returns { x: velX, y: velY }
   */
  static getVelocity(t, e, n) {
    return {
      x: e / t || 0,
      y: n / t || 0
    };
  }
}
const zt = (s, t, e) => {
  const n = e.pointers.length, i = e.changedPointers.length, o = t & r.Start && n - i === 0, h = t & (r.End | r.Cancel) && n - i === 0;
  e.isFirst = !!o, e.isFinal = !!h, o && s.clearSession(), e.eventType = t, Ft(s, e), s.options.preventDefault && e.srcEvent.preventDefault(), s.options.stopPropagation && e.srcEvent.stopPropagation(), s.options.stopImmediatePropagation && e.srcEvent.stopImmediatePropagation(), s.emit(v.Secret, e), s.recognize(e), s.session.prevInput = e;
}, Ft = (s, t) => {
  var L;
  const e = s.session, n = t.pointers.length;
  e.firstInput || (e.firstInput = V(t)), n > 1 && !e.firstMultiple ? e.firstMultiple = V(t) : n === 1 && (e.firstMultiple = null);
  const { firstInput: i, firstMultiple: o } = e, h = o ? o.center : i.center, l = [];
  (L = t.pointers) == null || L.forEach((W) => {
    l.push({
      x: Math.round(W.clientX),
      y: Math.round(W.clientY)
    });
  });
  const d = t.center = u.getCenter(l);
  t.timestamp = Date.now(), t.deltaTime = t.timestamp - i.timestamp, t.angle = u.getAngle(h, d), t.distance = u.getDistance(h, d), At(e, t), t.offsetDirection = u.getDirection(t.deltaX, t.deltaY);
  const a = u.getVelocity(t.deltaTime, t.deltaX, t.deltaY);
  t.overallVelocityX = a.x, t.overallVelocityY = a.y, t.overallVelocity = Math.abs(a.x) > Math.abs(a.y) ? a.x : a.y, t.scale = o ? u.getScale(o.pointers, l) : 1, t.rotation = o ? u.getRotation(o.pointers, l) : 0, t.maxPointers = e.prevInput ? Math.max(t.pointers.length, e.prevInput.maxPointers) : t.pointers.length;
  const g = s.element;
  F(t.srcEvent.target, g) ? t.target = t.srcEvent.target : t.target = g, Lt(e, t);
}, V = (s) => {
  const t = [];
  for (let e = 0; e < s.pointers.length; e++)
    t.push({
      x: Math.round(s.pointers[e].clientX),
      y: Math.round(s.pointers[e].clientY)
    });
  return {
    pointers: t,
    timestamp: Date.now(),
    center: u.getCenter(t),
    deltaX: s.deltaX || 0,
    deltaY: s.deltaY || 0
  };
}, At = (s, t) => {
  const e = t.center;
  let n = s.offsetDelta || { x: 0, y: 0 }, i = s.prevDelta || { x: 0, y: 0 };
  const o = s.prevInput || { center: e };
  (t.eventType === r.Start || t.eventType === r.End) && (i = s.prevDelta = {
    x: o.deltaX || 0,
    y: o.deltaY || 0
  }, n = s.offsetDelta = {
    x: e.x,
    y: e.y
  }), t.deltaX = i.x + (e.x - n.x), t.deltaY = i.y + (e.y - n.y);
}, Lt = (s, t) => {
  const e = s.lastInterval || t, n = t.timestamp - e.timestamp;
  let i, o, h, l;
  if (t.eventType !== r.Cancel && (n > U || e.velocity === void 0)) {
    const d = t.deltaX - e.deltaX, a = t.deltaY - e.deltaY, g = u.getVelocity(n, d, a);
    o = g.x, h = g.y, i = Math.abs(g.x) > Math.abs(g.y) ? g.x : g.y, l = u.getDirection(d, a), s.lastInterval = t;
  } else
    o = e.velocityX, h = e.velocityY, i = e.overallVelocity, l = e.direction;
  t.velocityX = o, t.velocityY = h, t.velocity = i, t.direction = l;
}, Wt = (s) => {
  let t;
  return Y ? t = Et : k ? t = R : S ? t = wt : t = N, new t(s, zt);
};
class Xt {
  constructor(t, e) {
    this._element = t, this._options = { ...C, ...e }, this._options.inputTarget = (e == null ? void 0 : e.inputTarget) ?? this._element, this._recognizers = [], this._input = Wt(this), this._touchAction = new mt(this, this._options.touchActions), this._session = {}, this.handlers = {}, this._oldCssProps = {}, this._toggleCssProps("add");
  }
  get element() {
    return this._element;
  }
  get options() {
    return this._options;
  }
  get recognizers() {
    return this._recognizers;
  }
  get session() {
    return this._session;
  }
  get touchAction() {
    return this._touchAction;
  }
  stop(t) {
    this._session.stopped = t ? y.ForceStop : y.Stop;
  }
  set(t) {
    this._options = { ...this._options, ...t };
  }
  get(t) {
    return this._recognizers.find((e) => e.type === t) || null;
  }
  add(t) {
    t.manager = this, this._recognizers.push(t);
  }
  remove(t) {
    const e = this._recognizers.findIndex((n) => n.type === t.type);
    e > -1 && this._recognizers.splice(e, 1);
  }
  on(t, e) {
    this.handlers[t] = e;
  }
  off(t) {
    t.forEach((e) => {
      delete this.handlers[e];
    });
  }
  destroy() {
    this._toggleCssProps("remove"), this._recognizers = [], this._input.destroy(), this._session = {}, this.handlers = {};
  }
  /**
   * Run the recognizers. Called by the inputHandler function on every movement of the pointers.
   * It works by calling the recognize method of each recognizer.
   * If the recognizer recognizes the input, it will call the emit method of the recognizer.
   * @param input The data from the inputHandler.
   */
  recognize(t) {
    if (this._session.stopped)
      return;
    this.touchAction.preventDefault(t);
    let { curRecognizer: e } = this._session;
    (!e || e && e.state === c.Ended) && (e = this._session.curRecognizer = null);
    for (let n = 0; n < this._recognizers.length; n++) {
      const i = this._recognizers[n];
      this._session.stopped !== y.ForceStop && (!e || i === e || i.canRecognizeWith(e)) ? i.recognize(t) : i.reset(), !e && i.state & (c.Began | c.Changed | c.Ended) && (e = this._session.curRecognizer = i);
    }
  }
  /**
   * Emit event. Called by the recognizer when it recognizes the input.
   * @param type Touch event type
   * @param input input data
   */
  emit(t, e) {
    const n = this.handlers[t];
    e.type = t, e.preventDefault = () => {
      var i;
      (i = e.srcEvent) == null || i.preventDefault();
    }, n && n(e);
  }
  clearSession() {
    this._session = {};
  }
  _toggleCssProps(t) {
    !this._options.cssProps || !this._element.style || (M(this._options.cssProps, (e, n) => {
      t === "add" ? (this._oldCssProps[n] = this._element.style[n], this._element.style[n] = e) : this._element.style[n] = this._oldCssProps[n] || "";
    }), t !== "add" && (this._oldCssProps = {}));
  }
}
const qt = {
  Manager: Xt,
  Constants: Z,
  Types: D,
  Utils: gt,
  Recognizer: pt
};
export {
  qt as default
};
