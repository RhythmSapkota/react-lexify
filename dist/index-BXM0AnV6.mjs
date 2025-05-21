import { aP as Se, aS as Ve, aT as te, aR as Li, aU as zc, aq as Wc, ar as Yc, ai as Hc } from "./index-ErFAu9zp.mjs";
var or = Array.isArray;
function ha(t) {
  return t;
}
var jc = "[object AsyncFunction]", Uc = "[object Function]", Xc = "[object GeneratorFunction]", Gc = "[object Proxy]";
function qn(t) {
  if (!Se(t))
    return !1;
  var e = Ve(t);
  return e == Uc || e == Xc || e == jc || e == Gc;
}
var tn = te["__core-js_shared__"], jo = function() {
  var t = /[^.]+$/.exec(tn && tn.keys && tn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Vc(t) {
  return !!jo && jo in t;
}
var Kc = Function.prototype, Zc = Kc.toString;
function ke(t) {
  if (t != null) {
    try {
      return Zc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Jc = /[\\^$.*+?()[\]{}|]/g, Qc = /^\[object .+?Constructor\]$/, th = Function.prototype, eh = Object.prototype, ih = th.toString, rh = eh.hasOwnProperty, nh = RegExp(
  "^" + ih.call(rh).replace(Jc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oh(t) {
  if (!Se(t) || Vc(t))
    return !1;
  var e = qn(t) ? nh : Qc;
  return e.test(ke(t));
}
function sh(t, e) {
  return t == null ? void 0 : t[e];
}
function we(t, e) {
  var i = sh(t, e);
  return oh(i) ? i : void 0;
}
var yn = we(te, "WeakMap"), Uo = Object.create, ah = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!Se(e))
      return {};
    if (Uo)
      return Uo(e);
    t.prototype = e;
    var i = new t();
    return t.prototype = void 0, i;
  };
}();
function lh(t, e, i) {
  switch (i.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, i[0]);
    case 2:
      return t.call(e, i[0], i[1]);
    case 3:
      return t.call(e, i[0], i[1], i[2]);
  }
  return t.apply(e, i);
}
function ch(t, e) {
  var i = -1, r = t.length;
  for (e || (e = Array(r)); ++i < r; )
    e[i] = t[i];
  return e;
}
var hh = 800, uh = 16, dh = Date.now;
function fh(t) {
  var e = 0, i = 0;
  return function() {
    var r = dh(), n = uh - (r - i);
    if (i = r, n > 0) {
      if (++e >= hh)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function ph(t) {
  return function() {
    return t;
  };
}
var sr = function() {
  try {
    var t = we(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), gh = sr ? function(t, e) {
  return sr(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ph(e),
    writable: !0
  });
} : ha, mh = fh(gh), yh = 9007199254740991, _h = /^(?:0|[1-9]\d*)$/;
function ua(t, e) {
  var i = typeof t;
  return e = e ?? yh, !!e && (i == "number" || i != "symbol" && _h.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function zn(t, e, i) {
  e == "__proto__" && sr ? sr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: i,
    writable: !0
  }) : t[e] = i;
}
function Ar(t, e) {
  return t === e || t !== t && e !== e;
}
var Ch = Object.prototype, xh = Ch.hasOwnProperty;
function bh(t, e, i) {
  var r = t[e];
  (!(xh.call(t, e) && Ar(r, i)) || i === void 0 && !(e in t)) && zn(t, e, i);
}
function Th(t, e, i, r) {
  var n = !i;
  i || (i = {});
  for (var s = -1, o = e.length; ++s < o; ) {
    var a = e[s], l = void 0;
    l === void 0 && (l = t[a]), n ? zn(i, a, l) : bh(i, a, l);
  }
  return i;
}
var Xo = Math.max;
function vh(t, e, i) {
  return e = Xo(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, s = Xo(r.length - e, 0), o = Array(s); ++n < s; )
      o[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(o), lh(t, this, a);
  };
}
function Sh(t, e) {
  return mh(vh(t, e, ha), t + "");
}
var kh = 9007199254740991;
function da(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= kh;
}
function Br(t) {
  return t != null && da(t.length) && !qn(t);
}
function wh(t, e, i) {
  if (!Se(i))
    return !1;
  var r = typeof e;
  return (r == "number" ? Br(i) && ua(e, i.length) : r == "string" && e in i) ? Ar(i[e], t) : !1;
}
function Ah(t) {
  return Sh(function(e, i) {
    var r = -1, n = i.length, s = n > 1 ? i[n - 1] : void 0, o = n > 2 ? i[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (n--, s) : void 0, o && wh(i[0], i[1], o) && (s = n < 3 ? void 0 : s, n = 1), e = Object(e); ++r < n; ) {
      var a = i[r];
      a && t(e, a, r, s);
    }
    return e;
  });
}
var Bh = Object.prototype;
function Er(t) {
  var e = t && t.constructor, i = typeof e == "function" && e.prototype || Bh;
  return t === i;
}
function Eh(t, e) {
  for (var i = -1, r = Array(t); ++i < t; )
    r[i] = e(i);
  return r;
}
var Lh = "[object Arguments]";
function Go(t) {
  return Li(t) && Ve(t) == Lh;
}
var fa = Object.prototype, Fh = fa.hasOwnProperty, Oh = fa.propertyIsEnumerable, ar = Go(/* @__PURE__ */ function() {
  return arguments;
}()) ? Go : function(t) {
  return Li(t) && Fh.call(t, "callee") && !Oh.call(t, "callee");
};
function Ih() {
  return !1;
}
var pa = typeof exports == "object" && exports && !exports.nodeType && exports, Vo = pa && typeof module == "object" && module && !module.nodeType && module, Mh = Vo && Vo.exports === pa, Ko = Mh ? te.Buffer : void 0, $h = Ko ? Ko.isBuffer : void 0, Wn = $h || Ih, Dh = "[object Arguments]", Nh = "[object Array]", Rh = "[object Boolean]", Ph = "[object Date]", qh = "[object Error]", zh = "[object Function]", Wh = "[object Map]", Yh = "[object Number]", Hh = "[object Object]", jh = "[object RegExp]", Uh = "[object Set]", Xh = "[object String]", Gh = "[object WeakMap]", Vh = "[object ArrayBuffer]", Kh = "[object DataView]", Zh = "[object Float32Array]", Jh = "[object Float64Array]", Qh = "[object Int8Array]", tu = "[object Int16Array]", eu = "[object Int32Array]", iu = "[object Uint8Array]", ru = "[object Uint8ClampedArray]", nu = "[object Uint16Array]", ou = "[object Uint32Array]", V = {};
V[Zh] = V[Jh] = V[Qh] = V[tu] = V[eu] = V[iu] = V[ru] = V[nu] = V[ou] = !0;
V[Dh] = V[Nh] = V[Vh] = V[Rh] = V[Kh] = V[Ph] = V[qh] = V[zh] = V[Wh] = V[Yh] = V[Hh] = V[jh] = V[Uh] = V[Xh] = V[Gh] = !1;
function su(t) {
  return Li(t) && da(t.length) && !!V[Ve(t)];
}
function au(t) {
  return function(e) {
    return t(e);
  };
}
var ga = typeof exports == "object" && exports && !exports.nodeType && exports, fi = ga && typeof module == "object" && module && !module.nodeType && module, lu = fi && fi.exports === ga, en = lu && zc.process, Zo = function() {
  try {
    var t = fi && fi.require && fi.require("util").types;
    return t || en && en.binding && en.binding("util");
  } catch {
  }
}(), Jo = Zo && Zo.isTypedArray, Yn = Jo ? au(Jo) : su, cu = Object.prototype, hu = cu.hasOwnProperty;
function uu(t, e) {
  var i = or(t), r = !i && ar(t), n = !i && !r && Wn(t), s = !i && !r && !n && Yn(t), o = i || r || n || s, a = o ? Eh(t.length, String) : [], l = a.length;
  for (var c in t)
    (e || hu.call(t, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ua(c, l))) && a.push(c);
  return a;
}
function ma(t, e) {
  return function(i) {
    return t(e(i));
  };
}
var du = ma(Object.keys, Object), fu = Object.prototype, pu = fu.hasOwnProperty;
function gu(t) {
  if (!Er(t))
    return du(t);
  var e = [];
  for (var i in Object(t))
    pu.call(t, i) && i != "constructor" && e.push(i);
  return e;
}
function mu(t) {
  var e = [];
  if (t != null)
    for (var i in Object(t))
      e.push(i);
  return e;
}
var yu = Object.prototype, _u = yu.hasOwnProperty;
function Cu(t) {
  if (!Se(t))
    return mu(t);
  var e = Er(t), i = [];
  for (var r in t)
    r == "constructor" && (e || !_u.call(t, r)) || i.push(r);
  return i;
}
function ya(t) {
  return Br(t) ? uu(t, !0) : Cu(t);
}
var xi = we(Object, "create");
function xu() {
  this.__data__ = xi ? xi(null) : {}, this.size = 0;
}
function bu(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Tu = "__lodash_hash_undefined__", vu = Object.prototype, Su = vu.hasOwnProperty;
function ku(t) {
  var e = this.__data__;
  if (xi) {
    var i = e[t];
    return i === Tu ? void 0 : i;
  }
  return Su.call(e, t) ? e[t] : void 0;
}
var wu = Object.prototype, Au = wu.hasOwnProperty;
function Bu(t) {
  var e = this.__data__;
  return xi ? e[t] !== void 0 : Au.call(e, t);
}
var Eu = "__lodash_hash_undefined__";
function Lu(t, e) {
  var i = this.__data__;
  return this.size += this.has(t) ? 0 : 1, i[t] = xi && e === void 0 ? Eu : e, this;
}
function be(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
be.prototype.clear = xu;
be.prototype.delete = bu;
be.prototype.get = ku;
be.prototype.has = Bu;
be.prototype.set = Lu;
function Fu() {
  this.__data__ = [], this.size = 0;
}
function Lr(t, e) {
  for (var i = t.length; i--; )
    if (Ar(t[i][0], e))
      return i;
  return -1;
}
var Ou = Array.prototype, Iu = Ou.splice;
function Mu(t) {
  var e = this.__data__, i = Lr(e, t);
  if (i < 0)
    return !1;
  var r = e.length - 1;
  return i == r ? e.pop() : Iu.call(e, i, 1), --this.size, !0;
}
function $u(t) {
  var e = this.__data__, i = Lr(e, t);
  return i < 0 ? void 0 : e[i][1];
}
function Du(t) {
  return Lr(this.__data__, t) > -1;
}
function Nu(t, e) {
  var i = this.__data__, r = Lr(i, t);
  return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this;
}
function ee(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ee.prototype.clear = Fu;
ee.prototype.delete = Mu;
ee.prototype.get = $u;
ee.prototype.has = Du;
ee.prototype.set = Nu;
var bi = we(te, "Map");
function Ru() {
  this.size = 0, this.__data__ = {
    hash: new be(),
    map: new (bi || ee)(),
    string: new be()
  };
}
function Pu(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Fr(t, e) {
  var i = t.__data__;
  return Pu(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function qu(t) {
  var e = Fr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function zu(t) {
  return Fr(this, t).get(t);
}
function Wu(t) {
  return Fr(this, t).has(t);
}
function Yu(t, e) {
  var i = Fr(this, t), r = i.size;
  return i.set(t, e), this.size += i.size == r ? 0 : 1, this;
}
function de(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
de.prototype.clear = Ru;
de.prototype.delete = qu;
de.prototype.get = zu;
de.prototype.has = Wu;
de.prototype.set = Yu;
var Hu = "Expected a function";
function Fi(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Hu);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], s = i.cache;
    if (s.has(n))
      return s.get(n);
    var o = t.apply(this, r);
    return i.cache = s.set(n, o) || s, o;
  };
  return i.cache = new (Fi.Cache || de)(), i;
}
Fi.Cache = de;
var _a = ma(Object.getPrototypeOf, Object), ju = "[object Object]", Uu = Function.prototype, Xu = Object.prototype, Ca = Uu.toString, Gu = Xu.hasOwnProperty, Vu = Ca.call(Object);
function Ku(t) {
  if (!Li(t) || Ve(t) != ju)
    return !1;
  var e = _a(t);
  if (e === null)
    return !0;
  var i = Gu.call(e, "constructor") && e.constructor;
  return typeof i == "function" && i instanceof i && Ca.call(i) == Vu;
}
function Zu() {
  this.__data__ = new ee(), this.size = 0;
}
function Ju(t) {
  var e = this.__data__, i = e.delete(t);
  return this.size = e.size, i;
}
function Qu(t) {
  return this.__data__.get(t);
}
function td(t) {
  return this.__data__.has(t);
}
var ed = 200;
function id(t, e) {
  var i = this.__data__;
  if (i instanceof ee) {
    var r = i.__data__;
    if (!bi || r.length < ed - 1)
      return r.push([t, e]), this.size = ++i.size, this;
    i = this.__data__ = new de(r);
  }
  return i.set(t, e), this.size = i.size, this;
}
function Ke(t) {
  var e = this.__data__ = new ee(t);
  this.size = e.size;
}
Ke.prototype.clear = Zu;
Ke.prototype.delete = Ju;
Ke.prototype.get = Qu;
Ke.prototype.has = td;
Ke.prototype.set = id;
var xa = typeof exports == "object" && exports && !exports.nodeType && exports, Qo = xa && typeof module == "object" && module && !module.nodeType && module, rd = Qo && Qo.exports === xa, ts = rd ? te.Buffer : void 0, es = ts ? ts.allocUnsafe : void 0;
function nd(t, e) {
  if (e)
    return t.slice();
  var i = t.length, r = es ? es(i) : new t.constructor(i);
  return t.copy(r), r;
}
var _n = we(te, "DataView"), Cn = we(te, "Promise"), xn = we(te, "Set"), is = "[object Map]", od = "[object Object]", rs = "[object Promise]", ns = "[object Set]", os = "[object WeakMap]", ss = "[object DataView]", sd = ke(_n), ad = ke(bi), ld = ke(Cn), cd = ke(xn), hd = ke(yn), pe = Ve;
(_n && pe(new _n(new ArrayBuffer(1))) != ss || bi && pe(new bi()) != is || Cn && pe(Cn.resolve()) != rs || xn && pe(new xn()) != ns || yn && pe(new yn()) != os) && (pe = function(t) {
  var e = Ve(t), i = e == od ? t.constructor : void 0, r = i ? ke(i) : "";
  if (r)
    switch (r) {
      case sd:
        return ss;
      case ad:
        return is;
      case ld:
        return rs;
      case cd:
        return ns;
      case hd:
        return os;
    }
  return e;
});
var as = te.Uint8Array;
function ud(t) {
  var e = new t.constructor(t.byteLength);
  return new as(e).set(new as(t)), e;
}
function dd(t, e) {
  var i = e ? ud(t.buffer) : t.buffer;
  return new t.constructor(i, t.byteOffset, t.length);
}
function fd(t) {
  return typeof t.constructor == "function" && !Er(t) ? ah(_a(t)) : {};
}
function pd(t) {
  return function(e, i, r) {
    for (var n = -1, s = Object(e), o = r(e), a = o.length; a--; ) {
      var l = o[++n];
      if (i(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var gd = pd();
function bn(t, e, i) {
  (i !== void 0 && !Ar(t[e], i) || i === void 0 && !(e in t)) && zn(t, e, i);
}
function md(t) {
  return Li(t) && Br(t);
}
function Tn(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function yd(t) {
  return Th(t, ya(t));
}
function _d(t, e, i, r, n, s, o) {
  var a = Tn(t, i), l = Tn(e, i), c = o.get(l);
  if (c) {
    bn(t, i, c);
    return;
  }
  var h = s ? s(a, l, i + "", t, e, o) : void 0, d = h === void 0;
  if (d) {
    var u = or(l), f = !u && Wn(l), m = !u && !f && Yn(l);
    h = l, u || f || m ? or(a) ? h = a : md(a) ? h = ch(a) : f ? (d = !1, h = nd(l, !0)) : m ? (d = !1, h = dd(l, !0)) : h = [] : Ku(l) || ar(l) ? (h = a, ar(a) ? h = yd(a) : (!Se(a) || qn(a)) && (h = fd(l))) : d = !1;
  }
  d && (o.set(l, h), n(h, l, r, s, o), o.delete(l)), bn(t, i, h);
}
function ba(t, e, i, r, n) {
  t !== e && gd(e, function(s, o) {
    if (n || (n = new Ke()), Se(s))
      _d(t, e, o, i, ba, r, n);
    else {
      var a = r ? r(Tn(t, o), s, o + "", t, e, n) : void 0;
      a === void 0 && (a = s), bn(t, o, a);
    }
  }, ya);
}
var Cd = "[object Map]", xd = "[object Set]", bd = Object.prototype, Td = bd.hasOwnProperty;
function rn(t) {
  if (t == null)
    return !0;
  if (Br(t) && (or(t) || typeof t == "string" || typeof t.splice == "function" || Wn(t) || Yn(t) || ar(t)))
    return !t.length;
  var e = pe(t);
  if (e == Cd || e == xd)
    return !t.size;
  if (Er(t))
    return !gu(t).length;
  for (var i in t)
    if (Td.call(t, i))
      return !1;
  return !0;
}
var vd = Ah(function(t, e, i) {
  ba(t, e, i);
});
const Or = 20, Sd = {
  rect: "rectangle",
  circle: "ellipse"
}, ls = {
  startOnLoad: !1,
  flowchart: { curve: "linear" },
  themeVariables: {
    // Multiplying by 1.25 to increase the font size by 25% and render correctly in Excalidraw
    fontSize: `${Or * 1.25}px`
  },
  maxEdges: 500,
  maxTextSize: 5e4
};
class Ir {
  constructor({ converter: e }) {
    this.convert = (i, r) => this.converter(i, {
      ...r,
      fontSize: r.fontSize || Or
    }), this.converter = e;
  }
}
var me;
(function(t) {
  t.ROUND = "round", t.STADIUM = "stadium", t.DOUBLECIRCLE = "doublecircle", t.CIRCLE = "circle", t.DIAMOND = "diamond";
})(me || (me = {}));
var vn;
(function(t) {
  t.COLOR = "color";
})(vn || (vn = {}));
var Ie;
(function(t) {
  t.FILL = "fill", t.STROKE = "stroke", t.STROKE_WIDTH = "stroke-width", t.STROKE_DASHARRAY = "stroke-dasharray";
})(Ie || (Ie = {}));
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
var Ta = Hn.removeMarkdown = void 0, kd = function(t, e) {
  e === void 0 && (e = {
    listUnicodeChar: ""
  }), e = e || {}, e.listUnicodeChar = e.hasOwnProperty("listUnicodeChar") ? e.listUnicodeChar : !1, e.stripListLeaders = e.hasOwnProperty("stripListLeaders") ? e.stripListLeaders : !0, e.gfm = e.hasOwnProperty("gfm") ? e.gfm : !0, e.useImgAltText = e.hasOwnProperty("useImgAltText") ? e.useImgAltText : !0, e.preserveLinks = e.hasOwnProperty("preserveLinks") ? e.preserveLinks : !1;
  var i = t || "";
  i = i.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
  try {
    e.stripListLeaders && (e.listUnicodeChar ? i = i.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, e.listUnicodeChar + " $1") : i = i.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")), e.gfm && (i = i.replace(/\n={2,}/g, `
`).replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "")), e.preserveLinks && (i = i.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")), i = i.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, e.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, `

`).replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, `

`);
  } catch (r) {
    return console.error(r), t;
  }
  return i;
};
Ta = Hn.removeMarkdown = kd;
const wd = {
  arrow_circle: {
    endArrowhead: "dot"
  },
  arrow_cross: {
    endArrowhead: "bar"
  },
  arrow_open: {
    endArrowhead: null,
    startArrowhead: null
  },
  double_arrow_circle: {
    endArrowhead: "dot",
    startArrowhead: "dot"
  },
  double_arrow_cross: {
    endArrowhead: "bar",
    startArrowhead: "bar"
  },
  double_arrow_point: {
    endArrowhead: "arrow",
    startArrowhead: "arrow"
  }
}, Ad = (t) => wd[t], zi = (t) => {
  let e = t.text;
  return t.labelType === "markdown" && (e = Ta(t.text)), Bd(e);
}, Bd = (t) => {
  const e = /\s?(fa|fab):[a-zA-Z0-9-]+/g;
  return t.replace(e, "");
}, Ed = (t) => {
  const e = {};
  return Object.keys(t).forEach((i) => {
    var r;
    switch (i) {
      case Ie.FILL: {
        e.backgroundColor = t[i], e.fillStyle = "solid";
        break;
      }
      case Ie.STROKE: {
        e.strokeColor = t[i];
        break;
      }
      case Ie.STROKE_WIDTH: {
        e.strokeWidth = Number((r = t[i]) == null ? void 0 : r.split("px")[0]);
        break;
      }
      case Ie.STROKE_DASHARRAY: {
        e.strokeStyle = "dashed";
        break;
      }
    }
  }), e;
}, Ld = (t) => {
  const e = {};
  return Object.keys(t).forEach((i) => {
    switch (i) {
      case vn.COLOR: {
        e.strokeColor = t[i];
        break;
      }
    }
  }), e;
}, Fd = (t) => {
  const e = {};
  t.subGraphs.map((r) => {
    r.nodeIds.forEach((n) => {
      e[r.id] = {
        id: r.id,
        parent: null,
        isLeaf: !1
      }, e[n] = {
        id: n,
        parent: r.id,
        isLeaf: t.vertices[n] !== void 0
      };
    });
  });
  const i = {};
  return [...Object.keys(t.vertices), ...t.subGraphs.map((r) => r.id)].forEach((r) => {
    if (!e[r])
      return;
    let n = e[r];
    const s = [];
    for (n.isLeaf || s.push(`subgraph_group_${n.id}`); n.parent; )
      s.push(`subgraph_group_${n.parent}`), n = e[n.parent];
    i[r] = s;
  }), {
    getGroupIds: (r) => i[r] || [],
    getParentId: (r) => e[r] ? e[r].parent : null
  };
}, Od = new Ir({
  converter: (t, e) => {
    const i = [], r = e.fontSize, { getGroupIds: n, getParentId: s } = Fd(t);
    return t.subGraphs.reverse().forEach((o) => {
      const a = n(o.id), l = {
        id: o.id,
        type: "rectangle",
        groupIds: a,
        x: o.x,
        y: o.y,
        width: o.width,
        height: o.height,
        label: {
          groupIds: a,
          text: zi(o),
          fontSize: r,
          verticalAlign: "top"
        }
      };
      i.push(l);
    }), Object.values(t.vertices).forEach((o) => {
      if (!o)
        return;
      const a = n(o.id), l = Ed(o.containerStyle), c = Ld(o.labelStyle);
      let h = {
        id: o.id,
        type: "rectangle",
        groupIds: a,
        x: o.x,
        y: o.y,
        width: o.width,
        height: o.height,
        strokeWidth: 2,
        label: {
          groupIds: a,
          text: zi(o),
          fontSize: r,
          ...c
        },
        link: o.link || null,
        ...l
      };
      switch (o.type) {
        case me.STADIUM: {
          h = { ...h, roundness: { type: 3 } };
          break;
        }
        case me.ROUND: {
          h = { ...h, roundness: { type: 3 } };
          break;
        }
        case me.DOUBLECIRCLE: {
          a.push(`doublecircle_${o.id}}`);
          const u = {
            type: "ellipse",
            groupIds: a,
            x: o.x + 5,
            y: o.y + 5,
            width: o.width - 5 * 2,
            height: o.height - 5 * 2,
            strokeWidth: 2,
            roundness: { type: 3 },
            label: {
              groupIds: a,
              text: zi(o),
              fontSize: r
            }
          };
          h = { ...h, groupIds: a, type: "ellipse" }, i.push(u);
          break;
        }
        case me.CIRCLE: {
          h.type = "ellipse";
          break;
        }
        case me.DIAMOND: {
          h.type = "diamond";
          break;
        }
      }
      i.push(h);
    }), t.edges.forEach((o) => {
      let a = [];
      const l = s(o.start), c = s(o.end);
      l && l === c && (a = n(l));
      const { startX: h, startY: d, reflectionPoints: u } = o, f = u.map((R) => [
        R.x - u[0].x,
        R.y - u[0].y
      ]), m = Ad(o.type), _ = {
        id: `${o.start}_${o.end}`,
        type: "arrow",
        groupIds: a,
        x: h,
        y: d,
        // 4 and 2 are the Excalidraw's stroke width of thick and thin respectively
        // TODO: use constant exported from Excalidraw package
        strokeWidth: o.stroke === "thick" ? 4 : 2,
        strokeStyle: o.stroke === "dotted" ? "dashed" : void 0,
        points: f,
        ...o.text ? { label: { text: zi(o), fontSize: r, groupIds: a } } : {},
        roundness: {
          type: 2
        },
        ...m
      }, E = i.find((R) => R.id === o.start), x = i.find((R) => R.id === o.end);
      !E || !x || (_.start = {
        id: E.id || ""
      }, _.end = {
        id: x.id || ""
      }, i.push(_));
    }), {
      elements: i
    };
  }
});
let Zt = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, i) => (i &= 63, i < 36 ? e += i.toString(36) : i < 62 ? e += (i - 26).toString(36).toUpperCase() : i > 62 ? e += "-" : e += "_", e), "");
const Id = new Ir({
  converter: (t) => {
    const e = Zt(), { width: i, height: r } = t, n = {
      type: "image",
      x: 0,
      y: 0,
      width: i,
      height: r,
      status: "saved",
      fileId: e
    };
    return { files: {
      [e]: {
        id: e,
        mimeType: t.mimeType,
        dataURL: t.dataURL
      }
    }, elements: [n] };
  }
}), jn = (t) => t.replace(/\\n/g, `
`), pi = (t) => {
  const e = {
    type: "line",
    x: t.startX,
    y: t.startY,
    points: [
      [0, 0],
      [t.endX - t.startX, t.endY - t.startY]
    ],
    width: t.endX - t.startX,
    height: t.endY - t.startY,
    strokeStyle: t.strokeStyle || "solid",
    strokeColor: t.strokeColor || "#000",
    strokeWidth: t.strokeWidth || 1
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), t.id && Object.assign(e, { id: t.id }), e;
}, lr = (t) => {
  const e = {
    type: "text",
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height,
    text: jn(t.text) || "",
    fontSize: t.fontSize,
    verticalAlign: "middle"
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), t.id && Object.assign(e, { id: t.id }), e;
}, li = (t) => {
  var r, n, s, o;
  let e = {};
  t.type === "rectangle" && t.subtype === "activation" && (e = {
    backgroundColor: "#e9ecef",
    fillStyle: "solid"
  });
  const i = {
    id: t.id,
    type: t.type,
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height,
    label: {
      text: jn(((r = t == null ? void 0 : t.label) == null ? void 0 : r.text) || ""),
      fontSize: (n = t == null ? void 0 : t.label) == null ? void 0 : n.fontSize,
      verticalAlign: ((s = t.label) == null ? void 0 : s.verticalAlign) || "middle",
      strokeColor: ((o = t.label) == null ? void 0 : o.color) || "#000",
      groupIds: t.groupId ? [t.groupId] : []
    },
    strokeStyle: t == null ? void 0 : t.strokeStyle,
    strokeWidth: t == null ? void 0 : t.strokeWidth,
    strokeColor: t == null ? void 0 : t.strokeColor,
    backgroundColor: t == null ? void 0 : t.bgColor,
    fillStyle: "solid",
    ...e
  };
  return t.groupId && Object.assign(i, { groupIds: [t.groupId] }), i;
}, va = (t) => {
  var i;
  const e = {
    type: "arrow",
    x: t.startX,
    y: t.startY,
    points: t.points || [
      [0, 0],
      [t.endX - t.startX, t.endY - t.startY]
    ],
    width: t.endX - t.startX,
    height: t.endY - t.startY,
    strokeStyle: (t == null ? void 0 : t.strokeStyle) || "solid",
    endArrowhead: (t == null ? void 0 : t.endArrowhead) || null,
    startArrowhead: (t == null ? void 0 : t.startArrowhead) || null,
    label: {
      text: jn(((i = t == null ? void 0 : t.label) == null ? void 0 : i.text) || ""),
      fontSize: 16
    },
    roundness: {
      type: 2
    },
    start: t.start,
    end: t.end
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), e;
}, Md = new Ir({
  converter: (t) => {
    const e = [], i = [];
    if (Object.values(t.nodes).forEach((r) => {
      !r || !r.length || r.forEach((n) => {
        let s;
        switch (n.type) {
          case "line":
            s = pi(n);
            break;
          case "rectangle":
          case "ellipse":
            s = li(n);
            break;
          case "text":
            s = lr(n);
            break;
          default:
            throw `unknown type ${n.type}`;
        }
        n.type === "rectangle" && (n == null ? void 0 : n.subtype) === "activation" ? i.push(s) : e.push(s);
      });
    }), Object.values(t.lines).forEach((r) => {
      r && e.push(pi(r));
    }), Object.values(t.arrows).forEach((r) => {
      r && (e.push(va(r)), r.sequenceNumber && e.push(li(r.sequenceNumber)));
    }), e.push(...i), t.loops) {
      const { lines: r, texts: n, nodes: s } = t.loops;
      r.forEach((o) => {
        e.push(pi(o));
      }), n.forEach((o) => {
        e.push(lr(o));
      }), s.forEach((o) => {
        e.push(li(o));
      });
    }
    return t.groups && t.groups.forEach((r) => {
      const { actorKeys: n, name: s } = r;
      let o = 1 / 0, a = 1 / 0, l = 0, c = 0;
      if (!n.length)
        return;
      e.filter((S) => {
        if (S.id) {
          const U = S.id.indexOf("-"), D = S.id.substring(0, U);
          return n.includes(D);
        }
      }).forEach((S) => {
        if (S.x === void 0 || S.y === void 0 || S.width === void 0 || S.height === void 0)
          throw new Error(`Actor attributes missing ${S}`);
        o = Math.min(o, S.x), a = Math.min(a, S.y), l = Math.max(l, S.x + S.width), c = Math.max(c, S.y + S.height);
      });
      const d = 10, u = o - d, f = a - d, m = l - o + d * 2, y = c - a + d * 2, _ = Zt(), E = li({
        type: "rectangle",
        x: u,
        y: f,
        width: m,
        height: y,
        bgColor: r.fill,
        id: _
      });
      e.unshift(E);
      const x = Zt(), R = [_];
      e.forEach((S) => {
        if (S.type !== "frame") {
          if (S.x === void 0 || S.y === void 0 || S.width === void 0 || S.height === void 0)
            throw new Error(`Element attributes missing ${S}`);
          if (S.x >= o && S.x + S.width <= l && S.y >= a && S.y + S.height <= c) {
            const U = S.id || Zt();
            S.id || Object.assign(S, { id: U }), R.push(U);
          }
        }
      });
      const C = {
        type: "frame",
        id: x,
        name: s,
        children: R
      };
      e.push(C);
    }), { elements: e };
  }
}), $d = new Ir({
  converter: (t) => {
    const e = [];
    return Object.values(t.nodes).forEach((i) => {
      !i || !i.length || i.forEach((r) => {
        let n;
        switch (r.type) {
          case "line":
            n = pi(r);
            break;
          case "rectangle":
          case "ellipse":
            n = li(r);
            break;
          case "text":
            n = lr(r);
            break;
          default:
            throw `unknown type ${r.type}`;
        }
        e.push(n);
      });
    }), Object.values(t.lines).forEach((i) => {
      i && e.push(pi(i));
    }), Object.values(t.arrows).forEach((i) => {
      if (!i)
        return;
      const r = va(i);
      e.push(r);
    }), Object.values(t.text).forEach((i) => {
      const r = lr(i);
      e.push(r);
    }), Object.values(t.namespaces).forEach((i) => {
      const r = Object.keys(i.classes), n = [...r], s = [...t.lines, ...t.arrows, ...t.text];
      r.forEach((a) => {
        const l = s.filter((c) => c.metadata && c.metadata.classId === a).map((c) => c.id);
        l.length && n.push(...l);
      });
      const o = {
        type: "frame",
        id: Zt(),
        name: i.id,
        children: n
      };
      e.push(o);
    }), { elements: e };
  }
}), Dd = (t, e = {}) => {
  switch (t.type) {
    case "graphImage":
      return Id.convert(t, e);
    case "flowchart":
      return Od.convert(t, e);
    case "sequence":
      return Md.convert(t, e);
    case "class":
      return $d.convert(t, e);
    default:
      throw new Error(`graphToExcalidraw: unknown graph type "${t.type}, only flowcharts are supported!"`);
  }
};
function Nd(t) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t == "string" ? [t] : t);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? a.concat(c.map(function(h) {
      var d, u;
      return (u = (d = h.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && u !== void 0 ? u : 0;
    })) : a;
  }, []);
  if (n.length) {
    var s = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(s, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var o = r[0];
  return e.forEach(function(a, l) {
    var c = o.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", d = a;
    typeof a == "string" && a.includes(`
`) && (d = String(a).split(`
`).map(function(u, f) {
      return f === 0 ? u : "" + h + u;
    }).join(`
`)), o += d + r[l + 1];
  }), o;
}
var Sa = { exports: {} };
(function(t, e) {
  (function(i, r) {
    t.exports = r();
  })(Yc, function() {
    var i = 1e3, r = 6e4, n = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", c = "day", h = "week", d = "month", u = "quarter", f = "year", m = "date", y = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var w = ["th", "st", "nd", "rd"], T = P % 100;
      return "[" + P + (w[(T - 20) % 10] || w[T] || w[0]) + "]";
    } }, R = function(P, w, T) {
      var L = String(P);
      return !L || L.length >= w ? P : "" + Array(w + 1 - L.length).join(T) + P;
    }, C = { s: R, z: function(P) {
      var w = -P.utcOffset(), T = Math.abs(w), L = Math.floor(T / 60), k = T % 60;
      return (w <= 0 ? "+" : "-") + R(L, 2, "0") + ":" + R(k, 2, "0");
    }, m: function P(w, T) {
      if (w.date() < T.date()) return -P(T, w);
      var L = 12 * (T.year() - w.year()) + (T.month() - w.month()), k = w.clone().add(L, d), M = T - k < 0, W = w.clone().add(L + (M ? -1 : 1), d);
      return +(-(L + (T - k) / (M ? k - W : W - k)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: d, y: f, w: h, d: c, D: m, h: l, m: a, s: o, ms: s, Q: u }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, S = "en", U = {};
    U[S] = x;
    var D = "$isDayjsObject", Q = function(P) {
      return P instanceof tt || !(!P || !P[D]);
    }, rt = function P(w, T, L) {
      var k;
      if (!w) return S;
      if (typeof w == "string") {
        var M = w.toLowerCase();
        U[M] && (k = M), T && (U[M] = T, k = M);
        var W = w.split("-");
        if (!k && W.length > 1) return P(W[0]);
      } else {
        var z = w.name;
        U[z] = w, k = z;
      }
      return !L && k && (S = k), k || !L && S;
    }, Y = function(P, w) {
      if (Q(P)) return P.clone();
      var T = typeof w == "object" ? w : {};
      return T.date = P, T.args = arguments, new tt(T);
    }, B = C;
    B.l = rt, B.i = Q, B.w = function(P, w) {
      return Y(P, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
    };
    var tt = function() {
      function P(T) {
        this.$L = rt(T.locale, null, !0), this.parse(T), this.$x = this.$x || T.x || {}, this[D] = !0;
      }
      var w = P.prototype;
      return w.parse = function(T) {
        this.$d = function(L) {
          var k = L.date, M = L.utc;
          if (k === null) return /* @__PURE__ */ new Date(NaN);
          if (B.u(k)) return /* @__PURE__ */ new Date();
          if (k instanceof Date) return new Date(k);
          if (typeof k == "string" && !/Z$/i.test(k)) {
            var W = k.match(_);
            if (W) {
              var z = W[2] - 1 || 0, K = (W[7] || "0").substring(0, 3);
              return M ? new Date(Date.UTC(W[1], z, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, K)) : new Date(W[1], z, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, K);
            }
          }
          return new Date(k);
        }(T), this.init();
      }, w.init = function() {
        var T = this.$d;
        this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
      }, w.$utils = function() {
        return B;
      }, w.isValid = function() {
        return this.$d.toString() !== y;
      }, w.isSame = function(T, L) {
        var k = Y(T);
        return this.startOf(L) <= k && k <= this.endOf(L);
      }, w.isAfter = function(T, L) {
        return Y(T) < this.startOf(L);
      }, w.isBefore = function(T, L) {
        return this.endOf(L) < Y(T);
      }, w.$g = function(T, L, k) {
        return B.u(T) ? this[L] : this.set(k, T);
      }, w.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, w.valueOf = function() {
        return this.$d.getTime();
      }, w.startOf = function(T, L) {
        var k = this, M = !!B.u(L) || L, W = B.p(T), z = function(Et, nt) {
          var Lt = B.w(k.$u ? Date.UTC(k.$y, nt, Et) : new Date(k.$y, nt, Et), k);
          return M ? Lt : Lt.endOf(c);
        }, K = function(Et, nt) {
          return B.w(k.toDate()[Et].apply(k.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(nt)), k);
        }, H = this.$W, et = this.$M, X = this.$D, Tt = "set" + (this.$u ? "UTC" : "");
        switch (W) {
          case f:
            return M ? z(1, 0) : z(31, 11);
          case d:
            return M ? z(1, et) : z(0, et + 1);
          case h:
            var Bt = this.$locale().weekStart || 0, re = (H < Bt ? H + 7 : H) - Bt;
            return z(M ? X - re : X + (6 - re), et);
          case c:
          case m:
            return K(Tt + "Hours", 0);
          case l:
            return K(Tt + "Minutes", 1);
          case a:
            return K(Tt + "Seconds", 2);
          case o:
            return K(Tt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, w.endOf = function(T) {
        return this.startOf(T, !1);
      }, w.$set = function(T, L) {
        var k, M = B.p(T), W = "set" + (this.$u ? "UTC" : ""), z = (k = {}, k[c] = W + "Date", k[m] = W + "Date", k[d] = W + "Month", k[f] = W + "FullYear", k[l] = W + "Hours", k[a] = W + "Minutes", k[o] = W + "Seconds", k[s] = W + "Milliseconds", k)[M], K = M === c ? this.$D + (L - this.$W) : L;
        if (M === d || M === f) {
          var H = this.clone().set(m, 1);
          H.$d[z](K), H.init(), this.$d = H.set(m, Math.min(this.$D, H.daysInMonth())).$d;
        } else z && this.$d[z](K);
        return this.init(), this;
      }, w.set = function(T, L) {
        return this.clone().$set(T, L);
      }, w.get = function(T) {
        return this[B.p(T)]();
      }, w.add = function(T, L) {
        var k, M = this;
        T = Number(T);
        var W = B.p(L), z = function(et) {
          var X = Y(M);
          return B.w(X.date(X.date() + Math.round(et * T)), M);
        };
        if (W === d) return this.set(d, this.$M + T);
        if (W === f) return this.set(f, this.$y + T);
        if (W === c) return z(1);
        if (W === h) return z(7);
        var K = (k = {}, k[a] = r, k[l] = n, k[o] = i, k)[W] || 1, H = this.$d.getTime() + T * K;
        return B.w(H, this);
      }, w.subtract = function(T, L) {
        return this.add(-1 * T, L);
      }, w.format = function(T) {
        var L = this, k = this.$locale();
        if (!this.isValid()) return k.invalidDate || y;
        var M = T || "YYYY-MM-DDTHH:mm:ssZ", W = B.z(this), z = this.$H, K = this.$m, H = this.$M, et = k.weekdays, X = k.months, Tt = k.meridiem, Bt = function(nt, Lt, vt, ne) {
          return nt && (nt[Lt] || nt(L, M)) || vt[Lt].slice(0, ne);
        }, re = function(nt) {
          return B.s(z % 12 || 12, nt, "0");
        }, Et = Tt || function(nt, Lt, vt) {
          var ne = nt < 12 ? "AM" : "PM";
          return vt ? ne.toLowerCase() : ne;
        };
        return M.replace(E, function(nt, Lt) {
          return Lt || function(vt) {
            switch (vt) {
              case "YY":
                return String(L.$y).slice(-2);
              case "YYYY":
                return B.s(L.$y, 4, "0");
              case "M":
                return H + 1;
              case "MM":
                return B.s(H + 1, 2, "0");
              case "MMM":
                return Bt(k.monthsShort, H, X, 3);
              case "MMMM":
                return Bt(X, H);
              case "D":
                return L.$D;
              case "DD":
                return B.s(L.$D, 2, "0");
              case "d":
                return String(L.$W);
              case "dd":
                return Bt(k.weekdaysMin, L.$W, et, 2);
              case "ddd":
                return Bt(k.weekdaysShort, L.$W, et, 3);
              case "dddd":
                return et[L.$W];
              case "H":
                return String(z);
              case "HH":
                return B.s(z, 2, "0");
              case "h":
                return re(1);
              case "hh":
                return re(2);
              case "a":
                return Et(z, K, !0);
              case "A":
                return Et(z, K, !1);
              case "m":
                return String(K);
              case "mm":
                return B.s(K, 2, "0");
              case "s":
                return String(L.$s);
              case "ss":
                return B.s(L.$s, 2, "0");
              case "SSS":
                return B.s(L.$ms, 3, "0");
              case "Z":
                return W;
            }
            return null;
          }(nt) || W.replace(":", "");
        });
      }, w.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, w.diff = function(T, L, k) {
        var M, W = this, z = B.p(L), K = Y(T), H = (K.utcOffset() - this.utcOffset()) * r, et = this - K, X = function() {
          return B.m(W, K);
        };
        switch (z) {
          case f:
            M = X() / 12;
            break;
          case d:
            M = X();
            break;
          case u:
            M = X() / 3;
            break;
          case h:
            M = (et - H) / 6048e5;
            break;
          case c:
            M = (et - H) / 864e5;
            break;
          case l:
            M = et / n;
            break;
          case a:
            M = et / r;
            break;
          case o:
            M = et / i;
            break;
          default:
            M = et;
        }
        return k ? M : B.a(M);
      }, w.daysInMonth = function() {
        return this.endOf(d).$D;
      }, w.$locale = function() {
        return U[this.$L];
      }, w.locale = function(T, L) {
        if (!T) return this.$L;
        var k = this.clone(), M = rt(T, L, !0);
        return M && (k.$L = M), k;
      }, w.clone = function() {
        return B.w(this.$d, this);
      }, w.toDate = function() {
        return new Date(this.valueOf());
      }, w.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, w.toISOString = function() {
        return this.$d.toISOString();
      }, w.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), ie = tt.prototype;
    return Y.prototype = ie, [["$ms", s], ["$s", o], ["$m", a], ["$H", l], ["$W", c], ["$M", d], ["$y", f], ["$D", m]].forEach(function(P) {
      ie[P[1]] = function(w) {
        return this.$g(w, P[0], P[1]);
      };
    }), Y.extend = function(P, w) {
      return P.$i || (P(w, tt, Y), P.$i = !0), Y;
    }, Y.locale = rt, Y.isDayjs = Q, Y.unix = function(P) {
      return Y(1e3 * P);
    }, Y.en = U[S], Y.Ls = U, Y.p = {}, Y;
  });
})(Sa);
var Rd = Sa.exports;
const Pd = /* @__PURE__ */ Wc(Rd);
var qd = { value: () => {
} };
function ka() {
  for (var t = 0, e = arguments.length, i = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in i || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new Ki(i);
}
function Ki(t) {
  this._ = t;
}
function zd(t, e) {
  return t.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i)) throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
Ki.prototype = ka.prototype = {
  constructor: Ki,
  on: function(t, e) {
    var i = this._, r = zd(t + "", i), n, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((n = (t = r[s]).type) && (n = Wd(i[n], t.name))) return n;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < o; )
      if (n = (t = r[s]).type) i[n] = cs(i[n], t.name, e);
      else if (e == null) for (n in i) i[n] = cs(i[n], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var i in e) t[i] = e[i].slice();
    return new Ki(t);
  },
  call: function(t, e) {
    if ((n = arguments.length - 2) > 0) for (var i = new Array(n), r = 0, n, s; r < n; ++r) i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, n = s.length; r < n; ++r) s[r].value.apply(e, i);
  },
  apply: function(t, e, i) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], n = 0, s = r.length; n < s; ++n) r[n].value.apply(e, i);
  }
};
function Wd(t, e) {
  for (var i = 0, r = t.length, n; i < r; ++i)
    if ((n = t[i]).name === e)
      return n.value;
}
function cs(t, e, i) {
  for (var r = 0, n = t.length; r < n; ++r)
    if (t[r].name === e) {
      t[r] = qd, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return i != null && t.push({ name: e, value: i }), t;
}
var Sn = "http://www.w3.org/1999/xhtml";
const hs = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Sn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mr(t) {
  var e = t += "", i = e.indexOf(":");
  return i >= 0 && (e = t.slice(0, i)) !== "xmlns" && (t = t.slice(i + 1)), hs.hasOwnProperty(e) ? { space: hs[e], local: t } : t;
}
function Yd(t) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === Sn && e.documentElement.namespaceURI === Sn ? e.createElement(t) : e.createElementNS(i, t);
  };
}
function Hd(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function wa(t) {
  var e = Mr(t);
  return (e.local ? Hd : Yd)(e);
}
function jd() {
}
function Un(t) {
  return t == null ? jd : function() {
    return this.querySelector(t);
  };
}
function Ud(t) {
  typeof t != "function" && (t = Un(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var s = e[n], o = s.length, a = r[n] = new Array(o), l, c, h = 0; h < o; ++h)
      (l = s[h]) && (c = t.call(l, l.__data__, h, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[h] = c);
  return new xt(r, this._parents);
}
function Xd(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Gd() {
  return [];
}
function Aa(t) {
  return t == null ? Gd : function() {
    return this.querySelectorAll(t);
  };
}
function Vd(t) {
  return function() {
    return Xd(t.apply(this, arguments));
  };
}
function Kd(t) {
  typeof t == "function" ? t = Vd(t) : t = Aa(t);
  for (var e = this._groups, i = e.length, r = [], n = [], s = 0; s < i; ++s)
    for (var o = e[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (r.push(t.call(l, l.__data__, c, o)), n.push(l));
  return new xt(r, n);
}
function Ba(t) {
  return function() {
    return this.matches(t);
  };
}
function Ea(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Zd = Array.prototype.find;
function Jd(t) {
  return function() {
    return Zd.call(this.children, t);
  };
}
function Qd() {
  return this.firstElementChild;
}
function tf(t) {
  return this.select(t == null ? Qd : Jd(typeof t == "function" ? t : Ea(t)));
}
var ef = Array.prototype.filter;
function rf() {
  return Array.from(this.children);
}
function nf(t) {
  return function() {
    return ef.call(this.children, t);
  };
}
function of(t) {
  return this.selectAll(t == null ? rf : nf(typeof t == "function" ? t : Ea(t)));
}
function sf(t) {
  typeof t != "function" && (t = Ba(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var s = e[n], o = s.length, a = r[n] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new xt(r, this._parents);
}
function La(t) {
  return new Array(t.length);
}
function af() {
  return new xt(this._enter || this._groups.map(La), this._parents);
}
function cr(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
cr.prototype = {
  constructor: cr,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function lf(t) {
  return function() {
    return t;
  };
}
function cf(t, e, i, r, n, s) {
  for (var o = 0, a, l = e.length, c = s.length; o < c; ++o)
    (a = e[o]) ? (a.__data__ = s[o], r[o] = a) : i[o] = new cr(t, s[o]);
  for (; o < l; ++o)
    (a = e[o]) && (n[o] = a);
}
function hf(t, e, i, r, n, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), h = e.length, d = s.length, u = new Array(h), f;
  for (a = 0; a < h; ++a)
    (l = e[a]) && (u[a] = f = o.call(l, l.__data__, a, e) + "", c.has(f) ? n[a] = l : c.set(f, l));
  for (a = 0; a < d; ++a)
    f = o.call(t, s[a], a, s) + "", (l = c.get(f)) ? (r[a] = l, l.__data__ = s[a], c.delete(f)) : i[a] = new cr(t, s[a]);
  for (a = 0; a < h; ++a)
    (l = e[a]) && c.get(u[a]) === l && (n[a] = l);
}
function uf(t) {
  return t.__data__;
}
function df(t, e) {
  if (!arguments.length) return Array.from(this, uf);
  var i = e ? hf : cf, r = this._parents, n = this._groups;
  typeof t != "function" && (t = lf(t));
  for (var s = n.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var h = r[c], d = n[c], u = d.length, f = ff(t.call(h, h && h.__data__, c, r)), m = f.length, y = a[c] = new Array(m), _ = o[c] = new Array(m), E = l[c] = new Array(u);
    i(h, d, y, _, E, f, e);
    for (var x = 0, R = 0, C, S; x < m; ++x)
      if (C = y[x]) {
        for (x >= R && (R = x + 1); !(S = _[R]) && ++R < m; ) ;
        C._next = S || null;
      }
  }
  return o = new xt(o, r), o._enter = a, o._exit = l, o;
}
function ff(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function pf() {
  return new xt(this._exit || this._groups.map(La), this._parents);
}
function gf(t, e, i) {
  var r = this.enter(), n = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? s.remove() : i(s), r && n ? r.merge(n).order() : n;
}
function mf(t) {
  for (var e = t.selection ? t.selection() : t, i = this._groups, r = e._groups, n = i.length, s = r.length, o = Math.min(n, s), a = new Array(n), l = 0; l < o; ++l)
    for (var c = i[l], h = r[l], d = c.length, u = a[l] = new Array(d), f, m = 0; m < d; ++m)
      (f = c[m] || h[m]) && (u[m] = f);
  for (; l < n; ++l)
    a[l] = i[l];
  return new xt(a, this._parents);
}
function yf() {
  for (var t = this._groups, e = -1, i = t.length; ++e < i; )
    for (var r = t[e], n = r.length - 1, s = r[n], o; --n >= 0; )
      (o = r[n]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function _f(t) {
  t || (t = Cf);
  function e(d, u) {
    return d && u ? t(d.__data__, u.__data__) : !d - !u;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), s = 0; s < r; ++s) {
    for (var o = i[s], a = o.length, l = n[s] = new Array(a), c, h = 0; h < a; ++h)
      (c = o[h]) && (l[h] = c);
    l.sort(e);
  }
  return new xt(n, this._parents).order();
}
function Cf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function xf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function bf() {
  return Array.from(this);
}
function Tf() {
  for (var t = this._groups, e = 0, i = t.length; e < i; ++e)
    for (var r = t[e], n = 0, s = r.length; n < s; ++n) {
      var o = r[n];
      if (o) return o;
    }
  return null;
}
function vf() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Sf() {
  return !this.node();
}
function kf(t) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], s = 0, o = n.length, a; s < o; ++s)
      (a = n[s]) && t.call(a, a.__data__, s, n);
  return this;
}
function wf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Af(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Bf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Ef(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Lf(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t) : this.setAttribute(t, i);
  };
}
function Ff(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, i);
  };
}
function Of(t, e) {
  var i = Mr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? Af : wf : typeof e == "function" ? i.local ? Ff : Lf : i.local ? Ef : Bf)(i, e));
}
function Fa(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function If(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mf(t, e, i) {
  return function() {
    this.style.setProperty(t, e, i);
  };
}
function $f(t, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, i);
  };
}
function Df(t, e, i) {
  return arguments.length > 1 ? this.each((e == null ? If : typeof e == "function" ? $f : Mf)(t, e, i ?? "")) : qe(this.node(), t);
}
function qe(t, e) {
  return t.style.getPropertyValue(e) || Fa(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Nf(t) {
  return function() {
    delete this[t];
  };
}
function Rf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Pf(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t] : this[t] = i;
  };
}
function qf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Nf : typeof e == "function" ? Pf : Rf)(t, e)) : this.node()[t];
}
function Oa(t) {
  return t.trim().split(/^|\s+/);
}
function Xn(t) {
  return t.classList || new Ia(t);
}
function Ia(t) {
  this._node = t, this._names = Oa(t.getAttribute("class") || "");
}
Ia.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ma(t, e) {
  for (var i = Xn(t), r = -1, n = e.length; ++r < n; ) i.add(e[r]);
}
function $a(t, e) {
  for (var i = Xn(t), r = -1, n = e.length; ++r < n; ) i.remove(e[r]);
}
function zf(t) {
  return function() {
    Ma(this, t);
  };
}
function Wf(t) {
  return function() {
    $a(this, t);
  };
}
function Yf(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ma : $a)(this, t);
  };
}
function Hf(t, e) {
  var i = Oa(t + "");
  if (arguments.length < 2) {
    for (var r = Xn(this.node()), n = -1, s = i.length; ++n < s; ) if (!r.contains(i[n])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Yf : e ? zf : Wf)(i, e));
}
function jf() {
  this.textContent = "";
}
function Uf(t) {
  return function() {
    this.textContent = t;
  };
}
function Xf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Gf(t) {
  return arguments.length ? this.each(t == null ? jf : (typeof t == "function" ? Xf : Uf)(t)) : this.node().textContent;
}
function Vf() {
  this.innerHTML = "";
}
function Kf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Zf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Jf(t) {
  return arguments.length ? this.each(t == null ? Vf : (typeof t == "function" ? Zf : Kf)(t)) : this.node().innerHTML;
}
function Qf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function tp() {
  return this.each(Qf);
}
function ep() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ip() {
  return this.each(ep);
}
function rp(t) {
  var e = typeof t == "function" ? t : wa(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function np() {
  return null;
}
function op(t, e) {
  var i = typeof t == "function" ? t : wa(t), r = e == null ? np : typeof e == "function" ? e : Un(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function sp() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ap() {
  return this.each(sp);
}
function lp() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function cp() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function hp(t) {
  return this.select(t ? cp : lp);
}
function up(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function dp(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function fp(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function pp(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, s; i < n; ++i)
        s = e[i], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function gp(t, e, i) {
  return function() {
    var r = this.__on, n, s = dp(e);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((n = r[o]).type === t.type && n.name === t.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = s, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, i), n = { type: t.type, name: t.name, value: e, listener: s, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function mp(t, e, i) {
  var r = fp(t + ""), n, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, h; l < c; ++l)
        for (n = 0, h = a[l]; n < s; ++n)
          if ((o = r[n]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (a = e ? gp : pp, n = 0; n < s; ++n) this.each(a(r[n], e, i));
  return this;
}
function Da(t, e, i) {
  var r = Fa(t), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, !1, !1)), t.dispatchEvent(n);
}
function yp(t, e) {
  return function() {
    return Da(this, t, e);
  };
}
function _p(t, e) {
  return function() {
    return Da(this, t, e.apply(this, arguments));
  };
}
function Cp(t, e) {
  return this.each((typeof e == "function" ? _p : yp)(t, e));
}
function* xp() {
  for (var t = this._groups, e = 0, i = t.length; e < i; ++e)
    for (var r = t[e], n = 0, s = r.length, o; n < s; ++n)
      (o = r[n]) && (yield o);
}
var Na = [null];
function xt(t, e) {
  this._groups = t, this._parents = e;
}
function Oi() {
  return new xt([[document.documentElement]], Na);
}
function bp() {
  return this;
}
xt.prototype = Oi.prototype = {
  constructor: xt,
  select: Ud,
  selectAll: Kd,
  selectChild: tf,
  selectChildren: of,
  filter: sf,
  data: df,
  enter: af,
  exit: pf,
  join: gf,
  merge: mf,
  selection: bp,
  order: yf,
  sort: _f,
  call: xf,
  nodes: bf,
  node: Tf,
  size: vf,
  empty: Sf,
  each: kf,
  attr: Of,
  style: Df,
  property: qf,
  classed: Hf,
  text: Gf,
  html: Jf,
  raise: tp,
  lower: ip,
  append: rp,
  insert: op,
  remove: ap,
  clone: hp,
  datum: up,
  on: mp,
  dispatch: Cp,
  [Symbol.iterator]: xp
};
function kt(t) {
  return typeof t == "string" ? new xt([[document.querySelector(t)]], [document.documentElement]) : new xt([[t]], Na);
}
function Gn(t, e, i) {
  t.prototype = e.prototype = i, i.constructor = t;
}
function Ra(t, e) {
  var i = Object.create(t.prototype);
  for (var r in e) i[r] = e[r];
  return i;
}
function Ii() {
}
var Ti = 0.7, hr = 1 / Ti, De = "\\s*([+-]?\\d+)\\s*", vi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Tp = /^#([0-9a-f]{3,8})$/, vp = new RegExp(`^rgb\\(${De},${De},${De}\\)$`), Sp = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), kp = new RegExp(`^rgba\\(${De},${De},${De},${vi}\\)$`), wp = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${vi}\\)$`), Ap = new RegExp(`^hsl\\(${vi},${Pt},${Pt}\\)$`), Bp = new RegExp(`^hsla\\(${vi},${Pt},${Pt},${vi}\\)$`), us = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Gn(Ii, Si, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ds,
  // Deprecated! Use color.formatHex.
  formatHex: ds,
  formatHex8: Ep,
  formatHsl: Lp,
  formatRgb: fs,
  toString: fs
});
function ds() {
  return this.rgb().formatHex();
}
function Ep() {
  return this.rgb().formatHex8();
}
function Lp() {
  return Pa(this).formatHsl();
}
function fs() {
  return this.rgb().formatRgb();
}
function Si(t) {
  var e, i;
  return t = (t + "").trim().toLowerCase(), (e = Tp.exec(t)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? ps(e) : i === 3 ? new yt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Wi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Wi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = vp.exec(t)) ? new yt(e[1], e[2], e[3], 1) : (e = Sp.exec(t)) ? new yt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = kp.exec(t)) ? Wi(e[1], e[2], e[3], e[4]) : (e = wp.exec(t)) ? Wi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Ap.exec(t)) ? ys(e[1], e[2] / 100, e[3] / 100, 1) : (e = Bp.exec(t)) ? ys(e[1], e[2] / 100, e[3] / 100, e[4]) : us.hasOwnProperty(t) ? ps(us[t]) : t === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
}
function ps(t) {
  return new yt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Wi(t, e, i, r) {
  return r <= 0 && (t = e = i = NaN), new yt(t, e, i, r);
}
function Fp(t) {
  return t instanceof Ii || (t = Si(t)), t ? (t = t.rgb(), new yt(t.r, t.g, t.b, t.opacity)) : new yt();
}
function kn(t, e, i, r) {
  return arguments.length === 1 ? Fp(t) : new yt(t, e, i, r ?? 1);
}
function yt(t, e, i, r) {
  this.r = +t, this.g = +e, this.b = +i, this.opacity = +r;
}
Gn(yt, kn, Ra(Ii, {
  brighter(t) {
    return t = t == null ? hr : Math.pow(hr, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ti : Math.pow(Ti, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new yt(Ce(this.r), Ce(this.g), Ce(this.b), ur(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gs,
  // Deprecated! Use color.formatHex.
  formatHex: gs,
  formatHex8: Op,
  formatRgb: ms,
  toString: ms
}));
function gs() {
  return `#${ye(this.r)}${ye(this.g)}${ye(this.b)}`;
}
function Op() {
  return `#${ye(this.r)}${ye(this.g)}${ye(this.b)}${ye((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ms() {
  const t = ur(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ce(this.r)}, ${Ce(this.g)}, ${Ce(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ur(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ce(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ye(t) {
  return t = Ce(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ys(t, e, i, r) {
  return r <= 0 ? t = e = i = NaN : i <= 0 || i >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ot(t, e, i, r);
}
function Pa(t) {
  if (t instanceof Ot) return new Ot(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ii || (t = Si(t)), !t) return new Ot();
  if (t instanceof Ot) return t;
  t = t.rgb();
  var e = t.r / 255, i = t.g / 255, r = t.b / 255, n = Math.min(e, i, r), s = Math.max(e, i, r), o = NaN, a = s - n, l = (s + n) / 2;
  return a ? (e === s ? o = (i - r) / a + (i < r) * 6 : i === s ? o = (r - e) / a + 2 : o = (e - i) / a + 4, a /= l < 0.5 ? s + n : 2 - s - n, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Ot(o, a, l, t.opacity);
}
function Ip(t, e, i, r) {
  return arguments.length === 1 ? Pa(t) : new Ot(t, e, i, r ?? 1);
}
function Ot(t, e, i, r) {
  this.h = +t, this.s = +e, this.l = +i, this.opacity = +r;
}
Gn(Ot, Ip, Ra(Ii, {
  brighter(t) {
    return t = t == null ? hr : Math.pow(hr, t), new Ot(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ti : Math.pow(Ti, t), new Ot(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new yt(
      nn(t >= 240 ? t - 240 : t + 120, n, r),
      nn(t, n, r),
      nn(t < 120 ? t + 240 : t - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new Ot(_s(this.h), Yi(this.s), Yi(this.l), ur(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ur(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${_s(this.h)}, ${Yi(this.s) * 100}%, ${Yi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function _s(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Yi(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function nn(t, e, i) {
  return (t < 60 ? e + (i - e) * t / 60 : t < 180 ? i : t < 240 ? e + (i - e) * (240 - t) / 60 : e) * 255;
}
const Vn = (t) => () => t;
function qa(t, e) {
  return function(i) {
    return t + i * e;
  };
}
function Mp(t, e, i) {
  return t = Math.pow(t, i), e = Math.pow(e, i) - t, i = 1 / i, function(r) {
    return Math.pow(t + r * e, i);
  };
}
function b1(t, e) {
  var i = e - t;
  return i ? qa(t, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : Vn(isNaN(t) ? e : t);
}
function $p(t) {
  return (t = +t) == 1 ? za : function(e, i) {
    return i - e ? Mp(e, i, t) : Vn(isNaN(e) ? i : e);
  };
}
function za(t, e) {
  var i = e - t;
  return i ? qa(t, i) : Vn(isNaN(t) ? e : t);
}
const Cs = function t(e) {
  var i = $p(e);
  function r(n, s) {
    var o = i((n = kn(n)).r, (s = kn(s)).r), a = i(n.g, s.g), l = i(n.b, s.b), c = za(n.opacity, s.opacity);
    return function(h) {
      return n.r = o(h), n.g = a(h), n.b = l(h), n.opacity = c(h), n + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ae(t, e) {
  return t = +t, e = +e, function(i) {
    return t * (1 - i) + e * i;
  };
}
var wn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, on = new RegExp(wn.source, "g");
function Dp(t) {
  return function() {
    return t;
  };
}
function Np(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Rp(t, e) {
  var i = wn.lastIndex = on.lastIndex = 0, r, n, s, o = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = wn.exec(t)) && (n = on.exec(e)); )
    (s = n.index) > i && (s = e.slice(i, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (n = n[0]) ? a[o] ? a[o] += n : a[++o] = n : (a[++o] = null, l.push({ i: o, x: ae(r, n) })), i = on.lastIndex;
  return i < e.length && (s = e.slice(i), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? Np(l[0].x) : Dp(e) : (e = l.length, function(c) {
    for (var h = 0, d; h < e; ++h) a[(d = l[h]).i] = d.x(c);
    return a.join("");
  });
}
var xs = 180 / Math.PI, An = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Wa(t, e, i, r, n, s) {
  var o, a, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * i + e * r) && (i -= t * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t * r < e * i && (t = -t, e = -e, l = -l, o = -o), {
    translateX: n,
    translateY: s,
    rotate: Math.atan2(e, t) * xs,
    skewX: Math.atan(l) * xs,
    scaleX: o,
    scaleY: a
  };
}
var Hi;
function Pp(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? An : Wa(e.a, e.b, e.c, e.d, e.e, e.f);
}
function qp(t) {
  return t == null || (Hi || (Hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Hi.setAttribute("transform", t), !(t = Hi.transform.baseVal.consolidate())) ? An : (t = t.matrix, Wa(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ya(t, e, i, r) {
  function n(c) {
    return c.length ? c.pop() + " " : "";
  }
  function s(c, h, d, u, f, m) {
    if (c !== d || h !== u) {
      var y = f.push("translate(", null, e, null, i);
      m.push({ i: y - 4, x: ae(c, d) }, { i: y - 2, x: ae(h, u) });
    } else (d || u) && f.push("translate(" + d + e + u + i);
  }
  function o(c, h, d, u) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), u.push({ i: d.push(n(d) + "rotate(", null, r) - 2, x: ae(c, h) })) : h && d.push(n(d) + "rotate(" + h + r);
  }
  function a(c, h, d, u) {
    c !== h ? u.push({ i: d.push(n(d) + "skewX(", null, r) - 2, x: ae(c, h) }) : h && d.push(n(d) + "skewX(" + h + r);
  }
  function l(c, h, d, u, f, m) {
    if (c !== d || h !== u) {
      var y = f.push(n(f) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: ae(c, d) }, { i: y - 2, x: ae(h, u) });
    } else (d !== 1 || u !== 1) && f.push(n(f) + "scale(" + d + "," + u + ")");
  }
  return function(c, h) {
    var d = [], u = [];
    return c = t(c), h = t(h), s(c.translateX, c.translateY, h.translateX, h.translateY, d, u), o(c.rotate, h.rotate, d, u), a(c.skewX, h.skewX, d, u), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, d, u), c = h = null, function(f) {
      for (var m = -1, y = u.length, _; ++m < y; ) d[(_ = u[m]).i] = _.x(f);
      return d.join("");
    };
  };
}
var zp = Ya(Pp, "px, ", "px)", "deg)"), Wp = Ya(qp, ", ", ")", ")"), ze = 0, ci = 0, ii = 0, Ha = 1e3, dr, hi, fr = 0, Te = 0, $r = 0, ki = typeof performance == "object" && performance.now ? performance : Date, ja = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Kn() {
  return Te || (ja(Yp), Te = ki.now() + $r);
}
function Yp() {
  Te = 0;
}
function pr() {
  this._call = this._time = this._next = null;
}
pr.prototype = Ua.prototype = {
  constructor: pr,
  restart: function(t, e, i) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    i = (i == null ? Kn() : +i) + (e == null ? 0 : +e), !this._next && hi !== this && (hi ? hi._next = this : dr = this, hi = this), this._call = t, this._time = i, Bn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Bn());
  }
};
function Ua(t, e, i) {
  var r = new pr();
  return r.restart(t, e, i), r;
}
function Hp() {
  Kn(), ++ze;
  for (var t = dr, e; t; )
    (e = Te - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ze;
}
function bs() {
  Te = (fr = ki.now()) + $r, ze = ci = 0;
  try {
    Hp();
  } finally {
    ze = 0, Up(), Te = 0;
  }
}
function jp() {
  var t = ki.now(), e = t - fr;
  e > Ha && ($r -= e, fr = t);
}
function Up() {
  for (var t, e = dr, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (i = e._next, e._next = null, e = t ? t._next = i : dr = i);
  hi = t, Bn(r);
}
function Bn(t) {
  if (!ze) {
    ci && (ci = clearTimeout(ci));
    var e = t - Te;
    e > 24 ? (t < 1 / 0 && (ci = setTimeout(bs, t - ki.now() - $r)), ii && (ii = clearInterval(ii))) : (ii || (fr = ki.now(), ii = setInterval(jp, Ha)), ze = 1, ja(bs));
  }
}
function Ts(t, e, i) {
  var r = new pr();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t(n + e);
  }, e, i), r;
}
var Xp = ka("start", "end", "cancel", "interrupt"), Gp = [], Xa = 0, vs = 1, En = 2, Zi = 3, Ss = 4, Ln = 5, Ji = 6;
function Dr(t, e, i, r, n, s) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (i in o) return;
  Vp(t, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Xp,
    tween: Gp,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Xa
  });
}
function Zn(t, e) {
  var i = Mt(t, e);
  if (i.state > Xa) throw new Error("too late; already scheduled");
  return i;
}
function Ht(t, e) {
  var i = Mt(t, e);
  if (i.state > Zi) throw new Error("too late; already running");
  return i;
}
function Mt(t, e) {
  var i = t.__transition;
  if (!i || !(i = i[e])) throw new Error("transition not found");
  return i;
}
function Vp(t, e, i) {
  var r = t.__transition, n;
  r[e] = i, i.timer = Ua(s, 0, i.time);
  function s(c) {
    i.state = vs, i.timer.restart(o, i.delay, i.time), i.delay <= c && o(c - i.delay);
  }
  function o(c) {
    var h, d, u, f;
    if (i.state !== vs) return l();
    for (h in r)
      if (f = r[h], f.name === i.name) {
        if (f.state === Zi) return Ts(o);
        f.state === Ss ? (f.state = Ji, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[h]) : +h < e && (f.state = Ji, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[h]);
      }
    if (Ts(function() {
      i.state === Zi && (i.state = Ss, i.timer.restart(a, i.delay, i.time), a(c));
    }), i.state = En, i.on.call("start", t, t.__data__, i.index, i.group), i.state === En) {
      for (i.state = Zi, n = new Array(u = i.tween.length), h = 0, d = -1; h < u; ++h)
        (f = i.tween[h].value.call(t, t.__data__, i.index, i.group)) && (n[++d] = f);
      n.length = d + 1;
    }
  }
  function a(c) {
    for (var h = c < i.duration ? i.ease.call(null, c / i.duration) : (i.timer.restart(l), i.state = Ln, 1), d = -1, u = n.length; ++d < u; )
      n[d].call(t, h);
    i.state === Ln && (i.on.call("end", t, t.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = Ji, i.timer.stop(), delete r[e];
    for (var c in r) return;
    delete t.__transition;
  }
}
function Kp(t, e) {
  var i = t.__transition, r, n, s = !0, o;
  if (i) {
    e = e == null ? null : e + "";
    for (o in i) {
      if ((r = i[o]).name !== e) {
        s = !1;
        continue;
      }
      n = r.state > En && r.state < Ln, r.state = Ji, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete i[o];
    }
    s && delete t.__transition;
  }
}
function Zp(t) {
  return this.each(function() {
    Kp(this, t);
  });
}
function Jp(t, e) {
  var i, r;
  return function() {
    var n = Ht(this, t), s = n.tween;
    if (s !== i) {
      r = i = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function Qp(t, e, i) {
  var r, n;
  if (typeof i != "function") throw new Error();
  return function() {
    var s = Ht(this, t), o = s.tween;
    if (o !== r) {
      n = (r = o).slice();
      for (var a = { name: e, value: i }, l = 0, c = n.length; l < c; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === c && n.push(a);
    }
    s.tween = n;
  };
}
function tg(t, e) {
  var i = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Mt(this.node(), i).tween, n = 0, s = r.length, o; n < s; ++n)
      if ((o = r[n]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Jp : Qp)(i, t, e));
}
function Jn(t, e, i) {
  var r = t._id;
  return t.each(function() {
    var n = Ht(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Mt(n, r).value[e];
  };
}
function Ga(t, e) {
  var i;
  return (typeof e == "number" ? ae : e instanceof Si ? Cs : (i = Si(e)) ? (e = i, Cs) : Rp)(t, e);
}
function eg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ig(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function rg(t, e, i) {
  var r, n = i + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === n ? null : o === r ? s : s = e(r = o, i);
  };
}
function ng(t, e, i) {
  var r, n = i + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === n ? null : o === r ? s : s = e(r = o, i);
  };
}
function og(t, e, i) {
  var r, n, s;
  return function() {
    var o, a = i(this), l;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = a + "", o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a)));
  };
}
function sg(t, e, i) {
  var r, n, s;
  return function() {
    var o, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = a + "", o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a)));
  };
}
function ag(t, e) {
  var i = Mr(t), r = i === "transform" ? Wp : Ga;
  return this.attrTween(t, typeof e == "function" ? (i.local ? sg : og)(i, r, Jn(this, "attr." + t, e)) : e == null ? (i.local ? ig : eg)(i) : (i.local ? ng : rg)(i, r, e));
}
function lg(t, e) {
  return function(i) {
    this.setAttribute(t, e.call(this, i));
  };
}
function cg(t, e) {
  return function(i) {
    this.setAttributeNS(t.space, t.local, e.call(this, i));
  };
}
function hg(t, e) {
  var i, r;
  function n() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && cg(t, s)), i;
  }
  return n._value = e, n;
}
function ug(t, e) {
  var i, r;
  function n() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && lg(t, s)), i;
  }
  return n._value = e, n;
}
function dg(t, e) {
  var i = "attr." + t;
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (e == null) return this.tween(i, null);
  if (typeof e != "function") throw new Error();
  var r = Mr(t);
  return this.tween(i, (r.local ? hg : ug)(r, e));
}
function fg(t, e) {
  return function() {
    Zn(this, t).delay = +e.apply(this, arguments);
  };
}
function pg(t, e) {
  return e = +e, function() {
    Zn(this, t).delay = e;
  };
}
function gg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? fg : pg)(e, t)) : Mt(this.node(), e).delay;
}
function mg(t, e) {
  return function() {
    Ht(this, t).duration = +e.apply(this, arguments);
  };
}
function yg(t, e) {
  return e = +e, function() {
    Ht(this, t).duration = e;
  };
}
function _g(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? mg : yg)(e, t)) : Mt(this.node(), e).duration;
}
function Cg(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ht(this, t).ease = e;
  };
}
function xg(t) {
  var e = this._id;
  return arguments.length ? this.each(Cg(e, t)) : Mt(this.node(), e).ease;
}
function bg(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function") throw new Error();
    Ht(this, t).ease = i;
  };
}
function Tg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(bg(this._id, t));
}
function vg(t) {
  typeof t != "function" && (t = Ba(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var s = e[n], o = s.length, a = r[n] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new Qt(r, this._parents, this._name, this._id);
}
function Sg(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, i = t._groups, r = e.length, n = i.length, s = Math.min(r, n), o = new Array(r), a = 0; a < s; ++a)
    for (var l = e[a], c = i[a], h = l.length, d = o[a] = new Array(h), u, f = 0; f < h; ++f)
      (u = l[f] || c[f]) && (d[f] = u);
  for (; a < r; ++a)
    o[a] = e[a];
  return new Qt(o, this._parents, this._name, this._id);
}
function kg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function wg(t, e, i) {
  var r, n, s = kg(e) ? Zn : Ht;
  return function() {
    var o = s(this, t), a = o.on;
    a !== r && (n = (r = a).copy()).on(e, i), o.on = n;
  };
}
function Ag(t, e) {
  var i = this._id;
  return arguments.length < 2 ? Mt(this.node(), i).on.on(t) : this.each(wg(i, t, e));
}
function Bg(t) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition) if (+i !== t) return;
    e && e.removeChild(this);
  };
}
function Eg() {
  return this.on("end.remove", Bg(this._id));
}
function Lg(t) {
  var e = this._name, i = this._id;
  typeof t != "function" && (t = Un(t));
  for (var r = this._groups, n = r.length, s = new Array(n), o = 0; o < n; ++o)
    for (var a = r[o], l = a.length, c = s[o] = new Array(l), h, d, u = 0; u < l; ++u)
      (h = a[u]) && (d = t.call(h, h.__data__, u, a)) && ("__data__" in h && (d.__data__ = h.__data__), c[u] = d, Dr(c[u], e, i, u, c, Mt(h, i)));
  return new Qt(s, this._parents, e, i);
}
function Fg(t) {
  var e = this._name, i = this._id;
  typeof t != "function" && (t = Aa(t));
  for (var r = this._groups, n = r.length, s = [], o = [], a = 0; a < n; ++a)
    for (var l = r[a], c = l.length, h, d = 0; d < c; ++d)
      if (h = l[d]) {
        for (var u = t.call(h, h.__data__, d, l), f, m = Mt(h, i), y = 0, _ = u.length; y < _; ++y)
          (f = u[y]) && Dr(f, e, i, y, u, m);
        s.push(u), o.push(h);
      }
  return new Qt(s, o, e, i);
}
var Og = Oi.prototype.constructor;
function Ig() {
  return new Og(this._groups, this._parents);
}
function Mg(t, e) {
  var i, r, n;
  return function() {
    var s = qe(this, t), o = (this.style.removeProperty(t), qe(this, t));
    return s === o ? null : s === i && o === r ? n : n = e(i = s, r = o);
  };
}
function Va(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function $g(t, e, i) {
  var r, n = i + "", s;
  return function() {
    var o = qe(this, t);
    return o === n ? null : o === r ? s : s = e(r = o, i);
  };
}
function Dg(t, e, i) {
  var r, n, s;
  return function() {
    var o = qe(this, t), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), qe(this, t))), o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a));
  };
}
function Ng(t, e) {
  var i, r, n, s = "style." + e, o = "end." + s, a;
  return function() {
    var l = Ht(this, t), c = l.on, h = l.value[s] == null ? a || (a = Va(e)) : void 0;
    (c !== i || n !== h) && (r = (i = c).copy()).on(o, n = h), l.on = r;
  };
}
function Rg(t, e, i) {
  var r = (t += "") == "transform" ? zp : Ga;
  return e == null ? this.styleTween(t, Mg(t, r)).on("end.style." + t, Va(t)) : typeof e == "function" ? this.styleTween(t, Dg(t, r, Jn(this, "style." + t, e))).each(Ng(this._id, t)) : this.styleTween(t, $g(t, r, e), i).on("end.style." + t, null);
}
function Pg(t, e, i) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), i);
  };
}
function qg(t, e, i) {
  var r, n;
  function s() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && Pg(t, o, i)), r;
  }
  return s._value = e, s;
}
function zg(t, e, i) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, qg(t, e, i ?? ""));
}
function Wg(t) {
  return function() {
    this.textContent = t;
  };
}
function Yg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Hg(t) {
  return this.tween("text", typeof t == "function" ? Yg(Jn(this, "text", t)) : Wg(t == null ? "" : t + ""));
}
function jg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ug(t) {
  var e, i;
  function r() {
    var n = t.apply(this, arguments);
    return n !== i && (e = (i = n) && jg(n)), e;
  }
  return r._value = t, r;
}
function Xg(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ug(t));
}
function Gg() {
  for (var t = this._name, e = this._id, i = Ka(), r = this._groups, n = r.length, s = 0; s < n; ++s)
    for (var o = r[s], a = o.length, l, c = 0; c < a; ++c)
      if (l = o[c]) {
        var h = Mt(l, e);
        Dr(l, t, i, c, o, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Qt(r, this._parents, t, i);
}
function Vg() {
  var t, e, i = this, r = i._id, n = i.size();
  return new Promise(function(s, o) {
    var a = { value: o }, l = { value: function() {
      --n === 0 && s();
    } };
    i.each(function() {
      var c = Ht(this, r), h = c.on;
      h !== t && (e = (t = h).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), c.on = e;
    }), n === 0 && s();
  });
}
var Kg = 0;
function Qt(t, e, i, r) {
  this._groups = t, this._parents = e, this._name = i, this._id = r;
}
function Ka() {
  return ++Kg;
}
var Xt = Oi.prototype;
Qt.prototype = {
  constructor: Qt,
  select: Lg,
  selectAll: Fg,
  selectChild: Xt.selectChild,
  selectChildren: Xt.selectChildren,
  filter: vg,
  merge: Sg,
  selection: Ig,
  transition: Gg,
  call: Xt.call,
  nodes: Xt.nodes,
  node: Xt.node,
  size: Xt.size,
  empty: Xt.empty,
  each: Xt.each,
  on: Ag,
  attr: ag,
  attrTween: dg,
  style: Rg,
  styleTween: zg,
  text: Hg,
  textTween: Xg,
  remove: Eg,
  tween: tg,
  delay: gg,
  duration: _g,
  ease: xg,
  easeVarying: Tg,
  end: Vg,
  [Symbol.iterator]: Xt[Symbol.iterator]
};
function Zg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Jg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Zg
};
function Qg(t, e) {
  for (var i; !(i = t.__transition) || !(i = i[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function tm(t) {
  var e, i;
  t instanceof Qt ? (e = t._id, t = t._name) : (e = Ka(), (i = Jg).time = Kn(), t = t == null ? null : t + "");
  for (var r = this._groups, n = r.length, s = 0; s < n; ++s)
    for (var o = r[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && Dr(l, t, e, c, o, i || Qg(l, e));
  return new Qt(r, this._parents, t, e);
}
Oi.prototype.interrupt = Zp;
Oi.prototype.transition = tm;
const T1 = Math.abs, v1 = Math.atan2, S1 = Math.cos, k1 = Math.max, w1 = Math.min, A1 = Math.sin, B1 = Math.sqrt, ks = 1e-12, Qn = Math.PI, ws = Qn / 2, E1 = 2 * Qn;
function L1(t) {
  return t > 1 ? 0 : t < -1 ? Qn : Math.acos(t);
}
function F1(t) {
  return t >= 1 ? ws : t <= -1 ? -ws : Math.asin(t);
}
function Za(t) {
  this._context = t;
}
Za.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function em(t) {
  return new Za(t);
}
class Ja {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
}
function im(t) {
  return new Ja(t, !0);
}
function rm(t) {
  return new Ja(t, !1);
}
function he() {
}
function gr(t, e, i) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + i) / 6
  );
}
function Nr(t) {
  this._context = t;
}
Nr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        gr(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        gr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function nm(t) {
  return new Nr(t);
}
function Qa(t) {
  this._context = t;
}
Qa.prototype = {
  areaStart: he,
  areaEnd: he,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        gr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function om(t) {
  return new Qa(t);
}
function tl(t) {
  this._context = t;
}
tl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        gr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function sm(t) {
  return new tl(t);
}
function el(t, e) {
  this._basis = new Nr(t), this._beta = e;
}
el.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t = this._x, e = this._y, i = t.length - 1;
    if (i > 0)
      for (var r = t[0], n = e[0], s = t[i] - r, o = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t[a] + (1 - this._beta) * (r + l * s),
          this._beta * e[a] + (1 - this._beta) * (n + l * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
const am = function t(e) {
  function i(r) {
    return e === 1 ? new Nr(r) : new el(r, e);
  }
  return i.beta = function(r) {
    return t(+r);
  }, i;
}(0.85);
function mr(t, e, i) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - e),
    t._y2 + t._k * (t._y1 - i),
    t._x2,
    t._y2
  );
}
function to(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
to.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        mr(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2, this._x1 = t, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        mr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const lm = function t(e) {
  function i(r) {
    return new to(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
}(0);
function eo(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
eo.prototype = {
  areaStart: he,
  areaEnd: he,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = e;
        break;
      default:
        mr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const cm = function t(e) {
  function i(r) {
    return new eo(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
}(0);
function io(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
io.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        mr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const hm = function t(e) {
  function i(r) {
    return new io(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
}(0);
function ro(t, e, i) {
  var r = t._x1, n = t._y1, s = t._x2, o = t._y2;
  if (t._l01_a > ks) {
    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
    r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, n = (n * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
  }
  if (t._l23_a > ks) {
    var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, h = 3 * t._l23_a * (t._l23_a + t._l12_a);
    s = (s * c + t._x1 * t._l23_2a - e * t._l12_2a) / h, o = (o * c + t._y1 * t._l23_2a - i * t._l12_2a) / h;
  }
  t._context.bezierCurveTo(r, n, s, o, t._x2, t._y2);
}
function il(t, e) {
  this._context = t, this._alpha = e;
}
il.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        ro(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const um = function t(e) {
  function i(r) {
    return e ? new il(r, e) : new to(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
}(0.5);
function rl(t, e) {
  this._context = t, this._alpha = e;
}
rl.prototype = {
  areaStart: he,
  areaEnd: he,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = e;
        break;
      default:
        ro(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const dm = function t(e) {
  function i(r) {
    return e ? new rl(r, e) : new eo(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
}(0.5);
function nl(t, e) {
  this._context = t, this._alpha = e;
}
nl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ro(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const fm = function t(e) {
  function i(r) {
    return e ? new nl(r, e) : new io(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
}(0.5);
function ol(t) {
  this._context = t;
}
ol.prototype = {
  areaStart: he,
  areaEnd: he,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t, e) {
    t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
  }
};
function pm(t) {
  return new ol(t);
}
function As(t) {
  return t < 0 ? -1 : 1;
}
function Bs(t, e, i) {
  var r = t._x1 - t._x0, n = e - t._x1, s = (t._y1 - t._y0) / (r || n < 0 && -0), o = (i - t._y1) / (n || r < 0 && -0), a = (s * n + o * r) / (r + n);
  return (As(s) + As(o)) * Math.min(Math.abs(s), Math.abs(o), 0.5 * Math.abs(a)) || 0;
}
function Es(t, e) {
  var i = t._x1 - t._x0;
  return i ? (3 * (t._y1 - t._y0) / i - e) / 2 : e;
}
function sn(t, e, i) {
  var r = t._x0, n = t._y0, s = t._x1, o = t._y1, a = (s - r) / 3;
  t._context.bezierCurveTo(r + a, n + a * e, s - a, o - a * i, s, o);
}
function yr(t) {
  this._context = t;
}
yr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        sn(this, this._t0, Es(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    var i = NaN;
    if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, sn(this, Es(this, i = Bs(this, t, e)), i);
          break;
        default:
          sn(this, this._t0, i = Bs(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function sl(t) {
  this._context = new al(t);
}
(sl.prototype = Object.create(yr.prototype)).point = function(t, e) {
  yr.prototype.point.call(this, e, t);
};
function al(t) {
  this._context = t;
}
al.prototype = {
  moveTo: function(t, e) {
    this._context.moveTo(e, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, e) {
    this._context.lineTo(e, t);
  },
  bezierCurveTo: function(t, e, i, r, n, s) {
    this._context.bezierCurveTo(e, t, r, i, s, n);
  }
};
function gm(t) {
  return new yr(t);
}
function mm(t) {
  return new sl(t);
}
function ll(t) {
  this._context = t;
}
ll.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t = this._x, e = this._y, i = t.length;
    if (i)
      if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), i === 2)
        this._context.lineTo(t[1], e[1]);
      else
        for (var r = Ls(t), n = Ls(e), s = 0, o = 1; o < i; ++s, ++o)
          this._context.bezierCurveTo(r[0][s], n[0][s], r[1][s], n[1][s], t[o], e[o]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function Ls(t) {
  var e, i = t.length - 1, r, n = new Array(i), s = new Array(i), o = new Array(i);
  for (n[0] = 0, s[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e) n[e] = 1, s[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
  for (n[i - 1] = 2, s[i - 1] = 7, o[i - 1] = 8 * t[i - 1] + t[i], e = 1; e < i; ++e) r = n[e] / s[e - 1], s[e] -= r, o[e] -= r * o[e - 1];
  for (n[i - 1] = o[i - 1] / s[i - 1], e = i - 2; e >= 0; --e) n[e] = (o[e] - n[e + 1]) / s[e];
  for (s[i - 1] = (t[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e) s[e] = 2 * t[e + 1] - n[e + 1];
  return [n, s];
}
function ym(t) {
  return new ll(t);
}
function Rr(t, e) {
  this._context = t, this._t = e;
}
Rr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t, e);
        else {
          var i = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function _m(t) {
  return new Rr(t, 0.5);
}
function Cm(t) {
  return new Rr(t, 0);
}
function xm(t) {
  return new Rr(t, 1);
}
function ui(t, e, i) {
  this.k = t, this.x = e, this.y = i;
}
ui.prototype = {
  constructor: ui,
  scale: function(t) {
    return t === 1 ? this : new ui(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ui(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ui.prototype;
/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */
const {
  entries: cl,
  setPrototypeOf: Fs,
  isFrozen: bm,
  getPrototypeOf: Tm,
  getOwnPropertyDescriptor: vm
} = Object;
let {
  freeze: pt,
  seal: wt,
  create: hl
} = Object, {
  apply: Fn,
  construct: On
} = typeof Reflect < "u" && Reflect;
pt || (pt = function(e) {
  return e;
});
wt || (wt = function(e) {
  return e;
});
Fn || (Fn = function(e, i, r) {
  return e.apply(i, r);
});
On || (On = function(e, i) {
  return new e(...i);
});
const ji = bt(Array.prototype.forEach), Os = bt(Array.prototype.pop), ri = bt(Array.prototype.push), Qi = bt(String.prototype.toLowerCase), an = bt(String.prototype.toString), Is = bt(String.prototype.match), ni = bt(String.prototype.replace), Sm = bt(String.prototype.indexOf), km = bt(String.prototype.trim), Ft = bt(Object.prototype.hasOwnProperty), ut = bt(RegExp.prototype.test), oi = wm(TypeError);
function bt(t) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return Fn(t, e, r);
  };
}
function wm(t) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return On(t, i);
  };
}
function j(t, e) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qi;
  Fs && Fs(t, null);
  let r = e.length;
  for (; r--; ) {
    let n = e[r];
    if (typeof n == "string") {
      const s = i(n);
      s !== n && (bm(e) || (e[r] = s), n = s);
    }
    t[n] = !0;
  }
  return t;
}
function Am(t) {
  for (let e = 0; e < t.length; e++)
    Ft(t, e) || (t[e] = null);
  return t;
}
function ge(t) {
  const e = hl(null);
  for (const [i, r] of cl(t))
    Ft(t, i) && (Array.isArray(r) ? e[i] = Am(r) : r && typeof r == "object" && r.constructor === Object ? e[i] = ge(r) : e[i] = r);
  return e;
}
function si(t, e) {
  for (; t !== null; ) {
    const r = vm(t, e);
    if (r) {
      if (r.get)
        return bt(r.get);
      if (typeof r.value == "function")
        return bt(r.value);
    }
    t = Tm(t);
  }
  function i() {
    return null;
  }
  return i;
}
const Ms = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ln = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cn = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Bm = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hn = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Em = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), $s = pt(["#text"]), Ds = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), un = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ns = pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ui = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lm = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fm = wt(/<%[\w\W]*|[\w\W]*%>/gm), Om = wt(/\${[\w\W]*}/gm), Im = wt(/^data-[\-\w.\u00B7-\uFFFF]/), Mm = wt(/^aria-[\-\w]+$/), ul = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), $m = wt(/^(?:\w+script|data):/i), Dm = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dl = wt(/^html$/i), Nm = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Rs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Lm,
  ERB_EXPR: Fm,
  TMPLIT_EXPR: Om,
  DATA_ATTR: Im,
  ARIA_ATTR: Mm,
  IS_ALLOWED_URI: ul,
  IS_SCRIPT_OR_DATA: $m,
  ATTR_WHITESPACE: Dm,
  DOCTYPE_NAME: dl,
  CUSTOM_ELEMENT: Nm
});
const ai = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Rm = function() {
  return typeof window > "u" ? null : window;
}, Pm = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function fl() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rm();
  const e = (F) => fl(F);
  if (e.version = "3.1.6", e.removed = [], !t || !t.document || t.document.nodeType !== ai.document)
    return e.isSupported = !1, e;
  let {
    document: i
  } = t;
  const r = i, n = r.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: o,
    Node: a,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: u,
    trustedTypes: f
  } = t, m = l.prototype, y = si(m, "cloneNode"), _ = si(m, "remove"), E = si(m, "nextSibling"), x = si(m, "childNodes"), R = si(m, "parentNode");
  if (typeof o == "function") {
    const F = i.createElement("template");
    F.content && F.content.ownerDocument && (i = F.content.ownerDocument);
  }
  let C, S = "";
  const {
    implementation: U,
    createNodeIterator: D,
    createDocumentFragment: Q,
    getElementsByTagName: rt
  } = i, {
    importNode: Y
  } = r;
  let B = {};
  e.isSupported = typeof cl == "function" && typeof R == "function" && U && U.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: tt,
    ERB_EXPR: ie,
    TMPLIT_EXPR: P,
    DATA_ATTR: w,
    ARIA_ATTR: T,
    IS_SCRIPT_OR_DATA: L,
    ATTR_WHITESPACE: k,
    CUSTOM_ELEMENT: M
  } = Rs;
  let {
    IS_ALLOWED_URI: W
  } = Rs, z = null;
  const K = j({}, [...Ms, ...ln, ...cn, ...hn, ...$s]);
  let H = null;
  const et = j({}, [...Ds, ...un, ...Ns, ...Ui]);
  let X = Object.seal(hl(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Tt = null, Bt = null, re = !0, Et = !0, nt = !1, Lt = !0, vt = !1, ne = !0, fe = !1, Xr = !1, Gr = !1, Ae = !1, Di = !1, Ni = !1, So = !0, ko = !1;
  const Ic = "user-content-";
  let Vr = !0, Qe = !1, Be = {}, Ee = null;
  const wo = j({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ao = null;
  const Bo = j({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kr = null;
  const Eo = j({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ri = "http://www.w3.org/1998/Math/MathML", Pi = "http://www.w3.org/2000/svg", jt = "http://www.w3.org/1999/xhtml";
  let Le = jt, Zr = !1, Jr = null;
  const Mc = j({}, [Ri, Pi, jt], an);
  let ti = null;
  const $c = ["application/xhtml+xml", "text/html"], Dc = "text/html";
  let it = null, Fe = null;
  const Nc = i.createElement("form"), Lo = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, Qr = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Fe && Fe === p)) {
      if ((!p || typeof p != "object") && (p = {}), p = ge(p), ti = // eslint-disable-next-line unicorn/prefer-includes
      $c.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? Dc : p.PARSER_MEDIA_TYPE, it = ti === "application/xhtml+xml" ? an : Qi, z = Ft(p, "ALLOWED_TAGS") ? j({}, p.ALLOWED_TAGS, it) : K, H = Ft(p, "ALLOWED_ATTR") ? j({}, p.ALLOWED_ATTR, it) : et, Jr = Ft(p, "ALLOWED_NAMESPACES") ? j({}, p.ALLOWED_NAMESPACES, an) : Mc, Kr = Ft(p, "ADD_URI_SAFE_ATTR") ? j(
        ge(Eo),
        // eslint-disable-line indent
        p.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        it
        // eslint-disable-line indent
      ) : Eo, Ao = Ft(p, "ADD_DATA_URI_TAGS") ? j(
        ge(Bo),
        // eslint-disable-line indent
        p.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        it
        // eslint-disable-line indent
      ) : Bo, Ee = Ft(p, "FORBID_CONTENTS") ? j({}, p.FORBID_CONTENTS, it) : wo, Tt = Ft(p, "FORBID_TAGS") ? j({}, p.FORBID_TAGS, it) : {}, Bt = Ft(p, "FORBID_ATTR") ? j({}, p.FORBID_ATTR, it) : {}, Be = Ft(p, "USE_PROFILES") ? p.USE_PROFILES : !1, re = p.ALLOW_ARIA_ATTR !== !1, Et = p.ALLOW_DATA_ATTR !== !1, nt = p.ALLOW_UNKNOWN_PROTOCOLS || !1, Lt = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, vt = p.SAFE_FOR_TEMPLATES || !1, ne = p.SAFE_FOR_XML !== !1, fe = p.WHOLE_DOCUMENT || !1, Ae = p.RETURN_DOM || !1, Di = p.RETURN_DOM_FRAGMENT || !1, Ni = p.RETURN_TRUSTED_TYPE || !1, Gr = p.FORCE_BODY || !1, So = p.SANITIZE_DOM !== !1, ko = p.SANITIZE_NAMED_PROPS || !1, Vr = p.KEEP_CONTENT !== !1, Qe = p.IN_PLACE || !1, W = p.ALLOWED_URI_REGEXP || ul, Le = p.NAMESPACE || jt, X = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && Lo(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && Lo(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), vt && (Et = !1), Di && (Ae = !0), Be && (z = j({}, $s), H = [], Be.html === !0 && (j(z, Ms), j(H, Ds)), Be.svg === !0 && (j(z, ln), j(H, un), j(H, Ui)), Be.svgFilters === !0 && (j(z, cn), j(H, un), j(H, Ui)), Be.mathMl === !0 && (j(z, hn), j(H, Ns), j(H, Ui))), p.ADD_TAGS && (z === K && (z = ge(z)), j(z, p.ADD_TAGS, it)), p.ADD_ATTR && (H === et && (H = ge(H)), j(H, p.ADD_ATTR, it)), p.ADD_URI_SAFE_ATTR && j(Kr, p.ADD_URI_SAFE_ATTR, it), p.FORBID_CONTENTS && (Ee === wo && (Ee = ge(Ee)), j(Ee, p.FORBID_CONTENTS, it)), Vr && (z["#text"] = !0), fe && j(z, ["html", "head", "body"]), z.table && (j(z, ["tbody"]), delete Tt.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw oi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw oi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        C = p.TRUSTED_TYPES_POLICY, S = C.createHTML("");
      } else
        C === void 0 && (C = Pm(f, n)), C !== null && typeof S == "string" && (S = C.createHTML(""));
      pt && pt(p), Fe = p;
    }
  }, Fo = j({}, ["mi", "mo", "mn", "ms", "mtext"]), Oo = j({}, ["foreignobject", "annotation-xml"]), Rc = j({}, ["title", "style", "font", "a", "script"]), Io = j({}, [...ln, ...cn, ...Bm]), Mo = j({}, [...hn, ...Em]), Pc = function(p) {
    let b = R(p);
    (!b || !b.tagName) && (b = {
      namespaceURI: Le,
      tagName: "template"
    });
    const A = Qi(p.tagName), G = Qi(b.tagName);
    return Jr[p.namespaceURI] ? p.namespaceURI === Pi ? b.namespaceURI === jt ? A === "svg" : b.namespaceURI === Ri ? A === "svg" && (G === "annotation-xml" || Fo[G]) : !!Io[A] : p.namespaceURI === Ri ? b.namespaceURI === jt ? A === "math" : b.namespaceURI === Pi ? A === "math" && Oo[G] : !!Mo[A] : p.namespaceURI === jt ? b.namespaceURI === Pi && !Oo[G] || b.namespaceURI === Ri && !Fo[G] ? !1 : !Mo[A] && (Rc[A] || !Io[A]) : !!(ti === "application/xhtml+xml" && Jr[p.namespaceURI]) : !1;
  }, $t = function(p) {
    ri(e.removed, {
      element: p
    });
    try {
      R(p).removeChild(p);
    } catch {
      _(p);
    }
  }, qi = function(p, b) {
    try {
      ri(e.removed, {
        attribute: b.getAttributeNode(p),
        from: b
      });
    } catch {
      ri(e.removed, {
        attribute: null,
        from: b
      });
    }
    if (b.removeAttribute(p), p === "is" && !H[p])
      if (Ae || Di)
        try {
          $t(b);
        } catch {
        }
      else
        try {
          b.setAttribute(p, "");
        } catch {
        }
  }, $o = function(p) {
    let b = null, A = null;
    if (Gr)
      p = "<remove></remove>" + p;
    else {
      const ot = Is(p, /^[\r\n\t ]+/);
      A = ot && ot[0];
    }
    ti === "application/xhtml+xml" && Le === jt && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const G = C ? C.createHTML(p) : p;
    if (Le === jt)
      try {
        b = new u().parseFromString(G, ti);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = U.createDocument(Le, "template", null);
      try {
        b.documentElement.innerHTML = Zr ? S : G;
      } catch {
      }
    }
    const st = b.body || b.documentElement;
    return p && A && st.insertBefore(i.createTextNode(A), st.childNodes[0] || null), Le === jt ? rt.call(b, fe ? "html" : "body")[0] : fe ? b.documentElement : st;
  }, Do = function(p) {
    return D.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, No = function(p) {
    return p instanceof d && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof h) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, Ro = function(p) {
    return typeof a == "function" && p instanceof a;
  }, Ut = function(p, b, A) {
    B[p] && ji(B[p], (G) => {
      G.call(e, b, A, Fe);
    });
  }, Po = function(p) {
    let b = null;
    if (Ut("beforeSanitizeElements", p, null), No(p))
      return $t(p), !0;
    const A = it(p.nodeName);
    if (Ut("uponSanitizeElement", p, {
      tagName: A,
      allowedTags: z
    }), p.hasChildNodes() && !Ro(p.firstElementChild) && ut(/<[/\w]/g, p.innerHTML) && ut(/<[/\w]/g, p.textContent) || p.nodeType === ai.progressingInstruction || ne && p.nodeType === ai.comment && ut(/<[/\w]/g, p.data))
      return $t(p), !0;
    if (!z[A] || Tt[A]) {
      if (!Tt[A] && zo(A) && (X.tagNameCheck instanceof RegExp && ut(X.tagNameCheck, A) || X.tagNameCheck instanceof Function && X.tagNameCheck(A)))
        return !1;
      if (Vr && !Ee[A]) {
        const G = R(p) || p.parentNode, st = x(p) || p.childNodes;
        if (st && G) {
          const ot = st.length;
          for (let gt = ot - 1; gt >= 0; --gt) {
            const Dt = y(st[gt], !0);
            Dt.__removalCount = (p.__removalCount || 0) + 1, G.insertBefore(Dt, E(p));
          }
        }
      }
      return $t(p), !0;
    }
    return p instanceof l && !Pc(p) || (A === "noscript" || A === "noembed" || A === "noframes") && ut(/<\/no(script|embed|frames)/i, p.innerHTML) ? ($t(p), !0) : (vt && p.nodeType === ai.text && (b = p.textContent, ji([tt, ie, P], (G) => {
      b = ni(b, G, " ");
    }), p.textContent !== b && (ri(e.removed, {
      element: p.cloneNode()
    }), p.textContent = b)), Ut("afterSanitizeElements", p, null), !1);
  }, qo = function(p, b, A) {
    if (So && (b === "id" || b === "name") && (A in i || A in Nc))
      return !1;
    if (!(Et && !Bt[b] && ut(w, b))) {
      if (!(re && ut(T, b))) {
        if (!H[b] || Bt[b]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(zo(p) && (X.tagNameCheck instanceof RegExp && ut(X.tagNameCheck, p) || X.tagNameCheck instanceof Function && X.tagNameCheck(p)) && (X.attributeNameCheck instanceof RegExp && ut(X.attributeNameCheck, b) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            b === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && ut(X.tagNameCheck, A) || X.tagNameCheck instanceof Function && X.tagNameCheck(A)))
          ) return !1;
        } else if (!Kr[b]) {
          if (!ut(W, ni(A, k, ""))) {
            if (!((b === "src" || b === "xlink:href" || b === "href") && p !== "script" && Sm(A, "data:") === 0 && Ao[p])) {
              if (!(nt && !ut(L, ni(A, k, "")))) {
                if (A)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, zo = function(p) {
    return p !== "annotation-xml" && Is(p, M);
  }, Wo = function(p) {
    Ut("beforeSanitizeAttributes", p, null);
    const {
      attributes: b
    } = p;
    if (!b)
      return;
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: H
    };
    let G = b.length;
    for (; G--; ) {
      const st = b[G], {
        name: ot,
        namespaceURI: gt,
        value: Dt
      } = st, ei = it(ot);
      let ht = ot === "value" ? Dt : km(Dt);
      if (A.attrName = ei, A.attrValue = ht, A.keepAttr = !0, A.forceKeepAttr = void 0, Ut("uponSanitizeAttribute", p, A), ht = A.attrValue, ne && ut(/((--!?|])>)|<\/(style|title)/i, ht)) {
        qi(ot, p);
        continue;
      }
      if (A.forceKeepAttr || (qi(ot, p), !A.keepAttr))
        continue;
      if (!Lt && ut(/\/>/i, ht)) {
        qi(ot, p);
        continue;
      }
      vt && ji([tt, ie, P], (Ho) => {
        ht = ni(ht, Ho, " ");
      });
      const Yo = it(p.nodeName);
      if (qo(Yo, ei, ht)) {
        if (ko && (ei === "id" || ei === "name") && (qi(ot, p), ht = Ic + ht), C && typeof f == "object" && typeof f.getAttributeType == "function" && !gt)
          switch (f.getAttributeType(Yo, ei)) {
            case "TrustedHTML": {
              ht = C.createHTML(ht);
              break;
            }
            case "TrustedScriptURL": {
              ht = C.createScriptURL(ht);
              break;
            }
          }
        try {
          gt ? p.setAttributeNS(gt, ot, ht) : p.setAttribute(ot, ht), No(p) ? $t(p) : Os(e.removed);
        } catch {
        }
      }
    }
    Ut("afterSanitizeAttributes", p, null);
  }, qc = function F(p) {
    let b = null;
    const A = Do(p);
    for (Ut("beforeSanitizeShadowDOM", p, null); b = A.nextNode(); )
      Ut("uponSanitizeShadowNode", b, null), !Po(b) && (b.content instanceof s && F(b.content), Wo(b));
    Ut("afterSanitizeShadowDOM", p, null);
  };
  return e.sanitize = function(F) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = null, A = null, G = null, st = null;
    if (Zr = !F, Zr && (F = "<!-->"), typeof F != "string" && !Ro(F))
      if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string")
          throw oi("dirty is not a string, aborting");
      } else
        throw oi("toString is not a function");
    if (!e.isSupported)
      return F;
    if (Xr || Qr(p), e.removed = [], typeof F == "string" && (Qe = !1), Qe) {
      if (F.nodeName) {
        const Dt = it(F.nodeName);
        if (!z[Dt] || Tt[Dt])
          throw oi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (F instanceof a)
      b = $o("<!---->"), A = b.ownerDocument.importNode(F, !0), A.nodeType === ai.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? b = A : b.appendChild(A);
    else {
      if (!Ae && !vt && !fe && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return C && Ni ? C.createHTML(F) : F;
      if (b = $o(F), !b)
        return Ae ? null : Ni ? S : "";
    }
    b && Gr && $t(b.firstChild);
    const ot = Do(Qe ? F : b);
    for (; G = ot.nextNode(); )
      Po(G) || (G.content instanceof s && qc(G.content), Wo(G));
    if (Qe)
      return F;
    if (Ae) {
      if (Di)
        for (st = Q.call(b.ownerDocument); b.firstChild; )
          st.appendChild(b.firstChild);
      else
        st = b;
      return (H.shadowroot || H.shadowrootmode) && (st = Y.call(r, st, !0)), st;
    }
    let gt = fe ? b.outerHTML : b.innerHTML;
    return fe && z["!doctype"] && b.ownerDocument && b.ownerDocument.doctype && b.ownerDocument.doctype.name && ut(dl, b.ownerDocument.doctype.name) && (gt = "<!DOCTYPE " + b.ownerDocument.doctype.name + `>
` + gt), vt && ji([tt, ie, P], (Dt) => {
      gt = ni(gt, Dt, " ");
    }), C && Ni ? C.createHTML(gt) : gt;
  }, e.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qr(F), Xr = !0;
  }, e.clearConfig = function() {
    Fe = null, Xr = !1;
  }, e.isValidAttribute = function(F, p, b) {
    Fe || Qr({});
    const A = it(F), G = it(p);
    return qo(A, G, b);
  }, e.addHook = function(F, p) {
    typeof p == "function" && (B[F] = B[F] || [], ri(B[F], p));
  }, e.removeHook = function(F) {
    if (B[F])
      return Os(B[F]);
  }, e.removeHooks = function(F) {
    B[F] && (B[F] = []);
  }, e.removeAllHooks = function() {
    B = {};
  }, e;
}
var We = fl();
const tr = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    g: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    b: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    h: (t) => t % 360,
    s: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    l: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    a: (t) => t >= 1 ? 1 : t < 0 ? 0 : t
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t) => {
    const e = t / 255;
    return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t),
  hsl2rgb: ({ h: t, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, s = 2 * i - n;
    switch (r) {
      case "r":
        return tr.hue2rgb(s, n, t + 1 / 3) * 255;
      case "g":
        return tr.hue2rgb(s, n, t) * 255;
      case "b":
        return tr.hue2rgb(s, n, t - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t, g: e, b: i }, r) => {
    t /= 255, e /= 255, i /= 255;
    const n = Math.max(t, e, i), s = Math.min(t, e, i), o = (n + s) / 2;
    if (r === "l")
      return o * 100;
    if (n === s)
      return 0;
    const a = n - s, l = o > 0.5 ? a / (2 - n - s) : a / (n + s);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t) / a + 2) * 60;
      case i:
        return ((t - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
}, qm = {
  /* API */
  clamp: (t, e, i) => e > i ? Math.min(e, Math.max(i, t)) : Math.min(i, Math.max(e, t)),
  round: (t) => Math.round(t * 1e10) / 1e10
}, zm = {
  /* API */
  dec2hex: (t) => {
    const e = Math.round(t).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
}, q = {
  channel: tr,
  lang: qm,
  unit: zm
}, se = {};
for (let t = 0; t <= 255; t++)
  se[t] = q.unit.dec2hex(t);
const at = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Wm {
  constructor() {
    this.type = at.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = at.ALL;
  }
  is(e) {
    return this.type === e;
  }
}
class Ym {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = !1, this.data = e, this.type = new Wm();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = !1, this.data = e, this.type.type = at.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = q.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = q.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = q.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = q.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = q.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = q.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(at.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(at.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(at.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(at.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(at.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(at.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(at.RGB), this.changed = !0, this.data.r = e;
  }
  set g(e) {
    this.type.set(at.RGB), this.changed = !0, this.data.g = e;
  }
  set b(e) {
    this.type.set(at.RGB), this.changed = !0, this.data.b = e;
  }
  set h(e) {
    this.type.set(at.HSL), this.changed = !0, this.data.h = e;
  }
  set s(e) {
    this.type.set(at.HSL), this.changed = !0, this.data.s = e;
  }
  set l(e) {
    this.type.set(at.HSL), this.changed = !0, this.data.l = e;
  }
  set a(e) {
    this.changed = !0, this.data.a = e;
  }
}
const Pr = new Ym({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Ne = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t) => {
    if (t.charCodeAt(0) !== 35)
      return;
    const e = t.match(Ne.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, s = n % 4 === 0, o = n > 4, a = o ? 1 : 17, l = o ? 8 : 4, c = s ? 0 : -1, h = o ? 255 : 15;
    return Pr.set({
      r: (r >> l * (c + 3) & h) * a,
      g: (r >> l * (c + 2) & h) * a,
      b: (r >> l * (c + 1) & h) * a,
      a: s ? (r & h) * a / 255 : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: i, b: r, a: n } = t;
    return n < 1 ? `#${se[Math.round(e)]}${se[Math.round(i)]}${se[Math.round(r)]}${se[Math.round(n * 255)]}` : `#${se[Math.round(e)]}${se[Math.round(i)]}${se[Math.round(r)]}`;
  }
}, _e = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t) => {
    const e = t.match(_e.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return q.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return q.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return q.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return q.channel.clamp.h(parseFloat(t));
  },
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t.match(_e.re);
    if (!i)
      return;
    const [, r, n, s, o, a] = i;
    return Pr.set({
      h: _e._hue2deg(r),
      s: q.channel.clamp.s(parseFloat(n)),
      l: q.channel.clamp.l(parseFloat(s)),
      a: o ? q.channel.clamp.a(a ? parseFloat(o) / 100 : parseFloat(o)) : 1
    }, t);
  },
  stringify: (t) => {
    const { h: e, s: i, l: r, a: n } = t;
    return n < 1 ? `hsla(${q.lang.round(e)}, ${q.lang.round(i)}%, ${q.lang.round(r)}%, ${n})` : `hsl(${q.lang.round(e)}, ${q.lang.round(i)}%, ${q.lang.round(r)}%)`;
  }
}, gi = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t) => {
    t = t.toLowerCase();
    const e = gi.colors[t];
    if (e)
      return Ne.parse(e);
  },
  stringify: (t) => {
    const e = Ne.stringify(t);
    for (const i in gi.colors)
      if (gi.colors[i] === e)
        return i;
  }
}, di = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t.match(di.re);
    if (!i)
      return;
    const [, r, n, s, o, a, l, c, h] = i;
    return Pr.set({
      r: q.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: q.channel.clamp.g(o ? parseFloat(s) * 2.55 : parseFloat(s)),
      b: q.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: c ? q.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: i, b: r, a: n } = t;
    return n < 1 ? `rgba(${q.lang.round(e)}, ${q.lang.round(i)}, ${q.lang.round(r)}, ${q.lang.round(n)})` : `rgb(${q.lang.round(e)}, ${q.lang.round(i)}, ${q.lang.round(r)})`;
  }
}, zt = {
  /* VARIABLES */
  format: {
    keyword: gi,
    hex: Ne,
    rgb: di,
    rgba: di,
    hsl: _e,
    hsla: _e
  },
  /* API */
  parse: (t) => {
    if (typeof t != "string")
      return t;
    const e = Ne.parse(t) || di.parse(t) || _e.parse(t) || gi.parse(t);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t}"`);
  },
  stringify: (t) => !t.changed && t.color ? t.color : t.type.is(at.HSL) || t.data.r === void 0 ? _e.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? di.stringify(t) : Ne.stringify(t)
}, pl = (t, e) => {
  const i = zt.parse(t);
  for (const r in e)
    i[r] = q.channel.clamp[r](e[r]);
  return zt.stringify(i);
}, mi = (t, e, i = 0, r = 1) => {
  if (typeof t != "number")
    return pl(t, { a: e });
  const n = Pr.set({
    r: q.channel.clamp.r(t),
    g: q.channel.clamp.g(e),
    b: q.channel.clamp.b(i),
    a: q.channel.clamp.a(r)
  });
  return zt.stringify(n);
}, Hm = (t) => {
  const { r: e, g: i, b: r } = zt.parse(t), n = 0.2126 * q.channel.toLinear(e) + 0.7152 * q.channel.toLinear(i) + 0.0722 * q.channel.toLinear(r);
  return q.lang.round(n);
}, jm = (t) => Hm(t) >= 0.5, Mi = (t) => !jm(t), gl = (t, e, i) => {
  const r = zt.parse(t), n = r[e], s = q.channel.clamp[e](n + i);
  return n !== s && (r[e] = s), zt.stringify(r);
}, O = (t, e) => gl(t, "l", e), N = (t, e) => gl(t, "l", -e), g = (t, e) => {
  const i = zt.parse(t), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return pl(t, r);
}, Um = (t, e, i = 50) => {
  const { r, g: n, b: s, a: o } = zt.parse(t), { r: a, g: l, b: c, a: h } = zt.parse(e), d = i / 100, u = d * 2 - 1, f = o - h, y = ((u * f === -1 ? u : (u + f) / (1 + u * f)) + 1) / 2, _ = 1 - y, E = r * y + a * _, x = n * y + l * _, R = s * y + c * _, C = o * d + h * (1 - d);
  return mi(E, x, R, C);
}, v = (t, e = 100) => {
  const i = zt.parse(t);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, Um(i, t, e);
};
var ml = "comm", yl = "rule", _l = "decl", Xm = "@import", Gm = "@namespace", Vm = "@keyframes", Km = "@layer", Cl = Math.abs, no = String.fromCharCode;
function xl(t) {
  return t.trim();
}
function er(t, e, i) {
  return t.replace(e, i);
}
function Zm(t, e, i) {
  return t.indexOf(e, i);
}
function Re(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ye(t, e, i) {
  return t.slice(e, i);
}
function Rt(t) {
  return t.length;
}
function Jm(t) {
  return t.length;
}
function Xi(t, e) {
  return e.push(t), t;
}
var qr = 1, He = 1, bl = 0, At = 0, Z = 0, Ze = "";
function oo(t, e, i, r, n, s, o, a) {
  return { value: t, root: e, parent: i, type: r, props: n, children: s, line: qr, column: He, length: o, return: "", siblings: a };
}
function Qm() {
  return Z;
}
function t0() {
  return Z = At > 0 ? Re(Ze, --At) : 0, He--, Z === 10 && (He = 1, qr--), Z;
}
function It() {
  return Z = At < bl ? Re(Ze, At++) : 0, He++, Z === 10 && (He = 1, qr++), Z;
}
function le() {
  return Re(Ze, At);
}
function ir() {
  return At;
}
function zr(t, e) {
  return Ye(Ze, t, e);
}
function wi(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function e0(t) {
  return qr = He = 1, bl = Rt(Ze = t), At = 0, [];
}
function i0(t) {
  return Ze = "", t;
}
function dn(t) {
  return xl(zr(At - 1, In(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function r0(t) {
  for (; (Z = le()) && Z < 33; )
    It();
  return wi(t) > 2 || wi(Z) > 3 ? "" : " ";
}
function n0(t, e) {
  for (; --e && It() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return zr(t, ir() + (e < 6 && le() == 32 && It() == 32));
}
function In(t) {
  for (; It(); )
    switch (Z) {
      case t:
        return At;
      case 34:
      case 39:
        t !== 34 && t !== 39 && In(Z);
        break;
      case 40:
        t === 41 && In(t);
        break;
      case 92:
        It();
        break;
    }
  return At;
}
function o0(t, e) {
  for (; It() && t + Z !== 57; )
    if (t + Z === 84 && le() === 47)
      break;
  return "/*" + zr(e, At - 1) + "*" + no(t === 47 ? t : It());
}
function s0(t) {
  for (; !wi(le()); )
    It();
  return zr(t, At);
}
function a0(t) {
  return i0(rr("", null, null, null, [""], t = e0(t), 0, [0], t));
}
function rr(t, e, i, r, n, s, o, a, l) {
  for (var c = 0, h = 0, d = o, u = 0, f = 0, m = 0, y = 1, _ = 1, E = 1, x = 0, R = "", C = n, S = s, U = r, D = R; _; )
    switch (m = x, x = It()) {
      case 40:
        if (m != 108 && Re(D, d - 1) == 58) {
          Zm(D += er(dn(x), "&", "&\f"), "&\f", Cl(c ? a[c - 1] : 0)) != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += dn(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += r0(m);
        break;
      case 92:
        D += n0(ir() - 1, 7);
        continue;
      case 47:
        switch (le()) {
          case 42:
          case 47:
            Xi(l0(o0(It(), ir()), e, i, l), l), (wi(m || 1) == 5 || wi(le() || 1) == 5) && Rt(D) && Ye(D, -1, void 0) !== " " && (D += " ");
            break;
          default:
            D += "/";
        }
        break;
      case 123 * y:
        a[c++] = Rt(D) * E;
      case 125 * y:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            _ = 0;
          case 59 + h:
            E == -1 && (D = er(D, /\f/g, "")), f > 0 && (Rt(D) - d || y === 0 && m === 47) && Xi(f > 32 ? qs(D + ";", r, i, d - 1, l) : qs(er(D, " ", "") + ";", r, i, d - 2, l), l);
            break;
          case 59:
            D += ";";
          default:
            if (Xi(U = Ps(D, e, i, c, h, n, a, R, C = [], S = [], d, s), s), x === 123)
              if (h === 0)
                rr(D, e, U, U, C, s, d, a, S);
              else {
                switch (u) {
                  case 99:
                    if (Re(D, 3) === 110) break;
                  case 108:
                    if (Re(D, 2) === 97) break;
                  default:
                    h = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                h ? rr(t, U, U, r && Xi(Ps(t, U, U, 0, 0, n, a, R, n, C = [], d, S), S), n, S, d, a, r ? C : S) : rr(D, U, U, U, [""], S, 0, a, S);
              }
        }
        c = h = f = 0, y = E = 1, R = D = "", d = o;
        break;
      case 58:
        d = 1 + Rt(D), f = m;
      default:
        if (y < 1) {
          if (x == 123)
            --y;
          else if (x == 125 && y++ == 0 && t0() == 125)
            continue;
        }
        switch (D += no(x), x * y) {
          case 38:
            E = h > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            a[c++] = (Rt(D) - 1) * E, E = 1;
            break;
          case 64:
            le() === 45 && (D += dn(It())), u = le(), h = d = Rt(R = D += s0(ir())), x++;
            break;
          case 45:
            m === 45 && Rt(D) == 2 && (y = 0);
        }
    }
  return s;
}
function Ps(t, e, i, r, n, s, o, a, l, c, h, d) {
  for (var u = n - 1, f = n === 0 ? s : [""], m = Jm(f), y = 0, _ = 0, E = 0; y < r; ++y)
    for (var x = 0, R = Ye(t, u + 1, u = Cl(_ = o[y])), C = t; x < m; ++x)
      (C = xl(_ > 0 ? f[x] + " " + R : er(R, /&\f/g, f[x]))) && (l[E++] = C);
  return oo(t, e, i, n === 0 ? yl : a, l, c, h, d);
}
function l0(t, e, i, r) {
  return oo(t, e, i, ml, no(Qm()), Ye(t, 2, -2), 0, r);
}
function qs(t, e, i, r, n) {
  return oo(t, e, i, _l, Ye(t, 0, r), Ye(t, r + 1, -1), r, n);
}
function Mn(t, e) {
  for (var i = "", r = 0; r < t.length; r++)
    i += e(t[r], r, t, e) || "";
  return i;
}
function c0(t, e, i, r) {
  switch (t.type) {
    case Km:
      if (t.children.length) break;
    case Xm:
    case Gm:
    case _l:
      return t.return = t.return || t.value;
    case ml:
      return "";
    case Vm:
      return t.return = t.value + "{" + Mn(t.children, r) + "}";
    case yl:
      if (!Rt(t.value = t.props.join(","))) return "";
  }
  return Rt(i = Mn(t.children, r)) ? t.return = t.value + "{" + i + "}" : "";
}
const Gt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, $ = {
  trace: (...t) => {
  },
  debug: (...t) => {
  },
  info: (...t) => {
  },
  warn: (...t) => {
  },
  error: (...t) => {
  },
  fatal: (...t) => {
  }
}, so = function(t = "fatal") {
  let e = Gt.fatal;
  typeof t == "string" ? (t = t.toLowerCase(), t in Gt && (e = Gt[t])) : typeof t == "number" && (e = t), $.trace = () => {
  }, $.debug = () => {
  }, $.info = () => {
  }, $.warn = () => {
  }, $.error = () => {
  }, $.fatal = () => {
  }, e <= Gt.fatal && ($.fatal = console.error ? console.error.bind(console, St("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", St("FATAL"))), e <= Gt.error && ($.error = console.error ? console.error.bind(console, St("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", St("ERROR"))), e <= Gt.warn && ($.warn = console.warn ? console.warn.bind(console, St("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", St("WARN"))), e <= Gt.info && ($.info = console.info ? console.info.bind(console, St("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", St("INFO"))), e <= Gt.debug && ($.debug = console.debug ? console.debug.bind(console, St("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", St("DEBUG"))), e <= Gt.trace && ($.trace = console.debug ? console.debug.bind(console, St("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", St("TRACE")));
}, St = (t) => `%c${Pd().format("ss.SSS")} : ${t} : `, $i = /<br\s*\/?>/gi, h0 = (t) => t ? vl(t).replace(/\\n/g, "#br#").split("#br#") : [""], u0 = /* @__PURE__ */ (() => {
  let t = !1;
  return () => {
    t || (d0(), t = !0);
  };
})();
function d0() {
  const t = "data-temp-href-target";
  We.addHook("beforeSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") || "");
  }), We.addHook("afterSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) || ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
  });
}
const Tl = (t) => (u0(), We.sanitize(t)), zs = (t, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== !1) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t = Tl(t) : r !== "loose" && (t = vl(t), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = t.replace(/=/g, "&equals;"), t = m0(t));
  }
  return t;
}, Ai = (t, e) => t && (e.dompurifyConfig ? t = We.sanitize(zs(t, e), e.dompurifyConfig).toString() : t = We.sanitize(zs(t, e), {
  FORBID_TAGS: ["style"]
}).toString(), t), f0 = (t, e) => typeof t == "string" ? Ai(t, e) : t.flat().map((i) => Ai(i, e)), p0 = (t) => $i.test(t), g0 = (t) => t.split($i), m0 = (t) => t.replace(/#br#/g, "<br/>"), vl = (t) => t.replace($i, "#br#"), y0 = (t) => {
  let e = "";
  return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
}, Sl = (t) => !(t === !1 || ["false", "null", "0"].includes(String(t).trim().toLowerCase())), _0 = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.max(...e);
}, C0 = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.min(...e);
}, O1 = function(t) {
  const e = t.split(/(,)/), i = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n === "," && r > 0 && r + 1 < e.length) {
      const s = e[r - 1], o = e[r + 1];
      x0(s, o) && (n = s + "," + o, r++, i.pop());
    }
    i.push(b0(n));
  }
  return i.join("");
}, $n = (t, e) => Math.max(0, t.split(e).length - 1), x0 = (t, e) => {
  const i = $n(t, "~"), r = $n(e, "~");
  return i === 1 && r === 1;
}, b0 = (t) => {
  const e = $n(t, "~");
  let i = !1;
  if (e <= 1)
    return t;
  e % 2 !== 0 && t.startsWith("~") && (t = t.substring(1), i = !0);
  const r = [...t];
  let n = r.indexOf("~"), s = r.lastIndexOf("~");
  for (; n !== -1 && s !== -1 && n !== s; )
    r[n] = "<", r[s] = ">", n = r.indexOf("~"), s = r.lastIndexOf("~");
  return i && r.unshift("~"), r.join("");
}, Ws = () => window.MathMLElement !== void 0, Dn = /\$\$(.*)\$\$/g, Ys = (t) => {
  var e;
  return (((e = t.match(Dn)) == null ? void 0 : e.length) ?? 0) > 0;
}, I1 = async (t, e) => {
  t = await T0(t, e);
  const i = document.createElement("div");
  i.innerHTML = t, i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0";
  const r = document.querySelector("body");
  r == null || r.insertAdjacentElement("beforeend", i);
  const n = { width: i.clientWidth, height: i.clientHeight };
  return i.remove(), n;
}, T0 = async (t, e) => {
  if (!Ys(t))
    return t;
  if (!Ws() && !e.legacyMathML)
    return t.replace(Dn, "MathML is unsupported in this environment.");
  const { default: i } = await import("./index-ErFAu9zp.mjs").then((r) => r.aW);
  return t.split($i).map(
    (r) => Ys(r) ? `
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${r}
            </div>
          ` : `<div>${r}</div>`
  ).join("").replace(
    Dn,
    (r, n) => i.renderToString(n, {
      throwOnError: !0,
      displayMode: !0,
      output: Ws() ? "mathml" : "htmlAndMathml"
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
  );
}, ao = {
  getRows: h0,
  sanitizeText: Ai,
  sanitizeTextOrArray: f0,
  hasBreaks: p0,
  splitBreaks: g0,
  lineBreakRegex: $i,
  removeScript: Tl,
  getUrl: y0,
  evaluate: Sl,
  getMax: _0,
  getMin: C0
}, ft = (t, e) => e ? g(t, { s: -40, l: 10 }) : g(t, { s: -40, l: -10 }), Wr = "#ffffff", Yr = "#f2f2f2";
let v0 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || g(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || g(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || ft(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || ft(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || v(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || v(this.tertiaryColor), this.lineColor = this.lineColor || v(this.background), this.arrowheadColor = this.arrowheadColor || v(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || N(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || v(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || O(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.darkMode)
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
        this["cScale" + f] = N(this["cScale" + f], 75);
    else
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
        this["cScale" + f] = N(this["cScale" + f], 25);
    for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
      this["cScaleInv" + f] = this["cScaleInv" + f] || v(this["cScale" + f]);
    for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
      this.darkMode ? this["cScalePeer" + f] = this["cScalePeer" + f] || O(this["cScale" + f], 10) : this["cScalePeer" + f] = this["cScalePeer" + f] || N(this["cScale" + f], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
      this["cScaleLabel" + f] = this["cScaleLabel" + f] || this.scaleLabelColor;
    const u = this.darkMode ? -4 : -1;
    for (let f = 0; f < 5; f++)
      this["surface" + f] = this["surface" + f] || g(this.mainBkg, { h: 180, s: -15, l: u * (5 + f * 3) }), this["surfacePeer" + f] = this["surfacePeer" + f] || g(this.mainBkg, { h: 180, s: -15, l: u * (8 + f * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || g(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || g(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || g(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || g(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || g(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Mi(this.quadrant1Fill) ? O(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Wr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const S0 = (t) => {
  const e = new v0();
  return e.calculate(t), e;
};
let k0 = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = O(this.primaryColor, 16), this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = v(this.background), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = O(v("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = mi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = N("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = N(this.sectionBkgColor, 10), this.taskBorderColor = mi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = mi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.secondBkg = O(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = O(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = O(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 });
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || v(this["cScale" + u]);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScalePeer" + u] = this["cScalePeer" + u] || O(this["cScale" + u], 10);
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(-10 + u * 4) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(-7 + u * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["pie" + u] = this["cScale" + u];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Mi(this.quadrant1Fill) ? O(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? N(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = O(this.secondaryColor, 20), this.git1 = O(this.pie2 || this.secondaryColor, 20), this.git2 = O(this.pie3 || this.tertiaryColor, 20), this.git3 = O(this.pie4 || g(this.primaryColor, { h: -30 }), 20), this.git4 = O(this.pie5 || g(this.primaryColor, { h: -60 }), 20), this.git5 = O(this.pie6 || g(this.primaryColor, { h: -90 }), 10), this.git6 = O(this.pie7 || g(this.primaryColor, { h: 60 }), 10), this.git7 = O(this.pie8 || g(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || O(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || O(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const w0 = (t) => {
  const e = new k0();
  return e.calculate(t), e;
};
let A0 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = g(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = mi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || N(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || N(this.tertiaryColor, 40);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScale" + u] = N(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || N(this["cScale" + u], 25);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || g(this["cScale" + u], { h: 180 });
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { h: 30, l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { h: 30, l: -(7 + u * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || v(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || v(this.labelTextColor);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
        this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = O(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || g(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Mi(this.quadrant1Fill) ? O(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || N(v(this.git0), 25), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Wr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const B0 = (t) => {
  const e = new A0();
  return e.calculate(t), e;
};
let E0 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = O("#cde498", 10), this.primaryBorderColor = ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.primaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.actorBorder = N(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || N(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || N(this.tertiaryColor, 40);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScale" + u] = N(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || N(this["cScale" + u], 25);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || g(this["cScale" + u], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(8 + u * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Mi(this.quadrant1Fill) ? O(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = N(this.git0, 25), this.git1 = N(this.git1, 25), this.git2 = N(this.git2, 25), this.git3 = N(this.git3, 25), this.git4 = N(this.git4, 25), this.git5 = N(this.git5, 25), this.git6 = N(this.git6, 25), this.git7 = N(this.git7, 25)), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Wr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const L0 = (t) => {
  const e = new E0();
  return e.calculate(t), e;
};
class F0 {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = O(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.secondBkg = O(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = O(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || v(this["cScale" + u]);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || O(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || N(this["cScale" + u], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { l: -(8 + u * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = O(this.contrast, 30), this.sectionBkgColor2 = O(this.contrast, 30), this.taskBorderColor = N(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = O(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = N(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 });
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["pie" + u] = this["cScale" + u];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Mi(this.quadrant1Fill) ? O(this.quadrant1Fill) : N(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = N(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || g(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || g(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || g(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || g(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || g(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Wr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
}
const O0 = (t) => {
  const e = new F0();
  return e.calculate(t), e;
}, Jt = {
  base: {
    getThemeVariables: S0
  },
  dark: {
    getThemeVariables: w0
  },
  default: {
    getThemeVariables: B0
  },
  forest: {
    getThemeVariables: L0
  },
  neutral: {
    getThemeVariables: O0
  }
}, Vt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  theme: "default",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "maxEdges"
  ],
  legacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16
}, kl = {
  ...Vt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Jt.default.getThemeVariables(),
  sequence: {
    ...Vt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...Vt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Vt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...Vt.pie,
    useWidth: 984
  },
  xyChart: {
    ...Vt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...Vt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...Vt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: !1
  },
  sankey: {
    ...Vt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: !1
  }
}, wl = (t, e = "") => Object.keys(t).reduce((i, r) => Array.isArray(t[r]) ? i : typeof t[r] == "object" && t[r] !== null ? [...i, e + r, ...wl(t[r], "")] : [...i, e + r], []), I0 = new Set(wl(kl, "")), M0 = kl, _r = (t) => {
  if ($.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
    if (Array.isArray(t)) {
      t.forEach((e) => _r(e));
      return;
    }
    for (const e of Object.keys(t)) {
      if ($.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !I0.has(e) || t[e] == null) {
        $.debug("sanitize deleting key: ", e), delete t[e];
        continue;
      }
      if (typeof t[e] == "object") {
        $.debug("sanitizing object", e), _r(t[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && ($.debug("sanitizing css option", e), t[e] = $0(t[e]));
    }
    if (t.themeVariables)
      for (const e of Object.keys(t.themeVariables)) {
        const i = t.themeVariables[e];
        i != null && i.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
      }
    $.debug("After sanitization", t);
  }
}, $0 = (t) => {
  let e = 0, i = 0;
  for (const r of t) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, Al = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, yi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, D0 = /\s*%%.*\n/gm;
class Bl extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}
const je = {}, Hr = function(t, e) {
  t = t.replace(Al, "").replace(yi, "").replace(D0, `
`);
  for (const [i, { detector: r }] of Object.entries(je))
    if (r(t, e))
      return i;
  throw new Bl(
    `No diagram type detected matching given configuration for text: ${t}`
  );
}, El = (...t) => {
  for (const { id: e, detector: i, loader: r } of t)
    Ll(e, i, r);
}, Ll = (t, e, i) => {
  je[t] ? $.error(`Detector with key ${t} already exists`) : je[t] = { detector: e, loader: i }, $.debug(`Detector with key ${t} added${i ? " with loader" : ""}`);
}, N0 = (t) => je[t].loader, Nn = (t, e, { depth: i = 2, clobber: r = !1 } = {}) => {
  const n = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((s) => Nn(t, s, n)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((s) => {
    t.includes(s) || t.push(s);
  }), t) : t === void 0 || i <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((s) => {
    typeof e[s] == "object" && (t[s] === void 0 || typeof t[s] == "object") ? (t[s] === void 0 && (t[s] = Array.isArray(e[s]) ? [] : {}), t[s] = Nn(t[s], e[s], { depth: i - 1, clobber: r })) : (r || typeof t[s] != "object" && typeof e[s] != "object") && (t[s] = e[s]);
  }), t);
}, lt = Nn, R0 = "​", P0 = {
  curveBasis: nm,
  curveBasisClosed: om,
  curveBasisOpen: sm,
  curveBumpX: im,
  curveBumpY: rm,
  curveBundle: am,
  curveCardinalClosed: cm,
  curveCardinalOpen: hm,
  curveCardinal: lm,
  curveCatmullRomClosed: dm,
  curveCatmullRomOpen: fm,
  curveCatmullRom: um,
  curveLinear: em,
  curveLinearClosed: pm,
  curveMonotoneX: gm,
  curveMonotoneY: mm,
  curveNatural: ym,
  curveStep: _m,
  curveStepAfter: xm,
  curveStepBefore: Cm
}, q0 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, z0 = function(t, e) {
  const i = Fl(t, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const o = i.map((a) => a.args);
    _r(o), r = lt(r, [...o]);
  } else
    r = i.args;
  if (!r)
    return;
  let n = Hr(t, e);
  const s = "config";
  return r[s] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[s], delete r[s]), r;
}, Fl = function(t, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${q0.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t = t.trim().replace(i, "").replace(/'/gm, '"'), $.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`
    );
    let r;
    const n = [];
    for (; (r = yi.exec(t)) !== null; )
      if (r.index === yi.lastIndex && yi.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const s = r[1] ? r[1] : r[2], o = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: s, args: o });
      }
    return n.length === 0 ? { type: t, args: null } : n.length === 1 ? n[0] : n;
  } catch (i) {
    return $.error(
      `ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`
    ), { type: void 0, args: null };
  }
}, W0 = function(t) {
  return t.replace(yi, "");
}, Y0 = function(t, e) {
  for (const [i, r] of e.entries())
    if (r.match(t))
      return i;
  return -1;
};
function H0(t, e) {
  if (!t)
    return e;
  const i = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
  return P0[i] ?? e;
}
function j0(t, e) {
  const i = t.trim();
  if (i)
    return e.securityLevel !== "loose" ? Hc(i) : i;
}
const U0 = (t, ...e) => {
  const i = t.split("."), r = i.length - 1, n = i[r];
  let s = window;
  for (let o = 0; o < r; o++)
    if (s = s[i[o]], !s) {
      $.error(`Function name: ${t} not found in window`);
      return;
    }
  s[n](...e);
};
function Ol(t, e) {
  return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function X0(t) {
  let e, i = 0;
  t.forEach((n) => {
    i += Ol(n, e), e = n;
  });
  const r = i / 2;
  return lo(t, r);
}
function G0(t) {
  return t.length === 1 ? t[0] : X0(t);
}
const Hs = (t, e = 2) => {
  const i = Math.pow(10, e);
  return Math.round(t * i) / i;
}, lo = (t, e) => {
  let i, r = e;
  for (const n of t) {
    if (i) {
      const s = Ol(n, i);
      if (s < r)
        r -= s;
      else {
        const o = r / s;
        if (o <= 0)
          return i;
        if (o >= 1)
          return { x: n.x, y: n.y };
        if (o > 0 && o < 1)
          return {
            x: Hs((1 - o) * i.x + o * n.x, 5),
            y: Hs((1 - o) * i.y + o * n.y, 5)
          };
      }
    }
    i = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, V0 = (t, e, i) => {
  $.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  const n = lo(e, 25), s = t ? 10 : 5, o = Math.atan2(e[0].y - n.y, e[0].x - n.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(o) * s + (e[0].x + n.x) / 2, a.y = -Math.cos(o) * s + (e[0].y + n.y) / 2, a;
};
function K0(t, e, i) {
  const r = structuredClone(i);
  $.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
  const n = 25 + t, s = lo(r, n), o = 10 + t * 0.5, a = Math.atan2(r[0].y - s.y, r[0].x - s.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * o + (r[0].x + s.x) / 2, l.y = -Math.cos(a + Math.PI) * o + (r[0].y + s.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * o + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * o + (r[0].y + s.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * o + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a) * o + (r[0].y + s.y) / 2 - 5) : (l.x = Math.sin(a) * o + (r[0].x + s.x) / 2, l.y = -Math.cos(a) * o + (r[0].y + s.y) / 2), l;
}
function Z0(t) {
  let e = "", i = "";
  for (const r of t)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
let js = 0;
const J0 = () => (js++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + js);
function Q0(t) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
const ty = (t) => Q0(t.length), ey = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, iy = function(t, e) {
  const i = e.text.replace(ao.lineBreakRegex, " "), [, r] = ho(e.fontSize), n = t.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const s = n.append("tspan");
  return s.attr("x", e.x + e.textMargin * 2), s.attr("fill", e.fill), s.text(i), n;
}, ry = Fi(
  (t, e, i) => {
    if (!t || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), ao.lineBreakRegex.test(t)))
      return t;
    const r = t.split(" "), n = [];
    let s = "";
    return r.forEach((o, a) => {
      const l = Cr(`${o} `, i), c = Cr(s, i);
      if (l > e) {
        const { hyphenatedStrings: u, remainingWord: f } = ny(o, e, "-", i);
        n.push(s, ...u), s = f;
      } else c + l >= e ? (n.push(s), s = o) : s = [s, o].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(s);
    }), n.filter((o) => o !== "").join(i.joinWith);
  },
  (t, e, i) => `${t}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
), ny = Fi(
  (t, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t], s = [];
    let o = "";
    return n.forEach((a, l) => {
      const c = `${o}${a}`;
      if (Cr(c, r) >= e) {
        const d = l + 1, u = n.length === d, f = `${c}${i}`;
        s.push(u ? c : f), o = "";
      } else
        o = c;
    }), { hyphenatedStrings: s, remainingWord: o };
  },
  (t, e, i = "-", r) => `${t}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function oy(t, e) {
  return co(t, e).height;
}
function Cr(t, e) {
  return co(t, e).width;
}
const co = Fi(
  (t, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = e;
    if (!t)
      return { width: 0, height: 0 };
    const [, s] = ho(i), o = ["sans-serif", r], a = t.split(ao.lineBreakRegex), l = [], c = kt("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const u of o) {
      let f = 0;
      const m = { width: 0, height: 0, lineHeight: 0 };
      for (const y of a) {
        const _ = ey();
        _.text = y || R0;
        const E = iy(h, _).style("font-size", s).style("font-weight", n).style("font-family", u), x = (E._groups || E)[0][0].getBBox();
        if (x.width === 0 && x.height === 0)
          throw new Error("svg element not in render tree");
        m.width = Math.round(Math.max(m.width, x.width)), f = Math.round(x.height), m.height += f, m.lineHeight = Math.round(Math.max(m.lineHeight, f));
      }
      l.push(m);
    }
    h.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  },
  (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
class sy {
  constructor(e = !1, i) {
    this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
}
let Gi;
const ay = function(t) {
  return Gi = Gi || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Gi.innerHTML = t, unescape(Gi.textContent);
};
function Il(t) {
  return "str" in t;
}
const ly = (t, e, i, r) => {
  var n;
  if (!r)
    return;
  const s = (n = t.node()) == null ? void 0 : n.getBBox();
  s && t.append("text").text(r).attr("x", s.x + s.width / 2).attr("y", -i).attr("class", e);
}, ho = (t) => {
  if (typeof t == "number")
    return [t, t + "px"];
  const e = parseInt(t ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t === String(e) ? [e, t + "px"] : [e, t];
};
function Ml(t, e) {
  return vd({}, t, e);
}
const _i = {
  assignWithDepth: lt,
  wrapLabel: ry,
  calculateTextHeight: oy,
  calculateTextWidth: Cr,
  calculateTextDimensions: co,
  cleanAndMerge: Ml,
  detectInit: z0,
  detectDirective: Fl,
  isSubstringInArray: Y0,
  interpolateToCurve: H0,
  calcLabelPosition: G0,
  calcCardinalityPosition: V0,
  calcTerminalLabelPosition: K0,
  formatUrl: j0,
  getStylesFromArray: Z0,
  generateId: J0,
  random: ty,
  runFunc: U0,
  entityDecode: ay,
  insertTitle: ly,
  parseFontSize: ho,
  InitIDGenerator: sy
}, cy = function(t) {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
}, hy = function(t) {
  return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, Us = "10.9.3", Ue = Object.freeze(M0);
let mt = lt({}, Ue), $l, Xe = [], Ci = lt({}, Ue);
const jr = (t, e) => {
  let i = lt({}, t), r = {};
  for (const n of e)
    Rl(n), r = lt(r, n);
  if (i = lt(i, r), r.theme && r.theme in Jt) {
    const n = lt({}, $l), s = lt(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Jt && (i.themeVariables = Jt[i.theme].getThemeVariables(s));
  }
  return Ci = i, Pl(Ci), Ci;
}, uy = (t) => (mt = lt({}, Ue), mt = lt(mt, t), t.theme && Jt[t.theme] && (mt.themeVariables = Jt[t.theme].getThemeVariables(t.themeVariables)), jr(mt, Xe), mt), dy = (t) => {
  $l = lt({}, t);
}, fy = (t) => (mt = lt(mt, t), jr(mt, Xe), mt), Dl = () => lt({}, mt), Nl = (t) => (Pl(t), lt(Ci, t), Wt()), Wt = () => lt({}, Ci), Rl = (t) => {
  t && (["secure", ...mt.secure ?? []].forEach((e) => {
    Object.hasOwn(t, e) && ($.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
  }), Object.keys(t).forEach((e) => {
    e.startsWith("__") && delete t[e];
  }), Object.keys(t).forEach((e) => {
    typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && Rl(t[e]);
  }));
}, py = (t) => {
  _r(t), t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily) && (t.themeVariables = { fontFamily: t.fontFamily }), Xe.push(t), jr(mt, Xe);
}, xr = (t = mt) => {
  Xe = [], jr(t, Xe);
}, gy = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, Xs = {}, my = (t) => {
  Xs[t] || ($.warn(gy[t]), Xs[t] = !0);
}, Pl = (t) => {
  t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && my("LAZY_LOAD_DEPRECATED");
}, ql = "c4", yy = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t), _y = async () => {
  const { diagram: t } = await import("./c4Diagram-3d4e48cf-bxRJEMG_.mjs");
  return { id: ql, diagram: t };
}, Cy = {
  id: ql,
  detector: yy,
  loader: _y
}, xy = Cy, zl = "flowchart", by = (t, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t);
}, Ty = async () => {
  const { diagram: t } = await import("./flowDiagram-66a62f08-B_LsfAMp.mjs");
  return { id: zl, diagram: t };
}, vy = {
  id: zl,
  detector: by,
  loader: Ty
}, Sy = vy, Wl = "flowchart-v2", ky = (t, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(t);
}, wy = async () => {
  const { diagram: t } = await import("./flowDiagram-v2-96b9c2cf-DbFdGbXj.mjs");
  return { id: Wl, diagram: t };
}, Ay = {
  id: Wl,
  detector: ky,
  loader: wy
}, By = Ay, Yl = "er", Ey = (t) => /^\s*erDiagram/.test(t), Ly = async () => {
  const { diagram: t } = await import("./erDiagram-9861fffd-DUSLnRFi.mjs");
  return { id: Yl, diagram: t };
}, Fy = {
  id: Yl,
  detector: Ey,
  loader: Ly
}, Oy = Fy, Hl = "gitGraph", Iy = (t) => /^\s*gitGraph/.test(t), My = async () => {
  const { diagram: t } = await import("./gitGraphDiagram-72cf32ee-tsI8d05F.mjs");
  return { id: Hl, diagram: t };
}, $y = {
  id: Hl,
  detector: Iy,
  loader: My
}, Dy = $y, jl = "gantt", Ny = (t) => /^\s*gantt/.test(t), Ry = async () => {
  const { diagram: t } = await import("./ganttDiagram-c361ad54-BRJC-LcI.mjs");
  return { id: jl, diagram: t };
}, Py = {
  id: jl,
  detector: Ny,
  loader: Ry
}, qy = Py, Ul = "info", zy = (t) => /^\s*info/.test(t), Wy = async () => {
  const { diagram: t } = await import("./infoDiagram-f8f76790-DsJugJgb.mjs");
  return { id: Ul, diagram: t };
}, Yy = {
  id: Ul,
  detector: zy,
  loader: Wy
}, Xl = "pie", Hy = (t) => /^\s*pie/.test(t), jy = async () => {
  const { diagram: t } = await import("./pieDiagram-8a3498a8-DGuZsgyH.mjs");
  return { id: Xl, diagram: t };
}, Uy = {
  id: Xl,
  detector: Hy,
  loader: jy
}, Gl = "quadrantChart", Xy = (t) => /^\s*quadrantChart/.test(t), Gy = async () => {
  const { diagram: t } = await import("./quadrantDiagram-120e2f19-D9Vbz5nL.mjs");
  return { id: Gl, diagram: t };
}, Vy = {
  id: Gl,
  detector: Xy,
  loader: Gy
}, Ky = Vy, Vl = "xychart", Zy = (t) => /^\s*xychart-beta/.test(t), Jy = async () => {
  const { diagram: t } = await import("./xychartDiagram-e933f94c-pj7qGEpz.mjs");
  return { id: Vl, diagram: t };
}, Qy = {
  id: Vl,
  detector: Zy,
  loader: Jy
}, t_ = Qy, Kl = "requirement", e_ = (t) => /^\s*requirement(Diagram)?/.test(t), i_ = async () => {
  const { diagram: t } = await import("./requirementDiagram-deff3bca-EPsdR1SA.mjs");
  return { id: Kl, diagram: t };
}, r_ = {
  id: Kl,
  detector: e_,
  loader: i_
}, n_ = r_, Zl = "sequence", o_ = (t) => /^\s*sequenceDiagram/.test(t), s_ = async () => {
  const { diagram: t } = await import("./sequenceDiagram-704730f1-DoFjn_OD.mjs");
  return { id: Zl, diagram: t };
}, a_ = {
  id: Zl,
  detector: o_,
  loader: s_
}, l_ = a_, Jl = "class", c_ = (t, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(t);
}, h_ = async () => {
  const { diagram: t } = await import("./classDiagram-70f12bd4-CWpFkpdC.mjs");
  return { id: Jl, diagram: t };
}, u_ = {
  id: Jl,
  detector: c_,
  loader: h_
}, d_ = u_, Ql = "classDiagram", f_ = (t, e) => {
  var i;
  return /^\s*classDiagram/.test(t) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(t);
}, p_ = async () => {
  const { diagram: t } = await import("./classDiagram-v2-f2320105-CviWzN-M.mjs");
  return { id: Ql, diagram: t };
}, g_ = {
  id: Ql,
  detector: f_,
  loader: p_
}, m_ = g_, tc = "state", y_ = (t, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(t);
}, __ = async () => {
  const { diagram: t } = await import("./stateDiagram-587899a1-BEgfeKwD.mjs");
  return { id: tc, diagram: t };
}, C_ = {
  id: tc,
  detector: y_,
  loader: __
}, x_ = C_, ec = "stateDiagram", b_ = (t, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t) || /^\s*stateDiagram/.test(t) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
}, T_ = async () => {
  const { diagram: t } = await import("./stateDiagram-v2-d93cdb3a-c_FLqAlW.mjs");
  return { id: ec, diagram: t };
}, v_ = {
  id: ec,
  detector: b_,
  loader: T_
}, S_ = v_, ic = "journey", k_ = (t) => /^\s*journey/.test(t), w_ = async () => {
  const { diagram: t } = await import("./journeyDiagram-49397b02-DtFroPzN.mjs");
  return { id: ic, diagram: t };
}, A_ = {
  id: ic,
  detector: k_,
  loader: w_
}, B_ = A_, E_ = function(t, e) {
  for (let i of e)
    t.attr(i[0], i[1]);
}, L_ = function(t, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t), r.set("width", e)), r;
}, rc = function(t, e, i, r) {
  const n = L_(e, i, r);
  E_(t, n);
}, F_ = function(t, e, i, r) {
  const n = e.node().getBBox(), s = n.width, o = n.height;
  $.info(`SVG bounds: ${s}x${o}`, n);
  let a = 0, l = 0;
  $.info(`Graph bounds: ${a}x${l}`, t), a = s + i * 2, l = o + i * 2, $.info(`Calculated bounds: ${a}x${l}`), rc(e, l, a, r);
  const c = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", c);
}, nr = {}, O_ = (t, e, i) => {
  let r = "";
  return t in nr && nr[t] ? r = nr[t](i) : $.warn(`No theme found for ${t}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
}, I_ = (t, e) => {
  e !== void 0 && (nr[t] = e);
}, M_ = O_;
let uo = "", fo = "", po = "";
const go = (t) => Ai(t, Wt()), $_ = () => {
  uo = "", po = "", fo = "";
}, D_ = (t) => {
  uo = go(t).replace(/^\s+/g, "");
}, N_ = () => uo, R_ = (t) => {
  po = go(t).replace(/\n\s+/g, `
`);
}, P_ = () => po, q_ = (t) => {
  fo = go(t);
}, z_ = () => fo, W_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: $_,
  getAccDescription: P_,
  getAccTitle: N_,
  getDiagramTitle: z_,
  setAccDescription: R_,
  setAccTitle: D_,
  setDiagramTitle: q_
}, Symbol.toStringTag, { value: "Module" })), Y_ = $, H_ = so, mo = Wt, R1 = Nl, P1 = Ue, j_ = (t) => Ai(t, mo()), U_ = F_, X_ = () => W_, br = {}, Tr = (t, e, i) => {
  var r;
  if (br[t])
    throw new Error(`Diagram ${t} already registered.`);
  br[t] = e, i && Ll(t, i), I_(t, e.styles), (r = e.injectUtils) == null || r.call(
    e,
    Y_,
    H_,
    mo,
    j_,
    U_,
    X_(),
    () => {
    }
  );
}, yo = (t) => {
  if (t in br)
    return br[t];
  throw new G_(t);
};
class G_ extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}
const V_ = (t) => {
  var e;
  const { securityLevel: i } = mo();
  let r = kt("body");
  if (i === "sandbox") {
    const o = ((e = kt(`#i${t}`).node()) == null ? void 0 : e.contentDocument) ?? document;
    r = kt(o.body);
  }
  return r.select(`#${t}`);
}, K_ = (t, e, i) => {
  $.debug(`rendering svg for syntax error
`);
  const r = V_(e), n = r.append("g");
  r.attr("viewBox", "0 0 2412 512"), rc(r, 100, 512, !0), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
}, nc = { draw: K_ }, Z_ = nc, J_ = {
  db: {},
  renderer: nc,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
}, Q_ = J_, oc = "flowchart-elk", tC = (t, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
}, eC = async () => {
  const { diagram: t } = await import("./flowchart-elk-definition-4a651766-hkz8nZ1H.mjs");
  return { id: oc, diagram: t };
}, iC = {
  id: oc,
  detector: tC,
  loader: eC
}, rC = iC, sc = "timeline", nC = (t) => /^\s*timeline/.test(t), oC = async () => {
  const { diagram: t } = await import("./timeline-definition-85554ec2-ClVPTrC1.mjs");
  return { id: sc, diagram: t };
}, sC = {
  id: sc,
  detector: nC,
  loader: oC
}, aC = sC, ac = "mindmap", lC = (t) => /^\s*mindmap/.test(t), cC = async () => {
  const { diagram: t } = await import("./mindmap-definition-fc14e90a-VqnaB-0Y.mjs");
  return { id: ac, diagram: t };
}, hC = {
  id: ac,
  detector: lC,
  loader: cC
}, uC = hC, lc = "sankey", dC = (t) => /^\s*sankey-beta/.test(t), fC = async () => {
  const { diagram: t } = await import("./sankeyDiagram-04a897e0-a3yQnp2V.mjs");
  return { id: lc, diagram: t };
}, pC = {
  id: lc,
  detector: dC,
  loader: fC
}, gC = pC, cc = "block", mC = (t) => /^\s*block-beta/.test(t), yC = async () => {
  const { diagram: t } = await import("./blockDiagram-38ab4fdb-CPcdxARu.mjs");
  return { id: cc, diagram: t };
}, _C = {
  id: cc,
  detector: mC,
  loader: yC
}, CC = _C;
let Gs = !1;
const _o = () => {
  Gs || (Gs = !0, Tr("error", Q_, (t) => t.toLowerCase().trim() === "error"), Tr(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t) => t.toLowerCase().trimStart().startsWith("---")
  ), El(
    xy,
    m_,
    d_,
    Oy,
    qy,
    Yy,
    Uy,
    n_,
    l_,
    rC,
    By,
    Sy,
    uC,
    aC,
    Dy,
    S_,
    x_,
    B_,
    Ky,
    gC,
    t_,
    CC
  ));
};
class hc {
  constructor(e, i = {}) {
    this.text = e, this.metadata = i, this.type = "graph", this.text = cy(e), this.text += `
`;
    const r = Wt();
    try {
      this.type = Hr(e, r);
    } catch (s) {
      this.type = "error", this.detectError = s;
    }
    const n = yo(this.type);
    $.debug("Type " + this.type), this.db = n.db, this.renderer = n.renderer, this.parser = n.parser, this.parser.parser.yy = this.db, this.init = n.init, this.parse();
  }
  parse() {
    var e, i, r, n, s;
    if (this.detectError)
      throw this.detectError;
    (i = (e = this.db).clear) == null || i.call(e);
    const o = Wt();
    (r = this.init) == null || r.call(this, o), this.metadata.title && ((s = (n = this.db).setDiagramTitle) == null || s.call(n, this.metadata.title)), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}
const xC = async (t, e = {}) => {
  const i = Hr(t, Wt());
  try {
    yo(i);
  } catch {
    const n = N0(i);
    if (!n)
      throw new Bl(`Diagram ${i} not found.`);
    const { id: s, diagram: o } = await n();
    Tr(s, o);
  }
  return new hc(t, e);
};
let Vs = [];
const bC = () => {
  Vs.forEach((t) => {
    t();
  }), Vs = [];
}, TC = "graphics-document document";
function vC(t, e) {
  t.attr("role", TC), e !== "" && t.attr("aria-roledescription", e);
}
function SC(t, e, i, r) {
  if (t.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t.attr("aria-describedby", n), t.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t.attr("aria-labelledby", n), t.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
const kC = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function uc(t) {
  return typeof t > "u" || t === null;
}
function wC(t) {
  return typeof t == "object" && t !== null;
}
function AC(t) {
  return Array.isArray(t) ? t : uc(t) ? [] : [t];
}
function BC(t, e) {
  var i, r, n, s;
  if (e)
    for (s = Object.keys(e), i = 0, r = s.length; i < r; i += 1)
      n = s[i], t[n] = e[n];
  return t;
}
function EC(t, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t;
  return i;
}
function LC(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var FC = uc, OC = wC, IC = AC, MC = EC, $C = LC, DC = BC, dt = {
  isNothing: FC,
  isObject: OC,
  toArray: IC,
  repeat: MC,
  isNegativeZero: $C,
  extend: DC
};
function dc(t, e) {
  var i = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (i += 'in "' + t.mark.name + '" '), i += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (i += `

` + t.mark.snippet), r + " " + i) : r;
}
function Bi(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = dc(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Bi.prototype = Object.create(Error.prototype);
Bi.prototype.constructor = Bi;
Bi.prototype.toString = function(e) {
  return this.name + ": " + dc(this, e);
};
var Kt = Bi;
function fn(t, e, i, r, n) {
  var s = "", o = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (s = " ... ", e = r - a + s.length), i - r > a && (o = " ...", i = r + a - o.length), {
    str: s + t.slice(e, i).replace(/\t/g, "→") + o,
    pos: r - e + s.length
    // relative position
  };
}
function pn(t, e) {
  return dt.repeat(" ", e - t.length) + t;
}
function NC(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], s, o = -1; s = i.exec(t.buffer); )
    n.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && o < 0 && (o = r.length - 2);
  o < 0 && (o = r.length - 1);
  var a = "", l, c, h = Math.min(t.line + e.linesAfter, n.length).toString().length, d = e.maxLength - (e.indent + h + 3);
  for (l = 1; l <= e.linesBefore && !(o - l < 0); l++)
    c = fn(
      t.buffer,
      r[o - l],
      n[o - l],
      t.position - (r[o] - r[o - l]),
      d
    ), a = dt.repeat(" ", e.indent) + pn((t.line - l + 1).toString(), h) + " | " + c.str + `
` + a;
  for (c = fn(t.buffer, r[o], n[o], t.position, d), a += dt.repeat(" ", e.indent) + pn((t.line + 1).toString(), h) + " | " + c.str + `
`, a += dt.repeat("-", e.indent + h + 3 + c.pos) + `^
`, l = 1; l <= e.linesAfter && !(o + l >= n.length); l++)
    c = fn(
      t.buffer,
      r[o + l],
      n[o + l],
      t.position - (r[o] - r[o + l]),
      d
    ), a += dt.repeat(" ", e.indent) + pn((t.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return a.replace(/\n$/, "");
}
var RC = NC, PC = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], qC = [
  "scalar",
  "sequence",
  "mapping"
];
function zC(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(i) {
    t[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function WC(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (PC.indexOf(i) === -1)
      throw new Kt('Unknown option "' + i + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = zC(e.styleAliases || null), qC.indexOf(this.kind) === -1)
    throw new Kt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var ct = WC;
function Ks(t, e) {
  var i = [];
  return t[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(s, o) {
      s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (n = o);
    }), i[n] = r;
  }), i;
}
function YC() {
  var t = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t.multi[n.kind].push(n), t.multi.fallback.push(n)) : t[n.kind][n.tag] = t.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t;
}
function Rn(t) {
  return this.extend(t);
}
Rn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof ct)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Kt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(s) {
    if (!(s instanceof ct))
      throw new Kt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Kt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new Kt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(s) {
    if (!(s instanceof ct))
      throw new Kt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Rn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = Ks(n, "implicit"), n.compiledExplicit = Ks(n, "explicit"), n.compiledTypeMap = YC(n.compiledImplicit, n.compiledExplicit), n;
};
var HC = Rn, jC = new ct("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), UC = new ct("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), XC = new ct("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), GC = new HC({
  explicit: [
    jC,
    UC,
    XC
  ]
});
function VC(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function KC() {
  return null;
}
function ZC(t) {
  return t === null;
}
var JC = new ct("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: VC,
  construct: KC,
  predicate: ZC,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function QC(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function tx(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function ex(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var ix = new ct("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: QC,
  construct: tx,
  predicate: ex,
  represent: {
    lowercase: function(t) {
      return t ? "true" : "false";
    },
    uppercase: function(t) {
      return t ? "TRUE" : "FALSE";
    },
    camelcase: function(t) {
      return t ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function rx(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function nx(t) {
  return 48 <= t && t <= 55;
}
function ox(t) {
  return 48 <= t && t <= 57;
}
function sx(t) {
  if (t === null)
    return !1;
  var e = t.length, i = 0, r = !1, n;
  if (!e)
    return !1;
  if (n = t[i], (n === "-" || n === "+") && (n = t[++i]), n === "0") {
    if (i + 1 === e)
      return !0;
    if (n = t[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (!rx(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (!nx(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return !1;
  for (; i < e; i++)
    if (n = t[i], n !== "_") {
      if (!ox(t.charCodeAt(i)))
        return !1;
      r = !0;
    }
  return !(!r || n === "_");
}
function ax(t) {
  var e = t, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function lx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !dt.isNegativeZero(t);
}
var cx = new ct("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: sx,
  construct: ax,
  predicate: lx,
  represent: {
    binary: function(t) {
      return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
    },
    octal: function(t) {
      return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
    },
    decimal: function(t) {
      return t.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t) {
      return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), hx = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function ux(t) {
  return !(t === null || !hx.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function dx(t) {
  var e, i;
  return e = t.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var fx = /^[-+]?[0-9]+e/;
function px(t, e) {
  var i;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (dt.isNegativeZero(t))
    return "-0.0";
  return i = t.toString(10), fx.test(i) ? i.replace("e", ".e") : i;
}
function gx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || dt.isNegativeZero(t));
}
var mx = new ct("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: ux,
  construct: dx,
  predicate: gx,
  represent: px,
  defaultStyle: "lowercase"
}), fc = GC.extend({
  implicit: [
    JC,
    ix,
    cx,
    mx
  ]
}), yx = fc, pc = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), gc = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function _x(t) {
  return t === null ? !1 : pc.exec(t) !== null || gc.exec(t) !== null;
}
function Cx(t) {
  var e, i, r, n, s, o, a, l = 0, c = null, h, d, u;
  if (e = pc.exec(t), e === null && (e = gc.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (s = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (h = +e[10], d = +(e[11] || 0), c = (h * 60 + d) * 6e4, e[9] === "-" && (c = -c)), u = new Date(Date.UTC(i, r, n, s, o, a, l)), c && u.setTime(u.getTime() - c), u;
}
function xx(t) {
  return t.toISOString();
}
var bx = new ct("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: _x,
  construct: Cx,
  instanceOf: Date,
  represent: xx
});
function Tx(t) {
  return t === "<<" || t === null;
}
var vx = new ct("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Tx
}), Co = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Sx(t) {
  if (t === null)
    return !1;
  var e, i, r = 0, n = t.length, s = Co;
  for (i = 0; i < n; i++)
    if (e = s.indexOf(t.charAt(i)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function kx(t) {
  var e, i, r = t.replace(/[\r\n=]/g, ""), n = r.length, s = Co, o = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : i === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : i === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function wx(t) {
  var e = "", i = 0, r, n, s = t.length, o = Co;
  for (r = 0; r < s; r++)
    r % 3 === 0 && r && (e += o[i >> 18 & 63], e += o[i >> 12 & 63], e += o[i >> 6 & 63], e += o[i & 63]), i = (i << 8) + t[r];
  return n = s % 3, n === 0 ? (e += o[i >> 18 & 63], e += o[i >> 12 & 63], e += o[i >> 6 & 63], e += o[i & 63]) : n === 2 ? (e += o[i >> 10 & 63], e += o[i >> 4 & 63], e += o[i << 2 & 63], e += o[64]) : n === 1 && (e += o[i >> 2 & 63], e += o[i << 4 & 63], e += o[64], e += o[64]), e;
}
function Ax(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Bx = new ct("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Sx,
  construct: kx,
  predicate: Ax,
  represent: wx
}), Ex = Object.prototype.hasOwnProperty, Lx = Object.prototype.toString;
function Fx(t) {
  if (t === null)
    return !0;
  var e = [], i, r, n, s, o, a = t;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], o = !1, Lx.call(n) !== "[object Object]")
      return !1;
    for (s in n)
      if (Ex.call(n, s))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (e.indexOf(s) === -1)
      e.push(s);
    else
      return !1;
  }
  return !0;
}
function Ox(t) {
  return t !== null ? t : [];
}
var Ix = new ct("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Fx,
  construct: Ox
}), Mx = Object.prototype.toString;
function $x(t) {
  if (t === null)
    return !0;
  var e, i, r, n, s, o = t;
  for (s = new Array(o.length), e = 0, i = o.length; e < i; e += 1) {
    if (r = o[e], Mx.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return !1;
    s[e] = [n[0], r[n[0]]];
  }
  return !0;
}
function Dx(t) {
  if (t === null)
    return [];
  var e, i, r, n, s, o = t;
  for (s = new Array(o.length), e = 0, i = o.length; e < i; e += 1)
    r = o[e], n = Object.keys(r), s[e] = [n[0], r[n[0]]];
  return s;
}
var Nx = new ct("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: $x,
  construct: Dx
}), Rx = Object.prototype.hasOwnProperty;
function Px(t) {
  if (t === null)
    return !0;
  var e, i = t;
  for (e in i)
    if (Rx.call(i, e) && i[e] !== null)
      return !1;
  return !0;
}
function qx(t) {
  return t !== null ? t : {};
}
var zx = new ct("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Px,
  construct: qx
}), Wx = yx.extend({
  implicit: [
    bx,
    vx
  ],
  explicit: [
    Bx,
    Ix,
    Nx,
    zx
  ]
}), ue = Object.prototype.hasOwnProperty, vr = 1, mc = 2, yc = 3, Sr = 4, gn = 1, Yx = 2, Zs = 3, Hx = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, jx = /[\x85\u2028\u2029]/, Ux = /[,\[\]\{\}]/, _c = /^(?:!|!!|![a-z\-]+!)$/i, Cc = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Js(t) {
  return Object.prototype.toString.call(t);
}
function qt(t) {
  return t === 10 || t === 13;
}
function xe(t) {
  return t === 9 || t === 32;
}
function _t(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Me(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function Xx(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function Gx(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function Vx(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Qs(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function Kx(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var xc = new Array(256), bc = new Array(256);
for (var Oe = 0; Oe < 256; Oe++)
  xc[Oe] = Qs(Oe) ? 1 : 0, bc[Oe] = Qs(Oe);
function Zx(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Wx, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Tc(t, e) {
  var i = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return i.snippet = RC(i), new Kt(e, i);
}
function I(t, e) {
  throw Tc(t, e);
}
function kr(t, e) {
  t.onWarning && t.onWarning.call(null, Tc(t, e));
}
var ta = {
  YAML: function(e, i, r) {
    var n, s, o;
    e.version !== null && I(e, "duplication of %YAML directive"), r.length !== 1 && I(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && I(e, "ill-formed argument of the YAML directive"), s = parseInt(n[1], 10), o = parseInt(n[2], 10), s !== 1 && I(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && kr(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, s;
    r.length !== 2 && I(e, "TAG directive accepts exactly two arguments"), n = r[0], s = r[1], _c.test(n) || I(e, "ill-formed tag handle (first argument) of the TAG directive"), ue.call(e.tagMap, n) && I(e, 'there is a previously declared suffix for "' + n + '" tag handle'), Cc.test(s) || I(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      I(e, "tag prefix is malformed: " + s);
    }
    e.tagMap[n] = s;
  }
};
function ce(t, e, i, r) {
  var n, s, o, a;
  if (e < i) {
    if (a = t.input.slice(e, i), r)
      for (n = 0, s = a.length; n < s; n += 1)
        o = a.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || I(t, "expected valid JSON character");
    else Hx.test(a) && I(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function ea(t, e, i, r) {
  var n, s, o, a;
  for (dt.isObject(i) || I(t, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), o = 0, a = n.length; o < a; o += 1)
    s = n[o], ue.call(e, s) || (e[s] = i[s], r[s] = !0);
}
function $e(t, e, i, r, n, s, o, a, l) {
  var c, h;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1)
      Array.isArray(n[c]) && I(t, "nested arrays are not supported inside keys"), typeof n == "object" && Js(n[c]) === "[object Object]" && (n[c] = "[object Object]");
  if (typeof n == "object" && Js(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (c = 0, h = s.length; c < h; c += 1)
        ea(t, e, s[c], i);
    else
      ea(t, e, s, i);
  else
    !t.json && !ue.call(i, n) && ue.call(e, n) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = l || t.position, I(t, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : e[n] = s, delete i[n];
  return e;
}
function xo(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : I(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function J(t, e, i) {
  for (var r = 0, n = t.input.charCodeAt(t.position); n !== 0; ) {
    for (; xe(n); )
      n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && n === 35)
      do
        n = t.input.charCodeAt(++t.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (qt(n))
      for (xo(t), n = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; n === 32; )
        t.lineIndent++, n = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t.lineIndent < i && kr(t, "deficient indentation"), r;
}
function Ur(t) {
  var e = t.position, i;
  return i = t.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2) && (e += 3, i = t.input.charCodeAt(e), i === 0 || _t(i)));
}
function bo(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += dt.repeat(`
`, e - 1));
}
function Jx(t, e, i) {
  var r, n, s, o, a, l, c, h, d = t.kind, u = t.result, f;
  if (f = t.input.charCodeAt(t.position), _t(f) || Me(f) || f === 35 || f === 38 || f === 42 || f === 33 || f === 124 || f === 62 || f === 39 || f === 34 || f === 37 || f === 64 || f === 96 || (f === 63 || f === 45) && (n = t.input.charCodeAt(t.position + 1), _t(n) || i && Me(n)))
    return !1;
  for (t.kind = "scalar", t.result = "", s = o = t.position, a = !1; f !== 0; ) {
    if (f === 58) {
      if (n = t.input.charCodeAt(t.position + 1), _t(n) || i && Me(n))
        break;
    } else if (f === 35) {
      if (r = t.input.charCodeAt(t.position - 1), _t(r))
        break;
    } else {
      if (t.position === t.lineStart && Ur(t) || i && Me(f))
        break;
      if (qt(f))
        if (l = t.line, c = t.lineStart, h = t.lineIndent, J(t, !1, -1), t.lineIndent >= e) {
          a = !0, f = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = l, t.lineStart = c, t.lineIndent = h;
          break;
        }
    }
    a && (ce(t, s, o, !1), bo(t, t.line - l), s = o = t.position, a = !1), xe(f) || (o = t.position + 1), f = t.input.charCodeAt(++t.position);
  }
  return ce(t, s, o, !1), t.result ? !0 : (t.kind = d, t.result = u, !1);
}
function Qx(t, e) {
  var i, r, n;
  if (i = t.input.charCodeAt(t.position), i !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (i = t.input.charCodeAt(t.position)) !== 0; )
    if (i === 39)
      if (ce(t, r, t.position, !0), i = t.input.charCodeAt(++t.position), i === 39)
        r = t.position, t.position++, n = t.position;
      else
        return !0;
    else qt(i) ? (ce(t, r, n, !0), bo(t, J(t, !1, e)), r = n = t.position) : t.position === t.lineStart && Ur(t) ? I(t, "unexpected end of the document within a single quoted scalar") : (t.position++, n = t.position);
  I(t, "unexpected end of the stream within a single quoted scalar");
}
function tb(t, e) {
  var i, r, n, s, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, i = r = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return ce(t, i, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (ce(t, i, t.position, !0), a = t.input.charCodeAt(++t.position), qt(a))
        J(t, !1, e);
      else if (a < 256 && xc[a])
        t.result += bc[a], t.position++;
      else if ((o = Gx(a)) > 0) {
        for (n = o, s = 0; n > 0; n--)
          a = t.input.charCodeAt(++t.position), (o = Xx(a)) >= 0 ? s = (s << 4) + o : I(t, "expected hexadecimal character");
        t.result += Kx(s), t.position++;
      } else
        I(t, "unknown escape sequence");
      i = r = t.position;
    } else qt(a) ? (ce(t, i, r, !0), bo(t, J(t, !1, e)), i = r = t.position) : t.position === t.lineStart && Ur(t) ? I(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  I(t, "unexpected end of the stream within a double quoted scalar");
}
function eb(t, e) {
  var i = !0, r, n, s, o = t.tag, a, l = t.anchor, c, h, d, u, f, m = /* @__PURE__ */ Object.create(null), y, _, E, x;
  if (x = t.input.charCodeAt(t.position), x === 91)
    h = 93, f = !1, a = [];
  else if (x === 123)
    h = 125, f = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), x = t.input.charCodeAt(++t.position); x !== 0; ) {
    if (J(t, !0, e), x = t.input.charCodeAt(t.position), x === h)
      return t.position++, t.tag = o, t.anchor = l, t.kind = f ? "mapping" : "sequence", t.result = a, !0;
    i ? x === 44 && I(t, "expected the node content, but found ','") : I(t, "missed comma between flow collection entries"), _ = y = E = null, d = u = !1, x === 63 && (c = t.input.charCodeAt(t.position + 1), _t(c) && (d = u = !0, t.position++, J(t, !0, e))), r = t.line, n = t.lineStart, s = t.position, Ge(t, e, vr, !1, !0), _ = t.tag, y = t.result, J(t, !0, e), x = t.input.charCodeAt(t.position), (u || t.line === r) && x === 58 && (d = !0, x = t.input.charCodeAt(++t.position), J(t, !0, e), Ge(t, e, vr, !1, !0), E = t.result), f ? $e(t, a, m, _, y, E, r, n, s) : d ? a.push($e(t, null, m, _, y, E, r, n, s)) : a.push(y), J(t, !0, e), x = t.input.charCodeAt(t.position), x === 44 ? (i = !0, x = t.input.charCodeAt(++t.position)) : i = !1;
  }
  I(t, "unexpected end of the stream within a flow collection");
}
function ib(t, e) {
  var i, r, n = gn, s = !1, o = !1, a = e, l = 0, c = !1, h, d;
  if (d = t.input.charCodeAt(t.position), d === 124)
    r = !1;
  else if (d === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; d !== 0; )
    if (d = t.input.charCodeAt(++t.position), d === 43 || d === 45)
      gn === n ? n = d === 43 ? Zs : Yx : I(t, "repeat of a chomping mode identifier");
    else if ((h = Vx(d)) >= 0)
      h === 0 ? I(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? I(t, "repeat of an indentation width identifier") : (a = e + h - 1, o = !0);
    else
      break;
  if (xe(d)) {
    do
      d = t.input.charCodeAt(++t.position);
    while (xe(d));
    if (d === 35)
      do
        d = t.input.charCodeAt(++t.position);
      while (!qt(d) && d !== 0);
  }
  for (; d !== 0; ) {
    for (xo(t), t.lineIndent = 0, d = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && d === 32; )
      t.lineIndent++, d = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), qt(d)) {
      l++;
      continue;
    }
    if (t.lineIndent < a) {
      n === Zs ? t.result += dt.repeat(`
`, s ? 1 + l : l) : n === gn && s && (t.result += `
`);
      break;
    }
    for (r ? xe(d) ? (c = !0, t.result += dt.repeat(`
`, s ? 1 + l : l)) : c ? (c = !1, t.result += dt.repeat(`
`, l + 1)) : l === 0 ? s && (t.result += " ") : t.result += dt.repeat(`
`, l) : t.result += dt.repeat(`
`, s ? 1 + l : l), s = !0, o = !0, l = 0, i = t.position; !qt(d) && d !== 0; )
      d = t.input.charCodeAt(++t.position);
    ce(t, i, t.position, !1);
  }
  return !0;
}
function ia(t, e) {
  var i, r = t.tag, n = t.anchor, s = [], o, a = !1, l;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = s), l = t.input.charCodeAt(t.position); l !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, I(t, "tab characters must not be used in indentation")), !(l !== 45 || (o = t.input.charCodeAt(t.position + 1), !_t(o)))); ) {
    if (a = !0, t.position++, J(t, !0, -1) && t.lineIndent <= e) {
      s.push(null), l = t.input.charCodeAt(t.position);
      continue;
    }
    if (i = t.line, Ge(t, e, yc, !1, !0), s.push(t.result), J(t, !0, -1), l = t.input.charCodeAt(t.position), (t.line === i || t.lineIndent > e) && l !== 0)
      I(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = r, t.anchor = n, t.kind = "sequence", t.result = s, !0) : !1;
}
function rb(t, e, i) {
  var r, n, s, o, a, l, c = t.tag, h = t.anchor, d = {}, u = /* @__PURE__ */ Object.create(null), f = null, m = null, y = null, _ = !1, E = !1, x;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = d), x = t.input.charCodeAt(t.position); x !== 0; ) {
    if (!_ && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, I(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), s = t.line, (x === 63 || x === 58) && _t(r))
      x === 63 ? (_ && ($e(t, d, u, f, m, null, o, a, l), f = m = y = null), E = !0, _ = !0, n = !0) : _ ? (_ = !1, n = !0) : I(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, x = r;
    else {
      if (o = t.line, a = t.lineStart, l = t.position, !Ge(t, i, mc, !1, !0))
        break;
      if (t.line === s) {
        for (x = t.input.charCodeAt(t.position); xe(x); )
          x = t.input.charCodeAt(++t.position);
        if (x === 58)
          x = t.input.charCodeAt(++t.position), _t(x) || I(t, "a whitespace character is expected after the key-value separator within a block mapping"), _ && ($e(t, d, u, f, m, null, o, a, l), f = m = y = null), E = !0, _ = !1, n = !1, f = t.tag, m = t.result;
        else if (E)
          I(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = c, t.anchor = h, !0;
      } else if (E)
        I(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = c, t.anchor = h, !0;
    }
    if ((t.line === s || t.lineIndent > e) && (_ && (o = t.line, a = t.lineStart, l = t.position), Ge(t, e, Sr, !0, n) && (_ ? m = t.result : y = t.result), _ || ($e(t, d, u, f, m, y, o, a, l), f = m = y = null), J(t, !0, -1), x = t.input.charCodeAt(t.position)), (t.line === s || t.lineIndent > e) && x !== 0)
      I(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return _ && $e(t, d, u, f, m, null, o, a, l), E && (t.tag = c, t.anchor = h, t.kind = "mapping", t.result = d), E;
}
function nb(t) {
  var e, i = !1, r = !1, n, s, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && I(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (i = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (r = !0, n = "!!", o = t.input.charCodeAt(++t.position)) : n = "!", e = t.position, i) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (s = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : I(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !_t(o); )
      o === 33 && (r ? I(t, "tag suffix cannot contain exclamation marks") : (n = t.input.slice(e - 1, t.position + 1), _c.test(n) || I(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    s = t.input.slice(e, t.position), Ux.test(s) && I(t, "tag suffix cannot contain flow indicator characters");
  }
  s && !Cc.test(s) && I(t, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    I(t, "tag name is malformed: " + s);
  }
  return i ? t.tag = s : ue.call(t.tagMap, n) ? t.tag = t.tagMap[n] + s : n === "!" ? t.tag = "!" + s : n === "!!" ? t.tag = "tag:yaml.org,2002:" + s : I(t, 'undeclared tag handle "' + n + '"'), !0;
}
function ob(t) {
  var e, i;
  if (i = t.input.charCodeAt(t.position), i !== 38)
    return !1;
  for (t.anchor !== null && I(t, "duplication of an anchor property"), i = t.input.charCodeAt(++t.position), e = t.position; i !== 0 && !_t(i) && !Me(i); )
    i = t.input.charCodeAt(++t.position);
  return t.position === e && I(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function sb(t) {
  var e, i, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !_t(r) && !Me(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && I(t, "name of an alias node must contain at least one character"), i = t.input.slice(e, t.position), ue.call(t.anchorMap, i) || I(t, 'unidentified alias "' + i + '"'), t.result = t.anchorMap[i], J(t, !0, -1), !0;
}
function Ge(t, e, i, r, n) {
  var s, o, a, l = 1, c = !1, h = !1, d, u, f, m, y, _;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = o = a = Sr === i || yc === i, r && J(t, !0, -1) && (c = !0, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)), l === 1)
    for (; nb(t) || ob(t); )
      J(t, !0, -1) ? (c = !0, a = s, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)) : a = !1;
  if (a && (a = c || n), (l === 1 || Sr === i) && (vr === i || mc === i ? y = e : y = e + 1, _ = t.position - t.lineStart, l === 1 ? a && (ia(t, _) || rb(t, _, y)) || eb(t, y) ? h = !0 : (o && ib(t, y) || Qx(t, y) || tb(t, y) ? h = !0 : sb(t) ? (h = !0, (t.tag !== null || t.anchor !== null) && I(t, "alias node should not have any properties")) : Jx(t, y, vr === i) && (h = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : l === 0 && (h = a && ia(t, _))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && I(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), d = 0, u = t.implicitTypes.length; d < u; d += 1)
      if (m = t.implicitTypes[d], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (ue.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, f = t.typeMap.multi[t.kind || "fallback"], d = 0, u = f.length; d < u; d += 1)
        if (t.tag.slice(0, f[d].tag.length) === f[d].tag) {
          m = f[d];
          break;
        }
    m || I(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && I(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : I(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || h;
}
function ab(t) {
  var e = t.position, i, r, n, s = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (J(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = t.input.charCodeAt(++t.position), i = t.position; o !== 0 && !_t(o); )
      o = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(i, t.position), n = [], r.length < 1 && I(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; xe(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !qt(o));
        break;
      }
      if (qt(o))
        break;
      for (i = t.position; o !== 0 && !_t(o); )
        o = t.input.charCodeAt(++t.position);
      n.push(t.input.slice(i, t.position));
    }
    o !== 0 && xo(t), ue.call(ta, r) ? ta[r](t, r, n) : kr(t, 'unknown document directive "' + r + '"');
  }
  if (J(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, J(t, !0, -1)) : s && I(t, "directives end mark is expected"), Ge(t, t.lineIndent - 1, Sr, !1, !0), J(t, !0, -1), t.checkLineBreaks && jx.test(t.input.slice(e, t.position)) && kr(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Ur(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, J(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    I(t, "end of the stream or a document separator is expected");
  else
    return;
}
function lb(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var i = new Zx(t, e), r = t.indexOf("\0");
  for (r !== -1 && (i.position = r, I(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    ab(i);
  return i.documents;
}
function cb(t, e) {
  var i = lb(t, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Kt("expected a single document in the stream, but found more");
  }
}
var hb = cb, ub = {
  load: hb
}, db = fc, fb = ub.load;
function pb(t) {
  const e = t.match(Al);
  if (!e)
    return {
      text: t,
      metadata: {}
    };
  let i = fb(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: db
  }) ?? {};
  i = typeof i == "object" && !Array.isArray(i) ? i : {};
  const r = {};
  return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
    text: t.slice(e[0].length),
    metadata: r
  };
}
const gb = (t) => t.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"
), mb = (t) => {
  const { text: e, metadata: i } = pb(t), { displayMode: r, title: n, config: s = {} } = i;
  return r && (s.gantt || (s.gantt = {}), s.gantt.displayMode = r), { title: n, config: s, text: e };
}, yb = (t) => {
  const e = _i.detectInit(t) ?? {}, i = _i.detectDirective(t, "wrap");
  return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
  }) : (i == null ? void 0 : i.type) === "wrap" && (e.wrap = !0), {
    text: W0(t),
    directive: e
  };
};
function vc(t) {
  const e = gb(t), i = mb(e), r = yb(i.text), n = Ml(i.config, r.directive);
  return t = kC(r.text), {
    code: t,
    title: i.title,
    config: n
  };
}
const _b = 5e4, Cb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", xb = "sandbox", bb = "loose", Tb = "http://www.w3.org/2000/svg", vb = "http://www.w3.org/1999/xlink", Sb = "http://www.w3.org/1999/xhtml", kb = "100%", wb = "100%", Ab = "border:0;margin:0;", Bb = "margin:0", Eb = "allow-top-navigation-by-user-activation allow-popups", Lb = 'The "iframe" tag is not supported by your browser.', Fb = ["foreignobject"], Ob = ["dominant-baseline"];
function Sc(t) {
  const e = vc(t);
  return xr(), py(e.config ?? {}), e;
}
async function Ib(t, e) {
  _o(), t = Sc(t).code;
  try {
    await To(t);
  } catch (i) {
    if (e != null && e.suppressErrors)
      return !1;
    throw i;
  }
  return !0;
}
const ra = (t, e, i = []) => `
.${t} ${e} { ${i.join(" !important; ")} !important; }`, Mb = (t, e = {}) => {
  var i;
  let r = "";
  if (t.themeCSS !== void 0 && (r += `
${t.themeCSS}`), t.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !rn(e)) {
    const a = t.htmlLabels || ((i = t.flowchart) == null ? void 0 : i.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const c = e[l];
      rn(c.styles) || a.forEach((h) => {
        r += ra(c.id, h, c.styles);
      }), rn(c.textStyles) || (r += ra(c.id, "tspan", c.textStyles));
    }
  }
  return r;
}, $b = (t, e, i, r) => {
  const n = Mb(t, i), s = M_(e, n, t.themeVariables);
  return Mn(a0(`${r}{${s}}`), c0);
}, Db = (t = "", e, i) => {
  let r = t;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = hy(r), r = r.replace(/<br>/g, "<br/>"), r;
}, Nb = (t = "", e) => {
  var i, r;
  const n = (r = (i = e == null ? void 0 : e.viewBox) == null ? void 0 : i.baseVal) != null && r.height ? e.viewBox.baseVal.height + "px" : wb, s = btoa('<body style="' + Bb + '">' + t + "</body>");
  return `<iframe style="width:${kb};height:${n};${Ab}" src="data:text/html;base64,${s}" sandbox="${Eb}">
  ${Lb}
</iframe>`;
}, na = (t, e, i, r, n) => {
  const s = t.append("div");
  s.attr("id", i), r && s.attr("style", r);
  const o = s.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", Tb);
  return n && o.attr("xmlns:xlink", n), o.append("g"), t;
};
function oa(t, e) {
  return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const Rb = (t, e, i, r) => {
  var n, s, o;
  (n = t.getElementById(e)) == null || n.remove(), (s = t.getElementById(i)) == null || s.remove(), (o = t.getElementById(r)) == null || o.remove();
}, Pb = async function(t, e, i) {
  var r, n, s, o, a, l;
  _o();
  const c = Sc(e);
  e = c.code;
  const h = Wt();
  $.debug(h), e.length > ((h == null ? void 0 : h.maxTextSize) ?? _b) && (e = Cb);
  const d = "#" + t, u = "i" + t, f = "#" + u, m = "d" + t, y = "#" + m;
  let _ = kt("body");
  const E = h.securityLevel === xb, x = h.securityLevel === bb, R = h.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), E) {
      const M = oa(kt(i), u);
      _ = kt(M.nodes()[0].contentDocument.body), _.node().style.margin = 0;
    } else
      _ = kt(i);
    na(_, t, m, `font-family: ${R}`, vb);
  } else {
    if (Rb(document, t, m, u), E) {
      const M = oa(kt("body"), u);
      _ = kt(M.nodes()[0].contentDocument.body), _.node().style.margin = 0;
    } else
      _ = kt("body");
    na(_, t, m);
  }
  let C, S;
  try {
    C = await To(e, { title: c.title });
  } catch (M) {
    C = new hc("error"), S = M;
  }
  const U = _.select(y).node(), D = C.type, Q = U.firstChild, rt = Q.firstChild, Y = (n = (r = C.renderer).getClasses) == null ? void 0 : n.call(r, e, C), B = $b(h, D, Y, d), tt = document.createElement("style");
  tt.innerHTML = B, Q.insertBefore(tt, rt);
  try {
    await C.renderer.draw(e, t, Us, C);
  } catch (M) {
    throw Z_.draw(e, t, Us), M;
  }
  const ie = _.select(`${y} svg`), P = (o = (s = C.db).getAccTitle) == null ? void 0 : o.call(s), w = (l = (a = C.db).getAccDescription) == null ? void 0 : l.call(a);
  zb(D, ie, P, w), _.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Sb);
  let T = _.select(y).node().innerHTML;
  if ($.debug("config.arrowMarkerAbsolute", h.arrowMarkerAbsolute), T = Db(T, E, Sl(h.arrowMarkerAbsolute)), E) {
    const M = _.select(y + " svg").node();
    T = Nb(T, M);
  } else x || (T = We.sanitize(T, {
    ADD_TAGS: Fb,
    ADD_ATTR: Ob
  }));
  if (bC(), S)
    throw S;
  const k = kt(E ? f : y).node();
  return k && "remove" in k && k.remove(), {
    svg: T,
    bindFunctions: C.db.bindFunctions
  };
};
function qb(t = {}) {
  var e;
  t != null && t.fontFamily && !((e = t.themeVariables) != null && e.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), dy(t), t != null && t.theme && t.theme in Jt ? t.themeVariables = Jt[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Jt.default.getThemeVariables(t.themeVariables));
  const i = typeof t == "object" ? uy(t) : Dl();
  so(i.logLevel), _o();
}
const To = (t, e = {}) => {
  const { code: i } = vc(t);
  return xC(i, e);
};
function zb(t, e, i, r) {
  vC(e, t), SC(e, i, r, e.attr("id"));
}
const ve = Object.freeze({
  render: Pb,
  parse: Ib,
  getDiagramFromText: To,
  initialize: qb,
  getConfig: Wt,
  setConfig: Nl,
  getSiteConfig: Dl,
  updateSiteConfig: fy,
  reset: () => {
    xr();
  },
  globalReset: () => {
    xr(Ue);
  },
  defaultConfig: Ue
});
so(Wt().logLevel);
xr(Wt());
const Wb = async () => {
  $.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(je).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          yo(i);
        } catch {
          try {
            const { diagram: o, id: a } = await n();
            Tr(a, o, r);
          } catch (o) {
            throw $.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete je[i], o;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    $.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      $.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
}, Yb = (t, e, i) => {
  $.warn(t), Il(t) ? (i && i(t.str, t.hash), e.push({ ...t, message: t.str, error: t })) : (i && i(t), t instanceof Error && e.push({
    str: t.message,
    message: t.message,
    hash: t.name,
    error: t
  }));
}, kc = async function(t = {
  querySelector: ".mermaid"
}) {
  try {
    await Hb(t);
  } catch (e) {
    if (Il(e) && $.error(e.str), Ct.parseError && Ct.parseError(e), !t.suppressErrors)
      throw $.error("Use the suppressErrors option to suppress these errors"), e;
  }
}, Hb = async function({ postRenderCallback: t, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = ve.getConfig();
  $.debug(`${t ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  $.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && ($.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), ve.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const s = new _i.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
  let o;
  const a = [];
  for (const l of Array.from(n)) {
    $.info("Rendering diagram: " + l.id);
    /*! Check if previously processed */
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${s.next()}`;
    o = l.innerHTML, o = Nd(_i.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = _i.detectInit(o);
    h && $.debug("Detected early reinit: ", h);
    try {
      const { svg: d, bindFunctions: u } = await Ec(c, o, l);
      l.innerHTML = d, t && await t(c), u && u(l);
    } catch (d) {
      Yb(d, a, Ct.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
}, wc = function(t) {
  ve.initialize(t);
}, jb = async function(t, e, i) {
  $.warn("mermaid.init is deprecated. Please use run instead."), t && wc(t);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await kc(r);
}, Ub = async (t, {
  lazyLoad: e = !0
} = {}) => {
  El(...t), e === !1 && await Wb();
}, Ac = function() {
  if (Ct.startOnLoad) {
    const { startOnLoad: t } = ve.getConfig();
    t && Ct.run().catch((e) => $.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  /*!
   * Wait for document loaded before starting the execution
   */
  window.addEventListener("load", Ac, !1);
}
const Xb = function(t) {
  Ct.parseError = t;
}, wr = [];
let mn = !1;
const Bc = async () => {
  if (!mn) {
    for (mn = !0; wr.length > 0; ) {
      const t = wr.shift();
      if (t)
        try {
          await t();
        } catch (e) {
          $.error("Error executing queue", e);
        }
    }
    mn = !1;
  }
}, Gb = async (t, e) => new Promise((i, r) => {
  const n = () => new Promise((s, o) => {
    ve.parse(t, e).then(
      (a) => {
        s(a), i(a);
      },
      (a) => {
        var l;
        $.error("Error parsing", a), (l = Ct.parseError) == null || l.call(Ct, a), o(a), r(a);
      }
    );
  });
  wr.push(n), Bc().catch(r);
}), Ec = (t, e, i) => new Promise((r, n) => {
  const s = () => new Promise((o, a) => {
    ve.render(t, e, i).then(
      (l) => {
        o(l), r(l);
      },
      (l) => {
        var c;
        $.error("Error parsing", l), (c = Ct.parseError) == null || c.call(Ct, l), a(l), n(l);
      }
    );
  });
  wr.push(s), Bc().catch(n);
}), Ct = {
  startOnLoad: !0,
  mermaidAPI: ve,
  parse: Gb,
  render: Ec,
  init: jb,
  run: kc,
  registerExternalDiagrams: Ub,
  initialize: wc,
  parseError: void 0,
  contentLoaded: Ac,
  setParseErrorHandler: Xb,
  detectType: Hr
}, Je = (t) => {
  t = Kb(t);
  const e = t.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), i = document.createElement("textarea");
  return i.innerHTML = e, i.value;
}, Pe = (t) => {
  const e = t.getAttribute("transform"), i = e == null ? void 0 : e.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/);
  let r = 0, n = 0;
  return i && (r = Number(i[1]), n = Number(i[2])), { transformX: r, transformY: n };
}, Vb = (t) => {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/classDef.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/#\w+;/g, (i) => {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? `ﬂ°°${r}¶ß` : `ﬂ°${r}¶ß`;
  }), e;
}, Kb = function(t) {
  return t.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, Lc = (t, e = { x: 0, y: 0 }) => {
  if (t.tagName.toLowerCase() !== "path")
    throw new Error(`Invalid input: Expected an HTMLElement of tag "path", got ${t.tagName}`);
  const i = t.getAttribute("d");
  if (!i)
    throw new Error('Path element does not contain a "d" attribute');
  const r = i.split(/(?=[LM])/), n = r[0].substring(1).split(",").map((a) => parseFloat(a)), s = r[r.length - 1].substring(1).split(",").map((a) => parseFloat(a)), o = r.map((a) => {
    const l = a.substring(1).split(",").map((c) => parseFloat(c));
    return { x: l[0], y: l[1] };
  }).filter((a, l, c) => {
    if (l === 0 || l === c.length - 1)
      return !0;
    if (a.x === c[l - 1].x && a.y === c[l - 1].y)
      return !1;
    if (l === c.length - 2 && (c[l - 1].x === a.x || c[l - 1].y === a.y)) {
      const h = c[c.length - 1];
      return Math.hypot(h.x - a.x, h.y - a.y) > 20;
    }
    return a.x !== c[l - 1].x || a.y !== c[l - 1].y;
  }).map((a) => ({
    x: a.x + e.x,
    y: a.y + e.y
  }));
  return {
    startX: n[0] + e.x,
    startY: n[1] + e.y,
    endX: s[0] + e.x,
    endY: s[1] + e.y,
    reflectionPoints: o
  };
}, Zb = (t, e) => {
  const i = t.nodes.map((a) => a.startsWith("flowchart-") ? a.split("-")[1] : a), r = e.querySelector(`[id='${t.id}']`);
  if (!r)
    throw new Error("SubGraph element not found");
  const n = vo(r, e), s = r.getBBox(), o = {
    width: s.width,
    height: s.height
  };
  return t.classes = void 0, t.dir = void 0, {
    ...t,
    nodeIds: i,
    ...n,
    ...o,
    text: Je(t.title)
  };
}, Jb = (t, e) => {
  var d, u, f;
  const i = e.querySelector(`[id*="flowchart-${t.id}-"]`);
  if (!i)
    return;
  let r;
  ((d = i.parentElement) == null ? void 0 : d.tagName.toLowerCase()) === "a" && (r = i.parentElement.getAttribute("xlink:href"));
  const n = vo(r ? i.parentElement : i, e), s = i.getBBox(), o = {
    width: s.width,
    height: s.height
  }, a = (u = i.querySelector(".label-container")) == null ? void 0 : u.getAttribute("style"), l = (f = i.querySelector(".label")) == null ? void 0 : f.getAttribute("style"), c = {};
  a == null || a.split(";").forEach((m) => {
    if (!m)
      return;
    const y = m.split(":")[0].trim(), _ = m.split(":")[1].trim();
    c[y] = _;
  });
  const h = {};
  return l == null || l.split(";").forEach((m) => {
    if (!m)
      return;
    const y = m.split(":")[0].trim(), _ = m.split(":")[1].trim();
    h[y] = _;
  }), {
    id: t.id,
    labelType: t.labelType,
    text: Je(t.text),
    type: t.type,
    link: r || void 0,
    ...n,
    ...o,
    containerStyle: c,
    labelStyle: h
  };
}, Qb = (t, e, i) => {
  const r = i.querySelector(`[id*="L-${t.start}-${t.end}-${e}"]`);
  if (!r)
    throw new Error("Edge element not found");
  const n = vo(r, i), s = Lc(r, n);
  return t.length = void 0, {
    ...t,
    ...s,
    text: Je(t.text)
  };
}, vo = (t, e) => {
  var l;
  if (!t)
    throw new Error("Element not found");
  let i = (l = t.parentElement) == null ? void 0 : l.parentElement;
  const r = t.childNodes[0];
  let n = { x: 0, y: 0 };
  if (r) {
    const { transformX: c, transformY: h } = Pe(r), d = r.getBBox();
    n = {
      x: Number(r.getAttribute("x")) || c + d.x || 0,
      y: Number(r.getAttribute("y")) || h + d.y || 0
    };
  }
  const { transformX: s, transformY: o } = Pe(t), a = {
    x: s + n.x,
    y: o + n.y
  };
  for (; i && i.id !== e.id; ) {
    if (i.classList.value === "root" && i.hasAttribute("transform")) {
      const { transformX: c, transformY: h } = Pe(i);
      a.x += c, a.y += h;
    }
    i = i.parentElement;
  }
  return a;
}, t1 = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = i.getVertices();
  Object.keys(r).forEach((a) => {
    r[a] = Jb(r[a], e);
  });
  const n = /* @__PURE__ */ new Map(), s = i.getEdges().filter((a) => e.querySelector(`[id*="L-${a.start}-${a.end}"]`)).map((a) => {
    const l = `${a.start}-${a.end}`, c = n.get(l) || 0;
    return n.set(l, c + 1), Qb(a, c, e);
  });
  return {
    type: "flowchart",
    subGraphs: i.getSubGraphs().map((a) => Zb(a, e)),
    vertices: r,
    edges: s
  };
}, e1 = (t, e) => {
  const i = {};
  e != null && e.label && (i.label = { text: Je(e.label), fontSize: 16 });
  const r = t.tagName;
  if (r === "line")
    i.startX = Number(t.getAttribute("x1")), i.startY = Number(t.getAttribute("y1")), i.endX = Number(t.getAttribute("x2")), i.endY = Number(t.getAttribute("y2"));
  else if (r === "path") {
    const n = t.getAttribute("d");
    if (!n)
      throw new Error('Path element does not contain a "d" attribute');
    const s = n.split(/(?=[LC])/), o = s[0].substring(1).split(",").map((c) => parseFloat(c)), a = [];
    s.forEach((c) => {
      const h = c.substring(1).trim().split(" ").map((d) => {
        const [u, f] = d.split(",");
        return [
          parseFloat(u) - o[0],
          parseFloat(f) - o[1]
        ];
      });
      a.push(...h);
    });
    const l = a[a.length - 1];
    i.startX = o[0], i.startY = o[1], i.endX = l[0], i.endY = l[1], i.points = a;
  }
  return e != null && e.label && (i.startY = i.startY - 10, i.endY = i.endY - 10), i.strokeColor = t.getAttribute("stroke"), i.strokeWidth = Number(t.getAttribute("stroke-width")), i.type = "arrow", i.strokeStyle = (e == null ? void 0 : e.strokeStyle) || "solid", i.startArrowhead = (e == null ? void 0 : e.startArrowhead) || null, i.endArrowhead = (e == null ? void 0 : e.endArrowhead) || null, i;
}, Fc = (t, e, i, r, n) => {
  const s = {};
  return s.type = "arrow", s.startX = t, s.startY = e, s.endX = i, s.endY = r, Object.assign(s, { ...n }), s;
}, Pn = (t, e, i, r) => ({
  type: "text",
  x: t,
  y: e,
  text: i,
  width: (r == null ? void 0 : r.width) || 20,
  height: (r == null ? void 0 : r.height) || 20,
  fontSize: (r == null ? void 0 : r.fontSize) || Or,
  id: r == null ? void 0 : r.id,
  groupId: r == null ? void 0 : r.groupId,
  metadata: r == null ? void 0 : r.metadata
}), Oc = (t, e, i) => {
  const r = {}, n = Number(t.getAttribute("x")), s = Number(t.getAttribute("y"));
  r.type = "text", r.text = Je(e), i != null && i.id && (r.id = i.id), i != null && i.groupId && (r.groupId = i.groupId);
  const o = t.getBBox();
  r.width = o.width, r.height = o.height, r.x = n - o.width / 2, r.y = s;
  const a = parseInt(getComputedStyle(t).fontSize);
  return r.fontSize = a, r;
}, Yt = (t, e, i = {}) => {
  const r = {};
  r.type = e;
  const { label: n, subtype: s, id: o, groupId: a } = i;
  r.id = o, a && (r.groupId = a), n && (r.label = {
    text: Je(n.text),
    fontSize: 16,
    verticalAlign: n == null ? void 0 : n.verticalAlign
  });
  const l = t.getBBox();
  switch (r.x = l.x, r.y = l.y, r.width = l.width, r.height = l.height, r.subtype = s, s) {
    case "highlight":
      const c = t.getAttribute("fill");
      c && (r.bgColor = c);
      break;
    case "note":
      r.strokeStyle = "dashed";
      break;
  }
  return r;
}, Ei = (t, e, i, r, n, s) => {
  const o = {};
  return o.startX = e, o.startY = i, o.endX = r, s != null && s.groupId && (o.groupId = s.groupId), s != null && s.id && (o.id = s.id), o.endY = n, o.strokeColor = t.getAttribute("stroke"), o.strokeWidth = Number(t.getAttribute("stroke-width")), o.type = "line", o;
}, sa = {
  0: "SOLID",
  1: "DOTTED",
  3: "SOLID_CROSS",
  4: "DOTTED_CROSS",
  5: "SOLID_OPEN",
  6: "DOTTED_OPEN",
  24: "SOLID_POINT",
  25: "DOTTED_POINT"
}, Nt = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  SOLID_POINT: 24,
  DOTTED_POINT: 25,
  CRITICAL_START: 27
}, i1 = (t) => {
  let e;
  switch (t) {
    case Nt.SOLID:
    case Nt.SOLID_CROSS:
    case Nt.SOLID_OPEN:
    case Nt.SOLID_POINT:
      e = "solid";
      break;
    case Nt.DOTTED:
    case Nt.DOTTED_CROSS:
    case Nt.DOTTED_OPEN:
    case Nt.DOTTED_POINT:
      e = "dotted";
      break;
    default:
      e = "solid";
      break;
  }
  return e;
}, r1 = (t, e) => {
  var r, n;
  if (!!((r = t.nextElementSibling) != null && r.classList.contains("sequenceNumber"))) {
    const s = (n = t.nextElementSibling) == null ? void 0 : n.textContent;
    if (!s)
      throw new Error("sequence number not present");
    const o = 30, a = o / 2, c = {
      type: "rectangle",
      x: e.startX - 10,
      y: e.startY - a,
      label: { text: s, fontSize: 14 },
      bgColor: "#e9ecef",
      height: o,
      subtype: "sequence"
    };
    Object.assign(e, { sequenceNumber: c });
  }
}, aa = (t, e, i) => {
  if (!t)
    throw "root node not found";
  const r = Zt(), n = Array.from(t.children), s = [];
  return n.forEach((o, a) => {
    const l = `${i == null ? void 0 : i.id}-${a}`;
    let c;
    switch (o.tagName) {
      case "line":
        const h = Number(o.getAttribute("x1")), d = Number(o.getAttribute("y1")), u = Number(o.getAttribute("x2")), f = Number(o.getAttribute("y2"));
        c = Ei(o, h, d, u, f, { groupId: r, id: l });
        break;
      case "text":
        c = Oc(o, e, {
          groupId: r,
          id: l
        });
        break;
      case "circle":
        c = Yt(o, "ellipse", {
          label: o.textContent ? { text: o.textContent } : void 0,
          groupId: r,
          id: l
        });
      default:
        c = Yt(o, Sd[o.tagName], {
          label: o.textContent ? { text: o.textContent } : void 0,
          groupId: r,
          id: l
        });
    }
    s.push(c);
  }), s;
}, n1 = (t, e) => {
  const i = Array.from(e.querySelectorAll(".actor-top")), r = Array.from(e.querySelectorAll(".actor-bottom")), n = [], s = [];
  return Object.values(t).forEach((o, a) => {
    var d;
    const l = i.find((u) => u.getAttribute("name") === o.name), c = r.find((u) => u.getAttribute("name") === o.name);
    if (!l || !c)
      throw "root not found";
    const h = o.description;
    if (o.type === "participant") {
      const u = Yt(l, "rectangle", { id: `${o.name}-top`, label: { text: h }, subtype: "actor" });
      if (!u)
        throw "Top Node element not found!";
      n.push([u]);
      const f = Yt(c, "rectangle", { id: `${o.name}-bottom`, label: { text: h }, subtype: "actor" });
      n.push([f]);
      const m = (d = l == null ? void 0 : l.parentElement) == null ? void 0 : d.previousElementSibling;
      if ((m == null ? void 0 : m.tagName) !== "line")
        throw "Line not found";
      const y = Number(m.getAttribute("x1"));
      if (!u.height)
        throw "Top node element height is null";
      const _ = u.y + u.height, E = f.y, x = Number(m.getAttribute("x2")), R = Ei(m, y, _, x, E);
      s.push(R);
    } else if (o.type === "actor") {
      const u = aa(l, h, {
        id: `${o.name}-top`
      });
      n.push(u);
      const f = aa(c, h, {
        id: `${o.name}-bottom`
      });
      n.push(f);
      const m = l.previousElementSibling;
      if ((m == null ? void 0 : m.tagName) !== "line")
        throw "Line not found";
      const y = Number(m.getAttribute("x1")), _ = Number(m.getAttribute("y1")), E = Number(m.getAttribute("x2")), x = f.find((R) => R.type === "ellipse");
      if (x) {
        const R = x.y, C = Ei(m, y, _, E, R);
        s.push(C);
      }
    }
  }), { nodes: n, lines: s };
}, o1 = (t, e) => {
  const i = [], r = Array.from(e.querySelectorAll('[class*="messageLine"]')), n = Object.keys(sa), s = t.filter((o) => n.includes(o.type.toString()));
  return r.forEach((o, a) => {
    const l = s[a], c = sa[l.type], h = e1(o, {
      label: l == null ? void 0 : l.message,
      strokeStyle: i1(l.type),
      endArrowhead: c === "SOLID_OPEN" || c === "DOTTED_OPEN" ? null : "arrow"
    });
    r1(o, h), i.push(h);
  }), i;
}, s1 = (t, e) => {
  const i = Array.from(e.querySelectorAll(".note")).map((s) => s.parentElement), r = t.filter((s) => s.type === Nt.NOTE), n = [];
  return i.forEach((s, o) => {
    if (!s)
      return;
    const a = s.firstChild, l = r[o].message, c = Yt(a, "rectangle", {
      label: { text: l },
      subtype: "note"
    });
    n.push(c);
  }), n;
}, a1 = (t) => {
  const e = Array.from(t.querySelectorAll("[class*=activation]")), i = [];
  return e.forEach((r) => {
    const n = Yt(r, "rectangle", {
      label: { text: "" },
      subtype: "activation"
    });
    i.push(n);
  }), i;
}, l1 = (t, e) => {
  const i = Array.from(e.querySelectorAll(".loopLine")), r = [], n = [], s = [];
  i.forEach((h) => {
    const d = Number(h.getAttribute("x1")), u = Number(h.getAttribute("y1")), f = Number(h.getAttribute("x2")), m = Number(h.getAttribute("y2")), y = Ei(h, d, u, f, m);
    y.strokeStyle = "dotted", y.strokeColor = "#adb5bd", y.strokeWidth = 2, r.push(y);
  });
  const o = Array.from(e.querySelectorAll(".loopText")), a = t.filter((h) => h.type === Nt.CRITICAL_START).map((h) => h.message);
  o.forEach((h) => {
    var y;
    const d = h.textContent || "", u = Oc(h, d), f = ((y = d.match(/\[(.*?)\]/)) == null ? void 0 : y[1]) || "";
    a.includes(f) && (u.x += 16), n.push(u);
  });
  const l = Array.from(e == null ? void 0 : e.querySelectorAll(".labelBox")), c = Array.from(e == null ? void 0 : e.querySelectorAll(".labelText"));
  return l.forEach((h, d) => {
    var m;
    const u = ((m = c[d]) == null ? void 0 : m.textContent) || "", f = Yt(h, "rectangle", {
      label: { text: u }
    });
    f.strokeColor = "#adb5bd", f.bgColor = "#e9ecef", f.width = void 0, s.push(f);
  }), { lines: r, texts: n, nodes: s };
}, c1 = (t) => {
  const e = Array.from(t.querySelectorAll(".rect")).filter((r) => {
    var n;
    return ((n = r.parentElement) == null ? void 0 : n.tagName) !== "g";
  }), i = [];
  return e.forEach((r) => {
    const n = Yt(r, "rectangle", {
      label: { text: "" },
      subtype: "highlight"
    });
    i.push(n);
  }), i;
}, h1 = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = [], n = i.getBoxes(), s = c1(e), o = i.getActors(), { nodes: a, lines: l } = n1(o, e), c = i.getMessages(), h = o1(c, e), d = s1(c, e), u = a1(e), f = l1(c, e);
  return r.push(s), r.push(...a), r.push(d), r.push(u), { type: "sequence", lines: l, arrows: h, nodes: r, loops: f, groups: n };
}, Vi = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}, la = {
  LINE: 0,
  DOTTED_LINE: 1
}, oe = 16, u1 = (t) => {
  let e;
  switch (t) {
    case la.LINE:
      e = "solid";
      break;
    case la.DOTTED_LINE:
      e = "dotted";
      break;
    default:
      e = "solid";
  }
  return e;
}, ca = (t) => {
  let e;
  switch (t) {
    case Vi.AGGREGATION:
      e = "diamond_outline";
      break;
    case Vi.COMPOSITION:
      e = "diamond";
      break;
    case Vi.EXTENSION:
      e = "triangle_outline";
      break;
    case "none":
      e = null;
      break;
    case Vi.DEPENDENCY:
    default:
      e = "arrow";
      break;
  }
  return e;
}, d1 = (t, e) => {
  const i = [], r = [], n = [];
  return Object.values(t).forEach((s) => {
    var y;
    const { domId: o, id: a } = s, l = Zt(), c = e.querySelector(`[data-id=${a}]`);
    if (!c)
      throw Error(`DOM Node with id ${o} not found`);
    const { transformX: h, transformY: d } = Pe(c), u = Yt(c.firstChild, "rectangle", { id: a, groupId: l });
    u.x += h, u.y += d, u.metadata = { classId: a }, i.push(u), Array.from(c.querySelectorAll(".divider")).forEach((_) => {
      const E = Number(_.getAttribute("x1")), x = Number(_.getAttribute("y1")), R = Number(_.getAttribute("x2")), C = Number(_.getAttribute("y2")), S = Ei(_, E, x, R, C, {
        groupId: l,
        id: Zt()
      });
      S.startX += h, S.startY += d, S.endX += h, S.endY += d, S.metadata = { classId: a }, r.push(S);
    });
    const m = (y = c.querySelector(".label")) == null ? void 0 : y.children;
    if (!m)
      throw "label nodes not found";
    Array.from(m).forEach((_) => {
      const E = _.textContent;
      if (!E)
        return;
      const x = Zt(), { transformX: R, transformY: C } = Pe(_), S = _.getBBox(), D = Pn(h + R, d + C + 10, E, {
        width: S.width,
        height: S.height,
        id: x,
        groupId: l,
        metadata: { classId: a }
      });
      n.push(D);
    });
  }), { nodes: i, lines: r, text: n };
}, f1 = (t, e) => {
  const i = ["triangle_outline", "diamond", "diamond_outline"], r = e.startArrowhead && i.includes(e.startArrowhead), n = e.endArrowhead && i.includes(e.endArrowhead);
  return !n && !r || (r && (t === "LR" ? e.startX -= oe : t === "RL" ? e.startX += oe : t === "TB" ? e.startY -= oe : t === "BT" && (e.startY += oe)), n && (t === "LR" ? e.endX += oe : t === "RL" ? e.endX -= oe : t === "TB" ? e.endY += oe : t === "BT" && (e.endY -= oe))), e;
}, p1 = (t, e, i, r) => {
  var a;
  const n = (a = i.querySelector(".edgePaths")) == null ? void 0 : a.children;
  if (!n)
    throw new Error("No Edges found!");
  const s = [], o = [];
  return t.forEach((l, c) => {
    const { id1: h, id2: d, relation: u } = l, f = e.find((tt) => tt.id === h), m = e.find((tt) => tt.id === d), y = u1(u.lineType), _ = ca(u.type1), E = ca(u.type2), x = Lc(n[c]), R = Fc(x.startX, x.startY, x.endX, x.endY, {
      strokeStyle: y,
      startArrowhead: _,
      endArrowhead: E,
      label: l.title ? { text: l.title } : void 0,
      start: { type: "rectangle", id: f.id },
      end: { type: "rectangle", id: m.id }
    }), C = f1(r, R);
    s.push(C);
    const { relationTitle1: S, relationTitle2: U } = l, D = 20, Q = 15, rt = 15;
    let Y, B;
    if (S && S !== "none") {
      switch (r) {
        case "TB":
          Y = C.startX - D, C.endX < C.startX && (Y -= rt), B = C.startY + Q;
          break;
        case "BT":
          Y = C.startX + D, C.endX > C.startX && (Y += rt), B = C.startY - Q;
          break;
        case "LR":
          Y = C.startX + D, B = C.startY + Q, C.endY > C.startY && (B += rt);
          break;
        case "RL":
          Y = C.startX - D, B = C.startY - Q, C.startY > C.endY && (B -= rt);
          break;
        default:
          Y = C.startX - D, B = C.startY + Q;
      }
      const tt = Pn(Y, B, S, {
        fontSize: 16
      });
      o.push(tt);
    }
    if (U && U !== "none") {
      switch (r) {
        case "TB":
          Y = C.endX + D, C.endX < C.startX && (Y += rt), B = C.endY - Q;
          break;
        case "BT":
          Y = C.endX - D, C.endX > C.startX && (Y -= rt), B = C.endY + Q;
          break;
        case "LR":
          Y = C.endX - D, B = C.endY - Q, C.endY > C.startY && (B -= rt);
          break;
        case "RL":
          Y = C.endX + D, B = C.endY + Q, C.startY > C.endY && (B += rt);
          break;
        default:
          Y = C.endX + D, B = C.endY - Q;
      }
      const tt = Pn(Y, B, U, {
        fontSize: 16
      });
      o.push(tt);
    }
  }), { arrows: s, text: o };
}, g1 = (t, e, i) => {
  const r = [], n = [];
  return t.forEach((s) => {
    const { id: o, text: a, class: l } = s, c = e.querySelector(`#${o}`);
    if (!c)
      throw new Error(`Node with id ${o} not found!`);
    const { transformX: h, transformY: d } = Pe(c), u = c.firstChild, f = Yt(u, "rectangle", {
      id: o,
      subtype: "note",
      label: { text: a }
    });
    if (Object.assign(f, {
      x: f.x + h,
      y: f.y + d
    }), r.push(f), l) {
      const m = i.find((C) => C.id === l);
      if (!m)
        throw new Error(`class node with id ${l} not found!`);
      const y = f.x + (f.width || 0) / 2, _ = f.y + (f.height || 0), E = y, x = m.y, R = Fc(y, _, E, x, {
        strokeStyle: "dotted",
        startArrowhead: null,
        endArrowhead: null,
        start: { id: f.id, type: "rectangle" },
        end: { id: m.id, type: "rectangle" }
      });
      n.push(R);
    }
  }), { notes: r, connectors: n };
}, m1 = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = i.getDirection(), n = [], s = [], o = [], a = [], l = i.getNamespaces(), c = i.getClasses();
  if (Object.keys(c).length) {
    const y = d1(c, e);
    n.push(y.nodes), s.push(...y.lines), o.push(...y.text), a.push(...y.nodes);
  }
  const h = i.getRelations(), { arrows: d, text: u } = p1(h, a, e, r), { notes: f, connectors: m } = g1(i.getNotes(), e, a);
  return n.push(f), d.push(...m), o.push(...u), { type: "class", nodes: n, lines: s, arrows: d, text: o, namespaces: l };
}, y1 = (t) => {
  const e = t.querySelector("svg");
  if (!e)
    throw new Error("SVG element not found");
  const i = e.getBoundingClientRect(), r = i.width, n = i.height;
  e.setAttribute("width", `${r}`), e.setAttribute("height", `${n}`);
  const s = "image/svg+xml", o = unescape(encodeURIComponent(e.outerHTML)), l = `data:image/svg+xml;base64,${btoa(o)}`;
  return {
    type: "graphImage",
    mimeType: s,
    dataURL: l,
    width: r,
    height: n
  };
}, _1 = async (t, e = ls) => {
  Ct.initialize({ ...ls, ...e });
  const i = await Ct.mermaidAPI.getDiagramFromText(Vb(t)), { svg: r } = await Ct.render("mermaid-to-excalidraw", t), n = document.createElement("div");
  n.setAttribute("style", "opacity: 0; position: relative; z-index: -1;"), n.innerHTML = r, n.id = "mermaid-diagram", document.body.appendChild(n);
  let s;
  switch (i.type) {
    case "flowchart-v2": {
      s = t1(i, n);
      break;
    }
    case "sequence": {
      s = h1(i, n);
      break;
    }
    case "classDiagram": {
      s = m1(i, n);
      break;
    }
    default:
      s = y1(n);
  }
  return n.remove(), s;
}, C1 = async (t, e) => {
  var o;
  const i = e || {}, r = parseInt(((o = i.themeVariables) == null ? void 0 : o.fontSize) ?? "") || Or, n = await _1(t, {
    ...i,
    themeVariables: {
      ...i.themeVariables,
      // Multiplying by 1.25 to increase the font size by 25% and render correctly in Excalidraw
      fontSize: `${r * 1.25}px`
    }
  });
  return Dd(n, {
    fontSize: r
  });
}, q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseMermaidToExcalidraw: C1
}, Symbol.toStringTag, { value: "Module" }));
export {
  H0 as $,
  V_ as A,
  Qn as B,
  zt as C,
  S1 as D,
  A1 as E,
  ws as F,
  ks as G,
  E1 as H,
  B1 as I,
  w1 as J,
  T1 as K,
  v1 as L,
  F1 as M,
  k1 as N,
  L1 as O,
  M0 as P,
  B0 as Q,
  Ys as R,
  I1 as S,
  ho as T,
  q as U,
  T0 as V,
  Wt as W,
  O1 as X,
  F_ as Y,
  R0 as Z,
  Z0 as _,
  P_ as a,
  md as a$,
  em as a0,
  J0 as a1,
  Mi as a2,
  O as a3,
  N as a4,
  W_ as a5,
  mi as a6,
  Ml as a7,
  xt as a8,
  Na as a9,
  zn as aA,
  ha as aB,
  ua as aC,
  bh as aD,
  au as aE,
  ph as aF,
  vd as aG,
  uu as aH,
  gu as aI,
  Fi as aJ,
  ar as aK,
  Th as aL,
  _a as aM,
  ud as aN,
  dd as aO,
  pe as aP,
  Zo as aQ,
  ch as aR,
  Wn as aS,
  nd as aT,
  fd as aU,
  Ke as aV,
  de as aW,
  as as aX,
  Yn as aY,
  da as aZ,
  xn as a_,
  Xd as aa,
  Ku as ab,
  qn as ac,
  yt as ad,
  Fp as ae,
  Gn as af,
  Ra as ag,
  Ii as ah,
  za as ai,
  b1 as aj,
  Pd as ak,
  Vn as al,
  ae as am,
  Cs as an,
  Rp as ao,
  Si as ap,
  Nd as aq,
  mh as ar,
  vh as as,
  Sh as at,
  wh as au,
  ya as av,
  Ar as aw,
  Br as ax,
  or as ay,
  gd as az,
  N_ as b,
  rn as b0,
  q1 as b1,
  D_ as c,
  kt as d,
  rc as e,
  lt as f,
  mo as g,
  Cr as h,
  Ai as i,
  ao as j,
  oy as k,
  $ as l,
  $i as m,
  z_ as n,
  q_ as o,
  P1 as p,
  $_ as q,
  nm as r,
  R_ as s,
  Sl as t,
  _i as u,
  hy as v,
  ry as w,
  R1 as x,
  U_ as y,
  ty as z
};
//# sourceMappingURL=index-BXM0AnV6.mjs.map
