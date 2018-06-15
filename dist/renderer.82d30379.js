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
})({18:[function(require,module,exports) {
module.exports = {
  "name": "fc-npm-tester",
  "version": "1.0.0",
  "description": "Utility to test the npm package of fusioncharts",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "./node_modules/.bin/eslint ./src/*.js --fix",
    "build-webpack": "webpack",
    "build-rollup": "./node_modules/.bin/rollup -c",
    "build-steal": "steal-tools",
    "build-brunch": "brunch build --production",
    "build-parcel": "parcel build ./src/renderer.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/priyanjitdey94/fc-npm-tester.git"
  },
  "author": "Priyanjit Dey",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/priyanjitdey94/fc-npm-tester/issues"
  },
  "homepage": "https://github.com/priyanjitdey94/fc-npm-tester#readme",
  "dependencies": {
    "fusioncharts": "git+ssh://git@bitbucket.org/fusioncharts/fusioncharts-npm.git"
  },
  "devDependencies": {
    "babel-brunch": "^6.1.1",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-eslint": "^8.2.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "brunch": "^2.10.12",
    "eslint": "^4.19.1",
    "eslint-plugin-react": "^7.9.1",
    "parcel-bundler": "^1.9.0",
    "rollup": "^0.60.7",
    "rollup-plugin-babel": "^3.0.4",
    "rollup-plugin-commonjs": "^9.1.3",
    "rollup-plugin-json": "^3.0.0",
    "rollup-plugin-node-resolve": "^3.3.0",
    "rollup-plugin-uglify": "^4.0.0",
    "steal": "^1.12.0",
    "steal-tools": "^1.11.9",
    "uglify-js": "^3.4.0",
    "webpack": "^4.12.0",
    "webpack-cli": "^3.0.6"
  }
};
},{}],75:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let UNDEF,
    attrTypeNum = 1,
    attrTypeBool = 2;var attribDefs,
    blankObj = {},
    mathMax = Math.max;function parseConfiguration(a, b, c, d, e, f) {
  var g,
      h,
      i,
      j,
      k = 1;for (g in exports.attribDefs = attribDefs = attribDefs || blankObj, d = d || blankObj, f = f || blankObj, e = e || {}, a) d[g] || (h = a[g], (h || !1 === h || 0 === h) && (i = (j = f[g] || attribDefs[g]) && j.type, i === attrTypeNum ? (h = +h, isNaN(h) || (b[g] = h)) : i === attrTypeBool ? (h = +h, isNaN(h) || (b[g] = !!h)) : b[g] = h));if (c) for (g in b) b[g] === UNDEF && (j = f[g] || attribDefs[g]) && j.pAttr && (b[g] = c[j.pAttr]);for (; k;) for (g in k = 0, b) b[g] === UNDEF && (j = f[g] || attribDefs[g]) && (j.attr ? (h = b[j.attr]) !== UNDEF && (b[g] = h, k += 1) : j.parser && (h = j.parser(b, c, e)) !== UNDEF && (b[g] = h, k += 1));
}function setAttribDefs(a, b) {
  var c, d;for (d in exports.attribDefs = attribDefs = attribDefs || {}, 'string' == typeof a ? (c = {}, c[a] = b) : c = a, c) attribDefs[d] || (attribDefs[d] = c[d]);
}function hasAttribDefs(a) {
  return !!attribDefs[a];
}exports.attribDefs = attribDefs = { setBorderWidth: { type: 1, pAttr: 'plotborderthickness' }, plotborderthickness: { type: 1, pAttr: 'plotborderthickness' }, showBorderEffect: { parser: function () {
      let a = arguments[1];return 1 == +a.showplotborder && a.plotborderthickness === .1 ? 1 : 0;
    } }, alphaanimation: { type: 1 }, showplotborder: { type: 1, pAttr: 'showplotborder' }, zeroplanethickness: { type: 1 }, showzeroplaneontop: { type: 1 }, stickytracking: { type: 1 }, usemessagelog: { type: 1 }, showtooltip: { type: 1, pAttr: 'showtooltip' }, seriesnameintooltip: { type: 1 }, plothovereffect: { type: 1, attr: 'anchorhovereffect' }, anchorhovereffect: { type: 1, attr: 'showhovereffect' }, showhovereffect: { type: 1, attr: 'drawcrossline' }, drawcrossline: { type: 1 }, linethickness: { type: 1, pAttr: 'linethickness' }, dashed: { type: 1, pAttr: 'linedashed' }, linedashed: { type: 1, attr: 'plotborderdashed' }, plotborderdashed: { type: 1, pAttr: 'plotborderdashed' }, linedashlen: { type: 1, pAttr: 'linedashlen' }, linedashgap: { type: 1, pAttr: 'linedashgap' }, anchoralpha: { pAttr: 'anchoralpha' }, anchorsides: { type: 1, pAttr: 'anchorsides' }, anchorradius: { type: 1, pAttr: 'anchorradius' }, anchorbgalpha: { pAttr: 'anchorbgalpha' }, anchorbgcolor: { pAttr: 'anchorbgcolor' }, anchorbordercolor: { pAttr: 'anchorbordercolor' }, anchorstartangle: { type: 1, pAttr: 'anchorstartangle' }, anchorimageurl: { pAttr: 'anchorimageurl' }, anchorimagescale: { type: 1, pAttr: 'anchorimagescale' }, anchorimagealpha: { pAttr: 'anchorimagealpha' }, anchorimagepadding: { type: 1, pAttr: 'anchorimagepadding' }, anchorborderthickness: { type: 1, pAttr: 'anchorborderthickness' }, anchorshadow: { type: 1, pAttr: 'anchorshadow' }, valuepadding: { type: 1, pAttr: 'valuepadding' }, valueposition: { pAttr: 'valueposition' }, plotfillangle: { type: 1, pAttr: 'plotfillangle' }, useplotgradientcolor: { type: 1 }, rotatevalues: { type: 1, pAttr: 'rotatevalues' }, includeinlegend: { type: 1 }, connectnulldata: { type: 1 }, plotfillalpha: { pAttr: 'plotfillalpha' }, alpha: { pAttr: 'linealpha' }, linealpha: { pAttr: 'plotfillalpha' }, showvalues: { type: 1, pAttr: 'showvalues' }, showpercentvalues: { type: 1, parser: function (a) {
      return a.isstacked && a.stack100percent ? 1 : 0;
    } }, showpercentintooltip: { type: 1, parser: function (a) {
      return a.isstacked && a.stack100percent ? 1 : 0;
    } }, stack100percent: { type: 1, attr: 'usepercentdistribution' }, drawfullareaborder: { type: 1 }, use3dlineshift: { type: 1 }, parentyaxis: { type: 1 }, radarborderthickness: { type: 1 }, radarborderradius: { type: 1 }, gaugeoriginx: { type: 1 }, hasgaugeoriginx: { attr: 'gaugeoriginx' }, gaugeoriginy: { type: 1 }, hasgaugeoriginy: { attr: 'gaugeoriginy' }, gaugeradius: { type: 1 }, hasgaugeradius: { attr: 'gaugeradius' }, showgaugeborder: { type: 1 }, setAdaptiveMin: { type: 1 }, adjustDiv: { type: 1 }, axisNameWidth: { type: 1 }, rotateAxisName: { type: 1 }, useEllipsesWhenOverflow: { type: 1 }, showZeroPlane: { type: 1 }, zeroPlaneAlpha: { type: 1 }, showZeroPlaneValue: { type: 1 }, zeroPlaneOnTop: { type: 1 }, trendlineThickness: { type: 1 }, showTrendlinesOnTop: { type: 1 }, trendlinesAreDashed: { type: 1 }, trendlinesDashLen: { type: 1 }, trendlinesDashGap: { type: 1 }, showTrendlines: { type: 1 }, showTrendlineLabels: { type: 1 }, showLabels: { type: 1 }, rotateLabels: { type: 1 }, slantLabel: { type: 1 }, showAxisValues: { type: 1 }, showTooltip: { type: 1 }, maxLabelHeight: { type: 1 }, useroundedges: { type: 1, pAttr: 'useroundedges' }, placevaluesinside: { type: 1 }, plotpaddingpercent: { type: 1 }, use3dlighting: { type: 1, pAttr: 'use3dlighting' }, usedataplotcolorforlabels: { type: 1 }, plotspacepercent: { type: 1, parser: function (a) {
      return mathMax(a.plotspacepercent % 100, 0);
    } }, ratio: { pAttr: 'plotfillratio' }, base: { type: 1 }, showMinorDivLineValues: { type: 1 }, numMinorDivLines: { type: 1 }, majorTMNumber: { type: 1 }, majorTMHeight: { type: 1 }, showTickMarks: { type: 1 }, majorTMThickness: { type: 1 }, adjustTM: { type: 2 }, minorTMNumber: { type: 1 }, minorTMThickness: { type: 1 }, tickMarkDistance: { type: 1 }, placeTicksInside: { type: 1 }, placeValuesInside: { type: 1 }, axisValuePadding: { type: 1 }, gridLineWidth: { type: 1 }, showRadarBorder: { type: 1 }, radarBorderThickness: { type: 1 }, maxcolwidth: { type: 1, parser: function (a) {
      return Math.abs(a.maxcolwidth);
    } }, maxbarheight: { type: 1, parser: function (a) {
      return Math.abs(a.maxbarheight);
    } }, plotborderalpha: { parser: function (a, b) {
      return b.plotborderalpha || a.plotfillalpha;
    } }, autoscale: { type: 1 }, plotborderdashlen: { type: 1, pAttr: 'plotborderdashlen' }, plotborderdashgap: { type: 1, pAttr: 'plotborderdashgap' }, plotfillratio: { pAttr: 'plotfillratio' }, drawverticaljoins: { type: 1, pAttr: 'drawverticaljoins' }, useforwardsteps: { type: 1, pAttr: 'useforwardsteps' }, minimizetendency: { type: 1 }, usepercentdistribution: { type: 1 }, stepatmiddle: { type: 1 } };exports.attribDefs = attribDefs;
exports.parseConfiguration = parseConfiguration;
exports.setAttribDefs = setAttribDefs;
exports.hasAttribDefs = hasAttribDefs;
},{}],87:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c, d) {
  if (typeof a != objectStr && typeof b != objectStr) return null;if (typeof b != objectStr || null === b) return a;if ('undefined' == typeof a && (a = b instanceof Array ? [] : {}), d) for (var e in b) a[e] = b[e];else merge(a, b, c);return a;
};

let UNDEF,
    BLANK = '__blank',
    nullStr = '\u2400',
    E = '',
    arrayToStr = '[object Array]',
    objectToStr = '[object Object]',
    objectStr = 'object',
    dashedAttr2CSSMap = { "font-family": 'fontFamily', "font-size": 'fontSize', "text-anchor": 'textAnchor', "font-weight": 'fontWeight', "letter-spacing": 'letterSpacing', "font-style": 'fontStyle' },
    loadRefImage = function (a, b) {
  var c = b.src,
      d = a._.RefImg;d || (d = a._.RefImg = new Image());void 0 === b.src || (d.src = c, a._.RefImg = d);
},
    showRecursively = function (a) {
  for (var b = {}, c = a, d = b, e = function () {
    for (var c = a, d = b; c;) d._doHide && c.hide(), c = c.parent, d = d.parent;
  }; c;) c.node && c.node.style && 'none' === c.node.style.display && (c.show(), d._doHide = !0), c = c.parent, d.parent = {}, d = d.parent;return e;
},
    checkCyclicRef = function (a, b) {
  for (var c = b.length, d = -1; c--;) if (a === b[c]) return d = c, d;return d;
},
    getArrayCopy = function (a) {
  var b, c, d;for (b = 0, c = a.length, d = Array(c); b < c; b++) d[b] = a[b];return d;
},
    merge = function (a, b, c, d, e) {
  var f, g, h, i, j;if (e ? (d.push(a), e.push(b)) : (d = [a], e = [b]), b instanceof Array) for (f = 0; f < b.length; f += 1) {
    try {
      g = a[f], h = b[f];
    } catch (a) {
      continue;
    }typeof h == objectStr ? ((null === g || typeof g != objectStr) && (g = a[f] = h instanceof Array ? [] : {}), j = checkCyclicRef(h, e), -1 === j ? merge(g, h, c, d, e) : g = a[f] = d[j]) : !(c && h === UNDEF) && (a[f] = h);
  } else for (f in b) {
    try {
      g = a[f], h = b[f];
    } catch (a) {
      continue;
    }null !== h && typeof h == objectStr ? (i = Object.prototype.toString.call(h), i === objectToStr ? ((null === g || typeof g != objectStr) && (g = a[f] = {}), j = checkCyclicRef(h, e), -1 === j ? merge(g, h, c, d, e) : g = a[f] = d[j]) : i === arrayToStr ? ((null === g || !(g instanceof Array)) && (g = a[f] = []), j = checkCyclicRef(h, e), -1 === j ? merge(g, h, c, d, e) : g = a[f] = d[j]) : a[f] = h) : a[f] = h;
  }return a;
};var cacher = function (a, b, c, d, e, f, g) {
  function h(f) {
    var h,
        k,
        l,
        m = g ? f : getArrayCopy(arguments).join(nullStr);return m = m === E ? BLANK : m, h = i[m], h ? h.__prev && (i[h.__prev].__next = h.__next, h.__next ? h.__next.__prev = h.__prev : i.__end = h.__prev) : (h = i[m] = {}, a && (i[m][d] = c ? c(a.apply(b, arguments)) : a.apply(b, arguments)), null === i.__end && (i.__end = m), j++, j > e && i.__end && (k = i[i.__end], i[k.__prev].__next = null, delete i[i.__end], i.__end = k.__prev, j--)), l = i.__start, l !== h && (h.__prev = null, h.__next = l, l && (l.__prev = m), i.__start = h), i[m][d];
  }var i = f || {},
      j = 0;return void 0 === i.__start && (i.__start = null), void 0 === i.__end && (i.__end = null), e = e || 1e3, d = d || 'item', h;
};exports.merge = merge;
exports.getArrayCopy = getArrayCopy;
exports.dashedAttr2CSSMap = dashedAttr2CSSMap;
exports.loadRefImage = loadRefImage;
exports.showRecursively = showRecursively;
exports.cacher = cacher;
},{}],76:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raphael = require('../vendors/redraphael/source/raphael.lib');

var _raphael2 = _interopRequireDefault(_raphael);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gDefs,
    SPACE = ' ',
    win = window,
    doc = win.document,
    hasTouch = 'ontouchstart' in win,
    BE = { click: 'click', touchstart: 'touchstart', touchend: 'touchend', touchmove: 'touchmove', mousedown: 'mousedown', mouseup: 'mouseup', mousemove: 'mousemove', mouseout: 'mouseout', mouseover: 'mouseover', keydown: 'keydown' },
    gestures = function () {
  var a,
      b = {};return b.pointerdrag = { start: [BE.mousedown], end: [BE.mouseup], onStart: [BE.mousemove], postHandlers: {}, preHandlers: {} }, b.pointerhover = { start: [BE.mouseover], end: [BE.mouseout] }, b.click = { start: [BE.click] }, b.escape = { start: [BE.keydown], preHandlers: { start: function (a) {
        return a = a || win.event, !!(a.keyCode && 27 === a.keyCode);
      } } }, hasTouch && (a = b.pointerdrag, a.start.push(BE.touchstart), a.end.push(BE.touchend), a.onStart.push(BE.touchmove), a.postHandlers.onStart = function (a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
  }), b;
}();function defineGestures() {
  var a = (0, _raphael2.default)({}, gestures);return a;
}gDefs = defineGestures();function DOMEventFx() {
  var a = {},
      b = {},
      c = doc.addEventListener ? function (a, b, c) {
    a.addEventListener(b, c, !1);
  } : function (a, b, c) {
    a.attachEvent('on' + b, c);
  },
      d = doc.removeEventListener ? function (a, b, c) {
    a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    a.detachEvent('on' + b, c);
  },
      e = function (a, b, e, f) {
    var g;return f = f || 'closure', c(a, b, e[f]), g = function () {
      d(a, b, e[f]);
    }, g;
  },
      f = function (a, b, c) {
    var d,
        f,
        g,
        h,
        j = [];if (h = gDefs[b], c.start = function (b) {
      var d = h.onStart,
          f = h.end,
          g = [],
          j = [],
          k = d && d.length || 0;for (b = b || win.event; k--;) g.push(e(a, d[k], c, 'onStart'));for (k = f && f.length || 0; k--;) j.push(e(a, f[k], c, 'end'));c.startUn = c.startUn ? c.startUn.concat(g) : g, c.endUn = c.endUn ? c.endUn.concat(j) : j, c.state = 'start', c.closure(b);
    }, c.onStart = function (a) {
      a = a || win.event, c.state = 'on', c.gDef && c.gDef.preHandlers && 'function' == typeof c.gDef.preHandlers.onStart && c.gDef.preHandlers.onStart(a), c.closure(a), c.gDef && c.gDef.postHandlers && 'function' == typeof c.gDef.postHandlers.onStart && c.gDef.postHandlers.onStart(a);
    }, c.end = function (a) {
      var b = c.startUn,
          d = c.endUn,
          e = b && b.length || 0;for (a = a || win.event; e--;) b[e]();for (delete c.startUn, c.startUn = [], e = d && d.length || 0; e--;) d[e]();delete c.endUn, c.endUn = [], c.state = 'end', c.closure(a);
    }, h) for (d = h.start, g = d.length; g--;) f = d[g], f && j.push(e(a, f, c, 'start'));return j;
  },
      g = function (a, b, c) {
    var e, f, g, h;if (h = gDefs[b], h) for (e = h.start, g = e.length; g--;) f = e[g], f && d(a, f, c.start);
  },
      h = function (a) {
    return function (b) {
      var c,
          d = a.context || a.elem;b = b.originalEvent || b, c = { data: a.data, type: a.type, state: a.state, isGesture: a.isGesture, target: b.target || b.srcElement, originalEvent: b }, b = b || win.event, a.handler.call(d, c);
    };
  };return { listen: function (c, d, g, j, k) {
      var l,
          m,
          n,
          o,
          p,
          q = this,
          r = 'string' == typeof d ? d.split(SPACE) : d,
          s = r.length,
          t = [],
          u = function (a, b, c) {
        t.push(function () {
          q.unlisten(a, b, c);
        });
      };if (!c.ownerDocument || c.ownerDocument !== doc) for (; s--;) m = r[s], p = 'function' == typeof g ? g : g[s], n = { handler: p, elem: c, type: m, isGesture: o, data: j, context: k, start: [], end: [], links: { prev: null, next: null } }, n.closure = h(n), l = a[m], l || (l = a[m] = []), l.push(n), e(c, m, n), u(c, m, p);else for (; s--;) m = r[s], o = !!gDefs[m], p = 'function' == typeof g ? g : g[s], n = { handler: p, elem: c, type: m, isGesture: o, gDef: o ? gDefs[m] : null, data: j, context: k, start: [], end: [], links: { prev: null, next: null } }, n.closure = h(n), o ? (l = b[m], !l && (l = b[m] = []), l.push(n), f(c, m, n)) : (l = a[m], !l && (l = a[m] = []), l.push(n), e(c, m, n)), u(c, m, p);return { unlisten: function () {
          for (var a = t.length; a--;) t[a]();t.length = 0, t = null;
        } };
    }, unlisten: function (c, e, f) {
      var h,
          j,
          k,
          l = !!gDefs[e],
          m = !1;if (!l) for (h = a[e], j = h && h.length || 0; j--;) k = h[j], k.handler === f && k.elem === c && (d(c, e, k.closure), h.splice(j, 1), m = !0);else for (h = b[e], j = h && h.length || 0; j--;) k = h[j], k.handler === f && k.elem === c && (g(c, e, k), h.splice(j, 1), m = !0);return m;
    }, fire: function (b, c, d, e) {
      var f, g, h, j;if (!b.ownerDocument || b.ownerDocument !== doc) for (f = a[c], g = f && f.length || 0; g--;) h = f[g], h.elem === b && h.closure(d);else doc.createEvent ? (j = doc.createEvent('HTMLEvents'), j.initEvent(c, !0, !0), d && (d.originalEvent ? d.originalEvent = j : (0, _raphael2.default)(j, d)), 'function' == typeof b[c] && b[c](), b.dispatchEvent(j), e && !j.returnValue && e(j)) : (j = doc.createEventObject(), j.eventType = c, d && (d.originalEvent ? d.originalEvent = j : (0, _raphael2.default)(j, d)), 'function' == typeof b[c] && b[c](), b.fireEvent('on' + c, j), e && !j.returnValue && e(j));
    } };
}exports.default = new DOMEventFx();
},{"../vendors/redraphael/source/raphael.lib":87}],24:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEXtoRGB = exports.rawRGBtoHEX = exports.RGBtoHex = exports.getValidColor = exports.parseColor = exports.getAngle = exports.getPointColor = exports.getColumnColor = exports.mapSymbolName = exports.getLightColor = exports.getDarkColor = exports.convertColor = undefined;

var _lib = require('./lib');

var symbolStr = { circle: 'circle', triangle: 'triangle', square: 'square', diamond: 'diamond', poly: 'poly_', spoke: 'spoke_' };function getAlpha(a, b) {
  return a = +a, a = isNaN(a) ? 100 : a, b !== _lib.UNDEF && (a = a * b / 100), a % 101;
}function parseAlpha(a, b, c) {
  var d,
      e = a.split(_lib.COMMA);for (c !== _lib.UNDEF && (c = (0, _lib.pluckNumber)(c.split(_lib.COMMA)[0])), e[0] = getAlpha(e[0], c), d = 1; d < b; d += 1) e[d] = e[0] * getAlpha(e[d], c) / 100;return e.join(_lib.COMMA);
}function convertColor(a, b, c) {
  var d,
      e,
      f = 0,
      g = 0,
      h = 0;if (c && c.match(_lib.startsRGBA) && (e = c.split(_lib.COMMA), f = e[0].slice(e[0].indexOf('(') + 1), g = e[1], h = e[2], !b && 0 !== b && (b = parseInt(100 * e[3].slice(0, e[3].indexOf(')')), 10))), a) if (a.match(_lib.startsRGBA)) e = a.split(_lib.COMMA), f = e[0].slice(e[0].indexOf('(') + 1), g = e[1], h = e[2];else {
    switch (d = a.replace(_lib.cleanColorCode, _lib.BLANK).split(_lib.COMMA)[0], d.length) {case 3:
        d = d.charAt(0) + d.charAt(0) + d.charAt(1) + d.charAt(1) + d.charAt(2) + d.charAt(2);break;case 6:
        break;default:
        d = (d + _lib.COLOR_WHITE).slice(0, 6);}f = parseInt(d.slice(0, 2), 16), g = parseInt(d.slice(2, 4), 16), h = parseInt(d.slice(4, 6), 16);
  }return b || 0 === b || (b = 100), 'string' == typeof b && (b = b.split(_lib.COMMA)[0]), b = parseInt(b, 10) / 100, 'rgba(' + f + _lib.COMMA + g + _lib.COMMA + h + _lib.COMMA + b + ')';
}function getDarkColor(a, b) {
  var c = Math.floor;b = 0 > b || 100 < b ? 100 : b, b /= 100, a = a.replace(_lib.cleanColorCode, _lib.BLANK);var d = parseInt(a, 16),
      e = c(d / 65536),
      f = c((d - 65536 * e) / 256);return (_lib.COLOR_BLACK + (e * b << 16 | f * b << 8 | (d - 65536 * e - 256 * f) * b).toString(16)).slice(-6);
}function getLightColor(a, b) {
  var c = Math.floor;b = 0 > b || 100 < b ? 100 : b, b /= 100, a = a.replace(_lib.cleanColorCode, _lib.BLANK);var d = parseInt(a, 16),
      e = c(d / 65536),
      f = c((d - 65536 * e) / 256);return (_lib.COLOR_BLACK + (256 - (256 - e) * b << 16 | 256 - (256 - f) * b << 8 | 256 - (256 - (d - 65536 * e - 256 * f)) * b).toString(16)).slice(-6);
}function mapSymbolName(a, b) {
  var c = symbolStr.circle;return a = (0, _lib.parsePointValue)(a), 3 <= a && (c = (b ? symbolStr.spoke : symbolStr.poly) + a), c;
}function getColumnColor(a, b, c, d, e, f, g, h, i) {
  var j, k, l, m, n, o, p, q;return l = a.split(_lib.COMMA), m = b.split(_lib.COMMA), n = f.split(_lib.COMMA), q = g.split(_lib.COMMA), a = a.replace(/\s/g, _lib.BLANK).replace(/\,$/, _lib.BLANK), i ? j = { FCcolor: { color: l[0], alpha: m[0] } } : e ? (o = l[0], p = m[0], j = { FCcolor: { color: getDarkColor(o, 75) + _lib.COMMA + getLightColor(o, 10) + _lib.COMMA + getDarkColor(o, 90) + _lib.COMMA + getLightColor(o, 55) + _lib.COMMA + getDarkColor(o, 80), alpha: p + _lib.COMMA + p + _lib.COMMA + p + _lib.COMMA + p + _lib.COMMA + p, ratio: '0,11,14,57,18', angle: h ? '90' : '0' } }, n = [getDarkColor(o, 70)]) : (b = parseAlpha(b, l.length), j = { FCcolor: { color: a, alpha: b, ratio: c, angle: h ? -d : d } }), k = { FCcolor: { color: n[0], alpha: q[0] } }, [j, k];
}function getPointColor(a, b) {
  var c, d, e;return a = (0, _lib.getFirstColor)(a), b = (0, _lib.getFirstAlpha)(b), d = getLightColor(a, 70), e = getDarkColor(a, 50), c = { FCcolor: { gradientUnits: 'objectBoundingBox', cx: .4, cy: .4, r: '100%', color: d + _lib.COMMASTRING + e, alpha: b + _lib.COMMASTRING + b, ratio: _lib.BGRATIOSTRING, radialGradient: !0 } }, c;
}function getAngle(a, b, c) {
  var d = 180 * Math.atan(b / a) / Math.PI;return 2 == c ? d = 180 - d : 3 == c ? d += 180 : 4 == c && (d = 360 - d), d;
}function parseColor(a) {
  return a.replace(_lib.cleanColorCode, _lib.BLANK).replace(_lib.dropHash, _lib.HASHSTRING);
}function getValidColor(a) {
  return _lib.validhexcolor.test(parseColor(a)) && a;
}function RGBtoHex(a) {
  return (_lib.COLOR_BLACK + (a[0] << 16 | a[1] << 8 | a[2]).toString(16)).slice(-6);
}function rawRGBtoHEX(a) {
  var b,
      c = a.match(/[\d+]+/g);return b = c.splice(0, 3), (_lib.COLOR_BLACK + (b[0] << 16 | b[1] << 8 | b[2]).toString(16)).slice(-6);
}function HEXtoRGB(a) {
  var c = Math.floor,
      d = parseInt(a, 16),
      e = c(d / 65536),
      f = c((d - 65536 * e) / 256),
      g = c(d - 65536 * e - 256 * f);return [e, f, g];
}exports.convertColor = convertColor;
exports.getDarkColor = getDarkColor;
exports.getLightColor = getLightColor;
exports.mapSymbolName = mapSymbolName;
exports.getColumnColor = getColumnColor;
exports.getPointColor = getPointColor;
exports.getAngle = getAngle;
exports.parseColor = parseColor;
exports.getValidColor = getValidColor;
exports.RGBtoHex = RGBtoHex;
exports.rawRGBtoHEX = rawRGBtoHEX;
exports.HEXtoRGB = HEXtoRGB;
},{"./lib":23}],77:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getImageAlignment(a, b, c, d, e, f, g) {
  var h = {};return 'top' === b ? h.y = a : 'bottom' === b ? h.y = g - e - a : 'middle' === b ? h.y = (g - e) / 2 : void 0, 'left' === c ? h.x = a : 'right' === c ? h.x = f - d - a : 'middle' === c ? h.x = (f - d) / 2 : void 0, h;
}function getAlignImage(a, b, c, d, e, f, g, h, i, j) {
  var k,
      l,
      m,
      n,
      o,
      p,
      q = Math.ceil,
      r = {};return 'center' === c ? (r.width = d, r.height = e, r.y = g / 2 - e / 2, r.x = f / 2 - d / 2) : 'stretch' === c ? (r.width = f - 2 * h, r.height = g - 2 * h, r.y = h, r.x = h) : 'tile' === c ? (r.width = d, r.height = e, r.tileInfo = {}, r.tileInfo.xCount = n = q(i / d), r.tileInfo.yCount = o = q(j / e), p = getImageAlignment(h, a, b, d * n, e * o, f, g), r.y = p.y, r.x = p.x) : 'fit' === c ? (k = d / e, l = i / j, m = k > l ? i / d : j / e, r.width = d * m, r.height = e * m, p = getImageAlignment(h, a, b, r.width, r.height, f, g), r.y = p.y, r.x = p.x) : 'fill' === c ? (k = d / e, l = i / j, m = k > l ? j / e : i / d, r.width = d * m, r.height = e * m, p = getImageAlignment(h, a, b, r.width, r.height, f, g), r.y = p.y, r.x = p.x) : (p = getImageAlignment(h, a, b, d, e, f, g), r.width = d, r.height = e, r.y = p.y, r.x = p.x), r;
}exports.getAlignImage = getAlignImage;
},{}],23:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domInsertModes = exports.normalizeCSSDimension = exports.isXSSSafe = exports.getSuggestiveRotation = exports.extent = exports.normalizeAngle = exports.safeMin = exports.safeMax = exports.LINE_HEIGHT_FACTOR = exports.PROJECT_VERSION = exports.trimString = exports.datasetFactory = exports.componentFactory = exports.dropHash = exports.BGRATIOSTRING = exports.VISIBLE = exports.touchEnabled = exports.MOUSEMOVE = exports.MOUSEOUT = exports.FIT = exports.FILL = exports.TILE = exports.COMMA = exports.animationObjStr = exports.configStr = exports.ROUND = exports.BLANK = exports.POINTER = exports.HAND = exports.BOLD = exports.NORMAL = exports.mathRound = exports.mathAbs = exports.animHelperFN = exports.xssEncode = exports.MathExt = exports.defaultGaugePaletteOptions = exports.crispBound = exports.hasAttribDefs = exports.setAttribDefs = exports.parseConfiguration = exports.attribDefs = exports.canvasBorderColorStr = exports.defined = exports.pInt = exports.attrTypeBool = exports.canvasBGAlphaStr = exports.attrTypeNum = exports.DASH_DEF = exports.chartPaletteStr = exports.TRACKER_FILL = exports.capitalizeString = exports.getContainerBackgroundColor = exports.appliedCSS = exports.validhexcolor = exports.pseudoEval = exports.executeJS = exports.componentDispose = exports.createDialog = exports.chartAPI = exports.getDashStyle = exports.getAxisLimits = exports.supportedStyle = undefined;
exports.parsexAxisStyles = exports.setLineHeight = exports.setImageDisplayMode = exports.getLinkAction = exports.lineHeightFactor = exports.isEdge = exports.isIE9 = exports.isIE11 = exports.isIE = exports.CREDIT_REGEX = exports.hasSVG = exports.stableSort = exports.stubFN = exports.preDefStr = exports.getCripValues = exports.getCrispValue = exports.isArray = exports.getImageURL = exports.regReplaceEscape = exports.regescape = exports.CREDIT_STRING = exports.CREDIT_HREF = exports.hasTouch = exports.toPrecision = exports.parseTooltext = exports.parseUnsafeString = exports.parsePointValue = exports.getFirstAlpha = exports.fastTrim = exports.gradientify = exports.rgbaToHex = exports.toRaphaelColor = exports.clampNumber = exports.getColorCodeString = exports.getFirstColor = exports.getFirstValue = exports.getDefinedColor = exports.fcEach = exports.bindSelectionEvent = exports.getViewPortDimension = exports.getPosition = exports.getValidValue = exports.pluckFontSize = exports.getComparatorFN = exports.dehashify = exports.hashify = exports.polyPathToPath = exports.createElement = exports.getFirstDefinedValue = exports.pluckNumber = exports.pluck = exports.imprint = exports.extend2 = exports.getTouchEvent = exports.getMouseCoordinate = exports.getEventCoordinate = exports.regex = exports.CLICK_THRESHOLD_PIXELS = exports.TOUCH_THRESHOLD_PIXELS = exports.cleanColorCode = exports.startsRGBA = exports.visibleStr = exports.hiddenStr = exports.TEXTANCHOR = exports.COMMASPACE = exports.PXSTRING = exports.HUNDREDSTRING = exports.SHAPE_RECT = exports.FC_CONFIG_STRING = exports.POSITION_END = exports.POSITION_START = exports.POSITION_MIDDLE = exports.POSITION_CENTER = exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.POSITION_RIGHT = exports.POSITION_TOP = exports.STRINGUNDEFINED = exports.DECIMALSTRING = exports.ONESTRING = exports.TESTSTR = exports.SAMPLESTRING = exports.ZEROSTRING = exports.COMMASTRING = exports.OBJECTSTRING = exports.STRINGSTRING = exports.BREAKSTRING = exports.HASHSTRING = exports.COLOR_TRANSPARENT = exports.COLOR_WHITE = exports.COLOR_GLASS = exports.COLOR_BLACK = exports.BLANKSTRING = exports.UNDERSCORE = exports.UNDEF = exports.isFirefox = exports.BLANKSTRINGPLACEHOLDER = exports.getEmptyConstractor = exports.addInterActiveEvtName = exports.isInterActiveEvt = undefined;

var _package = require('../../../../package.json');

var _libAttr = require('./lib-attr');

var _domEvent = require('../dom/dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _raphael = require('../vendors/redraphael/source/raphael.lib');

var _raphael2 = _interopRequireDefault(_raphael);

var _libGraphics = require('./lib-graphics');

var _imageAlignment = require('../misc/image-alignment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PROJECT_VERSION = _package.version,
      LINE_HEIGHT_FACTOR = 1.2;var BGRATIOSTRING,
    UNDEF,
    prevPageX,
    prevPageY,
    chartAPI,
    win = window,
    DASH_DEF = 'none',
    EMPTYFN = function () {},
    getEmptyConstractor = function () {
  return function () {};
},
    isIE9 = function () {
  var e,
      n = win.navigator.userAgent.toLowerCase();return e = -1 != n.indexOf('msie') && win.parseInt(n.split('msie')[1]), !!(e && 9 === e);
}(),
    isFirefox = /Firefox/i.test(win.navigator.userAgent),
    doc = win.document,
    nav = win.navigator,
    hasSVG = !!(win.SVGAngle || doc.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')),
    isIE11 = /trident/i.test(nav.userAgent) && /rv:11/i.test(nav.userAgent) && !window.opera,
    isIE = /msie/i.test(nav.userAgent) && !win.opera,
    isEdge = /Edge/.test(nav.userAgent),
    attrTypeNum = 1,
    attrTypeBool = 2,
    BAD_CHARS_RE = /[\\\"<>;&]/,
    PROTOCOL_DEF_RE = /^[^\S]*?(sf|f|ht)(tp|tps):\/\//i,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? .002 : 1e-6) + ')',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_CENTER = 'center',
    BLANKSTRINGPLACEHOLDER = '#BLANK#',
    SAMPLESTRING = 'Ay0',
    COLOR_BLACK = '000000',
    COLOR_GLASS = 'rgba(255, 255, 255, 0.3)',
    COLOR_WHITE = 'FFFFFF',
    COLOR_TRANSPARENT = 'rgba(0,0,0,0)',
    HASHSTRING = '#',
    BREAKSTRING = '<br />',
    STRINGSTRING = 'string',
    OBJECTSTRING = 'object',
    BLANK = '',
    BLANKSTRING = '',
    COMMASTRING = ',',
    COMMA = ',',
    RStr = 'r',
    COLON = ':',
    HYPHEN = '-',
    ZEROSTRING = '0',
    MOUSEOUT = 'mouseout',
    MOUSEMOVE = 'mousemove',
    TESTSTR = 'Ag',
    ONESTRING = '1',
    DECIMALSTRING = '.',
    STRINGUNDEFINED = 'undefined',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_MIDDLE = 'middle',
    POSITION_START = 'start',
    POSITION_END = 'end',
    FC_CONFIG_STRING = '_FCconf',
    SHAPE_RECT = 'rect',
    HUNDREDSTRING = '100',
    VISIBLE = 'visible',
    PXSTRING = 'px',
    COMMASPACE = ', ',
    TEXTANCHOR = 'text-anchor',
    canvasBGAlphaStr = 'canvasBgAlpha',
    ROUND = 'round',
    UNDERSCORE = '_',
    NORMAL = 'normal',
    BOLD = 'bold',
    POINTER = 'pointer',
    HAND = 'pointer',
    TILE = 'tile',
    FILL = 'fill',
    FIT = 'fit',
    CREDIT_HREF = 'http://www.fusioncharts.com?BS=FCHSEvalMark&utm_source=FCS_trial&pver=' + escape(PROJECT_VERSION),
    CREDIT_STRING = 'undefined' != typeof FC_RESELLER && FC_RESELLER ? 'FusionCharts XT - Only For Resale' : 'FusionCharts XT Trial',
    canvasBorderColorStr = 'canvasBorderColor',
    TOUCH_THRESHOLD_PIXELS = 15,
    CLICK_THRESHOLD_PIXELS = 5,
    lineHeightFactor = 1.2,
    configStr = 'config',
    animationObjStr = 'animationObj',
    hiddenStr = 'hidden',
    visibleStr = 'visible',
    toFloat = parseFloat,
    CREDIT_REGEX = /fusioncharts\.com|fusioncharts\.github\.io$/i,
    breakPlaceholder = /\{br\}\s*/ig,
    stripWhitespace = /\s+/g,
    dropHash = /^#?/,
    startsRGBA = /^rgba/i,
    cleanColorCode = /[#\s]/ig,
    hexcode = /^#?[0-9a-f]{6}/i,
    validhexcolor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
    mathAbs = Math.abs,
    mathPow = Math.pow,
    mathRound = Math.round,
    EPSILON = mathPow(2, -24),
    touchEnabled = 'ontouchstart' in doc,
    hasTouch = touchEnabled && !(nav.maxTouchPoints || nav.msMaxTouchPoints),
    creditLabel = !CREDIT_REGEX.test(win.location.hostname),
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    stubEvent = { pageX: 0, pageY: 0 },
    M = 'M',
    gaugePaletteColors = ['8BBA00', 'F6BD0F', 'FF654F', 'AFD8F8', 'FDB398', 'CDC309', 'B1D0D2', 'FAD1B9', 'B8A79E', 'D7CEA5', 'C4B3CE', 'E9D3BE', 'EFE9AD', 'CEA7A2', 'B2D9BA'],
    defaultGaugePaletteOptions = { paletteColors: [gaugePaletteColors, gaugePaletteColors, gaugePaletteColors, gaugePaletteColors, gaugePaletteColors], bgColor: ['CBCBCB,E9E9E9', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'], bgAngle: [270, 270, 270, 270, 270], bgRatio: ['0,100', '0,100', '0,100', '0,100', '0,100'], bgAlpha: ['50,50', '60,50', '40,20', '20,10', '30,30'], toolTipBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'], toolTipBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'], baseFontColor: ['555555', '60634E', '025B6A', 'A15E01', '68001B'], tickColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'], trendDarkColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'], trendLightColor: ['f1f1f1', 'F3F5DD', 'EDFBFE', 'FFF5E8', 'FFD1DD'], pointerBorderColor: ['545454', '60634E', '415D6F', '845001', '68001B'], pointerBgColor: ['545454', '60634E', '415D6F', '845001', '68001B'], canvasBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'], canvasBgAngle: [0, 0, 0, 0, 0], canvasBgAlpha: ['100', '100', '100', '100', '100'], canvasBgRatio: ['', '', '', '', ''], canvasBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'], canvasBorderAlpha: [100, 100, 100, 90, 100], altHGridColor: ['EEEEEE', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'], altHGridAlpha: [50, 35, 10, 20, 15], altVGridColor: ['767575', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'], altVGridAlpha: [10, 20, 10, 15, 10], borderColor: ['767575', '545454', '415D6F', '845001', '68001B'], borderAlpha: [50, 50, 50, 50, 50], legendBgColor: ['ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff'], legendBorderColor: ['545454', '545454', '415D6F', '845001', 'D55979'], plotFillColor: ['767575', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'], plotBorderColor: ['999999', '8A8A8A', '6BA9B6', 'C1934D', 'FC819F'], msgLogColor: ['717170', '7B7D6D', '92CDD6', '965B01', '68001B'], TrendLightShadeOffset: 30 },
    domInsertModes = { REPLACE: 'replace', APPEND: 'append', PREPEND: 'prepend' },
    isXSSSafe = function (e, n) {
  return !(n && null !== PROTOCOL_DEF_RE.exec(e)) && null === BAD_CHARS_RE.exec(e);
},
    xssEncode = function (e) {
  return null === e || 'undefined' == typeof e || 'function' != typeof e.toString ? '' : (e = e.toString().replace(/&/g, '&amp;').replace(/\'/g, '&#39;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'), e);
},
    MathExt = { numDecimals: function (e) {
    e = toPrecision(e, 10), e = Math.abs(e);var n = toPrecision(e - Math.floor(e), 10),
        r = (n + '').length - 2;return r = 0 > r ? 0 : r, r;
  }, toRadians: function (e) {
    return e / 180 * Math.PI;
  }, toDegrees: function (e) {
    return 180 * (e / Math.PI);
  }, flashToStandardAngle: function (e) {
    return -1 * e;
  }, standardToFlashAngle: function (e) {
    return -1 * e;
  }, flash180ToStandardAngle: function (e) {
    var n = 360 - (0 > (e %= 360) ? e + 360 : e);return 360 == n ? 0 : n;
  }, getAngularPoint: function (e, n, r, a) {
    a *= Math.PI / 180;var d = e + r * Math.cos(a),
        t = n - r * Math.sin(a);return { x: d, y: t };
  }, remainderOf: function (e, n) {
    return Math.ceil(e % n);
  }, boundAngle: function (e) {
    return 0 <= e ? MathExt.prototype.remainderOf(e, 360) : 360 - MathExt.prototype.remainderOf(Math.abs(e), 360);
  }, toNearestTwip: function (e) {
    var a = e,
        n = 0 > a ? -1 : 1,
        d = Math.abs(a),
        t = Math.round(100 * d),
        r = Math.floor(t / 5),
        o = 2 < +(t - 5 * r + '') ? 5 * r + 5 : 5 * r;return n * (o / 100);
  }, roundUp: function (e, n) {
    n = n ? n : 2;var r = Math.pow(10, n);return e *= r, e = Math.round(+(e + '')), e /= r, e;
  } },
    pi2 = 2 * math.PI,
    normalizeAngle = function (e, n) {
  var r = n ? 360 : pi2;return e = (e || 0) % r, 0 > e ? r + e : e;
},
    canvasBaseColor3DStr = 'canvasBaseColor3D',
    chartPaletteStr = { chart2D: { bgColor: 'bgColor', bgAlpha: 'bgAlpha', bgAngle: 'bgAngle', bgRatio: 'bgRatio', canvasBgColor: 'canvasBgColor', canvasBaseColor: 'canvasBaseColor', divLineColor: 'divLineColor', legendBgColor: 'legendBgColor', legendBorderColor: 'legendBorderColor', toolTipbgColor: 'toolTipbgColor', toolTipBorderColor: 'toolTipBorderColor', baseFontColor: 'baseFontColor', anchorBgColor: 'anchorBgColor' }, chart3D: { bgColor: 'bgColor3D', bgAlpha: 'bgAlpha3D', bgAngle: 'bgAngle3D', bgRatio: 'bgRatio3D', canvasBgColor: 'canvasBgColor3D', canvasBaseColor: 'canvasBaseColor3D', divLineColor: 'divLineColor3D', divLineAlpha: 'divLineAlpha3D', legendBgColor: 'legendBgColor3D', legendBorderColor: 'legendBorderColor3D', toolTipbgColor: 'toolTipbgColor3D', toolTipBorderColor: 'toolTipBorderColor3D', baseFontColor: 'baseFontColor3D', anchorBgColor: 'anchorBgColor3D' } },
    supportedStyle = { font: 'font', fontFamily: 'font-family', "font-family": 'font-family', fontWeight: 'font-weight', "font-weight": 'font-weight', fontSize: 'font-size', "font-size": 'font-size', lineHeight: 'line-height', "line-height": 'line-height', textDecoration: 'text-decoration', "text-decoration": 'text-decoration', color: 'color', whiteSpace: 'white-space', "white-space": 'white-space', padding: 'padding', margin: 'margin', background: 'background', backgroundColor: 'background-color', "background-color": 'background-color', backgroundImage: 'background-image', "background-image": 'background-image', backgroundPosition: 'background-position', "background-position": 'background-position', backgroundPositionLeft: 'background-position-left', "background-position-left": 'background-position-left', backgroundPositionTop: 'background-position-top', "background-position-top": 'background-position-top', backgroundRepeat: 'background-repeat', "background-repeat": 'background-repeat', border: 'border', borderColor: 'border-color', "border-color": 'border-color', borderStyle: 'border-style', "border-style": 'border-style', borderThickness: 'border-thickness', "border-thickness": 'border-thickness', borderTop: 'border-top', "border-top": 'border-top', borderTopColor: 'border-top-color', "border-top-color": 'border-top-color', borderTopStyle: 'border-top-style', "border-top-style": 'border-top-style', borderTopThickness: 'border-top-thickness', "border-top-thickness": 'border-top-thickness', borderRight: 'border-right', "border-right": 'border-right', borderRightColor: 'border-right-color', "border-right-color": 'border-right-color', borderRightStyle: 'border-right-style', "border-right-style": 'border-right-style', borderRightThickness: 'border-right-thickness', "border-right-thickness": 'border-right-thickness', borderBottom: 'border-bottom', "border-bottom": 'border-bottom', borderBottomColor: 'border-bottom-color', "border-bottom-color": 'border-bottom-color', borderBottomStyle: 'border-bottom-style', "border-bottom-style": 'border-bottom-style', borderBottomThickness: 'border-bottom-thickness', "border-bottom-thickness": 'border-bottom-thickness', borderLeft: 'border-left', "border-left": 'border-left', borderLeftColor: 'border-left-color', "border-left-color": 'border-left-color', borderLeftStyle: 'border-left-style', "border-left-Style": 'border-left-style', borderLeftThickness: 'border-left-thickness', "border-left-thickness": 'border-left-thickness' },
    crispFixer = hasSVG ? 0 : .5,
    crispBound = (e = 0, n = 0, r = 0, a = 0, d = 0, t = {}, o) => {
  var i = Math.round,
      l = Math.floor,
      g = Math.abs;if (1 > a || 1 > r) return { x: e, y: n, width: r, height: a, "stroke-width": d };(d >= r || d >= a) && (d = l(Math.min(r, a) / 2) || d);let f = e,
      u = n,
      c = e + r,
      p = d / 2,
      x = d % 2,
      h = n + a;return u = t.top ? i(u) + p - crispFixer : x ? l(u) + .5 - crispFixer : i(u) - crispFixer, h = t.bottom ? i(h) - p - crispFixer : o && t.top ? i(h) + p - crispFixer : x ? l(h) + .5 - crispFixer : i(h) - crispFixer, f = t.left ? i(f) + p - crispFixer : o && t.right ? i(f) - p - crispFixer : x ? l(f) + .5 - crispFixer : i(f) - crispFixer, c = t.right ? i(c) - p - crispFixer : x ? l(c) + .5 - crispFixer : i(c) - crispFixer, { x: f, y: u, width: g(c - f), height: g(h - u), "stroke-width": d };
},
    polyPathToPath = e => {
  var n,
      a,
      d,
      t,
      o,
      l = Math.sin,
      g = Math.cos,
      s = Math.PI,
      f = e[0],
      u = e[1],
      c = e[2],
      p = e[3],
      x = e[4],
      b = e[5];if (n = [], f = win.parseInt(f, 10) || 0, u = toFloat(u) || 0, c = toFloat(c) || 0, p = toFloat(p) || 0, x = null === x || isNaN(x) ? .5 * s : x % 360 * (s / 180), b = null === b || isNaN(b) ? 0 : toFloat(b), t = x, 2 < f) switch (a = 2 * s / f, b) {case 0:
      for (d = 0; d < f; d++) n.push('L', u + p * g(-t), c + p * l(-t)), t += a;n[0] = 'M', n.push('Z');break;case 1:
      for (d = 0; d < f; d++) n.push(M, u, c, 'L', u + p * g(-t), c + p * l(-t)), t += a;break;default:
      for (a *= .5, o = p * g(a) * (1 - b), d = 0; d < f; d++) n.push('L', u + p * g(-t), c + p * l(-t)), t += a, n.push('L', u + o * g(-t), c + o * l(-t)), t += a;n[0] = 'M', n.push('Z');} else 0 === p ? n.push('M', u, c, 'L', u, c, 'Z') : n.push('M', u - p, c, 'A', p, p, 0, 0, 0, u + p, c, 'A', p, p, 0, 0, 0, u - p, c, 'Z');return n;
},
    rgbaToHex = function (e) {
  return e = e.replace('rgba(', BLANKSTRING).split(','), '#' + (COLOR_BLACK + (e[0] << 16 | e[1] << 8 | e[2]).toString(16)).slice(-6);
},
    animHelperFN = { getTimeByValue: function (e, n, r) {
    var a = (e.end - e.start) / (n.endPx - n.startPx);return { start: e.start + a * (r.startPx - n.startPx), end: e.start + a * (r.endPx - n.startPx) };
  }, animByWeight: function (e, n, r, a, d) {
    return a = a || 1, n--, d = d || 0, { start: e / n * r * a + d, end: e / n * r * a + r + d };
  } },
    createElement = (e, n, r) => {
  var a,
      d = doc.createElement(e);for (a in n) d.setAttribute(a, n[a]);return r && r.appendChild && r.appendChild(d), d;
},
    isArray = function () {
  if (Array.isArray) return Array.isArray;var e = Object.prototype.toString,
      n = e.call([]);return function (r) {
    return e.call(r) === n;
  };
}(),
    getEventCoordinate = function () {
  return function (e) {
    return e.pageX === UNDEF && (e.pageX = e.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft, e.pageY = e.clientY + doc.body.scrollTop + doc.documentElement.scrollTop), e;
  };
}(),
    getViewPortDimension = function () {
  var e = 'innerWidth',
      n = 'innerHeight',
      r = doc.documentElement || doc.body,
      a = r;return 'innerWidth' in win ? a = win : (e = 'clientWidth', n = 'clientHeight'), function () {
    return { width: a[e], height: a[n], scrollTop: r.scrollTop, scrollLeft: r.scrollLeft };
  };
}(),
    limitedEvalParser = function () {
  var e = /^@window_/g;return function (n, r, a) {
    var d,
        t,
        o,
        g,
        s,
        f = n.replace(/\[[\'\"]/g, '.').replace(/[\'\"]\]/g, BLANK).replace(/\[/g, '.@window_').replace(/\]/g, BLANK),
        u = f.split('.'),
        c = win,
        p = BLANK;for (g = u.length, s = 0; s < g; s += 1) {
      if (o = u[s], d = c, o.match(e)) t = win[o.replace(e, BLANK)], c = c[t];else if (c === UNDEF || null === c) throw (p || o).replace(e, BLANK) + ' is not defined';else c = c[o];p = o;
    }if (c && ('function' == typeof c.call || c === win.alert)) c === win.alert ? c(r) : a ? c.apply(d, r.split('__FC_ARG_SEP__')) : c.call(d, r);else {
      if ('void' === p) return;setTimeout(function () {
        throw o.replace(e, BLANK) + '() is not a function';
      }, 0);
    }
  };
}(),
    toRaphaelColor = function () {
  var e = {};return function (n) {
    n = n || this;var a,
        d,
        t,
        g,
        s,
        f = n && n.FCcolor || n,
        o = f.color,
        u = f.ratio,
        c = f.angle,
        p = f.alpha,
        x = f.r,
        r = f.cx,
        h = f.cy,
        b = f.fx,
        m = f.fy,
        y = f.gradientUnits,
        I = f.x1,
        R = f.y1,
        C = f.x2,
        F = f.y2,
        v = f.radialGradient,
        D = 1;if ('string' == typeof n) return e[s = '~' + n] || (e[s] = n.replace(/^#?([a-f0-9]{3,6})/ig, '#$1'));if (o = o || BLANK, !o) return a;if (s = [o, p, u, c, x, r, h, y, b, m, I, C, R, F, v].join(UNDERSCORE).replace(/[\(\)\s,\xb0#]/g, UNDERSCORE), e[s]) return e[s];if (u = u && (u + BLANK).split(COMMA) || [], p = (p || 0 === p) && (p + BLANK).split(COMMA) || [], o = o.split(COMMA)) if (a = BLANK, 1 === o.length) g = o[0].replace(/^#?([a-f0-9]{3,6})/ig, '$1'), a = p.length ? 'rgba(' + (0, _libGraphics.HEXtoRGB)(g).join(COMMA) + ',' + .01 * toFloat(p[0]) + ')' : g.replace(/^#?([a-f0-9]{3,6})/ig, '#$1');else {
      for (d = 0, t = o.length; d < t; d++) g = o[d].replace(/^#?([a-f0-9]{3,6})/ig, '$1'), isNaN(u[d]) || (u[d] = toFloat(u[d]), g += COLON + u[d], !isNaN(u[d + 1]) && (u[d + 1] = toFloat(u[d + 1]) + u[d])), isNaN(p[d]) || p[d] === BLANK || (D = .01 * p[d]), o[d] = 'rgba(' + (0, _libGraphics.HEXtoRGB)(g).join(COMMA) + ',' + D + ')', isNaN(u[d]) || (u[d] === u[d - 1] && (u[d] += .001), o[d] = o[d] + COLON + u[d]);a += o.join(HYPHEN), x !== UNDEF || b !== UNDEF || r !== UNDEF || f.radialGradient ? a = 'xr(' + [b, m, x, r, h, y].join(',') + ')' + a : (a = HYPHEN + a, (I !== UNDEF || R !== UNDEF || C !== UNDEF || F !== UNDEF) && (a = '(' + [I, R, C, F, y].join(',') + ')' + a), c === UNDEF && (c = 0), a = 360 - toFloat(c) % 360 + a);
    }return e[s] = a;
  };
}(),
    gradientify = function () {
  return function () {
    return '';
  };
}(),
    parseTooltext = function () {
  var e,
      n = [{ regex: /((^|[^\\])((\\)\\)*\$cleanvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cleanvalue))/ig, argIndex: 2, argKey: 'cleanvalue' }, { regex: /((^|[^\\])((\\)\\)*\$datavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datavalue))/ig, argIndex: 2, argKey: 'formattedValue' }, { regex: /((^|[^\\])((\\)\\)*\$value)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$value))/ig, argIndex: 3, argKey: 'value' }, { regex: /((^|[^\\])((\\)\\)*\$label)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$label))/ig, argIndex: 2, argKey: 'label' }, { regex: /((^|[^\\])((\\)\\)*\$seriesname)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$seriesname))/ig, argIndex: 5, argKey: 'seriesname' }, { regex: /((^|[^\\])((\\)\\)*\$yaxisname)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yaxisname))/ig, argIndex: 2, argKey: 'yaxisName' }, { regex: /((^|[^\\])((\\)\\)*\$xaxisname)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxisname))/ig, argIndex: 2, argKey: 'xaxisName' }, { regex: /((^|[^\\])((\\)\\)*\$displayvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$displayvalue))/ig, argIndex: 3, argKey: 'displayvalue' }, { regex: /((^|[^\\])((\\)\\)*\$xdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xdatavalue))/ig, argIndex: 2, argKey: 'xDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$ydatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$ydatavalue))/ig, argIndex: 2, argKey: 'yDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$xvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xvalue))/ig, argIndex: 3, argKey: 'x' }, { regex: /((^|[^\\])((\\)\\)*\$yvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yvalue))/ig, argIndex: 3, argKey: 'y' }, { regex: /((^|[^\\])((\\)\\)*\$zvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zvalue))/ig, argIndex: 3, argKey: 'z' }, { regex: /((^|[^\\])((\\)\\)*\$name)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$name))/ig, argIndex: 3, argKey: 'name' }, { regex: /((^|[^\\])((\\)\\)*\$percentValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentValue))/ig, argIndex: 2, argKey: 'percentValue' }, { regex: /((^|[^\\])((\\)\\)*\$startValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startValue))/ig, argIndex: 2, argKey: 'startValue' }, { regex: /((^|[^\\])((\\)\\)*\$startDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startDataValue))/ig, argIndex: 2, argKey: 'startDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$endValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endValue))/ig, argIndex: 2, argKey: 'endValue' }, { regex: /((^|[^\\])((\\)\\)*\$endDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endDataValue))/ig, argIndex: 2, argKey: 'endDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$axisName)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$axisName))/ig, argIndex: 2, argKey: 'axisName' }, { regex: /((^|[^\\])((\\)\\)*\$cumulativevalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativevalue))/ig, argIndex: 2, argKey: 'cumulativeValue' }, { regex: /((^|[^\\])((\\)\\)*\$cumulativedatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativedatavalue))/ig, argIndex: 2, argKey: 'cumulativeDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$cumulativePercentValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativePercentValue))/ig, argIndex: 2, argKey: 'cumulativePercentValue' }, { regex: /((^|[^\\])((\\)\\)*\$cumulativepercentdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativepercentdatavalue))/ig, argIndex: 2, argKey: 'cumulativePercentDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$sum)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sum))/ig, argIndex: 2, argKey: 'sum' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedsum)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsum))/ig, argIndex: 2, argKey: 'unformattedSum' }, { regex: /((^|[^\\])((\\)\\)*\$targetvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetvalue))/ig, argIndex: 2, argKey: 'targetValue' }, { regex: /((^|[^\\])((\\)\\)*\$targetdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetdatavalue))/ig, argIndex: 2, argKey: 'targetDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$processname)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$processname))/ig, argIndex: 2, argKey: 'processName' }, { regex: /((^|[^\\])((\\)\\)*\$start)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$start))/ig, argIndex: 2, argKey: 'start' }, { regex: /((^|[^\\])((\\)\\)*\$end)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$end))/ig, argIndex: 2, argKey: 'end' }, { regex: /((^|[^\\])((\\)\\)*\$percentcomplete)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentcomplete))/ig, argIndex: 2, argKey: 'percentComplete' }, { regex: /((^|[^\\])((\\)\\)*\$taskpercentcomplete)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskpercentcomplete))/ig, argIndex: 2, argKey: 'taskPercentComplete' }, { regex: /((^|[^\\])((\\)\\)*\$taskstartdate)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskstartdate))/ig, argIndex: 2, argKey: 'taskStartDate' }, { regex: /((^|[^\\])((\\)\\)*\$taskenddate)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskenddate))/ig, argIndex: 2, argKey: 'taskEndDate' }, { regex: /((^|[^\\])((\\)\\)*\$tasklabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tasklabel))/ig, argIndex: 2, argKey: 'taskLabel' }, { regex: /((^|[^\\])((\\)\\)*\$date)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$date))/ig, argIndex: 2, argKey: 'date' }, { regex: /((^|[^\\])((\\)\\)*\$percentofprevvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentofprevvalue))/ig, argIndex: 2, argKey: 'percentOfPrevValue' }, { regex: /((^|[^\\])((\\)\\)*\$sname)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sname))/ig, argIndex: 2, argKey: 'sName' }, { regex: /((^|[^\\])((\\)\\)*\$lname)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lname))/ig, argIndex: 2, argKey: 'lName' }, { regex: /((^|[^\\])((\\)\\)*\$fromid)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromid))/ig, argIndex: 2, argKey: 'fromId' }, { regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig, argIndex: 2, argKey: 'fromLabel' }, { regex: /((^|[^\\])((\\)\\)*\$toid)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toid))/ig, argIndex: 2, argKey: 'toId' }, { regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig, argIndex: 2, argKey: 'toLabel' }, { regex: /((^|[^\\])((\\)\\)*\$fromxvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxvalue))/ig, argIndex: 2, argKey: 'fromXValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromyvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromyvalue))/ig, argIndex: 2, argKey: 'fromYValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromxdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxdatavalue))/ig, argIndex: 2, argKey: 'fromXDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromydatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromydatavalue))/ig, argIndex: 2, argKey: 'fromYDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig, argIndex: 2, argKey: 'fromLabel' }, { regex: /((^|[^\\])((\\)\\)*\$toxvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxvalue))/ig, argIndex: 2, argKey: 'toXValue' }, { regex: /((^|[^\\])((\\)\\)*\$toyvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toyvalue))/ig, argIndex: 2, argKey: 'toYValue' }, { regex: /((^|[^\\])((\\)\\)*\$toxdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxdatavalue))/ig, argIndex: 2, argKey: 'toXDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$toydatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toydatavalue))/ig, argIndex: 2, argKey: 'toYDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig, argIndex: 2, argKey: 'toLabel' }, { regex: /((^|[^\\])((\\)\\)*\$openvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$openvalue))/ig, argIndex: 2, argKey: 'openValue' }, { regex: /((^|[^\\])((\\)\\)*\$closevalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closevalue))/ig, argIndex: 2, argKey: 'closeValue' }, { regex: /((^|[^\\])((\\)\\)*\$highvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highvalue))/ig, argIndex: 2, argKey: 'highValue' }, { regex: /((^|[^\\])((\\)\\)*\$lowvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowvalue))/ig, argIndex: 2, argKey: 'lowValue' }, { regex: /((^|[^\\])((\\)\\)*\$opendatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$opendatavalue))/ig, argIndex: 2, argKey: 'openDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$closedatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closedatavalue))/ig, argIndex: 2, argKey: 'closeDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$highdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highdatavalue))/ig, argIndex: 2, argKey: 'highDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$lowdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowdatavalue))/ig, argIndex: 2, argKey: 'lowDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$maxvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxvalue))/ig, argIndex: 2, argKey: 'maxValue' }, { regex: /((^|[^\\])((\\)\\)*\$maxdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxdatavalue))/ig, argIndex: 2, argKey: 'maxDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$minvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$minvalue))/ig, argIndex: 2, argKey: 'minValue' }, { regex: /((^|[^\\])((\\)\\)*\$mindatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mindatavalue))/ig, argIndex: 2, argKey: 'minDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$q1)/ig, argIndex: 2, argKey: 'Q1' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedQ1)/ig, argIndex: 2, argKey: 'unformattedQ1' }, { regex: /((^|[^\\])((\\)\\)*\$q3)/ig, argIndex: 2, argKey: 'Q3' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedQ3)/ig, argIndex: 2, argKey: 'unformattedQ3' }, { regex: /((^|[^\\])((\\)\\)*\$median)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$median))/ig, argIndex: 2, argKey: 'median' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMedian)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMedian))/ig, argIndex: 2, argKey: 'unformattedMedian' }, { regex: /((^|[^\\])((\\)\\)*\$SD)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$SD))/ig, argIndex: 2, argKey: 'SD' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedsd)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsd))/ig, argIndex: 2, argKey: 'unformattedsd' }, { regex: /((^|[^\\])((\\)\\)*\$QD)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$QD))/ig, argIndex: 2, argKey: 'QD' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedQD)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedQD))/ig, argIndex: 2, argKey: 'unformattedQD' }, { regex: /((^|[^\\])((\\)\\)*\$MD)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$MD))/ig, argIndex: 2, argKey: 'MD' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMD)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMD))/ig, argIndex: 2, argKey: 'unformattedMD' }, { regex: /((^|[^\\])((\\)\\)*\$mean)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mean))/ig, argIndex: 2, argKey: 'mean' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig, argIndex: 2, argKey: 'unformattedMean' }, { regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig, argIndex: 2, argKey: 'unformattedMean' }, { regex: /((^|[^\\])((\\)\\)*\$volumeValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeValue))/ig, argIndex: 2, argKey: 'volumeValue' }, { regex: /((^|[^\\])((\\)\\)*\$volumeDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeDataValue))/ig, argIndex: 2, argKey: 'volumeDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromXValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXValue))/ig, argIndex: 2, argKey: 'fromXValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromYValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYValue))/ig, argIndex: 2, argKey: 'fromYValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromXDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXDataValue))/ig, argIndex: 2, argKey: 'fromXDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromYDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYDataValue))/ig, argIndex: 2, argKey: 'fromYDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$fromLabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromLabel))/ig, argIndex: 2, argKey: 'fromLabel' }, { regex: /((^|[^\\])((\\)\\)*\$toXValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXValue))/ig, argIndex: 2, argKey: 'toXValue' }, { regex: /((^|[^\\])((\\)\\)*\$toYValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYValue))/ig, argIndex: 2, argKey: 'toYValue' }, { regex: /((^|[^\\])((\\)\\)*\$toXDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXDataValue))/ig, argIndex: 2, argKey: 'toXDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$toYDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYDataValue))/ig, argIndex: 2, argKey: 'toYDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig, argIndex: 2, argKey: 'toLabel' }, { regex: /((^|[^\\])((\\)\\)*\$tlLabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlLabel))/ig, argIndex: 5, argKey: 'tlLabel' }, { regex: /((^|[^\\])((\\)\\)*\$trlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trlabel))/ig, argIndex: 5, argKey: 'trLabel' }, { regex: /((^|[^\\])((\\)\\)*\$bllabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$bllabel))/ig, argIndex: 5, argKey: 'blLabel' }, { regex: /((^|[^\\])((\\)\\)*\$brlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brlabel))/ig, argIndex: 5, argKey: 'brLabel' }, { regex: /((^|[^\\])((\\)\\)*\$rowlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$rowlabel))/ig, argIndex: 5, argKey: 'rowLabel' }, { regex: /((^|[^\\])((\\)\\)*\$columnlabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$columnlabel))/ig, argIndex: 5, argKey: 'columnLabel' }, { regex: /((^|[^\\])((\\)\\)*\$errorvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorvalue))/ig, argIndex: 2, argKey: 'errorValue' }, { regex: /((^|[^\\])((\\)\\)*\$errordatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errordatavalue))/ig, argIndex: 2, argKey: 'errorDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$errorpercentvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentvalue))/ig, argIndex: 2, argKey: 'errorPercentValue' }, { regex: /((^|[^\\])((\\)\\)*\$errorpercentdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentdatavalue))/ig, argIndex: 2, argKey: 'errorPercentDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorValue))/ig, argIndex: 2, argKey: 'horizontalErrorValue' }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorDataValue))/ig, argIndex: 2, argKey: 'horizontalErrorDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorValue))/ig, argIndex: 2, argKey: 'verticalErrorValue' }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorDataValue))/ig, argIndex: 2, argKey: 'verticalErrorDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercent)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentValue))/ig, argIndex: 2, argKey: 'horizontalErrorPercentValue' }, { regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercentDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentDataValue))/ig, argIndex: 2, argKey: 'horizontalErrorPercentDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercent)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentValue))/ig, argIndex: 2, argKey: 'verticalErrorPercentValue' }, { regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercentDataValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentDataValue))/ig, argIndex: 2, argKey: 'verticalErrorPercentDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$xaxispercentvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxispercentvalue))/ig, argIndex: 2, argKey: 'xAxisPercentValue' }, { regex: /((^|[^\\])((\\)\\)*\$percentdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentdatavalue))/ig, argIndex: 2, argKey: 'percentDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$trType)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trType))/ig, argIndex: 4, argKey: 'trtype' }, { regex: /((^|[^\\])((\\)\\)*\$tlType)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlType))/ig, argIndex: 4, argKey: 'tltype' }, { regex: /((^|[^\\])((\\)\\)*\$brType)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brType))/ig, argIndex: 4, argKey: 'brtype' }, { regex: /((^|[^\\])((\\)\\)*\$blType)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$blType))/ig, argIndex: 4, argKey: 'bltype' }, { regex: /((^|[^\\])((\\)\\)*\$colorRangeLabel)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$colorRangeLabel))/ig, argIndex: 5, argKey: 'colorRangeLabel' }, { regex: /((^|[^\\])((\\)\\)*\$zdatavalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zdatavalue))/ig, argIndex: 2, argKey: 'zDataValue' }, { regex: /((^|[^\\])((\\)\\)*\$svalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$svalue))/ig, argIndex: 3, argKey: 'svalue' }, { regex: /((^|[^\\])((\\)\\)*\$positiveErrorValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$positiveErrorValue))/ig, argIndex: 2, argKey: 'positiveErrorValue' }, { regex: /((^|[^\\])((\\)\\)*\$negativeErrorValue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$negativeErrorValue))/ig, argIndex: 2, argKey: 'negativeErrorValue' }, { regex: /((^|[^\\])((\\)\\)*\$datasvalue)/ig, escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datasvalue))/ig, argIndex: 2, argKey: 'formattedsValue' }],
      r = [],
      a = n.length;for (e = 0; e < a; e += 1) r.push(e);return function () {
    var e,
        a,
        d,
        t,
        o,
        g = arguments[0],
        s = arguments[1];if (isArray(s) || (s = r), g) for (o = s.length, t = 0; t < o; t += 1) d = n[s[t]], d && (e = regReplaceEscape(getValidValue((a = arguments[d.argIndex]) && a[d.argKey], BLANK) + BLANK), g = g.replace(d.regex, '$2$4' + (d.parsingMethod ? d.parsingMethod(e) : e)), g = g.replace(d.escapeRegex, '$2$4$5'));return g;
  };
}(),
    getAxisLimits = function () {
  var e,
      n,
      r,
      a = Math.pow,
      d = Math.floor,
      t = Math.abs;return e = function (e, n, a, o, i) {
    var l,
        g = t(n - e),
        s = g / (a + 1);return r(g, a, o) || (i && (l = 1 < o ? 2 : .5, +s / +o < l && (o /= 10)), s = (d(s / o) + 1) * o, g = s * (a + 1)), g;
  }, n = function (e) {
    e = t(e);var n = e + '',
        r = 0,
        a = n.indexOf(DECIMALSTRING);return -1 != a && (r = n.length - a - 1), r;
  }, r = function (e, r, a) {
    return !(n(e / (r + 1)) > n(a));
  }, function (n, o, l, g, s, f, u, c) {
    var p,
        x,
        h,
        b,
        m,
        y,
        I,
        R,
        C,
        F,
        v,
        D,
        S,
        K,
        A,
        E,
        k,
        B,
        L,
        T,
        V,
        P,
        w,
        O,
        _,
        N,
        G,
        z,
        H,
        X = Math.LN10,
        Y = Math.log,
        M = 0;if (n = !0 === isNaN(n) || n === UNDEF ? .1 : n, o = !0 === isNaN(o) || o === UNDEF ? 0 : o, n === o && 0 === n && (n = .1), s = 'undefined' == typeof s || s, f = 'undefined' == typeof f || f, I = d(Y(t(n)) / X), R = d(Y(t(o)) / X), C = Math.max(R, I), F = a(10, C), 2 > t(n) / F && 2 > t(o) / F && (C--, F = a(10, C)), v = d(Y(n - o) / X), D = a(10, v), 0 < n - o && 10 <= F / D && (F = D, C = v), S = (d(n / F) + 1) * F, 0 > o ? K = -1 * ((d(t(o / F)) + 1) * F) : f ? K = 0 : (K = d(t(o / F) - 1) * F, K = 0 > K ? 0 : K), s && 0 >= n && (S = 0), p = !!(l || 0 === l), x = !!(g || 0 === g), h = !1 === p || !0 === p && +l < n && n - +l > EPSILON ? S : +l, b = !1 === x || !0 === x && +g > o && +g - o > EPSILON ? K : +g, m = t(h - b), y = F, !(!1 === x && !1 === p && c)) c && (H = function (e, n, a) {
      for (var d, t = 0, o = 1; d = e + t * o, d = 0 === d ? 1 : d, !r(n, d, a);) {
        if (t = -1 == o || t > e ? ++t : t, 25 < t) {
          d = 0;break;
        }o = t <= e ? -1 * o : 1;
      }return d;
    }, 0 < u && (N = H(u, m, y), 0 === N && (N = H(u, m + 1, y), M = 1), u = N));else if (0 < h && 0 > b) {
      for (E = !1, k = 10 < y ? y / 10 : y, B = e(b, h, u, k, !1), L = B - (u + 1) * k; !1 === E;) if (L += (u + 1) * k, r(L, u, k)) if (A = L - m, T = L / (u + 1), P = Math.min(t(b), h), V = P == t(b) ? -1 : 1, 0 === u) E = !0;else for (O = 1; O <= d((u + 1) / 2); O++) if (w = T * O, !(w - P > A)) if (w > P) z = L - w, z / T == d(z / T) && w / T == d(w / T) && (m = L, h = -1 == V ? z : w, b = -1 == V ? -w : -z, E = !0);else continue;
    } else _ = e(b, h, u, y, !0), A = _ - m, m = _, 0 < h ? h += A : b -= A;return G = (h - b + M) / (u + 1), { Max: h, Min: b, Range: m, interval: y, divGap: G };
  };
}(),
    createDialog = function () {
  var e = function (e, n, r) {
    var a,
        d = r.jsVars && r.jsVars.smartLabel,
        t = e.offsetWidth,
        o = e.offsetHeight,
        i = this.chart,
        l = this.title,
        g = r._chartMessageImageStyle,
        s = getImageURL(n);l.y = o / 2, l.x = t / 2, i.bgSWF = l.text = UNDEF, n = s.string, s.image ? (i.bgSWF = n, i.bgImageHAlign = g.imageHAlign, i.bgImageVAlign = g.imageVAlign, i.bgImageScale = g.imageScale, i.bgSWFAlpha = g.imageAlpha) : n !== UNDEF && (d ? (setLineHeight(l.style), d.setStyle(l.style), a = d.getSmartText(parseUnsafeString(n), t, o), l.text = a.text) : l.text = parseUnsafeString(n), l.verticalAlign = 'middle'), l.style = r._chartMessageStyle, delete r._chartMessageImageStyle, delete r._chartMessageStyle;
  };return e.prototype = { chart: { events: {}, margin: [0, 0, 0, 0], backgroundColor: { FCcolor: { alpha: 0 } } }, credits: { href: CREDIT_HREF, text: CREDIT_STRING, enabled: creditLabel }, legend: { enabled: !1 }, title: { text: '', style: { fontFamily: 'Verdana,sans', fontSize: '10px', color: '#666666' } }, plotOptions: { series: {} }, series: [{}], exporting: { enabled: !1 }, nativeMessage: !0 }, e.prototype.constructor = e;
}(),
    interActiveEvtList = { click: !0, dragstart: !0, dragmove: !0, dragend: !0, dblclick: !0, mousedown: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, touchstart: touchEnabled || hasTouch, touchmove: touchEnabled || hasTouch, touchend: touchEnabled || hasTouch, touchcancel: touchEnabled || hasTouch },
    regex = { stripWhitespace: stripWhitespace, dropHash: dropHash, startsRGBA: startsRGBA, cleanColorCode: cleanColorCode, breakPlaceholder: breakPlaceholder, hexcode: hexcode },
    preDefStr = { colors: { B90000: 'B90000', FFFFFF: 'FFFFFF', AAAAAA: 'AAAAAA', c000000: '000000' }, BLANK: '', DATASET: 'dataset', NORMALSTRING: 'normal', PX: 'px', INPUT: 'input', LABEL: 'label', BLANKSPACE: ' ', COMMA: ',', OBJECTBOUNDINGBOX: 'objectBoundingBox', GROUPID: 'groupId', EVENTARGS: 'eventArgs', CIRCLE: 'circle', POLYGON: 'polygon', SPOKE: 'spoke', RECTANGLE: 'rectangle', ROLLOUT: 'rollout', ROLLOVER: 'rollover', DATAPLOTCLICK: 'dataplotclick', defaultFontStr: 'Verdana,sans', line: 'line', bar: 'bar', column: 'column', volume: 'volume', HUNDREDSTRING: '100', SEVENTYSTRING: '70', NINETYSTRING: '90', AUTOSTRING: 'auto', configStr: 'config', animationObjStr: 'animationObj', showHoverEffectStr: 'showHoverEffect', hiddenStr: 'hidden', visibleStr: 'visible', columnStr: 'columns', barStr: 'bars', barHotStr: 'bar-hot', colHotStr: 'col-hot', shadowStr: 'shadow', dataLabelStr: 'datalabel', errorBarStr: 'errorBar', errorHotStr: 'error-hot', errorShadowStr: 'error-shadow', negativeValueStr: 'negative-values', positiveValueStr: 'positive-values', zeroPlaneStr: 'zero-plane', categoryPlotsStr: 'categoryplots', noneStr: 'none', setRolloverAttrStr: 'setRolloverAttr', setRolloutAttrStr: 'setRolloutAttr', elementStr: 'element', hotElementStr: 'hotElement', strokeWidthStr: 'stroke-width', strokeDashStr: 'stroke-dasharray', strokeLineJoinStr: 'stroke-linejoin', miterStr: 'miter', visiblilityStr: 'visibility', ROUND: 'round', PERCENTAGESTRING: '%', pStr: 'p', sStr: 's', divLineAlpha3DStr: 'divLineAlpha3D', divLineAlphaStr: 'divLineAlpha', altVGridColorStr: 'altVGridColor', altVGridAlphaStr: 'altVGridAlpha', altHGridColorStr: 'altHGridColor', altHGridAlphaStr: 'altHGridAlpha', PLOTFILLCOLOR_STR: 'plotFillColor', UNDERSCORE: '_', gaugeFillColorStr: 'gaugeFillColor', gaugeBorderColorStr: 'gaugeBorderColor', NORMAL: 'normal', BOLD: 'bold', POINTER: 'pointer', DEFAULT: 'default', POSITION_MIDDLE: 'middle', POSITION_START: 'start', POSITION_TOP: 'top', POSITION_BOTTOM: 'bottom', POSITION_END: 'end' },
    appliedCSS = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle'],
    safeMax = function (e = [], n) {
  var r,
      a,
      d = e.length,
      t = -1;if ('function' == typeof n) {
    for (; ++t < d;) if (r = n(e[t], t, e), null != r && r >= r) for (a = r; ++t < d;) r = n(e[t], t, e), null != r && r > a && (a = r);
  } else for (; ++t < d;) if (r = e[t], null != r && r >= r) for (a = r; ++t < d;) r = e[t], null != r && r > a && (a = r);return a;
},
    safeMin = function (e = [], n) {
  var r,
      a,
      d = e.length,
      t = -1;if ('function' == typeof n) {
    for (; ++t < d;) if (r = n(e[t], t, e), null != r && r <= r) for (a = r; ++t < d;) r = n(e[t], t, e), null != r && r < a && (a = r);
  } else for (; ++t < d;) if (r = e[t], null != r && r <= r) for (a = r; ++t < d;) r = e[t], null != r && r < a && (a = r);return a;
},
    extent = function (e = [], n) {
  var r = safeMax(e, n),
      a = safeMin(e, n);return [a, r];
};function defined(e) {
  return 'undefined' != typeof e && null !== e;
}function pInt(e, n) {
  return parseInt(e, n || 10);
}function getContainerBackgroundColor(e) {
  var n = e.options,
      r = n.containerBackgroundColor,
      a = n.containerBackgroundOpacity;return defined(e.jsVars.transparent) ? a = e.jsVars.transparent ? 0 : 1 : (a = parseFloat(a), 0 > a ? a = 0 : 1 < a && (a = 1)), r || (r = '#ffffff'), isIE && !hasSVG ? a ? r : 'transparent' : (r = r.replace(/^#?([a-f0-9]+)/ig, '$1'), r = (0, _libGraphics.HEXtoRGB)(r), r[3] = a.toString(), 'rgba(' + r.join(',') + ')');
}function hashify(e) {
  return e && e.replace(/^#?([a-f0-9]+)/ig, '#$1') || 'none';
}function addElScrollEvent(e) {
  e.data && (e.data.elScroll = !1);
}function getPosition(e, n) {
  var r,
      a,
      d = { top: 0, left: 0 },
      t = n && n.config,
      o = n && (n.eventListeners || (n.eventListeners = [])),
      i = n && (t.isEvntAdded || (t.isEvntAdded = !1)),
      l = () => {
    let e;return e = isIE11 ? doc.documentElement.scrollTop : isEdge ? doc.body.scrollTop : win.pageYOffset, e;
  },
      g = () => {
    let e;return e = isIE11 ? doc.documentElement.scrollLeft : isEdge ? doc.body.scrollLeft : win.pageXOffset, e;
  };if (e) {
    for (d.top = e.offsetTop, d.left = e.offsetLeft, r = e; (r = r.parentNode) && 'BODY' !== r.tagName;) a = win.getComputedStyle(r).getPropertyValue('position'), /fixed/.test(a) && n && (t.itemFixed = !0), d.top -= r.scrollTop || 0, d.left -= r.scrollLeft || 0, n && !i && o.push(_domEvent2.default.listen(r, 'scroll', addElScrollEvent, t));for (; r;) d.top -= r.scrollTop || 0, d.left -= r.scrollLeft || 0, r = r.parentNode;for (e = e.offsetParent; e;) d.top += e.offsetTop, d.left += e.offsetLeft, e = e.offsetParent;d.top += pluckNumber(l(), win.scrollY, doc.documentElement.scrollTop), d.left += pluckNumber(g(), win.scrollX, doc.documentElement.scrollLeft), n && !i && o.push(_domEvent2.default.listen(win, 'resize', addElScrollEvent, t)), n && !i && o.push(_domEvent2.default.listen(win, 'scroll', addElScrollEvent, t)), n && !i && (t.isEvntAdded = !0);
  }return d;
}function clampNumber(e, n = -Infinity, r = 1 / 0) {
  return e <= n ? n : e >= r ? r : e;
}function pluckNumber() {
  var e, n, r;for (n = 0, r = arguments.length; n < r; n += 1) {
    if (e = arguments[n], !e && !1 !== e && 0 !== e) continue;else if (isNaN(e = +e)) continue;return e;
  }return UNDEF;
}function getTouchEvent(n) {
  var r = n && (n.sourceEvent || n.originalEvent || n);return touchEnabled && r && r.touches && r.touches[0] || r || stubEvent;
}function fcEach(e, n, r, a) {
  if (r || (r = e), a || (a = {}), isArray(e)) {
    for (d = 0; d < e.length; d += 1) if (!1 === n.call(r, e[d], d, e, a)) return d;
  } else if (null !== e && e !== UNDEF) for (var d in e) if (!1 === n.call(r, e[d], d, e, a)) return d;
}function selectionEventHandler(e) {
  var n,
      r,
      a,
      d = e.data,
      t = d.chart,
      o = t.getFromEnv('animationManager'),
      i = e.state,
      l = getEventCoordinate(getTouchEvent(e.originalEvent)),
      g = t.getChildren('canvas')[0],
      s = n = g.getGraphicalElement('resizeBox'),
      f = d.layerX = l.pageX - d.chartPosLeft,
      u = d.layerY = l.pageY - d.chartPosTop,
      c = f - d.ox,
      p = u - d.oy,
      h = d.bBox,
      b = d.ox,
      m = d.oy,
      I = d.zoomX,
      R = d.zoomY,
      C = d.canvasY,
      F = d.canvasX,
      v = d.canvasW,
      D = d.canvasH,
      S = d.canvasX2,
      K = d.canvasY2,
      A = d.strokeWidth,
      E = d.attr,
      k = this;switch (i) {case 'start':
      r = getPosition(k), d.chartPosLeft = r.left, d.chartPosTop = r.top, f = l.pageX - d.chartPosLeft, u = l.pageY - d.chartPosTop, d.oy = u, d.ox = f, d.allowMove = !1, E.x = 0, E.y = 0, E.height = 0, E.width = 0, s = g.addGraphicalElement('resizeBox', o.setAnimation({ el: n || 'rect', attr: E, container: t.getChildContainer('trackerGroup') })).show(), n || g.addGraphicalElement('resizeBox', s), f > F && f < S && u > C && u < K && (d.allowMove = !0), e.target._isTrackerElem && (d.allowMove = !1);break;case 'end':
      h = s.getBBox(), a = { chart: t, selectionLeft: h.x, selectionTop: h.y, selectionHeight: h.height, selectionWidth: h.width, originalEvent: e.originalEvent }, d.isDragged && (d.selectionEnd && d.selectionEnd(a), d.isDragged = 0), s.hide(), delete d.oy, delete d.ox;break;default:
      if (!d.allowMove) return;c = f - d.ox, p = u - d.oy, h = d.bBox, b = d.ox, m = d.oy, d.isDragged || (a = { chart: t, selectionLeft: (I ? mathMin(b, b + c) : F) + .5 * A, selectionTop: (R ? mathMin(m, m + p) : C) + .5 * A, selectionHeight: 0, selectionWidth: 0, originalEvent: e.originalEvent }, d.selectionStart && d.selectionStart(a), d.isDragged = 1), c = -(b - mathMin(b - (b - mathMax(b + c, F)), S)), p = -(m - mathMin(m - (m - mathMax(m + p, C)), K)), o.setAnimation({ el: s, attr: { x: (I ? mathMin(b, b + c) : F) + .5 * A, y: (R ? mathMin(m, m + p) : C) + .5 * A, width: I ? mathAbs(c) : v, height: R ? mathAbs(p) : D } });}
}function onXYCanvasClick(n) {
  var r = n.data,
      a = n.originalEvent,
      e = a.target || a.originalTarget || a.srcElement || a.relatedTarget || a.fromElement,
      d = a.type,
      t = a.layerX,
      o = a.layerY;t === UNDEF && (t = a.pageX - r.chartPosLeft, o = a.pageY - r.chartPosTop), 'mousedown' === d && (e.ishot = t > r.canvasX && t < r.canvasX2 && o > r.canvasY && o < r.canvasY2), 'mouseup' === d && setTimeout(function () {
    e.ishot = !1;
  }, 1);
}function capitalizeString(e, n) {
  return e ? e.replace(n ? /(^|\s)([a-z])/g : /(^|\s)([a-z])/, function (e, n, r) {
    return n + r.toUpperCase();
  }) : e;
}function getFirstValue() {
  var e, n, r;for (n = 0, r = arguments.length; n < r; n += 1) if (e = arguments[n], e || !1 === e || 0 === e) return e;return BLANK;
}function bindSelectionEvent(e, n) {
  n = n || {};var r = e.config,
      a = e.getFromEnv('chart-container'),
      d = r.zoomType,
      t = (0, _raphael2.default)({}, n.attr || {}),
      o = t['stroke-width'] = pluckNumber(t.strokeWidth, t['stroke-width'], 1),
      i = e.eventListeners || (e.eventListeners = []),
      l = getPosition(a, e);n = (0, _raphael2.default)({ chart: e, zoomX: /x/.test(d), zoomY: /y/.test(d), canvasY: r.canvasTop, canvasX: r.canvasLeft, canvasW: r.canvasWidth, canvasH: r.canvasHeight, canvasX2: r.canvasLeft + r.canvasWidth, canvasY2: r.canvasTop + r.canvasHeight, strokeWidth: o, chartPosLeft: l.left, chartPosTop: l.top, attr: t }, n), t.stroke = getFirstValue(t.stroke, 'rgba(51,153,255,0.8)'), t.fill = getFirstValue(t.fill, 'rgba(185,213,241,0.3)'), a && (_domEvent2.default.unlisten(a, 'pointerdrag', selectionEventHandler), i.push(_domEvent2.default.listen(a, 'pointerdrag', selectionEventHandler, n))), r.link && (_domEvent2.default.unlisten(e.getFromEnv('chart-container'), 'mouseup mousedown', onXYCanvasClick), i.push(_domEvent2.default.listen(e.getFromEnv('chart-container'), 'mouseup mousedown', onXYCanvasClick, n)));
}function regescape(e) {
  return e && e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}function regReplaceEscape(e) {
  return e && e.replace(/\$/g, '$$$$');
}function getValidValue(e, n) {
  return e || !1 === e || 0 === e ? e : n;
}function getDefinedColor(e, n) {
  return e || 0 === e || e === BLANK ? e : n;
}function pluck() {
  var e, n, r;for (n = 0, r = arguments.length; n < r; n += 1) if (e = arguments[n], e || !1 === e || 0 === e) return e;return UNDEF;
}function getMouseCoordinate(e, n, r) {
  var a,
      d = doc.webkitIsFullScreen || doc.mozFullScreen || doc.msFullscreenElement || void 0 !== doc.fullscreenElement,
      t = getEventCoordinate(getTouchEvent(n)),
      o = d ? t.clientX : t.pageX,
      i = d ? t.clientY : t.pageY,
      l = r && r.config,
      g = n.type,
      s = l && l.itemFixed,
      f = s ? win.pageYOffset || win.scrollY || doc.documentElement.scrollTop : 0,
      u = s ? win.pageXOffset || win.scrollX || doc.documentElement.scrollLeft : 0;return l && l.elScroll ? a = l.posOb : (l && (l.elScroll = !0), a = getPosition(e, r), l && (l.posOb = a)), 'touchend' === g ? (o = prevPageX, i = prevPageY) : ('touchmove' === g || 'touchstart' === g) && (prevPageX = o, prevPageY = i), { chartX: o - a.left - u, chartY: i - a.top - f, pageX: o, pageY: i };
}function dehashify(e) {
  return e && e.replace(/^#?([a-f0-9]+)/ig, '$1') || 'none';
}function getFirstDefinedValue() {
  var e, n, r;for (n = 0, r = arguments.length; n < r; n += 1) if (e = arguments[n], e || !1 === e || 0 === e || e == BLANK) return e;return UNDEF;
}function pluckFontSize() {
  var e, n, r;for (n = 0, r = arguments.length; n < r; n += 1) {
    if (e = arguments[n], !e && !1 !== e && 0 !== e) continue;else if (isNaN(e = +e)) continue;return 1 > e ? 1 : e;
  }return 1;
}function parsePointValue(e, n) {
  return e = e || !1 === e || 0 === e ? +e : NaN, isNaN(e) ? null : n ? mathAbs(e) : e;
}function parseUnsafeString(e) {
  return 'string' == typeof e ? e.replace(breakPlaceholder, BREAKSTRING) : BLANK;
}function getFirstColor(e, n) {
  return e = e.split(COMMA)[n || 0], e = e.replace(stripWhitespace, BLANK), e == BLANK && (e = COLOR_BLACK), e.replace(dropHash, HASHSTRING);
}function getColorCodeString(e, n) {
  var r,
      a,
      d = '',
      t = 0,
      o = n.split(COMMA);for (a = o.length; t < a; t += 1) r = o[t].split('-'), d += 2 === r.length ? '-1' === r[0].indexOf('dark') ? (0, _libGraphics.getDarkColor)(e, 100 - parseInt(r[1], 10)) + COMMA : (0, _libGraphics.getLightColor)(e, 100 - parseInt(r[1], 10)) + COMMA : o[t] + COMMA;return d.substring(0, d.length - 1);
}function trimString(e) {
  e = e.replace(/^\s\s*/, '');for (var n = /\s/, r = e.length; n.test(e.charAt(r -= 1)););return e.slice(0, r + 1);
}function getFirstAlpha(e) {
  return e = parseInt(e, 10), (isNaN(e) || 100 < e || 0 > e) && (e = 100), e;
}function getCrispValue(e, n, r) {
  var a = r % 2 / 2,
      d = mathRound(e + a) - a,
      t = mathRound(e + n + a) - a - d;return { position: d, distance: t };
}function fastTrim(e) {
  e = e.replace(/^\s\s*/, '');for (var n = /\s/, r = e.length; n.test(e.charAt(r -= 1)););return e.slice(0, r + 1);
}function imprint(e, n, r) {
  if ('object' != typeof e || null === e) return e = n, n;if ('object' != typeof n || null === n) return e;for (var a in n) e[a] !== UNDEF && (r || null !== e[a]) || (e[a] = n[a]);return e;
}function getLinkedChartDataJSON(e, n) {
  var r,
      a = { chart: {} },
      d = n;if (e = e.toLowerCase(), d.linkeddata) for (r = 0; r < d.linkeddata.length; r += 1) d.linkeddata[r].id.toLowerCase() === e && (a = d.linkeddata[r].linkedchart || d.linkeddata[r].linkedmap);return a;
}function executeJS(e, n) {
  limitedEvalParser(e.substr(0, e.indexOf('__FC_ARG_SEP__')).replace(/\s/g, BLANK), e.substr(e.indexOf('__FC_ARG_SEP__')).replace(/__FC_ARG_SEP__/, ''), n);
}function pseudoEval(e) {
  /^j\s*\-/.test(e) ? executeJS(e.replace(/^j\s*\-/, BLANK).replace(/\-/, '__FC_ARG_SEP__')) : executeJS(e.replace(/^javascript\s*\:/i, BLANK).replace(/[\'\"]?\s*\,\s*[\'\"]?/g, '__FC_ARG_SEP__').replace(/\(\s*[\'\"]?(.*)\)\;?/, '__FC_ARG_SEP__$1').replace(/[\'\"]?$/, ''), !0);
}function getLinkAction(e, n) {
  var r = function (e) {
    return e;
  };return function (a) {
    if (!(a && n.config.clickURLOverridesPlotLinks)) {
      var d,
          t,
          o,
          i,
          l,
          g,
          s,
          f,
          u,
          c,
          p,
          x = e.chart || e.map || {},
          h = pluckNumber(x.unescapelinks, 1),
          b = this.entity || UNDEF,
          m = this.entityBox || UNDEF,
          y = this.link,
          I = y;if (y !== UNDEF) {
        switch (h && (y = win.decodeURIComponent ? win.decodeURIComponent(y) : win.unescape(y)), y = y.replace(/^\s+/, BLANK).replace(/\s+$/, BLANK), -1 !== y.search(/^[a-z]*\s*[\-\:]\s*/i) && (l = y.split(/\s*[\-\:]\s*/)[0].toLowerCase(), p = l.length), a && (n.config.hotElemClicked = !0), l) {case 'j':case 'javascript':
            pseudoEval(y);break;case 'n':
            y.replace(/^n\s*\-/i, 'n-'), win.open(r(y.slice(2), h));break;case 'f':
            y = y.replace(/^f\s*\-/i, 'f-'), d = y.indexOf('-', 2), -1 === d ? win.open(r(y.slice(2), h)) : (t = y.substr(2, d - 2), t && win.frames[t] ? win.frames[t].location = r(y.slice(d + 1), h) : win.open(r(y.slice(d + 1), h), t));break;case 'p':
            y = y.replace(/p\s*\-/i, 'p-'), d = y.indexOf('-', 2), o = y.indexOf(COMMA, 2), -1 === d && (d = 1), i = r(y.slice(d + 1), h), c = win.open(i, y.substr(2, o - 2), y.substr(o + 1, d - o - 1)), c && c.focus();break;case 'newchart':case 'newmap':
            ':' === y.charAt(p) && (d = y.indexOf('-', p + 1), u = y.substring(p + 1, d), p = d), d = y.indexOf('-', p + 1), g = y.substring(p + 1, d).toLowerCase(), 'xmlurl' === g || 'jsonurl' === g ? f = y.substring(d + 1, y.length) : 'xml' === g || 'json' === g ? (s = y.substring(d + 1, y.length), f = getLinkedChartDataJSON(s, e), g = 'json') : void 0, n.fireChartInstanceEvent('linkedChartInvoked', { alias: u, linkType: g.toUpperCase(), data: f, clickedEntity: b, clickedEntityBox: m });break;default:
            win.location.href = r(y, h);}n.fireChartInstanceEvent('linkClicked', { linkProvided: I, linkInvoked: y, linkAction: l && l.toLowerCase() });
      }
    }
  };
}function getImageURL(e) {
  var n = { image: !1 };return e !== UNDEF && (e = e.replace(/^\s+/, BLANK).replace(/\s+$/, BLANK), /^i\s*[\-]\s*/i.test(e) ? (n.image = !0, n.string = e.replace(/^i\s*[\-]\s*/i, BLANK)) : n.string = e.replace(/^\\/, BLANK)), n;
}function toPrecision(e, n) {
  var r = mathPow(10, n);return mathRound(e * r) / r;
}function getDashStyle(e, n, r) {
  return r || r === UNDEF ? [e, n] : DASH_DEF;
}function setLineHeight(e, n) {
  return 'object' == typeof e ? ((e.fontSize || e['font-size']) && (!e.fontSize && e['font-size'] && (e.fontSize = e['font-size'], delete e['font-size']), e.lineHeight = (parseFloat(e.fontSize) || n || 10) * LINE_HEIGHT_FACTOR + 'px', delete e['line-height']), !e.lineHeight && e['line-height'] && (e.lineHeight = e['line-height'], delete e['line-height']), e.lineHeight) : BLANK;
}function parsexAxisStyles(e, n, r, a, d) {
  var t,
      o = getFirstValue(e.labelbordercolor, n.bordercolor, r.labelbordercolor, BLANK),
      i = pluck(e.labelbgcolor, n.bgcolor, r.labelbgcolor),
      l = pluckNumber(e.labelborderthickness, n.borderthickness, r.labelborderthickness, 1),
      g = pluckNumber(r.usedataplotcolorforlabels, 0) ? d || a.color : a.color;return o = o ? (0, _libGraphics.convertColor)(o, pluckNumber(e.labelborderalpha, n.borderalpha, r.labelborderalpha, e.labelalpha, n.alpha, r.labelalpha, 100)) : BLANK, t = { fontFamily: pluck(e.labelfont, n.font, r.labelfont, a.fontFamily), fontSize: pluck(e.labelfontsize, n.fontsize, r.labelfontsize, parseInt(a.fontSize, 10)) + PXSTRING, color: (0, _libGraphics.convertColor)(pluck(e.labelfontcolor, n.fontcolor, r.labelfontcolor, g), pluckNumber(e.labelfontalpha, n.fontalpha, r.labelfontalpha, e.labelalpha, n.alpha, r.labelalpha, 100)), fontWeight: pluckNumber(e.labelfontbold, n.fontbold, r.labelfontbold) ? 'bold' : 'normal', fontStyle: pluckNumber(e.labelfontitalic, n.fontitalic, r.labelfontitalic) ? 'italic' : 'normal', border: o || i ? l + 'px solid' : BLANK, borderColor: o, borderThickness: l, borderPadding: pluckNumber(e.labelborderpadding, n.borderpadding, r.labelborderpadding, 2), borderRadius: pluckNumber(e.labelborderradius, n.borderradius, r.labelborderradius, 0), backgroundColor: i ? (0, _libGraphics.convertColor)(i, pluckNumber(e.labelbgalpha, n.bgalpha, r.labelbgalpha, e.labelalpha, n.alpha, r.labelalpha, 100)) : BLANK, borderDash: pluckNumber(e.labelborderdashed, n.borderdashed, r.labelborderdashed, 0) ? getDashStyle(pluckNumber(e.labelborderdashlen, n.borderdashlen, r.labelborderdashlen, 4), pluckNumber(e.labelborderdashgap, n.borderdashgap, r.labelborderdashgap, 2)) : DASH_DEF }, t.lineHeight = setLineHeight(t), t;
}function setImageDisplayMode(e, n, r, a, d, t, o, i) {
  var l = i.width * (a / 100),
      g = i.height * (a / 100),
      s = {};return s = (0, _imageAlignment.getAlignImage)(n, r, e, l, g, t, o, d, t - 2 * d, o - 2 * d), s;
}function componentDispose() {
  var e,
      n,
      r,
      a,
      d,
      t,
      o,
      l,
      g,
      s,
      f,
      u,
      c = this;if (c && c !== win) {
    if (c.disposing = !0, e = c.components, e) for (r in e) if (n = e[r], n instanceof Array) for (a = n.length, d = 0; d < a; d++) u = n[d], u && !c.disposing && (u.dispose ? u.dispose() : componentDispose.call(u));else n && !n.disposing && (n.dispose ? n.dispose() : componentDispose.call(n));for (l in t = c.graphics, t) if (o = t[l], o) if (o.hide) o.hide(), o.followers && o.followers[0] && (f = o.followers[0].el, f && f.hide && f.hide());else for (g in o) s = o[g], s.hide && s.hide();for (r in c) delete c[r];
  }
}function isInterActiveEvt(e) {
  return !!interActiveEvtList[e];
}function addInterActiveEvtName(e) {
  e && e.toLowerCase && (interActiveEvtList[e.toLowerCase()] = !0);
}function comparatorAsc(e, n) {
  return e - n;
}function comparatorDesc(e, n) {
  return n - e;
}function getComparatorFN(e, n) {
  return e ? n ? function (e, r) {
    return e[n] - r[n];
  } : comparatorAsc : n ? function (e, r) {
    return r[n] - e[n];
  } : comparatorDesc;
}function stableSort(e, n) {
  var r,
      a = e.length;for (r = 0; r < a; r++) e[r].ssI = r;for (e.sort(function (e, r) {
    var a = n(e, r);return 0 === a ? e.ssI - r.ssI : a;
  }), r = 0; r < a; r++) delete e[r].ssI;
}function getSuggestiveRotation() {
  var e, n, r, a;return e = arguments[0], 1 === arguments.length ? (n = e.angle, r = e.x, a = e.y) : (n = e, r = arguments[1], a = arguments[2]), n = n || 0, RStr + n + COMMA + r + COMMA + a;
}function normalizeCSSDimension(e, n, r) {
  let a,
      d = 'undefined' == typeof e ? r.offsetWidth || parseFloat(r.style.width) : e,
      t = 'undefined' == typeof n ? r.offsetHeight || parseFloat(r.style.height) : n,
      i = {},
      o = r.style;if (o.width = d = d.toString ? d.toString() : '0', o.height = t = t.toString ? t.toString() : '0', (i.widthIsRelative = d.match(/^\s*\d*\.?\d*\%\s*$/) && !d.match(/^\s*0\%\s*$/)) && 0 === r.offsetWidth) for (a = r; a = a.offsetParent;) if (0 < a.offsetWidth) {
    d = (a.offsetWidth * parseFloat(d.match(/\d*/)[0]) / 100).toString();break;
  }if ((i.heightIsRelative = t.match(/^\s*\d*\.?\d*\%\s*$/) && !t.match(/^\s*0\%\s*$/)) && 20 >= r.offsetHeight) for (a = r; a = a.offsetParent;) if (0 < a.offsetHeight) {
    t = (a.offsetHeight * parseFloat(t.match(/\d*/)[0]) / 100).toString();break;
  }return i.width = d.replace ? d.replace(/^\s*(\d*\.?\d*)\s*$/ig, '$1px') : d, i.height = t.replace ? t.replace(/^\s*(\d*\.?\d*)\s*$/ig, '$1px') : t, o.width = i.width, o.height = i.height, i.pixelWidth = i.widthIsRelative ? r.offsetWidth : parseInt(i.width, 10) || 0, i.pixelHeight = i.heightIsRelative ? r.offsetHeight : parseInt(i.height, 10) || 0, i;
}let componentFactory = (e, n, r, a = 1, d) => {
  if (e && n && r) {
    let t,
        o,
        i,
        l = e.getChildren(r) || [];for (t = 0; t < a; t += 1) l && l[t] && !l[t].getState('removed') ? i = l[t] : (i = new n(), e.attachChild(i, r)), d && d.length > t && i.configure && i.configure(d[t]);if (o = l && l.length, t < o) for (; t < o; t += 1) l[t] && l[t].remove && l[t].remove();
  }
},
    datasetFactory = (e, n, r, a = 1, d, t = []) => {
  if (e && n && r) {
    let o,
        i,
        l,
        g = e.getChildren(r) || [];for (o = 0; o < a; o += 1) g && g[o] && !g[o].getState('removed') ? l = g[o] : (l = new n(), e.attachChild(l, r)), l.config._childIndex = o, l.setState('_total', a), l.setJSONIndex && l.setJSONIndex(t[o] || o), d && d.length > o && l.configure && l.configure(d[o]);if (i = g && g.length, o < i) for (; o < i; o += 1) g[o] && g[o].remove && g[o].remove();
  }
};exports.isInterActiveEvt = isInterActiveEvt;
exports.addInterActiveEvtName = addInterActiveEvtName;
exports.getEmptyConstractor = getEmptyConstractor;
exports.BLANKSTRINGPLACEHOLDER = BLANKSTRINGPLACEHOLDER;
exports.isFirefox = isFirefox;
exports.UNDEF = UNDEF;
exports.UNDERSCORE = UNDERSCORE;
exports.BLANKSTRING = BLANKSTRING;
exports.COLOR_BLACK = COLOR_BLACK;
exports.COLOR_GLASS = COLOR_GLASS;
exports.COLOR_WHITE = COLOR_WHITE;
exports.COLOR_TRANSPARENT = COLOR_TRANSPARENT;
exports.HASHSTRING = HASHSTRING;
exports.BREAKSTRING = BREAKSTRING;
exports.STRINGSTRING = STRINGSTRING;
exports.OBJECTSTRING = OBJECTSTRING;
exports.COMMASTRING = COMMASTRING;
exports.ZEROSTRING = ZEROSTRING;
exports.SAMPLESTRING = SAMPLESTRING;
exports.TESTSTR = TESTSTR;
exports.ONESTRING = ONESTRING;
exports.DECIMALSTRING = DECIMALSTRING;
exports.STRINGUNDEFINED = STRINGUNDEFINED;
exports.POSITION_TOP = POSITION_TOP;
exports.POSITION_RIGHT = POSITION_RIGHT;
exports.POSITION_BOTTOM = POSITION_BOTTOM;
exports.POSITION_LEFT = POSITION_LEFT;
exports.POSITION_CENTER = POSITION_CENTER;
exports.POSITION_MIDDLE = POSITION_MIDDLE;
exports.POSITION_START = POSITION_START;
exports.POSITION_END = POSITION_END;
exports.FC_CONFIG_STRING = FC_CONFIG_STRING;
exports.SHAPE_RECT = SHAPE_RECT;
exports.HUNDREDSTRING = HUNDREDSTRING;
exports.PXSTRING = PXSTRING;
exports.COMMASPACE = COMMASPACE;
exports.TEXTANCHOR = TEXTANCHOR;
exports.hiddenStr = hiddenStr;
exports.visibleStr = visibleStr;
exports.startsRGBA = startsRGBA;
exports.cleanColorCode = cleanColorCode;
exports.TOUCH_THRESHOLD_PIXELS = TOUCH_THRESHOLD_PIXELS;
exports.CLICK_THRESHOLD_PIXELS = CLICK_THRESHOLD_PIXELS;
exports.regex = regex;
exports.getEventCoordinate = getEventCoordinate;
exports.getMouseCoordinate = getMouseCoordinate;
exports.getTouchEvent = getTouchEvent;
exports.extend2 = _raphael2.default;
exports.imprint = imprint;
exports.pluck = pluck;
exports.pluckNumber = pluckNumber;
exports.getFirstDefinedValue = getFirstDefinedValue;
exports.createElement = createElement;
exports.polyPathToPath = polyPathToPath;
exports.hashify = hashify;
exports.dehashify = dehashify;
exports.getComparatorFN = getComparatorFN;
exports.pluckFontSize = pluckFontSize;
exports.getValidValue = getValidValue;
exports.getPosition = getPosition;
exports.getViewPortDimension = getViewPortDimension;
exports.bindSelectionEvent = bindSelectionEvent;
exports.fcEach = fcEach;
exports.getDefinedColor = getDefinedColor;
exports.getFirstValue = getFirstValue;
exports.getFirstColor = getFirstColor;
exports.getColorCodeString = getColorCodeString;
exports.clampNumber = clampNumber;
exports.toRaphaelColor = toRaphaelColor;
exports.rgbaToHex = rgbaToHex;
exports.gradientify = gradientify;
exports.fastTrim = fastTrim;
exports.getFirstAlpha = getFirstAlpha;
exports.parsePointValue = parsePointValue;
exports.parseUnsafeString = parseUnsafeString;
exports.parseTooltext = parseTooltext;
exports.toPrecision = toPrecision;
exports.hasTouch = hasTouch;
exports.CREDIT_HREF = CREDIT_HREF;
exports.CREDIT_STRING = CREDIT_STRING;
exports.regescape = regescape;
exports.regReplaceEscape = regReplaceEscape;
exports.getImageURL = getImageURL;
exports.isArray = isArray;
exports.getCrispValue = getCrispValue;
exports.getCripValues = getCrispValue;
exports.preDefStr = preDefStr;
exports.stubFN = EMPTYFN;
exports.stableSort = stableSort;
exports.hasSVG = hasSVG;
exports.CREDIT_REGEX = CREDIT_REGEX;
exports.isIE = isIE;
exports.isIE11 = isIE11;
exports.isIE9 = isIE9;
exports.isEdge = isEdge;
exports.lineHeightFactor = lineHeightFactor;
exports.getLinkAction = getLinkAction;
exports.setImageDisplayMode = setImageDisplayMode;
exports.setLineHeight = setLineHeight;
exports.parsexAxisStyles = parsexAxisStyles;
exports.supportedStyle = supportedStyle;
exports.getAxisLimits = getAxisLimits;
exports.getDashStyle = getDashStyle;
exports.chartAPI = chartAPI;
exports.createDialog = createDialog;
exports.componentDispose = componentDispose;
exports.executeJS = executeJS;
exports.pseudoEval = pseudoEval;
exports.validhexcolor = validhexcolor;
exports.appliedCSS = appliedCSS;
exports.getContainerBackgroundColor = getContainerBackgroundColor;
exports.capitalizeString = capitalizeString;
exports.TRACKER_FILL = TRACKER_FILL;
exports.chartPaletteStr = chartPaletteStr;
exports.DASH_DEF = DASH_DEF;
exports.attrTypeNum = attrTypeNum;
exports.canvasBGAlphaStr = canvasBGAlphaStr;
exports.attrTypeBool = attrTypeBool;
exports.pInt = pInt;
exports.defined = defined;
exports.canvasBorderColorStr = canvasBorderColorStr;
exports.attribDefs = _libAttr.attribDefs;
exports.parseConfiguration = _libAttr.parseConfiguration;
exports.setAttribDefs = _libAttr.setAttribDefs;
exports.hasAttribDefs = _libAttr.hasAttribDefs;
exports.crispBound = crispBound;
exports.defaultGaugePaletteOptions = defaultGaugePaletteOptions;
exports.MathExt = MathExt;
exports.xssEncode = xssEncode;
exports.animHelperFN = animHelperFN;
exports.mathAbs = mathAbs;
exports.mathRound = mathRound;
exports.NORMAL = NORMAL;
exports.BOLD = BOLD;
exports.HAND = HAND;
exports.POINTER = POINTER;
exports.BLANK = BLANK;
exports.ROUND = ROUND;
exports.configStr = configStr;
exports.animationObjStr = animationObjStr;
exports.COMMA = COMMA;
exports.TILE = TILE;
exports.FILL = FILL;
exports.FIT = FIT;
exports.MOUSEOUT = MOUSEOUT;
exports.MOUSEMOVE = MOUSEMOVE;
exports.touchEnabled = touchEnabled;
exports.VISIBLE = VISIBLE;
exports.BGRATIOSTRING = BGRATIOSTRING;
exports.dropHash = dropHash;
exports.componentFactory = componentFactory;
exports.datasetFactory = datasetFactory;
exports.trimString = trimString;
exports.PROJECT_VERSION = PROJECT_VERSION;
exports.LINE_HEIGHT_FACTOR = LINE_HEIGHT_FACTOR;
exports.safeMax = safeMax;
exports.safeMin = safeMin;
exports.normalizeAngle = normalizeAngle;
exports.extent = extent;
exports.getSuggestiveRotation = getSuggestiveRotation;
exports.isXSSSafe = isXSSSafe;
exports.normalizeCSSDimension = normalizeCSSDimension;
exports.domInsertModes = domInsertModes;
},{"../../../../package.json":18,"./lib-attr":75,"../dom/dom-event":76,"../vendors/redraphael/source/raphael.lib":87,"./lib-graphics":24,"../misc/image-alignment":77}],25:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let UNDEF,
    conditionChecks = {},
    rootSender = {},
    managedFnCall = function (a, b, c, d) {
  try {
    a[0].call(b, c, d || {});
  } catch (a) {
    setTimeout(function () {
      throw a;
    }, 0);
  }
},
    slotLoader = function (a, b, c) {
  var d,
      e = 0;if (a instanceof Array && !b.cancelled) for (; e < a.length; e += 1) {
    if (!0 === a[e].removed) {
      a.splice(e, 1), e -= 1;continue;
    }if ((a[e][1] === b.sender || a[e][1] === UNDEF) && (d = a[e][1] === b.sender ? b.sender : rootSender, managedFnCall(a[e], d, b, c), !0 === b.detached && (a.splice(e, 1), e -= 1, b.detached = !1)), !0 === b.cancelled) break;
  }
},
    unpropagator = function () {
  this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
},
    unImdPropagator = function () {
  this.cancelled = !0, this.originalEvent && this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation.call ? this.originalEvent.stopImmediatePropagation() : this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
},
    detacher = function () {
  return !1 == (this.detached = !0);
},
    undefaulter = function () {
  this.defaultPrevented = !0, this.originalEvent && this.originalEvent.preventDefault && this.originalEvent.preventDefault.call && this.originalEvent.preventDefault();
},
    isDuplicate = function (a, b, c) {
  let d,
      e = a.length;for (d = 0; d < e; d += 1) if (a[d][0] === b && a[d][1] === c && !a[d].removed) return !0;
},
    listeners = {},
    lastEventId = 0,
    addListener = function (a, b, c, d) {
  var e, f, g;if (a instanceof Array) {
    for (e = [], f = 0; f < a.length; f += 1) e.push(addListener(a[f], b, c));return e;
  }return 'string' == typeof a ? 'function' == typeof b ? (a = a.toLowerCase(), c ? (!c._evtListeners && (c._evtListeners = {}), !(c._evtListeners[a] instanceof Array) && (c._evtListeners[a] = []), g = c._evtListeners[a]) : (!(listeners[a] instanceof Array) && (listeners[a] = []), g = listeners[a]), !isDuplicate(g, b, c)) && (d && d.priority ? g.unshift([b, c]) : g.push([b, c]), b) : void raiseError(c, '03091550', 'param', '::addListener', new Error('Invalid Event Listener')) : void raiseError(c, '03091549', 'param', '::addListener', new Error('Unspecified Event Type'));
},
    removeListener = function (a, b, c) {
  var d, e;if ('function' != typeof b) return void raiseError(c, '03091560', 'param', '::removeListener', new Error('Invalid Event Listener'));if (a instanceof Array) {
    for (e = 0; e < a.length; e += 1) removeListener(a[e], b, c);return;
  }if (d = getListeners(a, c), !!(d instanceof Array && d.length)) for (e = d.length - 1; 0 <= e; e -= 1) d[e][0] === b && d[e][1] === c && (d[e].removed = !0);
},
    triggerEvent = function (a, b, c, d, e, f) {
  var g, h, i, j, k;return a = a.toLowerCase(), h = getListeners(a, b), i = getListeners('*', b), j = listeners[a], k = listeners['*'], (h && h.length || i && i.length || j && j.length || k && k.length) && (g = { type: a, eventType: a, eventId: lastEventId += 1, sender: b || new Error('Orphan Event'), stopPropagation: unpropagator, stopImmediatePropagation: unImdPropagator, cancelled: !1, preventDefault: undefaulter, defaultPrevented: !1, originalEvent: d, detached: !1, data: c, detachHandler: detacher }, slotLoader(k, g, c), slotLoader(j, g, c), b && (slotLoader(getListeners('*', b), g, c), slotLoader(getListeners(a, b), g, c))), g && g.defaultPrevented ? f && 'function' == typeof f && f.call(b, g, c || {}) : e && 'function' == typeof e && e.call(b, g, c || {}), !0;
},
    getListeners = function (a, b) {
  return 'string' == typeof a ? (a = a.toLowerCase(), b ? b._evtListeners && b._evtListeners[a] : listeners[a]) : void raiseError(b, '03091559', 'param', '::removeListener', new Error('Unspecified Event Type'));
},
    disposeEvents = function (a) {
  var b,
      c = a ? a._evtListeners : listeners;for (b in c) c[b].length && (c[b].length = 0);
},
    errorNatures = { type: 'TypeException', range: 'ValueRangeException', impl: 'NotImplementedException', param: 'ParameterException', run: 'RuntimeException', comp: 'DesignTimeError', undefined: 'UnspecifiedException' },
    raiseEWEvent = function (a, b, c, d, e, f) {
  var g,
      h = '#' + b + ' ' + (a ? a.id : 'unknown-source') + d + ' ' + f + ' >> ';e instanceof Error ? (e.name = errorNatures[c], e.module = 'FusionCharts' + d, e.level = f, e.message = h + e.message, h = e.message, setTimeout(function () {
    throw e;
  }, 0)) : h += e, g = { id: b, nature: errorNatures[c], source: 'FusionCharts' + d, message: h }, triggerEvent(f, a, g);
},
    raiseError = function (a, b, c, d, e) {
  raiseEWEvent(a, b, c, d, e, 'Error');
},
    raiseWarning = function (a, b, c, d, e) {
  raiseEWEvent(a, b, c, d, e, 'Warning');
},
    raiseEventGroup = function (a, b, c, d, e, f, g) {
  var h = d.id,
      i = a + h;conditionChecks[i] ? (clearTimeout(conditionChecks[i]), delete conditionChecks[i]) : h && i ? conditionChecks[i] = setTimeout(function () {
    triggerEvent(b, d, c, e, f, g), delete conditionChecks[i];
  }, 0) : triggerEvent(b, d, c, e, f, g);
},
    setRootSender = function (a = {}) {
  rootSender = a;
};exports.addListener = addListener;
exports.removeListener = removeListener;
exports.triggerEvent = triggerEvent;
exports.getListeners = getListeners;
exports.disposeEvents = disposeEvents;
exports.raiseWarning = raiseWarning;
exports.raiseError = raiseError;
exports.raiseEventGroup = raiseEventGroup;
exports.setRootSender = setRootSender;
},{}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepsByType = exports.getDep = exports.addDep = undefined;

var _eventApi = require('./misc/event-api');

let typeStore = {},
    depStore = {};function getExtensionName(a) {
  let b = a.getName && a.getName() || a.name;return 'undefined' == typeof b && (0, _eventApi.raiseError)({ id: 'Extension' }, '90211', 'extension', 'Name', new Error('A FusionCharts extension must have a getName API or a name property.')), b && b.toLowerCase();
}function getExtensionType(a) {
  let b = a.getType && a.getType() || a.type;return b && b.toLowerCase();
}function defineDepType(a) {
  'string' == typeof a && (typeStore[a] = {});
}function addDep(a) {
  let b, c, d, e, f;c = a.extension ? a.extension : a, b = getExtensionName(a), d = getExtensionType(a), f = a.requiresFusionCharts, d ? (!typeStore[d] && defineDepType(d), (e = typeStore[d][b] !== c) && (typeStore[d][b] = c)) : b && (e = depStore[b] !== c) && (depStore[b] = c), e && (0, _eventApi.triggerEvent)('dependencyadded', this, { name: b, type: d }), e && f && c(this);
}function getDep(a, b) {
  let c;if (a = a && a.toLowerCase(), b && typeStore[b]) return typeStore[b][a];if (!b) for (var d in typeStore) if (typeStore.hasOwnProperty(d) && (c = typeStore[d][a], c)) return c;return depStore[a];
}function getDepsByType(a = '') {
  return '' === a ? typeStore : typeStore[a.toLowerCase()];
}exports.addDep = addDep;
exports.getDep = getDep;
exports.getDepsByType = getDepsByType;
},{"./misc/event-api":25}],26:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDataUpdateCancel = exports.onDataUpdateSuccess = exports.cache = exports.dataStore = undefined;

var _eventApi = require('./event-api');

let dataStore = {},
    cache = {};function onDataUpdateCancel(a, b) {
  (0, _eventApi.triggerEvent)('dataUpdateCancelled', a.sender, b, void 0, b.failurecallback);
}function onDataUpdateSuccess(a, b) {
  let c = a.sender,
      d = c.__state,
      e = c.id;dataStore[e] = b, cache[e] && delete cache[e], cache[e] = {}, d.dataReady = void 0, d.dataAvailable = !0, !0 === b.silent ? c.options.dataSource = b.data : !0 !== c.options.safeMode || !0 !== d.rendering || c.isActive() ? (delete d.args, c.update(b)) : (d.updatePending = b, (0, _eventApi.raiseWarning)(c, '23091255', 'run', '::DataHandler~update', 'Renderer update was postponed due to async loading.')), (0, _eventApi.triggerEvent)('dataUpdated', c, b, void 0, b.successcallback);
}exports.dataStore = dataStore;
exports.cache = cache;
exports.onDataUpdateSuccess = onDataUpdateSuccess;
exports.onDataUpdateCancel = onDataUpdateCancel;
},{"./event-api":25}],27:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function clearStateEventHandler(a) {
  delete a.sender.jsVars._reflowData, a.sender.jsVars._reflowData = {}, delete a.sender.jsVars._reflowClean;
}exports.default = { beforeInitialize: function (a) {
    var b,
        c = a.sender,
        d = c.jsVars;d.fcObj = c, d.msgStore = d.msgStore || { LoadDataErrorText: 'Error in loading data.', XMLLoadingText: 'Retrieving data. Please wait', InvalidXMLText: 'Invalid data.', ChartNoDataText: 'No data to display.', ReadingDataText: 'Reading data. Please wait', ChartNotSupported: 'Chart type not supported.', PBarLoadingText: '', LoadingText: 'Loading chart. Please wait', RenderChartErrorText: 'Unable to render chart.' }, d.cfgStore = d.cfgStore || {}, d.previousDrawCount = -1, d.drawCount = 0, d._reflowData = {}, c.addEventListener('beforeRender', a => a.detachHandler()), d.userModules instanceof Array || (b = d.userModules, d.userModules = [], 'string' == typeof b && (d.userModules = d.userModules.concat(b.split(','))));
  }, beforeDataUpdate: clearStateEventHandler, beforeDispose: function (a) {
    var b = a.sender,
        c = b.jsVars;c.smartLabel && !c.smartLabel.disposed && c.smartLabel.dispose(), clearStateEventHandler(...arguments);
  }, beforeRender: function (a) {
    var b = a.sender,
        c = b.jsVars;delete c.drLoadAttempted, clearStateEventHandler(...arguments);
  }, dataLoadRequested: function (a) {
    var b = a.sender,
        c = b.jsVars;delete c.loadError, b.ref && b.options.showDataLoadingMessage ? c.hcObj && !c.hasNativeMessage && c.hcObj.showLoading ? c.hcObj.showMessage(c.msgStore.XMLLoadingText) : b.ref.showChartMessage ? b.ref.showChartMessage('XMLLoadingText') : c.stallLoad = !0 : c.stallLoad = !0;
  }, dataLoadRequestCompleted: function (a) {
    var b = a.sender,
        c = b.jsVars;delete c.stallLoad;
  }, dataLoadError: function (a) {
    var b = a.sender,
        c = b.jsVars,
        d = b.args,
        e = b.options;delete c.stallLoad, c.loadError = !0, b._chartMessageImageStyle = { imageHAlign: d.dataLoadErrorMessageImageHAlign || e.baseChartMessageImageHAlign, imageVAlign: d.dataLoadErrorMessageImageVAlign || e.baseChartMessageImageVAlign, imageAlpha: d.dataLoadErrorMessageImageAlpha || e.baseChartMessageImageAlpha, imageScale: d.dataLoadErrorMessageImageScale || e.baseChartMessageImageScale }, b._chartMessageStyle = { color: d.dataLoadErrorMessageColor || e.baseChartMessageColor, fontFamily: d.dataLoadErrorMessageFont || e.baseChartMessageFont, fontSize: d.dataLoadErrorMessageFontSize || e.baseChartMessageFontSize }, b.apiInstance.setChartMessage && (b.apiInstance.setChartMessage(e.dataLoadErrorMessage, b), b.apiInstance.drawChartMessage()), b.__state.dataFetchDuringConstruction && delete b.__state.dataFetchDuringConstruction, clearStateEventHandler(...arguments);
  } };
},{}],21:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jobList = [],
    pausedList = {},
    priorityJobList = [],
    jobByID = {},
    jobCount = 0,
    win = window,
    nav = win.navigator,
    isIE11 = /trident/i.test(nav.userAgent) && /rv:11/i.test(nav.userAgent) && !win.opera,
    isIE = /msie/i.test(nav.userAgent) && !win.opera,
    isEdge = /Edge/.test(nav.userAgent),
    minMsThreshold = 16,
    schedular = {},
    fnStr = 'function',
    jobPrefixStr = 'JOB_',
    priorityList = { instant: 1, render: 1, chartEvents: 1, configure: 2, chartClick: 2, draw: 3, entitydraw: 4, label: 4, animation: 5, tracker: 6, kdTree: 6, postRender: 7 },
    jobFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (a) {
  setTimeout(a, minMsThreshold);
},
    jobExecutionFramerequested = !1,
    executeJob = function () {
  let a,
      b,
      c,
      d = !0,
      e = new Date().getTime();for (jobExecutionFramerequested = !0; d && (a = jobList[0]);) b = new Date().getTime(), a.OIAF && c || a.executeAfter && !(a.executeAfter < b) || !(b - e < minMsThreshold) ? d = !1 : (jobList.shift(), priorityJobList[a.priority] -= 1, jobByID[a.jobID] && !a.executed && (a.executed = !0, delete jobByID[a.jobID], a.job(), c = a.OIAF));jobList.length ? jobFrame(executeJob) : jobExecutionFramerequested = !1;
};(isIE11 || isIE || isEdge) && (jobFrame = jobFrame.bind(window)), schedular.addJob = function (a, b, c) {
  var d,
      e,
      f,
      g = 0,
      h = c && c.oneInAFrame,
      j = c && c.addToTop ? b - 1 : b;for (typeof a == fnStr ? (d = jobPrefixStr + ++jobCount + '_' + (b || 1), e = { job: a, priority: b, OIAF: h, jobID: d }, c && c.executionDelay && (e.executeAfter = new Date().getTime() + c.executionDelay)) : e = a, f = 0; f <= j; f++) g += priorityJobList[f] || 0;return jobList.splice(g, 0, e), jobByID[e.jobID] = e, priorityJobList[b] = (priorityJobList[b] || 0) + 1, jobExecutionFramerequested || 1 !== jobList.length || (h ? jobFrame(executeJob) : setTimeout(executeJob, 0)), d;
}, schedular.removeJob = function (a) {
  jobByID[a] && delete jobByID[a];
}, schedular.updateJob = function (a, b, c, d) {
  return jobByID[a] ? (jobByID[a].job = b, a) : this.addJob(b, c, d);
}, schedular.pauseExecution = function (a) {
  return !!jobByID[a] && void (pausedList[a] = jobByID[a], delete jobByID[a]);
}, schedular.resumeExecution = function (a) {
  var b = pausedList[a];return !!b && void (schedular.addJob(b, b.priority), delete pausedList[a]);
};exports.default = schedular;
exports.priorityList = priorityList;
},{}],65:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAllEventsFromGraphic = exports._mapSubFnForward = undefined;

var _lib = require('../_internal/lib/lib');

var _eventApi = require('../_internal/misc/event-api');

var _schedular = require('../_internal/schedular');

var _schedular2 = _interopRequireDefault(_schedular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let idCounterStore = {},
    asyncDrawOptions = { executionDelay: 16 },
    TS = 'touchstart',
    CLICK = 'click',
    _mapSubFnBackward = (a, b) => {
  if (a && a.hasOwnProperty && b && b.call) {
    let c, d, e;for (c in a) if (a.hasOwnProperty(c)) if (d = a[c], d instanceof Array) for (e = d.length - 1; 0 <= e; e--) b(d[e], c, e);else b(d, c);
  }
},
    _mapSubFnForward = (a, b) => {
  if (a && a.hasOwnProperty && b && b.call) {
    let c, d, e, f;for (c in a) if (a.hasOwnProperty(c)) if (d = a[c], d instanceof Array) for (f = d.length, e = 0; e < f; e++) b(d[e], c, e);else b(d, c);
  }
};function addEventOnAllGraphics(a, b, c) {
  var d;b && c && (d = a => {
    a.on && a.on(b, c);
  }, _mapSubFnForward(a.getGraphicalElement(), d), _mapSubFnForward(a.getChildContainer(), d));
}function removeEventFromAllGraphics(a, b, c) {
  var d;b && c && (d = a => {
    a.off && a.off(b, c);
  }, _mapSubFnForward(a.getGraphicalElement(), d), _mapSubFnForward(a.getChildContainer(), d));
}function addAllEventsOnGraphic(a, b, c) {
  var d, e;if (b && b.hasOwnProperty) for (d in b) b.hasOwnProperty(d) && (e = (0, _eventApi.getListeners)(d, c), e && 1 <= e.length && a && a.on(d, b[d]));
}function removeAllEventsFromGraphic(a, b) {
  var c, d;if (b && b.hasOwnProperty) for (c in b) b.hasOwnProperty(c) && (d = (0, _eventApi.getListeners)(c, this), d && 1 <= d.length && a && a.off(c, b[c]));
}class ComponentInterface {
  constructor() {
    let a = this;a.config = {}, a._jobList = {}, a._components = {}, a._env = {}, a._extListeners = {}, a._state = {}, a._factories = [], a._factoriyNames = {}, a._graphics = {}, a.__drawJob = function () {
      a.updateVisual();
    }, a.__remove = function () {
      a.getState('removed') && a._dispose();
    }, a._setRemoveAnim = (b, c) => {
      let d = a.getFromEnv('animationManager');d.setAnimation({ el: b, component: a, label: c, props: b.__props }), a._setRemoveAnim = (b, c) => {
        d.setAnimation({ el: b, component: a, label: c, props: b.__props });
      };
    }, a.__instantRemoveFn = function (b) {
      let c = a.getFromEnv('animationManager');c.removeElement(b, !0), a.__instantRemoveFn = a => c.removeElement(a, !0);
    }, a.fireEvent('instantiated'), a.__setDefaultConfig();
  }configure(a) {
    this.preConfigure(a), this.configureAttributes(a), this.postConfigure(a), this.invokeFactories();
  }preConfigure(a) {
    this.fireEvent('preconfigure', a);
  }configureAttributes() {
    return this;
  }postConfigure(a) {
    this.fireEvent('postconfigure', a);
  }prepareAttributes() {
    let a = this;a.fireEvent('beforeattributeprepared'), a.allocatePosition && a.allocatePosition(), a._mapChildren(a => {
      a.prepareAttributes && a.prepareAttributes();
    }), a.fireEvent('attributeprepared');
  }setDefaults() {
    this.__setDefaultConfig(), this._mapChildren(a => a.setDefaults());
  }__setDefaultConfig() {
    return this;
  }setData(a, b = !1) {
    let c,
        d = this,
        e = d.getLinkedParent();d.asyncDraw(), b || this.setDefaults(), d.configure && d.configure(a), c = d.getState('change-info'), c && c.hasNoExternalEffect || e && e.childChange && e.childChange(c, d.getId());
  }getName() {
    return 'generic';
  }getType() {
    return 'generic';
  }getId() {
    return this._id || this.setId(), this._id;
  }setId(a) {
    var b;a === _lib.UNDEF && (b = this.getType() + _lib.UNDERSCORE + this.getName(), !idCounterStore[b] && (idCounterStore[b] = 1), a = b + _lib.UNDERSCORE + idCounterStore[b], idCounterStore[b] += 1), this._id = a;
  }iterateComponents(a) {
    let b = (c, d, e) => {
      let f = a(c, d, e);!1 !== f && c._mapChildren && c._mapChildren(b);
    };this._mapChildren(b);
  }_mapChildren(a, b) {
    b ? _mapSubFnBackward(this.getChildren(), a) : _mapSubFnForward(this.getChildren(), a);
  }getFromEnv(a) {
    return a ? this._env[a] : this._env;
  }addToEnv(a, b) {
    a && (this._env[a] = b);
  }deleteFromEnv(a) {
    delete this._env[a];
  }_updateParentEnv() {
    var a,
        b,
        c,
        d,
        e = this.getLinkedParent(),
        f = this._env;if (e) {
      if (a = e.getFromEnv(), b = function () {}, b.prototype = a, b.prototype.constructor = b, c = new b(), f) for (d in f) f.hasOwnProperty(d) && (c[d] = f[d]);this._env = c, this._mapChildren(function (a) {
        a._updateParentEnv && a._updateParentEnv();
      });
    }
  }addJob(a, b, c, d) {
    let e = this;e._jobList[a] = e._jobList[a] ? _schedular2.default.updateJob(e._jobList[a], b, c, d) : _schedular2.default.addJob(b, c, d);
  }removeJob(a) {
    let b = this._jobList[a];b && (_schedular2.default.removeJob(b), delete this._jobList[a]);
  }removeAllJobs() {
    let a,
        b = this._jobList;for (a in b) b.hasOwnProperty(a) && (_schedular2.default.removeJob(b[a]), delete b[name]);
  }asyncDraw() {
    var a = this;a.addJob('draw', a.__drawJob, _schedular.priorityList && _schedular.priorityList.draw, asyncDrawOptions);
  }syncDraw() {
    var a = this;a.fireEvent('beforedraw'), a.removeJob('draw'), a.getState('removed') ? a.removingDraw() : a.draw && a.draw(), a.addExtEventListener('animationComplete', a.__remove, a.getFromEnv('animationManager')), a.childrenSyncDraw(), a.setState('dirty', !1), a.setState('parentChanged', !1), a.addJob('draw-complete', function () {
      a.fireEvent('drawn');
    }, _schedular.priorityList.instant);
  }updateVisual() {
    let a = this;a.fireEvent('beforevisualupdate'), a.removeJob('visualupdate'), a.manageSpace && a.manageSpace(), a.prepareAttributes(), a.syncDraw(), a.fireEvent('visualupdated');
  }removingDraw() {
    var a = this;_mapSubFnForward(a.getChildContainer(), a._setRemoveAnim), _mapSubFnForward(a.getGraphicalElement(), a._setRemoveAnim), _mapSubFnForward(a.getContainer(), a._setRemoveAnim);
  }childrenSyncDraw() {
    this._mapChildren(a => {
      a && a.draw && a.syncDraw();
    });
  }addEventListener(a, b, c) {
    var d,
        f = this;return !!(a && a.toLowerCase && (a = a.toLowerCase(), (0, _eventApi.addListener)(a, b, f, c))) && ((0, _lib.isInterActiveEvt)(a) && (d = (0, _eventApi.getListeners)(a, f), d && 1 === d.length && (!f._middleListeners && (f._middleListeners = {}), !f._middleListeners[a] && (f._middleListeners[a] = function (b) {
      f.fireEvent(a, _lib.UNDEF, _lib.UNDEF, _lib.UNDEF, b);
    }), addEventOnAllGraphics(f, a, f._middleListeners[a]))), b);
  }removeEventListener(a, b) {
    var c,
        d = this;a && a.toLowerCase && (a = a.toLowerCase(), (0, _eventApi.removeListener)(a, b, this), (0, _lib.isInterActiveEvt)(a) && (c = (0, _eventApi.getListeners)(a, this), c && 0 === c.length && this._middleListeners && this._middleListeners[a] && removeEventFromAllGraphics(d, a, this._middleListeners[a])));
  }fireEvent(a, b, c, d, e) {
    (0, _eventApi.triggerEvent)(a, this, b, e, c, d);
  }addExtEventListener(a, b, c) {
    var d,
        f,
        e,
        g = this;if (c && c.addEventListener) if (_lib.touchEnabled && c.getType && 'legendItem' === c.getType() && 'click' === a) {
      if (d = function () {
        f = new Date().getTime();
      }, e = function (a) {
        (!f || 500 > new Date().getTime() - f) && b.call(g, a), f = void 0;
      }, c.addEventListener(TS, d) && (!g._extListeners[TS] && (g._extListeners[TS] = []), g._extListeners[TS].push({ fn: d, component: c })), c.addEventListener(CLICK, e)) return g._extListeners[CLICK] || (g._extListeners[CLICK] = []), g._extListeners[CLICK].push({ fn: e, component: c }), b;
    } else if (c.addEventListener(a, b)) return g._extListeners[a] || (g._extListeners[a] = []), g._extListeners[a].push({ fn: b, component: c }), b;return !1;
  }removeExtEventListener(a, b, c) {
    var d,
        e,
        f,
        g = this;if (c && c.addEventListener && g._extListeners && g._extListeners[a]) for (f = g._extListeners[a], e = f.length, d = e - 1; 0 <= d; d -= 1) if (f[d] && f[d].fn === b && f[d].component === c) return c.removeEventListener(a, b), void f.splice(d, 1);
  }addGraphicalElement(a, b, c, d) {
    var e = this._graphics;return c = c || !1, b && (c ? (e[a] === _lib.UNDEF && (e[a] = []), d ? e[a][d] = b : e[a].push(b)) : (e[a] = b, this.fireEvent('graphicalelementattached', { element: b })), addAllEventsOnGraphic(b, this._middleListeners, this)), b;
  }removeGraphicalElement(a) {
    let b,
        c = this,
        d = c._graphics;_mapSubFnForward(d, (e, f, g) => {
      e === a && (b = !0, removeAllEventsFromGraphic(e, c._middleListeners), c._setRemoveAnim(e, f), g === _lib.UNDEF ? delete d[f] : d[f].splice(g, 1));
    }), b && this.fireEvent('graphicalelementremoved', { element: a });
  }getGraphicalElement(a) {
    return 'undefined' == typeof a ? this._graphics : this._graphics[a];
  }addChildContainer(a, b) {
    var c = this,
        d = c._childContainers;return b && (d === _lib.UNDEF && (d = c._childContainers = {}), d[a] = b, addAllEventsOnGraphic(b, c._middleListeners, c)), b;
  }removeChildContainer(a) {
    let b = this,
        c = b._childContainers;c && c[a] && (removeAllEventsFromGraphic(c[a], b._middleListeners), b._setRemoveAnim(c[a], a), delete c[a]);
  }getChildContainer(a) {
    return this._childContainers === _lib.UNDEF && (this._childContainers = {}), a ? this._childContainers[a] : this._childContainers;
  }addContainer(a, b) {
    var c = this._containers;return b && (c === _lib.UNDEF && (c = this._containers = {}), c[a] = b), b;
  }removeContainer(a) {
    let b = this,
        c = b._containers;c && c[a] && (b._setRemoveAnim(c[a], a), delete c[a]);
  }getContainer(a) {
    return this._containers === _lib.UNDEF && (this._containers = {}), a ? this._containers[a] : this._containers;
  }_setLinkedParent(a) {
    let b = this._linkedParent;this._linkedParent = a, b !== a && (this.setState('parentChanged', !0), b && this.fireEvent('parentdetached', { oldParent: b }), a && this.fireEvent('parentAttached', { newParent: a })), this._updateParentEnv && this._updateParentEnv();
  }getLinkedParent() {
    return this._linkedParent;
  }setLinkedItem(a, b) {
    this.linkedItems || (this.linkedItems = {}), (a !== _lib.UNDEF || b !== _lib.UNDEF) && (this.linkedItems[a] = b);
  }getLinkedItem(a) {
    if (this.linkedItems) return a === _lib.UNDEF ? this.linkedItems : this.linkedItems[a];
  }removeLinkedItem(a) {
    this.linkedItems && this.linkedItems[a] && delete this.linkedItems[a];
  }attachChild(a, b, c) {
    var d = b || a.getType(),
        e = this._components;return !1 === c ? e[d] = a : (!(e[d] && e[d] instanceof Array) && (e[d] = []), e[d].push(a)), a._setLinkedParent(this), this.fireEvent('childattached', { attachedChild: a }), a;
  }getChild(a) {
    var b,
        c = this._components;return a === _lib.UNDEF ? c : (this._searchChildren(a, function (a) {
      b = a;
    }), b);
  }_searchChildren(a, b) {
    var c,
        d,
        e,
        f = this._components;for (d in f) if (f.hasOwnProperty(d)) if (c = f[d], c.constructor === Array) {
      for (e = c.length - 1; 0 <= e; e--) if (c[e].getId && c[e].getId() === a) return b(c[e], e, c);
    } else if (c.getId && c.getId() === a) return b(d, _lib.UNDEF, f);
  }detachChild(a) {
    var b,
        c = this;return a === _lib.UNDEF ? _lib.UNDEF : (c._searchChildren(a, function (a, d, e) {
      e && e.constructor === Array ? b = e.splice(d, 1)[0] : (b = e[a], delete e[a]), b._setLinkedParent(_lib.UNDEF), c.fireEvent('childdetached', { detachedChild: b });
    }), b);
  }getChildren(a) {
    return a ? this._components[a] : this._components;
  }_dispose() {
    var a,
        b,
        c,
        d,
        e,
        f = this;if (f && f !== window && !0 !== f._disposing) {
      if (f._disposing = !0, f.fireEvent('beforeremove'), a = f.getLinkedParent(), a && a.detachChild && !a._disposing && a.detachChild(this.getId()), f._extListeners) for (d in f._extListeners) for (e = f._extListeners[d], c = e.length - 1; 0 <= c; c--) e[c].component && e[c].component.addEventListener && e[c].component.removeEventListener(d, e[c].fn);for (b in f.removeAllJobs(), f.getFromEnv('paper') && !f.getFromEnv('paper').removed && (_mapSubFnForward(f.getChildContainer(), f.__instantRemoveFn), _mapSubFnForward(f.getGraphicalElement(), f.__instantRemoveFn), _mapSubFnForward(f.getContainer(), f.__instantRemoveFn)), f) f.hasOwnProperty(b) && delete f[b];f.fireEvent('removed');
    }
  }remove(a) {
    var b,
        c = this,
        d = a && a.instant;c.setState('removed', !0), b = c.getChildren(), b && c._mapChildren(b => {
      b && b.remove && b.remove(a);
    }, !0), d && c._dispose();
  }setState(a, b) {
    this._state[a] = b;
  }getState(a) {
    return this._state && this._state[a];
  }registerFactory(a, b, c) {
    if (this._factoriyNames[a]) for (let b = 0, c = this._factories.length, d = !1; b < c && !d; b += 1) this._factories[b].name === a && (this._factories.splice(b, 1), d = !0);this._factories.push({ name: a, factory: b, dep: c }), this._factoriyNames[a] = !0;
  }deregisterFactory(a) {
    if (this._factoriyNames[a]) return delete this._factoriyNames[a], this._factories.splice(this._factories.findIndex(b => b.name === a), 1)[0].factory;
  }invokeFactories() {
    let a,
        b = this,
        c = b._factoriyNames,
        d = {},
        e = b._factories,
        f = e.length + 1,
        g = e => {
      let f;e.dep && e.dep.length && e.dep.forEach(a => {
        f = c[a] && !d[a];
      }), f ? a.push(e) : (e.factory(b), d[e.name] = !0);
    };for (; e.length && e.length < f;) a = [], e.forEach(g), f = e.length, e = a;e.length && e.forEach(a => a.factory(b)), this.fireEvent('factoriesinvoked', {});
  }
}exports.default = ComponentInterface;
exports._mapSubFnForward = _mapSubFnForward;
exports.removeAllEventsFromGraphic = removeAllEventsFromGraphic;
},{"../_internal/lib/lib":23,"../_internal/misc/event-api":25,"../_internal/schedular":21}],78:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GlobalStore extends _componentInterface2.default {
  getName() {
    return 'globalStore';
  }getType() {
    return 'globalStore';
  }
}exports.default = GlobalStore;
},{"../../core/component-interface":65}],28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalStore = undefined;

var _lib = require('../lib/lib');

var _eventApi = require('./event-api');

var _dependencyManager = require('../dependency-manager');

var _schedular = require('../schedular');

var _globalstore = require('./globalstore');

var _globalstore2 = _interopRequireDefault(_globalstore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let percentRegex = /\%/,
    globalStore = new _globalstore2.default(),
    handleContainerResize = function () {
  var a,
      b,
      c = {},
      d = function () {
    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = 0,
        n = parseInt(b.options.resizeTrackingInterval, 10) || 300,
        o = {},
        p = function () {
      o.itemVar._containerOffsetW = o.parentEle.offsetWidth, o.itemVar._containerOffsetH = o.parentEle.offsetHeight;
    };for (e in c) m += 1, f = c[e], g = f.jsVars, i = f.ref, !f.disposed && (h = i && i.parentNode) && (j = i.style) && (percentRegex.test(j.width) || percentRegex.test(j.height)) ? (k = h.offsetWidth, l = h.offsetHeight, !g.resizeLocked && (k && g._containerOffsetW !== k || l && g._containerOffsetH !== l) && (f.resizeTo && f.resizeTo(), o.itemVar = g, o.parentEle = h, setTimeout(p, 1))) : (delete c[e], m -= 1);a = m ? setTimeout(d, n) : clearTimeout(a);
  };return function (e, f, g) {
    var h = e.jsVars,
        i = f || e.ref && e.ref.parentNode || {};b = g, h._containerOffsetW = i.parentNode.offsetWidth, h._containerOffsetH = i.parentNode.offsetHeight, c[e.id] = e, a || (a = setTimeout(d, parseInt(g.options.resizeTrackingInterval, 10) || 300));
  };
}();function createChart(a, b, c, d, e, f, g) {
  var h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s = b.jsVars,
      t = b.apiInstance,
      u = s.hasNativeMessage,
      v = b.options,
      w = b.args,
      x = s.secondTimeRender,
      y = percentRegex.test(b.width) ? c.offsetWidth : b.width,
      z = percentRegex.test(b.height) ? c.offsetHeight : b.height,
      A = function () {
    t.setChartEvents(), o({ hasRendered: !0, container: c });
  },
      B = () => {
    let a = h.error instanceof Error;return a && (b._chartMessageImageStyle = { imageHAlign: (0, _lib.pluck)(w.dataInvalidMessageImageHAlign, v.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(w.dataInvalidMessageImageVAlign, v.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(w.dataInvalidMessageImageAlpha, v.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(w.dataInvalidMessageImageScale, v.baseChartMessageImageScale) }, b._chartMessageStyle = { fontFamily: w.dataInvalidMessageFont || v.baseChartMessageFont, fontSize: w.dataInvalidMessageFontSize || v.baseChartMessageFontSize, color: w.dataInvalidMessageColor || v.baseChartMessageColor }, t.createBaseComponent(), t.setChartMessage(v.dataInvalidMessage, b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0, b.__state.dataReady = !1, !g && (0, _eventApi.triggerEvent)('dataInvalid', s.fcObj, { error: h.error }, _lib.UNDEF, function () {
      (0, _eventApi.triggerEvent)('dataxmlinvalid', b, {}, [b.id]);
    })), a;
  };if (d = d || b.chartType(), j = (0, _dependencyManager.getDep)(d, 'chartapi'), !j && (p = (0, _dependencyManager.getDep)(d, 'maps')) && (j = (0, _dependencyManager.getDep)('maps', 'chartapi'), r = !0), t && (t.addToEnv('chartWidth', y), t.addToEnv('chartHeight', z)), c.FusionCharts = a.items[b.id], w.asyncRender = (0, _lib.pluckNumber)(w.asyncRender, 1), o = function (d) {
    var f = { renderer: 'javascript' },
        i = s.fcObj,
        j = i.width,
        k = i.height,
        h = s.overlayButton;if (u = s.hasNativeMessage, s.container = c, s.hcObj = d, s.width = t.getFromEnv('chartWidth'), s.height = t.getFromEnv('chartHeight'), s.instanceAPI = t, d.hasRendered && s.overlayButtonActive && h && (h.innerHTML = _lib.BLANK, h.appendChild(document.createTextNode(s.overlayButtonMessage)), d.container.appendChild(h)), (/\%/g.test(j) || /\%/g.test(k)) && c && c.parentNode && !a.options.preventTrackResize && handleContainerResize(i, c, a), e && (e({ success: d.hasRendered, ref: c, id: b.id }), d.hasRendered)) {
      if (t.config.hasRendered = !0, !0 === b.disposed) return;u || (i.__state.firstRenderNotified = !0, t.addJob('postFirstRender-fire-rendered', function () {
        (0, _eventApi.triggerEvent)('rendered', i, { renderer: 'javascript' }, [i.id]);
      }, _schedular.priorityList.postRender));
    }d.hasRendered && s.previousDrawCount < s.drawCount && (f.width = s.width, f.height = s.height, f.drawCount = s.drawCount, f.displayingMessage = u, f.renderer = i.options.renderer, (0, _eventApi.triggerEvent)('drawcomplete', i, f, [i.id]), !u && !g && t.addJob('postSecondRender-fire-rendered', function () {
      i.__state && !i.__state.firstRenderNotified && (0, _eventApi.triggerEvent)('rendered', i, { renderer: 'javascript' }, [i.id]), (0, _eventApi.triggerEvent)('renderComplete', i, f);
    }, _schedular.priorityList.postRender));
  }, t && t.getState('initiated')) {
    if ((0, _eventApi.triggerEvent)('internal.drawStart', b, { chartType: d, logicName: t.name, logicBase: t.base && t.base.name, defaultSeriesType: t.defaultSeriesType }), t.getState('stallLoad') ? (t.setState('stallLoad', !1), t.setState('state', 'initial')) : t.setState('state', 'update'), h = b.jsVars && b.jsVars.themeObject && b.jsVars.themeObject.getThemedJSONData() || b.getChartData((0, _dependencyManager.getDepsByType)('transcoder').JSON, !0, !0), i = h.data, t.addToEnv('dataSource', i), t.addToEnv('chart-attrib', i.chart), B()) return;if (t._checkInvalidData() || t._checkInvalidSpecificData()) return t.createBaseComponent(), t.setChartMessage(), t.drawChartMessage(), (0, _eventApi.triggerEvent)('nodatatodisplay', b, {}, [b.id]), o && o({ hasRendered: !0, container: c }), void (t.getContainer('parentgroup') && t.getContainer('parentgroup').hide());t.config.hasChartMessage = !1, g || (0, _eventApi.triggerEvent)('dataloaded', b, {}, [b.id]), t._removeWaitingJobs(), t.addToEnv('chartWidth', y), t.addToEnv('chartHeight', z), t.setData(i), !b.hasRendered() && t.getFromEnv('paper') && t.setChartEvents(), o({ hasRendered: !0, container: c });
  } else if (t && 'base' === d) t.createBaseComponent(), t.setChartMessage(f, b, c), t.drawChartMessage(), e({ success: !0, ref: c, id: b.id });else {
    if (t && 'base' === t.getName() && 'base' !== d && (t.remove({ instant: !0 }), t = _lib.UNDEF), !t) {
      if (t = b.apiInstance = new j(), globalStore.attachChild(t, 'chartAPI'), t.addToEnv('chartInstance', b), t.addToEnv('chart', t), t.addToEnv('chart-container', c), t.addToEnv('chartWidth', y), t.addToEnv('chartHeight', z), r) for (q in p = p[0], p) p.hasOwnProperty(q) && (t.config[q] = p[q]);'base' !== d && (m = (0, _dependencyManager.getDep)('ToolTipController'), n = new m(c), t.addToEnv('toolTipController', n), t.disposeChartStyleSheet(), t.addEventListener('postconfigure', function (a) {
        t.addJob('postConfigure-lagacy-fn', A, _schedular.priorityList.postRender), a.detachHandler();
      }), t.setState('initiated', !0), b.__state.dataReady = !0), t.addToEnv('core-options', a.options);
    }if (t.config.origRenderWidth = b.__state.renderedWidth, t.config.origRenderHeight = b.__state.renderedHeight, 'base' !== d) {
      if (c.jsVars = b.jsVars, k = t.eiMethods, b.ref = c, s.type = d, k && 'string' != typeof k) for (l in k) c[l] = k[l];(0, _eventApi.triggerEvent)('loaded', b, { type: d, renderer: 'javascript' }, [b.id]);
    }if ('base' === d) t.setDummyEImethods(b.chartType()), t.createBaseComponent(), t.setChartMessage(f, b, c), t.drawChartMessage();else if (f !== _lib.UNDEF) 'string' == typeof f && (t.setChartMessage(f, b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0);else if (!(t && t.configure) || t && 'base' === t.name) b._chartMessageImageStyle = { imageHAlign: (0, _lib.pluck)(w.typeNotSupportedMessageImageHAlign, v.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(w.typeNotSupportedMessageImageVAlign, v.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(w.typeNotSupportedMessageImageAlpha, v.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(w.typeNotSupportedMessageImageScale, v.baseChartMessageImageScale) }, b._chartMessageStyle = { color: w.typeNotSupportedMessageColor || v.baseChartMessageColor, fontFamily: w.typeNotSupportedMessageFont || v.baseChartMessageFont, fontSize: w.typeNotSupportedMessageFontSize || v.baseChartMessageFontSize }, t.setChartMessage(v.typeNotSupportedMessage, b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0;else if (s.message) t.setChartMessage(s.message, b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0;else if (s.loadError) b._chartMessageImageStyle = { imageHAlign: (0, _lib.pluck)(w.dataLoadErrorMessageImageHAlign, v.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(w.dataLoadErrorMessageImageVAlign, v.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(w.dataLoadErrorMessageImageAlpha, v.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(w.dataLoadErrorMessageImageScale, v.baseChartMessageImageScale) }, b._chartMessageStyle = { color: w.dataLoadErrorMessageColor || v.baseChartMessageColor, fontFamily: w.dataLoadErrorMessageFont || v.baseChartMessageFont, fontSize: w.dataLoadErrorMessageFontSize || v.baseChartMessageFontSize }, t.createBaseComponent(), t.setChartMessage(v.dataLoadErrorMessage, b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0;else if (s.stallLoad) t.setState('stallLoad', !0), b._chartMessageImageStyle = { imageHAlign: (0, _lib.pluck)(w.dataLoadStartMessageImageHAlign, v.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(w.dataLoadStartMessageImageVAlign, v.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(w.dataLoadStartMessageImageAlpha, v.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(w.dataLoadStartMessageImageScale, v.baseChartMessageImageScale) }, b._chartMessageStyle = { fontFamily: w.dataLoadStartMessageFont || v.baseChartMessageFont, fontSize: w.dataLoadStartMessageFontSize || v.baseChartMessageFontSize, color: w.dataLoadStartMessageColor || v.baseChartMessageColor }, t.createBaseComponent(), t.setChartMessage(v.dataLoadStartMessage, b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0, o({ hasRendered: !0, container: c });else if ('zoomscatter' === d && !document.createElement('canvas').getContext) b._chartMessageImageStyle = { imageHAlign: (0, _lib.pluck)(w.browserNotSupportedMessageImageHAlign, v.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(w.browserNotSupportedMessageImageVAlign, v.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(w.browserNotSupportedMessageImageAlpha, v.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(w.browserNotSupportedMessageImageScale, v.baseChartMessageImageScale) }, b._chartMessageStyle = { color: w.browserNotSupportedMessageColor || v.baseChartMessageColor, fontFamily: w.browserNotSupportedMessageFont || v.baseChartMessageFont, fontSize: w.browserNotSupportedMessageFontSize || v.baseChartMessageFontSize }, t.createBaseComponent(), t.setChartMessage((0, _lib.pluck)(w.browserNotSupportedMessage, v.browserNotSupportedMessage), b, c), t.drawChartMessage(), u = s.hasNativeMessage = !0;else if ((0, _eventApi.triggerEvent)('internal.drawStart', b, { chartType: d, logicName: t.name, logicBase: t.base && t.base.name, defaultSeriesType: t.defaultSeriesType }), h = b.jsVars && b.jsVars.themeObject && b.jsVars.themeObject.getThemedJSONData() || b.getChartData((0, _dependencyManager.getDepsByType)('transcoder').JSON, !0), i = h.data, t.setState('state', 'initial'), !B()) {
      if (g || (0, _eventApi.triggerEvent)('dataloaded', b, {}, [b.id]), !0 === t.getFromEnv('chartInstance').disposed) return;if (w.asyncRender && !x && 'base' !== d && (t.createBaseComponent(), t.setChartMessage(t.getFromEnv('chartInstance').options.loadMessage, _lib.UNDEF, c), t.drawChartMessage(), t.config.hasChartMessage = !1), t.addToEnv('dataSource', i), t.addToEnv('chart-attrib', i.chart), t._checkInvalidData() || t._checkInvalidSpecificData()) return t.createBaseComponent(), t.setChartMessage(), t.drawChartMessage(), (0, _eventApi.triggerEvent)('nodatatodisplay', b, {}, [b.id]), void (o && o({ hasRendered: !0, container: c }));t.config.hasChartMessage = !1, t.setData(i);
    }
  }s.secondTimeRender = !0;
}exports.globalStore = globalStore;
exports.default = createChart;
},{"../lib/lib":23,"./event-api":25,"../dependency-manager":20,"../schedular":21,"./globalstore":78}],105:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lib = { init: function (a) {
    var b = a.document,
        c = a.navigator,
        d = c.userAgent,
        e = Math.ceil,
        f = Math.floor;return lib = { win: a, containerClass: 'fusioncharts-smartlabel-container', classNameWithTag: 'fusioncharts-smartlabel-tag', classNameWithTagBR: 'fusioncharts-smartlabel-br', maxDefaultCacheLimit: 1e3, classNameReg: /\bfusioncharts-smartlabel-tag\b/, classNameBrReg: /\bfusioncharts-smartlabel-br\b/, spanAdditionRegx: /(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/ig, spanAdditionReplacer: '$1<span class="fusioncharts-smartlabel-tag">$2</span>', spanRemovalRegx: /\<span[^\>]+?fusioncharts-smartlabel-tag[^\>]{0,}\>(.*?)\<\/span\>/ig, xmlTagRegEx: /<[^>][^<]*[^>]+>/i, brRegex: /({br[ ]*})|(<br[ ]*>)|(<br[ ]*\/>)|(<BR[ ]*\/>)|(<br\>)/g, ltgtRegex: /&lt;|&gt;/g, htmlSpecialEntityRegex: /&amp;|&quot;|&lt;|&gt;/g, brReplaceRegex: /<br\/>/ig, testStrAvg: 'WgI', parentContainerStyle: { position: 'absolute', top: '-9999em', whiteSpace: 'nowrap', padding: '0px', width: '1px', height: '1px', overflow: 'hidden' }, supportedStyle: { font: 'font', fontFamily: 'font-family', "font-family": 'font-family', fontWeight: 'font-weight', "font-weight": 'font-weight', fontSize: 'font-size', "font-size": 'font-size', lineHeight: 'line-height', "line-height": 'line-height', fontStyle: 'font-style', "font-style": 'font-style' }, getDocumentSupport: function () {
        var c, e, f;return b.getElementsByClassName ? (c = 'getElementsByClassName', e = 'fusioncharts-smartlabel-tag', f = !0) : (c = 'getElementsByTagName', e = 'span', f = !1), { isIE: /msie/i.test(d) && !a.opera, hasSVG: !!(a.SVGAngle || b.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')), isHeadLess: / HtmlUnit/.test(d), isWebKit: / AppleWebKit\//.test(d), childRetriverFn: c, childRetriverString: e, noClassTesting: f };
      }, createContainer: function (a) {
        var c, d;if (a && (a.offsetWidth || a.offsetHeight)) {
          if (a.appendChild) return a.appendChild(d = b.createElement('DIV')), d.className = 'fusioncharts-smartlabel-container', d.setAttribute('aria-hidden', 'true'), d.setAttribute('role', 'presentation'), d;
        } else if (c = b.getElementsByTagName('body')[0], c && c.appendChild) return d = b.createElement('DIV'), d.className = 'fusioncharts-smartlabel-container', d.setAttribute('aria-hidden', 'true'), d.setAttribute('role', 'presentation'), c.appendChild(d), d;
      }, getNearestBreakIndex: function (a, b, c) {
        if (!a || !a.length) return 0;var d,
            g = c._getWidthFn(),
            h = 0,
            i = 0,
            j = g(a),
            k = j / a.length;if (d = b, h = e(b / k), j < b) return a.length - 1;for (h > a.length && (d = b - j, h = a.length); 0 < d;) if (d = b - g(a.substr(0, h)), i = f(d / k), i) h += i;else return h;for (; 0 > d;) if (d = b - g(a.substr(0, h)), i = f(d / k), i) h += i;else return h;return h;
      }, setLineHeight: function (a) {
        var b = a.fontSize = a.fontSize || a['font-size'] || '12px';return a.lineHeight = a.lineHeight || a['line-height'] || 1.2 * parseInt(b, 10) + 'px', a;
      }, _getCleanHeight: function (a) {
        return a = a.replace(/px/g, ''), +a;
      }, _getDimentionUsingDiv: function (a = '', b) {
        var c = b._container;return a instanceof Array && (a = a.join('')), c.innerHTML = a, { width: c.offsetWidth, height: c.offsetHeight };
      }, _getDimentionUsingCanvas: function (a = '', b) {
        var c = b.ctx,
            d = b.style,
            e = lib._getCleanHeight(d.lineHeight);return a instanceof Array ? (a = a.join(''), a = a.replace(/<br \/>/g, '')) : a = a.replace(/<br \/>/g, ''), { width: c.measureText(a).width, height: e };
      }, _hasOnlyBRTag: function (a = '') {
        var b,
            c = a.replace(lib.brRegex, '<br />'),
            d = c.split('<br />'),
            e = d.length;for (b = 0; b < e; b++) if (lib.xmlTagRegEx.test(d[b])) return !1;return 1 < e;
      }, _getDimentionOfMultiLineText: function (a = '', b) {
        var c,
            d,
            e,
            f = Math.max,
            g = a.replace(lib.brRegex, '<br />'),
            h = lib._getTextArray(g),
            j = 0,
            k = 0,
            l = b._getWidthFn(),
            m = lib._getCleanHeight(b.style.lineHeight),
            n = m,
            o = {};for (c = 0, d = h.length; c < d; c++) '<br />' === h[c] ? (k = f(k, j), j = 0, n += m) : (e = l(h[c]), j += e, o[h[c]] = e);return k = f(k, j), { height: n, width: k, detailObj: o };
      }, _getTextArray: function (a = '') {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = [];for (f = a.split('<br />'), d = f.length, b = 0; b < d; b++) {
          for (g = f[b].split(''), e = g.length, c = 0; c < e; c++) h.push(g[c]);b !== d - 1 && h.push('<br />');
        }return h;
      }, _findLastIndex: function (a = [], b) {
        var c,
            d = a.length;for (c = d - 1; 0 <= c; c--) if (a[c] === b) return c;return -1;
      } }, lib;
  } };exports.default = lib;
},{}],106:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slLib = _lib2.default.init('undefined' == typeof window ? undefined : window),
    doc = slLib.win.document,
    documentSupport = slLib.getDocumentSupport(),
    SVG_BBOX_CORRECTION = documentSupport.isWebKit ? 0 : 4.5;function ContainerManager(a, b, c) {
  var d;c = 5 < c ? c : 5, c = 20 > c ? c : 20, this.maxContainers = c, this.first = null, this.last = null, this.containers = {}, this.length = 0, this.rootNode = a, b && (d = doc.createElementNS('http://www.w3.org/2000/svg', 'svg'), d.setAttributeNS('http://www.w3.org/2000/svg', 'xlink', 'http://www.w3.org/1999/xlink'), d.setAttributeNS('http://www.w3.org/2000/svg', 'height', '0'), d.setAttributeNS('http://www.w3.org/2000/svg', 'width', '0'), this.svgRoot = d, this.rootNode.appendChild(d));
}ContainerManager.prototype.get = function (a) {
  var b,
      c,
      d,
      e = this.containers,
      f = this.length,
      g = this.maxContainers,
      h = '';for (c in slLib.supportedStyle) void 0 !== a[c] && (h += slLib.supportedStyle[c] + ':' + a[c] + ';');if (!h) return !1;if (d = e[h]) this.first !== d && (d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), d.next = this.first, d.next.prev = d, this.last === d && (this.last = d.prev), d.prev = null, this.first = d);else {
    if (f >= g) for (b = f - g + 1; b--;) this.removeContainer(this.last);d = this.addContainer(h);
  }return d;
}, ContainerManager.prototype._makeDivNode = function (a) {
  var b,
      c = a.keyStr;a.node || (a.node = doc.createElement('div'), a.node.className = 'fusioncharts-div', this.rootNode.appendChild(a.node)), b = a.node, documentSupport.isIE && !documentSupport.hasSVG ? b.style.setAttribute('cssText', c) : b.setAttribute('style', c), b.setAttribute('aria-hidden', 'true'), b.setAttribute('role', 'presentation'), b.style.display = 'inline-block', b.innerHTML = slLib.testStrAvg, a.lineHeight = b.offsetHeight, a.avgCharWidth = b.offsetWidth / 3, documentSupport.isBrowserLess ? (!a.svgText && (a.svgText = doc.createElementNS('http://www.w3.org/2000/svg', 'text'), this.svgRoot.appendChild(b)), b = a.svgText, b.setAttribute('style', c), b.textContent = slLib.testStrAvg, a.lineHeight = b.getBBox().height, a.avgCharWidth = (b.getBBox().width - SVG_BBOX_CORRECTION) / 3, b.textContent = '...', a.ellipsesWidth = b.getBBox().width - SVG_BBOX_CORRECTION, b.textContent = '.', a.dotWidth = b.getBBox().width - SVG_BBOX_CORRECTION) : (b.innerHTML = '...', a.ellipsesWidth = b.offsetWidth, b.innerHTML = '.', a.dotWidth = b.offsetWidth, b.innerHTML = '');
}, ContainerManager.prototype.addContainer = function (a) {
  var b;return this.containers[a] = b = { next: null, prev: null, node: null, ellipsesWidth: 0, lineHeight: 0, dotWidth: 0, avgCharWidth: 4, keyStr: a, charCache: {} }, b.next = this.first, b.next && (b.next.prev = b), this.first = b, this.last || (this.last = b), this.length += 1, b;
}, ContainerManager.prototype.removeContainer = function (a) {
  var b = a.keyStr;b && this.length && a && (this.length -= 1, a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), this.first === a && (this.first = a.next), this.last === a && (this.last = a.prev), a.node && a.node.parentNode.removeChild(a.node), delete this.containers[b]);
}, ContainerManager.prototype.dispose = function () {
  var a,
      b = this.containers;for (a in this.maxContainers = null, b) this.removeContainer(b[a]);this.rootNode.parentNode.removeChild(this.rootNode), this.rootNode = null, this.first = null, this.last = null;
};exports.default = ContainerManager;
},{"./lib":105}],46:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

var _containerManager = require('./container-manager');

var _containerManager2 = _interopRequireDefault(_containerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slLib = _lib2.default.init('undefined' == typeof window ? undefined : window),
    doc = slLib.win.document,
    M = slLib.win.Math,
    max = M.max,
    round = M.round,
    BLANK = '',
    htmlSplCharSpace = { " ": '&nbsp;' },
    documentSupport = slLib.getDocumentSupport(),
    SVG_BBOX_CORRECTION = documentSupport.isWebKit ? 0 : 4.5;function SmartLabelManager(a, b, c) {
  var d,
      e,
      f,
      g = !1,
      h = window.document.createElement('canvas');for (e in c = c || {}, c.maxCacheLimit = isFinite(f = c.maxCacheLimit) ? f : slLib.maxDefaultCacheLimit, 'string' == typeof a && (a = doc.getElementById(a)), d = slLib.createContainer(a), d.innerHTML = slLib.testStrAvg, !documentSupport.isHeadLess && (documentSupport.isIE || d.offsetHeight || d.offsetWidth) || (g = !0), d.innerHTML = '', slLib.parentContainerStyle) d.style[e] = slLib.parentContainerStyle[e];this.parentContainer = d, this.ctx = h && h.getContext && h.getContext('2d'), this._containerManager = new _containerManager2.default(d, g, 10), this._showNoEllipses = !b, this._init = !0, this.style = {}, this.oldStyle = 1, this.options = c, this.setStyle();
}SmartLabelManager.textToLines = function (a) {
  return a = a || {}, a.text ? 'string' != typeof a.text && (a.text = a.text.toString()) : a.text = '', a.lines = a.text.split(/\n|<br\s*?\/?>/ig), a;
}, SmartLabelManager.prototype._calCharDimWithCache = function (a = '', b, c) {
  if (!this._init) return !1;var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n = this.options.maxCacheLimit,
      o = this.style || {};return (j = this._advancedCache = this._advancedCache || (this._advancedCache = {}), k = this._advancedCacheKey || (this._advancedCacheKey = []), l = a + (o.fontSize || BLANK) + (o.fontFamily || BLANK) + (o.fontWeight || BLANK) + (o.fontStyle || BLANK), m = a + 'init' + (o.fontSize || BLANK) + (o.fontFamily || BLANK) + (o.fontWeight || BLANK) + (o.fontStyle || BLANK), !this.ctx && htmlSplCharSpace[a] && (a = htmlSplCharSpace[a]), b ? void 0 === (i = j[m]) && (f = this._getDimention(a.repeat ? a.repeat(c) : Array(c + 1).join(a)).width, g = this._getDimention(a).width, i = j[m] = (f - c * g) / (c + 1), k.push(m), k.length > n && delete j[k.shift()]) : i = 0, h = j[l]) ? (e = h.split(','), { width: parseFloat(e[0], 10), height: parseFloat(e[1], 10) }) : (d = this._getDimention(a), d.width += i, j[l] = d.width + ',' + d.height, k.push(l), k.length > n && delete j[k.shift()], d);
}, SmartLabelManager.prototype._getDimention = function (a) {
  return this.requireDiv || !this.ctx ? slLib._getDimentionUsingDiv(a, this) : slLib._getDimentionUsingCanvas(a, this);
}, SmartLabelManager.prototype._getWidthFn = function () {
  var a = this,
      b = a._containerObj,
      c = b.svgText;return c ? function (a) {
    var b, d;return c.textContent = a, b = c.getBBox(), d = b.width - SVG_BBOX_CORRECTION, 1 > d && (d = b.width), d;
  } : function (b) {
    return a.requireDiv || !a.ctx ? slLib._getDimentionUsingDiv(b, a).width : slLib._getDimentionUsingCanvas(b, a).width;
  };
}, SmartLabelManager.prototype._setStyleOfCanvas = function () {
  if (this.style !== this.oldStyle) {
    var a,
        b = this,
        c = b.style,
        d = c.fontStyle || c['font-style'] || 'normal',
        e = c.fontVariant || c['font-variant'] || 'normal',
        f = c.fontWeight || c['font-weight'] || 'normal',
        g = c.fontSize || c['font-size'] || '12px',
        h = c.fontFamily || c['font-family'] || 'Verdana,sans';g += -1 === g.indexOf('px') ? 'px' : '', b.ctx.font = d + ' ' + e + ' ' + f + ' ' + g + ' ' + h, a = this._containerObj = this._containerManager.get(c), this._containerObj ? (this._container = a.node, this._context = a.context, this._cache = a.charCache, this._lineHeight = a.lineHeight, this._styleNotSet = !1) : this._styleNotSet = !0, a.ellipsesWidth = b.ctx.measureText('...').width, a.dotWidth = b.ctx.measureText('.').width, a.lineHeight = this._lineHeight = a.lineHeight || slLib._getCleanHeight(c.lineHeight), this.oldStyle = c;
  }
}, SmartLabelManager.prototype._setStyleOfDiv = function () {
  var a,
      b = this.style;this._containerObj = a = this._containerManager.get(b), a.node || this._containerManager._makeDivNode(this._containerObj), this._containerObj ? (this._container = a.node, this._context = a.context, this._cache = a.charCache, this._lineHeight = a.lineHeight, this._styleNotSet = !1) : this._styleNotSet = !0;
}, SmartLabelManager.prototype._updateStyle = function () {
  return this.requireDiv || !this.ctx ? this._setStyleOfDiv() : this._setStyleOfCanvas();
}, SmartLabelManager.prototype.setStyle = function (a) {
  a && (this.style = a, slLib.setLineHeight(a));
}, SmartLabelManager.prototype.useEllipsesOnOverflow = function (a) {
  return this._init ? (this._showNoEllipses = !a, this) : this;
}, SmartLabelManager.prototype.getSmartText = function (a, b, c, d) {
  if (!this._init) return !1;void 0 === a || null === a ? a = '' : 'string' != typeof a && (a = a.toString());var e,
      f,
      g,
      h,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P = !1,
      Q = 0,
      R = -1,
      S = -1,
      T = -1,
      U = 0,
      V = 0,
      W = [],
      X = 0,
      Y = this._showNoEllipses ? '' : '...',
      Z = this.ctx,
      $ = [],
      _ = -1,
      aa = -1,
      ba = -1,
      ca = function (a) {
    a = a.replace(/^\s\s*/, '');for (var b = /\s/, c = a.length; b.test(a.charAt(c -= 1)););return a.slice(0, c + 1);
  },
      da = { text: a, maxWidth: b, maxHeight: c, width: null, height: null, oriTextWidth: null, oriTextHeight: null, oriText: a, isTruncated: !1 };if (P = slLib.xmlTagRegEx.test(a), N = slLib._hasOnlyBRTag(a), this.requireDiv = P && !N, this._updateStyle(), H = this._lineHeight, I = this._context, J = this._container, K = this._containerObj, L = K.ellipsesWidth, M = K.dotWidth, k = a.replace(slLib.spanAdditionRegx, '$2'), q = this._getWidthFn(), 1 >= H - c && 0 <= H - c && (c *= 1.2), Z || J) {
    if (!documentSupport.isBrowserLess) {
      if (P ? N ? (a = a.replace(slLib.brRegex, '<br />'), O = slLib._getDimentionOfMultiLineText(a, this), da.oriTextWidth = l = O.width, da.oriTextHeight = m = O.height) : (J.innerHTML = a, da.oriTextWidth = l = J.offsetWidth, da.oriTextHeight = m = J.offsetHeight) : (h = a = a.replace(slLib.ltgtRegex, function (a) {
        return '&lt;' === a ? '<' : '>';
      }), t = this.getOriSize(h, !0, { hasHTMLTag: P, hasOnlyBrTag: N, cleanText: !0 }), da.oriTextWidth = l = t.width, da.oriTextHeight = m = t.height), m <= c && l <= b) return da.width = da.oriTextWidth = l, da.height = da.oriTextHeight = m, da;if (H > c) return da.text = '', da.width = da.oriTextWidth = 0, da.height = da.oriTextHeight = 0, da;
    }if (a = ca(a).replace(/(\s+)/g, ' '), j = this._showNoEllipses ? b : b - L, !P || N) {
      if (W = slLib._getTextArray(a), e = W.length, f = '', g = [], p = W[0], this._cache[p] ? z = this._cache[p].width : (z = q(p), this._cache[p] = { width: z }), j > z && !N) g = a.substr(0, slLib.getNearestBreakIndex(a, j, this)).split('');else {
        if (z > b) return da.text = '', da.width = da.oriTextWidth = da.height = da.oriTextHeight = 0, da;Y && (j = b - 2 * M, j > z ? Y = '..' : (j = b - M, j > z ? Y = '.' : (j = 0, Y = '')));
      }if (X = g.length, U = q(g.join('')), V = this._lineHeight, d) {
        for (; X < e; X += 1) {
          if (p = g[X] = W[X], '<br />' === g[X]) {
            V += this._lineHeight, T = X, Q = max(Q, U), U = 0, f = null;continue;
          }if (this._cache[p] ? z = this._cache[p].width : ((!t || !(z = t.detailObj[p])) && (z = q(p)), this._cache[p] = { width: z }), U += z, U > j && (f || (f = g.slice(0, -1).join('')), U > b)) return da.text = ca(f) + Y, da.tooltext = da.oriText, da.width = max(Q, U), da.height = V, da;
        }return da.text = g.join(''), da.width = max(Q, U), da.height = V, da;
      }for (; X < e; X += 1) {
        if (p = g[X] = W[X], ' ' !== p || I || (p = this.ctx ? ' ' : '&nbsp;'), '<br />' === g[X]) if (Q = max(Q, U), V += this._lineHeight, V <= c) {
          T = X, U = 0, f = null;continue;
        } else if (V > c) return f = g.slice(0, -1).join(''), da.text = ca(f) + Y, da.tooltext = k, da.width = Q, da.height = V - this._lineHeight, da;if (this._cache[p] ? z = this._cache[p].width : ((!t || !(z = t.detailObj[p])) && (z = q(p)), this._cache[p] = { width: z }), U += z, U > j && (f || (f = g.slice(0, -1).join('')), U > b)) {
          if ('<br />' === W[X + 1]) continue;if (S = slLib._findLastIndex(W.slice(0, g.length), ' '), R = slLib._findLastIndex(W.slice(0, g.length), '-'), S > T ? (U = q(g.slice(T + 1, S).join('')), g.splice(S, 1, '<br />'), T = S, n = S + 1) : R > T ? (R === g.length - 1 ? (U = q(g.slice(T + 1, S).join('')), g.splice(R, 1, '<br />-')) : (U = q(g.slice(T + 1, S).join('')), g.splice(R, 1, '-<br />')), T = R, n = R + 1) : (g.splice(g.length - 1, 1, '<br />' + W[X]), ba = g.length - 2, U = q(g.slice(T + 1, ba + 1).join('')), T = ba, n = X), V += this._lineHeight, V > c) return da.text = ca(f) + Y, da.tooltext = da.oriText, da.width = b, da.height = V - this._lineHeight, da;Q = max(Q, U), f = null, N ? U = slLib._getDimentionOfMultiLineText(g.slice(T + 1).join(''), this).width : (o = slLib.getNearestBreakIndex(a.substr(n), j, this), U = q(a.substr(n, o || 1)), g.length < n + o && (g = g.concat(a.substr(g.length, n + o - g.length).split('')), X = g.length - 1));
        }
      }return Q = max(Q, U), da.text = g.join(''), da.width = Q, da.height = V, da;
    }for (k = a.replace(slLib.spanAdditionRegx, '$2'), a = a.replace(slLib.spanAdditionRegx, slLib.spanAdditionReplacer), a = a.replace(/(<br\s*\/*\>)/g, '<span class="' + [slLib.classNameWithTag, ' ', slLib.classNameWithTagBR].join('') + '">$1</span>'), J.innerHTML = a, u = J[documentSupport.childRetriverFn](documentSupport.childRetriverString), (v = 0, w = u.length); v < w; v += 1) A = u[v], (documentSupport.noClassTesting || slLib.classNameReg.test(A.className)) && (B = A.innerHTML, '' !== B && (' ' === B ? aa = $.length : '-' === B && (_ = $.length), $.push({ spaceIdx: aa, dashIdx: _, elem: A }), W.push(B)));if (X = 0, e = $.length, z = $[0].elem.offsetWidth, z > b) return da.text = '', da.width = da.oriTextWidth = da.height = da.oriTextHeight = 0, da;if (z > j && !this._showNoEllipses && (j = b - 2 * M, j > z ? Y = '..' : (j = b - M, j > z ? Y = '.' : (j = 0, Y = ''))), r = $[0].elem.offsetLeft, s = $[0].elem.offsetTop, d) for (; X < e; X += 1) A = $[X].elem, C = A.offsetLeft - r + A.offsetWidth, C > j && (!G && (G = X), J.offsetWidth > b && (F = X, X = e));else for (; X < e; X += 1) A = $[X].elem, D = A.offsetHeight + (A.offsetTop - s), C = A.offsetLeft - r + A.offsetWidth, E = null, C > j ? (!G && (G = X), C > b && (S = $[X].spaceIdx, R = $[X].dashIdx, S > T ? ($[S].elem.innerHTML = '<br/>', T = S) : R > T ? ($[R].elem.innerHTML = R === X ? '<br/>-' : '-<br/>', T = R) : A.parentNode.insertBefore(E = doc.createElement('br'), A), A.offsetHeight + A.offsetTop > c ? (E ? E.parentNode.removeChild(E) : T == R ? $[R].elem.innerHTML = '-' : $[S].elem.innerHTML = ' ', F = X, X = e) : G = null)) : D > c && (F = X, X = e);if (F < e) {
      for (da.isTruncated = !0, G = G ? G : F, X = e - 1; X >= G; X -= 1) A = $[X].elem, A.parentNode.removeChild(A);for (; 0 <= X; X -= 1) A = $[X].elem, slLib.classNameBrReg.test(A.className) ? A.parentNode.removeChild(A) : X = 0;
    }return da.text = J.innerHTML.replace(slLib.spanRemovalRegx, '$1').replace(/\&amp\;/g, '&'), da.isTruncated && (da.text += Y, da.tooltext = k), (da.height = J.offsetHeight, da.width = J.offsetWidth, da);
  }return da.error = new Error('Body Tag Missing!'), da;
}, SmartLabelManager.prototype.getOriSize = function (a = '', b = !0, c = {}) {
  if (!this._init) return !1;var d,
      e,
      f,
      g,
      h,
      j,
      k = 0,
      m = 0,
      n = {},
      o = c.hasHTMLTag,
      p = c.hasOnlyBrTag;if ('undefined' == typeof o && (o = slLib.xmlTagRegEx.test(a)), 'undefined' == typeof p && (p = slLib._hasOnlyBRTag(a)), this.requireDiv = o && !p, c.cleanText || (a = a.replace(slLib.ltgtRegex, function (a) {
    return '&lt;' === a ? '<' : '>';
  })), this._updateStyle(), j = this._container, p) return slLib._getDimentionOfMultiLineText(a, this);if (!b) return this._calCharDimWithCache(a);if (o) return j.innerHTML = a, { width: j.offsetWidth, height: j.offsetHeight };for (d = a.split(''), g = 0, h = d.length; g < h; g++) e = d[g], f = this._calCharDimWithCache(e, !1, d.length), m = max(m, f.height), k += f.width, n[e] = f.width;return { width: round(k), height: m, detailObj: n };
}, SmartLabelManager.prototype.dispose = function () {
  return this._init ? (this._containerManager && this._containerManager.dispose && this._containerManager.dispose(), delete this._container, delete this._context, delete this._cache, delete this._containerManager, delete this._containerObj, delete this.id, delete this.style, delete this.parentContainer, delete this._showNoEllipses, this) : this;
};exports.default = SmartLabelManager;
},{"./lib":105,"./container-manager":106}],29:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let fileStore = {},
    addFile = function (a) {
  fileStore[a] = !0;
},
    getFile = function (a) {
  return fileStore[a];
};exports.addFile = addFile;
exports.getFile = getFile;
exports.default = { extension: function (a) {
    a.addFile = addFile, a.getFile = getFile;
  }, name: 'fileStore', type: 'plugin', requiresFusionCharts: !0 };
},{}],30:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { options: { chartTypeSourcePath: ['typeSourcePath', ''], product: ['product', 'v3'], insertMode: ['insertMode', 'replace'], safeMode: ['safeMode', !0], overlayButton: ['overlayButton'], containerBackgroundColor: ['containerBackgroundColor', '#ffffff'], containerBackgroundOpacity: ['containerBackgroundOpacity', 1], containerClassName: ['containerClassName', 'fusioncharts-container'], chartType: ['type'], baseChartMessageFont: ['baseChartMessageFont', 'Verdana,sans'], baseChartMessageFontSize: ['baseChartMessageFontSize', '10'], baseChartMessageColor: ['baseChartMessageColor', '#666666'], baseChartMessageImageHAlign: ['baseChartMessageImageHAlign', 'middle'], baseChartMessageImageVAlign: ['baseChartMessageImageVAlign', 'middle'], baseChartMessageImageAlpha: ['baseChartMessageImageAlpha', 100], baseChartMessageImageScale: ['baseChartMessageImageScale', 100], dataLoadStartMessage: ['dataLoadStartMessage', 'Retrieving data. Please wait.'], dataLoadErrorMessage: ['dataLoadErrorMessage', 'Error in loading data.'], dataInvalidMessage: ['dataInvalidMessage', 'Invalid data.'], dataEmptyMessage: ['dataEmptyMessage', 'No data to display.'], typeNotSupportedMessage: ['typeNotSupportedMessage', 'Chart type not supported.'], browserNotSupportedMessage: ['browserNotSupportedMessage', 'This browser is not supported.'], loadMessage: ['loadMessage', 'Loading chart. Please wait.'], renderErrorMessage: ['renderErrorMessage', 'Unable to render chart.'], containerElementId: ['renderAt'], renderer: ['renderer'], containerElementType: ['containerElementType'], showChartLoadingMessage: ['showChartLoadingMessage', !0], visibilityTrackingInterval: 300, events: ['events', {}] }, jsVars: {}, attributes: { lang: ['lang', 'EN'], id: ['id'] }, link: ['link'], width: ['width', '400'], height: ['height', '300'] };
},{}],31:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

let UNDEF,
    formatNumber,
    formatNumberScale,
    convertNumberSeps,
    formatDecimals,
    formatCommas,
    mathAbs = Math.abs,
    mathPow = Math.pow,
    mathRound = Math.round,
    ONESTRING = '1',
    BLANK = '',
    ZEROSTRING = '0',
    DECIMALSTRING = '.',
    COMMASTRING = ',',
    MINUSSTR = '-',
    TWOSTRING = '2',
    AUTOSTRING = 'auto',
    numberFormatDefaults = { formatnumber: '1', formatnumberscale: '1', forcenumberscale: '0', defaultnumberscale: '', numberscaleunit: ['K', 'M'], numberscalevalue: [1e3, 1e3], numberprefix: '', numbersuffix: '', decimals: '', forcedecimals: '0', yaxisvaluedecimals: '2', decimalseparator: '.', thousandseparator: ',', thousandseparatorposition: [3], indecimalseparator: '', inthousandseparator: '', sformatnumber: '1', sformatnumberscale: '0', sforcenumberscale: '0', sdefaultnumberscale: '', snumberscaleunit: ['K', 'M'], snumberscalevalue: [1e3, 1e3], snumberprefix: '', snumbersuffix: '', sdecimals: '2', sforcedecimals: '0', syaxisvaluedecimals: '2', xFormatNumber: '0', xFormatNumberScale: '0', xforcenumberscale: '0', xDefaultNumberScale: '', xNumberScaleUnit: ['K', 'M'], xNumberScaleValue: [1e3, 1e3], xNumberPrefix: '', xNumberSuffix: '' },
    numberFormatOverrides = { mscombidy2d: { formatnumberscale: '1' } };class NumberFormatter {
  constructor(a, b) {
    var c,
        d = this,
        e = a.getName && a.getName(),
        f = d.csConf = (0, _lib.extend2)({}, numberFormatDefaults),
        g = numberFormatOverrides[e];d.cleaneValueCacheStore = {}, d.percentStrCacheStore = {}, g && (c = (0, _lib.extend2)(f, g), f = c), this.linkedItems = { chart: a }, d.configure(b);
  }setDefaults() {
    let a = this,
        b = this.linkedItems.chart,
        c = b.getName && b.getName(),
        d = a.csConf = (0, _lib.extend2)({}, numberFormatDefaults),
        e = numberFormatOverrides[c];e && (0, _lib.extend2)(d, e);
  }configure(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E = this,
        F = E.linkedItems.chart,
        G = a || F.getFromEnv('chart-attrib'),
        H = F.getName && F.getName(),
        I = F.config,
        J = E.csConf;if (I || (I = F), E.csConf = J, E.useScaleRecursively = I.useScaleRecursively, (0, _lib.getValidValue)(G.numberscaleunit) && (c = G.numberscaleunit.split(COMMASTRING)), (d = (0, _lib.getValidValue)(G.snumberscaleunit, G.numberscaleunit)) && (d = d.split(COMMASTRING)), (e = (0, _lib.getValidValue)(G.xnumberscaleunit, G.numberscaleunit)) && (e = e.split(COMMASTRING)), (f = (0, _lib.getValidValue)(G.ticknumberscaleunit, G.numberscaleunit)) && (f = f.split(COMMASTRING)), (g = (0, _lib.getValidValue)(G.ynumberscaleunit, G.numberscaleunit)) && (g = g.split(COMMASTRING)), (0, _lib.getValidValue)(G.numberscalevalue) && (h = G.numberscalevalue.split(COMMASTRING)), (m = (0, _lib.getValidValue)(G.snumberscalevalue, G.numberscalevalue)) && (m = m.split(COMMASTRING)), (i = (0, _lib.getValidValue)(G.xnumberscalevalue, G.numberscalevalue)) && (i = i.split(COMMASTRING)), (j = (0, _lib.getValidValue)(G.ticknumberscalevalue, G.numberscalevalue)) && (j = j.split(COMMASTRING)), (k = (0, _lib.getValidValue)(G.ynumberscalevalue, G.numberscalevalue)) && (k = k.split(COMMASTRING)), (0, _lib.getValidValue)(G.thousandseparatorposition)) for (l = G.thousandseparatorposition.split(COMMASTRING), s = l.length, u = numberFormatDefaults.thousandseparatorposition[0]; s--;) t = parseInt(l[s], 10), 0 >= t && (t = u), u = l[s] = t;v = (0, _lib.pluckNumber)(G.scalerecursively, 0), w = (0, _lib.pluckNumber)(G.sscalerecursively, v), x = (0, _lib.pluckNumber)(G.xscalerecursively, v), y = (0, _lib.pluckNumber)(G.maxscalerecursion, -1), z = (0, _lib.pluckNumber)(G.smaxscalerecursion, y), A = (0, _lib.pluckNumber)(G.xmaxscalerecursion, y), B = (0, _lib.getValidValue)(G.scaleseparator, ' '), C = (0, _lib.getValidValue)(G.sscaleseparator, B), D = (0, _lib.getValidValue)(G.xscaleseparator, B), y || (y = -1), E.baseConf = r = { cacheStore: [], formatnumber: (0, _lib.pluck)(G.formatnumber, J.formatnumber), formatnumberscale: (0, _lib.pluck)(G.formatnumberscale, I.formatnumberscale, J.formatnumberscale), forcenumberscale: (0, _lib.pluck)(G.forcenumberscale, J.forcenumberscale), defaultnumberscale: (0, _lib.getFirstValue)(G.defaultnumberscale, J.defaultnumberscale), numberscaleunit: (0, _lib.pluck)(c, J.numberscaleunit).concat(), numberscalevalue: (0, _lib.pluck)(h, J.numberscalevalue).concat(), numberprefix: (0, _lib.getFirstValue)(G.numberprefix, J.numberprefix), numbersuffix: (0, _lib.getFirstValue)(G.numbersuffix, J.numbersuffix), decimalprecision: parseInt(G.decimals === AUTOSTRING ? J.decimalprecision : (0, _lib.pluck)(G.decimals, G.decimalprecision, I.decimals, J.decimals, I.decimalprecision, J.decimalprecision), 10), forcedecimals: (0, _lib.pluck)(G.forcedecimals, J.forcedecimals), decimalseparator: (0, _lib.pluck)(G.decimalseparator, J.decimalseparator), thousandseparator: (0, _lib.pluck)(G.thousandseparator, J.thousandseparator), thousandseparatorposition: (0, _lib.pluck)(l, J.thousandseparatorposition), indecimalseparator: (0, _lib.getFirstValue)(G.indecimalseparator, J.indecimalseparator), inthousandseparator: (0, _lib.getFirstValue)(G.inthousandseparator, J.inthousandseparator), scalerecursively: v, maxscalerecursion: y, scaleseparator: B }, (0, _lib.getValidValue)(r.inthousandseparator) && (E.baseConf._REGinthousandseparator = new RegExp((0, _lib.regescape)(r.inthousandseparator), 'g')), (0, _lib.getValidValue)(r.indecimalseparator) && (E.baseConf._REGindecimalseparator = new RegExp((0, _lib.regescape)(r.indecimalseparator))), E.Y = [], b || (n = { cacheStore: [], formatnumber: r.formatnumber, formatnumberscale: r.formatnumberscale, forcenumberscale: r.forcenumberscale, defaultnumberscale: r.defaultnumberscale, numberscaleunit: r.numberscaleunit.concat(), numberscalevalue: r.numberscalevalue.concat(), numberprefix: r.numberprefix, numbersuffix: r.numbersuffix, decimalprecision: r.decimalprecision, forcedecimals: r.forcedecimals, decimalseparator: r.decimalseparator, thousandseparator: r.thousandseparator, thousandseparatorposition: r.thousandseparatorposition, indecimalseparator: r.indecimalseparator, inthousandseparator: r.inthousandseparator, scalerecursively: v, maxscalerecursion: y, scaleseparator: B }, (!I.useScaleRecursively || (n.numberscalevalue && n.numberscalevalue.length) != (n.numberscaleunit && n.numberscaleunit.length)) && (n.scalerecursively = v = 0), p = { cacheStore: [], formatnumber: n.formatnumber, formatnumberscale: n.formatnumberscale, forcenumberscale: n.forcenumberscale, defaultnumberscale: n.defaultnumberscale, numberscaleunit: n.numberscaleunit.concat(), numberscalevalue: n.numberscalevalue.concat(), numberprefix: n.numberprefix, numbersuffix: n.numbersuffix, decimalprecision: parseInt((0, _lib.pluck)(G.yaxisvaluedecimals, n.decimalprecision, 2), 10), forcedecimals: (0, _lib.pluck)(G.forceyaxisvaluedecimals, n.forcedecimals), decimalseparator: n.decimalseparator, thousandseparator: n.thousandseparator, thousandseparatorposition: n.thousandseparatorposition.concat(), indecimalseparator: n.indecimalseparator, inthousandseparator: n.inthousandseparator, scalerecursively: v, maxscalerecursion: y, scaleseparator: B }, q = { cacheStore: [], formatnumber: (0, _lib.pluck)(G.sformatnumber, numberFormatDefaults.sformatnumber), formatnumberscale: (0, _lib.pluck)(G.sformatnumberscale, numberFormatDefaults.sformatnumberscale), forcenumberscale: (0, _lib.pluck)(G.sforcenumberscale, numberFormatDefaults.sforcenumberscale), defaultnumberscale: (0, _lib.getFirstValue)(G.sdefaultnumberscale, n.defaultnumberscale), numberscaleunit: (0, _lib.pluck)(d, numberFormatDefaults.snumberscaleunit).concat(), numberscalevalue: (0, _lib.pluck)(m, numberFormatDefaults.snumberscalevalue).concat(), numberprefix: (0, _lib.getFirstValue)(G.snumberprefix, numberFormatDefaults.snumberprefix), numbersuffix: (0, _lib.getFirstValue)(G.snumbersuffix, numberFormatDefaults.snumbersuffix), decimalprecision: parseInt((0, _lib.pluck)(G.syaxisvaluedecimals, G.sdecimals, G.decimals, numberFormatDefaults.sdecimals), 10), forcedecimals: (0, _lib.pluck)(G.forcesyaxisvaluedecimals, G.sforcedecimals, G.forcedecimals, numberFormatDefaults.sforcedecimals), decimalseparator: (0, _lib.pluck)(G.decimalseparator, numberFormatDefaults.decimalseparator), thousandseparator: (0, _lib.pluck)(G.thousandseparator, numberFormatDefaults.thousandseparator), thousandseparatorposition: n.thousandseparatorposition.concat(), indecimalseparator: (0, _lib.pluck)(G.indecimalseparator, numberFormatDefaults.indecimalseparator), inthousandseparator: (0, _lib.pluck)(G.inthousandseparator, numberFormatDefaults.inthousandseparator), scalerecursively: w, maxscalerecursion: z, scaleseparator: C }, o = (0, _lib.extend2)({}, q), o.decimalprecision = parseInt((0, _lib.pluck)(G.sdecimals, G.decimals, G.syaxisvaluedecimals, numberFormatDefaults.sdecimals), 10), o.forcedecimals = (0, _lib.pluck)(G.sforcedecimals, G.forcedecimals, G.forcesyaxisvaluedecimals, numberFormatDefaults.sforcedecimals), o.cacheStore = [], (!I.useScaleRecursively || (q.numberscalevalue && q.numberscalevalue.length) != (q.numberscaleunit && q.numberscaleunit.length)) && (q.scalerecursively = w = 0), /^(bubble|scatter|selectscatter|zoomscatter)$/ig.test(H) && (p.formatnumber = (0, _lib.pluck)(G.yformatnumber, p.formatnumber), p.formatnumberscale = (0, _lib.pluck)(G.yformatnumberscale, p.formatnumberscale), p.forcenumberscale = (0, _lib.pluck)(G.yforcenumberscale, p.forcenumberscale), p.defaultnumberscale = (0, _lib.getFirstValue)(G.ydefaultnumberscale, p.defaultnumberscale), p.numberscaleunit = (0, _lib.pluck)(g, p.numberscaleunit), p.numberscalevalue = (0, _lib.pluck)(k, p.numberscalevalue), p.numberprefix = (0, _lib.pluck)(G.ynumberprefix, p.numberprefix), p.numbersuffix = (0, _lib.pluck)(G.ynumbersuffix, p.numbersuffix), n.formatnumber = (0, _lib.pluck)(G.yformatnumber, n.formatnumber), n.formatnumberscale = (0, _lib.pluck)(G.yformatnumberscale, n.formatnumberscale), n.forcenumberscale = (0, _lib.pluck)(G.yforcenumberscale, n.forcenumberscale), n.defaultnumberscale = (0, _lib.getFirstValue)(G.ydefaultnumberscale, n.defaultnumberscale), n.numberscaleunit = (0, _lib.pluck)(G.ynumberscaleunit, n.numberscaleunit.concat()), n.numberscalevalue = (0, _lib.pluck)(G.ynumberscalevalue, n.numberscalevalue.concat()), n.numberprefix = (0, _lib.pluck)(G.ynumberprefix, n.numberprefix), n.numbersuffix = (0, _lib.pluck)(G.ynumbersuffix, n.numbersuffix)), /^(pie2d|pie3d|doughnut2d|doughnut3d|marimekko|pareto2d|pareto3d)$/.test(H) && (n.decimalprecision = (0, _lib.pluck)(G.decimals, TWOSTRING)), v && (n.numberscalevalue.push(1), n.numberscaleunit.unshift(n.defaultnumberscale), p.numberscalevalue.push(1), p.numberscaleunit.unshift(p.defaultnumberscale)), w && (q.numberscalevalue.push(1), q.numberscaleunit.unshift(q.defaultnumberscale), o.numberscalevalue.push(1), o.numberscaleunit.unshift(o.defaultnumberscale)), E.Y[0] = { yAxisLabelConf: p, dataLabelConf: n }, E.Y[1] = { yAxisLabelConf: q, dataLabelConf: o }, E.paramLabels = n, E.param1 = p, E.param2 = q, E.paramLabels2 = o), E.paramX = { cacheStore: [], formatnumber: (0, _lib.pluck)(G.xformatnumber, r.formatnumber), formatnumberscale: (0, _lib.pluck)(G.xformatnumberscale, r.formatnumberscale), forcenumberscale: (0, _lib.pluck)(G.xforcenumberscale, r.forcenumberscale), defaultnumberscale: (0, _lib.getFirstValue)(G.xdefaultnumberscale, r.defaultnumberscale), numberscaleunit: (0, _lib.pluck)(e, r.numberscaleunit.concat()), numberscalevalue: (0, _lib.pluck)(i, r.numberscalevalue.concat()), numberprefix: (0, _lib.pluck)(G.xnumberprefix, r.numberprefix), numbersuffix: (0, _lib.pluck)(G.xnumbersuffix, r.numbersuffix), decimalprecision: parseInt((0, _lib.pluck)(G.xaxisvaluedecimals, G.xaxisvaluesdecimals, r.decimalprecision, 2), 10), forcedecimals: (0, _lib.pluck)(G.forcexaxisvaluedecimals, 0), decimalseparator: r.decimalseparator, thousandseparator: r.thousandseparator, thousandseparatorposition: r.thousandseparatorposition.concat(), indecimalseparator: r.indecimalseparator, inthousandseparator: r.inthousandseparator, scalerecursively: x, maxscalerecursion: A, scaleseparator: D }, E.paramLegend = (0, _lib.extend2)((0, _lib.extend2)({}, r), { cacheStore: [], decimalprecision: parseInt((0, _lib.pluckNumber)(G.legendvaluedecimals, r.decimalprecision, 2), 10), forcedecimals: (0, _lib.pluckNumber)(G.legendvalueforcedecimals, r.forcedecimals, 0), formatnumberscale: (0, _lib.pluck)(G.legendvalueformatnumberscale, r.formatnumberscale), forcenumberscale: (0, _lib.pluck)(G.legendvalueforcenumberscale, r.forcenumberscale), formatnumber: (0, _lib.pluck)(G.legendvalueformatnumber, r.formatnumber) }), v && (E.paramLegend.numberscalevalue.push(1), E.paramLegend.numberscaleunit.unshift(E.paramLegend.defaultnumberscale)), I.useScaleRecursively && (E.paramX.numberscalevalue && E.paramX.numberscalevalue.length) == (E.paramX.numberscaleunit && E.paramX.numberscaleunit.length) || (E.paramX.scalerecursively = x = 0), x && (E.paramX.numberscalevalue.push(1), E.paramX.numberscaleunit.unshift(E.paramX.defaultnumberscale)), E.paramScale = { cacheStore: [], formatnumber: (0, _lib.pluck)(G.tickformatnumber, r.formatnumber), formatnumberscale: (0, _lib.pluck)(G.tickformatnumberscale, r.formatnumberscale), forcenumberscale: (0, _lib.pluck)(G.tickforcenumberscale, r.forcenumberscale), defaultnumberscale: (0, _lib.getFirstValue)(G.tickdefaultnumberscale, r.defaultnumberscale), numberscaleunit: (0, _lib.pluck)(f, r.numberscaleunit.concat()), numberscalevalue: (0, _lib.pluck)(j, r.numberscalevalue.concat()), numberprefix: (0, _lib.pluck)(G.ticknumberprefix, r.numberprefix), numbersuffix: (0, _lib.pluck)(G.ticknumbersuffix, r.numbersuffix), decimalprecision: parseInt((0, _lib.pluck)(G.tickvaluedecimals, r.decimalprecision, TWOSTRING), 10), forcedecimals: (0, _lib.pluck)(G.forcetickvaluedecimals, r.forcedecimals, 0), decimalseparator: r.decimalseparator, thousandseparator: r.thousandseparator, thousandseparatorposition: r.thousandseparatorposition.concat(), indecimalseparator: r.indecimalseparator, inthousandseparator: r.inthousandseparator, scalerecursively: v, maxscalerecursion: y, scaleseparator: B }, v && (E.paramScale.numberscalevalue.push(1), E.paramScale.numberscaleunit.unshift(E.paramScale.defaultnumberscale)), E.timeConf = { inputDateFormat: (0, _lib.pluck)(G.inputdateformat, G.dateformat, 'mm/dd/yyyy'), outputDateFormat: (0, _lib.pluck)(G.outputdateformat, G.inputdateformat, G.dateformat, 'mm/dd/yyyy'), days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], daySuffix: ['', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st'] }, E.cleaneValueCacheStore = {}, E.percentStrCacheStore = {};
  }dispose() {
    var a = this;a.Y && delete a.Y, a.cleaneValueCacheStore && delete a.cleaneValueCacheStore, a.percentStrCacheStore && delete a.percentStrCacheStore, a.paramLabels && delete a.paramLabels, a.param1 && delete a.param1, a.param2 && delete a.param2, a.paramLabels2 && delete a.paramLabels2, a.csConf && delete a.csConf, a.chart && delete a.chart, a.baseConf && delete a.baseConf, a.timeConf && delete a.timeConf, a.paramX && delete a.paramX, a.paramScale && delete a.paramScale;
  }parseMLAxisConf(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this.baseConf,
        l = this.csConf,
        m = (0, _lib.pluckNumber)(a.scalerecursively, k.scalerecursively),
        n = (0, _lib.pluckNumber)(a.maxscalerecursion, k.maxscalerecursion),
        o = (0, _lib.getValidValue)(a.scaleseparator, k.scaleseparator);if (b = (0, _lib.pluckNumber)(b, this.Y.length), (0, _lib.getValidValue)(a.numberscaleunit) && (d = a.numberscaleunit.split(COMMASTRING)), (0, _lib.getValidValue)(a.numberscalevalue) && (e = a.numberscalevalue.split(COMMASTRING)), n || (n = -1), (0, _lib.getValidValue)(a.thousandseparatorposition)) for (g = a.thousandseparatorposition.split(COMMASTRING), h = g.length, j = numberFormatDefaults.thousandseparatorposition[0]; h--;) i = (0, _lib.pluckNumber)(mathAbs(g[h])), i ? j = i : i = j, g[h] = i;c = { cacheStore: [], formatnumber: (0, _lib.pluck)(a.formatnumber, k.formatnumber), formatnumberscale: (0, _lib.pluck)(a.formatnumberscale, k.formatnumberscale), forcenumberscale: (0, _lib.pluck)(a.forcenumberscale, k.forcenumberscale), defaultnumberscale: (0, _lib.getFirstValue)(a.defaultnumberscale, k.defaultnumberscale), numberscaleunit: (0, _lib.pluck)(d, k.numberscaleunit).concat(), numberscalevalue: (0, _lib.pluck)(e, k.numberscalevalue).concat(), numberprefix: (0, _lib.getFirstValue)(a.numberprefix, k.numberprefix), numbersuffix: (0, _lib.getFirstValue)(a.numbersuffix, k.numbersuffix), forcedecimals: (0, _lib.pluck)(a.forcedecimals, k.forcedecimals), decimalprecision: parseInt(a.decimals === AUTOSTRING ? l.decimalprecision : (0, _lib.pluck)(a.decimals, k.decimalprecision), 10), decimalseparator: (0, _lib.pluck)(a.decimalseparator, k.decimalseparator), thousandseparator: (0, _lib.pluck)(a.thousandseparator, k.thousandseparator), thousandseparatorposition: (0, _lib.pluck)(g, k.thousandseparatorposition), indecimalseparator: (0, _lib.getFirstValue)(a.indecimalseparator, k.indecimalseparator), inthousandseparator: (0, _lib.getFirstValue)(a.inthousandseparator, k.inthousandseparator), scalerecursively: m, maxscalerecursion: n, scaleseparator: o }, this.useScaleRecursively && (c.numberscalevalue && c.numberscalevalue.length) == (c.numberscaleunit && c.numberscaleunit.length) || (c.scalerecursively = m = 0), f = { cacheStore: [], formatnumber: c.formatnumber, formatnumberscale: c.formatnumberscale, forcenumberscale: c.forcenumberscale, defaultnumberscale: c.defaultnumberscale, numberscaleunit: c.numberscaleunit.concat(), numberscalevalue: c.numberscalevalue.concat(), numberprefix: c.numberprefix, numbersuffix: c.numbersuffix, decimalprecision: parseInt((0, _lib.pluck)(a.yaxisvaluedecimals, c.decimalprecision, 2), 10), forcedecimals: (0, _lib.pluck)(a.forceyaxisvaluedecimals, c.forcedecimals), decimalseparator: c.decimalseparator, thousandseparator: c.thousandseparator, thousandseparatorposition: c.thousandseparatorposition.concat(), indecimalseparator: c.indecimalseparator, inthousandseparator: c.inthousandseparator, scalerecursively: m, maxscalerecursion: n, scaleseparator: o }, m && (c.numberscalevalue.push(1), c.numberscaleunit.unshift(c.defaultnumberscale), f.numberscalevalue.push(1), f.numberscaleunit.unshift(f.defaultnumberscale)), this.Y[b] = { dataLabelConf: c, yAxisLabelConf: f };
  }percentValue(a) {
    var b,
        c = this.percentStrCacheStore[a];return c === UNDEF && (b = isNaN(this.paramLabels.decimalprecision) ? '2' : this.paramLabels.decimalprecision, c = this.percentStrCacheStore[a] = formatCommas(formatDecimals(a, b, this.paramLabels.forcedecimals), this.paramLabels.decimalseparator, this.paramLabels.thousandseparator, this.paramLabels.thousandseparatorposition) + '%'), c;
  }getCleanValue(a, b) {
    var c,
        d = this.cleaneValueCacheStore[a];return (d === UNDEF || b) && (c = convertNumberSeps(a, this.baseConf), this.cleaneValueCacheStore[a] = d = isNaN(c) ? null : b ? mathAbs(c) : c), d;
  }dataLabels(a, b) {
    var c,
        d = this.Y[b] || (b ? this.Y[1] : this.Y[0]);return d = d && d.dataLabelConf || this.baseConf, c = d.cacheStore[a], c === UNDEF && (c = d.cacheStore[a] = formatNumber(a, d)), c;
  }yAxis(a, b) {
    var c,
        d = this.Y[b] || (b ? this.Y[1] : this.Y[0]);return d = d && d.yAxisLabelConf || this.baseConf, c = d.cacheStore[a], c === UNDEF && (c = d.cacheStore[a] = formatNumber(a, d, !0)), c;
  }xAxis(a) {
    var b = this.paramX.cacheStore[a];return b === UNDEF && (b = this.paramX.cacheStore[a] = formatNumber(a, this.paramX, !0)), b;
  }sYAxis(a) {
    var b,
        c = this.Y[1];return c = c && c.yAxisLabelConf || this.baseConf, b = c.cacheStore[a], b === UNDEF && (b = c.cacheStore[a] = formatNumber(a, c)), b;
  }scale(a) {
    var b = this.paramScale.cacheStore[a];return b === UNDEF && (b = this.paramScale.cacheStore[a] = formatNumber(a, this.paramScale)), b;
  }legendValue(a) {
    var b = this.paramLegend.cacheStore[a];return b === UNDEF && (b = this.paramLegend.cacheStore[a] = formatNumber(a, this.paramLegend)), b;
  }legendPercentValue(a) {
    var b,
        c = this.percentStrCacheStore[a],
        d = this.paramLegend;return c === UNDEF && (b = isNaN(d.decimalprecision) ? '2' : d.decimalprecision, c = this.percentStrCacheStore[a] = formatCommas(formatDecimals(a, b, d.forcedecimals), d.decimalseparator, d.thousandseparator, d.thousandseparatorposition) + '%'), c;
  }getDateValue(a) {
    var b, c, d, e, f;return a && !/\//.test(this.timeConf.inputDateFormat) && (a = a.replace(new RegExp(this.timeConf.inputDateFormat.replace(/[a-z]/ig, BLANK).slice(0, 1), 'g'), '/')), a = /^dd/.test(this.timeConf.inputDateFormat) && a && a.replace(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/, '$2/$1/$3') || a, b = new Date(a), f = b.getTime(), !f && a && /\:/.test(a) && (a = a.split(':'), c = (0, _lib.pluckNumber)(a[0], 0), d = (0, _lib.pluckNumber)(a[1], 0), e = (0, _lib.pluckNumber)(a[2], 0), c = 23 < c ? 24 === c && 0 === d && 0 === e ? c : 23 : c, d = 59 < d ? 59 : d, e = 59 < e ? 59 : e, b = new Date(), b.setHours(c), b.setMinutes(d), b.setSeconds(e), f = b.getTime()), { ms: f, date: b };
  }getFormattedDate(a, b) {
    var c = 'object' == typeof a && a || new Date(a),
        d = this.timeConf,
        e = (0, _lib.pluck)(b, d.outputDateFormat),
        f = c.getFullYear(),
        g = c.getMonth(),
        h = c.getDate(),
        i = c.getDay(),
        j = c.getMinutes(),
        k = c.getSeconds(),
        l = c.getHours();return j = 9 < j ? BLANK + j : ZEROSTRING + j, k = 9 < k ? BLANK + k : ZEROSTRING + k, l = 9 < l ? BLANK + l : ZEROSTRING + l, e.match(/dnl/) && (e = e.replace(/dnl/ig, d.days[i])), e.match(/dns/) && (e = e.replace(/dns/ig, d.days[i] && d.days[i].substr(0, 3))), e.match(/dd/) && (e = e.replace(/dd/ig, h)), e.match(/mnl/) && (e = e.replace(/mnl/ig, d.months[g])), e.match(/mns/) && (e = e.replace(/mns/ig, d.months[g] && d.months[g].substr(0, 3))), e.match(/mm/) && (e = e.replace(/mm/ig, g + 1)), e.match(/yyyy/) && (e = e.replace(/yyyy/ig, f)), e.match(/yy/) && (e = e.replace(/yy/ig, (f % 1e3 % 100 + '').replace(/^(\d)$/, '0$1'))), e.match(/hh12/) && (e = e.replace(/hh12/ig, l % 12 || 12)), e.match(/hh/) && (e = e.replace(/hh/ig, l)), e.match(/mn/) && (e = e.replace(/mn/ig, j)), e.match(/ss/) && (e = e.replace(/ss/ig, k)), e.match(/ampm/) && (e = e.replace(/ampm/ig, 12 > l ? 'AM' : 'PM')), e.match(/ds/) && (e = e.replace(/ds/ig, d.daySuffix[h])), e;
  }
}formatNumber = function (a, b, c) {
  var d,
      e,
      f,
      g,
      h,
      j,
      k,
      l,
      m,
      n,
      o,
      p = Math.abs;if (null !== a) {
    if (a = +a, d = a + BLANK, e = 1 == b.formatnumberscale ? b.defaultnumberscale : BLANK, m = d.split(DECIMALSTRING)[1], n = m ? m.length : b.forcedecimals ? TWOSTRING : BLANK, 1 == b.formatnumberscale && (o = formatNumberScale(a, b.defaultnumberscale, b.numberscalevalue, b.numberscaleunit, b.scalerecursively, b.forcenumberscale), d = o.value, a = o.value, e = o.scale), b.scalerecursively && 0 !== b.formatnumberscale && '0' !== b.formatnumberscale) {
      if (f = o.value, g = o.scale, h = -1 == b.maxscalerecursion ? f.length : Math.min(f.length, b.maxscalerecursion), 1 == b.formatnumber) for (d = '', l = 0; l < h; l++) j = 0 === l ? f[l] : p(f[l]), k = j + BLANK, l == h - 1 && (k = formatDecimals(j, (0, _lib.pluck)(b.decimalprecision, n), b.forcedecimals)), d = d + formatCommas(k, b.decimalseparator, b.thousandseparator, b.thousandseparatorposition) + g[l] + (l < h - 1 ? b.scaleseparator : '');else for (d = '', l = 0; l < h; l++) d = d + (0 === l ? f[l] : p(f[l]) + BLANK) + g[l] + (l < h - 1 ? b.scaleseparator : '');d = (b.numberprefix || BLANK) + d + (b.numbersuffix || BLANK);
    } else 1 == b.formatnumber && (d = formatDecimals(a, (0, _lib.pluck)(b.decimalprecision, n), b.forcedecimals), d = formatCommas(d, b.decimalseparator, b.thousandseparator, b.thousandseparatorposition, c)), d = (b.numberprefix || BLANK) + d + e + (b.numbersuffix || BLANK);return d;
  }
}, formatNumberScale = function (a, b, c, d, e, f) {
  var g,
      h,
      j,
      k,
      l = Math.abs,
      m = {},
      n = b,
      o = 0,
      p = [],
      q = [];if (f = (0, _lib.pluckNumber)(f) || 0, e) {
    for (g = (0, _lib.pluckNumber)(c[0]) || 1000, o = 0; o < c.length; o++) if (j = (0, _lib.pluckNumber)(c[o]) || 1000, l(+a) >= j && o < c.length - 1) k = a % j, a = (a - k) / j, 0 == o && 0 !== k && d[o] === BLANK && f ? (p.push(k / g), q.push(d[1] || BLANK)) : 0 !== k && (1 == o && b === BLANK && f ? (h = k + (p.length ? p.pop() : 0), q.pop(), p.push(h)) : p.push(k), q.push(d[o]));else {
      0 == o && b === BLANK && f ? (a = +a / g, p.push(a), q.push(d[1] || BLANK)) : (1 == o && b === BLANK && f ? (h = a + (p.length ? p.pop() : 0), q.pop(), p.push(h)) : p.push(a), q.push(d[o]));break;
    }p.reverse(), q.reverse(), m.value = p, m.scale = q;
  } else {
    if (c.length === d.length) for (o = 0; o < c.length; o++) if (j = (0, _lib.pluckNumber)(c[o]) || 1000, j && l(+a) >= j) n = d[o] || BLANK, a = +a / j;else {
      0 == o && b === BLANK && f && (n = d[0] || BLANK, a = +a / j);break;
    }m.value = a, m.scale = n;
  }return m;
}, formatDecimals = function (a, b, c) {
  var d, e, f, g, h;if (0 >= b) return mathRound(a) + BLANK;if (isNaN(b)) return a += BLANK, 12 < a.length && -1 != a.indexOf(DECIMALSTRING) && (b = 12 - a.split(DECIMALSTRING)[0].length, d = mathPow(10, b), e = mathRound(a * d) / d + BLANK, a = e), a;if (d = mathPow(10, b), e = mathRound(a * d) / d + BLANK, 1 == c) for (-1 == e.indexOf(DECIMALSTRING) && (e += '.0'), f = e.split(DECIMALSTRING), g = b - f[1].length, h = 1; h <= g; h++) e += ZEROSTRING;return e;
}, formatCommas = function (a, b, c, d, e) {
  var f,
      g,
      h,
      i,
      j = +a,
      k = BLANK,
      l = !1,
      m = BLANK,
      n = BLANK,
      o = 0,
      p = 0;if (isNaN(j)) return BLANK;if (1000000000000000 < j) return f = e ? 1 : 14, j.toExponential(f);if (o = 0, p = a.length, -1 != a.indexOf(DECIMALSTRING) && (k = a.substring(a.indexOf(DECIMALSTRING) + 1, a.length), p = a.indexOf(DECIMALSTRING)), 0 > j && (l = !0, o = 1), m = a.substring(o, p), g = m.length, h = d.length - 1, i = d[h], g < i) n = m;else for (; g >= i;) n = (g - i ? c : BLANK) + m.substr(g - i, i) + n, g -= i, i = 0 >= (h -= 1) ? d[0] : d[h], g < i && (n = m.substring(g, 0) + n);return k != BLANK && (n = n + b + k), !0 == l && (n = MINUSSTR + n), n;
}, convertNumberSeps = function (a, b) {
  return a += BLANK, b._REGinthousandseparator && (a = a.replace(b._REGinthousandseparator, BLANK)), b._REGindecimalseparator && (a = a.replace(b._REGindecimalseparator, DECIMALSTRING)), a = parseFloat(a), isFinite(a) ? a : NaN;
};exports.default = NumberFormatter;
},{"../lib/lib":23}],126:[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raphael = require("../raphael.lib");

exports.default = function (a) {
  var b,
      c,
      d = /[\.\/]/,
      g = /\s*,\s*/,
      e = function (c, a) {
    return c - a;
  },
      h = { n: {} },
      f = function () {
    for (var a = 0, b = this.length; a < b; a++) if ("undefined" != typeof this[a]) return this[a];
  },
      j = function () {
    for (var a = this.length; --a;) if ("undefined" != typeof this[a]) return this[a];
  },
      i = Object.prototype.toString,
      k = String,
      l = Array.isArray || function (a) {
    return a instanceof Array || "[object Array]" == i.call(a);
  },
      m = function (a, d) {
    var g,
        h = c,
        k = (0, _raphael.getArrayCopy)(arguments),
        n = Array.prototype.slice.call(k, 2),
        o = m.listeners(a),
        p = 0,
        q = [],
        r = {},
        s = [],
        t = b;s.firstDefined = f, s.lastDefined = j, b = a, c = 0;for (var u = 0, v = o.length; u < v; u++) "zIndex" in o[u] && (q.push(o[u].zIndex), 0 > o[u].zIndex && (r[o[u].zIndex] = o[u]));for (q.sort(e); 0 > q[p];) if (g = r[q[p++]], s.push(g.apply(d, n)), c) return c = h, s;for (u = 0; u < v; u++) if (g = o[u], "zIndex" in g) {
      if (g.zIndex == q[p]) {
        if (s.push(g.apply(d, n)), c) break;do if (p++, g = r[q[p]], g && s.push(g.apply(d, n)), c) break; while (g);
      } else r[g.zIndex] = g;
    } else if (s.push(g.apply(d, n)), c) break;return c = h, b = t, s;
  };return m._events = h, m.listeners = function (a) {
    var b,
        c,
        f,
        g,
        m,
        n,
        o,
        p,
        q = l(a) ? a : a.split(d),
        r = h,
        s = [r],
        t = [];for (g = 0, m = q.length; g < m; g++) {
      for (p = [], n = 0, o = s.length; n < o; n++) for (r = s[n].n, c = [r[q[g]], r["*"]], f = 2; f--;) b = c[f], b && (p.push(b), t = t.concat(b.f || []));s = p;
    }return t;
  }, m.separator = function (a) {
    a ? (a = k(a).replace(/(?=[\.\^\]\[\-])/g, "\\"), a = "[" + a + "]", d = new RegExp(a)) : d = /[\.\/]/;
  }, m.on = function (a, b) {
    if ("function" != typeof b) return function () {};for (var c = l(a) ? l(a[0]) ? a : [a] : k(a).split(g), e = 0, f = c.length; e < f; e++) (function (a) {
      for (var c, f = l(a) ? a : k(a).split(d), g = h, j = 0, m = f.length; j < m; j++) g = g.n, g = g.hasOwnProperty(f[j]) && g[f[j]] || (g[f[j]] = { n: {} });for (g.f = g.f || [], j = 0, m = g.f.length; j < m; j++) if (g.f[j] == b) {
        c = !0;break;
      }c || g.f.push(b);
    })(c[e]);return function (a) {
      +a == +a && (b.zIndex = +a);
    };
  }, m.f = function (a) {
    var b = (0, _raphael.getArrayCopy)(arguments),
        c = [].slice.call(b, 1);return function () {
      m.apply(null, [a, null].concat(c).concat([].slice.call(b, 0)));
    };
  }, m.stop = function () {
    c = 1;
  }, m.nt = function (a) {
    var c = l(b) ? b.join(".") : b;return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(c) : c;
  }, m.nts = function () {
    return l(b) ? b : b.split(d);
  }, m.off = m.unbind = function (a, b) {
    if (!a) return void (m._events = h = { n: {} });var c = l(a) ? l(a[0]) ? a : [a] : k(a).split(g);if (1 < c.length) {
      for (var f = 0, n = c.length; f < n; f++) m.off(c[f], b);return;
    }c = l(a) ? a : k(a).split(d);var o,
        p,
        q,
        f,
        n,
        r,
        s,
        t = [h],
        u = [];for (f = 0, n = c.length; f < n; f++) for (r = 0; r < t.length; r += q.length - 2) {
      if (q = [r, 1], o = t[r].n, "*" != c[f]) o[c[f]] && (q.push(o[c[f]]), u.unshift({ n: o, name: c[f] }));else for (p in o) o.hasOwnProperty(p) && (q.push(o[p]), u.unshift({ n: o, name: p }));t.splice.apply(t, q);
    }for (f = 0, n = t.length; f < n; f++) for (o = t[f]; o.n;) {
      if (b) {
        if (o.f) {
          for (r = 0, s = o.f.length; r < s; r++) if (o.f[r] == b) {
            o.f.splice(r, 1);break;
          }o.f.length || delete o.f;
        }for (p in o.n) if (o.n.hasOwnProperty(p) && o.n[p].f) {
          var v = o.n[p].f;for (r = 0, s = v.length; r < s; r++) if (v[r] == b) {
            v.splice(r, 1);break;
          }v.length || delete o.n[p].f;
        }
      } else for (p in delete o.f, o.n) o.n.hasOwnProperty(p) && o.n[p].f && delete o.n[p].f;o = o.n;
    }prune: for (f = 0, n = u.length; f < n; f++) {
      for (p in o = u[f], o.n[o.name].f) continue prune;for (p in o.n[o.name].n) continue prune;delete o.n[o.name];
    }
  }, m.once = function (a, b) {
    var c = function () {
      return m.off(a, c), b.apply(this, arguments);
    };return m.on(a, c);
  }, m.version = "0.5.3", m.toString = function () {
    return "You are running Eve 0.5.3";
  }, a.eve = m, m;
}("undefined" == typeof window ? "undefined" == typeof global ? null : global : window);
},{"../raphael.lib":87}],90:[function(require,module,exports) {
var global = arguments[3];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eve = require('./eve/eve');

var _eve2 = _interopRequireDefault(_eve);

var _raphael = require('./raphael.lib');

var _raphael2 = _interopRequireDefault(_raphael);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _win = 'undefined' == typeof window ? 'undefined' == typeof global ? null : global : window;function R(e) {
  var t, a, n;return void 0 === R._url && (R._url = E), R.is(e, FUNCTION) ? loaded ? e() : _eve2.default.on('raphael.DOMload', e) : R.is(e, ARRAY) ? R._engine.create[APPLY](R, e.splice(0, 3 + R.is(e[0], NU))).add(e) : (a = (0, _raphael.getArrayCopy)(arguments), t = Array.prototype.slice.call(a, 0), R.is(t[t.length - 1], FUNCTION) ? (n = t.pop(), loaded ? n.call(R._engine.create[APPLY](R, t)) : _eve2.default.on('raphael.DOMload', function () {
    n.call(R._engine.create[APPLY](R, t));
  })) : R._engine.create[APPLY](R, arguments));
}R.upgrade = '1.0.0', R.version = '2.1.0', R.eve = _eve2.default;var loaded,
    UNDEF,
    undef,
    __data,
    E = '',
    S = ' ',
    HAS = 'hasOwnProperty',
    APPLY = 'apply',
    CONCAT = 'concat',
    NU = 'number',
    STRING = 'string',
    ARRAY = 'array',
    OBJECT = 'object',
    FINITE = 'finite',
    SPLIT = 'split',
    NONE = 'none',
    BLACK = '#000',
    NULL = 'null',
    FUNCTION = 'function',
    COMMA = ',',
    TOKEN1 = '$1',
    rCheckRegex = /R/i,
    paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
    arraySplice = Array.prototype.splice,
    hasPrototypeBug = function () {
  return function () {}.hasOwnProperty('prototype');
}(),
    g = { doc: _win.document, win: _win },
    doc = g.doc,
    win = g.win,
    supportsTouch = R.supportsTouch = 'createTouch' in doc,
    mStr = 'm',
    lStr = 'l',
    strM = 'M',
    strL = 'L',
    __params = [],
    charRegex = /[a-z]/i,
    pathStringBreakFn = function (e, t, a) {
  var n = t.toLowerCase(),
      r = [],
      o = 0;if (__params.length = 0, a.replace(pathValues, function (e, t) {
    t && __params.push(+t);
  }), 'r' === n) __data.push([t][CONCAT](__params));else if ('z' === n) __data.push([t]);else if (__params.length >= paramCounts[n]) {
    for (; o < __params.length;) o % paramCounts[n] ? r.push(__params[o]) : (r.length && __data.push(r) && (r = []), r.push(t, __params[o])), o++;__data.push(r);
  }
},
    supportsOnlyTouch = R.supportsOnlyTouch = supportsTouch && !(win.navigator.maxTouchPoints || win.navigator.msMaxTouchPoints),
    CustomAttributes = function () {},
    caproto = R.ca = R.customAttributes = CustomAttributes.prototype,
    Paper = function () {
  this.ca = this.customAttributes = new CustomAttributes(), this._CustomAttributes = function () {}, this._CustomAttributes.prototype = this.ca, this._elementsById = {}, this.id = R._oid++, (0, _eve2.default)('raphael.new', this);
},
    paperproto = R.fn = Paper.prototype = R.prototype,
    events = 'click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel dragstart dragmove dragend'.split(' '),
    touchMap = R._touchMap = { mousedown: 'touchstart', mousemove: 'touchmove', mouseup: 'touchend' },
    dragEventMap = R._dragEventMap = { dragstart: 'mousedown', dragmove: 'mousemove', dragend: 'mouseup' },
    Str = String,
    toFloat = win.parseFloat,
    toInt = win.parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    mathCos = math.cos,
    mathSin = math.sin,
    mathSqrt = math.sqrt,
    round = math.round,
    PI = math.PI,
    deg2rad = PI / 180,
    rad2deg = 180 / PI,
    lowerCase = Str.prototype.toLowerCase,
    upperCase = Str.prototype.toUpperCase,
    objectToString = Object.prototype.toString,
    separator = /[, ]+/,
    formatrg = /\{(\d+)\}/g,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
    p2s = /,?([achlmqrstvxz]),?/gi,
    pathCommaRegex = /,?[a-z],?/i,
    pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
    tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
    isnan = { NaN: 1, Infinity: 1, "-Infinity": 1 },
    hsrg = { hs: 1, rg: 1 },
    availableAttrs = R._availableAttrs = { "arrow-end": 'none', "arrow-start": 'none', blur: 0, "clip-rect": '0 0 1e9 1e9', "clip-path": '', cursor: 'default', cx: 0, cy: 0, fill: '#fff', "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": '10', "font-style": 'normal', "font-weight": 400, gradient: 0, height: 0, href: 'about:blank', "letter-spacing": 0, "line-height": 12, "vertical-align": 'middle', opacity: 1, path: 'M0,0', r: 0, rx: 0, ry: 0, src: '', stroke: '#000', "stroke-dasharray": '', "stroke-linecap": 'butt', "stroke-linejoin": 'butt', "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: '_blank', "text-anchor": 'middle', visibility: '', title: '', transform: '', rotation: 0, width: 0, x: 0, y: 0, "shape-rendering": 'auto', alpha: 'number' },
    availableAnimAttrs = R._availableAnimAttrs = { blur: 'number', "clip-rect": 'csv', "clip-path": 'path', cx: 'number', cy: 'number', fill: 'colour', "fill-opacity": 'number', "font-size": 'number', height: 'number', opacity: 'number', path: 'path', r: 'number', rx: 'number', ry: 'number', stroke: 'colour', "stroke-opacity": 'number', "stroke-width": 'number', transform: 'transform', width: 'number', x: 'number', y: 'number', color: 'colour', borderColor: 'colour', borderWidth: 'number', alpha: 'number', "text-bound": 'text-bound' },
    eldata = {},
    sortByNumber = function (e, t) {
  return toFloat(e) - toFloat(t);
},
    fun = function () {},
    pipe = function (e) {
  return e;
},
    rectPath = R._rectPath = function (e, t, a, n, i) {
  return i ? [[strM, e + i, t], [lStr, a - 2 * i, 0], ['a', i, i, 0, 0, 1, i, i], [lStr, 0, n - 2 * i], ['a', i, i, 0, 0, 1, -i, i], [lStr, 2 * i - a, 0], ['a', i, i, 0, 0, 1, -i, -i], [lStr, 0, 2 * i - n], ['a', i, i, 0, 0, 1, i, -i], ['z']] : [[strM, e, t], [lStr, a, 0], [lStr, 0, n], [lStr, -a, 0], ['z']];
},
    ellipsePath = function (e, t, a, n) {
  return null == n && (n = a), [[strM, e, t], [mStr, 0, -n], ['a', a, n, 0, 1, 1, 0, 2 * n], ['a', a, n, 0, 1, 1, 0, -2 * n], ['z']];
},
    getPath = R._getPath = { group: function () {
    return !1;
  }, path: function (e) {
    return e.attr('path');
  }, circle: function (e) {
    var t = e.attrs;return ellipsePath(t.cx, t.cy, t.r);
  }, ellipse: function (e) {
    var t = e.attrs;return ellipsePath(t.cx, t.cy, t.rx, t.ry);
  }, rect: function (e) {
    var t = e.attrs;return rectPath(t.x, t.y, t.width, t.height, t.r);
  }, image: function (e) {
    var t = e.attrs;return rectPath(t.x, t.y, t.width, t.height);
  }, text: function (e) {
    var t = e._getBBox();return rectPath(t.x, t.y, t.width, t.height);
  } },
    mapPath = R.mapPath = function (e, t) {
  if (!t) return e;var a, n, r, o, s, l, d;for (e = path2curve(e).slice(0), r = 0, s = e.length; r < s; r++) for (d = e[r] = e[r].slice(0), o = 1, l = d.length; o < l; o += 2) a = t.x(d[o], d[o + 1]), n = t.y(d[o], d[o + 1]), d[o] = a, d[o + 1] = n;return e;
},
    lastArgIfGroup = R._lastArgIfGroup = function (e, t) {
  var a = e.length - 1,
      n = e[a];if (n && n.constructor === R.el.constructor && 'group' === n.type) return t && (e[a] = void 0, delete e[a], arraySplice.call(e, a, 1)), n;
},
    serializeArgs = R._serializeArgs = function (e) {
  var t,
      a,
      n,
      r,
      o = e[0];if (R.is(o, OBJECT) && !R.is(o, ARRAY) && 'group' !== o.type) for (a = o, o.path && (t = o.path, t && !R.is(t, STRING) && !R.is(t[0], ARRAY) && (t += E)), (n = 1, r = arguments.length); n < r; n += 2) a[arguments[n]] || (a[arguments[n]] = arguments[n + 1]);else for (a = {}, n = 1, r = arguments.length; n < r; n += 2) a[arguments[n]] = e[(n - 1) / 2] || arguments[n + 1];return a;
},
    is = R.is = function (e, t) {
  return t === FINITE ? !isnan[HAS](+e) : t === ARRAY ? e instanceof Array : (t !== OBJECT || e !== undef && null !== e) && (t == NULL && null === e || t == typeof e && null !== e || t == OBJECT && e === Object(e) || t == ARRAY && Array.isArray && Array.isArray(e) || objectToString.call(e).slice(8, -1).toLowerCase() === t);
},
    clone = R.clone = hasPrototypeBug ? function (e) {
  if (Object(e) !== e) return e;var t = new e.constructor();for (var a in e) 'prototype' !== a && e[HAS](a) && (t[a] = clone(e[a]));return t;
} : function (e) {
  if (Object(e) !== e) return e;var t = new e.constructor();for (var a in e) e[HAS](a) && (t[a] = clone(e[a]));return t;
},
    Node = _win.Node;Node && !Node.prototype.contains && (Node.prototype.contains = function (e) {
  for (; e = e.parentNode;) if (e === this) return !0;return !1;
});R._g = g, R.merge = _raphael.merge, R.extend = _raphael2.default, R.createUUID = function (e, t) {
  return function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(e, t).toUpperCase();
  };
}(/[xy]/g, function (e) {
  var t = 0 | 16 * math.random(),
      a = 'x' === e ? t : 8 | 3 & t;return a.toString(16);
}), R._radial_gradient = /^x?r(?:\(([^\)]*?)\))?/, R._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, R.getElementID = function (e) {
  return 'rr-' + e;
};function PriorityQueue(e) {
  this._comparator = e, this._elements = [];
}PriorityQueue.prototype.isEmpty = function () {
  return 0 === this.size();
}, PriorityQueue.prototype.peek = function () {
  return this.isEmpty() ? null : this._elements[0];
}, PriorityQueue.prototype.deq = function () {
  var e = this.peek(),
      t = this._elements.pop(),
      a = this.size();if (0 === a) return e;this._elements[0] = t;for (var n = 0; n < a;) {
    var i = n,
        r = 2 * n + 1,
        o = 2 * n + 2;if (r < a && 0 <= this._compare(r, i) && (i = r), o < a && 0 <= this._compare(o, i) && (i = o), i === n) break;this._swap(i, n), n = i;
  }return e;
}, PriorityQueue.prototype.enq = function (e) {
  for (var t = this._elements.push(e), a = t - 1; 0 < a;) {
    var n = Math.floor((a - 1) / 2);if (0 >= this._compare(a, n)) break;this._swap(n, a), a = n;
  }return t;
}, PriorityQueue.prototype.size = function () {
  return this._elements.length;
}, PriorityQueue.prototype._compare = function (e, t) {
  return this._comparator(this._elements[e], this._elements[t]);
}, PriorityQueue.prototype._swap = function (e, t) {
  var a = this._elements[e];this._elements[e] = this._elements[t], this._elements[t] = a;
}, R.type = win.ENABLE_RED_CANVAS && (win.CanvasRenderingContext2D || doc.createElement('canvas').getContext) ? 'CANVAS' : win.SVGAngle || doc.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1') ? 'SVG' : 'VML', R.svg = !((R.vml = 'VML' === R.type) || (R.canvas = 'CANVAS' === R.type)), R._Paper = Paper, R._id = 0, R._oid = 0, R.rad = function (e) {
  return e % 360 * deg2rad;
}, R.deg = function (e) {
  return e * rad2deg % 360;
};var toHex = function (e) {
  if (R.vml) {
    var t,
        a = /^\s+|\s+$/g;try {
      var n = new ActiveXObject('htmlfile');n.write('<body>'), n.close(), t = n.body;
    } catch (a) {
      t = createPopup().document.body;
    }var r = t.createTextRange();toHex = (0, _raphael.cacher)(function (e) {
      try {
        t.style.color = Str(e).replace(a, E);var n = r.queryCommandValue('ForeColor');return n = (255 & n) << 16 | 65280 & n | (16711680 & n) >>> 16, '#' + ('000000' + n.toString(16)).slice(-6);
      } catch (t) {
        return NONE;
      }
    });
  } else {
    var o = g.doc.createElement('i');o.title = 'Rapha\xEBl Colour Picker', o.style.display = NONE, g.doc.body.appendChild(o), toHex = (0, _raphael.cacher)(function (e) {
      return o.style.color = e, g.doc.defaultView.getComputedStyle(o, E).getPropertyValue('color');
    });
  }return toHex(e);
},
    hsbtoString = function () {
  return 'hsb(' + [this.h, this.s, this.b] + ')';
},
    hsltoString = function () {
  return 'hsl(' + [this.h, this.s, this.l] + ')';
},
    rgbtoString = function () {
  return this.hex;
},
    prepareRGB = function (e, t, a) {
  if (null == t && is(e, OBJECT) && 'r' in e && 'g' in e && 'b' in e && (a = e.b, t = e.g, e = e.r), null == t && is(e, STRING)) {
    var n = R.getRGB(e);e = n.r, t = n.g, a = n.b;
  }return (1 < e || 1 < t || 1 < a) && (e /= 255, t /= 255, a /= 255), [e, t, a];
},
    packageRGB = function (e, t, a, n) {
  var i = { r: e *= 255, g: t *= 255, b: a *= 255, hex: R.rgb(e, t, a), toString: rgbtoString };return is(n, FINITE) && (i.opacity = n), i;
};R.color = function (e) {
  var t;return R.is(e, OBJECT) && 'h' in e && 's' in e && 'b' in e ? (t = R.hsb2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.hex = t.hex) : R.is(e, OBJECT) && 'h' in e && 's' in e && lStr in e ? (t = R.hsl2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.hex = t.hex) : (R.is(e, STRING) && (e = R.getRGB(e)), R.is(e, OBJECT) && 'r' in e && 'g' in e && 'b' in e ? (t = R.rgb2hsl(e), e.h = t.h, e.s = t.s, e.l = t.l, t = R.rgb2hsb(e), e.v = t.b) : (e = { hex: NONE }, e.r = e.g = e.b = e.h = e.s = e.v = e.l = -1)), e.toString = rgbtoString, e;
}, R.hsb2rgb = function (e, t, a, n) {
  this.is(e, OBJECT) && 'h' in e && 's' in e && 'b' in e && (a = e.b, t = e.s, e = e.h, n = e.o), e *= 360;var i, r, l, d, p;return e = e % 360 / 60, p = a * t, d = p * (1 - abs(e % 2 - 1)), i = r = l = a - p, e = ~~e, i += [p, d, 0, 0, d, p][e], r += [d, p, p, d, 0, 0][e], l += [0, 0, d, p, p, d][e], packageRGB(i, r, l, n);
}, R.hsl2rgb = function (e, t, a, n) {
  this.is(e, OBJECT) && 'h' in e && 's' in e && lStr in e && (a = e.l, t = e.s, e = e.h), (1 < e || 1 < t || 1 < a) && (e /= 360, t /= 100, a /= 100), e *= 360;var i, r, o, d, p;return e = e % 360 / 60, p = 2 * t * (.5 > a ? a : 1 - a), d = p * (1 - abs(e % 2 - 1)), i = r = o = a - p / 2, e = ~~e, i += [p, d, 0, 0, d, p][e], r += [d, p, p, d, 0, 0][e], o += [0, 0, d, p, p, d][e], packageRGB(i, r, o, n);
}, R.rgb2hsb = function (e, t, a) {
  a = prepareRGB(e, t, a), e = a[0], t = a[1], a = a[2];var n, i, o, s;return o = mmax(e, t, a), s = o - mmin(e, t, a), n = 0 === s ? null : o === e ? (t - a) / s : o === t ? (a - e) / s + 2 : (e - t) / s + 4, n = 60 * ((n + 360) % 6) / 360, i = 0 === s ? 0 : s / o, { h: n, s: i, b: o, toString: hsbtoString };
}, R.rgb2hsl = function (e, t, a) {
  a = prepareRGB(e, t, a), e = a[0], t = a[1], a = a[2];var n, i, o, s, l, d;return s = mmax(e, t, a), l = mmin(e, t, a), d = s - l, n = 0 === d ? null : s === e ? (t - a) / d : s === t ? (a - e) / d + 2 : (e - t) / d + 4, n = 60 * ((n + 360) % 6) / 360, o = (s + l) / 2, i = 0 === d ? 0 : .5 > o ? d / (2 * o) : d / (2 - 2 * o), { h: n, s: i, l: o, toString: hsltoString };
}, R._path2string = function () {
  return this.join(COMMA).replace(p2s, TOKEN1);
}, R._cacher = _raphael.cacher;function clrToString() {
  return this.hex;
}R.getRGB = (0, _raphael.cacher)(function (e) {
  var a, n, i, r, o, s, l;return (e && is(e, OBJECT) && 'opacity' in e && (a = e.opacity), !e || !!((e = Str(e)).indexOf('-') + 1)) ? { r: -1, g: -1, b: -1, hex: NONE, error: 1, toString: clrToString } : e === NONE ? { r: -1, g: -1, b: -1, hex: NONE, toString: clrToString } : (hsrg[HAS](e.toLowerCase().substring(0, 2)) || '#' === e.charAt() || (e = toHex(e)), l = e.match(colourRegExp)) ? (l[2] && (r = toInt(l[2].substring(5), 16), i = toInt(l[2].substring(3, 5), 16), n = toInt(l[2].substring(1, 3), 16)), l[3] && (r = toInt((o = l[3].charAt(3)) + o, 16), i = toInt((o = l[3].charAt(2)) + o, 16), n = toInt((o = l[3].charAt(1)) + o, 16)), l[4] && (s = l[4][SPLIT](commaSpaces), n = toFloat(s[0]), '%' === s[0].slice(-1) && (n *= 2.55), i = toFloat(s[1]), '%' === s[1].slice(-1) && (i *= 2.55), r = toFloat(s[2]), '%' === s[2].slice(-1) && (r *= 2.55), 'rgba' === l[1].toLowerCase().slice(0, 4) && (a = toFloat(s[3])), s[3] && '%' === s[3].slice(-1) && (a /= 100)), l[5]) ? (s = l[5][SPLIT](commaSpaces), n = toFloat(s[0]), '%' === s[0].slice(-1) && (n *= 2.55), i = toFloat(s[1]), '%' === s[1].slice(-1) && (i *= 2.55), r = toFloat(s[2]), '%' === s[2].slice(-1) && (r *= 2.55), ('deg' === s[0].slice(-3) || '\xB0' === s[0].slice(-1)) && (n /= 360), 'hsba' === l[1].toLowerCase().slice(0, 4) && (a = toFloat(s[3])), s[3] && '%' === s[3].slice(-1) && (a /= 100), R.hsb2rgb(n, i, r, a)) : l[6] ? (s = l[6][SPLIT](commaSpaces), n = toFloat(s[0]), '%' === s[0].slice(-1) && (n *= 2.55), i = toFloat(s[1]), '%' === s[1].slice(-1) && (i *= 2.55), r = toFloat(s[2]), '%' === s[2].slice(-1) && (r *= 2.55), ('deg' === s[0].slice(-3) || '\xB0' === s[0].slice(-1)) && (n /= 360), 'hsla' === l[1].toLowerCase().slice(0, 4) && (a = toFloat(s[3])), s[3] && '%' === s[3].slice(-1) && (a /= 100), R.hsl2rgb(n, i, r, a)) : (l = { r: n, g: i, b: r, toString: clrToString }, l.hex = '#' + (16777216 | r | i << 8 | n << 16).toString(16).slice(1), R.is(a, FINITE) && (l.opacity = a), l) : { r: -1, g: -1, b: -1, hex: NONE, error: 1, toString: clrToString };
}, R), R.tintshade = (0, _raphael.cacher)(function (e, t) {
  var a,
      n = R.getRGB(e),
      i = 255;return 0 > t && (t *= -1, i = 0), 1 < t && (t = 1), a = 0 === t ? n : { r: i - (i - n.r) * t, g: i - (i - n.g) * t, b: i - (i - n.b) * t, toString: clrToString }, a.hex = R.rgb(a.r, a.g, a.b), n.error && (a.error = n.error), 'opacity' in n ? (a.rgba = 'rgba(' + [a.r, a.g, a.b, n.opacity].join(',') + ')', a.opacity = n.opacity) : a.rgba = 'rgb(' + [a.r, a.g, a.b].join(',') + ')', a;
}, R), R.rgb = (0, _raphael.cacher)(function (e, t, a) {
  return '#' + (16777216 | a | t << 8 | e << 16).toString(16).slice(1);
});function catmullRom2bezier(e, t) {
  for (var a, n = [], r = 0, o = e.length; o - 2 * !t > r; r += 2) a = [{ x: +e[r - 2], y: +e[r - 1] }, { x: +e[r], y: +e[r + 1] }, { x: +e[r + 2], y: +e[r + 3] }, { x: +e[r + 4], y: +e[r + 5] }], t ? r ? o - 4 == r ? a[3] = { x: +e[0], y: +e[1] } : o - 2 == r && (a[2] = { x: +e[0], y: +e[1] }, a[3] = { x: +e[2], y: +e[3] }) : a[0] = { x: +e[o - 2], y: +e[o - 1] } : o - 4 == r ? a[3] = a[2] : !r && (a[0] = { x: +e[r], y: +e[r + 1] }), n.push(['C', (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]);return n;
}R.sanitizePath = function (e) {
  var t;return t = e.join ? e.join(COMMA) : e, rCheckRegex.test(t) ? t = R._pathToAbsolute(t) : p2s.test(pathCommaRegex) && (t = t.replace(p2s, TOKEN1)), t;
}, R.parsePathString = function (e) {
  if (!e) return null;var t = paths(e);if (t.arr) return pathClone(t.arr);if (__data = undef, R.is(e, ARRAY)) if (e = Str(e).replace(/,?([A-Z]),?/g, ',$1,').replace(/(^,?)|(,?$)/g, '').replace(/,,?/g, ',').split(','), R.is(e[0], ARRAY)) __data = pathClone(e);else {
    var a,
        n,
        r,
        o = [],
        s = e.length;for (__data = [], a = 0; a < s; a += 1) charRegex.test(e[a]) ? (o.length && __data.push(o), n = e[a], o = [n], r = paramCounts[n.toLowerCase()]) : r ? (o.push(+e[a]), r--) : (__data.push(o), o = [n].concat(+e[a]), r = paramCounts[n.toLowerCase()] - 1);__data.push(o);
  }return __data && __data.length || (__data = [], Str(e).replace(pathCommand, pathStringBreakFn)), __data.toString = R._path2string, t.arr = __data, t.arr;
}, R.parseTransformString = (0, _raphael.cacher)(function (e) {
  if (!e) return null;var t = [];return R.is(e, ARRAY) && R.is(e[0], ARRAY) && (t = pathClone(e)), t.length || Str(e).replace(tCommand, function (e, a, n) {
    var i = [],
        r = lowerCase.call(a);n.replace(pathValues, function (e, t) {
      t && i.push(+t);
    }), t.push([a][CONCAT](i));
  }), t.toString = R._path2string, t;
});var _pathCache = {},
    paths = (0, _raphael.cacher)(function () {
  return {};
}, undef, undef, undef, 500, _pathCache, !0);R.findDotsAtSegment = function (e, a, n, i, r, o, s, l, d) {
  var t = 1 - d,
      p = pow(t, 3),
      g = pow(t, 2),
      h = d * d,
      c = h * d,
      u = e + 2 * d * (n - e) + h * (r - 2 * n + e),
      m = a + 2 * d * (i - a) + h * (o - 2 * i + a),
      y = n + 2 * d * (r - n) + h * (s - 2 * r + n),
      x = i + 2 * d * (o - i) + h * (l - 2 * o + i),
      f = 90 - 180 * math.atan2(u - y, m - x) / PI;return (u > y || m < x) && (f += 180), { x: p * e + 3 * g * d * n + 3 * t * d * d * r + c * s, y: p * a + 3 * g * d * i + 3 * t * d * d * o + c * l, m: { x: u, y: m }, n: { x: y, y: x }, start: { x: t * e + d * n, y: t * a + d * i }, end: { x: t * r + d * s, y: t * o + d * l }, alpha: f };
};function base3(e, t, a, n, i) {
  return e * (e * (-3 * t + 9 * a - 9 * n + 3 * i) + 6 * t - 12 * a + 6 * n) - 3 * t + 3 * a;
}function bezlen(e, t, a, n, r, o, s, l, d) {
  null == d && (d = 1), d = 1 < d ? 1 : 0 > d ? 0 : d;for (var p = d / 2, g = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], c = 0, u = 0; u < 12; u++) {
    var m = p * g[u] + p,
        y = base3(m, e, a, r, s),
        x = base3(m, t, n, o, l);c += h[u] * mathSqrt(y * y + x * x);
  }return p * c;
}function getTatLen(e, t, a, n, i, r, o, s, d) {
  if (!(0 > d || bezlen(e, t, a, n, i, r, o, s) < d)) {
    var p,
        g = 1 / 2,
        h = 1 - g;for (p = bezlen(e, t, a, n, i, r, o, s, h); abs(p - d) > .01;) g /= 2, h += (p < d ? 1 : -1) * g, p = bezlen(e, t, a, n, i, r, o, s, h);return h;
  }
}function intersect(e, t, a, n, i, r, o, s) {
  if (!(mmax(e, a) < mmin(i, o) || mmin(e, a) > mmax(i, o) || mmax(t, n) < mmin(r, s) || mmin(t, n) > mmax(r, s))) {
    var l = (e - a) * (r - s) - (t - n) * (i - o);if (l) {
      var d = ((e * n - t * a) * (i - o) - (e - a) * (i * s - r * o)) / l,
          p = ((e * n - t * a) * (r - s) - (t - n) * (i * s - r * o)) / l,
          g = +d.toFixed(2),
          h = +p.toFixed(2);return g < +mmin(e, a).toFixed(2) || g > +mmax(e, a).toFixed(2) || g < +mmin(i, o).toFixed(2) || g > +mmax(i, o).toFixed(2) || h < +mmin(t, n).toFixed(2) || h > +mmax(t, n).toFixed(2) || h < +mmin(r, s).toFixed(2) || h > +mmax(r, s).toFixed(2) ? void 0 : { x: d, y: p };
    }
  }
}R._removedFactory = function (e) {
  return function () {
    (0, _eve2.default)('raphael.log', null, 'Rapha\xEBl: you are calling to method \u201C' + e + '\u201D of removed object', e);
  };
};var pathDimensions = R.pathBBox = function (e) {
  var t = paths(e);if (!e) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };e = path2curve(e);for (var a, n = 0, r = 0, o = [], s = [], l = 0, d = e.length; l < d; l++) if (a = e[l], a[0] === strM) n = a[1], r = a[2], o.push(n), s.push(r);else {
    var g = curveDim(n, r, a[1], a[2], a[3], a[4], a[5], a[6]);o = o[CONCAT](g.min.x, g.max.x), s = s[CONCAT](g.min.y, g.max.y), n = a[5], r = a[6];
  }var h = mmin[APPLY](0, o),
      c = mmin[APPLY](0, s),
      u = mmax[APPLY](0, o),
      m = mmax[APPLY](0, s),
      f = { x: h, y: c, x2: u, y2: m, width: u - h, height: m - c };return t.bbox = clone(f), f;
},
    pathClone = function (e) {
  var t = clone(e);return t.toString = R._path2string, t;
},
    pathToAbsolute = R._pathToAbsolute = function (e) {
  var t,
      a = paths(e);if (!a.abs) {
    if (R.is(e, ARRAY) && R.is(e && e[0], ARRAY) || (e = R.parsePathString(e)), !e || !e.length) return t = [[strM, 0, 0]], t.toString = R._path2string, t;var n = 0,
        o = 0,
        s = 0,
        l = 0,
        d = 0;t = [], e[0][0] === strM && (n = +e[0][1], o = +e[0][2], s = n, l = o, d++, t[0] = [strM, n, o]);for (var p, g, h = 3 === e.length && e[0][0] === strM && 'R' === e[1][0].toUpperCase() && 'Z' === e[2][0].toUpperCase(), c = d, u = e.length; c < u; c++) {
      if (t.push(p = []), g = e[c], g[0] != upperCase.call(g[0])) switch (p[0] = upperCase.call(g[0]), p[0]) {case 'A':
          p[1] = g[1], p[2] = g[2], p[3] = g[3], p[4] = g[4], p[5] = g[5], p[6] = +(g[6] + n), p[7] = +(g[7] + o);break;case 'V':
          p[1] = +g[1] + o;break;case 'H':
          p[1] = +g[1] + n;break;case 'R':
          for (var m = [n, o][CONCAT](g.slice(1)), f = 2, b = m.length; f < b; f++) m[f] = +m[f] + n, m[++f] = +m[f] + o;t.pop(), t = t[CONCAT](catmullRom2bezier(m, h));break;case 'M':
          s = +g[1] + n, l = +g[2] + o;default:
          for (f = 1, b = g.length; f < b; f++) p[f] = +g[f] + (f % 2 ? n : o), f % 2 ? n = p[f] : o = p[f];} else if ('R' === g[0]) m = [n, o][CONCAT](g.slice(1)), t.pop(), t = t[CONCAT](catmullRom2bezier(m, h)), p = ['R'][CONCAT](g.slice(-2));else for (var _ = 0, v = g.length; _ < v; _++) p[_] = g[_];switch (p[0]) {case 'Z':
          n = s, o = l;break;case 'H':
          n = p[1];break;case 'V':
          o = p[1];break;case 'M':
          s = p[p.length - 2], l = p[p.length - 1];default:
          n = p[p.length - 2], o = p[p.length - 1];}
    }t.toString = R._path2string, a.abs = t;
  }return pathClone(a.abs);
},
    l2c = function (e, t, a, n) {
  return [e, t, a, n, a, n];
},
    q2c = function (e, t, a, n, i, r) {
  var o = 1 / 3,
      s = 2 / 3;return [o * e + s * a, o * t + s * n, o * i + s * a, o * r + s * n, i, r];
},
    a2c = function (e, a, n, r, o, s, l, d, p, g) {
  l = l && +l, s = s && +s;var c,
      u = 120 * PI / 180,
      m = deg2rad * (+o || 0),
      f = [],
      b = (0, _raphael.cacher)(function (e, t, a) {
    var n = e * mathCos(a) - t * mathSin(a),
        i = e * mathSin(a) + t * mathCos(a);return { x: n, y: i };
  });if (!g) {
    c = b(e, a, -m), e = c.x, a = c.y, c = b(d, p, -m), d = c.x, p = c.y;var _ = mathCos(deg2rad * o),
        v = mathSin(deg2rad * o),
        A = (e - d) / 2,
        x = (a - p) / 2,
        y = A * A / (n * n) + x * x / (r * r);1 < y && (y = mathSqrt(y), n = y * n, r = y * r);var C = n * n,
        w = r * r,
        S = (s === l ? -1 : 1) * mathSqrt(abs((C * w - C * x * x - w * A * A) / (C * x * x + w * A * A))),
        k = S * n * x / r + (e + d) / 2,
        P = S * -r * A / n + (a + p) / 2,
        I = math.asin(((a - P) / r).toFixed(9)),
        T = math.asin(((p - P) / r).toFixed(9));I = e < k ? PI - I : I, T = d < k ? PI - T : T, 0 > I && (I = 2 * PI + I), 0 > T && (T = 2 * PI + T), l && I > T && (I -= 2 * PI), !l && T > I && (T -= 2 * PI);
  } else I = g[0], T = g[1], k = g[2], P = g[3];var E = T - I;if (abs(E) > u) {
    var F = T,
        L = d,
        j = p;T = I + u * (l && T > I ? 1 : -1), d = k + n * mathCos(T), p = P + r * mathSin(T), f = a2c(d, p, n, r, o, 0, l, L, j, [T, F, k, P]);
  }E = T - I;var O = mathCos(I),
      N = mathSin(I),
      B = mathCos(T),
      R = mathSin(T),
      M = math.tan(E / 4),
      t = 4 / 3 * n * M,
      V = 4 / 3 * r * M,
      D = [e, a],
      q = [e + t * N, a - V * O],
      Y = [d + t * R, p - V * B],
      H = [d, p];if (q[0] = 2 * D[0] - q[0], q[1] = 2 * D[1] - q[1], g) return [q, Y, H][CONCAT](f);f = [q, Y, H][CONCAT](f).join()[SPLIT](COMMA);for (var z = [], X = 0, G = f.length; X < G; X++) z[X] = X % 2 ? b(f[X - 1], f[X], m).y : b(f[X], f[X + 1], m).x;return z;
},
    findDotAtSegment = function (e, a, n, i, r, o, s, l, d) {
  var t = 1 - d;return { x: pow(t, 3) * e + 3 * pow(t, 2) * d * n + 3 * t * d * d * r + pow(d, 3) * s, y: pow(t, 3) * a + 3 * pow(t, 2) * d * i + 3 * t * d * d * o + pow(d, 3) * l };
},
    curveDim = (0, _raphael.cacher)(function (e, t, n, i, r, o, s, l) {
  var d,
      p = r - 2 * n + e - (s - 2 * r + n),
      g = 2 * (n - e) - 2 * (r - n),
      h = e - n,
      u = (-g + mathSqrt(g * g - 4 * p * h)) / 2 / p,
      m = (-g - mathSqrt(g * g - 4 * p * h)) / 2 / p,
      f = [t, l],
      y = [e, s];return '1e12' < abs(u) && (u = .5), '1e12' < abs(m) && (m = .5), 0 < u && 1 > u && (d = findDotAtSegment(e, t, n, i, r, o, s, l, u), y.push(d.x), f.push(d.y)), 0 < m && 1 > m && (d = findDotAtSegment(e, t, n, i, r, o, s, l, m), y.push(d.x), f.push(d.y)), p = o - 2 * i + t - (l - 2 * o + i), g = 2 * (i - t) - 2 * (o - i), h = t - i, u = (-g + mathSqrt(g * g - 4 * p * h)) / 2 / p, m = (-g - mathSqrt(g * g - 4 * p * h)) / 2 / p, '1e12' < abs(u) && (u = .5), '1e12' < abs(m) && (m = .5), 0 < u && 1 > u && (d = findDotAtSegment(e, t, n, i, r, o, s, l, u), y.push(d.x), f.push(d.y)), 0 < m && 1 > m && (d = findDotAtSegment(e, t, n, i, r, o, s, l, m), y.push(d.x), f.push(d.y)), { min: { x: mmin[APPLY](0, y), y: mmin[APPLY](0, f) }, max: { x: mmax[APPLY](0, y), y: mmax[APPLY](0, f) } };
}),
    path2curve = R._path2curve = (0, _raphael.cacher)(function (e, t) {
  var a = !t && paths(e);if (!t && a.curve) return pathClone(a.curve);for (var n = pathToAbsolute(e), r = t && pathToAbsolute(t), o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, s = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, l = function (e, t) {
    var a, n;if (!e) return ['C', t.x, t.y, t.x, t.y, t.x, t.y];switch ((e[0] in { T: 1, Q: 1 }) || (t.qx = t.qy = null), e[0]) {case 'M':
        t.X = e[1], t.Y = e[2];break;case 'A':
        e = ['C'][CONCAT](a2c[APPLY](0, [t.x, t.y][CONCAT](e.slice(1))));break;case 'S':
        a = t.x + (t.x - (t.bx || t.x)), n = t.y + (t.y - (t.by || t.y)), e = ['C', a, n][CONCAT](e.slice(1));break;case 'T':
        t.qx = t.x + (t.x - (t.qx || t.x)), t.qy = t.y + (t.y - (t.qy || t.y)), e = ['C'][CONCAT](q2c(t.x, t.y, t.qx, t.qy, e[1], e[2]));break;case 'Q':
        t.qx = e[1], t.qy = e[2], e = ['C'][CONCAT](q2c(t.x, t.y, e[1], e[2], e[3], e[4]));break;case 'L':
        e = ['C'][CONCAT](l2c(t.x, t.y, e[1], e[2]));break;case 'H':
        e = ['C'][CONCAT](l2c(t.x, t.y, e[1], t.y));break;case 'V':
        e = ['C'][CONCAT](l2c(t.x, t.y, t.x, e[1]));break;case 'Z':
        e = ['C'][CONCAT](l2c(t.x, t.y, t.X, t.Y));}return e;
  }, d = function (e, t) {
    if (7 < e[t].length) {
      e[t].shift();for (var a = e[t]; a.length;) e.splice(t++, 0, ['C'][CONCAT](a.splice(0, 6)));e.splice(t, 1), h = mmax(n.length, r && r.length || 0);
    }
  }, p = function (e, t, a, o, s) {
    e && t && e[s][0] === strM && t[s][0] != strM && !s && (t.splice(s, 0, [strM, o.x, o.y]), a.bx = 0, a.by = 0, a.x = e[s][1], a.y = e[s][2], h = mmax(n.length, r && r.length || 0));
  }, g = 0, h = mmax(n.length, r && r.length || 0); g < h; g++) {
    n[g] = l(n[g], o), d(n, g), r && (r[g] = l(r[g], s)), r && d(r, g), p(n, r, o, s, g), p(r, n, s, o, g);var c = n[g],
        u = r && r[g],
        m = c.length,
        y = r && u.length;o.x = c[m - 2], o.y = c[m - 1], o.bx = toFloat(c[m - 4]) || o.x, o.by = toFloat(c[m - 3]) || o.y, s.bx = r && (toFloat(u[y - 4]) || s.x), s.by = r && (toFloat(u[y - 3]) || s.y), s.x = r && u[y - 2], s.y = r && u[y - 1];
  }return r || (a.curve = pathClone(n)), r ? [n, r] : n;
}, null, pathClone),
    parseDots = R._parseDots = (0, _raphael.cacher)(function (e) {
  for (var t = [], a = 0, n = e.length; a < n; a++) {
    var r = {},
        o = e[a].match(/^([^:]*):?([\d\.]*)/);if (r.color = R.getRGB(o[1]), r.color.error) return null;r.opacity = r.color.opacity, r.color = r.color.hex, o[2] && (r.offset = o[2] + '%'), t.push(r);
  }for (a = 1, n = t.length - 1; a < n; a++) if (!t[a].offset) {
    for (var s = toFloat(t[a - 1].offset || 0), l = 0, p = a + 1; p < n; p++) if (t[p].offset) {
      l = t[p].offset;break;
    }l || (l = 100, p = n), l = toFloat(l);for (var g = (l - s) / (p - a + 1); a < p; a++) s += g, t[a].offset = s + '%';
  }return t;
}),
    tear = R._tear = function (e, t) {
  e === t.top && (t.top = e.prev), e === t.bottom && (t.bottom = e.next), e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next);
},
    tofront = R._tofront = function (e, t) {
  return t.top !== e && (tear(e, t), e.next = null, e.prev = t.top, t.top.next = e, t.top = e, !0);
},
    toback = R._toback = function (e, t) {
  return t.bottom !== e && (tear(e, t), e.next = t.bottom, e.prev = null, t.bottom.prev = e, t.bottom = e, !0);
},
    insertafter = R._insertafter = function (e, t, a, n) {
  tear(e, a), e.parent = n, t === n.top && (n.top = e), t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e;
},
    insertbefore = R._insertbefore = function (e, t, a, n) {
  tear(e, a), e.parent = n, t === n.bottom && (n.bottom = e), t.prev && (t.prev.next = e), e.prev = t.prev, t.prev = e, e.next = t;
},
    extractTransform = R._extractTransform = function (e, a) {
  if (null == a) return e._.transform;a = Str(a).replace(/\.{3}|\u2026/g, e._.transform || E);var n = R.parseTransformString(a),
      r = 0,
      o = 0,
      s = 0,
      l = 1,
      d = 1,
      p = e._,
      g = new Matrix();if (p.transform = n || [], n) for (var h = 0, c = n.length; h < c; h++) {
    var u,
        m,
        y,
        x,
        f,
        b = n[h],
        t = b.length,
        _ = Str(b[0]).toLowerCase(),
        v = b[0] != _,
        A = v ? g.invert() : 0;'t' === _ && 3 === t ? v ? (u = A.x(0, 0), m = A.y(0, 0), y = A.x(b[1], b[2]), x = A.y(b[1], b[2]), g.translate(y - u, x - m)) : g.translate(b[1], b[2]) : 'r' === _ ? 2 === t ? (f = p.bb || (p.bb = e.getBBox(1)), g.rotate(b[1], f.x + f.width / 2, f.y + f.height / 2), r += b[1]) : 4 === t && (v ? (y = A.x(b[2], b[3]), x = A.y(b[2], b[3]), g.rotate(b[1], y, x)) : g.rotate(b[1], b[2], b[3]), r += b[1]) : 's' === _ ? 2 === t || 3 === t ? (f = p.bb || (p.bb = e.getBBox(1)), g.scale(b[1], b[t - 1], f.x + f.width / 2, f.y + f.height / 2), l *= b[1], d *= b[t - 1]) : 5 === t && (v ? (y = A.x(b[3], b[4]), x = A.y(b[3], b[4]), g.scale(b[1], b[2], y, x)) : g.scale(b[1], b[2], b[3], b[4]), l *= b[1], d *= b[2]) : _ === mStr && 7 === t && g.add(b[1], b[2], b[3], b[4], b[5], b[6]), p.dirtyT = 1, e.matrix = g;
  }e.matrix = g, p.sx = l, p.sy = d, p.deg = r, p.dx = o = g.e, p.dy = s = g.f, 1 === l && 1 === d && !r && p.bbox ? (p.bbox.x += +o, p.bbox.y += +s) : p.dirtyT = 1;
},
    getEmpty = function (e) {
  var t = e[0];switch (t.toLowerCase()) {case 't':
      return [t, 0, 0];case 'm':
      return [t, 1, 0, 0, 1, 0, 0];case 'r':
      return 4 === e.length ? [t, 0, e[2], e[3]] : [t, 0];case 's':
      return 5 === e.length ? [t, 1, 1, e[3], e[4]] : 3 === e.length ? [t, 1, 1] : [t, 1];}
},
    equaliseTransform = R._equaliseTransform = function (e, t) {
  t = Str(t).replace(/\.{3}|\u2026/g, e), e = R.parseTransformString(e) || [], t = R.parseTransformString(t) || [];for (var a, n, r, o, s = mmax(e.length, t.length), l = [], d = [], p = 0; p < s; p++) {
    if (r = e[p] || getEmpty(t[p]), o = t[p] || getEmpty(r), r[0] != o[0] || 'r' === r[0].toLowerCase() && (r[2] != o[2] || r[3] != o[3]) || 's' === r[0].toLowerCase() && (r[3] != o[3] || r[4] != o[4])) return;for (l[p] = [], d[p] = [], (a = 0, n = mmax(r.length, o.length)); a < n; a++) a in r && (l[p][a] = r[a]), a in o && (d[p][a] = o[a]);
  }return { from: l, to: d };
};R._getContainer = function (e, t, a, n) {
  var i;return i = null != n || R.is(e, OBJECT) ? e : g.doc.getElementById(e), null == i ? void 0 : i.tagName ? null == t ? { container: i, width: i.style.pixelWidth || i.offsetWidth, height: i.style.pixelHeight || i.offsetHeight } : { container: i, width: t, height: a } : { container: 1, x: e, y: t, width: a, height: n };
}, R._engine = {}, R.path2curve = path2curve, R.matrix = function (t, a, n, i, r, e) {
  return new Matrix(t, a, n, i, r, e);
};function Matrix(t, a, n, i, r, e) {
  null == t ? (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) : (this.a = +t, this.b = +a, this.c = +n, this.d = +i, this.e = +r, this.f = +e);
}(function (e) {
  function t(e) {
    return e[0] * e[0] + e[1] * e[1];
  }function a(e) {
    var a = mathSqrt(t(e));e[0] && (e[0] /= a), e[1] && (e[1] /= a);
  }e.add = function (t, a, n, i, r, e) {
    var o,
        s,
        l,
        d,
        p = [[], [], []],
        g = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
        h = [[t, n, r], [a, i, e], [0, 0, 1]];for (t && t instanceof Matrix && (h = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), o = 0; 3 > o; o++) for (s = 0; 3 > s; s++) {
      for (d = 0, l = 0; 3 > l; l++) d += g[o][l] * h[l][s];p[o][s] = d;
    }this.a = p[0][0], this.b = p[1][0], this.c = p[0][1], this.d = p[1][1], this.e = p[0][2], this.f = p[1][2];
  }, e.invert = function () {
    var e = this,
        t = e.a * e.d - e.b * e.c;return new Matrix(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t);
  }, e.clone = function () {
    return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.translate = function (e, t) {
    this.add(1, 0, 0, 1, e, t);
  }, e.scale = function (e, t, a, n) {
    null == t && (t = e), (a || n) && this.add(1, 0, 0, 1, a, n), this.add(e, 0, 0, t, 0, 0), (a || n) && this.add(1, 0, 0, 1, -a, -n);
  }, e.rotate = function (e, t, n) {
    e = R.rad(e), t = t || 0, n = n || 0;var i = +mathCos(e).toFixed(9),
        r = +mathSin(e).toFixed(9);this.add(i, r, -r, i, t, n), this.add(1, 0, 0, 1, -t, -n);
  }, e.x = function (e, t) {
    return e * this.a + t * this.c + this.e;
  }, e.y = function (e, t) {
    return e * this.b + t * this.d + this.f;
  }, e.get = function (e) {
    return +this[Str.fromCharCode(97 + e)].toFixed(4);
  }, e.toString = function () {
    return R.svg ? 'matrix(' + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ')' : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
  }, e.toMatrixString = function () {
    return 'matrix(' + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ')';
  }, e.toFilter = function () {
    return 'progid:DXImageTransform.Microsoft.Matrix(M11=' + this.get(0) + ', M12=' + this.get(2) + ', M21=' + this.get(1) + ', M22=' + this.get(3) + ', Dx=' + this.get(4) + ', Dy=' + this.get(5) + ', sizingmethod=\'auto expand\')';
  }, e.offset = function () {
    return [this.e.toFixed(4), this.f.toFixed(4)];
  }, e.split = function () {
    var e = { dx: this.e, dy: this.f },
        n = [[this.a, this.c], [this.b, this.d]];e.scalex = mathSqrt(t(n[0])), a(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = mathSqrt(t(n[1])), a(n[1]), e.shear /= e.scaley;var i = -n[0][1],
        r = n[1][1];return 0 > r ? (e.rotate = R.deg(math.acos(r)), 0 > i && (e.rotate = 360 - e.rotate)) : e.rotate = R.deg(math.asin(i)), e.isSimple = !+e.shear.toFixed(9) && (e.scalex.toFixed(9) === e.scaley.toFixed(9) || !e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) === e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e;
  }, e.toTransformString = function (e) {
    var t = e || this[SPLIT]();return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? 't' + [t.dx, t.dy] : E) + (1 != t.scalex || 1 != t.scaley ? 's' + [t.scalex, t.scaley, 0, 0] : E) + (t.rotate ? 'r' + [t.rotate, 0, 0] : E)) : mStr + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
  };
})(Matrix.prototype);var navigator = win.navigator,
    version = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);paperproto.safari = 'Apple Computer, Inc.' === navigator.vendor && (version && 4 > version[1] || 'iP' === navigator.platform.slice(0, 2)) || 'Google Inc.' === navigator.vendor && version && 8 > version[1] ? function () {
  var e = this.rect(-99, -99, this.width + 99, this.height + 99).attr({ stroke: NONE });return setTimeout(function () {
    e.remove();
  }), !0;
} : fun;for (var preventDefault = function () {
  this.returnValue = !1;
}, preventTouch = function () {
  return this.originalEvent.preventDefault();
}, stopPropagation = function () {
  this.cancelBubble = !0;
}, stopTouch = function () {
  return this.originalEvent.stopPropagation();
}, eventCopyList = { stopPropagation: 'fn', stopImmediatePropagation: 'fn', preventDefault: 'fn', type: !0, clientX: !0, clientY: !0, pageX: !0, pageY: !0, bubbles: !0, cancelable: !0, touches: !0, target: !0, originalTarget: !0, srcElement: !0, relatedTarget: !0, fromElement: !0, changedTouches: !0, layerX: !0, layerY: !0 }, makeSelectiveCopy = function (e, t) {
  for (let a in eventCopyList) e[a] = 'fn' === eventCopyList[a] ? function () {
    return function () {
      t[a]();
    };
  }(t) : t[a];e.originalEvent = t;
}, addEvent = R.addEvent = function () {
  if (g.doc.addEventListener) return function (t, a, n, r) {
    var e,
        i = supportsOnlyTouch && touchMap[a] || a,
        o = { capture: !1 };return supportsTouch && r._drag && (o.passive = !1), touchMap[dragEventMap[a]] && (i = touchMap[dragEventMap[a]]), e = function (o) {
      var s,
          l = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
          d = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;if (supportsTouch && touchMap[HAS](supportsOnlyTouch ? a : dragEventMap[a])) for (var p = 0, h = o.targetTouches && o.targetTouches.length; p < h; p++) if (s = o.targetTouches[p].target, s === t || 'tspan' === s.nodeName && s.parentNode === t) {
        var c = o;o = o.targetTouches[p], o.originalEvent = c, o.preventDefault = preventTouch, o.stopPropagation = stopTouch;break;
      }return n.call(r, o, o.clientX + d, o.clientY + l);
    }, t.addEventListener(i, e, o), function () {
      return t.removeEventListener(i, e, o), !0;
    };
  };return g.doc.attachEvent ? function (e, t, a, n) {
    var i = function (t) {
      t = t || g.win.event;var i = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
          r = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
          o = t.clientX + r,
          s = t.clientY + i;return t.preventDefault = t.preventDefault || preventDefault, t.stopPropagation = t.stopPropagation || stopPropagation, a.call(n, t, o, s);
    };e.attachEvent('on' + t, i);return function () {
      return e.detachEvent('on' + t, i), !0;
    };
  } : void 0;
}(), dragMove = function (t) {
  for (var e, a = t.clientX === UNDEF ? t.changedTouches && t.changedTouches[0].clientX : t.clientX, n = t.clientY === UNDEF ? t.changedTouches && t.changedTouches[0].clientY : t.clientY, r = g.doc.documentElement.scrollTop || g.doc.body.scrollTop, o = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft, s = {}, l = this, d = l.dragInfo.onmove.length; d--;) {
    if (supportsTouch && 'touchmove' === t.type) {
      for (var p, h = t.touches.length; h--;) if (p = t.touches[h], p.identifier === l._drag.id) {
        a = p.clientX, n = p.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();break;
      }
    } else t.preventDefault();if (!l.removed) {
      if (l.dragStartFn && (l.dragStartFn(d), l.dragStartFn = void 0, l.dragInfo._dragmove = !0), g.win.opera) {
        var c = R._engine.getNode(l),
            u = c.nextSibling,
            m = c.parentNode,
            f = c.style.display;m.removeChild(c), c.style.display = NONE, c.style.display = f, u ? m.insertBefore(c, u) : m.appendChild(c);
      }a += o, n += r, makeSelectiveCopy(s, t), e = s.data = [a - l._drag.x, n - l._drag.y, a, n], (0, _eve2.default)('raphael.drag.move.' + l.id, l.dragInfo.move_scope[d] || l, s, e);
    }
  }
}, dragUp = function (t) {
  for (var e = this, a = e.dragInfo, n = a.onend.length; n--;) {
    if (!e.dragInfo._dragmove) continue;else e.dragInfo._dragmove = void 0;e._drag = {}, (0, _eve2.default)('raphael.drag.end.' + e.id, a.end_scope[n] || a.start_scope[n] || a.move_scope[n] || e, t);
  }R.undragmove.call(e, dragMove).undragend.call(e, dragUp), R.unmousemove.call(e, dragMove).unmouseup.call(e, dragUp);
}, elproto = R.el = {}, i = events.length; i--;) (function (e) {
  R[e] = elproto[e] = function (t, a, n) {
    return R.is(t, FUNCTION) && (this.events = this.events || [], this.events.push({ name: e, f: t, unbind: addEvent(n || this.shape || this.node || g.doc, e, t, a || this) })), this;
  }, R['un' + e] = elproto['un' + e] = function (t) {
    for (var a = this.events || [], n = a.length; n--;) if (a[n].name === e && a[n].f === t) return a[n].unbind(), a.splice(n, 1), a.length || delete this.events, this;return this;
  };
})(events[i]);elproto.data = function (e, t) {
  var a = eldata[this.id] = eldata[this.id] || {};if (1 === arguments.length) {
    if (R.is(e, OBJECT)) {
      for (var n in e) e[HAS](n) && this.data(n, e[n]);return this;
    }return R.stopPartialEventPropagation || (0, _eve2.default)('raphael.data.get.' + this.id, this, a[e], e), a[e];
  }return a[e] = t, R.stopPartialEventPropagation || (0, _eve2.default)('raphael.data.set.' + this.id, this, t, e), this;
}, elproto.removeData = function (e) {
  return null == e ? delete eldata[this.id] : eldata[this.id] && delete eldata[this.id][e], this;
}, elproto.getData = function () {
  return clone(eldata[this.id] || {});
};var downables = [],
    mouseDown = function () {
  this.untrack = addEvent(g.doc, 'mouseup', mouseUp, this);
},
    mouseUp = function () {
  return this.untrack(), this.untrack = null, this.fn && this.fn.apply(this.scope || this.el, arguments);
};elproto.mouseup = function (e, t, a, n) {
  return a ? (downables.push(a = { el: this, fn: e, scope: t }), a.unbind = addEvent(this.shape || this.node || g.doc, 'mousedown', mouseDown, a), this) : R.mouseup.apply(this, [e, t, n]);
}, elproto.unmouseup = function (e) {
  for (var t, a = downables.length; a--;) downables[a].el === this && downables[a].fn === e && (t = downables[a], t.unbind(), t.untrack && t.untrack(), downables.splice(a, 1));return t ? this : R.unmouseup.apply(this, arguments);
}, elproto.hover = function (e, t, a, n) {
  return this.mouseover(e, a).mouseout(t, n || a);
}, elproto.unhover = function (e, t) {
  return this.unmouseover(e).unmouseout(t);
};var draggable = [];elproto.drag = function (e, t, a, n, i, r) {
  var o = this.dragInfo || (this.dragInfo = { onmove: [], onstart: [], onend: [], move_scope: [], start_scope: [], end_scope: [] });return e && o.onmove.push(e) && o.move_scope.push(n), t && o.onstart.push(t) && o.start_scope.push(i), a && o.onend.push(a) && o.end_scope.push(r), this.dragFn = this.dragFn || function (t) {
    var e,
        a,
        n,
        r,
        o,
        s,
        l,
        d,
        p,
        h = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
        c = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
        u = {},
        m = this.dragInfo,
        y = [dragMove, undef, g.doc];for (this._drag.x = d = (t.clientX === UNDEF ? t.changedTouches && t.changedTouches[0].clientX : t.clientX) + c, this._drag.y = p = (t.clientY === UNDEF ? t.changedTouches && t.changedTouches[0].clientY : t.clientY) + h, this._drag.id = t.identifier, supportsTouch && !supportsOnlyTouch && R.dragmove.apply(this, y).dragend.call(this, dragUp, undef, g.doc), R.mousemove.apply(this, y).mouseup.call(this, dragUp, undef, undef, g.doc), makeSelectiveCopy(u, t), e = u.data = [d, p], (a = 0, o = m.onstart.length); a < o; a++) _eve2.default.on('raphael.drag.start.' + this.id, m.onstart[a]);for (n = 0, s = m.onmove.length; n < s; n++) _eve2.default.on('raphael.drag.move.' + this.id, m.onmove[n]);for (r = 0, l = m.onend.length; r < l; r++) _eve2.default.on('raphael.drag.end.' + this.id, m.onend[r]);!o && (s || l) && _eve2.default.on('raphael.drag.end.' + this.id, function () {
      this.undragmove();
    }), this.dragStartFn = function (t) {
      (0, _eve2.default)('raphael.drag.start.' + this.id, this.dragInfo.start_scope[t] || this.dragInfo.move_scope[t] || this, u, e);
    };
  }, this._drag = {}, draggable.push({ el: this, start: this.dragFn, onstart: t, onmove: e, onend: a }), t && !this.startHandlerAttached && (supportsTouch && !supportsOnlyTouch && this.dragstart(this.dragFn), this.mousedown(this.dragFn), this.startHandlerAttached = !0), this;
}, elproto.onDragOver = function (e) {
  e ? _eve2.default.on('raphael.drag.over.' + this.id, e) : _eve2.default.unbind('raphael.drag.over.' + this.id);
}, elproto.undrag = function () {
  for (var e = draggable.length; e--;) draggable[e].el === this && (this.unmousedown(draggable[e].start), draggable.splice(e, 1), _eve2.default.unbind('raphael.drag.*.' + this.id), this.dragInfo = void 0, this.dragFn = void 0, this.startHandlerAttached = void 0);draggable.length || R.unmousemove.call(this, dragMove).unmouseup.call(this, dragUp), delete this._drag;
}, elproto.undragmove = function () {
  for (var e = draggable.length; e--;) draggable[e].el === this && draggable[e].onmove && (draggable.splice(e, 1), _eve2.default.unbind('raphael.drag.move.' + this.id), this.dragInfo.onmove = void 0);draggable.length || R.unmousemove.call(this, dragMove).unmouseup.call(this, dragUp);
}, elproto.undragend = function () {
  for (var e = draggable.length; e--;) draggable[e].el === this && draggable[e].onend && (draggable.splice(e, 1), _eve2.default.unbind('raphael.drag.end.' + this.id));draggable.length || R.unmousemove(dragMove).unmouseup(dragUp);
}, elproto.undragstart = function () {
  for (var e = draggable.length; e--;) draggable[e].el === this && draggable[e].onstart && (this.unmousedown(draggable[e].start), draggable.splice(e, 1), _eve2.default.unbind('raphael.drag.start.' + this.id), this._dragstart = !1, this.dragInfo.onstart = void 0, this.dragFn = void 0);draggable.length || R.unmousemove(dragMove).unmouseup(dragUp);
}, elproto.follow = function (e, t, a) {
  return e.removed || e.constructor !== R.el.constructor ? this : (e.followers.push({ el: this, stalk: a = { before: 'insertBefore', after: 'insertAfter' }[a], cb: t }), a && this[a](e), this);
}, elproto.unfollow = function (e) {
  if (e.removed || e.constructor !== R.el.constructor) return this;for (var t = 0, a = e.followers.length; t < a; t++) if (e.followers[t].el === this) {
    e.followers.splice(t, 1);break;
  }return this;
}, paperproto.hide = function () {
  var e = this;return e.canvas.style.visibility = 'hidden', e;
}, paperproto.show = function () {
  var e = this;return e.canvas.style.visibility = E, e;
}, paperproto.group = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = R._engine.group(e, t[0], a);return e.__set__ && e.__set__.push(n), e._elementsById[n.id] = n;
}, paperproto.circle = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = serializeArgs(t, 'cx', 0, 'cy', 0, 'r', 0, 'fill', NONE, 'stroke', BLACK),
      i = R._engine.circle(e, n, a);return e.__set__ && e.__set__.push(i), e._elementsById[i.id] = i;
}, paperproto.rect = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = serializeArgs(t, 'x', 0, 'y', 0, 'width', 0, 'height', 0, 'r', 0, 'fill', NONE, 'stroke', BLACK),
      i = R._engine.rect(e, n, a);return e.__set__ && e.__set__.push(i), e._elementsById[i.id] = i;
}, paperproto.ellipse = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = serializeArgs(t, 'x', 0, 'y', 0, 'rx', 0, 'ry', 0, 'fill', NONE, 'stroke', BLACK),
      i = R._engine.ellipse(this, n, a);return e.__set__ && e.__set__.push(i), e._elementsById[i.id] = i;
}, paperproto.path = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = e.config,
      i = n && n['stroke-linecap'] || 'butt',
      r = serializeArgs(t, 'path', E, 'fill', NONE, 'stroke', BLACK, 'stroke-linecap', i),
      o = R._engine.path(e, r, a);return e.__set__ && e.__set__.push(o), e._elementsById[o.id] = o;
}, paperproto.image = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = serializeArgs(t, 'x', 0, 'y', 0, 'width', 0, 'height', 0),
      i = R._engine.image(e, n, a);return e.__set__ && e.__set__.push(i), e._elementsById[i.id] = i;
}, paperproto.text = function () {
  var e = this,
      t = (0, _raphael.getArrayCopy)(arguments),
      a = lastArgIfGroup(t, !0),
      n = serializeArgs(t, 'x', 0, 'y', 0, 'text', E, 'stroke', NONE, 'fill', BLACK, 'text-anchor', 'middle', 'vertical-align', 'middle'),
      i = R._engine.text(e, n, a, t[1]);return e.__set__ && e.__set__.push(i), e._elementsById[i.id] = i;
}, paperproto.setConfig = function (e, t) {
  var a = this;return void 0 !== e && void 0 !== t && (a.config = a.config || {}, a.config[e] = t), a.config;
}, paperproto._createDOMNodes = function (e, t, a) {
  var n,
      r,
      o,
      s,
      l = this,
      d = {},
      p = R._createNode,
      g = t.tagName,
      h = t.children || [];for (s in a || (a = {}), t) 'tagName' !== s && 'children' !== s && (d[s] = t[s]);if (d.id || (d.id = R.getElementID(R.createUUID())), !l.canvas.getElementById(d.id) && g) for (n = e.appendChild(p(g, d)), a.element = n, a.id = d.id, o = h.length, 0 < o && (a.children = []), r = 0; r < o; r++) a.children[r] = {}, l._createDOMNodes(n, h[r], a.children[r]);return a;
}, paperproto.addDefs = function (e) {
  if (R.svg) {
    var t,
        a = this,
        n = {},
        i = a.defs;for (t in e) n[t] = {}, a._createDOMNodes(i, e[t], n[t]);return n;
  }
}, paperproto.setSize = function (e, t) {
  return R._engine.setSize.call(this, e, t);
}, paperproto.setDimension = function (e, t) {
  var a,
      n = this;typeof e == OBJECT ? (a = e.width, t = e.height, n.setSize(e.width, e.height)) : (a = e, n.setSize(a, t));
}, paperproto.attr = function (e) {
  var t = this;return null == e ? { width: t.width, height: t.height } : R.is(e, STRING) ? t[e] : (t.setDimension(e), t);
}, paperproto.status = function (e, t) {
  return elproto.status.call(this, e, t);
}, paperproto.animateWith = function (e, t, a, n, i, r, o) {
  return elproto.animateWith.call(this, e, t, a, n, i, r, o);
}, paperproto.animate = function (e, t, a, n) {
  return elproto.animate.call(this, e, t, a, n);
}, paperproto.setViewBox = function (e, t, a, n, i) {
  return R._engine.setViewBox.call(this, e, t, a, n, i);
}, paperproto.getById = function (e) {
  return this._elementsById[e] || null;
}, paperproto.top = paperproto.bottom = null, paperproto.raphael = R;function x_y() {
  return this.x + S + this.y;
}function x_y_w_h() {
  return this.x + S + this.y + S + this.width + ' \xD7 ' + this.height;
}elproto.getBBox = function (e) {
  if (this.removed) return {};var t = this._;return e ? ((t.dirty || !t.bboxwt) && (this.realPath = getPath[this.type](this), t.bboxwt = pathDimensions(this.realPath), t.bboxwt.toString = x_y_w_h, t.dirty = 0), t.bboxwt) : ((t.dirty || t.dirtyT || !t.bbox) && ((t.dirty || !this.realPath) && (t.bboxwt = 0, this.realPath = getPath[this.type](this)), t.bbox = pathDimensions(mapPath(this.realPath, this.matrix)), t.bbox.toString = x_y_w_h, t.dirty = t.dirtyT = 0), t.bbox);
}, elproto.clone = function (e, t) {
  if (this.removed) return null;var a,
      n,
      i = this,
      r = i.attr();if (!e) n = i.paper[i.type]().attr(r);else {
    for (a in e) r[a] = e[a];n = i.paper[i.type](r, t);
  }return i.__set__ && i.__set__.push(n), n;
};var curveslengths = {},
    getPointAtSegmentLength = function (e, t, a, n, i, r, o, s, l) {
  return null == l ? bezlen(e, t, a, n, i, r, o, s) : R.findDotsAtSegment(e, t, a, n, i, r, o, s, getTatLen(e, t, a, n, i, r, o, s, l));
},
    getLengthFactory = function (e, t) {
  return function (a, n, r) {
    a = path2curve(a);for (var o, s, d, g, h, c = E, u = {}, m = 0, f = 0, b = a.length; f < b; f++) {
      if (d = a[f], d[0] === strM) o = +d[1], s = +d[2];else {
        if (g = getPointAtSegmentLength(o, s, d[1], d[2], d[3], d[4], d[5], d[6]), m + g > n) {
          if (t && !u.start) {
            if (h = getPointAtSegmentLength(o, s, d[1], d[2], d[3], d[4], d[5], d[6], n - m), c += ['C' + h.start.x, h.start.y, h.m.x, h.m.y, h.x, h.y], r) return c;u.start = c, c = [strM + h.x, h.y + 'C' + h.n.x, h.n.y, h.end.x, h.end.y, d[5], d[6]].join(), m += g, o = +d[5], s = +d[6];continue;
          }if (!e && !t) return h = getPointAtSegmentLength(o, s, d[1], d[2], d[3], d[4], d[5], d[6], n - m), { x: h.x, y: h.y, alpha: h.alpha };
        }m += g, o = +d[5], s = +d[6];
      }c += d.shift() + d;
    }return u.end = c, h = e ? m : t ? u : R.findDotsAtSegment(o, s, d[0], d[1], d[2], d[3], d[4], d[5], 1), h.alpha && (h = { x: h.x, y: h.y, alpha: h.alpha }), h;
  };
},
    getTotalLength = getLengthFactory(1),
    getPointAtLength = getLengthFactory(),
    getSubpathsAtLength = getLengthFactory(0, 1);R.getTotalLength = getTotalLength, R.getPointAtLength = getPointAtLength, elproto.getTotalLength = function () {
  return 'path' == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : getTotalLength(this.attrs.path) : void 0;
}, elproto.getPointAtLength = function (e) {
  return 'path' == this.type ? getPointAtLength(this.attrs.path, e) : void 0;
};var ef = R.easing_formulas = { linear: function (e) {
    return e;
  }, "<": function (e) {
    return pow(e, 1.7);
  }, ">": function (e) {
    return pow(e, .48);
  }, "<>": function (e) {
    var a = .48 - e / 1.04,
        n = mathSqrt(.1734 + a * a),
        i = n - a,
        r = pow(abs(i), 1 / 3) * (0 > i ? -1 : 1),
        o = -n - a,
        s = pow(abs(o), 1 / 3) * (0 > o ? -1 : 1),
        l = r + s + .5;return 3 * (1 - l) * l * l + l * l * l;
  }, backIn: function (e) {
    var t = 1.70158;return e * e * ((t + 1) * e - t);
  }, backOut: function (e) {
    --e;var t = 1.70158;return e * e * ((t + 1) * e + t) + 1;
  }, elastic: function (e) {
    return e === !!e ? e : pow(2, -10 * e) * mathSin((e - .075) * (2 * PI) / .3) + 1;
  }, bounce: function (e) {
    var t,
        a = 7.5625,
        i = 2.75;return e < 1 / i ? t = a * e * e : e < 2 / i ? (e -= 1.5 / i, t = a * e * e + .75) : e < 2.5 / i ? (e -= 2.25 / i, t = a * e * e + .9375) : (e -= 2.625 / i, t = a * e * e + .984375), t;
  }, oneBounceOut: function (e) {
    return .9 >= e ? 1.33 * ef.easeIn(e) : 1.2 - e / 5;
  }, elasticOnce: function (e) {
    var t = .9;return e === !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - t / 4) * (2 * Math.PI) / t) + 1;
  }, easeInQuad: function (e) {
    return e * e;
  }, easeOutQuad: function (e) {
    return e * (2 - e);
  }, easeInOutQuad: function (e) {
    return .5 > e ? 2 * e * e : -1 + (4 - 2 * e) * e;
  }, easeInCubic: function (e) {
    return e * e * e;
  }, easeOutCubic: function (e) {
    return --e * e * e + 1;
  }, easeInOutCubic: function (e) {
    return .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
  }, easeInQuart: function (e) {
    return e * e * e * e;
  }, easeOutQuart: function (e) {
    return 1 - --e * e * e * e;
  }, easeInOutQuart: function (e) {
    return .5 > e ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
  }, easeInQuint: function (e) {
    return e * e * e * e * e;
  }, easeOutQuint: function (e) {
    return 1 + --e * e * e * e * e;
  }, easeInOutQuint: function (e) {
    return .5 > e ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
  } };ef.easeIn = ef['ease-in'] = ef['<'], ef.easeOut = ef['ease-out'] = ef['>'], ef.easeInOut = ef['ease-in-out'] = ef['<>'], ef['back-in'] = ef.backIn, ef['back-out'] = ef.backOut;var requestAnimFrame,
    animationElements = [],
    animation = function () {
  for (var a, n, r, o, s = +new Date(), d = 0, p = [], g = 0, h = 0; d < animationElements.length; d++) if (o = animationElements[d], !(o.el.removed || o.paused || o.parentEl && o.parentEl.e && o.parentEl.e.paused)) {
    for (var c, u, m, y = s - o.start, x = o.ms, f = o.easing, b = o.from, _ = o.diff, v = o.to, A = o.t, t = o.el, C = {}, k = {}, w = !R.stopPartialEventPropagation, g = 0, P = o.el && o.el.animElements && o.el.animElements.peek(); P && P.pos <= y / x;) p.push(o.el.animElements.deq()), P = o.el.animElements.peek();if (o.initstatus ? (y = (o.initstatus * o.anim.top - o.prev) / (o.percent - o.prev) * x, o.status = o.initstatus, delete o.initstatus, o.stop && (delete o.el, animationElements.splice(d--, 1))) : o.status = (o.prev + (o.percent - o.prev) * (y / x)) / o.anim.top, u = x, o.parentEl && o.parentEl.animElements ? (x = o.delayend - o.delaystart, y = o.parentEl.cPos - o.delaystart) : o.el.animElements && (o.el.cPos = y / x), !(0 > y)) if (y < x) {
      var I = f(y / x);for (var T in x = u, b) if (b[HAS](T)) {
        switch (availableAnimAttrs[T]) {case 'number':
            c = +b[T] + I * x * _[T];break;case 'colour':
            if (!_[T].length) a = b[T].opacity + I * x * _[T].opacity, isNaN(a) && (a = 1), c = 'rgba(' + [upto255(round(b[T].r + I * x * _[T].r)), upto255(round(b[T].g + I * x * _[T].g)), upto255(round(b[T].b + I * x * _[T].b)), a].join(COMMA) + ')';else {
              for (c = [], g = 0, F = b[T].length; g < F; ++g) 0 === g ? b[T].isRadial || _[T].isRadial ? (n = 'xr(', n += b[T][0].f1 * (1 - I) + _[T][0].f1 * I || E, n += ',', n += b[T][0].f2 * (1 - I) + _[T][0].f2 * I || E, n += ',', n += 100 * (b[T][0].f3 * (1 - I) + _[T][0].f3 * I) || E, n += '%,', n += b[T][0].f4 * (1 - I) + _[T][0].f4 * I || E, n += ',', n += b[T][0].f5 * (1 - I) + _[T][0].f5 * I, n += ',', n += b[T][0].f6, n += ')', c.push(n)) : (c.push(b[T][g] * (1 - I) + I * _[T][g]), 0 >= c[0] && (c[0] += 360)) : c.push('rgba(' + [upto255(round(b[T][g].r + I * x * _[T][g].r)), upto255(round(b[T][g].g + I * x * _[T][g].g)), upto255(round(b[T][g].b + I * x * _[T][g].b)), b[T][g].opacity + I * x * _[T][g].opacity].join(COMMA) + '):' + b[T][g].position);c = c.join('-'), (b[T].isRadial || _[T].isRadial) && (c = c.replace('-', E));
            }break;case 'path':
            c = [];for (var g = 0, F = b[T].length; g < F; g++) {
              c[g] = [b[T][g][0]];var L = b[T][g] ? b[T][g].length : 0;for (var O = 1; O < L; O++) c[g][O] = (+b[T][g][O] + I * x * _[T][g][O]).toFixed(4);c[g] = c[g].join(S);
            }c = c.join(S);break;case 'transform':
            if (_[T].real) for (c = [], g = 0, F = b[T].length; g < F; g++) for (c[g] = [b[T][g][0]], O = 1, L = b[T][g].length; O < L; O++) c[g][O] = b[T][g][O] + I * x * _[T][g][O];else {
              var N = function (e) {
                return +b[T][e] + I * x * _[T][e];
              };c = [[mStr, N(0), N(1), N(2), N(3), N(4), N(5)]];
            }break;case 'csv':
            if ('clip-rect' === T) for (c = [], g = 4; g--;) c[g] = +b[T][g] + I * x * _[T][g];break;case 'text-bound':
            c = [][CONCAT](b[T]);break;default:
            var B = [][CONCAT](b[T]);for (c = [], g = t.ca[T].length; g--;) c[g] = +B[g] + I * x * _[T][g];}C[T] = c;
      }t.attr(C), w && function (e, t, a) {
        setTimeout(function () {
          (0, _eve2.default)('raphael.anim.frame.' + e, t, a);
        });
      }(t.id, t, o.anim);
    } else {
      if (function (e, t, n) {
        setTimeout(function () {
          w && (0, _eve2.default)('raphael.anim.frame.' + t.id, t, n), w && (0, _eve2.default)('raphael.anim.finish.' + t.id, t, n), R.is(e, FUNCTION) && e.call(t);
        });
      }(o.callback, t, o.anim), t.attr(v), delete o.el, animationElements.splice(d--, 1), 1 < o.repeat && !o.next) {
        for (m in v) v[HAS](m) && (k[m] = o.totalOrigin[m]);o.el.attr(k), runAnimation(o.anim, o.el, o.anim.percents[0], null, o.totalOrigin, o.repeat - 1);
      }o.next && !o.stop && runAnimation(o.anim, o.el, o.next, null, o.totalOrigin, o.repeat);
    }
  }for (R.svg && t && t.paper && t.paper.safari(), d = 0, h = p.length; d < h; ++d) r = R.getInstantAnimFrameFn(), r(function (e) {
    return function () {
      runAnimation.apply(null, p[e].params);
    };
  }(d));animationElements.length && (requestAnimFrame || R.getAnimFrameFn())(animation);
},
    upto255 = function (e) {
  return 255 < e ? 255 : 0 > e ? 0 : e;
},
    checkPercentage = function (e) {
  return 1 < e && (e = 1), 0 > e && (e = 0), e;
};R.getAnimFrameFn = function () {
  return requestAnimFrame = R.requestAnimFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || _win.oRequestAnimationFrame || _win.msRequestAnimationFrame || function (e) {
    setTimeout(e, 16);
  };
}, R.getInstantAnimFrameFn = function () {
  return R.instantRequestAnimFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || _win.oRequestAnimationFrame || _win.msRequestAnimationFrame || function (e) {
    setTimeout(e, 16);
  };
}, elproto.animateWith = function (e, t, n, r, o, s, l) {
  var d,
      p = this,
      g = {};for (d in l = l || {}, l) l.hasOwnProperty(d) && (g[d] = l[d]);if (l = g, p.removed) return s && s.call(p), p;if (0 === r) return R.is(s, FUNCTION) && setTimeout(function () {
    s.call(p);
  }, 0), p.attr(n);var h = n instanceof Animation ? n : R.animation(n, r, o, s);l.start = checkPercentage(l.start || 0), l.end = checkPercentage(l.end || 1), l.start >= l.end && (l.start = l.end), !l.from && .01 < l.start ? (e.animElements = e.animElements || new PriorityQueue(function (e, t) {
    return t.pos - e.pos;
  }), e.animElements.enq({ pos: l.start, attr: l.start === l.end, params: [h, p, h.percents[0], null, p.attr(), void 0, e, { start: l.start, end: l.end, smartMorph: l.smartMorph, hookFn: l.hookFn }, n], executeOb: { el: this, attrs: n, callback: s, hookFn: l.hookFn } })) : runAnimation(h, p, h.percents[0], null, p.attr(), void 0, e, l);for (var a = 0, c = animationElements.length; a < c; a++) if (animationElements[a].anim === t && animationElements[a].el === e) {
    animationElements[c - 1].start = animationElements[a].start;break;
  }return p;
};function CubicBezierAtTime(e, t, a, n, i, r) {
  function o(e) {
    return ((p * e + d) * e + l) * e;
  }function s(e, t) {
    var a, n, r, s, g, h;for (r = e, h = 0; 8 > h; h++) {
      if (s = o(r) - e, abs(s) < t) return r;if (g = (3 * p * r + 2 * d) * r + l, 1e-6 > abs(g)) break;r -= s / g;
    }if (a = 0, n = 1, r = e, r < a) return a;if (r > n) return n;for (; a < n;) {
      if (s = o(r), abs(s - e) < t) return r;e > s ? a = r : n = r, r = (n - a) / 2 + a;
    }return r;
  }var l = 3 * t,
      d = 3 * (n - t) - l,
      p = 1 - l - d,
      g = 3 * a,
      h = 3 * (i - a) - g;return function (e, a) {
    var n = s(e, a);return (((1 - g - h) * n + h) * n + g) * n;
  }(e, 1 / (200 * r));
}elproto.onAnimation = function (e) {
  return e ? _eve2.default.on('raphael.anim.frame.' + this.id, e) : _eve2.default.unbind('raphael.anim.frame.' + this.id), this;
};function Animation(e, t) {
  var a = [],
      n = {};if (this.ms = t, this.times = 1, e) {
    for (var i in e) e[HAS](i) && (n[toFloat(i)] = e[i], a.push(toFloat(i)));a.sort(sortByNumber);
  }this.anim = n, this.top = a[a.length - 1], this.percents = a;
}Animation.prototype.delay = function (e) {
  var t = new Animation(this.anim, this.ms);return t.times = this.times, t.del = +e || 0, t;
}, Animation.prototype.repeat = function (e) {
  var t = new Animation(this.anim, this.ms);return t.del = this.del, t.times = math.floor(mmax(e, 0)) || 1, t;
};function colorNormalizer(e, t, a) {
  'use strict';
  function n(e, t, a) {
    var i = 0;e.isRadial && !t.isRadial && (i += +t[0], t[0] = { f1: 0, f2: 0, f3: 0, f4: 0, f5: 0, f6: E }, t.isRadial = !0), a || n(t, e, !0);
  }function r(e) {
    var t,
        n = 0,
        r = 0,
        o = 0,
        s = [],
        l = {},
        d = 0,
        p = 0,
        g = 0,
        h = 0,
        c = 0,
        u = 0,
        m = { f1: .5, f2: .5 };for (1 === e.length && (e[0] === NONE && (e[0] = 'rgba(0,0,0,0)'), e.unshift(0), e.defaultAngleSet = !0), isNaN(e[0]) ? ~'rx'.indexOf(e[0].charAt(0)) ? (e.isRadial = !0, h = 1, -1 !== e[0].indexOf(')') && (h = e[0].indexOf(')'), c = e[0].indexOf('(') + 1, u = h, s = e[0].substr(c, u - c).split(','), m.f1 = parseFloat(s[0]) || 0, m.f2 = parseFloat(s[1]) || 0, ~s[2].indexOf('%') && (s[2] = parseFloat(s[2]) / 100), m.f3 = parseFloat(s[2]) || 0, m.f4 = parseFloat(s[3]) || 0, m.f5 = parseFloat(s[4]) || 0, m.f6 = s[5]), e[0] = e[0].substr(u + 1), e.unshift(m)) : e[0] = 0 : e[0] = +e[0], (n = 1, r = e.length); n < r; ++n) s = e[n].split(':'), l = a(s[0]), e[n] = {}, e[n].r = l.r, e[n].g = l.g, e[n].b = l.b, e[n].opacity = l.opacity, e[n].opacity = +e[n].opacity, isNaN(e[n].opacity) && (e[n].opacity = 1), e[n].position = +s[1];if (e.sort(function (e, t) {
      return 'number' == typeof e || e.f1 ? -1 : 'number' == typeof t || e.f2 ? 1 : isNaN(e.position) && isNaN(t.position) ? 0 : isNaN(e.position) ? -1 : isNaN(t.position) ? 1 : e.position - t.position;
    }), 0 != +e[1].position) if (isNaN(e[1].position)) e[1].position = 0;else {
      for (t in l = {}, e[1]) l[t] = e[1][t];for (l.position = 0, e.push({}), n = e.length - 1; 1 != n; --n) e[n] = e[n - 1];e[1] = l;
    }if (r = e.length - 1, 100 !== e[r].position) if (isNaN(e[r].position)) e[r].position = 100;else {
      for (t in l = {}, e[r]) l[t] = e[r][t];l.position = 100, e.push(l);
    }for (n = 2, r = e.length; n < r; ++n) if (!e[n].position) {
      for (d = e[n - 1].position, g = 1, o = n + 1; o < r; ++o) if (++g, !isNaN(e[o].position)) {
        p = +e[o].position;break;
      }e[n].position = d + (p - d) / g;
    }return e.getColorAtPosition = function (e) {
      for (var t = -1, a = this.length, n = 1, r = this.length, o = 0, s = E, l = { r: 0, g: 0, b: 0 }; n < r - 1; ++n) if (this[n].position <= e && (t = n, a = n + 1), !(this[n].position < e) && this[n].position >= e) {
        a = n;break;
      }for (s in o = (e - this[t].position) / (this[a].position - this[t].position), isNaN(o) && (o = 0), l) l[s] = upto255((1 - o) * this[t][s] + o * this[a][s]);return l.position = e, l.opacity = (1 - o) * this[t].opacity + o * this[a].opacity, l;
    }, e;
  }var o,
      s,
      l = 0,
      d = 0,
      p = [],
      g = [],
      h = {},
      c = 0,
      u = [];if (e = e.constructor === Array ? e[0] : e, t = t.constructor === Array ? t[0] : t, o = e.split('-'), s = t.split('-'), 1 === o.length && 1 === s.length) return [e, t];for (o = r(o), s = r(s), !o.defaultAngleSet && s.defaultAngleSet && (s[0] = o[0]), !s.defaultAngleSet && o.defaultAngleSet && (o[0] = s[0]), n(o, s), (l = 1, d = o.length); l < d; ++l) c = o[l].position, u.push(c);for (l = 1, d = s.length; l < d; ++l) c = s[l].position, -1 === u.indexOf(c) && u.push(c);for (u.push(0), u.sort(function (e, t) {
    return e - t;
  }), p = [o[0]], (l = 1, d = u.length); l < d; ++l) c = u[l], h = o.getColorAtPosition(c), p.push(h);for (g = [s[0]], l = 1, d = u.length; l < d; ++l) c = u[l], h = s.getColorAtPosition(c), g.push(h);return p.isRadial = o.isRadial, g.isRadial = s.isRadial, [p, g];
}function pathNormalizer(e, t) {
  'use strict';
  function a(e) {
    var t = [],
        a = 0,
        n = e.length;if (typeof e == STRING) return e;for (a = 0; a < n; ++a) {
      if (!e[a].join) return;a && e[a + 1] && 'M' === e[a + 1][0] && 'M' === e[a][0] || t.push(e[a].join(S));
    }for (t = t.join(E), t = t.split(/[Mm]/).slice(1), (a = 0, n = t.length); a < n; ++a) t[a] = 'M' + t[a];return t;
  }function n(e) {
    var t = 0,
        a = 0,
        n = [];for (e = e || [], a = e.length, t = 0; t < a; ++t) e[t].length - 1 && n.push(e[t].join(S));return n.join(E);
  }function r(e, t) {
    for (var a = e.length; a-- - 1 && e[a].slice(1).toString() === e[a - 1].slice(1).toString();) e.pop();1 === e.length && t && (e.length = 0);
  }function o(e, t) {
    for (var a = [], n = [], r = e.length, o = 0, s = 0, l = 0, d = 0, g = 0, h = t - r; 0 <= h;) o = e.length - 1, e.push(e.slice(o)[0]), --h;for (r = e.length, o = 0; o <= t; ++o) n.push(p(o / t * r));for (o = 0, s = n.length - 1; o < s; ++o) a.push(e.slice(n[o], n[o + 1])), 'M' !== a[o][0][0] && a[o][0][0] !== mStr && (d = a[o - 1].length - 1, l = a[o - 1][d][1], g = a[o - 1][d][2], a[o].unshift(['M', l, g]));return a;
  }function s(e) {
    var t = [],
        a = [],
        n = [],
        r = 0,
        s = 0,
        l = !0;if (0 !== e) {
      for (0 < e ? (t = u, l = !1) : (e = -e, t = c), r = 0, s = t.length; r < s; ++r) a.push(1);for (; e--;) --r, 0 > r && (r = s - 1), a[r]++;for (r = 0; r < s; ++r) 1 === a[r] ? n.push(t[r]) : n.push.apply(n, o(t[r], a[r]));l ? c = n : u = n;
    }
  }var l,
      d = Math.max,
      p = Math.round,
      g = [],
      h = [],
      c = a(e),
      u = a(t),
      m = 0,
      y = 0,
      x = document.createElementNS && document.createElementNS.bind(document),
      f = x && x('http://www.w3.org/2000/svg', 'path');if (!c || !u || !f) return [e, t];if (function (e, t) {
    function a(e) {
      for (var t = e.length; t-- - 1 && e[t].join(E) === e[t - 1].join(E);) e.pop();
    }function n(e) {
      for (var t = E, a = 0, n = e.length; a < n; ++a) t += e[a].join(S);return t;
    }var i,
        r,
        o = E,
        s = E;return (f.setAttribute('d', 'M300 10 L300 300 C50 310,50 640,350 650C600 640,600 310,400 300 L400 10 L295 10'), i = f.getTotalLength(), r = f.getPointAtLength(10), !!(1829.1 > i || 1829.2 < i)) || 300 !== p(r.x) || 20 !== p(r.y) || (a(e), a(t), o = n(e), s = n(t), !(2 < o.split(/[Mm]/).length || 2 < s.split(/[Mm]/).length) && e.length === t.length);
  }(e, t)) return [e, t];if (!e || !t) return [e, t];if (!document.createElementNS) return [e, t];if (c = a(e), u = a(t), -1 !== c.join().indexOf('undefined')) return [e, t];if (-1 !== u.join().indexOf('undefined')) return [e, t];if (!f.getTotalLength || !f.getPointAtLength) return [e, t];for (y = d(c.length, u.length), m = 0; m < y; ++m) l = _pathNormalizer(c[m], u[m]), c[m] = l[0], u[m] = l[1];for (m = c.length; m--;) r(c[m], m), c[m].length || c.pop();for (m = u.length; m--;) r(u[m], m), u[m].length || u.pop();for (s(c.length - u.length), y = d(c.length, u.length), m = 0; m < y; ++m) l = _pathNormalizer(n(c[m]), n(u[m])), c[m] = l[0], u[m] = l[1];for (m = 0, y = c.length; m < y; ++m) g = g.concat(c[m]);for (m = 0, y = u.length; m < y; ++m) h = h.concat(u[m]);return [g, h];
}function commonPathCalculator(e, t) {
  'use strict';
  function a(e) {
    var t = 0,
        a = 0;for (e = e.split(/[MCLmcl]/).slice(1), t = 0, a = e.length; t < a; ++t) e[t] = e[t].split(S).slice(1), t || e[t].unshift('M'), t && (2 === e[t].length && e[t].unshift(strL) || e[t].unshift('C'));return e;
  }function n(e, t) {
    var a,
        n,
        r = 0,
        o = e.length;for (r = 0, o = e.length; r < o; ++r) a = e[r].join(S), n = e[r], 'C' === n[0] && n[3] === n[5] && n[4] === n[6] ? e[r].stringValue = [strL, n[3], n[4]].join(S) : n.stringValue = a, t[n.stringValue] && t[n.stringValue].push(r), t[n.stringValue] || (t[n.stringValue] = [r]);
  }function r(e, t, a, n, r) {
    for (var o, s = a, l = 0, d = 0; s < n; ++s) if (o = t[e[s].stringValue], o) for (l = 0, d = o.length; l < d; ++l) if (o[l] >= r) return { index: s, mapValue: o[l], diff: s - a };return -1;
  }function o(e) {
    var t = e.length - 1;return ['M', e[t - 1], e[t]].join(S);
  }function s(e) {
    return e.join(E);
  }var l,
      d,
      p = 0,
      g = 0,
      h = 0,
      c = 0,
      u = 0,
      m = 0,
      y = {},
      x = {},
      f = [],
      b = [],
      _ = -1,
      v = -1,
      A = !0;for (e = a(e), t = a(t), n(e, y), n(t, x), h = e.length, c = t.length, p = 0, g = 0; p < h && g < c;) {
    if (++_, ++v, f[_] = [], b[v] = [], A = e[p].stringValue === t[g].stringValue, p && (f[_].push(o(e[p - 1])), b[v].push(o(t[g - 1]))), A) for (; p < h && g < c && e[p].stringValue === t[g].stringValue;) f[_].push(e[p].stringValue), b[v].push(t[g].stringValue), ++p, ++g;else {
      for (l = r(e, x, p, h, g), d = r(t, y, g, c, p), u = l.index, m = l.mapValue, (!~l || l.diff > d.diff) && (u = d.mapValue, m = d.index), ~l || ~d || (u = h - 1, m = c - 1); p <= u;) f[_].push(e[p].stringValue), ++p;for (; g <= m;) b[v].push(t[g].stringValue), ++g;
    }f[_] = s(f[_]), b[v] = s(b[v]);
  }if (p < h) {
    for (++_, f[_] = [], f[_].push(o(e[p - 1])), ++v, b[v] = [], b[v].push(o(t[g - 1])); p < h;) f[_].push(e[p].stringValue), ++p;f[_] = s(f[_]);
  }if (g < c) {
    for (++_, f[_] = [], f[_].push(o(e[p - 1])), ++v, b[v] = [], b[v].push(o(t[g - 1])); g < c;) b[v].push(t[g].stringValue), ++g;b[v] = s(b[v]);
  }return [f, b];
}function _pathNormalizer(e, t) {
  'use strict';
  function a(e, t) {
    var a,
        n,
        r = 0,
        o = {},
        s = 0,
        l = 0,
        d = [],
        p = [],
        g = 0,
        h = Math.round;for (a = document.createElementNS('http://www.w3.org/2000/svg', 'path'), a.setAttribute('d', e), n = document.createElementNS('http://www.w3.org/2000/svg', 'path'), n.setAttribute('d', t), s = a.getTotalLength(), l = n.getTotalLength(), g = .15 * Math.max(s, l), g = Math.ceil(g), g && isFinite(g) && !(10 > g) || (g = 10), r = 0; r <= g; ++r) o = a.getPointAtLength(r / g * s), d.push([r ? strL : strM, h(o.x), h(o.y)]), o = n.getPointAtLength(r / g * l), p.push([r ? strL : strM, h(o.x), h(o.y)]);return [d, p];
  }var n,
      r,
      o = 0,
      s = 0,
      l = [],
      d = [];for (e && 'M  ' !== e || (e = t.split(S).slice(0, 3).join(S).replace(/[LC]/, E)), t && 'M  ' !== t || (t = e.split(S).slice(0, 3).join(S).replace(/[LC]/, E)), n = commonPathCalculator(e, t), (o = 0, s = n[0].length); o < s; ++o) r = a(n[0][o], n[1][o]), o ? (l = l.concat(r[0].slice(1)), d = d.concat(r[1].slice(1))) : (l = l.concat(r[0]), d = d.concat(r[1]));return [l, d];
}function runAnimation(t, a, n, r, o, s, l, d) {
  n = toFloat(n);var p,
      g,
      h,
      c,
      u,
      y,
      x,
      f,
      b = t.ms,
      v = {},
      A = {},
      C = {};if (null !== a.type) {
    if (d = d || {}, d.hookFn && d.hookFn.call(a), d.from = d.from || {}, r) for (w = 0, S = animationElements.length; w < S; w++) {
      var k = animationElements[w];if (k.el.id === a.id && k.anim === t) {
        k.percent == n ? g = k : (delete k.el.e, delete k.el, animationElements.splice(w, 1), h = 1), a.attr(k.totalOrigin);break;
      }
    } else r = +A;for (var w = 0, S = t.percents.length; w < S; w++) if (t.percents[w] === n || t.percents[w] > r * t.top) {
      n = t.percents[w], u = t.percents[w - 1] || 0, b = b / t.top * (n - u), c = t.percents[w + 1], p = t.anim[n];break;
    } else r && a.attr(t.anim[t.percents[w]]);if (p) {
      if (!g) {
        for (var P in p) if (p[HAS](P)) if (availableAnimAttrs[HAS](P) || a.ca[P]) {
          switch (v[P] = d.from[P] || a.attr(P), null == v[P] && (v[P] = availableAttrs[P]), A[P] = p[P], f = !1, availableAnimAttrs[P]) {case 'number':
              x = A[P] - v[P], (x || isNaN(x)) && (f = !0), C[P] = x / b;break;case 'colour':
              if (v[P] === A[P]) break;else f = !0;var I = colorNormalizer(v[P], A[P], R.getRGB);v[P] = I[0];var T = I[1];if (typeof T == STRING) v[P].toLowerCase() === NONE ? v[P] = { r: 0, g: 0, b: 0, opacity: 0 } : (v[P] = R.getRGB(v[P]), !v[P].opacity && (v[P].opacity = 1)), A[P].toLowerCase() === NONE ? T = { r: 0, g: 0, b: 0, opacity: 0 } : (T = R.getRGB(A[P]), !T.opacity && (T.opacity = 1)), C[P] = { r: (T.r - v[P].r) / b, g: (T.g - v[P].g) / b, b: (T.b - v[P].b) / b, opacity: (T.opacity - v[P].opacity) / b };else for (C[P] = [], w = 0, S = v[P].length; w < S; ++w) 0 === w ? C[P].push(T[0]) : C[P].push({ r: (T[w].r - v[P][w].r) / b, g: (T[w].g - v[P][w].g) / b, b: (T[w].b - v[P][w].b) / b, opacity: (T[w].opacity - v[P][w].opacity) / b });break;case 'path':
              var E,
                  F = path2curve(v[P], A[P]);for (d.smartMorph && (F = pathNormalizer(F[0], F[1], d)), E = F[1], v[P] = F[0], C[P] = [], (w = 0, S = v[P].length); w < S; w++) {
                C[P][w] = [0];var L = v[P][w] ? v[P][w].length : 0;for (var O = 1; O < L; O++) C[P][w][O] = (E[w][O] - v[P][w][O]) / b, !f && C[P][w][O] && (f = !0);
              }break;case 'transform':
              var N = a._,
                  _ = equaliseTransform(N[P], A[P]);if (f = !0, _) for (v[P] = _.from, A[P] = _.to, C[P] = [], C[P].real = !0, (w = 0, S = v[P].length); w < S; w++) for (C[P][w] = [v[P][w][0]], O = 1, L = v[P][w].length; O < L; O++) C[P][w][O] = (A[P][w][O] - v[P][w][O]) / b;else {
                var B = a.matrix || new Matrix(),
                    m = { _: { transform: N.transform }, getBBox: function () {
                    return a.getBBox(1);
                  } };v[P] = [B.a, B.b, B.c, B.d, B.e, B.f], extractTransform(m, A[P]), A[P] = m._.transform, C[P] = [(m.matrix.a - B.a) / b, (m.matrix.b - B.b) / b, (m.matrix.c - B.c) / b, (m.matrix.d - B.d) / b, (m.matrix.e - B.e) / b, (m.matrix.f - B.f) / b];
              }break;case 'csv':
              var M = Str(p[P])[SPLIT](separator),
                  V = Str(v[P])[SPLIT](separator);if ('clip-rect' === P) for (v[P] = V, C[P] = [], w = V.length; w--;) x = M[w] - v[P][w], (x || isNaN(x)) && (f = !0), C[P][w] = x / b;A[P] = M;break;default:
              for (M = [][CONCAT](p[P]), V = [][CONCAT](v[P]), C[P] = [], w = a.ca[P].length; w--;) x = (M[w] || 0) - (V[w] || 0), (x || isNaN(x)) && (f = !0), C[P][w] = x / b;}f || (delete v[P], delete A[P], delete p[P], delete C[P]);
        } else (R._availableAttrs[HAS](P) || 'text' === P || a.ca[P]) && (a.attr(P, p[P]), delete p[P]);var D = p.easing,
            q = R.easing_formulas[D];if (!q) if (q = Str(D).match(bezierrg), q && 5 === q.length) {
          var Y = q;q = function (e) {
            return CubicBezierAtTime(e, +Y[1], +Y[2], +Y[3], +Y[4], b);
          };
        } else q = pipe;if (y = p.start || t.start || +new Date(), a.e = k = { anim: t, percent: n, timestamp: y, start: y + (t.del || 0), status: 0, initstatus: r || 0, stop: !1, ms: b, easing: q, from: v, diff: C, to: A, el: a, callback: p.callback, prev: u, next: c, repeat: s || t.times, origin: a.attr(), totalOrigin: o, parentEl: l, delayend: d && d.end, delaystart: d && d.start }, animationElements.push(k), r && !g && !h && (k.stop = !0, k.start = new Date() - b * r, 1 === animationElements.length)) return animation();h && (k.start = new Date() - k.ms * r), 1 === animationElements.length && (requestAnimFrame || R.getAnimFrameFn())(animation);
      } else g.initstatus = r, g.start = new Date() - g.ms * r;(0, _eve2.default)('raphael.anim.start.' + a.id, a, t);
    }
  }
}R.animation = function (e, t, a, n, i) {
  if (e instanceof Animation) return e;(R.is(a, FUNCTION) || !a) && (n = n || a || null, a = null), R.stopPartialEventPropagation || (R.stopPartialEventPropagation = i), e = Object(e), t = +t || 0;var r,
      o,
      s = {};for (o in e) e[HAS](o) && toFloat(o) != o && toFloat(o) + '%' != o && (r = !0, s[o] = e[o]);return n && (r = !0), r ? (a && (s.easing = a), n && (s.callback = n), new Animation({ 100: s }, t)) : new Animation(e, t);
}, elproto.animate = function (e, t, a, n) {
  var i = this;if (i.removed) return n && n.call(i), i;var r = e instanceof Animation ? e : R.animation(e, t, a, n);return runAnimation(r, i, r.percents[0], null, i.attr()), i;
}, elproto.status = function (t, a) {
  var n,
      r,
      o = [],
      s = 0;if (null != a) return runAnimation(t, this, -1, mmin(a, 1)), this;for (n = animationElements.length; s < n; s++) if (r = animationElements[s], r.el.id === this.id && (!t || r.anim === t)) {
    if (t) return r.status;o.push({ anim: r.anim, status: r.status });
  }return t ? 0 : o;
}, elproto.pause = function (t, a) {
  var n,
      r,
      o = +new Date();for (r = 0; r < animationElements.length; r++) n = animationElements[r], (n.el.id === this.id || a && n.parentEl && n.parentEl.e.el && n.parentEl.e.el.id === this.id) && (!t || n.anim === t) && !1 !== (0, _eve2.default)('raphael.anim.pause.' + this.id, this, n.anim) && (n.paused = !0, n.pauseStart = o);return this;
}, elproto.resume = function (t, a) {
  var n,
      r,
      o = +new Date();for (r = 0; r < animationElements.length; r++) n = animationElements[r], (n.el.id === this.id || a && n.parentEl && n.parentEl.e.el && n.parentEl.e.el.id === this.id) && (!t || n.anim === t) && !1 !== (0, _eve2.default)('raphael.anim.resume.' + this.id, this, n.anim) && (delete n.paused, n.el.status(n.anim, n.status), n.pauseEnd = o, n.start += (n.parentEl && n.parentEl.e.pauseEnd || n.pauseEnd) - (n.parentEl && n.parentEl.e.pauseStart || n.pauseStart) || 0);return this;
}, elproto.stop = function (t, a, n) {
  var r, o, s;if (a) for (o = animationElements.length - 1; 0 <= o; o--) r = animationElements[o], (r.el.id === this.id || r.parentEl && r.parentEl.id === this.id) && (!t || animationElements[o].anim === t) && (s = r.el, n && s.attr(r.to), r.callback && r.callback.call(s), delete s.e, delete r.el, animationElements.splice(o, 1));else for (var o = 0; o < animationElements.length; o++) r = animationElements[o], r.el.id !== this.id || t && r.anim !== t || !1 === (0, _eve2.default)('raphael.anim.stop.' + this.id, this, r.anim) || animationElements.splice(o--, 1);return this.animElements && executeAnimQueue(this.animElements), this;
};function executeAnimQueue(e) {
  for (var t; t = e.deq();) t = t.executeOb, t.hookFn && t.hookFn.call(t.el), t.el.attr(t.attrs), t.callback && t.callback.call(t.el);
}function stopAnimation(e) {
  for (var t = 0; t < animationElements.length; t++) animationElements[t].el.paper === e && animationElements.splice(t--, 1);
}_eve2.default.on('raphael.remove', stopAnimation), _eve2.default.on('raphael.clear', stopAnimation), elproto.toString = function () {
  return 'Rapha\xEBl\u2019s object';
}, elproto.toFront = function () {
  if (this.removed) return this;var e,
      t,
      a,
      n = this,
      r = R._engine.getNode(n),
      o = n.parent,
      s = n.followers;for (R._tofront(n, o) && o.canvas.appendChild(r), t = 0, a = s.length; t < a; t++) (e = s[t]).stalk && e.el[e.stalk](n);return n;
}, elproto.toBack = function () {
  if (this.removed) return this;var e,
      t,
      a,
      n = this,
      r = R._engine.getNode(n),
      o = n.parent,
      s = n.followers;for (R._toback(n, o) && o.canvas.insertBefore(r, o.canvas.firstChild), t = 0, a = s.length; t < a; t++) (e = s[t]).stalk && e.el[e.stalk](n);return n;
}, elproto.insertAfter = function (e) {
  if (this.removed) return this;var t,
      a,
      n,
      r = this,
      o = R._engine.getNode(r),
      s = R._engine.getLastNode(e),
      l = e.parent.canvas,
      d = r.followers;for (s.nextSibling ? l.insertBefore(o, s.nextSibling) : l.appendChild(o), R._insertafter(r, e, r.parent, e.parent), (a = 0, n = d.length); a < n; a++) (t = d[a]).stalk && t.el[t.stalk](e);return r;
}, elproto.insertBefore = function (e) {
  if (this.removed) return this;var t,
      a,
      n,
      r = this,
      o = R._engine.getNode(r),
      s = R._engine.getNode(e),
      l = r.followers;for (e.parent.canvas.insertBefore(o, s), R._insertbefore(r, e, r.parent, e.parent), r.parent = e.parent, (a = 0, n = l.length); a < n; a++) (t = l[a]).stalk && t.el[t.stalk](e);return this;
}, elproto.appendChild = function (e) {
  if (this.removed || 'group' !== this.type) return this;var t,
      a,
      n,
      r,
      o = this,
      s = o.followers;if (e.parent === o) return e.toFront(), o;for (a = R._engine.getNode(e), R._tear(e, e.parent), o.canvas.appendChild(a), e.parent = o, o.bottom || (o.bottom = e), e.prev = o.top, e.next = null, o.top && (o.top.next = e), o.top = e, (n = 0, r = s.length); n < r; n++) (t = s[n]).stalk && t.el[t.stalk](e);return o;
}, elproto.appendTo = function (e) {
  return e.appendChild(this);
}, elproto.removeChild = function (e) {
  if (this.removed || 'group' !== this.type || e.parent !== this) return this;var t = this,
      a = R._engine.getNode(e),
      n = t.paper;return R._tear(e, t), n.canvas.appendChild(a), t.parent = n, n.bottom || (n.bottom = t), t.prev = n.top, n.top && (n.top.next = t), n.top = t, t.next = null, t;
}, R.format = function (e, t) {
  var a = (0, _raphael.getArrayCopy)(arguments),
      n = R.is(t, ARRAY) ? [0][CONCAT](t) : a;return e && R.is(e, STRING) && n.length - 1 && (e = e.replace(formatrg, function (e, t) {
    return null == n[++t] ? E : n[t];
  })), e || E;
};var crispFixer = R.vml && .5 || 0;R.crispBound = (0, _raphael.cacher)(function (e, t, a, n, i) {
  var r,
      o = {};return e = e || 0, t = t || 0, a = a || 0, n = n || 0, i = i || 0, r = i % 2 / 2 + crispFixer, o.x = round(e + r) - r, o.y = round(t + r) - r, o.width = round(e + a + r) - r - o.x, o.height = round(t + n + r) - r - o.y, o['stroke-width'] = i, 0 === o.width && 0 !== a && (o.width = 1), 0 === o.height && 0 !== n && (o.height = 1), o;
}, R), elproto.crisp = function () {
  var e,
      t = this,
      a = t.attrs,
      n = t.attr();for (e in n = R.crispBound(n.x, n.y, n.width, n.height, n['stroke-width']), n) a[e] === n[e] && delete n[e];return t.attr(n);
}, R.define = function (t, a, n, r, o, e) {
  var s, l;if (R.is(t, ARRAY)) {
    for (s = 0, l = t.length; s < l; s++) R.define(t[s]);return;
  }return R.is(t, OBJECT) ? void R.define(t.name, t[t.name], t.ca, t.fn, t.e, t.data) : !t || R.fn[t] ? void 0 : (R.fn[t] = function () {
    var e,
        i = (0, _raphael.getArrayCopy)(arguments),
        s = a.apply(this, i);if (r && R.is(r, OBJECT)) for (e in r) s[e] = r[e];if (o && R.is(o, OBJECT)) for (e in o) s[e] && s[e](o[e]);if (n) {
      if (R.is(n, FUNCTION)) s.ca[t] = n;else for (e in n) s.ca[e] = n[e];s.ca[t] && (R._lastArgIfGroup(i, !0), i.length && (i[0][t] ? s.attr.apply(s, i) : s.attr(t, i[0])));
    }return s;
  }, n && (R.fn[t].ca = n), r && (R.fn[t].fn = r), o && (R.fn[t].e = o), e && (R.fn[t].data = e), R.fn[t]);
}, function (e, t, a) {
  function n() {
    /in/.test(e.readyState) ? setTimeout(n, 9) : R.eve('raphael.DOMload');
  }null == e.readyState && e.addEventListener && (e.addEventListener(t, a = function () {
    e.removeEventListener(t, a, !1), e.readyState = 'complete';
  }, !1), e.readyState = 'loading'), n();
}(doc, 'DOMContentLoaded'), _eve2.default.on('raphael.DOMload', function () {
  loaded = !0;
});exports.default = R;
},{"./eve/eve":126,"./raphael.lib":87}],32:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raphael = require('../vendors/redraphael/source/raphael.core');

var _raphael2 = _interopRequireDefault(_raphael);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_raphael2.default.stopPartialEventPropagation = !0, _raphael2.default._stopabsolutePath = !0;exports.default = { extension: _raphael2.default, name: 'redraphael', type: 'plugin' };
},{"../vendors/redraphael/source/raphael.core":90}],91:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  if (e.svg) {
    var t = { visibility: 'hidden', "font-size": '0px' },
        n = String,
        r = parseFloat,
        a = parseInt,
        o = { top: 0, bottom: -1, middle: -.5 },
        s = !!document.documentMode,
        i = Math,
        d = i.max,
        p = i.abs,
        l = i.pow,
        h = i.sqrt,
        c = /^xlink:/,
        g = /[, ]+/,
        y = /\n|<br\s*?\/?>/i,
        f = /&lt|&gt|<br/i,
        u = Array.prototype.shift,
        _ = !!(/AppleWebKit/.test(e._g.win.navigator.userAgent) && (!/Chrome/.test(e._g.win.navigator.userAgent) || 29 > e._g.win.navigator.appVersion.match(/Chrome\/(\d+)\./)[1])),
        m = e.eve,
        w = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
        v = { block: 'M5,0 0,2.5 5,5z', classic: 'M5,0 0,2.5 5,5 3.5,3 3.5,2z', diamond: 'M2.5,0 5,2.5 2.5,5 0,2.5z', open: 'M6,1 1,3.5 6,6', oval: 'M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z' },
        x = { speed: 'optimizeSpeed', crisp: 'crispEdges', precision: 'geometricPrecision' },
        b = e._g.win.navigator.userAgent.toLowerCase(),
        k = function () {
      var e = -1 != b.indexOf('msie') && parseInt(b.split('msie')[1]);return !!(e && 9 === e);
    }(),
        C = {},
        A = function (t, r, a, i) {
      e._preload(a[1], function () {
        var e = this.offsetWidth,
            a = this.offsetHeight;B(t, { width: e, height: a }), B(r, { width: e, height: a }), i.safari();
      });
    },
        T = function (e, t) {
      if (t) for (var r in t) e[r] = t[r];
    };e.cachedFontHeight = {}, e.toString = function () {
      return 'Your browser supports SVG.\nYou are running Rapha\xEBl ' + this.version;
    }, e._url = '';var S = function (e, t) {
      var r = e.gradient;if (r) {
        if (r === t) return;r.refCount--, r.refCount || r.parentNode.removeChild(r), delete e.gradient;
      }t && (e.gradient = t, t.refCount++);
    },
        B = e._createNode = function (t, r) {
      if ('string' == typeof t && (t = e._g.doc.createElementNS('http://www.w3.org/2000/svg', t)), r) {
        var a, i;for (a in r) i = k ? n(r[a]) : r[a], c.test(a) ? t.setAttributeNS('http://www.w3.org/1999/xlink', a.replace(c, ''), i) : t.setAttribute(a, i);
      }return t;
    },
        L = { userSpaceOnUse: 'userSpaceOnUse', objectBoundingBox: 'objectBoundingBox' },
        N = { pad: 'pad', redlect: 'reflect', repeat: 'repeat' },
        E = function (t, a) {
      if (!t.paper || !t.paper.defs) return 0;var c,
          g,
          y,
          f,
          u,
          _,
          m = 'linear',
          w = t.paper,
          v = e.getElementID((w.id + '-' + a).replace(/[()\s%:,\xb0#]/g, '_')),
          x = .5,
          b = .5,
          k = t.node,
          o = k.style,
          s = e._g.doc.getElementById(v);if (!s) {
        if (a = n(a).replace(e._radial_gradient, function (e, t) {
          m = 'radial', t = t ? t.split(',') : [], f = t[5], u = t[6];var a,
              i,
              n = t[0],
              o = t[1],
              s = t[2],
              d = t[3],
              p = t[4],
              _ = n && o;return (s && (c = /%/.test(s) ? s : r(s)), f === L.userSpaceOnUse) ? (_ && (x = n, b = o), d && p && (g = d, y = p, !_ && (x = g, b = y)), '') : (_ && (x = r(n), b = r(o), a = 2 * (.5 < b) - 1, .25 < (i = l(x - .5, 2)) + l(b - .5, 2) && .25 > i && (b = h(.25 - i) * a + .5) && .5 !== b && (b = b.toFixed(5) - 1e-5 * a)), d && p && (g = r(d), y = r(p), a = 2 * (.5 < y) - 1, .25 < (i = l(g - .5, 2)) + l(y - .5, 2) && .25 > i && (y = h(.25 - i) * a + .5) && .5 !== y && (y = y.toFixed(5) - 1e-5 * a), !_ && (x = g, b = y)), '');
        }), a = a.split(/\s*-\s*/), 'linear' == m) {
          var C,
              A = a.shift(),
              T = A.match(/\((.*)\)/);if (T = T && T[1] && T[1].split(/\s*,\s*/), A = -r(A), isNaN(A)) return null;T && T.length ? (T[0] in L ? (f = T.shift(), T[0] in N && (u = T.shift())) : (T[4] && (f = T[4]), T[5] && (u = T[5])), _ = [T[0] || '0%', T[1] || '0%', T[2] || '100%', T[3] || '0%']) : (_ = [0, 0, i.cos(e.rad(A)), i.sin(e.rad(A))], C = 1 / (d(p(_[2]), p(_[3])) || 1), _[2] *= C, _[3] *= C, 0 > _[2] && (_[0] = -_[2], _[2] = 0), 0 > _[3] && (_[1] = -_[3], _[3] = 0));
        }var E = e._parseDots(a);if (!E) return null;s = B(m + 'Gradient', { id: v }), s.refCount = 0, f in L && s.setAttribute('gradientUnits', n(f)), u in N && s.setAttribute('spreadMethod', n(u)), 'radial' == m ? (void 0 !== c && s.setAttribute('r', n(c)), void 0 !== g && void 0 !== y && (s.setAttribute('cx', n(g)), s.setAttribute('cy', n(y))), s.setAttribute('fx', n(x)), s.setAttribute('fy', n(b))) : B(s, { x1: _[0], y1: _[1], x2: _[2], y2: _[3] });for (var P = 0, O = E.length; P < O; P++) s.appendChild(B('stop', { offset: E[P].offset ? E[P].offset : P ? '100%' : '0%', "stop-color": E[P].color || '#fff', "stop-opacity": void 0 === E[P].opacity ? 1 : E[P].opacity }));w.defs.appendChild(s);
      }return S(t, s), B(k, { fill: 'url(\'' + e._url + '#' + v + '\')', "fill-opacity": 1 }), o.fill = '', 1;
    },
        P = function (e) {
      var t = e.getBBox(1);B(e.pattern, { patternTransform: e.matrix.invert() + ' translate(' + t.x + ',' + t.y + ')' });
    },
        O = function (r, a, o) {
      if ('path' == r.type) {
        for (var s, d, l, c, g, y = n(a).toLowerCase().split('-'), f = r.paper, p = o ? 'end' : 'start', u = r.node, _ = r.attrs, m = _['stroke-width'], x = y.length, b = 'classic', k = 3, A = 3, T = 5; x--;) switch (y[x]) {case 'block':case 'classic':case 'oval':case 'diamond':case 'open':case 'none':
            b = y[x];break;case 'wide':
            A = 5;break;case 'narrow':
            A = 2;break;case 'long':
            k = 5;break;case 'short':
            k = 2;}if ('open' == b ? (k += 2, A += 2, T += 2, l = 1, c = o ? 4 : 1, g = { fill: 'none', stroke: _.stroke }) : (c = l = k / 2, g = { fill: _.stroke, stroke: 'none' }), r._.arrows ? o ? (r._.arrows.endPath && C[r._.arrows.endPath]--, r._.arrows.endMarker && C[r._.arrows.endMarker]--) : (r._.arrows.startPath && C[r._.arrows.startPath]--, r._.arrows.startMarker && C[r._.arrows.startMarker]--) : r._.arrows = {}, 'none' != b) {
          var S = 'raphael-marker-' + b,
              L = 'raphael-marker-' + p + b + k + A + '-obj' + r.id;e._g.doc.getElementById(S) ? C[S]++ : (f.defs.appendChild(B(B('path'), { "stroke-linecap": 'round', d: v[b], id: S })), C[S] = 1);var N,
              E = e._g.doc.getElementById(L);E ? (C[L]++, N = E.getElementsByTagName('use')[0]) : (E = B(B('marker'), { id: L, markerHeight: A, markerWidth: k, orient: 'auto', refX: c, refY: A / 2 }), N = B(B('use'), { "xlink:href": '#' + S, transform: (o ? 'rotate(180 ' + k / 2 + ' ' + A / 2 + ') ' : '') + 'scale(' + k / T + ',' + A / T + ')', "stroke-width": (1 / ((k / T + A / T) / 2)).toFixed(4) }), E.appendChild(N), f.defs.appendChild(E), C[L] = 1), B(N, g);var P = l * ('diamond' != b && 'oval' != b);o ? (s = r._.arrows.startdx * m || 0, d = e.getTotalLength(_.path) - P * m) : (s = P * m, d = e.getTotalLength(_.path) - (r._.arrows.enddx * m || 0)), g = {}, g['marker-' + p] = 'url(\'' + e._url + '#' + L + '\')', (d || s) && (g.d = e.getSubpath(_.path, s, d)), B(u, g), r._.arrows[p + 'Path'] = S, r._.arrows[p + 'Marker'] = L, r._.arrows[p + 'dx'] = P, r._.arrows[p + 'Type'] = b, r._.arrows[p + 'String'] = a;
        } else o ? (s = r._.arrows.startdx * m || 0, d = e.getTotalLength(_.path) - s) : (s = 0, d = e.getTotalLength(_.path) - (r._.arrows.enddx * m || 0)), r._.arrows[p + 'Path'] && B(u, { d: e.getSubpath(_.path, s, d) }), delete r._.arrows[p + 'Path'], delete r._.arrows[p + 'Marker'], delete r._.arrows[p + 'dx'], delete r._.arrows[p + 'Type'], delete r._.arrows[p + 'String'];for (g in C) if (C.hasOwnProperty(g) && !C[g]) {
          var O = e._g.doc.getElementById(g);O && O.parentNode.removeChild(O);
        }
      }
    },
        z = { "": ['none'], none: ['none'], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
        M = function (t, r, a) {
      if (void 0 !== r) {
        var n,
            o,
            s,
            d,
            p,
            l = z[r.toLowerCase && r.toLowerCase()];if (r = l || [].concat(r), e.is(r, 'array')) {
          if (o = a['stroke-width'] || t.attrs['stroke-width'] || 1, s = { round: o, square: o, butt: 0 }[a['stroke-linecap'] || t.attrs['stroke-linecap']] || 0, d = r.length, p = l ? o : 1, 'none' === r[0]) n = r;else for (n = []; d--;) n[d] = r[d] * p + (d % 2 ? 1 : -1) * s, 0 >= n[d] && (n[d] = .01 + (1 >= o ? s : 0)), isNaN(n[d]) && (n[d] = 0);return { "stroke-dasharray": n.join(',') };
        }
      }
    },
        I = e._setFillAndStroke = function (t, r) {
      if (t.paper.canvas) {
        var i,
            o,
            s,
            l,
            h,
            c = t.node,
            y = t.attrs,
            f = t.paper,
            u = {},
            m = {};for (o in 'image' === t.type && (0, _raphael.loadRefImage)(t, r), r) if (o in e._availableAttrs) if (s = r[o], '' === s && o in y) delete y[o], c.removeAttribute('src' === o ? 'href' : o);else switch (y[o] = s, o) {case 'blur':
            t.blur(s);break;case 'href':case 'title':case 'target':
            var w = c.parentNode;if ('a' !== w.tagName.toLowerCase()) {
              if ('' === s) break;var v = B('a');v.raphael = !0, v.raphaelid = c.raphaelid, w.insertBefore(v, c), v.appendChild(c), w = v;
            }'target' === o ? w.setAttributeNS('http://www.w3.org/1999/xlink', 'show', 'blank' === s ? 'new' : s) : w.setAttributeNS('http://www.w3.org/1999/xlink', o, s), c.titleNode = w;break;case 'cursor':
            m.cursor = s;break;case 'transform':
            t.transform(s);break;case 'rotation':
            e.is(s, 'array') ? t.rotate.apply(t, s) : t.rotate(s);break;case 'arrow-start':
            O(t, s);break;case 'arrow-end':
            O(t, s, 1);break;case 'clip-path':
            l = !0;case 'clip-rect':
            if (h = !l && n(s).split(g), t._.clipispath = !!l, l || 4 === h.length) {
              t.clip && t.clip.parentNode.parentNode.removeChild(t.clip.parentNode);var b = B(l ? 'path' : 'rect');i = B('clipPath'), i.id = e.getElementID(e.createUUID()), B(b, l ? { d: s ? y['clip-path'] = e._pathToAbsolute(s) : e._availableAttrs.path, fill: 'none' } : { x: h[0], y: h[1], width: h[2], height: h[3], transform: t.matrix.invert() }), i.appendChild(b), f.defs.appendChild(i), u['clip-path'] = 'url(\'' + e._url + '#' + i.id + '\')', t.clip = b;
            }if (!s) {
              var k = c.getAttribute('clip-path');if (k) {
                var C = e._g.doc.getElementById(k.replace(/(^url\(#|\)$)/g, ''));C && C.parentNode.removeChild(C), u['clip-path'] = '', 11 === document.documentMode && c.removeAttribute('clip-path'), delete t.clip;
              }
            }break;case 'path':
            'path' === t.type && (u.d = s ? y.path = e._stopabsolutePath ? e.sanitizePath(s) : e._pathToAbsolute(s) : e._availableAttrs.path, t._.dirty = 1, t._.arrows && ('startString' in t._.arrows && O(t, t._.arrows.startString), 'endString' in t._.arrows && O(t, t._.arrows.endString, 1)));break;case 'width':
            if (u[o] = s, t._.dirty = 1, y.fx) o = 'x', s = y.x;else break;case 'x':
            y.fx && (s = -y.x - (y.width || 0));case 'rx':
            if ('rx' === o && 'rect' === t.type) break;case 'cx':
            u[o] = s, t.pattern && P(t), t._.dirty = 1;break;case 'height':
            if (u[o] = s, t._.dirty = 1, y.fy) o = 'y', s = y.y;else break;case 'y':
            if ('text' === t.type) break;y.fy && (s = -y.y - (y.height || 0));case 'ry':
            if ('ry' === o && 'rect' === t.type) break;case 'cy':
            u[o] = s, t.pattern && P(t), t._.dirty = 1;break;case 'r':
            'rect' === t.type ? u.rx = u.ry = s : u[o] = s, t._.dirty = 1;break;case 'src':
            'image' === t.type && c.setAttributeNS('http://www.w3.org/1999/xlink', 'href', s);break;case 'stroke-width':
            (1 !== t._.sx || 1 !== t._.sy) && (s /= d(p(t._.sx), p(t._.sy)) || 1), f._vbSize && (s *= f._vbSize), _ && 0 === s && (s = 1e-6), u[o] = s, !r['stroke-dasharray'] && y['stroke-dasharray'] && T(u, M(t, y['stroke-dasharray'], r)), t._.arrows && ('startString' in t._.arrows && e.addArrow && e.addArrow(t, t._.arrows.startString), 'endString' in t._.arrows && e.addArrow && e.addArrow(t, t._.arrows.endString, 1));break;case 'stroke-dasharray':
            T(u, M(t, s, r));break;case 'fill':
            var L = e._ISURL.test(s);if (L) {
              i = B('pattern');var N = B('image');i.id = e.getElementID(e.createUUID()), B(i, { x: 0, y: 0, patternUnits: 'userSpaceOnUse', height: 1, width: 1 }), B(N, { x: 0, y: 0, "xlink:href": L[1] }), i.appendChild(N), A(i, N, L, f), f.defs.appendChild(i), u.fill = 'url(\'' + e._url + '#' + i.id + '\')', t.pattern = i, t.pattern && P(t);break;
            }var z = e.getRGB(s);if (!z.error) delete r.gradient, delete y.gradient, !e.is(y['fill-opacity'], 'undefined') && e.is(r['fill-opacity'], 'undefined') && (u['fill-opacity'] = y['fill-opacity']), t.gradient && S(t);else if (('circle' === t.type || 'ellipse' === t.type || 'r' !== n(s).charAt()) && E(t, s)) {
              y.gradient = s;break;
            }z.hasOwnProperty('opacity') ? (u['fill-opacity'] = 1 < z.opacity ? z.opacity / 100 : z.opacity, t._.fillOpacityDirty = !0) : t._.fillOpacityDirty && e.is(y['fill-opacity'], 'undefined') && e.is(r['fill-opacity'], 'undefined') && (c.removeAttribute('fill-opacity'), delete t._.fillOpacityDirty);case 'stroke':
            z = e.getRGB(s), u[o] = z.hex, 'stroke' === o && (z.hasOwnProperty('opacity') ? (u['stroke-opacity'] = 1 < z.opacity ? z.opacity / 100 : z.opacity, t._.strokeOpacityDirty = !0) : t._.strokeOpacityDirty && e.is(y['stroke-opacity'], 'undefined') && e.is(r['stroke-opacity'], 'undefined') && (c.removeAttribute('stroke-opacity'), delete t._.strokeOpacityDirty), t._.arrows && ('startString' in t._.arrows && O(t, t._.arrows.startString), 'endString' in t._.arrows && O(t, t._.arrows.endString, 1)));break;case 'gradient':
            ('circle' === t.type || 'ellipse' === t.type || 'r' !== n(s).charAt()) && E(t, s);break;case 'visibility':
            'hidden' === s ? t.hide() : t.show();break;case 'opacity':
            s = 1 < s ? s / 100 : s, u.opacity = s;break;case 'fill-opacity':
            s = 1 < s ? s / 100 : s, u['fill-opacity'] = s;break;case 'shape-rendering':
            t.attrs[o] = s = x[s] || s || 'auto', u[o] = s, c.style.shapeRendering = s;break;case 'line-height':case 'vertical-align':
            break;default:
            'font-size' === o && (s = a(s, 10) + 'px'), t._.dirty = 1, u[o] = s, _raphael.dashedAttr2CSSMap[o] && (m[_raphael.dashedAttr2CSSMap[o]] = s);}for (o in m) c.style[o] = m[o];for (o in u) c.setAttribute(o, u[o]);'text' !== t.type || r['_do-not-tune'] || R(t, r);
      }
    },
        D = e._updateFollowers = function () {
      var e,
          t,
          r,
          a = (0, _raphael.getArrayCopy)(arguments),
          n = u.call(a),
          o = u.call(a);for (e = 0, t = n.followers.length; e < t; e++) r = n.followers[e].el, r[o].apply(r, a);
    },
        R = function (d, p) {
      if ('text' === d.type && (p.hasOwnProperty('text') || p.hasOwnProperty('font') || p.hasOwnProperty('font-size') || p.hasOwnProperty('x') || p.hasOwnProperty('y') || p.hasOwnProperty('line-height') || p.hasOwnProperty('vertical-align'))) {
        var h,
            c,
            g,
            u,
            _,
            m,
            w,
            v,
            x,
            b,
            k,
            C = d.attrs,
            a = d.parent,
            A = d.node,
            T = d._oldAttr = d._oldAttr || { baseLineDiff: 8, valign: -.5 },
            S = r(p['line-height'] || C['line-height']),
            L = p.direction || C.direction || a && a.attrs && a.attrs.direction || T.direction || 'initial',
            N = !1,
            E = !1,
            P = s || 'rtl' !== L ? 1 : 2,
            O = !1,
            z = !1,
            M = !s && T.direction && L !== T.direction;if (T.direction = L, S || (h = p.fontSize || p['font-size'] || C['font-size'] || a && a.attrs && a.attrs.fontSize, h = h ? h.toString().replace('px', '') : 10, S = h * 1.2), p.hasOwnProperty('text') && (k = e.is(p.text, 'array') ? p.text.join('<br>') : p.text, k !== T.text && (z = !0, k && f.test(k) && (k = k.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&<br\/>lt;|&l<br\/>t;|&lt<br\/>;/g, '<<br/>').replace(/&<br\/>gt;|&g<br\/>t;|&gt<br\/>;/g, '><br/>')), T.text = C.text = k, y.test(k) ? (T.noTSpan && (T.noTSpan = !(M = !0)), w = n(k).split(y), _ = w.length) : (M = !0, T.noTSpan = !0, _ = 1), T.lineCount !== _ && (T.lineCount = _, O = !0))), S !== T.lineHeight && (T.lineHeight = S, T.baseLineDiff = .75 * S, O = !0), M) for (; A.firstChild;) A.removeChild(A.firstChild);if (!(1 < T.lineCount)) z && A.appendChild(e._g.doc.createTextNode(k));else if (g = {}, T.tspanAttr || (T.tspanAttr = {}, T.tspan0Attr = {}), T.tspanAttr.dy !== T.lineHeight && (T.tspanAttr.dy = g.dy = T.lineHeight, E = !0), p.hasOwnProperty('x') && T.tspanAttr.x !== p.x && (T.tspan0Attr.x = T.tspanAttr.x = g.x = C.x, E = !0), z) {
          for (b = A.getElementsByTagName('tspan'), u = 0; u < _; u++) {
            if (x = b[u * P], x) {
              if (x.innerHTML = '', s) for (; x.firstChild;) x.removeChild(x.firstChild);E && B(x, u ? g : T.tspan0Attr);
            } else x = B('tspan', u ? T.tspanAttr : T.tspan0Attr), A.appendChild(x), s || 'rtl' !== L || (v = B('tspan', t), v.appendChild(e._g.doc.createTextNode('i')), A.appendChild(v));w[u] || (x.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'), w[u] = ' '), x.appendChild(e._g.doc.createTextNode(w[u]));
          }if (m = _ * P, b.length > m) for (u = b.length - 1; u >= m; u -= 1) A.removeChild(b[u]);
        } else if (E) for (b = A.getElementsByTagName('tspan'), m = b.length, u = 0; u < m; u += P) B(b[u], u ? g : T.tspan0Attr);p['vertical-align'] && (c = o[C['vertical-align']] || 0, c !== T.valign && (T.valign = c, O = !0)), O && (T.shift = T.baseLineDiff + T.lineCount * T.lineHeight * T.valign, N = !0), (p.y || 0 === p.y) && T.y !== p.y && (T.y = C.y, N = !0), N && B(A, { y: Math.round(T.y + T.shift) });
      }
    },
        F = function (t, r, a) {
      var i = this,
          n = a || r;n.canvas && n.canvas.appendChild(t), i.node = i[0] = t, t.raphael = !0, t.raphaelid = i.id = e._oid++, i.matrix = e.matrix(), i.realPath = null, i.attrs = i.attrs || {}, i.followers = i.followers || [], i.paper = r, i.ca = i.customAttributes = i.customAttributes || new r._CustomAttributes(), i._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, i.parent = n, n.bottom || (n.bottom = i), i.prev = n.top, n.top && (n.top.next = i), n.top = i, i.next = null;
    },
        U = e.el;F.prototype = U, U.constructor = F, e._engine.getNode = function (e) {
      var t = e.node || e[0].node;return t.titleNode || t;
    }, e._engine.getLastNode = function (e) {
      var t = e.node || e[e.length - 1].node;return t.titleNode || t;
    }, U.rotate = function (e, t, a) {
      var i,
          s = this;return s.removed ? s : (D(s, 'rotate', e, t, a), e = n(e).split(g), e.length - 1 && (t = r(e[1]), a = r(e[2])), e = r(e[0]), null == a && (t = a), (null == t || null == a) && (i = s.getBBox(1), t = i.x + i.width / 2, a = i.y + i.height / 2), s.transform(s._.transform.concat([['r', e, t, a]])), s);
    }, U.scale = function (e, t, a, i) {
      var s,
          d = this;return d.removed ? d : (D(d, 'scale', e, t, a, i), e = n(e).split(g), e.length - 1 && (t = r(e[1]), a = r(e[2]), i = r(e[3])), e = r(e[0]), null == t && (t = e), null == i && (a = i), (null == a || null == i) && (s = d.getBBox(1)), a = null == a ? s.x + s.width / 2 : a, i = null == i ? s.y + s.height / 2 : i, d.transform(d._.transform.concat([['s', e, t, a, i]])), d);
    }, U.translate = function (e, t) {
      var a = this;return a.removed ? a : (D(a, 'translate', e, t), e = n(e).split(g), e.length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, a.transform(a._.transform.concat([['t', e, t]])), a);
    }, U.transform = function (t) {
      var r,
          a = this,
          i = a._;return null == t ? i.transform : (e._extractTransform(a, t), a.clip && !i.clipispath && B(a.clip, { transform: a.matrix.invert() }), a.pattern && P(a), a.node && B(a.node, { transform: a.matrix }), (1 !== i.sx || 1 !== i.sy) && (r = a.attrs['stroke-width'], r && a.attr({ "stroke-width": r })), a);
    }, U.hide = function () {
      var e = this;return D(e, 'hide'), e.removed || e.paper.safari(e.node.style.display = 'none'), e;
    }, U.show = function () {
      var e = this;return D(e, 'show'), e.removed || e.paper.safari(e.node.style.display = ''), e;
    }, U.remove = function () {
      if (!this.removed && this.parent.canvas) {
        var t,
            r = this,
            a = e._engine.getNode(r),
            n = r.paper,
            o = n.defs;for (n.__set__ && n.__set__.exclude(r), m.unbind('raphael.*.*.' + r.id), r.gradient && o && S(r); t = r.followers.pop();) t.el.remove();for (; t = r.bottom;) t.remove();if (r._drag && r.undrag(), r.events) for (; t = r.events.pop();) t.unbind();for (t in r.parent.canvas.contains(a) && r.parent.canvas.removeChild(a), r.removeData(), delete n._elementsById[r.id], e._tear(r, r.parent), r) r[t] = 'function' == typeof r[t] ? e._removedFactory(t) : null;r.removed = !0;
      }
    }, U._getBBox = function () {
      var e,
          t,
          r,
          i = this,
          n = i.node,
          o = {},
          d = i.attrs,
          a = 'text' === i.type;s && a ? e = (0, _raphael.showRecursively)(i) : 'none' === n.style.display && (i.show(), r = !0);try {
        o = n.getBBox(), a && (void 0 === o.x && (o.isCalculated = !0, t = d['text-anchor'], o.x = (d.x || 0) - o.width * ('start' === t ? 0 : 'middle' === t ? .5 : 1)), void 0 === o.y && (o.isCalculated = !0, t = d['vertical-align'], o.y = (d.y || 0) - o.height * ('bottom' === t ? 1 : 'middle' === t ? .5 : 0)));
      } catch (t) {} finally {
        o = o || {};
      }return s && a ? e && e() : r && i.hide(), o;
    }, U.attr = function (t, r) {
      if (this.removed) return this;var a,
          n,
          o,
          s,
          d,
          p,
          l,
          h,
          c = this,
          g = this.attrs,
          y = {},
          f = c._invokedCa || (c._invokedCa = {}),
          u = this.ca;if (null == t) {
        var _ = {};for (a in g) g.hasOwnProperty(a) && (_[a] = g[a]);return _.gradient && 'none' === _.fill && (_.fill = _.gradient) && delete _.gradient, _.transform = this._.transform, _.visibility = 'none' === this.node.style.display ? 'hidden' : 'visible', _;
      }if (null != r) s = {}, s[t] = r;else if (e.is(t, 'object')) s = t;else if (e.is(t, 'string')) return 'fill' === t && 'none' === g.fill && g.gradient ? g.gradient : 'transform' === t ? this._.transform : 'visibility' === t ? 'none' === this.node.style.display ? 'hidden' : 'visible' : t in g ? g[t] : e.is(u[t], 'function') ? u[t].def : e._availableAttrs[t];if (!e.stopPartialEventPropagation) for (a in s) m('raphael.attr.' + a + '.' + this.id, this, s[a], a);for (a in s) if (h = u[a], h && !f[a] && e.is(h, 'function')) {
        for (d in f[a] = !0, p = h.apply(this, [].concat(s[a])), f[a] = !1, p) y[d] = p[d];g[a] = s[a];
      } else y[a] = s[a];for (I(this, y), n = 0, o = this.followers.length; n < o; n++) l = this.followers[n], l.cb && !l.cb.call(l.el, y, this) || l.el.attr(y);return this;
    }, U.on = function (t, r, a) {
      var i,
          n,
          o,
          s = this;return this.removed ? this : 'dragstart' === t ? (this.drag(null, r), this) : 'dragmove' === t ? (this.drag(r), this) : 'dragend' === t ? (this.drag(null, null, r), this) : (n = r, o = t, e.supportsTouch && !a && (t = e._touchMap[t] || 'click' === t && 'touchend' || t, t !== o && (!s._tempTouchListeners && (s._tempTouchListeners = {}), !s._tempTouchListeners[o] && (s._tempTouchListeners[o] = []), n = function (t) {
        t.preventDefault(), r(t);
      }, s._tempTouchListeners[o].push({ oldFn: r, newFn: n, newEvt: t }), !w && s.on(o, r, !0))), this._ && this._.RefImg && ('load' === t || 'error' === t) ? (i = this._.RefImg, n = function (t) {
        s.removed || r.call(s, t);
      }) : i = this.node, i.addEventListener ? i.addEventListener(t, n) : i['on' + t] = n, this);
    }, U.off = function (t, r) {
      var a,
          n,
          o,
          s,
          d,
          p = this;if (this.removed) return this;if ('dragstart' === t) return this.undragstart(), this;if ('dragmove' === t) return this.undragmove(), this;if ('dragend' === t) return this.undragend(), this;if (a = r, d = t, e.supportsTouch && p._tempTouchListeners && p._tempTouchListeners[d]) for (o = p._tempTouchListeners[d].length, n = 0; n < o && d === t; n += 1) p._tempTouchListeners[d][n] && p._tempTouchListeners[d][n].oldFn === a && (t = p._tempTouchListeners[d][n].newEvt, a = p._tempTouchListeners[d][n].newFn, p._tempTouchListeners[d].splice(n, 1));return s = this._ && this._.RefImg ? this._.RefImg : this.node, s.removeEventListener ? s.removeEventListener(t, a) : s['on' + t] = null, this;
    }, e._engine.path = function (e, t, r) {
      var a = B('path'),
          i = new F(a, e, r);return i.type = 'path', t && i.attr(t), i;
    }, e._engine.group = function (e, t, r) {
      var a = B('g'),
          i = new F(a, e, r);return i.type = 'group', i.canvas = i.node, i.top = i.bottom = null, i._id = t || '', t && a.setAttribute('class', 'raphael-group-' + i.id + '-' + t), i;
    }, e._engine.circle = function (e, t, r) {
      var a = B('circle'),
          i = new F(a, e, r);return i.type = 'circle', t && i.attr(t), i;
    }, e._engine.rect = function (e, t, r) {
      var a = B('rect'),
          i = new F(a, e, r);return i.type = 'rect', t.rx = t.ry = t.r, t && i.attr(t), i;
    }, e._engine.ellipse = function (e, t, r) {
      var a = B('ellipse'),
          i = new F(a, e, r);return i.type = 'ellipse', t && i.attr(t), i;
    }, e._engine.image = function (e, t, r) {
      var a = B('image'),
          i = new F(a, e, r, !0);return i._.group = r || e, i.type = 'image', a.setAttribute('preserveAspectRatio', 'none'), t && i.attr(t), i;
    }, e._engine.text = function (e, t, r, a) {
      var i = B('text'),
          n = new F(i, e, r);return n.type = 'text', a && n.css && n.css(a, void 0, !0), t && n.attr(t), n;
    }, e._engine.setSize = function (e, t) {
      return this.width = e || this.width, this.height = t || this.height, this.canvas.setAttribute('width', this.width), this.canvas.setAttribute('height', this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
    }, e._engine.create = function () {
      var t,
          r = e._getContainer.apply(0, arguments),
          a = r && r.container,
          i = r.x,
          n = r.y,
          o = r.width,
          s = r.height;if (!a) throw new Error('SVG container not found.');var d,
          p = B('svg');return i = i || 0, n = n || 0, o = o || 512, s = s || 342, B(p, { height: s, version: 1.1, width: o, xmlns: 'http://www.w3.org/2000/svg' }), 1 === a ? (p.style.cssText = 'overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;vertical-align:middle;position:absolute;left:' + i + 'px;top:' + n + 'px', a = e._g.doc.body, a.appendChild(p), d = 1) : (p.style.cssText = 'overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;vertical-align:middle;position:relative', a.firstChild ? a.insertBefore(p, a.firstChild) : a.appendChild(p)), t = new e._Paper(), t.width = o, t.height = s, t.canvas = p, t.container = a, B(p, { id: 'raphael-paper-' + t.id }), t.clear(), t._left = t._top = 0, d && (t.renderfix = function () {}), t.renderfix(), t;
    }, e._engine.setViewBox = function (e, t, r, a, i) {
      m('raphael.setViewBox', this, this._viewBox, [e, t, r, a, i]);var n,
          o,
          s = d(r / this.width, a / this.height),
          p = this.top,
          l = i ? 'meet' : 'xMinYMin';if (null == e ? (this._vbSize && (s = 1), delete this._vbSize, n = '0 0 ' + this.width + ' ' + this.height) : (this._vbSize = s, n = e + ' ' + t + ' ' + r + ' ' + a), B(this.canvas, { viewBox: n, preserveAspectRatio: l }), s) for (; p;) o = 'stroke-width' in p.attrs ? p.attrs['stroke-width'] : 1, p.attr({ "stroke-width": o }), p._.dirty = 1, p._.dirtyT = 1, p = p.prev;return this._viewBox = [e, t, r, a, !!i], this;
    }, e.prototype.detachPaper = function () {
      !1 !== this._detached && (this.container.removeChild(this.canvas), this._detached = !0);
    }, e.prototype.attachPaper = function () {
      this._detached && (this.container.appendChild(this.canvas), this._detached = !1);
    }, e.prototype.renderfix = function () {
      var e,
          t = this.canvas,
          r = t.style;try {
        e = t.getScreenCTM() || t.createSVGMatrix();
      } catch (r) {
        e = t.createSVGMatrix();
      }var a = -e.e % 1,
          i = -e.f % 1;(a || i) && (a && (this._left = (this._left + a) % 1, r.left = this._left + 'px'), i && (this._top = (this._top + i) % 1, r.top = this._top + 'px'));
    }, e.prototype._desc = function (t) {
      var r = this.desc;if (!r) this.desc = r = B('desc'), this.canvas.appendChild(r);else for (; r.firstChild;) r.removeChild(r.firstChild);r.appendChild(e._g.doc.createTextNode(e.is(t, 'string') ? t : 'Created with Red Rapha\xEBl ' + e.version));
    }, e.prototype.clear = function () {
      var e;for (m('raphael.clear', this); e = this.bottom;) e.remove();for (e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);this.bottom = this.top = null, e.appendChild(this.desc = B('desc')), e.appendChild(this.defs = B('defs'));
    }, e.prototype.remove = function () {
      for (m('raphael.remove', this); t = this.bottom;) t.remove();for (var t in this.defs && this.defs.parentNode.removeChild(this.defs), this.desc && this.desc.parentNode.removeChild(this.desc), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[t] = 'function' == typeof this[t] ? e._removedFactory(t) : null;this.removed = !0;
    }, e.prototype.setHTMLClassName = function () {};
  }
};

var _raphael = require('./raphael.lib');
},{"./raphael.lib":87}],33:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raphael = require('../vendors/redraphael/source/raphael.svg');

var _raphael2 = _interopRequireDefault(_raphael);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { extension: function (a) {
    (0, _raphael2.default)(a.getDep('redraphael', 'plugin'));
  }, name: 'redraphaelSvg', type: 'plugin', requiresFusionCharts: !0 };
},{"../vendors/redraphael/source/raphael.svg":91}],34:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function json2json(a) {
  var b = { data: {} };if (!a) return b;if ('string' == typeof a) try {
    b.data = JSON.parse(a);
  } catch (a) {
    b.error = a;
  } else b.data = a;return b;
}function getJSONData() {
  return this.getChartData('json');
}function setJSONData(a) {
  this.setChartData(a, 'json');
}function wrapper(a) {
  return a && (a.prototype.setJSONData = setJSONData), a && (a.prototype.getJSONData = getJSONData), { format: 'json', toJSON: json2json, fromJSON: json2json };
}exports.default = { extension: wrapper, name: 'JSON', type: 'transcoder', requiresFusionCharts: !0 };
},{}],79:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b,
      c,
      d,
      e = a.eve,
      f = a._g,
      g = a.fn,
      h = a.el,
      j = /[, ]+/,
      i = /\B([A-Z]{1})/g;c = function (a) {
    this.styleSheet = '', this.rules = {}, this.ns = a || '';
  }, d = c.prototype, d.getSheet = function () {
    var b = this.node;return this.styleSheet = d.getStyleSheet('fusioncharts-raphael-stylesheet'), this.styleSheet || (b = this.node = f.doc.createElement('style'), b.setAttribute('id', a.format('raphael-stylesheet-{0}', a._oid++)), b.setAttribute('type', 'text/css'), b.setAttribute('title', 'fusioncharts-raphael-stylesheet'), (f.doc.head || f.doc.getElementsByTagName('head')[0]).appendChild(this.node), this.styleSheet = d.getStyleSheet('fusioncharts-raphael-stylesheet')), this.styleSheet;
  }, d.getStyleSheet = function (a) {
    for (var b, c = f.doc.styleSheets, d = c.length; d--;) if (b = c[d], b.title === a) return b;
  }, d.applyCSSRule = function (a, b) {
    var c,
        d,
        e = this.styleSheet;if (!e) if (a && b) e = this.getSheet();else return;c = e.rules || e.cssRules || {}, d = c.length || 0, e.insertRule ? e.insertRule(a + '{' + b + '}', d) : e.addRule && e.addRule(a, b, d);
  }, d.removeCSS = function (a) {
    var b,
        c = this.styleSheet,
        d = c.rules || c.cssRules || {},
        e = d.length || 0;for (a = a || this.ns; e--;) b = d[e], new RegExp(a).test(b.selectorText) && (c.removeRule ? c.removeRule(e) : c.deleteRule(e));
  }, d.destroy = function () {
    this.removeCSS(), delete this.node, delete this.styleSheet, delete this.ns, delete this.rules;
  }, d.clear = function () {
    this.removeCSS(), this.rules = {};
  }, d.add = function (a, b, c) {
    var d,
        e = '',
        f = this.rules[a] || (this.rules[a] = {}),
        g = c ? '' : '\t',
        h = c ? ':' : ': ';for (d in b) (f[d] = b[d]) && (e += g + d.replace(i, '-$1').toLowerCase() + h + f[d] + ';');this.applyCSSRule(a, e);
  }, d.render = function () {
    this.setCssText();
  }, d.setCssText = function (a) {
    var b,
        c,
        d = a ? '' : '\t',
        e = a ? ':' : ': ',
        f = '',
        g = '';for (b in this.rules) {
      for (c in f = '', g = b.replace(/(^|\,)/g, '$1' + this.ns + ' '), b = this.rules[b], b) b[c] && (f += d + c.replace(i, '-$1').toLowerCase() + e + b[c] + ';');this.applyCSSRule(g, f);
    }
  }, e.on('raphael.new', function () {
    this._stylesheet = this._stylesheet || new c(), this.cssNamespace('');
  }), e.on('raphael.remove', function () {
    this._stylesheet && this._stylesheet.destroy(), delete this._stylesheet;
  }), g.cssNamespace = function (b) {
    return arguments.length && (this._stylesheet.ns = a.format('{0}#raphael-paper-{1}', b && b + ' ' || '', this.id)), this._stylesheet.ns;
  }, g.cssAddRule = function (a, b) {
    if (1 === arguments.length && 'object' == typeof a) {
      for (var c in a) this.cssAddRule(c, a[c]);return this;
    }return this._stylesheet.add(a, b), this;
  }, g.cssRender = function () {
    return a.svg && this._stylesheet.render(), this;
  }, g.cssClear = function () {
    return this._stylesheet.clear(), this;
  }, a.ca['class'] = function (b) {
    var c,
        d,
        e,
        f,
        g = this,
        h = g.node,
        j = g.paper,
        k = '.' + b,
        l = j._stylesheet && j._stylesheet.rules,
        m = g.parent,
        n = g.attrs,
        o = {};if (a.svg) b = b || '', h.setAttribute('class', 'group' === g.type && g._id ? 'raphael-group-' + g.id + '-' + g._id + ' ' + b : b);else if (a.vml && (c = h.className = 'group' === g.type ? b && g._id + ' ' + b || g._id : 'rvml ' + b, h.className = c ? c + ' fusioncharts-div' : 'fusioncharts-div', k && l)) {
      for (f in d = l[k], d) 'color' === f && 'text' === g.type && (f = 'fill'), n[f] || (o[f] = d[f]);for (; m && m.attr;) {
        if (e = m.attr('class')) for (f in k = '.' + e + ' ' + k, d = l[k], d) 'color' === f && 'text' === g.type && (f = 'fill'), n[f] || o[f] || (o[f] = d[f]);m = m.parent;
      }g.css(o);
    }
  }, h.css = function (c, d, f) {
    var g, h, k, l, m, n, o;if (this.removed) return this;if (this.styles || (this.styles = {}), d === b && a.is(c, 'string')) {
      for (g = c.split(j), k = {}, (n = 0, o = g.length); n < o; n++) c = g[n], c in this.styles && (k[c] = this.styles[c]);return o - 1 ? k : k[g[0]];
    }if (d === b && a.is(c, 'array')) {
      for (k = {}, n = 0, o = c.length; n < o; n++) k[c[n]] = this.styles(c[n]);return k;
    }for (n in d === b ? c && a.is(c, 'object') && (h = c) : (h = {}, h[c] = d), m = {}, h) {
      if (l = n.replace(/\B([A-Z]{1})/g, '-$1').toLowerCase(), a._availableAttrs.hasOwnProperty(l) || 'color' === l) {
        'color' === l && 'text' === this.type && (l = 'fill'), m[l] = h[n], m.dirty = !0;continue;
      }e('raphael.css.' + l + '.' + this.id, this, h[n], l), this.node.style[l] = h[n], this.styles[l] = h[n];
    }for (n = 0, o = this.followers.length; n < o; n++) this.followers[n].el.attr(h);return m.hasOwnProperty('dirty') && (delete m.dirty, f && (m['_do-not-tune'] = !0), this.attr(m)), this;
  }, h.removeCSS = function (b) {
    var c,
        d,
        e,
        f = this;if (b || (b = _lib.appliedCSS), this.removed) return this;if (a.is(b, 'string') && (b = b.split(',')), a.is(b, 'array')) for (e = b.length, d = 0; d < e; d++) c = b[d].replace(/\B([A-Z]{1})/g, '-$1').toLowerCase(), f.node.removeAttribute(c), f.node.style[c] = '';return this;
  };
};

var _lib = require('../lib/lib');
},{"../lib/lib":23}],80:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b,
      c,
      d = window,
      e = Math,
      f = e.sqrt,
      g = d.parseFloat,
      h = d.parseInt,
      i = d.SVGFilterElement || d.SVGFEColorMatrixElement && 2 === d.SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE,
      j = { "drop-shadow": 'drop-shadow', stroke: 'stroke', fill: 'fill', "stroke-width": 'stroke-width', "stroke-opacity": 'stroke-opacity', "stroke-linecap": 'stroke-linecap', "stroke-linejoin": 'stroke-linejoin', "shape-rendering": 'shape-rendering', opacity: 'opacity', "fill-opacity": 'fill-opacity' };a.svg ? (i && (a.filterShadow = function (b, c) {
    var d,
        e,
        h,
        i,
        j = b.dx || 1,
        k = b.dy || 1,
        l = b.spread || 3,
        m = b.color || 'rgb(64,64,64)',
        n = b.paper,
        o = n.cacheShadows || (n.cacheShadows = {}),
        p = b.id || 'drop-shadow-' + (c ? 'layered' : 'non-layered') + '-' + [j, k, l, m].join(' '),
        q = b.id || a.getElementID(p.replace(/[\(\)\s%:,\xb0#]/g, '_')),
        r = b.id ? !!a._g.doc.getElementById(q) : !!o[p];return n && !r ? (m = a.color(m), m.error && (m = a.color('rgba(0,0,0,1)')), h = (0, _lib.pluck)(m.opacity, 1), h = b.opacity || h, d = n.addDefs({ filter: { tagName: 'filter', id: q, width: '200%', height: '200%', children: [{ tagName: 'feOffset', result: 'offOut', in: 'SourceGraphic', dx: g(j), dy: g(k) }, { tagName: 'feColorMatrix', result: 'matrixOut', in: 'offOut', type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ' + h + ' 0' }, { tagName: 'feGaussianBlur', result: 'blurOut', in: 'matrixOut', stdDeviation: c ? 1 : f(g(l)) }, { tagName: 'feComposite', in: 'SourceGraphic', in2: 'blurOut', operator: 'over' }] } }), e = d.filter.children, i = o[p] = { use: 1, hash: p, id: q, filter: d.filter.element, offset: e[0].element, matrix: e[1].element, blur: e[2].element, blend: e[3].element }) : (i = o[p], i.use += 1), i;
  }, a.el.dropshadow = function (b, d, e, f, g, h) {
    var j,
        k,
        l,
        m,
        n,
        p,
        q,
        r,
        s = this,
        o = s._.shadowFilter,
        t = s.paper,
        u = t.cacheShadows || (t.cacheShadows = {}),
        v = 'drop-shadow' + [b, d, e, f].join(' ');for (n = m = .05 * g, q = 1; 3 >= q; q++) n += m * q * (g - n);if (j = h ? s.shadowElem || s.clone({ fill: 'none', stroke: 'rgb(51, 51, 51)', "stroke-width": s.attr('stroke-width') || 1, opacity: n }, h).translate(b, d).follow(s, c, !h && 'before') : s, k = j.shadowElem && j.shadowElem.node || j.node, 'none' !== b) h && !s.shadowElem && (p = !0), h && (s.shadowElem = j), o = o && u[v] ? u[v] : s._.shadowFilter = a.filterShadow({ paper: t, dx: b, dy: d, spread: e, color: f, opacity: !h && n }, !!h), !p && s.shadowElem && s.shadowElem.attr('opacity', n), k.setAttribute('filter', 'url("' + a._url + '#' + o.id + '")');else if (o) {
      if (o.use -= 1, k.removeAttribute('filter'), s.shadowElem && s.shadowElem.attr('opacity', 0), !o.use) {
        for (l in v = o.hash, o) r = o[l], r.parentNode && r.parentNode.removeChild(r), delete o[l];r = null, delete u[v];
      }o = null, delete s._.shadowFilter;
    }return this;
  }), c = function (a, b) {
    var c,
        d,
        e = this,
        f = {};for (d in a) j[d] && (f[d] = a[d], delete a[d]), 'transform' === d ? (c = b.matrix.clone(), c.translate(e.__shadowx, e.__shadowy), e.transform(c.toTransformString())) : 'stroke-width' === d ? a[d] = f[d] || 1 : void 0;for (d in e.attr(a), f) a[d] = f[d];
  }, a.ca['drop-shadow'] = function (b, d, e, f, g, j) {
    var k,
        l,
        m,
        n,
        p,
        q,
        r,
        s = this,
        o = s._.shadows || (s._.shadows = []);if (s.__shadowblocked) return !1;if ('none' === b) for (; l = o.pop();) l.remove();else for (f = a.color(f), f.error && (f = a.color('rgba(0,0,0,1)')), g instanceof Array ? (p = g[0], q = g[1]) : p = q = g, p = 1 / (0, _lib.pluck)(p, 1), q = 1 / (0, _lib.pluck)(q, 1), b = (0, _lib.pluck)(b, 1) * p, d = (0, _lib.pluck)(d, 1) * p, k = .05 * (0, _lib.pluck)(f.opacity, 1), m = h(s.attr('stroke-width') || 1, 10) + 6, n = s.matrix.clone(), n.translate(b, d), r = 1; 3 >= r; r++) l = (o[r - 1] || s.clone().follow(s, c, !j && 'before')).attr({ stroke: f.hex, "stroke-opacity": k * r, opacity: '1', "stroke-width": (m - 2 * r) * q, transform: n.toTransformString(), "stroke-linecap": 'round', "stroke-linejoin": 'round', fill: 'none' }), l.__shadowlevel = r, l.__shadowscale = q, l.__shadowx = b, l.__shadowy = d, j && j.appendChild(l), o.push(l);return !1;
  }, a.el.shadow = function (b, c, d, e) {
    var f;if (d && d.constructor === a.el.constructor && (e = d, d = void 0), 'object' == typeof b && (c && c.constructor === a.el.constructor && (e = c), c = b.opacity, d = b.scalefactor, f = void 0 === b.useFilter ? !_lib.isIE9 : !!b.useFilter, b = void 0 === b.apply ? !!c : b.apply), void 0 === c && (c = 1), this.dropshadow) {
      if (f && !this.ca.hasOwnProperty('drop-shadow')) return b && this.dropshadow(1, 1, 3, 'rgb(64,64,64)', c, e) || this.dropshadow('none'), this;this._.shadowFilter && this.dropshadow('none');
    }return this.attr('drop-shadow', b ? [1, 1, 3, 'rgba(64,64,64,' + c + ')', d, e] : 'none');
  }) : a.vml ? (a.ca['drop-shadow'] = function (c, d, e, f, h, i) {
    var j,
        k,
        l,
        m,
        n = this,
        o = n._.shadow;return !n.isShadow && ('none' === c ? o && (o = n._.shadow = o.remove()) : (!o && (o = n._.shadow = n.clone(), i && i.appendChild(o.follow(n)) || o.follow(n, b, 'before'), o.attr({ fill: 'none', "fill-opacity": .5, "stroke-opacity": 1 }).isShadow = !0, 0 >= o.attr('stroke-width') && o.attr('stroke-width', 1)), j = o.node.runtimeStyle, k = j.filter.replace(/ progid:\S+Blur\([^\)]+\)/g, ''), f = a.color(f), f.error && (f = a.color('rgba(0,0,0,1)')), m = (0, _lib.pluck)(f.opacity, 1) / 5, l = h instanceof Array ? h[0] : h, l = 1 / (0, _lib.pluck)(h, 1), c = (0, _lib.pluck)(c, 1) * l, d = (0, _lib.pluck)(d, 1) * l, o.translate(c, d), j.filter = k + ' progid:DXImageTransform.Microsoft.Blur(pixelRadius=' + g(.4 * e) + ' makeShadow=True Color=' + f.hex + ' shadowOpacity="' + m + '");'), !1);
  }, a.el.shadow = function (c, d, e, f) {
    var g = this;return e && e.constructor === a.el.constructor && (f = e, e = b), 'object' == typeof c && (d && 'group' === d.type && (f = d), d = c.opacity, e = c.scalefactor, c = c.apply === b ? !!d : c.apply), d === b && (d = 1), g.attr('drop-shadow', c || !d ? [1, 1, 5, 'rgba(64,64,64,' + d + ')', e, f] : 'none');
  }) : a.canvas && (a.el.shadow = function () {
    return this;
  });
};

var _lib = require('../lib/lib');
},{"../lib/lib":23}],81:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (b) {
  const a = /rgba\([\d]+\,[\d]+\,[\d]+\,0\)$/;var c,
      d = window,
      e = d.navigator.userAgent,
      f = 'createTouch' in d.document,
      g = /msie/i.test(e) && !d.opera,
      h = Math,
      j = h.cos,
      k = h.sin,
      i = h.abs,
      l = h.min,
      m = h.PI,
      n = d.parseInt,
      p = d.parseFloat,
      q = String,
      r = Array.prototype.slice,
      s = 'rgba(192,192,192,' + (g ? .002 : 1e-6) + ')',
      t = b.eve,
      u = /\s*\,\s*/g;b && b._availableAnimAttrs && b._availableAnimAttrs.cx && (b._availableAnimAttrs['scroll-position'] = b._availableAnimAttrs.cx), b.define && b.define([{ name: 'polypath', polypath: function () {
      return this.path(c, b._lastArgIfGroup(arguments));
    }, ca: { polypath: function (a, c, d, e, f, g) {
        var l, o, q, s, t;if (l = [], a = n(a, 10) || 0, c = p(c) || 0, d = p(d) || 0, e = p(e) || 0, f = null === f || isNaN(f) ? .5 * m : b.rad(f), g = null === g || isNaN(g) ? 0 : p(g), s = f, 2 < a) switch (o = 2 * m / a, g) {case 0:
            for (q = 0; q < a; q++) l.push('L', c + e * j(-s), d + e * k(-s)), s += o;l[0] = 'M', l.push('Z');break;case 1:
            for (q = 0; q < a; q++) l.push('M', c, d, 'L', c + e * j(-s), d + e * k(-s)), s += o;break;default:
            for (o *= .5, t = e * j(o) * (1 - g), q = 0; q < a; q++) l.push('L', c + e * j(-s), d + e * k(-s)), s += o, l.push('L', c + t * j(-s), d + t * k(-s)), s += o;l[0] = 'M', l.push('Z');} else 0 === e ? l.push('M', c, d, 'L', c, d, 'Z') : l.push('M', c - e, d, 'A', e, e, 0, 0, 0, c + e, d, 'A', e, e, 0, 0, 0, c - e, d, 'Z');return { path: l };
      }, r: function (a) {
        var b = this,
            c = b.attrs.polypath;return c[3] = a, b.attr('polypath', c), !1;
      } } }, { name: 'scroller', scroller: function (c, d, e, f, g, j, k) {
      'object' == typeof c && c.scroller && ([c, d, e, f, g, j, k] = c.scroller);var l,
          m,
          n,
          q,
          r,
          s = this,
          u = s.group('scroller', k),
          o = u.attrs,
          v = u._.scroller = {},
          z = {};for (r in l = g && 'horizontal' || 'vertical', v.track = s.rect(u).mousedown(function (a) {
        var c,
            d,
            e = o['scroll-orientation'],
            f = o['scroll-position'],
            g = (0, _lib.extend2)({}, v.anchor.node.getBoundingClientRect());g.y = g.y || g.top, g.x = g.x || g.left, g.height = g.height || g.bottom - g.top, g.width = g.width || g.right - g.left, d = 'horizontal' === e ? a.x - (g.x + g.width / 2) : a.y - (g.y + g.height / 2), c = d / v.trackLength, c = f + c, 1 < c ? c = 1 : (0 > c || isNaN(c)) && (c = 0), m = b.animation({ "scroll-position": c }, 2e3 * i(f - c), 'easeIn'), u.animate(m), t('raphael.scroll.start.' + u.id, u, f);
      }).mouseup(v._mouseupTrack = function () {
        this.stop(m), t('raphael.scroll.end.' + this.id, this, o['scroll-position']);
      }, u, !0), v.anchor = s.rect(u).drag(function (a) {
        z['scroll-position'] = n + a.data[q] / v.trackLength, 1 <= z['scroll-position'] ? z['scroll-position'] = 1 : (0 >= z['scroll-position'] || isNaN(z['scroll-position'])) && (z['scroll-position'] = 0), u.attr(z);
      }, function (a) {
        q = 'horizontal' === o['scroll-orientation'] ? 0 : 1, t('raphael.scroll.start.' + u.id, u, n = o['scroll-position']), 'function' == typeof v.scrollStart && v.scrollStart.call(u, n), a.stopPropagation();
      }, function () {
        t('raphael.scroll.end.' + u.id, u, n = o['scroll-position']), 'function' == typeof v.scrollEnd && v.scrollEnd.call(u, n);
      }), b.fn.scroller.fn) u[r] = b.fn.scroller.fn[r];for (r in b.fn.scroller.ca) u.ca[r] = b.fn.scroller.ca[r];return o['scroll-orientation'] = l, o['stroke-width'] = 1, u.ca['scroll-repaint'] = u.ca['scroll-repaint-' + l], b.is(j, 'object') || (j = {}), u.attr({ "scroll-display-buttons": j.showButtons && 'arrow' || 'none', "scroll-display-style": j.displayStyleFlat && 'flat' || '3d', "scroll-ratio": p(j.scrollRatio) || 1, "scroll-position": p(j.scrollPosition) || 0, "scroll-repaint": [c, d, e, f] });
    }, fn: { scroll: function (a) {
        var b = this,
            c = b._.scroller;return c.callback = a.scroll, c.scrollStart = a.scrollStart, c.scrollEnd = a.scrollEnd, b;
      }, remove: function () {
        var a,
            c = this,
            d = c._.scroller;for (a in c.attr('scroll-display-buttons', 'none'), d.track.unmouseup(d._mouseupTrack), d) d[a] && d[a].remove && d[a].remove(), d[a] = null;delete c._.scroller, b.el.remove.apply(c, arguments);
      } }, ca: { "stroke-width": function (a) {
        var b = this,
            c = b._.scroller,
            d = (0, _lib.pluckNumber)(a['stroke-width'], 1);return c.anchor.attr({ "stroke-width": d }), c.track.attr({ "stroke-width": d }), !1;
      }, "drop-shadow": function (a, b, c, d, e, f) {
        return this._.scroller.track.attr('drop-shadow', [a, b, c, d, e, f]), !1;
      }, "scroll-display-style": function (a) {
        var b = this,
            c = b.attrs,
            d = c['scroll-display-style'],
            e = c.fill;return a = { flat: 'flat', "3d": '3d', transparent: 'transparent' }[a] || d, e && a !== d && (c['scroll-display-style'] = a, b.attr('fill', e)), { "scroll-display-style": a };
      }, "scroll-display-buttons": function (a) {
        var d,
            e,
            f = this,
            g = f.paper,
            h = f._.scroller,
            i = f.attrs,
            j = i['scroll-display-buttons'],
            k = i['scroll-repaint'];return j === c && (j = 'none'), a = { none: 'none', arrow: 'arrow' }[a] || j, a !== j && (i['scroll-display-buttons'] = a, 'none' === a && h.start ? (h.arrowstart.remove(), delete h.arrowstart, h.arrowend.remove(), delete h.arrowend, h.start.unmouseup(h._mouseupStart), h.start.remove(), delete h.start, h.end.unmouseup(h._mouseupEnd), h.end.remove(), delete h.end) : (h.arrowstart = g.polypath(f), h.arrowend = g.polypath(f), h.start = g.rect(f).mousedown(function () {
          var a,
              e,
              g,
              j = () => {
            g = !0, e && h.scrollEnd && h.scrollEnd.call(f, f.attrs['scroll-position']);
          },
              k = () => {
            e = !0, g && h.scrollEnd && h.scrollEnd.call(f, f.attrs['scroll-position']);
          };0 === (a = i['scroll-position']) || (h.scrollStart && h.scrollStart.call(f, f.attrs['scroll-position']), f.animate({ "scroll-position": a - .1 }, 100, c, j).animate(d = b.animation({ "scroll-position": 0 }, 4500 * a, 'easeIn', k)), t('raphael.scroll.start.' + f.id, f, a));
        }).mouseup(h._mouseupStart = function () {
          f.stop(d, !0), t('raphael.scroll.end.' + f.id, f, i['scroll-position']);
        }, f, !0), h.end = g.rect(f).mousedown(function () {
          var a,
              d,
              g,
              j = () => {
            g = !0, d && h.scrollEnd && h.scrollEnd.call(f, f.attrs['scroll-position']);
          },
              k = () => {
            d = !0, g && h.scrollEnd && h.scrollEnd.call(f, f.attrs['scroll-position']);
          };1 === (a = i['scroll-position']) || (h.scrollStart && h.scrollStart.call(f, f.attrs['scroll-position']), f.animate({ "scroll-position": a + .1 }, 100, c, j).animate(e = b.animation({ "scroll-position": 1 }, 4500 * (1 - a), 'easeIn', k)), t('raphael.scroll.start.' + f.id, f, a));
        }).mouseup(h._mouseupEnd = function () {
          f.stop(e, !0), t('raphael.scroll.end.' + f.id, f, i['scroll-position']);
        }, f, !0), i.fill && f.attr('fill', i.fill)), k && f.attr('scroll-repaint', k)), { "scroll-display-buttons": a };
      }, "scroll-orientation": function (a) {
        var b = this,
            c = b.attrs,
            d = c['scroll-repaint'],
            e = c['scroll-orientation'];return a = { horizontal: 'horizontal', vertical: 'vertical' }[a] || e, e !== a && (b.ca['scroll-repaint'] = b.ca['scroll-repaint-' + a], d && (d[2] += d[3], d[3] = d[2] - d[3], d[2] -= d[3], b.attr('scroll-repaint', d)), c.fill && b.attr('fill', c.fill)), { "scroll-orientation": a };
      }, "scroll-ratio": function (a) {
        var b = this,
            c = b.attrs,
            d = c['scroll-ratio'],
            e = c['scroll-repaint'];return a = 1 < a ? 1 : .01 > a ? .01 : p(a), e && a !== d && (c['scroll-ratio'] = a, b.attr('scroll-repaint', e)), { "scroll-ratio": a };
      }, "scroll-position": function (a, b) {
        var c,
            d = this,
            e = d.attrs,
            f = 'horizontal' === e['scroll-orientation'],
            g = e['scroll-repaint'],
            h = e['scroll-position'],
            i = d._.scroller,
            j = i.anchor;return a = 1 < a ? 1 : 0 > a ? 0 : p(a), isNaN(a) && (a = h), g && (h !== a || b) && (c = i.start && i.start.attr(f && 'width' || 'height') || 0, f && j.attr('x', g[0] + c + (g[2] - 2 * c - j.attr('width')) * a + .5) || j.attr('y', g[1] + c + (g[3] - 2 * c - j.attr('height')) * a + .5), !b && 1 > e['scroll-ratio'] && (t('raphael.scroll.change.' + d.id, d, a), i.callback && i.callback.call(d, a))), { "scroll-position": a };
      }, r: function (a) {
        var b = this,
            c = b._.scroller;return c.track.attr('r', a), c.anchor.attr('r', 'none' === b.attrs['scroll-display-buttons'] && a || 0), !1;
      }, "scroll-repaint-horizontal": function (a, b, c, d) {
        var e = this,
            f = e.attrs,
            g = e._.scroller,
            i = f['scroll-ratio'],
            j = f['scroll-position'],
            k = 0,
            m = c * i,
            n = 'none' === f['scroll-display-buttons'];c && (c -= 1), a && (a += .5), d && (d -= 1), b && (b += .5), g.track.attr({ width: c, height: d, y: b, x: a }).crisp(), n || (k = l(d, .5 * c), m -= 2 * k * i, g.start.attr({ width: k, height: d, x: a, y: b }), g.arrowstart.attr('polypath', [3, a + .5 * k, b + .5 * d, .25 * k, 180]), g.end.attr({ width: k, height: d, x: a + c - k, y: b }), g.arrowend.attr('polypath', [3, a + c - .5 * k, b + .5 * k, .25 * k, 0])), g.trackLength = c - 2 * k - m, g.trackOffset = a + k + .5, g.anchorOffset = g.trackOffset + .5 * (m - 1), g.anchor.attr({ height: 1 > d ? 1 : d, width: 1 > m - 1 ? 1 : m - 1, y: b, x: g.trackOffset + g.trackLength * j }).crisp();
      }, "scroll-repaint-vertical": function (a, b, c, d) {
        var e = this,
            f = e.attrs,
            g = e._.scroller,
            i = f['scroll-ratio'],
            j = f['scroll-position'],
            k = 0,
            m = d * i,
            n = 'none' === f['scroll-display-buttons'];c && (c -= 1), a && (a += .5), d && (d -= 1), b && (b += .5), g.track.attr({ width: c, height: d, y: b, x: a }).crisp(), n || (k = l(c, .5 * d), m -= 2 * k * i, g.start.attr({ width: c, height: k, x: a, y: b }), g.arrowstart.attr('polypath', [3, a + .5 * c, b + .5 * k, .25 * k, 90]), g.end.attr({ width: c, height: k, x: a, y: b + d - k }), g.arrowend.attr('polypath', [3, a + .5 * c, b + d - .5 * k, .25 * k, -90])), g.trackLength = d - 2 * k - m, g.trackOffset = b + k + .5, g.anchorOffset = g.trackOffset + .5 * (m - 1), g.anchor.attr({ height: 1 > m - 1 ? 1 : m - 1, width: 1 > c ? 1 : c, y: g.trackOffset + g.trackLength * j, x: a }).crisp();
      }, fill: function (a) {
        var c,
            d = this,
            e = d.attrs,
            g = d._.scroller,
            h = e['scroll-repaint'],
            i = 'flat' === e['scroll-display-style'],
            j = 'horizontal' === e['scroll-orientation'],
            k = { stroke: 'none' };return f && h && 3 < (c = 16 - h[j && 3 || 2]) && (k.stroke = s, k['stroke-width'] = 0 > c ? 0 : c), a = b.color(a), a.error && (a = b.color('#000000')), a = 'opacity' in a ? 'rgba(' + [a.r, a.g, a.b, a.opacity] + ')' : 'rgb(' + [a.r, a.g, a.b] + ')', k.fill = i && a || [90 * j, b.tintshade(a, .15).rgba, a].join('-'), k.stroke = b.tintshade(a, -.75).rgba, g.track.attr(k), k.fill = i && b.tintshade(a, -.6).rgba || [270 * j, b.tintshade(a, .3).rgba + ':40', b.tintshade(a, -.7).rgba].join('-'), k.stroke = b.tintshade(a, -.6).rgba, g.anchor.attr(k), k.stroke = 'none', 'none' !== e['scroll-display-buttons'] && (k.fill = s, g.start.attr(k), g.end.attr(k), k.fill = b.tintshade(a, -.4).rgba, g.arrowstart.attr(k), g.arrowend.attr(k)), !1;
      } } }]), b.ca['text-bound'] = function (d, e, f, g, h, i, j) {
    var k = this,
        l = k.paper,
        m = k._.textbound;if (this._origOpacity = j === c ? 1 : j, 'text' === this.type) return (!e || 'none' === e || a.test(e)) && (!d || 'none' === d || a.test(d)) ? (k._.textbound = m && m.unfollow(k).remove(), !1) : (k.attrs['text-bound'] = arguments, f && b.is(f, 'finite') || (f = 0), h && b.is(h, 'finite') || (h = 0), m || (m = k._.textbound = l.rect(0, 0, 0, 0, k.group).follow(k, b.ca['text-bound'].reposition, 'before')), m.attr({ stroke: e || 'none', "stroke-width": f, fill: d || 'none', "shape-rendering": 1 === f && 'crisp' || '', r: h }), j !== c && m.attr('opacity', j), i && m.attr('stroke-dasharray', i), b.ca['text-bound'].reposition.call(m, k.attr(), k), !1);
  }, b.ca['text-bound'].reposition = function (a, b) {
    var d,
        e,
        f,
        g,
        i,
        j,
        k,
        l,
        m,
        n = Math.max,
        r = this,
        o = {};a.hasOwnProperty('visibility') && r.attr('visibility', a.visibility);(a.hasOwnProperty('text-bound') || a.hasOwnProperty('x') || a.hasOwnProperty('y') || a.hasOwnProperty('text') || a.hasOwnProperty('text-anchor') || a.hasOwnProperty('text-align') || a.hasOwnProperty('font-size') || a.hasOwnProperty('line-height') || a.hasOwnProperty('vertical-align') || a.hasOwnProperty('transform') || a.hasOwnProperty('rotation') || a.hasOwnProperty('opacity')) && (d = b.attrs, e = d['text-bound'], f = q(e && e[3] || '0').split(u), g = p(f[0]) || 0, i = (0, _lib.pluck)(p(f[1]), g), j = b.getBBox(), l = j.width, m = j.height, r._origOpacity === c && (r._origOpacity = 1), k = p(a.opacity || d.opacity), o.opacity = isNaN(k) ? r._origOpacity : r._origOpacity * k, !isNaN(l) && (o.x = j.x - g, o.y = j.y - i, o.width = n(l + 2 * g, 0), o.height = n(m + 2 * i, 0)), r.attr(o));
  }, b.fn.symbol = function () {
    var a,
        d = this,
        e = arguments,
        f = e.length - 1,
        g = e[f];return g && g.constructor === b.el.constructor ? e[f] = c : g = c, a = d.path(c, g), a.ca.symbol = b.fn.symbol.ca.symbol, e.length === !!g + 0 ? a : a.attr('symbol', e);
  }, b.fn.getSuggestiveRotation = function () {
    var a, b, c, d;return a = arguments[0], 1 === arguments.length ? (b = a.angle, c = a.x, d = a.y) : (b = a, c = arguments[1], d = arguments[2]), b = b || 0, 'r' + b + ',' + c + ',' + d;
  }, b.fn.symbol.cache = { "": b._cacher(function (a, b, c, d) {
      return 3 < arguments.length ? ['M', a, b, 'h', c, 'v', d, 'h', -c, 'v', -d, 'z'] : ['M', a - c, b - c, 'h', c *= 2, 'v', c, 'h', -c, 'v', -c, 'z'];
    }) }, b.fn.symbol.ca = { symbol: function (a) {
      var c,
          d,
          e = this,
          f = b.is(a, 'object') && 1 === arguments.length && !b.is(a, 'function') ? a : arguments;f === a && (a = f[0]), c = b.is(a, 'function') && a || b.fn.symbol.cache[a] || b.fn.symbol.cache[''], d = c && c.apply(b, r.call(f, 1)), b.is(d, 'array') || b.is(d, 'string') ? e.attr('path', d) : d && e.attr(d);
    } }, b.addSymbol = function (a, c) {
    var d,
        e,
        f = b.fn.symbol.cache,
        g = [];for (e in d = b.is(c, 'function') && (d = {}, d[a] = c, d) || a, d) c = d[e], f[e] = b.is(c, 'function') && b._cacher(c, b) || (g.push(e), c);for (e = g.pop(); e;) f[e] = f[f[e]], e = g.pop();
  };
};

var _lib = require('../lib/lib');
},{"../lib/lib":23}],82:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b,
      c = 'top',
      d = 'middle',
      e = 'bottom',
      f = 'left',
      g = 'right',
      h = function (a) {
    return function () {
      a.hide();for (let b = 0, c = a._.gridElem && a._.gridElem.length; b < c; b++) a._.gridElem[b].remove();a._.gridElem = [], a._attr({ src: a._._src }), setTimeout(() => {
        a.show();
      }, 100);
    };
  },
      i = function (a, c, d) {
    return function () {
      let e,
          f,
          g,
          h = j(a._.imageGridAttr, c),
          i = 1,
          k = 1,
          l = 1;if (h.tileInfo && (i = h.tileInfo.xCount, k = l = h.tileInfo.yCount, g = h.y, delete h.tileInfo), a._.gridElem) {
        for (f = 0; f < a._.gridElem.length; f++) a._.gridElem[f].remove();a._.gridElem.length = 0;
      }for (f = 0; i && h.width && h.height;) l--, 0 === f ? a.attr(d ? Object.assign(h, { applysrc: a._._src }) : h) : (e = a.clone().attr({ x: h.x, y: h.y }), a._.gridElem.push(e.follow(a, b, 'after'))), h.y += h.height, 0 === l && (l = k, i--, h.x += h.width, h.y = g), f++;
    };
  },
      j = function (a, b) {
    let c;if (a) {
      let { displayMode: d, vAlign: e, hAlign: f, scale: g, canvasBorderWidth: h, canvasWidth: i, canvasHeight: j } = a,
          k = b.width * (g / 100),
          l = b.height * (g / 100);c = (0, _imageAlignment.getAlignImage)(e, f, d, k, l, i, j, h, i - 2 * h, j - 2 * h);
    }return c || { x: 0, y: 0, width: b.width, height: b.height };
  };a.define && a.define([{ name: 'imagegrid', imagegrid: function () {
      let c,
          d,
          e = this,
          f = arguments,
          g = f.length - 1,
          j = f[g];return j && j.constructor === a.el.constructor ? f[g] = b : j = b, c = new Image(), d = e.image(j), d._.gridElem = [], d._.refImage = c, d._attr = d.attr, d.attr = function (a, c) {
        let e = Array.isArray(a),
            f = !e && 'object' == typeof a,
            g = 'string' == typeof a;if (e && (a = a[0], f = 'object' == typeof a), f) {
          let b = Object.assign({}, a),
              c = b && b.src,
              e = b && b.applysrc;delete b.src, delete b.applysrc, c && delete d._._src, d._attr(b), c && d._attr({ _src: c }), e && d._attr({ src: e });
        } else {
          if (a === b && c === b) return this.attrs;if (c === b) return this.attrs[a];g && c && ('src' === a ? d._attr({ _src: c }) : 'applysrc' === a ? d._attr({ src: c }) : d._attr({ name: c }));
        }return this;
      }, c.onload = i(d, c, !0), c.onerror = h(d), d;
    }, ca: { imagegrid: function (a, b, h, j = 100, k = 0, l = 0, m = 0) {
        let n = this;a === 'tile' || a === 'fill' || a === 'fit' ? (b !== c && b !== d && b !== e && (b = d), h !== f && h !== d && h !== g && (h = d)) : (b !== c && b !== d && b !== e && (b = c), h !== f && h !== d && h !== g && (h = f)), n._.imageGridAttr = { displayMode: a, vAlign: b, hAlign: h, scale: j, canvasBorderWidth: k, canvasWidth: l, canvasHeight: m }, this._._src && i(n, n._.refImage)();
      }, _src: function (a) {
        return this._.refImage.src = a, this._._src = a, { _src: a };
      } } }]);
};

var _imageAlignment = require('../misc/image-alignment');
},{"../misc/image-alignment":77}],83:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b,
      c,
      d,
      e,
      f = window,
      g = f.document,
      h = /msie/i.test(f.navigator.userAgent) && !f.opera,
      j = 'VML' === a.type,
      k = { cursor: 'cursor' },
      l = { x: 'left', y: 'top', strokeWidth: 'borderThickness', "stroke-width": 'borderThickness', width: 'width', height: 'height' },
      m = { fill: 'backgroundColor', stroke: 'borderColor', color: 'color' },
      i = { left: 0, top: 0, padding: 0, border: 'none', margin: 0, outline: 'none', "-webkit-apperance": 'none', position: 'absolute', zIndex: 20 },
      n = function (a) {
    return a && a.replace(/^#?([a-f0-9]+)/ig, '#$1') || 'none';
  },
      o = function (a, b, c, d) {
    var e,
        f = g.createElement(a);for (e in b) l[e] ? f.style[e] = b[e] : f.setAttribute(e, b[e]);for (e in c) f.style[e] = c[e];return d && d.appendChild && d.appendChild(f), f;
  },
      p = function (a) {
    d || (d = o('div')), a && d.appendChild(a), d.innerHTML = '';
  },
      q = function (a, c, d) {
    var e, f;if ('string' == typeof c) d !== b && null !== d ? a.setAttribute(c, d) : a && a.getAttribute && (f = a.getAttribute(c));else if (c !== b && null !== c && 'object' == typeof c) for (e in c) a.setAttribute(e, c[e]);return f;
  };e = function (a, b, c) {
    var d = this;b && b instanceof e && (b = b.element), d.element = o(a, c, i, b), d.nodeName = a.toLowerCase(), d.added = !!b, d.attrs = {};
  }, c = e.prototype = { attr: function (a) {
      var c,
          d,
          e,
          f,
          o,
          p,
          r,
          s,
          t,
          u,
          v = this,
          w = v.element,
          x = {};if ('object' != typeof a) return v[a] === b ? q(w, a) : v[a];for (c in a) {
        if (e = a[c], k[c]) 'cursor' === c ? 'pointer' === e && j && (e = 'hand') : void 0, w.style[k[c]] = e, f = !0;else if (l[c]) w.style[l[c]] = e + 'px', f = !0;else if (m[c]) w.style[m[c]] = n(e), f = !0;else if (/^visibility$/i.test(c)) o = 'hidden' === e, w.style.display = o ? 'none' : '', v.hidden = o, f = !0;else if (/^opacity$/i.test(c)) w.style.opacity = e, h && (d = 100 * +e, w.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + d + ')'), f = !0;else if (/^innerhtml$/i.test(c)) {
          if (j && 'select' == w.nodeName.toLowerCase()) {
            for (p = e.match(/<option\s?[\s\S]*?(\/>|><\/option>|>[\s\S]*?<\/option>)/ig); w.firstChild;) w.removeChild(w.firstChild);for (s = 0, t = p.length; s < t; s += 1) r = p[s], u = g.createElement('option'), /<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/ig.test(r) && (u.value = r.replace(/<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/ig, '$1').replace(/[\s\S]*value\s*\=\s*[\'\"]([\s\S]*)[\'\"]/, '$1')), u.text = r.replace(/<option\s*[\s\S]*[\'\"]?\s*?[\/>|\>]([\s\S]*)<\/option>/ig, '$1 '), w.options.add(u);
          } else 'input' !== w.nodeName.toLowerCase() && e !== b && (w.innerHTML = e || '');f = !0;
        } else /^text$/i.test(c) ? ('input' !== w.nodeName.toLowerCase() && (w.innerHTML = '', e !== b && w.appendChild(g.createTextNode(e))), f = !0) : /^type$/i.test(c) && h && v.added && (f = !0);f && (x[c] = e, delete a[c], f = !1);
      }for (c in a) w.setAttribute(c, a[c]);for (c in x) v[c] = v.attrs[c] = a[c] = x[c], delete x[c];return this;
    }, val: function (a) {
      var c = this,
          d = c.element,
          e = a === b;if ('input' === c.nodeName && 'checkbox' === d.getAttribute('type')) return e ? c.checked() ? 1 : 0 : c.checked(a);if ('select' === c.nodeName) {
        let b = d.childNodes,
            f = d.selectedIndex,
            g = b.length;if ('' === a) return;if (!e) for (let c = 0; c < g; c++) if (b[c].value === a) return d.selectedIndex = c, b[c].value;return _lib.isIE9 && (f = 0), e ? b[f].value : (b[g - 1].value = a, d.selectedIndex = g - 1, c);
      }return e ? d.value : (d.value = a, c);
    }, checked: function (a) {
      var c = this,
          d = c.element;return a === b ? d.checked : (a ? d.setAttribute('checked', 'checked') : d.removeAttribute('checked'), c);
    }, css: function (a, c) {
      var d,
          e = this,
          f = e.element,
          g = f.style;if ('object' == typeof a) for (d in a) g[d] = a[d];else d && c !== b && (g[d] = c);return e;
    }, translate: function (a, c) {
      var d = this,
          e = d.element;return a !== b && (e.style.left = a + 'px'), c !== b && (e.style.top = c + 'px'), d;
    }, add: function (a, b) {
      var c = this,
          d = this.element,
          e = a.element;return b ? e.insertBefore(d, e.firstChild) : e.appendChild(d), c.added = !0, c;
    }, hide: function () {
      return this.element.style.display = 'none', this;
    }, show: function () {
      return this.element.style.display = '', this;
    }, isVisible: function () {
      return 'none' !== this.element.style.display;
    }, focus: function () {
      'function' == typeof this.element.focus ? this.element.focus() : _domEvent2.default.fire(this.element, 'focus');
    }, destroy: function () {
      var a = this,
          b = a.element || {};return b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.onblur = b.onfocus = null, b = p(b), delete a.element, null;
    }, on: j ? function (a, b) {
      var c = this;return c.element['on' + a] = function () {
        var a = f.event;a.target = a.srcElement, b(a);
      }, c;
    } : function (a, b) {
      var c = b,
          d = this;return _lib.hasTouch && 'click' === a && (a = 'touchstart', c = function (a) {
        a.preventDefault(), b();
      }), d.element['on' + a] = c, d;
    }, bind: function (a, b, c) {
      return _domEvent2.default.listen(this.element, a, b, c), this;
    }, unbind: function (a, b) {
      return _domEvent2.default.unlisten(this.element, a, b), this;
    }, trigger: function (a, b) {
      return _domEvent2.default.fire(this.element, a, b), this;
    } }, c.remove = c.destroy, c.constructor = e, a.fn.html = function (b, c, d, f) {
    var g,
        h,
        i = {};for (h in c && 'type' in c && (i.type = c.type, delete c.type), g = new e(b, f, i).css(d).attr(c), i) c[h] = i[h];return g.ca = function () {
      return !1;
    }, g.appendTo = function (a) {
      a && a instanceof e && (a = a.element), a.appendChild(this.element);
    }, g.animateWith = a.el.animateWith, g;
  };
};

var _domEvent = require('../dom/dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../dom/dom-event":76,"../lib/lib":23}],84:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b = [{ reg: /xmlns\=\"http\:\/\/www.w3.org\/2000\/svg\"/ig, repStr: '' }, { reg: /^.*<svg /, repStr: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" ' }, { reg: /\/svg>.*$/, repStr: '/svg>' }, { reg: /<desc\>[^<]*<\/desc\>/, repStr: '' }, { reg: /zIndex="[^"]+"/g, repStr: '' }, { reg: /url\((\\?[\'\"])[^#]+#/g, repStr: 'url($1#' }, { reg: / href=/g, repStr: ' xlink:href=' }, { reg: /(id|class|width|height)=([^" >]+)/g, repStr: '$1="$2"' }, { reg: /:(path|rect)/g, repStr: '$1' }, { reg: /<ima?ge? ([^\>]+?[^\/])\>/gi, repStr: '<image $1 />' }, { reg: /<\/ima?ge?\>/g, repStr: '' }, { reg: /style="([^"]+)"/g, repStr: function (a) {
      return a.toLowerCase();
    } }],
      c = function (a) {
    var b = JSON.stringify(a);return b = b.replace(/([a-z]+)([A-Z]+)([a-z]+)/g, function (a, b, c, d) {
      return b + '-' + c.toLowerCase() + d;
    }), b = b.replace(/\"\,\"/g, '";"'), b = b.replace(/\"/g, ' '), b = b = b.replace(/\{|\}/g, ''), b;
  },
      d = function (a, b) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = function (a) {
      return a = a.match(/style\s*=/) ? a.replace(/(style\s*=")([^"]+)/g, function (a, b, c) {
        return b + g + c;
      }) : a.replace(/class\s*="[^"]*"/i, function (a) {
        return a + ' style="' + g + '" ';
      }), a;
    };for (d in b) if (b.hasOwnProperty(d)) for (i in e = /\s+/, f = d.split(e), g = c(b[d]), f) f.hasOwnProperty(i) && (h = f[i].trim().replace('.', ''), j = new RegExp('<[^>]+(' + h + ')[^>]+', 'g'), a = a.replace(j, k));return a;
  };a.svg && (a.fn.toSVG = function (a) {
    var c,
        e = this,
        f = '',
        g = 0,
        h = b.length;if (e.canvas && e.canvas.parentNode) {
      for (f = e.canvas.parentNode.innerHTML; g < h; g += 1) c = b[g], f = f.replace(c.reg, c.repStr);e._stylesheet && e._stylesheet.rules && (f = d(f, e._stylesheet.rules));
    }return a || (f = f.replace(/<image[^\>]*\>/gi, function (a) {
      return a.match(/href=\"data\:image/i) ? a : '';
    })), f;
  });
};
},{}],35:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schedular = require('../schedular');

var _schedular2 = _interopRequireDefault(_schedular);

var _redraphael = require('./redraphael.css');

var _redraphael2 = _interopRequireDefault(_redraphael);

var _redraphael3 = require('./redraphael.shadow');

var _redraphael4 = _interopRequireDefault(_redraphael3);

var _redraphael5 = require('./redraphael.shapes');

var _redraphael6 = _interopRequireDefault(_redraphael5);

var _redraphael7 = require('./redraphael.imagegrid');

var _redraphael8 = _interopRequireDefault(_redraphael7);

var _redraphael9 = require('./redraphael.html');

var _redraphael10 = _interopRequireDefault(_redraphael9);

var _redraphael11 = require('./redraphael.export');

var _redraphael12 = _interopRequireDefault(_redraphael11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let OneInaframeOption = { oneInAFrame: !0 };exports.default = { extension: function (a) {
    var b = a.getDep('redraphael', 'plugin'),
        c = {};b.fn._elementFromEvent = function (a) {
      if (!a || this.removed) return null;var b = a.srcElement || a.target || (a = a.originalEvent) && (a.srcElement || a.target) || c;return 'tspan' === b.nodeName && (b = b.parentNode), this.getById(b.raphaelid);
    }, b.requestAnimFrame = _schedular2.default.addJob && function (a) {
      _schedular2.default.addJob(a, _schedular.priorityList.animation, OneInaframeOption);
    }, b.instantRequestAnimFrame = _schedular2.default.addJob && function (a) {
      _schedular2.default.addJob(a, _schedular.priorityList.instant);
    }, (0, _redraphael12.default)(b), (0, _redraphael2.default)(b), (0, _redraphael4.default)(b), (0, _redraphael6.default)(b), (0, _redraphael8.default)(b), (0, _redraphael10.default)(b);
  }, name: 'redraphaelExt', type: 'plugin', requiresFusionCharts: !0 };
},{"../schedular":21,"./redraphael.css":79,"./redraphael.shadow":80,"./redraphael.shapes":81,"./redraphael.imagegrid":82,"./redraphael.html":83,"./redraphael.export":84}],66:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    BACKGROUNDLOADERROR = 'backgroundloaderror',
    BACKGROUNDLOADED = 'backgroundloaded',
    NONE = _lib.preDefStr.noneStr;class ChartMessage extends _componentInterface2.default {
  getName() {
    return 'chartMessage';
  }_drawBackground(a, b = {}) {
    var c,
        d,
        e,
        f,
        g = this,
        h = g.config,
        i = g.getFromEnv('paper'),
        j = g.getFromEnv('chart'),
        k = g.getGraphicalElement('backgroundElement'),
        l = g.getGraphicalElement('backgroundImage'),
        m = g.getFromEnv('chartWidth'),
        n = g.getFromEnv('chartHeight'),
        o = g.getLinkedParent().getChildContainer('messageGroup').show(),
        p = (0, _lib.pluckNumber)(b.imageAlpha, 100),
        q = (0, _lib.getValidValue)(b.imageVAlign, _lib.BLANKSTRING).toLowerCase(),
        r = (0, _lib.pluck)(b.imageHAlign, _lib.BLANKSTRING).toLowerCase(),
        s = (0, _lib.pluckNumber)(b.imageScale, 100),
        t = g.getFromEnv('chartInstance'),
        u = (0, _lib.getContainerBackgroundColor)(t);i.canvas.style.backgroundColor = u, q !== _lib.POSITION_TOP && q !== _lib.POSITION_MIDDLE && q !== _lib.POSITION_BOTTOM && (q = _lib.POSITION_TOP), r !== _lib.POSITION_LEFT && r !== _lib.POSITION_MIDDLE && r !== _lib.POSITION_RIGHT && (r = _lib.POSITION_LEFT), d = { x: 0, y: 0, width: m, height: n, stroke: NONE }, k || (k = i.rect(o), g.addGraphicalElement('backgroundElement', k)), k.attr(d), h.bgImageVAlign = q, h.bgImageHAlign = r, h.bgImageScale = s, h.bgSWFAlpha = p, h.imgClipRect = 0 + _lib.COMMA + 0 + _lib.COMMA + m + _lib.COMMA + n, a && ((c = l) ? c.attr({ src: a }) : (c = g.getFromEnv('paper').image(o), g.addGraphicalElement('backgroundImage', c), c.attr({ src: a }), c.on('load', function () {
      if (!(!c || c && c.removed)) {
        let b = c._.RefImg;e = g.getFromEnv('chartConfig'), h.isImage && (e === UNDEF || e.hasChartMessage) && (f = (0, _lib.setImageDisplayMode)(NONE, h.bgImageVAlign, h.bgImageHAlign, h.bgImageScale, 0, g.getFromEnv('chartWidth'), g.getFromEnv('chartHeight'), b), (0, _lib.extend2)(f, { opacity: .01 * h.bgSWFAlpha, visibility: 'visible', "clip-rect": h.imgClipRect }), c.attr(f).show(), j.fireChartInstanceEvent(BACKGROUNDLOADED, { url: a, bgImageAlpha: 100 * h.bgSWFAlpha, bgImageDisplayMode: NONE, bgImageVAlign: h.bgImageVAlign, bgImageHAlign: h.bgImageHAlign, bgImageScale: h.bgImageScale, imageWidth: b.width, imageHeight: b.height }));
      }
    }), c.on('error', function (b) {
      c.removed || j.fireChartInstanceEvent(BACKGROUNDLOADERROR, { url: a, bgImageAlpha: 100 * h.bgSWFAlpha, error: b, bgImageDisplayMode: NONE, bgImageVAlign: h.bgImageVAlign, bgImageHAlign: h.bgImageHAlign, bgImageScale: h.bgImageScale }, t);
    })));
  }setChartMessage(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = this,
        i = h.getFromEnv('chartInstance'),
        j = i.options,
        k = i.args,
        l = h.config,
        m = h.getFromEnv('smartLabel'),
        n = (0, _lib.getImageURL)('undefined' == typeof a ? j.dataEmptyMessage : a),
        o = h.getFromEnv('chartWidth'),
        p = h.getFromEnv('chartHeight');d = l.width = +o, c = l.height = +p, n.image ? (e = n.string, g = b ? { imageHAlign: (0, _lib.pluck)(b._chartMessageImageStyle.imageHAlign, j.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(b._chartMessageImageStyle.imageVAlign, j.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(b._chartMessageImageStyle.imageAlpha, j.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(b._chartMessageImageStyle.imageScale, j.baseChartMessageImageScale) } : { imageHAlign: (0, _lib.pluck)(k.dataEmptyMessageImageHAlign, j.baseChartMessageImageHAlign).toLowerCase(), imageVAlign: (0, _lib.pluck)(k.dataEmptyMessageImageVAlign, j.baseChartMessageImageVAlign).toLowerCase(), imageAlpha: (0, _lib.pluckNumber)(k.dataEmptyMessageImageAlpha, j.baseChartMessageImageAlpha), imageScale: (0, _lib.pluckNumber)(k.dataEmptyMessageImageScale, j.baseChartMessageImageScale) }, l.chartMessageType = 'image') : (g = b ? { "font-family": b._chartMessageStyle.fontFamily || j.baseChartMessageFont, "font-size": b._chartMessageStyle.fontSize || j.baseChartMessageFontSize, fill: b._chartMessageStyle.color || j.baseChartMessageColor } : { "font-family": k.dataEmptyMessageFont || j.baseChartMessageFont, "font-size": k.dataEmptyMessageFontSize || j.baseChartMessageFontSize, fill: k.dataEmptyMessageColor || j.baseChartMessageColor }, m.setStyle(g), f = m.getSmartText((0, _lib.parseUnsafeString)(n.string), d, c), e = { text: f.text, x: d / 2, y: c / 2 }, l.chartMessageType = 'text'), l.chartMessageAttr = e, l.chartMessageStyle = g;
  }drawChartMessage() {
    var a,
        b,
        c,
        d = this,
        e = d.config,
        f = d.getFromEnv('paper'),
        g = e.isImage = 'image' === e.chartMessageType,
        h = g ? e.chartMessageAttr : (0, _lib.extend2)(e.chartMessageAttr, e.chartMessageStyle);a = d.getGraphicalElement('messageText'), c = d._graphics, b = d.getLinkedParent().getChildContainer('messageGroup').show(), g ? d._drawBackground(e.chartMessageAttr, e.chartMessageStyle) : a || 'text' !== e.chartMessageType ? (c.message = a.attr(h), a.show()) : a = d.addGraphicalElement('messageText', f.text(h, b)), d._hideOtherMessage(g);
  }_hideOtherMessage(a) {
    var b,
        c,
        d,
        e = this;a ? (c = e.getGraphicalElement('messageText'), c && c.hide()) : (b = e.getGraphicalElement('backgroundImage'), d = e.getGraphicalElement('backgroundElement'), b && b.hide(), d && d.hide());
  }_hideChartMessage() {
    this._hideOtherMessage(!0), this._hideOtherMessage();
  }getType() {
    return 'chartMessage';
  }
}exports.default = ChartMessage;
},{"../../core/component-interface":65,"../lib/lib":23}],67:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _schedular = require('../schedular');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _dependencyManager = require('../dependency-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    isIE8 = !_lib.hasSVG,
    OBJECT = 'object',
    CHART = 'chart',
    GROUP = 'group',
    HTML = 'html',
    TEXT = 'text',
    PAPER = 'paper',
    DISAPPEARING = 'disappearing',
    APPEARING = 'appearing',
    STRING = 'string',
    UPDATING = 'updating',
    FUNCTION = 'function',
    LINEAR = 'linear',
    CHARTSPECIFIC = 'chartSpecific',
    GLOBAL = 'global',
    DEFAULT = 'default',
    STARSTRING = '*',
    durationList = { initial: 1, update: 0, realTimeUpdate: 0, resize: 0, dispose: 0, legendInteraction: 0, scroll: 0, mouseOut: 0, mouseOver: 0, default: 0, slicing: .25 },
    rulePriorityList = ['default', 'global', 'chartSpecific'],
    animMap = { fadeIn: { opacity: { start: 0, end: 1 } }, fadeOut: { opacity: { start: 1, end: 0 } } },
    callbackMap = { fadeIn: function () {
    this && this.show();
  }, fadeOut: function () {
    this && this.hide();
  } },
    isNull = a => null === a,
    getRegisteredThemes = a => {
  let b,
      c = {};for (var d in a) a.hasOwnProperty(d) && (b = a[d], c[b.name] = b);return c;
},
    fetchRulesFromTheme = (a, b = '') => {
  let c = b.split(','),
      d = [];return c.forEach(b => {
    a[b] && a[b].animation && d.push(a[b].animation);
  }), d;
},
    shiftAnimTime = function (a, b, c) {
  var d,
      e = Math.round,
      f = Object.assign({}, a),
      g = c / b,
      h = .2;return g > h && (g = h), d = f.end - f.start, f.start *= 1 - g, f.start += g, f.end = f.start + (1 - g) * d, f.start = e(100 * f.start) / 100, f.end = e(100 * f.end) / 100, f;
},
    _applyAnim = function (a, b, c) {
  var d,
      e = animMap[b],
      f = '',
      g = {};if (e && a && a.el && a.el[0]) {
    for (f in e) g[f] = a.el.attrs[f], g[f] === UNDEF && (g[f] = null), a.attrs[f] = e[f].end, a.el.attr(f, e[f].start);d = a.callback, a.callback = function () {
      c && callbackMap[b] && callbackMap[b].call(this), d && d.call && d.call(this), this.attr(g);
    };
  }
},
    applyType = function (a, b) {
  var c,
      d = !0;if (b) {
    for (a.attrs = a.attrs || {}, b = b.split('-'), ~b.indexOf('nc') && (d = !1), c = b.length; c--;) _applyAnim(a, b[c], d);return a;
  }
},
    animateEl = function (a, b, c, d, e, f, g, h) {
  a.animateWith(e, f, b, g, h, c, d);
},
    execPreAnimFns = function (a) {
  var b = 0,
      c = a.length;for (b = 0; b < c; ++b) a[b].fn && a[b].fn.call(a[b].el);
},
    ruleReducer = function (a) {
  let b = {};for (let c in a) if (a.hasOwnProperty(c) && '__esModule' !== c) {
    let d = a[c];merge(b, d);
  }return b;
},
    merge = (a, b) => {
  for (let c in b) b.hasOwnProperty(c) && (a[c] || (a[c] = []), a[c].push(b[c]));
},
    isFunction = a => typeof a == FUNCTION;animMap.fadein = animMap.fadeIn, animMap.fadeout = animMap.fadeOut;class AnimationManager extends _componentInterface2.default {
  getType() {
    return 'animationManager';
  }constructor() {
    super();var a = this;a._removedGraphics = [], a._animCallBack = function () {
      if (!a.getState('removed') && !this.removed) {
        let b = a.getAnimationState();a._removeElems(), a.reset(), a.fireEvent('animationComplete', { currAnimState: b });
      }
    }, a.startAnimation = () => {
      a.kickStart(), a.animate('draw');
    };
  }getName() {
    return 'animationManager';
  }stopAnimation() {
    if (this.getState('chartAnimating')) {
      var a,
          b = this,
          c = b.config,
          d = c.animationObj,
          e = d && d.duration;e ? (a = b.getGraphicalElement().dummyObj, a && a.stop(UNDEF, !0, !0)) : 0 === e && (b.removeJob('anim-callBack'), b._animCallBack());
    }
  }kickStart() {
    let a,
        b,
        c,
        d = this,
        e = d.config,
        f = d.getGraphicalElement(),
        g = d.getFromEnv(PAPER),
        h = e.animationObj,
        i = e.animationeffect;b = h.duration, h.animObj = c = (0, _dependencyManager.getDep)('redraphael', 'plugin').animation({ x: 0 }, b, i, d._animCallBack, !0), h.animType = i, (a = f.dummyObj) ? a.attr({ x: 100 }) : (a = g.rect({ x: 100, y: 0, width: 10, height: 30 }), d.addGraphicalElement('dummyObj', a), a.hide()), h.dummyObj = f.dummyObj, a.stop(UNDEF, !0, !0), d.fireEvent('animationStart'), d.setState('chartAnimating', !0), a.animate(c);
  }setAnimationState(a = UNDEF) {
    a && this.stopAnimation(), this.config.__state = a, this._setAnimDuration(a);
  }getAnimationState() {
    return this.config && this.config.__state;
  }_setAnimDuration(a = DEFAULT) {
    var b = this,
        c = b.config,
        d = c.animationObj || (c.animationObj = {}),
        e = c.animationDuration || (c.animationDuration = {}),
        f = b.getFromEnv(CHART).getFromEnv('chart-attrib') || {},
        g = a + 'AnimDuration',
        h = c.killSwitch,
        i = h ? 0 : 1e3 * (e[g] || f[g.toLowerCase()] || AnimationManager.getFallbackAnimDuration(a));d && (d[g] = i, d.duration = +i);
  }configureAttributes() {
    var a = this,
        b = a.getFromEnv(CHART),
        c = b.config,
        d = a.config,
        e = b.getFromEnv('chart-attrib') || {};d.killSwitch = !(0, _lib.pluckNumber)(e.animation, c.animation, 1), d.animationeffect = c.animationeffect || 'linear', a.invokeAnimationRules(), d.workingRules || (d.workingRules = {}), d.animateArr || (d.animateArr = []), d.animationName || (d.animationName = []);
  }invokeAnimationRules() {
    let a,
        b = this,
        c = b.getFromEnv(CHART),
        d = c.getFromEnv('chart-attrib') || {},
        e = c.config || {},
        f = b.config,
        g = c.getFromEnv('chartInstance'),
        h = g.args.animation,
        i = c.getFromEnv('core-options').defaultTheme,
        j = getRegisteredThemes((0, _dependencyManager.getDepsByType)('theme')),
        k = (c.getFromEnv('core-options')._globalAnimationRule || []).concat(fetchRulesFromTheme(j, i)),
        l = (h && [h] || []).concat(fetchRulesFromTheme(j, e.theme));f.animationRules = { global: ruleReducer(k.map(a => a && a.rule).filter(a => a)), chartSpecific: ruleReducer(l.map(a => a && a.rule).filter(a => a)), default: ruleReducer((0, _dependencyManager.getDepsByType)('animationRule')) }, f.animationDuration = a = {}, k.map(b => Object.assign(a, b.duration)), l.map(b => Object.assign(a, b.duration)), a.initialAnimDuration = (0, _lib.pluckNumber)(a.initialAnimDuration, d.initialanimduration, d.animationduration), b.config.slots = AnimationManager.getFallbackAnimTimeSlots().concat([].concat.apply([], k.map(a => a.slots)).filter(a => a)).concat([].concat.apply([], l.map(a => a.slots)).filter(a => a));
  }reInitialize() {
    var a = this,
        b = a.config,
        c = b.animationObj,
        d = c.duration;a.setState('initialized', !0), d ? a.addJob('start-animation', a.startAnimation, _schedular.priorityList.animation) : (a.fireEvent('animationStart'), a.setState('chartAnimating', !0), a.addJob('anim-callBack', a._animCallBack, _schedular.priorityList.animation));
  }reset() {
    var a = this;a.setState('initialized', !1), a.config && a.config.animateArr && (a.config.animateArr.length = 0), a.setState('chartAnimating', !1), a.setAnimationState();
  }registerAnimObj(a) {
    for (var b in a) this.registerAnimation(a[b], b);
  }getFinalSlots() {
    var a,
        b,
        c,
        d,
        e = this,
        f = e.config,
        g = f.slots,
        h = f.workingRules = {},
        k = f.animationName;return a = function (b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          l = !1;if (!b) return !1;for (e = 0, f = b.length; e < f; e += 1) if (d = b[e], !Array.isArray(d)) c = !1, -1 === k.indexOf(d.name) ? d.child && (c = d.hasAnimation = a(d.child)) : c = !0, l = l || c, d.hasAnimation = c;else for (g = 0, h = b[e].length; g < h; g += 1) d = b[e][g], c = !1, -1 === k.indexOf(d.name) ? d.child && (c = d.hasAnimation = a(d.child)) : c = !0, l = l || c, d.hasAnimation = c;return l;
    }, b = function (a, b, c) {
      var f,
          g,
          j,
          k,
          l,
          m = a.length,
          n = 0,
          o = 0,
          p = b;for (g = 0, j = 0, l = 0; l < m; l += 1) f = a[l], f.hasAnimation || !1 === f.collapsible ? j += 1 : g += f.duration, o += f.duration;for (g /= j, l = 0; l < m; l += 1) (f = a[l], !!f.hasAnimation) && (n = p, k = c - b, p = n + (f.duration / o + g) * k, h[f.name] = { start: n, end: p, effect: f.effect, transition: f.transition }, f.child && d(f.child, n, p));
    }, c = function (a, b, c) {
      var f, g, i;g = a.start, i = a.end, f = c - b, g = b + g * f, i = b + i * f, h[a.name] = { start: g, end: i, effect: a.effect, transition: a.transition }, a.child && d(a.child, g, i);
    }, d = function (a, d, e) {
      var f,
          g,
          h = a.length;for (f = 0; f < h; f++) g = a[f], Array.isArray(g) ? b(g, d, e) : c(g, d, e);
    }, a(g), d(g, 0, 1), h['default'] = { start: 0, end: 1 }, h;
  }registerOne(a, b) {
    this.registerAnimation([{ data: [a] }], b);
  }registerAnimation(a = [], b) {
    var c,
        d,
        e,
        f = !1;for (c = 0, e = a.length; c < e; c += 1) d = a[c], d.data && d.data.length && (this.config.animateArr.push((d.component = b, d)), f = !0);f && this.config.animationName.push(b), this.getState('initialized') || this.reInitialize();
  }onAnimationComplete(a) {
    var b = this;b.addEventListener('animationComplete', function (b) {
      a(), b.detachHandler();
    });
  }static removeOpacityFromGroup(a, b) {
    b && isIE8 && (a === GROUP || a.type === GROUP) && delete b.opacity;
  }setAnimation(a = {}) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = this,
        r = q.config,
        s = r.animationObj,
        t = a.el,
        u = a.attr || {},
        v = {},
        w = {},
        x = function (b, c, d, e) {
      return function () {
        d.callback && d.callback.call(this), b && this.attr(b), c && a.callback && a.callback.call(this), e && this.appendTo(e);
      };
    },
        y = function (a, b, c) {
      return function () {
        b.hookFn && b.hookFn.call(this), a && this.attr(a), c && this.appendTo(c);
      };
    },
        z = [],
        A = s.duration,
        B = typeof t == OBJECT && a.container && t.parent !== a.container;if (A && (k = q.getAnimAttributes(a))) {
      for (j = k.length, p = !1, l = a.state === APPEARING || typeof t == STRING, m = !l && t.attrs, h = {}, g = 0; g < j; g++) {
        for (e in n = g === j - 1, f = z[g] = {}, o = k[g], b = o.finalAttr, c = o.initialAttr, AnimationManager.removeOpacityFromGroup(a.el, c), AnimationManager.removeOpacityFromGroup(a.el, b), c) h[e] = c[e], w[e] === UNDEF && (w[e] = c[e]);for (e in b) h[e] = b[e], l && w[e] === UNDEF && (w[e] = b[e]);if (f.attrs = b, f.transition = o.transition, f.effect = o.effect, f.animConfig = [o.startEnd], o.callback && (f.callback = o.callback), (p = B && o.changeGroup) && (B = !1), n) {
          if (l) for (e in u) w[e] === UNDEF && (w[e] = u[e]);for (e in u) d = u[e], (h[e] || !l) && h[e] !== d && (b && b[e] === UNDEF ? b[e] = d : v[e] = d);for (e in h) v[e] === UNDEF && (d = u[e] || m[e] || '', h[e] !== d && (b && b[e] === UNDEF && d !== UNDEF ? b[e] = d : v[e] = d));b || (f.attrs = v), f.callback = x((b || c) && v, n, o, B && a.container), t = q.setAttributes(t, { attr: w, inputJSON: a });
        }(c || o.hookFn || p) && (f.animConfig[0].hookFn = y((!l || g) && c, o, p && a.container));
      }for (g = 0; g < j; g++) z[g].el = t.el, q.registerAnimation([{ data: [z[g]] }], k[g].slot);
    } else q.registerAnimation(), t = q.setAttributes(t, { attr: u, inputJSON: a, groupChangeReq: B, immediate: !0 });return t.removed ? null : t.el;
  }_removeElems() {
    if (this.getFromEnv(PAPER) && !this.getFromEnv(PAPER).removed) {
      let a = this;a._removedGraphics.forEach(a => a.remove && a.remove()), a._removedGraphics.length = 0;
    }
  }removeElement(a, b) {
    let c = this;return b ? a.remove() : c._removedGraphics.push(a), null;
  }static _ruleSelectorQueryBuilder(a, b = !0) {
    let { label: c, state: d, component: e } = a,
        f = e.getType(),
        g = e.getName();if (b) {
      let a = ['*', '*.*', '*.*.*'],
          b = [`*.*.${g}`, `*.${f}.*`, `*.${f}.${g}`];return '*' === d ? a.concat(b) : a.concat(b, [`${d}.*`, `${d}.*.*`, `${d}.*.${g}`, `${d}.${f}.*`, `${d}.${f}.${g}`]);
    }return [`${c}.${d}`, `${c}.*`, `*.${d}`, '*.*', '*'];
  }_getRulesByState(a) {
    let b,
        c,
        d,
        e,
        f = this,
        g = a.component,
        h = f.getAnimationState() || STARSTRING,
        i = AnimationManager._ruleSelectorQueryBuilder(Object.assign(a, { state: h }));return e = g.getState('animRules') || {}, (b = e[h]) ? b : (c = e[h] = {}, d = f.config.animationRules, rulePriorityList.forEach(a => {
      let b = d[a];b && i.forEach(a => {
        b[a] && (Array.isArray(b[a]) ? b[a].forEach(a => {
          c = e[h] = isNull(a) ? null : Object.assign(c || {}, isFunction(a) ? a.call(g) : a);
        }) : c = e[h] = isNull(b[a]) ? null : Object.assign(c || {}, isFunction(b[a]) ? b[a].call(g) : b[a]));
      });
    }), g.setState('animRules', e), g.getState('ruleFlushAttached') || g.addExtEventListener('beforedraw', () => {
      g.setState('animRules', UNDEF), g.setState('ruleFlushAttached', !0);
    }, g.getFromEnv(CHART)), c);
  }static _getRulesByElement(a, b) {
    let c,
        d = AnimationManager._ruleSelectorQueryBuilder(b, !1);return d.forEach(b => {
      c || (c = a[b]);
    }), c;
  }getAnimAttributes(a) {
    let b,
        c,
        d,
        e,
        f,
        g = this,
        h = a.component || g.getFromEnv(CHART),
        j = a.label || ('object' == typeof a.el ? a.el.type : a.el),
        k = a.state,
        l = g._getRulesByState({ label: j, component: h }),
        m = [];if (!isNull(l) && (k || (k = typeof a.el == STRING ? APPEARING : a.attr ? UPDATING : DISAPPEARING), b = AnimationManager._getRulesByElement(l, { component: h, state: k, label: j }), !isNull(b))) {
      if (!b) return AnimationManager.getFallbackAnimRule(a);for (isFunction(b) && (b = b.call(h, a)), f = b.length, e = 0; e < f; e++) c = b[e], d = {}, c.initialAttr && (d.initialAttr = isFunction(c.initialAttr) ? c.initialAttr.call(h, a) : Object.assign({}, c.initialAttr)), c.finalAttr && (d.finalAttr = isFunction(c.finalAttr) ? c.finalAttr.call(h, a) : Object.assign({}, c.finalAttr)), d.startEnd = isFunction(c.startEnd) ? c.startEnd.call(h, a) : c.startEnd ? Object.assign({}, c.startEnd) : { start: 0, end: 1 }, d.slot = c.slot || 'default', d.callback = c.callback, d.hookFn = c.hookFn, d.transition = c.transition, d.effect = c.effect || 'linear', c.groupChange && (d.groupChange = !0), m.push(d);return m;
    }
  }static getFallbackAnimRule(a) {
    if (!(a.state === APPEARING || typeof a.el == STRING)) {
      if (a.state === UPDATING || a.attr) return [{ startEnd: { start: 0, end: 1 } }];if (a.el.type !== GROUP) return [{ initialAttr: { opacity: 1 }, finalAttr: { opacity: 0 }, startEnd: { start: 0, end: 1 } }];
    } else if (a.el !== GROUP) return [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: a.attr && a.attr.opacity || 1 }, startEnd: { start: 0, end: 1 } }];
  }static getFallbackAnimDuration(a) {
    return durationList[a] || 0;
  }static getFallbackAnimTimeSlots() {
    return [{ name: '_default', start: 0, end: 1, child: [[{ name: 'initial', duration: .125 }, { name: 'middle', duration: .75, child: [[{ name: 'axis', duration: .25 }, { name: 'plot', duration: .75 }]] }, { name: 'final', duration: .125 }]] }];
  }createElement(a, b = {}, c) {
    var d = this,
        e = d.getFromEnv(PAPER);if (e || (e = d.getFromEnv(CHART).getFromEnv(PAPER), d.addToEnv(PAPER, e)), a === GROUP) a = e.group(c.attr && c.attr.name || '', c.container), a.attr(b);else if (a === HTML) a = e.html(c.attr.type, b, c.css, c.container);else {
      if (a === TEXT && c.css) return e[c.el](b, c.css, c.container);a = e[c.el](b, c.container);
    }return a;
  }setAttributes(a, b) {
    var c,
        d = this,
        e = b.attr,
        f = b.inputJSON || {};return 'string' == typeof a ? a = d.createElement(a, e, f) : 0 === Object.keys(e).length ? (!f.attr || f.state === DISAPPEARING) && (c = !f.doNotRemove) : a.attr(e), c ? d.removeElement(a, b.immediate) : (f.css && a.css(f.css), b.groupChangeReq && a.appendTo(f.container), b.immediate && f.callback && f.callback.call(a)), { el: a, removed: c };
  }prepareAnimateArr() {
    function a(a, b) {
      var d,
          e,
          f,
          g = { start: 0, end: 1 };for (f in a) if (a.hasOwnProperty(f)) {
        if (a[f].syncWith && !c[a[f].syncWith]) continue;d = a[f].syncWith, g.start = a[f].start === UNDEF ? 0 : a[f].start, g.end = a[f].end === UNDEF ? 1 : a[f].end, g.hookFn = a[f].hookFn || a.hookFn, g.smartMorph = a[f].smartMorph || a.smartMorph;break;
      }return d = d && c[d] ? d : b && c[b] ? b : 'default', e = c[d].end - c[d].start, g.start = c[d].start + g.start * e, g.end = c[d].start + g.end * e, g;
    }var b,
        c,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        m = this.config.animateArr,
        n = this.config.preAnimArr = [];for (c = this.getFinalSlots(), e = 0, f = m.length; e < f; e += 1) {
      for (b = m[e], d = b.component, (g = 0, h = b.data.length); g < h; g += 1) l = b.data[g], k = l.transition || c[d] && c[d].transition, k && applyType(l, k), l.preAnimFn && n.push({ el: l.el, fn: l.preAnimFn }), l.animConfig && (l.animConfig = a(l.animConfig, d));b.effect || c[d] && (b.effect = c[d].effect), b.animConfig || (b.animConfig = [{}]), b.animConfig = a(b.animConfig, d);
    }
  }animate() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        k = this,
        l = k.config,
        m = k.config.animateArr,
        n = l.animationObj,
        o = n.animObj,
        p = n.dummyObj,
        q = n.duration;for (k.prepareAnimateArr(), execPreAnimFns(k.config.preAnimArr), (e = 0, f = m.length); e < f; e += 1) for (b = m[e], g = 0, h = b.data.length - 1; g <= h; g += 1) c = b.data[g].animConfig || b.animConfig, c = shiftAnimTime(c, q, 180), a = b.data[g].effect || b.effect || LINEAR, d = e === f ? b.callback || b.data[g].callback : b.data[g].callback, b.data[g].preAttrs && b.data[g].el.attr(b.data[g].preAttrs), b.data[g].el && animateEl(b.data[g].el, b.data[g].attrs, d || null, c, p, o, q, a);
  }remove(a) {
    this.removeAllJobs(), a.instant && this.getGraphicalElement('dummyObj') && this.getGraphicalElement('dummyObj').remove(), super.remove(a);
  }
}exports.default = AnimationManager;
},{"../lib/lib":23,"../schedular":21,"../../core/component-interface":65,"../dependency-manager":20}],68:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let list = { pie2d: ['isPlotItemSliced', 'addData', 'removeData', 'updateData', 'slicePlotItem', 'startingAngle'], dragcolumn2d: ['getDataWithId', 'getData', 'setUpperLimit', 'setLowerLimit', 'getLowerLimit', 'getUpperLimit'], realtimecolumn: ['feedData', 'setData', 'stopUpdate', 'restartUpdate', 'isUpdateActive', 'clearChart', 'getData', 'getDataForId', 'setDataForId', 'getDataJSON', 'showLog', 'hideLog', 'clearLog'], scrollcolumn2d: ['scrollTo'], doughnut: ['centerLabel'], zoomline: ['zoomOut', 'zoomTo', 'resetChart', 'setZoomMode', 'getViewStartIndex', 'getViewEndIndex', 'scrollTo'], maps: ['getMapName', 'getEntityList', 'getMapAttribute', 'exportMap', 'addMarker', 'updateMarker', 'removeMarker'], "*": ['exportChart', 'getXML', 'getChartAttribute', 'getCSVData', 'getChartData', 'getDataAsCSV', 'getJSONData', 'getSVGString', 'getXMLData'] };list.pie3d = list.pie2d, list.doughnut2d = list.doughnut3d = list.doughnut.concat(list.pie2d), list.dragarea = list.dragline = list.dragnode = list.dragcolumn2d, list.realtimearea = list.realtimeline = list.realtimelinedy = list.realtimestackedarea = list.realtimestackedcolumn = list.bulb = list.angulargauge = list.hlineargauge = list.hled = list.vled = list.vbullet = list.hbullet = list.thermometer = list.cylinder = list.realtimecolumn, list.scrollarea2d = list.scrollline2d = list.scrollcombidy2d = list.scrollcombi2d = list.scrollstackedcolumn2d = list.scrollcolumn2d, list.zoomlinedy = list.zoomline;exports.default = list;
},{}],22:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._mouseEvtHandler = undefined;

var _lib = require('../_internal/lib/lib');

var _eventApi = require('../_internal/misc/event-api');

var _chartmessage = require('../_internal/components/chartmessage');

var _chartmessage2 = _interopRequireDefault(_chartmessage);

var _componentInterface = require('../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _animationManager = require('../_internal/components/animation-manager');

var _animationManager2 = _interopRequireDefault(_animationManager);

var _dependencyManager = require('../_internal/dependency-manager');

var _eimethodList = require('../_internal/misc/eimethod-list');

var _eimethodList2 = _interopRequireDefault(_eimethodList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MOUSEOUT = 'mouseout',
      DEFAULT_CREDITLABEL = !0,
      addEiMethods = (a, b) => {
  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
},
      getEIList = a => {
  let b = _eimethodList2.default[a] || [];return b.concat(_eimethodList2.default['*']);
},
      _mouseEvtHandler = function (a, b, c) {
  var d,
      e,
      f,
      g,
      h,
      k,
      m,
      n,
      o = c.mouseTracker,
      p = b.originalEvent,
      q = a.config,
      r = q.datasetOrder || a.getDatasets(),
      s = !1,
      t = r.length,
      u = o._lastDatasetIndex,
      v = o._lastPointIndex;for (d = (0, _lib.getMouseCoordinate)(a.getFromEnv('chart-container'), p, a), e = d.chartX, f = d.chartY; t-- && !s;) g = r[t], g && g.getState('visible') && (h = g._getHoveredPlot && g._getHoveredPlot(e, f), h && h.hovered && (s = !0, h.datasetIndex = t, n = o.getMouseEvents(b, h.datasetIndex, h.pointIndex)));if ((!s || n && n.fireOut) && 'undefined' != typeof u && r[u] && r[u]._firePlotEvent && (n && !n.events.length ? o.mouseoutTimer = setTimeout(function () {
    a.mouseoutHandler(b, u, v);
  }, 20) : a.mouseoutHandler(b, u, v)), s) for (m = n.events && n.events.length, m && (o._lastDatasetIndex = h.datasetIndex, v = o._lastPointIndex = h.pointIndex), k = 0; k < m; k += 1) g && g._firePlotEvent && g && g._firePlotEvent && g._firePlotEvent(n.events[k], v, b, h.datasetIndex);
};class BaseChart extends _componentInterface2.default {
  static getName() {
    return 'base';
  }setDummyEImethods(a) {
    var b = this,
        c = b.config,
        d = c._eiStore || (c._eiStore = {}),
        e = getEIList(a),
        f = b.getFromEnv('chartInstance'),
        g = function (a) {
      return function () {
        d[a] || (d[a] = []), d[a].push(arguments);
      };
    };e.forEach(a => {
      f[a] || (f[a] = g(a));
    }), f.addEventListener('renderComplete', function () {
      for (let a in d) d[a].forEach(b => {
        f[a].apply(f, b);
      });c._eiStore = {};
    });
  }static getType() {
    return 'chartAPI';
  }mouseoutHandler(a, b, c) {
    let d = this,
        e = d.config.datasetOrder || d.getDatasets(),
        f = d.getChildren('mouseTracker')[0];e[b]._firePlotEvent(MOUSEOUT, c, a), delete f._lastDatasetIndex, delete f._lastPointIndex;
  }getName() {
    return 'base';
  }getType() {
    return 'chartAPI';
  }_mouseEvtHandler(a, b) {
    _mouseEvtHandler(this, a, b);
  }getComponents(a, b) {
    let c = a || this,
        d = [];return c.iterateComponents(a => {
      a.getType() === b && d.push(a);
    }), d;
  }getDatasets(a) {
    let b = a || this,
        c = [];return b.iterateComponents(a => {
      'dataset' === a.getType() && c.push(a);
    }), c;
  }preConfigure(a) {
    super.preConfigure(a), addEiMethods(this.getFromEnv('chartInstance'), this.eiMethods);
  }configureAttributes(a) {
    super.configureAttributes(a), this.createBaseComponent();
  }createBaseComponent() {
    let a,
        b = this;(a = b.getFromEnv('animationManager')) ? (a.configure(), a.setAnimationState('update')) : (a = new _animationManager2.default(), b.addToEnv('animationManager', a), a.addToEnv('chart', b), a.addToEnv('animationManager', a), a.configure(), a.setAnimationState('initial'), b.addExtEventListener('animationComplete', function (a, c) {
      ('initial' === c.currAnimState || 'update' === c.currAnimState) && b.fireChartInstanceEvent('internal.animationComplete');
    }, a));
  }setChartMessage(a, b, c) {
    var d,
        e,
        f,
        g = this;(0, _lib.componentFactory)(this, _chartmessage2.default, 'chartMessage'), f = g.getChildren('chartMessage')[0], c ? g.addToEnv('chart-container', c) : c = g.getFromEnv('chart-container'), d = g.getFromEnv('paper'), d || (e = (0, _dependencyManager.getDep)('redraphael', 'plugin'), d = new e(c, g.getFromEnv('chartWidth'), g.getFromEnv('chartHeight')), d.setHTMLClassName('fusioncharts-div'), g.addToEnv('paper', d)), d.setConfig('stroke-linecap', _lib.ROUND), g.getChildContainer('messageGroup') || g.addChildContainer('messageGroup', d.group('messageGroup')), g.config.hasChartMessage = !0, f.setChartMessage(a, b);
  }drawChartMessage() {
    var a = this;a.config.hasChartMessage = !0, a.getChildren('chartMessage')[0].drawChartMessage(), a._drawCreditLabel();
  }_dispose() {
    this._clearTimers && this._clearTimers();let a = this.getFromEnv('paper');a && a.remove && a.remove(), super._dispose();
  }fireChartInstanceEvent(a, b, c, d, e) {
    let f = this.getFromEnv('chartInstance');(0, _eventApi.triggerEvent)(a, f, b, c, d, e);
  }_hideChartMessage() {
    var a = this,
        b = a.getChildren('chartMessage');a.config.hasChartMessage = !1, b && b[0]._hideChartMessage(), a.getGraphicalElement('messageText') && a.getGraphicalElement('messageText').hide(), a.getGraphicalElement('messageVeil') && a.getGraphicalElement('messageVeil').hide();
  }_removeWaitingJobs() {
    this.iterateComponents(a => a.removeAllJobs());
  }_drawCreditLabel() {
    var a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.getFromEnv('core-options'),
        h = f.getFromEnv('paper'),
        i = g.creditLabel,
        j = f.getFromEnv('chartInstance').args.creditLabel,
        k = +f.getFromEnv('chartHeight'),
        l = f.getGraphicalElement('creditLabel'),
        m = f.getContainer('parentgroup'),
        n = { href: _lib.CREDIT_HREF, text: _lib.CREDIT_STRING };a = (0, _lib.pluck)(j, i, DEFAULT_CREDITLABEL), a ? (c = f.getContainer('creditgroup') || f.addContainer('creditgroup', h.group('creditgroup')), m && c.insertAfter(m), d = { text: n.text, x: 6, y: k - 4, "vertical-align": _lib.POSITION_BOTTOM, "text-anchor": _lib.POSITION_START, fill: 'rgba(0,0,0,0.5)', title: n.title || _lib.BLANK }, e = { fontSize: 9, fontFamily: 'Verdana,sans', cursor: _lib.POINTER, _cursor: _lib.HAND }, l ? l.attr(d).css(e) : (b = h.text(d, e, c), f.addGraphicalElement('creditLabel', b), b.click(function () {
      try {
        open(n.href);
      } catch (a) {
        (top || window).location.href = n.href;
      }
    }))) : b && b.remove && f.removeGraphicalElement('creditLabel');
  }_hideModal() {
    this.getChildContainer('messageGroup').hide();
  }remove(a) {
    let b = this.getFromEnv('animationManager');super.remove(a), b.remove(a);
  }
}BaseChart.stringConstants = { BACKGROUNDLOADED: 'BackgroundLoaded', BACKGROUNDLOADERROR: 'BackgroundLoadError', clipRectStr: 'clip-rect' };exports._mouseEvtHandler = _mouseEvtHandler;
exports.default = BaseChart;
},{"../_internal/lib/lib":23,"../_internal/misc/event-api":25,"../_internal/components/chartmessage":66,"../core/component-interface":65,"../_internal/components/animation-manager":67,"../_internal/dependency-manager":20,"../_internal/misc/eimethod-list":68}],36:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class SkeletonTooltipController {
  draw() {}drawAt() {}hide() {}hideAll() {}enableToolTip() {}disableToolTip() {}setStyle() {}
}exports.default = { extension: SkeletonTooltipController, name: 'ToolTipController', type: 'plugin' };
},{}],101:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],56:[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;

var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":101}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../_internal/lib/lib');

var _libGraphics = require('../_internal/lib/lib-graphics');

var _eventApi = require('../_internal/misc/event-api');

var _package = require('../../../package.json');

var _dependencyManager = require('../_internal/dependency-manager');

var _updater = require('../_internal/misc/updater');

var _rendererEvents = require('../_internal/misc/renderer-events');

var _rendererEvents2 = _interopRequireDefault(_rendererEvents);

var _createChart = require('../_internal/misc/create-chart');

var _createChart2 = _interopRequireDefault(_createChart);

var _SmartlabelManager = require('../_internal/vendors/fusioncharts-smartlabel/src/SmartlabelManager');

var _SmartlabelManager2 = _interopRequireDefault(_SmartlabelManager);

var _schedular = require('../_internal/schedular');

var _fileStore = require('../_internal/misc/file-store');

var _fileStore2 = _interopRequireDefault(_fileStore);

var _globalPolicies = require('../_internal/misc/global-policies');

var _globalPolicies2 = _interopRequireDefault(_globalPolicies);

var _numberformatter = require('../_internal/components/numberformatter');

var _numberformatter2 = _interopRequireDefault(_numberformatter);

var _redraphael = require('../_internal/redraphael/redraphael');

var _redraphael2 = _interopRequireDefault(_redraphael);

var _redraphael3 = require('../_internal/redraphael/redraphael.svg');

var _redraphael4 = _interopRequireDefault(_redraphael3);

var _jsonTranscoder = require('../_internal/transcoder/json-transcoder');

var _jsonTranscoder2 = _interopRequireDefault(_jsonTranscoder);

var _redraphael5 = require('../_internal/redraphael/redraphael.ext');

var _redraphael6 = _interopRequireDefault(_redraphael5);

var _basechart = require('../viz/basechart');

var _basechart2 = _interopRequireDefault(_basechart);

var _tooltipAdapter = require('../_internal/misc/tooltip-adapter');

var _tooltipAdapter2 = _interopRequireDefault(_tooltipAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NATIVE_FORMAT = 'json',
      SCRIPT_NAME_RE = /(^|[\/\\])(fusioncharts\.js)([\?#].*)?$/gi,
      SIGNATURE_MATCH_RE = /^(FusionCharts|FusionWidgets|FusionMaps)/,
      LENGTH_CLEANUP_RE = /[^\%\d]*$/gi,
      URL_RE = /url$/i,
      MAP_NEEDED = 'undefined' != typeof HAS_MAPS && HAS_MAPS,
      sanitiseFormatStr = e => e.toString().toLowerCase(),
      handleContainerVisibility = function () {
  var e,
      t = {},
      a = function () {
    var n,
        i,
        r,
        s,
        o,
        d = 0,
        l = parseInt(FusionCharts.options.visibilityTrackingInterval, 10) || 300;for (n in t) d += 1, i = t[n].chart, r = t[n].container, s = t[n].insertMode, o = t[n].callback, (i.disposed || !isHidden(r)) && (delete t[n], d -= 1, !i.disposed && i.renderChart(r, s, o));e = d ? setTimeout(a, l) : clearTimeout(e);
  };return function (n, i, r, s) {
    t[n.id] = { chart: n, container: i, insertMode: r, callback: s }, e || (e = setTimeout(a, parseInt(FusionCharts.options.visibilityTrackingInterval, 10) || 300));
  };
}(),
      isHidden = function () {
  var e = function (e, t) {
    return window.getComputedStyle ? t = window.getComputedStyle(e)[t] : e.currentStyle && (t = e.currentStyle[t]), t;
  },
      t = function (a) {
    var n = a.parentNode;return !!n && 9 !== n.nodeType && (!('none' !== e(a, 'display')) || !!n && t(n));
  };return t;
}();let isReady,
    readyNotified,
    smartLabelManager,
    readyNow,
    count = 0,
    NFStore = {},
    slHandler = function () {
  FusionCharts.removeEventListener('initialized', slHandler), smartLabelManager = new _SmartlabelManager2.default(document.body || document.getElementsByTagName('body')[0]), _createChart.globalStore.addToEnv('smartLabel', smartLabelManager);
};function uniqueId() {
  return `chartobject-${uniqueId.lastId += 1}`;
}uniqueId.lastId = 0;function objToLowerCase(e) {
  let t,
      a = {};for (t in e) a[t.toLowerCase()] = e[t];return a;
}function objToHash(e) {
  let t,
      a = [];for (t in e) a.push(t + '_' + e[t]);return a.sort(), a.join(',');
}function deconstructPolicySet(e, t, a) {
  var n, i;for (n in e) if (e[n] instanceof Array) t[e[n][0]] = a[n];else for (i in e[n]) t[e[n][i][0]] = a[n][i];
}function _getParsedArgs(e, t, a, n) {
  return { native: a === NATIVE_FORMAT, dataFormat: a, format: NATIVE_FORMAT, data: t, dataSource: e, silent: !!n };
}function getScriptBaseUri(e) {
  var t,
      a,
      n = window.document.getElementsByTagName('script'),
      r = n.length;for (a = 0; a < r; a += 1) if (t = n[a].getAttribute('src'), 'undefined' != typeof t && null !== t && null !== t.match(e)) return t.replace(e, '$1');
}function isDuplicateId(e, t) {
  var a,
      n,
      r,
      s = document.getElementById(e),
      o = t.id || t.getAttribute('id');if (null === s) return !1;if (e === o) return !0;for (a = t.getElementsByTagName('*'), n = 0, r = a.length; n < r; n++) if (a[n] === s) return !1;return !0;
}function notifyRender(e) {
  var t = FusionCharts.items[e && e.id];t && (!1 !== e.success || e.silent) || (0, _eventApi.raiseError)(FusionCharts.items[e.id], '25081850', 'run', '::RendererManager', new Error('There was an error rendering the chart. Enable FusionCharts JS debugger for more information.')), t.ref = e.ref, (0, _eventApi.triggerEvent)('internal.DOMElementCreated', t, {});
}function purgeDOM(e) {
  var t,
      r,
      s,
      o = e.attributes;if (o) for (t = o.length - 1; 0 <= t; t -= 1) s = o[t].name, 'function' == typeof e[s] && (e[s] = null);if (o = e.childNodes, o) for (r = o.length, t = 0; t < r; t += 1) purgeDOM(e.childNodes[t]);
}function showUnsupportedChartMessage(e, t, a) {
  var n = e.args,
      i = e.options;e._chartMessageImageStyle = { imageHAlign: n.typeNotSupportedMessageImageHAlign || i.baseChartMessageImageHAlign, imageVAlign: n.typeNotSupportedMessageImageVAlign || i.baseChartMessageImageVAlign, imageAlpha: n.typeNotSupportedMessageImageAlpha || i.baseChartMessageImageAlpha, imageScale: n.typeNotSupportedMessageImageScale || i.baseChartMessageImageScale }, e._chartMessageStyle = { color: n.typeNotSupportedMessageColor || i.baseChartMessageColor, fontFamily: n.typeNotSupportedMessageFont || i.baseChartMessageFont, fontSize: n.typeNotSupportedMessageFontSize || i.baseChartMessageFontSize }, (0, _createChart2.default)(FusionCharts, e, t, 'base', a, i.typeNotSupportedMessage);
}class FusionCharts {
  constructor(...e) {
    let t = {};this.__state = {}, this.id = '', 1 === e.length && 'object' == typeof e[0] && (t = e[0]), 1 < e.length && 'object' == typeof e[e.length - 1] && (0, _lib.extend2)(t, e[e.length - 1], !1, !0), this.id = 'undefined' == typeof t.id ? uniqueId() : t.id, this.args = t, FusionCharts.items[this.id] instanceof FusionCharts && (0, _eventApi.raiseWarning)(this, '06091847', 'param', '', new Error(`A FusionCharts object with the specified id "${this.id}" already exists.` + `Renaming it to ${this.id = uniqueId()}`)), this._parsePolicies(_globalPolicies2.default), this.attributes.id = this.id, this.resizeTo && this.resizeTo(t.width, t.height, !0), this.chartType && this.chartType(t.type || t.swfUrl, !0), 'undefined' != typeof __webpack_public_path__ && (__webpack_public_path__ = FusionCharts.getScriptBaseURI()), (0, _eventApi.triggerEvent)('beforeInitialize', this, t), FusionCharts.items[this.id] = this, FusionCharts.defaultOptions = FusionCharts.options, (0, _eventApi.triggerEvent)('initialized', this, t), (0, _eventApi.triggerEvent)('resourceRequested', this, t);
  }static getObjectReference(e = '') {
    return FusionCharts.items[e] && FusionCharts.items[e].ref;
  }static render(e, t) {
    return e instanceof FusionCharts ? (e.render(t), e) : new FusionCharts(e).render(t);
  }static addDep(e) {
    return _dependencyManager.addDep.call(this, e);
  }static getDep(e, t) {
    return _dependencyManager.getDep.call(this, e, t);
  }static addEventListener(e, t) {
    return (0, _eventApi.addListener)(e, t);
  }static on(e, t) {
    return FusionCharts.addEventListener(e, t);
  }static removeEventListener(e, t) {
    return (0, _eventApi.removeListener)(e, t);
  }static ready(e, t = FusionCharts, a = FusionCharts) {
    let n = () => {
      e.call(a, t);
    };'function' == typeof e && (isReady ? setTimeout(n, 0) : FusionCharts.addEventListener('ready', n));
  }static formatNumber(e, t = {}, a) {
    t = objToLowerCase(t);let n,
        i,
        r = objToHash(t);return NFStore[r] ? n = NFStore[r] : NFStore[r] = n = new _numberformatter2.default(t, { useScaleRecursively: !0 }), n.configure(t), i = n.dataLabels(e, a), i;
  }static transcodeData(e, t, a, n) {
    let i,
        r,
        s,
        o,
        d = (0, _dependencyManager.getDepsByType)('transcoder'),
        l = sanitiseFormatStr(a),
        c = sanitiseFormatStr(t);return c && 'function' == typeof c.toString && l && 'function' == typeof l.toString && 'undefined' != typeof d[l] && 'undefined' != typeof d[c] ? (s = d[c](), o = d[l](), s.toJSON && (i = s.toJSON(e, this), r = o.fromJSON(i.data, this)), i.error instanceof Error || (r.error = i.error), n ? r : r.data) : void (0, _eventApi.raiseError)(this, '14090217', 'param', '.transcodeData()', 'Unrecognized data-format specified during transcoding.');
  }static setAnimation(e) {
    FusionCharts.options._globalAnimationRule || (FusionCharts.options._globalAnimationRule = []), FusionCharts.options._globalAnimationRule.push(e);
  }static setEasingEffect(e, t) {
    FusionCharts.getDep('redraphael', 'plugin').easing_formulas[e] = t;
  }static getScriptBaseURI() {
    return FusionCharts.options.scriptBaseUri;
  }static setScriptBaseURI(e) {
    FusionCharts.options.scriptBaseUri = e, 'undefined' != typeof __webpack_public_path__ && (__webpack_public_path__ = e);
  }static getChartFromId(e) {
    return FusionCharts.items[e];
  }_parsePolicies(e) {
    let t,
        a,
        n,
        i = this.args;for (t in e) if (_globalPolicies2.default[t] instanceof Array) a = i[e[t][0]], this[t] = 'undefined' == typeof a ? e[t][1] : a;else for (n in 'object' != typeof this[t] && (this[t] = {}), e[t]) a = i[e[t][n][0]], this[t][n] = 'undefined' == typeof a ? e[t][n][1] : a;
  }hasRendered() {
    return !!(this.jsVars.hcObj && this.jsVars.hcObj.hasRendered);
  }setTransparent(e) {
    var t;(t = this.jsVars) && ('boolean' != typeof e && null !== e && (e = !0), t.transparent = null !== e && !0 === e);
  }addEventListener(e, t) {
    return (0, _eventApi.addListener)(e, t, this);
  }on(e, t) {
    return this.addEventListener(e, t);
  }removeEventListener(e, t) {
    return (0, _eventApi.removeListener)(e, t, this);
  }formatNumber(e, t, a, n) {
    let i,
        r,
        s,
        o,
        d,
        l,
        c = this,
        p = c.apiInstance || {},
        h = p.numberFormatter;switch (s = objToHash(a), a = a && objToLowerCase(a) || {}, '' === s ? h ? d = h : (i = c.options.dataSource, r = i.chart || {}, o = objToHash(r), NFStore[o] ? d = NFStore[o] : NFStore[o] = d = new _numberformatter2.default(p, r)) : (i = c.options.dataSource, r = i.chart || {}, r = (0, _lib.extend2)((0, _lib.extend2)({}, r), a), o = objToHash(r), NFStore[o] ? d = NFStore[o] : NFStore[o] = d = new _numberformatter2.default(p, r)), (t && t.toLowerCase ? t : '').toLowerCase()) {case 'yaxisvalues':
        l = d.yAxis(e, n);break;case 'xaxisvalues':
        l = d.xAxis(e);break;case 'scale':
        l = d.scale(e);break;default:
        l = d.dataLabels(e, n);}return l;
  }clone(e, t) {
    let a = typeof e,
        n = {},
        i = (0, _lib.extend2)({}, this.args, !1, !0);return deconstructPolicySet(_globalPolicies2.default, i, this), delete i.id, delete i.animate, delete i.stallLoad, n.link = i.link, i = (0, _lib.extend2)({}, i, !1, !0), i.link = n.link, ('object' == a ? (0, _lib.extend2)(i, e, !1, !0) : 'boolean' == a ? t = e : void 0, t ? i : new FusionCharts(i));
  }isActive() {
    if (!this.ref || window.document.getElementById(this.id) !== this.ref) return !1;try {
      return SIGNATURE_MATCH_RE.test('FusionCharts');
    } catch (t) {
      return !1;
    }
  }chartType(e, t) {
    let a,
        n = this,
        i = !0 === t,
        r = n.options;return 'string' == typeof e && (t = 'object' == typeof t ? t : {}, a = e.replace(/[\?\#][\s\S]*$/g, ''), r.chartType = a.replace(/^[\s\S]*\//gi, ''), r.chartTypeSourcePath = -1 === a.indexOf('/') ? t.chartTypeSourcePath || n.options.chartTypeSourcePath || FusionCharts.options.chartTypeSourcePath || '' : a.replace(/[^\/]*?$/gi, ''), (0, _eventApi.triggerEvent)('resourceRequested', n), 'undefined' != typeof t.dataSource && null !== t.dataSource ? n.setChartData(t.dataSource, t.dataFormat, t.dataConfiguration) : n.isActive() && !i && n.render()), (r.chartType || '').toLowerCase();
  }setChartDataUrl(e = '', t, a, n, i) {
    let r,
        s,
        o = (0, _dependencyManager.getDepsByType)('transcoder');if (('undefined' == typeof t || null === t || 'function' != typeof t.toString) && (t = this.options.dataFormat, (0, _eventApi.raiseWarning)(this, '03091609', 'param', 'FusionCharts#setChartDataUrl', 'Invalid Data Format. Reverting to current data format - ' + t)), r = sanitiseFormatStr(t), URL_RE.test(r) || (r += 'url'), s = o[r] && o[r](), this.jsVars.stallLoad = !0, !s) return { error: new Error('Unable to fetch data.') };return s.toJSON ? void s.toJSON(e, a, n, i, this) : { error: new Error('Unable to fetch data.') };
  }setChartData(e = {}, t = NATIVE_FORMAT, a, n, i) {
    let r,
        s,
        o,
        d = this,
        l = (0, _dependencyManager.getDepsByType)('transcoder'),
        c = sanitiseFormatStr(t),
        p = l[c] && l[c](),
        h = d.options;return URL_RE.test(c) ? void d.setChartDataUrl(e, c, a, n, i) : void (s = p ? p.toJSON ? p.toJSON(e, d) : { error: new Error('Unable to convert data.') } : { error: new Error('Unable to convert data.') }, r = s.data || s, h.error = s.error, h.dataSource = r, h.dataFormat = c, o = _getParsedArgs(e, r, c, i), (0, _eventApi.triggerEvent)('beforeDataUpdate', d, o, void 0, _updater.onDataUpdateSuccess, _updater.onDataUpdateCancel));
  }getChartData(e = NATIVE_FORMAT, t, a) {
    var n,
        i,
        r = this,
        s = (0, _dependencyManager.getDepsByType)('transcoder'),
        o = sanitiseFormatStr(e),
        d = s[o](),
        l = r.options,
        c = r.apiInstance,
        p = !a && (n = c && c.getCollatedData && c.getCollatedData()) ? n : l.dataSource;return i = d ? d.fromJSON ? d.fromJSON(p, r) : { error: new Error('Unable to convert data.') } : { error: new Error('Data format not recognized.') }, !i.error && l.error && (i.error = l.error), t ? i : i.data;
  }dataReady(e) {
    return e ? this.__state.dataAvailable : this.__state.dataReady;
  }setChartAttribute(e, t) {
    var a, n, r, s, o;if ('string' == typeof e) s = arguments[0], e = {}, e[s] = t;else if (null === e || 'object' != typeof e) return;if (o = 0, a = this.getChartData(NATIVE_FORMAT), r = a && (a.chart || a.graph || a.map), !r) return void (0, _eventApi.raiseError)(this, '2105141421', 'run', '#setChartAttribute()', 'Could not retrieve attribute list. Is data ready?');for (n in e) {
      if (o += 1, null === e[n]) {
        delete r[n.toLowerCase()];continue;
      }r[n.toLowerCase()] = e[n];
    }0 < o && ('undefined' == typeof r.animation && (r.animation = '0'), this.setChartData(a, NATIVE_FORMAT));
  }getChartAttribute(e) {
    var t,
        a,
        n = this.getChartData(NATIVE_FORMAT),
        r = n && (n.chart || n.graph || n.map);if (0 === arguments.length || 'undefined' == typeof e || 'undefined' == typeof r) return r;if ('string' == typeof e) t = r[e.toString().toLowerCase()];else if (e instanceof Array) for (t = {}, a = 0; a < e.length; a += 1) t[e[a]] = r[e[a].toString().toLowerCase()];else (0, _eventApi.raiseError)(this, '25081429', 'param', '~getChartAttribute()', 'Unexpected value of "attribute"');return t;
  }render(e, t, a) {
    return (a ? 'function' != typeof a && (a = void 0) : 'function' == typeof t ? (a = t, t = void 0) : !t && 'function' == typeof e && (a = e, e = void 0), 'undefined' == typeof e && (e = this.options.containerElementId), 'string' == typeof e && (e = document.getElementById(e)), 'undefined' == typeof e || null === e) ? ((0, _eventApi.raiseError)(this, '03091456', 'run', '.render()', new Error('Unable to find the container DOM element.')), this) : (isHidden(e) ? handleContainerVisibility(this, e, t, a) : this.renderChart(e, t, a), this);
  }renderChart(e, t, a) {
    var n,
        i,
        r,
        o,
        d,
        l = this;if (!this.disposed) {
      if (((r = window[this.id]) && r.FusionCharts && r.FusionCharts === this || (r = this.ref) && r.FusionCharts && r.FusionCharts === this) && (this._dispose(), r === window[this.id] && (window[this.id] = void 0)), 'undefined' != typeof window[this.id] && (0, _eventApi.raiseError)(this, '25081843', 'comp', '.render', new Error('#25081843:IECompatibility() Chart Id is same as a JavaScript variable name. Variable naming error. Please use unique name for chart JS variable, chart-id and container id.')), a ? 'function' != typeof a && (a = void 0) : 'function' == typeof t ? (a = t, t = void 0) : !t && 'function' == typeof e && (a = e, e = void 0), t = (t || this.options.insertMode).toLowerCase() || _lib.domInsertModes.REPLACE, 'undefined' == typeof e && (e = this.options.containerElementId), 'string' == typeof e && (e = document.getElementById(e)), 'undefined' == typeof e || null === e) return (0, _eventApi.raiseError)(this, '03091456', 'run', '.render()', new Error('Unable to find the container DOM element.')), this;if (isDuplicateId(this.id, e)) return (0, _eventApi.raiseError)(this, '05102109', 'run', '.render()', new Error('A duplicate object already exists with the specific Id: ' + this.id)), this;if (n = document.createElement(this.options.containerElementType || 'span'), n.setAttribute('id', this.id), 'append' !== t && 'prepend' !== t) for (; e.hasChildNodes();) e.removeChild(e.firstChild);return 'prepend' === t && e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n), this.options.containerElement = e, this.options.containerElementId = e.id, (d = n.style) && (d.position = 'relative', d.textAlign = 'left', d.lineHeight = 'normal', d.display = 'inline-block', d.zoom = '1', d['vertical-align'] = 'middle', d.fontWeight = 'normal', d.fontVariant = 'normal', d.fontStyle = 'normal', d.textDecoration = 'none', d['*DISPLAY'] = 'inline', d.padding = '0', d.margin = '0', d.border = 'none', d.direction = 'ltr', (_lib.isIE || _lib.isIE11) && _lib.hasSVG && (d['-ms-touch-action'] = 'none')), this.options.containerClassName && (n.className = this.options.containerClassName), o = (0, _lib.normalizeCSSDimension)(this.width, this.height, n), this.__state.renderedWidth = o.pixelWidth, this.__state.renderedHeight = o.pixelHeight, this.__state.rendering = !0, (0, _eventApi.triggerEvent)('beforeRender', this, i = { container: e, width: this.width, height: this.height, renderer: this.options.renderer }, void 0, function (e, t) {
        !0 === this.disposed || l._render(n, function () {
          if (notifyRender(...arguments), a) try {
            a.call(e.sender, t.container);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        });
      }, function () {
        (0, _eventApi.triggerEvent)('renderCancelled', l, i);
      }), this;
    }
  }_render(e, t) {
    var a,
        n,
        i,
        r = this,
        s = r.chartType(),
        o = r.__state,
        d = r.options,
        l = r.args,
        c = r.options.showChartLoadingMessage,
        p = FusionCharts.getDep('vml', 'dependency'),
        h = () => {
      let a = FusionCharts.getDep(s, 'dependency') || FusionCharts.getDep(s, 'chartapi') || FusionCharts.getDep(s, 'maps');a ? a.then ? a.then(e => {
        e.__esModule ? (FusionCharts.addDep(e['default']), g(), m()) : m();
      })['catch'](() => {
        showUnsupportedChartMessage(r, e, t);
      }) : (g(), m()) : showUnsupportedChartMessage(r, e, t);
    },
        g = () => {
      let e = (0, _dependencyManager.getDep)(o.lastRenderedType, 'chartapi') || (0, _dependencyManager.getDep)(o.lastRenderedType, 'maps');if (e && o.lastRenderedType !== s && ((0, _eventApi.triggerEvent)('chartTypeChanged', r, { previousType: o.lastRenderedType, newType: s }), a = e, a)) for (i in a) delete r[i];o.lastRenderedType = s;
    },
        m = () => {
      FusionCharts.getDep(s, 'chartapi') ? (g(), (0, _createChart2.default)(FusionCharts, r, e, s, t)) : FusionCharts.getDep(s, 'maps') ? FusionCharts.getDep('maps', 'chartapi') ? (g(), (0, _createChart2.default)(FusionCharts, r, e, s, t)) : MAP_NEEDED ? require("_bundle_loader")(require.resolve('../maps')).then(a => {
        FusionCharts.addDep(a['default']), g(), (0, _createChart2.default)(FusionCharts, r, e, s, t);
      })['catch'](() => {
        showUnsupportedChartMessage(r, e, t), (0, _eventApi.raiseError)(FusionCharts, '12052314141', 'run', 'JavaScriptRenderer~Maps', new Error('FusionCharts\' maps file is required to render the visualization.'));
      }) : showUnsupportedChartMessage(r, e, t) : showUnsupportedChartMessage(r, e, t);
    },
        u = () => {
      (0, _createChart2.default)(FusionCharts, r, e, 'base', void 0, n);
    };e || (e = e || r.ref || r.jsVars.container || r.options && r.options.containerElement && r.options.containerElement.childNodes[0]), r.apiInstance && r.apiInstance.removeJob('resizeScheduled'), n = c ? d.PBarLoadingText || d.loadMessage : '', r._chartMessageImageStyle = { imageHAlign: l.loadMessageImageHAlign || d.baseChartMessageImageHAlign, imageVAlign: l.loadMessageImageVAlign || d.baseChartMessageImageVAlign, imageAlpha: l.loadMessageImageAlpha || d.baseChartMessageImageAlpha, imageScale: l.loadMessageImageScale || d.baseChartMessageImageScale }, r._chartMessageStyle = { color: l.loadMessageColor || d.baseChartMessageColor, fontFamily: l.loadMessageFont || d.baseChartMessageFont, fontSize: l.loadMessageFontSize || d.baseChartMessageFontSize }, p ? p.then ? p.then(e => {
      FusionCharts.addDep(e['default']), u(), h();
    })['catch'](() => {
      (0, _eventApi.raiseError)(FusionCharts, '162162788', 'run', '>RendererError~VMLRendererLoad', 'Unable to load FusionCharts VML renderer.');
    }) : (FusionCharts.addDep(p), u(), h()) : (u(), h());
  }resizeTo(e, t, a) {
    var n = this,
        i = n.width,
        r = n.height,
        s = n.__state,
        o = n.apiInstance && n.apiInstance.config || {};return o.resize = !0, 'object' == typeof e && (a = t, t = e.h, e = e.w), e = null === e || 'undefined' == typeof e ? i : e.toString().replace(LENGTH_CLEANUP_RE, ''), t = null === t || 'undefined' == typeof t ? r : t.toString().replace(LENGTH_CLEANUP_RE, ''), !0 === a ? (n.width = e, n.height = t) : (0, _eventApi.triggerEvent)('beforeresize', n, { currentWidth: i, currentHeight: r, newWidth: e, newHeight: t }, void 0, function () {
      n.width = e, n.height = t, n.scheduleResize({ width: e, height: t }), n.apiInstance.addJob(`resized${count++}`, function () {
        (0, _eventApi.triggerEvent)('resized', n, { id: n.id, width: n.width, height: n.height, prevWidth: i, prevHeight: r, pixelWidth: n.ref && n.ref.offsetWidth || 0, pixelHeight: n.ref && n.ref.offsetHeight || 0, originalWidth: s.renderedWidth, originalHeight: s.renderedHeight });
      }, _schedular.priorityList.postRender);
    }, function () {
      (0, _eventApi.triggerEvent)('resizecancelled', n, { currentWidth: i, currentHeight: r, cancelledTargetWidth: e, cancelledTargetHeight: t });
    }), this;
  }update(e) {
    var t = this,
        a = t.ref,
        n = t.jsVars,
        i = n && n.fcObj,
        r = n.container || i && i.options && i.options.containerElement && i.options.containerElement.childNodes[0];n.hcObj && n.hcObj.destroy && n.hcObj.destroy(), t.options.dataSource = e.data, t.apiInstance && t.apiInstance.removeJob('resizeScheduled'), 'undefined' == typeof e.error ? (delete n.stallLoad, delete n.loadError, !t.__state.firstRenderNotified && t.jsVars.secondTimeRender && (t.__state.firstRenderNotified = !0), this.isActive() && (t.chartType() === t.__state.lastRenderedType ? (0, _createChart2.default)(FusionCharts, t, r) : t.render())) : (this.isActive() && 'function' == typeof a.showChartMessage && a.showChartMessage('InvalidXMLText'), delete n.loadError);
  }dispose() {
    var e = this,
        t = {};(0, _eventApi.triggerEvent)('beforeDispose', e, t, void 0, function () {
      for (var a in e._dispose(), (0, _eventApi.triggerEvent)('disposed', e, t), (0, _eventApi.disposeEvents)(e), delete FusionCharts.items[e.id], e) e.hasOwnProperty(a) && delete e[a];e.disposed = !0;
    }, function () {
      (0, _eventApi.triggerEvent)('disposeCancelled', e, t);
    });
  }_dispose() {
    var e,
        t = this,
        a = t.jsVars;t.apiInstance && (t.apiInstance.removeJob('resizeScheduled'), t.apiInstance.remove({ instant: !0 }), delete t.apiInstance, delete a.instanceAPI), (e = t.ref) && (purgeDOM(e), e.parentNode && e.parentNode.removeChild(e)), a.container = null;
  }_config(e, t) {
    var a,
        n,
        i = this,
        r = i.jsVars,
        s = r.msgStore,
        o = r.cfgStore,
        d = i.options;for (a in n = { LoadingText: 'loadMessage', ChartNotSupported: 'typeNotSupportedMessage', RenderChartErrorText: 'renderErrorMessage', XMLLoadingText: 'dataLoadStartMessage', ChartNoDataText: 'dataEmptyMessage', LoadDataErrorText: 'dataLoadErrorMessage', InvalidXMLText: 'dataInvalidMessage' }, 'string' == typeof e && 1 < arguments.length && (a = e, e = {}, e[a] = t), e) 'undefined' == typeof s[a] ? o[a.toLowerCase()] = e[a] : s[a] = e[a], n[a] ? d[n[a]] = e[a] : d[a] = e[a];
  }configure(e, t) {
    var a;e && ('string' == typeof e ? (a = {}, a[e] = t) : a = e, this._config(a));
  }print(e) {
    var t = this.apiInstance,
        a = (0, _lib.extend2)({}, e);return !t.config.isPrinting && t.config.hasRendered && void (0, _eventApi.triggerEvent)('BeforePrint', this, a, void 0, function () {
      var e,
          n,
          r,
          s,
          o = t.getFromEnv('chart-container'),
          d = [],
          l = o.parentNode,
          c = document.body || document.getElementsByTagName('body')[0],
          p = c.childNodes;if (t.config.isPrinting = !0, (0, _lib.fcEach)(p, function (e, t) {
        1 === e.nodeType && (d[t] = e.style.display, e.style.display = 'NONE');
      }), !1 !== a.hideButtons) {
        for (n = t.getChildren('chartMenuBar').config.componentGroups[0].config.symbolList, s = 0, e = n.length; s < e; s++) if ((r = n[s]) instanceof t.getFromEnv('toolBoxAPI').SymbolWithContext) {
          r = r.getListRefernce().getFirstContainer();break;
        }r.config.container.style.display = 'NONE';
      }c.appendChild(o), window.print(), setTimeout(function () {
        r.config.container.style.display = 'visible', l.appendChild(o), (0, _lib.fcEach)(p, function (e, t) {
          1 === e.nodeType && (e.style.display = d[t]);
        }), !1 !== a.hideButtons && (r.config.container.style.display = 'visible'), t.config.isPrinting = !1, (0, _eventApi.triggerEvent)('PrintComplete', t.getFromEnv('chartInstance'), a);
      }, 1e3);
    }, function () {
      (0, _eventApi.triggerEvent)('PrintCancelled', t.getFromEnv('chartInstance'), a);
    });
  }getSVGString(e, t) {
    var a,
        n = this,
        i = n.apiInstance,
        r = i && i.getFromEnv('paper');return t && t.keepImages && (a = !0), 'function' == typeof e ? void i.addJob('getSVG', function () {
      e(r && r.toSVG && r.toSVG(a));
    }, _schedular.priorityList.postRender) : r && r.toSVG ? r.toSVG(a) : '<svg></svg>';
  }lockResize(e) {
    return 'boolean' == typeof e ? this.jsVars.resizeLocked = e : !!this.jsVars.resizeLocked;
  }showChartMessage(e, t, a, n = {}) {
    let i = this,
        r = i.apiInstance,
        s = function () {
      i._showChartMessage(e, t, a, n);
    };return r && ('base' === r.getName() ? i.addEventListener('renderComplete', s) : s()), e;
  }_showChartMessage(e, t, a, n = {}) {
    let i,
        r = this,
        s = r.jsVars,
        o = r.apiInstance,
        d = r.options,
        l = function () {
      t && o && o.config.hasRendered ? (o._show && o._show(), r.showMessage(e, i, a)) : (o._hide && o._hide(), o.setChartMessage(e, { _chartMessageStyle: i }), o.drawChartMessage());
    };return o._hideChartMessage(), 'undefined' == typeof e ? void r.hideChartMessage() : void (i = { fontFamily: (0, _lib.pluck)(n.font, d.baseChartMessageFont, 'Verdana,sans'), fontSize: (0, _lib.pluck)(n.fontSize, d.baseChartMessageFontSize, 10), color: (0, _lib.pluck)(n.color && (0, _libGraphics.convertColor)(n.color, n.alpha), d.baseChartMessageColor) }, s.msgStore[e] && (e = s.msgStore[e]), o.addJob('showMsg', l, _schedular.priorityList.postRender));
  }_resize() {
    var e = this.jsVars,
        t = e.instanceAPI,
        a = e.container;t ? (t.config.elScroll = !1, t.getFromEnv('animationManager').setAnimationState('resize'), t.addToEnv('chartWidth', a.offsetWidth), t.addToEnv('chartHeight', a.offsetHeight), t.asyncDraw()) : (0, _createChart2.default)(FusionCharts, e.fcObj, a, e.type, void 0, void 0, !1, !0);
  }hideChartMessage() {
    var e = this,
        t = e.apiInstance;t._hideChartMessage(), t._show && t._show();
  }showMessage(e = '', t, a) {
    var n,
        i,
        r,
        s = this.apiInstance,
        o = s.config,
        d = s.getFromEnv('paper'),
        l = s.getFromEnv('smartLabel'),
        c = s.getFromEnv('animationManager'),
        p = s.getGraphicalElement('messageText'),
        g = s.getGraphicalElement('messageVeil'),
        m = d.width,
        u = d.height;i = s.getChildContainer('messageGroup'), c.setAnimationState('showmessage'), n = c.setAnimation({ el: i || 'group', attr: { name: 'messageGroup' }, component: s, label: 'group' }), n.show().toFront(), i || s.addChildContainer('messageGroup', n), g = c.setAnimation({ el: g || 'rect', attr: { x: 0, y: 0, width: m, height: u, fill: 'rgba(0,0,0,0.2)', stroke: 'none' }, container: n, component: s, label: 'rect' }), g.unclick(n.hide), g.show().toFront().attr('cursor', a ? _lib.POINTER : 'default'), a && g.click(s._hideChartMessage, s), s.addGraphicalElement('messageVeil', g), l.setStyle(t), r = l.getSmartText(e, m - (o.marginRight || 0) - (o.marginLeft || 0), u - (o.marginTop || 0) - (o.marginBotton || 0)), p = c.setAnimation({ el: p || 'text', attr: { "font-size": t.fontSize, "font-family": t.fontFamily, fill: t.color, text: r.text, "line-height": 14, x: m / 2, y: u / 2 }, container: n, component: s, label: 'text' }), p.attr('cursor', a ? _lib.POINTER : 'default')[a ? 'click' : 'unclick'](s._hideChartMessage, s).show().toFront(), s.addGraphicalElement('messageText', p);
  }scheduleResize(e) {
    var t,
        a = this,
        n = a.ref,
        i = a.apiInstance;n && i.addJob('resizeScheduled', function () {
      t = (0, _lib.normalizeCSSDimension)(e.width, e.height, n), 'undefined' != typeof e.width && (n.style.width = t.width), 'undefined' !== e.height && (n.style.height = t.height), a._resize();
    }, _schedular.priorityList.instant);
  }
}FusionCharts.id = 'FusionCharts', FusionCharts.options = { html5ScriptNameSuffix: '.js', html5ScriptNamePrefix: 'fusioncharts.', scriptBaseUri: function () {
    var e = getScriptBaseUri(SCRIPT_NAME_RE);return 'undefined' == typeof e ? ((0, _eventApi.raiseError)(FusionCharts, '1603111624', 'run', '>GenericRuntime~scriptBaseUri', 'Unable to locate FusionCharts script source location (URL).'), '') : e;
  }(), creditLabel: 'undefined' == typeof FC_LICENSED ? void 0 : !FC_LICENSED }, 'undefined' != typeof __webpack_public_path__ && (__webpack_public_path__ = FusionCharts.getScriptBaseURI()), FusionCharts.version = _package.version.split(/[\.\-]/g), FusionCharts.items = {}, (0, _eventApi.setRootSender)(FusionCharts), isReady = !0, setTimeout(() => {
  let e = isReady;isReady = !0, readyNotified = !0, (0, _eventApi.triggerEvent)('ready', FusionCharts, { version: FusionCharts.version, now: !e }), readyNow = !e;
}, 1), FusionCharts.addEventListener('dependencyAdded', function (t, e) {
  if ('maps' === e.type) {
    let t = {};t[e.name] = ['fusioncharts.maps.js'], FusionCharts.getDep('dependency') || FusionCharts.addDep({ name: 'dependency', extension: t });
  }
}), FusionCharts.addEventListener('beforeInitialize', function (t) {
  var e,
      a,
      n = t.sender,
      i = n.options.events;if (i) for (e in i) 'function' == typeof i[e] && n.addEventListener(e, i[e]);for (a in n.options.renderer = 'javascript', _rendererEvents2.default) n.addEventListener(a, _rendererEvents2.default[a]);
}), FusionCharts.addEventListener('beforeInitialize', function (e) {
  var t = e.sender,
      a = t.options,
      n = t.args.dataSource,
      i = t.args.dataFormat;if (delete _updater.dataStore[t.id], _updater.cache[t.id] = {}, 'undefined' != typeof n && null !== n) {
    if (t.__state.dataSetDuringConstruction = !0, 'string' != typeof i) switch (typeof n) {case 'function':
        n = a.dataSource = n.call(t, a.dataConfiguration), t.args.dataFormat = 'JSON';break;case 'string':
        t.args.dataFormat = /^\s*?\{[\s\S]*\}\s*?$/g.test(i) ? 'JSON' : 'XML';break;case 'object':
        t.args.dataFormat = 'JSON';}i && i.toString && (t.__state.dataFetchDuringConstruction = URL_RE.test(i.toString())), t.setChartData(n, i, void 0, void 0, !0);
  } else t.__state.dataSetDuringConstruction = !1, (0, _eventApi.raiseWarning)(t, '1810131922A', 'param', ':dataHandler~event:beforeInitialize', 'Data source was not defined during construction, hence set to blank renderer default - json'), t.setChartData('', NATIVE_FORMAT, void 0, void 0, !0), t.__state.dataAvailable = !1;
}), FusionCharts.addEventListener('dataUpdated', function (e, t) {
  var a = e.sender,
      n = a.__state;n.rendering && (n.dataFetchDuringConstruction || n.updatePending) && (delete n.dataFetchDuringConstruction, delete n.updatePending, a.update(t));
}), FusionCharts.addEventListener(['rendered', 'dataloaderror', 'nodatatodisplay', 'rendercancelled'], function (t, e) {
  var a = t.sender;a instanceof FusionCharts && a.__state && a.__state.rendering && ((0, _eventApi.triggerEvent)('internal.rendered', a, e), delete a.__state.rendering);
}), isReady && !readyNotified && (readyNotified = !0, (0, _eventApi.triggerEvent)('ready', FusionCharts, { version: FusionCharts.version, now: readyNow })), FusionCharts.addEventListener('initialized', slHandler), FusionCharts.addDep(_fileStore2.default), FusionCharts.addDep(_redraphael2.default), FusionCharts.addDep(_tooltipAdapter2.default), FusionCharts.addDep(_redraphael4.default), FusionCharts.addDep(_jsonTranscoder2.default), FusionCharts.addDep(_redraphael6.default), FusionCharts.addDep(_basechart2.default);exports.default = FusionCharts;
},{"../_internal/lib/lib":23,"../_internal/lib/lib-graphics":24,"../_internal/misc/event-api":25,"../../../package.json":18,"../_internal/dependency-manager":20,"../_internal/misc/updater":26,"../_internal/misc/renderer-events":27,"../_internal/misc/create-chart":28,"../_internal/vendors/fusioncharts-smartlabel/src/SmartlabelManager":46,"../_internal/schedular":21,"../_internal/misc/file-store":29,"../_internal/misc/global-policies":30,"../_internal/components/numberformatter":31,"../_internal/redraphael/redraphael":32,"../_internal/redraphael/redraphael.svg":33,"../_internal/transcoder/json-transcoder":34,"../_internal/redraphael/redraphael.ext":35,"../viz/basechart":22,"../_internal/misc/tooltip-adapter":36,"_bundle_loader":56,"../maps":[["maps.0224e8b0.js",59],"maps.0224e8b0.map",59]}],150:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "initial.canvas.canvas": function () {
    return { "rect.appearing": () => [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'initial' }], "*": null };
  }, "update.canvas.canvas": { "rect.updating": [{ slot: 'middle' }] } };
},{}],129:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _dependencyManager = require('../dependency-manager');

var _canvasAnimation = require('../animation-rules/canvas-animation');

var _canvasAnimation2 = _interopRequireDefault(_canvasAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mathMax = Math.max,
    MAX_MITER_LINEJOIN = 2,
    miterStr = _lib.preDefStr.miterStr,
    NONE = _lib.preDefStr.noneStr,
    ROUND = _lib.preDefStr.ROUND,
    clipSumValue = 'clip-sum-value',
    clipCanvasInitStr = 'clip-canvas-init',
    clipCanvasStr = 'clip-canvas',
    createGroup = function (a, b, c) {
  var d = c.getFromEnv('animationManager');return d.setAnimation({ el: 'group', attr: { name: a }, container: b, component: c, label: 'group' });
};(0, _dependencyManager.addDep)({ name: 'canvasAnimation', type: 'animationRule', extension: _canvasAnimation2.default });class Canvas extends _componentInterface2.default {
  constructor() {
    super();let a = this;a.config = {}, a.config.axes = a.config.axes || [], a.setLinkedItem('axes', []), a.setLinkedItem('primaryAxis', {}), a.addToEnv('canvasConfig', this.config);
  }getName() {
    return 'canvas';
  }getType() {
    return 'canvas';
  }createGroup() {
    var a = this,
        b = a.getFromEnv('chart'),
        c = b.getChildContainer(),
        d = b.getContainer('parentgroup'),
        e = a.getEffectiveDimensions(),
        f = a.getFromEnv('chart-attrib'),
        g = (0, _lib.pluckNumber)(f.areaovercolumns, 1),
        h = a.getChildContainer('axisReferenceVisualsFloor'),
        i = a.getChildContainer('axisReferenceVisualsBottom'),
        j = a.getChildContainer('axisReferenceVisualsMiddle'),
        k = a.getChildContainer('axisReferenceVisualsTop'),
        l = a.getChildContainer('axisReferenceVisualsCeil'),
        m = a.getChildContainer('areaGroup'),
        n = a.getChildContainer('areaShadowGroup'),
        o = a.getChildContainer('columnGroup'),
        p = a.getChildContainer('columnShadowGroup'),
        q = c.plotGroup,
        r = [e.left, e.top, e.width, e.height].toString();a.getContainer('canvasGroup') || a.addContainer('canvasGroup', createGroup('canvas', d, a)).insertAfter(c.backgroundGroup), i || (i = a.addChildContainer('axisReferenceVisualsBottom', createGroup('axisReferenceVisualsBottom', d, a)).insertAfter(c.axisBottomGroup)), h || (h = a.addChildContainer('axisReferenceVisualsFloor', createGroup('axisReferenceVisualsFloor', d, a)).insertAfter(c.axisBottomGroup)), h.attr({ "clip-rect": r }), a.getChildContainer('crossline') || a.addChildContainer('crossline', createGroup('crossline', d, a)).insertBefore(c.plotGroup), a.getChildContainer('crosslineBottom') || a.addChildContainer('crosslineBottom', createGroup('crosslineBottom', d, a)).insertBefore(c.plotGroup), a.getChildContainer('crosslineTop') || a.addChildContainer('crosslineTop', createGroup('crosslineTop', d, a)).insertBefore(c.abovePlotGroup), a.getChildContainer('datalabelsGroup') || a.addChildContainer('datalabelsGroup', createGroup('canvasdatalabel', b.getChildContainer('datalabelsGroup'), a)), j || (j = a.addChildContainer('axisReferenceVisualsMiddle', createGroup('axisReferenceVisualsMiddle', d, a)).insertBefore(c.plotGroup)), j.attr({ "clip-rect": r }), k || (k = a.addChildContainer('axisReferenceVisualsTop', createGroup('axisReferenceVisualsTop', d, a)).insertBefore(c.datalabelsGroup)), a.getChildContainer('quadrantGroup') || a.addChildContainer('quadrantGroup', createGroup('quadrant', d, a)).insertAfter(j), l || a.addChildContainer('axisReferenceVisualsCeil', createGroup('axisReferenceVisualsCeil', d, a)).insertBefore(c.datalabelsGroup), a.getChildContainer('sumLabelsLayer') || a.addChildContainer('sumLabelsLayer', c.sumLabelsLayer), p || (p = a.addChildContainer('columnShadowGroup', createGroup('column-shadow-group', q, a))), o || (o = a.addChildContainer('columnGroup', createGroup('column', q, a))), n || (n = a.addChildContainer('areaShadowGroup', createGroup('area-shadow-group', q, a))), m || (m = a.addChildContainer('areaGroup', createGroup('area', q, a))), g ? (p.insertBefore(n), o.insertBefore(n)) : (n.insertBefore(p), m.insertBefore(p)), a.getChildContainer('lineShadowGroup') || a.addChildContainer('lineShadowGroup', createGroup('line-shadow-group', q, a)), a.getChildContainer('lineGroup') || a.addChildContainer('lineGroup', createGroup('line', q, a)), a.getChildContainer('defaultShadowGroup') || a.addChildContainer('defaultShadowGroup', createGroup('default-shadow-group', q, a)), a.getChildContainer('defaultGroup') || a.addChildContainer('defaultGroup', createGroup('default', q, a));
  }isWithinCanvas(a, b) {
    let c = this,
        d = c.config,
        e = d.canvasLeft,
        f = e + d.canvasWidth,
        g = d.canvasTop,
        h = g + d.canvasHeight;return a >= e && a <= f && b >= g && b <= h;
  }setCanvasPadding() {
    var a,
        b = this,
        c = b.config;a = b.getCanvasPadding(), c.canvasPaddingLeft = mathMax(c.canvasPaddingLeft, a.paddingLeft || 0), c.canvasPaddingRight = mathMax(c.canvasPaddingRight, a.paddingRight || 0), c.canvasPaddingTop = mathMax(c.canvasPaddingTop, a.paddingTop || 0), c.canvasPaddingBottom = mathMax(c.canvasPaddingBottom, a.paddingBottom || 0);
  }getEffectiveDimensions() {
    let a = this,
        b = a.config,
        c = b.canvasLeft,
        d = b.canvasTop,
        e = b.canvasWidth,
        f = b.canvasHeight,
        g = b.canvasPaddingLeft,
        h = b.canvasPaddingTop,
        i = b.canvasPaddingRight,
        j = b.canvasPaddingBottom;return { left: c, top: d, width: e, height: f, paddingLeft: g, paddingTop: h, paddingRight: i, paddingBottom: j };
  }setDimension(a) {
    let b = this,
        c = b.config;c.canvasTop = a.top, c.canvasLeft = a.left, c.canvasWidth = a.width, c.canvasHeight = a.height;
  }getCanvasPadding() {
    var a,
        b,
        c,
        d,
        e = this,
        f = e.getFromEnv('chartConfig'),
        g = f.canvasWidth,
        h = e.config,
        i = h.maxPaddingPercent * g / 100,
        j = { paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 };return e._mapChildren(c => {
      for (b in a = c.getCanvasPadding && c.getCanvasPadding() || {}, a) a.hasOwnProperty(b) && (j[b] = mathMax(a[b], j[b]));
    }), c = j.paddingLeft || 0, d = j.paddingRight || 0, i < c && (j.paddingLeft = i), i < d && (j.paddingRight = i), j;
  }configureAttributes(a = {}) {
    var b,
        c,
        d,
        e,
        f,
        g = this,
        h = g.getLinkedParent(),
        i = g.getFromEnv('chartConfig'),
        j = g.config,
        k = g.getFromEnv('chart-attrib'),
        l = g.getFromEnv('color-manager'),
        m = i.is3D,
        n = m ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D,
        o = j.isRoundEdges = (0, _lib.pluckNumber)(k.useroundedges, 0),
        p = (0, _lib.pluckNumber)(k.showxaxisline, k.showyaxisline, k.showaxislines, 0),
        q = p ? 0 : 1;j.canvasBorderRadius = (0, _lib.pluckNumber)(k.plotborderradius, o ? 2 : 0), d = j.showCanvasBorder = !!(0, _lib.pluckNumber)(k.showcanvasborder, q, b, o ? 0 : 1), f = j.oriCanvasBorderThickness = mathMax((0, _lib.pluckNumber)(k.canvasborderthickness, o ? 0 : (0, _lib.pluckNumber)(h.canvasborderthickness, 2), 0)), b = j.canvasBorderWidth = m ? 0 : d ? f : 0, j.canvasBorderColor = (0, _libGraphics.convertColor)((0, _lib.pluck)(k.canvasbordercolor, l.getColor(_lib.canvasBorderColorStr)), (0, _lib.pluck)(k.canvasborderalpha, l.getColor('canvasBorderAlpha'))), c = j.canBGAlpha = (0, _lib.pluck)(k.canvasbgalpha, l.getColor(_lib.canvasBGAlphaStr)), j.canBGColor = { FCcolor: { color: (0, _lib.pluck)(k.canvasbgcolor, l.getColor(n.canvasBgColor)), alpha: (0, _lib.pluck)(k.canvasbgalpha, 100), angle: (0, _lib.pluck)(k.canvasbgangle, 0), ratio: (0, _lib.pluck)(k.canvasbgratio) } }, e = j.shadow = (0, _lib.pluckNumber)(k.showshadow, o, 0) && o ? { enabled: !0, opacity: c / 100 } : 0, j.shadowOnCanvasFill = e && e.enabled, j.canvasPadding = (0, _lib.pluckNumber)(k.canvaspadding, 0), j.origCanvasTopPad = (0, _lib.pluckNumber)(k.canvastoppadding, 0), j.origCanvasBottomPad = (0, _lib.pluckNumber)(k.canvasbottompadding, 0), j.origCanvasLeftPad = (0, _lib.pluckNumber)(k.canvasleftpadding, 0), j.origCanvasRightPad = (0, _lib.pluckNumber)(k.canvasrightpadding, 0), Object.assign(j, a), g.config.inputComponents = [], g.config.maxPaddingPercent = 12.5, g._mapChildren(a => {
      a.getState('removed') || a.getType && 'dataset' === a.getType() || 'axisRefVisuals' === a.getType() || a.configure && a.configure();
    });
  }disposeAllInputs() {
    this.config.inputComponents.forEach(function (a) {
      a.dispose();
    }), this.config.inputComponents.length = 0;
  }axisExists(a) {
    let b,
        c,
        d = this.getLinkedItem('axes'),
        e = !1;for (b = 0, c = d.length; b < c; b++) if (d[b].axis === a) {
      e = !0;break;
    }return e;
  }attachAxis(a, b, c) {
    var d = this.getLinkedItem('axes'),
        e = b ? 'yAxis' : 'xAxis',
        f = this.getFromEnv(e) || [];return this.axisExists(a) || (d.push({ axis: a, isY: b, config: c || {} }), f.push(a), this.addToEnv(e, f)), this;
  }setPrimaryAxis(a, b) {
    var c = this.getLinkedItem('primaryAxis');c[a] = this.getLinkedItem('axes').find(a => a.axis === b);
  }getAxes() {
    var a;return Object.keys(a = this.getLinkedItem('primaryAxis')).length ? [a.xAxis, a.yAxis] : this.getLinkedItem('axes').slice(0);
  }detachAxis(a, b) {
    var c = this.getLinkedItem('axes'),
        d = 1 / 0;return b ? c.splice(b, 1) : (c.forEach((b, c) => {
      b.axis === a && (d = c);
    }), c.splice(d, 1));
  }preDraw() {
    this._mapChildren(a => {
      !a.getState('removed') && a.preDraw && a.preDraw();
    });
  }draw() {
    this.createGroup(), this.getFromEnv('chart').config.skipCanvasDrawing || this.drawCanvas();
  }drawCanvas() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h = this,
        i = h.getFromEnv('chart'),
        j = i.isBar,
        k = i.getFromEnv('dataSource'),
        l = k.chart,
        m = h.getFromEnv('animationManager'),
        n = i.config,
        o = h.config,
        p = o.clip = {},
        q = i.getChildContainer('plotGroup'),
        r = i.getChildContainer('datalabelsGroup'),
        s = h.getGraphicalElement('canvasBorderElement'),
        t = h.getChildContainer('crosslineTop'),
        u = h.getGraphicalElement('canvasElement'),
        v = o.canvasLeft || (o.canvasLeft = n.canvasLeft),
        w = o.canvasTop || (o.canvasTop = n.canvasTop),
        x = o.canvasWidth || (o.canvasWidth = n.canvasWidth),
        y = o.canvasHeight || (o.canvasHeight = n.canvasHeight),
        z = o.xDepth = n.xDepth || 0,
        A = o.yDepth = n.yDepth || 0,
        B = h.getContainer('canvasGroup'),
        C = h.getChildContainer('quadrantGroup'),
        D = o.canvasBorderRadius,
        E = o.canvasBorderWidth,
        F = .5 * E,
        G = o.canvasBorderColor,
        H = o.canBGColor,
        I = o.canBGAlpha,
        J = o.shadow,
        K = o.showCanvasBG = !!(0, _lib.pluckNumber)(l.showcanvasbg, 1),
        L = o.shadowOnCanvasFill,
        M = o.showCanvasBorder;d = H, e = { x: v - F, y: w - F, width: x + E, height: y + E, r: D, "stroke-width": E, stroke: G, "stroke-linejoin": E > MAX_MITER_LINEJOIN ? ROUND : miterStr }, M ? (s && s.show(), b = m.setAnimation({ el: s || 'rect', component: h, attr: { x: v - F, y: w - F, width: x + E, height: y + E, r: D, "stroke-width": E, stroke: G, "stroke-linejoin": E > MAX_MITER_LINEJOIN ? ROUND : miterStr }, label: 'rect', container: B }).shadow(J), !s && h.addGraphicalElement('canvasBorderElement', b)) : s && (h.removeGraphicalElement(s), m.setAnimation({ el: s, component: h, callback: () => {
        s.hide();
      } })), f = M ? 0 : o.oriCanvasBorderThickness, p[clipCanvasStr] = [mathMax(0, v - z - f), mathMax(0, w - A - f), mathMax(1, x + 2 * z + 2 * f), mathMax(1, y + A + 2 * f)], p[clipSumValue] = [mathMax(0, v - z), j ? w : 0, mathMax(1, j ? n.width - v : x + 2 * z), mathMax(1, j ? y + A : w + y)], p[clipCanvasInitStr] = [mathMax(0, v - z), mathMax(0, w - A), 1, mathMax(1, y + 2 * A)], a = p[clipCanvasStr].slice(0), g = function (a, b) {
      m.setAnimation({ el: a, attr: { "clip-rect": b }, label: 'container', component: h, state: a.attrs['clip-rect'] ? 'updating' : 'appearing' });
    }, g(t, a), n.skipClipping || (g(q, a), g(r, a), g(C, a), g(h.getChildContainer('sumLabelsLayer'), p[clipSumValue])), K ? (e = { x: v, y: w, width: x, height: y, r: D, "stroke-width": 0, stroke: NONE, fill: (0, _lib.toRaphaelColor)(d) }, u && u.show(), c = m.setAnimation({ el: u || 'rect', attr: e, label: 'rect', container: B, component: h }), !u && h.addGraphicalElement('canvasElement', c), L ? c.shadow({ opacity: I / 100 }) : c.shadow(!1)) : u && m.setAnimation({ el: u, component: h, callback: () => {
        u.hide();
      } });
  }
}exports.default = Canvas;
},{"../../core/component-interface":65,"../lib/lib":23,"../lib/lib-graphics":24,"../dependency-manager":20,"../animation-rules/canvas-animation":150}],123:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b;(0, _lib.componentFactory)(a, _canvas2.default, 'canvas', a.config.showVolumeChart ? 2 : 1), b = a.getChildren('canvas');for (let c = 0, d = b.length; c < d; c++) b[c].configure();
};

var _canvas = require('../canvases/canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../canvases/canvas":129,"../lib/lib":23}],176:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "initial.caption.caption": () => ({ "text.appearing": () => [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'initial' }] }) };
},{}],143:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _dependencyManager = require('../dependency-manager');

var _captionAnimation = require('../animation-rules/caption-animation');

var _captionAnimation2 = _interopRequireDefault(_captionAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mathMax = Math.max,
    mathMin = Math.min,
    mathCeil = Math.ceil,
    PXSTRING = 'px',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_CENTER = 'center',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_MIDDLE = 'middle',
    POSITION_START = 'start',
    POSITION_END = 'end';(0, _dependencyManager.addDep)({ name: 'captionAnimation', type: 'animationRule', extension: _captionAnimation2.default });class Caption extends _componentInterface2.default {
  getType() {
    return 'caption';
  }getName() {
    return 'caption';
  }configure() {
    var a = this.getFromEnv('chart'),
        b = a.getFromEnv('chart-attrib'),
        c = this,
        d = c.config || {},
        e = a.getFromEnv('style'),
        f = e.outCanfontFamily,
        g = e.outCancolor,
        h = e.fontSize,
        i = ['top', 'center'];switch (c.config.text = (0, _lib.parseUnsafeString)(b.caption), d.style = { fontFamily: (0, _lib.pluck)(b.captionfont, f), color: (0, _libGraphics.convertColor)((0, _lib.pluck)(b.captionfontcolor, g).replace(/^#? ([a-f0-9]+)/ig, '#$1')), fontSize: (0, _lib.pluckNumber)(b.captionfontsize, h + 3) + PXSTRING, fontWeight: 0 === (0, _lib.pluckNumber)(b.captionfontbold) ? _lib.NORMAL : _lib.BOLD }, d.align || (d.align = ''), d.align = (0, _lib.pluck)(b.captionposition, b.captionalignment, POSITION_CENTER), d.align && (i = d.align.split('-'), i[0] && (i[0] = i[0].toLowerCase()), i[1] && (i[1] = i[1].toLowerCase()), 2 > i.length && (i[1] = i[0])), i[0]) {case POSITION_TOP:
        d.isOnTop = 1;break;case POSITION_BOTTOM:
        d.isOnTop = 0;break;default:
        d.isOnTop = (0, _lib.pluckNumber)(b.captionontop, 1);}switch (i[1]) {case POSITION_RIGHT:
        d.align = POSITION_END;break;case POSITION_LEFT:
        d.align = POSITION_START;break;default:
        d.align = POSITION_MIDDLE;}d.isOnLeft = !(0, _lib.pluckNumber)(b.captiononright, 0), d.captionPosition = (0, _lib.getValidValue)(b.captionposition, POSITION_TOP).toLowerCase(), d.alignWithCanvas = (0, _lib.pluckNumber)(b.aligncaptionwithcanvas, a.config.alignCaptionWithCanvas, 1), d.horizontalPadding = (0, _lib.pluckNumber)(b.captionhorizontalpadding, d.alignWithCanvas ? 0 : 15), d.drawCaption = !0, (0, _lib.setLineHeight)(d.style);
  }allocatePosition() {
    var a = this,
        b = a.getFromEnv('chart');b._manageCaptionPosition();
  }draw() {
    var a,
        b,
        c = this,
        d = this.getFromEnv('chart'),
        e = d.config,
        f = d.getFromEnv('animationManager'),
        g = d.config.textDirection,
        h = d.getChildContainer().captionGroup,
        i = d.getFromEnv('smartLabel'),
        j = c.getGraphicalElement('captionElement'),
        k = c.getFromEnv('toolTipController'),
        l = c.config,
        m = l.style,
        n = l.text,
        o = l.x,
        p = l.align;n ? (a = { text: l.text, fill: m.color, x: o, y: l.y, "text-anchor": p || POSITION_MIDDLE, "vertical-align": l.verticalAlign || POSITION_TOP, visibility: l.drawCaption ? _lib.visibleStr : _lib.hiddenStr, direction: g }, j = c.addGraphicalElement('captionElement', f.setAnimation({ el: j || 'text', attr: a, container: h, state: b, component: c, label: 'text' })), j.css(m), e.showtooltip ? k.enableToolTip(j, l.originalText) : k.disableToolTip(j), i && (i.useEllipsesOnOverflow(e.useEllipsesWhenOverflow), i.setStyle(m))) : j && f.setAnimation({ el: j, component: c, callback: function () {
        this.hide();
      }, doNotRemove: !0 }), e.savedCaption = j;
  }manageSpace(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = this.getFromEnv('chart'),
        i = h.config,
        j = h.getChildren('caption')[0],
        k = h.getChildren('subCaption')[0],
        l = j.config,
        m = k.config,
        n = h.getFromEnv('dataSource').chart,
        o = h.getFromEnv('smartLabel'),
        p = a,
        q = (0, _lib.parseUnsafeString)(n.caption),
        r = (0, _lib.parseUnsafeString)(n.subcaption),
        s = (0, _lib.pluckNumber)(n.captionpadding, 10),
        t = s,
        u = !1,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = h.getChildren('canvas'),
        B = mathMax(A && A[0].config.canvasBorderThickness, 0),
        C = 0,
        D = 0;return 3 < p ? (s < B && (s = B + 2), q !== _lib.BLANKSTRING && (e = l.style, y = mathCeil((0, _lib.pluckNumber)(parseFloat(e.fontHeight, 10), parseFloat(e.lineHeight, 10), 12))), r !== _lib.BLANKSTRING && (g = m.style, z = (0, _lib.pluckNumber)(parseInt(g.fontHeight, 10), parseInt(g.lineHeight, 10), 12)), (0 < y || 0 < z) && (p = mathMax(p, 0), v = y + z + s, v > p ? (w = p - v, u = !0, w < s ? s = mathMax(w, 5) : (w -= s, s = 0, z > w ? (x = z - w + 10, z = 0, m._originalText = m.text, m.text = _lib.BLANKSTRING) : (w -= z, z = 0, y > w && (x = y - w)))) : x = p - v, o.useEllipsesOnOverflow(i.useEllipsesWhenOverflow), 0 < y && (o.setStyle(e), y += x, c = o.getSmartText(q, b, y), x = y - c.height, l.height = y = c.height, l.text = c.text, l.originalText = !!c.tooltext && c.tooltext, C = c.width), 0 < z && (o.setStyle(g), z += x, d = o.getSmartText(r, b, z), x = z - d.height, z = d.height, m.text = d.text, m.height = d.height, m.originalText = !!d.tooltext && d.tooltext, D = d.width), u && 0 < x && (s += mathMin(t - s, x)), l.captionPadding = s, l.height = y, l.width = C, m.width = D, m.height = z, v = y + z + s), v > i.canvasHeight ? (v = 0, l.drawCaption = !1) : l.drawCaption = !0, f = l.isOnTop ? { top: v } : { bottom: v, top: 5 }) : (f = { bottom: 0, top: 0 }, l.drawCaption = !1), f;
  }setDimention(a) {
    let b = this,
        c = b.config;c.x = a.x, c.y = a.y;
  }
}exports.default = Caption;
},{"../lib/lib":23,"../lib/lib-graphics":24,"../../core/component-interface":65,"../dependency-manager":20,"../animation-rules/caption-animation":176}],172:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _captionAnimation = require('./caption-animation');

var _captionAnimation2 = _interopRequireDefault(_captionAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { "initial.caption.subCaption": _captionAnimation2.default['initial.caption.caption'] };
},{"./caption-animation":176}],144:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _caption = require('./caption');

var _caption2 = _interopRequireDefault(_caption);

var _dependencyManager = require('../dependency-manager');

var _subcaptionAnimation = require('../animation-rules/subcaption-animation');

var _subcaptionAnimation2 = _interopRequireDefault(_subcaptionAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mathMax = Math.max,
    PXSTRING = 'px',
    POSITION_CENTER = 'center',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_MIDDLE = 'middle';(0, _dependencyManager.addDep)({ name: 'subcaptionAnimation', type: 'animationRule', extension: _subcaptionAnimation2.default });class SubCaption extends _caption2.default {
  getType() {
    return 'caption';
  }getName() {
    return 'subCaption';
  }configure() {
    let a = this,
        b = a.getFromEnv('chart'),
        c = b.getFromEnv('chart-attrib'),
        d = a.config || {},
        e = b.getFromEnv('style'),
        f = b.getChildren('caption')[0],
        g = e.outCanfontFamily,
        h = e.outCancolor,
        i = e.fontSize,
        j = ['top', 'center'];switch (d.text = (0, _lib.parseUnsafeString)(c.subcaption), d.align || (d.align = ''), d.align = (0, _lib.pluck)(c.captionposition, c.captionalignment, POSITION_CENTER), f.config.align && (j = f.config.align.split('-'), j[0] && (j[0] = j[0].toLowerCase()), j[1] && (j[1] = j[1].toLowerCase()), 2 > j.length && (j[1] = j[0])), j[0]) {case POSITION_TOP:
        d.isOnTop = 1;break;case POSITION_BOTTOM:
        d.isOnTop = 0;break;default:
        d.isOnTop = (0, _lib.pluckNumber)(c.captionontop, 1);}d.alignWithCanvas = (0, _lib.pluckNumber)(b.aligncaptionwithcanvas, c.aligncaptionwithcanvas, 1), d.horizontalPadding = (0, _lib.pluckNumber)(c.captionhorizontalpadding, f.config.alignWithCanvas ? 0 : 15), d.style = { fontFamily: (0, _lib.pluck)(c.subcaptionfont, c.captionfont, g), color: (0, _libGraphics.convertColor)((0, _lib.pluck)(c.subcaptionfontcolor, c.captionfontcolor, h).replace(/^#? ([a-f0-9]+)/ig, '#$1')), fontSize: (0, _lib.pluckNumber)(c.subcaptionfontsize, (0, _lib.pluckNumber)(mathMax((0, _lib.pluckNumber)(c.captionfontsize) - 3, -1), i) + (0, _lib.pluckNumber)(b.subTitleFontSizeExtender, 1)) + PXSTRING, fontWeight: 0 === (0, _lib.pluckNumber)(c.subcaptionfontbold, b.subTitleFontWeight, c.captionfontbold) ? _lib.NORMAL : _lib.BOLD }, (0, _lib.setLineHeight)(d.style);
  }draw() {
    let a,
        b,
        c = this,
        d = c.getFromEnv('chart'),
        e = d.getFromEnv('animationManager'),
        f = d.getChildren('caption')[0],
        g = d.config,
        h = g.textDirection,
        i = d.getChildContainer().captionGroup,
        j = c.getGraphicalElement('subCaptionElement'),
        k = c.getFromEnv('toolTipController'),
        l = c.config,
        m = l.style,
        n = l.text,
        o = f.config.align;n ? (a = { text: l.text, fill: m.color, x: l.x, y: l.y, "text-anchor": o || POSITION_MIDDLE, "vertical-align": POSITION_TOP, direction: h, visibility: f.config.drawCaption ? _lib.visibleStr : _lib.hiddenStr }, j = c.addGraphicalElement('subCaptionElement', e.setAnimation({ el: j || 'text', attr: a, container: i, state: b, component: c, hookFn: function () {
        this.css(m);
      }, label: 'text' })), j.css(m), g.showtooltip ? k.enableToolTip(j, l.originalText) : k.disableToolTip(j)) : j && c.removeGraphicalElement(j), g.savedSubCaption = j;
  }setDimention(a) {
    this.config.x = a.x, this.config.y = a.y;
  }
}exports.default = SubCaption;
},{"../lib/lib":23,"../lib/lib-graphics":24,"./caption":143,"../dependency-manager":20,"../animation-rules/subcaption-animation":172}],173:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "initial.background.background": () => ({ "rect.appearing": () => [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'initial' }] }) };
},{}],145:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _dependencyManager = require('../dependency-manager');

var _backgroundAnimation = require('../animation-rules/background-animation');

var _backgroundAnimation2 = _interopRequireDefault(_backgroundAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let noneStr,
    stringConstants = { BACKGROUNDLOADED: 'BackgroundLoaded', BACKGROUNDLOADERROR: 'BackgroundLoadError', clipRectStr: 'clip-rect' },
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_MIDDLE = 'middle',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    TILE = 'tile',
    FILL = 'fill',
    FIT = 'fit',
    DASH_DEF = noneStr = 'none',
    getHandler = function (a) {
  let b = a.config;return { load: function () {
      let { bgImageDisplayMode: c, bgImageVAlign: d, bgImageHAlign: e, bgImageScale: f, bgSWFAlpha: g, bgSWF: h } = b,
          i = a.getGraphicalElement('backgroundImage'),
          j = i._.RefImg,
          k = a.getFromEnv('chart');k.fireChartInstanceEvent(stringConstants.BACKGROUNDLOADED, { url: h, bgImageAlpha: g, bgImageDisplayMode: c, bgImageVAlign: d, bgImageHAlign: e, bgImageScale: f, imageheight: j.height, imagewidth: j.width });
    }, error: function (c) {
      let { bgImageDisplayMode: d, bgImageVAlign: e, bgImageHAlign: f, bgImageScale: g, bgSWFAlpha: h, bgSWF: i } = b,
          j = a.getFromEnv('chart');j.fireChartInstanceEvent(stringConstants.BACKGROUNDLOADERROR, { url: i, bgImageAlpha: h, error: c, bgImageDisplayMode: d, bgImageVAlign: e, bgImageHAlign: f, bgImageScale: g });
    } };
},
    COMMA = ',',
    BLANKSTRING = '';(0, _dependencyManager.addDep)({ name: 'backgroundAnimation', type: 'animationRule', extension: _backgroundAnimation2.default });class Background extends _componentInterface2.default {
  constructor() {
    super(), this.config.handler = getHandler(this);
  }getName() {
    return 'background';
  }getType() {
    return 'background';
  }_getBackgroundCosmetics() {
    var a = this,
        b = a.getFromEnv('chart-attrib'),
        c = a.getFromEnv('color-manager'),
        d = a.getFromEnv('chartConfig').is3D,
        e = d ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D;return { FCcolor: { color: (0, _lib.pluck)(b.bgcolor, c.getColor(e.bgColor)), alpha: (0, _lib.pluck)(b.bgalpha, c.getColor(e.bgAlpha)), angle: (0, _lib.pluck)(b.bgangle, c.getColor(e.bgAngle)), ratio: (0, _lib.pluck)(b.bgratio, c.getColor(e.bgRatio)) } };
  }configureAttributes() {
    var a,
        b,
        c,
        d,
        e = this,
        f = e.config,
        g = e.getFromEnv('chart-attrib'),
        h = e.getFromEnv('chartConfig'),
        i = h.is3D,
        j = e.getFromEnv('color-manager'),
        k = f.bgImageDisplayMode = (0, _lib.pluck)(g.bgimagedisplaymode, noneStr).toLowerCase();f.bgSWF = (0, _lib.pluck)(g.bgimage, g.bgswf), f.bgSWFAlpha = (0, _lib.pluckNumber)(g.bgimagealpha, g.bgswfalpha, 100), b = f.showBorder = (0, _lib.pluckNumber)(g.showborder, h.showBorder, i ? 0 : 1), f.borderWidth = Math.max(b ? (0, _lib.pluckNumber)(g.borderthickness, 1) : 0, 0), f.borderRadius = (0, _lib.pluckNumber)(g.borderradius, 0), f.borderDashStyle = (0, _lib.pluckNumber)(g.borderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(g.borderdashlen, 4), (0, _lib.pluckNumber)(g.borderdashgap, 2), a) : DASH_DEF, f.borderAlpha = (0, _lib.pluck)(g.borderalpha, i ? '100' : j && j.getColor('borderAlpha')), f.borderColor = (0, _libGraphics.convertColor)((0, _lib.pluck)(g.bordercolor, i ? '#666666' : j && j.getColor('borderColor')), f.borderAlpha), f.bgImageVAlign = c = (0, _lib.getValidValue)(g.bgimagevalign, BLANKSTRING).toLowerCase(), f.bgImageHAlign = d = (g.bgimagehalign || BLANKSTRING).toLowerCase(), f.bgImageScale = (0, _lib.pluckNumber)(g.bgimagescale, 100), f.containerBackgroundColor = (0, _lib.getContainerBackgroundColor)(e.getFromEnv('chartInstance')), f.backgroundColor = e._getBackgroundCosmetics(), k === TILE || k === FILL || k === FIT ? (c !== POSITION_TOP && c !== POSITION_MIDDLE && c !== POSITION_BOTTOM && (f.bgImageVAlign = POSITION_MIDDLE), d !== POSITION_LEFT && d !== POSITION_MIDDLE && d !== POSITION_RIGHT && (f.bgImageHAlign = POSITION_MIDDLE)) : (c !== POSITION_TOP && c !== POSITION_MIDDLE && c !== POSITION_BOTTOM && (f.bgImageVAlign = POSITION_TOP), d !== POSITION_LEFT && d !== POSITION_MIDDLE && d !== POSITION_RIGHT && (f.bgImageHAlign = POSITION_LEFT));
  }draw() {
    var a,
        b,
        c,
        d,
        e = this,
        f = e.getFromEnv('paper'),
        g = e.getGraphicalElement('backgroundElement'),
        h = e.getGraphicalElement('borderElement'),
        i = e.config,
        j = e.getFromEnv('chart'),
        k = e.getFromEnv('chartConfig'),
        l = i.backgroundColor,
        m = e.getFromEnv('animationManager'),
        n = e.getGraphicalElement('backgroundImage'),
        o = i.bgSWF,
        p = j.getChildContainer('backgroundGroup'),
        q = k.width,
        r = k.height,
        s = i.borderWidth || 0,
        t = i.borderRadius,
        u = i.borderDashStyle,
        v = i.borderColor,
        w = i.bgSWFAlpha,
        x = i.bgImageDisplayMode,
        y = i.bgImageVAlign,
        z = i.bgImageHAlign,
        A = i.bgImageScale;f.canvas.style.backgroundColor = i.containerBackgroundColor, c = { x: s, y: s, width: q - 2 * s, height: r - 2 * s, stroke: _lib.preDefStr.noneStr, fill: (0, _lib.toRaphaelColor)(l) }, a = m.setAnimation({ el: g || 'rect', attr: c, container: p, component: e, label: 'rect' }), a.show(), g || e.addGraphicalElement('backgroundElement', a), c = { x: s / 2, y: s / 2, width: q - s, height: r - s, stroke: v, "stroke-width": s, "stroke-dasharray": u, fill: _lib.preDefStr.noneStr, r: t || 0 }, b = m.setAnimation({ el: h || 'rect', attr: c, container: p, component: e, label: 'rect' }), b.show(), h || e.addGraphicalElement('borderElement', b), o && !e.getState('removed') ? (d = m.setAnimation({ el: n || 'imagegrid', attr: { imagegrid: [x, y, z, A, s, q, r], src: o, opacity: .01 * w, "clip-rect": s + COMMA + s + COMMA + (q - 2 * s) + COMMA + (r - 2 * s) }, container: p, component: e, label: 'imagegrid' }), d.show(), !n && (e.addGraphicalElement('backgroundImage', d), d.on('load', i.handler.load), d.on('error', i.handler.error))) : n && e.removeGraphicalElement(n);
  }
}exports.default = Background;
},{"../../core/component-interface":65,"../lib/lib":23,"../lib/lib-graphics":24,"../dependency-manager":20,"../animation-rules/background-animation":173}],120:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const paletteColorsArr = ['AFD8F8', 'F6BD0F', '8BBA00', 'FF8E46', '008E8E', 'D64646', '8E468E', '588526', 'B3AA00', '008ED6', '9D080D', 'A186BE', 'CC6600', 'FDC689', 'ABA000', 'F26D7D', 'FFF200', '0054A6', 'F7941C', 'CC3300', '006600', '663300', '6DCFF6'],
      BGRATIOSTRING = '0,100',
      COLOR_WHITE = 'FFFFFF',
      HUNDREDSTRING = '100',
      BLANK = '',
      verticalRotation = 270,
      OPAQUE = 100;let paletteColors = exports.paletteColors = [paletteColorsArr, paletteColorsArr, paletteColorsArr, paletteColorsArr, paletteColorsArr],
    bgColor = exports.bgColor = ['CBCBCB,E9E9E9', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'],
    bgAngle = exports.bgAngle = [270, 270, 270, 270, 270],
    bgRatio = exports.bgRatio = ['0,100', '0,100', '0,100', '0,100', '0,100'],
    bgAlpha = exports.bgAlpha = ['50,50', '60,50', '40,20', '20,10', '30,30'],
    canvasBgColor = exports.canvasBgColor = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    canvasBgAngle = exports.canvasBgAngle = [0, 0, 0, 0, 0],
    canvasBgAlpha = exports.canvasBgAlpha = ['100', '100', '100', '100', '100'],
    canvasBgRatio = exports.canvasBgRatio = ['', '', '', '', ''],
    canvasBorderColor = exports.canvasBorderColor = ['545454', '545454', '415D6F', '845001', '68001B'],
    canvasBorderAlpha = exports.canvasBorderAlpha = [100, 100, 100, 90, 100],
    showShadow = exports.showShadow = [0, 1, 1, 1, 1],
    divLineColor = exports.divLineColor = ['717170', '7B7D6D', '92CDD6', '965B01', '68001B'],
    divLineAlpha = exports.divLineAlpha = [40, 45, 65, 40, 30],
    altHGridColor = exports.altHGridColor = ['EEEEEE', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'],
    altHGridAlpha = exports.altHGridAlpha = [50, 35, 10, 20, 15],
    altVGridColor = exports.altVGridColor = ['767575', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'],
    altVGridAlpha = exports.altVGridAlpha = [10, 20, 10, 15, 10],
    anchorBgColor = exports.anchorBgColor = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    toolTipBgColor = exports.toolTipBgColor = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    toolTipBorderColor = exports.toolTipBorderColor = ['545454', '545454', '415D6F', '845001', '68001B'],
    baseFontColor = exports.baseFontColor = ['555555', '60634E', '025B6A', 'A15E01', '68001B'],
    borderColor = exports.borderColor = ['767575', '545454', '415D6F', '845001', '68001B'],
    borderAlpha = exports.borderAlpha = [50, 50, 50, 50, 50],
    legendBgColor = exports.legendBgColor = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    legendBorderColor = exports.legendBorderColor = ['545454', '545454', '415D6F', '845001', 'D55979'],
    plotGradientColor = exports.plotGradientColor = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    plotBorderColor = exports.plotBorderColor = ['333333', '8A8A8A', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    plotFillColor = exports.plotFillColor = ['767575', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'],
    bgColor3D = exports.bgColor3D = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    bgAlpha3D = exports.bgAlpha3D = ['100', '100', '100', '100', '100'],
    bgAngle3D = exports.bgAngle3D = [90, 90, 90, 90, 90],
    bgRatio3D = exports.bgRatio3D = ['', '', '', '', ''],
    canvasBgColor3D = exports.canvasBgColor3D = ['DDE3D5', 'D8D8D7', 'EEDFCA', 'CFD2D8', 'FEE8E0'],
    canvasBaseColor3D = exports.canvasBaseColor3D = ['ACBB99', 'BCBCBD', 'C8A06C', '96A4AF', 'FAC7BC'],
    divLineColor3D = exports.divLineColor3D = ['ACBB99', 'A4A4A4', 'BE9B6B', '7C8995', 'D49B8B'],
    divLineAlpha3D = exports.divLineAlpha3D = [100, 100, 100, 100, 100],
    legendBgColor3D = exports.legendBgColor3D = ['F0F3ED', 'F3F3F3', 'F7F0E8', 'EEF0F2', 'FEF8F5'],
    legendBorderColor3D = exports.legendBorderColor3D = ['C6CFB8', 'C8C8C8', 'DFC29C', 'CFD5DA', 'FAD1C7'],
    toolTipbgColor3D = exports.toolTipbgColor3D = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
    toolTipBorderColor3D = exports.toolTipBorderColor3D = ['49563A', '666666', '49351D', '576373', '681C09'],
    baseFontColor3D = exports.baseFontColor3D = ['49563A', '4A4A4A', '49351D', '48505A', '681C09'],
    anchorBgColor3D = exports.anchorBgColor3D = ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'];
},{}],146:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _chartPaletteColors = require('./chart-palette-colors');

var defaultPaletteOptions = _interopRequireWildcard(_chartPaletteColors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function parseColorMix(a, b) {
  var c,
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      m,
      n,
      o,
      p = [],
      q = ColorManager.stringConstants;if (b = b.replace(/\s/g, q.BLANK), b = b.toLowerCase(), b === q.BLANK || null === b || 'undefined' == typeof b) p = [a];else for (e = b.split(q.COMMASTRING), f = a.split(q.COMMASTRING), g = Math.max(e.length, f.length, 1), h = e[0], k = f[0], n = /[\{\}]/ig, o = 0; o < g; o++) l = (e[o] || h).replace(n, ''), m = f[o] || k, 'color' === l ? p.push(m) : 'light' === l.substr(0, 5) ? (c = l.indexOf('-'), d = -1 === c ? 1 : l.substr(c + 1, l.length - c), d = 100 - d, p.push((0, _libGraphics.getLightColor)(m, d))) : 'dark' === l.substr(0, 4) ? (c = l.indexOf('-'), d = -1 === c ? 1 : l.substr(c + 1, l.length - c), d = 100 - d, p.push((0, _libGraphics.getDarkColor)(m, d))) : p.push(l);return p;
}function parseAlphaList(a, b) {
  var c,
      d,
      e = a.toString().split(ColorManager.stringConstants.COMMASTRING),
      f = [],
      g = 100;for (d = 0; d < b; d++) c = (0, _lib.pluckNumber)(e[d]), ColorManager.defined(c) && (g = c), f[d] = g;return f.join();
}function parseRatioList(a, b) {
  var c,
      d,
      e = a.split(ColorManager.stringConstants.COMMASTRING),
      f = [],
      g = 0;for (d = 0; d < b; d++) c = e[d], c = isNaN(c) || 'undefined' == typeof c ? 0 : Math.abs(+c), c = 100 < c ? 100 : c, f[d] = c, g += c;if (g = 100 < g ? 100 : g, e.length < b) for (d = e.length; d < b; d++) f[d] = (100 - g) / (b - e.length);return f[-1] = 0, f.join();
}class ColorManager {
  constructor(a) {
    this.parseColorMix = parseColorMix, this.parseAlphaList = parseAlphaList, this.parseRatioList = parseRatioList, this.linkedItems = { iapi: a }, this.configure(), this.paletteColors = ['AFD8F8', 'F6BD0F', '8BBA00', 'FF8E46', '008E8E', 'D64646', '8E468E', '588526', 'B3AA00', '008ED6', '9D080D', 'A186BE', 'CC6600', 'FDC689', 'ABA000', 'F26D7D', 'FFF200', '0054A6', 'F7941C', 'CC3300', '006600', '663300', '6DCFF6'];
  }configure() {
    var a = this,
        b = ColorManager.stringConstants,
        c = a.linkedItems.iapi,
        d = c.getFromEnv('dataSource'),
        e = d.chart || {},
        f = a.paletteOptions = (0, _lib.extend2)((0, _lib.extend2)({}, defaultPaletteOptions), c.defaultPaletteOptions || {}, !1, !0),
        g = a.themeEnabled = e.palettethemecolor;a.paletteIndex = (0 < e.palette && 6 > e.palette ? e.palette : (0, _lib.pluckNumber)(c.paletteIndex, 1)) - 1, a.iterator = 0, a.paletteColors = f.paletteColors[a.themeEnabled ? 0 : a.paletteIndex], ColorManager.defined(e.palettecolors) && e.palettecolors !== b.BLANK && (a.paletteColors = e.palettecolors.split(/\s*\,\s*/)), a.paletteLen = a.paletteColors.length, a.useFlatColors = (0, _lib.pluckNumber)(e.useflatdataplotcolor, c.useFlatColor, 0), g && (a.paletteIndex = 5, f.bgColor[5] = (0, _libGraphics.getLightColor)(g, 35) + b.COMMASTRING + (0, _libGraphics.getLightColor)(g, 10), f.bgAngle[5] = 270, f.bgRatio[5] = b.BGRATIOSTRING, f.bgAlpha[5] = '50,50', f.canvasBgColor[5] = b.COLOR_WHITE, f.canvasBgAngle[5] = 0, f.canvasBgAlpha[5] = b.HUNDREDSTRING, f.canvasBgRatio[5] = b.BLANK, f.canvasBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 80), f.canvasBorderAlpha[5] = 100, f.showShadow[5] = 1, f.divLineColor[5] = (0, _libGraphics.getDarkColor)(g, 20), f.divLineAlpha[5] = 40, f.altHGridColor[5] = (0, _libGraphics.getLightColor)(g, 20), f.altHGridAlpha[5] = 15, f.altVGridColor[5] = (0, _libGraphics.getLightColor)(g, 80), f.altVGridAlpha[5] = 10, f.anchorBgColor[5] = b.COLOR_WHITE, f.toolTipBgColor[5] = b.COLOR_WHITE, f.toolTipBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 80), f.baseFontColor[5] = g.split && g.split(b.COMMASTRING)[0], f.borderColor[5] = (0, _libGraphics.getDarkColor)(g, 60), f.borderAlpha[5] = 50, f.legendBgColor[5] = b.COLOR_WHITE, f.legendBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 80), f.plotGradientColor[5] = b.COLOR_WHITE, f.plotBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 85), f.plotFillColor[5] = (0, _libGraphics.getDarkColor)(g, 85), f.bgColor3D[5] = b.COLOR_WHITE, f.bgAlpha3D[5] = b.HUNDREDSTRING, f.bgAngle3D[5] = 90, f.bgRatio3D[5] = b.BLANK, f.canvasBgColor3D[5] = (0, _libGraphics.getLightColor)(g, 20), f.canvasBaseColor3D[5] = (0, _libGraphics.getLightColor)(g, 40), f.divLineColor3D[5] = (0, _libGraphics.getDarkColor)(g, 20), f.divLineAlpha3D[5] = 40, f.legendBgColor3D[5] = b.COLOR_WHITE, f.legendBorderColor3D[5] = (0, _libGraphics.getDarkColor)(g, 80), f.toolTipbgColor3D[5] = b.COLOR_WHITE, f.toolTipBorderColor3D[5] = (0, _libGraphics.getDarkColor)(g, 80), f.baseFontColor3D[5] = g.split && g.split(b.COMMASTRING)[0], f.anchorBgColor3D[5] = b.COLOR_WHITE, f.tickColor && (f.tickColor[5] = (0, _libGraphics.getDarkColor)(g, 90)), f.trendDarkColor && (f.trendDarkColor[5] = (0, _libGraphics.getDarkColor)(g, 90)), f.trendLightColor && (f.trendLightColor[5] = (0, _libGraphics.getLightColor)(g, f.TrendLightShadeOffset)), f.msgLogColor && (f.msgLogColor[5] = (0, _libGraphics.getLightColor)(g, 80)), f.dialColor && (f.dialColor[5] = (0, _libGraphics.getDarkColor)(g, 95) + ',FFFFFF,' + (0, _libGraphics.getDarkColor)(g, 95)), f.dialBorderColor && (f.dialBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 95) + ',FFFFFF,' + (0, _libGraphics.getDarkColor)(g, 95)), f.pivotColor && (f.pivotColor[5] = (0, _libGraphics.getLightColor)(g, 95) + ',FFFFFF,' + (0, _libGraphics.getLightColor)(g, 95)), f.pivotBorderColor && (f.pivotBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 95) + ',FFFFFF,' + (0, _libGraphics.getDarkColor)(g, 95)), f.pointerBorderColor && (f.pointerBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 75)), f.pointerBgColor && (f.pointerBgColor[5] = (0, _libGraphics.getDarkColor)(g, 75)), f.thmBorderColor && (f.thmBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 90)), f.thmFillColor && (f.thmFillColor[5] = (0, _libGraphics.getLightColor)(g, 55)), f.gaugeBorderColor && (f.gaugeBorderColor[5] = (0, _libGraphics.getDarkColor)(g, 90)), f.gaugeFillColor && (f.gaugeFillColor[5] = (0, _libGraphics.getLightColor)(g, 55)), f.cylFillColor && (f.cylFillColor[5] = (0, _libGraphics.getLightColor)(g, 55)), f.periodColor && (f.periodColor[5] = (0, _libGraphics.getLightColor)(g, 10)), f.winColor && (f.winColor[5] = '666666'), f.lossColor && (f.lossColor[5] = 'CC0000'), f.drawColor && (f.drawColor[5] = '666666'), f.scorelessColor && (f.scorelessColor[5] = 'FF0000'), f.gridColor && (f.gridColor[5] = (0, _libGraphics.getLightColor)(g, 30)), f.categoryBgColor && (f.categoryBgColor[5] = (0, _libGraphics.getLightColor)(g, 10)), f.dataTableBgColor && (f.dataTableBgColor[5] = (0, _libGraphics.getLightColor)(g, 10)), f.gridResizeBarColor && (f.gridResizeBarColor[5] = (0, _libGraphics.getDarkColor)(g, 90)), f.scrollBarColor && (f.scrollBarColor[5] = (0, _libGraphics.getLightColor)(g, 50)));
  }getColor(a) {
    return this.paletteOptions[a][this.paletteIndex];
  }getPlotColor(a) {
    var b = this,
        c = b.paletteColors,
        d = b.useFlatColors ? b.getColor('plotFillColor') : c[a % b.paletteLen];return d || (b.iterator === b.paletteLen && (b.iterator = 0), d = c[b.iterator], b.iterator += 1), d;
  }
}ColorManager.stringConstants = { BLANK: '', COMMASTRING: ',', BGRATIOSTRING: '0,100', COLOR_WHITE: 'FFFFFF', HUNDREDSTRING: '100' }, ColorManager.defined = function (a) {
  return 'undefined' != typeof a && null !== a;
};exports.default = ColorManager;
},{"../lib/lib":23,"../lib/lib-graphics":24,"./chart-palette-colors":120}],177:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SymbolStore = exports.RSymbolFns = exports.getEventHandlersFor = exports.mergeConf = exports.normalizeTarget = exports.isDIV = exports.hashCode = undefined;

var _domEvent = require('../dom/dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _dependencyManager = require('../dependency-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    Raphael = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    TEXTBOX_SYMBOL = 'Internal_CB',
    RSymbolFns = function () {
  return { CB_NOT_CHECKED: function (a, b, c) {
      var d = c;return ['M', a - d, b - d];
    }, CB_CHECKED: function (a, b, c) {
      var d = a,
          e = b,
          f = c,
          g = f / 4;return ['M', d - 3 * g, e, 'L', d - g, e + f, d + f, e - f];
    } };
}(),
    SymbolStore = function () {
  return Raphael.addSymbol(TEXTBOX_SYMBOL, RSymbolFns.CB_NOT_CHECKED), { register: function () {
      var a, b, c, d;if (1 === arguments.length) {
        if (c = arguments[0], null === c && c === UNDEF || 'object' != typeof c) return;d = c;
      } else if (1 < arguments.length) {
        if (a = arguments[0], b = arguments[1], 'string' != typeof a || 'function' != typeof b) return;d = {}, d[a] = b;
      } else return;for (a in d) (b = d[a], !!{}.hasOwnProperty.call(d, a)) && Raphael.addSymbol(a, b);
    } };
}();function hashCode(a) {
  return 'number' == typeof a && (a = '\'' + a + '\''), a.split('').reduce(function (c, d) {
    return c = (c << 5) - c + d.charCodeAt(0), c & c;
  }, 0);
}function isDIV(a) {
  return !!(a && a.nodeName && 'DIV' === a.nodeName.toUpperCase());
}function normalizeTarget(a, b) {
  var c;return a.getBBox ? a : (c = a.getBoundingClientRect(), a.getBBox = function () {
    return { x: b.x, y: b.y, width: c.right - c.left, height: c.bottom - c.top, isArtificial: !0 };
  }, a);
}function mergeConf(a, b, c) {
  var d, e;for (d in a) if (e = a[d], e !== UNDEF && null !== e) if (c) {
    if (b[d]) continue;b[d] = e;
  } else b[d] = e;
}function getEventHandlersFor(a, b) {
  var c = function () {
    _domEvent2.default.listen(b, 'mousemove', function (a) {
      a.originalEvent.stopPropagation();
    });
  };return 'click' === a ? function (a) {
    _domEvent2.default.listen(b, 'click', function (b) {
      b.target && b.target.parentNode && a.call(b.target);
    }), c();
  } : 'hover' === a ? function (a, d) {
    _domEvent2.default.listen(b, 'pointerhover', function (b) {
      b.target && b.target.parentNode && ('start' === b.state ? a : d).call(b.target);
    }), c();
  } : void 0;
}exports.hashCode = hashCode;
exports.isDIV = isDIV;
exports.normalizeTarget = normalizeTarget;
exports.mergeConf = mergeConf;
exports.getEventHandlersFor = getEventHandlersFor;
exports.RSymbolFns = RSymbolFns;
exports.SymbolStore = SymbolStore;
},{"../dom/dom-event":76,"../dependency-manager":20}],181:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolBarFactoryHelper = exports.defTextStyle = exports.defaultHToolbarConf = exports.defaultGroupConf = undefined;

var _libGraphics = require('../lib/lib-graphics');

let UNDEF,
    defaultGroupConf = { hPadding: 3, vPadding: 3, borderRadius: 2, fill: (0, _libGraphics.convertColor)('DBDBDB', 100), borderColor: (0, _libGraphics.convertColor)('B2B1B1', 100), borderThickness: 1, offsetAdjustment: 1, radius: 1, spacing: 6 },
    defaultHToolbarConf = { hPadding: 3, vPadding: 3, borderRadius: 0, fill: (0, _libGraphics.convertColor)('EBEBEB', 100), borderColor: (0, _libGraphics.convertColor)('D1D0D0', 100), borderThickness: 1, offsetAdjustment: 1, radius: 0 },
    defTextStyle = { fontFamily: 'Verdana,sans', fontSize: '12px', fill: UNDEF, fontStyle: 'normal', fontWeight: 'normal' },
    ToolBarFactoryHelper = { setComponentPool: function (a, b) {
    return this.store[b] || (this.store[b] = {}), this.store[b].componentPool = a;
  }, getOptions: function (a) {
    return this.store[a] || (this.store[a] = { options: {}, componentPool: {} }), this.store[a].options;
  }, getComponentPool: function (a) {
    return this.store[a] || (this.store[a] = { options: {}, componentPool: {} }), this.store[a].componentPool;
  }, setOptions: function (a, b) {
    return this.store[b] || (this.store[b] = {}), this.store[b].options = a;
  }, store: {} };exports.defaultGroupConf = defaultGroupConf;
exports.defaultHToolbarConf = defaultHToolbarConf;
exports.defTextStyle = defTextStyle;
exports.ToolBarFactoryHelper = ToolBarFactoryHelper;
},{"../lib/lib-graphics":24}],178:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _helper = require('./helper');

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    BLOCK = 'block',
    NONE = 'none';class SymbolClass extends _componentInterface2.default {
  configure(a, b, c, d, e) {
    let f = this.config;f.symbol = a, f._id = 'TB_SYMBOL' + (c || 0), f.node = UNDEF, f.pId = d, f.isPlaintext = b, f.chartId = e, f.conf = { btnTextStyle: { "stroke-width": '1px', stroke: 'none' } }, f.evt = { tooltext: UNDEF, click: _lib.stubFN, hover: [_lib.stubFN, _lib.stubFN] };
  }registerSymbol(a) {
    let b = this.config;_helper.SymbolStore.register(b.symbol, a);
  }_setConfiguaration(a) {
    let b = this.config;b.conf ? (0, _helper.mergeConf)(a, b.conf, !0) : b.conf = a;
  }attachEventHandlers(a, b) {
    var c,
        d = this,
        e = this.config,
        f = d.config.evt,
        g = a.tooltext,
        h = a.click || _lib.stubFN,
        i = a.hover,
        j = b && b.click || _lib.stubFN;return c = 'function' == typeof h ? function () {
      j(), h.apply(d, arguments);
    } : function () {
      var a = h.fn,
          b = h.context,
          c = (h.args || []).slice(0);h.hasOwnProperty('context') ? c.push(d) : b = d, [].push.apply(c, arguments), j(), a.apply(b, c);
    }, g && (f.tooltext = g), f.click = c, i && i instanceof Array && (f.hover = i), e.node && (e.node.buttonclick(e.evt.click).hover(e.evt.hover[0], e.evt.hover[1]), d.getFromEnv('toolTipController').enableToolTip(e.node, e.evt.tooltext)), this;
  }getLogicalSpace() {
    let a = this.config;return a = a.conf || a.buttonConfig, { width: a.width * (a.scale || 1), height: a.height * (a.scale || 1) };
  }show() {
    var a = this.config,
        b = a.node;a.display = BLOCK, b && b.css({ display: BLOCK });
  }hide() {
    var a = this.config,
        b = a.node;a.display = NONE, b && b.css({ display: NONE });
  }draw(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i = this.config,
        j = i.conf || {},
        k = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(i.chartId),
        l = k.getKeys(),
        m = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(i.chartId).chart,
        n = m.getFromEnv('animationManager'),
        o = m.getFromEnv('toolTipController');return i.isPlaintext ? f = i.symbol : e = i.symbol, c.idCount !== UNDEF && (i._id += c.idCount), h = k.getComponent(i._id, i.pId, l.KEY_BUTTON, !0), d = i.node = h(a, b, f, e, { width: j.width * j.scale, height: j.height * j.scale, r: j.radius, verticalPadding: j.symbolVPadding * j.scale, horizontalPadding: j.symbolHPadding }, c.parentLayer).labelcss(i.conf.btnTextStyle), i.display && i.node.css({ display: i.display }) && (i.display = UNDEF), n.setAnimation({ el: i.node, attr: { "button-label": f, "button-padding": [j.symbolHPadding, j.symbolVPadding * j.scale], "button-repaint": [a, b, j.width * j.scale, j.height * j.scale, j.radius * j.scale] }, state: 'updating', component: this, label: 'button' }), c.isResize || (j.hoverFill = j.hoverFill ? (0, _libGraphics.convertColor)(j.hoverFill) : (0, _libGraphics.convertColor)((0, _libGraphics.getLightColor)((0, _libGraphics.rawRGBtoHEX)(j.fill), 80)), d.attr({ fill: [j.fill, j.labelFill, j.symbolFill, j.hoverFill, !0], stroke: [j.stroke, j.symbolStroke], "stroke-width": [j.strokeWidth, j.symbolStrokeWidth] }).buttonclick(i.evt.click).hover(i.evt.hover[0], i.evt.hover[1]), o.enableToolTip(d, i.evt.tooltext), g = k.getCreationStatus(), !g && (i.node.unclick(), i.node.buttonclick(i.evt.click))), d.getBBox = function () {
      return { x: a, y: b, width: j.width * j.scale, height: j.height * j.scale };
    }, d;
  }dispose() {
    var a = this.config,
        b = a.node;b && b.remove(), a.node = UNDEF;
  }
}exports.default = SymbolClass;
},{"../lib/lib":23,"../lib/lib-graphics":24,"./helper":177,"./toolBarFactoryHelper":181,"../../core/component-interface":65}],180:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let scrollerSpecAttr = {},
    btnSpecAttr = {},
    contextMenuSpecAttr = {},
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    allNodes = [];exports.btnSpecAttr = btnSpecAttr;
exports.scrollerSpecAttr = scrollerSpecAttr;
exports.contextMenuSpecAttr = contextMenuSpecAttr;
exports.POSITION_TOP = POSITION_TOP;
exports.POSITION_BOTTOM = POSITION_BOTTOM;
exports.allNodes = allNodes;
},{}],202:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _helper = require('./helper');

var _defaultAttrs = require('./default-attrs');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    PXSTR = 'px',
    DEFAULT_TIMEOUT = 300;class ListContainer extends _componentInterface2.default {
  configure(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i = b && b.top || 0,
        j = b && b.left,
        k = b && b.right,
        l = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(c).chart;for (e in f = this, g = this.config, g.container = a, g.position = ListContainer.POSITION_BOTTOM, g.atomicLists = [], g.refContainers = [], g.parentListCon = UNDEF, g.hideFnIds = [], g.target = UNDEF, g.chartId = c, j && k || (g.positionCalculation = !0), g.hoverOverStyle = { background: '#333333', color: '#FFFFFF', cursor: 'pointer' }, g.hoverOutStyle = { background: '#FFFFFF', color: '#000000' }, g._defaultStyle = { position: 'absolute', "z-index": 50, top: i === UNDEF ? 'auto' : i + PXSTR, right: k === UNDEF ? 'auto' : k + PXSTR, left: j === UNDEF ? 'auto' : j + PXSTR, overflow: 'hidden', background: '#ffffff', border: '1px solid #646464', "box-shadow": '#999999 2px 2px 5px', padding: '5px 3px', display: 'none' }, d = g.container.style, g._defaultStyle) d[e] = g._defaultStyle[e];l.getFromEnv('chart-container').appendChild(g.container), h = (0, _helper.getEventHandlersFor)('hover', g.container), h(function () {
      f.show(this);
    }, function () {
      f.hide(DEFAULT_TIMEOUT, this);
    });
  }addAtomicListItem(a) {
    var b = this.config;a.isAtomicList && a.isAtomicList() && (b.atomicLists.push(a), a.stickIntoContainer(b.container, this));
  }show(a) {
    var b,
        c,
        d,
        e,
        f,
        g = this.config,
        h = g.hideFnIds,
        i = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(g.chartId).chart,
        j = i.config.width,
        k = g.positionCalculation,
        l = 0;for (g.target = g.target || a, b = h.length; l < b; l++) clearTimeout(h[l]);h.length = 0, c = g.parentListCon, c ? (c.show(g.target), g.container.style.left = c.container.offsetLeft + c.container.offsetWidth + PXSTR, g.container.style.top = c.container.offsetTop + g.target.offsetTop + PXSTR) : !(0, _helper.isDIV)(a) && (f = a.getBBox(), k && (g.container.style.display = 'block', d = g.container.offsetWidth, d + f.x > j ? (g.container.style.left = 'auto', g.container.style.right = j - f.x - f.width + PXSTR) : (g.container.style.left = f.x + PXSTR, g.container.style.right = 'auto'), g.container.style.display = 'none'), g.position === _defaultAttrs.POSITION_BOTTOM ? (e = f.isArtificial ? .5 : 1.5, g.container.style.top = f.y + f.height * e + PXSTR, g.container.style.bottom = 'auto') : (g.container.style.bottom = i.config.height - f.y + PXSTR, g.container.style.top = 'auto')), g.container.style.display = 'block';
  }hide(a) {
    var b,
        c = this.config,
        d = c.container;b = c.parentListCon, b && b.hide(DEFAULT_TIMEOUT), c.hideFnIds.push(setTimeout(function () {
      d.style.display = 'none';
    }, a));
  }dispose() {
    var a,
        b,
        c = this.config,
        d = c.atomicLists,
        e = c.refContainers;for (c.hideFnIds.length = 0, a = 0, b = d.length; a < b; a++) d[a].dispose();for (d.length = 0, a = 0, b = e.length; a < b; a++) e[a].dispose();e.length = 0;
  }isListContainer() {
    return !0;
  }
}ListContainer.POSITION_TOP = _defaultAttrs.POSITION_TOP, ListContainer.POSITION_BOTTOM = _defaultAttrs.POSITION_BOTTOM;exports.default = ListContainer;
},{"./toolBarFactoryHelper":181,"./helper":177,"./default-attrs":180,"../../core/component-interface":65}],203:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('./helper');

var _defaultAttrs = require('./default-attrs');

var _lib = require('../lib/lib');

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    doc = window.document,
    DIV = 'div',
    PXSTR = 'px',
    CLICK = 'click',
    DEFAULT_TIMEOUT = 300,
    HOVER = 'hover';class AtomicList extends _componentInterface2.default {
  configure(a, b) {
    let c = a || {},
        d = this.config;d.name = c.name, d.handler = c.handler || _lib.stubFN, d.action = c.action && c.action.toLowerCase() || CLICK, d.eventMap = {}, d.style = { padding: '3px 8px', margin: '2px 0px', fontFamily: _defaultAttrs.contextMenuSpecAttr.baseFontFamily, fontSize: _defaultAttrs.contextMenuSpecAttr.baseFontSize + PXSTR, color: '#000000' }, d.hoverOverStyle = c.hoverOverStyle || {}, d.hoverOutStyle = c.hoverOutStyle || {}, d.chartId = b, (0, _helper.mergeConf)(c.style || {}, d.style), d.subConRef = UNDEF, d.node = UNDEF;
  }updateName(a) {
    let b = this.config;b.name = a, b.node && (b.node.innerHTML = a);
  }assignSubContainer(a) {
    a.isListContainer && a.isListContainer() && (this.config.subConRef = a);
  }stickIntoContainer(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = this.config,
        i = h.node = doc.createElement(DIV),
        j = h.style,
        k = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(h.chartId).chart,
        l = this;for (c in h.handler && (h.eventMap[h.action] = h.handler), a.appendChild(i), i.innerHTML = h.name, d = i.style, j) d[c] = j[c];e = (0, _helper.getEventHandlersFor)(HOVER, i), f = (0, _helper.getEventHandlersFor)(CLICK, i), f(function () {
      l.config.handler && (g = l.config.eventMap[CLICK], g && g.apply(l, [k]), b.hide());
    }), e(function () {
      var a,
          b = i.style,
          c = l.config.hoverOverStyle;for (a in c) b[a] = c[a];l.config.subConRef && l.config.subConRef.show(this);
    }, function () {
      var a,
          b = i.style,
          c = l.config.hoverOutStyle;for (a in c) b[a] = c[a];l.config.subConRef && l.config.subConRef.hide(DEFAULT_TIMEOUT, this);
    });
  }setStyle(a) {
    (0, _helper.mergeConf)(a || {}, this.config.style);
  }dispose() {
    var a = this.config,
        b = a.node;b && b.remove && b.remove(), a.node = UNDEF;
  }isAtomicList() {
    return !0;
  }
}exports.default = AtomicList;
},{"./helper":177,"./default-attrs":180,"../lib/lib":23,"./toolBarFactoryHelper":181,"../../core/component-interface":65}],179:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _listContainer = require('./listContainer');

var _listContainer2 = _interopRequireDefault(_listContainer);

var _atomicList = require('./atomicList');

var _atomicList2 = _interopRequireDefault(_atomicList);

var _lib = require('../lib/lib');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    DIV = 'div',
    doc = window.document;class ListContainerManager extends _componentInterface2.default {
  configure(a, b) {
    var c = this.config;c.chartId = b, c.container = UNDEF, c.listContainer = UNDEF, c.measurement = a;
  }init(a) {
    var b,
        c,
        d = this.config,
        e = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(d.chartId),
        f = e.getKeys();return d.container || (b = e.getComponent('div0', a, f.KEY_DIV), c = b(), c && (c.innerHTML = ''), d.container = new _listContainer2.default(), d.container.configure(c, d.measurement, d.chartId)), this;
  }getFirstContainer() {
    return this.config.container;
  }appendAsList(a, b) {
    var c,
        d,
        e = this,
        f = e.config.container.config.hoverOverStyle,
        g = e.config.container.config.hoverOutStyle;return function a(b, h, i) {
      var j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = 0;for (q = h || e.config.container, j = b instanceof Array ? b : [b], k = j.length; s < k; s++) {
        for (n in l = j[s], m = new _atomicList2.default(), m.configure({ hoverOverStyle: f, hoverOutStyle: g }, i), l) m.config.name = n, o = l[n], m.config.action = o.action, m.setStyle(o.style), -1 !== n.search(/^<[^<]+>$/) && (m.config.hoverOverStyle = {}, m.config.hoverOutStyle = {}, o.handler = _lib.stubFN), p = o.handler, 'function' == typeof p ? m.config.handler = o.handler : (d = new _listContainer2.default(), d.configure(doc.createElement(DIV), void 0, i), r = a(p, d));q.addAtomicListItem(m), r && (r.parentListCon = q, q.refContainers.push(r), m.assignSubContainer(r)), r = UNDEF;
      }return c = q;
    }(a, b, e.config.chartId), c;
  }dispose() {
    var a = this.config;a.container.dispose(), a.container = UNDEF;
  }
}exports.default = ListContainerManager;
},{"./toolBarFactoryHelper":181,"./listContainer":202,"./atomicList":203,"../lib/lib":23,"../../core/component-interface":65}],147:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('./helper');

var _symbolclass = require('./symbolclass');

var _symbolclass2 = _interopRequireDefault(_symbolclass);

var _listContainerManager = require('./listContainerManager');

var _listContainerManager2 = _interopRequireDefault(_listContainerManager);

var _defaultAttrs = require('./default-attrs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    DEFAULT_TIMEOUT = 300;class SymbolWithContext extends _symbolclass2.default {
  configure(a, b, c, d) {
    var f,
        e,
        g = this.config;super.configure(a, UNDEF, b, c), g.chartId = d, g.rawContextDefinitation = UNDEF, e = new _listContainerManager2.default(), e.configure(g.position, d), g.listContainerManager = e.init(c), f = g.listContainerManager.getFirstContainer(), g.evt.hover = [function (a) {
      f.show((0, _helper.normalizeTarget)(a.target || a.fromElement, a));
    }, function (a) {
      f.hide(DEFAULT_TIMEOUT, a.target);
    }];
  }getListRefernce() {
    return this.config.listContainerManager;
  }attachEventHandler(a) {
    var b = this.config.evt,
        c = a.tooltext;c && (b.tooltext = c);
  }getLogicalSpace() {
    var a = this.config.listContainerManager.getFirstContainer(),
        b = a.config.atomicLists;return b && 0 === b.length ? { width: 0, height: 0 } : _symbolclass2.default.prototype.getLogicalSpace.call(this);
  }draw() {
    var a,
        b = this.config,
        c = b.listContainerManager.getFirstContainer(),
        d = c.config.atomicLists;return d && 0 === d.length ? (this.hide(), { getBBox: function () {
        return { width: 0, height: 0 };
      } }) : (a = _symbolclass2.default.prototype.draw.apply(this, arguments), SymbolWithContext.allNodes.push(b.node), a);
  }dispose() {
    var a = this.config;a.listContainerManager && a.listContainerManager.dispose(), a.listContainerManager = UNDEF, _symbolclass2.default.prototype.dispose.call(this);
  }
}SymbolWithContext.POSITION_TOP = _defaultAttrs.POSITION_TOP, SymbolWithContext.POSITION_BOTTOM = _defaultAttrs.POSITION_BOTTOM, SymbolWithContext.allNodes = _defaultAttrs.allNodes;exports.default = SymbolWithContext;
},{"./helper":177,"./symbolclass":178,"./listContainerManager":179,"./default-attrs":180}],148:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "*.*.*": { "*.disappearing": [{ finalAttr: { opacity: 0 }, slot: 'initial', callback: function () {
        this.hide();
      } }] } };
},{}],204:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var StoreInstance = { setNewInstance: function (a, b) {
    StoreInstance.instances[a] = b;
  }, getInstanceById: function (a) {
    return StoreInstance.instances[a];
  }, instances: {} };exports.StoreInstance = StoreInstance;
},{}],205:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _storeInstance = require('./storeInstance');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF;class HorizontalToolbar extends _componentInterface2.default {
  configure(a, b, c) {
    var d = this.config;d.id = 'TB_MASTER' + a, _storeInstance.StoreInstance.setNewInstance(d.id, this), d.toolbarRect = UNDEF, d.componentGroups = [], d.toolbarConfig = _toolBarFactoryHelper.defaultHToolbarConf, d.group = UNDEF, d.pId = b, d.x = 0, d.y = 0, d.chartId = c, d.configured = !0;
  }getId() {
    return this.config.id;
  }getName() {
    return 'horizontalToolbar';
  }getType() {
    return 'toolbar';
  }addComponent(a) {
    this.config.componentGroups.push(a);
  }setMenuBarDimension(a, b) {
    let c = this.config;a && (c.x = a), b && (c.y = b);
  }draw(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = this.config,
        n = m.x,
        o = m.y,
        p = m.componentGroups,
        q = m.id,
        r = n,
        s = o,
        t = m.toolbarConfig,
        u = Number.NEGATIVE_INFINITY,
        v = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(m.chartId),
        w = v.getKeys();for (a = a || {}, e = m.parentLayer || a.parentGroup || {}, l = v.getComponent(m.id, m.pId, w.KEY_GROUP, !0), m.group = f = l(q, e), l = v.getComponent(m.id, m.pId, w.KEY_RECT, !0), g = m.toolbarRect = l(f).attr({ height: 0, width: 0, x: r, y: s }), r += t.hPadding, s += t.vPadding, (c = 0, d = p.length); c < d; c++) b = p[c], k = b.config.groupConfig.spacing || 1, j = b.draw(f, { x: r, y: s }, c, !m.configured), r += j.width + k, u = u > j.height ? u : j.height;return i = u, h = r - k - t.hPadding - n, isFinite(i) || (i = 0), isFinite(h) || (h = 0), g.attr({ height: i += 2 * t.vPadding, width: h += 2 * t.hPadding }).attr({ fill: t.fill, r: t.radius, stroke: t.borderColor, "stroke-width": t.borderThickness }), this.drawn = !0, m.configured = !1, { height: i, width: h };
  }getLogicalSpace() {
    var a,
        b,
        c,
        d,
        e,
        f = this.config,
        g = f.componentGroups,
        h = 0,
        i = 0,
        j = Number.NEGATIVE_INFINITY,
        k = 0;for (a = 0, b = g.length; a < b; a++) c = g[a], e = c.getLogicalSpace(), d = c.config.groupConfig.spacing || 1, i += e.width + d, k += e.width, j = j < e.height ? e.height : j;return k ? (i -= d - 2 * f.toolbarConfig.hPadding, h = j + 2 * f.toolbarConfig.vPadding, { width: i, height: h }) : { width: 0, height: 0 };
  }dispose() {
    for (var a = this.config, b = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(a.chartId), c = a.componentGroups, d = 0, e = c.length; d < e; d++) c[d].dispose();c.length = 0, a.toolbarRect && a.toolbarRect.remove(), b.emptyPool(a.pId);
  }_dispose() {
    this.dispose(), super._dispose();
  }
}exports.default = HorizontalToolbar;
},{"./toolBarFactoryHelper":181,"./storeInstance":204,"../../core/component-interface":65}],206:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _defaultAttrs = require('./default-attrs');

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _helper = require('./helper');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF;class ComponentGroup extends _componentInterface2.default {
  configure(a, b, c) {
    let d = this.config;d.preId = a || 0, d.id = UNDEF, d.symbolList = [], d.groupRect = UNDEF, d.pId = b, d.chartId = c, (0, _lib.extend2)(d.btnConfig = {}, _defaultAttrs.btnSpecAttr), (0, _lib.extend2)(d.groupConfig = {}, _toolBarFactoryHelper.defaultGroupConf);
  }addSymbol(a, b) {
    var c = this.config,
        d = c.symbolList;b ? d.unshift(a) : d.push(a);
  }setConfiguaration(a) {
    var b = this.config,
        c = a.buttons,
        d = a.group;c && (0, _helper.mergeConf)(c, b.btnConfig), d && (0, _helper.mergeConf)(d, b.groupConfig);
  }draw(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = this.config,
        p = o.preId,
        q = o.symbolList,
        r = o.groupConfig,
        s = o.btnConfig,
        t = b.x,
        u = b.y,
        v = 0,
        w = 0,
        x = Number.NEGATIVE_INFINITY,
        y = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(o.chartId),
        z = y.getKeys();for (n = o.id = p.toString() + c, m = y.getComponent(o.id, o.pId, z.KEY_GROUP), e = m('toolbar-group' + n, a), m = y.getComponent(o.id, o.pId, z.KEY_RECT), i = o.groupRect = m(e).attr({ height: 0, width: 0, x: t, y: u }), t += r.hPadding, u += r.vPadding, w += r.hPadding, v += r.vPadding, (f = 0, g = q.length); f < g; f++) h = q[f], d || h._setConfiguaration(s), l = h.draw(t, u, { parentLayer: e, isResize: d }), j = l.getBBox(), x < j.height && (x = j.height), t += j.width + (k = s.spacing);return w += t + r.hPadding - b.x - k - r.offsetAdjustment, v += x + r.vPadding + r.offsetAdjustment, isFinite(v) || (v = 0), isFinite(w) || (w = 0), i.attr({ height: v, width: w }).attr({ fill: r.fill, r: r.radius, stroke: r.borderColor, "stroke-width": r.borderThickness }), j = i.getBBox(), { height: j.height, width: j.width };
  }getLogicalSpace() {
    var a,
        b,
        c,
        d,
        e = Number.NEGATIVE_INFINITY,
        f = this.config,
        g = f.symbolList,
        h = 0,
        i = 0,
        j = e,
        k = 0;for (b = 0, c = g.length; b < c; b++) a = g[b], a._setConfiguaration(f.btnConfig), d = a.getLogicalSpace(), i += d.width + f.btnConfig.spacing, k += d.width, j = j < d.height ? d.height : j;return k ? (j !== e && i && (i -= f.btnConfig.spacing - 2 * f.groupConfig.hPadding - f.groupConfig.offsetAdjustment, h = j + 2 * f.groupConfig.vPadding + f.groupConfig.offsetAdjustment), { width: i, height: h }) : { width: 0, height: 0 };
  }dispose() {
    for (var a = this.config, b = a.symbolList, c = 0, d = b.length; c < d; c++) b[c].dispose();b.length = 0, a.groupRect && a.groupRect.remove();
  }
}exports.default = ComponentGroup;
},{"../lib/lib":23,"./default-attrs":180,"./toolBarFactoryHelper":181,"./helper":177,"../../core/component-interface":65}],207:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _libGraphics = require('../lib/lib-graphics');

var _symbolclass = require('./symbolclass');

var _symbolclass2 = _interopRequireDefault(_symbolclass);

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    TEXTBOX_SYMBOL = 'Internal_CB',
    TRANSPARENT_FILL = (0, _libGraphics.convertColor)('FFFFFF', 0);class CheckboxSymbol extends _symbolclass2.default {
  configure(a, b, c, d, e) {
    super.configure(TEXTBOX_SYMBOL);let f = this.config;f._id = 'TB_CBSYMBOL' + (c || 0), f.symbol = TEXTBOX_SYMBOL, f.text = { plaintext: a, node: UNDEF, style: _toolBarFactoryHelper.defTextStyle }, f.pId = d, f.chartId = e, f.checked = !!b, f.textNode = UNDEF, f.interPadding = 3, f.pos = {}, f.regSymbolCmd = UNDEF, f.checked ? this.check() : this.uncheck();
  }check() {
    var a = this.config,
        b = a.pos;a.checked = !0, a.regSymbolCmd = _helper.RSymbolFns.CB_CHECKED, a.node && (this.registerSymbol(a.regSymbolCmd), a.node.attr({ "button-repaint": [b.x, b.y, b.width, b.height, b.r] }));
  }uncheck() {
    var a = this.config,
        b = a.pos;a.checked = !1, a.regSymbolCmd = _helper.RSymbolFns.CB_NOT_CHECKED, a.node && (this.registerSymbol(a.regSymbolCmd), a.node.attr({ "button-repaint": [b.x, b.y, b.width, b.height, b.r] }));
  }click() {
    let a = this.config;a.checked ? this.uncheck() : this.check();
  }attachEventHandlers(a) {
    var b = this;_symbolclass2.default.prototype.attachEventHandlers.apply(this, [a, { click: function () {
        b.click();
      } }]);
  }getLogicalSpace() {
    var a,
        b,
        c = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(this.config.chartId).chart,
        d = this.config,
        e = c.linkedItems.smartLabel,
        f = d.text.style;return b = _symbolclass2.default.prototype.getLogicalSpace.apply(this, arguments), e.useEllipsesOnOverflow(c.config.useEllipsesWhenOverflow), e.setStyle(f), a = e.getSmartText(d.text.plaintext), { width: a.width + d.interPadding + b.width, height: Math.max(b.height, a.height) };
  }draw(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this.config,
        l = k.conf,
        m = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(k.chartId).chart,
        n = m.getFromEnv('smartLabel'),
        o = m.getFromEnv('color-manager'),
        p = k.text.plaintext,
        q = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(k.chartId),
        r = q.getKeys();return this.registerSymbol(k.regSymbolCmd), d = k.node = _symbolclass2.default.prototype.draw.apply(this, arguments), k.pos = { x: a, y: b, width: l.width, height: l.height, r: l.radius }, i = k.text.style, i.fill = i.fill || '#' + o.getColor('baseFontColor'), n.useEllipsesOnOverflow(m.config.useEllipsesWhenOverflow), n.setStyle(i), f = n.getSmartText(p), e = d.getBBox(), j = q.getComponent(k._id, k.pId, r.KEY_TEXT), k.textNode = j(c.parentLayer).attr({ text: p, x: e.x + e.width + f.width / 2 + k.interPadding, y: e.y + e.height / 2 }).css(i), g = l.height > f.height ? l.height : f.height, j = q.getComponent(k._id, k.pId, r.KEY_RECT), h = j(c.parentLayer).attr({ height: g, width: e.width + f.width + k.interPadding, x: a, y: b, stroke: TRANSPARENT_FILL }), h;
  }dispose() {
    let a = this.config;a.textNode && a.textNode.remove(), a.textNode = UNDEF, super.dispose();
  }
}exports.default = CheckboxSymbol;
},{"../lib/lib-graphics":24,"./symbolclass":178,"./toolBarFactoryHelper":181,"./helper":177}],208:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _symbolclass = require('./symbolclass');

var _symbolclass2 = _interopRequireDefault(_symbolclass);

var _defaultAttrs = require('./default-attrs');

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF;class Scroller extends _symbolclass2.default {
  configure(a, b, c, d) {
    let e = this.config;e._id = 'TB_SCROLLER' + (b || 0), e.pId = c, e.conf = {}, e.userConf = _defaultAttrs.scrollerSpecAttr, e.chartId = d, this.setConfiguaration(a), e.evt = { tooltext: UNDEF, click: _lib.stubFN, hover: [_lib.stubFN, _lib.stubFN] };
  }getName() {
    return 'scroller';
  }getType() {
    return 'scroller';
  }setConfiguaration(a) {
    var b = this.config,
        c = _toolBarFactoryHelper.ToolBarFactoryHelper.getOptions(b.chartId).chart,
        d = c.getFromEnv('color-manager');_defaultAttrs.scrollerSpecAttr.color || (_defaultAttrs.scrollerSpecAttr.color = '#' + d.getColor('altHGridColor')), (0, _helper.mergeConf)(_defaultAttrs.scrollerSpecAttr, b.conf), (0, _helper.mergeConf)(a, b.conf);
  }getLogicalSpace() {
    var a = this.config,
        b = a.conf,
        c = {};return (0, _helper.mergeConf)(_defaultAttrs.scrollerSpecAttr, c), (0, _helper.mergeConf)(c, b), _symbolclass2.default.prototype.getLogicalSpace.call(this);
  }getDefaultLayer() {
    var a,
        b,
        c = this.config,
        d = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(c.chartId),
        e = d.getKeys();return a = d.getComponent(c._id, c.pId, e.KEY_GROUP), b = a('scroll'), b;
  }draw() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w = this.config,
        z = w.conf,
        A = _toolBarFactoryHelper.ToolBarFactoryHelper.getComponentPool(w.chartId),
        B = A.getKeys(),
        C = {},
        D = {};return 1 === arguments.length ? (p = arguments[0], a = p.x, b = p.y, g = p.parentLayer, o = !!p.sepLayer) : (a = arguments[0], b = arguments[1], e = arguments[2], z && e ? (0, _helper.mergeConf)(e, z) : e = {}, g = e.parentLayer, o = !!e.sepLayer, p = z), (0, _helper.mergeConf)(_defaultAttrs.scrollerSpecAttr, D), p.isHorizontal ? delete D.width : delete D.height, (0, _helper.mergeConf)(D, p, !0), b += p.padding, c = p.height, d = p.width, f = p.isHorizontal, s = 'scroll-repaint', r = p.startPercent, h = Math.max(p.scrollRatio, .01), i = p.showButtons, j = p.displayFlat, k = p.fullCanvasWidth, l = p.windowedCanvasWidth, m = p.color, n = p.roundEdges, v = (0, _lib.pluckNumber)(p.scrollPosition, r, 0), C[s] = [a, b, d, c], g = g || this.getDefaultLayer(), t = A.getComponent(w._id, w.pId, B.KEY_RECT), q = o ? t('scroll-child') : g, t = A.getComponent(w._id, w.pId, B.KEY_SCROLLER), w.node = t(a, b, d, c, f, { scrollPosition: v, displayStyleFlat: j, showButtons: i }, q), w.node.data('fullCanvasWidth', k).data('windowedCanvasWidth', l).attr({ "scroll-ratio": h, fill: m, "stroke-width": 1, "scroll-position": v, r: n && 2 || 0 }).scroll(w.evt), u = A.getCreationStatus(), u || (w.node.undrag(), w.node.attr(C), w.node.attr({ "scroll-display-style": j ? 'flat' : '3d' }).scroll(w.evt)), w.node;
  }attachEventHandlers(a) {
    var b = this,
        c = this.config,
        d = c.evt;return a && (a.scroll && 'function' == typeof a.scroll && (d.scroll = a.scroll), a.scrollStart && 'function' == typeof a.scrollStart && (d.scrollStart = a.scrollStart), a.scrollEnd && 'function' == typeof a.scrollEnd && (d.scrollEnd = a.scrollEnd)), super.attachEventHandlers(arguments), b;
  }
}Scroller.registerSymbol = UNDEF, Scroller._setConfiguaration = _lib.stubFN;exports.default = Scroller;
},{"../lib/lib":23,"./symbolclass":178,"./default-attrs":180,"./toolBarFactoryHelper":181,"./helper":177}],182:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarFactory = undefined;

var _storeInstance = require('./storeInstance');

var _horizontalToolbar = require('./horizontalToolbar');

var _horizontalToolbar2 = _interopRequireDefault(_horizontalToolbar);

var _componentgroup = require('./componentgroup');

var _componentgroup2 = _interopRequireDefault(_componentgroup);

var _symbolclass = require('./symbolclass');

var _symbolclass2 = _interopRequireDefault(_symbolclass);

var _checkboxSymbol = require('./checkboxSymbol');

var _checkboxSymbol2 = _interopRequireDefault(_checkboxSymbol);

var _scroller = require('./scroller');

var _scroller2 = _interopRequireDefault(_scroller);

var _symbolWithContext = require('./symbolWithContext');

var _symbolWithContext2 = _interopRequireDefault(_symbolWithContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolbarFactory = { getAPIInstances: function () {
    return { HorizontalToolbar: _horizontalToolbar2.default, ComponentGroup: _componentgroup2.default, Symbol: _symbolclass2.default, CheckboxSymbol: _checkboxSymbol2.default, Scroller: _scroller2.default, SymbolWithContext: _symbolWithContext2.default, getInstanceById: _storeInstance.StoreInstance.getInstanceById };
  } };exports.ToolbarFactory = ToolbarFactory;
},{"./storeInstance":204,"./horizontalToolbar":205,"./componentgroup":206,"./symbolclass":178,"./checkboxSymbol":207,"./scroller":208,"./symbolWithContext":147}],209:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Pool {
  constructor() {
    this.pool = {};
  }
}exports.default = Pool;
},{}],183:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pool = require('./pool');

var _pool2 = _interopRequireDefault(_pool);

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let doc = window.document,
    DIV = 'div';class ComponentPool extends _componentInterface2.default {
  configure(a, b) {
    let c,
        d,
        e,
        f,
        g,
        h = this,
        i = a.getFromEnv('animationManager'),
        j = h.config;e = j.elemTypes = { KEY_RECT: 'rect', KEY_TEXT: 'text', KEY_GROUP: 'group', KEY_SCROLLER: 'scroller', KEY_BUTTON: 'button', KEY_PATH: 'path', KEY_DIV: 'div' }, f = j.cachedState = {}, c = j.actions = {}, c[e.KEY_DIV] = function () {
      return doc.createElement(DIV);
    }, c[e.KEY_RECT] = function (a) {
      return i.setAnimation({ el: 'rect', container: a, component: h });
    }, c[e.KEY_TEXT] = function (a) {
      return i.setAnimation({ el: 'text', container: a, component: h });
    }, c[e.KEY_GROUP] = function (a, b) {
      return i.setAnimation({ el: 'group', attr: { name: a }, container: b, component: h });
    }, c[e.KEY_SCROLLER] = function (a, b, c, d, e, f, g) {
      return i.setAnimation({ el: 'scroller', attr: { scroller: [a, b, c, d, e, f, g] }, component: h });
    }, c[e.KEY_BUTTON] = function (a, b, c, d, e, f) {
      return i.setAnimation({ el: 'button', attr: { button: [a, b, c, d, e, f] }, component: h });
    }, c[e.KEY_PATH] = function (a, b) {
      i.setAnimation({ el: 'path', container: b, attr: { path: a }, component: h });
    }, g = j.cache = f[b] || (f[b] = {}), ComponentPool._hideRecursive(g.pool);g.initialized || (d = g.pool = new _pool2.default().pool, d._tmp = b, g.initialized = !0);
  }static _hideRecursive(a) {
    var b, c, d, e, f, g;if (a) for (b in a) for (c in d = a[b], d) if (e = d[c], e instanceof Array) for (f = 0, g = e.length; f < g; f++) e[f].hide && e[f].hide();else e.hide && e.hide();
  }emptyPool(a) {
    var b,
        c = this.config;b = c.cachedState[a] || {}, b.pool && (b.pool = {});
  }isInitialized() {
    return this.config.initialized;
  }getCreationStatus() {
    return this.config.newCreationDataFlag;
  }hideRecursive(a) {
    var b;b = this.config.cachedState[a] || {}, ComponentPool._hideRecursive(b.pool);
  }getKeys() {
    return this.config.elemTypes;
  }getComponent(a, b, c, d) {
    var e,
        f,
        g,
        h = this.config,
        i = h.cachedState[b || 0] || {},
        j = i.pool,
        k = j[a],
        l = h.actions,
        m = 0;return k || (k = j[a] = {}), f = k[c], f && !(f instanceof Array) && !f.removed || f instanceof Array && 0 < f.length ? function () {
      return i.newCreationDataFlag = !1, d ? (g = f[m++], g && !g.removed ? g.show() : f[m] = l[c].apply(i, arguments)) : f.show && 'function' == typeof f.show && f.show() || f;
    } : function () {
      return i.newCreationDataFlag = !0, d ? (e = k[c] || (k[c] = []), f = l[c].apply(i, arguments), e.push(f), f.show && 'function' == typeof f.show && f.show() || f) : k[c] = l[c].apply(i, arguments);
    };
  }
}exports.default = ComponentPool;
},{"./pool":209,"../../core/component-interface":65}],149:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _toolBarFactoryHelper = require('./toolBarFactoryHelper');

var _toolbarFactory = require('./toolbarFactory');

var _componentPool = require('./componentPool');

var _componentPool2 = _interopRequireDefault(_componentPool);

var _helper = require('./helper');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _defaultAttrs = require('./default-attrs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let componentInstanceCount = 0;class Toolbox extends _componentInterface2.default {
  getICount() {
    return this.config._iCount;
  }getName() {
    return 'toolbox';
  }getType() {
    return 'horizontalToolbox';
  }configure(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = this.config;h.onceInitialized || (h.onceInitialized = !1), h.ALIGNMENT_HORIZONTAL = parseInt('0', 2), h.ALIGNMENT_VERTICAL = parseInt('1', 2), h.POSITION_TOP = parseInt('00', 2), h.POSITION_RIGHT = parseInt('01', 2), h.POSITION_BOTTOM = parseInt('10', 2), h.POSITION_LEFT = parseInt('11', 2), this.getDefaultConfiguration = function () {
      return _defaultAttrs.btnSpecAttr;
    }, h.onceInitialized || (h._options = a, h._chart = a.chart, h._iCount = ++componentInstanceCount, h.onceInitialized = !0, h.chartId = a.chart.getFromEnv('chartInstance').id), e = h._chart, f = e.getFromEnv('dataSource').chart, _defaultAttrs.btnSpecAttr.scale = (0, _lib.pluckNumber)(f.toolbarbuttonscale, 1.15), _defaultAttrs.btnSpecAttr.width = (0, _lib.pluckNumber)(f.toolbarbuttonwidth, _lib.touchEnabled ? 20 : 15), _defaultAttrs.btnSpecAttr.height = (0, _lib.pluckNumber)(f.toolbarbuttonheight, _lib.touchEnabled ? 20 : 15), _defaultAttrs.btnSpecAttr.radius = (0, _lib.pluckNumber)(f.toolbarbuttonradius, _lib.touchEnabled ? 4 : 2), _defaultAttrs.btnSpecAttr.spacing = (0, _lib.pluckNumber)(f.toolbarbuttonspacing, 5), _defaultAttrs.btnSpecAttr.fill = (0, _libGraphics.convertColor)((0, _lib.pluck)(f.toolbarbuttoncolor, 'ffffff')), _defaultAttrs.btnSpecAttr.labelFill = (0, _libGraphics.convertColor)((0, _lib.pluck)(f.toolbarlabelcolor, 'cccccc')), _defaultAttrs.btnSpecAttr.symbolFill = (0, _libGraphics.convertColor)((0, _lib.pluck)(f.toolbarsymbolcolor, 'ffffff')), _defaultAttrs.btnSpecAttr.hoverFill = (0, _lib.pluck)(f.toolbarbuttonhovercolor), _defaultAttrs.btnSpecAttr.stroke = (0, _libGraphics.convertColor)((0, _lib.pluck)(f.toolbarbuttonbordercolor, 'bbbbbb')), _defaultAttrs.btnSpecAttr.symbolStroke = (0, _libGraphics.convertColor)((0, _lib.pluck)(f.toolbarsymbolbordercolor, '9a9a9a')), _defaultAttrs.btnSpecAttr.strokeWidth = (0, _lib.pluckNumber)(f.toolbarbuttonborderthickness, 1), _defaultAttrs.btnSpecAttr.symbolStrokeWidth = (0, _lib.pluckNumber)(f.toolbarsymbolborderthickness, 1), g = _defaultAttrs.btnSpecAttr.symbolPadding = (0, _lib.pluckNumber)(f.toolbarsymbolpadding, 5), _defaultAttrs.btnSpecAttr.symbolHPadding = (0, _lib.pluckNumber)(f.toolbarsymbolhpadding, g), _defaultAttrs.btnSpecAttr.symbolVPadding = (0, _lib.pluckNumber)(f.toolbarsymbolvpadding, g), b = _defaultAttrs.btnSpecAttr.position = (0, _lib.pluck)(f.toolbarposition, 'tr').toLowerCase();b = 'tr' === b || 'rt' === b || 'top right' === b || 'right top' === b ? 'tr' : 'br' === b || 'rb' === b || 'bottom right' === b || 'right bottom' === b ? 'br' : 'tl' === b || 'lt' === b || 'top left' === b || 'left top' === b ? 'tl' : 'bl' === b || 'lb' === b || 'bottom left' === b || 'left bottom' === b ? 'bl' : 'tr';c = _defaultAttrs.btnSpecAttr.hAlign = 'left' === (_lib.BLANKSTRING + f.toolbarhalign).toLowerCase() ? 'l' : b.charAt(1), d = _defaultAttrs.btnSpecAttr.vAlign = 'bottom' === (_lib.BLANKSTRING + f.toolbarvalign).toLowerCase() ? 'b' : b.charAt(0), _defaultAttrs.btnSpecAttr.hDirection = (0, _lib.pluckNumber)(f.toolbarhdirection, 'r' === c ? -1 : 1), _defaultAttrs.btnSpecAttr.vDirection = (0, _lib.pluckNumber)(f.toolbarvdirection, 'b' === d ? -1 : 1), _defaultAttrs.btnSpecAttr.vMargin = (0, _lib.pluckNumber)(f.toolbarvmargin, 6), _defaultAttrs.btnSpecAttr.hMargin = (0, _lib.pluckNumber)(f.toolbarhmargin, 10), f.toolbary && f.toolbarx ? (_defaultAttrs.btnSpecAttr.x = (0, _lib.pluckNumber)(f.toolbarx), _defaultAttrs.btnSpecAttr.y = (0, _lib.pluckNumber)(f.toolbary), delete _defaultAttrs.btnSpecAttr.spaceNotHardCoded) : _defaultAttrs.btnSpecAttr.spaceNotHardCoded = !0, _defaultAttrs.scrollerSpecAttr.color = f.scrollcolor && (0, _libGraphics.convertColor)(f.scrollcolor), _defaultAttrs.scrollerSpecAttr.padding = (0, _lib.pluckNumber)(f.scrollpadding, 0), _defaultAttrs.scrollerSpecAttr.height = (0, _lib.pluckNumber)(f.scrollheight, 12), _defaultAttrs.scrollerSpecAttr.width = (0, _lib.pluckNumber)(f.scrollwidth, 12), _defaultAttrs.scrollerSpecAttr.displayFlat = (0, _lib.pluckNumber)(f.flatscrollbars, 0), _defaultAttrs.scrollerSpecAttr.scrollBar3DLighting = (0, _lib.pluckNumber)(f.scrollbar3dlighting, 1), _defaultAttrs.scrollerSpecAttr.startPercent = Math.min(1, Math.max(0, parseFloat(f.scrolltoend) || 0)), _defaultAttrs.scrollerSpecAttr.showButtons = !!(0, _lib.pluckNumber)(f.scrollshowbuttons, 1), _defaultAttrs.scrollerSpecAttr.buttonPadding = (0, _lib.pluckNumber)(f.scrollbtnpadding, 0), _defaultAttrs.contextMenuSpecAttr.baseFontFamily = (0, _lib.pluck)(f.basefont, 'Verdana,sans'), _defaultAttrs.contextMenuSpecAttr.baseFontSize = (0, _lib.pluckNumber)(f.basefontsize, 10), _defaultAttrs.contextMenuSpecAttr.baseFontColor = (0, _lib.pluck)(f.basefontcolor, '595959');
  }getAPIInstances(a) {
    var b,
        c = this.config,
        d = c._chart,
        e = {},
        f = c.componentPool = new _componentPool2.default();switch (f.configure(d, c._iCount), _toolBarFactoryHelper.ToolBarFactoryHelper.setComponentPool(f, c.chartId), _toolBarFactoryHelper.ToolBarFactoryHelper.setOptions(c._options, c.chartId), b = _toolbarFactory.ToolbarFactory.getAPIInstances(), a) {case c.ALIGNMENT_HORIZONTAL:
        e.Toolbar = b.HorizontalToolbar;break;case c.ALIGNMENT_VERTICAL:}return e.ComponentGroup = b.ComponentGroup, e.Symbol = b.Symbol, e.Scroller = b.Scroller, e.SymbolWithContext = b.SymbolWithContext, e.SymbolStore = _helper.SymbolStore, e.CheckboxSymbol = b.CheckboxSymbol, e;
  }clean() {
    var a = this.config;a.componentPool.hideRecursive(a._iCount);
  }
}exports.default = Toolbox;
},{"../lib/lib":23,"../lib/lib-graphics":24,"./toolBarFactoryHelper":181,"./toolbarFactory":182,"./componentPool":183,"./helper":177,"../../core/component-interface":65,"./default-attrs":180}],127:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurer = exports._createToolBox = exports._drawDataset = undefined;

var _basechart = require('./basechart');

var _basechart2 = _interopRequireDefault(_basechart);

var _canvas = require('../_internal/factories/canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _dependencyManager = require('../_internal/dependency-manager');

var _caption = require('../_internal/components/caption');

var _caption2 = _interopRequireDefault(_caption);

var _subCaption = require('../_internal/components/sub-caption');

var _subCaption2 = _interopRequireDefault(_subCaption);

var _background = require('../_internal/components/background');

var _background2 = _interopRequireDefault(_background);

var _colormanager = require('../_internal/color-utils/colormanager');

var _colormanager2 = _interopRequireDefault(_colormanager);

var _numberformatter = require('../_internal/components/numberformatter');

var _numberformatter2 = _interopRequireDefault(_numberformatter);

var _symbolWithContext = require('../_internal/tool-box/symbolWithContext');

var _symbolWithContext2 = _interopRequireDefault(_symbolWithContext);

var _eventApi = require('../_internal/misc/event-api');

var _commonAnimation = require('../_internal/animation-rules/common-animation');

var _commonAnimation2 = _interopRequireDefault(_commonAnimation);

var _lib = require('../_internal/lib/lib');

var _libGraphics = require('../_internal/lib/lib-graphics');

var _libAttr = require('../_internal/lib/lib-attr');

var _domEvent = require('../_internal/dom/dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _toolbox = require('../_internal/tool-box/toolbox');

var _toolbox2 = _interopRequireDefault(_toolbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Raphael = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    isVML = 'VML' === Raphael.type,
    TRACKER_FILL = 'rgba(255,0,0,' + (_lib.isIE ? .002 : 1e-6) + ')',
    mathMax = Math.max,
    mathMin = Math.min,
    mathRound = Math.round,
    eventMap = { datalabelclick: !0, connectorclick: !0, categoryclick: !0, processclick: !0, milestoneclick: !0, labelclick: !0, dataplotclick: !0 },
    SEVENTYSTRING = _lib.preDefStr.SEVENTYSTRING,
    AUTO = _lib.preDefStr.AUTOSTRING,
    BOLD = 'bold',
    NORMAL = 'normal',
    POSITION_RIGHT = 'right',
    supportsTouch = 'createTouch' in window.document,
    supportsOnlyTouch = supportsTouch && !(window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints),
    POSITION_START = 'start',
    POSITION_END = 'end',
    createGroup = function (e, t, a) {
  var n = a.getFromEnv('animationManager');return n.setAnimation({ el: 'group', attr: e, container: t, state: 'appearing', component: a, label: 'group' });
},
    onContainerClick = function (t) {
  var e,
      a = t.data,
      n = a.getFromEnv('chartInstance'),
      o = t.originalEvent,
      i = a.config,
      r = (0, _lib.getMouseCoordinate)(a.getFromEnv('chart-container'), o, a);n.ref && (e = (0, _lib.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv('chartWidth'), pixelWidth: a.getFromEnv('chartHeight'), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, r), a.fireChartInstanceEvent('chartclick', e), i.link && (!i.hotElemClicked || i.clickURLOverridesPlotLinks) && a.getFromEnv('linkClickFN').call({ link: i.link }), i.hotElemClicked = !1);
},
    chartHoverManager = function (t) {
  var e = t.type,
      a = t.data,
      n = a.getFromEnv('eventListeners');n || (n = [], a.addToEnv('eventListeners', n)), ('mouseover' === e || 'touchstart' === e) && !1 === a.config.mouseStateIn && (a.config.mouseStateIn = !0, CommonAPI.onContainerRollOver(t), n.push(_domEvent2.default.listen(isVML ? document : window, 'mouseover', CommonAPI.winMouseHover, a)));
};function _createToolBox() {
  this.getFromEnv('chartMenuTools').reset(this.getFromEnv('toolbox'), this);var e,
      t,
      a,
      n,
      o,
      i,
      r,
      l,
      s,
      g,
      d,
      c,
      h,
      p = this,
      m = p.getFromEnv('chartMenuTools'),
      u = p.getFromEnv('chartInstance').id,
      v = m.get,
      C = m.set,
      f = this.components,
      b = p.config,
      w = p.getChildren('chartMenuBar'),
      E = p.getChildren('actionBar'),
      F = b.printOption.enabled,
      M = p.config.realTimeConfig || {};w && w.drawn || E && E.drawn || ((0, _lib.componentFactory)(p, _toolbox2.default, 'tb', 1, [{ graphics: p.graphics || (p.graphics = {}), chart: p, components: f }]), e = p.getChildren('tb')[0], c = e.getICount(), p.addToEnv('toolbox', e), !p.getFromEnv('toolBoxAPI') && p.addToEnv('toolBoxAPI', e.getAPIInstances(e.config.ALIGNMENT_HORIZONTAL)), i = p.getFromEnv('toolBoxAPI'), s = i.SymbolWithContext, r = i.SymbolStore, l = i.ComponentGroup, g = i.Toolbar, e.idCount = e.idCount || 0, e.pId = c, a = e.getDefaultConfiguration(), r.register('ContextIcon', function (e, t, a) {
    var n = e,
        o = t,
        i = 2 * a,
        r = mathRound(i / 4),
        l = .7 * mathRound(i / 2),
        s = n - l,
        g = n + l,
        d = o + r,
        c = o - r;return ['M', s, o, 'L', g, o, 'M', s, d, 'L', g, d, 'M', s, c, 'L', g, c];
  }), h = new s(), h.configure('ContextIcon', e.idCount++, c, u), t = h, n = t.getListRefernce(), p.addToEnv('chartMenuList', n), F && C([{ Print: { handler: function () {
        p.getFromEnv('chartInstance').print();
      }, action: 'click' } }]), p._setRTmenu && p._setRTmenu(M.showRTmenuItem, M.useMessageLog), n.appendAsList(v()), o = new l(), o.configure(e.idCount++, c, u), o.setConfiguaration({ buttons: a, group: { fill: TRACKER_FILL, borderColor: TRACKER_FILL } }), o.addSymbol(t), 't' === o.config.btnConfig.vAlign ? (d = new g(), w = p.attachChild(d, 'chartMenuBar', !1), d.configure(e.idCount++, e.pId, u), w.addComponent(o)) : (d = new g(), w = p.attachChild(d, 'actionBar', !1), d.configure(e.idCount++, e.pId, u), w.addComponent(o)));
}function _drawDataset() {
  var e = this,
      t = e.getChildren('canvas')[0];t._mapChildren(e => {
    e.syncDraw();
  });
}function configurer(e) {
  var t = this;t.config.skipConfigureIteration = {}, t.parseChartAttr(e), t.createComponent(e), t._createToolBox(), t.setTooltipStyle(), t.configureChildren();
}(0, _dependencyManager.addDep)({ name: 'commonAnimation', type: 'animationRule', extension: _commonAnimation2.default });class CommonAPI extends _basechart2.default {
  static getName() {
    return 'CommonAPI';
  }plotEventHandler(e, t = {}, a, n) {
    var o,
        i,
        r,
        l = this,
        s = t.type,
        g = (0, _lib.getMouseCoordinate)(l.getFromEnv('chart-container'), t, l),
        d = e.data('eventArgs') || n,
        c = (0, _lib.extend2)(g, d),
        h = l.fireGroupEvent,
        p = e.data('groupId'),
        m = function () {
      t.FusionChartsPreventEvent = !0;
    };if ('index' in c && !('dataIndex' in c) && (c.dataIndex = c.index), 'value' in c && !('dataValue' in c) && (c.dataValue = c.value), a = (0, _lib.pluck)(a, 'dataplotclick').toLowerCase(), 'dataplotrollover' === a ? (t.FusionChartsPreventEvent = !1, h ? (0, _eventApi.raiseEventGroup)(p, a, c, l.getFromEnv('chartInstance'), _lib.UNDEF, _lib.UNDEF, m) : l.fireChartInstanceEvent(a, c, _lib.UNDEF, _lib.UNDEF, m)) : h && !eventMap[a] ? (0, _eventApi.raiseEventGroup)(p, a, c, l.getFromEnv('chartInstance')) : l.fireChartInstanceEvent(a, c), ('click' === s || 'mouseup' === s || 'touchend' === s) && /click/i.test(a)) {
      if (supportsTouch && !supportsOnlyTouch) {
        if (r = new Date().getTime(), e.lastClickTimeStamp && 400 > r - e.lastClickTimeStamp) return void (t && (t.originalEvent || t).preventDefault());e.lastClickTimeStamp = r;
      }o = l.getFromEnv(), i = o && o.linkClickFN, c.link && i && i.call({ link: c.link }, !0);
    }
  }constructor() {
    super(), this.addToEnv('stringConstants', { COMPONENT: 'component', CANVAS: 'canvas', CAPTION: 'caption' }), this.addToEnv('chartMenuTools', CommonAPI.chartMenuTools()), this.addToEnv('getMouseCoordinate', _lib.getMouseCoordinate), this._drawDataset = _drawDataset, this.config.mouseStateIn = !1, this.registerFactory('canvas', _canvas2.default);
  }getName() {
    return 'Cartesian';
  }preConfigure(e) {
    var t = this.getFromEnv('number-formatter');this.addToEnv('chart-attrib', e.chart), t ? t.configure() : this.addToEnv('number-formatter', new _numberformatter2.default(this)), super.preConfigure(e);
  }setDefaults() {
    super.setDefaults();let e = this.getFromEnv('number-formatter');e && e.setDefaults && e.setDefaults();
  }getType() {
    return 'chartAPI';
  }parseChartAttr(e) {
    var t = Math.abs;let a,
        n,
        o,
        i,
        r,
        l,
        s,
        g,
        d,
        c,
        h,
        p,
        m,
        u,
        v = this,
        C = e || v.getFromEnv('dataSource'),
        f = v.config.is3D,
        b = f ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D,
        w = v.isBar,
        E = v.getFromEnv('color-manager');E || (E = new _colormanager2.default(v), v.addToEnv('color-manager', E)), C.chart = C.chart || C.graph || C.map || {}, delete C.map, delete C.graph, a = C.chart, a || (a = C.chart = {}), n = v.config || (v.config = {}), (0, _libAttr.parseConfiguration)(a, n, {}, { showvalues: !0 }), n.showValues = (0, _lib.pluckNumber)(a.showvalues, n.showvalues), n.viewPortConfig = { scaleY: 1, scaleX: 1, x: 0, y: 0 }, f && (w ? (n.xDepth = 5, n.yDepth = 5) : (n.xDepth = 10, n.yDepth = 10), n.showCanvasBase = u = !!(0, _lib.pluckNumber)(a.showcanvasbase, 1), n.canvasBasePadding = (0, _lib.pluckNumber)(a.canvasbasepadding, 2), n.canvasBaseDepth = u ? (0, _lib.pluckNumber)(a.canvasbasedepth, 10) : 0, n.canvasBgDepth = (0, _lib.pluckNumber)(a.canvasbgdepth, 3)), E && E.configure(), n.placeAxisLabelsOnTop = (0, _lib.pluckNumber)(a.placexaxislabelsontop, 0), n.enableAnimation = (0, _lib.pluckNumber)(a.animation, a.defaultanimation, 1), n.showToolTip = (0, _lib.pluckNumber)(a.showtooltip, 1), n.printOption = { enabled: (0, _lib.pluckNumber)(a.printshowbutton, a.showprintmenuitem, 0) }, n.drawCrossLineOnTop = (0, _lib.pluckNumber)(a.drawcrosslineontop, 1), s = n.style = {}, v.addToEnv('style', s), n.textDirection = '1' === a.hasrtltext ? 'rtl' : _lib.BLANKSTRING, s.inCanfontFamily = o = (0, _lib.pluck)(a.basefont, 'Verdana,sans'), s.inCanfontSize = i = (0, _lib.pluckFontSize)(a.basefontsize, 10), s.inCancolor = r = (0, _lib.pluck)(a.basefontcolor, E.getColor(b.baseFontColor)), s.outCanfontFamily = (0, _lib.pluck)(a.outcnvbasefont, o), s.fontSize = l = (0, _lib.pluckFontSize)(a.outcnvbasefontsize, i), s.outCanfontSize = l + _lib.PXSTRING, s.outCancolor = (0, _lib.pluck)(a.outcnvbasefontcolor, r).replace(/^#? ([a-f0-9]+)/ig, '#$1'), s.baseFontSize = i, s.inCanfontSize = i + _lib.PXSTRING, s.inCancolor = r.replace(/^#? ([a-f0-9]+)/ig, '#$1'), s.inCanvasStyle = c = { fontFamily: o, fontSize: i, color: r }, s.inCanLineHeight = h = (0, _lib.setLineHeight)(c), m = (0, _lib.getFirstValue)(a.valuebordercolor, _lib.BLANKSTRING), m = m ? (0, _libGraphics.convertColor)(m, (0, _lib.pluckNumber)(a.valueborderalpha, a.valuealpha, 100)) : _lib.BLANKSTRING, n.reverseXAxis = v.config.allowreversexaxis && (0, _lib.pluckNumber)(a.reversexaxis, 0), n.showBorder = (0, _lib.pluckNumber)(a.showborder, f ? 0 : 1), n.borderWidth = mathMax(n.showBorder ? (0, _lib.pluckNumber)(a.borderthickness, 1) : 0, 0), n.useplotgradientcolor = '' === a.plotgradientcolor ? v.useplotgradientcolor || 0 : n.useplotgradientcolor, n.valuefontbold = (0, _lib.pluckNumber)(a.valuefontbold, n.valuefontbold), n.dataLabelStyle = p = { fontFamily: (0, _lib.pluck)(a.valuefont, o), fontSize: (0, _lib.pluck)(a.valuefontsize, (0, _lib.pInt)(i, 10)) + _lib.PXSTRING, lineHeight: h, color: (0, _libGraphics.convertColor)((0, _lib.pluck)(a.valuefontcolor, r), (0, _lib.pluckNumber)(a.valuefontalpha, a.valuealpha, 100)), fontWeight: n.valuefontbold ? BOLD : NORMAL, fontStyle: (0, _lib.pluckNumber)(a.valuefontitalic) ? 'italic' : NORMAL, border: m || a.valuebgcolor ? (0, _lib.pluckNumber)(a.valueborderthickness, 1) + 'px solid' : _lib.BLANKSTRING, borderColor: m, borderThickness: (0, _lib.pluckNumber)(a.valueborderthickness, 1), borderPadding: (0, _lib.pluckNumber)(a.valueborderpadding, 2), borderRadius: (0, _lib.pluckNumber)(a.valueborderradius, 0), backgroundColor: a.valuebgcolor ? (0, _libGraphics.convertColor)(a.valuebgcolor, (0, _lib.pluckNumber)(a.valuebgalpha, a.valuealpha, 100)) : _lib.BLANKSTRING, borderDash: (0, _lib.pluckNumber)(a.valueborderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(a.valueborderdashlen, 4), (0, _lib.pluckNumber)(a.valueborderdashgap, 2)) : _lib.DASH_DEF }, (0, _lib.setLineHeight)(p), n.legendposition = (0, _lib.pluck)(a.legendposition, _lib.POSITION_BOTTOM), n.alignLegendWithCanvas = (0, _lib.pluckNumber)(a.alignlegendwithcanvas, 1), n.origMarginTop = (0, _lib.pluckNumber)(a.charttopmargin, v.chartTopMargin, 15), n.origMarginLeft = (0, _lib.pluckNumber)(a.chartleftmargin, v.chartLeftMargin, 15), n.origMarginBottom = (0, _lib.pluckNumber)(a.chartbottommargin, v.chartBottomMargin, 15), n.origMarginRight = (0, _lib.pluckNumber)(a.chartrightmargin, v.chartRightMargin, 15), n.origCanvasLeftMargin = (0, _lib.pluckNumber)(a.canvasleftmargin, 0), n.origCanvasRightMargin = (0, _lib.pluckNumber)(a.canvasrightmargin, 0), n.origCanvasTopMargin = (0, _lib.pluckNumber)(a.canvastopmargin, 0), n.origCanvasBottomMargin = (0, _lib.pluckNumber)(a.canvasbottommargin, 0), n.minChartWidthPercent = (0, _lib.pluckNumber)(a.minchartwidth, v.minChartWidth, 50) / 100, n.minChartHeightPercent = (0, _lib.pluckNumber)(a.minchartheight, v.minChartHeight, 50) / 100, n.minCanvasWidthPercent = (0, _lib.pluckNumber)(a.mincanvaswidth, v.minCanvasWidth, 60) / 100, n.minCanvasHeightPercent = (0, _lib.pluckNumber)(a.mincanvasheight, v.minCanvasHeight, 30) / 100, g = (0, _lib.pluck)(a.zeroplanecolor, a.divlinecolor, E.getColor(b.divLineColor)), d = (0, _lib.pluck)(a.zeroplanealpha, a.divlinealpha, E.getColor('divLineAlpha')), n.zeroPlaneColor = (0, _libGraphics.convertColor)(g, d), n.zeroPlaneBorderColor = (0, _libGraphics.convertColor)((0, _lib.pluck)(a.zeroplanebordercolor, g), (0, _lib.pluckNumber)(a.zeroplaneshowborder, 1) ? d : 0), n.zeroPlaneShowBorder = (0, _lib.pluckNumber)(a.zeroplaneshowborder, 1), n.realtimeEnabled = (0, _lib.pluckNumber)(a.realtimeenabled, v.isRealTime), n.showLegend = (0, _lib.pluckNumber)(a.showlegend, v.showLegend, 1), n.link = a.clickurl, n.transposeAxis = (0, _lib.pluckNumber)(v.transposeAxis, a.transposeaxis, 0), n.useEllipsesWhenOverflow = (0, _lib.pluckNumber)(a.useellipseswhenoverflow, a.useellipsewhenoverflow, 1), n.drawTrendRegion = (0, _lib.pluckNumber)(a.drawcrossline, 0), n.plotcolorintooltip = (0, _lib.pluckNumber)(a.plotcolorintooltip, v.config.singleseries ? 0 : 1), n.plotbinsize = mathMin((0, _lib.pluckNumber)(a.plotbinsize, v.plotbinsize, .5), 1), n.labelbinsize = mathMin((0, _lib.pluckNumber)(a.labelbinsize, 1), 1), n.labelbinsize = n.plotbinsize > n.labelbinsize ? n.plotbinsize : n.labelbinsize, n.enableMouseOutEvent = (0, _lib.pluckNumber)(a.enablemouseoutevent, v.enableMouseOutEvent, 1), n.plotSpacePercent = Math.max((0, _lib.pluckNumber)(a.plotspacepercent, v.plotSpacePercent), 0), n.maxColWidth = t((0, _lib.pluckNumber)(a.maxcolwidth, 50)), n.maxBarHeight = t((0, _lib.pluckNumber)(a.maxbarheight, 50)), n.overlapColumns = (0, _lib.pluckNumber)(a.overlapcolumns, a.overlapbars, n.is3D ? 0 : 1), n.plotPaddingPercent = a.plotpaddingpercent, n.tooltipgrayoutcolor = (0, _lib.pluck)(a.tooltipgrayoutcolor, _lib.preDefStr.colors.AAAAAA), n.clickURLOverridesPlotLinks = (0, _lib.pluckNumber)(a.clickurloverridesplotlinks, 0), v.addToEnv('chartConfig', n), v.addToEnv('linkClickFN', (0, _lib.getLinkAction)(v.getFromEnv('dataSource'), v)), v.addToEnv('dataLabelStyle', p);
  }createComponent() {
    let e,
        t = this,
        a = t.config;e = a.skipConfigureIteration, t.createBaseComponent(), (0, _lib.componentFactory)(t, _caption2.default, 'caption'), e.caption = !0, (0, _lib.componentFactory)(t, _subCaption2.default, 'subCaption'), e.subCaption = !0, (0, _lib.componentFactory)(t, _background2.default, 'background'), e.background = !0, t._createConfigurableComponents && t._createConfigurableComponents(), t.config.realtimeEnabled && t._realTimeConfigure && t._realTimeConfigure();
  }configureChildren() {
    var e = this;e._mapChildren(t => {
      !t.getState('removed') && e.config.skipConfigureIteration[t.getName()] && t.configure && t.configure();
    });
  }_createToolBox() {
    _createToolBox.call(this);
  }configureAttributes(e) {
    configurer.call(this, e);
  }setTooltipStyle() {
    let e = this.config,
        t = this.getFromEnv('toolTipController');t.setStyle({ bgColor: (0, _libGraphics.convertColor)(e.tooltipbgcolor || 'FFF', e.tooltipbgalpha || 100), rawBgColor: (e.tooltipbgcolor || 'FFF').replace(/\s+/g, '').replace(/^#?([a-f0-9]+)/ig, '#$1'), fontColor: (e.tooltipcolor || e.basefontcolor || '545454').replace(/\s+/g, '').replace(/^#?([a-f0-9]+)/ig, '#$1'), borderColor: (0, _libGraphics.convertColor)(e.tooltipbordercolor || '666', e.tooltipborderalpha || 100), rawBorderColor: (e.tooltipbordercolor || '666').replace(/\s+/g, '').replace(/^#?([a-f0-9]+)/ig, '#$1'), bgAlpha: (0, _lib.pluckNumber)(e.tooltipbgalpha, 100), borderThickness: (0, _lib.pluckNumber)(e.tooltipborderthickness, 1), showToolTipShadow: (0, _lib.pluckNumber)(e.showtooltipshadow, e.showshadow, 1), borderRadius: (0, _lib.pluckNumber)(e.tooltipborderradius, 0), "font-size": e.basefontsize || 10, "font-family": e.basefont || this.getFromEnv('style').inCanfontFamily, padding: (0, _lib.pluckNumber)(e.tooltippadding || 3), borderAlpha: (0, _lib.pluckNumber)(e.tooltipborderalpha, 100) });
  }__setDefaultConfig() {
    super.__setDefaultConfig();let e = this.config;e.valuefontbold = 0, e.stickytracking = 1, e.usemessagelog = 0, e.zeroplanethickness = _lib.UNDEF, e.animationeffect = 'linear', e.showshadow = 1, e.showhovereffect = _lib.UNDEF, e.plothovereffect = _lib.UNDEF, e.anchorhovereffect = _lib.UNDEF, e.plotborderdashed = _lib.UNDEF, e.stack100percent = _lib.UNDEF, e.showpercentvalues = _lib.UNDEF, e.showpercentintooltip = _lib.UNDEF, e.plotbordercolor = _lib.UNDEF, e.showtooltip = 1, e.seriesnameintooltip = 1, e.rotatevalues = 0, e.minimizetendency = 0, e.plotfillangle = 270, e.valuepadding = 2, e.useplotgradientcolor = 1, e.plotborderthickness = 1, e.plotfillalpha = SEVENTYSTRING, e.showvalues = 1, e.valueposition = AUTO, e.drawcrossline = _lib.UNDEF, e.tooltipsepchar = ', ', e.usedataplotcolorforlabels = 0, e.placevaluesinside = 0, e.showplotborder = 1, e.use3dlighting = 1, e.useroundedges = 0, e.plotspacepercent = 20, e.plotpaddingpercent = _lib.UNDEF, e.plotfillratio = _lib.UNDEF, e.maxcolwidth = 50, e.plotborderdashlen = 5, e.plotborderdashgap = 4, e.useScaleRecursively = !0, e.formatnumberscale = 1, e.decimals = 2, e.decimalprecision = 10, e.tooltipbgcolor = 'FFF', e.tooltipcolor = _lib.UNDEF, e.tooltipbordercolor = '666', e.tooltipbgalpha = 100, e.tooltipborderthickness = 1, e.showtooltipshadow = _lib.UNDEF, e.basefontsize = 10, e.basefont = 'Verdana, sans', e.tooltipborderradius = 0, e.tooltippadding = 3, e.tooltipborderalpha = 100;
  }configure(e) {
    e.chart = e.chart || e.graph || e.map || {}, super.configure(e);
  }_checkInvalidData() {
    var e = this,
        t = e.getFromEnv('dataSource'),
        a = e.getFromEnv('chartInstance');if (!e.isWidget && !e.isMap && !(t.data && 0 !== t.data.length) && !t.dataset && !t.value && !t.lineset && !t.annotations && !t.category && !(t.tasks || t.process) && !t.axis) return e.setChartMessage(), e.drawChartMessage(), a.__state.dataReady = !1, a.jsVars.hasNativeMessage = !0, a.jsVars.drawCount += 1, !0;
  }_checkInvalidSpecificData() {
    let e = this.getFromEnv('dataSource'),
        t = e.dataset,
        a = e.categories;if (!t || !a || 0 === a.length || !a[0].category) return !0;
  }setChartEvents() {
    var e = this,
        t = e.getFromEnv('eventListeners'),
        a = e.getFromEnv('dataSource'),
        n = a && a.chart,
        o = e.getFromEnv('paper') && e.getFromEnv('paper').canvas,
        i = e.getFromEnv('chart-container'),
        r = n && (0, _lib.pluckNumber)(n.enablechartmousemoveevent, 0);(n || o) && (!t && (t = [], e.addToEnv('eventListeners', t)), _domEvent2.default.unlisten(i, 'click', onContainerClick), t.push(_domEvent2.default.listen(i, 'click', onContainerClick, e)), _domEvent2.default.unlisten(o, 'mouseover', chartHoverManager, e), _domEvent2.default.unlisten(o, 'touchstart', chartHoverManager, e), _domEvent2.default.unlisten(o, 'mouseout', chartHoverManager, e), _domEvent2.default.unlisten(o, 'touchend', chartHoverManager, e), t.push(_domEvent2.default.listen(o, 'mouseover touchstart mouseout touchend', chartHoverManager, e)), _domEvent2.default.unlisten(i, 'mousemove', CommonAPI.onContainerMouseMove, e), _domEvent2.default.unlisten(i, 'touchmove', CommonAPI.onContainerMouseMove, e), r && t.push(_domEvent2.default.listen(i, 'mousemove touchmove', CommonAPI.onContainerMouseMove, e)));
  }static chartMenuTools() {
    var e = [];return { get: function () {
        return e;
      }, set: function (t) {
        var a,
            n = t.length || 0;for (a = 0; a < n; a += 1) e.push(t[a]);
      }, reset: function (t, a) {
        var n = a.getChildren('actionBar'),
            o = a.getChildren('chartMenuBar');o && a.detachChild(o.getId()) && (o.drawn = !1), n && a.detachChild(n.getId()) && (n.drawn = !1), e.length = 0;t && (t.idCount = 0, t.clean());
      }, update: function (e, t, a) {
        var n,
            o,
            r,
            s,
            g,
            d,
            c,
            h,
            p,
            m = a.getChildren('chartMenuBar') || a.getChildren('actionBar'),
            u = m.config.componentGroups;for (g = 0, d = u.length; g < d; g++) for (p = u[g], s = p.config.symbolList || [], (c = 0, h = s.length); c < h; c++) s[c] instanceof _symbolWithContext2.default && (r = s[c], n = r.getListRefernce().getFirstContainer().config.atomicLists);for (n = n || [], g = 0, d = n.length; g < d; g++) if (o = n[g], o.config.name === e) {
          o.updateName(t);break;
        }
      } };
  }get(e, t) {
    var a = this[e];return t ? a && a[t] : a;
  }prepareAttributes() {
    this.config.hasChartMessage || super.prepareAttributes();
  }disposeChartStyleSheet() {
    var e = this,
        t = e.getFromEnv('paper');t && t.cssClear();
  }createChartStyleSheet() {
    var e = this,
        t = e.getFromEnv('paper');t.cssRender();
  }_dispose() {
    let e = this.getFromEnv('eventListeners'),
        t = e && e.length;for (; t--;) e[t].unlisten();super._dispose();
  }_allocateSpace(e) {
    var t,
        a,
        n = this,
        o = n.getChildren('canvas'),
        i = o && o[0].config,
        r = n.config,
        l = r.canvasHeight,
        s = r.canvasWidth,
        g = r.availableHeight,
        d = r.availableWidth;a = r.canvasLeft += e.left || 0, t = r.canvasTop += e.top || 0, s = r.canvasWidth = mathMax(s - ((e.left || 0) + (e.right || 0)), 0), l = r.canvasHeight = mathMax(l - ((e.top || 0) + (e.bottom || 0)), 0), r.availableHeight = mathMax(g - ((e.top || 0) + (e.bottom || 0)), 0), r.availableWidth = mathMax(d - ((e.left || 0) + (e.right || 0)), 0), r.canvasRight = a + s, r.canvasBottom = t + l, i && (i.canvasPaddingLeft = mathMax(i.canvasPaddingLeft, e.paddingLeft || 0), i.canvasPaddingRight = mathMax(i.canvasPaddingRight, e.paddingRight || 0), i.canvasPaddingTop = mathMax(i.canvasPaddingTop, e.paddingTop || 0), i.canvasPaddingBottom = mathMax(i.canvasPaddingBottom, e.paddingBottom || 0)), o && o[0].setDimension({ top: t, left: a, width: s, height: l });
  }_fetchCaptionPos(e) {
    var t,
        a = this,
        n = a.config,
        o = n.width,
        i = a.getChildren('chartMenuBar'),
        r = i.config.componentGroups[0].config.btnConfig,
        l = i.getLogicalSpace(),
        s = l.width,
        g = a.getChildren('caption') && a.getChildren('caption')[0],
        d = g.config,
        c = d.width,
        h = 'l' === r.hAlign,
        p = n.width - e,
        m = h ? e : p,
        u = n.origMarginRight,
        v = n.origMarginLeft,
        C = h ? v : u;return t = d.align === _lib.POSITION_MIDDLE ? m - c / 2 - C - s : 'start' === d.align ? h ? -1 : o - n.canvasLeft - C - c - s + d.horizontalPadding : h ? o - (u + v + s + c) : -1, t;
  }_manageCaptionSpacing(e, t) {
    var a,
        n = this,
        o = n.getChildren('caption')[0];return a = o.manageSpace(e, t), a;
  }_manageChartMenuBar(e) {
    var t,
        a,
        n = this,
        o = n.config,
        i = n.getChildren('chartMenuBar'),
        r = i && i.getLogicalSpace(),
        l = n.getChildren('caption') && n.getChildren('caption')[0],
        s = l.config,
        g = s.isOnTop,
        d = o.width / 2,
        c = o.canvasRight,
        h = c ? (o.canvasLeft + c) / 2 : d,
        p = 0,
        m = s.alignWithCanvas ? h : d,
        u = i && i.config.componentGroups.length && i.config.componentGroups[0].config.btnConfig,
        v = r && u.spaceNotHardCoded;return u && u.spaceNotHardCoded && (u.x = (0, _lib.pluckNumber)('l' === u.hAlign ? 0 : o.width), u.y = (0, _lib.pluckNumber)('t' === u.vAlign ? 0 : o.height)), delete s._offsetHeight, a = s.alignWithCanvas ? o.canvasWidth : o.width - o.origMarginLeft - o.origMarginRight, g ? (t = n._manageCaptionSpacing(e, a), v && (p = n._fetchCaptionPos(m), s._offsetHeight = 0 > p ? r.height : 0, t.top = 0 > p ? (0, _lib.pluckNumber)(t.top, 0) + r.height : mathMax(t.top, r.height)), n._allocateSpace(t)) : (n._allocateSpace({ top: v ? r.height : 0 }), t = n._manageCaptionSpacing(e, a), n._allocateSpace(t)), { top: r ? mathMax(r.height, t.top) : t.top, bottom: t.bottom };
  }_manageSpace() {
    var e,
        t,
        a,
        n,
        o,
        i,
        r,
        l,
        s,
        g,
        d,
        c,
        h = this,
        p = h.getChildren('canvas') && h.getChildren('canvas')[0],
        m = p && p.config,
        u = h.config,
        v = h.getFromEnv('chartWidth'),
        C = h.getFromEnv('chartHeight');u.width = v, u.height = C, u.minChartHeight = s = u.minChartHeightPercent * C, u.minChartWidth = g = u.minChartWidthPercent * v, u.minCanvasWidth = e = u.minCanvasWidthPercent * g, u.minCanvasHeight = t = u.minCanvasHeightPercent * s, u.marginTop = a = u.origMarginTop, u.marginLeft = n = u.origMarginLeft, u.marginBottom = o = u.origMarginBottom, u.marginRight = i = u.origMarginRight, u.canvasMarginTop = u.origCanvasTopMargin, u.canvasMarginLeft = u.origCanvasLeftMargin, u.canvasMarginBottom = u.origCanvasBottomMargin, u.canvasMarginRight = u.origCanvasRightMargin, u.canvasHeight = r = u.height - u.marginTop - u.marginBottom, u.canvasWidth = l = u.width - u.marginLeft - u.marginRight, u.availableHeight = r - t, u.availableWidth = l - e, r < s && (d = C - s, u.canvasHeight = s, c = a + o, u.marginTop = d * a / c, u.marginBottom = d * o / c, u.availableHeight = s - t), l < g && (d = v - g, c = i + n, u.canvasWidth = g, u.marginLeft = d * n / c, u.marginRight = d * i / c, u.availableWidth = g - e), u.canvasLeft = u.marginLeft, u.canvasTop = u.marginTop, m && (m.canvasPaddingLeft = mathMin(m.origCanvasLeftPad, mathRound(.1 * u.height)), m.canvasPaddingRight = mathMin(m.origCanvasRightPad, mathRound(.1 * u.height)), m.canvasPaddingTop = mathMin(m.origCanvasTopPad, mathRound(.1 * u.height)), m.canvasPaddingBottom = mathMin(m.origCanvasBottomPad, mathRound(.1 * u.height))), h._spaceManager();
  }_preDraw() {
    var e = this;e._mapChildren(e => {
      !e.getState('removed') && e.preDraw && e.preDraw();
    }), e._setAxisLimits && e._setAxisLimits(), e._createToolBoxGantt && e._createToolBoxGantt();
  }_clearTimers() {
    var e,
        t = this,
        a = t.config && t.config.realTimeConfig,
        n = t.config.timers,
        o = n && n.setTimeout,
        i = n && n.setInterval;for (e in a && (a.refreshIntervalFlag = !1), o) clearTimeout(o[e]);for (e in i) clearInterval(i[e]);
  }setChartCursor() {
    var e = this,
        t = e.config.link,
        a = e.getFromEnv('paper').canvas.style;Raphael.svg ? a.cursor = t ? _lib.POINTER : 'default' : e.getFromEnv('paper').canvas.style.cursor = t ? _lib.HAND : 'default';
  }_createLayers() {
    var e,
        t = this,
        a = t.getFromEnv('animationManager');e = t.getContainer('parentgroup') || t.addContainer('parentgroup', a.setAnimation({ el: 'group', attr: { name: 'parentgroup' }, component: t })), t.getChildContainer('backgroundGroup') || t.addChildContainer('backgroundGroup', createGroup({ name: 'background' }, e, t)), t.getChildContainer('axisBottomGroup') || t.addChildContainer('axisBottomGroup', createGroup({ name: 'axisbottom' }, e, t)), t.getChildContainer('belowPlotGroup') || t.addChildContainer('belowPlotGroup', createGroup({ name: 'belowplot' }, e, t)), t.getChildContainer('lowerAnnotationGroup') || t.addChildContainer('lowerAnnotationGroup', createGroup({ name: 'lowerannotations' }, t.getChildContainer('belowPlotGroup'), t)), t.getChildContainer('plotGroup') || t.addChildContainer('plotGroup', createGroup({ name: 'plots' }, e, t)), t.getChildContainer('axisTopGroup') || t.addChildContainer('axisTopGroup', createGroup({ name: 'axistop' }, e, t)), t.getChildContainer('sumLabelsLayer') || t.addChildContainer('sumLabelsLayer', createGroup({ name: 'sumlabels', class: 'fusioncharts-datalabels' }, e, t)), t.getChildContainer('datalabelsGroup') || t.addChildContainer('datalabelsGroup', createGroup({ name: 'datalabel' }, e, t)), t.getChildContainer('abovePlotGroup') || t.addChildContainer('abovePlotGroup', createGroup({ name: 'aboveplot' }, e, t)), t.getChildContainer('upperAnnotationGroup') || t.addChildContainer('upperAnnotationGroup', createGroup({ name: 'upperannotations' }, t.getChildContainer('abovePlotGroup'), t)), t.getChildContainer('captionGroup') || t.addChildContainer('captionGroup', createGroup({ name: 'caption' }, e, t)), t.getChildContainer('defaultGroup') || t.addChildContainer('defaultGroup', createGroup({ name: 'chartdefault' }, e, t)), t.getChildContainer('defaultShadowGroup') || t.addChildContainer('defaultShadowGroup', createGroup({ name: 'chartdefault-shadow' }, e, t)), t.getChildContainer('trackerGroup') || t.addChildContainer('trackerGroup', createGroup({ name: 'tracker' }, e, t)), t.getChildContainer('buttonGroup') || t.addChildContainer('buttonGroup', a.setAnimation({ el: 'group', container: e, attr: { name: 'buttons' }, component: t })), t.getChildContainer('logoGroup') || t.addChildContainer('logoGroup', a.setAnimation({ el: 'group', attr: { name: 'logo' }, component: t }));
  }_setDataLabelStyle() {
    var e = this,
        t = e.config.dataLabelStyle,
        a = { fontFamily: t.fontFamily, fontSize: t.fontSize, fontWeight: t.fontWeight, fontStyle: t.fontStyle },
        n = e.getChildContainer('datalabelsGroup');n.css(a);
  }_manageCaptionPosition() {
    let e,
        t,
        a,
        n,
        o = this,
        i = o.config,
        r = o.getChildren(),
        l = r.caption && r.caption[0],
        s = r.subCaption && r.subCaption[0],
        g = l.config,
        d = g.widgetValueHeight || 0,
        c = s.config,
        h = i.canvasWidth,
        p = g.align,
        m = g.text,
        u = g.alignWithCanvas,
        v = g.horizontalPadding,
        C = i.width,
        f = i.canvasLeft,
        b = i.canvasRight,
        w = i.marginRight,
        E = i.marginLeft,
        F = i.marginTop,
        M = (mathRound(f) || 0) + (0, _lib.pluckNumber)(h, C) / 2,
        T = g.height,
        L = c.height,
        _ = r.legend && r.legend[0] && r.legend[0].config || {},
        x = _.height || 0,
        S = _.legendPadding || 0,
        k = i.legendposition,
        B = o.getFromEnv('gLegend') || {},
        P = 0,
        y = !!(B.conf || {}).showLegend,
        I = o.config.borderWidth,
        A = r.actionBar,
        G = 0;_.isActive || (x = 0), y && o.config.gLegendEnabled && (P = B.getLogicalSpace().height);e = p === POSITION_END ? u ? b - v : C - v : p === POSITION_START ? u ? f + v : v : u ? M : E + .5 * (C - E - w) || C / 2;g.isOnTop ? t = (I || 0) + (F || 0) : (k.toLowerCase() === POSITION_RIGHT && (S = 0, x = 0, P = 0), A && (n = A.getLogicalSpace() || {}, G = n.height, (G === _lib.UNDEF || G === 1 / 0 || 0 > G) && (G = 0)), t = o.config.height - o.config.marginBottom - T - (L || 0) - (I || 0) - (S || 0) - (x || 0) - P - d - G), t += g._offsetHeight || 0, l.setDimention({ x: e, y: t }), a = m ? t + T + 2 : t || F || 0, s.setDimention({ x: e, y: a });
  }_updateVisuals() {
    var e,
        t,
        a = this,
        n = a.getFromEnv('core-options'),
        o = a.getFromEnv('paper'),
        i = a.getFromEnv('animationManager'),
        r = a.config,
        l = a.getFromEnv('chartWidth'),
        s = a.getFromEnv('chartHeight');n && !n._SVGDefinitionURLUpdated && (/^\s*absolute\s*$/i.test(n.SVGDefinitionURL) && (Raphael._url = (Raphael._g && Raphael._g.win || window).location.href.replace(/#.*?$/, _lib.BLANKSTRING)), n._SVGDefinitionURLUpdated = !0), o ? (!_lib.hasSVG && (r._prevWidth || r._prevHeight) && o.setSize(r._prevWidth, r._prevHeight), t = { width: l, height: s }, i.setAnimation({ el: o, attr: t, component: a })) : (o = new Raphael(a.getFromEnv('chart-container'), l, s), o.setHTMLClassName('fusioncharts-div'), a.addToEnv('paper', o), o.setConfig('stroke-linecap', _lib.ROUND)), r._prevWidth = l, r._prevHeight = s, a.setChartCursor(), a._createLayers(), a._setDataLabelStyle(), e = a.getChildren('chartMenuBar') ? 'chartMenuBar' : a.getChildren('actionBar') ? 'actionBar' : _lib.UNDEF, e && a.allocateDimensionOfChartMenuBar(e), a.getChildren('chartMenuBar') && (a.getChildren('chartMenuBar').config.parentLayer = a.getContainer('parentgroup')), a._drawCreditLabel();
  }allocateDimensionOfChartMenuBar(e) {
    var t = this,
        a = t.config,
        n = t.getChildren(e),
        o = n.getLogicalSpace(),
        i = n.config.toolbarConfig,
        r = n.config.componentGroups[0].config.btnConfig,
        l = r.vDirection,
        s = r.hDirection,
        g = r.y,
        d = r.x;i.fill = TRACKER_FILL, i.borderColor = TRACKER_FILL, r.spaceNotHardCoded && ('chartMenuBar' === e ? (g += r.vMargin * l + mathMin(0, o.height * l), d += r.hMargin * s - mathMax(0, o.width * s), d = 'l' === r.hAlign ? d + o.width : d - o.width) : (g = a.height - a.marginBottom - o.height, d = 'b' === r.vAlign && 'r' === r.hAlign ? a.width - a.marginRight - o.width : a.marginLeft)), n.setMenuBarDimension(d, g);
  }draw() {
    var e = this,
        t = e.getFromEnv('chartInstance');e.config.hasChartMessage ? (e._hide(), e.drawChartMessage(), e.fireChartInstanceEvent('nodatatodisplay', {}, [t.id]), t.jsVars.drawCount += 1, t.__state.dataReady = !1, t.jsVars.hasNativeMessage = !0) : (e._hideChartMessage(), e._clearTimers && e._clearTimers(), e.config.plotOverFlow = !1, e._show(), e._updateVisuals(), e.setState('initiated', !0), t.jsVars.drawCount += 1, t.jsVars.hasNativeMessage = !1);
  }manageSpace() {
    let e = this;e.config.hasChartMessage || (e._preDraw(), e.addToolbar && e.addToolbar(), e._manageSpace(), e._postSpaceManagement && e._postSpaceManagement());
  }_show() {
    this.getContainer('parentgroup') && this.getContainer('parentgroup').show();
  }_manageActionBarSpace() {
    var e = this,
        t = e.config,
        a = e.getChildren('actionBar'),
        n = a && a.getLogicalSpace() || {},
        o = n.height || 0;return t.actionBarHeight = o, { bottom: o };
  }_hide() {
    this.getContainer('parentgroup') && this.getContainer('parentgroup').hide();
  }static onContainerMouseMove(t) {
    var e,
        a = t.data,
        n = a.getFromEnv('chartInstance'),
        o = t.originalEvent,
        i = (0, _lib.getMouseCoordinate)(a.getFromEnv('chart-container'), o, a);n.ref && (e = (0, _lib.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv('chartWidth'), pixelWidth: a.getFromEnv('chartHeight'), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, i), a.fireChartInstanceEvent('chartMouseMove', e));
  }static onContainerRollOver(t) {
    var e,
        a = t.data,
        n = a.getFromEnv('chartInstance'),
        o = t.originalEvent,
        i = (0, _lib.getMouseCoordinate)(a.getFromEnv('chart-container'), o, a);n.ref && (e = (0, _lib.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv('chartWidth'), pixelWidth: a.getFromEnv('chartHeight'), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, i), a.fireChartInstanceEvent('chartRollOver', e));
  }static onContainerRollOut(t) {
    var e,
        a = t.chart,
        n = a.getFromEnv('chartInstance'),
        o = t.event,
        i = (0, _lib.getMouseCoordinate)(a.getFromEnv('chart-container'), o, a);n.ref && (e = (0, _lib.extend2)({ height: n.args.height, width: n.args.width, pixelHeight: a.getFromEnv('chartWidth'), pixelWidth: a.getFromEnv('chartHeight'), id: n.args.id, renderer: n.args.renderer, container: n.options.containerElement }, i), a.fireChartInstanceEvent('chartRollOut', e));
  }static winMouseHover(t) {
    var e = t.originalEvent,
        a = e.target || e.originalTarget || e.srcElement || e.relatedTarget || e.fromElement,
        n = t.data,
        o = n.getFromEnv('paper'),
        i = { chart: n, event: t.originalEvent };isVML ? !o.getById(a.parentNode.raphaelid) && (CommonAPI.onContainerRollOut(i), n.config.mouseStateIn = !1, _domEvent2.default.unlisten(document, 'mouseover', CommonAPI.winMouseHover)) : !a.viewportElement && (n.config.mouseStateIn = !1, CommonAPI.onContainerRollOut(i), _domEvent2.default.unlisten(window, 'mouseover', CommonAPI.winMouseHover));
  }
}exports.default = CommonAPI;
exports._drawDataset = _drawDataset;
exports._createToolBox = _createToolBox;
exports.configurer = configurer;
},{"./basechart":22,"../_internal/factories/canvas":123,"../_internal/dependency-manager":20,"../_internal/components/caption":143,"../_internal/components/sub-caption":144,"../_internal/components/background":145,"../_internal/color-utils/colormanager":146,"../_internal/components/numberformatter":31,"../_internal/tool-box/symbolWithContext":147,"../_internal/misc/event-api":25,"../_internal/animation-rules/common-animation":148,"../_internal/lib/lib":23,"../_internal/lib/lib-graphics":24,"../_internal/lib/lib-attr":75,"../_internal/dom/dom-event":76,"../_internal/tool-box/toolbox":149}],109:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commonchartapi = require('./commonchartapi');

var _commonchartapi2 = _interopRequireDefault(_commonchartapi);

var _lib = require('../_internal/lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonSpaceManager extends _commonchartapi2.default {
  _spaceManager() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = this,
        w = v.config,
        x = v.getChildren('xAxis') && v.getChildren('xAxis')[0],
        y = v.getChildren('yAxis') && v.getChildren('yAxis') || [],
        z = w.legendposition,
        A = w.xDepth,
        B = w.yDepth,
        C = w.canvasBgDepth,
        D = w.canvasBaseDepth,
        E = w.canvasBasePadding,
        F = v.getChildren('canvas')[0],
        G = F.config.canvasBorderWidth,
        H = w.realTimeConfig && w.realTimeConfig.showRTValue,
        I = w.borderWidth,
        J = w.canvasMarginTop,
        K = w.canvasMarginBottom,
        L = w.canvasMarginLeft,
        M = w.canvasMarginRight,
        N = w.minCanvasHeight,
        O = w.minCanvasWidth,
        P = w.minChartWidth,
        Q = w.minChartHeight,
        R = w.height,
        S = w.width,
        T = !1,
        U = !1,
        V = w.origCanvasTopMargin,
        W = w.origCanvasBottomMargin,
        X = w.origCanvasLeftMargin,
        Y = w.origCanvasRightMargin,
        Z = [];for (w.canvasWidth - 2 * I < P && (p = (w.canvasWidth - P) / 2), w.canvasHeight - 2 * I < Q && (o = (w.canvasHeight - Q) / 2), v._allocateSpace({ top: o || I, bottom: o || I, left: p || I, right: p || I }), (l = 0, d = y.length); l < d; l++) c = y[l], a = .7 * w.availableWidth, t = c && c.placeAxis(a) || {}, Z.push({ axisIndex: l, spaceTaken: t }), c && v._allocateSpace(t);w.yAxisSpaceAllocation = Z, v._allocateSpace(v._manageActionBarSpace && v._manageActionBarSpace(.225 * w.availableHeight) || {}), v._manageLegendSpace && w.showLegend && v._manageLegendSpace(e), b = z === _lib.POSITION_BOTTOM ? .6 * w.availableHeight : .6 * w.availableWidth, B && (v._allocateSpace({ bottom: B }), w.shift = A + E + D), C && v._allocateSpace({ right: C }), w.canvasWidth - 2 * G < O && (r = (w.canvasWidth - O) / 2), v._allocateSpace({ left: r || G, right: r || G }), O > S - L - M && (U = !0, f = w.canvasWidth - O, u = L + M, L = w.canvasMarginLeft = f * L / u, M = w.canvasMarginRight = f * M / u), j = L > w.canvasLeft ? L - w.canvasLeft : 0, k = M > S - w.canvasRight ? M + w.canvasRight - S : 0, v._allocateSpace({ left: j, right: k }), U && (u = X + Y, n = w.canvasWidth, n > O && (f = n - O, j = f * X / u, k = f * Y / u), v._allocateSpace({ left: j, right: k })), w.actualCanvasMarginRight = k, w.actualCanvasMarginBottom = h, v._manageChartMenuBar(b), b = .2 * w.availableHeight, v._getSumValueSpace && v._allocateSpace(v._getSumValueSpace(b)), b = .3 * w.availableHeight, w.realtimeEnabled && (H ? v._allocateSpace(v._realTimeValuePositioning(b)) : v._hideRealTimeValue()), v._resetViewPortConfig && v._resetViewPortConfig(), v._setAxisScale && v._setAxisScale(), b = .6 * w.availableHeight, w.xAxisSpaceAllocation = s = x && x.placeAxis(b), x && v._allocateSpace(s), w.canvasHeight - 2 * G < N && (q = (w.canvasHeight - N) / 2), v._allocateSpace({ top: q || G, bottom: q || G }), v._allocateSpace({ bottom: D }), N > R - J - K && (T = !0, f = w.canvasHeight - N, u = J + K, J = w.canvasMarginTop = f * J / u, K = w.canvasMarginBottom = f * K / u), g = J > w.canvasTop ? J - w.canvasTop : 0, h = K > R - w.canvasBottom ? K + w.canvasBottom - R : 0, v._allocateSpace({ top: g, bottom: h }), T && (u = V + W, m = w.canvasHeight, m > N && (f = m - N, g = f * V / u, h = f * W / u), v._allocateSpace({ top: g, bottom: h })), w.actualCanvasMarginTop = g, w.actualCanvasMarginLeft = j, F.setDimension({ top: w.canvasTop, left: w.canvasLeft, width: w.canvasWidth, height: w.canvasHeight });
  }_postSpaceManagement() {
    var a,
        b,
        c = this,
        d = c.config,
        e = c.getChildren(),
        f = e.xAxis && e.xAxis[0],
        g = e.legend && e.legend[0],
        h = d.xDepth,
        j = c.getChildren('canvas');for (c.setAxisDimention && c.setAxisDimention(), f && c._allocateXAxisLabelSpace(f), f && f.shiftLabels(-h, 0), g && g.postSpaceManager(), a = 0; a < (j && j.length); a++) b = j[a], b.setCanvasPadding();c.setAxisDimention && c.setAxisDimention();
  }
}exports.default = CommonSpaceManager;
},{"./commonchartapi":127,"../_internal/lib/lib":23}],200:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _forceValidLowerLimit = (a, b) => a < b ? b : a;class Axis extends _componentInterface2.default {
  getType() {
    return 'axis';
  }__setDefaultConfig() {
    super.__setDefaultConfig(), this.components = { labels: [] };let a = this.config;a.setAdaptiveMin = 0, a.adjustDiv = 1, a.axisNameWidth = _lib.UNDEF, a.rotateAxisName = 0, a.useEllipsesWhenOverflow = 1, a.divLineColor = _lib.UNDEF, a.divLineAlpha = _lib.UNDEF, a.divLineThickness = _lib.UNDEF, a.divLineIsDashed = _lib.UNDEF, a.divLineDashLen = _lib.UNDEF, a.divLineDashGap = _lib.UNDEF, a.showAlternateGridColor = _lib.UNDEF, a.alternateGridColor = _lib.UNDEF, a.alternateGridAlpha = _lib.UNDEF, a.showZeroPlane = 1, a.zeroPlaneAlpha = 80, a.showZeroPlaneValue = 1, a.showZeroPlaneOnTop = 1, a.showAxisLine = _lib.UNDEF, a.axisLineThickness = _lib.UNDEF, a.axisLineAlpha = _lib.UNDEF, a.tickLength = 0, a.trendlineToolText = _lib.UNDEF, a.trendlineColor = '333333', a.trendlineThickness = 1, a.trendlineAlpha = _lib.UNDEF, a.showTrendlinesOnTop = 0, a.trendlinesAreDashed = 0, a.trendlinesDashLen = 5, a.trendlinesDashGap = 2, a.isTrendZone = _lib.UNDEF, a.showTrendlines = 1, a.showTrendlineLabels = 1, a.showLabels = 1, a.maxLabelHeight = _lib.UNDEF, a.rotateLabels = _lib.UNDEF, a.slantLabel = 0, a.showAxisValues = 1, a.showTooltip = 1, a.isActive = !0, a.drawLabels = !0, a.drawOnlyCategoryLine = !1, a.drawLabelsOpposit = !1, a.drawPlotlines = !0, a.drawAxisLine = !0, a.drawPlotBands = !0, a.drawAxisName = !0, a.drawAxisNameOpposit = !1, a.axisNameAlignCanvas = !1, a.drawAxisNameFromBottom = !1, a.drawTrendLines = !0, a.drawTrendLabels = !0, a.drawTick = !0, a.drawTickMinor = !0, a.animateAxis = !0, a.drawAxisLineWRTCanvas = !0, a.isRelativeAxisInverse = !1, a.axisIndex = 0, a.uniqueClassName = 0, a.viewPortRatio = {}, a.canvas = {}, a.axisRange = {}, a.drawnStaggerLines = _lib.UNDEF, a.axisDimention = {}, a.forceZeroTick = !0, a.isZeroTickForced = !1, a.extremeLabels = { firstLabel: {}, lastLabel: {} }, a._setRangeAgain = !1, a._defaultForceDecimal = _lib.UNDEF, a._defaultDecimalPrecision = _lib.UNDEF, a.rangeChanged = !1, a.dimensionChanged = !1, a.apparentScrollPos = 0, a.visibleMin = _lib.UNDEF, a.visibleMax = _lib.UNDEF, a.setPadding = !1, a.trendLimits = _lib.UNDEF;
  }configureAttributes(a) {
    var b,
        c,
        d,
        e,
        f = Math.abs,
        g = this,
        h = g.config,
        i = g.getFromEnv('chart'),
        j = g.getFromEnv('dataSource'),
        k = i.config.is3D,
        l = j.chart,
        m = g.getFromEnv('number-formatter');b = h.rawAttr = a, h.referenceInfo = [], h.parsedTrendLabels = [], h.parsedVlineInfo = [], h.trendLines = b.trendlines, h.vTrendLines = b.vtrendlines, (0, _lib.parseConfiguration)(b, h), h.axisName = (0, _lib.parseUnsafeString)(b.axisName), h.axisValuePadding = h.axisNamePadding || (0, _lib.pluckNumber)(b.axisValuePadding, 4), h.axisNamePadding = h.axisNamePadding || (0, _lib.pluckNumber)(b.axisNamePadding, 5), h.maxLabelWidthPercent = (0, _lib.pluckNumber)(b.maxLabelWidthPercent), h.maxLabelWidthPercent = f(h.maxLabelWidthPercent), h.minLabelWidthPercent = f((0, _lib.pluckNumber)(b.minLabelWidthPercent)), h.numDivLines = (0, _lib.pluckNumber)(b.numDivLines, 4), h.numDivLines = _forceValidLowerLimit(h.numDivLines, 0), h.categoryNumDivLines = (0, _lib.pluckNumber)(b.numDivLines, 0), h.axisValuePadding = _forceValidLowerLimit(h.axisValuePadding, 0), h.isReverse = (0, _lib.pluckNumber)(b.isReverse, 0), h.isOpposit = (0, _lib.pluckNumber)(b.isOpposit, 0), h.isVertical = (0, _lib.pluckNumber)(b.isVertical, 0), h.categoryDivLinesFromZero = 1, h.axisMinValue = m.getCleanValue(b.axisMinValue), h.axisMaxValue = m.getCleanValue(b.axisMaxValue), h.zeroPlaneColor = (0, _lib.pluck)(b.zeroPlaneColor, b.divLineColor), h.zeroPlaneThickness = (0, _lib.pluck)(b.zeroPlaneThickness, b.divLineThickness), h.axisLineColor = (0, _libGraphics.convertColor)(b.axisLineColor, b.axisLineAlpha), h.tickAlpha = (0, _lib.pluckNumber)(b.tickAlpha, h.axisLineAlpha), h.tickColor = (0, _libGraphics.convertColor)((0, _lib.pluck)(b.tickColor, b.axisLineColor), h.tickAlpha), h.tickWidth = (0, _lib.pluckNumber)(b.tickWidth, h.axisLineThickness), h.maxZoomLimit = (0, _lib.pluckNumber)(l.maxzoomlimit, i.maxzoomlimit, 1e3), h.showVLines = (0, _lib.pluckNumber)(l.showvlines, 1), h.showVLinesOnTop = (0, _lib.pluckNumber)(l.showvlinesontop, 0), h.showVLineLabels = (0, _lib.pluckNumber)(l.showvlinelabels, this.showVLineLabels, 1), h.showVLineLabelBorder = (0, _lib.pluckNumber)(l.showvlinelabelborder, 1), h.rotateVLineLabels = (0, _lib.pluckNumber)(l.rotatevlinelabels, 0), h.vLineColor = (0, _lib.pluck)(l.vlinecolor, '333333'), h.vLineLabelColor = (0, _lib.pluck)(l.vlinelabelcolor), h.vLineThickness = (0, _lib.pluck)(l.vlinethickness, 1), h.vLineAlpha = (0, _lib.pluckNumber)(l.vlinealpha, 80), h.vLineLabelBgColor = (0, _lib.pluck)(l.vlinelabelbgcolor, 'ffffff'), h.vLineLabelBgAlpha = (0, _lib.pluckNumber)(l.vlinelabelbgalpha, k ? 50 : 100), h.staggerLines = Math.max((0, _lib.pluckNumber)(l.staggerlines, 2), 2), h.staggerLines = _forceValidLowerLimit(h.staggerLines, 1), h.trendlineValuesOnOpp = (0, _lib.pluck)(b.trendlineValuesOnOpp, b.trendlineValuesOnOpp, 0), h.labelDisplay = (0, _lib.pluck)(b.labelDisplay, 'auto').toLowerCase(), h.labelStep = (0, _lib.pluckNumber)(b.labelStep, 1), h.labelStep = Math.round(h.labelStep), h.labelStep = _forceValidLowerLimit(h.labelStep, 1), h.startPad = 0, h.endPad = 0, h._oriLabelStep = h.labelStep, h.showLimits = (0, _lib.pluckNumber)(b.showLimits, h.showAxisValues), h.showUpperLimit = b.showLimits, h.showDivLineValues = (0, _lib.pluckNumber)(b.showDivLineValues, h.showAxisValues), h.showCanvasBorder = i.getChildren('canvas')[0].config.showCanvasBorder ? 1 : 0, h.axisBreak = b.axisBreaks, h.isBreak = !!h.axisBreak, h.isBreak && g._processAxisBreak(), c = (0, _lib.getFirstValue)(b.axisNameBorderColor, _lib.BLANKSTRING), c = c ? (0, _libGraphics.convertColor)(c, (0, _lib.pluckNumber)(b.axisNameBorderAlpha, b.axisNameAlpha, 100)) : _lib.BLANKSTRING, h.name = h.name || {}, h.name.style = { fontFamily: (0, _lib.pluck)(b.axisNameFont, b.outCanfontFamily), fontSize: (0, _lib.pluck)(b.axisNameFontSize, (0, _lib.pInt)(b.outCanfontSize)) + _lib.PXSTRING, color: (0, _libGraphics.convertColor)((0, _lib.pluck)(b.axisNameFontColor, b.outCancolor), (0, _lib.pluckNumber)(b.axisNameFontAlpha, b.axisNameAlpha, 100)), fontWeight: (0, _lib.pluckNumber)(b.axisNameFontBold, 1) ? 'bold' : _lib.NORMAL, fontStyle: (0, _lib.pluckNumber)(b.axisNameFontItalic) ? 'italic' : _lib.NORMAL, border: c || b.axisNameBgColor ? (0, _lib.pluckNumber)(b.axisNameBorderThickness, 1) + 'px solid' : _lib.UNDEF, borderColor: c, borderThickness: (0, _lib.pluckNumber)(b.axisNameBorderThickness, 1), borderPadding: (0, _lib.pluckNumber)(b.axisNameBorderPadding, 2), borderRadius: (0, _lib.pluckNumber)(b.axisNameBorderRadius, 0), backgroundColor: b.axisNameBgColor ? (0, _libGraphics.convertColor)(b.axisNameBgColor, (0, _lib.pluckNumber)(b.axisNameBgAlpha, b.axisNameAlpha, 100)) : _lib.BLANKSTRING, borderDash: (0, _lib.pluckNumber)(b.axisNameBorderDashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(b.axisNameBorderDashLen, 4), (0, _lib.pluckNumber)(b.axisNameBorderDashGap, 2)) : _lib.DASH_DEF }, h.name.style.lineHeight = (0, _lib.setLineHeight)(h.name.style), d = (0, _lib.getFirstValue)(l.trendvaluebordercolor, _lib.BLANKSTRING), d = d ? (0, _libGraphics.convertColor)(d, (0, _lib.pluckNumber)(l.trendvalueborderalpha, l.trendvaluealpha, 100)) : _lib.BLANKSTRING, h.trend = h.trend || {}, h.trend.trendStyle = { fontFamily: (0, _lib.pluck)(l.trendvaluefont, b.outCanfontFamily), color: (0, _lib.pluck)(l.trendvaluefontcolor, b.trendlineColor, b.outCancolor, '333333'), fontSize: (0, _lib.pluckFontSize)(l.trendvaluefontsize, (0, _lib.pInt)(b.outCanfontSize)) + _lib.PXSTRING, fontWeight: (0, _lib.pluckNumber)(l.trendvaluefontbold) ? 'bold' : _lib.NORMAL, fontStyle: (0, _lib.pluckNumber)(l.trendvaluefontitalic) ? 'italic' : _lib.NORMAL, border: d || l.trendvaluebgcolor ? (0, _lib.pluckNumber)(l.trendvalueborderthickness, 1) + 'px solid' : '', borderColor: d, borderThickness: (0, _lib.pluckNumber)(l.trendvalueborderthickness, 1), borderPadding: (0, _lib.pluckNumber)(l.trendvalueborderpadding, 2), borderRadius: (0, _lib.pluckNumber)(l.trendvalueborderradius, 0), backgroundColor: l.trendvaluebgcolor ? (0, _libGraphics.convertColor)(l.trendvaluebgcolor, (0, _lib.pluckNumber)(l.trendvaluebgalpha, l.trendvaluealpha, 100)) : _lib.BLANKSTRING, borderDash: (0, _lib.pluckNumber)(l.trendvalueborderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(l.trendvalueborderdashlen, 4), (0, _lib.pluckNumber)(l.trendvalueborderdashgap, 2)) : _lib.DASH_DEF }, h.trend.trendStyle.lineHeight = (0, _lib.setLineHeight)(h.trend.trendStyle), h.labels = h.labels || {}, h.lines = h.lines || {}, h.band = h.band || {}, e = (0, _lib.getFirstValue)(l.labelbordercolor, _lib.BLANKSTRING), e = e ? (0, _libGraphics.convertColor)(e, (0, _lib.pluckNumber)(l.labelborderalpha, l.labelalpha, 100)) : _lib.BLANKSTRING, h.labels.style = { fontFamily: (0, _lib.pluck)(b.labelFont, b.outCanfontFamily), fontSize: (0, _lib.pluckNumber)(b.labelFontSize, (0, _lib.pInt)(b.outCanfontSize)) + _lib.PXSTRING, fontWeight: (0, _lib.pluckNumber)(b.labelFontBold) ? 'bold' : _lib.NORMAL, fontStyle: (0, _lib.pluckNumber)(b.labelFontItalic) ? 'italic' : _lib.NORMAL, color: (0, _libGraphics.convertColor)((0, _lib.pluck)(b.labelFontColor, b.outCancolor), (0, _lib.pluckNumber)(b.labelFontAlpha, 100)), labelLink: l.labellink, border: e || l.labelbgcolor ? (0, _lib.pluckNumber)(l.labelborderthickness, 1) + 'px solid' : '', borderColor: e, borderThickness: (0, _lib.pluckNumber)(l.labelborderthickness, 1), borderPadding: (0, _lib.pluckNumber)(l.labelborderpadding, 2), borderRadius: (0, _lib.pluckNumber)(l.labelborderradius, 0), backgroundColor: l.labelbgcolor ? (0, _libGraphics.convertColor)(l.labelbgcolor, (0, _lib.pluckNumber)(l.labelbgalpha, l.labelalpha, 100)) : _lib.BLANKSTRING, borderDash: (0, _lib.pluckNumber)(l.labelborderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(l.labelborderdashlen, 4), (0, _lib.pluckNumber)(l.labelborderdashgap, 2)) : _lib.DASH_DEF }, h.labels.style.lineHeight = (0, _lib.setLineHeight)(h.labels.style), h.numberFormatterFn = (0, _lib.pluck)(b.numberFormatterFn), h.apparentScrollPos = b.apparentScrollPos || h.apparentScrollPos, h.axisRange = {}, h.dataLimit = {}, h.axisEndLabelDisplaySpace = { left: 0, right: 0, top: 0, bottom: 0 }, h.isConfigured = !0, h._defaultForceDecimal = _lib.UNDEF, h._defaultDecimalPrecision = _lib.UNDEF, h.lines.isDraw = (0, _lib.pluckNumber)(b.lines && b.lines.isDraw, 1), h.band.isDraw = (0, _lib.pluckNumber)(b.band && b.band.isDraw, 1);
  }createContainer(a, b, c) {
    let d = this.getFromEnv('animationManager');return this.addContainer(a, d.setAnimation({ container: c, attr: b, el: this.getContainer(a) || 'group', component: this, label: 'group' }));
  }createGroup(a, b, c, d = 'group') {
    let e = this.getFromEnv('animationManager');return e.setAnimation({ container: c, attr: b, el: this.config[a] || 'group', component: this, label: d });
  }getValuePadding() {
    var a = this.config;return { left: a.startPad, right: a.endPad };
  }draw() {
    var a,
        b,
        c,
        d,
        e = this,
        f = e.config,
        g = e.getFromEnv('chart'),
        h = g.config,
        i = f.isVertical,
        j = h.viewPortConfig,
        k = e.getChildren().limitUpdater,
        l = f.viewPortRatio || {};e._createContainer(), c = j.y * j.scaleY, d = j.x * j.scaleX, l.scaleX && l.scaleY && (l.scaleX !== j.scaleX || l.scaleY !== j.scaleY) ? (l.scaleX = j.scaleX, l.scaleY = j.scaleY, e._drawComponents()) : (i ? (b = c - j.y * j.scaleY, f.axisContainer.transform('t0,' + b), f.axisLabelContainerTop.transform('t0,' + b)) : (a = d - j.x * j.scaleX, f.axisContainer.transform('t' + a + ',0'), f.axisLabelContainerTop.transform('t' + a + ',0')), e._drawComponents()), e.addExtEventListener('internal.animationComplete', function () {
      k && k.forEach(a => {
        a.draw();
      });
    }, e.getFromEnv('chartInstance')), e.addToEnv('prevScale', e.getScale().copy());
  }setScale(a) {
    this.config.scale = a;
  }getScale() {
    return this.config.scale;
  }getLimit() {
    let a = this.config.axisRange;return { min: a.min, max: a.max, tickInterval: a.tickInterval };
  }getVisibleConfig() {
    let a = this.config;return { minValue: a.visibleMin, maxValue: a.visibleMax };
  }setAxisConfig(a) {
    var b,
        c = this,
        d = c.config;for (b in a) a.hasOwnProperty(b) && (d[b] = a[b]);
  }getAxisConfig(a) {
    var b = this,
        c = b.config;return a ? c[a] : c;
  }getVisibleLength() {
    var a = this,
        b = a.getVisibleConfig();return Math.abs(b.maxValue - b.minValue);
  }getAxisEndLabelDisplaySpace() {
    return this.config.axisEndLabelDisplaySpace || {};
  }getTicksLen() {
    let a = this.config.tickValues;return a && a.tickValue.length || 0;
  }
}exports.default = Axis;
},{"../../core/component-interface":65,"../lib/lib":23,"../lib/lib-graphics":24}],195:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const appearingAxis = [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'axis' }],
      appearingFinal = [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'final' }],
      axisAnimationFinal = { "text.appearing": appearingFinal, "path.appearing": appearingFinal, "rect.appearing": appearingFinal },
      axisAnimationAxis = { "text.appearing": appearingAxis, "path.appearing": appearingAxis, "rect.appearing": appearingAxis, "scroller.appearing": appearingAxis };exports.default = { "initial.axis.numeric": axisAnimationAxis, "initial.axis.category": axisAnimationAxis, "initial.axis.log": axisAnimationAxis, "update.axis.numeric": axisAnimationFinal, "update.axis.category": axisAnimationFinal, "update.axis.log": axisAnimationFinal };
exports.appearingAxis = appearingAxis;
exports.appearingFinal = appearingFinal;
exports.axisAnimationAxis = axisAnimationAxis;
exports.axisAnimationFinal = axisAnimationFinal;
},{}],159:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function interpolateNumber(a, b) {
  a = +a, b = +b;let c = b - a;return b => c * b + a;
}exports.default = interpolateNumber;
},{}],160:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var diff = (a, b) => a.filter(a => 0 > b.indexOf(a));exports.default = diff;
},{}],216:[function(require,module,exports) {
function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
module.exports = _containsWith;
},{}],211:[function(require,module,exports) {
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
module.exports = _isPlaceholder;
},{}],210:[function(require,module,exports) {
var _isPlaceholder = /*#__PURE__*/require('./_isPlaceholder');

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
module.exports = _curry1;
},{"./_isPlaceholder":211}],184:[function(require,module,exports) {
var _curry1 = /*#__PURE__*/require('./_curry1');

var _isPlaceholder = /*#__PURE__*/require('./_isPlaceholder');

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
module.exports = _curry2;
},{"./_curry1":210,"./_isPlaceholder":211}],217:[function(require,module,exports) {
var _curry1 = /*#__PURE__*/require('./_curry1');

var _curry2 = /*#__PURE__*/require('./_curry2');

var _isPlaceholder = /*#__PURE__*/require('./_isPlaceholder');

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
module.exports = _curry3;
},{"./_curry1":210,"./_curry2":184,"./_isPlaceholder":211}],201:[function(require,module,exports) {
var _containsWith = /*#__PURE__*/require('./internal/_containsWith');

var _curry3 = /*#__PURE__*/require('./internal/_curry3');

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */


var differenceWith = /*#__PURE__*/_curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
module.exports = differenceWith;
},{"./internal/_containsWith":216,"./internal/_curry3":217}],233:[function(require,module,exports) {
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
module.exports = _arrayFromIterator;
},{}],234:[function(require,module,exports) {
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}
module.exports = _functionName;
},{}],227:[function(require,module,exports) {
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = _has;
},{}],230:[function(require,module,exports) {
var _curry2 = /*#__PURE__*/require('./internal/_curry2');

/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */


var identical = /*#__PURE__*/_curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});
module.exports = identical;
},{"./internal/_curry2":184}],235:[function(require,module,exports) {
var _has = /*#__PURE__*/require('./_has');

var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
};

module.exports = _isArguments;
},{"./_has":227}],231:[function(require,module,exports) {
var _curry1 = /*#__PURE__*/require('./internal/_curry1');

var _has = /*#__PURE__*/require('./internal/_has');

var _isArguments = /*#__PURE__*/require('./internal/_isArguments');

// cover IE < 9 keys issues


var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/_curry1(_keys);
module.exports = keys;
},{"./internal/_curry1":210,"./internal/_has":227,"./internal/_isArguments":235}],232:[function(require,module,exports) {
var _curry1 = /*#__PURE__*/require('./internal/_curry1');

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */


var type = /*#__PURE__*/_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
module.exports = type;
},{"./internal/_curry1":210}],229:[function(require,module,exports) {
var _arrayFromIterator = /*#__PURE__*/require('./_arrayFromIterator');

var _containsWith = /*#__PURE__*/require('./_containsWith');

var _functionName = /*#__PURE__*/require('./_functionName');

var _has = /*#__PURE__*/require('./_has');

var identical = /*#__PURE__*/require('../identical');

var keys = /*#__PURE__*/require('../keys');

var type = /*#__PURE__*/require('../type');

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !_containsWith(function (b, aItem) {
    return !_containsWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
module.exports = _equals;
},{"./_arrayFromIterator":233,"./_containsWith":216,"./_functionName":234,"./_has":227,"../identical":230,"../keys":231,"../type":232}],228:[function(require,module,exports) {
var _curry2 = /*#__PURE__*/require('./internal/_curry2');

var _equals = /*#__PURE__*/require('./internal/_equals');

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */


var equals = /*#__PURE__*/_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});
module.exports = equals;
},{"./internal/_curry2":184,"./internal/_equals":229}],223:[function(require,module,exports) {
var equals = /*#__PURE__*/require('../equals');

function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
module.exports = _indexOf;
},{"../equals":228}],214:[function(require,module,exports) {
var _indexOf = /*#__PURE__*/require('./_indexOf');

function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
}
module.exports = _contains;
},{"./_indexOf":223}],196:[function(require,module,exports) {
var _contains = /*#__PURE__*/require('./internal/_contains');

var _curry2 = /*#__PURE__*/require('./internal/_curry2');

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */


var difference = /*#__PURE__*/_curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
module.exports = difference;
},{"./internal/_contains":214,"./internal/_curry2":184}],162:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._parseLabel = exports.extractStyleInfo = exports.getLabel = exports.setAxisPadding = exports._createContainer = exports.shiftLabels = exports.setTickValues = exports._drawLabel = exports.getPixel = exports.getTrendLineLimits = exports.setDataLimit = exports.setAxisDimention = undefined;

var _lib = require('../lib/lib');

var _difference = require('ramda/src/difference');

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let queryOptions = { wrtVisible: !0 },
    LABEL_ID = '_label',
    NORMALSTRING = 'normal',
    extractStyleInfo = function (a, b) {
  var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = { labelfont: ['fontFamily'], labelfontcolor: ['fontColor'], labelfontsize: ['fontSize', function (a) {
      return a ? (0, _lib.pluckNumber)(a) + 'px' : _lib.UNDEF;
    }], labelfontbold: ['fontWeight', function (a) {
      return a ? 'bold' : NORMALSTRING;
    }], labelfontitalic: ['fontStyle', function (a) {
      return a ? 'italic' : NORMALSTRING;
    }], labelfontalpha: ['fontAlpha'] },
      k = b.getFromEnv('dataSource').categories,
      l = k && k[0] || {},
      m = function (a) {
    return a;
  },
      n = !1,
      o = {};for (c in l) 'category' === c || c in a || (d = l[c], a[c] = d);for (c in j) f = j[c], g = f[0], h = f[1] || m, d = a[c], e = a[g.toLowerCase()], (d !== _lib.UNDEF || e !== _lib.UNDEF) && ((i = h(d)) !== _lib.UNDEF || (i = h(e)) !== _lib.UNDEF) && (o[g] = i, n = !0), n && (a.style = o);
},
    setAxisDimention = function (a) {
  var b = this,
      c = b.getScale(),
      d = b.config,
      e = b.getFromEnv('chart'),
      f = e.config,
      g = d.axisDimention || (d.axisDimention = {}),
      h = d.isReverse;g.opposite = (0, _lib.pluckNumber)(a.opposite, g.opposite), g.x = (0, _lib.pluckNumber)(a.x, g.x, f.canvasLeft), g.y = (0, _lib.pluckNumber)(a.y, g.y, f.canvasTop), g.axisLength = (0, _lib.pluckNumber)(a.axisLength, g.axisLength), d.isVertical ? h ? c.setRange([g.y + g.axisLength, g.y]) : c.setRange([g.y, g.y + g.axisLength]) : h ? c.setRange([g.x + g.axisLength, g.x]) : c.setRange([g.x, g.x + g.axisLength]), d.translation = b._computeTranslation();
},
    setDataLimit = function (a, b) {
  var c,
      d,
      e,
      f,
      g = this,
      h = g.config,
      i = g.getFromEnv('dataSource').categories,
      j = i && i[0] && i[0].category,
      k = h.startPad || 0,
      l = h.endPad || 0,
      m = h.xAxisLabelMode;('categories' === m || 'mixed' === m) && ([c, d] = (0, _lib.extent)(j, a => +a.x)), [e, f] = g.getTrendLineLimits(), [b, a] = (0, _lib.extent)([e, f, c, d, b, a], b => +b), h.originalMax = a, h.originalMin = b, a = h.isPercent ? 100 : a + l, b = h.isPercent ? 0 : b - k, g._setAxisRange({ min: b, max: a }), h.axisRange.tickInterval !== _lib.UNDEF && g._adjustNumberFormatter(h.axisRange.tickInterval);
},
    getTrendLineLimits = function () {
  let a,
      b,
      c,
      d,
      e = this.config,
      f = e.trendLines || e.vTrendLines || e.trendPoints,
      g = f && f[0] && f[0].line || f && f.point;return e.trendLimits ? e.trendLimits : ([a, b] = (0, _lib.extent)(g, a => '' === a.startvalue ? _lib.UNDEF : +a.startvalue), [c, d] = (0, _lib.extent)(g, a => '' === a.endvalue ? _lib.UNDEF : +a.endvalue), e.trendLimits = (0, _lib.extent)([a, b, c, d], b => +b), e.trendLimits);
},
    getPixel = function (a) {
  return this.getScale().getRangeValue(a);
},
    _drawLabel = function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      m,
      n = this,
      o = n.config,
      p = n.getFromEnv('animationManager'),
      q = this.getFromEnv('toolTipController'),
      r = o.axisRange,
      s = o.labels,
      t = s.style,
      u = n.components,
      v = r.max,
      w = r.min,
      x = o.axisContainer,
      y = o.extremeLabels,
      z = o.ticks,
      A = [],
      B = { fontFamily: t.fontFamily, fontSize: t.fontSize, fontWeight: t.fontWeight, fontStyle: t.fontStyle, lineHeight: t.lineHeight };if (o.labels.isDraw) for (m = u.labels, l = u.labelIndexArr, x.css(B), (b = 0, c = l && l.length); b < c; b += 1) a = l[b], h = z[a], e = `${h}${LABEL_ID}`, d = n.getGraphicalElement(e), g = m[a].config.props.label.attr, d = n.addGraphicalElement(e, p.setAnimation({ el: d || 'text', attr: g, container: x, data: { value: h }, component: n, label: 'text' })), g.tooltext ? q.enableToolTip(d, g.tooltext) : q.disableToolTip(d), h === v ? y.lastLabel.graphic = d : h === w && (y.firstLabel.graphic = d), A.push(e);for (k = (0, _difference2.default)(o.prevIntervalArr, A), a = 0, c = k.length; a < c; a++) f = n.getGraphicalElement(k[a]), f && n.removeGraphicalElement(f);o.prevIntervalArr = A;
},
    _parseLabel = function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s = Math.ceil,
      t = this,
      u = t.config,
      v = t.getLinkedItem('canvas').getEffectiveDimensions(),
      w = u.axisDimention,
      x = t.getFromEnv('chart'),
      y = x.config,
      z = u.axisRange,
      A = u.isOpposit,
      B = u.labels,
      C = t.components,
      D = C.labels,
      E = B.style,
      F = x.getFromEnv('smartLabel'),
      G = u.isVertical,
      H = z.max,
      I = z.min,
      J = t.getFromEnv('number-formatter'),
      K = v.top,
      L = v.left,
      M = K + v.height,
      N = L + v.width,
      O = u.labelPadding,
      P = u.extremeLabels,
      Q = G ? w.x : w.y,
      R = w.opposite,
      S = u.labelMaxH,
      T = u.labelMaxW,
      U = z.tickInterval,
      V = Math.abs(t.getPixel(I, queryOptions) - t.getPixel(I + U, queryOptions)),
      W = [],
      X = u.ticks,
      Y = 0,
      Z = u.isReverse,
      $ = (0, _lib.pluckNumber)(t.getFromEnv('chart-attrib').showzeroplanevalue),
      _ = !0,
      aa = t.getLimit();if (F.useEllipsesOnOverflow(y.useEllipsesWhenOverflow), F.setStyle({ fontSize: E.fontSize, fontFamily: E.fontFamily, lineHeight: E.lineHeight, fontWeight: E.fontWeight }), d = E.lineHeight, d && -1 !== d.indexOf('px') && (d = parseFloat(d.replace('px', ''))), 0 === $ && (_ = !1), u.labels.isDraw) {
    if (u.drawLabelsOpposit && (A = !A, Q = R), j = { fill: E.color, "line-height": d, "font-size": E.fontSize, opacity: 1 }, c = u.labels.rotation, G ? (u.labelMaxH > V && !u.tickValues && (g = s(u.labelMaxH / V)), j['text-anchor'] = A ? _lib.POSITION_START : _lib.POSITION_END) : (u.labelMaxW > V && !u.tickValues && (g = s(u.labelMaxW / V)), c ? (j['text-anchor'] = A ? _lib.POSITION_START : _lib.POSITION_END, j['vertical-align'] = 'middle') : j['vertical-align'] = A ? _lib.POSITION_BOTTOM : _lib.POSITION_TOP, l = L, m = y.width - N), g > u.labels.step && (u.labels.step = g), h = u.numberFormatterFn ? J[u.numberFormatterFn] : u.isPercent ? J.percentValue : G ? J.yAxis : J.xAxis, P.firstLabel = {}, P.lastLabel = {}, r = X.filter((a, b, c) => 0 !== a || u.showZeroPlaneValue ? (G || b === c.length - 1 || !(t.getPixel(a, queryOptions) + u.labelMaxW > N)) && (0 == b % u.labels.step ? (W[Y++] = b, !0) : !!(u.labels.drawLimitVal && (0 === b || b === c.length - 1)) && (W[Y++] = b, !0)) : _ && (!_ || aa.max === a || aa.min === a) && (W[Y++] = b, !0)), u.isZeroTickForced && -1 !== r.indexOf(0)) {
      let a;Y = 0, W = [], q = t.getPixel(0), r = r.filter((b, c, d) => (a = t.getPixel(b), 0 === d[c + 1] || 0 === d[c - 1] ? G ? !(a + S >= q && q >= a - S) && (W[Y++] = c, !0) : !(a + T >= q && q >= a - T) && (W[Y++] = c, !0) : (W[Y++] = c, !0)));
    }for (e = (G ? T : V / 2) * u.labels.step, f = G ? V / 2 : S, C.labelIndexArr = W.slice(), (a = 0, b = r.length); a < b; a += 1) n = r[a], D[W[a]] = D[W[a]] || { config: { props: { label: {} } } }, o = D[W[a]].config, k = Object.assign({}, j), u.labels.drawNormalVal || n === I || n === H ? u.labels.drawLimitVal || n !== I && n !== H ? n === I && u.lowerLimitDisplay && u.labels.drawLimitVal ? (p = F.getSmartText(u.lowerLimitDisplay, e, f + d / 2), k.text = p.text, k.tooltext = p.tooltext) : n === H && u.upperLimitDisplay && u.labels.drawLimitVal ? (p = F.getSmartText(u.upperLimitDisplay, e, f + d / 2), k.text = p.text, k.tooltext = p.tooltext) : k.text = '' + h.call(J, n, u.axisIndex) : k.text = '' : k.text = '', G ? (k.x = A ? (Q || N) + O : (Q || L) - O, k.y = t.getPixel(n, queryOptions), (Z && n === I && u.lowerLimitDisplay || !Z && n === H && u.upperLimitDisplay) && o.height > d && (k['vertical-align'] = _lib.POSITION_BOTTOM), (Z && n === H && u.upperLimitDisplay || !Z && n === I && u.lowerLimitDisplay) && o.height > d && (k['vertical-align'] = _lib.POSITION_TOP), u.placeValuesInside && (k['text-anchor'] = A ? _lib.POSITION_END : _lib.POSITION_START)) : (k.x = t.getPixel(n, queryOptions), k.y = A ? (Q || K) - O : (Q || M) + O, (!Z && n === I || Z && n === H) && o.width > 2 * l && (k['text-anchor'] = _lib.POSITION_START), (!Z && n === H || Z && n === I) && o.width > 2 * m && (k['text-anchor'] = _lib.POSITION_END), k['vertical-align'] = u.placeValuesInside ? A ? _lib.POSITION_TOP : _lib.POSITION_BOTTOM : A ? _lib.POSITION_BOTTOM : _lib.POSITION_TOP), B.shiftX && (k.x += B.shiftX), B.shiftY && (k.y += B.shiftY), k.transform = (0, _lib.getSuggestiveRotation)(c, k.x, k.y), D[W[a]].config.props.label.attr = k;
  }
},
    setTickValues = function (a) {
  var b,
      c,
      d = a && a.length,
      e = this.config,
      f = e.startPad || 0,
      g = this.getFromEnv('chart'),
      h = 0,
      i = e.tickValues = {},
      j = i.tickValue = [],
      k = i.vline = [],
      l = i.tickIdMap = {},
      m = e.endPad || 0;for (e.hasCategory = 1, b = 0; b < d; b += 1) c = (0, _lib.extend2)({}, a[b]), c.vline ? (c.startIndex = j.length - 1, k.push(c)) : (c.id && (l[c.id.toLowerCase()] = { tickObj: c, index: h }), (e.mapTickValuesById && c.id || !e.mapTickValuesById) && (extractStyleInfo(c, g), j.push(c), j[h].label = (0, _lib.parseUnsafeString)(j[h].label), h += 1));e.oriCatLen = h, this._setAxisRange({ max: +(0, _lib.toPrecision)(h - 1 + m, 10), min: +(0, _lib.toPrecision)(0 - f, 10), tickInterval: +(0, _lib.toPrecision)(1, 10) });
},
    shiftLabels = function (a, b) {
  var c = this,
      d = c.config,
      e = d.labels;e.shiftX = a, e.shiftY = b;
},
    _createContainer = function () {
  let a,
      b,
      c,
      d,
      e,
      f = this,
      g = f.config,
      h = g.isVertical,
      i = f.getLinkedParent(),
      j = i.getChildContainer(),
      k = j.axisBottomGroup,
      l = j.axisTopGroup,
      m = -f.getTranslation(),
      n = h ? `T0,${m}` : `T${m},0`;b = f.createContainer('axisNameGroup', { name: 'dataset-Name-group' }, k), a = f.createContainer('axisLineGroup', { name: 'axis-Line-group' }, l), c = f.createContainer('axisTrendGroupTop', { name: 'dataset-Trend-group-top' }, l), d = f.createContainer('axisLabelGroup', { name: 'dataset-Label-group' }, k), e = f.createContainer('axisLabelGroupTop', { name: 'dataset-Label-group' }, l), g.scrollerContainer = f.createGroup('scrollerContainer', { name: 'scroller-container' }, a, 'scroller'), g.axisContainer = f.createGroup('axisContainer', { name: 'dataset-axis', transform: n }, d), g.axisLabelContainerTop = f.createGroup('axisLabelContainerTop', { name: 'dataset-top-label', transform: n }, e), g.axisAxisLineContainer = f.createGroup('axisAxisLineContainer', { name: 'axis-line-tick' }, a), g.axisTrendLabelContainer = f.createGroup('axisTrendLabelContainer', { name: 'dataset-axis-trend-label' }, c), g.axisNameContainer = f.createGroup('axisNameContainer', { name: 'dataset-axis-name' }, b), g.axisAxisLineContainerBottom = f.createGroup('axisAxisLineContainerBottom', { name: 'axis-line-tick-bottom' }, k);
},
    setAxisPadding = function (a = 0, b = 0) {
  var c,
      d = Math.max,
      e = this,
      f = e.config,
      g = e.getScale(),
      [h, i] = g.getDomain();1 === f.oriCatLen && (0 === a && (a = .5), 0 === b && (b = .5)), c = a - f.startPad, f.startPad = d(f.startPad, a), f.endPad = d(f.endPad, b), 0 < c && (f.setPadding = !0, e._setAxisRange({ min: h - c, max: i + c })), !f.tickValues && f.originalMax && f.originalMin && e.setDataLimit(f.originalMax, f.originalMin);
},
    getLabel = function (a) {
  var b = this,
      c = b.config,
      d = c.tickValues && c.tickValues.tickValue[a],
      e = {};return d && d.tooltext && (e.label = d.label, d.tooltext = (0, _lib.parseTooltext)(d.tooltext, [3], e)), { label: d && (d.oriLabel || d.label), tooltext: d && d.tooltext };
};exports.setAxisDimention = setAxisDimention;
exports.setDataLimit = setDataLimit;
exports.getTrendLineLimits = getTrendLineLimits;
exports.getPixel = getPixel;
exports._drawLabel = _drawLabel;
exports.setTickValues = setTickValues;
exports.shiftLabels = shiftLabels;
exports._createContainer = _createContainer;
exports.setAxisPadding = setAxisPadding;
exports.getLabel = getLabel;
exports.extractStyleInfo = extractStyleInfo;
exports._parseLabel = _parseLabel;
},{"../lib/lib":23,"ramda/src/difference":196}],158:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumEnquiry = exports.getCrispPath = undefined;

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _lib = require('../lib/lib.js');

var _libGraphics = require('../lib/lib-graphics');

var _cartesianAxisAnimation = require('../animation-rules/cartesian-axis-animation');

var _cartesianAxisAnimation2 = _interopRequireDefault(_cartesianAxisAnimation);

var _number = require('./utils/interpolators/number');

var _number2 = _interopRequireDefault(_number);

var _diff = require('./utils/array/diff');

var _diff2 = _interopRequireDefault(_diff);

var _differenceWith = require('ramda/src/differenceWith');

var _differenceWith2 = _interopRequireDefault(_differenceWith);

var _dependencyManager = require('../dependency-manager');

var _commonApi = require('./common-api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CRISP = 'crisp',
    BUTT = 'butt',
    EVENTARGS = 'eventArgs',
    TREND_ID = '_trend',
    TICK_ID = '_tick',
    LABEL_ID = '_label',
    getCrispPath = function (e, a) {
  var i,
      t,
      l = Math.round,
      n = !1,
      o = a % 2;return e[1] === e[4] && (i = e[1], t = l(i), e[1] = e[4] = o ? t > i ? t - .5 : t + .5 : t, n = !0), e[2] === e[5] && (i = e[2], t = l(i), e[2] = e[5] = o ? t > i ? t - .5 : t + .5 : t, n = !0), { path: e, isCrisped: n };
},
    isVisible = e => (a, i) => !!(e.minValue <= a && e.maxValue >= a || e.minValue <= i && e.maxValue >= i),
    isInBetween = e => a => !!(e.minValue <= a && e.maxValue >= a),
    queryOptions = { wrtVisible: !0 },
    minimumEnquiry = function (e) {
  for (var a = 0, t = e.length; a < t; a++) if (e[a].label || e[a].oriLabel) return a;
};function getAxisNamePaddingOffset(e, a) {
  var i = Math.max;let t = 0;return e.relativeAxis && e.relativeAxis.config && e.relativeAxis.config.axisNamePadding && (t = i(e.relativeAxis.config.axisNamePadding, t)), e.isOpposit && a.canvasMarginRight && (t = i(t, a.canvasMarginRight - a.marginLeft - e.nameMaxW)), !e.isOpposit && a.canvasMarginLeft && (t = i(t, a.canvasMarginLeft - a.marginRight - e.nameMaxW)), t;
}(0, _dependencyManager.addDep)({ name: 'cartesianAxisAnimation', type: 'animationRule', extension: _cartesianAxisAnimation2.default });class Cartesian extends _axis2.default {
  constructor() {
    super(), this.config.referenceInfo = [], this.config.prevTicks = [], this.config.prevIntervalArr = [], this.config.prevTrendLabels = [], this.config.prevCategoryIntervalArr = [];
  }placeAxis(e) {
    var a,
        i = this,
        t = i.getScale(),
        l = i.getFromEnv('chart'),
        n = i.getLinkedItem('scrollBar'),
        o = i.config.isVertical,
        r = i.config.isOpposit,
        s = i.config.isReverse,
        d = l.config,
        g = {};return n && (a = n.getLogicalSpace(), a && (o ? (l.config.shift = a.width + n.config.conf.padding, g[r ? 'right' : 'left'] = l.config.shift) : (l.config.shift = a.height + n.config.conf.padding, g[r ? 'top' : 'bottom'] = l.config.shift), l._allocateSpace(g))), o ? (s ? t.setRange([d.canvasBottom, d.canvasTop]) : t.setRange([d.canvasTop, d.canvasBottom]), i._placeVerticalAxis(e)) : (s ? t.setRange([d.canvasRight, d.canvasLeft]) : t.setRange([d.canvasLeft, d.canvasRight]), i._placeHorizontalAxis(e));
  }_placeVerticalAxis(e) {
    var a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f,
        v,
        u,
        L = Math.min,
        w = Math.max,
        T = this,
        y = T.config,
        k = T.getFromEnv('chart'),
        C = k.config,
        V = k.getFromEnv('smartLabel'),
        P = y.axisRange,
        A = y.minLabelWidthPercent,
        E = y.name,
        S = y.isOpposit,
        D = T.getFromEnv('number-formatter'),
        F = C.canvasHeight,
        M = y.labelPadding = (0, _lib.pluckNumber)(y.rawAttr.axisValuePadding, 4),
        R = (0, _lib.pluckNumber)(y.rawAttr.axisNamePadding, 5),
        W = y.useEllipsesWhenOverflow,
        I = y.name.style,
        H = y.trend.trendStyle,
        N = y.axisName,
        O = y.trendLines,
        _ = y.drawLabelsOpposit,
        z = y.drawAxisNameOpposit,
        G = 0,
        B = 0,
        Z = 0,
        X = 0,
        Y = 0,
        J = 0,
        U = { left: 0, right: 0 },
        Q = '',
        K = '',
        $ = 0,
        q = -1;if (A && (q = A / 100 * C.width), y.oriCanvasHeight = F, 0 > M && (y.labelPadding = 2), f = y.drawTick && y.tickLength ? y.axisLineThickness + y.tickLength : y.axisLineThickness, y.showAxisLine ? (y.labelPadding = (0, _lib.pluckNumber)(M, 2) + f, 0 > y.labelPadding && (y.labelPadding = (0 > y.axisLineThickness ? 0 : f) + 2), e -= y.axisLineThickness) : (y.labelPadding = (0, _lib.pluckNumber)(M, 2), 0 > y.labelPadding && (y.labelPadding = 2)), g = P.max, h = P.min, y.name.rotation = 0, y.labels.step = y.labelStep, y.labels.isDraw = 1, y.labels.drawNormalVal = y.showDivLineValues, y.labels.drawLimitVal = y.showLimits, $ = I.lineHeight, $ = +$.replace(/px/i, ''), N && $ < e && (e -= $), 1 !== y.showLimits && 1 !== y.showDivLineValues && (y.labels.isDraw = 0), m = y.drawLabels ? T._getVMaxLabelDimention(e - y.labelPadding) : { width: 0, height: 0 }, (m.width + y.labelPadding > e && !y.tickValues || 0 === m.width) && (y.labels.isDraw = 0), y.labels.isDraw && (y.labelMaxW = m.width > q ? m.width : q, y.labelMaxH = m.height, G = y.labelMaxW + y.labelPadding, Z = G), y.drawTrendLines && y.drawTrendLabels && O && O.length) {
      for (n = y.isPercent ? D.percentValue : y.isVertical ? D.yAxis : D.xAxis, V.useEllipsesOnOverflow(C.useEllipsesWhenOverflow), V.setStyle({ fontSize: H.fontSize, fontFamily: H.fontFamily, lineHeight: H.lineHeight, fontWeight: H.fontWeight }), (a = 0, t = O.length); a < t; a += 1) for (d = 0, b = O[a].line && O[a].line.length; d < b; d += 1) x = O[a].line[d], v = D.getCleanValue((0, _lib.pluck)(x.startvalue, x.value, 0)), u = (0, _lib.pluckNumber)(x.endvalue, v), v <= g && v >= h && u <= g && u >= h && (y.isOpposit && (x.valueonright = 1), p = (0, _lib.pluckNumber)(x.valueonright, 0), s = 1 === p ? x.endvalue || x.startvalue : x.startvalue || x.endvalue, c = (0, _lib.parseUnsafeString)(x.origText || x.displayvalue || s || ''), c === s && (c = '' + n.call(D, c)), p ? c.length > K.length && (K = c) : c.length > Q.length && (Q = c));for (m = V.getOriSize(K), J = m.width + y.labelPadding, m = V.getOriSize(Q), Y = m.width + y.labelPadding, S ? (J > Z && J > e && (J = e), Z = w(Z, J + y.labelPadding), Y > e - Z && (Y = L(Y, e - Z))) : (Y > Z && Y > e && (Y = e), Z = w(Z, Y + y.labelPadding), J > e - Z && (J = L(J, e - Z))), (a = 0, t = O.length); a < t; a += 1) for (d = 0, b = O[a].line && O[a].line.length; d < b; d += 1) x = O[a].line[d], v = D.getCleanValue((0, _lib.pluck)(x.startvalue, x.value, 0)), u = (0, _lib.pluckNumber)(x.endvalue, v), c = 1 === +x.valueonright ? x.origText || x.displayvalue || '' + u || '' : x.origText || x.displayvalue || '' + v || '', c = (0, _lib.parseUnsafeString)('' + c), (+c === u || +c === v) && (c = '' + n.call(D, c)), x.origText = c, p = (0, _lib.pluckNumber)(x.valueonright, 0), r = p ? V.getSmartText(c, J, k.canvasHeight, W) : V.getSmartText(c, Z, k.canvasHeight, W), l = y.parsedTrendLabels[B++], l && (l.attr.text = x.displayvalue = r.text, y.isOpposit && (l.valueOnRight = 1, l.attr['text-anchor'] = _lib.POSITION_START)), r.tooltext ? (x.valueToolText = r.tooltext, l && (l.valueToolText = x.valueToolText)) : (delete x.valueToolText, l && delete l.valueToolText);
    }return e += $, !y.drawAxisName || 0 >= e - Z - J || '' === N ? (E.isDraw = !1, E.value = '') : (V.setStyle({ fontSize: I.fontSize, fontFamily: I.fontFamily, lineHeight: I.lineHeight, fontWeight: I.fontWeight }), E.isDraw = !0, y.rotateAxisName ? (y.name.rotation = S ? 90 : 270, o = V.getSmartText(N, F, e - Z - J), E.value = N, y.nameMaxW = L(o.height), X = y.nameMaxW + R) : (o = V.getSmartText(N, e - Z - J, F), E.value = N, y.nameMaxW = L(o.width, e - Z), y.nameMaxH = o.height, 0 <= y.axisNameWidth && (y.nameMaxW = L(y.nameMaxW, y.axisNameWidth)), X = y.nameMaxW + R)), S ? (_ ? (U.left += w(G, Y), U.right += J) : (U.left += Y, U.right += w(G, J)), z ? (y.axisNamePadding = U.left + R, U.left += X) : (y.axisNamePadding = U.right + R, U.right += X)) : (_ ? (U.left += Y, U.right += w(G, J)) : (U.left += w(G, Y), U.right += J), z ? (y.axisNamePadding = U.right + R, U.right += X) : (y.axisNamePadding = U.left + R, U.left += X)), E.isDraw && y.axisNamePadding + y.nameMaxW > e && (y.axisNamePadding = e - y.nameMaxW, X = y.nameMaxW + y.axisNamePadding - Z), U;
  }_placeHorizontalAxis(e) {
    var a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f,
        v,
        u,
        L,
        w,
        T = this,
        y = T.config,
        k = T.getFromEnv('chart'),
        C = k.config,
        V = k.getFromEnv('smartLabel'),
        P = y.axisRange,
        A = y.name,
        E = y.isOpposit,
        S = k.getFromEnv('number-formatter'),
        D = y.drawLabelsOpposit,
        F = y.drawAxisNameOpposit,
        M = 0,
        R = C.canvasWidth,
        W = y.labelPadding = (0, _lib.pluckNumber)(y.rawAttr.axisValuePadding, 4),
        I = (0, _lib.pluckNumber)(y.rawAttr.axisNamePadding, 5),
        H = y.useEllipsesWhenOverflow,
        N = y.name.style,
        O = y.trend.trendStyle,
        _ = y.axisName,
        z = y.vTrendLines,
        G = 0,
        B = 0,
        Z = 0,
        X = { top: 0, bottom: 0 },
        Y = 0,
        J = 0;if (0 > W && (y.labelPadding = 2), u = y.drawTick && y.tickLength ? y.axisLineThickness + y.tickLength : y.axisLineThickness, y.showAxisLine ? (y.labelPadding = (0, _lib.pluckNumber)(W, 2) + u, 0 > y.labelPadding && (y.labelPadding = (0 > y.axisLineThickness ? 0 : u) + 2), e -= y.axisLineThickness) : (y.labelPadding = (0, _lib.pluckNumber)(W, 2), 0 > y.labelPadding && (y.labelPadding = 2)), d = P.max, g = P.min, y.labels.rotation = 0, y.labels.step = y.labelStep, y.labels.isDraw = 1, y.labels.drawNormalVal = y.showDivLineValues, y.labels.drawLimitVal = y.showLimits, J = N.lineHeight, J = +J.replace(/px/i, ''), _ && J < e && (e -= J), y.rotateLabels && 'stagger' !== y.labelDisplay && 'none' !== y.labelDisplay && (y.labelDisplay = 'rotate'), 1 !== y.showLimits && 1 !== y.showDivLineValues && (y.labels.isDraw = 0), f = y.drawLabels ? T._getHMaxLabelDimention(e - y.labelPadding) : { width: 0, height: 0 }, y.labels.rotation ? f.width + y.labelPadding > e && !y.tickValues && (y.labels.isDraw = 0) : f.height + y.labelPadding > e && !y.tickValues && (y.labels.isDraw = 0), y.labels.isDraw && (y.labels.rotation ? (y.labelMaxW = f.height, y.labelMaxH = f.width, M = f.width + y.labelPadding) : (y.labelMaxW = f.width, y.labelMaxH = f.height, M = f.height + y.labelPadding), G = M), G = Math.max(G, y.labelPadding), m = G <= e ? e - G : e, y.drawTrendLines && y.drawTrendLabels && z && y.isActive) for (v = y.isPercent ? T.getFromEnv('number-formatter').percentValue : y.isVertical ? T.getFromEnv('number-formatter').yAxis : T.getFromEnv('number-formatter').xAxis, V.useEllipsesOnOverflow(C.useEllipsesWhenOverflow), V.setStyle({ fontSize: O.fontSize, fontFamily: O.fontFamily, lineHeight: O.lineHeight, fontWeight: O.fontWeight }), (l = 0, n = z.length); l < n; l += 1) for (s = 0, c = z[l].line && z[l].line.length; s < c; s += 1) b = z[l].line[s], L = S.getCleanValue((0, _lib.pluck)(b.startvalue, b.value, 0)), w = (0, _lib.pluckNumber)(b.endvalue, L), L <= d && L >= g && w <= d && w >= g && (a = (0, _lib.pluckNumber)(b.valueonright, 0), t = 1 === a ? b.endvalue || b.startvalue : b.startvalue || b.endvalue, h = (0, _lib.parseUnsafeString)(b.origText || b.displayvalue || t || ''), h === t && (h = '' + v.call(k.getFromEnv('number-formatter'), h)), b.origText = h, x = V.getSmartText(h, k.canvasWidth, O.lineHeight, H), p = x.height + 2, 0 > m - p ? b.displayvalue = '' : (o = y.parsedTrendLabels[B++], o && (o.attr.text = b.displayvalue = x.text), Y = Y < x.height ? x.height : Y), x.tooltext ? (b.valueToolText = x.tooltext, o && (o.valueToolText = b.valueToolText)) : (delete b.valueToolText, o && delete o.valueToolText));return m -= Y, G += Y, m += J, e += J, !y.drawAxisName || 0 >= m || '' === _ ? (A.isDraw = !1, A.value = '') : (V.setStyle({ fontSize: N.fontSize, fontFamily: N.fontFamily, lineHeight: N.lineHeight, fontWeight: N.fontWeight }), A.isDraw = !0, r = V.getSmartText(_, R, m), A.value = _, y.nameMaxW = R, y.nameMaxH = r.height, Z = r.height + I, y.axisNamePadding = I + G, y.axisNamePadding + r.height > e && (y.axisNamePadding = e - r.height, Z = r.height + y.axisNamePadding - G)), E ? (D ? X.bottom += M + Y : (X.top += M, X.bottom += Y), y.trendBottomPadding = X.bottom - Y + 2, F ? X.bottom += Z : X.top += Z) : (D ? (X.top += M, X.bottom += Y) : X.bottom += M + Y, y.trendBottomPadding = X.bottom - Y + 2, F ? X.top += Z : X.bottom += Z), X;
  }_parseCategoryPlotLine() {
    var e,
        a,
        t,
        l = this,
        n = l.config,
        o = n.axisRange,
        r = n.tickValues.tickValue,
        s = (0, _libGraphics.convertColor)(n.divLineColor, n.divLineAlpha),
        d = n.divLineThickness,
        g = n.divLineIsDashed ? (0, _lib.getDashStyle)(n.divLineDashLen, n.divLineDashGap, d) : _lib.DASH_DEF,
        h = isInBetween(l.getVisibleConfig()),
        c = n._allTicks,
        m = c.length;if ((e = { stroke: s, "stroke-width": d, "stroke-dasharray": g }, !(r[0] && (r[0].x !== _lib.UNDEF || r[0].y !== _lib.UNDEF))) && n.lines.isDraw && n.categoryNumDivLines) for (a = 0; a < m; ++a) (t = c[a], !!h(t)) && t !== o.min && t !== o.max && l.setReferenceInfo({ from: t, type: 'line', layer: 1, attr: e });
  }_drawComponents() {
    var e = this,
        a = e.config;a.drawAxisName && e._drawAxisName(), a.drawAxisLine && e._drawAxisLine(), a.tickValues ? a.drawLabels && e._drawCategory() : a.drawLabels && e._drawLabel(), a.drawTrendLines && e.drawTrendLabel(), e._drawScrollBar();
  }drawTrendLabel() {
    let e,
        a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f = this,
        v = f.config,
        u = v.parsedTrendLabels,
        L = f.getFromEnv('animationManager'),
        w = this.getFromEnv('toolTipController'),
        T = v.axisTrendLabelContainer,
        y = v.isOpposit,
        k = v.labelPadding,
        C = v.vTrendLines,
        V = v.trendLines,
        P = v.axisDimention,
        A = f.getVisibleConfig(),
        E = A.minValue,
        S = A.maxValue,
        D = !0;for (x = 0, p = u.length; x < p; x++) u[x].id = x + TREND_ID;for (C ? l = y ? P.opposite - (v.trendBottomPadding || 0) : P.y + (v.trendBottomPadding || 0) : (l = y ? P.opposite + (k || 0) : P.x - (k || 0), n = y ? P.x + (k || 0) : P.opposite + (k || 0)), m = (0, _differenceWith2.default)((e, a) => e.attr.text === a.attr.text, v.prevTrendLabels, u), (x = 0, p = m.length); x < p; x++) c = f.getGraphicalElement(m[x].id), c && f.removeGraphicalElement(c);if (v.prevTrendLabels = (0, _lib.extend2)([], u), !v.drawTrendLabels) {
      for (x = 0, p = u.length; x < p; x++) c = f.getGraphicalElement(u[x].id), c && f.removeGraphicalElement(c);return;
    }for (x = 0, p = u.length; x < p; x++) a = u[x], t = f.getGraphicalElement(x + TREND_ID), r = +a.from, d = +a.to, D = !0, b = !isNaN(d), b ? (s = r + (d - r) / 2, (E > s || S < s) && (D = !1)) : (E > r || S < r) && (D = !1), D ? (C ? (g = f.getPixel(r, queryOptions), h = d ? f.getPixel(d, queryOptions) : 0, o = (0, _lib.pluckNumber)(a.isTrendZone, v.isTrendZone, 1), b && d != r && o ? (a.attr.x = g + (h - g) / 2, a.attr.y = l) : (a.attr.x = d ? h : g, a.attr.y = l)) : V && (g = f.getPixel(r, queryOptions), h = d ? f.getPixel(d, queryOptions) : 0, e = (0, _lib.pluckNumber)(a.valueOnRight, 0), o = (0, _lib.pluckNumber)(a.isTrendZone, v.isTrendZone, 0), b && d != r && o ? (a.attr.x = e ? n : l, a.attr.y = g + (h - g) / 2) : (a.attr.x = e ? n : l, a.attr.y = d ? e ? h : g : g)), t = f.addGraphicalElement(x + TREND_ID, L.setAnimation({ container: T, el: t || 'text', attr: a.attr, css: a.css, data: { value: s || r }, component: f, label: 'text' })), v.showTooltip && a.valueToolText ? w.enableToolTip(t, a.valueToolText) : w.disableToolTip(t)) : t && f.removeGraphicalElement(t);
  }_drawAxisName() {
    var e,
        a,
        i,
        t,
        l,
        n,
        o = Math.max,
        r = this,
        s = r.config,
        d = this.getFromEnv('toolTipController'),
        g = r.getLinkedItem('canvas').getEffectiveDimensions(),
        h = r.getFromEnv('animationManager'),
        c = g.left,
        m = g.top,
        b = g.width,
        x = g.height,
        p = m + x,
        f = r.getFromEnv('chart').config,
        v = s.name.style,
        u = s.name.value,
        L = s.isOpposit,
        w = s.isVertical,
        T = r.getFromEnv('smartLabel'),
        y = s.axisNameContainer,
        k = s.axisNamePadding,
        C = s.nameMaxH,
        V = s.nameMaxW,
        P = s.axisDimention,
        A = w ? P.x : P.y,
        E = P.opposite,
        S = r.getGraphicalElement('axisName'),
        D = (0, _lib.pluckNumber)(s.name.rotation, w ? 90 : 270),
        F = r.getFromEnv('paper'),
        M = { fontFamily: v.fontFamily, fontSize: v.fontSize, lineHeight: v.lineHeight, fontWeight: v.fontWeight, fontStyle: v.fontStyle };s.name.isDraw ? (e = { fontFamily: v.fontFamily, fill: v.color, "vertical-align": 'middle', "font-size": v.fontSize, "line-height": v.lineHeight }, T.useEllipsesOnOverflow(f.useEllipsesWhenOverflow), T.setStyle({ fontSize: v.fontSize, fontFamily: v.fontFamily, lineHeight: v.lineHeight, fontWeight: v.fontWeight }), s.drawAxisNameOpposit && (L = !L, A = E), w ? (k = o(k, getAxisNamePaddingOffset(s, f)), t = s.axisNameAlignCanvas || f.captionalignment && 'left' === f.captionalignment ? x : o(x, s.oriCanvasHeight || 0), D ? (a = T.getSmartText(u, t, V), i = a.tooltext, l = a.width) : (a = T.getSmartText(u, V, t), i = a.tooltext, l = a.height), n = s.drawAxisNameFromBottom ? p - l / 2 : l > x ? f.height / 2 : m + x / 2, e.text = a.text, e.x = L ? (A || c + b) + k + V / 2 : (A || c) - k - V / 2, e.y = n) : (a = T.getSmartText(u, b, C), i = a.tooltext, L && f.canvasMarginTop && (k = o(k, f.canvasMarginTop - f.marginTop - C)), !L && f.canvasMarginBottom && (k = o(k, f.canvasMarginBottom - f.marginBottom - C)), e.text = a.text, e.x = c + b / 2, e.y = L ? (A || m) - k - C / 2 : (A || p) + k + C / 2), e['text-bound'] = '' === a.text ? [] : [v.backgroundColor, v.borderColor, v.borderColor ? v.borderThickness : 0, v.borderPadding, v.borderRadius, v.borderDash], e.transform = F.getSuggestiveRotation(w ? D : 0, e.x, e.y), S = r.addGraphicalElement('axisName', h.setAnimation({ css: M, el: S || 'text', attr: e, container: y, component: r, label: 'text' })), s.showTooltip ? d.enableToolTip(S, i) : d.disableToolTip(S)) : S && r.removeGraphicalElement(S);
  }_drawAxisLine() {
    const e = 'axisLine';var a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f,
        v,
        u,
        L = this,
        w = L.config,
        T = w.isVertical,
        y = w.isOpposit,
        k = L.getFromEnv('chart'),
        C = L.getLinkedItem('canvas').getEffectiveDimensions(),
        V = L.getFromEnv('animationManager'),
        P = C.top,
        A = C.left,
        E = P + C.height,
        S = A + C.width,
        D = w.axisDimention,
        F = T ? D.x : D.y,
        M = w.drawAxisLineWRTCanvas,
        R = k.getFromEnv('dataSource').chart,
        W = w.axisAxisLineContainerBottom,
        I = L.getGraphicalElement('axisLine'),
        H = [];if (n = 1 === (0, _lib.pluckNumber)(R.showyaxisline, R.showyaxisline) ? (0, _lib.pluckNumber)(R.yaxislinethickness, R.pyaxislinethickness, 1) : 0, w.showAxisLine) {
      if (T ? (y ? (F = M ? S : F, o = F + w.axisLineThickness / 2) : (F = M ? A : F, o = F - w.axisLineThickness / 2), f = getCrispPath(['M', o, E, 'L', o, P], w.axisLineThickness), l = f.path) : (y ? (F = M ? P : F, o = F - w.axisLineThickness / 2) : (F = M ? E : F, o = F + w.axisLineThickness / 2), f = getCrispPath(['M', A - n, o, 'L', S, o], w.axisLineThickness), l = f.path), d = { path: l, stroke: w.axisLineColor, "stroke-linecap": BUTT, "stroke-width": w.axisLineThickness, "shape-rendering": f.isCrisped ? CRISP : _lib.UNDEF }, w.drawTick && w.tickLength) for (a = { stroke: w.tickColor, "stroke-width": w.tickWidth }, r = T ? y ? o + w.tickLength : o - w.tickLength : y ? o - w.tickLength : o + w.tickLength, v = w.tickValues ? w.tickValues.tickValue.map(e => T ? e.y : e.x) : w.ticks, (p = 0, u = v.length); p < u; p += 1) m = v[p], b = `${m}${TICK_ID}`, h = L.getGraphicalElement(b), s = L.getPixel(m, queryOptions), a.path = getCrispPath(T ? ['M', o, s, 'L', r, s] : ['M', s, o, 'L', s, r], w.tickWidth).path, g = V.setAnimation({ el: h || 'path', attr: a, data: { value: m, path: a.path }, container: W, component: L, label: 'path' }), h || L.addGraphicalElement(b, g), H.push(b);t = V.setAnimation({ el: I || 'path', attr: d, container: W, component: L, label: 'path' }), I || L.addGraphicalElement(e, t), H.push(e);
    }for (x = (0, _diff2.default)(w.prevTicks, H), p = 0, u = x.length; p < u; p++) c = L.getGraphicalElement(x[p]), c && L.removeGraphicalElement(c);w.prevTicks = H;
  }_parseCategory() {
    var e,
        a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f,
        v,
        u,
        L,
        w,
        T,
        y,
        k,
        C,
        V,
        P,
        A,
        E,
        S = Math.abs,
        D = this,
        F = D.config,
        M = F.axisDimention || {},
        R = D.getFromEnv('chart'),
        W = R.getFromEnv('smartLabel'),
        I = D.components,
        H = I.labels,
        N = D.getLinkedItem('canvas').getEffectiveDimensions(),
        O = R.config,
        _ = F.isOpposit,
        z = F.labels,
        G = z.style,
        B = F.isVertical,
        Z = N.top,
        j = N.left,
        X = Z + N.height,
        Y = j + N.width,
        J = F.labelPadding,
        U = B ? M.x : M.y,
        Q = M.opposite,
        K = R.getFromEnv('dataSource').categories,
        $ = {},
        q = F.tickValues.tickValue,
        ee = F.axisRange.min,
        ae = F.drawnStaggerLines,
        ie = (F.labelStep !== F.labels.step || 1 !== D.getZoom()) && 'stagger' === F.labelDisplay;if (F.labels.isDraw) for (B && (C = S(D.getPixel(0, queryOptions) - D.getPixel(0 + F.axisRange.tickInterval, queryOptions)), F.labelMaxH > C && (w = Math.ceil(F.labelMaxH / C)), w > F.labels.step && (F.labels.step = w)), ie && (k = 2 * S(D.getPixel(ee, queryOptions) - D.getPixel(ee + F.labels.step, queryOptions)) * F.sWidthAdjstFactor - 1), l = F.labels.rotation, P = l ? F.labelMaxH : F.labelMaxW, A = l ? F.labelMaxW : F.labelMaxH, F.drawLabelsOpposit && (_ = !_, U = Q), K && K[0] && 'auto' !== F.xAxisLabelMode && ($.fontFamily = K[0].font, $.fontSize = K[0].fontsize, $.color = K[0].fontcolor), F.ParentCss = m = { fontFamily: (0, _lib.pluck)($.fontFamily, G.fontFamily), fontSize: (0, _lib.pluck)($.fontSize, G.fontSize), fontWeight: (0, _lib.pluck)(G.fontWeight), fontStyle: (0, _lib.pluck)(G.fontStyle) }, m.lineHeight = (0, _lib.setLineHeight)(m), u = D._getCategoryArr(), I.labelIndexArr = [], (e = 0, L = u.length); e < L; e += 1) E = u[e].index, a = q[E], f = u[e].value, I.labelIndexArr.push(E), d = (0, _lib.pluck)(a.font, a.labelfont), g = (0, _lib.pluck)(a.fontsize, a.labelfontsize), h = (0, _lib.pluck)(a.fontbold, a.labelfontbold) ? (0, _lib.pluckNumber)(a.fontbold, a.labelfontbold, 0) ? 'bold' : _lib.NORMAL : _lib.UNDEF, c = (0, _lib.pluck)(a.fontitalic, a.labelfontitalic) ? (0, _lib.pluckNumber)(a.fontitalic, a.labelfontitalic, 0) ? 'italic' : _lib.NORMAL : _lib.UNDEF, x = (0, _libGraphics.convertColor)((0, _lib.pluck)(a.fontcolor, a.labelfontcolor, $.color, G.color), (0, _lib.pluckNumber)(a.labelalpha, F.rawAttr.labelFontAlpha, R.config.singleseries ? _lib.UNDEF : a.alpha, 100)), d || g || h || c ? (s = {}, d && (s.fontFamily = d), g && (s.fontSize = g), h && (s.fontWeight = h), c && (s.fontStyle = c), s.lineHeight = g ? (0, _lib.setLineHeight)(s) : m.lineHeight) : s = _lib.UNDEF, (s || m) && (o = (s || m).lineHeight, -1 !== o.indexOf('px') && (n = o.replace(/px/i, ''), n = parseFloat(n))), !1 === a.appliedSmartLabel && (W.setStyle(a._ovrStyle || m), V = W.getSmartText(a.oriLabel || a.label, P, A), a.oriLabel = a.oriLabel || a.label, a.label = V.text, a.labelTooltext = V.labelTooltext, a.appliedSmartLabel = !0), p = D.getPixel(f, queryOptions), B ? (t = a.label || '', r = +a.labelPadding || 0, b = { fill: x, "line-height": n, opacity: 1, "text-anchor": _ ? _lib.POSITION_START : _lib.POSITION_END, text: t, cursor: !O.singleseries && a.link || a.labellink || G.labelLink ? _lib.POINTER : '', x: _ ? (U || Y) + J : (U || j) - J, y: r ? p + r : p }) : (t = a.label || '', r = +a.labelPadding || 0, b = { fill: x, "line-height": n, opacity: 1, text: t, cursor: !O.singleseries && a.link || a.labellink || G.labelLink ? _lib.POINTER : '', x: p, y: _ ? (Z || U) - J : (U || X) + J }, l ? (b['text-anchor'] = _ ? _lib.POSITION_START : _lib.POSITION_END, b['vertical-align'] = 'middle') : (b['text-anchor'] = _lib.POSITION_MIDDLE, b['vertical-align'] = _ ? _lib.POSITION_BOTTOM : _lib.POSITION_TOP), ie ? (T = a.labelCount % ae, T && (!(n = a.style.lineHeight) && (n = F.labels.style.lineHeight), y = n.replace(/px/i, '') * T, b.y = _ ? b.y - y : b.y + y), W.setStyle(a._ovrStyle || m), V = W.getSmartText(a.oriLabel || a.label, k, A), a.oriLabel = a.oriLabel || a.label, b.text = a.label = V.text, a.labelTooltext = V.labelTooltext, a.appliedSmartLabel = !0) : r && (_ ? b.y -= r : b.y += r)), v = { label: a.label, lineHeight: o, border: (0, _lib.pluckNumber)(a.borderthickness, a.labelborderthickness) ? (0, _lib.pluckNumber)(a.borderthickness, a.labelborderthickness, 1) + 'px solid' : '', borderColor: a.bordercolor || a.labelbordercolor ? (0, _libGraphics.convertColor)(a.bordercolor || a.labelbordercolor, (0, _lib.pluckNumber)(a.borderalpha, a.labelborderalpha, a.alpha, a.labelalpha, 100)) : _lib.BLANKSTRING, borderThickness: (0, _lib.pluckNumber)(a.borderthickness, a.labelborderthickness), borderPadding: (0, _lib.pluckNumber)(a.borderpadding, a.labelborderpadding), borderRadius: (0, _lib.pluckNumber)(a.borderradius, a.labelborderradius), backgroundColor: a.bgcolor || a.labelbgcolor ? (0, _libGraphics.convertColor)(a.bgcolor || a.labelbgcolor, (0, _lib.pluckNumber)(a.bgalpha, a.labelbgalpha, a.alpha, a.labelalpha, F.rawAttr.labelFontAlpha, 100)) : _lib.BLANKSTRING, borderDash: (0, _lib.pluckNumber)(a.borderdashed, a.labelborderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(a.borderdashlen, a.labelborderdashlen, 4), (0, _lib.pluckNumber)(a.borderdashgap, a.labelborderdashgap, 2)) : 0 === (0, _lib.pluckNumber)(a.borderdashed, a.labelborderdashed) ? _lib.DASH_DEF : G.borderDash }, b['text-bound'] = a.label ? [(0, _lib.pluck)(v.backgroundColor, G.backgroundColor), (0, _lib.pluck)(v.borderColor, G.borderColor), (0, _lib.pluck)(v.borderThickness, G.borderThickness), (0, _lib.pluck)(v.borderPadding, G.borderPadding), (0, _lib.pluck)(v.borderRadius, G.borderRadius), (0, _lib.pluck)(v.borderDash, G.borderDash)] : [], z.shiftX && (b.x += z.shiftX), z.shiftY && (b.y += z.shiftY), b.transform = (0, _lib.getSuggestiveRotation)(l, b.x, b.y), H[E] = H[E] || { config: { props: { label: {} } } }, H[E].config.props.label.attr = b, H[E].config.props.label.css = s;
  }allocatePosition() {
    var e = this,
        a = e.config;a.tickValues ? a.drawLabels && e._parseCategory() : a.drawLabels && e._parseLabel();
  }_drawCategory() {
    var e,
        a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m = this,
        b = m.config,
        x = m.getFromEnv('chart'),
        p = x.config,
        f = b.labels,
        v = m.getFromEnv('animationManager'),
        u = f.style,
        L = this.getFromEnv('toolTipController'),
        w = b.axisContainer,
        T = m.config.categoryLabel || (m.config.categoryLabel = []),
        y = function (e) {
      return function (a) {
        var i = this;x.plotEventHandler(i, a, e);
      };
    },
        k = b.tickValues.tickValue,
        C = [];if (b.labels.isDraw) {
      for (w.css(b.ParentCss), r = m._getCategoryArr(), n = (0, _differenceWith2.default)((e, a) => e.value === a.value, b.prevCategoryIntervalArr, r), (e = 0, d = n.length); e < d; e++) h = m.getGraphicalElement(`${n[e].value}${LABEL_ID}`), h && m.removeGraphicalElement(h);for (b.prevCategoryIntervalArr = (0, _lib.extend2)([], r), e = 0, d = r.length; e < d; e += 1) C[e] = `${r[e].value}${LABEL_ID}`;for (e = 0, d = r.length; e < d; e += 1) c = r[e].index, a = k[c], g = m.components.labels[c].config, l = g.props.label.attr, s = m.getGraphicalElement(C[e]), t = v.setAnimation({ el: s || 'text', attr: l, container: w, data: { value: o }, component: m, label: 'text', css: g.props.label.css }), s || (m.addGraphicalElement(C[e], t), t.click(y('dataLabelClick')).hover(y('dataLabelRollOver'), y('dataLabelRollOut'))), t.data(EVENTARGS, { link: !p.singleseries && a.link || a.labellink || u.labelLink, text: l.text, index: c }), a.labelTooltext ? L.enableToolTip(t, a.labelTooltext) : L.disableToolTip(t), T[c] = t;
    } else for (e = 0, d = b.prevCategoryIntervalArr.length; e < d; e++) h = m.getGraphicalElement(`${b.prevCategoryIntervalArr[e].value}${LABEL_ID}`), h && m.removeGraphicalElement(h);
  }_getCategoryArr() {
    var e,
        a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h = this,
        c = h.config,
        m = c.isVertical,
        b = 0,
        x = 0,
        p = [];for (e = c.tickValues.tickValue, l = minimumEnquiry(e), t = e ? e.length - 1 : 0, m && (d = Math.abs(h.getPixel(0, queryOptions) - h.getPixel(1, queryOptions)), c.labelMaxH > d && (b = Math.ceil(c.labelMaxH / d)), b > c.labels.step && (c.labels.step = b)), s = 0 < c.labels.step ? c.labels.step : 1, g = 1 !== h.getZoom(), o = this.getVisibleConfig(), a = l; a <= t; a += s) if ((n = e[a], !!n) && (r = (0, _lib.pluckNumber)(n.x, n.y, a), 0 !== (0, _lib.pluckNumber)(n.showlabel, c.showLabels, 1))) {
      if (g && (r < o.minValue || r > o.maxValue)) {
        n.labelCount = x++;continue;
      }('auto' !== c.xAxisLabelMode && 'mixed' !== c.xAxisLabelMode || 0 !== c.showZeroPlane && 0 !== c.showZeroPlaneValue || 0 !== r) && (c.labels.drawNormalVal || c.labels.drawLimitVal && (a == l || a == t)) && (c.labels.drawNormalVal || a == l || a == t) && (c.labels.drawLimitVal || a != l && a != t) && (n.labelCount = x++, p.push({ index: a, value: r }));
    }return p;
  }getValue(e, a = { wrtVisible: !1 }) {
    var i = this.getScale(),
        t = this.getTranslation(),
        l = i.getDomainValue(a.wrtVisible ? e : e - t);return l;
  }getPixel(e, a = { wrtVisible: !1 }) {
    var i = this.getScale(),
        t = this.getTranslation(),
        l = i.getRangeValue(e);return a.wrtVisible ? l : l + t;
  }_getCustomPixel(e, a, i = { wrtVisible: !1 }) {
    if (!a) return this.getPixel(e, i);var t = this.getScale().copy(),
        [l, n] = t.getRange(),
        o = Math.min(l, n),
        r = t.getRangeValue(e),
        s = this.getTranslation();return t.setRange([o, o + a]), i.wrtVisible ? r : r + s;
  }getTranslation() {
    return this.config.translation || 0;
  }setScrollType(e) {
    ('none' === e || 'smart' === e || 'always' === e) && (this.config.scrollType = e, 'none' === e ? this.disableScroll() : this.enableScroll());
  }getScrollType() {
    return this.config.scrollType;
  }_createScrollBar() {
    var e,
        a,
        i,
        t,
        l = this,
        n = l.config,
        o = l.getFromEnv('chart'),
        r = l.getFromEnv('animationManager'),
        s = l.getLinkedItem('scrollBar');e = o.getFromEnv('toolbox'), i = o.getFromEnv('toolBoxAPI'), a = i.Scroller, s || l.setLinkedItem('scrollBar', s = new a()), s.configure({ isHorizontal: !n.isVertical }, e.idCount, e.pId, l.getFromEnv('chartInstance').id), s.attachEventHandlers({ scrollStart: function (e) {
        t = e, o.fireChartInstanceEvent('scrollstart', { scrollPosition: e });
      }, scroll: function (e) {
        let a = n.axisRange.max,
            i = n.axisRange.min,
            t = l.getVisibleConfig(),
            s = t.minValue,
            d = t.maxValue,
            g = d - s,
            h = (0, _number2.default)(i, a - g),
            c = n.isReverse ? h(1 - e) : h(e);l.setState('scrolling', !0), r.setAnimationState('scroll'), o.fireChartInstanceEvent('onScroll', { scrollPosition: e }), l.setVisibleConfig(c, c + g);
      }, scrollEnd: function (e) {
        o.fireChartInstanceEvent('scrollend', { scrollPosition: e, prevScrollPosition: t });
      } });
  }_disposeScrollBar() {
    var e = this,
        a = e.getLinkedItem('scrollBar');a && (a.hide(), e.removeLinkedItem('scrollBar'));
  }_drawScrollBar() {
    var e,
        a,
        i,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f = this,
        v = f.getFromEnv('chart'),
        u = f.config,
        L = u.axisRange,
        w = u.scrollOptions || (u.scrollOptions = {}),
        T = L.max,
        y = L.min,
        k = w.vxLength,
        C = f.getLinkedItem('scrollBar'),
        V = v.getChildren('canvas')[0].config,
        P = u.scrollerContainer;C && (e = V.canvasLeft, a = V.canvasTop, i = V.canvasHeight, t = V.canvasWidth, l = V.canvasBorderWidth, n = u.showAxisLine ? u.axisLineThickness || 0 : 0, o = (0, _lib.pluckNumber)(l, u.lineStartExtension), r = (0, _lib.pluckNumber)(l, u.lineEndExtension), w.viewPortMin = y, w.viewPortMax = T, h = f.getVisibleConfig(), c = h.maxValue, m = h.minValue, b = c - m, x = L.max - L.min, s = b / x, p = (m - L.min) / (x - b), d = w.windowedCanvasWidth = f.getPixel(k, queryOptions), g = w.fullCanvasWidth = f.getPixel(T - y, queryOptions) - d, u.isVertical ? C.draw(e, a, { height: i, scrollRatio: s, roundEdges: V.isRoundEdges, fullCanvasWidth: g, windowedCanvasWidth: d, scrollPosition: u.isReverse ? 1 - p : p, parentLayer: P }) : C.draw(e - o, a + i + l + n - 2, { width: t + o + r, scrollRatio: s, roundEdges: V.isRoundEdges, fullCanvasWidth: g, windowedCanvasWidth: d, scrollPosition: p, parentLayer: P }));
  }enableScroll() {
    this.isScrollEnabled() || this._createScrollBar();
  }disableScroll() {
    this.isScrollEnabled() && this._disposeScrollBar();
  }isScrollEnabled() {
    return !!this.getLinkedItem('scrollBar');
  }setVisibleConfig(e, a) {
    let i,
        t = this,
        l = t.config,
        n = t.getZoom(),
        o = t.getScale();return !(e >= a || e < l.axisRange.min || a > l.axisRange.max) && (i = o.setDomain([e, a]).getDomain(), l.visibleMin = i[0], l.visibleMax = i[1], l.zoom = t._computeZoom(), l.translation = t._computeTranslation(), (1 !== n || 1 !== t.getZoom()) && (l.ticks = t.generateTicks(), l.minorTicks = t.generateMinorTicks(), l.tickValues && t.calculateTicksOnLabelMode && t.calculateTicksOnLabelMode()), t.decideScroll(), t.clearReferenceInfo(), t._parseReferenceVisuals(), t.fireEvent('visiblerangeset', { minValue: e, maxValue: a }), t.asyncDraw(), !0);
  }hide() {
    var e = this,
        a = e.config;a.axisContainer && (a.axisLabelContainerTop.hide(), a.scrollerContainer.hide(), a.axisContainer.hide(), a.axisNameContainer.hide(), a.axisTrendLabelContainer.hide(), a.axisAxisLineContainer.hide(), a.axisAxisLineContainerBottom.hide());
  }show() {
    var e = this,
        a = e.config;a.axisContainer && (a.axisLabelContainerTop.show(), a.scrollerContainer.show(), a.axisContainer.show(), a.axisNameContainer.show(), a.axisTrendLabelContainer.show(), a.axisAxisLineContainer.show(), a.axisAxisLineContainerBottom.show());
  }getZoom() {
    return this.config.zoom || 1;
  }_computeTranslation() {
    let e = this.config,
        a = this.getVisibleConfig(),
        i = (0, _lib.pluckNumber)(a.minValue, e.axisRange.min, 0),
        t = (0, _lib.pluckNumber)(e.axisRange.min, a.minValue, 0);return this.getPixel(i) - this.getPixel(t);
  }_computeZoom() {
    let e = this.config,
        a = this.getVisibleConfig(),
        i = (0, _lib.pluckNumber)(a.minValue, e.axisRange.min, 0),
        t = (0, _lib.pluckNumber)(a.maxValue, e.axisRange.max, 1),
        l = (0, _lib.pluckNumber)(e.axisRange.min, a.minValue, 0),
        n = (0, _lib.pluckNumber)(e.axisRange.max, a.maxValue, 1),
        o = e.maxZoomLimit,
        r = (n - l) / (t - i);return r > o ? o : r;
  }getTickValues() {
    var e = this.config.tickValues;return e && e.tickValue || [];
  }dataLabels(e) {
    var a = this,
        i = a.config.axisIndex,
        t = a.getFromEnv('number-formatter');return t.dataLabels(e, i);
  }getAxisBase() {
    let { minValue: e, maxValue: a } = this.getVisibleConfig();return 0 > e && 0 < a ? 0 : 0 >= a ? a : e;
  }_parseReferenceVisuals() {
    var e,
        a,
        i = this,
        t = i.config,
        l = i.getTickValues(),
        n = l.length,
        o = i.getFromEnv('chartConfig').is3D;t.isActive || (e = t.lines.isDraw, a = t.band.isDraw, t.lines.isDraw = 0, t.band.isDraw = 0), t.tickValues ? t.drawLabels && i._parseCategoryLine(l, 0, n) : t.drawPlotlines && i._parsePlotLine(), t.tickValues && 'auto' !== t.xAxisLabelMode ? (t.drawPlotlines && !o && i._parseCategoryPlotLine(), t.drawPlotBands && !o && i._parseCategoryPlotBand(), 'mixed' === t.xAxisLabelMode && t.drawPlotBands && !o && i._parsePlotBand()) : t.drawPlotBands && !o && i._parsePlotBand(), t.isActive || (t.lines.isDraw = e, t.band.isDraw = a), t.drawTrendLines && i._parseTrendLine();
  }_parseCategoryPlotBand() {
    var e,
        a,
        t,
        l,
        n,
        o = this,
        r = o.config,
        s = r.tickValues.tickValue,
        d = r.showAlternateGridColor,
        g = r.alternateGridColor,
        h = r.alternateGridAlpha,
        c = r._allTicks,
        m = o.getLimit(),
        b = m.min,
        x = m.max,
        p = isVisible(o.getVisibleConfig());if (!(s[0] && (s[0].x !== _lib.UNDEF || s[0].y !== _lib.UNDEF)) && d && r.band.isDraw && r.categoryNumDivLines) for (e = { fill: (0, _lib.toRaphaelColor)((0, _libGraphics.convertColor)(g, h)), "stroke-width": 0 }, a = 0, n = 0; n < c.length; ++a, ++n) p(c[n], c[n + 1]) && (t = c[n], 0 == a % 2) && (l = c[n + 1], l !== _lib.UNDEF) && (t === b && (t = 'canvasStart'), l === x && (l = 'canvasEnd'), o.setReferenceInfo({ from: t, to: l, layer: 0, type: 'band', attr: e }));
  }_parseTrendLine() {
    var e,
        a,
        t,
        l,
        n,
        o,
        r,
        s,
        d,
        g,
        h,
        c,
        m,
        b,
        x,
        p,
        f,
        v,
        u,
        L,
        w = this,
        T = w.config,
        y = T.isVertical,
        k = T.axisIndex,
        C = w.getFromEnv('chart-attrib'),
        V = w.getFromEnv('number-formatter'),
        P = T.axisRange,
        A = P.max,
        E = P.min,
        S = T.trend.trendStyle,
        D = { fontFamily: S.fontFamily, fontSize: S.fontSize, lineHeight: S.lineHeight, fontWeight: S.fontWeight, fontStyle: S.fontStyle },
        F = T.vTrendLines,
        M = T.trendLines,
        R = 0;if (r = M || F, r) for (t = 0, l = r.length; t < l; t += 1) for (e = 0, a = r[t].line && r[t].line.length; e < a; e += 1) (h = r[t].line[e], f = y ? 'yAxis' : 'xAxis', b = h.startvalue || h.value || 0, b = V.getCleanValue((0, _lib.pluck)(h.startvalue, h.value, 0)), x = +h.endvalue || _lib.UNDEF, n = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(r[t].line[e].tooltext, r[0].tooltext, T.trendlineToolText))), n = (0, _lib.parseTooltext)(n, [7, 15, 16, 17, 18, 19], { startValue: b, startDataValue: V[f](b, k), endValue: x || b, endDataValue: V[f](x || b, k), axisName: T.axisName }, h), !(b > A || b < E || x > A || x < E)) && (F ? (c = (0, _lib.parseUnsafeString)(h.displayvalue || ''), s = (0, _lib.pluckNumber)(h.istrendzone, T.isTrendZone, 1), x !== _lib.UNDEF && '' !== x && x !== b && s ? (d = { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, T.trendlineColor), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 40)), "stroke-width": 0 }, g = { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, S.color), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 99)), "vertical-align": _lib.POSITION_TOP, text: c }) : (p = (0, _lib.pluckNumber)(h.thickness, T.trendlineThickness, 1), d = { stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, T.trendlineColor), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 99)), "stroke-width": p, "stroke-dasharray": (0, _lib.pluck)(h.dashed, T.trendlinesAreDashed) === _lib.ONESTRING ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(h.dashlen, T.trendlinesDashLen), (0, _lib.pluckNumber)(h.dashgap, T.trendlinesDashGap)) : _lib.DASH_DEF }, g = { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, S.color), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 99)), "vertical-align": _lib.POSITION_TOP, text: c })) : M && (c = (0, _lib.pluck)((0, _lib.parseUnsafeString)(h.displayvalue), h.startvalue, ''), m = (0, _lib.pluckNumber)(h.valueonright, 0), s = (0, _lib.pluckNumber)(h.istrendzone, T.isTrendZone, 0), x !== _lib.UNDEF && '' !== x && x !== b && s ? (d = { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, T.trendlineColor), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 40)), "stroke-width": 0 }, g = { "text-anchor": m ? _lib.POSITION_START : _lib.POSITION_END, fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, S.color), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 99)), text: c }) : (p = (0, _lib.pluckNumber)(h.thickness, T.trendlineThickness, 1), d = { stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, T.trendlineColor), (0, _lib.pluck)(h.alpha, T.trendlineAlpha, 99)), "stroke-width": p, "stroke-dasharray": (0, _lib.pluck)(h.dashed, T.trendlinesAreDashed) === _lib.ONESTRING ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(h.dashlen, T.trendlinesDashLen), (0, _lib.pluckNumber)(h.dashgap, T.trendlinesDashGap)) : _lib.DASH_DEF }, g = { "text-anchor": m ? _lib.POSITION_START : _lib.POSITION_END, fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.color, S.color), (0, _lib.pluck)(h.alpha, h.alpha, T.trendlineAlpha, 99)), text: c })), g['text-bound'] = g.text ? [S.backgroundColor, S.borderColor, S.borderThickness, S.borderPadding, S.borderRadius, S.borderDash] : [], T.showTooltip && n || (n = ''), o = T.forceTrendBelow ? 0 : (0, _lib.pluckNumber)(h.showontop, C.showtrendlinesontop, 0), y ? (v = b, L = x === _lib.UNDEF ? b : x) : (v = x === _lib.UNDEF ? b : x, L = b), u = s && v !== L ? 'band' : 'line', v !== _lib.UNDEF && w.setReferenceInfo({ from: v, to: L, toolText: n, attr: d, layer: o ? 3 : 2, type: u, id: 'trend' + R + u }), T.parsedTrendLabels.push({ css: D, valueOnRight: m, isTrendZone: s, from: b, to: x, attr: g }), R += 1);
  }_parsePlotLine() {
    var e,
        a,
        t,
        l,
        n,
        o = this,
        r = o.config,
        s = r.axisRange,
        d = s.max,
        g = s.min,
        h = isInBetween(o.getVisibleConfig()),
        c = r.showCanvasBorder,
        m = (0, _libGraphics.convertColor)(r.divLineColor, r.divLineAlpha),
        b = r.divLineThickness,
        x = r.divLineIsDashed ? (0, _lib.getDashStyle)(r.divLineDashLen, r.divLineDashGap) : _lib.DASH_DEF,
        p = (0, _libGraphics.convertColor)(r.zeroPlaneColor, r.zeroPlaneAlpha),
        f = r.zeroPlaneThickness,
        v = r._allTicks,
        u = v.length,
        L = r.showZeroPlaneOnTop,
        w = r.minorTicks,
        T = w && w.length;if (r.lines.isDraw) for (a = 0; a < u; ++a) (e = v[a], !!h(e)) && (l = { "stroke-dasharray": x }, !(0 === r.showZeroPlane && 0 === e || c && (e === d || e === g))) && (0 === e && e !== g && e !== d ? (l.stroke = p, l['stroke-width'] = f, L = r.showZeroPlaneOnTop) : (L = 0, l.stroke = m, l['stroke-width'] = b), o.setReferenceInfo({ type: 'line', from: e, layer: 0 === e && L ? 3 : 1, attr: l }));for (n = { stroke: r.minorDivlinecolor, "stroke-width": r.minorDivLineThickness, "stroke-dasharray": x }, a = 0; a < T; ++a) t = w[a], o.setReferenceInfo({ type: 'line', from: t, layer: 1, attr: n });
  }_parseCategoryLine(e, a, t) {
    var l,
        n,
        o,
        r,
        s,
        d,
        g = this,
        h = g.config,
        c = g.getFromEnv('color-manager'),
        m = g.getFromEnv('chartInstance'),
        b = m.getJSONData().categories,
        x = {};if (a = a || 0, t = t || e ? e.length - 1 : 0, h.drawPlotlines) for (d = 1 !== g.getZoom(), o = this.getVisibleConfig(), b && b[0] && (x.verticalLineColor = b[0].verticallinecolor, x.verticalLineAlpha = b[0].verticallinealpha, x.verticalLineThickness = b[0].verticallinethickness, x.verticalLineDashed = b[0].verticallinedashed, x.verticalLineDashLen = b[0].verticallinedashlen, x.verticalLineDashGap = b[0].verticallinedashgap), l = a; l <= t; l += 1) (n = e[l], !!n) && (s = (0, _lib.pluckNumber)(n.x, n.y, l), 1 === +n.showverticalline) && (d && (s < o.minValue || s > o.maxValue) || (r = { stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(n.linecolor, x.verticalLineColor, h.divLineColor, c.getColor('divLineColor')), (0, _lib.pluck)(n.linealpha, x.verticalLineAlpha, c.getColor('divLineAlpha'))), "stroke-width": (0, _lib.pluckNumber)(n.linethickness, x.verticalLineThickness, 1) }, r['stroke-dasharray'] = (0, _lib.pluckNumber)(n.linedashed, x.verticalLineDashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(n.linedashLen, x.verticalLineDashLen, 4), (0, _lib.pluckNumber)(n.linedashgap, x.verticalLineDashGap, 2), r['stroke-width']) : _lib.DASH_DEF, g.setReferenceInfo({ type: 'line', from: s, layer: 1, attr: r })));
  }_parsePlotBand() {
    var e,
        a,
        t,
        l,
        n,
        o,
        r = Math.min,
        s = Math.max,
        d = this,
        g = d.config,
        h = g.showAlternateGridColor,
        c = g.alternateGridColor,
        m = g.alternateGridAlpha,
        b = g._allTicks,
        x = isVisible(d.getVisibleConfig()),
        p = g.isReverse;if (h && g.band.isDraw) for (a = 1, e = { fill: (0, _lib.toRaphaelColor)((0, _libGraphics.convertColor)(c, m)), "stroke-width": 0 }, (l = 0, t = b.length); l < t; ++l, ++a) x(b[l], b[l + 1]) && 0 == a % 2 && b[l + 1] !== _lib.UNDEF && (o = p ? s(b[l], b[l + 1]) : r(b[l], b[l + 1]), n = p ? r(b[l], b[l + 1]) : s(b[l], b[l + 1]), d.setReferenceInfo({ from: o, to: n, type: 'band', layer: 0, attr: e }));
  }getReferenceInfo() {
    return this.config.referenceInfo;
  }setReferenceInfo(e) {
    this.config.referenceInfo.push(e);
  }clearReferenceInfo() {
    let e = this.config;e.referenceInfo = [], e.parsedTrendLabels = [], e.parsedVlineInfo = [];
  }resetStoredLimits() {
    this.config.dataLimit = {};
  }decideScroll() {
    let e = this,
        a = e.getScrollType();'always' === a || 'smart' === a && 1 !== e.getZoom() ? e.enableScroll() : e.disableScroll();
  }getAxisDimension() {
    let { x: e, y: a, opposite: i, axisLength: t } = this.config.axisDimention;return { x: e, y: a, opposite: i, axisLength: t };
  }
}Cartesian.prototype.setAxisDimention = _commonApi.setAxisDimention, Cartesian.prototype.shiftLabels = _commonApi.shiftLabels, Cartesian.prototype._createContainer = _commonApi._createContainer;exports.default = Cartesian;
exports.getCrispPath = getCrispPath;
exports.minimumEnquiry = minimumEnquiry;
},{"./axis":200,"../lib/lib.js":23,"../lib/lib-graphics":24,"../animation-rules/cartesian-axis-animation":195,"./utils/interpolators/number":159,"./utils/array/diff":160,"ramda/src/differenceWith":201,"../dependency-manager":20,"./common-api":162}],161:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartesian = require('./cartesian');

var _cartesian2 = _interopRequireDefault(_cartesian);

var _lib = require('../lib/lib');

var _commonApi = require('./common-api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ROTATED_LABEL_PADDING = 3,
      ROTATED_LABEL_MIN_GAP = 10;class CartesainLabelManager extends _cartesian2.default {
  _getHMaxLabelDimention(a) {
    function b(a, b) {
      switch (b.toLowerCase()) {case 'left':
          return R(T._getCustomPixel(a));case 'right':
          return R(W.width - T._getCustomPixel(a));}
    }var c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = Math.ceil,
        O = Math.max,
        P = Math.floor,
        Q = Math.min,
        R = Math.abs,
        S = Number.POSITIVE_INFINITY,
        T = this,
        U = T.config,
        V = T.getFromEnv('chart'),
        W = V.config,
        X = V.getFromEnv('smartLabel'),
        Y = U.axisRange,
        Z = U.labels,
        $ = U.labelDisplay,
        _ = U.slantLabel,
        aa = Z.style,
        ba = U.maxLabelHeight,
        ca = T.getInterval(),
        da = U.staggerLines,
        ea = U.labelStep,
        fa = W.canvasLeft,
        ga = W.canvasRight,
        ha = da - 2,
        ia = Y.max,
        ja = Y.min,
        ka = 0,
        la = U.tickValues && U.tickValues.tickValue,
        ma = la && la.length,
        na = V.distributedColumns,
        oa = 0,
        pa = { text: _lib.UNDEF, width: 0, style: _lib.UNDEF },
        qa = 0,
        ra = 4,
        sa = _lib.stubFN,
        ta = _lib.stubFN,
        ua = _lib.stubFN,
        va = {},
        wa = 0,
        xa = !1,
        ya = 0,
        za = !1,
        Aa = S,
        Ba = U.ticks,
        Ca = S;if (na) for (t = 0; t < ma; t++) la[t + 1] ? la[t].x && (la[t].plotWidth = T.getPixel(la[t + 1].x - la[t].x) - T.getPixel(0)) : la[t].plotWidth = T.getPixel(W.canvasRight - la[t].x) - T.getPixel(0);if (U.tickValues && (!la || 0 === la.length)) return { width: 0, height: 0 };if ('rotate' === $ && (U.rotateLabels = 1), U.tickValues || (U.irregularCatAxis = !1), U.sWidthAdjstFactor = d = 0 == ha ? 1 : 1 == ha ? 1.5 : ha, X.useEllipsesOnOverflow(W.useEllipsesWhenOverflow), X.setStyle({ fontSize: aa.fontSize, fontFamily: aa.fontFamily, lineHeight: aa.lineHeight, fontWeight: aa.fontWeight }), U.irregularCatAxis) {
      for (la.sort(function (a, b) {
        return a.x - b.x;
      }), t = 0, oa = la.length; t < oa; t++) {
        if (g = la[t], 'undefined' != typeof z) {
          if (Ca = R(g.x - z), D = R(T._getCustomPixel(ja) - T._getCustomPixel(ja + Ca)), X.setStyle(Object.assign({}, g.style)), B = X.getOriSize('W'), C = B.width, D < 1.2 * C) {
            g.label = '', Ca = Aa;continue;
          }E._individualIWR = D, g._individualIWL = D, Aa = Ca;
        }E = g, z = g.x;
      }for (Ca === S && (Ca = P(Q(g.x, ia - g.x)), Ca = O(Ca, 4)), t = 0, oa = la.length; t < oa; t++) g = la[t], t || (g._individualIWL = 1 / 0), t === oa - 1 && (g._individualIWR = 1 / 0), g.individualIW = Q(g._individualIWL, g._individualIWR);j = R(T._getCustomPixel(ja) - T._getCustomPixel(ja + Ca)), j = Q(2 * b(la[0].x, 'left'), 2 * b(la[oa - 1].x, 'right'), j);
    } else j = R(T._getCustomPixel(ja) - T._getCustomPixel(ja + ca));if (a = ba || a, va.__root__ = { getHeight: function (a) {
        var b = la[a],
            c = b._ovrStyle.lineHeight,
            d = parseInt(c.replace(/(\d+)px/, '$1'), 10);return d;
      }, getWidth: function () {
        return a;
      }, getCalculatedLabelStep: function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            i,
            l,
            m,
            n,
            o = 0,
            p = a.length,
            q = Number.NEGATIVE_INFINITY,
            r = {},
            s = 0;for (o = 0; o < p; o++) e = a[o], e.style = e.style || {};if (U.irregularCatAxis) return U.labelStep;for (o = 0; o < p; o++) (e = a[o], !!e) && (e.label || (e.label = ''), f = e.oriLabel || e.label, h = { fontSize: aa.fontSize, fontFamily: aa.fontFamily, lineHeight: aa.lineHeight, fontWeight: aa.fontWeight }, s++, e.style = e.style || {}, (0, _lib.extend2)(h, e.style), b = h.fontSize + h.fontFamily + h.lineHeight + h.fontWeight, r[b] ? f.length > r[b].label.length && (r[b].label = f) : r[b] = { label: f, style: h });for (g in r) r.hasOwnProperty(g) && (c = r[g].style, d = r[g].label, c.lineHeight = (0, _lib.setLineHeight)(c), X.setStyle(c), U.rotateLabels && (m = parseInt(c.lineHeight.replace(/(\d+)px/, '$1'), 10)), k = X.getSmartText(d, _lib.UNDEF, m), l = 0 === U.rotateLabels ? 60 < k.width ? 60 : k.width : k.height, q = O(l, q));return i = P(R(T._getCustomPixel(ia) - T._getCustomPixel(ja)) / q), n = O(N(s / i), U.labelStep), j = R(T._getCustomPixel(ja) - T._getCustomPixel(ja + n)), s <= i ? U.labelStep : n;
      } }, va._inProp = {}, va.getCopyById = function (a) {
      var b,
          c = this,
          d = c._inProp,
          e = c.__root__,
          f = d.copyStore;return (f = f || {}, b = f[a], b) ? b : ((0, _lib.extend2)(b = f[a] = {}, e), b);
    }, U.tickValues) {
      for ('rotate' === $ ? (Z.rotation = _ ? 300 : 270, n = va.getCopyById('rotate')) : 'stagger' === $ ? (n = va.getCopyById('stagger'), n.getHeight = function (a) {
        var b, c, d, e;return b = U.tickValues.tickValue, c = b[a], d = c && c.style || (c.style = {}), h = { fontSize: aa.fontSize, fontFamily: aa.fontFamily, lineHeight: aa.lineHeight, fontWeight: aa.fontWeight }, (0, _lib.extend2)(h, d), X.setStyle(h), e = X.getOriSize(c.label), e.height;
      }, n.getWidth = function (a) {
        return ra = 1, a.individualIW ? a.individualIW : 2 * j * d - ra;
      }, ua = function (b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = b.length,
            l = 0;if (X.setStyle(aa), j = X.getOriSize('WWW'), e = j.height, d = b[k - 1], P(d._cumulativeSum) <= N(k * (e + 2))) h = P(a / e), da = 0 > h - da ? h : da;else {
          h = P(a / (e + 4));do for (l = 0, i = h, (f = i - 1, k = b.length); f < k;) {
            if (k - f < h && (f = k - 1), c = b[f], g = c._cumulativeSum - l, ~~g > -~a) {
              xa = !0;break;
            } else xa = !1;l = c._cumulativeSum, f += i;
          } while (h-- && xa);h++, da = Q(da, h);
        }U.drawnStaggerLines = da;
      }, sa = function (a) {
        var b,
            c,
            d,
            f,
            g,
            h = 0;for (g = 0, d = a.length; g < d; g++) (b = a[g], !b.stepSkipped) && (c = b && b.style || {}, (f = c.lineHeight) || (f = aa.lineHeight), e = h++ % da, b.labelPadding = e ? f.replace(/px/i, '') * e : 0);
      }) : 'none' === $ ? (n = va.getCopyById('none'), n.getHeight = _lib.stubFN, n.getWidth = _lib.stubFN, ta = _lib.stubFN, U.rotateLabels && (Z.rotation = _ ? 300 : 270, A = a), n.getCalculatedLabelStep = function () {
        return U.labelStep;
      }) : (n = va.getCopyById('auto'), n.getHeight = function () {
        return a;
      }, n.getWidth = function (a) {
        return a.individualIW ? a.individualIW : j - 2 * ra;
      }, ta = function (a, b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            p = V.getFromEnv('chart-attrib'),
            q = (0, _lib.pluckNumber)(p && p.rotatelabels);if (!U.irregularCatAxis && (X.setStyle(a), d = X.getOriSize('WWW'), c = d.width, c >= j && 0 !== q)) {
          for (Z.rotation = _ ? 300 : 270, Z.forceRotate = !0, n = va.getCopyById('rotate'), l = n.getWidth, m = n.getHeight, pa.width = 0, (e = 0, f = b.length); e < f; e++) (g = b[e], g && (g.label || g.oriLabel) && 0 !== (0, _lib.pluckNumber)(g.showlabel, U.showLabels, 1) && !0 !== g.stepSkipped) && (h = g._ovrStyle, X.setStyle({ fontSize: h.fontSize, fontFamily: h.fontFamily, lineHeight: h.lineHeight, fontWeight: h.fontWeight }), k = X.getSmartText(g.oriLabel, l(g), m(e)), g.label = k.text, g.labelTooltext = k.tooltext, g._sLabel = k, pa.width < k.width && (pa.text = k.text, pa.width = k.width, pa.height = k.height, pa.style = h));o = pa.text;
        }
      }), l = n.getWidth, m = n.getHeight, ea = U.labels.step = U.labelStep = U._oriLabelStep, ea = U.labels.step = U.labelStep = n.getCalculatedLabelStep(la), q = (0, _cartesian.minimumEnquiry)(la), t = q, p = 0, u = 0, oa = la.length; t < oa; t++, p++) if (g = la[t], g && (g.label || g.oriLabel) && 0 !== (0, _lib.pluckNumber)(g.showlabel, U.showLabels, 1)) {
        if (za = !0, h = { fontSize: aa.fontSize, fontFamily: aa.fontFamily, lineHeight: aa.lineHeight, fontWeight: aa.fontWeight }, (0, _lib.extend2)(h, g.style), h.lineHeight = (0, _lib.setLineHeight)(h), K = h.fontSize + h.fontFamily + h.lineHeight + h.fontWeight, K != J && (X.setStyle(h), J = K), p % ea) {
          g.stepSkipped = !0, g.appliedSmartLabel = !1, ya++;continue;
        } else g.appliedSmartLabel = !0, g.stepSkipped = !1;g._ovrStyle = h, la[t].plotWidth ? c = O('rotate' === $ ? la[t].plotWidth - 6 : 0, m(t)) : ('rotate' === $ ? t < oa - 1 && (f = T.getPixel(t + 1) - T.getPixel(t) - ROTATED_LABEL_MIN_GAP) : f = 0, 'rotate' === $ && isNaN(+f) && (f = W.canvasWidth / T.getVisibleLength() - ROTATED_LABEL_PADDING), c = O(f, m(t))), k = X.getSmartText(g.oriLabel || g.label, l(g), c), wa += k.height + 2, T.components.labels[u++] = { config: { width: k.width, height: k.height, props: { label: {} } } }, g._cumulativeSum = wa, g.oriLabel = g.oriLabel || g.label, g.label = k.text, g.labelTooltext = k.tooltext, g._sLabel = k, pa.width < k.oriTextWidth && ((0, _lib.extend2)(pa, k), pa.style = h), qa < k.height && (qa = k.height);
      }if (!za) return { height: 0, width: 0 };if (ua(la, ya), sa(la, ya), ta(pa.style, la), o = pa.text || '', 'mixed' === U.xAxisLabelMode) for (x = U.isPercent ? V.getFromEnv('number-formatter').percentValue : V.getFromEnv('number-formatter').xAxis, ka = o.length, (t = 0, L = Ba && Ba.length); t < L; ++t) w = Ba[t], v = '' + x.call(V.getFromEnv('number-formatter'), w, U.axisIndex), v.length > ka && (o = v, ka = v.length);for (pa.height = O(qa, pa.height || 0), H = la.length, (t = 0, oa = la.length); t < oa && (F = la[t], !F._sLabel); t++);for (oa = la.length, t = oa - 1; 0 <= t && (G = la[t], !G._sLabel); t--);I = 1 !== T.getZoom(), Z.rotation || I || !F._sLabel ? (U.axisEndLabelDisplaySpace.left = 0, U.axisEndLabelDisplaySpace.right = 0) : (U.axisEndLabelDisplaySpace.left = O(fa - (T._getCustomPixel(F.x || 0) - F._sLabel.width / 2), 0), U.axisEndLabelDisplaySpace.right = O(T._getCustomPixel(G.x || H - 1) + G._sLabel.width / 2 - ga, 0)), y = pa;
    } else {
      for (x = U.numberFormatterFn ? V.getFromEnv('number-formatter')[U.numberFormatterFn] : U.isPercent ? V.getFromEnv('number-formatter').percentValue : V.getFromEnv('number-formatter').xAxis, t = 0, L = Ba && Ba.length; t < L; ++t) M = Ba[t], w = (0, _lib.toPrecision)(M, 10), v = '' + x.call(V.getFromEnv('number-formatter'), w, U.axisIndex), M === ja && (r = v), M === ia && (s = v), y = X.getOriSize(v), T.components.labels[t] = { config: { width: y.width, height: y.height, props: { label: {} } } }, v.length > ka && (o = v, ka = v.length);X.setStyle({ fontSize: aa.fontSize, fontFamily: aa.fontFamily, lineHeight: aa.lineHeight, fontWeight: aa.fontWeight }), y = X.getOriSize(o || ''), 'rotate' === $ && (Z.rotation = 270), U.rotateLabels && (_ ? Z.rotation = 300 : Z.rotation = 270), Z.rotation || (r = X.getOriSize(r || ''), s = X.getOriSize(s || ''), U.axisEndLabelDisplaySpace.left = r.width / 2 + 2, U.axisEndLabelDisplaySpace.right = s.width / 2 + 2);
    }return U.tickValues && 'stagger' === $ && (y.height = da * pa.height), y.width = A ? Q(A, y.width) : y.width, y.width = (0, _lib.pluckNumber)(y.width), y.maxWidth = (0, _lib.pluckNumber)(y.maxWidth), y;
  }_getVMaxLabelDimention(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = this,
        r = q.config,
        s = q.getFromEnv('chart'),
        t = s.config,
        u = s.getFromEnv('smartLabel'),
        v = r.labels.style,
        w = r.useEllipsesWhenOverflow,
        x = r.maxLabelWidthPercent,
        y = r.minLabelWidthPercent,
        z = 0,
        A = s.getFromEnv('dataSource').categories,
        B = { height: 0, width: 0 },
        C = r.ticks,
        D = {};if (u.useEllipsesOnOverflow(t.useEllipsesWhenOverflow), u.setStyle({ fontSize: v.fontSize, fontFamily: v.fontFamily, lineHeight: v.lineHeight, fontWeight: v.fontWeight }), r.tickValues) {
      for (A && (D = { fontFamily: A[0].font, fontSize: A[0].fontsize, color: A[0].fontcolor }), x && (c = x / 100 * t.width, c < a && (a = c)), y && (d = y / 100 * t.width, d > a && (a = d)), j = r.tickValues.tickValue, (e = 0, k = j.length); e < k; e++) (l = j[e], 0 !== (0, _lib.pluckNumber)(l.showlabel, r.showLabels)) && (o = { fontFamily: (0, _lib.pluck)(l.font, l.labelfont, D.fontFamily, v.fontFamily), fontSize: (0, _lib.pluck)(l.fontsize, l.labelfontsize, D.fontSize, v.fontSize).replace(/px/i, '') + 'px', fontWeight: 'normal' == v.fontWeight ? (0, _lib.pluckNumber)(l.fontbold, l.labelfontbold, 0) ? 'bold' : 'normal' : v.fontWeight, fontStyle: 'normal' == v.fontStyle ? (0, _lib.pluckNumber)(l.fontitalic, l.labelfontitalic, 0) ? 'italic' : 'normal' : v.fontStyle }, p = { fontFamily: (0, _lib.pluck)(o.fontFamily, D.fontFamily, v.fontFamily), fontSize: (0, _lib.pluck)(o.fontSize, D.fontSize, v.fontSize), fontWeight: (0, _lib.pluck)(o.fontWeight, v.fontWeight), fontStyle: (0, _lib.pluck)(o.fontStyle, v.fontStyle) }, p.lineHeight = (0, _lib.setLineHeight)(p), u.setStyle(p), m = u.getSmartText(l.oriLabel || l.label, a, v.lineHeight, w), q.components.labels[e] = { config: { width: m.width, height: m.height, props: { label: {} } } }, l.oriLabel = l.oriLabel || l.label, l.label = h = m.text, l.labelTooltext = m.tooltext, m.width > z && (B = m, z = m.width));return B;
    }for (n = r.numberFormatterFn ? s.getFromEnv('number-formatter')[r.numberFormatterFn] : r.isPercent ? s.getFromEnv('number-formatter').percentValue : s.getFromEnv('number-formatter').yAxis, e = 0, f = C && C.length; e < f; ++e) g = (0, _lib.toPrecision)(C[e], 10), h = '' + n.call(s.getFromEnv('number-formatter'), g, r.axisIndex), m = u.getSmartText(h), q.components.labels[e] = { config: { width: m.width, height: m.height, props: { label: {} } } }, h.length > z && (b = h, z = h.length);return u.getOriSize(b);
  }getCleanValue(a, b) {
    var c = this,
        d = c.getFromEnv('number-formatter');return d.getCleanValue(a, b);
  }generateMinorTicks() {
    if (this) return [];
  }setCanvas(a) {
    var b = this,
        c = b.config;c.canvas = a;
  }_adjustNumberFormatter(a) {
    var b,
        c,
        d = this,
        e = d.config,
        f = e.axisIndex,
        g = e.isVertical,
        h = d.getFromEnv('chart'),
        i = h.getFromEnv('number-formatter'),
        j = e._defaultDecimalPrecision,
        k = e._defaultForceDecimal,
        l = 0;c = g || 'yAxis' === e.numberFormatterFn ? (i.Y[f] || i.Y[0]).yAxisLabelConf : i.paramX, j === _lib.UNDEF ? e._defaultDecimalPrecision = c.decimalprecision : c.decimalprecision = j, k === _lib.UNDEF ? e._defaultForceDecimal = c.forcedecimals : c.forcedecimals = k;0 < parseInt(a, 10) || (b = a.toString().split('.')[1], b && (l = b.match(/^[0]*/)[0].length + 1, l > c.decimalprecision && (c.forcedecimals = 1), c.decimalprecision = Math.max(l, c.decimalprecision)));
  }setLabelConfig(a) {
    var b,
        c = this,
        d = c.config,
        e = d.labels;for (b in a) a.hasOwnProperty(b) && (e[b] = a[b]);
  }
}CartesainLabelManager.prototype._parseLabel = _commonApi._parseLabel, CartesainLabelManager.prototype._drawLabel = _commonApi._drawLabel, CartesainLabelManager.prototype.getTrendLineLimits = _commonApi.getTrendLineLimits, CartesainLabelManager.prototype.setAxisPadding = _commonApi.setAxisPadding, CartesainLabelManager.prototype.getLabel = _commonApi.getLabel;exports.default = CartesainLabelManager;
},{"./cartesian":158,"../lib/lib":23,"./common-api":162}],165:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const START = 0,
      STEP = 1;let range = (...a) => {
  let b,
      c,
      d,
      e,
      f,
      g = [];if (2 < a.length ? (b = a[0], c = a[1], d = a[2]) : 1 === a.length ? (b = START, c = a[0], d = STEP) : (b = a[0], c = a[1], d = STEP), e = Math.floor(Math.max(0, Math.ceil((c - b) / d))), isFinite(e)) for (f = 0; f < e; ++f) g.push(d * f + b);return g;
};exports.default = range;
},{}],220:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const constant = a => () => a;exports.default = constant;
},{}],221:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

var _constant = require('../constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValid(a) {
  return null !== a && 'undefined' != typeof a;
}function interpolateValue(a, b) {
  return isValid(b) && isValid(a) && 'boolean' != typeof b ? (0, _number2.default)(a, b) : (0, _constant2.default)(b);
}exports.default = interpolateValue;
},{"./number":159,"../constant":220}],222:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function interpolateRound(a, b) {
  a = +a, b = +b;let c = b - a;return b => Math.round(c * b + a);
}exports.default = interpolateRound;
},{}],197:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bimap = exports.deInterpolateLinear = exports.copyScale = undefined;

var _value = require('../utils/interpolators/value');

var _value2 = _interopRequireDefault(_value);

var _round = require('../utils/interpolators/round');

var _round2 = _interopRequireDefault(_round);

var _constant = require('../utils/constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UNIT = [0, 1];function bimap(a, b, c, d) {
  var e, f;return a[0] > a[1] ? (e = c(a[1], a[0]), f = d(b[1], b[0])) : (e = c(a[0], a[1]), f = d(b[0], b[1])), a => f(e(a));
}function copyScale(a, b) {
  return b.setInterpolate(a.getInterpolate()).setClamp(a.getClamp()).setDomain(a.getDomain()).setRange(a.getRange());
}function deInterpolateLinear(a, b) {
  a = +a, b = +b;let c = b - a;return c ? b => (b - a) / c : (0, _constant2.default)(c);
}function deInterpolateClamp(a) {
  return (b, c) => {
    b = +b, c = +c;var d = a(b, c);return a => a <= b ? 0 : a >= c ? 1 : d(a);
  };
}function reInterpolateClamp(a) {
  return (b, c) => {
    b = +b, c = +c;var d = a(b, c);return a => 0 >= a ? b : 1 <= a ? c : d(a);
  };
}class ScaleContinuous {
  constructor(a, b) {
    this.domain = UNIT, this.range = UNIT, this.deInterpolate = a, this.reInterpolate = b, this.interpolate = _value2.default, this.clamp = !1, this.input = null, this.output = null, this._rescale();
  }_rescale() {
    return this.input = null, this.output = null, this;
  }setDomain(a = UNIT) {
    return this.domain = a.map(Number), this._rescale();
  }getDomain() {
    return this.domain.slice();
  }setRange(a = UNIT) {
    return this.range = a.slice(), this._rescale();
  }getRange() {
    return this.range.slice();
  }setInterpolate(a = _value2.default) {
    return this.interpolate = a, this._rescale();
  }getInterpolate() {
    return this.interpolate;
  }setClamp(a = !1) {
    return this.clamp = !!a, this._rescale();
  }getClamp() {
    return this.clamp;
  }rangeRound(a = UNIT) {
    return this.range = a.slice(), this.interpolate = _round2.default, this._rescale();
  }getRangeValue(a) {
    a = null === a ? void 0 : a;let b = this.getClamp(),
        c = b ? deInterpolateClamp(this.deInterpolate) : this.deInterpolate;return this.output || (this.output = bimap(this.getDomain(), this.getRange(), c, this.interpolate)), this.output(+a);
  }getDomainValue(a) {
    let b = this.getClamp(),
        c = b ? reInterpolateClamp(this.reInterpolate) : this.reInterpolate;return this.input || (this.input = bimap(this.getRange(), this.getDomain(), deInterpolateLinear, c)), this.input(+a);
  }
}exports.copyScale = copyScale;
exports.deInterpolateLinear = deInterpolateLinear;
exports.bimap = bimap;
exports.default = ScaleContinuous;
},{"../utils/interpolators/value":221,"../utils/interpolators/round":222,"../utils/constant":220}],198:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const E10 = 7.0710678118654755,
      E5 = 3.1622776601683795,
      E2 = 1.4142135623730951;function getMultiplier(a) {
  let b;return b = a >= E10 ? 10 : a >= E5 ? 5 : a >= E2 ? 2 : 1, b;
}function tickIncrement(a = 0, b = 1, c = 7) {
  var d = Math.pow;const e = (b - a) / Math.max(0, c),
        f = Math.floor(Math.log(e) / Math.LN10),
        g = e / d(10, f);return 0 <= f ? getMultiplier(g) * d(10, f) : -d(10, -f) / getMultiplier(g);
}function tickStep(a = 0, b = 1, c = 7) {
  let d = Math.abs(b - a) / Math.max(0, c),
      e = Math.floor(Math.log(d) / Math.LN10),
      f = Math.pow(10, e),
      g = d / f;return g >= E10 ? f *= 10 : g >= E5 ? f *= 5 : g >= E2 && (f *= 2), b < a ? -f : f;
}function ticks(a = 0, b = 1, c = 7) {
  var d = Math.ceil,
      e = Math.floor;let f,
      g,
      h,
      j = -1,
      k = [];if (b = +b, a = +a, c = +c, a === b && 0 < c) return [a];if (f = b < a, f && (g = a, a = b, b = g), h = tickIncrement(a, b, c), 0 === h || !isFinite(h)) return [];if (0 < h) for (a = d(a / h), b = e(b / h), g = d(b - a + 1); ++j < g;) k[j] = (a + j) * h;else for (a = e(a * h), b = d(b * h), g = d(a - b + 1); ++j < g;) k[j] = (a - j) / h;return f && k.reverse(), k;
}exports.default = ticks;
exports.tickIncrement = tickIncrement;
exports.tickStep = tickStep;
},{}],164:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _continuous = require('./continuous');

var _continuous2 = _interopRequireDefault(_continuous);

var _ticks = require('../utils/array/ticks');

var _ticks2 = _interopRequireDefault(_ticks);

var _number = require('../utils/interpolators/number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScaleLinear extends _continuous2.default {
  constructor() {
    super(_continuous.deInterpolateLinear, _number2.default);
  }ticks(a = 7) {
    const b = this.getDomain();return (0, _ticks2.default)(b[0], b[b.length - 1], a);
  }nice(a = 7) {
    var b = Math.ceil,
        c = Math.floor;let d,
        e = this.getDomain(),
        f = 0,
        g = e.length - 1,
        h = e[f],
        i = e[g];return i < h && (d = h, h = i, i = d, d = f, f = g, g = d), d = (0, _ticks.tickIncrement)(h, i, a), 0 < d ? (h = c(h / d) * d, i = b(i / d) * d, d = (0, _ticks.tickIncrement)(h, i, a)) : 0 > d && (h = b(h * d) / d, i = c(i * d) / d, d = (0, _ticks.tickIncrement)(h, i, a)), 0 < d ? (e[f] = c(h / d) * d, e[g] = b(i / d) * d, this.setDomain(e)) : 0 > d && (e[f] = b(h * d) / d, e[g] = c(i * d) / d, this.setDomain(e)), this;
  }copy() {
    return (0, _continuous.copyScale)(this, new ScaleLinear());
  }
}exports.default = ScaleLinear;
},{"./continuous":197,"../utils/array/ticks":198,"../utils/interpolators/number":159}],163:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range = require('./utils/array/range');

var _range2 = _interopRequireDefault(_range);

var _lib = require('../lib/lib');

var _continuous = require('./scales/continuous');

var _number = require('./utils/interpolators/number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let errorMapping = (0, _continuous.bimap)([2, 100], [80, 20], _continuous.deInterpolateLinear, _number2.default),
    getErrorValue = a => 100 <= a ? .2 : 1 >= a ? 0 : errorMapping(a) / 100,
    niceInterval = function (a) {
  if (1 >= a) return 1;let b = [],
      c = Math.ceil(a);return b[2] = c % 2, b[5] = c % 5, b[10] = c % 10, (0, _lib.safeMin)(b) + c;
},
    noLimitChange = function (a, b, c, d, e, f) {
  var g = Math.abs;let h,
      i,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v = a,
      w = Math.ceil(c * (1 - d)),
      x = Math.floor(c * (1 + d)),
      y = [],
      z = a => {
    let b,
        c,
        d,
        e = [10, 5, 2, 1],
        f = e.length;for (b = 0; b < f; ++b) if (c = a % e[b], 0 == c % 1) {
      d = !0;break;
    }return d;
  },
      A = -1,
      B = c => z(h = (b - a) / (c + 1)) ? c : _lib.UNDEF;for (; (!s || !t) && (++A, u = c + A, u >= x && (t = !0), m = B(u), !m) && (u = c - A, u <= w && (s = !0), m = B(u), !m););for (0 > a && 0 < b && e && (l = !0), i = 0; i < m; i++) l && 0 > v && 0 < v + h && (y.push(0), n = !0), v += h, y.push(v);return m === _lib.UNDEF && e && (y = f.ticks(c), p = y.length, 1 < p ? (h = g(y[0] - y[1]), o = .2 * h, q = y[0], r = y[p - 1], g(a - q) <= o && 0 !== q && y.shift(), g(b - r) <= o && 0 !== r && y.pop(), (0 === q || 0 === r) && (n = !0)) : 0 === y[0] && (n = !0)), l && !n && -1 === y.indexOf(0) && (0 > a && 0 < y[0] ? y = [0].concat(y) : 0 < b && 0 > y[y.length - 1] ? y.push(0) : y = [0], n = !0), { output: y, interval: h, isZeroTickForced: n };
},
    domainUpdater = function (a, b, c, d) {
  var e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A = Math.pow,
      B = Math.LN10,
      C = Math.log,
      D = Math.max,
      E = Math.abs,
      F = Math.floor,
      G = d.isPercent ? 0 : d.axisMinValue,
      H = d.isPercent ? 100 : d.axisMaxValue,
      I = !!d.adjustDiv,
      J = d.numDivLines,
      K = !!d.setAdaptiveMin,
      L = d.axisRange,
      M = 5.960464477539063e-8,
      N = !0,
      O = .2,
      P = !0,
      Q = d.xAxisLabelMode,
      R = d.dependentInfo;e = d.majorTMNumber === _lib.UNDEF ? J : D(0, J - 2), R && R.count && !R.limit && R.numDivLines !== _lib.UNDEF && (e = J = R.numDivLines, I = !1), f = e + 1, a === _lib.UNDEF && b === _lib.UNDEF && (a = 0, b = 1, N = !1), b === a && 0 === b && (b = 1, N = !1), ('categories' === Q || 'mixed' === Q) && (N = !1), N ? (h = F(C(E(b)) / B), g = F(C(E(a)) / B), i = D(g, h), j = A(10, i), 2 > E(b) / j && 2 > E(a) / j && (i--, j = A(10, i)), p = F(C(b - a) / B), q = A(10, p), 0 < b - a && 10 <= j / q && (j = q, i = p), l = (F(b / j) + 1) * j, 0 > a ? m = -1 * ((F(E(a / j)) + 1) * j) : K ? (m = F(E(a / j) - 1) * j, m = 0 > m ? 0 : m) : m = 0, !K && 0 >= b && (l = 0), n = !!(H || 0 === H), o = !!(G || 0 === G), !d.freezeLimit && (!1 === n || !0 === n && +H < b && b - +H > M ? (b = l, n = !1) : b = +H, !1 === o || !0 === o && +G > a && +G - a > M ? (a = m, o = !1) : a = +G)) : (n = !!(H || 0 === H), o = !!(G || 0 === G), !0 === n && +H >= b ? b = +H : n = !1, !0 === o && +G <= a ? a = +G : o = !1), u = [a, b], c.setDomain(u), I && !d.freezeLimit ? n || o ? (O = getErrorValue(e), x = noLimitChange(a, b, e, O, d.forceZeroTick, c), r = x.output, y = r.length, z = x.isZeroTickForced, E((e - y + (z ? 1 : 0)) / e) > O ? k = (b - a) / f : (k = 0 === y || 1 === y && z ? b - a : x.interval, d.isZeroTickForced = z, d.ticks = [a].concat(r, b), P = !1)) : (d.ticks = e ? c.nice(f).ticks(f) : c.getDomain(), k = E(d.ticks[1] - d.ticks[0]), P = !1) : n || o || d.freezeLimit ? k = (b - a) / f : ([s, t] = c.nice(f).getDomain(), j = (t - s) / f, k = niceInterval(j), t = s + k * f, (t - b) / b > O || (s - a) / a > O ? (c.setDomain([a, b]), k = (b - a) / f) : (a = s, b = t, c.setDomain([a, b]))), P && (0 > a && 0 < b && d.forceZeroTick ? (v = (0, _range2.default)(a, 0, k), w = v[v.length - 1] + k, 0 === w ? w += k : d.isZeroTickForced = !0, d.ticks = v.concat(0, (0, _range2.default)(w, b, k), b)) : d.ticks = (0, _range2.default)(a, b, k).concat(b)), [a, b] = c.getDomain(), d._allTicks = d.ticks.slice(), L.tickInterval = k, L.min = a, L.max = b;
};exports.default = domainUpdater;
},{"./utils/array/range":165,"../lib/lib":23,"./scales/continuous":197,"./utils/interpolators/number":159}],131:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartesianLabelManager = require('./cartesian-label-manager');

var _cartesianLabelManager2 = _interopRequireDefault(_cartesianLabelManager);

var _lib = require('../lib/lib.js');

var _range = require('./utils/array/range');

var _range2 = _interopRequireDefault(_range);

var _linear = require('./scales/linear');

var _linear2 = _interopRequireDefault(_linear);

var _commonApi = require('./common-api');

var _domainUpdater = require('./domain-updater');

var _domainUpdater2 = _interopRequireDefault(_domainUpdater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF;class NumericAxis extends _cartesianLabelManager2.default {
  constructor() {
    super(), this.config.scale = new _linear2.default();
  }getName() {
    return 'numeric';
  }generateTicks() {
    var a = Math.abs;let b,
        c,
        d,
        e = this.getScale(),
        f = this.config,
        g = f.numDivLines + 1,
        [h, i] = e.getDomain(),
        j = f.axisRange,
        { min: k, max: l } = j,
        m = f.dataLimit;return h === k && i === l ? ((0, _domainUpdater2.default)(m.min, m.max, e, f), f.ticks) : (b = e.ticks(g), c = a(b[1] - b[0]), h === k && -1 === b.indexOf(k) && b.unshift(k), i === l && -1 === b.indexOf(l) && b.push(l), (d = a(k % c)) && (k -= d), (d = a(l % c)) && (l -= d), f._allTicks = (0, _range2.default)(k, l, c).concat(l), j.tickInterval = c, b);
  }setTickValues(a) {
    this.config.userTicks = a || [], this.config.tickValues = { tickValue: [] };
  }_parseTickValues(a) {
    var b,
        c,
        d,
        e,
        f = this,
        g = f.getFromEnv('chart'),
        h = f.config,
        i = a && a.length,
        j = 0;for (h.tickValues = {}, b = h.tickValues.tickValue = [], d = 0; d < i; d += 1) if (c = (0, _lib.extend2)({}, a[d]), e = +c.x, !c.vline) {
      if ((0, _commonApi.extractStyleInfo)(c, g), e || 0 === e) c.x = e, h.irregularCatAxis = !0;else continue;b.push(c), b[j].label = (0, _lib.parseUnsafeString)(b[j].label), j += 1;
    }h.oriCatLen = j;
  }calculateTicksOnLabelMode() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h = this,
        k = h.config,
        l = k.xAxisLabelMode,
        m = Object.assign([], k.userTicks),
        n = h.getFromEnv('number-formatter');if ('mixed' === l || 'auto' === l) {
      if (b = [], a = n.xAxis, 'mixed' === l) for (c = 0, e = m.length; c < e; c += 1) b[m[c].x || m[c].y || c] = !0;else m = [];for (g = h.getAxisConfig(), f = k.ticks, d = 0; d < f.length; ++d) c = f[d], b[c] || m.push({ label: _lib.BLANKSTRING + a.call(n, c), x: c, showverticalline: 0 === c ? g.showZeroPlane : 1, isNumeric: !0, linecolor: 0 === c ? g.zeroPlaneColor : g.divLineColor, linealpha: 0 === c ? g.zeroPlaneAlpha : g.divLineAlpha, linethickness: 0 === c ? g.zeroPlaneThickness : g.divLineThickness, linedashed: g.divLineIsDashed, linedashLen: g.divLineDashLen, linedashgap: g.divLineDashGap });
    }h._parseTickValues(m);
  }getInterval() {
    return this.config.axisRange.tickInterval;
  }_setAxisRange(a) {
    var b,
        c,
        d,
        e = a.min,
        f = a.max,
        g = this.config,
        h = g.axisRange,
        i = g.dataLimit,
        j = g.dependentInfo;if (!(e > f)) if ((i.min !== e || i.max !== f) && (c = !0), g.visibleMin !== UNDEF && !g.setPadding && !c) g.setPadding = !1;else {
      if ([e, f] = (0, _lib.extent)([e, f, i.min, i.max]), i.min = e, i.max = f, this.fireEvent('dataLimitSet', Object.assign({}, i)), j) {
        if (j.limit) if (b = j.dataLimit, b) [e, f] = (0, _lib.extent)([e, f, b.min, b.max]), g.isDataLimitSet = !0;else return;if (j.count && j.numDivLines === UNDEF) return;
      }(0, _domainUpdater2.default)(e, f, this.getScale(), g), d = g.isZeroTickForced ? 3 : 2, this.fireEvent('divlinesSet', g.ticks.length - d), g.tickValues && this.calculateTicksOnLabelMode(), this.setVisibleConfig(h.min, h.max);
    }
  }
}NumericAxis.prototype.setDataLimit = _commonApi.setDataLimit;exports.default = NumericAxis;
},{"./cartesian-label-manager":161,"../lib/lib.js":23,"./utils/array/range":165,"./scales/linear":164,"./common-api":162,"./domain-updater":163}],166:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _continuous = require('./continuous');

var _continuous2 = _interopRequireDefault(_continuous);

var _number = require('../utils/interpolators/number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScaleCategory extends _continuous2.default {
  constructor() {
    super(_continuous.deInterpolateLinear, _number2.default);
  }copy() {
    return (0, _continuous.copyScale)(this, new ScaleCategory());
  }
}exports.default = ScaleCategory;
},{"./continuous":197,"../utils/interpolators/number":159}],132:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartesianLabelManager = require('./cartesian-label-manager');

var _cartesianLabelManager2 = _interopRequireDefault(_cartesianLabelManager);

var _range = require('./utils/array/range');

var _range2 = _interopRequireDefault(_range);

var _category = require('./scales/category');

var _category2 = _interopRequireDefault(_category);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _commonApi = require('./common-api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DASH_DEF = 'none',
    TRUE_STRING = 'true',
    ONE_STRING = '1',
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_BOTTOM = _lib.preDefStr.POSITION_BOTTOM,
    POSITION_END = _lib.preDefStr.POSITION_END,
    queryOptions = { wrtVisible: !0 };class CategoryAxis extends _cartesianLabelManager2.default {
  constructor() {
    super(), this.config.scale = new _category2.default();
  }getName() {
    return 'category';
  }getCategoryFromId(a) {
    var b = this.config,
        c = b.tickValues,
        d = c && c.tickIdMap;return d[a] || {};
  }generateTicks() {
    let a = this.getScale(),
        b = this.config,
        c = a.getDomain(),
        d = b.categoryNumDivLines + 1,
        e = (c[1] - c[0]) / d,
        f = b.axisRange,
        { min: g, max: h } = f,
        i = (h - g) / d;return b._allTicks = (0, _range2.default)(g, h, i).concat(h), f.tickInterval = i, (0, _range2.default)(c[0], c[1], e).concat(c[1]);
  }_parseCategoryVline() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H = this,
        I = H.config,
        J = I.axisRange,
        K = J.min,
        L = J.max,
        M = H.getFromEnv('chart'),
        N = M.config,
        O = N.style || {},
        P = I.isVertical,
        Q = { fontFamily: N.style.inCanfontFamily, fontSize: N.style.inCanfontSize, color: N.style.inCancolor, lineHeight: N.style.inCanLineHeight };for (b = I.tickValues.vline, c = b.length, C = 1 !== H.getZoom(), D = H.getVisibleConfig(), f = 0; f < c; f++) (d = b[f], e = (0, _lib.parseUnsafeString)(d.label), g = !!(0, _lib.pluckNumber)(d.showlabelborder, I.showVLineLabelBorder, 1), a = !!(0, _lib.pluckNumber)(d.showlabelbackground, 1), h = (0, _lib.pluck)(d.labelhalign, P ? POSITION_START : POSITION_MIDDLE), 'center' === h ? h = POSITION_MIDDLE : 'left' === h ? h = POSITION_START : 'right' === h && (h = POSITION_END), j = (0, _lib.pluck)(d.labelvalign, P ? POSITION_MIDDLE : POSITION_BOTTOM).toLowerCase(), j === POSITION_MIDDLE ? j = POSITION_MIDDLE : j === POSITION_TOP ? j = POSITION_BOTTOM : j === POSITION_BOTTOM && (j = POSITION_TOP), k = (0, _lib.pluckNumber)(d.labelposition, 0), l = (0, _lib.pluckNumber)(d.lineposition, .5), m = (0, _lib.pluckNumber)(d.showvlines, I.showVLines, 1), n = (0, _lib.pluckNumber)(d.alpha, I.vLineAlpha, 80), o = (0, _lib.pluck)(d.color, I.vLineColor).replace(/^#?/, '#'), p = a ? (0, _lib.pluck)(d.labelbgcolor, I.vLineLabelBgColor, '333333').replace(/^#?/, '#') : _lib.BLANKSTRING, y = (0, _lib.pluck)(d.labelcolor, I.vLineLabelColor, d.color, O.inCancolor, I.vLineColor).replace(/^#?/, '#'), q = (0, _lib.pluckNumber)(d.thickness, I.vLineThickness, 1), A = 2, r = !!+(0, _lib.pluck)(d.dashed, 0), s = (0, _lib.pluckNumber)(d.dashlen, 5), u = (0, _lib.pluckNumber)(d.dashgap, 2), t = Q.fontSize, t = parseInt(t.replace(/px/i, ''), 10), z = (0, _lib.pluckNumber)(d.rotatelabel, I.rotateVLineLabels) ? 270 : 0, l = 0 > l || 1 < l ? .5 : l, k = 0 > k || 1 < k ? 0 : k, o = (0, _libGraphics.convertColor)(o, m ? n : '0'), G = d.animate && !P ? d.startIndex + 1 : d.startIndex, B = H._getVlinePos(G, l) - (d.animate ? d.leftShift : 0), !(C && (B < D.minValue || B > D.maxValue))) && (B < K || B > L || (v = { opacity: 1, stroke: o, "stroke-width": q, "stroke-dasharray": r ? (0, _lib.getDashStyle)(s, u) : DASH_DEF }, x = { opacity: 1, text: e, "text-anchor": h, "vertical-align": j, "text-bound": [] }, w = { fontSize: Q.fontSize, fontFamily: Q.fontFamily, lineHeight: Q.lineHeight }, F = (0, _lib.pluckNumber)(d.showontop, I.showVLinesOnTop, 0), E = { from: B, layer: F ? 3 : 2, attr: v, type: 'line', startIndex: d.startIndex, linePosition: l }, e && (x['text-bound'] = [p, m && g ? o : _lib.BLANKSTRING, m && g ? 1 : 0, A, _lib.UNDEF, m && g ? 'solid' : _lib.BLANKSTRING], x.fill = m ? y : o, E.text = { label: e, attr: x, layer: 4, labelRotation: z, labelPosition: k, css: w }), H.setReferenceInfo(E), H.config.parsedVlineInfo.push(E)));
  }_parseReferenceVisuals() {
    super._parseReferenceVisuals(), this.config.drawPlotlines && this._parseCategoryVline();
  }categoryInsert(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        j = this,
        k = j.config,
        l = k.axisRange.min,
        m = b.length,
        n = k.endPad || 0;for (d = k.tickValues.tickValue, f = k.tickValues.tickIdMap, e = k.tickValues.vline, g = 0; g < m; g += 1) h = (0, _lib.extend2)({}, b[g]), h.vline === TRUE_STRING || !0 === h.vline || 1 === h.vline || h.vline === ONE_STRING ? (h.startIndex = a - 2, e.push(h)) : (h.id && (f[h.id] = { tickObj: h, i: a }), d.splice(a, 0, h), a += 1);c && j._setAxisRange({ min: l, max: +(0, _lib.toPrecision)(d.length - 1 + n, 10) });
  }categoryDelete(a, b, c) {
    var d,
        e,
        f,
        g,
        h = this,
        j = h.config,
        k = j.axisRange,
        l = k.min;for (d = j.tickValues.vline, e = 0, f = d.length; e < f; e++) d[e].animate = !0, d[e].leftShift = b;g = j.tickValues.tickValue, g.splice(a, b), h._shiftVline(a, b, 'left'), c && h._setAxisRange({ min: l, max: k.max - b });
  }_shiftVline(a, b, c) {
    var d,
        e,
        f = this,
        g = f.config,
        h = g.tickValues.vline,
        j = g.tickValues.tickValue.length,
        k = h.length;for (d = 0; d < k; d += 1) e = h[d], e.startIndex >= a && ('right' === c ? e.startIndex += b : e.startIndex -= b, (0 > e.startIndex || e.startIndex >= j) && (h.splice(d, 1), k -= 1, d -= 1));
  }categoryTranslate(a) {
    var b,
        c = this,
        d = c.config,
        e = c.getPixel(1, queryOptions) - c.getPixel(0, queryOptions);a = (a || 0) * e, d.isReverse && (a = -a), b = ['T', a, ',', '0'].join(''), c.realTimeTranslatableGroups = [{ group: d.axisContainer, translationStr: b }, { group: d.axisTrendLabelContainer, translationStr: b }];
  }updateTicksValues(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        j,
        k = this,
        l = k.config,
        m = l.parsedVlineInfo;if (c = l.tickValues.tickValue, c[a]) for (j in b) b.hasOwnProperty(j) && ('x' === j && (d = !0), c[a][j] = b[j]);if (d) for (f = 0, g = m.length; f < g; ++f) if (e = m[f], h = e.startIndex, h === a) e.from = k._getVlinePos(h, e.linePosition);else if (h + 1 === a) {
      e.from = k._getVlinePos(h, e.linePosition);break;
    }
  }_getVlinePos(a, b) {
    let c,
        d,
        e,
        f = this.getTickValues(),
        g = this.config,
        { min: h, max: i } = this.getLimit(),
        j = f[a],
        k = f[a + 1];return j ? !k && (c = f[0] && f[0].x ? i : g.oriCatLen - 1, e = !0) : (c = f[0] && f[0].x ? h : -1, e = !0), e ? d = b : (c = (0, _lib.pluckNumber)(j.x, j.y, a), d = (c - (0, _lib.pluckNumber)(k.x, k.y, a + 1)) * b), c + Math.abs(d);
  }getInterval() {
    if (this) return 1;
  }_setAxisRange(a) {
    var b,
        c,
        d = a.min,
        e = a.max,
        f = this.config,
        g = f.axisRange,
        h = f.periodLength,
        i = f.dataLimit,
        j = i.max,
        k = i.min;d > e || ((j !== e || k !== d) && (b = !0), f.visibleMin === _lib.UNDEF || f.setPadding || b ? (i.max = e, i.min = d, h && (f.categoryNumDivLines = (e - d) / h - 1), c = (e - d) / (f.categoryNumDivLines + 1), this.getScale().setDomain([d, e]), f.ticks = (0, _range2.default)(d, e, c).concat(e), f._allTicks = f.ticks.slice(), g.min = d, g.max = e, g.tickInterval = c, this.setVisibleConfig(g.min, g.max)) : f.setPadding = !1);
  }
}CategoryAxis.prototype.setTickValues = _commonApi.setTickValues;exports.default = CategoryAxis;
},{"./cartesian-label-manager":161,"./utils/array/range":165,"./scales/category":166,"../lib/lib":23,"../lib/lib-graphics":24,"./common-api":162}],110:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b,
      c,
      d = a.getChildren('canvas')[0],
      f = d.getChildren('axisRefVisualCartesian')[0],
      e = { zoomable: !0, pannable: !0 },
      g = a._feedAxesRawData(),
      h = a => {
    let b = a.sender;f.addexplicitDrawItems(b.getId(), b), f.asyncDraw();
  };(0, _lib.componentFactory)(a, _numeric2.default, 'yAxis', 1, g.yAxisConf), (0, _lib.componentFactory)(a, _category2.default, 'xAxis', 1, g.xAxisConf), b = a.getChildren('yAxis')[0], c = a.getChildren('xAxis')[0], b.setLinkedItem('canvas', d), c.setLinkedItem('canvas', d), f.setLinkedItem(b.getId(), b), f.setLinkedItem(c.getId(), c), f.addExtEventListener('visiblerangeset', h, c), f.addExtEventListener('visiblerangeset', h, b), d.attachAxis(c, !1, a.zoomX ? e : {}), d.attachAxis(b, !0, a.zoomY ? e : {}), a._setCategories();
};

var _lib = require('../lib/lib');

var _numeric = require('../axis/numeric');

var _numeric2 = _interopRequireDefault(_numeric);

var _category = require('../axis/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../lib/lib":23,"../axis/numeric":131,"../axis/category":132}],157:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartesianAxisAnimation = require("./cartesian-axis-animation");

exports.default = { "initial.axisRefVisuals.axisRefVisualsCartesian": _cartesianAxisAnimation.axisAnimationAxis, "update.axisRefVisuals.axisRefVisualsCartesian": _cartesianAxisAnimation.axisAnimationFinal };
},{"./cartesian-axis-animation":195}],130:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _number = require('../axis/utils/interpolators/number');

var _number2 = _interopRequireDefault(_number);

var _diff = require('../axis/utils/array/diff');

var _diff2 = _interopRequireDefault(_diff);

var _cartesian = require('../axis/cartesian');

var _cartesianAxisRefAnimation = require('../animation-rules/cartesian-axis-ref-animation');

var _cartesianAxisRefAnimation2 = _interopRequireDefault(_cartesianAxisRefAnimation);

var _dependencyManager = require('../dependency-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isValid = a => 'undefined' === !typeof a || null !== a;let UNDEF;(0, _dependencyManager.addDep)({ name: 'cartesianAxisRefAnimation', type: 'animationRule', extension: _cartesianAxisRefAnimation2.default });class AxisRefVisual extends _componentInterface2.default {
  constructor() {
    super(), this.config.map = {}, this.config.explicitDrawItems = {};
  }getType() {
    return 'axisRefVisuals';
  }getName() {
    return 'axisRefVisualsCartesian';
  }draw() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h = this.getDrawingInfo(),
        j = this.getexplicitDrawItems(),
        k = this.config,
        l = k.map,
        m = {},
        n = this.getLinkedParent(),
        o = n.getAxes(),
        p = [],
        q = n.getChildContainer('axisReferenceVisualsFloor'),
        r = n.getChildContainer('axisReferenceVisualsBottom'),
        s = n.getChildContainer('axisReferenceVisualsMiddle'),
        t = n.getChildContainer('axisReferenceVisualsTop'),
        u = n.getChildContainer('axisReferenceVisualsCeil');for (n.config.trendlines = [], n.config.vtrendlines = [], b = 0; b < o.length; ++b) p.push(o[b].axis.getId());for (d in k.containers = [q, r, s, t, u], h) if (h.hasOwnProperty(d) && (e = this.getLinkedItem(d), 0 <= p.indexOf(e.getId()))) for (f = m[d], f || (f = m[d] = []), a = h[d], b = 0; b < a.length; ++b) g = a[b], c = g.type, 'band' === c ? f.push.apply(f, this.createBand(g, e)) : 'line' === c && f.push.apply(f, this.createLine(g, e));if (k.isSmartDrawing) for (d in l) l.hasOwnProperty(d) && !j[d] && this.getLinkedItem(d) && (m[d] = l[d]);this.resetexplicitDrawItems(), this.removeExtraElements(m);
  }getDrawingInfo() {
    let a,
        b,
        c = {},
        d = this.getexplicitDrawItems(),
        e = this.isCanvasChnaged(),
        f = this.config.isSmartDrawing = Object.keys(d).length && !e,
        g = f ? d : this.getLinkedItem();for (a in g) g.hasOwnProperty(a) && (b = g[a], c[a] = b.getReferenceInfo());return c;
  }createLine(a, b) {
    let c,
        d = this.config.containers,
        e = d[a.layer],
        f = b.config,
        g = this.getFromEnv('paper'),
        h = this.getFromEnv('chart').getName(),
        i = this.getLinkedParent(),
        j = this.getFromEnv('animationManager'),
        k = this.getFromEnv('toolTipController'),
        l = i.config,
        m = l.trendlines,
        n = f.isVertical,
        o = l.canvasLeft,
        p = l.canvasTop,
        q = p + l.canvasHeight,
        r = o + l.canvasWidth,
        s = (0, _number2.default)(o, r),
        t = (0, _number2.default)(p, q),
        u = b.getScale(),
        v = u.getRangeValue(a.from),
        w = a.to !== UNDEF && u.getRangeValue(a.to) || v,
        x = n ? ['M', o, v, 'L', r, w] : ['M', v, q, 'L', w, p],
        y = a.attr,
        z = a.text,
        A = z && z.attr,
        B = z && z.labelPosition || 0,
        C = b.getId(),
        D = a.id || a.from,
        E = C + '_' + D,
        F = C + '_' + D + z,
        G = this.getGraphicalElement(E),
        H = this.getGraphicalElement(F),
        I = a.handlers,
        J = { start: a.from, end: a.to };for (c in y.path = (0, _cartesian.getCrispPath)(x, isValid(y['stroke-width']) ? y['stroke-width'] : 1).path.toString(), /trend/.test(a.id) && m.push({ x1: x[1], y1: x[2], x2: x[4], y2: x[5], tooltext: a.toolText, tolerance: 5 > y['stroke-width'] ? 2.5 : y['stroke-width'] / 2 }), y['stroke-linecap'] = 'butt', G = this.addGraphicalElement(E, j.setAnimation({ container: e, el: G || 'path', attr: y, component: this, axis: b, data: { value: J, path: x }, label: 'path' })), G.data('data', J), z && (n ? (A.x = s(B), A.y = v) : (A.x = v, A.y = t(B)), A.text = z.label, A.transform = g.getSuggestiveRotation(z.labelRotation, A.x, A.y), H = this.addGraphicalElement(F, j.setAnimation({ container: d[z.layer], el: H || 'text', attr: A, component: this, axis: b, data: { value: a.from }, label: 'text', css: z.css })), H.data('data', a.from)), /zoomscatter/i.test(h) || (a.toolText ? k.enableToolTip(G, a.toolText) : k.disableToolTip(G)), I) I.hasOwnProperty(c) && (G.on(c, I[c].bind(b)), H.on(c, I[c].bind(b)));return z ? [E, F] : [E];
  }createBand(a, b) {
    var c = Math.min;let d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this.config.containers[a.layer],
        l = b.config,
        m = this.getFromEnv('animationManager'),
        n = this.getFromEnv('toolTipController'),
        o = this.getLinkedParent(),
        p = this.getFromEnv('chart').getName(),
        q = o.config,
        r = l.isVertical,
        s = q.canvasLeft,
        t = q.canvasTop,
        u = t + q.canvasHeight,
        v = s + q.canvasWidth,
        w = b.getScale(),
        x = a.from,
        y = a.to === UNDEF ? x : a.to,
        z = b.getId(),
        A = a.attr,
        B = a.handlers;for (i in d = 'canvasStart' === x ? r ? t : s : w.getRangeValue(x), e = 'canvasEnd' === y ? r ? u : v : w.getRangeValue(y), j = Math.abs(d - e), r ? (A.x = s, A.y = c(d, e), A.width = v - s, A.height = j) : (A.x = c(d, e), A.y = t, A.width = j, A.height = u - t), f = a.id || A.x + '_' + A.y, g = z + '_' + f, h = this.getGraphicalElement(g), /trend/.test(a.id) && o.config.vtrendlines.push({ x1: A.x, y1: A.y, x2: A.x + A.width, y2: A.y + A.height, tooltext: a.toolText, tolerance: 5 > A['stroke-width'] ? 2.5 : A['stroke-width'] / 2, isTrendZone: 1 }), h = this.addGraphicalElement(g, m.setAnimation({ container: k, el: h || 'rect', attr: A, component: this, label: 'rect' })), /zoomscatter/i.test(p) || (a.toolText ? n.enableToolTip(h, a.toolText) : n.disableToolTip(h)), B) B.hasOwnProperty(i) && h.on(i, B[i].bind(b));return [g];
  }removeExtraElements(a) {
    let b,
        c,
        d,
        e,
        f,
        g,
        h = this.config.map;for (b in h) if (!a[b]) for (c = h[b], e = c.length, d = 0; d < e; ++d) f = this.getGraphicalElement(c[d]), f && this.removeGraphicalElement(f);else for (g = (0, _diff2.default)(h[b], a[b]), e = g.length, d = 0; d < e; ++d) f = this.getGraphicalElement(g[d]), f && this.removeGraphicalElement(f);this.config.map = a;
  }setLinkedItem(a, b) {
    super.setLinkedItem(a, b);let c = this;'axis' === b.getType() && c.addExtEventListener('beforeremove', a => {
      c.removeLinkedItem(a.sender.getId()), c.asyncDraw();
    }, b);
  }addexplicitDrawItems(a, b) {
    this.config.explicitDrawItems[a] = b;
  }getexplicitDrawItems() {
    return this.config.explicitDrawItems;
  }resetexplicitDrawItems() {
    this.config.explicitDrawItems = {};
  }isCanvasChnaged() {
    let a,
        b = this.getLinkedParent().getEffectiveDimensions(),
        c = this.config;return a = JSON.stringify(b) !== JSON.stringify(c.canvasDim), c.canvasDim = b, a;
  }
}exports.default = AxisRefVisual;
},{"../../core/component-interface":65,"../axis/utils/interpolators/number":159,"../axis/utils/array/diff":160,"../axis/cartesian":158,"../animation-rules/cartesian-axis-ref-animation":157,"../dependency-manager":20}],111:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b,
      c = a._parseCanvasCosmetics && a._parseCanvasCosmetics();if ((0, _lib.componentFactory)(a, _canvas2.default, 'canvas', a.config.showVolumeChart ? 2 : 1), b = a.getChildren('canvas'), b) for (let a = 0, d = b.length; a < d; a++) b[a].configure(c), (0, _lib.componentFactory)(b[a], _axisRefComponent2.default, 'axisRefVisualCartesian');
};

var _canvas = require('../canvases/canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _axisRefComponent = require('../axis-ref-visuals/axis-ref-component');

var _axisRefComponent2 = _interopRequireDefault(_axisRefComponent);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../canvases/canvas":129,"../axis-ref-visuals/axis-ref-component":130,"../lib/lib":23}],128:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNDEF,
    setterGetter = function (a, b) {
  return a = 'comp_' + a, b && (this.config[a] = b), (b || !this.config[a]) && this || this.config[a];
},
    _getTranslationString = function (a, b) {
  return ['T', a, ',', b].join('');
},
    _getTranslation = function (a) {
  return -a.getTranslation();
},
    calculateTranslation = function (a) {
  return _getTranslationString(_getTranslation(a.h), _getTranslation(a.v));
},
    getHVOb = function (a, b) {
  return { h: a, v: b };
},
    groupsArr = ['columnShadowVcanvasGroup', 'columnVcanvasGroup', 'areaShadowVcanvasGroup', 'areaVcanvasGroup', 'lineShadowVcanvasGroup', 'lineVcanvasGroup', 'defaultShadowVcanvasGroup', 'defaultVcanvasGroup', 'sumLabelsLayer', 'vcanvasLabelGroup'],
    createGroup = function (a, b, c) {
  var d = c.getFromEnv('animationManager');return d.setAnimation({ el: 'group', attr: { name: a }, container: b, state: 'appearing', component: c, label: 'group' });
},
    limitToBeUpdated = a => !/category/i.test(a.getName());const VISIBLE = 'visible',
      REMOVED = 'removed',
      DATASET = 'dataset';class VirtualCanvas extends _componentInterface2.default {
  getName() {
    return 'virtualCanvas';
  }getType() {
    return 'canvas';
  }xAxis(a) {
    var b = setterGetter.call(this, 'xAxis', a);return a && this.listenToAxis(a), a && this.addToEnv('xAxis', a), b;
  }yAxis(a) {
    var b = setterGetter.call(this, 'yAxis', a);return a && this.listenToAxis(a), a && this.addToEnv('yAxis', a), b;
  }paper(a) {
    return setterGetter.call(this, 'paper', a);
  }canvas(a) {
    return setterGetter.call(this, 'canvas', a);
  }configure(a = {}) {
    let b = this,
        c = b.getFromEnv('chartConfig'),
        d = b.config;Object.assign(d, a), d.transposeAxis = c.transposeAxis, this._mapChildren(a => {
      a.getState(REMOVED) || a.getType() === DATASET || a.configure && a.configure();
    });
  }getHorizontalVerticalAxes() {
    var a = this,
        b = a.xAxis(),
        c = a.yAxis();return c.config.isVertical ? getHVOb(b, c) : getHVOb(c, b);
  }preDraw() {
    this._mapChildren(a => {
      a.getState('removed') || 'dataset' === a.getType() || a.setVisibility && a.setVisibility();
    });let a,
        b = this.config.transposeAxis,
        c = this.getFromEnv('chart'),
        { left: d, right: e, top: f, bottom: g } = this.getAxisValuePadding();a = this.getDataLimits(!b), a.min !== 1 / 0 || a.max !== -Infinity ? (this._setYAxisLimits(a.min, a.max), c._storeIntialLimit && c._storeIntialLimit(a.min, a.max)) : (this._setYAxisLimits(UNDEF, UNDEF), c._storeIntialLimit && c._storeIntialLimit(UNDEF, UNDEF)), this._setXAxisLimits(a.xMin, a.xMax), this._setAxisValuePadding(d, e, f, g);
  }childChanged(a = {}) {
    let b,
        c = this,
        d = c.config,
        e = d.transposeAxis;!1 !== a.dataLimitChanged && (b = c.getDataLimits(!e), e && (b.min !== d.range.min || b.max !== d.range.max) && (d.range.min = b.min, d.range.max = b.max, this.getFromEnv('yAxis').resetStoredLimits(), b.min !== 1 / 0 || b.max !== -Infinity ? c._setYAxisLimits(b.min, b.max) : c._setYAxisLimits(UNDEF, UNDEF)), (b.xMin !== d.range.xMin || b.xMax !== d.range.xMax) && (d.range.xMin = b.xMin, d.range.xMax = b.xMax, this.getFromEnv('xAxis').resetStoredLimits(), c._setXAxisLimits(b.xMin, b.xMax))), c.asyncDraw();
  }_setAxisValuePadding(a, b, c, d) {
    this.getFromEnv('xAxis').setAxisPadding(a, b), c && d && this.getFromEnv('yAxis').setAxisPadding(a, b);
  }getAxisValuePadding() {
    var a = Math.max;let b = {},
        c = -Infinity,
        d = -Infinity,
        e = -Infinity,
        f = -Infinity;return this._mapChildren(g => {
      g.getState(REMOVED) || (b = g.getAxisValuePadding && g.getAxisValuePadding() || {}, c = a(c, b.left || -Infinity), d = a(d, b.right || -Infinity), e = a(e, b.top || -Infinity), f = a(f, b.bottom || -Infinity));
    }), c === -Infinity && (c = 0), d === -Infinity && (d = 0), e === -Infinity && (e = 0), f === -Infinity && (f = 0), this.config.padding || (this.config.padding = {}, this.config.padding.left = c, this.config.padding.right = d, this.config.padding.top = e, this.config.padding.bottom = f), { left: c, right: d, top: e, bottom: f };
  }_setYAxisLimits(a, b) {
    var c = this.getFromEnv('yAxis');limitToBeUpdated(c) && c.setDataLimit(b, a);
  }_setXAxisLimits(a, b) {
    let c = this.getFromEnv('xAxis');limitToBeUpdated(c) && (b !== -Infinity || a !== +Infinity ? c.setDataLimit(b, a) : c.setDataLimit(UNDEF, UNDEF));
  }getDataLimits(a) {
    var b,
        c,
        d,
        e = Math.max,
        f = this,
        g = f.getFromEnv('chart'),
        h = -Infinity,
        i = +Infinity,
        j = h,
        k = i,
        l = i,
        m = h,
        n = function (a) {
      var b = Math.min;c = (0, _lib.pluck)(a.xMax, h), d = (0, _lib.pluck)(a.xMin, i), j = e(j, a.max), k = b(k, a.min), m = e(m, c), l = b(l, d);
    };return f._mapChildren(c => {
      c.getDataLimits && !c.getState(REMOVED) && (a || c.getState(VISIBLE)) && (b = c.getDataLimits(a), n(b));
    }), this.config.range || (this.config.range = {}, this.config.range.min = k, this.config.range.max = j, this.config.range.xMin = l, this.config.range.xMax = m), g.config.yMax = j, g.config.yMin = k, { min: k, max: j, xMin: l, xMax: m };
  }listenToAxis(a) {
    var b,
        c = this;b = function () {
      c.getState('drawn') && c.asyncDraw();
    }, this.getState('visiblerangeset' + a.getId()) || (this.setState('visiblerangeset' + a.getId(), !0), c.addExtEventListener('visiblerangeset', b, a));
  }createContainer() {
    var a = this,
        b = a.getLinkedParent();a.getChildContainer('columnShadowVcanvasGroup') || a.addChildContainer('columnShadowVcanvasGroup', createGroup('vcanvas-column-shadow', b.getChildContainer('columnShadowGroup'), a)), a.getChildContainer('columnVcanvasGroup') || a.addChildContainer('columnVcanvasGroup', createGroup('vcanvas-column-plot', b.getChildContainer('columnGroup'), a)), a.getChildContainer('areaShadowVcanvasGroup') || a.addChildContainer('areaShadowVcanvasGroup', createGroup('vcanvas-area-shadow', b.getChildContainer('areaShadowGroup'), a)), a.getChildContainer('areaVcanvasGroup') || a.addChildContainer('areaVcanvasGroup', createGroup('vcanvas-area-plot', b.getChildContainer('areaGroup'), a)), a.getChildContainer('lineShadowVcanvasGroup') || a.addChildContainer('lineShadowVcanvasGroup', createGroup('vcanvas-line-shadow', b.getChildContainer('lineShadowGroup'), a)), a.getChildContainer('lineVcanvasGroup') || a.addChildContainer('lineVcanvasGroup', createGroup('vcanvas-line-plot', b.getChildContainer('lineGroup'), a)), a.getChildContainer('defaultShadowVcanvasGroup') || a.addChildContainer('defaultShadowVcanvasGroup', createGroup('vcanvas-default-shadow', b.getChildContainer('defaultShadowGroup'), a)), a.getChildContainer('defaultVcanvasGroup') || a.addChildContainer('defaultVcanvasGroup', createGroup('vcanvas-default-plot', b.getChildContainer('defaultGroup'), a)), a.getChildContainer('vcanvasLabelGroup') || a.addChildContainer('vcanvasLabelGroup', createGroup('vcanvas-label', b.getChildContainer('datalabelsGroup'), a)), a.getChildContainer('columnTrendGroup') || a.addChildContainer('columnTrendGroup', createGroup('columnTrendGroup', a.getChildContainer('columnVcanvasGroup'), a)), a.getChildContainer('sumLabelsLayer') || a.addChildContainer('sumLabelsLayer', createGroup('vcanvas-sumLabelsLayer', b.getChildContainer('sumLabelsLayer'), a));
  }applyTranslation() {
    var a = this,
        b = a.getHorizontalVerticalAxes(),
        c = calculateTranslation(b),
        d = function (b) {
      b = a.getChildContainer(b), b.attr({ transform: c });
    };a.createContainer(), groupsArr.forEach(function (a) {
      d(a);
    });
  }draw() {
    this.applyTranslation(), this.setState('drawn', !0);
  }getCanvasPadding() {
    var a,
        b,
        c = this,
        d = { paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 };return c._mapChildren(c => {
      if (c.getCanvasPadding && !c.getState(REMOVED)) for (b in a = c.getCanvasPadding() || {}, a) a.hasOwnProperty(b) && (d[b] = Math.max(a[b], d[b]));
    }), d;
  }rtShiftAnim(a, b) {
    var c,
        d = this,
        e = d.getFromEnv('xAxis'),
        f = d.getFromEnv('yAxis'),
        g = e.getPixel(1) - e.getPixel(0),
        h = f.getPixel(1) - f.getPixel(0),
        i = d.getFromEnv('animationManager');a = (a || 0) * g, b = (b || 0) * h, c = _getTranslationString(a, b), groupsArr.forEach(function (a) {
      d.getChildContainer(a).attr({ transform: c }), i.setAnimation({ el: d.getChildContainer(a), attrs: { transform: 'T0,0' } });
    });
  }
}exports.default = VirtualCanvas;
},{"../../core/component-interface":65,"../lib/lib":23}],112:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h,
      m = a.getChildren('canvas'),
      n = m.length,
      o = [],
      p = [];for (e = 0; e < n; e++, o = [], p = []) if (b = m[e], !b.getState('removed')) {
    for (d = b.getFromEnv('xAxis'), g = 0; g < (d && d.length); g++) d[g].getState('removed') || o.push(d[g]);for (d = b.getFromEnv('yAxis'), g = 0; g < (d && d.length); g++) d[g].getState('removed') || p.push(d[g]);for ((0, _lib.componentFactory)(b, _vcanvas2.default, 'vCanvas', o.length * p.length), c = b.getChildren('vCanvas'), (f = 0, g = 0); f < (o && o.length); f++) for (h = 0; h < (p && p.length); h++, g++) c[g].xAxis(o[f]).yAxis(p[h]).canvas(b), c[g].configure(), c[g].addToEnv('vCanvas', c[g]);
  }
};

var _vcanvas = require('../canvases/vcanvas.js');

var _vcanvas2 = _interopRequireDefault(_vcanvas);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../canvases/vcanvas.js":128,"../lib/lib":23}],133:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _domEvent = require('../dom/dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNDEF,
    MOUSEOVER = 'mouseover',
    MOUSEDOWN = 'mousedown',
    TOUCHSTART = 'touchstart',
    MOUSEUP = 'mouseup',
    TOUCHEND = 'touchend',
    MOUSEMOVE = 'mousemove',
    TOUCHMOVE = 'touchmove',
    MOUSEOUT = 'mouseout',
    CLICK = 'click',
    win = window,
    doc = win.document,
    hasTouch = 'ontouchstart' in win;class MouseTracker extends _componentInterface2.default {
  constructor() {
    super(), this.pIndex = 1, this.handler = function (a) {
      return function (b) {
        a.config.lastTouchStartEvent = b.originalEvent, b.originalEvent && a.getFromEnv('chart')._mouseEvtHandler(b, a.config.evtData);
      };
    }(this), this.globalHandler = function (a) {
      return function (b) {
        var c,
            d,
            e = a.getFromEnv('chart');(b.type === TOUCHSTART || b.type === MOUSEDOWN) && (c = e.getChildren('canvas')[0], d = (0, _lib.getMouseCoordinate)(a.getFromEnv('chart-container'), b.originalEvent, e), a.config.lastTouchStartEvent === b.originalEvent || c && c.isWithinCanvas(d.chartX, d.chartY)) || b.originalEvent && e._mouseEvtHandler(b, a.config.evtData);
      };
    }(this), this.eventsList = [MOUSEDOWN, TOUCHSTART, MOUSEUP, TOUCHEND, MOUSEMOVE, TOUCHMOVE, CLICK, MOUSEOVER], this.config = {}, this.config.evtData = {};
  }getMouseEvents(a, b, c) {
    var d = this,
        e = d._lastDatasetIndex,
        f = d._lastPointIndex,
        g = a.type,
        h = { fireOut: !1, events: [] };if (d.hasTouchEvent && (g === MOUSEDOWN || g === MOUSEOUT)) return h;switch (g) {case CLICK:
        d.lastTouchedElement = a.originalEvent.target, h.events.push(CLICK);break;case TOUCHMOVE:case MOUSEMOVE:
        d.lastTouchedElement = UNDEF, e === b && f === c ? (clearTimeout(d.mouseoutTimer), h.events.push(MOUSEMOVE)) : (h.events.push(MOUSEOVER), h.fireOut = !0);break;case TOUCHSTART:
        d.hasTouchEvent = !0;case MOUSEDOWN:
        e !== b || f !== c ? (h.fireOut = !0, h.events.push(MOUSEOVER)) : hasTouch && h.events.push(MOUSEMOVE), h.events.push(MOUSEDOWN);break;case MOUSEOVER:
        e === b && f === c ? clearTimeout(d.mouseoutTimer) : (h.fireOut = !0, h.events.push(MOUSEOVER));break;case TOUCHEND:case MOUSEUP:
        d.hasTouchEvent = !1, h.events.push(MOUSEUP);break;case MOUSEOUT:
        _lib.isIE11 ? d.lastTouchedElement !== a.originalEvent.target && (h.fireOut = !0) : h.fireOut = !0;}return h;
  }addEvents() {
    var a,
        b,
        c,
        d = this,
        e = d.getFromEnv('chart'),
        f = e.getChildren('canvas'),
        g = d.config.evtData,
        h = d.eventsList;for (e.config.enableMouseOutEvent && h.push(MOUSEOUT), d._removeListners(), g.chart = e, g.mouseTracker = d, b = 0; b < f.length; b++) for (c in a = f[b], h) a.addEventListener(h[c], d.handler);hasTouch ? _domEvent2.default.listen(doc, TOUCHSTART, d.globalHandler) : _domEvent2.default.listen(doc, MOUSEDOWN, d.globalHandler);
  }_removeListners() {
    var a,
        b,
        c,
        d = this,
        e = d.getFromEnv('chart'),
        f = e.getChildren('canvas'),
        g = d.eventsList;for (c = 0; c < f.length; c++) for (b in a = f[c], g) a.removeEventListener(g[b], d.handler);hasTouch ? _domEvent2.default.unlisten(doc, TOUCHSTART, d.globalHandler) : _domEvent2.default.unlisten(doc, MOUSEDOWN, d.globalHandler);
  }_dispose() {
    this._removeListners(), super._dispose();
  }
}exports.default = MouseTracker;
},{"../../core/component-interface":65,"../dom/dom-event":76,"../lib/lib":23}],113:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b;a.config.enablemousetracking ? ((0, _lib.componentFactory)(a, _mouseTracker2.default, 'mouseTracker'), b = a.getChildren('mouseTracker')[0], !a.config.mouseTrackerEventAdded && (b.addEvents(), a.config.mouseTrackerEventAdded = !0)) : (b = a.getChildren('mouseTracker') && a.getChildren('mouseTracker')[0], b && b._removeListners(), a.config.mouseTrackerEventAdded = !1);
};

var _mouseTracker = require('./../components/mouse-tracker');

var _mouseTracker2 = _interopRequireDefault(_mouseTracker);

var _lib = require('../lib/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./../components/mouse-tracker":133,"../lib/lib":23}],61:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commonspacemanager = require('./commonspacemanager');

var _commonspacemanager2 = _interopRequireDefault(_commonspacemanager);

var _lib = require('../_internal/lib/lib');

var _cartesianAxis = require('../_internal/factories/cartesian-axis');

var _cartesianAxis2 = _interopRequireDefault(_cartesianAxis);

var _canvasAxisRefCartesian = require('../_internal/factories/canvas-axis-ref-cartesian');

var _canvasAxisRefCartesian2 = _interopRequireDefault(_canvasAxisRefCartesian);

var _vcanvas = require('../_internal/factories/vcanvas');

var _vcanvas2 = _interopRequireDefault(_vcanvas);

var _mouseTracker = require('../_internal/factories/mouse-tracker');

var _mouseTracker2 = _interopRequireDefault(_mouseTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    mathMax = Math.max,
    mathMin = Math.min;class Cartesian extends _commonspacemanager2.default {
  constructor() {
    super(), this.registerFactory('axis', _cartesianAxis2.default, ['canvas']), this.registerFactory('canvas', _canvasAxisRefCartesian2.default), this.registerFactory('vCanvas', _vcanvas2.default, ['axis']), this.registerFactory('mouseTracker', _mouseTracker2.default, ['canvas']);
  }static getName() {
    return 'Cartesian';
  }getName() {
    return 'Cartesian';
  }getType() {
    return 'chartAPI';
  }_allocateXAxisLabelSpace(a) {
    var b,
        c = this,
        d = c.config,
        e = a.getAxisEndLabelDisplaySpace(),
        f = e.left,
        g = e.right,
        h = e.top,
        i = e.bottom,
        j = d.availableWidth,
        k = d.availableHeight,
        l = d.canvasLeft,
        m = d.canvasRight,
        n = d.canvasTop,
        o = d.canvasBottom,
        p = d.width,
        q = d.height,
        r = function (a, b) {
      return a < b && 0 < b ? b - a : 0;
    };h + i > k && (b = h + i, h = k * h / b, i = k * i / b), f + g > j && (b = f + g, f = j * f / b, g = j * g / b), f = r(l, f), g = r(p - m, g), h = r(n, h), i = r(q - o, i), c._allocateSpace({ left: f, right: g, top: h, bottom: i });
  }_setCategories() {
    var a = this,
        b = a.getFromEnv('dataSource'),
        c = a.getChildren('xAxis'),
        d = b.categories && b.categories.length && b.categories[0].category;c && c[0].setTickValues(d);
  }_feedAxesRawData() {
    var a,
        b,
        c = this,
        d = c.config,
        e = c.getFromEnv('dataSource');return a = c.getSpecificxAxisConf(), b = c.getSpecificyAxisConf(), a.vtrendlines = (0, _lib.extend2)([], e.vtrendlines), b.trendlines = (0, _lib.extend2)([], e.trendlines), d.isstacked && (b.isPercent = (0, _lib.pluckNumber)(d.stack100percent, 0)), { yAxisConf: [b], xAxisConf: [a] };
  }getSpecificxAxisConf() {
    var a = this,
        b = a.getFromEnv('chart-attrib'),
        c = a.config,
        d = a.config.is3D,
        e = a.getBasexAxisConf();return e.isReverse = c.reverseXAxis, e.axisLineColor = (0, _lib.pluck)(b.xaxislinecolor, b.axislinecolor, '#000000'), e.showAlternateGridColor = (0, _lib.pluckNumber)(b.showalternatevgridcolor, 0), e.numDivLines = (0, _lib.pluckNumber)(b.numvdivlines, c.numVDivLines), e.axisName = b.xaxisname, e.setAdaptiveMin = (0, _lib.pluckNumber)(b.setadaptivexmin, c.setadaptivexmin, c.setadaptivexmin), e.showLimits = (0, _lib.pluckNumber)(b.showvlimits, c.showvlimits), e.showDivLineValues = (0, _lib.pluckNumber)(b.showvdivlinevalues, b.showvdivlinevalues, c.showvdivlinevalues), e.zeroPlaneThickness = (0, _lib.pluckNumber)(b.vzeroplanethickness, b.vdivlinethickness, c.zeroplanethickness, 2), e.zeroPlaneAlpha = (0, _lib.pluckNumber)(b.vzeroplanealpha, b.vdivlinealpha, c.zeroplanealpha), e.showZeroPlaneValue = (0, _lib.pluckNumber)(b.showvzeroplanevalue, c.showzeroplanevalue), e.showAxisLine = d ? 0 : (0, _lib.pluckNumber)(b.showxaxisline, b.showaxislines, b.drawAxisLines, c.showxaxisline, 0), e.maxLabelHeight = b.maxlabelheight, e.showZeroPlane = (0, _lib.pluckNumber)(b.showvzeroplane, c.showzeroplane), e;
  }getSpecificyAxisConf() {
    var a = this,
        b = a.getFromEnv('chart-attrib'),
        c = a.config,
        d = a.config.is3D,
        e = d ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D,
        f = c.isInverse,
        g = a.getFromEnv('color-manager'),
        h = (0, _lib.pluckNumber)(b.showzeroplane, c.showzeroplane, 1),
        i = (0, _lib.pluckNumber)(b.showzeroplanevalue, c.showzeroplanevalue);return h || i !== UNDEF || (i = 0), { isVertical: !0, isReverse: !f, isOpposit: !1, outCanfontFamily: (0, _lib.pluck)(b.outcnvbasefont, b.basefont, 'Verdana,sans'), outCanfontSize: (0, _lib.pluckFontSize)(b.outcnvbasefontsize, b.basefontsize, 10), outCancolor: (0, _lib.pluck)(b.outcnvbasefontcolor, b.basefontcolor, g.getColor(e.baseFontColor)).replace(/^#? ([a-f0-9]+)/ig, '#$1'), axisBreaks: b.yaxisbreaks, axisNamePadding: b.yaxisnamepadding, axisValuePadding: b.yaxisvaluespadding, axisNameFont: b.yaxisnamefont, axisNameFontSize: b.yaxisnamefontsize, axisNameFontColor: b.yaxisnamefontcolor, axisNameFontBold: b.yaxisnamefontbold, axisNameFontItalic: b.yaxisnamefontitalic, axisNameBgColor: b.yaxisnamebgcolor, axisNameBorderColor: b.yaxisnamebordercolor, axisNameAlpha: b.yaxisnamealpha, axisNameFontAlpha: b.yaxisnamefontalpha, axisNameBgAlpha: b.yaxisnamebgalpha, axisNameBorderAlpha: b.yaxisnameborderalpha, axisNameBorderPadding: b.yaxisnameborderpadding, axisNameBorderRadius: b.yaxisnameborderradius, axisNameBorderThickness: b.yaxisnameborderthickness, axisNameBorderDashed: b.yaxisnameborderdashed, axisNameBorderDashLen: b.yaxisnameborderdashlen, axisNameBorderDashGap: b.yaxisnameborderdashgap, axisNameWidth: b.yaxisnamewidth, useEllipsesWhenOverflow: b.useellipseswhenoverflow, rotateAxisName: (0, _lib.pluckNumber)(b.rotateyaxisname, 1), axisName: b.yaxisname, divLineColor: (0, _lib.pluck)(b.divlinecolor, g.getColor(e.divLineColor)), divLineAlpha: (0, _lib.pluck)(b.divlinealpha, d ? g.getColor('divLineAlpha3D') : g.getColor('divLineAlpha')), divLineThickness: (0, _lib.pluckNumber)(b.divlinethickness, 1), divLineIsDashed: !!(0, _lib.pluckNumber)(b.divlinedashed, b.divlineisdashed, 0), divLineDashLen: (0, _lib.pluckNumber)(b.divlinedashlen, 4), divLineDashGap: (0, _lib.pluckNumber)(b.divlinedashgap, 2), showAlternateGridColor: (0, _lib.pluckNumber)(b.showalternatehgridcolor, 1), alternateGridColor: (0, _lib.pluck)(b.alternatehgridcolor, g.getColor('altHGridColor')), alternateGridAlpha: (0, _lib.pluck)(b.alternatehgridalpha, g.getColor('altHGridAlpha')), numDivLines: (0, _lib.pluckNumber)(b.numdivlines, c.numDivLines), axisMinValue: c.yRangeMin || b.yaxisminvalue, axisMaxValue: c.yRangeMax || b.yaxismaxvalue, setAdaptiveMin: (0, _lib.pluckNumber)(b.setadaptivesymin, b.setadaptiveymin, c.setAdaptiveMin), adjustDiv: b.adjustdiv, labelStep: b.yaxisvaluesstep, showAxisValues: (0, _lib.pluckNumber)(b.showyaxisvalues, b.showyaxisvalue, c.showyaxisvalues), showLimits: (0, _lib.pluckNumber)(b.showyaxislimits, b.showlimits, a.showLimits), showDivLineValues: (0, _lib.pluckNumber)(b.showdivlinevalues, b.showdivlinevalue, c.showdivlinevalues), showZeroPlane: h, zeroPlaneColor: b.zeroplanecolor, zeroPlaneThickness: (0, _lib.pluckNumber)(b.zeroplanethickness, b.divlinethickness, c.zeroplanethickness, 2), zeroPlaneAlpha: (0, _lib.pluckNumber)(b.zeroplanealpha, b.divlinealpha, c.zeroplanealpha), showZeroPlaneValue: i, showZeroPlaneOnTop: c.showzeroplaneontop, trendlineColor: b.trendlinecolor, trendlineToolText: b.trendlinetooltext, trendlineThickness: b.trendlinethickness, trendlineAlpha: b.trendlinealpha, showTrendlinesOnTop: b.showtrendlinesontop, showAxisLine: d ? 0 : (0, _lib.pluckNumber)(b.showyaxisline, b.showaxislines, b.drawAxisLines, c.showyaxisline, 0), axisLineThickness: (0, _lib.pluckNumber)(b.yaxislinethickness, b.axislinethickness, 1), axisLineAlpha: (0, _lib.pluckNumber)(b.yaxislinealpha, b.axislinealpha, 100), axisLineColor: (0, _lib.pluck)(b.yaxislinecolor, b.axislinecolor, '#000000'), forceTrendBelow: !!c.is3D };
  }getBasexAxisConf() {
    var a = this,
        b = a.getFromEnv('chart-attrib'),
        c = a.config.is3D,
        d = c ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D,
        e = a.getFromEnv('color-manager');return { isVertical: !1, isOpposit: !1, outCanfontFamily: (0, _lib.pluck)(b.outcnvbasefont, b.basefont, 'Verdana,sans'), outCanfontSize: (0, _lib.pluckFontSize)(b.outcnvbasefontsize, b.basefontsize, 10), outCancolor: (0, _lib.pluck)(b.outcnvbasefontcolor, b.basefontcolor, e.getColor(d.baseFontColor)).replace(/^#? ([a-f0-9]+)/ig, '#$1'), axisNamePadding: b.xaxisnamepadding, axisValuePadding: b.labelpadding, axisNameFont: b.xaxisnamefont, axisNameFontSize: b.xaxisnamefontsize, axisNameFontColor: b.xaxisnamefontcolor, axisNameFontBold: b.xaxisnamefontbold, axisNameFontItalic: b.xaxisnamefontitalic, axisNameBgColor: b.xaxisnamebgcolor, axisNameBorderColor: b.xaxisnamebordercolor, axisNameAlpha: b.xaxisnamealpha, axisNameFontAlpha: b.xaxisnamefontalpha, axisNameBgAlpha: b.xaxisnamebgalpha, axisNameBorderAlpha: b.xaxisnameborderalpha, axisNameBorderPadding: b.xaxisnameborderpadding, axisNameBorderRadius: b.xaxisnameborderradius, axisNameBorderThickness: b.xaxisnameborderthickness, axisNameBorderDashed: b.xaxisnameborderdashed, axisNameBorderDashLen: b.xaxisnameborderdashlen, axisNameBorderDashGap: b.xaxisnameborderdashgap, useEllipsesWhenOverflow: b.useellipseswhenoverflow, divLineColor: (0, _lib.pluck)(b.vdivlinecolor, b.divlinecolor, e.getColor(d.divLineColor)), divLineAlpha: (0, _lib.pluck)(b.vdivlinealpha, b.divlinealpha, c ? e.getColor('divLineAlpha3D') : e.getColor('divLineAlpha')), divLineThickness: (0, _lib.pluckNumber)(b.vdivlinethickness, b.divlinethickness, 1), divLineIsDashed: !!(0, _lib.pluckNumber)(b.vdivlinedashed, b.vdivlineisdashed, b.divlinedashed, b.divlineisdashed, 0), divLineDashLen: (0, _lib.pluckNumber)(b.vdivlinedashlen, b.divlinedashlen, 4), divLineDashGap: (0, _lib.pluckNumber)(b.vdivlinedashgap, b.divlinedashgap, 2), alternateGridColor: (0, _lib.pluck)(b.alternatevgridcolor, e.getColor('altVGridColor')), alternateGridAlpha: (0, _lib.pluck)(b.alternatevgridalpha, e.getColor('altVGridAlpha')), labelFont: b.labelfont, labelFontSize: b.labelfontsize, labelFontColor: b.labelfontcolor, labelFontAlpha: b.labelalpha, labelFontBold: b.labelfontbold, labelFontItalic: b.labelfontitalic, axisMinValue: b.xaxisminvalue, axisMaxValue: b.xaxismaxvalue, adjustDiv: b.adjustvdiv, labelDisplay: b.labeldisplay, showLabels: b.showlabels, rotateLabels: b.rotatelabels, slantLabel: (0, _lib.pluckNumber)(b.slantlabels, b.slantlabel), labelStep: (0, _lib.pluckNumber)(b.labelstep, b.xaxisvaluesstep), showAxisValues: (0, _lib.pluckNumber)(b.showxaxisvalues, b.showxaxisvalue), zeroPlaneColor: b.vzeroplanecolor, trendlineColor: b.trendlinecolor, trendlineToolText: b.trendlinetooltext, trendlineThickness: b.trendlinethickness, trendlineAlpha: b.trendlinealpha, showTrendlinesOnTop: b.showtrendlinesontop, axisLineThickness: (0, _lib.pluckNumber)(b.xaxislinethickness, b.axislinethickness, 1), axisLineAlpha: (0, _lib.pluckNumber)(b.xaxislinealpha, b.axislinealpha, 100) };
  }getConfig(a) {
    return a ? this.config[a] : this.config;
  }_getSumValueSpace(a) {
    var b,
        c = Math.max,
        d = this,
        e = {},
        f = d.isBar,
        g = d.getFromEnv('dataSource').chart,
        h = 0 === d.showsum ? 0 : (0, _lib.pluckNumber)(g.showsum, d.showsum, 0),
        j = (0, _lib.pluckNumber)(d.config.stack100percent),
        k = d.config.isstacked,
        l = 0,
        m = [],
        n = 0;if (d.iterateComponents(a => {
      ('cartesianStackGroup' === a.getName() || 'marimekkoStackgroup' === a.getName()) && m.push(a);
    }), h && j && k && m.length) {
      for (b = m.length - 1; 0 <= b; b--) e = m[b].getMaxSumValueSpace(), f ? l = c(l, e.maxWidth) : n = c(n, e.maxHeight);n > a && (n = a), l > a && (l = a);
    }return { top: n, right: l };
  }setAxisDimention() {
    var a = Math.max;let b = this,
        c = b.getChildren('xAxis') && b.getChildren('xAxis')[0],
        d = b.getChildren('yAxis') && b.getChildren('yAxis')[0],
        e = b.getFromEnv('chartConfig'),
        f = e.xDepth,
        g = b.getChildren('canvas') && b.getChildren('canvas')[0].config,
        h = g && g.canvasBorderWidth,
        i = g && g.canvasPadding,
        j = g.canvasLeft,
        k = g && g.canvasPaddingLeft,
        l = g && g.canvasPaddingRight,
        m = g.canvasTop,
        n = g && g.canvasPaddingTop;c && c.setAxisConfig({ canvasPaddingLeft: a(k, i), canvasPaddingRight: a(l, i) }), c && c.setAxisDimention({ x: j + (f || 0) + a(k, i), y: e.canvasBottom + (e.shift || 0) + h, opposite: m - h, axisLength: g.canvasWidth - (f || 0) - a(k, i) - a(l, i) }), d && d.setAxisDimention({ x: j - h, y: m + n, opposite: e.canvasRight + h, axisLength: e.canvasHeight - n - g.canvasPaddingBottom });
  }_getTrendLineMinMax(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = this,
        j = 'v' === a ? h.getFromEnv('dataSource').vtrendlines : h.getFromEnv('dataSource').trendlines,
        k = { max: -Infinity, min: 1 / 0 };if (b = b || 'p', j) for (d = 0, f = j.length; d < f; d += 1) for (e = 0, g = j[d].line ? j[d].line.length : 0; e < g; e += 1) (c = j[d].line[e], ('s' !== b || 's' === c.parentyaxis) && ('s' === b || 's' !== c.parentyaxis)) && (k.max = mathMax(c.startvalue || -Infinity, c.endvalue || -Infinity, k.max), k.min = mathMin(c.startvalue || 1 / 0, c.endvalue || 1 / 0, k.min));return k;
  }
}exports.default = Cartesian;
},{"./commonspacemanager":109,"../_internal/lib/lib":23,"../_internal/factories/cartesian-axis":110,"../_internal/factories/canvas-axis-ref-cartesian":111,"../_internal/factories/vcanvas":112,"../_internal/factories/mouse-tracker":113}],62:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b,
      c,
      d = a.getChildren(),
      e = d.canvas && d.canvas[0],
      f = e && e.getChildren('vCanvas'),
      g = f && f[0] || e || a,
      h = a.getFromEnv('dataSource'),
      i = h.dataset,
      j = h.data || i && i[0].data;return c = _dataSegregator(j), j && 0 !== j.length ? void (b = a.getDSdef(), (0, _lib.datasetFactory)(g, b, 'dataset', 1, [c])) : void a.setChartMessage();
};

var _lib = require('../lib/lib');

let TRUE_STRING = 'true',
    ONE_STRING = '1',
    _dataSegregator = a => {
  var b = [],
      c = [];return (0, _lib.fcEach)(a, function (a, d) {
    a.vline === TRUE_STRING || !0 === a.vline || 1 === a.vline || a.vline === ONE_STRING ? c.push({ index: d, data: a }) : b.push(a);
  }), { catData: c, data: b };
};
},{"../lib/lib":23}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartesian = require('./cartesian');

var _cartesian2 = _interopRequireDefault(_cartesian);

var _singleseriesDataset = require('../_internal/factories/singleseries-dataset');

var _singleseriesDataset2 = _interopRequireDefault(_singleseriesDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SSCartesian extends _cartesian2.default {
  constructor() {
    super(), this.registerFactory('dataset', _singleseriesDataset2.default, ['vCanvas']);
  }static getName() {
    return 'SSCartesian';
  }getName() {
    return 'SSCartesian';
  }__setDefaultConfig() {
    super.__setDefaultConfig();let a = this.config;a.hasLegend = !1, a.linethickness = 4;
  }_checkInvalidSpecificData() {
    let a = this.getFromEnv('dataSource'),
        b = a.data;if (!b || !b.length) return !0;
  }_setCategories() {
    var a = this,
        b = a.getFromEnv('dataSource'),
        c = a.getChildren('xAxis'),
        d = b.dataset,
        e = b.data || d && d[0].data;c[0].setTickValues(e);
  }
}exports.default = SSCartesian;
},{"./cartesian":61,"../_internal/factories/singleseries-dataset":62}],73:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

exports.default = { "initial.dataset.column": function () {
    var a,
        b = Math.sign,
        c = this,
        d = c.getFromEnv('chart'),
        e = d.config.yDepth || 0,
        f = 'y',
        g = 'height',
        h = 'x',
        i = 'width',
        j = c.getFromEnv('yAxis'),
        k = c.getFromEnv('xAxis'),
        l = function (a, b) {
      var k,
          l,
          m,
          n,
          o = c.config,
          p = b && b.graphics && b.graphics.element,
          q = a.attr,
          r = j.getPixel(j.getAxisBase()) + (d.isBar ? -e : e),
          s = {},
          t = o.oldZeroAxisPos,
          u = .7;if (k = p.attr(), s[f] = l = k[f], s[g] = k[g], s[h] = k[h], s[i] = k[i], m = k[f] + k[g], r !== t && (0 <= t - r ? (l > r && l <= t + u && (s[f] = r, m > t && (s[g] = m - s[f])), m > r && m <= t + u && (s[g] = r - (s[f] || 0 === s[f] ? s[f] : l))) : (l < r && l >= t - u && (s[f] = r, m > r && (s[g] = m - s[f])), m < r && m >= t - u && (s[g] = r - (s[f] || 0 === s[f] ? s[f] : l))), n = !0), c.config.catDiff && (s[h] = q[h], s[i] = q[i], n = !0), b._plot_1Start = s, n) return { finalAttr: s, slot: 'axis' };
    };return { "rect.appearing": function (a) {
        var l,
            m,
            n,
            o,
            p = j.getPixel(j.getAxisBase()) + (d.isBar ? -e : e),
            q = a.index,
            r = c.components.data[q],
            s = a.attr;return k.config.isVertical && (f = 'x', g = 'width', h = 'y', i = 'height'), l = s[f], m = s[g], o = b(l + m / 2 - p), n = 1 === o ? l : l + m, r._posWRT0 = o, [{ initialAttr: function () {
            var a = {};return a[f] = n, a.opacity = 0, a[g] = 0, a;
          }, finalAttr: { opacity: 1 }, startEnd: function () {
            var b = a.length;return _lib.animHelperFN.getTimeByValue(_lib.animHelperFN.animByWeight(q, b, .6), { startPx: p, endPx: 1 === o ? c.config.yAxisMaxPixel : c.config.yAxisMinPixel }, { startPx: n, endPx: 1 === o ? s[f] + s[g] : s[f] });
          }, hookFn: function () {
            this.attr({ opacity: 1 });
          }, effect: 'linear', slot: 'plot' }];
      }, "rect.updating": function (m) {
        var n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P = [],
            Q = c.components.data[m.index],
            R = m.attr,
            S = Q && Q.graphics && Q.graphics.element,
            T = j.getPixel(j.getAxisBase()) + (d.isBar ? -e : e),
            U = 0,
            V = c.getFromEnv('numColDiff'),
            W = {};return k.config.isVertical && (f = 'x', g = 'width', h = 'y', i = 'height'), (O = l(m, Q)) && P.push(O), y = Q.prevDataObj, z = y && y._plot_1Start, F = y && y._plot_1End, A = y && y._plot_2Start, B = Q.oldPrevDataObj, C = Q.oldPrevDataObj && Q.oldPrevDataObj._plot_1End, W = Q._plot_1Start, n = W[f], o = W[g], p = n + o, q = n + o / 2, r = R[f], s = R[g], t = r + s, u = r + s / 2, D = (p + t) / 2, G = b(q - T), H = b(u - T), w = {}, x = {}, x[f] = w[f] = (n + r) / 2, x[g] = w[g] = (o + s) / 2, o ? G === H ? y !== B && (I = C || !!(F && b(F[f] + F[g] / 2 - T) === G) && F, J = I ? I[f] + (1 === G ? I[g] : 0) : T, 1 === G ? (x[f] = w[f] = J, x[g] = w[g] = D - w[f]) : x[g] = w[g] = J - w[f], v = !0) : (x[g] = w[g] = 0, w[f] = B && B._oldPosWRT0 === G ? C[f] + (1 === G ? C[g] : 0) : T, x[f] = A ? A[f] + (1 === H ? A[g] : 0) : T, E = v = !0) : y && y._oldPosWRT0 === H || 0 === c.stackIndex ? (M = {}, M[g] = 0, M[f] = z ? z[f] + (0 < y._posWRT0 ? z[g] : 0) : T, Q._posWRT0 = H, Q._plot_1Start = M, x[f] = w[f] = (M[f] + r) / 2, x[g] = w[g] = s / 2) : q === T && (H === Q._posWRT0 ? (v = !0, w[f] = 1 === H ? T : T - w[g]) : U = .5), 0 > V ? (w[h] = R[h], w[i] = R[i], v = !0) : 0 < V ? U = .5 : (W[h] !== R[h] || W[i] != R[i]) && (.5 == U ? (M = {}, M[h] = R[h], M[i] = R[i], K = function () {
          E && S.attr(x), S.attr(M);
        }) : (w[h] = R[h], w[i] = R[i], v = !0, K && (L = function () {
          S.attr(M);
        }, K = a))), v && (P.push({ finalAttr: w, startEnd: { start: 0, end: .5 }, hookFn: L, slot: 'plot' }), U = .5), K || (K = function () {
          E && S.attr(x);
        }), P.push({ effect: 'linear', startEnd: { start: U, end: 1 }, finalAttr: { x: R.x, y: R.y, width: R.width, height: R.height }, callback: function () {
            (null === Q.config.setValue || Q.config.setValue === a) && this.hide();
          }, hookFn: K, slot: 'plot' }), N = Object.assign({}, R), delete N.x, delete N.y, delete N.width, delete N.height, P.push({ finalAttr: N, effect: 'linear', slot: 'plot' }), Q._plot_1End = w, Q._plot_2Start = x, Q._oldPosWRT0 = Q._posWRT0, Q._posWRT0 = H, P;
      }, "rect._disappearing": function (a) {
        var b,
            h,
            i,
            k,
            m,
            n = j.getPixel(j.getAxisBase()) + (d.isBar ? -e : e),
            o = c.components.removeDataArr,
            p = o && o[a.index] || c.components.data[a.index],
            q = p && p.graphics && p.graphics.element,
            r = p.oldPrevDataObj && p.oldPrevDataObj._plot_1End,
            s = [];if (q) return (k = l(a, p)) && s.push(k), j.config.isVertical || (f = 'x', g = 'width'), m = p._plot_1Start, h = m[f], b = h + m[g] / 2 > n ? r ? r[f] + r[g] : h : r ? r[f] : n, i = {}, i[f] = b, i[g] = 0, i.width = p._width, i.x = p._xPos, s.push({ startEnd: { start: 0, end: 1 > c.getFromEnv('numOfColumns') ? 1 : .5 }, finalAttr: i, slot: 'plot' }), p._plot_1End = a.finalAttr, s;
      }, "plotLabel.appearing": [{ initialAttr: { opacity: 0 }, slot: 'final' }], "plotLabel._disappearing": [{ hookFn: function () {
          this.hide();
        }, slot: 'initial' }], "plotLabel.updating": [{ hookFn: function () {
          this.hide();
        }, slot: 'initial' }, { hookFn: function () {
          this.show();
        }, initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'final' }], "group.appearing": a => 'label-group' === a.attr.name ? [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'final' }] : [{ initialAttr: { opacity: 1 }, finalAttr: { opacity: 1 }, slot: 'final' }], "*": null };
  } };
},{"../lib/lib":23}],15:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._removePlots = undefined;

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _dependencyManager = require('../dependency-manager');

var _columnAnimation = require('../animation-rules/column-animation');

var _columnAnimation2 = _interopRequireDefault(_columnAnimation);

var _schedular = require('../schedular');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    state,
    MOUSEOVER = 'mouseOver',
    MOUSEOUT = 'mouseOut',
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    HTP = _lib.hasTouch ? _lib.TOUCH_THRESHOLD_PIXELS : _lib.CLICK_THRESHOLD_PIXELS,
    dropHash = _lib.regex.dropHash,
    PLOTBORDERCOLOR = 'plotBorderColor',
    PLOTGRADIENTCOLOR = 'plotGradientColor',
    SHOWSHADOW = 'showShadow',
    POINTER = 'pointer',
    EVENTARGS = 'eventArgs',
    DEFAULT_CURSOR = _lib.preDefStr.DEFAULT,
    showHoverEffectStr = _lib.preDefStr.showHoverEffectStr,
    SETROLLOVERATTR = _lib.preDefStr.setRolloverAttrStr,
    SETROLLOUTATTR = _lib.preDefStr.setRolloutAttrStr,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathAbs = math.abs,
    crispTop = { top: !0 },
    crispRight = { right: !0 },
    crispLeft = { left: !0 },
    crispBottom = { bottom: !0 },
    mathCeil = math.ceil,
    mathRound = math.round,
    _graphicsIterator = (e = {}, t) => {
  if ('function' == typeof t) for (let o in e) if (e.hasOwnProperty(o)) {
    let a = e[o];Array.isArray(a) ? a.forEach(e => t(e, o)) : e[o] && t(e[o], o);
  }
},
    _rolloverResponseSetter = function (e, t, o, a, i) {
  var n = t.graphics,
      r = n && n.element,
      l = e.getFromEnv('animationManager'),
      s = r && r.getData();!0 !== s.draged && (r && 0 !== s.showHoverEffect && (l.setAnimationState(MOUSEOVER), l.setAnimation({ el: r, label: 'rect', component: i, attr: r.getData().setRolloverAttr })), !a && r && e.plotEventHandler(r, o, ROLLOVER));
},
    _rolloutResponseSetter = function (e, t, o, a, i) {
  var n = t.graphics,
      r = n && n.element,
      l = e.getFromEnv('animationManager'),
      s = r && r.getData();!0 !== s.draged && (r && 0 !== s.showHoverEffect && (l.setAnimationState(MOUSEOUT), l.setAnimation({ el: r, label: 'rect', component: i, attr: r.getData().setRolloutAttr })), !a && r && e.plotEventHandler(r, o, ROLLOUT));
},
    createGroup = function (e, t, o) {
  var a = o.getFromEnv('animationManager');return a.setAnimation({ el: 'group', attr: { name: e }, container: t, state: 'appearing', component: o, label: 'group' });
},
    _removePlots = function (e = [], t) {
  e.forEach(e => _graphicsIterator(e && e.graphics, t)), e.length = 0;
};(0, _dependencyManager.addDep)({ name: 'columnAnimation', type: 'animationRule', extension: _columnAnimation2.default });class ColumnDataset extends _componentInterface2.default {
  constructor() {
    super();const e = this;e.components = {}, e.components.removeDataArr = [], e.__hideElem = (t, o) => {
      e._setRemoveAnim(t, 'label' === o ? 'plotLabel' : 'rect');
    }, e.__removeElem = (t, o) => {
      e.__hideElem(t, o);
    }, e.config.primitiveType = 'column';
  }getType() {
    return 'dataset';
  }getName() {
    return 'column';
  }__setDefaultConfig() {
    super.__setDefaultConfig();let e = this.config;e.showvalues = UNDEF, e.includeinlegend = 1, e.plotfillalpha = UNDEF, e.plotfillangle = UNDEF, e.ratio = UNDEF;
  }preConfigure(e) {
    let t = this;return !!e && void (t.trimData(e), t.config.JSONData = e, super.preConfigure(e));
  }setSkippingInfo(e) {
    this.addToEnv('skipInfo', e || { plotsPerBin: 1, drawOnlyMap: [], draw: [], hide: [], skippingApplied: !1, dragHashMap: [] });
  }getSkippingInfo() {
    return this.getFromEnv('skipInfo') || { plotsPerBin: 1, drawOnlyMap: [], draw: [], hide: [], skippingApplied: !1, dragHashMap: [] };
  }configure(e) {
    return !!e && void super.configure(e);
  }configureAttributes() {
    let e = this,
        t = e.getFromEnv('chart'),
        o = e.config;e.parseAttributes(), e._setConfigure(), e.getState('visible') && !1 === o.oldVisible && (o.appearing = !0), o.oldVisible = e.getState('visible'), e._realTimeConfigure && e._realTimeConfigure(), !1 !== t.config.hasLegend && t.config.showLegend && e._addLegend(), e.ErrorValueConfigure && e.ErrorValueConfigure(), e.config.YForStackUpdated = !1, e.setState('dirty', !0);
  }parseAttributes() {
    let e,
        t,
        o,
        a,
        i = this,
        n = i.getFromEnv('chart'),
        r = n.getChildren('yAxis')[0],
        l = r.config.isReverse,
        s = i.config,
        g = i.config.JSONData,
        d = n.config.singleseries,
        c = n.config,
        p = n.getFromEnv('dataSource').chart,
        h = i.getFromEnv('color-manager'),
        m = i.getJSONIndex(),
        f = s.plotColor = h.getPlotColor(m),
        u = (0, _lib.pluckNumber)(g.dashed, p.plotborderdashed),
        v = (0, _lib.pluckNumber)(p.useplotgradientcolor, 1),
        x = n.isBar,
        b = n.config.is3D,
        E = n.config.isdual;s.parentYAxis = E ? 's' === (0, _lib.pluck)(g.parentyaxis && g.parentyaxis.toLowerCase(), 'p') ? 1 : 0 : 0, s.maxValue = -Infinity, s.minValue = 1 / 0, s.defaultPadding = { left: .5, right: .5 }, (0, _lib.parseConfiguration)(g, s, c, { data: !0 }), s.seriesname = (0, _lib.parseUnsafeString)(g.seriesname), s.showValues = (0, _lib.pluckNumber)(g.showvalues, p.showvalues, 1), s.showplotborder = (0, _lib.pluckNumber)(p.showplotborder, b ? 0 : 1), e = c.plotborderdashlen, t = c.plotborderdashgap, s.plotfillangle = (0, _lib.pluckNumber)(360 - p.plotfillangle, x ? 180 : l ? 90 : 270), s.plotfillalpha = a = (0, _lib.pluck)(g.alpha, p.plotfillalpha, _lib.HUNDREDSTRING), s.plotColor = f = (0, _lib.pluck)(g.color, f), s.legendSymbolColor = (0, _lib.getFirstColor)(s.plotColor), s.plotgradientcolor = (0, _lib.getDefinedColor)(p.plotgradientcolor, h.getColor(PLOTGRADIENTCOLOR)), v || (s.plotgradientcolor = ''), s.plotborderalpha = (0, _lib.pluck)(p.plotborderalpha, a, _lib.HUNDREDSTRING), s.plotbordercolor = (0, _lib.pluck)(p.plotbordercolor, b && !d ? '#ffffff' : h.getColor(PLOTBORDERCOLOR)), s.plotborderdashstyle = u ? (0, _lib.getDashStyle)(e, t, o) : 'none', s.showShadow = b ? (0, _lib.pluckNumber)(p.showshadow, 1) : (0, _lib.pluckNumber)(p.showshadow, h.getColor(SHOWSHADOW)), s.definedGroupPadding = mathMax((0, _lib.pluckNumber)(p.plotspacepercent), 0), s.includeinlegend = (0, _lib.pluckNumber)(g.includeinlegend, s.seriesname ? 1 : 0), i.setState('visible', 1 === (0, _lib.pluckNumber)(g.visible, !+g.initiallyhidden, 1)), !0 === i.getState('visible') ? i._conatinerHidden = !1 : i._containerHidden = !0, s.legendInteractivity = !1, i.setState('visible', 1 === (0, _lib.pluckNumber)(i.getState('visible'), s.JSONData.visible, !+s.JSONData.initiallyhidden, 1));
  }trimData(e) {
    if (!this.components && this.components.data && this.components.data.length) return;let t,
        o,
        a = this,
        i = a.components,
        n = a.config,
        r = n && n.context,
        l = a.getFromEnv('chart').isRealTime,
        s = r && r.prevCatlen,
        g = a.getFromEnv('xAxis'),
        d = l ? 0 : g.getTicksLen(),
        c = s - d,
        p = i && i.data,
        h = p && p.length,
        m = e.data && e.data.length || 0,
        f = h - m;c > f ? (t = c, o = d) : (t = f, o = m), 0 < t && this.removeData(o, t, !1);
  }hidePlots() {
    var e,
        t = this,
        o = t.components,
        a = o.data,
        i = t.getSkippingInfo(),
        n = i.hide,
        r = i.hideLabel;n.forEach(o => {
      e = a[o], e && e.graphics && (_graphicsIterator(e.graphics, t.__removeElem), e && (e.graphics = {}));
    }), r.forEach(o => {
      e = a[o], e && e.graphics && (_graphicsIterator(e.graphics, t.__removeElem), e && (e.graphics = {}));
    });
  }_setConfigure(e, t) {
    var o,
        a,
        n,
        r,
        l,
        s,
        g = this,
        d = g.getFromEnv('chart'),
        c = d.config,
        p = g.config,
        h = p.JSONData,
        m = e || h.data,
        f = g.getFromEnv('xAxis'),
        u = d.isRealTime,
        v = g.getFromEnv('dataSource').categories && g.getFromEnv('dataSource').categories[0] && g.getFromEnv('dataSource').categories[0].category,
        x = u ? v && Array.isArray(v) && v.filter(e => !e.vline).length || 0 : f.getTicksLen(),
        b = e && e.data.length,
        E = u ? b || x : b || Math.min(x, m && m.length),
        y = p.showplotborder,
        P = c.plotborderthickness,
        S = g.components.data,
        w = c.isDrag,
        k = g.getSkippingInfo && g.getSkippingInfo(),
        F = k && k.draw || [],
        C = k && k.skippingApplied;for (c.dragTolerance = w ? (y && 5 < P ? P / 2 + 1 : 5) + HTP : 0, S || (S = g.components.data = []), C && (E = F.length), l = 0; l < E; l++) r = F[l] || l, e ? (o = e && e.data[r] || {}, t === UNDEF ? (s = S.length - E + r, n = S[s]) : (s = t + r, n = S[s]), a = s) : (n = S[r], o = m && m[r] || {}, a = r), n || (n = S[a] = {}), n.config || (n.config = {}, n.graphics = {}), g._plotConfigure(a, o, b), s && s++;C && g.addJob('configureRestID', function () {
      g._configureRestData();
    }, _schedular.priorityList.postRender);
  }_configureRestData() {
    var e,
        t,
        o,
        a,
        n,
        r = this,
        l = r.config,
        s = r.config.JSONData,
        g = s.data,
        d = r.getFromEnv('chart-attrib'),
        c = r.getFromEnv('xAxis'),
        p = c.getTicksLen(),
        h = r.getSkippingInfo && r.getSkippingInfo(),
        m = h.drawOnlyMap,
        f = r.components.data;for (f || (f = r.components.data = []), l.maxValue = -Infinity, l.minValue = 1 / 0, a = 0; a < p; a++) m[a] || (o = f[a], e = g && g[a] || {}, t = a, e.tooltext !== UNDEF && (e.tooltext = (0, _lib.parseTooltext)(e.tooltext, [3], { label: e.label }, e, d, s)), o || (o = f[a] = {}), o.config || (f[a].config = {}), r._plotConfigure(t, e), n && n++);
  }_plotConfigure(e, t, o) {
    var a,
        i,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p,
        h,
        m,
        f,
        u,
        v,
        x,
        b,
        E,
        y,
        P,
        S,
        w,
        k,
        F,
        C,
        _,
        V,
        A,
        I,
        D,
        T,
        L,
        O,
        M,
        R = this,
        G = R.getFromEnv('chart'),
        B = G.config,
        N = R.config,
        H = N.JSONData,
        W = G.config.singleseries,
        J = R.getFromEnv('yAxis'),
        j = R.getFromEnv('xAxis'),
        X = R.components.data,
        Y = X[e],
        z = G.getFromEnv('dataSource').chart,
        U = R.getFromEnv('color-manager'),
        Z = N.showplotborder,
        K = N.plotColor,
        Q = B.showtooltip,
        $ = B.yaxisname,
        q = B.xaxisname,
        ee = B.tooltipsepchar,
        te = B.seriesnameintooltip,
        oe = B.plotborderdashlen,
        ae = B.plotborderdashgap,
        ie = B.plotborderthickness,
        ne = (0, _lib.pluckNumber)(B.useroundedges, 0),
        re = B.plothovereffect,
        le = N.plotfillangle,
        se = N.plotborderdashstyle,
        ge = Y.config,
        de = G.isBar,
        ce = G.config.is3D,
        pe = B.use3dlighting,
        he = B.usedataplotcolorforlabels;t.tooltext !== UNDEF && (t.tooltext = (0, _lib.parseTooltext)(t.tooltext, [3], { label: t.label }, t, z, H)), ge.showValue = (0, _lib.pluckNumber)(t.showvalue, N.showValues), ge.setValue = m = J.getCleanValue(t.value, (0, _lib.pluckNumber)(B.stack100percent)), ge.setLink = (0, _lib.pluck)(t.link), ge.toolTipValue = A = J.dataLabels(m), ge.setDisplayValue = I = (0, _lib.parseUnsafeString)(t.displayvalue), ge.displayValue = (0, _lib.pluck)(I, A), D = (0, _lib.pluckNumber)(t.dashed), T = (0, _lib.pluckNumber)(t.dashlen, oe), L = ae = (0, _lib.pluckNumber)(t.dashgap, ae), null !== m && (N.maxValue = mathMax(N.maxValue, m), N.minValue = mathMin(N.minValue, m)), ge.plotBorderDashStyle = h = 1 === D ? (0, _lib.getDashStyle)(T, L) : 0 === D ? 'none' : se, W ? (K = U.getPlotColor((0, _lib.pluckNumber)(e - o, e)), K = (0, _lib.pluck)(t.color, K), he && j.updateTicksValues(e, { labelfontcolor: (0, _libGraphics.convertColor)(K) }), p = (0, _lib.pluck)(t.alpha, t.borderalpha, N.plotborderalpha, d).toString()) : (K = (0, _lib.pluck)(t.color, N.plotColor), p = (0, _lib.pluck)(t.alpha, N.plotborderalpha, d).toString()), c = (0, _lib.pluck)(t.ratio, N.ratio), d = (0, _lib.pluck)(t.alpha, N.plotfillalpha), ge.shadow = { opacity: N.showShadow ? d / 100 : 0 }, 0 > m && !ne && (s = N.plotfillangle, le = de ? 180 - le : 360 - le), ge.colorArr = u = (0, _libGraphics.getColumnColor)(K + ',' + N.plotgradientcolor, d, c, le, ne, N.plotbordercolor, p, de ? 1 : 0, !!ce), ge.originalPlotColor = K, M = j.getLabel((0, _lib.pluckNumber)(e - o, e)), ge.origLabel = O = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(M.label)), f = ge.label = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(M.tooltext)) || O, 0 !== re && (v = (0, _lib.pluck)(t.hovercolor, H.hovercolor, z.plotfillhovercolor, z.columnhovercolor, K), x = (0, _lib.pluck)(t.hoveralpha, H.hoveralpha, z.plotfillhoveralpha, z.columnhoveralpha, d), b = (0, _lib.pluck)(t.hovergradientcolor, H.hovergradientcolor, z.plothovergradientcolor, N.plotgradientcolor), !b && (b = ''), E = (0, _lib.pluck)(t.hoverratio, H.hoverratio, z.plothoverratio, c), y = (0, _lib.pluckNumber)(360 - t.hoverangle, 360 - H.hoverangle, 360 - z.plothoverangle, le), P = (0, _lib.pluck)(t.borderhovercolor, H.borderhovercolor, z.plotborderhovercolor, N.plotbordercolor), S = (0, _lib.pluck)(t.borderhoveralpha, H.borderhoveralpha, z.plotborderhoveralpha, z.plotfillhoveralpha, z.columnhoveralpha, p, d), w = (0, _lib.pluckNumber)(t.borderhoverthickness, H.borderhoverthickness, z.plotborderhoverthickness, N.showplotborder && ie), k = t.borderhoverdashed || H.borderhoverdashed || z.plotborderhoverdashed, F = (0, _lib.pluckNumber)(t.borderhoverdashgap, H.borderhoverdashgap, z.plotborderhoverdashgap, oe), C = (0, _lib.pluckNumber)(t.borderhoverdashlen, H.borderhoverdashlen, z.plotborderhoverdashlen, ae), _ = k === UNDEF ? h : +k ? (0, _lib.getDashStyle)(C, F) : '', (B.drawTrendRegion || 1 == re && v === K) && (v = (0, _libGraphics.getLightColor)(v, 70)), V = (0, _libGraphics.getColumnColor)(v + ',' + b, x, E, y, ne, P, S.toString(), de ? 1 : 0, !!ce), ge.setRolloutAttr = { fill: ce ? [(0, _lib.toRaphaelColor)(u[0]), !pe] : (0, _lib.toRaphaelColor)(u[0]), stroke: Z ? (0, _lib.toRaphaelColor)(u[1]) : _lib.TRACKER_FILL, "stroke-width": ie, "stroke-dasharray": h }, ge.setRolloverAttr = { fill: ce ? [(0, _lib.toRaphaelColor)(V[0]), !pe] : (0, _lib.toRaphaelColor)(V[0]), stroke: P ? (0, _lib.toRaphaelColor)(V[1]) : _lib.TRACKER_FILL, "stroke-width": w, "stroke-dasharray": _ }), a = ge.toolTipValue, ge.origToolText = n = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(t.tooltext, H.plottooltext, z.plottooltext))), Q ? null === a ? g = !1 : n === UNDEF ? (te && (r = (0, _lib.getFirstValue)(H && H.seriesname)), g = r ? r + ee : '', g += f ? f + ee : '') : (l = [1, 2, 3, 4, 5, 6, 7], i = { yaxisName: $, xaxisName: q, formattedValue: a, label: f }, g = (0, _lib.parseTooltext)(n, l, i, t, z, H)) : g = !1, ge.toolText = g, ge.setTooltext = g, s && (le = s), ge._x = e, ge._y = m;
  }updateYForStack() {
    var e,
        t,
        o,
        a,
        n,
        r,
        l = this,
        s = l.config.JSONData,
        g = l.getFromEnv('chart-attrib'),
        d = l.getFromEnv('chartConfig'),
        c = l.getFromEnv('xAxis'),
        p = c.getTicksLen(),
        h = l.components,
        m = h.data,
        f = l.getFromEnv('stackValues'),
        u = l.getSkippingInfo && l.getSkippingInfo(),
        v = u && u.skippingApplied,
        x = u && u.draw || [],
        b = x && x.length;for (v && (p = b), a = 0; a < p; a++) (o = x[a] || a, e = m[o], t = e && e.config, e !== UNDEF) && (n = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(t.origToolText, s.plottooltext, g.plottooltext))), r = f[o] && f[o].positive + f[o].negative || 1, t._b = l._parseValues(o, t._b, r, n), d.stack100percent && (t._y = t.value + t._b));
  }_parseValues(e, t, o, a) {
    var i,
        n,
        r = this,
        l = r.getFromEnv('chartConfig'),
        s = r.components.data[e].config,
        g = (0, _lib.pluckNumber)(l.showpercentvalues),
        d = (0, _lib.pluckNumber)(l.showpercentintooltip),
        c = r.getState('visible'),
        p = s.setValue,
        h = (0, _lib.pluckNumber)(l.stack100percent),
        m = r.getFromEnv('number-formatter'),
        f = r.getFromEnv('yAxis'),
        u = s.setDisplayValue;return n = 100 * ((c ? p || 0 : 0) / o), i = m.percentValue(n), h && (s.value = n, t = 100 * ((t || 0) / o)), d && (s.toolTipValue = i), g && !u && (s.displayValue = i), a && (s.toolText = (0, _lib.parseTooltext)(s.setTooltext, [14, 24, 25, 112], { percentValue: i, sum: f.dataLabels(o), unformattedSum: o })), t;
  }_addLegend() {
    var e,
        t,
        o,
        a,
        i = this,
        n = i.getFromEnv('chart'),
        r = n.isBar,
        l = i.getFromEnv('chart-attrib'),
        s = i.config,
        g = (0, _lib.getFirstColor)(s.legendSymbolColor),
        d = i.getFromEnv('legend'),
        c = (0, _lib.pluckNumber)(l.use3dlighting, l.useplotgradientcolor, 1),
        p = (0, _libGraphics.getLightColor)(g, 60).replace(dropHash, _lib.HASHSTRING);s.includeinlegend ? (c ? (t = (0, _libGraphics.getLightColor)(g, 40), e = { FCcolor: { color: g + ',' + g + ',' + t + ',' + g + ',' + g, ratio: '0,30,30,30,10', angle: r ? 0 : 270, alpha: '100,100,100,100,100' } }) : e = { FCcolor: { color: g, angle: r ? 0 : 270, ratio: '0', alpha: '100' } }, a = d.getItem(i.config.legendItemId), o = { type: i.getName(), index: i.getJSONIndex(), label: (0, _lib.getFirstValue)(i.config.JSONData.seriesname) }, !a && (i.config.legendItemId = d.createItem(i), a = d.getItem(i.config.legendItemId), i.addExtEventListener('click', function () {
      a.itemClickFn();
    }, a)), a.configure(o), a.setStateCosmetics('default', { symbol: { fill: (0, _lib.toRaphaelColor)(e), rawFillColor: g, stroke: (0, _lib.toRaphaelColor)(p) } }), i.getState('visible') ? a.removeLegendState('hidden') : a.setLegendState('hidden')) : i.config.legendItemId && d.disposeItem(i.config.legendItemId);
  }legendInteractivity(e) {
    var t = this,
        o = e.getLinkedParent(),
        a = o.getFromEnv('chart'),
        i = t.getState('visible'),
        n = t.config;a.getFromEnv('animationManager').setAnimationState('legendInteraction'), n.legendInteractivity = !0, i ? t.hide() : t.show(), n.drawnEvtListenerAttached || (n.drawnEvtListenerAttached = !0, t.addEventListener('drawn', function () {
      n.legendInteractivity = !1;
    }));
  }createPinElem() {
    var e,
        t,
        o,
        a,
        n = this,
        r = n.getFromEnv('chart'),
        l = arguments[1].group,
        s = n.components.data,
        g = n.graphics.pinElems || (n.graphics.pinElems = []),
        d = n.getLinkedParent().getChildContainer().columnVcanvasGroup;for (t = g.length - 1; 0 <= t; t--) g[t].remove(), g.pop();if (n.getState('visible')) for (t = n.config.scrollMinVal; t < n.config.scrollMaxVal; t++) a = s[t], a && a.graphics && (e = a.graphics.element, o = e.clone().attr({ transform: ['T', -(r.config._visx + mathAbs(d.transform()[0][1])), -r.config.canvasBottom] }), l.appendChild(o), g.push(o));
  }_checkPointerOverColumn(e, t, o) {
    var a,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p,
        h,
        m = this,
        f = m.getFromEnv('chart'),
        u = f.config,
        v = u.plotborderthickness,
        x = u.showplotborder,
        b = m.components,
        E = b.data,
        y = E && E.length,
        P = 0,
        S = 0,
        w = u.dragTolerance || 0,
        k = m.getSkippingInfo && m.getSkippingInfo(),
        F = k.plotsPerBin;for (c = mathCeil(e / F), p = (c - 1) * F + 1, h = p + F - 1, h = h < y ? h : y, d = h; d >= p; d--) {
      if (a = E[d], !a) return;if ((a._height < HTP && (P = HTP), a._width < HTP && (S = HTP), a._xPos || a._yPos) && (n = a.config.setValue, x && v !== UNDEF ? g = v / 2 : v = g = 0, null !== n && (r = t - a._xPos + g, l = o - a._yPos + g + (0 <= n ? w : 0), s = r >= -S / 2 && r <= (S || a._width) + v && l >= -P / 2 && l <= (P || a._height) + v + (0 > n ? 2 * w : w), s))) return { pointIndex: d, hovered: s, pointObj: E[d] };
    }
  }_getHoveredPlot(e, t) {
    var o,
        a,
        i = this,
        n = i.getFromEnv('chart'),
        r = n.isBar,
        l = i.getFromEnv('xAxis');return e += l.getTranslation(), o = l.getValue(r ? t : e), a = Math.round(o), 0 < a - o ? i._checkPointerOverColumn(a, e, t) || i._checkPointerOverColumn(a - 1, e, t) : i._checkPointerOverColumn(a + 1, e, t) || i._checkPointerOverColumn(a, e, t);
  }getPlotInCategoryAt(e = 0, t = 0) {
    let o,
        a,
        i,
        n,
        r,
        l = this.components.data,
        s = this.getFromEnv('xAxis'),
        g = this.getFromEnv('yAxis'),
        d = s.getTranslation() || 0,
        c = g.getTranslation() || 0,
        p = this.getState('visible');if ('category' === s.getName() && s.config.hasCategory) a = s;else if ('category' === g.getName() && g.config.hasCategory) a = g;else return !1;return (i = a.config.isVertical, null !== i && 'undefined' != typeof i) && (n = Math.round(a.getValue(i ? t + c : e + d)), o = l[n], r = this._getHoveredPlot(e, t), p && r ? r : !!(p && o) && { pointIndex: o._index, hovered: !1, pointObj: o });
  }_decideTooltipType(t, o) {
    var e = this,
        a = e.getFromEnv('chart'),
        i = a.config.drawTrendRegion,
        n = e.components,
        r = e.getFromEnv('toolTipController'),
        l = n.data,
        s = l[t],
        g = s && (s.config.finalTooltext || s.config.toolText),
        d = e.config.currentToolTip,
        c = o.originalEvent;g && !i && (d ? r.draw(c, g, d) : d = e.config.currentToolTip = r.draw(c, g));
  }_firePlotEvent(t, o, a) {
    var e,
        i,
        n = this,
        r = n.getFromEnv('chart'),
        l = n.components,
        s = n.getFromEnv('toolTipController'),
        g = l.data,
        d = g[o],
        c = d.graphics && d.graphics.element,
        p = n.config.currentToolTip;c && (e = d.config, i = e.setLink, 'mouseover' === t ? (n._decideTooltipType(o, a), _rolloverResponseSetter(r, d, a, UNDEF, this), i && (c.node.style.cursor = POINTER)) : 'mouseout' === t ? (s.hide(p), _rolloutResponseSetter(r, d, a, UNDEF, this), i && (c.node.style.cursor = DEFAULT_CURSOR)) : 'click' === t ? r.plotEventHandler(c, a) : 'mousemove' === t ? n._decideTooltipType(o, a) : void 0);
  }createContainer() {
    var e,
        t,
        o,
        a,
        i = this,
        n = i.getType(),
        r = i.getFromEnv('chart'),
        l = i.getLinkedParent(),
        s = i.config.primitiveType || n;l.getChildContainer(s + 'VcanvasGroup') || (s = 'default'), e = l.getChildContainer(s + 'VcanvasGroup'), a = l.getChildContainer(s + 'ShadowVcanvasGroup'), t = l.getChildContainer('commonElemGroup') || e, o = l.getChildContainer('anchorGroup') || e, i.getContainer('shadowGroup') || i.addContainer('shadowGroup', createGroup('shadow-group', a, i)), i.getContainer('errorShadowGroup') || i.addContainer('errorShadowGroup', createGroup('error-shadow-group', a, i)), i.getContainer('commonElemsGroup') || i.addContainer('commonElemsGroup', createGroup('common-elems-group', t, i)), i.getContainer('plotGroup') || i.addContainer('plotGroup', createGroup('plot-group', o, i)), i.getContainer('errorPlotGroup') || i.addContainer('errorPlotGroup', createGroup('error-plot-group', e, i)), r.hasAnchor && i.getContainer('errorPlotGroup').insertBefore(i.getContainer('plotGroup')), i.getContainer('labelGroup') || i.addContainer('labelGroup', createGroup('label-group', l.getChildContainer('vcanvasLabelGroup'), i).attr('class', 'fusioncharts-datalabels'));
  }createCoordinates() {
    var e,
        t,
        o,
        a,
        n,
        r,
        l,
        s,
        g,
        d,
        c = this,
        p = c.components,
        h = p.data,
        m = c.getFromEnv('chart'),
        f = m.isBar,
        u = c.getFromEnv('yAxis'),
        v = c.getFromEnv('xAxis'),
        x = u.getAxisBase(),
        b = u.getPixel(x),
        E = v.config.isVertical,
        y = m.config.xDepth || 0,
        P = m.config.yDepth || 0,
        S = h.length,
        w = c.components,
        k = c.getLinkedParent(),
        F = k.getstackConf && k.getstackConf(),
        C = w.data,
        _ = c.getSkippingInfo && c.getSkippingInfo(),
        V = _ && _.skippingApplied,
        A = _ && _.draw || [],
        I = A && A.length;for (f || (y = -y), f && (P = -P), V && (S = I), n = 0; n < S; n++) (a = A[n] || n, e = C[a], t = e && e.config, e !== UNDEF) && (o = t._b, g = v.getPixel(F && F[a] && F[a].x || t._x), r = (isFinite(g) ? g : 0) + y, d = u.getPixel(t._y), l = (isFinite(d) ? d : 0) + P, s = (o ? u.getPixel(o) : b) + P, E ? (t._Px = l, t._Py = r, t._Pby = r, t._Pbx = s) : (t._Px = r, t._Py = l, t._Pby = s, t._Pbx = r), c.getLineShift && (t._Py += c.getLineShift('y')));
  }setContainerVisibility(e) {
    var t,
        o = this,
        a = o.getContainer();for (t in a) a.hasOwnProperty(t) && (!1 !== o.getState('visible') || !1 !== o._conatinerHidden && o._conatinerHidden !== UNDEF || e ? (a[t].show(), o._conatinerHidden = !1) : (a[t].hide(), o._conatinerHidden = !0));
  }plotAnimManager(e, t, o, a) {
    var i,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p = this,
        h = p.getFromEnv('chart'),
        m = h.getFromEnv('animationManager'),
        f = h.config.is3D,
        u = h.config,
        v = p.getState('visible'),
        x = t.x,
        b = p.getFromEnv('plotGroup3d');state = 'updating', l = e && e.config, n = l && l.setValue, d = 0 > n, f ? (r = d ? b.negativeGroupArray : b.positiveGroupAarray, g = r[h.isBar ? r.length - 1 - o : o]) : g = p.getContainer('plotGroup'), i = e.graphics.element, v ? !i && (state = 'appearing') : state = 'disappearing', c = t, s = { el: i || (f ? 'cubepath' : 'rect'), container: g, attr: v && c, doNotRemove: !0, index: o, length: a, component: p, label: 'rect' }, v || (s.callback = function () {
      this.hide();
    }), e.graphics.element = i = m.setAnimation(s), f && (i.appendTo(g), (u.isstacked && d || !u.isstacked && h.isBar) && i.toBack()), null === e.config.setValue ? (i.remove(), delete e.graphics.element) : p.getState('visible') && i.show(), l._oldPx = l._Px, l._oldX = x, v && (e.oldPrevDataObj = e.prevDataObj);
  }flushOnScroll(e, t) {
    let o,
        a = this,
        i = a.components,
        n = i.data;for (let r = e; r <= t - 1; r++) (o = n[r], !!(o && o.graphics)) && (_graphicsIterator(o.graphics, a.__removeElem), o.graphics = {});
  }removingDraw() {
    var e = this,
        t = e.components.data;t.forEach(t => {
      _graphicsIterator(t.graphics, e.__removeElem), delete t.graphics;
    }), super.removingDraw();
  }_contextChanged() {
    var e;this.config.context || (this.config.context = {});let t,
        o = this,
        a = o.config.context,
        i = a.shift,
        n = o.getFromEnv('xAxis'),
        r = o.getFromEnv('yAxis'),
        l = a.axisLimit,
        s = !1,
        g = { yAxis: { limit: r.getVisibleConfig() }, xAxis: { limit: n.getVisibleConfig() } };return g.yAxis.limitPixel = { min: r.getPixel(g.yAxis.limit.minValue), max: r.getPixel(g.yAxis.limit.maxValue) }, g.xAxis.limitPixel = { min: n.getPixel(g.xAxis.limit.minValue), max: n.getPixel(g.xAxis.limit.maxValue) }, t = JSON.stringify(g), l !== t && (a.axisLimit = t, s = !0), i !== o.getFromEnv('shift') && (a.shift = o.getFromEnv('shift'), s = !0), a.prevColNum !== o.getFromEnv('numOfColumns') && (a.prevColNum = o.getFromEnv('numOfColumns'), s = !0), n.getProcessLen ? e = n.getProcessLen() : n.getTicksLen && (e = n.getTicksLen()), a.prevCatlen !== e && (a.prevCatlen = e, s = !0), !!this.getFromEnv('chart').isRealTime || s;
  }calculateScrollRange() {
    let e,
        t = this,
        o = t.config,
        a = t.getFromEnv('xAxis'),
        i = a.getTicksLen(),
        n = t.getSkippingInfo && t.getSkippingInfo() || {},
        r = n.skippingApplied,
        l = n.draw || [],
        s = n.labelDraw || [],
        g = l.length;e = r ? g - 1 : i, o.scrollMinVal = mathMax(mathRound(a.getVisibleConfig().minValue), 0) - 1, o.scrollMaxVal = mathMin(mathRound(a.getVisibleConfig().maxValue) + 1, e) + 1, e = r ? s.length - 1 : i, o.scrollMinValForLabel = mathMax(mathRound(a.getVisibleConfig().minValue), 0) - 1, o.scrollMaxValForLabel = mathMin(mathRound(a.getVisibleConfig().maxValue) + 1, e) + 1;
  }drawPlots() {
    var e,
        t,
        o,
        a,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p = this,
        h = p.getFromEnv('chart'),
        m = p.config,
        f = h.config,
        u = f.plothovereffect,
        v = p.components.data,
        x = p.getContainer('shadowGroup'),
        b = m._oldStartIndex,
        E = m._oldEndIndex,
        y = p.getSkippingInfo && p.getSkippingInfo(),
        P = y && y.draw;for (g = m.scrollMinVal, d = m.scrollMaxVal, g > b && p.flushOnScroll(b, g > E ? E : g), d < E && p.flushOnScroll(d < b ? b : d, E), m._oldStartIndex = g, m._oldEndIndex = d, (t = g, c = d - 1); t < d; t++, c--) (e = P[t] || t, a = v[e], !!a) && (r = a.config, s = r.props.element.attr, p.plotAnimManager(a, s, e, d), l = a.trackerConfig, n = a.graphics.element, !!n) && (n.shadow(r.shadow, x).data('BBox', o), h.config.enablemousetracking && n.data(EVENTARGS, l.eventArgs).data(showHoverEffectStr, u).data(SETROLLOVERATTR, r.setRolloverAttr || {}).data(SETROLLOUTATTR, r.setRolloutAttr || {}));m.appearing && (m.appearing = !1);
  }setColumnPosition() {
    let e,
        t,
        o = this;if ((e = o.getFromEnv('plotWidth')) === UNDEF) {
      let t,
          a,
          i,
          n,
          r = o.getFromEnv('xAxis'),
          l = this.getFromEnv('chart-attrib'),
          s = o.getSkippingInfo(),
          g = s.plotsPerBin,
          d = mathMax((0, _lib.pluckNumber)(l.plotspacepercent), 0),
          c = mathMax((0, _lib.pluckNumber)(d, 20) % 100, 0),
          p = 1 === g ? c / 200 : 0,
          h = r.getPixel(0),
          m = r.getPixel(g),
          f = o.getFromEnv('chart'),
          u = f.isBar ? f.config.maxBarHeight : f.config.maxColWidth,
          v = mathAbs(m - h),
          x = !0;t = (1 - .01 * d) * v || mathMin(v * (1 - 2 * p), u * 1), e = t / 1, n = t / 2, a = h - n, i = m - n, i - (a + t) < 4 && (x = !1), 0 === c && (x = !0), o.addToEnv('isCrisp', x);
    }o.addToEnv('columnWidth', e), t = o.getFromEnv('shift') || 0, o.addToEnv('columnXShift', t - o.getFromEnv('columnWidth') / 2);
  }parsePlotAttributes(e, t) {
    var o,
        a,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p,
        h,
        m,
        f,
        u,
        v,
        b,
        E,
        y,
        P,
        S,
        w,
        k,
        F,
        C,
        _,
        V = this,
        A = V.config,
        I = V.config.JSONData,
        D = V.getFromEnv('chart'),
        T = D.getFromEnv('dataSource').chart,
        L = D.config.isstacked,
        O = V.config,
        M = V.groupManager,
        R = V.getJSONIndex(),
        G = t,
        i = V.getState('visible'),
        B = D.config,
        N = D.config.is3D,
        H = D.isBar,
        W = B.xDepth || 0,
        J = B.yDepth || 0,
        j = V.getFromEnv('yAxis'),
        X = V.getFromEnv('xAxis'),
        Y = B.showtooltip,
        z = !1 !== V.getState('visible'),
        U = V.components,
        Z = U.data,
        K = e.config,
        Q = j.getAxisBase(),
        $ = j.yBasePos = j.getPixel(Q),
        q = (0, _lib.pluckNumber)(O.plotborderthickness, B.plotborderthickness),
        ee = (0, _lib.pluckNumber)(B.useroundedges, 0),
        te = O.use3dlighting,
        oe = mathMin(A.yAxisMinPixel, A.yAxisMaxPixel),
        ae = M && M.stackConf,
        ie = V.getFromEnv('columnXShift'),
        ne = D.config.viewPortConfig,
        re = ne.x,
        x = ne.scaleX,
        le = (0, _lib.pluckNumber)(B.showplotborder);f = K.setLink, b = K.colorArr || [], X.config.isVertical ? (d = V.getFromEnv('columnWidth'), g = ie) : (l = V.getFromEnv('columnWidth'), s = ie), e.graphics || (Z[G].graphics = {}), v = K.displayValue, z || (K._Py = K._Pby), S = mathMin(K._Px, K._Pbx) + (s || 0) + re * x, w = mathMin(K._Py, K._Pby) + (g || 0), ae && (S -= l / 2), k = l || mathAbs(K._Px - K._Pbx), F = d || mathAbs(K._Py - K._Pby), o = H ? 0 < K._Px - K._Pbx ? crispRight : crispLeft : 0 < K._Py - K._Pby ? crispBottom : crispTop, m = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(K.origToolText, I.plottooltext, T.plottooltext))), V.fineTunePlotDimension && (_ = V.fineTunePlotDimension(S, w, F, k, G), S = _.xPos, w = _.yPos, k = _.width, F = _.height), a = S, n = w, c = k, p = F, r = X.getPixel(1) - X.getPixel(0) - (H ? p : c), isFinite(p) || (p = 0), i && (!(5 > r && 5 > V.getFromEnv('columnWidth')) && (y = (0, _lib.crispBound)(S, w, c, p, q, o, L)), y ? (a = y.x, n = y.y, q = y['stroke-width'], c = y.width, p = y.height || 1) : (a = S, n = w), X.config.isVertical ? a === oe && (a -= q, c += q) : n + p === oe ? p += q : n === oe && (n -= q, p += q), K.setRolloutAttr && (K.setRolloutAttr['stroke-width'] = q)), h = K.finalTooltext = !1 === K.toolText ? '' : K.toolText + (m ? '' : K.toolTipValue), E = K.plotBorderDashStyle, P = e.trackerConfig = {}, P.eventArgs = { index: G, link: f, value: K.setValue, displayValue: v, categoryLabel: K.origLabel, toolText: h, id: '', datasetIndex: R, datasetName: I.seriesname, visible: i }, C = $ === n + (0 < u ? p : 0), K.props = { element: { attr: { x: a || 0, width: c || 0, height: p || 0, y: n || 0, r: ee, fill: (0, _lib.toRaphaelColor)(b[0]) || '', stroke: le ? (0, _lib.toRaphaelColor)(b[1]) || '' : _lib.TRACKER_FILL, "stroke-width": le ? q : 0, "stroke-dasharray": E, "stroke-linejoin": 'miter', visibility: i, cursor: f ? POINTER : '' } } }, N && (K.props.element.attr.noGradient = !te, K.props.element.attr.xDepth = W, K.props.element.attr.yDepth = J), e._xPos = a + W, e._width = c, e._yPos = n - J, e._height = p, e._index = G, e._plotBorderThickness = q, (f || Y) && (p < HTP && (n -= (HTP - p) / 2, p = HTP), P.attr = { x: a, y: n, width: c, height: p, r: ee, cursor: f ? POINTER : '', stroke: _lib.TRACKER_FILL, "stroke-width": le ? q : 0, fill: _lib.TRACKER_FILL, visibility: i }), K.oldValue = u, e._oldYBaseTouched = C;
  }parseLabelAttributes(e) {
    var t,
        o,
        a,
        i,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p,
        h,
        m = this,
        f = m.getFromEnv('chart'),
        u = f.config,
        v = f.getFromEnv('smartLabel'),
        x = f.config.dataLabelStyle,
        b = m.config,
        E = b.legendInteractivity,
        y = m.getState('visible'),
        P = u.rotatevalues ? 270 : 0;return (d = e && e.config, g = d && d.setValue, e === UNDEF || g === UNDEF || null === g || !0 === d.labelSkip) ? (d && delete d.labelSkip, h = e && e.graphics, void (h && h.label && h.label.hide())) : (i = e.graphics, !!i) ? (l = e._yPos, s = e._xPos, o = d.displayValue, c = d.showValue, c && null !== g ? void ((!E || !d._state) && (a = v.getOriSize(o), d._state = P ? { labelWidth: a.height, labelHeight: a.width } : { labelWidth: a.width, labelHeight: a.height }), p = m._getValuePosition({ labelWidth: d._state.labelWidth, labelHeight: d._state.labelHeight, width: e._width, height: e._height, yPos: l, xPos: s, value: g }), r = p.textX, n = p.textY, !d.props && (d.props = {}), d.props.label = { attr: { x: r, y: n, text: o, "text-bound": [x.backgroundColor, x.borderColor || _lib.TRACKER_FILL, x.borderThickness, x.borderPadding, x.borderRadius, x.borderDash], opacity: y ? 1 : 0 } }, t = d.props.label.attr, !E && (t['line-height'] = x.lineHeight, t.fill = x.color)) : void (i.label && (i.label.attr({ "text-bound": [] }), i.label.hide()))) : void 0;
  }allocatePosition() {
    var e,
        t,
        o,
        a,
        n,
        r,
        l,
        s,
        g = this,
        d = g.getFromEnv('chart'),
        c = d.config,
        p = c.showpercentvalues,
        h = g.config,
        m = g.components.data.length,
        f = g.getFromEnv('yAxis'),
        u = g.components,
        v = u.data,
        x = c.isstacked,
        b = +c.stack100percent,
        E = g.getSkippingInfo && g.getSkippingInfo(),
        y = E && E.draw;for (g.deleteFromEnv('columnWidth'), g.setColumnPosition(), g.calculateScrollRange(), x && (b || p) && g.updateYForStack(), g.createCoordinates(), a = f.getLimit(), l = f.getPixel(a.max), s = f.getPixel(a.min), n = h.scrollMinVal, r = h.scrollMaxVal, l > s ? (h.yAxisMaxPixel = l, h.yAxisMinPixel = s) : (h.yAxisMaxPixel = s, h.yAxisMinPixel = l), t = 0; t < m; t++) (e = y[t] || t, !(d.hasScroll && (e < n || e > r))) && (o = v[e], !!o) && (g.parsePlotAttributes(o, e), g.parseLabelAttributes(o));
  }draw() {
    var e,
        t,
        o = this,
        a = o.config,
        i = o.getState('visible'),
        n = o.getFromEnv('xAxis'),
        r = n.getPixel(0),
        l = n.getPixel(1),
        s = o.getFromEnv('groupMaxWidth'),
        g = o.getFromEnv('chart'),
        d = g.config,
        c = d.xDepth || 0,
        p = o.getFromEnv('yAxis'),
        h = a.drawn,
        m = p.getLimit(),
        f = m.max,
        u = m.min,
        v = o._contextChanged(),
        x = o.getSkippingInfo && o.getSkippingInfo() || {},
        b = x.skippingApplied;s || (s = mathAbs(l - r), o.addToEnv('groupMaxWidth', s));(o.getState('removed') || o.getState('dirty') || v && i) && (!h && o.createContainer(), o.setContainerVisibility(!0), b && o.hidePlots(), o.drawPlots(), o.drawCommonElements && !o.config.skipCommonElements && o.drawCommonElements(), e = a.scrollMinValForLabel, t = a.scrollMaxValForLabel, a.drawn ? o.drawLabel(e, t) : o.addJob('labelDrawID', function () {
      o.drawLabel(e, t);
    }, _schedular.priorityList.label), a.drawn = !0, o.removePlots(), a.oldGroupMaxWidth = s, a.oldDataIsPositiveNegative = 0 < f && 0 > u, a.oldZeroAxisPos = p.getPixel(p.getAxisBase()) + c, o.drawErrorValue && o.drawErrorValue(), a.prevVisible = i, a.catDiff = 0);
  }show() {
    var e = this,
        t = e.getLinkedParent(),
        o = e.getFromEnv('legend');o && o.getItem(e.config.legendItemId) && o.getItem(e.config.legendItemId).removeLegendState('hidden'), e.setState('visible', !0), e.config.appearing = !0, e._conatinerHidden = !1, e.setState('dirty', !0), t.childChanged(), e.config.appearing = !1, e.asyncDraw();
  }hide() {
    var e = this,
        t = e.getLinkedParent(),
        o = e.getFromEnv('legend');o && o.getItem(e.config.legendItemId) && o.getItem(e.config.legendItemId).setLegendState('hidden'), e.setState('dirty', !0), e.setState('visible', !1), t.childChanged(), e.asyncDraw();
  }drawLabel(e, t) {
    var o,
        a,
        n,
        r,
        l,
        s,
        g,
        d,
        c,
        p,
        h,
        m,
        f,
        u = this,
        v = u.getFromEnv('chart'),
        x = u.getFromEnv('animationManager'),
        b = v.config,
        E = u.getFromEnv('xAxis'),
        y = u.getFromEnv('paper'),
        P = v.getFromEnv('smartLabel'),
        S = v.config.dataLabelStyle,
        w = u.config,
        k = E.getTicksLen(),
        F = u.components,
        C = F.data,
        _ = F.pool,
        V = b.rotatevalues ? 270 : 0,
        A = w.labelDrawn,
        I = u.getSkippingInfo && u.getSkippingInfo(),
        D = I && I.skippingApplied,
        T = I && I.labelDraw || [],
        L = T.length,
        O = (0, _lib.pluckNumber)(e, 0),
        M = (0, _lib.pluckNumber)(t, D ? L : k),
        R = L === Math.abs(M - (O + 1)),
        G = function (e) {
      return function () {
        'disappearing' === e && (this.attr({ "text-bound": [] }), this.hide());
      };
    };for (f = u.getContainer('labelGroup'), f.css({ fontFamily: S.fontFamily, fontSize: S.fontSize, fontWeight: S.fontWeight, fontStyle: S.fontStyle }), f.show(), P.useEllipsesOnOverflow(v.config.useEllipsesWhenOverflow), P.setStyle(S), r = O; r < M; r++) {
      if (n = D && R ? T[r] : r, o = C[n], d = o && o.config, g = d && d.setValue, o === UNDEF || g === UNDEF || null === g || !0 === d.labelSkip) {
        d && delete d.labelSkip, m = o && o.graphics, m && m.label && m.label.hide();continue;
      }if (l = o.graphics, !!l) {
        if (c = d.showValue, !c || null === g) {
          l.label && (l.label.attr({ "text-bound": [] }), l.label.hide());continue;
        }a = d.props.label.attr, s = o._xPos, !l.label && A && v.isRealTime && (p = (0, _lib.extend2)({}, a), p.x = a.x - s + (o._newXPos || 0), p.transform = y.getSuggestiveRotation(V, p.x, a.y), _ && _.label[0] && (l.label = _.label[0], _.label.splice(0, 1))), a.transform = y.getSuggestiveRotation(V, a.x, a.y), !(h = l.label) && _ && _.label[0] && (h = l.label = _.label[0], _.label.splice(0, 1)), h = x.setAnimation({ el: l.label || 'text', attr: a, component: u, label: 'plotLabel', index: n, container: f, callback: G(state) }), h && h.show(), l.label || (l.label = u.addGraphicalElement('plotLabel', h, !0));
      }
    }w.labelDrawn = !0;
  }_getValuePosition(e) {
    var t,
        o,
        a,
        i,
        n,
        r,
        l,
        s,
        g,
        d = this,
        c = d.getFromEnv('chart'),
        p = c.getChildren(),
        h = c.config,
        m = p.yAxis[0],
        f = h.xDepth || 0,
        u = h.yDepth || 0,
        v = h.canvasTop,
        x = h.canvasHeight + u,
        b = e.yPos,
        E = c.config.is3D,
        y = c.config.isstacked,
        P = h.valuepadding + 2,
        S = e.height,
        w = e.width,
        k = h.placevaluesinside,
        F = e.labelHeight,
        C = m.getAxisConfig('isReverse'),
        _ = e.value,
        V = e.xPos;return C || (0 > _ ? s = !1 : s = !0), n = (0, _lib.pluck)(s, 0 > _), r = g = F + P, i = S, l = .5 * g + P, a = b - l, o = V + .5 * w, n ? (t = v + x - (b + S + u), a = b) : t = b - v, y ? (a = b + .5 * S + (u || 0), a = mathMin(v + x - .5 * r, a), a = mathMax(v + .5 * r, a), o -= f) : k ? i >= r ? (a = b + (n ? S - l : l), E && (o -= f, a += u)) : t >= r ? (a = b + (n ? S + l : -l), E && n && (o -= f, a += u)) : (a = b + (n ? S - l : l), E && (o -= f, a += u)) : t >= r ? (a = b + (n ? S + l : -l), E && (n ? (o -= f, a += u) : o -= f / 2)) : i >= r + l ? (a = b + (n ? S - l : l), E && (o -= f, a += u)) : (a = b + (n ? S - l : l), E && (o -= f, a += u)), { textX: o, textY: a };
  }getDataLimits() {
    return { max: this.config.maxValue, min: this.config.minValue };
  }addData(e, t, o) {
    var a,
        n = this,
        r = n.components,
        l = r.data,
        s = e.data,
        g = s.length;for (r.addDataArr = e.data, 0 === t ? n.startPosition = !0 : (t + g === l.length || t === UNDEF) && (n.startPosition = !1), a = 0; a < g; a++) t === UNDEF ? l.push({ config: {} }) : l.splice(t + a, 0, { config: {} });n._setConfigure(e, t), o && n.asyncDraw();
  }removeData(e, t, o) {
    var a,
        n,
        r = this,
        l = r.getFromEnv('chart'),
        s = r.components,
        g = s.data,
        d = s.removeDataArr || (s.removeDataArr = []);for (t === UNDEF && (t = 1), e = e || 0, e + t !== g.length && l.isRealTime ? (0 === e || e === UNDEF) && (r.endPosition = !1) : r.endPosition = !0, s.removeDataArr = d = d.concat(g.splice(e, t)), n = d.length, a = n - 1; 0 <= a; a--) if (!d[a]) {
      d.splice(a, 1);continue;
    }r.removeDataLen = n, o && r.asyncDraw();
  }updateData(e, t, o) {
    var a = this,
        i = a.config,
        n = i.maxValue,
        r = i.prevMin,
        l = a.getFromEnv('chart'),
        s = a.groupManager || a,
        g = l.getFromEnv('xAxis'),
        d = l.getFromEnv('yAxis');a._setConfigure(e, t), a.getDataLimits(), (i.maxValue !== n || i.minValue !== r) && (a.maxminFlag = !0), o && (l._setAxisLimits(), g && g[0].asyncDraw(), d && d[0].asyncDraw(), s.asyncDraw());
  }removePlots() {
    var e = this,
        t = e.components,
        o = t && t.removeDataArr;_removePlots(o, e.__removeElem);
  }removeGraphicElem(e, t) {
    this.__removeElem(e, t);
  }getAxisValuePadding() {
    return this.config.defaultPadding;
  }getCanvasPadding() {
    var e,
        t,
        o,
        a,
        i,
        n,
        r = Math.max,
        l = this,
        s = l.config || (l.config = {}),
        g = l.components || {},
        d = l.getFromEnv('chart'),
        c = d.config.rotatevalues,
        p = l.getFromEnv('xAxis'),
        h = l.getFromEnv('yAxis'),
        m = d.config.dataLabelStyle,
        f = l.getSkippingInfo(),
        u = f.skippingApplied,
        v = f.draw,
        x = g.data || [],
        b = u ? v[0] : 0,
        E = u ? v[v.length - 1] : x.length - 1,
        y = s.leftMostData || x[b],
        P = s.rightMostData || x[E],
        S = {},
        w = {},
        k = 0,
        F = 0,
        C = 0,
        _ = p.getPixel(0),
        V = l.getFromEnv('smartLabel'),
        A = { paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 },
        I = 0,
        D = p.getValuePadding(),
        T = s.topMostData,
        L = s.bottomMostData;return l.setColumnPosition(), n = { xPosOffset: l.getFromEnv('columnXShift'), columnWidth: l.getFromEnv('columnWidth'), height: UNDEF }, y && (e = y.config, a = e.showValue, o = e && e.anchorProps || {}, a && (t = e.displayValue, V.useEllipsesOnOverflow(d.config.useEllipsesWhenOverflow), V.setStyle(m), w = V.getOriSize(t), I = c ? w.height : w.width), null !== e.setValue && (i = p.getPixel(D.left), k = o.enabled && (0, _lib.pluckNumber)(o.radius, 0) + (0, _lib.pluckNumber)(o.borderThickness, 0) / 2 || 0, C = k - (i - _), 0 > C && (C = 0), F = (I || 0) / 2 - (i - _) - (n && n.xPosOffset + n.columnWidth / 2 || 0), 0 > F && (F = 0)), A.paddingLeft = mathMax(C, F)), C = F = 0, P && (e = P.config, a = e.showValue, o = e && e.anchorProps || {}, a && !c && (t = e.displayValue, V.setStyle(m), S = V.getOriSize(t), I = c ? S.height : S.width), null !== e.setValue && (i = p.getPixel(D.right), k = o.enabled && (0, _lib.pluckNumber)(o.radius, 0) + (0, _lib.pluckNumber)(o.borderThickness, 0) / 2 || 0, C = k - (i - _), 0 > C && (C = 0), F = (I || 0) / 2 - (i - _) + (n && n.xPosOffset + n.columnWidth / 2 || 0), 0 > F && (F = 0)), A.paddingRight = mathMax(C, F)), T && (e = T.config, a = e.showValue, o = e && e.anchorProps || {}, null !== e.setValue && (k = (0, _lib.pluckNumber)(o.radius, 0) + (0, _lib.pluckNumber)(o.borderThickness, 0) / 2, F = r(k - (h.getPixel(e.setValue.y) - h.getPixel(h.getLimit().max)), 0)), A.paddingTop = F), L && (e = L.config, o = e && e.anchorProps || {}, null !== e.setValue && (k = (0, _lib.pluckNumber)(o.radius, 0) + (0, _lib.pluckNumber)(o.borderThickness, 0) / 2, F = r(k - (h.getPixel(h.getLimit().min) - h.getPixel(e.setValue.y)), 0)), A.paddingBottom = F), A;
  }getEventArgs() {
    var e = this,
        t = e.config || {},
        o = e.config.JSONData || {},
        a = { datasetName: o.seriesname, datasetIndex: e.getJSONIndex(), id: t.userID, visible: !e.getState('visible') };return a;
  }getData() {
    return this.components.data;
  }setJSONIndex(e) {
    this.config.index = e;
  }getJSONIndex() {
    return this.config.index || 0;
  }remove(e) {
    let t = this,
        o = t.config.legendItemId,
        a = t.getFromEnv('chart').getChildren('legend'),
        i = t.getFromEnv('legend');a && a.length && i && o && i.disposeItem(o), super.remove(e);
  }setMaxMin(e) {
    var t,
        o,
        a,
        n,
        r = this,
        l = r.components,
        s = l.data,
        g = l.removeDataArr,
        d = r.config,
        c = s.length,
        p = -Infinity,
        h = +Infinity,
        m = d.maxValue,
        f = d.minValue,
        u = g.length,
        v = !1;if (e) v = m === e.startValue || f === e.startValue;else if (u) for (t = 0; t < u; ++t) if (n = g[t] && g[t].config && g[t].config.setValue, m === n || f === n) {
      v = !0;break;
    }if (v) {
      for (t = 0; t < c; t++) s[t] && (o = s[t].config, a = o.setValue, a !== UNDEF && (p = mathMax(p, a), h = mathMin(h, a)));d.maxValue = p, d.minValue = h;
    }
  }
}exports._removePlots = _removePlots;
exports.default = ColumnDataset;
},{"../lib/lib":23,"../lib/lib-graphics":24,"../../core/component-interface":65,"../dependency-manager":20,"../animation-rules/column-animation":73,"../schedular":21}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sscartesian = require('./sscartesian');

var _sscartesian2 = _interopRequireDefault(_sscartesian);

var _column = require('../_internal/datasets/column');

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Column2D extends _sscartesian2.default {
  static getName() {
    return 'Column2D';
  }getName() {
    return 'Column2D';
  }__setDefaultConfig() {
    super.__setDefaultConfig(), this.config.friendlyName = 'Column Chart', this.config.singleseries = !0, this.config.defaultDatasetType = 'column', this.config.enablemousetracking = !0;
  }getDSdef() {
    return _column2.default;
  }
}exports.default = Column2D;
},{"./sscartesian":14,"../_internal/datasets/column":15}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function pluckNumber() {
  for (var i = 0; i < arguments.length; i++) {
    if (!isNaN(+arguments[i])) {
      return +arguments[i];
    }
  }
}

function defined(arg) {
  return typeof arg !== 'undefined';
}

var createData = function createData(i) {
  return {
    'value': i + '',
    'label': 'label ' + i
  };
};

var getObjectCopy = function getObjectCopy(obj) {
  var newObj = {},
      key = void 0;

  for (key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
};

exports.pluckNumber = pluckNumber;
exports.defined = defined;
exports.createData = createData;
exports.getObjectCopy = getObjectCopy;
},{}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = function () {
  function Generator() {
    _classCallCheck(this, Generator);

    this.dataSource = {};
    this.config = {};
  }

  _createClass(Generator, [{
    key: 'setDataFormat',
    value: function setDataFormat(dataType) {
      this.config.dataFormat = dataType;
    }
  }, {
    key: 'generate',
    value: function generate() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var generator = this,
          i = void 0,
          j = void 0,
          dataObj = void 0,
          dsCount = (0, _utils.pluckNumber)(config.dsCount),
          dataCount = (0, _utils.pluckNumber)(config.dataCount, 1),
          dataSource = generator.dataSource;

      if ((0, _utils.defined)(dsCount)) {
        dataSource.dataset = [];
        for (i = 0; i < dsCount; i++) {
          dataObj = {
            data: []
          };
          for (j = 0; j < dataCount; j++) {
            dataObj.data.push((0, _utils.createData)(i));
          }
          dataSource.dataset.push(dataObj);
        }
      } else {
        dataSource.data = [];
        for (i = 0; i < dataCount; i++) {
          dataSource.data.push((0, _utils.createData)(i));
        }
      }

      dataSource.chart = {
        'caption': 'Monthly',
        'xaxisname': 'Month',
        'yaxisname': 'Revenue',
        'numberprefix': '$',
        'showvalues': '1',
        'animation': '1'
      };

      return this;
    }
  }, {
    key: 'getData',
    value: function getData() {
      return (0, _utils.getObjectCopy)(this.dataSource);
    }
  }]);

  return Generator;
}();

exports.default = Generator;
},{"./utils":12}],4:[function(require,module,exports) {
'use strict';

var _core = require('fusioncharts/core');

var _core2 = _interopRequireDefault(_core);

var _column2d = require('fusioncharts/viz/column2d');

var _column2d2 = _interopRequireDefault(_column2d);

var _generator = require('./generator');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.addDep(_column2d2.default);

var generator = new _generator2.default();
var data = generator.generate({
  dataCount: 12
}).getData();

var isReady = function isReady() {
  var chartInstance = new _core2.default({
    id: 'stockRealTimeChart',
    type: 'column2d',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: data
  });
  chartInstance.render();
};

_core2.default.ready(isReady);
},{"fusioncharts/core":10,"fusioncharts/viz/column2d":8,"./generator":6}],236:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '60629' + '/');
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
},{}],237:[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require(56);b.register("js",require(237));
},{}]},{},[236,0,4], null)
//# sourceMappingURL=/renderer.82d30379.map