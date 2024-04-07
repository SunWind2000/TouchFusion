var y = /* @__PURE__ */ ((s) => (s[s.Stop = 1] = "Stop", s[s.ForceStop = 2] = "ForceStop", s))(y || {}), p = /* @__PURE__ */ ((s) => (s[s.None = 1] = "None", s[s.Left = 2] = "Left", s[s.Right = 4] = "Right", s[s.Up = 8] = "Up", s[s.Down = 16] = "Down", s[s.Horizontal = 6] = "Horizontal", s[s.Vertical = 24] = "Vertical", s[s.All = 30] = "All", s))(p || {});
const q = 6, B = 24;
var c = /* @__PURE__ */ ((s) => (s[s.Start = 1] = "Start", s[s.Move = 2] = "Move", s[s.End = 4] = "End", s[s.Cancel = 8] = "Cancel", s))(c || {}), m = /* @__PURE__ */ ((s) => (s.Touch = "touch", s.Mouse = "mouse", s.Pen = "pen", s.Kinect = "kinect", s))(m || {});
const j = 25, U = /mobile|tablet|ip(ad|hone|od)|android/i, T = "ontouchstart" in window || navigator.maxTouchPoints > 0, Z = "PointerEvent" in window, H = T && U.test(navigator.userAgent);
var r = /* @__PURE__ */ ((s) => (s[s.Possible = 1] = "Possible", s[s.Began = 2] = "Began", s[s.Changed = 4] = "Changed", s[s.Ended = 8] = "Ended", s[s.Canceled = 16] = "Canceled", s[s.Failed = 32] = "Failed", s))(r || {}), v = /* @__PURE__ */ ((s) => (s.Secret = "touch-fusion.input", s.Unknown = "unknown", s.Swipe = "swipe", s.Pan = "pan", s.Pinch = "pinch", s.Rotate = "rotate", s.Press = "press", s.Tap = "tap", s))(v || {}), Y = /* @__PURE__ */ ((s) => (s.COMPUTE = "compute", s.AUTO = "auto", s.MANIPULATION = "manipulation", s.NONE = "none", s.PAN_X = "pan-x", s.PAN_Y = "pan-y", s))(Y || {});
const D = [
  "none",
  "pan-x",
  "pan-y",
  "auto",
  "manipulation",
  "compute"
], k = {
  domEvents: !1,
  touchActions: ["compute"],
  enable: !0,
  preventDefault: !1,
  stopPropagation: !1,
  stopImmediatePropagation: !1,
  inputTarget: null,
  cssProps: {
    userSelect: "none"
  }
}, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACTIONS: D,
  COMPUTE_INTERVAL: j,
  DEFAULT_OPTIONS: k,
  DIRECTION: p,
  DIRECTION_HORIZONTAL: q,
  DIRECTION_VERTICAL: B,
  INPUT_STATE: c,
  INPUT_TYPE: m,
  MOBILE_REGEX: U,
  RECOGNIZER_STATE: r,
  RECOGNIZER_TYPE: v,
  STOP_TYPE: y,
  SUPPORT_ONLY_TOUCH: H,
  SUPPORT_POINTER_EVENTS: Z,
  SUPPORT_TOUCH: T,
  TOUCH_ACTION: Y
}, Symbol.toStringTag, { value: "Module" })), te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
class z extends Error {
  constructor(e) {
    super(e), this.name = "TouchFusionError", Error.captureStackTrace && Error.captureStackTrace(this, z);
  }
}
const se = (s) => {
  throw new z(s);
}, ne = (s) => {
  console.warn(`[TouchFusionWarning]: ${s}`);
}, $ = (s) => typeof s == "boolean", ie = (s) => typeof s == "number", F = (s) => typeof s == "string", C = (s) => typeof s == "function", O = (s) => s === null || Object.prototype.toString.call(s) === "[object Array]" ? !1 : typeof s == "object", f = (s) => Array.isArray(s), oe = (s) => s instanceof Element, re = (s) => s instanceof HTMLElement, ce = (s) => s instanceof TouchEvent, he = (s) => s instanceof MouseEvent, le = (s) => s instanceof PointerEvent, ae = (s) => s instanceof TouchList, ue = (s) => s !== void 0, de = (s) => s === void 0, ge = (s) => s === null, fe = (s) => s == null, K = (s) => `${s}-${Date.now()}-${Math.floor(Math.random() * 1e5)}`, M = (s, e, t) => {
  if (!(!O(s) && !f(s)))
    if (f(s))
      s.forEach(e, t);
    else
      for (const n in s)
        Object.prototype.hasOwnProperty.call(s, n) && e.call(t, s[n], n, s);
}, _ = (s, e, t) => !f(s) || !C(t[e]) ? !1 : (M(
  s,
  t[e],
  t
), !0), J = (s, e, t = !1) => {
  const n = [], i = [];
  for (let o = 0; o < s.length; o++) {
    const l = e ? s[o][e] : s[o];
    i.indexOf(l) === -1 && n.push(s[o]), i[o] = l;
  }
  return t && (e ? n.sort((o, l) => o[e] > l[e] ? 1 : -1) : n.sort()), n;
}, b = (s, e, t) => {
  M(e, (n) => {
    F(n) && s.addEventListener(n, t, !1);
  });
}, x = (s, e, t) => {
  M(e, (n) => {
    F(n) && s.removeEventListener(n, t, !1);
  });
}, w = (s, e) => {
  for (; s; ) {
    if (s === e)
      return !0;
    s = s.parentNode;
  }
  return !1;
}, Q = (s, e) => function(...n) {
  return s.apply(e, n);
}, pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addEventListener: b,
  bindFn: Q,
  each: M,
  generateId: K,
  hasParentNode: w,
  invokeArrayArg: _,
  isArray: f,
  isBoolean: $,
  isDefined: ue,
  isElement: oe,
  isFunction: C,
  isHTMLElement: re,
  isMouseEvent: he,
  isNil: fe,
  isNull: ge,
  isNumber: ie,
  isObject: O,
  isPointerEvent: le,
  isString: F,
  isTouchEvent: ce,
  isTouchList: ae,
  isUndefined: de,
  removeEventListener: x,
  throwError: se,
  throwWarning: ne,
  uniqueArray: J
}, Symbol.toStringTag, { value: "Module" }));
class A {
  constructor(e, t) {
    this._evEl = [], this._evWin = [], this._evTarget = [], this._manager = e, this.el = e.element, this._target = e.options.inputTarget, this.callback = t, this.domHandler = (n) => {
      this._manager.options.enable && this.handler(n);
    };
  }
  get manager() {
    return this._manager;
  }
  get target() {
    return this._target;
  }
  set evEl(e) {
    this._evEl = e;
  }
  set evWin(e) {
    this._evWin = e;
  }
  set evTarget(e) {
    this._evTarget = e;
  }
  init() {
    this._evEl.length !== 0 && b(this.el, this._evEl, this.domHandler), this._evTarget.length !== 0 && this.target && b(this.target, this._evTarget, this.domHandler), this._evWin.length !== 0 && b(window, this._evWin, this.domHandler);
  }
  destroy() {
    this._evEl.length !== 0 && x(this.el, this._evEl, this.domHandler), this._evTarget.length !== 0 && this.target && x(this.target, this._evTarget, this.domHandler), this._evWin.length !== 0 && x(window, this._evWin, this.domHandler);
  }
}
const me = {
  mousedown: c.Start,
  mousemove: c.Move,
  mouseup: c.End
}, _e = ["mousedown"], ye = ["mousemove", "mouseup"];
class I extends A {
  constructor(e, t) {
    super(e, t), this.evEl = _e, this.evWin = ye, this._pressed = !1, this.init();
  }
  handler(e) {
    const t = me[e.type];
    t === c.Start && e.button === 0 && (this._pressed = !0), this._pressed && (t === c.End && (this._pressed = !1), this.callback(this.manager, t, {
      pointers: [e],
      changedPointers: [e],
      pointerType: m.Mouse,
      srcEvent: e
    }));
  }
}
const ve = {
  touchstart: c.Start,
  touchmove: c.Move,
  touchend: c.End,
  touchcancel: c.Cancel
}, Me = ["touchstart", "touchmove", "touchend", "touchcancel"];
class N extends A {
  constructor(e, t) {
    super(e, t), this.evTarget = Me, this.targetIds = {}, this.init();
  }
  handler(e) {
    const t = ve[e.type], n = this.getTouches(e, t);
    n && this.callback(this.manager, t, {
      pointers: n[0],
      changedPointers: n[1],
      pointerType: m.Touch,
      srcEvent: e
    });
  }
  /**
   * 获取触摸事件
   * @param ev 触摸事件
   * @param type 事件类型
   * @returns [allTouches, changedTouches]
   */
  getTouches(e, t) {
    const n = Array.from(e.touches);
    if (t & (c.Start | c.Move) && n.length === 1) {
      const h = n[0];
      return this.targetIds[h.identifier] = !0, [n, n];
    }
    const i = n.filter((h) => w(h.target, this.target));
    if (t === c.Start)
      for (let h = 0; h < i.length; h++)
        this.targetIds[i[h].identifier] = !0;
    const o = Array.from(e.changedTouches), l = [];
    for (let h = 0; h < i.length; h++)
      this.targetIds[i[h].identifier] && l.push(o[h]), (t === c.End || t === c.Cancel) && delete this.targetIds[o[h].identifier];
    return l.length ? [
      J(i.concat(l), "identifier", !0),
      l
    ] : null;
  }
}
const be = 2500, W = 25;
class xe extends A {
  constructor(e, t) {
    super(e, t);
    const n = Q(this.handler, this);
    this._mouse = new I(e, n), this._touch = new N(e, n), this._primaryTouch = null, this._lastTouches = [];
  }
  handler(e, t, n) {
    const i = n.pointerType === m.Touch, o = n.pointerType === m.Mouse;
    if (i)
      this._recordTouches(t, n);
    else if (o && this._isSyntheticEvent(n))
      return;
  }
  destroy() {
    this._mouse.destroy(), this._touch.destroy();
  }
  _recordTouches(e, t) {
    e === c.Start ? (this._primaryTouch = t.changedPointers[0].identifier, this._setLastTouch(t)) : (e === c.End || e === c.Cancel) && this._setLastTouch(t);
  }
  _setLastTouch(e) {
    const t = e.changedPointers[0];
    if (t.identifier === this._primaryTouch) {
      const n = {
        x: t.clientX,
        y: t.clientY
      };
      this._lastTouches.push(n);
      const i = setTimeout(() => {
        const o = this._lastTouches.indexOf(n);
        o > -1 && this._lastTouches.splice(o, 1), clearTimeout(i);
      }, be);
    }
  }
  _isSyntheticEvent(e) {
    const t = e.srcEvent, n = t.clientX, i = t.clientY;
    for (let o = 0; o < this._lastTouches.length; o++) {
      const l = this._lastTouches[o], h = Math.abs(n - l.x), d = Math.abs(i - l.y);
      if (h <= W && d <= W)
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
  static getAngle(e, t) {
    return Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI;
  }
  /**
   * 计算从起始点到终点的距离
   * @param p1 
   * @param p2 
   * @returns 
   */
  static getDistance(e, t) {
    const n = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(n * n + i * i);
  }
  /**
   * 计算从起始点到终点的移动方向
   * @param p1 
   * @param p2 
   * @returns 
   */
  static getDirection(e, t) {
    return e === t ? p.None : Math.abs(e) >= Math.abs(t) ? e < 0 ? p.Left : p.Right : t < 0 ? p.Up : p.Down;
  }
  /**
   * 计算多个像素点的中心
   * @param points 
   * @returns 
   */
  static getCenter(e) {
    const t = Math.round(e.reduce((i, o) => i + o.x, 0) / e.length), n = Math.round(e.reduce((i, o) => i + o.y, 0) / e.length);
    return { x: t, y: n };
  }
  /**
   * 计算旋转角度
   * @param starts 
   * @param ends 
   * @returns 
   */
  static getRotation(e, t) {
    return this.getAngle(t[1], t[0]) + this.getAngle(e[1], e[0]);
  }
  /**
   * 计算缩放比例
   * @param starts 
   * @param ends 
   * @returns 
   */
  static getScale(e, t) {
    return this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]);
  }
  /**
   * 计算速度
   * @param deltaTime 
   * @param distance 
   * @returns { x: velX, y: velY }
   */
  static getVelocity(e, t, n) {
    return {
      x: t / e || 0,
      y: n / e || 0
    };
  }
}
const Pe = (s, e, t) => {
  const n = t.pointers.length, i = t.changedPointers.length, o = e & c.Start && n - i === 0, l = e & (c.End | c.Cancel) && n - i === 0;
  t.isFirst = !!o, t.isFinal = !!l, o && s.clearSession(), t.eventType = e, Se(s, t), s.options.preventDefault && t.srcEvent.preventDefault(), s.options.stopPropagation && t.srcEvent.stopPropagation(), s.options.stopImmediatePropagation && t.srcEvent.stopImmediatePropagation(), s.emit(v.Secret, t), s.recognize(t), s.session.prevInput = t;
}, Se = (s, e) => {
  var E;
  const t = s.session, n = e.pointers.length;
  t.firstInput || (t.firstInput = V(e)), n > 1 && !t.firstMultiple ? t.firstMultiple = V(e) : n === 1 && (t.firstMultiple = null);
  const { firstInput: i, firstMultiple: o } = t, l = o ? o.center : i.center, h = [];
  (E = e.pointers) == null || E.forEach((X) => {
    h.push({
      x: Math.round(X.clientX),
      y: Math.round(X.clientY)
    });
  });
  const d = e.center = u.getCenter(h);
  e.timestamp = Date.now(), e.deltaTime = e.timestamp - i.timestamp, e.angle = u.getAngle(l, d), e.distance = u.getDistance(l, d), Te(t, e), e.offsetDirection = u.getDirection(e.deltaX, e.deltaY);
  const a = u.getVelocity(e.deltaTime, e.deltaX, e.deltaY);
  e.overallVelocityX = a.x, e.overallVelocityY = a.y, e.overallVelocity = Math.abs(a.x) > Math.abs(a.y) ? a.x : a.y, e.scale = o ? u.getScale(o.pointers, h) : 1, e.rotation = o ? u.getRotation(o.pointers, h) : 0, e.maxPointers = t.prevInput ? Math.max(e.pointers.length, t.prevInput.maxPointers) : e.pointers.length;
  const g = s.element;
  w(e.srcEvent.target, g) ? e.target = e.srcEvent.target : e.target = g, ze(t, e);
}, V = (s) => {
  const e = [];
  for (let t = 0; t < s.pointers.length; t++)
    e.push({
      x: Math.round(s.pointers[t].clientX),
      y: Math.round(s.pointers[t].clientY)
    });
  return {
    pointers: e,
    timestamp: Date.now(),
    center: u.getCenter(e),
    deltaX: s.deltaX || 0,
    deltaY: s.deltaY || 0
  };
}, Te = (s, e) => {
  const t = e.center;
  let n = s.offsetDelta || { x: 0, y: 0 }, i = s.prevDelta || { x: 0, y: 0 };
  const o = s.prevInput || { center: t };
  (e.eventType === c.Start || e.eventType === c.End) && (i = s.prevDelta = {
    x: o.deltaX || 0,
    y: o.deltaY || 0
  }, n = s.offsetDelta = {
    x: t.x,
    y: t.y
  }), e.deltaX = i.x + (t.x - n.x), e.deltaY = i.y + (t.y - n.y);
}, ze = (s, e) => {
  const t = s.lastInterval || e, n = e.timestamp - t.timestamp;
  let i, o, l, h;
  if (e.eventType !== c.Cancel && (n > j || t.velocity === void 0)) {
    const d = e.deltaX - t.deltaX, a = e.deltaY - t.deltaY, g = u.getVelocity(n, d, a);
    o = g.x, l = g.y, i = Math.abs(g.x) > Math.abs(g.y) ? g.x : g.y, h = u.getDirection(d, a), s.lastInterval = e;
  } else
    o = t.velocityX, l = t.velocityY, i = t.overallVelocity, h = t.direction;
  e.velocityX = o, e.velocityY = l, e.velocity = i, e.direction = h;
}, R = (s) => {
  let e;
  return H ? e = N : T ? e = xe : e = I, new e(s, Pe);
}, Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputUtil: u,
  createInputInstance: R
}, Symbol.toStringTag, { value: "Module" }));
class L {
  constructor(e) {
    this._type = v.Unknown, this._options = { ...e }, this._id = K(this.type), this._manager = null, this._options.enable = this._options.enable ?? !0, this._state = r.Possible, this.simultaneous = {}, this.requireFails = [];
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
  set state(e) {
    this._state = e;
  }
  set manager(e) {
    this._manager = e;
  }
  set(e) {
    var t;
    this._options = { ...this._options, ...e }, (t = this._manager) == null || t.touchAction.update();
  }
  canRecognizeWith(e) {
    return !!this.simultaneous[e.id];
  }
  recognizeWith(e) {
    if (f(e) && _(e, "recognizeWidth", this))
      return this;
    const t = this.getRecognizerByNameIfManager(e, this);
    return t && !this.simultaneous[t.id] && (this.simultaneous[t.id] = t, t.recognizeWith(this)), this;
  }
  dropRecognizeWith(e) {
    if (f(e) && _(e, "recognizeWidth", this))
      return this;
    const t = this.getRecognizerByNameIfManager(e, this);
    return t && delete this.simultaneous[t.id], this;
  }
  requireFailure(e) {
    if (f(e) && _(e, "requireFailure", this))
      return this;
    const t = this.getRecognizerByNameIfManager(e, this);
    return t && !this.requireFails.includes(t) && (this.requireFails.push(t), t.requireFailure(this)), this;
  }
  dropRequireFailure(e) {
    if (f(e) && _(e, "dropRequireFailure", this))
      return this;
    const t = this.getRecognizerByNameIfManager(e, this);
    if (t) {
      const n = this.requireFails.indexOf(t);
      n > -1 && this.requireFails.splice(n, 1);
    }
    return this;
  }
  emit(e) {
    ((n) => {
      var i;
      (i = this._manager) == null || i.emit(n, e);
    })(this._type);
  }
  tryEmit(e) {
    this.canEmit() && this.emit(e), this._state = r.Failed;
  }
  canEmit() {
    for (const e of this.requireFails)
      if (e._state !== r.Ended && e._state !== r.Possible)
        return !1;
    return !0;
  }
  recognize(e) {
    const t = { ...e };
    this._options.enable || (this.reset(), this._state = r.Failed), this._state & (r.Ended | r.Canceled | r.Failed) && (this._state = r.Possible), this._state = this.process(t), this._state & (r.Began | r.Changed | r.Ended | r.Canceled) && this.tryEmit(t);
  }
  getRecognizerByNameIfManager(e, t) {
    return t.manager ? t.manager.get(e.type) : e;
  }
}
class we extends L {
  constructor(e) {
    super(e);
  }
  attrTest(e) {
    var n;
    const { pointers: t } = this.options;
    return t === 0 || ((n = e.pointers) == null ? void 0 : n.length) === t;
  }
  reset() {
    this.state = r.Possible;
  }
  process(e) {
    const { eventType: t } = e, n = this.state & (r.Began | r.Changed), i = this.attrTest(e);
    return n && (t & c.Cancel || !i) ? r.Canceled : n || i ? t & c.End ? r.Ended : this.state & r.Began ? r.Changed : r.Began : r.Failed;
  }
}
const P = class P extends L {
  constructor(e = {}) {
    super({
      ...P.defaults,
      ...e
    }), this._timer = null, this._isRecognized = !1, this._type = v.Press;
  }
  getTouchAction() {
    return ["auto"];
  }
  process(e) {
    const t = e.pointers.length === this.options.pointers, n = e.distance < this.options.threshold, i = e.deltaTime > this.options.time;
    if (!n || !t || e.eventType & (c.End | c.Cancel) && !i)
      this.reset();
    else if (e.eventType & c.Start)
      this.reset(), this._timer = setTimeout(() => {
        this.state = r.Ended, this._isRecognized = !0, this.tryEmit(e);
      }, this.options.time);
    else if (e.eventType & c.End)
      return r.Ended;
    return r.Failed;
  }
  reset() {
    this._timer && clearTimeout(this._timer), this._timer = null;
  }
  // 重写Emit方法覆盖抽象类中的方法，在识别器处于非识别中状态时，不会触发Emit
  emit(e) {
    this._isRecognized && (this._isRecognized = !1, super.emit(e));
  }
};
P.defaults = {
  threshold: 9,
  pointers: 1,
  time: 251
};
let S = P;
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AttrRecognizer: we,
  PressRecognizer: S,
  Recognizer: L
}, Symbol.toStringTag, { value: "Module" }));
class G {
  constructor(e, t) {
    this.manager = e, this.actions = [...t], this.set(t);
  }
  /**
   * @description set the touchAction value on the element
   * @param value touchActions of browser supported
   */
  set(e) {
    const t = e.join(" ");
    this.manager.element.style.touchAction = t.toLowerCase().trim();
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
    let e = [];
    return this.manager.recognizers.forEach((t) => {
      $(t.options.enable) && t.options.enable && (e = e.concat(t.getTouchAction()));
    }), this.cleanTouchActions(e);
  }
  /**
   * @description prevent the browser default actions
   * @param input input of the recognizer
   */
  preventDefault(e) {
    const { srcEvent: t } = e, n = e.offsetDirection;
    if (this.manager.session.prevented) {
      t.preventDefault();
      return;
    }
    const i = this.actions.includes("none"), o = this.actions.includes("pan-x"), l = this.actions.includes("pan-y");
    if (i) {
      const h = e.pointers.length === 1, d = e.distance < 2, a = e.deltaTime < 250;
      if (h && d && a)
        return;
    }
    if (!(o && l) && (i || o && n === q || l && n === B))
      return this.preventSrc(t);
  }
  /**
   * @description clean the invalid touchAction value
   * @param actions actions of user defined
   * @returns 
   */
  cleanTouchActions(e) {
    if (e.includes("none"))
      return "none";
    const t = e.includes("pan-x"), n = e.includes("pan-y");
    return t && n ? "none" : t || n ? t ? "pan-x" : "pan-y" : e.includes("manipulation") ? "manipulation" : "auto";
  }
  /**
   * 
   * @description call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param srcEvent 
   */
  preventSrc(e) {
    this.manager.session.prevented = !0, e.preventDefault();
  }
}
const Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TouchAction: G
}, Symbol.toStringTag, { value: "Module" }));
class Ee {
  constructor(e, t) {
    this._element = e, this._options = { ...k, ...t }, this._options.inputTarget = (t == null ? void 0 : t.inputTarget) ?? this._element, this._recognizers = [], this._input = R(this), this._touchAction = new G(this, this._options.touchActions), this._session = {}, this.handlers = {}, this._oldCssProps = {}, this._toggleCssProps("add");
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
  stop(e) {
    this._session.stopped = e ? y.ForceStop : y.Stop;
  }
  set(e) {
    this._options = { ...this._options, ...e };
  }
  get(e) {
    return this._recognizers.find((t) => t.type === e) || null;
  }
  add(e) {
    e.manager = this, this._recognizers.push(e);
  }
  remove(e) {
    const t = this._recognizers.findIndex((n) => n.type === e.type);
    t > -1 && this._recognizers.splice(t, 1);
  }
  on(e, t) {
    e.forEach((n) => {
      this.handlers[n] = t;
    });
  }
  off(e) {
    e.forEach((t) => {
      delete this.handlers[t];
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
  recognize(e) {
    if (this._session.stopped)
      return;
    this.touchAction.preventDefault(e);
    let { curRecognizer: t } = this._session;
    (!t || t && t.state === r.Ended) && (t = this._session.curRecognizer = null);
    for (let n = 0; n < this._recognizers.length; n++) {
      const i = this._recognizers[n];
      this._session.stopped !== y.ForceStop && (!t || i === t || i.canRecognizeWith(t)) ? i.recognize(e) : i.reset(), !t && i.state & (r.Began | r.Changed | r.Ended) && (t = this._session.curRecognizer = i);
    }
  }
  /**
   * Emit event. Called by the recognizer when it recognizes the input.
   * @param type Touch event type
   * @param input input data
   */
  emit(e, t) {
    const n = this.handlers[e];
    t.type = e, t.preventDefault = () => {
      var i;
      (i = t.srcEvent) == null || i.preventDefault();
    }, n && n(t);
  }
  clearSession() {
    this._session = {};
  }
  _toggleCssProps(e) {
    !this._options.cssProps || !this._element.style || (M(this._options.cssProps, (t, n) => {
      e === "add" ? (this._oldCssProps[n] = this._element.style[n], this._element.style[n] = t) : this._element.style[n] = this._oldCssProps[n] || "";
    }), e !== "add" && (this._oldCssProps = {}));
  }
}
const Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Input: Fe,
  Manager: Ee,
  Recognizer: Ae,
  TouchAction: Le
}, Symbol.toStringTag, { value: "Module" })), We = {
  Constants: ee,
  Types: te,
  Utils: pe,
  Core: Xe
};
export {
  We as default
};
