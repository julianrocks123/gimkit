function s(t) {
  if (((this.t = 0), t instanceof ArrayBuffer)) {
    (this.i = t), (this.s = new DataView(this.i));
  } else {
    if (!ArrayBuffer.isView(t)) throw new Error("Invalid argument");
    (this.i = t.buffer),
      (this.s = new DataView(this.i, t.byteOffset, t.byteLength));
  }
}
function y(t, i, r) {
  for (var s = 0, e = 0, h = r.length; e < h; e++) {
    (s = r.charCodeAt(e)) < 128
      ? t.setUint8(i++, s)
      : (s < 2048
        ? t.setUint8(i++, 192 | (s >> 6))
        : (s < 55296 || 57344 <= s
          ? t.setUint8(i++, 224 | (s >> 12))
          : (e++,
            (s = 65536 + (((1023 & s) << 10) | (1023 & r.charCodeAt(e)))),
            t.setUint8(i++, 240 | (s >> 18)),
            t.setUint8(i++, 128 | ((s >> 12) & 63))),
          t.setUint8(i++, 128 | ((s >> 6) & 63))),
        t.setUint8(i++, 128 | (63 & s)));
  }
}
function d(t) {
  for (var i = 0, r = 0, s = 0, e = t.length; s < e; s++) {
    (i = t.charCodeAt(s)) < 128
      ? (r += 1)
      : i < 2048
      ? (r += 2)
      : i < 55296 || 57344 <= i
      ? (r += 3)
      : (s++, (r += 4));
  }
  return r;
}
s.prototype.g = function (t) {
  for (var i = new Array(t), r = 0; r < t; r++) i[r] = this.v();
  return i;
};
s.prototype.M = function (t) {
  for (var i = {}, r = 0; r < t; r++) i[this.v()] = this.v();
  return i;
};
s.prototype.h = function (t) {
  var i = (function (t, i, r) {
    for (var s = "", e = 0, h = i, n = i + r; h < n; h++) {
      var a = t.getUint8(h);
      if (0 != (128 & a)) {
        if (192 != (224 & a)) {
          if (224 != (240 & a)) {
            if (240 != (248 & a)) {
              throw new Error("Invalid byte " + a.toString(16));
            }
            65536 <=
                (e = ((7 & a) << 18) |
                  ((63 & t.getUint8(++h)) << 12) |
                  ((63 & t.getUint8(++h)) << 6) |
                  ((63 & t.getUint8(++h)) << 0))
              ? ((e -= 65536),
                (s += String.fromCharCode(
                  55296 + (e >>> 10),
                  56320 + (1023 & e),
                )))
              : (s += String.fromCharCode(e));
          } else {
            s += String.fromCharCode(
              ((15 & a) << 12) |
                ((63 & t.getUint8(++h)) << 6) |
                ((63 & t.getUint8(++h)) << 0),
            );
          }
        } else {
          s += String.fromCharCode(((31 & a) << 6) | (63 & t.getUint8(++h)));
        }
      } else s += String.fromCharCode(a);
    }
    return s;
  })(this.s, this.t, t);
  return (this.t += t), i;
};
s.prototype.l = function (t) {
  var i = this.i.slice(this.t, this.t + t);
  return (this.t += t), i;
};
s.prototype.v = function () {
  var t,
    i = this.s.getUint8(this.t++),
    r = 0,
    s = 0,
    e = 0,
    h = 0;
  if (i < 192) {
    return i < 128
      ? i
      : i < 144
      ? this.M(15 & i)
      : i < 160
      ? this.g(15 & i)
      : this.h(31 & i);
  }
  if (223 < i) return -1 * (255 - i + 1);
  switch (i) {
    case 192:
      return null;
    case 194:
      return !1;
    case 195:
      return !0;
    case 196:
      return (r = this.s.getUint8(this.t)), (this.t += 1), this.l(r);
    case 197:
      return (r = this.s.getUint16(this.t)), (this.t += 2), this.l(r);
    case 198:
      return (r = this.s.getUint32(this.t)), (this.t += 4), this.l(r);
    case 199:
      return (
        (r = this.s.getUint8(this.t)),
          (s = this.s.getInt8(this.t + 1)),
          (this.t += 2),
          [s, this.l(r)]
      );
    case 200:
      return (
        (r = this.s.getUint16(this.t)),
          (s = this.s.getInt8(this.t + 2)),
          (this.t += 3),
          [s, this.l(r)]
      );
    case 201:
      return (
        (r = this.s.getUint32(this.t)),
          (s = this.s.getInt8(this.t + 4)),
          (this.t += 5),
          [s, this.l(r)]
      );
    case 202:
      return (t = this.s.getFloat32(this.t)), (this.t += 4), t;
    case 203:
      return (t = this.s.getFloat64(this.t)), (this.t += 8), t;
    case 204:
      return (t = this.s.getUint8(this.t)), (this.t += 1), t;
    case 205:
      return (t = this.s.getUint16(this.t)), (this.t += 2), t;
    case 206:
      return (t = this.s.getUint32(this.t)), (this.t += 4), t;
    case 207:
      return (
        (e = this.s.getUint32(this.t) * Math.pow(2, 32)),
          (h = this.s.getUint32(this.t + 4)),
          (this.t += 8),
          e + h
      );
    case 208:
      return (t = this.s.getInt8(this.t)), (this.t += 1), t;
    case 209:
      return (t = this.s.getInt16(this.t)), (this.t += 2), t;
    case 210:
      return (t = this.s.getInt32(this.t)), (this.t += 4), t;
    case 211:
      return (
        (e = this.s.getInt32(this.t) * Math.pow(2, 32)),
          (h = this.s.getUint32(this.t + 4)),
          (this.t += 8),
          e + h
      );
    case 212:
      return (
        (s = this.s.getInt8(this.t)),
          (this.t += 1),
          0 === s ? void (this.t += 1) : [s, this.l(1)]
      );
    case 213:
      return (s = this.s.getInt8(this.t)), (this.t += 1), [s, this.l(2)];
    case 214:
      return (s = this.s.getInt8(this.t)), (this.t += 1), [s, this.l(4)];
    case 215:
      return (
        (s = this.s.getInt8(this.t)),
          (this.t += 1),
          0 === s
            ? ((e = this.s.getInt32(this.t) * Math.pow(2, 32)),
              (h = this.s.getUint32(this.t + 4)),
              (this.t += 8),
              new Date(e + h))
            : [s, this.l(8)]
      );
    case 216:
      return (s = this.s.getInt8(this.t)), (this.t += 1), [s, this.l(16)];
    case 217:
      return (r = this.s.getUint8(this.t)), (this.t += 1), this.h(r);
    case 218:
      return (r = this.s.getUint16(this.t)), (this.t += 2), this.h(r);
    case 219:
      return (r = this.s.getUint32(this.t)), (this.t += 4), this.h(r);
    case 220:
      return (r = this.s.getUint16(this.t)), (this.t += 2), this.g(r);
    case 221:
      return (r = this.s.getUint32(this.t)), (this.t += 4), this.g(r);
    case 222:
      return (r = this.s.getUint16(this.t)), (this.t += 2), this.M(r);
    case 223:
      return (r = this.s.getUint32(this.t)), (this.t += 4), this.M(r);
  }
  throw new Error("Could not parse");
};

