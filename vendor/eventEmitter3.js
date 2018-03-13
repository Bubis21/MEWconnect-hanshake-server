!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EventEmitter3 = e()
    }
}(function () {
    return function e(t, n, r) {
        function o(s, f) {
            if (!n[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var a = n[s] = {exports: {}};
                t[s][0].call(a.exports, function (e) {
                    var n = t[s][1][e];
                    return o(n || e)
                }, a, a.exports, e, t, n, r)
            }
            return n[s].exports
        }

        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
        return o
    }({
        1: [function (e, t, n) {
            "use strict";
            var r = Object.prototype.hasOwnProperty, o = "~";

            function i() {
            }

            function s(e, t, n, r, i) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var s = new function (e, t, n) {
                    this.fn = e, this.context = t, this.once = n || !1
                }(n, r || e, i), f = o ? o + t : t;
                return e._events[f] ? e._events[f].fn ? e._events[f] = [e._events[f], s] : e._events[f].push(s) : (e._events[f] = s, e._eventsCount++), e
            }

            function f(e, t) {
                0 == --e._eventsCount ? e._events = new i : delete e._events[t]
            }

            function c() {
                this._events = new i, this._eventsCount = 0
            }

            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (o = !1)), c.prototype.eventNames = function () {
                var e, t, n = [];
                if (0 === this._eventsCount) return n;
                for (t in e = this._events) r.call(e, t) && n.push(o ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, c.prototype.listeners = function (e) {
                var t = o ? o + e : e, n = this._events[t];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var r = 0, i = n.length, s = new Array(i); r < i; r++) s[r] = n[r].fn;
                return s
            }, c.prototype.listenerCount = function (e) {
                var t = o ? o + e : e, n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }, c.prototype.emit = function (e, t, n, r, i, s) {
                var f = o ? o + e : e;
                if (!this._events[f]) return !1;
                var c, u, a = this._events[f], l = arguments.length;
                if (a.fn) {
                    switch (a.once && this.removeListener(e, a.fn, void 0, !0), l) {
                        case 1:
                            return a.fn.call(a.context), !0;
                        case 2:
                            return a.fn.call(a.context, t), !0;
                        case 3:
                            return a.fn.call(a.context, t, n), !0;
                        case 4:
                            return a.fn.call(a.context, t, n, r), !0;
                        case 5:
                            return a.fn.call(a.context, t, n, r, i), !0;
                        case 6:
                            return a.fn.call(a.context, t, n, r, i, s), !0
                    }
                    for (u = 1, c = new Array(l - 1); u < l; u++) c[u - 1] = arguments[u];
                    a.fn.apply(a.context, c)
                } else {
                    var p, v = a.length;
                    for (u = 0; u < v; u++) switch (a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l) {
                        case 1:
                            a[u].fn.call(a[u].context);
                            break;
                        case 2:
                            a[u].fn.call(a[u].context, t);
                            break;
                        case 3:
                            a[u].fn.call(a[u].context, t, n);
                            break;
                        case 4:
                            a[u].fn.call(a[u].context, t, n, r);
                            break;
                        default:
                            if (!c) for (p = 1, c = new Array(l - 1); p < l; p++) c[p - 1] = arguments[p];
                            a[u].fn.apply(a[u].context, c)
                    }
                }
                return !0
            }, c.prototype.on = function (e, t, n) {
                return s(this, e, t, n, !1)
            }, c.prototype.once = function (e, t, n) {
                return s(this, e, t, n, !0)
            }, c.prototype.removeListener = function (e, t, n, r) {
                var i = o ? o + e : e;
                if (!this._events[i]) return this;
                if (!t) return f(this, i), this;
                var s = this._events[i];
                if (s.fn) s.fn !== t || r && !s.once || n && s.context !== n || f(this, i); else {
                    for (var c = 0, u = [], a = s.length; c < a; c++) (s[c].fn !== t || r && !s[c].once || n && s[c].context !== n) && u.push(s[c]);
                    u.length ? this._events[i] = 1 === u.length ? u[0] : u : f(this, i)
                }
                return this
            }, c.prototype.removeAllListeners = function (e) {
                var t;
                return e ? (t = o ? o + e : e, this._events[t] && f(this, t)) : (this._events = new i, this._eventsCount = 0), this
            }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = o, c.EventEmitter = c, void 0 !== t && (t.exports = c)
        }, {}]
    }, {}, [1])(1)
});