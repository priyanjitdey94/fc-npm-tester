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
})({134:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageGradientLegendSpace = exports._manageLegendSpace = undefined;

var _lib = require('../lib/lib');

function _manageLegendSpace() {
  var a,
      b,
      c,
      d,
      e = this,
      f = e.config,
      g = e.getChildren('legend') && e.getChildren('legend')[0],
      h = e.getChildren('gLegend') && e.getChildren('gLegend')[0],
      i = e.getFromEnv('dataSource').colorrange,
      j = f.hasLegend,
      k = {},
      l = e.hasGradientLegend,
      m = e.getFromEnv('dataSource').chart,
      n = (0, _lib.pluckNumber)(m.mapbycategory, 0),
      o = l && i && (0, _lib.pluckNumber)(i.gradient);o && !n ? (a = h.conf, l = !0, f.gLegendEnabled = !0, d = .5, b = a.legendPosition) : (a = g && g.config, l = !1, f.gLegendEnabled = !1, b = a && a.legendPos, d = b === _lib.POSITION_RIGHT ? .8 : .4), c = b === _lib.POSITION_RIGHT ? f.availableWidth * d : f.availableHeight * d, l ? k = e.manageGradientLegendSpace(c) : !1 !== j && g && !g.getState('removed') && (k = g && g._manageLegendPosition(c)), e._allocateSpace({ bottom: k && k.bottom || 0, right: k && k.right || 0 });
}function manageGradientLegendSpace(a) {
  var b,
      c,
      d,
      e,
      f = this,
      g = f.config,
      h = f.getFromEnv('gLegend'),
      i = h && h.conf;return g.gLegendPadding = (0, _lib.pluckNumber)(f.getFromEnv('chart-attrib').legendpadding, 10), d = Math.min(g.gLegendPadding, .5 * a), i ? (b = i.legendPosition, e = h.getLogicalSpace(a), c = b === _lib.POSITION_BOTTOM ? { bottom: (e.height || 0) + d } : { right: (e.width || 0) + d }) : c = { bottom: 0, right: 0 }, c;
}exports._manageLegendSpace = _manageLegendSpace;
exports.manageGradientLegendSpace = manageGradientLegendSpace;
},{"../lib/lib":23}],135:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b,
      c,
      d,
      e,
      f = a.getFromEnv('dataSource'),
      g = f.dataset,
      h = a.getChildren(),
      i = h.canvas[0],
      j = b = i.getChildren('vCanvas')[0],
      k = a.config.defaultDatasetType || '';return g ? void (d = a.getDSGroupdef(), d && ((0, _lib.componentFactory)(b, d, 'datasetGroup_' + k, 1, [g]), e = b.getChildren('datasetGroup_' + k)), e && (j = e[0]), c = a.getDSdef(), (0, _lib.datasetFactory)(j, c, 'dataset', g.length, g)) : void a.setChartMessage();
};

var _lib = require('../lib/lib');
},{"../lib/lib":23}],212:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "*.legendItem.legendItem": () => ({ "icon.appearing": () => [{ initialAttr: { opacity: 0 }, slot: 'plot', startEnd: { start: .5, end: 1 }, finalAttr: { opacity: 1 } }], "background.appearing": a => [{ initialAttr: { opacity: 0 }, slot: 'plot', startEnd: { start: .5, end: 1 }, finalAttr: { opacity: a.attr.opacity } }], "icon.disappearing": () => [{ finalAttr: { opacity: 0 }, slot: 'initial' }] }) };
},{}],175:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib/lib');

var _libGraphics = require('../../lib/lib-graphics');

var _componentInterface = require('../../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _dependencyManager = require('../../dependency-manager');

var _legendItemAnimation = require('../../animation-rules/legend-item-animation');

var _legendItemAnimation2 = _interopRequireDefault(_legendItemAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let POINTER = _lib.preDefStr.POINTER,
    NONE = 'none',
    M = 'M',
    L = 'L',
    _getSymbolPath = (a, b, c, d, e) => {
  var f,
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
      q = [M];return 'column' === e || 'dragColumn' === e || 'column3D' === e || 'realtimeColumn' === e || 'errorBar2D' === e ? (f = .25 * c, g = .5 * f, h = .7 * d, i = .4 * d, q = q.concat([a, b + d, 'l', 0, -h, f, 0, 0, h, 'z', 'm', f + g, 0, 'l', 0, -d, f, 0, 0, d, 'z', 'm', f + g, 0, 'l', 0, -i, f, 0, 0, i, 'z'])) : 'bar2D' === e || 'bar3D' === e ? (f = .3 * c, g = .6 * c, h = d / 4, i = h / 2, q = q.concat([a, b, L, a + g, b, a + g, b + h, a, b + h, 'Z', M, a, b + h + i, L, a + c, b + h + i, a + c, b + h + i + h, a, b + 2 * h + i, 'Z', M, a, b + 2 * (h + i), L, a + f, b + 2 * (h + i), a + f, b + d, a, b + d, 'Z'])) : 'area' === e || 'area3d' === e || 'areaspline' === e || 'dragArea' === e || 'realTimeArea' === e || 'splinearea' === e ? (f = .3 * c, g = .6 * c, h = .6 * d, i = .2 * d, j = .8 * d, q = q.concat([a, b + j, L, a, b + h, a + f, b + i, a + g, b + h, a + c, b + i, a + c, b + j, 'Z'])) : 'pie2D' === e || 'pie3d' === e || 'doughnut2D' === e || 'doughnut3D' === e ? (f = .5 * c, g = .9 * f, o = 1, p = 1, k = a + f + o, m = b + f - o, l = a + f - p, n = b + f + p, q = q.concat([k, m, L, k, m - g + o, 'A', g - o, g - o, 0, 0, 1, k + g - o, m, 'Z', M, l, n, L, l, n - g, 'A', g, g, 0, 1, 0, l + g, n, 'Z'])) : 'boxandwhisker2d' === e ? q = q.concat([a, b, L, a + c, b, a + c, b + d, a, b + d, 'Z']) : q = q.concat([a, b, L, a + c, b, a + c, b + d, a, b + d, 'Z']), { path: q };
},
    getAnchorProps = function (a, b) {
  let c = a.config,
      d = a.getLinkedParent().config,
      e = d.symbolWidth,
      f = (0, _lib.pluckNumber)(d.padding, 4),
      g = .5 * e,
      h = (d.initialItemX || 0) + c._legendX + f,
      i = (d.initialItemY || 0) + c._legendY - f,
      j = h + d.symbolPadding + g,
      k = i + (c._markerYGutter || 0) + d.symbolPadding + g,
      l = (0, _libGraphics.mapSymbolName)(c.anchorSide),
      m = c.symbol = l && l.split('_') || [],
      n = 'spoke' === m[0] ? 1 : 0;return ('line' === c.type || c.drawLine) && (g *= .6), { path: (0, _lib.polyPathToPath)([m[1] || 2, j, k, g, c.startAngle, c.spoke || n]), cursor: b.cursor || POINTER, stroke: b.stroke, fill: b.fill, "stroke-width": b['stroke-width'] || .5 };
};(0, _dependencyManager.addDep)({ name: 'legendItemAnimation', type: 'animationRule', extension: _legendItemAnimation2.default });class LegendItem extends _componentInterface2.default {
  constructor() {
    super(), this._stateCosmetics = {}, this._legendState = [];
  }getName() {
    return 'legendItem';
  }parseLegendCosmetics() {
    let a,
        b,
        c,
        d = this,
        e = this.getLinkedParent(),
        f = e.getLegendState(),
        g = d.getLegendState(),
        h = ['default'],
        j = {};for (h = h.concat(f, g), c = 0; c < h.length; c++) a = e.getStateCosmetics(h[c]), b = d.getStateCosmetics(h[c]), a && ('function' == typeof a ? j = a(j, d) : (0, _lib.extend2)(j, a)), b && ('function' == typeof b ? j = b(j, d) : (0, _lib.extend2)(j, b));return j;
  }getType() {
    return 'legendItem';
  }configure(a) {
    var b,
        c,
        d = this,
        e = d.config;for (b in a) if (a.hasOwnProperty(b)) if ('object' != typeof a[b]) e[b] = a[b];else {
      let d = e[b] ? e[b] : {};for (c in a[b]) d[c] = a[b][c];e[b] = d;
    }
  }itemClickFn() {
    let a = this,
        b = a.getFromEnv('chart-attrib'),
        c = (0, _lib.pluckNumber)(b.interactivelegend, 1),
        d = a.getLinkedItem('owner');c && d.legendInteractivity(a);
  }dispose() {
    this.removeEventListener('click', this.click), this.removeEventListener('mouseover', this.mouseover), this._dispose();
  }getLegendState() {
    return this._legendState;
  }hasState(a) {
    var b,
        c,
        d = this.getLegendState();for (b = 0, c = d.length; b < c; b++) if (d[b] === a) return !0;return !1;
  }setLegendState(a, b) {
    this.hasState(a) || (b ? this._legendState.push(a) : this._legendState.unshift(a)), this.asyncDraw();
  }removeLegendState(a) {
    var b,
        c,
        d = 1;if (a) for (b = 0, c = this._legendState.length; b < c && d; b++) a === this._legendState[b] && (this._legendState.splice(b, 1), d = 0);else this._legendState.length = 0;this.asyncDraw();
  }removeStateCosmetics(a) {
    delete this._stateCosmetics[a];
  }setStateCosmetics(a, b) {
    this._stateCosmetics[a] = b;
  }getStateCosmetics(a) {
    return this._stateCosmetics[a];
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
        N,
        O,
        P,
        Q,
        R = this.getLinkedParent(),
        S = R.getFromEnv('chart'),
        T = S.config,
        U = this,
        V = U.getFromEnv('animationManager'),
        W = U.config,
        X = R.config,
        Y = X.legendHeight,
        Z = X.symbolPadding,
        $ = X.symbolWidth,
        _ = X.interactiveLegend,
        aa = X.textPadding || 2,
        ba = (0, _lib.pluckNumber)(X.padding, 4),
        ca = X.itemHoverStyle,
        da = R.getChildContainer('itemGroup'),
        ea = X.drawCustomLegendIcon,
        fa = U.hasState('hidden'),
        ga = {};a = U.parseLegendCosmetics(), c = a.symbol, d = X.initialItemX || 0, e = X.initialItemY || 0, i = W.type, t = a.symbol.stroke || '000000', u = a.symbol.fill, b = a.symbol.lineWidth || X.lineWidth, w = W.anchorSide, x = W.drawLine, j = d + W._legendX + ba, k = e + W._legendY - ba, G = U.getGraphicalElement('legendItemBackground'), h = U.getGraphicalElement('legendItemText'), l = U.getGraphicalElement('legendItemLine'), o = U.getGraphicalElement('legendItemSymbol'), _ = (0, _lib.pluck)(W.interactiveLegend, _), _ || (a.cursor = 'default'), H = a.text, P = j + Y + aa - 2, Q = k + (W._legendTestY || 0), H.text = W.name, H.x = P, H.y = Q, g = V.setAnimation({ el: h || 'text', attr: H, component: U, container: da, label: 'icon' }), h || (g = U.addGraphicalElement('legendItemText', g)), g.data('legendItem', W), I = !1, ea && !1 !== W.customLegendIcon ? (B = !fa && c.borderColor, C = (0, _lib.pluck)(c.borderAlpha), z = !fa && c.bgColor, A = (0, _lib.pluck)(c.bgAlpha, '100'), D = a.symbol.rawFillColor, u = fa ? a.symbol.fill : z || D, u = (0, _libGraphics.convertColor)(u, A), E = a.symbol.rawStrokeColor, t = fa ? a.symbol.stroke : B || E || D, t = (0, _libGraphics.convertColor)(t, C), q = .5 * $, p = j + Z + q, f = k + (W._markerYGutter || 0) + Z + q, y = (0, _libGraphics.mapSymbolName)(c.sides), s = y && (0, _libGraphics.mapSymbolName)(c.sides).split('_') || [], r = 'spoke' === s[0] ? 1 : 0, J = { path: (0, _lib.polyPathToPath)([s[1] || 2, p, f, q, c.startAngle || 0, r]), cursor: a.symbol.cursor || POINTER, stroke: t, fill: u, "stroke-width": (0, _lib.pluckNumber)(c.borderThickness, 1) }) : 'line' === i || x ? (f = k + (W._markerYGutter || 0) + Z + .5 * $, O = { path: [M, j + Z, f, L, j + Z + $, f] }, I = !0, ga = { opacity: T.legendiconalpha || 1, "stroke-width": b, stroke: t, cursor: a.cursor || POINTER }, w && (J = getAnchorProps(U, a.symbol))) : w ? J = getAnchorProps(U, a.symbol) : 'line' !== i && (t = W.symbolStroke || t, m = _getSymbolPath(j + Z, k + (W._markerYGutter || 0) + Z, $, $, i), J = { path: m.path, "stroke-width": .5, stroke: t, fill: u, cursor: a.cursor || POINTER }), O && I ? (Object.assign(O, ga), l = V.setAnimation({ el: l || 'path', attr: O, component: U, callback: function () {
        this.show();
      }, container: da }), !U.getGraphicalElement('legendItemLine') && (l = U.addGraphicalElement('legendItemLine', l))) : l && l.hide(), J && (J.opacity = (0, _lib.pluckNumber)(a.symbol.opacity, 1), n = V.setAnimation({ el: o || 'path', attr: J, component: U, callback: function () {
        this.show();
      }, container: da, label: 'icon' }), (!o || !o.node) && (n = U.addGraphicalElement('legendItemSymbol', n)), n.data('legendItem', W)), v = a.background && a.background.legendBackgroundColor ? (0, _libGraphics.convertColor)(a.background.legendBackgroundColor, a.background.alpha) : _lib.TRACKER_FILL, K = { x: j, y: k, width: W._totalWidth, height: W._legendH, r: 0, fill: v, opacity: 1, "stroke-width": 1, stroke: NONE, cursor: a.symbol.cursor || POINTER }, F = V.setAnimation({ el: G || 'rect', attr: K, css: N, component: U, label: 'background', container: da }), G || U.addGraphicalElement('legendItemBackground', F), F.data('legendItem', U).data('interactive', _).data('itemHoverStyle', ca).data('itemStyle', a);
  }
}exports.default = LegendItem;
},{"../../lib/lib":23,"../../lib/lib-graphics":24,"../../../core/component-interface":65,"../../dependency-manager":20,"../../animation-rules/legend-item-animation":212}],174:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let appearing = [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'plot' }],
    updating = [{ slot: 'plot', startEnd: { start: 0, end: .5 } }],
    disappearing = [{ slot: 'intial' }];exports.default = { "*.legend.legend": () => ({ "legendGroup.appearing": appearing, "legendGroup.updating": updating, "legendGroup.disappearing": disappearing, "scroller.appearing": appearing, "scroller.updating": updating, "scroller.disappearing": disappearing }) };
},{}],142:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib/lib');

var _libGraphics = require('../../lib/lib-graphics');

var _componentInterface = require('../../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _legendItem = require('./legend-item');

var _legendItem2 = _interopRequireDefault(_legendItem);

var _dependencyManager = require('../../dependency-manager');

var _legendAnimation = require('../../animation-rules/legend-animation');

var _legendAnimation2 = _interopRequireDefault(_legendAnimation);

var _schedular = require('../../schedular');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    TEXT_ANCHOR_MAP = { left: _lib.POSITION_START, right: _lib.POSITION_END, center: _lib.POSITION_MIDDLE },
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathFloor = math.floor,
    mathCeil = math.ceil,
    COMMA = ',',
    NONE = 'none',
    NORMAL = _lib.preDefStr.NORMAL,
    BOLD = _lib.preDefStr.BOLD,
    noneStr = _lib.preDefStr.noneStr,
    styleValueMap = { fontWeight: { 1: BOLD, 0: NORMAL }, fontStyle: { 1: 'italic', 0: NORMAL }, textDecoration: { 1: 'underline', 0: noneStr } },
    handlers = function (a) {
  let b, c;return { dragstart: () => {
      b = a.config.xL || a.config.xPos, c = a.config.yL || a.config.yPos;
    }, dragmove: d => {
      let e,
          f,
          g = d.originalEvent.data[0],
          h = d.originalEvent.data[1],
          i = a.config,
          j = a.getFromEnv('chartConfig'),
          k = (i.borderWidth || 0) + 2;e = mathMin(mathMax(b + g, k), j.width - i.width - k), f = mathMin(mathMax(c + h, k), j.height - i.height - k), i.xPos = i.xL = e, i.yPos = i.yL = f, a.addJob('draw', a.dragDraw, _schedular.priorityList && _schedular.priorityList.draw);
    } };
};(0, _dependencyManager.addDep)({ name: 'legendAnimation', type: 'animationRule', extension: _legendAnimation2.default });class Legend extends _componentInterface2.default {
  constructor() {
    super();let a = this;a._stateCosmetics = {}, a._legendState = [], a.dragDraw = function () {
      a.draw();
    }, a.drawScroll = function () {
      a.createItemGroup();
    }, a.config.handlers = handlers(a);
  }createItem(a) {
    var b,
        c = this;return b = new _legendItem2.default(), c.attachChild(b, 'legendItem'), b.setLinkedItem('owner', a), b.addEventListener('mouseover', function () {
      b.setLegendState('hover', !0);
    }), b.addEventListener('mouseout', function () {
      b.removeLegendState('hover');
    }), b.getId();
  }getItem(a) {
    var b = this,
        c = b.getChildren().legendItem;if (!(a !== UNDEF)) return !1;else if (c) for (let b = 0; b < c.length; b++) if (c[b].getId() === a) return c[b];
  }getSortedLegendItems() {
    let a,
        b,
        c = this,
        d = c.getChildren('legendItem') || [],
        e = c.config.reverselegend,
        f = {},
        g = [];for (a = 0, b = d.length; a < b; a++) d[a].config.index === UNDEF ? f[b + a] = d[a] : f[d[a].config.index] = d[a];return Object.keys(f).sort(function (a, b) {
      return e ? b - a : a - b;
    }).forEach(a => {
      g.push(f[a]);
    }), g;
  }disposeItem(a) {
    var b = this,
        c = b.getItem(a);c && c.remove();
  }getName() {
    return 'legend';
  }getType() {
    return 'legend';
  }__setDefaultConfig() {
    super.__setDefaultConfig();let a = this.config;a.enabled = !0, a.symbolWidth = 12, a.borderRadius = 1, a.lastScrollPos = 0, a.oriSymbolPadding = 3, a.textPadding = 4, a.scrollY = 0, a.backgroundColor = '#FFFFFF', a.initialItemX = 0, a.title = { text: _lib.BLANKSTRING, x: 0, y: 0, padding: 2 }, a.scroll = {}, a.itemStyle = {};
  }createLegendGroup() {
    let a,
        b = this,
        c = b.config,
        d = b.getFromEnv('chart'),
        e = d.config,
        f = b.getFromEnv('animationManager'),
        g = .5 * (c.borderWidth || 0) + 2,
        h = b.getContainer('legendGroup');c.xL && (c.xL = mathMin(mathMax(c.xL, g), e.width - c.width - g)), c.yL && (c.yL = mathMin(mathMax(c.yL, g), e.height - c.height - g)), a = f.setAnimation({ el: h || 'group', attr: { name: 'legendGroup', transform: ['T', c.xL || c.xPos, c.yL || c.yPos] }, container: d.getChildContainer('legendGroup'), component: b }), h || b.addContainer('legendGroup', a);
  }draw() {
    this.createLegendGroup(), this.drawLegendBox(), this.createItemGroup(), this.drawCaption(), this.decideScroll();
  }decideScroll() {
    let a = this,
        b = a.getFromEnv('animationManager'),
        c = a.config,
        d = a.getLinkedItem('legendScrollBar'),
        e = c.scroll.enabled;e ? (this.createScrollGroup(), this.createScrollBar()) : c.hasScroll && (a.removeLinkedItem('legendScrollBar'), b.setAnimation({ el: a.getChildContainer('itemGroup'), attr: { "clip-rect": null, transform: 'none' }, component: a }), d.config.node.hide(), c.scrollY = 0, c.hasScroll = !1);
  }createItemGroup() {
    var a,
        b = this,
        c = b.getFromEnv('animationManager'),
        d = b.getContainer('legendGroup'),
        e = b.getChildContainer('itemGroup');return a = c.setAnimation({ el: e || 'group', attr: { name: 'item', transform: ['T', 0, b.config.scrollY || 0] }, container: d, component: b }), e || b.addChildContainer('itemGroup', a), a;
  }createScrollGroup() {
    let a,
        b = this,
        c = b.getFromEnv('animationManager'),
        d = b.getChildContainer('scrollGroup'),
        e = b.getContainer('legendGroup');a = c.setAnimation({ el: d || 'group', attr: { name: 'scrollGroup' }, container: e, component: b, label: 'scroller' }), d || b.addChildContainer('scrollGroup', a);
  }createScrollBar() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        i,
        j = this,
        k = j.config,
        l = j.getLinkedItem('legendScrollBar'),
        m = j.getChildContainer('itemGroup'),
        n = j.getFromEnv('toolbox'),
        o = j.getFromEnv('toolBoxAPI'),
        p = o && o.Scroller,
        q = k.borderWidth || 0,
        r = (0, _lib.pluckNumber)(k.padding, 4),
        s = .5 * r,
        t = k.scroll,
        u = k.width,
        v = k.height;a = { conf: { isHorizontal: !1, color: (0, _libGraphics.convertColor)(j.getFromEnv('chart-attrib').legendscrollbgcolor) }, handler: { scroll: function (a) {
          k.lastScrollPos = a, k.scrollY = (d - k.totalHeight) * a, j.addJob('scrollDraw', j.drawScroll, _schedular.priorityList && _schedular.priorityList.draw);
        }, mousedown: function (a) {
          a.preventDefault(), a.stopPropagation();
        } } }, l || (l = new p(), l.configure(a.conf, (n.idCount || 0) + 1, n.pId, j.getFromEnv('chartInstance').id), l.attachEventHandlers(a.handler), this.setLinkedItem('legendScrollBar', l), this.config.hasScroll = !0), b = '0,', d = v - r, c = COMMA + u + COMMA + d, m.attr({ "clip-rect": b + s + c }), f = u - 10 + s - q, g = .5 * q, i = v - q, e = { scrollPosition: t.scrollPosition || 0, scrollRatio: (d + r) / k.totalHeight, showButtons: !1, displayStyleFlat: t.flatScrollBars }, l.draw(f, g, { height: i, scrollRatio: e.scrollRatio, startPercent: 0, scrollPosition: k.lastScrollPos || 0, color: k.legendScrollBgColor, parentLayer: j.getChildContainer('scrollGroup') });
  }drawCaption() {
    var a,
        b,
        c,
        d,
        e = this,
        f = e.getChildContainer('itemGroup'),
        g = e.getGraphicalElement('caption'),
        h = this.getFromEnv('animationManager'),
        i = this.config,
        j = (0, _lib.pluckNumber)(i.padding, 4),
        k = i.scroll.enabled,
        l = i.width;if (i.title && i.title.text !== _lib.BLANKSTRING && i.validLegendItem) {
      switch (i.title.align) {case _lib.POSITION_START:
          c = j;break;case _lib.POSITION_END:
          c = l - j - (k ? 10 : 0);break;default:
          c = .5 * l;}b = i.title.style, a = { text: i.title.text, title: i.title.originalText || _lib.BLANKSTRING, x: c, y: j, fill: i.title.style.color, direction: i.textDirection, "line-height": b.lineHeight, "vertical-align": _lib.POSITION_TOP, "text-anchor": i.title.align, opacity: 1 }, d = { "font-weight": b.fontWeight, "font-style": b.fontStyle, "font-family": b.fontFamily, "font-size": b.fontSize }, g ? h.setAnimation({ el: g, attr: a, component: e }) : (g = h.setAnimation({ el: 'text', attr: a, component: e, container: f }), g = this.addGraphicalElement('caption', g), g.css(d), g.show()), e.getFromEnv('toolTipController').enableToolTip(g, i.title.originalText);
    } else g && h.setAnimation({ el: g, component: e, callback: function () {
        g.hide();
      } });
  }drawLegendBox() {
    var a,
        b = this,
        c = this.getFromEnv('animationManager'),
        d = b.config,
        e = b.getContainer('legendGroup'),
        f = d.width,
        g = b.getGraphicalElement('box'),
        h = d.height,
        i = d.borderRadius,
        j = d.backgroundColor,
        k = d.borderColor,
        l = d.borderAlpha,
        m = d.backgroundAlpha,
        n = d.borderWidth || 0;return a = c.setAnimation({ el: g || 'rect', attr: { x: 0, y: 0, width: f, height: h, r: i, stroke: k, "stroke-width": n, fill: j || NONE, "stroke-opacity": l / 100, "fill-opacity": m / 100, cursor: d.legendAllowDrag ? 'move' : 'default' }, container: e, component: b, label: 'legendGroup' }), g || (b.addGraphicalElement('box', a), a.shadow(d.shadow)), a;
  }getPosition() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = this,
        h = g.getFromEnv('chart'),
        i = h.config,
        j = g.config,
        k = i.height - i.canvasBottom,
        l = i.canvasLeft,
        m = i.canvasWidth,
        n = j.chartMarginLeft || 0,
        o = j.chartMarginRight || 0,
        p = j.chartMarginBottom || 0,
        q = i.actionBarHeight || 0,
        r = j.actualCanvasMarginLeft || 0,
        s = i.actualCanvasMarginBottom || 0,
        t = i.actualCanvasMarginRight || 0,
        u = j.alignLegendWithCanvas,
        v = i.height,
        w = i.canvasTop,
        x = j.width || 0,
        y = j.height || 0,
        z = i.borderWidth,
        A = i.oriCanvasLeft,
        B = i.oriTopSpace,
        C = i.oriBottomSpace,
        D = 0,
        E = 0,
        F = j.borderWidth || 0,
        G = j.legendPos;return G === _lib.POSITION_RIGHT && (j.align = _lib.POSITION_RIGHT, j.verticalAlign = _lib.POSITION_MIDDLE, f = j.layout = 'vertical'), f ? (a = i.width - o - t - x - z, D = (0, _lib.pluckNumber)(B, w), E = (0, _lib.pluckNumber)(C, k), b = D + .5 * (v - E - D - y) + (j.y || 0)) : (d = i.width - (n + r + (o + t)), e = u ? m - x : d - x, c = u ? (0, _lib.pluckNumber)(A, l) : n + r, a = c + e / 2, b = v - y - s - p - q), (0, _lib.crispBound)(a, b, x, y, F);
  }reverseLegendFn() {
    var a,
        b,
        c = this,
        d = c.config.items || [],
        e = [],
        f = d.length,
        g = 0,
        h = c.config;for (a = f - 1; 0 <= a; a--) d[a].configuration.mainDS ? (b = a, e = e.concat(d.splice(b, g + 1)), g = 0) : g++;e.length && (h.orderReversed = !0, c.config.items = e.slice(0));
  }allocatePosition() {
    var a = this,
        b = a.config,
        c = a.getPosition();b.xPos = c.x, b.yPos = c.y, b.width = c.width, b.height = c.height;
  }_manageLegendPosition(a) {
    var b,
        c = this,
        d = c.config,
        e = c.getFromEnv('chart').hasSubDataset,
        f = d.legendPos,
        g = c.getChildren().legendItem,
        h = d.reversed,
        i = d.prevReversed;return h === i ? e && d.orderReversed && c.reverseLegendFn() : e ? !d.orderReversed && c.reverseLegendFn() : g && g.reverse(), d.prevReversed = d.reversed, b = f === _lib.POSITION_RIGHT ? c._placeLegendBlockRight(a) : c._placeLegendBlockBottom(a), b;
  }_placeLegendBlockBottom(a) {
    var b,
        c,
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
        F = E.getFromEnv('chart'),
        G = F.config,
        H = G.width,
        I = G.height,
        J = G.canvasLeft,
        K = G.width - (G.canvasRight || 0),
        L = F.getFromEnv('smartLabel'),
        M = E.config,
        N = M.chartMarginLeft,
        O = M.chartMarginRight,
        P = M.chartMarginTop,
        Q = M.alignLegendWithCanvas,
        R = M.minimiseWrappingInLegend,
        S = M.legendScale,
        T = M.numColumns,
        U = M.padding,
        V = 2 * a,
        W = 2 * U,
        X = { width: W, height: W },
        Y = M.title,
        Z = Y.padding,
        $ = E.getStateCosmetics('default'),
        _ = parseInt($.text['font-size'], 10) || 10,
        aa = E.getSortedLegendItems(),
        ba = aa.length,
        ca = M.oriSymbolPadding,
        da = M.textPadding,
        ea = M.legendPadding,
        fa = G.canvasMarginRight,
        ga = G.canvasMarginLeft,
        ha = F.getChildren('yAxis'),
        ia = ha && ha[0].config.isVertical ? ha : F.getChildren('xAxis'),
        ja = ia && ia[0],
        ka = ia && ia[1],
        la = ja && ja.config || {},
        ma = ka && ka.config || {},
        na = la.nameMaxW,
        oa = ma.nameMaxW,
        pa = la.name && la.name.style || {},
        qa = ma.name && ma.name.style || {},
        ra = la.axisName || _lib.BLANKSTRING,
        sa = ma.axisName || _lib.BLANKSTRING,
        ta = 0,
        ua = 0,
        va = 0,
        wa = 0,
        xa = 0,
        ya = 0,
        za = 0,
        Aa = 0,
        Ba = [],
        Ca = !1,
        Da = 0,
        Ea = 0,
        Fa = G.canvasWidth - G.canvasMarginLeft - G.canvasMarginRight,
        Ga = Fa;if (M.paddingBottom = G.height - G.canvasBottom, L.useEllipsesOnOverflow(G.useEllipsesWhenOverflow), L.setStyle(pa), t = L.getOriSize(ra), L.setStyle(qa), u = L.getOriSize(sa), v = _ + 1, 0 >= v && (v = 1), Fa -= W, v *= S, ca *= S, v = mathMin(v, Fa), 0 >= v && (ca = v = 0), M.symbolWidth = v, M.textPadding = 4, M.legendHeight = m = v + 2 * ca, M.rowHeight = d = mathMax(parseInt($.text['line-height'], 10) || 12, m), c = da + ca + U, L.setStyle((0, _lib.extend2)({}, $.text)), f = L.getOriSize(_lib.TESTSTR).height, e = ea + M.borderWidth / 2 + 1, e = mathMin(e, a - f - 8), ea = .05 * d, (t || u) && (r = (0, _lib.pluckNumber)(t.height, 0) > (0, _lib.pluckNumber)(u.height, 0) ? (s = na) && t.width : (s = oa) && u.width), Fa = Q ? Fa : H - (r + P > I - a ? 2 * s + O + N + fa + ga : O + N + ga + fa), M.initialItemY = 0, M.initialItemX = 0, !M.showLegend || 0 === ba) e = 0, M.height = 0, M.width = 0;else {
      for (g = 0; g < ba; g += 1) {
        if (b = aa[g], B = b.config || (b.config = {}), A = B, C = B.name = (0, _lib.parseUnsafeString)(A.label), C === _lib.BLANKSTRING || 0 === A.enabled || !1 === A.enabled || b.getState('removed')) {
          B.enabled = 0;continue;
        } else B.enabled = 1;va += 1, h = !0, k = L.getOriSize(C), ta = mathMax(ta, k.width), ya = mathMax(ya, mathMin(k.height, V)), ua += k.width;
      }if (M.validLegendItem = h, wa = ua / va, l = m + ea + da + ca + W, ua += l * va, M.x = (J - N - K + O) / 2, M.x = !Q && ua > Ga ? 0 : M.x, h) {
        for (wa += l, ta += l, 0 < T && va < T && (T = va), ua <= Fa && (0 >= T || T === va) ? (T = va, xa = wa = ua / va, Ca = !0, ya > d && (Aa = (ya - d) / 2, d = ya)) : 0 < T && (xa = Fa / T) > wa ? xa > ta && (xa = ta) : Fa > ta && (R || 1.5 * wa > ta) ? (T = mathFloor(Fa / ta), va < T && (T = va), xa = ta) : Fa >= 2 * wa ? (T = mathFloor(Fa / wa), va < T && (T = va), xa = mathFloor(Fa / T), xa > ta && (xa = ta)) : (T = 1, xa = Fa), M.itemWidth = xa, p = mathCeil(xa - l), 0 > p && (ca = p = da = 0), M.symbolPadding = ca, M.textPadding = da, M.width = xa * T - ea, Y.text !== _lib.BLANKSTRING && (L.setStyle(Y.style), k = L.getSmartText(Y.text, Fa, V), Y.text = k.text, k.tooltext && (Y.originalText = k.tooltext), z = k.width + W, M.width < z && (M.initialItemX = (z - M.width) / 2, M.width = z), M.initialItemY = za = k.height + Z), L.setStyle((0, _lib.extend2)({}, $.text)), g = 0; g < ba; g += 1) if (b = aa[g], B = b.config, 0 !== B.enabled) {
          if (0 === p && (Ba[Ea] = !0, B.name = _lib.BLANKSTRING, q = 1, n = parseInt(Ea / T, 10), o = Ea % T, B._legendX = o * xa, B._legendY = n * d + W, B._legendH = q * d, B._totalWidth = v + ca), Ca) k = L.getOriSize(B.name), k.height < d && (B._legendTestY = (d - k.height) / 2), B._markerYGutter = Aa, B._legendX = Da, B._legendY = W, B._legendH = d, B._totalWidth = v + c + k.width, Da += k.width + l;else {
            for (k = L.getSmartText(B.name, p, V), B.name = k.text, k.tooltext && (B.originalText = k.tooltext); !0 === Ba[Ea];) Ea += 1;for (x = k.height / d, y = Ea, q = 0; q < x; q += 1, y += T) Ba[y] = !0;k.height < d && (B._legendTestY = (d - k.height) / 2), n = parseInt(Ea / T, 10), o = Ea % T, B._legendX = o * xa, B._legendY = n * d + W, B._legendH = q * d, B._totalWidth = v + c + k.width;
          }Ea++;
        }w = Ca ? 1 : mathCeil(Ba.length / T), X.height += w * d + za, M.height = M.totalHeight = X.height, M.rowHeight = d, M.legendNumColumns = T, M.height - 2 * ca > a ? (M.height = a, D = M.scroll || (M.scroll = {}), D.enabled = !0, D.flatScrollBars = M.flatScrollBars, D.scrollBar3DLighting = M.scrollBar3DLighting, M.width = M.width + 12 > Fa ? M.width : M.width + 12) : M.scroll.enabled = !1, e += M.height, M.isActive = !0, M.enabled = !0;
      } else M.enabled = !1, M.width = 0, e = 0;
    }return { bottom: e, right: 0 };
  }_placeLegendBlockRight(a) {
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
        m = this,
        n = m.config,
        o = m.getFromEnv('chart'),
        p = o.config,
        q = o.getFromEnv('smartLabel'),
        r = o.getChildren('canvas')[0].config.canvasBorderThickness || 0,
        s = n.textPadding,
        t = n.title.padding,
        u = n.oriSymbolPadding,
        v = n.legendPadding,
        w = n.legendScale,
        x = m.getStateCosmetics('default'),
        y = parseInt(x.text['font-size'], 10),
        z = p.canvasHeight,
        A = 2 * z,
        B = 0,
        C = n.padding,
        D = 2 * C,
        E = { width: D, height: D },
        F = {},
        G = !1,
        H = m.getSortedLegendItems(),
        I = H.length,
        J = 0;if (n.initialItemY = 0, n.initialItemX = 0, a -= D + v, e = y + 1, 0 >= e && (e = 1), e *= w, u *= w, e = mathMin(e, a), 0 >= e && (u = e = 0), n.symbolPadding = u, n.symbolWidth = e, n.legendHeight = f = e + 2 * u, n.rowHeight = mathMax(parseInt(x.text['line-height'], 10) || 12, f), b = v + n.borderWidth / 2 + r, d = a - f - v - s, 0 > d && (d = 0), q.useEllipsesOnOverflow(p.useEllipsesWhenOverflow), q.setStyle((0, _lib.extend2)({}, x.text)), !n.showLegend || 0 === I) F.right = 0, n.height = 0, n.width = 0;else {
      for (J = 0; J < I; J += 1) {
        if (l = H[J], g = l.config || (l.config = {}), k = g, h = g.name = (0, _lib.parseUnsafeString)(k.label), g._legendX = 0, g._legendY = E.height, 0 === k.enabled || !1 === k.enabled || h === _lib.BLANKSTRING) {
          g.enabled = 0;continue;
        } else g.enabled = 1;G = !0, 0 === d ? (E.height += g._legendH = f, g.name = _lib.BLANKSTRING, g._totalWidth = e + u) : (c = q.getSmartText(h, d, A), g.name = c.text, c.tooltext && (g.originalText = c.tooltext), c.height < f && (g._legendTestY = (f - c.height) / 2), g._totalWidth = e + u + s + c.width + v, E.height += g._legendH = mathMax(c.height, f), B = mathMax(c.width, B));
      }n.validLegendItem = G, G ? (n.itemWidth = B + f + v + s, n.width = n.itemWidth + D, n.title.text !== _lib.BLANKSTRING && (q.setStyle(n.title.style), c = q.getSmartText(n.title.text, a, A), n.title.text = c.text, c.tooltext && (n.title.originalText = c.tooltext), j = c.width + D, n.width < j && (n.initialItemX = (j - n.width) / 2, n.width = j), n.initialItemY = c.height + t, E.height += n.initialItemY), n.height = n.totalHeight = E.height, b = mathMin(n.width + b, a), F.right = b + v, n.isActive = !0, n.enabled = !0) : (n.enabled = !1, n.width = 0, F.right = 0);
    }return F;
  }postSpaceManager() {
    var a = this,
        b = a.config,
        c = b.legendPos,
        d = a.getFromEnv('chart'),
        e = d.config.canvasHeight;c === _lib.POSITION_RIGHT && (b.height > e ? (b.height = e, b.scroll.enabled = !0, b.scroll.flatScrollBars = b.flatScrollBars, b.scroll.scrollBar3DLighting = b.scrollBar3DLighting, b.width += (b.scroll.scrollBarWidth = 10) + (b.scroll.scrollBarPadding = 2)) : b.scroll.enabled = !1);
  }configure() {
    var a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.config,
        h = f.getFromEnv('chart'),
        i = h.config,
        j = f.getFromEnv('style'),
        k = h.getFromEnv('chart-attrib'),
        l = h.config.is3D,
        m = f.getFromEnv('color-manager'),
        n = l ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D,
        o = g.interactiveLegend = !1 !== h.hasInteractiveLegend && !!(0, _lib.pluckNumber)(k.interactivelegend, 1),
        p = (0, _lib.pluckNumber)(k.useroundedges, 0),
        q = j.outCancolor,
        r = (0, _lib.pluck)(k.legenditemfont, j.outCanfontFamily),
        s = (0, _lib.pluckNumber)(k.legendiconscale, 1),
        t = (0, _lib.pluckFontSize)(k.legenditemfontsize, j.fontSize) + 'px',
        u = (0, _lib.pluck)(k.legenditemfontcolor, q).replace(/^#?([a-f0-9]+)/ig, '#$1'),
        v = (0, _lib.getFirstColor)((0, _lib.pluck)(k.legenditemhoverfontcolor, u));g.isActive = !1, g.chartMarginTop = i.origMarginTop, g.chartMarginRight = i.origMarginRight, g.chartMarginBottom = i.origMarginBottom, g.chartMarginLeft = i.origMarginLeft, g.reverselegend = (0, _lib.pluckNumber)(k.reverselegend, 0), g.showLegend = (0, _lib.pluckNumber)(k.showlegend, !h.dontShowLegendByDefault, 1), a = (0, _lib.setLineHeight)({ fontSize: t }), g.legendPos = (0, _lib.pluck)(k.legendposition, h.legendposition, _lib.POSITION_BOTTOM).toLowerCase(), g.numColumns = (0, _lib.pluckNumber)(k.legendnumcolumns, 0), g.xL = g.yL = 0, (0 >= s || 5 < s) && (s = 1), g.drawCustomLegendIcon = (0, _lib.pluckNumber)(k.drawcustomlegendicon, 0), g.legendScale = s, g.legendPadding = (0, _lib.pluckNumber)(k.legendpadding, 7), g.alignLegendWithCanvas = i.alignLegendWithCanvas, g.title.style = { fontFamily: (0, _lib.pluck)(k.legendcaptionfont, r), fontSize: (0, _lib.pluckFontSize)(k.legendcaptionfontsize, j.fontSize) + 'px', color: (0, _lib.pluck)(k.legendcaptionfontcolor, q).replace(/^#?([a-f0-9]+)/ig, '#$1'), fontWeight: styleValueMap.fontWeight[(0, _lib.pluckNumber)(k.legendcaptionfontbold, 1)] || _lib.BLANKSTRING }, e = k.legendcaptionalignment ? k.legendcaptionalignment.toLowerCase() : TEXT_ANCHOR_MAP.center, g.title.align = TEXT_ANCHOR_MAP[e] || TEXT_ANCHOR_MAP.center, g.title.style['text-anchor'] = g.title.align, g.padding = 4, b = (0, _lib.pluck)(k.legendbordercolor, m.getColor(n.legendBorderColor)), c = g.borderAlpha = (0, _lib.pluckNumber)(k.legendborderalpha, 100), g.borderColor = (0, _libGraphics.convertColor)(b, c), g.borderWidth = (0, _lib.pluckNumber)(k.legendborderthickness, !p || k.legendbordercolor ? 1 : 0), g.borderRadius = (0, _lib.pluckNumber)(p, 0), g.backgroundAlpha = d = (0, _lib.pluckNumber)(k.legendbgalpha, 100), g.backgroundColor = (0, _libGraphics.convertColor)((0, _lib.pluck)(k.legendbgcolor, m.getColor(n.legendBgColor)), d), g.symbol3DLighting = !!(0, _lib.pluckNumber)(k.use3dlighting, k.useplotgradientcolor, 1), g.shadow = !!(0, _lib.pluckNumber)(k.legendshadow, 1), g.shadow && (g.shadow = { enabled: g.shadow, opacity: mathMax(c, d) / 100 }), g.prevReversed = !!(0, _lib.pluckNumber)(g.reversed, 0), g.reversed = !!(0, _lib.pluckNumber)(k.reverselegend, 0), g.lineWidth = (0, _lib.pluckNumber)(k.linethickness, 2), g.borderRadius = (0, _lib.pluckNumber)(k.legendborderradius, p ? 3 : 0), g.legendAllowDrag = !!(0, _lib.pluckNumber)(k.legendallowdrag, 0), g.title.text = (0, _lib.parseUnsafeString)((0, _lib.getFirstValue)(k.legendcaption, _lib.BLANKSTRING)), g.legendScrollBgColor = (0, _lib.getFirstColor)((0, _lib.pluck)(k.legendscrollbgcolor, k.scrollcolor, m.getColor('altHGridColor'))), g.legendScrollBarColor = (0, _lib.pluck)(k.legendscrollbarcolor, b), g.legendScrollBtnColor = (0, _lib.pluck)(k.legendscrollbtncolor, b), g.minimiseWrappingInLegend = (0, _lib.pluckNumber)(k.minimisewrappinginlegend, 0), g.flatScrollBars = (0, _lib.pluckNumber)(k.flatscrollbars, 0), g.scrollBar3DLighting = (0, _lib.pluckNumber)(k.scrollbar3dlighting, 1), g.orderReversed = !1, f.setStateCosmetics('hidden', { symbol: { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(k.legenditemhiddencolor, 'cccccc').replace(/^#?([a-f0-9]+)/ig, '#$1')), stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(k.legenditemhiddencolor, 'cccccc').replace(/^#?([a-f0-9]+)/ig, '#$1')) }, text: { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(k.legenditemhiddencolor, 'cccccc').replace(/^#?([a-f0-9]+)/ig, '#$1')) } }), f.setStateCosmetics('default', { text: { fill: (0, _libGraphics.convertColor)(u), "font-family": r, cursor: o ? _lib.preDefStr.POINTER : 'default', "font-size": t, "line-height": a, "vertical-align": _lib.POSITION_TOP, "text-anchor": _lib.POSITION_START, "font-weight": styleValueMap.fontWeight[(0, _lib.pluckNumber)(k.legenditemfontbold, 0)] || _lib.BLANKSTRING }, symbol: { bgColor: (0, _lib.pluck)(k.legendiconbgcolor), cursor: o ? _lib.preDefStr.POINTER : 'default', borderColor: (0, _lib.pluck)(k.legendiconbordercolor), bgAlpha: (0, _lib.pluck)(k.legendiconbgalpha, k.legendiconalpha, 100), borderAlpha: (0, _lib.pluck)(k.legendiconborderalpha, k.legendiconalpha, 100), borderThickness: (0, _lib.pluckNumber)(k.legendiconborderthickness), startAngle: (0, _lib.pluckNumber)(k.legendiconstartangle, 45), sides: (0, _lib.pluckNumber)(k.legendiconsides, 4) } }), f.setStateCosmetics('hover', function (a, b) {
      return b.hasState('hidden') || (!a.text && (a.text = {}), a.text.fill = (0, _libGraphics.convertColor)(v.replace(/^#?([a-f0-9]+)/ig, '#$1')), a.text.cursor = 'inherit'), a;
    }), g.legendAllowDrag && !g._dragEvtListenerBinded ? (f.addEventListener('dragstart', g.handlers.dragstart), f.addEventListener('dragmove', g.handlers.dragmove), g._dragEvtListenerBinded = !0) : (f.removeEventListener('dragstart', g.handlers.dragstart), f.removeEventListener('dragmove', g.handlers.dragmove), g._dragEvtListenerBinded = !1);
  }getLegendState() {
    return this._legendState;
  }hasState(a) {
    var b,
        c,
        d = this.getLegendState();for (b = 0, c = d.length; b < c; b++) if (d[b] === a) return !0;return !1;
  }setLegendState(a, b) {
    this.hasState(a) || (b ? this._legendState.push(a) : this._legendState.unshift(a)), this.asyncDraw();
  }removeLegendState(a) {
    var b,
        c,
        d = 1;if (a) for (b = 0, c = this._legendState.length; b < c && d; b++) a === this._legendState[b] && (this._legendState.splice(b, 1), d = 0);else this._legendState.length = 0;this.asyncDraw();
  }setStateCosmetics(a, b) {
    this._stateCosmetics[a] = b;
  }removeStateCosmetics(a) {
    delete this._stateCosmetics[a];
  }getStateCosmetics(a) {
    return this._stateCosmetics[a];
  }hide() {
    var a = this,
        b = a.getFromEnv('chart'),
        c = b.getChildContainer('legendGroup');c && c.hide();
  }
}exports.default = Legend;
},{"../../lib/lib":23,"../../lib/lib-graphics":24,"../../../core/component-interface":65,"./legend-item":175,"../../dependency-manager":20,"../../animation-rules/legend-animation":174,"../../schedular":21}],136:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  let b;(0, _lib.componentFactory)(a, _legend2.default, 'legend'), b = a.getChildren('legend')[0], b.configure(), a.addToEnv('legend', b), a.config.showLegend || b.remove();
};

var _lib = require('../lib/lib');

var _legend = require('../legend/discrete/legend');

var _legend2 = _interopRequireDefault(_legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../lib/lib":23,"../legend/discrete/legend":142}],119:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartesian = require('./cartesian');

var _cartesian2 = _interopRequireDefault(_cartesian);

var _legendSpacemanager = require('../_internal/common-chart-api/legend-spacemanager');

var _multiseriesDataset = require('../_internal/factories/multiseries-dataset');

var _multiseriesDataset2 = _interopRequireDefault(_multiseriesDataset);

var _legend = require('../_internal/factories/legend');

var _legend2 = _interopRequireDefault(_legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MSCartesian extends _cartesian2.default {
  constructor() {
    super(), this.registerFactory('dataset', _multiseriesDataset2.default, ['vCanvas']), this.registerFactory('legend', _legend2.default);
  }static getName() {
    return 'MSCartesian';
  }getName() {
    return 'MSCartesian';
  }getType() {
    return 'chartAPI';
  }_createLayers() {
    super._createLayers();let a = this.getFromEnv('animationManager');this.getChildContainer('legendGroup') || this.addChildContainer('legendGroup', a.setAnimation({ el: 'group', attr: { name: 'legend' }, component: this, container: this.getContainer('parentgroup'), label: 'group' }));
  }_manageLegendSpace() {
    _legendSpacemanager._manageLegendSpace.call(this);
  }manageGradientLegendSpace(a) {
    return _legendSpacemanager.manageGradientLegendSpace.call(this, a);
  }
}exports.default = MSCartesian;
},{"./cartesian":61,"../_internal/common-chart-api/legend-spacemanager":134,"../_internal/factories/multiseries-dataset":135,"../_internal/factories/legend":136}],185:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class AnnotationInterface {
  constructor(a = {}) {
    this.rawConfig = JSON.parse(JSON.stringify(a)), this.config = { animConfig: {} }, this.store = {};
  }getType() {
    return this._getConfig('type');
  }_setToStore(a, b) {
    this.store[a] = b;
  }_getFromStore(a) {
    return this.store[a];
  }_setConfig(a, b) {
    this.config[a] = b;
  }_getConfig(a = '') {
    return '' === a ? this.config : this.config[a];
  }getAttribute(a = '') {
    return '' === a ? this.rawConfig : this.rawConfig[a];
  }show() {
    let a = this._getFromStore('element');this._setConfig('isVisible', !0), a && a.show();
  }hide() {
    let a = this._getFromStore('element'),
        b = this._getFromStore('animationManager');this._setConfig('isVisible', !1), a && b.setAnimation({ el: a, component: this._getFromStore('component'), doNotRemove: !0, callback: function () {
        this.hide();
      }, label: this.rawConfig.animationLabel });
  }dispose() {
    let a,
        b,
        c = this._getFromStore('controller').retrieveItem(this.getId(), !0);c && (a = c._getFromStore('animationManager'), b = c._getFromStore('element'), b && a.setAnimation({ el: b, component: c._getFromStore('component'), label: this.rawConfig.animationLabel }));
  }
}exports.default = AnnotationInterface;
},{}],225:[function(require,module,exports) {
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
module.exports = _isObject;
},{}],224:[function(require,module,exports) {
var _curry3 = /*#__PURE__*/require('./internal/_curry3');

var _has = /*#__PURE__*/require('./internal/_has');

/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */


var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
module.exports = mergeWithKey;
},{"./internal/_curry3":217,"./internal/_has":227}],218:[function(require,module,exports) {
var _curry3 = /*#__PURE__*/require('./internal/_curry3');

var _isObject = /*#__PURE__*/require('./internal/_isObject');

var mergeWithKey = /*#__PURE__*/require('./mergeWithKey');

/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */


var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function (k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
module.exports = mergeDeepWithKey;
},{"./internal/_curry3":217,"./internal/_isObject":225,"./mergeWithKey":224}],194:[function(require,module,exports) {
var _curry2 = /*#__PURE__*/require('./internal/_curry2');

var mergeDeepWithKey = /*#__PURE__*/require('./mergeDeepWithKey');

/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */


var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
module.exports = mergeDeepRight;
},{"./internal/_curry2":184,"./mergeDeepWithKey":218}],186:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let lineHeightFactor = 1.2,
    breakPlaceholder = /\{br\}\s*/ig,
    BLANK = '',
    BREAKSTRING = '<br />';const toRaphaelColor = function () {
  var a = {};return function (b) {
    b = b || this;var c,
        d,
        e,
        f,
        g,
        h,
        j = b && b.FCcolor || b,
        k = j.color,
        m = j.ratio,
        n = j.angle,
        o = j.alpha,
        p = j.r,
        q = j.cx,
        r = j.cy,
        s = j.fx,
        t = j.fy,
        u = j.gradientUnits,
        v = j.x1,
        w = j.y1,
        x = j.x2,
        y = j.y2,
        z = j.radialGradient,
        A = 1;if ('string' == typeof b) return a[h = '~' + b] || (a[h] = b.replace(/^#?([a-f0-9]{3,6})/ig, '#$1'));if (k = k || '', !k) return d;if (c = new RegExp(/[\(\)\s,\xb0#]/g), h = [k, o, m, n, p, q, r, u, s, t, v, x, w, y, z].join('_').replace(c, '_'), a[h]) return a[h];if (m = m && (m + '').split(',') || [], o = (o || 0 === o) && (o + '').split(',') || [], k = k.split(',')) if (d = '', 1 === k.length) g = k[0].replace(/^#?([a-f0-9]{3,6})/ig, '$1'), d = o.length ? 'rgba(' + hexToRgb(g).join(',') + ',' + .01 * parseFloat(o[0]) + ')' : g.replace(/^#?([a-f0-9]{3,6})/ig, '#$1');else {
      for (e = 0, f = k.length; e < f; e++) g = k[e].replace(/^#?([a-f0-9]{3,6})/ig, '$1'), isNaN(m[e]) || (m[e] = parseFloat(m[e]), g += ':' + m[e], !isNaN(m[e + 1]) && (m[e + 1] = parseFloat(m[e + 1]) + m[e])), isNaN(o[e]) || '' === o[e] || (A = .01 * o[e]), k[e] = 'rgba(' + hexToRgb(g).join(',') + ',' + A + ')', isNaN(m[e]) || (m[e] === m[e - 1] && (m[e] += .001), k[e] = k[e] + ':' + m[e]);d += k.join('-'), 'undefined' != typeof p || 'undefined' != typeof s || 'undefined' != typeof q || j.radialGradient ? d = 'xr(' + [s, t, p, q, r, u].join(',') + ')' + d : (d = '-' + d, ('undefined' != typeof v || 'undefined' != typeof w || 'undefined' != typeof x || 'undefined' != typeof y) && (d = '(' + [v, w, x, y, u].join(',') + ')' + d), 'undefined' == typeof n && (n = 0), d = 360 - parseFloat(n) % 360 + d);
    }return a[h] = d, d;
  };
}();function parseUnsafeString(a) {
  return 'string' == typeof a ? a.replace(breakPlaceholder, BREAKSTRING) : BLANK;
}function pluckNumber(...a) {
  var b, c, d;for (c = 0, d = a.length; c < d; c += 1) {
    if (b = a[c], !b && !1 !== b && 0 !== b) continue;else if (isNaN(b = +b)) continue;return b;
  }
}function pluckBoolean(...a) {
  let b, c, d;for (c = 0, d = a.length; c < d; c++) if (b = a[c], !0 === b || !1 === b) return b;return !1;
}function hexToRgb(a) {
  var c = Math.floor,
      d = parseInt(a, 16),
      e = c(d / 65536),
      f = c((d - 65536 * e) / 256),
      g = c(d - 65536 * e - 256 * f);return [e, f, g];
}function pluck(...a) {
  var b, c, d;for (c = 0, d = a.length; c < d; c += 1) if (b = a[c], b || !1 === b || 0 === b || '' === b) return b;
}function pluckFontSize(...a) {
  var b, c, d;for (c = 0, d = a.length; c < d; c += 1) {
    if (b = a[c], !b && !1 !== b && 0 !== b) continue;else if (isNaN(b = +b)) continue;return 1 > b ? 1 : b;
  }return 1;
}function toPrecision(a, b) {
  var c = Math.pow(10, b);return Math.round(a * c) / c;
}function getFirstValue(...a) {
  var b, c, d;for (c = 0, d = a.length; c < d; c += 1) if (b = a[c], b || !1 === b || 0 === b) return b;return '';
}function getDashStyle(a, b) {
  return [a, b];
}function setLineHeightFactor(a) {
  a = parseFloat(a);!a || 0 > a || (lineHeightFactor = a);
}function getLineHeightFactor() {
  return lineHeightFactor;
}function setLineHeight(a, b) {
  return 'object' == typeof a ? ((a.fontSize || a['font-size']) && (!a.fontSize && a['font-size'] && (a.fontSize = a['font-size'], delete a['font-size']), a.lineHeight = (parseFloat(a.fontSize) || b || 10) * getLineHeightFactor() + 'px', delete a['line-height']), !a.lineHeight && a['line-height'] && (a.lineHeight = a['line-height'], delete a['line-height']), a.lineHeight) : '';
}function clampNumber(a, b = -Infinity, c = 1 / 0) {
  return a <= b ? b : a >= c ? c : a;
}function getValidValue(a, b) {
  return a || !1 === a || 0 === a ? a : b;
}function getSuggestiveRotation() {
  var a, b, c, d;return a = arguments[0], 1 === arguments.length ? (b = a.angle, c = a.x, d = a.y) : (b = a, c = arguments[1], d = arguments[2]), b = b || 0, 'r' + b + ',' + c + ',' + d;
}function trim(a) {
  return a.replace(/^\s+|\s+$/g, '');
}exports.pluckNumber = pluckNumber;
exports.pluckBoolean = pluckBoolean;
exports.pluck = pluck;
exports.pluckFontSize = pluckFontSize;
exports.toPrecision = toPrecision;
exports.getFirstValue = getFirstValue;
exports.toRaphaelColor = toRaphaelColor;
exports.getDashStyle = getDashStyle;
exports.setLineHeight = setLineHeight;
exports.getLineHeightFactor = getLineHeightFactor;
exports.setLineHeightFactor = setLineHeightFactor;
exports.clampNumber = clampNumber;
exports.getValidValue = getValidValue;
exports.getSuggestiveRotation = getSuggestiveRotation;
exports.parseUnsafeString = parseUnsafeString;
exports.trim = trim;
},{}],226:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let UNDEF,
    errorNatures = { type: 'TypeException', range: 'ValueRangeException', impl: 'NotImplementedException', param: 'ParameterException', run: 'RuntimeException', comp: 'DesignTimeError', undefined: 'UnspecifiedException' },
    listeners = {},
    lastEventId = 0;function managedFnCall(a, b, c, d) {
  try {
    a[0].call(b, c, d || {});
  } catch (a) {
    setTimeout(function () {
      throw a;
    }, 0);
  }
}function slotLoader(a, b, c) {
  let d,
      e = 0;if (a instanceof Array && !b.cancelled) for (; e < a.length && ((a[e][1] === b.sender || a[e][1] === UNDEF) && (d = a[e][1] === b.sender ? b.sender : {}, managedFnCall(a[e], d, b, c), !0 === b.detached && (a.splice(e, 1), e -= 1, b.detached = !1)), !0 !== b.cancelled); e += 1);
}function unpropagator() {
  this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
}function unImdPropagator() {
  this.cancelled = !0, this.originalEvent && this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation.call ? this.originalEvent.stopImmediatePropagation() : this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
}function detacher() {
  return !1 == (this.detached = !0);
}function undefaulter() {
  this.defaultPrevented = !0, this.originalEvent && this.originalEvent.preventDefault && this.originalEvent.preventDefault.call && this.originalEvent.preventDefault();
}function isDuplicate(a, b, c) {
  let d,
      e = a.length;for (d = 0; d < e; d += 1) if (a[d][0] === b && a[d][1] === c) return !0;
}function addListener(a, b, c) {
  var d, e, f;if (a instanceof Array) {
    for (d = [], e = 0; e < a.length; e += 1) d.push(addListener(a[e], b, c));return d;
  }return 'string' == typeof a ? 'function' == typeof b ? (a = a.toLowerCase(), c ? (!c._evtListeners && (c._evtListeners = {}), !(c._evtListeners[a] instanceof Array) && (c._evtListeners[a] = []), f = c._evtListeners[a]) : (!(listeners[a] instanceof Array) && (listeners[a] = []), f = listeners[a]), !isDuplicate(f, b, c)) && (f.push([b, c]), b) : void raiseError(c, '03091550', 'param', '::addListener', new Error('Invalid Event Listener')) : void raiseError(c, '03091549', 'param', '::addListener', new Error('Unspecified Event Type'));
}function removeListener(a, b, c) {
  var d, e;if ('function' != typeof b) return void raiseError(c, '03091560', 'param', '::removeListener', new Error('Invalid Event Listener'));if (a instanceof Array) {
    for (e = 0; e < a.length; e += 1) removeListener(a[e], b, c);return;
  }if (d = getListeners(a, c), !!(d instanceof Array && d.length)) for (e = d.length - 1; 0 <= e; e -= 1) d[e][0] === b && d[e][1] === c && d.splice(e, 1);
}function triggerEvent(a, b, c, d, e, f) {
  var g, h, i, j, k;return a = a.toLowerCase(), h = getListeners(a, b), i = getListeners('*', b), j = listeners[a], k = listeners['*'], (h && h.length || i && i.length || j && j.length || k && k.length) && (g = { type: a, eventType: a, eventId: lastEventId += 1, sender: b || new Error('Orphan Event'), stopPropagation: unpropagator, stopImmediatePropagation: unImdPropagator, cancelled: !1, preventDefault: undefaulter, defaultPrevented: !1, originalEvent: d, detached: !1, data: c, detachHandler: detacher }, slotLoader(k, g, c), slotLoader(j, g, c), slotLoader(getListeners('*', b), g, c), slotLoader(getListeners(a, b), g, c)), g && g.defaultPrevented ? f && 'function' == typeof f && f.call(b, g, c || {}) : e && 'function' == typeof e && e.call(b, g, c || {}), !0;
}function getListeners(a, b) {
  return 'string' == typeof a ? (a = a.toLowerCase(), b ? b._evtListeners && b._evtListeners[a] : listeners[a]) : void raiseError(b, '03091559', 'param', '::removeListener', new Error('Unspecified Event Type'));
}function raiseEWEvent(a, b, c, d, e, f) {
  let g,
      h = '#' + b + ' ' + (a ? a.id : 'unknown-source') + d + ' ' + f + ' >> ';e instanceof Error ? (e.name = errorNatures[c], e.module = 'FusionCharts' + d, e.level = f, e.message = h + e.message, h = e.message, setTimeout(function () {
    throw e;
  }, 0)) : h += e, g = { id: b, nature: errorNatures[c], source: 'FusionCharts' + d, message: h }, triggerEvent(f, a, g);
}function raiseError(a, b, c, d, e) {
  raiseEWEvent(a, b, c, d, e, 'Error');
}exports.addListener = addListener;
exports.removeListener = removeListener;
exports.triggerEvent = triggerEvent;
exports.getListeners = getListeners;
},{}],215:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationInterface = require('./annotation-interface');

var _annotationInterface2 = _interopRequireDefault(_annotationInterface);

var _eventManager = require('./event-manager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const interActiveEvtList = { click: !0, dragstart: !0, dragmove: !0, dragend: !0, dblclick: !0, mousedown: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, touchstart: !0, touchmove: !0, touchend: !0, touchcancel: !0 };let counter = 0;function isInterActiveEvt(a) {
  return !!interActiveEvtList[a];
}function _mapSubFnForward(a, b) {
  if (a && a.hasOwnProperty && b && b.call) {
    let c, d, e, f;for (c in a) if (a.hasOwnProperty(c)) if (d = a[c], d instanceof Array) for (f = d.length, e = 0; e < f; e++) b(d[e], c, e);else b(d, c);
  }
}function addEventOnAllGraphics(a, b, c) {
  var d;b && c && (d = a => {
    a.on && a.on(b, c);
  }, a.getGraphicalElement && _mapSubFnForward(a.getGraphicalElement(), d), a.getChildContainer && _mapSubFnForward(a.getChildContainer(), d));
}function removeEventFromAllGraphics(a, b, c) {
  var d;b && c && (d = a => {
    a.off && a.off(b, c);
  }, _mapSubFnForward(a.getGraphicalElement(), d), _mapSubFnForward(a.getChildContainer(), d));
}class AnnotationBaseShape extends _annotationInterface2.default {
  constructor(a = {}) {
    super(a), counter++;
  }setEditor(a) {
    this.store.editor = a;
  }_setGroupElement(a) {
    this.store.groupElement = a;
  }_getGroupElement() {
    return this.store.groupElement;
  }getId(a) {
    return this.config.id || `annotation_${a}_${counter}`;
  }getGraphicalElement() {
    let a = {};return a[this.getId()] = this._getFromStore('element'), a;
  }getElement() {
    return this._getFromStore('element');
  }getBounds() {
    return this.getElement().getBBox();
  }addEventListener(a, b) {
    let c,
        d = this;return !!(a && a.toLowerCase && (a = a.toLowerCase(), (0, _eventManager.addListener)(a, b, d))) && (isInterActiveEvt(a) && (c = (0, _eventManager.getListeners)(a, d), c && 1 === c.length && (!d._middleListeners && (d._middleListeners = {}), !d._middleListeners[a] && (d._middleListeners[a] = function (b) {
      d.fireEvent(a, void 0, void 0, void 0, b);
    }), addEventOnAllGraphics(d, a, d._middleListeners[a]))), b);
  }removeEventListener(a, b) {
    let c,
        d = this;a && a.toLowerCase && (a = a.toLowerCase(), (0, _eventManager.removeListener)(a, b, this), isInterActiveEvt(a) && (c = (0, _eventManager.getListeners)(a, this), c && 0 === c.length && this._middleListeners && this._middleListeners[a] && removeEventFromAllGraphics(d, a, this._middleListeners[a])));
  }fireEvent(a, b, c, d, e) {
    (0, _eventManager.triggerEvent)(a, this, b, e, c, d);
  }
}exports.default = AnnotationBaseShape;
},{"./annotation-interface":185,"./event-manager":226}],187:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _annotationBase = require('./annotation-base');

var _annotationBase2 = _interopRequireDefault(_annotationBase);

var _mergeDeepRight = require('ramda/src/mergeDeepRight');

var _mergeDeepRight2 = _interopRequireDefault(_mergeDeepRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_IS_VISIBLE = !0,
      DEFAULT_OPACITY = 100,
      DEFAULT_COLOR = '#FF0000',
      DEFAULT_SHOW_SHADOW = 0,
      DEFAULT_POSITION = 0;class AnnotationGroup extends _annotationBase2.default {
  constructor(a = {}) {
    super(a), this.groups = [], this.items = [];
  }setAttribute(a) {
    var b = this,
        c = {},
        d = b.config;c = (0, _mergeDeepRight2.default)(b.rawConfig, a), b.rawConfig = c, d.id = b.rawConfig.id || b.getId('group'), d.autoScale = (0, _utils.pluckNumber)(b.rawConfig.autoScale, 1), d.scaleText = (0, _utils.pluckNumber)(b.rawConfig.scaleText, 0), d.scaleX = d.origScaleX = (0, _utils.pluckNumber)(b.rawConfig.xScale) / 100, d.scaleY = d.origScaleY = (0, _utils.pluckNumber)(b.rawConfig.yScale) / 100, d.scaleImages = (0, _utils.pluckNumber)(b.rawConfig.scaleImages, 0), d.constrainedScale = (0, _utils.pluckNumber)(b.rawConfig.constrainedScale, 1), d.origH = +b.rawConfig.origH, d.origW = +b.rawConfig.origW, d.link = b.rawConfig.link, d.color = b.rawConfig.color || DEFAULT_COLOR, d.alpha = (0, _utils.pluckNumber)(parseFloat(b.rawConfig.alpha), DEFAULT_OPACITY), d.showShadow = (0, _utils.pluckNumber)(b.rawConfig.showShadow, DEFAULT_SHOW_SHADOW), d.x = (0, _utils.pluckNumber)(b.rawConfig.x, b.rawConfig.xPos, DEFAULT_POSITION), d.y = (0, _utils.pluckNumber)(b.rawConfig.y, b.rawConfig.yPos, DEFAULT_POSITION), d.font = (0, _utils.pluck)(b.rawConfig.font, 'Verdana, sans'), d.fontSize = (0, _utils.pluckFontSize)(b.rawConfig.fontSize, 10), d.textAlign = (0, _utils.pluck)(b.rawConfig.textAlign), d.textVAlign = (0, _utils.pluck)(b.rawConfig.textVAlign), d.rotateText = (0, _utils.pluck)(b.rawConfig.rotateText), d.wrapText = (0, _utils.pluck)(b.rawConfig.wrapText), d.grpXShift = (0, _utils.pluckNumber)(b.rawConfig.grpXShift, 0), d.grpYShift = (0, _utils.pluckNumber)(b.rawConfig.grpYShift, 0), d.xShift = (0, _utils.pluckNumber)(b.rawConfig.xShift, 0), d.yShift = (0, _utils.pluckNumber)(b.rawConfig.yShift, 0), d.toolText = b.rawConfig.toolText, d.isVisible = (0, _utils.pluckBoolean)(b.rawConfig.isVisible, DEFAULT_IS_VISIBLE);
  }updateScale() {
    var a = Math.min;let b,
        c,
        d,
        e,
        f,
        g = this,
        h = g._getConfig('origScaleX'),
        i = g._getConfig('origScaleY'),
        j = g._getFromStore('paper'),
        k = j.height,
        l = j.width,
        m = g._getConfig('autoScale'),
        n = g._getConfig('constrainedScale');g._setConfig('origW', +g._getConfig('origW') || l), g._setConfig('origH', +g._getConfig('origH') || k), m ? (c = l / g._getConfig('origW') * (+h || 1), d = k / g._getConfig('origH') * (+i || 1)) : c = d = 1, b = a(c, d), g._setConfig('scaleValue', b), (0 < m || isNaN(g._getConfig('scaleX'))) && (e = n ? b : c, g._setConfig('scaleX', e)), (0 < m || isNaN(g._getConfig('scaleY'))) && (f = n ? b : d, g._setConfig('scaleY', f)), g._setConfig('scaleFont', g._getConfig('scaleText') ? a(g._getConfig('scaleX'), g._getConfig('scaleY')) : 1), g._setConfig('scaleImageX', g._getConfig('scaleImages') ? g._getConfig('scaleX') : 1), g._setConfig('scaleImageY', g._getConfig('scaleImages') ? g._getConfig('scaleY') : 1);
  }updateAttr(a) {
    let b,
        c,
        d,
        e = this,
        f = e.config;for (b in a) a[b] && (f[b] = a[b]);c = e.getScaledVal(e._getConfig('grpXShift')) + e._getConfig('xShift'), d = e.getScaledVal(e._getConfig('grpYShift')) + e._getConfig('yShift'), e._setConfig('attr', { transform: `T${c},${d}` });
  }attachItem(a) {
    this.items.push(a), a._setToStore('annotation-group', this), a.groupConfig = {}, a._setGroupElement(this._getFromStore('element'));
  }retrieveItem(a) {
    return find.call(this.items, b => b.getId() === a);
  }getScaledVal(a, b) {
    let c,
        d = this;return d ? (c = b ? d._getConfig('scaleX') : (!1 === b ? d._getConfig('scaleY') : d._getConfig('scaleValue')) || 1, a * c) : a;
  }getScaledFont(a) {
    let b = this;return b ? a * b._getConfig('scaleFont') : a;
  }getScaledImageVal(a, b) {
    let c,
        d = this;return d ? (c = (b ? d._getConfig('scaleImageX') : d._getConfig('scaleImageY')) || 1, a * c) : a;
  }_draw() {
    var a,
        b,
        c = this,
        d = c._getGroupElement(),
        e = this._getFromStore('element'),
        f = c._getConfig('attr') || {},
        g = c._getFromStore('animationManager');a = c.getScaledVal(c._getConfig('grpXShift')) + c._getConfig('xShift'), b = c.getScaledVal(c._getConfig('grpYShift')) + c._getConfig('yShift'), f.name = c._getConfig('id'), f.transform = f.transform || `T${a},${b}`, f.opacity = c._getConfig('isVisible') ? c._getConfig('alpha') / 100 : 0, e = g.setAnimation({ el: e || 'group', attr: f, container: d, component: c._getFromStore('component'), dom: 'group' }), c._setToStore('element', e);
  }dispose() {
    let a,
        b,
        c,
        d,
        e = this._getFromStore('controller'),
        f = e.retrieveGroup(this.getId(), !0),
        g = f.items || [];for (d = 0; d < g.length; d++) c = e.retrieveItem(g[d].getId(), !0), c && c.dispose();a = f._getFromStore('animationManager'), b = f._getFromStore('element'), b && a.setAnimation({ el: b, component: f._getFromStore('component') });
  }
}exports.default = AnnotationGroup;
},{"./utils":186,"./annotation-base":215,"ramda/src/mergeDeepRight":194}],213:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeDeepRight = require('ramda/src/mergeDeepRight');

var _mergeDeepRight2 = _interopRequireDefault(_mergeDeepRight);

var _annotationBase = require('./annotation-base');

var _annotationBase2 = _interopRequireDefault(_annotationBase);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let selectionGroup, UNDEF;const DEFAULT_COLOR = '#FF0000',
      DEFAULT_BORDER_COLOR = '#000000',
      DEFAULT_ALPHA = 100,
      DEFAULT_SHOW_BORDER = 0,
      DEFAULT_BORDER_THICKNESS = 2,
      DEFAULT_DASH_LEN = 5,
      DEFAULT_DASH_GAP = 3,
      FULL_ANGLE_DEGREES = 360,
      DEFAULT_IS_DASHED = 0,
      DEFAULT_SHOW_SHADOW = 0,
      DEFAULT_TOOLTEXT = '',
      RADIAL = 'radial',
      DEFAULT_FILL_ANGLE = 0,
      DEFAULT_IS_VISIBLE = !0,
      DEFAULT_ANIM_DURATION = 1e3,
      getComputedImagePosition = a => {
  let { height: b, width: c, vAlign: d, align: e, x: f, y: g } = a,
      h = { x: f, y: g };return 'center' === e ? h.x = f - c / 2 : 'right' === e ? h.x = f - c : void 0, 'middle' === d ? h.y = g - b / 2 : 'bottom' === d ? h.y = g - b : void 0, h;
},
      isDefined = a => a === UNDEF ? UNDEF : 1;class AnnotationShape extends _annotationBase2.default {
  setAttribute(a) {
    let b = this,
        c = {},
        d = b.config,
        e = b._getFromStore('annotation-group');null != e && (this.groupConfig.x = e._getConfig('x'), this.groupConfig.y = e._getConfig('y'), this.groupConfig.grpXShift = e._getConfig('grpXShift'), this.groupConfig.grpYShift = e._getConfig('grpYShift'), this.groupConfig.color = e._getConfig('color'), this.groupConfig.alpha = e._getConfig('alpha'), this.groupConfig.font = e._getConfig('font'), this.groupConfig.fontSize = e._getConfig('fontSize'), this.groupConfig.textAlign = e._getConfig('textAlign'), this.groupConfig.textVAlign = e._getConfig('textVAlign'), this.groupConfig.rotateText = e._getConfig('rotateText'), this.groupConfig.wrapText = e._getConfig('wrapText'), this.groupConfig.toolText = e._getConfig('toolText'), this.groupConfig.scaleX = e._getConfig('scaleX'), this.groupConfig.scaleY = e._getConfig('scaleY'), this.groupConfig.scaleImageX = e._getConfig('scaleImageX'), this.groupConfig.scaleImageY = e._getConfig('scaleImageY'), this.groupConfig.link = e._getConfig('link')), c = (0, _mergeDeepRight2.default)(b.rawConfig, a), b.rawConfig = c, d.id = (0, _utils.pluck)(b.rawConfig.id, b.getId('shape')), d.type = b.rawConfig.type, d.color = b._getFillColor(b.rawConfig, this.groupConfig), d.link = (0, _utils.pluck)(b.rawConfig.link, b.groupConfig.link), d.borderThickness = (0, _utils.pluckNumber)(parseFloat(b.rawConfig.borderThickness), parseFloat(b.rawConfig.thickness), DEFAULT_BORDER_THICKNESS), d.showBorder = (0, _utils.pluckNumber)(b.rawConfig.showBorder, parseFloat(b.rawConfig.borderThickness), parseFloat(b.rawConfig.thickness), isDefined(b.rawConfig.borderColor), isDefined(b.rawConfig.borderAlpha), DEFAULT_SHOW_BORDER), d.borderColor = b._getBorderColor(b.rawConfig), d.dashed = (0, _utils.pluckNumber)(b.rawConfig.dashed, DEFAULT_IS_DASHED), d.dashLen = (0, _utils.pluckNumber)(b.rawConfig.dashLen, DEFAULT_DASH_LEN), d.dashGap = (0, _utils.pluckNumber)(parseFloat(b.rawConfig.dashGap), DEFAULT_DASH_GAP), d.dashArrayStr = d.dashed ? (0, _utils.getDashStyle)(d.dashLen, d.dashGap) : 'none', d.x = (0, _utils.pluckNumber)(b.rawConfig.x, b.rawConfig.xPos, 0), d.y = (0, _utils.pluckNumber)(b.rawConfig.y, b.rawConfig.yPos, 0), d.tox = (0, _utils.pluckNumber)(b.rawConfig.toX, d.x, 0), d.toy = (0, _utils.pluckNumber)(b.rawConfig.toY, d.y, 0), 0 <= d.toy && 0 <= d.y && d.toy < d.y && ([d.y, d.toy] = [d.toy, d.y]), 0 <= d.tox && 0 <= d.x && d.tox < d.x && ([d.x, d.tox] = [d.tox, d.x]), d.showShadow = (0, _utils.pluckNumber)(b.rawConfig.showShadow, e.config.showShadow, DEFAULT_SHOW_SHADOW), d.toolText = (0, _utils.getFirstValue)(b.rawConfig.toolText, this.groupConfig.toolText, DEFAULT_TOOLTEXT), d.isVisible = (0, _utils.pluckBoolean)(b.rawConfig.isVisible, DEFAULT_IS_VISIBLE), d.animConfig.animDuration = (0, _utils.pluckNumber)(b.rawConfig.animConfig && b.rawConfig.animConfig.animDuration, DEFAULT_ANIM_DURATION), b._configureShape(b.rawConfig);
  }_getEditorConfig() {
    let a = this;return a;
  }_getBorderColor(a) {
    let b = this,
        c = b.getType(),
        d = 'none',
        e = { color: '', alpha: '' };return 'line' !== c && (e.color = b.config.rawBorderColor = (0, _utils.pluck)(a.borderColor, a.fillColor, a.color, DEFAULT_BORDER_COLOR), 0 === b.config.showBorder ? (e.alpha = 1, b.config.borderThickness = 1) : e.alpha = b.config.rawBorderAlpha = (0, _utils.pluckNumber)(parseFloat(a.borderAlpha), parseFloat(a.alpha), DEFAULT_ALPHA), d = (0, _utils.toRaphaelColor)(e)), d;
  }_getFillColor(a, b) {
    let c = this,
        d = c.getType(),
        e = { color: '', alpha: '', angle: '', ratio: '', radialGradient: 'circle' === d || 'arc' === d };return 'line' === d || 'image' === d ? (e.color = a.color || b.color || DEFAULT_COLOR, e.alpha = (0, _utils.pluckNumber)(parseFloat(a.alpha), b.alpha, DEFAULT_ALPHA)) : (e.color = a.fillColor || a.color || b.color || DEFAULT_COLOR, e.alpha = (0, _utils.pluck)(a.fillAlpha, parseFloat(a.alpha), b.alpha, DEFAULT_ALPHA), e.angle = FULL_ANGLE_DEGREES - (0, _utils.pluckNumber)(a.fillAngle, DEFAULT_FILL_ANGLE), e.ratio = (0, _utils.pluck)(a.fillRatio), a.fillPattern && (e.radialGradient = a.fillPattern.toLowerCase() === RADIAL || (0, _utils.pluckNumber)(a.fillPattern)), e.radialGradient && (e.gradientUnits = 'objectBoundingBox', e.cx = .5, e.cy = .5, e.fx = .5, e.fy = .5)), c.config.rawColor = e.color, c.config.rawAlpha = e.alpha, c.config.rawAngle = e.angle, c.config.rawFillPattern = e.radialGradient ? 'radial' : 'linear', c.config.rawRatio = e.ratio, (0, _utils.toRaphaelColor)(e);
  }static destroySelectionBox() {
    selectionGroup && selectionGroup.remove();
  }_applyAttr(a) {
    var b,
        c = this,
        d = c._getFromStore('annotation-group'),
        e = c.rawConfig.animationLabel,
        f = d.rawConfig.animationLabel,
        g = c.store,
        h = c._getFromStore('animationManager'),
        i = c.config.elementType,
        j = c._getFromStore('element'),
        k = c._getFromStore('toolTipController'),
        l = c._getConfig('toolText');('image' !== i || c.config.url) && (b = c.rawConfig.css || {}, c.rawConfig.link && (b.cursor = b.cursor || 'pointer'), j = h.setAnimation({ el: j || i, attr: a, css: b, container: c._getGroupElement(), component: c._getFromStore('component'), label: e || f || i }), j.shadow({ opacity: 0 === c.config.showShadow ? 0 : 1, useFilter: 'path' === i ? 0 : 1 }), j.on('click', function () {
      c.config.link && c._getFromStore('clickFN').call({ link: c.config.link }, !0);
    }), g.element || 'image' !== i || (j.on('load', function () {
      let a = j._.RefImg,
          b = a.height,
          d = a.width,
          e = c._getConfig('align'),
          f = c._getConfig('vAlign'),
          g = c._getConfig('xScale'),
          h = c._getConfig('yScale'),
          i = b * h,
          k = d * g,
          l = getComputedImagePosition({ x: j.attr('x'), y: j.attr('y'), height: i, width: k, align: e, vAlign: f });j.attr({ x: l.x, y: l.y, height: i, width: k }), c.rawConfig.onload && c.rawConfig.onload.call(c, j.getBBox());
    }), j.on('error', function () {
      c.rawConfig.onerror && c.rawConfig.onerror.call(c, j);
    })), g.element = j, c.config.isVisible ? j.show() : j.hide(), j && (l && '' !== l ? k && k.enableToolTip(j, l) : k && k.disableToolTip(j)));
  }getScaledVal(a, b) {
    let c = this._getFromStore('annotation-group');return c ? c.getScaledVal(a, b) : a;
  }getScaledFont(a) {
    let b = this._getFromStore('annotation-group');return b ? b.getScaledFont(a) : a;
  }getScaledImageVal(a, b) {
    let c = this._getFromStore('annotation-group');return c ? c.getScaledImageVal(a, b) : a;
  }_draw() {
    var a = this,
        b = a._getFromStore('paper'),
        c = {};c = a._getAnnotationAttrs(b), a._applyAttr(c);
  }
}exports.default = AnnotationShape;
},{"ramda/src/mergeDeepRight":194,"./annotation-base":215,"./utils":186}],188:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _annotationShape = require('./annotation-shape');

var _annotationShape2 = _interopRequireDefault(_annotationShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STRAIGHT_ANGLE_DEGREES = 180,
      FULL_ANGLE_DEGREES = 360,
      DEFAULT_RADIUS_INNER = 0,
      DEFAULT_ANGLE_START = 0,
      DEFAULT_ANGLE_END = 360,
      DEFAULT_PAPER_WIDTH = 700,
      DEFAULT_PAPER_HEIGHT = 350,
      isPerfectCircle = a => a.startAngle === DEFAULT_ANGLE_START && a.endAngle === DEFAULT_ANGLE_END,
      circleHasHole = a => 0 < a.innerRadius || 0 < a.innerYRadius;function toRadian(a) {
  return a * (Math.PI / STRAIGHT_ANGLE_DEGREES);
}class CircleAnnotation extends _annotationShape2.default {
  _configureShape(a) {
    let b = this,
        c = b._getFromStore('paper'),
        d = c && c.width || DEFAULT_PAPER_WIDTH,
        e = c && c.height || DEFAULT_PAPER_HEIGHT,
        f = Math.max(d, e),
        g = Math.sqrt(f);b.config.radius = a.radius, b.config.xRadius = (0, _utils.pluckNumber)(parseFloat(a.radius), parseFloat(a.xRadius), g), b.config.yRadius = (0, _utils.pluckNumber)(parseFloat(a.yRadius), b.config.xRadius), b.config.startAngle = (0, _utils.pluckNumber)(parseFloat(a.startAngle), DEFAULT_ANGLE_START), b.config.endAngle = (0, _utils.pluckNumber)(parseFloat(a.endAngle), DEFAULT_ANGLE_END), b.config.innerRadius = (0, _utils.pluckNumber)(parseFloat(a.innerRadius), DEFAULT_RADIUS_INNER), b.config.innerYRadius = (0, _utils.pluckNumber)(parseFloat(a.innerYRadius), b.config.innerRadius, DEFAULT_RADIUS_INNER), b.config.elementType = 'arc' === b.config.type ? 'ringpath' : isPerfectCircle(b.config) && !circleHasHole(b.config) ? 'ellipse' : 'ringpath';
  }_getExtraEditableRequests() {
    let a = this,
        b = [{ name: 'radius', value: (0, _utils.toPrecision)(a.config.xRadius, 2) }, { name: 'startAngle', value: a.config.startAngle }, { name: 'endAngle', value: a.config.endAngle }, { name: 'fillColor', value: a.config.rawColor }, { name: 'fillAlpha', value: a.config.rawAlpha }, { name: 'fillRatio', value: (0, _utils.getFirstValue)(a.config.rawRatio, '') }, { name: 'fillAngle', value: a.config.rawAngle }, { name: 'fillPattern', value: 'radial' === a.config.rawFillPattern }, { name: 'showBorder', value: 1 === a.config.showBorder }, { name: 'borderColor', value: a.config.rawBorderColor }, { name: 'borderThickness', value: a.config.borderThickness }, { name: 'borderAlpha', value: a.config.rawBorderAlpha }];return 'arc' === a.config.type && b.push({ name: 'innerRadius', value: a.config.innerRadius }), b;
  }updateAttr(a) {
    let b,
        c,
        d = this,
        e = this.config,
        f = d._getFromStore('paper'),
        g = d.getScaledVal(e.xRadius),
        h = d.getScaledVal(e.yRadius),
        i = d.getScaledVal(e.innerRadius),
        j = d.getScaledVal(e.innerYRadius);switch ((0, _utils.pluck)(e.radius) || (e.radius = f.width < f.height ? d.getScaledVal(f.width) : d.getScaledVal(f.height), e.radius *= .3, i > e.radius && (i += e.radius, e.radius = i - e.radius, i -= e.radius), g = h = e.radius, j = i), e.elementType) {case 'ringpath':
        c = [(0, _utils.pluckNumber)(a.x, d.getScaledVal(e.x, !0)), (0, _utils.pluckNumber)(a.y, d.getScaledVal(e.y, !1)), g, i, toRadian(FULL_ANGLE_DEGREES - e.endAngle), toRadian(FULL_ANGLE_DEGREES - e.startAngle), h, j], b = { ringpath: c };break;default:
        b = { cx: (0, _utils.pluckNumber)(a.x, d.getScaledVal(e.x, !0)), cy: (0, _utils.pluckNumber)(a.y, d.getScaledVal(e.y, !1)) };}d._setConfig('attr', b);
  }_getAnnotationAttrs() {
    let a,
        b = this,
        c = b.config,
        d = b._getConfig('attr') || {},
        e = c.x,
        f = c.y,
        g = b.getScaledVal(c.xRadius),
        h = b.getScaledVal(c.yRadius),
        i = b.getScaledVal(c.innerRadius),
        j = b.getScaledVal(c.innerYRadius),
        k = c.startAngle,
        l = c.endAngle,
        m = c.borderColor,
        n = c.borderThickness,
        o = c.dashArrayStr,
        p = c.color;switch (c.xRadius || (g = 0), c.yRadius || (h = 0), d.fill = p, d.stroke = m, d['stroke-width'] = n, d['stroke-dasharray'] = o, b.config.elementType) {case 'ringpath':
        a = [b.getScaledVal(e, !0), b.getScaledVal(f, !1), g, i, toRadian(FULL_ANGLE_DEGREES - l), toRadian(FULL_ANGLE_DEGREES - k), h, j], d.ringpath = d.ringpath || a;break;default:
        d.rx = g, d.ry = h, d.cx = 'undefined' == typeof d.cx ? b.getScaledVal(e, !0) : d.cx, d.cy = 'undefined' == typeof d.cy ? b.getScaledVal(f, !1) : d.cy;}return d;
  }
}exports.default = CircleAnnotation;
},{"./utils":186,"./annotation-shape":213}],189:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _annotationShape = require('./annotation-shape');

var _annotationShape2 = _interopRequireDefault(_annotationShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCharacterType(a) {
  return '9' >= a && '0' <= a || '-' === a || '.' === a ? 0 : 'z' >= a && 'a' <= a || 'Z' >= a && 'A' <= a ? 1 : 2;
}class PathAnnotation extends _annotationShape2.default {
  _configureShape(a) {
    let b = this;b.config.pathStr = (0, _utils.pluck)(a.path), b.config.x = (0, _utils.pluckNumber)(a.x, 0), b.config.y = (0, _utils.pluckNumber)(a.y, 0), b.config.tox = (0, _utils.pluckNumber)(a.toX, b.config.x), b.config.toy = (0, _utils.pluckNumber)(a.toY, b.config.y), b.config.elementType = 'path';
  }getExtraEditableRequests() {
    let a = this,
        b = [{ name: 'thickness', value: a.config.borderThickness }, { name: 'color', value: a.config.rawColor }, { name: 'alpha', value: a.config.rawAlpha }];return b;
  }getScaledPath() {
    let a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.config.pathStr,
        h = [],
        k = '';for (e = g && g.length, c = 0; c < e; c++) {
      for (d = c, b = '', a = getCharacterType(g[c]); d < e && getCharacterType(g[d]) === a;) b += g[d], d++;b = (0, _utils.trim)(b), '' !== b && 2 > a && h.push(b), c = d === c ? d : d - 1;
    }for (e = h.length, c = 0; c < e;) switch (k += h[c], h[c].toLowerCase()) {case 'm':case 'l':case 't':
        k += f.getScaledVal(+h[c + 1], !0).toString() + ',', k += f.getScaledVal(+h[c + 2], !1).toString(), c += 3;break;case 's':case 'q':
        k += f.getScaledVal(+h[c + 1], !0).toString() + ',', k += f.getScaledVal(+h[c + 2], !1).toString() + ',', k += f.getScaledVal(+h[c + 3], !0).toString() + ',', k += f.getScaledVal(+h[c + 4], !1).toString(), c += 5;break;case 'h':
        k += f.getScaledVal(+h[c + 1], !0).toString(), c += 2;break;case 'v':
        k += f.getScaledVal(+h[c + 1], !1).toString(), c += 2;break;case 'c':
        k += f.getScaledVal(+h[c + 1], !0).toString() + ',', k += f.getScaledVal(+h[c + 2], !1).toString() + ',', k += f.getScaledVal(+h[c + 3], !0).toString() + ',', k += f.getScaledVal(+h[c + 4], !1).toString() + ',', k += f.getScaledVal(+h[c + 5], !0).toString() + ',', k += f.getScaledVal(+h[c + 6], !1).toString(), c += 7;break;case 'a':
        k += f.getScaledVal(+h[c + 1], !0).toString() + ',', k += f.getScaledVal(+h[c + 2], !1).toString() + ',', k += f.getScaledVal(+h[c + 3], !0).toString() + ',', k += h[c + 4] + ',', k += h[c + 5] + ',', k += f.getScaledVal(+h[c + 6], !0).toString() + ',', k += f.getScaledVal(+h[c + 7], !1).toString(), c += 8;break;case 'z':default:
        c++;}return k.toString();
  }updateAttr(a) {
    let b,
        c,
        d,
        e,
        f = this,
        g = f.config,
        h = {};b = (0, _utils.pluckNumber)(a.x, f.getScaledVal(g.x, !0)), c = (0, _utils.pluckNumber)(a.y, f.getScaledVal(g.y, !1)), d = (0, _utils.pluckNumber)(a.toX, b, f.getScaledVal(g.tox, !0)), e = (0, _utils.pluckNumber)(a.toY, c, f.getScaledVal(g.toy, !1)), g.pathStr ? (h.path = f.getScaledPath(), h.transform = `T${b},${c}`) : h.path = `M${b},${c}L${d},${e}`, f._setConfig('attr', h);
  }_getAnnotationAttrs() {
    let a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.config,
        h = f._getConfig('attr') || {},
        i = g.borderThickness,
        j = g.dashArrayStr,
        k = g.color;return (h.stroke = k, h.fill = k, h['stroke-width'] = i, h['stroke-dasharray'] = j, a = h.x || f.getScaledVal(g.x, !0), b = h.y || f.getScaledVal(g.y, !1), c = h.toX || f.getScaledVal(g.tox, !0), d = h.toY || f.getScaledVal(g.toy, !1), h.path) ? h : (e = f.getScaledPath(), e ? (h.path = e, h.transform = h.transform || `T${a},${b}`) : h.path = h.path || `M${a},${b}L${c},${d}`, h);
  }
}exports.default = PathAnnotation;
},{"./utils":186,"./annotation-shape":213}],190:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _annotationShape = require('./annotation-shape');

var _annotationShape2 = _interopRequireDefault(_annotationShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_RADIUS = 0;class RectAnnotation extends _annotationShape2.default {
  _configureShape(a) {
    let b = this;b.config.xRadius = (0, _utils.pluckNumber)(parseFloat(a.radius), DEFAULT_RADIUS), b.config.elementType = 'rect';
  }getExtraEditableRequests() {
    let a = this,
        b = [{ name: 'radius', value: (0, _utils.toPrecision)(a.config.xRadius, 2) }, { name: 'fillColor', value: a.config.rawColor }, { name: 'fillAlpha', value: a.config.rawAlpha }, { name: 'fillRatio', value: (0, _utils.getFirstValue)(a.config.rawRatio, '') }, { name: 'fillAngle', value: a.config.rawAngle }, { name: 'fillPattern', value: 'radial' === a.config.rawFillPattern }, { name: 'showBorder', value: 1 === a.config.showBorder }, { name: 'borderColor', value: a.config.rawBorderColor }, { name: 'borderThickness', value: a.config.borderThickness }, { name: 'borderAlpha', value: a.config.rawBorderAlpha }];return b;
  }updateAttr(a) {
    var b = Math.abs;let c,
        d,
        e,
        f,
        g = this,
        h = this.config;c = (0, _utils.pluckNumber)(a.x, g.getScaledVal(h.x, !0)), d = (0, _utils.pluckNumber)(a.y, g.getScaledVal(h.y, !1)), e = (0, _utils.pluckNumber)(a.toX, g.getScaledVal(h.tox, !0)), f = (0, _utils.pluckNumber)(a.toY, g.getScaledVal(h.toy, !1)), 0 <= f && 0 <= d && f < d && ([d, f] = [f, d]), 0 <= e && 0 <= c && e < c && ([c, e] = [e, c]), g._setConfig('attr', { x: c, y: d, width: b(e - c), height: b(f - d) });
  }_getAnnotationAttrs() {
    var a = Math.abs;let b = this,
        c = b.config,
        d = b._getConfig('attr') || {},
        e = b.getScaledVal(c.x),
        f = b.getScaledVal(c.y),
        g = c.xRadius,
        h = b.getScaledVal(c.tox),
        i = b.getScaledVal(c.toy),
        j = c.borderColor,
        k = c.borderThickness,
        l = c.dashArrayStr,
        m = c.color;return d.x = 'undefined' == typeof d.x ? e : d.x, d.y = 'undefined' == typeof d.y ? f : d.y, d.width = 'undefined' == typeof d.width ? a(h - e) : d.width, d.height = 'undefined' == typeof d.height ? a(i - f) : d.height, d.r = b.getScaledVal(g), d.fill = m, d.stroke = j, d['stroke-width'] = k, d['stroke-dasharray'] = l, d;
  }
}exports.default = RectAnnotation;
},{"./utils":186,"./annotation-shape":213}],191:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationShape = require('./annotation-shape');

var _annotationShape2 = _interopRequireDefault(_annotationShape);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_POLYGON_SIDES = 5,
      DEFAULT_ANGLE_START = 0;class PolygonAnnotation extends _annotationShape2.default {
  _configureShape(a) {
    let b = this;b.config.sides = (0, _utils.pluckNumber)((0, _utils.clampNumber)(a.sides, 3), DEFAULT_POLYGON_SIDES), b.config.startAngle = (0, _utils.pluckNumber)(parseFloat(a.startAngle), DEFAULT_ANGLE_START), b.config.xRadius = (0, _utils.pluckNumber)(parseFloat(a.radius), 0), b.config.elementType = 'polypath';
  }getExtraEditableRequests() {
    let a = this,
        b = [{ name: 'radius', value: (0, _utils.toPrecision)(a.config.xRadius, 2) }, { name: 'sides', value: a.config.sides }, { name: 'startAngle', value: a.config.startAngle }, { name: 'fillColor', value: a.config.rawColor }, { name: 'fillAlpha', value: a.config.rawAlpha }, { name: 'fillRatio', value: (0, _utils.getFirstValue)(a.config.rawRatio, '') }, { name: 'fillAngle', value: a.config.rawAngle }, { name: 'fillPattern', value: 'radial' === a.config.rawFillPattern }, { name: 'showBorder', value: 1 === a.config.showBorder }, { name: 'borderColor', value: a.config.rawBorderColor }, { name: 'borderThickness', value: a.config.borderThickness }, { name: 'borderAlpha', value: a.config.rawBorderAlpha }];return b;
  }updateAttr(a) {
    let b,
        c = this,
        d = c.config;b = [d.sides, (0, _utils.pluckNumber)(a.x, c.getScaledVal(d.x, !0)), (0, _utils.pluckNumber)(a.y, c.getScaledVal(d.y, !1)), c.getScaledVal(d.xRadius), d.startAngle, 0], c._setConfig('attr', { polypath: b });
  }_getAnnotationAttrs() {
    let a = this,
        b = a.config,
        c = a._getConfig('attr') || {},
        d = b.sides,
        e = b.x,
        f = b.y,
        g = b.color,
        h = b.startAngle,
        i = b.borderColor,
        j = b.borderThickness,
        k = b.dashArrayStr,
        l = b.xRadius;return c.fill = g, c.stroke = i, c['stroke-width'] = j, c['stroke-dasharray'] = k, c.polypath = c.polypath || [d, a.getScaledVal(e, !0), a.getScaledVal(f, !1), a.getScaledVal(l), h, 0], c;
  }
}exports.default = PolygonAnnotation;
},{"./annotation-shape":213,"./utils":186}],219:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const LABEL_STYLES = { overflow: 'hidden', whitespace: 'nowrap', "text-overflow": 'ellipsis', "vertical-align": 'middle', position: 'relative', "text-align": 'right', "padding-right": '4px', "font-size": '0.8em', "font-weight": '500' },
      INPUT_STYLES = { "vertical-align": 'middle', border: '1px solid #cccccc', position: 'relative', "padding-left": '4px', "padding-right": '4px', "padding-top": '2px', "font-size": '0.8em', "padding-bottom": '2px' };let store = { id: { label: { innerHTML: 'Identifier', attrs: { for: 'fc-editor-id-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-id-input', "data-config-key": 'id' }, styles: INPUT_STYLES } }, color: { label: { innerHTML: 'Color', attrs: { for: 'fc-editor-color-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-color-input', "data-config-key": 'color' }, styles: INPUT_STYLES } }, alpha: { label: { innerHTML: 'Alpha', attrs: { for: 'fc-editor-alpha-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', min: 0, max: 100, id: 'fc-editor-alpha-input', "data-config-key": 'alpha' }, styles: INPUT_STYLES } }, showBorder: { label: { innerHTML: 'Show Border', attrs: { for: 'fc-editor-show-border-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'checkbox', id: 'fc-editor-show-border-input', "data-config-key": 'showborder' }, props: {}, styles: INPUT_STYLES } }, dashed: { label: { innerHTML: 'Dashed', attrs: { for: 'fc-editor-dashed-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'checkbox', id: 'fc-editor-dashed-input', "data-config-key": 'dashed' }, props: {}, styles: INPUT_STYLES } }, dashLen: { label: { innerHTML: 'Dash Length', attrs: { for: 'fc-editor-dash-len-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', id: 'fc-editor-dash-len-input', "data-config-key": 'dashlen' }, styles: INPUT_STYLES } }, dashGap: { label: { innerHTML: 'Dash Gap', attrs: { for: 'fc-editor-dash-gap-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', id: 'fc-editor-dash-gap-input', "data-config-key": 'dashgap' }, styles: INPUT_STYLES } }, tooltext: { label: { innerHTML: 'Tool Text', attrs: { for: 'fc-editor-tool-text-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-tool-text-input', "data-config-key": 'tooltext' }, styles: INPUT_STYLES } }, url: { label: { innerHTML: 'URL', attrs: { for: 'fc-editor-url-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-url-input', "data-config-key": 'url' }, styles: INPUT_STYLES } }, radius: { label: { innerHTML: 'Radius', attrs: { for: 'fc-editor-radius-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-url-input', "data-config-key": 'xradius' }, styles: INPUT_STYLES } }, startAngle: { label: { innerHTML: 'Start Angle', attrs: { for: 'fc-editor-start-angle-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', min: 0, max: 360, id: 'fc-editor-start-angle-input', "data-config-key": 'startangle' }, styles: INPUT_STYLES } }, endAngle: { label: { innerHTML: 'End Angle', attrs: { for: 'fc-editor-end-angle-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', min: 0, max: 360, id: 'fc-editor-end-angle-input', "data-config-key": 'endangle' }, styles: INPUT_STYLES } }, innerRadius: { label: { innerHTML: 'Inner Radius', attrs: { for: 'fc-editor-inner-radius-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', id: 'fc-editor-inner-radius-input', "data-config-key": 'innerradius' }, styles: INPUT_STYLES } }, fillColor: { label: { innerHTML: 'Fill Color', attrs: { for: 'fc-editor-fill-color-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-fill-color-input', "data-config-key": 'fillcolor' }, styles: INPUT_STYLES } }, fillAlpha: { label: { innerHTML: 'Fill Alpha', attrs: { for: 'fc-editor-fill-alpha-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-fill-alpha-input', "data-config-key": 'fillalpha' }, styles: INPUT_STYLES } }, fillRatio: { label: { innerHTML: 'Fill Ratio', attrs: { for: 'fc-editor-fill-ratio-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-fill-ratio-input', "data-config-key": 'fillratio' }, styles: INPUT_STYLES } }, fillAngle: { label: { innerHTML: 'Fill Angle', attrs: { for: 'fc-editor-fill-angle-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-fill-angle-input', "data-config-key": 'fillangle' }, styles: INPUT_STYLES } }, fillPattern: { label: { innerHTML: 'Radial Gradient', attrs: { for: 'fc-editor-fill-pattern-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'checkbox', id: 'fc-editor-fill-pattern-input', "data-config-key": 'fillpattern' }, props: {}, styles: INPUT_STYLES } }, borderColor: { label: { innerHTML: 'Border Color', attrs: { for: 'fc-editor-border-color-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-border-color-input', "data-config-key": 'bordercolor' }, styles: INPUT_STYLES } }, borderThickness: { label: { innerHTML: 'Border Thickness', attrs: { for: 'fc-editor-border-thickness-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', id: 'fc-editor-border-thickness-input', "data-config-key": 'borderthickness' }, styles: INPUT_STYLES } }, borderAlpha: { label: { innerHTML: 'Border Alpha', attrs: { for: 'fc-editor-border-alpha-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', min: 0, max: 100, id: 'fc-editor-border-alpha-input', "data-config-key": 'borderalpha' }, styles: INPUT_STYLES } }, thickness: { label: { innerHTML: 'Thickness', attrs: { for: 'fc-editor-thickness-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', id: 'fc-editor-thickness-input', "data-config-key": 'thickness' }, styles: INPUT_STYLES } }, sides: { label: { innerHTML: 'Sides', attrs: { for: 'fc-editor-sides-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'number', min: 3, id: 'fc-editor-sides-input', "data-config-key": 'sides' }, styles: INPUT_STYLES } }, text: { label: { innerHTML: 'Text', attrs: { for: 'fc-editor-text-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-text-input', "data-config-key": 'text' }, styles: INPUT_STYLES } }, font: { label: { innerHTML: 'Font', attrs: { for: 'fc-editor-text-font-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-text-font-input', "data-config-key": 'font' }, styles: INPUT_STYLES } }, fontSize: { label: { innerHTML: 'Font Size', attrs: { for: 'fc-editor-text-size-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-text-size-input', "data-config-key": 'fontsize' }, styles: INPUT_STYLES } }, bold: { label: { innerHTML: 'Bold', attrs: { for: 'fc-editor-text-bold-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'checkbox', id: 'fc-editor-text-bold-input', "data-config-key": 'bold' }, props: {}, styles: INPUT_STYLES } }, italic: { label: { innerHTML: 'Italics', attrs: { for: 'fc-editor-text-italic-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'checkbox', id: 'fc-editor-text-italic-input', "data-config-key": 'italic' }, props: {}, styles: INPUT_STYLES } }, textBackground: { label: { innerHTML: 'Background', attrs: { for: 'fc-editor-text-bg-input' }, styles: LABEL_STYLES }, input: { attrs: { type: 'text', id: 'fc-editor-text-bg-input', "data-config-key": 'bgcolor' }, styles: INPUT_STYLES } } };function getEditableSructure(a) {
  let b,
      c,
      d,
      e,
      f,
      g,
      h,
      j = [],
      k = 0,
      l = [];for (b = 0, c = a.length; b < c; b++) d = a[b].name, e = a[b].value, f = a[b].labelStyle, g = a[b].inputStyle, h = JSON.parse(JSON.stringify(store[d])), 'checkbox' === h.input.attrs.type ? h.input.props.checked = e : h.input.attrs.value = e, h.label.styles = f || LABEL_STYLES, h.input.styles = g || INPUT_STYLES, l.push(h), k++, 2 == k ? (j.push(l), l = [], k = 0) : b === c - 1 && (j.push(l), l = [], k = 0);return j;
}exports.default = getEditableSructure;
},{}],192:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationShape = require('./annotation-shape');

var _annotationShape2 = _interopRequireDefault(_annotationShape);

var _utils = require('./utils');

var _editableProperties = require('./editable-properties');

var _editableProperties2 = _interopRequireDefault(_editableProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImageAnnotation extends _annotationShape2.default {
  _configureShape(a) {
    let b = this,
        c = b.config,
        d = b.groupConfig.scaleX || 1,
        e = b.groupConfig.scaleY || 1;c.url = (0, _utils.getValidValue)(a.url), c.xScale = (0, _utils.pluckNumber)(a.xScale, 100) / 100, c.yScale = (0, _utils.pluckNumber)(a.yScale, 100) / 100, c.width = (0, _utils.pluckNumber)(a.width, 0), c.height = (0, _utils.pluckNumber)(a.height, 0), c.align = (0, _utils.pluck)(a.align, 'left'), c.vAlign = (0, _utils.pluck)(a.vAlign, 'top'), c.xScale *= d, c.yScale *= e, c.elementType = 'image';
  }getEditorConfig() {
    let a = this;return a.editorConfig = (0, _editableProperties2.default)([{ name: 'id', value: a.config.id }, { name: 'url', value: a.config.url }, { name: 'tooltext', value: a.config.toolText }]), a.editorConfig;
  }updateAttr(a) {
    let b = this,
        c = b.config;b._setConfig('attr', { x: (0, _utils.pluckNumber)(a.x, b.getScaledVal(c.x, !0)), y: (0, _utils.pluckNumber)(a.y, b.getScaledVal(c.y, !1)) });
  }_getAnnotationAttrs() {
    let a = this,
        b = a.config,
        c = a._getConfig('attr') || {},
        d = b.url,
        e = b.x,
        f = b.y;return c.x = 'undefined' == typeof c.x ? a.getScaledVal(e, !0) : c.x, c.y = 'undefined' == typeof c.y ? a.getScaledVal(f, !1) : c.y, c.src = d, c.width = b.width, c.height = b.height, c;
  }
}exports.default = ImageAnnotation;
},{"./annotation-shape":213,"./utils":186,"./editable-properties":219}],193:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationShape = require('./annotation-shape');

var _annotationShape2 = _interopRequireDefault(_annotationShape);

var _editableProperties = require('./editable-properties');

var _editableProperties2 = _interopRequireDefault(_editableProperties);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const POSITION_BOTTOM = 'bottom',
      POSITION_TOP = 'top',
      POSITION_MIDDLE = 'middle',
      BOLD = 'bold',
      DEFAULT_RADIUS = 0,
      DEFAULT_BORDER_PADDING = 2,
      DEFAULT_BORDER_THICKNESS = 1,
      DEFAULT_COLOR = '#FF0000',
      DEFAULT_ALPHA = 100,
      FULL_ANGLE_DEGREES = 360,
      RADIAL = 'radial',
      DEFAULT_FILL_ANGLE = 0,
      DEFAULT_FONT_SIZE = 10,
      ITALIC = 'italic',
      NORMAL = 'normal',
      TEXT_ALIGN_OPTIONS = { left: 'start', right: 'end', center: 'middle' },
      TEXT_V_ALIGN_OPTIONS = { top: 'bottom', middle: 'middle', bottom: 'top' },
      TEXT_ROTATION_OPTIONS = { 0: '0', 1: '270', right: '90', cw: '90', left: '270', ccw: '270' };function isValidColor(a) {
  return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) ? a : /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(a) && '#' + a
  );
}class AnnotaionText extends _annotationShape2.default {
  _configureShape(a) {
    let b = this,
        c = b.groupConfig;b.config.text = (0, _utils.parseUnsafeString)((0, _utils.pluck)(a.text, a.label, '')), b.config.font = (0, _utils.pluck)(a.font, c.font, 'Verdana, sans'), b.config.fontSize = (0, _utils.pluckFontSize)(a.fontSize, c.fontSize, DEFAULT_FONT_SIZE), b.config.align = (0, _utils.pluck)(TEXT_ALIGN_OPTIONS[a.align], TEXT_ALIGN_OPTIONS[c.textAlign], 'middle'), b.config.vAlign = (0, _utils.pluck)(TEXT_V_ALIGN_OPTIONS[a.vAlign], TEXT_V_ALIGN_OPTIONS[c.textVAlign], 'middle'), b.config.radius = (0, _utils.pluckNumber)(parseFloat(a.radius), DEFAULT_RADIUS), b.config.fontWeight = (0, _utils.pluckNumber)(a.bold, 0) ? BOLD : NORMAL, b.config.fontStyle = (0, _utils.pluckNumber)(a.italic, 0) ? ITALIC : NORMAL, b.config.bgColor = isValidColor(a.bgColor) ? a.bgColor : 'none', b.config.borderThickness = (0, _utils.pluckNumber)(parseFloat(b.rawConfig.borderThickness), parseFloat(b.rawConfig.thickness), DEFAULT_BORDER_THICKNESS), b.config.rotateText = (0, _utils.pluck)(a.rotateText, c.rotateText, '0'), b.config.rotateAngle = TEXT_ROTATION_OPTIONS[b.config.rotateText], b.config.wrap = (0, _utils.pluckNumber)(a.wrap, c.wrapText, a.wrapHeight, a.wrapWidth, 1), b.config.wrap && (b.config.wrapWidth = (0, _utils.pluckNumber)(a.wrapWidth), b.config.wrapHeight = (0, _utils.pluckNumber)(a.wrapHeight)), b.config.leftMargin = (0, _utils.pluckNumber)(a.leftMargin, 0), b.config.elementType = 'text';
  }getEditorConfig() {
    let a = this,
        b = [{ name: 'id', value: a.config.id }, { name: 'text', value: a.config.text }, { name: 'font', value: a.config.font }, { name: 'fontSize', value: a.config.fontSize }, { name: 'bold', value: a.config.fontWeight === BOLD }, { name: 'italic', value: a.config.fontStyle === ITALIC }, { name: 'textBackground', value: a.config.bgColor ? a.config.bgColor : '' }];return (0, _editableProperties2.default)(b);
  }getText() {
    let a,
        b = this,
        c = b.config,
        d = b._getFromStore('smartLabel'),
        e = c.wrap,
        f = b._getFromStore('annotation-group'),
        g = f && f._getConfig('scaleText'),
        h = g ? b.getScaledVal(c.wrapWidth, !0) : c.wrapWidth,
        i = g ? b.getScaledVal(c.wrapHeight, !1) : c.wrapHeight,
        j = { fontStyle: c.fontStyle, fontFamily: c.font, fontWeight: c.fontWeight, fontSize: c.fontSize + 'px', "text-anchor": c.align, "vertical-align": c.vAlign };return (0, _utils.setLineHeight)(j), d && d.setStyle(j), a = d && e ? d.getSmartText(c.text, h, i, 0).text : c.text, a;
  }_getFillColor(a, b) {
    let c = this,
        d = c.getType(),
        e = { color: '', alpha: '', angle: '', ratio: '', radialGradient: 'circle' === d || 'arc' === d };return e.color = a.fontColor || a.fillColor || a.color || b.color || DEFAULT_COLOR, e.alpha = (0, _utils.pluck)(a.fillAlpha, parseFloat(a.alpha), b.alpha, DEFAULT_ALPHA), e.angle = FULL_ANGLE_DEGREES - (0, _utils.pluckNumber)(a.fillAngle, DEFAULT_FILL_ANGLE), e.ratio = (0, _utils.pluck)(a.fillRatio), a.fillPattern && (e.radialGradient = a.fillPattern === RADIAL || (0, _utils.pluckNumber)(a.fillPattern)), e.radialGradient && (e.gradientUnits = 'objectBoundingBox', e.cx = .5, e.cy = .5, e.fx = .5, e.fy = .5), c.config.rawColor = e.color, c.config.rawAlpha = e.alpha, c.config.rawAngle = e.angle, c.config.rawFillPattern = e.radialGradient ? 'radial' : 'linear', c.config.rawRatio = e.ratio, (0, _utils.toRaphaelColor)(e);
  }updateAttr(a) {
    let b,
        c = this,
        d = c.config,
        e = (0, _utils.pluckNumber)(a.x, c.getScaledVal(d.x, !0)),
        f = (0, _utils.pluckNumber)(a.y, c.getScaledVal(d.y, !0));'0' !== d.rotateText && (b = (0, _utils.getSuggestiveRotation)(parseFloat(d.rotateAngle), e, f)), c._setConfig('attr', { x: e, y: f, transform: b });
  }_getAnnotationAttrs() {
    let a = this,
        b = a.config,
        c = a._getConfig('attr') || {},
        d = a.getText(),
        e = a.getScaledVal(b.x, !0),
        f = a.getScaledVal(b.y, !1);return c.x = 'undefined' == typeof c.x ? e : c.x, c.y = 'undefined' == typeof c.y ? f : c.y, c.text = d, c.fill = b.color, c['text-bound'] = [(0, _utils.toRaphaelColor)(b.bgColor), b.borderColor, b.borderThickness, DEFAULT_BORDER_PADDING, b.radius, b.dashArrayStr], c['font-style'] = b.fontStyle, c['font-weight'] = b.fontWeight, c['font-family'] = b.font, c['font-size'] = a.getScaledFont(b.fontSize), c['text-anchor'] = b.align, c['vertical-align'] = b.vAlign, '0' !== b.rotateText && (c.transform = c.transform || (0, _utils.getSuggestiveRotation)(parseFloat(b.rotateAngle), e, f)), c;
  }
}exports.default = AnnotaionText;
},{"./annotation-shape":213,"./editable-properties":219,"./utils":186}],155:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationInterface = require('./annotation-interface');

var _annotationInterface2 = _interopRequireDefault(_annotationInterface);

var _mergeDeepRight = require('ramda/src/mergeDeepRight');

var _mergeDeepRight2 = _interopRequireDefault(_mergeDeepRight);

var _utils = require('./utils');

var _annotationGroup = require('./annotation-group');

var _annotationGroup2 = _interopRequireDefault(_annotationGroup);

var _annotationCircle = require('./annotation-circle');

var _annotationCircle2 = _interopRequireDefault(_annotationCircle);

var _annotationPath = require('./annotation-path');

var _annotationPath2 = _interopRequireDefault(_annotationPath);

var _annotationRect = require('./annotation-rect');

var _annotationRect2 = _interopRequireDefault(_annotationRect);

var _annotationPolygon = require('./annotation-polygon');

var _annotationPolygon2 = _interopRequireDefault(_annotationPolygon);

var _annotationImage = require('./annotation-image');

var _annotationImage2 = _interopRequireDefault(_annotationImage);

var _annotationText = require('./annotation-text');

var _annotationText2 = _interopRequireDefault(_annotationText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_SHIFT = 0,
      DEFAULT_IS_VISIBLE = !0,
      DEFAULT_ANIM_DURATION = 1e3;function createAppropriateShape(a) {
  let b;return 'circle' === a || 'arc' === a ? b = new _annotationCircle2.default() : 'line' === a || 'path' === a ? b = new _annotationPath2.default() : 'rectangle' === a ? b = new _annotationRect2.default() : 'polygon' === a ? b = new _annotationPolygon2.default() : 'image' === a ? b = new _annotationImage2.default() : 'text' === a ? b = new _annotationText2.default() : void 0, b;
}class AnnotationController extends _annotationInterface2.default {
  constructor(a = {}) {
    super(a), this.groups = [], this.setAttribute(a);
  }setAttribute(a = {}) {
    let b = {};b = (0, _mergeDeepRight2.default)(a, this.rawConfig), this.rawConfig = b, this.config.groupXShift = (0, _utils.pluckNumber)(b.groupXShift, DEFAULT_SHIFT), this.config.groupYShift = (0, _utils.pluckNumber)(b.groupYShift, DEFAULT_SHIFT), this.config.isVisible = (0, _utils.pluckBoolean)(b.isVisible, DEFAULT_IS_VISIBLE), this.config.animConfig.animDuration = (0, _utils.pluckNumber)(b.animConfig && b.animConfig.animDuration, DEFAULT_ANIM_DURATION);
  }createItem(a, b) {
    let c, d;if ('group' === a.annotationType) a.groupXShift = (0, _utils.pluckNumber)(a.groupXShift, this.config.groupXShift), a.groupYShift = (0, _utils.pluckNumber)(a.groupYShift, this.config.groupYShift), c = new _annotationGroup2.default(a), this.groups.push(c);else if (d = a.type && a.type.toLowerCase(), c = createAppropriateShape(d), !c) return;return b instanceof _annotationGroup2.default ? b.attachItem(c) : c._setGroupElement(b), c.setAttribute(a), c._setToStore('controller', this), c;
  }attachModule(a) {
    let b = this;a._setToStore('component', b.resolveDependency('component')), a._setToStore('animationManager', b.resolveDependency('animationManager')), a._setToStore('paper', b.resolveDependency('paper')), a._setToStore('smartLabel', b.resolveDependency('smartLabel')), a._setToStore('toolTipController', b.resolveDependency('toolTipController')), a._setToStore('clickFN', b.resolveDependency('clickFN')), a._setToStore('controller', b);
  }drawItem(a, b) {
    a._setGroupElement(b), a._draw();
  }retrieveItem(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = this.groups && this.groups.length;for (c = 0; c < h; c++) for (g = this.groups[c], f = g.items && g.items.length, d = 0; d < f; d++) if (e = g.items[d], e.getId() === a) return b && g.items.splice(d, 1), e;
  }retrieveGroup(a, b) {
    var c,
        d,
        e = this.groups && this.groups.length;for (c = 0; c < e; c++) if (d = this.groups[c], d.getId() === a) return b && this.groups.splice(c, 1), d;
  }injectDependency(a, b) {
    this._setToStore(a, b);
  }resolveDependency(a) {
    return this._getFromStore(a);
  }show(a) {
    super.show(a), this.groups.forEach(b => {
      b.show(a), b.items.forEach(b => {
        b.show(a);
      });
    });
  }hide(a) {
    super.hide(a), this.groups.forEach(b => {
      b.hide(a), b.items.forEach(b => {
        b.hide(a);
      });
    });
  }dispose(a, b) {
    this.groups.forEach(c => {
      c.items.forEach(c => {
        c.dispose(a, b);
      }), c.items = [], c.dispose();
    }), this.groups = [];
  }
}exports.default = AnnotationController;
},{"./annotation-interface":185,"ramda/src/mergeDeepRight":194,"./utils":186,"./annotation-group":187,"./annotation-circle":188,"./annotation-path":189,"./annotation-rect":190,"./annotation-polygon":191,"./annotation-image":192,"./annotation-text":193}],156:[function(require,module,exports) {
var _curry2 = /*#__PURE__*/require('./internal/_curry2');

/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */


var pickBy = /*#__PURE__*/_curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
module.exports = pickBy;
},{"./internal/_curry2":184}],153:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const UNDEF = void 0,
      UNDERSCORE = '_',
      DEFAULT_MACRO_PREFIX = '$',
      DEFAULT_MACRO_SEPARATOR = '.',
      pi2 = 2 * Math.PI,
      win = window,
      BLANK = '',
      COMMA = ',',
      threshold = 1e-5,
      deg2Rad = a => a * (Math.PI / 180),
      polarToCartesian = (a, b, c = !0) => {
  var d, e;return c || (b = deg2Rad(b)), d = a * Math.cos(b), e = a * Math.sin(b), { x: d, y: e };
},
      getQuadrant = (a, b, c) => a.x >= b ? a.y <= c ? 0 : 3 : a.y <= c ? 1 : 2,
      computePieSliceBBox = a => {
  var b = Math.abs,
      c = Math.min,
      d = Math.max;let e,
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
      p = [],
      q = [-pi2, -3 * pi2 / 2, -pi2 / 2, -pi2 / 4],
      r = [],
      s = a.ringpath,
      t = 1 / 0,
      u = 1 / 0,
      v = -Infinity,
      w = -Infinity;e = s[2], f = s[3], g = s[4] % pi2, h = s[5] % pi2, l = s[0], m = s[1], i = polarToCartesian(e, g), j = polarToCartesian(e, h), i.x += l, j.x += l, i.y += m, j.y += m, p.push(getQuadrant(i, s[0], s[1])), p.push(getQuadrant(j, s[0], s[1])), p.sort(), g === h && 0 === g ? (n = 0, o = 4) : (n = p[0], o = p[1]);for (let b = n; b < o; b++) k = polarToCartesian(e, q[b]), k.x += l, k.y += m, r.push(k);r.push(i), r.push(j), i = polarToCartesian(f, g), j = polarToCartesian(f, h), i.x += l, j.x += l, i.y += m, j.y += m, r.push(i), r.push(j);for (let b = 0; b < r.length; b++) v = d(v, r[b].x), t = c(t, r[b].x), w = d(w, r[b].y), u = c(u, r[b].y);return { x: t, y: u, width: b(v - t), height: b(u - w) };
},
      getEllipticalPoint = (c, a, b) => {
  var d = Math.sqrt,
      e = Math.abs;let f, g, h;return h = Math.tan(b), f = c * a / d(a * a + c * c * h * h), g = c * a / d(c * c + a * a / (h * h)), b > pi2 / 4 && b < 3 * pi2 / 4 ? f *= -1 : f = e(f), b > pi2 / 2 && b < pi2 ? g *= -1 : g = e(g), e(f) <= threshold && (f = 0), e(g) <= threshold && (g = 0), { x: f, y: g };
},
      compute3DSliceBounds = (c, d) => {
  let e,
      f,
      g = d.props.element.attr,
      h = g.radiusYFactor,
      i = g.r,
      a = i * h,
      b = g.cx,
      j = g.cy,
      k = g.sAngle,
      l = g.eAngle;return 'x' === c || 'middlex' === c || 'centerx' === c ? (e = (k + l) / 2, f = getEllipticalPoint(i, a, e).x + b) : 'y' === c || 'middley' === c || 'centery' === c ? (e = (k + l) / 2, f = getEllipticalPoint(i, a, e).y + j) : 'startx' === c ? f = getEllipticalPoint(i, a, k).x + b : 'starty' === c ? f = getEllipticalPoint(i, a, k).y + j : 'endx' === c ? f = getEllipticalPoint(i, a, l).x + b : 'endy' === c ? f = getEllipticalPoint(i, a, l).y + j : void 0, f;
},
      computeSliceBounds = (a, b) => {
  let c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = b.props.element.attr,
      l = k.ringpath;return d = l[0], e = l[1], f = l[2], h = l[4], i = l[5], ('x' === a || 'middlex' === a || 'centerx' === a ? (j = (h + i) / 2, c = polarToCartesian(f, j), g = c.x + d) : 'y' === a || 'middley' === a || 'centery' === a ? (j = (h + i) / 2, c = polarToCartesian(f, j), g = c.y + e) : 'startx' === a ? g = polarToCartesian(f, i).x + d : 'starty' === a ? g = polarToCartesian(f, i).y + e : 'endx' === a ? g = polarToCartesian(f, h).x + d : 'endy' === a ? g = polarToCartesian(f, h).y + e : void 0, g);
},
      computePlotBounds = (a, b) => {
  let c,
      d,
      e,
      f,
      g,
      h = a.config || a;return 'column3D' === b || 'bar2D' === b || 'bar3D' === b || 'paretoColumn' === b || 'waterFall2D' === b || 'errorBar2D' === b || 'candlestick' === b || 'heatMap' === b || 'dragColumn' === b || 'sparkColumn' === b || 'marimekko' === b || 'task' === b || 'column' === b ? (d = h.props.element.attr, c = { x: d.x, y: d.y, width: d.width, height: d.height }) : 'line' === b || 'zoomLine' === b || 'zoomScatter' === b || 'scatter' === b || 'spline' === b || 'splinearea' === b || 'multiaxisline' === b || 'stepLine' === b || 'errorScatter' === b || 'errorLine' === b || 'radar' === b || 'selectScatter' === b || 'dragLine' === b || 'dragArea' === b || 'kagi' === b || 'sparkLine' === b || 'area' === b ? (e = a._xPos, f = a._yPos, g = +h.anchorProps.radius || 0, c = { x: e - g, y: f - g, width: 2 * g, height: 2 * g }) : 'bubble' === b ? (d = h.props.element.attr, c = { x: d.cx - d.r, y: d.cy - d.r, width: 2 * d.r, height: 2 * d.r }) : 'dragNode' === b ? (d = h.props.element.attr, 'rect' === h.shapeType ? c = { x: d.x, y: d.y, width: d.width, height: d.height } : (e = h._xPos, f = h._yPos, g = +h.radius || 0, c = { x: e - g, y: f - g, width: 2 * g, height: 2 * g })) : 'boxandwhisker2D' === b ? (d = h.props.upperBoxElem.attr, c = { x: d.x, y: d.y, width: d.width, height: d.height }) : 'category' === b || 'polarCategory' === b || 'log' === b || 'numeric' === b ? (d = h.props.label.attr, c = { x: d.x - h.width / 2, y: d.y - h.height / 2, width: h.width, height: h.height }, 'end' === d['text-anchor'] || 'left' === d['text-anchor'] ? c.x = d.x - h.width : ('start' === d['text-anchor'] || 'right' === d['text-anchor']) && (c.x = d.x), 'top' === d['vertical-align'] ? c.y = d.y : 'bottom' === d['vertical-align'] && (c.y = d.y - h.height)) : 'doughnut2D' === b || 'multiLevelPie' === b || 'pie2D' === b ? (d = h.props.element.attr, c = computePieSliceBBox(d)) : void 0, c;
},
      cleanMacro = a => {
  let b,
      c,
      d = '';for (b = 0, c = a.length; b < c; b++) ' ' !== a[b] && (d += a[b]);return d;
},
      arrangeItems = (a = []) => {
  let b,
      c,
      d = [],
      e = [];for (c = a.length, b = 0; b < c; b++) 'text' === a[b].type ? e.push(a[b]) : d.push(a[b]);return d.concat(e);
};function pluck() {
  var a, b, c;for (b = 0, c = arguments.length; b < c; b += 1) if (a = arguments[b], a || !1 === a || 0 === a) return a;return UNDEF;
}const xyCalculator = (a, b) => {
  var c = 0;return c = 'startx' === a ? b.x : 'starty' === a ? b.y : 'x' === a || 'middlex' === a || 'centerx' === a ? b.x + b.width / 2 : 'y' === a || 'middley' === a || 'centery' === a ? b.y + b.height / 2 : 'endx' === a ? b.x + b.width : 'endy' === a ? b.y + b.height : 0, c;
},
      axisMacroParser = function (a, b) {
  return function (c) {
    let d,
        e,
        f,
        g,
        h = c.split(DEFAULT_MACRO_SEPARATOR).slice(1),
        i = isNaN(+h[0]) ? 0 : +h[0],
        j = isNaN(+h[0]) ? h[1] : h[2],
        k = isNaN(+h[0]) ? h[2] : h[3];return d = a.getChildren(b)[i], g = d.components, j = +j, g.labelIndexArr && (j = g.labelIndexArr[j]), e = g.labels[j].config, f = computePlotBounds(e, d.getName()), xyCalculator(k, f);
  };
},
      getEventData = (a, b, c) => {
  let d = b._getFromStore('element'),
      e = c.getFromEnv('getMouseCoordinate')(c.getFromEnv('chart-container'), a, c),
      f = b._getFromStore('annotation-group');return { element: d, rawConfig: b.getAttribute(), pageX: e.pageX, pageY: e.pageY, chartX: e.chartX, chartY: e.chartY, annotationId: b.getId(), groupId: f && f.getId(), annotationOptions: b.rawConfig, groupOptions: f && f.rawConfig };
},
      defaultAnnotationClick = (a, b) => function (c) {
  b.fireChartInstanceEvent('annotationclick', getEventData(c, a, b), UNDEF, UNDEF, c);
},
      defaultAnnotationRollOver = (a, b) => function (c) {
  b.fireChartInstanceEvent('annotationrollover', getEventData(c, a, b), UNDEF, UNDEF, c);
},
      defaultAnnotationRollOut = (a, b) => function (c) {
  b.fireChartInstanceEvent('annotationrollout', getEventData(c, a, b), UNDEF, UNDEF, c);
},
      limitedEvalParser = function () {
  var a = /^@window_/g;return function (b, c, d) {
    var e,
        f,
        g,
        h,
        j,
        k = b.replace(/\[[\'\"]/g, '.').replace(/[\'\"]\]/g, BLANK).replace(/\[/g, '.@window_').replace(/\]/g, BLANK),
        m = k.split('.'),
        n = win,
        o = BLANK;for (h = m.length, j = 0; j < h; j += 1) {
      if (g = m[j], e = n, g.match(a)) f = win[g.replace(a, BLANK)], n = n[f];else if (n === UNDEF || null === n) throw (o || g).replace(a, BLANK) + ' is not defined';else n = n[g];o = g;
    }if (n && ('function' == typeof n.call || n === win.alert)) n === win.alert ? n(c) : d ? n.apply(e, c.split('__FC_ARG_SEP__')) : n.call(e, c);else {
      if ('void' === o) return;setTimeout(function () {
        throw g.replace(a, BLANK) + '() is not a function';
      }, 0);
    }
  };
}();function pluckNumber(...a) {
  var b, c, d;for (c = 0, d = a.length; c < d; c += 1) {
    if (b = a[c], !b && !1 !== b && 0 !== b) continue;else if (isNaN(b = +b)) continue;return b;
  }
}function getLinkedChartDataJSON(a, b) {
  var c,
      d = { chart: {} },
      e = b;if (a = a.toLowerCase(), e.linkeddata) for (c = 0; c < e.linkeddata.length; c += 1) e.linkeddata[c].id.toLowerCase() === a && (d = e.linkeddata[c].linkedchart || e.linkeddata[c].linkedmap);return d;
}function executeJS(a, b) {
  limitedEvalParser(a.substr(0, a.indexOf('__FC_ARG_SEP__')), a.substr(a.indexOf('__FC_ARG_SEP__')).replace(/__FC_ARG_SEP__/, ''), b);
}function pseudoEval(a) {
  /^j\s*\-/.test(a) ? executeJS(a.replace(/^j\s*\-/, BLANK).replace(/\-/, '__FC_ARG_SEP__')) : executeJS(a.replace(/^javascript\s*\:/i, BLANK).replace(/[\'\"]?\s*\,\s*[\'\"]?/g, '__FC_ARG_SEP__').replace(/\(\s*[\'\"]?(.*)\)\;?/, '__FC_ARG_SEP__$1').replace(/[\'\"]?$/, ''), !0);
}function getLinkAction(a, b) {
  var c = function (a) {
    return a;
  };return function (d) {
    if (!(d && b.config.clickURLOverridesPlotLinks)) {
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
          p = a.chart || a.map || {},
          q = pluckNumber(p.unescapelinks, 1),
          r = this.entity || UNDEF,
          s = this.entityBox || UNDEF,
          t = this.link,
          u = t;if (t !== UNDEF) {
        switch (q && (t = win.decodeURIComponent ? win.decodeURIComponent(t) : win.unescape(t)), t = t.replace(/^\s+/, BLANK).replace(/\s+$/, BLANK), -1 !== t.search(/^[a-z]*\s*[\-\:]\s*/i) && (i = t.split(/\s*[\-\:]\s*/)[0].toLowerCase(), o = i.length), d && (b.config.hotElemClicked = !0), i) {case 'j':case 'javascript':
            pseudoEval(t);break;case 'n':
            t.replace(/^n\s*\-/i, 'n-'), win.open(c(t.slice(2), q));break;case 'f':
            t = t.replace(/^f\s*\-/i, 'f-'), e = t.indexOf('-', 2), -1 === e ? win.open(c(t.slice(2), q)) : (f = t.substr(2, e - 2), f && win.frames[f] ? win.frames[f].location = c(t.slice(e + 1), q) : win.open(c(t.slice(e + 1), q), f));break;case 'p':
            t = t.replace(/p\s*\-/i, 'p-'), e = t.indexOf('-', 2), g = t.indexOf(COMMA, 2), -1 === e && (e = 1), h = c(t.slice(e + 1), q), n = win.open(h, t.substr(2, g - 2), t.substr(g + 1, e - g - 1)), n && n.focus();break;case 'newchart':case 'newmap':
            ':' === t.charAt(o) && (e = t.indexOf('-', o + 1), m = t.substring(o + 1, e), o = e), e = t.indexOf('-', o + 1), j = t.substring(o + 1, e).toLowerCase(), 'xmlurl' === j || 'jsonurl' === j ? l = t.substring(e + 1, t.length) : 'xml' === j || 'json' === j ? (k = t.substring(e + 1, t.length), l = getLinkedChartDataJSON(k, a), j = 'json') : void 0, b.fireChartInstanceEvent('linkedChartInvoked', { alias: m, linkType: j.toUpperCase(), data: l, clickedEntity: r, clickedEntityBox: s });break;default:
            win.location.href = c(t, q);}b.fireChartInstanceEvent('linkClicked', { linkProvided: u, linkInvoked: t, linkAction: i && i.toLowerCase() });
      }
    }
  };
}exports.deg2Rad = deg2Rad;
exports.polarToCartesian = polarToCartesian;
exports.getQuadrant = getQuadrant;
exports.computePlotBounds = computePlotBounds;
exports.computePieSliceBBox = computePieSliceBBox;
exports.computeSliceBounds = computeSliceBounds;
exports.compute3DSliceBounds = compute3DSliceBounds;
exports.cleanMacro = cleanMacro;
exports.pluck = pluck;
exports.arrangeItems = arrangeItems;
exports.axisMacroParser = axisMacroParser;
exports.xyCalculator = xyCalculator;
exports.UNDEF = UNDEF;
exports.UNDERSCORE = UNDERSCORE;
exports.defaultAnnotationClick = defaultAnnotationClick;
exports.defaultAnnotationRollOut = defaultAnnotationRollOut;
exports.defaultAnnotationRollOver = defaultAnnotationRollOver;
exports.DEFAULT_MACRO_PREFIX = DEFAULT_MACRO_PREFIX;
exports.DEFAULT_MACRO_SEPARATOR = DEFAULT_MACRO_SEPARATOR;
exports.getLinkAction = getLinkAction;
},{}],154:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let elementAnimationObject = () => [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'initial' }];exports.default = { "initial.extension.annotation": () => ({ "polypath.appearing": elementAnimationObject, "text.appearing": elementAnimationObject, "image.appearing": elementAnimationObject, "ellipse.appearing": elementAnimationObject, "ringpath.appearing": elementAnimationObject, "path.appearing": elementAnimationObject, "rect.appearing": elementAnimationObject, "*": null }) };
},{}],151:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b,
      c = Math,
      d = c.cos,
      e = c.sin,
      f = c.abs,
      g = c.pow,
      h = c.PI,
      i = 2 * h,
      j = g(2, -24),
      k = .01;a.define && a.define([{ name: 'ringpath', ringpath: function () {
      return this.path(b, a._lastArgIfGroup(arguments));
    }, ca: function (a, b, c, g, l, m, n, p) {
      var q,
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
          o = m % i - l % i,
          F = m - l,
          G = .0001745329;return isNaN(n) && (n = c), isNaN(p) && (p = g), E._.ringangle = .5 * (l + m), f(F) < j ? (q = d(l), r = e(l), v = ['M', a + c * q, b + n * r, 'L', a + g * q, b + p * r, 'Z']) : f(F) > j && +(f(F) % i < j || i - f(F) % i < j) ? (v = ['M', a - c, b, 'A', c, n, 0, 0, 0, a + c, b, 'A', c, n, 0, 0, 0, a - c, b], (0 !== g || 0 !== p) && (v = v.concat(['M', a - g, b, 'A', g, p, 0, 0, 1, a + g, b, 'A', g, p, 0, 0, 1, a - g, b])), v.push('Z')) : (q = d(l), r = e(l), s = d(m), t = e(m), o %= i, 0 > o && (o += i), u = o < h ? 0 : 1, w = a + c * q, A = b + n * r, x = a + c * s, B = b + n * t, y = a + g * s, C = b + p * t, f(w - x) < k && f(A - B) < k && (w = a + c * d(l + G), A = b + n * e(l + G)), v = ['M', w, A, 'A', c, n, 0, u, 1, x, B, 'L', y, C], (0 !== g || 0 !== p) && (z = a + g * q, D = b + p * r, f(y - z) < k && f(C - D) < k && (z = a + g * d(l + G), D = b + p * e(l + G)), v.push('A', g, p, 0, u, 0, z, D)), v.push('Z')), { path: v };
    } }]);
};
},{}],152:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b;a.define && a.define([{ name: 'arcpath', arcpath: function () {
      return this.path(b, a._lastArgIfGroup(arguments));
    }, ca: function (a, b, c, e) {
      var f,
          g = e,
          d = Math.PI * ((g - 90) / 180),
          h = a + c * Math.cos(d),
          i = b + c * Math.sin(d),
          j = 180 < g ? 1 : 0;return f = ['M', a, b - c, 'A', c, c, 0, j, 1, h, i], { path: f };
    } }]);
};
},{}],125:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotationController = require('../vendors/fusioncharts-annotations/src/annotation-controller');

var _annotationController2 = _interopRequireDefault(_annotationController);

var _componentInterface = require('../../../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _pickBy = require('ramda/src/pickBy');

var _pickBy2 = _interopRequireDefault(_pickBy);

var _utils = require('./utils');

var _dependencyManager = require('../../../dependency-manager');

var _annotationAnimation = require('./annotation-animation');

var _annotationAnimation2 = _interopRequireDefault(_annotationAnimation);

var _redraphaelShapes = require('../../../redraphael/redraphael-shapes/redraphael-shapes.ringpath');

var _redraphaelShapes2 = _interopRequireDefault(_redraphaelShapes);

var _redraphaelShapes3 = require('../../../redraphael/redraphael-shapes/redraphael-shapes.arcpath');

var _redraphaelShapes4 = _interopRequireDefault(_redraphaelShapes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NO_ANIM_CONFIG = { animDuration: 0 },
      circular2D = ['pie2d', 'doughnut2d'],
      circular3D = ['pie3d', 'doughnut3d'],
      scale = {},
      isMacro = a => ~a.indexOf(_utils.DEFAULT_MACRO_PREFIX),
      solveEquation = a => {
  var b = +a[0];for (let c, d, e = 1, f = a.length; e < f; ++e) d = a[e], e % 2 ? c = d : '+' === c ? b += +d : '-' === c ? b -= +d : void 0;return b;
},
      getSnapPoints = a => {
  let b,
      c,
      d,
      e,
      f = a.config,
      g = a.getChildren(),
      h = g.caption[0],
      i = g.subCaption[0],
      j = g.legend && g.legend[0] || {},
      k = g.gLegend && g.gLegend[0] || {},
      l = h.config,
      m = i.config,
      n = l.width || 0,
      o = m.width || 0;return 'end' === l.align ? (b = l.x - n, d = l.x - o) : 'start' === l.align ? b = d = l.x : (b = l.x - n / 2, d = l.x - o / 2), c = f.gLegendEnabled ? k.conf : j.config, e = { canvasendx: f.canvasRight, canvasendy: f.canvasBottom, canvasheight: f.canvasHeight, canvasstartx: f.canvasLeft, canvasstarty: f.canvasTop, canvaswidth: f.canvasWidth, canvascenterx: f.canvasCenterX || f.canvasLeft + (f.canvasRight - f.canvasLeft) / 2, canvascentery: f.canvasCenterY || f.canvasTop + (f.canvasBottom - f.canvasTop) / 2, chartcenterx: f.width / 2, chartcentery: f.height / 2, chartstartx: 0, chartstarty: 0, chartendx: f.width, chartendy: f.height, chartheight: f.height, chartwidth: f.width, chartleftmargin: f.marginLeft, chartrightmargin: f.marginRight, chartbottommargin: f.marginBottom, charttopmargin: f.marginTop, captionendx: b + l.width, captionendy: l.y + l.height, captionheight: l.height, captionstartx: b, captionstarty: l.y, captionwidth: n, subcaptionendx: d + m.width, subcaptionendy: m.y + m.height, subcaptionheight: m.height, subcaptionstartx: d, subcaptionstarty: m.y, subcaptionwidth: o, legendendx: c && c.xPos + c.width, legendendy: c && c.yPos + c.height, legendheight: c && c.height, legendstartx: c && c.xPos, legendstarty: c && c.yPos, legendwidth: c && c.width, dataset: function (b) {
      let c,
          d,
          e,
          f = b.split(_utils.DEFAULT_MACRO_SEPARATOR).slice(1),
          g = [],
          h = [];return a.iterateComponents(function (a) {
        'dataset' === a.getType() && h.push(a);
      }), h.sort((c, a) => c.getJSONIndex() - a.getJSONIndex()), d = h[+f[0]], g = d.components.data, c = g[+f[2]], -1 < circular2D.indexOf(d.getName().toLowerCase()) ? (0, _utils.computeSliceBounds)(f[3], c.config) : -1 < circular3D.indexOf(d.getName().toLowerCase()) ? (0, _utils.compute3DSliceBounds)(f[3], c.config) : (e = (0, _utils.computePlotBounds)(c, d.getName()), (0, _utils.xyCalculator)(f[3], e));
    }, xaxis: (0, _utils.axisMacroParser)(a, 'xAxis'), yaxis: (0, _utils.axisMacroParser)(a, 'yAxis'), gaugestartx: f.gaugeStartX, gaugestarty: f.gaugeStartY, gaugeendx: f.gaugeEndX, gaugeendy: f.gaugeEndY, gaugecenterx: f.gaugeCenterX, gaugecentery: f.gaugeCenterY, gaugestartangle: f.gaugeStartAngle, gaugeendangle: f.gaugeEndAngle, gaugeradius: f.gaugeRadius, plotwidth: f.plotWidth, plotsemiwidth: f.plotSemiWidth }, e;
},
      getScaledVal = a => {
  let b;switch (scale.axis) {case 'x':case 'toX':
      b = scale.scaleX;break;case 'y':case 'toY':
      b = scale.scaleY;break;default:
      b = scale.scaleValue || 1;}return a * b;
},
      parseEquation = (a, b, c = _utils.DEFAULT_MACRO_PREFIX) => {
  let d,
      e,
      f,
      g,
      h,
      k,
      l = a.split(/([+])/),
      m = [],
      n = l.length;for (e = 0; e < n; e++) if (g = l[e], '+' !== g) {
    for (g = l[e], d = g.split(/([-])/), (f = 0, k = d.length); f < k; f++) h = d[f], '-' !== h && (m.push(d[f]), f < k - 1 && m.push('-'));e < n - 1 && m.push('+');
  }return m.map(a => {
    let d,
        e,
        f,
        g = '',
        h = '',
        i = '';if (a.charAt(0) === c) {
      if (h = a.replace(/[\$ ]/g, ''), i = h.split(_utils.DEFAULT_MACRO_SEPARATOR)[0], !isNaN(+h)) return +h;for (g in b) if (i === g) {
        if (e = new RegExp(g, 'g'), 'function' == typeof b[g]) try {
          d = i.replace(e, b[g](h));
        } catch (a) {
          d = i.replace(e, 0);
        } else d = i.replace(e, b[g] || 0);break;
      }
    } else f = +a, isNaN(f) ? '+' !== a && '-' !== a && (a = 0) : a = getScaledVal(f).toString(), d = a;return d;
  });
},
      parseAndCalculateMacro = function (a, b) {
  let c,
      d = this.config,
      e = { x: (0, _utils.pluck)(a.x, d.x), y: (0, _utils.pluck)(a.y, d.y), toX: (0, _utils.pluck)(a.toX, d.tox), toY: (0, _utils.pluck)(a.toY, d.toy) },
      f = {};for (var g in e) e.hasOwnProperty(g) && (c = e[g], 'undefined' != typeof c && (c = c.toString(), scale.axis = g, f[g] = solveEquation(parseEquation((0, _utils.cleanMacro)(c.toLowerCase()), b)), !isMacro(c) && (f[g] = getScaledVal(f[g]))));return f;
},
      parseAndSetAttribute = a => {
  let b,
      c,
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
      p = a.getChildren(),
      q = p.annotation && p.annotation[0];if (q) for (b = q.annotation, c = getSnapPoints(a), l = b.groups && b.groups.length, d = 0; d < l; d++) {
    for (f = b.groups[d], g = f.rawConfig, scale.scaleX = f._getConfig('scaleX'), scale.scaleY = f._getConfig('scaleY'), scale.scaleValue = f._getConfig('scaleValue'), n = parseAndCalculateMacro.call(f, g, c), f.updateAttr(n), n.x = n.x || 0, n.y = n.y || 0, m = f.items && f.items.length, e = 0; e < m; e++) h = f.items[e], k = h.rawConfig, o = parseAndCalculateMacro.call(h, k, c), o.x += n.x, o.y += n.y, isNaN(+o.toX) ? o.toX = o.x : o.toX += n.x, isNaN(+o.toY) || (o.toY += n.y), h.updateAttr(o), h.rawConfig.hasTemporaryInvisibility && h.show(NO_ANIM_CONFIG);f.rawConfig.hasTemporaryInvisibility && f.show(NO_ANIM_CONFIG);
  }
},
      getBoolean = a => 0 !== parseInt(a, 10),
      parseShapeConfiguration = (a, b = {}, c = {}) => {
  let d = { annotationType: 'shape', id: a.id, type: a.type && a.type.toLowerCase(), toolText: (0, _utils.pluck)(a.tooltext, a.toolText), animationLabel: (0, _utils.pluck)(a.animationlabel, a.animationLabel), dashed: a.dashed, dashLen: (0, _utils.pluck)(a.dashlen, a.dashLen), dashGap: (0, _utils.pluck)(a.dashgap, a.dashGap), thickness: a.thickness, showBorder: (0, _utils.pluck)(a.showborder, a.showBorder), borderColor: (0, _utils.pluck)(a.bordercolor, a.borderColor), borderAlpha: (0, _utils.pluck)(a.borderalpha, a.borderAlpha), borderThickness: (0, _utils.pluck)(a.borderthickness, a.borderThickness), alpha: a.alpha, color: a.color, fillColor: (0, _utils.pluck)(a.fillcolor, a.fillColor), fontColor: (0, _utils.pluck)(a.fontcolor, a.fontColor), fillAlpha: (0, _utils.pluck)(a.fillalpha, a.fillAlpha), fillAngle: (0, _utils.pluck)(a.fillangle, a.fillAngle), fillRatio: (0, _utils.pluck)(a.fillratio, a.fillRatio), fillPattern: (0, _utils.pluck)(a.fillpattern, a.fillPattern), sides: a.sides, radius: a.radius, yRadius: (0, _utils.pluck)(a.yradius, a.yRadius), innerRadius: (0, _utils.pluck)(a.innerradius, a.innerRadius), endAngle: (0, _utils.pluck)(a.endangle, a.endAngle), startAngle: (0, _utils.pluck)(a.startangle, a.startAngle), hasTemporaryInvisibility: !0 === getBoolean(a.visible), isVisible: !1, x: a.x, y: a.y, xPos: (0, _utils.pluck)(a.xpos, a.xPos), yPos: (0, _utils.pluck)(a.ypos, a.yPos), toY: (0, _utils.pluck)(a.toy, a.toY), toX: (0, _utils.pluck)(a.tox, a.toX), path: a.path, css: a.css, wrap: a.wrap, text: a.text, font: (0, _utils.pluck)(a.font, b.font, c.basefont), bold: (0, _utils.pluck)(a.bold, a.isbold, a.bold, a.isBold), label: a.label, align: a.align, italic: a.italic, vAlign: (0, _utils.pluck)(a.valign, a.vAlign), bgColor: (0, _utils.pluck)(a.bgcolor, a.bgColor), fontSize: (0, _utils.pluck)(a.fontsize, a.fontSize, b.fontSize, c.basefontsize), wrapWidth: (0, _utils.pluck)(a.wrapwidth, a.wrapWidth), leftMargin: (0, _utils.pluck)(a.leftmargin, a.leftMargin), rotateText: (0, _utils.pluck)(a.rotatetext, a.rotateText), wrapHeight: (0, _utils.pluck)(a.wrapheight, a.wrapHeight), showShadow: (0, _utils.pluck)(a.showshadow, a.showShadow), link: a.link, url: a.url, link: a.link, width: a.width, height: a.height, xScale: (0, _utils.pluck)(a.xscale, a.xScale), yScale: (0, _utils.pluck)(a.yscale, a.yScale), onload: a.onload, onerror: a.onerror };for (let e in d) if (d.hasOwnProperty(e)) {
    let a = d[e];'undefined' == typeof a && delete d[e];
  }return d;
},
      parseConfiguration = (a, b) => {
  let c = {},
      d = a.items;for (let e in d = a.items = (0, _utils.arrangeItems)(d), c.annotationType = 'group', c.id = a.id, c.showBelow = 'undefined' == typeof a.showbelow || null == a.showbelow ? 1 : +a.showbelow, c.x = a.x, c.y = a.y, c.animationLabel = (0, _utils.pluck)(a.animationlabel, a.animationLabel), c.xPos = (0, _utils.pluck)(a.xpos, a.xPos), c.yPos = (0, _utils.pluck)(a.ypos, a.yPos), c.grpXShift = (0, _utils.pluck)(a.grpxshift, a.grpXShift), c.grpYShift = (0, _utils.pluck)(a.grpyshift, a.grpYShift), c.xShift = (0, _utils.pluck)(a.xshift, a.xShift), c.yShift = (0, _utils.pluck)(a.yshift, a.yShift), c.color = a.color, c.alpha = a.alpha, c.isVisible = 1 === +(a.visible || 1), c.font = (0, _utils.pluck)(a.font, b.basefont), c.link = a.link, c.fontSize = (0, _utils.pluck)(a.fontsize, a.fontSize, b.basefontsize), c.textAlign = (0, _utils.pluck)(a.textalign, a.textAlign), c.textVAlign = (0, _utils.pluck)(a.textvalign, a.textVAlign), c.rotateText = (0, _utils.pluck)(a.rotatetext, a.rotateText), c.wrapText = (0, _utils.pluck)(a.wraptext, a.wrapText), c.toolText = (0, _utils.pluck)(a.tooltext, a.toolText), c.link = a.link, c.showShadow = (0, _utils.pluck)(a.showshadow, a.showShadow), c.items = a.items, c.css = a.css, c.autoScale = (0, _utils.pluck)(a.autoscale, a.autoScale), c.scaleText = (0, _utils.pluck)(a.scaletext, a.scaleText), c.xScale = (0, _utils.pluck)(a.xscale, a.xScale), c.yScale = (0, _utils.pluck)(a.yscale, a.yScale), c.scaleImages = (0, _utils.pluck)(a.scaleimages, a.scaleImages), c.constrainedScale = (0, _utils.pluck)(a.constrainedscale), c.origH = (0, _utils.pluck)(a.origh, a.origH, b.origh), c.origW = (0, _utils.pluck)(a.origw, a.origW, b.origw), c.onAnnotationClick = a.onAnnotationClick, c.onAnnotationRollover = a.onAnnotationRollover, c.onAnnotationRollout = a.onAnnotationRollout, c) if (c.hasOwnProperty(e)) {
    let a = c[e];'undefined' == typeof a && delete c[e];
  }return Array.isArray(d) && (c.itemConfigs = d.map(function (a) {
    return parseShapeConfiguration(a, c, b);
  })), c;
},
      attachEventOnElement = (a, b, c) => {
  let d,
      e,
      f,
      g = a._getFromStore('element');a && g && (d = c.onAnnotationClick || (0, _utils.defaultAnnotationClick)(a, b), e = c.onAnnotationRollover || (0, _utils.defaultAnnotationRollOver)(a, b), f = c.onAnnotationRollout || (0, _utils.defaultAnnotationRollOut)(a, b), g.on('click', d), g.on('mouseover', e), g.on('mouseout', f));
},
      makeVisible = a => {
  a.forEach(a => {
    let b = a.items;b.forEach(a => {
      a.config.isVisible = !0, a.show(NO_ANIM_CONFIG);
    }), a.config.isVisible = !0, a.show(NO_ANIM_CONFIG);
  });
},
      mergeConfig = (a, b) => {
  b.css = b.css || a.css, b.autoscale = (0, _utils.pluck)(b.autoscale, a.autoscale), b.animationLabel = (0, _utils.pluck)(b.animationLabel, a.animationLabel), b.constrainedscale = (0, _utils.pluck)(b.constrainedscale, a.constrainedscale), b.scaletext = (0, _utils.pluck)(b.scaletext, a.scaletext), b.scaleimages = (0, _utils.pluck)(b.scaleimages, a.scaleimages), b.xshift = (0, _utils.pluck)(b.xshift, a.xshift), b.yshift = (0, _utils.pluck)(b.yshift, a.yshift), b.grpxshift = (0, _utils.pluck)(b.grpxshift, a.grpxshift), b.grpyshift = (0, _utils.pluck)(b.grpyshift, a.grpyshift), b.origw = (0, _utils.pluck)(b.origw, a.origw), b.origh = (0, _utils.pluck)(b.origh, a.origh), b.showbelow = (0, _utils.pluck)(b.showbelow, a.showbelow, 1), b.onAnnotationClick = a.onAnnotationClick, b.onAnnotationRollover = a.onAnnotationRollover, b.onAnnotationRollout = a.onAnnotationRollout;
},
      isRootGroupConfig = (a, b) => 'itemConfigs' !== b;(0, _dependencyManager.addDep)({ name: 'annotationAnimation', type: 'animationRule', extension: _annotationAnimation2.default });class AnnotationExtension extends _componentInterface2.default {
  constructor(a = {}) {
    super(), this.annotation = new _annotationController2.default(a), this.idCounterStore = {}, this.rawConfig = JSON.parse(JSON.stringify(a)), this.config = {};
  }getName() {
    return 'annotation';
  }getType() {
    return 'extension';
  }configureAttributes(a = { groups: [] }) {
    let b = this,
        c = b.getFromEnv('chart'),
        d = c.getFromEnv('dataSource');b.rawConfig = { group: [] }, b.config.labelClickFN = (0, _utils.getLinkAction)(d, c), b.rawConfig.macroEnabled = a.macroEnabled, b.parsedConfigs || (b.parsedConfigs = []), this.parsedConfigs = a.groups ? a.groups.map(b => (mergeConfig(a, b), parseConfiguration(b, c.config))) : [], b.createAnnotationItems();
  }createAnnotationItems() {
    let a = this,
        b = a.getFromEnv('chartInstance');a.parsedConfigs.forEach(c => {
      let d,
          e,
          f = c.itemConfigs || {},
          g = a.annotation;c = (0, _pickBy2.default)(isRootGroupConfig, c), c.chartWidth = +b.width, c.chartHeight = +b.height, e = { x: c.x, y: c.y, toX: c.toX, toY: c.toY, items: [] }, a.rawConfig.group.push(e), d = g.createItem(c), f.forEach(a => {
        a.chartWidth = +b.width, a.chartHeight = +b.height, e.items.push({ x: a.x, y: a.y, toX: a.toX, toY: a.toY }), g.createItem(a, d);
      });
    });
  }getGraphicalElement() {
    return { itemElements: this.annotation.items.map(a => a._getFromStore('element')) };
  }getChildContainer() {
    return { groupElements: this.annotation.groups.map(a => a._getFromStore('element')) };
  }addItem(a, b = {}, c, d) {
    let e,
        f = this.annotation.retrieveGroup(a),
        g = this.getFromEnv('chart'),
        h = parseShapeConfiguration(b);if (h.hasTemporaryInvisibility = !1, h.isVisible = !0, f = f || this.addGroup({ id: a }), e = this.annotation.createItem(h, f), !!e) return this.annotation.injectDependency('component', d), this.annotation.attachModule(e), parseAndSetAttribute(g), f._getFromStore('element') || f._draw(), this.annotation.drawItem(e, f._getFromStore('element')), e.unfilteredConfig = b, attachEventOnElement(e, g, f.rawConfig), e;
  }addGroup(a = {}, b) {
    return this.configureAttributes({ groups: [a] }), this.annotation.injectDependency('component', b), this.draw(), makeVisible(this.annotation.groups), this.annotation.groups[this.annotation.groups.length - 1];
  }addCustomGroup(a) {
    a && (this.config.customGroup = a);
  }update(a, b) {
    let c,
        d,
        e,
        f = {};if (a) {
      for (d in b) f[d.toLowerCase()] = b[d] && b[d].toString();return (c = this.annotation.retrieveItem(a) || this.annotation.retrieveGroup(a), !c) ? void 0 : ('undefined' == typeof f.visible && (f.visible = c._getConfig('isVisible')), e = parseShapeConfiguration(f), e.hasTemporaryInvisibility = !1, e.isVisible = f.visible, c && c.setAttribute(e), parseAndSetAttribute(this.getFromEnv('chart')), this.drawAnnotationItems(), c);
    }
  }hide(a) {
    let b;a ? (b = this.annotation.retrieveItem(a) || this.annotation.retrieveGroup(a), b && b.hide(NO_ANIM_CONFIG)) : this.annotation.hide(NO_ANIM_CONFIG);
  }show(a) {
    let b;a ? (b = this.annotation.retrieveItem(a) || this.annotation.retrieveGroup(a), b && b.show(NO_ANIM_CONFIG)) : this.annotation.show(NO_ANIM_CONFIG);
  }destroy(a) {
    let b;a ? (b = this.annotation.retrieveItem(a) || this.annotation.retrieveGroup(a), b && b.dispose(NO_ANIM_CONFIG, !0)) : this.annotation.dispose(NO_ANIM_CONFIG, !0);
  }_dispose() {
    this.destroy();
  }clear() {
    let a;for (a = this.parsedConfigs && this.parsedConfigs.length; a--;) this.parsedConfigs.pop();for (a = this.rawConfig.group && this.rawConfig.group.length; a--;) this.rawConfig.group.pop();delete this.rawConfig.group, this.annotation.dispose(NO_ANIM_CONFIG, !0);
  }updateScale() {
    let a,
        b,
        c,
        d = this,
        e = d.annotation;for (c = e.groups && e.groups.length, a = 0; a < c; a++) b = e.groups[a], b.updateScale();
  }injectAllDependency() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h = this,
        k = h.annotation,
        l = h.getFromEnv('chart'),
        m = k.resolveDependency('component') || h,
        n = (0, _dependencyManager.getDep)('redraphael', 'plugin');for ((0, _redraphaelShapes2.default)(n), (0, _redraphaelShapes4.default)(n), g = { width: +l.getFromEnv('chartWidth'), height: +l.getFromEnv('chartHeight') }, k.injectDependency('paper', g), k.injectDependency('smartLabel', h.getFromEnv('smartLabel')), k.injectDependency('toolTipController', h.getFromEnv('toolTipController')), k.injectDependency('animationManager', h.getFromEnv('animationManager')), k.injectDependency('component', m), k.injectDependency('clickFN', h.config.labelClickFN), e = k.groups && k.groups.length, a = 0; a < e; a++) for (c = k.groups[a], k.attachModule(c), d = c.items, f = d && d.length, b = 0; b < f; b++) k.attachModule(d[b]);
  }draw() {
    let a = this,
        b = a.getFromEnv('chart'),
        c = a.annotation;a.injectAllDependency(), a.updateScale(), a.rawConfig.macroEnabled && parseAndSetAttribute(b), a.drawAnnotationItems(a), a.config.drawn = !0;
  }drawAnnotationItems() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h = this,
        k = h.getFromEnv('chart'),
        l = h.annotation;for (a = l.groups && l.groups.length, c = 0; c < a; c++) for (b = l.groups[c], g = h.config.customGroup ? h.config.customGroup : b.rawConfig.showBelow ? h.getLinkedParent().getChildContainer('lowerAnnotationGroup') : h.getLinkedParent().getChildContainer('upperAnnotationGroup'), l.drawItem(b, g), e = b.items, f = e && e.length, g = b._getFromStore('element'), d = 0; d < f; d++) l.drawItem(e[d], g), attachEventOnElement(e[d], k, b.rawConfig);
  }
}exports.default = AnnotationExtension;
},{"../vendors/fusioncharts-annotations/src/annotation-controller":155,"../../../../core/component-interface":65,"ramda/src/pickBy":156,"./utils":153,"../../../dependency-manager":20,"./annotation-animation":154,"../../../redraphael/redraphael-shapes/redraphael-shapes.ringpath":151,"../../../redraphael/redraphael-shapes/redraphael-shapes.arcpath":152}],167:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fadeEffect = [{ initialAttr: function () {
    return { opacity: 0 };
  }, finalAttr: function () {
    return { opacity: 1 };
  } }];exports.default = { "initial.dataset.entities": function () {
    return { "path.appearing": () => (fadeEffect[0].slot = 'plot', fadeEffect), "path.updating": a => [{ finalAttr: function () {
          return a.finalAttr;
        } }], "labelConnectors.appearing": () => (fadeEffect[0].slot = 'final', fadeEffect), "labelConnectors.updating": null, "entityLabel.appearing": () => [{ initialAttr: { opacity: 0 }, finalAttr: { opacity: 1 }, slot: 'final' }], "*": null };
  }, "initial.dataset.markers": function () {
    return { markers: null, "markerItem.appearing": () => (fadeEffect[0].slot = 'final', fadeEffect), "markerItem.updating": a => [{ finalAttr: function () {
          return a.finalAttr;
        } }] };
  }, "initial.group.mapGroup": function () {
    return { "group.appearing": a => [{ initialAttr: function () {
          return Object.assign({ opacity: 0 }, a.attr);
        }, finalAttr: function () {
          return a.attr;
        }, slot: 'plot' }], "group.updating": a => [{ initialAttr: function () {
          return Object.assign({ opacity: 0 }, a.attr);
        }, finalAttr: function () {
          return a.attr;
        }, slot: 'plot' }], "*": null };
  } };
},{}],168:[function(require,module,exports) {
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
      g = f.parseFloat,
      h = a._createNode,
      i = a._setFillAndStroke,
      j = a.el.constructor,
      k = { Q: 'L', Z: 'X', q: 'l', z: 'x', ",": ' ' },
      l = /,?([achlmqrstvxz]),?/gi,
      m = function () {
    return this.join(',').replace(l, c);
  };a.svg ? (c = '$1', d = function () {
    var b = this,
        d = a.is(arguments[0], 'array') ? arguments[0] : Array.prototype.slice.call(arguments);d ? 'string' == typeof d ? d = d.replace(l, c) : d.toString = m : d = 'M0,0', b.node.setAttribute('d', d.toString());
  }, a._engine.litepath = function (b, c, d, e, f) {
    var g,
        k = h('path');return (e || c).canvas.appendChild(k), g = new j(k, c, e), g.type = 'litepath', g.id = k.raphaelid = a._oid++, k.raphael = !0, i(g, f || { fill: 'none', stroke: '#000' }), g;
  }, a._getPath.litepath = function (b) {
    return a.parsePathString(b.node.getAttribute('d'));
  }) : a.vml && (c = function (a, b) {
    return k[b] || b;
  }, e = function () {
    var a = this;return a._transform.apply(a, arguments), a._.bcoord && (a.node.coordsize = a._.bcoord), a;
  }, d = function (a) {
    var b = this;return a ? 'string' == typeof a ? a = a.replace(l, c) : a.toString = m : a = 'M0,0', b.node.path = a, b;
  }, a._engine.litepath = function (b, c, d, f, i) {
    var k,
        l = h('shape'),
        m = l.style,
        n = new j(l, c, f);return m.cssText = 'position:absolute;left:0;top:0;width:21600px;height:21600px;', d = g(d), isNaN(d) ? l.coordsize = '21600 21600' : (n._.bzoom = d, m.width = '1px', m.height = '1px', l.coordsize = n._.bcoord = d + ' ' + d), l.coordorigin = c.coordorigin, n.type = 'litepath', n.id = l.raphaelid = a._oid++, l.raphael = !0, n._transform = n.transform, n.transform = e, a._setFillAndStroke(n, i || { fill: 'none', stroke: '#000' }), (f || c).canvas.appendChild(l), k = h('skew'), k.on = !0, l.appendChild(k), n.skew = k, n;
  }, a._getPath.litepath = function (b) {
    return a.parsePathString(b.node.path || '');
  }), a.fn.litepath = function (c, e, f) {
    var g,
        h,
        i,
        k = this;return 'object' == typeof c && c.constructor !== j && (g = c, c = c.litepath, h = c.zoom, f = c.group), e && e.constructor === j ? (f = e, h = b) : h = e, c && c.constructor === j && (f = c, c = ''), i = a._engine.litepath(c, this, h, f, g), i.ca.litepath = d, c && i.attr('litepath', a.is(c, 'array') ? [c] : c), (k.__set__ && this.__set__.push(i), k._elementsById[i.id] = i);
  };
};
},{}],137:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _extAnnotation = require('../vendors/fc-ext-annotation/src/ext-annotation.js');

var _extAnnotation2 = _interopRequireDefault(_extAnnotation);

var _dependencyManager = require('../dependency-manager');

var _mapEntitiesAnimation = require('../animation-rules/map-entities-animation');

var _mapEntitiesAnimation2 = _interopRequireDefault(_mapEntitiesAnimation);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _schedular = require('../schedular');

var _redraphaelShapes = require('../redraphael/redraphael-shapes/redraphael-shapes.litepath');

var _redraphaelShapes2 = _interopRequireDefault(_redraphaelShapes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    Raphael = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    userAgent = window.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !window.opera,
    COMMA = ',',
    BLANK = '',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_MIDDLE = 'middle',
    POSITION_CENTER = 'center',
    CRISP = 'crisp',
    math = window.Math,
    mathMin = math.min,
    mathMax = math.max,
    isStrokeReg = /stroke/ig,
    isWebKit = /AppleWebKit/.test(userAgent),
    mathCeil = math.ceil,
    colorize = function (a, b) {
  let c = b ? (0, _lib.extend2)(a.FCcolor, b, !1, !0) : { FCcolor: a };return c.toString = _lib.toRaphaelColor, c;
},
    pruneStrokeAttrs = function (a, b) {
  let c,
      d = {};if (b = b || 1, !a || 'object' != typeof a) return d;for (c in a) isStrokeReg.test(c) || ('stroke-width' === c ? (d[c] = +a[c] / b, isWebKit && (d[c] = d[c] && mathCeil(d[c]) || 0)) : d[c] = a[c]);return d;
},
    getTextWrapWidth = { right: function () {
    return arguments[1];
  }, left: function (a, b) {
    return a - b;
  }, center: function (a, b) {
    return 2 * mathMin(b, a - b);
  } },
    getTextWrapHeight = { top: function () {
    return arguments[1];
  }, middle: function (a, b) {
    return 2 * mathMin(b, a - b);
  }, bottom: function (a, b) {
    return a - b;
  } },
    convertArrayToIdMap = function (a) {
  let b,
      c = a && a.length || 0,
      d = {};for (; c--;) b = a[c], b.id !== UNDEF && (d[b.id.toLowerCase()] = b);return d;
};(0, _dependencyManager.addDep)({ name: 'mapsAnimation', type: 'animationRule', extension: _mapEntitiesAnimation2.default }), (0, _redraphaelShapes2.default)(Raphael);class Entities extends _componentInterface2.default {
  constructor() {
    super(), this.components = {};
  }getName() {
    return 'entities';
  }getType() {
    return 'dataset';
  }configureAttributes(a) {
    if (!a) return;this.JSONData = { data: a };let b,
        c,
        e,
        f,
        g,
        h,
        j,
        k,
        l = this,
        m = l.getFromEnv('chart'),
        n = m.jsonData,
        o = l.config,
        p = n.map || n.chart,
        q = [],
        r = n.entitydef || [];for (g in o.attachEvent || (l.addExtEventListener('legendUpdate', function () {
      if (k = arguments[1], 'legend' === k.component) l.legendInteractivity(k.legendItem, k.colorObj);else for (q = k.maxMinArray, h = q.length, j = 0; j < h; j++) l.updateEntityColors(q[j].min, q[j].max);
    }, l.getFromEnv('colorManager')), o.attachEvent = !0), b = n.data && n.data[0] && n.data[0].data ? l.JSONData = n.data[0].data || [] : l.JSONData = n.data || [], o.useSNameAsId = (0, _lib.pluckNumber)(p.usesnameasid, 0), this._redefineEntities(r), c = l.components.data, o.showTooltip = (0, _lib.pluckNumber)(p.showtooltip, 1), o.showHoverEffect = (0, _lib.pluckNumber)(p.showhovereffect, 0), b = convertArrayToIdMap(b), l.calculateDataLimits(), n.colorrange || l.detachChild(l.getChildren('colorRange') && l.getChildren('colorRange')[0].getId()), c) e = b[g], f = c[g], e ? this._configureEntity(g, f, (0, _lib.imprint)(Entities._sanitizeEntityOptions((0, _lib.extend2)({}, e)), f.config)) : this._configureEntity(g, f, f.config);
  }updateEntityColors(a, b) {
    let c,
        d,
        e,
        f,
        g,
        h,
        i = this,
        j = i.components.data,
        k = i.getFromEnv('chart'),
        l = { "fill-opacity": 0 };for (f in j) c = j[f], d = c.config, e = d.cleanValue, g = d.alphaArr || [], h = { "fill-opacity": g[0] / 100 || 1 }, e < a || e > b ? (Entities.setCustomAttrs(c, l, k), c.hidden = !0) : (c.hidden = !1, Entities.setCustomAttrs(c, h, k));
  }legendInteractivity(a, b) {
    let c,
        d,
        e,
        f,
        g,
        h,
        j = this,
        k = j.getFromEnv('chart'),
        l = j.components.data,
        m = a.config,
        n = a.hasState('hidden'),
        o = j.getFromEnv('colorManager'),
        p = {},
        q = { "fill-opacity": 0 };for (c in k.getFromEnv('animationManager').setAnimationState('legendInteraction'), l) l.hasOwnProperty(c) && (d = l[c], m = d.config, e = m.cleanValue, h = o.getColorObj(e), f = m.visibleEntityAttr, p['fill-opacity'] = f['fill-opacity'], g = n ? p : q, b.code === (!h.outOfRange && h.code) && (d.hidden = !n, Entities.setCustomAttrs(d, g, k), n ? a && a.removeLegendState('hidden') : a.setLegendState('hidden')));
  }static setCustomAttrs(a, b) {
    let c, d;a && (c = a.graphics, d = c.outlines, d.attr(b));
  }calculateDataLimits() {
    let a,
        b,
        c,
        d,
        e = this,
        f = e.getFromEnv('chart'),
        g = e.config,
        h = f.jsonData,
        j = h.data || [],
        k = this.getFromEnv('number-formatter'),
        l = +Infinity,
        m = -Infinity;for (d = 0, c = j.length; d < c; d++) b = j[d].value, a = k.getCleanValue(b), l = mathMin(l, a), m = mathMax(m, a);g.max = m, g.min = l;
  }_configureEntity(a, b, c) {
    let d,
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
        A = this,
        B = A.getFromEnv('chart'),
        C = A.config,
        D = this.getFromEnv('number-formatter'),
        E = B.config,
        F = E.entityOpts,
        G = b.config,
        H = b.labelConfig,
        I = c.value,
        J = G.cleanValue = D.getCleanValue(I),
        K = G.formattedValue = J === UNDEF ? UNDEF : D.dataLabels(J),
        L = (0, _lib.pluckNumber)(c.showtooltip, F.showTooltip),
        M = this._getDefaultTooltip(b, c, A),
        N = { formattedValue: K, sName: c.shortLabel, lName: c.label },
        O = F.dataLabels.style,
        P = G.toolText = L ? (0, _lib.parseUnsafeString)((0, _lib.pluck)((0, _lib.parseTooltext)((0, _lib.pluck)(c.tooltext, F.tooltext, M), [1, 2, 7, 38, 39], N, c))) : BLANK,
        Q = G.borderColor = (0, _lib.pluck)(c.bordercolor, F.borderColor),
        R = G.borderAlpha = (0, _lib.pluck)(c.borderalpha, F.borderAlpha),
        S = G.borderThickness = (0, _lib.pluckNumber)(c.borderthickness, F.borderThickness),
        T = F.hoverOnNull,
        U = G.useHoverColor = (0, _lib.pluckNumber)(c.showhovereffect, c.usehovercolor, T ? F.showHoverEffect : isNaN(I) ? 0 : F.showHoverEffect),
        V = G.labelAlignment,
        W = A.getFromEnv('colorManager');if (b.hidden = !1, G.showLabel = (0, _lib.pluckNumber)(c.showlabel, F.showLabels), G.labelPadding = (0, _lib.pluckNumber)(c.labelpadding, F.labelPadding), G.fontFamily = (0, _lib.pluck)(c.font, O.fontFamily), G.fontSize = (0, _lib.pluckNumber)(parseInt(c.fontsize, 10), parseInt(O.fontSize, 10)), G.fontBold = (0, _lib.pluckNumber)(c.fontbold, 0), G.fontColor = (0, _lib.pluck)(c.fontcolor, O.color), G.connectorColor = (0, _lib.pluck)(c.labelconnectorcolor, F.connectorColor), G.connectorAlpha = (0, _lib.pluck)(c.labelconnectoralpha, F.connectorAlpha), G.hoverBorderThickness = (0, _lib.pluckNumber)(c.borderhoverthickness, c.hoverborderthickness, F.hoverBorderThickness), G.hoverBorderColor = (0, _lib.pluck)(c.borderhovercolor, c.hoverbordercolor, F.hoverBorderColor, G.borderColor), G.hoverBorderAlpha = (0, _lib.pluck)(c.borderhoveralpha, c.hoverborderalpha, F.hoverBorderAlpha, G.borderAlpha), G.connectorThickness = (0, _lib.pluckNumber)(c.labelconnectorthickness, F.connectorThickness), G.origConnectorThickness = G.connectorThickness, G.borderThickness = S, G.link = c.link, G.isVisible = !0, G.id = a, G.originalId = c.origId, null !== J && (d = W && W.getColor(J), d && !d.outOfRange && (t = d.code, d.oriAlpha !== UNDEF && (u = d.oriAlpha + ''))), (0, _lib.pluck)(c.color, c.alpha, c.angle, c.ratio) === UNDEF ? (r = colorize({ color: (0, _lib.pluck)(t, F.fillColor), alpha: (0, _lib.pluck)(u, F.fillAlpha), angle: (0, _lib.pluck)(F.fillAngle), ratio: (0, _lib.pluck)(F.fillRatio) }), q = colorize({ color: (0, _lib.pluck)(F.nullEntityColor), alpha: (0, _lib.pluck)(F.nullEntityAlpha), angle: (0, _lib.pluck)(F.nullEntityAngle), ratio: (0, _lib.pluck)(F.nullEntityRatio) }), m = null === J ? q : r, h = m.FCcolor.color, j = m.FCcolor.alpha, k = m.FCcolor.angle, l = m.FCcolor.ratio) : (h = (0, _lib.pluck)(c.color, t, F.fillColor), j = (0, _lib.pluck)(c.alpha, u, F.fillAlpha), k = (0, _lib.pluck)(c.angle, F.fillAngle), l = (0, _lib.pluck)(c.ratio, F.fillRatio), m = colorize({ color: h, alpha: j, angle: k, ratio: l })), P === BLANK && (C.showTooltip = 0), G.visibleEntityAttr = { stroke: (0, _libGraphics.convertColor)(Q, R), fill: (G.fillColor = m).toString(), "fill-opacity": j / 100 }, z = j.split(COMMA), G.alphaArr = z, U && ((0, _lib.pluck)(c.fillhovercolor, c.fillhoveralpha, c.fillhoverangle, c.fillhoverratio, c.hoverfillcolor, c.hoverfillalpha, c.hoverfillratio, c.hoverfillangle) === UNDEF ? (!F.hoverColorObject && (F.hoverColorObject = colorize({ color: F.hoverFillColor, alpha: F.hoverFillAlpha, angle: F.hoverFillAngle, ratio: F.hoverFillRatio })), s = F.hoverColorObject) : (h = (0, _lib.pluck)(c.fillhovercolor, c.hoverfillcolor, F.hoverFillColor), j = (0, _lib.pluck)(c.fillhoveralpha, c.hoverfillalpha, F.hoverFillAlpha), k = (0, _lib.pluck)(c.fillhoverangle, c.hoverfillangle, F.hoverFillAngle), l = (0, _lib.pluck)(c.fillhoverratio, c.hoverfillratio, F.hoverFillRatio), s = colorize({ color: h, alpha: j, angle: k, ratio: l })), G.hoverColor = s), H || (H = b.labelConfig = {}), n = G.fontColor, o = G.fontFamily, p = G.fontBold, P = G.toolText, e = G.link, V ? (f = V[0], g = V[1]) : (f = POSITION_CENTER, g = POSITION_MIDDLE), H.align = f, H.vAlign = g, H.bgColor = BLANK, H.borderColor = BLANK, H.fontColor = n, H.fontFamily = o, H.fontBold = p, H.toolText = P, H.link = e, 'object' == typeof G.options) for (v = G.entityLabels = G.entityLabels || [], x = G.labels || [], y = x.length; y--;) v[y] || (v[y] = { config: {} }), H = v[y].config, V = x[y].labelAlignment, V ? (f = V[0], g = V[1]) : (f = POSITION_CENTER, g = POSITION_MIDDLE), H.align = f, H.vAlign = g, H.displayValue = A.getDisplayValue(b, x[y], G.options.isDataEnabled, !y, c), H.bgColor = BLANK, H.borderColor = BLANK, H.toolText = P, H.align = f, H.vAlign = g, H.bgColor = BLANK, H.borderColor = BLANK, H.fontColor = n, H.fontFamily = o, H.fontBold = p, H.toolText = P;else w = { shortText: G.shortLabel, text: G.label }, H.displayValue = A.getDisplayValue(b, w, !0, !0, c);
  }getDisplayValue(a, b, c, d, e) {
    let f,
        g = this.getFromEnv('chart'),
        h = g.config.entityOpts,
        i = a.config,
        j = i.cleanValue,
        k = i.formattedValue,
        l = h.labelSepChar;return c ? d && 'undefined' != typeof e.displayvalue ? f = e.displayvalue : (f = (0, _lib.pluck)(h.includeNameInLabels ? h.useShortName ? b.shortText : b.text : ''), h.includeValueInLabels && null !== j && (f = f === UNDEF ? k : f + l + k)) : f = i.label, f;
  }static _sanitizeEntityOptions(a) {
    return delete a.outlines, delete a.label, delete a.shortlabel, delete a.labelposition, delete a.labelalignment, delete a.labelconnectors, a;
  }_redefineEntities(a) {
    let b,
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
        o = this,
        p = o.config,
        q = o.getFromEnv('chart'),
        r = {},
        s = {},
        t = q.config.entities,
        u = p.useSNameAsId,
        v = 0;for (b = a.length; b--;) if (c = a[b], d = c.internalid, e = c.newid ? c.newid : d, f = c.sname, g = c.lname, n = t[d], d = (0, _lib.trimString)(d), e = (0, _lib.trimString)(e), e = e && e.toLowerCase(), n) {
      for (m in r[e] = j = { origId: d }, s[d] = !0, n) j[m] = n[m];j.shortLabel = f || n.shortLabel, j.label = g || n.label, j.showhovereffect = c.showhovereffect, j.fillhovercolor = c.fillhovercolor, j.fillhoveralpha = c.fillhoveralpha, j.fillhoverangle = c.fillhoverangle, j.fillhoverratio = c.fillhoverratio, j.borderhoverthickness = c.borderhoverthickness;
    }for (h in l = o.components.data, l || (l = o.components.data = {}), r) h = h.toLowerCase(), l[h] || (l[h] = { config: {} }), l[h].config = r[h], v += 1;for (h in k = l, t) if (j = t[h], h = (0, _lib.trimString)(h), !s[h]) {
      for (m in u ? (n = k[j.shortLabel.toLowerCase()], !n && (n = k[j.shortLabel.toLowerCase()] = {}), n.config = {}, n.origId = j.shortLabel) : (n = k[h.toLowerCase()], !n && (n = k[h.toLowerCase()] = {}), n.config = {}, n.config.origId = h), j) n.config[m] = j[m];v += 1;
    }p.entityCount = v;
  }draw() {
    let a,
        b = this,
        c = b.config,
        d = b.getFromEnv('chart'),
        e = _lib.hasSVG ? 200 : 10;this.config.ready = !1, c.BATCH_SIZE = e, c.labelBatchSize = _lib.hasSVG ? 200 : 20, a = this._batchRender(), a(0), d.config.entityFlag = !0, d.checkComplete();
  }_batchRender() {
    let a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.config,
        h = f.getFromEnv('chart'),
        j = h.config.entities.firstEntity,
        k = f.components.data,
        l = g.BATCH_SIZE,
        m = g.entityKeys = j ? f._getKeys(j, k) : Object.keys(k),
        n = g.entityLength = m.length,
        o = function (g) {
      for (a = g, c = 0; m[a] !== UNDEF;) if (b = k[m[a]], e = f.drawEntity(b, l), c += e, b.config.drawn && (d = a === n - 1 ? b : k[m[a - 1]], d && (d.config.drawn = !1, d.config.outlineStartIndex = UNDEF), a++), c >= l) {
        f.addJob('entityDraw', o.bind(this, a), _schedular.priorityList.entitydraw);break;
      }a === n && (f._addEventListenersToEntities(0), f.initComplete());
    };return o;
  }_addEventListenersToEntities(a) {
    let b,
        c,
        d,
        e,
        f = this,
        g = f.components.data,
        h = f.config,
        j = h.BATCH_SIZE,
        k = h.entityKeys,
        l = h.entityLength,
        m = 0;for (b = a; b < l; b++) if (c = g[k[b]], e = c.config, d = e.options, d && !1 === d.isDataEnabled || f.addMouseGestures(c), m++, m === j) {
      f.addJob('_addEventListenersToEntities', f._addEventListenersToEntities.bind(this, b), _schedular.priorityList.entitydraw);break;
    }
  }static _getKeys(a, b) {
    let c = [a],
        d = a;for (; b[d];) d = b[d].nextId, c.push(d);return c;
  }_getDefaultTooltip(a, b) {
    let c,
        d,
        e = this,
        f = a.config.cleanValue,
        g = a.config.formattedValue,
        h = e.getFromEnv('chart').config.entityOpts;if ('object' == typeof a.config.options) {
      if (d = b.labels && b.labels[0], !d) return UNDEF;c = (h.useSNameInTooltip ? d.shortText : d.text) + (null === f ? BLANK : h.tooltipSepChar + g);
    } else c = (h.useSNameInTooltip ? b.shortLabel : b.label) + (null === f ? BLANK : h.tooltipSepChar + g);return c;
  }drawEntity(a, b) {
    let c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m = this,
        n = m.getFromEnv('chart'),
        o = n.getFromEnv('animationManager'),
        p = a.config,
        q = _lib.hasSVG || !isIE ? 'litepath' : 'path',
        r = n.config.entityOpts,
        s = p.outlines,
        t = m.getFromEnv('toolTipController'),
        u = this.getLinkedParent().getChildContainer('plot'),
        v = this.getLinkedParent().getChildContainer('plotShadow'),
        w = p.toolText,
        x = r.shadow,
        y = [],
        z = {};if (m._configureEntityDrawingParams(a), p = a.config, e = p.visibleEntityAttr, l = p.shadowOptions, c = p.outlineStartIndex === UNDEF ? s.length : p.outlineStartIndex, a.graphics || (a.graphics = {}), j = 0, y = p.outlinePath || (p.outlinePath = []), k = p.customStrokeWidthModifier, 'object' == typeof p.options) {
      for (; c--;) if (y = s[c].outline, f = !0 === p.options.isDataEnabled ? e : (0, _lib.extend2)((0, _lib.extend2)({}, e), pruneStrokeAttrs(s[c].style, k)), g = a.graphics.outlines, g || (g = a.graphics.outlines = []), g[c] || (g[c] = {}), h = g[c].outline, f[q] = y, h = g[c].outline = o.setAnimation({ el: q, container: u, attr: f, component: m, label: 'path' }), h.shadow(!!x && l, v), t.enableToolTip(h, w), j++, p.outlineStartIndex = c, j === b) return j;return p.drawn = !0, j;
    }for (; c--;) if (d = s[c], y = d.concat(y), j++, p.outlineStartIndex = c, j === b) return p.outlinePath = y, j;return a.graphics.outlines || (e[q] = y), Object.assign(z, e, a.hidden && { "fill-opacity": 0 } || {}), a.graphics.outlines = o.setAnimation({ el: a.graphics.outlines || q, container: u, attr: z, component: m, label: 'path' }), p.drawn = !0, p.outlineStartIndex = 0, p.outlinePath = [], a.graphics.outlines.shadow(!!x && l, v), t.enableToolTip(a.graphics.outlines, w), j;
  }_configureEntityDrawingParams(a) {
    let b,
        c = this,
        d = c.getFromEnv('chart'),
        e = a.config,
        f = d.config.entityOpts,
        g = d.config.scalingParams,
        h = !isIE || _lib.hasSVG,
        i = g.scaleFactor,
        j = g.strokeWidth,
        k = (h ? d.baseScaleFactor : 1) * j,
        l = 1 === f.scaleBorder,
        m = e.borderThickness,
        n = e.alphaArr,
        o = e.origConnectorThickness,
        p = e.hoverBorderThickness,
        q = e.visibleEntityAttr,
        r = q['fill-opacity'];e.shadowOptions = { scalefactor: [i, i * d.config.baseScaleFactor], opacity: mathMax.apply(math, n) / 100, useFilter: 0 }, e.fillOpacity = a.hidden ? 0 : r, h ? (m = e.entityBorderThickness = l ? m * k : m / i, o /= i, b = l ? i : g.sFactor, p && (p = e.hoverBorderThickness = l ? p * k : p / i)) : (m = l ? m * j : m, b = l ? g.scaleFactor : d.baseScaleFactor), e.entityBorderThickness = m, e.connectorThickness = o, e.customStrokeWidthModifier = b, q['stroke-width'] = m, q.transform = _lib.hasSVG || !isIE ? '' : g.transformStr;
  }drawLabels(a) {
    let b,
        c,
        d,
        e,
        f = this,
        g = a,
        h = f.getFromEnv('chart'),
        k = f.config,
        l = k.labelBatchSize,
        m = k.entityLength,
        n = [],
        o = 0,
        p = h.getChildren('mapLabelAnnotations') && h.getChildren('mapLabelAnnotations')[o],
        q = 0,
        r = 0,
        s = h.getFromEnv('toolTipController'),
        t = h.config.annotationConfig;for (b in p || (e = new _extAnnotation2.default(), h.attachChild(e, 'mapLabelAnnotations'), p = h.getChildren('mapLabelAnnotations')[o]), p.clear(), p._renderer && (p._renderer = null), t.showbelow = 0, g) {
      if (f.drawLabel(g[b], n), q++, q === l) {
        for (p.annotation.injectDependency('paper', h.getFromEnv('paper')), p.annotation.injectDependency('toolTipController', s), c = 0; c < n.length; c++) n[c].animationLabel = 'entityLabel';for (d = p.addGroup(Object.assign(t, { id: 'entityLabels' + o, items: n, animationLabel: 'entityLabelGroup' }), f), h.config.labelsOnTop && d.store.element.toFront(), c = 0; c < d.items.length; c++) d.items[c].addEventListener('mouseover', n[c].onmouseover), d.items[c].addEventListener('mouseout', n[c].onmouseout), d.items[c].addEventListener('click', n[c].onclick);o++, p = h.getChildren('mapLabelAnnotations') && h.getChildren('mapLabelAnnotations')[o], p || (e = new _extAnnotation2.default(), h.attachChild(e, 'mapLabelAnnotations'), p = h.getChildren('mapLabelAnnotations')[o]), p.clear(), p._renderer && (p._renderer = null), q = 0, n = [];
      } else if (r == m - 1) {
        for (p.annotation.injectDependency('paper', h.getFromEnv('paper')), p.annotation.injectDependency('toolTipController', s), c = 0; c < n.length; c++) n[c].animationLabel = 'entityLabel';for (d = p.addGroup(Object.assign(t, { id: 'entityLabels' + o, items: n, animationLabel: 'entityLabelGroup' }), f), h.config.labelsOnTop && d.store.element.toFront(), c = 0; c < d.items.length; c++) d.items[c].addEventListener('mouseover', n[c].onmouseover), d.items[c].addEventListener('mouseout', n[c].onmouseout), d.items[c].addEventListener('click', n[c].onclick);
      }r++;
    }f.drawLabelConnFn(0);
  }drawLabelConnFn(a) {
    let b,
        c,
        d,
        e,
        f,
        g = this,
        h = g.config,
        j = g.components.data,
        k = h.BATCH_SIZE,
        m = h.entityKeys,
        n = m.length,
        o = 0;for (c = a; c < n; c++) {
      if (f = j[m[c]], e = f.config, 'object' == typeof e.options) for (d = e.labels, b = d && d.length || 0; b--;) d[b].labelConnectors && (g.drawLabelConnectors(f, d[b].labelConnectors, g), o++);else e.labelConnectors && (g.drawLabelConnectors(f, e.labelConnectors, g), o++);if (o === k) {
        g.addJob('drawLabelConnectors', g.drawLabelConnFn.bind(this, c), _schedular.priorityList.entitydraw);break;
      }
    }
  }_getLabelObject(a, b, c) {
    let d,
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
        t = this,
        u = t.getFromEnv('chart'),
        v = a.config,
        w = u.config.scalingParams,
        x = a.graphics && a.graphics.outlines,
        y = v.fontSize,
        z = v.labelPadding,
        A = v.labels || [],
        B = v.entityLabels || [];return b === UNDEF ? (d = a.labelConfig, e = v.labelPosition, f = v.labelAlignment) : (r = A[b], s = B[b], d = s.config, g = d.style = r.style, e = r.labelPosition, f = r.labelAlignment), e ? (j = e[0], k = e[1]) : (l = x.getBBox(), j = l.x + l.width / 2, k = l.y + l.height / 2), f ? (m = f[0], n = f[1], m === POSITION_RIGHT ? j -= z : m === POSITION_LEFT && (j += z), n === POSITION_TOP ? k -= z : n === POSITION_BOTTOM && (k += z)) : (m = POSITION_CENTER, n = POSITION_MIDDLE), o = parseFloat(y) / w.sFactor, !c && g && (g.color && (d.fontColor = g.color), g['font-size'] && (o = parseFloat(g['font-size']) / w.sFactor), g['font-family'] && (d.fontFamily = g['font-family']), g['font-weight'] !== UNDEF && (d.fontBold = 'bold' === g['font-weight'])), d.x = j.toString(), d.y = k.toString(), d.wrap = 1, d.type = 'text', d.fontSize = o, { x: j.toString(), y: k.toString(), wrapwidth: getTextWrapWidth[m](h, j + p) - z, wrapheight: getTextWrapHeight[n](i, k + q) - z, wrap: 1, type: 'text', align: d.align, valign: d.vAlign, text: d.displayValue, tooltext: d.toolText, css: d.link !== UNDEF && { cursor: 'pointer', _cursor: 'hand' }, bgcolor: d.bgColor, bordercolor: d.borderColor, fillcolor: d.fontColor, fontsize: d.fontSize, font: d.fontFamily, bold: d.fontBold, onclick: function (b) {
        let c,
            d,
            e = a.graphics.outlines;if (e instanceof Array) for (c = 0, d = e.length; c < d; c++) t.entityClick(e[c].outline, b);else t.entityClick(e, b);
      }, onmouseover: function (b) {
        let c,
            d,
            e = a.graphics.outlines;if (e instanceof Array) for (c = 0, d = e.length; c < d; c++) t.entityRollOver(e[c].outline, b);else t.entityRollOver(e, b);
      }, onmouseout: function (b) {
        let c,
            d,
            e = a.graphics.outlines;if (e instanceof Array) for (c = 0, d = e.length; c < d; c++) t.entityRollOut(e[c].outline, b);else t.entityRollOut(e, b);
      }, ontouchstart: function (b) {
        let c,
            d,
            e = a.graphics.outlines;if (e instanceof Array) for (c = 0, d = e.length; c < d; c++) t.entityRollOver(e[c].outline, b);else t.entityRollOver(e, b);t.entityRollOver(e, b);
      } };
  }drawLabel(a, b) {
    let c,
        d,
        e,
        f = this,
        g = a.config,
        h = g.showLabel;if (h) if ('object' == typeof g.options) for (e = g.labels, d = e && e.length || 0, c = g.options.isDataEnabled; d--;) b.push(f._getLabelObject(a, d, c, !d));else b.push(f._getLabelObject(a, UNDEF, !0, !0));
  }drawLabelConnectors(a, b, c) {
    let d,
        e,
        f = a.config,
        g = this,
        h = g.getFromEnv('chart'),
        j = h.getFromEnv('animationManager'),
        k = h.config.scalingParams,
        l = c.getLinkedParent().getChildContainer('plot'),
        m = b && b.length || 0,
        n = f.showLabel;for (; m--;) e = b[m], d = a.graphics.connectorElem, n ? a.graphics.connectorElem = d = j.setAnimation({ el: a.graphics.connectorElem || 'path', attr: { path: e, opacity: 1, transform: _lib.hasSVG || !isIE ? '' : k.transformStr, stroke: (0, _libGraphics.convertColor)(f.connectorColor, f.connectorAlpha), "shape-rendering": CRISP, "stroke-width": f.connectorThickness }, container: l, component: g, label: 'labelConnectors' }) : d && d.hide();
  }entityClick(a, b) {
    let c = a.node.__entity,
        d = this,
        e = d.getFromEnv('chart'),
        f = e.config.scalingParams,
        g = c.graphics.outlines.getBBox(),
        h = e.getFromEnv('linkClickFN'),
        i = c.config,
        j = i.link;g.width *= f.scaleFactor, g.height *= f.scaleFactor, g.x = g.x * f.scaleFactor + f.translateX, g.y = g.y * f.scaleFactor + f.translateY, g.x2 = g.x + g.width, g.y2 = g.y + g.height, e.fireChartInstanceEvent('entityclick', i.eventArgs, b), j !== UNDEF && h.call({ link: j, entity: c, entityBox: g }, !0);
  }entityRollOver(a, b) {
    let c = a.node.__entity,
        d = this,
        e = c.config,
        f = d.getFromEnv('chart'),
        g = f.getFromEnv('animationManager'),
        h = e.hoverAttr;f.plotEventHandler(a, b, 'entityRollOver'), a.data('hovered') ? clearTimeout(c.config.timer) : e.useHoverColor && e.isVisible && !c.hidden && h && (f.config.hoverEntity = a, g.setAnimation({ el: a, attr: h, component: d, state: 'updating', label: 'path' }), a.data('hovered', !0));
  }entityRollOut(a, b) {
    let c,
        d = a.node.__entity,
        e = this,
        f = e.getFromEnv('chart'),
        g = f.getFromEnv('animationManager'),
        h = d.config,
        i = h.revertAttr;f.plotEventHandler(a, b, 'entityRollOut'), d.config.timer = setTimeout(function () {
      c = d.hidden, !0 !== c && i && (g.setAnimation({ el: a, attr: i, component: e, state: 'updating', label: 'path' }), a.data('hovered', !1));
    }, 100);
  }addMouseGestures(a) {
    let b,
        c,
        d,
        e,
        f,
        g = a.config,
        h = g.originalId,
        j = this,
        k = a.graphics,
        l = g.useHoverColor,
        m = g.hoverBorderThickness,
        n = g.hoverBorderColor,
        o = g.hoverBorderAlpha,
        p = g.entityBorderThickness,
        q = g.borderColor,
        r = g.borderAlpha,
        s = g.link,
        t = g.visibleEntityAttr,
        u = function (b) {
      s !== UNDEF && b.css({ cursor: 'pointer', _cursor: 'hand' }), b.data('eventArgs', g.eventArgs), b.data('groupId', 'groupId' + h), b.node.__entity = a, a._listenersBinded || b.click(j.entityClick.bind(j, b)).hover(j.entityRollOver.bind(j, b), j.entityRollOut.bind(j, b));
    };for (b in g.eventArgs = { value: g.cleanValue, label: g.label, shortLabel: g.shortLabel, originalId: g.origId, id: g.id || g.origId }, g.legacyEventArgs = { value: g.value, lName: g.label, sName: g.shortLabel, id: g.originalId || g.id }, l && (g.hoverAttr = { fill: (0, _lib.toRaphaelColor)(g.hoverColor) }, g.revertAttr = { fill: (0, _lib.toRaphaelColor)(g.fillColor), stroke: (0, _lib.toRaphaelColor)(g.borderColor, g.borderAlpha) }, g.revertAttr['fill-opacity'] = t['fill-opacity'], m !== p && (g.hoverAttr['stroke-width'] = (0, _lib.pluckNumber)(m, p), g.revertAttr['stroke-width'] = p), (n !== q || o !== r) && (g.hoverAttr.stroke = (0, _libGraphics.convertColor)(n, o), g.revertAttr.stroke = (0, _libGraphics.convertColor)(q, r))), k) if (k.hasOwnProperty(b)) if (k[b] instanceof Array) {
      for (f = k[b], c = 0, e = f.length; c < e; c++) d = f[c].outline, u(d);a._listenersBinded = !0;
    } else d = k[b], u(d), a._listenersBinded = !0;
  }getDataLimits() {
    let a = this,
        b = a.config;return { max: b.max, min: b.min };
  }initComplete() {
    let a = this,
        b = a.getFromEnv('chart'),
        c = a.components.data;this.drawLabels(c), b.config.entitiesReady = !0, b.checkComplete();
  }
}exports.default = Entities;
},{"../../core/component-interface":65,"../vendors/fc-ext-annotation/src/ext-annotation.js":125,"../dependency-manager":20,"../animation-rules/map-entities-animation":167,"../lib/lib":23,"../lib/lib-graphics":24,"../schedular":21,"../redraphael/redraphael-shapes/redraphael-shapes.litepath":168}],169:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var UNDEF,
    isWithinCircle = function (a, b, c, d, e) {
  var f = Math.pow;return f(c - a, 2) + f(d - b, 2) <= f(e, 2);
},
    mathPI = Math.PI,
    mathCos = Math.cos,
    mathSin = Math.sin,
    mathMax = Math.max,
    mathMin = Math.min,
    deg2rad = mathPI / 180,
    rad = function (a) {
  return a % 360 * deg2rad;
},
    orientation = function (a, b, c, d, e, f) {
  var g, h, i;return g = (d - b) * (e - c), h = (c - a) * (f - d), isNaN(g) && (g = 0), isNaN(h) && (h = 0), i = g - h, 0 === i ? 0 : 0 < i ? 1 : 2;
},
    onSegment = function (a, b, c, d, e, f) {
  return !!(c <= mathMax(a, e) && c >= mathMin(a, e) && d <= mathMax(b, f) && d >= mathMin(b, f));
},
    doIntersect = function (a, b, c, d, e, f, g, h) {
  var i = orientation(a, b, c, d, e, f),
      j = orientation(a, b, c, d, g, h),
      k = orientation(e, f, g, h, a, b),
      l = orientation(e, f, g, h, c, d);return !(i === j || k === l) || !!(0 === i && onSegment(a, b, e, f, c, d)) || !!(0 === j && onSegment(a, b, g, h, c, d)) || !!(0 === k && onSegment(e, f, a, b, g, h)) || !!(0 === l && onSegment(e, f, c, d, g, h));
},
    isWithinPolygon = function (a, b, c, d, e, f, g) {
  var h,
      j,
      k,
      l,
      m,
      n,
      o,
      p = 0,
      q = !1;if (isWithinCircle(a, b, c, d, e) && 3 <= f) {
    for (j = g === UNDEF ? .5 * mathPI : rad(g), o = 2 * mathPI / f, k = c + e * mathCos(-j), n = d + e * mathSin(-j), h = 0; h < f; h++) {
      if (j += o, l = c + e * mathCos(-j), m = d + e * mathSin(-j), doIntersect(k, n, l, m, a, b, 1 / 0, b)) {
        if (0 === orientation(k, n, a, b, l, m)) return onSegment(k, n, a, b, l, m);p++;
      }k = l, n = m;
    }q = 0 != p % 2;
  }return q;
},
    _compair2closest = (a, b) => !a || a && b && b.i > a.i ? b : a;function kdTreeAbs(a) {
  'use strict';
  function b(a, b, c) {
    var d = a[b];a[b] = a[c], a[c] = d;
  }function c(a, b, d, g) {
    var h,
        i = {},
        j = g ? 'y' : 'x';return b === d ? (i.point = a[b], i) : 1 == d - b ? (a[b][j] > a[d][j] ? (i.point = a[b], i.left = { point: a[d] }) : (i.point = a[d], i.left = { point: a[b] }), i) : (h = b + d >> 1, g ? f(a, h, b, d) : e(a, h, b, d), i.point = a[h], i.left = c(a, b, h - 1, !g), i.right = c(a, h + 1, d, !g), i);
  }var d,
      e,
      f,
      g = a && a[0] && a[0].r || 5,
      h = Math.max,
      l = Math.floor,
      o = Math.sqrt,
      p = Math.min,
      q = Math.log,
      r = Math.exp,
      j = Math.pow;for (e = function (a, c, d, f) {
    for (var g, k, u, v, w, x, y, A, B, C; f > d;) {
      for (600 < f - d && (g = f - d + 1, k = c - d + 1, u = q(g), v = .5 * r(2 * u / 3), w = .5 * o(u * v * (g - v) / g) * (0 > k - g / 2 ? -1 : 1), x = h(d, l(c - k * v / g + w)), y = p(f, l(c + (g - k) * v / g + w)), e(a, c, x, y)), A = a[c], B = d, C = f, b(a, d, c), a[f].x > A.x && b(a, d, f); B < C;) {
        for (b(a, B, C), B++, C--; a[B].x < A.x;) B++;for (; a[C].x > A.x;) C--;
      }a[d].x === A.x ? b(a, d, C) : (C++, b(a, C, f)), C <= c && (d = C + 1), c <= C && (f = C - 1);
    }
  }, f = function (a, c, d, e) {
    for (var g, k, u, v, w, x, y, A, B, C; e > d;) {
      for (600 < e - d && (g = e - d + 1, k = c - d + 1, u = q(g), v = .5 * r(2 * u / 3), w = .5 * o(u * v * (g - v) / g) * (0 > k - g / 2 ? -1 : 1), x = h(d, l(c - k * v / g + w)), y = p(e, l(c + (g - k) * v / g + w)), f(a, c, x, y)), A = a[c], B = d, C = e, b(a, d, c), a[e].y > A.y && b(a, d, e); B < C;) {
        for (b(a, B, C), B++, C--; a[B].y < A.y;) B++;for (; a[C].y > A.y;) C--;
      }a[d].y === A.y ? b(a, d, C) : (C++, b(a, C, e)), C <= c && (d = C + 1), c <= C && (e = C - 1);
    }
  }, a = a || [], d = a.length; d--;) a[d].r > g && (g = a[d].r), a[d].i = d, a[d].x = +a[d].x, a[d].y = +a[d].y;return { tree: 0 === a.length ? {} : c(a, 0, a.length - 1, !1), search: function (c, d, e, a) {
      function f(a, b, c, d) {
        return o(j(a - c, 2) + j(b - d, 2));
      }function b(g, a) {
        return 'circle' === e ? f(g, a, c, d) <= q : g >= q && g <= r && a >= s && a <= t;
      }function h(b, a, c) {
        return b >= a && b <= c;
      }function i(a) {
        var b = h(c, a.x1, a.x2) && h(d, a.y1, a.y2),
            e = f(c, d, a.point.x, a.point.y);return l ? void (b ? u ? a.point.i > l.point.i && (l = a, u = b, v = e) : (l = a, u = b, v = e) : !u && e < v && (l = a, u = b, v = e)) : (l = a, u = b, void (v = e));
      }function k(a, b) {
        'circle' === e ? q = a : (q = c - a || 0, r = c + a || 0, s = d - b || 0, t = d + b || 0);
      }var l,
          m,
          n,
          p = this.tree,
          q = c - g,
          r = c + g,
          s = d - g,
          t = d + g,
          u = !1,
          v = 0;return a = a || {}, n = function (c) {
        var d, e;c && c.point && (d = a.rx || c.point.r, e = a.ry || c.point.r, k(d, e), b(c.point.x, c.point.y) && i(c), s <= c.point.y && m(c.left), t >= c.point.y && m(c.right));
      }, m = function (c) {
        var d, e;c && c.point && (d = a.rx || c.point.r, e = a.ry || c.point.r, k(d, e), b(c.point.x, c.point.y) && i(c), q <= c.point.x && n(c.left), r >= c.point.x && n(c.right));
      }, m(p), l && l.point || l;
    } };
}class KdTree {
  constructor(a) {
    var b = this;b.configure(a);
  }configure(a) {
    var b = this;b.validatorFn = a ? b.shapeValidator() : b.defaultValidator();
  }defaultValidator() {
    var a = Math.pow,
        b = this;return function (c) {
      var d = b.mousePoint;return !!(c && 1 >= a((c.x - d.x) / b.xLimit, 2) + a((c.y - d.y) / b.yLimit, 2));
    };
  }shapeValidator() {
    var a = this;return function (b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = a.mousePoint,
          m = b && b.shapeInfo,
          n = !1,
          o = l.x,
          p = l.y;return c = m && m.type, 'circle' === c ? (e = m.radius, n = isWithinCircle(o, p, b.x, b.y, e)) : 'arc' === c ? (d = m.innerradius, e = m.radius, n = !isWithinCircle(o, p, b.x, b.y, d) && isWithinCircle(o, p, b.x, b.y, e)) : 'polygon' === c ? (e = m.radius, g = m.startAngle, f = m.sides, n = isWithinPolygon(o, p, b.x, b.y, e, f, g)) : 'rect' === c ? (h = b.x, j = b.y, i = h + (m.width || 0), k = j + (m.height || 0), n = o >= h && o <= i && p >= j && p <= k) : 'default' === c ? n = !1 : void 0, n;
    };
  }buildKdTree(a) {
    return this.kdTree = kdTreeAbs(a), this.tree = this.kdTree.tree, this;
  }getNeighbour(a, b, c) {
    var d = this,
        e = d.tree,
        f = { x1: a.x - d.xLimit, x2: a.x + d.xLimit, y1: a.y - d.yLimit, y2: a.y + d.yLimit },
        g = d.validatorFn;return d.mousePoint = a, b ? this.kdTree && this.kdTree.search(a.x, a.y, c, a.options) : e ? d._searchBtwnLimit(f, e, !0, g) : void 0;
  }_searchBtwnLimit(a, b, c, d) {
    var e,
        f,
        g = this,
        h = c ? 'x' : 'y',
        i = c ? a.x1 : a.y1,
        j = c ? a.x2 : a.y2;if (e = b && b.point && b.point[h], e !== UNDEF) return d(b.point) && (f = b.point), e >= i && b.left && (f = _compair2closest(f, g._searchBtwnLimit(a, b.left, !c, d))), e <= j && b.right && (f = _compair2closest(f, g._searchBtwnLimit(a, b.right, !c, d))), f;
  }_setSearchLimit(a, b) {
    var c = this;c.xLimit = a, c.yLimit = b;
  }
}KdTree.prototype.constructor = KdTree;exports.default = KdTree;
},{}],138:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entities = require('./entities');

var _entities2 = _interopRequireDefault(_entities);

var _kdtree = require('../misc/kdtree');

var _kdtree2 = _interopRequireDefault(_kdtree);

var _dependencyManager = require('../dependency-manager');

var _mapEntitiesAnimation = require('../animation-rules/map-entities-animation');

var _mapEntitiesAnimation2 = _interopRequireDefault(_mapEntitiesAnimation);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

var _eventApi = require('../misc/event-api');

var _schedular = require('../schedular');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    userAgent = window.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !window.opera,
    BLANK = '',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_MIDDLE = 'middle',
    POSITION_CENTER = 'center',
    INNERRADIUSFACTOR = .6,
    math = window.Math,
    mathMin = math.min,
    mathMax = math.max,
    MARKER_ITEM_KEY = 'items',
    mathPI = Math.PI,
    deg2rad = mathPI / 180,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? .002 : 1e-6) + ')',
    colorize = function (a, b) {
  let c = b ? (0, _lib.extend2)(a.FCcolor, b, !1, !0) : { FCcolor: a };return c.toString = _lib.toRaphaelColor, c;
},
    convertToObj = function (a, b) {
  let c,
      d = a && a.length || !1,
      e = b || 'id',
      f = {};if (!a) return a;for (; d--;) c = a[d], c[e] !== UNDEF && (f[c[e].toLowerCase()] = c);return f;
};(0, _dependencyManager.addDep)({ name: 'mapsAnimation', type: 'animationRule', extension: _mapEntitiesAnimation2.default });class Markers extends _entities2.default {
  constructor() {
    super(), this.components = {}, this.getLabelAlignment = { top: function (a, b, c) {
        return { x: a.toString(), y: (b - c).toString(), align: POSITION_CENTER, valign: POSITION_TOP };
      }, left: function (a, b, c) {
        return { x: (a - c).toString(), y: b.toString(), align: POSITION_RIGHT, valign: POSITION_MIDDLE };
      }, right: function (a, b, c) {
        return { x: (a + c).toString(), y: b.toString(), align: POSITION_LEFT, valign: POSITION_MIDDLE };
      }, bottom: function (a, b, c) {
        return { x: a.toString(), y: (b + c).toString(), align: POSITION_CENTER, valign: POSITION_BOTTOM };
      }, center: function (a, b) {
        return { x: a.toString(), y: b.toString(), align: POSITION_CENTER, valign: POSITION_MIDDLE };
      } }, this.getWrapWidth = { right: function () {
        return arguments[1];
      }, left: function (a, b) {
        return a - b;
      }, center: function (a, b) {
        return 2 * mathMin(b, a - b);
      } }, this.getWrapHeight = { top: function () {
        return arguments[1];
      }, middle: function (a, b) {
        return 2 * mathMin(b, a - b);
      }, bottom: function (a, b) {
        return a - b;
      } };
  }getName() {
    return 'markers';
  }getType() {
    return 'dataset';
  }configureAttributes(a) {
    if (a) {
      this.JSONData = a;let b = this,
          c = b.getFromEnv('chart'),
          d = c.config.markerOpts;b.calculateDataLimits(), d.dataEnabled ? this._parseMarkers() : this.defineMarkersNShapes(), this.configureConnectors();
    }
  }calculateMarkerRadiusLimits() {
    if (this.JSONData) {
      let a = this,
          b = a.JSONData,
          c = a.config,
          d = a.getFromEnv('chart'),
          e = d.config.width,
          f = d.config.height,
          g = b.markermaxradius,
          h = b.markerminradius,
          i = Markers.getMarkerRadiusLimits(e, f, g, h);c.minRadius = i.min, c.maxRadius = i.max;
    }
  }calculateDataLimits() {
    let a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.getFromEnv('chart'),
        h = f.config,
        j = g.jsonData,
        k = j.markers || {},
        l = k[MARKER_ITEM_KEY] || [],
        m = this.getFromEnv('number-formatter'),
        n = +Infinity,
        o = -Infinity;for (e = 0, c = l.length; e < c; e++) a = l[e], d = a.value, b = m.getCleanValue(d), null !== b && (n = mathMin(b, n), o = mathMax(b, o));h.min = n, h.max = o;
  }_parseMarkers() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        j = this,
        k = j.getFromEnv('chart'),
        l = k.jsonData,
        m = l.markers,
        n = m[MARKER_ITEM_KEY],
        o = m.shapes,
        p = k.config.markerOpts,
        q = this.getFromEnv('number-formatter'),
        r = j.components.shapeObjs = {},
        s = j.components.markerObjs = {};if (n && n.length) {
      if (o && o.length) for (b = o.length; b; b -= 1) d = o[b - 1], (h = d.id.toLowerCase()) && (r[h] = d);for (b = n.length; b--;) d = n[b], (h = d.id && d.id.toLowerCase()) && (a = d.value, a !== UNDEF && '' !== a && (a = parseFloat(a)), c = Markers._initializeMarkerItem(h, d, null, k), e = c.config.options.shapeid, e && 'string' == typeof e && (e = e.toLowerCase()), f = c.config, g = f.options, f.cleanValue = q.getCleanValue(a), f.formattedValue = null === f.cleanValue ? UNDEF : q.dataLabels(a), f.fillColor = (0, _lib.pluck)(g.fillcolor, g.color, p.fillColor), f.fillAlpha = (0, _lib.pluck)(g.fillalpha, g.alpha, p.fillAlpha), f.fillRatio = (0, _lib.pluck)(g.fillratio, p.fillRatio), f.fillAngle = (0, _lib.pluck)(g.fillangle, p.fillAngle), f.borderThickness = (0, _lib.pluckNumber)(g.borderthickness, p.borderThickness), f.borderColor = (0, _lib.pluck)(g.bordercolor, p.borderColor), f.borderAlpha = (0, _lib.pluck)(g.borderalpha, p.borderAlpha), f.labelPadding = g.labelpadding || p.labelPadding, c.dataset = j, d.__hideMarker && (c._isHidden = !0), e && (c.shapeObj = r[e]), s[h] = c);
    }
  }defineMarkersNShapes() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        j = this,
        k = j.getFromEnv('chart'),
        l = k.jsonData,
        m = l.markers,
        n = m.definition,
        o = this.getFromEnv('number-formatter'),
        p = k.config.markerOpts,
        q = convertToObj(n) || {},
        r = convertToObj(m.application) || {},
        s = m.shapes,
        t = j.components.shapeObjs = j.components.shapeObjs || (j.components.shapeObjs = {}),
        u = j.components.markerObjs = j.components.markerObjs || (j.components.markerObjs = {});if (n && n.length) {
      if (s && s.length) for (d = s.length; d; d -= 1) f = s[d - 1], (h = f.id.toLowerCase()) && (t[h] = f);for (h in q) f = q[h], e = u[h] = Markers._initializeMarkerItem(h, f, r[h], k), e.dataset = j, g = e.config.options.shapeid, b = e.config, c = f.value, b.cleanValue = o.getCleanValue(c), a = b.options, b.formattedValue = null === b.cleanValue ? UNDEF : o.dataLabels(c), b.fillColor = (0, _lib.pluck)(a.fillcolor, a.color, p.fillColor), b.fillAlpha = (0, _lib.pluck)(a.fillalpha, a.alpha, p.fillAlpha), b.fillRatio = (0, _lib.pluck)(a.fillratio, p.fillRatio), b.fillAngle = (0, _lib.pluck)(a.fillangle, p.fillAngle), b.borderThickness = (0, _lib.pluckNumber)(a.borderthickness, p.borderThickness), b.borderColor = (0, _lib.pluck)(a.bordercolor, p.borderColor), b.borderAlpha = (0, _lib.pluck)(a.borderalpha, p.borderAlpha), b.labelPadding = a.labelpadding || p.labelPadding, b.options.tooltext = (0, _lib.pluck)(a.tooltext, p.tooltext), b.link = a.link, g && (e.shapeObj = t[g.toLowerCase()]);
    }
  }static getMarkerRadiusLimits(a, b, c, d) {
    let e = mathMin(a, b),
        f = .02;return d = parseFloat(d), c = parseFloat(c), isNaN(d) || isNaN(c) ? isNaN(d) ? isNaN(c) ? { min: f * e, max: f * 3.5 * e } : { min: parseInt(c / 10, 10), max: c } : { min: d, max: 10 * d } : d < c ? { min: d, max: c } : { min: c, max: d };
  }getDataLimits() {
    let a = this,
        b = a.config;return { min: b.min, max: b.max };
  }static _initializeMarkerItem(a, b, c) {
    let d,
        e = {},
        f = e.config;return f || (f = e.config = {}), f.id = a, f.definition = b, f.application = c, f.hasValue = null, f.value = null, f.options = null, f.label = null, f.markerShape = null, f.markerLabel = null, f.drawOptions = { shape: null, label: null }, f.drawComplete = !1, d = e.config.options = (0, _lib.extend2)({}, f.definition), f.dataEnabled ? !isNaN(d.value) && '' !== d.value && (e.value = parseFloat(d.value), e.hasValue = !0) : f.applyAll ? f.options = (0, _lib.extend2)(d, f.application) : c && (f.options = (0, _lib.extend2)(d, f.application)), e;
  }configureConnectors() {
    let a,
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
        q = this,
        r = q.getFromEnv('chart'),
        s = r.jsonData,
        t = q.components,
        u = s.markers || {},
        v = u.connector || u.connectors || [],
        w = t.markerObjs,
        x = v.length,
        y = q.components.connectors,
        z = function (a) {
      return function (b) {
        let c = this,
            d = c.getElement();d && c.unfilteredConfig.hoverEffect && d.attr(c.unfilteredConfig._hoverAttrs), r.fireChartInstanceEvent('connectorrollover', a, b);
      };
    },
        A = function (a) {
      return function (b) {
        let c = this,
            d = c.getElement();d && c.unfilteredConfig.hoverEffect && d.attr(c.unfilteredConfig._defaultAttrs), r.fireChartInstanceEvent('connectorrollout', a, b);
      };
    },
        B = function (a) {
      return function (b) {
        r.fireChartInstanceEvent('connectorClick', a, b);
      };
    },
        C = r.config.connectorOpts,
        D = {};for (y = q.components.connectors = [], p = 0; p < x; p++) (o = v[p], o.from || o.to) && (c = w[o.from.toLowerCase()], d = w[o.to.toLowerCase()], c && d) && (e = v[p].label, D = y[p], D || (D = y[p] = {}), D.config || (a = D.config = {}), D.graphics || (D.graphics = {}), a = D.config = (0, _lib.extend2)({}, o), a.fromMarker = c, a.toMarker = d, a.link = o.link, a.showTooltip = (0, _lib.pluckNumber)(o.showtooltip, C.showTooltip), f = a.tooltext = a.showTooltip ? (0, _lib.pluck)(o.tooltext, C.tooltext) : BLANK, g = a.thickness = (0, _lib.pluck)(o.thickness, C.thickness), h = a.color = (0, _lib.pluck)(o.color, C.color), j = a.alpha = (0, _lib.pluck)(o.alpha, C.alpha), a.hoverEffect = (0, _lib.pluckNumber)(o.showhovereffect, C.showHoverEffect), k = (0, _lib.pluck)(o.hovercolor, C.hoverColor, h), l = (0, _lib.pluck)(o.hoveralpha, C.hoverAlpha, j), m = (0, _lib.pluck)(o.hoverthickness, C.hoverThickness, g), a.dashed = (0, _lib.pluck)(o.dashed, C.dashed), a.dashLen = (0, _lib.pluckNumber)(o.dashlen, C.dashlen), a.dashGap = (0, _lib.pluckNumber)(o.dashgap, C.dashgap), f && (a.tooltext = f = (0, _lib.parseUnsafeString)((0, _lib.parseTooltext)(f, [3, 40, 41, 42, 43], { label: e, fromId: c.config.definition.id, toId: d.config.definition.id, fromLabel: c.config.definition.label, toLabel: d.config.definition.label }, b))), a.eventArgs = { fromMarkerId: c.config.id, toMarkerId: d.config.id, label: e }, a._hoverAttrs = { stroke: colorize({ color: k, alpha: l }).toString(), "stroke-width": m }, a._defaultAttrs = { stroke: colorize({ color: h, alpha: j }).toString(), "stroke-width": g }, a.type = 'line', a.onclick = B(a.eventArgs), a.onmouseover = z(a.eventArgs), a.onmouseout = A(a.eventArgs), e && (n = D.labelConfig, !n && (n = D.labelConfig = {}), n.type = 'text', n.text = e, n.align = POSITION_CENTER, n.valign = POSITION_MIDDLE, n.font = C.font, n.fillcolor = C.fontColor, n.bgcolor = C.labelBgColor, n.bordercolor = C.labelBorderColor, n.tooltext = a.tooltext));
  }draw() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g = this,
        h = g.getFromEnv('chart'),
        i = g.config,
        j = h.getChildren('mapAnnotations')[0],
        k = g.components.markerObjs,
        l = h.config,
        m = l.markerOpts,
        n = l.scalingParams,
        o = h.config.annotationConfig,
        p = g.getFromEnv('toolTipController'),
        q = [],
        r = [],
        s = {};for (d in this._drawConnectors(), g.imageLoadCount = 0, g.imageCount = 0, f = j.addGroup(Object.assign(o, { id: 'markers', fillalpha: '100', items: q, scaleimages: 1 }), g), e = j.addGroup(Object.assign(o, { id: 'markerLabels', items: r, scaleimages: 1 }), g), l.labelsOnTop && h.getChildren('mapLabelAnnotations') && h.getChildren('mapLabelAnnotations')[0].annotation.groups[0].store.element.toFront(), g.components.markerGroup = f, g.components.markerLabelGroup = e, i.autoScale = m.autoScale ? n.sFactor : 1, k) (a = null, b = k[d], c = b.config, c.conIsHidden || (a = this._drawMarkerItem.call(b)), !!a) && (c._annotationIndex = q.length, s[d] = b, b.markerShape = a.markerShape && j.addItem(f.getId(), Object.assign({ align: 'center', valign: 'middle', animationLabel: 'markerItem' }, a.markerShape), !0, g), b.markerShape && p.enableToolTip(b.markerShape.getElement(), b.config.tooltext), q.push(b.markerShape), b.markerLabel = a.markerLabel && j.addItem(e.getId(), Object.assign({ animationLabel: 'markerItem' }, a.markerLabel), !0, g), r.push(b.markerLabel));g.addJob('buildKdtree', g._buildKdTree.bind(g), _schedular.priorityList.kdTree);
  }_buildKdTree() {
    let a,
        b,
        c = this,
        d = c.components.kdArrayMap,
        e = c.components.markerGroup,
        f = [],
        g = e && e.items,
        h = g && g.length || 0;for (b = 0; b < h; b++) a = g[b].config.id, d[a] && f.push(d[a]);c.components.kDTree || (c.components.kDTree = new _kdtree2.default(!0)), c.components.kDTree._setSearchLimit(1 / 0, 1 / 0), c.components.kDTree.buildKdTree(f);
  }_drawMarkerItem() {
    let a,
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
        u = this,
        v = u.dataset,
        w = v.getFromEnv('chart'),
        x = w.config,
        y = v.config,
        z = x.scalingParams,
        A = u.config,
        B = A.options,
        C = A.definition,
        D = x.markerOpts,
        E = D.dataLabels.style,
        F = B.shapeid,
        G = B.scale || 1,
        H = B.label || BLANK,
        I = w.config.scalingParams.scaleFactor * w.config.baseScaleFactor,
        J = (B.labelpos || POSITION_TOP).toLowerCase(),
        K = A.formattedValue === UNDEF ? UNDEF : A.formattedValue,
        L = B.tooltext || D.tooltext,
        M = (0, _lib.pluckNumber)(C.radius, A.radius, D.radius) * G * y.autoScale || 1e-4,
        N = A.fillColor,
        O = A.fillAlpha,
        P = A.fillRatio,
        Q = A.fillAngle,
        R = A.borderThickness,
        S = A.borderColor,
        T = A.borderAlpha,
        U = v.components.kdArrayMap || (v.components.kdArrayMap = {}),
        V = u.config.id;if (A.autoScale = D.autoScale ? I : 1, !!F) return (L = L ? (0, _lib.parseUnsafeString)((0, _lib.parseTooltext)(L, [1, 2, 3], { formattedValue: K, label: H }, B)) : K ? H + D.tooltipSepChar + K : H, K !== UNDEF && null !== K ? H = H + D.labelSepChar + K : isNaN(G) ? G = 1 : 0 > G ? G = 0 : 5 < G && (G = 5), (0, _lib.extend2)(B, { x: B.x && B.x.toString(), y: B.y && B.y.toString(), fillcolor: N, fillalpha: O, fillratio: P, fillangle: Q, borderthickness: R, bordercolor: S, borderalpha: T, hovereffect: (0, _lib.pluck)(D.showHoverEffect), radius: M && M.toString(), link: B.link, showshadow: (0, _lib.pluckNumber)(B.showshadow, A.shadow), _markerLabel: H, _markerId: B.id, id: (B.id + BLANK).toLowerCase() }), delete B.tooltext, A.tooltext = !!D.showTooltip && L, o = +B.x * z.sFactor + z.translateX, p = +B.y * z.sFactor + z.translateY, M = B.radius, 'triangle' === F ? ((0, _lib.extend2)(B, { type: 'polygon', sides: 3, startangle: D.startAngle }), t = 'polygon', s = 3) : 'diamond' === F ? ((0, _lib.extend2)(B, { type: 'polygon', sides: 4, startangle: D.startAngle }), t = 'polygon', s = 4) : 'arc' === F ? (r = M * INNERRADIUSFACTOR, (0, _lib.extend2)(B, { type: 'arc', startangle: 0, endangle: 360, innerradius: r }), t = 'arc') : 'circle' === F ? (B.type = 'circle', t = 'circle') : (k = v.getShapeArgs.call(u), D.dataEnabled && D.valueToRadius && B.radius !== UNDEF ? delete k.radius : (!k.radius && (k.radius = D.radius), k.radius *= G * A.autoScale), (0, _lib.extend2)(B, k), B.id = B._markerId && B._markerId.toLowerCase(), r = k.innerradius, k.radius && (M = k.radius), t = k.type && k.type.toLowerCase(), s = k.sides || 5, M = +M, M && r && M < r && (n = M, B.radius = M = r, B.innerradius = r = n)), B.type = B.type && B.type.toLowerCase(), (0, _lib.extend2)(B, { hoverfillcolor: (0, _lib.pluck)(B.fillhovercolor, D.hoverFillColor, B.fillcolor), hoverfillalpha: (0, _lib.pluck)(B.fillhoveralpha, D.hoverFillAlpha, B.fillalpha), hoverfillratio: (0, _lib.pluck)(B.fillhoverratio, D.hoverFillRatio, B.fillratio), hoverfillangle: (0, _lib.pluck)(B.fillhoverangle, D.hoverFillAngle, B.fillangle), hoverborderthickness: (0, _lib.pluckNumber)(B.borderhoverthickness, D.hoverBorderThickness, B.borderthickness), hoverbordercolor: (0, _lib.pluck)(B.borderhovercolor, D.hoverBorderColor, B.bordercolor), hoverborderalpha: (0, _lib.pluck)(B.borderhoveralpha, D.hoverBorderAlpha, B.borderalpha) }), l = { alpha: B.fillalpha, color: B.fillcolor, angle: 360 - B.fillangle, ratio: B.fillratio }, m = { alpha: B.hoverfillalpha, color: B.hoverfillcolor, angle: 360 - B.hoverfillangle, ratio: B.hoverfillratio }, B._defaultattrs = { fill: (0, _lib.toRaphaelColor)(l), "stroke-width": '0' === B.showborder ? 0 : B.borderthickness, stroke: (0, _libGraphics.convertColor)(B.bordercolor, B.borderalpha) }, B._hoverattrs = { fill: (0, _lib.toRaphaelColor)(m), "stroke-width": '0' === B.showborder ? 0 : B.hoverborderthickness, stroke: (0, _libGraphics.convertColor)(B.hoverbordercolor, B.hoverborderalpha) }, 'image' === B.type ? (B.borderthickness = B.borderthickness || 0, B.onload = function (a) {
      let b = this,
          c = b.config,
          d = a.width,
          e = a.height,
          f = {},
          g = (+c.x - d / (2 * z.sFactor)) * z.sFactor,
          h = (+c.y - e / (2 * z.sFactor)) * z.sFactor;f = U[V] || (U[V] = {}), f.x = g + z.translateX, f.y = h + z.translateY, f.element = u, f.shapeInfo = { type: 'rect', width: d, height: e }, d && e && b.getElement().attr({ x: g, y: h, width: d, height: e }), v.imageLoadCount++, v.imageLoadCount === v.imageCount && v._buildKdTree();
    }, B.onerror = function () {
      v.imageLoadCount++, v.imageLoadCount === v.imageCount && v._buildKdTree();
    }, v.imageCount++) : (q = U[V] || (U[V] = {}), q.x = o, q.y = p, q.element = u, q.shapeInfo = { type: t, sides: s, radius: +M + B.borderthickness / 2, innerradius: r }), A.drawOptions.shape = B, !D.showLabels) ? { markerShape: B } : (j = B.labelpadding || D.labelPadding, a = v._getLabelOptions(J, j, B), b = a.align, c = a.valign, d = A._labelBaseWidth, e = A._labelBaseHeight, f = A._labelXOffset, g = A._labelYOffset, h = D.labelWrapWidth ? D.labelWrapWidth : v.getWrapWidth[b](d, +a.x + f), i = D.labelWrapHeight ? D.labelWrapHeight : v.getWrapHeight[c](e, +a.y + g), h > j && (h -= j), i > j && (i -= j), A.drawOptions.label = 'center' == b && 'middle' == c ? (0, _lib.extend2)({ type: 'text' }, { text: H, tooltext: B.tooltext, x: a.x, y: a.y, align: b, valign: a.valign, wrap: 1, wrapwidth: h, wrapheight: i, fontsize: E.fontSize / z.sFactor, font: E.fontFamily, fillcolor: E.fontColor }) : (0, _lib.extend2)({ type: 'text' }, { text: H, tooltext: B.tooltext, x: a.x, y: a.y, align: b, valign: a.valign, wrap: 1, wrapwidth: h, wrapheight: i, fontsize: E.fontSize / z.sFactor, font: E.fontFamily, fillcolor: E.fontColor }), { markerShape: B, markerLabel: A.drawOptions.label });
  }getHoverFn() {
    let a = this,
        b = a.getFromEnv('chart');return function () {
      let a,
          c,
          d = this,
          e = d.data('marker'),
          f = e.markerShape,
          g = f.unfilteredConfig,
          h = g._markerEventArgs,
          i = f.getElement(),
          j = i.getBBox(),
          k = e.config;i && g.hovereffect && ('circle' === f.config.type && (c = { color: g.hoverfillcolor, alpha: g.hoverfillalpha, angle: 360 - g.hoverfillangle, ratio: g.hoverfillratio, gradientUnits: 'objectBoundingBox', radialGradient: 'radial' === f.config.rawFillPattern }, g._hoverattrs.fill = (0, _lib.toRaphaelColor)(c)), a = (0, _lib.extend2)({}, g._hoverattrs), 'image' === i.type && (delete a.fill, delete a.stroke, delete a['stroke-width']), i.attr(a)), h || (h = g._markerEventArgs = { x: j.x, y: j.y, scaledX: j.x / f.groupConfig.scaleX, scaledY: j.y / f.groupConfig.scaleY, chartX: j.x + j.width / 2, chartY: j.y + j.height / 2, id: g.id, label: g.label }), (0, _eventApi.raiseEventGroup)(k.options.id, 'markerRollOver', h, b.getFromEnv('chartInstance'), k, UNDEF, UNDEF, UNDEF);
    };
  }getHoverOutFn() {
    let a = this,
        b = a.getFromEnv('chart');return function () {
      let a,
          c = this,
          d = c.data('marker'),
          e = d.markerShape,
          f = e.getElement(),
          g = d.config,
          h = e.unfilteredConfig;f && e.unfilteredConfig.hovereffect && ('circle' === e.config.type && (h._defaultattrs.fill = (0, _lib.toRaphaelColor)({ alpha: e.config.rawAlpha, color: e.config.rawColor, angle: 360 - e.config.rawAngle, ratio: e.config.rawRatio, radialGradient: 'radial' === e.config.rawFillPattern })), a = (0, _lib.extend2)({}, e.unfilteredConfig._defaultattrs), 'image' === f.type && (delete a.fill, delete a.stroke, delete a['stroke-width']), f.attr(a)), (0, _eventApi.raiseEventGroup)(g.id, 'markerRollOut', e.unfilteredConfig._markerEventArgs, b.getFromEnv('chartInstance'), UNDEF, UNDEF, UNDEF);
    };
  }getClickFn() {
    let a = this;return function (b) {
      let c = this,
          d = c.data('marker'),
          e = d.config.options,
          f = a.getFromEnv('chart'),
          g = d.markerShape,
          h = g.config,
          i = c.getBBox(),
          j = h._markerEventArgs;j || (j = h._markerEventArgs = { x: i.x, y: i.y, scaledX: i.x / g.groupConfig.scaleX, scaledY: i.y / g.groupConfig.scaleY, chartX: i.x + i.width / 2, chartY: i.y + i.height / 2, id: e.id, label: e.label }), f.fireChartInstanceEvent('markerClick', j, b);
    };
  }highlightPoint(a) {
    let b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = a.element,
        m = this,
        n = m.getFromEnv('chart'),
        o = n.graphics,
        p = m.getFromEnv('animationManager'),
        q = o.trackerElems || (o.trackerElems = {}),
        r = a.shapeInfo,
        s = m.getFromEnv('toolTipController'),
        t = a.x,
        u = a.y,
        v = n.config.lastHoveredPoint,
        w = !1;return !1 === a ? (b = v && v.shapeInfo.type, c = q[b], c && c.hide(), void (n.config.lastHoveredPoint = null)) : void (d = { fill: TRACKER_FILL, stroke: TRACKER_FILL }, b = r.type, 'circle' === b && (b = 'polygon'), c = q[b], 'polygon' === b ? (e = r.sides || 1, f = r.startAngle, h = r.radius, !c && (w = !0), c = o.trackerElems[b] = p.setAnimation({ el: o.trackerElems[b] || 'polypath', container: c, attr: Object.assign({ polypath: [e, t, u, h, f] }, d), component: m, label: 'markers' })) : 'rect' === b ? (g = r.width, j = r.height, !c && (w = !0), c = o.trackerElems[b] = p.setAnimation({ el: o.trackerElems[b] || 'rect', container: c, attr: Object.assign({ x: t, y: u, width: g, height: j }, d), component: m, label: 'markers' })) : 'arc' === b && (i = l.markerShape.config.innerRadius, f = (360 - l.markerShape.config.startAngle) * deg2rad, k = (360 - l.markerShape.config.endAngle) * deg2rad, h = r.radius, !c && (w = !0), c = o.trackerElems[b] = p.setAnimation({ el: o.trackerElems[b] || 'ringpath', container: c, attr: Object.assign({ ringpath: [t, u, h, i, k, f] }, d), component: m, label: 'markers' })), n.config.lastHoveredPoint = a, w && c.click(m.getClickFn()).hover(m.getHoverFn(), m.getHoverOutFn()), c.show().data('marker', l), s.enableToolTip(c, l.config.tooltext));
  }_drawConnectors() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        j = this,
        k = j.getFromEnv('chart'),
        l = k.config.annotationConfig,
        m = j.components,
        n = m.connectors || (j.components.connectors = []),
        o = n.length,
        p = k.config.scalingParams,
        q = k.config.connectorOpts,
        r = q.showLabels,
        s = k.getChildren('mapAnnotations')[0],
        t = [],
        u = [],
        v = [];for (v.push({ id: 'connectorLabels', fillalpha: '100', items: u }), v.push({ id: 'connectors', fillalpha: '100', items: t }), s.addGroup(Object.assign(l, v[1]), j), s.addGroup(Object.assign(l, v[0]), j), b = 0; b < o; b++) n[b] && (g = n[b].config.fromMarker.config, h = n[b].config.toMarker.config, c = g.options.x, d = g.options.y, e = h.options.x, f = h.options.y, n[b].config.x = c, n[b].config.y = d, n[b].config.tox = e, n[b].config.toy = f, t.push(n[b].config), a = s.addItem('connectors', Object.assign({ animationLabel: 'markerItem' }, n[b].config), !0, j), a.addEventListener('mouseover', n[b].config.onmouseover), a.addEventListener('mouseout', n[b].config.onmouseout), a.addEventListener('click', n[b].config.onclick), n[b].labelConfig && r && (n[b].labelConfig.x = ((+c + +e) / 2).toString(), n[b].labelConfig.y = ((+d + +f) / 2).toString(), n[b].labelConfig.fontsize = q.fontSize / (p.scaleFactor * k.config.baseScaleFactor), u.push(n[b].labelConfig), s.addItem('connectorLabels', Object.assign({ animationLabel: 'markerItem' }, n[b].labelConfig), !0, j)));
  }getShapeArgs() {
    let a,
        b = this,
        c = b.config,
        d = (0, _lib.extend2)({}, b.shapeObj);return c.autoScale = 1, d ? ('polygon' === d.type ? 3 > d.sides ? d.type = 'circle' : d.startangle = c.startAngle : 'arc' === d.type && (a = (d.radius || c.markerRadius) * c.autoScale, d.radius = a, d.innerradius = d.innerradius && d.innerradius * c.autoScale || a * INNERRADIUSFACTOR), d) : null;
  }_getLabelOptions(a, b, c, d, e) {
    let f,
        g,
        h,
        i = this,
        j = a && a.toLowerCase();return i.getLabelAlignment[j] || (j = 'center'), g = +c.x, h = +c.y, f = d === UNDEF || e === UNDEF ? c.radius || 0 : /^(top|bottom)$/ig.test(j) && .5 * e || /^(left|right)$/ig.test(j) && .5 * d || 0, f = +f + +b, i.getLabelAlignment[j](g, h, f);
  }addMarkerItem(a) {
    let b,
        c,
        d,
        e,
        f,
        g,
        h = this,
        i = h.getFromEnv('chart'),
        j = a,
        k = h.components.markerObjs,
        l = h.components.shapeObjs,
        m = h.components.markerGroup,
        n = h.components.markerLabelGroup,
        o = i.getChildren('mapAnnotations')[0],
        p = h.getFromEnv('number-formatter'),
        q = i.config.markerOpts;if (g = j.id.toLowerCase()) {
      if (k[g]) return;delete j.value, h.imageLoadCount = 0, b = Markers._initializeMarkerItem(g, j, null), b.dataset = h, f = b.config.options.shapeid, d = b.config, e = j.value, d.cleanValue = p.getCleanValue(e), a = d.options, d.formattedValue = null === d.cleanValue ? UNDEF : p.dataLabels(e), d.fillColor = (0, _lib.pluck)(a.fillcolor, a.color, q.fillColor), d.fillAlpha = (0, _lib.pluck)(a.fillalpha, a.alpha, q.fillAlpha), d.fillRatio = (0, _lib.pluck)(a.fillratio, q.fillRatio), d.fillAngle = (0, _lib.pluck)(a.fillangle, q.fillAngle), d.borderThickness = (0, _lib.pluckNumber)(a.borderthickness, q.borderThickness), d.borderColor = (0, _lib.pluck)(a.bordercolor, q.borderColor), d.borderAlpha = (0, _lib.pluck)(a.borderalpha, q.borderAlpha), d.labelPadding = a.labelpadding || q.labelPadding, d.options.tooltext = (0, _lib.pluck)(a.tooltext, q.tooltext), d.link = a.link, f && (b.shapeObj = l[f && f.toLowerCase()]), k[g] = b, c = h._drawMarkerItem.call(b), m && n && (b.markerShape = c.markerShape && o.addItem(m.getId(), Object.assign({ align: 'center', valign: 'middle', animationLabel: 'markerItem' }, c.markerShape), !0, h), b.markerLabel = c.markerLabel && o.addItem(n.getId(), Object.assign({ animationLabel: 'markerItem' }, c.markerLabel), !0, h)), h._buildKdTree();
    }
  }updateMarkerItem(a, b) {
    let c,
        d,
        e = this,
        f = e.getFromEnv('chart'),
        g = f.getChildren('mapAnnotations')[0],
        h = e.components.markerObjs,
        i = h[a];i && (c = i.config.options, (0, _lib.extend2)(c, b), e.imageLoadCount = 0, d = e._drawMarkerItem.call(i).markerShape, e._buildKdTree(), g.update(a, d));
  }_removeMarkerItem(a) {
    let b,
        c,
        d = this,
        e = d.components,
        f = e.markerObjs,
        g = f[a],
        h = e.kdArrayMap;g && (b = g.markerShape, c = g.markerLabel, b && b.dispose(), c && c.dispose(), delete h[a], d._buildKdTree()), delete f[a];
  }getElement(a) {
    let b = this;if (b.components.kDTree) return b.components.kDTree.getNeighbour(a);
  }
}exports.default = Markers;
},{"./entities":137,"../misc/kdtree":169,"../dependency-manager":20,"../animation-rules/map-entities-animation":167,"../lib/lib":23,"../lib/lib-graphics":24,"../misc/event-api":25,"../schedular":21}],139:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../../lib/lib');

var _dependencyManager = require('../../dependency-manager');

var _mapEntitiesAnimation = require('../../animation-rules/map-entities-animation');

var _mapEntitiesAnimation2 = _interopRequireDefault(_mapEntitiesAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dependencyManager.addDep)({ name: 'mapsAnimation', type: 'animationRule', extension: _mapEntitiesAnimation2.default });class MapGroup extends _componentInterface2.default {
  getType() {
    return 'group';
  }getName() {
    return 'mapGroup';
  }configure() {
    let a = this;a._mapChildren(a => {
      a.configure && a.configure();
    });
  }createContainer() {
    let a,
        b = this,
        c = b.getLinkedParent(),
        d = b.getFromEnv('animationManager'),
        e = c.getChildContainer();a = e.plotGroup, b.getChildContainer('plotShadow') || b.addChildContainer('plotShadow', d.setAnimation({ el: 'group', attr: { name: 'manager-plot-shadow', opacity: 1 }, container: a, component: b, label: 'group' })), b.getChildContainer('plot') || b.addChildContainer('plot', d.setAnimation({ el: 'group', attr: { name: 'manager-plot', opacity: 1 }, container: a, component: b, label: 'group' }));
  }_transformGroup() {
    let a = this,
        b = this.getFromEnv('chart'),
        c = b.getFromEnv('chartInstance'),
        d = a.getFromEnv('animationManager'),
        e = b.jsonData,
        f = a.getChildContainer('plot'),
        g = a.getChildContainer('plotShadow'),
        h = b.config.scalingParams;f.hide(), g.hide(), b.config.entitiesReady = !1, c.addEventListener('internal.mapdrawingcomplete', function () {
      return function (b) {
        b.detachHandler(), _lib.hasSVG && (c.args.link && c.args.clickedEntityBox && 'scale' === e.chart.linkedcharttransition ? (f && d.setAnimation({ el: f, attr: { transform: h.transformStr }, component: a, state: 'appearing', label: 'group' }), g && d.setAnimation({ el: g, attr: { transform: h.transformStr }, component: a, state: 'appearing', label: 'group' })) : (f && d.setAnimation({ el: f, attr: { transform: h.transformStr }, component: a, state: 'appearing', label: 'group' }), g && d.setAnimation({ el: g, attr: { transform: h.transformStr }, component: a, state: 'appearing', label: 'group' }))), f.show(), g.show();
      };
    }()), b.checkComplete();
  }draw() {
    this.createContainer(), this._transformGroup();
  }getDataLimits(a) {
    let b,
        c = this,
        d = +Infinity,
        e = -Infinity,
        f = 0,
        g = function (a) {
      e = Math.max(e, a.max), d = Math.min(d, a.min);
    };return c._mapChildren(c => c.getState('removed') || !1 === c.getState('visible') ? void (a && (b = c.getDataLimits(a), g(b))) : void (f++, b = c.getDataLimits(a), g(b))), f ? c.setState('visible', !0) : c.setState('visible', !1), this.config.range || (this.config.range = {}, this.config.range.min = this.config.dataMin, this.config.range.max = this.config.dataMax), { max: e, min: d };
  }
}exports.default = MapGroup;
},{"../../../core/component-interface":65,"../../lib/lib":23,"../../dependency-manager":20,"../../animation-rules/map-entities-animation":167}],121:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  var b,
      c = a.getFromEnv('dataSource'),
      d = c.data || {},
      e = c.markers;(0, _lib.componentFactory)(a, _maps2.default, 'mapGroup'), b = a.getChildren('mapGroup')[0], (0, _lib.datasetFactory)(b, _entities2.default, 'entities', 1, [d]), e ? (0, _lib.datasetFactory)(b, _markers2.default, 'markers', 1, [e]) : a.getDatasets()[1] && a.getDatasets()[1].remove();
};

var _lib = require('../lib/lib');

var _entities = require('../datasets/entities');

var _entities2 = _interopRequireDefault(_entities);

var _markers = require('../datasets/markers');

var _markers2 = _interopRequireDefault(_markers);

var _maps = require('../datasets/groups/maps');

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../lib/lib":23,"../datasets/entities":137,"../datasets/markers":138,"../datasets/groups/maps":139}],199:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let HUNDREDSTRING = '100',
    COLOR_BLACK = '#000000',
    BLANK = '';exports.HUNDREDSTRING = HUNDREDSTRING;
exports.BLANK = BLANK;
exports.COLOR_BLACK = COLOR_BLACK;
},{}],170:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib/lib');

var _stringsLib = require('./strings-lib');

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    getTransitColor = function (a, b, c) {
  let d = a[0],
      e = a[1],
      f = a[2],
      g = d + (b[0] - d) * c,
      h = e + (b[1] - e) * c,
      i = f + (b[2] - f) * c;return { hex: (_stringsLib.COLOR_BLACK + (g << 16 | h << 8 | i).toString(16)).slice(-6), rgb: [g, h, i] };
};class ColorBucket extends _componentInterface2.default {
  constructor() {
    super();let a = this;a.mapByCategory = !1, a.colorArr = [], a.noValidRange = !0, a.sortLegend = !1;
  }__setDefaultConfig() {
    super.__setDefaultConfig(), this.config.defaultObj = { code: 'CCCCCC', alpha: '100', bordercolor: '000000', borderalpha: '100' };
  }getType() {
    return 'colorComponent';
  }getName() {
    return 'colorBucket';
  }configure(a) {
    if (!a) return;let b,
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
        n = this,
        o = n.mapByCategory,
        p = a.numberFormatter,
        q = a.colorRange || {},
        r = (0, _lib.extend2)([], q.color),
        s = (0, _lib.pluckNumber)(p.getCleanValue(q.maxvalue), 1 / 0),
        t = (0, _lib.pluckNumber)(p.getCleanValue(q.minvalue), -Infinity),
        u = n.colorArr;if (a.mapByCategory !== UNDEF && (o = n.mapByCategory = !!+a.mapByCategory), r = o ? r.filter(a => a.code || a.color) : r.filter(a => (a.minvalue || a.maxvalue) && (a.code || a.color)), r.forEach(a => {
      a.minvalue && a.maxvalue && +a.maxvalue < +a.minvalue && (j = a.maxvalue, a.maxvalue = a.minvalue, a.minvalue = j), a.minvalue ? a.maxvalue ? (l = p.getCleanValue(a.minvalue), k = p.getCleanValue(a.maxvalue), a.rangeLabel = p.dataLabels(l) + '-' + p.dataLabels(k)) : (l = p.getCleanValue(a.minvalue), a.maxvalue = k = s, a.rangeLabel = k === 1 / 0 ? '>' + p.dataLabels(l) : p.dataLabels(l) + '-' + p.dataLabels(k)) : (a.minvalue = l = t, k = p.getCleanValue(a.maxvalue), a.rangeLabel = l === -Infinity ? '<' + p.dataLabels(k) : p.dataLabels(l) + '-' + p.dataLabels(k));
    }), r.sort((a, b) => +a.minvalue == +b.minvalue ? a.maxvalue - b.maxvalue : a.minvalue - b.minvalue), r && (b = r.length)) {
      for (u.length = 0, c = 0; c < b; c += 1) h = r[c], d = (0, _lib.pluck)(h.color, h.code), e = (0, _lib.pluck)(h.alpha), g = (0, _lib.pluck)(h.bordercolor), f = (0, _lib.pluck)(h.borderalpha, 100), k = (0, _lib.pluckNumber)(h.maxvalue), l = (0, _lib.pluckNumber)(h.minvalue), m = (0, _lib.pluck)(h.label, h.displayvalue, h.rangeLabel), (d && k >= l || o && m) && u.push({ code: d, alpha: e || '100', oriAlpha: e, maxvalue: k, minvalue: l, label: (0, _lib.parseUnsafeString)(m), labelId: m.toLowerCase(), bordercolor: g, borderAlpha: f, name: h.name });n.sortedColorArr = n.colorArr.slice(0);
    } else n.noValidRange = !0, n.colorArr = [], n.sortedColorArr = [];
  }getColorObj(a) {
    if (a === UNDEF) return { outOfRange: !0 };let b,
        c = this,
        d = c.sortedColorArr,
        e = c.gradient ? 1 : 0,
        f = d[e];if (c.mapByCategory) {
      for (a = (0, _lib.parseUnsafeString)(a).toLowerCase() || a.toString().toLowerCase(); f;) {
        if (f.labelId === a || f.maxvalue >= a && f.minvalue <= a) return { code: f.code, alpha: f.alpha || '100', oriAlpha: f.oriAlpha, seriesIndex: e, legendItemId: f.legendItemId };e += 1, f = d[e];
      }return { outOfRange: !0 };
    }if (c.gradient) {
      if (c.scaleMin <= a && c.scaleMax >= a) {
        for (; f && f.maxvalue < a;) e += 1, f = d[e];return b = (a - f.minvalue) / f.range, { code: getTransitColor(d[e - 1].codeRGB, f.codeRGB, b).hex };
      }return { outOfRange: !0 };
    }for (; f;) {
      if (a < f.minvalue) return 0 == e ? { code: f.code, alpha: f.alpha || '100', oriAlpha: f.oriAlpha, seriesIndex: e, name: f.name, label: f.label, outOfRange: !0 } : { code: d[e - 1].code, alpha: d[e - 1].alpha || '100', oriAlpha: d[e - 1].oriAlpha, seriesIndex: e, name: d[e - 1].name, label: d[e - 1].label, outOfRange: !0 };if (a > f.maxvalue && e == d.length - 1) return { code: f.code, alpha: f.alpha || '100', oriAlpha: f.oriAlpha, seriesIndex: e, name: f.name, label: f.label, outOfRange: !0 };if (f.maxvalue >= a && f.minvalue <= a) return { code: f.code, alpha: f.alpha || '100', oriAlpha: f.oriAlpha, seriesIndex: e, name: f.name, label: f.label };e += 1, f = d[e];
    }if (!d.length) return { outOfRange: !0 };
  }getColorRangeArr(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        j,
        k,
        m = this.colorArr,
        n = [];if (!this.defaultAsigned && (a > b && (c = a, a = b, b = c), a < b && (f = this.getColorObj(a), h = this.getColorObj(b), f && h))) {
      for (g = a, d = f.seriesIndex, e = h.seriesIndex; d <= e; d += 1) j = (0, _lib.extend2)({}, m[d]), j.minvalue !== g && (j.minvalue = g), n.push(j), k = j, g = j.maxvalue;k && (k.maxvalue = b);
    }return n;
  }
}exports.default = ColorBucket;
},{"../lib/lib":23,"./strings-lib":199,"../../core/component-interface":65}],171:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    COMMA_STR = ',',
    getColorBetween = (a, b, c) => {
  var d,
      e,
      f = Math.round,
      g = a.value,
      h = a.code,
      i = (0, _libGraphics.HEXtoRGB)(h),
      j = b.value,
      k = b.code,
      l = (0, _libGraphics.HEXtoRGB)(k);return d = j - g, e = [f(i[0] + (l[0] - i[0]) / d * (c - g)), f(i[1] + (l[1] - i[1]) / d * (c - g)), f(i[2] + (l[2] - i[2]) / d * (c - g))], (0, _libGraphics.RGBtoHex)(e);
};class GradientColorRange extends _componentInterface2.default {
  constructor() {
    super(), this.colorRange = {}, this.valueRatio = {}, this.data = {}, this.mapByPercent = void 0;
  }getType() {
    return 'colorComponent';
  }getName() {
    return 'gradientColorRange';
  }configure(a) {
    if (!a) return;let b,
        c,
        d,
        e = this;for (e.data = a, e.appender = '', d = e.colorRange = a.colorRange.sort(function (a, b) {
      return a.value - b.value;
    }), e.valueRatio = UNDEF, e.values = [], (b = 0, c = d.length); b < c; b++) e.values.push(d[b].value);
  }getValueRatio() {
    var a,
        b,
        c,
        d = this.colorRange,
        e = d.length,
        f = this.valueRatio,
        g = d[e - 1].value,
        h = d[0].value,
        i = 0;if (f) return f;for (f = this.valueRatio = [], b = 0; b < e; b++) a = d[b], c = (a.value - h) / (g - h), f.push(100 * (c - i)), i = c;return f;
  }getCumulativeValueRatio() {
    var a,
        b,
        c = this.colorRange,
        d = c.length,
        e = c[0].value,
        f = c[d - 1].value,
        g = [];for (b = 0; b < d; b++) a = c[b], g.push(100 * ((a.value - e) / (f - e)));return g;
  }getBoxFill(a) {
    var b,
        c,
        d,
        e,
        f = this.colorRange,
        g = f.length,
        h = [];for (e = a ? 90 : 0, c = 0; c < g; c++) b = f[c], h.push(b.code);return d = { FCcolor: { alpha: '100,100,100', angle: e, color: h.join(COMMA_STR), ratio: this.getValueRatio().join(COMMA_STR) } }, (0, _lib.toRaphaelColor)(d);
  }getColorByValue(a) {
    var b,
        c,
        d,
        e,
        f = this.values,
        g = this.colorRange;if (a !== UNDEF && null !== a) {
      for (c = 0, b = f.length; c < b; c++) if (a === f[c]) {
        e = g[c].code;break;
      } else if (!c && a < f[c]) {
        d = !0;break;
      } else if (c === b - 1 && a > f[c]) {
        d = !0;break;
      } else if (a > f[c] && a < f[c + 1]) {
        e = getColorBetween(g[c], g[c + 1], a);break;
      }return d ? void 0 : e;
    }
  }
}exports.default = GradientColorRange;
},{"../../core/component-interface":65,"../lib/lib":23,"../lib/lib-graphics":24}],140:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentInterface = require('../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _colorBucket = require('./color-bucket');

var _colorBucket2 = _interopRequireDefault(_colorBucket);

var _gradientColorRange = require('./gradient-color-range');

var _gradientColorRange2 = _interopRequireDefault(_gradientColorRange);

var _lib = require('../lib/lib');

var _libGraphics = require('../lib/lib-graphics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOppositeColor(a) {
  return (0, _libGraphics.getLightColor)(a, 1);
}function getValidHexColor(a) {
  return (0, _libGraphics.getValidColor)(a || DEF_COLOR) || DEF_COLOR;
}let UNDEF,
    TRACKER_FILL = 'rgba(192,192,192,' + (_lib.isIE ? .002 : 1e-6) + ')',
    PERCENT_STR = '%',
    DEF_COLOR = '#000000',
    legendManager = function () {
  function a(a) {
    var c,
        d,
        e,
        f = b.getFromEnv('number-formatter');for (c = 0, d = a.length; c < d; c++) (e = a[c].maxvalue, !!e) && (a[c].maxvalue = f.getCleanValue(e));
  }var b,
      c = {};return c.legendCarpetConf = { spreadFactor: .85, allowDrag: !1, captionAlignment: 'center', padding: { v: 3, h: 3 }, style: { fill: '#e4d9c1', stroke: '#c4b89d' } }, c.legendCaptionConf = { spreadFactor: .2, padding: { v: 2, h: 2 }, style: { fill: '#786B50', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'bold', fontStyle: 'normal' }, bound: { style: { stroke: 'none' } } }, c.legendBodyConf = { spreadFactor: .8, padding: { v: 2, h: 2 }, bound: { style: { stroke: 'none' } } }, c.legendAxisConf = { legendAxisHeight: 11, spreadFactor: .4, padding: { v: 1, h: 1 }, style: { stroke: 'none', "stroke-opacity": 0, "stroke-width": 1 }, line: { grooveLength: 3, offset: 8, style: { stroke: 'rgba(255, 255, 255, 0.65)', "stroke-width": 1.5 } }, shadow: { style: { stroke: 'none', fill: (0, _lib.toRaphaelColor)({ FCcolor: { alpha: '25,0,0', angle: 360, color: '000000,FFFFFF,FFFFFF', ratio: '0,30,40' } }) } }, bound: { style: { stroke: 'none' } } }, c.sliderGroupConf = { showTooltip: 1, outerCircle: { rFactor: 1.4, style: { fill: TRACKER_FILL, stroke: '#757575', "stroke-width": 3 } }, innerCircle: { rFactor: .65, style: { fill: TRACKER_FILL, stroke: '#FFFFFF' } } }, c.axisTextItemConf = { spreadFactor: .3, padding: { v: 1, h: 1 }, style: { fill: '#786B50', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal', fontStyle: 'normal' } }, { init: function (a) {
      b = a.chart;
    }, legacyDataParser: function (c, d) {
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
          q = Math.max,
          r = Math.min,
          s = {},
          t = b.getFromEnv('number-formatter'),
          u = b.getFromEnv('dataSource'),
          v = u.dataset,
          w = u.data;if (d = d || {}, !c) return !1;for ('maps' === b.defaultDatasetType && (d.min === UNDEF || d.max === UNDEF) ? (d = { min: 1 / 0, max: -Infinity }, w && w.forEach(a => {
        d.min = r(d.min, (0, _lib.pluckNumber)(a.value, d.min)), d.max = q(d.max, (0, _lib.pluckNumber)(a.value, d.min));
      })) : 'HeatMap' === b.getName() && (d.min === UNDEF || d.max === UNDEF) && (d = { min: 1 / 0, max: -Infinity }, v.forEach(a => {
        a.data && a.data.forEach(a => {
          d.min = r(d.min, (0, _lib.pluckNumber)(a.value, d.min)), d.max = q(d.max, (0, _lib.pluckNumber)(a.value, d.max));
        });
      })), s.mapByPercent = o = !!(0, _lib.pluckNumber)(c.mapbypercent, 0), e = c.color || [], c.minvalue === UNDEF && (c.minvalue = d.min === UNDEF ? 0 : o ? 0 : d.min), c.maxvalue === UNDEF && (c.maxvalue = d.max === UNDEF ? 100 : o ? 100 : d.max), (c.maxvalue === c.minvalue || d.min === 1 / 0 || d.max === -Infinity) && (c.minvalue = 0, c.maxvalue = 100), p = !1, (i = 0, k = e.length); i < k; i++) if (e[i].maxvalue) {
        p = !0;break;
      }for (p || (e = []), g = c.code, l = s.colorRange = [], s.gradient = !!(0, _lib.pluckNumber)(c.gradient, 1), e.length ? g = getValidHexColor(g) : (g ? (h = getValidHexColor(g), g = getValidHexColor()) : (g = getValidHexColor(), h = getOppositeColor(g)), e.push({ code: h, maxvalue: c.maxvalue, label: UNDEF })), a(e), e = e.sort(function (a, b) {
        return a.maxvalue - b.maxvalue;
      }), m = n = c.minvalue && t.getCleanValue(c.minvalue), n = (m !== UNDEF || null !== m) && (o ? m + PERCENT_STR : t.legendValue(m)), l.push({ code: (0, _lib.dehashify)(g), value: m, displayValue: n, label: c.startlabel }), (i = 0, k = e.length); i < k; i++) (f = e[i], j = getValidHexColor(f.code || f.color), m = n = f.maxvalue, !isNaN(parseInt(m, 10))) && (n = (m !== UNDEF || null !== m) && (o ? m + PERCENT_STR : t.legendValue(m)), l.push({ code: (0, _lib.dehashify)(j), value: m, displayValue: n, label: f.label || f.displayvalue }));return l[l.length - 1].label = c.endlabel || f.label, s;
    }, getDefaultConf: function (a) {
      return c[a];
    } };
}();class ColorRange extends _componentInterface2.default {
  constructor() {
    super(), this.datasource = {}, this.config.legendItemIds = [];
  }configure() {
    let a,
        b,
        c,
        d = this,
        e = this.getFromEnv('chart'),
        f = 'maps' === e.defaultDatasetType,
        g = 'TreeMap' === e.getName(),
        h = this.getFromEnv('dataSource').chart.mapbycategory,
        i = e.getFromEnv('number-formatter'),
        j = e.config.showLegend,
        k = e.getChildren('colorRange') && e.getChildren('colorRange')[0];e.addToEnv('colorManager', d), d.datasource = e.getFromEnv('dataSource'), a = d.datasource.colorrange, k && k.remove({ instant: !0 }), j || (d.config.legendItemIds = []), b = f ? a.gradient && +a.gradient ? 'gradient' : a.color ? 'icon' : 'none' : g ? 'gradient' : a.gradient && '0' != a.gradient && !+h ? 'gradient' : 'icon';'gradient' === b ? (legendManager.init({ chart: e }), c = legendManager.legacyDataParser(a), (0, _lib.componentFactory)(e, _gradientColorRange2.default, 'colorRange', 1, [c]), k = e.getChildren('colorRange')[0], e.addToEnv('colorRange', k), c || (k._dontPlot = !0), d.config.legendItemIds = [], d._configureGradientLegend(k)) : 'icon' === b ? ((0, _lib.componentFactory)(e, _colorBucket2.default, 'colorRange', 1, [{ colorRange: a, sortLegend: 0, mapByCategory: (0, _lib.pluckNumber)(h, 0), defaultColor: 'cccccc', numberFormatter: i }]), e.addToEnv('colorRange', e.getChildren('colorRange')[0]), j && d._addLegendItems()) : 'none' === b ? (e.deleteFromEnv('colorManager'), d.config.legendItemIds = []) : void 0;
  }_configureGradientLegend(a) {
    let b = this,
        c = b.getFromEnv('chart'),
        d = c.getFromEnv('gLegend');d && (d.setColorRange(a), b.addExtEventListener('rangeUpdated', function (a, c) {
      b.fireEvent('legendUpdate', { "original-event": a, maxMinArray: c, component: 'gradientlegend' });
    }, d));
  }_addLegendItems() {
    let a,
        b,
        c,
        d,
        e,
        f = this,
        g = f.config,
        h = f.getFromEnv('chart'),
        j = h.getChildren('legend')[0],
        k = h.getFromEnv('colorRange'),
        l = k.colorArr,
        m = l.length;for (d = 0; d < m; d++) e = { label: (0, _lib.pluck)(l[d].label, l[d].displayvalue), datasetObj: l[d], index: d }, b = (0, _libGraphics.getLightColor)(l[d].code, 40), a = { FCcolor: { color: l[d].code + ',' + l[d].code + ',' + b, ratio: '0,70,30', angle: 270, alpha: '100,100,100' } }, c = j.getItem(g.legendItemIds[d]), c || (g.legendItemIds.push(j.createItem(f)), c = j.getItem(g.legendItemIds[d]), c.addEventListener('click', c.itemClickFn)), c.removeLegendState('hidden'), l[d].legendItemId = c && c.getId(), c.configure(e), c.setStateCosmetics('default', { symbol: { fill: (0, _lib.toRaphaelColor)(a), rawFillColor: l[d].code } });for (d = m; d < g.legendItemIds.length; d++) j.disposeItem(g.legendItemIds[d]);g.legendItemIds.splice(m);
  }legendInteractivity(a) {
    let b = this,
        c = b.getFromEnv('colorRange').colorArr[a.config.index];b.fireEvent('legendUpdate', { legendItem: a, colorObj: c, component: 'legend' });
  }getColor(a) {
    let b = this,
        c = b.datasource.colorrange,
        d = b.datasource.chart.mapbycategory;return !+d && +c.gradient ? { code: b.getColorByValue(a) } : b.getColorObj(a);
  }getValueRatio() {
    return this.getFromEnv('colorRange').getValueRatio();
  }getCumulativeValueRatio() {
    return this.getFromEnv('colorRange').getCumulativeValueRatio();
  }getBoxFill(a) {
    return this.getFromEnv('colorRange').getBoxFill(a);
  }getColorByValue(a) {
    return this.getFromEnv('colorRange').getColorByValue(a);
  }getColorObj(a) {
    return this.getFromEnv('colorRange').getColorObj(a);
  }
}exports.default = ColorRange;
},{"../../core/component-interface":65,"./color-bucket":170,"./gradient-color-range":171,"../lib/lib":23,"../lib/lib-graphics":24}],122:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  _createColorRangeManager(a);
};

var _colorrange = require('../color-utils/colorrange');

var _colorrange2 = _interopRequireDefault(_colorrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createColorRangeManager(a) {
  let b = a.getChildren('colorManager');return a.getFromEnv('dataSource').colorrange ? b ? (a.addToEnv('colorManager', b[0]), void b[0].configure()) : void (b = new _colorrange2.default(), a.attachChild(b, 'colorManager'), a.addToEnv('colorManager', b), b.configure()) : (b && (b[0].config.legendItemIds = []), void a.deleteFromEnv('colorManager'));
}
},{"../color-utils/colorrange":140}],141:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../../lib/lib');

var _libGraphics = require('../../lib/lib-graphics');

var _componentInterface = require('../../../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    legendManager,
    toolTipController,
    gLegendRef,
    compositionKeys = {},
    TRACKER_FILL = 'rgba(192,192,192,' + (_lib.isIE ? .002 : 1e-6) + ')',
    FORMER_SLIDER_INDEX = !1,
    LATER_SLIDER_INDEX = !0,
    PERCENT_STR = '%',
    COMMA_STR = ',',
    DEF_COLOR = '#000000',
    hasOwnProp = {}.hasOwnProperty,
    M = 'M',
    L = 'L',
    doc = window.document,
    hasTouch = doc.documentElement.ontouchstart !== void 0;function merge(e, t) {
  return function e(t, o) {
    var n, i;for (i in t) hasOwnProp.call(t, i) && (n = t[i], o[i] === UNDEF ? o[i] = n : 'object' == typeof n && null !== n && e(n, o[i]));
  }(e, t), t;
}function getValidHexColor(e) {
  return (0, _libGraphics.getValidColor)(e || DEF_COLOR) || DEF_COLOR;
}function getOppositeColor(e) {
  return (0, _libGraphics.getLightColor)(e, 1);
}function normalizeFontSizeAppend(e) {
  var t,
      o = e.fontSize + '';return o ? (t = o.replace(/(\d+)(px)*/, '$1px'), e.fontSize = t, e) : e;
}function isInvalid(e) {
  return !!(e === UNDEF || 'undefined' == typeof e || null === e || isNaN(e));
}compositionKeys.CAPTION = 'CAPTION', compositionKeys.LEGEND_BODY = 'LEGEND_BODY', compositionKeys.AXIS_LABEL = 'LEGEND_LABEL', compositionKeys.LEGEND_AXIS = 'LEGEND_AXIS', compositionKeys.RANGE = 'RANGE', compositionKeys.AXIS_VALUE = 'AXIS_VALUE', legendManager = function () {
  function e(e) {
    var o,
        n,
        i,
        a = t.getFromEnv('number-formatter');for (o = 0, n = e.length; o < n; o++) (i = e[o].maxvalue, !!i) && (e[o].maxvalue = a.getCleanValue(i));
  }var t,
      o = {};return o.legendCarpetConf = { spreadFactor: .85, allowDrag: !1, captionAlignment: 'center', padding: { v: 3, h: 3 }, style: { fill: '#e4d9c1', stroke: '#c4b89d' } }, o.legendCaptionConf = { spreadFactor: .2, padding: { v: 2, h: 2 }, style: { fill: '#786B50', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'bold', fontStyle: 'normal' }, bound: { style: { stroke: 'none' } } }, o.legendBodyConf = { spreadFactor: .8, padding: { v: 2, h: 2 }, bound: { style: { stroke: 'none' } } }, o.legendAxisConf = { legendAxisHeight: 11, spreadFactor: .4, padding: { v: 1, h: 1 }, style: { stroke: 'none', "stroke-opacity": 0, "stroke-width": 1 }, line: { grooveLength: 3, offset: 8, style: { stroke: 'rgba(255, 255, 255, 0.65)', "stroke-width": 1.5 } }, shadow: { style: { stroke: 'none', fill: (0, _lib.toRaphaelColor)({ FCcolor: { alpha: '25,0,0', angle: 360, color: '000000,FFFFFF,FFFFFF', ratio: '0,30,40' } }) } }, bound: { style: { stroke: 'none' } } }, o.sliderGroupConf = { showTooltip: 1, outerCircle: { rFactor: 1.4, style: { fill: TRACKER_FILL, stroke: '#757575', "stroke-width": 3 } }, innerCircle: { rFactor: .65, style: { fill: TRACKER_FILL, stroke: '#FFFFFF' } } }, o.axisTextItemConf = { spreadFactor: .3, padding: { v: 1, h: 1 }, style: { fill: '#786B50', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal', fontStyle: 'normal' } }, { init: function (e) {
      t = e.chart;
    }, legacyDataParser: function (o, n) {
      var i,
          a,
          r,
          l,
          d,
          g,
          s,
          c,
          h,
          p,
          m,
          u,
          f = {},
          x = t.getFromEnv('number-formatter');if (!o) return !1;for (f.mapByPercent = m = !!(0, _lib.pluckNumber)(o.mapbypercent, 0), i = o.color || [], o.minvalue === UNDEF && (o.minvalue = n.min === UNDEF ? 0 : m ? 0 : n.min), o.maxvalue === UNDEF && (o.maxvalue = n.max === UNDEF ? 100 : m ? 100 : n.max), u = !1, (d = 0, s = i.length); d < s; d++) if (i[d].maxvalue) {
        u = !0;break;
      }for (u || (i = []), r = o.code, c = f.colorRange = [], f.gradient = !!(0, _lib.pluckNumber)(o.gradient, 1), i.length ? r = getValidHexColor(r) : (r ? (l = getValidHexColor(r), r = getValidHexColor()) : (r = getValidHexColor(), l = getOppositeColor(r)), i.push({ code: l, maxvalue: o.maxvalue, label: UNDEF })), e(i), i = i.sort(function (e, t) {
        return e.maxvalue - t.maxvalue;
      }), h = p = o.minvalue && x.getCleanValue(o.minvalue), p = (h !== UNDEF || null !== h) && (m ? h + PERCENT_STR : x.legendValue(h)), c.push({ code: (0, _lib.dehashify)(r), value: h, displayValue: p, label: o.startlabel }), (d = 0, s = i.length); d < s; d++) (a = i[d], g = getValidHexColor(a.code || a.color), h = p = a.maxvalue, !isNaN(parseInt(h, 10))) && (p = (h !== UNDEF || null !== h) && (m ? h + PERCENT_STR : x.legendValue(h)), c.push({ code: (0, _lib.dehashify)(g), value: h, displayValue: p, label: a.label || a.displayvalue }));return c[c.length - 1].label = o.endlabel || a.label, f;
    }, getDefaultConf: function (e) {
      return o[e];
    } };
}();class GLegend extends _componentInterface2.default {
  getType() {
    return 'gradientLegend';
  }getName() {
    return 'gLegend';
  }constructor() {
    super(), gLegendRef = this, this.enabled = !1, this.drawOptions = {}, this.components = {};
  }setColorRange(e) {
    let t = this.drawOptions.colorRange = e;t && t._preparationGoneWrong && (this._dontPlot = !0);
  }configureAttributes() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s = this,
        c = s.getFromEnv('chart'),
        h = s.getFromEnv('dataSource').chart,
        p = s.conf = {},
        m = h.outcnvbasefont,
        u = h.outcnvbasefontsize,
        f = h.outcnvbasefontcolor,
        x = c.config.dataLabelStyle;legendManager.init({ chart: c }), s.data = s.getFromEnv('dataSource').colorrange;s._dontPlot || (s.drawOptions = { smartLabel: s.getFromEnv('smartLabel'), gLegend: s }, s._dontPlot = !1, s._recalculateLogicalSpace = !0, toolTipController = s.getFromEnv('toolTipController'), p.caption = (0, _lib.pluck)(h.legendcaption), p.legendPosition = (0, _lib.pluck)(h.legendposition, 'bottom').toLowerCase(), p.showLegend = (0, _lib.pluckNumber)(h.showlegend, 1), p.interactiveLegend = (0, _lib.pluckNumber)(h.interactivelegend, 1), p.showLegendLabels = (0, _lib.pluckNumber)(h.showlegendlabels, 1), e = h.legenditemfontcolor || f, t = h.legenditemfont || m, o = h.legenditemfontsize || u, n = (0, _lib.pluckNumber)(h.legenditemfontbold, 0), i = h.legendcaptionfontcolor || f, a = h.legendcaptionfont || m, r = h.legendcaptionfontsize || u, l = (0, _lib.pluckNumber)(h.legendcaptionfontbold, 1), d = h.legendaxisbordercolor ? (0, _lib.hashify)((0, _lib.dehashify)(h.legendaxisbordercolor)) : UNDEF, g = d ? (0, _lib.pluckNumber)(h.legendaxisborderalpha, 100) / 100 : UNDEF, p.axisTextItemConf = { style: { fill: e ? (0, _libGraphics.convertColor)((0, _lib.pluck)(e)) : x.color, fontFamily: t ? (0, _lib.pluck)(t) : x.fontFamily, fontSize: o ? (0, _lib.pluckNumber)(o) : x.fontSize.match(/\d+/)[0], fontWeight: n ? 'bold' : x.fontWeight } }, p.legendCaptionConf = { style: { fill: i ? (0, _libGraphics.convertColor)((0, _lib.pluck)(i)) : x.color, fontFamily: a ? (0, _lib.pluck)(a) : x.fontFamily, fontSize: r ? (0, _lib.pluckNumber)(r) : x.fontSize.match(/\d+/)[0], fontWeight: l ? 'bold' : x.fontWeight, fontStyle: 'normal' } }, p.legendAxisConf = { legendAxisHeight: 11, style: { stroke: d, "stroke-opacity": g }, line: { style: { stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.legendscalelinecolor, 'FFF8E9'), (0, _lib.pluckNumber)(h.legendscalelinealpha, 100)), "stroke-width": (0, _lib.pluckNumber)(h.legendscalelinethickness) } } }, p.sliderGroupConf = { showTooltip: (0, _lib.pluckNumber)(h.showtooltip, 1), outerCircle: { rFactor: (0, _lib.pluckNumber)(h.sliderdiameterfactor), style: { stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.legendpointerbordercolor, '757575'), (0, _lib.pluckNumber)(h.legendpointerborderalpha, 100)) } }, innerCircle: { rFactor: (0, _lib.pluckNumber)(h.sliderholediameterfactor), style: { stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.legendpointercolor, 'FFFFFF'), (0, _lib.pluckNumber)(h.legendpointeralpha, 100)) } } }, p.legendCarpetConf = { spreadFactor: (0, _lib.pluckNumber)(h.legendspreadfactor), allowDrag: !!(0, _lib.pluckNumber)(h.legendallowdrag, 0), captionAlignment: (0, _lib.pluck)(h.legendcaptionalignment, 'center'), style: { fill: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.legendbgcolor, 'e4d9c1'), (0, _lib.pluckNumber)(h.legendbgalpha, 100)), stroke: (0, _libGraphics.convertColor)((0, _lib.pluck)(h.legendbordercolor, 'c4b89d'), (0, _lib.pluckNumber)(h.legendborderalpha, 100)), "stroke-width": (0, _lib.pluckNumber)(h.legendborderthickness, 1) } });
  }postConfigureInit() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c,
        h = this,
        p = h.conf;h.elem = {}, p.interactiveLegend ? (i = merge(legendManager.getDefaultConf('sliderGroupConf'), p.sliderGroupConf), this.sGroup ? (n = h.elem.sGroup = this.sGroup, n.configure(i), h.elem.sGroup.gLegend = h) : (this.sGroup = h.elem.sGroup = n = new SliderGroup(i), n.configure(i), h.elem.sGroup.gLegend = h)) : (this.sGroup && this.sGroup.dispose(), this.sGroup && delete this.sGroup), i = merge(legendManager.getDefaultConf('legendCarpetConf'), p.legendCarpetConf), i.legendPosition = p.legendPosition, c = legendManager.getDefaultConf('legendBodyConf'), 'bottom' === p.legendPosition ? (h.drawOptions.refSideKey = 'canvasWidth', h.drawOptions.refOffsetKey = 'canvasLeft', a = merge(legendManager.getDefaultConf('axisTextItemConf'), p.axisTextItemConf), c.legendPosition = 'bottom', s = merge(legendManager.getDefaultConf('legendAxisConf'), p.legendAxisConf), s.legendPosition = 'bottom', a.legendPosition = 'bottom') : (h.drawOptions.refSideKey = 'canvasHeight', h.drawOptions.refOffsetKey = 'canvasTop', a = merge(legendManager.getDefaultConf('axisTextItemConf'), p.axisTextItemConf), c.legendPosition = 'right', s = merge(legendManager.getDefaultConf('legendAxisConf'), p.legendAxisConf), s.legendPosition = 'right', a.legendPosition = 'right'), Object.keys(this.components).length || (this.components.LegendCarpet = new LegendCarpet(), this.components.LegendBody = new LegendBody(), this.components.LegendAxis = new LegendAxis(), this.components.LegendValues = new LegendValues(), p.showLegendLabels && (this.components.LegendLabels = new LegendLabels())), o = this.components.LegendAxis, d = this.components.LegendValues, t = this.components.LegendCarpet, r = this.components.LegendBody, p.showLegendLabels && (l = this.components.LegendLabels), this.components.LegendCarpet.configure(i), this.components.LegendValues.configure(a), this.components.LegendAxis.configure(s), this.components.LegendBody.configure(h.drawOptions.colorRange, c, a), p.showLegendLabels && l.configure(a), p.caption ? (g = merge(legendManager.getDefaultConf('legendCaptionConf'), p.legendCaptionConf), this.componentCaption && Object.keys(this.componentCaption).length ? this.componentCaption.configure(p.caption, g) : (e = this.componentCaption = new LegendCaption(), e.configure(p.caption, g)), t.addCompositions(this.componentCaption, compositionKeys.CAPTION)) : (t.removeCompositions(compositionKeys.CAPTION), this.componentCaption && this.componentCaption.dispose(), delete this.componentCaption), n && o.addCompositions(n, compositionKeys.RANGE), l && r.addCompositions(l, compositionKeys.AXIS_LABEL), r.addCompositions(o, compositionKeys.LEGEND_AXIS), r.addCompositions(d, compositionKeys.AXIS_VALUE), t.addCompositions(r, compositionKeys.LEGEND_BODY), h.elem.gl = new LegendBase(t);
  }getValueRange() {
    var e,
        t,
        o = this,
        n = o.elem && o.elem.sGroup,
        i = n.sliders,
        a = n.extremes;return e = i['false'].currPos, t = a[1] - a[0] + i['true'].currPos, [{ min: n.getValueFormPixel(e), max: n.getValueFormPixel(t) }];
  }_dispose() {
    var e = this;e.elem && e.elem.gl && e.elem.gl.dispose(), e.elem = {}, super._dispose();
  }getCalculatedLogicalSpace() {
    return this._logicalArea;
  }setCalculatedLogicalSpace(e) {
    this._logicalArea = e;
  }getLogicalSpace(e) {
    var t,
        o,
        n,
        i = this,
        a = i.conf,
        r = { height: 0, width: 0 },
        l = i.drawOptions,
        d = i.getFromEnv('chartConfig');return i._recalculateLogicalSpace ? i._dontPlot ? r : (i._recalculateLogicalSpace = !1, i.postConfigureInit(), !a.showLegend) ? r : (o = l.refSideKey, n = l.refOffsetKey, i.drawOptions.refSide = d[o], i.drawOptions.refOffset = d[n], i.drawOptions.maxOtherSide = e || i.drawOptions.maxOtherSide, i.elem.gl && (t = i.elem.gl.getLogicalSpace(i.drawOptions, !0), i.elem.gl && i.setCalculatedLogicalSpace(t)), i.getCalculatedLogicalSpace()) : (o = l.refSideKey, n = l.refOffsetKey, i.drawOptions.refSide = d[o], i.drawOptions.refOffset = d[n], i.drawOptions.maxOtherSide = e || i.drawOptions.maxOtherSide, t = i.elem.gl.getLogicalSpace(i.drawOptions, !0), i.setCalculatedLogicalSpace(t), i.getCalculatedLogicalSpace() || r);
  }resetLegend() {
    var e,
        t = this;e = t.elem && t.elem.sGroup, e && e.reset();
  }allocatePosition() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r = this.getFromEnv('chart'),
        l = r.config,
        d = this,
        g = d.conf || {},
        s = g.legendPosition,
        c = l.canvasLeft,
        h = l.canvasTop,
        p = l.canvasWidth,
        m = l.canvasHeight,
        u = l.marginBottom,
        f = l.marginRight;r.config.gLegendEnabled && (e = this.getCalculatedLogicalSpace(), o = g.width = e.width, n = g.height = e.height, 'bottom' === s ? (t = p - o, i = c + (0 > t ? 0 : t / 2), a = l.height - e.height - u - (l.actionBarHeight || 0)) : (t = m - n, a = h + (0 > t ? 0 : t / 2), i = l.width - e.width - f), g.xPos = i, g.yPos = a);
  }draw() {
    var e = this.getFromEnv('chart'),
        t = e.getFromEnv('dataSource').colorrange,
        o = this,
        n = o.conf || {},
        i = e.hasGradientLegend;!e.config.gLegendEnabled || t && i && o.drawLegendComponent(n.xPos, n.yPos, { parentGroup: e.getContainer('parentgroup'), animationManager: e.getFromEnv('animationManager') });
  }drawLegendComponent(e, t, o) {
    var n,
        i,
        a = this,
        r = a.conf;return a._dontPlot ? void 0 : r.showLegend ? void (a.drawOptions.animationManager = o.animationManager, a.drawOptions.parentGroup = o.parentGroup, a.drawOptions.x = e, a.drawOptions.y = t, a.drawOptions.maxOtherSide = a.drawOptions.maxOtherSide || o.maxOtherSide, i = a.elem.gl.draw(a.drawOptions), n = i.getBBox(), r.xPos = n.x, r.yPos = n.y, r.height = n.height, r.width = n.width, a.enabled = !0) : void (a.enabled = !1);
  }
}class LegendBase {
  constructor(e) {
    this.carpet = e;
  }draw(e) {
    return this.carpet.draw(e);
  }getLogicalSpace(e, t) {
    return this.carpet.getLogicalSpace(e, t);
  }dispose() {
    this.carpet && this.carpet.group && this.carpet.group.remove();
  }
}class LegendCarpet {
  constructor(e) {
    this.conf = e, this._id = 'GL_CARPET', this.compositionsByCategory = {}, this.node = UNDEF, this.group = UNDEF, this._lSpace = UNDEF, this.autoRecalculate = !1, this.groupName = 'fc-gradient-legend', this.moveInstructions = {};
  }configure(e) {
    this.conf = e;
  }getName() {
    return 'LegendCarpet';
  }getType() {
    return 'legend';
  }addCompositions(e, t) {
    this.compositionsByCategory[t] = e;
  }removeCompositions(e) {
    delete this.compositionsByCategory[e];
  }getBoundingBox(e) {
    var t,
        o,
        n = this.conf,
        i = n.spreadFactor,
        a = e.refSide,
        r = e.alignment,
        l = e.refOffset,
        d = e.x,
        g = e.y;return 'bottom' === this.conf.legendPosition ? (t = n.width = a * i, o = e.maxOtherSide, r && (d === UNDEF || null === d) && (d = (l + a) / 2 - t / 2)) : (o = n.height = a * i, t = e.maxOtherSide, r && (g === UNDEF || null === g) && (g = (l + a) / 2 - o / 2)), { width: t, height: o, x: d, y: g };
  }getPostCalcDecisionsH(e, t) {
    var o,
        n = this.conf,
        i = n.padding,
        a = 0;for (o in this.moveInstructions = {}, t) a += t[o].height || 0;e.height = a + 2 * i.v;
  }getLogicalSpace(e, t) {
    var o,
        n,
        a,
        r,
        l,
        i = this._lSpace,
        d = ['CAPTION', 'LEGEND_BODY'],
        g = this.conf,
        s = g.padding,
        c = this.compositionsByCategory,
        h = 0,
        p = {},
        m = 0;if (i && !t) return i.isImpure = !0, i;i = this._lSpace = n = this.getBoundingBox(e), (isInvalid(i.x) || isInvalid(i.y) || isInvalid(i.height) || isInvalid(i.width)) && (this.autoRecalculate = !0), a = merge(n, {}), a.height -= 2 * s.v, a.width -= 2 * s.h, a.x += s.h, a.y += s.v;for (let n = 0; n < d.length; n++) o = c[d[n]], o && (l = merge(a, {}), l.y += h, h = a.height * o.conf.spreadFactor, l.height = h + m, r = o.getLogicalSpace(merge(l, {}), e, t), m = l.height - r.height, p[d[n]] = r, h = r.height);return this.getPostCalcDecisions(n, p), this._lSpace = n, n;
  }setupDragging() {
    var e = this.group,
        t = 0,
        o = 0,
        n = 0,
        i = 0;e.css({ cursor: 'move' }), e.drag(function (a, r) {
      t = a, o = r, e.attr({ transform: 't' + (n + t) + ',' + (i + o) });
    }, function () {
      n += t, i += o;
    }, _lib.stubFN);
  }draw(e) {
    var t,
        o,
        n,
        a,
        r = this.conf,
        i = this,
        l = ['CAPTION', 'LEGEND_BODY'],
        d = this.compositionsByCategory,
        g = e.animationManager,
        s = e.parentGroup;this.getLogicalSpace(e, this.autoRecalculate), a = this._lSpace, this.group = t = g.setAnimation({ el: this.group || 'group', attr: { name: i.groupName }, component: gLegendRef, container: s, label: 'carpetGroup' }), this.node = g.setAnimation({ el: this.node || 'rect', attr: a, css: r.style, component: gLegendRef, container: t, label: 'rect' });for (let s = 0; s < l.length; s++) n = d[l[s]], n && n.draw(r.captionAlignment, a, { animationManager: g, colorRange: e.colorRange, numberFormatter: e.numberFormatter, parentLayer: t, smartLabel: e.smartLabel, moveInstructions: this.moveInstructions[o], gLegend: e.gLegend });return r.allowDrag && this.setupDragging(), this.node;
  }getPostCalcDecisions(e, t) {
    return 'bottom' === this.conf.legendPosition ? this.getPostCalcDecisionsH(e, t) : this.getPostCalcDecisionsV(e, t);
  }getPostCalcDecisionsV(e, t) {
    var o,
        n,
        i,
        a = this.conf,
        r = a.padding,
        l = Number.NEGATIVE_INFINITY,
        d = this.moveInstructions;for (n in this.getPostCalcDecisionsH(e, t), t) o = t[n].width, l = l < o ? o : l;for (n in e.width = l + 2 * r.h, t) o = t[n].width, i = l - o, i && (d[n] = 't' + i / 2 + ',0');
  }
}class LegendCaption {
  constructor(e, t) {
    this.rawText = e, this.conf = t, this._id = 'GL_CAPTION', this.node = UNDEF, this.bound = UNDEF, this._lSpace = UNDEF, this.LegendCaption = {}, this.LegendCaption.LEFT = { x: function (e, t) {
        return t.x + e.width / 2 + 2;
      } }, this.LegendCaption.RIGHT = { x: function (e, t) {
        return t.x + t.width - e.width / 2 - 2;
      } }, this.LegendCaption.CENTER = { x: function () {
        let e = arguments[1];return e.x + e.width / 2;
      } };
  }configure(e, t) {
    this.rawText = e, this.conf = t;
  }getName() {
    return 'LegendCaption';
  }getType() {
    return 'caption';
  }getLogicalSpace(e, t, o) {
    var n,
        i,
        a,
        r,
        l = this.conf,
        d = l.padding,
        g = this._lSpace,
        s = this.rawText,
        c = t.gLegend.getFromEnv('chartConfig');return g && !o ? (g.isImpure = !0, g) : (g = this._lSpace = { bound: { height: 0, width: 0 }, node: { logicArea: UNDEF, smartText: UNDEF } }, n = t.smartLabel, !s) ? g.bound : (i = merge(e, {}), i.height -= 2 * d.v, i.width -= 2 * d.h, i.x += d.h, i.y += d.v, n.useEllipsesOnOverflow(c.useEllipsesWhenOverflow), r = merge(this.conf.style, {}), normalizeFontSizeAppend(r), n.setStyle(this._metaStyle = r), a = n.getSmartText(s, i.width, i.height), i.height = a.height, i.width = a.width, e.height = a.height + 2 * d.v, e.width = a.width + 2 * d.h, g.node.smartText = a, g.node.logicArea = i, g.bound = e, e);
  }draw() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c = this.conf,
        h = c.bound || {};return 3 <= arguments.length ? (r = arguments[0], l = arguments[1], d = arguments[2]) : 2 <= arguments.length && (r = arguments[0], d = arguments[1]), e = d.parentLayer, s = d.animationManager, this.group = t = s.setAnimation({ el: this.group || 'group', attr: { name: 'legend-caption' }, css: c.style, component: gLegendRef, container: e }), this.getLogicalSpace(l, d), i = this._lSpace, g = i.node, n = i.bound, this.bound = o = s.setAnimation({ el: this.bound || 'rect', attr: n, css: h.style, container: t, component: gLegendRef }), a = 'string' == typeof r ? this.LegendCaption[r.toUpperCase()].x(g.smartText, l || g.logicArea) : r, this.node = s.setAnimation({ el: this.node || 'text', attr: { text: g.smartText.text, x: a, y: g.logicArea.y + g.smartText.height / 2, lineHeight: this._metaStyle.lineHeight, fill: c.style.fill }, container: t, component: gLegendRef }), { group: t, bound: o, node: this.node };
  }dispose() {
    this.group.remove(), this.bound.remove(), this.node.remove();
  }
}class LegendBody {
  constructor(e, t, o) {
    this.colorRange = e, this.conf = t, this.childTextConf = o, this._id = 'GL_BODY', this.bound = UNDEF, this.group = UNDEF, this.compositionsByCategory = {}, this._lSpace = UNDEF, this.SC_STACK = [compositionKeys.AXIS_LABEL, compositionKeys.LEGEND_AXIS, compositionKeys.AXIS_VALUE], this.DARW_STACK = [compositionKeys.AXIS_VALUE, compositionKeys.LEGEND_AXIS, compositionKeys.AXIS_LABEL];
  }configure(e, t, o) {
    this.colorRange = e, this.conf = t, this.childTextConf = o, this.compositionsByCategory = {};
  }getName() {
    return 'LegendBody';
  }getType() {
    return 'legend';
  }addCompositions(e, t) {
    this.compositionsByCategory[t] = e;
  }getSpaceTaken(e) {
    return 'bottom' === this.conf.legendPosition ? e.height : e.width;
  }getLogicalSpace(e, t, o) {
    var n,
        i,
        a,
        r,
        l,
        d,
        g,
        s = this._lSpace,
        c = this.conf,
        h = c.padding,
        p = this.compositionsByCategory,
        m = 0;if (s && !o) return s.isImpure = !0, s;for (s = this._lSpace = { bound: { height: 0, width: 0 }, node: { logicArea: UNDEF } }, r = merge(e, {}), r.height -= 2 * h.v, r.width -= 2 * h.h, r.x += h.h, r.y += h.v, l = this.getCompositionPlotAreaFor(r), t.colorRange = this.colorRange, (d = 0, g = this.SC_STACK.length); d < g; d++) (n = p[this.SC_STACK[d]]) && (i = l(a, n.conf.spreadFactor), a = n.getLogicalSpace(merge(i, {}), t, o), m += this.getSpaceTaken(a));return this.updateEffectivePlotArea(e, r, m), s.node.logicArea = r, s.bound = e, e;
  }draw() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s = this.childTextConf,
        c = this.conf,
        h = c.bound.style || {},
        p = this.compositionsByCategory;for (3 <= arguments.length ? (a = arguments[1], l = arguments[2]) : 2 <= arguments.length && (l = arguments[1]), t = l.parentLayer, e = l.animationManager, this.getLogicalSpace(a, l), r = this._lSpace, this.group = i = e.setAnimation({ el: this.group || 'group', attr: { name: 'legend-body', transform: 't0,0' }, css: s.style, container: t, component: gLegendRef }), this.bound = o = e.setAnimation({ el: this.bound || 'rect', attr: r.bound, css: h, container: i, component: gLegendRef }), l.colorRange = this.colorRange, l.parentLayer = i, (d = 0, g = this.DARW_STACK.length); d < g; d++) (n = p[this.DARW_STACK[d]]) && n.draw(l);return l.moveInstructions && i.attr({ transform: l.moveInstructions }), { bound: o, group: i };
  }getCompositionPlotAreaFor(e) {
    var t,
        o = 'bottom' === this.conf.legendPosition;return t = merge(e, {}), function (n, i) {
      return n = n || {}, o ? (t.y += n.height || 0, t.height = e.height * i) : (t.x += n.width || 0, t.width = e.width * i), t;
    };
  }updateEffectivePlotArea(e, t, o) {
    var n = this.conf,
        i = n.padding;'bottom' === this.conf.legendPosition ? (t.height = o, e.height = o + 2 * i.v) : (t.width = o, e.width = o + 2 * i.h);
  }
}class LegendLabels {
  constructor(e) {
    this.conf = e, this.node = [], this._id = 'GL_LABELS';
  }configure(e) {
    this.conf = e;
  }getType() {
    return 'label';
  }getName() {
    return 'LegendLabel';
  }getEffectivePlotArea(e) {
    var t = this.conf,
        o = t.padding;return e.height -= 2 * o.v, e.width -= 2 * o.h, e.x += o.h, e.y += o.v, e;
  }getLogicalSpace(e, t, o) {
    var n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c,
        h,
        p,
        m,
        u,
        f,
        x,
        y,
        w,
        C,
        L,
        S,
        b,
        v,
        _,
        F = Math.max,
        A = 'bottom' === this.conf.legendPosition,
        E = this._lSpace,
        P = this.conf,
        I = P.padding,
        R = [],
        O = t.gLegend.getFromEnv('chartConfig'),
        T = [];if (E && !o) return E.isImpure = !0, E;for (n = t.colorRange, i = t.smartLabel, h = n.getCumulativeValueRatio(), a = n.colorRange, E = this._lSpace = { bound: { height: 0, width: 0 }, node: { logicArea: UNDEF, smartTexts: [] } }, u = E.node.smartTexts, s = merge(e, {}), x = this.getEffectivePlotArea(s), _ = A ? x.width : x.height, i.useEllipsesOnOverflow(O.useEllipsesWhenOverflow), v = merge(P.style, {}), normalizeFontSizeAppend(this._metaStyle = v), i.setStyle(v), y = i.getSmartText('W'), (r = 0, l = a.length); r < l; r++) {
      if (c = a[r].label, !c) {
        u[r] = UNDEF;continue;
      }T.push({ oriIndex: r, label: c });
    }if (l = T.length, 0 === l) return { height: 0, width: 0 };for (p = 1 < l ? (h[T[l - 1].oriIndex] - h[T[0].oriIndex]) / 2 * _ / 100 : F(h[T[0].oriIndex], 100 - h[T[0].oriIndex]) / 2 * _ / 100, m = p, A ? (S = i.getSmartText(T[0].label, m, x.height), S.x = h[T[0].oriIndex] * x.width / 100, d = S.x + S.width) : (S = i.getSmartText(T[0].label, m, x.width), S.y = h[T[0].oriIndex] * x.height / 100, d = S.y + S.width), R.push(S.height), u[T[0].oriIndex] = S, A ? (S = i.getSmartText(T[l - 1].label, m, x.height), S.x = h[T[l - 1].oriIndex] * x.width / 100, g = S.x - S.width) : (S = i.getSmartText(T[l - 1].label, m, x.width), S.y = h[T[l - 1].oriIndex] * x.height / 100, g = S.y - S.width), R.push(S.height), u[T[l - 1].oriIndex] = S, L = d, r = 1; r < l - 1; r++) c = T[r].label, b = T[r].oriIndex, S = UNDEF, w = r + 1 === l - 1 ? g : h[T[r + 1].oriIndex] * _ / 100, C = h[T[r].oriIndex] * _ / 100, p = Math.min(C - L, w - C), p > 2 * y.width && (A ? (S = i.getSmartText(c, p, x.height), S.x = h[b] * x.width / 100) : (S = i.getSmartText(c, p, x.width), S.y = h[b] * x.height / 100), L = p, R.push(S.height)), u[T[r].oriIndex] = S;return f = F.apply(Math, R), A ? (x.height = f, e.height = f + 2 * I.v) : (x.width = f, e.width = f + 2 * I.v), E.node.logicArea = x, E.bound = e, e;
  }draw() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c,
        h = 'bottom' === this.conf.legendPosition,
        p = this.conf,
        m = p.bound && p.bound.style || { stroke: 'none' },
        u = {};2 <= arguments.length && arguments[1] ? (n = arguments[0], r = arguments[1]) : 1 <= arguments.length && (r = arguments[0]), c = r.animationManager, e = r.parentLayer, this.getLogicalSpace(n, r), a = this._lSpace, d = a.node.logicArea, g = a.node.smartTexts, this.group = o = c.setAnimation({ el: this.group || 'group', attr: { name: 'legend-labels' }, container: e, component: gLegendRef }), this.bound = t = c.setAnimation({ el: this.bound || 'rect', attr: a.bound, css: m, container: o, component: gLegendRef });for (let e = 0; e < this.node.length; e++) this.node[e].remove();for (this.node = [], l = 0, s = g.length; l < s; l++) (i = g[l], !!i) && (h ? (u.y = d.y + i.height / 2, u.x = l === s - 1 ? d.x + i.x - i.width / 2 : l ? d.x + i.x : d.x + i.x + i.width / 2) : (u.x = d.x + i.height / 2, u.y = l === s - 1 ? d.y + i.y - i.width / 2 : l ? d.y + i.y : d.y + i.y + i.width / 2), this.node.push(c.setAnimation({ el: 'text', attr: { text: i.text, x: u.x, y: u.y, lineHeight: this._metaStyle.lineHeight, fill: p.style.fill, transform: h ? 'R0' : 'R270,' + u.x + ',' + u.y }, container: o, component: gLegendRef })));return { group: o, bound: t, node: this.node };
  }
}class LegendAxis {
  constructor(e) {
    this.conf = e, this._id = 'FL_AXIS', this.node = UNDEF, this.group = UNDEF, this.shadow = UNDEF, this.markerLine = UNDEF, this.compositionsByCategory = {};
  }configure(e) {
    this.conf = e;
  }getName() {
    return 'LegendAxis';
  }getType() {
    return 'axis';
  }addCompositions(e, t) {
    this.compositionsByCategory[t] = e;
  }getLogicalSpace() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l = 'bottom' === this.conf.legendPosition,
        d = arguments[0],
        g = arguments[2],
        s = this._lSpace,
        c = this.conf,
        h = c.padding,
        p = c.legendAxisHeight,
        m = this.compositionsByCategory,
        u = 0;return s && !g ? (s.isImpure = !0, s) : (s = this._lSpace = { bound: { height: 0, width: 0 }, node: { logicArea: UNDEF } }, i = merge(d, {}), i.height -= 2 * h.v, i.width -= 2 * h.h, i.x += h.h, i.y += h.v, e = p / 2 + c.line.offset, t = p / 2, n = m[compositionKeys.RANGE], n && (a = n.sliders['false'], r = a.conf.outerCircle.rFactor * p, t += u = Math.max(r / 2 - p / 2, 0)), l ? (i.y += u, i.height = o = t + e + u, d.height = o + 2 * h.v) : (i.x += u, i.width = o = t + e + u, d.width = o + 2 * h.v), s.node.logicArea = i, s.bound = d, d);
  }getDrawableAxisArea(e) {
    var t = this.conf,
        o = 'bottom' === this.conf.legendPosition,
        n = e.x,
        i = e.y,
        a = o ? e.width : t.legendAxisHeight,
        l = o ? t.legendAxisHeight : e.height,
        d = t.legendAxisHeight / 2;return { x: n, y: i, width: a, height: l, r: d };
  }preDrawingRangeParamV(e) {
    var t = e.x + e.width / 2,
        o = e.width;return { x: t, calculationBase: o, rangeStart: e.y, rangeEnd: e.y + e.height, prop: 'x' };
  }preDrawingRangeParamH(e) {
    var t = e.y + e.height / 2,
        o = e.height;return { y: t, calculationBase: o, rangeStart: e.x, rangeEnd: e.x + e.width, prop: 'y' };
  }preDrawingRangeParam(e) {
    return 'bottom' === this.conf.legendPosition ? this.preDrawingRangeParamH(e) : this.preDrawingRangeParamV(e);
  }getScaleMarkerPathStrH(e, t) {
    var o,
        n,
        i,
        a,
        r,
        l = merge(e, {}),
        d = this.conf,
        g = d.line,
        s = '',
        c = '';for (l.x += l.r, l.width -= 2 * l.r, r = l.y + l.height, (o = 0, n = t.length); o < n; o++) i = t[o], a = l.x + i * l.width / 100, s += M + a + COMMA_STR + (r - g.grooveLength) + L + a + COMMA_STR + (r + g.offset);return c += M + l.x + COMMA_STR + (r + g.offset) + L + (l.x + l.width) + COMMA_STR + (r + g.offset), s + c;
  }getColorGradientH(e) {
    return { axis: e.getBoxFill(), shadow: (0, _lib.toRaphaelColor)({ FCcolor: { alpha: '25,0,0', angle: 90, color: '000000,FFFFFF,FFFFFF', ratio: '0,30,40' } }) };
  }draw() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c,
        h,
        p,
        m = this.conf,
        u = m.bound || {},
        f = m.line,
        x = u.style || {},
        y = this.compositionsByCategory;for (o in 2 <= arguments.length ? (t = arguments[0], c = arguments[1]) : 1 <= arguments.length && (c = arguments[0]), h = c.animationManager, e = c.parentLayer, n = c.colorRange, i = n.getCumulativeValueRatio(), this.getLogicalSpace(t, c), s = this._lSpace, this.group = r = h.setAnimation({ el: this.group || 'group', attr: { name: 'legend-axis' }, container: e, component: gLegendRef }), this.bound = h.setAnimation({ el: this.bound || 'rect', attr: s.bound, css: x, component: gLegendRef, container: r }), g = this.getDrawableAxisArea(s.node.logicArea), d = this.getColorGradient(n), m.style.fill = d.axis, m.shadow.style.fill = d.shadow, this.node = h.setAnimation({ el: this.node || 'rect', attr: g, css: m.style, container: r, component: gLegendRef }), this.shadow = h.setAnimation({ el: this.shadow || 'rect', attr: g, css: m.shadow.style, container: r, component: gLegendRef }), p = this.getScaleMarkerPathStr(g, i), this.path = h.setAnimation({ el: this.path || 'path', attr: { path: p }, css: f.style, container: r, component: gLegendRef }), y) a = y[o], o === compositionKeys.RANGE ? (l = this.preDrawingRangeParam(g), c[l.prop] = l[l.prop], c.key = l.prop, c.rCalcBase = l.calculationBase, c.parentLayer = r, a.draw(l.rangeStart, l.rangeEnd, c)) : void 0;
  }getScaleMarkerPathStr(e, t) {
    return 'bottom' === this.conf.legendPosition ? this.getScaleMarkerPathStrH(e, t) : this.getScaleMarkerPathStrV(e, t);
  }getColorGradient(e) {
    return 'bottom' === this.conf.legendPosition ? this.getColorGradientH(e) : this.getColorGradientV(e);
  }getScaleMarkerPathStrV(e, t) {
    var o,
        n,
        i,
        a,
        r,
        l = merge(e, {}),
        d = this.conf,
        g = d.line,
        s = '',
        c = '';for (l.y += l.r, l.height -= 2 * l.r, a = l.x + l.width, (o = 0, i = t.length); o < i; o++) n = t[o], r = l.y + n * l.height / 100, s += M + (a - g.grooveLength) + COMMA_STR + r + L + (a + g.offset) + COMMA_STR + r;return c += M + (a + g.offset) + COMMA_STR + l.y + L + (a + g.offset) + COMMA_STR + (l.y + l.height), s + c;
  }getColorGradientV(e) {
    return { axis: e.getBoxFill(!0), shadow: (0, _lib.toRaphaelColor)({ FCcolor: { alpha: '25,0,0', angle: 360, color: '000000,FFFFFF,FFFFFF', ratio: '0,30,40' } }) };
  }
}class Slider {
  constructor(e, t, o) {
    this.conf = t.conf, this.sliderIndex = e, this.rangeGroup = t.sliderGroup, this._id = o, this.node = UNDEF, this.tracker = UNDEF, this.currPos = 0, this.swing = [];
  }configure(e, t, o) {
    this.conf = t.conf, this.sliderIndex = e, this.rangeGroup = t.sliderGroup, this._id = o, this.currPos = 0, this.swing = [];
  }getType() {
    return 'slider';
  }getName() {
    return 'Slider';
  }updateSwingRange(e, t) {
    this.swing[+e] = t;
  }draw(e, t, o, n) {
    var i,
        a,
        r,
        l,
        d,
        g,
        s = Math.ceil,
        c = n.parentLayer,
        h = this,
        p = n.animationManager,
        m = this.conf,
        u = m.outerCircle,
        f = m.innerCircle,
        w = s(u.rFactor * n.rCalcBase / 2),
        C = s(f.rFactor * n.rCalcBase / 2),
        L = w - C,
        S = this.sliderIndex;return m.outerRadius = w, m.innerRadius = C, this._scaleVal = t, f.style['stroke-width'] = L, r = s(u.style['stroke-width'] / 2), C += r, i = this.node = p.setAnimation({ el: this.node || 'group', attr: { name: 'fc-gl-slider', cursor: 'pointer', transform: 't0,0' }, container: c, component: gLegendRef }), 'x' === n.key ? (l = o, d = e, d += S ? -C : +C) : (l = e, d = o, l += S ? -C : +C), this.oCircle = p.setAnimation({ el: this.oCircle || 'circle', attr: { cx: l, cy: d, r: w }, css: u.style, container: i, component: gLegendRef }), this.iCircle = p.setAnimation({ el: this.iCircle || 'circle', attr: { cx: l, cy: d, r: C }, css: f.style, container: i, component: gLegendRef }), g = this.tracker = p.setAnimation({ el: this.tracker || 'circle', attr: { cx: l, cy: d, r: w + 5, fill: TRACKER_FILL, stroke: TRACKER_FILL, cursor: 'pointer' }, container: i, component: gLegendRef }), i.attr({ transform: 'x' === n.key ? 't0,' + h.currPos : 't' + h.currPos + ',' + 0 }), toolTipController.enableToolTip(g, t), this._dragAPI = a = this.getDragAPI('x' === n.key), h.dragHandlerAttached || (g.drag(a.dragging, a.dragStart, a.dragEnd), h.dragHandlerAttached = !0), { translateAscending: w + r };
  }getDragAPI(e) {
    var t,
        o,
        n,
        i,
        a = this,
        r = a.node,
        l = a.sliderIndex,
        g = a.rangeGroup,
        d = a.conf.innerRadius,
        s = d;return { dragging: function (c) {
        var h, p, m, u, f;return c.stopPropagation(), c.preventDefault(), m = e ? c.data[1] : c.data[0], l ? (h = t[0] - t[1] + s, p = 0) : (h = 0, p = t[1] - t[0] - s), f = a.currPos + m, f < h ? m += h - f : f > p && (m -= f - p), r.attr({ transform: e ? 't0,' + (a.currPos + m) : 't' + (a.currPos + m) + ',' + 0 }), o = m, n && clearTimeout(n), n = setTimeout(function () {
          g.updateWhenInRest(a, a.currPos + m);
        }, 100), u = g.updateWhenInMove(a, a.currPos + m), a.tracker.data('__FC_tooltipText', u), hasTouch && toolTipController.config.lastActiveToolip.show(u), i = !0, !0;
      }, dragStart: function (e) {
        e.stopPropagation(), e.preventDefault(), t = a.swing, i = !1, g.dragStarted(a);
      }, dragEnd: function () {
        var e;g.dragCompleted(a, i, a.currPos + o);i && (n && clearTimeout(n), n = setTimeout(function () {
          g.updateWhenInRest(a, a.currPos);
        }, 100), a.currPos += o, e = t[+l] + a.currPos, g.updateRange(a, e));
      } };
  }dispose() {
    this.node.remove(), this.oCircle.remove(), this.iCircle.remove(), this.tracker.remove(), delete this;
  }
}class SliderGroup {
  constructor(e) {
    var t = {};this._id = 'GL_SG1', this.conf = e, t.conf = e, this.extremes = [], this.sliders = {}, this.min = void 0, this.max = void 0, t.sliderGroup = this, this.valueRange = [], this.callbacks = [], this.sliders[FORMER_SLIDER_INDEX] = new Slider(FORMER_SLIDER_INDEX, t, this._id + '_' + 0), this.sliders[LATER_SLIDER_INDEX] = new Slider(LATER_SLIDER_INDEX, t, this._id + '_' + 1);
  }configure(e) {
    var t = {};this.min = void 0, this.max = void 0, this.conf = e, t.conf = e, t.sliderGroup = this, this.sliders[FORMER_SLIDER_INDEX].configure(FORMER_SLIDER_INDEX, t, this._id + '_' + 0), this.sliders[LATER_SLIDER_INDEX].configure(LATER_SLIDER_INDEX, t, this._id + '_' + 1);
  }getType() {
    return 'slider';
  }getName() {
    return 'SliderGroup';
  }initRange(e, t) {
    var o = e.sliderIndex;this.extremes[+o] = t;
  }updateRange(e, t) {
    var o = e.sliderIndex,
        n = this.sliders,
        i = n[!o];i.updateSwingRange(o, t);
  }reset() {
    var e = {};e.conf = this.conf, e.sliderGroup = this, this.min = void 0, this.max = void 0, this.sliders[FORMER_SLIDER_INDEX].configure(FORMER_SLIDER_INDEX, e, this._id + '_' + 0), this.sliders[LATER_SLIDER_INDEX].configure(LATER_SLIDER_INDEX, e, this._id + '_' + 1), this.draw.apply(this, this._drawParams);
  }draw(e, t, o) {
    var n,
        i,
        a,
        r,
        l,
        d,
        g = Math.ceil,
        s = this.sliders,
        c = s[!1],
        h = s[!0],
        p = o.colorRange,
        m = p.colorRange,
        u = p.data.mapByPercent,
        f = o.gLegend.getFromEnv('number-formatter');return this._fcChart = o.gLegend.getFromEnv('chart'), this.getValueFormPixel = function (e, t, o, n) {
      this.getValueFormPixel = function (i) {
        return e + (t - e) / (n - o) * i;
      };
    }, this.updateWhenInMove = function (e, t) {
      this.updateWhenInMove = function (o, n) {
        var i,
            a,
            r = this.extremes,
            l = o.sliderIndex;return i = l ? r[1] - r[0] + n : n, a = this.getValueFormPixel(i), a = t ? parseFloat(a).toFixed(2) + PERCENT_STR : e.legendValue(a), a;
      };
    }, this._drawParams = [e, t, o], this.updateWhenInMove(f, u), a = c.conf.outerCircle, i = c.conf.innerCircle, r = g(i.rFactor * o.rCalcBase / 2), r += g(a.style['stroke-width'] / 2), this.extremes[0] = e + r, this.extremes[1] = t - r, l = this.extremes[1] - this.extremes[0], this.min = this.min ? this.min : m[0].value, this.max = this.max ? this.max : m[m.length - 1].value, d = m[m.length - 1].value - m[0].value, c.currPos = l * (this.min - m[0].value) / d, h.currPos = l * (this.max - m[0].value) / d - l, n = c.draw(e, u ? f.legendPercentValue(this.min) : f.legendValue(this.min), o[o.key], o), n = h.draw(t, u ? f.legendPercentValue(this.max) : f.legendValue(this.max), o[o.key], o), c.swing = this.extremes.slice(0), h.swing = this.extremes.slice(0), c.swing[1] += h.currPos, h.swing[0] += c.currPos, this.getValueFormPixel(m[0].value, m[m.length - 1].value, this.extremes[0], this.extremes[1]), n;
  }updateWhenInRest(e, t) {
    var o,
        n,
        i = this.sliders,
        a = this.extremes,
        r = e.sliderIndex;r ? (o = i[!r].currPos, n = a[1] - a[0] + t) : (o = t, n = a[1] - a[0] + i[!r].currPos), this.min = +this.getValueFormPixel(o).toFixed(2), this.max = +this.getValueFormPixel(n).toFixed(2), this.gLegend.fireEvent('rangeUpdated', [{ min: this.min, max: this.max }]);
  }dragStarted(e) {
    var t = this.sliders,
        o = this.extremes,
        n = e.conf,
        i = this._fcChart;i.fireChartInstanceEvent('legendpointerdragstart', { pointerIndex: +e.sliderIndex, pointers: [{ value: this.getValueFormPixel(t['false'].currPos) }, { value: this.getValueFormPixel(o[1] - o[0] + t['true'].currPos) }], legendPointerHeight: n.outerRadius, legendPointerWidth: n.innerRadius, outerRadius: n.outerRadius, innerRadius: n.innerRadius }, [i.id]);
  }dragCompleted(e, t, o) {
    var n,
        i,
        a = this.sliders,
        r = this.extremes,
        l = e.conf,
        d = this.getValueFormPixel(a['false'].currPos),
        g = this.getValueFormPixel(r[1] - r[0] + a['true'].currPos),
        s = this._fcChart;e.sliderIndex ? (n = d, i = this.getValueFormPixel(r[1] - r[0] + o)) : (n = this.getValueFormPixel(o), i = g), t && s.fireChartInstanceEvent('legendrangeupdated', { previousMinValue: d, previousMaxValue: g, minValue: n, maxValue: i }, [s.id]), s.fireChartInstanceEvent('legendpointerdragstop', { pointerIndex: +e.sliderIndex, pointers: [{ value: n }, { value: i }], legendPointerHeight: l.outerRadius, legendPointerWidth: l.innerRadius, outerRadius: l.outerRadius, innerRadius: l.innerRadius }, [s.id]);
  }dispose() {
    this.sliders[FORMER_SLIDER_INDEX].dispose(), this.sliders[LATER_SLIDER_INDEX].dispose();
  }
}class LegendValues extends LegendLabels {
  constructor() {
    super(arguments[0]), this._id = 'GL_VALUES', this.node = [];
  }configure(e) {
    this.conf = e;
  }getName() {
    return 'LegendValues';
  }getType() {
    return 'legend';
  }getLogicalSpace(e, t, o) {
    var n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c,
        h,
        p,
        m,
        u,
        f,
        x,
        y,
        w,
        C,
        L,
        S,
        b,
        v,
        _,
        F,
        A,
        E = Math.min,
        P = Math.max,
        I = 'bottom' === this.conf.legendPosition,
        R = this._lSpace,
        O = this.conf,
        T = O.padding,
        D = t.gLegend.getFromEnv('chartConfig'),
        G = [],
        V = [];if (R && !o) return R.isImpure = !0, R;for (n = t.colorRange, i = t.smartLabel, a = n.colorRange, g = n.getCumulativeValueRatio(), R = this._lSpace = { bound: { height: 0, width: 0 }, node: { logicArea: UNDEF, smartTexts: [] } }, A = R.node.smartTexts, S = merge(e, {}), S.height -= 2 * T.v, S.width -= 2 * T.h, S.x += T.h, S.y += T.v, i.useEllipsesOnOverflow(D.useEllipsesWhenOverflow), F = merge(O.style, {}), normalizeFontSizeAppend(this._metaStyle = F), i.setStyle(F), _ = i.getSmartText('W'), d = a.length, I ? (p = s = (g[d - 1] - g[0]) / 2 * S.width / 100, v = a[0].displayValue, r = i.getSmartText('string' != typeof v && v !== UNDEF && v.toString() || v, p, S.height), r.x = g[0] * S.width / 100, m = r.x + r.width, G.push(r.height)) : (p = s = (g[d - 1] - g[0]) / 2 * S.height / 100, r = i.getSmartText(a[0].displayValue, S.width, p), r.y = g[0] * S.height / 100, x = r.y + r.width, V.push(r.width)), A[0] = r, I ? (r = i.getSmartText(a[d - 1].displayValue, p, S.height), r.x = g[d - 1] * S.width / 100, f = r.x - r.width, G.push(r.height), u = m) : (r = i.getSmartText(a[d - 1].displayValue, S.width, p), r.y = g[d - 1] * S.height / 100, w = r.y - r.height, V.push(r.width), y = x), A[d - 1] = r, l = 1; l < d - 1; l++) r = UNDEF, b = a[l].displayValue, I ? (c = l + 1 === d - 1 ? f : g[l + 1] * S.width / 100, h = g[l] * S.width / 100, s = E(h - u, c - h), s > 1.5 * _.width && (r = i.getSmartText(b, 2 * s, S.height), r.x = g[l] * S.width / 100, u = s, G.push(r.height))) : (c = l + 1 === d - 1 ? w : g[l + 1] * S.height / 100, h = g[l] * S.height / 100, s = E(h - y, c - h), s > 2 * _.height && (r = i.getSmartText(b, S.width, 2 * s), r.y = g[l] * S.height / 100, y = s, V.push(r.width))), A[l] = r;return I ? (C = P.apply(Math, G), S.height = C, e.height = C + 2 * T.v) : (L = P.apply(Math, V), S.width = L, e.width = L + 2 * T.h), R.node.logicArea = S, R.bound = e, e;
  }draw() {
    var e,
        t,
        o,
        n,
        i,
        a,
        r,
        l,
        d,
        g,
        s,
        c,
        h,
        p,
        m = this.conf,
        u = 'bottom' === m.legendPosition,
        f = m.bound && m.bound.style || { stroke: 'none' },
        x = {};2 <= arguments.length && arguments[1] ? (n = arguments[0], r = arguments[1]) : 1 <= arguments.length && (r = arguments[0]), p = r.animationManager, e = r.parentLayer, l = r.colorRange, d = l.getCumulativeValueRatio(), this.getLogicalSpace(n, r), i = this._lSpace, a = i.node.logicArea, c = i.node.smartTexts, this.group = o = p.setAnimation({ el: this.group || 'group', attr: { name: 'legend-values' }, container: e, component: gLegendRef }), this.bound = t = p.setAnimation({ el: this.bound || 'rect', attr: i.bound, css: f, container: o, component: gLegendRef });for (let e = 0; e < this.node.length; e++) this.node[e].remove();for (this.node = [], g = 0, s = d.length; g < s; g++) (h = c[g], !!h) && (u ? (x.y = a.y + h.height / 2, x.x = g === s - 1 ? a.x + h.x - h.width / 2 : g ? a.x + h.x : a.x + h.x + h.width / 2) : (x.x = a.x + h.width / 2, x.y = g === s - 1 ? a.y + h.y - h.height / 2 : g ? a.y + h.y : a.y + h.y + h.height / 2), this.node.push(p.setAnimation({ el: 'text', attr: { text: h.text, x: x.x, y: x.y, lineHeight: this._metaStyle.lineHeight, fill: m.style.fill }, container: o, component: gLegendRef })));return { group: o, bound: t };
  }
}exports.default = GLegend;
},{"../../lib/lib":23,"../../lib/lib-graphics":24,"../../../core/component-interface":65}],124:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a) {
  _decideLegendCreation(a);
};

var _lib = require('../lib/lib');

var _gradientLegend = require('../legend/gradient/gradient-legend');

var _gradientLegend2 = _interopRequireDefault(_gradientLegend);

var _legend = require('../legend/discrete/legend');

var _legend2 = _interopRequireDefault(_legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _decideLegendCreation(a) {
  let b,
      c = a.getFromEnv('dataSource').colorrange,
      d = a.getFromEnv('dataSource').chart.mapbycategory,
      e = 'maps' === a.defaultDatasetType,
      f = 'TreeMap' === a.getName(),
      g = a.getFromEnv('legend'),
      h = a.getFromEnv('gLegend');b = c && a.config.showLegend ? e ? c.gradient && +c.gradient ? 'gradient' : c.color ? 'icon' : 'none' : f ? c.gradient && '0' != c.gradient ? 'gradient' : 'none' : c.gradient && '0' != c.gradient && !+d ? 'gradient' : 'icon' : 'none';'gradient' === b ? (a.deleteFromEnv('legend'), g && g.remove(), (0, _lib.componentFactory)(a, _gradientLegend2.default, 'gLegend', 1), h = a.getChildren('gLegend')[0], h.configure(), a.addToEnv('gLegend', h)) : 'icon' === b ? (a.deleteFromEnv('gLegend'), h && h.remove(), (0, _lib.componentFactory)(a, _legend2.default, 'legend', 1, { showLegend: !0 }), g = a.getChildren('legend')[0], g.configure(), a.addToEnv('legend', g)) : 'none' === b ? (a.deleteFromEnv('gLegend'), a.deleteFromEnv('legend'), h && h.remove(), g && g.remove()) : void 0;
}
},{"../lib/lib":23,"../legend/gradient/gradient-legend":141,"../legend/discrete/legend":142}],103:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mscartesian = require('./mscartesian');

var _mscartesian2 = _interopRequireDefault(_mscartesian);

var _componentInterface = require('../core/component-interface');

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _chartPaletteColors = require('../_internal/color-utils/chart-palette-colors');

var defaultPaletteOption = _interopRequireWildcard(_chartPaletteColors);

var _domEvent = require('../_internal/dom/dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _eventApi = require('../_internal/misc/event-api');

var _lib = require('../_internal/lib/lib');

var _libGraphics = require('../_internal/lib/lib-graphics');

var _extAnnotation = require('../_internal/vendors/fc-ext-annotation/src/ext-annotation.js');

var _extAnnotation2 = _interopRequireDefault(_extAnnotation);

var _raphael = require('../_internal/vendors/redraphael/source/raphael.lib');

var _raphael2 = _interopRequireDefault(_raphael);

var _mapsDataset = require('../_internal/factories/maps-dataset');

var _mapsDataset2 = _interopRequireDefault(_mapsDataset);

var _canvas = require('../_internal/factories/canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _colorrange = require('../_internal/factories/colorrange');

var _colorrange2 = _interopRequireDefault(_colorrange);

var _legendmanager = require('../_internal/factories/legendmanager');

var _legendmanager2 = _interopRequireDefault(_legendmanager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UNDEF,
    defaultPaletteOptions = (0, _raphael2.default)({ foregroundcolor: '333333', foregroundalpha: '100', foregrounddarkcolor: '111111', foregrounddarkalpha: '100', foregroundlightcolor: '666666', foregroundlightalpha: '100', backgroundlightcolor: 'FFFFFF', backgroundlightalpha: '100', backgroundlightangle: 90, backgroundlightratio: '', backgroundcolor: 'FFFFCC', backgroundalpha: '100', backgrounddarkcolor: 'ffcc66', backgrounddarkalpha: '100', backgrounddarkangle: 270, backgrounddarkratio: '', shadow: 1 }, defaultPaletteOption),
    zeroCommaHundredStr = '0,100',
    colorPaletteMapGlobal = { basefontcolor: 'foregroundcolor', bordercolor: 'foregrounddarkcolor', borderalpha: 'foregrounddarkalpha', bgcolor: 'backgroundlightcolor', bgalpha: 'backgroundlightalpha', bgangle: 'backgroundlightangle', bgratio: 'backgroundlightratio', canvasbordercolor: 'foregrounddarkcolor', canvasborderalpha: 'foregrounddarkalpha', canvasbgcolor: 'backgroundlightcolor', canvasbgalpha: 'backgroundlightalpha', canvasbgangle: 'backgroundlightangle', canvasbgratio: 'backgroundlightratio', tooltipbordercolor: 'foregrounddarkcolor', tooltipborderalpha: 'foregrounddarkalpha', tooltipbgcolor: 'backgroundlightcolor', tooltipbgalpha: 'backgroundlightalpha', tooltipfontcolor: 'foregroundcolor', legendbordercolor: 'foregrounddarkcolor', legendborderalpha: 'foregrounddarkalpha', markerbordercolor: 'foregroundlightcolor', markerborderalpha: 'foregroundlightalpha', markerfillcolor: 'backgrounddarkcolor', markerfillalpha: 'backgrounddarkalpha', markerfillangle: 'backgrounddarkangle', markerfillratio: 'backgrounddarkratio', plotfillcolor: 'backgroundcolor', plotfillalpha: 'backgroundalpha', plotfillangle: 'backgroundangle', plotfillratio: 'backgroundratio', plothoverfillcolor: 'backgrounddarkcolor', plothoverfillalpha: 'backgrounddarkalpha', plothoverfillangle: 'backgrounddarkangle', plothoverfillratio: 'backgrounddarkratio', plotbordercolor: 'foregroundcolor', plotborderalpha: 'foregroundalpha', shadow: 'shadow' },
    eiMethodsGlobal = { getMapName: function () {
    let a = this,
        b = a.jsVars.instanceAPI,
        c = b.getName().toLowerCase();return c;
  }, getEntityList: function () {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h = this,
        j = h.jsVars.instanceAPI,
        k = j.getDatasets() || [],
        l = k.length,
        m = [];for (a = 0; a < l; a++) if (c = k[a] || [], g = c.getName(), 'entities' === g) {
      b = c;break;
    }for (a in d = b.components.data, l = d.length, d) d.hasOwnProperty(a) && (e = d[a] || {}, f = e.config || {}, m.push({ id: f.id, originalId: f.originalId || f.id, label: f.label, shortlabel: f.shortLabel, value: f.value, formattedValue: f.formattedValue, toolText: f.toolText }));return m;
  }, getMapAttribute: function () {
    let a = this;return (0, _eventApi.raiseWarning)(this, '12061210581', 'run', 'JavaScriptRenderer~getMapAttribute()', 'Use of deprecated "getMapAttribute()". Replace with "getChartAttribute()".'), a.getChartAttribute.apply(a, arguments);
  }, exportMap: function () {
    let a = this;return (0, _eventApi.raiseWarning)(this, '12061210581', 'run', 'JavaScriptRenderer~exportMap()', 'Use of deprecated "exportMap()". Replace with "exportChart()".'), a.exportChart && a.exportChart.apply(a, arguments);
  }, addMarker: function (a) {
    let b,
        c,
        d,
        e,
        f = this.jsVars.instanceAPI,
        g = f.getDatasets() || [],
        h = g.length;for (b = 0; b < h; b++) if (c = g[b] || [], e = c.getName(), 'markers' === e) {
      d = c;break;
    }d && !d.addMarkerItem(a) && (0, _eventApi.raiseWarning)(this, '1309264086', 'run', 'MapsRenderer~addMarker()', 'Failed to add marker. Check the options and try again.');
  }, updateMarker: function (a, b) {
    let c,
        d,
        e,
        f,
        g = this.jsVars.instanceAPI,
        h = g.getDatasets() || [],
        j = h.length;for (c = 0; c < j; c++) if (d = h[c] || [], f = d.getName(), 'markers' === f) {
      e = d;break;
    }e && a && (a = (a + BLANK).toLowerCase(), e.updateMarkerItem(a, b));
  }, removeMarker: function (a) {
    let b,
        c,
        d,
        e,
        f = this.jsVars.instanceAPI,
        g = f.getDatasets() || [],
        h = g.length;for (b = 0; b < h; b++) if (c = g[b] || [], e = c.getName(), 'markers' === e) {
      d = c;break;
    }a && (a = (a + BLANK).toLowerCase(), d._removeMarkerItem(a));
  } },
    DASH_DEF = 'none',
    COMMASPACE = ', ',
    BLANK = '',
    POSITION_BOTTOM = 'bottom',
    SHAPE_CIRCLE = 'circle',
    math = window.Math,
    mathMin = math.min,
    mathMax = math.max,
    isWithinCanvas = function (a, b) {
  let c = (0, _lib.getMouseCoordinate)(b.getFromEnv('chart-container'), a),
      d = c.chartX,
      e = c.chartY,
      f = b.config,
      g = f.canvasLeft,
      h = f.canvasTop,
      i = f.canvasLeft + f.canvasWidth,
      j = f.canvasHeight + f.canvasTop;return c.insideCanvas = !1, c.originalEvent = a, d > g && d < i && e > h && e < j && (c.insideCanvas = !0), c;
};class ColorPalette extends _componentInterface2.default {
  constructor(a, b) {
    for (this.key in super(), this.subpalette = '', this.key = '', this.index = b, a) this.subpalette = defaultPaletteOptions[a[this.key]], this[this.key] = this.subpalette instanceof Array ? this.subpalette[b] : this.subpalette;
  }
}class Maps extends _mscartesian2.default {
  constructor() {
    super(), this.friendlyName = 'Map', this.revision = 1, this.hasCanvas = !0, this.standaloneInit = !1, this.defaultDatasetType = 'maps', this.defaultSeriesType = 'geo', this.fireGroupEvent = !0, this.legendposition = 'right', this.hasGradientLegend = !0, this.isMap = !0, this.defaultPaletteOptions = { paletteColors: [['A6A6A6', 'CCCCCC', 'E1E1E1', 'F0F0F0'], ['A7AA95', 'C4C6B7', 'DEDFD7', 'F2F2EE'], ['04C2E3', '66E7FD', '9CEFFE', 'CEF8FF'], ['FA9101', 'FEB654', 'FED7A0', 'FFEDD5'], ['FF2B60', 'FF6C92', 'FFB9CB', 'FFE8EE']], bgColor: ['FFFFFF', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'], bgAngle: [270, 270, 270, 270, 270], bgRatio: [zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr], bgAlpha: ['100', '60,50', '40,20', '20,10', '30,30'], toolTipBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'], toolTipBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'], baseFontColor: ['555555', '60634E', '025B6A', 'A15E01', '68001B'], tickColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'], trendColor: ['545454', '60634E', '415D6F', '845001', '68001B'], plotFillColor: ['545454', '60634E', '415D6F', '845001', '68001B'], borderColor: ['767575', '545454', '415D6F', '845001', '68001B'], borderAlpha: [50, 50, 50, 50, 50] }, this.colorPaletteMap = colorPaletteMapGlobal, this.eiMethods = eiMethodsGlobal, this.registerFactory('legend', _legendmanager2.default, ['canvas']), this.registerFactory('axis', () => {}, ['canvas']), this.registerFactory('colormanager-decider', _colorrange2.default, ['legend']), this.registerFactory('dataset', _mapsDataset2.default, ['colormanager-decider']), this.registerFactory('canvas', _canvas2.default);
  }_checkInvalidSpecificData() {
    return this.config.invalid = !1, !1;
  }__setDefaultConfig() {
    var a = this.config;a.baseWidth || (a.baseWidth = 400), a.baseHeight || (a.baseHeight = 300), a.baseScaleFactor || (a.baseScaleFactor = 1);
  }static getName() {
    return 'maps';
  }static getType() {
    return 'chartAPI';
  }getName() {
    return this.config.name || 'GEO';
  }getType() {
    return 'chartAPI';
  }configureAttributes(a) {
    let b,
        c = this,
        d = c.getChildren('colorPalette') && c.getChildren('colorPalette')[0];b = a.chart = a.chart || a.graph || a.map || {}, c.jsonData = a, (0, _lib.componentFactory)(c, _extAnnotation2.default, 'mapAnnotations'), d || (d = new ColorPalette(this.colorPaletteMap, (0 < b.palette && 6 > b.palette ? b.palette : (0, _lib.pluckNumber)(c.paletteIndex, 1)) - 1), c.attachChild(d, 'colorPalette')), c.config.skipCanvasDrawing = !0, super.configureAttributes(a), c._parseBackgroundCosmetics();
  }parseChartAttr(a) {
    let b,
        c,
        d,
        e,
        f,
        g = this,
        h = g.jsonData,
        i = h.chart || h.map,
        j = h.markers,
        k = new ColorPalette(this.colorPaletteMap, (0 < i.palette && 6 > i.palette ? i.palette : (0, _lib.pluckNumber)(g.paletteIndex, 1)) - 1),
        l = (0, _lib.pluck)(i.entitybordercolor, i.bordercolor, k.plotbordercolor),
        m = (0, _lib.pluck)(i.entityfillcolor, i.fillcolor, k.plotfillcolor),
        n = (0, _lib.pluck)(i.entityfillalpha, i.fillalpha, k.plotfillalpha),
        o = (0, _lib.pluck)(i.entityfillratio, i.fillratio, k.plotfillratio),
        p = (0, _lib.pluck)(i.entityfillangle, i.fillangle, k.plotfillangle),
        q = (0, _lib.pluck)(i.nullentityfillcolor, i.nullentitycolor, m),
        r = (0, _lib.pluckNumber)(i.usevaluesformarkers, h.markers && h.markers.items && h.markers.items.length, !(h.markers && h.markers.application && h.markers.application.length && h.markers.definition && h.markers.definition.length));super.parseChartAttr(a), b = g.config, b.origMarginTop = (0, _lib.pluckNumber)(i.charttopmargin, i.maptopmargin, 11), b.origMarginLeft = (0, _lib.pluckNumber)(i.chartleftmargin, i.mapleftmargin, 11), b.origMarginBottom = (0, _lib.pluckNumber)(i.chartbottommargin, i.mapbottommargin, 11), b.origMarginRight = (0, _lib.pluckNumber)(i.chartrightmargin, i.maprightmargin, 11), b.labelsOnTop = (0, _lib.pluckNumber)(i.entitylabelsontop, 1), f = b.style, c = f.inCancolor, d = f.inCanfontFamily, e = f.inCanfontSize, b.entityOpts = { baseScaleFactor: b.baseScaleFactor, dataLabels: { style: { fontFamily: d, fontSize: e, lineHeight: f.inCanLineHeight, color: f.inCancolor } }, fillColor: m, fillAlpha: n, fillRatio: o, fillAngle: p, borderColor: l, borderAlpha: (0, _lib.pluck)(i.entityborderalpha, i.borderalpha, g.borderAlpha, '100'), borderThickness: (0, _lib.pluckNumber)(i.showentityborder, i.showborder, 1) ? (0, _lib.pluckNumber)(i.entityborderthickness, i.borderthickness, 1) : 0, scaleBorder: (0, _lib.pluckNumber)(i.scaleentityborder, i.scaleborder, 0), hoverFillColor: (0, _lib.pluck)(i.entityfillhovercolor, i.hoverfillcolor, i.hovercolor, k.plothoverfillcolor), hoverFillAlpha: (0, _lib.pluck)(i.entityfillhoveralpha, i.hoverfillalpha, i.hoveralpha, k.plothoverfillalpha), hoverFillRatio: (0, _lib.pluck)(i.entityfillhoverratio, i.hoverfillratio, i.hoverratio, k.plothoverfillratio), hoverFillAngle: (0, _lib.pluck)(i.entityfillhoverangle, i.hoverfillangle, i.hoverangle, k.plothoverfillangle), hoverBorderThickness: (0, _lib.pluck)(i.entityborderhoverthickness, i.hoverborderthickness), hoverBorderColor: (0, _lib.pluck)(i.entityborderhovercolor, l, k.plotbordercolor), hoverBorderAlpha: (0, _lib.pluck)(i.entityborderhoveralpha, k.plotborderalpha), nullEntityColor: q, nullEntityAlpha: (0, _lib.pluck)(i.nullentityfillalpha, i.nullentityalpha, n), nullEntityRatio: (0, _lib.pluck)(i.nullentityfillratio, i.nullentityratio, o), nullEntityAngle: (0, _lib.pluck)(i.nullentityfillangle, i.nullentityangle, p), connectorColor: (0, _lib.pluck)(i.labelconnectorcolor, i.connectorcolor, c), connectorAlpha: (0, _lib.pluck)(i.labelconnectoralpha, i.connectoralpha, '100'), connectorThickness: (0, _lib.pluckNumber)(i.labelconnectorthickness, i.borderthickness, 1), showHoverEffect: (0, _lib.pluckNumber)(i.showentityhovereffect, i.usehovercolor, i.showhovereffect, 1), hoverOnNull: (0, _lib.pluckNumber)(i.hoveronnull, i.entityhoveronnull, 1), labelPadding: (0, _lib.pluckNumber)(i.labelpadding, 5), showLabels: (0, _lib.pluckNumber)(i.showlabels, 1), labelsOnTop: (0, _lib.pluckNumber)(i.entitylabelsontop, 1), includeNameInLabels: (0, _lib.pluckNumber)(i.includenameinlabels, 1), includeValueInLabels: (0, _lib.pluckNumber)(i.includevalueinlabels, 0), useSNameInTooltip: (0, _lib.pluckNumber)(i.usesnameintooltip, 0), useShortName: (0, _lib.pluckNumber)(i.usesnameinlabels, 1), labelSepChar: (0, _lib.pluck)(i.labelsepchar, COMMASPACE), showTooltip: (0, _lib.pluckNumber)(i.showentitytooltip, i.showtooltip, 1), tooltipSepChar: (0, _lib.pluck)(i.tooltipsepchar, ', '), tooltext: i.entitytooltext, hideNullEntities: (0, _lib.pluckNumber)(i.hidenullentities, 0), showHiddenEntityBorder: (0, _lib.pluckNumber)(i.showhiddenentityborder, 1), showNullEntityBorder: (0, _lib.pluckNumber)(i.shownullentityborder, 1), hiddenEntityColor: (0, _lib.pluck)(i.hiddenentitycolor, i.hiddenentityfillcolor, i.hiddenentityalpha || i.hiddenentityfillalpha ? q : 'ffffff'), hiddenEntityAlpha: (0, _lib.pluck)(i.hiddenentityalpha, i.hiddenentityfillalpha, .001), shadow: (0, _lib.pluckNumber)(i.showshadow, g.defaultPlotShadow, k.shadow) }, b.markerOpts = { dataLabels: { style: { fontFamily: (0, _lib.pluck)(i.markerfont, d), fontSize: (0, _lib.pluckNumber)(i.markerfontsize, parseInt(e, 10)), fontColor: (0, _lib.pluck)(i.markerfontcolor, c) } }, showTooltip: (0, _lib.pluckNumber)(i.showmarkertooltip, i.showtooltip, 1), showLabels: (0, _lib.pluckNumber)(i.showmarkerlabels, i.showlabels, 1), showHoverEffect: (0, _lib.pluckNumber)(i.showmarkerhovereffect, 1), labelPadding: (0, _lib.pluck)(i.markerlabelpadding, '5'), labelWrapWidth: (0, _lib.pluckNumber)(i.markerlabelwrapwidth, 0), labelWrapHeight: (0, _lib.pluckNumber)(i.markerlabelwrapheight, 0), fillColor: (0, _lib.pluck)(i.markerfillcolor, i.markerbgcolor, k.markerfillcolor), fillAlpha: (0, _lib.pluck)(i.markerfillalpha, k.markerfillalpha), fillAngle: (0, _lib.pluck)(i.markerfillangle, k.markerfillangle), fillRatio: (0, _lib.pluck)(i.markerfillratio, k.markerfillratio), fillPattern: (0, _lib.pluck)(i.markerfillpattern, k.markerbgpattern), hoverFillColor: i.markerfillhovercolor, hoverFillAlpha: i.markerfillhoveralpha, hoverFillRatio: i.markerfillhoverratio, hoverFillAngle: i.markerfillhoverangle, borderThickness: (0, _lib.pluck)(i.markerborderthickness, 1), borderColor: (0, _lib.pluck)(i.markerbordercolor, k.markerbordercolor), borderAlpha: (0, _lib.pluckNumber)(i.markerborderalpha, k.markerborderalpha), hoverBorderThickness: i.markerborderhoverthickness, hoverBorderColor: i.markerborderhovercolor, hoverBorderAlpha: i.markerborderhoveralpha, radius: (0, _lib.pluckNumber)(i.markerradius && (0, _lib.trimString)(i.markerradius), 7), shapeId: (0, _lib.pluck)(i.defaultmarkershape, SHAPE_CIRCLE), labelSepChar: (0, _lib.pluck)(i.labelsepchar, COMMASPACE), tooltipSepChar: (0, _lib.pluck)(i.tooltipsepchar, ', '), autoScale: (0, _lib.pluckNumber)(i.autoscalemarkers, 0), tooltext: (0, _lib.pluck)(j && j.tooltext, i.markertooltext), dataEnabled: r, valueToRadius: (0, _lib.pluckNumber)(i.markerradiusfromvalue, 1), valueMarkerAlpha: (0, _lib.pluck)(i.valuemarkeralpha, '75'), hideNull: (0, _lib.pluckNumber)(i.hidenullmarkers, 0), nullRadius: (0, _lib.pluckNumber)(i.nullmarkerradius, i.markerradius, 7), adjustViewPort: (0, _lib.pluckNumber)(i.adjustviewportformarkers, 0), startAngle: (0, _lib.pluckNumber)(i.markerstartangle, 90), maxRadius: (0, _lib.pluckNumber)(i.maxmarkerradius, 0), minRadius: (0, _lib.pluckNumber)(i.minmarkerradius, 0), applyAll: (0, _lib.pluckNumber)(i.applyallmarkers, 0), shadow: (0, _lib.pluckNumber)(i.showmarkershadow, i.showshadow, 0) }, b.connectorOpts = { showHoverEffect: (0, _lib.pluckNumber)(i.showconnectorhovereffect, 1), thickness: (0, _lib.pluckNumber)(i.connectorthickness, i.markerconnthickness, '2'), color: (0, _lib.pluck)(i.connectorcolor, i.markerconncolor, k.markerbordercolor), alpha: (0, _lib.pluck)(i.connectoralpha, i.markerconnalpha, '100'), hoverThickness: (0, _lib.pluckNumber)(i.connectorhoverthickness, i.connectorthickness, i.markerconnthickness, '2'), hoverColor: (0, _lib.pluck)(i.connectorhovercolor, i.connectorcolor, i.markerconncolor, k.markerbordercolor), hoverAlpha: (0, _lib.pluck)(i.connectorhoveralpha, i.connectoralpha, i.markerconnalpha, '100'), dashed: (0, _lib.pluckNumber)(i.connectordashed, i.markerconndashed, 0), dashLen: (0, _lib.pluckNumber)(i.connectordashlen, i.markerconndashlen, 3), dashGap: (0, _lib.pluckNumber)(i.connectordashgap, i.markerconndashgap, 2), font: (0, _lib.pluck)(i.connectorfont, i.markerconnfont, d), fontColor: (0, _lib.pluck)(i.connectorfontcolor, i.markerconnfontcolor, c), fontSize: (0, _lib.pluckNumber)(i.connectorfontsize, i.markerconnfontsize, parseInt(e, 10)), showLabels: (0, _lib.pluckNumber)(i.showconnectorlabels, i.showmarkerlabels, i.showlabels, 1), labelBgColor: (0, _lib.pluck)(i.connectorlabelbgcolor, i.markerconnlabelbgcolor, k.plotfillcolor), labelBorderColor: (0, _lib.pluck)(i.connectorlabelbordercolor, i.markerconnlabelbordercolor, k.markerbordercolor), shadow: (0, _lib.pluckNumber)(i.showconnectorshadow, i.showmarkershadow, i.showshadow, 0), showTooltip: (0, _lib.pluckNumber)(i.showconnectortooltip, i.showmarkertooltip, i.showtooltip, 1), tooltext: (0, _lib.pluck)(j && j.connectortooltext, i.connectortooltext), hideOpen: (0, _lib.pluckNumber)(i.hideopenconnectors, 1) }, b.adjustViewPortForMarkers = (0, _lib.pluckNumber)(i.adjustviewportformarkers, r);
  }_attachMouseEvents() {
    let a = this,
        b = a.getFromEnv('eventListeners'),
        c = a.getFromEnv('chart-container');b || (b = [], a.addToEnv('eventListeners', b)), _domEvent2.default.unlisten(c, _lib.hasTouch ? 'touchstart' : 'mousemove', Maps.searchMouseMove), b.push(_domEvent2.default.listen(c, 'touchstart mousemove', Maps.searchMouseMove, a));
  }static searchMouseMove(a) {
    let b,
        c = a.data,
        d = c.config,
        e = {};!c.getFromEnv('chart-container') || (b = isWithinCanvas(a, c)) && b.insideCanvas && (d.lastMouseEvent = a, e = { x: b.chartX, y: b.chartY }, c._searchNearestNeighbour(e));
  }_searchNearestNeighbour(a) {
    let b,
        c = this,
        d = c.getDatasets(),
        e = d[1];if (e) {
      if (!e.components.kDTree) return;b = e.getElement(a), b ? c.config.lastHoveredPoint !== b && e.highlightPoint(b) : e.highlightPoint(!1);
    }
  }_createLayers() {
    super._createLayers(), this._attachMouseEvents();
  }_parseBackgroundCosmetics() {
    let a,
        b = this,
        c = b.getChildren('background')[0],
        d = c.config,
        e = b.getChildren('colorPalette')[0],
        f = b.getFromEnv('chart-attrib');a = d.showBorder = (0, _lib.pluckNumber)(f.showcanvasborder, 1), d.borderWidth = a ? (0, _lib.pluckNumber)(f.canvasborderthickness, 1) : 0, d.borderRadius = d.borderRadius = (0, _lib.pluckNumber)(f.canvasborderradius, 0), d.borderDashStyle = d.borderDashStyle = (0, _lib.pluckNumber)(f.borderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(f.borderdashlen, 4), (0, _lib.pluckNumber)(f.borderdashgap, 2)) : DASH_DEF, d.borderAlpha = (0, _lib.pluck)(f.canvasborderalpha, e.borderAlpha), d.borderColor = d.borderColor = (0, _libGraphics.convertColor)((0, _lib.pluck)(f.canvasbordercolor, e && e.borderColor), d.borderAlpha);
  }_getBackgroundCosmetics() {
    let a = this,
        b = a.getFromEnv('chart-attrib') || a.jsonData.map,
        c = a.getChildren('colorPalette')[0];return { FCcolor: { color: (0, _lib.pluck)(b.bgcolor, b.canvasbgcolor, c.bgcolor), alpha: (0, _lib.pluck)(b.bgalpha, b.canvasbgalpha, c.bgalpha), angle: (0, _lib.pluck)(b.bgangle, b.canvasbgangle, c.bgangle), ratio: (0, _lib.pluck)(b.bgratio, b.canvasbgratio, c.bgratio) } };
  }_parseCanvasCosmetics() {
    super._parseCanvasCosmetics();let a = this,
        b = a.config,
        c = a.getFromEnv('chart-attrib') || a.jsonData.map,
        d = a.getChildren('canvas')[0].config;b.origMarginTop = (0, _lib.pluckNumber)(c.maptopmargin, 11), b.origMarginLeft = (0, _lib.pluckNumber)(c.mapleftmargin, 11), b.origMarginBottom = (0, _lib.pluckNumber)(c.mapbottommargin, 11), b.origMarginRight = (0, _lib.pluckNumber)(c.maprightmargin, 11), b.origCanvasLeftMargin = (0, _lib.pluckNumber)(c.canvasleftmargin, 0), b.origCanvasRightMargin = (0, _lib.pluckNumber)(c.canvasrightmargin, 0), b.origCanvasTopMargin = (0, _lib.pluckNumber)(c.canvastopmargin, 0), b.origCanvasBottomMargin = (0, _lib.pluckNumber)(c.canvasbottommargin, 0), d.canvasBorderRadius = (0, _lib.pluckNumber)(c.canvasborderradius, 0), d.origCanvasTopPad = (0, _lib.pluckNumber)(c.canvastoppadding, 0), d.origCanvasBottomPad = (0, _lib.pluckNumber)(c.canvasbottompadding, 0), d.origCanvasLeftPad = (0, _lib.pluckNumber)(c.canvasleftpadding, 0), d.origCanvasRightPad = (0, _lib.pluckNumber)(c.canvasrightpadding, 0);
  }preliminaryScaling() {
    let a,
        b,
        c,
        d = this,
        e = d.jsonData,
        f = e.markers && e.markers.items || [],
        g = f && f.length || 0,
        h = 1 / 0,
        j = 1 / 0,
        k = -Infinity,
        l = -Infinity;for (; g--;) c = f[g], a = +c.x, b = +c.y, h = mathMin(h, a), j = mathMin(j, b), k = mathMax(k, a), l = mathMax(l, b);return { x: h, y: j, x1: k, y1: l };
  }getScalingParameters(a, b, c, d) {
    let e,
        f,
        g = this,
        h = a / b,
        i = c / (a * g.config.baseScaleFactor),
        j = d / (b * g.config.baseScaleFactor),
        k = 0,
        l = 0;return i > j ? (e = j, k += (c - d * h) / 2, f = 200 / (b * e)) : (e = i, l += (d - c / h) / 2, f = 200 / (a * e)), { scaleFactor: e, strokeWidth: f, translateX: k, translateY: l };
  }calculateMarkerBounds(a, b, c) {
    let d,
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
        s,
        t = this,
        u = t.config,
        v = u.markerOpts,
        w = t.getDatasets(),
        z = t.getDataLimits(),
        A = z.dataMin,
        B = z.dataMax,
        C = v.hideNull,
        D = v.nullRadius,
        E = v.valueToRadius,
        F = 1 / 0,
        G = 1 / 0,
        H = -Infinity,
        I = -Infinity;for (j = 0, m = w.length; j < m; j++) l = w[j], k = l.getName(), 'markers' === k && (d = l);if (d) for (j in d.calculateMarkerRadiusLimits(), e = d.config || {}, f = e.minRadius, g = e.maxRadius, h = d.components && d.components.markerObjs || {}, h) {
      if (s = h[j], u = s.config, q = u.definition || {}, null !== u.cleanValue) E && q.radius === UNDEF && (u.radius = f + (g - f) * (u.cleanValue - A) / (B - A));else {
        C ? u.__hideMarker = !0 : null === u.radius && (u.radius = D);continue;
      }p = +u.radius, n = (+q.x + b) * a, o = (+q.y + c) * a, F = mathMin(F, n - p), G = mathMin(G, o - p), H = mathMax(H, n + p), I = mathMax(I, o + p);
    }return { x: F, y: G, x1: H, y1: I };
  }_spaceManager() {
    let a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = this,
        k = j.config,
        l = j.getChildren('legend') && j.getChildren('legend')[0],
        m = l && l.config.legendPos,
        n = j.getFromEnv('chart-attrib'),
        o = k.showBorder,
        p = k.origMarginLeft,
        q = k.origMarginTop,
        r = j.config.baseWidth,
        s = j.config.baseHeight,
        t = {},
        u = 0,
        v = 0,
        w = k.markerOpts,
        x = k.borderWidth = o ? (0, _lib.pluckNumber)(n.borderthickness, 1) : 0;j._allocateSpace({ top: x, bottom: x, left: x, right: x }), j._allocateSpace(j._manageActionBarSpace && j._manageActionBarSpace(.225 * k.availableHeight) || {}), h = 'right' === m ? .3 * k.canvasWidth : .3 * k.canvasHeight, k.showLegend && j._manageLegendSpace(h), a = m === POSITION_BOTTOM ? .225 * k.canvasHeight : .225 * k.canvasWidth, i = j._manageChartMenuBar(a), c = k.canvasWidth, d = k.canvasHeight, w.dataEnabled ? (k.adjustViewPortForMarkers ? (t = j.preliminaryScaling(), t.x1 > r && (r = t.x1), 0 > t.x && (r += -t.x, u = -t.x), t.y1 > s && (s = t.y1), 0 > t.y && (s += -t.y, v = -t.y), b = j.getScalingParameters(r, s, c, d), t = j.calculateMarkerBounds(b.scaleFactor * j.config.baseScaleFactor, u, v), f = d, g = c, 0 > t.x && (p += -t.x, c += t.x), 0 > t.y && (q += -t.y, d += t.y), t.x1 > g && (c -= t.x1 - g), t.y1 > f && (d -= t.y1 - f)) : (b = j.getScalingParameters(r, s, c, d), j.calculateMarkerBounds(b.scaleFactor * j.config.baseScaleFactor, u, v)), b = j.getScalingParameters(r, s, c, d), p += u * b.scaleFactor * j.config.baseScaleFactor, q += v * b.scaleFactor * j.config.baseScaleFactor) : b = j.getScalingParameters(r, s, c, d), j.config.scalingParams = b, e = b.scaleFactor, b.translateX += p, b.translateY = b.translateY + q + i.top || 0, b.sFactor = 100 * (e * j.config.baseScaleFactor) / 100, b.transformStr = ['t', b.translateX, ',', b.translateY, 's', e, ',', e, ',0,0'].join(''), j.config.annotationConfig = { id: 'Geo', showbelow: 0, autoscale: 0, grpxshift: b.translateX ? b.translateX : 0, grpyshift: b.translateY ? b.translateY : 0, xscale: 100 * (e ? e * j.config.baseScaleFactor : 1), yscale: 100 * (e ? e * j.config.baseScaleFactor : 1), scaletext: 1, options: { useTracker: !0 } }, j.getChildren('mapAnnotations')[0].clear(), j.getChildren('mapAnnotations')[0].configureAttributes();
  }getDataLimits() {
    let a,
        b,
        c,
        d = this,
        e = d.getDatasets(),
        f = e.length,
        g = +Infinity,
        h = -Infinity;for (c = 0; c < f; c++) a = e[c], b = a.getDataLimits(), g = mathMin(g, b.min), h = mathMax(h, b.max);return { dataMin: g, dataMax: h };
  }getEntityPaths(a) {
    let b,
        c = {},
        d = this.config.entities;if (a) {
      for (b in d) c[b] = d[b];return c;
    }return d;
  }checkComplete() {
    let a = this;a.config.entityFlag && a.config.entitiesReady && (a.config.entityFlag = !1, a.config.markersDrawn = !0, a.fireChartInstanceEvent('internal.mapdrawingcomplete', { renderer: a }));
  }
}exports.default = Maps;
},{"./mscartesian":119,"../core/component-interface":65,"../_internal/color-utils/chart-palette-colors":120,"../_internal/dom/dom-event":76,"../_internal/misc/event-api":25,"../_internal/lib/lib":23,"../_internal/lib/lib-graphics":24,"../_internal/vendors/fc-ext-annotation/src/ext-annotation.js":125,"../_internal/vendors/redraphael/source/raphael.lib":87,"../_internal/factories/maps-dataset":121,"../_internal/factories/canvas":123,"../_internal/factories/colorrange":122,"../_internal/factories/legendmanager":124}],59:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Maps = undefined;

var _maps = require('../viz/maps');

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Maps = _maps2.default;
exports.default = { name: 'maps', type: 'package', requiresFusionCharts: !0, extension: a => a.addDep(_maps2.default) };
},{"../viz/maps":103}],236:[function(require,module,exports) {
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
},{}]},{},[236,59], null)
//# sourceMappingURL=/maps.0224e8b0.map