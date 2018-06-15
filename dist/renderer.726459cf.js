// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
var define;
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;if (!t && f) return f(n, !0);if (i) return i(n, !0);if (o && "string" == typeof n) return o(n);var c = new Error("Cannot find module '" + n + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }p.resolve = function (r) {
        return e[n][1][r] || r;
      };var l = r[n] = new u.Module(n);e[n][0].call(l.exports, p, l, l.exports, this);
    }return r[n].exports;function p(e) {
      return u(p.resolve(e));
    }
  }u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }if (n.length) {
    var c = u(n[n.length - 1]);"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }return u;
}({ 15: [function (require, module, exports) {
    module.exports = { name: "fc-npm-tester", version: "1.0.0", description: "Utility to test the npm package of fusioncharts", main: "index.js", scripts: { test: 'echo "Error: no test specified" && exit 1', lint: "./node_modules/.bin/eslint ./src/*.js --fix", "build-webpack": "webpack", "build-rollup": "./node_modules/.bin/rollup -c", "build-steal": "steal-tools", "build-brunch": "brunch build --production", "build-parcel": "parcel build ./src/renderer.js" }, repository: { type: "git", url: "git+https://github.com/priyanjitdey94/fc-npm-tester.git" }, author: "Priyanjit Dey", license: "MIT", bugs: { url: "https://github.com/priyanjitdey94/fc-npm-tester/issues" }, homepage: "https://github.com/priyanjitdey94/fc-npm-tester#readme", dependencies: { fusioncharts: "git+ssh://git@bitbucket.org/fusioncharts/fusioncharts-npm.git" }, devDependencies: { "babel-brunch": "^6.1.1", "babel-cli": "^6.26.0", "babel-core": "^6.26.3", "babel-eslint": "^8.2.3", "babel-loader": "^7.1.4", "babel-preset-env": "^1.7.0", "babel-preset-es2015": "^6.24.1", brunch: "^2.10.12", eslint: "^4.19.1", "eslint-plugin-react": "^7.9.1", "parcel-bundler": "^1.9.0", rollup: "^0.60.7", "rollup-plugin-babel": "^3.0.4", "rollup-plugin-commonjs": "^9.1.3", "rollup-plugin-json": "^3.0.0", "rollup-plugin-node-resolve": "^3.3.0", "rollup-plugin-uglify": "^4.0.0", steal: "^1.12.0", "steal-tools": "^1.11.9", "uglify-js": "^3.4.0", webpack: "^4.12.0", "webpack-cli": "^3.0.6" } };
  }, {}], 72: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = void 0,
        t = 1,
        r = 2;var a,
        p = {},
        o = Math.max;function s(o, s, n, i, l, h) {
      var d,
          y,
          c,
          u,
          g = 1;for (d in exports.attribDefs = a = a || p, i = i || p, h = h || p, l = l || {}, o) {
        i[d] || ((y = o[d]) || !1 === y || 0 === y) && ((c = (u = h[d] || a[d]) && u.type) === t ? (y = +y, isNaN(y) || (s[d] = y)) : c === r ? (y = +y, isNaN(y) || (s[d] = !!y)) : s[d] = y);
      }if (n) for (d in s) {
        s[d] === e && (u = h[d] || a[d]) && u.pAttr && (s[d] = n[u.pAttr]);
      }for (; g;) {
        for (d in g = 0, s) {
          s[d] === e && (u = h[d] || a[d]) && (u.attr ? (y = s[u.attr]) !== e && (s[d] = y, g += 1) : u.parser && (y = u.parser(s, n, l)) !== e && (s[d] = y, g += 1));
        }
      }
    }function n(e, t) {
      var r, p;for (p in exports.attribDefs = a = a || {}, "string" == typeof e ? (r = {})[e] = t : r = e, r) {
        a[p] || (a[p] = r[p]);
      }
    }function i(e) {
      return !!a[e];
    }exports.attribDefs = a = { setBorderWidth: { type: 1, pAttr: "plotborderthickness" }, plotborderthickness: { type: 1, pAttr: "plotborderthickness" }, showBorderEffect: { parser: function parser() {
          var e = arguments[1];return 1 == +e.showplotborder && .1 === e.plotborderthickness ? 1 : 0;
        } }, alphaanimation: { type: 1 }, showplotborder: { type: 1, pAttr: "showplotborder" }, zeroplanethickness: { type: 1 }, showzeroplaneontop: { type: 1 }, stickytracking: { type: 1 }, usemessagelog: { type: 1 }, showtooltip: { type: 1, pAttr: "showtooltip" }, seriesnameintooltip: { type: 1 }, plothovereffect: { type: 1, attr: "anchorhovereffect" }, anchorhovereffect: { type: 1, attr: "showhovereffect" }, showhovereffect: { type: 1, attr: "drawcrossline" }, drawcrossline: { type: 1 }, linethickness: { type: 1, pAttr: "linethickness" }, dashed: { type: 1, pAttr: "linedashed" }, linedashed: { type: 1, attr: "plotborderdashed" }, plotborderdashed: { type: 1, pAttr: "plotborderdashed" }, linedashlen: { type: 1, pAttr: "linedashlen" }, linedashgap: { type: 1, pAttr: "linedashgap" }, anchoralpha: { pAttr: "anchoralpha" }, anchorsides: { type: 1, pAttr: "anchorsides" }, anchorradius: { type: 1, pAttr: "anchorradius" }, anchorbgalpha: { pAttr: "anchorbgalpha" }, anchorbgcolor: { pAttr: "anchorbgcolor" }, anchorbordercolor: { pAttr: "anchorbordercolor" }, anchorstartangle: { type: 1, pAttr: "anchorstartangle" }, anchorimageurl: { pAttr: "anchorimageurl" }, anchorimagescale: { type: 1, pAttr: "anchorimagescale" }, anchorimagealpha: { pAttr: "anchorimagealpha" }, anchorimagepadding: { type: 1, pAttr: "anchorimagepadding" }, anchorborderthickness: { type: 1, pAttr: "anchorborderthickness" }, anchorshadow: { type: 1, pAttr: "anchorshadow" }, valuepadding: { type: 1, pAttr: "valuepadding" }, valueposition: { pAttr: "valueposition" }, plotfillangle: { type: 1, pAttr: "plotfillangle" }, useplotgradientcolor: { type: 1 }, rotatevalues: { type: 1, pAttr: "rotatevalues" }, includeinlegend: { type: 1 }, connectnulldata: { type: 1 }, plotfillalpha: { pAttr: "plotfillalpha" }, alpha: { pAttr: "linealpha" }, linealpha: { pAttr: "plotfillalpha" }, showvalues: { type: 1, pAttr: "showvalues" }, showpercentvalues: { type: 1, parser: function parser(e) {
          return e.isstacked && e.stack100percent ? 1 : 0;
        } }, showpercentintooltip: { type: 1, parser: function parser(e) {
          return e.isstacked && e.stack100percent ? 1 : 0;
        } }, stack100percent: { type: 1, attr: "usepercentdistribution" }, drawfullareaborder: { type: 1 }, use3dlineshift: { type: 1 }, parentyaxis: { type: 1 }, radarborderthickness: { type: 1 }, radarborderradius: { type: 1 }, gaugeoriginx: { type: 1 }, hasgaugeoriginx: { attr: "gaugeoriginx" }, gaugeoriginy: { type: 1 }, hasgaugeoriginy: { attr: "gaugeoriginy" }, gaugeradius: { type: 1 }, hasgaugeradius: { attr: "gaugeradius" }, showgaugeborder: { type: 1 }, setAdaptiveMin: { type: 1 }, adjustDiv: { type: 1 }, axisNameWidth: { type: 1 }, rotateAxisName: { type: 1 }, useEllipsesWhenOverflow: { type: 1 }, showZeroPlane: { type: 1 }, zeroPlaneAlpha: { type: 1 }, showZeroPlaneValue: { type: 1 }, zeroPlaneOnTop: { type: 1 }, trendlineThickness: { type: 1 }, showTrendlinesOnTop: { type: 1 }, trendlinesAreDashed: { type: 1 }, trendlinesDashLen: { type: 1 }, trendlinesDashGap: { type: 1 }, showTrendlines: { type: 1 }, showTrendlineLabels: { type: 1 }, showLabels: { type: 1 }, rotateLabels: { type: 1 }, slantLabel: { type: 1 }, showAxisValues: { type: 1 }, showTooltip: { type: 1 }, maxLabelHeight: { type: 1 }, useroundedges: { type: 1, pAttr: "useroundedges" }, placevaluesinside: { type: 1 }, plotpaddingpercent: { type: 1 }, use3dlighting: { type: 1, pAttr: "use3dlighting" }, usedataplotcolorforlabels: { type: 1 }, plotspacepercent: { type: 1, parser: function parser(e) {
          return o(e.plotspacepercent % 100, 0);
        } }, ratio: { pAttr: "plotfillratio" }, base: { type: 1 }, showMinorDivLineValues: { type: 1 }, numMinorDivLines: { type: 1 }, majorTMNumber: { type: 1 }, majorTMHeight: { type: 1 }, showTickMarks: { type: 1 }, majorTMThickness: { type: 1 }, adjustTM: { type: 2 }, minorTMNumber: { type: 1 }, minorTMThickness: { type: 1 }, tickMarkDistance: { type: 1 }, placeTicksInside: { type: 1 }, placeValuesInside: { type: 1 }, axisValuePadding: { type: 1 }, gridLineWidth: { type: 1 }, showRadarBorder: { type: 1 }, radarBorderThickness: { type: 1 }, maxcolwidth: { type: 1, parser: function parser(e) {
          return Math.abs(e.maxcolwidth);
        } }, maxbarheight: { type: 1, parser: function parser(e) {
          return Math.abs(e.maxbarheight);
        } }, plotborderalpha: { parser: function parser(e, t) {
          return t.plotborderalpha || e.plotfillalpha;
        } }, autoscale: { type: 1 }, plotborderdashlen: { type: 1, pAttr: "plotborderdashlen" }, plotborderdashgap: { type: 1, pAttr: "plotborderdashgap" }, plotfillratio: { pAttr: "plotfillratio" }, drawverticaljoins: { type: 1, pAttr: "drawverticaljoins" }, useforwardsteps: { type: 1, pAttr: "useforwardsteps" }, minimizetendency: { type: 1 }, usepercentdistribution: { type: 1 }, stepatmiddle: { type: 1 } }, exports.attribDefs = a, exports.parseConfiguration = s, exports.setAttribDefs = n, exports.hasAttribDefs = i;
  }, {}], 84: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e, t, n, r) {
      if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != a && (typeof t === "undefined" ? "undefined" : _typeof(t)) != a) return null;if ((typeof t === "undefined" ? "undefined" : _typeof(t)) != a || null === t) return e;if (void 0 === e && (e = t instanceof Array ? [] : {}), r) for (var o in t) {
        e[o] = t[o];
      } else c(e, t, n);return e;
    };var e = void 0,
        t = "__blank",
        n = "␀",
        r = "",
        o = "[object Array]",
        _ = "[object Object]",
        a = "object",
        l = { "font-family": "fontFamily", "font-size": "fontSize", "text-anchor": "textAnchor", "font-weight": "fontWeight", "letter-spacing": "letterSpacing", "font-style": "fontStyle" },
        f = function f(e, t) {
      var n = t.src,
          r = e._.RefImg;r || (r = e._.RefImg = new Image()), void 0 === t.src || (r.src = n, e._.RefImg = r);
    },
        i = function i(e) {
      for (var t = {}, n = e, r = t; n;) {
        n.node && n.node.style && "none" === n.node.style.display && (n.show(), r._doHide = !0), n = n.parent, r.parent = {}, r = r.parent;
      }return function () {
        for (var n = e, r = t; n;) {
          r._doHide && n.hide(), n = n.parent, r = r.parent;
        }
      };
    },
        p = function p(e, t) {
      for (var n = t.length, r = -1; n--;) {
        if (e === t[n]) return r = n;
      }return r;
    },
        u = function u(e) {
      var t, n, r;for (t = 0, n = e.length, r = Array(n); t < n; t++) {
        r[t] = e[t];
      }return r;
    },
        c = function c(t, n, r, l, f) {
      var i, u, s, d, y;if (f ? (l.push(t), f.push(n)) : (l = [t], f = [n]), n instanceof Array) for (i = 0; i < n.length; i += 1) {
        try {
          u = t[i], s = n[i];
        } catch (t) {
          continue;
        }(typeof s === "undefined" ? "undefined" : _typeof(s)) == a ? ((null === u || (typeof u === "undefined" ? "undefined" : _typeof(u)) != a) && (u = t[i] = s instanceof Array ? [] : {}), -1 === (y = p(s, f)) ? c(u, s, r, l, f) : u = t[i] = l[y]) : (!r || s !== e) && (t[i] = s);
      } else for (i in n) {
        try {
          u = t[i], s = n[i];
        } catch (t) {
          continue;
        }null !== s && (typeof s === "undefined" ? "undefined" : _typeof(s)) == a ? (d = Object.prototype.toString.call(s)) === _ ? ((null === u || (typeof u === "undefined" ? "undefined" : _typeof(u)) != a) && (u = t[i] = {}), -1 === (y = p(s, f)) ? c(u, s, r, l, f) : u = t[i] = l[y]) : d === o ? ((null === u || !(u instanceof Array)) && (u = t[i] = []), -1 === (y = p(s, f)) ? c(u, s, r, l, f) : u = t[i] = l[y]) : t[i] = s : t[i] = s;
      }return t;
    };var s = function s(e, o, _, a, l, f, i) {
      var p = f || {},
          c = 0;return void 0 === p.__start && (p.__start = null), void 0 === p.__end && (p.__end = null), l = l || 1e3, a = a || "item", function (f) {
        var s,
            d,
            y,
            v = i ? f : u(arguments).join(n);return (s = p[v = v === r ? t : v]) ? s.__prev && (p[s.__prev].__next = s.__next, s.__next ? s.__next.__prev = s.__prev : p.__end = s.__prev) : (s = p[v] = {}, e && (p[v][a] = _ ? _(e.apply(o, arguments)) : e.apply(o, arguments)), null === p.__end && (p.__end = v), ++c > l && p.__end && (d = p[p.__end], p[d.__prev].__next = null, delete p[p.__end], p.__end = d.__prev, c--)), (y = p.__start) !== s && (s.__prev = null, s.__next = y, y && (y.__prev = v), p.__start = s), p[v][a];
      };
    };exports.merge = c, exports.getArrayCopy = u, exports.dashedAttr2CSSMap = l, exports.loadRefImage = f, exports.showRecursively = i, exports.cacher = s;
  }, {}], 73: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../vendors/redraphael/source/raphael.lib"),
        t = n(e);function n(e) {
      return e && e.__esModule ? e : { default: e };
    }var r,
        o = " ",
        u = window,
        s = u.document,
        a = "ontouchstart" in u,
        l = { click: "click", touchstart: "touchstart", touchend: "touchend", touchmove: "touchmove", mousedown: "mousedown", mouseup: "mouseup", mousemove: "mousemove", mouseout: "mouseout", mouseover: "mouseover", keydown: "keydown" },
        i = function () {
      var e,
          t = {};return t.pointerdrag = { start: [l.mousedown], end: [l.mouseup], onStart: [l.mousemove], postHandlers: {}, preHandlers: {} }, t.pointerhover = { start: [l.mouseover], end: [l.mouseout] }, t.click = { start: [l.click] }, t.escape = { start: [l.keydown], preHandlers: { start: function start(e) {
            return !(!(e = e || u.event).keyCode || 27 !== e.keyCode);
          } } }, a && ((e = t.pointerdrag).start.push(l.touchstart), e.end.push(l.touchend), e.onStart.push(l.touchmove), e.postHandlers.onStart = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }), t;
    }();function c() {
      return (0, t.default)({}, i);
    }function f() {
      var e = {},
          n = {},
          a = s.addEventListener ? function (e, t, n) {
        e.addEventListener(t, n, !1);
      } : function (e, t, n) {
        e.attachEvent("on" + t, n);
      },
          l = s.removeEventListener ? function (e, t, n) {
        e.removeEventListener(t, n, !1);
      } : function (e, t, n) {
        e.detachEvent("on" + t, n);
      },
          i = function i(e, t, n, r) {
        return a(e, t, n[r = r || "closure"]), function () {
          l(e, t, n[r]);
        };
      },
          c = function c(e, t, n) {
        var o,
            s,
            a,
            l,
            c = [];if (l = r[t], n.start = function (t) {
          var r = l.onStart,
              o = l.end,
              s = [],
              a = [],
              c = r && r.length || 0;for (t = t || u.event; c--;) {
            s.push(i(e, r[c], n, "onStart"));
          }for (c = o && o.length || 0; c--;) {
            a.push(i(e, o[c], n, "end"));
          }n.startUn = n.startUn ? n.startUn.concat(s) : s, n.endUn = n.endUn ? n.endUn.concat(a) : a, n.state = "start", n.closure(t);
        }, n.onStart = function (e) {
          e = e || u.event, n.state = "on", n.gDef && n.gDef.preHandlers && "function" == typeof n.gDef.preHandlers.onStart && n.gDef.preHandlers.onStart(e), n.closure(e), n.gDef && n.gDef.postHandlers && "function" == typeof n.gDef.postHandlers.onStart && n.gDef.postHandlers.onStart(e);
        }, n.end = function (e) {
          var t = n.startUn,
              r = n.endUn,
              o = t && t.length || 0;for (e = e || u.event; o--;) {
            t[o]();
          }for (delete n.startUn, n.startUn = [], o = r && r.length || 0; o--;) {
            r[o]();
          }delete n.endUn, n.endUn = [], n.state = "end", n.closure(e);
        }, l) for (a = (o = l.start).length; a--;) {
          (s = o[a]) && c.push(i(e, s, n, "start"));
        }return c;
      },
          f = function f(e, t, n) {
        var o, u, s, a;if (a = r[t]) for (s = (o = a.start).length; s--;) {
          (u = o[s]) && l(e, u, n.start);
        }
      },
          d = function d(e) {
        return function (t) {
          var n,
              r = e.context || e.elem;t = t.originalEvent || t, n = { data: e.data, type: e.type, state: e.state, isGesture: e.isGesture, target: t.target || t.srcElement, originalEvent: t }, t = t || u.event, e.handler.call(r, n);
        };
      };return { listen: function listen(t, u, a, l, f) {
          var v,
              p,
              h,
              m,
              g,
              E = this,
              y = "string" == typeof u ? u.split(o) : u,
              D = y.length,
              w = [],
              U = function U(e, t, n) {
            w.push(function () {
              E.unlisten(e, t, n);
            });
          };if (t.ownerDocument && t.ownerDocument === s) for (; D--;) {
            p = y[D], m = !!r[p], (h = { handler: g = "function" == typeof a ? a : a[D], elem: t, type: p, isGesture: m, gDef: m ? r[p] : null, data: l, context: f, start: [], end: [], links: { prev: null, next: null } }).closure = d(h), m ? (!(v = n[p]) && (v = n[p] = []), v.push(h), c(t, p, h)) : (!(v = e[p]) && (v = e[p] = []), v.push(h), i(t, p, h)), U(t, p, g);
          } else for (; D--;) {
            p = y[D], (h = { handler: g = "function" == typeof a ? a : a[D], elem: t, type: p, isGesture: m, data: l, context: f, start: [], end: [], links: { prev: null, next: null } }).closure = d(h), (v = e[p]) || (v = e[p] = []), v.push(h), i(t, p, h), U(t, p, g);
          }return { unlisten: function unlisten() {
              for (var e = w.length; e--;) {
                w[e]();
              }w.length = 0, w = null;
            } };
        }, unlisten: function unlisten(t, o, u) {
          var s,
              a,
              i,
              c = !1;if (!!r[o]) for (a = (s = n[o]) && s.length || 0; a--;) {
            (i = s[a]).handler === u && i.elem === t && (f(t, o, i), s.splice(a, 1), c = !0);
          } else for (a = (s = e[o]) && s.length || 0; a--;) {
            (i = s[a]).handler === u && i.elem === t && (l(t, o, i.closure), s.splice(a, 1), c = !0);
          }return c;
        }, fire: function fire(n, r, o, u) {
          var a, l, i, c;if (n.ownerDocument && n.ownerDocument === s) s.createEvent ? ((c = s.createEvent("HTMLEvents")).initEvent(r, !0, !0), o && (o.originalEvent ? o.originalEvent = c : (0, t.default)(c, o)), "function" == typeof n[r] && n[r](), n.dispatchEvent(c), u && !c.returnValue && u(c)) : ((c = s.createEventObject()).eventType = r, o && (o.originalEvent ? o.originalEvent = c : (0, t.default)(c, o)), "function" == typeof n[r] && n[r](), n.fireEvent("on" + r, c), u && !c.returnValue && u(c));else for (l = (a = e[r]) && a.length || 0; l--;) {
            (i = a[l]).elem === n && i.closure(o);
          }
        } };
    }r = c(), exports.default = new f();
  }, { "../vendors/redraphael/source/raphael.lib": 84 }], 21: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.HEXtoRGB = exports.rawRGBtoHEX = exports.RGBtoHex = exports.getValidColor = exports.parseColor = exports.getAngle = exports.getPointColor = exports.getColumnColor = exports.mapSymbolName = exports.getLightColor = exports.getDarkColor = exports.convertColor = void 0;var r = require("./lib"),
        o = { circle: "circle", triangle: "triangle", square: "square", diamond: "diamond", poly: "poly_", spoke: "spoke_" };function e(o, e) {
      return o = +o, o = isNaN(o) ? 100 : o, e !== r.UNDEF && (o = o * e / 100), o % 101;
    }function t(o, t, l) {
      var a,
          n = o.split(r.COMMA);for (l !== r.UNDEF && (l = (0, r.pluckNumber)(l.split(r.COMMA)[0])), n[0] = e(n[0], l), a = 1; a < t; a += 1) {
        n[a] = n[0] * e(n[a], l) / 100;
      }return n.join(r.COMMA);
    }function l(o, e, t) {
      var l,
          a,
          n = 0,
          s = 0,
          i = 0;if (t && t.match(r.startsRGBA) && (n = (a = t.split(r.COMMA))[0].slice(a[0].indexOf("(") + 1), s = a[1], i = a[2], !e && 0 !== e && (e = parseInt(100 * a[3].slice(0, a[3].indexOf(")")), 10))), o) if (o.match(r.startsRGBA)) n = (a = o.split(r.COMMA))[0].slice(a[0].indexOf("(") + 1), s = a[1], i = a[2];else {
        switch ((l = o.replace(r.cleanColorCode, r.BLANK).split(r.COMMA)[0]).length) {case 3:
            l = l.charAt(0) + l.charAt(0) + l.charAt(1) + l.charAt(1) + l.charAt(2) + l.charAt(2);break;case 6:
            break;default:
            l = (l + r.COLOR_WHITE).slice(0, 6);}n = parseInt(l.slice(0, 2), 16), s = parseInt(l.slice(2, 4), 16), i = parseInt(l.slice(4, 6), 16);
      }return e || 0 === e || (e = 100), "string" == typeof e && (e = e.split(r.COMMA)[0]), e = parseInt(e, 10) / 100, "rgba(" + n + r.COMMA + s + r.COMMA + i + r.COMMA + e + ")";
    }function a(o, e) {
      var t = Math.floor;e = 0 > e || 100 < e ? 100 : e, e /= 100, o = o.replace(r.cleanColorCode, r.BLANK);var l = parseInt(o, 16),
          a = t(l / 65536),
          n = t((l - 65536 * a) / 256);return (r.COLOR_BLACK + (a * e << 16 | n * e << 8 | (l - 65536 * a - 256 * n) * e).toString(16)).slice(-6);
    }function n(o, e) {
      var t = Math.floor;e = 0 > e || 100 < e ? 100 : e, e /= 100, o = o.replace(r.cleanColorCode, r.BLANK);var l = parseInt(o, 16),
          a = t(l / 65536),
          n = t((l - 65536 * a) / 256);return (r.COLOR_BLACK + (256 - (256 - a) * e << 16 | 256 - (256 - n) * e << 8 | 256 - (256 - (l - 65536 * a - 256 * n)) * e).toString(16)).slice(-6);
    }function s(e, t) {
      var l = o.circle;return 3 <= (e = (0, r.parsePointValue)(e)) && (l = (t ? o.spoke : o.poly) + e), l;
    }function i(o, e, l, s, i, c, p, C, M) {
      var A, u, O, g, x, h, f;return u = o.split(r.COMMA), O = e.split(r.COMMA), g = c.split(r.COMMA), f = p.split(r.COMMA), o = o.replace(/\s/g, r.BLANK).replace(/\,$/, r.BLANK), M ? A = { FCcolor: { color: u[0], alpha: O[0] } } : i ? (x = u[0], h = O[0], A = { FCcolor: { color: a(x, 75) + r.COMMA + n(x, 10) + r.COMMA + a(x, 90) + r.COMMA + n(x, 55) + r.COMMA + a(x, 80), alpha: h + r.COMMA + h + r.COMMA + h + r.COMMA + h + r.COMMA + h, ratio: "0,11,14,57,18", angle: C ? "90" : "0" } }, g = [a(x, 70)]) : A = { FCcolor: { color: o, alpha: e = t(e, u.length), ratio: l, angle: C ? -s : s } }, [A, { FCcolor: { color: g[0], alpha: f[0] } }];
    }function c(o, e) {
      var t, l;return o = (0, r.getFirstColor)(o), e = (0, r.getFirstAlpha)(e), t = n(o, 70), l = a(o, 50), { FCcolor: { gradientUnits: "objectBoundingBox", cx: .4, cy: .4, r: "100%", color: t + r.COMMASTRING + l, alpha: e + r.COMMASTRING + e, ratio: r.BGRATIOSTRING, radialGradient: !0 } };
    }function p(r, o, e) {
      var t = 180 * Math.atan(o / r) / Math.PI;return 2 == e ? t = 180 - t : 3 == e ? t += 180 : 4 == e && (t = 360 - t), t;
    }function C(o) {
      return o.replace(r.cleanColorCode, r.BLANK).replace(r.dropHash, r.HASHSTRING);
    }function M(o) {
      return r.validhexcolor.test(C(o)) && o;
    }function A(o) {
      return (r.COLOR_BLACK + (o[0] << 16 | o[1] << 8 | o[2]).toString(16)).slice(-6);
    }function u(o) {
      var e;return e = o.match(/[\d+]+/g).splice(0, 3), (r.COLOR_BLACK + (e[0] << 16 | e[1] << 8 | e[2]).toString(16)).slice(-6);
    }function O(r) {
      var o = Math.floor,
          e = parseInt(r, 16),
          t = o(e / 65536),
          l = o((e - 65536 * t) / 256);return [t, l, o(e - 65536 * t - 256 * l)];
    }exports.convertColor = l, exports.getDarkColor = a, exports.getLightColor = n, exports.mapSymbolName = s, exports.getColumnColor = i, exports.getPointColor = c, exports.getAngle = p, exports.parseColor = C, exports.getValidColor = M, exports.RGBtoHex = A, exports.rawRGBtoHEX = u, exports.HEXtoRGB = O;
  }, { "./lib": 20 }], 74: [function (require, module, exports) {
    "use strict";
    function t(t, e, i, h, x, y, d) {
      var n = {};return "top" === e ? n.y = t : "bottom" === e ? n.y = d - x - t : "middle" === e && (n.y = (d - x) / 2), "left" === i ? n.x = t : "right" === i ? n.x = y - h - t : "middle" === i && (n.x = (y - h) / 2), n;
    }function e(e, i, h, x, y, d, n, o, r, l) {
      var g,
          f,
          u,
          w,
          c = Math.ceil,
          s = {};return "center" === h ? (s.width = x, s.height = y, s.y = n / 2 - y / 2, s.x = d / 2 - x / 2) : "stretch" === h ? (s.width = d - 2 * o, s.height = n - 2 * o, s.y = o, s.x = o) : "tile" === h ? (s.width = x, s.height = y, s.tileInfo = {}, s.tileInfo.xCount = f = c(r / x), s.tileInfo.yCount = u = c(l / y), w = t(o, e, i, x * f, y * u, d, n), s.y = w.y, s.x = w.x) : "fit" === h ? (g = x / y > r / l ? r / x : l / y, s.width = x * g, s.height = y * g, w = t(o, e, i, s.width, s.height, d, n), s.y = w.y, s.x = w.x) : "fill" === h ? (g = x / y > r / l ? l / y : r / x, s.width = x * g, s.height = y * g, w = t(o, e, i, s.width, s.height, d, n), s.y = w.y, s.x = w.x) : (w = t(o, e, i, x, y, d, n), s.width = x, s.height = y, s.y = w.y, s.x = w.x), s;
    }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getAlignImage = e;
  }, {}], 20: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.domInsertModes = exports.normalizeCSSDimension = exports.isXSSSafe = exports.getSuggestiveRotation = exports.extent = exports.normalizeAngle = exports.safeMin = exports.safeMax = exports.LINE_HEIGHT_FACTOR = exports.PROJECT_VERSION = exports.trimString = exports.datasetFactory = exports.componentFactory = exports.dropHash = exports.BGRATIOSTRING = exports.VISIBLE = exports.touchEnabled = exports.MOUSEMOVE = exports.MOUSEOUT = exports.FIT = exports.FILL = exports.TILE = exports.COMMA = exports.animationObjStr = exports.configStr = exports.ROUND = exports.BLANK = exports.POINTER = exports.HAND = exports.BOLD = exports.NORMAL = exports.mathRound = exports.mathAbs = exports.animHelperFN = exports.xssEncode = exports.MathExt = exports.defaultGaugePaletteOptions = exports.crispBound = exports.hasAttribDefs = exports.setAttribDefs = exports.parseConfiguration = exports.attribDefs = exports.canvasBorderColorStr = exports.defined = exports.pInt = exports.attrTypeBool = exports.canvasBGAlphaStr = exports.attrTypeNum = exports.DASH_DEF = exports.chartPaletteStr = exports.TRACKER_FILL = exports.capitalizeString = exports.getContainerBackgroundColor = exports.appliedCSS = exports.validhexcolor = exports.pseudoEval = exports.executeJS = exports.componentDispose = exports.createDialog = exports.chartAPI = exports.getDashStyle = exports.getAxisLimits = exports.supportedStyle = void 0, exports.parsexAxisStyles = exports.setLineHeight = exports.setImageDisplayMode = exports.getLinkAction = exports.lineHeightFactor = exports.isEdge = exports.isIE9 = exports.isIE11 = exports.isIE = exports.CREDIT_REGEX = exports.hasSVG = exports.stableSort = exports.stubFN = exports.preDefStr = exports.getCripValues = exports.getCrispValue = exports.isArray = exports.getImageURL = exports.regReplaceEscape = exports.regescape = exports.CREDIT_STRING = exports.CREDIT_HREF = exports.hasTouch = exports.toPrecision = exports.parseTooltext = exports.parseUnsafeString = exports.parsePointValue = exports.getFirstAlpha = exports.fastTrim = exports.gradientify = exports.rgbaToHex = exports.toRaphaelColor = exports.clampNumber = exports.getColorCodeString = exports.getFirstColor = exports.getFirstValue = exports.getDefinedColor = exports.fcEach = exports.bindSelectionEvent = exports.getViewPortDimension = exports.getPosition = exports.getValidValue = exports.pluckFontSize = exports.getComparatorFN = exports.dehashify = exports.hashify = exports.polyPathToPath = exports.createElement = exports.getFirstDefinedValue = exports.pluckNumber = exports.pluck = exports.imprint = exports.extend2 = exports.getTouchEvent = exports.getMouseCoordinate = exports.getEventCoordinate = exports.regex = exports.CLICK_THRESHOLD_PIXELS = exports.TOUCH_THRESHOLD_PIXELS = exports.cleanColorCode = exports.startsRGBA = exports.visibleStr = exports.hiddenStr = exports.TEXTANCHOR = exports.COMMASPACE = exports.PXSTRING = exports.HUNDREDSTRING = exports.SHAPE_RECT = exports.FC_CONFIG_STRING = exports.POSITION_END = exports.POSITION_START = exports.POSITION_MIDDLE = exports.POSITION_CENTER = exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.POSITION_RIGHT = exports.POSITION_TOP = exports.STRINGUNDEFINED = exports.DECIMALSTRING = exports.ONESTRING = exports.TESTSTR = exports.SAMPLESTRING = exports.ZEROSTRING = exports.COMMASTRING = exports.OBJECTSTRING = exports.STRINGSTRING = exports.BREAKSTRING = exports.HASHSTRING = exports.COLOR_TRANSPARENT = exports.COLOR_WHITE = exports.COLOR_GLASS = exports.COLOR_BLACK = exports.BLANKSTRING = exports.UNDERSCORE = exports.UNDEF = exports.isFirefox = exports.BLANKSTRINGPLACEHOLDER = exports.getEmptyConstractor = exports.addInterActiveEvtName = exports.isInterActiveEvt = void 0;var e = require("../../../../package.json"),
        r = require("./lib-attr"),
        t = require("../dom/dom-event"),
        a = s(t),
        o = require("../vendors/redraphael/source/raphael.lib"),
        n = s(o),
        i = require("./lib-graphics"),
        l = require("../misc/image-alignment");function s(e) {
      return e && e.__esModule ? e : { default: e };
    }var g = e.version,
        p = 1.2;var c,
        x,
        d,
        u,
        f,
        h = window,
        b = "none",
        m = function m() {},
        v = function v() {
      return function () {};
    },
        I = function () {
      var e,
          r = h.navigator.userAgent.toLowerCase();return !(!(e = -1 != r.indexOf("msie") && h.parseInt(r.split("msie")[1])) || 9 !== e);
    }(),
        R = /Firefox/i.test(h.navigator.userAgent),
        y = h.document,
        E = h.navigator,
        S = !(!h.SVGAngle && !y.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")),
        $ = /trident/i.test(E.userAgent) && /rv:11/i.test(E.userAgent) && !window.opera,
        C = /msie/i.test(E.userAgent) && !h.opera,
        D = /Edge/.test(E.userAgent),
        T = 1,
        F = 2,
        A = /[\\\"<>;&]/,
        N = /^[^\S]*?(sf|f|ht)(tp|tps):\/\//i,
        L = "rgba(192,192,192," + (C ? .002 : 1e-6) + ")",
        O = "right",
        V = "left",
        B = "center",
        P = "#BLANK#",
        K = "Ay0",
        k = "000000",
        _ = "rgba(255, 255, 255, 0.3)",
        M = "FFFFFF",
        G = "rgba(0,0,0,0)",
        w = "#",
        H = "<br />",
        z = "string",
        X = "object",
        Y = "",
        U = "",
        j = ",",
        W = ",",
        Q = "r",
        J = ":",
        q = "-",
        Z = "0",
        ee = "mouseout",
        re = "mousemove",
        te = "Ag",
        ae = "1",
        oe = ".",
        ne = "undefined",
        ie = "top",
        le = "bottom",
        se = "middle",
        ge = "start",
        pe = "end",
        ce = "_FCconf",
        xe = "rect",
        de = "100",
        ue = "visible",
        fe = "px",
        he = ", ",
        be = "text-anchor",
        me = "canvasBgAlpha",
        ve = "round",
        Ie = "_",
        Re = "normal",
        ye = "bold",
        Ee = "pointer",
        Se = "pointer",
        $e = "tile",
        Ce = "fill",
        De = "fit",
        Te = "http://www.fusioncharts.com?BS=FCHSEvalMark&utm_source=FCS_trial&pver=" + escape(g),
        Fe = "undefined" != typeof FC_RESELLER && FC_RESELLER ? "FusionCharts XT - Only For Resale" : "FusionCharts XT Trial",
        Ae = "canvasBorderColor",
        Ne = 15,
        Le = 5,
        Oe = 1.2,
        Ve = "config",
        Be = "animationObj",
        Pe = "hidden",
        Ke = "visible",
        ke = parseFloat,
        _e = /fusioncharts\.com|fusioncharts\.github\.io$/i,
        Me = /\{br\}\s*/gi,
        Ge = /\s+/g,
        we = /^#?/,
        He = /^rgba/i,
        ze = /[#\s]/gi,
        Xe = /^#?[0-9a-f]{6}/i,
        Ye = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
        Ue = Math.abs,
        je = Math.pow,
        We = Math.round,
        Qe = je(2, -24),
        Je = "ontouchstart" in y,
        qe = Je && !(E.maxTouchPoints || E.msMaxTouchPoints),
        Ze = !_e.test(h.location.hostname),
        er = Math,
        rr = er.max,
        tr = er.min,
        ar = { pageX: 0, pageY: 0 },
        or = "M",
        nr = ["8BBA00", "F6BD0F", "FF654F", "AFD8F8", "FDB398", "CDC309", "B1D0D2", "FAD1B9", "B8A79E", "D7CEA5", "C4B3CE", "E9D3BE", "EFE9AD", "CEA7A2", "B2D9BA"],
        ir = { paletteColors: [nr, nr, nr, nr, nr], bgColor: ["CBCBCB,E9E9E9", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"], bgAngle: [270, 270, 270, 270, 270], bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"], bgAlpha: ["50,50", "60,50", "40,20", "20,10", "30,30"], toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"], baseFontColor: ["555555", "60634E", "025B6A", "A15E01", "68001B"], tickColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"], trendDarkColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"], trendLightColor: ["f1f1f1", "F3F5DD", "EDFBFE", "FFF5E8", "FFD1DD"], pointerBorderColor: ["545454", "60634E", "415D6F", "845001", "68001B"], pointerBgColor: ["545454", "60634E", "415D6F", "845001", "68001B"], canvasBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], canvasBgAngle: [0, 0, 0, 0, 0], canvasBgAlpha: ["100", "100", "100", "100", "100"], canvasBgRatio: ["", "", "", "", ""], canvasBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"], canvasBorderAlpha: [100, 100, 100, 90, 100], altHGridColor: ["EEEEEE", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"], altHGridAlpha: [50, 35, 10, 20, 15], altVGridColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"], altVGridAlpha: [10, 20, 10, 15, 10], borderColor: ["767575", "545454", "415D6F", "845001", "68001B"], borderAlpha: [50, 50, 50, 50, 50], legendBgColor: ["ffffff", "ffffff", "ffffff", "ffffff", "ffffff"], legendBorderColor: ["545454", "545454", "415D6F", "845001", "D55979"], plotFillColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"], plotBorderColor: ["999999", "8A8A8A", "6BA9B6", "C1934D", "FC819F"], msgLogColor: ["717170", "7B7D6D", "92CDD6", "965B01", "68001B"], TrendLightShadeOffset: 30 },
        lr = { REPLACE: "replace", APPEND: "append", PREPEND: "prepend" },
        sr = function sr(e, r) {
      return !(r && null !== N.exec(e)) && null === A.exec(e);
    },
        gr = function gr(e) {
      return null == e || "function" != typeof e.toString ? "" : e = e.toString().replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
        pr = { numDecimals: function numDecimals(e) {
        e = yt(e, 10);var r = (yt((e = Math.abs(e)) - Math.floor(e), 10) + "").length - 2;return r = 0 > r ? 0 : r;
      }, toRadians: function toRadians(e) {
        return e / 180 * Math.PI;
      }, toDegrees: function toDegrees(e) {
        return e / Math.PI * 180;
      }, flashToStandardAngle: function flashToStandardAngle(e) {
        return -1 * e;
      }, standardToFlashAngle: function standardToFlashAngle(e) {
        return -1 * e;
      }, flash180ToStandardAngle: function flash180ToStandardAngle(e) {
        var r = 360 - (0 > (e %= 360) ? e + 360 : e);return 360 == r ? 0 : r;
      }, getAngularPoint: function getAngularPoint(e, r, t, a) {
        return a *= Math.PI / 180, { x: e + t * Math.cos(a), y: r - t * Math.sin(a) };
      }, remainderOf: function remainderOf(e, r) {
        return Math.ceil(e % r);
      }, boundAngle: function boundAngle(e) {
        return 0 <= e ? pr.prototype.remainderOf(e, 360) : 360 - pr.prototype.remainderOf(Math.abs(e), 360);
      }, toNearestTwip: function toNearestTwip(e) {
        var r = e,
            t = 0 > r ? -1 : 1,
            a = Math.abs(r),
            o = Math.round(100 * a),
            n = Math.floor(o / 5);return t * ((2 < +(o - 5 * n + "") ? 5 * n + 5 : 5 * n) / 100);
      }, roundUp: function roundUp(e, r) {
        r = r || 2;var t = Math.pow(10, r);return e *= t, e = Math.round(+(e + "")), e /= t;
      } },
        cr = 2 * er.PI,
        xr = function xr(e, r) {
      var t = r ? 360 : cr;return 0 > (e = (e || 0) % t) ? t + e : e;
    },
        dr = "canvasBaseColor3D",
        ur = { chart2D: { bgColor: "bgColor", bgAlpha: "bgAlpha", bgAngle: "bgAngle", bgRatio: "bgRatio", canvasBgColor: "canvasBgColor", canvasBaseColor: "canvasBaseColor", divLineColor: "divLineColor", legendBgColor: "legendBgColor", legendBorderColor: "legendBorderColor", toolTipbgColor: "toolTipbgColor", toolTipBorderColor: "toolTipBorderColor", baseFontColor: "baseFontColor", anchorBgColor: "anchorBgColor" }, chart3D: { bgColor: "bgColor3D", bgAlpha: "bgAlpha3D", bgAngle: "bgAngle3D", bgRatio: "bgRatio3D", canvasBgColor: "canvasBgColor3D", canvasBaseColor: "canvasBaseColor3D", divLineColor: "divLineColor3D", divLineAlpha: "divLineAlpha3D", legendBgColor: "legendBgColor3D", legendBorderColor: "legendBorderColor3D", toolTipbgColor: "toolTipbgColor3D", toolTipBorderColor: "toolTipBorderColor3D", baseFontColor: "baseFontColor3D", anchorBgColor: "anchorBgColor3D" } },
        fr = { font: "font", fontFamily: "font-family", "font-family": "font-family", fontWeight: "font-weight", "font-weight": "font-weight", fontSize: "font-size", "font-size": "font-size", lineHeight: "line-height", "line-height": "line-height", textDecoration: "text-decoration", "text-decoration": "text-decoration", color: "color", whiteSpace: "white-space", "white-space": "white-space", padding: "padding", margin: "margin", background: "background", backgroundColor: "background-color", "background-color": "background-color", backgroundImage: "background-image", "background-image": "background-image", backgroundPosition: "background-position", "background-position": "background-position", backgroundPositionLeft: "background-position-left", "background-position-left": "background-position-left", backgroundPositionTop: "background-position-top", "background-position-top": "background-position-top", backgroundRepeat: "background-repeat", "background-repeat": "background-repeat", border: "border", borderColor: "border-color", "border-color": "border-color", borderStyle: "border-style", "border-style": "border-style", borderThickness: "border-thickness", "border-thickness": "border-thickness", borderTop: "border-top", "border-top": "border-top", borderTopColor: "border-top-color", "border-top-color": "border-top-color", borderTopStyle: "border-top-style", "border-top-style": "border-top-style", borderTopThickness: "border-top-thickness", "border-top-thickness": "border-top-thickness", borderRight: "border-right", "border-right": "border-right", borderRightColor: "border-right-color", "border-right-color": "border-right-color", borderRightStyle: "border-right-style", "border-right-style": "border-right-style", borderRightThickness: "border-right-thickness", "border-right-thickness": "border-right-thickness", borderBottom: "border-bottom", "border-bottom": "border-bottom", borderBottomColor: "border-bottom-color", "border-bottom-color": "border-bottom-color", borderBottomStyle: "border-bottom-style", "border-bottom-style": "border-bottom-style", borderBottomThickness: "border-bottom-thickness", "border-bottom-thickness": "border-bottom-thickness", borderLeft: "border-left", "border-left": "border-left", borderLeftColor: "border-left-color", "border-left-color": "border-left-color", borderLeftStyle: "border-left-style", "border-left-Style": "border-left-style", borderLeftThickness: "border-left-thickness", "border-left-thickness": "border-left-thickness" },
        hr = S ? 0 : .5,
        br = function br() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      var i = arguments[6];
      var l = Math.round,
          s = Math.floor,
          g = Math.abs;if (1 > a || 1 > t) return { x: e, y: r, width: t, height: a, "stroke-width": o };(o >= t || o >= a) && (o = s(Math.min(t, a) / 2) || o);var p = e,
          c = r,
          x = e + t,
          d = o / 2,
          u = o % 2,
          f = r + a;return c = n.top ? l(c) + d - hr : u ? s(c) + .5 - hr : l(c) - hr, f = n.bottom ? l(f) - d - hr : i && n.top ? l(f) + d - hr : u ? s(f) + .5 - hr : l(f) - hr, { x: p = n.left ? l(p) + d - hr : i && n.right ? l(p) - d - hr : u ? s(p) + .5 - hr : l(p) - hr, y: c, width: g((x = n.right ? l(x) - d - hr : u ? s(x) + .5 - hr : l(x) - hr) - p), height: g(f - c), "stroke-width": o };
    },
        mr = function mr(e) {
      var r,
          t,
          a,
          o,
          n,
          i = Math.sin,
          l = Math.cos,
          s = Math.PI,
          g = e[0],
          p = e[1],
          c = e[2],
          x = e[3],
          d = e[4],
          u = e[5];if (r = [], g = h.parseInt(g, 10) || 0, p = ke(p) || 0, c = ke(c) || 0, x = ke(x) || 0, d = null === d || isNaN(d) ? .5 * s : d % 360 * (s / 180), u = null === u || isNaN(u) ? 0 : ke(u), o = d, 2 < g) switch (t = 2 * s / g, u) {case 0:
          for (a = 0; a < g; a++) {
            r.push("L", p + x * l(-o), c + x * i(-o)), o += t;
          }r[0] = "M", r.push("Z");break;case 1:
          for (a = 0; a < g; a++) {
            r.push(or, p, c, "L", p + x * l(-o), c + x * i(-o)), o += t;
          }break;default:
          for (n = x * l(t *= .5) * (1 - u), a = 0; a < g; a++) {
            r.push("L", p + x * l(-o), c + x * i(-o)), o += t, r.push("L", p + n * l(-o), c + n * i(-o)), o += t;
          }r[0] = "M", r.push("Z");} else 0 === x ? r.push("M", p, c, "L", p, c, "Z") : r.push("M", p - x, c, "A", x, x, 0, 0, 0, p + x, c, "A", x, x, 0, 0, 0, p - x, c, "Z");return r;
    },
        vr = function vr(e) {
      return e = e.replace("rgba(", U).split(","), "#" + (k + (e[0] << 16 | e[1] << 8 | e[2]).toString(16)).slice(-6);
    },
        Ir = { getTimeByValue: function getTimeByValue(e, r, t) {
        var a = (e.end - e.start) / (r.endPx - r.startPx);return { start: e.start + a * (t.startPx - r.startPx), end: e.start + a * (t.endPx - r.startPx) };
      }, animByWeight: function animByWeight(e, r, t, a, o) {
        return { start: e / --r * t * (a = a || 1) + (o = o || 0), end: e / r * t * a + t + o };
      } },
        Rr = function Rr(e, r, t) {
      var a,
          o = y.createElement(e);for (a in r) {
        o.setAttribute(a, r[a]);
      }return t && t.appendChild && t.appendChild(o), o;
    },
        yr = function () {
      if (Array.isArray) return Array.isArray;var e = Object.prototype.toString,
          r = e.call([]);return function (t) {
        return e.call(t) === r;
      };
    }(),
        Er = function Er(e) {
      return e.pageX === x && (e.pageX = e.clientX + y.body.scrollLeft + y.documentElement.scrollLeft, e.pageY = e.clientY + y.body.scrollTop + y.documentElement.scrollTop), e;
    },
        Sr = function () {
      var e = "innerWidth",
          r = "innerHeight",
          t = y.documentElement || y.body,
          a = t;return "innerWidth" in h ? a = h : (e = "clientWidth", r = "clientHeight"), function () {
        return { width: a[e], height: a[r], scrollTop: t.scrollTop, scrollLeft: t.scrollLeft };
      };
    }(),
        $r = function () {
      var e = /^@window_/g;return function (r, t, a) {
        var o,
            n,
            i,
            l,
            s = r.replace(/\[[\'\"]/g, ".").replace(/[\'\"]\]/g, Y).replace(/\[/g, ".@window_").replace(/\]/g, Y).split("."),
            g = h,
            p = Y;for (i = s.length, l = 0; l < i; l += 1) {
          if (o = g, (n = s[l]).match(e)) g = g[h[n.replace(e, Y)]];else {
            if (g === x || null === g) throw (p || n).replace(e, Y) + " is not defined";g = g[n];
          }p = n;
        }if (!g || "function" != typeof g.call && g !== h.alert) {
          if ("void" === p) return;setTimeout(function () {
            throw n.replace(e, Y) + "() is not a function";
          }, 0);
        } else g === h.alert ? g(t) : a ? g.apply(o, t.split("__FC_ARG_SEP__")) : g.call(o, t);
      };
    }(),
        Cr = function () {
      var e = {};return function (r) {
        var t,
            a,
            o,
            n,
            l,
            s = (r = r || this) && r.FCcolor || r,
            g = s.color,
            p = s.ratio,
            c = s.angle,
            d = s.alpha,
            u = s.r,
            f = s.cx,
            h = s.cy,
            b = s.fx,
            m = s.fy,
            v = s.gradientUnits,
            I = s.x1,
            R = s.y1,
            y = s.x2,
            E = s.y2,
            S = s.radialGradient,
            $ = 1;if ("string" == typeof r) return e[l = "~" + r] || (e[l] = r.replace(/^#?([a-f0-9]{3,6})/gi, "#$1"));if (!(g = g || Y)) return t;if (l = [g, d, p, c, u, f, h, v, b, m, I, y, R, E, S].join(Ie).replace(/[\(\)\s,\xb0#]/g, Ie), e[l]) return e[l];if (p = p && (p + Y).split(W) || [], d = (d || 0 === d) && (d + Y).split(W) || [], g = g.split(W)) if (t = Y, 1 === g.length) n = g[0].replace(/^#?([a-f0-9]{3,6})/gi, "$1"), t = d.length ? "rgba(" + (0, i.HEXtoRGB)(n).join(W) + "," + .01 * ke(d[0]) + ")" : n.replace(/^#?([a-f0-9]{3,6})/gi, "#$1");else {
          for (a = 0, o = g.length; a < o; a++) {
            n = g[a].replace(/^#?([a-f0-9]{3,6})/gi, "$1"), isNaN(p[a]) || (p[a] = ke(p[a]), n += J + p[a], !isNaN(p[a + 1]) && (p[a + 1] = ke(p[a + 1]) + p[a])), isNaN(d[a]) || d[a] === Y || ($ = .01 * d[a]), g[a] = "rgba(" + (0, i.HEXtoRGB)(n).join(W) + "," + $ + ")", isNaN(p[a]) || (p[a] === p[a - 1] && (p[a] += .001), g[a] = g[a] + J + p[a]);
          }t += g.join(q), u !== x || b !== x || f !== x || s.radialGradient ? t = "xr(" + [b, m, u, f, h, v].join(",") + ")" + t : (t = q + t, (I !== x || R !== x || y !== x || E !== x) && (t = "(" + [I, R, y, E, v].join(",") + ")" + t), c === x && (c = 0), t = 360 - ke(c) % 360 + t);
        }return e[l] = t;
      };
    }(),
        Dr = function Dr() {
      return "";
    },
        Tr = function () {
      var e,
          r = [{ regex: /((^|[^\\])((\\)\\)*\$cleanvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cleanvalue))/gi, argIndex: 2, argKey: "cleanvalue" }, { regex: /((^|[^\\])((\\)\\)*\$datavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datavalue))/gi, argIndex: 2, argKey: "formattedValue" }, { regex: /((^|[^\\])((\\)\\)*\$value)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$value))/gi, argIndex: 3, argKey: "value" }, { regex: /((^|[^\\])((\\)\\)*\$label)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$label))/gi, argIndex: 2, argKey: "label" }, { regex: /((^|[^\\])((\\)\\)*\$seriesname)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$seriesname))/gi, argIndex: 5, argKey: "seriesname" }, { regex: /((^|[^\\])((\\)\\)*\$yaxisname)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yaxisname))/gi, argIndex: 2, argKey: "yaxisName" }, { regex: /((^|[^\\])((\\)\\)*\$xaxisname)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxisname))/gi, argIndex: 2, argKey: "xaxisName" }, { regex: /((^|[^\\])((\\)\\)*\$displayvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$displayvalue))/gi, argIndex: 3, argKey: "displayvalue" }, { regex: /((^|[^\\])((\\)\\)*\$xdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xdatavalue))/gi, argIndex: 2, argKey: "xDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$ydatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$ydatavalue))/gi, argIndex: 2, argKey: "yDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$xvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xvalue))/gi, argIndex: 3, argKey: "x" }, { regex: /((^|[^\\])((\\)\\)*\$yvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yvalue))/gi, argIndex: 3, argKey: "y" }, { regex: /((^|[^\\])((\\)\\)*\$zvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zvalue))/gi, argIndex: 3, argKey: "z" }, { regex: /((^|[^\\])((\\)\\)*\$name)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$name))/gi, argIndex: 3, argKey: "name" }, { regex: /((^|[^\\])((\\)\\)*\$percentValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentValue))/gi, argIndex: 2, argKey: "percentValue" }, { regex: /((^|[^\\])((\\)\\)*\$startValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startValue))/gi, argIndex: 2, argKey: "startValue" }, { regex: /((^|[^\\])((\\)\\)*\$startDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startDataValue))/gi, argIndex: 2, argKey: "startDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$endValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endValue))/gi, argIndex: 2, argKey: "endValue" }, { regex: /((^|[^\\])((\\)\\)*\$endDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endDataValue))/gi, argIndex: 2, argKey: "endDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$axisName)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$axisName))/gi, argIndex: 2, argKey: "axisName" }, { regex: /((^|[^\\])((\\)\\)*\$cumulativevalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativevalue))/gi, argIndex: 2, argKey: "cumulativeValue" }, { regex: /((^|[^\\])((\\)\\)*\$cumulativedatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativedatavalue))/gi, argIndex: 2, argKey: "cumulativeDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$cumulativePercentValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativePercentValue))/gi, argIndex: 2, argKey: "cumulativePercentValue" }, { regex: /((^|[^\\])((\\)\\)*\$cumulativepercentdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativepercentdatavalue))/gi, argIndex: 2, argKey: "cumulativePercentDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$sum)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sum))/gi, argIndex: 2, argKey: "sum" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedsum)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsum))/gi, argIndex: 2, argKey: "unformattedSum" }, { regex: /((^|[^\\])((\\)\\)*\$targetvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetvalue))/gi, argIndex: 2, argKey: "targetValue" }, { regex: /((^|[^\\])((\\)\\)*\$targetdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetdatavalue))/gi, argIndex: 2, argKey: "targetDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$processname)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$processname))/gi, argIndex: 2, argKey: "processName" }, { regex: /((^|[^\\])((\\)\\)*\$start)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$start))/gi, argIndex: 2, argKey: "start" }, { regex: /((^|[^\\])((\\)\\)*\$end)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$end))/gi, argIndex: 2, argKey: "end" }, { regex: /((^|[^\\])((\\)\\)*\$percentcomplete)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentcomplete))/gi, argIndex: 2, argKey: "percentComplete" }, { regex: /((^|[^\\])((\\)\\)*\$taskpercentcomplete)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskpercentcomplete))/gi, argIndex: 2, argKey: "taskPercentComplete" }, { regex: /((^|[^\\])((\\)\\)*\$taskstartdate)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskstartdate))/gi, argIndex: 2, argKey: "taskStartDate" }, { regex: /((^|[^\\])((\\)\\)*\$taskenddate)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskenddate))/gi, argIndex: 2, argKey: "taskEndDate" }, { regex: /((^|[^\\])((\\)\\)*\$tasklabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tasklabel))/gi, argIndex: 2, argKey: "taskLabel" }, { regex: /((^|[^\\])((\\)\\)*\$date)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$date))/gi, argIndex: 2, argKey: "date" }, { regex: /((^|[^\\])((\\)\\)*\$percentofprevvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentofprevvalue))/gi, argIndex: 2, argKey: "percentOfPrevValue" }, { regex: /((^|[^\\])((\\)\\)*\$sname)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sname))/gi, argIndex: 2, argKey: "sName" }, { regex: /((^|[^\\])((\\)\\)*\$lname)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lname))/gi, argIndex: 2, argKey: "lName" }, { regex: /((^|[^\\])((\\)\\)*\$fromid)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromid))/gi, argIndex: 2, argKey: "fromId" }, { regex: /((^|[^\\])((\\)\\)*\$fromlabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/gi, argIndex: 2, argKey: "fromLabel" }, { regex: /((^|[^\\])((\\)\\)*\$toid)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toid))/gi, argIndex: 2, argKey: "toId" }, { regex: /((^|[^\\])((\\)\\)*\$tolabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/gi, argIndex: 2, argKey: "toLabel" }, { regex: /((^|[^\\])((\\)\\)*\$fromxvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxvalue))/gi, argIndex: 2, argKey: "fromXValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromyvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromyvalue))/gi, argIndex: 2, argKey: "fromYValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromxdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxdatavalue))/gi, argIndex: 2, argKey: "fromXDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromydatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromydatavalue))/gi, argIndex: 2, argKey: "fromYDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromlabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/gi, argIndex: 2, argKey: "fromLabel" }, { regex: /((^|[^\\])((\\)\\)*\$toxvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxvalue))/gi, argIndex: 2, argKey: "toXValue" }, { regex: /((^|[^\\])((\\)\\)*\$toyvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toyvalue))/gi, argIndex: 2, argKey: "toYValue" }, { regex: /((^|[^\\])((\\)\\)*\$toxdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxdatavalue))/gi, argIndex: 2, argKey: "toXDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$toydatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toydatavalue))/gi, argIndex: 2, argKey: "toYDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$tolabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/gi, argIndex: 2, argKey: "toLabel" }, { regex: /((^|[^\\])((\\)\\)*\$openvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$openvalue))/gi, argIndex: 2, argKey: "openValue" }, { regex: /((^|[^\\])((\\)\\)*\$closevalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closevalue))/gi, argIndex: 2, argKey: "closeValue" }, { regex: /((^|[^\\])((\\)\\)*\$highvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highvalue))/gi, argIndex: 2, argKey: "highValue" }, { regex: /((^|[^\\])((\\)\\)*\$lowvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowvalue))/gi, argIndex: 2, argKey: "lowValue" }, { regex: /((^|[^\\])((\\)\\)*\$opendatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$opendatavalue))/gi, argIndex: 2, argKey: "openDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$closedatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closedatavalue))/gi, argIndex: 2, argKey: "closeDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$highdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highdatavalue))/gi, argIndex: 2, argKey: "highDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$lowdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowdatavalue))/gi, argIndex: 2, argKey: "lowDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$maxvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxvalue))/gi, argIndex: 2, argKey: "maxValue" }, { regex: /((^|[^\\])((\\)\\)*\$maxdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxdatavalue))/gi, argIndex: 2, argKey: "maxDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$minvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$minvalue))/gi, argIndex: 2, argKey: "minValue" }, { regex: /((^|[^\\])((\\)\\)*\$mindatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mindatavalue))/gi, argIndex: 2, argKey: "minDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$q1)/gi, argIndex: 2, argKey: "Q1" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedQ1)/gi, argIndex: 2, argKey: "unformattedQ1" }, { regex: /((^|[^\\])((\\)\\)*\$q3)/gi, argIndex: 2, argKey: "Q3" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedQ3)/gi, argIndex: 2, argKey: "unformattedQ3" }, { regex: /((^|[^\\])((\\)\\)*\$median)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$median))/gi, argIndex: 2, argKey: "median" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMedian)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMedian))/gi, argIndex: 2, argKey: "unformattedMedian" }, { regex: /((^|[^\\])((\\)\\)*\$SD)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$SD))/gi, argIndex: 2, argKey: "SD" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedsd)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsd))/gi, argIndex: 2, argKey: "unformattedsd" }, { regex: /((^|[^\\])((\\)\\)*\$QD)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$QD))/gi, argIndex: 2, argKey: "QD" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedQD)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedQD))/gi, argIndex: 2, argKey: "unformattedQD" }, { regex: /((^|[^\\])((\\)\\)*\$MD)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$MD))/gi, argIndex: 2, argKey: "MD" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMD)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMD))/gi, argIndex: 2, argKey: "unformattedMD" }, { regex: /((^|[^\\])((\\)\\)*\$mean)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mean))/gi, argIndex: 2, argKey: "mean" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/gi, argIndex: 2, argKey: "unformattedMean" }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/gi, argIndex: 2, argKey: "unformattedMean" }, { regex: /((^|[^\\])((\\)\\)*\$volumeValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeValue))/gi, argIndex: 2, argKey: "volumeValue" }, { regex: /((^|[^\\])((\\)\\)*\$volumeDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeDataValue))/gi, argIndex: 2, argKey: "volumeDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromXValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXValue))/gi, argIndex: 2, argKey: "fromXValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromYValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYValue))/gi, argIndex: 2, argKey: "fromYValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromXDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXDataValue))/gi, argIndex: 2, argKey: "fromXDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromYDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYDataValue))/gi, argIndex: 2, argKey: "fromYDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$fromLabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromLabel))/gi, argIndex: 2, argKey: "fromLabel" }, { regex: /((^|[^\\])((\\)\\)*\$toXValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXValue))/gi, argIndex: 2, argKey: "toXValue" }, { regex: /((^|[^\\])((\\)\\)*\$toYValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYValue))/gi, argIndex: 2, argKey: "toYValue" }, { regex: /((^|[^\\])((\\)\\)*\$toXDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXDataValue))/gi, argIndex: 2, argKey: "toXDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$toYDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYDataValue))/gi, argIndex: 2, argKey: "toYDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$tolabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/gi, argIndex: 2, argKey: "toLabel" }, { regex: /((^|[^\\])((\\)\\)*\$tlLabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlLabel))/gi, argIndex: 5, argKey: "tlLabel" }, { regex: /((^|[^\\])((\\)\\)*\$trlabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trlabel))/gi, argIndex: 5, argKey: "trLabel" }, { regex: /((^|[^\\])((\\)\\)*\$bllabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$bllabel))/gi, argIndex: 5, argKey: "blLabel" }, { regex: /((^|[^\\])((\\)\\)*\$brlabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brlabel))/gi, argIndex: 5, argKey: "brLabel" }, { regex: /((^|[^\\])((\\)\\)*\$rowlabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$rowlabel))/gi, argIndex: 5, argKey: "rowLabel" }, { regex: /((^|[^\\])((\\)\\)*\$columnlabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$columnlabel))/gi, argIndex: 5, argKey: "columnLabel" }, { regex: /((^|[^\\])((\\)\\)*\$errorvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorvalue))/gi, argIndex: 2, argKey: "errorValue" }, { regex: /((^|[^\\])((\\)\\)*\$errordatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errordatavalue))/gi, argIndex: 2, argKey: "errorDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$errorpercentvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentvalue))/gi, argIndex: 2, argKey: "errorPercentValue" }, { regex: /((^|[^\\])((\\)\\)*\$errorpercentdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentdatavalue))/gi, argIndex: 2, argKey: "errorPercentDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorValue))/gi, argIndex: 2, argKey: "horizontalErrorValue" }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorDataValue))/gi, argIndex: 2, argKey: "horizontalErrorDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorValue))/gi, argIndex: 2, argKey: "verticalErrorValue" }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorDataValue))/gi, argIndex: 2, argKey: "verticalErrorDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercent)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentValue))/gi, argIndex: 2, argKey: "horizontalErrorPercentValue" }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercentDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentDataValue))/gi, argIndex: 2, argKey: "horizontalErrorPercentDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercent)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentValue))/gi, argIndex: 2, argKey: "verticalErrorPercentValue" }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercentDataValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentDataValue))/gi, argIndex: 2, argKey: "verticalErrorPercentDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$xaxispercentvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxispercentvalue))/gi, argIndex: 2, argKey: "xAxisPercentValue" }, { regex: /((^|[^\\])((\\)\\)*\$percentdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentdatavalue))/gi, argIndex: 2, argKey: "percentDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$trType)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trType))/gi, argIndex: 4, argKey: "trtype" }, { regex: /((^|[^\\])((\\)\\)*\$tlType)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlType))/gi, argIndex: 4, argKey: "tltype" }, { regex: /((^|[^\\])((\\)\\)*\$brType)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brType))/gi, argIndex: 4, argKey: "brtype" }, { regex: /((^|[^\\])((\\)\\)*\$blType)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$blType))/gi, argIndex: 4, argKey: "bltype" }, { regex: /((^|[^\\])((\\)\\)*\$colorRangeLabel)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$colorRangeLabel))/gi, argIndex: 5, argKey: "colorRangeLabel" }, { regex: /((^|[^\\])((\\)\\)*\$zdatavalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zdatavalue))/gi, argIndex: 2, argKey: "zDataValue" }, { regex: /((^|[^\\])((\\)\\)*\$svalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$svalue))/gi, argIndex: 3, argKey: "svalue" }, { regex: /((^|[^\\])((\\)\\)*\$positiveErrorValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$positiveErrorValue))/gi, argIndex: 2, argKey: "positiveErrorValue" }, { regex: /((^|[^\\])((\\)\\)*\$negativeErrorValue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$negativeErrorValue))/gi, argIndex: 2, argKey: "negativeErrorValue" }, { regex: /((^|[^\\])((\\)\\)*\$datasvalue)/gi, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datasvalue))/gi, argIndex: 2, argKey: "formattedsValue" }],
          t = [],
          a = r.length;for (e = 0; e < a; e += 1) {
        t.push(e);
      }return function () {
        var e,
            a,
            o,
            n,
            i,
            l = arguments[0],
            s = arguments[1];if (yr(s) || (s = t), l) for (i = s.length, n = 0; n < i; n += 1) {
          (o = r[s[n]]) && (e = et(rt((a = arguments[o.argIndex]) && a[o.argKey], Y) + Y), l = (l = l.replace(o.regex, "$2$4" + (o.parsingMethod ? o.parsingMethod(e) : e))).replace(o.escapeRegex, "$2$4$5"));
        }return l;
      };
    }(),
        Fr = function () {
      var e,
          r,
          t,
          a = Math.pow,
          o = Math.floor,
          n = Math.abs;return e = function e(_e2, r, a, i, l) {
        var s = n(r - _e2),
            g = s / (a + 1);return t(s, a, i) || (l && +g / +i < (1 < i ? 2 : .5) && (i /= 10), s = (g = (o(g / i) + 1) * i) * (a + 1)), s;
      }, r = function r(e) {
        var r = (e = n(e)) + "",
            t = 0,
            a = r.indexOf(oe);return -1 != a && (t = r.length - a - 1), t;
      }, t = function t(e, _t2, a) {
        return !(r(e / (_t2 + 1)) > r(a));
      }, function (r, i, l, s, g, p, c, d) {
        var u,
            f,
            h,
            b,
            m,
            v,
            I,
            R,
            y,
            E,
            S,
            $,
            C,
            D,
            T,
            F,
            A,
            N,
            L,
            O,
            V,
            B,
            P,
            K,
            k,
            _,
            M,
            G = Math.LN10,
            w = Math.log,
            H = 0;if ((r = !0 === isNaN(r) || r === x ? .1 : r) === (i = !0 === isNaN(i) || i === x ? 0 : i) && 0 === r && (r = .1), g = void 0 === g || g, p = void 0 === p || p, I = o(w(n(r)) / G), R = o(w(n(i)) / G), y = Math.max(R, I), E = a(10, y), 2 > n(r) / E && 2 > n(i) / E && (E = a(10, --y)), S = o(w(r - i) / G), $ = a(10, S), 0 < r - i && 10 <= E / $ && (E = $, y = S), C = (o(r / E) + 1) * E, 0 > i ? D = (o(n(i / E)) + 1) * E * -1 : p ? D = 0 : D = 0 > (D = o(n(i / E) - 1) * E) ? 0 : D, g && 0 >= r && (C = 0), m = n((h = !1 === (u = !(!l && 0 !== l)) || !0 === u && +l < r && r - +l > Qe ? C : +l) - (b = !1 === (f = !(!s && 0 !== s)) || !0 === f && +s > i && +s - i > Qe ? D : +s)), v = E, !1 === f && !1 === u && d) {
          if (0 < h && 0 > b) {
            for (F = !1, N = e(b, h, c, A = 10 < v ? v / 10 : v, !1) - (c + 1) * A; !1 === F;) {
              if (t(N += (c + 1) * A, c, A)) if (T = N - m, L = N / (c + 1), O = (V = Math.min(n(b), h)) == n(b) ? -1 : 1, 0 === c) F = !0;else for (P = 1; P <= o((c + 1) / 2); P++) {
                if (!((B = L * P) - V > T)) {
                  if (!(B > V)) continue;(_ = N - B) / L == o(_ / L) && B / L == o(B / L) && (m = N, h = -1 == O ? _ : B, b = -1 == O ? -B : -_, F = !0);
                }
              }
            }
          } else T = (K = e(b, h, c, v, !0)) - m, m = K, 0 < h ? h += T : b -= T;
        } else d && (M = function M(e, r, a) {
          for (var o, n = 0, i = 1; !t(r, o = 0 === (o = e + n * i) ? 1 : o, a);) {
            if (25 < (n = -1 == i || n > e ? ++n : n)) {
              o = 0;break;
            }i = n <= e ? -1 * i : 1;
          }return o;
        }, 0 < c && (0 === (k = M(c, m, v)) && (k = M(c, m + 1, v), H = 1), c = k));return { Max: h, Min: b, Range: m, interval: v, divGap: (h - b + H) / (c + 1) };
      };
    }(),
        Ar = function () {
      var e = function e(_e3, r, t) {
        var a,
            o = t.jsVars && t.jsVars.smartLabel,
            n = _e3.offsetWidth,
            i = _e3.offsetHeight,
            l = this.chart,
            s = this.title,
            g = t._chartMessageImageStyle,
            p = Rt(r);s.y = i / 2, s.x = n / 2, l.bgSWF = s.text = x, r = p.string, p.image ? (l.bgSWF = r, l.bgImageHAlign = g.imageHAlign, l.bgImageVAlign = g.imageVAlign, l.bgImageScale = g.imageScale, l.bgSWFAlpha = g.imageAlpha) : r !== x && (o ? (St(s.style), o.setStyle(s.style), a = o.getSmartText(gt(r), n, i), s.text = a.text) : s.text = gt(r), s.verticalAlign = "middle"), s.style = t._chartMessageStyle, delete t._chartMessageImageStyle, delete t._chartMessageStyle;
      };return (e.prototype = { chart: { events: {}, margin: [0, 0, 0, 0], backgroundColor: { FCcolor: { alpha: 0 } } }, credits: { href: Te, text: Fe, enabled: Ze }, legend: { enabled: !1 }, title: { text: "", style: { fontFamily: "Verdana,sans", fontSize: "10px", color: "#666666" } }, plotOptions: { series: {} }, series: [{}], exporting: { enabled: !1 }, nativeMessage: !0 }).constructor = e;
    }(),
        Nr = { click: !0, dragstart: !0, dragmove: !0, dragend: !0, dblclick: !0, mousedown: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, touchstart: Je || qe, touchmove: Je || qe, touchend: Je || qe, touchcancel: Je || qe },
        Lr = { stripWhitespace: Ge, dropHash: we, startsRGBA: He, cleanColorCode: ze, breakPlaceholder: Me, hexcode: Xe },
        Or = { colors: { B90000: "B90000", FFFFFF: "FFFFFF", AAAAAA: "AAAAAA", c000000: "000000" }, BLANK: "", DATASET: "dataset", NORMALSTRING: "normal", PX: "px", INPUT: "input", LABEL: "label", BLANKSPACE: " ", COMMA: ",", OBJECTBOUNDINGBOX: "objectBoundingBox", GROUPID: "groupId", EVENTARGS: "eventArgs", CIRCLE: "circle", POLYGON: "polygon", SPOKE: "spoke", RECTANGLE: "rectangle", ROLLOUT: "rollout", ROLLOVER: "rollover", DATAPLOTCLICK: "dataplotclick", defaultFontStr: "Verdana,sans", line: "line", bar: "bar", column: "column", volume: "volume", HUNDREDSTRING: "100", SEVENTYSTRING: "70", NINETYSTRING: "90", AUTOSTRING: "auto", configStr: "config", animationObjStr: "animationObj", showHoverEffectStr: "showHoverEffect", hiddenStr: "hidden", visibleStr: "visible", columnStr: "columns", barStr: "bars", barHotStr: "bar-hot", colHotStr: "col-hot", shadowStr: "shadow", dataLabelStr: "datalabel", errorBarStr: "errorBar", errorHotStr: "error-hot", errorShadowStr: "error-shadow", negativeValueStr: "negative-values", positiveValueStr: "positive-values", zeroPlaneStr: "zero-plane", categoryPlotsStr: "categoryplots", noneStr: "none", setRolloverAttrStr: "setRolloverAttr", setRolloutAttrStr: "setRolloutAttr", elementStr: "element", hotElementStr: "hotElement", strokeWidthStr: "stroke-width", strokeDashStr: "stroke-dasharray", strokeLineJoinStr: "stroke-linejoin", miterStr: "miter", visiblilityStr: "visibility", ROUND: "round", PERCENTAGESTRING: "%", pStr: "p", sStr: "s", divLineAlpha3DStr: "divLineAlpha3D", divLineAlphaStr: "divLineAlpha", altVGridColorStr: "altVGridColor", altVGridAlphaStr: "altVGridAlpha", altHGridColorStr: "altHGridColor", altHGridAlphaStr: "altHGridAlpha", PLOTFILLCOLOR_STR: "plotFillColor", UNDERSCORE: "_", gaugeFillColorStr: "gaugeFillColor", gaugeBorderColorStr: "gaugeBorderColor", NORMAL: "normal", BOLD: "bold", POINTER: "pointer", DEFAULT: "default", POSITION_MIDDLE: "middle", POSITION_START: "start", POSITION_TOP: "top", POSITION_BOTTOM: "bottom", POSITION_END: "end" },
        Vr = ["fontFamily", "fontSize", "fontWeight", "fontStyle"],
        Br = function Br() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var r = arguments[1];
      var t,
          a,
          o = e.length,
          n = -1;if ("function" == typeof r) {
        for (; ++n < o;) {
          if (null != (t = r(e[n], n, e)) && t >= t) for (a = t; ++n < o;) {
            null != (t = r(e[n], n, e)) && t > a && (a = t);
          }
        }
      } else for (; ++n < o;) {
        if (null != (t = e[n]) && t >= t) for (a = t; ++n < o;) {
          null != (t = e[n]) && t > a && (a = t);
        }
      }return a;
    },
        Pr = function Pr() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var r = arguments[1];
      var t,
          a,
          o = e.length,
          n = -1;if ("function" == typeof r) {
        for (; ++n < o;) {
          if (null != (t = r(e[n], n, e)) && t <= t) for (a = t; ++n < o;) {
            null != (t = r(e[n], n, e)) && t < a && (a = t);
          }
        }
      } else for (; ++n < o;) {
        if (null != (t = e[n]) && t <= t) for (a = t; ++n < o;) {
          null != (t = e[n]) && t < a && (a = t);
        }
      }return a;
    },
        Kr = function Kr() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var r = arguments[1];
      var t = Br(e, r);return [Pr(e, r), t];
    };function kr(e) {
      return null != e;
    }function _r(e, r) {
      return parseInt(e, r || 10);
    }function Mr(e) {
      var r = e.options,
          t = r.containerBackgroundColor,
          a = r.containerBackgroundOpacity;return kr(e.jsVars.transparent) ? a = e.jsVars.transparent ? 0 : 1 : 0 > (a = parseFloat(a)) ? a = 0 : 1 < a && (a = 1), t || (t = "#ffffff"), C && !S ? a ? t : "transparent" : (t = t.replace(/^#?([a-f0-9]+)/gi, "$1"), (t = (0, i.HEXtoRGB)(t))[3] = a.toString(), "rgba(" + t.join(",") + ")");
    }function Gr(e) {
      return e && e.replace(/^#?([a-f0-9]+)/gi, "#$1") || "none";
    }function wr(e) {
      e.data && (e.data.elScroll = !1);
    }function Hr(e, r) {
      var t,
          o,
          n = { top: 0, left: 0 },
          i = r && r.config,
          l = r && (r.eventListeners || (r.eventListeners = [])),
          s = r && (i.isEvntAdded || (i.isEvntAdded = !1));if (e) {
        for (n.top = e.offsetTop, n.left = e.offsetLeft, t = e; (t = t.parentNode) && "BODY" !== t.tagName;) {
          o = h.getComputedStyle(t).getPropertyValue("position"), /fixed/.test(o) && r && (i.itemFixed = !0), n.top -= t.scrollTop || 0, n.left -= t.scrollLeft || 0, r && !s && l.push(a.default.listen(t, "scroll", wr, i));
        }for (; t;) {
          n.top -= t.scrollTop || 0, n.left -= t.scrollLeft || 0, t = t.parentNode;
        }for (e = e.offsetParent; e;) {
          n.top += e.offsetTop, n.left += e.offsetLeft, e = e.offsetParent;
        }n.top += Xr(function () {
          var e = void 0;return e = $ ? y.documentElement.scrollTop : D ? y.body.scrollTop : h.pageYOffset;
        }(), h.scrollY, y.documentElement.scrollTop), n.left += Xr(function () {
          var e = void 0;return e = $ ? y.documentElement.scrollLeft : D ? y.body.scrollLeft : h.pageXOffset;
        }(), h.scrollX, y.documentElement.scrollLeft), r && !s && l.push(a.default.listen(h, "resize", wr, i)), r && !s && l.push(a.default.listen(h, "scroll", wr, i)), r && !s && (i.isEvntAdded = !0);
      }return n;
    }function zr(e) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1 / 0;
      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
      return e <= r ? r : e >= t ? t : e;
    }function Xr() {
      var e, r, t;for (r = 0, t = arguments.length; r < t; r += 1) {
        if (((e = arguments[r]) || !1 === e || 0 === e) && !isNaN(e = +e)) return e;
      }return x;
    }function Yr(e) {
      var r = e && (e.sourceEvent || e.originalEvent || e);return Je && r && r.touches && r.touches[0] || r || ar;
    }function Ur(e, r, t, a) {
      if (t || (t = e), a || (a = {}), yr(e)) {
        for (o = 0; o < e.length; o += 1) {
          if (!1 === r.call(t, e[o], o, e, a)) return o;
        }
      } else if (null !== e && e !== x) for (var o in e) {
        if (!1 === r.call(t, e[o], o, e, a)) return o;
      }
    }function jr(e) {
      var r,
          t,
          a,
          o = e.data,
          n = o.chart,
          i = n.getFromEnv("animationManager"),
          l = e.state,
          s = Er(Yr(e.originalEvent)),
          g = n.getChildren("canvas")[0],
          p = r = g.getGraphicalElement("resizeBox"),
          c = o.layerX = s.pageX - o.chartPosLeft,
          x = o.layerY = s.pageY - o.chartPosTop,
          d = c - o.ox,
          u = x - o.oy,
          f = o.bBox,
          h = o.ox,
          b = o.oy,
          m = o.zoomX,
          v = o.zoomY,
          I = o.canvasY,
          R = o.canvasX,
          y = o.canvasW,
          E = o.canvasH,
          S = o.canvasX2,
          $ = o.canvasY2,
          C = o.strokeWidth,
          D = o.attr;switch (l) {case "start":
          t = Hr(this), o.chartPosLeft = t.left, o.chartPosTop = t.top, c = s.pageX - o.chartPosLeft, x = s.pageY - o.chartPosTop, o.oy = x, o.ox = c, o.allowMove = !1, D.x = 0, D.y = 0, D.height = 0, D.width = 0, p = g.addGraphicalElement("resizeBox", i.setAnimation({ el: r || "rect", attr: D, container: n.getChildContainer("trackerGroup") })).show(), r || g.addGraphicalElement("resizeBox", p), c > R && c < S && x > I && x < $ && (o.allowMove = !0), e.target._isTrackerElem && (o.allowMove = !1);break;case "end":
          a = { chart: n, selectionLeft: (f = p.getBBox()).x, selectionTop: f.y, selectionHeight: f.height, selectionWidth: f.width, originalEvent: e.originalEvent }, o.isDragged && (o.selectionEnd && o.selectionEnd(a), o.isDragged = 0), p.hide(), delete o.oy, delete o.ox;break;default:
          if (!o.allowMove) return;d = c - o.ox, u = x - o.oy, f = o.bBox, h = o.ox, b = o.oy, o.isDragged || (a = { chart: n, selectionLeft: (m ? tr(h, h + d) : R) + .5 * C, selectionTop: (v ? tr(b, b + u) : I) + .5 * C, selectionHeight: 0, selectionWidth: 0, originalEvent: e.originalEvent }, o.selectionStart && o.selectionStart(a), o.isDragged = 1), d = -(h - tr(h - (h - rr(h + d, R)), S)), u = -(b - tr(b - (b - rr(b + u, I)), $)), i.setAnimation({ el: p, attr: { x: (m ? tr(h, h + d) : R) + .5 * C, y: (v ? tr(b, b + u) : I) + .5 * C, width: m ? Ue(d) : y, height: v ? Ue(u) : E } });}
    }function Wr(e) {
      var r = e.data,
          t = e.originalEvent,
          a = t.target || t.originalTarget || t.srcElement || t.relatedTarget || t.fromElement,
          o = t.type,
          n = t.layerX,
          i = t.layerY;n === x && (n = t.pageX - r.chartPosLeft, i = t.pageY - r.chartPosTop), "mousedown" === o && (a.ishot = n > r.canvasX && n < r.canvasX2 && i > r.canvasY && i < r.canvasY2), "mouseup" === o && setTimeout(function () {
        a.ishot = !1;
      }, 1);
    }function Qr(e, r) {
      return e ? e.replace(r ? /(^|\s)([a-z])/g : /(^|\s)([a-z])/, function (e, r, t) {
        return r + t.toUpperCase();
      }) : e;
    }function Jr() {
      var e, r, t;for (r = 0, t = arguments.length; r < t; r += 1) {
        if ((e = arguments[r]) || !1 === e || 0 === e) return e;
      }return Y;
    }function qr(e, r) {
      r = r || {};var t = e.config,
          o = e.getFromEnv("chart-container"),
          i = t.zoomType,
          l = (0, n.default)({}, r.attr || {}),
          s = l["stroke-width"] = Xr(l.strokeWidth, l["stroke-width"], 1),
          g = e.eventListeners || (e.eventListeners = []),
          p = Hr(o, e);r = (0, n.default)({ chart: e, zoomX: /x/.test(i), zoomY: /y/.test(i), canvasY: t.canvasTop, canvasX: t.canvasLeft, canvasW: t.canvasWidth, canvasH: t.canvasHeight, canvasX2: t.canvasLeft + t.canvasWidth, canvasY2: t.canvasTop + t.canvasHeight, strokeWidth: s, chartPosLeft: p.left, chartPosTop: p.top, attr: l }, r), l.stroke = Jr(l.stroke, "rgba(51,153,255,0.8)"), l.fill = Jr(l.fill, "rgba(185,213,241,0.3)"), o && (a.default.unlisten(o, "pointerdrag", jr), g.push(a.default.listen(o, "pointerdrag", jr, r))), t.link && (a.default.unlisten(e.getFromEnv("chart-container"), "mouseup mousedown", Wr), g.push(a.default.listen(e.getFromEnv("chart-container"), "mouseup mousedown", Wr, r)));
    }function Zr(e) {
      return e && e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }function et(e) {
      return e && e.replace(/\$/g, "$$$$");
    }function rt(e, r) {
      return e || !1 === e || 0 === e ? e : r;
    }function tt(e, r) {
      return e || 0 === e || e === Y ? e : r;
    }function at() {
      var e, r, t;for (r = 0, t = arguments.length; r < t; r += 1) {
        if ((e = arguments[r]) || !1 === e || 0 === e) return e;
      }return x;
    }function ot(e, r, t) {
      var a,
          o = y.webkitIsFullScreen || y.mozFullScreen || y.msFullscreenElement || void 0 !== y.fullscreenElement,
          n = Er(Yr(r)),
          i = o ? n.clientX : n.pageX,
          l = o ? n.clientY : n.pageY,
          s = t && t.config,
          g = r.type,
          p = s && s.itemFixed,
          c = p ? h.pageYOffset || h.scrollY || y.documentElement.scrollTop : 0,
          x = p ? h.pageXOffset || h.scrollX || y.documentElement.scrollLeft : 0;return s && s.elScroll ? a = s.posOb : (s && (s.elScroll = !0), a = Hr(e, t), s && (s.posOb = a)), "touchend" === g ? (i = d, l = u) : ("touchmove" === g || "touchstart" === g) && (d = i, u = l), { chartX: i - a.left - x, chartY: l - a.top - c, pageX: i, pageY: l };
    }function nt(e) {
      return e && e.replace(/^#?([a-f0-9]+)/gi, "$1") || "none";
    }function it() {
      var e, r, t;for (r = 0, t = arguments.length; r < t; r += 1) {
        if ((e = arguments[r]) || !1 === e || 0 === e || e == Y) return e;
      }return x;
    }function lt() {
      var e, r, t;for (r = 0, t = arguments.length; r < t; r += 1) {
        if (((e = arguments[r]) || !1 === e || 0 === e) && !isNaN(e = +e)) return 1 > e ? 1 : e;
      }return 1;
    }function st(e, r) {
      return e = e || !1 === e || 0 === e ? +e : NaN, isNaN(e) ? null : r ? Ue(e) : e;
    }function gt(e) {
      return "string" == typeof e ? e.replace(Me, H) : Y;
    }function pt(e, r) {
      return (e = (e = e.split(W)[r || 0]).replace(Ge, Y)) == Y && (e = k), e.replace(we, w);
    }function ct(e, r) {
      var t,
          a,
          o = "",
          n = 0,
          l = r.split(W);for (a = l.length; n < a; n += 1) {
        o += 2 === (t = l[n].split("-")).length ? "-1" === t[0].indexOf("dark") ? (0, i.getDarkColor)(e, 100 - parseInt(t[1], 10)) + W : (0, i.getLightColor)(e, 100 - parseInt(t[1], 10)) + W : l[n] + W;
      }return o.substring(0, o.length - 1);
    }function xt(e) {
      for (var r = /\s/, t = (e = e.replace(/^\s\s*/, "")).length; r.test(e.charAt(t -= 1));) {}return e.slice(0, t + 1);
    }function dt(e) {
      return e = parseInt(e, 10), (isNaN(e) || 100 < e || 0 > e) && (e = 100), e;
    }function ut(e, r, t) {
      var a = t % 2 / 2,
          o = We(e + a) - a;return { position: o, distance: We(e + r + a) - a - o };
    }function ft(e) {
      for (var r = /\s/, t = (e = e.replace(/^\s\s*/, "")).length; r.test(e.charAt(t -= 1));) {}return e.slice(0, t + 1);
    }function ht(e, r, t) {
      if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || null === e) return e = r, r;if ("object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) || null === r) return e;for (var a in r) {
        e[a] !== x && (t || null !== e[a]) || (e[a] = r[a]);
      }return e;
    }function bt(e, r) {
      var t,
          a = { chart: {} },
          o = r;if (e = e.toLowerCase(), o.linkeddata) for (t = 0; t < o.linkeddata.length; t += 1) {
        o.linkeddata[t].id.toLowerCase() === e && (a = o.linkeddata[t].linkedchart || o.linkeddata[t].linkedmap);
      }return a;
    }function mt(e, r) {
      $r(e.substr(0, e.indexOf("__FC_ARG_SEP__")).replace(/\s/g, Y), e.substr(e.indexOf("__FC_ARG_SEP__")).replace(/__FC_ARG_SEP__/, ""), r);
    }function vt(e) {
      /^j\s*\-/.test(e) ? mt(e.replace(/^j\s*\-/, Y).replace(/\-/, "__FC_ARG_SEP__")) : mt(e.replace(/^javascript\s*\:/i, Y).replace(/[\'\"]?\s*\,\s*[\'\"]?/g, "__FC_ARG_SEP__").replace(/\(\s*[\'\"]?(.*)\)\;?/, "__FC_ARG_SEP__$1").replace(/[\'\"]?$/, ""), !0);
    }function It(e, r) {
      var t = function t(e) {
        return e;
      };return function (a) {
        if (!a || !r.config.clickURLOverridesPlotLinks) {
          var o,
              n,
              i,
              l,
              s,
              g,
              p,
              c,
              d,
              u,
              f = Xr((e.chart || e.map || {}).unescapelinks, 1),
              b = this.entity || x,
              m = this.entityBox || x,
              v = this.link,
              I = v;if (v !== x) {
            switch (f && (v = h.decodeURIComponent ? h.decodeURIComponent(v) : h.unescape(v)), -1 !== (v = v.replace(/^\s+/, Y).replace(/\s+$/, Y)).search(/^[a-z]*\s*[\-\:]\s*/i) && (u = (s = v.split(/\s*[\-\:]\s*/)[0].toLowerCase()).length), a && (r.config.hotElemClicked = !0), s) {case "j":case "javascript":
                vt(v);break;case "n":
                v.replace(/^n\s*\-/i, "n-"), h.open(t(v.slice(2)));break;case "f":
                -1 === (o = (v = v.replace(/^f\s*\-/i, "f-")).indexOf("-", 2)) ? h.open(t(v.slice(2))) : (n = v.substr(2, o - 2)) && h.frames[n] ? h.frames[n].location = t(v.slice(o + 1)) : h.open(t(v.slice(o + 1)), n);break;case "p":
                o = (v = v.replace(/p\s*\-/i, "p-")).indexOf("-", 2), i = v.indexOf(W, 2), -1 === o && (o = 1), l = t(v.slice(o + 1)), (d = h.open(l, v.substr(2, i - 2), v.substr(i + 1, o - i - 1))) && d.focus();break;case "newchart":case "newmap":
                ":" === v.charAt(u) && (o = v.indexOf("-", u + 1), c = v.substring(u + 1, o), u = o), o = v.indexOf("-", u + 1), "xmlurl" === (g = v.substring(u + 1, o).toLowerCase()) || "jsonurl" === g ? p = v.substring(o + 1, v.length) : ("xml" === g || "json" === g) && (p = bt(v.substring(o + 1, v.length), e), g = "json"), r.fireChartInstanceEvent("linkedChartInvoked", { alias: c, linkType: g.toUpperCase(), data: p, clickedEntity: b, clickedEntityBox: m });break;default:
                h.location.href = t(v);}r.fireChartInstanceEvent("linkClicked", { linkProvided: I, linkInvoked: v, linkAction: s && s.toLowerCase() });
          }
        }
      };
    }function Rt(e) {
      var r = { image: !1 };return e !== x && (e = e.replace(/^\s+/, Y).replace(/\s+$/, Y), /^i\s*[\-]\s*/i.test(e) ? (r.image = !0, r.string = e.replace(/^i\s*[\-]\s*/i, Y)) : r.string = e.replace(/^\\/, Y)), r;
    }function yt(e, r) {
      var t = je(10, r);return We(e * t) / t;
    }function Et(e, r, t) {
      return t || t === x ? [e, r] : b;
    }function St(e, r) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? ((e.fontSize || e["font-size"]) && (!e.fontSize && e["font-size"] && (e.fontSize = e["font-size"], delete e["font-size"]), e.lineHeight = (parseFloat(e.fontSize) || r || 10) * p + "px", delete e["line-height"]), !e.lineHeight && e["line-height"] && (e.lineHeight = e["line-height"], delete e["line-height"]), e.lineHeight) : Y;
    }function $t(e, r, t, a, o) {
      var n,
          l = Jr(e.labelbordercolor, r.bordercolor, t.labelbordercolor, Y),
          s = at(e.labelbgcolor, r.bgcolor, t.labelbgcolor),
          g = Xr(e.labelborderthickness, r.borderthickness, t.labelborderthickness, 1),
          p = Xr(t.usedataplotcolorforlabels, 0) && o || a.color;return l = l ? (0, i.convertColor)(l, Xr(e.labelborderalpha, r.borderalpha, t.labelborderalpha, e.labelalpha, r.alpha, t.labelalpha, 100)) : Y, (n = { fontFamily: at(e.labelfont, r.font, t.labelfont, a.fontFamily), fontSize: at(e.labelfontsize, r.fontsize, t.labelfontsize, parseInt(a.fontSize, 10)) + fe, color: (0, i.convertColor)(at(e.labelfontcolor, r.fontcolor, t.labelfontcolor, p), Xr(e.labelfontalpha, r.fontalpha, t.labelfontalpha, e.labelalpha, r.alpha, t.labelalpha, 100)), fontWeight: Xr(e.labelfontbold, r.fontbold, t.labelfontbold) ? "bold" : "normal", fontStyle: Xr(e.labelfontitalic, r.fontitalic, t.labelfontitalic) ? "italic" : "normal", border: l || s ? g + "px solid" : Y, borderColor: l, borderThickness: g, borderPadding: Xr(e.labelborderpadding, r.borderpadding, t.labelborderpadding, 2), borderRadius: Xr(e.labelborderradius, r.borderradius, t.labelborderradius, 0), backgroundColor: s ? (0, i.convertColor)(s, Xr(e.labelbgalpha, r.bgalpha, t.labelbgalpha, e.labelalpha, r.alpha, t.labelalpha, 100)) : Y, borderDash: Xr(e.labelborderdashed, r.borderdashed, t.labelborderdashed, 0) ? Et(Xr(e.labelborderdashlen, r.borderdashlen, t.labelborderdashlen, 4), Xr(e.labelborderdashgap, r.borderdashgap, t.labelborderdashgap, 2)) : b }).lineHeight = St(n), n;
    }function Ct(e, r, t, a, o, n, i, s) {
      var g = s.width * (a / 100),
          p = s.height * (a / 100);return (0, l.getAlignImage)(r, t, e, g, p, n, i, o, n - 2 * o, i - 2 * o);
    }function Dt() {
      var e,
          r,
          t,
          a,
          o,
          n,
          i,
          l,
          s,
          g,
          p,
          c,
          x = this;if (x && x !== h) {
        if (x.disposing = !0, e = x.components) for (t in e) {
          if ((r = e[t]) instanceof Array) for (a = r.length, o = 0; o < a; o++) {
            (c = r[o]) && !x.disposing && (c.dispose ? c.dispose() : Dt.call(c));
          } else r && !r.disposing && (r.dispose ? r.dispose() : Dt.call(r));
        }for (l in n = x.graphics) {
          if (i = n[l]) if (i.hide) i.hide(), i.followers && i.followers[0] && (p = i.followers[0].el) && p.hide && p.hide();else for (s in i) {
            (g = i[s]).hide && g.hide();
          }
        }for (t in x) {
          delete x[t];
        }
      }
    }function Tt(e) {
      return !!Nr[e];
    }function Ft(e) {
      e && e.toLowerCase && (Nr[e.toLowerCase()] = !0);
    }function At(e, r) {
      return e - r;
    }function Nt(e, r) {
      return r - e;
    }function Lt(e, r) {
      return e ? r ? function (e, t) {
        return e[r] - t[r];
      } : At : r ? function (e, t) {
        return t[r] - e[r];
      } : Nt;
    }function Ot(e, r) {
      var t,
          a = e.length;for (t = 0; t < a; t++) {
        e[t].ssI = t;
      }for (e.sort(function (e, t) {
        var a = r(e, t);return 0 === a ? e.ssI - t.ssI : a;
      }), t = 0; t < a; t++) {
        delete e[t].ssI;
      }
    }function Vt() {
      var e, r, t, a;return e = arguments[0], 1 === arguments.length ? (r = e.angle, t = e.x, a = e.y) : (r = e, t = arguments[1], a = arguments[2]), Q + (r = r || 0) + W + t + W + a;
    }function Bt(e, r, t) {
      var a = void 0,
          o = void 0 === e ? t.offsetWidth || parseFloat(t.style.width) : e,
          n = void 0 === r ? t.offsetHeight || parseFloat(t.style.height) : r,
          i = {},
          l = t.style;if (l.width = o = o.toString ? o.toString() : "0", l.height = n = n.toString ? n.toString() : "0", (i.widthIsRelative = o.match(/^\s*\d*\.?\d*\%\s*$/) && !o.match(/^\s*0\%\s*$/)) && 0 === t.offsetWidth) for (a = t; a = a.offsetParent;) {
        if (0 < a.offsetWidth) {
          o = (a.offsetWidth * parseFloat(o.match(/\d*/)[0]) / 100).toString();break;
        }
      }if ((i.heightIsRelative = n.match(/^\s*\d*\.?\d*\%\s*$/) && !n.match(/^\s*0\%\s*$/)) && 20 >= t.offsetHeight) for (a = t; a = a.offsetParent;) {
        if (0 < a.offsetHeight) {
          n = (a.offsetHeight * parseFloat(n.match(/\d*/)[0]) / 100).toString();break;
        }
      }return i.width = o.replace ? o.replace(/^\s*(\d*\.?\d*)\s*$/gi, "$1px") : o, i.height = n.replace ? n.replace(/^\s*(\d*\.?\d*)\s*$/gi, "$1px") : n, l.width = i.width, l.height = i.height, i.pixelWidth = i.widthIsRelative ? t.offsetWidth : parseInt(i.width, 10) || 0, i.pixelHeight = i.heightIsRelative ? t.offsetHeight : parseInt(i.height, 10) || 0, i;
    }var Pt = function Pt(e, r, t) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var o = arguments[4];
      if (e && r && t) {
        var _n = void 0,
            _i = void 0,
            _l = void 0,
            _s = e.getChildren(t) || [];for (_n = 0; _n < a; _n += 1) {
          _s && _s[_n] && !_s[_n].getState("removed") ? _l = _s[_n] : (_l = new r(), e.attachChild(_l, t)), o && o.length > _n && _l.configure && _l.configure(o[_n]);
        }if (_n < (_i = _s && _s.length)) for (; _n < _i; _n += 1) {
          _s[_n] && _s[_n].remove && _s[_n].remove();
        }
      }
    },
        Kt = function Kt(e, r, t) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var o = arguments[4];
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
      if (e && r && t) {
        var _i2 = void 0,
            _l2 = void 0,
            _s2 = void 0,
            _g = e.getChildren(t) || [];for (_i2 = 0; _i2 < a; _i2 += 1) {
          _g && _g[_i2] && !_g[_i2].getState("removed") ? _s2 = _g[_i2] : (_s2 = new r(), e.attachChild(_s2, t)), _s2.config._childIndex = _i2, _s2.setState("_total", a), _s2.setJSONIndex && _s2.setJSONIndex(n[_i2] || _i2), o && o.length > _i2 && _s2.configure && _s2.configure(o[_i2]);
        }if (_i2 < (_l2 = _g && _g.length)) for (; _i2 < _l2; _i2 += 1) {
          _g[_i2] && _g[_i2].remove && _g[_i2].remove();
        }
      }
    };exports.isInterActiveEvt = Tt, exports.addInterActiveEvtName = Ft, exports.getEmptyConstractor = v, exports.BLANKSTRINGPLACEHOLDER = P, exports.isFirefox = R, exports.UNDEF = x, exports.UNDERSCORE = Ie, exports.BLANKSTRING = U, exports.COLOR_BLACK = k, exports.COLOR_GLASS = _, exports.COLOR_WHITE = M, exports.COLOR_TRANSPARENT = G, exports.HASHSTRING = w, exports.BREAKSTRING = H, exports.STRINGSTRING = z, exports.OBJECTSTRING = X, exports.COMMASTRING = j, exports.ZEROSTRING = Z, exports.SAMPLESTRING = K, exports.TESTSTR = te, exports.ONESTRING = ae, exports.DECIMALSTRING = oe, exports.STRINGUNDEFINED = ne, exports.POSITION_TOP = ie, exports.POSITION_RIGHT = O, exports.POSITION_BOTTOM = le, exports.POSITION_LEFT = V, exports.POSITION_CENTER = B, exports.POSITION_MIDDLE = se, exports.POSITION_START = ge, exports.POSITION_END = pe, exports.FC_CONFIG_STRING = ce, exports.SHAPE_RECT = xe, exports.HUNDREDSTRING = de, exports.PXSTRING = fe, exports.COMMASPACE = he, exports.TEXTANCHOR = be, exports.hiddenStr = Pe, exports.visibleStr = Ke, exports.startsRGBA = He, exports.cleanColorCode = ze, exports.TOUCH_THRESHOLD_PIXELS = Ne, exports.CLICK_THRESHOLD_PIXELS = Le, exports.regex = Lr, exports.getEventCoordinate = Er, exports.getMouseCoordinate = ot, exports.getTouchEvent = Yr, exports.extend2 = n.default, exports.imprint = ht, exports.pluck = at, exports.pluckNumber = Xr, exports.getFirstDefinedValue = it, exports.createElement = Rr, exports.polyPathToPath = mr, exports.hashify = Gr, exports.dehashify = nt, exports.getComparatorFN = Lt, exports.pluckFontSize = lt, exports.getValidValue = rt, exports.getPosition = Hr, exports.getViewPortDimension = Sr, exports.bindSelectionEvent = qr, exports.fcEach = Ur, exports.getDefinedColor = tt, exports.getFirstValue = Jr, exports.getFirstColor = pt, exports.getColorCodeString = ct, exports.clampNumber = zr, exports.toRaphaelColor = Cr, exports.rgbaToHex = vr, exports.gradientify = Dr, exports.fastTrim = ft, exports.getFirstAlpha = dt, exports.parsePointValue = st, exports.parseUnsafeString = gt, exports.parseTooltext = Tr, exports.toPrecision = yt, exports.hasTouch = qe, exports.CREDIT_HREF = Te, exports.CREDIT_STRING = Fe, exports.regescape = Zr, exports.regReplaceEscape = et, exports.getImageURL = Rt, exports.isArray = yr, exports.getCrispValue = ut, exports.getCripValues = ut, exports.preDefStr = Or, exports.stubFN = m, exports.stableSort = Ot, exports.hasSVG = S, exports.CREDIT_REGEX = _e, exports.isIE = C, exports.isIE11 = $, exports.isIE9 = I, exports.isEdge = D, exports.lineHeightFactor = Oe, exports.getLinkAction = It, exports.setImageDisplayMode = Ct, exports.setLineHeight = St, exports.parsexAxisStyles = $t, exports.supportedStyle = fr, exports.getAxisLimits = Fr, exports.getDashStyle = Et, exports.chartAPI = f, exports.createDialog = Ar, exports.componentDispose = Dt, exports.executeJS = mt, exports.pseudoEval = vt, exports.validhexcolor = Ye, exports.appliedCSS = Vr, exports.getContainerBackgroundColor = Mr, exports.capitalizeString = Qr, exports.TRACKER_FILL = L, exports.chartPaletteStr = ur, exports.DASH_DEF = b, exports.attrTypeNum = T, exports.canvasBGAlphaStr = me, exports.attrTypeBool = F, exports.pInt = _r, exports.defined = kr, exports.canvasBorderColorStr = Ae, exports.attribDefs = r.attribDefs, exports.parseConfiguration = r.parseConfiguration, exports.setAttribDefs = r.setAttribDefs, exports.hasAttribDefs = r.hasAttribDefs, exports.crispBound = br, exports.defaultGaugePaletteOptions = ir, exports.MathExt = pr, exports.xssEncode = gr, exports.animHelperFN = Ir, exports.mathAbs = Ue, exports.mathRound = We, exports.NORMAL = Re, exports.BOLD = ye, exports.HAND = Se, exports.POINTER = Ee, exports.BLANK = Y, exports.ROUND = ve, exports.configStr = Ve, exports.animationObjStr = Be, exports.COMMA = W, exports.TILE = $e, exports.FILL = Ce, exports.FIT = De, exports.MOUSEOUT = ee, exports.MOUSEMOVE = re, exports.touchEnabled = Je, exports.VISIBLE = ue, exports.BGRATIOSTRING = c, exports.dropHash = we, exports.componentFactory = Pt, exports.datasetFactory = Kt, exports.trimString = xt, exports.PROJECT_VERSION = g, exports.LINE_HEIGHT_FACTOR = p, exports.safeMax = Br, exports.safeMin = Pr, exports.normalizeAngle = xr, exports.extent = Kr, exports.getSuggestiveRotation = Vt, exports.isXSSSafe = sr, exports.normalizeCSSDimension = Bt, exports.domInsertModes = lr;
  }, { "../../../../package.json": 15, "./lib-attr": 72, "../dom/dom-event": 73, "../vendors/redraphael/source/raphael.lib": 84, "./lib-graphics": 21, "../misc/image-alignment": 74 }], 22: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = void 0,
        t = {},
        n = {},
        r = function r(e, t, n, _r2) {
      try {
        e[0].call(t, n, _r2 || {});
      } catch (e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
    },
        i = function i(t, _i3, o) {
      var a,
          s = 0;if (t instanceof Array && !_i3.cancelled) for (; s < t.length; s += 1) {
        if (!0 !== t[s].removed) {
          if ((t[s][1] === _i3.sender || t[s][1] === e) && (a = t[s][1] === _i3.sender ? _i3.sender : n, r(t[s], a, _i3, o), !0 === _i3.detached && (t.splice(s, 1), s -= 1, _i3.detached = !1)), !0 === _i3.cancelled) break;
        } else t.splice(s, 1), s -= 1;
      }
    },
        o = function o() {
      this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
    },
        a = function a() {
      this.cancelled = !0, this.originalEvent && this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation.call ? this.originalEvent.stopImmediatePropagation() : this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
    },
        s = function s() {
      return 0 == (this.detached = !0);
    },
        l = function l() {
      this.defaultPrevented = !0, this.originalEvent && this.originalEvent.preventDefault && this.originalEvent.preventDefault.call && this.originalEvent.preventDefault();
    },
        p = function p(e, t, n) {
      var r = void 0,
          i = e.length;for (r = 0; r < i; r += 1) {
        if (e[r][0] === t && e[r][1] === n && !e[r].removed) return !0;
      }
    },
        c = {},
        f = 0,
        v = function v(e, t, n, r) {
      var i, o, a;if (e instanceof Array) {
        for (i = [], o = 0; o < e.length; o += 1) {
          i.push(v(e[o], t, n));
        }return i;
      }return "string" == typeof e ? "function" == typeof t ? (e = e.toLowerCase(), n ? (!n._evtListeners && (n._evtListeners = {}), !(n._evtListeners[e] instanceof Array) && (n._evtListeners[e] = []), a = n._evtListeners[e]) : (!(c[e] instanceof Array) && (c[e] = []), a = c[e]), !p(a, t, n) && (r && r.priority ? a.unshift([t, n]) : a.push([t, n]), t)) : void y(n, "03091550", "param", "::addListener", new Error("Invalid Event Listener")) : void y(n, "03091549", "param", "::addListener", new Error("Unspecified Event Type"));
    },
        d = function d(e, t, n) {
      var r, i;if ("function" == typeof t) {
        if (e instanceof Array) for (i = 0; i < e.length; i += 1) {
          d(e[i], t, n);
        } else if ((r = g(e, n)) instanceof Array && r.length) for (i = r.length - 1; 0 <= i; i -= 1) {
          r[i][0] === t && r[i][1] === n && (r[i].removed = !0);
        }
      } else y(n, "03091560", "param", "::removeListener", new Error("Invalid Event Listener"));
    },
        u = function u(e, t, n, r, p, v) {
      var d, u, h, E, m;return e = e.toLowerCase(), u = g(e, t), h = g("*", t), E = c[e], m = c["*"], (u && u.length || h && h.length || E && E.length || m && m.length) && (d = { type: e, eventType: e, eventId: f += 1, sender: t || new Error("Orphan Event"), stopPropagation: o, stopImmediatePropagation: a, cancelled: !1, preventDefault: l, defaultPrevented: !1, originalEvent: r, detached: !1, data: n, detachHandler: s }, i(m, d, n), i(E, d, n), t && (i(g("*", t), d, n), i(g(e, t), d, n))), d && d.defaultPrevented ? v && "function" == typeof v && v.call(t, d, n || {}) : p && "function" == typeof p && p.call(t, d, n || {}), !0;
    },
        g = function g(e, t) {
      return "string" == typeof e ? (e = e.toLowerCase(), t ? t._evtListeners && t._evtListeners[e] : c[e]) : void y(t, "03091559", "param", "::removeListener", new Error("Unspecified Event Type"));
    },
        h = function h(e) {
      var t,
          n = e ? e._evtListeners : c;for (t in n) {
        n[t].length && (n[t].length = 0);
      }
    },
        E = { type: "TypeException", range: "ValueRangeException", impl: "NotImplementedException", param: "ParameterException", run: "RuntimeException", comp: "DesignTimeError", undefined: "UnspecifiedException" },
        m = function m(e, t, n, r, i, o) {
      var a,
          s = "#" + t + " " + (e ? e.id : "unknown-source") + r + " " + o + " >> ";i instanceof Error ? (i.name = E[n], i.module = "FusionCharts" + r, i.level = o, i.message = s + i.message, s = i.message, setTimeout(function () {
        throw i;
      }, 0)) : s += i, a = { id: t, nature: E[n], source: "FusionCharts" + r, message: s }, u(o, e, a);
    },
        y = function y(e, t, n, r, i) {
      m(e, t, n, r, i, "Error");
    },
        L = function L(e, t, n, r, i) {
      m(e, t, n, r, i, "Warning");
    },
        x = function x(e, n, r, i, o, a, s) {
      var l = i.id,
          p = e + l;t[p] ? (clearTimeout(t[p]), delete t[p]) : l && p ? t[p] = setTimeout(function () {
        u(n, i, r, o, a, s), delete t[p];
      }, 0) : u(n, i, r, o, a, s);
    },
        P = function P() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      n = e;
    };exports.addListener = v, exports.removeListener = d, exports.triggerEvent = u, exports.getListeners = g, exports.disposeEvents = h, exports.raiseWarning = L, exports.raiseError = y, exports.raiseEventGroup = x, exports.setRootSender = P;
  }, {}], 17: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getDepsByType = exports.getDep = exports.addDep = void 0;var e = require("./misc/event-api");var t = {},
        r = {};function n(t) {
      var r = t.getName && t.getName() || t.name;return void 0 === r && (0, e.raiseError)({ id: "Extension" }, "90211", "extension", "Name", new Error("A FusionCharts extension must have a getName API or a name property.")), r && r.toLowerCase();
    }function o(e) {
      var t = e.getType && e.getType() || e.type;return t && t.toLowerCase();
    }function s(e) {
      "string" == typeof e && (t[e] = {});
    }function i(i) {
      var p = void 0,
          a = void 0,
          u = void 0,
          d = void 0,
          y = void 0;a = i.extension ? i.extension : i, p = n(i), u = o(i), y = i.requiresFusionCharts, u ? (!t[u] && s(u), (d = t[u][p] !== a) && (t[u][p] = a)) : p && (d = r[p] !== a) && (r[p] = a), d && (0, e.triggerEvent)("dependencyadded", this, { name: p, type: u }), d && y && a(this);
    }function p(e, n) {
      var o = void 0;if (e = e && e.toLowerCase(), n && t[n]) return t[n][e];if (!n) for (var s in t) {
        if (t.hasOwnProperty(s) && (o = t[s][e])) return o;
      }return r[e];
    }function a() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return "" === e ? t : t[e.toLowerCase()];
    }exports.addDep = i, exports.getDep = p, exports.getDepsByType = a;
  }, { "./misc/event-api": 22 }], 23: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.onDataUpdateCancel = exports.onDataUpdateSuccess = exports.cache = exports.dataStore = void 0;var e = require("./event-api");var a = {},
        t = {};function d(a, t) {
      (0, e.triggerEvent)("dataUpdateCancelled", a.sender, t, void 0, t.failurecallback);
    }function r(d, r) {
      var o = d.sender,
          n = o.__state,
          s = o.id;a[s] = r, t[s] && delete t[s], t[s] = {}, n.dataReady = void 0, n.dataAvailable = !0, !0 === r.silent ? o.options.dataSource = r.data : !0 !== o.options.safeMode || !0 !== n.rendering || o.isActive() ? (delete n.args, o.update(r)) : (n.updatePending = r, (0, e.raiseWarning)(o, "23091255", "run", "::DataHandler~update", "Renderer update was postponed due to async loading.")), (0, e.triggerEvent)("dataUpdated", o, r, void 0, r.successcallback);
    }exports.dataStore = a, exports.cache = t, exports.onDataUpdateSuccess = r, exports.onDataUpdateCancel = d;
  }, { "./event-api": 22 }], 24: [function (require, module, exports) {
    "use strict";
    function e(e) {
      delete e.sender.jsVars._reflowData, e.sender.jsVars._reflowData = {}, delete e.sender.jsVars._reflowClean;
    }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { beforeInitialize: function beforeInitialize(e) {
        var a,
            s = e.sender,
            t = s.jsVars;t.fcObj = s, t.msgStore = t.msgStore || { LoadDataErrorText: "Error in loading data.", XMLLoadingText: "Retrieving data. Please wait", InvalidXMLText: "Invalid data.", ChartNoDataText: "No data to display.", ReadingDataText: "Reading data. Please wait", ChartNotSupported: "Chart type not supported.", PBarLoadingText: "", LoadingText: "Loading chart. Please wait", RenderChartErrorText: "Unable to render chart." }, t.cfgStore = t.cfgStore || {}, t.previousDrawCount = -1, t.drawCount = 0, t._reflowData = {}, s.addEventListener("beforeRender", function (e) {
          return e.detachHandler();
        }), t.userModules instanceof Array || (a = t.userModules, t.userModules = [], "string" == typeof a && (t.userModules = t.userModules.concat(a.split(","))));
      }, beforeDataUpdate: e, beforeDispose: function beforeDispose(a) {
        var s = a.sender.jsVars;s.smartLabel && !s.smartLabel.disposed && s.smartLabel.dispose(), e.apply(undefined, arguments);
      }, beforeRender: function beforeRender(a) {
        delete a.sender.jsVars.drLoadAttempted, e.apply(undefined, arguments);
      }, dataLoadRequested: function dataLoadRequested(e) {
        var a = e.sender,
            s = a.jsVars;delete s.loadError, a.ref && a.options.showDataLoadingMessage ? s.hcObj && !s.hasNativeMessage && s.hcObj.showLoading ? s.hcObj.showMessage(s.msgStore.XMLLoadingText) : a.ref.showChartMessage ? a.ref.showChartMessage("XMLLoadingText") : s.stallLoad = !0 : s.stallLoad = !0;
      }, dataLoadRequestCompleted: function dataLoadRequestCompleted(e) {
        delete e.sender.jsVars.stallLoad;
      }, dataLoadError: function dataLoadError(a) {
        var s = a.sender,
            t = s.jsVars,
            r = s.args,
            o = s.options;delete t.stallLoad, t.loadError = !0, s._chartMessageImageStyle = { imageHAlign: r.dataLoadErrorMessageImageHAlign || o.baseChartMessageImageHAlign, imageVAlign: r.dataLoadErrorMessageImageVAlign || o.baseChartMessageImageVAlign, imageAlpha: r.dataLoadErrorMessageImageAlpha || o.baseChartMessageImageAlpha, imageScale: r.dataLoadErrorMessageImageScale || o.baseChartMessageImageScale }, s._chartMessageStyle = { color: r.dataLoadErrorMessageColor || o.baseChartMessageColor, fontFamily: r.dataLoadErrorMessageFont || o.baseChartMessageFont, fontSize: r.dataLoadErrorMessageFontSize || o.baseChartMessageFontSize }, s.apiInstance.setChartMessage && (s.apiInstance.setChartMessage(o.dataLoadErrorMessage, s), s.apiInstance.drawChartMessage()), s.__state.dataFetchDuringConstruction && delete s.__state.dataFetchDuringConstruction, e.apply(undefined, arguments);
      } };
  }, {}], 18: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = [],
        t = {},
        n = [],
        i = {},
        o = 0,
        r = window,
        a = r.navigator,
        u = /trident/i.test(a.userAgent) && /rv:11/i.test(a.userAgent) && !r.opera,
        s = /msie/i.test(a.userAgent) && !r.opera,
        d = /Edge/.test(a.userAgent),
        c = 16,
        m = {},
        f = "function",
        b = "JOB_",
        l = { instant: 1, render: 1, chartEvents: 1, configure: 2, chartClick: 2, draw: 3, entitydraw: 4, label: 4, animation: 5, tracker: 6, kdTree: 6, postRender: 7 },
        p = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function (e) {
      setTimeout(e, c);
    },
        A = !1,
        g = function g() {
      var t = void 0,
          o = void 0,
          r = void 0,
          a = !0,
          u = new Date().getTime();for (A = !0; a && (t = e[0]);) {
        o = new Date().getTime(), t.OIAF && r || t.executeAfter && !(t.executeAfter < o) || !(o - u < c) ? a = !1 : (e.shift(), n[t.priority] -= 1, i[t.jobID] && !t.executed && (t.executed = !0, delete i[t.jobID], t.job(), r = t.OIAF));
      }e.length ? p(g) : A = !1;
    };(u || s || d) && (p = p.bind(window)), m.addJob = function (t, r, a) {
      var u,
          s,
          d,
          c = 0,
          m = a && a.oneInAFrame,
          l = a && a.addToTop ? r - 1 : r;for ((typeof t === "undefined" ? "undefined" : _typeof(t)) == f ? (s = { job: t, priority: r, OIAF: m, jobID: u = b + ++o + "_" + (r || 1) }, a && a.executionDelay && (s.executeAfter = new Date().getTime() + a.executionDelay)) : s = t, d = 0; d <= l; d++) {
        c += n[d] || 0;
      }return e.splice(c, 0, s), i[s.jobID] = s, n[r] = (n[r] || 0) + 1, A || 1 !== e.length || (m ? p(g) : setTimeout(g, 0)), u;
    }, m.removeJob = function (e) {
      i[e] && delete i[e];
    }, m.updateJob = function (e, t, n, o) {
      return i[e] ? (i[e].job = t, e) : this.addJob(t, n, o);
    }, m.pauseExecution = function (e) {
      return !!i[e] && (t[e] = i[e], void delete i[e]);
    }, m.resumeExecution = function (e) {
      var n = t[e];return !!n && (m.addJob(n, n.priority), void delete t[e]);
    }, exports.default = m, exports.priorityList = l;
  }, {}], 62: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.removeAllEventsFromGraphic = exports._mapSubFnForward = void 0;var e = require("../_internal/lib/lib"),
        t = require("../_internal/misc/event-api"),
        i = require("../_internal/schedular"),
        n = r(i);function r(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = {},
        a = { executionDelay: 16 },
        o = "touchstart",
        h = "click",
        d = function d(e, t) {
      if (e && e.hasOwnProperty && t && t.call) {
        var _i4 = void 0,
            _n2 = void 0,
            _r3 = void 0;for (_i4 in e) {
          if (e.hasOwnProperty(_i4)) if ((_n2 = e[_i4]) instanceof Array) for (_r3 = _n2.length - 1; 0 <= _r3; _r3--) {
            t(_n2[_r3], _i4, _r3);
          } else t(_n2, _i4);
        }
      }
    },
        l = function l(e, t) {
      if (e && e.hasOwnProperty && t && t.call) {
        var _i5 = void 0,
            _n3 = void 0,
            _r4 = void 0,
            _s3 = void 0;for (_i5 in e) {
          if (e.hasOwnProperty(_i5)) if ((_n3 = e[_i5]) instanceof Array) for (_s3 = _n3.length, _r4 = 0; _r4 < _s3; _r4++) {
            t(_n3[_r4], _i5, _r4);
          } else t(_n3, _i5);
        }
      }
    };function c(e, t, i) {
      var n;t && i && (n = function n(e) {
        e.on && e.on(t, i);
      }, l(e.getGraphicalElement(), n), l(e.getChildContainer(), n));
    }function _(e, t, i) {
      var n;t && i && (n = function n(e) {
        e.off && e.off(t, i);
      }, l(e.getGraphicalElement(), n), l(e.getChildContainer(), n));
    }function m(e, i, n) {
      var r, s;if (i && i.hasOwnProperty) for (r in i) {
        i.hasOwnProperty(r) && (s = (0, t.getListeners)(r, n)) && 1 <= s.length && e && e.on(r, i[r]);
      }
    }function f(e, i) {
      var n, r;if (i && i.hasOwnProperty) for (n in i) {
        i.hasOwnProperty(n) && (r = (0, t.getListeners)(n, this)) && 1 <= r.length && e && e.off(n, i[n]);
      }
    }
    var p = function () {
      function p() {
        _classCallCheck(this, p);

        var e = this;e.config = {}, e._jobList = {}, e._components = {}, e._env = {}, e._extListeners = {}, e._state = {}, e._factories = [], e._factoriyNames = {}, e._graphics = {}, e.__drawJob = function () {
          e.updateVisual();
        }, e.__remove = function () {
          e.getState("removed") && e._dispose();
        }, e._setRemoveAnim = function (t, i) {
          var n = e.getFromEnv("animationManager");n.setAnimation({ el: t, component: e, label: i, props: t.__props }), e._setRemoveAnim = function (t, i) {
            n.setAnimation({ el: t, component: e, label: i, props: t.__props });
          };
        }, e.__instantRemoveFn = function (t) {
          var i = e.getFromEnv("animationManager");i.removeElement(t, !0), e.__instantRemoveFn = function (e) {
            return i.removeElement(e, !0);
          };
        }, e.fireEvent("instantiated"), e.__setDefaultConfig();
      }

      _createClass(p, [{
        key: "configure",
        value: function configure(e) {
          this.preConfigure(e), this.configureAttributes(e), this.postConfigure(e), this.invokeFactories();
        }
      }, {
        key: "preConfigure",
        value: function preConfigure(e) {
          this.fireEvent("preconfigure", e);
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes() {
          return this;
        }
      }, {
        key: "postConfigure",
        value: function postConfigure(e) {
          this.fireEvent("postconfigure", e);
        }
      }, {
        key: "prepareAttributes",
        value: function prepareAttributes() {
          var e = this;e.fireEvent("beforeattributeprepared"), e.allocatePosition && e.allocatePosition(), e._mapChildren(function (e) {
            e.prepareAttributes && e.prepareAttributes();
          }), e.fireEvent("attributeprepared");
        }
      }, {
        key: "setDefaults",
        value: function setDefaults() {
          this.__setDefaultConfig(), this._mapChildren(function (e) {
            return e.setDefaults();
          });
        }
      }, {
        key: "__setDefaultConfig",
        value: function __setDefaultConfig() {
          return this;
        }
      }, {
        key: "setData",
        value: function setData(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i = void 0,
              n = this,
              r = n.getLinkedParent();n.asyncDraw(), t || this.setDefaults(), n.configure && n.configure(e), (i = n.getState("change-info")) && i.hasNoExternalEffect || r && r.childChange && r.childChange(i, n.getId());
        }
      }, {
        key: "getName",
        value: function getName() {
          return "generic";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "generic";
        }
      }, {
        key: "getId",
        value: function getId() {
          return this._id || this.setId(), this._id;
        }
      }, {
        key: "setId",
        value: function setId(t) {
          var i;t === e.UNDEF && (i = this.getType() + e.UNDERSCORE + this.getName(), !s[i] && (s[i] = 1), t = i + e.UNDERSCORE + s[i], s[i] += 1), this._id = t;
        }
      }, {
        key: "iterateComponents",
        value: function iterateComponents(e) {
          var t = function t(i, n, r) {
            !1 !== e(i, n, r) && i._mapChildren && i._mapChildren(t);
          };this._mapChildren(t);
        }
      }, {
        key: "_mapChildren",
        value: function _mapChildren(e, t) {
          t ? d(this.getChildren(), e) : l(this.getChildren(), e);
        }
      }, {
        key: "getFromEnv",
        value: function getFromEnv(e) {
          return e ? this._env[e] : this._env;
        }
      }, {
        key: "addToEnv",
        value: function addToEnv(e, t) {
          e && (this._env[e] = t);
        }
      }, {
        key: "deleteFromEnv",
        value: function deleteFromEnv(e) {
          delete this._env[e];
        }
      }, {
        key: "_updateParentEnv",
        value: function _updateParentEnv() {
          var e,
              t,
              i,
              n,
              r = this.getLinkedParent(),
              s = this._env;if (r) {
            if (e = r.getFromEnv(), ((t = function t() {}).prototype = e).constructor = t, i = new t(), s) for (n in s) {
              s.hasOwnProperty(n) && (i[n] = s[n]);
            }this._env = i, this._mapChildren(function (e) {
              e._updateParentEnv && e._updateParentEnv();
            });
          }
        }
      }, {
        key: "addJob",
        value: function addJob(e, t, i, r) {
          var s = this;s._jobList[e] = s._jobList[e] ? n.default.updateJob(s._jobList[e], t, i, r) : n.default.addJob(t, i, r);
        }
      }, {
        key: "removeJob",
        value: function removeJob(e) {
          var t = this._jobList[e];t && (n.default.removeJob(t), delete this._jobList[e]);
        }
      }, {
        key: "removeAllJobs",
        value: function removeAllJobs() {
          var e = void 0,
              t = this._jobList;for (e in t) {
            t.hasOwnProperty(e) && (n.default.removeJob(t[e]), delete t[name]);
          }
        }
      }, {
        key: "asyncDraw",
        value: function asyncDraw() {
          this.addJob("draw", this.__drawJob, i.priorityList && i.priorityList.draw, a);
        }
      }, {
        key: "syncDraw",
        value: function syncDraw() {
          var e = this;e.fireEvent("beforedraw"), e.removeJob("draw"), e.getState("removed") ? e.removingDraw() : e.draw && e.draw(), e.addExtEventListener("animationComplete", e.__remove, e.getFromEnv("animationManager")), e.childrenSyncDraw(), e.setState("dirty", !1), e.setState("parentChanged", !1), e.addJob("draw-complete", function () {
            e.fireEvent("drawn");
          }, i.priorityList.instant);
        }
      }, {
        key: "updateVisual",
        value: function updateVisual() {
          var e = this;e.fireEvent("beforevisualupdate"), e.removeJob("visualupdate"), e.manageSpace && e.manageSpace(), e.prepareAttributes(), e.syncDraw(), e.fireEvent("visualupdated");
        }
      }, {
        key: "removingDraw",
        value: function removingDraw() {
          var e = this;l(e.getChildContainer(), e._setRemoveAnim), l(e.getGraphicalElement(), e._setRemoveAnim), l(e.getContainer(), e._setRemoveAnim);
        }
      }, {
        key: "childrenSyncDraw",
        value: function childrenSyncDraw() {
          this._mapChildren(function (e) {
            e && e.draw && e.syncDraw();
          });
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(i, n, r) {
          var s,
              a = this;return !!(i && i.toLowerCase && (i = i.toLowerCase(), (0, t.addListener)(i, n, a, r))) && ((0, e.isInterActiveEvt)(i) && (s = (0, t.getListeners)(i, a)) && 1 === s.length && (!a._middleListeners && (a._middleListeners = {}), !a._middleListeners[i] && (a._middleListeners[i] = function (t) {
            a.fireEvent(i, e.UNDEF, e.UNDEF, e.UNDEF, t);
          }), c(a, i, a._middleListeners[i])), n);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(i, n) {
          var r;i && i.toLowerCase && (i = i.toLowerCase(), (0, t.removeListener)(i, n, this), (0, e.isInterActiveEvt)(i) && (r = (0, t.getListeners)(i, this)) && 0 === r.length && this._middleListeners && this._middleListeners[i] && _(this, i, this._middleListeners[i]));
        }
      }, {
        key: "fireEvent",
        value: function fireEvent(e, i, n, r, s) {
          (0, t.triggerEvent)(e, this, i, s, n, r);
        }
      }, {
        key: "addExtEventListener",
        value: function addExtEventListener(t, i, n) {
          var r,
              s,
              a,
              d = this;if (n && n.addEventListener) if (e.touchEnabled && n.getType && "legendItem" === n.getType() && "click" === t) {
            if (r = function r() {
              s = new Date().getTime();
            }, a = function a(e) {
              (!s || 500 > new Date().getTime() - s) && i.call(d, e), s = void 0;
            }, n.addEventListener(o, r) && (!d._extListeners[o] && (d._extListeners[o] = []), d._extListeners[o].push({ fn: r, component: n })), n.addEventListener(h, a)) return d._extListeners[h] || (d._extListeners[h] = []), d._extListeners[h].push({ fn: a, component: n }), i;
          } else if (n.addEventListener(t, i)) return d._extListeners[t] || (d._extListeners[t] = []), d._extListeners[t].push({ fn: i, component: n }), i;return !1;
        }
      }, {
        key: "removeExtEventListener",
        value: function removeExtEventListener(e, t, i) {
          var n,
              r,
              s = this;if (i && i.addEventListener && s._extListeners && s._extListeners[e]) for (n = (r = s._extListeners[e]).length - 1; 0 <= n; n -= 1) {
            if (r[n] && r[n].fn === t && r[n].component === i) return i.removeEventListener(e, t), void r.splice(n, 1);
          }
        }
      }, {
        key: "addGraphicalElement",
        value: function addGraphicalElement(t, i, n, r) {
          var s = this._graphics;return n = n || !1, i && (n ? (s[t] === e.UNDEF && (s[t] = []), r ? s[t][r] = i : s[t].push(i)) : (s[t] = i, this.fireEvent("graphicalelementattached", { element: i })), m(i, this._middleListeners, this)), i;
        }
      }, {
        key: "removeGraphicalElement",
        value: function removeGraphicalElement(t) {
          var i = void 0,
              n = this,
              r = n._graphics;l(r, function (s, a, o) {
            s === t && (i = !0, f(s, n._middleListeners), n._setRemoveAnim(s, a), o === e.UNDEF ? delete r[a] : r[a].splice(o, 1));
          }), i && this.fireEvent("graphicalelementremoved", { element: t });
        }
      }, {
        key: "getGraphicalElement",
        value: function getGraphicalElement(e) {
          return void 0 === e ? this._graphics : this._graphics[e];
        }
      }, {
        key: "addChildContainer",
        value: function addChildContainer(t, i) {
          var n = this,
              r = n._childContainers;return i && (r === e.UNDEF && (r = n._childContainers = {}), r[t] = i, m(i, n._middleListeners, n)), i;
        }
      }, {
        key: "removeChildContainer",
        value: function removeChildContainer(e) {
          var t = this,
              i = t._childContainers;i && i[e] && (f(i[e], t._middleListeners), t._setRemoveAnim(i[e], e), delete i[e]);
        }
      }, {
        key: "getChildContainer",
        value: function getChildContainer(t) {
          return this._childContainers === e.UNDEF && (this._childContainers = {}), t ? this._childContainers[t] : this._childContainers;
        }
      }, {
        key: "addContainer",
        value: function addContainer(t, i) {
          var n = this._containers;return i && (n === e.UNDEF && (n = this._containers = {}), n[t] = i), i;
        }
      }, {
        key: "removeContainer",
        value: function removeContainer(e) {
          var t = this._containers;t && t[e] && (this._setRemoveAnim(t[e], e), delete t[e]);
        }
      }, {
        key: "getContainer",
        value: function getContainer(t) {
          return this._containers === e.UNDEF && (this._containers = {}), t ? this._containers[t] : this._containers;
        }
      }, {
        key: "_setLinkedParent",
        value: function _setLinkedParent(e) {
          var t = this._linkedParent;this._linkedParent = e, t !== e && (this.setState("parentChanged", !0), t && this.fireEvent("parentdetached", { oldParent: t }), e && this.fireEvent("parentAttached", { newParent: e })), this._updateParentEnv && this._updateParentEnv();
        }
      }, {
        key: "getLinkedParent",
        value: function getLinkedParent() {
          return this._linkedParent;
        }
      }, {
        key: "setLinkedItem",
        value: function setLinkedItem(t, i) {
          this.linkedItems || (this.linkedItems = {}), (t !== e.UNDEF || i !== e.UNDEF) && (this.linkedItems[t] = i);
        }
      }, {
        key: "getLinkedItem",
        value: function getLinkedItem(t) {
          if (this.linkedItems) return t === e.UNDEF ? this.linkedItems : this.linkedItems[t];
        }
      }, {
        key: "removeLinkedItem",
        value: function removeLinkedItem(e) {
          this.linkedItems && this.linkedItems[e] && delete this.linkedItems[e];
        }
      }, {
        key: "attachChild",
        value: function attachChild(e, t, i) {
          var n = t || e.getType(),
              r = this._components;return !1 === i ? r[n] = e : (!(r[n] && r[n] instanceof Array) && (r[n] = []), r[n].push(e)), e._setLinkedParent(this), this.fireEvent("childattached", { attachedChild: e }), e;
        }
      }, {
        key: "getChild",
        value: function getChild(t) {
          var i,
              n = this._components;return t === e.UNDEF ? n : (this._searchChildren(t, function (e) {
            i = e;
          }), i);
        }
      }, {
        key: "_searchChildren",
        value: function _searchChildren(t, i) {
          var n,
              r,
              s,
              a = this._components;for (r in a) {
            if (a.hasOwnProperty(r)) if ((n = a[r]).constructor === Array) {
              for (s = n.length - 1; 0 <= s; s--) {
                if (n[s].getId && n[s].getId() === t) return i(n[s], s, n);
              }
            } else if (n.getId && n.getId() === t) return i(r, e.UNDEF, a);
          }
        }
      }, {
        key: "detachChild",
        value: function detachChild(t) {
          var i,
              n = this;return t === e.UNDEF ? e.UNDEF : (n._searchChildren(t, function (t, r, s) {
            s && s.constructor === Array ? i = s.splice(r, 1)[0] : (i = s[t], delete s[t]), i._setLinkedParent(e.UNDEF), n.fireEvent("childdetached", { detachedChild: i });
          }), i);
        }
      }, {
        key: "getChildren",
        value: function getChildren(e) {
          return e ? this._components[e] : this._components;
        }
      }, {
        key: "_dispose",
        value: function _dispose() {
          var e,
              t,
              i,
              n,
              r,
              s = this;if (s && s !== window && !0 !== s._disposing) {
            if (s._disposing = !0, s.fireEvent("beforeremove"), (e = s.getLinkedParent()) && e.detachChild && !e._disposing && e.detachChild(this.getId()), s._extListeners) for (n in s._extListeners) {
              for (i = (r = s._extListeners[n]).length - 1; 0 <= i; i--) {
                r[i].component && r[i].component.addEventListener && r[i].component.removeEventListener(n, r[i].fn);
              }
            }for (t in s.removeAllJobs(), s.getFromEnv("paper") && !s.getFromEnv("paper").removed && (l(s.getChildContainer(), s.__instantRemoveFn), l(s.getGraphicalElement(), s.__instantRemoveFn), l(s.getContainer(), s.__instantRemoveFn)), s) {
              s.hasOwnProperty(t) && delete s[t];
            }s.fireEvent("removed");
          }
        }
      }, {
        key: "remove",
        value: function remove(e) {
          var t = this,
              i = e && e.instant;t.setState("removed", !0), t.getChildren() && t._mapChildren(function (t) {
            t && t.remove && t.remove(e);
          }, !0), i && t._dispose();
        }
      }, {
        key: "setState",
        value: function setState(e, t) {
          this._state[e] = t;
        }
      }, {
        key: "getState",
        value: function getState(e) {
          return this._state && this._state[e];
        }
      }, {
        key: "registerFactory",
        value: function registerFactory(e, t, i) {
          if (this._factoriyNames[e]) for (var _t3 = 0, _i6 = this._factories.length, _n4 = !1; _t3 < _i6 && !_n4; _t3 += 1) {
            this._factories[_t3].name === e && (this._factories.splice(_t3, 1), _n4 = !0);
          }this._factories.push({ name: e, factory: t, dep: i }), this._factoriyNames[e] = !0;
        }
      }, {
        key: "deregisterFactory",
        value: function deregisterFactory(e) {
          if (this._factoriyNames[e]) return delete this._factoriyNames[e], this._factories.splice(this._factories.findIndex(function (t) {
            return t.name === e;
          }), 1)[0].factory;
        }
      }, {
        key: "invokeFactories",
        value: function invokeFactories() {
          var e = void 0,
              t = this,
              i = t._factoriyNames,
              n = {},
              r = t._factories,
              s = r.length + 1,
              a = function a(r) {
            var s = void 0;r.dep && r.dep.length && r.dep.forEach(function (e) {
              s = i[e] && !n[e];
            }), s ? e.push(r) : (r.factory(t), n[r.name] = !0);
          };for (; r.length && r.length < s;) {
            e = [], r.forEach(a), s = r.length, r = e;
          }r.length && r.forEach(function (e) {
            return e.factory(t);
          }), this.fireEvent("factoriesinvoked", {});
        }
      }]);

      return p;
    }();

    exports.default = p, exports._mapSubFnForward = l, exports.removeAllEventsFromGraphic = f;
  }, { "../_internal/lib/lib": 20, "../_internal/misc/event-api": 22, "../_internal/schedular": 18 }], 75: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../../core/component-interface"),
        t = r(e);function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = function (_t$default) {
      _inherits(o, _t$default);

      function o() {
        _classCallCheck(this, o);

        return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
      }

      _createClass(o, [{
        key: "getName",
        value: function getName() {
          return "globalStore";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "globalStore";
        }
      }]);

      return o;
    }(t.default);

    exports.default = o;
  }, { "../../core/component-interface": 62 }], 25: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.globalStore = void 0;var e = require("../lib/lib"),
        a = require("./event-api"),
        t = require("../dependency-manager"),
        s = require("../schedular"),
        r = require("./globalstore"),
        o = n(r);function n(e) {
      return e && e.__esModule ? e : { default: e };
    }var i = /\%/,
        g = new o.default(),
        d = function () {
      var e,
          a,
          t = {},
          s = function s() {
        var r,
            o,
            n,
            g,
            d,
            l,
            h,
            c,
            p = 0,
            m = parseInt(a.options.resizeTrackingInterval, 10) || 300,
            M = {},
            u = function u() {
          M.itemVar._containerOffsetW = M.parentEle.offsetWidth, M.itemVar._containerOffsetH = M.parentEle.offsetHeight;
        };for (r in t) {
          p += 1, n = (o = t[r]).jsVars, d = o.ref, !o.disposed && (g = d && d.parentNode) && (l = d.style) && (i.test(l.width) || i.test(l.height)) ? (h = g.offsetWidth, c = g.offsetHeight, !n.resizeLocked && (h && n._containerOffsetW !== h || c && n._containerOffsetH !== c) && (o.resizeTo && o.resizeTo(), M.itemVar = n, M.parentEle = g, setTimeout(u, 1))) : (delete t[r], p -= 1);
        }e = p ? setTimeout(s, m) : clearTimeout(e);
      };return function (r, o, n) {
        var i = r.jsVars,
            g = o || r.ref && r.ref.parentNode || {};a = n, i._containerOffsetW = g.parentNode.offsetWidth, i._containerOffsetH = g.parentNode.offsetHeight, t[r.id] = r, e || (e = setTimeout(s, parseInt(n.options.resizeTrackingInterval, 10) || 300));
      };
    }();function l(r, o, n, l, h, c, p) {
      var m,
          M,
          u,
          f,
          C,
          S,
          b,
          v,
          I,
          y,
          N = o.jsVars,
          E = o.apiInstance,
          w = N.hasNativeMessage,
          A = o.options,
          T = o.args,
          _ = N.secondTimeRender,
          L = i.test(o.width) ? n.offsetWidth : o.width,
          F = i.test(o.height) ? n.offsetHeight : o.height,
          k = function k() {
        E.setChartEvents(), b({ hasRendered: !0, container: n });
      },
          H = function H() {
        var t = m.error instanceof Error;return t && (o._chartMessageImageStyle = { imageHAlign: (0, e.pluck)(T.dataInvalidMessageImageHAlign, A.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, e.pluck)(T.dataInvalidMessageImageVAlign, A.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, e.pluckNumber)(T.dataInvalidMessageImageAlpha, A.baseChartMessageImageAlpha), imageScale: (0, e.pluckNumber)(T.dataInvalidMessageImageScale, A.baseChartMessageImageScale) }, o._chartMessageStyle = { fontFamily: T.dataInvalidMessageFont || A.baseChartMessageFont, fontSize: T.dataInvalidMessageFontSize || A.baseChartMessageFontSize, color: T.dataInvalidMessageColor || A.baseChartMessageColor }, E.createBaseComponent(), E.setChartMessage(A.dataInvalidMessage, o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0, o.__state.dataReady = !1, !p && (0, a.triggerEvent)("dataInvalid", N.fcObj, { error: m.error }, e.UNDEF, function () {
          (0, a.triggerEvent)("dataxmlinvalid", o, {}, [o.id]);
        })), t;
      };if (l = l || o.chartType(), !(u = (0, t.getDep)(l, "chartapi")) && (v = (0, t.getDep)(l, "maps")) && (u = (0, t.getDep)("maps", "chartapi"), y = !0), E && (E.addToEnv("chartWidth", L), E.addToEnv("chartHeight", F)), n.FusionCharts = r.items[o.id], T.asyncRender = (0, e.pluckNumber)(T.asyncRender, 1), b = function b(t) {
        var i = { renderer: "javascript" },
            g = N.fcObj,
            l = g.width,
            c = g.height,
            m = N.overlayButton;if (w = N.hasNativeMessage, N.container = n, N.hcObj = t, N.width = E.getFromEnv("chartWidth"), N.height = E.getFromEnv("chartHeight"), N.instanceAPI = E, t.hasRendered && N.overlayButtonActive && m && (m.innerHTML = e.BLANK, m.appendChild(document.createTextNode(N.overlayButtonMessage)), t.container.appendChild(m)), (/\%/g.test(l) || /\%/g.test(c)) && n && n.parentNode && !r.options.preventTrackResize && d(g, n, r), h && (h({ success: t.hasRendered, ref: n, id: o.id }), t.hasRendered)) {
          if (E.config.hasRendered = !0, !0 === o.disposed) return;w || (g.__state.firstRenderNotified = !0, E.addJob("postFirstRender-fire-rendered", function () {
            (0, a.triggerEvent)("rendered", g, { renderer: "javascript" }, [g.id]);
          }, s.priorityList.postRender));
        }t.hasRendered && N.previousDrawCount < N.drawCount && (i.width = N.width, i.height = N.height, i.drawCount = N.drawCount, i.displayingMessage = w, i.renderer = g.options.renderer, (0, a.triggerEvent)("drawcomplete", g, i, [g.id]), !w && !p && E.addJob("postSecondRender-fire-rendered", function () {
          g.__state && !g.__state.firstRenderNotified && (0, a.triggerEvent)("rendered", g, { renderer: "javascript" }, [g.id]), (0, a.triggerEvent)("renderComplete", g, i);
        }, s.priorityList.postRender));
      }, E && E.getState("initiated")) {
        if ((0, a.triggerEvent)("internal.drawStart", o, { chartType: l, logicName: E.name, logicBase: E.base && E.base.name, defaultSeriesType: E.defaultSeriesType }), E.getState("stallLoad") ? (E.setState("stallLoad", !1), E.setState("state", "initial")) : E.setState("state", "update"), M = (m = o.jsVars && o.jsVars.themeObject && o.jsVars.themeObject.getThemedJSONData() || o.getChartData((0, t.getDepsByType)("transcoder").JSON, !0, !0)).data, E.addToEnv("dataSource", M), E.addToEnv("chart-attrib", M.chart), H()) return;if (E._checkInvalidData() || E._checkInvalidSpecificData()) return E.createBaseComponent(), E.setChartMessage(), E.drawChartMessage(), (0, a.triggerEvent)("nodatatodisplay", o, {}, [o.id]), b && b({ hasRendered: !0, container: n }), void (E.getContainer("parentgroup") && E.getContainer("parentgroup").hide());E.config.hasChartMessage = !1, p || (0, a.triggerEvent)("dataloaded", o, {}, [o.id]), E._removeWaitingJobs(), E.addToEnv("chartWidth", L), E.addToEnv("chartHeight", F), E.setData(M), !o.hasRendered() && E.getFromEnv("paper") && E.setChartEvents(), b({ hasRendered: !0, container: n });
      } else if (E && "base" === l) E.createBaseComponent(), E.setChartMessage(c, o, n), E.drawChartMessage(), h({ success: !0, ref: n, id: o.id });else {
        if (E && "base" === E.getName() && "base" !== l && (E.remove({ instant: !0 }), E = e.UNDEF), !E) {
          if (E = o.apiInstance = new u(), g.attachChild(E, "chartAPI"), E.addToEnv("chartInstance", o), E.addToEnv("chart", E), E.addToEnv("chart-container", n), E.addToEnv("chartWidth", L), E.addToEnv("chartHeight", F), y) for (I in v = v[0]) {
            v.hasOwnProperty(I) && (E.config[I] = v[I]);
          }"base" !== l && (S = new ((0, t.getDep)("ToolTipController"))(n), E.addToEnv("toolTipController", S), E.disposeChartStyleSheet(), E.addEventListener("postconfigure", function (e) {
            E.addJob("postConfigure-lagacy-fn", k, s.priorityList.postRender), e.detachHandler();
          }), E.setState("initiated", !0), o.__state.dataReady = !0), E.addToEnv("core-options", r.options);
        }if (E.config.origRenderWidth = o.__state.renderedWidth, E.config.origRenderHeight = o.__state.renderedHeight, "base" !== l) {
          if (n.jsVars = o.jsVars, f = E.eiMethods, o.ref = n, N.type = l, f && "string" != typeof f) for (C in f) {
            n[C] = f[C];
          }(0, a.triggerEvent)("loaded", o, { type: l, renderer: "javascript" }, [o.id]);
        }if ("base" === l) E.setDummyEImethods(o.chartType()), E.createBaseComponent(), E.setChartMessage(c, o, n), E.drawChartMessage();else if (c !== e.UNDEF) "string" == typeof c && (E.setChartMessage(c, o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0);else if (!E || !E.configure || E && "base" === E.name) o._chartMessageImageStyle = { imageHAlign: (0, e.pluck)(T.typeNotSupportedMessageImageHAlign, A.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, e.pluck)(T.typeNotSupportedMessageImageVAlign, A.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, e.pluckNumber)(T.typeNotSupportedMessageImageAlpha, A.baseChartMessageImageAlpha), imageScale: (0, e.pluckNumber)(T.typeNotSupportedMessageImageScale, A.baseChartMessageImageScale) }, o._chartMessageStyle = { color: T.typeNotSupportedMessageColor || A.baseChartMessageColor, fontFamily: T.typeNotSupportedMessageFont || A.baseChartMessageFont, fontSize: T.typeNotSupportedMessageFontSize || A.baseChartMessageFontSize }, E.setChartMessage(A.typeNotSupportedMessage, o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0;else if (N.message) E.setChartMessage(N.message, o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0;else if (N.loadError) o._chartMessageImageStyle = { imageHAlign: (0, e.pluck)(T.dataLoadErrorMessageImageHAlign, A.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, e.pluck)(T.dataLoadErrorMessageImageVAlign, A.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, e.pluckNumber)(T.dataLoadErrorMessageImageAlpha, A.baseChartMessageImageAlpha), imageScale: (0, e.pluckNumber)(T.dataLoadErrorMessageImageScale, A.baseChartMessageImageScale) }, o._chartMessageStyle = { color: T.dataLoadErrorMessageColor || A.baseChartMessageColor, fontFamily: T.dataLoadErrorMessageFont || A.baseChartMessageFont, fontSize: T.dataLoadErrorMessageFontSize || A.baseChartMessageFontSize }, E.createBaseComponent(), E.setChartMessage(A.dataLoadErrorMessage, o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0;else if (N.stallLoad) E.setState("stallLoad", !0), o._chartMessageImageStyle = { imageHAlign: (0, e.pluck)(T.dataLoadStartMessageImageHAlign, A.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, e.pluck)(T.dataLoadStartMessageImageVAlign, A.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, e.pluckNumber)(T.dataLoadStartMessageImageAlpha, A.baseChartMessageImageAlpha), imageScale: (0, e.pluckNumber)(T.dataLoadStartMessageImageScale, A.baseChartMessageImageScale) }, o._chartMessageStyle = { fontFamily: T.dataLoadStartMessageFont || A.baseChartMessageFont, fontSize: T.dataLoadStartMessageFontSize || A.baseChartMessageFontSize, color: T.dataLoadStartMessageColor || A.baseChartMessageColor }, E.createBaseComponent(), E.setChartMessage(A.dataLoadStartMessage, o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0, b({ hasRendered: !0, container: n });else if ("zoomscatter" !== l || document.createElement("canvas").getContext) {
          if ((0, a.triggerEvent)("internal.drawStart", o, { chartType: l, logicName: E.name, logicBase: E.base && E.base.name, defaultSeriesType: E.defaultSeriesType }), M = (m = o.jsVars && o.jsVars.themeObject && o.jsVars.themeObject.getThemedJSONData() || o.getChartData((0, t.getDepsByType)("transcoder").JSON, !0)).data, E.setState("state", "initial"), !H()) {
            if (p || (0, a.triggerEvent)("dataloaded", o, {}, [o.id]), !0 === E.getFromEnv("chartInstance").disposed) return;if (T.asyncRender && !_ && "base" !== l && (E.createBaseComponent(), E.setChartMessage(E.getFromEnv("chartInstance").options.loadMessage, e.UNDEF, n), E.drawChartMessage(), E.config.hasChartMessage = !1), E.addToEnv("dataSource", M), E.addToEnv("chart-attrib", M.chart), E._checkInvalidData() || E._checkInvalidSpecificData()) return E.createBaseComponent(), E.setChartMessage(), E.drawChartMessage(), (0, a.triggerEvent)("nodatatodisplay", o, {}, [o.id]), void (b && b({ hasRendered: !0, container: n }));E.config.hasChartMessage = !1, E.setData(M);
          }
        } else o._chartMessageImageStyle = { imageHAlign: (0, e.pluck)(T.browserNotSupportedMessageImageHAlign, A.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, e.pluck)(T.browserNotSupportedMessageImageVAlign, A.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, e.pluckNumber)(T.browserNotSupportedMessageImageAlpha, A.baseChartMessageImageAlpha), imageScale: (0, e.pluckNumber)(T.browserNotSupportedMessageImageScale, A.baseChartMessageImageScale) }, o._chartMessageStyle = { color: T.browserNotSupportedMessageColor || A.baseChartMessageColor, fontFamily: T.browserNotSupportedMessageFont || A.baseChartMessageFont, fontSize: T.browserNotSupportedMessageFontSize || A.baseChartMessageFontSize }, E.createBaseComponent(), E.setChartMessage((0, e.pluck)(T.browserNotSupportedMessage, A.browserNotSupportedMessage), o, n), E.drawChartMessage(), w = N.hasNativeMessage = !0;
      }N.secondTimeRender = !0;
    }exports.globalStore = g, exports.default = l;
  }, { "../lib/lib": 20, "./event-api": 22, "../dependency-manager": 17, "../schedular": 18, "./globalstore": 75 }], 102: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = { init: function init(t) {
        var n = t.document,
            i = t.navigator.userAgent,
            r = Math.ceil,
            a = Math.floor;return e = { win: t, containerClass: "fusioncharts-smartlabel-container", classNameWithTag: "fusioncharts-smartlabel-tag", classNameWithTagBR: "fusioncharts-smartlabel-br", maxDefaultCacheLimit: 1e3, classNameReg: /\bfusioncharts-smartlabel-tag\b/, classNameBrReg: /\bfusioncharts-smartlabel-br\b/, spanAdditionRegx: /(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/gi, spanAdditionReplacer: '$1<span class="fusioncharts-smartlabel-tag">$2</span>', spanRemovalRegx: /\<span[^\>]+?fusioncharts-smartlabel-tag[^\>]{0,}\>(.*?)\<\/span\>/gi, xmlTagRegEx: /<[^>][^<]*[^>]+>/i, brRegex: /({br[ ]*})|(<br[ ]*>)|(<br[ ]*\/>)|(<BR[ ]*\/>)|(<br\>)/g, ltgtRegex: /&lt;|&gt;/g, htmlSpecialEntityRegex: /&amp;|&quot;|&lt;|&gt;/g, brReplaceRegex: /<br\/>/gi, testStrAvg: "WgI", parentContainerStyle: { position: "absolute", top: "-9999em", whiteSpace: "nowrap", padding: "0px", width: "1px", height: "1px", overflow: "hidden" }, supportedStyle: { font: "font", fontFamily: "font-family", "font-family": "font-family", fontWeight: "font-weight", "font-weight": "font-weight", fontSize: "font-size", "font-size": "font-size", lineHeight: "line-height", "line-height": "line-height", fontStyle: "font-style", "font-style": "font-style" }, getDocumentSupport: function getDocumentSupport() {
            var e, r, a;return n.getElementsByClassName ? (e = "getElementsByClassName", r = "fusioncharts-smartlabel-tag", a = !0) : (e = "getElementsByTagName", r = "span", a = !1), { isIE: /msie/i.test(i) && !t.opera, hasSVG: !(!t.SVGAngle && !n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")), isHeadLess: / HtmlUnit/.test(i), isWebKit: / AppleWebKit\//.test(i), childRetriverFn: e, childRetriverString: r, noClassTesting: a };
          }, createContainer: function createContainer(e) {
            var t, i;if (e && (e.offsetWidth || e.offsetHeight)) {
              if (e.appendChild) return e.appendChild(i = n.createElement("DIV")), i.className = "fusioncharts-smartlabel-container", i.setAttribute("aria-hidden", "true"), i.setAttribute("role", "presentation"), i;
            } else if ((t = n.getElementsByTagName("body")[0]) && t.appendChild) return (i = n.createElement("DIV")).className = "fusioncharts-smartlabel-container", i.setAttribute("aria-hidden", "true"), i.setAttribute("role", "presentation"), t.appendChild(i), i;
          }, getNearestBreakIndex: function getNearestBreakIndex(e, t, n) {
            if (!e || !e.length) return 0;var i,
                s = n._getWidthFn(),
                l = 0,
                o = 0,
                g = s(e),
                h = g / e.length;if (i = t, l = r(t / h), g < t) return e.length - 1;for (l > e.length && (i = t - g, l = e.length); 0 < i;) {
              if (i = t - s(e.substr(0, l)), !(o = a(i / h))) return l;l += o;
            }for (; 0 > i;) {
              if (i = t - s(e.substr(0, l)), !(o = a(i / h))) return l;l += o;
            }return l;
          }, setLineHeight: function setLineHeight(e) {
            var t = e.fontSize = e.fontSize || e["font-size"] || "12px";return e.lineHeight = e.lineHeight || e["line-height"] || 1.2 * parseInt(t, 10) + "px", e;
          }, _getCleanHeight: function _getCleanHeight(e) {
            return +(e = e.replace(/px/g, ""));
          }, _getDimentionUsingDiv: function _getDimentionUsingDiv() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t = arguments[1];
            var n = t._container;return e instanceof Array && (e = e.join("")), n.innerHTML = e, { width: n.offsetWidth, height: n.offsetHeight };
          }, _getDimentionUsingCanvas: function _getDimentionUsingCanvas() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var n = arguments[1];
            var i = n.ctx,
                r = n.style,
                a = e._getCleanHeight(r.lineHeight);return t instanceof Array ? t = (t = t.join("")).replace(/<br \/>/g, "") : t = t.replace(/<br \/>/g, ""), { width: i.measureText(t).width, height: a };
          }, _hasOnlyBRTag: function _hasOnlyBRTag() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var n,
                i = t.replace(e.brRegex, "<br />").split("<br />"),
                r = i.length;for (n = 0; n < r; n++) {
              if (e.xmlTagRegEx.test(i[n])) return !1;
            }return 1 < r;
          }, _getDimentionOfMultiLineText: function _getDimentionOfMultiLineText() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var n = arguments[1];
            var i,
                r,
                a,
                s = Math.max,
                l = t.replace(e.brRegex, "<br />"),
                o = e._getTextArray(l),
                g = 0,
                h = 0,
                f = n._getWidthFn(),
                u = e._getCleanHeight(n.style.lineHeight),
                c = u,
                p = {};for (i = 0, r = o.length; i < r; i++) {
              "<br />" === o[i] ? (h = s(h, g), g = 0, c += u) : (g += a = f(o[i]), p[o[i]] = a);
            }return { height: c, width: h = s(h, g), detailObj: p };
          }, _getTextArray: function _getTextArray() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var t,
                n,
                i,
                r,
                a,
                s,
                l = [];for (i = (a = e.split("<br />")).length, t = 0; t < i; t++) {
              for (r = (s = a[t].split("")).length, n = 0; n < r; n++) {
                l.push(s[n]);
              }t !== i - 1 && l.push("<br />");
            }return l;
          }, _findLastIndex: function _findLastIndex() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var t = arguments[1];
            var n;for (n = e.length - 1; 0 <= n; n--) {
              if (e[n] === t) return n;
            }return -1;
          } };
      } };exports.default = e;
  }, {}], 103: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("./lib"),
        e = i(t);function i(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = e.default.init("undefined" == typeof window ? void 0 : window),
        n = s.win.document,
        r = s.getDocumentSupport(),
        o = r.isWebKit ? 0 : 4.5;function h(t, e, i) {
      var s;i = 20 > (i = 5 < i ? i : 5) ? i : 20, this.maxContainers = i, this.first = null, this.last = null, this.containers = {}, this.length = 0, this.rootNode = t, e && ((s = n.createElementNS("http://www.w3.org/2000/svg", "svg")).setAttributeNS("http://www.w3.org/2000/svg", "xlink", "http://www.w3.org/1999/xlink"), s.setAttributeNS("http://www.w3.org/2000/svg", "height", "0"), s.setAttributeNS("http://www.w3.org/2000/svg", "width", "0"), this.svgRoot = s, this.rootNode.appendChild(s));
    }h.prototype.get = function (t) {
      var e,
          i,
          n,
          r = this.containers,
          o = this.length,
          h = this.maxContainers,
          l = "";for (i in s.supportedStyle) {
        void 0 !== t[i] && (l += s.supportedStyle[i] + ":" + t[i] + ";");
      }if (!l) return !1;if (n = r[l]) this.first !== n && (n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.next = this.first, n.next.prev = n, this.last === n && (this.last = n.prev), n.prev = null, this.first = n);else {
        if (o >= h) for (e = o - h + 1; e--;) {
          this.removeContainer(this.last);
        }n = this.addContainer(l);
      }return n;
    }, h.prototype._makeDivNode = function (t) {
      var e,
          i = t.keyStr;t.node || (t.node = n.createElement("div"), t.node.className = "fusioncharts-div", this.rootNode.appendChild(t.node)), e = t.node, r.isIE && !r.hasSVG ? e.style.setAttribute("cssText", i) : e.setAttribute("style", i), e.setAttribute("aria-hidden", "true"), e.setAttribute("role", "presentation"), e.style.display = "inline-block", e.innerHTML = s.testStrAvg, t.lineHeight = e.offsetHeight, t.avgCharWidth = e.offsetWidth / 3, r.isBrowserLess ? (!t.svgText && (t.svgText = n.createElementNS("http://www.w3.org/2000/svg", "text"), this.svgRoot.appendChild(e)), (e = t.svgText).setAttribute("style", i), e.textContent = s.testStrAvg, t.lineHeight = e.getBBox().height, t.avgCharWidth = (e.getBBox().width - o) / 3, e.textContent = "...", t.ellipsesWidth = e.getBBox().width - o, e.textContent = ".", t.dotWidth = e.getBBox().width - o) : (e.innerHTML = "...", t.ellipsesWidth = e.offsetWidth, e.innerHTML = ".", t.dotWidth = e.offsetWidth, e.innerHTML = "");
    }, h.prototype.addContainer = function (t) {
      var e;return this.containers[t] = e = { next: null, prev: null, node: null, ellipsesWidth: 0, lineHeight: 0, dotWidth: 0, avgCharWidth: 4, keyStr: t, charCache: {} }, e.next = this.first, e.next && (e.next.prev = e), this.first = e, this.last || (this.last = e), this.length += 1, e;
    }, h.prototype.removeContainer = function (t) {
      var e = t.keyStr;e && this.length && t && (this.length -= 1, t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), this.first === t && (this.first = t.next), this.last === t && (this.last = t.prev), t.node && t.node.parentNode.removeChild(t.node), delete this.containers[e]);
    }, h.prototype.dispose = function () {
      var t,
          e = this.containers;for (t in this.maxContainers = null, e) {
        this.removeContainer(e[t]);
      }this.rootNode.parentNode.removeChild(this.rootNode), this.rootNode = null, this.first = null, this.last = null;
    }, exports.default = h;
  }, { "./lib": 102 }], 43: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("./lib"),
        e = h(t),
        i = require("./container-manager"),
        n = h(i);function h(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = e.default.init("undefined" == typeof window ? void 0 : window),
        r = s.win.document,
        o = s.win.Math,
        a = o.max,
        l = o.round,
        c = "",
        d = { " ": "&nbsp;" },
        g = s.getDocumentSupport(),
        f = g.isWebKit ? 0 : 4.5;function u(t, e, i) {
      var h,
          o,
          a,
          l = !1,
          c = window.document.createElement("canvas");for (o in (i = i || {}).maxCacheLimit = isFinite(a = i.maxCacheLimit) ? a : s.maxDefaultCacheLimit, "string" == typeof t && (t = r.getElementById(t)), (h = s.createContainer(t)).innerHTML = s.testStrAvg, !g.isHeadLess && (g.isIE || h.offsetHeight || h.offsetWidth) || (l = !0), h.innerHTML = "", s.parentContainerStyle) {
        h.style[o] = s.parentContainerStyle[o];
      }this.parentContainer = h, this.ctx = c && c.getContext && c.getContext("2d"), this._containerManager = new n.default(h, l, 10), this._showNoEllipses = !e, this._init = !0, this.style = {}, this.oldStyle = 1, this.options = i, this.setStyle();
    }u.textToLines = function (t) {
      return (t = t || {}).text ? "string" != typeof t.text && (t.text = t.text.toString()) : t.text = "", t.lines = t.text.split(/\n|<br\s*?\/?>/gi), t;
    }, u.prototype._calCharDimWithCache = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var e = arguments[1];
      var i = arguments[2];
      if (!this._init) return !1;var n,
          h,
          s,
          r,
          o,
          a,
          l,
          g,
          f,
          u,
          p = this.options.maxCacheLimit,
          x = this.style || {};return l = this._advancedCache = this._advancedCache || (this._advancedCache = {}), g = this._advancedCacheKey || (this._advancedCacheKey = []), f = t + (x.fontSize || c) + (x.fontFamily || c) + (x.fontWeight || c) + (x.fontStyle || c), u = t + "init" + (x.fontSize || c) + (x.fontFamily || c) + (x.fontWeight || c) + (x.fontStyle || c), !this.ctx && d[t] && (t = d[t]), e ? void 0 === (a = l[u]) && (s = this._getDimention(t.repeat ? t.repeat(i) : Array(i + 1).join(t)).width, r = this._getDimention(t).width, a = l[u] = (s - i * r) / (i + 1), g.push(u), g.length > p && delete l[g.shift()]) : a = 0, (o = l[f]) ? (h = o.split(","), { width: parseFloat(h[0], 10), height: parseFloat(h[1], 10) }) : ((n = this._getDimention(t)).width += a, l[f] = n.width + "," + n.height, g.push(f), g.length > p && delete l[g.shift()], n);
    }, u.prototype._getDimention = function (t) {
      return this.requireDiv || !this.ctx ? s._getDimentionUsingDiv(t, this) : s._getDimentionUsingCanvas(t, this);
    }, u.prototype._getWidthFn = function () {
      var t = this,
          e = t._containerObj.svgText;return e ? function (t) {
        var i, n;return e.textContent = t, 1 > (n = (i = e.getBBox()).width - f) && (n = i.width), n;
      } : function (e) {
        return t.requireDiv || !t.ctx ? s._getDimentionUsingDiv(e, t).width : s._getDimentionUsingCanvas(e, t).width;
      };
    }, u.prototype._setStyleOfCanvas = function () {
      if (this.style !== this.oldStyle) {
        var t,
            e = this,
            i = e.style,
            n = i.fontStyle || i["font-style"] || "normal",
            h = i.fontVariant || i["font-variant"] || "normal",
            r = i.fontWeight || i["font-weight"] || "normal",
            o = i.fontSize || i["font-size"] || "12px",
            a = i.fontFamily || i["font-family"] || "Verdana,sans";o += -1 === o.indexOf("px") ? "px" : "", e.ctx.font = n + " " + h + " " + r + " " + o + " " + a, t = this._containerObj = this._containerManager.get(i), this._containerObj ? (this._container = t.node, this._context = t.context, this._cache = t.charCache, this._lineHeight = t.lineHeight, this._styleNotSet = !1) : this._styleNotSet = !0, t.ellipsesWidth = e.ctx.measureText("...").width, t.dotWidth = e.ctx.measureText(".").width, t.lineHeight = this._lineHeight = t.lineHeight || s._getCleanHeight(i.lineHeight), this.oldStyle = i;
      }
    }, u.prototype._setStyleOfDiv = function () {
      var t,
          e = this.style;this._containerObj = t = this._containerManager.get(e), t.node || this._containerManager._makeDivNode(this._containerObj), this._containerObj ? (this._container = t.node, this._context = t.context, this._cache = t.charCache, this._lineHeight = t.lineHeight, this._styleNotSet = !1) : this._styleNotSet = !0;
    }, u.prototype._updateStyle = function () {
      return this.requireDiv || !this.ctx ? this._setStyleOfDiv() : this._setStyleOfCanvas();
    }, u.prototype.setStyle = function (t) {
      t && (this.style = t, s.setLineHeight(t));
    }, u.prototype.useEllipsesOnOverflow = function (t) {
      return this._init ? (this._showNoEllipses = !t, this) : this;
    }, u.prototype.getSmartText = function (t, e, i, n) {
      if (!this._init) return !1;null == t ? t = "" : "string" != typeof t && (t = t.toString());var h,
          o,
          l,
          c,
          d,
          f,
          u,
          p,
          x,
          _,
          m,
          T,
          y,
          w,
          v,
          H,
          b,
          C,
          S,
          W,
          L,
          M,
          O,
          D,
          j,
          N,
          R,
          B,
          E,
          I,
          F,
          A,
          q,
          z,
          U,
          $ = 0,
          k = -1,
          K = -1,
          V = -1,
          P = 0,
          G = 0,
          J = [],
          Q = 0,
          X = this._showNoEllipses ? "" : "...",
          Y = this.ctx,
          Z = [],
          tt = -1,
          et = -1,
          it = -1,
          nt = function nt(t) {
        for (var e = /\s/, i = (t = t.replace(/^\s\s*/, "")).length; e.test(t.charAt(i -= 1));) {}return t.slice(0, i + 1);
      },
          ht = { text: t, maxWidth: e, maxHeight: i, width: null, height: null, oriTextWidth: null, oriTextHeight: null, oriText: t, isTruncated: !1 };if (U = s.xmlTagRegEx.test(t), q = s._hasOnlyBRTag(t), this.requireDiv = U && !q, this._updateStyle(), R = this._lineHeight, B = this._context, E = this._container, F = (I = this._containerObj).ellipsesWidth, A = I.dotWidth, f = t.replace(s.spanAdditionRegx, "$2"), T = this._getWidthFn(), 1 >= R - i && 0 <= R - i && (i *= 1.2), Y || E) {
        if (!g.isBrowserLess) {
          if (U ? q ? (t = t.replace(s.brRegex, "<br />"), z = s._getDimentionOfMultiLineText(t, this), ht.oriTextWidth = u = z.width, ht.oriTextHeight = p = z.height) : (E.innerHTML = t, ht.oriTextWidth = u = E.offsetWidth, ht.oriTextHeight = p = E.offsetHeight) : (c = t = t.replace(s.ltgtRegex, function (t) {
            return "&lt;" === t ? "<" : ">";
          }), v = this.getOriSize(c, !0, { hasHTMLTag: U, hasOnlyBrTag: q, cleanText: !0 }), ht.oriTextWidth = u = v.width, ht.oriTextHeight = p = v.height), p <= i && u <= e) return ht.width = ht.oriTextWidth = u, ht.height = ht.oriTextHeight = p, ht;if (R > i) return ht.text = "", ht.width = ht.oriTextWidth = 0, ht.height = ht.oriTextHeight = 0, ht;
        }if (t = nt(t).replace(/(\s+)/g, " "), d = this._showNoEllipses ? e : e - F, !U || q) {
          if (h = (J = s._getTextArray(t)).length, o = "", l = [], m = J[0], this._cache[m] ? S = this._cache[m].width : (S = T(m), this._cache[m] = { width: S }), d > S && !q) l = t.substr(0, s.getNearestBreakIndex(t, d, this)).split("");else {
            if (S > e) return ht.text = "", ht.width = ht.oriTextWidth = ht.height = ht.oriTextHeight = 0, ht;X && ((d = e - 2 * A) > S ? X = ".." : (d = e - A) > S ? X = "." : (d = 0, X = ""));
          }if (Q = l.length, P = T(l.join("")), G = this._lineHeight, n) {
            for (; Q < h; Q += 1) {
              if (m = l[Q] = J[Q], "<br />" !== l[Q]) {
                if (this._cache[m] ? S = this._cache[m].width : ((!v || !(S = v.detailObj[m])) && (S = T(m)), this._cache[m] = { width: S }), (P += S) > d && (o || (o = l.slice(0, -1).join("")), P > e)) return ht.text = nt(o) + X, ht.tooltext = ht.oriText, ht.width = a($, P), ht.height = G, ht;
              } else G += this._lineHeight, V = Q, $ = a($, P), P = 0, o = null;
            }return ht.text = l.join(""), ht.width = a($, P), ht.height = G, ht;
          }for (; Q < h; Q += 1) {
            if (" " !== (m = l[Q] = J[Q]) || B || (m = this.ctx ? " " : "&nbsp;"), "<br />" === l[Q]) {
              if ($ = a($, P), (G += this._lineHeight) <= i) {
                V = Q, P = 0, o = null;continue;
              }if (G > i) return o = l.slice(0, -1).join(""), ht.text = nt(o) + X, ht.tooltext = f, ht.width = $, ht.height = G - this._lineHeight, ht;
            }if (this._cache[m] ? S = this._cache[m].width : ((!v || !(S = v.detailObj[m])) && (S = T(m)), this._cache[m] = { width: S }), (P += S) > d && (o || (o = l.slice(0, -1).join("")), P > e)) {
              if ("<br />" === J[Q + 1]) continue;if (K = s._findLastIndex(J.slice(0, l.length), " "), k = s._findLastIndex(J.slice(0, l.length), "-"), K > V ? (P = T(l.slice(V + 1, K).join("")), l.splice(K, 1, "<br />"), V = K, x = K + 1) : k > V ? (k === l.length - 1 ? (P = T(l.slice(V + 1, K).join("")), l.splice(k, 1, "<br />-")) : (P = T(l.slice(V + 1, K).join("")), l.splice(k, 1, "-<br />")), V = k, x = k + 1) : (l.splice(l.length - 1, 1, "<br />" + J[Q]), it = l.length - 2, P = T(l.slice(V + 1, it + 1).join("")), V = it, x = Q), (G += this._lineHeight) > i) return ht.text = nt(o) + X, ht.tooltext = ht.oriText, ht.width = e, ht.height = G - this._lineHeight, ht;$ = a($, P), o = null, q ? P = s._getDimentionOfMultiLineText(l.slice(V + 1).join(""), this).width : (_ = s.getNearestBreakIndex(t.substr(x), d, this), P = T(t.substr(x, _ || 1)), l.length < x + _ && (Q = (l = l.concat(t.substr(l.length, x + _ - l.length).split(""))).length - 1));
            }
          }return $ = a($, P), ht.text = l.join(""), ht.width = $, ht.height = G, ht;
        }for (f = t.replace(s.spanAdditionRegx, "$2"), t = (t = t.replace(s.spanAdditionRegx, s.spanAdditionReplacer)).replace(/(<br\s*\/*\>)/g, '<span class="' + [s.classNameWithTag, " ", s.classNameWithTagBR].join("") + '">$1</span>'), E.innerHTML = t, b = 0, C = (H = E[g.childRetriverFn](g.childRetriverString)).length; b < C; b += 1) {
          W = H[b], (g.noClassTesting || s.classNameReg.test(W.className)) && "" !== (L = W.innerHTML) && (" " === L ? et = Z.length : "-" === L && (tt = Z.length), Z.push({ spaceIdx: et, dashIdx: tt, elem: W }), J.push(L));
        }if (Q = 0, h = Z.length, (S = Z[0].elem.offsetWidth) > e) return ht.text = "", ht.width = ht.oriTextWidth = ht.height = ht.oriTextHeight = 0, ht;if (S > d && !this._showNoEllipses && ((d = e - 2 * A) > S ? X = ".." : (d = e - A) > S ? X = "." : (d = 0, X = "")), y = Z[0].elem.offsetLeft, w = Z[0].elem.offsetTop, n) for (; Q < h; Q += 1) {
          (M = (W = Z[Q].elem).offsetLeft - y + W.offsetWidth) > d && (!N && (N = Q), E.offsetWidth > e && (j = Q, Q = h));
        } else for (; Q < h; Q += 1) {
          O = (W = Z[Q].elem).offsetHeight + (W.offsetTop - w), D = null, (M = W.offsetLeft - y + W.offsetWidth) > d ? (!N && (N = Q), M > e && (K = Z[Q].spaceIdx, k = Z[Q].dashIdx, K > V ? (Z[K].elem.innerHTML = "<br/>", V = K) : k > V ? (Z[k].elem.innerHTML = k === Q ? "<br/>-" : "-<br/>", V = k) : W.parentNode.insertBefore(D = r.createElement("br"), W), W.offsetHeight + W.offsetTop > i ? (D ? D.parentNode.removeChild(D) : V == k ? Z[k].elem.innerHTML = "-" : Z[K].elem.innerHTML = " ", j = Q, Q = h) : N = null)) : O > i && (j = Q, Q = h);
        }if (j < h) {
          for (ht.isTruncated = !0, N = N || j, Q = h - 1; Q >= N; Q -= 1) {
            (W = Z[Q].elem).parentNode.removeChild(W);
          }for (; 0 <= Q; Q -= 1) {
            W = Z[Q].elem, s.classNameBrReg.test(W.className) ? W.parentNode.removeChild(W) : Q = 0;
          }
        }return ht.text = E.innerHTML.replace(s.spanRemovalRegx, "$1").replace(/\&amp\;/g, "&"), ht.isTruncated && (ht.text += X, ht.tooltext = f), ht.height = E.offsetHeight, ht.width = E.offsetWidth, ht;
      }return ht.error = new Error("Body Tag Missing!"), ht;
    }, u.prototype.getOriSize = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this._init) return !1;var n,
          h,
          r,
          o,
          c,
          d,
          g = 0,
          f = 0,
          u = {},
          p = i.hasHTMLTag,
          x = i.hasOnlyBrTag;if (void 0 === p && (p = s.xmlTagRegEx.test(t)), void 0 === x && (x = s._hasOnlyBRTag(t)), this.requireDiv = p && !x, i.cleanText || (t = t.replace(s.ltgtRegex, function (t) {
        return "&lt;" === t ? "<" : ">";
      })), this._updateStyle(), d = this._container, x) return s._getDimentionOfMultiLineText(t, this);if (!e) return this._calCharDimWithCache(t);if (p) return d.innerHTML = t, { width: d.offsetWidth, height: d.offsetHeight };for (o = 0, c = (n = t.split("")).length; o < c; o++) {
        h = n[o], r = this._calCharDimWithCache(h, !1, n.length), f = a(f, r.height), g += r.width, u[h] = r.width;
      }return { width: l(g), height: f, detailObj: u };
    }, u.prototype.dispose = function () {
      return this._init ? (this._containerManager && this._containerManager.dispose && this._containerManager.dispose(), delete this._container, delete this._context, delete this._cache, delete this._containerManager, delete this._containerObj, delete this.id, delete this.style, delete this.parentContainer, delete this._showNoEllipses, this) : this;
    }, exports.default = u;
  }, { "./lib": 102, "./container-manager": 103 }], 26: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = {},
        t = function t(_t4) {
      e[_t4] = !0;
    },
        i = function i(t) {
      return e[t];
    };exports.addFile = t, exports.getFile = i, exports.default = { extension: function extension(e) {
        e.addFile = t, e.getFile = i;
      }, name: "fileStore", type: "plugin", requiresFusionCharts: !0 };
  }, {}], 27: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { options: { chartTypeSourcePath: ["typeSourcePath", ""], product: ["product", "v3"], insertMode: ["insertMode", "replace"], safeMode: ["safeMode", !0], overlayButton: ["overlayButton"], containerBackgroundColor: ["containerBackgroundColor", "#ffffff"], containerBackgroundOpacity: ["containerBackgroundOpacity", 1], containerClassName: ["containerClassName", "fusioncharts-container"], chartType: ["type"], baseChartMessageFont: ["baseChartMessageFont", "Verdana,sans"], baseChartMessageFontSize: ["baseChartMessageFontSize", "10"], baseChartMessageColor: ["baseChartMessageColor", "#666666"], baseChartMessageImageHAlign: ["baseChartMessageImageHAlign", "middle"], baseChartMessageImageVAlign: ["baseChartMessageImageVAlign", "middle"], baseChartMessageImageAlpha: ["baseChartMessageImageAlpha", 100], baseChartMessageImageScale: ["baseChartMessageImageScale", 100], dataLoadStartMessage: ["dataLoadStartMessage", "Retrieving data. Please wait."], dataLoadErrorMessage: ["dataLoadErrorMessage", "Error in loading data."], dataInvalidMessage: ["dataInvalidMessage", "Invalid data."], dataEmptyMessage: ["dataEmptyMessage", "No data to display."], typeNotSupportedMessage: ["typeNotSupportedMessage", "Chart type not supported."], browserNotSupportedMessage: ["browserNotSupportedMessage", "This browser is not supported."], loadMessage: ["loadMessage", "Loading chart. Please wait."], renderErrorMessage: ["renderErrorMessage", "Unable to render chart."], containerElementId: ["renderAt"], renderer: ["renderer"], containerElementType: ["containerElementType"], showChartLoadingMessage: ["showChartLoadingMessage", !0], visibilityTrackingInterval: 300, events: ["events", {}] }, jsVars: {}, attributes: { lang: ["lang", "EN"], id: ["id"] }, link: ["link"], width: ["width", "400"], height: ["height", "300"] };
  }, {}], 28: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../lib/lib");var a = void 0,
        r = void 0,
        s = void 0,
        u = void 0,
        t = void 0,
        l = void 0,
        c = Math.abs,
        n = Math.pow,
        i = Math.round,
        m = "1",
        o = "",
        p = "0",
        b = ".",
        d = ",",
        f = "-",
        h = "2",
        x = "auto",
        g = { formatnumber: "1", formatnumberscale: "1", forcenumberscale: "0", defaultnumberscale: "", numberscaleunit: ["K", "M"], numberscalevalue: [1e3, 1e3], numberprefix: "", numbersuffix: "", decimals: "", forcedecimals: "0", yaxisvaluedecimals: "2", decimalseparator: ".", thousandseparator: ",", thousandseparatorposition: [3], indecimalseparator: "", inthousandseparator: "", sformatnumber: "1", sformatnumberscale: "0", sforcenumberscale: "0", sdefaultnumberscale: "", snumberscaleunit: ["K", "M"], snumberscalevalue: [1e3, 1e3], snumberprefix: "", snumbersuffix: "", sdecimals: "2", sforcedecimals: "0", syaxisvaluedecimals: "2", xFormatNumber: "0", xFormatNumberScale: "0", xforcenumberscale: "0", xDefaultNumberScale: "", xNumberScaleUnit: ["K", "M"], xNumberScaleValue: [1e3, 1e3], xNumberPrefix: "", xNumberSuffix: "" },
        v = { mscombidy2d: { formatnumberscale: "1" } };
    var k = function () {
      function k(a, r) {
        _classCallCheck(this, k);

        var s = this,
            u = a.getName && a.getName(),
            t = s.csConf = (0, e.extend2)({}, g),
            l = v[u];s.cleaneValueCacheStore = {}, s.percentStrCacheStore = {}, l && (t = (0, e.extend2)(t, l)), this.linkedItems = { chart: a }, s.configure(r);
      }

      _createClass(k, [{
        key: "setDefaults",
        value: function setDefaults() {
          var a = this.linkedItems.chart,
              r = a.getName && a.getName(),
              s = this.csConf = (0, e.extend2)({}, g),
              u = v[r];u && (0, e.extend2)(s, u);
        }
      }, {
        key: "configure",
        value: function configure(a) {
          var r,
              s,
              u,
              t,
              l,
              c,
              n,
              i,
              m,
              o,
              p,
              b,
              f,
              v,
              k,
              y,
              S,
              V,
              C,
              N,
              F,
              L,
              M,
              D,
              Y,
              R,
              X,
              I,
              A = this,
              E = A.linkedItems.chart,
              _ = a || E.getFromEnv("chart-attrib"),
              w = E.getName && E.getName(),
              O = E.config,
              $ = A.csConf;if (O || (O = E), A.csConf = $, A.useScaleRecursively = O.useScaleRecursively, (0, e.getValidValue)(_.numberscaleunit) && (r = _.numberscaleunit.split(d)), (s = (0, e.getValidValue)(_.snumberscaleunit, _.numberscaleunit)) && (s = s.split(d)), (u = (0, e.getValidValue)(_.xnumberscaleunit, _.numberscaleunit)) && (u = u.split(d)), (t = (0, e.getValidValue)(_.ticknumberscaleunit, _.numberscaleunit)) && (t = t.split(d)), (l = (0, e.getValidValue)(_.ynumberscaleunit, _.numberscaleunit)) && (l = l.split(d)), (0, e.getValidValue)(_.numberscalevalue) && (c = _.numberscalevalue.split(d)), (p = (0, e.getValidValue)(_.snumberscalevalue, _.numberscalevalue)) && (p = p.split(d)), (n = (0, e.getValidValue)(_.xnumberscalevalue, _.numberscalevalue)) && (n = n.split(d)), (i = (0, e.getValidValue)(_.ticknumberscalevalue, _.numberscalevalue)) && (i = i.split(d)), (m = (0, e.getValidValue)(_.ynumberscalevalue, _.numberscalevalue)) && (m = m.split(d)), (0, e.getValidValue)(_.thousandseparatorposition)) for (S = (o = _.thousandseparatorposition.split(d)).length, C = g.thousandseparatorposition[0]; S--;) {
            0 >= (V = parseInt(o[S], 10)) && (V = C), C = o[S] = V;
          }N = (0, e.pluckNumber)(_.scalerecursively, 0), F = (0, e.pluckNumber)(_.sscalerecursively, N), L = (0, e.pluckNumber)(_.xscalerecursively, N), M = (0, e.pluckNumber)(_.maxscalerecursion, -1), D = (0, e.pluckNumber)(_.smaxscalerecursion, M), Y = (0, e.pluckNumber)(_.xmaxscalerecursion, M), R = (0, e.getValidValue)(_.scaleseparator, " "), X = (0, e.getValidValue)(_.sscaleseparator, R), I = (0, e.getValidValue)(_.xscaleseparator, R), M || (M = -1), A.baseConf = y = { cacheStore: [], formatnumber: (0, e.pluck)(_.formatnumber, $.formatnumber), formatnumberscale: (0, e.pluck)(_.formatnumberscale, O.formatnumberscale, $.formatnumberscale), forcenumberscale: (0, e.pluck)(_.forcenumberscale, $.forcenumberscale), defaultnumberscale: (0, e.getFirstValue)(_.defaultnumberscale, $.defaultnumberscale), numberscaleunit: (0, e.pluck)(r, $.numberscaleunit).concat(), numberscalevalue: (0, e.pluck)(c, $.numberscalevalue).concat(), numberprefix: (0, e.getFirstValue)(_.numberprefix, $.numberprefix), numbersuffix: (0, e.getFirstValue)(_.numbersuffix, $.numbersuffix), decimalprecision: parseInt(_.decimals === x ? $.decimalprecision : (0, e.pluck)(_.decimals, _.decimalprecision, O.decimals, $.decimals, O.decimalprecision, $.decimalprecision), 10), forcedecimals: (0, e.pluck)(_.forcedecimals, $.forcedecimals), decimalseparator: (0, e.pluck)(_.decimalseparator, $.decimalseparator), thousandseparator: (0, e.pluck)(_.thousandseparator, $.thousandseparator), thousandseparatorposition: (0, e.pluck)(o, $.thousandseparatorposition), indecimalseparator: (0, e.getFirstValue)(_.indecimalseparator, $.indecimalseparator), inthousandseparator: (0, e.getFirstValue)(_.inthousandseparator, $.inthousandseparator), scalerecursively: N, maxscalerecursion: M, scaleseparator: R }, (0, e.getValidValue)(y.inthousandseparator) && (A.baseConf._REGinthousandseparator = new RegExp((0, e.regescape)(y.inthousandseparator), "g")), (0, e.getValidValue)(y.indecimalseparator) && (A.baseConf._REGindecimalseparator = new RegExp((0, e.regescape)(y.indecimalseparator))), A.Y = [], b = { cacheStore: [], formatnumber: y.formatnumber, formatnumberscale: y.formatnumberscale, forcenumberscale: y.forcenumberscale, defaultnumberscale: y.defaultnumberscale, numberscaleunit: y.numberscaleunit.concat(), numberscalevalue: y.numberscalevalue.concat(), numberprefix: y.numberprefix, numbersuffix: y.numbersuffix, decimalprecision: y.decimalprecision, forcedecimals: y.forcedecimals, decimalseparator: y.decimalseparator, thousandseparator: y.thousandseparator, thousandseparatorposition: y.thousandseparatorposition, indecimalseparator: y.indecimalseparator, inthousandseparator: y.inthousandseparator, scalerecursively: N, maxscalerecursion: M, scaleseparator: R }, (!O.useScaleRecursively || (b.numberscalevalue && b.numberscalevalue.length) != (b.numberscaleunit && b.numberscaleunit.length)) && (b.scalerecursively = N = 0), v = { cacheStore: [], formatnumber: b.formatnumber, formatnumberscale: b.formatnumberscale, forcenumberscale: b.forcenumberscale, defaultnumberscale: b.defaultnumberscale, numberscaleunit: b.numberscaleunit.concat(), numberscalevalue: b.numberscalevalue.concat(), numberprefix: b.numberprefix, numbersuffix: b.numbersuffix, decimalprecision: parseInt((0, e.pluck)(_.yaxisvaluedecimals, b.decimalprecision, 2), 10), forcedecimals: (0, e.pluck)(_.forceyaxisvaluedecimals, b.forcedecimals), decimalseparator: b.decimalseparator, thousandseparator: b.thousandseparator, thousandseparatorposition: b.thousandseparatorposition.concat(), indecimalseparator: b.indecimalseparator, inthousandseparator: b.inthousandseparator, scalerecursively: N, maxscalerecursion: M, scaleseparator: R }, k = { cacheStore: [], formatnumber: (0, e.pluck)(_.sformatnumber, g.sformatnumber), formatnumberscale: (0, e.pluck)(_.sformatnumberscale, g.sformatnumberscale), forcenumberscale: (0, e.pluck)(_.sforcenumberscale, g.sforcenumberscale), defaultnumberscale: (0, e.getFirstValue)(_.sdefaultnumberscale, b.defaultnumberscale), numberscaleunit: (0, e.pluck)(s, g.snumberscaleunit).concat(), numberscalevalue: (0, e.pluck)(p, g.snumberscalevalue).concat(), numberprefix: (0, e.getFirstValue)(_.snumberprefix, g.snumberprefix), numbersuffix: (0, e.getFirstValue)(_.snumbersuffix, g.snumbersuffix), decimalprecision: parseInt((0, e.pluck)(_.syaxisvaluedecimals, _.sdecimals, _.decimals, g.sdecimals), 10), forcedecimals: (0, e.pluck)(_.forcesyaxisvaluedecimals, _.sforcedecimals, _.forcedecimals, g.sforcedecimals), decimalseparator: (0, e.pluck)(_.decimalseparator, g.decimalseparator), thousandseparator: (0, e.pluck)(_.thousandseparator, g.thousandseparator), thousandseparatorposition: b.thousandseparatorposition.concat(), indecimalseparator: (0, e.pluck)(_.indecimalseparator, g.indecimalseparator), inthousandseparator: (0, e.pluck)(_.inthousandseparator, g.inthousandseparator), scalerecursively: F, maxscalerecursion: D, scaleseparator: X }, (f = (0, e.extend2)({}, k)).decimalprecision = parseInt((0, e.pluck)(_.sdecimals, _.decimals, _.syaxisvaluedecimals, g.sdecimals), 10), f.forcedecimals = (0, e.pluck)(_.sforcedecimals, _.forcedecimals, _.forcesyaxisvaluedecimals, g.sforcedecimals), f.cacheStore = [], (!O.useScaleRecursively || (k.numberscalevalue && k.numberscalevalue.length) != (k.numberscaleunit && k.numberscaleunit.length)) && (k.scalerecursively = F = 0), /^(bubble|scatter|selectscatter|zoomscatter)$/gi.test(w) && (v.formatnumber = (0, e.pluck)(_.yformatnumber, v.formatnumber), v.formatnumberscale = (0, e.pluck)(_.yformatnumberscale, v.formatnumberscale), v.forcenumberscale = (0, e.pluck)(_.yforcenumberscale, v.forcenumberscale), v.defaultnumberscale = (0, e.getFirstValue)(_.ydefaultnumberscale, v.defaultnumberscale), v.numberscaleunit = (0, e.pluck)(l, v.numberscaleunit), v.numberscalevalue = (0, e.pluck)(m, v.numberscalevalue), v.numberprefix = (0, e.pluck)(_.ynumberprefix, v.numberprefix), v.numbersuffix = (0, e.pluck)(_.ynumbersuffix, v.numbersuffix), b.formatnumber = (0, e.pluck)(_.yformatnumber, b.formatnumber), b.formatnumberscale = (0, e.pluck)(_.yformatnumberscale, b.formatnumberscale), b.forcenumberscale = (0, e.pluck)(_.yforcenumberscale, b.forcenumberscale), b.defaultnumberscale = (0, e.getFirstValue)(_.ydefaultnumberscale, b.defaultnumberscale), b.numberscaleunit = (0, e.pluck)(_.ynumberscaleunit, b.numberscaleunit.concat()), b.numberscalevalue = (0, e.pluck)(_.ynumberscalevalue, b.numberscalevalue.concat()), b.numberprefix = (0, e.pluck)(_.ynumberprefix, b.numberprefix), b.numbersuffix = (0, e.pluck)(_.ynumbersuffix, b.numbersuffix)), /^(pie2d|pie3d|doughnut2d|doughnut3d|marimekko|pareto2d|pareto3d)$/.test(w) && (b.decimalprecision = (0, e.pluck)(_.decimals, h)), N && (b.numberscalevalue.push(1), b.numberscaleunit.unshift(b.defaultnumberscale), v.numberscalevalue.push(1), v.numberscaleunit.unshift(v.defaultnumberscale)), F && (k.numberscalevalue.push(1), k.numberscaleunit.unshift(k.defaultnumberscale), f.numberscalevalue.push(1), f.numberscaleunit.unshift(f.defaultnumberscale)), A.Y[0] = { yAxisLabelConf: v, dataLabelConf: b }, A.Y[1] = { yAxisLabelConf: k, dataLabelConf: f }, A.paramLabels = b, A.param1 = v, A.param2 = k, A.paramLabels2 = f, A.paramX = { cacheStore: [], formatnumber: (0, e.pluck)(_.xformatnumber, y.formatnumber), formatnumberscale: (0, e.pluck)(_.xformatnumberscale, y.formatnumberscale), forcenumberscale: (0, e.pluck)(_.xforcenumberscale, y.forcenumberscale), defaultnumberscale: (0, e.getFirstValue)(_.xdefaultnumberscale, y.defaultnumberscale), numberscaleunit: (0, e.pluck)(u, y.numberscaleunit.concat()), numberscalevalue: (0, e.pluck)(n, y.numberscalevalue.concat()), numberprefix: (0, e.pluck)(_.xnumberprefix, y.numberprefix), numbersuffix: (0, e.pluck)(_.xnumbersuffix, y.numbersuffix), decimalprecision: parseInt((0, e.pluck)(_.xaxisvaluedecimals, _.xaxisvaluesdecimals, y.decimalprecision, 2), 10), forcedecimals: (0, e.pluck)(_.forcexaxisvaluedecimals, 0), decimalseparator: y.decimalseparator, thousandseparator: y.thousandseparator, thousandseparatorposition: y.thousandseparatorposition.concat(), indecimalseparator: y.indecimalseparator, inthousandseparator: y.inthousandseparator, scalerecursively: L, maxscalerecursion: Y, scaleseparator: I }, A.paramLegend = (0, e.extend2)((0, e.extend2)({}, y), { cacheStore: [], decimalprecision: parseInt((0, e.pluckNumber)(_.legendvaluedecimals, y.decimalprecision, 2), 10), forcedecimals: (0, e.pluckNumber)(_.legendvalueforcedecimals, y.forcedecimals, 0), formatnumberscale: (0, e.pluck)(_.legendvalueformatnumberscale, y.formatnumberscale), forcenumberscale: (0, e.pluck)(_.legendvalueforcenumberscale, y.forcenumberscale), formatnumber: (0, e.pluck)(_.legendvalueformatnumber, y.formatnumber) }), N && (A.paramLegend.numberscalevalue.push(1), A.paramLegend.numberscaleunit.unshift(A.paramLegend.defaultnumberscale)), O.useScaleRecursively && (A.paramX.numberscalevalue && A.paramX.numberscalevalue.length) == (A.paramX.numberscaleunit && A.paramX.numberscaleunit.length) || (A.paramX.scalerecursively = L = 0), L && (A.paramX.numberscalevalue.push(1), A.paramX.numberscaleunit.unshift(A.paramX.defaultnumberscale)), A.paramScale = { cacheStore: [], formatnumber: (0, e.pluck)(_.tickformatnumber, y.formatnumber), formatnumberscale: (0, e.pluck)(_.tickformatnumberscale, y.formatnumberscale), forcenumberscale: (0, e.pluck)(_.tickforcenumberscale, y.forcenumberscale), defaultnumberscale: (0, e.getFirstValue)(_.tickdefaultnumberscale, y.defaultnumberscale), numberscaleunit: (0, e.pluck)(t, y.numberscaleunit.concat()), numberscalevalue: (0, e.pluck)(i, y.numberscalevalue.concat()), numberprefix: (0, e.pluck)(_.ticknumberprefix, y.numberprefix), numbersuffix: (0, e.pluck)(_.ticknumbersuffix, y.numbersuffix), decimalprecision: parseInt((0, e.pluck)(_.tickvaluedecimals, y.decimalprecision, h), 10), forcedecimals: (0, e.pluck)(_.forcetickvaluedecimals, y.forcedecimals, 0), decimalseparator: y.decimalseparator, thousandseparator: y.thousandseparator, thousandseparatorposition: y.thousandseparatorposition.concat(), indecimalseparator: y.indecimalseparator, inthousandseparator: y.inthousandseparator, scalerecursively: N, maxscalerecursion: M, scaleseparator: R }, N && (A.paramScale.numberscalevalue.push(1), A.paramScale.numberscaleunit.unshift(A.paramScale.defaultnumberscale)), A.timeConf = { inputDateFormat: (0, e.pluck)(_.inputdateformat, _.dateformat, "mm/dd/yyyy"), outputDateFormat: (0, e.pluck)(_.outputdateformat, _.inputdateformat, _.dateformat, "mm/dd/yyyy"), days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], daySuffix: ["", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"] }, A.cleaneValueCacheStore = {}, A.percentStrCacheStore = {};
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var e = this;e.Y && delete e.Y, e.cleaneValueCacheStore && delete e.cleaneValueCacheStore, e.percentStrCacheStore && delete e.percentStrCacheStore, e.paramLabels && delete e.paramLabels, e.param1 && delete e.param1, e.param2 && delete e.param2, e.paramLabels2 && delete e.paramLabels2, e.csConf && delete e.csConf, e.chart && delete e.chart, e.baseConf && delete e.baseConf, e.timeConf && delete e.timeConf, e.paramX && delete e.paramX, e.paramScale && delete e.paramScale;
        }
      }, {
        key: "parseMLAxisConf",
        value: function parseMLAxisConf(a, r) {
          var s,
              u,
              t,
              l,
              n,
              i,
              m,
              o,
              p = this.baseConf,
              b = this.csConf,
              f = (0, e.pluckNumber)(a.scalerecursively, p.scalerecursively),
              h = (0, e.pluckNumber)(a.maxscalerecursion, p.maxscalerecursion),
              v = (0, e.getValidValue)(a.scaleseparator, p.scaleseparator);if (r = (0, e.pluckNumber)(r, this.Y.length), (0, e.getValidValue)(a.numberscaleunit) && (u = a.numberscaleunit.split(d)), (0, e.getValidValue)(a.numberscalevalue) && (t = a.numberscalevalue.split(d)), h || (h = -1), (0, e.getValidValue)(a.thousandseparatorposition)) for (i = (n = a.thousandseparatorposition.split(d)).length, o = g.thousandseparatorposition[0]; i--;) {
            (m = (0, e.pluckNumber)(c(n[i]))) ? o = m : m = o, n[i] = m;
          }s = { cacheStore: [], formatnumber: (0, e.pluck)(a.formatnumber, p.formatnumber), formatnumberscale: (0, e.pluck)(a.formatnumberscale, p.formatnumberscale), forcenumberscale: (0, e.pluck)(a.forcenumberscale, p.forcenumberscale), defaultnumberscale: (0, e.getFirstValue)(a.defaultnumberscale, p.defaultnumberscale), numberscaleunit: (0, e.pluck)(u, p.numberscaleunit).concat(), numberscalevalue: (0, e.pluck)(t, p.numberscalevalue).concat(), numberprefix: (0, e.getFirstValue)(a.numberprefix, p.numberprefix), numbersuffix: (0, e.getFirstValue)(a.numbersuffix, p.numbersuffix), forcedecimals: (0, e.pluck)(a.forcedecimals, p.forcedecimals), decimalprecision: parseInt(a.decimals === x ? b.decimalprecision : (0, e.pluck)(a.decimals, p.decimalprecision), 10), decimalseparator: (0, e.pluck)(a.decimalseparator, p.decimalseparator), thousandseparator: (0, e.pluck)(a.thousandseparator, p.thousandseparator), thousandseparatorposition: (0, e.pluck)(n, p.thousandseparatorposition), indecimalseparator: (0, e.getFirstValue)(a.indecimalseparator, p.indecimalseparator), inthousandseparator: (0, e.getFirstValue)(a.inthousandseparator, p.inthousandseparator), scalerecursively: f, maxscalerecursion: h, scaleseparator: v }, this.useScaleRecursively && (s.numberscalevalue && s.numberscalevalue.length) == (s.numberscaleunit && s.numberscaleunit.length) || (s.scalerecursively = f = 0), l = { cacheStore: [], formatnumber: s.formatnumber, formatnumberscale: s.formatnumberscale, forcenumberscale: s.forcenumberscale, defaultnumberscale: s.defaultnumberscale, numberscaleunit: s.numberscaleunit.concat(), numberscalevalue: s.numberscalevalue.concat(), numberprefix: s.numberprefix, numbersuffix: s.numbersuffix, decimalprecision: parseInt((0, e.pluck)(a.yaxisvaluedecimals, s.decimalprecision, 2), 10), forcedecimals: (0, e.pluck)(a.forceyaxisvaluedecimals, s.forcedecimals), decimalseparator: s.decimalseparator, thousandseparator: s.thousandseparator, thousandseparatorposition: s.thousandseparatorposition.concat(), indecimalseparator: s.indecimalseparator, inthousandseparator: s.inthousandseparator, scalerecursively: f, maxscalerecursion: h, scaleseparator: v }, f && (s.numberscalevalue.push(1), s.numberscaleunit.unshift(s.defaultnumberscale), l.numberscalevalue.push(1), l.numberscaleunit.unshift(l.defaultnumberscale)), this.Y[r] = { dataLabelConf: s, yAxisLabelConf: l };
        }
      }, {
        key: "percentValue",
        value: function percentValue(e) {
          var r,
              s = this.percentStrCacheStore[e];return s === a && (r = isNaN(this.paramLabels.decimalprecision) ? "2" : this.paramLabels.decimalprecision, s = this.percentStrCacheStore[e] = l(t(e, r, this.paramLabels.forcedecimals), this.paramLabels.decimalseparator, this.paramLabels.thousandseparator, this.paramLabels.thousandseparatorposition) + "%"), s;
        }
      }, {
        key: "getCleanValue",
        value: function getCleanValue(e, r) {
          var s,
              t = this.cleaneValueCacheStore[e];return (t === a || r) && (s = u(e, this.baseConf), this.cleaneValueCacheStore[e] = t = isNaN(s) ? null : r ? c(s) : s), t;
        }
      }, {
        key: "dataLabels",
        value: function dataLabels(e, s) {
          var u,
              t = this.Y[s] || (s ? this.Y[1] : this.Y[0]);return (u = (t = t && t.dataLabelConf || this.baseConf).cacheStore[e]) === a && (u = t.cacheStore[e] = r(e, t)), u;
        }
      }, {
        key: "yAxis",
        value: function yAxis(e, s) {
          var u,
              t = this.Y[s] || (s ? this.Y[1] : this.Y[0]);return (u = (t = t && t.yAxisLabelConf || this.baseConf).cacheStore[e]) === a && (u = t.cacheStore[e] = r(e, t, !0)), u;
        }
      }, {
        key: "xAxis",
        value: function xAxis(e) {
          var s = this.paramX.cacheStore[e];return s === a && (s = this.paramX.cacheStore[e] = r(e, this.paramX, !0)), s;
        }
      }, {
        key: "sYAxis",
        value: function sYAxis(e) {
          var s,
              u = this.Y[1];return (s = (u = u && u.yAxisLabelConf || this.baseConf).cacheStore[e]) === a && (s = u.cacheStore[e] = r(e, u)), s;
        }
      }, {
        key: "scale",
        value: function scale(e) {
          var s = this.paramScale.cacheStore[e];return s === a && (s = this.paramScale.cacheStore[e] = r(e, this.paramScale)), s;
        }
      }, {
        key: "legendValue",
        value: function legendValue(e) {
          var s = this.paramLegend.cacheStore[e];return s === a && (s = this.paramLegend.cacheStore[e] = r(e, this.paramLegend)), s;
        }
      }, {
        key: "legendPercentValue",
        value: function legendPercentValue(e) {
          var r,
              s = this.percentStrCacheStore[e],
              u = this.paramLegend;return s === a && (r = isNaN(u.decimalprecision) ? "2" : u.decimalprecision, s = this.percentStrCacheStore[e] = l(t(e, r, u.forcedecimals), u.decimalseparator, u.thousandseparator, u.thousandseparatorposition) + "%"), s;
        }
      }, {
        key: "getDateValue",
        value: function getDateValue(a) {
          var r, s, u, t, l;return a && !/\//.test(this.timeConf.inputDateFormat) && (a = a.replace(new RegExp(this.timeConf.inputDateFormat.replace(/[a-z]/gi, o).slice(0, 1), "g"), "/")), a = /^dd/.test(this.timeConf.inputDateFormat) && a && a.replace(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/, "$2/$1/$3") || a, !(l = (r = new Date(a)).getTime()) && a && /\:/.test(a) && (a = a.split(":"), s = (0, e.pluckNumber)(a[0], 0), u = (0, e.pluckNumber)(a[1], 0), t = (0, e.pluckNumber)(a[2], 0), s = 23 < s ? 24 === s && 0 === u && 0 === t ? s : 23 : s, u = 59 < u ? 59 : u, t = 59 < t ? 59 : t, (r = new Date()).setHours(s), r.setMinutes(u), r.setSeconds(t), l = r.getTime()), { ms: l, date: r };
        }
      }, {
        key: "getFormattedDate",
        value: function getFormattedDate(a, r) {
          var s = "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && a || new Date(a),
              u = this.timeConf,
              t = (0, e.pluck)(r, u.outputDateFormat),
              l = s.getFullYear(),
              c = s.getMonth(),
              n = s.getDate(),
              i = s.getDay(),
              m = s.getMinutes(),
              b = s.getSeconds(),
              d = s.getHours();return m = 9 < m ? o + m : p + m, b = 9 < b ? o + b : p + b, d = 9 < d ? o + d : p + d, t.match(/dnl/) && (t = t.replace(/dnl/gi, u.days[i])), t.match(/dns/) && (t = t.replace(/dns/gi, u.days[i] && u.days[i].substr(0, 3))), t.match(/dd/) && (t = t.replace(/dd/gi, n)), t.match(/mnl/) && (t = t.replace(/mnl/gi, u.months[c])), t.match(/mns/) && (t = t.replace(/mns/gi, u.months[c] && u.months[c].substr(0, 3))), t.match(/mm/) && (t = t.replace(/mm/gi, c + 1)), t.match(/yyyy/) && (t = t.replace(/yyyy/gi, l)), t.match(/yy/) && (t = t.replace(/yy/gi, (l % 1e3 % 100 + "").replace(/^(\d)$/, "0$1"))), t.match(/hh12/) && (t = t.replace(/hh12/gi, d % 12 || 12)), t.match(/hh/) && (t = t.replace(/hh/gi, d)), t.match(/mn/) && (t = t.replace(/mn/gi, m)), t.match(/ss/) && (t = t.replace(/ss/gi, b)), t.match(/ampm/) && (t = t.replace(/ampm/gi, 12 > d ? "AM" : "PM")), t.match(/ds/) && (t = t.replace(/ds/gi, u.daySuffix[n])), t;
        }
      }]);

      return k;
    }();

    r = function r(a, _r5, u) {
      var c,
          n,
          i,
          m,
          p,
          d,
          f,
          x,
          g,
          v,
          k,
          y = Math.abs;if (null !== a) {
        if (c = (a = +a) + o, n = 1 == _r5.formatnumberscale ? _r5.defaultnumberscale : o, v = (g = c.split(b)[1]) ? g.length : _r5.forcedecimals ? h : o, 1 == _r5.formatnumberscale && (c = (k = s(a, _r5.defaultnumberscale, _r5.numberscalevalue, _r5.numberscaleunit, _r5.scalerecursively, _r5.forcenumberscale)).value, a = k.value, n = k.scale), _r5.scalerecursively && 0 !== _r5.formatnumberscale && "0" !== _r5.formatnumberscale) {
          if (i = k.value, m = k.scale, p = -1 == _r5.maxscalerecursion ? i.length : Math.min(i.length, _r5.maxscalerecursion), 1 == _r5.formatnumber) for (c = "", x = 0; x < p; x++) {
            f = (d = 0 === x ? i[x] : y(i[x])) + o, x == p - 1 && (f = t(d, (0, e.pluck)(_r5.decimalprecision, v), _r5.forcedecimals)), c = c + l(f, _r5.decimalseparator, _r5.thousandseparator, _r5.thousandseparatorposition) + m[x] + (x < p - 1 ? _r5.scaleseparator : "");
          } else for (c = "", x = 0; x < p; x++) {
            c = c + (0 === x ? i[x] : y(i[x]) + o) + m[x] + (x < p - 1 ? _r5.scaleseparator : "");
          }c = (_r5.numberprefix || o) + c + (_r5.numbersuffix || o);
        } else 1 == _r5.formatnumber && (c = t(a, (0, e.pluck)(_r5.decimalprecision, v), _r5.forcedecimals), c = l(c, _r5.decimalseparator, _r5.thousandseparator, _r5.thousandseparatorposition, u)), c = (_r5.numberprefix || o) + c + n + (_r5.numbersuffix || o);return c;
      }
    }, s = function s(a, r, _s4, u, t, l) {
      var c,
          n,
          i,
          m,
          p = Math.abs,
          b = {},
          d = r,
          f = 0,
          h = [],
          x = [];if (l = (0, e.pluckNumber)(l) || 0, t) {
        for (c = (0, e.pluckNumber)(_s4[0]) || 1e3, f = 0; f < _s4.length; f++) {
          if (i = (0, e.pluckNumber)(_s4[f]) || 1e3, !(p(+a) >= i && f < _s4.length - 1)) {
            0 == f && r === o && l ? (a = +a / c, h.push(a), x.push(u[1] || o)) : (1 == f && r === o && l ? (n = a + (h.length ? h.pop() : 0), x.pop(), h.push(n)) : h.push(a), x.push(u[f]));break;
          }a = (a - (m = a % i)) / i, 0 == f && 0 !== m && u[f] === o && l ? (h.push(m / c), x.push(u[1] || o)) : 0 !== m && (1 == f && r === o && l ? (n = m + (h.length ? h.pop() : 0), x.pop(), h.push(n)) : h.push(m), x.push(u[f]));
        }h.reverse(), x.reverse(), b.value = h, b.scale = x;
      } else {
        if (_s4.length === u.length) for (f = 0; f < _s4.length; f++) {
          if (!((i = (0, e.pluckNumber)(_s4[f]) || 1e3) && p(+a) >= i)) {
            0 == f && r === o && l && (d = u[0] || o, a = +a / i);break;
          }d = u[f] || o, a = +a / i;
        }b.value = a, b.scale = d;
      }return b;
    }, t = function t(e, a, r) {
      var s, u, t, l;if (0 >= a) return i(e) + o;if (isNaN(a)) return 12 < (e += o).length && -1 != e.indexOf(b) && (a = 12 - e.split(b)[0].length, s = n(10, a), e = u = i(e * s) / s + o), e;if (s = n(10, a), u = i(e * s) / s + o, 1 == r) for (-1 == u.indexOf(b) && (u += ".0"), t = a - u.split(b)[1].length, l = 1; l <= t; l++) {
        u += p;
      }return u;
    }, l = function l(e, a, r, s, u) {
      var t,
          l,
          c,
          n,
          i = +e,
          m = o,
          p = !1,
          d = o,
          h = o,
          x = 0,
          g = 0;if (isNaN(i)) return o;if (1e15 < i) return t = u ? 1 : 14, i.toExponential(t);if (x = 0, g = e.length, -1 != e.indexOf(b) && (m = e.substring(e.indexOf(b) + 1, e.length), g = e.indexOf(b)), 0 > i && (p = !0, x = 1), (l = (d = e.substring(x, g)).length) < (n = s[c = s.length - 1])) h = d;else for (; l >= n;) {
        h = (l - n ? r : o) + d.substr(l - n, n) + h, (l -= n) < (n = 0 >= (c -= 1) ? s[0] : s[c]) && (h = d.substring(l, 0) + h);
      }return m != o && (h = h + a + m), 1 == p && (h = f + h), h;
    }, u = function u(e, a) {
      return e += o, a._REGinthousandseparator && (e = e.replace(a._REGinthousandseparator, o)), a._REGindecimalseparator && (e = e.replace(a._REGindecimalseparator, b)), e = parseFloat(e), isFinite(e) ? e : NaN;
    }, exports.default = k;
  }, { "../lib/lib": 20 }], 124: [function (require, module, exports) {
    var global = arguments[3];
    var n = arguments[3];Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../raphael.lib");exports.default = function (n) {
      var r,
          t,
          f = /[\.\/]/,
          i = /\s*,\s*/,
          o = function o(n, e) {
        return n - e;
      },
          l = { n: {} },
          a = function a() {
        for (var n = 0, e = this.length; n < e; n++) {
          if (void 0 !== this[n]) return this[n];
        }
      },
          u = function u() {
        for (var n = this.length; --n;) {
          if (void 0 !== this[n]) return this[n];
        }
      },
          s = Object.prototype.toString,
          p = String,
          c = Array.isArray || function (n) {
        return n instanceof Array || "[object Array]" == s.call(n);
      },
          h = function h(n, f) {
        var i,
            l = t,
            s = (0, e.getArrayCopy)(arguments),
            p = Array.prototype.slice.call(s, 2),
            c = h.listeners(n),
            g = 0,
            d = [],
            v = {},
            y = [],
            x = r;y.firstDefined = a, y.lastDefined = u, r = n, t = 0;for (var b = 0, w = c.length; b < w; b++) {
          "zIndex" in c[b] && (d.push(c[b].zIndex), 0 > c[b].zIndex && (v[c[b].zIndex] = c[b]));
        }for (d.sort(o); 0 > d[g];) {
          if (i = v[d[g++]], y.push(i.apply(f, p)), t) return t = l, y;
        }for (b = 0; b < w; b++) {
          if ("zIndex" in (i = c[b])) {
            if (i.zIndex == d[g]) {
              if (y.push(i.apply(f, p)), t) break;do {
                if ((i = v[d[++g]]) && y.push(i.apply(f, p)), t) break;
              } while (i);
            } else v[i.zIndex] = i;
          } else if (y.push(i.apply(f, p)), t) break;
        }return t = l, r = x, y;
      };return h._events = l, h.listeners = function (n) {
        var e,
            r,
            t,
            i,
            o,
            a,
            u,
            s,
            p = c(n) ? n : n.split(f),
            h = l,
            g = [h],
            d = [];for (i = 0, o = p.length; i < o; i++) {
          for (s = [], a = 0, u = g.length; a < u; a++) {
            for (r = [(h = g[a].n)[p[i]], h["*"]], t = 2; t--;) {
              (e = r[t]) && (s.push(e), d = d.concat(e.f || []));
            }
          }g = s;
        }return d;
      }, h.separator = function (n) {
        n ? (n = "[" + (n = p(n).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", f = new RegExp(n)) : f = /[\.\/]/;
      }, h.on = function (n, e) {
        if ("function" != typeof e) return function () {};for (var r = c(n) ? c(n[0]) ? n : [n] : p(n).split(i), t = 0, o = r.length; t < o; t++) {
          !function (n) {
            for (var r, t = c(n) ? n : p(n).split(f), i = l, o = 0, a = t.length; o < a; o++) {
              i = (i = i.n).hasOwnProperty(t[o]) && i[t[o]] || (i[t[o]] = { n: {} });
            }for (i.f = i.f || [], o = 0, a = i.f.length; o < a; o++) {
              if (i.f[o] == e) {
                r = !0;break;
              }
            }r || i.f.push(e);
          }(r[t]);
        }return function (n) {
          +n == +n && (e.zIndex = +n);
        };
      }, h.f = function (n) {
        var r = (0, e.getArrayCopy)(arguments),
            t = [].slice.call(r, 1);return function () {
          h.apply(null, [n, null].concat(t).concat([].slice.call(r, 0)));
        };
      }, h.stop = function () {
        t = 1;
      }, h.nt = function (n) {
        var e = c(r) ? r.join(".") : r;return n ? new RegExp("(?:\\.|\\/|^)" + n + "(?:\\.|\\/|$)").test(e) : e;
      }, h.nts = function () {
        return c(r) ? r : r.split(f);
      }, h.off = h.unbind = function (n, e) {
        if (n) {
          var r = c(n) ? c(n[0]) ? n : [n] : p(n).split(i);if (1 < r.length) for (var t = 0, o = r.length; t < o; t++) {
            h.off(r[t], e);
          } else {
            r = c(n) ? n : p(n).split(f);var a,
                u,
                s,
                g,
                d,
                v = [l],
                y = [];for (t = 0, o = r.length; t < o; t++) {
              for (g = 0; g < v.length; g += s.length - 2) {
                if (s = [g, 1], a = v[g].n, "*" != r[t]) a[r[t]] && (s.push(a[r[t]]), y.unshift({ n: a, name: r[t] }));else for (u in a) {
                  a.hasOwnProperty(u) && (s.push(a[u]), y.unshift({ n: a, name: u }));
                }v.splice.apply(v, s);
              }
            }for (t = 0, o = v.length; t < o; t++) {
              for (a = v[t]; a.n;) {
                if (e) {
                  if (a.f) {
                    for (g = 0, d = a.f.length; g < d; g++) {
                      if (a.f[g] == e) {
                        a.f.splice(g, 1);break;
                      }
                    }a.f.length || delete a.f;
                  }for (u in a.n) {
                    if (a.n.hasOwnProperty(u) && a.n[u].f) {
                      var x = a.n[u].f;for (g = 0, d = x.length; g < d; g++) {
                        if (x[g] == e) {
                          x.splice(g, 1);break;
                        }
                      }x.length || delete a.n[u].f;
                    }
                  }
                } else for (u in delete a.f, a.n) {
                  a.n.hasOwnProperty(u) && a.n[u].f && delete a.n[u].f;
                }a = a.n;
              }
            }n: for (t = 0, o = y.length; t < o; t++) {
              for (u in (a = y[t]).n[a.name].f) {
                continue n;
              }for (u in a.n[a.name].n) {
                continue n;
              }delete a.n[a.name];
            }
          }
        } else h._events = l = { n: {} };
      }, h.once = function (n, e) {
        var r = function r() {
          return h.off(n, r), e.apply(this, arguments);
        };return h.on(n, r);
      }, h.version = "0.5.3", h.toString = function () {
        return "You are running Eve 0.5.3";
      }, n.eve = h, h;
    }("undefined" == typeof window ? void 0 === n ? null : n : window);
  }, { "../raphael.lib": 84 }], 87: [function (require, module, exports) {
    var global = arguments[3];
    var t = arguments[3];Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./eve/eve"),
        n = a(e),
        r = require("./raphael.lib"),
        i = a(r);function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var o = "undefined" == typeof window ? void 0 === t ? null : t : window;function s(t) {
      var e, i, a;return void 0 === s._url && (s._url = f), s.is(t, E) ? u ? t() : n.default.on("raphael.DOMload", t) : s.is(t, y) ? s._engine.create[g](s, t.splice(0, 3 + s.is(t[0], v))).add(t) : (i = (0, r.getArrayCopy)(arguments), e = Array.prototype.slice.call(i, 0), s.is(e[e.length - 1], E) ? (a = e.pop(), u ? a.call(s._engine.create[g](s, e)) : n.default.on("raphael.DOMload", function () {
        a.call(s._engine.create[g](s, e));
      })) : s._engine.create[g](s, arguments));
    }s.upgrade = "1.0.0", s.version = "2.1.0", s.eve = n.default;var u,
        l,
        h,
        c,
        f = "",
        p = " ",
        d = "hasOwnProperty",
        g = "apply",
        m = "concat",
        v = "number",
        x = "string",
        y = "array",
        b = "object",
        _ = "finite",
        w = "split",
        k = "none",
        A = "#000",
        C = "null",
        E = "function",
        F = ",",
        S = "$1",
        T = /R/i,
        N = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
        I = Array.prototype.splice,
        L = function () {}.hasOwnProperty("prototype"),
        M = { doc: o.document, win: o },
        P = M.doc,
        O = M.win,
        B = s.supportsTouch = "createTouch" in P,
        R = "m",
        j = "l",
        D = "M",
        V = "L",
        q = [],
        z = /[a-z]/i,
        X = function X(t, e, n) {
      var r = e.toLowerCase(),
          i = [],
          a = 0;if (q.length = 0, n.replace(Ct, function (t, e) {
        e && q.push(+e);
      }), "r" === r) c.push([e][m](q));else if ("z" === r) c.push([e]);else if (q.length >= N[r]) {
        for (; a < q.length;) {
          a % N[r] ? i.push(q[a]) : (i.length && c.push(i) && (i = []), i.push(e, q[a])), a++;
        }c.push(i);
      }
    },
        Y = s.supportsOnlyTouch = B && !(O.navigator.maxTouchPoints || O.navigator.msMaxTouchPoints),
        G = function G() {},
        Q = s.ca = s.customAttributes = G.prototype,
        U = function U() {
      this.ca = this.customAttributes = new G(), this._CustomAttributes = function () {}, this._CustomAttributes.prototype = this.ca, this._elementsById = {}, this.id = s._oid++, (0, n.default)("raphael.new", this);
    },
        H = s.fn = U.prototype = s.prototype,
        W = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel dragstart dragmove dragend".split(" "),
        $ = s._touchMap = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
        Z = s._dragEventMap = { dragstart: "mousedown", dragmove: "mousemove", dragend: "mouseup" },
        J = String,
        K = O.parseFloat,
        tt = O.parseInt,
        et = Math,
        nt = et.max,
        rt = et.min,
        it = et.abs,
        at = et.pow,
        ot = et.cos,
        st = et.sin,
        ut = et.sqrt,
        lt = et.round,
        ht = et.PI,
        ct = ht / 180,
        ft = 180 / ht,
        pt = J.prototype.toLowerCase,
        dt = J.prototype.toUpperCase,
        gt = Object.prototype.toString,
        mt = /[, ]+/,
        vt = /\{(\d+)\}/g,
        xt = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        yt = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        bt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        _t = /,?([achlmqrstvxz]),?/gi,
        wt = /,?[a-z],?/i,
        kt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        At = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        Ct = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        Et = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        Ft = { hs: 1, rg: 1 },
        St = s._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", "clip-path": "", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "about:blank", "letter-spacing": 0, "line-height": 12, "vertical-align": "middle", opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", visibility: "", title: "", transform: "", rotation: 0, width: 0, x: 0, y: 0, "shape-rendering": "auto", alpha: "number" },
        Tt = s._availableAnimAttrs = { blur: "number", "clip-rect": "csv", "clip-path": "path", cx: "number", cy: "number", fill: "colour", "fill-opacity": "number", "font-size": "number", height: "number", opacity: "number", path: "path", r: "number", rx: "number", ry: "number", stroke: "colour", "stroke-opacity": "number", "stroke-width": "number", transform: "transform", width: "number", x: "number", y: "number", color: "colour", borderColor: "colour", borderWidth: "number", alpha: "number", "text-bound": "text-bound" },
        Nt = {},
        It = function It(t, e) {
      return K(t) - K(e);
    },
        Lt = function Lt() {},
        Mt = function Mt(t) {
      return t;
    },
        Pt = s._rectPath = function (t, e, n, r, i) {
      return i ? [[D, t + i, e], [j, n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], [j, 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], [j, 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], [j, 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]] : [[D, t, e], [j, n, 0], [j, 0, r], [j, -n, 0], ["z"]];
    },
        Ot = function Ot(t, e, n, r) {
      return null == r && (r = n), [[D, t, e], [R, 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
    },
        Bt = s._getPath = { group: function group() {
        return !1;
      }, path: function path(t) {
        return t.attr("path");
      }, circle: function circle(t) {
        var e = t.attrs;return Ot(e.cx, e.cy, e.r);
      }, ellipse: function ellipse(t) {
        var e = t.attrs;return Ot(e.cx, e.cy, e.rx, e.ry);
      }, rect: function rect(t) {
        var e = t.attrs;return Pt(e.x, e.y, e.width, e.height, e.r);
      }, image: function image(t) {
        var e = t.attrs;return Pt(e.x, e.y, e.width, e.height);
      }, text: function text(t) {
        var e = t._getBBox();return Pt(e.x, e.y, e.width, e.height);
      } },
        Rt = s.mapPath = function (t, e) {
      if (!e) return t;var n, r, i, a, o, s, u;for (i = 0, o = (t = fe(t).slice(0)).length; i < o; i++) {
        for (a = 1, s = (u = t[i] = t[i].slice(0)).length; a < s; a += 2) {
          n = e.x(u[a], u[a + 1]), r = e.y(u[a], u[a + 1]), u[a] = n, u[a + 1] = r;
        }
      }return t;
    },
        jt = s._lastArgIfGroup = function (t, e) {
      var n = t.length - 1,
          r = t[n];if (r && r.constructor === s.el.constructor && "group" === r.type) return e && (t[n] = void 0, delete t[n], I.call(t, n, 1)), r;
    },
        Dt = s._serializeArgs = function (t) {
      var e,
          n,
          r,
          i,
          a = t[0];if (s.is(a, b) && !s.is(a, y) && "group" !== a.type) for (n = a, a.path && (e = a.path) && !s.is(e, x) && !s.is(e[0], y) && (e += f), r = 1, i = arguments.length; r < i; r += 2) {
        n[arguments[r]] || (n[arguments[r]] = arguments[r + 1]);
      } else for (n = {}, r = 1, i = arguments.length; r < i; r += 2) {
        n[arguments[r]] = t[(r - 1) / 2] || arguments[r + 1];
      }return n;
    },
        Vt = s.is = function (t, e) {
      return e === _ ? !Et[d](+t) : e === y ? t instanceof Array : (e !== b || t !== h && null !== t) && (e == C && null === t || e == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t || e == b && t === Object(t) || e == y && Array.isArray && Array.isArray(t) || gt.call(t).slice(8, -1).toLowerCase() === e);
    },
        qt = s.clone = L ? function (t) {
      if (Object(t) !== t) return t;var e = new t.constructor();for (var n in t) {
        "prototype" !== n && t[d](n) && (e[n] = qt(t[n]));
      }return e;
    } : function (t) {
      if (Object(t) !== t) return t;var e = new t.constructor();for (var n in t) {
        t[d](n) && (e[n] = qt(t[n]));
      }return e;
    },
        zt = o.Node;function Xt(t) {
      this._comparator = t, this._elements = [];
    }zt && !zt.prototype.contains && (zt.prototype.contains = function (t) {
      for (; t = t.parentNode;) {
        if (t === this) return !0;
      }return !1;
    }), s._g = M, s.merge = r.merge, s.extend = i.default, s.createUUID = function (t, e) {
      return function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase();
      };
    }(/[xy]/g, function (t) {
      var e = 0 | 16 * et.random();return ("x" === t ? e : 8 | 3 & e).toString(16);
    }), s._radial_gradient = /^x?r(?:\(([^\)]*?)\))?/, s._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, s.getElementID = function (t) {
      return "rr-" + t;
    }, Xt.prototype.isEmpty = function () {
      return 0 === this.size();
    }, Xt.prototype.peek = function () {
      return this.isEmpty() ? null : this._elements[0];
    }, Xt.prototype.deq = function () {
      var t = this.peek(),
          e = this._elements.pop(),
          n = this.size();if (0 === n) return t;this._elements[0] = e;for (var r = 0; r < n;) {
        var i = r,
            a = 2 * r + 1,
            o = 2 * r + 2;if (a < n && 0 <= this._compare(a, i) && (i = a), o < n && 0 <= this._compare(o, i) && (i = o), i === r) break;this._swap(i, r), r = i;
      }return t;
    }, Xt.prototype.enq = function (t) {
      for (var e = this._elements.push(t), n = e - 1; 0 < n;) {
        var r = Math.floor((n - 1) / 2);if (0 >= this._compare(n, r)) break;this._swap(r, n), n = r;
      }return e;
    }, Xt.prototype.size = function () {
      return this._elements.length;
    }, Xt.prototype._compare = function (t, e) {
      return this._comparator(this._elements[t], this._elements[e]);
    }, Xt.prototype._swap = function (t, e) {
      var n = this._elements[t];this._elements[t] = this._elements[e], this._elements[e] = n;
    }, s.type = O.ENABLE_RED_CANVAS && (O.CanvasRenderingContext2D || P.createElement("canvas").getContext) ? "CANVAS" : O.SVGAngle || P.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", s.svg = !((s.vml = "VML" === s.type) || (s.canvas = "CANVAS" === s.type)), s._Paper = U, s._id = 0, s._oid = 0, s.rad = function (t) {
      return t % 360 * ct;
    }, s.deg = function (t) {
      return t * ft % 360;
    };var _Yt = function Yt(t) {
      if (s.vml) {
        var e,
            n = /^\s+|\s+$/g;try {
          var i = new ActiveXObject("htmlfile");i.write("<body>"), i.close(), e = i.body;
        } catch (n) {
          e = createPopup().document.body;
        }var a = e.createTextRange();_Yt = (0, r.cacher)(function (t) {
          try {
            e.style.color = J(t).replace(n, f);var r = a.queryCommandValue("ForeColor");return "#" + ("000000" + (r = (255 & r) << 16 | 65280 & r | (16711680 & r) >>> 16).toString(16)).slice(-6);
          } catch (t) {
            return k;
          }
        });
      } else {
        var o = M.doc.createElement("i");o.title = "Raphaël Colour Picker", o.style.display = k, M.doc.body.appendChild(o), _Yt = (0, r.cacher)(function (t) {
          return o.style.color = t, M.doc.defaultView.getComputedStyle(o, f).getPropertyValue("color");
        });
      }return _Yt(t);
    },
        Gt = function Gt() {
      return "hsb(" + [this.h, this.s, this.b] + ")";
    },
        Qt = function Qt() {
      return "hsl(" + [this.h, this.s, this.l] + ")";
    },
        Ut = function Ut() {
      return this.hex;
    },
        Ht = function Ht(t, e, n) {
      if (null == e && Vt(t, b) && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && Vt(t, x)) {
        var r = s.getRGB(t);t = r.r, e = r.g, n = r.b;
      }return (1 < t || 1 < e || 1 < n) && (t /= 255, e /= 255, n /= 255), [t, e, n];
    },
        Wt = function Wt(t, e, n, r) {
      var i = { r: t *= 255, g: e *= 255, b: n *= 255, hex: s.rgb(t, e, n), toString: Ut };return Vt(r, _) && (i.opacity = r), i;
    };function $t() {
      return this.hex;
    }function Zt(t, e) {
      for (var n, r = [], i = 0, a = t.length; a - 2 * !e > i; i += 2) {
        n = [{ x: +t[i - 2], y: +t[i - 1] }, { x: +t[i], y: +t[i + 1] }, { x: +t[i + 2], y: +t[i + 3] }, { x: +t[i + 4], y: +t[i + 5] }], e ? i ? a - 4 == i ? n[3] = { x: +t[0], y: +t[1] } : a - 2 == i && (n[2] = { x: +t[0], y: +t[1] }, n[3] = { x: +t[2], y: +t[3] }) : n[0] = { x: +t[a - 2], y: +t[a - 1] } : a - 4 == i ? n[3] = n[2] : !i && (n[0] = { x: +t[i], y: +t[i + 1] }), r.push(["C", (-n[0].x + 6 * n[1].x + n[2].x) / 6, (-n[0].y + 6 * n[1].y + n[2].y) / 6, (n[1].x + 6 * n[2].x - n[3].x) / 6, (n[1].y + 6 * n[2].y - n[3].y) / 6, n[2].x, n[2].y]);
      }return r;
    }s.color = function (t) {
      var e;return s.is(t, b) && "h" in t && "s" in t && "b" in t ? (e = s.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : s.is(t, b) && "h" in t && "s" in t && j in t ? (e = s.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (s.is(t, x) && (t = s.getRGB(t)), s.is(t, b) && "r" in t && "g" in t && "b" in t ? (e = s.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = s.rgb2hsb(t), t.v = e.b) : (t = { hex: k }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = Ut, t;
    }, s.hsb2rgb = function (t, e, n, r) {
      var i, a, o, s, u;return this.is(t, b) && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = (t = t.h).o), s = (u = n * e) * (1 - it((t = (t *= 360) % 360 / 60) % 2 - 1)), i = a = o = n - u, Wt(i += [u, s, 0, 0, s, u][t = ~~t], a += [s, u, u, s, 0, 0][t], o += [0, 0, s, u, u, s][t], r);
    }, s.hsl2rgb = function (t, e, n, r) {
      var i, a, o, s, u;return this.is(t, b) && "h" in t && "s" in t && j in t && (n = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < n) && (t /= 360, e /= 100, n /= 100), s = (u = 2 * e * (.5 > n ? n : 1 - n)) * (1 - it((t = (t *= 360) % 360 / 60) % 2 - 1)), i = a = o = n - u / 2, Wt(i += [u, s, 0, 0, s, u][t = ~~t], a += [s, u, u, s, 0, 0][t], o += [0, 0, s, u, u, s][t], r);
    }, s.rgb2hsb = function (t, e, n) {
      var r, i;return t = (n = Ht(t, e, n))[0], e = n[1], n = n[2], { h: ((0 === (i = (r = nt(t, e, n)) - rt(t, e, n)) ? null : r === t ? (e - n) / i : r === e ? (n - t) / i + 2 : (t - e) / i + 4) + 360) % 6 * 60 / 360, s: 0 === i ? 0 : i / r, b: r, toString: Gt };
    }, s.rgb2hsl = function (t, e, n) {
      var r, i, a, o;return t = (n = Ht(t, e, n))[0], e = n[1], n = n[2], r = ((i = nt(t, e, n)) + (a = rt(t, e, n))) / 2, { h: ((0 === (o = i - a) ? null : i === t ? (e - n) / o : i === e ? (n - t) / o + 2 : (t - e) / o + 4) + 360) % 6 * 60 / 360, s: 0 === o ? 0 : .5 > r ? o / (2 * r) : o / (2 - 2 * r), l: r, toString: Qt };
    }, s._path2string = function () {
      return this.join(F).replace(_t, S);
    }, s._cacher = r.cacher, s.getRGB = (0, r.cacher)(function (t) {
      var e, n, r, i, a, o, u;return t && Vt(t, b) && "opacity" in t && (e = t.opacity), !t || (t = J(t)).indexOf("-") + 1 ? { r: -1, g: -1, b: -1, hex: k, error: 1, toString: $t } : t === k ? { r: -1, g: -1, b: -1, hex: k, toString: $t } : (Ft[d](t.toLowerCase().substring(0, 2)) || "#" === t.charAt() || (t = _Yt(t)), (u = t.match(xt)) ? (u[2] && (i = tt(u[2].substring(5), 16), r = tt(u[2].substring(3, 5), 16), n = tt(u[2].substring(1, 3), 16)), u[3] && (i = tt((a = u[3].charAt(3)) + a, 16), r = tt((a = u[3].charAt(2)) + a, 16), n = tt((a = u[3].charAt(1)) + a, 16)), u[4] && (o = u[4][w](bt), n = K(o[0]), "%" === o[0].slice(-1) && (n *= 2.55), r = K(o[1]), "%" === o[1].slice(-1) && (r *= 2.55), i = K(o[2]), "%" === o[2].slice(-1) && (i *= 2.55), "rgba" === u[1].toLowerCase().slice(0, 4) && (e = K(o[3])), o[3] && "%" === o[3].slice(-1) && (e /= 100)), u[5] ? (o = u[5][w](bt), n = K(o[0]), "%" === o[0].slice(-1) && (n *= 2.55), r = K(o[1]), "%" === o[1].slice(-1) && (r *= 2.55), i = K(o[2]), "%" === o[2].slice(-1) && (i *= 2.55), ("deg" === o[0].slice(-3) || "°" === o[0].slice(-1)) && (n /= 360), "hsba" === u[1].toLowerCase().slice(0, 4) && (e = K(o[3])), o[3] && "%" === o[3].slice(-1) && (e /= 100), s.hsb2rgb(n, r, i, e)) : u[6] ? (o = u[6][w](bt), n = K(o[0]), "%" === o[0].slice(-1) && (n *= 2.55), r = K(o[1]), "%" === o[1].slice(-1) && (r *= 2.55), i = K(o[2]), "%" === o[2].slice(-1) && (i *= 2.55), ("deg" === o[0].slice(-3) || "°" === o[0].slice(-1)) && (n /= 360), "hsla" === u[1].toLowerCase().slice(0, 4) && (e = K(o[3])), o[3] && "%" === o[3].slice(-1) && (e /= 100), s.hsl2rgb(n, r, i, e)) : ((u = { r: n, g: r, b: i, toString: $t }).hex = "#" + (16777216 | i | r << 8 | n << 16).toString(16).slice(1), s.is(e, _) && (u.opacity = e), u)) : { r: -1, g: -1, b: -1, hex: k, error: 1, toString: $t });
    }, s), s.tintshade = (0, r.cacher)(function (t, e) {
      var n,
          r = s.getRGB(t),
          i = 255;return 0 > e && (e *= -1, i = 0), 1 < e && (e = 1), (n = 0 === e ? r : { r: i - (i - r.r) * e, g: i - (i - r.g) * e, b: i - (i - r.b) * e, toString: $t }).hex = s.rgb(n.r, n.g, n.b), r.error && (n.error = r.error), "opacity" in r ? (n.rgba = "rgba(" + [n.r, n.g, n.b, r.opacity].join(",") + ")", n.opacity = r.opacity) : n.rgba = "rgb(" + [n.r, n.g, n.b].join(",") + ")", n;
    }, s), s.rgb = (0, r.cacher)(function (t, e, n) {
      return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1);
    }), s.sanitizePath = function (t) {
      var e;return e = t.join ? t.join(F) : t, T.test(e) ? e = s._pathToAbsolute(e) : _t.test(wt) && (e = e.replace(_t, S)), e;
    }, s.parsePathString = function (t) {
      if (!t) return null;var e = Kt(t);if (e.arr) return ae(e.arr);if (c = h, s.is(t, y)) if (t = J(t).replace(/,?([A-Z]),?/g, ",$1,").replace(/(^,?)|(,?$)/g, "").replace(/,,?/g, ",").split(","), s.is(t[0], y)) c = ae(t);else {
        var n,
            r,
            i,
            a = [],
            o = t.length;for (c = [], n = 0; n < o; n += 1) {
          z.test(t[n]) ? (a.length && c.push(a), a = [r = t[n]], i = N[r.toLowerCase()]) : i ? (a.push(+t[n]), i--) : (c.push(a), a = [r].concat(+t[n]), i = N[r.toLowerCase()] - 1);
        }c.push(a);
      }return c && c.length || (c = [], J(t).replace(kt, X)), c.toString = s._path2string, e.arr = c, e.arr;
    }, s.parseTransformString = (0, r.cacher)(function (t) {
      if (!t) return null;var e = [];return s.is(t, y) && s.is(t[0], y) && (e = ae(t)), e.length || J(t).replace(At, function (t, n, r) {
        var i = [];pt.call(n);r.replace(Ct, function (t, e) {
          e && i.push(+e);
        }), e.push([n][m](i));
      }), e.toString = s._path2string, e;
    });var Jt = {},
        Kt = (0, r.cacher)(function () {
      return {};
    }, h, h, h, 500, Jt, !0);function te(t, e, n, r, i) {
      return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n;
    }function ee(t, e, n, r, i, a, o, s, u) {
      null == u && (u = 1);for (var l = (u = 1 < u ? 1 : 0 > u ? 0 : u) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, p = 0; p < 12; p++) {
        var d = l * h[p] + l,
            g = te(d, t, n, i, o),
            m = te(d, e, r, a, s);f += c[p] * ut(g * g + m * m);
      }return l * f;
    }function ne(t, e, n, r, i, a, o, s, u) {
      if (!(0 > u || ee(t, e, n, r, i, a, o, s) < u)) {
        var l,
            h = .5,
            c = 1 - h;for (l = ee(t, e, n, r, i, a, o, s, c); it(l - u) > .01;) {
          l = ee(t, e, n, r, i, a, o, s, c += (l < u ? 1 : -1) * (h /= 2));
        }return c;
      }
    }function re(t, e, n, r, i, a, o, s) {
      if (!(nt(t, n) < rt(i, o) || rt(t, n) > nt(i, o) || nt(e, r) < rt(a, s) || rt(e, r) > nt(a, s))) {
        var u = (t - n) * (a - s) - (e - r) * (i - o);if (u) {
          var l = ((t * r - e * n) * (i - o) - (t - n) * (i * s - a * o)) / u,
              h = ((t * r - e * n) * (a - s) - (e - r) * (i * s - a * o)) / u,
              c = +l.toFixed(2),
              f = +h.toFixed(2);return c < +rt(t, n).toFixed(2) || c > +nt(t, n).toFixed(2) || c < +rt(i, o).toFixed(2) || c > +nt(i, o).toFixed(2) || f < +rt(e, r).toFixed(2) || f > +nt(e, r).toFixed(2) || f < +rt(a, s).toFixed(2) || f > +nt(a, s).toFixed(2) ? void 0 : { x: l, y: h };
        }
      }
    }s.findDotsAtSegment = function (t, e, n, r, i, a, o, s, u) {
      var l = 1 - u,
          h = at(l, 3),
          c = at(l, 2),
          f = u * u,
          p = f * u,
          d = t + 2 * u * (n - t) + f * (i - 2 * n + t),
          g = e + 2 * u * (r - e) + f * (a - 2 * r + e),
          m = n + 2 * u * (i - n) + f * (o - 2 * i + n),
          v = r + 2 * u * (a - r) + f * (s - 2 * a + r),
          x = 90 - 180 * et.atan2(d - m, g - v) / ht;return (d > m || g < v) && (x += 180), { x: h * t + 3 * c * u * n + 3 * l * u * u * i + p * o, y: h * e + 3 * c * u * r + 3 * l * u * u * a + p * s, m: { x: d, y: g }, n: { x: m, y: v }, start: { x: l * t + u * n, y: l * e + u * r }, end: { x: l * i + u * o, y: l * a + u * s }, alpha: x };
    }, s._removedFactory = function (t) {
      return function () {
        (0, n.default)("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t);
      };
    };var ie = s.pathBBox = function (t) {
      var e = Kt(t);if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };for (var n, r = 0, i = 0, a = [], o = [], s = 0, u = (t = fe(t)).length; s < u; s++) {
        if ((n = t[s])[0] === D) r = n[1], i = n[2], a.push(r), o.push(i);else {
          var l = ce(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);a = a[m](l.min.x, l.max.x), o = o[m](l.min.y, l.max.y), r = n[5], i = n[6];
        }
      }var h = rt[g](0, a),
          c = rt[g](0, o),
          f = nt[g](0, a),
          p = nt[g](0, o),
          d = { x: h, y: c, x2: f, y2: p, width: f - h, height: p - c };return e.bbox = qt(d), d;
    },
        ae = function ae(t) {
      var e = qt(t);return e.toString = s._path2string, e;
    },
        oe = s._pathToAbsolute = function (t) {
      var e,
          n = Kt(t);if (!n.abs) {
        if (s.is(t, y) && s.is(t && t[0], y) || (t = s.parsePathString(t)), !t || !t.length) return (e = [[D, 0, 0]]).toString = s._path2string, e;var r = 0,
            i = 0,
            a = 0,
            o = 0,
            u = 0;e = [], t[0][0] === D && (a = r = +t[0][1], o = i = +t[0][2], u++, e[0] = [D, r, i]);for (var l, h, c = 3 === t.length && t[0][0] === D && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), f = u, p = t.length; f < p; f++) {
          if (e.push(l = []), (h = t[f])[0] != dt.call(h[0])) switch (l[0] = dt.call(h[0]), l[0]) {case "A":
              l[1] = h[1], l[2] = h[2], l[3] = h[3], l[4] = h[4], l[5] = h[5], l[6] = +(h[6] + r), l[7] = +(h[7] + i);break;case "V":
              l[1] = +h[1] + i;break;case "H":
              l[1] = +h[1] + r;break;case "R":
              for (var d = [r, i][m](h.slice(1)), g = 2, v = d.length; g < v; g++) {
                d[g] = +d[g] + r, d[++g] = +d[g] + i;
              }e.pop(), e = e[m](Zt(d, c));break;case "M":
              a = +h[1] + r, o = +h[2] + i;default:
              for (g = 1, v = h.length; g < v; g++) {
                l[g] = +h[g] + (g % 2 ? r : i), g % 2 ? r = l[g] : i = l[g];
              }} else if ("R" === h[0]) d = [r, i][m](h.slice(1)), e.pop(), e = e[m](Zt(d, c)), l = ["R"][m](h.slice(-2));else for (var x = 0, b = h.length; x < b; x++) {
            l[x] = h[x];
          }switch (l[0]) {case "Z":
              r = a, i = o;break;case "H":
              r = l[1];break;case "V":
              i = l[1];break;case "M":
              a = l[l.length - 2], o = l[l.length - 1];default:
              r = l[l.length - 2], i = l[l.length - 1];}
        }e.toString = s._path2string, n.abs = e;
      }return ae(n.abs);
    },
        se = function se(t, e, n, r) {
      return [t, e, n, r, n, r];
    },
        ue = function ue(t, e, n, r, i, a) {
      var o = 1 / 3,
          s = 2 / 3;return [o * t + s * n, o * e + s * r, o * i + s * n, o * a + s * r, i, a];
    },
        le = function le(t, e, n, i, a, o, s, u, l, h) {
      s = s && +s, o = o && +o;var c,
          f = 120 * ht / 180,
          p = ct * (+a || 0),
          d = [],
          g = (0, r.cacher)(function (t, e, n) {
        return { x: t * ot(n) - e * st(n), y: t * st(n) + e * ot(n) };
      });if (h) E = h[0], S = h[1], A = h[2], C = h[3];else {
        t = (c = g(t, e, -p)).x, e = c.y, u = (c = g(u, l, -p)).x, l = c.y;ot(ct * a), st(ct * a);var v = (t - u) / 2,
            x = (e - l) / 2,
            y = v * v / (n * n) + x * x / (i * i);1 < y && (n *= y = ut(y), i *= y);var b = n * n,
            _ = i * i,
            k = (o === s ? -1 : 1) * ut(it((b * _ - b * x * x - _ * v * v) / (b * x * x + _ * v * v))),
            A = k * n * x / i + (t + u) / 2,
            C = k * -i * v / n + (e + l) / 2,
            E = et.asin(((e - C) / i).toFixed(9)),
            S = et.asin(((l - C) / i).toFixed(9));0 > (E = t < A ? ht - E : E) && (E = 2 * ht + E), 0 > (S = u < A ? ht - S : S) && (S = 2 * ht + S), s && E > S && (E -= 2 * ht), !s && S > E && (S -= 2 * ht);
      }var T = S - E;if (it(T) > f) {
        var N = S,
            I = u,
            L = l;u = A + n * ot(S = E + f * (s && S > E ? 1 : -1)), l = C + i * st(S), d = le(u, l, n, i, a, 0, s, I, L, [S, N, A, C]);
      }T = S - E;var M = ot(E),
          P = st(E),
          O = ot(S),
          B = st(S),
          R = et.tan(T / 4),
          j = 4 / 3 * n * R,
          D = 4 / 3 * i * R,
          V = [t, e],
          q = [t + j * P, e - D * M],
          z = [u + j * B, l - D * O],
          X = [u, l];if (q[0] = 2 * V[0] - q[0], q[1] = 2 * V[1] - q[1], h) return [q, z, X][m](d);for (var Y = [], G = 0, Q = (d = [q, z, X][m](d).join()[w](F)).length; G < Q; G++) {
        Y[G] = G % 2 ? g(d[G - 1], d[G], p).y : g(d[G], d[G + 1], p).x;
      }return Y;
    },
        he = function he(t, e, n, r, i, a, o, s, u) {
      var l = 1 - u;return { x: at(l, 3) * t + 3 * at(l, 2) * u * n + 3 * l * u * u * i + at(u, 3) * o, y: at(l, 3) * e + 3 * at(l, 2) * u * r + 3 * l * u * u * a + at(u, 3) * s };
    },
        ce = (0, r.cacher)(function (t, e, n, r, i, a, o, s) {
      var u,
          l = i - 2 * n + t - (o - 2 * i + n),
          h = 2 * (n - t) - 2 * (i - n),
          c = t - n,
          f = (-h + ut(h * h - 4 * l * c)) / 2 / l,
          p = (-h - ut(h * h - 4 * l * c)) / 2 / l,
          d = [e, s],
          m = [t, o];return "1e12" < it(f) && (f = .5), "1e12" < it(p) && (p = .5), 0 < f && 1 > f && (u = he(t, e, n, r, i, a, o, s, f), m.push(u.x), d.push(u.y)), 0 < p && 1 > p && (u = he(t, e, n, r, i, a, o, s, p), m.push(u.x), d.push(u.y)), f = (-(h = 2 * (r - e) - 2 * (a - r)) + ut(h * h - 4 * (l = a - 2 * r + e - (s - 2 * a + r)) * (c = e - r))) / 2 / l, p = (-h - ut(h * h - 4 * l * c)) / 2 / l, "1e12" < it(f) && (f = .5), "1e12" < it(p) && (p = .5), 0 < f && 1 > f && (u = he(t, e, n, r, i, a, o, s, f), m.push(u.x), d.push(u.y)), 0 < p && 1 > p && (u = he(t, e, n, r, i, a, o, s, p), m.push(u.x), d.push(u.y)), { min: { x: rt[g](0, m), y: rt[g](0, d) }, max: { x: nt[g](0, m), y: nt[g](0, d) } };
    }),
        fe = s._path2curve = (0, r.cacher)(function (t, e) {
      var n = !e && Kt(t);if (!e && n.curve) return ae(n.curve);for (var r = oe(t), i = e && oe(e), a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, s = function s(t, e) {
        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];switch ((t[0] in { T: 1, Q: 1 }) || (e.qx = e.qy = null), t[0]) {case "M":
            e.X = t[1], e.Y = t[2];break;case "A":
            t = ["C"][m](le[g](0, [e.x, e.y][m](t.slice(1))));break;case "S":
            t = ["C", e.x + (e.x - (e.bx || e.x)), e.y + (e.y - (e.by || e.y))][m](t.slice(1));break;case "T":
            e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][m](ue(e.x, e.y, e.qx, e.qy, t[1], t[2]));break;case "Q":
            e.qx = t[1], e.qy = t[2], t = ["C"][m](ue(e.x, e.y, t[1], t[2], t[3], t[4]));break;case "L":
            t = ["C"][m](se(e.x, e.y, t[1], t[2]));break;case "H":
            t = ["C"][m](se(e.x, e.y, t[1], e.y));break;case "V":
            t = ["C"][m](se(e.x, e.y, e.x, t[1]));break;case "Z":
            t = ["C"][m](se(e.x, e.y, e.X, e.Y));}return t;
      }, u = function u(t, e) {
        if (7 < t[e].length) {
          t[e].shift();for (var n = t[e]; n.length;) {
            t.splice(e++, 0, ["C"][m](n.splice(0, 6)));
          }t.splice(e, 1), c = nt(r.length, i && i.length || 0);
        }
      }, l = function l(t, e, n, a, o) {
        t && e && t[o][0] === D && e[o][0] != D && !o && (e.splice(o, 0, [D, a.x, a.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], c = nt(r.length, i && i.length || 0));
      }, h = 0, c = nt(r.length, i && i.length || 0); h < c; h++) {
        r[h] = s(r[h], a), u(r, h), i && (i[h] = s(i[h], o)), i && u(i, h), l(r, i, a, o, h), l(i, r, o, a, h);var f = r[h],
            p = i && i[h],
            d = f.length,
            v = i && p.length;a.x = f[d - 2], a.y = f[d - 1], a.bx = K(f[d - 4]) || a.x, a.by = K(f[d - 3]) || a.y, o.bx = i && (K(p[v - 4]) || o.x), o.by = i && (K(p[v - 3]) || o.y), o.x = i && p[v - 2], o.y = i && p[v - 1];
      }return i || (n.curve = ae(r)), i ? [r, i] : r;
    }, null, ae),
        pe = s._parseDots = (0, r.cacher)(function (t) {
      for (var e = [], n = 0, r = t.length; n < r; n++) {
        var i = {},
            a = t[n].match(/^([^:]*):?([\d\.]*)/);if (i.color = s.getRGB(a[1]), i.color.error) return null;i.opacity = i.color.opacity, i.color = i.color.hex, a[2] && (i.offset = a[2] + "%"), e.push(i);
      }for (n = 1, r = e.length - 1; n < r; n++) {
        if (!e[n].offset) {
          for (var o = K(e[n - 1].offset || 0), u = 0, l = n + 1; l < r; l++) {
            if (e[l].offset) {
              u = e[l].offset;break;
            }
          }u || (u = 100, l = r);for (var h = ((u = K(u)) - o) / (l - n + 1); n < l; n++) {
            o += h, e[n].offset = o + "%";
          }
        }
      }return e;
    }),
        de = s._tear = function (t, e) {
      t === e.top && (e.top = t.prev), t === e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next);
    },
        ge = s._tofront = function (t, e) {
      return e.top !== t && (de(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t, !0);
    },
        me = s._toback = function (t, e) {
      return e.bottom !== t && (de(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t, !0);
    },
        ve = s._insertafter = function (t, e, n, r) {
      de(t, n), t.parent = r, e === r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t;
    },
        xe = s._insertbefore = function (t, e, n, r) {
      de(t, n), t.parent = r, e === r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e;
    },
        ye = s._extractTransform = function (t, e) {
      if (null == e) return t._.transform;e = J(e).replace(/\.{3}|\u2026/g, t._.transform || f);var n,
          r,
          i = s.parseTransformString(e),
          a = 0,
          o = 1,
          u = 1,
          l = t._,
          h = new we();if (l.transform = i || [], i) for (var c = 0, p = i.length; c < p; c++) {
        var d,
            g,
            m,
            v,
            x,
            y = i[c],
            b = y.length,
            _ = J(y[0]).toLowerCase(),
            w = y[0] != _,
            k = w ? h.invert() : 0;"t" === _ && 3 === b ? w ? (d = k.x(0, 0), g = k.y(0, 0), m = k.x(y[1], y[2]), v = k.y(y[1], y[2]), h.translate(m - d, v - g)) : h.translate(y[1], y[2]) : "r" === _ ? 2 === b ? (x = l.bb || (l.bb = t.getBBox(1)), h.rotate(y[1], x.x + x.width / 2, x.y + x.height / 2), a += y[1]) : 4 === b && (w ? (m = k.x(y[2], y[3]), v = k.y(y[2], y[3]), h.rotate(y[1], m, v)) : h.rotate(y[1], y[2], y[3]), a += y[1]) : "s" === _ ? 2 === b || 3 === b ? (x = l.bb || (l.bb = t.getBBox(1)), h.scale(y[1], y[b - 1], x.x + x.width / 2, x.y + x.height / 2), o *= y[1], u *= y[b - 1]) : 5 === b && (w ? (m = k.x(y[3], y[4]), v = k.y(y[3], y[4]), h.scale(y[1], y[2], m, v)) : h.scale(y[1], y[2], y[3], y[4]), o *= y[1], u *= y[2]) : _ === R && 7 === b && h.add(y[1], y[2], y[3], y[4], y[5], y[6]), l.dirtyT = 1, t.matrix = h;
      }t.matrix = h, l.sx = o, l.sy = u, l.deg = a, l.dx = n = h.e, l.dy = r = h.f, 1 === o && 1 === u && !a && l.bbox ? (l.bbox.x += +n, l.bbox.y += +r) : l.dirtyT = 1;
    },
        be = function be(t) {
      var e = t[0];switch (e.toLowerCase()) {case "t":
          return [e, 0, 0];case "m":
          return [e, 1, 0, 0, 1, 0, 0];case "r":
          return 4 === t.length ? [e, 0, t[2], t[3]] : [e, 0];case "s":
          return 5 === t.length ? [e, 1, 1, t[3], t[4]] : 3 === t.length ? [e, 1, 1] : [e, 1];}
    },
        _e = s._equaliseTransform = function (t, e) {
      e = J(e).replace(/\.{3}|\u2026/g, t), t = s.parseTransformString(t) || [], e = s.parseTransformString(e) || [];for (var n, r, i, a, o = nt(t.length, e.length), u = [], l = [], h = 0; h < o; h++) {
        if (i = t[h] || be(e[h]), a = e[h] || be(i), i[0] != a[0] || "r" === i[0].toLowerCase() && (i[2] != a[2] || i[3] != a[3]) || "s" === i[0].toLowerCase() && (i[3] != a[3] || i[4] != a[4])) return;for (u[h] = [], l[h] = [], n = 0, r = nt(i.length, a.length); n < r; n++) {
          n in i && (u[h][n] = i[n]), n in a && (l[h][n] = a[n]);
        }
      }return { from: u, to: l };
    };function we(t, e, n, r, i, a) {
      null == t ? (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) : (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +a);
    }s._getContainer = function (t, e, n, r) {
      var i;return null == (i = null != r || s.is(t, b) ? t : M.doc.getElementById(t)) ? void 0 : i.tagName ? null == e ? { container: i, width: i.style.pixelWidth || i.offsetWidth, height: i.style.pixelHeight || i.offsetHeight } : { container: i, width: e, height: n } : { container: 1, x: t, y: e, width: n, height: r };
    }, s._engine = {}, s.path2curve = fe, s.matrix = function (t, e, n, r, i, a) {
      return new we(t, e, n, r, i, a);
    }, function (t) {
      function e(t) {
        return t[0] * t[0] + t[1] * t[1];
      }function n(t) {
        var n = ut(e(t));t[0] && (t[0] /= n), t[1] && (t[1] /= n);
      }t.add = function (t, e, n, r, i, a) {
        var o,
            s,
            u,
            l,
            h = [[], [], []],
            c = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            f = [[t, n, i], [e, r, a], [0, 0, 1]];for (t && t instanceof we && (f = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), o = 0; 3 > o; o++) {
          for (s = 0; 3 > s; s++) {
            for (l = 0, u = 0; 3 > u; u++) {
              l += c[o][u] * f[u][s];
            }h[o][s] = l;
          }
        }this.a = h[0][0], this.b = h[1][0], this.c = h[0][1], this.d = h[1][1], this.e = h[0][2], this.f = h[1][2];
      }, t.invert = function () {
        var t = this,
            e = t.a * t.d - t.b * t.c;return new we(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e);
      }, t.clone = function () {
        return new we(this.a, this.b, this.c, this.d, this.e, this.f);
      }, t.translate = function (t, e) {
        this.add(1, 0, 0, 1, t, e);
      }, t.scale = function (t, e, n, r) {
        null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r);
      }, t.rotate = function (t, e, n) {
        t = s.rad(t), e = e || 0, n = n || 0;var r = +ot(t).toFixed(9),
            i = +st(t).toFixed(9);this.add(r, i, -i, r, e, n), this.add(1, 0, 0, 1, -e, -n);
      }, t.x = function (t, e) {
        return t * this.a + e * this.c + this.e;
      }, t.y = function (t, e) {
        return t * this.b + e * this.d + this.f;
      }, t.get = function (t) {
        return +this[J.fromCharCode(97 + t)].toFixed(4);
      }, t.toString = function () {
        return s.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
      }, t.toMatrixString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
      }, t.toFilter = function () {
        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
      }, t.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)];
      }, t.split = function () {
        var t = { dx: this.e, dy: this.f },
            r = [[this.a, this.c], [this.b, this.d]];t.scalex = ut(e(r[0])), n(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = ut(e(r[1])), n(r[1]), t.shear /= t.scaley;var i = -r[0][1],
            a = r[1][1];return 0 > a ? (t.rotate = s.deg(et.acos(a)), 0 > i && (t.rotate = 360 - t.rotate)) : t.rotate = s.deg(et.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) !== t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) === t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t;
      }, t.toTransformString = function (t) {
        var e = t || this[w]();return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : f) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : f) + (e.rotate ? "r" + [e.rotate, 0, 0] : f)) : R + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
      };
    }(we.prototype);var ke = O.navigator,
        Ae = ke.userAgent.match(/Version\/(.*?)\s/) || ke.userAgent.match(/Chrome\/(\d+)/);H.safari = "Apple Computer, Inc." === ke.vendor && (Ae && 4 > Ae[1] || "iP" === ke.platform.slice(0, 2)) || "Google Inc." === ke.vendor && Ae && 8 > Ae[1] ? function () {
      var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({ stroke: k });return setTimeout(function () {
        t.remove();
      }), !0;
    } : Lt;for (var Ce = function Ce() {
      this.returnValue = !1;
    }, Ee = function Ee() {
      return this.originalEvent.preventDefault();
    }, Fe = function Fe() {
      this.cancelBubble = !0;
    }, Se = function Se() {
      return this.originalEvent.stopPropagation();
    }, Te = { stopPropagation: "fn", stopImmediatePropagation: "fn", preventDefault: "fn", type: !0, clientX: !0, clientY: !0, pageX: !0, pageY: !0, bubbles: !0, cancelable: !0, touches: !0, target: !0, originalTarget: !0, srcElement: !0, relatedTarget: !0, fromElement: !0, changedTouches: !0, layerX: !0, layerY: !0 }, Ne = function Ne(t, e) {
      var _loop = function _loop(_n5) {
        t[_n5] = "fn" === Te[_n5] ? function () {
          e[_n5]();
        } : e[_n5];
      };

      for (var _n5 in Te) {
        _loop(_n5);
      }t.originalEvent = e;
    }, Ie = s.addEvent = M.doc.addEventListener ? function (t, e, n, r) {
      var i,
          a = Y && $[e] || e,
          o = { capture: !1 };return B && r._drag && (o.passive = !1), $[Z[e]] && (a = $[Z[e]]), i = function i(_i7) {
        var a,
            o = M.doc.documentElement.scrollTop || M.doc.body.scrollTop,
            s = M.doc.documentElement.scrollLeft || M.doc.body.scrollLeft;if (B && $[d](Y ? e : Z[e])) for (var u = 0, l = _i7.targetTouches && _i7.targetTouches.length; u < l; u++) {
          if ((a = _i7.targetTouches[u].target) === t || "tspan" === a.nodeName && a.parentNode === t) {
            var h = _i7;(_i7 = _i7.targetTouches[u]).originalEvent = h, _i7.preventDefault = Ee, _i7.stopPropagation = Se;break;
          }
        }return n.call(r, _i7, _i7.clientX + s, _i7.clientY + o);
      }, t.addEventListener(a, i, o), function () {
        return t.removeEventListener(a, i, o), !0;
      };
    } : M.doc.attachEvent ? function (t, e, n, r) {
      var i = function i(t) {
        t = t || M.win.event;var e = M.doc.documentElement.scrollTop || M.doc.body.scrollTop,
            i = M.doc.documentElement.scrollLeft || M.doc.body.scrollLeft,
            a = t.clientX + i,
            o = t.clientY + e;return t.preventDefault = t.preventDefault || Ce, t.stopPropagation = t.stopPropagation || Fe, n.call(r, t, a, o);
      };return t.attachEvent("on" + e, i), function () {
        return t.detachEvent("on" + e, i), !0;
      };
    } : void 0, Le = function Le(t) {
      for (var e, r = t.clientX === l ? t.changedTouches && t.changedTouches[0].clientX : t.clientX, i = t.clientY === l ? t.changedTouches && t.changedTouches[0].clientY : t.clientY, a = M.doc.documentElement.scrollTop || M.doc.body.scrollTop, o = M.doc.documentElement.scrollLeft || M.doc.body.scrollLeft, u = {}, h = this, c = h.dragInfo.onmove.length; c--;) {
        if (B && "touchmove" === t.type) {
          for (var f, p = t.touches.length; p--;) {
            if ((f = t.touches[p]).identifier === h._drag.id) {
              r = f.clientX, i = f.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();break;
            }
          }
        } else t.preventDefault();if (!h.removed) {
          if (h.dragStartFn && (h.dragStartFn(c), h.dragStartFn = void 0, h.dragInfo._dragmove = !0), M.win.opera) {
            var d = s._engine.getNode(h),
                g = d.nextSibling,
                m = d.parentNode,
                v = d.style.display;m.removeChild(d), d.style.display = k, d.style.display = v, g ? m.insertBefore(d, g) : m.appendChild(d);
          }r += o, i += a, Ne(u, t), e = u.data = [r - h._drag.x, i - h._drag.y, r, i], (0, n.default)("raphael.drag.move." + h.id, h.dragInfo.move_scope[c] || h, u, e);
        }
      }
    }, Me = function Me(t) {
      for (var e = this, r = e.dragInfo, i = r.onend.length; i--;) {
        e.dragInfo._dragmove && (e.dragInfo._dragmove = void 0, e._drag = {}, (0, n.default)("raphael.drag.end." + e.id, r.end_scope[i] || r.start_scope[i] || r.move_scope[i] || e, t));
      }s.undragmove.call(e, Le).undragend.call(e, Me), s.unmousemove.call(e, Le).unmouseup.call(e, Me);
    }, Pe = s.el = {}, Oe = W.length; Oe--;) {
      !function (t) {
        s[t] = Pe[t] = function (e, n, r) {
          return s.is(e, E) && (this.events = this.events || [], this.events.push({ name: t, f: e, unbind: Ie(r || this.shape || this.node || M.doc, t, e, n || this) })), this;
        }, s["un" + t] = Pe["un" + t] = function (e) {
          for (var n = this.events || [], r = n.length; r--;) {
            if (n[r].name === t && n[r].f === e) return n[r].unbind(), n.splice(r, 1), n.length || delete this.events, this;
          }return this;
        };
      }(W[Oe]);
    }Pe.data = function (t, e) {
      var r = Nt[this.id] = Nt[this.id] || {};if (1 === arguments.length) {
        if (s.is(t, b)) {
          for (var i in t) {
            t[d](i) && this.data(i, t[i]);
          }return this;
        }return s.stopPartialEventPropagation || (0, n.default)("raphael.data.get." + this.id, this, r[t], t), r[t];
      }return r[t] = e, s.stopPartialEventPropagation || (0, n.default)("raphael.data.set." + this.id, this, e, t), this;
    }, Pe.removeData = function (t) {
      return null == t ? delete Nt[this.id] : Nt[this.id] && delete Nt[this.id][t], this;
    }, Pe.getData = function () {
      return qt(Nt[this.id] || {});
    };var Be = [],
        Re = function Re() {
      this.untrack = Ie(M.doc, "mouseup", je, this);
    },
        je = function je() {
      return this.untrack(), this.untrack = null, this.fn && this.fn.apply(this.scope || this.el, arguments);
    };Pe.mouseup = function (t, e, n, r) {
      return n ? (Be.push(n = { el: this, fn: t, scope: e }), n.unbind = Ie(this.shape || this.node || M.doc, "mousedown", Re, n), this) : s.mouseup.apply(this, [t, e, r]);
    }, Pe.unmouseup = function (t) {
      for (var e, n = Be.length; n--;) {
        Be[n].el === this && Be[n].fn === t && ((e = Be[n]).unbind(), e.untrack && e.untrack(), Be.splice(n, 1));
      }return e ? this : s.unmouseup.apply(this, arguments);
    }, Pe.hover = function (t, e, n, r) {
      return this.mouseover(t, n).mouseout(e, r || n);
    }, Pe.unhover = function (t, e) {
      return this.unmouseover(t).unmouseout(e);
    };var De = [];function Ve() {
      return this.x + p + this.y;
    }function qe() {
      return this.x + p + this.y + p + this.width + " × " + this.height;
    }Pe.drag = function (t, e, r, i, a, o) {
      var u = this.dragInfo || (this.dragInfo = { onmove: [], onstart: [], onend: [], move_scope: [], start_scope: [], end_scope: [] });return t && u.onmove.push(t) && u.move_scope.push(i), e && u.onstart.push(e) && u.start_scope.push(a), r && u.onend.push(r) && u.end_scope.push(o), this.dragFn = this.dragFn || function (t) {
        var e,
            r,
            i,
            a,
            o,
            u,
            c,
            f,
            p,
            d = M.doc.documentElement.scrollTop || M.doc.body.scrollTop,
            g = M.doc.documentElement.scrollLeft || M.doc.body.scrollLeft,
            m = {},
            v = this.dragInfo,
            x = [Le, h, M.doc];for (this._drag.x = f = (t.clientX === l ? t.changedTouches && t.changedTouches[0].clientX : t.clientX) + g, this._drag.y = p = (t.clientY === l ? t.changedTouches && t.changedTouches[0].clientY : t.clientY) + d, this._drag.id = t.identifier, B && !Y && s.dragmove.apply(this, x).dragend.call(this, Me, h, M.doc), s.mousemove.apply(this, x).mouseup.call(this, Me, h, h, M.doc), Ne(m, t), e = m.data = [f, p], r = 0, o = v.onstart.length; r < o; r++) {
          n.default.on("raphael.drag.start." + this.id, v.onstart[r]);
        }for (i = 0, u = v.onmove.length; i < u; i++) {
          n.default.on("raphael.drag.move." + this.id, v.onmove[i]);
        }for (a = 0, c = v.onend.length; a < c; a++) {
          n.default.on("raphael.drag.end." + this.id, v.onend[a]);
        }!o && (u || c) && n.default.on("raphael.drag.end." + this.id, function () {
          this.undragmove();
        }), this.dragStartFn = function (t) {
          (0, n.default)("raphael.drag.start." + this.id, this.dragInfo.start_scope[t] || this.dragInfo.move_scope[t] || this, m, e);
        };
      }, this._drag = {}, De.push({ el: this, start: this.dragFn, onstart: e, onmove: t, onend: r }), e && !this.startHandlerAttached && (B && !Y && this.dragstart(this.dragFn), this.mousedown(this.dragFn), this.startHandlerAttached = !0), this;
    }, Pe.onDragOver = function (t) {
      t ? n.default.on("raphael.drag.over." + this.id, t) : n.default.unbind("raphael.drag.over." + this.id);
    }, Pe.undrag = function () {
      for (var t = De.length; t--;) {
        De[t].el === this && (this.unmousedown(De[t].start), De.splice(t, 1), n.default.unbind("raphael.drag.*." + this.id), this.dragInfo = void 0, this.dragFn = void 0, this.startHandlerAttached = void 0);
      }De.length || s.unmousemove.call(this, Le).unmouseup.call(this, Me), delete this._drag;
    }, Pe.undragmove = function () {
      for (var t = De.length; t--;) {
        De[t].el === this && De[t].onmove && (De.splice(t, 1), n.default.unbind("raphael.drag.move." + this.id), this.dragInfo.onmove = void 0);
      }De.length || s.unmousemove.call(this, Le).unmouseup.call(this, Me);
    }, Pe.undragend = function () {
      for (var t = De.length; t--;) {
        De[t].el === this && De[t].onend && (De.splice(t, 1), n.default.unbind("raphael.drag.end." + this.id));
      }De.length || s.unmousemove(Le).unmouseup(Me);
    }, Pe.undragstart = function () {
      for (var t = De.length; t--;) {
        De[t].el === this && De[t].onstart && (this.unmousedown(De[t].start), De.splice(t, 1), n.default.unbind("raphael.drag.start." + this.id), this._dragstart = !1, this.dragInfo.onstart = void 0, this.dragFn = void 0);
      }De.length || s.unmousemove(Le).unmouseup(Me);
    }, Pe.follow = function (t, e, n) {
      return t.removed || t.constructor !== s.el.constructor ? this : (t.followers.push({ el: this, stalk: n = { before: "insertBefore", after: "insertAfter" }[n], cb: e }), n && this[n](t), this);
    }, Pe.unfollow = function (t) {
      if (t.removed || t.constructor !== s.el.constructor) return this;for (var e = 0, n = t.followers.length; e < n; e++) {
        if (t.followers[e].el === this) {
          t.followers.splice(e, 1);break;
        }
      }return this;
    }, H.hide = function () {
      return this.canvas.style.visibility = "hidden", this;
    }, H.show = function () {
      return this.canvas.style.visibility = f, this;
    }, H.group = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = s._engine.group(t, e[0], n);return t.__set__ && t.__set__.push(i), t._elementsById[i.id] = i;
    }, H.circle = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = Dt(e, "cx", 0, "cy", 0, "r", 0, "fill", k, "stroke", A),
          a = s._engine.circle(t, i, n);return t.__set__ && t.__set__.push(a), t._elementsById[a.id] = a;
    }, H.rect = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = Dt(e, "x", 0, "y", 0, "width", 0, "height", 0, "r", 0, "fill", k, "stroke", A),
          a = s._engine.rect(t, i, n);return t.__set__ && t.__set__.push(a), t._elementsById[a.id] = a;
    }, H.ellipse = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = Dt(e, "x", 0, "y", 0, "rx", 0, "ry", 0, "fill", k, "stroke", A),
          a = s._engine.ellipse(this, i, n);return t.__set__ && t.__set__.push(a), t._elementsById[a.id] = a;
    }, H.path = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = t.config,
          a = i && i["stroke-linecap"] || "butt",
          o = Dt(e, "path", f, "fill", k, "stroke", A, "stroke-linecap", a),
          u = s._engine.path(t, o, n);return t.__set__ && t.__set__.push(u), t._elementsById[u.id] = u;
    }, H.image = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = Dt(e, "x", 0, "y", 0, "width", 0, "height", 0),
          a = s._engine.image(t, i, n);return t.__set__ && t.__set__.push(a), t._elementsById[a.id] = a;
    }, H.text = function () {
      var t = this,
          e = (0, r.getArrayCopy)(arguments),
          n = jt(e, !0),
          i = Dt(e, "x", 0, "y", 0, "text", f, "stroke", k, "fill", A, "text-anchor", "middle", "vertical-align", "middle"),
          a = s._engine.text(t, i, n, e[1]);return t.__set__ && t.__set__.push(a), t._elementsById[a.id] = a;
    }, H.setConfig = function (t, e) {
      var n = this;return void 0 !== t && void 0 !== e && (n.config = n.config || {}, n.config[t] = e), n.config;
    }, H._createDOMNodes = function (t, e, n) {
      var r,
          i,
          a,
          o,
          u = {},
          l = s._createNode,
          h = e.tagName,
          c = e.children || [];for (o in n || (n = {}), e) {
        "tagName" !== o && "children" !== o && (u[o] = e[o]);
      }if (u.id || (u.id = s.getElementID(s.createUUID())), !this.canvas.getElementById(u.id) && h) for (r = t.appendChild(l(h, u)), n.element = r, n.id = u.id, 0 < (a = c.length) && (n.children = []), i = 0; i < a; i++) {
        n.children[i] = {}, this._createDOMNodes(r, c[i], n.children[i]);
      }return n;
    }, H.addDefs = function (t) {
      if (s.svg) {
        var e,
            n = {},
            r = this.defs;for (e in t) {
          n[e] = {}, this._createDOMNodes(r, t[e], n[e]);
        }return n;
      }
    }, H.setSize = function (t, e) {
      return s._engine.setSize.call(this, t, e);
    }, H.setDimension = function (t, e) {
      var n;(typeof t === "undefined" ? "undefined" : _typeof(t)) == b ? (n = t.width, e = t.height, this.setSize(t.width, t.height)) : (n = t, this.setSize(n, e));
    }, H.attr = function (t) {
      var e = this;return null == t ? { width: e.width, height: e.height } : s.is(t, x) ? e[t] : (e.setDimension(t), e);
    }, H.status = function (t, e) {
      return Pe.status.call(this, t, e);
    }, H.animateWith = function (t, e, n, r, i, a, o) {
      return Pe.animateWith.call(this, t, e, n, r, i, a, o);
    }, H.animate = function (t, e, n, r) {
      return Pe.animate.call(this, t, e, n, r);
    }, H.setViewBox = function (t, e, n, r, i) {
      return s._engine.setViewBox.call(this, t, e, n, r, i);
    }, H.getById = function (t) {
      return this._elementsById[t] || null;
    }, H.top = H.bottom = null, H.raphael = s, Pe.getBBox = function (t) {
      if (this.removed) return {};var e = this._;return t ? ((e.dirty || !e.bboxwt) && (this.realPath = Bt[this.type](this), e.bboxwt = ie(this.realPath), e.bboxwt.toString = qe, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = Bt[this.type](this)), e.bbox = ie(Rt(this.realPath, this.matrix)), e.bbox.toString = qe, e.dirty = e.dirtyT = 0), e.bbox);
    }, Pe.clone = function (t, e) {
      if (this.removed) return null;var n,
          r,
          i = this,
          a = i.attr();if (t) {
        for (n in t) {
          a[n] = t[n];
        }r = i.paper[i.type](a, e);
      } else r = i.paper[i.type]().attr(a);return i.__set__ && i.__set__.push(r), r;
    };var ze = {},
        Xe = function Xe(t, e, n, r, i, a, o, u, l) {
      return null == l ? ee(t, e, n, r, i, a, o, u) : s.findDotsAtSegment(t, e, n, r, i, a, o, u, ne(t, e, n, r, i, a, o, u, l));
    },
        Ye = function Ye(t, e) {
      return function (n, r, i) {
        n = fe(n);for (var a, o, u, l, h, c = f, p = {}, d = 0, g = 0, m = n.length; g < m; g++) {
          if ((u = n[g])[0] === D) a = +u[1], o = +u[2];else {
            if (d + (l = Xe(a, o, u[1], u[2], u[3], u[4], u[5], u[6])) > r) {
              if (e && !p.start) {
                if (c += ["C" + (h = Xe(a, o, u[1], u[2], u[3], u[4], u[5], u[6], r - d)).start.x, h.start.y, h.m.x, h.m.y, h.x, h.y], i) return c;p.start = c, c = [D + h.x, h.y + "C" + h.n.x, h.n.y, h.end.x, h.end.y, u[5], u[6]].join(), d += l, a = +u[5], o = +u[6];continue;
              }if (!t && !e) return { x: (h = Xe(a, o, u[1], u[2], u[3], u[4], u[5], u[6], r - d)).x, y: h.y, alpha: h.alpha };
            }d += l, a = +u[5], o = +u[6];
          }c += u.shift() + u;
        }return p.end = c, (h = t ? d : e ? p : s.findDotsAtSegment(a, o, u[0], u[1], u[2], u[3], u[4], u[5], 1)).alpha && (h = { x: h.x, y: h.y, alpha: h.alpha }), h;
      };
    },
        Ge = Ye(1),
        Qe = Ye(),
        Ue = Ye(0, 1);s.getTotalLength = Ge, s.getPointAtLength = Qe, Pe.getTotalLength = function () {
      return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : Ge(this.attrs.path) : void 0;
    }, Pe.getPointAtLength = function (t) {
      return "path" == this.type ? Qe(this.attrs.path, t) : void 0;
    };var He = s.easing_formulas = { linear: function linear(t) {
        return t;
      }, "<": function _(t) {
        return at(t, 1.7);
      }, ">": function _(t) {
        return at(t, .48);
      }, "<>": function _(t) {
        var e = .48 - t / 1.04,
            n = ut(.1734 + e * e),
            r = n - e,
            i = -n - e,
            a = at(it(r), 1 / 3) * (0 > r ? -1 : 1) + at(it(i), 1 / 3) * (0 > i ? -1 : 1) + .5;return 3 * (1 - a) * a * a + a * a * a;
      }, backIn: function backIn(t) {
        var e = 1.70158;return t * t * ((e + 1) * t - e);
      }, backOut: function backOut(t) {
        var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;
      }, elastic: function elastic(t) {
        return t === !!t ? t : at(2, -10 * t) * st(2 * ht * (t - .075) / .3) + 1;
      }, bounce: function bounce(t) {
        var e,
            n = 7.5625,
            r = 2.75;return t < 1 / r ? e = n * t * t : t < 2 / r ? e = n * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e = n * (t -= 2.25 / r) * t + .9375 : e = n * (t -= 2.625 / r) * t + .984375, e;
      }, oneBounceOut: function oneBounceOut(t) {
        return .9 >= t ? 1.33 * He.easeIn(t) : 1.2 - t / 5;
      }, elasticOnce: function elasticOnce(t) {
        return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .225) * (2 * Math.PI) / .9) + 1;
      }, easeInQuad: function easeInQuad(t) {
        return t * t;
      }, easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
      }, easeInOutQuad: function easeInOutQuad(t) {
        return .5 > t ? 2 * t * t : (4 - 2 * t) * t - 1;
      }, easeInCubic: function easeInCubic(t) {
        return t * t * t;
      }, easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
      }, easeInOutCubic: function easeInOutCubic(t) {
        return .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }, easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
      }, easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
      }, easeInOutQuart: function easeInOutQuart(t) {
        return .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      }, easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
      }, easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
      }, easeInOutQuint: function easeInOutQuint(t) {
        return .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      } };He.easeIn = He["ease-in"] = He["<"], He.easeOut = He["ease-out"] = He[">"], He.easeInOut = He["ease-in-out"] = He["<>"], He["back-in"] = He.backIn, He["back-out"] = He.backOut;var We,
        $e = [],
        Ze = function Ze() {
      for (var t, e, r, i, a = +new Date(), o = 0, u = [], l = 0; o < $e.length; o++) {
        if (!((r = $e[o]).el.removed || r.paused || r.parentEl && r.parentEl.e && r.parentEl.e.paused)) {
          for (var h, c, g, v = a - r.start, x = r.ms, y = r.easing, b = r.from, _ = r.diff, w = r.to, k = (r.t, r.el), A = {}, C = {}, S = !s.stopPartialEventPropagation, T = (l = 0, r.el && r.el.animElements && r.el.animElements.peek()); T && T.pos <= v / x;) {
            u.push(r.el.animElements.deq()), T = r.el.animElements.peek();
          }if (r.initstatus ? (v = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * x, r.status = r.initstatus, delete r.initstatus, r.stop && (delete r.el, $e.splice(o--, 1))) : r.status = (r.prev + (r.percent - r.prev) * (v / x)) / r.anim.top, c = x, r.parentEl && r.parentEl.animElements ? (x = r.delayend - r.delaystart, v = r.parentEl.cPos - r.delaystart) : r.el.animElements && (r.el.cPos = v / x), !(0 > v)) if (v < x) {
            var N = y(v / x);for (var I in x = c, b) {
              if (b[d](I)) {
                switch (Tt[I]) {case "number":
                    h = +b[I] + N * x * _[I];break;case "colour":
                    if (_[I].length) {
                      for (h = [], l = 0, L = b[I].length; l < L; ++l) {
                        0 === l ? b[I].isRadial || _[I].isRadial ? (e = "xr(", e += b[I][0].f1 * (1 - N) + _[I][0].f1 * N || f, e += ",", e += b[I][0].f2 * (1 - N) + _[I][0].f2 * N || f, e += ",", e += 100 * (b[I][0].f3 * (1 - N) + _[I][0].f3 * N) || f, e += "%,", e += b[I][0].f4 * (1 - N) + _[I][0].f4 * N || f, e += ",", e += b[I][0].f5 * (1 - N) + _[I][0].f5 * N, e += ",", e += b[I][0].f6, e += ")", h.push(e)) : (h.push(b[I][l] * (1 - N) + N * _[I][l]), 0 >= h[0] && (h[0] += 360)) : h.push("rgba(" + [Je(lt(b[I][l].r + N * x * _[I][l].r)), Je(lt(b[I][l].g + N * x * _[I][l].g)), Je(lt(b[I][l].b + N * x * _[I][l].b)), b[I][l].opacity + N * x * _[I][l].opacity].join(F) + "):" + b[I][l].position);
                      }h = h.join("-"), (b[I].isRadial || _[I].isRadial) && (h = h.replace("-", f));
                    } else t = b[I].opacity + N * x * _[I].opacity, isNaN(t) && (t = 1), h = "rgba(" + [Je(lt(b[I].r + N * x * _[I].r)), Je(lt(b[I].g + N * x * _[I].g)), Je(lt(b[I].b + N * x * _[I].b)), t].join(F) + ")";break;case "path":
                    h = [];l = 0;for (var L = b[I].length; l < L; l++) {
                      h[l] = [b[I][l][0]];for (var M = b[I][l] ? b[I][l].length : 0, P = 1; P < M; P++) {
                        h[l][P] = (+b[I][l][P] + N * x * _[I][l][P]).toFixed(4);
                      }h[l] = h[l].join(p);
                    }h = h.join(p);break;case "transform":
                    if (_[I].real) for (h = [], l = 0, L = b[I].length; l < L; l++) {
                      for (h[l] = [b[I][l][0]], P = 1, M = b[I][l].length; P < M; P++) {
                        h[l][P] = b[I][l][P] + N * x * _[I][l][P];
                      }
                    } else {
                      var O = function O(t) {
                        return +b[I][t] + N * x * _[I][t];
                      };h = [[R, O(0), O(1), O(2), O(3), O(4), O(5)]];
                    }break;case "csv":
                    if ("clip-rect" === I) for (h = [], l = 4; l--;) {
                      h[l] = +b[I][l] + N * x * _[I][l];
                    }break;case "text-bound":
                    h = [][m](b[I]);break;default:
                    var B = [][m](b[I]);for (h = [], l = k.ca[I].length; l--;) {
                      h[l] = +B[l] + N * x * _[I][l];
                    }}A[I] = h;
              }
            }k.attr(A), S && function (t, e, r) {
              setTimeout(function () {
                (0, n.default)("raphael.anim.frame." + t, e, r);
              });
            }(k.id, k, r.anim);
          } else {
            if (function (t, e, r) {
              setTimeout(function () {
                S && (0, n.default)("raphael.anim.frame." + e.id, e, r), S && (0, n.default)("raphael.anim.finish." + e.id, e, r), s.is(t, E) && t.call(e);
              });
            }(r.callback, k, r.anim), k.attr(w), delete r.el, $e.splice(o--, 1), 1 < r.repeat && !r.next) {
              for (g in w) {
                w[d](g) && (C[g] = r.totalOrigin[g]);
              }r.el.attr(C), sn(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1);
            }r.next && !r.stop && sn(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
          }
        }
      }for (s.svg && k && k.paper && k.paper.safari(), o = 0, i = u.length; o < i; ++o) {
        s.getInstantAnimFrameFn()(function (t) {
          return function () {
            sn.apply(null, u[t].params);
          };
        }(o));
      }$e.length && (We || s.getAnimFrameFn())(Ze);
    },
        Je = function Je(t) {
      return 255 < t ? 255 : 0 > t ? 0 : t;
    },
        Ke = function Ke(t) {
      return 1 < t && (t = 1), 0 > t && (t = 0), t;
    };function tn(t, e, n, r, i, a) {
      function o(t) {
        return ((l * t + u) * t + s) * t;
      }var s = 3 * e,
          u = 3 * (r - e) - s,
          l = 1 - s - u,
          h = 3 * n,
          c = 3 * (i - n) - h;return function (t, e) {
        var n = function (t, e) {
          var n, r, i, a, h, c;for (i = t, c = 0; 8 > c; c++) {
            if (a = o(i) - t, it(a) < e) return i;if (1e-6 > it(h = (3 * l * i + 2 * u) * i + s)) break;i -= a / h;
          }if ((i = t) < (n = 0)) return n;if (i > (r = 1)) return r;for (; n < r;) {
            if (a = o(i), it(a - t) < e) return i;t > a ? n = i : r = i, i = (r - n) / 2 + n;
          }return i;
        }(t, 1 / (200 * a));return (((1 - h - c) * n + c) * n + h) * n;
      }(t);
    }function en(t, e) {
      var n = [],
          r = {};if (this.ms = e, this.times = 1, t) {
        for (var i in t) {
          t[d](i) && (r[K(i)] = t[i], n.push(K(i)));
        }n.sort(It);
      }this.anim = r, this.top = n[n.length - 1], this.percents = n;
    }function nn(t, e, n) {
      "use strict";
      function r(t) {
        var e,
            r = 0,
            i = 0,
            a = 0,
            o = [],
            s = {},
            u = 0,
            l = 0,
            h = 0,
            c = 0,
            p = 0,
            d = 0,
            g = { f1: .5, f2: .5 };for (1 === t.length && (t[0] === k && (t[0] = "rgba(0,0,0,0)"), t.unshift(0), t.defaultAngleSet = !0), isNaN(t[0]) ? ~"rx".indexOf(t[0].charAt(0)) ? (t.isRadial = !0, c = 1, -1 !== t[0].indexOf(")") && (c = t[0].indexOf(")"), p = t[0].indexOf("(") + 1, d = c, o = t[0].substr(p, d - p).split(","), g.f1 = parseFloat(o[0]) || 0, g.f2 = parseFloat(o[1]) || 0, ~o[2].indexOf("%") && (o[2] = parseFloat(o[2]) / 100), g.f3 = parseFloat(o[2]) || 0, g.f4 = parseFloat(o[3]) || 0, g.f5 = parseFloat(o[4]) || 0, g.f6 = o[5]), t[0] = t[0].substr(d + 1), t.unshift(g)) : t[0] = 0 : t[0] = +t[0], r = 1, i = t.length; r < i; ++r) {
          o = t[r].split(":"), s = n(o[0]), t[r] = {}, t[r].r = s.r, t[r].g = s.g, t[r].b = s.b, t[r].opacity = s.opacity, t[r].opacity = +t[r].opacity, isNaN(t[r].opacity) && (t[r].opacity = 1), t[r].position = +o[1];
        }if (t.sort(function (t, e) {
          return "number" == typeof t || t.f1 ? -1 : "number" == typeof e || t.f2 ? 1 : isNaN(t.position) && isNaN(e.position) ? 0 : isNaN(t.position) ? -1 : isNaN(e.position) ? 1 : t.position - e.position;
        }), 0 != +t[1].position) if (isNaN(t[1].position)) t[1].position = 0;else {
          for (e in s = {}, t[1]) {
            s[e] = t[1][e];
          }for (s.position = 0, t.push({}), r = t.length - 1; 1 != r; --r) {
            t[r] = t[r - 1];
          }t[1] = s;
        }if (100 !== t[i = t.length - 1].position) if (isNaN(t[i].position)) t[i].position = 100;else {
          for (e in s = {}, t[i]) {
            s[e] = t[i][e];
          }s.position = 100, t.push(s);
        }for (r = 2, i = t.length; r < i; ++r) {
          if (!t[r].position) {
            for (u = t[r - 1].position, h = 1, a = r + 1; a < i; ++a) {
              if (++h, !isNaN(t[a].position)) {
                l = +t[a].position;break;
              }
            }t[r].position = u + (l - u) / h;
          }
        }return t.getColorAtPosition = function (t) {
          for (var e = -1, n = this.length, r = 1, i = this.length, a = 0, o = f, s = { r: 0, g: 0, b: 0 }; r < i - 1; ++r) {
            if (this[r].position <= t && (e = r, n = r + 1), !(this[r].position < t) && this[r].position >= t) {
              n = r;break;
            }
          }for (o in a = (t - this[e].position) / (this[n].position - this[e].position), isNaN(a) && (a = 0), s) {
            s[o] = Je((1 - a) * this[e][o] + a * this[n][o]);
          }return s.position = t, s.opacity = (1 - a) * this[e].opacity + a * this[n].opacity, s;
        }, t;
      }var i,
          a,
          o = 0,
          s = 0,
          u = [],
          l = [],
          h = {},
          c = 0,
          p = [];if (t = t.constructor === Array ? t[0] : t, e = e.constructor === Array ? e[0] : e, i = t.split("-"), a = e.split("-"), 1 === i.length && 1 === a.length) return [t, e];for (i = r(i), a = r(a), !i.defaultAngleSet && a.defaultAngleSet && (a[0] = i[0]), !a.defaultAngleSet && i.defaultAngleSet && (i[0] = a[0]), function t(e, n, r) {
        e.isRadial && !n.isRadial && (n[0], n[0] = { f1: 0, f2: 0, f3: 0, f4: 0, f5: 0, f6: f }, n.isRadial = !0), r || t(n, e, !0);
      }(i, a), o = 1, s = i.length; o < s; ++o) {
        c = i[o].position, p.push(c);
      }for (o = 1, s = a.length; o < s; ++o) {
        c = a[o].position, -1 === p.indexOf(c) && p.push(c);
      }for (p.push(0), p.sort(function (t, e) {
        return t - e;
      }), u = [i[0]], o = 1, s = p.length; o < s; ++o) {
        c = p[o], h = i.getColorAtPosition(c), u.push(h);
      }for (l = [a[0]], o = 1, s = p.length; o < s; ++o) {
        c = p[o], h = a.getColorAtPosition(c), l.push(h);
      }return u.isRadial = i.isRadial, l.isRadial = a.isRadial, [u, l];
    }function rn(t, e) {
      "use strict";
      function n(t) {
        var e = [],
            n = 0,
            r = t.length;if ((typeof t === "undefined" ? "undefined" : _typeof(t)) == x) return t;for (n = 0; n < r; ++n) {
          if (!t[n].join) return;n && t[n + 1] && "M" === t[n + 1][0] && "M" === t[n][0] || e.push(t[n].join(p));
        }for (n = 0, r = (e = (e = e.join(f)).split(/[Mm]/).slice(1)).length; n < r; ++n) {
          e[n] = "M" + e[n];
        }return e;
      }function r(t) {
        var e,
            n = 0,
            r = [];for (e = (t = t || []).length, n = 0; n < e; ++n) {
          t[n].length - 1 && r.push(t[n].join(p));
        }return r.join(f);
      }function i(t, e) {
        for (var n = t.length; n-- - 1 && t[n].slice(1).toString() === t[n - 1].slice(1).toString();) {
          t.pop();
        }1 === t.length && e && (t.length = 0);
      }function a(t, e) {
        for (var n, r = [], i = [], a = t.length, o = 0, s = 0, l = 0, h = 0, c = e - a; 0 <= c;) {
          o = t.length - 1, t.push(t.slice(o)[0]), --c;
        }for (a = t.length, o = 0; o <= e; ++o) {
          i.push(u(o / e * a));
        }for (o = 0, n = i.length - 1; o < n; ++o) {
          r.push(t.slice(i[o], i[o + 1])), "M" !== r[o][0][0] && r[o][0][0] !== R && (l = r[o - 1].length - 1, s = r[o - 1][l][1], h = r[o - 1][l][2], r[o].unshift(["M", s, h]));
        }return r;
      }var o,
          s = Math.max,
          u = Math.round,
          l = [],
          h = [],
          c = n(t),
          d = n(e),
          g = 0,
          m = 0,
          v = document.createElementNS && document.createElementNS.bind(document),
          y = v && v("http://www.w3.org/2000/svg", "path");if (!c || !d || !y) return [t, e];if (function (t, e) {
        function n(t) {
          for (var e = t.length; e-- - 1 && t[e].join(f) === t[e - 1].join(f);) {
            t.pop();
          }
        }function r(t) {
          for (var e = f, n = 0, r = t.length; n < r; ++n) {
            e += t[n].join(p);
          }return e;
        }var i,
            a,
            o = f,
            s = f;return !(y.setAttribute("d", "M300 10 L300 300 C50 310,50 640,350 650C600 640,600 310,400 300 L400 10 L295 10"), i = y.getTotalLength(), a = y.getPointAtLength(10), !(1829.1 > i || 1829.2 < i) && 300 === u(a.x) && 20 === u(a.y) && (n(t), n(e), o = r(t), s = r(e), 2 < o.split(/[Mm]/).length || 2 < s.split(/[Mm]/).length || t.length !== e.length));
      }(t, e)) return [t, e];if (!t || !e) return [t, e];if (!document.createElementNS) return [t, e];if (c = n(t), d = n(e), -1 !== c.join().indexOf("undefined")) return [t, e];if (-1 !== d.join().indexOf("undefined")) return [t, e];if (!y.getTotalLength || !y.getPointAtLength) return [t, e];for (m = s(c.length, d.length), g = 0; g < m; ++g) {
        o = on(c[g], d[g]), c[g] = o[0], d[g] = o[1];
      }for (g = c.length; g--;) {
        i(c[g], g), c[g].length || c.pop();
      }for (g = d.length; g--;) {
        i(d[g], g), d[g].length || d.pop();
      }for (function (t) {
        var e = [],
            n = [],
            r = [],
            i = 0,
            o = 0,
            s = !0;if (0 !== t) {
          for (0 < t ? (e = d, s = !1) : (t = -t, e = c), i = 0, o = e.length; i < o; ++i) {
            n.push(1);
          }for (; t--;) {
            0 > --i && (i = o - 1), n[i]++;
          }for (i = 0; i < o; ++i) {
            1 === n[i] ? r.push(e[i]) : r.push.apply(r, a(e[i], n[i]));
          }s ? c = r : d = r;
        }
      }(c.length - d.length), m = s(c.length, d.length), g = 0; g < m; ++g) {
        o = on(r(c[g]), r(d[g])), c[g] = o[0], d[g] = o[1];
      }for (g = 0, m = c.length; g < m; ++g) {
        l = l.concat(c[g]);
      }for (g = 0, m = d.length; g < m; ++g) {
        h = h.concat(d[g]);
      }return [l, h];
    }function an(t, e) {
      "use strict";
      function n(t) {
        var e,
            n = 0;for (n = 0, e = (t = t.split(/[MCLmcl]/).slice(1)).length; n < e; ++n) {
          t[n] = t[n].split(p).slice(1), n || t[n].unshift("M"), n && (2 === t[n].length && t[n].unshift(V) || t[n].unshift("C"));
        }return t;
      }function r(t, e) {
        var n,
            r,
            i = 0,
            a = t.length;for (i = 0, a = t.length; i < a; ++i) {
          n = t[i].join(p), "C" === (r = t[i])[0] && r[3] === r[5] && r[4] === r[6] ? t[i].stringValue = [V, r[3], r[4]].join(p) : r.stringValue = n, e[r.stringValue] && e[r.stringValue].push(i), e[r.stringValue] || (e[r.stringValue] = [i]);
        }
      }function i(t, e, n, r, i) {
        for (var a, o = n, s = 0, u = 0; o < r; ++o) {
          if (a = e[t[o].stringValue]) for (s = 0, u = a.length; s < u; ++s) {
            if (a[s] >= i) return { index: o, mapValue: a[s], diff: o - n };
          }
        }return -1;
      }function a(t) {
        var e = t.length - 1;return ["M", t[e - 1], t[e]].join(p);
      }function o(t) {
        return t.join(f);
      }var s,
          u,
          l,
          h,
          c = 0,
          d = 0,
          g = 0,
          m = 0,
          v = {},
          x = {},
          y = [],
          b = [],
          _ = -1,
          w = -1,
          k = !0;for (t = n(t), e = n(e), r(t, v), r(e, x), l = t.length, h = e.length, c = 0, d = 0; c < l && d < h;) {
        if (++w, y[++_] = [], b[w] = [], k = t[c].stringValue === e[d].stringValue, c && (y[_].push(a(t[c - 1])), b[w].push(a(e[d - 1]))), k) for (; c < l && d < h && t[c].stringValue === e[d].stringValue;) {
          y[_].push(t[c].stringValue), b[w].push(e[d].stringValue), ++c, ++d;
        } else {
          for (s = i(t, x, c, l, d), u = i(e, v, d, h, c), g = s.index, m = s.mapValue, (!~s || s.diff > u.diff) && (g = u.mapValue, m = u.index), ~s || ~u || (g = l - 1, m = h - 1); c <= g;) {
            y[_].push(t[c].stringValue), ++c;
          }for (; d <= m;) {
            b[w].push(e[d].stringValue), ++d;
          }
        }y[_] = o(y[_]), b[w] = o(b[w]);
      }if (c < l) {
        for (y[++_] = [], y[_].push(a(t[c - 1])), b[++w] = [], b[w].push(a(e[d - 1])); c < l;) {
          y[_].push(t[c].stringValue), ++c;
        }y[_] = o(y[_]);
      }if (d < h) {
        for (y[++_] = [], y[_].push(a(t[c - 1])), b[++w] = [], b[w].push(a(e[d - 1])); d < h;) {
          b[w].push(e[d].stringValue), ++d;
        }b[w] = o(b[w]);
      }return [y, b];
    }function on(t, e) {
      "use strict";
      function n(t, e) {
        var n,
            r,
            i,
            a,
            o = 0,
            s = {},
            u = [],
            l = [],
            h = 0,
            c = Math.round;for ((n = document.createElementNS("http://www.w3.org/2000/svg", "path")).setAttribute("d", t), (r = document.createElementNS("http://www.w3.org/2000/svg", "path")).setAttribute("d", e), i = n.getTotalLength(), a = r.getTotalLength(), h = .15 * Math.max(i, a), (h = Math.ceil(h)) && isFinite(h) && !(10 > h) || (h = 10), o = 0; o <= h; ++o) {
          s = n.getPointAtLength(o / h * i), u.push([o ? V : D, c(s.x), c(s.y)]), s = r.getPointAtLength(o / h * a), l.push([o ? V : D, c(s.x), c(s.y)]);
        }return [u, l];
      }var r,
          i,
          a,
          o = 0,
          s = [],
          u = [];for (t && "M  " !== t || (t = e.split(p).slice(0, 3).join(p).replace(/[LC]/, f)), e && "M  " !== e || (e = t.split(p).slice(0, 3).join(p).replace(/[LC]/, f)), o = 0, a = (r = an(t, e))[0].length; o < a; ++o) {
        i = n(r[0][o], r[1][o]), o ? (s = s.concat(i[0].slice(1)), u = u.concat(i[1].slice(1))) : (s = s.concat(i[0]), u = u.concat(i[1]));
      }return [s, u];
    }function sn(t, e, r, i, a, o, u, l) {
      r = K(r);var h,
          c,
          f,
          p,
          g,
          v,
          y,
          b,
          _ = t.ms,
          A = {},
          C = {},
          E = {};if (null !== e.type) {
        if ((l = l || {}).hookFn && l.hookFn.call(e), l.from = l.from || {}, i) for (S = 0, T = $e.length; S < T; S++) {
          var F = $e[S];if (F.el.id === e.id && F.anim === t) {
            F.percent == r ? c = F : (delete F.el.e, delete F.el, $e.splice(S, 1), f = 1), e.attr(F.totalOrigin);break;
          }
        } else i = +C;for (var S = 0, T = t.percents.length; S < T; S++) {
          if (t.percents[S] === r || t.percents[S] > i * t.top) {
            r = t.percents[S], g = t.percents[S - 1] || 0, _ = _ / t.top * (r - g), p = t.percents[S + 1], h = t.anim[r];break;
          }i && e.attr(t.anim[t.percents[S]]);
        }if (h) {
          if (c) c.initstatus = i, c.start = new Date() - c.ms * i;else {
            for (var N in h) {
              if (h[d](N)) if (Tt[d](N) || e.ca[N]) {
                switch (A[N] = l.from[N] || e.attr(N), null == A[N] && (A[N] = St[N]), C[N] = h[N], b = !1, Tt[N]) {case "number":
                    ((y = C[N] - A[N]) || isNaN(y)) && (b = !0), E[N] = y / _;break;case "colour":
                    if (A[N] === C[N]) break;b = !0;var I = nn(A[N], C[N], s.getRGB);A[N] = I[0];var L = I[1];if ((typeof L === "undefined" ? "undefined" : _typeof(L)) == x) A[N].toLowerCase() === k ? A[N] = { r: 0, g: 0, b: 0, opacity: 0 } : (A[N] = s.getRGB(A[N]), !A[N].opacity && (A[N].opacity = 1)), C[N].toLowerCase() === k ? L = { r: 0, g: 0, b: 0, opacity: 0 } : !(L = s.getRGB(C[N])).opacity && (L.opacity = 1), E[N] = { r: (L.r - A[N].r) / _, g: (L.g - A[N].g) / _, b: (L.b - A[N].b) / _, opacity: (L.opacity - A[N].opacity) / _ };else for (E[N] = [], S = 0, T = A[N].length; S < T; ++S) {
                      0 === S ? E[N].push(L[0]) : E[N].push({ r: (L[S].r - A[N][S].r) / _, g: (L[S].g - A[N][S].g) / _, b: (L[S].b - A[N][S].b) / _, opacity: (L[S].opacity - A[N][S].opacity) / _ });
                    }break;case "path":
                    var M,
                        P = fe(A[N], C[N]);for (l.smartMorph && (P = rn(P[0], P[1], l)), M = P[1], A[N] = P[0], E[N] = [], S = 0, T = A[N].length; S < T; S++) {
                      E[N][S] = [0];for (var O = A[N][S] ? A[N][S].length : 0, B = 1; B < O; B++) {
                        E[N][S][B] = (M[S][B] - A[N][S][B]) / _, !b && E[N][S][B] && (b = !0);
                      }
                    }break;case "transform":
                    var R = e._,
                        j = _e(R[N], C[N]);if (b = !0, j) for (A[N] = j.from, C[N] = j.to, E[N] = [], E[N].real = !0, S = 0, T = A[N].length; S < T; S++) {
                      for (E[N][S] = [A[N][S][0]], B = 1, O = A[N][S].length; B < O; B++) {
                        E[N][S][B] = (C[N][S][B] - A[N][S][B]) / _;
                      }
                    } else {
                      var D = e.matrix || new we(),
                          V = { _: { transform: R.transform }, getBBox: function getBBox() {
                          return e.getBBox(1);
                        } };A[N] = [D.a, D.b, D.c, D.d, D.e, D.f], ye(V, C[N]), C[N] = V._.transform, E[N] = [(V.matrix.a - D.a) / _, (V.matrix.b - D.b) / _, (V.matrix.c - D.c) / _, (V.matrix.d - D.d) / _, (V.matrix.e - D.e) / _, (V.matrix.f - D.f) / _];
                    }break;case "csv":
                    var q = J(h[N])[w](mt),
                        z = J(A[N])[w](mt);if ("clip-rect" === N) for (A[N] = z, E[N] = [], S = z.length; S--;) {
                      ((y = q[S] - A[N][S]) || isNaN(y)) && (b = !0), E[N][S] = y / _;
                    }C[N] = q;break;default:
                    for (q = [][m](h[N]), z = [][m](A[N]), E[N] = [], S = e.ca[N].length; S--;) {
                      ((y = (q[S] || 0) - (z[S] || 0)) || isNaN(y)) && (b = !0), E[N][S] = y / _;
                    }}b || (delete A[N], delete C[N], delete h[N], delete E[N]);
              } else (s._availableAttrs[d](N) || "text" === N || e.ca[N]) && (e.attr(N, h[N]), delete h[N]);
            }var X = h.easing,
                Y = s.easing_formulas[X];if (!Y) if ((Y = J(X).match(yt)) && 5 === Y.length) {
              var G = Y;Y = function Y(t) {
                return tn(t, +G[1], +G[2], +G[3], +G[4], _);
              };
            } else Y = Mt;if (v = h.start || t.start || +new Date(), e.e = F = { anim: t, percent: r, timestamp: v, start: v + (t.del || 0), status: 0, initstatus: i || 0, stop: !1, ms: _, easing: Y, from: A, diff: E, to: C, el: e, callback: h.callback, prev: g, next: p, repeat: o || t.times, origin: e.attr(), totalOrigin: a, parentEl: u, delayend: l && l.end, delaystart: l && l.start }, $e.push(F), i && !c && !f && (F.stop = !0, F.start = new Date() - _ * i, 1 === $e.length)) return Ze();f && (F.start = new Date() - F.ms * i), 1 === $e.length && (We || s.getAnimFrameFn())(Ze);
          }(0, n.default)("raphael.anim.start." + e.id, e, t);
        }
      }
    }function un(t) {
      for (var e; e = t.deq();) {
        (e = e.executeOb).hookFn && e.hookFn.call(e.el), e.el.attr(e.attrs), e.callback && e.callback.call(e.el);
      }
    }function ln(t) {
      for (var e = 0; e < $e.length; e++) {
        $e[e].el.paper === t && $e.splice(e--, 1);
      }
    }s.getAnimFrameFn = function () {
      return We = s.requestAnimFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function (t) {
        setTimeout(t, 16);
      };
    }, s.getInstantAnimFrameFn = function () {
      return s.instantRequestAnimFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function (t) {
        setTimeout(t, 16);
      };
    }, Pe.animateWith = function (t, e, n, r, i, a, o) {
      var u,
          l = this,
          h = {};for (u in o = o || {}) {
        o.hasOwnProperty(u) && (h[u] = o[u]);
      }if (o = h, l.removed) return a && a.call(l), l;if (0 === r) return s.is(a, E) && setTimeout(function () {
        a.call(l);
      }, 0), l.attr(n);var c = n instanceof en ? n : s.animation(n, r, i, a);o.start = Ke(o.start || 0), o.end = Ke(o.end || 1), o.start >= o.end && (o.start = o.end), !o.from && .01 < o.start ? (t.animElements = t.animElements || new Xt(function (t, e) {
        return e.pos - t.pos;
      }), t.animElements.enq({ pos: o.start, attr: o.start === o.end, params: [c, l, c.percents[0], null, l.attr(), void 0, t, { start: o.start, end: o.end, smartMorph: o.smartMorph, hookFn: o.hookFn }, n], executeOb: { el: this, attrs: n, callback: a, hookFn: o.hookFn } })) : sn(c, l, c.percents[0], null, l.attr(), void 0, t, o);for (var f = 0, p = $e.length; f < p; f++) {
        if ($e[f].anim === e && $e[f].el === t) {
          $e[p - 1].start = $e[f].start;break;
        }
      }return l;
    }, Pe.onAnimation = function (t) {
      return t ? n.default.on("raphael.anim.frame." + this.id, t) : n.default.unbind("raphael.anim.frame." + this.id), this;
    }, en.prototype.delay = function (t) {
      var e = new en(this.anim, this.ms);return e.times = this.times, e.del = +t || 0, e;
    }, en.prototype.repeat = function (t) {
      var e = new en(this.anim, this.ms);return e.del = this.del, e.times = et.floor(nt(t, 0)) || 1, e;
    }, s.animation = function (t, e, n, r, i) {
      if (t instanceof en) return t;(s.is(n, E) || !n) && (r = r || n || null, n = null), s.stopPartialEventPropagation || (s.stopPartialEventPropagation = i), t = Object(t), e = +e || 0;var a,
          o,
          u = {};for (o in t) {
        t[d](o) && K(o) != o && K(o) + "%" != o && (a = !0, u[o] = t[o]);
      }return r && (a = !0), a ? (n && (u.easing = n), r && (u.callback = r), new en({ 100: u }, e)) : new en(t, e);
    }, Pe.animate = function (t, e, n, r) {
      var i = this;if (i.removed) return r && r.call(i), i;var a = t instanceof en ? t : s.animation(t, e, n, r);return sn(a, i, a.percents[0], null, i.attr()), i;
    }, Pe.status = function (t, e) {
      var n,
          r,
          i = [],
          a = 0;if (null != e) return sn(t, this, -1, rt(e, 1)), this;for (n = $e.length; a < n; a++) {
        if ((r = $e[a]).el.id === this.id && (!t || r.anim === t)) {
          if (t) return r.status;i.push({ anim: r.anim, status: r.status });
        }
      }return t ? 0 : i;
    }, Pe.pause = function (t, e) {
      var r,
          i,
          a = +new Date();for (i = 0; i < $e.length; i++) {
        ((r = $e[i]).el.id === this.id || e && r.parentEl && r.parentEl.e.el && r.parentEl.e.el.id === this.id) && (!t || r.anim === t) && !1 !== (0, n.default)("raphael.anim.pause." + this.id, this, r.anim) && (r.paused = !0, r.pauseStart = a);
      }return this;
    }, Pe.resume = function (t, e) {
      var r,
          i,
          a = +new Date();for (i = 0; i < $e.length; i++) {
        ((r = $e[i]).el.id === this.id || e && r.parentEl && r.parentEl.e.el && r.parentEl.e.el.id === this.id) && (!t || r.anim === t) && !1 !== (0, n.default)("raphael.anim.resume." + this.id, this, r.anim) && (delete r.paused, r.el.status(r.anim, r.status), r.pauseEnd = a, r.start += (r.parentEl && r.parentEl.e.pauseEnd || r.pauseEnd) - (r.parentEl && r.parentEl.e.pauseStart || r.pauseStart) || 0);
      }return this;
    }, Pe.stop = function (t, e, r) {
      var i, a;if (e) for (o = $e.length - 1; 0 <= o; o--) {
        ((i = $e[o]).el.id === this.id || i.parentEl && i.parentEl.id === this.id) && (!t || $e[o].anim === t) && (a = i.el, r && a.attr(i.to), i.callback && i.callback.call(a), delete a.e, delete i.el, $e.splice(o, 1));
      } else for (var o = 0; o < $e.length; o++) {
        (i = $e[o]).el.id !== this.id || t && i.anim !== t || !1 === (0, n.default)("raphael.anim.stop." + this.id, this, i.anim) || $e.splice(o--, 1);
      }return this.animElements && un(this.animElements), this;
    }, n.default.on("raphael.remove", ln), n.default.on("raphael.clear", ln), Pe.toString = function () {
      return "Raphaël’s object";
    }, Pe.toFront = function () {
      if (this.removed) return this;var t,
          e,
          n,
          r = this,
          i = s._engine.getNode(r),
          a = r.parent,
          o = r.followers;for (s._tofront(r, a) && a.canvas.appendChild(i), e = 0, n = o.length; e < n; e++) {
        (t = o[e]).stalk && t.el[t.stalk](r);
      }return r;
    }, Pe.toBack = function () {
      if (this.removed) return this;var t,
          e,
          n,
          r = this,
          i = s._engine.getNode(r),
          a = r.parent,
          o = r.followers;for (s._toback(r, a) && a.canvas.insertBefore(i, a.canvas.firstChild), e = 0, n = o.length; e < n; e++) {
        (t = o[e]).stalk && t.el[t.stalk](r);
      }return r;
    }, Pe.insertAfter = function (t) {
      if (this.removed) return this;var e,
          n,
          r,
          i = this,
          a = s._engine.getNode(i),
          o = s._engine.getLastNode(t),
          u = t.parent.canvas,
          l = i.followers;for (o.nextSibling ? u.insertBefore(a, o.nextSibling) : u.appendChild(a), s._insertafter(i, t, i.parent, t.parent), n = 0, r = l.length; n < r; n++) {
        (e = l[n]).stalk && e.el[e.stalk](t);
      }return i;
    }, Pe.insertBefore = function (t) {
      if (this.removed) return this;var e,
          n,
          r,
          i = this,
          a = s._engine.getNode(i),
          o = s._engine.getNode(t),
          u = i.followers;for (t.parent.canvas.insertBefore(a, o), s._insertbefore(i, t, i.parent, t.parent), i.parent = t.parent, n = 0, r = u.length; n < r; n++) {
        (e = u[n]).stalk && e.el[e.stalk](t);
      }return this;
    }, Pe.appendChild = function (t) {
      if (this.removed || "group" !== this.type) return this;var e,
          n,
          r,
          i,
          a = this,
          o = a.followers;if (t.parent === a) return t.toFront(), a;for (n = s._engine.getNode(t), s._tear(t, t.parent), a.canvas.appendChild(n), t.parent = a, a.bottom || (a.bottom = t), t.prev = a.top, t.next = null, a.top && (a.top.next = t), a.top = t, r = 0, i = o.length; r < i; r++) {
        (e = o[r]).stalk && e.el[e.stalk](t);
      }return a;
    }, Pe.appendTo = function (t) {
      return t.appendChild(this);
    }, Pe.removeChild = function (t) {
      if (this.removed || "group" !== this.type || t.parent !== this) return this;var e = this,
          n = s._engine.getNode(t),
          r = e.paper;return s._tear(t, e), r.canvas.appendChild(n), e.parent = r, r.bottom || (r.bottom = e), e.prev = r.top, r.top && (r.top.next = e), r.top = e, e.next = null, e;
    }, s.format = function (t, e) {
      var n = (0, r.getArrayCopy)(arguments),
          i = s.is(e, y) ? [0][m](e) : n;return t && s.is(t, x) && i.length - 1 && (t = t.replace(vt, function (t, e) {
        return null == i[++e] ? f : i[e];
      })), t || f;
    };var hn = s.vml ? .5 : 0;s.crispBound = (0, r.cacher)(function (t, e, n, r, i) {
      var a,
          o = {};return t = t || 0, e = e || 0, n = n || 0, r = r || 0, a = (i = i || 0) % 2 / 2 + hn, o.x = lt(t + a) - a, o.y = lt(e + a) - a, o.width = lt(t + n + a) - a - o.x, o.height = lt(e + r + a) - a - o.y, o["stroke-width"] = i, 0 === o.width && 0 !== n && (o.width = 1), 0 === o.height && 0 !== r && (o.height = 1), o;
    }, s), Pe.crisp = function () {
      var t,
          e = this,
          n = e.attrs,
          r = e.attr();for (t in r = s.crispBound(r.x, r.y, r.width, r.height, r["stroke-width"])) {
        n[t] === r[t] && delete r[t];
      }return e.attr(r);
    }, s.define = function (t, e, n, i, a, o) {
      var u, l;if (!s.is(t, y)) return s.is(t, b) ? void s.define(t.name, t[t.name], t.ca, t.fn, t.e, t.data) : !t || s.fn[t] ? void 0 : (s.fn[t] = function () {
        var o,
            u = (0, r.getArrayCopy)(arguments),
            l = e.apply(this, u);if (i && s.is(i, b)) for (o in i) {
          l[o] = i[o];
        }if (a && s.is(a, b)) for (o in a) {
          l[o] && l[o](a[o]);
        }if (n) {
          if (s.is(n, E)) l.ca[t] = n;else for (o in n) {
            l.ca[o] = n[o];
          }l.ca[t] && (s._lastArgIfGroup(u, !0), u.length && (u[0][t] ? l.attr.apply(l, u) : l.attr(t, u[0])));
        }return l;
      }, n && (s.fn[t].ca = n), i && (s.fn[t].fn = i), a && (s.fn[t].e = a), o && (s.fn[t].data = o), s.fn[t]);for (u = 0, l = t.length; u < l; u++) {
        s.define(t[u]);
      }
    }, function (t, e, _n6) {
      null == t.readyState && t.addEventListener && (t.addEventListener(e, _n6 = function n() {
        t.removeEventListener(e, _n6, !1), t.readyState = "complete";
      }, !1), t.readyState = "loading"), function e() {
        /in/.test(t.readyState) ? setTimeout(e, 9) : s.eve("raphael.DOMload");
      }();
    }(P, "DOMContentLoaded"), n.default.on("raphael.DOMload", function () {
      u = !0;
    }), exports.default = s;
  }, { "./eve/eve": 124, "./raphael.lib": 84 }], 29: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../vendors/redraphael/source/raphael.core"),
        t = a(e);function a(e) {
      return e && e.__esModule ? e : { default: e };
    }t.default.stopPartialEventPropagation = !0, t.default._stopabsolutePath = !0, exports.default = { extension: t.default, name: "redraphael", type: "plugin" };
  }, { "../vendors/redraphael/source/raphael.core": 87 }], 88: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      if (e.svg) {
        var r = { visibility: "hidden", "font-size": "0px" },
            i = String,
            a = parseFloat,
            n = parseInt,
            s = { top: 0, bottom: -1, middle: -.5 },
            o = !!document.documentMode,
            l = Math,
            d = l.max,
            h = l.abs,
            p = l.pow,
            c = l.sqrt,
            f = /^xlink:/,
            u = /[, ]+/,
            g = /\n|<br\s*?\/?>/i,
            v = /&lt|&gt|<br/i,
            y = Array.prototype.shift,
            _ = !(!/AppleWebKit/.test(e._g.win.navigator.userAgent) || /Chrome/.test(e._g.win.navigator.userAgent) && !(29 > e._g.win.navigator.appVersion.match(/Chrome\/(\d+)\./)[1])),
            w = e.eve,
            m = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
            b = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" },
            x = { speed: "optimizeSpeed", crisp: "crispEdges", precision: "geometricPrecision" },
            k = e._g.win.navigator.userAgent.toLowerCase(),
            C = function () {
          var t = -1 != k.indexOf("msie") && parseInt(k.split("msie")[1]);return !(!t || 9 !== t);
        }(),
            A = {},
            S = function S(t, r, i, a) {
          e._preload(i[1], function () {
            var e = this.offsetWidth,
                i = this.offsetHeight;B(t, { width: e, height: i }), B(r, { width: e, height: i }), a.safari();
          });
        },
            T = function T(t, e) {
          if (e) for (var r in e) {
            t[r] = e[r];
          }
        };e.cachedFontHeight = {}, e.toString = function () {
          return "Your browser supports SVG.\nYou are running Raphaël " + this.version;
        }, e._url = "";var N = function N(t, e) {
          var r = t.gradient;if (r) {
            if (r === e) return;r.refCount--, r.refCount || r.parentNode.removeChild(r), delete t.gradient;
          }e && (t.gradient = e, e.refCount++);
        },
            B = e._createNode = function (t, r) {
          var a, n;if ("string" == typeof t && (t = e._g.doc.createElementNS("http://www.w3.org/2000/svg", t)), r) for (a in r) {
            n = C ? i(r[a]) : r[a], f.test(a) ? t.setAttributeNS("http://www.w3.org/1999/xlink", a.replace(f, ""), n) : t.setAttribute(a, n);
          }return t;
        },
            L = { userSpaceOnUse: "userSpaceOnUse", objectBoundingBox: "objectBoundingBox" },
            P = { pad: "pad", redlect: "reflect", repeat: "repeat" },
            M = function M(t, r) {
          if (!t.paper || !t.paper.defs) return 0;var n,
              s,
              o,
              f,
              u,
              g,
              v = "linear",
              y = t.paper,
              _ = e.getElementID((y.id + "-" + r).replace(/[()\s%:,\xb0#]/g, "_")),
              w = .5,
              m = .5,
              b = t.node,
              x = b.style,
              k = e._g.doc.getElementById(_);if (!k) {
            if (r = (r = i(r).replace(e._radial_gradient, function (t, e) {
              v = "radial", e = e ? e.split(",") : [], f = e[5], u = e[6];var r,
                  i,
                  l = e[0],
                  d = e[1],
                  h = e[2],
                  g = e[3],
                  y = e[4],
                  _ = l && d;return h && (n = /%/.test(h) ? h : a(h)), f === L.userSpaceOnUse ? (_ && (w = l, m = d), g && y && (s = g, o = y, !_ && (w = s, m = o)), "") : (_ && (w = a(l), r = 2 * (.5 < (m = a(d))) - 1, .25 < (i = p(w - .5, 2)) + p(m - .5, 2) && .25 > i && (m = c(.25 - i) * r + .5) && .5 !== m && (m = m.toFixed(5) - 1e-5 * r)), g && y && (s = a(g), r = 2 * (.5 < (o = a(y))) - 1, .25 < (i = p(s - .5, 2)) + p(o - .5, 2) && .25 > i && (o = c(.25 - i) * r + .5) && .5 !== o && (o = o.toFixed(5) - 1e-5 * r), !_ && (w = s, m = o)), "");
            })).split(/\s*-\s*/), "linear" == v) {
              var C,
                  A = r.shift(),
                  S = A.match(/\((.*)\)/);if (S = S && S[1] && S[1].split(/\s*,\s*/), A = -a(A), isNaN(A)) return null;S && S.length ? (S[0] in L ? (f = S.shift(), S[0] in P && (u = S.shift())) : (S[4] && (f = S[4]), S[5] && (u = S[5])), g = [S[0] || "0%", S[1] || "0%", S[2] || "100%", S[3] || "0%"]) : (g = [0, 0, l.cos(e.rad(A)), l.sin(e.rad(A))], C = 1 / (d(h(g[2]), h(g[3])) || 1), g[2] *= C, g[3] *= C, 0 > g[2] && (g[0] = -g[2], g[2] = 0), 0 > g[3] && (g[1] = -g[3], g[3] = 0));
            }var T = e._parseDots(r);if (!T) return null;(k = B(v + "Gradient", { id: _ })).refCount = 0, f in L && k.setAttribute("gradientUnits", i(f)), u in P && k.setAttribute("spreadMethod", i(u)), "radial" == v ? (void 0 !== n && k.setAttribute("r", i(n)), void 0 !== s && void 0 !== o && (k.setAttribute("cx", i(s)), k.setAttribute("cy", i(o))), k.setAttribute("fx", i(w)), k.setAttribute("fy", i(m))) : B(k, { x1: g[0], y1: g[1], x2: g[2], y2: g[3] });for (var M = 0, O = T.length; M < O; M++) {
              k.appendChild(B("stop", { offset: T[M].offset ? T[M].offset : M ? "100%" : "0%", "stop-color": T[M].color || "#fff", "stop-opacity": void 0 === T[M].opacity ? 1 : T[M].opacity }));
            }y.defs.appendChild(k);
          }return N(t, k), B(b, { fill: "url('" + e._url + "#" + _ + "')", "fill-opacity": 1 }), x.fill = "", 1;
        },
            O = function O(t) {
          var e = t.getBBox(1);B(t.pattern, { patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")" });
        },
            z = function z(t, r, a) {
          if ("path" == t.type) {
            for (var n, s, o, l, d, h = i(r).toLowerCase().split("-"), p = t.paper, c = a ? "end" : "start", f = t.node, u = t.attrs, g = u["stroke-width"], v = h.length, y = "classic", _ = 3, w = 3, m = 5; v--;) {
              switch (h[v]) {case "block":case "classic":case "oval":case "diamond":case "open":case "none":
                  y = h[v];break;case "wide":
                  w = 5;break;case "narrow":
                  w = 2;break;case "long":
                  _ = 5;break;case "short":
                  _ = 2;}
            }if ("open" == y ? (_ += 2, w += 2, m += 2, o = 1, l = a ? 4 : 1, d = { fill: "none", stroke: u.stroke }) : (l = o = _ / 2, d = { fill: u.stroke, stroke: "none" }), t._.arrows ? a ? (t._.arrows.endPath && A[t._.arrows.endPath]--, t._.arrows.endMarker && A[t._.arrows.endMarker]--) : (t._.arrows.startPath && A[t._.arrows.startPath]--, t._.arrows.startMarker && A[t._.arrows.startMarker]--) : t._.arrows = {}, "none" != y) {
              var x = "raphael-marker-" + y,
                  k = "raphael-marker-" + c + y + _ + w + "-obj" + t.id;e._g.doc.getElementById(x) ? A[x]++ : (p.defs.appendChild(B(B("path"), { "stroke-linecap": "round", d: b[y], id: x })), A[x] = 1);var C,
                  S = e._g.doc.getElementById(k);S ? (A[k]++, C = S.getElementsByTagName("use")[0]) : (S = B(B("marker"), { id: k, markerHeight: w, markerWidth: _, orient: "auto", refX: l, refY: w / 2 }), C = B(B("use"), { "xlink:href": "#" + x, transform: (a ? "rotate(180 " + _ / 2 + " " + w / 2 + ") " : "") + "scale(" + _ / m + "," + w / m + ")", "stroke-width": (1 / ((_ / m + w / m) / 2)).toFixed(4) }), S.appendChild(C), p.defs.appendChild(S), A[k] = 1), B(C, d);var T = o * ("diamond" != y && "oval" != y);a ? (n = t._.arrows.startdx * g || 0, s = e.getTotalLength(u.path) - T * g) : (n = T * g, s = e.getTotalLength(u.path) - (t._.arrows.enddx * g || 0)), (d = {})["marker-" + c] = "url('" + e._url + "#" + k + "')", (s || n) && (d.d = e.getSubpath(u.path, n, s)), B(f, d), t._.arrows[c + "Path"] = x, t._.arrows[c + "Marker"] = k, t._.arrows[c + "dx"] = T, t._.arrows[c + "Type"] = y, t._.arrows[c + "String"] = r;
            } else a ? (n = t._.arrows.startdx * g || 0, s = e.getTotalLength(u.path) - n) : (n = 0, s = e.getTotalLength(u.path) - (t._.arrows.enddx * g || 0)), t._.arrows[c + "Path"] && B(f, { d: e.getSubpath(u.path, n, s) }), delete t._.arrows[c + "Path"], delete t._.arrows[c + "Marker"], delete t._.arrows[c + "dx"], delete t._.arrows[c + "Type"], delete t._.arrows[c + "String"];for (d in A) {
              if (A.hasOwnProperty(d) && !A[d]) {
                var N = e._g.doc.getElementById(d);N && N.parentNode.removeChild(N);
              }
            }
          }
        },
            E = { "": ["none"], none: ["none"], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
            I = function I(t, r, i) {
          if (void 0 !== r) {
            var a,
                n,
                s,
                o,
                l,
                d = E[r.toLowerCase && r.toLowerCase()];if (r = d || [].concat(r), e.is(r, "array")) {
              if (s = { round: n = i["stroke-width"] || t.attrs["stroke-width"] || 1, square: n, butt: 0 }[i["stroke-linecap"] || t.attrs["stroke-linecap"]] || 0, o = r.length, l = d ? n : 1, "none" === r[0]) a = r;else for (a = []; o--;) {
                a[o] = r[o] * l + (o % 2 ? 1 : -1) * s, 0 >= a[o] && (a[o] = .01 + (1 >= n ? s : 0)), isNaN(a[o]) && (a[o] = 0);
              }return { "stroke-dasharray": a.join(",") };
            }
          }
        },
            D = e._setFillAndStroke = function (r, a) {
          if (r.paper.canvas) {
            var s,
                o,
                l,
                p,
                c,
                f = r.node,
                g = r.attrs,
                v = r.paper,
                y = {},
                w = {};for (o in "image" === r.type && (0, t.loadRefImage)(r, a), a) {
              if (o in e._availableAttrs) if ("" === (l = a[o]) && o in g) delete g[o], f.removeAttribute("src" === o ? "href" : o);else switch (g[o] = l, o) {case "blur":
                  r.blur(l);break;case "href":case "title":case "target":
                  var m = f.parentNode;if ("a" !== m.tagName.toLowerCase()) {
                    if ("" === l) break;var b = B("a");b.raphael = !0, b.raphaelid = f.raphaelid, m.insertBefore(b, f), b.appendChild(f), m = b;
                  }"target" === o ? m.setAttributeNS("http://www.w3.org/1999/xlink", "show", "blank" === l ? "new" : l) : m.setAttributeNS("http://www.w3.org/1999/xlink", o, l), f.titleNode = m;break;case "cursor":
                  w.cursor = l;break;case "transform":
                  r.transform(l);break;case "rotation":
                  e.is(l, "array") ? r.rotate.apply(r, l) : r.rotate(l);break;case "arrow-start":
                  z(r, l);break;case "arrow-end":
                  z(r, l, 1);break;case "clip-path":
                  p = !0;case "clip-rect":
                  if (c = !p && i(l).split(u), r._.clipispath = !!p, p || 4 === c.length) {
                    r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);var k = B(p ? "path" : "rect");(s = B("clipPath")).id = e.getElementID(e.createUUID()), B(k, p ? { d: l ? g["clip-path"] = e._pathToAbsolute(l) : e._availableAttrs.path, fill: "none" } : { x: c[0], y: c[1], width: c[2], height: c[3], transform: r.matrix.invert() }), s.appendChild(k), v.defs.appendChild(s), y["clip-path"] = "url('" + e._url + "#" + s.id + "')", r.clip = k;
                  }if (!l) {
                    var C = f.getAttribute("clip-path");if (C) {
                      var A = e._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g, ""));A && A.parentNode.removeChild(A), y["clip-path"] = "", 11 === document.documentMode && f.removeAttribute("clip-path"), delete r.clip;
                    }
                  }break;case "path":
                  "path" === r.type && (y.d = l ? g.path = e._stopabsolutePath ? e.sanitizePath(l) : e._pathToAbsolute(l) : e._availableAttrs.path, r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && z(r, r._.arrows.startString), "endString" in r._.arrows && z(r, r._.arrows.endString, 1)));break;case "width":
                  if (y[o] = l, r._.dirty = 1, !g.fx) break;o = "x", l = g.x;case "x":
                  g.fx && (l = -g.x - (g.width || 0));case "rx":
                  if ("rx" === o && "rect" === r.type) break;case "cx":
                  y[o] = l, r.pattern && O(r), r._.dirty = 1;break;case "height":
                  if (y[o] = l, r._.dirty = 1, !g.fy) break;o = "y", l = g.y;case "y":
                  if ("text" === r.type) break;g.fy && (l = -g.y - (g.height || 0));case "ry":
                  if ("ry" === o && "rect" === r.type) break;case "cy":
                  y[o] = l, r.pattern && O(r), r._.dirty = 1;break;case "r":
                  "rect" === r.type ? y.rx = y.ry = l : y[o] = l, r._.dirty = 1;break;case "src":
                  "image" === r.type && f.setAttributeNS("http://www.w3.org/1999/xlink", "href", l);break;case "stroke-width":
                  (1 !== r._.sx || 1 !== r._.sy) && (l /= d(h(r._.sx), h(r._.sy)) || 1), v._vbSize && (l *= v._vbSize), _ && 0 === l && (l = 1e-6), y[o] = l, !a["stroke-dasharray"] && g["stroke-dasharray"] && T(y, I(r, g["stroke-dasharray"], a)), r._.arrows && ("startString" in r._.arrows && e.addArrow && e.addArrow(r, r._.arrows.startString), "endString" in r._.arrows && e.addArrow && e.addArrow(r, r._.arrows.endString, 1));break;case "stroke-dasharray":
                  T(y, I(r, l, a));break;case "fill":
                  var L = e._ISURL.test(l);if (L) {
                    s = B("pattern");var P = B("image");s.id = e.getElementID(e.createUUID()), B(s, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), B(P, { x: 0, y: 0, "xlink:href": L[1] }), s.appendChild(P), S(s, P, L, v), v.defs.appendChild(s), y.fill = "url('" + e._url + "#" + s.id + "')", r.pattern = s, r.pattern && O(r);break;
                  }var E = e.getRGB(l);if (E.error) {
                    if (("circle" === r.type || "ellipse" === r.type || "r" !== i(l).charAt()) && M(r, l)) {
                      g.gradient = l;break;
                    }
                  } else delete a.gradient, delete g.gradient, !e.is(g["fill-opacity"], "undefined") && e.is(a["fill-opacity"], "undefined") && (y["fill-opacity"] = g["fill-opacity"]), r.gradient && N(r);E.hasOwnProperty("opacity") ? (y["fill-opacity"] = 1 < E.opacity ? E.opacity / 100 : E.opacity, r._.fillOpacityDirty = !0) : r._.fillOpacityDirty && e.is(g["fill-opacity"], "undefined") && e.is(a["fill-opacity"], "undefined") && (f.removeAttribute("fill-opacity"), delete r._.fillOpacityDirty);case "stroke":
                  E = e.getRGB(l), y[o] = E.hex, "stroke" === o && (E.hasOwnProperty("opacity") ? (y["stroke-opacity"] = 1 < E.opacity ? E.opacity / 100 : E.opacity, r._.strokeOpacityDirty = !0) : r._.strokeOpacityDirty && e.is(g["stroke-opacity"], "undefined") && e.is(a["stroke-opacity"], "undefined") && (f.removeAttribute("stroke-opacity"), delete r._.strokeOpacityDirty), r._.arrows && ("startString" in r._.arrows && z(r, r._.arrows.startString), "endString" in r._.arrows && z(r, r._.arrows.endString, 1)));break;case "gradient":
                  ("circle" === r.type || "ellipse" === r.type || "r" !== i(l).charAt()) && M(r, l);break;case "visibility":
                  "hidden" === l ? r.hide() : r.show();break;case "opacity":
                  l = 1 < l ? l / 100 : l, y.opacity = l;break;case "fill-opacity":
                  l = 1 < l ? l / 100 : l, y["fill-opacity"] = l;break;case "shape-rendering":
                  r.attrs[o] = l = x[l] || l || "auto", y[o] = l, f.style.shapeRendering = l;break;case "line-height":case "vertical-align":
                  break;default:
                  "font-size" === o && (l = n(l, 10) + "px"), r._.dirty = 1, y[o] = l, t.dashedAttr2CSSMap[o] && (w[t.dashedAttr2CSSMap[o]] = l);}
            }for (o in w) {
              f.style[o] = w[o];
            }for (o in y) {
              f.setAttribute(o, y[o]);
            }"text" !== r.type || a["_do-not-tune"] || F(r, a);
          }
        },
            R = e._updateFollowers = function () {
          var e,
              r,
              i,
              a = (0, t.getArrayCopy)(arguments),
              n = y.call(a),
              s = y.call(a);for (e = 0, r = n.followers.length; e < r; e++) {
            (i = n.followers[e].el)[s].apply(i, a);
          }
        },
            F = function F(t, n) {
          if ("text" === t.type && (n.hasOwnProperty("text") || n.hasOwnProperty("font") || n.hasOwnProperty("font-size") || n.hasOwnProperty("x") || n.hasOwnProperty("y") || n.hasOwnProperty("line-height") || n.hasOwnProperty("vertical-align"))) {
            var l,
                d,
                h,
                p,
                c,
                f,
                u,
                y,
                _,
                w,
                m,
                b = t.attrs,
                x = t.parent,
                k = t.node,
                C = t._oldAttr = t._oldAttr || { baseLineDiff: 8, valign: -.5 },
                A = a(n["line-height"] || b["line-height"]),
                S = n.direction || b.direction || x && x.attrs && x.attrs.direction || C.direction || "initial",
                T = !1,
                N = !1,
                L = o || "rtl" !== S ? 1 : 2,
                P = !1,
                M = !1,
                O = !o && C.direction && S !== C.direction;if (C.direction = S, A || (A = 1.2 * (l = (l = n.fontSize || n["font-size"] || b["font-size"] || x && x.attrs && x.attrs.fontSize) ? l.toString().replace("px", "") : 10)), n.hasOwnProperty("text") && (m = e.is(n.text, "array") ? n.text.join("<br>") : n.text) !== C.text && (M = !0, m && v.test(m) && (m = m.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&<br\/>lt;|&l<br\/>t;|&lt<br\/>;/g, "<<br/>").replace(/&<br\/>gt;|&g<br\/>t;|&gt<br\/>;/g, "><br/>")), C.text = b.text = m, g.test(m) ? (C.noTSpan && (C.noTSpan = !(O = !0)), c = (u = i(m).split(g)).length) : (O = !0, C.noTSpan = !0, c = 1), C.lineCount !== c && (C.lineCount = c, P = !0)), A !== C.lineHeight && (C.lineHeight = A, C.baseLineDiff = .75 * A, P = !0), O) for (; k.firstChild;) {
              k.removeChild(k.firstChild);
            }if (1 < C.lineCount) {
              if (h = {}, C.tspanAttr || (C.tspanAttr = {}, C.tspan0Attr = {}), C.tspanAttr.dy !== C.lineHeight && (C.tspanAttr.dy = h.dy = C.lineHeight, N = !0), n.hasOwnProperty("x") && C.tspanAttr.x !== n.x && (C.tspan0Attr.x = C.tspanAttr.x = h.x = b.x, N = !0), M) {
                for (w = k.getElementsByTagName("tspan"), p = 0; p < c; p++) {
                  if (_ = w[p * L]) {
                    if (_.innerHTML = "", o) for (; _.firstChild;) {
                      _.removeChild(_.firstChild);
                    }N && B(_, p ? h : C.tspan0Attr);
                  } else _ = B("tspan", p ? C.tspanAttr : C.tspan0Attr), k.appendChild(_), o || "rtl" !== S || ((y = B("tspan", r)).appendChild(e._g.doc.createTextNode("i")), k.appendChild(y));u[p] || (_.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), u[p] = " "), _.appendChild(e._g.doc.createTextNode(u[p]));
                }if (f = c * L, w.length > f) for (p = w.length - 1; p >= f; p -= 1) {
                  k.removeChild(w[p]);
                }
              } else if (N) for (f = (w = k.getElementsByTagName("tspan")).length, p = 0; p < f; p += L) {
                B(w[p], p ? h : C.tspan0Attr);
              }
            } else M && k.appendChild(e._g.doc.createTextNode(m));n["vertical-align"] && (d = s[b["vertical-align"]] || 0) !== C.valign && (C.valign = d, P = !0), P && (C.shift = C.baseLineDiff + C.lineCount * C.lineHeight * C.valign, T = !0), (n.y || 0 === n.y) && C.y !== n.y && (C.y = b.y, T = !0), T && B(k, { y: Math.round(C.y + C.shift) });
          }
        },
            U = function U(t, r, i) {
          var a = this,
              n = i || r;n.canvas && n.canvas.appendChild(t), a.node = a[0] = t, t.raphael = !0, t.raphaelid = a.id = e._oid++, a.matrix = e.matrix(), a.realPath = null, a.attrs = a.attrs || {}, a.followers = a.followers || [], a.paper = r, a.ca = a.customAttributes = a.customAttributes || new r._CustomAttributes(), a._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, a.parent = n, n.bottom || (n.bottom = a), a.prev = n.top, n.top && (n.top.next = a), n.top = a, a.next = null;
        },
            H = e.el;U.prototype = H, H.constructor = U, e._engine.getNode = function (t) {
          var e = t.node || t[0].node;return e.titleNode || e;
        }, e._engine.getLastNode = function (t) {
          var e = t.node || t[t.length - 1].node;return e.titleNode || e;
        }, H.rotate = function (t, e, r) {
          var n,
              s = this;return s.removed ? s : (R(s, "rotate", t, e, r), (t = i(t).split(u)).length - 1 && (e = a(t[1]), r = a(t[2])), t = a(t[0]), null == r && (e = r), (null == e || null == r) && (e = (n = s.getBBox(1)).x + n.width / 2, r = n.y + n.height / 2), s.transform(s._.transform.concat([["r", t, e, r]])), s);
        }, H.scale = function (t, e, r, n) {
          var s,
              o = this;return o.removed ? o : (R(o, "scale", t, e, r, n), (t = i(t).split(u)).length - 1 && (e = a(t[1]), r = a(t[2]), n = a(t[3])), t = a(t[0]), null == e && (e = t), null == n && (r = n), (null == r || null == n) && (s = o.getBBox(1)), r = null == r ? s.x + s.width / 2 : r, n = null == n ? s.y + s.height / 2 : n, o.transform(o._.transform.concat([["s", t, e, r, n]])), o);
        }, H.translate = function (t, e) {
          var r = this;return r.removed ? r : (R(r, "translate", t, e), (t = i(t).split(u)).length - 1 && (e = a(t[1])), t = a(t[0]) || 0, e = +e || 0, r.transform(r._.transform.concat([["t", t, e]])), r);
        }, H.transform = function (t) {
          var r,
              i = this,
              a = i._;return null == t ? a.transform : (e._extractTransform(i, t), i.clip && !a.clipispath && B(i.clip, { transform: i.matrix.invert() }), i.pattern && O(i), i.node && B(i.node, { transform: i.matrix }), (1 !== a.sx || 1 !== a.sy) && (r = i.attrs["stroke-width"]) && i.attr({ "stroke-width": r }), i);
        }, H.hide = function () {
          var t = this;return R(t, "hide"), t.removed || t.paper.safari(t.node.style.display = "none"), t;
        }, H.show = function () {
          var t = this;return R(t, "show"), t.removed || t.paper.safari(t.node.style.display = ""), t;
        }, H.remove = function () {
          if (!this.removed && this.parent.canvas) {
            var t,
                r = this,
                i = e._engine.getNode(r),
                a = r.paper,
                n = a.defs;for (a.__set__ && a.__set__.exclude(r), w.unbind("raphael.*.*." + r.id), r.gradient && n && N(r); t = r.followers.pop();) {
              t.el.remove();
            }for (; t = r.bottom;) {
              t.remove();
            }if (r._drag && r.undrag(), r.events) for (; t = r.events.pop();) {
              t.unbind();
            }for (t in r.parent.canvas.contains(i) && r.parent.canvas.removeChild(i), r.removeData(), delete a._elementsById[r.id], e._tear(r, r.parent), r) {
              r[t] = "function" == typeof r[t] ? e._removedFactory(t) : null;
            }r.removed = !0;
          }
        }, H._getBBox = function () {
          var e,
              r,
              i,
              a = this,
              n = a.node,
              s = {},
              l = a.attrs,
              d = "text" === a.type;o && d ? e = (0, t.showRecursively)(a) : "none" === n.style.display && (a.show(), i = !0);try {
            s = n.getBBox(), d && (void 0 === s.x && (s.isCalculated = !0, r = l["text-anchor"], s.x = (l.x || 0) - s.width * ("start" === r ? 0 : "middle" === r ? .5 : 1)), void 0 === s.y && (s.isCalculated = !0, r = l["vertical-align"], s.y = (l.y || 0) - s.height * ("bottom" === r ? 1 : "middle" === r ? .5 : 0)));
          } catch (r) {} finally {
            s = s || {};
          }return o && d ? e && e() : i && a.hide(), s;
        }, H.attr = function (t, r) {
          if (this.removed) return this;var i,
              a,
              n,
              s,
              o,
              l,
              d,
              h,
              p = this.attrs,
              c = {},
              f = this._invokedCa || (this._invokedCa = {}),
              u = this.ca;if (null == t) {
            var g = {};for (i in p) {
              p.hasOwnProperty(i) && (g[i] = p[i]);
            }return g.gradient && "none" === g.fill && (g.fill = g.gradient) && delete g.gradient, g.transform = this._.transform, g.visibility = "none" === this.node.style.display ? "hidden" : "visible", g;
          }if (null != r) (s = {})[t] = r;else if (e.is(t, "object")) s = t;else if (e.is(t, "string")) return "fill" === t && "none" === p.fill && p.gradient ? p.gradient : "transform" === t ? this._.transform : "visibility" === t ? "none" === this.node.style.display ? "hidden" : "visible" : t in p ? p[t] : e.is(u[t], "function") ? u[t].def : e._availableAttrs[t];if (!e.stopPartialEventPropagation) for (i in s) {
            w("raphael.attr." + i + "." + this.id, this, s[i], i);
          }for (i in s) {
            if ((h = u[i]) && !f[i] && e.is(h, "function")) {
              for (o in f[i] = !0, l = h.apply(this, [].concat(s[i])), f[i] = !1, l) {
                c[o] = l[o];
              }p[i] = s[i];
            } else c[i] = s[i];
          }for (D(this, c), a = 0, n = this.followers.length; a < n; a++) {
            (d = this.followers[a]).cb && !d.cb.call(d.el, c, this) || d.el.attr(c);
          }return this;
        }, H.on = function (t, r, i) {
          var a,
              n,
              s,
              o = this;return this.removed ? this : "dragstart" === t ? (this.drag(null, r), this) : "dragmove" === t ? (this.drag(r), this) : "dragend" === t ? (this.drag(null, null, r), this) : (n = r, s = t, e.supportsTouch && !i && (t = e._touchMap[t] || "click" === t && "touchend" || t) !== s && (!o._tempTouchListeners && (o._tempTouchListeners = {}), !o._tempTouchListeners[s] && (o._tempTouchListeners[s] = []), n = function n(t) {
            t.preventDefault(), r(t);
          }, o._tempTouchListeners[s].push({ oldFn: r, newFn: n, newEvt: t }), !m && o.on(s, r, !0)), this._ && this._.RefImg && ("load" === t || "error" === t) ? (a = this._.RefImg, n = function n(t) {
            o.removed || r.call(o, t);
          }) : a = this.node, a.addEventListener ? a.addEventListener(t, n) : a["on" + t] = n, this);
        }, H.off = function (t, r) {
          var i,
              a,
              n,
              s,
              o,
              l = this;if (this.removed) return this;if ("dragstart" === t) return this.undragstart(), this;if ("dragmove" === t) return this.undragmove(), this;if ("dragend" === t) return this.undragend(), this;if (i = r, o = t, e.supportsTouch && l._tempTouchListeners && l._tempTouchListeners[o]) for (n = l._tempTouchListeners[o].length, a = 0; a < n && o === t; a += 1) {
            l._tempTouchListeners[o][a] && l._tempTouchListeners[o][a].oldFn === i && (t = l._tempTouchListeners[o][a].newEvt, i = l._tempTouchListeners[o][a].newFn, l._tempTouchListeners[o].splice(a, 1));
          }return (s = this._ && this._.RefImg ? this._.RefImg : this.node).removeEventListener ? s.removeEventListener(t, i) : s["on" + t] = null, this;
        }, e._engine.path = function (t, e, r) {
          var i = B("path"),
              a = new U(i, t, r);return a.type = "path", e && a.attr(e), a;
        }, e._engine.group = function (t, e, r) {
          var i = B("g"),
              a = new U(i, t, r);return a.type = "group", a.canvas = a.node, a.top = a.bottom = null, a._id = e || "", e && i.setAttribute("class", "raphael-group-" + a.id + "-" + e), a;
        }, e._engine.circle = function (t, e, r) {
          var i = B("circle"),
              a = new U(i, t, r);return a.type = "circle", e && a.attr(e), a;
        }, e._engine.rect = function (t, e, r) {
          var i = B("rect"),
              a = new U(i, t, r);return a.type = "rect", e.rx = e.ry = e.r, e && a.attr(e), a;
        }, e._engine.ellipse = function (t, e, r) {
          var i = B("ellipse"),
              a = new U(i, t, r);return a.type = "ellipse", e && a.attr(e), a;
        }, e._engine.image = function (t, e, r) {
          var i = B("image"),
              a = new U(i, t, r, !0);return a._.group = r || t, a.type = "image", i.setAttribute("preserveAspectRatio", "none"), e && a.attr(e), a;
        }, e._engine.text = function (t, e, r, i) {
          var a = B("text"),
              n = new U(a, t, r);return n.type = "text", i && n.css && n.css(i, void 0, !0), e && n.attr(e), n;
        }, e._engine.setSize = function (t, e) {
          return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
        }, e._engine.create = function () {
          var t,
              r = e._getContainer.apply(0, arguments),
              i = r && r.container,
              a = r.x,
              n = r.y,
              s = r.width,
              o = r.height;if (!i) throw new Error("SVG container not found.");var l,
              d = B("svg");return a = a || 0, n = n || 0, B(d, { height: o = o || 342, version: 1.1, width: s = s || 512, xmlns: "http://www.w3.org/2000/svg" }), 1 === i ? (d.style.cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;vertical-align:middle;position:absolute;left:" + a + "px;top:" + n + "px", (i = e._g.doc.body).appendChild(d), l = 1) : (d.style.cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;vertical-align:middle;position:relative", i.firstChild ? i.insertBefore(d, i.firstChild) : i.appendChild(d)), (t = new e._Paper()).width = s, t.height = o, t.canvas = d, t.container = i, B(d, { id: "raphael-paper-" + t.id }), t.clear(), t._left = t._top = 0, l && (t.renderfix = function () {}), t.renderfix(), t;
        }, e._engine.setViewBox = function (t, e, r, i, a) {
          w("raphael.setViewBox", this, this._viewBox, [t, e, r, i, a]);var n,
              s,
              o = d(r / this.width, i / this.height),
              l = this.top,
              h = a ? "meet" : "xMinYMin";if (null == t ? (this._vbSize && (o = 1), delete this._vbSize, n = "0 0 " + this.width + " " + this.height) : (this._vbSize = o, n = t + " " + e + " " + r + " " + i), B(this.canvas, { viewBox: n, preserveAspectRatio: h }), o) for (; l;) {
            s = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({ "stroke-width": s }), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
          }return this._viewBox = [t, e, r, i, !!a], this;
        }, e.prototype.detachPaper = function () {
          !1 !== this._detached && (this.container.removeChild(this.canvas), this._detached = !0);
        }, e.prototype.attachPaper = function () {
          this._detached && (this.container.appendChild(this.canvas), this._detached = !1);
        }, e.prototype.renderfix = function () {
          var t,
              e = this.canvas,
              r = e.style;try {
            t = e.getScreenCTM() || e.createSVGMatrix();
          } catch (r) {
            t = e.createSVGMatrix();
          }var i = -t.e % 1,
              a = -t.f % 1;(i || a) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), a && (this._top = (this._top + a) % 1, r.top = this._top + "px"));
        }, e.prototype._desc = function (t) {
          var r = this.desc;if (r) for (; r.firstChild;) {
            r.removeChild(r.firstChild);
          } else this.desc = r = B("desc"), this.canvas.appendChild(r);r.appendChild(e._g.doc.createTextNode(e.is(t, "string") ? t : "Created with Red Raphaël " + e.version));
        }, e.prototype.clear = function () {
          var t;for (w("raphael.clear", this); t = this.bottom;) {
            t.remove();
          }for (t = this.canvas; t.firstChild;) {
            t.removeChild(t.firstChild);
          }this.bottom = this.top = null, t.appendChild(this.desc = B("desc")), t.appendChild(this.defs = B("defs"));
        }, e.prototype.remove = function () {
          for (w("raphael.remove", this); t = this.bottom;) {
            t.remove();
          }for (var t in this.defs && this.defs.parentNode.removeChild(this.defs), this.desc && this.desc.parentNode.removeChild(this.desc), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) {
            this[t] = "function" == typeof this[t] ? e._removedFactory(t) : null;
          }this.removed = !0;
        }, e.prototype.setHTMLClassName = function () {};
      }
    };var t = require("./raphael.lib");
  }, { "./raphael.lib": 84 }], 30: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../vendors/redraphael/source/raphael.svg"),
        r = t(e);function t(e) {
      return e && e.__esModule ? e : { default: e };
    }exports.default = { extension: function extension(e) {
        (0, r.default)(e.getDep("redraphael", "plugin"));
      }, name: "redraphaelSvg", type: "plugin", requiresFusionCharts: !0 };
  }, { "../vendors/redraphael/source/raphael.svg": 88 }], 31: [function (require, module, exports) {
    "use strict";
    function t(t) {
      var e = { data: {} };if (!t) return e;if ("string" == typeof t) try {
        e.data = JSON.parse(t);
      } catch (t) {
        e.error = t;
      } else e.data = t;return e;
    }function e() {
      return this.getChartData("json");
    }function r(t) {
      this.setChartData(t, "json");
    }function a(a) {
      return a && (a.prototype.setJSONData = r), a && (a.prototype.getJSONData = e), { format: "json", toJSON: t, fromJSON: t };
    }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { extension: a, name: "JSON", type: "transcoder", requiresFusionCharts: !0 };
  }, {}], 76: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (t) {
      var s,
          r,
          i,
          l = t.eve,
          h = t._g,
          n = t.fn,
          o = t.el,
          a = /[, ]+/,
          u = /\B([A-Z]{1})/g;(i = (r = function r(e) {
        this.styleSheet = "", this.rules = {}, this.ns = e || "";
      }).prototype).getSheet = function () {
        var e = this.node;return this.styleSheet = i.getStyleSheet("fusioncharts-raphael-stylesheet"), this.styleSheet || ((e = this.node = h.doc.createElement("style")).setAttribute("id", t.format("raphael-stylesheet-{0}", t._oid++)), e.setAttribute("type", "text/css"), e.setAttribute("title", "fusioncharts-raphael-stylesheet"), (h.doc.head || h.doc.getElementsByTagName("head")[0]).appendChild(this.node), this.styleSheet = i.getStyleSheet("fusioncharts-raphael-stylesheet")), this.styleSheet;
      }, i.getStyleSheet = function (e) {
        for (var t, s = h.doc.styleSheets, r = s.length; r--;) {
          if ((t = s[r]).title === e) return t;
        }
      }, i.applyCSSRule = function (e, t) {
        var s,
            r = this.styleSheet;if (!r) {
          if (!e || !t) return;r = this.getSheet();
        }s = (r.rules || r.cssRules || {}).length || 0, r.insertRule ? r.insertRule(e + "{" + t + "}", s) : r.addRule && r.addRule(e, t, s);
      }, i.removeCSS = function (e) {
        var t,
            s = this.styleSheet,
            r = s.rules || s.cssRules || {},
            i = r.length || 0;for (e = e || this.ns; i--;) {
          t = r[i], new RegExp(e).test(t.selectorText) && (s.removeRule ? s.removeRule(i) : s.deleteRule(i));
        }
      }, i.destroy = function () {
        this.removeCSS(), delete this.node, delete this.styleSheet, delete this.ns, delete this.rules;
      }, i.clear = function () {
        this.removeCSS(), this.rules = {};
      }, i.add = function (e, t, s) {
        var r,
            i = "",
            l = this.rules[e] || (this.rules[e] = {}),
            h = s ? "" : "\t",
            n = s ? ":" : ": ";for (r in t) {
          (l[r] = t[r]) && (i += h + r.replace(u, "-$1").toLowerCase() + n + l[r] + ";");
        }this.applyCSSRule(e, i);
      }, i.render = function () {
        this.setCssText();
      }, i.setCssText = function (e) {
        var t,
            s,
            r = e ? "" : "\t",
            i = e ? ":" : ": ",
            l = "",
            h = "";for (t in this.rules) {
          for (s in l = "", h = t.replace(/(^|\,)/g, "$1" + this.ns + " "), t = this.rules[t]) {
            t[s] && (l += r + s.replace(u, "-$1").toLowerCase() + i + t[s] + ";");
          }this.applyCSSRule(h, l);
        }
      }, l.on("raphael.new", function () {
        this._stylesheet = this._stylesheet || new r(), this.cssNamespace("");
      }), l.on("raphael.remove", function () {
        this._stylesheet && this._stylesheet.destroy(), delete this._stylesheet;
      }), n.cssNamespace = function (e) {
        return arguments.length && (this._stylesheet.ns = t.format("{0}#raphael-paper-{1}", e && e + " " || "", this.id)), this._stylesheet.ns;
      }, n.cssAddRule = function (e, t) {
        if (1 === arguments.length && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          for (var s in e) {
            this.cssAddRule(s, e[s]);
          }return this;
        }return this._stylesheet.add(e, t), this;
      }, n.cssRender = function () {
        return t.svg && this._stylesheet.render(), this;
      }, n.cssClear = function () {
        return this._stylesheet.clear(), this;
      }, t.ca.class = function (e) {
        var s,
            r,
            i,
            l,
            h = this,
            n = h.node,
            o = h.paper,
            a = "." + e,
            u = o._stylesheet && o._stylesheet.rules,
            c = h.parent,
            f = h.attrs,
            d = {};if (t.svg) e = e || "", n.setAttribute("class", "group" === h.type && h._id ? "raphael-group-" + h.id + "-" + h._id + " " + e : e);else if (t.vml && (s = n.className = "group" === h.type ? e && h._id + " " + e || h._id : "rvml " + e, n.className = s ? s + " fusioncharts-div" : "fusioncharts-div", a && u)) {
          for (l in r = u[a]) {
            "color" === l && "text" === h.type && (l = "fill"), f[l] || (d[l] = r[l]);
          }for (; c && c.attr;) {
            if (i = c.attr("class")) for (l in r = u[a = "." + i + " " + a]) {
              "color" === l && "text" === h.type && (l = "fill"), f[l] || d[l] || (d[l] = r[l]);
            }c = c.parent;
          }h.css(d);
        }
      }, o.css = function (e, r, i) {
        var h, n, o, u, c, f, d;if (this.removed) return this;if (this.styles || (this.styles = {}), r === s && t.is(e, "string")) {
          for (o = {}, f = 0, d = (h = e.split(a)).length; f < d; f++) {
            (e = h[f]) in this.styles && (o[e] = this.styles[e]);
          }return d - 1 ? o : o[h[0]];
        }if (r === s && t.is(e, "array")) {
          for (o = {}, f = 0, d = e.length; f < d; f++) {
            o[e[f]] = this.styles(e[f]);
          }return o;
        }for (f in r === s ? e && t.is(e, "object") && (n = e) : (n = {})[e] = r, c = {}, n) {
          u = f.replace(/\B([A-Z]{1})/g, "-$1").toLowerCase(), t._availableAttrs.hasOwnProperty(u) || "color" === u ? ("color" === u && "text" === this.type && (u = "fill"), c[u] = n[f], c.dirty = !0) : (l("raphael.css." + u + "." + this.id, this, n[f], u), this.node.style[u] = n[f], this.styles[u] = n[f]);
        }for (f = 0, d = this.followers.length; f < d; f++) {
          this.followers[f].el.attr(n);
        }return c.hasOwnProperty("dirty") && (delete c.dirty, i && (c["_do-not-tune"] = !0), this.attr(c)), this;
      }, o.removeCSS = function (s) {
        var r, i, l;if (s || (s = e.appliedCSS), this.removed) return this;if (t.is(s, "string") && (s = s.split(",")), t.is(s, "array")) for (l = s.length, i = 0; i < l; i++) {
          r = s[i].replace(/\B([A-Z]{1})/g, "-$1").toLowerCase(), this.node.removeAttribute(r), this.node.style[r] = "";
        }return this;
      };
    };var e = require("../lib/lib");
  }, { "../lib/lib": 20 }], 77: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (o) {
      var r,
          t,
          a = window,
          i = Math.sqrt,
          l = a.parseFloat,
          s = a.parseInt,
          n = a.SVGFilterElement || a.SVGFEColorMatrixElement && 2 === a.SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE,
          d = { "drop-shadow": "drop-shadow", stroke: "stroke", fill: "fill", "stroke-width": "stroke-width", "stroke-opacity": "stroke-opacity", "stroke-linecap": "stroke-linecap", "stroke-linejoin": "stroke-linejoin", "shape-rendering": "shape-rendering", opacity: "opacity", "fill-opacity": "fill-opacity" };o.svg ? (n && (o.filterShadow = function (r, t) {
        var a,
            s,
            n,
            d,
            c = r.dx || 1,
            h = r.dy || 1,
            p = r.spread || 3,
            u = r.color || "rgb(64,64,64)",
            f = r.paper,
            w = f.cacheShadows || (f.cacheShadows = {}),
            m = r.id || "drop-shadow-" + (t ? "layered" : "non-layered") + "-" + [c, h, p, u].join(" "),
            y = r.id || o.getElementID(m.replace(/[\(\)\s%:,\xb0#]/g, "_")),
            k = r.id ? !!o._g.doc.getElementById(y) : !!w[m];return f && !k ? ((u = o.color(u)).error && (u = o.color("rgba(0,0,0,1)")), n = (0, e.pluck)(u.opacity, 1), n = r.opacity || n, s = (a = f.addDefs({ filter: { tagName: "filter", id: y, width: "200%", height: "200%", children: [{ tagName: "feOffset", result: "offOut", in: "SourceGraphic", dx: l(c), dy: l(h) }, { tagName: "feColorMatrix", result: "matrixOut", in: "offOut", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " + n + " 0" }, { tagName: "feGaussianBlur", result: "blurOut", in: "matrixOut", stdDeviation: t ? 1 : i(l(p)) }, { tagName: "feComposite", in: "SourceGraphic", in2: "blurOut", operator: "over" }] } })).filter.children, d = w[m] = { use: 1, hash: m, id: y, filter: a.filter.element, offset: s[0].element, matrix: s[1].element, blur: s[2].element, blend: s[3].element }) : (d = w[m]).use += 1, d;
      }, o.el.dropshadow = function (e, r, a, i, l, s) {
        var n,
            d,
            c,
            h,
            p,
            u,
            f,
            w,
            m = this,
            y = m._.shadowFilter,
            k = m.paper,
            _ = k.cacheShadows || (k.cacheShadows = {}),
            g = "drop-shadow" + [e, r, a, i].join(" ");for (p = h = .05 * l, f = 1; 3 >= f; f++) {
          p += h * f * (l - p);
        }if (d = (n = s ? m.shadowElem || m.clone({ fill: "none", stroke: "rgb(51, 51, 51)", "stroke-width": m.attr("stroke-width") || 1, opacity: p }, s).translate(e, r).follow(m, t, !s && "before") : m).shadowElem && n.shadowElem.node || n.node, "none" !== e) s && !m.shadowElem && (u = !0), s && (m.shadowElem = n), y = y && _[g] ? _[g] : m._.shadowFilter = o.filterShadow({ paper: k, dx: e, dy: r, spread: a, color: i, opacity: !s && p }, !!s), !u && m.shadowElem && m.shadowElem.attr("opacity", p), d.setAttribute("filter", 'url("' + o._url + "#" + y.id + '")');else if (y) {
          if (y.use -= 1, d.removeAttribute("filter"), m.shadowElem && m.shadowElem.attr("opacity", 0), !y.use) {
            for (c in g = y.hash, y) {
              (w = y[c]).parentNode && w.parentNode.removeChild(w), delete y[c];
            }w = null, delete _[g];
          }y = null, delete m._.shadowFilter;
        }return this;
      }), t = function t(e, o) {
        var r,
            t,
            a = this,
            i = {};for (t in e) {
          d[t] && (i[t] = e[t], delete e[t]), "transform" === t ? ((r = o.matrix.clone()).translate(a.__shadowx, a.__shadowy), a.transform(r.toTransformString())) : "stroke-width" === t && (e[t] = i[t] || 1);
        }for (t in a.attr(e), i) {
          e[t] = i[t];
        }
      }, o.ca["drop-shadow"] = function (r, a, i, l, n, d) {
        var c,
            h,
            p,
            u,
            f,
            w,
            m,
            y = this,
            k = y._.shadows || (y._.shadows = []);if (y.__shadowblocked) return !1;if ("none" === r) for (; h = k.pop();) {
          h.remove();
        } else for ((l = o.color(l)).error && (l = o.color("rgba(0,0,0,1)")), n instanceof Array ? (f = n[0], w = n[1]) : f = w = n, f = 1 / (0, e.pluck)(f, 1), w = 1 / (0, e.pluck)(w, 1), r = (0, e.pluck)(r, 1) * f, a = (0, e.pluck)(a, 1) * f, c = .05 * (0, e.pluck)(l.opacity, 1), p = s(y.attr("stroke-width") || 1, 10) + 6, (u = y.matrix.clone()).translate(r, a), m = 1; 3 >= m; m++) {
          (h = (k[m - 1] || y.clone().follow(y, t, !d && "before")).attr({ stroke: l.hex, "stroke-opacity": c * m, opacity: "1", "stroke-width": (p - 2 * m) * w, transform: u.toTransformString(), "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none" })).__shadowlevel = m, h.__shadowscale = w, h.__shadowx = r, h.__shadowy = a, d && d.appendChild(h), k.push(h);
        }return !1;
      }, o.el.shadow = function (r, t, a, i) {
        var l;if (a && a.constructor === o.el.constructor && (i = a, a = void 0), "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (t && t.constructor === o.el.constructor && (i = t), t = r.opacity, a = r.scalefactor, l = void 0 === r.useFilter ? !e.isIE9 : !!r.useFilter, r = void 0 === r.apply ? !!t : r.apply), void 0 === t && (t = 1), this.dropshadow) {
          if (l && !this.ca.hasOwnProperty("drop-shadow")) return r && this.dropshadow(1, 1, 3, "rgb(64,64,64)", t, i) || this.dropshadow("none"), this;this._.shadowFilter && this.dropshadow("none");
        }return this.attr("drop-shadow", r ? [1, 1, 3, "rgba(64,64,64," + t + ")", a, i] : "none");
      }) : o.vml ? (o.ca["drop-shadow"] = function (t, a, i, s, n, d) {
        var c,
            h,
            p,
            u,
            f = this,
            w = f._.shadow;return !f.isShadow && ("none" === t ? w && (w = f._.shadow = w.remove()) : (!w && (w = f._.shadow = f.clone(), d && d.appendChild(w.follow(f)) || w.follow(f, r, "before"), w.attr({ fill: "none", "fill-opacity": .5, "stroke-opacity": 1 }).isShadow = !0, 0 >= w.attr("stroke-width") && w.attr("stroke-width", 1)), h = (c = w.node.runtimeStyle).filter.replace(/ progid:\S+Blur\([^\)]+\)/g, ""), (s = o.color(s)).error && (s = o.color("rgba(0,0,0,1)")), u = (0, e.pluck)(s.opacity, 1) / 5, n instanceof Array ? n[0] : n, p = 1 / (0, e.pluck)(n, 1), t = (0, e.pluck)(t, 1) * p, a = (0, e.pluck)(a, 1) * p, w.translate(t, a), c.filter = h + " progid:DXImageTransform.Microsoft.Blur(pixelRadius=" + l(.4 * i) + " makeShadow=True Color=" + s.hex + ' shadowOpacity="' + u + '");'), !1);
      }, o.el.shadow = function (e, t, a, i) {
        return a && a.constructor === o.el.constructor && (i = a, a = r), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t && "group" === t.type && (i = t), t = e.opacity, a = e.scalefactor, e = e.apply === r ? !!t : e.apply), t === r && (t = 1), this.attr("drop-shadow", e || !t ? [1, 1, 5, "rgba(64,64,64," + t + ")", a, i] : "none");
      }) : o.canvas && (o.el.shadow = function () {
        return this;
      });
    };var e = require("../lib/lib");
  }, { "../lib/lib": 20 }], 78: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (r) {
      var o = /rgba\([\d]+\,[\d]+\,[\d]+\,0\)$/;var l,
          a = window,
          s = a.navigator.userAgent,
          i = "createTouch" in a.document,
          n = /msie/i.test(s) && !a.opera,
          e = Math,
          c = e.cos,
          p = e.sin,
          h = e.abs,
          u = e.min,
          d = e.PI,
          f = a.parseInt,
          y = a.parseFloat,
          b = String,
          g = Array.prototype.slice,
          w = "rgba(192,192,192," + (n ? .002 : 1e-6) + ")",
          m = r.eve,
          v = /\s*\,\s*/g;r && r._availableAnimAttrs && r._availableAnimAttrs.cx && (r._availableAnimAttrs["scroll-position"] = r._availableAnimAttrs.cx), r.define && r.define([{ name: "polypath", polypath: function polypath() {
          return this.path(l, r._lastArgIfGroup(arguments));
        }, ca: { polypath: function polypath(t, o, l, a, s, i) {
            var n, e, h, u, b;if (n = [], t = f(t, 10) || 0, o = y(o) || 0, l = y(l) || 0, a = y(a) || 0, s = null === s || isNaN(s) ? .5 * d : r.rad(s), i = null === i || isNaN(i) ? 0 : y(i), u = s, 2 < t) switch (e = 2 * d / t, i) {case 0:
                for (h = 0; h < t; h++) {
                  n.push("L", o + a * c(-u), l + a * p(-u)), u += e;
                }n[0] = "M", n.push("Z");break;case 1:
                for (h = 0; h < t; h++) {
                  n.push("M", o, l, "L", o + a * c(-u), l + a * p(-u)), u += e;
                }break;default:
                for (b = a * c(e *= .5) * (1 - i), h = 0; h < t; h++) {
                  n.push("L", o + a * c(-u), l + a * p(-u)), u += e, n.push("L", o + b * c(-u), l + b * p(-u)), u += e;
                }n[0] = "M", n.push("Z");} else 0 === a ? n.push("M", o, l, "L", o, l, "Z") : n.push("M", o - a, l, "A", a, a, 0, 0, 0, o + a, l, "A", a, a, 0, 0, 0, o - a, l, "Z");return { path: n };
          }, r: function r(t) {
            var r = this.attrs.polypath;return r[3] = t, this.attr("polypath", r), !1;
          } } }, { name: "scroller", scroller: function scroller(o, l, a, s, i, n, e) {
          var _o$scroller, _o$scroller2;

          "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && o.scroller && (_o$scroller = o.scroller, _o$scroller2 = _slicedToArray(_o$scroller, 7), o = _o$scroller2[0], l = _o$scroller2[1], a = _o$scroller2[2], s = _o$scroller2[3], i = _o$scroller2[4], n = _o$scroller2[5], e = _o$scroller2[6], _o$scroller);var c,
              p,
              u,
              d,
              f,
              b = this,
              g = b.group("scroller", e),
              w = g.attrs,
              v = g._.scroller = {},
              k = {};for (f in c = i ? "horizontal" : "vertical", v.track = b.rect(g).mousedown(function (o) {
            var l,
                a = w["scroll-orientation"],
                s = w["scroll-position"],
                i = (0, t.extend2)({}, v.anchor.node.getBoundingClientRect());i.y = i.y || i.top, i.x = i.x || i.left, i.height = i.height || i.bottom - i.top, i.width = i.width || i.right - i.left, 1 < (l = s + (l = ("horizontal" === a ? o.x - (i.x + i.width / 2) : o.y - (i.y + i.height / 2)) / v.trackLength)) ? l = 1 : (0 > l || isNaN(l)) && (l = 0), p = r.animation({ "scroll-position": l }, 2e3 * h(s - l), "easeIn"), g.animate(p), m("raphael.scroll.start." + g.id, g, s);
          }).mouseup(v._mouseupTrack = function () {
            this.stop(p), m("raphael.scroll.end." + this.id, this, w["scroll-position"]);
          }, g, !0), v.anchor = b.rect(g).drag(function (t) {
            k["scroll-position"] = u + t.data[d] / v.trackLength, 1 <= k["scroll-position"] ? k["scroll-position"] = 1 : (0 >= k["scroll-position"] || isNaN(k["scroll-position"])) && (k["scroll-position"] = 0), g.attr(k);
          }, function (t) {
            d = "horizontal" === w["scroll-orientation"] ? 0 : 1, m("raphael.scroll.start." + g.id, g, u = w["scroll-position"]), "function" == typeof v.scrollStart && v.scrollStart.call(g, u), t.stopPropagation();
          }, function () {
            m("raphael.scroll.end." + g.id, g, u = w["scroll-position"]), "function" == typeof v.scrollEnd && v.scrollEnd.call(g, u);
          }), r.fn.scroller.fn) {
            g[f] = r.fn.scroller.fn[f];
          }for (f in r.fn.scroller.ca) {
            g.ca[f] = r.fn.scroller.ca[f];
          }return w["scroll-orientation"] = c, w["stroke-width"] = 1, g.ca["scroll-repaint"] = g.ca["scroll-repaint-" + c], r.is(n, "object") || (n = {}), g.attr({ "scroll-display-buttons": n.showButtons ? "arrow" : "none", "scroll-display-style": n.displayStyleFlat ? "flat" : "3d", "scroll-ratio": y(n.scrollRatio) || 1, "scroll-position": y(n.scrollPosition) || 0, "scroll-repaint": [o, l, a, s] });
        }, fn: { scroll: function scroll(t) {
            var r = this._.scroller;return r.callback = t.scroll, r.scrollStart = t.scrollStart, r.scrollEnd = t.scrollEnd, this;
          }, remove: function remove() {
            var t,
                o = this,
                l = o._.scroller;for (t in o.attr("scroll-display-buttons", "none"), l.track.unmouseup(l._mouseupTrack), l) {
              l[t] && l[t].remove && l[t].remove(), l[t] = null;
            }delete o._.scroller, r.el.remove.apply(o, arguments);
          } }, ca: { "stroke-width": function strokeWidth(r) {
            var o = this._.scroller,
                l = (0, t.pluckNumber)(r["stroke-width"], 1);return o.anchor.attr({ "stroke-width": l }), o.track.attr({ "stroke-width": l }), !1;
          }, "drop-shadow": function dropShadow(t, r, o, l, a, s) {
            return this._.scroller.track.attr("drop-shadow", [t, r, o, l, a, s]), !1;
          }, "scroll-display-style": function scrollDisplayStyle(t) {
            var r = this.attrs,
                o = r["scroll-display-style"],
                l = r.fill;return t = { flat: "flat", "3d": "3d", transparent: "transparent" }[t] || o, l && t !== o && (r["scroll-display-style"] = t, this.attr("fill", l)), { "scroll-display-style": t };
          }, "scroll-display-buttons": function scrollDisplayButtons(t) {
            var o,
                a,
                s = this,
                i = s.paper,
                n = s._.scroller,
                e = s.attrs,
                c = e["scroll-display-buttons"],
                p = e["scroll-repaint"];return c === l && (c = "none"), (t = { none: "none", arrow: "arrow" }[t] || c) !== c && (e["scroll-display-buttons"] = t, "none" === t && n.start ? (n.arrowstart.remove(), delete n.arrowstart, n.arrowend.remove(), delete n.arrowend, n.start.unmouseup(n._mouseupStart), n.start.remove(), delete n.start, n.end.unmouseup(n._mouseupEnd), n.end.remove(), delete n.end) : (n.arrowstart = i.polypath(s), n.arrowend = i.polypath(s), n.start = i.rect(s).mousedown(function () {
              var t, a, i;0 === (t = e["scroll-position"]) || (n.scrollStart && n.scrollStart.call(s, s.attrs["scroll-position"]), s.animate({ "scroll-position": t - .1 }, 100, l, function () {
                i = !0, a && n.scrollEnd && n.scrollEnd.call(s, s.attrs["scroll-position"]);
              }).animate(o = r.animation({ "scroll-position": 0 }, 4500 * t, "easeIn", function () {
                a = !0, i && n.scrollEnd && n.scrollEnd.call(s, s.attrs["scroll-position"]);
              })), m("raphael.scroll.start." + s.id, s, t));
            }).mouseup(n._mouseupStart = function () {
              s.stop(o, !0), m("raphael.scroll.end." + s.id, s, e["scroll-position"]);
            }, s, !0), n.end = i.rect(s).mousedown(function () {
              var t, o, i;1 === (t = e["scroll-position"]) || (n.scrollStart && n.scrollStart.call(s, s.attrs["scroll-position"]), s.animate({ "scroll-position": t + .1 }, 100, l, function () {
                i = !0, o && n.scrollEnd && n.scrollEnd.call(s, s.attrs["scroll-position"]);
              }).animate(a = r.animation({ "scroll-position": 1 }, 4500 * (1 - t), "easeIn", function () {
                o = !0, i && n.scrollEnd && n.scrollEnd.call(s, s.attrs["scroll-position"]);
              })), m("raphael.scroll.start." + s.id, s, t));
            }).mouseup(n._mouseupEnd = function () {
              s.stop(a, !0), m("raphael.scroll.end." + s.id, s, e["scroll-position"]);
            }, s, !0), e.fill && s.attr("fill", e.fill)), p && s.attr("scroll-repaint", p)), { "scroll-display-buttons": t };
          }, "scroll-orientation": function scrollOrientation(t) {
            var r = this,
                o = r.attrs,
                l = o["scroll-repaint"],
                a = o["scroll-orientation"];return a !== (t = { horizontal: "horizontal", vertical: "vertical" }[t] || a) && (r.ca["scroll-repaint"] = r.ca["scroll-repaint-" + t], l && (l[2] += l[3], l[3] = l[2] - l[3], l[2] -= l[3], r.attr("scroll-repaint", l)), o.fill && r.attr("fill", o.fill)), { "scroll-orientation": t };
          }, "scroll-ratio": function scrollRatio(t) {
            var r = this.attrs,
                o = r["scroll-ratio"],
                l = r["scroll-repaint"];return t = 1 < t ? 1 : .01 > t ? .01 : y(t), l && t !== o && (r["scroll-ratio"] = t, this.attr("scroll-repaint", l)), { "scroll-ratio": t };
          }, "scroll-position": function scrollPosition(t, r) {
            var o,
                l = this,
                a = l.attrs,
                s = "horizontal" === a["scroll-orientation"],
                i = a["scroll-repaint"],
                n = a["scroll-position"],
                e = l._.scroller,
                c = e.anchor;return t = 1 < t ? 1 : 0 > t ? 0 : y(t), isNaN(t) && (t = n), i && (n !== t || r) && (o = e.start && e.start.attr(s ? "width" : "height") || 0, s && c.attr("x", i[0] + o + (i[2] - 2 * o - c.attr("width")) * t + .5) || c.attr("y", i[1] + o + (i[3] - 2 * o - c.attr("height")) * t + .5), !r && 1 > a["scroll-ratio"] && (m("raphael.scroll.change." + l.id, l, t), e.callback && e.callback.call(l, t))), { "scroll-position": t };
          }, r: function r(t) {
            var r = this._.scroller;return r.track.attr("r", t), r.anchor.attr("r", "none" === this.attrs["scroll-display-buttons"] && t || 0), !1;
          }, "scroll-repaint-horizontal": function scrollRepaintHorizontal(t, r, o, l) {
            var a = this.attrs,
                s = this._.scroller,
                i = a["scroll-ratio"],
                n = a["scroll-position"],
                e = 0,
                c = o * i,
                p = "none" === a["scroll-display-buttons"];o && (o -= 1), t && (t += .5), l && (l -= 1), r && (r += .5), s.track.attr({ width: o, height: l, y: r, x: t }).crisp(), p || (c -= 2 * (e = u(l, .5 * o)) * i, s.start.attr({ width: e, height: l, x: t, y: r }), s.arrowstart.attr("polypath", [3, t + .5 * e, r + .5 * l, .25 * e, 180]), s.end.attr({ width: e, height: l, x: t + o - e, y: r }), s.arrowend.attr("polypath", [3, t + o - .5 * e, r + .5 * e, .25 * e, 0])), s.trackLength = o - 2 * e - c, s.trackOffset = t + e + .5, s.anchorOffset = s.trackOffset + .5 * (c - 1), s.anchor.attr({ height: 1 > l ? 1 : l, width: 1 > c - 1 ? 1 : c - 1, y: r, x: s.trackOffset + s.trackLength * n }).crisp();
          }, "scroll-repaint-vertical": function scrollRepaintVertical(t, r, o, l) {
            var a = this.attrs,
                s = this._.scroller,
                i = a["scroll-ratio"],
                n = a["scroll-position"],
                e = 0,
                c = l * i,
                p = "none" === a["scroll-display-buttons"];o && (o -= 1), t && (t += .5), l && (l -= 1), r && (r += .5), s.track.attr({ width: o, height: l, y: r, x: t }).crisp(), p || (c -= 2 * (e = u(o, .5 * l)) * i, s.start.attr({ width: o, height: e, x: t, y: r }), s.arrowstart.attr("polypath", [3, t + .5 * o, r + .5 * e, .25 * e, 90]), s.end.attr({ width: o, height: e, x: t, y: r + l - e }), s.arrowend.attr("polypath", [3, t + .5 * o, r + l - .5 * e, .25 * e, -90])), s.trackLength = l - 2 * e - c, s.trackOffset = r + e + .5, s.anchorOffset = s.trackOffset + .5 * (c - 1), s.anchor.attr({ height: 1 > c - 1 ? 1 : c - 1, width: 1 > o ? 1 : o, y: s.trackOffset + s.trackLength * n, x: t }).crisp();
          }, fill: function fill(t) {
            var o,
                l = this.attrs,
                a = this._.scroller,
                s = l["scroll-repaint"],
                n = "flat" === l["scroll-display-style"],
                e = "horizontal" === l["scroll-orientation"],
                c = { stroke: "none" };return i && s && 3 < (o = 16 - s[e ? 3 : 2]) && (c.stroke = w, c["stroke-width"] = 0 > o ? 0 : o), (t = r.color(t)).error && (t = r.color("#000000")), t = "opacity" in t ? "rgba(" + [t.r, t.g, t.b, t.opacity] + ")" : "rgb(" + [t.r, t.g, t.b] + ")", c.fill = n && t || [90 * e, r.tintshade(t, .15).rgba, t].join("-"), c.stroke = r.tintshade(t, -.75).rgba, a.track.attr(c), c.fill = n && r.tintshade(t, -.6).rgba || [270 * e, r.tintshade(t, .3).rgba + ":40", r.tintshade(t, -.7).rgba].join("-"), c.stroke = r.tintshade(t, -.6).rgba, a.anchor.attr(c), c.stroke = "none", "none" !== l["scroll-display-buttons"] && (c.fill = w, a.start.attr(c), a.end.attr(c), c.fill = r.tintshade(t, -.4).rgba, a.arrowstart.attr(c), a.arrowend.attr(c)), !1;
          } } }]), r.ca["text-bound"] = function (t, a, s, i, n, e, c) {
        var p = this,
            h = p.paper,
            u = p._.textbound;if (this._origOpacity = c === l ? 1 : c, "text" === this.type) return a && "none" !== a && !o.test(a) || t && "none" !== t && !o.test(t) ? (p.attrs["text-bound"] = arguments, s && r.is(s, "finite") || (s = 0), n && r.is(n, "finite") || (n = 0), u || (u = p._.textbound = h.rect(0, 0, 0, 0, p.group).follow(p, r.ca["text-bound"].reposition, "before")), u.attr({ stroke: a || "none", "stroke-width": s, fill: t || "none", "shape-rendering": 1 === s ? "crisp" : "", r: n }), c !== l && u.attr("opacity", c), e && u.attr("stroke-dasharray", e), r.ca["text-bound"].reposition.call(u, p.attr(), p), !1) : (p._.textbound = u && u.unfollow(p).remove(), !1);
      }, r.ca["text-bound"].reposition = function (r, o) {
        var a,
            s,
            i,
            n,
            e,
            c,
            p,
            h,
            u,
            d = Math.max,
            f = this,
            g = {};r.hasOwnProperty("visibility") && f.attr("visibility", r.visibility), (r.hasOwnProperty("text-bound") || r.hasOwnProperty("x") || r.hasOwnProperty("y") || r.hasOwnProperty("text") || r.hasOwnProperty("text-anchor") || r.hasOwnProperty("text-align") || r.hasOwnProperty("font-size") || r.hasOwnProperty("line-height") || r.hasOwnProperty("vertical-align") || r.hasOwnProperty("transform") || r.hasOwnProperty("rotation") || r.hasOwnProperty("opacity")) && (s = (a = o.attrs)["text-bound"], i = b(s && s[3] || "0").split(v), n = y(i[0]) || 0, e = (0, t.pluck)(y(i[1]), n), h = (c = o.getBBox()).width, u = c.height, f._origOpacity === l && (f._origOpacity = 1), p = y(r.opacity || a.opacity), g.opacity = isNaN(p) ? f._origOpacity : f._origOpacity * p, !isNaN(h) && (g.x = c.x - n, g.y = c.y - e, g.width = d(h + 2 * n, 0), g.height = d(u + 2 * e, 0)), f.attr(g));
      }, r.fn.symbol = function () {
        var t,
            o = arguments,
            a = o.length - 1,
            s = o[a];return s && s.constructor === r.el.constructor ? o[a] = l : s = l, (t = this.path(l, s)).ca.symbol = r.fn.symbol.ca.symbol, o.length === !!s + 0 ? t : t.attr("symbol", o);
      }, r.fn.getSuggestiveRotation = function () {
        var t, r, o, l;return t = arguments[0], 1 === arguments.length ? (r = t.angle, o = t.x, l = t.y) : (r = t, o = arguments[1], l = arguments[2]), "r" + (r = r || 0) + "," + o + "," + l;
      }, r.fn.symbol.cache = { "": r._cacher(function (t, r, o, l) {
          return 3 < arguments.length ? ["M", t, r, "h", o, "v", l, "h", -o, "v", -l, "z"] : ["M", t - o, r - o, "h", o *= 2, "v", o, "h", -o, "v", -o, "z"];
        }) }, r.fn.symbol.ca = { symbol: function symbol(t) {
          var o,
              l,
              a = r.is(t, "object") && 1 === arguments.length && !r.is(t, "function") ? t : arguments;a === t && (t = a[0]), l = (o = r.is(t, "function") && t || r.fn.symbol.cache[t] || r.fn.symbol.cache[""]) && o.apply(r, g.call(a, 1)), r.is(l, "array") || r.is(l, "string") ? this.attr("path", l) : l && this.attr(l);
        } }, r.addSymbol = function (t, o) {
        var l,
            a,
            s = r.fn.symbol.cache,
            i = [];for (a in l = r.is(o, "function") && ((l = {})[t] = o, l) || t) {
          o = l[a], s[a] = r.is(o, "function") && r._cacher(o, r) || (i.push(a), o);
        }for (a = i.pop(); a;) {
          s[a] = s[s[a]], a = i.pop();
        }
      };
    };var t = require("../lib/lib");
  }, { "../lib/lib": 20 }], 79: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var r = void 0,
          i = "top",
          n = "middle",
          a = "bottom",
          l = "left",
          s = "right",
          c = function c(t, e, i) {
        return function () {
          var n = void 0,
              a = void 0,
              l = void 0,
              s = o(t._.imageGridAttr, e),
              c = 1,
              g = 1,
              d = 1;if (s.tileInfo && (c = s.tileInfo.xCount, g = d = s.tileInfo.yCount, l = s.y, delete s.tileInfo), t._.gridElem) {
            for (a = 0; a < t._.gridElem.length; a++) {
              t._.gridElem[a].remove();
            }t._.gridElem.length = 0;
          }for (a = 0; c && s.width && s.height;) {
            d--, 0 === a ? t.attr(i ? Object.assign(s, { applysrc: t._._src }) : s) : (n = t.clone().attr({ x: s.x, y: s.y }), t._.gridElem.push(n.follow(t, r, "after"))), s.y += s.height, 0 === d && (d = g, c--, s.x += s.width, s.y = l), a++;
          }
        };
      },
          o = function o(e, r) {
        var i = void 0;if (e) {
          var _n7 = e.displayMode,
              _a = e.vAlign,
              _l3 = e.hAlign,
              _s5 = e.scale,
              _c = e.canvasBorderWidth,
              _o = e.canvasWidth,
              g = e.canvasHeight,
              d = r.width * (_s5 / 100),
              h = r.height * (_s5 / 100);
          i = (0, t.getAlignImage)(_a, _l3, _n7, d, h, _o, g, _c, _o - 2 * _c, g - 2 * _c);
        }return i || { x: 0, y: 0, width: r.width, height: r.height };
      };e.define && e.define([{ name: "imagegrid", imagegrid: function imagegrid() {
          var t = void 0,
              i = void 0,
              n = arguments,
              a = n.length - 1,
              l = n[a];return l && l.constructor === e.el.constructor ? n[a] = r : l = r, t = new Image(), (i = this.image(l))._.gridElem = [], i._.refImage = t, i._attr = i.attr, i.attr = function (t, e) {
            var n = Array.isArray(t),
                a = !n && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)),
                l = "string" == typeof t;if (n && (a = "object" == _typeof(t = t[0])), a) {
              var _e4 = Object.assign({}, t),
                  _r6 = _e4 && _e4.src,
                  _n8 = _e4 && _e4.applysrc;delete _e4.src, delete _e4.applysrc, _r6 && delete i._._src, i._attr(_e4), _r6 && i._attr({ _src: _r6 }), _n8 && i._attr({ src: _n8 });
            } else {
              if (t === r && e === r) return this.attrs;if (e === r) return this.attrs[t];l && e && ("src" === t ? i._attr({ _src: e }) : "applysrc" === t ? i._attr({ src: e }) : i._attr({ name: e }));
            }return this;
          }, t.onload = c(i, t, !0), t.onerror = function (t) {
            return function () {
              t.hide();for (var _e5 = 0, _r7 = t._.gridElem && t._.gridElem.length; _e5 < _r7; _e5++) {
                t._.gridElem[_e5].remove();
              }t._.gridElem = [], t._attr({ src: t._._src }), setTimeout(function () {
                t.show();
              }, 100);
            };
          }(i), i;
        }, ca: { imagegrid: function imagegrid(t, e, r) {
            var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
            var g = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var d = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            var _ = this;"tile" === t || "fill" === t || "fit" === t ? (e !== i && e !== n && e !== a && (e = n), r !== l && r !== n && r !== s && (r = n)) : (e !== i && e !== n && e !== a && (e = i), r !== l && r !== n && r !== s && (r = l)), _._.imageGridAttr = { displayMode: t, vAlign: e, hAlign: r, scale: o, canvasBorderWidth: g, canvasWidth: d, canvasHeight: h }, this._._src && c(_, _._.refImage)();
          }, _src: function _src(t) {
            return this._.refImage.src = t, this._._src = t, { _src: t };
          } } }]);
    };var t = require("../misc/image-alignment");
  }, { "../misc/image-alignment": 74 }], 81: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var i,
          o,
          r,
          _s6,
          l = window,
          u = l.document,
          a = /msie/i.test(l.navigator.userAgent) && !l.opera,
          c = "VML" === e.type,
          d = { cursor: "cursor" },
          f = { x: "left", y: "top", strokeWidth: "borderThickness", "stroke-width": "borderThickness", width: "width", height: "height" },
          h = { fill: "backgroundColor", stroke: "borderColor", color: "color" },
          p = { left: 0, top: 0, padding: 0, border: "none", margin: 0, outline: "none", "-webkit-apperance": "none", position: "absolute", zIndex: 20 },
          m = function m(e) {
        return e && e.replace(/^#?([a-f0-9]+)/gi, "#$1") || "none";
      },
          y = function y(e, t, n, i) {
        var o,
            r = u.createElement(e);for (o in t) {
          f[o] ? r.style[o] = t[o] : r.setAttribute(o, t[o]);
        }for (o in n) {
          r.style[o] = n[o];
        }return i && i.appendChild && i.appendChild(r), r;
      };(o = (_s6 = function s(e, t, n) {
        var i = this;t && t instanceof _s6 && (t = t.element), i.element = y(e, n, p, t), i.nodeName = e.toLowerCase(), i.added = !!t, i.attrs = {};
      }).prototype = { attr: function attr(e) {
          var t,
              n,
              o,
              r,
              s,
              l,
              p,
              y,
              v,
              b,
              g = this,
              k = g.element,
              C = {};if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return g[e] === i ? function (e, t, n) {
            var o, r;if ("string" == typeof t) n !== i && null !== n ? e.setAttribute(t, n) : e && e.getAttribute && (r = e.getAttribute(t));else if (t !== i && null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (o in t) {
              e.setAttribute(o, t[o]);
            }return r;
          }(k, e) : g[e];for (t in e) {
            if (o = e[t], d[t]) "cursor" === t && "pointer" === o && c && (o = "hand"), k.style[d[t]] = o, r = !0;else if (f[t]) k.style[f[t]] = o + "px", r = !0;else if (h[t]) k.style[h[t]] = m(o), r = !0;else if (/^visibility$/i.test(t)) s = "hidden" === o, k.style.display = s ? "none" : "", g.hidden = s, r = !0;else if (/^opacity$/i.test(t)) k.style.opacity = o, a && (n = 100 * +o, k.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + n + ")"), r = !0;else if (/^innerhtml$/i.test(t)) {
              if (c && "select" == k.nodeName.toLowerCase()) {
                for (l = o.match(/<option\s?[\s\S]*?(\/>|><\/option>|>[\s\S]*?<\/option>)/gi); k.firstChild;) {
                  k.removeChild(k.firstChild);
                }for (y = 0, v = l.length; y < v; y += 1) {
                  p = l[y], b = u.createElement("option"), /<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/gi.test(p) && (b.value = p.replace(/<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/gi, "$1").replace(/[\s\S]*value\s*\=\s*[\'\"]([\s\S]*)[\'\"]/, "$1")), b.text = p.replace(/<option\s*[\s\S]*[\'\"]?\s*?[\/>|\>]([\s\S]*)<\/option>/gi, "$1 "), k.options.add(b);
                }
              } else "input" !== k.nodeName.toLowerCase() && o !== i && (k.innerHTML = o || "");r = !0;
            } else /^text$/i.test(t) ? ("input" !== k.nodeName.toLowerCase() && (k.innerHTML = "", o !== i && k.appendChild(u.createTextNode(o))), r = !0) : /^type$/i.test(t) && a && g.added && (r = !0);r && (C[t] = o, delete e[t], r = !1);
          }for (t in e) {
            k.setAttribute(t, e[t]);
          }for (t in C) {
            g[t] = g.attrs[t] = e[t] = C[t], delete C[t];
          }return this;
        }, val: function val(e) {
          var t = this,
              o = t.element,
              r = e === i;if ("input" === t.nodeName && "checkbox" === o.getAttribute("type")) return r ? t.checked() ? 1 : 0 : t.checked(e);if ("select" === t.nodeName) {
            var _i8 = o.childNodes,
                s = o.selectedIndex,
                _l4 = _i8.length;if ("" === e) return;if (!r) for (var _t5 = 0; _t5 < _l4; _t5++) {
              if (_i8[_t5].value === e) return o.selectedIndex = _t5, _i8[_t5].value;
            }return n.isIE9 && (s = 0), r ? _i8[s].value : (_i8[_l4 - 1].value = e, o.selectedIndex = _l4 - 1, t);
          }return r ? o.value : (o.value = e, t);
        }, checked: function checked(e) {
          var t = this.element;return e === i ? t.checked : (e ? t.setAttribute("checked", "checked") : t.removeAttribute("checked"), this);
        }, css: function css(e, t) {
          var n,
              o = this.element.style;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (n in e) {
            o[n] = e[n];
          } else n && t !== i && (o[n] = t);return this;
        }, translate: function translate(e, t) {
          var n = this.element;return e !== i && (n.style.left = e + "px"), t !== i && (n.style.top = t + "px"), this;
        }, add: function add(e, t) {
          var n = this.element,
              i = e.element;return t ? i.insertBefore(n, i.firstChild) : i.appendChild(n), this.added = !0, this;
        }, hide: function hide() {
          return this.element.style.display = "none", this;
        }, show: function show() {
          return this.element.style.display = "", this;
        }, isVisible: function isVisible() {
          return "none" !== this.element.style.display;
        }, focus: function focus() {
          "function" == typeof this.element.focus ? this.element.focus() : t.default.fire(this.element, "focus");
        }, destroy: function destroy() {
          var e = this.element || {};return e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.onblur = e.onfocus = null, e = function (e) {
            r || (r = y("div")), e && r.appendChild(e), r.innerHTML = "";
          }(e), delete this.element, null;
        }, on: c ? function (e, t) {
          return this.element["on" + e] = function () {
            var e = l.event;e.target = e.srcElement, t(e);
          }, this;
        } : function (e, t) {
          var i = t;return n.hasTouch && "click" === e && (e = "touchstart", i = function i(e) {
            e.preventDefault(), t();
          }), this.element["on" + e] = i, this;
        }, bind: function bind(e, n, i) {
          return t.default.listen(this.element, e, n, i), this;
        }, unbind: function unbind(e, n) {
          return t.default.unlisten(this.element, e, n), this;
        }, trigger: function trigger(e, n) {
          return t.default.fire(this.element, e, n), this;
        } }).remove = o.destroy, o.constructor = _s6, e.fn.html = function (t, n, i, o) {
        var r,
            l,
            u = {};for (l in n && "type" in n && (u.type = n.type, delete n.type), r = new _s6(t, o, u).css(i).attr(n), u) {
          n[l] = u[l];
        }return r.ca = function () {
          return !1;
        }, r.appendTo = function (e) {
          e && e instanceof _s6 && (e = e.element), e.appendChild(this.element);
        }, r.animateWith = e.el.animateWith, r;
      };
    };var e = require("../dom/dom-event"),
        t = i(e),
        n = require("../lib/lib");function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }, { "../dom/dom-event": 73, "../lib/lib": 20 }], 80: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var r = [{ reg: /xmlns\=\"http\:\/\/www.w3.org\/2000\/svg\"/gi, repStr: "" }, { reg: /^.*<svg /, repStr: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" ' }, { reg: /\/svg>.*$/, repStr: "/svg>" }, { reg: /<desc\>[^<]*<\/desc\>/, repStr: "" }, { reg: /zIndex="[^"]+"/g, repStr: "" }, { reg: /url\((\\?[\'\"])[^#]+#/g, repStr: "url($1#" }, { reg: / href=/g, repStr: " xlink:href=" }, { reg: /(id|class|width|height)=([^" >]+)/g, repStr: '$1="$2"' }, { reg: /:(path|rect)/g, repStr: "$1" }, { reg: /<ima?ge? ([^\>]+?[^\/])\>/gi, repStr: "<image $1 />" }, { reg: /<\/ima?ge?\>/g, repStr: "" }, { reg: /style="([^"]+)"/g, repStr: function repStr(e) {
          return e.toLowerCase();
        } }],
          t = function t(e) {
        var r = JSON.stringify(e);return r = r = (r = (r = (r = r.replace(/([a-z]+)([A-Z]+)([a-z]+)/g, function (e, r, t, n) {
          return r + "-" + t.toLowerCase() + n;
        })).replace(/\"\,\"/g, '";"')).replace(/\"/g, " ")).replace(/\{|\}/g, "");
      },
          n = function n(e, r) {
        var n,
            g,
            s,
            a,
            i,
            p,
            l,
            c = function c(e) {
          return e = e.match(/style\s*=/) ? e.replace(/(style\s*=")([^"]+)/g, function (e, r, t) {
            return r + a + t;
          }) : e.replace(/class\s*="[^"]*"/i, function (e) {
            return e + ' style="' + a + '" ';
          });
        };for (n in r) {
          if (r.hasOwnProperty(n)) for (p in g = /\s+/, s = n.split(g), a = t(r[n]), s) {
            s.hasOwnProperty(p) && (i = s[p].trim().replace(".", ""), l = new RegExp("<[^>]+(" + i + ")[^>]+", "g"), e = e.replace(l, c));
          }
        }return e;
      };e.svg && (e.fn.toSVG = function (e) {
        var t,
            g = this,
            s = "",
            a = 0,
            i = r.length;if (g.canvas && g.canvas.parentNode) {
          for (s = g.canvas.parentNode.innerHTML; a < i; a += 1) {
            t = r[a], s = s.replace(t.reg, t.repStr);
          }g._stylesheet && g._stylesheet.rules && (s = n(s, g._stylesheet.rules));
        }return e || (s = s.replace(/<image[^\>]*\>/gi, function (e) {
          return e.match(/href=\"data\:image/i) ? e : "";
        })), s;
      });
    };
  }, {}], 32: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../schedular"),
        r = m(e),
        t = require("./redraphael.css"),
        a = m(t),
        n = require("./redraphael.shadow"),
        d = m(n),
        i = require("./redraphael.shapes"),
        u = m(i),
        l = require("./redraphael.imagegrid"),
        o = m(l),
        s = require("./redraphael.html"),
        p = m(s),
        f = require("./redraphael.export"),
        h = m(f);function m(e) {
      return e && e.__esModule ? e : { default: e };
    }var c = { oneInAFrame: !0 };exports.default = { extension: function extension(t) {
        var n = t.getDep("redraphael", "plugin"),
            i = {};n.fn._elementFromEvent = function (e) {
          if (!e || this.removed) return null;var r = e.srcElement || e.target || (e = e.originalEvent) && (e.srcElement || e.target) || i;return "tspan" === r.nodeName && (r = r.parentNode), this.getById(r.raphaelid);
        }, n.requestAnimFrame = r.default.addJob && function (t) {
          r.default.addJob(t, e.priorityList.animation, c);
        }, n.instantRequestAnimFrame = r.default.addJob && function (t) {
          r.default.addJob(t, e.priorityList.instant);
        }, (0, h.default)(n), (0, a.default)(n), (0, d.default)(n), (0, u.default)(n), (0, o.default)(n), (0, p.default)(n);
      }, name: "redraphaelExt", type: "plugin", requiresFusionCharts: !0 };
  }, { "../schedular": 18, "./redraphael.css": 76, "./redraphael.shadow": 77, "./redraphael.shapes": 78, "./redraphael.imagegrid": 79, "./redraphael.html": 81, "./redraphael.export": 80 }], 66: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../../core/component-interface"),
        a = g(e),
        t = require("../lib/lib");function g(e) {
      return e && e.__esModule ? e : { default: e };
    }var r = void 0,
        s = "backgroundloaderror",
        i = "backgroundloaded",
        l = t.preDefStr.noneStr;
    var n = function (_a$default) {
      _inherits(n, _a$default);

      function n() {
        _classCallCheck(this, n);

        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
      }

      _createClass(n, [{
        key: "getName",
        value: function getName() {
          return "chartMessage";
        }
      }, {
        key: "_drawBackground",
        value: function _drawBackground(e) {
          var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var g,
              n,
              m,
              h,
              o = this,
              c = o.config,
              I = o.getFromEnv("paper"),
              p = o.getFromEnv("chart"),
              d = o.getGraphicalElement("backgroundElement"),
              M = o.getGraphicalElement("backgroundImage"),
              b = o.getFromEnv("chartWidth"),
              u = o.getFromEnv("chartHeight"),
              A = o.getLinkedParent().getChildContainer("messageGroup").show(),
              S = (0, t.pluckNumber)(a.imageAlpha, 100),
              C = (0, t.getValidValue)(a.imageVAlign, t.BLANKSTRING).toLowerCase(),
              E = (0, t.pluck)(a.imageHAlign, t.BLANKSTRING).toLowerCase(),
              y = (0, t.pluckNumber)(a.imageScale, 100),
              f = o.getFromEnv("chartInstance"),
              v = (0, t.getContainerBackgroundColor)(f);I.canvas.style.backgroundColor = v, C !== t.POSITION_TOP && C !== t.POSITION_MIDDLE && C !== t.POSITION_BOTTOM && (C = t.POSITION_TOP), E !== t.POSITION_LEFT && E !== t.POSITION_MIDDLE && E !== t.POSITION_RIGHT && (E = t.POSITION_LEFT), n = { x: 0, y: 0, width: b, height: u, stroke: l }, d || (d = I.rect(A), o.addGraphicalElement("backgroundElement", d)), d.attr(n), c.bgImageVAlign = C, c.bgImageHAlign = E, c.bgImageScale = y, c.bgSWFAlpha = S, c.imgClipRect = 0 + t.COMMA + 0 + t.COMMA + b + t.COMMA + u, e && ((g = M) ? g.attr({ src: e }) : (g = o.getFromEnv("paper").image(A), o.addGraphicalElement("backgroundImage", g), g.attr({ src: e }), g.on("load", function () {
            if (!(!g || g && g.removed)) {
              var _a2 = g._.RefImg;m = o.getFromEnv("chartConfig"), c.isImage && (m === r || m.hasChartMessage) && (h = (0, t.setImageDisplayMode)(l, c.bgImageVAlign, c.bgImageHAlign, c.bgImageScale, 0, o.getFromEnv("chartWidth"), o.getFromEnv("chartHeight"), _a2), (0, t.extend2)(h, { opacity: .01 * c.bgSWFAlpha, visibility: "visible", "clip-rect": c.imgClipRect }), g.attr(h).show(), p.fireChartInstanceEvent(i, { url: e, bgImageAlpha: 100 * c.bgSWFAlpha, bgImageDisplayMode: l, bgImageVAlign: c.bgImageVAlign, bgImageHAlign: c.bgImageHAlign, bgImageScale: c.bgImageScale, imageWidth: _a2.width, imageHeight: _a2.height }));
            }
          }), g.on("error", function (a) {
            g.removed || p.fireChartInstanceEvent(s, { url: e, bgImageAlpha: 100 * c.bgSWFAlpha, error: a, bgImageDisplayMode: l, bgImageVAlign: c.bgImageVAlign, bgImageHAlign: c.bgImageHAlign, bgImageScale: c.bgImageScale }, f);
          })));
        }
      }, {
        key: "setChartMessage",
        value: function setChartMessage(e, a) {
          var g,
              r,
              s,
              i,
              l = this,
              n = l.getFromEnv("chartInstance"),
              m = n.options,
              h = n.args,
              o = l.config,
              c = l.getFromEnv("smartLabel"),
              I = (0, t.getImageURL)(void 0 === e ? m.dataEmptyMessage : e),
              p = l.getFromEnv("chartWidth"),
              d = l.getFromEnv("chartHeight");r = o.width = +p, g = o.height = +d, I.image ? (s = I.string, i = a ? { imageHAlign: (0, t.pluck)(a._chartMessageImageStyle.imageHAlign, m.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, t.pluck)(a._chartMessageImageStyle.imageVAlign, m.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, t.pluckNumber)(a._chartMessageImageStyle.imageAlpha, m.baseChartMessageImageAlpha), imageScale: (0, t.pluckNumber)(a._chartMessageImageStyle.imageScale, m.baseChartMessageImageScale) } : { imageHAlign: (0, t.pluck)(h.dataEmptyMessageImageHAlign, m.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, t.pluck)(h.dataEmptyMessageImageVAlign, m.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, t.pluckNumber)(h.dataEmptyMessageImageAlpha, m.baseChartMessageImageAlpha), imageScale: (0, t.pluckNumber)(h.dataEmptyMessageImageScale, m.baseChartMessageImageScale) }, o.chartMessageType = "image") : (i = a ? { "font-family": a._chartMessageStyle.fontFamily || m.baseChartMessageFont, "font-size": a._chartMessageStyle.fontSize || m.baseChartMessageFontSize, fill: a._chartMessageStyle.color || m.baseChartMessageColor } : { "font-family": h.dataEmptyMessageFont || m.baseChartMessageFont, "font-size": h.dataEmptyMessageFontSize || m.baseChartMessageFontSize, fill: h.dataEmptyMessageColor || m.baseChartMessageColor }, c.setStyle(i), s = { text: c.getSmartText((0, t.parseUnsafeString)(I.string), r, g).text, x: r / 2, y: g / 2 }, o.chartMessageType = "text"), o.chartMessageAttr = s, o.chartMessageStyle = i;
        }
      }, {
        key: "drawChartMessage",
        value: function drawChartMessage() {
          var e,
              a,
              g,
              r = this,
              s = r.config,
              i = r.getFromEnv("paper"),
              l = s.isImage = "image" === s.chartMessageType,
              n = l ? s.chartMessageAttr : (0, t.extend2)(s.chartMessageAttr, s.chartMessageStyle);e = r.getGraphicalElement("messageText"), g = r._graphics, a = r.getLinkedParent().getChildContainer("messageGroup").show(), l ? r._drawBackground(s.chartMessageAttr, s.chartMessageStyle) : e || "text" !== s.chartMessageType ? (g.message = e.attr(n), e.show()) : e = r.addGraphicalElement("messageText", i.text(n, a)), r._hideOtherMessage(l);
        }
      }, {
        key: "_hideOtherMessage",
        value: function _hideOtherMessage(e) {
          var a,
              t,
              g,
              r = this;e ? (t = r.getGraphicalElement("messageText")) && t.hide() : (a = r.getGraphicalElement("backgroundImage"), g = r.getGraphicalElement("backgroundElement"), a && a.hide(), g && g.hide());
        }
      }, {
        key: "_hideChartMessage",
        value: function _hideChartMessage() {
          this._hideOtherMessage(!0), this._hideOtherMessage();
        }
      }, {
        key: "getType",
        value: function getType() {
          return "chartMessage";
        }
      }]);

      return n;
    }(a.default);

    exports.default = n;
  }, { "../../core/component-interface": 62, "../lib/lib": 20 }], 67: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        a = require("../schedular"),
        e = require("../../core/component-interface"),
        n = r(e),
        i = require("../dependency-manager");function r(t) {
      return t && t.__esModule ? t : { default: t };
    }var o = void 0,
        l = !t.hasSVG,
        s = "object",
        c = "chart",
        m = "group",
        f = "html",
        u = "text",
        h = "paper",
        d = "disappearing",
        g = "appearing",
        p = "string",
        A = "updating",
        b = "function",
        v = "linear",
        y = "chartSpecific",
        k = "global",
        E = "default",
        O = "*",
        F = { initial: 1, update: 0, realTimeUpdate: 0, resize: 0, dispose: 0, legendInteraction: 0, scroll: 0, mouseOut: 0, mouseOver: 0, default: 0, slicing: .25 },
        S = ["default", "global", "chartSpecific"],
        j = { fadeIn: { opacity: { start: 0, end: 1 } }, fadeOut: { opacity: { start: 1, end: 0 } } },
        _ = { fadeIn: function fadeIn() {
        this && this.show();
      }, fadeOut: function fadeOut() {
        this && this.hide();
      } },
        C = function C(t) {
      return null === t;
    },
        R = function R(t) {
      var a = void 0,
          e = {};for (var n in t) {
        t.hasOwnProperty(n) && (e[(a = t[n]).name] = a);
      }return e;
    },
        $ = function $(t) {
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var e = a.split(","),
          n = [];return e.forEach(function (a) {
        t[a] && t[a].animation && n.push(t[a].animation);
      }), n;
    },
        B = function B(t, a, e) {
      var n,
          i = Math.round,
          r = Object.assign({}, t),
          o = e / a;return o > .2 && (o = .2), n = r.end - r.start, r.start *= 1 - o, r.start += o, r.end = r.start + (1 - o) * n, r.start = i(100 * r.start) / 100, r.end = i(100 * r.end) / 100, r;
    },
        w = function w(t, a, e) {
      var n,
          i = j[a],
          r = "",
          l = {};if (i && t && t.el && t.el[0]) {
        for (r in i) {
          l[r] = t.el.attrs[r], l[r] === o && (l[r] = null), t.attrs[r] = i[r].end, t.el.attr(r, i[r].start);
        }n = t.callback, t.callback = function () {
          e && _[a] && _[a].call(this), n && n.call && n.call(this), this.attr(l);
        };
      }
    },
        G = function G(t, a) {
      var e,
          n = !0;if (a) {
        for (t.attrs = t.attrs || {}, ~(a = a.split("-")).indexOf("nc") && (n = !1), e = a.length; e--;) {
          w(t, a[e], n);
        }return t;
      }
    },
        D = function D(t, a, e, n, i, r, o, l) {
      t.animateWith(i, r, a, o, l, e, n);
    },
        T = function T(t) {
      var a = 0,
          e = t.length;for (a = 0; a < e; ++a) {
        t[a].fn && t[a].fn.call(t[a].el);
      }
    },
        x = function x(t) {
      var a = {};for (var _e6 in t) {
        if (t.hasOwnProperty(_e6) && "__esModule" !== _e6) {
          var _n9 = t[_e6];N(a, _n9);
        }
      }return a;
    },
        N = function N(t, a) {
      for (var _e7 in a) {
        a.hasOwnProperty(_e7) && (t[_e7] || (t[_e7] = []), t[_e7].push(a[_e7]));
      }
    },
        M = function M(t) {
      return (typeof t === "undefined" ? "undefined" : _typeof(t)) == b;
    };j.fadein = j.fadeIn, j.fadeout = j.fadeOut;
    var I = function (_n$default) {
      _inherits(I, _n$default);

      _createClass(I, [{
        key: "getType",
        value: function getType() {
          return "animationManager";
        }
      }]);

      function I() {
        _classCallCheck(this, I);

        var _this3 = _possibleConstructorReturn(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this));

        var t = _this3;t._removedGraphics = [], t._animCallBack = function () {
          if (!t.getState("removed") && !this.removed) {
            var _a3 = t.getAnimationState();t._removeElems(), t.reset(), t.fireEvent("animationComplete", { currAnimState: _a3 });
          }
        }, t.startAnimation = function () {
          t.kickStart(), t.animate("draw");
        };return _this3;
      }

      _createClass(I, [{
        key: "getName",
        value: function getName() {
          return "animationManager";
        }
      }, {
        key: "stopAnimation",
        value: function stopAnimation() {
          if (this.getState("chartAnimating")) {
            var t,
                a = this,
                e = a.config.animationObj,
                n = e && e.duration;n ? (t = a.getGraphicalElement().dummyObj) && t.stop(o, !0, !0) : 0 === n && (a.removeJob("anim-callBack"), a._animCallBack());
          }
        }
      }, {
        key: "kickStart",
        value: function kickStart() {
          var t = void 0,
              a = void 0,
              e = void 0,
              n = this,
              r = n.config,
              l = n.getGraphicalElement(),
              s = n.getFromEnv(h),
              c = r.animationObj,
              m = r.animationeffect;a = c.duration, c.animObj = e = (0, i.getDep)("redraphael", "plugin").animation({ x: 0 }, a, m, n._animCallBack, !0), c.animType = m, (t = l.dummyObj) ? t.attr({ x: 100 }) : (t = s.rect({ x: 100, y: 0, width: 10, height: 30 }), n.addGraphicalElement("dummyObj", t), t.hide()), c.dummyObj = l.dummyObj, t.stop(o, !0, !0), n.fireEvent("animationStart"), n.setState("chartAnimating", !0), t.animate(e);
        }
      }, {
        key: "setAnimationState",
        value: function setAnimationState() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o;
          t && this.stopAnimation(), this.config.__state = t, this._setAnimDuration(t);
        }
      }, {
        key: "getAnimationState",
        value: function getAnimationState() {
          return this.config && this.config.__state;
        }
      }, {
        key: "_setAnimDuration",
        value: function _setAnimDuration() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : E;
          var a = this.config,
              e = a.animationObj || (a.animationObj = {}),
              n = a.animationDuration || (a.animationDuration = {}),
              i = this.getFromEnv(c).getFromEnv("chart-attrib") || {},
              r = t + "AnimDuration",
              o = a.killSwitch ? 0 : 1e3 * (n[r] || i[r.toLowerCase()] || I.getFallbackAnimDuration(t));e && (e[r] = o, e.duration = +o);
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes() {
          var a = this,
              e = a.getFromEnv(c),
              n = e.config,
              i = a.config,
              r = e.getFromEnv("chart-attrib") || {};i.killSwitch = !(0, t.pluckNumber)(r.animation, n.animation, 1), i.animationeffect = n.animationeffect || "linear", a.invokeAnimationRules(), i.workingRules || (i.workingRules = {}), i.animateArr || (i.animateArr = []), i.animationName || (i.animationName = []);
        }
      }, {
        key: "invokeAnimationRules",
        value: function invokeAnimationRules() {
          var a = void 0,
              e = this,
              n = e.getFromEnv(c),
              r = n.getFromEnv("chart-attrib") || {},
              o = n.config || {},
              l = e.config,
              s = n.getFromEnv("chartInstance").args.animation,
              m = n.getFromEnv("core-options").defaultTheme,
              f = R((0, i.getDepsByType)("theme")),
              u = (n.getFromEnv("core-options")._globalAnimationRule || []).concat($(f, m)),
              h = (s && [s] || []).concat($(f, o.theme));l.animationRules = { global: x(u.map(function (t) {
              return t && t.rule;
            }).filter(function (t) {
              return t;
            })), chartSpecific: x(h.map(function (t) {
              return t && t.rule;
            }).filter(function (t) {
              return t;
            })), default: x((0, i.getDepsByType)("animationRule")) }, l.animationDuration = a = {}, u.map(function (t) {
            return Object.assign(a, t.duration);
          }), h.map(function (t) {
            return Object.assign(a, t.duration);
          }), a.initialAnimDuration = (0, t.pluckNumber)(a.initialAnimDuration, r.initialanimduration, r.animationduration), e.config.slots = I.getFallbackAnimTimeSlots().concat([].concat.apply([], u.map(function (t) {
            return t.slots;
          })).filter(function (t) {
            return t;
          })).concat([].concat.apply([], h.map(function (t) {
            return t.slots;
          })).filter(function (t) {
            return t;
          }));
        }
      }, {
        key: "reInitialize",
        value: function reInitialize() {
          var t = this,
              e = t.config.animationObj.duration;t.setState("initialized", !0), e ? t.addJob("start-animation", t.startAnimation, a.priorityList.animation) : (t.fireEvent("animationStart"), t.setState("chartAnimating", !0), t.addJob("anim-callBack", t._animCallBack, a.priorityList.animation));
        }
      }, {
        key: "reset",
        value: function reset() {
          var t = this;t.setState("initialized", !1), t.config && t.config.animateArr && (t.config.animateArr.length = 0), t.setState("chartAnimating", !1), t.setAnimationState();
        }
      }, {
        key: "registerAnimObj",
        value: function registerAnimObj(t) {
          for (var a in t) {
            this.registerAnimation(t[a], a);
          }
        }
      }, {
        key: "getFinalSlots",
        value: function getFinalSlots() {
          var _t6,
              a,
              e,
              n,
              i = this.config,
              r = i.slots,
              o = i.workingRules = {},
              l = i.animationName;return _t6 = function t(a) {
            var e,
                n,
                i,
                r,
                o,
                s,
                c = !1;if (!a) return !1;for (i = 0, r = a.length; i < r; i += 1) {
              if (n = a[i], Array.isArray(n)) for (o = 0, s = a[i].length; o < s; o += 1) {
                n = a[i][o], e = !1, -1 === l.indexOf(n.name) ? n.child && (e = n.hasAnimation = _t6(n.child)) : e = !0, c = c || e, n.hasAnimation = e;
              } else e = !1, -1 === l.indexOf(n.name) ? n.child && (e = n.hasAnimation = _t6(n.child)) : e = !0, c = c || e, n.hasAnimation = e;
            }return c;
          }, a = function a(t, _a4, e) {
            var i,
                r,
                l,
                s,
                c,
                m = t.length,
                f = 0,
                u = 0,
                h = _a4;for (r = 0, l = 0, c = 0; c < m; c += 1) {
              (i = t[c]).hasAnimation || !1 === i.collapsible ? l += 1 : r += i.duration, u += i.duration;
            }for (r /= l, c = 0; c < m; c += 1) {
              (i = t[c]).hasAnimation && (s = e - _a4, h = (f = h) + (i.duration / u + r) * s, o[i.name] = { start: f, end: h, effect: i.effect, transition: i.transition }, i.child && n(i.child, f, h));
            }
          }, e = function e(t, a, _e8) {
            var i, r, l;r = a + (r = t.start) * (i = _e8 - a), l = a + (l = t.end) * i, o[t.name] = { start: r, end: l, effect: t.effect, transition: t.transition }, t.child && n(t.child, r, l);
          }, n = function n(t, _n10, i) {
            var r,
                o,
                l = t.length;for (r = 0; r < l; r++) {
              o = t[r], Array.isArray(o) ? a(o, _n10, i) : e(o, _n10, i);
            }
          }, _t6(r), n(r, 0, 1), o.default = { start: 0, end: 1 }, o;
        }
      }, {
        key: "registerOne",
        value: function registerOne(t, a) {
          this.registerAnimation([{ data: [t] }], a);
        }
      }, {
        key: "registerAnimation",
        value: function registerAnimation() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var a = arguments[1];
          var e,
              n,
              i,
              r = !1;for (e = 0, i = t.length; e < i; e += 1) {
            (n = t[e]).data && n.data.length && (this.config.animateArr.push((n.component = a, n)), r = !0);
          }r && this.config.animationName.push(a), this.getState("initialized") || this.reInitialize();
        }
      }, {
        key: "onAnimationComplete",
        value: function onAnimationComplete(t) {
          this.addEventListener("animationComplete", function (a) {
            t(), a.detachHandler();
          });
        }
      }, {
        key: "setAnimation",
        value: function setAnimation() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var a,
              e,
              n,
              i,
              r,
              l,
              c,
              m,
              f,
              u,
              h,
              d,
              A,
              b,
              v = this,
              y = v.config.animationObj,
              k = t.el,
              E = t.attr || {},
              O = {},
              F = {},
              S = function S(a, e, n, i) {
            return function () {
              n.callback && n.callback.call(this), a && this.attr(a), e && t.callback && t.callback.call(this), i && this.appendTo(i);
            };
          },
              j = function j(t, a, e) {
            return function () {
              a.hookFn && a.hookFn.call(this), t && this.attr(t), e && this.appendTo(e);
            };
          },
              _ = [],
              C = y.duration,
              R = (typeof k === "undefined" ? "undefined" : _typeof(k)) == s && t.container && k.parent !== t.container;if (C && (f = v.getAnimAttributes(t))) {
            for (m = f.length, b = !1, h = !(u = t.state === g || (typeof k === "undefined" ? "undefined" : _typeof(k)) == p) && k.attrs, c = {}, l = 0; l < m; l++) {
              for (i in d = l === m - 1, r = _[l] = {}, a = (A = f[l]).finalAttr, e = A.initialAttr, I.removeOpacityFromGroup(t.el, e), I.removeOpacityFromGroup(t.el, a), e) {
                c[i] = e[i], F[i] === o && (F[i] = e[i]);
              }for (i in a) {
                c[i] = a[i], u && F[i] === o && (F[i] = a[i]);
              }if (r.attrs = a, r.transition = A.transition, r.effect = A.effect, r.animConfig = [A.startEnd], A.callback && (r.callback = A.callback), (b = R && A.changeGroup) && (R = !1), d) {
                if (u) for (i in E) {
                  F[i] === o && (F[i] = E[i]);
                }for (i in E) {
                  n = E[i], (c[i] || !u) && c[i] !== n && (a && a[i] === o ? a[i] = n : O[i] = n);
                }for (i in c) {
                  O[i] === o && (n = E[i] || h[i] || "", c[i] !== n && (a && a[i] === o && n !== o ? a[i] = n : O[i] = n));
                }a || (r.attrs = O), r.callback = S((a || e) && O, d, A, R && t.container), k = v.setAttributes(k, { attr: F, inputJSON: t });
              }(e || A.hookFn || b) && (r.animConfig[0].hookFn = j((!u || l) && e, A, b && t.container));
            }for (l = 0; l < m; l++) {
              _[l].el = k.el, v.registerAnimation([{ data: [_[l]] }], f[l].slot);
            }
          } else v.registerAnimation(), k = v.setAttributes(k, { attr: E, inputJSON: t, groupChangeReq: R, immediate: !0 });return k.removed ? null : k.el;
        }
      }, {
        key: "_removeElems",
        value: function _removeElems() {
          if (this.getFromEnv(h) && !this.getFromEnv(h).removed) {
            var _t7 = this;_t7._removedGraphics.forEach(function (t) {
              return t.remove && t.remove();
            }), _t7._removedGraphics.length = 0;
          }
        }
      }, {
        key: "removeElement",
        value: function removeElement(t, a) {
          return a ? t.remove() : this._removedGraphics.push(t), null;
        }
      }, {
        key: "_getRulesByState",
        value: function _getRulesByState(t) {
          var a = void 0,
              e = void 0,
              n = void 0,
              i = void 0,
              r = t.component,
              l = this.getAnimationState() || O,
              s = I._ruleSelectorQueryBuilder(Object.assign(t, { state: l }));return (a = (i = r.getState("animRules") || {})[l]) ? a : (e = i[l] = {}, n = this.config.animationRules, S.forEach(function (t) {
            var a = n[t];a && s.forEach(function (t) {
              a[t] && (Array.isArray(a[t]) ? a[t].forEach(function (t) {
                e = i[l] = C(t) ? null : Object.assign(e || {}, M(t) ? t.call(r) : t);
              }) : e = i[l] = C(a[t]) ? null : Object.assign(e || {}, M(a[t]) ? a[t].call(r) : a[t]));
            });
          }), r.setState("animRules", i), r.getState("ruleFlushAttached") || r.addExtEventListener("beforedraw", function () {
            r.setState("animRules", o), r.setState("ruleFlushAttached", !0);
          }, r.getFromEnv(c)), e);
        }
      }, {
        key: "getAnimAttributes",
        value: function getAnimAttributes(t) {
          var a = void 0,
              e = void 0,
              n = void 0,
              i = void 0,
              r = void 0,
              o = t.component || this.getFromEnv(c),
              l = t.label || ("object" == _typeof(t.el) ? t.el.type : t.el),
              s = t.state,
              m = this._getRulesByState({ label: l, component: o }),
              f = [];if (!C(m) && (s || (s = _typeof(t.el) == p ? g : t.attr ? A : d), a = I._getRulesByElement(m, { component: o, state: s, label: l }), !C(a))) {
            if (!a) return I.getFallbackAnimRule(t);for (M(a) && (a = a.call(o, t)), r = a.length, i = 0; i < r; i++) {
              n = {}, (e = a[i]).initialAttr && (n.initialAttr = M(e.initialAttr) ? e.initialAttr.call(o, t) : Object.assign({}, e.initialAttr)), e.finalAttr && (n.finalAttr = M(e.finalAttr) ? e.finalAttr.call(o, t) : Object.assign({}, e.finalAttr)), n.startEnd = M(e.startEnd) ? e.startEnd.call(o, t) : e.startEnd ? Object.assign({}, e.startEnd) : { start: 0, end: 1 }, n.slot = e.slot || "default", n.callback = e.callback, n.hookFn = e.hookFn, n.transition = e.transition, n.effect = e.effect || "linear", e.groupChange && (n.groupChange = !0), f.push(n);
            }return f;
          }
        }
      }, {
        key: "createElement",
        value: function createElement(t) {
          var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var e = arguments[2];
          var n = this,
              i = n.getFromEnv(h);if (i || (i = n.getFromEnv(c).getFromEnv(h), n.addToEnv(h, i)), t === m) (t = i.group(e.attr && e.attr.name || "", e.container)).attr(a);else if (t === f) t = i.html(e.attr.type, a, e.css, e.container);else {
            if (t === u && e.css) return i[e.el](a, e.css, e.container);t = i[e.el](a, e.container);
          }return t;
        }
      }, {
        key: "setAttributes",
        value: function setAttributes(t, a) {
          var e,
              n = a.attr,
              i = a.inputJSON || {};return "string" == typeof t ? t = this.createElement(t, n, i) : 0 === Object.keys(n).length ? (!i.attr || i.state === d) && (e = !i.doNotRemove) : t.attr(n), e ? this.removeElement(t, a.immediate) : (i.css && t.css(i.css), a.groupChangeReq && t.appendTo(i.container), a.immediate && i.callback && i.callback.call(t)), { el: t, removed: e };
        }
      }, {
        key: "prepareAnimateArr",
        value: function prepareAnimateArr() {
          function t(t, a) {
            var n,
                i,
                r,
                l = { start: 0, end: 1 };for (r in t) {
              if (t.hasOwnProperty(r)) {
                if (t[r].syncWith && !e[t[r].syncWith]) continue;n = t[r].syncWith, l.start = t[r].start === o ? 0 : t[r].start, l.end = t[r].end === o ? 1 : t[r].end, l.hookFn = t[r].hookFn || t.hookFn, l.smartMorph = t[r].smartMorph || t.smartMorph;break;
              }
            }return n = n && e[n] ? n : a && e[a] ? a : "default", i = e[n].end - e[n].start, l.start = e[n].start + l.start * i, l.end = e[n].start + l.end * i, l;
          }var a,
              e,
              n,
              i,
              r,
              l,
              s,
              c,
              m,
              f = this.config.animateArr,
              u = this.config.preAnimArr = [];for (e = this.getFinalSlots(), i = 0, r = f.length; i < r; i += 1) {
            for (n = (a = f[i]).component, l = 0, s = a.data.length; l < s; l += 1) {
              (c = (m = a.data[l]).transition || e[n] && e[n].transition) && G(m, c), m.preAnimFn && u.push({ el: m.el, fn: m.preAnimFn }), m.animConfig && (m.animConfig = t(m.animConfig, n));
            }a.effect || e[n] && (a.effect = e[n].effect), a.animConfig || (a.animConfig = [{}]), a.animConfig = t(a.animConfig, n);
          }
        }
      }, {
        key: "animate",
        value: function animate() {
          var t,
              a,
              e,
              n,
              i,
              r,
              o,
              l,
              s = this,
              c = s.config,
              m = s.config.animateArr,
              f = c.animationObj,
              u = f.animObj,
              h = f.dummyObj,
              d = f.duration;for (s.prepareAnimateArr(), T(s.config.preAnimArr), i = 0, r = m.length; i < r; i += 1) {
            for (o = 0, l = (a = m[i]).data.length - 1; o <= l; o += 1) {
              e = a.data[o].animConfig || a.animConfig, e = B(e, d, 180), t = a.data[o].effect || a.effect || v, n = i === r && a.callback || a.data[o].callback, a.data[o].preAttrs && a.data[o].el.attr(a.data[o].preAttrs), a.data[o].el && D(a.data[o].el, a.data[o].attrs, n || null, e, h, u, d, t);
            }
          }
        }
      }, {
        key: "remove",
        value: function remove(t) {
          this.removeAllJobs(), t.instant && this.getGraphicalElement("dummyObj") && this.getGraphicalElement("dummyObj").remove(), _get(I.prototype.__proto__ || Object.getPrototypeOf(I.prototype), "remove", this).call(this, t);
        }
      }], [{
        key: "removeOpacityFromGroup",
        value: function removeOpacityFromGroup(t, a) {
          a && l && (t === m || t.type === m) && delete a.opacity;
        }
      }, {
        key: "_ruleSelectorQueryBuilder",
        value: function _ruleSelectorQueryBuilder(t) {
          var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var e = t.label,
              n = t.state,
              i = t.component,
              r = i.getType(),
              o = i.getName();
          if (a) {
            var _t8 = ["*", "*.*", "*.*.*"],
                _a5 = ["*.*." + o, "*." + r + ".*", "*." + r + "." + o];return "*" === n ? _t8.concat(_a5) : _t8.concat(_a5, [n + ".*", n + ".*.*", n + ".*." + o, n + "." + r + ".*", n + "." + r + "." + o]);
          }return [e + "." + n, e + ".*", "*." + n, "*.*", "*"];
        }
      }, {
        key: "_getRulesByElement",
        value: function _getRulesByElement(t, a) {
          var e = void 0;return I._ruleSelectorQueryBuilder(a, !1).forEach(function (a) {
            e || (e = t[a]);
          }), e;
        }
      }, {
        key: "getFallbackAnimRule",
        value: function getFallbackAnimRule(t) {
          if (t.state !== g && _typeof(t.el) != p) {
            if (t.state === A || t.attr) return [{ startEnd: { start: 0, end: 1 } }];if (t.el.type !== m) return [{ initialAttr: { opacity: 1 }, finalAttr: { opacity: 0 }, startEnd: { start: 0, end: 1 } }];
          } else if (t.el !== m) return [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: t.attr && t.attr.opacity || 1 }, startEnd: { start: 0, end: 1 } }];
        }
      }, {
        key: "getFallbackAnimDuration",
        value: function getFallbackAnimDuration(t) {
          return F[t] || 0;
        }
      }, {
        key: "getFallbackAnimTimeSlots",
        value: function getFallbackAnimTimeSlots() {
          return [{ name: "_default", start: 0, end: 1, child: [[{ name: "initial", duration: .125 }, { name: "middle", duration: .75, child: [[{ name: "axis", duration: .25 }, { name: "plot", duration: .75 }]] }, { name: "final", duration: .125 }]] }];
        }
      }]);

      return I;
    }(n.default);

    exports.default = I;
  }, { "../lib/lib": 20, "../schedular": 18, "../../core/component-interface": 62, "../dependency-manager": 17 }], 68: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = { pie2d: ["isPlotItemSliced", "addData", "removeData", "updateData", "slicePlotItem", "startingAngle"], dragcolumn2d: ["getDataWithId", "getData", "setUpperLimit", "setLowerLimit", "getLowerLimit", "getUpperLimit"], realtimecolumn: ["feedData", "setData", "stopUpdate", "restartUpdate", "isUpdateActive", "clearChart", "getData", "getDataForId", "setDataForId", "getDataJSON", "showLog", "hideLog", "clearLog"], scrollcolumn2d: ["scrollTo"], doughnut: ["centerLabel"], zoomline: ["zoomOut", "zoomTo", "resetChart", "setZoomMode", "getViewStartIndex", "getViewEndIndex", "scrollTo"], maps: ["getMapName", "getEntityList", "getMapAttribute", "exportMap", "addMarker", "updateMarker", "removeMarker"], "*": ["exportChart", "getXML", "getChartAttribute", "getCSVData", "getChartData", "getDataAsCSV", "getJSONData", "getSVGString", "getXMLData"] };e.pie3d = e.pie2d, e.doughnut2d = e.doughnut3d = e.doughnut.concat(e.pie2d), e.dragarea = e.dragline = e.dragnode = e.dragcolumn2d, e.realtimearea = e.realtimeline = e.realtimelinedy = e.realtimestackedarea = e.realtimestackedcolumn = e.bulb = e.angulargauge = e.hlineargauge = e.hled = e.vled = e.vbullet = e.hbullet = e.thermometer = e.cylinder = e.realtimecolumn, e.scrollarea2d = e.scrollline2d = e.scrollcombidy2d = e.scrollcombi2d = e.scrollstackedcolumn2d = e.scrollcolumn2d, e.zoomlinedy = e.zoomline, exports.default = e;
  }, {}], 19: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports._mouseEvtHandler = void 0;var e = require("../_internal/lib/lib"),
        t = require("../_internal/misc/event-api"),
        r = require("../_internal/components/chartmessage"),
        a = g(r),
        n = require("../core/component-interface"),
        i = g(n),
        o = require("../_internal/components/animation-manager"),
        s = g(o),
        d = require("../_internal/dependency-manager"),
        l = require("../_internal/misc/eimethod-list"),
        c = g(l);function g(e) {
      return e && e.__esModule ? e : { default: e };
    }var h = "mouseout",
        u = !0,
        m = function m(e, t) {
      for (var r in t) {
        t.hasOwnProperty(r) && (e[r] = t[r]);
      }
    },
        p = function p(e) {
      return (c.default[e] || []).concat(c.default["*"]);
    },
        v = function v(t, r, a) {
      var n,
          i,
          o,
          s,
          d,
          l,
          c,
          g,
          h = a.mouseTracker,
          u = r.originalEvent,
          m = t.config.datasetOrder || t.getDatasets(),
          p = !1,
          v = m.length,
          f = h._lastDatasetIndex,
          E = h._lastPointIndex;for (i = (n = (0, e.getMouseCoordinate)(t.getFromEnv("chart-container"), u, t)).chartX, o = n.chartY; v-- && !p;) {
        (s = m[v]) && s.getState("visible") && (d = s._getHoveredPlot && s._getHoveredPlot(i, o)) && d.hovered && (p = !0, d.datasetIndex = v, g = h.getMouseEvents(r, d.datasetIndex, d.pointIndex));
      }if ((!p || g && g.fireOut) && void 0 !== f && m[f] && m[f]._firePlotEvent && (g && !g.events.length ? h.mouseoutTimer = setTimeout(function () {
        t.mouseoutHandler(r, f, E);
      }, 20) : t.mouseoutHandler(r, f, E)), p) for ((c = g.events && g.events.length) && (h._lastDatasetIndex = d.datasetIndex, E = h._lastPointIndex = d.pointIndex), l = 0; l < c; l += 1) {
        s && s._firePlotEvent && s && s._firePlotEvent && s._firePlotEvent(g.events[l], E, r, d.datasetIndex);
      }
    };
    var f = function (_i$default) {
      _inherits(f, _i$default);

      function f() {
        _classCallCheck(this, f);

        return _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
      }

      _createClass(f, [{
        key: "setDummyEImethods",
        value: function setDummyEImethods(e) {
          var t = this.config,
              r = t._eiStore || (t._eiStore = {}),
              a = p(e),
              n = this.getFromEnv("chartInstance");a.forEach(function (e) {
            n[e] || (n[e] = function (e) {
              return function () {
                r[e] || (r[e] = []), r[e].push(arguments);
              };
            }(e));
          }), n.addEventListener("renderComplete", function () {
            var _loop2 = function _loop2(_e9) {
              r[_e9].forEach(function (t) {
                n[_e9].apply(n, t);
              });
            };

            for (var _e9 in r) {
              _loop2(_e9);
            }t._eiStore = {};
          });
        }
      }, {
        key: "mouseoutHandler",
        value: function mouseoutHandler(e, t, r) {
          var a = this,
              n = a.config.datasetOrder || a.getDatasets(),
              i = a.getChildren("mouseTracker")[0];n[t]._firePlotEvent(h, r, e), delete i._lastDatasetIndex, delete i._lastPointIndex;
        }
      }, {
        key: "getName",
        value: function getName() {
          return "base";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "chartAPI";
        }
      }, {
        key: "_mouseEvtHandler",
        value: function _mouseEvtHandler(e, t) {
          v(this, e, t);
        }
      }, {
        key: "getComponents",
        value: function getComponents(e, t) {
          var r = [];return (e || this).iterateComponents(function (e) {
            e.getType() === t && r.push(e);
          }), r;
        }
      }, {
        key: "getDatasets",
        value: function getDatasets(e) {
          var t = [];return (e || this).iterateComponents(function (e) {
            "dataset" === e.getType() && t.push(e);
          }), t;
        }
      }, {
        key: "preConfigure",
        value: function preConfigure(e) {
          _get(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "preConfigure", this).call(this, e), m(this.getFromEnv("chartInstance"), this.eiMethods);
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes(e) {
          _get(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "configureAttributes", this).call(this, e), this.createBaseComponent();
        }
      }, {
        key: "createBaseComponent",
        value: function createBaseComponent() {
          var e = void 0,
              t = this;(e = t.getFromEnv("animationManager")) ? (e.configure(), e.setAnimationState("update")) : (e = new s.default(), t.addToEnv("animationManager", e), e.addToEnv("chart", t), e.addToEnv("animationManager", e), e.configure(), e.setAnimationState("initial"), t.addExtEventListener("animationComplete", function (e, r) {
            ("initial" === r.currAnimState || "update" === r.currAnimState) && t.fireChartInstanceEvent("internal.animationComplete");
          }, e));
        }
      }, {
        key: "setChartMessage",
        value: function setChartMessage(t, r, n) {
          var i,
              o,
              s = this;(0, e.componentFactory)(this, a.default, "chartMessage"), o = s.getChildren("chartMessage")[0], n ? s.addToEnv("chart-container", n) : n = s.getFromEnv("chart-container"), (i = s.getFromEnv("paper")) || ((i = new ((0, d.getDep)("redraphael", "plugin"))(n, s.getFromEnv("chartWidth"), s.getFromEnv("chartHeight"))).setHTMLClassName("fusioncharts-div"), s.addToEnv("paper", i)), i.setConfig("stroke-linecap", e.ROUND), s.getChildContainer("messageGroup") || s.addChildContainer("messageGroup", i.group("messageGroup")), s.config.hasChartMessage = !0, o.setChartMessage(t, r);
        }
      }, {
        key: "drawChartMessage",
        value: function drawChartMessage() {
          var e = this;e.config.hasChartMessage = !0, e.getChildren("chartMessage")[0].drawChartMessage(), e._drawCreditLabel();
        }
      }, {
        key: "_dispose",
        value: function _dispose() {
          this._clearTimers && this._clearTimers();var e = this.getFromEnv("paper");e && e.remove && e.remove(), _get(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_dispose", this).call(this);
        }
      }, {
        key: "fireChartInstanceEvent",
        value: function fireChartInstanceEvent(e, r, a, n, i) {
          var o = this.getFromEnv("chartInstance");(0, t.triggerEvent)(e, o, r, a, n, i);
        }
      }, {
        key: "_hideChartMessage",
        value: function _hideChartMessage() {
          var e = this,
              t = e.getChildren("chartMessage");e.config.hasChartMessage = !1, t && t[0]._hideChartMessage(), e.getGraphicalElement("messageText") && e.getGraphicalElement("messageText").hide(), e.getGraphicalElement("messageVeil") && e.getGraphicalElement("messageVeil").hide();
        }
      }, {
        key: "_removeWaitingJobs",
        value: function _removeWaitingJobs() {
          this.iterateComponents(function (e) {
            return e.removeAllJobs();
          });
        }
      }, {
        key: "_drawCreditLabel",
        value: function _drawCreditLabel() {
          var t,
              r,
              a,
              n,
              i = this,
              o = i.getFromEnv("core-options"),
              s = i.getFromEnv("paper"),
              d = o.creditLabel,
              l = i.getFromEnv("chartInstance").args.creditLabel,
              c = +i.getFromEnv("chartHeight"),
              g = i.getGraphicalElement("creditLabel"),
              h = i.getContainer("parentgroup"),
              m = { href: e.CREDIT_HREF, text: e.CREDIT_STRING };(0, e.pluck)(l, d, u) ? (r = i.getContainer("creditgroup") || i.addContainer("creditgroup", s.group("creditgroup")), h && r.insertAfter(h), a = { text: m.text, x: 6, y: c - 4, "vertical-align": e.POSITION_BOTTOM, "text-anchor": e.POSITION_START, fill: "rgba(0,0,0,0.5)", title: m.title || e.BLANK }, n = { fontSize: 9, fontFamily: "Verdana,sans", cursor: e.POINTER, _cursor: e.HAND }, g ? g.attr(a).css(n) : (t = s.text(a, n, r), i.addGraphicalElement("creditLabel", t), t.click(function () {
            try {
              open(m.href);
            } catch (e) {
              (top || window).location.href = m.href;
            }
          }))) : t && t.remove && i.removeGraphicalElement("creditLabel");
        }
      }, {
        key: "_hideModal",
        value: function _hideModal() {
          this.getChildContainer("messageGroup").hide();
        }
      }, {
        key: "remove",
        value: function remove(e) {
          var t = this.getFromEnv("animationManager");_get(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "remove", this).call(this, e), t.remove(e);
        }
      }], [{
        key: "getName",
        value: function getName() {
          return "base";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "chartAPI";
        }
      }]);

      return f;
    }(i.default);

    f.stringConstants = { BACKGROUNDLOADED: "BackgroundLoaded", BACKGROUNDLOADERROR: "BackgroundLoadError", clipRectStr: "clip-rect" }, exports._mouseEvtHandler = v, exports.default = f;
  }, { "../_internal/lib/lib": 20, "../_internal/misc/event-api": 22, "../_internal/components/chartmessage": 66, "../core/component-interface": 62, "../_internal/components/animation-manager": 67, "../_internal/dependency-manager": 17, "../_internal/misc/eimethod-list": 68 }], 33: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var e = function () {
      function e() {
        _classCallCheck(this, e);
      }

      _createClass(e, [{
        key: "draw",
        value: function draw() {}
      }, {
        key: "drawAt",
        value: function drawAt() {}
      }, {
        key: "hide",
        value: function hide() {}
      }, {
        key: "hideAll",
        value: function hideAll() {}
      }, {
        key: "enableToolTip",
        value: function enableToolTip() {}
      }, {
        key: "disableToolTip",
        value: function disableToolTip() {}
      }, {
        key: "setStyle",
        value: function setStyle() {}
      }]);

      return e;
    }();

    exports.default = { extension: e, name: "ToolTipController", type: "plugin" };
  }, {}], 98: [function (require, module, exports) {
    var t = null;function r() {
      return t || (t = e()), t;
    }function e() {
      try {
        throw new Error();
      } catch (r) {
        var t = ("" + r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if (t) return n(t[0]);
      }return "/";
    }function n(t) {
      return ("" + t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/, "$1") + "/";
    }exports.getBundleURL = r, exports.getBaseURL = n;
  }, {}], 53: [function (require, module, exports) {
    var r = require("./bundle-url").getBundleURL;function e(r) {
      Array.isArray(r) || (r = [r]);var e = r[r.length - 1];try {
        return Promise.resolve(require(e));
      } catch (n) {
        if ("MODULE_NOT_FOUND" === n.code) return new u(function (n, i) {
          t(r.slice(0, -1)).then(function () {
            return require(e);
          }).then(n, i);
        });throw n;
      }
    }function t(r) {
      return Promise.all(r.map(s));
    }var n = {};function i(r, e) {
      n[r] = e;
    }module.exports = exports = e, exports.load = t, exports.register = i;var o = {};function s(e) {
      var t;if (Array.isArray(e) && (t = e[1], e = e[0]), o[e]) return o[e];var i = (e.substring(e.lastIndexOf(".") + 1, e.length) || e).toLowerCase(),
          s = n[i];return s ? o[e] = s(r() + e).then(function (r) {
        return r && module.bundle.register(t, r), r;
      }) : void 0;
    }function u(r) {
      this.executor = r, this.promise = null;
    }u.prototype.then = function (r, e) {
      return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.then(r, e);
    }, u.prototype.catch = function (r) {
      return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.catch(r);
    };
  }, { "./bundle-url": 98 }], 7: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../_internal/lib/lib"),
        t = require("../_internal/lib/lib-graphics"),
        r = require("../_internal/misc/event-api"),
        a = require("../../../package.json"),
        i = require("../_internal/dependency-manager"),
        n = require("../_internal/misc/updater"),
        s = require("../_internal/misc/renderer-events"),
        o = F(s),
        d = require("../_internal/misc/create-chart"),
        l = F(d),
        c = require("../_internal/vendors/fusioncharts-smartlabel/src/SmartlabelManager"),
        h = F(c),
        p = require("../_internal/schedular"),
        g = require("../_internal/misc/file-store"),
        u = F(g),
        f = require("../_internal/misc/global-policies"),
        m = F(f),
        v = require("../_internal/components/numberformatter"),
        y = F(v),
        b = require("../_internal/redraphael/redraphael"),
        _ = F(b),
        C = require("../_internal/redraphael/redraphael.svg"),
        S = F(C),
        E = require("../_internal/transcoder/json-transcoder"),
        w = F(E),
        M = require("../_internal/redraphael/redraphael.ext"),
        I = F(M),
        D = require("../viz/basechart"),
        L = F(D),
        T = require("../_internal/misc/tooltip-adapter"),
        A = F(T);function F(e) {
      return e && e.__esModule ? e : { default: e };
    }var N = "json",
        x = /(^|[\/\\])(fusioncharts\.js)([\?#].*)?$/gi,
        R = /^(FusionCharts|FusionWidgets|FusionMaps)/,
        z = /[^\%\d]*$/gi,
        j = /url$/i,
        k = "undefined" != typeof HAS_MAPS && HAS_MAPS,
        V = function V(e) {
      return e.toString().toLowerCase();
    },
        O = function () {
      var e,
          t = {},
          r = function r() {
        var a,
            i,
            n,
            s,
            o,
            d = 0,
            l = parseInt(ie.options.visibilityTrackingInterval, 10) || 300;for (a in t) {
          d += 1, i = t[a].chart, n = t[a].container, s = t[a].insertMode, o = t[a].callback, (i.disposed || !B(n)) && (delete t[a], d -= 1, !i.disposed && i.renderChart(n, s, o));
        }e = d ? setTimeout(r, l) : clearTimeout(e);
      };return function (a, i, n, s) {
        t[a.id] = { chart: a, container: i, insertMode: n, callback: s }, e || (e = setTimeout(r, parseInt(ie.options.visibilityTrackingInterval, 10) || 300));
      };
    }(),
        B = function () {
      var e = function e(t) {
        var r = t.parentNode;return !!r && 9 !== r.nodeType && (!("none" !== function (e, t) {
          return window.getComputedStyle ? t = window.getComputedStyle(e)[t] : e.currentStyle && (t = e.currentStyle[t]), t;
        }(t, "display")) || !!r && e(r));
      };return e;
    }();var P = void 0,
        U = void 0,
        q = void 0,
        H = void 0,
        J = 0,
        W = {},
        G = function G() {
      ie.removeEventListener("initialized", G), q = new h.default(document.body || document.getElementsByTagName("body")[0]), d.globalStore.addToEnv("smartLabel", q);
    };function $() {
      return "chartobject-" + ($.lastId += 1);
    }function X(e) {
      var t = void 0,
          r = {};for (t in e) {
        r[t.toLowerCase()] = e[t];
      }return r;
    }function Y(e) {
      var t = void 0,
          r = [];for (t in e) {
        r.push(t + "_" + e[t]);
      }return r.sort(), r.join(",");
    }function K(e, t, r) {
      var a, i;for (a in e) {
        if (e[a] instanceof Array) t[e[a][0]] = r[a];else for (i in e[a]) {
          t[e[a][i][0]] = r[a][i];
        }
      }
    }function Q(e, t, r, a) {
      return { native: r === N, dataFormat: r, format: N, data: t, dataSource: e, silent: !!a };
    }function Z(e) {
      var t,
          r,
          a = window.document.getElementsByTagName("script"),
          i = a.length;for (r = 0; r < i; r += 1) {
        if (null != (t = a[r].getAttribute("src")) && null !== t.match(e)) return t.replace(e, "$1");
      }
    }function ee(e, t) {
      var r,
          a,
          i,
          n = document.getElementById(e),
          s = t.id || t.getAttribute("id");if (null === n) return !1;if (e === s) return !0;for (a = 0, i = (r = t.getElementsByTagName("*")).length; a < i; a++) {
        if (r[a] === n) return !1;
      }return !0;
    }function te(e) {
      var t = ie.items[e && e.id];t && (!1 !== e.success || e.silent) || (0, r.raiseError)(ie.items[e.id], "25081850", "run", "::RendererManager", new Error("There was an error rendering the chart. Enable FusionCharts JS debugger for more information.")), t.ref = e.ref, (0, r.triggerEvent)("internal.DOMElementCreated", t, {});
    }function re(e) {
      var t,
          r,
          a,
          i = e.attributes;if (i) for (t = i.length - 1; 0 <= t; t -= 1) {
        "function" == typeof e[a = i[t].name] && (e[a] = null);
      }if (i = e.childNodes) for (r = i.length, t = 0; t < r; t += 1) {
        re(e.childNodes[t]);
      }
    }function ae(e, t, r) {
      var a = e.args,
          i = e.options;e._chartMessageImageStyle = { imageHAlign: a.typeNotSupportedMessageImageHAlign || i.baseChartMessageImageHAlign, imageVAlign: a.typeNotSupportedMessageImageVAlign || i.baseChartMessageImageVAlign, imageAlpha: a.typeNotSupportedMessageImageAlpha || i.baseChartMessageImageAlpha, imageScale: a.typeNotSupportedMessageImageScale || i.baseChartMessageImageScale }, e._chartMessageStyle = { color: a.typeNotSupportedMessageColor || i.baseChartMessageColor, fontFamily: a.typeNotSupportedMessageFont || i.baseChartMessageFont, fontSize: a.typeNotSupportedMessageFontSize || i.baseChartMessageFontSize }, (0, l.default)(ie, e, t, "base", r, i.typeNotSupportedMessage);
    }$.lastId = 0;
    var ie = function () {
      function ie() {
        var _ref, _ref2;

        _classCallCheck(this, ie);

        var a = {};this.__state = {}, this.id = "", 1 === arguments.length && "object" == _typeof(arguments.length <= 0 ? undefined : arguments[0]) && (a = arguments.length <= 0 ? undefined : arguments[0]), 1 < arguments.length && "object" == _typeof((_ref = arguments.length - 1, arguments.length <= _ref ? undefined : arguments[_ref])) && (0, e.extend2)(a, (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]), !1, !0), this.id = void 0 === a.id ? $() : a.id, this.args = a, ie.items[this.id] instanceof ie && (0, r.raiseWarning)(this, "06091847", "param", "", new Error("A FusionCharts object with the specified id \"" + this.id + "\" already exists." + ("Renaming it to " + (this.id = $())))), this._parsePolicies(m.default), this.attributes.id = this.id, this.resizeTo && this.resizeTo(a.width, a.height, !0), this.chartType && this.chartType(a.type || a.swfUrl, !0), "undefined" != typeof __webpack_public_path__ && (__webpack_public_path__ = ie.getScriptBaseURI()), (0, r.triggerEvent)("beforeInitialize", this, a), ie.items[this.id] = this, ie.defaultOptions = ie.options, (0, r.triggerEvent)("initialized", this, a), (0, r.triggerEvent)("resourceRequested", this, a);
      }

      _createClass(ie, [{
        key: "_parsePolicies",
        value: function _parsePolicies(e) {
          var t = void 0,
              r = void 0,
              a = void 0,
              i = this.args;for (t in e) {
            if (m.default[t] instanceof Array) r = i[e[t][0]], this[t] = void 0 === r ? e[t][1] : r;else for (a in "object" != _typeof(this[t]) && (this[t] = {}), e[t]) {
              r = i[e[t][a][0]], this[t][a] = void 0 === r ? e[t][a][1] : r;
            }
          }
        }
      }, {
        key: "hasRendered",
        value: function hasRendered() {
          return !(!this.jsVars.hcObj || !this.jsVars.hcObj.hasRendered);
        }
      }, {
        key: "setTransparent",
        value: function setTransparent(e) {
          var t;(t = this.jsVars) && ("boolean" != typeof e && null !== e && (e = !0), t.transparent = null !== e && !0 === e);
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(e, t) {
          return (0, r.addListener)(e, t, this);
        }
      }, {
        key: "on",
        value: function on(e, t) {
          return this.addEventListener(e, t);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(e, t) {
          return (0, r.removeListener)(e, t, this);
        }
      }, {
        key: "formatNumber",
        value: function formatNumber(t, r, a, i) {
          var n = void 0,
              s = void 0,
              o = void 0,
              d = void 0,
              l = void 0,
              c = void 0,
              h = this,
              p = h.apiInstance || {},
              g = p.numberFormatter;switch (o = Y(a), a = a && X(a) || {}, "" === o ? g ? l = g : (d = Y(s = (n = h.options.dataSource).chart || {}), W[d] ? l = W[d] : W[d] = l = new y.default(p, s)) : (s = (n = h.options.dataSource).chart || {}, d = Y(s = (0, e.extend2)((0, e.extend2)({}, s), a)), W[d] ? l = W[d] : W[d] = l = new y.default(p, s)), (r && r.toLowerCase ? r : "").toLowerCase()) {case "yaxisvalues":
              c = l.yAxis(t, i);break;case "xaxisvalues":
              c = l.xAxis(t);break;case "scale":
              c = l.scale(t);break;default:
              c = l.dataLabels(t, i);}return c;
        }
      }, {
        key: "clone",
        value: function clone(t, r) {
          var a = typeof t === "undefined" ? "undefined" : _typeof(t),
              i = {},
              n = (0, e.extend2)({}, this.args, !1, !0);return K(m.default, n, this), delete n.id, delete n.animate, delete n.stallLoad, i.link = n.link, (n = (0, e.extend2)({}, n, !1, !0)).link = i.link, "object" == a ? (0, e.extend2)(n, t, !1, !0) : "boolean" == a && (r = t), r ? n : new ie(n);
        }
      }, {
        key: "isActive",
        value: function isActive() {
          if (!this.ref || window.document.getElementById(this.id) !== this.ref) return !1;try {
            return R.test("FusionCharts");
          } catch (e) {
            return !1;
          }
        }
      }, {
        key: "chartType",
        value: function chartType(e, t) {
          var a = void 0,
              i = this,
              n = !0 === t,
              s = i.options;return "string" == typeof e && (t = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : {}, a = e.replace(/[\?\#][\s\S]*$/g, ""), s.chartType = a.replace(/^[\s\S]*\//gi, ""), s.chartTypeSourcePath = -1 === a.indexOf("/") ? t.chartTypeSourcePath || i.options.chartTypeSourcePath || ie.options.chartTypeSourcePath || "" : a.replace(/[^\/]*?$/gi, ""), (0, r.triggerEvent)("resourceRequested", i), void 0 !== t.dataSource && null !== t.dataSource ? i.setChartData(t.dataSource, t.dataFormat, t.dataConfiguration) : i.isActive() && !n && i.render()), (s.chartType || "").toLowerCase();
        }
      }, {
        key: "setChartDataUrl",
        value: function setChartDataUrl() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = arguments[1];
          var a = arguments[2];
          var n = arguments[3];
          var s = arguments[4];
          var o = void 0,
              d = void 0,
              l = (0, i.getDepsByType)("transcoder");return (null == t || "function" != typeof t.toString) && (t = this.options.dataFormat, (0, r.raiseWarning)(this, "03091609", "param", "FusionCharts#setChartDataUrl", "Invalid Data Format. Reverting to current data format - " + t)), o = V(t), j.test(o) || (o += "url"), d = l[o] && l[o](), this.jsVars.stallLoad = !0, d && d.toJSON ? void d.toJSON(e, a, n, s, this) : { error: new Error("Unable to fetch data.") };
        }
      }, {
        key: "setChartData",
        value: function setChartData() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : N;
          var a = arguments[2];
          var s = arguments[3];
          var o = arguments[4];
          var d = void 0,
              l = void 0,
              c = void 0,
              h = this,
              p = (0, i.getDepsByType)("transcoder"),
              g = V(t),
              u = p[g] && p[g](),
              f = h.options;return j.test(g) ? void h.setChartDataUrl(e, g, a, s, o) : (d = (l = u && u.toJSON ? u.toJSON(e, h) : { error: new Error("Unable to convert data.") }).data || l, f.error = l.error, f.dataSource = d, f.dataFormat = g, c = Q(e, d, g, o), void (0, r.triggerEvent)("beforeDataUpdate", h, c, void 0, n.onDataUpdateSuccess, n.onDataUpdateCancel));
        }
      }, {
        key: "getChartData",
        value: function getChartData() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : N;
          var t = arguments[1];
          var r = arguments[2];
          var a,
              n,
              s = this,
              o = (0, i.getDepsByType)("transcoder")[V(e)](),
              d = s.options,
              l = s.apiInstance,
              c = !r && (a = l && l.getCollatedData && l.getCollatedData()) ? a : d.dataSource;return !(n = o ? o.fromJSON ? o.fromJSON(c, s) : { error: new Error("Unable to convert data.") } : { error: new Error("Data format not recognized.") }).error && d.error && (n.error = d.error), t ? n : n.data;
        }
      }, {
        key: "dataReady",
        value: function dataReady(e) {
          return e ? this.__state.dataAvailable : this.__state.dataReady;
        }
      }, {
        key: "setChartAttribute",
        value: function setChartAttribute(e, t) {
          var a, i, n, s, o;if ("string" == typeof e) s = e, (e = {})[s] = t;else if (null === e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return;if (o = 0, n = (a = this.getChartData(N)) && (a.chart || a.graph || a.map)) {
            for (i in e) {
              o += 1, null !== e[i] ? n[i.toLowerCase()] = e[i] : delete n[i.toLowerCase()];
            }0 < o && (void 0 === n.animation && (n.animation = "0"), this.setChartData(a, N));
          } else (0, r.raiseError)(this, "2105141421", "run", "#setChartAttribute()", "Could not retrieve attribute list. Is data ready?");
        }
      }, {
        key: "getChartAttribute",
        value: function getChartAttribute(e) {
          var t,
              a,
              i = this.getChartData(N),
              n = i && (i.chart || i.graph || i.map);if (0 === arguments.length || void 0 === e || void 0 === n) return n;if ("string" == typeof e) t = n[e.toString().toLowerCase()];else if (e instanceof Array) for (t = {}, a = 0; a < e.length; a += 1) {
            t[e[a]] = n[e[a].toString().toLowerCase()];
          } else (0, r.raiseError)(this, "25081429", "param", "~getChartAttribute()", 'Unexpected value of "attribute"');return t;
        }
      }, {
        key: "render",
        value: function render(e, t, a) {
          return a ? "function" != typeof a && (a = void 0) : "function" == typeof t ? (a = t, t = void 0) : !t && "function" == typeof e && (a = e, e = void 0), void 0 === e && (e = this.options.containerElementId), "string" == typeof e && (e = document.getElementById(e)), null == e ? ((0, r.raiseError)(this, "03091456", "run", ".render()", new Error("Unable to find the container DOM element.")), this) : (B(e) ? O(this, e, t, a) : this.renderChart(e, t, a), this);
        }
      }, {
        key: "renderChart",
        value: function renderChart(t, a, i) {
          var n,
              s,
              o,
              d,
              l,
              c = this;if (!this.disposed) {
            if (((o = window[this.id]) && o.FusionCharts && o.FusionCharts === this || (o = this.ref) && o.FusionCharts && o.FusionCharts === this) && (this._dispose(), o === window[this.id] && (window[this.id] = void 0)), void 0 !== window[this.id] && (0, r.raiseError)(this, "25081843", "comp", ".render", new Error("#25081843:IECompatibility() Chart Id is same as a JavaScript variable name. Variable naming error. Please use unique name for chart JS variable, chart-id and container id.")), i ? "function" != typeof i && (i = void 0) : "function" == typeof a ? (i = a, a = void 0) : !a && "function" == typeof t && (i = t, t = void 0), a = (a || this.options.insertMode).toLowerCase() || e.domInsertModes.REPLACE, void 0 === t && (t = this.options.containerElementId), "string" == typeof t && (t = document.getElementById(t)), null == t) return (0, r.raiseError)(this, "03091456", "run", ".render()", new Error("Unable to find the container DOM element.")), this;if (ee(this.id, t)) return (0, r.raiseError)(this, "05102109", "run", ".render()", new Error("A duplicate object already exists with the specific Id: " + this.id)), this;if ((n = document.createElement(this.options.containerElementType || "span")).setAttribute("id", this.id), "append" !== a && "prepend" !== a) for (; t.hasChildNodes();) {
              t.removeChild(t.firstChild);
            }return "prepend" === a && t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n), this.options.containerElement = t, this.options.containerElementId = t.id, (l = n.style) && (l.position = "relative", l.textAlign = "left", l.lineHeight = "normal", l.display = "inline-block", l.zoom = "1", l["vertical-align"] = "middle", l.fontWeight = "normal", l.fontVariant = "normal", l.fontStyle = "normal", l.textDecoration = "none", l["*DISPLAY"] = "inline", l.padding = "0", l.margin = "0", l.border = "none", l.direction = "ltr", (e.isIE || e.isIE11) && e.hasSVG && (l["-ms-touch-action"] = "none")), this.options.containerClassName && (n.className = this.options.containerClassName), d = (0, e.normalizeCSSDimension)(this.width, this.height, n), this.__state.renderedWidth = d.pixelWidth, this.__state.renderedHeight = d.pixelHeight, this.__state.rendering = !0, (0, r.triggerEvent)("beforeRender", this, s = { container: t, width: this.width, height: this.height, renderer: this.options.renderer }, void 0, function (e, t) {
              !0 === this.disposed || c._render(n, function () {
                if (te.apply(undefined, arguments), i) try {
                  i.call(e.sender, t.container);
                } catch (e) {
                  setTimeout(function () {
                    throw e;
                  });
                }
              });
            }, function () {
              (0, r.triggerEvent)("renderCancelled", c, s);
            }), this;
          }
        }
      }, {
        key: "_render",
        value: function _render(e, t) {
          var a,
              n,
              s,
              o = this,
              d = o.chartType(),
              c = o.__state,
              h = o.options,
              p = o.args,
              g = o.options.showChartLoadingMessage,
              u = ie.getDep("vml", "dependency"),
              f = function f() {
            var r = ie.getDep(d, "dependency") || ie.getDep(d, "chartapi") || ie.getDep(d, "maps");r ? r.then ? r.then(function (e) {
              e.__esModule ? (ie.addDep(e.default), m(), v()) : v();
            }).catch(function () {
              ae(o, e, t);
            }) : (m(), v()) : ae(o, e, t);
          },
              m = function m() {
            var e = (0, i.getDep)(c.lastRenderedType, "chartapi") || (0, i.getDep)(c.lastRenderedType, "maps");if (e && c.lastRenderedType !== d && ((0, r.triggerEvent)("chartTypeChanged", o, { previousType: c.lastRenderedType, newType: d }), a = e)) for (s in a) {
              delete o[s];
            }c.lastRenderedType = d;
          },
              v = function v() {
            ie.getDep(d, "chartapi") ? (m(), (0, l.default)(ie, o, e, d, t)) : ie.getDep(d, "maps") ? ie.getDep("maps", "chartapi") ? (m(), (0, l.default)(ie, o, e, d, t)) : k ? require("_bundle_loader")(require.resolve("../maps")).then(function (r) {
              ie.addDep(r.default), m(), (0, l.default)(ie, o, e, d, t);
            }).catch(function () {
              ae(o, e, t), (0, r.raiseError)(ie, "12052314141", "run", "JavaScriptRenderer~Maps", new Error("FusionCharts' maps file is required to render the visualization."));
            }) : ae(o, e, t) : ae(o, e, t);
          },
              y = function y() {
            (0, l.default)(ie, o, e, "base", void 0, n);
          };e || (e = e || o.ref || o.jsVars.container || o.options && o.options.containerElement && o.options.containerElement.childNodes[0]), o.apiInstance && o.apiInstance.removeJob("resizeScheduled"), n = g ? h.PBarLoadingText || h.loadMessage : "", o._chartMessageImageStyle = { imageHAlign: p.loadMessageImageHAlign || h.baseChartMessageImageHAlign, imageVAlign: p.loadMessageImageVAlign || h.baseChartMessageImageVAlign, imageAlpha: p.loadMessageImageAlpha || h.baseChartMessageImageAlpha, imageScale: p.loadMessageImageScale || h.baseChartMessageImageScale }, o._chartMessageStyle = { color: p.loadMessageColor || h.baseChartMessageColor, fontFamily: p.loadMessageFont || h.baseChartMessageFont, fontSize: p.loadMessageFontSize || h.baseChartMessageFontSize }, u ? u.then ? u.then(function (e) {
            ie.addDep(e.default), y(), f();
          }).catch(function () {
            (0, r.raiseError)(ie, "162162788", "run", ">RendererError~VMLRendererLoad", "Unable to load FusionCharts VML renderer.");
          }) : (ie.addDep(u), y(), f()) : (y(), f());
        }
      }, {
        key: "resizeTo",
        value: function resizeTo(e, t, a) {
          var i = this,
              n = i.width,
              s = i.height,
              o = i.__state;return (i.apiInstance && i.apiInstance.config || {}).resize = !0, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (a = t, t = e.h, e = e.w), e = null == e ? n : e.toString().replace(z, ""), t = null == t ? s : t.toString().replace(z, ""), !0 === a ? (i.width = e, i.height = t) : (0, r.triggerEvent)("beforeresize", i, { currentWidth: n, currentHeight: s, newWidth: e, newHeight: t }, void 0, function () {
            i.width = e, i.height = t, i.scheduleResize({ width: e, height: t }), i.apiInstance.addJob("resized" + J++, function () {
              (0, r.triggerEvent)("resized", i, { id: i.id, width: i.width, height: i.height, prevWidth: n, prevHeight: s, pixelWidth: i.ref && i.ref.offsetWidth || 0, pixelHeight: i.ref && i.ref.offsetHeight || 0, originalWidth: o.renderedWidth, originalHeight: o.renderedHeight });
            }, p.priorityList.postRender);
          }, function () {
            (0, r.triggerEvent)("resizecancelled", i, { currentWidth: n, currentHeight: s, cancelledTargetWidth: e, cancelledTargetHeight: t });
          }), this;
        }
      }, {
        key: "update",
        value: function update(e) {
          var t = this,
              r = t.ref,
              a = t.jsVars,
              i = a && a.fcObj,
              n = a.container || i && i.options && i.options.containerElement && i.options.containerElement.childNodes[0];a.hcObj && a.hcObj.destroy && a.hcObj.destroy(), t.options.dataSource = e.data, t.apiInstance && t.apiInstance.removeJob("resizeScheduled"), void 0 === e.error ? (delete a.stallLoad, delete a.loadError, !t.__state.firstRenderNotified && t.jsVars.secondTimeRender && (t.__state.firstRenderNotified = !0), this.isActive() && (t.chartType() === t.__state.lastRenderedType ? (0, l.default)(ie, t, n) : t.render())) : (this.isActive() && "function" == typeof r.showChartMessage && r.showChartMessage("InvalidXMLText"), delete a.loadError);
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var e = this,
              t = {};(0, r.triggerEvent)("beforeDispose", e, t, void 0, function () {
            for (var a in e._dispose(), (0, r.triggerEvent)("disposed", e, t), (0, r.disposeEvents)(e), delete ie.items[e.id], e) {
              e.hasOwnProperty(a) && delete e[a];
            }e.disposed = !0;
          }, function () {
            (0, r.triggerEvent)("disposeCancelled", e, t);
          });
        }
      }, {
        key: "_dispose",
        value: function _dispose() {
          var e,
              t = this,
              r = t.jsVars;t.apiInstance && (t.apiInstance.removeJob("resizeScheduled"), t.apiInstance.remove({ instant: !0 }), delete t.apiInstance, delete r.instanceAPI), (e = t.ref) && (re(e), e.parentNode && e.parentNode.removeChild(e)), r.container = null;
        }
      }, {
        key: "_config",
        value: function _config(e, t) {
          var r,
              a,
              i = this.jsVars,
              n = i.msgStore,
              s = i.cfgStore,
              o = this.options;for (r in a = { LoadingText: "loadMessage", ChartNotSupported: "typeNotSupportedMessage", RenderChartErrorText: "renderErrorMessage", XMLLoadingText: "dataLoadStartMessage", ChartNoDataText: "dataEmptyMessage", LoadDataErrorText: "dataLoadErrorMessage", InvalidXMLText: "dataInvalidMessage" }, "string" == typeof e && 1 < arguments.length && (r = e, (e = {})[r] = t), e) {
            void 0 === n[r] ? s[r.toLowerCase()] = e[r] : n[r] = e[r], a[r] ? o[a[r]] = e[r] : o[r] = e[r];
          }
        }
      }, {
        key: "configure",
        value: function configure(e, t) {
          var r;e && ("string" == typeof e ? (r = {})[e] = t : r = e, this._config(r));
        }
      }, {
        key: "print",
        value: function print(t) {
          var a = this.apiInstance,
              i = (0, e.extend2)({}, t);return !a.config.isPrinting && a.config.hasRendered && void (0, r.triggerEvent)("BeforePrint", this, i, void 0, function () {
            var t,
                n,
                s,
                o,
                d = a.getFromEnv("chart-container"),
                l = [],
                c = d.parentNode,
                h = document.body || document.getElementsByTagName("body")[0],
                p = h.childNodes;if (a.config.isPrinting = !0, (0, e.fcEach)(p, function (e, t) {
              1 === e.nodeType && (l[t] = e.style.display, e.style.display = "NONE");
            }), !1 !== i.hideButtons) {
              for (o = 0, t = (n = a.getChildren("chartMenuBar").config.componentGroups[0].config.symbolList).length; o < t; o++) {
                if ((s = n[o]) instanceof a.getFromEnv("toolBoxAPI").SymbolWithContext) {
                  s = s.getListRefernce().getFirstContainer();break;
                }
              }s.config.container.style.display = "NONE";
            }h.appendChild(d), window.print(), setTimeout(function () {
              s.config.container.style.display = "visible", c.appendChild(d), (0, e.fcEach)(p, function (e, t) {
                1 === e.nodeType && (e.style.display = l[t]);
              }), !1 !== i.hideButtons && (s.config.container.style.display = "visible"), a.config.isPrinting = !1, (0, r.triggerEvent)("PrintComplete", a.getFromEnv("chartInstance"), i);
            }, 1e3);
          }, function () {
            (0, r.triggerEvent)("PrintCancelled", a.getFromEnv("chartInstance"), i);
          });
        }
      }, {
        key: "getSVGString",
        value: function getSVGString(e, t) {
          var r,
              a = this.apiInstance,
              i = a && a.getFromEnv("paper");return t && t.keepImages && (r = !0), "function" == typeof e ? void a.addJob("getSVG", function () {
            e(i && i.toSVG && i.toSVG(r));
          }, p.priorityList.postRender) : i && i.toSVG ? i.toSVG(r) : "<svg></svg>";
        }
      }, {
        key: "lockResize",
        value: function lockResize(e) {
          return "boolean" == typeof e ? this.jsVars.resizeLocked = e : !!this.jsVars.resizeLocked;
        }
      }, {
        key: "showChartMessage",
        value: function showChartMessage(e, t, r) {
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var i = this,
              n = i.apiInstance,
              s = function s() {
            i._showChartMessage(e, t, r, a);
          };return n && ("base" === n.getName() ? i.addEventListener("renderComplete", s) : s()), e;
        }
      }, {
        key: "_showChartMessage",
        value: function _showChartMessage(r, a, i) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var s = void 0,
              o = this,
              d = o.jsVars,
              l = o.apiInstance,
              c = o.options;return l._hideChartMessage(), void 0 === r ? void o.hideChartMessage() : (s = { fontFamily: (0, e.pluck)(n.font, c.baseChartMessageFont, "Verdana,sans"), fontSize: (0, e.pluck)(n.fontSize, c.baseChartMessageFontSize, 10), color: (0, e.pluck)(n.color && (0, t.convertColor)(n.color, n.alpha), c.baseChartMessageColor) }, d.msgStore[r] && (r = d.msgStore[r]), void l.addJob("showMsg", function () {
            a && l && l.config.hasRendered ? (l._show && l._show(), o.showMessage(r, s, i)) : (l._hide && l._hide(), l.setChartMessage(r, { _chartMessageStyle: s }), l.drawChartMessage());
          }, p.priorityList.postRender));
        }
      }, {
        key: "_resize",
        value: function _resize() {
          var e = this.jsVars,
              t = e.instanceAPI,
              r = e.container;t ? (t.config.elScroll = !1, t.getFromEnv("animationManager").setAnimationState("resize"), t.addToEnv("chartWidth", r.offsetWidth), t.addToEnv("chartHeight", r.offsetHeight), t.asyncDraw()) : (0, l.default)(ie, e.fcObj, r, e.type, void 0, void 0, !1, !0);
        }
      }, {
        key: "hideChartMessage",
        value: function hideChartMessage() {
          var e = this.apiInstance;e._hideChartMessage(), e._show && e._show();
        }
      }, {
        key: "showMessage",
        value: function showMessage() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var r = arguments[1];
          var a = arguments[2];
          var i,
              n,
              s,
              o = this.apiInstance,
              d = o.config,
              l = o.getFromEnv("paper"),
              c = o.getFromEnv("smartLabel"),
              h = o.getFromEnv("animationManager"),
              p = o.getGraphicalElement("messageText"),
              g = o.getGraphicalElement("messageVeil"),
              u = l.width,
              f = l.height;n = o.getChildContainer("messageGroup"), h.setAnimationState("showmessage"), (i = h.setAnimation({ el: n || "group", attr: { name: "messageGroup" }, component: o, label: "group" })).show().toFront(), n || o.addChildContainer("messageGroup", i), (g = h.setAnimation({ el: g || "rect", attr: { x: 0, y: 0, width: u, height: f, fill: "rgba(0,0,0,0.2)", stroke: "none" }, container: i, component: o, label: "rect" })).unclick(i.hide), g.show().toFront().attr("cursor", a ? e.POINTER : "default"), a && g.click(o._hideChartMessage, o), o.addGraphicalElement("messageVeil", g), c.setStyle(r), s = c.getSmartText(t, u - (d.marginRight || 0) - (d.marginLeft || 0), f - (d.marginTop || 0) - (d.marginBotton || 0)), (p = h.setAnimation({ el: p || "text", attr: { "font-size": r.fontSize, "font-family": r.fontFamily, fill: r.color, text: s.text, "line-height": 14, x: u / 2, y: f / 2 }, container: i, component: o, label: "text" })).attr("cursor", a ? e.POINTER : "default")[a ? "click" : "unclick"](o._hideChartMessage, o).show().toFront(), o.addGraphicalElement("messageText", p);
        }
      }, {
        key: "scheduleResize",
        value: function scheduleResize(t) {
          var r,
              a = this,
              i = a.ref,
              n = a.apiInstance;i && n.addJob("resizeScheduled", function () {
            r = (0, e.normalizeCSSDimension)(t.width, t.height, i), void 0 !== t.width && (i.style.width = r.width), "undefined" !== t.height && (i.style.height = r.height), a._resize();
          }, p.priorityList.instant);
        }
      }], [{
        key: "getObjectReference",
        value: function getObjectReference() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return ie.items[e] && ie.items[e].ref;
        }
      }, {
        key: "render",
        value: function render(e, t) {
          return e instanceof ie ? (e.render(t), e) : new ie(e).render(t);
        }
      }, {
        key: "addDep",
        value: function addDep(e) {
          return i.addDep.call(this, e);
        }
      }, {
        key: "getDep",
        value: function getDep(e, t) {
          return i.getDep.call(this, e, t);
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(e, t) {
          return (0, r.addListener)(e, t);
        }
      }, {
        key: "on",
        value: function on(e, t) {
          return ie.addEventListener(e, t);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(e, t) {
          return (0, r.removeListener)(e, t);
        }
      }, {
        key: "ready",
        value: function ready(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ie;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ie;
          var a = function a() {
            e.call(r, t);
          };"function" == typeof e && (P ? setTimeout(a, 0) : ie.addEventListener("ready", a));
        }
      }, {
        key: "formatNumber",
        value: function formatNumber(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var r = arguments[2];
          var a = void 0,
              i = void 0,
              n = Y(t = X(t));return W[n] ? a = W[n] : W[n] = a = new y.default(t, { useScaleRecursively: !0 }), a.configure(t), i = a.dataLabels(e, r);
        }
      }, {
        key: "transcodeData",
        value: function transcodeData(e, t, a, n) {
          var s = void 0,
              o = void 0,
              d = void 0,
              l = void 0,
              c = (0, i.getDepsByType)("transcoder"),
              h = V(a),
              p = V(t);return p && "function" == typeof p.toString && h && "function" == typeof h.toString && void 0 !== c[h] && void 0 !== c[p] ? (d = c[p](), l = c[h](), d.toJSON && (s = d.toJSON(e, this), o = l.fromJSON(s.data, this)), s.error instanceof Error || (o.error = s.error), n ? o : o.data) : void (0, r.raiseError)(this, "14090217", "param", ".transcodeData()", "Unrecognized data-format specified during transcoding.");
        }
      }, {
        key: "setAnimation",
        value: function setAnimation(e) {
          ie.options._globalAnimationRule || (ie.options._globalAnimationRule = []), ie.options._globalAnimationRule.push(e);
        }
      }, {
        key: "setEasingEffect",
        value: function setEasingEffect(e, t) {
          ie.getDep("redraphael", "plugin").easing_formulas[e] = t;
        }
      }, {
        key: "getScriptBaseURI",
        value: function getScriptBaseURI() {
          return ie.options.scriptBaseUri;
        }
      }, {
        key: "setScriptBaseURI",
        value: function setScriptBaseURI(e) {
          ie.options.scriptBaseUri = e, "undefined" != typeof __webpack_public_path__ && (__webpack_public_path__ = e);
        }
      }, {
        key: "getChartFromId",
        value: function getChartFromId(e) {
          return ie.items[e];
        }
      }]);

      return ie;
    }();

    ie.id = "FusionCharts", ie.options = { html5ScriptNameSuffix: ".js", html5ScriptNamePrefix: "fusioncharts.", scriptBaseUri: function () {
        var e = Z(x);return void 0 === e ? ((0, r.raiseError)(ie, "1603111624", "run", ">GenericRuntime~scriptBaseUri", "Unable to locate FusionCharts script source location (URL)."), "") : e;
      }(), creditLabel: "undefined" == typeof FC_LICENSED ? void 0 : !FC_LICENSED }, "undefined" != typeof __webpack_public_path__ && (__webpack_public_path__ = ie.getScriptBaseURI()), ie.version = a.version.split(/[\.\-]/g), ie.items = {}, (0, r.setRootSender)(ie), P = !0, setTimeout(function () {
      var e = P;P = !0, U = !0, (0, r.triggerEvent)("ready", ie, { version: ie.version, now: !e }), H = !e;
    }, 1), ie.addEventListener("dependencyAdded", function (e, t) {
      if ("maps" === t.type) {
        var _e10 = {};_e10[t.name] = ["fusioncharts.maps.js"], ie.getDep("dependency") || ie.addDep({ name: "dependency", extension: _e10 });
      }
    }), ie.addEventListener("beforeInitialize", function (e) {
      var t,
          r,
          a = e.sender,
          i = a.options.events;if (i) for (t in i) {
        "function" == typeof i[t] && a.addEventListener(t, i[t]);
      }for (r in a.options.renderer = "javascript", o.default) {
        a.addEventListener(r, o.default[r]);
      }
    }), ie.addEventListener("beforeInitialize", function (e) {
      var t = e.sender,
          a = t.options,
          i = t.args.dataSource,
          s = t.args.dataFormat;if (delete n.dataStore[t.id], n.cache[t.id] = {}, null != i) {
        if (t.__state.dataSetDuringConstruction = !0, "string" != typeof s) switch (typeof i === "undefined" ? "undefined" : _typeof(i)) {case "function":
            i = a.dataSource = i.call(t, a.dataConfiguration), t.args.dataFormat = "JSON";break;case "string":
            t.args.dataFormat = /^\s*?\{[\s\S]*\}\s*?$/g.test(s) ? "JSON" : "XML";break;case "object":
            t.args.dataFormat = "JSON";}s && s.toString && (t.__state.dataFetchDuringConstruction = j.test(s.toString())), t.setChartData(i, s, void 0, void 0, !0);
      } else t.__state.dataSetDuringConstruction = !1, (0, r.raiseWarning)(t, "1810131922A", "param", ":dataHandler~event:beforeInitialize", "Data source was not defined during construction, hence set to blank renderer default - json"), t.setChartData("", N, void 0, void 0, !0), t.__state.dataAvailable = !1;
    }), ie.addEventListener("dataUpdated", function (e, t) {
      var r = e.sender,
          a = r.__state;a.rendering && (a.dataFetchDuringConstruction || a.updatePending) && (delete a.dataFetchDuringConstruction, delete a.updatePending, r.update(t));
    }), ie.addEventListener(["rendered", "dataloaderror", "nodatatodisplay", "rendercancelled"], function (e, t) {
      var a = e.sender;a instanceof ie && a.__state && a.__state.rendering && ((0, r.triggerEvent)("internal.rendered", a, t), delete a.__state.rendering);
    }), P && !U && (U = !0, (0, r.triggerEvent)("ready", ie, { version: ie.version, now: H })), ie.addEventListener("initialized", G), ie.addDep(u.default), ie.addDep(_.default), ie.addDep(A.default), ie.addDep(S.default), ie.addDep(w.default), ie.addDep(I.default), ie.addDep(L.default), exports.default = ie;
  }, { "../_internal/lib/lib": 20, "../_internal/lib/lib-graphics": 21, "../_internal/misc/event-api": 22, "../../../package.json": 15, "../_internal/dependency-manager": 17, "../_internal/misc/updater": 23, "../_internal/misc/renderer-events": 24, "../_internal/misc/create-chart": 25, "../_internal/vendors/fusioncharts-smartlabel/src/SmartlabelManager": 43, "../_internal/schedular": 18, "../_internal/misc/file-store": 26, "../_internal/misc/global-policies": 27, "../_internal/components/numberformatter": 28, "../_internal/redraphael/redraphael": 29, "../_internal/redraphael/redraphael.svg": 30, "../_internal/transcoder/json-transcoder": 31, "../_internal/redraphael/redraphael.ext": 32, "../viz/basechart": 19, "../_internal/misc/tooltip-adapter": 33, "_bundle_loader": 53, "../maps": [["maps.257c8243.js", 56], "maps.257c8243.map", 56] }], 147: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { "initial.canvas.canvas": function initialCanvasCanvas() {
        return { "rect.appearing": function rectAppearing() {
            return [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "initial" }];
          }, "*": null };
      }, "update.canvas.canvas": { "rect.updating": [{ slot: "middle" }] } };
  }, {}], 126: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var a = require("../../core/component-interface"),
        e = s(a),
        n = require("../lib/lib"),
        t = require("../lib/lib-graphics"),
        i = require("../dependency-manager"),
        r = require("../animation-rules/canvas-animation"),
        o = s(r);function s(a) {
      return a && a.__esModule ? a : { default: a };
    }var d = Math.max,
        l = 2,
        c = n.preDefStr.miterStr,
        h = n.preDefStr.noneStr,
        p = n.preDefStr.ROUND,
        g = "clip-sum-value",
        u = "clip-canvas-init",
        C = "clip-canvas",
        v = function v(a, e, n) {
      return n.getFromEnv("animationManager").setAnimation({ el: "group", attr: { name: a }, container: e, component: n, label: "group" });
    };(0, i.addDep)({ name: "canvasAnimation", type: "animationRule", extension: o.default });
    var m = function (_e$default) {
      _inherits(m, _e$default);

      function m() {
        _classCallCheck(this, m);

        var _this5 = _possibleConstructorReturn(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this));

        var a = _this5;a.config = {}, a.config.axes = a.config.axes || [], a.setLinkedItem("axes", []), a.setLinkedItem("primaryAxis", {}), a.addToEnv("canvasConfig", _this5.config);return _this5;
      }

      _createClass(m, [{
        key: "getName",
        value: function getName() {
          return "canvas";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "canvas";
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          var a = this,
              e = a.getFromEnv("chart"),
              t = e.getChildContainer(),
              i = e.getContainer("parentgroup"),
              r = a.getEffectiveDimensions(),
              o = a.getFromEnv("chart-attrib"),
              s = (0, n.pluckNumber)(o.areaovercolumns, 1),
              d = a.getChildContainer("axisReferenceVisualsFloor"),
              l = a.getChildContainer("axisReferenceVisualsBottom"),
              c = a.getChildContainer("axisReferenceVisualsMiddle"),
              h = a.getChildContainer("axisReferenceVisualsTop"),
              p = a.getChildContainer("axisReferenceVisualsCeil"),
              g = a.getChildContainer("areaGroup"),
              u = a.getChildContainer("areaShadowGroup"),
              C = a.getChildContainer("columnGroup"),
              m = a.getChildContainer("columnShadowGroup"),
              f = t.plotGroup,
              x = [r.left, r.top, r.width, r.height].toString();a.getContainer("canvasGroup") || a.addContainer("canvasGroup", v("canvas", i, a)).insertAfter(t.backgroundGroup), l || (l = a.addChildContainer("axisReferenceVisualsBottom", v("axisReferenceVisualsBottom", i, a)).insertAfter(t.axisBottomGroup)), d || (d = a.addChildContainer("axisReferenceVisualsFloor", v("axisReferenceVisualsFloor", i, a)).insertAfter(t.axisBottomGroup)), d.attr({ "clip-rect": x }), a.getChildContainer("crossline") || a.addChildContainer("crossline", v("crossline", i, a)).insertBefore(t.plotGroup), a.getChildContainer("crosslineBottom") || a.addChildContainer("crosslineBottom", v("crosslineBottom", i, a)).insertBefore(t.plotGroup), a.getChildContainer("crosslineTop") || a.addChildContainer("crosslineTop", v("crosslineTop", i, a)).insertBefore(t.abovePlotGroup), a.getChildContainer("datalabelsGroup") || a.addChildContainer("datalabelsGroup", v("canvasdatalabel", e.getChildContainer("datalabelsGroup"), a)), c || (c = a.addChildContainer("axisReferenceVisualsMiddle", v("axisReferenceVisualsMiddle", i, a)).insertBefore(t.plotGroup)), c.attr({ "clip-rect": x }), h || (h = a.addChildContainer("axisReferenceVisualsTop", v("axisReferenceVisualsTop", i, a)).insertBefore(t.datalabelsGroup)), a.getChildContainer("quadrantGroup") || a.addChildContainer("quadrantGroup", v("quadrant", i, a)).insertAfter(c), p || a.addChildContainer("axisReferenceVisualsCeil", v("axisReferenceVisualsCeil", i, a)).insertBefore(t.datalabelsGroup), a.getChildContainer("sumLabelsLayer") || a.addChildContainer("sumLabelsLayer", t.sumLabelsLayer), m || (m = a.addChildContainer("columnShadowGroup", v("column-shadow-group", f, a))), C || (C = a.addChildContainer("columnGroup", v("column", f, a))), u || (u = a.addChildContainer("areaShadowGroup", v("area-shadow-group", f, a))), g || (g = a.addChildContainer("areaGroup", v("area", f, a))), s ? (m.insertBefore(u), C.insertBefore(u)) : (u.insertBefore(m), g.insertBefore(m)), a.getChildContainer("lineShadowGroup") || a.addChildContainer("lineShadowGroup", v("line-shadow-group", f, a)), a.getChildContainer("lineGroup") || a.addChildContainer("lineGroup", v("line", f, a)), a.getChildContainer("defaultShadowGroup") || a.addChildContainer("defaultShadowGroup", v("default-shadow-group", f, a)), a.getChildContainer("defaultGroup") || a.addChildContainer("defaultGroup", v("default", f, a));
        }
      }, {
        key: "isWithinCanvas",
        value: function isWithinCanvas(a, e) {
          var n = this.config,
              t = n.canvasLeft,
              i = t + n.canvasWidth,
              r = n.canvasTop,
              o = r + n.canvasHeight;return a >= t && a <= i && e >= r && e <= o;
        }
      }, {
        key: "setCanvasPadding",
        value: function setCanvasPadding() {
          var a,
              e = this.config;a = this.getCanvasPadding(), e.canvasPaddingLeft = d(e.canvasPaddingLeft, a.paddingLeft || 0), e.canvasPaddingRight = d(e.canvasPaddingRight, a.paddingRight || 0), e.canvasPaddingTop = d(e.canvasPaddingTop, a.paddingTop || 0), e.canvasPaddingBottom = d(e.canvasPaddingBottom, a.paddingBottom || 0);
        }
      }, {
        key: "getEffectiveDimensions",
        value: function getEffectiveDimensions() {
          var a = this.config;return { left: a.canvasLeft, top: a.canvasTop, width: a.canvasWidth, height: a.canvasHeight, paddingLeft: a.canvasPaddingLeft, paddingTop: a.canvasPaddingTop, paddingRight: a.canvasPaddingRight, paddingBottom: a.canvasPaddingBottom };
        }
      }, {
        key: "setDimension",
        value: function setDimension(a) {
          var e = this.config;e.canvasTop = a.top, e.canvasLeft = a.left, e.canvasWidth = a.width, e.canvasHeight = a.height;
        }
      }, {
        key: "getCanvasPadding",
        value: function getCanvasPadding() {
          var a,
              e,
              n,
              t,
              i = this,
              r = i.getFromEnv("chartConfig").canvasWidth,
              o = i.config.maxPaddingPercent * r / 100,
              s = { paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 };return i._mapChildren(function (n) {
            for (e in a = n.getCanvasPadding && n.getCanvasPadding() || {}) {
              a.hasOwnProperty(e) && (s[e] = d(a[e], s[e]));
            }
          }), n = s.paddingLeft || 0, t = s.paddingRight || 0, o < n && (s.paddingLeft = o), o < t && (s.paddingRight = o), s;
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e,
              i,
              r,
              o,
              s,
              l = this,
              c = l.getLinkedParent(),
              h = l.getFromEnv("chartConfig"),
              p = l.config,
              g = l.getFromEnv("chart-attrib"),
              u = l.getFromEnv("color-manager"),
              C = h.is3D,
              v = C ? n.chartPaletteStr.chart3D : n.chartPaletteStr.chart2D,
              m = p.isRoundEdges = (0, n.pluckNumber)(g.useroundedges, 0),
              f = (0, n.pluckNumber)(g.showxaxisline, g.showyaxisline, g.showaxislines, 0) ? 0 : 1;p.canvasBorderRadius = (0, n.pluckNumber)(g.plotborderradius, m ? 2 : 0), r = p.showCanvasBorder = !!(0, n.pluckNumber)(g.showcanvasborder, f, e, m ? 0 : 1), s = p.oriCanvasBorderThickness = d((0, n.pluckNumber)(g.canvasborderthickness, m ? 0 : (0, n.pluckNumber)(c.canvasborderthickness, 2), 0)), e = p.canvasBorderWidth = C ? 0 : r ? s : 0, p.canvasBorderColor = (0, t.convertColor)((0, n.pluck)(g.canvasbordercolor, u.getColor(n.canvasBorderColorStr)), (0, n.pluck)(g.canvasborderalpha, u.getColor("canvasBorderAlpha"))), i = p.canBGAlpha = (0, n.pluck)(g.canvasbgalpha, u.getColor(n.canvasBGAlphaStr)), p.canBGColor = { FCcolor: { color: (0, n.pluck)(g.canvasbgcolor, u.getColor(v.canvasBgColor)), alpha: (0, n.pluck)(g.canvasbgalpha, 100), angle: (0, n.pluck)(g.canvasbgangle, 0), ratio: (0, n.pluck)(g.canvasbgratio) } }, o = p.shadow = (0, n.pluckNumber)(g.showshadow, m, 0) && m ? { enabled: !0, opacity: i / 100 } : 0, p.shadowOnCanvasFill = o && o.enabled, p.canvasPadding = (0, n.pluckNumber)(g.canvaspadding, 0), p.origCanvasTopPad = (0, n.pluckNumber)(g.canvastoppadding, 0), p.origCanvasBottomPad = (0, n.pluckNumber)(g.canvasbottompadding, 0), p.origCanvasLeftPad = (0, n.pluckNumber)(g.canvasleftpadding, 0), p.origCanvasRightPad = (0, n.pluckNumber)(g.canvasrightpadding, 0), Object.assign(p, a), l.config.inputComponents = [], l.config.maxPaddingPercent = 12.5, l._mapChildren(function (a) {
            a.getState("removed") || a.getType && "dataset" === a.getType() || "axisRefVisuals" === a.getType() || a.configure && a.configure();
          });
        }
      }, {
        key: "disposeAllInputs",
        value: function disposeAllInputs() {
          this.config.inputComponents.forEach(function (a) {
            a.dispose();
          }), this.config.inputComponents.length = 0;
        }
      }, {
        key: "axisExists",
        value: function axisExists(a) {
          var e = void 0,
              n = void 0,
              t = this.getLinkedItem("axes"),
              i = !1;for (e = 0, n = t.length; e < n; e++) {
            if (t[e].axis === a) {
              i = !0;break;
            }
          }return i;
        }
      }, {
        key: "attachAxis",
        value: function attachAxis(a, e, n) {
          var t = this.getLinkedItem("axes"),
              i = e ? "yAxis" : "xAxis",
              r = this.getFromEnv(i) || [];return this.axisExists(a) || (t.push({ axis: a, isY: e, config: n || {} }), r.push(a), this.addToEnv(i, r)), this;
        }
      }, {
        key: "setPrimaryAxis",
        value: function setPrimaryAxis(a, e) {
          this.getLinkedItem("primaryAxis")[a] = this.getLinkedItem("axes").find(function (a) {
            return a.axis === e;
          });
        }
      }, {
        key: "getAxes",
        value: function getAxes() {
          var a;return Object.keys(a = this.getLinkedItem("primaryAxis")).length ? [a.xAxis, a.yAxis] : this.getLinkedItem("axes").slice(0);
        }
      }, {
        key: "detachAxis",
        value: function detachAxis(a, e) {
          var n = this.getLinkedItem("axes"),
              t = 1 / 0;return e ? n.splice(e, 1) : (n.forEach(function (e, n) {
            e.axis === a && (t = n);
          }), n.splice(t, 1));
        }
      }, {
        key: "preDraw",
        value: function preDraw() {
          this._mapChildren(function (a) {
            !a.getState("removed") && a.preDraw && a.preDraw();
          });
        }
      }, {
        key: "draw",
        value: function draw() {
          this.createGroup(), this.getFromEnv("chart").config.skipCanvasDrawing || this.drawCanvas();
        }
      }, {
        key: "drawCanvas",
        value: function drawCanvas() {
          var a = void 0,
              e = void 0,
              t = void 0,
              i = void 0,
              r = void 0,
              o = void 0,
              s = void 0,
              v = this,
              m = v.getFromEnv("chart"),
              f = m.isBar,
              x = m.getFromEnv("dataSource").chart,
              b = v.getFromEnv("animationManager"),
              k = m.config,
              G = v.config,
              w = G.clip = {},
              B = m.getChildContainer("plotGroup"),
              L = m.getChildContainer("datalabelsGroup"),
              P = v.getGraphicalElement("canvasBorderElement"),
              R = v.getChildContainer("crosslineTop"),
              E = v.getGraphicalElement("canvasElement"),
              A = G.canvasLeft || (G.canvasLeft = k.canvasLeft),
              T = G.canvasTop || (G.canvasTop = k.canvasTop),
              y = G.canvasWidth || (G.canvasWidth = k.canvasWidth),
              S = G.canvasHeight || (G.canvasHeight = k.canvasHeight),
              D = G.xDepth = k.xDepth || 0,
              F = G.yDepth = k.yDepth || 0,
              N = v.getContainer("canvasGroup"),
              V = v.getChildContainer("quadrantGroup"),
              I = G.canvasBorderRadius,
              W = G.canvasBorderWidth,
              q = .5 * W,
              M = G.canvasBorderColor,
              O = G.canBGColor,
              _ = G.canBGAlpha,
              H = G.shadow,
              j = G.showCanvasBG = !!(0, n.pluckNumber)(x.showcanvasbg, 1),
              U = G.shadowOnCanvasFill,
              Y = G.showCanvasBorder;i = O, r = { x: A - q, y: T - q, width: y + W, height: S + W, r: I, "stroke-width": W, stroke: M, "stroke-linejoin": W > l ? p : c }, Y ? (P && P.show(), e = b.setAnimation({ el: P || "rect", component: v, attr: { x: A - q, y: T - q, width: y + W, height: S + W, r: I, "stroke-width": W, stroke: M, "stroke-linejoin": W > l ? p : c }, label: "rect", container: N }).shadow(H), !P && v.addGraphicalElement("canvasBorderElement", e)) : P && (v.removeGraphicalElement(P), b.setAnimation({ el: P, component: v, callback: function callback() {
              P.hide();
            } })), o = Y ? 0 : G.oriCanvasBorderThickness, w[C] = [d(0, A - D - o), d(0, T - F - o), d(1, y + 2 * D + 2 * o), d(1, S + F + 2 * o)], w[g] = [d(0, A - D), f ? T : 0, d(1, f ? k.width - A : y + 2 * D), d(1, f ? S + F : T + S)], w[u] = [d(0, A - D), d(0, T - F), 1, d(1, S + 2 * F)], (s = function s(a, e) {
            b.setAnimation({ el: a, attr: { "clip-rect": e }, label: "container", component: v, state: a.attrs["clip-rect"] ? "updating" : "appearing" });
          })(R, a = w[C].slice(0)), k.skipClipping || (s(B, a), s(L, a), s(V, a), s(v.getChildContainer("sumLabelsLayer"), w[g])), j ? (r = { x: A, y: T, width: y, height: S, r: I, "stroke-width": 0, stroke: h, fill: (0, n.toRaphaelColor)(i) }, E && E.show(), t = b.setAnimation({ el: E || "rect", attr: r, label: "rect", container: N, component: v }), !E && v.addGraphicalElement("canvasElement", t), U ? t.shadow({ opacity: _ / 100 }) : t.shadow(!1)) : E && b.setAnimation({ el: E, component: v, callback: function callback() {
              E.hide();
            } });
        }
      }]);

      return m;
    }(e.default);

    exports.default = m;
  }, { "../../core/component-interface": 62, "../lib/lib": 20, "../lib/lib-graphics": 21, "../dependency-manager": 17, "../animation-rules/canvas-animation": 147 }], 119: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var n = void 0;(0, r.componentFactory)(e, t.default, "canvas", e.config.showVolumeChart ? 2 : 1);for (var _t9 = 0, _r8 = (n = e.getChildren("canvas")).length; _t9 < _r8; _t9++) {
        n[_t9].configure();
      }
    };var e = require("../canvases/canvas"),
        t = n(e),
        r = require("../lib/lib");function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }, { "../canvases/canvas": 126, "../lib/lib": 20 }], 178: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { "initial.caption.caption": function initialCaptionCaption() {
        return { "text.appearing": function textAppearing() {
            return [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "initial" }];
          } };
      } };
  }, {}], 138: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        e = require("../lib/lib-graphics"),
        i = require("../../core/component-interface"),
        n = r(i),
        a = require("../dependency-manager"),
        o = require("../animation-rules/caption-animation"),
        l = r(o);function r(t) {
      return t && t.__esModule ? t : { default: t };
    }var c = Math.max,
        s = Math.min,
        p = Math.ceil,
        g = "px",
        h = "right",
        u = "left",
        m = "center",
        d = "top",
        f = "bottom",
        v = "middle",
        x = "start",
        b = "end";(0, a.addDep)({ name: "captionAnimation", type: "animationRule", extension: l.default });
    var C = function (_n$default2) {
      _inherits(C, _n$default2);

      function C() {
        _classCallCheck(this, C);

        return _possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).apply(this, arguments));
      }

      _createClass(C, [{
        key: "getType",
        value: function getType() {
          return "caption";
        }
      }, {
        key: "getName",
        value: function getName() {
          return "caption";
        }
      }, {
        key: "configure",
        value: function configure() {
          var i = this.getFromEnv("chart"),
              n = i.getFromEnv("chart-attrib"),
              a = this.config || {},
              o = i.getFromEnv("style"),
              l = o.outCanfontFamily,
              r = o.outCancolor,
              c = o.fontSize,
              s = ["top", "center"];switch (this.config.text = (0, t.parseUnsafeString)(n.caption), a.style = { fontFamily: (0, t.pluck)(n.captionfont, l), color: (0, e.convertColor)((0, t.pluck)(n.captionfontcolor, r).replace(/^#? ([a-f0-9]+)/gi, "#$1")), fontSize: (0, t.pluckNumber)(n.captionfontsize, c + 3) + g, fontWeight: 0 === (0, t.pluckNumber)(n.captionfontbold) ? t.NORMAL : t.BOLD }, a.align || (a.align = ""), a.align = (0, t.pluck)(n.captionposition, n.captionalignment, m), a.align && ((s = a.align.split("-"))[0] && (s[0] = s[0].toLowerCase()), s[1] && (s[1] = s[1].toLowerCase()), 2 > s.length && (s[1] = s[0])), s[0]) {case d:
              a.isOnTop = 1;break;case f:
              a.isOnTop = 0;break;default:
              a.isOnTop = (0, t.pluckNumber)(n.captionontop, 1);}switch (s[1]) {case h:
              a.align = b;break;case u:
              a.align = x;break;default:
              a.align = v;}a.isOnLeft = !(0, t.pluckNumber)(n.captiononright, 0), a.captionPosition = (0, t.getValidValue)(n.captionposition, d).toLowerCase(), a.alignWithCanvas = (0, t.pluckNumber)(n.aligncaptionwithcanvas, i.config.alignCaptionWithCanvas, 1), a.horizontalPadding = (0, t.pluckNumber)(n.captionhorizontalpadding, a.alignWithCanvas ? 0 : 15), a.drawCaption = !0, (0, t.setLineHeight)(a.style);
        }
      }, {
        key: "allocatePosition",
        value: function allocatePosition() {
          this.getFromEnv("chart")._manageCaptionPosition();
        }
      }, {
        key: "draw",
        value: function draw() {
          var e,
              i = this,
              n = this.getFromEnv("chart"),
              a = n.config,
              o = n.getFromEnv("animationManager"),
              l = n.config.textDirection,
              r = n.getChildContainer().captionGroup,
              c = n.getFromEnv("smartLabel"),
              s = i.getGraphicalElement("captionElement"),
              p = i.getFromEnv("toolTipController"),
              g = i.config,
              h = g.style,
              u = g.text,
              m = g.x,
              f = g.align;u ? (e = { text: g.text, fill: h.color, x: m, y: g.y, "text-anchor": f || v, "vertical-align": g.verticalAlign || d, visibility: g.drawCaption ? t.visibleStr : t.hiddenStr, direction: l }, (s = i.addGraphicalElement("captionElement", o.setAnimation({ el: s || "text", attr: e, container: r, state: void 0, component: i, label: "text" }))).css(h), a.showtooltip ? p.enableToolTip(s, g.originalText) : p.disableToolTip(s), c && (c.useEllipsesOnOverflow(a.useEllipsesWhenOverflow), c.setStyle(h))) : s && o.setAnimation({ el: s, component: i, callback: function callback() {
              this.hide();
            }, doNotRemove: !0 }), a.savedCaption = s;
        }
      }, {
        key: "manageSpace",
        value: function manageSpace(e, i) {
          var n,
              a,
              o,
              l,
              r,
              g = this.getFromEnv("chart"),
              h = g.config,
              u = g.getChildren("caption")[0],
              m = g.getChildren("subCaption")[0],
              d = u.config,
              f = m.config,
              v = g.getFromEnv("dataSource").chart,
              x = g.getFromEnv("smartLabel"),
              b = e,
              C = (0, t.parseUnsafeString)(v.caption),
              w = (0, t.parseUnsafeString)(v.subcaption),
              y = (0, t.pluckNumber)(v.captionpadding, 10),
              T = y,
              E = !1,
              k = 0,
              N = 0,
              S = 0,
              F = 0,
              O = 0,
              L = g.getChildren("canvas"),
              A = c(L && L[0].config.canvasBorderThickness, 0),
              M = 0,
              G = 0;return 3 < b ? (y < A && (y = A + 2), C !== t.BLANKSTRING && (o = d.style, F = p((0, t.pluckNumber)(parseFloat(o.fontHeight, 10), parseFloat(o.lineHeight, 10), 12))), w !== t.BLANKSTRING && (r = f.style, O = (0, t.pluckNumber)(parseInt(r.fontHeight, 10), parseInt(r.lineHeight, 10), 12)), (0 < F || 0 < O) && ((k = F + O + y) > (b = c(b, 0)) ? (E = !0, (N = b - k) < y ? y = c(N, 5) : (N -= y, y = 0, O > N ? (S = O - N + 10, O = 0, f._originalText = f.text, f.text = t.BLANKSTRING) : (N -= O, O = 0, F > N && (S = F - N)))) : S = b - k, x.useEllipsesOnOverflow(h.useEllipsesWhenOverflow), 0 < F && (x.setStyle(o), S = (F += S) - (n = x.getSmartText(C, i, F)).height, d.height = F = n.height, d.text = n.text, d.originalText = !!n.tooltext && n.tooltext, M = n.width), 0 < O && (x.setStyle(r), S = (O += S) - (a = x.getSmartText(w, i, O)).height, O = a.height, f.text = a.text, f.height = a.height, f.originalText = !!a.tooltext && a.tooltext, G = a.width), E && 0 < S && (y += s(T - y, S)), d.captionPadding = y, d.height = F, d.width = M, f.width = G, f.height = O, k = F + O + y), k > h.canvasHeight ? (k = 0, d.drawCaption = !1) : d.drawCaption = !0, l = d.isOnTop ? { top: k } : { bottom: k, top: 5 }) : (l = { bottom: 0, top: 0 }, d.drawCaption = !1), l;
        }
      }, {
        key: "setDimention",
        value: function setDimention(t) {
          var e = this.config;e.x = t.x, e.y = t.y;
        }
      }]);

      return C;
    }(n.default);

    exports.default = C;
  }, { "../lib/lib": 20, "../lib/lib-graphics": 21, "../../core/component-interface": 62, "../dependency-manager": 17, "../animation-rules/caption-animation": 178 }], 168: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("./caption-animation"),
        e = i(t);function i(t) {
      return t && t.__esModule ? t : { default: t };
    }exports.default = { "initial.caption.subCaption": e.default["initial.caption.caption"] };
  }, { "./caption-animation": 178 }], 139: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        e = require("../lib/lib-graphics"),
        i = require("./caption"),
        n = r(i),
        o = require("../dependency-manager"),
        a = require("../animation-rules/subcaption-animation"),
        l = r(a);function r(t) {
      return t && t.__esModule ? t : { default: t };
    }var c = Math.max,
        p = "px",
        s = "center",
        u = "top",
        g = "bottom",
        b = "middle";(0, o.addDep)({ name: "subcaptionAnimation", type: "animationRule", extension: l.default });
    var m = function (_n$default3) {
      _inherits(m, _n$default3);

      function m() {
        _classCallCheck(this, m);

        return _possibleConstructorReturn(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
      }

      _createClass(m, [{
        key: "getType",
        value: function getType() {
          return "caption";
        }
      }, {
        key: "getName",
        value: function getName() {
          return "subCaption";
        }
      }, {
        key: "configure",
        value: function configure() {
          var i = this.getFromEnv("chart"),
              n = i.getFromEnv("chart-attrib"),
              o = this.config || {},
              a = i.getFromEnv("style"),
              l = i.getChildren("caption")[0],
              r = a.outCanfontFamily,
              b = a.outCancolor,
              m = a.fontSize,
              d = ["top", "center"];switch (o.text = (0, t.parseUnsafeString)(n.subcaption), o.align || (o.align = ""), o.align = (0, t.pluck)(n.captionposition, n.captionalignment, s), l.config.align && ((d = l.config.align.split("-"))[0] && (d[0] = d[0].toLowerCase()), d[1] && (d[1] = d[1].toLowerCase()), 2 > d.length && (d[1] = d[0])), d[0]) {case u:
              o.isOnTop = 1;break;case g:
              o.isOnTop = 0;break;default:
              o.isOnTop = (0, t.pluckNumber)(n.captionontop, 1);}o.alignWithCanvas = (0, t.pluckNumber)(i.aligncaptionwithcanvas, n.aligncaptionwithcanvas, 1), o.horizontalPadding = (0, t.pluckNumber)(n.captionhorizontalpadding, l.config.alignWithCanvas ? 0 : 15), o.style = { fontFamily: (0, t.pluck)(n.subcaptionfont, n.captionfont, r), color: (0, e.convertColor)((0, t.pluck)(n.subcaptionfontcolor, n.captionfontcolor, b).replace(/^#? ([a-f0-9]+)/gi, "#$1")), fontSize: (0, t.pluckNumber)(n.subcaptionfontsize, (0, t.pluckNumber)(c((0, t.pluckNumber)(n.captionfontsize) - 3, -1), m) + (0, t.pluckNumber)(i.subTitleFontSizeExtender, 1)) + p, fontWeight: 0 === (0, t.pluckNumber)(n.subcaptionfontbold, i.subTitleFontWeight, n.captionfontbold) ? t.NORMAL : t.BOLD }, (0, t.setLineHeight)(o.style);
        }
      }, {
        key: "draw",
        value: function draw() {
          var e = void 0,
              i = this,
              n = i.getFromEnv("chart"),
              o = n.getFromEnv("animationManager"),
              a = n.getChildren("caption")[0],
              l = n.config,
              r = l.textDirection,
              c = n.getChildContainer().captionGroup,
              p = i.getGraphicalElement("subCaptionElement"),
              s = i.getFromEnv("toolTipController"),
              g = i.config,
              m = g.style,
              d = g.text,
              f = a.config.align;d ? (e = { text: g.text, fill: m.color, x: g.x, y: g.y, "text-anchor": f || b, "vertical-align": u, direction: r, visibility: a.config.drawCaption ? t.visibleStr : t.hiddenStr }, (p = i.addGraphicalElement("subCaptionElement", o.setAnimation({ el: p || "text", attr: e, container: c, state: void 0, component: i, hookFn: function hookFn() {
              this.css(m);
            }, label: "text" }))).css(m), l.showtooltip ? s.enableToolTip(p, g.originalText) : s.disableToolTip(p)) : p && i.removeGraphicalElement(p), l.savedSubCaption = p;
        }
      }, {
        key: "setDimention",
        value: function setDimention(t) {
          this.config.x = t.x, this.config.y = t.y;
        }
      }]);

      return m;
    }(n.default);

    exports.default = m;
  }, { "../lib/lib": 20, "../lib/lib-graphics": 21, "./caption": 138, "../dependency-manager": 17, "../animation-rules/subcaption-animation": 168 }], 169: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { "initial.background.background": function initialBackgroundBackground() {
        return { "rect.appearing": function rectAppearing() {
            return [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "initial" }];
          } };
      } };
  }, {}], 140: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../../core/component-interface"),
        r = n(e),
        a = require("../lib/lib"),
        o = require("../lib/lib-graphics"),
        g = require("../dependency-manager"),
        t = require("../animation-rules/background-animation"),
        l = n(t);function n(e) {
      return e && e.__esModule ? e : { default: e };
    }var i = void 0,
        c = { BACKGROUNDLOADED: "BackgroundLoaded", BACKGROUNDLOADERROR: "BackgroundLoadError", clipRectStr: "clip-rect" },
        b = "top",
        d = "bottom",
        m = "middle",
        h = "right",
        u = "left",
        p = "tile",
        s = "fill",
        k = "fit",
        A = i = "none",
        I = function I(e) {
      var r = e.config;return { load: function load() {
          var a = r.bgImageDisplayMode,
              o = r.bgImageVAlign,
              g = r.bgImageHAlign,
              t = r.bgImageScale,
              l = r.bgSWFAlpha,
              n = r.bgSWF,
              i = e.getGraphicalElement("backgroundImage")._.RefImg;

          e.getFromEnv("chart").fireChartInstanceEvent(c.BACKGROUNDLOADED, { url: n, bgImageAlpha: l, bgImageDisplayMode: a, bgImageVAlign: o, bgImageHAlign: g, bgImageScale: t, imageheight: i.height, imagewidth: i.width });
        }, error: function error(a) {
          var o = r.bgImageDisplayMode,
              g = r.bgImageVAlign,
              t = r.bgImageHAlign,
              l = r.bgImageScale,
              n = r.bgSWFAlpha,
              i = r.bgSWF;
          e.getFromEnv("chart").fireChartInstanceEvent(c.BACKGROUNDLOADERROR, { url: i, bgImageAlpha: n, error: a, bgImageDisplayMode: o, bgImageVAlign: g, bgImageHAlign: t, bgImageScale: l });
        } };
    },
        C = ",",
        E = "";(0, g.addDep)({ name: "backgroundAnimation", type: "animationRule", extension: l.default });
    var f = function (_r$default) {
      _inherits(f, _r$default);

      function f() {
        var _this8;

        _classCallCheck(this, f);

        (_this8 = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this)), _this8), _this8.config.handler = I(_this8);return _this8;
      }

      _createClass(f, [{
        key: "getName",
        value: function getName() {
          return "background";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "background";
        }
      }, {
        key: "_getBackgroundCosmetics",
        value: function _getBackgroundCosmetics() {
          var e = this,
              r = e.getFromEnv("chart-attrib"),
              o = e.getFromEnv("color-manager"),
              g = e.getFromEnv("chartConfig").is3D ? a.chartPaletteStr.chart3D : a.chartPaletteStr.chart2D;return { FCcolor: { color: (0, a.pluck)(r.bgcolor, o.getColor(g.bgColor)), alpha: (0, a.pluck)(r.bgalpha, o.getColor(g.bgAlpha)), angle: (0, a.pluck)(r.bgangle, o.getColor(g.bgAngle)), ratio: (0, a.pluck)(r.bgratio, o.getColor(g.bgRatio)) } };
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes() {
          var e,
              r,
              g,
              t = this,
              l = t.config,
              n = t.getFromEnv("chart-attrib"),
              c = t.getFromEnv("chartConfig"),
              I = c.is3D,
              C = t.getFromEnv("color-manager"),
              f = l.bgImageDisplayMode = (0, a.pluck)(n.bgimagedisplaymode, i).toLowerCase();l.bgSWF = (0, a.pluck)(n.bgimage, n.bgswf), l.bgSWFAlpha = (0, a.pluckNumber)(n.bgimagealpha, n.bgswfalpha, 100), e = l.showBorder = (0, a.pluckNumber)(n.showborder, c.showBorder, I ? 0 : 1), l.borderWidth = Math.max(e ? (0, a.pluckNumber)(n.borderthickness, 1) : 0, 0), l.borderRadius = (0, a.pluckNumber)(n.borderradius, 0), l.borderDashStyle = (0, a.pluckNumber)(n.borderdashed, 0) ? (0, a.getDashStyle)((0, a.pluckNumber)(n.borderdashlen, 4), (0, a.pluckNumber)(n.borderdashgap, 2), void 0) : A, l.borderAlpha = (0, a.pluck)(n.borderalpha, I ? "100" : C && C.getColor("borderAlpha")), l.borderColor = (0, o.convertColor)((0, a.pluck)(n.bordercolor, I ? "#666666" : C && C.getColor("borderColor")), l.borderAlpha), l.bgImageVAlign = r = (0, a.getValidValue)(n.bgimagevalign, E).toLowerCase(), l.bgImageHAlign = g = (n.bgimagehalign || E).toLowerCase(), l.bgImageScale = (0, a.pluckNumber)(n.bgimagescale, 100), l.containerBackgroundColor = (0, a.getContainerBackgroundColor)(t.getFromEnv("chartInstance")), l.backgroundColor = t._getBackgroundCosmetics(), f === p || f === s || f === k ? (r !== b && r !== m && r !== d && (l.bgImageVAlign = m), g !== u && g !== m && g !== h && (l.bgImageHAlign = m)) : (r !== b && r !== m && r !== d && (l.bgImageVAlign = b), g !== u && g !== m && g !== h && (l.bgImageHAlign = u));
        }
      }, {
        key: "draw",
        value: function draw() {
          var e,
              r,
              o,
              g,
              t = this,
              l = t.getFromEnv("paper"),
              n = t.getGraphicalElement("backgroundElement"),
              i = t.getGraphicalElement("borderElement"),
              c = t.config,
              b = t.getFromEnv("chart"),
              d = t.getFromEnv("chartConfig"),
              m = c.backgroundColor,
              h = t.getFromEnv("animationManager"),
              u = t.getGraphicalElement("backgroundImage"),
              p = c.bgSWF,
              s = b.getChildContainer("backgroundGroup"),
              k = d.width,
              A = d.height,
              I = c.borderWidth || 0,
              E = c.borderRadius,
              f = c.borderDashStyle,
              v = c.borderColor,
              D = c.bgSWFAlpha,
              S = c.bgImageDisplayMode,
              F = c.bgImageVAlign,
              y = c.bgImageHAlign,
              w = c.bgImageScale;l.canvas.style.backgroundColor = c.containerBackgroundColor, o = { x: I, y: I, width: k - 2 * I, height: A - 2 * I, stroke: a.preDefStr.noneStr, fill: (0, a.toRaphaelColor)(m) }, (e = h.setAnimation({ el: n || "rect", attr: o, container: s, component: t, label: "rect" })).show(), n || t.addGraphicalElement("backgroundElement", e), o = { x: I / 2, y: I / 2, width: k - I, height: A - I, stroke: v, "stroke-width": I, "stroke-dasharray": f, fill: a.preDefStr.noneStr, r: E || 0 }, (r = h.setAnimation({ el: i || "rect", attr: o, container: s, component: t, label: "rect" })).show(), i || t.addGraphicalElement("borderElement", r), p && !t.getState("removed") ? ((g = h.setAnimation({ el: u || "imagegrid", attr: { imagegrid: [S, F, y, w, I, k, A], src: p, opacity: .01 * D, "clip-rect": I + C + I + C + (k - 2 * I) + C + (A - 2 * I) }, container: s, component: t, label: "imagegrid" })).show(), !u && (t.addGraphicalElement("backgroundImage", g), g.on("load", c.handler.load), g.on("error", c.handler.error))) : u && t.removeGraphicalElement(u);
        }
      }]);

      return f;
    }(r.default);

    exports.default = f;
  }, { "../../core/component-interface": 62, "../lib/lib": 20, "../lib/lib-graphics": 21, "../dependency-manager": 17, "../animation-rules/background-animation": 169 }], 117: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var F = ["AFD8F8", "F6BD0F", "8BBA00", "FF8E46", "008E8E", "D64646", "8E468E", "588526", "B3AA00", "008ED6", "9D080D", "A186BE", "CC6600", "FDC689", "ABA000", "F26D7D", "FFF200", "0054A6", "F7941C", "CC3300", "006600", "663300", "6DCFF6"],
        o = "0,100",
        r = "FFFFFF",
        C = "100",
        e = "",
        D = 270,
        t = 100;var p = exports.paletteColors = [F, F, F, F, F],
        s = exports.bgColor = ["CBCBCB,E9E9E9", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
        l = exports.bgAngle = [270, 270, 270, 270, 270],
        B = exports.bgRatio = ["0,100", "0,100", "0,100", "0,100", "0,100"],
        A = exports.bgAlpha = ["50,50", "60,50", "40,20", "20,10", "30,30"],
        x = exports.canvasBgColor = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        a = exports.canvasBgAngle = [0, 0, 0, 0, 0],
        E = exports.canvasBgAlpha = ["100", "100", "100", "100", "100"],
        g = exports.canvasBgRatio = ["", "", "", "", ""],
        n = exports.canvasBorderColor = ["545454", "545454", "415D6F", "845001", "68001B"],
        d = exports.canvasBorderAlpha = [100, 100, 100, 90, 100],
        i = exports.showShadow = [0, 1, 1, 1, 1],
        b = exports.divLineColor = ["717170", "7B7D6D", "92CDD6", "965B01", "68001B"],
        c = exports.divLineAlpha = [40, 45, 65, 40, 30],
        h = exports.altHGridColor = ["EEEEEE", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        v = exports.altHGridAlpha = [50, 35, 10, 20, 15],
        G = exports.altVGridColor = ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        L = exports.altVGridAlpha = [10, 20, 10, 15, 10],
        T = exports.anchorBgColor = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        u = exports.toolTipBgColor = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        R = exports.toolTipBorderColor = ["545454", "545454", "415D6F", "845001", "68001B"],
        w = exports.baseFontColor = ["555555", "60634E", "025B6A", "A15E01", "68001B"],
        H = exports.borderColor = ["767575", "545454", "415D6F", "845001", "68001B"],
        V = exports.borderAlpha = [50, 50, 50, 50, 50],
        _ = exports.legendBgColor = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        f = exports.legendBorderColor = ["545454", "545454", "415D6F", "845001", "D55979"],
        j = exports.plotGradientColor = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        y = exports.plotBorderColor = ["333333", "8A8A8A", "FFFFFF", "FFFFFF", "FFFFFF"],
        M = exports.plotFillColor = ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
        O = exports.bgColor3D = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        P = exports.bgAlpha3D = ["100", "100", "100", "100", "100"],
        S = exports.bgAngle3D = [90, 90, 90, 90, 90],
        k = exports.bgRatio3D = ["", "", "", "", ""],
        m = exports.canvasBgColor3D = ["DDE3D5", "D8D8D7", "EEDFCA", "CFD2D8", "FEE8E0"],
        q = exports.canvasBaseColor3D = ["ACBB99", "BCBCBD", "C8A06C", "96A4AF", "FAC7BC"],
        z = exports.divLineColor3D = ["ACBB99", "A4A4A4", "BE9B6B", "7C8995", "D49B8B"],
        I = exports.divLineAlpha3D = [100, 100, 100, 100, 100],
        J = exports.legendBgColor3D = ["F0F3ED", "F3F3F3", "F7F0E8", "EEF0F2", "FEF8F5"],
        K = exports.legendBorderColor3D = ["C6CFB8", "C8C8C8", "DFC29C", "CFD5DA", "FAD1C7"],
        N = exports.toolTipbgColor3D = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
        Q = exports.toolTipBorderColor3D = ["49563A", "666666", "49351D", "576373", "681C09"],
        U = exports.baseFontColor3D = ["49563A", "4A4A4A", "49351D", "48505A", "681C09"],
        W = exports.anchorBgColor3D = ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"];
  }, {}], 141: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var o = require("../lib/lib"),
        r = require("../lib/lib-graphics"),
        l = require("./chart-palette-colors"),
        t = e(l);function e(o) {
      if (o && o.__esModule) return o;var r = {};if (null != o) for (var l in o) {
        Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
      }return r.default = o, r;
    }function a(o, l) {
      var t,
          e,
          a,
          C,
          i,
          s,
          n,
          p,
          d,
          h,
          F,
          D = [],
          u = g.stringConstants;if ((l = (l = l.replace(/\s/g, u.BLANK)).toLowerCase()) === u.BLANK || null == l) D = [o];else for (a = l.split(u.COMMASTRING), C = o.split(u.COMMASTRING), i = Math.max(a.length, C.length, 1), s = a[0], n = C[0], h = /[\{\}]/gi, F = 0; F < i; F++) {
        p = (a[F] || s).replace(h, ""), d = C[F] || n, "color" === p ? D.push(d) : "light" === p.substr(0, 5) ? (e = 100 - (e = -1 === (t = p.indexOf("-")) ? 1 : p.substr(t + 1, p.length - t)), D.push((0, r.getLightColor)(d, e))) : "dark" === p.substr(0, 4) ? (e = 100 - (e = -1 === (t = p.indexOf("-")) ? 1 : p.substr(t + 1, p.length - t)), D.push((0, r.getDarkColor)(d, e))) : D.push(p);
      }return D;
    }function C(r, l) {
      var t,
          e,
          a = r.toString().split(g.stringConstants.COMMASTRING),
          C = [],
          i = 100;for (e = 0; e < l; e++) {
        t = (0, o.pluckNumber)(a[e]), g.defined(t) && (i = t), C[e] = i;
      }return C.join();
    }function i(o, r) {
      var l,
          t,
          e = o.split(g.stringConstants.COMMASTRING),
          a = [],
          C = 0;for (t = 0; t < r; t++) {
        l = e[t], l = 100 < (l = isNaN(l) || void 0 === l ? 0 : Math.abs(+l)) ? 100 : l, a[t] = l, C += l;
      }if (C = 100 < C ? 100 : C, e.length < r) for (t = e.length; t < r; t++) {
        a[t] = (100 - C) / (r - e.length);
      }return a[-1] = 0, a.join();
    }
    var g = function () {
      function g(o) {
        _classCallCheck(this, g);

        this.parseColorMix = a, this.parseAlphaList = C, this.parseRatioList = i, this.linkedItems = { iapi: o }, this.configure(), this.paletteColors = ["AFD8F8", "F6BD0F", "8BBA00", "FF8E46", "008E8E", "D64646", "8E468E", "588526", "B3AA00", "008ED6", "9D080D", "A186BE", "CC6600", "FDC689", "ABA000", "F26D7D", "FFF200", "0054A6", "F7941C", "CC3300", "006600", "663300", "6DCFF6"];
      }

      _createClass(g, [{
        key: "configure",
        value: function configure() {
          var l = this,
              e = g.stringConstants,
              a = l.linkedItems.iapi,
              C = a.getFromEnv("dataSource").chart || {},
              i = l.paletteOptions = (0, o.extend2)((0, o.extend2)({}, t), a.defaultPaletteOptions || {}, !1, !0),
              s = l.themeEnabled = C.palettethemecolor;l.paletteIndex = (0 < C.palette && 6 > C.palette ? C.palette : (0, o.pluckNumber)(a.paletteIndex, 1)) - 1, l.iterator = 0, l.paletteColors = i.paletteColors[l.themeEnabled ? 0 : l.paletteIndex], g.defined(C.palettecolors) && C.palettecolors !== e.BLANK && (l.paletteColors = C.palettecolors.split(/\s*\,\s*/)), l.paletteLen = l.paletteColors.length, l.useFlatColors = (0, o.pluckNumber)(C.useflatdataplotcolor, a.useFlatColor, 0), s && (l.paletteIndex = 5, i.bgColor[5] = (0, r.getLightColor)(s, 35) + e.COMMASTRING + (0, r.getLightColor)(s, 10), i.bgAngle[5] = 270, i.bgRatio[5] = e.BGRATIOSTRING, i.bgAlpha[5] = "50,50", i.canvasBgColor[5] = e.COLOR_WHITE, i.canvasBgAngle[5] = 0, i.canvasBgAlpha[5] = e.HUNDREDSTRING, i.canvasBgRatio[5] = e.BLANK, i.canvasBorderColor[5] = (0, r.getDarkColor)(s, 80), i.canvasBorderAlpha[5] = 100, i.showShadow[5] = 1, i.divLineColor[5] = (0, r.getDarkColor)(s, 20), i.divLineAlpha[5] = 40, i.altHGridColor[5] = (0, r.getLightColor)(s, 20), i.altHGridAlpha[5] = 15, i.altVGridColor[5] = (0, r.getLightColor)(s, 80), i.altVGridAlpha[5] = 10, i.anchorBgColor[5] = e.COLOR_WHITE, i.toolTipBgColor[5] = e.COLOR_WHITE, i.toolTipBorderColor[5] = (0, r.getDarkColor)(s, 80), i.baseFontColor[5] = s.split && s.split(e.COMMASTRING)[0], i.borderColor[5] = (0, r.getDarkColor)(s, 60), i.borderAlpha[5] = 50, i.legendBgColor[5] = e.COLOR_WHITE, i.legendBorderColor[5] = (0, r.getDarkColor)(s, 80), i.plotGradientColor[5] = e.COLOR_WHITE, i.plotBorderColor[5] = (0, r.getDarkColor)(s, 85), i.plotFillColor[5] = (0, r.getDarkColor)(s, 85), i.bgColor3D[5] = e.COLOR_WHITE, i.bgAlpha3D[5] = e.HUNDREDSTRING, i.bgAngle3D[5] = 90, i.bgRatio3D[5] = e.BLANK, i.canvasBgColor3D[5] = (0, r.getLightColor)(s, 20), i.canvasBaseColor3D[5] = (0, r.getLightColor)(s, 40), i.divLineColor3D[5] = (0, r.getDarkColor)(s, 20), i.divLineAlpha3D[5] = 40, i.legendBgColor3D[5] = e.COLOR_WHITE, i.legendBorderColor3D[5] = (0, r.getDarkColor)(s, 80), i.toolTipbgColor3D[5] = e.COLOR_WHITE, i.toolTipBorderColor3D[5] = (0, r.getDarkColor)(s, 80), i.baseFontColor3D[5] = s.split && s.split(e.COMMASTRING)[0], i.anchorBgColor3D[5] = e.COLOR_WHITE, i.tickColor && (i.tickColor[5] = (0, r.getDarkColor)(s, 90)), i.trendDarkColor && (i.trendDarkColor[5] = (0, r.getDarkColor)(s, 90)), i.trendLightColor && (i.trendLightColor[5] = (0, r.getLightColor)(s, i.TrendLightShadeOffset)), i.msgLogColor && (i.msgLogColor[5] = (0, r.getLightColor)(s, 80)), i.dialColor && (i.dialColor[5] = (0, r.getDarkColor)(s, 95) + ",FFFFFF," + (0, r.getDarkColor)(s, 95)), i.dialBorderColor && (i.dialBorderColor[5] = (0, r.getDarkColor)(s, 95) + ",FFFFFF," + (0, r.getDarkColor)(s, 95)), i.pivotColor && (i.pivotColor[5] = (0, r.getLightColor)(s, 95) + ",FFFFFF," + (0, r.getLightColor)(s, 95)), i.pivotBorderColor && (i.pivotBorderColor[5] = (0, r.getDarkColor)(s, 95) + ",FFFFFF," + (0, r.getDarkColor)(s, 95)), i.pointerBorderColor && (i.pointerBorderColor[5] = (0, r.getDarkColor)(s, 75)), i.pointerBgColor && (i.pointerBgColor[5] = (0, r.getDarkColor)(s, 75)), i.thmBorderColor && (i.thmBorderColor[5] = (0, r.getDarkColor)(s, 90)), i.thmFillColor && (i.thmFillColor[5] = (0, r.getLightColor)(s, 55)), i.gaugeBorderColor && (i.gaugeBorderColor[5] = (0, r.getDarkColor)(s, 90)), i.gaugeFillColor && (i.gaugeFillColor[5] = (0, r.getLightColor)(s, 55)), i.cylFillColor && (i.cylFillColor[5] = (0, r.getLightColor)(s, 55)), i.periodColor && (i.periodColor[5] = (0, r.getLightColor)(s, 10)), i.winColor && (i.winColor[5] = "666666"), i.lossColor && (i.lossColor[5] = "CC0000"), i.drawColor && (i.drawColor[5] = "666666"), i.scorelessColor && (i.scorelessColor[5] = "FF0000"), i.gridColor && (i.gridColor[5] = (0, r.getLightColor)(s, 30)), i.categoryBgColor && (i.categoryBgColor[5] = (0, r.getLightColor)(s, 10)), i.dataTableBgColor && (i.dataTableBgColor[5] = (0, r.getLightColor)(s, 10)), i.gridResizeBarColor && (i.gridResizeBarColor[5] = (0, r.getDarkColor)(s, 90)), i.scrollBarColor && (i.scrollBarColor[5] = (0, r.getLightColor)(s, 50)));
        }
      }, {
        key: "getColor",
        value: function getColor(o) {
          return this.paletteOptions[o][this.paletteIndex];
        }
      }, {
        key: "getPlotColor",
        value: function getPlotColor(o) {
          var r = this,
              l = r.paletteColors,
              t = r.useFlatColors ? r.getColor("plotFillColor") : l[o % r.paletteLen];return t || (r.iterator === r.paletteLen && (r.iterator = 0), t = l[r.iterator], r.iterator += 1), t;
        }
      }]);

      return g;
    }();

    g.stringConstants = { BLANK: "", COMMASTRING: ",", BGRATIOSTRING: "0,100", COLOR_WHITE: "FFFFFF", HUNDREDSTRING: "100" }, g.defined = function (o) {
      return null != o;
    }, exports.default = g;
  }, { "../lib/lib": 20, "../lib/lib-graphics": 21, "./chart-palette-colors": 117 }], 170: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.SymbolStore = exports.RSymbolFns = exports.getEventHandlersFor = exports.mergeConf = exports.normalizeTarget = exports.isDIV = exports.hashCode = void 0;var e = require("../dom/dom-event"),
        t = n(e),
        r = require("../dependency-manager");function n(e) {
      return e && e.__esModule ? e : { default: e };
    }var o = void 0,
        i = (0, r.getDep)("redraphael", "plugin"),
        a = "Internal_CB",
        u = { CB_NOT_CHECKED: function CB_NOT_CHECKED(e, t, r) {
        return ["M", e - r, t - r];
      }, CB_CHECKED: function CB_CHECKED(e, t, r) {
        var n = r / 4;return ["M", e - 3 * n, t, "L", e - n, t + r, e + r, t - r];
      } },
        l = (i.addSymbol(a, u.CB_NOT_CHECKED), { register: function register() {
        var e, t, r, n;if (1 === arguments.length) {
          if (null === (r = arguments[0]) && r === o || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r))) return;n = r;
        } else {
          if (!(1 < arguments.length)) return;if (e = arguments[0], t = arguments[1], "string" != typeof e || "function" != typeof t) return;(n = {})[e] = t;
        }for (e in n) {
          t = n[e], {}.hasOwnProperty.call(n, e) && i.addSymbol(e, t);
        }
      } });function s(e) {
      return "number" == typeof e && (e = "'" + e + "'"), e.split("").reduce(function (e, t) {
        return (e = (e << 5) - e + t.charCodeAt(0)) & e;
      }, 0);
    }function f(e) {
      return !(!e || !e.nodeName || "DIV" !== e.nodeName.toUpperCase());
    }function c(e, t) {
      var r;return e.getBBox ? e : (r = e.getBoundingClientRect(), e.getBBox = function () {
        return { x: t.x, y: t.y, width: r.right - r.left, height: r.bottom - r.top, isArtificial: !0 };
      }, e);
    }function p(e, t, r) {
      var n, i;for (n in e) {
        if ((i = e[n]) !== o && null !== i) if (r) {
          if (t[n]) continue;t[n] = i;
        } else t[n] = i;
      }
    }function d(e, r) {
      var n = function n() {
        t.default.listen(r, "mousemove", function (e) {
          e.originalEvent.stopPropagation();
        });
      };return "click" === e ? function (e) {
        t.default.listen(r, "click", function (t) {
          t.target && t.target.parentNode && e.call(t.target);
        }), n();
      } : "hover" === e ? function (e, o) {
        t.default.listen(r, "pointerhover", function (t) {
          t.target && t.target.parentNode && ("start" === t.state ? e : o).call(t.target);
        }), n();
      } : void 0;
    }exports.hashCode = s, exports.isDIV = f, exports.normalizeTarget = c, exports.mergeConf = p, exports.getEventHandlersFor = d, exports.RSymbolFns = u, exports.SymbolStore = l;
  }, { "../dom/dom-event": 73, "../dependency-manager": 17 }], 174: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.ToolBarFactoryHelper = exports.defTextStyle = exports.defaultHToolbarConf = exports.defaultGroupConf = void 0;var o = require("../lib/lib-graphics");var t = void 0,
        e = { hPadding: 3, vPadding: 3, borderRadius: 2, fill: (0, o.convertColor)("DBDBDB", 100), borderColor: (0, o.convertColor)("B2B1B1", 100), borderThickness: 1, offsetAdjustment: 1, radius: 1, spacing: 6 },
        r = { hPadding: 3, vPadding: 3, borderRadius: 0, fill: (0, o.convertColor)("EBEBEB", 100), borderColor: (0, o.convertColor)("D1D0D0", 100), borderThickness: 1, offsetAdjustment: 1, radius: 0 },
        s = { fontFamily: "Verdana,sans", fontSize: "12px", fill: t, fontStyle: "normal", fontWeight: "normal" },
        n = { setComponentPool: function setComponentPool(o, t) {
        return this.store[t] || (this.store[t] = {}), this.store[t].componentPool = o;
      }, getOptions: function getOptions(o) {
        return this.store[o] || (this.store[o] = { options: {}, componentPool: {} }), this.store[o].options;
      }, getComponentPool: function getComponentPool(o) {
        return this.store[o] || (this.store[o] = { options: {}, componentPool: {} }), this.store[o].componentPool;
      }, setOptions: function setOptions(o, t) {
        return this.store[t] || (this.store[t] = {}), this.store[t].options = o;
      }, store: {} };exports.defaultGroupConf = e, exports.defaultHToolbarConf = r, exports.defTextStyle = s, exports.ToolBarFactoryHelper = n;
  }, { "../lib/lib-graphics": 21 }], 171: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        e = require("../lib/lib-graphics"),
        o = require("./helper"),
        i = require("./toolBarFactoryHelper"),
        l = require("../../core/component-interface"),
        n = r(l);function r(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = void 0,
        a = "block",
        c = "none";
    var d = function (_n$default4) {
      _inherits(d, _n$default4);

      function d() {
        _classCallCheck(this, d);

        return _possibleConstructorReturn(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments));
      }

      _createClass(d, [{
        key: "configure",
        value: function configure(e, o, i, l, n) {
          var r = this.config;r.symbol = e, r._id = "TB_SYMBOL" + (i || 0), r.node = s, r.pId = l, r.isPlaintext = o, r.chartId = n, r.conf = { btnTextStyle: { "stroke-width": "1px", stroke: "none" } }, r.evt = { tooltext: s, click: t.stubFN, hover: [t.stubFN, t.stubFN] };
        }
      }, {
        key: "registerSymbol",
        value: function registerSymbol(t) {
          var e = this.config;o.SymbolStore.register(e.symbol, t);
        }
      }, {
        key: "_setConfiguaration",
        value: function _setConfiguaration(t) {
          var e = this.config;e.conf ? (0, o.mergeConf)(t, e.conf, !0) : e.conf = t;
        }
      }, {
        key: "attachEventHandlers",
        value: function attachEventHandlers(e, o) {
          var i,
              l = this,
              n = this.config,
              r = l.config.evt,
              s = e.tooltext,
              a = e.click || t.stubFN,
              c = e.hover,
              d = o && o.click || t.stubFN;return i = "function" == typeof a ? function () {
            d(), a.apply(l, arguments);
          } : function () {
            var t = a.fn,
                e = a.context,
                o = (a.args || []).slice(0);a.hasOwnProperty("context") ? o.push(l) : e = l, [].push.apply(o, arguments), d(), t.apply(e, o);
          }, s && (r.tooltext = s), r.click = i, c && c instanceof Array && (r.hover = c), n.node && (n.node.buttonclick(n.evt.click).hover(n.evt.hover[0], n.evt.hover[1]), l.getFromEnv("toolTipController").enableToolTip(n.node, n.evt.tooltext)), this;
        }
      }, {
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
          var t = this.config;return { width: (t = t.conf || t.buttonConfig).width * (t.scale || 1), height: t.height * (t.scale || 1) };
        }
      }, {
        key: "show",
        value: function show() {
          var t = this.config,
              e = t.node;t.display = a, e && e.css({ display: a });
        }
      }, {
        key: "hide",
        value: function hide() {
          var t = this.config,
              e = t.node;t.display = c, e && e.css({ display: c });
        }
      }, {
        key: "draw",
        value: function draw(t, o, l) {
          var n,
              r,
              a,
              c,
              d = this.config,
              h = d.conf || {},
              g = i.ToolBarFactoryHelper.getComponentPool(d.chartId),
              u = g.getKeys(),
              p = i.ToolBarFactoryHelper.getOptions(d.chartId).chart,
              b = p.getFromEnv("animationManager"),
              v = p.getFromEnv("toolTipController");return d.isPlaintext ? a = d.symbol : r = d.symbol, l.idCount !== s && (d._id += l.idCount), c = g.getComponent(d._id, d.pId, u.KEY_BUTTON, !0), n = d.node = c(t, o, a, r, { width: h.width * h.scale, height: h.height * h.scale, r: h.radius, verticalPadding: h.symbolVPadding * h.scale, horizontalPadding: h.symbolHPadding }, l.parentLayer).labelcss(d.conf.btnTextStyle), d.display && d.node.css({ display: d.display }) && (d.display = s), b.setAnimation({ el: d.node, attr: { "button-label": a, "button-padding": [h.symbolHPadding, h.symbolVPadding * h.scale], "button-repaint": [t, o, h.width * h.scale, h.height * h.scale, h.radius * h.scale] }, state: "updating", component: this, label: "button" }), l.isResize || (h.hoverFill = h.hoverFill ? (0, e.convertColor)(h.hoverFill) : (0, e.convertColor)((0, e.getLightColor)((0, e.rawRGBtoHEX)(h.fill), 80)), n.attr({ fill: [h.fill, h.labelFill, h.symbolFill, h.hoverFill, !0], stroke: [h.stroke, h.symbolStroke], "stroke-width": [h.strokeWidth, h.symbolStrokeWidth] }).buttonclick(d.evt.click).hover(d.evt.hover[0], d.evt.hover[1]), v.enableToolTip(n, d.evt.tooltext), !g.getCreationStatus() && (d.node.unclick(), d.node.buttonclick(d.evt.click))), n.getBBox = function () {
            return { x: t, y: o, width: h.width * h.scale, height: h.height * h.scale };
          }, n;
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var t = this.config,
              e = t.node;e && e.remove(), t.node = s;
        }
      }]);

      return d;
    }(n.default);

    exports.default = d;
  }, { "../lib/lib": 20, "../lib/lib-graphics": 21, "./helper": 170, "./toolBarFactoryHelper": 174, "../../core/component-interface": 62 }], 173: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = {},
        e = {},
        o = {},
        r = "top",
        p = "bottom",
        s = [];exports.btnSpecAttr = e, exports.scrollerSpecAttr = t, exports.contextMenuSpecAttr = o, exports.POSITION_TOP = r, exports.POSITION_BOTTOM = p, exports.allNodes = s;
  }, {}], 197: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("./toolBarFactoryHelper"),
        e = require("./helper"),
        o = require("./default-attrs"),
        i = require("../../core/component-interface"),
        n = r(i);function r(t) {
      return t && t.__esModule ? t : { default: t };
    }var a = void 0,
        s = "px",
        l = 300;
    var c = function (_n$default5) {
      _inherits(c, _n$default5);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }

      _createClass(c, [{
        key: "configure",
        value: function configure(o, i, n) {
          var r,
              d,
              h,
              f,
              p = i && i.top || 0,
              u = i && i.left,
              g = i && i.right,
              y = t.ToolBarFactoryHelper.getOptions(n).chart;for (d in h = this, (f = this.config).container = o, f.position = c.POSITION_BOTTOM, f.atomicLists = [], f.refContainers = [], f.parentListCon = a, f.hideFnIds = [], f.target = a, f.chartId = n, u && g || (f.positionCalculation = !0), f.hoverOverStyle = { background: "#333333", color: "#FFFFFF", cursor: "pointer" }, f.hoverOutStyle = { background: "#FFFFFF", color: "#000000" }, f._defaultStyle = { position: "absolute", "z-index": 50, top: p === a ? "auto" : p + s, right: g === a ? "auto" : g + s, left: u === a ? "auto" : u + s, overflow: "hidden", background: "#ffffff", border: "1px solid #646464", "box-shadow": "#999999 2px 2px 5px", padding: "5px 3px", display: "none" }, r = f.container.style, f._defaultStyle) {
            r[d] = f._defaultStyle[d];
          }y.getFromEnv("chart-container").appendChild(f.container), (0, e.getEventHandlersFor)("hover", f.container)(function () {
            h.show(this);
          }, function () {
            h.hide(l, this);
          });
        }
      }, {
        key: "addAtomicListItem",
        value: function addAtomicListItem(t) {
          var e = this.config;t.isAtomicList && t.isAtomicList() && (e.atomicLists.push(t), t.stickIntoContainer(e.container, this));
        }
      }, {
        key: "show",
        value: function show(i) {
          var n,
              r,
              a,
              l,
              c = this.config,
              d = c.hideFnIds,
              h = t.ToolBarFactoryHelper.getOptions(c.chartId).chart,
              f = h.config.width,
              p = c.positionCalculation,
              u = 0;for (c.target = c.target || i, n = d.length; u < n; u++) {
            clearTimeout(d[u]);
          }d.length = 0, (r = c.parentListCon) ? (r.show(c.target), c.container.style.left = r.container.offsetLeft + r.container.offsetWidth + s, c.container.style.top = r.container.offsetTop + c.target.offsetTop + s) : !(0, e.isDIV)(i) && (l = i.getBBox(), p && (c.container.style.display = "block", c.container.offsetWidth + l.x > f ? (c.container.style.left = "auto", c.container.style.right = f - l.x - l.width + s) : (c.container.style.left = l.x + s, c.container.style.right = "auto"), c.container.style.display = "none"), c.position === o.POSITION_BOTTOM ? (a = l.isArtificial ? .5 : 1.5, c.container.style.top = l.y + l.height * a + s, c.container.style.bottom = "auto") : (c.container.style.bottom = h.config.height - l.y + s, c.container.style.top = "auto")), c.container.style.display = "block";
        }
      }, {
        key: "hide",
        value: function hide(t) {
          var e,
              o = this.config,
              i = o.container;(e = o.parentListCon) && e.hide(l), o.hideFnIds.push(setTimeout(function () {
            i.style.display = "none";
          }, t));
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var t,
              e,
              o = this.config,
              i = o.atomicLists,
              n = o.refContainers;for (o.hideFnIds.length = 0, t = 0, e = i.length; t < e; t++) {
            i[t].dispose();
          }for (i.length = 0, t = 0, e = n.length; t < e; t++) {
            n[t].dispose();
          }n.length = 0;
        }
      }, {
        key: "isListContainer",
        value: function isListContainer() {
          return !0;
        }
      }]);

      return c;
    }(n.default);

    c.POSITION_TOP = o.POSITION_TOP, c.POSITION_BOTTOM = o.POSITION_BOTTOM, exports.default = c;
  }, { "./toolBarFactoryHelper": 174, "./helper": 170, "./default-attrs": 173, "../../core/component-interface": 62 }], 198: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./helper"),
        t = require("./default-attrs"),
        n = require("../lib/lib"),
        o = require("./toolBarFactoryHelper"),
        r = require("../../core/component-interface"),
        i = a(r);function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = void 0,
        l = window.document,
        c = "div",
        f = "px",
        u = "click",
        d = 300,
        h = "hover";
    var p = function (_i$default2) {
      _inherits(p, _i$default2);

      function p() {
        _classCallCheck(this, p);

        return _possibleConstructorReturn(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments));
      }

      _createClass(p, [{
        key: "configure",
        value: function configure(o, r) {
          var i = o || {},
              a = this.config;a.name = i.name, a.handler = i.handler || n.stubFN, a.action = i.action && i.action.toLowerCase() || u, a.eventMap = {}, a.style = { padding: "3px 8px", margin: "2px 0px", fontFamily: t.contextMenuSpecAttr.baseFontFamily, fontSize: t.contextMenuSpecAttr.baseFontSize + f, color: "#000000" }, a.hoverOverStyle = i.hoverOverStyle || {}, a.hoverOutStyle = i.hoverOutStyle || {}, a.chartId = r, (0, e.mergeConf)(i.style || {}, a.style), a.subConRef = s, a.node = s;
        }
      }, {
        key: "updateName",
        value: function updateName(e) {
          var t = this.config;t.name = e, t.node && (t.node.innerHTML = e);
        }
      }, {
        key: "assignSubContainer",
        value: function assignSubContainer(e) {
          e.isListContainer && e.isListContainer() && (this.config.subConRef = e);
        }
      }, {
        key: "stickIntoContainer",
        value: function stickIntoContainer(t, n) {
          var r,
              i,
              a,
              s,
              f = this.config,
              p = f.node = l.createElement(c),
              v = f.style,
              g = o.ToolBarFactoryHelper.getOptions(f.chartId).chart,
              y = this;for (r in f.handler && (f.eventMap[f.action] = f.handler), t.appendChild(p), p.innerHTML = f.name, i = p.style, v) {
            i[r] = v[r];
          }a = (0, e.getEventHandlersFor)(h, p), (0, e.getEventHandlersFor)(u, p)(function () {
            y.config.handler && ((s = y.config.eventMap[u]) && s.apply(y, [g]), n.hide());
          }), a(function () {
            var e,
                t = p.style,
                n = y.config.hoverOverStyle;for (e in n) {
              t[e] = n[e];
            }y.config.subConRef && y.config.subConRef.show(this);
          }, function () {
            var e,
                t = p.style,
                n = y.config.hoverOutStyle;for (e in n) {
              t[e] = n[e];
            }y.config.subConRef && y.config.subConRef.hide(d, this);
          });
        }
      }, {
        key: "setStyle",
        value: function setStyle(t) {
          (0, e.mergeConf)(t || {}, this.config.style);
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var e = this.config,
              t = e.node;t && t.remove && t.remove(), e.node = s;
        }
      }, {
        key: "isAtomicList",
        value: function isAtomicList() {
          return !0;
        }
      }]);

      return p;
    }(i.default);

    exports.default = p;
  }, { "./helper": 170, "./default-attrs": 173, "../lib/lib": 20, "./toolBarFactoryHelper": 174, "../../core/component-interface": 62 }], 172: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./toolBarFactoryHelper"),
        n = require("./listContainer"),
        t = s(n),
        r = require("./atomicList"),
        o = s(r),
        i = require("../lib/lib"),
        a = require("../../core/component-interface"),
        c = s(a);function s(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = void 0,
        f = "div",
        l = window.document;
    var d = function (_c$default) {
      _inherits(d, _c$default);

      function d() {
        _classCallCheck(this, d);

        return _possibleConstructorReturn(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments));
      }

      _createClass(d, [{
        key: "configure",
        value: function configure(e, n) {
          var t = this.config;t.chartId = n, t.container = u, t.listContainer = u, t.measurement = e;
        }
      }, {
        key: "init",
        value: function init(n) {
          var r,
              o = this.config,
              i = e.ToolBarFactoryHelper.getComponentPool(o.chartId),
              a = i.getKeys();return o.container || ((r = i.getComponent("div0", n, a.KEY_DIV)()) && (r.innerHTML = ""), o.container = new t.default(), o.container.configure(r, o.measurement, o.chartId)), this;
        }
      }, {
        key: "getFirstContainer",
        value: function getFirstContainer() {
          return this.config.container;
        }
      }, {
        key: "appendAsList",
        value: function appendAsList(e, n) {
          var r,
              a,
              c = this,
              s = c.config.container.config.hoverOverStyle,
              d = c.config.container.config.hoverOutStyle;return function e(n, g, h) {
            var v,
                p,
                y,
                m,
                C,
                S,
                O,
                I,
                b,
                q = 0;for (I = g || c.config.container, p = (v = n instanceof Array ? n : [n]).length; q < p; q++) {
              for (C in y = v[q], (m = new o.default()).configure({ hoverOverStyle: s, hoverOutStyle: d }, h), y) {
                m.config.name = C, S = y[C], m.config.action = S.action, m.setStyle(S.style), -1 !== C.search(/^<[^<]+>$/) && (m.config.hoverOverStyle = {}, m.config.hoverOutStyle = {}, S.handler = i.stubFN), "function" == typeof (O = S.handler) ? m.config.handler = S.handler : ((a = new t.default()).configure(l.createElement(f), void 0, h), b = e(O, a));
              }I.addAtomicListItem(m), b && (b.parentListCon = I, I.refContainers.push(b), m.assignSubContainer(b)), b = u;
            }return r = I;
          }(e, n, c.config.chartId), r;
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var e = this.config;e.container.dispose(), e.container = u;
        }
      }]);

      return d;
    }(c.default);

    exports.default = d;
  }, { "./toolBarFactoryHelper": 174, "./listContainer": 197, "./atomicList": 198, "../lib/lib": 20, "../../core/component-interface": 62 }], 142: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("./helper"),
        e = require("./symbolclass"),
        i = o(e),
        r = require("./listContainerManager"),
        n = o(r),
        a = require("./default-attrs");function o(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = void 0,
        l = 300;
    var g = function (_i$default3) {
      _inherits(g, _i$default3);

      function g() {
        _classCallCheck(this, g);

        return _possibleConstructorReturn(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
      }

      _createClass(g, [{
        key: "configure",
        value: function configure(e, i, r, a) {
          var o,
              g,
              c = this.config;_get(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "configure", this).call(this, e, s, i, r), c.chartId = a, c.rawContextDefinitation = s, (g = new n.default()).configure(c.position, a), c.listContainerManager = g.init(r), o = c.listContainerManager.getFirstContainer(), c.evt.hover = [function (e) {
            o.show((0, t.normalizeTarget)(e.target || e.fromElement, e));
          }, function (t) {
            o.hide(l, t.target);
          }];
        }
      }, {
        key: "getListRefernce",
        value: function getListRefernce() {
          return this.config.listContainerManager;
        }
      }, {
        key: "attachEventHandler",
        value: function attachEventHandler(t) {
          var e = this.config.evt,
              i = t.tooltext;i && (e.tooltext = i);
        }
      }, {
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
          var t = this.config.listContainerManager.getFirstContainer().config.atomicLists;return t && 0 === t.length ? { width: 0, height: 0 } : i.default.prototype.getLogicalSpace.call(this);
        }
      }, {
        key: "draw",
        value: function draw() {
          var t,
              e = this.config,
              r = e.listContainerManager.getFirstContainer().config.atomicLists;return r && 0 === r.length ? (this.hide(), { getBBox: function getBBox() {
              return { width: 0, height: 0 };
            } }) : (t = i.default.prototype.draw.apply(this, arguments), g.allNodes.push(e.node), t);
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var t = this.config;t.listContainerManager && t.listContainerManager.dispose(), t.listContainerManager = s, i.default.prototype.dispose.call(this);
        }
      }]);

      return g;
    }(i.default);

    g.POSITION_TOP = a.POSITION_TOP, g.POSITION_BOTTOM = a.POSITION_BOTTOM, g.allNodes = a.allNodes, exports.default = g;
  }, { "./helper": 170, "./symbolclass": 171, "./listContainerManager": 172, "./default-attrs": 173 }], 143: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { "*.*.*": { "*.disappearing": [{ finalAttr: { opacity: 0 }, slot: "initial", callback: function callback() {
            this.hide();
          } }] } };
  }, {}], 201: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = { setNewInstance: function setNewInstance(n, t) {
        e.instances[n] = t;
      }, getInstanceById: function getInstanceById(n) {
        return e.instances[n];
      }, instances: {} };exports.StoreInstance = e;
  }, {}], 202: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./toolBarFactoryHelper"),
        o = require("./storeInstance"),
        t = require("../../core/component-interface"),
        r = i(t);function i(e) {
      return e && e.__esModule ? e : { default: e };
    }var n = void 0;
    var a = function (_r$default2) {
      _inherits(a, _r$default2);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
      }

      _createClass(a, [{
        key: "configure",
        value: function configure(t, r, i) {
          var a = this.config;a.id = "TB_MASTER" + t, o.StoreInstance.setNewInstance(a.id, this), a.toolbarRect = n, a.componentGroups = [], a.toolbarConfig = e.defaultHToolbarConf, a.group = n, a.pId = r, a.x = 0, a.y = 0, a.chartId = i, a.configured = !0;
        }
      }, {
        key: "getId",
        value: function getId() {
          return this.config.id;
        }
      }, {
        key: "getName",
        value: function getName() {
          return "horizontalToolbar";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "toolbar";
        }
      }, {
        key: "addComponent",
        value: function addComponent(e) {
          this.config.componentGroups.push(e);
        }
      }, {
        key: "setMenuBarDimension",
        value: function setMenuBarDimension(e, o) {
          var t = this.config;e && (t.x = e), o && (t.y = o);
        }
      }, {
        key: "draw",
        value: function draw(o) {
          var t,
              r,
              i,
              n,
              a,
              d,
              g,
              s,
              h,
              p,
              c,
              l = this.config,
              u = l.x,
              f = l.y,
              I = l.componentGroups,
              m = l.id,
              b = u,
              C = f,
              w = l.toolbarConfig,
              y = Number.NEGATIVE_INFINITY,
              T = e.ToolBarFactoryHelper.getComponentPool(l.chartId),
              P = T.getKeys();for (o = o || {}, n = l.parentLayer || o.parentGroup || {}, c = T.getComponent(l.id, l.pId, P.KEY_GROUP, !0), l.group = a = c(m, n), c = T.getComponent(l.id, l.pId, P.KEY_RECT, !0), d = l.toolbarRect = c(a).attr({ height: 0, width: 0, x: b, y: C }), b += w.hPadding, C += w.vPadding, r = 0, i = I.length; r < i; r++) {
            p = (t = I[r]).config.groupConfig.spacing || 1, b += (h = t.draw(a, { x: b, y: C }, r, !l.configured)).width + p, y = y > h.height ? y : h.height;
          }return s = y, g = b - p - w.hPadding - u, isFinite(s) || (s = 0), isFinite(g) || (g = 0), d.attr({ height: s += 2 * w.vPadding, width: g += 2 * w.hPadding }).attr({ fill: w.fill, r: w.radius, stroke: w.borderColor, "stroke-width": w.borderThickness }), this.drawn = !0, l.configured = !1, { height: s, width: g };
        }
      }, {
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
          var e,
              o,
              t,
              r,
              i,
              n = this.config,
              a = n.componentGroups,
              d = 0,
              g = Number.NEGATIVE_INFINITY,
              s = 0;for (e = 0, o = a.length; e < o; e++) {
            i = (t = a[e]).getLogicalSpace(), r = t.config.groupConfig.spacing || 1, d += i.width + r, s += i.width, g = g < i.height ? i.height : g;
          }return s ? { width: d -= r - 2 * n.toolbarConfig.hPadding, height: g + 2 * n.toolbarConfig.vPadding } : { width: 0, height: 0 };
        }
      }, {
        key: "dispose",
        value: function dispose() {
          for (var o = this.config, t = e.ToolBarFactoryHelper.getComponentPool(o.chartId), r = o.componentGroups, i = 0, n = r.length; i < n; i++) {
            r[i].dispose();
          }r.length = 0, o.toolbarRect && o.toolbarRect.remove(), t.emptyPool(o.pId);
        }
      }, {
        key: "_dispose",
        value: function _dispose() {
          this.dispose(), _get(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "_dispose", this).call(this);
        }
      }]);

      return a;
    }(r.default);

    exports.default = a;
  }, { "./toolBarFactoryHelper": 174, "./storeInstance": 201, "../../core/component-interface": 62 }], 203: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        e = require("./default-attrs"),
        i = require("./toolBarFactoryHelper"),
        o = require("./helper"),
        r = require("../../core/component-interface"),
        n = g(r);function g(t) {
      return t && t.__esModule ? t : { default: t };
    }var d = void 0;
    var s = function (_n$default6) {
      _inherits(s, _n$default6);

      function s() {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
      }

      _createClass(s, [{
        key: "configure",
        value: function configure(o, r, n) {
          var g = this.config;g.preId = o || 0, g.id = d, g.symbolList = [], g.groupRect = d, g.pId = r, g.chartId = n, (0, t.extend2)(g.btnConfig = {}, e.btnSpecAttr), (0, t.extend2)(g.groupConfig = {}, i.defaultGroupConf);
        }
      }, {
        key: "addSymbol",
        value: function addSymbol(t, e) {
          var i = this.config.symbolList;e ? i.unshift(t) : i.push(t);
        }
      }, {
        key: "setConfiguaration",
        value: function setConfiguaration(t) {
          var e = this.config,
              i = t.buttons,
              r = t.group;i && (0, o.mergeConf)(i, e.btnConfig), r && (0, o.mergeConf)(r, e.groupConfig);
        }
      }, {
        key: "draw",
        value: function draw(t, e, o, r) {
          var n,
              g,
              d,
              s,
              a,
              h,
              f,
              u,
              p,
              l = this.config,
              c = l.preId,
              C = l.symbolList,
              b = l.groupConfig,
              m = l.btnConfig,
              I = e.x,
              y = e.y,
              v = 0,
              w = 0,
              P = Number.NEGATIVE_INFINITY,
              x = i.ToolBarFactoryHelper.getComponentPool(l.chartId),
              _ = x.getKeys();for (p = l.id = c.toString() + o, n = (u = x.getComponent(l.id, l.pId, _.KEY_GROUP))("toolbar-group" + p, t), u = x.getComponent(l.id, l.pId, _.KEY_RECT), a = l.groupRect = u(n).attr({ height: 0, width: 0, x: I, y: y }), I += b.hPadding, y += b.vPadding, w += b.hPadding, v += b.vPadding, g = 0, d = C.length; g < d; g++) {
            s = C[g], r || s._setConfiguaration(m), P < (h = s.draw(I, y, { parentLayer: n, isResize: r }).getBBox()).height && (P = h.height), I += h.width + (f = m.spacing);
          }return w += I + b.hPadding - e.x - f - b.offsetAdjustment, v += P + b.vPadding + b.offsetAdjustment, isFinite(v) || (v = 0), isFinite(w) || (w = 0), a.attr({ height: v, width: w }).attr({ fill: b.fill, r: b.radius, stroke: b.borderColor, "stroke-width": b.borderThickness }), { height: (h = a.getBBox()).height, width: h.width };
        }
      }, {
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
          var t,
              e,
              i,
              o,
              r = Number.NEGATIVE_INFINITY,
              n = this.config,
              g = n.symbolList,
              d = 0,
              s = 0,
              a = r,
              h = 0;for (e = 0, i = g.length; e < i; e++) {
            (t = g[e])._setConfiguaration(n.btnConfig), s += (o = t.getLogicalSpace()).width + n.btnConfig.spacing, h += o.width, a = a < o.height ? o.height : a;
          }return h ? (a !== r && s && (s -= n.btnConfig.spacing - 2 * n.groupConfig.hPadding - n.groupConfig.offsetAdjustment, d = a + 2 * n.groupConfig.vPadding + n.groupConfig.offsetAdjustment), { width: s, height: d }) : { width: 0, height: 0 };
        }
      }, {
        key: "dispose",
        value: function dispose() {
          for (var t = this.config, e = t.symbolList, i = 0, o = e.length; i < o; i++) {
            e[i].dispose();
          }e.length = 0, t.groupRect && t.groupRect.remove();
        }
      }]);

      return s;
    }(n.default);

    exports.default = s;
  }, { "../lib/lib": 20, "./default-attrs": 173, "./toolBarFactoryHelper": 174, "./helper": 170, "../../core/component-interface": 62 }], 204: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../lib/lib-graphics"),
        t = require("./symbolclass"),
        r = l(t),
        i = require("./toolBarFactoryHelper"),
        o = require("./helper");function l(e) {
      return e && e.__esModule ? e : { default: e };
    }var h = void 0,
        s = "Internal_CB",
        a = (0, e.convertColor)("FFFFFF", 0);
    var n = function (_r$default3) {
      _inherits(n, _r$default3);

      function n() {
        _classCallCheck(this, n);

        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
      }

      _createClass(n, [{
        key: "configure",
        value: function configure(e, t, r, o, l) {
          _get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "configure", this).call(this, s);var a = this.config;a._id = "TB_CBSYMBOL" + (r || 0), a.symbol = s, a.text = { plaintext: e, node: h, style: i.defTextStyle }, a.pId = o, a.chartId = l, a.checked = !!t, a.textNode = h, a.interPadding = 3, a.pos = {}, a.regSymbolCmd = h, a.checked ? this.check() : this.uncheck();
        }
      }, {
        key: "check",
        value: function check() {
          var e = this.config,
              t = e.pos;e.checked = !0, e.regSymbolCmd = o.RSymbolFns.CB_CHECKED, e.node && (this.registerSymbol(e.regSymbolCmd), e.node.attr({ "button-repaint": [t.x, t.y, t.width, t.height, t.r] }));
        }
      }, {
        key: "uncheck",
        value: function uncheck() {
          var e = this.config,
              t = e.pos;e.checked = !1, e.regSymbolCmd = o.RSymbolFns.CB_NOT_CHECKED, e.node && (this.registerSymbol(e.regSymbolCmd), e.node.attr({ "button-repaint": [t.x, t.y, t.width, t.height, t.r] }));
        }
      }, {
        key: "click",
        value: function click() {
          this.config.checked ? this.uncheck() : this.check();
        }
      }, {
        key: "attachEventHandlers",
        value: function attachEventHandlers(e) {
          var t = this;r.default.prototype.attachEventHandlers.apply(this, [e, { click: function click() {
              t.click();
            } }]);
        }
      }, {
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
          var e,
              t,
              o = i.ToolBarFactoryHelper.getOptions(this.config.chartId).chart,
              l = this.config,
              h = o.linkedItems.smartLabel,
              s = l.text.style;return t = r.default.prototype.getLogicalSpace.apply(this, arguments), h.useEllipsesOnOverflow(o.config.useEllipsesWhenOverflow), h.setStyle(s), { width: (e = h.getSmartText(l.text.plaintext)).width + l.interPadding + t.width, height: Math.max(t.height, e.height) };
        }
      }, {
        key: "draw",
        value: function draw(e, t, o) {
          var l,
              h,
              s,
              n,
              d,
              c,
              g = this.config,
              p = g.conf,
              y = i.ToolBarFactoryHelper.getOptions(g.chartId).chart,
              u = y.getFromEnv("smartLabel"),
              m = y.getFromEnv("color-manager"),
              f = g.text.plaintext,
              x = i.ToolBarFactoryHelper.getComponentPool(g.chartId),
              b = x.getKeys();return this.registerSymbol(g.regSymbolCmd), l = g.node = r.default.prototype.draw.apply(this, arguments), g.pos = { x: e, y: t, width: p.width, height: p.height, r: p.radius }, (d = g.text.style).fill = d.fill || "#" + m.getColor("baseFontColor"), u.useEllipsesOnOverflow(y.config.useEllipsesWhenOverflow), u.setStyle(d), s = u.getSmartText(f), h = l.getBBox(), c = x.getComponent(g._id, g.pId, b.KEY_TEXT), g.textNode = c(o.parentLayer).attr({ text: f, x: h.x + h.width + s.width / 2 + g.interPadding, y: h.y + h.height / 2 }).css(d), n = p.height > s.height ? p.height : s.height, (c = x.getComponent(g._id, g.pId, b.KEY_RECT))(o.parentLayer).attr({ height: n, width: h.width + s.width + g.interPadding, x: e, y: t, stroke: a });
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var e = this.config;e.textNode && e.textNode.remove(), e.textNode = h, _get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "dispose", this).call(this);
        }
      }]);

      return n;
    }(r.default);

    exports.default = n;
  }, { "../lib/lib-graphics": 21, "./symbolclass": 171, "./toolBarFactoryHelper": 174, "./helper": 170 }], 205: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        e = require("./symbolclass"),
        r = n(e),
        o = require("./default-attrs"),
        l = require("./toolBarFactoryHelper"),
        a = require("./helper");function n(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = void 0;
    var c = function (_r$default4) {
      _inherits(c, _r$default4);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }

      _createClass(c, [{
        key: "configure",
        value: function configure(e, r, l, a) {
          var n = this.config;n._id = "TB_SCROLLER" + (r || 0), n.pId = l, n.conf = {}, n.userConf = o.scrollerSpecAttr, n.chartId = a, this.setConfiguaration(e), n.evt = { tooltext: s, click: t.stubFN, hover: [t.stubFN, t.stubFN] };
        }
      }, {
        key: "getName",
        value: function getName() {
          return "scroller";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "scroller";
        }
      }, {
        key: "setConfiguaration",
        value: function setConfiguaration(t) {
          var e = this.config,
              r = l.ToolBarFactoryHelper.getOptions(e.chartId).chart.getFromEnv("color-manager");o.scrollerSpecAttr.color || (o.scrollerSpecAttr.color = "#" + r.getColor("altHGridColor")), (0, a.mergeConf)(o.scrollerSpecAttr, e.conf), (0, a.mergeConf)(t, e.conf);
        }
      }, {
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
          var t = this.config.conf,
              e = {};return (0, a.mergeConf)(o.scrollerSpecAttr, e), (0, a.mergeConf)(e, t), r.default.prototype.getLogicalSpace.call(this);
        }
      }, {
        key: "getDefaultLayer",
        value: function getDefaultLayer() {
          var t = this.config,
              e = l.ToolBarFactoryHelper.getComponentPool(t.chartId),
              r = e.getKeys();return e.getComponent(t._id, t.pId, r.KEY_GROUP)("scroll");
        }
      }, {
        key: "draw",
        value: function draw() {
          var e,
              r,
              n,
              s,
              c,
              i,
              d,
              u,
              p,
              g,
              f,
              h,
              y,
              C,
              m,
              v,
              S,
              E,
              _,
              L,
              F = this.config,
              b = F.conf,
              w = l.ToolBarFactoryHelper.getComponentPool(F.chartId),
              H = w.getKeys(),
              I = {},
              B = {};return 1 === arguments.length ? (e = (v = arguments[0]).x, r = v.y, d = v.parentLayer, m = !!v.sepLayer) : (e = arguments[0], r = arguments[1], c = arguments[2], b && c ? (0, a.mergeConf)(c, b) : c = {}, d = c.parentLayer, m = !!c.sepLayer, v = b), (0, a.mergeConf)(o.scrollerSpecAttr, B), v.isHorizontal ? delete B.width : delete B.height, (0, a.mergeConf)(B, v, !0), r += v.padding, n = v.height, s = v.width, i = v.isHorizontal, "scroll-repaint", E = v.startPercent, u = Math.max(v.scrollRatio, .01), p = v.showButtons, g = v.displayFlat, f = v.fullCanvasWidth, h = v.windowedCanvasWidth, y = v.color, C = v.roundEdges, L = (0, t.pluckNumber)(v.scrollPosition, E, 0), I["scroll-repaint"] = [e, r, s, n], d = d || this.getDefaultLayer(), _ = w.getComponent(F._id, F.pId, H.KEY_RECT), S = m ? _("scroll-child") : d, _ = w.getComponent(F._id, F.pId, H.KEY_SCROLLER), F.node = _(e, r, s, n, i, { scrollPosition: L, displayStyleFlat: g, showButtons: p }, S), F.node.data("fullCanvasWidth", f).data("windowedCanvasWidth", h).attr({ "scroll-ratio": u, fill: y, "stroke-width": 1, "scroll-position": L, r: C ? 2 : 0 }).scroll(F.evt), w.getCreationStatus() || (F.node.undrag(), F.node.attr(I), F.node.attr({ "scroll-display-style": g ? "flat" : "3d" }).scroll(F.evt)), F.node;
        }
      }, {
        key: "attachEventHandlers",
        value: function attachEventHandlers(t) {
          var e = this.config.evt;return t && (t.scroll && "function" == typeof t.scroll && (e.scroll = t.scroll), t.scrollStart && "function" == typeof t.scrollStart && (e.scrollStart = t.scrollStart), t.scrollEnd && "function" == typeof t.scrollEnd && (e.scrollEnd = t.scrollEnd)), _get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "attachEventHandlers", this).call(this, arguments), this;
        }
      }]);

      return c;
    }(r.default);

    c.registerSymbol = s, c._setConfiguaration = t.stubFN, exports.default = c;
  }, { "../lib/lib": 20, "./symbolclass": 171, "./default-attrs": 173, "./toolBarFactoryHelper": 174, "./helper": 170 }], 175: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.ToolbarFactory = void 0;var e = require("./storeInstance"),
        o = require("./horizontalToolbar"),
        r = y(o),
        t = require("./componentgroup"),
        l = y(t),
        n = require("./symbolclass"),
        a = y(n),
        u = require("./checkboxSymbol"),
        s = y(u),
        c = require("./scroller"),
        i = y(c),
        b = require("./symbolWithContext"),
        d = y(b);function y(e) {
      return e && e.__esModule ? e : { default: e };
    }var f = { getAPIInstances: function getAPIInstances() {
        return { HorizontalToolbar: r.default, ComponentGroup: l.default, Symbol: a.default, CheckboxSymbol: s.default, Scroller: i.default, SymbolWithContext: d.default, getInstanceById: e.StoreInstance.getInstanceById };
      } };exports.ToolbarFactory = f;
  }, { "./storeInstance": 201, "./horizontalToolbar": 202, "./componentgroup": 203, "./symbolclass": 171, "./checkboxSymbol": 204, "./scroller": 205, "./symbolWithContext": 142 }], 210: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var e = function e() {
      _classCallCheck(this, e);

      this.pool = {};
    };

    exports.default = e;
  }, {}], 176: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./pool"),
        t = i(e),
        n = require("../../core/component-interface"),
        o = i(n);function i(e) {
      return e && e.__esModule ? e : { default: e };
    }var r = window.document,
        a = "div";
    var c = function (_o$default) {
      _inherits(c, _o$default);

      function c() {
        _classCallCheck(this, c);

        return _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }

      _createClass(c, [{
        key: "configure",
        value: function configure(e, n) {
          var o = void 0,
              i = void 0,
              s = void 0,
              u = void 0,
              l = void 0,
              p = this,
              f = e.getFromEnv("animationManager"),
              h = p.config;s = h.elemTypes = { KEY_RECT: "rect", KEY_TEXT: "text", KEY_GROUP: "group", KEY_SCROLLER: "scroller", KEY_BUTTON: "button", KEY_PATH: "path", KEY_DIV: "div" }, u = h.cachedState = {}, (o = h.actions = {})[s.KEY_DIV] = function () {
            return r.createElement(a);
          }, o[s.KEY_RECT] = function (e) {
            return f.setAnimation({ el: "rect", container: e, component: p });
          }, o[s.KEY_TEXT] = function (e) {
            return f.setAnimation({ el: "text", container: e, component: p });
          }, o[s.KEY_GROUP] = function (e, t) {
            return f.setAnimation({ el: "group", attr: { name: e }, container: t, component: p });
          }, o[s.KEY_SCROLLER] = function (e, t, n, o, i, r, a) {
            return f.setAnimation({ el: "scroller", attr: { scroller: [e, t, n, o, i, r, a] }, component: p });
          }, o[s.KEY_BUTTON] = function (e, t, n, o, i, r) {
            return f.setAnimation({ el: "button", attr: { button: [e, t, n, o, i, r] }, component: p });
          }, o[s.KEY_PATH] = function (e, t) {
            f.setAnimation({ el: "path", container: t, attr: { path: e }, component: p });
          }, l = h.cache = u[n] || (u[n] = {}), c._hideRecursive(l.pool), l.initialized || ((i = l.pool = new t.default().pool)._tmp = n, l.initialized = !0);
        }
      }, {
        key: "emptyPool",
        value: function emptyPool(e) {
          var t;(t = this.config.cachedState[e] || {}).pool && (t.pool = {});
        }
      }, {
        key: "isInitialized",
        value: function isInitialized() {
          return this.config.initialized;
        }
      }, {
        key: "getCreationStatus",
        value: function getCreationStatus() {
          return this.config.newCreationDataFlag;
        }
      }, {
        key: "hideRecursive",
        value: function hideRecursive(e) {
          var t;t = this.config.cachedState[e] || {}, c._hideRecursive(t.pool);
        }
      }, {
        key: "getKeys",
        value: function getKeys() {
          return this.config.elemTypes;
        }
      }, {
        key: "getComponent",
        value: function getComponent(e, t, n, o) {
          var i,
              r,
              a,
              c = this.config,
              s = c.cachedState[t || 0] || {},
              u = s.pool,
              l = u[e],
              p = c.actions,
              f = 0;return l || (l = u[e] = {}), (r = l[n]) && !(r instanceof Array) && !r.removed || r instanceof Array && 0 < r.length ? function () {
            return s.newCreationDataFlag = !1, o ? (a = r[f++]) && !a.removed ? a.show() : r[f] = p[n].apply(s, arguments) : r.show && "function" == typeof r.show && r.show() || r;
          } : function () {
            return s.newCreationDataFlag = !0, o ? (i = l[n] || (l[n] = []), r = p[n].apply(s, arguments), i.push(r), r.show && "function" == typeof r.show && r.show() || r) : l[n] = p[n].apply(s, arguments);
          };
        }
      }], [{
        key: "_hideRecursive",
        value: function _hideRecursive(e) {
          var t, n, o, i, r, a;if (e) for (t in e) {
            for (n in o = e[t]) {
              if ((i = o[n]) instanceof Array) for (r = 0, a = i.length; r < a; r++) {
                i[r].hide && i[r].hide();
              } else i.hide && i.hide();
            }
          }
        }
      }]);

      return c;
    }(o.default);

    exports.default = c;
  }, { "./pool": 210, "../../core/component-interface": 62 }], 144: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib"),
        o = require("../lib/lib-graphics"),
        r = require("./toolBarFactoryHelper"),
        e = require("./toolbarFactory"),
        l = require("./componentPool"),
        c = p(l),
        n = require("./helper"),
        b = require("../../core/component-interface"),
        a = p(b),
        i = require("./default-attrs");function p(t) {
      return t && t.__esModule ? t : { default: t };
    }var u = 0;
    var s = function (_a$default2) {
      _inherits(s, _a$default2);

      function s() {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
      }

      _createClass(s, [{
        key: "getICount",
        value: function getICount() {
          return this.config._iCount;
        }
      }, {
        key: "getName",
        value: function getName() {
          return "toolbox";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "horizontalToolbox";
        }
      }, {
        key: "configure",
        value: function configure(r) {
          var e,
              l,
              c,
              n,
              b,
              a = this.config;a.onceInitialized || (a.onceInitialized = !1), a.ALIGNMENT_HORIZONTAL = parseInt("0", 2), a.ALIGNMENT_VERTICAL = parseInt("1", 2), a.POSITION_TOP = parseInt("00", 2), a.POSITION_RIGHT = parseInt("01", 2), a.POSITION_BOTTOM = parseInt("10", 2), a.POSITION_LEFT = parseInt("11", 2), this.getDefaultConfiguration = function () {
            return i.btnSpecAttr;
          }, a.onceInitialized || (a._options = r, a._chart = r.chart, a._iCount = ++u, a.onceInitialized = !0, a.chartId = r.chart.getFromEnv("chartInstance").id), n = a._chart.getFromEnv("dataSource").chart, i.btnSpecAttr.scale = (0, t.pluckNumber)(n.toolbarbuttonscale, 1.15), i.btnSpecAttr.width = (0, t.pluckNumber)(n.toolbarbuttonwidth, t.touchEnabled ? 20 : 15), i.btnSpecAttr.height = (0, t.pluckNumber)(n.toolbarbuttonheight, t.touchEnabled ? 20 : 15), i.btnSpecAttr.radius = (0, t.pluckNumber)(n.toolbarbuttonradius, t.touchEnabled ? 4 : 2), i.btnSpecAttr.spacing = (0, t.pluckNumber)(n.toolbarbuttonspacing, 5), i.btnSpecAttr.fill = (0, o.convertColor)((0, t.pluck)(n.toolbarbuttoncolor, "ffffff")), i.btnSpecAttr.labelFill = (0, o.convertColor)((0, t.pluck)(n.toolbarlabelcolor, "cccccc")), i.btnSpecAttr.symbolFill = (0, o.convertColor)((0, t.pluck)(n.toolbarsymbolcolor, "ffffff")), i.btnSpecAttr.hoverFill = (0, t.pluck)(n.toolbarbuttonhovercolor), i.btnSpecAttr.stroke = (0, o.convertColor)((0, t.pluck)(n.toolbarbuttonbordercolor, "bbbbbb")), i.btnSpecAttr.symbolStroke = (0, o.convertColor)((0, t.pluck)(n.toolbarsymbolbordercolor, "9a9a9a")), i.btnSpecAttr.strokeWidth = (0, t.pluckNumber)(n.toolbarbuttonborderthickness, 1), i.btnSpecAttr.symbolStrokeWidth = (0, t.pluckNumber)(n.toolbarsymbolborderthickness, 1), b = i.btnSpecAttr.symbolPadding = (0, t.pluckNumber)(n.toolbarsymbolpadding, 5), i.btnSpecAttr.symbolHPadding = (0, t.pluckNumber)(n.toolbarsymbolhpadding, b), i.btnSpecAttr.symbolVPadding = (0, t.pluckNumber)(n.toolbarsymbolvpadding, b), e = "tr" === (e = i.btnSpecAttr.position = (0, t.pluck)(n.toolbarposition, "tr").toLowerCase()) || "rt" === e || "top right" === e || "right top" === e ? "tr" : "br" === e || "rb" === e || "bottom right" === e || "right bottom" === e ? "br" : "tl" === e || "lt" === e || "top left" === e || "left top" === e ? "tl" : "bl" === e || "lb" === e || "bottom left" === e || "left bottom" === e ? "bl" : "tr", l = i.btnSpecAttr.hAlign = "left" === (t.BLANKSTRING + n.toolbarhalign).toLowerCase() ? "l" : e.charAt(1), c = i.btnSpecAttr.vAlign = "bottom" === (t.BLANKSTRING + n.toolbarvalign).toLowerCase() ? "b" : e.charAt(0), i.btnSpecAttr.hDirection = (0, t.pluckNumber)(n.toolbarhdirection, "r" === l ? -1 : 1), i.btnSpecAttr.vDirection = (0, t.pluckNumber)(n.toolbarvdirection, "b" === c ? -1 : 1), i.btnSpecAttr.vMargin = (0, t.pluckNumber)(n.toolbarvmargin, 6), i.btnSpecAttr.hMargin = (0, t.pluckNumber)(n.toolbarhmargin, 10), n.toolbary && n.toolbarx ? (i.btnSpecAttr.x = (0, t.pluckNumber)(n.toolbarx), i.btnSpecAttr.y = (0, t.pluckNumber)(n.toolbary), delete i.btnSpecAttr.spaceNotHardCoded) : i.btnSpecAttr.spaceNotHardCoded = !0, i.scrollerSpecAttr.color = n.scrollcolor && (0, o.convertColor)(n.scrollcolor), i.scrollerSpecAttr.padding = (0, t.pluckNumber)(n.scrollpadding, 0), i.scrollerSpecAttr.height = (0, t.pluckNumber)(n.scrollheight, 12), i.scrollerSpecAttr.width = (0, t.pluckNumber)(n.scrollwidth, 12), i.scrollerSpecAttr.displayFlat = (0, t.pluckNumber)(n.flatscrollbars, 0), i.scrollerSpecAttr.scrollBar3DLighting = (0, t.pluckNumber)(n.scrollbar3dlighting, 1), i.scrollerSpecAttr.startPercent = Math.min(1, Math.max(0, parseFloat(n.scrolltoend) || 0)), i.scrollerSpecAttr.showButtons = !!(0, t.pluckNumber)(n.scrollshowbuttons, 1), i.scrollerSpecAttr.buttonPadding = (0, t.pluckNumber)(n.scrollbtnpadding, 0), i.contextMenuSpecAttr.baseFontFamily = (0, t.pluck)(n.basefont, "Verdana,sans"), i.contextMenuSpecAttr.baseFontSize = (0, t.pluckNumber)(n.basefontsize, 10), i.contextMenuSpecAttr.baseFontColor = (0, t.pluck)(n.basefontcolor, "595959");
        }
      }, {
        key: "getAPIInstances",
        value: function getAPIInstances(t) {
          var o,
              l = this.config,
              b = l._chart,
              a = {},
              i = l.componentPool = new c.default();switch (i.configure(b, l._iCount), r.ToolBarFactoryHelper.setComponentPool(i, l.chartId), r.ToolBarFactoryHelper.setOptions(l._options, l.chartId), o = e.ToolbarFactory.getAPIInstances(), t) {case l.ALIGNMENT_HORIZONTAL:
              a.Toolbar = o.HorizontalToolbar;break;case l.ALIGNMENT_VERTICAL:}return a.ComponentGroup = o.ComponentGroup, a.Symbol = o.Symbol, a.Scroller = o.Scroller, a.SymbolWithContext = o.SymbolWithContext, a.SymbolStore = n.SymbolStore, a.CheckboxSymbol = o.CheckboxSymbol, a;
        }
      }, {
        key: "clean",
        value: function clean() {
          var t = this.config;t.componentPool.hideRecursive(t._iCount);
        }
      }]);

      return s;
    }(a.default);

    exports.default = s;
  }, { "../lib/lib": 20, "../lib/lib-graphics": 21, "./toolBarFactoryHelper": 174, "./toolbarFactory": 175, "./componentPool": 176, "./helper": 170, "../../core/component-interface": 62, "./default-attrs": 173 }], 123: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.configurer = exports._createToolBox = exports._drawDataset = void 0;var e = require("./basechart"),
        t = _(e),
        a = require("../_internal/factories/canvas"),
        n = _(a),
        o = require("../_internal/dependency-manager"),
        r = require("../_internal/components/caption"),
        i = _(r),
        l = require("../_internal/components/sub-caption"),
        s = _(l),
        c = require("../_internal/components/background"),
        g = _(c),
        h = require("../_internal/color-utils/colormanager"),
        d = _(h),
        u = require("../_internal/components/numberformatter"),
        p = _(u),
        m = require("../_internal/tool-box/symbolWithContext"),
        v = _(m),
        f = require("../_internal/misc/event-api"),
        C = require("../_internal/animation-rules/common-animation"),
        b = _(C),
        k = require("../_internal/lib/lib"),
        w = require("../_internal/lib/lib-graphics"),
        E = require("../_internal/lib/lib-attr"),
        N = require("../_internal/dom/dom-event"),
        F = _(N),
        T = require("../_internal/tool-box/toolbox"),
        M = _(T);function _(e) {
      return e && e.__esModule ? e : { default: e };
    }var S = (0, o.getDep)("redraphael", "plugin"),
        L = "VML" === S.type,
        x = "rgba(255,0,0," + (k.isIE ? .002 : 1e-6) + ")",
        D = Math.max,
        B = Math.min,
        I = Math.round,
        y = { datalabelclick: !0, connectorclick: !0, categoryclick: !0, processclick: !0, milestoneclick: !0, labelclick: !0, dataplotclick: !0 },
        P = k.preDefStr.SEVENTYSTRING,
        A = k.preDefStr.AUTOSTRING,
        R = "bold",
        G = "normal",
        H = "right",
        W = "createTouch" in window.document,
        z = W && !(window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints),
        O = "start",
        U = "end",
        V = function V(e, t, a) {
      return a.getFromEnv("animationManager").setAnimation({ el: "group", attr: e, container: t, state: "appearing", component: a, label: "group" });
    },
        q = function q(e) {
      var t,
          a = e.data,
          n = a.getFromEnv("chartInstance"),
          o = e.originalEvent,
          r = a.config,
          i = (0, k.getMouseCoordinate)(a.getFromEnv("chart-container"), o, a);n.ref && (t = (0, k.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv("chartWidth"), pixelWidth: a.getFromEnv("chartHeight"), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, i), a.fireChartInstanceEvent("chartclick", t), r.link && (!r.hotElemClicked || r.clickURLOverridesPlotLinks) && a.getFromEnv("linkClickFN").call({ link: r.link }), r.hotElemClicked = !1);
    },
        j = function j(e) {
      var t = e.type,
          a = e.data,
          n = a.getFromEnv("eventListeners");n || (n = [], a.addToEnv("eventListeners", n)), ("mouseover" === t || "touchstart" === t) && !1 === a.config.mouseStateIn && (a.config.mouseStateIn = !0, Y.onContainerRollOver(e), n.push(F.default.listen(L ? document : window, "mouseover", Y.winMouseHover, a)));
    };function $() {
      this.getFromEnv("chartMenuTools").reset(this.getFromEnv("toolbox"), this);var e,
          t,
          a,
          n,
          o,
          r,
          i,
          l,
          s,
          c,
          g,
          h,
          d,
          u = this,
          p = u.getFromEnv("chartMenuTools"),
          m = u.getFromEnv("chartInstance").id,
          v = p.get,
          f = p.set,
          C = this.components,
          b = u.config,
          w = u.getChildren("chartMenuBar"),
          E = u.getChildren("actionBar"),
          N = b.printOption.enabled,
          F = u.config.realTimeConfig || {};w && w.drawn || E && E.drawn || ((0, k.componentFactory)(u, M.default, "tb", 1, [{ graphics: u.graphics || (u.graphics = {}), chart: u, components: C }]), h = (e = u.getChildren("tb")[0]).getICount(), u.addToEnv("toolbox", e), !u.getFromEnv("toolBoxAPI") && u.addToEnv("toolBoxAPI", e.getAPIInstances(e.config.ALIGNMENT_HORIZONTAL)), s = (r = u.getFromEnv("toolBoxAPI")).SymbolWithContext, i = r.SymbolStore, l = r.ComponentGroup, c = r.Toolbar, e.idCount = e.idCount || 0, e.pId = h, a = e.getDefaultConfiguration(), i.register("ContextIcon", function (e, t, a) {
        var n = e,
            o = t,
            r = 2 * a,
            i = I(r / 4),
            l = .7 * I(r / 2),
            s = n - l,
            c = n + l,
            g = o + i,
            h = o - i;return ["M", s, o, "L", c, o, "M", s, g, "L", c, g, "M", s, h, "L", c, h];
      }), (d = new s()).configure("ContextIcon", e.idCount++, h, m), n = (t = d).getListRefernce(), u.addToEnv("chartMenuList", n), N && f([{ Print: { handler: function handler() {
            u.getFromEnv("chartInstance").print();
          }, action: "click" } }]), u._setRTmenu && u._setRTmenu(F.showRTmenuItem, F.useMessageLog), n.appendAsList(v()), (o = new l()).configure(e.idCount++, h, m), o.setConfiguaration({ buttons: a, group: { fill: x, borderColor: x } }), o.addSymbol(t), "t" === o.config.btnConfig.vAlign ? (g = new c(), w = u.attachChild(g, "chartMenuBar", !1), g.configure(e.idCount++, e.pId, m), w.addComponent(o)) : (g = new c(), w = u.attachChild(g, "actionBar", !1), g.configure(e.idCount++, e.pId, m), w.addComponent(o)));
    }function K() {
      this.getChildren("canvas")[0]._mapChildren(function (e) {
        e.syncDraw();
      });
    }function X(e) {
      var t = this;t.config.skipConfigureIteration = {}, t.parseChartAttr(e), t.createComponent(e), t._createToolBox(), t.setTooltipStyle(), t.configureChildren();
    }(0, o.addDep)({ name: "commonAnimation", type: "animationRule", extension: b.default });
    var Y = function (_t$default2) {
      _inherits(Y, _t$default2);

      _createClass(Y, [{
        key: "plotEventHandler",
        value: function plotEventHandler(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var a = arguments[2];
          var n = arguments[3];
          var o,
              r,
              i,
              l = this,
              s = t.type,
              c = (0, k.getMouseCoordinate)(l.getFromEnv("chart-container"), t, l),
              g = e.data("eventArgs") || n,
              h = (0, k.extend2)(c, g),
              d = l.fireGroupEvent,
              u = e.data("groupId"),
              p = function p() {
            t.FusionChartsPreventEvent = !0;
          };if ("index" in h && !("dataIndex" in h) && (h.dataIndex = h.index), "value" in h && !("dataValue" in h) && (h.dataValue = h.value), "dataplotrollover" === (a = (0, k.pluck)(a, "dataplotclick").toLowerCase()) ? (t.FusionChartsPreventEvent = !1, d ? (0, f.raiseEventGroup)(u, a, h, l.getFromEnv("chartInstance"), k.UNDEF, k.UNDEF, p) : l.fireChartInstanceEvent(a, h, k.UNDEF, k.UNDEF, p)) : d && !y[a] ? (0, f.raiseEventGroup)(u, a, h, l.getFromEnv("chartInstance")) : l.fireChartInstanceEvent(a, h), ("click" === s || "mouseup" === s || "touchend" === s) && /click/i.test(a)) {
            if (W && !z) {
              if (i = new Date().getTime(), e.lastClickTimeStamp && 400 > i - e.lastClickTimeStamp) return void (t && (t.originalEvent || t).preventDefault());e.lastClickTimeStamp = i;
            }r = (o = l.getFromEnv()) && o.linkClickFN, h.link && r && r.call({ link: h.link }, !0);
          }
        }
      }], [{
        key: "getName",
        value: function getName() {
          return "CommonAPI";
        }
      }]);

      function Y() {
        var _this20;

        _classCallCheck(this, Y);

        (_this20 = _possibleConstructorReturn(this, (Y.__proto__ || Object.getPrototypeOf(Y)).call(this)), _this20), _this20.addToEnv("stringConstants", { COMPONENT: "component", CANVAS: "canvas", CAPTION: "caption" }), _this20.addToEnv("chartMenuTools", Y.chartMenuTools()), _this20.addToEnv("getMouseCoordinate", k.getMouseCoordinate), _this20._drawDataset = K, _this20.config.mouseStateIn = !1, _this20.registerFactory("canvas", n.default);return _this20;
      }

      _createClass(Y, [{
        key: "getName",
        value: function getName() {
          return "Cartesian";
        }
      }, {
        key: "preConfigure",
        value: function preConfigure(e) {
          var t = this.getFromEnv("number-formatter");this.addToEnv("chart-attrib", e.chart), t ? t.configure() : this.addToEnv("number-formatter", new p.default(this)), _get(Y.prototype.__proto__ || Object.getPrototypeOf(Y.prototype), "preConfigure", this).call(this, e);
        }
      }, {
        key: "setDefaults",
        value: function setDefaults() {
          _get(Y.prototype.__proto__ || Object.getPrototypeOf(Y.prototype), "setDefaults", this).call(this);var e = this.getFromEnv("number-formatter");e && e.setDefaults && e.setDefaults();
        }
      }, {
        key: "getType",
        value: function getType() {
          return "chartAPI";
        }
      }, {
        key: "parseChartAttr",
        value: function parseChartAttr(e) {
          var t = Math.abs;var a = void 0,
              n = void 0,
              o = void 0,
              r = void 0,
              i = void 0,
              l = void 0,
              s = void 0,
              c = void 0,
              g = void 0,
              h = void 0,
              u = void 0,
              p = void 0,
              m = void 0,
              v = void 0,
              f = this,
              C = e || f.getFromEnv("dataSource"),
              b = f.config.is3D,
              N = b ? k.chartPaletteStr.chart3D : k.chartPaletteStr.chart2D,
              F = f.isBar,
              T = f.getFromEnv("color-manager");T || (T = new d.default(f), f.addToEnv("color-manager", T)), C.chart = C.chart || C.graph || C.map || {}, delete C.map, delete C.graph, (a = C.chart) || (a = C.chart = {}), n = f.config || (f.config = {}), (0, E.parseConfiguration)(a, n, {}, { showvalues: !0 }), n.showValues = (0, k.pluckNumber)(a.showvalues, n.showvalues), n.viewPortConfig = { scaleY: 1, scaleX: 1, x: 0, y: 0 }, b && (F ? (n.xDepth = 5, n.yDepth = 5) : (n.xDepth = 10, n.yDepth = 10), n.showCanvasBase = v = !!(0, k.pluckNumber)(a.showcanvasbase, 1), n.canvasBasePadding = (0, k.pluckNumber)(a.canvasbasepadding, 2), n.canvasBaseDepth = v ? (0, k.pluckNumber)(a.canvasbasedepth, 10) : 0, n.canvasBgDepth = (0, k.pluckNumber)(a.canvasbgdepth, 3)), T && T.configure(), n.placeAxisLabelsOnTop = (0, k.pluckNumber)(a.placexaxislabelsontop, 0), n.enableAnimation = (0, k.pluckNumber)(a.animation, a.defaultanimation, 1), n.showToolTip = (0, k.pluckNumber)(a.showtooltip, 1), n.printOption = { enabled: (0, k.pluckNumber)(a.printshowbutton, a.showprintmenuitem, 0) }, n.drawCrossLineOnTop = (0, k.pluckNumber)(a.drawcrosslineontop, 1), s = n.style = {}, f.addToEnv("style", s), n.textDirection = "1" === a.hasrtltext ? "rtl" : k.BLANKSTRING, s.inCanfontFamily = o = (0, k.pluck)(a.basefont, "Verdana,sans"), s.inCanfontSize = r = (0, k.pluckFontSize)(a.basefontsize, 10), s.inCancolor = i = (0, k.pluck)(a.basefontcolor, T.getColor(N.baseFontColor)), s.outCanfontFamily = (0, k.pluck)(a.outcnvbasefont, o), s.fontSize = l = (0, k.pluckFontSize)(a.outcnvbasefontsize, r), s.outCanfontSize = l + k.PXSTRING, s.outCancolor = (0, k.pluck)(a.outcnvbasefontcolor, i).replace(/^#? ([a-f0-9]+)/gi, "#$1"), s.baseFontSize = r, s.inCanfontSize = r + k.PXSTRING, s.inCancolor = i.replace(/^#? ([a-f0-9]+)/gi, "#$1"), s.inCanvasStyle = h = { fontFamily: o, fontSize: r, color: i }, s.inCanLineHeight = u = (0, k.setLineHeight)(h), m = (m = (0, k.getFirstValue)(a.valuebordercolor, k.BLANKSTRING)) ? (0, w.convertColor)(m, (0, k.pluckNumber)(a.valueborderalpha, a.valuealpha, 100)) : k.BLANKSTRING, n.reverseXAxis = f.config.allowreversexaxis && (0, k.pluckNumber)(a.reversexaxis, 0), n.showBorder = (0, k.pluckNumber)(a.showborder, b ? 0 : 1), n.borderWidth = D(n.showBorder ? (0, k.pluckNumber)(a.borderthickness, 1) : 0, 0), n.useplotgradientcolor = "" === a.plotgradientcolor ? f.useplotgradientcolor || 0 : n.useplotgradientcolor, n.valuefontbold = (0, k.pluckNumber)(a.valuefontbold, n.valuefontbold), n.dataLabelStyle = p = { fontFamily: (0, k.pluck)(a.valuefont, o), fontSize: (0, k.pluck)(a.valuefontsize, (0, k.pInt)(r, 10)) + k.PXSTRING, lineHeight: u, color: (0, w.convertColor)((0, k.pluck)(a.valuefontcolor, i), (0, k.pluckNumber)(a.valuefontalpha, a.valuealpha, 100)), fontWeight: n.valuefontbold ? R : G, fontStyle: (0, k.pluckNumber)(a.valuefontitalic) ? "italic" : G, border: m || a.valuebgcolor ? (0, k.pluckNumber)(a.valueborderthickness, 1) + "px solid" : k.BLANKSTRING, borderColor: m, borderThickness: (0, k.pluckNumber)(a.valueborderthickness, 1), borderPadding: (0, k.pluckNumber)(a.valueborderpadding, 2), borderRadius: (0, k.pluckNumber)(a.valueborderradius, 0), backgroundColor: a.valuebgcolor ? (0, w.convertColor)(a.valuebgcolor, (0, k.pluckNumber)(a.valuebgalpha, a.valuealpha, 100)) : k.BLANKSTRING, borderDash: (0, k.pluckNumber)(a.valueborderdashed, 0) ? (0, k.getDashStyle)((0, k.pluckNumber)(a.valueborderdashlen, 4), (0, k.pluckNumber)(a.valueborderdashgap, 2)) : k.DASH_DEF }, (0, k.setLineHeight)(p), n.legendposition = (0, k.pluck)(a.legendposition, k.POSITION_BOTTOM), n.alignLegendWithCanvas = (0, k.pluckNumber)(a.alignlegendwithcanvas, 1), n.origMarginTop = (0, k.pluckNumber)(a.charttopmargin, f.chartTopMargin, 15), n.origMarginLeft = (0, k.pluckNumber)(a.chartleftmargin, f.chartLeftMargin, 15), n.origMarginBottom = (0, k.pluckNumber)(a.chartbottommargin, f.chartBottomMargin, 15), n.origMarginRight = (0, k.pluckNumber)(a.chartrightmargin, f.chartRightMargin, 15), n.origCanvasLeftMargin = (0, k.pluckNumber)(a.canvasleftmargin, 0), n.origCanvasRightMargin = (0, k.pluckNumber)(a.canvasrightmargin, 0), n.origCanvasTopMargin = (0, k.pluckNumber)(a.canvastopmargin, 0), n.origCanvasBottomMargin = (0, k.pluckNumber)(a.canvasbottommargin, 0), n.minChartWidthPercent = (0, k.pluckNumber)(a.minchartwidth, f.minChartWidth, 50) / 100, n.minChartHeightPercent = (0, k.pluckNumber)(a.minchartheight, f.minChartHeight, 50) / 100, n.minCanvasWidthPercent = (0, k.pluckNumber)(a.mincanvaswidth, f.minCanvasWidth, 60) / 100, n.minCanvasHeightPercent = (0, k.pluckNumber)(a.mincanvasheight, f.minCanvasHeight, 30) / 100, c = (0, k.pluck)(a.zeroplanecolor, a.divlinecolor, T.getColor(N.divLineColor)), g = (0, k.pluck)(a.zeroplanealpha, a.divlinealpha, T.getColor("divLineAlpha")), n.zeroPlaneColor = (0, w.convertColor)(c, g), n.zeroPlaneBorderColor = (0, w.convertColor)((0, k.pluck)(a.zeroplanebordercolor, c), (0, k.pluckNumber)(a.zeroplaneshowborder, 1) ? g : 0), n.zeroPlaneShowBorder = (0, k.pluckNumber)(a.zeroplaneshowborder, 1), n.realtimeEnabled = (0, k.pluckNumber)(a.realtimeenabled, f.isRealTime), n.showLegend = (0, k.pluckNumber)(a.showlegend, f.showLegend, 1), n.link = a.clickurl, n.transposeAxis = (0, k.pluckNumber)(f.transposeAxis, a.transposeaxis, 0), n.useEllipsesWhenOverflow = (0, k.pluckNumber)(a.useellipseswhenoverflow, a.useellipsewhenoverflow, 1), n.drawTrendRegion = (0, k.pluckNumber)(a.drawcrossline, 0), n.plotcolorintooltip = (0, k.pluckNumber)(a.plotcolorintooltip, f.config.singleseries ? 0 : 1), n.plotbinsize = B((0, k.pluckNumber)(a.plotbinsize, f.plotbinsize, .5), 1), n.labelbinsize = B((0, k.pluckNumber)(a.labelbinsize, 1), 1), n.labelbinsize = n.plotbinsize > n.labelbinsize ? n.plotbinsize : n.labelbinsize, n.enableMouseOutEvent = (0, k.pluckNumber)(a.enablemouseoutevent, f.enableMouseOutEvent, 1), n.plotSpacePercent = Math.max((0, k.pluckNumber)(a.plotspacepercent, f.plotSpacePercent), 0), n.maxColWidth = t((0, k.pluckNumber)(a.maxcolwidth, 50)), n.maxBarHeight = t((0, k.pluckNumber)(a.maxbarheight, 50)), n.overlapColumns = (0, k.pluckNumber)(a.overlapcolumns, a.overlapbars, n.is3D ? 0 : 1), n.plotPaddingPercent = a.plotpaddingpercent, n.tooltipgrayoutcolor = (0, k.pluck)(a.tooltipgrayoutcolor, k.preDefStr.colors.AAAAAA), n.clickURLOverridesPlotLinks = (0, k.pluckNumber)(a.clickurloverridesplotlinks, 0), f.addToEnv("chartConfig", n), f.addToEnv("linkClickFN", (0, k.getLinkAction)(f.getFromEnv("dataSource"), f)), f.addToEnv("dataLabelStyle", p);
        }
      }, {
        key: "createComponent",
        value: function createComponent() {
          var e = void 0,
              t = this;e = t.config.skipConfigureIteration, t.createBaseComponent(), (0, k.componentFactory)(t, i.default, "caption"), e.caption = !0, (0, k.componentFactory)(t, s.default, "subCaption"), e.subCaption = !0, (0, k.componentFactory)(t, g.default, "background"), e.background = !0, t._createConfigurableComponents && t._createConfigurableComponents(), t.config.realtimeEnabled && t._realTimeConfigure && t._realTimeConfigure();
        }
      }, {
        key: "configureChildren",
        value: function configureChildren() {
          var e = this;e._mapChildren(function (t) {
            !t.getState("removed") && e.config.skipConfigureIteration[t.getName()] && t.configure && t.configure();
          });
        }
      }, {
        key: "_createToolBox",
        value: function _createToolBox() {
          $.call(this);
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes(e) {
          X.call(this, e);
        }
      }, {
        key: "setTooltipStyle",
        value: function setTooltipStyle() {
          var e = this.config;this.getFromEnv("toolTipController").setStyle({ bgColor: (0, w.convertColor)(e.tooltipbgcolor || "FFF", e.tooltipbgalpha || 100), rawBgColor: (e.tooltipbgcolor || "FFF").replace(/\s+/g, "").replace(/^#?([a-f0-9]+)/gi, "#$1"), fontColor: (e.tooltipcolor || e.basefontcolor || "545454").replace(/\s+/g, "").replace(/^#?([a-f0-9]+)/gi, "#$1"), borderColor: (0, w.convertColor)(e.tooltipbordercolor || "666", e.tooltipborderalpha || 100), rawBorderColor: (e.tooltipbordercolor || "666").replace(/\s+/g, "").replace(/^#?([a-f0-9]+)/gi, "#$1"), bgAlpha: (0, k.pluckNumber)(e.tooltipbgalpha, 100), borderThickness: (0, k.pluckNumber)(e.tooltipborderthickness, 1), showToolTipShadow: (0, k.pluckNumber)(e.showtooltipshadow, e.showshadow, 1), borderRadius: (0, k.pluckNumber)(e.tooltipborderradius, 0), "font-size": e.basefontsize || 10, "font-family": e.basefont || this.getFromEnv("style").inCanfontFamily, padding: (0, k.pluckNumber)(e.tooltippadding || 3), borderAlpha: (0, k.pluckNumber)(e.tooltipborderalpha, 100) });
        }
      }, {
        key: "__setDefaultConfig",
        value: function __setDefaultConfig() {
          _get(Y.prototype.__proto__ || Object.getPrototypeOf(Y.prototype), "__setDefaultConfig", this).call(this);var e = this.config;e.valuefontbold = 0, e.stickytracking = 1, e.usemessagelog = 0, e.zeroplanethickness = k.UNDEF, e.animationeffect = "linear", e.showshadow = 1, e.showhovereffect = k.UNDEF, e.plothovereffect = k.UNDEF, e.anchorhovereffect = k.UNDEF, e.plotborderdashed = k.UNDEF, e.stack100percent = k.UNDEF, e.showpercentvalues = k.UNDEF, e.showpercentintooltip = k.UNDEF, e.plotbordercolor = k.UNDEF, e.showtooltip = 1, e.seriesnameintooltip = 1, e.rotatevalues = 0, e.minimizetendency = 0, e.plotfillangle = 270, e.valuepadding = 2, e.useplotgradientcolor = 1, e.plotborderthickness = 1, e.plotfillalpha = P, e.showvalues = 1, e.valueposition = A, e.drawcrossline = k.UNDEF, e.tooltipsepchar = ", ", e.usedataplotcolorforlabels = 0, e.placevaluesinside = 0, e.showplotborder = 1, e.use3dlighting = 1, e.useroundedges = 0, e.plotspacepercent = 20, e.plotpaddingpercent = k.UNDEF, e.plotfillratio = k.UNDEF, e.maxcolwidth = 50, e.plotborderdashlen = 5, e.plotborderdashgap = 4, e.useScaleRecursively = !0, e.formatnumberscale = 1, e.decimals = 2, e.decimalprecision = 10, e.tooltipbgcolor = "FFF", e.tooltipcolor = k.UNDEF, e.tooltipbordercolor = "666", e.tooltipbgalpha = 100, e.tooltipborderthickness = 1, e.showtooltipshadow = k.UNDEF, e.basefontsize = 10, e.basefont = "Verdana, sans", e.tooltipborderradius = 0, e.tooltippadding = 3, e.tooltipborderalpha = 100;
        }
      }, {
        key: "configure",
        value: function configure(e) {
          e.chart = e.chart || e.graph || e.map || {}, _get(Y.prototype.__proto__ || Object.getPrototypeOf(Y.prototype), "configure", this).call(this, e);
        }
      }, {
        key: "_checkInvalidData",
        value: function _checkInvalidData() {
          var e = this,
              t = e.getFromEnv("dataSource"),
              a = e.getFromEnv("chartInstance");if (!(e.isWidget || e.isMap || t.data && 0 !== t.data.length || t.dataset || t.value || t.lineset || t.annotations || t.category || t.tasks || t.process || t.axis)) return e.setChartMessage(), e.drawChartMessage(), a.__state.dataReady = !1, a.jsVars.hasNativeMessage = !0, a.jsVars.drawCount += 1, !0;
        }
      }, {
        key: "_checkInvalidSpecificData",
        value: function _checkInvalidSpecificData() {
          var e = this.getFromEnv("dataSource"),
              t = e.dataset,
              a = e.categories;if (!t || !a || 0 === a.length || !a[0].category) return !0;
        }
      }, {
        key: "setChartEvents",
        value: function setChartEvents() {
          var e = this,
              t = e.getFromEnv("eventListeners"),
              a = e.getFromEnv("dataSource"),
              n = a && a.chart,
              o = e.getFromEnv("paper") && e.getFromEnv("paper").canvas,
              r = e.getFromEnv("chart-container"),
              i = n && (0, k.pluckNumber)(n.enablechartmousemoveevent, 0);(n || o) && (!t && (t = [], e.addToEnv("eventListeners", t)), F.default.unlisten(r, "click", q), t.push(F.default.listen(r, "click", q, e)), F.default.unlisten(o, "mouseover", j, e), F.default.unlisten(o, "touchstart", j, e), F.default.unlisten(o, "mouseout", j, e), F.default.unlisten(o, "touchend", j, e), t.push(F.default.listen(o, "mouseover touchstart mouseout touchend", j, e)), F.default.unlisten(r, "mousemove", Y.onContainerMouseMove, e), F.default.unlisten(r, "touchmove", Y.onContainerMouseMove, e), i && t.push(F.default.listen(r, "mousemove touchmove", Y.onContainerMouseMove, e)));
        }
      }, {
        key: "get",
        value: function get(e, t) {
          var a = this[e];return t ? a && a[t] : a;
        }
      }, {
        key: "prepareAttributes",
        value: function prepareAttributes() {
          this.config.hasChartMessage || _get(Y.prototype.__proto__ || Object.getPrototypeOf(Y.prototype), "prepareAttributes", this).call(this);
        }
      }, {
        key: "disposeChartStyleSheet",
        value: function disposeChartStyleSheet() {
          var e = this.getFromEnv("paper");e && e.cssClear();
        }
      }, {
        key: "createChartStyleSheet",
        value: function createChartStyleSheet() {
          this.getFromEnv("paper").cssRender();
        }
      }, {
        key: "_dispose",
        value: function _dispose() {
          var e = this.getFromEnv("eventListeners"),
              t = e && e.length;for (; t--;) {
            e[t].unlisten();
          }_get(Y.prototype.__proto__ || Object.getPrototypeOf(Y.prototype), "_dispose", this).call(this);
        }
      }, {
        key: "_allocateSpace",
        value: function _allocateSpace(e) {
          var t,
              a,
              n = this.getChildren("canvas"),
              o = n && n[0].config,
              r = this.config,
              i = r.canvasHeight,
              l = r.canvasWidth,
              s = r.availableHeight,
              c = r.availableWidth;a = r.canvasLeft += e.left || 0, t = r.canvasTop += e.top || 0, l = r.canvasWidth = D(l - ((e.left || 0) + (e.right || 0)), 0), i = r.canvasHeight = D(i - ((e.top || 0) + (e.bottom || 0)), 0), r.availableHeight = D(s - ((e.top || 0) + (e.bottom || 0)), 0), r.availableWidth = D(c - ((e.left || 0) + (e.right || 0)), 0), r.canvasRight = a + l, r.canvasBottom = t + i, o && (o.canvasPaddingLeft = D(o.canvasPaddingLeft, e.paddingLeft || 0), o.canvasPaddingRight = D(o.canvasPaddingRight, e.paddingRight || 0), o.canvasPaddingTop = D(o.canvasPaddingTop, e.paddingTop || 0), o.canvasPaddingBottom = D(o.canvasPaddingBottom, e.paddingBottom || 0)), n && n[0].setDimension({ top: t, left: a, width: l, height: i });
        }
      }, {
        key: "_fetchCaptionPos",
        value: function _fetchCaptionPos(e) {
          var t = this,
              a = t.config,
              n = a.width,
              o = t.getChildren("chartMenuBar"),
              r = o.config.componentGroups[0].config.btnConfig,
              i = o.getLogicalSpace().width,
              l = (t.getChildren("caption") && t.getChildren("caption")[0]).config,
              s = l.width,
              c = "l" === r.hAlign,
              g = a.width - e,
              h = c ? e : g,
              d = a.origMarginRight,
              u = a.origMarginLeft,
              p = c ? u : d;return l.align === k.POSITION_MIDDLE ? h - s / 2 - p - i : "start" === l.align ? c ? -1 : n - a.canvasLeft - p - s - i + l.horizontalPadding : c ? n - (d + u + i + s) : -1;
        }
      }, {
        key: "_manageCaptionSpacing",
        value: function _manageCaptionSpacing(e, t) {
          return this.getChildren("caption")[0].manageSpace(e, t);
        }
      }, {
        key: "_manageChartMenuBar",
        value: function _manageChartMenuBar(e) {
          var t,
              a,
              n = this,
              o = n.config,
              r = n.getChildren("chartMenuBar"),
              i = r && r.getLogicalSpace(),
              l = (n.getChildren("caption") && n.getChildren("caption")[0]).config,
              s = l.isOnTop,
              c = o.width / 2,
              g = o.canvasRight,
              h = g ? (o.canvasLeft + g) / 2 : c,
              d = 0,
              u = l.alignWithCanvas ? h : c,
              p = r && r.config.componentGroups.length && r.config.componentGroups[0].config.btnConfig,
              m = i && p.spaceNotHardCoded;return p && p.spaceNotHardCoded && (p.x = (0, k.pluckNumber)("l" === p.hAlign ? 0 : o.width), p.y = (0, k.pluckNumber)("t" === p.vAlign ? 0 : o.height)), delete l._offsetHeight, a = l.alignWithCanvas ? o.canvasWidth : o.width - o.origMarginLeft - o.origMarginRight, s ? (t = n._manageCaptionSpacing(e, a), m && (d = n._fetchCaptionPos(u), l._offsetHeight = 0 > d ? i.height : 0, t.top = 0 > d ? (0, k.pluckNumber)(t.top, 0) + i.height : D(t.top, i.height)), n._allocateSpace(t)) : (n._allocateSpace({ top: m ? i.height : 0 }), t = n._manageCaptionSpacing(e, a), n._allocateSpace(t)), { top: i ? D(i.height, t.top) : t.top, bottom: t.bottom };
        }
      }, {
        key: "_manageSpace",
        value: function _manageSpace() {
          var e,
              t,
              a,
              n,
              o,
              r,
              i,
              l,
              s,
              c,
              g,
              h,
              d = this,
              u = d.getChildren("canvas") && d.getChildren("canvas")[0],
              p = u && u.config,
              m = d.config,
              v = d.getFromEnv("chartWidth"),
              f = d.getFromEnv("chartHeight");m.width = v, m.height = f, m.minChartHeight = s = m.minChartHeightPercent * f, m.minChartWidth = c = m.minChartWidthPercent * v, m.minCanvasWidth = e = m.minCanvasWidthPercent * c, m.minCanvasHeight = t = m.minCanvasHeightPercent * s, m.marginTop = a = m.origMarginTop, m.marginLeft = n = m.origMarginLeft, m.marginBottom = o = m.origMarginBottom, m.marginRight = r = m.origMarginRight, m.canvasMarginTop = m.origCanvasTopMargin, m.canvasMarginLeft = m.origCanvasLeftMargin, m.canvasMarginBottom = m.origCanvasBottomMargin, m.canvasMarginRight = m.origCanvasRightMargin, m.canvasHeight = i = m.height - m.marginTop - m.marginBottom, m.canvasWidth = l = m.width - m.marginLeft - m.marginRight, m.availableHeight = i - t, m.availableWidth = l - e, i < s && (g = f - s, m.canvasHeight = s, h = a + o, m.marginTop = g * a / h, m.marginBottom = g * o / h, m.availableHeight = s - t), l < c && (g = v - c, h = r + n, m.canvasWidth = c, m.marginLeft = g * n / h, m.marginRight = g * r / h, m.availableWidth = c - e), m.canvasLeft = m.marginLeft, m.canvasTop = m.marginTop, p && (p.canvasPaddingLeft = B(p.origCanvasLeftPad, I(.1 * m.height)), p.canvasPaddingRight = B(p.origCanvasRightPad, I(.1 * m.height)), p.canvasPaddingTop = B(p.origCanvasTopPad, I(.1 * m.height)), p.canvasPaddingBottom = B(p.origCanvasBottomPad, I(.1 * m.height))), d._spaceManager();
        }
      }, {
        key: "_preDraw",
        value: function _preDraw() {
          var e = this;e._mapChildren(function (e) {
            !e.getState("removed") && e.preDraw && e.preDraw();
          }), e._setAxisLimits && e._setAxisLimits(), e._createToolBoxGantt && e._createToolBoxGantt();
        }
      }, {
        key: "_clearTimers",
        value: function _clearTimers() {
          var e,
              t = this,
              a = t.config && t.config.realTimeConfig,
              n = t.config.timers,
              o = n && n.setTimeout,
              r = n && n.setInterval;for (e in a && (a.refreshIntervalFlag = !1), o) {
            clearTimeout(o[e]);
          }for (e in r) {
            clearInterval(r[e]);
          }
        }
      }, {
        key: "setChartCursor",
        value: function setChartCursor() {
          var e = this,
              t = e.config.link,
              a = e.getFromEnv("paper").canvas.style;S.svg ? a.cursor = t ? k.POINTER : "default" : e.getFromEnv("paper").canvas.style.cursor = t ? k.HAND : "default";
        }
      }, {
        key: "_createLayers",
        value: function _createLayers() {
          var e,
              t = this,
              a = t.getFromEnv("animationManager");e = t.getContainer("parentgroup") || t.addContainer("parentgroup", a.setAnimation({ el: "group", attr: { name: "parentgroup" }, component: t })), t.getChildContainer("backgroundGroup") || t.addChildContainer("backgroundGroup", V({ name: "background" }, e, t)), t.getChildContainer("axisBottomGroup") || t.addChildContainer("axisBottomGroup", V({ name: "axisbottom" }, e, t)), t.getChildContainer("belowPlotGroup") || t.addChildContainer("belowPlotGroup", V({ name: "belowplot" }, e, t)), t.getChildContainer("lowerAnnotationGroup") || t.addChildContainer("lowerAnnotationGroup", V({ name: "lowerannotations" }, t.getChildContainer("belowPlotGroup"), t)), t.getChildContainer("plotGroup") || t.addChildContainer("plotGroup", V({ name: "plots" }, e, t)), t.getChildContainer("axisTopGroup") || t.addChildContainer("axisTopGroup", V({ name: "axistop" }, e, t)), t.getChildContainer("sumLabelsLayer") || t.addChildContainer("sumLabelsLayer", V({ name: "sumlabels", class: "fusioncharts-datalabels" }, e, t)), t.getChildContainer("datalabelsGroup") || t.addChildContainer("datalabelsGroup", V({ name: "datalabel" }, e, t)), t.getChildContainer("abovePlotGroup") || t.addChildContainer("abovePlotGroup", V({ name: "aboveplot" }, e, t)), t.getChildContainer("upperAnnotationGroup") || t.addChildContainer("upperAnnotationGroup", V({ name: "upperannotations" }, t.getChildContainer("abovePlotGroup"), t)), t.getChildContainer("captionGroup") || t.addChildContainer("captionGroup", V({ name: "caption" }, e, t)), t.getChildContainer("defaultGroup") || t.addChildContainer("defaultGroup", V({ name: "chartdefault" }, e, t)), t.getChildContainer("defaultShadowGroup") || t.addChildContainer("defaultShadowGroup", V({ name: "chartdefault-shadow" }, e, t)), t.getChildContainer("trackerGroup") || t.addChildContainer("trackerGroup", V({ name: "tracker" }, e, t)), t.getChildContainer("buttonGroup") || t.addChildContainer("buttonGroup", a.setAnimation({ el: "group", container: e, attr: { name: "buttons" }, component: t })), t.getChildContainer("logoGroup") || t.addChildContainer("logoGroup", a.setAnimation({ el: "group", attr: { name: "logo" }, component: t }));
        }
      }, {
        key: "_setDataLabelStyle",
        value: function _setDataLabelStyle() {
          var e = this.config.dataLabelStyle,
              t = { fontFamily: e.fontFamily, fontSize: e.fontSize, fontWeight: e.fontWeight, fontStyle: e.fontStyle };this.getChildContainer("datalabelsGroup").css(t);
        }
      }, {
        key: "_manageCaptionPosition",
        value: function _manageCaptionPosition() {
          var e = void 0,
              t = void 0,
              a = void 0,
              n = void 0,
              o = this,
              r = o.config,
              i = o.getChildren(),
              l = i.caption && i.caption[0],
              s = i.subCaption && i.subCaption[0],
              c = l.config,
              g = c.widgetValueHeight || 0,
              h = s.config,
              d = r.canvasWidth,
              u = c.align,
              p = c.text,
              m = c.alignWithCanvas,
              v = c.horizontalPadding,
              f = r.width,
              C = r.canvasLeft,
              b = r.canvasRight,
              w = r.marginRight,
              E = r.marginLeft,
              N = r.marginTop,
              F = (I(C) || 0) + (0, k.pluckNumber)(d, f) / 2,
              T = c.height,
              M = h.height,
              _ = i.legend && i.legend[0] && i.legend[0].config || {},
              S = _.height || 0,
              L = _.legendPadding || 0,
              x = r.legendposition,
              D = o.getFromEnv("gLegend") || {},
              B = 0,
              y = !!(D.conf || {}).showLegend,
              P = o.config.borderWidth,
              A = i.actionBar,
              R = 0;_.isActive || (S = 0), y && o.config.gLegendEnabled && (B = D.getLogicalSpace().height), e = u === U ? m ? b - v : f - v : u === O ? m ? C + v : v : m ? F : E + .5 * (f - E - w) || f / 2, c.isOnTop ? t = (P || 0) + (N || 0) : (x.toLowerCase() === H && (L = 0, S = 0, B = 0), A && ((R = (n = A.getLogicalSpace() || {}).height) === k.UNDEF || R === 1 / 0 || 0 > R) && (R = 0), t = o.config.height - o.config.marginBottom - T - (M || 0) - (P || 0) - (L || 0) - (S || 0) - B - g - R), t += c._offsetHeight || 0, l.setDimention({ x: e, y: t }), a = p ? t + T + 2 : t || N || 0, s.setDimention({ x: e, y: a });
        }
      }, {
        key: "_updateVisuals",
        value: function _updateVisuals() {
          var e,
              t,
              a = this,
              n = a.getFromEnv("core-options"),
              o = a.getFromEnv("paper"),
              r = a.getFromEnv("animationManager"),
              i = a.config,
              l = a.getFromEnv("chartWidth"),
              s = a.getFromEnv("chartHeight");n && !n._SVGDefinitionURLUpdated && (/^\s*absolute\s*$/i.test(n.SVGDefinitionURL) && (S._url = (S._g && S._g.win || window).location.href.replace(/#.*?$/, k.BLANKSTRING)), n._SVGDefinitionURLUpdated = !0), o ? (!k.hasSVG && (i._prevWidth || i._prevHeight) && o.setSize(i._prevWidth, i._prevHeight), t = { width: l, height: s }, r.setAnimation({ el: o, attr: t, component: a })) : ((o = new S(a.getFromEnv("chart-container"), l, s)).setHTMLClassName("fusioncharts-div"), a.addToEnv("paper", o), o.setConfig("stroke-linecap", k.ROUND)), i._prevWidth = l, i._prevHeight = s, a.setChartCursor(), a._createLayers(), a._setDataLabelStyle(), (e = a.getChildren("chartMenuBar") ? "chartMenuBar" : a.getChildren("actionBar") ? "actionBar" : k.UNDEF) && a.allocateDimensionOfChartMenuBar(e), a.getChildren("chartMenuBar") && (a.getChildren("chartMenuBar").config.parentLayer = a.getContainer("parentgroup")), a._drawCreditLabel();
        }
      }, {
        key: "allocateDimensionOfChartMenuBar",
        value: function allocateDimensionOfChartMenuBar(e) {
          var t = this.config,
              a = this.getChildren(e),
              n = a.getLogicalSpace(),
              o = a.config.toolbarConfig,
              r = a.config.componentGroups[0].config.btnConfig,
              i = r.vDirection,
              l = r.hDirection,
              s = r.y,
              c = r.x;o.fill = x, o.borderColor = x, r.spaceNotHardCoded && ("chartMenuBar" === e ? (s += r.vMargin * i + B(0, n.height * i), c += r.hMargin * l - D(0, n.width * l), c = "l" === r.hAlign ? c + n.width : c - n.width) : (s = t.height - t.marginBottom - n.height, c = "b" === r.vAlign && "r" === r.hAlign ? t.width - t.marginRight - n.width : t.marginLeft)), a.setMenuBarDimension(c, s);
        }
      }, {
        key: "draw",
        value: function draw() {
          var e = this,
              t = e.getFromEnv("chartInstance");e.config.hasChartMessage ? (e._hide(), e.drawChartMessage(), e.fireChartInstanceEvent("nodatatodisplay", {}, [t.id]), t.jsVars.drawCount += 1, t.__state.dataReady = !1, t.jsVars.hasNativeMessage = !0) : (e._hideChartMessage(), e._clearTimers && e._clearTimers(), e.config.plotOverFlow = !1, e._show(), e._updateVisuals(), e.setState("initiated", !0), t.jsVars.drawCount += 1, t.jsVars.hasNativeMessage = !1);
        }
      }, {
        key: "manageSpace",
        value: function manageSpace() {
          var e = this;e.config.hasChartMessage || (e._preDraw(), e.addToolbar && e.addToolbar(), e._manageSpace(), e._postSpaceManagement && e._postSpaceManagement());
        }
      }, {
        key: "_show",
        value: function _show() {
          this.getContainer("parentgroup") && this.getContainer("parentgroup").show();
        }
      }, {
        key: "_manageActionBarSpace",
        value: function _manageActionBarSpace() {
          var e = this.config,
              t = this.getChildren("actionBar"),
              a = (t && t.getLogicalSpace() || {}).height || 0;return e.actionBarHeight = a, { bottom: a };
        }
      }, {
        key: "_hide",
        value: function _hide() {
          this.getContainer("parentgroup") && this.getContainer("parentgroup").hide();
        }
      }], [{
        key: "chartMenuTools",
        value: function chartMenuTools() {
          var e = [];return { get: function get() {
              return e;
            }, set: function set(t) {
              var a,
                  n = t.length || 0;for (a = 0; a < n; a += 1) {
                e.push(t[a]);
              }
            }, reset: function reset(t, a) {
              var n = a.getChildren("actionBar"),
                  o = a.getChildren("chartMenuBar");o && a.detachChild(o.getId()) && (o.drawn = !1), n && a.detachChild(n.getId()) && (n.drawn = !1), e.length = 0, t && (t.idCount = 0, t.clean());
            }, update: function update(e, t, a) {
              var n,
                  o,
                  r,
                  i,
                  l,
                  s,
                  c,
                  g = (a.getChildren("chartMenuBar") || a.getChildren("actionBar")).config.componentGroups;for (i = 0, l = g.length; i < l; i++) {
                for (s = 0, c = (r = g[i].config.symbolList || []).length; s < c; s++) {
                  r[s] instanceof v.default && (n = r[s].getListRefernce().getFirstContainer().config.atomicLists);
                }
              }for (i = 0, l = (n = n || []).length; i < l; i++) {
                if ((o = n[i]).config.name === e) {
                  o.updateName(t);break;
                }
              }
            } };
        }
      }, {
        key: "onContainerMouseMove",
        value: function onContainerMouseMove(e) {
          var t,
              a = e.data,
              n = a.getFromEnv("chartInstance"),
              o = e.originalEvent,
              r = (0, k.getMouseCoordinate)(a.getFromEnv("chart-container"), o, a);n.ref && (t = (0, k.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv("chartWidth"), pixelWidth: a.getFromEnv("chartHeight"), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, r), a.fireChartInstanceEvent("chartMouseMove", t));
        }
      }, {
        key: "onContainerRollOver",
        value: function onContainerRollOver(e) {
          var t,
              a = e.data,
              n = a.getFromEnv("chartInstance"),
              o = e.originalEvent,
              r = (0, k.getMouseCoordinate)(a.getFromEnv("chart-container"), o, a);n.ref && (t = (0, k.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv("chartWidth"), pixelWidth: a.getFromEnv("chartHeight"), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, r), a.fireChartInstanceEvent("chartRollOver", t));
        }
      }, {
        key: "onContainerRollOut",
        value: function onContainerRollOut(e) {
          var t,
              a = e.chart,
              n = a.getFromEnv("chartInstance"),
              o = e.event,
              r = (0, k.getMouseCoordinate)(a.getFromEnv("chart-container"), o, a);n.ref && (t = (0, k.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv("chartWidth"), pixelWidth: a.getFromEnv("chartHeight"), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, r), a.fireChartInstanceEvent("chartRollOut", t));
        }
      }, {
        key: "winMouseHover",
        value: function winMouseHover(e) {
          var t = e.originalEvent,
              a = t.target || t.originalTarget || t.srcElement || t.relatedTarget || t.fromElement,
              n = e.data,
              o = n.getFromEnv("paper"),
              r = { chart: n, event: e.originalEvent };L ? !o.getById(a.parentNode.raphaelid) && (Y.onContainerRollOut(r), n.config.mouseStateIn = !1, F.default.unlisten(document, "mouseover", Y.winMouseHover)) : !a.viewportElement && (n.config.mouseStateIn = !1, Y.onContainerRollOut(r), F.default.unlisten(window, "mouseover", Y.winMouseHover));
        }
      }]);

      return Y;
    }(t.default);

    exports.default = Y, exports._drawDataset = K, exports._createToolBox = $, exports.configurer = X;
  }, { "./basechart": 19, "../_internal/factories/canvas": 119, "../_internal/dependency-manager": 17, "../_internal/components/caption": 138, "../_internal/components/sub-caption": 139, "../_internal/components/background": 140, "../_internal/color-utils/colormanager": 141, "../_internal/components/numberformatter": 28, "../_internal/tool-box/symbolWithContext": 142, "../_internal/misc/event-api": 22, "../_internal/animation-rules/common-animation": 143, "../_internal/lib/lib": 20, "../_internal/lib/lib-graphics": 21, "../_internal/lib/lib-attr": 72, "../_internal/dom/dom-event": 73, "../_internal/tool-box/toolbox": 144 }], 106: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var a = require("./commonchartapi"),
        e = i(a),
        t = require("../_internal/lib/lib");function i(a) {
      return a && a.__esModule ? a : { default: a };
    }
    var n = function (_e$default2) {
      _inherits(n, _e$default2);

      function n() {
        _classCallCheck(this, n);

        return _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
      }

      _createClass(n, [{
        key: "_spaceManager",
        value: function _spaceManager() {
          var a,
              e,
              i,
              n,
              c,
              s,
              l,
              o,
              g,
              h,
              r,
              v,
              p,
              d,
              _,
              m,
              S,
              x,
              f,
              C = this,
              u = C.config,
              M = C.getChildren("xAxis") && C.getChildren("xAxis")[0],
              A = C.getChildren("yAxis") && C.getChildren("yAxis") || [],
              b = u.legendposition,
              T = u.xDepth,
              B = u.yDepth,
              H = u.canvasBgDepth,
              W = u.canvasBaseDepth,
              L = u.canvasBasePadding,
              D = C.getChildren("canvas")[0],
              R = D.config.canvasBorderWidth,
              P = u.realTimeConfig && u.realTimeConfig.showRTValue,
              V = u.borderWidth,
              w = u.canvasMarginTop,
              y = u.canvasMarginBottom,
              O = u.canvasMarginLeft,
              I = u.canvasMarginRight,
              q = u.minCanvasHeight,
              j = u.minCanvasWidth,
              k = u.minChartWidth,
              E = u.minChartHeight,
              N = u.height,
              X = u.width,
              z = !1,
              F = !1,
              G = u.origCanvasTopMargin,
              J = u.origCanvasBottomMargin,
              K = u.origCanvasLeftMargin,
              Q = u.origCanvasRightMargin,
              U = [];for (u.canvasWidth - 2 * V < k && (d = (u.canvasWidth - k) / 2), u.canvasHeight - 2 * V < E && (p = (u.canvasHeight - E) / 2), C._allocateSpace({ top: p || V, bottom: p || V, left: d || V, right: d || V }), h = 0, n = A.length; h < n; h++) {
            i = A[h], a = .7 * u.availableWidth, x = i && i.placeAxis(a) || {}, U.push({ axisIndex: h, spaceTaken: x }), i && C._allocateSpace(x);
          }u.yAxisSpaceAllocation = U, C._allocateSpace(C._manageActionBarSpace && C._manageActionBarSpace(.225 * u.availableHeight) || {}), C._manageLegendSpace && u.showLegend && C._manageLegendSpace(void 0), e = b === t.POSITION_BOTTOM ? .6 * u.availableHeight : .6 * u.availableWidth, B && (C._allocateSpace({ bottom: B }), u.shift = T + L + W), H && C._allocateSpace({ right: H }), u.canvasWidth - 2 * R < j && (m = (u.canvasWidth - j) / 2), C._allocateSpace({ left: m || R, right: m || R }), j > X - O - I && (F = !0, c = u.canvasWidth - j, f = O + I, O = u.canvasMarginLeft = c * O / f, I = u.canvasMarginRight = c * I / f), o = O > u.canvasLeft ? O - u.canvasLeft : 0, g = I > X - u.canvasRight ? I + u.canvasRight - X : 0, C._allocateSpace({ left: o, right: g }), F && (f = K + Q, (v = u.canvasWidth) > j && (o = (c = v - j) * K / f, g = c * Q / f), C._allocateSpace({ left: o, right: g })), u.actualCanvasMarginRight = g, u.actualCanvasMarginBottom = l, C._manageChartMenuBar(e), e = .2 * u.availableHeight, C._getSumValueSpace && C._allocateSpace(C._getSumValueSpace(e)), e = .3 * u.availableHeight, u.realtimeEnabled && (P ? C._allocateSpace(C._realTimeValuePositioning(e)) : C._hideRealTimeValue()), C._resetViewPortConfig && C._resetViewPortConfig(), C._setAxisScale && C._setAxisScale(), e = .6 * u.availableHeight, u.xAxisSpaceAllocation = S = M && M.placeAxis(e), M && C._allocateSpace(S), u.canvasHeight - 2 * R < q && (_ = (u.canvasHeight - q) / 2), C._allocateSpace({ top: _ || R, bottom: _ || R }), C._allocateSpace({ bottom: W }), q > N - w - y && (z = !0, c = u.canvasHeight - q, f = w + y, w = u.canvasMarginTop = c * w / f, y = u.canvasMarginBottom = c * y / f), s = w > u.canvasTop ? w - u.canvasTop : 0, l = y > N - u.canvasBottom ? y + u.canvasBottom - N : 0, C._allocateSpace({ top: s, bottom: l }), z && (f = G + J, (r = u.canvasHeight) > q && (s = (c = r - q) * G / f, l = c * J / f), C._allocateSpace({ top: s, bottom: l })), u.actualCanvasMarginTop = s, u.actualCanvasMarginLeft = o, D.setDimension({ top: u.canvasTop, left: u.canvasLeft, width: u.canvasWidth, height: u.canvasHeight });
        }
      }, {
        key: "_postSpaceManagement",
        value: function _postSpaceManagement() {
          var a,
              e = this,
              t = e.config,
              i = e.getChildren(),
              n = i.xAxis && i.xAxis[0],
              c = i.legend && i.legend[0],
              s = t.xDepth,
              l = e.getChildren("canvas");for (e.setAxisDimention && e.setAxisDimention(), n && e._allocateXAxisLabelSpace(n), n && n.shiftLabels(-s, 0), c && c.postSpaceManager(), a = 0; a < (l && l.length); a++) {
            l[a].setCanvasPadding();
          }e.setAxisDimention && e.setAxisDimention();
        }
      }]);

      return n;
    }(e.default);

    exports.default = n;
  }, { "./commonchartapi": 123, "../_internal/lib/lib": 20 }], 181: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../../core/component-interface"),
        a = i(e),
        l = require("../lib/lib"),
        r = require("../lib/lib-graphics");function i(e) {
      return e && e.__esModule ? e : { default: e };
    }var n = function n(e, a) {
      return e < a ? a : e;
    };
    var o = function (_a$default3) {
      _inherits(o, _a$default3);

      function o() {
        _classCallCheck(this, o);

        return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
      }

      _createClass(o, [{
        key: "getType",
        value: function getType() {
          return "axis";
        }
      }, {
        key: "__setDefaultConfig",
        value: function __setDefaultConfig() {
          _get(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "__setDefaultConfig", this).call(this), this.components = { labels: [] };var e = this.config;e.setAdaptiveMin = 0, e.adjustDiv = 1, e.axisNameWidth = l.UNDEF, e.rotateAxisName = 0, e.useEllipsesWhenOverflow = 1, e.divLineColor = l.UNDEF, e.divLineAlpha = l.UNDEF, e.divLineThickness = l.UNDEF, e.divLineIsDashed = l.UNDEF, e.divLineDashLen = l.UNDEF, e.divLineDashGap = l.UNDEF, e.showAlternateGridColor = l.UNDEF, e.alternateGridColor = l.UNDEF, e.alternateGridAlpha = l.UNDEF, e.showZeroPlane = 1, e.zeroPlaneAlpha = 80, e.showZeroPlaneValue = 1, e.showZeroPlaneOnTop = 1, e.showAxisLine = l.UNDEF, e.axisLineThickness = l.UNDEF, e.axisLineAlpha = l.UNDEF, e.tickLength = 0, e.trendlineToolText = l.UNDEF, e.trendlineColor = "333333", e.trendlineThickness = 1, e.trendlineAlpha = l.UNDEF, e.showTrendlinesOnTop = 0, e.trendlinesAreDashed = 0, e.trendlinesDashLen = 5, e.trendlinesDashGap = 2, e.isTrendZone = l.UNDEF, e.showTrendlines = 1, e.showTrendlineLabels = 1, e.showLabels = 1, e.maxLabelHeight = l.UNDEF, e.rotateLabels = l.UNDEF, e.slantLabel = 0, e.showAxisValues = 1, e.showTooltip = 1, e.isActive = !0, e.drawLabels = !0, e.drawOnlyCategoryLine = !1, e.drawLabelsOpposit = !1, e.drawPlotlines = !0, e.drawAxisLine = !0, e.drawPlotBands = !0, e.drawAxisName = !0, e.drawAxisNameOpposit = !1, e.axisNameAlignCanvas = !1, e.drawAxisNameFromBottom = !1, e.drawTrendLines = !0, e.drawTrendLabels = !0, e.drawTick = !0, e.drawTickMinor = !0, e.animateAxis = !0, e.drawAxisLineWRTCanvas = !0, e.isRelativeAxisInverse = !1, e.axisIndex = 0, e.uniqueClassName = 0, e.viewPortRatio = {}, e.canvas = {}, e.axisRange = {}, e.drawnStaggerLines = l.UNDEF, e.axisDimention = {}, e.forceZeroTick = !0, e.isZeroTickForced = !1, e.extremeLabels = { firstLabel: {}, lastLabel: {} }, e._setRangeAgain = !1, e._defaultForceDecimal = l.UNDEF, e._defaultDecimalPrecision = l.UNDEF, e.rangeChanged = !1, e.dimensionChanged = !1, e.apparentScrollPos = 0, e.visibleMin = l.UNDEF, e.visibleMax = l.UNDEF, e.setPadding = !1, e.trendLimits = l.UNDEF;
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes(e) {
          var a,
              i,
              o,
              t,
              s = Math.abs,
              u = this,
              d = u.config,
              c = u.getFromEnv("chart"),
              b = u.getFromEnv("dataSource"),
              p = c.config.is3D,
              m = b.chart,
              h = u.getFromEnv("number-formatter");a = d.rawAttr = e, d.referenceInfo = [], d.parsedTrendLabels = [], d.parsedVlineInfo = [], d.trendLines = a.trendlines, d.vTrendLines = a.vtrendlines, (0, l.parseConfiguration)(a, d), d.axisName = (0, l.parseUnsafeString)(a.axisName), d.axisValuePadding = d.axisNamePadding || (0, l.pluckNumber)(a.axisValuePadding, 4), d.axisNamePadding = d.axisNamePadding || (0, l.pluckNumber)(a.axisNamePadding, 5), d.maxLabelWidthPercent = (0, l.pluckNumber)(a.maxLabelWidthPercent), d.maxLabelWidthPercent = s(d.maxLabelWidthPercent), d.minLabelWidthPercent = s((0, l.pluckNumber)(a.minLabelWidthPercent)), d.numDivLines = (0, l.pluckNumber)(a.numDivLines, 4), d.numDivLines = n(d.numDivLines, 0), d.categoryNumDivLines = (0, l.pluckNumber)(a.numDivLines, 0), d.axisValuePadding = n(d.axisValuePadding, 0), d.isReverse = (0, l.pluckNumber)(a.isReverse, 0), d.isOpposit = (0, l.pluckNumber)(a.isOpposit, 0), d.isVertical = (0, l.pluckNumber)(a.isVertical, 0), d.categoryDivLinesFromZero = 1, d.axisMinValue = h.getCleanValue(a.axisMinValue), d.axisMaxValue = h.getCleanValue(a.axisMaxValue), d.zeroPlaneColor = (0, l.pluck)(a.zeroPlaneColor, a.divLineColor), d.zeroPlaneThickness = (0, l.pluck)(a.zeroPlaneThickness, a.divLineThickness), d.axisLineColor = (0, r.convertColor)(a.axisLineColor, a.axisLineAlpha), d.tickAlpha = (0, l.pluckNumber)(a.tickAlpha, d.axisLineAlpha), d.tickColor = (0, r.convertColor)((0, l.pluck)(a.tickColor, a.axisLineColor), d.tickAlpha), d.tickWidth = (0, l.pluckNumber)(a.tickWidth, d.axisLineThickness), d.maxZoomLimit = (0, l.pluckNumber)(m.maxzoomlimit, c.maxzoomlimit, 1e3), d.showVLines = (0, l.pluckNumber)(m.showvlines, 1), d.showVLinesOnTop = (0, l.pluckNumber)(m.showvlinesontop, 0), d.showVLineLabels = (0, l.pluckNumber)(m.showvlinelabels, this.showVLineLabels, 1), d.showVLineLabelBorder = (0, l.pluckNumber)(m.showvlinelabelborder, 1), d.rotateVLineLabels = (0, l.pluckNumber)(m.rotatevlinelabels, 0), d.vLineColor = (0, l.pluck)(m.vlinecolor, "333333"), d.vLineLabelColor = (0, l.pluck)(m.vlinelabelcolor), d.vLineThickness = (0, l.pluck)(m.vlinethickness, 1), d.vLineAlpha = (0, l.pluckNumber)(m.vlinealpha, 80), d.vLineLabelBgColor = (0, l.pluck)(m.vlinelabelbgcolor, "ffffff"), d.vLineLabelBgAlpha = (0, l.pluckNumber)(m.vlinelabelbgalpha, p ? 50 : 100), d.staggerLines = Math.max((0, l.pluckNumber)(m.staggerlines, 2), 2), d.staggerLines = n(d.staggerLines, 1), d.trendlineValuesOnOpp = (0, l.pluck)(a.trendlineValuesOnOpp, a.trendlineValuesOnOpp, 0), d.labelDisplay = (0, l.pluck)(a.labelDisplay, "auto").toLowerCase(), d.labelStep = (0, l.pluckNumber)(a.labelStep, 1), d.labelStep = Math.round(d.labelStep), d.labelStep = n(d.labelStep, 1), d.startPad = 0, d.endPad = 0, d._oriLabelStep = d.labelStep, d.showLimits = (0, l.pluckNumber)(a.showLimits, d.showAxisValues), d.showUpperLimit = a.showLimits, d.showDivLineValues = (0, l.pluckNumber)(a.showDivLineValues, d.showAxisValues), d.showCanvasBorder = c.getChildren("canvas")[0].config.showCanvasBorder ? 1 : 0, d.axisBreak = a.axisBreaks, d.isBreak = !!d.axisBreak, d.isBreak && u._processAxisBreak(), i = (i = (0, l.getFirstValue)(a.axisNameBorderColor, l.BLANKSTRING)) ? (0, r.convertColor)(i, (0, l.pluckNumber)(a.axisNameBorderAlpha, a.axisNameAlpha, 100)) : l.BLANKSTRING, d.name = d.name || {}, d.name.style = { fontFamily: (0, l.pluck)(a.axisNameFont, a.outCanfontFamily), fontSize: (0, l.pluck)(a.axisNameFontSize, (0, l.pInt)(a.outCanfontSize)) + l.PXSTRING, color: (0, r.convertColor)((0, l.pluck)(a.axisNameFontColor, a.outCancolor), (0, l.pluckNumber)(a.axisNameFontAlpha, a.axisNameAlpha, 100)), fontWeight: (0, l.pluckNumber)(a.axisNameFontBold, 1) ? "bold" : l.NORMAL, fontStyle: (0, l.pluckNumber)(a.axisNameFontItalic) ? "italic" : l.NORMAL, border: i || a.axisNameBgColor ? (0, l.pluckNumber)(a.axisNameBorderThickness, 1) + "px solid" : l.UNDEF, borderColor: i, borderThickness: (0, l.pluckNumber)(a.axisNameBorderThickness, 1), borderPadding: (0, l.pluckNumber)(a.axisNameBorderPadding, 2), borderRadius: (0, l.pluckNumber)(a.axisNameBorderRadius, 0), backgroundColor: a.axisNameBgColor ? (0, r.convertColor)(a.axisNameBgColor, (0, l.pluckNumber)(a.axisNameBgAlpha, a.axisNameAlpha, 100)) : l.BLANKSTRING, borderDash: (0, l.pluckNumber)(a.axisNameBorderDashed, 0) ? (0, l.getDashStyle)((0, l.pluckNumber)(a.axisNameBorderDashLen, 4), (0, l.pluckNumber)(a.axisNameBorderDashGap, 2)) : l.DASH_DEF }, d.name.style.lineHeight = (0, l.setLineHeight)(d.name.style), o = (o = (0, l.getFirstValue)(m.trendvaluebordercolor, l.BLANKSTRING)) ? (0, r.convertColor)(o, (0, l.pluckNumber)(m.trendvalueborderalpha, m.trendvaluealpha, 100)) : l.BLANKSTRING, d.trend = d.trend || {}, d.trend.trendStyle = { fontFamily: (0, l.pluck)(m.trendvaluefont, a.outCanfontFamily), color: (0, l.pluck)(m.trendvaluefontcolor, a.trendlineColor, a.outCancolor, "333333"), fontSize: (0, l.pluckFontSize)(m.trendvaluefontsize, (0, l.pInt)(a.outCanfontSize)) + l.PXSTRING, fontWeight: (0, l.pluckNumber)(m.trendvaluefontbold) ? "bold" : l.NORMAL, fontStyle: (0, l.pluckNumber)(m.trendvaluefontitalic) ? "italic" : l.NORMAL, border: o || m.trendvaluebgcolor ? (0, l.pluckNumber)(m.trendvalueborderthickness, 1) + "px solid" : "", borderColor: o, borderThickness: (0, l.pluckNumber)(m.trendvalueborderthickness, 1), borderPadding: (0, l.pluckNumber)(m.trendvalueborderpadding, 2), borderRadius: (0, l.pluckNumber)(m.trendvalueborderradius, 0), backgroundColor: m.trendvaluebgcolor ? (0, r.convertColor)(m.trendvaluebgcolor, (0, l.pluckNumber)(m.trendvaluebgalpha, m.trendvaluealpha, 100)) : l.BLANKSTRING, borderDash: (0, l.pluckNumber)(m.trendvalueborderdashed, 0) ? (0, l.getDashStyle)((0, l.pluckNumber)(m.trendvalueborderdashlen, 4), (0, l.pluckNumber)(m.trendvalueborderdashgap, 2)) : l.DASH_DEF }, d.trend.trendStyle.lineHeight = (0, l.setLineHeight)(d.trend.trendStyle), d.labels = d.labels || {}, d.lines = d.lines || {}, d.band = d.band || {}, t = (t = (0, l.getFirstValue)(m.labelbordercolor, l.BLANKSTRING)) ? (0, r.convertColor)(t, (0, l.pluckNumber)(m.labelborderalpha, m.labelalpha, 100)) : l.BLANKSTRING, d.labels.style = { fontFamily: (0, l.pluck)(a.labelFont, a.outCanfontFamily), fontSize: (0, l.pluckNumber)(a.labelFontSize, (0, l.pInt)(a.outCanfontSize)) + l.PXSTRING, fontWeight: (0, l.pluckNumber)(a.labelFontBold) ? "bold" : l.NORMAL, fontStyle: (0, l.pluckNumber)(a.labelFontItalic) ? "italic" : l.NORMAL, color: (0, r.convertColor)((0, l.pluck)(a.labelFontColor, a.outCancolor), (0, l.pluckNumber)(a.labelFontAlpha, 100)), labelLink: m.labellink, border: t || m.labelbgcolor ? (0, l.pluckNumber)(m.labelborderthickness, 1) + "px solid" : "", borderColor: t, borderThickness: (0, l.pluckNumber)(m.labelborderthickness, 1), borderPadding: (0, l.pluckNumber)(m.labelborderpadding, 2), borderRadius: (0, l.pluckNumber)(m.labelborderradius, 0), backgroundColor: m.labelbgcolor ? (0, r.convertColor)(m.labelbgcolor, (0, l.pluckNumber)(m.labelbgalpha, m.labelalpha, 100)) : l.BLANKSTRING, borderDash: (0, l.pluckNumber)(m.labelborderdashed, 0) ? (0, l.getDashStyle)((0, l.pluckNumber)(m.labelborderdashlen, 4), (0, l.pluckNumber)(m.labelborderdashgap, 2)) : l.DASH_DEF }, d.labels.style.lineHeight = (0, l.setLineHeight)(d.labels.style), d.numberFormatterFn = (0, l.pluck)(a.numberFormatterFn), d.apparentScrollPos = a.apparentScrollPos || d.apparentScrollPos, d.axisRange = {}, d.dataLimit = {}, d.axisEndLabelDisplaySpace = { left: 0, right: 0, top: 0, bottom: 0 }, d.isConfigured = !0, d._defaultForceDecimal = l.UNDEF, d._defaultDecimalPrecision = l.UNDEF, d.lines.isDraw = (0, l.pluckNumber)(a.lines && a.lines.isDraw, 1), d.band.isDraw = (0, l.pluckNumber)(a.band && a.band.isDraw, 1);
        }
      }, {
        key: "createContainer",
        value: function createContainer(e, a, l) {
          var r = this.getFromEnv("animationManager");return this.addContainer(e, r.setAnimation({ container: l, attr: a, el: this.getContainer(e) || "group", component: this, label: "group" }));
        }
      }, {
        key: "createGroup",
        value: function createGroup(e, a, l) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "group";
          return this.getFromEnv("animationManager").setAnimation({ container: l, attr: a, el: this.config[e] || "group", component: this, label: r });
        }
      }, {
        key: "getValuePadding",
        value: function getValuePadding() {
          var e = this.config;return { left: e.startPad, right: e.endPad };
        }
      }, {
        key: "draw",
        value: function draw() {
          var e,
              a,
              l,
              r,
              i = this,
              n = i.config,
              o = i.getFromEnv("chart").config,
              t = n.isVertical,
              s = o.viewPortConfig,
              u = i.getChildren().limitUpdater,
              d = n.viewPortRatio || {};i._createContainer(), l = s.y * s.scaleY, r = s.x * s.scaleX, d.scaleX && d.scaleY && (d.scaleX !== s.scaleX || d.scaleY !== s.scaleY) ? (d.scaleX = s.scaleX, d.scaleY = s.scaleY, i._drawComponents()) : (t ? (a = l - s.y * s.scaleY, n.axisContainer.transform("t0," + a), n.axisLabelContainerTop.transform("t0," + a)) : (e = r - s.x * s.scaleX, n.axisContainer.transform("t" + e + ",0"), n.axisLabelContainerTop.transform("t" + e + ",0")), i._drawComponents()), i.addExtEventListener("internal.animationComplete", function () {
            u && u.forEach(function (e) {
              e.draw();
            });
          }, i.getFromEnv("chartInstance")), i.addToEnv("prevScale", i.getScale().copy());
        }
      }, {
        key: "setScale",
        value: function setScale(e) {
          this.config.scale = e;
        }
      }, {
        key: "getScale",
        value: function getScale() {
          return this.config.scale;
        }
      }, {
        key: "getLimit",
        value: function getLimit() {
          var e = this.config.axisRange;return { min: e.min, max: e.max, tickInterval: e.tickInterval };
        }
      }, {
        key: "getVisibleConfig",
        value: function getVisibleConfig() {
          var e = this.config;return { minValue: e.visibleMin, maxValue: e.visibleMax };
        }
      }, {
        key: "setAxisConfig",
        value: function setAxisConfig(e) {
          var a,
              l = this.config;for (a in e) {
            e.hasOwnProperty(a) && (l[a] = e[a]);
          }
        }
      }, {
        key: "getAxisConfig",
        value: function getAxisConfig(e) {
          var a = this.config;return e ? a[e] : a;
        }
      }, {
        key: "getVisibleLength",
        value: function getVisibleLength() {
          var e = this.getVisibleConfig();return Math.abs(e.maxValue - e.minValue);
        }
      }, {
        key: "getAxisEndLabelDisplaySpace",
        value: function getAxisEndLabelDisplaySpace() {
          return this.config.axisEndLabelDisplaySpace || {};
        }
      }, {
        key: "getTicksLen",
        value: function getTicksLen() {
          var e = this.config.tickValues;return e && e.tickValue.length || 0;
        }
      }]);

      return o;
    }(a.default);

    exports.default = o;
  }, { "../../core/component-interface": 62, "../lib/lib": 20, "../lib/lib-graphics": 21 }], 182: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var a = [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "axis" }],
        i = [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "final" }],
        t = { "text.appearing": i, "path.appearing": i, "rect.appearing": i },
        e = { "text.appearing": a, "path.appearing": a, "rect.appearing": a, "scroller.appearing": a };exports.default = { "initial.axis.numeric": e, "initial.axis.category": e, "initial.axis.log": e, "update.axis.numeric": t, "update.axis.category": t, "update.axis.log": t }, exports.appearingAxis = a, exports.appearingFinal = i, exports.axisAnimationAxis = e, exports.axisAnimationFinal = t;
  }, {}], 150: [function (require, module, exports) {
    "use strict";
    function e(e, t) {
      var r = (t = +t) - (e = +e);return function (t) {
        return r * t + e;
      };
    }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = e;
  }, {}], 151: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = function e(_e11, t) {
      return _e11.filter(function (e) {
        return 0 > t.indexOf(e);
      });
    };exports.default = e;
  }, {}], 208: [function (require, module, exports) {
    function r(r, e, n) {
      for (var t = 0, o = n.length; t < o;) {
        if (r(e, n[t])) return !0;t += 1;
      }return !1;
    }module.exports = r;
  }, {}], 212: [function (require, module, exports) {
    function e(e) {
      return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && !0 === e["@@functional/placeholder"];
    }module.exports = e;
  }, {}], 211: [function (require, module, exports) {
    var e = require("./_isPlaceholder");function r(r) {
      return function n(t) {
        return 0 === arguments.length || e(t) ? n : r.apply(this, arguments);
      };
    }module.exports = r;
  }, { "./_isPlaceholder": 212 }], 186: [function (require, module, exports) {
    var r = require("./_curry1"),
        e = require("./_isPlaceholder");function n(n) {
      return function u(t, c) {
        switch (arguments.length) {case 0:
            return u;case 1:
            return e(t) ? u : r(function (r) {
              return n(t, r);
            });default:
            return e(t) && e(c) ? u : e(t) ? r(function (r) {
              return n(r, c);
            }) : e(c) ? r(function (r) {
              return n(t, r);
            }) : n(t, c);}
      };
    }module.exports = n;
  }, { "./_curry1": 211, "./_isPlaceholder": 212 }], 209: [function (require, module, exports) {
    var r = require("./_curry1"),
        n = require("./_curry2"),
        u = require("./_isPlaceholder");function t(t) {
      return function e(c, i, o) {
        switch (arguments.length) {case 0:
            return e;case 1:
            return u(c) ? e : n(function (r, n) {
              return t(c, r, n);
            });case 2:
            return u(c) && u(i) ? e : u(c) ? n(function (r, n) {
              return t(r, i, n);
            }) : u(i) ? n(function (r, n) {
              return t(c, r, n);
            }) : r(function (r) {
              return t(c, i, r);
            });default:
            return u(c) && u(i) && u(o) ? e : u(c) && u(i) ? n(function (r, n) {
              return t(r, n, o);
            }) : u(c) && u(o) ? n(function (r, n) {
              return t(r, i, n);
            }) : u(i) && u(o) ? n(function (r, n) {
              return t(c, r, n);
            }) : u(c) ? r(function (r) {
              return t(r, i, o);
            }) : u(i) ? r(function (r) {
              return t(c, r, o);
            }) : u(o) ? r(function (r) {
              return t(c, i, r);
            }) : t(c, i, o);}
      };
    }module.exports = t;
  }, { "./_curry1": 211, "./_curry2": 186, "./_isPlaceholder": 212 }], 183: [function (require, module, exports) {
    var r = require("./internal/_containsWith"),
        e = require("./internal/_curry3"),
        n = e(function (e, n, t) {
      for (var i = [], u = 0, a = n.length; u < a;) {
        r(e, n[u], t) || r(e, n[u], i) || i.push(n[u]), u += 1;
      }return i;
    });module.exports = n;
  }, { "./internal/_containsWith": 208, "./internal/_curry3": 209 }], 230: [function (require, module, exports) {
    function e(e) {
      for (var n, o = []; !(n = e.next()).done;) {
        o.push(n.value);
      }return o;
    }module.exports = e;
  }, {}], 231: [function (require, module, exports) {
    function n(n) {
      var t = String(n).match(/^function (\w*)/);return null == t ? "" : t[1];
    }module.exports = n;
  }, {}], 224: [function (require, module, exports) {
    function t(t, e) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }module.exports = t;
  }, {}], 227: [function (require, module, exports) {
    var r = require("./internal/_curry2"),
        e = r(function (r, e) {
      return r === e ? 0 !== r || 1 / r == 1 / e : r != r && e != e;
    });module.exports = e;
  }, { "./internal/_curry2": 186 }], 232: [function (require, module, exports) {
    var t = require("./_has"),
        e = Object.prototype.toString,
        r = function r() {
      return "[object Arguments]" === e.call(arguments) ? function (t) {
        return "[object Arguments]" === e.call(t);
      } : function (e) {
        return t("callee", e);
      };
    };module.exports = r;
  }, { "./_has": 224 }], 228: [function (require, module, exports) {
    var r = require("./internal/_curry1"),
        e = require("./internal/_has"),
        t = require("./internal/_isArguments"),
        n = !{ toString: null }.propertyIsEnumerable("toString"),
        o = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        u = function () {
      "use strict";
      return arguments.propertyIsEnumerable("length");
    }(),
        i = function i(r, e) {
      for (var t = 0; t < r.length;) {
        if (r[t] === e) return !0;t += 1;
      }return !1;
    },
        l = "function" != typeof Object.keys || u ? function (r) {
      if (Object(r) !== r) return [];var l,
          c,
          f = [],
          s = u && t(r);for (l in r) {
        !e(l, r) || s && "length" === l || (f[f.length] = l);
      }if (n) for (c = o.length - 1; c >= 0;) {
        l = o[c], e(l, r) && !i(f, l) && (f[f.length] = l), c -= 1;
      }return f;
    } : function (r) {
      return Object(r) !== r ? [] : Object.keys(r);
    },
        c = r(l);module.exports = c;
  }, { "./internal/_curry1": 211, "./internal/_has": 224, "./internal/_isArguments": 232 }], 229: [function (require, module, exports) {
    var e = require("./internal/_curry1"),
        r = e(function (e) {
      return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
    });module.exports = r;
  }, { "./internal/_curry1": 211 }], 226: [function (require, module, exports) {
    var e = require("./_arrayFromIterator"),
        r = require("./_containsWith"),
        a = require("./_functionName"),
        n = require("./_has"),
        t = require("../identical"),
        s = require("../keys"),
        u = require("../type");function c(a, n, t, s) {
      var u = e(a),
          c = e(n);function o(e, r) {
        return i(e, r, t.slice(), s.slice());
      }return !r(function (e, a) {
        return !r(o, a, e);
      }, c, u);
    }function i(e, r, o, f) {
      if (t(e, r)) return !0;var l = u(e);if (l !== u(r)) return !1;if (null == e || null == r) return !1;if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof r["fantasy-land/equals"]) return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](r) && "function" == typeof r["fantasy-land/equals"] && r["fantasy-land/equals"](e);if ("function" == typeof e.equals || "function" == typeof r.equals) return "function" == typeof e.equals && e.equals(r) && "function" == typeof r.equals && r.equals(e);switch (l) {case "Arguments":case "Array":case "Object":
          if ("function" == typeof e.constructor && "Promise" === a(e.constructor)) return e === r;break;case "Boolean":case "Number":case "String":
          if ((typeof e === "undefined" ? "undefined" : _typeof(e)) != (typeof r === "undefined" ? "undefined" : _typeof(r)) || !t(e.valueOf(), r.valueOf())) return !1;break;case "Date":
          if (!t(e.valueOf(), r.valueOf())) return !1;break;case "Error":
          return e.name === r.name && e.message === r.message;case "RegExp":
          if (e.source !== r.source || e.global !== r.global || e.ignoreCase !== r.ignoreCase || e.multiline !== r.multiline || e.sticky !== r.sticky || e.unicode !== r.unicode) return !1;}for (var y = o.length - 1; y >= 0;) {
        if (o[y] === e) return f[y] === r;y -= 1;
      }switch (l) {case "Map":
          return e.size === r.size && c(e.entries(), r.entries(), o.concat([e]), f.concat([r]));case "Set":
          return e.size === r.size && c(e.values(), r.values(), o.concat([e]), f.concat([r]));case "Arguments":case "Array":case "Object":case "Boolean":case "Number":case "String":case "Date":case "Error":case "RegExp":case "Int8Array":case "Uint8Array":case "Uint8ClampedArray":case "Int16Array":case "Uint16Array":case "Int32Array":case "Uint32Array":case "Float32Array":case "Float64Array":case "ArrayBuffer":
          break;default:
          return !1;}var q = s(e);if (q.length !== s(r).length) return !1;var p = o.concat([e]),
          g = f.concat([r]);for (y = q.length - 1; y >= 0;) {
        var m = q[y];if (!n(m, r) || !i(r[m], e[m], p, g)) return !1;y -= 1;
      }return !0;
    }module.exports = i;
  }, { "./_arrayFromIterator": 230, "./_containsWith": 208, "./_functionName": 231, "./_has": 224, "../identical": 227, "../keys": 228, "../type": 229 }], 223: [function (require, module, exports) {
    var r = require("./internal/_curry2"),
        e = require("./internal/_equals"),
        n = r(function (r, n) {
      return e(r, n, [], []);
    });module.exports = n;
  }, { "./internal/_curry2": 186, "./internal/_equals": 226 }], 219: [function (require, module, exports) {
    var e = require("../equals");function n(n, r, t) {
      var f, u;if ("function" == typeof n.indexOf) switch (typeof r === "undefined" ? "undefined" : _typeof(r)) {case "number":
          if (0 === r) {
            for (f = 1 / r; t < n.length;) {
              if (0 === (u = n[t]) && 1 / u === f) return t;t += 1;
            }return -1;
          }if (r != r) {
            for (; t < n.length;) {
              if ("number" == typeof (u = n[t]) && u != u) return t;t += 1;
            }return -1;
          }return n.indexOf(r, t);case "string":case "boolean":case "function":case "undefined":
          return n.indexOf(r, t);case "object":
          if (null === r) return n.indexOf(r, t);}for (; t < n.length;) {
        if (e(n[t], r)) return t;t += 1;
      }return -1;
    }module.exports = n;
  }, { "../equals": 223 }], 218: [function (require, module, exports) {
    var e = require("./_indexOf");function r(r, n) {
      return e(n, r, 0) >= 0;
    }module.exports = r;
  }, { "./_indexOf": 219 }], 199: [function (require, module, exports) {
    var r = require("./internal/_contains"),
        e = require("./internal/_curry2"),
        n = e(function (e, n) {
      for (var t = [], i = 0, u = e.length; i < u;) {
        r(e[i], n) || r(e[i], t) || (t[t.length] = e[i]), i += 1;
      }return t;
    });module.exports = n;
  }, { "./internal/_contains": 218, "./internal/_curry2": 186 }], 159: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports._parseLabel = exports.extractStyleInfo = exports.getLabel = exports.setAxisPadding = exports._createContainer = exports.shiftLabels = exports.setTickValues = exports._drawLabel = exports.getPixel = exports.getTrendLineLimits = exports.setDataLimit = exports.setAxisDimention = void 0;var e = require("../lib/lib"),
        t = require("ramda/src/difference"),
        a = i(t);function i(e) {
      return e && e.__esModule ? e : { default: e };
    }var n = { wrtVisible: !0 },
        r = "_label",
        l = "normal",
        o = function o(t, a) {
      var i,
          n,
          r,
          o,
          s,
          x,
          c,
          p = { labelfont: ["fontFamily"], labelfontcolor: ["fontColor"], labelfontsize: ["fontSize", function (t) {
          return t ? (0, e.pluckNumber)(t) + "px" : e.UNDEF;
        }], labelfontbold: ["fontWeight", function (e) {
          return e ? "bold" : l;
        }], labelfontitalic: ["fontStyle", function (e) {
          return e ? "italic" : l;
        }], labelfontalpha: ["fontAlpha"] },
          g = a.getFromEnv("dataSource").categories,
          m = g && g[0] || {},
          u = function u(e) {
        return e;
      },
          f = !1,
          d = {};for (i in m) {
        "category" === i || i in t || (n = m[i], t[i] = n);
      }for (i in p) {
        s = (o = p[i])[0], x = o[1] || u, n = t[i], r = t[s.toLowerCase()], (n !== e.UNDEF || r !== e.UNDEF) && ((c = x(n)) !== e.UNDEF || (c = x(r)) !== e.UNDEF) && (d[s] = c, f = !0), f && (t.style = d);
      }
    },
        s = function s(t) {
      var a = this,
          i = a.getScale(),
          n = a.config,
          r = a.getFromEnv("chart").config,
          l = n.axisDimention || (n.axisDimention = {}),
          o = n.isReverse;l.opposite = (0, e.pluckNumber)(t.opposite, l.opposite), l.x = (0, e.pluckNumber)(t.x, l.x, r.canvasLeft), l.y = (0, e.pluckNumber)(t.y, l.y, r.canvasTop), l.axisLength = (0, e.pluckNumber)(t.axisLength, l.axisLength), n.isVertical ? o ? i.setRange([l.y + l.axisLength, l.y]) : i.setRange([l.y, l.y + l.axisLength]) : o ? i.setRange([l.x + l.axisLength, l.x]) : i.setRange([l.x, l.x + l.axisLength]), n.translation = a._computeTranslation();
    },
        x = function x(t, a) {
      var _ref3, _ref4, _o$getTrendLineLimits, _o$getTrendLineLimits2, _ref5, _ref6;

      var i,
          n,
          r,
          l,
          o = this,
          s = o.config,
          x = o.getFromEnv("dataSource").categories,
          c = x && x[0] && x[0].category,
          p = s.startPad || 0,
          g = s.endPad || 0,
          m = s.xAxisLabelMode;("categories" === m || "mixed" === m) && (_ref3 = (0, e.extent)(c, function (e) {
        return +e.x;
      }), _ref4 = _slicedToArray(_ref3, 2), i = _ref4[0], n = _ref4[1], _ref3), (_o$getTrendLineLimits = o.getTrendLineLimits(), _o$getTrendLineLimits2 = _slicedToArray(_o$getTrendLineLimits, 2), r = _o$getTrendLineLimits2[0], l = _o$getTrendLineLimits2[1], _o$getTrendLineLimits), (_ref5 = (0, e.extent)([r, l, i, n, a, t], function (e) {
        return +e;
      }), _ref6 = _slicedToArray(_ref5, 2), a = _ref6[0], t = _ref6[1], _ref5), s.originalMax = t, s.originalMin = a, t = s.isPercent ? 100 : t + g, a = s.isPercent ? 0 : a - p, o._setAxisRange({ min: a, max: t }), s.axisRange.tickInterval !== e.UNDEF && o._adjustNumberFormatter(s.axisRange.tickInterval);
    },
        c = function c() {
      var _ref7, _ref8, _ref9, _ref10;

      var t = void 0,
          a = void 0,
          i = void 0,
          n = void 0,
          r = this.config,
          l = r.trendLines || r.vTrendLines || r.trendPoints,
          o = l && l[0] && l[0].line || l && l.point;return r.trendLimits ? r.trendLimits : ((_ref7 = (0, e.extent)(o, function (t) {
        return "" === t.startvalue ? e.UNDEF : +t.startvalue;
      }), _ref8 = _slicedToArray(_ref7, 2), t = _ref8[0], a = _ref8[1], _ref7), (_ref9 = (0, e.extent)(o, function (t) {
        return "" === t.endvalue ? e.UNDEF : +t.endvalue;
      }), _ref10 = _slicedToArray(_ref9, 2), i = _ref10[0], n = _ref10[1], _ref9), r.trendLimits = (0, e.extent)([t, a, i, n], function (e) {
        return +e;
      }), r.trendLimits);
    },
        p = function p(e) {
      return this.getScale().getRangeValue(e);
    },
        g = function g() {
      var e,
          t,
          i,
          n,
          l,
          o,
          s,
          x,
          c,
          p,
          g,
          m = this,
          u = m.config,
          f = m.getFromEnv("animationManager"),
          d = this.getFromEnv("toolTipController"),
          b = u.axisRange,
          h = u.labels.style,
          L = m.components,
          T = b.max,
          v = b.min,
          O = u.axisContainer,
          P = u.extremeLabels,
          I = u.ticks,
          y = [],
          S = { fontFamily: h.fontFamily, fontSize: h.fontSize, fontWeight: h.fontWeight, fontStyle: h.fontStyle, lineHeight: h.lineHeight };if (u.labels.isDraw) for (g = L.labels, p = L.labelIndexArr, O.css(S), t = 0, i = p && p.length; t < i; t += 1) {
        l = "" + (x = I[e = p[t]]) + r, n = m.getGraphicalElement(l), s = g[e].config.props.label.attr, n = m.addGraphicalElement(l, f.setAnimation({ el: n || "text", attr: s, container: O, data: { value: x }, component: m, label: "text" })), s.tooltext ? d.enableToolTip(n, s.tooltext) : d.disableToolTip(n), x === T ? P.lastLabel.graphic = n : x === v && (P.firstLabel.graphic = n), y.push(l);
      }for (e = 0, i = (c = (0, a.default)(u.prevIntervalArr, y)).length; e < i; e++) {
        (o = m.getGraphicalElement(c[e])) && m.removeGraphicalElement(o);
      }u.prevIntervalArr = y;
    },
        m = function m() {
      var t,
          a,
          i,
          r,
          l,
          o,
          s,
          x,
          c,
          p,
          g,
          m,
          u,
          f,
          d,
          b,
          h,
          L = Math.ceil,
          T = this,
          v = T.config,
          O = T.getLinkedItem("canvas").getEffectiveDimensions(),
          P = v.axisDimention,
          I = T.getFromEnv("chart"),
          y = I.config,
          S = v.axisRange,
          N = v.isOpposit,
          D = v.labels,
          _ = T.components,
          k = _.labels,
          C = D.style,
          F = I.getFromEnv("smartLabel"),
          E = v.isVertical,
          V = S.max,
          w = S.min,
          M = T.getFromEnv("number-formatter"),
          A = O.top,
          R = O.left,
          G = A + O.height,
          W = R + O.width,
          z = v.labelPadding,
          B = v.extremeLabels,
          U = E ? P.x : P.y,
          H = P.opposite,
          j = v.labelMaxH,
          $ = v.labelMaxW,
          X = S.tickInterval,
          Y = Math.abs(T.getPixel(w, n) - T.getPixel(w + X, n)),
          q = [],
          Z = v.ticks,
          J = 0,
          K = v.isReverse,
          Q = (0, e.pluckNumber)(T.getFromEnv("chart-attrib").showzeroplanevalue),
          ee = !0,
          te = T.getLimit();if (F.useEllipsesOnOverflow(y.useEllipsesWhenOverflow), F.setStyle({ fontSize: C.fontSize, fontFamily: C.fontFamily, lineHeight: C.lineHeight, fontWeight: C.fontWeight }), (r = C.lineHeight) && -1 !== r.indexOf("px") && (r = parseFloat(r.replace("px", ""))), 0 === Q && (ee = !1), v.labels.isDraw) {
        if (v.drawLabelsOpposit && (N = !N, U = H), c = { fill: C.color, "line-height": r, "font-size": C.fontSize, opacity: 1 }, i = v.labels.rotation, E ? (v.labelMaxH > Y && !v.tickValues && (s = L(v.labelMaxH / Y)), c["text-anchor"] = N ? e.POSITION_START : e.POSITION_END) : (v.labelMaxW > Y && !v.tickValues && (s = L(v.labelMaxW / Y)), i ? (c["text-anchor"] = N ? e.POSITION_START : e.POSITION_END, c["vertical-align"] = "middle") : c["vertical-align"] = N ? e.POSITION_BOTTOM : e.POSITION_TOP, g = R, m = y.width - W), s > v.labels.step && (v.labels.step = s), x = v.numberFormatterFn ? M[v.numberFormatterFn] : v.isPercent ? M.percentValue : E ? M.yAxis : M.xAxis, B.firstLabel = {}, B.lastLabel = {}, h = Z.filter(function (e, t, a) {
          return 0 !== e || v.showZeroPlaneValue ? (E || t === a.length - 1 || !(T.getPixel(e, n) + v.labelMaxW > W)) && (0 == t % v.labels.step ? (q[J++] = t, !0) : !(!v.labels.drawLimitVal || 0 !== t && t !== a.length - 1 || (q[J++] = t, 0))) : ee && (!ee || te.max === e || te.min === e) && (q[J++] = t, !0);
        }), v.isZeroTickForced && -1 !== h.indexOf(0)) {
          var _e12 = void 0;J = 0, q = [], b = T.getPixel(0), h = h.filter(function (t, a, i) {
            return _e12 = T.getPixel(t), 0 === i[a + 1] || 0 === i[a - 1] ? E ? !(_e12 + j >= b && b >= _e12 - j || (q[J++] = a, 0)) : !(_e12 + $ >= b && b >= _e12 - $ || (q[J++] = a, 0)) : (q[J++] = a, !0);
          });
        }for (l = (E ? $ : Y / 2) * v.labels.step, o = E ? Y / 2 : j, _.labelIndexArr = q.slice(), t = 0, a = h.length; t < a; t += 1) {
          u = h[t], k[q[t]] = k[q[t]] || { config: { props: { label: {} } } }, f = k[q[t]].config, p = Object.assign({}, c), (v.labels.drawNormalVal || u === w || u === V) && (v.labels.drawLimitVal || u !== w && u !== V) ? u === w && v.lowerLimitDisplay && v.labels.drawLimitVal ? (d = F.getSmartText(v.lowerLimitDisplay, l, o + r / 2), p.text = d.text, p.tooltext = d.tooltext) : u === V && v.upperLimitDisplay && v.labels.drawLimitVal ? (d = F.getSmartText(v.upperLimitDisplay, l, o + r / 2), p.text = d.text, p.tooltext = d.tooltext) : p.text = "" + x.call(M, u, v.axisIndex) : p.text = "", E ? (p.x = N ? (U || W) + z : (U || R) - z, p.y = T.getPixel(u, n), (K && u === w && v.lowerLimitDisplay || !K && u === V && v.upperLimitDisplay) && f.height > r && (p["vertical-align"] = e.POSITION_BOTTOM), (K && u === V && v.upperLimitDisplay || !K && u === w && v.lowerLimitDisplay) && f.height > r && (p["vertical-align"] = e.POSITION_TOP), v.placeValuesInside && (p["text-anchor"] = N ? e.POSITION_END : e.POSITION_START)) : (p.x = T.getPixel(u, n), p.y = N ? (U || A) - z : (U || G) + z, (!K && u === w || K && u === V) && f.width > 2 * g && (p["text-anchor"] = e.POSITION_START), (!K && u === V || K && u === w) && f.width > 2 * m && (p["text-anchor"] = e.POSITION_END), p["vertical-align"] = v.placeValuesInside ? N ? e.POSITION_TOP : e.POSITION_BOTTOM : N ? e.POSITION_BOTTOM : e.POSITION_TOP), D.shiftX && (p.x += D.shiftX), D.shiftY && (p.y += D.shiftY), p.transform = (0, e.getSuggestiveRotation)(i, p.x, p.y), k[q[t]].config.props.label.attr = p;
        }
      }
    },
        u = function u(t) {
      var a,
          i,
          n = t && t.length,
          r = this.config,
          l = r.startPad || 0,
          s = this.getFromEnv("chart"),
          x = 0,
          c = r.tickValues = {},
          p = c.tickValue = [],
          g = c.vline = [],
          m = c.tickIdMap = {},
          u = r.endPad || 0;for (r.hasCategory = 1, a = 0; a < n; a += 1) {
        (i = (0, e.extend2)({}, t[a])).vline ? (i.startIndex = p.length - 1, g.push(i)) : (i.id && (m[i.id.toLowerCase()] = { tickObj: i, index: x }), (r.mapTickValuesById && i.id || !r.mapTickValuesById) && (o(i, s), p.push(i), p[x].label = (0, e.parseUnsafeString)(p[x].label), x += 1));
      }r.oriCatLen = x, this._setAxisRange({ max: +(0, e.toPrecision)(x - 1 + u, 10), min: +(0, e.toPrecision)(0 - l, 10), tickInterval: +(0, e.toPrecision)(1, 10) });
    },
        f = function f(e, t) {
      var a = this.config.labels;a.shiftX = e, a.shiftY = t;
    },
        d = function d() {
      var e = void 0,
          t = void 0,
          a = void 0,
          i = void 0,
          n = void 0,
          r = this,
          l = r.config,
          o = l.isVertical,
          s = r.getLinkedParent().getChildContainer(),
          x = s.axisBottomGroup,
          c = s.axisTopGroup,
          p = -r.getTranslation(),
          g = o ? "T0," + p : "T" + p + ",0";t = r.createContainer("axisNameGroup", { name: "dataset-Name-group" }, x), e = r.createContainer("axisLineGroup", { name: "axis-Line-group" }, c), a = r.createContainer("axisTrendGroupTop", { name: "dataset-Trend-group-top" }, c), i = r.createContainer("axisLabelGroup", { name: "dataset-Label-group" }, x), n = r.createContainer("axisLabelGroupTop", { name: "dataset-Label-group" }, c), l.scrollerContainer = r.createGroup("scrollerContainer", { name: "scroller-container" }, e, "scroller"), l.axisContainer = r.createGroup("axisContainer", { name: "dataset-axis", transform: g }, i), l.axisLabelContainerTop = r.createGroup("axisLabelContainerTop", { name: "dataset-top-label", transform: g }, n), l.axisAxisLineContainer = r.createGroup("axisAxisLineContainer", { name: "axis-line-tick" }, e), l.axisTrendLabelContainer = r.createGroup("axisTrendLabelContainer", { name: "dataset-axis-trend-label" }, a), l.axisNameContainer = r.createGroup("axisNameContainer", { name: "dataset-axis-name" }, t), l.axisAxisLineContainerBottom = r.createGroup("axisAxisLineContainerBottom", { name: "axis-line-tick-bottom" }, x);
    },
        b = function b() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var a,
          i = Math.max,
          n = this,
          r = n.config,
          l = n.getScale(),
          _l$getDomain = l.getDomain(),
          _l$getDomain2 = _slicedToArray(_l$getDomain, 2),
          o = _l$getDomain2[0],
          s = _l$getDomain2[1];1 === r.oriCatLen && (0 === e && (e = .5), 0 === t && (t = .5)), a = e - r.startPad, r.startPad = i(r.startPad, e), r.endPad = i(r.endPad, t), 0 < a && (r.setPadding = !0, n._setAxisRange({ min: o - a, max: s + a })), !r.tickValues && r.originalMax && r.originalMin && n.setDataLimit(r.originalMax, r.originalMin);
    },
        h = function h(t) {
      var a = this.config,
          i = a.tickValues && a.tickValues.tickValue[t],
          n = {};return i && i.tooltext && (n.label = i.label, i.tooltext = (0, e.parseTooltext)(i.tooltext, [3], n)), { label: i && (i.oriLabel || i.label), tooltext: i && i.tooltext };
    };exports.setAxisDimention = s, exports.setDataLimit = x, exports.getTrendLineLimits = c, exports.getPixel = p, exports._drawLabel = g, exports.setTickValues = u, exports.shiftLabels = f, exports._createContainer = d, exports.setAxisPadding = b, exports.getLabel = h, exports.extractStyleInfo = o, exports._parseLabel = m;
  }, { "../lib/lib": 20, "ramda/src/difference": 199 }], 148: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.minimumEnquiry = exports.getCrispPath = void 0;var e = require("./axis"),
        a = p(e),
        t = require("../lib/lib.js"),
        i = require("../lib/lib-graphics"),
        l = require("../animation-rules/cartesian-axis-animation"),
        n = p(l),
        r = require("./utils/interpolators/number"),
        o = p(r),
        s = require("./utils/array/diff"),
        d = p(s),
        c = require("ramda/src/differenceWith"),
        g = p(c),
        h = require("../dependency-manager"),
        m = require("./common-api");function p(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = "crisp",
        b = "butt",
        x = "eventArgs",
        f = "_trend",
        v = "_tick",
        k = "_label",
        L = function L(e, a) {
      var t,
          i,
          l = Math.round,
          n = !1,
          r = a % 2;return e[1] === e[4] && (i = l(t = e[1]), e[1] = e[4] = r ? i > t ? i - .5 : i + .5 : i, n = !0), e[2] === e[5] && (i = l(t = e[2]), e[2] = e[5] = r ? i > t ? i - .5 : i + .5 : i, n = !0), { path: e, isCrisped: n };
    },
        T = function T(e) {
      return function (a, t) {
        return !!(e.minValue <= a && e.maxValue >= a || e.minValue <= t && e.maxValue >= t);
      };
    },
        w = function w(e) {
      return function (a) {
        return !!(e.minValue <= a && e.maxValue >= a);
      };
    },
        y = { wrtVisible: !0 },
        N = function N(e) {
      for (var a = 0, t = e.length; a < t; a++) {
        if (e[a].label || e[a].oriLabel) return a;
      }
    };function S(e, a) {
      var t = Math.max;var i = 0;return e.relativeAxis && e.relativeAxis.config && e.relativeAxis.config.axisNamePadding && (i = t(e.relativeAxis.config.axisNamePadding, i)), e.isOpposit && a.canvasMarginRight && (i = t(i, a.canvasMarginRight - a.marginLeft - e.nameMaxW)), !e.isOpposit && a.canvasMarginLeft && (i = t(i, a.canvasMarginLeft - a.marginRight - e.nameMaxW)), i;
    }(0, h.addDep)({ name: "cartesianAxisAnimation", type: "animationRule", extension: n.default });
    var C = function (_a$default4) {
      _inherits(C, _a$default4);

      function C() {
        var _this23;

        _classCallCheck(this, C);

        (_this23 = _possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this)), _this23), _this23.config.referenceInfo = [], _this23.config.prevTicks = [], _this23.config.prevIntervalArr = [], _this23.config.prevTrendLabels = [], _this23.config.prevCategoryIntervalArr = [];return _this23;
      }

      _createClass(C, [{
        key: "placeAxis",
        value: function placeAxis(e) {
          var a,
              t = this,
              i = t.getScale(),
              l = t.getFromEnv("chart"),
              n = t.getLinkedItem("scrollBar"),
              r = t.config.isVertical,
              o = t.config.isOpposit,
              s = t.config.isReverse,
              d = l.config,
              c = {};return n && (a = n.getLogicalSpace()) && (r ? (l.config.shift = a.width + n.config.conf.padding, c[o ? "right" : "left"] = l.config.shift) : (l.config.shift = a.height + n.config.conf.padding, c[o ? "top" : "bottom"] = l.config.shift), l._allocateSpace(c)), r ? (s ? i.setRange([d.canvasBottom, d.canvasTop]) : i.setRange([d.canvasTop, d.canvasBottom]), t._placeVerticalAxis(e)) : (s ? i.setRange([d.canvasRight, d.canvasLeft]) : i.setRange([d.canvasLeft, d.canvasRight]), t._placeHorizontalAxis(e));
        }
      }, {
        key: "_placeVerticalAxis",
        value: function _placeVerticalAxis(e) {
          var a,
              i,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              g,
              h,
              m,
              p,
              u,
              b,
              x,
              f,
              v,
              k = Math.min,
              L = Math.max,
              T = this,
              w = T.config,
              y = T.getFromEnv("chart"),
              N = y.config,
              S = y.getFromEnv("smartLabel"),
              C = w.axisRange,
              P = w.minLabelWidthPercent,
              D = w.name,
              E = w.isOpposit,
              V = T.getFromEnv("number-formatter"),
              A = N.canvasHeight,
              F = w.labelPadding = (0, t.pluckNumber)(w.rawAttr.axisValuePadding, 4),
              O = (0, t.pluckNumber)(w.rawAttr.axisNamePadding, 5),
              _ = w.useEllipsesWhenOverflow,
              I = w.name.style,
              M = w.trend.trendStyle,
              R = w.axisName,
              W = w.trendLines,
              H = w.drawLabelsOpposit,
              B = w.drawAxisNameOpposit,
              G = 0,
              z = 0,
              U = 0,
              Z = 0,
              q = 0,
              $ = 0,
              j = { left: 0, right: 0 },
              K = "",
              X = "",
              Y = 0,
              J = -1;if (P && (J = P / 100 * N.width), w.oriCanvasHeight = A, 0 > F && (w.labelPadding = 2), x = w.drawTick && w.tickLength ? w.axisLineThickness + w.tickLength : w.axisLineThickness, w.showAxisLine ? (w.labelPadding = (0, t.pluckNumber)(F, 2) + x, 0 > w.labelPadding && (w.labelPadding = (0 > w.axisLineThickness ? 0 : x) + 2), e -= w.axisLineThickness) : (w.labelPadding = (0, t.pluckNumber)(F, 2), 0 > w.labelPadding && (w.labelPadding = 2)), c = C.max, g = C.min, w.name.rotation = 0, w.labels.step = w.labelStep, w.labels.isDraw = 1, w.labels.drawNormalVal = w.showDivLineValues, w.labels.drawLimitVal = w.showLimits, Y = +(Y = I.lineHeight).replace(/px/i, ""), R && Y < e && (e -= Y), 1 !== w.showLimits && 1 !== w.showDivLineValues && (w.labels.isDraw = 0), ((m = w.drawLabels ? T._getVMaxLabelDimention(e - w.labelPadding) : { width: 0, height: 0 }).width + w.labelPadding > e && !w.tickValues || 0 === m.width) && (w.labels.isDraw = 0), w.labels.isDraw && (w.labelMaxW = m.width > J ? m.width : J, w.labelMaxH = m.height, U = G = w.labelMaxW + w.labelPadding), w.drawTrendLines && w.drawTrendLabels && W && W.length) {
            for (n = w.isPercent ? V.percentValue : w.isVertical ? V.yAxis : V.xAxis, S.useEllipsesOnOverflow(N.useEllipsesWhenOverflow), S.setStyle({ fontSize: M.fontSize, fontFamily: M.fontFamily, lineHeight: M.lineHeight, fontWeight: M.fontWeight }), a = 0, i = W.length; a < i; a += 1) {
              for (d = 0, p = W[a].line && W[a].line.length; d < p; d += 1) {
                u = W[a].line[d], f = V.getCleanValue((0, t.pluck)(u.startvalue, u.value, 0)), v = (0, t.pluckNumber)(u.endvalue, f), f <= c && f >= g && v <= c && v >= g && (w.isOpposit && (u.valueonright = 1), s = 1 === (b = (0, t.pluckNumber)(u.valueonright, 0)) ? u.endvalue || u.startvalue : u.startvalue || u.endvalue, (h = (0, t.parseUnsafeString)(u.origText || u.displayvalue || s || "")) === s && (h = "" + n.call(V, h)), b ? h.length > X.length && (X = h) : h.length > K.length && (K = h));
              }
            }for ($ = (m = S.getOriSize(X)).width + w.labelPadding, q = (m = S.getOriSize(K)).width + w.labelPadding, E ? ($ > U && $ > e && ($ = e), q > e - (U = L(U, $ + w.labelPadding)) && (q = k(q, e - U))) : (q > U && q > e && (q = e), $ > e - (U = L(U, q + w.labelPadding)) && ($ = k($, e - U))), a = 0, i = W.length; a < i; a += 1) {
              for (d = 0, p = W[a].line && W[a].line.length; d < p; d += 1) {
                u = W[a].line[d], f = V.getCleanValue((0, t.pluck)(u.startvalue, u.value, 0)), v = (0, t.pluckNumber)(u.endvalue, f), h = 1 == +u.valueonright ? u.origText || u.displayvalue || "" + v || "" : u.origText || u.displayvalue || "" + f || "", (+(h = (0, t.parseUnsafeString)("" + h)) === v || +h === f) && (h = "" + n.call(V, h)), u.origText = h, o = (b = (0, t.pluckNumber)(u.valueonright, 0)) ? S.getSmartText(h, $, y.canvasHeight, _) : S.getSmartText(h, U, y.canvasHeight, _), (l = w.parsedTrendLabels[z++]) && (l.attr.text = u.displayvalue = o.text, w.isOpposit && (l.valueOnRight = 1, l.attr["text-anchor"] = t.POSITION_START)), o.tooltext ? (u.valueToolText = o.tooltext, l && (l.valueToolText = u.valueToolText)) : (delete u.valueToolText, l && delete l.valueToolText);
              }
            }
          }return e += Y, !w.drawAxisName || 0 >= e - U - $ || "" === R ? (D.isDraw = !1, D.value = "") : (S.setStyle({ fontSize: I.fontSize, fontFamily: I.fontFamily, lineHeight: I.lineHeight, fontWeight: I.fontWeight }), D.isDraw = !0, w.rotateAxisName ? (w.name.rotation = E ? 90 : 270, r = S.getSmartText(R, A, e - U - $), D.value = R, w.nameMaxW = k(r.height), Z = w.nameMaxW + O) : (r = S.getSmartText(R, e - U - $, A), D.value = R, w.nameMaxW = k(r.width, e - U), w.nameMaxH = r.height, 0 <= w.axisNameWidth && (w.nameMaxW = k(w.nameMaxW, w.axisNameWidth)), Z = w.nameMaxW + O)), E ? (H ? (j.left += L(G, q), j.right += $) : (j.left += q, j.right += L(G, $)), B ? (w.axisNamePadding = j.left + O, j.left += Z) : (w.axisNamePadding = j.right + O, j.right += Z)) : (H ? (j.left += q, j.right += L(G, $)) : (j.left += L(G, q), j.right += $), B ? (w.axisNamePadding = j.right + O, j.right += Z) : (w.axisNamePadding = j.left + O, j.left += Z)), D.isDraw && w.axisNamePadding + w.nameMaxW > e && (w.axisNamePadding = e - w.nameMaxW, Z = w.nameMaxW + w.axisNamePadding - U), j;
        }
      }, {
        key: "_placeHorizontalAxis",
        value: function _placeHorizontalAxis(e) {
          var a,
              i,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              g,
              h,
              m,
              p,
              u,
              b,
              x,
              f,
              v,
              k = this,
              L = k.config,
              T = k.getFromEnv("chart"),
              w = T.config,
              y = T.getFromEnv("smartLabel"),
              N = L.axisRange,
              S = L.name,
              C = L.isOpposit,
              P = T.getFromEnv("number-formatter"),
              D = L.drawLabelsOpposit,
              E = L.drawAxisNameOpposit,
              V = 0,
              A = w.canvasWidth,
              F = L.labelPadding = (0, t.pluckNumber)(L.rawAttr.axisValuePadding, 4),
              O = (0, t.pluckNumber)(L.rawAttr.axisNamePadding, 5),
              _ = L.useEllipsesWhenOverflow,
              I = L.name.style,
              M = L.trend.trendStyle,
              R = L.axisName,
              W = L.vTrendLines,
              H = 0,
              B = 0,
              G = 0,
              z = { top: 0, bottom: 0 },
              U = 0,
              Z = 0;if (0 > F && (L.labelPadding = 2), x = L.drawTick && L.tickLength ? L.axisLineThickness + L.tickLength : L.axisLineThickness, L.showAxisLine ? (L.labelPadding = (0, t.pluckNumber)(F, 2) + x, 0 > L.labelPadding && (L.labelPadding = (0 > L.axisLineThickness ? 0 : x) + 2), e -= L.axisLineThickness) : (L.labelPadding = (0, t.pluckNumber)(F, 2), 0 > L.labelPadding && (L.labelPadding = 2)), s = N.max, d = N.min, L.labels.rotation = 0, L.labels.step = L.labelStep, L.labels.isDraw = 1, L.labels.drawNormalVal = L.showDivLineValues, L.labels.drawLimitVal = L.showLimits, Z = +(Z = I.lineHeight).replace(/px/i, ""), R && Z < e && (e -= Z), L.rotateLabels && "stagger" !== L.labelDisplay && "none" !== L.labelDisplay && (L.labelDisplay = "rotate"), 1 !== L.showLimits && 1 !== L.showDivLineValues && (L.labels.isDraw = 0), u = L.drawLabels ? k._getHMaxLabelDimention(e - L.labelPadding) : { width: 0, height: 0 }, L.labels.rotation ? u.width + L.labelPadding > e && !L.tickValues && (L.labels.isDraw = 0) : u.height + L.labelPadding > e && !L.tickValues && (L.labels.isDraw = 0), L.labels.isDraw && (L.labels.rotation ? (L.labelMaxW = u.height, L.labelMaxH = u.width, V = u.width + L.labelPadding) : (L.labelMaxW = u.width, L.labelMaxH = u.height, V = u.height + L.labelPadding), H = V), h = (H = Math.max(H, L.labelPadding)) <= e ? e - H : e, L.drawTrendLines && L.drawTrendLabels && W && L.isActive) for (b = L.isPercent ? k.getFromEnv("number-formatter").percentValue : L.isVertical ? k.getFromEnv("number-formatter").yAxis : k.getFromEnv("number-formatter").xAxis, y.useEllipsesOnOverflow(w.useEllipsesWhenOverflow), y.setStyle({ fontSize: M.fontSize, fontFamily: M.fontFamily, lineHeight: M.lineHeight, fontWeight: M.fontWeight }), i = 0, l = W.length; i < l; i += 1) {
            for (o = 0, g = W[i].line && W[i].line.length; o < g; o += 1) {
              m = W[i].line[o], f = P.getCleanValue((0, t.pluck)(m.startvalue, m.value, 0)), v = (0, t.pluckNumber)(m.endvalue, f), f <= s && f >= d && v <= s && v >= d && (a = 1 === (0, t.pluckNumber)(m.valueonright, 0) ? m.endvalue || m.startvalue : m.startvalue || m.endvalue, (c = (0, t.parseUnsafeString)(m.origText || m.displayvalue || a || "")) === a && (c = "" + b.call(T.getFromEnv("number-formatter"), c)), m.origText = c, 0 > h - ((p = y.getSmartText(c, T.canvasWidth, M.lineHeight, _)).height + 2) ? m.displayvalue = "" : ((n = L.parsedTrendLabels[B++]) && (n.attr.text = m.displayvalue = p.text), U = U < p.height ? p.height : U), p.tooltext ? (m.valueToolText = p.tooltext, n && (n.valueToolText = m.valueToolText)) : (delete m.valueToolText, n && delete n.valueToolText));
            }
          }return h -= U, H += U, h += Z, e += Z, !L.drawAxisName || 0 >= h || "" === R ? (S.isDraw = !1, S.value = "") : (y.setStyle({ fontSize: I.fontSize, fontFamily: I.fontFamily, lineHeight: I.lineHeight, fontWeight: I.fontWeight }), S.isDraw = !0, r = y.getSmartText(R, A, h), S.value = R, L.nameMaxW = A, L.nameMaxH = r.height, G = r.height + O, L.axisNamePadding = O + H, L.axisNamePadding + r.height > e && (L.axisNamePadding = e - r.height, G = r.height + L.axisNamePadding - H)), C ? (D ? z.bottom += V + U : (z.top += V, z.bottom += U), L.trendBottomPadding = z.bottom - U + 2, E ? z.bottom += G : z.top += G) : (D ? (z.top += V, z.bottom += U) : z.bottom += V + U, L.trendBottomPadding = z.bottom - U + 2, E ? z.top += G : z.bottom += G), z;
        }
      }, {
        key: "_parseCategoryPlotLine",
        value: function _parseCategoryPlotLine() {
          var e,
              a,
              l,
              n = this,
              r = n.config,
              o = r.axisRange,
              s = r.tickValues.tickValue,
              d = (0, i.convertColor)(r.divLineColor, r.divLineAlpha),
              c = r.divLineThickness,
              g = r.divLineIsDashed ? (0, t.getDashStyle)(r.divLineDashLen, r.divLineDashGap, c) : t.DASH_DEF,
              h = w(n.getVisibleConfig()),
              m = r._allTicks,
              p = m.length;if (e = { stroke: d, "stroke-width": c, "stroke-dasharray": g }, (!s[0] || s[0].x === t.UNDEF && s[0].y === t.UNDEF) && r.lines.isDraw && r.categoryNumDivLines) for (a = 0; a < p; ++a) {
            h(l = m[a]) && l !== o.min && l !== o.max && n.setReferenceInfo({ from: l, type: "line", layer: 1, attr: e });
          }
        }
      }, {
        key: "_drawComponents",
        value: function _drawComponents() {
          var e = this,
              a = e.config;a.drawAxisName && e._drawAxisName(), a.drawAxisLine && e._drawAxisLine(), a.tickValues ? a.drawLabels && e._drawCategory() : a.drawLabels && e._drawLabel(), a.drawTrendLines && e.drawTrendLabel(), e._drawScrollBar();
        }
      }, {
        key: "drawTrendLabel",
        value: function drawTrendLabel() {
          var e = void 0,
              a = void 0,
              i = void 0,
              l = void 0,
              n = void 0,
              r = void 0,
              o = void 0,
              s = void 0,
              d = void 0,
              c = void 0,
              h = void 0,
              m = void 0,
              p = void 0,
              u = void 0,
              b = void 0,
              x = void 0,
              v = this,
              k = v.config,
              L = k.parsedTrendLabels,
              T = v.getFromEnv("animationManager"),
              w = this.getFromEnv("toolTipController"),
              N = k.axisTrendLabelContainer,
              S = k.isOpposit,
              C = k.labelPadding,
              P = k.vTrendLines,
              D = k.trendLines,
              E = k.axisDimention,
              V = v.getVisibleConfig(),
              A = V.minValue,
              F = V.maxValue,
              O = !0;for (b = 0, x = L.length; b < x; b++) {
            L[b].id = b + f;
          }for (P ? l = S ? E.opposite - (k.trendBottomPadding || 0) : E.y + (k.trendBottomPadding || 0) : (l = S ? E.opposite + (C || 0) : E.x - (C || 0), n = S ? E.x + (C || 0) : E.opposite + (C || 0)), b = 0, x = (p = (0, g.default)(function (e, a) {
            return e.attr.text === a.attr.text;
          }, k.prevTrendLabels, L)).length; b < x; b++) {
            (m = v.getGraphicalElement(p[b].id)) && v.removeGraphicalElement(m);
          }if (k.prevTrendLabels = (0, t.extend2)([], L), k.drawTrendLabels) for (b = 0, x = L.length; b < x; b++) {
            a = L[b], i = v.getGraphicalElement(b + f), o = +a.from, d = +a.to, O = !0, (u = !isNaN(d)) ? (A > (s = o + (d - o) / 2) || F < s) && (O = !1) : (A > o || F < o) && (O = !1), O ? (P ? (c = v.getPixel(o, y), h = d ? v.getPixel(d, y) : 0, r = (0, t.pluckNumber)(a.isTrendZone, k.isTrendZone, 1), u && d != o && r ? (a.attr.x = c + (h - c) / 2, a.attr.y = l) : (a.attr.x = d ? h : c, a.attr.y = l)) : D && (c = v.getPixel(o, y), h = d ? v.getPixel(d, y) : 0, e = (0, t.pluckNumber)(a.valueOnRight, 0), r = (0, t.pluckNumber)(a.isTrendZone, k.isTrendZone, 0), u && d != o && r ? (a.attr.x = e ? n : l, a.attr.y = c + (h - c) / 2) : (a.attr.x = e ? n : l, a.attr.y = d && e ? h : c)), i = v.addGraphicalElement(b + f, T.setAnimation({ container: N, el: i || "text", attr: a.attr, css: a.css, data: { value: s || o }, component: v, label: "text" })), k.showTooltip && a.valueToolText ? w.enableToolTip(i, a.valueToolText) : w.disableToolTip(i)) : i && v.removeGraphicalElement(i);
          } else for (b = 0, x = L.length; b < x; b++) {
            (m = v.getGraphicalElement(L[b].id)) && v.removeGraphicalElement(m);
          }
        }
      }, {
        key: "_drawAxisName",
        value: function _drawAxisName() {
          var e,
              a,
              i,
              l,
              n,
              r,
              o = Math.max,
              s = this,
              d = s.config,
              c = this.getFromEnv("toolTipController"),
              g = s.getLinkedItem("canvas").getEffectiveDimensions(),
              h = s.getFromEnv("animationManager"),
              m = g.left,
              p = g.top,
              u = g.width,
              b = g.height,
              x = p + b,
              f = s.getFromEnv("chart").config,
              v = d.name.style,
              k = d.name.value,
              L = d.isOpposit,
              T = d.isVertical,
              w = s.getFromEnv("smartLabel"),
              y = d.axisNameContainer,
              N = d.axisNamePadding,
              C = d.nameMaxH,
              P = d.nameMaxW,
              D = d.axisDimention,
              E = T ? D.x : D.y,
              V = D.opposite,
              A = s.getGraphicalElement("axisName"),
              F = (0, t.pluckNumber)(d.name.rotation, T ? 90 : 270),
              O = s.getFromEnv("paper"),
              _ = { fontFamily: v.fontFamily, fontSize: v.fontSize, lineHeight: v.lineHeight, fontWeight: v.fontWeight, fontStyle: v.fontStyle };d.name.isDraw ? (e = { fontFamily: v.fontFamily, fill: v.color, "vertical-align": "middle", "font-size": v.fontSize, "line-height": v.lineHeight }, w.useEllipsesOnOverflow(f.useEllipsesWhenOverflow), w.setStyle({ fontSize: v.fontSize, fontFamily: v.fontFamily, lineHeight: v.lineHeight, fontWeight: v.fontWeight }), d.drawAxisNameOpposit && (L = !L, E = V), T ? (N = o(N, S(d, f)), l = d.axisNameAlignCanvas || f.captionalignment && "left" === f.captionalignment ? b : o(b, d.oriCanvasHeight || 0), F ? (i = (a = w.getSmartText(k, l, P)).tooltext, n = a.width) : (i = (a = w.getSmartText(k, P, l)).tooltext, n = a.height), r = d.drawAxisNameFromBottom ? x - n / 2 : n > b ? f.height / 2 : p + b / 2, e.text = a.text, e.x = L ? (E || m + u) + N + P / 2 : (E || m) - N - P / 2, e.y = r) : (i = (a = w.getSmartText(k, u, C)).tooltext, L && f.canvasMarginTop && (N = o(N, f.canvasMarginTop - f.marginTop - C)), !L && f.canvasMarginBottom && (N = o(N, f.canvasMarginBottom - f.marginBottom - C)), e.text = a.text, e.x = m + u / 2, e.y = L ? (E || p) - N - C / 2 : (E || x) + N + C / 2), e["text-bound"] = "" === a.text ? [] : [v.backgroundColor, v.borderColor, v.borderColor ? v.borderThickness : 0, v.borderPadding, v.borderRadius, v.borderDash], e.transform = O.getSuggestiveRotation(T ? F : 0, e.x, e.y), A = s.addGraphicalElement("axisName", h.setAnimation({ css: _, el: A || "text", attr: e, container: y, component: s, label: "text" })), d.showTooltip ? c.enableToolTip(A, i) : c.disableToolTip(A)) : A && s.removeGraphicalElement(A);
        }
      }, {
        key: "_drawAxisLine",
        value: function _drawAxisLine() {
          var e = "axisLine";var a,
              i,
              l,
              n,
              r,
              o,
              s,
              c,
              g,
              h,
              m,
              p,
              x,
              f,
              k,
              T,
              w,
              N,
              S = this,
              C = S.config,
              P = C.isVertical,
              D = C.isOpposit,
              E = S.getFromEnv("chart"),
              V = S.getLinkedItem("canvas").getEffectiveDimensions(),
              A = S.getFromEnv("animationManager"),
              F = V.top,
              O = V.left,
              _ = F + V.height,
              I = O + V.width,
              M = C.axisDimention,
              R = P ? M.x : M.y,
              W = C.drawAxisLineWRTCanvas,
              H = E.getFromEnv("dataSource").chart,
              B = C.axisAxisLineContainerBottom,
              G = S.getGraphicalElement("axisLine"),
              z = [];if (n = 1 === (0, t.pluckNumber)(H.showyaxisline, H.showyaxisline) ? (0, t.pluckNumber)(H.yaxislinethickness, H.pyaxislinethickness, 1) : 0, C.showAxisLine) {
            if (P ? (D ? r = (R = W ? I : R) + C.axisLineThickness / 2 : r = (R = W ? O : R) - C.axisLineThickness / 2, l = (T = L(["M", r, _, "L", r, F], C.axisLineThickness)).path) : (D ? r = (R = W ? F : R) - C.axisLineThickness / 2 : r = (R = W ? _ : R) + C.axisLineThickness / 2, l = (T = L(["M", O - n, r, "L", I, r], C.axisLineThickness)).path), c = { path: l, stroke: C.axisLineColor, "stroke-linecap": b, "stroke-width": C.axisLineThickness, "shape-rendering": T.isCrisped ? u : t.UNDEF }, C.drawTick && C.tickLength) for (a = { stroke: C.tickColor, "stroke-width": C.tickWidth }, o = P ? D ? r + C.tickLength : r - C.tickLength : D ? r - C.tickLength : r + C.tickLength, k = 0, N = (w = C.tickValues ? C.tickValues.tickValue.map(function (e) {
              return P ? e.y : e.x;
            }) : C.ticks).length; k < N; k += 1) {
              x = "" + (p = w[k]) + v, h = S.getGraphicalElement(x), s = S.getPixel(p, y), a.path = L(P ? ["M", r, s, "L", o, s] : ["M", s, r, "L", s, o], C.tickWidth).path, g = A.setAnimation({ el: h || "path", attr: a, data: { value: p, path: a.path }, container: B, component: S, label: "path" }), h || S.addGraphicalElement(x, g), z.push(x);
            }i = A.setAnimation({ el: G || "path", attr: c, container: B, component: S, label: "path" }), G || S.addGraphicalElement(e, i), z.push(e);
          }for (k = 0, N = (f = (0, d.default)(C.prevTicks, z)).length; k < N; k++) {
            (m = S.getGraphicalElement(f[k])) && S.removeGraphicalElement(m);
          }C.prevTicks = z;
        }
      }, {
        key: "_parseCategory",
        value: function _parseCategory() {
          var e,
              a,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              g,
              h,
              m,
              p,
              u,
              b,
              x,
              f,
              v,
              k,
              L,
              T,
              w,
              N,
              S,
              C,
              P,
              D,
              E,
              V,
              A = Math.abs,
              F = this,
              O = F.config,
              _ = O.axisDimention || {},
              I = F.getFromEnv("chart"),
              M = I.getFromEnv("smartLabel"),
              R = F.components,
              W = R.labels,
              H = F.getLinkedItem("canvas").getEffectiveDimensions(),
              B = I.config,
              G = O.isOpposit,
              z = O.labels,
              U = z.style,
              Z = O.isVertical,
              q = H.top,
              $ = H.left,
              j = q + H.height,
              K = $ + H.width,
              X = O.labelPadding,
              Y = Z ? _.x : _.y,
              J = _.opposite,
              Q = I.getFromEnv("dataSource").categories,
              ee = {},
              ae = O.tickValues.tickValue,
              te = O.axisRange.min,
              ie = O.drawnStaggerLines,
              le = (O.labelStep !== O.labels.step || 1 !== F.getZoom()) && "stagger" === O.labelDisplay;if (O.labels.isDraw) for (Z && (C = A(F.getPixel(0, y) - F.getPixel(0 + O.axisRange.tickInterval, y)), O.labelMaxH > C && (T = Math.ceil(O.labelMaxH / C)), T > O.labels.step && (O.labels.step = T)), le && (S = 2 * A(F.getPixel(te, y) - F.getPixel(te + O.labels.step, y)) * O.sWidthAdjstFactor - 1), D = (n = O.labels.rotation) ? O.labelMaxH : O.labelMaxW, E = n ? O.labelMaxW : O.labelMaxH, O.drawLabelsOpposit && (G = !G, Y = J), Q && Q[0] && "auto" !== O.xAxisLabelMode && (ee.fontFamily = Q[0].font, ee.fontSize = Q[0].fontsize, ee.color = Q[0].fontcolor), O.ParentCss = p = { fontFamily: (0, t.pluck)(ee.fontFamily, U.fontFamily), fontSize: (0, t.pluck)(ee.fontSize, U.fontSize), fontWeight: (0, t.pluck)(U.fontWeight), fontStyle: (0, t.pluck)(U.fontStyle) }, p.lineHeight = (0, t.setLineHeight)(p), k = F._getCategoryArr(), R.labelIndexArr = [], e = 0, L = k.length; e < L; e += 1) {
            a = ae[V = k[e].index], f = k[e].value, R.labelIndexArr.push(V), c = (0, t.pluck)(a.font, a.labelfont), g = (0, t.pluck)(a.fontsize, a.labelfontsize), h = (0, t.pluck)(a.fontbold, a.labelfontbold) ? (0, t.pluckNumber)(a.fontbold, a.labelfontbold, 0) ? "bold" : t.NORMAL : t.UNDEF, m = (0, t.pluck)(a.fontitalic, a.labelfontitalic) ? (0, t.pluckNumber)(a.fontitalic, a.labelfontitalic, 0) ? "italic" : t.NORMAL : t.UNDEF, b = (0, i.convertColor)((0, t.pluck)(a.fontcolor, a.labelfontcolor, ee.color, U.color), (0, t.pluckNumber)(a.labelalpha, O.rawAttr.labelFontAlpha, I.config.singleseries ? t.UNDEF : a.alpha, 100)), c || g || h || m ? (d = {}, c && (d.fontFamily = c), g && (d.fontSize = g), h && (d.fontWeight = h), m && (d.fontStyle = m), d.lineHeight = g ? (0, t.setLineHeight)(d) : p.lineHeight) : d = t.UNDEF, (d || p) && -1 !== (o = (d || p).lineHeight).indexOf("px") && (r = o.replace(/px/i, ""), r = parseFloat(r)), !1 === a.appliedSmartLabel && (M.setStyle(a._ovrStyle || p), P = M.getSmartText(a.oriLabel || a.label, D, E), a.oriLabel = a.oriLabel || a.label, a.label = P.text, a.labelTooltext = P.labelTooltext, a.appliedSmartLabel = !0), x = F.getPixel(f, y), Z ? (l = a.label || "", s = +a.labelPadding || 0, u = { fill: b, "line-height": r, opacity: 1, "text-anchor": G ? t.POSITION_START : t.POSITION_END, text: l, cursor: !B.singleseries && a.link || a.labellink || U.labelLink ? t.POINTER : "", x: G ? (Y || K) + X : (Y || $) - X, y: s ? x + s : x }) : (l = a.label || "", s = +a.labelPadding || 0, u = { fill: b, "line-height": r, opacity: 1, text: l, cursor: !B.singleseries && a.link || a.labellink || U.labelLink ? t.POINTER : "", x: x, y: G ? (q || Y) - X : (Y || j) + X }, n ? (u["text-anchor"] = G ? t.POSITION_START : t.POSITION_END, u["vertical-align"] = "middle") : (u["text-anchor"] = t.POSITION_MIDDLE, u["vertical-align"] = G ? t.POSITION_BOTTOM : t.POSITION_TOP), le ? ((w = a.labelCount % ie) && (!(r = a.style.lineHeight) && (r = O.labels.style.lineHeight), N = r.replace(/px/i, "") * w, u.y = G ? u.y - N : u.y + N), M.setStyle(a._ovrStyle || p), P = M.getSmartText(a.oriLabel || a.label, S, E), a.oriLabel = a.oriLabel || a.label, u.text = a.label = P.text, a.labelTooltext = P.labelTooltext, a.appliedSmartLabel = !0) : s && (G ? u.y -= s : u.y += s)), v = { label: a.label, lineHeight: o, border: (0, t.pluckNumber)(a.borderthickness, a.labelborderthickness) ? (0, t.pluckNumber)(a.borderthickness, a.labelborderthickness, 1) + "px solid" : "", borderColor: a.bordercolor || a.labelbordercolor ? (0, i.convertColor)(a.bordercolor || a.labelbordercolor, (0, t.pluckNumber)(a.borderalpha, a.labelborderalpha, a.alpha, a.labelalpha, 100)) : t.BLANKSTRING, borderThickness: (0, t.pluckNumber)(a.borderthickness, a.labelborderthickness), borderPadding: (0, t.pluckNumber)(a.borderpadding, a.labelborderpadding), borderRadius: (0, t.pluckNumber)(a.borderradius, a.labelborderradius), backgroundColor: a.bgcolor || a.labelbgcolor ? (0, i.convertColor)(a.bgcolor || a.labelbgcolor, (0, t.pluckNumber)(a.bgalpha, a.labelbgalpha, a.alpha, a.labelalpha, O.rawAttr.labelFontAlpha, 100)) : t.BLANKSTRING, borderDash: (0, t.pluckNumber)(a.borderdashed, a.labelborderdashed, 0) ? (0, t.getDashStyle)((0, t.pluckNumber)(a.borderdashlen, a.labelborderdashlen, 4), (0, t.pluckNumber)(a.borderdashgap, a.labelborderdashgap, 2)) : 0 === (0, t.pluckNumber)(a.borderdashed, a.labelborderdashed) ? t.DASH_DEF : U.borderDash }, u["text-bound"] = a.label ? [(0, t.pluck)(v.backgroundColor, U.backgroundColor), (0, t.pluck)(v.borderColor, U.borderColor), (0, t.pluck)(v.borderThickness, U.borderThickness), (0, t.pluck)(v.borderPadding, U.borderPadding), (0, t.pluck)(v.borderRadius, U.borderRadius), (0, t.pluck)(v.borderDash, U.borderDash)] : [], z.shiftX && (u.x += z.shiftX), z.shiftY && (u.y += z.shiftY), u.transform = (0, t.getSuggestiveRotation)(n, u.x, u.y), W[V] = W[V] || { config: { props: { label: {} } } }, W[V].config.props.label.attr = u, W[V].config.props.label.css = d;
          }
        }
      }, {
        key: "allocatePosition",
        value: function allocatePosition() {
          var e = this,
              a = e.config;a.tickValues ? a.drawLabels && e._parseCategory() : a.drawLabels && e._parseLabel();
        }
      }, {
        key: "_drawCategory",
        value: function _drawCategory() {
          var e,
              a,
              i,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              h,
              m = this,
              p = m.config,
              u = m.getFromEnv("chart"),
              b = u.config,
              f = p.labels,
              v = m.getFromEnv("animationManager"),
              L = f.style,
              T = this.getFromEnv("toolTipController"),
              w = p.axisContainer,
              y = m.config.categoryLabel || (m.config.categoryLabel = []),
              N = function N(e) {
            return function (a) {
              u.plotEventHandler(this, a, e);
            };
          },
              S = p.tickValues.tickValue,
              C = [];if (p.labels.isDraw) {
            for (w.css(p.ParentCss), r = m._getCategoryArr(), n = (0, g.default)(function (e, a) {
              return e.value === a.value;
            }, p.prevCategoryIntervalArr, r), e = 0, s = n.length; e < s; e++) {
              (c = m.getGraphicalElement("" + n[e].value + k)) && m.removeGraphicalElement(c);
            }for (p.prevCategoryIntervalArr = (0, t.extend2)([], r), e = 0, s = r.length; e < s; e += 1) {
              C[e] = "" + r[e].value + k;
            }for (e = 0, s = r.length; e < s; e += 1) {
              a = S[h = r[e].index], l = (d = m.components.labels[h].config).props.label.attr, o = m.getGraphicalElement(C[e]), i = v.setAnimation({ el: o || "text", attr: l, container: w, data: { value: void 0 }, component: m, label: "text", css: d.props.label.css }), o || (m.addGraphicalElement(C[e], i), i.click(N("dataLabelClick")).hover(N("dataLabelRollOver"), N("dataLabelRollOut"))), i.data(x, { link: !b.singleseries && a.link || a.labellink || L.labelLink, text: l.text, index: h }), a.labelTooltext ? T.enableToolTip(i, a.labelTooltext) : T.disableToolTip(i), y[h] = i;
            }
          } else for (e = 0, s = p.prevCategoryIntervalArr.length; e < s; e++) {
            (c = m.getGraphicalElement("" + p.prevCategoryIntervalArr[e].value + k)) && m.removeGraphicalElement(c);
          }
        }
      }, {
        key: "_getCategoryArr",
        value: function _getCategoryArr() {
          var e,
              a,
              i,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              g = this,
              h = g.config,
              m = h.isVertical,
              p = 0,
              u = 0,
              b = [];for (e = h.tickValues.tickValue, l = N(e), i = e ? e.length - 1 : 0, m && (d = Math.abs(g.getPixel(0, y) - g.getPixel(1, y)), h.labelMaxH > d && (p = Math.ceil(h.labelMaxH / d)), p > h.labels.step && (h.labels.step = p)), s = 0 < h.labels.step ? h.labels.step : 1, c = 1 !== g.getZoom(), r = this.getVisibleConfig(), a = l; a <= i; a += s) {
            if ((n = e[a]) && (o = (0, t.pluckNumber)(n.x, n.y, a), 0 !== (0, t.pluckNumber)(n.showlabel, h.showLabels, 1))) {
              if (c && (o < r.minValue || o > r.maxValue)) {
                n.labelCount = u++;continue;
              }("auto" !== h.xAxisLabelMode && "mixed" !== h.xAxisLabelMode || 0 !== h.showZeroPlane && 0 !== h.showZeroPlaneValue || 0 !== o) && (h.labels.drawNormalVal || h.labels.drawLimitVal && (a == l || a == i)) && (h.labels.drawNormalVal || a == l || a == i) && (h.labels.drawLimitVal || a != l && a != i) && (n.labelCount = u++, b.push({ index: a, value: o }));
            }
          }return b;
        }
      }, {
        key: "getValue",
        value: function getValue(e) {
          var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { wrtVisible: !1 };
          var t = this.getScale(),
              i = this.getTranslation();return t.getDomainValue(a.wrtVisible ? e : e - i);
        }
      }, {
        key: "getPixel",
        value: function getPixel(e) {
          var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { wrtVisible: !1 };
          var t = this.getScale(),
              i = this.getTranslation(),
              l = t.getRangeValue(e);return a.wrtVisible ? l : l + i;
        }
      }, {
        key: "_getCustomPixel",
        value: function _getCustomPixel(e, a) {
          var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { wrtVisible: !1 };
          if (!a) return this.getPixel(e, t);var i = this.getScale().copy(),
              _i$getRange = i.getRange(),
              _i$getRange2 = _slicedToArray(_i$getRange, 2),
              l = _i$getRange2[0],
              n = _i$getRange2[1],
              r = Math.min(l, n),
              o = i.getRangeValue(e),
              s = this.getTranslation();return i.setRange([r, r + a]), t.wrtVisible ? o : o + s;
        }
      }, {
        key: "getTranslation",
        value: function getTranslation() {
          return this.config.translation || 0;
        }
      }, {
        key: "setScrollType",
        value: function setScrollType(e) {
          ("none" === e || "smart" === e || "always" === e) && (this.config.scrollType = e, "none" === e ? this.disableScroll() : this.enableScroll());
        }
      }, {
        key: "getScrollType",
        value: function getScrollType() {
          return this.config.scrollType;
        }
      }, {
        key: "_createScrollBar",
        value: function _createScrollBar() {
          var e,
              a,
              t,
              i = this,
              l = i.config,
              n = i.getFromEnv("chart"),
              r = i.getFromEnv("animationManager"),
              s = i.getLinkedItem("scrollBar");e = n.getFromEnv("toolbox"), a = n.getFromEnv("toolBoxAPI").Scroller, s || i.setLinkedItem("scrollBar", s = new a()), s.configure({ isHorizontal: !l.isVertical }, e.idCount, e.pId, i.getFromEnv("chartInstance").id), s.attachEventHandlers({ scrollStart: function scrollStart(e) {
              t = e, n.fireChartInstanceEvent("scrollstart", { scrollPosition: e });
            }, scroll: function scroll(e) {
              var a = l.axisRange.max,
                  t = l.axisRange.min,
                  s = i.getVisibleConfig(),
                  d = s.minValue,
                  c = s.maxValue - d,
                  g = (0, o.default)(t, a - c),
                  h = l.isReverse ? g(1 - e) : g(e);i.setState("scrolling", !0), r.setAnimationState("scroll"), n.fireChartInstanceEvent("onScroll", { scrollPosition: e }), i.setVisibleConfig(h, h + c);
            }, scrollEnd: function scrollEnd(e) {
              n.fireChartInstanceEvent("scrollend", { scrollPosition: e, prevScrollPosition: t });
            } });
        }
      }, {
        key: "_disposeScrollBar",
        value: function _disposeScrollBar() {
          var e = this.getLinkedItem("scrollBar");e && (e.hide(), this.removeLinkedItem("scrollBar"));
        }
      }, {
        key: "_drawScrollBar",
        value: function _drawScrollBar() {
          var e,
              a,
              i,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              g,
              h,
              m,
              p,
              u,
              b,
              x = this,
              f = x.getFromEnv("chart"),
              v = x.config,
              k = v.axisRange,
              L = v.scrollOptions || (v.scrollOptions = {}),
              T = k.max,
              w = k.min,
              N = L.vxLength,
              S = x.getLinkedItem("scrollBar"),
              C = f.getChildren("canvas")[0].config,
              P = v.scrollerContainer;S && (e = C.canvasLeft, a = C.canvasTop, i = C.canvasHeight, l = C.canvasWidth, n = C.canvasBorderWidth, r = v.showAxisLine && v.axisLineThickness || 0, o = (0, t.pluckNumber)(n, v.lineStartExtension), s = (0, t.pluckNumber)(n, v.lineEndExtension), L.viewPortMin = w, L.viewPortMax = T, d = (p = (h = x.getVisibleConfig()).maxValue - (m = h.minValue)) / (u = k.max - k.min), b = (m - k.min) / (u - p), c = L.windowedCanvasWidth = x.getPixel(N, y), g = L.fullCanvasWidth = x.getPixel(T - w, y) - c, v.isVertical ? S.draw(e, a, { height: i, scrollRatio: d, roundEdges: C.isRoundEdges, fullCanvasWidth: g, windowedCanvasWidth: c, scrollPosition: v.isReverse ? 1 - b : b, parentLayer: P }) : S.draw(e - o, a + i + n + r - 2, { width: l + o + s, scrollRatio: d, roundEdges: C.isRoundEdges, fullCanvasWidth: g, windowedCanvasWidth: c, scrollPosition: b, parentLayer: P }));
        }
      }, {
        key: "enableScroll",
        value: function enableScroll() {
          this.isScrollEnabled() || this._createScrollBar();
        }
      }, {
        key: "disableScroll",
        value: function disableScroll() {
          this.isScrollEnabled() && this._disposeScrollBar();
        }
      }, {
        key: "isScrollEnabled",
        value: function isScrollEnabled() {
          return !!this.getLinkedItem("scrollBar");
        }
      }, {
        key: "setVisibleConfig",
        value: function setVisibleConfig(e, a) {
          var t = void 0,
              i = this,
              l = i.config,
              n = i.getZoom(),
              r = i.getScale();return !(e >= a || e < l.axisRange.min || a > l.axisRange.max || (t = r.setDomain([e, a]).getDomain(), l.visibleMin = t[0], l.visibleMax = t[1], l.zoom = i._computeZoom(), l.translation = i._computeTranslation(), (1 !== n || 1 !== i.getZoom()) && (l.ticks = i.generateTicks(), l.minorTicks = i.generateMinorTicks(), l.tickValues && i.calculateTicksOnLabelMode && i.calculateTicksOnLabelMode()), i.decideScroll(), i.clearReferenceInfo(), i._parseReferenceVisuals(), i.fireEvent("visiblerangeset", { minValue: e, maxValue: a }), i.asyncDraw(), 0));
        }
      }, {
        key: "hide",
        value: function hide() {
          var e = this.config;e.axisContainer && (e.axisLabelContainerTop.hide(), e.scrollerContainer.hide(), e.axisContainer.hide(), e.axisNameContainer.hide(), e.axisTrendLabelContainer.hide(), e.axisAxisLineContainer.hide(), e.axisAxisLineContainerBottom.hide());
        }
      }, {
        key: "show",
        value: function show() {
          var e = this.config;e.axisContainer && (e.axisLabelContainerTop.show(), e.scrollerContainer.show(), e.axisContainer.show(), e.axisNameContainer.show(), e.axisTrendLabelContainer.show(), e.axisAxisLineContainer.show(), e.axisAxisLineContainerBottom.show());
        }
      }, {
        key: "getZoom",
        value: function getZoom() {
          return this.config.zoom || 1;
        }
      }, {
        key: "_computeTranslation",
        value: function _computeTranslation() {
          var e = this.config,
              a = this.getVisibleConfig(),
              i = (0, t.pluckNumber)(a.minValue, e.axisRange.min, 0),
              l = (0, t.pluckNumber)(e.axisRange.min, a.minValue, 0);return this.getPixel(i) - this.getPixel(l);
        }
      }, {
        key: "_computeZoom",
        value: function _computeZoom() {
          var e = this.config,
              a = this.getVisibleConfig(),
              i = (0, t.pluckNumber)(a.minValue, e.axisRange.min, 0),
              l = (0, t.pluckNumber)(a.maxValue, e.axisRange.max, 1),
              n = (0, t.pluckNumber)(e.axisRange.min, a.minValue, 0),
              r = (0, t.pluckNumber)(e.axisRange.max, a.maxValue, 1),
              o = e.maxZoomLimit,
              s = (r - n) / (l - i);return s > o ? o : s;
        }
      }, {
        key: "getTickValues",
        value: function getTickValues() {
          var e = this.config.tickValues;return e && e.tickValue || [];
        }
      }, {
        key: "dataLabels",
        value: function dataLabels(e) {
          var a = this.config.axisIndex;return this.getFromEnv("number-formatter").dataLabels(e, a);
        }
      }, {
        key: "getAxisBase",
        value: function getAxisBase() {
          var _getVisibleConfig = this.getVisibleConfig(),
              e = _getVisibleConfig.minValue,
              a = _getVisibleConfig.maxValue;

          return 0 > e && 0 < a ? 0 : 0 >= a ? a : e;
        }
      }, {
        key: "_parseReferenceVisuals",
        value: function _parseReferenceVisuals() {
          var e,
              a,
              t = this,
              i = t.config,
              l = t.getTickValues(),
              n = l.length,
              r = t.getFromEnv("chartConfig").is3D;i.isActive || (e = i.lines.isDraw, a = i.band.isDraw, i.lines.isDraw = 0, i.band.isDraw = 0), i.tickValues ? i.drawLabels && t._parseCategoryLine(l, 0, n) : i.drawPlotlines && t._parsePlotLine(), i.tickValues && "auto" !== i.xAxisLabelMode ? (i.drawPlotlines && !r && t._parseCategoryPlotLine(), i.drawPlotBands && !r && t._parseCategoryPlotBand(), "mixed" === i.xAxisLabelMode && i.drawPlotBands && !r && t._parsePlotBand()) : i.drawPlotBands && !r && t._parsePlotBand(), i.isActive || (i.lines.isDraw = e, i.band.isDraw = a), i.drawTrendLines && t._parseTrendLine();
        }
      }, {
        key: "_parseCategoryPlotBand",
        value: function _parseCategoryPlotBand() {
          var e,
              a,
              l,
              n,
              r,
              o = this,
              s = o.config,
              d = s.tickValues.tickValue,
              c = s.showAlternateGridColor,
              g = s.alternateGridColor,
              h = s.alternateGridAlpha,
              m = s._allTicks,
              p = o.getLimit(),
              u = p.min,
              b = p.max,
              x = T(o.getVisibleConfig());if ((!d[0] || d[0].x === t.UNDEF && d[0].y === t.UNDEF) && c && s.band.isDraw && s.categoryNumDivLines) for (e = { fill: (0, t.toRaphaelColor)((0, i.convertColor)(g, h)), "stroke-width": 0 }, a = 0, r = 0; r < m.length; ++a, ++r) {
            x(m[r], m[r + 1]) && (l = m[r], 0 == a % 2) && (n = m[r + 1]) !== t.UNDEF && (l === u && (l = "canvasStart"), n === b && (n = "canvasEnd"), o.setReferenceInfo({ from: l, to: n, layer: 0, type: "band", attr: e }));
          }
        }
      }, {
        key: "_parseTrendLine",
        value: function _parseTrendLine() {
          var e,
              a,
              l,
              n,
              r,
              o,
              s,
              d,
              c,
              g,
              h,
              m,
              p,
              u,
              b,
              x,
              f,
              v,
              k,
              L,
              T = this,
              w = T.config,
              y = w.isVertical,
              N = w.axisIndex,
              S = T.getFromEnv("chart-attrib"),
              C = T.getFromEnv("number-formatter"),
              P = w.axisRange,
              D = P.max,
              E = P.min,
              V = w.trend.trendStyle,
              A = { fontFamily: V.fontFamily, fontSize: V.fontSize, lineHeight: V.lineHeight, fontWeight: V.fontWeight, fontStyle: V.fontStyle },
              F = w.vTrendLines,
              O = w.trendLines,
              _ = 0;if (s = O || F) for (l = 0, n = s.length; l < n; l += 1) {
            for (e = 0, a = s[l].line && s[l].line.length; e < a; e += 1) {
              f = y ? "yAxis" : "xAxis", (h = s[l].line[e]).startvalue || h.value || 0, u = C.getCleanValue((0, t.pluck)(h.startvalue, h.value, 0)), b = +h.endvalue || t.UNDEF, r = (0, t.getValidValue)((0, t.parseUnsafeString)((0, t.pluck)(s[l].line[e].tooltext, s[0].tooltext, w.trendlineToolText))), r = (0, t.parseTooltext)(r, [7, 15, 16, 17, 18, 19], { startValue: u, startDataValue: C[f](u, N), endValue: b || u, endDataValue: C[f](b || u, N), axisName: w.axisName }, h), !(u > D || u < E || b > D || b < E) && (F ? (m = (0, t.parseUnsafeString)(h.displayvalue || ""), d = (0, t.pluckNumber)(h.istrendzone, w.isTrendZone, 1), b !== t.UNDEF && "" !== b && b !== u && d ? (c = { fill: (0, i.convertColor)((0, t.pluck)(h.color, w.trendlineColor), (0, t.pluck)(h.alpha, w.trendlineAlpha, 40)), "stroke-width": 0 }, g = { fill: (0, i.convertColor)((0, t.pluck)(h.color, V.color), (0, t.pluck)(h.alpha, w.trendlineAlpha, 99)), "vertical-align": t.POSITION_TOP, text: m }) : (x = (0, t.pluckNumber)(h.thickness, w.trendlineThickness, 1), c = { stroke: (0, i.convertColor)((0, t.pluck)(h.color, w.trendlineColor), (0, t.pluck)(h.alpha, w.trendlineAlpha, 99)), "stroke-width": x, "stroke-dasharray": (0, t.pluck)(h.dashed, w.trendlinesAreDashed) === t.ONESTRING ? (0, t.getDashStyle)((0, t.pluckNumber)(h.dashlen, w.trendlinesDashLen), (0, t.pluckNumber)(h.dashgap, w.trendlinesDashGap)) : t.DASH_DEF }, g = { fill: (0, i.convertColor)((0, t.pluck)(h.color, V.color), (0, t.pluck)(h.alpha, w.trendlineAlpha, 99)), "vertical-align": t.POSITION_TOP, text: m })) : O && (m = (0, t.pluck)((0, t.parseUnsafeString)(h.displayvalue), h.startvalue, ""), p = (0, t.pluckNumber)(h.valueonright, 0), d = (0, t.pluckNumber)(h.istrendzone, w.isTrendZone, 0), b !== t.UNDEF && "" !== b && b !== u && d ? (c = { fill: (0, i.convertColor)((0, t.pluck)(h.color, w.trendlineColor), (0, t.pluck)(h.alpha, w.trendlineAlpha, 40)), "stroke-width": 0 }, g = { "text-anchor": p ? t.POSITION_START : t.POSITION_END, fill: (0, i.convertColor)((0, t.pluck)(h.color, V.color), (0, t.pluck)(h.alpha, w.trendlineAlpha, 99)), text: m }) : (x = (0, t.pluckNumber)(h.thickness, w.trendlineThickness, 1), c = { stroke: (0, i.convertColor)((0, t.pluck)(h.color, w.trendlineColor), (0, t.pluck)(h.alpha, w.trendlineAlpha, 99)), "stroke-width": x, "stroke-dasharray": (0, t.pluck)(h.dashed, w.trendlinesAreDashed) === t.ONESTRING ? (0, t.getDashStyle)((0, t.pluckNumber)(h.dashlen, w.trendlinesDashLen), (0, t.pluckNumber)(h.dashgap, w.trendlinesDashGap)) : t.DASH_DEF }, g = { "text-anchor": p ? t.POSITION_START : t.POSITION_END, fill: (0, i.convertColor)((0, t.pluck)(h.color, V.color), (0, t.pluck)(h.alpha, h.alpha, w.trendlineAlpha, 99)), text: m })), g["text-bound"] = g.text ? [V.backgroundColor, V.borderColor, V.borderThickness, V.borderPadding, V.borderRadius, V.borderDash] : [], w.showTooltip && r || (r = ""), o = w.forceTrendBelow ? 0 : (0, t.pluckNumber)(h.showontop, S.showtrendlinesontop, 0), y ? (v = u, L = b === t.UNDEF ? u : b) : (v = b === t.UNDEF ? u : b, L = u), k = d && v !== L ? "band" : "line", v !== t.UNDEF && T.setReferenceInfo({ from: v, to: L, toolText: r, attr: c, layer: o ? 3 : 2, type: k, id: "trend" + _ + k }), w.parsedTrendLabels.push({ css: A, valueOnRight: p, isTrendZone: d, from: u, to: b, attr: g }), _ += 1);
            }
          }
        }
      }, {
        key: "_parsePlotLine",
        value: function _parsePlotLine() {
          var e,
              a,
              l,
              n,
              r,
              o = this,
              s = o.config,
              d = s.axisRange,
              c = d.max,
              g = d.min,
              h = w(o.getVisibleConfig()),
              m = s.showCanvasBorder,
              p = (0, i.convertColor)(s.divLineColor, s.divLineAlpha),
              u = s.divLineThickness,
              b = s.divLineIsDashed ? (0, t.getDashStyle)(s.divLineDashLen, s.divLineDashGap) : t.DASH_DEF,
              x = (0, i.convertColor)(s.zeroPlaneColor, s.zeroPlaneAlpha),
              f = s.zeroPlaneThickness,
              v = s._allTicks,
              k = v.length,
              L = s.showZeroPlaneOnTop,
              T = s.minorTicks,
              y = T && T.length;if (s.lines.isDraw) for (a = 0; a < k; ++a) {
            h(e = v[a]) && (n = { "stroke-dasharray": b }, !(0 === s.showZeroPlane && 0 === e || m && (e === c || e === g))) && (0 === e && e !== g && e !== c ? (n.stroke = x, n["stroke-width"] = f, L = s.showZeroPlaneOnTop) : (L = 0, n.stroke = p, n["stroke-width"] = u), o.setReferenceInfo({ type: "line", from: e, layer: 0 === e && L ? 3 : 1, attr: n }));
          }for (r = { stroke: s.minorDivlinecolor, "stroke-width": s.minorDivLineThickness, "stroke-dasharray": b }, a = 0; a < y; ++a) {
            l = T[a], o.setReferenceInfo({ type: "line", from: l, layer: 1, attr: r });
          }
        }
      }, {
        key: "_parseCategoryLine",
        value: function _parseCategoryLine(e, a, l) {
          var n,
              r,
              o,
              s,
              d,
              c,
              g = this,
              h = g.config,
              m = g.getFromEnv("color-manager"),
              p = g.getFromEnv("chartInstance").getJSONData().categories,
              u = {};if (a = a || 0, l = l || e ? e.length - 1 : 0, h.drawPlotlines) for (c = 1 !== g.getZoom(), o = this.getVisibleConfig(), p && p[0] && (u.verticalLineColor = p[0].verticallinecolor, u.verticalLineAlpha = p[0].verticallinealpha, u.verticalLineThickness = p[0].verticallinethickness, u.verticalLineDashed = p[0].verticallinedashed, u.verticalLineDashLen = p[0].verticallinedashlen, u.verticalLineDashGap = p[0].verticallinedashgap), n = a; n <= l; n += 1) {
            (r = e[n]) && (d = (0, t.pluckNumber)(r.x, r.y, n), 1 == +r.showverticalline) && (c && (d < o.minValue || d > o.maxValue) || ((s = { stroke: (0, i.convertColor)((0, t.pluck)(r.linecolor, u.verticalLineColor, h.divLineColor, m.getColor("divLineColor")), (0, t.pluck)(r.linealpha, u.verticalLineAlpha, m.getColor("divLineAlpha"))), "stroke-width": (0, t.pluckNumber)(r.linethickness, u.verticalLineThickness, 1) })["stroke-dasharray"] = (0, t.pluckNumber)(r.linedashed, u.verticalLineDashed, 0) ? (0, t.getDashStyle)((0, t.pluckNumber)(r.linedashLen, u.verticalLineDashLen, 4), (0, t.pluckNumber)(r.linedashgap, u.verticalLineDashGap, 2), s["stroke-width"]) : t.DASH_DEF, g.setReferenceInfo({ type: "line", from: d, layer: 1, attr: s })));
          }
        }
      }, {
        key: "_parsePlotBand",
        value: function _parsePlotBand() {
          var e,
              a,
              l,
              n,
              r,
              o,
              s = Math.min,
              d = Math.max,
              c = this,
              g = c.config,
              h = g.showAlternateGridColor,
              m = g.alternateGridColor,
              p = g.alternateGridAlpha,
              u = g._allTicks,
              b = T(c.getVisibleConfig()),
              x = g.isReverse;if (h && g.band.isDraw) for (a = 1, e = { fill: (0, t.toRaphaelColor)((0, i.convertColor)(m, p)), "stroke-width": 0 }, n = 0, l = u.length; n < l; ++n, ++a) {
            b(u[n], u[n + 1]) && 0 == a % 2 && u[n + 1] !== t.UNDEF && (o = x ? d(u[n], u[n + 1]) : s(u[n], u[n + 1]), r = x ? s(u[n], u[n + 1]) : d(u[n], u[n + 1]), c.setReferenceInfo({ from: o, to: r, type: "band", layer: 0, attr: e }));
          }
        }
      }, {
        key: "getReferenceInfo",
        value: function getReferenceInfo() {
          return this.config.referenceInfo;
        }
      }, {
        key: "setReferenceInfo",
        value: function setReferenceInfo(e) {
          this.config.referenceInfo.push(e);
        }
      }, {
        key: "clearReferenceInfo",
        value: function clearReferenceInfo() {
          var e = this.config;e.referenceInfo = [], e.parsedTrendLabels = [], e.parsedVlineInfo = [];
        }
      }, {
        key: "resetStoredLimits",
        value: function resetStoredLimits() {
          this.config.dataLimit = {};
        }
      }, {
        key: "decideScroll",
        value: function decideScroll() {
          var e = this,
              a = e.getScrollType();"always" === a || "smart" === a && 1 !== e.getZoom() ? e.enableScroll() : e.disableScroll();
        }
      }, {
        key: "getAxisDimension",
        value: function getAxisDimension() {
          var _config$axisDimention = this.config.axisDimention,
              e = _config$axisDimention.x,
              a = _config$axisDimention.y,
              t = _config$axisDimention.opposite,
              i = _config$axisDimention.axisLength;
          return { x: e, y: a, opposite: t, axisLength: i };
        }
      }]);

      return C;
    }(a.default);

    C.prototype.setAxisDimention = m.setAxisDimention, C.prototype.shiftLabels = m.shiftLabels, C.prototype._createContainer = m._createContainer, exports.default = C, exports.getCrispPath = L, exports.minimumEnquiry = N;
  }, { "./axis": 181, "../lib/lib.js": 20, "../lib/lib-graphics": 21, "../animation-rules/cartesian-axis-animation": 182, "./utils/interpolators/number": 150, "./utils/array/diff": 151, "ramda/src/differenceWith": 183, "../dependency-manager": 17, "./common-api": 159 }], 158: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./cartesian"),
        t = a(e),
        i = require("../lib/lib"),
        l = require("./common-api");function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var n = 3,
        o = 10;
    var r = function (_t$default3) {
      _inherits(r, _t$default3);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
      }

      _createClass(r, [{
        key: "_getHMaxLabelDimention",
        value: function _getHMaxLabelDimention(t) {
          function l(e, t) {
            switch (t.toLowerCase()) {case "left":
                return U(q._getCustomPixel(e));case "right":
                return U(G.width - q._getCustomPixel(e));}
          }var a,
              r,
              s,
              g,
              h,
              f,
              u,
              m,
              b,
              d,
              c,
              p,
              x,
              y,
              S,
              F,
              L,
              v,
              _,
              W,
              w,
              E,
              P,
              z,
              H,
              k,
              C,
              I,
              N,
              V,
              O,
              D,
              T,
              A = Math.ceil,
              M = Math.max,
              R = Math.floor,
              B = Math.min,
              U = Math.abs,
              j = Number.POSITIVE_INFINITY,
              q = this,
              Y = q.config,
              $ = q.getFromEnv("chart"),
              G = $.config,
              X = $.getFromEnv("smartLabel"),
              Z = Y.axisRange,
              J = Y.labels,
              K = Y.labelDisplay,
              Q = Y.slantLabel,
              ee = J.style,
              te = Y.maxLabelHeight,
              ie = q.getInterval(),
              le = Y.staggerLines,
              ae = Y.labelStep,
              ne = G.canvasLeft,
              oe = G.canvasRight,
              re = le - 2,
              se = Z.max,
              ge = Z.min,
              he = 0,
              fe = Y.tickValues && Y.tickValues.tickValue,
              ue = fe && fe.length,
              me = $.distributedColumns,
              be = 0,
              de = { text: i.UNDEF, width: 0, style: i.UNDEF },
              ce = 0,
              pe = 4,
              xe = i.stubFN,
              ye = i.stubFN,
              Se = i.stubFN,
              Fe = {},
              Le = 0,
              ve = !1,
              _e = 0,
              We = !1,
              we = j,
              Ee = Y.ticks,
              Pe = j;if (me) for (F = 0; F < ue; F++) {
            fe[F + 1] ? fe[F].x && (fe[F].plotWidth = q.getPixel(fe[F + 1].x - fe[F].x) - q.getPixel(0)) : fe[F].plotWidth = q.getPixel(G.canvasRight - fe[F].x) - q.getPixel(0);
          }if (Y.tickValues && (!fe || 0 === fe.length)) return { width: 0, height: 0 };if ("rotate" === K && (Y.rotateLabels = 1), Y.tickValues || (Y.irregularCatAxis = !1), Y.sWidthAdjstFactor = r = 0 == re ? 1 : 1 == re ? 1.5 : re, X.useEllipsesOnOverflow(G.useEllipsesWhenOverflow), X.setStyle({ fontSize: ee.fontSize, fontFamily: ee.fontFamily, lineHeight: ee.lineHeight, fontWeight: ee.fontWeight }), Y.irregularCatAxis) {
            for (fe.sort(function (e, t) {
              return e.x - t.x;
            }), F = 0, be = fe.length; F < be; F++) {
              if (h = fe[F], void 0 !== E) {
                if (Pe = U(h.x - E), z = U(q._getCustomPixel(ge) - q._getCustomPixel(ge + Pe)), X.setStyle(Object.assign({}, h.style)), z < 1.2 * X.getOriSize("W").width) {
                  h.label = "", Pe = we;continue;
                }H._individualIWR = z, h._individualIWL = z, we = Pe;
              }H = h, E = h.x;
            }for (Pe === j && (Pe = R(B(h.x, se - h.x)), Pe = M(Pe, 4)), F = 0, be = fe.length; F < be; F++) {
              h = fe[F], F || (h._individualIWL = 1 / 0), F === be - 1 && (h._individualIWR = 1 / 0), h.individualIW = B(h._individualIWL, h._individualIWR);
            }u = U(q._getCustomPixel(ge) - q._getCustomPixel(ge + Pe)), u = B(2 * l(fe[0].x, "left"), 2 * l(fe[be - 1].x, "right"), u);
          } else u = U(q._getCustomPixel(ge) - q._getCustomPixel(ge + ie));if (t = te || t, Fe.__root__ = { getHeight: function getHeight(e) {
              var t = fe[e]._ovrStyle.lineHeight;return parseInt(t.replace(/(\d+)px/, "$1"), 10);
            }, getWidth: function getWidth() {
              return t;
            }, getCalculatedLabelStep: function getCalculatedLabelStep(e) {
              var t,
                  l,
                  a,
                  n,
                  o,
                  r,
                  s,
                  g,
                  h,
                  b,
                  d = 0,
                  c = e.length,
                  p = Number.NEGATIVE_INFINITY,
                  x = {},
                  y = 0;for (d = 0; d < c; d++) {
                (n = e[d]).style = n.style || {};
              }if (Y.irregularCatAxis) return Y.labelStep;for (d = 0; d < c; d++) {
                (n = e[d]) && (n.label || (n.label = ""), o = n.oriLabel || n.label, f = { fontSize: ee.fontSize, fontFamily: ee.fontFamily, lineHeight: ee.lineHeight, fontWeight: ee.fontWeight }, y++, n.style = n.style || {}, (0, i.extend2)(f, n.style), x[t = f.fontSize + f.fontFamily + f.lineHeight + f.fontWeight] ? o.length > x[t].label.length && (x[t].label = o) : x[t] = { label: o, style: f });
              }for (r in x) {
                x.hasOwnProperty(r) && (l = x[r].style, a = x[r].label, l.lineHeight = (0, i.setLineHeight)(l), X.setStyle(l), Y.rotateLabels && (h = parseInt(l.lineHeight.replace(/(\d+)px/, "$1"), 10)), m = X.getSmartText(a, i.UNDEF, h), g = 0 === Y.rotateLabels ? 60 < m.width ? 60 : m.width : m.height, p = M(g, p));
              }return s = R(U(q._getCustomPixel(se) - q._getCustomPixel(ge)) / p), b = M(A(y / s), Y.labelStep), u = U(q._getCustomPixel(ge) - q._getCustomPixel(ge + b)), y <= s ? Y.labelStep : b;
            } }, Fe._inProp = {}, Fe.getCopyById = function (e) {
            var t,
                l = this._inProp,
                a = this.__root__,
                n = l.copyStore;return (t = (n = n || {})[e]) || ((0, i.extend2)(t = n[e] = {}, a), t);
          }, Y.tickValues) {
            for ("rotate" === K ? (J.rotation = Q ? 300 : 270, c = Fe.getCopyById("rotate")) : "stagger" === K ? ((c = Fe.getCopyById("stagger")).getHeight = function (e) {
              var t, l;return l = (t = Y.tickValues.tickValue[e]) && t.style || (t.style = {}), f = { fontSize: ee.fontSize, fontFamily: ee.fontFamily, lineHeight: ee.lineHeight, fontWeight: ee.fontWeight }, (0, i.extend2)(f, l), X.setStyle(f), X.getOriSize(t.label).height;
            }, c.getWidth = function (e) {
              return pe = 1, e.individualIW ? e.individualIW : 2 * u * r - pe;
            }, Se = function Se(e) {
              var i,
                  l,
                  a,
                  n,
                  o,
                  r,
                  s = e.length,
                  g = 0;if (X.setStyle(ee), a = X.getOriSize("WWW").height, l = e[s - 1], R(l._cumulativeSum) <= A(s * (a + 2))) o = R(t / a), le = 0 > o - le ? o : le;else {
                o = R(t / (a + 4));do {
                  for (g = 0, n = (r = o) - 1, s = e.length; n < s;) {
                    if (s - n < o && (n = s - 1), ~~((i = e[n])._cumulativeSum - g) > -~t) {
                      ve = !0;break;
                    }ve = !1, g = i._cumulativeSum, n += r;
                  }
                } while (o-- && ve);le = B(le, ++o);
              }Y.drawnStaggerLines = le;
            }, xe = function xe(e) {
              var t,
                  i,
                  l,
                  a,
                  n = 0;for (a = 0, i = e.length; a < i; a++) {
                !(t = e[a]).stepSkipped && ((l = (t && t.style || {}).lineHeight) || (l = ee.lineHeight), s = n++ % le, t.labelPadding = s ? l.replace(/px/i, "") * s : 0);
              }
            }) : "none" === K ? ((c = Fe.getCopyById("none")).getHeight = i.stubFN, c.getWidth = i.stubFN, ye = i.stubFN, Y.rotateLabels && (J.rotation = Q ? 300 : 270, P = t), c.getCalculatedLabelStep = function () {
              return Y.labelStep;
            }) : ((c = Fe.getCopyById("auto")).getHeight = function () {
              return t;
            }, c.getWidth = function (e) {
              return e.individualIW ? e.individualIW : u - 2 * pe;
            }, ye = function ye(e, t) {
              var l,
                  a,
                  n,
                  o,
                  r = $.getFromEnv("chart-attrib"),
                  s = (0, i.pluckNumber)(r && r.rotatelabels);if (!Y.irregularCatAxis && (X.setStyle(e), X.getOriSize("WWW").width >= u && 0 !== s)) {
                for (J.rotation = Q ? 300 : 270, J.forceRotate = !0, c = Fe.getCopyById("rotate"), b = c.getWidth, d = c.getHeight, de.width = 0, l = 0, a = t.length; l < a; l++) {
                  (n = t[l]) && (n.label || n.oriLabel) && 0 !== (0, i.pluckNumber)(n.showlabel, Y.showLabels, 1) && !0 !== n.stepSkipped && (o = n._ovrStyle, X.setStyle({ fontSize: o.fontSize, fontFamily: o.fontFamily, lineHeight: o.lineHeight, fontWeight: o.fontWeight }), m = X.getSmartText(n.oriLabel, b(n), d(l)), n.label = m.text, n.labelTooltext = m.tooltext, n._sLabel = m, de.width < m.width && (de.text = m.text, de.width = m.width, de.height = m.height, de.style = o));
                }p = de.text;
              }
            }), b = c.getWidth, d = c.getHeight, ae = Y.labels.step = Y.labelStep = Y._oriLabelStep, ae = Y.labels.step = Y.labelStep = c.getCalculatedLabelStep(fe), F = (0, e.minimumEnquiry)(fe), x = 0, L = 0, be = fe.length; F < be; F++, x++) {
              if ((h = fe[F]) && (h.label || h.oriLabel) && 0 !== (0, i.pluckNumber)(h.showlabel, Y.showLabels, 1)) {
                if (We = !0, f = { fontSize: ee.fontSize, fontFamily: ee.fontFamily, lineHeight: ee.lineHeight, fontWeight: ee.fontWeight }, (0, i.extend2)(f, h.style), f.lineHeight = (0, i.setLineHeight)(f), (O = f.fontSize + f.fontFamily + f.lineHeight + f.fontWeight) != V && (X.setStyle(f), V = O), x % ae) {
                  h.stepSkipped = !0, h.appliedSmartLabel = !1, _e++;continue;
                }h.appliedSmartLabel = !0, h.stepSkipped = !1, h._ovrStyle = f, fe[F].plotWidth ? a = M("rotate" === K ? fe[F].plotWidth - 6 : 0, d(F)) : ("rotate" === K ? F < be - 1 && (g = q.getPixel(F + 1) - q.getPixel(F) - o) : g = 0, "rotate" === K && isNaN(+g) && (g = G.canvasWidth / q.getVisibleLength() - n), a = M(g, d(F))), Le += (m = X.getSmartText(h.oriLabel || h.label, b(h), a)).height + 2, q.components.labels[L++] = { config: { width: m.width, height: m.height, props: { label: {} } } }, h._cumulativeSum = Le, h.oriLabel = h.oriLabel || h.label, h.label = m.text, h.labelTooltext = m.tooltext, h._sLabel = m, de.width < m.oriTextWidth && ((0, i.extend2)(de, m), de.style = f), ce < m.height && (ce = m.height);
              }
            }if (!We) return { height: 0, width: 0 };if (Se(fe, _e), xe(fe, _e), ye(de.style, fe), p = de.text || "", "mixed" === Y.xAxisLabelMode) for (W = Y.isPercent ? $.getFromEnv("number-formatter").percentValue : $.getFromEnv("number-formatter").xAxis, he = p.length, F = 0, D = Ee && Ee.length; F < D; ++F) {
              _ = Ee[F], (v = "" + W.call($.getFromEnv("number-formatter"), _, Y.axisIndex)).length > he && (p = v, he = v.length);
            }for (de.height = M(ce, de.height || 0), I = fe.length, F = 0, be = fe.length; F < be && !(k = fe[F])._sLabel; F++) {}for (F = (be = fe.length) - 1; 0 <= F && !(C = fe[F])._sLabel; F--) {}N = 1 !== q.getZoom(), J.rotation || N || !k._sLabel ? (Y.axisEndLabelDisplaySpace.left = 0, Y.axisEndLabelDisplaySpace.right = 0) : (Y.axisEndLabelDisplaySpace.left = M(ne - (q._getCustomPixel(k.x || 0) - k._sLabel.width / 2), 0), Y.axisEndLabelDisplaySpace.right = M(q._getCustomPixel(C.x || I - 1) + C._sLabel.width / 2 - oe, 0)), w = de;
          } else {
            for (W = Y.numberFormatterFn ? $.getFromEnv("number-formatter")[Y.numberFormatterFn] : Y.isPercent ? $.getFromEnv("number-formatter").percentValue : $.getFromEnv("number-formatter").xAxis, F = 0, D = Ee && Ee.length; F < D; ++F) {
              T = Ee[F], _ = (0, i.toPrecision)(T, 10), v = "" + W.call($.getFromEnv("number-formatter"), _, Y.axisIndex), T === ge && (y = v), T === se && (S = v), w = X.getOriSize(v), q.components.labels[F] = { config: { width: w.width, height: w.height, props: { label: {} } } }, v.length > he && (p = v, he = v.length);
            }X.setStyle({ fontSize: ee.fontSize, fontFamily: ee.fontFamily, lineHeight: ee.lineHeight, fontWeight: ee.fontWeight }), w = X.getOriSize(p || ""), "rotate" === K && (J.rotation = 270), Y.rotateLabels && (J.rotation = Q ? 300 : 270), J.rotation || (y = X.getOriSize(y || ""), S = X.getOriSize(S || ""), Y.axisEndLabelDisplaySpace.left = y.width / 2 + 2, Y.axisEndLabelDisplaySpace.right = S.width / 2 + 2);
          }return Y.tickValues && "stagger" === K && (w.height = le * de.height), w.width = P ? B(P, w.width) : w.width, w.width = (0, i.pluckNumber)(w.width), w.maxWidth = (0, i.pluckNumber)(w.maxWidth), w;
        }
      }, {
        key: "_getVMaxLabelDimention",
        value: function _getVMaxLabelDimention(e) {
          var t,
              l,
              a,
              n,
              o,
              r,
              s,
              g,
              h,
              f,
              u,
              m,
              b,
              d,
              c = this,
              p = c.config,
              x = c.getFromEnv("chart"),
              y = x.config,
              S = x.getFromEnv("smartLabel"),
              F = p.labels.style,
              L = p.useEllipsesWhenOverflow,
              v = p.maxLabelWidthPercent,
              _ = p.minLabelWidthPercent,
              W = 0,
              w = x.getFromEnv("dataSource").categories,
              E = { height: 0, width: 0 },
              P = p.ticks,
              z = {};if (S.useEllipsesOnOverflow(y.useEllipsesWhenOverflow), S.setStyle({ fontSize: F.fontSize, fontFamily: F.fontFamily, lineHeight: F.lineHeight, fontWeight: F.fontWeight }), p.tickValues) {
            for (w && (z = { fontFamily: w[0].font, fontSize: w[0].fontsize, color: w[0].fontcolor }), v && (l = v / 100 * y.width) < e && (e = l), _ && (a = _ / 100 * y.width) > e && (e = a), n = 0, h = (g = p.tickValues.tickValue).length; n < h; n++) {
              f = g[n], 0 !== (0, i.pluckNumber)(f.showlabel, p.showLabels) && (b = { fontFamily: (0, i.pluck)(f.font, f.labelfont, z.fontFamily, F.fontFamily), fontSize: (0, i.pluck)(f.fontsize, f.labelfontsize, z.fontSize, F.fontSize).replace(/px/i, "") + "px", fontWeight: "normal" == F.fontWeight ? (0, i.pluckNumber)(f.fontbold, f.labelfontbold, 0) ? "bold" : "normal" : F.fontWeight, fontStyle: "normal" == F.fontStyle ? (0, i.pluckNumber)(f.fontitalic, f.labelfontitalic, 0) ? "italic" : "normal" : F.fontStyle }, (d = { fontFamily: (0, i.pluck)(b.fontFamily, z.fontFamily, F.fontFamily), fontSize: (0, i.pluck)(b.fontSize, z.fontSize, F.fontSize), fontWeight: (0, i.pluck)(b.fontWeight, F.fontWeight), fontStyle: (0, i.pluck)(b.fontStyle, F.fontStyle) }).lineHeight = (0, i.setLineHeight)(d), S.setStyle(d), u = S.getSmartText(f.oriLabel || f.label, e, F.lineHeight, L), c.components.labels[n] = { config: { width: u.width, height: u.height, props: { label: {} } } }, f.oriLabel = f.oriLabel || f.label, f.label = s = u.text, f.labelTooltext = u.tooltext, u.width > W && (E = u, W = u.width));
            }return E;
          }for (m = p.numberFormatterFn ? x.getFromEnv("number-formatter")[p.numberFormatterFn] : p.isPercent ? x.getFromEnv("number-formatter").percentValue : x.getFromEnv("number-formatter").yAxis, n = 0, o = P && P.length; n < o; ++n) {
            r = (0, i.toPrecision)(P[n], 10), s = "" + m.call(x.getFromEnv("number-formatter"), r, p.axisIndex), u = S.getSmartText(s), c.components.labels[n] = { config: { width: u.width, height: u.height, props: { label: {} } } }, s.length > W && (t = s, W = s.length);
          }return S.getOriSize(t);
        }
      }, {
        key: "getCleanValue",
        value: function getCleanValue(e, t) {
          return this.getFromEnv("number-formatter").getCleanValue(e, t);
        }
      }, {
        key: "generateMinorTicks",
        value: function generateMinorTicks() {
          if (this) return [];
        }
      }, {
        key: "setCanvas",
        value: function setCanvas(e) {
          this.config.canvas = e;
        }
      }, {
        key: "_adjustNumberFormatter",
        value: function _adjustNumberFormatter(e) {
          var t,
              l,
              a = this.config,
              n = a.axisIndex,
              o = a.isVertical,
              r = this.getFromEnv("chart").getFromEnv("number-formatter"),
              s = a._defaultDecimalPrecision,
              g = a._defaultForceDecimal,
              h = 0;l = o || "yAxis" === a.numberFormatterFn ? (r.Y[n] || r.Y[0]).yAxisLabelConf : r.paramX, s === i.UNDEF ? a._defaultDecimalPrecision = l.decimalprecision : l.decimalprecision = s, g === i.UNDEF ? a._defaultForceDecimal = l.forcedecimals : l.forcedecimals = g, 0 < parseInt(e, 10) || (t = e.toString().split(".")[1]) && ((h = t.match(/^[0]*/)[0].length + 1) > l.decimalprecision && (l.forcedecimals = 1), l.decimalprecision = Math.max(h, l.decimalprecision));
        }
      }, {
        key: "setLabelConfig",
        value: function setLabelConfig(e) {
          var t,
              i = this.config.labels;for (t in e) {
            e.hasOwnProperty(t) && (i[t] = e[t]);
          }
        }
      }]);

      return r;
    }(t.default);

    r.prototype._parseLabel = l._parseLabel, r.prototype._drawLabel = l._drawLabel, r.prototype.getTrendLineLimits = l.getTrendLineLimits, r.prototype.setAxisPadding = l.setAxisPadding, r.prototype.getLabel = l.getLabel, exports.default = r;
  }, { "./cartesian": 148, "../lib/lib": 20, "./common-api": 159 }], 162: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = 0,
        t = 1;var l = function l() {
      var t = void 0,
          l = void 0,
          r = void 0,
          o = void 0,
          s = void 0,
          i = [];if (2 < arguments.length ? (t = arguments.length <= 0 ? undefined : arguments[0], l = arguments.length <= 1 ? undefined : arguments[1], r = arguments.length <= 2 ? undefined : arguments[2]) : 1 === arguments.length ? (t = 0, l = arguments.length <= 0 ? undefined : arguments[0], r = 1) : (t = arguments.length <= 0 ? undefined : arguments[0], l = arguments.length <= 1 ? undefined : arguments[1], r = 1), o = Math.floor(Math.max(0, Math.ceil((l - t) / r))), isFinite(o)) for (s = 0; s < o; ++s) {
        i.push(r * s + t);
      }return i;
    };exports.default = l;
  }, {}], 213: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = function e(_e13) {
      return function () {
        return _e13;
      };
    };exports.default = e;
  }, {}], 214: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./number"),
        t = n(e),
        u = require("../constant"),
        r = n(u);function n(e) {
      return e && e.__esModule ? e : { default: e };
    }function o(e) {
      return null != e;
    }function l(e, u) {
      return o(u) && o(e) && "boolean" != typeof u ? (0, t.default)(e, u) : (0, r.default)(u);
    }exports.default = l;
  }, { "./number": 150, "../constant": 213 }], 215: [function (require, module, exports) {
    "use strict";
    function e(e, t) {
      var r = (t = +t) - (e = +e);return function (t) {
        return Math.round(r * t + e);
      };
    }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = e;
  }, {}], 184: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.bimap = exports.deInterpolateLinear = exports.copyScale = void 0;var t = require("../utils/interpolators/value"),
        e = a(t),
        r = require("../utils/interpolators/round"),
        n = a(r),
        i = require("../utils/constant"),
        s = a(i);function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var l = [0, 1];function u(t, e, r, n) {
      var i, s;return t[0] > t[1] ? (i = r(t[1], t[0]), s = n(e[1], e[0])) : (i = r(t[0], t[1]), s = n(e[0], e[1])), function (t) {
        return s(i(t));
      };
    }function o(t, e) {
      return e.setInterpolate(t.getInterpolate()).setClamp(t.getClamp()).setDomain(t.getDomain()).setRange(t.getRange());
    }function p(t, e) {
      var r = (e = +e) - (t = +t);return r ? function (e) {
        return (e - t) / r;
      } : (0, s.default)(r);
    }function h(t) {
      return function (e, r) {
        var n = t(e = +e, r = +r);return function (t) {
          return t <= e ? 0 : t >= r ? 1 : n(t);
        };
      };
    }function c(t) {
      return function (e, r) {
        var n = t(e = +e, r = +r);return function (t) {
          return 0 >= t ? e : 1 <= t ? r : n(t);
        };
      };
    }
    var g = function () {
      function g(t, r) {
        _classCallCheck(this, g);

        this.domain = l, this.range = l, this.deInterpolate = t, this.reInterpolate = r, this.interpolate = e.default, this.clamp = !1, this.input = null, this.output = null, this._rescale();
      }

      _createClass(g, [{
        key: "_rescale",
        value: function _rescale() {
          return this.input = null, this.output = null, this;
        }
      }, {
        key: "setDomain",
        value: function setDomain() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l;
          return this.domain = t.map(Number), this._rescale();
        }
      }, {
        key: "getDomain",
        value: function getDomain() {
          return this.domain.slice();
        }
      }, {
        key: "setRange",
        value: function setRange() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l;
          return this.range = t.slice(), this._rescale();
        }
      }, {
        key: "getRange",
        value: function getRange() {
          return this.range.slice();
        }
      }, {
        key: "setInterpolate",
        value: function setInterpolate() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.default;
          return this.interpolate = t, this._rescale();
        }
      }, {
        key: "getInterpolate",
        value: function getInterpolate() {
          return this.interpolate;
        }
      }, {
        key: "setClamp",
        value: function setClamp() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return this.clamp = !!t, this._rescale();
        }
      }, {
        key: "getClamp",
        value: function getClamp() {
          return this.clamp;
        }
      }, {
        key: "rangeRound",
        value: function rangeRound() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l;
          return this.range = t.slice(), this.interpolate = n.default, this._rescale();
        }
      }, {
        key: "getRangeValue",
        value: function getRangeValue(t) {
          t = null === t ? void 0 : t;var e = this.getClamp() ? h(this.deInterpolate) : this.deInterpolate;return this.output || (this.output = u(this.getDomain(), this.getRange(), e, this.interpolate)), this.output(+t);
        }
      }, {
        key: "getDomainValue",
        value: function getDomainValue(t) {
          var e = this.getClamp() ? c(this.reInterpolate) : this.reInterpolate;return this.input || (this.input = u(this.getRange(), this.getDomain(), p, e)), this.input(+t);
        }
      }]);

      return g;
    }();

    exports.copyScale = o, exports.deInterpolateLinear = p, exports.bimap = u, exports.default = g;
  }, { "../utils/interpolators/value": 214, "../utils/interpolators/round": 215, "../utils/constant": 213 }], 200: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = 7.0710678118654755,
        e = 3.1622776601683795,
        r = 1.4142135623730951;function o(o) {
      var a = void 0;return a = o >= t ? 10 : o >= e ? 5 : o >= r ? 2 : 1;
    }function a() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
      var a = Math.pow;var n = (e - t) / Math.max(0, r),
          i = Math.floor(Math.log(n) / Math.LN10),
          f = n / a(10, i);return 0 <= i ? o(f) * a(10, i) : -a(10, -i) / o(f);
    }function n() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
      var i = Math.abs(a - o) / Math.max(0, n),
          f = Math.floor(Math.log(i) / Math.LN10),
          u = Math.pow(10, f),
          M = i / u;return M >= t ? u *= 10 : M >= e ? u *= 5 : M >= r && (u *= 2), a < o ? -u : u;
    }function i() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
      var o = Math.ceil,
          n = Math.floor;var i = void 0,
          f = void 0,
          u = void 0,
          M = -1,
          h = [];if (r = +r, (t = +t) === (e = +e) && 0 < r) return [t];if ((i = e < t) && (f = t, t = e, e = f), 0 === (u = a(t, e, r)) || !isFinite(u)) return [];if (0 < u) for (t = o(t / u), f = o((e = n(e / u)) - t + 1); ++M < f;) {
        h[M] = (t + M) * u;
      } else for (t = n(t * u), e = o(e * u), f = o(t - e + 1); ++M < f;) {
        h[M] = (t - M) / u;
      }return i && h.reverse(), h;
    }exports.default = i, exports.tickIncrement = a, exports.tickStep = n;
  }, {}], 161: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./continuous"),
        t = u(e),
        r = require("../utils/array/ticks"),
        n = u(r),
        i = require("../utils/interpolators/number"),
        s = u(i);function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = function (_t$default4) {
      _inherits(o, _t$default4);

      function o() {
        _classCallCheck(this, o);

        return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e.deInterpolateLinear, s.default));
      }

      _createClass(o, [{
        key: "ticks",
        value: function ticks() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
          var t = this.getDomain();return (0, n.default)(t[0], t[t.length - 1], e);
        }
      }, {
        key: "nice",
        value: function nice() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
          var t = Math.ceil,
              n = Math.floor;var i = void 0,
              s = this.getDomain(),
              u = 0,
              o = s.length - 1,
              a = s[u],
              c = s[o];return c < a && (i = a, a = c, c = i, i = u, u = o, o = i), 0 < (i = (0, r.tickIncrement)(a, c, e)) ? (a = n(a / i) * i, c = t(c / i) * i, i = (0, r.tickIncrement)(a, c, e)) : 0 > i && (a = t(a * i) / i, c = n(c * i) / i, i = (0, r.tickIncrement)(a, c, e)), 0 < i ? (s[u] = n(a / i) * i, s[o] = t(c / i) * i, this.setDomain(s)) : 0 > i && (s[u] = t(a * i) / i, s[o] = n(c * i) / i, this.setDomain(s)), this;
        }
      }, {
        key: "copy",
        value: function copy() {
          return (0, e.copyScale)(this, new o());
        }
      }]);

      return o;
    }(t.default);

    exports.default = o;
  }, { "./continuous": 184, "../utils/array/ticks": 200, "../utils/interpolators/number": 150 }], 160: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./utils/array/range"),
        t = o(e),
        i = require("../lib/lib"),
        r = require("./scales/continuous"),
        a = require("./utils/interpolators/number"),
        n = o(a);function o(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = (0, r.bimap)([2, 100], [80, 20], r.deInterpolateLinear, n.default),
        c = function c(e) {
      return 100 <= e ? .2 : 1 >= e ? 0 : s(e) / 100;
    },
        u = function u(e) {
      if (1 >= e) return 1;var t = [],
          r = Math.ceil(e);return t[2] = r % 2, t[5] = r % 5, t[10] = r % 10, (0, i.safeMin)(t) + r;
    },
        l = function l(e, t, r, a, n, o) {
      var s = Math.abs;var c = void 0,
          u = void 0,
          l = void 0,
          f = void 0,
          d = void 0,
          m = void 0,
          h = void 0,
          k = void 0,
          M = void 0,
          p = void 0,
          D = void 0,
          g = void 0,
          v = e,
          x = Math.ceil(r * (1 - a)),
          b = Math.floor(r * (1 + a)),
          F = [],
          L = -1,
          N = function N(r) {
        return function (e) {
          var t = void 0,
              i = void 0,
              r = void 0,
              a = [10, 5, 2, 1],
              n = a.length;for (t = 0; t < n; ++t) {
            if (0 == (i = e % a[t]) % 1) {
              r = !0;break;
            }
          }return r;
        }(c = (t - e) / (r + 1)) ? r : i.UNDEF;
      };for (; !(p && D || (++L, g = r + L, g >= b && (D = !0), f = N(g), f) || (g = r - L, g <= x && (p = !0), f = N(g), f));) {}for (0 > e && 0 < t && n && (l = !0), u = 0; u < f; u++) {
        l && 0 > v && 0 < v + c && (F.push(0), d = !0), v += c, F.push(v);
      }return f === i.UNDEF && n && (1 < (h = (F = o.ticks(r)).length) ? (m = .2 * (c = s(F[0] - F[1])), k = F[0], M = F[h - 1], s(e - k) <= m && 0 !== k && F.shift(), s(t - M) <= m && 0 !== M && F.pop(), (0 === k || 0 === M) && (d = !0)) : 0 === F[0] && (d = !0)), l && !d && -1 === F.indexOf(0) && (0 > e && 0 < F[0] ? F = [0].concat(F) : 0 < t && 0 > F[F.length - 1] ? F.push(0) : F = [0], d = !0), { output: F, interval: c, isZeroTickForced: d };
    },
        f = function f(e, r, a, n) {
      var _a$nice$getDomain, _a$nice$getDomain2, _a$getDomain, _a$getDomain2;

      var o,
          s,
          f,
          d,
          m,
          h,
          k,
          M,
          p,
          D,
          g,
          v,
          x,
          b,
          F,
          L,
          N,
          T,
          E,
          U,
          Z,
          _ = Math.pow,
          q = Math.LN10,
          j = Math.log,
          z = Math.max,
          I = Math.abs,
          P = Math.floor,
          y = n.isPercent ? 0 : n.axisMinValue,
          A = n.isPercent ? 100 : n.axisMaxValue,
          O = !!n.adjustDiv,
          V = n.numDivLines,
          w = !!n.setAdaptiveMin,
          R = n.axisRange,
          B = 5.960464477539063e-8,
          C = !0,
          G = .2,
          H = !0,
          J = n.xAxisLabelMode,
          K = n.dependentInfo;o = n.majorTMNumber === i.UNDEF ? V : z(0, V - 2), K && K.count && !K.limit && K.numDivLines !== i.UNDEF && (o = V = K.numDivLines, O = !1), s = o + 1, e === i.UNDEF && r === i.UNDEF && (e = 0, r = 1, C = !1), r === e && 0 === r && (r = 1, C = !1), ("categories" === J || "mixed" === J) && (C = !1), C ? (f = P(j(I(r)) / q), m = _(10, d = z(P(j(I(e)) / q), f)), 2 > I(r) / m && 2 > I(e) / m && (m = _(10, --d)), v = _(10, g = P(j(r - e) / q)), 0 < r - e && 10 <= m / v && (m = v, d = g), k = (P(r / m) + 1) * m, 0 > e ? M = (P(I(e / m)) + 1) * m * -1 : w ? M = 0 > (M = P(I(e / m) - 1) * m) ? 0 : M : M = 0, !w && 0 >= r && (k = 0), p = !(!A && 0 !== A), D = !(!y && 0 !== y), !n.freezeLimit && (!1 === p || !0 === p && +A < r && r - +A > B ? (r = k, p = !1) : r = +A, !1 === D || !0 === D && +y > e && +y - e > B ? (e = M, D = !1) : e = +y)) : (!0 === (p = !(!A && 0 !== A)) && +A >= r ? r = +A : p = !1, !0 === (D = !(!y && 0 !== y)) && +y <= e ? e = +y : D = !1), L = [e, r], a.setDomain(L), O && !n.freezeLimit ? p || D ? (G = c(o), I((o - (U = (x = (E = l(e, r, o, G, n.forceZeroTick, a)).output).length) + ((Z = E.isZeroTickForced) ? 1 : 0)) / o) > G ? h = (r - e) / s : (h = 0 === U || 1 === U && Z ? r - e : E.interval, n.isZeroTickForced = Z, n.ticks = [e].concat(x, r), H = !1)) : (n.ticks = o ? a.nice(s).ticks(s) : a.getDomain(), h = I(n.ticks[1] - n.ticks[0]), H = !1) : p || D || n.freezeLimit ? h = (r - e) / s : ((_a$nice$getDomain = a.nice(s).getDomain(), _a$nice$getDomain2 = _slicedToArray(_a$nice$getDomain, 2), b = _a$nice$getDomain2[0], F = _a$nice$getDomain2[1], _a$nice$getDomain), ((F = b + (h = u(m = (F - b) / s)) * s) - r) / r > G || (b - e) / e > G ? (a.setDomain([e, r]), h = (r - e) / s) : (e = b, r = F, a.setDomain([e, r]))), H && (0 > e && 0 < r && n.forceZeroTick ? (0 === (T = (N = (0, t.default)(e, 0, h))[N.length - 1] + h) ? T += h : n.isZeroTickForced = !0, n.ticks = N.concat(0, (0, t.default)(T, r, h), r)) : n.ticks = (0, t.default)(e, r, h).concat(r)), (_a$getDomain = a.getDomain(), _a$getDomain2 = _slicedToArray(_a$getDomain, 2), e = _a$getDomain2[0], r = _a$getDomain2[1], _a$getDomain), n._allTicks = n.ticks.slice(), R.tickInterval = h, R.min = e, R.max = r;
    };exports.default = f;
  }, { "./utils/array/range": 162, "../lib/lib": 20, "./scales/continuous": 184, "./utils/interpolators/number": 150 }], 129: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./cartesian-label-manager"),
        i = u(e),
        t = require("../lib/lib.js"),
        a = require("./utils/array/range"),
        n = u(a),
        s = require("./scales/linear"),
        l = u(s),
        r = require("./common-api"),
        c = require("./domain-updater"),
        o = u(c);function u(e) {
      return e && e.__esModule ? e : { default: e };
    }var d = void 0;
    var f = function (_i$default4) {
      _inherits(f, _i$default4);

      function f() {
        var _this26;

        _classCallCheck(this, f);

        (_this26 = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this)), _this26), _this26.config.scale = new l.default();return _this26;
      }

      _createClass(f, [{
        key: "getName",
        value: function getName() {
          return "numeric";
        }
      }, {
        key: "generateTicks",
        value: function generateTicks() {
          var e = Math.abs;var i = void 0,
              t = void 0,
              a = void 0,
              s = this.getScale(),
              l = this.config,
              r = l.numDivLines + 1,
              _s$getDomain = s.getDomain(),
              _s$getDomain2 = _slicedToArray(_s$getDomain, 2),
              c = _s$getDomain2[0],
              u = _s$getDomain2[1],
              d = l.axisRange,
              f = d.min,
              m = d.max,
              h = l.dataLimit;return c === f && u === m ? ((0, o.default)(h.min, h.max, s, l), l.ticks) : (t = e((i = s.ticks(r))[1] - i[0]), c === f && -1 === i.indexOf(f) && i.unshift(f), u === m && -1 === i.indexOf(m) && i.push(m), (a = e(f % t)) && (f -= a), (a = e(m % t)) && (m -= a), l._allTicks = (0, n.default)(f, m, t).concat(m), d.tickInterval = t, i);
        }
      }, {
        key: "setTickValues",
        value: function setTickValues(e) {
          this.config.userTicks = e || [], this.config.tickValues = { tickValue: [] };
        }
      }, {
        key: "_parseTickValues",
        value: function _parseTickValues(e) {
          var i,
              a,
              n,
              s,
              l = this.getFromEnv("chart"),
              c = this.config,
              o = e && e.length,
              u = 0;for (c.tickValues = {}, i = c.tickValues.tickValue = [], n = 0; n < o; n += 1) {
            if (s = +(a = (0, t.extend2)({}, e[n])).x, !a.vline) {
              if ((0, r.extractStyleInfo)(a, l), !s && 0 !== s) continue;a.x = s, c.irregularCatAxis = !0, i.push(a), i[u].label = (0, t.parseUnsafeString)(i[u].label), u += 1;
            }
          }c.oriCatLen = u;
        }
      }, {
        key: "calculateTicksOnLabelMode",
        value: function calculateTicksOnLabelMode() {
          var e,
              i,
              a,
              n,
              s,
              l,
              r,
              c = this,
              o = c.config,
              u = o.xAxisLabelMode,
              d = Object.assign([], o.userTicks),
              f = c.getFromEnv("number-formatter");if ("mixed" === u || "auto" === u) {
            if (i = [], e = f.xAxis, "mixed" === u) for (a = 0, s = d.length; a < s; a += 1) {
              i[d[a].x || d[a].y || a] = !0;
            } else d = [];for (r = c.getAxisConfig(), l = o.ticks, n = 0; n < l.length; ++n) {
              i[a = l[n]] || d.push({ label: t.BLANKSTRING + e.call(f, a), x: a, showverticalline: 0 === a ? r.showZeroPlane : 1, isNumeric: !0, linecolor: 0 === a ? r.zeroPlaneColor : r.divLineColor, linealpha: 0 === a ? r.zeroPlaneAlpha : r.divLineAlpha, linethickness: 0 === a ? r.zeroPlaneThickness : r.divLineThickness, linedashed: r.divLineIsDashed, linedashLen: r.divLineDashLen, linedashgap: r.divLineDashGap });
            }
          }c._parseTickValues(d);
        }
      }, {
        key: "getInterval",
        value: function getInterval() {
          return this.config.axisRange.tickInterval;
        }
      }, {
        key: "_setAxisRange",
        value: function _setAxisRange(e) {
          var i,
              a,
              n,
              s = e.min,
              l = e.max,
              r = this.config,
              c = r.axisRange,
              u = r.dataLimit,
              f = r.dependentInfo;if (!(s > l)) if ((u.min !== s || u.max !== l) && (a = !0), r.visibleMin === d || r.setPadding || a) {
            var _ref11, _ref12;

            if ((_ref11 = (0, t.extent)([s, l, u.min, u.max]), _ref12 = _slicedToArray(_ref11, 2), s = _ref12[0], l = _ref12[1], _ref11), u.min = s, u.max = l, this.fireEvent("dataLimitSet", Object.assign({}, u)), f) {
              if (f.limit) {
                var _ref13, _ref14;

                if (!(i = f.dataLimit)) return;(_ref13 = (0, t.extent)([s, l, i.min, i.max]), _ref14 = _slicedToArray(_ref13, 2), s = _ref14[0], l = _ref14[1], _ref13), r.isDataLimitSet = !0;
              }if (f.count && f.numDivLines === d) return;
            }(0, o.default)(s, l, this.getScale(), r), n = r.isZeroTickForced ? 3 : 2, this.fireEvent("divlinesSet", r.ticks.length - n), r.tickValues && this.calculateTicksOnLabelMode(), this.setVisibleConfig(c.min, c.max);
          } else r.setPadding = !1;
        }
      }]);

      return f;
    }(i.default);

    f.prototype.setDataLimit = r.setDataLimit, exports.default = f;
  }, { "./cartesian-label-manager": 158, "../lib/lib.js": 20, "./utils/array/range": 162, "./scales/linear": 161, "./common-api": 159, "./domain-updater": 160 }], 163: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./continuous"),
        t = o(e),
        r = require("../utils/interpolators/number"),
        u = o(r);function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = function (_t$default5) {
      _inherits(s, _t$default5);

      function s() {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e.deInterpolateLinear, u.default));
      }

      _createClass(s, [{
        key: "copy",
        value: function copy() {
          return (0, e.copyScale)(this, new s());
        }
      }]);

      return s;
    }(t.default);

    exports.default = s;
  }, { "./continuous": 184, "../utils/interpolators/number": 150 }], 130: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./cartesian-label-manager"),
        t = c(e),
        i = require("./utils/array/range"),
        a = c(i),
        n = require("./scales/category"),
        l = c(n),
        r = require("../lib/lib"),
        s = require("../lib/lib-graphics"),
        o = require("./common-api");function c(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = "none",
        g = "true",
        f = "1",
        p = r.preDefStr.POSITION_START,
        h = r.preDefStr.POSITION_MIDDLE,
        m = r.preDefStr.POSITION_TOP,
        k = r.preDefStr.POSITION_BOTTOM,
        d = r.preDefStr.POSITION_END,
        x = { wrtVisible: !0 };
    var b = function (_t$default6) {
      _inherits(b, _t$default6);

      function b() {
        var _this28;

        _classCallCheck(this, b);

        (_this28 = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this)), _this28), _this28.config.scale = new l.default();return _this28;
      }

      _createClass(b, [{
        key: "getName",
        value: function getName() {
          return "category";
        }
      }, {
        key: "getCategoryFromId",
        value: function getCategoryFromId(e) {
          var t = this.config.tickValues;return (t && t.tickIdMap)[e] || {};
        }
      }, {
        key: "generateTicks",
        value: function generateTicks() {
          var e = this.getScale(),
              t = this.config,
              i = e.getDomain(),
              n = t.categoryNumDivLines + 1,
              l = (i[1] - i[0]) / n,
              r = t.axisRange,
              s = r.min,
              o = r.max,
              c = (o - s) / n;return t._allTicks = (0, a.default)(s, o, c).concat(o), r.tickInterval = c, (0, a.default)(i[0], i[1], l).concat(i[1]);
        }
      }, {
        key: "_parseCategoryVline",
        value: function _parseCategoryVline() {
          var e,
              t,
              i,
              a,
              n,
              l,
              o,
              c,
              g,
              f,
              x,
              b,
              V,
              v,
              I,
              y,
              N,
              L,
              S,
              T,
              _,
              P,
              C,
              D,
              O,
              R,
              w,
              A,
              F,
              M,
              q = this,
              B = q.config,
              z = B.axisRange,
              E = z.min,
              G = z.max,
              H = q.getFromEnv("chart").config,
              j = H.style || {},
              K = B.isVertical,
              U = { fontFamily: H.style.inCanfontFamily, fontSize: H.style.inCanfontSize, color: H.style.inCancolor, lineHeight: H.style.inCanLineHeight };for (i = (t = B.tickValues.vline).length, w = 1 !== q.getZoom(), A = q.getVisibleConfig(), l = 0; l < i; l++) {
            a = t[l], n = (0, r.parseUnsafeString)(a.label), o = !!(0, r.pluckNumber)(a.showlabelborder, B.showVLineLabelBorder, 1), e = !!(0, r.pluckNumber)(a.showlabelbackground, 1), "center" === (c = (0, r.pluck)(a.labelhalign, K ? p : h)) ? c = h : "left" === c ? c = p : "right" === c && (c = d), (g = (0, r.pluck)(a.labelvalign, K ? h : k).toLowerCase()) === h ? g = h : g === m ? g = k : g === k && (g = m), f = (0, r.pluckNumber)(a.labelposition, 0), x = (0, r.pluckNumber)(a.lineposition, .5), b = (0, r.pluckNumber)(a.showvlines, B.showVLines, 1), V = (0, r.pluckNumber)(a.alpha, B.vLineAlpha, 80), v = (0, r.pluck)(a.color, B.vLineColor).replace(/^#?/, "#"), I = e ? (0, r.pluck)(a.labelbgcolor, B.vLineLabelBgColor, "333333").replace(/^#?/, "#") : r.BLANKSTRING, D = (0, r.pluck)(a.labelcolor, B.vLineLabelColor, a.color, j.inCancolor, B.vLineColor).replace(/^#?/, "#"), y = (0, r.pluckNumber)(a.thickness, B.vLineThickness, 1), 2, N = !!+(0, r.pluck)(a.dashed, 0), L = (0, r.pluckNumber)(a.dashlen, 5), T = (0, r.pluckNumber)(a.dashgap, 2), S = U.fontSize, S = parseInt(S.replace(/px/i, ""), 10), O = (0, r.pluckNumber)(a.rotatelabel, B.rotateVLineLabels) ? 270 : 0, x = 0 > x || 1 < x ? .5 : x, f = 0 > f || 1 < f ? 0 : f, v = (0, s.convertColor)(v, b ? V : "0"), M = a.animate && !K ? a.startIndex + 1 : a.startIndex, R = q._getVlinePos(M, x) - (a.animate ? a.leftShift : 0), (!w || !(R < A.minValue || R > A.maxValue)) && (R < E || R > G || (_ = { opacity: 1, stroke: v, "stroke-width": y, "stroke-dasharray": N ? (0, r.getDashStyle)(L, T) : u }, C = { opacity: 1, text: n, "text-anchor": c, "vertical-align": g, "text-bound": [] }, P = { fontSize: U.fontSize, fontFamily: U.fontFamily, lineHeight: U.lineHeight }, F = { from: R, layer: (0, r.pluckNumber)(a.showontop, B.showVLinesOnTop, 0) ? 3 : 2, attr: _, type: "line", startIndex: a.startIndex, linePosition: x }, n && (C["text-bound"] = [I, b && o ? v : r.BLANKSTRING, b && o ? 1 : 0, 2, r.UNDEF, b && o ? "solid" : r.BLANKSTRING], C.fill = b ? D : v, F.text = { label: n, attr: C, layer: 4, labelRotation: O, labelPosition: f, css: P }), q.setReferenceInfo(F), q.config.parsedVlineInfo.push(F)));
          }
        }
      }, {
        key: "_parseReferenceVisuals",
        value: function _parseReferenceVisuals() {
          _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "_parseReferenceVisuals", this).call(this), this.config.drawPlotlines && this._parseCategoryVline();
        }
      }, {
        key: "categoryInsert",
        value: function categoryInsert(e, t, i) {
          var a,
              n,
              l,
              s,
              o,
              c = this.config,
              u = c.axisRange.min,
              p = t.length,
              h = c.endPad || 0;for (a = c.tickValues.tickValue, l = c.tickValues.tickIdMap, n = c.tickValues.vline, s = 0; s < p; s += 1) {
            (o = (0, r.extend2)({}, t[s])).vline === g || !0 === o.vline || 1 === o.vline || o.vline === f ? (o.startIndex = e - 2, n.push(o)) : (o.id && (l[o.id] = { tickObj: o, i: e }), a.splice(e, 0, o), e += 1);
          }i && this._setAxisRange({ min: u, max: +(0, r.toPrecision)(a.length - 1 + h, 10) });
        }
      }, {
        key: "categoryDelete",
        value: function categoryDelete(e, t, i) {
          var a,
              n,
              l,
              r = this,
              s = r.config,
              o = s.axisRange,
              c = o.min;for (n = 0, l = (a = s.tickValues.vline).length; n < l; n++) {
            a[n].animate = !0, a[n].leftShift = t;
          }s.tickValues.tickValue.splice(e, t), r._shiftVline(e, t, "left"), i && r._setAxisRange({ min: c, max: o.max - t });
        }
      }, {
        key: "_shiftVline",
        value: function _shiftVline(e, t, i) {
          var a,
              n,
              l = this.config,
              r = l.tickValues.vline,
              s = l.tickValues.tickValue.length,
              o = r.length;for (a = 0; a < o; a += 1) {
            (n = r[a]).startIndex >= e && ("right" === i ? n.startIndex += t : n.startIndex -= t, (0 > n.startIndex || n.startIndex >= s) && (r.splice(a, 1), o -= 1, a -= 1));
          }
        }
      }, {
        key: "categoryTranslate",
        value: function categoryTranslate(e) {
          var t,
              i = this,
              a = i.config;e = (e || 0) * (i.getPixel(1, x) - i.getPixel(0, x)), a.isReverse && (e = -e), t = ["T", e, ",", "0"].join(""), i.realTimeTranslatableGroups = [{ group: a.axisContainer, translationStr: t }, { group: a.axisTrendLabelContainer, translationStr: t }];
        }
      }, {
        key: "updateTicksValues",
        value: function updateTicksValues(e, t) {
          var i,
              a,
              n,
              l,
              r,
              s,
              o,
              c = this,
              u = c.config,
              g = u.parsedVlineInfo;if ((i = u.tickValues.tickValue)[e]) for (o in t) {
            t.hasOwnProperty(o) && ("x" === o && (a = !0), i[e][o] = t[o]);
          }if (a) for (l = 0, r = g.length; l < r; ++l) {
            if ((s = (n = g[l]).startIndex) === e) n.from = c._getVlinePos(s, n.linePosition);else if (s + 1 === e) {
              n.from = c._getVlinePos(s, n.linePosition);break;
            }
          }
        }
      }, {
        key: "_getVlinePos",
        value: function _getVlinePos(e, t) {
          var i = void 0,
              a = void 0,
              n = void 0,
              l = this.getTickValues(),
              s = this.config,
              _getLimit = this.getLimit(),
              o = _getLimit.min,
              c = _getLimit.max,
              u = l[e],
              g = l[e + 1];return u ? !g && (i = l[0] && l[0].x ? c : s.oriCatLen - 1, n = !0) : (i = l[0] && l[0].x ? o : -1, n = !0), n ? a = t : a = ((i = (0, r.pluckNumber)(u.x, u.y, e)) - (0, r.pluckNumber)(g.x, g.y, e + 1)) * t, i + Math.abs(a);
        }
      }, {
        key: "getInterval",
        value: function getInterval() {
          if (this) return 1;
        }
      }, {
        key: "_setAxisRange",
        value: function _setAxisRange(e) {
          var t,
              i,
              n = e.min,
              l = e.max,
              s = this.config,
              o = s.axisRange,
              c = s.periodLength,
              u = s.dataLimit,
              g = u.max,
              f = u.min;n > l || ((g !== l || f !== n) && (t = !0), s.visibleMin === r.UNDEF || s.setPadding || t ? (u.max = l, u.min = n, c && (s.categoryNumDivLines = (l - n) / c - 1), i = (l - n) / (s.categoryNumDivLines + 1), this.getScale().setDomain([n, l]), s.ticks = (0, a.default)(n, l, i).concat(l), s._allTicks = s.ticks.slice(), o.min = n, o.max = l, o.tickInterval = i, this.setVisibleConfig(o.min, o.max)) : s.setPadding = !1);
        }
      }]);

      return b;
    }(t.default);

    b.prototype.setTickValues = o.setTickValues, exports.default = b;
  }, { "./cartesian-label-manager": 158, "./utils/array/range": 162, "./scales/category": 163, "../lib/lib": 20, "../lib/lib-graphics": 21, "./common-api": 159 }], 107: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (t) {
      var i = void 0,
          n = void 0,
          r = t.getChildren("canvas")[0],
          d = r.getChildren("axisRefVisualCartesian")[0],
          o = { zoomable: !0, pannable: !0 },
          l = t._feedAxesRawData(),
          x = function x(e) {
        var t = e.sender;d.addexplicitDrawItems(t.getId(), t), d.asyncDraw();
      };(0, e.componentFactory)(t, a.default, "yAxis", 1, l.yAxisConf), (0, e.componentFactory)(t, s.default, "xAxis", 1, l.xAxisConf), i = t.getChildren("yAxis")[0], n = t.getChildren("xAxis")[0], i.setLinkedItem("canvas", r), n.setLinkedItem("canvas", r), d.setLinkedItem(i.getId(), i), d.setLinkedItem(n.getId(), n), d.addExtEventListener("visiblerangeset", x, n), d.addExtEventListener("visiblerangeset", x, i), r.attachAxis(n, !1, t.zoomX ? o : {}), r.attachAxis(i, !0, t.zoomY ? o : {}), t._setCategories();
    };var e = require("../lib/lib"),
        t = require("../axis/numeric"),
        a = n(t),
        i = require("../axis/category"),
        s = n(i);function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }, { "../lib/lib": 20, "../axis/numeric": 129, "../axis/category": 130 }], 149: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var i = require("./cartesian-axis-animation");exports.default = { "initial.axisRefVisuals.axisRefVisualsCartesian": i.axisAnimationAxis, "update.axisRefVisuals.axisRefVisualsCartesian": i.axisAnimationFinal };
  }, { "./cartesian-axis-animation": 182 }], 127: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../../core/component-interface"),
        t = c(e),
        i = require("../axis/utils/interpolators/number"),
        a = c(i),
        n = require("../axis/utils/array/diff"),
        r = c(n),
        s = require("../axis/cartesian"),
        o = require("../animation-rules/cartesian-axis-ref-animation"),
        l = c(o),
        h = require("../dependency-manager");function c(e) {
      return e && e.__esModule ? e : { default: e };
    }var g = function g(e) {
      return null !== e;
    };var d = void 0;(0, h.addDep)({ name: "cartesianAxisRefAnimation", type: "animationRule", extension: l.default });
    var m = function (_t$default7) {
      _inherits(m, _t$default7);

      function m() {
        var _this29;

        _classCallCheck(this, m);

        (_this29 = _possibleConstructorReturn(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this)), _this29), _this29.config.map = {}, _this29.config.explicitDrawItems = {};return _this29;
      }

      _createClass(m, [{
        key: "getType",
        value: function getType() {
          return "axisRefVisuals";
        }
      }, {
        key: "getName",
        value: function getName() {
          return "axisRefVisualsCartesian";
        }
      }, {
        key: "draw",
        value: function draw() {
          var e = void 0,
              t = void 0,
              i = void 0,
              a = void 0,
              n = void 0,
              r = void 0,
              s = void 0,
              o = this.getDrawingInfo(),
              l = this.getexplicitDrawItems(),
              h = this.config,
              c = h.map,
              g = {},
              d = this.getLinkedParent(),
              m = d.getAxes(),
              f = [],
              p = d.getChildContainer("axisReferenceVisualsFloor"),
              x = d.getChildContainer("axisReferenceVisualsBottom"),
              u = d.getChildContainer("axisReferenceVisualsMiddle"),
              v = d.getChildContainer("axisReferenceVisualsTop"),
              y = d.getChildContainer("axisReferenceVisualsCeil");for (d.config.trendlines = [], d.config.vtrendlines = [], t = 0; t < m.length; ++t) {
            f.push(m[t].axis.getId());
          }for (a in h.containers = [p, x, u, v, y], o) {
            if (o.hasOwnProperty(a) && (n = this.getLinkedItem(a), 0 <= f.indexOf(n.getId()))) for ((r = g[a]) || (r = g[a] = []), e = o[a], t = 0; t < e.length; ++t) {
              "band" === (i = (s = e[t]).type) ? r.push.apply(r, this.createBand(s, n)) : "line" === i && r.push.apply(r, this.createLine(s, n));
            }
          }if (h.isSmartDrawing) for (a in c) {
            c.hasOwnProperty(a) && !l[a] && this.getLinkedItem(a) && (g[a] = c[a]);
          }this.resetexplicitDrawItems(), this.removeExtraElements(g);
        }
      }, {
        key: "getDrawingInfo",
        value: function getDrawingInfo() {
          var e = void 0,
              t = void 0,
              i = {},
              a = this.getexplicitDrawItems(),
              n = this.isCanvasChnaged(),
              r = (this.config.isSmartDrawing = Object.keys(a).length && !n) ? a : this.getLinkedItem();for (e in r) {
            r.hasOwnProperty(e) && (t = r[e], i[e] = t.getReferenceInfo());
          }return i;
        }
      }, {
        key: "createLine",
        value: function createLine(e, t) {
          var i = void 0,
              n = this.config.containers,
              r = n[e.layer],
              o = t.config,
              l = this.getFromEnv("paper"),
              h = this.getFromEnv("chart").getName(),
              c = this.getLinkedParent(),
              m = this.getFromEnv("animationManager"),
              f = this.getFromEnv("toolTipController"),
              p = c.config,
              x = p.trendlines,
              u = o.isVertical,
              v = p.canvasLeft,
              y = p.canvasTop,
              w = y + p.canvasHeight,
              E = v + p.canvasWidth,
              I = (0, a.default)(v, E),
              T = (0, a.default)(y, w),
              b = t.getScale(),
              C = b.getRangeValue(e.from),
              D = e.to !== d && b.getRangeValue(e.to) || C,
              k = u ? ["M", v, C, "L", E, D] : ["M", C, w, "L", D, y],
              L = e.attr,
              R = e.text,
              V = R && R.attr,
              P = R && R.labelPosition || 0,
              G = t.getId(),
              O = e.id || e.from,
              M = G + "_" + O,
              S = G + "_" + O + R,
              F = this.getGraphicalElement(M),
              _ = this.getGraphicalElement(S),
              q = e.handlers,
              A = { start: e.from, end: e.to };for (i in L.path = (0, s.getCrispPath)(k, g(L["stroke-width"]) ? L["stroke-width"] : 1).path.toString(), /trend/.test(e.id) && x.push({ x1: k[1], y1: k[2], x2: k[4], y2: k[5], tooltext: e.toolText, tolerance: 5 > L["stroke-width"] ? 2.5 : L["stroke-width"] / 2 }), L["stroke-linecap"] = "butt", (F = this.addGraphicalElement(M, m.setAnimation({ container: r, el: F || "path", attr: L, component: this, axis: t, data: { value: A, path: k }, label: "path" }))).data("data", A), R && (u ? (V.x = I(P), V.y = C) : (V.x = C, V.y = T(P)), V.text = R.label, V.transform = l.getSuggestiveRotation(R.labelRotation, V.x, V.y), (_ = this.addGraphicalElement(S, m.setAnimation({ container: n[R.layer], el: _ || "text", attr: V, component: this, axis: t, data: { value: e.from }, label: "text", css: R.css }))).data("data", e.from)), /zoomscatter/i.test(h) || (e.toolText ? f.enableToolTip(F, e.toolText) : f.disableToolTip(F)), q) {
            q.hasOwnProperty(i) && (F.on(i, q[i].bind(t)), _.on(i, q[i].bind(t)));
          }return R ? [M, S] : [M];
        }
      }, {
        key: "createBand",
        value: function createBand(e, t) {
          var i = Math.min;var a = void 0,
              n = void 0,
              r = void 0,
              s = void 0,
              o = void 0,
              l = void 0,
              h = void 0,
              c = this.config.containers[e.layer],
              g = t.config,
              m = this.getFromEnv("animationManager"),
              f = this.getFromEnv("toolTipController"),
              p = this.getLinkedParent(),
              x = this.getFromEnv("chart").getName(),
              u = p.config,
              v = g.isVertical,
              y = u.canvasLeft,
              w = u.canvasTop,
              E = w + u.canvasHeight,
              I = y + u.canvasWidth,
              T = t.getScale(),
              b = e.from,
              C = e.to === d ? b : e.to,
              D = t.getId(),
              k = e.attr,
              L = e.handlers;for (l in a = "canvasStart" === b ? v ? w : y : T.getRangeValue(b), n = "canvasEnd" === C ? v ? E : I : T.getRangeValue(C), h = Math.abs(a - n), v ? (k.x = y, k.y = i(a, n), k.width = I - y, k.height = h) : (k.x = i(a, n), k.y = w, k.width = h, k.height = E - w), s = D + "_" + (r = e.id || k.x + "_" + k.y), o = this.getGraphicalElement(s), /trend/.test(e.id) && p.config.vtrendlines.push({ x1: k.x, y1: k.y, x2: k.x + k.width, y2: k.y + k.height, tooltext: e.toolText, tolerance: 5 > k["stroke-width"] ? 2.5 : k["stroke-width"] / 2, isTrendZone: 1 }), o = this.addGraphicalElement(s, m.setAnimation({ container: c, el: o || "rect", attr: k, component: this, label: "rect" })), /zoomscatter/i.test(x) || (e.toolText ? f.enableToolTip(o, e.toolText) : f.disableToolTip(o)), L) {
            L.hasOwnProperty(l) && o.on(l, L[l].bind(t));
          }return [s];
        }
      }, {
        key: "removeExtraElements",
        value: function removeExtraElements(e) {
          var t = void 0,
              i = void 0,
              a = void 0,
              n = void 0,
              s = void 0,
              o = void 0,
              l = this.config.map;for (t in l) {
            if (e[t]) for (n = (o = (0, r.default)(l[t], e[t])).length, a = 0; a < n; ++a) {
              (s = this.getGraphicalElement(o[a])) && this.removeGraphicalElement(s);
            } else for (n = (i = l[t]).length, a = 0; a < n; ++a) {
              (s = this.getGraphicalElement(i[a])) && this.removeGraphicalElement(s);
            }
          }this.config.map = e;
        }
      }, {
        key: "setLinkedItem",
        value: function setLinkedItem(e, t) {
          _get(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "setLinkedItem", this).call(this, e, t);var i = this;"axis" === t.getType() && i.addExtEventListener("beforeremove", function (e) {
            i.removeLinkedItem(e.sender.getId()), i.asyncDraw();
          }, t);
        }
      }, {
        key: "addexplicitDrawItems",
        value: function addexplicitDrawItems(e, t) {
          this.config.explicitDrawItems[e] = t;
        }
      }, {
        key: "getexplicitDrawItems",
        value: function getexplicitDrawItems() {
          return this.config.explicitDrawItems;
        }
      }, {
        key: "resetexplicitDrawItems",
        value: function resetexplicitDrawItems() {
          this.config.explicitDrawItems = {};
        }
      }, {
        key: "isCanvasChnaged",
        value: function isCanvasChnaged() {
          var e = void 0,
              t = this.getLinkedParent().getEffectiveDimensions(),
              i = this.config;return e = JSON.stringify(t) !== JSON.stringify(i.canvasDim), i.canvasDim = t, e;
        }
      }]);

      return m;
    }(t.default);

    exports.default = m;
  }, { "../../core/component-interface": 62, "../axis/utils/interpolators/number": 150, "../axis/utils/array/diff": 151, "../axis/cartesian": 148, "../animation-rules/cartesian-axis-ref-animation": 149, "../dependency-manager": 17 }], 108: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var s = void 0,
          n = e._parseCanvasCosmetics && e._parseCanvasCosmetics();if ((0, r.componentFactory)(e, a.default, "canvas", e.config.showVolumeChart ? 2 : 1), s = e.getChildren("canvas")) for (var _e14 = 0, _a6 = s.length; _e14 < _a6; _e14++) {
        s[_e14].configure(n), (0, r.componentFactory)(s[_e14], t.default, "axisRefVisualCartesian");
      }
    };var e = require("../canvases/canvas"),
        a = n(e),
        s = require("../axis-ref-visuals/axis-ref-component"),
        t = n(s),
        r = require("../lib/lib");function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }, { "../canvases/canvas": 126, "../axis-ref-visuals/axis-ref-component": 127, "../lib/lib": 20 }], 125: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var a = require("../../core/component-interface"),
        t = n(a),
        i = require("../lib/lib");function n(a) {
      return a && a.__esModule ? a : { default: a };
    }var e,
        r = function r(a, t) {
      return a = "comp_" + a, t && (this.config[a] = t), (t || !this.config[a]) && this || this.config[a];
    },
        s = function s(a, t) {
      return ["T", a, ",", t].join("");
    },
        o = function o(a) {
      return -a.getTranslation();
    },
        d = function d(a) {
      return s(o(a.h), o(a.v));
    },
        l = function l(a, t) {
      return { h: a, v: t };
    },
        g = ["columnShadowVcanvasGroup", "columnVcanvasGroup", "areaShadowVcanvasGroup", "areaVcanvasGroup", "lineShadowVcanvasGroup", "lineVcanvasGroup", "defaultShadowVcanvasGroup", "defaultVcanvasGroup", "sumLabelsLayer", "vcanvasLabelGroup"],
        h = function h(a, t, i) {
      return i.getFromEnv("animationManager").setAnimation({ el: "group", attr: { name: a }, container: t, state: "appearing", component: i, label: "group" });
    },
        c = function c(a) {
      return !/category/i.test(a.getName());
    };var u = "visible",
        m = "removed",
        x = "dataset";
    var v = function (_t$default8) {
      _inherits(v, _t$default8);

      function v() {
        _classCallCheck(this, v);

        return _possibleConstructorReturn(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
      }

      _createClass(v, [{
        key: "getName",
        value: function getName() {
          return "virtualCanvas";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "canvas";
        }
      }, {
        key: "xAxis",
        value: function xAxis(a) {
          var t = r.call(this, "xAxis", a);return a && this.listenToAxis(a), a && this.addToEnv("xAxis", a), t;
        }
      }, {
        key: "yAxis",
        value: function yAxis(a) {
          var t = r.call(this, "yAxis", a);return a && this.listenToAxis(a), a && this.addToEnv("yAxis", a), t;
        }
      }, {
        key: "paper",
        value: function paper(a) {
          return r.call(this, "paper", a);
        }
      }, {
        key: "canvas",
        value: function canvas(a) {
          return r.call(this, "canvas", a);
        }
      }, {
        key: "configure",
        value: function configure() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = this.getFromEnv("chartConfig"),
              i = this.config;Object.assign(i, a), i.transposeAxis = t.transposeAxis, this._mapChildren(function (a) {
            a.getState(m) || a.getType() === x || a.configure && a.configure();
          });
        }
      }, {
        key: "getHorizontalVerticalAxes",
        value: function getHorizontalVerticalAxes() {
          var a = this.xAxis(),
              t = this.yAxis();return t.config.isVertical ? l(a, t) : l(t, a);
        }
      }, {
        key: "preDraw",
        value: function preDraw() {
          this._mapChildren(function (a) {
            a.getState("removed") || "dataset" === a.getType() || a.setVisibility && a.setVisibility();
          });var a = void 0,
              t = this.config.transposeAxis,
              i = this.getFromEnv("chart"),
              _getAxisValuePadding = this.getAxisValuePadding(),
              n = _getAxisValuePadding.left,
              r = _getAxisValuePadding.right,
              s = _getAxisValuePadding.top,
              o = _getAxisValuePadding.bottom;(a = this.getDataLimits(!t)).min !== 1 / 0 || a.max !== -1 / 0 ? (this._setYAxisLimits(a.min, a.max), i._storeIntialLimit && i._storeIntialLimit(a.min, a.max)) : (this._setYAxisLimits(e, e), i._storeIntialLimit && i._storeIntialLimit(e, e)), this._setXAxisLimits(a.xMin, a.xMax), this._setAxisValuePadding(n, r, s, o);
        }
      }, {
        key: "childChanged",
        value: function childChanged() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = void 0,
              i = this,
              n = i.config,
              r = n.transposeAxis;!1 !== a.dataLimitChanged && (t = i.getDataLimits(!r), r && (t.min !== n.range.min || t.max !== n.range.max) && (n.range.min = t.min, n.range.max = t.max, this.getFromEnv("yAxis").resetStoredLimits(), t.min !== 1 / 0 || t.max !== -1 / 0 ? i._setYAxisLimits(t.min, t.max) : i._setYAxisLimits(e, e)), (t.xMin !== n.range.xMin || t.xMax !== n.range.xMax) && (n.range.xMin = t.xMin, n.range.xMax = t.xMax, this.getFromEnv("xAxis").resetStoredLimits(), i._setXAxisLimits(t.xMin, t.xMax))), i.asyncDraw();
        }
      }, {
        key: "_setAxisValuePadding",
        value: function _setAxisValuePadding(a, t, i, n) {
          this.getFromEnv("xAxis").setAxisPadding(a, t), i && n && this.getFromEnv("yAxis").setAxisPadding(a, t);
        }
      }, {
        key: "getAxisValuePadding",
        value: function getAxisValuePadding() {
          var a = Math.max;var t = {},
              i = -1 / 0,
              n = -1 / 0,
              e = -1 / 0,
              r = -1 / 0;return this._mapChildren(function (s) {
            s.getState(m) || (t = s.getAxisValuePadding && s.getAxisValuePadding() || {}, i = a(i, t.left || -1 / 0), n = a(n, t.right || -1 / 0), e = a(e, t.top || -1 / 0), r = a(r, t.bottom || -1 / 0));
          }), i === -1 / 0 && (i = 0), n === -1 / 0 && (n = 0), e === -1 / 0 && (e = 0), r === -1 / 0 && (r = 0), this.config.padding || (this.config.padding = {}, this.config.padding.left = i, this.config.padding.right = n, this.config.padding.top = e, this.config.padding.bottom = r), { left: i, right: n, top: e, bottom: r };
        }
      }, {
        key: "_setYAxisLimits",
        value: function _setYAxisLimits(a, t) {
          var i = this.getFromEnv("yAxis");c(i) && i.setDataLimit(t, a);
        }
      }, {
        key: "_setXAxisLimits",
        value: function _setXAxisLimits(a, t) {
          var i = this.getFromEnv("xAxis");c(i) && (t !== -1 / 0 || a !== 1 / 0 ? i.setDataLimit(t, a) : i.setDataLimit(e, e));
        }
      }, {
        key: "getDataLimits",
        value: function getDataLimits(a) {
          var t,
              n,
              e,
              r = Math.max,
              s = this.getFromEnv("chart"),
              o = -1 / 0,
              d = o,
              l = 1 / 0,
              g = 1 / 0,
              h = o,
              c = function c(a) {
            var t = Math.min;n = (0, i.pluck)(a.xMax, o), e = (0, i.pluck)(a.xMin, 1 / 0), d = r(d, a.max), l = t(l, a.min), h = r(h, n), g = t(g, e);
          };return this._mapChildren(function (i) {
            i.getDataLimits && !i.getState(m) && (a || i.getState(u)) && (t = i.getDataLimits(a), c(t));
          }), this.config.range || (this.config.range = {}, this.config.range.min = l, this.config.range.max = d, this.config.range.xMin = g, this.config.range.xMax = h), s.config.yMax = d, s.config.yMin = l, { min: l, max: d, xMin: g, xMax: h };
        }
      }, {
        key: "listenToAxis",
        value: function listenToAxis(a) {
          var t,
              i = this;t = function t() {
            i.getState("drawn") && i.asyncDraw();
          }, this.getState("visiblerangeset" + a.getId()) || (this.setState("visiblerangeset" + a.getId(), !0), i.addExtEventListener("visiblerangeset", t, a));
        }
      }, {
        key: "createContainer",
        value: function createContainer() {
          var a = this,
              t = a.getLinkedParent();a.getChildContainer("columnShadowVcanvasGroup") || a.addChildContainer("columnShadowVcanvasGroup", h("vcanvas-column-shadow", t.getChildContainer("columnShadowGroup"), a)), a.getChildContainer("columnVcanvasGroup") || a.addChildContainer("columnVcanvasGroup", h("vcanvas-column-plot", t.getChildContainer("columnGroup"), a)), a.getChildContainer("areaShadowVcanvasGroup") || a.addChildContainer("areaShadowVcanvasGroup", h("vcanvas-area-shadow", t.getChildContainer("areaShadowGroup"), a)), a.getChildContainer("areaVcanvasGroup") || a.addChildContainer("areaVcanvasGroup", h("vcanvas-area-plot", t.getChildContainer("areaGroup"), a)), a.getChildContainer("lineShadowVcanvasGroup") || a.addChildContainer("lineShadowVcanvasGroup", h("vcanvas-line-shadow", t.getChildContainer("lineShadowGroup"), a)), a.getChildContainer("lineVcanvasGroup") || a.addChildContainer("lineVcanvasGroup", h("vcanvas-line-plot", t.getChildContainer("lineGroup"), a)), a.getChildContainer("defaultShadowVcanvasGroup") || a.addChildContainer("defaultShadowVcanvasGroup", h("vcanvas-default-shadow", t.getChildContainer("defaultShadowGroup"), a)), a.getChildContainer("defaultVcanvasGroup") || a.addChildContainer("defaultVcanvasGroup", h("vcanvas-default-plot", t.getChildContainer("defaultGroup"), a)), a.getChildContainer("vcanvasLabelGroup") || a.addChildContainer("vcanvasLabelGroup", h("vcanvas-label", t.getChildContainer("datalabelsGroup"), a)), a.getChildContainer("columnTrendGroup") || a.addChildContainer("columnTrendGroup", h("columnTrendGroup", a.getChildContainer("columnVcanvasGroup"), a)), a.getChildContainer("sumLabelsLayer") || a.addChildContainer("sumLabelsLayer", h("vcanvas-sumLabelsLayer", t.getChildContainer("sumLabelsLayer"), a));
        }
      }, {
        key: "applyTranslation",
        value: function applyTranslation() {
          var a = this,
              t = a.getHorizontalVerticalAxes(),
              i = d(t),
              n = function n(t) {
            (t = a.getChildContainer(t)).attr({ transform: i });
          };a.createContainer(), g.forEach(function (a) {
            n(a);
          });
        }
      }, {
        key: "draw",
        value: function draw() {
          this.applyTranslation(), this.setState("drawn", !0);
        }
      }, {
        key: "getCanvasPadding",
        value: function getCanvasPadding() {
          var a,
              t,
              i = { paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 };return this._mapChildren(function (n) {
            if (n.getCanvasPadding && !n.getState(m)) for (t in a = n.getCanvasPadding() || {}) {
              a.hasOwnProperty(t) && (i[t] = Math.max(a[t], i[t]));
            }
          }), i;
        }
      }, {
        key: "rtShiftAnim",
        value: function rtShiftAnim(a, t) {
          var i,
              n = this,
              e = n.getFromEnv("xAxis"),
              r = n.getFromEnv("yAxis"),
              o = e.getPixel(1) - e.getPixel(0),
              d = r.getPixel(1) - r.getPixel(0),
              l = n.getFromEnv("animationManager");i = s(a = (a || 0) * o, t = (t || 0) * d), g.forEach(function (a) {
            n.getChildContainer(a).attr({ transform: i }), l.setAnimation({ el: n.getChildContainer(a), attrs: { transform: "T0,0" } });
          });
        }
      }]);

      return v;
    }(t.default);

    exports.default = v;
  }, { "../../core/component-interface": 62, "../lib/lib": 20 }], 109: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var r,
          a,
          o,
          s,
          v,
          l,
          i,
          g = e.getChildren("canvas"),
          u = g.length,
          d = [],
          f = [];for (s = 0; s < u; s++, d = [], f = []) {
        if (!(r = g[s]).getState("removed")) {
          for (o = r.getFromEnv("xAxis"), l = 0; l < (o && o.length); l++) {
            o[l].getState("removed") || d.push(o[l]);
          }for (o = r.getFromEnv("yAxis"), l = 0; l < (o && o.length); l++) {
            o[l].getState("removed") || f.push(o[l]);
          }for ((0, n.componentFactory)(r, t.default, "vCanvas", d.length * f.length), a = r.getChildren("vCanvas"), v = 0, l = 0; v < (d && d.length); v++) {
            for (i = 0; i < (f && f.length); i++, l++) {
              a[l].xAxis(d[v]).yAxis(f[i]).canvas(r), a[l].configure(), a[l].addToEnv("vCanvas", a[l]);
            }
          }
        }
      }
    };var e = require("../canvases/vcanvas.js"),
        t = r(e),
        n = require("../lib/lib");function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }, { "../canvases/vcanvas.js": 125, "../lib/lib": 20 }], 128: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("../../core/component-interface"),
        t = a(e),
        n = require("../dom/dom-event"),
        s = a(n),
        r = require("../lib/lib");function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var o,
        i = "mouseover",
        u = "mousedown",
        l = "touchstart",
        c = "mouseup",
        v = "touchend",
        h = "mousemove",
        d = "touchmove",
        g = "mouseout",
        f = "click",
        m = window,
        E = m.document,
        p = "ontouchstart" in m;
    var b = function (_t$default9) {
      _inherits(b, _t$default9);

      function b() {
        var _this31;

        _classCallCheck(this, b);

        var e;(_this31 = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this)), _this31), _this31.pIndex = 1, _this31.handler = (e = _this31, function (t) {
          e.config.lastTouchStartEvent = t.originalEvent, t.originalEvent && e.getFromEnv("chart")._mouseEvtHandler(t, e.config.evtData);
        }), _this31.globalHandler = function (e) {
          return function (t) {
            var n,
                s,
                a = e.getFromEnv("chart");(t.type === l || t.type === u) && (n = a.getChildren("canvas")[0], s = (0, r.getMouseCoordinate)(e.getFromEnv("chart-container"), t.originalEvent, a), e.config.lastTouchStartEvent === t.originalEvent || n && n.isWithinCanvas(s.chartX, s.chartY)) || t.originalEvent && a._mouseEvtHandler(t, e.config.evtData);
          };
        }(_this31), _this31.eventsList = [u, l, c, v, h, d, f, i], _this31.config = {}, _this31.config.evtData = {};return _this31;
      }

      _createClass(b, [{
        key: "getMouseEvents",
        value: function getMouseEvents(e, t, n) {
          var s = this,
              a = s._lastDatasetIndex,
              m = s._lastPointIndex,
              E = e.type,
              b = { fireOut: !1, events: [] };if (s.hasTouchEvent && (E === u || E === g)) return b;switch (E) {case f:
              s.lastTouchedElement = e.originalEvent.target, b.events.push(f);break;case d:case h:
              s.lastTouchedElement = o, a === t && m === n ? (clearTimeout(s.mouseoutTimer), b.events.push(h)) : (b.events.push(i), b.fireOut = !0);break;case l:
              s.hasTouchEvent = !0;case u:
              a !== t || m !== n ? (b.fireOut = !0, b.events.push(i)) : p && b.events.push(h), b.events.push(u);break;case i:
              a === t && m === n ? clearTimeout(s.mouseoutTimer) : (b.fireOut = !0, b.events.push(i));break;case v:case c:
              s.hasTouchEvent = !1, b.events.push(c);break;case g:
              r.isIE11 ? s.lastTouchedElement !== e.originalEvent.target && (b.fireOut = !0) : b.fireOut = !0;}return b;
        }
      }, {
        key: "addEvents",
        value: function addEvents() {
          var e,
              t,
              n,
              r = this,
              a = r.getFromEnv("chart"),
              o = a.getChildren("canvas"),
              i = r.config.evtData,
              c = r.eventsList;for (a.config.enableMouseOutEvent && c.push(g), r._removeListners(), i.chart = a, i.mouseTracker = r, t = 0; t < o.length; t++) {
            for (n in e = o[t], c) {
              e.addEventListener(c[n], r.handler);
            }
          }p ? s.default.listen(E, l, r.globalHandler) : s.default.listen(E, u, r.globalHandler);
        }
      }, {
        key: "_removeListners",
        value: function _removeListners() {
          var e,
              t,
              n,
              r = this,
              a = r.getFromEnv("chart").getChildren("canvas"),
              o = r.eventsList;for (n = 0; n < a.length; n++) {
            for (t in e = a[n], o) {
              e.removeEventListener(o[t], r.handler);
            }
          }p ? s.default.unlisten(E, l, r.globalHandler) : s.default.unlisten(E, u, r.globalHandler);
        }
      }, {
        key: "_dispose",
        value: function _dispose() {
          this._removeListners(), _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "_dispose", this).call(this);
        }
      }]);

      return b;
    }(t.default);

    exports.default = b;
  }, { "../../core/component-interface": 62, "../dom/dom-event": 73, "../lib/lib": 20 }], 110: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (e) {
      var t = void 0;e.config.enablemousetracking ? ((0, o.componentFactory)(e, r.default, "mouseTracker"), t = e.getChildren("mouseTracker")[0], !e.config.mouseTrackerEventAdded && (t.addEvents(), e.config.mouseTrackerEventAdded = !0)) : ((t = e.getChildren("mouseTracker") && e.getChildren("mouseTracker")[0]) && t._removeListners(), e.config.mouseTrackerEventAdded = !1);
    };var e = require("./../components/mouse-tracker"),
        r = t(e),
        o = require("../lib/lib");function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }, { "./../components/mouse-tracker": 128, "../lib/lib": 20 }], 58: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./commonspacemanager"),
        a = c(e),
        i = require("../_internal/lib/lib"),
        s = require("../_internal/factories/cartesian-axis"),
        n = c(s),
        l = require("../_internal/factories/canvas-axis-ref-cartesian"),
        o = c(l),
        t = require("../_internal/factories/vcanvas"),
        r = c(t),
        d = require("../_internal/factories/mouse-tracker"),
        h = c(d);function c(e) {
      return e && e.__esModule ? e : { default: e };
    }var x = void 0,
        u = Math.max,
        p = Math.min;
    var m = function (_a$default5) {
      _inherits(m, _a$default5);

      function m() {
        var _this32;

        _classCallCheck(this, m);

        (_this32 = _possibleConstructorReturn(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this)), _this32), _this32.registerFactory("axis", n.default, ["canvas"]), _this32.registerFactory("canvas", o.default), _this32.registerFactory("vCanvas", r.default, ["axis"]), _this32.registerFactory("mouseTracker", h.default, ["canvas"]);return _this32;
      }

      _createClass(m, [{
        key: "getName",
        value: function getName() {
          return "Cartesian";
        }
      }, {
        key: "getType",
        value: function getType() {
          return "chartAPI";
        }
      }, {
        key: "_allocateXAxisLabelSpace",
        value: function _allocateXAxisLabelSpace(e) {
          var a,
              i = this.config,
              s = e.getAxisEndLabelDisplaySpace(),
              n = s.left,
              l = s.right,
              o = s.top,
              t = s.bottom,
              r = i.availableWidth,
              d = i.availableHeight,
              h = i.canvasLeft,
              c = i.canvasRight,
              x = i.canvasTop,
              u = i.canvasBottom,
              p = i.width,
              m = i.height,
              v = function v(e, a) {
            return e < a && 0 < a ? a - e : 0;
          };o + t > d && (o = d * o / (a = o + t), t = d * t / a), n + l > r && (n = r * n / (a = n + l), l = r * l / a), n = v(h, n), l = v(p - c, l), o = v(x, o), t = v(m - u, t), this._allocateSpace({ left: n, right: l, top: o, bottom: t });
        }
      }, {
        key: "_setCategories",
        value: function _setCategories() {
          var e = this.getFromEnv("dataSource"),
              a = this.getChildren("xAxis"),
              i = e.categories && e.categories.length && e.categories[0].category;a && a[0].setTickValues(i);
        }
      }, {
        key: "_feedAxesRawData",
        value: function _feedAxesRawData() {
          var e,
              a,
              s = this,
              n = s.config,
              l = s.getFromEnv("dataSource");return e = s.getSpecificxAxisConf(), a = s.getSpecificyAxisConf(), e.vtrendlines = (0, i.extend2)([], l.vtrendlines), a.trendlines = (0, i.extend2)([], l.trendlines), n.isstacked && (a.isPercent = (0, i.pluckNumber)(n.stack100percent, 0)), { yAxisConf: [a], xAxisConf: [e] };
        }
      }, {
        key: "getSpecificxAxisConf",
        value: function getSpecificxAxisConf() {
          var e = this,
              a = e.getFromEnv("chart-attrib"),
              s = e.config,
              n = e.config.is3D,
              l = e.getBasexAxisConf();return l.isReverse = s.reverseXAxis, l.axisLineColor = (0, i.pluck)(a.xaxislinecolor, a.axislinecolor, "#000000"), l.showAlternateGridColor = (0, i.pluckNumber)(a.showalternatevgridcolor, 0), l.numDivLines = (0, i.pluckNumber)(a.numvdivlines, s.numVDivLines), l.axisName = a.xaxisname, l.setAdaptiveMin = (0, i.pluckNumber)(a.setadaptivexmin, s.setadaptivexmin, s.setadaptivexmin), l.showLimits = (0, i.pluckNumber)(a.showvlimits, s.showvlimits), l.showDivLineValues = (0, i.pluckNumber)(a.showvdivlinevalues, a.showvdivlinevalues, s.showvdivlinevalues), l.zeroPlaneThickness = (0, i.pluckNumber)(a.vzeroplanethickness, a.vdivlinethickness, s.zeroplanethickness, 2), l.zeroPlaneAlpha = (0, i.pluckNumber)(a.vzeroplanealpha, a.vdivlinealpha, s.zeroplanealpha), l.showZeroPlaneValue = (0, i.pluckNumber)(a.showvzeroplanevalue, s.showzeroplanevalue), l.showAxisLine = n ? 0 : (0, i.pluckNumber)(a.showxaxisline, a.showaxislines, a.drawAxisLines, s.showxaxisline, 0), l.maxLabelHeight = a.maxlabelheight, l.showZeroPlane = (0, i.pluckNumber)(a.showvzeroplane, s.showzeroplane), l;
        }
      }, {
        key: "getSpecificyAxisConf",
        value: function getSpecificyAxisConf() {
          var e = this,
              a = e.getFromEnv("chart-attrib"),
              s = e.config,
              n = e.config.is3D,
              l = n ? i.chartPaletteStr.chart3D : i.chartPaletteStr.chart2D,
              o = s.isInverse,
              t = e.getFromEnv("color-manager"),
              r = (0, i.pluckNumber)(a.showzeroplane, s.showzeroplane, 1),
              d = (0, i.pluckNumber)(a.showzeroplanevalue, s.showzeroplanevalue);return r || d !== x || (d = 0), { isVertical: !0, isReverse: !o, isOpposit: !1, outCanfontFamily: (0, i.pluck)(a.outcnvbasefont, a.basefont, "Verdana,sans"), outCanfontSize: (0, i.pluckFontSize)(a.outcnvbasefontsize, a.basefontsize, 10), outCancolor: (0, i.pluck)(a.outcnvbasefontcolor, a.basefontcolor, t.getColor(l.baseFontColor)).replace(/^#? ([a-f0-9]+)/gi, "#$1"), axisBreaks: a.yaxisbreaks, axisNamePadding: a.yaxisnamepadding, axisValuePadding: a.yaxisvaluespadding, axisNameFont: a.yaxisnamefont, axisNameFontSize: a.yaxisnamefontsize, axisNameFontColor: a.yaxisnamefontcolor, axisNameFontBold: a.yaxisnamefontbold, axisNameFontItalic: a.yaxisnamefontitalic, axisNameBgColor: a.yaxisnamebgcolor, axisNameBorderColor: a.yaxisnamebordercolor, axisNameAlpha: a.yaxisnamealpha, axisNameFontAlpha: a.yaxisnamefontalpha, axisNameBgAlpha: a.yaxisnamebgalpha, axisNameBorderAlpha: a.yaxisnameborderalpha, axisNameBorderPadding: a.yaxisnameborderpadding, axisNameBorderRadius: a.yaxisnameborderradius, axisNameBorderThickness: a.yaxisnameborderthickness, axisNameBorderDashed: a.yaxisnameborderdashed, axisNameBorderDashLen: a.yaxisnameborderdashlen, axisNameBorderDashGap: a.yaxisnameborderdashgap, axisNameWidth: a.yaxisnamewidth, useEllipsesWhenOverflow: a.useellipseswhenoverflow, rotateAxisName: (0, i.pluckNumber)(a.rotateyaxisname, 1), axisName: a.yaxisname, divLineColor: (0, i.pluck)(a.divlinecolor, t.getColor(l.divLineColor)), divLineAlpha: (0, i.pluck)(a.divlinealpha, n ? t.getColor("divLineAlpha3D") : t.getColor("divLineAlpha")), divLineThickness: (0, i.pluckNumber)(a.divlinethickness, 1), divLineIsDashed: !!(0, i.pluckNumber)(a.divlinedashed, a.divlineisdashed, 0), divLineDashLen: (0, i.pluckNumber)(a.divlinedashlen, 4), divLineDashGap: (0, i.pluckNumber)(a.divlinedashgap, 2), showAlternateGridColor: (0, i.pluckNumber)(a.showalternatehgridcolor, 1), alternateGridColor: (0, i.pluck)(a.alternatehgridcolor, t.getColor("altHGridColor")), alternateGridAlpha: (0, i.pluck)(a.alternatehgridalpha, t.getColor("altHGridAlpha")), numDivLines: (0, i.pluckNumber)(a.numdivlines, s.numDivLines), axisMinValue: s.yRangeMin || a.yaxisminvalue, axisMaxValue: s.yRangeMax || a.yaxismaxvalue, setAdaptiveMin: (0, i.pluckNumber)(a.setadaptivesymin, a.setadaptiveymin, s.setAdaptiveMin), adjustDiv: a.adjustdiv, labelStep: a.yaxisvaluesstep, showAxisValues: (0, i.pluckNumber)(a.showyaxisvalues, a.showyaxisvalue, s.showyaxisvalues), showLimits: (0, i.pluckNumber)(a.showyaxislimits, a.showlimits, e.showLimits), showDivLineValues: (0, i.pluckNumber)(a.showdivlinevalues, a.showdivlinevalue, s.showdivlinevalues), showZeroPlane: r, zeroPlaneColor: a.zeroplanecolor, zeroPlaneThickness: (0, i.pluckNumber)(a.zeroplanethickness, a.divlinethickness, s.zeroplanethickness, 2), zeroPlaneAlpha: (0, i.pluckNumber)(a.zeroplanealpha, a.divlinealpha, s.zeroplanealpha), showZeroPlaneValue: d, showZeroPlaneOnTop: s.showzeroplaneontop, trendlineColor: a.trendlinecolor, trendlineToolText: a.trendlinetooltext, trendlineThickness: a.trendlinethickness, trendlineAlpha: a.trendlinealpha, showTrendlinesOnTop: a.showtrendlinesontop, showAxisLine: n ? 0 : (0, i.pluckNumber)(a.showyaxisline, a.showaxislines, a.drawAxisLines, s.showyaxisline, 0), axisLineThickness: (0, i.pluckNumber)(a.yaxislinethickness, a.axislinethickness, 1), axisLineAlpha: (0, i.pluckNumber)(a.yaxislinealpha, a.axislinealpha, 100), axisLineColor: (0, i.pluck)(a.yaxislinecolor, a.axislinecolor, "#000000"), forceTrendBelow: !!s.is3D };
        }
      }, {
        key: "getBasexAxisConf",
        value: function getBasexAxisConf() {
          var e = this,
              a = e.getFromEnv("chart-attrib"),
              s = e.config.is3D,
              n = s ? i.chartPaletteStr.chart3D : i.chartPaletteStr.chart2D,
              l = e.getFromEnv("color-manager");return { isVertical: !1, isOpposit: !1, outCanfontFamily: (0, i.pluck)(a.outcnvbasefont, a.basefont, "Verdana,sans"), outCanfontSize: (0, i.pluckFontSize)(a.outcnvbasefontsize, a.basefontsize, 10), outCancolor: (0, i.pluck)(a.outcnvbasefontcolor, a.basefontcolor, l.getColor(n.baseFontColor)).replace(/^#? ([a-f0-9]+)/gi, "#$1"), axisNamePadding: a.xaxisnamepadding, axisValuePadding: a.labelpadding, axisNameFont: a.xaxisnamefont, axisNameFontSize: a.xaxisnamefontsize, axisNameFontColor: a.xaxisnamefontcolor, axisNameFontBold: a.xaxisnamefontbold, axisNameFontItalic: a.xaxisnamefontitalic, axisNameBgColor: a.xaxisnamebgcolor, axisNameBorderColor: a.xaxisnamebordercolor, axisNameAlpha: a.xaxisnamealpha, axisNameFontAlpha: a.xaxisnamefontalpha, axisNameBgAlpha: a.xaxisnamebgalpha, axisNameBorderAlpha: a.xaxisnameborderalpha, axisNameBorderPadding: a.xaxisnameborderpadding, axisNameBorderRadius: a.xaxisnameborderradius, axisNameBorderThickness: a.xaxisnameborderthickness, axisNameBorderDashed: a.xaxisnameborderdashed, axisNameBorderDashLen: a.xaxisnameborderdashlen, axisNameBorderDashGap: a.xaxisnameborderdashgap, useEllipsesWhenOverflow: a.useellipseswhenoverflow, divLineColor: (0, i.pluck)(a.vdivlinecolor, a.divlinecolor, l.getColor(n.divLineColor)), divLineAlpha: (0, i.pluck)(a.vdivlinealpha, a.divlinealpha, s ? l.getColor("divLineAlpha3D") : l.getColor("divLineAlpha")), divLineThickness: (0, i.pluckNumber)(a.vdivlinethickness, a.divlinethickness, 1), divLineIsDashed: !!(0, i.pluckNumber)(a.vdivlinedashed, a.vdivlineisdashed, a.divlinedashed, a.divlineisdashed, 0), divLineDashLen: (0, i.pluckNumber)(a.vdivlinedashlen, a.divlinedashlen, 4), divLineDashGap: (0, i.pluckNumber)(a.vdivlinedashgap, a.divlinedashgap, 2), alternateGridColor: (0, i.pluck)(a.alternatevgridcolor, l.getColor("altVGridColor")), alternateGridAlpha: (0, i.pluck)(a.alternatevgridalpha, l.getColor("altVGridAlpha")), labelFont: a.labelfont, labelFontSize: a.labelfontsize, labelFontColor: a.labelfontcolor, labelFontAlpha: a.labelalpha, labelFontBold: a.labelfontbold, labelFontItalic: a.labelfontitalic, axisMinValue: a.xaxisminvalue, axisMaxValue: a.xaxismaxvalue, adjustDiv: a.adjustvdiv, labelDisplay: a.labeldisplay, showLabels: a.showlabels, rotateLabels: a.rotatelabels, slantLabel: (0, i.pluckNumber)(a.slantlabels, a.slantlabel), labelStep: (0, i.pluckNumber)(a.labelstep, a.xaxisvaluesstep), showAxisValues: (0, i.pluckNumber)(a.showxaxisvalues, a.showxaxisvalue), zeroPlaneColor: a.vzeroplanecolor, trendlineColor: a.trendlinecolor, trendlineToolText: a.trendlinetooltext, trendlineThickness: a.trendlinethickness, trendlineAlpha: a.trendlinealpha, showTrendlinesOnTop: a.showtrendlinesontop, axisLineThickness: (0, i.pluckNumber)(a.xaxislinethickness, a.axislinethickness, 1), axisLineAlpha: (0, i.pluckNumber)(a.xaxislinealpha, a.axislinealpha, 100) };
        }
      }, {
        key: "getConfig",
        value: function getConfig(e) {
          return e ? this.config[e] : this.config;
        }
      }, {
        key: "_getSumValueSpace",
        value: function _getSumValueSpace(e) {
          var a,
              s = Math.max,
              n = this,
              l = {},
              o = n.isBar,
              t = n.getFromEnv("dataSource").chart,
              r = 0 === n.showsum ? 0 : (0, i.pluckNumber)(t.showsum, n.showsum, 0),
              d = (0, i.pluckNumber)(n.config.stack100percent),
              h = n.config.isstacked,
              c = 0,
              x = [],
              u = 0;if (n.iterateComponents(function (e) {
            ("cartesianStackGroup" === e.getName() || "marimekkoStackgroup" === e.getName()) && x.push(e);
          }), r && d && h && x.length) {
            for (a = x.length - 1; 0 <= a; a--) {
              l = x[a].getMaxSumValueSpace(), o ? c = s(c, l.maxWidth) : u = s(u, l.maxHeight);
            }u > e && (u = e), c > e && (c = e);
          }return { top: u, right: c };
        }
      }, {
        key: "setAxisDimention",
        value: function setAxisDimention() {
          var e = Math.max;var a = this,
              i = a.getChildren("xAxis") && a.getChildren("xAxis")[0],
              s = a.getChildren("yAxis") && a.getChildren("yAxis")[0],
              n = a.getFromEnv("chartConfig"),
              l = n.xDepth,
              o = a.getChildren("canvas") && a.getChildren("canvas")[0].config,
              t = o && o.canvasBorderWidth,
              r = o && o.canvasPadding,
              d = o.canvasLeft,
              h = o && o.canvasPaddingLeft,
              c = o && o.canvasPaddingRight,
              x = o.canvasTop,
              u = o && o.canvasPaddingTop;i && i.setAxisConfig({ canvasPaddingLeft: e(h, r), canvasPaddingRight: e(c, r) }), i && i.setAxisDimention({ x: d + (l || 0) + e(h, r), y: n.canvasBottom + (n.shift || 0) + t, opposite: x - t, axisLength: o.canvasWidth - (l || 0) - e(h, r) - e(c, r) }), s && s.setAxisDimention({ x: d - t, y: x + u, opposite: n.canvasRight + t, axisLength: n.canvasHeight - u - o.canvasPaddingBottom });
        }
      }, {
        key: "_getTrendLineMinMax",
        value: function _getTrendLineMinMax(e, a) {
          var i,
              s,
              n,
              l,
              o,
              t = "v" === e ? this.getFromEnv("dataSource").vtrendlines : this.getFromEnv("dataSource").trendlines,
              r = { max: -1 / 0, min: 1 / 0 };if (a = a || "p", t) for (s = 0, l = t.length; s < l; s += 1) {
            for (n = 0, o = t[s].line ? t[s].line.length : 0; n < o; n += 1) {
              i = t[s].line[n], !("s" === a && "s" !== i.parentyaxis || "s" !== a && "s" === i.parentyaxis) && (r.max = u(i.startvalue || -1 / 0, i.endvalue || -1 / 0, r.max), r.min = p(i.startvalue || 1 / 0, i.endvalue || 1 / 0, r.min));
            }
          }return r;
        }
      }], [{
        key: "getName",
        value: function getName() {
          return "Cartesian";
        }
      }]);

      return m;
    }(a.default);

    exports.default = m;
  }, { "./commonspacemanager": 106, "../_internal/lib/lib": 20, "../_internal/factories/cartesian-axis": 107, "../_internal/factories/canvas-axis-ref-cartesian": 108, "../_internal/factories/vcanvas": 109, "../_internal/factories/mouse-tracker": 110 }], 59: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = function (t) {
      var a = void 0,
          n = void 0,
          d = t.getChildren(),
          i = d.canvas && d.canvas[0],
          s = i && i.getChildren("vCanvas"),
          l = s && s[0] || i || t,
          v = t.getFromEnv("dataSource"),
          u = v.dataset,
          c = v.data || u && u[0].data;return n = r(c), c && 0 !== c.length ? (a = t.getDSdef(), void (0, e.datasetFactory)(l, a, "dataset", 1, [n])) : void t.setChartMessage();
    };var e = require("../lib/lib");var t = "true",
        a = "1",
        r = function r(_r9) {
      var n = [],
          d = [];return (0, e.fcEach)(_r9, function (e, r) {
        e.vline === t || !0 === e.vline || 1 === e.vline || e.vline === a ? d.push({ index: r, data: e }) : n.push(e);
      }), { catData: d, data: n };
    };
  }, { "../lib/lib": 20 }], 11: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./cartesian"),
        t = r(e),
        a = require("../_internal/factories/singleseries-dataset"),
        s = r(a);function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = function (_t$default10) {
      _inherits(i, _t$default10);

      function i() {
        var _this33;

        _classCallCheck(this, i);

        (_this33 = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this)), _this33), _this33.registerFactory("dataset", s.default, ["vCanvas"]);return _this33;
      }

      _createClass(i, [{
        key: "getName",
        value: function getName() {
          return "SSCartesian";
        }
      }, {
        key: "__setDefaultConfig",
        value: function __setDefaultConfig() {
          _get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "__setDefaultConfig", this).call(this);var e = this.config;e.hasLegend = !1, e.linethickness = 4;
        }
      }, {
        key: "_checkInvalidSpecificData",
        value: function _checkInvalidSpecificData() {
          var e = this.getFromEnv("dataSource").data;if (!e || !e.length) return !0;
        }
      }, {
        key: "_setCategories",
        value: function _setCategories() {
          var e = this.getFromEnv("dataSource"),
              t = this.getChildren("xAxis"),
              a = e.dataset,
              s = e.data || a && a[0].data;t[0].setTickValues(s);
        }
      }], [{
        key: "getName",
        value: function getName() {
          return "SSCartesian";
        }
      }]);

      return i;
    }(t.default);

    exports.default = i;
  }, { "./cartesian": 58, "../_internal/factories/singleseries-dataset": 59 }], 63: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var t = require("../lib/lib");exports.default = { "initial.dataset.column": function initialDatasetColumn() {
        var i,
            a = Math.sign,
            e = this,
            n = e.getFromEnv("chart"),
            o = n.config.yDepth || 0,
            r = "y",
            l = "height",
            s = "x",
            p = "width",
            c = e.getFromEnv("yAxis"),
            d = e.getFromEnv("xAxis"),
            f = function f(t, i) {
          var a,
              d,
              f,
              h,
              g = e.config,
              u = i && i.graphics && i.graphics.element,
              _ = t.attr,
              x = c.getPixel(c.getAxisBase()) + (n.isBar ? -o : o),
              A = {},
              y = g.oldZeroAxisPos;if (a = u.attr(), A[r] = d = a[r], A[l] = a[l], A[s] = a[s], A[p] = a[p], f = a[r] + a[l], x !== y && (0 <= y - x ? (d > x && d <= y + .7 && (A[r] = x, f > y && (A[l] = f - A[r])), f > x && f <= y + .7 && (A[l] = x - (A[r] || 0 === A[r] ? A[r] : d))) : (d < x && d >= y - .7 && (A[r] = x, f > x && (A[l] = f - A[r])), f < x && f >= y - .7 && (A[l] = x - (A[r] || 0 === A[r] ? A[r] : d))), h = !0), e.config.catDiff && (A[s] = _[s], A[p] = _[p], h = !0), i._plot_1Start = A, h) return { finalAttr: A, slot: "axis" };
        };return { "rect.appearing": function rectAppearing(i) {
            var f,
                h,
                g,
                u,
                _ = c.getPixel(c.getAxisBase()) + (n.isBar ? -o : o),
                x = i.index,
                A = e.components.data[x],
                y = i.attr;return d.config.isVertical && (r = "x", l = "width", s = "y", p = "height"), f = y[r], h = y[l], u = a(f + h / 2 - _), g = 1 === u ? f : f + h, A._posWRT0 = u, [{ initialAttr: function initialAttr() {
                var t = {};return t[r] = g, t.opacity = 0, t[l] = 0, t;
              }, finalAttr: { opacity: 1 }, startEnd: function startEnd() {
                var a = i.length;return t.animHelperFN.getTimeByValue(t.animHelperFN.animByWeight(x, a, .6), { startPx: _, endPx: 1 === u ? e.config.yAxisMaxPixel : e.config.yAxisMinPixel }, { startPx: g, endPx: 1 === u ? y[r] + y[l] : y[r] });
              }, hookFn: function hookFn() {
                this.attr({ opacity: 1 });
              }, effect: "linear", slot: "plot" }];
          }, "rect.updating": function rectUpdating(t) {
            var h,
                g,
                u,
                _,
                x,
                A,
                y,
                m,
                v,
                P,
                b,
                E,
                F,
                w,
                B,
                D,
                T,
                W,
                O,
                R,
                j,
                k,
                S,
                V,
                M,
                L,
                C,
                H,
                N = [],
                q = e.components.data[t.index],
                I = t.attr,
                Z = q && q.graphics && q.graphics.element,
                z = c.getPixel(c.getAxisBase()) + (n.isBar ? -o : o),
                G = 0,
                J = e.getFromEnv("numColDiff");return d.config.isVertical && (r = "x", l = "width", s = "y", p = "height"), (C = f(t, q)) && N.push(C), E = (b = q.prevDataObj) && b._plot_1Start, W = b && b._plot_1End, F = b && b._plot_2Start, w = q.oldPrevDataObj, B = q.oldPrevDataObj && q.oldPrevDataObj._plot_1End, u = (h = (H = q._plot_1Start)[r]) + (g = H[l]), _ = h + g / 2, y = (x = I[r]) + (A = I[l]) / 2, D = (u + (x + A)) / 2, O = a(_ - z), R = a(y - z), (P = {})[r] = (v = {})[r] = (h + x) / 2, P[l] = v[l] = (g + A) / 2, g ? O === R ? b !== w && (k = (j = B || !(!W || a(W[r] + W[l] / 2 - z) !== O) && W) ? j[r] + (1 === O ? j[l] : 0) : z, 1 === O ? (P[r] = v[r] = k, P[l] = v[l] = D - v[r]) : P[l] = v[l] = k - v[r], m = !0) : (P[l] = v[l] = 0, v[r] = w && w._oldPosWRT0 === O ? B[r] + (1 === O ? B[l] : 0) : z, P[r] = F ? F[r] + (1 === R ? F[l] : 0) : z, T = m = !0) : b && b._oldPosWRT0 === R || 0 === e.stackIndex ? ((M = {})[l] = 0, M[r] = E ? E[r] + (0 < b._posWRT0 ? E[l] : 0) : z, q._posWRT0 = R, q._plot_1Start = M, P[r] = v[r] = (M[r] + x) / 2, P[l] = v[l] = A / 2) : _ === z && (R === q._posWRT0 ? (m = !0, v[r] = 1 === R ? z : z - v[l]) : G = .5), 0 > J ? (v[s] = I[s], v[p] = I[p], m = !0) : 0 < J ? G = .5 : (H[s] !== I[s] || H[p] != I[p]) && (.5 == G ? ((M = {})[s] = I[s], M[p] = I[p], S = function S() {
              T && Z.attr(P), Z.attr(M);
            }) : (v[s] = I[s], v[p] = I[p], m = !0, S && (V = function V() {
              Z.attr(M);
            }, S = i))), m && (N.push({ finalAttr: v, startEnd: { start: 0, end: .5 }, hookFn: V, slot: "plot" }), G = .5), S || (S = function S() {
              T && Z.attr(P);
            }), N.push({ effect: "linear", startEnd: { start: G, end: 1 }, finalAttr: { x: I.x, y: I.y, width: I.width, height: I.height }, callback: function callback() {
                (null === q.config.setValue || q.config.setValue === i) && this.hide();
              }, hookFn: S, slot: "plot" }), delete (L = Object.assign({}, I)).x, delete L.y, delete L.width, delete L.height, N.push({ finalAttr: L, effect: "linear", slot: "plot" }), q._plot_1End = v, q._plot_2Start = P, q._oldPosWRT0 = q._posWRT0, q._posWRT0 = R, N;
          }, "rect._disappearing": function rect_disappearing(t) {
            var i,
                a,
                s,
                p,
                d,
                h = c.getPixel(c.getAxisBase()) + (n.isBar ? -o : o),
                g = e.components.removeDataArr,
                u = g && g[t.index] || e.components.data[t.index],
                _ = u && u.graphics && u.graphics.element,
                x = u.oldPrevDataObj && u.oldPrevDataObj._plot_1End,
                A = [];if (_) return (p = f(t, u)) && A.push(p), c.config.isVertical || (r = "x", l = "width"), i = (a = (d = u._plot_1Start)[r]) + d[l] / 2 > h ? x ? x[r] + x[l] : a : x ? x[r] : h, (s = {})[r] = i, s[l] = 0, s.width = u._width, s.x = u._xPos, A.push({ startEnd: { start: 0, end: 1 > e.getFromEnv("numOfColumns") ? 1 : .5 }, finalAttr: s, slot: "plot" }), u._plot_1End = t.finalAttr, A;
          }, "plotLabel.appearing": [{ initialAttr: { opacity: 0 }, slot: "final" }], "plotLabel._disappearing": [{ hookFn: function hookFn() {
              this.hide();
            }, slot: "initial" }], "plotLabel.updating": [{ hookFn: function hookFn() {
              this.hide();
            }, slot: "initial" }, { hookFn: function hookFn() {
              this.show();
            }, initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "final" }], "group.appearing": function groupAppearing(t) {
            return "label-group" === t.attr.name ? [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: "final" }] : [{ initialAttr: { opacity: 1 }, finalAttr: { opacity: 1 }, slot: "final" }];
          }, "*": null };
      } };
  }, { "../lib/lib": 20 }], 12: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports._removePlots = void 0;var e = require("../lib/lib"),
        t = require("../lib/lib-graphics"),
        o = require("../../core/component-interface"),
        a = s(o),
        i = require("../dependency-manager"),
        r = require("../animation-rules/column-animation"),
        l = s(r),
        n = require("../schedular");function s(e) {
      return e && e.__esModule ? e : { default: e };
    }var g = void 0,
        p = void 0,
        c = "mouseOver",
        d = "mouseOut",
        h = "DataPlotRollOver",
        u = "DataPlotRollOut",
        m = e.hasTouch ? e.TOUCH_THRESHOLD_PIXELS : e.CLICK_THRESHOLD_PIXELS,
        f = e.regex.dropHash,
        v = "plotBorderColor",
        b = "plotGradientColor",
        x = "showShadow",
        k = "pointer",
        E = "eventArgs",
        C = e.preDefStr.DEFAULT,
        S = e.preDefStr.showHoverEffectStr,
        y = e.preDefStr.setRolloverAttrStr,
        P = e.preDefStr.setRolloutAttrStr,
        _ = Math,
        w = _.min,
        F = _.max,
        V = _.abs,
        A = { top: !0 },
        D = { right: !0 },
        T = { left: !0 },
        L = { bottom: !0 },
        I = _.ceil,
        N = _.round,
        R = function R() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = arguments[1];
      if ("function" == typeof t) {
        var _loop3 = function (_o2) {
          if (e.hasOwnProperty(_o2)) {
            let a = e[_o2];Array.isArray(a) ? a.forEach(e => t(e, _o2)) : e[_o2] && t(e[_o2], _o2);
          }
        };

        for (let _o2 in e) {
          _loop3(_o2);
        }
      }
    },
        O = function O(e, t, o, a, i) {
      var r = t.graphics,
          l = r && r.element,
          n = e.getFromEnv("animationManager"),
          s = l && l.getData();!0 !== s.draged && (l && 0 !== s.showHoverEffect && (n.setAnimationState(c), n.setAnimation({ el: l, label: "rect", component: i, attr: l.getData().setRolloverAttr })), !a && l && e.plotEventHandler(l, o, h));
    },
        M = function M(e, t, o, a, i) {
      var r = t.graphics,
          l = r && r.element,
          n = e.getFromEnv("animationManager"),
          s = l && l.getData();!0 !== s.draged && (l && 0 !== s.showHoverEffect && (n.setAnimationState(d), n.setAnimation({ el: l, label: "rect", component: i, attr: l.getData().setRolloutAttr })), !a && l && e.plotEventHandler(l, o, u));
    },
        G = function G(e, t, o) {
      return o.getFromEnv("animationManager").setAnimation({ el: "group", attr: { name: e }, container: t, state: "appearing", component: o, label: "group" });
    },
        H = function H() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var t = arguments[1];
      e.forEach(function (e) {
        return R(e && e.graphics, t);
      }), e.length = 0;
    };(0, i.addDep)({ name: "columnAnimation", type: "animationRule", extension: l.default });
    var B = function (_a$default6) {
      _inherits(B, _a$default6);

      function B() {
        _classCallCheck(this, B);

        var _this34 = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this));

        var e = _this34;e.components = {}, e.components.removeDataArr = [], e.__hideElem = function (t, o) {
          e._setRemoveAnim(t, "label" === o ? "plotLabel" : "rect");
        }, e.__removeElem = function (t, o) {
          e.__hideElem(t, o);
        }, e.config.primitiveType = "column";return _this34;
      }

      _createClass(B, [{
        key: "getType",
        value: function getType() {
          return "dataset";
        }
      }, {
        key: "getName",
        value: function getName() {
          return "column";
        }
      }, {
        key: "__setDefaultConfig",
        value: function __setDefaultConfig() {
          _get(B.prototype.__proto__ || Object.getPrototypeOf(B.prototype), "__setDefaultConfig", this).call(this);var e = this.config;e.showvalues = g, e.includeinlegend = 1, e.plotfillalpha = g, e.plotfillangle = g, e.ratio = g;
        }
      }, {
        key: "preConfigure",
        value: function preConfigure(e) {
          return !!e && (this.trimData(e), this.config.JSONData = e, void _get(B.prototype.__proto__ || Object.getPrototypeOf(B.prototype), "preConfigure", this).call(this, e));
        }
      }, {
        key: "setSkippingInfo",
        value: function setSkippingInfo(e) {
          this.addToEnv("skipInfo", e || { plotsPerBin: 1, drawOnlyMap: [], draw: [], hide: [], skippingApplied: !1, dragHashMap: [] });
        }
      }, {
        key: "getSkippingInfo",
        value: function getSkippingInfo() {
          return this.getFromEnv("skipInfo") || { plotsPerBin: 1, drawOnlyMap: [], draw: [], hide: [], skippingApplied: !1, dragHashMap: [] };
        }
      }, {
        key: "configure",
        value: function configure(e) {
          return !!e && void _get(B.prototype.__proto__ || Object.getPrototypeOf(B.prototype), "configure", this).call(this, e);
        }
      }, {
        key: "configureAttributes",
        value: function configureAttributes() {
          var e = this,
              t = e.getFromEnv("chart"),
              o = e.config;e.parseAttributes(), e._setConfigure(), e.getState("visible") && !1 === o.oldVisible && (o.appearing = !0), o.oldVisible = e.getState("visible"), e._realTimeConfigure && e._realTimeConfigure(), !1 !== t.config.hasLegend && t.config.showLegend && e._addLegend(), e.ErrorValueConfigure && e.ErrorValueConfigure(), e.config.YForStackUpdated = !1, e.setState("dirty", !0);
        }
      }, {
        key: "parseAttributes",
        value: function parseAttributes() {
          var t = void 0,
              o = void 0,
              a = void 0,
              i = this,
              r = i.getFromEnv("chart"),
              l = r.getChildren("yAxis")[0].config.isReverse,
              n = i.config,
              s = i.config.JSONData,
              g = r.config.singleseries,
              p = r.config,
              c = r.getFromEnv("dataSource").chart,
              d = i.getFromEnv("color-manager"),
              h = i.getJSONIndex(),
              u = n.plotColor = d.getPlotColor(h),
              m = (0, e.pluckNumber)(s.dashed, c.plotborderdashed),
              f = (0, e.pluckNumber)(c.useplotgradientcolor, 1),
              k = r.isBar,
              E = r.config.is3D,
              C = r.config.isdual;n.parentYAxis = C && "s" === (0, e.pluck)(s.parentyaxis && s.parentyaxis.toLowerCase(), "p") ? 1 : 0, n.maxValue = -1 / 0, n.minValue = 1 / 0, n.defaultPadding = { left: .5, right: .5 }, (0, e.parseConfiguration)(s, n, p, { data: !0 }), n.seriesname = (0, e.parseUnsafeString)(s.seriesname), n.showValues = (0, e.pluckNumber)(s.showvalues, c.showvalues, 1), n.showplotborder = (0, e.pluckNumber)(c.showplotborder, E ? 0 : 1), t = p.plotborderdashlen, o = p.plotborderdashgap, n.plotfillangle = (0, e.pluckNumber)(360 - c.plotfillangle, k ? 180 : l ? 90 : 270), n.plotfillalpha = a = (0, e.pluck)(s.alpha, c.plotfillalpha, e.HUNDREDSTRING), n.plotColor = u = (0, e.pluck)(s.color, u), n.legendSymbolColor = (0, e.getFirstColor)(n.plotColor), n.plotgradientcolor = (0, e.getDefinedColor)(c.plotgradientcolor, d.getColor(b)), f || (n.plotgradientcolor = ""), n.plotborderalpha = (0, e.pluck)(c.plotborderalpha, a, e.HUNDREDSTRING), n.plotbordercolor = (0, e.pluck)(c.plotbordercolor, E && !g ? "#ffffff" : d.getColor(v)), n.plotborderdashstyle = m ? (0, e.getDashStyle)(t, o, void 0) : "none", n.showShadow = E ? (0, e.pluckNumber)(c.showshadow, 1) : (0, e.pluckNumber)(c.showshadow, d.getColor(x)), n.definedGroupPadding = F((0, e.pluckNumber)(c.plotspacepercent), 0), n.includeinlegend = (0, e.pluckNumber)(s.includeinlegend, n.seriesname ? 1 : 0), i.setState("visible", 1 === (0, e.pluckNumber)(s.visible, !+s.initiallyhidden, 1)), !0 === i.getState("visible") ? i._conatinerHidden = !1 : i._containerHidden = !0, n.legendInteractivity = !1, i.setState("visible", 1 === (0, e.pluckNumber)(i.getState("visible"), n.JSONData.visible, !+n.JSONData.initiallyhidden, 1));
        }
      }, {
        key: "trimData",
        value: function trimData(e) {
          if (!this.components && this.components.data && this.components.data.length) return;var t = void 0,
              o = void 0,
              a = this,
              i = a.components,
              r = a.config,
              l = r && r.context,
              n = a.getFromEnv("chart").isRealTime,
              s = l && l.prevCatlen,
              g = a.getFromEnv("xAxis"),
              p = n ? 0 : g.getTicksLen(),
              c = s - p,
              d = i && i.data,
              h = d && d.length,
              u = e.data && e.data.length || 0,
              m = h - u;c > m ? (t = c, o = p) : (t = m, o = u), 0 < t && this.removeData(o, t, !1);
        }
      }, {
        key: "hidePlots",
        value: function hidePlots() {
          var e,
              t = this,
              o = t.components.data,
              a = t.getSkippingInfo(),
              i = a.hide,
              r = a.hideLabel;i.forEach(function (a) {
            (e = o[a]) && e.graphics && (R(e.graphics, t.__removeElem), e && (e.graphics = {}));
          }), r.forEach(function (a) {
            (e = o[a]) && e.graphics && (R(e.graphics, t.__removeElem), e && (e.graphics = {}));
          });
        }
      }, {
        key: "_setConfigure",
        value: function _setConfigure(e, t) {
          var o,
              a,
              i,
              r,
              l,
              s,
              p = this,
              c = p.getFromEnv("chart"),
              d = c.config,
              h = p.config,
              u = h.JSONData,
              f = e || u.data,
              v = p.getFromEnv("xAxis"),
              b = c.isRealTime,
              x = p.getFromEnv("dataSource").categories && p.getFromEnv("dataSource").categories[0] && p.getFromEnv("dataSource").categories[0].category,
              k = b ? x && Array.isArray(x) && x.filter(function (e) {
            return !e.vline;
          }).length || 0 : v.getTicksLen(),
              E = e && e.data.length,
              C = b ? E || k : E || Math.min(k, f && f.length),
              S = h.showplotborder,
              y = d.plotborderthickness,
              P = p.components.data,
              _ = d.isDrag,
              w = p.getSkippingInfo && p.getSkippingInfo(),
              F = w && w.draw || [],
              V = w && w.skippingApplied;for (d.dragTolerance = _ ? (S && 5 < y ? y / 2 + 1 : 5) + m : 0, P || (P = p.components.data = []), V && (C = F.length), l = 0; l < C; l++) {
            r = F[l] || l, e ? (o = e && e.data[r] || {}, t === g ? i = P[s = P.length - C + r] : i = P[s = t + r], a = s) : (i = P[r], o = f && f[r] || {}, a = r), i || (i = P[a] = {}), i.config || (i.config = {}, i.graphics = {}), p._plotConfigure(a, o, E), s && s++;
          }V && p.addJob("configureRestID", function () {
            p._configureRestData();
          }, n.priorityList.postRender);
        }
      }, {
        key: "_configureRestData",
        value: function _configureRestData() {
          var t,
              o,
              a,
              i,
              r,
              l = this,
              n = l.config,
              s = l.config.JSONData,
              p = s.data,
              c = l.getFromEnv("chart-attrib"),
              d = l.getFromEnv("xAxis").getTicksLen(),
              h = (l.getSkippingInfo && l.getSkippingInfo()).drawOnlyMap,
              u = l.components.data;for (u || (u = l.components.data = []), n.maxValue = -1 / 0, n.minValue = 1 / 0, i = 0; i < d; i++) {
            h[i] || (a = u[i], o = i, (t = p && p[i] || {}).tooltext !== g && (t.tooltext = (0, e.parseTooltext)(t.tooltext, [3], { label: t.label }, t, c, s)), a || (a = u[i] = {}), a.config || (u[i].config = {}), l._plotConfigure(o, t), r && r++);
          }
        }
      }, {
        key: "_plotConfigure",
        value: function _plotConfigure(o, a, i) {
          var r,
              l,
              n,
              s,
              p,
              c,
              d,
              h,
              u,
              m,
              f,
              v,
              b,
              x,
              k,
              E,
              C,
              S,
              y,
              P,
              _,
              V,
              A,
              D,
              T,
              L,
              I,
              N,
              R,
              O,
              M,
              G,
              H,
              B,
              W = this,
              J = W.getFromEnv("chart"),
              U = J.config,
              X = W.config,
              K = X.JSONData,
              Y = J.config.singleseries,
              j = W.getFromEnv("yAxis"),
              q = W.getFromEnv("xAxis"),
              z = W.components.data[o],
              Z = J.getFromEnv("dataSource").chart,
              Q = W.getFromEnv("color-manager"),
              $ = X.showplotborder,
              ee = X.plotColor,
              te = U.showtooltip,
              oe = U.yaxisname,
              ae = U.xaxisname,
              ie = U.tooltipsepchar,
              re = U.seriesnameintooltip,
              le = U.plotborderdashlen,
              ne = U.plotborderdashgap,
              se = U.plotborderthickness,
              ge = (0, e.pluckNumber)(U.useroundedges, 0),
              pe = U.plothovereffect,
              ce = X.plotfillangle,
              de = X.plotborderdashstyle,
              he = z.config,
              ue = J.isBar,
              me = J.config.is3D,
              fe = U.use3dlighting,
              ve = U.usedataplotcolorforlabels;a.tooltext !== g && (a.tooltext = (0, e.parseTooltext)(a.tooltext, [3], { label: a.label }, a, Z, K)), he.showValue = (0, e.pluckNumber)(a.showvalue, X.showValues), he.setValue = v = j.getCleanValue(a.value, (0, e.pluckNumber)(U.stack100percent)), he.setLink = (0, e.pluck)(a.link), he.toolTipValue = N = j.dataLabels(v), he.setDisplayValue = R = (0, e.parseUnsafeString)(a.displayvalue), he.displayValue = (0, e.pluck)(R, N), O = (0, e.pluckNumber)(a.dashed), M = (0, e.pluckNumber)(a.dashlen, le), G = ne = (0, e.pluckNumber)(a.dashgap, ne), null !== v && (X.maxValue = F(X.maxValue, v), X.minValue = w(X.minValue, v)), he.plotBorderDashStyle = f = 1 === O ? (0, e.getDashStyle)(M, G) : 0 === O ? "none" : de, Y ? (ee = Q.getPlotColor((0, e.pluckNumber)(o - i, o)), ee = (0, e.pluck)(a.color, ee), ve && q.updateTicksValues(o, { labelfontcolor: (0, t.convertColor)(ee) }), m = (0, e.pluck)(a.alpha, a.borderalpha, X.plotborderalpha, h).toString()) : (ee = (0, e.pluck)(a.color, X.plotColor), m = (0, e.pluck)(a.alpha, X.plotborderalpha, h).toString()), u = (0, e.pluck)(a.ratio, X.ratio), h = (0, e.pluck)(a.alpha, X.plotfillalpha), he.shadow = { opacity: X.showShadow ? h / 100 : 0 }, 0 > v && !ge && (c = X.plotfillangle, ce = ue ? 180 - ce : 360 - ce), he.colorArr = x = (0, t.getColumnColor)(ee + "," + X.plotgradientcolor, h, u, ce, ge, X.plotbordercolor, m, ue ? 1 : 0, !!me), he.originalPlotColor = ee, B = q.getLabel((0, e.pluckNumber)(o - i, o)), he.origLabel = H = (0, e.getValidValue)((0, e.parseUnsafeString)(B.label)), b = he.label = (0, e.getValidValue)((0, e.parseUnsafeString)(B.tooltext)) || H, 0 !== pe && (k = (0, e.pluck)(a.hovercolor, K.hovercolor, Z.plotfillhovercolor, Z.columnhovercolor, ee), E = (0, e.pluck)(a.hoveralpha, K.hoveralpha, Z.plotfillhoveralpha, Z.columnhoveralpha, h), !(C = (0, e.pluck)(a.hovergradientcolor, K.hovergradientcolor, Z.plothovergradientcolor, X.plotgradientcolor)) && (C = ""), S = (0, e.pluck)(a.hoverratio, K.hoverratio, Z.plothoverratio, u), y = (0, e.pluckNumber)(360 - a.hoverangle, 360 - K.hoverangle, 360 - Z.plothoverangle, ce), P = (0, e.pluck)(a.borderhovercolor, K.borderhovercolor, Z.plotborderhovercolor, X.plotbordercolor), _ = (0, e.pluck)(a.borderhoveralpha, K.borderhoveralpha, Z.plotborderhoveralpha, Z.plotfillhoveralpha, Z.columnhoveralpha, m, h), V = (0, e.pluckNumber)(a.borderhoverthickness, K.borderhoverthickness, Z.plotborderhoverthickness, X.showplotborder && se), A = a.borderhoverdashed || K.borderhoverdashed || Z.plotborderhoverdashed, D = (0, e.pluckNumber)(a.borderhoverdashgap, K.borderhoverdashgap, Z.plotborderhoverdashgap, le), T = (0, e.pluckNumber)(a.borderhoverdashlen, K.borderhoverdashlen, Z.plotborderhoverdashlen, ne), L = A === g ? f : +A ? (0, e.getDashStyle)(T, D) : "", (U.drawTrendRegion || 1 == pe && k === ee) && (k = (0, t.getLightColor)(k, 70)), I = (0, t.getColumnColor)(k + "," + C, E, S, y, ge, P, _.toString(), ue ? 1 : 0, !!me), he.setRolloutAttr = { fill: me ? [(0, e.toRaphaelColor)(x[0]), !fe] : (0, e.toRaphaelColor)(x[0]), stroke: $ ? (0, e.toRaphaelColor)(x[1]) : e.TRACKER_FILL, "stroke-width": se, "stroke-dasharray": f }, he.setRolloverAttr = { fill: me ? [(0, e.toRaphaelColor)(I[0]), !fe] : (0, e.toRaphaelColor)(I[0]), stroke: P ? (0, e.toRaphaelColor)(I[1]) : e.TRACKER_FILL, "stroke-width": V, "stroke-dasharray": L }), r = he.toolTipValue, he.origToolText = n = (0, e.getValidValue)((0, e.parseUnsafeString)((0, e.pluck)(a.tooltext, K.plottooltext, Z.plottooltext))), te ? null === r ? d = !1 : n === g ? (re && (s = (0, e.getFirstValue)(K && K.seriesname)), d = s ? s + ie : "", d += b ? b + ie : "") : (p = [1, 2, 3, 4, 5, 6, 7], l = { yaxisName: oe, xaxisName: ae, formattedValue: r, label: b }, d = (0, e.parseTooltext)(n, p, l, a, Z, K)) : d = !1, he.toolText = d, he.setTooltext = d, c && (ce = c), he._x = o, he._y = v;
        }
      }, {
        key: "updateYForStack",
        value: function updateYForStack() {
          var t,
              o,
              a,
              i,
              r,
              l,
              n = this,
              s = n.config.JSONData,
              p = n.getFromEnv("chart-attrib"),
              c = n.getFromEnv("chartConfig"),
              d = n.getFromEnv("xAxis").getTicksLen(),
              h = n.components.data,
              u = n.getFromEnv("stackValues"),
              m = n.getSkippingInfo && n.getSkippingInfo(),
              f = m && m.skippingApplied,
              v = m && m.draw || [],
              b = v && v.length;for (f && (d = b), i = 0; i < d; i++) {
            o = (t = h[a = v[i] || i]) && t.config, t !== g && (r = (0, e.getValidValue)((0, e.parseUnsafeString)((0, e.pluck)(o.origToolText, s.plottooltext, p.plottooltext))), l = u[a] && u[a].positive + u[a].negative || 1, o._b = n._parseValues(a, o._b, l, r), c.stack100percent && (o._y = o.value + o._b));
          }
        }
      }, {
        key: "_parseValues",
        value: function _parseValues(t, o, a, i) {
          var r,
              l,
              n = this,
              s = n.getFromEnv("chartConfig"),
              g = n.components.data[t].config,
              p = (0, e.pluckNumber)(s.showpercentvalues),
              c = (0, e.pluckNumber)(s.showpercentintooltip),
              d = n.getState("visible"),
              h = g.setValue,
              u = (0, e.pluckNumber)(s.stack100percent),
              m = n.getFromEnv("number-formatter"),
              f = n.getFromEnv("yAxis"),
              v = g.setDisplayValue;return l = (d && h || 0) / a * 100, r = m.percentValue(l), u && (g.value = l, o = (o || 0) / a * 100), c && (g.toolTipValue = r), p && !v && (g.displayValue = r), i && (g.toolText = (0, e.parseTooltext)(g.setTooltext, [14, 24, 25, 112], { percentValue: r, sum: f.dataLabels(a), unformattedSum: a })), o;
        }
      }, {
        key: "_addLegend",
        value: function _addLegend() {
          var o,
              a,
              i,
              r = this,
              l = r.getFromEnv("chart").isBar,
              n = r.getFromEnv("chart-attrib"),
              s = r.config,
              g = (0, e.getFirstColor)(s.legendSymbolColor),
              p = r.getFromEnv("legend"),
              c = (0, e.pluckNumber)(n.use3dlighting, n.useplotgradientcolor, 1),
              d = (0, t.getLightColor)(g, 60).replace(f, e.HASHSTRING);s.includeinlegend ? (c ? o = { FCcolor: { color: g + "," + g + "," + (0, t.getLightColor)(g, 40) + "," + g + "," + g, ratio: "0,30,30,30,10", angle: l ? 0 : 270, alpha: "100,100,100,100,100" } } : o = { FCcolor: { color: g, angle: l ? 0 : 270, ratio: "0", alpha: "100" } }, i = p.getItem(r.config.legendItemId), a = { type: r.getName(), index: r.getJSONIndex(), label: (0, e.getFirstValue)(r.config.JSONData.seriesname) }, !i && (r.config.legendItemId = p.createItem(r), i = p.getItem(r.config.legendItemId), r.addExtEventListener("click", function () {
            i.itemClickFn();
          }, i)), i.configure(a), i.setStateCosmetics("default", { symbol: { fill: (0, e.toRaphaelColor)(o), rawFillColor: g, stroke: (0, e.toRaphaelColor)(d) } }), r.getState("visible") ? i.removeLegendState("hidden") : i.setLegendState("hidden")) : r.config.legendItemId && p.disposeItem(r.config.legendItemId);
        }
      }, {
        key: "legendInteractivity",
        value: function legendInteractivity(e) {
          var t = this,
              o = e.getLinkedParent().getFromEnv("chart"),
              a = t.getState("visible"),
              i = t.config;o.getFromEnv("animationManager").setAnimationState("legendInteraction"), i.legendInteractivity = !0, a ? t.hide() : t.show(), i.drawnEvtListenerAttached || (i.drawnEvtListenerAttached = !0, t.addEventListener("drawn", function () {
            i.legendInteractivity = !1;
          }));
        }
      }, {
        key: "createPinElem",
        value: function createPinElem() {
          var e,
              t,
              o,
              a = this,
              i = a.getFromEnv("chart"),
              r = arguments[1].group,
              l = a.components.data,
              n = a.graphics.pinElems || (a.graphics.pinElems = []),
              s = a.getLinkedParent().getChildContainer().columnVcanvasGroup;for (e = n.length - 1; 0 <= e; e--) {
            n[e].remove(), n.pop();
          }if (a.getState("visible")) for (e = a.config.scrollMinVal; e < a.config.scrollMaxVal; e++) {
            (o = l[e]) && o.graphics && (t = o.graphics.element.clone().attr({ transform: ["T", -(i.config._visx + V(s.transform()[0][1])), -i.config.canvasBottom] }), r.appendChild(t), n.push(t));
          }
        }
      }, {
        key: "_checkPointerOverColumn",
        value: function _checkPointerOverColumn(e, t, o) {
          var a,
              i,
              r,
              l,
              n,
              s,
              p,
              c,
              d,
              h = this,
              u = h.getFromEnv("chart").config,
              f = u.plotborderthickness,
              v = u.showplotborder,
              b = h.components.data,
              x = b && b.length,
              k = 0,
              E = 0,
              C = u.dragTolerance || 0,
              S = (h.getSkippingInfo && h.getSkippingInfo()).plotsPerBin;for (p = d = (d = (c = (I(e / S) - 1) * S + 1) + S - 1) < x ? d : x; p >= c; p--) {
            if (!(a = b[p])) return;if (a._height < m && (k = m), a._width < m && (E = m), (a._xPos || a._yPos) && (i = a.config.setValue, v && f !== g ? s = f / 2 : f = s = 0, null !== i && (r = t - a._xPos + s, l = o - a._yPos + s + (0 <= i ? C : 0), n = r >= -E / 2 && r <= (E || a._width) + f && l >= -k / 2 && l <= (k || a._height) + f + (0 > i ? 2 * C : C)))) return { pointIndex: p, hovered: n, pointObj: b[p] };
          }
        }
      }, {
        key: "_getHoveredPlot",
        value: function _getHoveredPlot(e, t) {
          var o,
              a,
              i = this,
              r = i.getFromEnv("chart").isBar,
              l = i.getFromEnv("xAxis");return e += l.getTranslation(), o = l.getValue(r ? t : e), 0 < (a = Math.round(o)) - o ? i._checkPointerOverColumn(a, e, t) || i._checkPointerOverColumn(a - 1, e, t) : i._checkPointerOverColumn(a + 1, e, t) || i._checkPointerOverColumn(a, e, t);
        }
      }, {
        key: "getPlotInCategoryAt",
        value: function getPlotInCategoryAt() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var o = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              l = void 0,
              n = this.components.data,
              s = this.getFromEnv("xAxis"),
              g = this.getFromEnv("yAxis"),
              p = s.getTranslation() || 0,
              c = g.getTranslation() || 0,
              d = this.getState("visible");if ("category" === s.getName() && s.config.hasCategory) a = s;else {
            if ("category" !== g.getName() || !g.config.hasCategory) return !1;a = g;
          }return null != (i = a.config.isVertical) && (o = n[r = Math.round(a.getValue(i ? t + c : e + p))], l = this._getHoveredPlot(e, t), d && l ? l : !(!d || !o) && { pointIndex: o._index, hovered: !1, pointObj: o });
        }
      }, {
        key: "_decideTooltipType",
        value: function _decideTooltipType(e, t) {
          var o = this,
              a = o.getFromEnv("chart").config.drawTrendRegion,
              i = o.components,
              r = o.getFromEnv("toolTipController"),
              l = i.data[e],
              n = l && (l.config.finalTooltext || l.config.toolText),
              s = o.config.currentToolTip,
              g = t.originalEvent;n && !a && (s ? r.draw(g, n, s) : s = o.config.currentToolTip = r.draw(g, n));
        }
      }, {
        key: "_firePlotEvent",
        value: function _firePlotEvent(e, t, o) {
          var a,
              i = this,
              r = i.getFromEnv("chart"),
              l = i.components,
              n = i.getFromEnv("toolTipController"),
              s = l.data[t],
              p = s.graphics && s.graphics.element,
              c = i.config.currentToolTip;p && (a = s.config.setLink, "mouseover" === e ? (i._decideTooltipType(t, o), O(r, s, o, g, this), a && (p.node.style.cursor = k)) : "mouseout" === e ? (n.hide(c), M(r, s, o, g, this), a && (p.node.style.cursor = C)) : "click" === e ? r.plotEventHandler(p, o) : "mousemove" === e && i._decideTooltipType(t, o));
        }
      }, {
        key: "createContainer",
        value: function createContainer() {
          var e,
              t,
              o,
              a,
              i = this,
              r = i.getType(),
              l = i.getFromEnv("chart"),
              n = i.getLinkedParent(),
              s = i.config.primitiveType || r;n.getChildContainer(s + "VcanvasGroup") || (s = "default"), e = n.getChildContainer(s + "VcanvasGroup"), a = n.getChildContainer(s + "ShadowVcanvasGroup"), t = n.getChildContainer("commonElemGroup") || e, o = n.getChildContainer("anchorGroup") || e, i.getContainer("shadowGroup") || i.addContainer("shadowGroup", G("shadow-group", a, i)), i.getContainer("errorShadowGroup") || i.addContainer("errorShadowGroup", G("error-shadow-group", a, i)), i.getContainer("commonElemsGroup") || i.addContainer("commonElemsGroup", G("common-elems-group", t, i)), i.getContainer("plotGroup") || i.addContainer("plotGroup", G("plot-group", o, i)), i.getContainer("errorPlotGroup") || i.addContainer("errorPlotGroup", G("error-plot-group", e, i)), l.hasAnchor && i.getContainer("errorPlotGroup").insertBefore(i.getContainer("plotGroup")), i.getContainer("labelGroup") || i.addContainer("labelGroup", G("label-group", n.getChildContainer("vcanvasLabelGroup"), i).attr("class", "fusioncharts-datalabels"));
        }
      }, {
        key: "createCoordinates",
        value: function createCoordinates() {
          var e,
              t,
              o,
              a,
              i,
              r,
              l,
              n,
              s,
              p,
              c = this,
              d = c.components.data,
              h = c.getFromEnv("chart"),
              u = h.isBar,
              m = c.getFromEnv("yAxis"),
              f = c.getFromEnv("xAxis"),
              v = m.getAxisBase(),
              b = m.getPixel(v),
              x = f.config.isVertical,
              k = h.config.xDepth || 0,
              E = h.config.yDepth || 0,
              C = d.length,
              S = c.components,
              y = c.getLinkedParent(),
              P = y.getstackConf && y.getstackConf(),
              _ = S.data,
              w = c.getSkippingInfo && c.getSkippingInfo(),
              F = w && w.skippingApplied,
              V = w && w.draw || [],
              A = V && V.length;for (u || (k = -k), u && (E = -E), F && (C = A), i = 0; i < C; i++) {
            t = (e = _[a = V[i] || i]) && e.config, e !== g && (o = t._b, s = f.getPixel(P && P[a] && P[a].x || t._x), r = (isFinite(s) ? s : 0) + k, p = m.getPixel(t._y), l = (isFinite(p) ? p : 0) + E, n = (o ? m.getPixel(o) : b) + E, x ? (t._Px = l, t._Py = r, t._Pby = r, t._Pbx = n) : (t._Px = r, t._Py = l, t._Pby = n, t._Pbx = r), c.getLineShift && (t._Py += c.getLineShift("y")));
          }
        }
      }, {
        key: "setContainerVisibility",
        value: function setContainerVisibility(e) {
          var t,
              o = this,
              a = o.getContainer();for (t in a) {
            a.hasOwnProperty(t) && (!1 !== o.getState("visible") || !1 !== o._conatinerHidden && o._conatinerHidden !== g || e ? (a[t].show(), o._conatinerHidden = !1) : (a[t].hide(), o._conatinerHidden = !0));
          }
        }
      }, {
        key: "plotAnimManager",
        value: function plotAnimManager(e, t, o, a) {
          var i,
              r,
              l,
              n,
              s,
              g,
              c = this,
              d = c.getFromEnv("chart"),
              h = d.getFromEnv("animationManager"),
              u = d.config.is3D,
              m = d.config,
              f = c.getState("visible"),
              v = t.x,
              b = c.getFromEnv("plotGroup3d");p = "updating", g = 0 > ((l = e && e.config) && l.setValue), u ? s = (r = g ? b.negativeGroupArray : b.positiveGroupAarray)[d.isBar ? r.length - 1 - o : o] : s = c.getContainer("plotGroup"), i = e.graphics.element, f ? !i && (p = "appearing") : p = "disappearing", n = { el: i || (u ? "cubepath" : "rect"), container: s, attr: f && t, doNotRemove: !0, index: o, length: a, component: c, label: "rect" }, f || (n.callback = function () {
            this.hide();
          }), e.graphics.element = i = h.setAnimation(n), u && (i.appendTo(s), (m.isstacked && g || !m.isstacked && d.isBar) && i.toBack()), null === e.config.setValue ? (i.remove(), delete e.graphics.element) : c.getState("visible") && i.show(), l._oldPx = l._Px, l._oldX = v, f && (e.oldPrevDataObj = e.prevDataObj);
        }
      }, {
        key: "flushOnScroll",
        value: function flushOnScroll(e, t) {
          var o = void 0,
              a = this,
              i = a.components.data;for (var _r10 = e; _r10 <= t - 1; _r10++) {
            (o = i[_r10]) && o.graphics && (R(o.graphics, a.__removeElem), o.graphics = {});
          }
        }
      }, {
        key: "removingDraw",
        value: function removingDraw() {
          var e = this;e.components.data.forEach(function (t) {
            R(t.graphics, e.__removeElem), delete t.graphics;
          }), _get(B.prototype.__proto__ || Object.getPrototypeOf(B.prototype), "removingDraw", this).call(this);
        }
      }, {
        key: "_contextChanged",
        value: function _contextChanged() {
          var e;this.config.context || (this.config.context = {});var t = void 0,
              o = this,
              a = o.config.context,
              i = a.shift,
              r = o.getFromEnv("xAxis"),
              l = o.getFromEnv("yAxis"),
              n = a.axisLimit,
              s = !1,
              g = { yAxis: { limit: l.getVisibleConfig() }, xAxis: { limit: r.getVisibleConfig() } };return g.yAxis.limitPixel = { min: l.getPixel(g.yAxis.limit.minValue), max: l.getPixel(g.yAxis.limit.maxValue) }, g.xAxis.limitPixel = { min: r.getPixel(g.xAxis.limit.minValue), max: r.getPixel(g.xAxis.limit.maxValue) }, n !== (t = JSON.stringify(g)) && (a.axisLimit = t, s = !0), i !== o.getFromEnv("shift") && (a.shift = o.getFromEnv("shift"), s = !0), a.prevColNum !== o.getFromEnv("numOfColumns") && (a.prevColNum = o.getFromEnv("numOfColumns"), s = !0), r.getProcessLen ? e = r.getProcessLen() : r.getTicksLen && (e = r.getTicksLen()), a.prevCatlen !== e && (a.prevCatlen = e, s = !0), !!this.getFromEnv("chart").isRealTime || s;
        }
      }, {
        key: "calculateScrollRange",
        value: function calculateScrollRange() {
          var e = void 0,
              t = this,
              o = t.config,
              a = t.getFromEnv("xAxis"),
              i = a.getTicksLen(),
              r = t.getSkippingInfo && t.getSkippingInfo() || {},
              l = r.skippingApplied,
              n = r.draw || [],
              s = r.labelDraw || [],
              g = n.length;e = l ? g - 1 : i, o.scrollMinVal = F(N(a.getVisibleConfig().minValue), 0) - 1, o.scrollMaxVal = w(N(a.getVisibleConfig().maxValue) + 1, e) + 1, e = l ? s.length - 1 : i, o.scrollMinValForLabel = F(N(a.getVisibleConfig().minValue), 0) - 1, o.scrollMaxValForLabel = w(N(a.getVisibleConfig().maxValue) + 1, e) + 1;
        }
      }, {
        key: "drawPlots",
        value: function drawPlots() {
          var e,
              t,
              o,
              a,
              i,
              r,
              l,
              n,
              s,
              g,
              p = this,
              c = p.getFromEnv("chart"),
              d = p.config,
              h = c.config.plothovereffect,
              u = p.components.data,
              m = p.getContainer("shadowGroup"),
              f = d._oldStartIndex,
              v = d._oldEndIndex,
              b = p.getSkippingInfo && p.getSkippingInfo(),
              x = b && b.draw;for (n = d.scrollMinVal, s = d.scrollMaxVal, n > f && p.flushOnScroll(f, n > v ? v : n), s < v && p.flushOnScroll(s < f ? f : s, v), d._oldStartIndex = n, d._oldEndIndex = s, t = n, g = s - 1; t < s; t++, g--) {
            (o = u[e = x[t] || t]) && (l = (i = o.config).props.element.attr, p.plotAnimManager(o, l, e, s), r = o.trackerConfig, a = o.graphics.element) && (a.shadow(i.shadow, m).data("BBox", void 0), c.config.enablemousetracking && a.data(E, r.eventArgs).data(S, h).data(y, i.setRolloverAttr || {}).data(P, i.setRolloutAttr || {}));
          }d.appearing && (d.appearing = !1);
        }
      }, {
        key: "setColumnPosition",
        value: function setColumnPosition() {
          var t = void 0,
              o = void 0,
              a = this;if ((t = a.getFromEnv("plotWidth")) === g) {
            var _o3 = void 0,
                _i9 = void 0,
                _r11 = void 0,
                _l5 = void 0,
                _n11 = a.getFromEnv("xAxis"),
                _s7 = this.getFromEnv("chart-attrib"),
                _g2 = a.getSkippingInfo().plotsPerBin,
                _p = F((0, e.pluckNumber)(_s7.plotspacepercent), 0),
                _c2 = F((0, e.pluckNumber)(_p, 20) % 100, 0),
                _d = 1 === _g2 ? _c2 / 200 : 0,
                _h = _n11.getPixel(0),
                _u = _n11.getPixel(_g2),
                _m = a.getFromEnv("chart"),
                _f = _m.isBar ? _m.config.maxBarHeight : _m.config.maxColWidth,
                _v = V(_u - _h),
                _b = !0;t = (_o3 = (1 - .01 * _p) * _v || w(_v * (1 - 2 * _d), 1 * _f)) / 1, (_r11 = _u - (_l5 = _o3 / 2)) - ((_i9 = _h - _l5) + _o3) < 4 && (_b = !1), 0 === _c2 && (_b = !0), a.addToEnv("isCrisp", _b);
          }a.addToEnv("columnWidth", t), o = a.getFromEnv("shift") || 0, a.addToEnv("columnXShift", o - a.getFromEnv("columnWidth") / 2);
        }
      }, {
        key: "parsePlotAttributes",
        value: function parsePlotAttributes(t, o) {
          var a,
              i,
              r,
              l,
              n,
              s,
              g,
              p,
              c,
              d,
              h,
              u,
              f,
              v,
              b,
              x,
              E,
              C,
              S,
              y,
              P,
              _,
              F,
              I,
              N,
              R = this,
              O = R.config,
              M = R.config.JSONData,
              G = R.getFromEnv("chart"),
              H = G.getFromEnv("dataSource").chart,
              B = G.config.isstacked,
              W = R.config,
              J = R.groupManager,
              U = R.getJSONIndex(),
              X = o,
              K = R.getState("visible"),
              Y = G.config,
              j = G.config.is3D,
              q = G.isBar,
              z = Y.xDepth || 0,
              Z = Y.yDepth || 0,
              Q = R.getFromEnv("yAxis"),
              $ = R.getFromEnv("xAxis"),
              ee = Y.showtooltip,
              te = !1 !== R.getState("visible"),
              oe = R.components.data,
              ae = t.config,
              ie = Q.getAxisBase(),
              re = Q.yBasePos = Q.getPixel(ie),
              le = (0, e.pluckNumber)(W.plotborderthickness, Y.plotborderthickness),
              ne = (0, e.pluckNumber)(Y.useroundedges, 0),
              se = W.use3dlighting,
              ge = w(O.yAxisMinPixel, O.yAxisMaxPixel),
              pe = J && J.stackConf,
              ce = R.getFromEnv("columnXShift"),
              de = G.config.viewPortConfig,
              he = de.x,
              ue = de.scaleX,
              me = (0, e.pluckNumber)(Y.showplotborder);f = ae.setLink, x = ae.colorArr || [], $.config.isVertical ? (p = R.getFromEnv("columnWidth"), g = ce) : (n = R.getFromEnv("columnWidth"), s = ce), t.graphics || (oe[X].graphics = {}), b = ae.displayValue, te || (ae._Py = ae._Pby), y = w(ae._Px, ae._Pbx) + (s || 0) + he * ue, P = w(ae._Py, ae._Pby) + (g || 0), pe && (y -= n / 2), _ = n || V(ae._Px - ae._Pbx), F = p || V(ae._Py - ae._Pby), a = q ? 0 < ae._Px - ae._Pbx ? D : T : 0 < ae._Py - ae._Pby ? L : A, u = (0, e.getValidValue)((0, e.parseUnsafeString)((0, e.pluck)(ae.origToolText, M.plottooltext, H.plottooltext))), R.fineTunePlotDimension && (y = (N = R.fineTunePlotDimension(y, P, F, _, X)).xPos, P = N.yPos, _ = N.width, F = N.height), i = y, r = P, c = _, d = F, l = $.getPixel(1) - $.getPixel(0) - (q ? d : c), isFinite(d) || (d = 0), K && (!(5 > l && 5 > R.getFromEnv("columnWidth")) && (C = (0, e.crispBound)(y, P, c, d, le, a, B)), C ? (i = C.x, r = C.y, le = C["stroke-width"], c = C.width, d = C.height || 1) : (i = y, r = P), $.config.isVertical ? i === ge && (i -= le, c += le) : r + d === ge ? d += le : r === ge && (r -= le, d += le), ae.setRolloutAttr && (ae.setRolloutAttr["stroke-width"] = le)), h = ae.finalTooltext = !1 === ae.toolText ? "" : ae.toolText + (u ? "" : ae.toolTipValue), E = ae.plotBorderDashStyle, (S = t.trackerConfig = {}).eventArgs = { index: X, link: f, value: ae.setValue, displayValue: b, categoryLabel: ae.origLabel, toolText: h, id: "", datasetIndex: U, datasetName: M.seriesname, visible: K }, I = re === r + 0, ae.props = { element: { attr: { x: i || 0, width: c || 0, height: d || 0, y: r || 0, r: ne, fill: (0, e.toRaphaelColor)(x[0]) || "", stroke: me ? (0, e.toRaphaelColor)(x[1]) || "" : e.TRACKER_FILL, "stroke-width": me ? le : 0, "stroke-dasharray": E, "stroke-linejoin": "miter", visibility: K, cursor: f ? k : "" } } }, j && (ae.props.element.attr.noGradient = !se, ae.props.element.attr.xDepth = z, ae.props.element.attr.yDepth = Z), t._xPos = i + z, t._width = c, t._yPos = r - Z, t._height = d, t._index = X, t._plotBorderThickness = le, (f || ee) && (d < m && (r -= (m - d) / 2, d = m), S.attr = { x: i, y: r, width: c, height: d, r: ne, cursor: f ? k : "", stroke: e.TRACKER_FILL, "stroke-width": me ? le : 0, fill: e.TRACKER_FILL, visibility: K }), ae.oldValue = v, t._oldYBaseTouched = I;
        }
      }, {
        key: "parseLabelAttributes",
        value: function parseLabelAttributes(t) {
          var o,
              a,
              i,
              r,
              l,
              n,
              s,
              p,
              c,
              d,
              h,
              u,
              m = this,
              f = m.getFromEnv("chart"),
              v = f.config,
              b = f.getFromEnv("smartLabel"),
              x = f.config.dataLabelStyle,
              k = m.config.legendInteractivity,
              E = m.getState("visible"),
              C = v.rotatevalues ? 270 : 0;return c = (d = t && t.config) && d.setValue, t === g || c === g || null === c || !0 === d.labelSkip ? (d && delete d.labelSkip, void ((u = t && t.graphics) && u.label && u.label.hide())) : (r = t.graphics) ? (s = t._yPos, p = t._xPos, a = d.displayValue, d.showValue && null !== c ? ((!k || !d._state) && (i = b.getOriSize(a), d._state = C ? { labelWidth: i.height, labelHeight: i.width } : { labelWidth: i.width, labelHeight: i.height }), n = (h = m._getValuePosition({ labelWidth: d._state.labelWidth, labelHeight: d._state.labelHeight, width: t._width, height: t._height, yPos: s, xPos: p, value: c })).textX, l = h.textY, !d.props && (d.props = {}), d.props.label = { attr: { x: n, y: l, text: a, "text-bound": [x.backgroundColor, x.borderColor || e.TRACKER_FILL, x.borderThickness, x.borderPadding, x.borderRadius, x.borderDash], opacity: E ? 1 : 0 } }, o = d.props.label.attr, void (!k && (o["line-height"] = x.lineHeight, o.fill = x.color))) : void (r.label && (r.label.attr({ "text-bound": [] }), r.label.hide()))) : void 0;
        }
      }, {
        key: "allocatePosition",
        value: function allocatePosition() {
          var e,
              t,
              o,
              a,
              i,
              r,
              l,
              n,
              s = this,
              g = s.getFromEnv("chart"),
              p = g.config,
              c = p.showpercentvalues,
              d = s.config,
              h = s.components.data.length,
              u = s.getFromEnv("yAxis"),
              m = s.components.data,
              f = p.isstacked,
              v = +p.stack100percent,
              b = s.getSkippingInfo && s.getSkippingInfo(),
              x = b && b.draw;for (s.deleteFromEnv("columnWidth"), s.setColumnPosition(), s.calculateScrollRange(), f && (v || c) && s.updateYForStack(), s.createCoordinates(), a = u.getLimit(), l = u.getPixel(a.max), n = u.getPixel(a.min), i = d.scrollMinVal, r = d.scrollMaxVal, l > n ? (d.yAxisMaxPixel = l, d.yAxisMinPixel = n) : (d.yAxisMaxPixel = n, d.yAxisMinPixel = l), t = 0; t < h; t++) {
            e = x[t] || t, (!g.hasScroll || !(e < i || e > r)) && (o = m[e]) && (s.parsePlotAttributes(o, e), s.parseLabelAttributes(o));
          }
        }
      }, {
        key: "draw",
        value: function draw() {
          var e,
              t,
              o = this,
              a = o.config,
              i = o.getState("visible"),
              r = o.getFromEnv("xAxis"),
              l = r.getPixel(0),
              s = r.getPixel(1),
              g = o.getFromEnv("groupMaxWidth"),
              p = o.getFromEnv("chart").config.xDepth || 0,
              c = o.getFromEnv("yAxis"),
              d = a.drawn,
              h = c.getLimit(),
              u = h.max,
              m = h.min,
              f = o._contextChanged(),
              v = (o.getSkippingInfo && o.getSkippingInfo() || {}).skippingApplied;g || (g = V(s - l), o.addToEnv("groupMaxWidth", g)), (o.getState("removed") || o.getState("dirty") || f && i) && (!d && o.createContainer(), o.setContainerVisibility(!0), v && o.hidePlots(), o.drawPlots(), o.drawCommonElements && !o.config.skipCommonElements && o.drawCommonElements(), e = a.scrollMinValForLabel, t = a.scrollMaxValForLabel, a.drawn ? o.drawLabel(e, t) : o.addJob("labelDrawID", function () {
            o.drawLabel(e, t);
          }, n.priorityList.label), a.drawn = !0, o.removePlots(), a.oldGroupMaxWidth = g, a.oldDataIsPositiveNegative = 0 < u && 0 > m, a.oldZeroAxisPos = c.getPixel(c.getAxisBase()) + p, o.drawErrorValue && o.drawErrorValue(), a.prevVisible = i, a.catDiff = 0);
        }
      }, {
        key: "show",
        value: function show() {
          var e = this,
              t = e.getLinkedParent(),
              o = e.getFromEnv("legend");o && o.getItem(e.config.legendItemId) && o.getItem(e.config.legendItemId).removeLegendState("hidden"), e.setState("visible", !0), e.config.appearing = !0, e._conatinerHidden = !1, e.setState("dirty", !0), t.childChanged(), e.config.appearing = !1, e.asyncDraw();
        }
      }, {
        key: "hide",
        value: function hide() {
          var e = this,
              t = e.getLinkedParent(),
              o = e.getFromEnv("legend");o && o.getItem(e.config.legendItemId) && o.getItem(e.config.legendItemId).setLegendState("hidden"), e.setState("dirty", !0), e.setState("visible", !1), t.childChanged(), e.asyncDraw();
        }
      }, {
        key: "drawLabel",
        value: function drawLabel(t, o) {
          var a,
              i,
              r,
              l,
              n,
              s,
              c,
              d,
              h,
              u,
              m,
              f,
              v = this,
              b = v.getFromEnv("chart"),
              x = v.getFromEnv("animationManager"),
              k = b.config,
              E = v.getFromEnv("xAxis"),
              C = v.getFromEnv("paper"),
              S = b.getFromEnv("smartLabel"),
              y = b.config.dataLabelStyle,
              P = v.config,
              _ = E.getTicksLen(),
              w = v.components,
              F = w.data,
              V = w.pool,
              A = k.rotatevalues ? 270 : 0,
              D = P.labelDrawn,
              T = v.getSkippingInfo && v.getSkippingInfo(),
              L = T && T.skippingApplied,
              I = T && T.labelDraw || [],
              N = I.length,
              R = (0, e.pluckNumber)(t, 0),
              O = (0, e.pluckNumber)(o, L ? N : _),
              M = N === Math.abs(O - (R + 1)),
              G = function G(e) {
            return function () {
              "disappearing" === e && (this.attr({ "text-bound": [] }), this.hide());
            };
          };for ((f = v.getContainer("labelGroup")).css({ fontFamily: y.fontFamily, fontSize: y.fontSize, fontWeight: y.fontWeight, fontStyle: y.fontStyle }), f.show(), S.useEllipsesOnOverflow(b.config.useEllipsesWhenOverflow), S.setStyle(y), l = R; l < O; l++) {
            if (c = (d = (a = F[r = L && M ? I[l] : l]) && a.config) && d.setValue, a !== g && c !== g && null !== c && !0 !== d.labelSkip) {
              if (n = a.graphics) {
                if (!d.showValue || null === c) {
                  n.label && (n.label.attr({ "text-bound": [] }), n.label.hide());continue;
                }i = d.props.label.attr, s = a._xPos, !n.label && D && b.isRealTime && ((h = (0, e.extend2)({}, i)).x = i.x - s + (a._newXPos || 0), h.transform = C.getSuggestiveRotation(A, h.x, i.y), V && V.label[0] && (n.label = V.label[0], V.label.splice(0, 1))), i.transform = C.getSuggestiveRotation(A, i.x, i.y), !(u = n.label) && V && V.label[0] && (u = n.label = V.label[0], V.label.splice(0, 1)), (u = x.setAnimation({ el: n.label || "text", attr: i, component: v, label: "plotLabel", index: r, container: f, callback: G(p) })) && u.show(), n.label || (n.label = v.addGraphicalElement("plotLabel", u, !0));
              }
            } else d && delete d.labelSkip, (m = a && a.graphics) && m.label && m.label.hide();
          }P.labelDrawn = !0;
        }
      }, {
        key: "_getValuePosition",
        value: function _getValuePosition(t) {
          var o,
              a,
              i,
              r,
              l,
              n,
              s,
              g,
              p,
              c = this.getFromEnv("chart"),
              d = c.getChildren(),
              h = c.config,
              u = d.yAxis[0],
              m = h.xDepth || 0,
              f = h.yDepth || 0,
              v = h.canvasTop,
              b = h.canvasHeight + f,
              x = t.yPos,
              k = c.config.is3D,
              E = c.config.isstacked,
              C = h.valuepadding + 2,
              S = t.height,
              y = t.width,
              P = h.placevaluesinside,
              _ = t.labelHeight,
              V = u.getAxisConfig("isReverse"),
              A = t.value;return V || (g = !(0 > A)), n = p = _ + C, r = S, i = x - (s = .5 * p + C), a = t.xPos + .5 * y, (l = (0, e.pluck)(g, 0 > A)) ? (o = v + b - (x + S + f), i = x) : o = x - v, E ? (i = w(v + b - .5 * n, i = x + .5 * S + (f || 0)), i = F(v + .5 * n, i), a -= m) : P ? r >= n ? (i = x + (l ? S - s : s), k && (a -= m, i += f)) : o >= n ? (i = x + (l ? S + s : -s), k && l && (a -= m, i += f)) : (i = x + (l ? S - s : s), k && (a -= m, i += f)) : o >= n ? (i = x + (l ? S + s : -s), k && (l ? (a -= m, i += f) : a -= m / 2)) : (i = x + (l ? S - s : s), k && (a -= m, i += f)), { textX: a, textY: i };
        }
      }, {
        key: "getDataLimits",
        value: function getDataLimits() {
          return { max: this.config.maxValue, min: this.config.minValue };
        }
      }, {
        key: "addData",
        value: function addData(e, t, o) {
          var a,
              i = this,
              r = i.components,
              l = r.data,
              n = e.data.length;for (r.addDataArr = e.data, 0 === t ? i.startPosition = !0 : (t + n === l.length || t === g) && (i.startPosition = !1), a = 0; a < n; a++) {
            t === g ? l.push({ config: {} }) : l.splice(t + a, 0, { config: {} });
          }i._setConfigure(e, t), o && i.asyncDraw();
        }
      }, {
        key: "removeData",
        value: function removeData(e, t, o) {
          var a,
              i,
              r = this,
              l = r.getFromEnv("chart"),
              n = r.components,
              s = n.data,
              p = n.removeDataArr || (n.removeDataArr = []);for (t === g && (t = 1), (e = e || 0) + t !== s.length && l.isRealTime ? (0 === e || e === g) && (r.endPosition = !1) : r.endPosition = !0, n.removeDataArr = p = p.concat(s.splice(e, t)), a = (i = p.length) - 1; 0 <= a; a--) {
            if (!p[a]) {
              p.splice(a, 1);continue;
            }
          }r.removeDataLen = i, o && r.asyncDraw();
        }
      }, {
        key: "updateData",
        value: function updateData(e, t, o) {
          var a = this,
              i = a.config,
              r = i.maxValue,
              l = i.prevMin,
              n = a.getFromEnv("chart"),
              s = a.groupManager || a,
              g = n.getFromEnv("xAxis"),
              p = n.getFromEnv("yAxis");a._setConfigure(e, t), a.getDataLimits(), (i.maxValue !== r || i.minValue !== l) && (a.maxminFlag = !0), o && (n._setAxisLimits(), g && g[0].asyncDraw(), p && p[0].asyncDraw(), s.asyncDraw());
        }
      }, {
        key: "removePlots",
        value: function removePlots() {
          var e = this.components,
              t = e && e.removeDataArr;H(t, this.__removeElem);
        }
      }, {
        key: "removeGraphicElem",
        value: function removeGraphicElem(e, t) {
          this.__removeElem(e, t);
        }
      }, {
        key: "getAxisValuePadding",
        value: function getAxisValuePadding() {
          return this.config.defaultPadding;
        }
      }, {
        key: "getCanvasPadding",
        value: function getCanvasPadding() {
          var t,
              o,
              a,
              i,
              r,
              l,
              n = Math.max,
              s = this,
              p = s.config || (s.config = {}),
              c = s.components || {},
              d = s.getFromEnv("chart"),
              h = d.config.rotatevalues,
              u = s.getFromEnv("xAxis"),
              m = s.getFromEnv("yAxis"),
              f = d.config.dataLabelStyle,
              v = s.getSkippingInfo(),
              b = v.skippingApplied,
              x = v.draw,
              k = c.data || [],
              E = b ? x[0] : 0,
              C = b ? x[x.length - 1] : k.length - 1,
              S = p.leftMostData || k[E],
              y = p.rightMostData || k[C],
              P = {},
              _ = {},
              w = 0,
              V = 0,
              A = u.getPixel(0),
              D = s.getFromEnv("smartLabel"),
              T = { paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 },
              L = 0,
              I = u.getValuePadding(),
              N = p.topMostData,
              R = p.bottomMostData;return s.setColumnPosition(), l = { xPosOffset: s.getFromEnv("columnXShift"), columnWidth: s.getFromEnv("columnWidth"), height: g }, S && (i = (t = S.config).showValue, a = t && t.anchorProps || {}, i && (o = t.displayValue, D.useEllipsesOnOverflow(d.config.useEllipsesWhenOverflow), D.setStyle(f), _ = D.getOriSize(o), L = h ? _.height : _.width), null !== t.setValue && (r = u.getPixel(I.left), 0 > (V = (a.enabled && (0, e.pluckNumber)(a.radius, 0) + (0, e.pluckNumber)(a.borderThickness, 0) / 2 || 0) - (r - A)) && (V = 0), 0 > (w = (L || 0) / 2 - (r - A) - (l && l.xPosOffset + l.columnWidth / 2 || 0)) && (w = 0)), T.paddingLeft = F(V, w)), V = w = 0, y && (i = (t = y.config).showValue, a = t && t.anchorProps || {}, i && !h && (o = t.displayValue, D.setStyle(f), P = D.getOriSize(o), L = h ? P.height : P.width), null !== t.setValue && (r = u.getPixel(I.right), 0 > (V = (a.enabled && (0, e.pluckNumber)(a.radius, 0) + (0, e.pluckNumber)(a.borderThickness, 0) / 2 || 0) - (r - A)) && (V = 0), 0 > (w = (L || 0) / 2 - (r - A) + (l && l.xPosOffset + l.columnWidth / 2 || 0)) && (w = 0)), T.paddingRight = F(V, w)), N && (i = (t = N.config).showValue, a = t && t.anchorProps || {}, null !== t.setValue && (w = n((0, e.pluckNumber)(a.radius, 0) + (0, e.pluckNumber)(a.borderThickness, 0) / 2 - (m.getPixel(t.setValue.y) - m.getPixel(m.getLimit().max)), 0)), T.paddingTop = w), R && (a = (t = R.config) && t.anchorProps || {}, null !== t.setValue && (w = n((0, e.pluckNumber)(a.radius, 0) + (0, e.pluckNumber)(a.borderThickness, 0) / 2 - (m.getPixel(m.getLimit().min) - m.getPixel(t.setValue.y)), 0)), T.paddingBottom = w), T;
        }
      }, {
        key: "getEventArgs",
        value: function getEventArgs() {
          var e = this,
              t = e.config || {};return { datasetName: (e.config.JSONData || {}).seriesname, datasetIndex: e.getJSONIndex(), id: t.userID, visible: !e.getState("visible") };
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.components.data;
        }
      }, {
        key: "setJSONIndex",
        value: function setJSONIndex(e) {
          this.config.index = e;
        }
      }, {
        key: "getJSONIndex",
        value: function getJSONIndex() {
          return this.config.index || 0;
        }
      }, {
        key: "remove",
        value: function remove(e) {
          var t = this,
              o = t.config.legendItemId,
              a = t.getFromEnv("chart").getChildren("legend"),
              i = t.getFromEnv("legend");a && a.length && i && o && i.disposeItem(o), _get(B.prototype.__proto__ || Object.getPrototypeOf(B.prototype), "remove", this).call(this, e);
        }
      }, {
        key: "setMaxMin",
        value: function setMaxMin(e) {
          var t,
              o,
              a,
              i = this.components,
              r = i.data,
              l = i.removeDataArr,
              n = this.config,
              s = r.length,
              p = -1 / 0,
              c = 1 / 0,
              d = n.maxValue,
              h = n.minValue,
              u = l.length,
              m = !1;if (e) m = d === e.startValue || h === e.startValue;else if (u) for (t = 0; t < u; ++t) {
            if (d === (a = l[t] && l[t].config && l[t].config.setValue) || h === a) {
              m = !0;break;
            }
          }if (m) {
            for (t = 0; t < s; t++) {
              r[t] && (o = r[t].config.setValue) !== g && (p = F(p, o), c = w(c, o));
            }n.maxValue = p, n.minValue = c;
          }
        }
      }]);

      return B;
    }(a.default);

    exports._removePlots = H, exports.default = B;
  }, { "../lib/lib": 20, "../lib/lib-graphics": 21, "../../core/component-interface": 62, "../dependency-manager": 17, "../animation-rules/column-animation": 63, "../schedular": 18 }], 5: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("./sscartesian"),
        t = r(e),
        s = require("../_internal/datasets/column"),
        n = r(s);function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u = function (_t$default11) {
      _inherits(u, _t$default11);

      function u() {
        _classCallCheck(this, u);

        return _possibleConstructorReturn(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
      }

      _createClass(u, [{
        key: "getName",
        value: function getName() {
          return "Column2D";
        }
      }, {
        key: "__setDefaultConfig",
        value: function __setDefaultConfig() {
          _get(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "__setDefaultConfig", this).call(this), this.config.friendlyName = "Column Chart", this.config.singleseries = !0, this.config.defaultDatasetType = "column", this.config.enablemousetracking = !0;
        }
      }, {
        key: "getDSdef",
        value: function getDSdef() {
          return n.default;
        }
      }], [{
        key: "getName",
        value: function getName() {
          return "Column2D";
        }
      }]);

      return u;
    }(t.default);

    exports.default = u;
  }, { "./sscartesian": 11, "../_internal/datasets/column": 12 }], 9: [function (require, module, exports) {
    "use strict";
    function e() {
      for (var e = 0; e < arguments.length; e++) {
        if (!isNaN(+arguments[e])) return +arguments[e];
      }
    }function r(e) {
      return void 0 !== e;
    }Object.defineProperty(exports, "__esModule", { value: !0 });var t = function t(e) {
      return { value: e + "", label: "label " + e };
    },
        n = function n(e) {
      var r = {},
          t = void 0;for (t in e) {
        r[t] = e[t];
      }return r;
    };exports.pluckNumber = e, exports.defined = r, exports.createData = t, exports.getObjectCopy = n;
  }, {}], 3: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var e = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    }(),
        t = require("./utils");function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var n = function () {
      function n() {
        a(this, n), this.dataSource = {}, this.config = {};
      }return e(n, [{ key: "setDataFormat", value: function value(e) {
          this.config.dataFormat = e;
        } }, { key: "generate", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              a = void 0,
              n = void 0,
              r = void 0,
              o = (0, t.pluckNumber)(e.dsCount),
              u = (0, t.pluckNumber)(e.dataCount, 1),
              i = this.dataSource;if ((0, t.defined)(o)) for (i.dataset = [], a = 0; a < o; a++) {
            for (r = { data: [] }, n = 0; n < u; n++) {
              r.data.push((0, t.createData)(a));
            }i.dataset.push(r);
          } else for (i.data = [], a = 0; a < u; a++) {
            i.data.push((0, t.createData)(a));
          }return i.chart = { caption: "Monthly", xaxisname: "Month", yaxisname: "Revenue", numberprefix: "$", showvalues: "1", animation: "1" }, this;
        } }, { key: "getData", value: function value() {
          return (0, t.getObjectCopy)(this.dataSource);
        } }]), n;
    }();exports.default = n;
  }, { "./utils": 9 }], 1: [function (require, module, exports) {
    "use strict";
    var e = require("fusioncharts/core"),
        t = n(e),
        a = require("fusioncharts/viz/column2d"),
        r = n(a),
        u = require("./generator"),
        d = n(u);function n(e) {
      return e && e.__esModule ? e : { default: e };
    }t.default.addDep(r.default);var o = new d.default(),
        i = o.generate({ dataCount: 12 }).getData(),
        c = function c() {
      new t.default({ id: "stockRealTimeChart", type: "column2d", renderAt: "chart-container", width: "600", height: "350", dataFormat: "json", dataSource: i }).render();
    };t.default.ready(c);
  }, { "fusioncharts/core": 7, "fusioncharts/viz/column2d": 5, "./generator": 3 }], 233: [function (require, module, exports) {
    module.exports = function (n) {
      return new Promise(function (e, o) {
        var r = document.createElement("script");r.async = !0, r.type = "text/javascript", r.charset = "utf-8", r.src = n, r.onerror = function (n) {
          r.onerror = r.onload = null, o(n);
        }, r.onload = function () {
          r.onerror = r.onload = null, e();
        }, document.getElementsByTagName("head")[0].appendChild(r);
      });
    };
  }, {}], 0: [function (require, module, exports) {
    var b = require(53);b.register("js", require(233));
  }, {}] }, {}, [0, 1], null);
//# sourceMappingURL=/renderer.map
},{}],6:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '57552' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[6,4], null)
//# sourceMappingURL=/renderer.726459cf.map