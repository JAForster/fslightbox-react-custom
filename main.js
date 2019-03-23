!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(window, function () {
    return function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = { i: r, l: !1, exports: {} };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 11)
    }([function (e, t, n) {
        "use strict";
        e.exports = n(2)
    }, function (e, t, n) {
        e.exports = n(4)()
    }, function (e, t, n) {
        "use strict";
        /** @license React v16.8.4
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */var r = n(3), o = "function" == typeof Symbol && Symbol.for, i = o ? Symbol.for("react.element") : 60103,
            s = o ? Symbol.for("react.portal") : 60106, u = o ? Symbol.for("react.fragment") : 60107,
            a = o ? Symbol.for("react.strict_mode") : 60108, c = o ? Symbol.for("react.profiler") : 60114,
            l = o ? Symbol.for("react.provider") : 60109, f = o ? Symbol.for("react.context") : 60110,
            p = o ? Symbol.for("react.concurrent_mode") : 60111, d = o ? Symbol.for("react.forward_ref") : 60112,
            h = o ? Symbol.for("react.suspense") : 60113, y = o ? Symbol.for("react.memo") : 60115,
            b = o ? Symbol.for("react.lazy") : 60116, m = "function" == typeof Symbol && Symbol.iterator;
        function v(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            !function (e, t, n, r, o, i, s, u) {
                if (!e) {
                    if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var a = [n, r, o, i, s, u], c = 0;
                        (e = Error(t.replace(/%s/g, function () {
                            return a[c++]
                        }))).name = "Invariant Violation"
                    }
                    throw e.framesToPop = 1, e
                }
            }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
        }
        var g = {
            isMounted: function () {
                return !1
            }, enqueueForceUpdate: function () {
            }, enqueueReplaceState: function () {
            }, enqueueSetState: function () {
            }
        }, S = {};
        function w(e, t, n) {
            this.props = e, this.context = t, this.refs = S, this.updater = n || g
        }
        function x() {
        }
        function O(e, t, n) {
            this.props = e, this.context = t, this.refs = S, this.updater = n || g
        }
        w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
            "object" != typeof e && "function" != typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState")
        }, w.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, x.prototype = w.prototype;
        var j = O.prototype = new x;
        j.constructor = O, r(j, w.prototype), j.isPureReactComponent = !0;
        var _ = { current: null }, E = { current: null }, R = Object.prototype.hasOwnProperty,
            k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function P(e, t, n) {
            var r = void 0, o = {}, s = null, u = null;
            if (null != t) for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (s = "" + t.key), t) R.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
            var a = arguments.length - 2;
            if (1 === a) o.children = n; else if (1 < a) {
                for (var c = Array(a), l = 0; l < a; l++) c[l] = arguments[l + 2];
                o.children = c
            }
            if (e && e.defaultProps) for (r in a = e.defaultProps) void 0 === o[r] && (o[r] = a[r]);
            return { $$typeof: i, type: e, key: s, ref: u, props: o, _owner: E.current }
        }
        function T(e) {
            return "object" == typeof e && null !== e && e.$$typeof === i
        }
        var C = /\/+/g, L = [];
        function D(e, t, n, r) {
            if (L.length) {
                var o = L.pop();
                return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 }
        }
        function q(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > L.length && L.push(e)
        }
        function A(e, t, n) {
            return null == e ? 0 : function e(t, n, r, o) {
                var u = typeof t;
                "undefined" !== u && "boolean" !== u || (t = null);
                var a = !1;
                if (null === t) a = !0; else switch (u) {
                    case"string":
                    case"number":
                        a = !0;
                        break;
                    case"object":
                        switch (t.$$typeof) {
                            case i:
                            case s:
                                a = !0
                        }
                }
                if (a) return r(o, t, "" === n ? "." + z(t, 0) : n), 1;
                if (a = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var c = 0; c < t.length; c++) {
                    var l = n + z(u = t[c], c);
                    a += e(u, l, r, o)
                } else if (l = null === t || "object" != typeof t ? null : "function" == typeof (l = m && t[m] || t["@@iterator"]) ? l : null, "function" == typeof l) for (t = l.call(t), c = 0; !(u = t.next()).done;) a += e(u = u.value, l = n + z(u, c++), r, o); else "object" === u && v("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
                return a
            }(e, "", t, n)
        }
        function z(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? function (e) {
                var t = { "=": "=0", ":": "=2" };
                return "$" + ("" + e).replace(/[=:]/g, function (e) {
                    return t[e]
                })
            }(e.key) : t.toString(36)
        }
        function F(e, t) {
            e.func.call(e.context, t, e.count++)
        }
        function U(e, t, n) {
            var r = e.result, o = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? I(e, r, n, function (e) {
                return e
            }) : null != e && (T(e) && (e = function (e, t) {
                return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
            }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(C, "$&/") + "/") + n)), r.push(e))
        }
        function I(e, t, n, r, o) {
            var i = "";
            null != n && (i = ("" + n).replace(C, "$&/") + "/"), A(e, U, t = D(t, i, r, o)), q(t)
        }
        function M() {
            var e = _.current;
            return null === e && v("307"), e
        }
        var H = {
            Children: {
                map: function (e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return I(e, r, null, t, n), r
                }, forEach: function (e, t, n) {
                    if (null == e) return e;
                    A(e, F, t = D(null, null, t, n)), q(t)
                }, count: function (e) {
                    return A(e, function () {
                        return null
                    }, null)
                }, toArray: function (e) {
                    var t = [];
                    return I(e, t, null, function (e) {
                        return e
                    }), t
                }, only: function (e) {
                    return T(e) || v("143"), e
                }
            },
            createRef: function () {
                return { current: null }
            },
            Component: w,
            PureComponent: O,
            createContext: function (e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = { $$typeof: l, _context: e }, e.Consumer = e
            },
            forwardRef: function (e) {
                return { $$typeof: d, render: e }
            },
            lazy: function (e) {
                return { $$typeof: b, _ctor: e, _status: -1, _result: null }
            },
            memo: function (e, t) {
                return { $$typeof: y, type: e, compare: void 0 === t ? null : t }
            },
            useCallback: function (e, t) {
                return M().useCallback(e, t)
            },
            useContext: function (e, t) {
                return M().useContext(e, t)
            },
            useEffect: function (e, t) {
                return M().useEffect(e, t)
            },
            useImperativeHandle: function (e, t, n) {
                return M().useImperativeHandle(e, t, n)
            },
            useDebugValue: function () {
            },
            useLayoutEffect: function (e, t) {
                return M().useLayoutEffect(e, t)
            },
            useMemo: function (e, t) {
                return M().useMemo(e, t)
            },
            useReducer: function (e, t, n) {
                return M().useReducer(e, t, n)
            },
            useRef: function (e) {
                return M().useRef(e)
            },
            useState: function (e) {
                return M().useState(e)
            },
            Fragment: u,
            StrictMode: a,
            Suspense: h,
            createElement: P,
            cloneElement: function (e, t, n) {
                null == e && v("267", e);
                var o = void 0, s = r({}, e.props), u = e.key, a = e.ref, c = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (a = t.ref, c = E.current), void 0 !== t.key && (u = "" + t.key);
                    var l = void 0;
                    for (o in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) R.call(t, o) && !k.hasOwnProperty(o) && (s[o] = void 0 === t[o] && void 0 !== l ? l[o] : t[o])
                }
                if (1 === (o = arguments.length - 2)) s.children = n; else if (1 < o) {
                    l = Array(o);
                    for (var f = 0; f < o; f++) l[f] = arguments[f + 2];
                    s.children = l
                }
                return { $$typeof: i, type: e.type, key: u, ref: a, props: s, _owner: c }
            },
            createFactory: function (e) {
                var t = P.bind(null, e);
                return t.type = e, t
            },
            isValidElement: T,
            version: "16.8.4",
            unstable_ConcurrentMode: p,
            unstable_Profiler: c,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: _,
                ReactCurrentOwner: E,
                assign: r
            }
        }, N = { default: H }, $ = N && H || N;
        e.exports = $.default || $
    }, function (e, t, n) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;
        e.exports = function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var n, s, u = function (e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), a = 1; a < arguments.length; a++) {
                for (var c in n = Object(arguments[a])) o.call(n, c) && (u[c] = n[c]);
                if (r) {
                    s = r(n);
                    for (var l = 0; l < s.length; l++) i.call(n, s[l]) && (u[s[l]] = n[s[l]])
                }
            }
            return u
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(5);
        function o() {
        }
        function i() {
        }
        i.resetWarningCache = o, e.exports = function () {
            function e(e, t, n, o, i, s) {
                if (s !== r) {
                    var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw u.name = "Invariant Violation", u
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o
            };
            return n.PropTypes = n, n
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function (e, t, n) {
        var r = n(7);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(9)(r, o);
        r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (t = e.exports = n(8)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]), t.push([e.i, '.fslightbox-toolbar {\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    display: flex;\n    background: rgba(35, 35, 35, 0.65);\n}\n\n.fslightbox-toolbar-button {\n    height: 100%;\n    width: 45px;\n    cursor: pointer;\n}\n\n.fslightbox-loader {\n    display: block;\n    margin: auto;\n    position: relative;\n    width: 67px;\n    height: 67px;\n}\n\n.fslightbox-loader div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 54px;\n    height: 54px;\n    margin: 6px;\n    border: 5px solid #999;\n    border-radius: 50%;\n    animation: fslightbox-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #999 transparent transparent transparent;\n}\n\n.fslightbox-loader div:nth-child(1) {\n    animation-delay: -0.45s;\n}\n\n.fslightbox-loader div:nth-child(2) {\n    animation-delay: -0.3s;\n}\n\n.fslightbox-loader div:nth-child(3) {\n    animation-delay: -0.15s;\n}\n\n@keyframes fslightbox-loader {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.fslightbox-source-holder {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center;\n\n}\n\n.fslightbox-single-source {\n    position: relative;\n    margin: auto;\n    opacity: 0;\n    display: block;\n    backface-visibility: hidden;\n    transform: translateZ(0);\n}\n\n.fslightbox-video {\n    object-fit: cover;\n}\n\n\n.fslightbox-transform-transition {\n    transition: transform .3s;\n}\n\n.fslightbox-invalid-file-wrapper {\n    font-size: 22px;\n    color: #eaebeb;\n    margin: auto;\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fslightbox-fade-in {\n    opacity: 1 !important;\n}\n\n.fslightbox-fade-in-class {\n    animation: fslightbox-fade-in .25s cubic-bezier(0, 0, .7, 1) forwards;\n}\n\n.fslightbox-fade-out-class {\n    animation: fslightbox-fade-out .25s ease forwards;\n}\n\n.fslightbox-fade-in-complete {\n    animation: fslightbox-fade-in-complete .25s cubic-bezier(0, 0, .7, 1) forwards;\n}\n\n.fslightbox-fade-out-complete {\n    animation: fslightbox-fade-out-complete .25s ease !important;\n}\n\n@keyframes fslightbox-fade-in-complete {\n    from {\n        opacity: .3;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fslightbox-fade-out-complete {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fslightbox-fade-in {\n    from {\n        opacity: .65;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n@keyframes fslightbox-fade-out {\n    from {\n        opacity: .35;\n    }\n    to {\n        opacity: 0;\n    }\n}\n\n.fslightbox-container {\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(rgba(30, 30, 30, 0.9), black 1810%);\n    font-family: "Montserrat", sans-serif;\n    z-index: 9999999;\n    user-select: none;\n    animation: fslightbox-fade-in-complete .25s forwards;\n    transition: opacity .25s;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.fslightbox-open {\n    overflow: hidden;\n    height: 100%;\n}\n\n.fslightbox-scrollbarfix {\n    padding-right: 17px;\n}\n\n.fslightbox-nav {\n    height: 45px;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n}\n\n.fslightbox-slide-number-container {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: .82rem;\n    color: #c1c2c2;\n    z-index: 1;\n    max-width: 46px;\n}\n\n.fslightbox-slide-number {\n    padding: 0 2px;\n}\n\n.fslightbox-slide-number-container .fslightbox-slash {\n    padding-top: .15rem;\n    font-size: 12px;\n}\n\n.fslightbox-svg-icon path {\n    fill: #ddd;\n}\n\n.fslightbox-svg-icon circle {\n    stroke: #4691f6;\n    stroke-width: 1;\n}\n\n.fslightbox-slide-btn-container {\n    display: flex;\n    align-items: center;\n    padding: 30px 30px 30px 6px;\n    position: absolute;\n    top: 50%;\n    cursor: pointer;\n    z-index: 1;\n    transform: translateY(-50%);\n}\n\n.fslightbox-slide-btn-container:hover .fslightbox-svg-icon path {\n    fill: #f1f1f1;\n}\n\n.fslightbox-slide-btn {\n    padding: 7px;\n    font-size: 26px;\n    background: rgba(35, 35, 35, 0.65);\n}\n\n@media (min-width: 476px) {\n    .fslightbox-slide-btn {\n        padding: 8px;\n    }\n}\n\n.fslightbox-slide-btn-left-container {\n    left: 0;\n}\n\n@media (max-width: 475.99px) {\n    .fslightbox-slide-btn-left-container {\n        padding-left: 3px;\n    }\n}\n\n.fslightbox-slide-btn-right-container {\n    right: 0;\n    padding-left: 30px;\n    padding-right: 3px;\n}\n\n@media (min-width: 476px) {\n    .fslightbox-slide-btn-right-container {\n        padding-right: 6px;\n    }\n}\n\n.button-style {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.fslightbox-holder-wrapper {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n}\n\n.fslightbox-media-holder {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.fslightbox-invisible-hover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n}\n\n.fslightbox-cursor-grabbing {\n    cursor: grabbing;\n}\n\n.button-style:hover .fslightbox-svg-icon path {\n    fill: #fff;\n}\n\n', ""])
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var n = function (e, t) {
                        var n = e[1] || "", r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var o = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                i = r.sources.map(function (e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (r[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var s = e[o];
                    null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function (e, t, n) {
        var r, o, i = {}, s = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }), u = function (e) {
            var t = {};
            return function (e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var r = function (e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(), a = null, c = 0, l = [], f = n(10);
        function p(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], o = i[r.id];
                if (o) {
                    o.refs++;
                    for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
                    for (; s < r.parts.length; s++) o.parts.push(v(r.parts[s], t))
                } else {
                    var u = [];
                    for (s = 0; s < r.parts.length; s++) u.push(v(r.parts[s], t));
                    i[r.id] = { id: r.id, refs: 1, parts: u }
                }
            }
        }
        function d(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o], s = t.base ? i[0] + t.base : i[0], u = { css: i[1], media: i[2], sourceMap: i[3] };
                r[s] ? r[s].parts.push(u) : n.push(r[s] = { id: s, parts: [u] })
            }
            return n
        }
        function h(e, t) {
            var n = u(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = l[l.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = u(e.insertAt.before, n);
                n.insertBefore(t, o)
            }
        }
        function y(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = l.indexOf(e);
            t >= 0 && l.splice(t, 1)
        }
        function b(e) {
            var t = document.createElement("style");
            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
                var r = function () {
                    0;
                    return n.nc
                }();
                r && (e.attrs.nonce = r)
            }
            return m(t, e.attrs), h(e, t), t
        }
        function m(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n])
            })
        }
        function v(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {
                };
                e.css = i
            }
            if (t.singleton) {
                var s = c++;
                n = a || (a = b(t)), r = w.bind(null, n, s, !1), o = w.bind(null, n, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), h(e, t), t
            }(t), r = function (e, t, n) {
                var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = f(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var s = new Blob([r], { type: "text/css" }), u = e.href;
                e.href = URL.createObjectURL(s), u && URL.revokeObjectURL(u)
            }.bind(null, n, t), o = function () {
                y(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = b(t), r = function (e, t) {
                var n = t.css, r = t.media;
                r && e.setAttribute("media", r);
                if (e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function () {
                y(n)
            });
            return r(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
        }
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = d(e, t);
            return p(n, t), function (e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    (u = i[s.id]).refs--, r.push(u)
                }
                e && p(d(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var u;
                    if (0 === (u = r[o]).refs) {
                        for (var a = 0; a < u.parts.length; a++) u.parts[a]();
                        delete i[u.id]
                    }
                }
            }
        };
        var g, S = (g = [], function (e, t) {
            return g[e] = t, g.filter(Boolean).join("\n")
        });
        function w(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = S(t, o); else {
                var i = document.createTextNode(o), s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0), o = n.n(r), i = n(1), s = n.n(i);
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function c(e, t) {
            return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var p = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), c(this, l(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("svg", {
                        className: "fslightbox-svg-icon",
                        width: this.props.size,
                        height: this.props.size,
                        viewBox: this.props.viewBox,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.a.createElement("path", { d: this.props.d }))
                }
            }]) && a(n.prototype, i), s && a(n, s), t
        }();
        p.propTypes = { viewBox: s.a.string.isRequired, size: s.a.string.isRequired, d: s.a.string.isRequired };
        var d = p;
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function b(e, t) {
            return !t || "object" !== h(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var g = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), b(this, m(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        onClick: this.props.onClick,
                        className: "fslightbox-toolbar-button button-style"
                    }, o.a.createElement(d, { viewBox: this.props.viewBox, size: this.props.size, d: this.props.d }))
                }
            }]) && y(n.prototype, i), s && y(n, s), t
        }();
        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function w(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function x(e) {
            return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function O(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function j(e, t) {
            return (j = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var _ = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = x(t).call(this, e)) || "object" !== S(o) && "function" != typeof o ? O(r) : o).close = n.close.bind(O(n)), n.fullscreen = n.fullscreen.bind(O(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && j(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "fullscreen", value: function () {
                    this.props.data.isFullscreenOpen ? this.props.core.fullscreenToggler.turnOffFullscreen() : this.props.core.fullscreenToggler.turnOnFullscreen()
                }
            }, {
                key: "close", value: function () {
                    this.props.core.closeOpenLightbox.closeLightbox()
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-toolbar" }, o.a.createElement(g, {
                        onClick: this.fullscreen,
                        viewBox: "0 0 17.5 17.5",
                        size: "1.25em",
                        d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
                    }), o.a.createElement(g, {
                        onClick: this.close,
                        viewBox: "0 0 24 24",
                        size: "1.25em",
                        d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                    }))
                }
            }]) && w(n.prototype, i), s && w(n, s), t
        }();
        _.propTypes = { core: s.a.object.isRequired, data: s.a.object.isRequired };
        var E = _;
        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function k(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function P(e, t) {
            return !t || "object" !== R(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function C(e, t) {
            return (C = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var L = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), P(this, T(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && C(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-slide-number-container" }, o.a.createElement("div", { className: "fslightbox-slide-number" }, this.props.slide), o.a.createElement("div", { className: "fslightbox-slide-number fslightbox-slash" }, "/"), o.a.createElement("div", { className: "fslightbox-slide-number" }, this.props.totalSlides))
                }
            }]) && k(n.prototype, i), s && k(n, s), t
        }();
        L.propTypes = { slide: s.a.number.isRequired, totalSlides: s.a.number.isRequired };
        var D = L;
        function q(e) {
            return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function A(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function z(e, t) {
            return !t || "object" !== q(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function F(e) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function U(e, t) {
            return (U = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var I = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), z(this, F(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && U(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-nav" }, o.a.createElement(E, {
                        core: this.props.core,
                        data: this.props.data
                    }), o.a.createElement(D, { slide: this.props.slide, totalSlides: this.props.data.totalSlides }))
                }
            }]) && A(n.prototype, i), s && A(n, s), t
        }();
        I.propTypes = { data: s.a.object.isRequired, core: s.a.object.isRequired, slide: s.a.number.isRequired };
        var M = I;
        n(6);
        function H(e) {
            return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function N(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function $(e) {
            return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function B(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function W(e, t) {
            return (W = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var V = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = $(t).call(this, e)) || "object" !== H(o) && "function" != typeof o ? B(r) : o).goToPreviousSlide = n.goToPreviousSlide.bind(B(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && W(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "goToPreviousSlide", value: function () {
                    this.props.core.slideChanger.changeSlideTo(this.props.core.stageSources.getPreviousSlideIndex() + 1)
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        onClick: this.goToPreviousSlide,
                        className: "fslightbox-slide-btn-container fslightbox-slide-btn-left-container"
                    }, o.a.createElement("div", { className: "fslightbox-slide-btn button-style" }, o.a.createElement(d, {
                        viewBox: "0 0 20 20",
                        size: "1em",
                        d: "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                    })))
                }
            }]) && N(n.prototype, i), s && N(n, s), t
        }();
        V.propTypes = { core: s.a.object.isRequired };
        var X = V;
        function J(e) {
            return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Y(e) {
            return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Z(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function K(e, t) {
            return (K = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Q = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = Y(t).call(this, e)) || "object" !== J(o) && "function" != typeof o ? Z(r) : o).goToNextSlide = n.goToNextSlide.bind(Z(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && K(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "goToNextSlide", value: function () {
                    this.props.core.slideChanger.changeSlideTo(this.props.core.stageSources.getNextSlideIndex() + 1)
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        onClick: this.goToNextSlide,
                        className: "fslightbox-slide-btn-container fslightbox-slide-btn-right-container"
                    }, o.a.createElement("div", { className: "fslightbox-slide-btn button-style" }, o.a.createElement(d, {
                        viewBox: "0 0 20 20",
                        size: "1em",
                        d: "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                    })))
                }
            }]) && G(n.prototype, i), s && G(n, s), t
        }();
        Q.propTypes = { core: s.a.object.isRequired };
        var ee = Q, te = 250, ne = "image", re = "video", oe = "youtube", ie = "invalid", se = -1, ue = 0, ae = 1;
        function ce(e) {
            return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function le(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function fe(e) {
            return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function pe(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function de(e, t) {
            return (de = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var he = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = fe(t).call(this, e)) || "object" !== ce(o) && "function" != typeof o ? pe(r) : o).onLoadedMetaData = n.onLoadedMetaData.bind(pe(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && de(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "onLoadedMetaData", value: function (e) {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || (this.props.sourcesData.sourcesDimensions[this.props.i] = {
                        width: e.target.videoWidth,
                        height: e.target.videoHeight
                    }, this.props.onFirstSourceLoad())
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("video", {
                        onLoadedMetadata: this.onLoadedMetaData,
                        className: "fslightbox-single-source fslightbox-video",
                        controls: !0,
                        ref: this.props.sources[this.props.i],
                        poster: this.props.sourcesData.videosPosters[this.props.i]
                    }, o.a.createElement("source", { src: this.props.urls[this.props.i] }))
                }
            }]) && le(n.prototype, i), s && le(n, s), t
        }();
        he.propTypes = {
            urls: s.a.array.isRequired,
            sourcesData: s.a.object.isRequired,
            sources: s.a.array.isRequired,
            i: s.a.number.isRequired,
            onFirstSourceLoad: s.a.func.isRequired
        };
        var ye = he;
        function be(e) {
            return (be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function me(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function ve(e, t) {
            return !t || "object" !== be(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ge(e) {
            return (ge = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Se(e, t) {
            return (Se = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var we = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ve(this, ge(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Se(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "componentDidMount", value: function () {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || (this.props.sourcesData.sourcesDimensions[this.props.i] = {
                        width: 1920,
                        height: 1080
                    }, this.props.onFirstSourceLoad())
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("iframe", {
                        className: "fslightbox-single-source",
                        ref: this.props.sources[this.props.i],
                        src: "https://www.youtube.com/embed/" + (e = this.props.urls[this.props.i], e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]) + "?enablejsapi=1",
                        allowFullScreen: !0,
                        frameBorder: "0"
                    });
                    var e
                }
            }]) && me(n.prototype, i), s && me(n, s), t
        }();
        we.propTypes = {
            urls: s.a.array.isRequired,
            sourcesData: s.a.object.isRequired,
            sources: s.a.array.isRequired,
            onFirstSourceLoad: s.a.func.isRequired,
            i: s.a.number.isRequired
        };
        var xe = we;
        function Oe(e) {
            return (Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function je(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function _e(e, t) {
            return !t || "object" !== Oe(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ee(e) {
            return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Re(e, t) {
            return (Re = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ke = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = _e(this, Ee(t).call(this, e))).props.sourcesData.isSourceAlreadyLoadedArray[n.props.i] || (n.props.sourcesData.isSourceAlreadyLoadedArray[n.props.i] = !0), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Re(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        className: "fslightbox-invalid-file-wrapper",
                        ref: this.props.sources[this.props.i]
                    }, "Invalid file")
                }
            }]) && je(n.prototype, i), s && je(n, s), t
        }();
        ke.propTypes = { sources: s.a.array.isRequired, sourcesData: s.a.object.isRequired, i: s.a.number.isRequired };
        var Pe = ke;
        function Te(e) {
            return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Ce(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Le(e) {
            return (Le = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function De(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function qe(e, t) {
            return (qe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ae = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = Le(t).call(this, e)) || "object" !== Te(o) && "function" != typeof o ? De(r) : o).imageOnLoad = n.imageOnLoad.bind(De(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && qe(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "imageOnLoad", value: function (e) {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || (this.props.sourcesData.sourcesDimensions[this.props.i] = {
                        width: e.target.width,
                        height: e.target.height
                    }, this.props.onFirstSourceLoad())
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                        onLoad: this.imageOnLoad,
                        className: "fslightbox-single-source",
                        ref: this.props.sources[this.props.i],
                        src: this.props.urls[this.props.i],
                        alt: this.props.urls[this.props.i]
                    }))
                }
            }]) && Ce(n.prototype, i), s && Ce(n, s), t
        }();
        Ae.propTypes = {
            urls: s.a.array.isRequired,
            sourcesData: s.a.object.isRequired,
            sources: s.a.array.isRequired,
            i: s.a.number.isRequired,
            onFirstSourceLoad: s.a.func.isRequired
        };
        var ze = Ae;
        function Fe(e) {
            var t, n, r, i, s = e.sourcesData, u = e.data, a = e.elements;
            this.attachOnFirstSourceLoad = function (e) {
                i = e
            }, this.setSourceIndex = function (e) {
                r = e
            }, this.getSourceComponent = function () {
                return c(), n
            };
            var c = function () {
                s.sourcesTypes[r] !== ie ? (f(), y()) : l()
            }, l = function () {
                n = o.a.createElement(Pe, { sources: a.sources, sourcesData: s, i: r })
            }, f = function () {
                switch (s.sourcesTypes[r]) {
                    case ne:
                        p();
                        break;
                    case re:
                        d();
                        break;
                    case oe:
                        h()
                }
            }, p = function () {
                t = ze
            }, d = function () {
                t = ye
            }, h = function () {
                t = xe
            }, y = function () {
                n = o.a.createElement(t, {
                    urls: u.urls,
                    sources: a.sources,
                    sourcesData: s,
                    i: r,
                    onFirstSourceLoad: i
                })
            }
        }
        function Ue(e) {
            return (Ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Ie(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Me(e, t) {
            return !t || "object" !== Ue(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function He(e) {
            return (He = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Ne(e, t) {
            return (Ne = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var $e = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Me(this, He(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ne(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-loader" }, o.a.createElement("div", null), o.a.createElement("div", null), o.a.createElement("div", null), o.a.createElement("div", null))
                }
            }]) && Ie(n.prototype, i), s && Ie(n, s), t
        }();
        function Be(e) {
            var t = e.sourcesData, n = e.elements, r = null, o = 0, i = 0, s = 0, u = 0;
            this.setIndex = function (e) {
                r = e, o = t.sourcesDimensions[e].width, i = t.sourcesDimensions[e].height, s = o / i
            }, this.adjustSourceSize = function () {
                if ((u = t.maxSourceWidth / s) < t.maxSourceHeight) return o < t.maxSourceWidth && (u = i), void a();
                u = i > t.maxSourceHeight ? t.maxSourceHeight : i, a()
            };
            var a = function () {
                n.sources[r].current.style.height = u + "px", n.sources[r].current.style.width = u * s + "px"
            }
        }
        var We, Ve, Xe = "fslightbox-fade-in-class", Je = "fslightbox-fade-out-class",
            Ge = "fslightbox-fade-in-complete", Ye = "fslightbox-fade-out-complete", Ze = "fslightbox-open";
        function Ke(e) {
            return (Ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Qe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function et(e) {
            return (et = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function tt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function nt(e, t) {
            return (nt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var rt = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, n = !(o = et(t).call(this, e)) || "object" !== Ke(o) && "function" != typeof o ? tt(r) : o, Ve = !1, We = !0, n.props.sourcesData.sourcesToCreateOnConstruct[n.props.i] && (Ve = !0, n.createSource()), n.onFirstSourceLoad = n.onFirstSourceLoad.bind(tt(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && nt(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "createSource", value: function () {
                    We = !1;
                    var e = new Fe(this.props);
                    e.attachOnFirstSourceLoad(this.onFirstSourceLoad), e.setSourceIndex(this.props.i), this.props.elements.sourcesJSXComponents[this.props.i] = e.getSourceComponent(), Ve || this.sourceWasCreated()
                }
            }, {
                key: "sourceWasCreated", value: function () {
                    this.forceUpdate()
                }
            }, {
                key: "componentDidMount", value: function () {
                    Ve && this.sourceWasCreated(), this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] && this.onSourceLoad()
                }
            }, {
                key: "onFirstSourceLoad", value: function () {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] = !0;
                    var e = new Be(this.props);
                    e.setIndex(this.props.i), this.props.collections.sourceSizeAdjusters[this.props.i] = e, this.onSourceLoad()
                }
            }, {
                key: "onSourceLoad", value: function () {
                    this.fadeInSource(), this.props.collections.sourceSizeAdjusters[this.props.i] && this.props.collections.sourceSizeAdjusters[this.props.i].adjustSourceSize()
                }
            }, {
                key: "fadeInSource", value: function () {
                    this.props.core.stageSources.isSourceInStage(this.props.i) && (this.props.i === this.props.slide - 1 ? this.props.elements.sources[this.props.i].current.classList.add(Ge) : this.props.elements.sources[this.props.i].current.classList.add(Xe))
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || !We ? null : o.a.createElement($e, null);
                    return o.a.createElement(o.a.Fragment, null, e, this.props.elements.sourcesJSXComponents[this.props.i])
                }
            }]) && Qe(n.prototype, i), s && Qe(n, s), t
        }();
        rt.propTypes = {
            i: s.a.number.isRequired,
            collections: s.a.object.isRequired,
            core: s.a.object.isRequired,
            data: s.a.object.isRequired,
            elements: s.a.object.isRequired,
            slide: s.a.number.isRequired,
            sourcesData: s.a.object.isRequired
        };
        var ot, it, st = rt;
        function ut() {
            this.isUrlYoutubeOne = function (e) {
                var t = document.createElement("a");
                return t.href = e, "www.youtube.com" === t.hostname
            }, this.getTypeFromResponseContentType = function (e) {
                return e.slice(0, e.indexOf("/"))
            }
        }
        function at() {
            var e = "", t = null, n = null, r = null, o = new ut;
            this.setUrlToCheck = function (t) {
                e = t
            }, this.getSourceType = function () {
                return new Promise(function (n) {
                    if (r = n, o.isUrlYoutubeOne(e)) return c(), n(t);
                    i()
                }).catch(function () {
                    return p()
                })
            };
            var i = function () {
                (n = new XMLHttpRequest).open("GET", e, !0), n.onreadystatechange = s, n.send()
            }, s = function () {
                if (2 === n.readyState) {
                    if (200 !== n.status) return p(), void u();
                    a(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))), u()
                }
            }, u = function () {
                n.abort(), r(t)
            }, a = function (e) {
                switch (e) {
                    case ne:
                        l();
                        break;
                    case re:
                        f();
                        break;
                    default:
                        p()
                }
            }, c = function () {
                t = oe
            }, l = function () {
                t = ne
            }, f = function () {
                t = re
            }, p = function () {
                t = ie
            }
        }
        function ct(e) {
            return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function lt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function ft(e) {
            return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function pt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function dt(e, t) {
            return (dt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ht = function (e) {
            function t(e) {
                var n, r, i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(i = ft(t).call(this, e)) || "object" !== ct(i) && "function" != typeof i ? pt(r) : i).source = o.a.createRef(), n.processReceivedSourceType = n.processReceivedSourceType.bind(pt(n)), n.props.sourcesData.sourcesTypes[n.props.i] || n.initRequest(), ot = !1, it = !1, n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && dt(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "initRequest", value: function () {
                    var e = new at;
                    e.setUrlToCheck(this.props.data.urls[this.props.i]), e.getSourceType().then(this.processReceivedSourceType)
                }
            }, {
                key: "processReceivedSourceType", value: function (e) {
                    if (this.props.sourcesData.sourcesTypes[this.props.i] = e, ot) {
                        if (null === this.source.current) return void (this.props.sourcesData.sourcesToCreateOnConstruct[this.props.i] = !0);
                        this.source.current.createSource()
                    } else it = !0
                }
            }, {
                key: "componentDidMount", value: function () {
                    ot = !0, this.props.core.stageSources.isSourceInStage(this.props.i) || this.props.core.sourceHoldersTransformer.transformNegative(this.props.i), it && this.source.current.createSource()
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        ref: this.props.elements.sourceHolders[this.props.i],
                        className: "fslightbox-source-holder"
                    }, o.a.createElement(st, {
                        i: this.props.i,
                        ref: this.source,
                        collections: this.props.collections,
                        core: this.props.core,
                        data: this.props.data,
                        elements: this.props.elements,
                        slide: this.props.slide,
                        sourcesData: this.props.sourcesData
                    }))
                }
            }]) && lt(n.prototype, i), s && lt(n, s), t
        }();
        ht.propTypes = {
            i: s.a.number,
            collections: s.a.object.isRequired,
            core: s.a.object.isRequired,
            data: s.a.object.isRequired,
            elements: s.a.object.isRequired,
            slide: s.a.number.isRequired,
            sourcesData: s.a.object.isRequired
        };
        var yt = ht;
        function bt(e) {
            return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function mt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function vt(e, t) {
            return !t || "object" !== bt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function gt(e) {
            return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function St(e, t) {
            return (St = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var wt = function (e) {
            function t(e) {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), vt(this, gt(t).call(this, e))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && St(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "componentDidMount", value: function () {
                    this.props.data.xd || (this.props.data.xd = !0, this.props.elements.mediaHolder.current.addEventListener("touchstart", function () {
                        console.log(1)
                    }, { passive: !0 }))
                }
            }, {
                key: "render", value: function () {
                    for (var e = [], t = 0; t < this.props.data.totalSlides; t++) e.push(o.a.createElement(yt, {
                        key: t,
                        i: t,
                        collections: this.props.collections,
                        core: this.props.core,
                        data: this.props.data,
                        elements: this.props.elements,
                        slide: this.props.slide,
                        sourcesData: this.props.sourcesData
                    }));
                    return o.a.createElement("div", {
                        ref: this.props.elements.mediaHolder,
                        className: "fslightbox-media-holder"
                    }, e)
                }
            }]) && mt(n.prototype, i), s && mt(n, s), t
        }();
        wt.propTypes = {
            collections: s.a.object.isRequired,
            core: s.a.object.isRequired,
            data: s.a.object.isRequired,
            elements: s.a.object.isRequired,
            slide: s.a.number.isRequired,
            sourcesData: s.a.object.isRequired
        };
        var xt = wt, Ot = function (e) {
            for (var t = [], n = 0; n < e; n++) t.push(o.a.createRef());
            return t
        }, jt = function (e) {
            for (var t = [], n = 0; n < e; n++) t.push(null);
            return t
        };
        function _t(e) {
            var t, n = e.collections;
            this.adjustAllSourcesSizes = function () {
                for (t = 0; r();) o(), t++
            };
            var r = function () {
                return t < n.sourceSizeAdjusters.length
            }, o = function () {
                i() || n.sourceSizeAdjusters[t].adjustSourceSize()
            }, i = function () {
                return !n.sourceSizeAdjusters[t]
            }
        }
        function Et(e) {
            var t = this, n = e.elements.sources, r = null;
            this.animateSourceFromSlide = function (e) {
                return r = e - 1, t
            }, this.fadeOut = function () {
                o().add(Je)
            }, this.fadeIn = function () {
                o().add(Xe)
            }, this.removeFadeOut = function () {
                o().remove(Je)
            }, this.removeFadeIn = function () {
                o().contains(Xe) ? o().remove(Xe) : o().remove(Ge)
            };
            var o = function () {
                return n[r].current.classList
            }
        }
        function Rt(e) {
            var t = this, n = e.getters.getSlide, r = e.data;
            this.isSourceInStage = function (e) {
                if (e++, 1 === n() && e === r.totalSlides) return !0;
                if (n() === r.totalSlides && 1 === e) return !0;
                var t = n() - e;
                return t === se || t === ue || t === ae
            }, this.getPreviousSlideIndex = function () {
                return 1 === n() ? r.totalSlides - 1 : n() - 2
            }, this.getNextSlideIndex = function () {
                return n() === r.totalSlides ? 0 : n()
            }, this.getAllStageIndexes = function () {
                var e = { current: n() - 1 };
                return r.totalSlides > 1 && (e.next = t.getNextSlideIndex()), r.totalSlides > 2 && (e.previous = t.getPreviousSlideIndex()), e
            }
        }
        function kt(e) {
            var t = e.data;
            this.turnOnFullscreen = function () {
                t.isFullscreenOpen = !0;
                var e = document.documentElement;
                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }, this.turnOffFullscreen = function () {
                t.isFullscreenOpen = !1, document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            }
        }
        function Pt(e) {
            var t = e.core, n = t.sourceHoldersTransformer, r = t.stageSources, o = e.getters.getSlide,
                i = r.getAllStageIndexes();
            n.transformZero(i.current), this.withoutTimeout = function () {
                s(), u()
            }, this.withTimeout = function () {
                setTimeout(function () {
                    s(), u()
                }, 220)
            };
            var s = function () {
                void 0 !== i.previous && i.previous !== o() - 1 && n.transformNegative(i.previous)
            }, u = function () {
                void 0 !== i.next && i.next !== o() - 1 && n.transformPositive(i.next)
            }
        }
        function Tt(e) {
            var t = e.core, n = e.getters, r = e.sourcesData, o = e.elements;
            this.transformStageSourceHolders = function () {
                return new Pt({ core: t, getters: n })
            }, this.transformNegative = function (e) {
                i(e).transform = "translate(" + -r.slideDistance * window.innerWidth + "px,0)"
            }, this.transformZero = function (e) {
                i(e).transform = "translate(0,0)"
            }, this.transformPositive = function (e) {
                i(e).transform = "translate(" + r.slideDistance * window.innerWidth + "px,0)"
            };
            var i = function (e) {
                return o.sourceHolders[e].current.style
            }
        }
        function Ct(e) {
            var t = this, n = e.elements.container, r = e.core, o = r.sourceHoldersTransformer, i = r.fullscreenToggler,
                s = r.sizeController, u = r.eventsControllers.window.resize, a = e.data, c = e.setters.setState,
                l = e.getters.initialize, f = document.documentElement.classList, p = !1;
            this.openLightbox = function () {
                c({ isOpen: !0 }, function () {
                    h(), t.addOpeningClassToDocument()
                })
            }, this.addOpeningClassToDocument = function () {
                f.add(Ze)
            }, this.closeLightbox = function () {
                p || (p = !0, n.current.classList.add(Ye), a.isFullscreenOpen && i.turnOffFullscreen(), setTimeout(function () {
                    d()
                }, te))
            };
            var d = function () {
                n.current.classList.remove(Ye), p = !1, f.remove(Ze), c({ isOpen: !1 }), u.removeListener()
            }, h = function () {
                a.isInitialized ? (u.attachListener(), s.adjustMediaHolderSize(), o.transformStageSourceHolders().withoutTimeout()) : l()
            }
        }
        function Lt(e) {
            var t, n = e.core, r = n.sourceAnimator, o = n.sourceHoldersTransformer, i = e.getters.getSlide,
                s = e.setters.setState;
            this.changeSlideTo = function (e) {
                t = e, u(), s({ slide: t }, function () {
                    o.transformStageSourceHolders().withTimeout()
                })
            };
            var u = function () {
                r.animateSourceFromSlide(i()).removeFadeIn(), r.animateSourceFromSlide(i()).fadeOut(), r.animateSourceFromSlide(t).removeFadeOut(), r.animateSourceFromSlide(t).fadeIn()
            }
        }
        function Dt(e) {
            var t = e.core, n = t.sizeController, r = t.sourceSizeAdjusterIterator, o = t.sourceHoldersTransformer;
            this.attachListener = function () {
                window.addEventListener("resize", i)
            }, this.removeListener = function () {
                window.removeEventListener("resize", i)
            };
            var i = function () {
                n.controlAll(), r.adjustAllSourcesSizes(), o.transformStageSourceHolders().withoutTimeout()
            }
        }
        function qt(e) {
            var t = e.core.slideSwiping.move;
            console.log(t)
        }
        function At() {
        }
        function zt(e) {
            new qt(e), new At(e)
        }
        function Ft(e) {
            this.window = { resize: new Dt(e), swiping: new zt(e) }
        }
        var Ut = 1e3, It = .1;
        function Mt(e) {
            var t = this, n = e.sourcesData, r = e.setters.sourcesData, o = r.setMaxSourceWidth,
                i = r.setMaxSourceHeight, s = e.elements.mediaHolder;
            this.controlAll = function () {
                u(), t.adjustMediaHolderSize()
            }, this.adjustMediaHolderSize = function () {
                s.current.style.width = n.maxSourceWidth + "px", s.current.style.height = n.maxSourceHeight + "px"
            };
            var u = function () {
                window.innerWidth < Ut ? o(window.innerWidth) : o(window.innerWidth - window.innerWidth * It), i(window.innerHeight - window.innerHeight * It)
            }
        }
        function Ht() {
            this.listener = function () {
            }
        }
        function Nt() {
            this.listener = function () {
            }
        }
        function $t() {
            this.listener = function () {
            }
        }
        function Bt(e) {
            var t = {
                _swipedDifference: 0, get swipedDifference() {
                    return this._swipedDifference
                }, set swipedDifference(e) {
                    this._swipedDifference = e
                }, _downClientX: 0, get downClientX() {
                    return this._downClientX
                }, set downClientX(e) {
                    this._downClientX = e
                }, _isAfterSwipeAnimationRunning: !1, get isAfterSwipeAnimationRunning() {
                    return this._isAfterSwipeAnimationRunning
                }, set isAfterSwipeAnimationRunning(e) {
                    this._isAfterSwipeAnimationRunning = e
                }
            };
            this.down = new Ht(e, t), this.move = new Nt(e, t), this.up = new $t(e, t)
        }
        function Wt(e) {
            e.core = this, this.stageSources = new Rt(e), this.sourceSizeAdjusterIterator = new _t(e), this.sourceAnimator = new Et(e), this.fullscreenToggler = new kt(e), this.sourceHoldersTransformer = new Tt(e), this.slideChanger = new Lt(e), this.slideSwiping = new Bt(e), this.sizeController = new Mt(e), this.eventsControllers = new Ft(e), this.closeOpenLightbox = new Ct(e)
        }
        var Vt = function (e) {
            return e.isSwipingSlides ? o.a.createElement("div", { className: "fslightbox-invisible-hover" }) : null
        };
        Vt.propTypes = { isSwipingSlides: s.a.bool.isRequired };
        var Xt = Vt;
        function Jt(e) {
            return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Gt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Yt(e, t) {
            return !t || "object" !== Jt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Zt(e) {
            return (Zt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Kt(e, t) {
            return (Kt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Qt = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = Yt(this, Zt(t).call(this, e))).setUpData(), n.setUpSourcesData(), n.setUpStates(), n.setUpGetters(), n.setUpSetters(), n.setUpElements(), n.setUpCollections(), n.setUpCore(), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Kt(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "setUpData", value: function () {
                    this.data = {
                        urls: this.props.urls,
                        totalSlides: this.props.urls.length,
                        isFullscreenOpen: !1,
                        isInitialized: !1,
                        isSwipingSlides: !1,
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }
                }
            }, {
                key: "setUpSourcesData", value: function () {
                    this.sourcesData = {
                        sourcesTypes: [],
                        isSourceAlreadyLoadedArray: [],
                        sourcesToCreateOnConstruct: [],
                        videosPosters: this.props.videosPosters ? this.props.videosPosters : [],
                        maxSourceWidth: 0,
                        maxSourceHeight: 0,
                        slideDistance: this.props.slideDistance ? this.props.slideDistance : 1.3,
                        sourcesDimensions: []
                    }
                }
            }, {
                key: "setUpStates", value: function () {
                    this.state = { isOpen: this.props.isOpen, slide: this.props.slide ? this.props.slide : 1 }
                }
            }, {
                key: "setUpGetters", value: function () {
                    var e = this;
                    this.getters = {
                        initialize: function () {
                            return e.initialize()
                        }, getSlide: function () {
                            return e.state.slide
                        }
                    }
                }
            }, {
                key: "setUpSetters", value: function () {
                    var e = this;
                    this.setters = {
                        setState: function (t, n) {
                            return e.setState(t, n)
                        }, sourcesData: {
                            setMaxSourceWidth: function (t) {
                                return e.sourcesData.maxSourceWidth = t
                            }, setMaxSourceHeight: function (t) {
                                return e.sourcesData.maxSourceHeight = t
                            }
                        }
                    }
                }
            }, {
                key: "setUpElements", value: function () {
                    this.elements = {
                        container: o.a.createRef(),
                        mediaHolder: o.a.createRef(),
                        sources: Ot(this.data.totalSlides),
                        sourceHolders: Ot(this.data.totalSlides),
                        sourcesJSXComponents: jt(this.data.totalSlides)
                    }
                }
            }, {
                key: "setUpCore", value: function () {
                    this.core = new Wt(this)
                }
            }, {
                key: "setUpCollections", value: function () {
                    this.collections = { sourceSizeAdjusters: [] }
                }
            }, {
                key: "componentDidUpdate", value: function (e, t, n) {
                    e.isOpen !== this.props.isOpen && (this.state.isOpen ? this.core.closeOpenLightbox.closeLightbox() : this.core.closeOpenLightbox.openLightbox()), e.slide !== this.props.slide && this.core.slideChanger.changeSlideTo(this.props.slide)
                }
            }, {
                key: "initialize", value: function () {
                    this.data.isInitialized = !0, this.core.sizeController.controlAll(), this.core.eventsControllers.window.resize.attachListener(), this.core.sourceHoldersTransformer.transformStageSourceHolders().withoutTimeout()
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.props.isOpen && (this.initialize(), this.core.closeOpenLightbox.addOpeningClassToDocument())
                }
            }, {
                key: "render", value: function () {
                    return this.state.isOpen ? o.a.createElement("div", {
                        ref: this.elements.container,
                        className: "fslightbox-container"
                    }, o.a.createElement(Xt, { isSwipingSlides: this.data.isSwipingSlides }), o.a.createElement(M, {
                        core: this.core,
                        data: this.data,
                        slide: this.state.slide
                    }), o.a.createElement(X, { core: this.core }), o.a.createElement(ee, { core: this.core }), o.a.createElement(xt, {
                        core: this.core,
                        data: this.data,
                        elements: this.elements,
                        slide: this.state.slide,
                        sourcesData: this.sourcesData,
                        collections: this.collections
                    })) : null
                }
            }]) && Gt(n.prototype, i), s && Gt(n, s), t
        }();
        Qt.propTypes = {
            isOpen: s.a.bool.isRequired,
            urls: s.a.array.isRequired,
            onOpen: s.a.func,
            onClose: s.a.func,
            onInit: s.a.func,
            onShow: s.a.func,
            videosPosters: s.a.array,
            slide: s.a.number,
            slideDistance: s.a.number
        };
        t.default = Qt
    }])
});