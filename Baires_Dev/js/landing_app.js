/*! For license information please see landing_app.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 180));
})({
  13: function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  16: function (e, t, n) {
    var i;
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var r = [],
        s = Object.getPrototypeOf,
        a = r.slice,
        l = r.flat
          ? function (e) {
              return r.flat.call(e);
            }
          : function (e) {
              return r.concat.apply([], e);
            },
        c = r.push,
        u = r.indexOf,
        d = {},
        f = d.toString,
        p = d.hasOwnProperty,
        h = p.toString,
        m = h.call(Object),
        g = {},
        v = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function _(e, t, n) {
        var i,
          o,
          r = (n = n || b).createElement("script");
        if (((r.text = e), t))
          for (i in w)
            (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
      }
      function x(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[f.call(e)] || "object"
          : typeof e;
      }
      var E = function (e, t) {
        return new E.fn.init(e, t);
      };
      function T(e) {
        var t = !!e && "length" in e && e.length,
          n = x(e);
        return (
          !v(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (E.fn = E.prototype =
        {
          jquery: "3.5.1",
          constructor: E,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return E.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              E.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              E.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              E.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: r.sort,
          splice: r.splice,
        }),
        (E.extend = E.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              o,
              r,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || v(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (i = e[t]),
                    "__proto__" !== t &&
                      s !== i &&
                      (c && i && (E.isPlainObject(i) || (o = Array.isArray(i)))
                        ? ((n = s[t]),
                          (r =
                            o && !Array.isArray(n)
                              ? []
                              : o || E.isPlainObject(n)
                              ? n
                              : {}),
                          (o = !1),
                          (s[t] = E.extend(c, r, i)))
                        : void 0 !== i && (s[t] = i));
            return s;
          }),
        E.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== f.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = p.call(t, "constructor") && t.constructor) &&
                  h.call(n) === m))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            _(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (T(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (T(Object(e))
                  ? E.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
              e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
              !t(e[o], o) !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              o,
              r = 0,
              s = [];
            if (T(e))
              for (i = e.length; r < i; r++)
                null != (o = t(e[r], r, n)) && s.push(o);
            else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return l(s);
          },
          guid: 1,
          support: g,
        }),
        "function" == typeof Symbol &&
          (E.fn[Symbol.iterator] = r[Symbol.iterator]),
        E.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var C = (function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          p,
          h,
          m,
          g,
          v,
          y,
          b,
          w = "sizzle" + 1 * new Date(),
          _ = e.document,
          x = 0,
          E = 0,
          T = le(),
          C = le(),
          k = le(),
          S = le(),
          A = function (e, t) {
            return e === t && (d = !0), 0;
          },
          D = {}.hasOwnProperty,
          N = [],
          L = N.pop,
          O = N.push,
          I = N.push,
          j = N.slice,
          P = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          q =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          H = "[\\x20\\t\\r\\n\\f]",
          M =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            H +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          B =
            "\\[" +
            H +
            "*(" +
            M +
            ")(?:" +
            H +
            "*([*^$|!~]?=)" +
            H +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            M +
            "))|)" +
            H +
            "*\\]",
          R =
            ":(" +
            M +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            B +
            ")*)|.*)\\)|)",
          F = new RegExp(H + "+", "g"),
          W = new RegExp(
            "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
            "g"
          ),
          z = new RegExp("^" + H + "*," + H + "*"),
          U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          Q = new RegExp(H + "|>"),
          V = new RegExp(R),
          $ = new RegExp("^" + M + "$"),
          X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                H +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                H +
                "*(?:([+-]|)" +
                H +
                "*(\\d+)|))" +
                H +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + q + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                H +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                H +
                "*((?:-\\d)?\\d*)" +
                H +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          Y = /HTML$/i,
          G = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          oe = function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          re = function () {
            f();
          },
          se = we(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          I.apply((N = j.call(_.childNodes)), _.childNodes),
            N[_.childNodes.length].nodeType;
        } catch (e) {
          I = {
            apply: N.length
              ? function (e, t) {
                  O.apply(e, j.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                },
          };
        }
        function ae(e, t, i, o) {
          var r,
            a,
            c,
            u,
            d,
            h,
            v,
            y = t && t.ownerDocument,
            _ = t ? t.nodeType : 9;
          if (
            ((i = i || []),
            "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))
          )
            return i;
          if (!o && (f(t), (t = t || p), m)) {
            if (11 !== _ && (d = Z.exec(e)))
              if ((r = d[1])) {
                if (9 === _) {
                  if (!(c = t.getElementById(r))) return i;
                  if (c.id === r) return i.push(c), i;
                } else if (
                  y &&
                  (c = y.getElementById(r)) &&
                  b(t, c) &&
                  c.id === r
                )
                  return i.push(c), i;
              } else {
                if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                if (
                  (r = d[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return I.apply(i, t.getElementsByClassName(r)), i;
              }
            if (
              n.qsa &&
              !S[e + " "] &&
              (!g || !g.test(e)) &&
              (1 !== _ || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((v = e), (y = t), 1 === _ && (Q.test(e) || U.test(e)))) {
                for (
                  ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                    n.scope) ||
                    ((u = t.getAttribute("id"))
                      ? (u = u.replace(ie, oe))
                      : t.setAttribute("id", (u = w))),
                    a = (h = s(e)).length;
                  a--;

                )
                  h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                v = h.join(",");
              }
              try {
                return I.apply(i, y.querySelectorAll(v)), i;
              } catch (t) {
                S(e, !0);
              } finally {
                u === w && t.removeAttribute("id");
              }
            }
          }
          return l(e.replace(W, "$1"), t, i, o);
        }
        function le() {
          var e = [];
          return function t(n, o) {
            return (
              e.push(n + " ") > i.cacheLength && delete t[e.shift()],
              (t[n + " "] = o)
            );
          };
        }
        function ce(e) {
          return (e[w] = !0), e;
        }
        function ue(e) {
          var t = p.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function de(e, t) {
          for (var n = e.split("|"), o = n.length; o--; )
            i.attrHandle[n[o]] = t;
        }
        function fe(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function pe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function me(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function ge(e) {
          return ce(function (t) {
            return (
              (t = +t),
              ce(function (n, i) {
                for (var o, r = e([], n.length, t), s = r.length; s--; )
                  n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
              })
            );
          });
        }
        function ve(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = ae.support = {}),
        (r = ae.isXML =
          function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
          }),
        (f = ae.setDocument =
          function (e) {
            var t,
              o,
              s = e ? e.ownerDocument || e : _;
            return s != p && 9 === s.nodeType && s.documentElement
              ? ((h = (p = s).documentElement),
                (m = !r(p)),
                _ != p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", re, !1)
                    : o.attachEvent && o.attachEvent("onunload", re)),
                (n.scope = ue(function (e) {
                  return (
                    h.appendChild(e).appendChild(p.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ue(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ue(function (e) {
                  return (
                    e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = J.test(p.getElementsByClassName)),
                (n.getById = ue(function (e) {
                  return (
                    (h.appendChild(e).id = w),
                    !p.getElementsByName || !p.getElementsByName(w).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (i.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((i.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (i.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && m) {
                        var n,
                          i,
                          o,
                          r = t.getElementById(e);
                        if (r) {
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                          for (
                            o = t.getElementsByName(e), i = 0;
                            (r = o[i++]);

                          )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                              return [r];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (g = []),
                (n.qsa = J.test(p.querySelectorAll)) &&
                  (ue(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      w +
                      "'></a><select id='" +
                      w +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + H + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + H + "*(?:value|" + q + ")"),
                      e.querySelectorAll("[id~=" + w + "-]").length ||
                        g.push("~="),
                      (t = p.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        g.push(
                          "\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + w + "+*").length ||
                        g.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      g.push("[\\r\\n\\f]");
                  }),
                  ue(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + H + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = J.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ue(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      v.push("!=", R);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (t = J.test(h.compareDocumentPosition)),
                (b =
                  t || J.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (A = t
                  ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var i =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e == p || (e.ownerDocument == _ && b(_, e))
                            ? -1
                            : t == p || (t.ownerDocument == _ && b(_, t))
                            ? 1
                            : u
                            ? P(u, e) - P(u, t)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!o || !r)
                        return e == p
                          ? -1
                          : t == p
                          ? 1
                          : o
                          ? -1
                          : r
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0;
                      if (o === r) return fe(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[i] === a[i]; ) i++;
                      return i
                        ? fe(s[i], a[i])
                        : s[i] == _
                        ? -1
                        : a[i] == _
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
        (ae.matches = function (e, t) {
          return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
          if (
            (f(e),
            n.matchesSelector &&
              m &&
              !S[t + " "] &&
              (!v || !v.test(t)) &&
              (!g || !g.test(t)))
          )
            try {
              var i = y.call(e, t);
              if (
                i ||
                n.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {
              S(t, !0);
            }
          return ae(t, p, null, [e]).length > 0;
        }),
        (ae.contains = function (e, t) {
          return (e.ownerDocument || e) != p && f(e), b(e, t);
        }),
        (ae.attr = function (e, t) {
          (e.ownerDocument || e) != p && f(e);
          var o = i.attrHandle[t.toLowerCase()],
            r =
              o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
          return void 0 !== r
            ? r
            : n.attributes || !m
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
        (ae.escape = function (e) {
          return (e + "").replace(ie, oe);
        }),
        (ae.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ae.uniqueSort = function (e) {
          var t,
            i = [],
            o = 0,
            r = 0;
          if (
            ((d = !n.detectDuplicates),
            (u = !n.sortStable && e.slice(0)),
            e.sort(A),
            d)
          ) {
            for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
            for (; o--; ) e.splice(i[o], 1);
          }
          return (u = null), e;
        }),
        (o = ae.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += o(t);
            return n;
          }),
        ((i = ae.selectors =
          {
            cacheLength: 50,
            createPseudo: ce,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || ae.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && ae.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return X.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        V.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = T[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                    T(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (i) {
                  var o = ae.attr(i, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                          ? o !== n
                          : "^=" === t
                          ? n && 0 === o.indexOf(n)
                          : "*=" === t
                          ? n && o.indexOf(n) > -1
                          : "$=" === t
                          ? n && o.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        d,
                        f,
                        p,
                        h,
                        m = r !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        b = !1;
                      if (g) {
                        if (r) {
                          for (; m; ) {
                            for (f = t; (f = f[m]); )
                              if (
                                a
                                  ? f.nodeName.toLowerCase() === v
                                  : 1 === f.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                          for (
                            b =
                              (p =
                                (c =
                                  (u =
                                    (d = (f = g)[w] || (f[w] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  x && c[1]) && c[2],
                              f = p && g.childNodes[p];
                            (f = (++p && f && f[m]) || (b = p = 0) || h.pop());

                          )
                            if (1 === f.nodeType && ++b && f === t) {
                              u[e] = [x, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = p =
                              (c =
                                (u =
                                  (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] || [])[0] === x &&
                              c[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (f =
                              (++p && f && f[m]) || (b = p = 0) || h.pop()) &&
                            ((a
                              ? f.nodeName.toLowerCase() !== v
                              : 1 !== f.nodeType) ||
                              !++b ||
                              (y &&
                                ((u =
                                  (d = f[w] || (f[w] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] = [x, b]),
                              f !== t));

                          );
                        return (b -= o) === i || (b % i == 0 && b / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  o =
                    i.pseudos[e] ||
                    i.setFilters[e.toLowerCase()] ||
                    ae.error("unsupported pseudo: " + e);
                return o[w]
                  ? o(t)
                  : o.length > 1
                  ? ((n = [e, e, "", t]),
                    i.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ce(function (e, n) {
                          for (var i, r = o(e, t), s = r.length; s--; )
                            e[(i = P(e, r[s]))] = !(n[i] = r[s]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: ce(function (e) {
                var t = [],
                  n = [],
                  i = a(e.replace(W, "$1"));
                return i[w]
                  ? ce(function (e, t, n, o) {
                      for (var r, s = i(e, null, o, []), a = e.length; a--; )
                        (r = s[a]) && (e[a] = !(t[a] = r));
                    })
                  : function (e, o, r) {
                      return (
                        (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ce(function (e) {
                return function (t) {
                  return ae(e, t).length > 0;
                };
              }),
              contains: ce(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ce(function (e) {
                return (
                  $.test(e || "") || ae.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = m
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: me(!1),
              disabled: me(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !i.pseudos.empty(e);
              },
              header: function (e) {
                return K.test(e.nodeName);
              },
              input: function (e) {
                return G.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ge(function () {
                return [0];
              }),
              last: ge(function (e, t) {
                return [t - 1];
              }),
              eq: ge(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ge(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ge(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ge(function (e, t, n) {
                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                  e.push(i);
                return e;
              }),
              gt: ge(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          i.pseudos[t] = pe(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
        function ye() {}
        function be(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function we(e, t, n) {
          var i = t.dir,
            o = t.next,
            r = o || i,
            s = n && "parentNode" === r,
            a = E++;
          return t.first
            ? function (t, n, o) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s) return e(t, n, o);
                return !1;
              }
            : function (t, n, l) {
                var c,
                  u,
                  d,
                  f = [x, a];
                if (l) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((u =
                          (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                          (d[t.uniqueID] = {})),
                        o && o === t.nodeName.toLowerCase())
                      )
                        t = t[i] || t;
                      else {
                        if ((c = u[r]) && c[0] === x && c[1] === a)
                          return (f[2] = c[2]);
                        if (((u[r] = f), (f[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function _e(e) {
          return e.length > 1
            ? function (t, n, i) {
                for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function xe(e, t, n, i, o) {
          for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
          return s;
        }
        function Ee(e, t, n, i, o, r) {
          return (
            i && !i[w] && (i = Ee(i)),
            o && !o[w] && (o = Ee(o, r)),
            ce(function (r, s, a, l) {
              var c,
                u,
                d,
                f = [],
                p = [],
                h = s.length,
                m =
                  r ||
                  (function (e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                    return n;
                  })(t || "*", a.nodeType ? [a] : a, []),
                g = !e || (!r && t) ? m : xe(m, f, e, a, l),
                v = n ? (o || (r ? e : h || i) ? [] : s) : g;
              if ((n && n(g, v, a, l), i))
                for (c = xe(v, p), i(c, [], a, l), u = c.length; u--; )
                  (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
              if (r) {
                if (o || e) {
                  if (o) {
                    for (c = [], u = v.length; u--; )
                      (d = v[u]) && c.push((g[u] = d));
                    o(null, (v = []), c, l);
                  }
                  for (u = v.length; u--; )
                    (d = v[u]) &&
                      (c = o ? P(r, d) : f[u]) > -1 &&
                      (r[c] = !(s[c] = d));
                }
              } else (v = xe(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : I.apply(s, v);
            })
          );
        }
        function Te(e) {
          for (
            var t,
              n,
              o,
              r = e.length,
              s = i.relative[e[0].type],
              a = s || i.relative[" "],
              l = s ? 1 : 0,
              u = we(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              d = we(
                function (e) {
                  return P(t, e) > -1;
                },
                a,
                !0
              ),
              f = [
                function (e, n, i) {
                  var o =
                    (!s && (i || n !== c)) ||
                    ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                  return (t = null), o;
                },
              ];
            l < r;
            l++
          )
            if ((n = i.relative[e[l].type])) f = [we(_e(f), n)];
            else {
              if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                return Ee(
                  l > 1 && _e(f),
                  l > 1 &&
                    be(
                      e
                        .slice(0, l - 1)
                        .concat({ value: " " === e[l - 2].type ? "*" : "" })
                    ).replace(W, "$1"),
                  n,
                  l < o && Te(e.slice(l, o)),
                  o < r && Te((e = e.slice(o))),
                  o < r && be(e)
                );
              }
              f.push(n);
            }
          return _e(f);
        }
        return (
          (ye.prototype = i.filters = i.pseudos),
          (i.setFilters = new ye()),
          (s = ae.tokenize =
            function (e, t) {
              var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u = C[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (a = e, l = [], c = i.preFilter; a; ) {
                for (s in ((n && !(o = z.exec(a))) ||
                  (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                (n = !1),
                (o = U.exec(a)) &&
                  ((n = o.shift()),
                  r.push({ value: n, type: o[0].replace(W, " ") }),
                  (a = a.slice(n.length))),
                i.filter))
                  !(o = X[s].exec(a)) ||
                    (c[s] && !(o = c[s](o))) ||
                    ((n = o.shift()),
                    r.push({ value: n, type: s, matches: o }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
            }),
          (a = ae.compile =
            function (e, t) {
              var n,
                o = [],
                r = [],
                a = k[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Te(t[n]))[w] ? o.push(a) : r.push(a);
                (a = k(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      r = function (r, s, a, l, u) {
                        var d,
                          h,
                          g,
                          v = 0,
                          y = "0",
                          b = r && [],
                          w = [],
                          _ = c,
                          E = r || (o && i.find.TAG("*", u)),
                          T = (x += null == _ ? 1 : Math.random() || 0.1),
                          C = E.length;
                        for (
                          u && (c = s == p || s || u);
                          y !== C && null != (d = E[y]);
                          y++
                        ) {
                          if (o && d) {
                            for (
                              h = 0,
                                s || d.ownerDocument == p || (f(d), (a = !m));
                              (g = e[h++]);

                            )
                              if (g(d, s || p, a)) {
                                l.push(d);
                                break;
                              }
                            u && (x = T);
                          }
                          n && ((d = !g && d) && v--, r && b.push(d));
                        }
                        if (((v += y), n && y !== v)) {
                          for (h = 0; (g = t[h++]); ) g(b, w, s, a);
                          if (r) {
                            if (v > 0)
                              for (; y--; ) b[y] || w[y] || (w[y] = L.call(l));
                            w = xe(w);
                          }
                          I.apply(l, w),
                            u &&
                              !r &&
                              w.length > 0 &&
                              v + t.length > 1 &&
                              ae.uniqueSort(l);
                        }
                        return u && ((x = T), (c = _)), b;
                      };
                    return n ? ce(r) : r;
                  })(r, o)
                )).selector = e;
              }
              return a;
            }),
          (l = ae.select =
            function (e, t, n, o) {
              var r,
                l,
                c,
                u,
                d,
                f = "function" == typeof e && e,
                p = !o && s((e = f.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (l = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = l[0]).type &&
                  9 === t.nodeType &&
                  m &&
                  i.relative[l[1].type]
                ) {
                  if (
                    !(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  f && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  r = X.needsContext.test(e) ? 0 : l.length;
                  r-- && ((c = l[r]), !i.relative[(u = c.type)]);

                )
                  if (
                    (d = i.find[u]) &&
                    (o = d(
                      c.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && ve(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(r, 1), !(e = o.length && be(l))))
                      return I.apply(n, o), n;
                    break;
                  }
              }
              return (
                (f || a(e, p))(
                  o,
                  t,
                  !m,
                  n,
                  !t || (ee.test(e) && ve(t.parentNode)) || t
                ),
                n
              );
            }),
          (n.sortStable = w.split("").sort(A).join("") === w),
          (n.detectDuplicates = !!d),
          f(),
          (n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
          })),
          ue(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            ue(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          ue(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            de(q, function (e, t, n) {
              var i;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
            }),
          ae
        );
      })(n);
      (E.find = C),
        (E.expr = C.selectors),
        (E.expr[":"] = E.expr.pseudos),
        (E.uniqueSort = E.unique = C.uniqueSort),
        (E.text = C.getText),
        (E.isXMLDoc = C.isXML),
        (E.contains = C.contains),
        (E.escapeSelector = C.escape);
      var k = function (e, t, n) {
          for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && E(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        S = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        A = E.expr.match.needsContext;
      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return v(t)
          ? E.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? E.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? E.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : E.filter(t, e, n);
      }
      (E.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? E.find.matchesSelector(i, e)
              ? [i]
              : []
            : E.find.matches(
                e,
                E.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        E.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                E(e).filter(function () {
                  for (t = 0; t < i; t++) if (E.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
            return i > 1 ? E.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(
              this,
              "string" == typeof e && A.test(e) ? E(e) : e || [],
              !1
            ).length;
          },
        });
      var O,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((E.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || O), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : I.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof E ? t[0] : t),
              E.merge(
                this,
                E.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              N.test(i[1]) && E.isPlainObject(t))
            )
              for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (o = b.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(E)
          : E.makeArray(e, this);
      }).prototype = E.fn),
        (O = E(b));
      var j = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      E.fn.extend({
        has: function (e) {
          var t = E(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof e && E(e);
          if (!A.test(e))
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && E.find.matchesSelector(n, e))
                ) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? E.uniqueSort(r) : r);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(E(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        E.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return k(e, "parentNode", n);
            },
            next: function (e) {
              return q(e, "nextSibling");
            },
            prev: function (e) {
              return q(e, "previousSibling");
            },
            nextAll: function (e) {
              return k(e, "nextSibling");
            },
            prevAll: function (e) {
              return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return k(e, "previousSibling", n);
            },
            siblings: function (e) {
              return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return S(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (D(e, "template") && (e = e.content || e),
                  E.merge([], e.childNodes));
            },
          },
          function (e, t) {
            E.fn[e] = function (n, i) {
              var o = E.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = E.filter(i, o)),
                this.length > 1 &&
                  (P[e] || E.uniqueSort(o), j.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var H = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function B(e) {
        throw e;
      }
      function R(e, t, n, i) {
        var o;
        try {
          e && v((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && v((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (E.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  E.each(e.match(H) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : E.extend({}, e);
        var t,
          n,
          i,
          o,
          r = [],
          s = [],
          a = -1,
          l = function () {
            for (o = o || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < r.length; )
                !1 === r[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = r.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                r &&
                  (n && !t && ((a = r.length - 1), s.push(n)),
                  (function t(n) {
                    E.each(n, function (n, i) {
                      v(i)
                        ? (e.unique && c.has(i)) || r.push(i)
                        : i && i.length && "string" !== x(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                E.each(arguments, function (e, t) {
                  for (var n; (n = E.inArray(t, r, n)) > -1; )
                    r.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? E.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function () {
              return r && (r = []), this;
            },
            disable: function () {
              return (o = s = []), (r = n = ""), this;
            },
            disabled: function () {
              return !r;
            },
            lock: function () {
              return (o = s = []), n || t || (r = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        E.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  E.Callbacks("memory"),
                  E.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  E.Callbacks("once memory"),
                  E.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  E.Callbacks("once memory"),
                  E.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              o = {
                state: function () {
                  return i;
                },
                always: function () {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return E.Deferred(function (n) {
                    E.each(t, function (t, i) {
                      var o = v(e[i[4]]) && e[i[4]];
                      r[i[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && v(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, o) {
                  var r = 0;
                  function s(e, t, i, o) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < r)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(c)
                                ? o
                                  ? c.call(n, s(r, t, M, o), s(r, t, B, o))
                                  : (r++,
                                    c.call(
                                      n,
                                      s(r, t, M, o),
                                      s(r, t, B, o),
                                      s(r, t, M, t.notifyWith)
                                    ))
                                : (i !== M && ((a = void 0), (l = [n])),
                                  (o || t.resolveWith)(a, l));
                          }
                        },
                        u = o
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                E.Deferred.exceptionHook &&
                                  E.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= r &&
                                    (i !== B && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (E.Deferred.getStackHook &&
                            (u.stackTrace = E.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return E.Deferred(function (n) {
                    t[0][3].add(s(0, n, v(o) ? o : M, n.notifyWith)),
                      t[1][3].add(s(0, n, v(e) ? e : M)),
                      t[2][3].add(s(0, n, v(i) ? i : B));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? E.extend(e, o) : o;
                },
              },
              r = {};
            return (
              E.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (o[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (r[n[0]] = function () {
                    return (
                      r[n[0] + "With"](this === r ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (r[n[0] + "With"] = s.fireWith);
              }),
              o.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              o = a.call(arguments),
              r = E.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (o[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || r.resolveWith(i, o);
                };
              };
            if (
              t <= 1 &&
              (R(e, r.done(s(n)).resolve, r.reject, !t),
              "pending" === r.state() || v(o[n] && o[n].then))
            )
              return r.then();
            for (; n--; ) R(o[n], s(n), r.reject);
            return r.promise();
          },
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (E.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          F.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (E.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var W = E.Deferred();
      function z() {
        b.removeEventListener("DOMContentLoaded", z),
          n.removeEventListener("load", z),
          E.ready();
      }
      (E.fn.ready = function (e) {
        return (
          W.then(e).catch(function (e) {
            E.readyException(e);
          }),
          this
        );
      }),
        E.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) ||
              ((E.isReady = !0),
              (!0 !== e && --E.readyWait > 0) || W.resolveWith(b, [E]));
          },
        }),
        (E.ready.then = W.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(E.ready)
          : (b.addEventListener("DOMContentLoaded", z),
            n.addEventListener("load", z));
      var U = function (e, t, n, i, o, r, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === x(n))
            for (a in ((o = !0), n)) U(e, t, a, n[a], !0, r, s);
          else if (
            void 0 !== i &&
            ((o = !0),
            v(i) || (s = !0),
            c &&
              (s
                ? (t.call(e, i), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(E(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        Q = /^-ms-/,
        V = /-([a-z])/g;
      function $(e, t) {
        return t.toUpperCase();
      }
      function X(e) {
        return e.replace(Q, "ms-").replace(V, $);
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function G() {
        this.expando = E.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              o = this.cache(e);
            if ("string" == typeof t) o[X(t)] = n;
            else for (i in t) o[X(i)] = t[i];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][X(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(X)
                  : (t = X(t)) in i
                  ? [t]
                  : t.match(H) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || E.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t);
          },
        });
      var K = new G(),
        J = new G(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            J.set(e, t, n);
          } else n = void 0;
        return n;
      }
      E.extend({
        hasData: function (e) {
          return J.hasData(e) || K.hasData(e);
        },
        data: function (e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function (e, t) {
          J.remove(e, t);
        },
        _data: function (e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function (e, t) {
          K.remove(e, t);
        },
      }),
        E.fn.extend({
          data: function (e, t) {
            var n,
              i,
              o,
              r = this[0],
              s = r && r.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = J.get(r)), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = X(i.slice(5))), te(r, i, o[i]));
                K.set(r, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  J.set(this, e);
                })
              : U(
                  this,
                  function (t) {
                    var n;
                    if (r && void 0 === t)
                      return void 0 !== (n = J.get(r, e)) ||
                        void 0 !== (n = te(r, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      J.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              J.remove(this, e);
            });
          },
        }),
        E.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = K.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = K.access(e, t, E.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
              i = n.length,
              o = n.shift(),
              r = E._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), i--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(
                  e,
                  function () {
                    E.dequeue(e, t);
                  },
                  r
                )),
              !i && r && r.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                  K.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        E.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? E.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = E.queue(this, e, t);
                    E._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              E.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              o = E.Deferred(),
              r = this,
              s = this.length,
              a = function () {
                --i || o.resolveWith(r, [r]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = K.get(r[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        re = b.documentElement,
        se = function (e) {
          return E.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      re.getRootNode &&
        (se = function (e) {
          return (
            E.contains(e.ownerDocument, e) ||
            e.getRootNode(ae) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && se(e) && "none" === E.css(e, "display"))
        );
      };
      function ce(e, t, n, i) {
        var o,
          r,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return E.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (E.cssNumber[t] || ("px" !== c && +l)) &&
            ie.exec(E.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            E.style(e, t, u + c),
              (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= r);
          (u *= 2), E.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = o))),
          o
        );
      }
      var ue = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = ue[i];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(i))),
          (o = E.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ue[i] = o),
          o)
        );
      }
      function fe(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
          (i = e[r]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((o[r] = K.get(i, "display") || null),
                  o[r] || (i.style.display = "")),
                "" === i.style.display && le(i) && (o[r] = de(i)))
              : "none" !== n && ((o[r] = "none"), K.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
      }
      E.fn.extend({
        show: function () {
          return fe(this, !0);
        },
        hide: function () {
          return fe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? E(this).show() : E(this).hide();
              });
        },
      });
      var pe,
        he,
        me = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        pe.appendChild(he),
        (g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = "<textarea>x</textarea>"),
        (g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = "<option></option>"),
        (g.option = !!pe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && D(e, t)) ? E.merge([e], n) : n
        );
      }
      function we(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        g.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var _e = /<|&#?\w+;/;
      function xe(e, t, n, i, o) {
        for (
          var r,
            s,
            a,
            l,
            c,
            u,
            d = t.createDocumentFragment(),
            f = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((r = e[p]) || 0 === r)
            if ("object" === x(r)) E.merge(f, r.nodeType ? [r] : r);
            else if (_e.test(r)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  a = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + E.htmlPrefilter(r) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              E.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
            } else f.push(t.createTextNode(r));
        for (d.textContent = "", p = 0; (r = f[p++]); )
          if (i && E.inArray(r, i) > -1) o && o.push(r);
          else if (
            ((c = se(r)), (s = be(d.appendChild(r), "script")), c && we(s), n)
          )
            for (u = 0; (r = s[u++]); ) ve.test(r.type || "") && n.push(r);
        return d;
      }
      var Ee = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
      function ke() {
        return !0;
      }
      function Se() {
        return !1;
      }
      function Ae(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function De(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            De(e, a, n, i, t[a], r);
          return e;
        }
        if (
          (null == i && null == o
            ? ((o = n), (i = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          !1 === o)
        )
          o = Se;
        else if (!o) return e;
        return (
          1 === r &&
            ((s = o),
            ((o = function (e) {
              return E().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = E.guid++))),
          e.each(function () {
            E.event.add(this, t, o, i, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (K.set(e, t, !1),
            E.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  o,
                  r = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (r.length)
                    (E.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((r = a.call(arguments)),
                    K.set(this, t, r),
                    (i = n(this, t)),
                    this[t](),
                    r !== (o = K.get(this, t)) || i
                      ? K.set(this, t, !1)
                      : (o = {}),
                    r !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  r.length &&
                    (K.set(this, t, {
                      value: E.event.trigger(
                        E.extend(r[0], E.Event.prototype),
                        r.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === K.get(e, t) && E.event.add(e, t, ke);
      }
      (E.event = {
        global: {},
        add: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g = K.get(e);
          if (Y(e))
            for (
              n.handler && ((n = (r = n).handler), (o = r.selector)),
                o && E.find.matchesSelector(re, o),
                n.guid || (n.guid = E.guid++),
                (l = g.events) || (l = g.events = Object.create(null)),
                (s = g.handle) ||
                  (s = g.handle =
                    function (t) {
                      return void 0 !== E && E.event.triggered !== t.type
                        ? E.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(H) || [""]).length;
              c--;

            )
              (p = m = (a = Ce.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                p &&
                  ((d = E.event.special[p] || {}),
                  (p = (o ? d.delegateType : d.bindType) || p),
                  (d = E.event.special[p] || {}),
                  (u = E.extend(
                    {
                      type: p,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && E.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    r
                  )),
                  (f = l[p]) ||
                    (((f = l[p] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                      (e.addEventListener && e.addEventListener(p, s))),
                  d.add &&
                    (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                  (E.event.global[p] = !0));
        },
        remove: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g = K.hasData(e) && K.get(e);
          if (g && (l = g.events)) {
            for (c = (t = (t || "").match(H) || [""]).length; c--; )
              if (
                ((p = m = (a = Ce.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  d = E.event.special[p] || {},
                    f = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = r = f.length;
                  r--;

                )
                  (u = f[r]),
                    (!o && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (f.splice(r, 1),
                      u.selector && f.delegateCount--,
                      d.remove && d.remove.call(e, u));
                s &&
                  !f.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                    E.removeEvent(e, p, g.handle),
                  delete l[p]);
              } else for (p in l) E.event.remove(e, p + t[c], n, i, !0);
            E.isEmptyObject(l) && K.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a = new Array(arguments.length),
            l = E.event.fix(e),
            c = (K.get(this, "events") || Object.create(null))[l.type] || [],
            u = E.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = E.event.handlers.call(this, l, c), t = 0;
              (o = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== r.namespace &&
                  !l.rnamespace.test(r.namespace)) ||
                  ((l.handleObj = r),
                  (l.data = r.data),
                  void 0 !==
                    (i = (
                      (E.event.special[r.origType] || {}).handle || r.handler
                    ).apply(o.elem, a)) &&
                    !1 === (l.result = i) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            o,
            r,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (r = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(o = (i = t[n]).selector + " ")] &&
                    (s[o] = i.needsContext
                      ? E(o, this).index(c) > -1
                      : E.find(o, this, null, [c]).length),
                    s[o] && r.push(i);
                r.length && a.push({ elem: c, handlers: r });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(E.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[E.expando] ? e : new E.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                me.test(t.type) &&
                  t.click &&
                  D(t, "input") &&
                  Ne(t, "click", ke),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                me.test(t.type) && t.click && D(t, "input") && Ne(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (me.test(t.type) &&
                  t.click &&
                  D(t, "input") &&
                  K.get(t, "click")) ||
                D(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (E.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (E.Event = function (e, t) {
          if (!(this instanceof E.Event)) return new E.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? ke
                  : Se),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && E.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[E.expando] = !0);
        }),
        (E.Event.prototype = {
          constructor: E.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = ke),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = ke),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = ke),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        E.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Ee.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Te.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          E.event.addProp
        ),
        E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          E.event.special[e] = {
            setup: function () {
              return Ne(this, e, Ae), !1;
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            delegateType: t,
          };
        }),
        E.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            E.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = this,
                  o = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (o && (o === i || E.contains(i, o))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        E.fn.extend({
          on: function (e, t, n, i) {
            return De(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return De(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                E(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Se),
              this.each(function () {
                E.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Le = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function je(e, t) {
        return (
          (D(e, "table") &&
            D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            E(e).children("tbody")[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function qe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function He(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
          if (K.hasData(e) && (a = K.get(e).events))
            for (o in (K.remove(t, "handle events"), a))
              for (n = 0, i = a[o].length; n < i; n++)
                E.event.add(t, o, a[o][n]);
          J.hasData(e) &&
            ((r = J.access(e)), (s = E.extend({}, r)), J.set(t, s));
        }
      }
      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, i) {
        t = l(t);
        var o,
          r,
          s,
          a,
          c,
          u,
          d = 0,
          f = e.length,
          p = f - 1,
          h = t[0],
          m = v(h);
        if (m || (f > 1 && "string" == typeof h && !g.checkClone && Oe.test(h)))
          return e.each(function (o) {
            var r = e.eq(o);
            m && (t[0] = h.call(this, o, r.html())), Be(r, t, n, i);
          });
        if (
          f &&
          ((r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === o.childNodes.length && (o = r),
          r || i)
        ) {
          for (a = (s = E.map(be(o, "script"), Pe)).length; d < f; d++)
            (c = o),
              d !== p &&
                ((c = E.clone(c, !0, !0)), a && E.merge(s, be(c, "script"))),
              n.call(e[d], c, d);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, E.map(s, qe), d = 0;
              d < a;
              d++
            )
              (c = s[d]),
                ve.test(c.type || "") &&
                  !K.access(c, "globalEval") &&
                  E.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? E._evalUrl &&
                      !c.noModule &&
                      E._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : _(c.textContent.replace(Ie, ""), c, u));
        }
        return e;
      }
      function Re(e, t, n) {
        for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
          n || 1 !== i.nodeType || E.cleanData(be(i)),
            i.parentNode &&
              (n && se(i) && we(be(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      E.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a = e.cloneNode(!0),
            l = se(e);
          if (
            !(
              g.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              E.isXMLDoc(e)
            )
          )
            for (s = be(a), i = 0, o = (r = be(e)).length; i < o; i++)
              Me(r[i], s[i]);
          if (t)
            if (n)
              for (
                r = r || be(e), s = s || be(a), i = 0, o = r.length;
                i < o;
                i++
              )
                He(r[i], s[i]);
            else He(e, a);
          return (
            (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, o = E.event.special, r = 0;
            void 0 !== (n = e[r]);
            r++
          )
            if (Y(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (i in t.events)
                    o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                n[K.expando] = void 0;
              }
              n[J.expando] && (n[J.expando] = void 0);
            }
        },
      }),
        E.fn.extend({
          detach: function (e) {
            return Re(this, e, !0);
          },
          remove: function (e) {
            return Re(this, e);
          },
          text: function (e) {
            return U(
              this,
              function (e) {
                return void 0 === e
                  ? E.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Be(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                je(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Be(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = je(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Be(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Be(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (E.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return E.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return U(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Le.test(e) &&
                  !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = E.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (E.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Be(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                E.inArray(this, e) < 0 &&
                  (E.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        E.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            E.fn[e] = function (e) {
              for (
                var n, i = [], o = E(e), r = o.length - 1, s = 0;
                s <= r;
                s++
              )
                (n = s === r ? this : this.clone(!0)),
                  E(o[s])[t](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        We = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        ze = function (e, t, n) {
          var i,
            o,
            r = {};
          for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
          return i;
        },
        Ue = new RegExp(oe.join("|"), "i");
      function Qe(e, t, n) {
        var i,
          o,
          r,
          s,
          a = e.style;
        return (
          (n = n || We(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (s = E.style(e, t)),
            !g.pixelBoxStyles() &&
              Fe.test(s) &&
              Ue.test(t) &&
              ((i = a.width),
              (o = a.minWidth),
              (r = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = o),
              (a.maxWidth = r))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ve(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              re.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (r = 12 === t(u.offsetWidth / 3)),
              re.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          o,
          r,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
          E.extend(g, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), r;
            },
            reliableTrDimensions: function () {
              var e, t, i, o;
              return (
                null == a &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (i = b.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (i.style.height = "9px"),
                  re.appendChild(e).appendChild(t).appendChild(i),
                  (o = n.getComputedStyle(t)),
                  (a = parseInt(o.height) > 3),
                  re.removeChild(e)),
                a
              );
            },
          }));
      })();
      var $e = ["Webkit", "Moz", "ms"],
        Xe = b.createElement("div").style,
        Ye = {};
      function Ge(e) {
        var t = E.cssProps[e] || Ye[e];
        return (
          t ||
          (e in Xe
            ? e
            : (Ye[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = $e.length;
                    n--;

                  )
                    if ((e = $e[n] + t) in Xe) return e;
                })(e) || e))
        );
      }
      var Ke = /^(none|table(?!-c[ea]).+)/,
        Je = /^--/,
        Ze = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var i = ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function nt(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += E.css(e, n + oe[s], !0, o)),
            i
              ? ("content" === n && (l -= E.css(e, "padding" + oe[s], !0, o)),
                "margin" !== n &&
                  (l -= E.css(e, "border" + oe[s] + "Width", !0, o)))
              : ((l += E.css(e, "padding" + oe[s], !0, o)),
                "padding" !== n
                  ? (l += E.css(e, "border" + oe[s] + "Width", !0, o))
                  : (a += E.css(e, "border" + oe[s] + "Width", !0, o)));
        return (
          !i &&
            r >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    r -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function it(e, t, n) {
        var i = We(e),
          o =
            (!g.boxSizingReliable() || n) &&
            "border-box" === E.css(e, "boxSizing", !1, i),
          r = o,
          s = Qe(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!g.boxSizingReliable() && o) ||
            (!g.reliableTrDimensions() && D(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === E.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((o = "border-box" === E.css(e, "boxSizing", !1, i)),
            (r = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            nt(e, t, n || (o ? "border" : "content"), r, i, s) +
            "px"
        );
      }
      function ot(e, t, n, i, o) {
        return new ot.prototype.init(e, t, n, i, o);
      }
      E.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Qe(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              r,
              s,
              a = X(t),
              l = Je.test(t),
              c = e.style;
            if (
              (l || (t = Ge(a)),
              (s = E.cssHooks[t] || E.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (o = s.get(e, !1, i))
                ? o
                : c[t];
            "string" === (r = typeof n) &&
              (o = ie.exec(n)) &&
              o[1] &&
              ((n = ce(e, t, o)), (r = "number")),
              null != n &&
                n == n &&
                ("number" !== r ||
                  l ||
                  (n += (o && o[3]) || (E.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var o,
            r,
            s,
            a = X(t);
          return (
            Je.test(t) || (t = Ge(a)),
            (s = E.cssHooks[t] || E.cssHooks[a]) &&
              "get" in s &&
              (o = s.get(e, !0, n)),
            void 0 === o && (o = Qe(e, t, i)),
            "normal" === o && t in et && (o = et[t]),
            "" === n || n
              ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
              : o
          );
        },
      }),
        E.each(["height", "width"], function (e, t) {
          E.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Ke.test(E.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? it(e, t, i)
                  : ze(e, Ze, function () {
                      return it(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var o,
                r = We(e),
                s = !g.scrollboxSize() && "absolute" === r.position,
                a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, r),
                l = i ? nt(e, t, i, a, r) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(r[t]) -
                      nt(e, t, "border", !1, r) -
                      0.5
                  )),
                l &&
                  (o = ie.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = E.css(e, t))),
                tt(0, n, l)
              );
            },
          };
        }),
        (E.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Qe(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  ze(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (E.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  o = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
              return o;
            },
          }),
            "margin" !== e && (E.cssHooks[e + t].set = tt);
        }),
        E.fn.extend({
          css: function (e, t) {
            return U(
              this,
              function (e, t, n) {
                var i,
                  o,
                  r = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = We(e), o = t.length; s < o; s++)
                    r[t[s]] = E.css(e, t[s], !1, i);
                  return r;
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (E.Tween = ot),
        (ot.prototype = {
          constructor: ot,
          init: function (e, t, n, i, o, r) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || E.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = r || (E.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    E.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ot.propHooks._default.set(this),
              this
            );
          },
        }),
        (ot.prototype.init.prototype = ot.prototype),
        (ot.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              E.fx.step[e.prop]
                ? E.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!E.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : E.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (E.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (E.fx = ot.prototype.init),
        (E.fx.step = {});
      var rt,
        st,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ct() {
        st &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ct)
            : n.setTimeout(ct, E.fx.interval),
          E.fx.tick());
      }
      function ut() {
        return (
          n.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          i = 0,
          o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          o["margin" + (n = oe[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function ft(e, t, n) {
        for (
          var i,
            o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            r = 0,
            s = o.length;
          r < s;
          r++
        )
          if ((i = o[r].call(n, t, e))) return i;
      }
      function pt(e, t, n) {
        var i,
          o,
          r = 0,
          s = pt.prefilters.length,
          a = E.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = rt || ut(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = 1 - (n / c.duration || 0),
                r = 0,
                s = c.tweens.length;
              r < s;
              r++
            )
              c.tweens[r].run(i);
            return (
              a.notifyWith(e, [c, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: E.extend({}, t),
            opts: E.extend(
              !0,
              { specialEasing: {}, easing: E.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || ut(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = E.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, i, o, r, s;
            for (n in e)
              if (
                ((o = t[(i = X(n))]),
                (r = e[n]),
                Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                n !== i && ((e[i] = r), delete e[n]),
                (s = E.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((r = s.expand(r)), delete e[i], r))
                  (n in e) || ((e[n] = r[n]), (t[n] = o));
              else t[i] = o;
          })(u, c.opts.specialEasing);
          r < s;
          r++
        )
          if ((i = pt.prefilters[r].call(c, e, u, c.opts)))
            return (
              v(i.stop) &&
                (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          E.map(u, ft, c),
          v(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          E.fx.timer(E.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (E.Animation = E.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, ie.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
          for (var n, i = 0, o = e.length; i < o; i++)
            (n = e[i]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d = "width" in t || "height" in t,
              f = this,
              p = {},
              h = e.style,
              m = e.nodeType && le(e),
              g = K.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = E._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              f.always(function () {
                f.always(function () {
                  s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((o = t[i]), at.test(o))) {
                if (
                  (delete t[i],
                  (r = r || "toggle" === o),
                  o === (m ? "hide" : "show"))
                ) {
                  if ("show" !== o || !g || void 0 === g[i]) continue;
                  m = !0;
                }
                p[i] = (g && g[i]) || E.style(e, i);
              }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
              for (i in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = K.get(e, "display")),
                "none" === (u = E.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (fe([e], !0),
                      (c = e.style.display || c),
                      (u = E.css(e, "display")),
                      fe([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === E.css(e, "float") &&
                  (l ||
                    (f.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                f.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (g
                    ? "hidden" in g && (m = g.hidden)
                    : (g = K.access(e, "fxshow", { display: c })),
                  r && (g.hidden = !m),
                  m && fe([e], !0),
                  f.done(function () {
                    for (i in (m || fe([e]), K.remove(e, "fxshow"), p))
                      E.style(e, i, p[i]);
                  })),
                  (l = ft(m ? g[i] : 0, i, f)),
                  i in g ||
                    ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (E.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? E.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            E.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in E.fx.speeds
                  ? (i.duration = E.fx.speeds[i.duration])
                  : (i.duration = E.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
            }),
            i
          );
        }),
        E.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var o = E.isEmptyObject(e),
              r = E.speed(t, n, i),
              s = function () {
                var t = pt(this, E.extend({}, e), r);
                (o || K.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  r = E.timers,
                  s = K.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                for (o = r.length; o--; )
                  r[o].elem !== this ||
                    (null != e && r[o].queue !== e) ||
                    (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                (!t && n) || E.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = K.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  r = E.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    E.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = r.length;
                  t--;

                )
                  r[t].elem === this &&
                    r[t].queue === e &&
                    (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        E.each(["toggle", "show", "hide"], function (e, t) {
          var n = E.fn[t];
          E.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, i, o);
          };
        }),
        E.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            E.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (E.timers = []),
        (E.fx.tick = function () {
          var e,
            t = 0,
            n = E.timers;
          for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || E.fx.stop(), (rt = void 0);
        }),
        (E.fx.timer = function (e) {
          E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function () {
          st || ((st = !0), ct());
        }),
        (E.fx.stop = function () {
          st = null;
        }),
        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (E.fn.delay = function (e, t) {
          return (
            (e = (E.fx && E.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var o = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (g.checkOn = "" !== e.value),
            (g.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (g.radioValue = "t" === e.value);
        })();
      var ht,
        mt = E.expr.attrHandle;
      E.fn.extend({
        attr: function (e, t) {
          return U(this, E.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            E.removeAttr(this, e);
          });
        },
      }),
        E.extend({
          attr: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute
                ? E.prop(e, t, n)
                : ((1 === r && E.isXMLDoc(e)) ||
                    (o =
                      E.attrHooks[t.toLowerCase()] ||
                      (E.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void E.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (i = o.get(e, t))
                    ? i
                    : null == (i = E.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!g.radioValue && "radio" === t && D(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(H);
            if (o && 1 === e.nodeType)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          },
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = mt[t] || E.find.attr;
          mt[t] = function (e, t, i) {
            var o,
              r,
              s = t.toLowerCase();
            return (
              i ||
                ((r = mt[s]),
                (mt[s] = o),
                (o = null != n(e, t, i) ? s : null),
                (mt[s] = r)),
              o
            );
          };
        });
      var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(H) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function wt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(H)) || [];
      }
      E.fn.extend({
        prop: function (e, t) {
          return U(this, E.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[E.propFix[e] || e];
          });
        },
      }),
        E.extend({
          prop: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && E.isXMLDoc(e)) ||
                  ((t = E.propFix[t] || t), (o = E.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = E.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        g.optSelected ||
          (E.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        E.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            E.propFix[this.toLowerCase()] = this;
          }
        ),
        E.fn.extend({
          addClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (v(e))
              return this.each(function (t) {
                E(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = wt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (s = 0; (r = t[s++]); )
                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  o !== (a = yt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (v(e))
              return this.each(function (t) {
                E(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (s = 0; (r = t[s++]); )
                    for (; i.indexOf(" " + r + " ") > -1; )
                      i = i.replace(" " + r + " ", " ");
                  o !== (a = yt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
              ? this.each(function (n) {
                  E(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, o, r, s;
                  if (i)
                    for (o = 0, r = E(this), s = wt(e); (t = s[o++]); )
                      r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && K.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var _t = /\r/g;
      E.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = v(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = i ? e.call(this, n, E(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = E.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    E.valHooks[this.type] ||
                    E.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(_t, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        E.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = E.find.attr(e, "value");
                return null != t ? t : yt(E.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  r = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? r + 1 : o.length;
                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                  if (
                    ((n = o[i]).selected || i === r) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                  ) {
                    if (((t = E(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, o = e.options, r = E.makeArray(t), s = o.length;
                  s--;

                )
                  ((i = o[s]).selected =
                    E.inArray(E.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r;
              },
            },
          },
        }),
        E.each(["radio", "checkbox"], function () {
          (E.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = E.inArray(E(e).val(), t) > -1);
            },
          }),
            g.checkOn ||
              (E.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (g.focusin = "onfocusin" in n);
      var xt = /^(?:focusinfocus|focusoutblur)$/,
        Et = function (e) {
          e.stopPropagation();
        };
      E.extend(E.event, {
        trigger: function (e, t, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            h = [i || b],
            m = p.call(e, "type") ? e.type : e,
            g = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = f = a = i = i || b),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !xt.test(m + E.event.triggered) &&
              (m.indexOf(".") > -1 &&
                ((g = m.split(".")), (m = g.shift()), g.sort()),
              (c = m.indexOf(":") < 0 && "on" + m),
              ((e = e[E.expando]
                ? e
                : new E.Event(m, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = g.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : E.makeArray(t, [e])),
              (d = E.event.special[m] || {}),
              o || !d.trigger || !1 !== d.trigger.apply(i, t)))
          ) {
            if (!o && !d.noBubble && !y(i)) {
              for (
                l = d.delegateType || m, xt.test(l + m) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (i.ownerDocument || b) &&
                h.push(a.defaultView || a.parentWindow || n);
            }
            for (r = 0; (s = h[r++]) && !e.isPropagationStopped(); )
              (f = s),
                (e.type = r > 1 ? l : d.bindType || m),
                (u =
                  (K.get(s, "events") || Object.create(null))[e.type] &&
                  K.get(s, "handle")) && u.apply(s, t),
                (u = c && s[c]) &&
                  u.apply &&
                  Y(s) &&
                  ((e.result = u.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = m),
              o ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !Y(i) ||
                (c &&
                  v(i[m]) &&
                  !y(i) &&
                  ((a = i[c]) && (i[c] = null),
                  (E.event.triggered = m),
                  e.isPropagationStopped() && f.addEventListener(m, Et),
                  i[m](),
                  e.isPropagationStopped() && f.removeEventListener(m, Et),
                  (E.event.triggered = void 0),
                  a && (i[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
          E.event.trigger(i, null, t);
        },
      }),
        E.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              E.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0);
          },
        }),
        g.focusin ||
          E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              E.event.simulate(t, e.target, E.event.fix(e));
            };
            E.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  o = K.access(i, t);
                o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  o = K.access(i, t) - 1;
                o
                  ? K.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), K.remove(i, t));
              },
            };
          });
      var Tt = n.location,
        Ct = { guid: Date.now() },
        kt = /\?/;
      E.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            E.error("Invalid XML: " + e),
          t
        );
      };
      var St = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Lt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          E.each(t, function (t, o) {
            n || St.test(e)
              ? i(e, o)
              : Lt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  i
                );
          });
        else if (n || "object" !== x(t)) i(e, t);
        else for (o in t) Lt(e + "[" + o + "]", t[o], n, i);
      }
      (E.param = function (e, t) {
        var n,
          i = [],
          o = function (e, t) {
            var n = v(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
          E.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Lt(n, e[n], t, o);
        return i.join("&");
      }),
        E.fn.extend({
          serialize: function () {
            return E.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = E.prop(this, "elements");
              return e ? E.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !E(this).is(":disabled") &&
                  Nt.test(this.nodeName) &&
                  !Dt.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = E(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? E.map(n, function (e) {
                      return { name: t.name, value: e.replace(At, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(At, "\r\n") };
              })
              .get();
          },
        });
      var Ot = /%20/g,
        It = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Mt = {},
        Bt = {},
        Rt = "*/".concat("*"),
        Ft = b.createElement("a");
      function Wt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            o = 0,
            r = t.toLowerCase().match(H) || [];
          if (v(n))
            for (; (i = r[o++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function zt(e, t, n, i) {
        var o = {},
          r = e === Bt;
        function s(a) {
          var l;
          return (
            (o[a] = !0),
            E.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || r || o[c]
                ? r
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!o["*"] && s("*"));
      }
      function Ut(e, t) {
        var n,
          i,
          o = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && E.extend(!0, e, i), e;
      }
      (Ft.href = Tt.href),
        E.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Tt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Rt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": E.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
          },
          ajaxPrefilter: Wt(Mt),
          ajaxTransport: Wt(Bt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d,
              f,
              p = E.ajaxSetup({}, t),
              h = p.context || p,
              m = p.context && (h.nodeType || h.jquery) ? E(h) : E.event,
              g = E.Deferred(),
              v = E.Callbacks("once memory"),
              y = p.statusCode || {},
              w = {},
              _ = {},
              x = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; (t = Pt.exec(r)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? r : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) T.always(e[T.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || x;
                  return i && i.abort(t), C(0, t), this;
                },
              };
            if (
              (g.promise(T),
              (p.url = ((e || p.url || Tt.href) + "").replace(
                Ht,
                Tt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = p.url),
                  (l.href = l.href),
                  (p.crossDomain =
                    Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = E.param(p.data, p.traditional)),
              zt(Mt, p, t, T),
              c)
            )
              return T;
            for (d in ((u = E.event && p.global) &&
              0 == E.active++ &&
              E.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !qt.test(p.type)),
            (o = p.url.replace(It, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ot, "+"))
              : ((f = p.url.slice(o.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((o += (kt.test(o) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((o = o.replace(jt, "$1")),
                  (f = (kt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + f)),
                (p.url = o + f)),
            p.ifModified &&
              (E.lastModified[o] &&
                T.setRequestHeader("If-Modified-Since", E.lastModified[o]),
              E.etag[o] && T.setRequestHeader("If-None-Match", E.etag[o])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              T.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || c))
              return T.abort();
            if (
              ((x = "abort"),
              v.add(p.complete),
              T.done(p.success),
              T.fail(p.error),
              (i = zt(Bt, p, t, T)))
            ) {
              if (((T.readyState = 1), u && m.trigger("ajaxSend", [T, p]), c))
                return T;
              p.async &&
                p.timeout > 0 &&
                (a = n.setTimeout(function () {
                  T.abort("timeout");
                }, p.timeout));
              try {
                (c = !1), i.send(w, C);
              } catch (e) {
                if (c) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(e, t, s, l) {
              var d,
                f,
                b,
                w,
                _,
                x = t;
              c ||
                ((c = !0),
                a && n.clearTimeout(a),
                (i = void 0),
                (r = l || ""),
                (T.readyState = e > 0 ? 4 : 0),
                (d = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (w = (function (e, t, n) {
                    for (
                      var i, o, r, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (o in a)
                        if (a[o] && a[o].test(i)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) r = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          r = o;
                          break;
                        }
                        s || (s = o);
                      }
                      r = r || s;
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r];
                  })(p, T, s)),
                !d &&
                  E.inArray("script", p.dataTypes) > -1 &&
                  (p.converters["text script"] = function () {}),
                (w = (function (e, t, n, i) {
                  var o,
                    r,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (r = u.shift(); r; )
                    if (
                      (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = r),
                      (r = u.shift()))
                    )
                      if ("*" === r) r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                          for (o in c)
                            if (
                              (a = o.split(" "))[1] === r &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[o])
                                : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + r,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, w, T, d)),
                d
                  ? (p.ifModified &&
                      ((_ = T.getResponseHeader("Last-Modified")) &&
                        (E.lastModified[o] = _),
                      (_ = T.getResponseHeader("etag")) && (E.etag[o] = _)),
                    204 === e || "HEAD" === p.type
                      ? (x = "nocontent")
                      : 304 === e
                      ? (x = "notmodified")
                      : ((x = w.state), (f = w.data), (d = !(b = w.error))))
                  : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                (T.status = e),
                (T.statusText = (t || x) + ""),
                d ? g.resolveWith(h, [f, x, T]) : g.rejectWith(h, [T, x, b]),
                T.statusCode(y),
                (y = void 0),
                u &&
                  m.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? f : b]),
                v.fireWith(h, [T, x]),
                u &&
                  (m.trigger("ajaxComplete", [T, p]),
                  --E.active || E.event.trigger("ajaxStop")));
            }
            return T;
          },
          getJSON: function (e, t, n) {
            return E.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return E.get(e, void 0, t, "script");
          },
        }),
        E.each(["get", "post"], function (e, t) {
          E[t] = function (e, n, i, o) {
            return (
              v(n) && ((o = o || i), (i = n), (n = void 0)),
              E.ajax(
                E.extend(
                  { url: e, type: t, dataType: o, data: n, success: i },
                  E.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        E.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (E._evalUrl = function (e, t, n) {
          return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              E.globalEval(e, t, n);
            },
          });
        }),
        E.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  E(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = E(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              E(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  E(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (E.expr.pseudos.hidden = function (e) {
          return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (E.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Qt = { 0: 200, 1223: 204 },
        Vt = E.ajaxSettings.xhr();
      (g.cors = !!Vt && "withCredentials" in Vt),
        (g.ajax = Vt = !!Vt),
        E.ajaxTransport(function (e) {
          var t, i;
          if (g.cors || (Vt && !e.crossDomain))
            return {
              send: function (o, r) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  a.setRequestHeader(s, o[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? r(0, "error")
                          : r(a.status, a.statusText)
                        : r(
                            Qt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        E.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return E.globalEval(e), e;
            },
          },
        }),
        E.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        E.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, o) {
                (t = E("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var $t,
        Xt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Xt.pop() || E.expando + "_" + Ct.guid++;
          return (this[e] = !0), e;
        },
      }),
        E.ajaxPrefilter("json jsonp", function (e, t, i) {
          var o,
            r,
            s,
            a =
              !1 !== e.jsonp &&
              (Yt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Yt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback =
                v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Yt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return s || E.error(o + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = n[o]),
              (n[o] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === r ? E(n).removeProp(o) : (n[o] = r),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(o)),
                  s && v(r) && r(s[0]),
                  (s = r = void 0);
              }),
              "script"
            );
        }),
        (g.createHTMLDocument =
          ((($t = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === $t.childNodes.length)),
        (E.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (g.createHTMLDocument
                  ? (((i = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(i))
                  : (t = b)),
              (r = !n && []),
              (o = N.exec(e))
                ? [t.createElement(o[1])]
                : ((o = xe([e], t, r)),
                  r && r.length && E(r).remove(),
                  E.merge([], o.childNodes)));
          var i, o, r;
        }),
        (E.fn.load = function (e, t, n) {
          var i,
            o,
            r,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            s.length > 0 &&
              E.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (r = arguments),
                    s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, r || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (E.expr.pseudos.animated = function (e) {
          return E.grep(E.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (E.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c = E.css(e, "position"),
              u = E(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (r = E.css(e, "top")),
              (l = E.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (r + l).indexOf("auto") > -1
                ? ((s = (i = u.position()).top), (o = i.left))
                : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
              v(t) && (t = t.call(e, n, E.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + o),
              "using" in t
                ? t.using.call(e, d)
                : ("number" == typeof d.top && (d.top += "px"),
                  "number" == typeof d.left && (d.left += "px"),
                  u.css(d));
          },
        }),
        E.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    E.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === E.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === E.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
                  (o.left += E.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - E.css(i, "marginTop", !0),
                left: t.left - o.left - E.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === E.css(e, "position");

              )
                e = e.offsetParent;
              return e || re;
            });
          },
        }),
        E.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            E.fn[e] = function (i) {
              return U(
                this,
                function (e, i, o) {
                  var r;
                  if (
                    (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === o)
                  )
                    return r ? r[t] : e[i];
                  r
                    ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                    : (e[i] = o);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        E.each(["top", "left"], function (e, t) {
          E.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
            if (n)
              return (n = Qe(e, t)), Fe.test(n) ? E(e).position()[t] + "px" : n;
          });
        }),
        E.each({ Height: "height", Width: "width" }, function (e, t) {
          E.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              E.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
                return U(
                  this,
                  function (t, n, o) {
                    var r;
                    return y(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === o
                      ? E.css(t, n, a)
                      : E.style(t, n, o, a);
                  },
                  t,
                  s ? o : void 0,
                  s
                );
              };
            }
          );
        }),
        E.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            E.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        E.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        E.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            E.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (E.proxy = function (e, t) {
        var n, i, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (i = a.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, i.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || E.guid++),
            o
          );
      }),
        (E.holdReady = function (e) {
          e ? E.readyWait++ : E.ready(!0);
        }),
        (E.isArray = Array.isArray),
        (E.parseJSON = JSON.parse),
        (E.nodeName = D),
        (E.isFunction = v),
        (E.isWindow = y),
        (E.camelCase = X),
        (E.type = x),
        (E.now = Date.now),
        (E.isNumeric = function (e) {
          var t = E.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (E.trim = function (e) {
          return null == e ? "" : (e + "").replace(Gt, "");
        }),
        void 0 ===
          (i = function () {
            return E;
          }.apply(t, [])) || (e.exports = i);
      var Kt = n.jQuery,
        Jt = n.$;
      return (
        (E.noConflict = function (e) {
          return (
            n.$ === E && (n.$ = Jt), e && n.jQuery === E && (n.jQuery = Kt), E
          );
        }),
        void 0 === o && (n.jQuery = n.$ = E),
        E
      );
    });
  },
  17: function (e, t, n) {
    var i;
    window,
      (i = function () {
        return (function (e) {
          var t = {};
          function n(i) {
            if (t[i]) return t[i].exports;
            var o = (t[i] = { i: i, l: !1, exports: {} });
            return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, i) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: i });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var i = Object.create(null);
              if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    i,
                    o,
                    function (t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return i;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 0))
          );
        })([
          function (e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "default", function () {
                return me;
              });
            var i = {};
            function o() {
              return (o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            n.r(i),
              n.d(i, "CREATED", function () {
                return F;
              }),
              n.d(i, "MOUNTED", function () {
                return W;
              }),
              n.d(i, "IDLE", function () {
                return z;
              }),
              n.d(i, "MOVING", function () {
                return U;
              }),
              n.d(i, "DESTROYED", function () {
                return Q;
              });
            var r = Object.keys;
            function s(e, t) {
              r(e).some(function (n, i) {
                return t(e[n], n, i);
              });
            }
            function a(e) {
              return r(e).map(function (t) {
                return e[t];
              });
            }
            function l(e) {
              return "object" == typeof e;
            }
            function c(e, t) {
              var n = o({}, e);
              return (
                s(t, function (e, t) {
                  l(e)
                    ? (l(n[t]) || (n[t] = {}), (n[t] = c(n[t], e)))
                    : (n[t] = e);
                }),
                n
              );
            }
            function u(e) {
              return Array.isArray(e) ? e : [e];
            }
            function d(e, t, n) {
              return Math.min(Math.max(e, t > n ? n : t), t > n ? t : n);
            }
            function f(e, t) {
              var n = 0;
              return e.replace(/%s/g, function () {
                return u(t)[n++];
              });
            }
            function p(e) {
              var t = typeof e;
              return "number" === t && e > 0
                ? parseFloat(e) + "px"
                : "string" === t
                ? e
                : "";
            }
            function h(e) {
              return e < 10 ? "0" + e : e;
            }
            function m(e, t) {
              if ("string" == typeof t) {
                var n = b("div", {});
                T(n, { position: "absolute", width: t }),
                  x(e, n),
                  (t = n.clientWidth),
                  _(n);
              }
              return +t || 0;
            }
            function g(e, t) {
              return e ? e.querySelector(t.split(" ")[0]) : null;
            }
            function v(e, t) {
              return y(e, t)[0];
            }
            function y(e, t) {
              return e
                ? a(e.children).filter(function (e) {
                    return A(e, t.split(" ")[0]) || e.tagName === t;
                  })
                : [];
            }
            function b(e, t) {
              var n = document.createElement(e);
              return (
                s(t, function (e, t) {
                  return D(n, t, e);
                }),
                n
              );
            }
            function w(e) {
              var t = b("div", {});
              return (t.innerHTML = e), t.firstChild;
            }
            function _(e) {
              u(e).forEach(function (e) {
                if (e) {
                  var t = e.parentElement;
                  t && t.removeChild(e);
                }
              });
            }
            function x(e, t) {
              e && e.appendChild(t);
            }
            function E(e, t) {
              if (e && t) {
                var n = t.parentElement;
                n && n.insertBefore(e, t);
              }
            }
            function T(e, t) {
              e &&
                s(t, function (t, n) {
                  null !== t && (e.style[n] = t);
                });
            }
            function C(e, t, n) {
              e &&
                u(t).forEach(function (t) {
                  t && e.classList[n ? "remove" : "add"](t);
                });
            }
            function k(e, t) {
              C(e, t, !1);
            }
            function S(e, t) {
              C(e, t, !0);
            }
            function A(e, t) {
              return !!e && e.classList.contains(t);
            }
            function D(e, t, n) {
              e && e.setAttribute(t, n);
            }
            function N(e, t) {
              return e ? e.getAttribute(t) : "";
            }
            function L(e, t) {
              u(t).forEach(function (t) {
                u(e).forEach(function (e) {
                  return e && e.removeAttribute(t);
                });
              });
            }
            function O(e) {
              return e.getBoundingClientRect();
            }
            var I = "loop",
              j = function (e, t) {
                var n, i;
                return {
                  mount: function () {
                    (n = t.Elements.list),
                      e.on(
                        "transitionend",
                        function (e) {
                          e.target === n && i && i();
                        },
                        n
                      );
                  },
                  start: function (o, r, s, a, l) {
                    var c = e.options,
                      u = t.Controller.edgeIndex,
                      d = c.speed;
                    (i = l),
                      e.is("slide") &&
                        ((0 === s && r >= u) || (s >= u && 0 === r)) &&
                        (d = c.rewindSpeed || d),
                      T(n, {
                        transition: "transform " + d + "ms " + c.easing,
                        transform: "translate(" + a.x + "px," + a.y + "px)",
                      });
                  },
                };
              },
              P = function (e, t) {
                function n(n) {
                  var i = e.options;
                  T(t.Elements.slides[n], {
                    transition: "opacity " + i.speed + "ms " + i.easing,
                  });
                }
                return {
                  mount: function () {
                    n(e.index);
                  },
                  start: function (e, i, o, r, s) {
                    var a = t.Elements.track;
                    T(a, { height: p(a.clientHeight) }),
                      n(i),
                      s(),
                      T(a, { height: "" });
                  },
                };
              };
            function q(e) {
              console.error("[SPLIDE] " + e);
            }
            function H(e, t) {
              if (!e) throw new Error(t);
            }
            var M = "splide",
              B = {
                active: "is-active",
                visible: "is-visible",
                loading: "is-loading",
              },
              R = {
                type: "slide",
                rewind: !1,
                speed: 400,
                rewindSpeed: 0,
                waitForTransition: !0,
                width: 0,
                height: 0,
                fixedWidth: 0,
                fixedHeight: 0,
                heightRatio: 0,
                autoWidth: !1,
                autoHeight: !1,
                perPage: 1,
                perMove: 0,
                clones: 0,
                start: 0,
                focus: !1,
                gap: 0,
                padding: 0,
                arrows: !0,
                arrowPath: "",
                pagination: !0,
                autoplay: !1,
                interval: 5e3,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                resetProgress: !0,
                lazyLoad: !1,
                preloadPages: 1,
                easing: "cubic-bezier(.42,.65,.27,.99)",
                keyboard: "global",
                drag: !0,
                dragAngleThreshold: 30,
                swipeDistanceThreshold: 150,
                flickVelocityThreshold: 0.6,
                flickPower: 600,
                flickMaxPages: 1,
                direction: "ltr",
                cover: !1,
                accessibility: !0,
                slideFocus: !0,
                isNavigation: !1,
                trimSpace: !0,
                updateOnMove: !1,
                throttle: 100,
                destroy: !1,
                breakpoints: !1,
                classes: {
                  root: M,
                  slider: M + "__slider",
                  track: M + "__track",
                  list: M + "__list",
                  slide: M + "__slide",
                  container: M + "__slide__container",
                  arrows: M + "__arrows",
                  arrow: M + "__arrow",
                  prev: M + "__arrow--prev",
                  next: M + "__arrow--next",
                  pagination: M + "__pagination",
                  page: M + "__pagination__page",
                  clone: M + "__slide--clone",
                  progress: M + "__progress",
                  bar: M + "__progress__bar",
                  autoplay: M + "__autoplay",
                  play: M + "__play",
                  pause: M + "__pause",
                  spinner: M + "__spinner",
                  sr: M + "__sr",
                },
                i18n: {
                  prev: "Previous slide",
                  next: "Next slide",
                  first: "Go to first slide",
                  last: "Go to last slide",
                  slideX: "Go to slide %s",
                  pageX: "Go to page %s",
                  play: "Start autoplay",
                  pause: "Pause autoplay",
                },
              },
              F = 1,
              W = 2,
              z = 3,
              U = 4,
              Q = 5;
            function V(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            var $ = (function () {
                function e(e, t, n) {
                  var o;
                  void 0 === t && (t = {}),
                    void 0 === n && (n = {}),
                    (this.root =
                      e instanceof Element ? e : document.querySelector(e)),
                    H(this.root, "An invalid element/selector was given."),
                    (this.Components = null),
                    (this.Event = (function () {
                      var e = [];
                      function t(e) {
                        e.elm &&
                          e.elm.removeEventListener(
                            e.event,
                            e.handler,
                            e.options
                          );
                      }
                      return {
                        on: function (t, n, i, o) {
                          void 0 === i && (i = null),
                            void 0 === o && (o = {}),
                            t.split(" ").forEach(function (t) {
                              i && i.addEventListener(t, n, o),
                                e.push({
                                  event: t,
                                  handler: n,
                                  elm: i,
                                  options: o,
                                });
                            });
                        },
                        off: function (n, i) {
                          void 0 === i && (i = null),
                            n.split(" ").forEach(function (n) {
                              e = e.filter(function (e) {
                                return (
                                  !e ||
                                  e.event !== n ||
                                  e.elm !== i ||
                                  (t(e), !1)
                                );
                              });
                            });
                        },
                        emit: function (t) {
                          for (
                            var n = arguments.length,
                              i = new Array(n > 1 ? n - 1 : 0),
                              o = 1;
                            o < n;
                            o++
                          )
                            i[o - 1] = arguments[o];
                          e.forEach(function (e) {
                            e.elm ||
                              e.event.split(".")[0] !== t ||
                              e.handler.apply(e, i);
                          });
                        },
                        destroy: function () {
                          e.forEach(t), (e = []);
                        },
                      };
                    })()),
                    (this.State =
                      ((o = F),
                      {
                        set: function (e) {
                          o = e;
                        },
                        is: function (e) {
                          return e === o;
                        },
                      })),
                    (this.STATES = i),
                    (this._o = c(R, t)),
                    (this._i = 0),
                    (this._c = n),
                    (this._e = {}),
                    (this._t = null);
                }
                var t,
                  n,
                  o,
                  r = e.prototype;
                return (
                  (r.mount = function (e, t) {
                    var n = this;
                    void 0 === e && (e = this._e),
                      void 0 === t && (t = this._t),
                      this.State.set(F),
                      (this._e = e),
                      (this._t = t),
                      (this.Components = (function (e, t, n) {
                        var i = {};
                        return (
                          s(t, function (t, n) {
                            i[n] = t(e, i, n.toLowerCase());
                          }),
                          n || (n = e.is("fade") ? P : j),
                          (i.Transition = n(e, i)),
                          i
                        );
                      })(this, c(this._c, e), t));
                    try {
                      s(this.Components, function (e, t) {
                        var i = e.required;
                        void 0 === i || i
                          ? e.mount && e.mount()
                          : delete n.Components[t];
                      });
                    } catch (e) {
                      return void q(e.message);
                    }
                    var i = this.State;
                    return (
                      i.set(W),
                      s(this.Components, function (e) {
                        e.mounted && e.mounted();
                      }),
                      this.emit("mounted"),
                      i.set(z),
                      this.emit("ready"),
                      T(this.root, { visibility: "visible" }),
                      this.on("move drag", function () {
                        return i.set(U);
                      }).on("moved dragged", function () {
                        return i.set(z);
                      }),
                      this
                    );
                  }),
                  (r.sync = function (e) {
                    return (this.sibling = e), this;
                  }),
                  (r.on = function (e, t, n, i) {
                    return (
                      void 0 === n && (n = null),
                      void 0 === i && (i = {}),
                      this.Event.on(e, t, n, i),
                      this
                    );
                  }),
                  (r.off = function (e, t) {
                    return (
                      void 0 === t && (t = null), this.Event.off(e, t), this
                    );
                  }),
                  (r.emit = function (e) {
                    for (
                      var t,
                        n = arguments.length,
                        i = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    return (t = this.Event).emit.apply(t, [e].concat(i)), this;
                  }),
                  (r.go = function (e, t) {
                    return (
                      void 0 === t && (t = this.options.waitForTransition),
                      (this.State.is(z) || (this.State.is(U) && !t)) &&
                        this.Components.Controller.go(e, !1),
                      this
                    );
                  }),
                  (r.is = function (e) {
                    return e === this._o.type;
                  }),
                  (r.add = function (e, t) {
                    return (
                      void 0 === t && (t = -1),
                      this.Components.Elements.add(
                        e,
                        t,
                        this.refresh.bind(this)
                      ),
                      this
                    );
                  }),
                  (r.remove = function (e) {
                    return (
                      this.Components.Elements.remove(e), this.refresh(), this
                    );
                  }),
                  (r.refresh = function () {
                    return this.emit("refresh").emit("resize"), this;
                  }),
                  (r.destroy = function (e) {
                    var t = this;
                    if ((void 0 === e && (e = !0), !this.State.is(F)))
                      return (
                        a(this.Components)
                          .reverse()
                          .forEach(function (t) {
                            t.destroy && t.destroy(e);
                          }),
                        this.emit("destroy", e),
                        this.Event.destroy(),
                        this.State.set(Q),
                        this
                      );
                    this.on("ready", function () {
                      return t.destroy(e);
                    });
                  }),
                  (t = e),
                  (n = [
                    {
                      key: "index",
                      get: function () {
                        return this._i;
                      },
                      set: function (e) {
                        this._i = parseInt(e);
                      },
                    },
                    {
                      key: "length",
                      get: function () {
                        return this.Components.Elements.length;
                      },
                    },
                    {
                      key: "options",
                      get: function () {
                        return this._o;
                      },
                      set: function (e) {
                        var t = this.State.is(F);
                        t || this.emit("update"),
                          (this._o = c(this._o, e)),
                          t || this.emit("updated", this._o);
                      },
                    },
                    {
                      key: "classes",
                      get: function () {
                        return this._o.classes;
                      },
                    },
                    {
                      key: "i18n",
                      get: function () {
                        return this._o.i18n;
                      },
                    },
                  ]) && V(t.prototype, n),
                  o && V(t, o),
                  e
                );
              })(),
              X = function (e) {
                var t = N(e.root, "data-splide");
                if (t)
                  try {
                    e.options = JSON.parse(t);
                  } catch (e) {
                    q(e.message);
                  }
                return {
                  mount: function () {
                    e.State.is(F) && (e.index = e.options.start);
                  },
                };
              },
              Y = function (e, t) {
                var n = e.root,
                  i = e.classes,
                  o = [];
                if (!n.id) {
                  window.splide = window.splide || {};
                  var r = window.splide.uid || 0;
                  (window.splide.uid = ++r), (n.id = "splide" + h(r));
                }
                var l = {
                  mount: function () {
                    var t = this;
                    this.init(),
                      e
                        .on("refresh", function () {
                          t.destroy(), t.init();
                        })
                        .on("updated", function () {
                          S(n, c()), k(n, c());
                        });
                  },
                  destroy: function () {
                    o.forEach(function (e) {
                      e.destroy();
                    }),
                      (o = []),
                      S(n, c());
                  },
                  init: function () {
                    var e = this;
                    !(function () {
                      (l.slider = v(n, i.slider)),
                        (l.track = g(n, "." + i.track)),
                        (l.list = v(l.track, i.list)),
                        H(l.track && l.list, "Track or list was not found."),
                        (l.slides = y(l.list, i.slide));
                      var e = u(i.arrows);
                      l.arrows = {
                        prev: g(e, "." + i.prev),
                        next: g(e, "." + i.next),
                      };
                      var t = u(i.autoplay);
                      (l.bar = g(u(i.progress), "." + i.bar)),
                        (l.play = g(t, "." + i.play)),
                        (l.pause = g(t, "." + i.pause)),
                        (l.track.id = l.track.id || n.id + "-track"),
                        (l.list.id = l.list.id || n.id + "-list");
                    })(),
                      k(n, c()),
                      this.slides.forEach(function (t, n) {
                        e.register(t, n, -1);
                      });
                  },
                  register: function (t, n, i) {
                    var r = (function (e, t, n, i) {
                      var o = e.options.updateOnMove,
                        r =
                          "ready.slide updated.slide resize.slide moved.slide" +
                          (o ? " move.slide" : ""),
                        s = {
                          slide: i,
                          index: t,
                          realIndex: n,
                          container: v(i, e.classes.container),
                          isClone: n > -1,
                          mount: function () {
                            var s = this;
                            this.isClone ||
                              (i.id = e.root.id + "-slide" + h(t + 1)),
                              e
                                .on(r, function () {
                                  return s.update();
                                })
                                .on("update.slide", c)
                                .on(
                                  "click",
                                  function () {
                                    return e.emit("click", s);
                                  },
                                  i
                                ),
                              o &&
                                e.on("move.slide", function (e) {
                                  e === n && l(!0, !1);
                                }),
                              T(i, { display: "" }),
                              (this.styles = N(i, "style") || "");
                          },
                          destroy: function () {
                            e.off(r).off("update.slide").off("click", i),
                              S(i, a(B)),
                              c(),
                              L(this.container, "style");
                          },
                          update: function () {
                            l(this.isActive(), !1), l(this.isVisible(), !0);
                          },
                          isActive: function () {
                            return e.index === t;
                          },
                          isVisible: function () {
                            var t = this.isActive();
                            if (e.is("fade") || t) return t;
                            var n = O(e.Components.Elements.track),
                              o = O(i);
                            return "ttb" === e.options.direction
                              ? n.top <= o.top && o.bottom <= n.bottom
                              : n.left <= o.left && o.right <= n.right;
                          },
                          isWithin: function (n, i) {
                            var o = Math.abs(n - t);
                            return (
                              e.is("slide") ||
                                this.isClone ||
                                (o = Math.min(o, e.length - o)),
                              o < i
                            );
                          },
                        };
                      function l(t, n) {
                        var o = n ? "visible" : "active",
                          r = B[o];
                        t
                          ? (k(i, r), e.emit("" + o, s))
                          : A(i, r) &&
                            (S(i, r), e.emit(n ? "hidden" : "inactive", s));
                      }
                      function c() {
                        D(i, "style", s.styles);
                      }
                      return s;
                    })(e, n, i, t);
                    r.mount(), o.push(r);
                  },
                  getSlide: function (e) {
                    return o.filter(function (t) {
                      return t.index === e;
                    })[0];
                  },
                  getSlides: function (e) {
                    return e
                      ? o
                      : o.filter(function (e) {
                          return !e.isClone;
                        });
                  },
                  getSlidesByPage: function (n) {
                    var i = t.Controller.toIndex(n),
                      r = e.options,
                      s = !1 !== r.focus ? 1 : r.perPage;
                    return o.filter(function (e) {
                      var t = e.index;
                      return i <= t && t < i + s;
                    });
                  },
                  add: function (e, t, n) {
                    if (
                      ("string" == typeof e && (e = w(e)), e instanceof Element)
                    ) {
                      var i = this.slides[t];
                      T(e, { display: "none" }),
                        i
                          ? (E(e, i), this.slides.splice(t, 0, e))
                          : (x(this.list, e), this.slides.push(e)),
                        (function (e, t) {
                          var n = e.querySelectorAll("img"),
                            i = n.length;
                          if (i) {
                            var o = 0;
                            s(n, function (e) {
                              e.onload = e.onerror = function () {
                                ++o === i && t();
                              };
                            });
                          } else t();
                        })(e, function () {
                          n && n(e);
                        });
                    }
                  },
                  remove: function (e) {
                    _(this.slides.splice(e, 1)[0]);
                  },
                  each: function (e) {
                    o.forEach(e);
                  },
                  get length() {
                    return this.slides.length;
                  },
                  get total() {
                    return o.length;
                  },
                };
                function c() {
                  var t = i.root,
                    n = e.options;
                  return [
                    t + "--" + n.type,
                    t + "--" + n.direction,
                    n.drag ? t + "--draggable" : "",
                    n.isNavigation ? t + "--nav" : "",
                    B.active,
                  ];
                }
                function u(e) {
                  return v(n, e) || v(l.slider, e);
                }
                return l;
              },
              G = Math.floor,
              K = function (e, t) {
                var n,
                  i,
                  o = {
                    mount: function () {
                      (n = e.options),
                        (i = e.is(I)),
                        e
                          .on("move", function (t) {
                            e.index = t;
                          })
                          .on("updated refresh", function (t) {
                            (n = t || n),
                              (e.index = d(e.index, 0, o.edgeIndex));
                          });
                    },
                    go: function (e, n) {
                      var i = this.trim(this.parse(e));
                      t.Track.go(i, this.rewind(i), n);
                    },
                    parse: function (t) {
                      var i = e.index,
                        r = String(t).match(/([+\-<>]+)(\d+)?/),
                        s = r ? r[1] : "",
                        a = r ? parseInt(r[2]) : 0;
                      switch (s) {
                        case "+":
                          i += a || 1;
                          break;
                        case "-":
                          i -= a || 1;
                          break;
                        case ">":
                        case "<":
                          i = (function (e, t, i) {
                            if (e > -1) return o.toIndex(e);
                            var r = n.perMove,
                              s = i ? -1 : 1;
                            return r ? t + r * s : o.toIndex(o.toPage(t) + s);
                          })(a, i, "<" === s);
                          break;
                        default:
                          i = parseInt(t);
                      }
                      return i;
                    },
                    toIndex: function (t) {
                      if (r()) return t;
                      var i = e.length,
                        o = n.perPage,
                        s = t * o;
                      return (
                        i - o <= (s -= (this.pageLength * o - i) * G(s / i)) &&
                          s < i &&
                          (s = i - o),
                        s
                      );
                    },
                    toPage: function (t) {
                      if (r()) return t;
                      var i = e.length,
                        o = n.perPage;
                      return G(i - o <= t && t < i ? (i - 1) / o : t / o);
                    },
                    trim: function (e) {
                      return (
                        i ||
                          (e = n.rewind
                            ? this.rewind(e)
                            : d(e, 0, this.edgeIndex)),
                        e
                      );
                    },
                    rewind: function (e) {
                      var t = this.edgeIndex;
                      if (i) {
                        for (; e > t; ) e -= t + 1;
                        for (; e < 0; ) e += t + 1;
                      } else e > t ? (e = 0) : e < 0 && (e = t);
                      return e;
                    },
                    isRtl: function () {
                      return "rtl" === n.direction;
                    },
                    get pageLength() {
                      var t = e.length;
                      return r() ? t : Math.ceil(t / n.perPage);
                    },
                    get edgeIndex() {
                      var t = e.length;
                      return t
                        ? r() || n.isNavigation || i
                          ? t - 1
                          : t - n.perPage
                        : 0;
                    },
                    get prevIndex() {
                      var t = e.index - 1;
                      return (
                        (i || n.rewind) && (t = this.rewind(t)), t > -1 ? t : -1
                      );
                    },
                    get nextIndex() {
                      var t = e.index + 1;
                      return (
                        (i || n.rewind) && (t = this.rewind(t)),
                        (e.index < t && t <= this.edgeIndex) || 0 === t ? t : -1
                      );
                    },
                  };
                function r() {
                  return !1 !== n.focus;
                }
                return o;
              },
              J = Math.abs,
              Z = function (e, t) {
                var n,
                  i,
                  o,
                  r = "ttb" === e.options.direction,
                  s = e.is("fade"),
                  a = !1,
                  l = "rtl" === e.options.direction ? 1 : -1,
                  c = {
                    sign: l,
                    mount: function () {
                      (i = t.Elements), (n = t.Layout), (o = i.list);
                    },
                    mounted: function () {
                      var t = this;
                      s ||
                        (this.jump(0),
                        e.on("mounted resize updated", function () {
                          t.jump(e.index);
                        }));
                    },
                    go: function (n, i, o) {
                      var r = f(n),
                        l = e.index;
                      (e.State.is(U) && a) ||
                        ((a = n !== i),
                        o || e.emit("move", i, l, n),
                        Math.abs(r - this.position) >= 1 || s
                          ? t.Transition.start(
                              n,
                              i,
                              l,
                              this.toCoord(r),
                              function () {
                                u(n, i, l, o);
                              }
                            )
                          : n !== l && "move" === e.options.trimSpace
                          ? t.Controller.go(n + n - l, o)
                          : u(n, i, l, o));
                    },
                    jump: function (e) {
                      this.translate(f(e));
                    },
                    translate: function (e) {
                      T(o, {
                        transform:
                          "translate" + (r ? "Y" : "X") + "(" + e + "px)",
                      });
                    },
                    cancel: function () {
                      e.is(I) ? this.shift() : this.translate(this.position),
                        T(o, { transition: "" });
                    },
                    shift: function () {
                      var t = J(this.position),
                        n = J(this.toPosition(0)),
                        i = J(this.toPosition(e.length)),
                        o = i - n;
                      t < n ? (t += o) : t > i && (t -= o),
                        this.translate(l * t);
                    },
                    trim: function (t) {
                      return !e.options.trimSpace || e.is(I)
                        ? t
                        : d(t, l * (n.totalSize() - n.size - n.gap), 0);
                    },
                    toIndex: function (e) {
                      var t = this,
                        n = 0,
                        o = 1 / 0;
                      return (
                        i.getSlides(!0).forEach(function (i) {
                          var r = i.index,
                            s = J(t.toPosition(r) - e);
                          s < o && ((o = s), (n = r));
                        }),
                        n
                      );
                    },
                    toCoord: function (e) {
                      return { x: r ? 0 : e, y: r ? e : 0 };
                    },
                    toPosition: function (e) {
                      var t = n.totalSize(e) - n.slideSize(e) - n.gap;
                      return l * (t + this.offset(e));
                    },
                    offset: function (t) {
                      var i = e.options.focus,
                        o = n.slideSize(t);
                      return "center" === i
                        ? -(n.size - o) / 2
                        : -(parseInt(i) || 0) * (o + n.gap);
                    },
                    get position() {
                      var e = r ? "top" : "left";
                      return O(o)[e] - O(i.track)[e] - n.padding[e];
                    },
                  };
                function u(t, n, i, r) {
                  T(o, { transition: "" }),
                    (a = !1),
                    s || c.jump(n),
                    r || e.emit("moved", n, i, t);
                }
                function f(e) {
                  return c.trim(c.toPosition(e));
                }
                return c;
              },
              ee = function (e, t) {
                var n = [],
                  i = 0,
                  o = t.Elements,
                  r = {
                    mount: function () {
                      var t = this;
                      e.is(I) &&
                        (s(),
                        e.on("refresh", s).on("resize", function () {
                          i !== a() && (t.destroy(), e.refresh());
                        }));
                    },
                    destroy: function () {
                      _(n), (n = []);
                    },
                    get clones() {
                      return n;
                    },
                    get length() {
                      return n.length;
                    },
                  };
                function s() {
                  r.destroy(),
                    (function (e) {
                      var t = o.length,
                        i = o.register;
                      if (t) {
                        for (var r = o.slides; r.length < e; ) r = r.concat(r);
                        r.slice(0, e).forEach(function (e, r) {
                          var s = l(e);
                          x(o.list, s), n.push(s), i(s, r + t, r % t);
                        }),
                          r.slice(-e).forEach(function (o, s) {
                            var a = l(o);
                            E(a, r[0]),
                              n.push(a),
                              i(a, s - e, (t + s - (e % t)) % t);
                          });
                      }
                    })((i = a()));
                }
                function a() {
                  var t = e.options;
                  if (t.clones) return t.clones;
                  var n = t.autoWidth || t.autoHeight ? o.length : t.perPage,
                    i = "ttb" === t.direction ? "Height" : "Width",
                    r = m(e.root, t["fixed" + i]);
                  return (
                    r && (n = Math.ceil(o.track["client" + i] / r)),
                    n * (t.drag ? t.flickMaxPages + 1 : 1)
                  );
                }
                function l(t) {
                  var n = t.cloneNode(!0);
                  return k(n, e.classes.clone), L(n, "id"), n;
                }
                return r;
              };
            function te(e, t) {
              var n;
              return function () {
                n ||
                  (n = setTimeout(function () {
                    e(), (n = null);
                  }, t));
              };
            }
            var ne = function (e, t) {
                var n,
                  i,
                  o = t.Elements,
                  s = "ttb" === e.options.direction,
                  a =
                    ((n = {
                      mount: function () {
                        e
                          .on(
                            "resize load",
                            te(function () {
                              e.emit("resize");
                            }, e.options.throttle),
                            window
                          )
                          .on("resize", c)
                          .on("updated refresh", l),
                          l(),
                          (this.totalSize = s
                            ? this.totalHeight
                            : this.totalWidth),
                          (this.slideSize = s
                            ? this.slideHeight
                            : this.slideWidth);
                      },
                      destroy: function () {
                        L([o.list, o.track], "style");
                      },
                      get size() {
                        return s ? this.height : this.width;
                      },
                    }),
                    (i = s
                      ? (function (e, t) {
                          var n,
                            i,
                            o = t.Elements,
                            r = e.root;
                          return {
                            margin: "marginBottom",
                            init: function () {
                              this.resize();
                            },
                            resize: function () {
                              (i = e.options),
                                (n = o.track),
                                (this.gap = m(r, i.gap));
                              var t = i.padding,
                                s = m(r, t.top || t),
                                a = m(r, t.bottom || t);
                              (this.padding = { top: s, bottom: a }),
                                T(n, { paddingTop: p(s), paddingBottom: p(a) });
                            },
                            totalHeight: function (t) {
                              void 0 === t && (t = e.length - 1);
                              var n = o.getSlide(t);
                              return n
                                ? O(n.slide).bottom - O(o.list).top + this.gap
                                : 0;
                            },
                            slideWidth: function () {
                              return m(r, i.fixedWidth || this.width);
                            },
                            slideHeight: function (e) {
                              if (i.autoHeight) {
                                var t = o.getSlide(e);
                                return t ? t.slide.offsetHeight : 0;
                              }
                              var n =
                                i.fixedHeight ||
                                (this.height + this.gap) / i.perPage - this.gap;
                              return m(r, n);
                            },
                            get width() {
                              return n.clientWidth;
                            },
                            get height() {
                              var e = i.height || this.width * i.heightRatio;
                              return (
                                H(e, '"height" or "heightRatio" is missing.'),
                                m(r, e) - this.padding.top - this.padding.bottom
                              );
                            },
                          };
                        })(e, t)
                      : (function (e, t) {
                          var n,
                            i = t.Elements,
                            o = e.root,
                            r = e.options;
                          return {
                            margin:
                              "margin" +
                              ("rtl" === r.direction ? "Left" : "Right"),
                            height: 0,
                            init: function () {
                              this.resize();
                            },
                            resize: function () {
                              (r = e.options),
                                (n = i.track),
                                (this.gap = m(o, r.gap));
                              var t = r.padding,
                                s = m(o, t.left || t),
                                a = m(o, t.right || t);
                              (this.padding = { left: s, right: a }),
                                T(n, { paddingLeft: p(s), paddingRight: p(a) });
                            },
                            totalWidth: function (t) {
                              void 0 === t && (t = e.length - 1);
                              var n = i.getSlide(t),
                                o = 0;
                              if (n) {
                                var s = O(n.slide),
                                  a = O(i.list);
                                (o =
                                  "rtl" === r.direction
                                    ? a.right - s.left
                                    : s.right - a.left),
                                  (o += this.gap);
                              }
                              return o;
                            },
                            slideWidth: function (e) {
                              if (r.autoWidth) {
                                var t = i.getSlide(e);
                                return t ? t.slide.offsetWidth : 0;
                              }
                              var n =
                                r.fixedWidth ||
                                (this.width + this.gap) / r.perPage - this.gap;
                              return m(o, n);
                            },
                            slideHeight: function () {
                              var e =
                                r.height ||
                                r.fixedHeight ||
                                this.width * r.heightRatio;
                              return m(o, e);
                            },
                            get width() {
                              return (
                                n.clientWidth -
                                this.padding.left -
                                this.padding.right
                              );
                            },
                          };
                        })(e, t)),
                    r(i).forEach(function (e) {
                      n[e] ||
                        Object.defineProperty(
                          n,
                          e,
                          Object.getOwnPropertyDescriptor(i, e)
                        );
                    }),
                    n);
                function l() {
                  a.init(),
                    T(e.root, { maxWidth: p(e.options.width) }),
                    o.each(function (e) {
                      e.slide.style[a.margin] = p(a.gap);
                    }),
                    c();
                }
                function c() {
                  var t = e.options;
                  a.resize(), T(o.track, { height: p(a.height) });
                  var n = t.autoHeight ? null : p(a.slideHeight());
                  o.each(function (e) {
                    T(e.container, { height: n }),
                      T(e.slide, {
                        width: t.autoWidth ? null : p(a.slideWidth(e.index)),
                        height: e.container ? null : n,
                      });
                  });
                }
                return a;
              },
              ie = Math.abs,
              oe = function (e, t) {
                var n,
                  i,
                  o,
                  r,
                  a = t.Track,
                  l = t.Controller,
                  c = "ttb" === e.options.direction,
                  u = c ? "y" : "x",
                  f = {
                    disabled: !1,
                    mount: function () {
                      var n = this,
                        i = t.Elements,
                        o = i.track;
                      e.on("touchstart mousedown", p, o)
                        .on("touchmove mousemove", m, o, { passive: !1 })
                        .on(
                          "touchend touchcancel mouseleave mouseup dragend",
                          g,
                          o
                        )
                        .on("mounted refresh", function () {
                          s(i.list.querySelectorAll("img, a"), function (t) {
                            e.off("dragstart", t).on(
                              "dragstart",
                              function (e) {
                                e.preventDefault();
                              },
                              t,
                              { passive: !1 }
                            );
                          });
                        })
                        .on("mounted updated", function () {
                          n.disabled = !e.options.drag;
                        });
                    },
                  };
                function p(e) {
                  f.disabled || r || h(e);
                }
                function h(e) {
                  (n = a.toCoord(a.position)), (i = v(e, {})), (o = i);
                }
                function m(t) {
                  if (i)
                    if (((o = v(t, i)), r)) {
                      if ((t.cancelable && t.preventDefault(), !e.is("fade"))) {
                        var s = n[u] + o.offset[u];
                        a.translate(
                          (function (t) {
                            if (e.is("slide")) {
                              var n = a.sign,
                                i = n * a.trim(a.toPosition(0)),
                                o = n * a.trim(a.toPosition(l.edgeIndex));
                              (t *= n) < i
                                ? (t = i - 7 * Math.log(i - t))
                                : t > o && (t = o + 7 * Math.log(t - o)),
                                (t *= n);
                            }
                            return t;
                          })(s)
                        );
                      }
                    } else
                      (function (t) {
                        var n = t.offset;
                        if (e.State.is(U) && e.options.waitForTransition)
                          return !1;
                        var i = (180 * Math.atan(ie(n.y) / ie(n.x))) / Math.PI;
                        return (
                          c && (i = 90 - i), i < e.options.dragAngleThreshold
                        );
                      })(o) && (e.emit("drag", i), (r = !0), a.cancel(), h(t));
                }
                function g() {
                  (i = null),
                    r &&
                      (e.emit("dragged", o),
                      (function (n) {
                        var i = n.velocity[u],
                          o = ie(i);
                        if (o > 0) {
                          var r = e.options,
                            s = e.index,
                            c = i < 0 ? -1 : 1,
                            f = s;
                          if (!e.is("fade")) {
                            var p = a.position;
                            o > r.flickVelocityThreshold &&
                              ie(n.offset[u]) < r.swipeDistanceThreshold &&
                              (p +=
                                c *
                                Math.min(
                                  o * r.flickPower,
                                  t.Layout.size * (r.flickMaxPages || 1)
                                )),
                              (f = a.toIndex(p));
                          }
                          f === s && o > 0.1 && (f = s + c * a.sign),
                            e.is("slide") && (f = d(f, 0, l.edgeIndex)),
                            l.go(f, r.isNavigation);
                        }
                      })(o),
                      (r = !1));
                }
                function v(e, t) {
                  var n = e.timeStamp,
                    i = e.touches,
                    o = i ? i[0] : e,
                    r = o.clientX,
                    s = o.clientY,
                    a = t.to || {},
                    l = a.x,
                    c = void 0 === l ? r : l,
                    u = a.y,
                    d = { x: r - c, y: s - (void 0 === u ? s : u) },
                    f = n - (t.time || 0);
                  return {
                    to: { x: r, y: s },
                    offset: d,
                    time: n,
                    velocity: { x: d.x / f, y: d.y / f },
                  };
                }
                return f;
              },
              re = function (e, t) {
                var n = !1;
                function i(e) {
                  n &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    e.stopImmediatePropagation());
                }
                return {
                  required: e.options.drag && !e.is("fade"),
                  mount: function () {
                    e.on("click", i, t.Elements.track, { capture: !0 })
                      .on("drag", function () {
                        n = !0;
                      })
                      .on("moved", function () {
                        n = !1;
                      });
                  },
                };
              },
              se = 1,
              ae = 2,
              le = 3,
              ce = function (e, t, n) {
                var i,
                  o,
                  r,
                  s = e.classes,
                  a = e.root,
                  l = t.Elements;
                function c() {
                  var r = t.Controller,
                    s = r.prevIndex,
                    a = r.nextIndex,
                    l = e.length > e.options.perPage || e.is(I);
                  (i.disabled = s < 0 || !l),
                    (o.disabled = a < 0 || !l),
                    e.emit(n + ":updated", i, o, s, a);
                }
                function u(t) {
                  return w(
                    '<button class="' +
                      s.arrow +
                      " " +
                      (t ? s.prev : s.next) +
                      '" type="button"><svg xmlns="http://www.w3.org/2000/svg"\tviewBox="0 0 40 40"\twidth="40"\theight="40"><path d="' +
                      (e.options.arrowPath ||
                        "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                      '" />'
                  );
                }
                return {
                  required: e.options.arrows,
                  mount: function () {
                    (i = l.arrows.prev),
                      (o = l.arrows.next),
                      (i && o) ||
                        !e.options.arrows ||
                        ((i = u(!0)),
                        (o = u(!1)),
                        (r = !0),
                        (function () {
                          var t = b("div", { class: s.arrows });
                          x(t, i), x(t, o);
                          var n = l.slider,
                            r = "slider" === e.options.arrows && n ? n : a;
                          E(t, r.firstElementChild);
                        })()),
                      i &&
                        o &&
                        e
                          .on(
                            "click",
                            function () {
                              e.go("<");
                            },
                            i
                          )
                          .on(
                            "click",
                            function () {
                              e.go(">");
                            },
                            o
                          )
                          .on("mounted move updated refresh", c),
                      (this.arrows = { prev: i, next: o });
                  },
                  mounted: function () {
                    e.emit(n + ":mounted", i, o);
                  },
                  destroy: function () {
                    L([i, o], "disabled"), r && _(i.parentElement);
                  },
                };
              },
              ue = function (e, t, n) {
                var i = {},
                  o = t.Elements,
                  r = {
                    mount: function () {
                      var t,
                        n,
                        a,
                        l,
                        c = e.options.pagination;
                      if (c) {
                        (t = e.options),
                          (n = e.classes),
                          (a = b("ul", { class: n.pagination })),
                          (l = o
                            .getSlides(!1)
                            .filter(function (e) {
                              return !1 !== t.focus || e.index % t.perPage == 0;
                            })
                            .map(function (t, i) {
                              var r = b("li", {}),
                                s = b("button", {
                                  class: n.page,
                                  type: "button",
                                });
                              return (
                                x(r, s),
                                x(a, r),
                                e.on(
                                  "click",
                                  function () {
                                    e.go(">" + i);
                                  },
                                  s
                                ),
                                {
                                  li: r,
                                  button: s,
                                  page: i,
                                  Slides: o.getSlidesByPage(i),
                                }
                              );
                            })),
                          (i = { list: a, items: l });
                        var u = o.slider;
                        x("slider" === c && u ? u : e.root, i.list),
                          e.on("move.page", s);
                      }
                      e.off("updated.page refresh.page").on(
                        "updated.page refresh.page",
                        function () {
                          r.destroy(),
                            e.options.pagination && (r.mount(), r.mounted());
                        }
                      );
                    },
                    mounted: function () {
                      if (e.options.pagination) {
                        var t = e.index;
                        e.emit(n + ":mounted", i, this.getItem(t)), s(t, -1);
                      }
                    },
                    destroy: function () {
                      _(i.list),
                        i.items &&
                          i.items.forEach(function (t) {
                            e.off("click", t.button);
                          }),
                        e.off("move.page"),
                        (i = {});
                    },
                    getItem: function (e) {
                      return i.items[t.Controller.toPage(e)];
                    },
                    get data() {
                      return i;
                    },
                  };
                function s(t, o) {
                  var s = r.getItem(o),
                    a = r.getItem(t),
                    l = B.active;
                  s && S(s.button, l),
                    a && k(a.button, l),
                    e.emit(n + ":updated", i, s, a);
                }
                return r;
              },
              de = {
                ltr: { ArrowLeft: "<", ArrowRight: ">", Left: "<", Right: ">" },
                rtl: { ArrowLeft: ">", ArrowRight: "<", Left: ">", Right: "<" },
                ttb: { ArrowUp: "<", ArrowDown: ">", Up: "<", Down: ">" },
              },
              fe = function (e, t) {
                var n = e.i18n,
                  i = t.Elements,
                  o = [
                    "aria-hidden",
                    "tabindex",
                    "aria-controls",
                    "aria-label",
                    "aria-current",
                    "role",
                  ];
                function r(t, n) {
                  D(t, "aria-hidden", !n),
                    e.options.slideFocus && D(t, "tabindex", n ? 0 : -1);
                }
                function s(e, t) {
                  var n = i.track.id;
                  D(e, "aria-controls", n), D(t, "aria-controls", n);
                }
                function a(t, i, o, r) {
                  var s = e.index,
                    a = o > -1 && s < o ? n.last : n.prev,
                    l = r > -1 && s > r ? n.first : n.next;
                  D(t, "aria-label", a), D(i, "aria-label", l);
                }
                function l(t, i) {
                  i && D(i.button, "aria-current", !0),
                    t.items.forEach(function (t) {
                      var i = e.options,
                        o = f(
                          !1 === i.focus && i.perPage > 1 ? n.pageX : n.slideX,
                          t.page + 1
                        ),
                        r = t.button;
                      D(
                        r,
                        "aria-controls",
                        t.Slides.map(function (e) {
                          return e.slide.id;
                        }).join(" ")
                      ),
                        D(r, "aria-label", o);
                    });
                }
                function c(e, t, n) {
                  t && L(t.button, "aria-current"),
                    n && D(n.button, "aria-current", !0);
                }
                function u(e) {
                  i.each(function (t) {
                    var i = t.slide,
                      o = t.realIndex;
                    p(i) || D(i, "role", "button");
                    var r = o > -1 ? o : t.index,
                      s = f(n.slideX, r + 1),
                      a = e.Components.Elements.getSlide(r);
                    D(i, "aria-label", s),
                      a && D(i, "aria-controls", a.slide.id);
                  });
                }
                function d(e, t) {
                  var n = e.slide;
                  t ? D(n, "aria-current", !0) : L(n, "aria-current");
                }
                function p(e) {
                  return "BUTTON" === e.tagName;
                }
                return {
                  required: e.options.accessibility,
                  mount: function () {
                    e
                      .on("visible", function (e) {
                        r(e.slide, !0);
                      })
                      .on("hidden", function (e) {
                        r(e.slide, !1);
                      })
                      .on("arrows:mounted", s)
                      .on("arrows:updated", a)
                      .on("pagination:mounted", l)
                      .on("pagination:updated", c)
                      .on("refresh", function () {
                        L(t.Clones.clones, o);
                      }),
                      e.options.isNavigation &&
                        e
                          .on("navigation:mounted", u)
                          .on("active", function (e) {
                            d(e, !0);
                          })
                          .on("inactive", function (e) {
                            d(e, !1);
                          }),
                      ["play", "pause"].forEach(function (e) {
                        var t = i[e];
                        t &&
                          (p(t) || D(t, "role", "button"),
                          D(t, "aria-controls", i.track.id),
                          D(t, "aria-label", n[e]));
                      });
                  },
                  destroy: function () {
                    var e = t.Arrows,
                      n = e ? e.arrows : {};
                    L(i.slides.concat([n.prev, n.next, i.play, i.pause]), o);
                  },
                };
              },
              pe = [" ", "Enter", "Spacebar"],
              he = {
                Options: X,
                Breakpoints: function (e) {
                  var t,
                    n,
                    i = e.options.breakpoints,
                    o = te(s, 50),
                    r = [];
                  function s() {
                    var o,
                      s = (o = r.filter(function (e) {
                        return e.mql.matches;
                      })[0])
                        ? o.point
                        : -1;
                    if (s !== n) {
                      n = s;
                      var a = e.State,
                        l = i[s] || t,
                        c = l.destroy;
                      c
                        ? ((e.options = t), e.destroy("completely" === c))
                        : (a.is(Q) && (a.set(F), e.mount()), (e.options = l));
                    }
                  }
                  return {
                    required: i && matchMedia,
                    mount: function () {
                      (r = Object.keys(i)
                        .sort(function (e, t) {
                          return +e - +t;
                        })
                        .map(function (e) {
                          return {
                            point: e,
                            mql: matchMedia("(max-width:" + e + "px)"),
                          };
                        })),
                        this.destroy(!0),
                        addEventListener("resize", o),
                        (t = e.options),
                        s();
                    },
                    destroy: function (e) {
                      e && removeEventListener("resize", o);
                    },
                  };
                },
                Controller: K,
                Elements: Y,
                Track: Z,
                Clones: ee,
                Layout: ne,
                Drag: oe,
                Click: re,
                Autoplay: function (e, t, n) {
                  var i,
                    o = [],
                    r = t.Elements,
                    s = {
                      required: e.options.autoplay,
                      mount: function () {
                        var t = e.options;
                        r.slides.length > t.perPage &&
                          ((i = (function (e, t, n) {
                            var i,
                              o,
                              r,
                              s = window.requestAnimationFrame,
                              a = !0,
                              l = function l(c) {
                                a ||
                                  (i || ((i = c), r && r < 1 && (i -= r * t)),
                                  (r = (o = c - i) / t),
                                  o >= t && ((i = 0), (r = 1), e()),
                                  n && n(r),
                                  s(l));
                              };
                            return {
                              pause: function () {
                                (a = !0), (i = 0);
                              },
                              play: function (e) {
                                (i = 0), a && ((a = !1), e && (r = 0), s(l));
                              },
                            };
                          })(
                            function () {
                              e.go(">");
                            },
                            t.interval,
                            function (t) {
                              e.emit(n + ":playing", t),
                                r.bar && T(r.bar, { width: 100 * t + "%" });
                            }
                          )),
                          (function () {
                            var t = e.options,
                              n = e.sibling,
                              i = [e.root, n ? n.root : null];
                            t.pauseOnHover &&
                              (a(i, "mouseleave", se, !0),
                              a(i, "mouseenter", se, !1)),
                              t.pauseOnFocus &&
                                (a(i, "focusout", ae, !0),
                                a(i, "focusin", ae, !1)),
                              e
                                .on(
                                  "click",
                                  function () {
                                    s.play(ae), s.play(le);
                                  },
                                  r.play
                                )
                                .on("move refresh", function () {
                                  s.play();
                                })
                                .on("destroy", function () {
                                  s.pause();
                                }),
                              a([r.pause], "click", le, !1);
                          })(),
                          this.play());
                      },
                      play: function (t) {
                        void 0 === t && (t = 0),
                          (o = o.filter(function (e) {
                            return e !== t;
                          })).length ||
                            (e.emit(n + ":play"),
                            i.play(e.options.resetProgress));
                      },
                      pause: function (t) {
                        void 0 === t && (t = 0),
                          i.pause(),
                          -1 === o.indexOf(t) && o.push(t),
                          1 === o.length && e.emit(n + ":pause");
                      },
                    };
                  function a(t, n, i, o) {
                    t.forEach(function (t) {
                      e.on(
                        n,
                        function () {
                          s[o ? "play" : "pause"](i);
                        },
                        t
                      );
                    });
                  }
                  return s;
                },
                Cover: function (e, t) {
                  function n(e) {
                    t.Elements.each(function (t) {
                      var n = v(t.slide, "IMG") || v(t.container, "IMG");
                      n && n.src && i(n, e);
                    });
                  }
                  function i(e, t) {
                    T(e.parentElement, {
                      background: t
                        ? ""
                        : 'center/cover no-repeat url("' + e.src + '")',
                    }),
                      T(e, { display: t ? "" : "none" });
                  }
                  return {
                    required: e.options.cover,
                    mount: function () {
                      e.on("lazyload:loaded", function (e) {
                        i(e, !1);
                      }),
                        e.on("mounted updated refresh", function () {
                          return n(!1);
                        });
                    },
                    destroy: function () {
                      n(!0);
                    },
                  };
                },
                Arrows: ce,
                Pagination: ue,
                LazyLoad: function (e, t, n) {
                  var i,
                    o,
                    r = e.options,
                    a = "sequential" === r.lazyLoad;
                  function l() {
                    (o = []), (i = 0);
                  }
                  function c(t) {
                    (t = isNaN(t) ? e.index : t),
                      (o = o.filter(function (e) {
                        return (
                          !e.Slide.isWithin(
                            t,
                            r.perPage * (r.preloadPages + 1)
                          ) || (u(e.img, e.Slide), !1)
                        );
                      }))[0] || e.off("moved." + n);
                  }
                  function u(t, n) {
                    k(n.slide, B.loading);
                    var i = b("span", { class: e.classes.spinner });
                    x(t.parentElement, i),
                      (t.onload = function () {
                        f(t, i, n, !1);
                      }),
                      (t.onerror = function () {
                        f(t, i, n, !0);
                      }),
                      D(t, "srcset", N(t, "data-splide-lazy-srcset") || ""),
                      D(t, "src", N(t, "data-splide-lazy") || "");
                  }
                  function d() {
                    if (i < o.length) {
                      var e = o[i];
                      u(e.img, e.Slide);
                    }
                    i++;
                  }
                  function f(t, i, o, r) {
                    S(o.slide, B.loading),
                      r ||
                        (_(i),
                        T(t, { display: "" }),
                        e.emit(n + ":loaded", t).emit("resize")),
                      a && d();
                  }
                  return {
                    required: r.lazyLoad,
                    mount: function () {
                      e.on("mounted refresh", function () {
                        l(),
                          t.Elements.each(function (e) {
                            s(
                              e.slide.querySelectorAll(
                                "[data-splide-lazy], [data-splide-lazy-srcset]"
                              ),
                              function (t) {
                                t.src ||
                                  t.srcset ||
                                  (o.push({ img: t, Slide: e }),
                                  T(t, { display: "none" }));
                              }
                            );
                          }),
                          a && d();
                      }),
                        a || e.on("mounted refresh moved." + n, c);
                    },
                    destroy: l,
                  };
                },
                Keyboard: function (e) {
                  var t;
                  return {
                    mount: function () {
                      e.on("mounted updated", function () {
                        var n = e.options,
                          i = e.root,
                          o = de[n.direction],
                          r = n.keyboard;
                        t && (e.off("keydown", t), L(i, "tabindex")),
                          r &&
                            ("focused" === r
                              ? ((t = i), D(i, "tabindex", 0))
                              : (t = document),
                            e.on(
                              "keydown",
                              function (t) {
                                o[t.key] && e.go(o[t.key]);
                              },
                              t
                            ));
                      });
                    },
                  };
                },
                Sync: function (e) {
                  var t = e.sibling,
                    n = t && t.options.isNavigation;
                  function i() {
                    e.on("move.sync", function (e, n, i) {
                      t.off("move.sync").go(t.is(I) ? i : e, !1), o();
                    });
                  }
                  function o() {
                    t.on("move.sync", function (t, n, o) {
                      e.off("move.sync").go(e.is(I) ? o : t, !1), i();
                    });
                  }
                  function r(n) {
                    e.State.is(z) && t.go(n);
                  }
                  return {
                    required: !!t,
                    mount: function () {
                      i(),
                        o(),
                        n &&
                          t.Components.Elements.each(function (t) {
                            var n = t.slide,
                              i = t.index;
                            e.on(
                              "mouseup touchend",
                              function (e) {
                                (e.button && 0 !== e.button) || r(i);
                              },
                              n
                            ),
                              e.on(
                                "keyup",
                                function (e) {
                                  pe.indexOf(e.key) > -1 &&
                                    (e.preventDefault(), r(i));
                                },
                                n,
                                { passive: !1 }
                              );
                          });
                    },
                    mounted: function () {
                      n && t.emit("navigation:mounted", e);
                    },
                  };
                },
                A11y: fe,
              },
              me = (function (e) {
                var t, n;
                function i(t, n) {
                  return e.call(this, t, n, he) || this;
                }
                return (
                  (n = e),
                  ((t = i).prototype = Object.create(n.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = n),
                  i
                );
              })($);
          },
        ]);
      }),
      (e.exports = i());
  },
  180: function (e, t, n) {
    e.exports = n(191);
  },
  19: function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var n =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
          i = (function () {
            for (
              var e = ["Edge", "Trident", "Firefox"], t = 0;
              t < e.length;
              t += 1
            )
              if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })();
        var o =
          n && window.Promise
            ? function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function () {
                      (t = !1), e();
                    }));
                };
              }
            : function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    setTimeout(function () {
                      (t = !1), e();
                    }, i));
                };
              };
        function r(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function s(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function a(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function l(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = s(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + o + i) ? e : l(a(e));
        }
        function c(e) {
          return e && e.referenceNode ? e.referenceNode : e;
        }
        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
          d = n && /MSIE 10/.test(navigator.userAgent);
        function f(e) {
          return 11 === e ? u : 10 === e ? d : u || d;
        }
        function p(e) {
          if (!e) return document.documentElement;
          for (
            var t = f(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === s(n, "position")
              ? p(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function h(e) {
          return null !== e.parentNode ? h(e.parentNode) : e;
        }
        function m(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            r = document.createRange();
          r.setStart(i, 0), r.setEnd(o, 0);
          var s,
            a,
            l = r.commonAncestorContainer;
          if ((e !== l && t !== l) || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) ||
              ("HTML" !== a && p(s.firstElementChild) !== s)
              ? p(l)
              : l;
          var c = h(e);
          return c.host ? m(c.host, t) : m(e, h(t).host);
        }
        function g(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var o = e.ownerDocument.documentElement,
              r = e.ownerDocument.scrollingElement || o;
            return r[n];
          }
          return e[n];
        }
        function v(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = g(t, "top"),
            o = g(t, "left"),
            r = n ? -1 : 1;
          return (
            (e.top += i * r),
            (e.bottom += i * r),
            (e.left += o * r),
            (e.right += o * r),
            e
          );
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"]) +
            parseFloat(e["border" + i + "Width"])
          );
        }
        function b(e, t, n, i) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            f(10)
              ? parseInt(n["offset" + e]) +
                  parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
              : 0
          );
        }
        function w(e) {
          var t = e.body,
            n = e.documentElement,
            i = f(10) && getComputedStyle(n);
          return { height: b("Height", t, n, i), width: b("Width", t, n, i) };
        }
        var _ = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          x = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          E = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          T =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        function C(e) {
          return T({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function k(e) {
          var t = {};
          try {
            if (f(10)) {
              t = e.getBoundingClientRect();
              var n = g(e, "top"),
                i = g(e, "left");
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var o = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            r = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
            a = r.width || e.clientWidth || o.width,
            l = r.height || e.clientHeight || o.height,
            c = e.offsetWidth - a,
            u = e.offsetHeight - l;
          if (c || u) {
            var d = s(e);
            (c -= y(d, "x")), (u -= y(d, "y")), (o.width -= c), (o.height -= u);
          }
          return C(o);
        }
        function S(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = f(10),
            o = "HTML" === t.nodeName,
            r = k(e),
            a = k(t),
            c = l(e),
            u = s(t),
            d = parseFloat(u.borderTopWidth),
            p = parseFloat(u.borderLeftWidth);
          n &&
            o &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
          var h = C({
            top: r.top - a.top - d,
            left: r.left - a.left - p,
            width: r.width,
            height: r.height,
          });
          if (((h.marginTop = 0), (h.marginLeft = 0), !i && o)) {
            var m = parseFloat(u.marginTop),
              g = parseFloat(u.marginLeft);
            (h.top -= d - m),
              (h.bottom -= d - m),
              (h.left -= p - g),
              (h.right -= p - g),
              (h.marginTop = m),
              (h.marginLeft = g);
          }
          return (
            (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) &&
              (h = v(h, t)),
            h
          );
        }
        function A(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = S(e, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : g(n),
            a = t ? 0 : g(n, "left"),
            l = {
              top: s - i.top + i.marginTop,
              left: a - i.left + i.marginLeft,
              width: o,
              height: r,
            };
          return C(l);
        }
        function D(e) {
          var t = e.nodeName;
          if ("BODY" === t || "HTML" === t) return !1;
          if ("fixed" === s(e, "position")) return !0;
          var n = a(e);
          return !!n && D(n);
        }
        function N(e) {
          if (!e || !e.parentElement || f()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === s(t, "transform"); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function L(e, t, n, i) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = o ? N(e) : m(e, c(t));
          if ("viewport" === i) r = A(s, o);
          else {
            var u = void 0;
            "scrollParent" === i
              ? "BODY" === (u = l(a(t))).nodeName &&
                (u = e.ownerDocument.documentElement)
              : (u = "window" === i ? e.ownerDocument.documentElement : i);
            var d = S(u, s, o);
            if ("HTML" !== u.nodeName || D(s)) r = d;
            else {
              var f = w(e.ownerDocument),
                p = f.height,
                h = f.width;
              (r.top += d.top - d.marginTop),
                (r.bottom = p + d.top),
                (r.left += d.left - d.marginLeft),
                (r.right = h + d.left);
            }
          }
          var g = "number" == typeof (n = n || 0);
          return (
            (r.left += g ? n : n.left || 0),
            (r.top += g ? n : n.top || 0),
            (r.right -= g ? n : n.right || 0),
            (r.bottom -= g ? n : n.bottom || 0),
            r
          );
        }
        function O(e) {
          return e.width * e.height;
        }
        function I(e, t, n, i, o) {
          var r =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = L(n, i, r, o),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function (e) {
                return T({ key: e }, a[e], { area: O(a[e]) });
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            c = l.filter(function (e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            d = e.split("-")[1];
          return u + (d ? "-" + d : "");
        }
        function j(e, t, n) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            o = i ? N(t) : m(t, c(n));
          return S(n, o, i);
        }
        function P(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function q(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function H(e, t, n) {
          n = n.split("-")[0];
          var i = P(e),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
          return (
            (o[s] = t[s] + t[l] / 2 - i[l] / 2),
            (o[a] = n === a ? t[a] - i[c] : t[q(a)]),
            o
          );
        }
        function M(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function B(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function (e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function (e) {
                        return e[t] === n;
                      });
                    var i = M(e, function (e) {
                      return e[t] === n;
                    });
                    return e.indexOf(i);
                  })(e, "name", n)
                )
            ).forEach(function (e) {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e.function || e.fn;
              e.enabled &&
                r(n) &&
                ((t.offsets.popper = C(t.offsets.popper)),
                (t.offsets.reference = C(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function R() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = j(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )),
              (e.placement = I(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = H(
                this.popper,
                e.offsets.reference,
                e.placement
              )),
              (e.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (e = B(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function F(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function W(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i],
              r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r]) return r;
          }
          return null;
        }
        function z() {
          return (
            (this.state.isDestroyed = !0),
            F(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[W("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function U(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function Q(e, t, n, i) {
          (n.updateBound = i),
            U(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var o = l(e);
          return (
            (function e(t, n, i, o) {
              var r = "BODY" === t.nodeName,
                s = r ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, i, { passive: !0 }),
                r || e(l(s.parentNode), n, i, o),
                o.push(s);
            })(o, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = o),
            (n.eventsEnabled = !0),
            n
          );
        }
        function V() {
          this.state.eventsEnabled ||
            (this.state = Q(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function $() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((e = this.reference),
              (t = this.state),
              U(e).removeEventListener("resize", t.updateBound),
              t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
        }
        function X(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function Y(e, t) {
          Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              X(t[n]) &&
              (i = "px"),
              (e.style[n] = t[n] + i);
          });
        }
        var G = n && /Firefox/i.test(navigator.userAgent);
        function K(e, t, n) {
          var i = M(e, function (e) {
              return e.name === t;
            }),
            o =
              !!i &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!o) {
            var r = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                r +
                " modifier in order to work, be sure to include it before " +
                r +
                "!"
            );
          }
          return o;
        }
        var J = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          Z = J.slice(3);
        function ee(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Z.indexOf(e),
            i = Z.slice(n + 1).concat(Z.slice(0, n));
          return t ? i.reverse() : i;
        }
        var te = "flip",
          ne = "clockwise",
          ie = "counterclockwise";
        function oe(e, t, n, i) {
          var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            a = s.indexOf(
              M(s, function (e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (c = c.map(function (e, i) {
              var o = (1 === i ? !r : r) ? "height" : "width",
                s = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                    ? ((e[e.length - 1] += t), (s = !1), e)
                    : e.concat(t);
                }, [])
                .map(function (e) {
                  return (function (e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      r = +o[1],
                      s = o[2];
                    if (!r) return e;
                    if (0 === s.indexOf("%")) {
                      var a = void 0;
                      switch (s) {
                        case "%p":
                          a = n;
                          break;
                        case "%":
                        case "%r":
                        default:
                          a = i;
                      }
                      return (C(a)[t] / 100) * r;
                    }
                    if ("vh" === s || "vw" === s) {
                      return (
                        (("vh" === s
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        r
                      );
                    }
                    return r;
                  })(e, o, t, n);
                });
            })).forEach(function (e, t) {
              e.forEach(function (n, i) {
                X(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
              });
            }),
            o
          );
        }
        var re = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    i = t.split("-")[1];
                  if (i) {
                    var o = e.offsets,
                      r = o.reference,
                      s = o.popper,
                      a = -1 !== ["bottom", "top"].indexOf(n),
                      l = a ? "left" : "top",
                      c = a ? "width" : "height",
                      u = {
                        start: E({}, l, r[l]),
                        end: E({}, l, r[l] + r[c] - s[c]),
                      };
                    e.offsets.popper = T({}, s, u[i]);
                  }
                  return e;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.offset,
                    i = e.placement,
                    o = e.offsets,
                    r = o.popper,
                    s = o.reference,
                    a = i.split("-")[0],
                    l = void 0;
                  return (
                    (l = X(+n) ? [+n, 0] : oe(n, r, s, a)),
                    "left" === a
                      ? ((r.top += l[0]), (r.left -= l[1]))
                      : "right" === a
                      ? ((r.top += l[0]), (r.left += l[1]))
                      : "top" === a
                      ? ((r.left += l[0]), (r.top -= l[1]))
                      : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                    (e.popper = r),
                    e
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.boundariesElement || p(e.instance.popper);
                  e.instance.reference === n && (n = p(n));
                  var i = W("transform"),
                    o = e.instance.popper.style,
                    r = o.top,
                    s = o.left,
                    a = o[i];
                  (o.top = ""), (o.left = ""), (o[i] = "");
                  var l = L(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    n,
                    e.positionFixed
                  );
                  (o.top = r), (o.left = s), (o[i] = a), (t.boundaries = l);
                  var c = t.priority,
                    u = e.offsets.popper,
                    d = {
                      primary: function (e) {
                        var n = u[e];
                        return (
                          u[e] < l[e] &&
                            !t.escapeWithReference &&
                            (n = Math.max(u[e], l[e])),
                          E({}, e, n)
                        );
                      },
                      secondary: function (e) {
                        var n = "right" === e ? "left" : "top",
                          i = u[n];
                        return (
                          u[e] > l[e] &&
                            !t.escapeWithReference &&
                            (i = Math.min(
                              u[n],
                              l[e] - ("right" === e ? u.width : u.height)
                            )),
                          E({}, n, i)
                        );
                      },
                    };
                  return (
                    c.forEach(function (e) {
                      var t =
                        -1 !== ["left", "top"].indexOf(e)
                          ? "primary"
                          : "secondary";
                      u = T({}, u, d[t](e));
                    }),
                    (e.offsets.popper = u),
                    e
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent",
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (e) {
                  var t = e.offsets,
                    n = t.popper,
                    i = t.reference,
                    o = e.placement.split("-")[0],
                    r = Math.floor,
                    s = -1 !== ["top", "bottom"].indexOf(o),
                    a = s ? "right" : "bottom",
                    l = s ? "left" : "top",
                    c = s ? "width" : "height";
                  return (
                    n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                    n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                    e
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (e, t) {
                  var n;
                  if (!K(e.instance.modifiers, "arrow", "keepTogether"))
                    return e;
                  var i = t.element;
                  if ("string" == typeof i) {
                    if (!(i = e.instance.popper.querySelector(i))) return e;
                  } else if (!e.instance.popper.contains(i))
                    return (
                      console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!"
                      ),
                      e
                    );
                  var o = e.placement.split("-")[0],
                    r = e.offsets,
                    a = r.popper,
                    l = r.reference,
                    c = -1 !== ["left", "right"].indexOf(o),
                    u = c ? "height" : "width",
                    d = c ? "Top" : "Left",
                    f = d.toLowerCase(),
                    p = c ? "left" : "top",
                    h = c ? "bottom" : "right",
                    m = P(i)[u];
                  l[h] - m < a[f] && (e.offsets.popper[f] -= a[f] - (l[h] - m)),
                    l[f] + m > a[h] && (e.offsets.popper[f] += l[f] + m - a[h]),
                    (e.offsets.popper = C(e.offsets.popper));
                  var g = l[f] + l[u] / 2 - m / 2,
                    v = s(e.instance.popper),
                    y = parseFloat(v["margin" + d]),
                    b = parseFloat(v["border" + d + "Width"]),
                    w = g - e.offsets.popper[f] - y - b;
                  return (
                    (w = Math.max(Math.min(a[u] - m, w), 0)),
                    (e.arrowElement = i),
                    (e.offsets.arrow =
                      (E((n = {}), f, Math.round(w)), E(n, p, ""), n)),
                    e
                  );
                },
                element: "[x-arrow]",
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (e, t) {
                  if (F(e.instance.modifiers, "inner")) return e;
                  if (e.flipped && e.placement === e.originalPlacement)
                    return e;
                  var n = L(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed
                    ),
                    i = e.placement.split("-")[0],
                    o = q(i),
                    r = e.placement.split("-")[1] || "",
                    s = [];
                  switch (t.behavior) {
                    case te:
                      s = [i, o];
                      break;
                    case ne:
                      s = ee(i);
                      break;
                    case ie:
                      s = ee(i, !0);
                      break;
                    default:
                      s = t.behavior;
                  }
                  return (
                    s.forEach(function (a, l) {
                      if (i !== a || s.length === l + 1) return e;
                      (i = e.placement.split("-")[0]), (o = q(i));
                      var c = e.offsets.popper,
                        u = e.offsets.reference,
                        d = Math.floor,
                        f =
                          ("left" === i && d(c.right) > d(u.left)) ||
                          ("right" === i && d(c.left) < d(u.right)) ||
                          ("top" === i && d(c.bottom) > d(u.top)) ||
                          ("bottom" === i && d(c.top) < d(u.bottom)),
                        p = d(c.left) < d(n.left),
                        h = d(c.right) > d(n.right),
                        m = d(c.top) < d(n.top),
                        g = d(c.bottom) > d(n.bottom),
                        v =
                          ("left" === i && p) ||
                          ("right" === i && h) ||
                          ("top" === i && m) ||
                          ("bottom" === i && g),
                        y = -1 !== ["top", "bottom"].indexOf(i),
                        b =
                          !!t.flipVariations &&
                          ((y && "start" === r && p) ||
                            (y && "end" === r && h) ||
                            (!y && "start" === r && m) ||
                            (!y && "end" === r && g)),
                        w =
                          !!t.flipVariationsByContent &&
                          ((y && "start" === r && h) ||
                            (y && "end" === r && p) ||
                            (!y && "start" === r && g) ||
                            (!y && "end" === r && m)),
                        _ = b || w;
                      (f || v || _) &&
                        ((e.flipped = !0),
                        (f || v) && (i = s[l + 1]),
                        _ &&
                          (r = (function (e) {
                            return "end" === e
                              ? "start"
                              : "start" === e
                              ? "end"
                              : e;
                          })(r)),
                        (e.placement = i + (r ? "-" + r : "")),
                        (e.offsets.popper = T(
                          {},
                          e.offsets.popper,
                          H(e.instance.popper, e.offsets.reference, e.placement)
                        )),
                        (e = B(e.instance.modifiers, e, "flip")));
                    }),
                    e
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1,
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    i = e.offsets,
                    o = i.popper,
                    r = i.reference,
                    s = -1 !== ["left", "right"].indexOf(n),
                    a = -1 === ["top", "left"].indexOf(n);
                  return (
                    (o[s ? "left" : "top"] =
                      r[n] - (a ? o[s ? "width" : "height"] : 0)),
                    (e.placement = q(t)),
                    (e.offsets.popper = C(o)),
                    e
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (e) {
                  if (!K(e.instance.modifiers, "hide", "preventOverflow"))
                    return e;
                  var t = e.offsets.reference,
                    n = M(e.instance.modifiers, function (e) {
                      return "preventOverflow" === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                  }
                  return e;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.x,
                    i = t.y,
                    o = e.offsets.popper,
                    r = M(e.instance.modifiers, function (e) {
                      return "applyStyle" === e.name;
                    }).gpuAcceleration;
                  void 0 !== r &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    );
                  var s = void 0 !== r ? r : t.gpuAcceleration,
                    a = p(e.instance.popper),
                    l = k(a),
                    c = { position: o.position },
                    u = (function (e, t) {
                      var n = e.offsets,
                        i = n.popper,
                        o = n.reference,
                        r = Math.round,
                        s = Math.floor,
                        a = function (e) {
                          return e;
                        },
                        l = r(o.width),
                        c = r(i.width),
                        u = -1 !== ["left", "right"].indexOf(e.placement),
                        d = -1 !== e.placement.indexOf("-"),
                        f = t ? (u || d || l % 2 == c % 2 ? r : s) : a,
                        p = t ? r : a;
                      return {
                        left: f(
                          l % 2 == 1 && c % 2 == 1 && !d && t
                            ? i.left - 1
                            : i.left
                        ),
                        top: p(i.top),
                        bottom: p(i.bottom),
                        right: f(i.right),
                      };
                    })(e, window.devicePixelRatio < 2 || !G),
                    d = "bottom" === n ? "top" : "bottom",
                    f = "right" === i ? "left" : "right",
                    h = W("transform"),
                    m = void 0,
                    g = void 0;
                  if (
                    ((g =
                      "bottom" === d
                        ? "HTML" === a.nodeName
                          ? -a.clientHeight + u.bottom
                          : -l.height + u.bottom
                        : u.top),
                    (m =
                      "right" === f
                        ? "HTML" === a.nodeName
                          ? -a.clientWidth + u.right
                          : -l.width + u.right
                        : u.left),
                    s && h)
                  )
                    (c[h] = "translate3d(" + m + "px, " + g + "px, 0)"),
                      (c[d] = 0),
                      (c[f] = 0),
                      (c.willChange = "transform");
                  else {
                    var v = "bottom" === d ? -1 : 1,
                      y = "right" === f ? -1 : 1;
                    (c[d] = g * v),
                      (c[f] = m * y),
                      (c.willChange = d + ", " + f);
                  }
                  var b = { "x-placement": e.placement };
                  return (
                    (e.attributes = T({}, b, e.attributes)),
                    (e.styles = T({}, c, e.styles)),
                    (e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right",
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (e) {
                  var t, n;
                  return (
                    Y(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function (e) {
                      !1 !== n[e]
                        ? t.setAttribute(e, n[e])
                        : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      Y(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function (e, t, n, i, o) {
                  var r = j(o, t, e, n.positionFixed),
                    s = I(
                      n.placement,
                      r,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding
                    );
                  return (
                    t.setAttribute("x-placement", s),
                    Y(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                    n
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          se = (function () {
            function e(t, n) {
              var i = this,
                s =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              _(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = o(this.update.bind(this))),
                (this.options = T({}, e.Defaults, s)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(T({}, e.Defaults.modifiers, s.modifiers)).forEach(
                  function (t) {
                    i.options.modifiers[t] = T(
                      {},
                      e.Defaults.modifiers[t] || {},
                      s.modifiers ? s.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return T({ name: e }, i.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled &&
                    r(e.onLoad) &&
                    e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
              x(e, [
                {
                  key: "update",
                  value: function () {
                    return R.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return z.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return V.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return $.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (se.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (se.placements = J),
          (se.Defaults = re),
          (t.default = se);
      }.call(this, n(13));
  },
  191: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = function () {
        var e,
          t = !1;
        return (
          (e = navigator.userAgent || navigator.vendor || window.opera),
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            e
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4)
            )) &&
            (t = !0),
          t
        );
      },
      o = (n(22), n(17)),
      r = n.n(o);
    function s() {
      var e = (function () {
        if ("undefined" != typeof ga && ga.getAll)
          for (var e = ga.getAll(), t = 0; t < e.length; t++) {
            var n = e[t];
            if ("UA-3763089-3" === n.get("trackingId")) return n;
          }
        return null;
      })();
      if (e) {
        var t = e.get("name");
        return t ? t + "." : "";
      }
      return "";
    }
    var a = function () {
      var e,
        t,
        n,
        i,
        o,
        r,
        a = "domain=" + window.location.hostname + ";path=/",
        l =
          ((e = new Date()),
          (t = e.getDate().toString()),
          (n = (e.getMonth() + 1).toString()),
          (i = e.getFullYear().toString()),
          t.length < 2 && (t = "0" + t),
          n.length < 2 && (n = "0" + n),
          (o = i + n + t),
          (r = Math.floor(1e8 * Math.random() - 1).toString()),
          o +
            "|" +
            (function () {
              for (; r.length < 8; ) r = "0" + r;
              return r;
            })());
      !(function () {
        var e = (function (e) {
          for (
            var t = e + "=",
              n = decodeURIComponent(document.cookie).split(";"),
              i = 0;
            i < n.length;
            i++
          ) {
            for (var o = n[i]; " " == o.charAt(0); ) o = o.substring(1);
            if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
          }
          return "";
        })("_gasessionid");
        "" === e && (e = l),
          (function (e, t) {
            var n = new Date();
            n.setTime(n.getTime() + 18e5);
            var i = "expires=" + n.toUTCString();
            document.cookie = e + "=" + t + ";" + i + ";" + a;
          })("_gasessionid", e);
        for (
          var t = document.querySelectorAll('input[name="session-id"]'), n = 0;
          n < t.length;
          n++
        )
          t[n].value = e;
        var i = s();
        ga(i + "set", "dimension4", e);
      })();
    };
    !(function e() {
      if ("function" == typeof ga && "function" == typeof ga.getAll) {
        a();
        var t = s(),
          n = ga.getAll()[0].get("clientId");
        ga(t + "set", "dimension3", n);
        for (
          var i = document.querySelectorAll('input[name="client-id"]'), o = 0;
          o < i.length;
          o++
        )
          i[o].value = n;
      } else setTimeout(e, 300);
    })(),
      (window.mobileCheck = i),
      (window.$ = window.jQuery = n(16)),
      window.addEventListener("DOMContentLoaded", function () {
        document.getElementById("contact-button") &&
          i() &&
          ((document.getElementById("contact-button").dataset.toggle = "modal"),
          (document.getElementById("contact-button").dataset.target =
            "#modalForm")),
          jQuery("#modalForm").on("shown.bs.modal", function (e) {
            console.log("Shown"),
              $(e.currentTarget).find(".first-input-modal").trigger("focus");
          });
      }),
      (window.conditionalForm = function (e) {
        switch (
          ((document.getElementById("staffDevelopmentComments").required = !1),
          (document.getElementById("independentTeamComments").required = !1),
          (document.getElementById("other_UtilitiesComments").required = !1),
          e)
        ) {
          case "staffDevelopment":
            document.getElementById("staffDevelopmentComments").required = !0;
            break;
          case "independentTeam":
            document.getElementById("independentTeamComments").required = !0;
            break;
          case "other_Utilities":
            document.getElementById("other_UtilitiesComments").required = !0;
        }
        for (
          var t = document.getElementById("".concat(e, "Wrapper")),
            n = document.querySelectorAll(".container-toggle"),
            i = 0;
          i < n.length;
          i++
        )
          n[i].classList.add("d-none");
        t.classList.remove("d-none");
      }),
      (window.conditionalFormSubmenu = function (e) {});
    var l = !1;
    if (document.querySelector(".awards_carrousel_wrap"))
      var c = new r.a(".awards_carrousel_wrap", {
        type: "loop",
        perPage: 3,
        autoplay: !1,
        pauseOnHover: !0,
        interval: 4e3,
        waitForTransition: 3,
        pagination: !1,
        arrows: !1,
        gap: 20,
        breakpoints: {
          768: {
            type: "loop",
            perPage: 1,
            autoplay: !1,
            pauseOnHover: !0,
            interval: 4e3,
            waitForTransition: 3,
            pagination: !0,
            arrows: !1,
            gap: 30,
            padding: { right: "5rem", left: "5rem" },
          },
        },
      }).mount();
    if (
      document.getElementsByClassName("testimonials_carrousel-wrap").length
    )
      new r.a(".testimonials_carrousel-wrap", {
        type: "loop",
        perPage: 6,
        autoplay: !1,
        pauseOnHover: !0,
        interval: 4e3,
        waitForTransition: 3,
        pagination: !1,
        arrows: !0,
        gap: 50,
        breakpoints: {
          768: {
            type: "loop",
            perPage: 1,
            autoplay: !1,
            pauseOnHover: !0,
            interval: 4e3,
            waitForTransition: 3,
            pagination: !1,
            arrows: !0,
            height: "80%",
            gap: 20,
            padding: { right: "3rem", left: "3rem" },
          },
          1024: { perPage: 3 },
          1200: { perPage: 3 },
          1600: { perPage: 4 },
          2200: { perPage: 5 },
        },
      }).mount();
    else;
    var u = !1;
    if (
      document.getElementsByClassName("carrousel--testimonials-clutch__wrapper")
        .length
    )
      var d = new r.a(".carrousel--testimonials-clutch__wrapper", {
        type: "loop",
        perPage: 1,
        autoplay: !1,
        pauseOnHover: !0,
        interval: 4e3,
        waitForTransition: 3,
        pagination: !0,
        arrows: !0,
        gap: 50,
      }).mount();
    else d = null;
    var f = !1;
    if (document.querySelector(".stripeLogoSplide"))
      var p = new r.a(".stripeLogoSplide", {
        type: "slide",
        perPage: 11,
        autoplay: !1,
        pauseOnHover: !0,
        interval: 4e3,
        waitForTransition: 3,
        pagination: !1,
        arrows: !1,
        autoWidth: !0,
        breakpoints: {
          768: { autoWidth: !1, perPage: 3 },
          1240: { autoWidth: !1, perPage: 5 },
        },
      }).mount();
    var h = !1;
    if (document.querySelector(".MainClientsSplide"))
      var m = new r.a(".MainClientsSplide", {
        type: "slide",
        perPage: 11,
        autoplay: !1,
        pauseOnHover: !0,
        interval: 4e3,
        waitForTransition: 3,
        pagination: !1,
        arrows: !1,
        gap: 0,
        breakpoints: { 768: { perPage: 3 }, 1240: { perPage: 5 } },
      }).mount();
    var g;
    null != (g = document.getElementById("awards_carrousel")) &&
      window.addEventListener("scroll", function () {
        w(g) &&
          !l &&
          ((l = !0),
          (c.options = { autoplay: !0, pagination: !0 }),
          c.destroy(),
          c.mount());
      });
    var v;
    null != (v = document.getElementById("testimonials-clutch_carrousel")) &&
      window.addEventListener("scroll", function () {
        w(v) &&
          !u &&
          ((u = !0), (d.options = { autoplay: !0 }), d.destroy(), d.mount());
      });
    var y;
    null != (y = document.getElementById("stripeLogo_carrousel")) &&
      window.addEventListener("scroll", function () {
        w(y) &&
          !f &&
          ((f = !0),
          (p.options = { autoplay: !0, pagination: !1 }),
          p.destroy(),
          p.mount());
      });
    var b;
    function w(e) {
      var t = e.getBoundingClientRect();
      return (
        t.top >= 0 &&
        t.left >= 0 &&
        t.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        t.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    null != (b = document.getElementById("MainClients_carrousel")) &&
      window.addEventListener("scroll", function () {
        w(b) &&
          !h &&
          ((h = !0),
          (m.options = { autoplay: !0, pagination: !1 }),
          m.destroy(),
          m.mount());
      });
    !(function () {
      window.scrollY;
      var e = document.getElementById("navBar"),
        t = document.getElementById("main_wrapper").offsetHeight;
      window.addEventListener("scroll", function () {
        window.scrollY >= t
          ? e && e.classList.add("active")
          : e && e.classList.remove("active");
      });
    })();
    var _ = -1 !== window.location.href.indexOf("/e/") || window.noExitModal;
    if (-1 !== window.location.href.indexOf("#info-downloaded") || _)
      if (_);
      else {
        var x = localStorage.getItem("furlHref"),
          E = document.getElementById("exit_success"),
          T = document.getElementById("exit_modal_form"),
          C = document.getElementById("furl");
        (E.style.display = "block"),
          (T.style.display = "none"),
          (C.href = x),
          document.getElementById("modalPlaceholderCaller").click();
      }
    else;
    // function k(e) {
    //   var t = e.parentNode;
    //   e.classList.add("already-changed"),
    //     e.checkValidity()
    //       ? (t.classList.remove("is-invalid"), t.classList.add("is-valid"))
    //       : ("INPUT" === e.tagName &&
    //           "email" === e.type &&
    //           (t.querySelector(".email_response").innerHTML =
    //             "" === e.value
    //               ? "Your email address is required."
    //               : "Please provide a valid email address."),
    //         t.classList.add("is-invalid"),
    //         t.classList.remove("is-valid"));
    // }
    // window.addEventListener(
    //   "DOMContentLoaded",
    //   function () {
    //     var e = document.getElementsByClassName("needs-validation");
    //     console.log(e),
    //       Array.prototype.filter.call(e, function (e) {
    //         e.addEventListener(
    //           "submit",
    //           function (t) {
    //             var n = !0,
    //               i = e.querySelector(".email_response"),
    //               o = e.querySelector('input[type="email"]');
    //             if (
    //               (i &&
    //                 (i.innerHTML =
    //                   "" === o.value
    //                     ? "Your email address is required."
    //                     : "Please provide a valid email address."),
    //               !1 === e.checkValidity() &&
    //                 (t.preventDefault(), t.stopPropagation(), (n = !1)),
    //               n)
    //             ) {
    //               var r = e.getElementsByClassName("submit-btn")[0],
    //                 s = e.getElementsByClassName("spinner")[0];
    //               r.classList.add("d-none"),
    //                 s.classList.remove("d-none"),
    //                 setTimeout(function () {
    //                   r.classList.remove("d-none"), s.classList.add("d-none");
    //                 }, 3e4),
    //                 window.referrals &&
    //                   ((function (e) {
    //                     var t = e.parentElement.querySelector(
    //                       ".success-msg-ref"
    //                     );
    //                     fetch(window.referralsLink, {
    //                       method: "POST",
    //                       body: JSON.stringify({
    //                         email: e.querySelector('input[name="email"]').value,
    //                         name: e.querySelector('input[name="name"]').value,
    //                         url: e.querySelector('input[name="url"]').value,
    //                       }),
    //                       headers: {
    //                         "Content-Type": "application/json",
    //                         "X-CSRF-TOKEN": document
    //                           .querySelector('meta[name="csrf-token"]')
    //                           .getAttribute("content"),
    //                       },
    //                     })
    //                       .then(function (n) {
    //                         e.classList.add("d-none"),
    //                           t.classList.remove("d-none"),
    //                           n.ok ||
    //                             (t
    //                               .querySelector(".success-referrals")
    //                               .classList.add("d-none"),
    //                             t
    //                               .querySelector(".error-msg-referrals")
    //                               .classList.remove("d-none"));
    //                       })
    //                       .catch(function (e) {
    //                         console.log(e);
    //                       });
    //                   })(e),
    //                   t.preventDefault(),
    //                   t.stopPropagation());
    //             }
    //             e.classList.add("was-validated");
    //           },
    //           !1
    //         );
    //       });
    //   },
    //   !1
    // ),
     
      document.querySelectorAll(".btn-cta").forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault();
        });
      }),
      (window.firstInputFocus = function (e, t) {
        window.referrals ||
          (void 0 !== t && (modalTitle.innerHTML = t.currentTarget.innerHTML),
          setTimeout(function () {
            document.querySelector(".first-input-modal").focus();
          }, 1e3));
      }),
      (window.goTop = function (e) {
        var t = document.querySelector(".input_form1");
        document
          .getElementById("main_wrapper")
          .scrollIntoView({ behavior: "smooth" });
        var n,
          i = !0;
        addEventListener("scroll", function () {
          clearTimeout(n),
            (n = setTimeout(function () {
              i && (t.focus(), (i = !1));
            }, 100));
        });
      }),
      (window.closeModalGoToTop = function (e) {
        i() ||
          setTimeout(function () {
            goTop();
          }, 500);
      }),
      (window.contentModalLogo = function (e, t) {
        var n = document.getElementById("modalLogos"),
          i = document.getElementById("modalContentLogo"),
          o = document.getElementById("modalContentDescription"),
          r = e.currentTarget.dataset.src;
        if (n)
          switch (((i.alt = t), t)) {
            case "rolls-royce":
              (i.src = r),
                (o.innerHTML =
                  "<p>Rolls-Royce’s nuclear division works with data analytics, engineering, and support services to provide competitive solutions for nuclear power plants.</p><p>BairesDev was selected to develop a more efficient and user-friendly app platform for monitoring Power Plant data in real-time.</p><p>This app gives users immediate access to sensitive data and allows them to create local alerts and receive mobile notifications when specific values fall between a customized range.</p><p>As a result, Rolls-Royce’s team has real-time information and off-site monitoring for effective decision making, while optimizing User Experience and prioritizing cybersecurity.</p>");
              break;
            case "iqvia":
              (i.src = r),
                (o.innerHTML =
                  "<p>IQVIA is an industry leader and innovator with the vision to drive “healthcare forward”. As a large enterprise with a constantly shifting market, IQVIA must flex more and faster than its smaller competitors.</p><p>BairesDev has become an integral partner in providing highly skilled engineering capacity in the areas of modern, front-end interface design and Salesforce development, helping IQVIA align its technology, skills and methodology across a complex set of products with diverse technical stacks.</p><p>Through individual engineers as well as dedicated teams, BairesDev is helping IQVIA scale its digital efforts for long term success.</p>");
              break;
            case "google":
              (i.src = r),
                (o.innerHTML =
                  "<p>BairesDev supports Google by providing experts in Software and Automation Engineering to ensure the quality of iOS Apps for some of the most relevant Google products.</p><p>Our engineers work on-site, fully integrated with Google’s product development team, delivering complex products and processes to meet one of the highest standards of excellence in the world.</p>");
              break;
            case "viacomcbs":
              (i.src = r),
                (o.innerHTML =
                  "<p>MTV, a company owned by Viacom Group, connects with its diverse audiences everywhere they are. As a leading global entertainment content brand, they know what their viewers want and proudly deliver it across the globe through television, motion pictures and wide range of digital media.</p><p>BairesDev’s team of Software Engineers assist in the evolution and maintenance of MTV’s current web applications.</p>");
              break;
            case "groupon":
              (i.src = r),
                (o.innerHTML =
                  "<p>LivingSocial is Groupon’s marketplace, where people can buy and share the best things to do in their city and beyond.</p><p>BairesDev Automation Engineers and QA Specialists ensure that LivingSocial’s core platforms have the highest quality release after release. Working side by side with Groupon’s QA team, BairesDev’s team executed testing automation actions, as well as manual tests.</p>");
              break;
            case "siriusxm":
              (i.src = r),
                (o.innerHTML =
                  "<p>SiriusXM is the largest radio broadcaster in the world, a leader in connected vehicle services and telematics for individuals and a host of major automotive manufacturers.</p><p>We ensure the evolution and maintenance of their applications and platforms controlling complex traffic predictions, climate monitoring and security for automobiles, ships and airplanes.</p>");
              break;
            case "netgear":
              (i.src = r),
                (o.innerHTML =
                  "<p>Netgear designs innovative, branded technology solutions that address the specific end-to-end networking, storage and security needs of small to medium-sized businesses and home users.<p/><p>Netgear trusts BairesDev’s team with the development & QA of their websites and core platforms, to ensure that they have the highest quality release after release.</p>");
              break;
            case "arlo":
              (i.src = r),
                (o.innerHTML =
                  "<p>BairesDev created the high visual impact Arlo website, which displays, describes and commercializes a new series of Arlo remote security cameras.</p><p>Our UI/UX experts developed a unique e-commerce experience, and our team of engineers was involved in the entire project lifecycle, going from design to the final implementation.</p>");
              break;
            case "univision":
              (i.src = r),
                (o.innerHTML =
                  "<p>Univision is the leading media company serving Hispanic America. BairesDev assists Univision by providing software development services for all of their corporate and public applications, including more than 50 sites.</p>");
              break;
            case "associated-press":
              (i.src = r),
                (o.innerHTML =
                  "<p>For more than 169 years, The Associated Press has been covering and breaking the biggest stories from around the world.</p><p>BairesDev’s team of Software Engineers assist in the evolution and maintenance of AP’s current internal and external web applications.</p>");
              break;
            case "autodesk":
              (i.src = r),
                (o.innerHTML =
                  "<p>Autodesk is a leader in 3D engineering, design and entertainment software for the architecture, engineering, construction, manufacturing, media, and entertainment industries.</p><p>BairesDev’s team assists Autodesk with automated testing and is working on a 3D computer graphics application that runs on Windows, macOS, and Linux, and is used extensively by the film and advertising industries.</p>");
              break;
            case "motorola":
              (i.src = r),
                (o.innerHTML =
                  "<p>Avigilon, a Motorola Solutions company, provides trusted security solutions to the global market.</p><p>BairesDev ensured the evolution & maintenance of their Motorola Blue solution, a system used to configure and monitor security camera’s output, with image and movement recognition to trigger alarms, developing both a mobile application in iOS to access the system remotely and a Web one.</p>");
              break;
            case "thomson-reuters":
              (i.src = r),
                (o.innerHTML =
                  "<p>Thomson Reuters is the world’s leading source of intelligent information for businesses and professionals.</p><p>A team of BairesDev’s QA Analysts and engineers works for Thomson Reuters developing the technologies applied to their reporting and accounting services with a strong focus on security protocols and risk-avoidance.</p>");
              break;
            case "nextroll":
              (i.src = r),
                (o.innerHTML =
                  "<p>NextRoll is a leading performance marketing platform that makes it easy for over 30,000 clients worldwide to attract, convert and grow their customer base.</p><p>Fully integrated with NextRoll’s team, BairesDev’s team of 20 engineers support the full-stack development of their marketing platform.</p>");
              break;
            case "rga":
              (i.src = r),
                (o.innerHTML =
                  "<p>Founded in 1977 as a production company, R/GA is one of the world’s most awarded full-service digital agencies.</p><p>BairesDev provides R/GA with staff augmentation services, offering niche experienced software engineering profiles for innovative projects.</p>");
              break;
            case "swordpoint":
              (i.src = r),
                (o.innerHTML =
                  "<p>A team of BairesDev mobile developers finalized the creation of the Win Gen app which is a lead generator that keeps track of the sales from big retailer employees, such as Home Depot, Lowe’s, Walmart, Costco, Sam’s Club, etc.</p><p>BairesDev finished the development of WinGen, an app completely made in Xamarin, and then deployed in both Playstore and iTunes. Additionally, the team worked on different infrastructure projects and WebAPIs.</p>");
              break;
            case "instructure":
              (i.src = r),
                (o.innerHTML =
                  "<p>As creators of Canvas, an e-learning platform, and Bridge, a learning solution that helps companies train their workforce, Instructure has more than 2,500 universities, school districts and institutions around the world using their products.</p><p>BairesDev’s team of 13 engineers works fully integrated with Instructure´s internal team developing and evolving their educational platforms.</p>");
              break;
            case "iseatz":
              (i.src = r),
                (o.innerHTML =
                  "<p>The iSeatz digital travel search and booking engine is one of the most powerful cloud-based platform for digital travel commerce in the market today.</p><p>The iSeatz team turned to BairesDev as they were struggling to find local developers in New Orleans and needed talented engineers to join their staff. They hired 20 engineers through our staff augmentation services, including pre-screening developer candidates based on skills, locations, and cultural fit, to work on their Booking Services Platform.</p>");
              break;
            case "xtensifi":
              (i.src = r),
                (o.innerHTML =
                  "<p>Xtensifi is a consulting firm with +20 years of experience in financial services and financial technology. They have defined and launched hundreds of digital financial solutions and features, servicing the needs of thousands of recognized clients and helping tens of millions of people around the world.</p><p>BairesDev develops Node.js applications for its banking system, which comply with all required regulations. Our team also develops solutions to integrate Xtensifi’s banking modules to their client’s existing infrastructure.</p>");
              break;
            case "kapsch":
              (i.src = r),
                (o.innerHTML =
                  "<p>The Kapsch Group, headquartered in Vienna, is an international Road Telematics, Information Technology and Telecommunications Company.</p><p>BairesDev has several teams deployed, totaling 50 engineers, to work offshore and on-site with Kapsch on projects ranging from Fintech and e-commerce to automation traffic solutions.</p>");
              break;
            case "trone-brand-energy":
              (i.src = r),
                (o.innerHTML =
                  "<p>Trone Brand Energy is one of the largest independent brand communication agencies, connecting customers with brands across the media.</p><p>BairesDev’s Software Engineers completed the migration of a complex Drupal implementation to Amazon Web Services. This not only required advanced expertise in Software Development, but also a complete grasp of server administration, orchestration, and virtualization.</p>");
              break;
            case "abra":
              (i.src = r),
                (o.innerHTML =
                  "<p>Abra is the world’s first digital cash, blockchain based peer-to-peer money transfer network. Founded in 2014 and based in Silicon Valley ABRA is committed to forever changing how the world moves money.</p><p>BairesDev was entrusted to develop a secure bitcoin-based cryptocurrency platform. Enabling users to invest in, buy, sell or hold Bitcoin or Ethereum with only one recovery phrase to manage. It also allows to purchase goods online or offline, wherever you see that the seller accepts bitcoin.</p>");
              break;
            case "limeade":
              (i.src = r),
                (o.innerHTML =
                  "<p>The Limeade employee experience platform brings together employee well-being, engagement, inclusion, and communications solutions in a mobile-first experience. Available as an integrated platform or individual solutions, with Limeade ONE every employee knows their company cares.</p><p>BairesDev was entrusted to support the development of the platform including implementing personalization based on machine learning algorithms.</p>");
              break;
            case "ticket-galaxy":
              (i.src = r),
                (o.innerHTML =
                  "<p>TicketGalaxy.com, through its marketplace and customer service team, acts as an intermediary between buyers and ticket sellers to facilitate the purchase and sale of event tickets.</p><p>BairesDev provides a self-managed team, which includes a Technical Leader, a Scrum Master, .Net developers and UX designers, to develop a new proprietary platform.</p>");
              break;
            case "acumen":
              (i.src = r),
                (o.innerHTML =
                  "<p>Acumen develops solutions for physicians specializing in nephrology in the US. They manage, distribute and store patient health records within the Acumen system and the practices care team. This also includes following up with patients in dialysis, capturing fees, and communicating with providers.</p><p>BairesDev developed new functionalities into their existing products. Also, a team of expert Software Engineers works both on manual and automated testing of the different Windows and Mobile (IOS, Android) updates done to the system.</p>");
          }
      });
  },
  22: function (e, t, n) {
    !(function (e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e) {
        var n = this,
          i = !1;
        return (
          t(this).one(a.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || a.triggerTransitionEnd(n);
          }, e),
          this
        );
      }
      (t =
        t && Object.prototype.hasOwnProperty.call(t, "default")
          ? t.default
          : t),
        (n =
          n && Object.prototype.hasOwnProperty.call(n, "default")
            ? n.default
            : n);
      var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
          do {
            e += ~~(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
            var n = e.getAttribute("href");
            t = n && "#" !== n ? n.trim() : "";
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (e) {
          if (!e) return 0;
          var n = t(e).css("transition-duration"),
            i = t(e).css("transition-delay"),
            o = parseFloat(n),
            r = parseFloat(i);
          return o || r
            ? ((n = n.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (parseFloat(n) + parseFloat(i)))
            : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (e) {
          t(e).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
          return Boolean("transitionend");
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var o = n[i],
                r = t[i],
                s =
                  r && a.isElement(r)
                    ? "element"
                    : null == (l = r)
                    ? "" + l
                    : {}.toString
                        .call(l)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(o).test(s))
                throw new Error(
                  e.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    o +
                    '".'
                );
            }
          var l;
        },
        findShadowRoot: function (e) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? a.findShadowRoot(e.parentNode)
            : null;
        },
        jQueryDetection: function () {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
          var e = t.fn.jquery.split(" ")[0].split(".");
          if (
            (e[0] < 2 && e[1] < 9) ||
            (1 === e[0] && 9 === e[1] && e[2] < 1) ||
            e[0] >= 4
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        },
      };
      a.jQueryDetection(),
        (t.fn.emulateTransitionEnd = s),
        (t.event.special[a.TRANSITION_END] = {
          bindType: "transitionend",
          delegateType: "transitionend",
          handle: function (e) {
            if (t(e.target).is(this))
              return e.handleObj.handler.apply(this, arguments);
          },
        });
      var l = "alert",
        c = t.fn[l],
        u = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e)),
                this._triggerCloseEvent(t).isDefaultPrevented() ||
                  this._removeElement(t);
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.alert"), (this._element = null);
            }),
            (n._getRootElement = function (e) {
              var n = a.getSelectorFromElement(e),
                i = !1;
              return (
                n && (i = document.querySelector(n)),
                i || (i = t(e).closest(".alert")[0]),
                i
              );
            }),
            (n._triggerCloseEvent = function (e) {
              var n = t.Event("close.bs.alert");
              return t(e).trigger(n), n;
            }),
            (n._removeElement = function (e) {
              var n = this;
              if ((t(e).removeClass("show"), t(e).hasClass("fade"))) {
                var i = a.getTransitionDurationFromElement(e);
                t(e)
                  .one(a.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t);
                  })
                  .emulateTransitionEnd(i);
              } else this._destroyElement(e);
            }),
            (n._destroyElement = function (e) {
              t(e).detach().trigger("closed.bs.alert").remove();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  o = i.data("bs.alert");
                o || ((o = new e(this)), i.data("bs.alert", o)),
                  "close" === n && o[n](this);
              });
            }),
            (e._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
            ]),
            e
          );
        })();
      t(document).on(
        "click.bs.alert.data-api",
        '[data-dismiss="alert"]',
        u._handleDismiss(new u())
      ),
        (t.fn[l] = u._jQueryInterface),
        (t.fn[l].Constructor = u),
        (t.fn[l].noConflict = function () {
          return (t.fn[l] = c), u._jQueryInterface;
        });
      var d = t.fn.button,
        f = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.toggle = function () {
              var e = !0,
                n = !0,
                i = t(this._element).closest('[data-toggle="buttons"]')[0];
              if (i) {
                var o = this._element.querySelector(
                  'input:not([type="hidden"])'
                );
                if (o) {
                  if ("radio" === o.type)
                    if (o.checked && this._element.classList.contains("active"))
                      e = !1;
                    else {
                      var r = i.querySelector(".active");
                      r && t(r).removeClass("active");
                    }
                  e &&
                    (("checkbox" !== o.type && "radio" !== o.type) ||
                      (o.checked = !this._element.classList.contains("active")),
                    t(o).trigger("change")),
                    o.focus(),
                    (n = !1);
                }
              }
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains("active")
                  ),
                e && t(this._element).toggleClass("active"));
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.button"), (this._element = null);
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.button");
                i || ((i = new e(this)), t(this).data("bs.button", i)),
                  "toggle" === n && i[n]();
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
            ]),
            e
          );
        })();
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            var n = e.target,
              i = n;
            if (
              (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]),
              !n ||
                n.hasAttribute("disabled") ||
                n.classList.contains("disabled"))
            )
              e.preventDefault();
            else {
              var o = n.querySelector('input:not([type="hidden"])');
              if (
                o &&
                (o.hasAttribute("disabled") || o.classList.contains("disabled"))
              )
                return void e.preventDefault();
              ("LABEL" !== i.tagName || (o && "checkbox" !== o.type)) &&
                f._jQueryInterface.call(t(n), "toggle");
            }
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            var n = t(e.target).closest(".btn")[0];
            t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        ),
        t(window).on("load.bs.button.data-api", function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll('[data-toggle="buttons"] .btn')
              ),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var i = e[t],
              o = i.querySelector('input:not([type="hidden"])');
            o.checked || o.hasAttribute("checked")
              ? i.classList.add("active")
              : i.classList.remove("active");
          }
          for (
            var r = 0,
              s = (e = [].slice.call(
                document.querySelectorAll('[data-toggle="button"]')
              )).length;
            r < s;
            r++
          ) {
            var a = e[r];
            "true" === a.getAttribute("aria-pressed")
              ? a.classList.add("active")
              : a.classList.remove("active");
          }
        }),
        (t.fn.button = f._jQueryInterface),
        (t.fn.button.Constructor = f),
        (t.fn.button.noConflict = function () {
          return (t.fn.button = d), f._jQueryInterface;
        });
      var p = "carousel",
        h = ".bs.carousel",
        m = t.fn[p],
        g = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0,
        },
        v = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        y = { TOUCH: "touch", PEN: "pen" },
        b = (function () {
          function e(e, t) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(t)),
              (this._element = e),
              (this._indicatorsElement = this._element.querySelector(
                ".carousel-indicators"
              )),
              (this._touchSupported =
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(
                window.PointerEvent || window.MSPointerEvent
              )),
              this._addEventListeners();
          }
          var n = e.prototype;
          return (
            (n.next = function () {
              this._isSliding || this._slide("next");
            }),
            (n.nextWhenVisible = function () {
              !document.hidden &&
                t(this._element).is(":visible") &&
                "hidden" !== t(this._element).css("visibility") &&
                this.next();
            }),
            (n.prev = function () {
              this._isSliding || this._slide("prev");
            }),
            (n.pause = function (e) {
              e || (this._isPaused = !0),
                this._element.querySelector(
                  ".carousel-item-next, .carousel-item-prev"
                ) && (a.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (n.cycle = function (e) {
              e || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (n.to = function (e) {
              var n = this;
              this._activeElement = this._element.querySelector(
                ".active.carousel-item"
              );
              var i = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                  t(this._element).one("slid.bs.carousel", function () {
                    return n.to(e);
                  });
                else {
                  if (i === e) return this.pause(), void this.cycle();
                  var o = e > i ? "next" : "prev";
                  this._slide(o, this._items[e]);
                }
            }),
            (n.dispose = function () {
              t(this._element).off(h),
                t.removeData(this._element, "bs.carousel"),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (n._getConfig = function (e) {
              return (e = r({}, g, e)), a.typeCheckConfig(p, e, v), e;
            }),
            (n._handleSwipe = function () {
              var e = Math.abs(this.touchDeltaX);
              if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                (this.touchDeltaX = 0),
                  t > 0 && this.prev(),
                  t < 0 && this.next();
              }
            }),
            (n._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                t(this._element).on("keydown.bs.carousel", function (t) {
                  return e._keydown(t);
                }),
                "hover" === this._config.pause &&
                  t(this._element)
                    .on("mouseenter.bs.carousel", function (t) {
                      return e.pause(t);
                    })
                    .on("mouseleave.bs.carousel", function (t) {
                      return e.cycle(t);
                    }),
                this._config.touch && this._addTouchEventListeners();
            }),
            (n._addTouchEventListeners = function () {
              var e = this;
              if (this._touchSupported) {
                var n = function (t) {
                    e._pointerEvent &&
                    y[t.originalEvent.pointerType.toUpperCase()]
                      ? (e.touchStartX = t.originalEvent.clientX)
                      : e._pointerEvent ||
                        (e.touchStartX = t.originalEvent.touches[0].clientX);
                  },
                  i = function (t) {
                    e._pointerEvent &&
                      y[t.originalEvent.pointerType.toUpperCase()] &&
                      (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                      e._handleSwipe(),
                      "hover" === e._config.pause &&
                        (e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                        (e.touchTimeout = setTimeout(function (t) {
                          return e.cycle(t);
                        }, 500 + e._config.interval)));
                  };
                t(this._element.querySelectorAll(".carousel-item img")).on(
                  "dragstart.bs.carousel",
                  function (e) {
                    return e.preventDefault();
                  }
                ),
                  this._pointerEvent
                    ? (t(this._element).on(
                        "pointerdown.bs.carousel",
                        function (e) {
                          return n(e);
                        }
                      ),
                      t(this._element).on(
                        "pointerup.bs.carousel",
                        function (e) {
                          return i(e);
                        }
                      ),
                      this._element.classList.add("pointer-event"))
                    : (t(this._element).on(
                        "touchstart.bs.carousel",
                        function (e) {
                          return n(e);
                        }
                      ),
                      t(this._element).on(
                        "touchmove.bs.carousel",
                        function (t) {
                          return (function (t) {
                            t.originalEvent.touches &&
                            t.originalEvent.touches.length > 1
                              ? (e.touchDeltaX = 0)
                              : (e.touchDeltaX =
                                  t.originalEvent.touches[0].clientX -
                                  e.touchStartX);
                          })(t);
                        }
                      ),
                      t(this._element).on("touchend.bs.carousel", function (e) {
                        return i(e);
                      }));
              }
            }),
            (n._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                  case 37:
                    e.preventDefault(), this.prev();
                    break;
                  case 39:
                    e.preventDefault(), this.next();
                }
            }),
            (n._getItemIndex = function (e) {
              return (
                (this._items =
                  e && e.parentNode
                    ? [].slice.call(
                        e.parentNode.querySelectorAll(".carousel-item")
                      )
                    : []),
                this._items.indexOf(e)
              );
            }),
            (n._getItemByDirection = function (e, t) {
              var n = "next" === e,
                i = "prev" === e,
                o = this._getItemIndex(t),
                r = this._items.length - 1;
              if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
                return t;
              var s = (o + ("prev" === e ? -1 : 1)) % this._items.length;
              return -1 === s
                ? this._items[this._items.length - 1]
                : this._items[s];
            }),
            (n._triggerSlideEvent = function (e, n) {
              var i = this._getItemIndex(e),
                o = this._getItemIndex(
                  this._element.querySelector(".active.carousel-item")
                ),
                r = t.Event("slide.bs.carousel", {
                  relatedTarget: e,
                  direction: n,
                  from: o,
                  to: i,
                });
              return t(this._element).trigger(r), r;
            }),
            (n._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                var n = [].slice.call(
                  this._indicatorsElement.querySelectorAll(".active")
                );
                t(n).removeClass("active");
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && t(i).addClass("active");
              }
            }),
            (n._slide = function (e, n) {
              var i,
                o,
                r,
                s = this,
                l = this._element.querySelector(".active.carousel-item"),
                c = this._getItemIndex(l),
                u = n || (l && this._getItemByDirection(e, l)),
                d = this._getItemIndex(u),
                f = Boolean(this._interval);
              if (
                ("next" === e
                  ? ((i = "carousel-item-left"),
                    (o = "carousel-item-next"),
                    (r = "left"))
                  : ((i = "carousel-item-right"),
                    (o = "carousel-item-prev"),
                    (r = "right")),
                u && t(u).hasClass("active"))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(u, r).isDefaultPrevented() &&
                l &&
                u
              ) {
                (this._isSliding = !0),
                  f && this.pause(),
                  this._setActiveIndicatorElement(u);
                var p = t.Event("slid.bs.carousel", {
                  relatedTarget: u,
                  direction: r,
                  from: c,
                  to: d,
                });
                if (t(this._element).hasClass("slide")) {
                  t(u).addClass(o),
                    a.reflow(u),
                    t(l).addClass(i),
                    t(u).addClass(i);
                  var h = parseInt(u.getAttribute("data-interval"), 10);
                  h
                    ? ((this._config.defaultInterval =
                        this._config.defaultInterval || this._config.interval),
                      (this._config.interval = h))
                    : (this._config.interval =
                        this._config.defaultInterval || this._config.interval);
                  var m = a.getTransitionDurationFromElement(l);
                  t(l)
                    .one(a.TRANSITION_END, function () {
                      t(u)
                        .removeClass(i + " " + o)
                        .addClass("active"),
                        t(l).removeClass("active " + o + " " + i),
                        (s._isSliding = !1),
                        setTimeout(function () {
                          return t(s._element).trigger(p);
                        }, 0);
                    })
                    .emulateTransitionEnd(m);
                } else
                  t(l).removeClass("active"),
                    t(u).addClass("active"),
                    (this._isSliding = !1),
                    t(this._element).trigger(p);
                f && this.cycle();
              }
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.carousel"),
                  o = r({}, g, t(this).data());
                "object" == typeof n && (o = r({}, o, n));
                var s = "string" == typeof n ? n : o.slide;
                if (
                  (i || ((i = new e(this, o)), t(this).data("bs.carousel", i)),
                  "number" == typeof n)
                )
                  i.to(n);
                else if ("string" == typeof s) {
                  if (void 0 === i[s])
                    throw new TypeError('No method named "' + s + '"');
                  i[s]();
                } else o.interval && o.ride && (i.pause(), i.cycle());
              });
            }),
            (e._dataApiClickHandler = function (n) {
              var i = a.getSelectorFromElement(this);
              if (i) {
                var o = t(i)[0];
                if (o && t(o).hasClass("carousel")) {
                  var s = r({}, t(o).data(), t(this).data()),
                    l = this.getAttribute("data-slide-to");
                  l && (s.interval = !1),
                    e._jQueryInterface.call(t(o), s),
                    l && t(o).data("bs.carousel").to(l),
                    n.preventDefault();
                }
              }
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return g;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        b._dataApiClickHandler
      ),
        t(window).on("load.bs.carousel.data-api", function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll('[data-ride="carousel"]')
              ),
              n = 0,
              i = e.length;
            n < i;
            n++
          ) {
            var o = t(e[n]);
            b._jQueryInterface.call(o, o.data());
          }
        }),
        (t.fn[p] = b._jQueryInterface),
        (t.fn[p].Constructor = b),
        (t.fn[p].noConflict = function () {
          return (t.fn[p] = m), b._jQueryInterface;
        });
      var w = "collapse",
        _ = t.fn[w],
        x = { toggle: !0, parent: "" },
        E = { toggle: "boolean", parent: "(string|element)" },
        T = (function () {
          function e(e, t) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(t)),
              (this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]'
                )
              ));
            for (
              var n = [].slice.call(
                  document.querySelectorAll('[data-toggle="collapse"]')
                ),
                i = 0,
                o = n.length;
              i < o;
              i++
            ) {
              var r = n[i],
                s = a.getSelectorFromElement(r),
                l = [].slice
                  .call(document.querySelectorAll(s))
                  .filter(function (t) {
                    return t === e;
                  });
              null !== s &&
                l.length > 0 &&
                ((this._selector = s), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var n = e.prototype;
          return (
            (n.toggle = function () {
              t(this._element).hasClass("show") ? this.hide() : this.show();
            }),
            (n.show = function () {
              var n,
                i,
                o = this;
              if (
                !(
                  this._isTransitioning ||
                  t(this._element).hasClass("show") ||
                  (this._parent &&
                    0 ===
                      (n = [].slice
                        .call(
                          this._parent.querySelectorAll(".show, .collapsing")
                        )
                        .filter(function (e) {
                          return "string" == typeof o._config.parent
                            ? e.getAttribute("data-parent") === o._config.parent
                            : e.classList.contains("collapse");
                        })).length &&
                    (n = null),
                  n &&
                    (i = t(n).not(this._selector).data("bs.collapse")) &&
                    i._isTransitioning)
                )
              ) {
                var r = t.Event("show.bs.collapse");
                if ((t(this._element).trigger(r), !r.isDefaultPrevented())) {
                  n &&
                    (e._jQueryInterface.call(t(n).not(this._selector), "hide"),
                    i || t(n).data("bs.collapse", null));
                  var s = this._getDimension();
                  t(this._element)
                    .removeClass("collapse")
                    .addClass("collapsing"),
                    (this._element.style[s] = 0),
                    this._triggerArray.length &&
                      t(this._triggerArray)
                        .removeClass("collapsed")
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                    c = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, function () {
                      t(o._element)
                        .removeClass("collapsing")
                        .addClass("collapse show"),
                        (o._element.style[s] = ""),
                        o.setTransitioning(!1),
                        t(o._element).trigger("shown.bs.collapse");
                    })
                    .emulateTransitionEnd(c),
                    (this._element.style[s] = this._element[l] + "px");
                }
              }
            }),
            (n.hide = function () {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass("show")) {
                var n = t.Event("hide.bs.collapse");
                if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var i = this._getDimension();
                  (this._element.style[i] =
                    this._element.getBoundingClientRect()[i] + "px"),
                    a.reflow(this._element),
                    t(this._element)
                      .addClass("collapsing")
                      .removeClass("collapse show");
                  var o = this._triggerArray.length;
                  if (o > 0)
                    for (var r = 0; r < o; r++) {
                      var s = this._triggerArray[r],
                        l = a.getSelectorFromElement(s);
                      null !== l &&
                        (t(
                          [].slice.call(document.querySelectorAll(l))
                        ).hasClass("show") ||
                          t(s).addClass("collapsed").attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0), (this._element.style[i] = "");
                  var c = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass("collapsing")
                          .addClass("collapse")
                          .trigger("hidden.bs.collapse");
                    })
                    .emulateTransitionEnd(c);
                }
              }
            }),
            (n.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.collapse"),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (n._getConfig = function (e) {
              return (
                ((e = r({}, x, e)).toggle = Boolean(e.toggle)),
                a.typeCheckConfig(w, e, E),
                e
              );
            }),
            (n._getDimension = function () {
              return t(this._element).hasClass("width") ? "width" : "height";
            }),
            (n._getParent = function () {
              var n,
                i = this;
              a.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  void 0 !== this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = document.querySelector(this._config.parent));
              var o =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]',
                r = [].slice.call(n.querySelectorAll(o));
              return (
                t(r).each(function (t, n) {
                  i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
                }),
                n
              );
            }),
            (n._addAriaAndCollapsedClass = function (e, n) {
              var i = t(e).hasClass("show");
              n.length &&
                t(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
            }),
            (e._getTargetFromElement = function (e) {
              var t = a.getSelectorFromElement(e);
              return t ? document.querySelector(t) : null;
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  o = i.data("bs.collapse"),
                  s = r({}, x, i.data(), "object" == typeof n && n ? n : {});
                if (
                  (!o &&
                    s.toggle &&
                    "string" == typeof n &&
                    /show|hide/.test(n) &&
                    (s.toggle = !1),
                  o || ((o = new e(this, s)), i.data("bs.collapse", o)),
                  "string" == typeof n)
                ) {
                  if (void 0 === o[n])
                    throw new TypeError('No method named "' + n + '"');
                  o[n]();
                }
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return x;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var n = t(this),
            i = a.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
          t(o).each(function () {
            var e = t(this),
              i = e.data("bs.collapse") ? "toggle" : n.data();
            T._jQueryInterface.call(e, i);
          });
        }
      ),
        (t.fn[w] = T._jQueryInterface),
        (t.fn[w].Constructor = T),
        (t.fn[w].noConflict = function () {
          return (t.fn[w] = _), T._jQueryInterface;
        });
      var C = "dropdown",
        k = t.fn[C],
        S = new RegExp("38|40|27"),
        A = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
        },
        D = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
          popperConfig: "(null|object)",
        },
        N = (function () {
          function e(e, t) {
            (this._element = e),
              (this._popper = null),
              (this._config = this._getConfig(t)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var i = e.prototype;
          return (
            (i.toggle = function () {
              if (
                !this._element.disabled &&
                !t(this._element).hasClass("disabled")
              ) {
                var n = t(this._menu).hasClass("show");
                e._clearMenus(), n || this.show(!0);
              }
            }),
            (i.show = function (i) {
              if (
                (void 0 === i && (i = !1),
                !(
                  this._element.disabled ||
                  t(this._element).hasClass("disabled") ||
                  t(this._menu).hasClass("show")
                ))
              ) {
                var o = { relatedTarget: this._element },
                  r = t.Event("show.bs.dropdown", o),
                  s = e._getParentFromElement(this._element);
                if ((t(s).trigger(r), !r.isDefaultPrevented())) {
                  if (!this._inNavbar && i) {
                    if (void 0 === n)
                      throw new TypeError(
                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                      );
                    var l = this._element;
                    "parent" === this._config.reference
                      ? (l = s)
                      : a.isElement(this._config.reference) &&
                        ((l = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (l = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        t(s).addClass("position-static"),
                      (this._popper = new n(
                        l,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === t(s).closest(".navbar-nav").length &&
                    t(document.body).children().on("mouseover", null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    t(this._menu).toggleClass("show"),
                    t(s)
                      .toggleClass("show")
                      .trigger(t.Event("shown.bs.dropdown", o));
                }
              }
            }),
            (i.hide = function () {
              if (
                !this._element.disabled &&
                !t(this._element).hasClass("disabled") &&
                t(this._menu).hasClass("show")
              ) {
                var n = { relatedTarget: this._element },
                  i = t.Event("hide.bs.dropdown", n),
                  o = e._getParentFromElement(this._element);
                t(o).trigger(i),
                  i.isDefaultPrevented() ||
                    (this._popper && this._popper.destroy(),
                    t(this._menu).toggleClass("show"),
                    t(o)
                      .toggleClass("show")
                      .trigger(t.Event("hidden.bs.dropdown", n)));
              }
            }),
            (i.dispose = function () {
              t.removeData(this._element, "bs.dropdown"),
                t(this._element).off(".bs.dropdown"),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (i.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (i._addEventListeners = function () {
              var e = this;
              t(this._element).on("click.bs.dropdown", function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (i._getConfig = function (e) {
              return (
                (e = r(
                  {},
                  this.constructor.Default,
                  t(this._element).data(),
                  e
                )),
                a.typeCheckConfig(C, e, this.constructor.DefaultType),
                e
              );
            }),
            (i._getMenuElement = function () {
              if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(".dropdown-menu"));
              }
              return this._menu;
            }),
            (i._getPlacement = function () {
              var e = t(this._element.parentNode),
                n = "bottom-start";
              return (
                e.hasClass("dropup")
                  ? (n = t(this._menu).hasClass("dropdown-menu-right")
                      ? "top-end"
                      : "top-start")
                  : e.hasClass("dropright")
                  ? (n = "right-start")
                  : e.hasClass("dropleft")
                  ? (n = "left-start")
                  : t(this._menu).hasClass("dropdown-menu-right") &&
                    (n = "bottom-end"),
                n
              );
            }),
            (i._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (i._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this._config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = r(
                          {},
                          t.offsets,
                          e._config.offset(t.offsets, e._element) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this._config.offset),
                t
              );
            }),
            (i._getPopperConfig = function () {
              var e = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: this._getOffset(),
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary },
                },
              };
              return (
                "static" === this._config.display &&
                  (e.modifiers.applyStyle = { enabled: !1 }),
                r({}, e, this._config.popperConfig)
              );
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.dropdown");
                if (
                  (i ||
                    ((i = new e(this, "object" == typeof n ? n : null)),
                    t(this).data("bs.dropdown", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            (e._clearMenus = function (n) {
              if (
                !n ||
                (3 !== n.which && ("keyup" !== n.type || 9 === n.which))
              )
                for (
                  var i = [].slice.call(
                      document.querySelectorAll('[data-toggle="dropdown"]')
                    ),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                ) {
                  var s = e._getParentFromElement(i[o]),
                    a = t(i[o]).data("bs.dropdown"),
                    l = { relatedTarget: i[o] };
                  if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                    var c = a._menu;
                    if (
                      t(s).hasClass("show") &&
                      !(
                        n &&
                        (("click" === n.type &&
                          /input|textarea/i.test(n.target.tagName)) ||
                          ("keyup" === n.type && 9 === n.which)) &&
                        t.contains(s, n.target)
                      )
                    ) {
                      var u = t.Event("hide.bs.dropdown", l);
                      t(s).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t(document.body)
                              .children()
                              .off("mouseover", null, t.noop),
                          i[o].setAttribute("aria-expanded", "false"),
                          a._popper && a._popper.destroy(),
                          t(c).removeClass("show"),
                          t(s)
                            .removeClass("show")
                            .trigger(t.Event("hidden.bs.dropdown", l)));
                    }
                  }
                }
            }),
            (e._getParentFromElement = function (e) {
              var t,
                n = a.getSelectorFromElement(e);
              return n && (t = document.querySelector(n)), t || e.parentNode;
            }),
            (e._dataApiKeydownHandler = function (n) {
              if (
                !(/input|textarea/i.test(n.target.tagName)
                  ? 32 === n.which ||
                    (27 !== n.which &&
                      ((40 !== n.which && 38 !== n.which) ||
                        t(n.target).closest(".dropdown-menu").length))
                  : !S.test(n.which)) &&
                !this.disabled &&
                !t(this).hasClass("disabled")
              ) {
                var i = e._getParentFromElement(this),
                  o = t(i).hasClass("show");
                if (o || 27 !== n.which) {
                  if (
                    (n.preventDefault(),
                    n.stopPropagation(),
                    !o || (o && (27 === n.which || 32 === n.which)))
                  )
                    return (
                      27 === n.which &&
                        t(i.querySelector('[data-toggle="dropdown"]')).trigger(
                          "focus"
                        ),
                      void t(this).trigger("click")
                    );
                  var r = [].slice
                    .call(
                      i.querySelectorAll(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                      )
                    )
                    .filter(function (e) {
                      return t(e).is(":visible");
                    });
                  if (0 !== r.length) {
                    var s = r.indexOf(n.target);
                    38 === n.which && s > 0 && s--,
                      40 === n.which && s < r.length - 1 && s++,
                      s < 0 && (s = 0),
                      r[s].focus();
                  }
                }
              }
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return A;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return D;
                },
              },
            ]),
            e
          );
        })();
      t(document)
        .on(
          "keydown.bs.dropdown.data-api",
          '[data-toggle="dropdown"]',
          N._dataApiKeydownHandler
        )
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          N._dataApiKeydownHandler
        )
        .on(
          "click.bs.dropdown.data-api keyup.bs.dropdown.data-api",
          N._clearMenus
        )
        .on(
          "click.bs.dropdown.data-api",
          '[data-toggle="dropdown"]',
          function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              N._jQueryInterface.call(t(this), "toggle");
          }
        )
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        }),
        (t.fn[C] = N._jQueryInterface),
        (t.fn[C].Constructor = N),
        (t.fn[C].noConflict = function () {
          return (t.fn[C] = k), N._jQueryInterface;
        });
      var L = t.fn.modal,
        O = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        I = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        j = (function () {
          function e(e, t) {
            (this._config = this._getConfig(t)),
              (this._element = e),
              (this._dialog = e.querySelector(".modal-dialog")),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollbarWidth = 0);
          }
          var n = e.prototype;
          return (
            (n.toggle = function (e) {
              return this._isShown ? this.hide() : this.show(e);
            }),
            (n.show = function (e) {
              var n = this;
              if (!this._isShown && !this._isTransitioning) {
                t(this._element).hasClass("fade") &&
                  (this._isTransitioning = !0);
                var i = t.Event("show.bs.modal", { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(
                      "click.dismiss.bs.modal",
                      '[data-dismiss="modal"]',
                      function (e) {
                        return n.hide(e);
                      }
                    ),
                    t(this._dialog).on(
                      "mousedown.dismiss.bs.modal",
                      function () {
                        t(n._element).one(
                          "mouseup.dismiss.bs.modal",
                          function (e) {
                            t(e.target).is(n._element) &&
                              (n._ignoreBackdropClick = !0);
                          }
                        );
                      }
                    ),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (n.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                this._isShown && !this._isTransitioning)
              ) {
                var i = t.Event("hide.bs.modal");
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var o = t(this._element).hasClass("fade");
                  if (
                    (o && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off("focusin.bs.modal"),
                    t(this._element).removeClass("show"),
                    t(this._element).off("click.dismiss.bs.modal"),
                    t(this._dialog).off("mousedown.dismiss.bs.modal"),
                    o)
                  ) {
                    var r = a.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(a.TRANSITION_END, function (e) {
                        return n._hideModal(e);
                      })
                      .emulateTransitionEnd(r);
                  } else this._hideModal();
                }
              }
            }),
            (n.dispose = function () {
              [window, this._element, this._dialog].forEach(function (e) {
                return t(e).off(".bs.modal");
              }),
                t(document).off("focusin.bs.modal"),
                t.removeData(this._element, "bs.modal"),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._isTransitioning = null),
                (this._scrollbarWidth = null);
            }),
            (n.handleUpdate = function () {
              this._adjustDialog();
            }),
            (n._getConfig = function (e) {
              return (e = r({}, O, e)), a.typeCheckConfig("modal", e, I), e;
            }),
            (n._triggerBackdropTransition = function () {
              var e = this;
              if ("static" === this._config.backdrop) {
                var n = t.Event("hidePrevented.bs.modal");
                if ((t(this._element).trigger(n), n.defaultPrevented)) return;
                var i =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                i || (this._element.style.overflowY = "hidden"),
                  this._element.classList.add("modal-static");
                var o = a.getTransitionDurationFromElement(this._dialog);
                t(this._element).off(a.TRANSITION_END),
                  t(this._element)
                    .one(a.TRANSITION_END, function () {
                      e._element.classList.remove("modal-static"),
                        i ||
                          t(e._element)
                            .one(a.TRANSITION_END, function () {
                              e._element.style.overflowY = "";
                            })
                            .emulateTransitionEnd(e._element, o);
                    })
                    .emulateTransitionEnd(o),
                  this._element.focus();
              } else this.hide();
            }),
            (n._showElement = function (e) {
              var n = this,
                i = t(this._element).hasClass("fade"),
                o = this._dialog
                  ? this._dialog.querySelector(".modal-body")
                  : null;
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                t(this._dialog).hasClass("modal-dialog-scrollable") && o
                  ? (o.scrollTop = 0)
                  : (this._element.scrollTop = 0),
                i && a.reflow(this._element),
                t(this._element).addClass("show"),
                this._config.focus && this._enforceFocus();
              var r = t.Event("shown.bs.modal", { relatedTarget: e }),
                s = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(r);
                };
              if (i) {
                var l = a.getTransitionDurationFromElement(this._dialog);
                t(this._dialog)
                  .one(a.TRANSITION_END, s)
                  .emulateTransitionEnd(l);
              } else s();
            }),
            (n._enforceFocus = function () {
              var e = this;
              t(document)
                .off("focusin.bs.modal")
                .on("focusin.bs.modal", function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (n._setEscapeEvent = function () {
              var e = this;
              this._isShown
                ? t(this._element).on("keydown.dismiss.bs.modal", function (t) {
                    e._config.keyboard && 27 === t.which
                      ? (t.preventDefault(), e.hide())
                      : e._config.keyboard ||
                        27 !== t.which ||
                        e._triggerBackdropTransition();
                  })
                : this._isShown ||
                  t(this._element).off("keydown.dismiss.bs.modal");
            }),
            (n._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on("resize.bs.modal", function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off("resize.bs.modal");
            }),
            (n._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass("modal-open"),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger("hidden.bs.modal");
                });
            }),
            (n._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (n._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass("fade") ? "fade" : "";
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = "modal-backdrop"),
                  i && this._backdrop.classList.add(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on("click.dismiss.bs.modal", function (e) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : e.target === e.currentTarget &&
                        n._triggerBackdropTransition();
                  }),
                  i && a.reflow(this._backdrop),
                  t(this._backdrop).addClass("show"),
                  !e)
                )
                  return;
                if (!i) return void e();
                var o = a.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(a.TRANSITION_END, e)
                  .emulateTransitionEnd(o);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass("show");
                var r = function () {
                  n._removeBackdrop(), e && e();
                };
                if (t(this._element).hasClass("fade")) {
                  var s = a.getTransitionDurationFromElement(this._backdrop);
                  t(this._backdrop)
                    .one(a.TRANSITION_END, r)
                    .emulateTransitionEnd(s);
                } else r();
              } else e && e();
            }),
            (n._adjustDialog = function () {
              var e =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                e &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !e &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (n._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (n._checkScrollbar = function () {
              var e = document.body.getBoundingClientRect();
              (this._isBodyOverflowing =
                Math.round(e.left + e.right) < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (n._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                var n = [].slice.call(
                    document.querySelectorAll(
                      ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                    )
                  ),
                  i = [].slice.call(document.querySelectorAll(".sticky-top"));
                t(n).each(function (n, i) {
                  var o = i.style.paddingRight,
                    r = t(i).css("padding-right");
                  t(i)
                    .data("padding-right", o)
                    .css(
                      "padding-right",
                      parseFloat(r) + e._scrollbarWidth + "px"
                    );
                }),
                  t(i).each(function (n, i) {
                    var o = i.style.marginRight,
                      r = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", o)
                      .css(
                        "margin-right",
                        parseFloat(r) - e._scrollbarWidth + "px"
                      );
                  });
                var o = document.body.style.paddingRight,
                  r = t(document.body).css("padding-right");
                t(document.body)
                  .data("padding-right", o)
                  .css(
                    "padding-right",
                    parseFloat(r) + this._scrollbarWidth + "px"
                  );
              }
              t(document.body).addClass("modal-open");
            }),
            (n._resetScrollbar = function () {
              var e = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              );
              t(e).each(function (e, n) {
                var i = t(n).data("padding-right");
                t(n).removeData("padding-right"),
                  (n.style.paddingRight = i || "");
              });
              var n = [].slice.call(document.querySelectorAll(".sticky-top"));
              t(n).each(function (e, n) {
                var i = t(n).data("margin-right");
                void 0 !== i &&
                  t(n).css("margin-right", i).removeData("margin-right");
              });
              var i = t(document.body).data("padding-right");
              t(document.body).removeData("padding-right"),
                (document.body.style.paddingRight = i || "");
            }),
            (n._getScrollbarWidth = function () {
              var e = document.createElement("div");
              (e.className = "modal-scrollbar-measure"),
                document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            }),
            (e._jQueryInterface = function (n, i) {
              return this.each(function () {
                var o = t(this).data("bs.modal"),
                  s = r(
                    {},
                    O,
                    t(this).data(),
                    "object" == typeof n && n ? n : {}
                  );
                if (
                  (o || ((o = new e(this, s)), t(this).data("bs.modal", o)),
                  "string" == typeof n)
                ) {
                  if (void 0 === o[n])
                    throw new TypeError('No method named "' + n + '"');
                  o[n](i);
                } else s.show && o.show(i);
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return O;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (e) {
          var n,
            i = this,
            o = a.getSelectorFromElement(this);
          o && (n = document.querySelector(o));
          var s = t(n).data("bs.modal")
            ? "toggle"
            : r({}, t(n).data(), t(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
          var l = t(n).one("show.bs.modal", function (e) {
            e.isDefaultPrevented() ||
              l.one("hidden.bs.modal", function () {
                t(i).is(":visible") && i.focus();
              });
          });
          j._jQueryInterface.call(t(n), s, this);
        }
      ),
        (t.fn.modal = j._jQueryInterface),
        (t.fn.modal.Constructor = j),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = L), j._jQueryInterface;
        });
      var P = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        q = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        H = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        M =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
      function B(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (
          var i = new window.DOMParser().parseFromString(e, "text/html"),
            o = Object.keys(t),
            r = [].slice.call(i.body.querySelectorAll("*")),
            s = function (e, n) {
              var i = r[e],
                s = i.nodeName.toLowerCase();
              if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i), "continue";
              var a = [].slice.call(i.attributes),
                l = [].concat(t["*"] || [], t[s] || []);
              a.forEach(function (e) {
                (function (e, t) {
                  var n = e.nodeName.toLowerCase();
                  if (-1 !== t.indexOf(n))
                    return (
                      -1 === P.indexOf(n) ||
                      Boolean(e.nodeValue.match(H) || e.nodeValue.match(M))
                    );
                  for (
                    var i = t.filter(function (e) {
                        return e instanceof RegExp;
                      }),
                      o = 0,
                      r = i.length;
                    o < r;
                    o++
                  )
                    if (n.match(i[o])) return !0;
                  return !1;
                })(e, l) || i.removeAttribute(e.nodeName);
              });
            },
            a = 0,
            l = r.length;
          a < l;
          a++
        )
          s(a);
        return i.body.innerHTML;
      }
      var R = "tooltip",
        F = t.fn[R],
        W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        z = ["sanitize", "whiteList", "sanitizeFn"],
        U = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
          popperConfig: "(null|object)",
        },
        Q = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        V = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: q,
          popperConfig: null,
        },
        $ = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        X = (function () {
          function e(e, t) {
            if (void 0 === n)
              throw new TypeError(
                "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = e),
              (this.config = this._getConfig(t)),
              (this.tip = null),
              this._setListeners();
          }
          var i = e.prototype;
          return (
            (i.enable = function () {
              this._isEnabled = !0;
            }),
            (i.disable = function () {
              this._isEnabled = !1;
            }),
            (i.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (i.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass("show"))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (i.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element)
                  .closest(".modal")
                  .off("hide.bs.modal", this._hideModalHandler),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (i.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var i = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(i);
                var o = a.findShadowRoot(this.element),
                  r = t.contains(
                    null !== o ? o : this.element.ownerDocument.documentElement,
                    this.element
                  );
                if (i.isDefaultPrevented() || !r) return;
                var s = this.getTipElement(),
                  l = a.getUID(this.constructor.NAME);
                s.setAttribute("id", l),
                  this.element.setAttribute("aria-describedby", l),
                  this.setContent(),
                  this.config.animation && t(s).addClass("fade");
                var c =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, s, this.element)
                      : this.config.placement,
                  u = this._getAttachment(c);
                this.addAttachmentClass(u);
                var d = this._getContainer();
                t(s).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || t(s).appendTo(d),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(
                    this.element,
                    s,
                    this._getPopperConfig(u)
                  )),
                  t(s).addClass("show"),
                  "ontouchstart" in document.documentElement &&
                    t(document.body).children().on("mouseover", null, t.noop);
                var f = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    "out" === n && e._leave(null, e);
                };
                if (t(this.tip).hasClass("fade")) {
                  var p = a.getTransitionDurationFromElement(this.tip);
                  t(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(p);
                } else f();
              }
            }),
            (i.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                o = t.Event(this.constructor.Event.HIDE),
                r = function () {
                  "show" !== n._hoverState &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              if ((t(this.element).trigger(o), !o.isDefaultPrevented())) {
                if (
                  (t(i).removeClass("show"),
                  "ontouchstart" in document.documentElement &&
                    t(document.body).children().off("mouseover", null, t.noop),
                  (this._activeTrigger.click = !1),
                  (this._activeTrigger.focus = !1),
                  (this._activeTrigger.hover = !1),
                  t(this.tip).hasClass("fade"))
                ) {
                  var s = a.getTransitionDurationFromElement(i);
                  t(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
                } else r();
                this._hoverState = "";
              }
            }),
            (i.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (i.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (i.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (i.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (i.setContent = function () {
              var e = this.getTipElement();
              this.setElementContent(
                t(e.querySelectorAll(".tooltip-inner")),
                this.getTitle()
              ),
                t(e).removeClass("fade show");
            }),
            (i.setElementContent = function (e, n) {
              "object" != typeof n || (!n.nodeType && !n.jquery)
                ? this.config.html
                  ? (this.config.sanitize &&
                      (n = B(n, this.config.whiteList, this.config.sanitizeFn)),
                    e.html(n))
                  : e.text(n)
                : this.config.html
                ? t(n).parent().is(e) || e.empty().append(n)
                : e.text(t(n).text());
            }),
            (i.getTitle = function () {
              var e = this.element.getAttribute("data-original-title");
              return (
                e ||
                  (e =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                e
              );
            }),
            (i._getPopperConfig = function (e) {
              var t = this;
              return r(
                {},
                {
                  placement: e,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: ".arrow" },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement &&
                      t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    return t._handlePopperPlacementChange(e);
                  },
                },
                this.config.popperConfig
              );
            }),
            (i._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this.config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = r(
                          {},
                          t.offsets,
                          e.config.offset(t.offsets, e.element) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this.config.offset),
                t
              );
            }),
            (i._getContainer = function () {
              return !1 === this.config.container
                ? document.body
                : a.isElement(this.config.container)
                ? t(this.config.container)
                : t(document).find(this.config.container);
            }),
            (i._getAttachment = function (e) {
              return Q[e.toUpperCase()];
            }),
            (i._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    }
                  );
                else if ("manual" !== n) {
                  var i =
                      "hover" === n
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    o =
                      "hover" === n
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(o, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
              }),
                (this._hideModalHandler = function () {
                  e.element && e.hide();
                }),
                t(this.element)
                  .closest(".modal")
                  .on("hide.bs.modal", this._hideModalHandler),
                this.config.selector
                  ? (this.config = r({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (i._fixTitle = function () {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (i._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e &&
                  (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] =
                    !0),
                t(n.getTipElement()).hasClass("show") ||
                "show" === n._hoverState
                  ? (n._hoverState = "show")
                  : (clearTimeout(n._timeout),
                    (n._hoverState = "show"),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          "show" === n._hoverState && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (i._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e &&
                  (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
                    !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = "out"),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        "out" === n._hoverState && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (i._isWithActiveTrigger = function () {
              for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
              return !1;
            }),
            (i._getConfig = function (e) {
              var n = t(this.element).data();
              return (
                Object.keys(n).forEach(function (e) {
                  -1 !== z.indexOf(e) && delete n[e];
                }),
                "number" ==
                  typeof (e = r(
                    {},
                    this.constructor.Default,
                    n,
                    "object" == typeof e && e ? e : {}
                  )).delay && (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content &&
                  (e.content = e.content.toString()),
                a.typeCheckConfig(R, e, this.constructor.DefaultType),
                e.sanitize &&
                  (e.template = B(e.template, e.whiteList, e.sanitizeFn)),
                e
              );
            }),
            (i._getDelegateConfig = function () {
              var e = {};
              if (this.config)
                for (var t in this.config)
                  this.constructor.Default[t] !== this.config[t] &&
                    (e[t] = this.config[t]);
              return e;
            }),
            (i._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(W);
              null !== n && n.length && e.removeClass(n.join(""));
            }),
            (i._handlePopperPlacementChange = function (e) {
              (this.tip = e.instance.popper),
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement));
            }),
            (i._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass("fade"),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.tooltip"),
                  o = "object" == typeof n && n;
                if (
                  (i || !/dispose|hide/.test(n)) &&
                  (i || ((i = new e(this, o)), t(this).data("bs.tooltip", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return V;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return R;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                },
              },
              {
                key: "Event",
                get: function () {
                  return $;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ".bs.tooltip";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return U;
                },
              },
            ]),
            e
          );
        })();
      (t.fn[R] = X._jQueryInterface),
        (t.fn[R].Constructor = X),
        (t.fn[R].noConflict = function () {
          return (t.fn[R] = F), X._jQueryInterface;
        });
      var Y = "popover",
        G = t.fn[Y],
        K = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        J = r({}, X.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        Z = r({}, X.DefaultType, { content: "(string|element|function)" }),
        ee = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover",
        },
        te = (function (e) {
          var n, i;
          function r() {
            return e.apply(this, arguments) || this;
          }
          (i = e),
            ((n = r).prototype = Object.create(i.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = i);
          var s = r.prototype;
          return (
            (s.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (s.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (s.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (s.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(
                e.find(".popover-header"),
                this.getTitle()
              );
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(".popover-body"), n),
                e.removeClass("fade show");
            }),
            (s._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (s._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(K);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (r._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data("bs.popover"),
                  i = "object" == typeof e ? e : null;
                if (
                  (n || !/dispose|hide/.test(e)) &&
                  (n || ((n = new r(this, i)), t(this).data("bs.popover", n)),
                  "string" == typeof e)
                ) {
                  if (void 0 === n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            o(r, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return J;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return Y;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return ee;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ".bs.popover";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Z;
                },
              },
            ]),
            r
          );
        })(X);
      (t.fn[Y] = te._jQueryInterface),
        (t.fn[Y].Constructor = te),
        (t.fn[Y].noConflict = function () {
          return (t.fn[Y] = G), te._jQueryInterface;
        });
      var ne = "scrollspy",
        ie = t.fn[ne],
        oe = { offset: 10, method: "auto", target: "" },
        re = { offset: "number", method: "string", target: "(string|element)" },
        se = (function () {
          function e(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " .nav-link," +
                this._config.target +
                " .list-group-item," +
                this._config.target +
                " .dropdown-item"),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
                return i._process(e);
              }),
              this.refresh(),
              this._process();
          }
          var n = e.prototype;
          return (
            (n.refresh = function () {
              var e = this,
                n =
                  this._scrollElement === this._scrollElement.window
                    ? "offset"
                    : "position",
                i = "auto" === this._config.method ? n : this._config.method,
                o = "position" === i ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .map(function (e) {
                    var n,
                      r = a.getSelectorFromElement(e);
                    if ((r && (n = document.querySelector(r)), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [t(n)[i]().top + o, r];
                    }
                    return null;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .sort(function (e, t) {
                    return e[0] - t[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.scrollspy"),
                t(this._scrollElement).off(".bs.scrollspy"),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (n._getConfig = function (e) {
              if (
                "string" !=
                  typeof (e = r({}, oe, "object" == typeof e && e ? e : {}))
                    .target &&
                a.isElement(e.target)
              ) {
                var n = t(e.target).attr("id");
                n || ((n = a.getUID(ne)), t(e.target).attr("id", n)),
                  (e.target = "#" + n);
              }
              return a.typeCheckConfig(ne, e, re), e;
            }),
            (n._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (n._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (n._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (n._process = function () {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
              if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  e < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var o = this._offsets.length; o--; )
                  this._activeTarget !== this._targets[o] &&
                    e >= this._offsets[o] &&
                    (void 0 === this._offsets[o + 1] ||
                      e < this._offsets[o + 1]) &&
                    this._activate(this._targets[o]);
              }
            }),
            (n._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",").map(function (t) {
                  return (
                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  );
                }),
                i = t([].slice.call(document.querySelectorAll(n.join(","))));
              i.hasClass("dropdown-item")
                ? (i
                    .closest(".dropdown")
                    .find(".dropdown-toggle")
                    .addClass("active"),
                  i.addClass("active"))
                : (i.addClass("active"),
                  i
                    .parents(".nav, .list-group")
                    .prev(".nav-link, .list-group-item")
                    .addClass("active"),
                  i
                    .parents(".nav, .list-group")
                    .prev(".nav-item")
                    .children(".nav-link")
                    .addClass("active")),
                t(this._scrollElement).trigger("activate.bs.scrollspy", {
                  relatedTarget: e,
                });
            }),
            (n._clear = function () {
              [].slice
                .call(document.querySelectorAll(this._selector))
                .filter(function (e) {
                  return e.classList.contains("active");
                })
                .forEach(function (e) {
                  return e.classList.remove("active");
                });
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.scrollspy");
                if (
                  (i ||
                    ((i = new e(this, "object" == typeof n && n)),
                    t(this).data("bs.scrollspy", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return oe;
                },
              },
            ]),
            e
          );
        })();
      t(window).on("load.bs.scrollspy.data-api", function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-spy="scroll"]')
            ),
            n = e.length;
          n--;

        ) {
          var i = t(e[n]);
          se._jQueryInterface.call(i, i.data());
        }
      }),
        (t.fn[ne] = se._jQueryInterface),
        (t.fn[ne].Constructor = se),
        (t.fn[ne].noConflict = function () {
          return (t.fn[ne] = ie), se._jQueryInterface;
        });
      var ae = t.fn.tab,
        le = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass("active")) ||
                  t(this._element).hasClass("disabled")
                )
              ) {
                var n,
                  i,
                  o = t(this._element).closest(".nav, .list-group")[0],
                  r = a.getSelectorFromElement(this._element);
                if (o) {
                  var s =
                    "UL" === o.nodeName || "OL" === o.nodeName
                      ? "> li > .active"
                      : ".active";
                  i = (i = t.makeArray(t(o).find(s)))[i.length - 1];
                }
                var l = t.Event("hide.bs.tab", {
                    relatedTarget: this._element,
                  }),
                  c = t.Event("show.bs.tab", { relatedTarget: i });
                if (
                  (i && t(i).trigger(l),
                  t(this._element).trigger(c),
                  !c.isDefaultPrevented() && !l.isDefaultPrevented())
                ) {
                  r && (n = document.querySelector(r)),
                    this._activate(this._element, o);
                  var u = function () {
                    var n = t.Event("hidden.bs.tab", {
                        relatedTarget: e._element,
                      }),
                      o = t.Event("shown.bs.tab", { relatedTarget: i });
                    t(i).trigger(n), t(e._element).trigger(o);
                  };
                  n ? this._activate(n, n.parentNode, u) : u();
                }
              }
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (n._activate = function (e, n, i) {
              var o = this,
                r = (
                  !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                    ? t(n).children(".active")
                    : t(n).find("> li > .active")
                )[0],
                s = i && r && t(r).hasClass("fade"),
                l = function () {
                  return o._transitionComplete(e, r, i);
                };
              if (r && s) {
                var c = a.getTransitionDurationFromElement(r);
                t(r)
                  .removeClass("show")
                  .one(a.TRANSITION_END, l)
                  .emulateTransitionEnd(c);
              } else l();
            }),
            (n._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass("active");
                var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                o && t(o).removeClass("active"),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass("active"),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                a.reflow(e),
                e.classList.contains("fade") && e.classList.add("show"),
                e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
              ) {
                var r = t(e).closest(".dropdown")[0];
                if (r) {
                  var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                  t(s).addClass("active");
                }
                e.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  o = i.data("bs.tab");
                if (
                  (o || ((o = new e(this)), i.data("bs.tab", o)),
                  "string" == typeof n)
                ) {
                  if (void 0 === o[n])
                    throw new TypeError('No method named "' + n + '"');
                  o[n]();
                }
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
            ]),
            e
          );
        })();
      t(document).on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (e) {
          e.preventDefault(), le._jQueryInterface.call(t(this), "show");
        }
      ),
        (t.fn.tab = le._jQueryInterface),
        (t.fn.tab.Constructor = le),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = ae), le._jQueryInterface;
        });
      var ce = t.fn.toast,
        ue = { animation: "boolean", autohide: "boolean", delay: "number" },
        de = { animation: !0, autohide: !0, delay: 500 },
        fe = (function () {
          function e(e, t) {
            (this._element = e),
              (this._config = this._getConfig(t)),
              (this._timeout = null),
              this._setListeners();
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this,
                n = t.Event("show.bs.toast");
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                this._clearTimeout(),
                  this._config.animation && this._element.classList.add("fade");
                var i = function () {
                  e._element.classList.remove("showing"),
                    e._element.classList.add("show"),
                    t(e._element).trigger("shown.bs.toast"),
                    e._config.autohide &&
                      (e._timeout = setTimeout(function () {
                        e.hide();
                      }, e._config.delay));
                };
                if (
                  (this._element.classList.remove("hide"),
                  a.reflow(this._element),
                  this._element.classList.add("showing"),
                  this._config.animation)
                ) {
                  var o = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, i)
                    .emulateTransitionEnd(o);
                } else i();
              }
            }),
            (n.hide = function () {
              if (this._element.classList.contains("show")) {
                var e = t.Event("hide.bs.toast");
                t(this._element).trigger(e),
                  e.isDefaultPrevented() || this._close();
              }
            }),
            (n.dispose = function () {
              this._clearTimeout(),
                this._element.classList.contains("show") &&
                  this._element.classList.remove("show"),
                t(this._element).off("click.dismiss.bs.toast"),
                t.removeData(this._element, "bs.toast"),
                (this._element = null),
                (this._config = null);
            }),
            (n._getConfig = function (e) {
              return (
                (e = r(
                  {},
                  de,
                  t(this._element).data(),
                  "object" == typeof e && e ? e : {}
                )),
                a.typeCheckConfig("toast", e, this.constructor.DefaultType),
                e
              );
            }),
            (n._setListeners = function () {
              var e = this;
              t(this._element).on(
                "click.dismiss.bs.toast",
                '[data-dismiss="toast"]',
                function () {
                  return e.hide();
                }
              );
            }),
            (n._close = function () {
              var e = this,
                n = function () {
                  e._element.classList.add("hide"),
                    t(e._element).trigger("hidden.bs.toast");
                };
              if (
                (this._element.classList.remove("show"), this._config.animation)
              ) {
                var i = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, n)
                  .emulateTransitionEnd(i);
              } else n();
            }),
            (n._clearTimeout = function () {
              clearTimeout(this._timeout), (this._timeout = null);
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  o = i.data("bs.toast");
                if (
                  (o ||
                    ((o = new e(this, "object" == typeof n && n)),
                    i.data("bs.toast", o)),
                  "string" == typeof n)
                ) {
                  if (void 0 === o[n])
                    throw new TypeError('No method named "' + n + '"');
                  o[n](this);
                }
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.1";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return ue;
                },
              },
              {
                key: "Default",
                get: function () {
                  return de;
                },
              },
            ]),
            e
          );
        })();
      (t.fn.toast = fe._jQueryInterface),
        (t.fn.toast.Constructor = fe),
        (t.fn.toast.noConflict = function () {
          return (t.fn.toast = ce), fe._jQueryInterface;
        }),
        (e.Alert = u),
        (e.Button = f),
        (e.Carousel = b),
        (e.Collapse = T),
        (e.Dropdown = N),
        (e.Modal = j),
        (e.Popover = te),
        (e.Scrollspy = se),
        (e.Tab = le),
        (e.Toast = fe),
        (e.Tooltip = X),
        (e.Util = a),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(t, n(16), n(19));
  },
});