const encode = function (t) {
  var i: number[] = [],
    r = [],
    s = (function t(i, r, s) {
      var e = typeof s,
        h = 0,
        n = 0,
        a = 0,
        f = 0,
        u = 0,
        o = 0;
      if ("string" === e) {
        if ((u = d(s)) < 32) i.push(160 | u), (o = 1);
        else if (u < 256) i.push(217, u), (o = 2);
        else if (u < 65536) i.push(218, u >> 8, u), (o = 3);
        else {
          if (!(u < 4294967296)) throw new Error("String too long");
          i.push(219, u >> 24, u >> 16, u >> 8, u), (o = 5);
        }
        return r.push({ h: s, u: u, t: i.length }), o + u;
      }
      if ("number" === e) {
        return Math.floor(s) === s && isFinite(s)
          ? 0 <= s
            ? s < 128
              ? (i.push(s), 1)
              : s < 256
              ? (i.push(204, s), 2)
              : s < 65536
              ? (i.push(205, s >> 8, s), 3)
              : s < 4294967296
              ? (i.push(206, s >> 24, s >> 16, s >> 8, s), 5)
              : ((a = (s / Math.pow(2, 32)) >> 0),
                (f = s >>> 0),
                i.push(
                  207,
                  a >> 24,
                  a >> 16,
                  a >> 8,
                  a,
                  f >> 24,
                  f >> 16,
                  f >> 8,
                  f,
                ),
                9)
            : -32 <= s
            ? (i.push(s), 1)
            : -128 <= s
            ? (i.push(208, s), 2)
            : -32768 <= s
            ? (i.push(209, s >> 8, s), 3)
            : -2147483648 <= s
            ? (i.push(210, s >> 24, s >> 16, s >> 8, s), 5)
            : ((a = Math.floor(s / Math.pow(2, 32))),
              (f = s >>> 0),
              i.push(
                211,
                a >> 24,
                a >> 16,
                a >> 8,
                a,
                f >> 24,
                f >> 16,
                f >> 8,
                f,
              ),
              9)
          : (i.push(203), r.push({ o: s, u: 8, t: i.length }), 9);
      }
      if ("object" === e) {
        if (null === s) return i.push(192), 1;
        if (Array.isArray(s)) {
          if ((u = s.length) < 16) i.push(144 | u), (o = 1);
          else if (u < 65536) i.push(220, u >> 8, u), (o = 3);
          else {
            if (!(u < 4294967296)) throw new Error("Array too large");
            i.push(221, u >> 24, u >> 16, u >> 8, u), (o = 5);
          }
          for (h = 0; h < u; h++) o += t(i, r, s[h]);
          return o;
        }
        if (s instanceof Date) {
          var c = s.getTime();
          return (
            (a = Math.floor(c / Math.pow(2, 32))),
              (f = c >>> 0),
              i.push(
                215,
                0,
                a >> 24,
                a >> 16,
                a >> 8,
                a,
                f >> 24,
                f >> 16,
                f >> 8,
                f,
              ),
              10
          );
        }
        if (s instanceof ArrayBuffer) {
          if ((u = s.byteLength) < 256) i.push(196, u), (o = 2);
          else if (u < 65536) i.push(197, u >> 8, u), (o = 3);
          else {
            if (!(u < 4294967296)) throw new Error("Buffer too large");
            i.push(198, u >> 24, u >> 16, u >> 8, u), (o = 5);
          }
          return r.push({ l: s, u: u, t: i.length }), o + u;
        }
        if ("function" == typeof s.toJSON) return t(i, r, s.toJSON());
        var l = [],
          w = "",
          v = Object.keys(s);
        for (h = 0, n = v.length; h < n; h++) {
          (w = v[h]), "function" != typeof s[w] && l.push(w);
        }
        if ((u = l.length) < 16) i.push(128 | u), (o = 1);
        else if (u < 65536) i.push(222, u >> 8, u), (o = 3);
        else {
          if (!(u < 4294967296)) throw new Error("Object too large");
          i.push(223, u >> 24, u >> 16, u >> 8, u), (o = 5);
        }
        for (h = 0; h < u; h++) {
          (w = l[h]), (o += t(i, r, w)), (o += t(i, r, s[w]));
        }
        return o;
      }
      if ("boolean" === e) return i.push(s ? 195 : 194), 1;
      if ("undefined" === e) return i.push(212, 0, 0), 3;
      throw new Error("Could not encode");
    })(i, r, t),
    e = new ArrayBuffer(s),
    h = new DataView(e),
    n = 0,
    a = 0,
    f = -1;
  0 < r.length && (f = r[0].t);
  for (var u, o = 0, c = 0, l = 0, w = i.length; l < w; l++) {
    if ((h.setUint8(a + l, i[l]), l + 1 === f)) {
      if (((o = (u = r[n]).u), (c = a + f), u.l)) {
        for (var v = new Uint8Array(u.l), g = 0; g < o; g++) {
          h.setUint8(c + g, v[g]);
        }
      } else u.h ? y(h, c, u.h) : void 0 !== u.o && h.setFloat64(c, u.o);
      (a += o), r[++n] && (f = r[n].t);
    }
  }
  let e3 = Array.from(new Uint8Array(e));
  e3.unshift(4);
  return new Uint8Array(e3).buffer;
};
const decode = function (t) {
  t = t.slice(1);
  var i = new s(t),
    r = i.v();
  if (i.t === t.byteLength) return r;
  throw new Error(t.byteLength - i.t + " trailing bytes");
};

export { decode, encode };
