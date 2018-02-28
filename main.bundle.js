/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
/* harmony export (immutable) */ __webpack_exports__["m"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_creator__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_local__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__src_local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_matcher__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__src_matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mouse__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__src_mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_namespace__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__src_namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespaces__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_select__ = __webpack_require__(255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_selectAll__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__src_selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_selection_index__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__src_selection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selector__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selection_style__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_11__src_selection_style__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_touch__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_12__src_touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_touches__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_13__src_touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_window__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_14__src_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_selection_on__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_15__src_selection_on__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_15__src_selection_on__["a"]; });


















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__src_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__src_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__src_histogram__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__src_max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__src_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_13__src_median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_15__src_min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_16__src_pairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_17__src_permute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(241);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_20__src_scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_21__src_shuffle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_24__src_transpose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_25__src_variance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_26__src_zip__["a"]; });





























/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__datum__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__on__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dispatch__ = __webpack_require__(282);






























var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_26__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_27__on__["b" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_28__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["b"] = (selection);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_basis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__src_date__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__src_object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(291);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(294);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_10__src_zoom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(296);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__src_lab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(299);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_16__src_quantize__["a"]; });



















/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony export (immutable) */ __webpack_exports__["h"] = set;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(40);



var emptyOn = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["e"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
  return schedule;
}

function set(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["d" /* timer */])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timeout */])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timeout */])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__(393);











var transformRadians = Object(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
  }
});

function transformRotate(rotate) {
  return Object(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* transformer */])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */], // clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */], // clip extent
      delta2 = 0.5, projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : Object(__WEBPACK_IMPORTED_MODULE_5__math__["u" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["b" /* fitSize */])(projection, size, object);
  };

  function recenter() {
    projectRotate = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(rotate = Object(__WEBPACK_IMPORTED_MODULE_6__rotation__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;
/* harmony export (immutable) */ __webpack_exports__["b"] = transition;
/* harmony export (immutable) */ __webpack_exports__["c"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectAll__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleTween__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transition__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tween__ = __webpack_require__(41);



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* selection */])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* selection */].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_10__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_11__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_6__filter__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["a" /* default */],
  selection: __WEBPACK_IMPORTED_MODULE_12__selection__["a" /* default */],
  transition: __WEBPACK_IMPORTED_MODULE_16__transition__["a" /* default */],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_8__on__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* default */],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* default */],
  styleTween: __WEBPACK_IMPORTED_MODULE_14__styleTween__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_15__text__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_9__remove__["a" /* default */],
  tween: __WEBPACK_IMPORTED_MODULE_17__tween__["a" /* default */],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay__["a" /* default */],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration__["a" /* default */],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease__["a" /* default */]
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;
exports.has = has;
exports.intersects = intersects;
exports.push = push;
exports.prepend = prepend;
exports.pop = pop;
exports.getNormalized = getNormalized;
exports.roundRobin = roundRobin;
exports.transposedForEach = transposedForEach;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function remove(list, ob) {
  var i = list.indexOf(ob);
  if (i >= 0) list.splice(list.indexOf(ob), 1);
}

function has(list, ob) {
  return list.indexOf(ob) >= 0;
}

function intersects(list, obs) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = obs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ob = _step.value;

      if (has(list, ob)) return true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

function push(list, ob) {
  list.push(ob);
}

function prepend(list, ob) {
  list.splice(0, 0, ob);
}

function pop(list) {
  return list.splice(0, 1)[0];
}

function getNormalized(xs, normalizedIndex) {
  var i = Math.floor(xs.length * normalizedIndex);
  if (i >= xs.length) i = xs.length - 1;
  return xs[i];
}

function roundRobin(xs, lastIndex, accept) {
  if (lastIndex >= xs.length) lastIndex = xs.length - 1;
  var i = void 0;
  for (i = lastIndex + 1; i < xs.length; i++) {
    if (accept(xs[i])) return i;
  }
  for (i = 0; i <= lastIndex; i++) {
    if (accept(xs[i])) return i;
  }
  return lastIndex;
}

function transposedForEach(table, fn) {
  var xss = [].concat(_toConsumableArray(table));
  var stop = false;
  var stopIteration = function stopIteration() {
    stop = true;
  };
  var nRows = xss.map(function (xs) {
    return xs.length;
  }).reduce(function (a, b) {
    return a > b ? a : b;
  }, 0);
  for (var row = 0; !stop && row < nRows; row++) {
    for (var col = 0; !stop && col < xss.length;) {
      var xs = xss[col];
      if (row < xs.length) {
        var x = xs[row];
        fn(x, col, row, stopIteration);
        col += 1;
      } else {
        // This column is exhausted; may as well remove it.
        xss.splice(col, 1);
      }
    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch__["a"]; });



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Math.random();
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(126);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_nest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_set__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__src_values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_entries__["a"]; });








/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function spherical(cartesian) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(cartesian[1], cartesian[0]), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  return [cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x),
        cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x),
      k * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c),
        cc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(c);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x * sc, z * cc),
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(453);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["B" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["z" /* tickIncrement */])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["z" /* tickIncrement */])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["z" /* tickIncrement */])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["m" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__src_interval__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(459);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(460);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(461);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(462);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(464);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(465);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(466);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(467);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(469);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(470);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(471);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["b"]; });































/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return circles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return edges; });
/* harmony export (immutable) */ __webpack_exports__["d"] = Diagram;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Beach__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edge__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__ = __webpack_require__(97);






var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__["b" /* default */];
  circles = new __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__["b" /* default */];

  while (true) {
    circle = __WEBPACK_IMPORTED_MODULE_2__Circle__["c" /* firstCircle */];
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        Object(__WEBPACK_IMPORTED_MODULE_0__Beach__["a" /* addBeach */])(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      Object(__WEBPACK_IMPORTED_MODULE_0__Beach__["b" /* removeBeach */])(circle.arc);
    } else {
      break;
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["d" /* sortCellHalfedges */])();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["a" /* clipEdges */])(x0, y0, x1, y1);
    Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["b" /* clipCells */])(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["a" /* cellHalfedgeStart */])(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QNode2 = __webpack_require__(54);

var _QNode3 = _interopRequireDefault(_QNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Server = function (_QNode) {
  _inherits(Server, _QNode);

  function Server() {
    _classCallCheck(this, Server);

    var _this = _possibleConstructorReturn(this, (Server.__proto__ || Object.getPrototypeOf(Server)).call(this));

    _this.addTags('server');
    _this.client = null;
    _this.lastFetchedFrom = 0;
    _this.lastPushedTo = 0;
    _this.serviceCharacteristic = null;
    return _this;
  }

  _createClass(Server, [{
    key: 'withServiceCharacteristic',
    value: function withServiceCharacteristic(name) {
      this.serviceCharacteristic = name;
      return this;
    }
  }, {
    key: 'getCapacity',
    value: function getCapacity() {
      return 1;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.open;
    }
  }, {
    key: 'pushClient',
    value: function pushClient(client) {
      if (this.client) throw new Error('Server is busy');
      this.client = client;
      client.serverKey = this.key;
    }
  }, {
    key: 'popClient',
    value: function popClient() {
      var client = this.client;
      this.client = null;
      client.serverKey = null;
      return client;
    }
  }, {
    key: 'accept',
    value: function accept(visitor, depth) {
      visitor.visitServer && visitor.visitServer(this, depth);
      _QNode3.default.prototype.accept.call(this, visitor, depth);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Server(' + (this.label || this.tags) + ')';
    }
  }]);

  return Server;
}(_QNode3.default);

exports.default = Server;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_timeout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_interval__["a"]; });







/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(7);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(node, id).value[name];
  };
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(80);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]) ? (deltaPhi || deltaGamma ? Object(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaPhi),
      sinDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaPhi),
      cosDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaGamma),
      sinDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(3);






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 0 : 3
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 2 : 1
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(__WEBPACK_IMPORTED_MODULE_1__buffer__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["n" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(__WEBPACK_IMPORTED_MODULE_3__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(__WEBPACK_IMPORTED_MODULE_2__line__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transformer;
/* harmony default export */ __webpack_exports__["a"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(89);


/* harmony default export */ __webpack_exports__["a"] = (function(defaultMimeType, response) {
  return function(url, callback) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url).mimeType(defaultMimeType).response(response);
    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }
    return r;
  };
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(163);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["r" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
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
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = (function(context) {
  return new Basis(context);
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _arrays = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NamedObject = function () {
  function NamedObject() {
    _classCallCheck(this, NamedObject);

    this.key = this.constructor.name + '-' + NamedObject.counter++;
    this.tags = [];
    this.label = null;
  }

  _createClass(NamedObject, [{
    key: 'addTags',
    value: function addTags() {
      [].slice.call(arguments).forEach(function (tag) {
        if (!(0, _arrays.has)(this.tags, tag)) (0, _arrays.push)(this.tags, tag);
      }, this);
      return this;
    }
  }, {
    key: 'withLabel',
    value: function withLabel(label) {
      this.label = label;
      return this;
    }
  }]);

  return NamedObject;
}();

exports.default = NamedObject;


NamedObject.counter = 0;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NamedObject2 = __webpack_require__(53);

var _NamedObject3 = _interopRequireDefault(_NamedObject2);

var _arrays = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QNode = function (_NamedObject) {
  _inherits(QNode, _NamedObject);

  function QNode() {
    _classCallCheck(this, QNode);

    var _this = _possibleConstructorReturn(this, (QNode.__proto__ || Object.getPrototypeOf(QNode)).call(this));

    _this.inputs = [];
    _this.outputs = [];
    _this.open = true;
    return _this;
  }

  _createClass(QNode, [{
    key: 'addTags',
    value: function addTags() {
      [].slice.call(arguments).forEach(function (tag) {
        if (!(0, _arrays.has)(this.tags, tag)) (0, _arrays.push)(this.tags, tag);
      }, this);
      return this;
    }
  }, {
    key: 'withLabel',
    value: function withLabel(label) {
      this.label = label;
      return this;
    }
  }, {
    key: 'withInput',
    value: function withInput(node) {
      (0, _arrays.push)(this.inputs, node);
      (0, _arrays.push)(node.outputs, this);
      return this;
    }
  }, {
    key: 'withOutput',
    value: function withOutput(node) {
      (0, _arrays.push)(this.outputs, node);
      (0, _arrays.push)(node.inputs, this);
      return this;
    }
  }, {
    key: 'accept',
    value: function accept(visitor, depth) {
      visitor.visitNode && visitor.visitNode(this, depth);
    }
  }]);

  return QNode;
}(_NamedObject3.default);

exports.default = QNode;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDuration = formatDuration;
exports.parseDuration = parseDuration;
function formatDuration(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  var seconds = totalSeconds - hours * 3600 - minutes * 60;
  var minutesStr = minutes < 10 ? '0' + minutes : '' + minutes;
  var secondsStr = seconds < 10 ? '0' + seconds : '' + seconds;
  return hours + ':' + minutesStr + ':' + secondsStr;
}

function parseDuration(duration) {
  var components = duration.split(':');
  var hours = parseInt(components[0], 10);
  var minutes = parseInt(components[1], 10);
  var seconds = components.length > 2 ? parseInt(components[2], 10) : 0;
  return seconds + 60 * minutes + 60 * 60 * hours;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interpolate = __webpack_require__(225);

Object.defineProperty(exports, 'lerp', {
  enumerable: true,
  get: function get() {
    return _interpolate.lerp;
  }
});
Object.defineProperty(exports, 'unlerp', {
  enumerable: true,
  get: function get() {
    return _interpolate.unlerp;
  }
});
Object.defineProperty(exports, 'interpolate', {
  enumerable: true,
  get: function get() {
    return _interpolate.interpolate;
  }
});
Object.defineProperty(exports, 'curryInterpolate', {
  enumerable: true,
  get: function get() {
    return _interpolate.curryInterpolate;
  }
});
var MAX_INT = exports.MAX_INT = Math.pow(2, 52);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_drag__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_drag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_nodrag__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["b"]; });




/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(61);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(61);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(63);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["c" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["a"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(126);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(69);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transition_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_interrupt__["a"]; });






/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = now;
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["c"] = timer;
/* harmony export (immutable) */ __webpack_exports__["d"] = timerFlush;
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dsv__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(347);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["b"]; });





/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns;
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return (Math.random() - 0.5) * 1e-6;
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_quadtree__ = __webpack_require__(351);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_quadtree__["a"]; });



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(369);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(375);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(376);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(377);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__(394);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0), n = (sy0 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return Object(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c - 2 * n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)) / n;
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x *= n), r0 - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(r0y)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(r0y), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] / 3,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  return p;
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitSize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__(152);



function fitExtent(projection, extent, object) {
  var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      clip = projection.clipExtent && projection.clipExtent();

  projection
      .scale(150)
      .translate([0, 0]);

  if (clip != null) projection.clipExtent(null);

  Object(__WEBPACK_IMPORTED_MODULE_0__stream__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */]));

  var b = __WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */].result(),
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

  if (clip != null) projection.clipExtent(clip);

  return projection
      .scale(k * 150)
      .translate([x, y]);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(9);




function mercatorRaw(lambda, phi) {
  return [lambda, Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
});

function mercatorProjection(project) {
  var m = Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] * scale(),
        t = m(Object(__WEBPACK_IMPORTED_MODULE_1__rotation__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hierarchy;
/* harmony export (immutable) */ __webpack_exports__["b"] = computeHeight;
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eachBefore__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eachAfter__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sum__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sort__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ancestors__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__descendants__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leaves__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__links__ = __webpack_require__(418);












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: __WEBPACK_IMPORTED_MODULE_0__count__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_1__each__["a" /* default */],
  eachAfter: __WEBPACK_IMPORTED_MODULE_3__eachAfter__["a" /* default */],
  eachBefore: __WEBPACK_IMPORTED_MODULE_2__eachBefore__["a" /* default */],
  sum: __WEBPACK_IMPORTED_MODULE_4__sum__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_5__sort__["a" /* default */],
  path: __WEBPACK_IMPORTED_MODULE_6__path__["a" /* default */],
  ancestors: __WEBPACK_IMPORTED_MODULE_7__ancestors__["a" /* default */],
  descendants: __WEBPACK_IMPORTED_MODULE_8__descendants__["a" /* default */],
  leaves: __WEBPACK_IMPORTED_MODULE_9__leaves__["a" /* default */],
  links: __WEBPACK_IMPORTED_MODULE_10__links__["a" /* default */],
  copy: node_copy
};


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optional;
/* harmony export (immutable) */ __webpack_exports__["b"] = required;
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return phi; });
/* harmony export (immutable) */ __webpack_exports__["c"] = squarifyRatio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(46);



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["a"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_dispatch__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = (function(url, callback) {
  var request,
      event = Object(__WEBPACK_IMPORTED_MODULE_1_d3_dispatch__["a" /* dispatch */])("beforesend", "progress", "load", "error"),
      mimeType,
      headers = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["c" /* map */])(),
      xhr = new XMLHttpRequest,
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0;

  // If IE does not support CORS, use XDomainRequest.
  if (typeof XDomainRequest !== "undefined"
      && !("withCredentials" in xhr)
      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

  "onload" in xhr
      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

  function respond(o) {
    var status = xhr.status, result;
    if (!status && hasResponse(xhr)
        || status >= 200 && status < 300
        || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }
      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function(e) {
    event.call("progress", request, e);
  };

  request = {
    header: function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);
      else headers.set(name, value + "");
      return request;
    },

    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },

    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },

    timeout: function(value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },

    user: function(value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },

    password: function(value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },

    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function(value) {
      response = value;
      return request;
    },

    // Alias for send("GET", …).
    get: function(data, callback) {
      return request.send("GET", data, callback);
    },

    // Alias for send("POST", …).
    post: function(data, callback) {
      return request.send("POST", data, callback);
    },

    // If callback is non-null, it will be used for error and load events.
    send: function(method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },

    abort: function() {
      xhr.abort();
      return request;
    },

    on: function() {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
});

function fixCallback(callback) {
  return function(error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text"
      ? xhr.response // null on error
      : xhr.responseText; // "" on error
}


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(167);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(93);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(52);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return utcParse; });
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(183);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RedBlackNode;
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ __webpack_exports__["b"] = (RedBlackTree);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createEdge;
/* harmony export (immutable) */ __webpack_exports__["b"] = createBorderEdge;
/* harmony export (immutable) */ __webpack_exports__["d"] = setEdgeEnd;
/* harmony export (immutable) */ __webpack_exports__["a"] = clipEdges;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Diagram__ = __webpack_require__(37);


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */].push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  __WEBPACK_IMPORTED_MODULE_0__Diagram__["b" /* cells */][left.index].halfedges.push(index);
  __WEBPACK_IMPORTED_MODULE_0__Diagram__["b" /* cells */][right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */].length,
      edge;

  while (i--) {
    if (!connectEdge(edge = __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */][i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > __WEBPACK_IMPORTED_MODULE_0__Diagram__["f" /* epsilon */]
            || Math.abs(edge[0][1] - edge[1][1]) > __WEBPACK_IMPORTED_MODULE_0__Diagram__["f" /* epsilon */])) {
      delete __WEBPACK_IMPORTED_MODULE_0__Diagram__["e" /* edges */][i];
    }
  }
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NRange = function () {
  function NRange(min, max) {
    _classCallCheck(this, NRange);

    this.min = min !== undefined ? min : null;
    this.max = max !== undefined ? max : null;
    this.reset();
  }

  _createClass(NRange, [{
    key: "reset",
    value: function reset() {
      this.min = NaN;
      this.max = NaN;
    }
  }, {
    key: "add",
    value: function add(x) {
      this.min = this.min <= x ? this.min : x;
      this.max = this.max >= x ? this.max : x;
      return this;
    }
  }, {
    key: "union",
    value: function union(other) {
      this.min = this.min <= other.min ? this.min : other.min;
      this.max = this.max >= other.max ? this.max : other.max;
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.min, this.max];
    }
  }]);

  return NRange;
}();

exports.default = NRange;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NamedObject2 = __webpack_require__(53);

var _NamedObject3 = _interopRequireDefault(_NamedObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_NamedObject) {
  _inherits(Client, _NamedObject);

  function Client(name, arrivalTime, jitter) {
    _classCallCheck(this, Client);

    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this));

    _this.name = name;
    _this.addTags('client');
    _this.arrivalTime = arrivalTime;
    _this.jitter = jitter;
    _this.demands = {};
    _this.initialDemands = {};
    _this.serverKey = null;
    _this.queueKey = null;
    return _this;
  }

  _createClass(Client, [{
    key: 'withDemands',
    value: function withDemands(demands) {
      this.demands = demands;
      this.initialDemands = _extends({}, demands);
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '' + this.name;
    }
  }]);

  return Client;
}(_NamedObject3.default);

exports.default = Client;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(199);

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(200);

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(201);

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(202);

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(203);

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(204);

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(205);

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _peopleNames = __webpack_require__(209);

var _seedrandom = __webpack_require__(101);

var _seedrandom2 = _interopRequireDefault(_seedrandom);

var _Client = __webpack_require__(100);

var _Client2 = _interopRequireDefault(_Client);

var _arrays = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var allNames = [].concat(_toConsumableArray(_peopleNames.allDe), _toConsumableArray(_peopleNames.allEn), _toConsumableArray(_peopleNames.allEs), _toConsumableArray(_peopleNames.allFr), _toConsumableArray(_peopleNames.allIt));

var SolverStep = function () {
  function SolverStep(stepSize, time, arrivalRules, serviceRules, downstreamServiceMap) {
    _classCallCheck(this, SolverStep);

    this.stepSize = stepSize;
    this.time = time;
    this.arrivalRules = arrivalRules;
    this.serviceRules = serviceRules;
    this.downstreamServiceMap = downstreamServiceMap;
    this.random = (0, _seedrandom2.default)('' + time);
    this.arrivals = 0;
  }

  _createClass(SolverStep, [{
    key: 'visitSource',
    value: function visitSource(source) {
      if (source.client) return;
      var time = this.time;
      var arrivalCharacteristic = this.arrivalRules[source.arrivalCharacteristic];
      var rate = arrivalCharacteristic.sampler(time) * this.stepSize;
      if (this.random() < 1.0 - rate) return;
      var name = (0, _arrays.getNormalized)(allNames, this.random());
      var client = new _Client2.default(name, time, this.random()).withDemands(arrivalCharacteristic.demandFactory());
      source.pushClient(client);
      this.arrivals += 1;
      // console.info(`Arrival: ${source.client} at ${source}`);
    }
  }, {
    key: 'visitSink',
    value: function visitSink(sink) {
      if (!sink.client) return;
      // console.info(`Departure: ${sink.client} from ${sink}`);
      sink.popClient();
    }
  }, {
    key: 'visitServer',
    value: function visitServer(server) {
      var _this = this;

      if (!server.client) {
        server.lastFetchedFrom = (0, _arrays.roundRobin)(server.inputs, server.lastFetchedFrom, function (queue) {
          if (!queue.canYeild(_this.time)) return false;
          var client = queue.popClient(_this.time);
          server.client = client;
          // console.info(`${server} beginning to serve ${server.client}`);
          return true;
        });
      }
      if (!server.client) return;

      // console.info(`${server} serving ${server.client}`);
      var complete = this.processDemands(server);
      if (complete && server.outputs.length) {
        var unmetDemands = Object.keys(server.client.demands).filter(function (demand) {
          return !!server.client.demands[demand];
        });
        var targetQueue = server.outputs.filter(function (queue) {
          return queue.hasCapacity();
        }).filter(function (queue) {
          var downstreamServices = _this.downstreamServiceMap[queue.key];

          for (var i = 0; i < unmetDemands.length; i++) {
            var demand = unmetDemands[i];
            if (!downstreamServices.has(demand)) return false;
          }
          return true;
        }).reduce(function (a, b) {
          return a && a.clients.length < b.clients.length ? a : b;
        }, null);
        if (targetQueue) {
          // console.info(`${server} finished serving ${server.client}`);
          var client = server.popClient(this.time);
          targetQueue.pushClient(client, this.time);
        }
      }
    }
  }, {
    key: 'processDemands',
    value: function processDemands(server) {
      var services = this.serviceRules[server.serviceCharacteristic];
      var satisfied = true;
      var demands = server.client.demands;
      for (var name in services) {
        if (demands[name] > 0 && services[name]) {
          satisfied = false;
          demands[name] -= services[name].rate * this.stepSize;
          if (demands[name] < 0) demands[name] = 0;
          break;
        }
      }
      return satisfied;
    }
  }, {
    key: 'visitQueue',
    value: function visitQueue() /* queue */{
      // console.info(`${queue.clients.length} waiting in ${queue}`);
    }
  }]);

  return SolverStep;
}();

exports.default = SolverStep;

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_package__ = __webpack_require__(228);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_0__build_package__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_array__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["E"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_axis__ = __webpack_require__(245);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_brush__ = __webpack_require__(249);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brush", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brushSelection", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_chord__ = __webpack_require__(335);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return __WEBPACK_IMPORTED_MODULE_4_d3_chord__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ribbon", function() { return __WEBPACK_IMPORTED_MODULE_4_d3_chord__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_collection__ = __webpack_require__(27);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_color__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_dispatch__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return __WEBPACK_IMPORTED_MODULE_7_d3_dispatch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_drag__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return __WEBPACK_IMPORTED_MODULE_8_d3_drag__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return __WEBPACK_IMPORTED_MODULE_8_d3_drag__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return __WEBPACK_IMPORTED_MODULE_8_d3_drag__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_dsv__ = __webpack_require__(74);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_dsv__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_ease__ = __webpack_require__(133);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_ease__["s"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_force__ = __webpack_require__(348);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceCenter", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceCollide", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceLink", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceManyBody", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceRadial", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceSimulation", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceX", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceY", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_force__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3_format__ = __webpack_require__(79);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "format", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_format__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3_geo__ = __webpack_require__(378);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_geo__["S"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__ = __webpack_require__(406);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_hierarchy__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_interpolate__["w"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3_path__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_path__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3_polygon__ = __webpack_require__(428);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonArea", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_polygon__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonCentroid", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_polygon__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonHull", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_polygon__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonContains", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_polygon__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonLength", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_polygon__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_d3_quadtree__ = __webpack_require__(77);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "quadtree", function() { return __WEBPACK_IMPORTED_MODULE_18_d3_quadtree__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3_queue__ = __webpack_require__(435);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return __WEBPACK_IMPORTED_MODULE_19_d3_queue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_d3_random__ = __webpack_require__(438);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomUniform", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_random__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomNormal", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_random__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLogNormal", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_random__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomBates", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_random__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomIrwinHall", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_random__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomExponential", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_random__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_d3_request__ = __webpack_require__(443);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "request", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "html", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "json", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "text", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_request__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_d3_scale__ = __webpack_require__(450);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["s"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_d3_selection__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_selection__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_d3_shape__ = __webpack_require__(483);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_shape__["O"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_d3_time__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_time__["_8"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_d3_time_format__ = __webpack_require__(508);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time_format__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_d3_timer__ = __webpack_require__(40);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "now", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_timer__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_timer__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_timer__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_timer__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_timer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3_transition__ = __webpack_require__(71);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_transition__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_transition__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_transition__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_d3_voronoi__ = __webpack_require__(510);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "voronoi", function() { return __WEBPACK_IMPORTED_MODULE_29_d3_voronoi__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_d3_zoom__ = __webpack_require__(515);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return __WEBPACK_IMPORTED_MODULE_30_d3_zoom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return __WEBPACK_IMPORTED_MODULE_30_d3_zoom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zoomIdentity", function() { return __WEBPACK_IMPORTED_MODULE_30_d3_zoom__["b"]; });

































/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bisectLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(105);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["c"] = (bisectRight);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(21);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = pair;
/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(108);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(114);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["b"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(66);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = yesdrag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noevent__ = __webpack_require__(122);



/* harmony default export */ __webpack_exports__["a"] = (function(view) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["i" /* select */])(view).on("dragstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["i" /* select */])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["c" /* event */].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["c" /* event */].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["c" /* event */].stopImmediatePropagation();
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rgbBasisClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(26);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(70);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(67);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(nb),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(67);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(39);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["d" /* STARTING */] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["b" /* ENDING */];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["a" /* ENDED */];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["m" /* interpolateNumber */]
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["o" /* interpolateRgb */]
      : (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["o" /* interpolateRgb */])
      : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["s" /* interpolateString */])(a, b);
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(324);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(325);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(328);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["b"]; });





















/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sin; });
/* unused harmony export pi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return max; });
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = x;
/* harmony export (immutable) */ __webpack_exports__["c"] = y;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_timer__ = __webpack_require__(40);




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ __webpack_exports__["a"] = (function(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = Object(__WEBPACK_IMPORTED_MODULE_1_d3_collection__["c" /* map */])(),
      stepper = Object(__WEBPACK_IMPORTED_MODULE_2_d3_timer__["d" /* timer */])(step),
      event = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick() {
    var i, n = nodes.length, node;

    alpha += (alphaTarget - alpha) * alphaDecay;

    forces.each(function(force) {
      force(alpha);
    });

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (node.fx == null) node.x += node.vx *= velocityDecay;
      else node.x = node.fx, node.vx = 0;
      if (node.fy == null) node.y += node.vy *= velocityDecay;
      else node.y = node.fy, node.vy = 0;
    }
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTypes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity__ = __webpack_require__(374);








var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_4__formatTypes__["a" /* default */][type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatTypes__ = __webpack_require__(138);


// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!__WEBPACK_IMPORTED_MODULE_0__formatTypes__["a" /* default */][type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDefault__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded__ = __webpack_require__(373);




/* harmony default export */ __webpack_exports__["a"] = ({
  "": __WEBPACK_IMPORTED_MODULE_0__formatDefault__["a" /* default */],
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(80);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(16);





var areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]), sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(adLambda),
      v = k * sdLambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(adLambda);
  areaRingSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["c"] = (function(object) {
  areaSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__(43);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      sinRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])([cosRadius, -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(t), -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(point), point[0] -= cosRadius;
  Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianNormalizeInPlace */])(point);
  var radius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  var center = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([0, 0]),
      radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(90),
      precision = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */];
    ring = [];
    rotate = Object(__WEBPACK_IMPORTED_MODULE_3__rotation__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */],
          delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - lambda0);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) { // line crosses antimeridian
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; // handle degeneracies
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0 - lambda1);
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]
      ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* atan */])((Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi0) * (cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi1)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda1)
          - Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi1) * (cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi0)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(3);






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(__WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["n" /* merge */])(segments);
        var startInside = Object(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - b[1]);
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__(147);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */];
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);




var sum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(lambda), -Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
        sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi0),
        cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
          sinPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi1),
          cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* atan2 */])(k * sign * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point0), Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point1));
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(arc);
        var intersection = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(normal, arc);
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) ^ (winding & 1);
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(144);






/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var cr = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(__WEBPACK_IMPORTED_MODULE_1__circle__["a" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point2) || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(a),
        pb = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(pa, pb),
        n2n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(n1, n2),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n1, c1),
        B = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n2, c2);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, u),
        uu = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(__WEBPACK_IMPORTED_MODULE_2__math__["u" /* sqrt */])(t2),
        q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w - t) / uu);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q, A);
    q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w + t) / uu);
      Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q1, A);
      return [q, Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]]);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__(151);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(__WEBPACK_IMPORTED_MODULE_0__length__["a" /* default */])(object);
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(16);





var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi), cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda - lambda0),
      cosDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(delta),
      sinDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(12);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__(82);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["b" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(9);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = packEnclose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enclose__ = __webpack_require__(156);


function place(a, b, c) {
  var ax = a.x,
      ay = a.y,
      da = b.r + c.r,
      db = a.r + c.r,
      dx = b.x - ax,
      dy = b.y - ay,
      dc = dx * dx + dy * dy;
  if (dc) {
    var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
        y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
    c.x = ax + x * dx + y * dy;
    c.y = ay + x * dy - y * dx;
  } else {
    c.x = ax + db;
    c.y = ay;
  }
}

function intersects(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r + b.r;
  return dr * dr - 1e-6 > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(__WEBPACK_IMPORTED_MODULE_0__enclose__["a" /* default */])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* harmony default export */ __webpack_exports__["a"] = (function(circles) {
  packEnclose(circles);
  return circles;
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(420);


/* harmony default export */ __webpack_exports__["a"] = (function(circles) {
  var i = 0, n = (circles = Object(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* shuffle */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = constantZero;
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["b"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum = 0, i = 0; i < n; ++i) sum += source();
      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["a" /* default */]));


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(89);


/* harmony default export */ __webpack_exports__["a"] = (function(defaultMimeType, parse) {
  return function(url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url).mimeType(defaultMimeType);
    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
    r.row(row);
    return callback ? r.get(callback) : r;
  };
});

function responseOf(parse, row) {
  return function(request) {
    return parse(request.responseText, row);
  };
}


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(17);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["c" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["c" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(164);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["m" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["e" /* bisector */])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["A" /* tickStep */])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["A" /* tickStep */])(start, stop, interval);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["D" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["B" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["e" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["h" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(91);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(167);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(168);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(473);
/* unused harmony reexport isoParse */






/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(32);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["P" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["P" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["F" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["F" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["X" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["Z" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["Z" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["Z" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["P" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(91);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(93);






/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["b"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(49);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(92);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]));
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */]);
  }
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(34);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(52);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(52);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(32);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "S": formatSeconds,
    "U": formatWeekNumberSunday,
    "w": formatWeekdayNumber,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "S": formatUTCSeconds,
    "U": formatUTCWeekNumberSunday,
    "w": formatUTCWeekdayNumber,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "S": parseSeconds,
    "U": parseWeekNumberSunday,
    "w": parseWeekdayNumber,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0);
      if (i != string.length) return null;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
        var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d), p, 2);
}

function formatWeekdayNumber(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["D" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["F" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["X" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekdayNumber(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["P" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["_7" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(96);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["d" /* utcFormat */])(isoSpecifier);

/* harmony default export */ __webpack_exports__["a"] = (formatIso);


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createCell;
/* harmony export (immutable) */ __webpack_exports__["a"] = cellHalfedgeStart;
/* unused harmony export cellHalfedgeEnd */
/* harmony export (immutable) */ __webpack_exports__["d"] = sortCellHalfedges;
/* harmony export (immutable) */ __webpack_exports__["b"] = clipCells;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Edge__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Diagram__ = __webpack_require__(37);



function createCell(site) {
  return __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */].length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */].length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!__WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */][halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] || Math.abs(endY - startY) > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */]) {
          halfedges.splice(iHalfedge, 0, __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, end,
              Math.abs(endX - x0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && y1 - endY > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [x0, Math.abs(startX - x0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startY : y1]
              : Math.abs(endY - y1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && x1 - endX > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [Math.abs(startY - y1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startX : x1, y1]
              : Math.abs(endX - x1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && endY - y0 > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [x1, Math.abs(startX - x1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startY : y0]
              : Math.abs(endY - y0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] && endX - x0 > __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? [Math.abs(startY - y0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["f" /* epsilon */] ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site = cover.site, v00, v01)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, v01, v11)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, v11, v10)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["e" /* edges */].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["b" /* createBorderEdge */])(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell]) {
      if (!cell.halfedges.length) {
        delete __WEBPACK_IMPORTED_MODULE_1__Diagram__["b" /* cells */][iCell];
      }
    }
  }
}


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firstCircle; });
/* harmony export (immutable) */ __webpack_exports__["a"] = attachCircle;
/* harmony export (immutable) */ __webpack_exports__["b"] = detachCircle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RedBlackTree__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Diagram__ = __webpack_require__(37);



var circlePool = [];

var firstCircle;

function Circle() {
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["a" /* RedBlackNode */])(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -__WEBPACK_IMPORTED_MODULE_1__Diagram__["g" /* epsilon2 */]) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = __WEBPACK_IMPORTED_MODULE_1__Diagram__["c" /* circles */]._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  __WEBPACK_IMPORTED_MODULE_1__Diagram__["c" /* circles */].insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    __WEBPACK_IMPORTED_MODULE_1__Diagram__["c" /* circles */].remove(circle);
    circlePool.push(circle);
    Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["a" /* RedBlackNode */])(circle);
    arc.circle = null;
  }
}


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return identity; });
/* harmony export (immutable) */ __webpack_exports__["b"] = transform;
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  return node.__zoom || identity;
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCheckout = addCheckout;
exports.closeCheckout = closeCheckout;

var _timeNow = __webpack_require__(189);

var _timeNow2 = _interopRequireDefault(_timeNow);

var _model = __webpack_require__(190);

var _solve = __webpack_require__(196);

var _math = __webpack_require__(56);

var _render = __webpack_require__(226);

var _QueueSimulator = __webpack_require__(521);

var _QueueSimulator2 = _interopRequireDefault(_QueueSimulator);

var _parameters = __webpack_require__(525);

var _main = __webpack_require__(526);

var _main2 = _interopRequireDefault(_main);

var _logo = __webpack_require__(531);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
var logoImg = document.getElementById('logo');
logoImg.src = _logo2.default;

function modelFactory() {
  var source = new _model.Source().withLabel('source').addTags('hidden').withArrivalCharacteristic('standard');
  var exit = new _model.Sink().withLabel('exit').addTags('hidden');
  var exitQueue = new _model.Queue(1.0).addTags('exit').withOutput(exit);

  var model = new _model.Model().withStartTime('6:00').withEndTime('24:00').addRoot(exit);

  var selfServeQueue = new _model.Queue(1.0).addTags('waiting').withInput(source);
  new _model.Server().withLabel('Self serve').withInput(selfServeQueue).withOutput(exitQueue).withServiceCharacteristic('self-serve');
  new _model.Server().withLabel('Self serve').withInput(selfServeQueue).withOutput(exitQueue).withServiceCharacteristic('self-serve');
  new _model.Server().withLabel('Self serve').withInput(selfServeQueue).withOutput(exitQueue).withServiceCharacteristic('self-serve');
  new _model.Server().withLabel('Self serve').withInput(selfServeQueue).withOutput(exitQueue).withServiceCharacteristic('self-serve');

  addCheckout(model);
  addCheckout(model);

  model.addRoot(new _model.MobileServer().addTags('customer-service-rep').withServiceCharacteristic('customer-service-rep').withTargetCharacteristic('customer-service-rep'));
  return model;
}

function solverFactory() {
  return new _solve.Solver(1.0).addArrivalRule('standard', (0, _math.curryInterpolate)(_parameters.ARRIVALS.times, _parameters.ARRIVALS.rates), function () {
    return { appliances: 2, clothes: 3, question: 1, pay: 1 };
  }).addServiceRule('self-serve', {
    appliances: { rate: 1 / 4 },
    clothes: { rate: 1 / 10 },
    question: { rate: 1 / 15 },
    pay: { rate: 1 / 25 }
  }).addServiceRule('checkout', {
    appliances: { rate: 1 / 2 },
    clothes: { rate: 1 / 5 },
    question: { rate: 1 / 5 },
    pay: { rate: 1 / 20 }
  }).addServiceRule('customer-service-rep', {
    question: { rate: 1 / 5 }
  }).addTargetRule('customer-service-rep', {
    queueTags: ['waiting'],
    serveWhen: '!beingServed and positionInQueue >= 3',
    leaveWhen: 'beingServed or positionInQueue < 2'
  });
}

function visFactories() {
  return [new _render.ColumnVis('#column-vis'), new _render.StatsChart('#stats-chart1', ['nWaiting', 'nClients']), new _render.StatsChart('#stats-chart2', ['nServing']), new _render.StatsChart('#stats-chart3', ['arrivalRate'])];
}

var simulator = void 0;

function init() {
  simulator = new _QueueSimulator2.default(_timeNow2.default, modelFactory, solverFactory, visFactories);
  simulator.frameRate = 30;
  simulator.tickRate = 256;
  simulator.reset();
  simulator.model.prettyPrint();
}
init();

function addCheckout(model) {
  var checkouts = model.filter(function (node) {
    return node.label === 'Checkout';
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = checkouts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var checkout = _step.value;

      if (!checkout.open) {
        checkout.open = true;
        return checkout;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var source = model.filter(function (node) {
    return node.label === 'source';
  })[0];
  var exitQueue = model.filter(function (node) {
    return node.label === 'exit';
  })[0].inputs[0];
  return new _model.Server().withLabel('Checkout').addTags('checkout').withServiceCharacteristic('checkout').withInput(new _model.Queue(1.0).addTags('waiting').withInput(source)).withOutput(exitQueue);
}

function closeCheckout(model) {
  var openCheckouts = model.filter(function (node) {
    return node.label === 'Checkout' && node.open;
  });
  if (!openCheckouts.length) return;
  var checkout = openCheckouts[openCheckouts.length - 1];
  checkout.open = false;
}

function step() {
  simulator.stepSimSingle();
  simulator.render();
}

function restart() {
  simulator.reset();
  simulator.start();
}

function faster() {
  var tickRate = simulator.tickRate * 2;
  if (tickRate > 100000) tickRate = 100000;
  simulator.setTickRate(tickRate);
}

function slower() {
  var tickRate = simulator.tickRate / 2;
  if (tickRate < 1) tickRate = 1;
  simulator.setTickRate(tickRate);
}

window.addEventListener('load', function () {
  simulator.reset();
  simulator.start();
});

window.addEventListener('resize', function () {
  simulator.render();
});

document.addEventListener('keypress', function (event) {
  if (event.key === ' ' || event.keyCode === 32) {
    simulator.togglePause();
    event.preventDefault();
  } else if (event.key === '=' || event.keyCode === 61) {
    faster();
  } else if (event.key === '+' || event.keyCode === 43) {
    faster();
  } else if (event.key === '-' || event.keyCode === 45) {
    slower();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight' || event.keyCode === 39) {
    step();
  }
});
document.querySelector('#restart-btn').addEventListener('click', restart);
document.querySelector('#pause-btn').addEventListener('click', function () {
  simulator.togglePause();
  simulator.render();
});
document.querySelector('#step-btn').addEventListener('click', step);
document.querySelector('#faster-btn').addEventListener('click', faster);
document.querySelector('#slower-btn').addEventListener('click', slower);
document.querySelector('#add-checkout-btn').addEventListener('click', function () {
  addCheckout(simulator.model);
  simulator.render();
});
document.querySelector('#close-checkout-btn').addEventListener('click', function () {
  closeCheckout(simulator.model);
  simulator.render();
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (function() {
  var perf = window && window.performance;
  if (perf && perf.now) {
    return perf.now.bind(perf);
  } else {
    return function() {
      return new Date().getTime();
    };
  }
}());


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Client = __webpack_require__(100);

Object.defineProperty(exports, 'Client', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Client).default;
  }
});

var _MobileServer = __webpack_require__(191);

Object.defineProperty(exports, 'MobileServer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MobileServer).default;
  }
});

var _Model = __webpack_require__(192);

Object.defineProperty(exports, 'Model', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Model).default;
  }
});

var _NamedObject = __webpack_require__(53);

Object.defineProperty(exports, 'NamedObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NamedObject).default;
  }
});

var _QNode = __webpack_require__(54);

Object.defineProperty(exports, 'QNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_QNode).default;
  }
});

var _Queue = __webpack_require__(193);

Object.defineProperty(exports, 'Queue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Queue).default;
  }
});

var _Server = __webpack_require__(38);

Object.defineProperty(exports, 'Server', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Server).default;
  }
});

var _Sink = __webpack_require__(194);

Object.defineProperty(exports, 'Sink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sink).default;
  }
});

var _Source = __webpack_require__(195);

Object.defineProperty(exports, 'Source', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Source).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Server2 = __webpack_require__(38);

var _Server3 = _interopRequireDefault(_Server2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileServer = function (_Server) {
  _inherits(MobileServer, _Server);

  function MobileServer() {
    _classCallCheck(this, MobileServer);

    var _this = _possibleConstructorReturn(this, (MobileServer.__proto__ || Object.getPrototypeOf(MobileServer)).call(this));

    _this.addTags('mobile');
    _this.targetCharacteristic = 'standard';
    return _this;
  }

  _createClass(MobileServer, [{
    key: 'accept',
    value: function accept(visitor, depth) {
      visitor.visitMobileServer && visitor.visitMobileServer(this, depth);
      _Server3.default.prototype.accept.call(this, visitor, depth);
    }
  }, {
    key: 'withInput',
    value: function withInput() {
      throw "Mobile servers can't connect directly to queues.";
    }
  }, {
    key: 'withOutput',
    value: function withOutput() {
      throw "Mobile servers can't connect directly to queues.";
    }
  }, {
    key: 'withTargetCharacteristic',
    value: function withTargetCharacteristic(name) {
      this.targetCharacteristic = name;
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'MobileServer(' + (this.label || this.tags) + ')';
    }
  }]);

  return MobileServer;
}(_Server3.default);

exports.default = MobileServer;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _arrays = __webpack_require__(13);

var _time = __webpack_require__(55);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this.rootNodes = [];
    this.startTime = 0.0;
    this.endTime = 100.0;
    this.time = 0.0;
    this.tick = -1;
  }

  _createClass(Model, [{
    key: 'addRoot',
    value: function addRoot(node) {
      (0, _arrays.push)(this.rootNodes, node);
      return this;
    }
  }, {
    key: 'withStartTime',
    value: function withStartTime(time) {
      if (typeof time == 'string') time = (0, _time.parseDuration)(time);
      this.startTime = time;
      return this;
    }
  }, {
    key: 'withEndTime',
    value: function withEndTime(time) {
      if (typeof time == 'string') time = (0, _time.parseDuration)(time);
      this.endTime = time;
      return this;
    }
  }, {
    key: 'walk',
    value: function walk(visitor, depthFirst, allowRevisit) {
      var insertFn = depthFirst ? _arrays.prepend : _arrays.push;
      var visited = allowRevisit ? null : {};
      var queue = this.rootNodes.map(function (node) {
        return { depth: 0, node: node };
      });
      while (queue.length) {
        var entry = (0, _arrays.pop)(queue);
        entry.node.accept(visitor, entry.depth);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = entry.node.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var nextNode = _step.value;

            if (!allowRevisit) {
              if (visited[nextNode.key]) continue;
              visited[nextNode.key] = true;
            }
            insertFn(queue, { depth: entry.depth + 1, node: nextNode });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'filter',
    value: function filter(visitor) {
      var selection = [];
      function pushWhen(visitFn) {
        return function (node) {
          if (visitFn(node)) selection.push(node);
        };
      }
      var pushingVisitor = void 0;
      if (typeof visitor === 'function') {
        pushingVisitor = { visitNode: pushWhen(visitor) };
      } else {
        pushingVisitor = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = Object.keys(visitor)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            pushingVisitor[key] = pushWhen(visitor[key].bind(visitor));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      this.walk(pushingVisitor);
      return selection;
    }
  }, {
    key: 'prettyPrint',
    value: function prettyPrint() {
      console.info('model:');
      var visitor = {
        visitServer: function visitServer(server, depth) {
          console.info('  '.repeat(depth) + (server + ' serving ' + server.client));
        },
        visitQueue: function visitQueue(queue, depth) {
          console.info('  '.repeat(depth) + (queue + ': ' + queue.clients));
        }
      };
      this.walk(visitor, true, true);
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QNode2 = __webpack_require__(54);

var _QNode3 = _interopRequireDefault(_QNode2);

var _arrays = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queue = function (_QNode) {
  _inherits(Queue, _QNode);

  function Queue(throttle, capacity) {
    _classCallCheck(this, Queue);

    var _this = _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this));

    _this.addTags('queue');
    _this.throttle = throttle !== undefined ? throttle : 0.0;
    _this.capacity = capacity !== undefined ? capacity : Math.pow(2, 52);
    _this.clients = [];
    _this.lastPopTime = 0.0;
    return _this;
  }

  _createClass(Queue, [{
    key: 'accept',
    value: function accept(visitor, depth) {
      visitor.visitQueue && visitor.visitQueue(this, depth);
      _QNode3.default.prototype.accept.call(this, visitor, depth);
    }
  }, {
    key: 'hasCapacity',
    value: function hasCapacity() {
      return this.clients.length < this.capacity;
    }
  }, {
    key: 'pushClient',
    value: function pushClient(client, ctime) {
      if (ctime === undefined) throw new Error('Must provide current time');
      (0, _arrays.push)(this.clients, client);
      client.queueKey = this.key;
    }
  }, {
    key: 'popClient',
    value: function popClient(ctime) {
      var client = (0, _arrays.pop)(this.clients);
      this.lastPopTime = ctime;
      client.queueKey = null;
      return client;
    }
  }, {
    key: 'canYeild',
    value: function canYeild(ctime) {
      if (ctime === undefined) throw new Error('Must provide current time');
      if (!this.clients.length) return false;
      if (ctime - this.lastPopTime < this.throttle) return false;
      return true;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Queue(' + (this.label || this.tags) + ')';
    }
  }]);

  return Queue;
}(_QNode3.default);

exports.default = Queue;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Server2 = __webpack_require__(38);

var _Server3 = _interopRequireDefault(_Server2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sink = function (_Server) {
  _inherits(Sink, _Server);

  function Sink() {
    _classCallCheck(this, Sink);

    var _this = _possibleConstructorReturn(this, (Sink.__proto__ || Object.getPrototypeOf(Sink)).call(this));

    _this.addTags('sink');
    return _this;
  }

  _createClass(Sink, [{
    key: 'accept',
    value: function accept(visitor, depth) {
      visitor.visitSink && visitor.visitSink(this, depth);
      _Server3.default.prototype.accept.call(this, visitor, depth);
    }
  }, {
    key: 'withOutput',
    value: function withOutput() {
      throw "Sinks can't have output queues.";
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Sink(' + (this.label || this.tags) + ')';
    }
  }]);

  return Sink;
}(_Server3.default);

exports.default = Sink;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Server2 = __webpack_require__(38);

var _Server3 = _interopRequireDefault(_Server2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Source = function (_Server) {
  _inherits(Source, _Server);

  function Source() {
    _classCallCheck(this, Source);

    var _this = _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).call(this));

    _this.addTags('source');
    _this.arrivalCharacteristic = 'standard';
    return _this;
  }

  _createClass(Source, [{
    key: 'accept',
    value: function accept(visitor, depth) {
      visitor.visitSource && visitor.visitSource(this, depth);
      _Server3.default.prototype.accept.call(this, visitor, depth);
    }
  }, {
    key: 'withInput',
    value: function withInput() {
      throw "Sources can't have input queues.";
    }
  }, {
    key: 'withArrivalCharacteristic',
    value: function withArrivalCharacteristic(name) {
      this.arrivalCharacteristic = name;
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Source(' + (this.label || this.tags) + ')';
    }
  }]);

  return Source;
}(_Server3.default);

exports.default = Source;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Solver = __webpack_require__(197);

Object.defineProperty(exports, 'Solver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Solver).default;
  }
});

var _SolverStep = __webpack_require__(102);

Object.defineProperty(exports, 'SolverStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SolverStep).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MobileStep = __webpack_require__(198);

var _MobileStep2 = _interopRequireDefault(_MobileStep);

var _SolverStep = __webpack_require__(102);

var _SolverStep2 = _interopRequireDefault(_SolverStep);

var _arrays = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Solver = function () {
  function Solver(stepSize) {
    _classCallCheck(this, Solver);

    this.stepSize = stepSize;
    this.arrivalRules = {};
    this.serviceRules = {};
    this.targetRules = {};
  }

  _createClass(Solver, [{
    key: 'addArrivalRule',
    value: function addArrivalRule(characteristic, sampler, demandFactory) {
      this.arrivalRules[characteristic] = {
        sampler: sampler,
        demandFactory: demandFactory
      };
      return this;
    }
  }, {
    key: 'addServiceRule',
    value: function addServiceRule(characteristic, rule) {
      this.serviceRules[characteristic] = rule;
      return this;
    }
  }, {
    key: 'addTargetRule',
    value: function addTargetRule(characteristic, rule) {
      this.targetRules[characteristic] = rule;
      return this;
    }
  }, {
    key: 'initialize',
    value: function initialize(model, histories) {
      histories.add({
        nWaiting: 'Waiting',
        nServing: 'Serving',
        nClients: 'Clients',
        arrivalRate: 'Arrival rate'
      });
    }
  }, {
    key: 'step',
    value: function step(model, histories) {
      if (model.time < model.startTime) model.time = model.startTime;else model.time += this.stepSize;
      model.tick += 1;
      // console.info(`Time step ${model.tick}`);
      var arrivals = this.stepFlow(model);
      this.stepMobile(model);
      this.gatherStats(model, histories, arrivals);
      return model;
    }
  }, {
    key: 'stepFlow',
    value: function stepFlow(model) {
      // TODO: This only needs to be done if the graph topology changes
      // console.log('------- STEP ------');
      var downstreamServiceMap = this.collateDownstreamServices(model);
      var visitor = new _SolverStep2.default(this.stepSize, model.time, this.arrivalRules, this.serviceRules, downstreamServiceMap);
      model.walk(visitor);
      return visitor.arrivals;
    }
  }, {
    key: 'collateDownstreamServices',
    value: function collateDownstreamServices(model) {
      var _this = this;

      var downstreamServiceMap = {};
      var visitor = {
        visitNode: function visitNode(node) {
          var downstreamServices = new Set();
          var rule = _this.serviceRules[node.serviceCharacteristic];
          if (rule) {
            Object.keys(rule).forEach(function (name) {
              return downstreamServices.add(name);
            });
          }
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = node.outputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var output = _step.value;

              if (!output.open) {
                continue;
              }
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = downstreamServiceMap[output.key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var name = _step2.value;

                  downstreamServices.add(name);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          downstreamServiceMap[node.key] = downstreamServices;
        }
      };
      model.walk(visitor);
      return downstreamServiceMap;
    }
  }, {
    key: 'stepMobile',
    value: function stepMobile(model) {
      var queues = model.filter({ visitQueue: function visitQueue() {
          return true;
        } });
      var visitor = new _MobileStep2.default(this.stepSize, model.time, this.targetRules, queues);
      model.walk(visitor);
    }
  }, {
    key: 'gatherStats',
    value: function gatherStats(model, histories, arrivals) {
      var stats = {
        nWaiting: 0,
        nServing: 0,
        nClients: 0,
        arrivalRate: arrivals * (1 / this.stepSize) * 60
      };
      var visitor = {
        visitServer: function visitServer(server) {
          if (server.client) {
            stats.nServing += 1;
            stats.nClients += 1;
          }
        },
        visitQueue: function visitQueue(queue) {
          stats.nClients += queue.clients.length;
          if ((0, _arrays.has)(queue.tags, 'waiting')) stats.nWaiting += queue.clients.length;
        }
      };
      model.walk(visitor);
      histories.push(model.time, stats);
    }
  }]);

  return Solver;
}();

exports.default = Solver;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _seedrandom = __webpack_require__(101);

var _seedrandom2 = _interopRequireDefault(_seedrandom);

var _exprEval = __webpack_require__(207);

var _arrays = __webpack_require__(13);

var _objects = __webpack_require__(208);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileStep = function () {
  function MobileStep(stepSize, time, targetRules, queues) {
    _classCallCheck(this, MobileStep);

    this.stepSize = stepSize;
    this.time = time;
    var parser = new _exprEval.Parser();
    this.targetRules = (0, _objects.obMap)(targetRules, function (rule) {
      return _extends({}, rule, {
        serveWhen: parser.parse(rule.serveWhen),
        leaveWhen: parser.parse(rule.leaveWhen)
      });
    });
    this.random = (0, _seedrandom2.default)('' + time);
    this.outputs = {};
    this.queues = queues;
  }

  _createClass(MobileStep, [{
    key: 'visitMobileServer',
    value: function visitMobileServer(server) {
      var rule = this.targetRules[server.targetCharacteristic];
      if (server.client) {
        var params = this.findClient(server.client, this.queues);
        if (rule.leaveWhen.evaluate(params)) {
          // console.log(`${server} moving away from ${server.client}`);
          server.client = null;
        }
      } else {
        var clientTable = this.queues.filter(function (queue) {
          return (0, _arrays.intersects)(queue.tags, rule.queueTags);
        }).map(function (queue) {
          return queue.clients;
        });
        (0, _arrays.transposedForEach)(clientTable, function (client, col, row, stop) {
          var params = {
            positionInQueue: row,
            beingServed: client.serverKey && client.serverKey != server.key
          };
          if (rule.serveWhen.evaluate(params)) {
            server.client = client;
            // console.log(`${server} moving to ${server.client}`);
            stop();
          }
        });
      }
    }
  }, {
    key: 'findClient',
    value: function findClient(client) {
      if (!client.queueKey) {
        return {
          positionInQueue: -1,
          beingServed: true
        };
      } else {
        var queue = this.queues.find(function (q) {
          return q.key === client.queueKey;
        });
        return {
          positionInQueue: queue.clients.indexOf(client),
          beingServed: false
        };
      }
    }
  }]);

  return MobileStep;
}();

exports.default = MobileStep;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(20)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(20)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(20)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(20)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(20)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(20)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
var global = this,
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ((typeof module) == 'object' && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(206);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return seedrandom; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.exprEval = factory());
}(this, (function () { 'use strict';

var INUMBER = 'INUMBER';
var IOP1 = 'IOP1';
var IOP2 = 'IOP2';
var IOP3 = 'IOP3';
var IVAR = 'IVAR';
var IFUNCALL = 'IFUNCALL';
var IEXPR = 'IEXPR';
var IMEMBER = 'IMEMBER';

function Instruction(type, value) {
  this.type = type;
  this.value = (value !== undefined && value !== null) ? value : 0;
}

Instruction.prototype.toString = function () {
  switch (this.type) {
    case INUMBER:
    case IOP1:
    case IOP2:
    case IOP3:
    case IVAR:
      return this.value;
    case IFUNCALL:
      return 'CALL ' + this.value;
    case IMEMBER:
      return '.' + this.value;
    default:
      return 'Invalid Instruction';
  }
};

function unaryInstruction(value) {
  return new Instruction(IOP1, value);
}

function binaryInstruction(value) {
  return new Instruction(IOP2, value);
}

function ternaryInstruction(value) {
  return new Instruction(IOP3, value);
}

function simplify(tokens, unaryOps, binaryOps, ternaryOps, values) {
  var nstack = [];
  var newexpression = [];
  var n1, n2, n3;
  var f;
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      nstack.push(item);
    } else if (type === IVAR && values.hasOwnProperty(item.value)) {
      item = new Instruction(INUMBER, values[item.value]);
      nstack.push(item);
    } else if (type === IOP2 && nstack.length > 1) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = binaryOps[item.value];
      item = new Instruction(INUMBER, f(n1.value, n2.value));
      nstack.push(item);
    } else if (type === IOP3 && nstack.length > 2) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === '?') {
        nstack.push(n1.value ? n2.value : n3.value);
      } else {
        f = ternaryOps[item.value];
        item = new Instruction(INUMBER, f(n1.value, n2.value, n3.value));
        nstack.push(item);
      }
    } else if (type === IOP1 && nstack.length > 0) {
      n1 = nstack.pop();
      f = unaryOps[item.value];
      item = new Instruction(INUMBER, f(n1.value));
      nstack.push(item);
    } else if (type === IEXPR) {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(new Instruction(IEXPR, simplify(item.value, unaryOps, binaryOps, ternaryOps, values)));
    } else if (type === IMEMBER && nstack.length > 0) {
      n1 = nstack.pop();
      nstack.push(new Instruction(INUMBER, n1.value[item.value]));
    } else {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(item);
    }
  }
  while (nstack.length > 0) {
    newexpression.push(nstack.shift());
  }
  return newexpression;
}

function substitute(tokens, variable, expr) {
  var newexpression = [];
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === IVAR && item.value === variable) {
      for (var j = 0; j < expr.tokens.length; j++) {
        var expritem = expr.tokens[j];
        var replitem;
        if (expritem.type === IOP1) {
          replitem = unaryInstruction(expritem.value);
        } else if (expritem.type === IOP2) {
          replitem = binaryInstruction(expritem.value);
        } else if (expritem.type === IOP3) {
          replitem = ternaryInstruction(expritem.value);
        } else {
          replitem = new Instruction(expritem.type, expritem.value);
        }
        newexpression.push(replitem);
      }
    } else if (type === IEXPR) {
      newexpression.push(new Instruction(IEXPR, substitute(item.value, variable, expr)));
    } else {
      newexpression.push(item);
    }
  }
  return newexpression;
}

function evaluate(tokens, expr, values) {
  var nstack = [];
  var n1, n2, n3;
  var f;
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      nstack.push(item.value);
    } else if (type === IOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = expr.binaryOps[item.value];
      nstack.push(f(n1, n2));
    } else if (type === IOP3) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === '?') {
        nstack.push(evaluate(n1 ? n2 : n3, expr, values));
      } else {
        f = expr.ternaryOps[item.value];
        nstack.push(f(n1, n2, n3));
      }
    } else if (type === IVAR) {
      if (item.value in expr.functions) {
        nstack.push(expr.functions[item.value]);
      } else {
        var v = values[item.value];
        if (v !== undefined) {
          nstack.push(v);
        } else {
          throw new Error('undefined variable: ' + item.value);
        }
      }
    } else if (type === IOP1) {
      n1 = nstack.pop();
      f = expr.unaryOps[item.value];
      nstack.push(f(n1));
    } else if (type === IFUNCALL) {
      var argCount = item.value;
      var args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      f = nstack.pop();
      if (f.apply && f.call) {
        nstack.push(f.apply(undefined, args));
      } else {
        throw new Error(f + ' is not a function');
      }
    } else if (type === IEXPR) {
      nstack.push(item.value);
    } else if (type === IMEMBER) {
      n1 = nstack.pop();
      nstack.push(n1[item.value]);
    } else {
      throw new Error('invalid Expression');
    }
  }
  if (nstack.length > 1) {
    throw new Error('invalid Expression (parity)');
  }
  return nstack[0];
}

function expressionToString(tokens, toJS) {
  var nstack = [];
  var n1, n2, n3;
  var f;
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      if (typeof item.value === 'number' && item.value < 0) {
        nstack.push('(' + item.value + ')');
      } else {
        nstack.push(escapeValue(item.value));
      }
    } else if (type === IOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.value;
      if (toJS) {
        if (f === '^') {
          nstack.push('Math.pow(' + n1 + ', ' + n2 + ')');
        } else if (f === 'and') {
          nstack.push('(!!' + n1 + ' && !!' + n2 + ')');
        } else if (f === 'or') {
          nstack.push('(!!' + n1 + ' || !!' + n2 + ')');
        } else if (f === '||') {
          nstack.push('(String(' + n1 + ') + String(' + n2 + '))');
        } else if (f === '==') {
          nstack.push('(' + n1 + ' === ' + n2 + ')');
        } else if (f === '!=') {
          nstack.push('(' + n1 + ' !== ' + n2 + ')');
        } else {
          nstack.push('(' + n1 + ' ' + f + ' ' + n2 + ')');
        }
      } else {
        nstack.push('(' + n1 + ' ' + f + ' ' + n2 + ')');
      }
    } else if (type === IOP3) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.value;
      if (f === '?') {
        nstack.push('(' + n1 + ' ? ' + n2 + ' : ' + n3 + ')');
      } else {
        throw new Error('invalid Expression');
      }
    } else if (type === IVAR) {
      nstack.push(item.value);
    } else if (type === IOP1) {
      n1 = nstack.pop();
      f = item.value;
      if (f === '-' || f === '+') {
        nstack.push('(' + f + n1 + ')');
      } else if (toJS) {
        if (f === 'not') {
          nstack.push('(' + '!' + n1 + ')');
        } else if (f === '!') {
          nstack.push('fac(' + n1 + ')');
        } else {
          nstack.push(f + '(' + n1 + ')');
        }
      } else if (f === '!') {
        nstack.push('(' + n1 + '!)');
      } else {
        nstack.push('(' + f + ' ' + n1 + ')');
      }
    } else if (type === IFUNCALL) {
      var argCount = item.value;
      var args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      f = nstack.pop();
      nstack.push(f + '(' + args.join(', ') + ')');
    } else if (type === IMEMBER) {
      n1 = nstack.pop();
      nstack.push(n1 + '.' + item.value);
    } else if (type === IEXPR) {
      nstack.push('(' + expressionToString(item.value, toJS) + ')');
    } else {
      throw new Error('invalid Expression');
    }
  }
  if (nstack.length > 1) {
    throw new Error('invalid Expression (parity)');
  }
  return String(nstack[0]);
}

function escapeValue(v) {
  if (typeof v === 'string') {
    return JSON.stringify(v).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }
  return v;
}

function contains(array, obj) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    }
  }
  return false;
}

function getSymbols(tokens, symbols, options) {
  options = options || {};
  var withMembers = !!options.withMembers;
  var prevVar = null;

  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    if (item.type === IVAR && !contains(symbols, item.value)) {
      if (!withMembers) {
        symbols.push(item.value);
      } else if (prevVar !== null) {
        if (!contains(symbols, prevVar)) {
          symbols.push(prevVar);
        }
        prevVar = item.value;
      } else {
        prevVar = item.value;
      }
    } else if (item.type === IMEMBER && withMembers && prevVar !== null) {
      prevVar += '.' + item.value;
    } else if (item.type === IEXPR) {
      getSymbols(item.value, symbols, options);
    } else if (prevVar !== null) {
      if (!contains(symbols, prevVar)) {
        symbols.push(prevVar);
      }
      prevVar = null;
    }
  }

  if (prevVar !== null && !contains(symbols, prevVar)) {
    symbols.push(prevVar);
  }
}

function Expression(tokens, parser) {
  this.tokens = tokens;
  this.parser = parser;
  this.unaryOps = parser.unaryOps;
  this.binaryOps = parser.binaryOps;
  this.ternaryOps = parser.ternaryOps;
  this.functions = parser.functions;
}

Expression.prototype.simplify = function (values) {
  values = values || {};
  return new Expression(simplify(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, values), this.parser);
};

Expression.prototype.substitute = function (variable, expr) {
  if (!(expr instanceof Expression)) {
    expr = this.parser.parse(String(expr));
  }

  return new Expression(substitute(this.tokens, variable, expr), this.parser);
};

Expression.prototype.evaluate = function (values) {
  values = values || {};
  return evaluate(this.tokens, this, values);
};

Expression.prototype.toString = function () {
  return expressionToString(this.tokens, false);
};

Expression.prototype.symbols = function (options) {
  options = options || {};
  var vars = [];
  getSymbols(this.tokens, vars, options);
  return vars;
};

Expression.prototype.variables = function (options) {
  options = options || {};
  var vars = [];
  getSymbols(this.tokens, vars, options);
  var functions = this.functions;
  return vars.filter(function (name) {
    return !(name in functions);
  });
};

Expression.prototype.toJSFunction = function (param, variables) {
  var expr = this;
  var f = new Function(param, 'with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return ' + expressionToString(this.simplify(variables).tokens, true) + '; }'); // eslint-disable-line no-new-func
  return function () {
    return f.apply(expr, arguments);
  };
};

var TEOF = 'TEOF';
var TOP = 'TOP';
var TNUMBER = 'TNUMBER';
var TSTRING = 'TSTRING';
var TPAREN = 'TPAREN';
var TCOMMA = 'TCOMMA';
var TNAME = 'TNAME';

function Token(type, value, index) {
  this.type = type;
  this.value = value;
  this.index = index;
}

Token.prototype.toString = function () {
  return this.type + ': ' + this.value;
};

function TokenStream(parser, expression) {
  this.pos = 0;
  this.current = null;
  this.unaryOps = parser.unaryOps;
  this.binaryOps = parser.binaryOps;
  this.ternaryOps = parser.ternaryOps;
  this.consts = parser.consts;
  this.expression = expression;
  this.savedPosition = 0;
  this.savedCurrent = null;
  this.options = parser.options;
}

TokenStream.prototype.newToken = function (type, value, pos) {
  return new Token(type, value, pos != null ? pos : this.pos);
};

TokenStream.prototype.save = function () {
  this.savedPosition = this.pos;
  this.savedCurrent = this.current;
};

TokenStream.prototype.restore = function () {
  this.pos = this.savedPosition;
  this.current = this.savedCurrent;
};

TokenStream.prototype.next = function () {
  if (this.pos >= this.expression.length) {
    return this.newToken(TEOF, 'EOF');
  }

  if (this.isWhitespace() || this.isComment()) {
    return this.next();
  } else if (this.isRadixInteger() ||
      this.isNumber() ||
      this.isOperator() ||
      this.isString() ||
      this.isParen() ||
      this.isComma() ||
      this.isNamedOp() ||
      this.isConst() ||
      this.isName()) {
    return this.current;
  } else {
    this.parseError('Unknown character "' + this.expression.charAt(this.pos) + '"');
  }
};

TokenStream.prototype.isString = function () {
  var r = false;
  var startPos = this.pos;
  var quote = this.expression.charAt(startPos);

  if (quote === '\'' || quote === '"') {
    var index = this.expression.indexOf(quote, startPos + 1);
    while (index >= 0 && this.pos < this.expression.length) {
      this.pos = index + 1;
      if (this.expression.charAt(index - 1) !== '\\') {
        var rawString = this.expression.substring(startPos + 1, index);
        this.current = this.newToken(TSTRING, this.unescape(rawString), startPos);
        r = true;
        break;
      }
      index = this.expression.indexOf(quote, index + 1);
    }
  }
  return r;
};

TokenStream.prototype.isParen = function () {
  var c = this.expression.charAt(this.pos);
  if (c === '(' || c === ')') {
    this.current = this.newToken(TPAREN, c);
    this.pos++;
    return true;
  }
  return false;
};

TokenStream.prototype.isComma = function () {
  var c = this.expression.charAt(this.pos);
  if (c === ',') {
    this.current = this.newToken(TCOMMA, ',');
    this.pos++;
    return true;
  }
  return false;
};

TokenStream.prototype.isConst = function () {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c !== '_' && c !== '.' && (c < '0' || c > '9'))) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    if (str in this.consts) {
      this.current = this.newToken(TNUMBER, this.consts[str]);
      this.pos += str.length;
      return true;
    }
  }
  return false;
};

TokenStream.prototype.isNamedOp = function () {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c !== '_' && (c < '0' || c > '9'))) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    if (this.isOperatorEnabled(str) && (str in this.binaryOps || str in this.unaryOps || str in this.ternaryOps)) {
      this.current = this.newToken(TOP, str);
      this.pos += str.length;
      return true;
    }
  }
  return false;
};

TokenStream.prototype.isName = function () {
  var startPos = this.pos;
  var i = startPos;
  var hasLetter = false;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos && c === '$') {
        continue;
      } else if (i === this.pos || !hasLetter || (c !== '_' && (c < '0' || c > '9'))) {
        break;
      }
    } else {
      hasLetter = true;
    }
  }
  if (hasLetter) {
    var str = this.expression.substring(startPos, i);
    this.current = this.newToken(TNAME, str);
    this.pos += str.length;
    return true;
  }
  return false;
};

TokenStream.prototype.isWhitespace = function () {
  var r = false;
  var c = this.expression.charAt(this.pos);
  while (c === ' ' || c === '\t' || c === '\n' || c === '\r') {
    r = true;
    this.pos++;
    if (this.pos >= this.expression.length) {
      break;
    }
    c = this.expression.charAt(this.pos);
  }
  return r;
};

var codePointPattern = /^[0-9a-f]{4}$/i;

TokenStream.prototype.unescape = function (v) {
  var index = v.indexOf('\\');
  if (index < 0) {
    return v;
  }

  var buffer = v.substring(0, index);
  while (index >= 0) {
    var c = v.charAt(++index);
    switch (c) {
      case '\'':
        buffer += '\'';
        break;
      case '"':
        buffer += '"';
        break;
      case '\\':
        buffer += '\\';
        break;
      case '/':
        buffer += '/';
        break;
      case 'b':
        buffer += '\b';
        break;
      case 'f':
        buffer += '\f';
        break;
      case 'n':
        buffer += '\n';
        break;
      case 'r':
        buffer += '\r';
        break;
      case 't':
        buffer += '\t';
        break;
      case 'u':
        // interpret the following 4 characters as the hex of the unicode code point
        var codePoint = v.substring(index + 1, index + 5);
        if (!codePointPattern.test(codePoint)) {
          this.parseError('Illegal escape sequence: \\u' + codePoint);
        }
        buffer += String.fromCharCode(parseInt(codePoint, 16));
        index += 4;
        break;
      default:
        throw this.parseError('Illegal escape sequence: "\\' + c + '"');
    }
    ++index;
    var backslash = v.indexOf('\\', index);
    buffer += v.substring(index, backslash < 0 ? v.length : backslash);
    index = backslash;
  }

  return buffer;
};

TokenStream.prototype.isComment = function () {
  var c = this.expression.charAt(this.pos);
  if (c === '/' && this.expression.charAt(this.pos + 1) === '*') {
    this.pos = this.expression.indexOf('*/', this.pos) + 2;
    if (this.pos === 1) {
      this.pos = this.expression.length;
    }
    return true;
  }
  return false;
};

TokenStream.prototype.isRadixInteger = function () {
  var pos = this.pos;

  if (pos >= this.expression.length - 2 || this.expression.charAt(pos) !== '0') {
    return false;
  }
  ++pos;

  var radix;
  var validDigit;
  if (this.expression.charAt(pos) === 'x') {
    radix = 16;
    validDigit = /^[0-9a-f]$/i;
    ++pos;
  } else if (this.expression.charAt(pos) === 'b') {
    radix = 2;
    validDigit = /^[01]$/i;
    ++pos;
  } else {
    return false;
  }

  var valid = false;
  var startPos = pos;

  while (pos < this.expression.length) {
    var c = this.expression.charAt(pos);
    if (validDigit.test(c)) {
      pos++;
      valid = true;
    } else {
      break;
    }
  }

  if (valid) {
    this.current = this.newToken(TNUMBER, parseInt(this.expression.substring(startPos, pos), radix));
    this.pos = pos;
  }
  return valid;
};

TokenStream.prototype.isNumber = function () {
  var valid = false;
  var pos = this.pos;
  var startPos = pos;
  var resetPos = pos;
  var foundDot = false;
  var foundDigits = false;
  var c;

  while (pos < this.expression.length) {
    c = this.expression.charAt(pos);
    if ((c >= '0' && c <= '9') || (!foundDot && c === '.')) {
      if (c === '.') {
        foundDot = true;
      } else {
        foundDigits = true;
      }
      pos++;
      valid = foundDigits;
    } else {
      break;
    }
  }

  if (valid) {
    resetPos = pos;
  }

  if (c === 'e' || c === 'E') {
    pos++;
    var acceptSign = true;
    var validExponent = false;
    while (pos < this.expression.length) {
      c = this.expression.charAt(pos);
      if (acceptSign && (c === '+' || c === '-')) {
        acceptSign = false;
      } else if (c >= '0' && c <= '9') {
        validExponent = true;
        acceptSign = false;
      } else {
        break;
      }
      pos++;
    }

    if (!validExponent) {
      pos = resetPos;
    }
  }

  if (valid) {
    this.current = this.newToken(TNUMBER, parseFloat(this.expression.substring(startPos, pos)));
    this.pos = pos;
  } else {
    this.pos = resetPos;
  }
  return valid;
};

TokenStream.prototype.isOperator = function () {
  var startPos = this.pos;
  var c = this.expression.charAt(this.pos);

  if (c === '+' || c === '-' || c === '*' || c === '/' || c === '%' || c === '^' || c === '?' || c === ':' || c === '.') {
    this.current = this.newToken(TOP, c);
  } else if (c === '∙' || c === '•') {
    this.current = this.newToken(TOP, '*');
  } else if (c === '>') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '>=');
      this.pos++;
    } else {
      this.current = this.newToken(TOP, '>');
    }
  } else if (c === '<') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '<=');
      this.pos++;
    } else {
      this.current = this.newToken(TOP, '<');
    }
  } else if (c === '|') {
    if (this.expression.charAt(this.pos + 1) === '|') {
      this.current = this.newToken(TOP, '||');
      this.pos++;
    } else {
      return false;
    }
  } else if (c === '=') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '==');
      this.pos++;
    } else {
      return false;
    }
  } else if (c === '!') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '!=');
      this.pos++;
    } else {
      this.current = this.newToken(TOP, c);
    }
  } else {
    return false;
  }
  this.pos++;

  if (this.isOperatorEnabled(this.current.value)) {
    return true;
  } else {
    this.pos = startPos;
    return false;
  }
};

var optionNameMap = {
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
  '%': 'remainder',
  '^': 'power',
  '!': 'factorial',
  '<': 'comparison',
  '>': 'comparison',
  '<=': 'comparison',
  '>=': 'comparison',
  '==': 'comparison',
  '!=': 'comparison',
  '||': 'concatenate',
  'and': 'logical',
  'or': 'logical',
  'not': 'logical',
  '?': 'conditional',
  ':': 'conditional'
};

function getOptionName(op) {
  return optionNameMap.hasOwnProperty(op) ? optionNameMap[op] : op;
}

TokenStream.prototype.isOperatorEnabled = function (op) {
  var optionName = getOptionName(op);
  var operators = this.options.operators || {};

  // in is a special case for now because it's disabled by default
  if (optionName === 'in') {
    return !!operators['in'];
  }

  return !(optionName in operators) || !!operators[optionName];
};

TokenStream.prototype.getCoordinates = function () {
  var line = 0;
  var column;
  var newline = -1;
  do {
    line++;
    column = this.pos - newline;
    newline = this.expression.indexOf('\n', newline + 1);
  } while (newline >= 0 && newline < this.pos);

  return {
    line: line,
    column: column
  };
};

TokenStream.prototype.parseError = function (msg) {
  var coords = this.getCoordinates();
  throw new Error('parse error [' + coords.line + ':' + coords.column + ']: ' + msg);
};

function ParserState(parser, tokenStream, options) {
  this.parser = parser;
  this.tokens = tokenStream;
  this.current = null;
  this.nextToken = null;
  this.next();
  this.savedCurrent = null;
  this.savedNextToken = null;
  this.allowMemberAccess = options.allowMemberAccess !== false;
}

ParserState.prototype.next = function () {
  this.current = this.nextToken;
  return (this.nextToken = this.tokens.next());
};

ParserState.prototype.tokenMatches = function (token, value) {
  if (typeof value === 'undefined') {
    return true;
  } else if (Array.isArray(value)) {
    return contains(value, token.value);
  } else if (typeof value === 'function') {
    return value(token);
  } else {
    return token.value === value;
  }
};

ParserState.prototype.save = function () {
  this.savedCurrent = this.current;
  this.savedNextToken = this.nextToken;
  this.tokens.save();
};

ParserState.prototype.restore = function () {
  this.tokens.restore();
  this.current = this.savedCurrent;
  this.nextToken = this.savedNextToken;
};

ParserState.prototype.accept = function (type, value) {
  if (this.nextToken.type === type && this.tokenMatches(this.nextToken, value)) {
    this.next();
    return true;
  }
  return false;
};

ParserState.prototype.expect = function (type, value) {
  if (!this.accept(type, value)) {
    var coords = this.tokens.getCoordinates();
    throw new Error('parse error [' + coords.line + ':' + coords.column + ']: Expected ' + (value || type));
  }
};

ParserState.prototype.parseAtom = function (instr) {
  if (this.accept(TNAME)) {
    instr.push(new Instruction(IVAR, this.current.value));
  } else if (this.accept(TNUMBER)) {
    instr.push(new Instruction(INUMBER, this.current.value));
  } else if (this.accept(TSTRING)) {
    instr.push(new Instruction(INUMBER, this.current.value));
  } else if (this.accept(TPAREN, '(')) {
    this.parseExpression(instr);
    this.expect(TPAREN, ')');
  } else {
    throw new Error('unexpected ' + this.nextToken);
  }
};

ParserState.prototype.parseExpression = function (instr) {
  this.parseConditionalExpression(instr);
};

ParserState.prototype.parseConditionalExpression = function (instr) {
  this.parseOrExpression(instr);
  while (this.accept(TOP, '?')) {
    var trueBranch = [];
    var falseBranch = [];
    this.parseConditionalExpression(trueBranch);
    this.expect(TOP, ':');
    this.parseConditionalExpression(falseBranch);
    instr.push(new Instruction(IEXPR, trueBranch));
    instr.push(new Instruction(IEXPR, falseBranch));
    instr.push(ternaryInstruction('?'));
  }
};

ParserState.prototype.parseOrExpression = function (instr) {
  this.parseAndExpression(instr);
  while (this.accept(TOP, 'or')) {
    this.parseAndExpression(instr);
    instr.push(binaryInstruction('or'));
  }
};

ParserState.prototype.parseAndExpression = function (instr) {
  this.parseComparison(instr);
  while (this.accept(TOP, 'and')) {
    this.parseComparison(instr);
    instr.push(binaryInstruction('and'));
  }
};

var COMPARISON_OPERATORS = ['==', '!=', '<', '<=', '>=', '>', 'in'];

ParserState.prototype.parseComparison = function (instr) {
  this.parseAddSub(instr);
  while (this.accept(TOP, COMPARISON_OPERATORS)) {
    var op = this.current;
    this.parseAddSub(instr);
    instr.push(binaryInstruction(op.value));
  }
};

var ADD_SUB_OPERATORS = ['+', '-', '||'];

ParserState.prototype.parseAddSub = function (instr) {
  this.parseTerm(instr);
  while (this.accept(TOP, ADD_SUB_OPERATORS)) {
    var op = this.current;
    this.parseTerm(instr);
    instr.push(binaryInstruction(op.value));
  }
};

var TERM_OPERATORS = ['*', '/', '%'];

ParserState.prototype.parseTerm = function (instr) {
  this.parseFactor(instr);
  while (this.accept(TOP, TERM_OPERATORS)) {
    var op = this.current;
    this.parseFactor(instr);
    instr.push(binaryInstruction(op.value));
  }
};

ParserState.prototype.parseFactor = function (instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }

  this.save();
  if (this.accept(TOP, isPrefixOperator)) {
    if ((this.current.value !== '-' && this.current.value !== '+' && this.nextToken.type === TPAREN && this.nextToken.value === '(')) {
      this.restore();
      this.parseExponential(instr);
    } else {
      var op = this.current;
      this.parseFactor(instr);
      instr.push(unaryInstruction(op.value));
    }
  } else {
    this.parseExponential(instr);
  }
};

ParserState.prototype.parseExponential = function (instr) {
  this.parsePostfixExpression(instr);
  while (this.accept(TOP, '^')) {
    this.parseFactor(instr);
    instr.push(binaryInstruction('^'));
  }
};

ParserState.prototype.parsePostfixExpression = function (instr) {
  this.parseFunctionCall(instr);
  while (this.accept(TOP, '!')) {
    instr.push(unaryInstruction('!'));
  }
};

ParserState.prototype.parseFunctionCall = function (instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }

  if (this.accept(TOP, isPrefixOperator)) {
    var op = this.current;
    this.parseAtom(instr);
    instr.push(unaryInstruction(op.value));
  } else {
    this.parseMemberExpression(instr);
    while (this.accept(TPAREN, '(')) {
      if (this.accept(TPAREN, ')')) {
        instr.push(new Instruction(IFUNCALL, 0));
      } else {
        var argCount = this.parseArgumentList(instr);
        instr.push(new Instruction(IFUNCALL, argCount));
      }
    }
  }
};

ParserState.prototype.parseArgumentList = function (instr) {
  var argCount = 0;

  while (!this.accept(TPAREN, ')')) {
    this.parseExpression(instr);
    ++argCount;
    while (this.accept(TCOMMA)) {
      this.parseExpression(instr);
      ++argCount;
    }
  }

  return argCount;
};

ParserState.prototype.parseMemberExpression = function (instr) {
  this.parseAtom(instr);
  while (this.accept(TOP, '.')) {
    if (!this.allowMemberAccess) {
      throw new Error('unexpected ".", member access is not permitted');
    }

    this.expect(TNAME);
    instr.push(new Instruction(IMEMBER, this.current.value));
  }
};

function add(a, b) {
  return Number(a) + Number(b);
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function concat(a, b) {
  return '' + a + b;
}

function equal(a, b) {
  return a === b;
}

function notEqual(a, b) {
  return a !== b;
}

function greaterThan(a, b) {
  return a > b;
}

function lessThan(a, b) {
  return a < b;
}

function greaterThanEqual(a, b) {
  return a >= b;
}

function lessThanEqual(a, b) {
  return a <= b;
}

function andOperator(a, b) {
  return Boolean(a && b);
}

function orOperator(a, b) {
  return Boolean(a || b);
}

function inOperator(a, b) {
  return contains(b, a);
}

function sinh(a) {
  return ((Math.exp(a) - Math.exp(-a)) / 2);
}

function cosh(a) {
  return ((Math.exp(a) + Math.exp(-a)) / 2);
}

function tanh(a) {
  if (a === Infinity) return 1;
  if (a === -Infinity) return -1;
  return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
}

function asinh(a) {
  if (a === -Infinity) return a;
  return Math.log(a + Math.sqrt((a * a) + 1));
}

function acosh(a) {
  return Math.log(a + Math.sqrt((a * a) - 1));
}

function atanh(a) {
  return (Math.log((1 + a) / (1 - a)) / 2);
}

function log10(a) {
  return Math.log(a) * Math.LOG10E;
}

function neg(a) {
  return -a;
}

function not(a) {
  return !a;
}

function trunc(a) {
  return a < 0 ? Math.ceil(a) : Math.floor(a);
}

function random(a) {
  return Math.random() * (a || 1);
}

function factorial(a) { // a!
  return gamma(a + 1);
}

function isInteger(value) {
  return isFinite(value) && (value === Math.round(value));
}

var GAMMA_G = 4.7421875;
var GAMMA_P = [
  0.99999999999999709182,
  57.156235665862923517, -59.597960355475491248,
  14.136097974741747174, -0.49191381609762019978,
  0.33994649984811888699e-4,
  0.46523628927048575665e-4, -0.98374475304879564677e-4,
  0.15808870322491248884e-3, -0.21026444172410488319e-3,
  0.21743961811521264320e-3, -0.16431810653676389022e-3,
  0.84418223983852743293e-4, -0.26190838401581408670e-4,
  0.36899182659531622704e-5
];

// Gamma function from math.js
function gamma(n) {
  var t, x;

  if (isInteger(n)) {
    if (n <= 0) {
      return isFinite(n) ? Infinity : NaN;
    }

    if (n > 171) {
      return Infinity; // Will overflow
    }

    var value = n - 2;
    var res = n - 1;
    while (value > 1) {
      res *= value;
      value--;
    }

    if (res === 0) {
      res = 1; // 0! is per definition 1
    }

    return res;
  }

  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
  }

  if (n >= 171.35) {
    return Infinity; // will overflow
  }

  if (n > 85.0) { // Extended Stirling Approx
    var twoN = n * n;
    var threeN = twoN * n;
    var fourN = threeN * n;
    var fiveN = fourN * n;
    return Math.sqrt(2 * Math.PI / n) * Math.pow((n / Math.E), n) *
      (1 + (1 / (12 * n)) + (1 / (288 * twoN)) - (139 / (51840 * threeN)) -
      (571 / (2488320 * fourN)) + (163879 / (209018880 * fiveN)) +
      (5246819 / (75246796800 * fiveN * n)));
  }

  --n;
  x = GAMMA_P[0];
  for (var i = 1; i < GAMMA_P.length; ++i) {
    x += GAMMA_P[i] / (n + i);
  }

  t = n + GAMMA_G + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}

function stringLength(s) {
  return String(s).length;
}

function hypot() {
  var sum = 0;
  var larg = 0;
  for (var i = 0; i < arguments.length; i++) {
    var arg = Math.abs(arguments[i]);
    var div;
    if (larg < arg) {
      div = larg / arg;
      sum = (sum * div * div) + 1;
      larg = arg;
    } else if (arg > 0) {
      div = arg / larg;
      sum += div * div;
    } else {
      sum += arg;
    }
  }
  return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
}

function condition(cond, yep, nope) {
  return cond ? yep : nope;
}

/**
* Decimal adjustment of a number.
* From @escopecz.
*
* @param {Number} value The number.
* @param {Integer} exp  The exponent (the 10 logarithm of the adjustment base).
* @return {Number} The adjusted value.
*/
function roundTo(value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math.round(value);
  }
  value = +value;
  exp = -(+exp);
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

function Parser(options) {
  this.options = options || {};
  this.unaryOps = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    sinh: Math.sinh || sinh,
    cosh: Math.cosh || cosh,
    tanh: Math.tanh || tanh,
    asinh: Math.asinh || asinh,
    acosh: Math.acosh || acosh,
    atanh: Math.atanh || atanh,
    sqrt: Math.sqrt,
    log: Math.log,
    ln: Math.log,
    lg: Math.log10 || log10,
    log10: Math.log10 || log10,
    abs: Math.abs,
    ceil: Math.ceil,
    floor: Math.floor,
    round: Math.round,
    trunc: Math.trunc || trunc,
    '-': neg,
    '+': Number,
    exp: Math.exp,
    not: not,
    length: stringLength,
    '!': factorial
  };

  this.binaryOps = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
    '%': mod,
    '^': Math.pow,
    '||': concat,
    '==': equal,
    '!=': notEqual,
    '>': greaterThan,
    '<': lessThan,
    '>=': greaterThanEqual,
    '<=': lessThanEqual,
    and: andOperator,
    or: orOperator,
    'in': inOperator
  };

  this.ternaryOps = {
    '?': condition
  };

  this.functions = {
    random: random,
    fac: factorial,
    min: Math.min,
    max: Math.max,
    hypot: Math.hypot || hypot,
    pyt: Math.hypot || hypot, // backward compat
    pow: Math.pow,
    atan2: Math.atan2,
    'if': condition,
    gamma: gamma,
    roundTo: roundTo
  };

  this.consts = {
    E: Math.E,
    PI: Math.PI,
    'true': true,
    'false': false
  };
}

Parser.prototype.parse = function (expr) {
  var instr = [];
  var parserState = new ParserState(
    this,
    new TokenStream(this, expr),
    { allowMemberAccess: this.options.allowMemberAccess }
  );

  parserState.parseExpression(instr);
  parserState.expect(TEOF, 'EOF');

  return new Expression(instr, this);
};

Parser.prototype.evaluate = function (expr, variables) {
  return this.parse(expr).evaluate(variables);
};

var sharedParser = new Parser();

Parser.parse = function (expr) {
  return sharedParser.parse(expr);
};

Parser.evaluate = function (expr, variables) {
  return sharedParser.parse(expr).evaluate(variables);
};

/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

var index = {
  Parser: Parser,
  Expression: Expression
};

return index;

})));


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obMap = obMap;
function obMap(ob, fn) {
  var mapped = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(ob)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      mapped[key] = fn(ob[key], key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return mapped;
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compendium = __webpack_require__(210);
var uniq = __webpack_require__(211);

var uniqueRandomArray = __webpack_require__(213);
var femaleHumanNamesEn = __webpack_require__(215);
var maleHumanNamesEn = __webpack_require__(216);
var allHumanNamesEn = [];

var femaleHumanNamesIt = __webpack_require__(217);
var maleHumanNamesIt = __webpack_require__(218);
var allHumanNamesIt = [];

var femaleHumanNamesFr = __webpack_require__(219);
var maleHumanNamesFr = __webpack_require__(220);
var allHumanNamesFr = [];

var femaleHumanNamesDe = __webpack_require__(221);
var maleHumanNamesDe = __webpack_require__(222);
var allHumanNamesDe = [];

var femaleHumanNamesEs = __webpack_require__(223);
var maleHumanNamesEs = __webpack_require__(224);
var allHumanNamesEs = [];

var allNames = [];

var allHumanNamesEn = femaleHumanNamesEn.concat(maleHumanNamesEn);
var allHumanNamesIt = femaleHumanNamesIt.concat(maleHumanNamesIt);
var allHumanNamesFr = femaleHumanNamesFr.concat(maleHumanNamesFr);
var allHumanNamesDe = femaleHumanNamesDe.concat(maleHumanNamesDe);
var allHumanNamesEs = femaleHumanNamesEs.concat(maleHumanNamesEs);

allNames = allHumanNamesEn.concat(allHumanNamesIt).concat(allHumanNamesFr).concat(allHumanNamesDe).concat(allHumanNamesEs);

// femaleHumanNamesEn.forEach(function (el, i) {
// 	if ((maleHumanNamesEn[i] != undefined) && (maleHumanNamesEn[i] != 'undefined')) {
// 		allHumanNamesEn.push(el, maleHumanNamesEn[i]);
// 	}
// });
//
// femaleHumanNamesIt.forEach(function (el, i) {
// 	if ((maleHumanNamesIt[i] != undefined) && (maleHumanNamesIt[i] != 'undefined')) {
// 		allHumanNamesIt.push(el, maleHumanNamesIt[i]);
// 	}
// });
//
// femaleHumanNamesFr.forEach(function (el, i) {
// 	if ((maleHumanNamesFr[i] != undefined) && (maleHumanNamesFr[i] != 'undefined')) {
// 		allHumanNamesFr.push(el, maleHumanNamesFr[i]);
// 	}
// });
//
// femaleHumanNamesDe.forEach(function (el, i) {
// 	if ((maleHumanNamesDe[i] != undefined) && (maleHumanNamesDe[i] != 'undefined')) {
// 		allHumanNamesDe.push(el, maleHumanNamesDe[i]);
// 	}
// });
//
// femaleHumanNamesEs.forEach(function (el, i) {
// 	if ((maleHumanNamesEs[i] != undefined) && (maleHumanNamesEs[i] != 'undefined')) {
// 		allHumanNamesEs.push(el, maleHumanNamesEs[i]);
// 	}
// });

exports.femaleEn = femaleHumanNamesEn;
exports.maleEn = maleHumanNamesEn;
exports.allEn = allHumanNamesEn;

exports.femaleIt = femaleHumanNamesIt;
exports.maleIt = maleHumanNamesIt;
exports.allIt = allHumanNamesIt;

exports.femaleFr = femaleHumanNamesFr;
exports.maleFr = maleHumanNamesFr;
exports.allFr = allHumanNamesFr;

exports.femaleDe = femaleHumanNamesDe;
exports.maleDe = maleHumanNamesDe;
exports.allDe = allHumanNamesDe;

exports.femaleEs = femaleHumanNamesEs;
exports.maleEs = maleHumanNamesEs;
exports.allEs = allHumanNamesEs;

exports.femaleRandomEn = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandomEn = uniqueRandomArray(maleHumanNamesEn);
exports.allRandomEn = uniqueRandomArray(allHumanNamesEn);

exports.femaleRandomIt = uniqueRandomArray(femaleHumanNamesIt);
exports.maleRandomIt = uniqueRandomArray(maleHumanNamesIt);
exports.allRandomIt = uniqueRandomArray(allHumanNamesIt);

exports.femaleRandomFr = uniqueRandomArray(femaleHumanNamesFr);
exports.maleRandomFr = uniqueRandomArray(maleHumanNamesFr);
exports.allRandomFr = uniqueRandomArray(allHumanNamesFr);

exports.femaleRandomDe = uniqueRandomArray(femaleHumanNamesDe);
exports.maleRandomDe = uniqueRandomArray(maleHumanNamesDe);
exports.allRandomDe = uniqueRandomArray(allHumanNamesDe);

exports.femaleRandomEs = uniqueRandomArray(femaleHumanNamesEs);
exports.maleRandomEs = uniqueRandomArray(maleHumanNamesEs);
exports.allRandomEs = uniqueRandomArray(allHumanNamesEs);

/**
 * Returns the first English names that matches the provided name.
 * @param name
 * @returns {*}
 */
var isPersonName = function isPersonName(name) {

	var matchIndex = allNames.findIndex(function (x, index) {
		return name.toLowerCase() == x.toLowerCase();
	});

	return matchIndex != -1;
};

var parseNames = function parseNames(text) {

	var parsed = compendium.analyse(text);

	var entities = [];

	// Normalise entity tokens into a single array
	parsed.forEach(function (x) {
		entities = entities.concat(x.entities);
	});

	// If a token is multiple words, split each subsequent word into a seperate entity
	var len = entities.length;
	for (var i = 0; i < len; i++) {

		var x = entities[i];
		var words = x.raw.split(" ");

		for (var j = 0; j < words.length; j++) {
			entities.push({
				raw: words[j]
			});
		}
	}

	entities = entities.map(function (x) {
		return toTitleCase(x.raw.trim());
	});

	// Filter entities by known people names
	entities = uniq(entities.filter(function (x) {
		return isPersonName(x);
	}));

	// printJson(entities)

	return entities;
};

function printJson(what) {
	return console.log(JSON.stringify(what, null, '  '));
};

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

exports.isPersonName = isPersonName;
exports.parseNames = parseNames;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

!function(N){"use strict";function e(N,e){var i;for(i in e)e.hasOwnProperty(i)&&(N[i]=e[i])}function i(N){return N.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var a={},n={},r={},s={},t={},o={},l={},J={},P=Array.isArray,d={profile:{negative_threshold:-.3,positive_threshold:.3,amplitude_threshold:.3,polite_threshold:.2,dirty_threshold:.3}},c="foreign",u="interrogative",g="exclamatory",m="headline",B="imperative",p="approval",h="refusal";N.detect=t,N.dependencies=o,N.inflector=l,N.compendium=a,N.lexer=n,N.factory=r,N.pos=J,N.config=d,!function(){var i=["tuna","trout","spacecraft","salmon","halibut","aircraft","equipment","information","rice","money","species","series","fish","sheep","moose","deer","news","asbestos"],a=[[/^index$/gi,"indices"],[/^criterion$/gi,"criteria"],[/dix$/gi,"dices"],[/(a|o)ch$/gi,"$1chs"],[/(m)an$/gi,"$1en"],[/(pe)rson$/gi,"$1ople"],[/(child)$/gi,"$1ren"],[/^(ox)$/gi,"$1en"],[/(ax|test)is$/gi,"$1es"],[/(octop|vir)us$/gi,"$1i"],[/(alias|status)$/gi,"$1es"],[/(bu)s$/gi,"$1ses"],[/(buffal|tomat|potat|her)o$/gi,"$1oes"],[/([ti])um$/gi,"$1a"],[/sis$/gi,"ses"],[/(?:([^f])fe|([lr])f)$/gi,"$1$2ves"],[/(hive)$/gi,"$1s"],[/([^aeiouy]|qu)y$/gi,"$1ies"],[/(x|ch|ss|sh)$/gi,"$1es"],[/(matr|vert|ind)ix|ex$/gi,"$1ices"],[/([m|l])ouse$/gi,"$1ice"],[/(quiz)$/gi,"$1zes"],[/^gas$/gi,"gases"],[/s$/gi,"s"],[/$/gi,"s"]],n=[[/(m)en$/gi,"$1an"],[/(pe)ople$/gi,"$1rson"],[/(child)ren$/gi,"$1"],[/([ti])a$/gi,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses/gi,"$1$2sis"],[/(hive)s$/gi,"$1"],[/(tive)s$/gi,"$1"],[/(curve)s$/gi,"$1"],[/([lr])ves$/gi,"$1f"],[/([^fo])ves$/gi,"$1fe"],[/([^aeiouy]|qu)ies$/gi,"$1y"],[/(s)eries$/gi,"$1eries"],[/(m)ovies$/gi,"$1ovie"],[/(x|ch|ss|sh)es$/gi,"$1"],[/([m|l])ice$/gi,"$1ouse"],[/(bus)es$/gi,"$1"],[/(o)es$/gi,"$1"],[/(shoe)s$/gi,"$1"],[/(cris|ax|test)es$/gi,"$1is"],[/(octop|vir)i$/gi,"$1us"],[/(alias|status)es$/gi,"$1"],[/^(ox)en/gi,"$1"],[/(vert|ind)ices$/gi,"$1ex"],[/(matr)ices$/gi,"$1ix"],[/(quiz)zes$/gi,"$1"],[/s$/gi,""]],r=function(N,e,a){var n,r;if(i.indexOf(N.toLowerCase())>-1)return N;for(n=0,r=e.length;r>n;n++)if(N.match(e[n][0])){N=N.replace(e[n][0],e[n][1]);break}return N},s=function(N,e){var a,n;if(i.indexOf(N.toLowerCase())>-1)return!1;for(a=0,n=e.length;n>a;a++)if(N.match(e[a][0]))return!0;return!1},t="VBZ",o="VBG",J="VBN",P=function(N,e){return e===t?N+"s":e===o?N+"ing":e===J?N+"ed":N},d=function(N,e){return e===t?N+"s":e===o?N+N[N.length-1]+"ing":e===J?N+N[N.length-1]+"ed":N},c=function(N,e){var i=N.slice(0,N.length-1);return e===t?N+"s":e===o?i+"ing":e===J?i+"ed":N},u=function(N,e){var i=N.slice(0,N.length-1);return e===t?i+"ies":e===o?N+"ing":e===J?i+"ied":N},g=function(N,e){return e===t?N+"s":e===o?N+"ing":e===J?N+"d":N},m=function(N,e){return e===t?N+"s":e===o?N.slice(0,N.length-1)+"ing":e===J?N+"d":N},B=function(N,e){return e===t?N+"s":e===o?N.slice(0,N.length-2)+"ying":e===J?N+"d":N},p=function(N,e){return e===t?N+"es":e===o?N+"ing":e===J?N+"ed":N};e(l,{isSingular:function(N){return l.isUncountable(N)||s(N,a)},isPlural:function(N){return N.match(/([saui]s|[^i]a)$/gi)?!1:s(N,n)},isUncountable:function(N){return i.indexOf(N)>-1},singularize:function(N){return l.isPlural(N)?r(N,n):N},pluralize:function(N){return l.isSingular(N)?r(N,a):N},conjugate:function(N,e){N[N.length-1];return N.match(/[^aeiou]y$/gi)?u(N,e):N.match(/[^aeiouy]e$/gi)?c(N,e):N.match(/([aeiuo][ptlgnm]|ir|cur|[^aeiuo][oua][db])$/gi)?d(N,e):N.match(/([ieao]ss|[aeiouy]zz|[aeiouy]ch|nch|rch|[aeiouy]sh|[iae]tch|ax)$/gi)?p(N,e):N.match(/(ee)$/gi)?g(N,e):N.match(/(ie)$/gi)?B(N,e):N.match(/(ue)$/gi)?m(N,e):N.match(/([uao]m[pb]|[oa]wn|ey|elp|[ei]gn|ilm|o[uo]r|[oa]ugh|igh|ki|ff|oubt|ount|awl|o[alo]d|[iu]rl|upt|[oa]y|ight|oid|empt|act|aud|e[ea]d|ound|[aeiou][srcln]t|ept|dd|[eia]n[dk]|[ioa][xk]|[oa]rm|[ue]rn|[ao]ng|uin|eam|ai[mr]|[oea]w|[eaoui][rscl]k|[oa]r[nd]|ear|er|it|ll)$/gi)?P(N,e):null},toPast:function(N){return l.conjugate(N,J)},toGerund:function(N){return l.conjugate(N,o)},toPresents:function(N){return l.conjugate(N,t)},infinitive:function(e){var i=N.lexicon[e];return i&&i.hasOwnProperty("infinitive")?i.infinitive:"are"===e||"am"===e||"'s"===e?"be":null}}),N.inflector=l}(),!function(){function e(N){throw new RangeError(v[N])}function i(N,e){for(var i=N.length,a=[];i--;)a[i]=e(N[i]);return a}function a(N,e){var a=N.split("@"),n="";a.length>1&&(n=a[0]+"@",N=a[1]),N=N.replace(k,".");var r=N.split("."),s=i(r,e).join(".");return n+s}function n(N){for(var e,i,a=[],n=0,r=N.length;r>n;)e=N.charCodeAt(n++),e>=55296&&56319>=e&&r>n?(i=N.charCodeAt(n++),56320==(64512&i)?a.push(((1023&e)<<10)+(1023&i)+65536):(a.push(e),n--)):a.push(e);return a}function r(N){return i(N,function(N){var e="";return N>65535&&(N-=65536,e+=G(N>>>10&1023|55296),N=56320|1023&N),e+=G(N)}).join("")}function s(N){return 10>N-48?N-22:26>N-65?N-65:26>N-97?N-97:g}function t(N,e){return N+22+75*(26>N)-((0!=e)<<5)}function o(N,e,i){var a=0;for(N=i?R(N/h):N>>1,N+=R(N/e);N>w*B>>1;a+=g)N=R(N/w);return R(a+(w+1)*N/(N+p))}function l(N){var i,a,n,t,l,J,P,d,c,p,h=[],b=N.length,f=0,k=V,v=S;for(a=N.lastIndexOf(y),0>a&&(a=0),n=0;a>n;++n)N.charCodeAt(n)>=128&&e("not-basic"),h.push(N.charCodeAt(n));for(t=a>0?a+1:0;b>t;){for(l=f,J=1,P=g;t>=b&&e("invalid-input"),d=s(N.charCodeAt(t++)),(d>=g||d>R((u-f)/J))&&e("overflow"),f+=d*J,c=v>=P?m:P>=v+B?B:P-v,!(c>d);P+=g)p=g-c,J>R(u/p)&&e("overflow"),J*=p;i=h.length+1,v=o(f-l,i,0==l),R(f/i)>u-k&&e("overflow"),k+=R(f/i),f%=i,h.splice(f++,0,k)}return r(h)}function J(N){var i,a,r,s,l,J,P,d,c,p,h,b,f,k,v,w=[];for(N=n(N),b=N.length,i=V,a=0,l=S,J=0;b>J;++J)h=N[J],128>h&&w.push(G(h));for(r=s=w.length,s&&w.push(y);b>r;){for(P=u,J=0;b>J;++J)h=N[J],h>=i&&P>h&&(P=h);for(f=r+1,P-i>R((u-a)/f)&&e("overflow"),a+=(P-i)*f,i=P,J=0;b>J;++J)if(h=N[J],i>h&&++a>u&&e("overflow"),h==i){for(d=a,c=g;p=l>=c?m:c>=l+B?B:c-l,!(p>d);c+=g)v=d-p,k=g-p,w.push(G(t(p+v%k,0))),d=R(v/k);w.push(G(t(d,0))),l=o(a,f,r==s),a=0,++r}++a,++i}return w.join("")}function P(N){return a(N,function(N){return b.test(N)?l(N.slice(4).toLowerCase()):N})}function d(N){return a(N,function(N){return f.test(N)?"xn--"+J(N):N})}var c,u=2147483647,g=36,m=1,B=26,p=38,h=700,S=72,V=128,y="-",b=/^xn--/,f=/[^\x20-\x7E]/,k=/[\x2E\u3002\uFF0E\uFF61]/g,v={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=g-m,R=Math.floor,G=String.fromCharCode;c={version:"1.3.2",ucs2:{decode:n,encode:r},decode:l,encode:J,toASCII:d,toUnicode:P},N.punycode=c}(),!function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},i={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},a="[^aeiou]",n="[aeiouy]",r=a+"[^aeiouy]*",s=n+"[aeiou]*",t="^("+r+")?"+s+r,o="^("+r+")?"+s+r+"("+s+")?$",l="^("+r+")?"+s+r+s+r,J="^("+r+")?"+n,P=function(N){var a,s,P,d,c,u,g,m;return N.length<3?N:(P=N.substr(0,1),"y"==P&&(N=P.toUpperCase()+N.substr(1)),c=/^(.+?)(ss|i)es$/,u=/^(.+?)([^s])s$/,c.test(N)?N=N.replace(c,"$1$2"):u.test(N)&&(N=N.replace(u,"$1$2")),c=/^(.+?)eed$/,u=/^(.+?)(ed|ing)$/,c.test(N)?(d=c.exec(N),c=new RegExp(t),c.test(d[1])&&(c=/.$/,N=N.replace(c,""))):u.test(N)&&(d=u.exec(N),a=d[1],u=new RegExp(J),u.test(a)&&(N=a,u=/(at|bl|iz)$/,g=new RegExp("([^aeiouylsz])\\1$"),m=new RegExp("^"+r+n+"[^aeiouwxy]$"),u.test(N)?N+="e":g.test(N)?(c=/.$/,N=N.replace(c,"")):m.test(N)&&(N+="e"))),c=/^(.+?)y$/,c.test(N)&&(d=c.exec(N),a=d[1],c=new RegExp(J),c.test(a)&&(N=a+"i")),c=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,c.test(N)&&(d=c.exec(N),a=d[1],s=d[2],c=new RegExp(t),c.test(a)&&(N=a+e[s])),c=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,c.test(N)&&(d=c.exec(N),a=d[1],s=d[2],c=new RegExp(t),c.test(a)&&(N=a+i[s])),c=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,u=/^(.+?)(s|t)(ion)$/,c.test(N)?(d=c.exec(N),a=d[1],c=new RegExp(l),c.test(a)&&(N=a)):u.test(N)&&(d=u.exec(N),a=d[1]+d[2],u=new RegExp(l),u.test(a)&&(N=a)),c=/^(.+?)e$/,c.test(N)&&(d=c.exec(N),a=d[1],c=new RegExp(l),u=new RegExp(o),g=new RegExp("^"+r+n+"[^aeiouwxy]$"),(c.test(a)||u.test(a)&&!g.test(a))&&(N=a)),c=/ll$/,u=new RegExp(l),c.test(N)&&u.test(N)&&(c=/.$/,N=N.replace(c,"")),"y"==P&&(N=P.toLowerCase()+N.substr(1)),N)};N.stemmer=P}(),!function(){var N=function(){this.t_={}};N.prototype.add=function(N,e){throw new Error("Not implmented")},N.prototype.isset=function(N){return null!==this.get(N)},N.prototype.get=function(N){throw new Error("Not implmented")}}(),!function(){var e=["en","fr"];s.toObject=function(N,e){},s.applyPOS=function(e,i,a){var n,s,t;for(t=N.tag(i,a),e.tags=t.tags,e.stats.confidence=t.confidence,n=0,s=i.length;s>n;n++)e.tokens.push(r.token(i[n],t.norms[n],t.tags[n]));return e.length=s,e},s.analyse=function(e,i){var a,l,J,P,d,c,u,g,m,B=[];for(l=n.advanced(N.decode(e),i),J=l.sentences,a=0,P=J.length;P>a;a++){for(d=Date.now(),c=r.sentence(l.raws[a],i),s.applyPOS(c,J[a],i),N.stat(c),g=t.context(),u=0,m=c.tokens.length;m>u;u++)t.apply("t",!0,c.tokens[u],u,c,g);for(t.apply("s",!0,c,a,B,g),o.parse(c),u=0,m=c.tokens.length;m>u;u++)t.apply("t",!1,c.tokens[u],u,c,g);B.push(c),t.apply("s",!1,c,a,B,g),c.time=Date.now()-d}return B},N.analyse=function(N,i){var a=null;if(i=i||"en",-1===e.indexOf(i))throw new Error("Compendium supports only the following languages: "+e.join(", "));return a=s.analyse(N,i),t.apply("p",!1,a),a}}(),!function(){e(a,{verbs:"accept add admire admit advise afford agree alert allow amuse analyse analyze announce annoy answer apologise appear applaud appreciate approve argue arrange arrest arrive ask attach attack attempt attend attract avoid back bake balance ban bang bare bat bathe battle beam beg behave belong bleach bless blind blink blot blush boast boil bolt bomb book bore borrow bounce bow box brake branch breathe bruise brush bubble bump burn bury buzz calculate call camp care carry carve cause challenge change charge chase cheat check cheer chew choke chop claim clap clean clear clip close coach coil collect colour comb command communicate compare compete complain complete concentrate concern confess confuse connect consider consist contain continue copy correct cough count cover crack crash crawl cross crush cry cure curl curve cycle dam damage dance dare decay deceive decide decorate delay delight deliver depend describe desert deserve destroy detect develop disagree disappear disapprove disarm discover dislike divide double doubt drag drain dream dress drip drop drown drum dry dust earn educate embarrass employ empty encourage end enjoy enter entertain escape examine excite excuse exercise exist expand expect explain explode extend face fade fail fancy fasten fax fear fence fetch file fill film fire fit fix flap flash float flood flow flower fold follow fool force form found frame frighten fry gather gaze glow glue grab grate grease greet grin grip groan guarantee guard guess guide hammer hand handle hang happen harass harm hate haunt head heal heap heat help hook hop hope hover hug hum hunt hurry identify ignore imagine impress improve include increase influence inform inject injure instruct intend interest interfere interrupt introduce invent invite irritate itch jail jam jog join joke judge juggle jump kick kill kiss kneel knit knock knot label land last laugh launch learn level license lick lie lighten like list listen live load lock long look love man manage mark marry match mate matter measure meddle melt memorise mend mess up milk mine miss mix moan moor mourn move muddle mug multiply murder nail name need nest nod note notice number obey object observe obtain occur offend offer open order overflow owe own pack paddle paint park part pass paste pat pause peck pedal peel peep perform permit phone pick pinch pine place plan plant play please plug point poke polish pop possess post pour practise practice pray preach precede prefer prepare present preserve press pretend prevent prick print produce program promise protect provide pull pump punch puncture punish push question queue race radiate rain raise reach realise receive recognise record reduce reflect refuse regret reign reject rejoice relax release rely remain remember remind remove repair repeat replace reply report reproduce request rescue retire return rhyme rinse risk rob rock roll rot rub ruin rule rush sack sail satisfy save scare scatter scold scorch scrape scratch scream screw scribble scrub seal search separate serve settle shade share shave shelter shiver shock shop shrug sigh sign signal sin sip ski skip slap slip slow smash smell smile smoke snatch sneeze sniff snore snow soak soothe sound spare spark sparkle spell spill spoil spot spray sprout squash squeak squeal squeeze stain stamp stare start stay steer step stir stitch stop store strap strengthen stretch strip stroke stuff subtract succeed suck suffer suggest suit supply support suppose surprise surround suspect suspend switch talk tame tap taste tease telephone tempt terrify test thank thaw tick tickle tie time tip tire touch tour tow trace trade train transport trap travel treat tremble trick trip trot trouble trust try tug tumble turn twist type undress unemploy unfasten unite unlock unpack untidy use vanish visit wail wait walk wander want warm warn wash waste watch water wave weigh welcome whine whip whirl whisper whistle wink wipe wish wobble wonder work worry wrap wreck wrestle wriggle yawn yell zip zoom".split(" "),irregular:"abide abode/abided abode/abided/abidden abides abiding	alight alit/alighted alit/alighted alights alighting	arise arose arisen arises arising	awake awoke awoken awakes awaking	be was/were been is being	bear bore born/borne bears bearing	beat beat beaten beats beating	become became become becomes becoming	begin began begun begins beginning	behold beheld beheld beholds beholding	bend bent bent bends bending	bet bet bet bets betting	bid bade bidden bids bidding	bid bid bid bids bidding	bind bound bound binds binding	bite bit bitten bites biting	bleed bled bled bleeds bleeding	blow blew blown blows blowing	break broke broken breaks breaking	breed bred bred breeds breeding	bring brought brought brings bringing	broadcast broadcast/broadcasted broadcast/broadcasted broadcasts broadcasting	build built built builds building	burn burnt/burned burnt/burned burns burning	burst burst burst bursts bursting	bust bust bust busts busting	buy bought bought buys buying	cast cast cast casts casting	catch caught caught catches catching	choose chose chosen chooses choosing	clap clapped/clapt clapped/clapt claps clapping	cling clung clung clings clinging	clothe clad/clothed clad/clothed clothes clothing	come came come comes coming	cost cost cost costs costing	creep crept crept creeps creeping	cut cut cut cuts cutting	dare dared/durst dared dares daring	deal dealt dealt deals dealing	dig dug dug digs digging	dive dived/dove dived dives diving	do did done does doing	draw drew drawn draws drawing	dream dreamt/dreamed dreamt/dreamed dreams dreaming	drink drank drunk drinks drinking	drive drove driven drives driving	dwell dwelt dwelt dwells dwelling	eat ate eaten eats eating	fall fell fallen falls falling	feed fed fed feeds feeding	feel felt felt feels feeling	fight fought fought fights fighting	find found found finds finding	fit fit/fitted fit/fitted fits fitting	flee fled fled flees fleeing	fling flung flung flings flinging	fly flew flown flies flying	forbid forbade/forbad forbidden forbids forbidding	forecast forecast/forecasted forecast/forecasted forecasts forecasting	foresee foresaw foreseen foresees foreseeing	foretell foretold foretold foretells foretelling	forget forgot forgotten forgets foregetting	forgive forgave forgiven forgives forgiving	forsake forsook forsaken forsakes forsaking	freeze froze frozen freezes freezing	frostbite frostbit frostbitten frostbites frostbiting	get got got/gotten gets getting	give gave given gives giving	go went gone/been goes going	grind ground ground grinds grinding	grow grew grown grows growing	handwrite handwrote handwritten handwrites handwriting	hang hung/hanged hung/hanged hangs hanging	have had had has having	hear heard heard hears hearing	hide hid hidden hides hiding	hit hit hit hits hitting	hold held held holds holding	hurt hurt hurt hurts hurting	inlay inlaid inlaid inlays inlaying	input input/inputted input/inputted inputs inputting	interlay interlaid interlaid interlays interlaying	keep kept kept keeps keeping	kneel knelt/kneeled knelt/kneeled kneels kneeling	knit knit/knitted knit/knitted knits knitting	know knew known knows knowing	lay laid laid lays laying	lead led led leads leading	lean leant/leaned leant/leaned leans leaning	leap leapt/leaped leapt/leaped leaps leaping	learn learnt/learned learnt/learned learns learning	leave left left leaves leaving	lend lent lent lends lending	let let let lets letting	lie lay lain lies lying	light lit lit lights lighting	lose lost lost loses losing	make made made makes making	mean meant meant means meaning	meet met met meets meeting	melt melted molten/melted melts melting	mislead misled misled misleads misleading	mistake mistook mistaken mistakes mistaking	misunderstand misunderstood misunderstood misunderstands misunderstanding	miswed miswed/miswedded miswed/miswedded misweds miswedding	mow mowed mown mows mowing	overdraw overdrew overdrawn overdraws overdrawing	overhear overheard overheard overhears overhearing	overtake overtook overtaken overtakes overtaking	pay paid paid pays paying	preset preset preset presets presetting	prove proved proven/proved proves proving	put put put puts putting	quit quit quit quits quitting	re-prove re-proved re-proven/re-proved re-proves re-proving	read read read reads reading	rid rid/ridded rid/ridded rids ridding	ride rode ridden rides riding	ring rang rung rings ringing	rise rose risen rises rising	rive rived riven/rived rives riving	run ran run runs running	say said said says saying	see saw seen sees seeing	seek sought sought seeks seeking	sell sold sold sells selling	send sent sent sends sending	set set set sets setting	sew sewed sewn/sewed sews sewing	shake shook shaken shakes shaking	shave shaved shaven/shaved shaves shaving	shear shore/sheared shorn/sheared shears shearing	shed shed shed sheds shedding	shine shone shone shines shining	shoe shod shod shoes shoeing	shoot shot shot shoots shooting	show showed shown shows showing	shrink shrank shrunk shrinks shrinking	shut shut shut shuts shutting	sing sang sung sings singing	sink sank sunk sinks sinking	sit sat sat sits sitting	slay slew slain slays slaying	sleep slept slept sleeps sleeping	slide slid slid/slidden slides sliding	sling slung slung slings slinging	slink slunk slunk slinks slinking	slit slit slit slits slitting	smell smelt/smelled smelt/smelled smells smelling	sneak sneaked/snuck sneaked/snuck sneaks sneaking	soothsay soothsaid soothsaid soothsays soothsaying	sow sowed sown sows sowing	speak spoke spoken speaks speaking	speed sped/speeded sped/speeded speeds speeding	spell spelt/spelled spelt/spelled spells spelling	spend spent spent spends spending	spill spilt/spilled spilt/spilled spills spilling	spin span/spun spun spins spinning	spit spat/spit spat/spit spits spitting	split split split splits splitting	spoil spoilt/spoiled spoilt/spoiled spoils spoiling	spread spread spread spreads spreading	spring sprang sprung springs springing	stand stood stood stands standing	steal stole stolen steals stealing	stick stuck stuck sticks sticking	sting stung stung stings stinging	stink stank stunk stinks stinking	stride strode/strided stridden strides striding	strike struck struck/stricken strikes striking	string strung strung strings stringing	strip stript/stripped stript/stripped strips stripping	strive strove striven strives striving	sublet sublet sublet sublets subletting	sunburn sunburned/sunburnt sunburned/sunburnt sunburns sunburning	swear swore sworn swears swearing	sweat sweat/sweated sweat/sweated sweats sweating	sweep swept/sweeped swept/sweeped sweeps sweeping	swell swelled swollen swells swelling	swim swam swum swims swimming	swing swung swung swings swinging	take took taken takes taking	teach taught taught teaches teaching	tear tore torn tears tearing	tell told told tells telling	think thought thought thinks thinking	thrive throve/thrived thriven/thrived thrives thriving	throw threw thrown throws throwing	thrust thrust thrust thrusts thrusting	tread trod trodden treads treading	undergo underwent undergone undergoes undergoing	understand understood understood understands understanding	undertake undertook undertaken undertakes undertaking	upsell upsold upsold upsells upselling	upset upset upset upsets upsetting	vex vext/vexed vext/vexed vexes vexing	wake woke woken wakes waking	wear wore worn wears wearing	weave wove woven weaves weaving	wed wed/wedded wed/wedded weds wedding	weep wept wept weeps weeping	wend wended/went wended/went wends wending	wet wet/wetted wet/wetted wets wetting	win won won wins winning	wind wound wound winds winding	withdraw withdrew withdrawn withdraws withdrawing	withhold withheld withheld withholds withholding	withstand withstood withstood withstands withstanding	wring wrung wrung wrings wringing	write wrote written writes writing	zinc zinced/zincked zinced/zincked zincs/zincks zincking".split("	").map(function(N){return N.split(" ")}),infinitives:[],ing_excpt:["anything","spring","something","thing","king","nothing"],ing_test:[],emphasis:["totally","fully","really","surprisingly","absolutely","actively","clearly","crazily","greatly","happily","notably","severly","particularly","highly","quite","pretty","seriously","very","horribly","even","overly","extremely"],abbrs:["jr","junior","mr","mister","mrs","missus","ms","miss","dr","doctor","prof","professor","pr","professor","sr","senior","sen","senator","sens","senators","corp","corporation","rep","","gov","","atty","attorney","supt","superintendent","det","detective","rev","","col","colonel","gen","general","lt","lieutenant","cmdr","commander","adm","administrative","capt","captain","sgt","sergent","cpl","caporal","maj","","esq","esquire","phd","","adj","adjective","adv","adverb","asst","assistant","bldg","building","brig","brigade","hon","","messrs","messeurs","mlle","mademoiselle","mme","madame","op","","ord","order","pvt","private","reps","","res","","sens","","sfc","","surg","surgeon","ph","","ds","","arc","","al","","ave","avenue","blvd","boulevard","cl","","ct","","cres","","exp","","rd","road","st","street","dist","","mt","mount","ft","","fy","","hwy","highway","la","","pd","","pl","","plz","","tce","","vs","","etc","","esp","","llb","","md","","bl","","ma","","ba","","lit","","fl","","ex","example","eg","","ala","alabama","ariz","arizona","ark","arkansas","cal","california","calif","california","col","coloradoa","colo","colorado","conn","connecticut","del","delaware","fed","federal","fla","florida","ga","georgia","ida","idaho","id","idaho","ill","illinois","ind","indiana","ia","iowa","kan","kansas","kans","kansas","ken","kentuky","ky","kentuky","la","","me","","md","","mass","massachussets","mich","michigan","minn","minnesota","miss","mississippi","mo","missouri","mont","montana","neb","nebraska","nebr","nebraska","nev","nevada","mex","mexico","okla","oklahoma","ok","oklahoma","ore","oregon","penna","pennsylvania","penn","pennsylvania","pa","pennsylvania","dak","dakota","tenn","tennessee","tex","texas","ut","utah","vt","vermont","va","virginia","wash","washington","wis","wisconsin","wisc","wisconsin","wy","wyoming","wyo","wyoming","alta","alberta","ont","ontario","que","quebec","sask","saskatchewan","yuk","yukon","jan","january","feb","february","mar","march","apr","april","jun","june","jul","july","aug","august","sep","september","oct","october","nov","november","dec","december","sept","september","dept","department","univ","university","assn","association","bros","brothers","inc","incorported","ltd","limited","co",""],synonyms:"no nah nope n	yes yeah yep yup y yah aye yea	seriously srlsy	ok k okay o.k. oki okey-dokey okey-doke	them 'em	you ya ye	your yo	because cuz	please plz	this dis	tomorrow 2moro	tonight 2nite	today 2day	great gr8	later l8r	thanks thx thks tx	are 're	am 'm",abbrs_rplt:[],exclamations:["yahoo","joomla","jeopardy"],rules:"VBP VB 13 MD	VBZ POS 8 NN 's	VBZ POS 8 NNS 's	VBZ POS 8 NNP 's	VBZ POS 8 NNPS 's	VBZ POS 8 VB 's	NNS POS 8 VB 's	NNS POS 8 NN '	NNS POS 8 NNS '	NNS POS 8 NNP '	NNS POS 8 NNPS '	NNS POS 8 NN 's	NNS POS 8 NNS 's	NNS POS 8 NNP 's	NNS POS 8 NNPS 's	NN VB 1 MD	VB NN 1 DT	VB NN 2 JJR	VB NN 2 JJ	VB NN 2 NN	VB NN 2 IN	NN VBG 2 PRP	VBD VBN 21 be	JJR RBR 3 JJ	JJS RBS 12 most JJ	NN RB 121 kind of	JJ IN 8 NNP in	RB DT 8 VBZ no	JJ IN 8 NN in	JJ IN 8 JJ in	JJ IN 8 RB in	JJ IN 8 VB in	JJ IN 8 NNS in	JJ IN 8 VBN in	JJ IN 8 CD in	IN RB 12 as RB	WRB RB 12 when PRP	WRB RB 8 IN how	JJ RB 8 RB much	JJR RBR 12 more JJ	IN RP 8 VBD up	IN RB 8 CD up	IN RB 8 NN up	RP RB 8 VBD up	IN RP 8 VB up	RB RP 8 VB back	RB RP 8 VBD back	RB RP 8 VBG back	RB IN 81 years ago	RB IN 81 year ago	IN WDT 8 NN that	RB WRB 12 when PRP	IN DT 12 that NN	WDT IN 12 that NN	WDT IN 12 that DT	WDT IN 12 that PRP	WRB RB 12 when DT	VB NN 3 VBZ +	VBG MD 6 'll	VBG MD 6 wo	VBD VBN 13 VBZ	VBN VBD 3 .	VBN VBD 3 DT	VBG VBP 2 PRP	VBN VBD 2 PRP	VBN VBD 2 NNP	VBN VBD 2 NN	VBN VBD 2 NNS	VBN VBD 2 WP	VBN VBD 14 NN RB	VBN VBD 14 PRP DT	VBD VBN 2 VBD	VBD VBN 2 VB	VBD VBN 2 VBG	VBD VBN 2 VBZ	VBD VBN 2 VBZ	VBD VBN 2 VBP	VBD VBN 14 RB TO	VBD VBN 14 VBZ JJ	VBD VBN 14 VBP JJ	VBD VBN 171 TO PRP	VBD VBN 15 by	VBN VBD 15 that	VBN VBD 5 which	VBD VBN 5 has	VBD VBN 13 VBD	VB VBN 5 has	VBD VBN 17 MD	VBG NN 2 DT	VBG NN 2 JJ	VBG NN 2 PRP$	RBS JJS 2 IN	NN VB 14 TO DT	NN VB 14 TO IN	VB VBP 14 PRP DT	VB VBP 14 PRP IN	VBP VB 14 MD VBN	MD VBG 14 VBZ TO	MD VBG 14 VBP TO	VBP VB 14 MD TO	VBP VB 14 TO DT	VBN VBD 14 PRP PRP	VB VBD 14 PRP TO	VB VBP 14 PRP PRP	VBN VBD 14 NNP DT	VB VBP 2 NNS	VBP VB 51 to TO	NNS NN 51 a DT	NNP MD 12 may VB	VBP VB 81 may have	VBP MD 6 gon	VBP VB 8 MD have	RB DT 8 VBD no	RB DT 8 IN no	JJ JJS 8 DT latest	PRP$ PRP 8 VBD her	JJ NN 8 CD fine	JJ RB 8 IN much	NNP MD 8 PRP may	NNP MD 8 NNP may	NNP MD 8 NN may	NNP MD 8 NNS may	NNP MD 8 CC may	JJ NN 8 CC chief	JJ VB 8 TO slow	JJ VB 8 MD slow	NNS VBZ 8 PRP plans	NNS VBZ 8 NN plans	NNS VBZ 8 NNP plans	NNS VBZ 8 NNPS plans	RB NNP 12 south NNP	RB NNP 12 east NNP	RB NNP 12 west NNP	RB NNP 12 north NNP	FW NNP 12 la NNP	JJ NNP 12 american NNP	VBN NNP 12 united NNP	WRB RB 12 when PRP	RBR JJR 81 year earlier	RBR JJR 81 years earlier	NN VB 17 NN TO	VBG NN 2 JJR	CD NN 8 DT one	CD PRP 12 one VBZ	VBZ NNS 2 PRP$	VBZ NNS 2 WP$	VBZ NNS 2 VBZ	VBZ NNS 2 VBP	VBZ NNS 2 JJ	VBZ NNS 2 JJS	VBZ NNS 2 JJR	VBZ NNS 2 POS	VBZ NNS 2 CD	VBZ NNS 51 the DT	VBZ NNS 15 is	VBZ NNS 15 are	VBZ NNS 5 the	VBZ NNS 5 those	VBZ NNS 5 these	NNS VBZ 2 PRP	NN NNP 17 VBP TO	NN NNP 17 VBD TO	NN NNP 17 VBZ TO	NNS NNPS 17 VBP TO	NNS NNPS 17 VBD TO	NNS NNPS 17 VBZ TO	VB VBP 2 WDT	VB VBP 2 WP	VB VBP 2 PRP	VBZ NNS 2 VBG	VBZ NNS 2 VBN	VBZ NNS 2 VBD	NNS VBZ 2 WDT	NNS VBZ 2 WP	VBZ NNS 2 IN	VB VBP 8 NNP have	VB VBP 8 EX have	VB VBP 8 RB have	VB VBP 8 RBR have	IN WDT 8 NNS that	VBP IN 8 JJR like	VBP IN 8 RBR like	VBP IN 8 VBD like	VBP IN 8 VBN like	VBP IN 8 RB like	VBP IN 8 VBZ like	WDT IN 12 that DT	IN WDT 12 that VBP	NN UH 12 hell UH	NN UH 12 hell RB	VB NN 8 PRP$ bid	VBN JJ 51 is VBZ	VBN JJ 51 are VBP	VBN JJ 14 NN JJ	VBN JJ 14 RB NN	RB DT 8 VBN no	RB DT 8 VBG no	RB DT 8 VBD no	RB DT 8 VBP no	RB DT 8 VB no	RB DT 8 RB no	IN RP 8 VB out	IN RP 8 VBZ out	IN RP 8 VBG out	IN RP 8 VBN out	IN RP 8 VBP out	IN RP 8 VB off	IN RP 8 VBZ off	IN RP 8 VBG off	IN RP 8 VBN off	IN RP 8 VBP off	NN VB 5 will	JJ VB 5 will	NN NNP 5 mr.	NNS VBZ 6 has	VB NN 5 the	VBD VBN 15 with	VBN VBD 6 was	NNS VBZ 6 is	NN VBP 6 have	VBD VBP 6 have	CD NN 81 no one	VBG JJ 14 , JJ	VBG JJ 14 DT JJ	VBG JJ 14 , NN	VBG JJ 14 DT NN	NNS VBZ 8 WDT 's	NNS VBZ 8 DT 's	NNS VBZ 8 IN 's	NNP UH 0 RT	NNP UH 0 MT	JJ VBN 14 VBZ IN	JJ NN 14 DT IN	JJ VBN 14 VBP IN	NN JJ 6 first	NN JJ 6 last	NN JJ 6 high	NN JJ 6 low	NN JJ 6 middle	",suffixes:"rate VB	rates VBZ	late VB	lates VBZ	nate VB	nates VBZ	izes VBZ	ize VB	ify VB	ifies VBZ	ising VBG	ism NN	able JJ	ible JJ	ical JJ	esque JJ	ous JJ 	etic JJ	atic JJ	egic JJ	ophic JJ	ish JJ	ive JJ	gic JJ	tic JJ	mic JJ	phile JJ	less JJ	ful JJ	edelic JJ	adelic JJ	aholic JJ	oholic JJ	ilar JJ	ular JJ	ly RB	like JJ	wise RB	ise VB	some JJ	escent JJ	chy JJ	thy JJ	shy JJ	sty JJ	tty JJ	bby JJ	ssy JJ	zzy JJ	mmy JJ	ppy JJ	tary JJ	nary JJ	ial JJ	alous JJ	ally RB	vid JJ	rid JJ	wards RB	iest JJS	dest JJS	rth JJ",emots:[],floatChar:".",thousandChar:",",multipliers:["hundred","thousand","million","billion","trillion"],numbers:{zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,ninteen:19,twenty:20,thirty:30,forty:40,fourty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100,thousand:1e3,million:1e6,billion:1e9,trillion:1e12},nationalities:"afghan albanian algerian argentine armenian australian aussie austrian bangladeshi belgian bolivian bosnian brazilian bulgarian cambodian canadian chilean chinese colombian croat cuban czech dominican egyptian british estonian ethiopian finnish french gambian georgian german greek haitian hungarian indian indonesian iranian iraqi irish israeli italian jamaican japanese jordanian kenyan korean kuwaiti latvian lebanese liberian libyan lithuanian macedonian malaysian mexican mongolian moroccan dutch nicaraguan nigerian norwegian omani pakistani palestinian filipino polish portuguese qatari romanian russian rwandan samoan saudi scottish senegalese serbian singaporean slovak somali sudanese swedish swiss syrian taiwanese thai tunisian ugandan ukrainian american hindi spanish venezuelan vietnamese welsh african european asian californian",neg:{without:"IN",except:"IN",absent:"JJ",unlike:"IN",unable:"JJ",unremarkable:"JJ",unlikely:"JJ",negative:"JJ",hardly:"RB",deny:"VB",fail:"VB",exclude:"VB",lack:"NN",absence:"NN",none:"NN",nothing:"NN"},neg_neg:{only:"RB",just:"RB",solely:"RB",uniquely:"RB",exclusively:"RB"},refusal:{not:"RB","n't":"RB","'t":"RB",no:"RB",neither:"DT",nor:"DT",never:"RB"},approval:{yes:"UH",ok:"NN",agreed:"VBN",agree:"VBP",affirmative:"JJ",approved:"VBN",sure:"JJ",roger:"NN",indeed:"RB",right:"NN",alright:"JJ"},approval_verbs:["go","do"],breakpoints:{},citations:{'"':'"',"'":'"',"`":'"'},p:{i:"PRP",you:"PRP"},months:{january:"NNP",february:"NNP",march:"NNP",april:"NNP",may:"NNP",june:"NNP",july:"NNP",august:"NNP",september:"NNP",october:"NNP",november:"NNP",december:"NNP"},days:{monday:"NNP",tuesday:"NNP",wednesday:"NNP",thursday:"NNP",friday:"NNP",saturday:"NNP",sunday:"NNP"},indicators:{first:"JJ",both:"DT",second:"JJ",third:"JJ",last:"JJ",previous:"JJ",next:"JJ",latest:"JJ",earliest:"JJ"},dirty:"anal anus arse ass asshole ballsack bastard bitch biatch bloody blowjob bollock bollok boner boob bugger bum butt buttplug clitoris cock coon crap cunt damn dick dildo dyke fag feck fellate fellatio felching fuck fucking fudgepacker fudgepacker flange homo jerk jizz knobend knobend labia lmfao muff nigger nigga penis piss poop prick pube pussy queer scrotum sex shit sh1t slut smegma spunk tit tosser turd twat vagina wank whore crappy".split(" "),polite:"thanks thank please excuse pardon welcome sorry might ought".split(" ")})}(),!function(){var e=N.inflector,i=function(i){var n,r,s,t,o,l,J,d,c,u=(Date.now(),i.split("	")),g={},m=[];for(n=0,s=u.length;s>n;n++)c=u[n].split(" "),d=c.length-1,o=d>0?c[1].trim():"",l=0,J=null,c[d].match(/^[A-Z]{2,}\/[0-9\-]+$/g)?(J=c[d].split("/")[0],l=c[d].split("/")[1]):(c[d].match(/^[0-9\-]+$/g)||c[d].match(/^\-{0,1}[0-4]\.[0-9]$/g))&&(l=c[d].indexOf(".")>0?parseFloat(c[d]):parseInt(c[d],10)),

}(),!function(){var e={'"':/(&quot;|\u201C|\u201D)/gi,"&":/&amp;/gi,"'":/(&#x27;|\u2018|\u2019)/gi,"<":/&lt;/gi,">":/&gt;/gi,"`":/&#x60/gi,shit:/(s\&\^t|sh\*t)/gi,fuck:/(f\*ck)/gi,"just kidding":"j/k",without:/w\/[to]/g,"with":"w/"," out of ":/\soutta\s/gi};N.decode=function(N){var i;for(i in e)e.hasOwnProperty(i)&&(N=N.replace(e[i],i));return N}}(),!function(){var N=[["VBZ","VBP","VBD","VBG"],["MD","VB"],["NNP","NNPS","NN","NNS"],["WP","WRB"],["UH"]],i="unknown",a=[["NNP","NNP","compound"],["PRP","VBZ","subj"],["PRP","VBP","subj"],["PRP","VBD","subj"],["DT","VBZ","subj"],["DT","VBP","subj"],["DT","VBD","subj"],["WRB","VBP","attr"],["WRB","VBZ","attr"],["WRB","VBD","attr"],["VBG","VBP"],["TO","VB"],["TO","NN"],["TO","NNS"],["DT","NN","det"],["DT","NNP","det"],["PRP$","NN","poss"],["RB","JJ","advmod"],["JJ","NN","amod"],["JJ","NNS","amod"],["JJ","NNP","amod"],["VBG","JJ"],["NN","VBZ","subj"],["NN","VBP","subj"],["NN","VBD","subj"],["NN","VB","subj"],["NNP","VBZ","subj"],["NNP","VBP","subj"],["NNP","VBD","subj"],["NNP","VB","subj"]],n=[["PRP","VBZ","obj"],["PRP","VBP","obj"],["PRP","VBD","obj"],["NN","IN","obj"],["IN","VBZ"],["IN","VBP"],["IN","VBD"],["IN","VBG"],["JJ","VBD","acomp"],["JJ","VBP","acomp"],["JJ","VBZ","acomp"],["IN","VB"],["CC","JJ"],["NNP","VB","obj"],["NN","VB","obj"],["VB","VB","xcomp"]],r=20;e(o,{expand:function(N,e){var s,t,o,l,J,P,d=N.length,c=a.length,u=0,g=!1;for(s=0;d-e>s;s++,u=0)if(P=N.tokens[s],"number"!=typeof P.deps.master&&(l=N.tokens[s+e],P.deps.master!==l.deps.master&&"number"==typeof l.deps.master))for(;(J=N.tokens[l.deps.master])&&l!==J&&l.deps.master&&P.deps.master!==l.deps.master&&(u++,!(u>r));){for(o=P.pos,t=0;c>t;t++)if(o===a[t][0]&&J.pos===a[t][1]){P.deps.master=l.deps.master,P.deps.type=a[t][2]||i,g=!0;break}if(g)break;l=J}for(s=d-1,c=n.length;s>e;s--)if(P=N.tokens[s],"number"!=typeof P.deps.master&&(l=N.tokens[s-e],"number"==typeof l.deps.master&&P.deps.master!==l.deps.master))for(J=N.tokens[l.deps.master],o=P.pos,t=0;c>t;t++)if(o===n[t][0]&&J.pos===n[t][1]){P.deps.master=l.deps.master,P.deps.type=n[t][2]||i,g=!0;break}return g},parse:function(e){var s,t,o,l,J,P=e.length,d=a.length,c=0,u=!0,g=null,m=null,B=0,p=0;if(1===P)return J=e.tokens[0],J.deps.governor=!0,void(e.governor=0);for(s=0;P-1>s;s++)if(J=e.tokens[s],l=e.tags[s+1],o=J.pos,N[B].indexOf(o)>-1)null===g?(g=s,m=s):J.deps.master=g;else for(t=0;d>t;t++)if(o===a[t][0]&&l===a[t][1]){J.deps.master=s+1,J.deps.type=a[t][2]||i;break}for(s=P-1;s>=0;s--)J=e.tokens[s],l=e.tokens[s+1],s!==g&&("compound"===J.deps.type||"det"===J.deps.type?(null!==g&&s>g&&"number"!=typeof l.deps.master&&(l.deps.master=g,l.deps.type="obj"),p+=1,p>1&&(J.deps.master=l.deps.master)):p=0);for(s=P-1,d=n.length;s>0;s--)if(J=e.tokens[s],"number"!=typeof J.deps.master)for(l=e.tags[s-1],o=J.pos,t=0;d>t;t++)if(o===n[t][0]&&l===n[t][1]){J.deps.master=s-1,J.deps.type=n[t][2]||i;break}for(;u&&r>c;){for(u=!1,s=1;5>s;s+=1)u=this.expand(e,s)||u;c+=1}for(d=N.length-1;null===g&&d>B;)for(B++,s=0;P>s;s++)if(N[B].indexOf(e.tags[s])>-1){g=s;break}for(null!==g&&(e.governor=g,e.tokens[g].deps.governor=!0),this.reconnect(e),s=0;P>s;s++)J=e.tokens[s],s!==g&&((null===J.deps.master||J.deps.master===s)&&(J.deps.master=g),null!==J.deps.master&&e.tokens[J.deps.master].deps.dependencies.push(s),"subj"===J.deps.type?e.deps.subjects.push(s):"obj"===J.deps.type&&e.deps.objects.push(s))},reconnect:function(N){var e,a,r,s,t,o,l,J=N.length,P=n.length;for(e=J-1;e>=0;e--)if(l=N.tokens[e],l.deps.governor!==!0&&"number"!=typeof l.deps.master){for(r=e,o=e;o===e&&(r--,-1!==r);)o=N.tokens[r].deps.master;if(-1!==r)for(t=N.tags[r],s=l.pos,a=0;P>a;a++)if(s===n[a][0]&&t===n[a][1]){l.deps.master=r,l.deps.type=n[a][2]||i;break}}}})}(),!function(){var N={t:[],s:[]},e={t:[],s:[],p:[]},i=[];t.init=function(N){i.push(N)},t.context=function(){var N,e={},a=i.length;for(N=0;a>N;N+=1)i[N](e);return e},t.before=function(e,i){N.hasOwnProperty(e)?N[e].push(i):console.warn("No detector with type "+e)},t.add=function(N,e){return console.warn("compendium.detectors.add is a deprecated function - please use compendium.detectors.after"),t.after(N,e)},t.after=function(N,i){e.hasOwnProperty(N)?e[N].push(i):console.warn("No detector with type "+N)},t.apply=function(i,a){var n,r,s=Array.prototype.slice.call(arguments).slice(2),t=a?N:e;if(t.hasOwnProperty(i))for(n=0,r=t[i].length;r>n;n++)t[i][n].apply(null,s)}}(),!function(){var N=function(N,e){if(e>=N.length)return!1;var i=N.tags[e+1];return"NNP"===i||"NNPS"==i},e=function(N,e){return"&"===N||"TO"===N||"CC"===N&&"or"!==e};t.before("s",function(i,a,n){var s,t,o,l,J,P,d=i.length,c=i.stats;if(!(c.p_upper>75||c.p_cap>85))for(s=0;d>s;s++)t=i.tags[s],o=i.tokens[s],l=o.norm,o.attr.entity>-1?P=null:"NN"===t?P=null:"NNP"===t||"NNPS"===t||P&&e(t,l)&&N(i,s)?P?(P.raw+=" "+o.raw,P.norm+=" "+o.norm,P.toIndex=s,o.attr.entity=J):(P=r.entity(o,s),J=o.attr.entity=i.entities.push(P)-1):P=null})}(),!function(){var N=Object.keys(a.neg).concat(Object.keys(a.refusal)),e=Object.keys(a.neg_neg),i=[["but","to"]];t.after("s",function(a,n,r){var s,t,o,l,J,P=a.length,d=i.length,c=!1,u=0,g=0;for(s=0;P>s;s++){if(J=a.tokens[s],l=a.tokens[s+1],J.profile.breakpoint||J.attr.is_punc)u=0,c=!1;else if(N.indexOf(J.norm)>-1)c?c=!1:(o=a.tokens[s-1],"RB"===J.pos&&o&&(o.attr.is_verb||"MD"===o.pos)&&(o.profile.negated=!0),g++,c=!0);else if(c&&e.indexOf(J.norm)>-1&&0===u)a.tokens[s-1].profile.negated=!1,g--,c=!1;else if(c){for(t=0;d>t&&P-1>s;t+=1)if(J.norm===i[t][0]&&l.norm===i[t][1]){c=!1;break}c&&(g++,u++)}J.profile.negated=c}a.profile.negated=g>0})}(),!function(){var N=["WP","WP$","WRB"];t.after("s",function(e,i){var a,n,r,s,t=e.length,o=e.stats,l=e.governor,J=e.profile.types,P=e.tokens[0],d=e.tokens[t-1];if(t>2&&(o.p_foreign>=10&&o.confidence<.5||o.confidence<=.2)&&J.push(c),o.p_cap>75&&o.p_upper<50&&t>10&&J.push(m),"!"===d.norm)J.push(g);else if("?"===d.norm||N.indexOf(P.pos)>-1&&0===o.breakpoints)J.push(u);else if(l>-1)if(a=e.tags[l],N.indexOf(a)>-1)J.push(u);else if("."!==d.pos&&0===a.indexOf("VB"))if("PRP"===e.tags[l+1]&&0===(e.tags[l+2]||"").indexOf("VB")&&J.push(u),l>1&&"PRP"===e.tags[l-1]&&0===e.tags[l-2].indexOf("VB"))J.push(u);else if("PRP"===e.tags[l-1]&&"MD"===e.tags[l-2])J.push(u);else for(n=e.tokens[l].deps.dependencies,r=0,s=n.length;s>r;r++)N.indexOf(e.tags[n[r]])>-1&&(e.tags[n[r]-1]||"").indexOf("VB")<0&&J.push(u);l>-1&&-1===J.indexOf(u)&&"VB"===e.tags[l]&&J.push(B)})}(),!function(){var N=a.dirty,e=a.polite,i=a.emphasis,n=["wo","'ll","will"],r=function(N,e){var i,a,n=e.deps.dependencies,s=n.length,t=0;if(0!==s){for(i=0;s>i;i+=1)a=N.tokens[n[i]],r(N,a),t+=a.profile.sentiment;e.profile.sentiment+=parseInt(t/s*100)/100}};t.after("s",function(a,s,t){var o,l,J,P,c,g,m,B=a.length,p=0,h=1,S=0,V=0,y=0,b=0,f=0,k=0,v=0,w=a.governor,R=a.profile;for(o=0;B>o;o++)l=a.tokens[o].profile,P=a.tokens[o].pos,c=a.tokens[o].norm,m=N.indexOf(c)>-1,g=e.indexOf(c)>-1,m?f++:g&&b++,l.negated&&"."!==P&&"EM"!==P&&(l.sentiment=m?l.sentiment/2:-l.sentiment/2);for(w>-1&&(J=a.tokens[w],r(a,J),P=J.pos,J.attr.is_verb?R.main_tense="VBD"===P?"past":"present":"MD"===P&&n.indexOf(J.norm)>-1&&(R.main_tense="future")),a.stats.p_upper>70&&(h=1.2),o=0;B>o;o++)l=a.tokens[o].profile,P=a.tokens[o].pos,c=a.tokens[o].norm,h*=l.emphasis,("JJS"===P||"RB"===P&&i.indexOf(c)>-1)&&(y+=l.negated?2:5),S=l.sentiment*(1+y/10),p+=S,S>v?v=S:k>S&&(k=S),l.emphasis*=1+y/10,y>0&&-1===["DT","POS","IN"].indexOf(P)&&y--;5>B?B*=2:B>10&&(B/=2),V=(v+-k)/B,p*=h,p/=B,R.types.indexOf(u)>-1&&(p/=2),R.sentiment=p,R.emphasis=h,R.amplitude=V,R.dirtiness=f/B,R.politeness=b/B,Math.abs(V)>.5&&Math.abs(p)<.5&&Math.abs(V)>Math.abs(p)?R.label="mixed":p<=d.profile.negative_threshold?R.label="negative":p>=d.profile.positive_threshold?R.label="positive":V>=d.profile.amplitude_threshold&&(R.label="mixed")})}(),!function(){var N=Object.keys(a.approval),e=Object.keys(a.refusal);t.after("s",function(i,n){var r,s,t,o=i.tokens[0],l=i.profile,J=i.governor>-1?i.tokens[i.governor]:null,P=J?J.deps.dependencies:null,d=i.stats.words,c=l.types;if(!(c.indexOf(u)>-1)){if(e.indexOf(o.norm)>-1)c.push(h);else if(1===d&&"JJ"===o.pos&&l.sentiment<0)c.push(h);else if(J)if(e.indexOf(J.norm)>-1)c.push(h);else if(c.indexOf(B)>-1&&a.approval_verbs.indexOf(J.norm)>-1&&J.profile.negated)c.push(h);else if("UH"===J.pos)for(s=0,t=P.length;t>s;s+=1)r=i.tokens[P[s]],("UH"===r.pos||"RB"===r.pos)&&e.indexOf(r.norm)>-1&&c.push(h);if(!(c.indexOf(h)>-1))if(N.indexOf(o.norm)>-1)c.push(p);else if(1===d&&"JJ"===o.pos&&l.sentiment>0)c.push(p);else if(J&&3>=d)if(N.indexOf(J.norm)>-1)c.push(p);else if(c.indexOf(B)>-1&&a.approval_verbs.indexOf(J.norm)>-1)c.push(p);else if("UH"===J.pos)for(s=0;t>s;s+=1)r=i.tokens[P[s]],"UH"===r.pos&&N.indexOf(r.norm)>-1&&c.push(p)}})}(),!function(){var N=a.floatChar,e=a.thousandChar,i=/[0-9]/,n=/^-?[0-9]+$/,r=new RegExp("^-?[0-9]*\\"+N+"[0-9]+$"),s=new RegExp("^-?[0-9]+([\\"+e+"][0-9]+){1,}$"),o=new RegExp("^-?[0-9]+([\\"+e+"][0-9]+){1,}(\\"+N+"[0-9]+)$"),l=new RegExp("\\"+e,"g"),J=a.numbers,P=a.multipliers,d=function(N){var e=N.norm;if(e.match(i)){if(e.match(n))return parseInt(e,10);if(e.match(r))return parseFloat(e);if(e.match(o))return parseFloat(e.replace(l,""));if(e.match(s))return parseInt(e.replace(l,""),10)}return e=N.attr.singular,J.hasOwnProperty(e)?J[e]:null},c=function(N,e){var i,a,n,r=e[2],s=e[1],t=0;if(1===e[1])return i=r[0],d(i);for(a=0;s>a;a+=1){if(i=r[a],n=d(i),null===n)return null;P.indexOf(i.attr.singular)>-1?t*=n:t+=n}return t},u=function(N,e){var i,a=N[2],n=a.length;for(i=0;n>i;i+=1)a[i].attr.value=e};t.before("s",function(N,e,i,a){for(var n,r,s=a.numericSections,t=s.length,n=0;t>n;n+=1)r=c(N,s[n]),null!==r&&u(s[n],r)})}(),!function(){var e=N.lexicon;t.before("t",function(i,n,r){var s,t,o,J,P=i.raw,d=i.norm,c=i.stem,u=i.pos,g=0,m=1;t=P.toLowerCase(),o=t.length,o>1&&P.indexOf(".")===o-1&&(J=a.abbrs.indexOf(t.slice(0,o-1)))>-1?(i.attr.abbr=!0,d=a.abbrs_rplt[J]):P.match(/^([a-z]{1}\.)+/gi)?i.attr.acronym=!0:d=N.synonym(d),"."===u?(J=P[0],"!"===J||"?"===J?(m=P.length>1?2:"?"===J?1:1.5,P.length>1&&(d=P[0])):"."===J&&"."===P[1]&&(m=1.2,d="...")):"EM"===u?m=1.2:"UH"===u?m=1.1:0===u.indexOf("VB")?i.attr.infinitive=l.infinitive(d):"NNS"===u||"CD"===u?(s=l.singularize(d),i.attr.singular=s):"NN"===u&&(i.attr.singular=d),"NNP"!==u&&"NNPS"!==u&&"IN"!==u&&(e.hasOwnProperty(d)?(J=e[d],J.condition&&i.pos!==J.condition||(g=J.sentiment)):"NNS"===u&&e.hasOwnProperty(s)?(J=e[s],J.condition&&u!==J.condition||(g=J.sentiment/2)):e.hasOwnProperty(c)?(J=e[c],J.condition&&u!==J.condition||(g=J.sentiment/2)):a.dirty.indexOf(d)>-1?g=-2:a.polite.indexOf(d)>-1&&(g=1)),i.profile.sentiment=g,i.profile.emphasis=m,i.norm=d})}(),!function(){var N=[",",":",";","("],e=["-","—","/"];t.before("t",function(i,a,n){var r=i.raw,s=i.pos;(N.indexOf(s)>-1||e.indexOf(r)>-1)&&(i.profile.breakpoint=!0,n.stats.breakpoints++)})}(),!function(){t.before("t",function(e,i,n){var s,t,o,l,J,P=N.lexer.regexps,d=" "+e.norm+" ";for(s in P)P.hasOwnProperty(s)&&d.match(P[s])&&(t=r.entity(e,i,s),e.attr.entity=n.entities.push(t)-1,("username"===t.type||"composite"===s)&&(e.pos="NNP",n.tags[i]="NNP"),n.stats.confidence+=1/n.length,"pl"===s&&(t.type="political_affiliation",o=e.norm.split("-"),J=o[1].length,t.meta.party="d"===o[0]?"democrat":"republican",l=a.abbrs.indexOf("."===o[1][J-1]?o[1].slice(0,J-1):o[1]),l>-1&&(o[1]=a.abbrs_rplt[l]),e.norm=t.meta.party+", "+o[1]))})}(),!function(){var N=a.numbers;t.init(function(N){N.numericSections=[],N.inNumericSection=!1}),t.before("t",function(e,i,a,n){var r=e.pos,s=n.numericSections;"CD"===r||"NNS"===r&&N.hasOwnProperty(e.attr.singular)?n.inNumericSection?(s[s.length-1][1]+=1,s[s.length-1][2].push(e)):(n.numericSections.push([i,1,[e]]),n.inNumericSection=!0):n.inNumericSection&&(n.inNumericSection=!1)})}(),!function(){var i=[",",".",":",'"',"(",")"];e(r,{entity:function(N,e,i){return{raw:N.raw,norm:N.norm,fromIndex:e,toIndex:e,type:i||null,meta:{}}},sentence:function(N,e){return{language:e,time:0,length:0,governor:-1,raw:N,stats:{words:0,confidence:0,p_foreign:0,p_upper:0,p_cap:0,avg_length:0,breakpoints:0},profile:{label:"neutral",sentiment:0,emphasis:1,amplitude:0,politeness:0,dirtiness:0,types:[],main_tense:"present"},has_negation:!1,entities:[],deps:{subjects:[],objects:[]},tokens:[],tags:[]}},token:function(e,a,n){var r=null,s=0===n.indexOf("VB");return a=a.toLowerCase(),r="VBD"===n||"VBN"===n?"past":"VBG"===n?"gerund":"present",{raw:e,norm:a,stem:N.stemmer(a),pos:n||"",profile:{sentiment:0,emphasis:1,negated:!1,breakpoint:!1},attr:{value:null,acronym:!1,abbr:!1,is_verb:s,tense:r,infinitive:null,is_noun:0===n.indexOf("NN"),plural:null,singular:null,entity:-1,is_punc:i.indexOf(n)>-1},deps:{master:null,governor:!1,type:"unknown",dependencies:[]}}},tag:function(N,e,i){return{tag:N||"NN",norm:i,confidence:e||0}}})}(),!function(){var r,s,t=a.abbrs,o=/(\S.+?[….\?!\n])(?=\s+|$|")/g,l=new RegExp("(^| |\\(|\\[|{)("+t.join("|")+")[.!?] ?$","i"),J=" !?()[]{}\"'`%•.…:;,$€£¥\\/+=*_–",P=N.punycode.ucs2,d=a.floatChar,c=a.thousandChar,u=/^-?[0-9]+$/,g=/^[0-9]+$/,m=new RegExp("^-?[0-9]+[.,]$"),B={complexFloat:"\\s(-?[0-9]+([\\"+c+"][0-9]+){1,}(\\"+d+"[0-9]+))"},p={},h=a.emots.length,S=function(N){var e=0,i=N.length;for(e=0;i>e;e+=1)if(null===N[e]||"emoticon"!==N[e].group)return!1;return!0},V=function(N,e,i,a){var n,r,s,t;for(n in i)if(i.hasOwnProperty(n))for(s=new RegExp(i[n],"g");null!==(t=s.exec(N));)r=t[0].length,e[t.index]={content:t[1],type:n,group:a,length:r-(r-t[1].length)}};for(r=0;2*h>r;r+=2)s=a.emots[r/2],p["em_"+r]="\\s("+i(s)+"+)[^a-z]",s.match(/^[a-zA-Z]/)||(p["em_"+(r+1)]="[a-zA-Z]("+i(s)+"+)[^a-z]");e(N.lexer,{regexps:{email:"\\s([^\\s]+@[^\\s]+(\\.[^\\s\\)\\]]+){1,})",composite:"\\s([a-zA-Z]&[a-zA-Z])",username:"\\s(@[a-zA-Z0-9_]+)",html_char:"\\s(&[a-zA-Z0-9]{2,4};)",hashtag:"\\s(#[a-zA-Z0-9_]+)",url:"\\s((https?|ftp):\\/\\/[\\-a-z0-9+&@#\\/%\\?=~_|!:,\\.;]*[\\-a-z0-9+&@#\\/%=~_|])",ip:"\\s(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5]))\\s",pl:"\\s([rd]-([a-z]+\\.{0,1})+)"},consolidate:function(N,e,i){for(var a=1,n=N.length;n>a;a+=1)S(e[a])&&(N[a-1]=N[a-1].concat(N[a]),i[a-1]+=" "+i[a],N.splice(a,1),e.splice(a,1),i.splice(a,1),a-=1,n-=1);return N},sentences:function(N){var e,i,a=N.split(o),n=a.length,r=[];for(e=0;n>e;e++)i=a[e].trim(),i.match(l)||i.match(/[ |\.][A-Za-z]\.?$/)?n-1>e&&!a[e+1].match(/^[A-Za-z]\s/)?a[e+1]=i+" "+a[e+1].trim():r.push(i):i&&r.push(i);return r},splitTokens:function(N){var e,i,a,r=N.length,s=[],t=[],o=null,l=" "+N+" ",d={},c=function(N){if(N){"object"==typeof N&&(o=N,N=N.content),a=P.decode(N);var e,i=a.length,n="";for(e=0;i>e;e++)a[e]>=128511?(n&&(t.push(o),s.push(n)),t.push({group:"emoticon"}),s.push(P.encode([a[e]])),n=""):n+=P.encode([a[e]]);n&&(t.push(o),s.push(n))}},u=function(N,e){c(N),c(e),i=""};for(V(l,d,n.regexps,"entity"),V(l,d,p,"emoticon"),V(l,d,B,"number"),i="",e=0;r>e;e++)d.hasOwnProperty(e)?(u(i,d[e]),e+=d[e].length-1):J.indexOf(N[e])>-1?u(i,N[e]):i+=N[e];return u(i),{tokens:s,meta:t}},tokens:function(N,e){var i,a,r=n.splitTokens(N),s=r.tokens,o=r.meta,l=s.length,J=!1,P=[],d=[],c="",B="",p=0;for(i=0;l>i;i++)if(a=s[i].trim())if(c=p>0?P[p-1]:"",B=l-1>i?s[i+1]:"",("."===a||","===a)&&c.match(u)&&B.match(g)||a.match(u)&&c.match(m))J=!1,P[p-1]+=a;else if("."===a&&l-1>i&&p>0&&t.indexOf(c.toLowerCase())>-1)J=!1,P[p-1]+=a;else if(J&&l-1>i&&1===a.length)P[p-1]+=a;else{if(a.match(/^\W+$/gi)){if(J=!1,a===c[c.length-1]){P[p-1]+=a;continue}}else a.match(/^[A-Za-z]{1}$/g)&&l-1>i&&"."===B&&(J=!0);a&&(P.push(a),d.push(o[i]),p++)}else J=!1;return{result:n.postprocess(P,d),meta:d}},advanced:function(N,e,i){var a,r,s=n.sentences(N),t=s.length,o=[],l=[];if(i)return{sentences:s,raws:null,meta:null};for(a=0;t>a;a++)l.push(s[a]),r=n.tokens(s[a],e),o[a]=r.meta,s[a]=r.result;return n.consolidate(s,o,l),{raws:l,sentences:s,meta:o}},lex:function(N,e,i){return n.advanced(N,e,i).sentences}}),N.lex=n.lex}(),!function(){var i=["s","m","t","ll","ve","d","em","re"];e(N.lexer,{postprocess:function(N,e){var a,n,r,s,t=N.length,o=[];for(a=0;t>a;a+=1)n=N[a],r=N[a-1]||"",s=N[a+1]||"","'"===n&&i.indexOf(s)>-1?"t"===s&&r.lastIndexOf("n")===r.length-1?(o[a-1]=r.slice(0,-1),o.push("n"+n+s),a+=1):(o.push(n+s),a+=1):"cant"!==n?"cannot"!==n?"gonna"!==n?o.push(n):o.push("gon","na"):o.push("can","not"):o.push("can","n't");return o}})}(),!function(){var i=N.inflector.isPlural,n=0,s=1,t=2,o=3,l=4,P=41,d=5,c=51,u=6,g=8,m=81,B=9,p=11,h=12,S=121,V=13,y=14,b=141,f=15,k=16,v=17,w=171,R=18,G=19,D=21,C=N.lexicon,A=a.emots,M=a.rules,E=M.length,T=a.suffixes,z=T.length,F=new RegExp("^-?[0-9]+([\\"+a.thousandChar+"][0-9]+){1,}(\\"+a.floatChar+"[0-9]+)$"),x=function(e){var i=e.replace(/(.)\1{2,}/g,"$1$1");return N.lexicon.hasOwnProperty(i)?i:(i=e.replace(/(.)\1{1,}/g,"$1"),N.lexicon.hasOwnProperty(i)?i:null)},L=function(N){return N.match(/^[A-Z][a-z\.]+$/g)||N.match(/^[A-Z]+[0-9]+$/g)||N.match(/^[A-Z][a-z]+[A-Z][a-z]+$/g)};e(J,{applyRule:function(N,e,i,a,r,J,C){if(!(N.from!==i||N.secondRun&&0===C)){var A,M,E=N.type;if(E!==n){if(e=e.toLowerCase(),E===t){if(a>0&&J[a-1]===N.c1)return void(J[a]=N.to)}else if(E===c){if(A=r[a-1]||"",J[a-1]===N.c2&&A.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===o){if(J[a+1]===N.c1)return void(J[a]=N.to)}else if(E===l){if(J[a+2]===N.c1)return void(J[a]=N.to)}else if(E===P){if(J[a-2]===N.c1)return void(J[a]=N.to)}else if(E===s){if(J[a-1]===N.c1||J[a-2]===N.c1)return void(J[a]=N.to)}else if(E===d){if(A=r[a-1]||"",A.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===u){if(e===N.c1)return void(J[a]=N.to)}else if(E===g){if(e===N.c2&&J[a-1]===N.c1)return void(J[a]=N.to)}else if(E===m){if(A=r[a-1]||"",e===N.c2&&A.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===B){if(J[a+1]===N.c1||J[a+2]===N.c1||J[a+3]===N.c1)return void(J[a]=N.to)}else if(E===p){if(A=r[a+2]||"",A.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===S){if(A=r[a+1]||"",e===N.c1&&A.toLowerCase()===N.c2)return void(J[a]=N.to)}else if(E===h){if(e===N.c1&&J[a+1]===N.c2)return void(J[a]=N.to)}else if(E===V){if(J[a-1]===N.c1||J[a-2]===N.c1||J[a-3]===N.c1)return void(J[a]=N.to)}else if(E===y){if(J[a-1]===N.c1&&J[a+1]===N.c2)return void(J[a]=N.to)}else if(E===b){if(e===N.c1&&J[a-1]===N.c2&&J[a+1]===N.c3)return void(J[a]=N.to)}else if(E===f){if(A=r[a+1]||"",A.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===k){if(J[a+1]===N.c1||J[a+2]===N.c1)return void(J[a]=N.to)}else if(E===v){if(J[a-2]===N.c1&&J[a-1]===N.c2)return void(J[a]=N.to)}else if(E===w){if(J[a+1]===N.c1&&J[a+2]===N.c2)return void(J[a]=N.to)}else if(E===R){if(A=r[a+1]||"",M=r[a+2]||"",A.toLowerCase()===N.c1||M.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===G){if(M=r[a-2]||"",M.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===D){if(A=r[a-1]||"",M=r[a-2]||"",A.toLowerCase()===N.c1||M.toLowerCase()===N.c1)return void(J[a]=N.to)}else if(E===s&&(A=J[a-1]||"",M=J[a-2]||"",A===N.c1||M===N.c1))return void(J[a]=N.to)}else if(0===a&&e===N.c1)return void(J[a]=N.to)}},applyRules:function(N,e,i,a,n){var r;for(r=0;E>r;r++)J.applyRule(M[r],N,a[e],e,i,a,n)},apply:function(N,e){for(var i,a=N.length,n=0;2>n;){for(i=0;a>i;i++)this.applyRules(N[i],i,N,e,n);n++}return e},testSuffixes:function(N){var e;for(e=0;z>e;e++)if(N.match(T[e].regexp))return T[e].pos;return null},getTag:function(e){var i,a,n,s,t,o=r.tag();if(o.norm=e,e.length>1)for(i=null,a=0,n=A.length;n>a;a++)if(0===e.indexOf(A[a]))return o.tag="EM",o.confidence=1,o;return i=N.lexicon[e],i&&"-"!==i?(o.tag=i,o.confidence=1,o):(s=e.toLowerCase(),"string"==typeof e&&e.match(/[A-Z]/g)&&(i=N.lexicon[s],i&&"-"!==i)?(o.tag=i,o.confidence=.8,o):s.match(/(\w)\1+/g)&&(t=x(s))?(o.norm=t,i=N.lexicon[t],o.tag=i,o.confidence=.7,o):(t=N.synonym(s),t!==s&&(i=N.lexicon[t])?(o.tag=i,o.confidence=.5,o):(i=J.testSuffixes(e),i?(o.tag=i,o.confidence=.25,o):e.indexOf("-")>-1?(o.tag=e.match(/^[A-Z]/g)?"NNP":"JJ",o.confidence/=2,o):o)))},tag:function(N){var e,n,r,s,t,o,l,P=[],d=[],c=N.length,u=!1,g=0,m=function(N,e){N="object"==typeof N?N.pos:N,P.push("-"===N?"NN":N),g+=e};for(r=0;c>r;r++)e=N[r],d[r]=e,e.match(/^[%\+\-\/@]$/g)?m("SYM",1):e.match(/^(\?|\!|\.){1,}$/g)?m(".",1):e.match(/^-?[0-9]+([\.,][0-9]+)?$/g)||e.match(F)||e.match(/^([0-9]{2}|[0-9]{4})s$/g)||e.match(/^[0-9]{2,4}-[0-9]{2,4}$/g)?m("CD",1):(o=J.getTag(N[r]),m(o.tag,o.confidence),d[r]=o.norm);for(r=0;c>r;r++)if(n=P[r],"SYM"!==n&&"."!==n){if(e=N[r],t=e.toLowerCase(),s=e.length,l=0===r?"":P[r-1],0===r){if("that"===t){P[r]="DT",g++;continue}if(("NN"===n||"VB"===n)&&a.infinitives.indexOf(t)>-1){P[r]="VB",g++;continue}}!(s>3&&e.match(/[^e]ed$/gi)&&0===n.indexOf("N"))||0!==r&&e.match(/^[A-Z][a-z]+/g)?!(s>4&&e.lastIndexOf("ing")===s-3&&-1===a.ing_excpt.indexOf(t))||0!==n.indexOf("N")&&"MD"!==n||0!==r&&e.match(/^[A-Z][a-z]+/g)||"NN"===l||"JJ"===l||"DT"===l||"VBG"===l?s>4&&t.lastIndexOf("in")===s-2&&"NN"===n&&(0===r||!e.match(/^[A-Z][a-z]+/g))&&"NN"!==l&&"JJ"!==l&&"DT"!==l&&"VBG"!==l&&(o=C[t+"g"],o&&"VBG"===o.pos)?P[r]="VBG":("TO"===l&&a.infinitives.indexOf(t)>-1&&(n="VB"),"DT"!==l&&e.match(/^[IVXLCDM]+$/g)&&"I"!==e&&(n="CD"),"NN"===n||"VB"===n||"JJ"===n&&a.nationalities.hasOwnProperty(t)===!1?e.match(/^[A-Z]+$/g)||e.match(/^([a-z]{1}\.)+/gi)?(n="NNP",u=!0):r>0&&L(e)?(n="NNP",u=!0,o=N[r-1],1!==r||"NN"!==l&&"NNS"!==l&&"JJ"!==l&&"VB"!==l||!L(o)||(P[r-1]="NNP")):u=!1:u&&("CD"===n&&e.match(/^[IVXLCDM]+$/g)||"I"===e)?n="NNP":u="NNP"===n||"NNPS"===n,"NN"===n&&i(e)&&(n="NNS"),P[r]=n):P[r]="VBG":P[r]="VBN"}for(J.apply(N,P),r=0;c>r;r++)e=N[r],n=P[r],l=P[r-1]||"",e.match(/ed$/g)&&("JJ"!==n||"VBZ"!==l&&"VBP"!==l||"TO"!==P[r+1]||(n="VBN")),P[r]=n;return{tags:P,norms:d,confidence:g/c}}}),N.tag=J.tag}(),!function(){var e=["#","SYM","CR","EM"];N.stat=function(N){var i,a,n,r,s=N.length,t=s,o=N.stats,l=0,J=0,P=0,d=0,c=0;for(i=0;s>i;i++)a=N.tokens[i],n=a.raw,l+=n.length,r=N.tags[i],a.attr.is_punc||e.indexOf(r)>-1?t--:(d+=1,n.match(/^[A-Z][a-zA-Z]+$/g)&&c++,n.match(/[A-Z]+/)&&!n.match(/[a-z]/)&&P++,"FW"===r&&J++);0===t&&(t=1),o.words=d,o.p_foreign=100*J/t,o.p_upper=100*P/t,o.p_cap=100*c/t,o.avg_length=l/t}}(),!function(){var e=a.synonyms,i=e.length;N.synonym=function(N){var a;for(a=0;i>a;a++)if(e[a].indexOf(N)>0)return e[a][0];return N}}()}( false?this.compendium={}:exports);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniq;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(212)))

/***/ }),
/* 212 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uniqueRandom = __webpack_require__(214);

module.exports = function (arr) {
	var rand = uniqueRandom(0, arr.length - 1);

	return function () {
		return arr[rand()];
	};
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (min, max) {
	var prev;
	return function rand() {
		var num = Math.floor(Math.random() * (max - min + 1) + min);
		return prev = num === prev && min !== max ? rand() : num;
	};
};


/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = ["Aaliyah","Aarushi","Abagail","Abbey","Abbi","Abbie","Abby","Abi","Abia","Abigail","Abree","Abrianna","Abrielle","Aby","Acacia","Ada","Adalia","Adaline","Adalyn","Addie","Addilyn","Addison","Adelaide","Adele","Adelene","Adelia","Adelina","Adeline","Adelynn","Adreanna","Adriana","Adrianna","Adrianne","Adrienne","Aerona","Agatha","Aggie","Agnes","Aida","Aileen","Ailsa","Aimee","Aine","Ainsleigh","Ainsley","Aisha","Aisling","Aislinn","Aislynn","Alaina","Alana","Alanis","Alanna","Alannah","Alaska","Alayah","Alayna","Alba","Albany","Alberta","Aleah","Alecia","Aleisha","Alejandra","Alena","Alessandra","Alessia","Alex","Alexa","Alexandra","Alexandria","Alexia","Alexis","Alexus","Ali","Alia","Alice","Alicia","Alina","Alisa","Alisha","Alison","Alissa","Alivia","Aliyah","Aliza","Alize","Alka","Allie","Allison","Ally","Allyson","Alma","Alondra","Alya","Alycia","Alyshialynn","Alyson","Alyssa","Alyssia","Amalia","Amanda","Amandine","Amani","Amara","Amari","Amaris","Amaryllis","Amaya","Amber","Amberly","Amelia","Amelie","America","Amethyst","Amie","Amina","Amirah","Amity","Amy","Amya","Ana","Anabel","Anabelle","Anahi","Anais","Anamaria","Ananya","Anastasia","Andie","Andrea","Andromeda","Angel","Angela","Angelia","Angelica","Angelina","Angeline","Angelique","Angie","Anika","Anisa","Anissa","Anita","Aniya","Aniyah","Anjali","Ann","Anna","Annabel","Annabella","Annabelle","Annabeth","Annalisa","Annalise","Annamaria","Anne","Anneke","Annemarie","Annette","Annie","Annika","Annmarie","Anthea","Antoinette","Antonia","Anuja","Anusha","Anushka","Anya","Aoibhe","Aoibheann","Aoife","Aphrodite","Apple","April","Aqua","Arabella","Arabelle","Arden","Aria","Ariadne","Ariana","Arianna","Arianne","Ariel","Ariella","Arielle","Arisha","Arleen","Arlene","Arlette","Artemis","Arwen","Arya","Asha","Ashanti","Ashlee","Ashleigh","Ashley","Ashlie","Ashlyn","Ashlynn","Ashton","Ashvini","Asia","Asma","Aspen","Astrid","Athalia","Athena","Athene","Atlanta","Aubreanna","Aubree","Aubrey","Audra","Audrey","Audriana","Audrina","Augustina","Aurelia","Aurora","Autumn","Ava","Avaline","Avalon","Avery","Avia","Avril","Aya","Ayana","Ayanna","Ayesha","Ayisha","Ayla","Azalea","Azaria","Azariah","Bailey","Barbara","Barbie","Bay","Baylee","Bea","Beatrice","Beatrix","Becca","Beccy","Becky","Belinda","Bella","Bellatrix","Belle","Benita","Bernadette","Bernice","Bertha","Beryl","Bess","Bessie","Beth","Bethan","Bethanie","Bethany","Betsy","Bettina","Betty","Bev","Beverly","Beyonce","Bianca","Billie","Blair","Blaire","Blake","Blakely","Blanche","Blaze","Blessing","Bliss","Bloom","Blossom","Blythe","Bobbi","Bobbie","Bobby","Bonita","Bonnie","Bonquesha","Braelyn","Brandi","Brandy","Braylee","Brea","Breanna","Bree","Breeze","Brenda","Brenna","Bria","Briana","Brianna","Brianne","Briar","Bridget","Bridgette","Bridie","Brie","Briella","Brielle","Brigid","Briley","Brinley","Briony","Brisa","Bristol","Britney","Britt","Brittany","Brittney","Brodie","Brogan","Bronagh","Bronte","Bronwen","Bronwyn","Brook","Brooke","Brooklyn","Brooklynn","Bryanna","Brylee","Bryn","Brynlee","Brynn","Bryony","Bunty","Cadence","Cailin","Caitlan","Caitlin","Caitlyn","Caleigh","Cali","Calista","Callie","Calliope","Callista","Calypso","Cambria","Cameron","Cami","Camila","Camilla","Camille","Campbell","Camry","Camryn","Candace","Candice","Candis","Candy","Caoimhe","Caprice","Cara","Carenza","Carina","Caris","Carissa","Carla","Carlene","Carley","Carlie","Carly","Carlynn","Carmel","Carmela","Carmen","Carol","Carole","Carolina","Caroline","Carolyn","Carrie","Carter","Carys","Casey","Cassandra","Cassia","Cassidy","Cassie","Cassiopeia","Cat","Catalina","Catarina","Cate","Caterina","Cathalina","Catherine","Cathleen","Cathryn","Cathy","Catlin","Catrina","Catriona","Cayla","Ceanna","Cece","Cecelia","Cecilia","Cecily","Celeste","Celestia","Celestine","Celia","Celina","Celine","Celise","Ceri","Cerise","Cerys","Chanel","Chanelle","Chantal","Chantelle","Charis","Charissa","Charity","Charla","Charlene","Charlette","Charley","Charlie","Charlize","Charlotte","Charmaine","Chastity","Chelsea","Chelzea","Chelsey","Chenai","Chenille","Cher","Cheri","Cherie","Cherry","Cheryl","Cheyanne","Cheyenne","Chiara","Chloe","Chole","Chris","Chrissy","Christa","Christabel","Christal","Christen","Christi","Christiana","Christiane","Christie","Christina","Christine","Christy","Chrysanthemum","Chrystal","Ciara","Cici","Ciel","Cierra","Cindy","Clair","Claire","Clara","Clarabelle","Clare","Clarice","Claris","Clarissa","Clarisse","Clarity","Clary","Claudette","Claudia","Claudine","Clea","Clemence","Clementine","Cleo","Cleopatra","Clodagh","Cloe","Clotilde","Clover","Coco","Colette","Colleen","Connie","Constance","Cora","Coral","Coralie","Coraline","Cordelia","Cori","Corina","Corinne","Cornelia","Corra","Cosette","Courtney","Cressida","Cristal","Cristina","Crystal","Cyndi","Cynthia","Dagmar","Dahlia","Daina","Daisy","Dakota","Damaris","Dana","Danette","Dani","Danica","Daniela","Daniella","Danielle","Danika","Daphne","Dara","Darby","Darcey","Darcie","Darcy","Daria","Darla","Darlene","Dasia","Davida","Davina","Dawn","Dayle","Dayna","Daysha","Deana","Deandra","Deann","Deanna","Deanne","Deb","Debbie","Debby","Debora","Deborah","Debra","Dede","Dee","Deedee","Deena","Deidre","Deirdre","Deja","Delaney","Delanie","Delany","Delia","Delilah","Delina","Della","Delores","Delphine","Demetria","Demi","Dena","Denice","Denise","Denny","Desiree","Destinee","Destiny","Diamond","Diana","Diane","Dianna","Dianne","Dido","Dilys","Dina","Dinah","Dionne","Dior","Dixie","Dolly","Dolores","Dominique","Donna","Dora","Doreen","Doris","Dorla","Dorothy","Dot","Dottie","Drew","Dulce","Dusty","Dympna","Eabha","Ebony","Echo","Eden","Edie","Edith","Edna","Edwina","Effie","Eileen","Eilidh","Eimear","Eireann","Eisley","Elaina","Elaine","Elana","Eleanor","Electra","Elektra","Elen","Elena","Eliana","Elicia","Elida","Elin","Elina","Elinor","Elisa","Elisabeth","Elise","Eliza","Elizabeth","Ella","Elle","Ellen","Ellery","Ellie","Ellis","Elly","Elodie","Eloise","Elora","Elouise","Elsa","Elsie","Elspeth","Elva","Elvina","Elvira","Elysia","Elyza","Emanuela","Ember","Emelda","Emely","Emer","Emerald","Emerson","Emi","Emilee","Emilia","Emilie","Emily","Emma","Emmalee","Emmaline","Emmalyn","Emmanuelle","Emmeline","Emmie","Emmy","Enid","Enya","Erica","Erika","Erin","Eris","Ernestine","Eryn","Esmay","Esme","Esmeralda","Esparanza","Esperanza","Estee","Estelle","Ester","Esther","Estrella","Ethel","Eudora","Eugenie","Eunice","Eva","Evaline","Evangelina","Evangeline","Eve","Evelin","Evelina","Evelyn","Everly","Evie","Evita","Fabrizia","Faith","Fallon","Fanny","Farah","Farrah","Fatima","Fawn","Fay","Faye","Felicia","Felicity","Fern","Fernanda","Ffion","Fia","Fifi","Fion","Fiona","Fleur","Flick","Flo","Flora","Florence","Fran","Frances","Francesca","Francine","Francoise","Frankie","Freda","Freya","Frida","Gabby","Gabriela","Gabriella","Gabrielle","Gail","Garnet","Gayle","Gaynor","Geena","Gemma","Gena","Genesis","Genevieve","Genna","Georgette","Georgia","Georgie","Georgina","Geraldine","Germaine","Gert","Gertrude","Gia","Gianna","Gigi","Gilda","Gillian","Gina","Ginger","Ginnie","Ginny","Giovanna","Gisela","Giselle","Gisselle","Gladys","Glenda","Glenys","Gloria","Glynis","Golda","Goldie","Grace","Gracelyn","Gracie","Grainne","Greta","Gretchen","Griselda","Guadalupe","Guinevere","Gwen","Gwendolyn","Gwyneth","Habiba","Hadley","Hailee","Hailey","Haleigh","Haley","Halle","Hallie","Hanna","Hannah","Harley","Harmony","Harper","Harriet","Hattie","Haven","Hayden","Haylee","Hayley","Hazel","Hazeline","Heather","Heaven","Heidi","Helen","Helena","Helene","Helga","Helina","Henrietta","Hepsiba","Hera","Hermine","Hermione","Hester","Hetty","Hilary","Hilda","Hildegard","Hillary","Hollie","Holly","Honesty","Honey","Honor","Honour","Hope","Hortense","Hyacinth","Ianthe","Ida","Ila","Ilene","Iliana","Ilona","Ilse","Imani","Imelda","Immy","Imogen","India","Indie","Indigo","Indira","Ines","Ingrid","Iona","Ira","Irena","Irene","Irina","Iris","Irma","Isa","Isabel","Isabell","Isabella","Isabelle","Isadora","Isha","Isidora","Isis","Isla","Isobel","Isolde","Itzel","Ivana","Ivy","Iyanna","Izabella","Izidora","Izzie","Izzy","Jacinda","Jacinta","Jackie","Jacqueline","Jacquelyn","Jada","Jade","Jaden","Jadyn","Jaelynn","Jaida","Jaime","Jamie","Jamiya","Jan","Jana","Janae","Jancis","Jane","Janelle","Janessa","Janet","Janette","Jania","Janice","Janie","Janine","Janis","Janiya","January","Jaqueline","Jasmin","Jasmine","Jaya","Jayda","Jayden","Jayla","Jaylene","Jaylinn","Jaylynn","Jayne","Jazlyn","Jazmin","Jazmine","Jazz","Jean","Jeanette","Jeanine","Jeanna","Jeanne","Jeannette","Jeannie","Jeannine","Jemima","Jemma","Jen","Jena","Jenelle","Jenessa","Jenna","Jennette","Jenni","Jennie","Jennifer","Jenny","Jensen","Jeri","Jerri","Jess","Jessa","Jessica","Jessie","Jet","Jewel","Jill","Jillian","Jo","Joan","Joann","Joanna","Joanne","Jocelyn","Jodi","Jodie","Jody","Joelle","Johanna","Jojo","Joleen","Jolene","Jolie","Joni","Jordan","Jordana","Jordyn","Jorja","Joselyn","Josephine","Josie","Journey","Joy","Joya","Joyce","Juanita","Jude","Judith","Judy","Jules","Julia","Juliana","Julianna","Julianne","Julie","Julienne","Juliet","Juliette","Julissa","July","June","Juniper","Juno","Justice","Justina","Justine","Kacey","Kadence","Kaelyn","Kaidence","Kailey","Kailyn","Kaitlin","Kaitlyn","Kaitlynn","Kalea","Kaleigh","Kali","Kalia","Kalista","Kaliyah","Kallie","Kamala","Kamryn","Kara","Karen","Kari","Karin","Karina","Karissa","Karla","Karlee","Karly","Karolina","Karyn","Kasey","Kassandra","Kassidy","Kassie","Kat","Katara","Katarina","Kate","Katelyn","Katelynn","Katerina","Katharine","Katherine","Kathleen","Kathryn","Kathy","Katia","Katie","Katlyn","Katniss","Katrin","Katrina","Katy","Katya","Kay","Kaya","Kaye","Kayla","Kaylee","Kayleigh","Kayley","Kaylie","Kaylin","Keana","Keara","Keeley","Keely","Keira","Keisha","Kelis","Kelley","Kelli","Kellie","Kelly","Kelsey","Kelsie","Kendall","Kendra","Kenna","Kennedy","Kenzie","Kera","Keri","Kerian","Kerri","Kerry","Kia","Kiana","Kiara","Kiera","Kierra","Kiersten","Kiki","Kiley","Kim","Kimberlee","Kimberley","Kimberly","Kimbriella","Kimmy","Kinley","Kinsey","Kinsley","Kira","Kirsten","Kirstin","Kirsty","Kit","Kitty","Kizzy","Kloe","Kora","Kori","Kourtney","Kris","Krista","Kristen","Kristi","Kristie","Kristin","Kristina","Kristine","Kristy","Krystal","Kya","Kyla","Kylee","Kyleigh","Kylie","Kyra","Lacey","Lacie","Lacy","Ladonna","Laila","Lainey","Lakyn","Lala","Lana","Laney","Lara","Larissa","Lark","Latoya","Laura","Laurel","Lauren","Laurie","Lauryn","Lavana","Lavender","Lavinia","Layla","Lea","Leah","Leandra","Leann","Leanna","Leanne","Leda","Lee","Leela","Leena","Leia","Leigh","Leila","Leilani","Lela","Lena","Lenora","Lenore","Leona","Leonie","Leonora","Leora","Lesley","Leslie","Lesly","Leticia","Letitia","Lettie","Lexi","Lexia","Lexie","Lexis","Leyla","Lia","Liah","Liana","Lianne","Libbie","Libby","Liberty","Lidia","Liesl","Lila","Lilac","Lilah","Lili","Lilian","Liliana","Lilita","Lilith","Lillia","Lillian","Lillie","Lilly","Lily","Lina","Linda","Lindsay","Lindsey","Lindy","Lisa","Lisette","Liv","Livia","Livvy","Liz","Liza","Lizbeth","Lizette","Lizzie","Lizzy","Logan","Lois","Lola","Lolita","London","Lora","Loran","Lorelei","Loren","Lorena","Loretta","Lori","Lorie","Lorna","Lorraine","Lorri","Lorrie","Lottie","Lotus","Lou","Louella","Louisa","Louise","Luann","Lucia","Luciana","Lucie","Lucille","Lucinda","Lucky","Lucy","Luisa","Lulu","Luna","Lupita","Luz","Lydia","Lyla","Lynda","Lyndsey","Lynette","Lynn","Lynne","Lynnette","Lynsey","Lyra","Lyric","Mabel","Macey","Macie","Mackenzie","Macy","Madalyn","Maddie","Maddison","Maddy","Madeleine","Madeline","Madelyn","Madison","Madisyn","Madonna","Madyson","Mae","Maeve","Magda","Magdalena","Magdalene","Maggie","Maia","Maire","Mairead","Maisie","Maisy","Maja","Makayla","Makenna","Makenzie","Malia","Malina","Malinda","Mallory","Malory","Mandy","Manuela","Mara","Marcela","Marcella","Marcelle","Marci","Marcia","Marcie","Marcy","Margaret","Margarita","Margaux","Marge","Margie","Margo","Margot","Margret","Maria","Mariah","Mariam","Marian","Mariana","Marianna","Marianne","Maribel","Marie","Mariela","Mariella","Marilyn","Marina","Marion","Maris","Marisa","Marisol","Marissa","Maritza","Marjorie","Marla","Marlee","Marlena","Marlene","Marley","Marnie","Marsha","Martha","Martina","Mary","Maryam","Maryann","Marybeth","Maryjane","Masie","Mathilde","Matilda","Mattie","Maude","Maura","Maureen","Mavis","Maxime","Maxine","May","Maya","Maybell","Mazie","Mckayla","Mckenna","Mckenzie","Mea","Meadow","Meagan","Meera","Meg","Megan","Meghan","Mei","Mel","Melanie","Melina","Melinda","Melissa","Melody","Mercedes","Mercy","Meredith","Merida","Merissa","Meryl","Mia","Michaela","Michele","Michelle","Mika","Mikaela","Mikayla","Mikhaela","Mila","Mildred","Milena","Miley","Millicent","Millie","Milly","Mimi","Mina","Mindy","Minerva","Minnie","Mira","Mirabel","Mirabelle","Miracle","Miranda","Miriam","Mirielle","Missie","Misty","Mitzi","Modesty","Moira","Mollie","Molly","Mona","Monica","Monika","Monique","Montana","Montserrat","Morgan","Morgana","Moya","Muriel","Mya","Myfanwy","Myla","Myra","Myrna","Myrtle","Nadene","Nadia","Nadine","Naja","Nala","Nana","Nancy","Nanette","Naomi","Natalia","Natalie","Natasha","Naya","Nayeli","Nell","Nellie","Nelly","Nena","Nerissa","Nessa","Nevaeh","Neve","Nia","Niamh","Nichola","Nichole","Nicki","Nicky","Nicola","Nicole","Nicolette","Nieve","Niki","Nikita","Nikki","Nila","Nina","Nisha","Nishka","Nita","Noella","Noelle","Noely","Noemi","Nola","Nora","Norah","Noreen","Norma","Nova","Nyla","Oasis","Ocean","Octavia","Odalis","Odalys","Odele","Odelia","Odette","Olga","Olive","Olivia","Oona","Oonagh","Opal","Ophelia","Oprah","Oriana","Orianna","Orla","Orlaith","Page","Paige","Paisley","Paloma","Pam","Pamela","Pandora","Pansy","Paola","Paris","Patience","Patrice","Patricia","Patsy","Patti","Patty","Paula","Paulette","Paulina","Pauline","Payton","Peace","Pearl","Peggy","Penelope","Penny","Perla","Perrie","Persephone","Petra","Petunia","Peyton","Phillipa","Philomena","Phoebe","Phoenix","Phyllis","Piper","Pippa","Pixie","Polly","Pollyanna","Poppy","Portia","Precious","Presley","Preslie","Primrose","Princess","Priscilla","Priya","Promise","Prudence","Prue","Queenie","Quiana","Quinn","Rabia","Rachael","Rachel","Rachelle","Rae","Raegan","Raelyn","Raina","Raine","Ramona","Ramsha","Randi","Rani","Rania","Raquel","Raven","Raya","Rayna","Rayne","Reagan","Reanna","Reanne","Rebecca","Rebekah","Reese","Regan","Regina","Reilly","Reina","Remi","Rena","Renae","Renata","Rene","Renee","Renesmee","Reyna","Rhea","Rhian","Rhianna","Rhiannon","Rhoda","Rhona","Rhonda","Ria","Rianna","Richelle","Ricki","Rihanna","Rikki","Riley","Rina","Rita","River","Riya","Roanne","Roberta","Robin","Robyn","Rochelle","Rocio","Roisin","Rolanda","Ronda","Roni","Ronna","Rosa","Rosalie","Rosalina","Rosalind","Rosalinda","Rosalynn","Rosanna","Rose","Roseanne","Rosella","Roselle","Rosemarie","Rosemary","Rosetta","Rosie","Rosy","Rowan","Rowena","Roxana","Roxanne","Roxie","Roxy","Rozlynn","Ruby","Rue","Ruth","Ruthie","Ryanne","Rydel","Rylee","Ryleigh","Rylie","Sabina","Sabine","Sable","Sabrina","Sade","Sadhbh","Sadie","Saffron","Safire","Safiya","Sage","Sahara","Saige","Saira","Sally","Salma","Salome","Sam","Samantha","Samara","Samia","Samira","Sammie","Sammy","Sandra","Sandy","Sania","Saoirse","Sapphire","Sara","Sarah","Sarina","Sirena","Sariya","Sascha","Sasha","Saskia","Savanna","Savannah","Scarlet","Scarlett","Sebastianne","Selah","Selena","Selene","Selina","Selma","Senuri","September","Seren","Serena","Serenity","Shakira","Shamira","Shana","Shania","Shannon","Shari","Sharon","Shary","Shauna","Shawn","Shawna","Shawnette","Shayla","Shayna","Shea","Sheba","Sheena","Sheila","Shelby","Shelia","Shelley","Shelly","Sheri","Sheridan","Sherri","Sherrie","Sherry","Sheryl","Shirley","Shivani","Shona","Shonagh","Shreya","Shyann","Shyla","Sian","Sidney","Sienna","Sierra","Sigourney","Silvia","Simone","Simran","Sindy","Sinead","Siobhan","Sky","Skye","Skylar","Skyler","Sloane","Snow","Sofia","Sofie","Sondra","Sonia","Sonja","Sonya","Sophia","Sophie","Sophy","Sorrel","Spring","Stacey","Staci","Stacie","Stacy","Star","Starla","Stefanie","Stella","Steph","Stephanie","Sue","Sugar","Suki","Summer","Susan","Susanna","Susannah","Susanne","Susie","Sutton","Suzanna","Suzanne","Suzette","Suzie","Suzy","Sybil","Sydney","Sylvia","Sylvie","Tabatha","Tabitha","Tagan","Tahlia","Tailynn","Tala","Talia","Talitha","Taliyah","Tallulah","Tamara","Tamera","Tami","Tamia","Tamika","Tammi","Tammie","Tammy","Tamra","Tamsin","Tania","Tanika","Tanisha","Tanya","Tara","Taryn","Tasha","Tasmin","Tatiana","Tatum","Tawana","Taya","Tayah","Tayla","Taylah","Tayler","Taylor","Teagan","Teegan","Tegan","Teigan","Tenille","Teresa","Teri","Terri","Terrie","Terry","Tess","Tessa","Thalia","Thea","Thelma","Theodora","Theresa","Therese","Thomasina","Tia","Tiana","Tiara","Tiegan","Tiffany","Tilly","Tina","Tisha","Toni","Tonia","Tonya","Tora","Tori","Tracey","Traci","Tracie","Tracy","Tricia","Trina","Trinity","Trish","Trisha","Trista","Trixie","Trixy","Trudy","Tula","Tulip","Tyra","Ulrica","Uma","Una","Ursula","Valentina","Valeria","Valerie","Valery","Vanessa","Veda","Velma","Venetia","Venus","Vera","Verity","Veronica","Vicki","Vickie","Vicky","Victoria","Vienna","Viola","Violet","Violetta","Virginia","Virginie","Vivian","Viviana","Vivien","Vivienne","Wallis","Wanda","Waverley","Wendi","Wendy","Whitney","Wilhelmina","Willa","Willow","Wilma","Winifred","Winnie","Winnifred","Winona","Winter","Wynne","Xandra","Xandria","Xanthe","Xaviera","Xena","Xia","Ximena","Xochil","Xochitl","Yasmin","Yasmina","Yasmine","Yazmin","Yelena","Yesenia","Yessica","Yolanda","Ysabel","Yula","Yulissa","Yvaine","Yvette","Yvonne","Zada","Zaheera","Zahra","Zaira","Zakia","Zali","Zara","Zaria","Zaya","Zayla","Zelda","Zelida","Zelina","Zena","Zendaya","Zia","Zina","Zita","Ziva","Zoe","Zoey","Zola","Zora","Zoya","Zula","Zuri","Zyana"]

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = ["Aaron","Abdul","Abdullah","Abe","Abel","Abraham","Abram","Abriel","Ace","Adam","Adan","Addison","Ade","Aden","Adnan","Adonis","Adrian","Adriel","Ahmad","Ahmed","Aidan","Aiden","Ainsley","Ajay","Al","Alain","Alan","Alaric","Alastair","Albany","Albert","Alberto","Albie","Alden","Aldo","Aldric","Aldrin","Alec","Aled","Alejandro","Alen","Alesandro","Alex","Alexander","Alexis","Alfie","Alfonse","Alfonso","Alfred","Alfredo","Ali","Alistair","Allan","Allen","Alonzo","Aloysius","Alphonso","Alton","Alvin","Amari","Amir","Amit","Amos","Anand","Anderson","Andre","Andreas","Andres","Andrew","Andy","Angel","Angelo","Angus","Ansel","Anson","Anthony","Anton","Antonio","Antony","Apollo","Aran","Archer","Archie","Ari","Arjun","Arlo","Arman","Armando","Arnold","Aron","Arran","Arrie","Art","Arthur","Arturo","Arun","Arwin","Asa","Asad","Ash","Ashby","Asher","Ashley","Ashton","Ashwin","Aspen","Aston","Aswin","Athan","Atticus","Aubrey","Auden","Audwin","August","Augustus","Austen","Austin","Aven","Avery","Axel","Ayaan","Ayden","Bailey","Barack","Barclay","Barnaby","Barney","Barrett","Barron","Barry","Bart","Bartholomew","Basil","Bastian","Baxter","Bay","Baylor","Bear","Beau","Beck","Beckett","Bellamy","Ben","Benedict","Benjamin","Benji","Benjy","Bennett","Bennie","Benny","Benson","Bentley","Bently","Bernard","Bernardo","Bernie","Bert","Bertie","Bertram","Bev","Bevan","Bill","Billy","Bjorn","Bladen","Blain","Blaine","Blair","Blaise","Blake","Blaze","Blue","Bob","Bobby","Bodie","Bogdan","Boris","Boston","Bowen","Boyd","Brad","Braden","Bradford","Bradley","Bradwin","Brady","Braeden","Bram","Branden","Brandon","Brantley","Braxton","Bray","Brayan","Brayden","Braydon","Braylon","Breck","Brendan","Brenden","Brendon","Brennan","Brennon","Brent","Brentley","Brenton","Bret","Brett","Brevin","Brevyn","Brian","Brice","Bridie","Brie","Brighton","Brinley","Brock","Brod","Brodie","Brody","Brogan","Bronson","Brooke","Brooks","Bruce","Bruno","Bryan","Bryant","Bryce","Bryden","Brydon","Bryn","Bryon","Bryson","Buck","Buddy","Burt","Burton","Buster","Butch","Byron","Cadby","Cade","Caden","Cael","Caelan","Caesar","Cai","Caiden","Cain","Caius","Cal","Cale","Caleb","Calhoun","Callan","Callen","Callum","Calum","Calvin","Cam","Camden","Cameron","Campbell","Camron","Carey","Carl","Carlisle","Carlos","Carlton","Carsen","Carson","Carsten","Carter","Cary","Casey","Cash","Cason","Casper","Cassius","Castiel","Castor","Cathal","Cato","Cavan","Cayden","Caydon","Cayson","Cecil","Cedric","Cesar","Chad","Chance","Chandler","Channing","Charles","Charley","Charlie","Charlton","Chas","Chase","Chaz","Che","Chesney","Chester","Chevy","Chip","Chris","Christian","Christopher","Chuck","Cian","Ciaran","Cillian","Clancy","Clarence","Clark","Claude","Clay","Clayton","Clement","Cletus","Cliff","Clifford","Clifton","Clint","Clinton","Clive","Clyde","Coby","Cody","Cohen","Colby","Cole","Colin","Collin","Colm","Colt","Colton","Conan","Conner","Connor","Conor","Conrad","Constantine","Cooper","Corbin","Corey","Cormac","Cornelius","Cory","Craig","Cristian","Cristobal","Crosby","Cruz","Cullen","Curt","Curtis","Cuthbert","Cyril","Cyrus","Dacey","Daire","Dakota","Dale","Dalen","Dallas","Dalton","Damian","Damien","Damion","Damon","Dan","Dana","Dane","Daniel","Danny","Dante","Dara","Daragh","Darcy","Daren","Darian","Darin","Dario","Darius","Darnell","Darragh","Darrel","Darrell","Darren","Darrin","Darryl","Darryn","Darwin","Daryl","Dash","Dashawn","Dave","David","Davin","Davion","Davis","Dawson","Dax","Daxon","Daxter","Daxton","Dayton","Deacon","Dean","Deandre","Declan","Deepak","Delbert","Demetrius","Denis","Dennis","Denny","Denver","Denzel","Deon","Derek","Dermot","Derrick","Deshaun","Deshawn","Desmond","Dev","Devin","Devlin","Devon","Devyn","Dewayne","Dewey","Dexter","Diarmuid","Dick","Dicky","Diego","Digby","Dilan","Dillon","Dimitri","Dinesh","Dino","Dion","Dirk","Django","Dmitri","Dominic","Dominick","Don","Donald","Donnie","Donovan","Dorian","Doug","Douglas","Doyle","Drake","Drew","Duane","Dudley","Duke","Duncan","Dustin","Dwayne","Dwight","Dylan","Eamon","Earl","Earnest","Eason","Easton","Ed","Eddie","Eddy","Eden","Edgar","Edison","Edmund","Edouard","Edric","Edsel","Eduardo","Edward","Edwardo","Edwin","Efrain","Efren","Egan","Egon","Eli","Elias","Elijah","Eliot","Elisha","Ellington","Elliot","Elliott","Ellis","Elmer","Elmo","Elon","Elton","Elvis","Elwyn","Emanuel","Emerson","Emery","Emet","Emil","Emiliano","Emilio","Emlyn","Emmanuel","Emmerson","Emmet","Emmett","Ennio","Enoch","Enrique","Enzo","Eoghan","Eoin","Eric","Erick","Erik","Ernest","Ernesto","Ernie","Errol","Ervin","Erwin","Esteban","Ethan","Ethen","Etienne","Euan","Euen","Eugene","Eustace","Evan","Evangelos","Evelyn","Everett","Ewan","Ezekiel","Ezio","Ezra","Fabian","Fabio","Faisal","Farley","Febian","Felipe","Felix","Fenton","Fergal","Fergus","Fernand","Fernando","Fidel","Finbar","Finlay","Finley","Finn","Finnian","Finnigan","Fionn","Fletcher","Florian","Floyd","Flynn","Ford","Forest","Forrest","Foster","Fox","Francesco","Francis","Francisco","Frank","Frankie","Franklin","Franklyn","Fraser","Fred","Freddie","Freddy","Frederick","Fredrick","Fritz","Gabe","Gabriel","Gael","Gaelan","Gage","Gale","Galen","Gannon","Gareth","Garman","Garrett","Garrison","Garry","Garth","Gary","Gaston","Gavin","Gene","Geoff","Geoffrey","George","Geraint","Gerald","Gerard","Gerardo","Germain","Gerry","Gian","Gibson","Gideon","Gil","Gilbert","Gilberto","Giles","Gino","Giorgio","Giovanni","Glen","Glenn","Glyndwr","Glynn","Godfrey","Godric","Godwin","Gonzalo","Gordon","Grady","Graeme","Graham","Granger","Grant","Grayson","Greg","Gregg","Gregor","Gregory","Grey","Greyson","Griffin","Guillermo","Gunnar","Gunner","Gus","Gustav","Gustavo","Guy","Haden","Haiden","Hal","Hamish","Han","Hank","Hans","Harlan","Harley","Harold","Harris","Harrison","Harry","Harvey","Hassan","Hayden","Hayes","Heath","Hector","Hendrik","Hendrix","Henley","Henri","Henry","Herbert","Herman","Heston","Hilary","Holden","Homer","Horace","Horatio","Howard","Hubert","Hudson","Hugh","Hugo","Humberto","Humphrey","Hunter","Huw","Hywel","Iain","Ian","Ianto","Ibrahim","Idris","Ieuan","Iggy","Ignacio","Igor","Ike","Imran","Indiana","Inigo","Ira","Irvin","Irving","Irwin","Isaac","Isaiah","Isaias","Ishaan","Ishmael","Isiah","Isidore","Ismael","Israel","Issac","Ivan","Ivor","Jace","Jack","Jackie","Jackson","Jacob","Jacoby","Jacques","Jaden","Jadon","Jagger","Jago","Jai","Jaiden","Jaime","Jak","Jake","Jakob","Jalen","Jamal","James","Jameson","Jamie","Jamison","Jan","Jared","Jaret","Jariel","Jarod","Jarrett","Jarrod","Jarvis","Jase","Jason","Jasper","Javid","Javier","Javon","Jax","Jaxon","Jaxson","Jay","Jayce","Jayden","Jaydon","Jaylen","Jaylin","Jaylon","Jayson","Jeb","Jebediah","Jed","Jedediah","Jediah","Jedidiah","Jeff","Jefferson","Jeffery","Jeffrey","Jeffry","Jensen","Jenson","Jerald","Jeremiah","Jeremy","Jericho","Jermaine","Jerome","Jerry","Jersey","Jesse","Jessie","Jesus","Jet","Jethro","Jett","Jevan","Jim","Jimmie","Jimmy","Joachim","Joaquin","Jock","Jody","Joe","Joel","Joey","Johan","John","Johnathan","Johnathon","Johnnie","Johnny","Jon","Jonah","Jonas","Jonathan","Jonathon","Jonty","Jordan","Jordon","Jordy","Jorge","Jose","Joseph","Josh","Joshua","Josiah","Joss","Josue","Jovan","Juan","Judah","Judas","Judd","Jude","Julian","Julio","Julius","Justice","Justin","Kade","Kaden","Kai","Kaiden","Kaine","Kale","Kaleb","Kameron","Kane","Karl","Karson","Karsten","Kash","Kasper","Kayden","Kayle","Kaylen","Kayson","Kean","Keanu","Keaton","Kedrick","Keegan","Keenan","Keith","Kellan","Kellen","Kellin","Kelly","Kelvin","Ken","Kendall","Kendrick","Kennedy","Kenneth","Kenny","Kent","Kenton","Kerry","Kevin","Khalid","Khalil","Kian","Kiefer","Kieran","Kieron","Killian","Kim","Kingsley","Kingston","Kip","Kiran","Kirby","Kirk","Kit","Klaus","Klay","Knox","Kobe","Koby","Kody","Kolby","Kris","Krish","Kristian","Kristoff","Kristopher","Kurt","Kurtis","Kyan","Kye","Kylar","Kyle","Kylen","Kyler","Kyran","Kyrin","Kyron","Lacey","Lachlan","Lake","Lamar","Lamont","Lance","Landen","Landon","Landyn","Lane","Langdon","Langston","Larry","Lars","Laurence","Laurie","Lawrence","Lawson","Layne","Layton","Leaf","Leandro","Lebron","Ledger","Lee","Leigh","Leighton","Leland","Len","Lennie","Lennon","Lennox","Lenny","Leo","Leon","Leonard","Leonardo","Leonel","Leopold","Leroy","Les","Leslie","Lester","Leuan","Lev","Leven","Levi","Levy","Lewis","Lex","Leyton","Liam","Lief","Lincoln","Linden","Link","Linus","Lionel","Lisandro","Llewelyn","Lloyd","Lochlan","Logan","Loki","London","Lonnie","Lorcan","Loren","Lorenzo","Loris","Lou","Louie","Louis","Lowell","Luca","Lucas","Lucian","Luciano","Luigi","Luis","Lukas","Luke","Luther","Lyle","Lyndon","Lynn","Lysander","Mack","Maddox","Magnus","Maison","Malachi","Malakai","Malcolm","Malik","Malloy","Manny","Manuel","Marc","Marcel","Marco","Marcos","Marcus","Marik","Mario","Marion","Mark","Marley","Marlon","Marquis","Marshall","Martin","Marty","Martyn","Marvin","Mason","Massimo","Mat","Mateo","Mathew","Matt","Matthew","Matthias","Maurice","Mauricio","Maverick","Max","Maxim","Maximilian","Maximus","Maxwell","Mehdi","Mehtab","Mekhi","Mel","Melvin","Merick","Mervin","Mervyn","Micah","Michael","Micheal","Mick","Mickey","Miguel","Mike","Mikey","Milan","Miles","Miller","Milo","Milton","Misha","Mitch","Mitchell","Mitt","Moe","Mohamed","Mohammad","Mohammed","Moises","Monte","Montgomery","Monty","Mordecai","Morgan","Morris","Moses","Muhammad","Murphy","Murray","Myles","Mylo","Myron","Nash","Nasir","Nate","Nath","Nathan","Nathanael","Nathaniel","Neal","Ned","Nehemiah","Neil","Nelson","Nesbit","Nestor","Neville","Nevin","Niall","Nicholas","Nick","Nickolas","Nicky","Nico","Nicolas","Nigel","Nihal","Nik","Niklaus","Niko","Nikolai","Nikolas","Nile","Nils","Noah","Noe","Noel","Nolan","Norbert","Norman","Nyle","Oakes","Oakley","Oberon","Octavio","Oisin","Olaf","Oli","Oliver","Ollie","Olly","Omar","Oran","Orion","Orlando","Orson","Oscar","Osvaldo","Oswald","Otis","Otto","Owain","Owen","Ozzie","Ozzy","Pablo","Paco","Paddy","Padraig","Palmer","Paolo","Parker","Pascal","Pat","Patrick","Paul","Paxton","Payton","Pearce","Pedro","Percy","Perry","Petar","Pete","Peter","Peyton","Phebian","Phil","Philip","Philippe","Phillip","Phineas","Phoenix","Pierce","Piers","Pip","Porter","Poul","Prakash","Preston","Prince","Princeton","Quentin","Quincy","Quinlan","Quinn","Quinton","Quintrell","Rafael","Rafferty","Raheem","Rahul","Raiden","Raj","Rajesh","Ralph","Ram","Rameel","Ramon","Ramsey","Randal","Randall","Randolph","Randy","Raoul","Raphael","Rashad","Rashan","Rashid","Raul","Ravi","Ray","Raylan","Raymond","Reece","Reed","Reef","Reese","Reggie","Reginald","Rehan","Reid","Reilly","Remco","Remington","Remy","Ren","Rene","Reuben","Rex","Reynaldo","Reza","Rhett","Rhydian","Rhys","Rian","Ricardo","Rich","Richard","Richie","Rick","Rickey","Rickie","Ricky","Rico","Rider","Rik","Riker","Riley","Rio","Riordan","River","Roan","Rob","Robbie","Robby","Robert","Roberto","Robin","Rocco","Rock","Rocky","Rod","Roddy","Roderick","Rodger","Rodney","Rodolfo","Rodrigo","Rogelio","Roger","Rohan","Roland","Rolando","Roman","Romeo","Ron","Ronald","Ronan","Ronnie","Ronny","Roosevelt","Rory","Roscoe","Ross","Rowan","Roy","Royce","Ruairi","Ruben","Rubin","Rudolph","Rudy","Rufus","Rupert","Russ","Russell","Rusty","Ryan","Ryder","Ryker","Rylan","Ryland","Ryle","Ryley","Sacha","Said","Salman","Salvador","Salvatore","Sam","Samir","Sammy","Samson","Samuel","Sandeep","Sandy","Sanjay","Santiago","Sasha","Saul","Sawyer","Scot","Scott","Scottie","Scotty","Seamus","Sean","Seb","Sebastian","Sebastien","Sebestian","Sergio","Seth","Shadrach","Shane","Shannon","Shaun","Shawn","Shay","Shayne","Shea","Sheldon","Shelton","Sherlock","Sherman","Sherwin","Shiloh","Sid","Sidney","Silas","Simeon","Simon","Sky","Skylar","Skyler","Slade","Sol","Solomon","Sonny","Soren","Spencer","Spike","Stacey","Stacy","Stan","Stanley","Stefan","Stephan","Stephen","Sterling","Steve","Steven","Stevie","Stewart","Stone","Storm","Struan","Stuart","Sufyan","Sullivan","Sven","Sylvester","Tadhg","Talon","Tam","Tanner","Tariq","Tarquin","Tate","Taylor","Teague","Ted","Teddy","Teo","Terence","Terrance","Terrell","Terrence","Terry","Tevin","Tex","Thad","Thaddeus","Theo","Theodore","Theon","Theophilus","Thomas","Thor","Tiago","Tiberius","Tiernan","Tiger","Tim","Timmy","Timothy","Tito","Titus","Tobias","Tobin","Toby","Tod","Todd","Tom","Tomas","Tommie","Tommy","Tony","Torin","Toryn","Trace","Tracey","Tracy","Travis","Tray","Tremaine","Trent","Trenton","Trevon","Trevor","Trey","Tristan","Tristen","Triston","Troy","Truman","Tucker","Turner","Ty","Tylan","Tyler","Tyrese","Tyrone","Tyson","Ulrich","Ulysses","Umar","Uriah","Uriel","Usama","Valentin","Valentine","Valentino","Van","Vance","Vasco","Vaughn","Vernon","Victor","Vidal","Vihan","Vijay","Vikram","Vince","Vincent","Vinnie","Virgil","Vishal","Vivian","Vlad","Vladimir","Wade","Walker","Wallace","Wally","Walter","Warren","Waylon","Wayne","Wendell","Wes","Wesley","Westin","Weston","Wilbert","Wilbur","Wiley","Wilfred","Wilhelm","Will","Willam","Willard","Willem","William","Willie","Willis","Wilson","Winston","Wolf","Wolfgang","Woody","Wyatt","Xander","Xavier","Xerxes","Yahir","Yardley","Yehudi","Yestin","York","Yuri","Yusuf","Yves","Zac","Zach","Zachariah","Zachary","Zachery","Zack","Zackary","Zackery","Zaiden","Zain","Zaine","Zak","Zander","Zane","Zayden","Zayn","Zayne","Zeb","Zebulon","Zed","Zeke","Zeph","Ziggy","Zion","Zoltan","Zuriel","Zylen"]

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = ["Alessandra","Alessia","Alice","Angela","Anna","Arianna","Beatrice","Camilla","Caterina","Chiara","Claudia","Cristina","Debora","Elena","Eleonora","Elisa","Erica","Erika","Federica","Francesca","Gaia","Giada","Giorgia","Giulia","Greta","Ilaria","Irene","Jessica","Laura","Lisa","Lucia","Maria","Marta","Martina","Michela","Monica","Nicole","Noemi","Paola","Roberta","Sara","Serena","Silvia","Simona","Sofia","Stefania","Valentina","Valeria","Vanessa","Veronica"]

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = ["Alberto","Alessandro","Alessio","Alex","Andrea","Angelo","Antonio","Christian","Claudio","Daniele","Dario","Davide","Domenico","Edoardo","Emanuele","Enrico","Fabio","Federico","Filippo","Francesco","Gabriele","Giacomo","Gianluca","Giorgio","Giovanni","Giulio","Giuseppe","Jacopo","Leonardo","Lorenzo","Luca","Luigi","Manuel","Marco","Matteo","Mattia","Michele","Mirko","Nicola","Nicolò","Paolo","Pietro","Riccardo","Roberto","Salvatore","Simone","Stefano","Tommaso","Valerio","Vincenzo"]

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = ["Aaliyah","Abigael","Adriana","Adèle","Agathe","Aicha","Albane","Alessia","Alexandra","Alexia","Aleyna","Alia","Alice","Alicia","Alienor","Aline","Alix","Aliya","Aliyah","Alizee","Alya","Alycia","Alyssa","Alyssia","Amandine","Ambre","Ambrine","Amel","Amelia","Amina","Aminata","Amira","Amy","Amélie","Ana","Anae","Anaelle","Anastasia","Anaïs","Andrea","Angela","Angelina","Angeline","Angèle","Anissa","Anna","Annabelle","Annaelle","Anouk","Apolline","Ashley","Asma","Assia","Assya","Astrid","Athénaïs","Audrey","Augustine","Aurore","Aurélie","Ava","Awa","Axelle","Aya","Berenice","Bertille","Blanche","Cali","Calie","Camelia","Camille","Candice","Capucine","Carla","Carmen","Caroline","Cassandra","Cassandre","Cassie","Cecilia","Celia","Celya","Chahinez","Chaima","Charlene","Charlie","Charline","Charlotte","Chayma","Chiara","Chloé","Claire","Clara","Clarisse","Clea","Clelia","Clementine","Cleo","Clotilde","Cloé","Clémence","Coline","Constance","Coralie","Cyrielle","Cécile","Céleste","Célestine","Céline","Daphné","Deborah","Diana","Diane","Dina","Dounia","Eden","Ela","Elea","Eleana","Elena","Elia","Elif","Elina","Eline","Elisa","Elissa","Ella","Eloane","Elona","Elora","Elsa","Elya","Elyna","Elyne","Eléonore","Ema","Emeline","Emie","Emily","Emma","Emmanuelle","Emmie","Emmy","Emna","Emy","Enola","Enora","Erine","Estelle","Esther","Eugénie","Eva","Eve","Eya","Élisabeth","Élise","Élodie","Éloïse","Émilie","Fanny","Fantine","Farah","Fatima","Fatma","Fatoumata","Faustine","Flavie","Fleur","Flora","Flore","Florine","Gabriella","Gabrielle","Garance","Gaëlle","Giulia","Grace","Gwenaëlle","Gwendoline","Hafsa","Hajar","Halima","Hana","Hanae","Hanna","Hannah","Hawa","Helena","Hiba","Hind","Hortense","Héloïse","Hélène","Ibtissem","Ilana","Iliana","Ilona","Ilyana","Imane","Imen","Imene","Inaya","Inès","Iris","Isaure","Isis","Isra","Izia","Jade","Jana","Janelle","Janna","Jasmine","Jeanne","Jenna","Jessica","Jihane","Joana","Johanna","Joséphine","Joy","Joyce","Judith","Julia","Julie","Juliette","Juline","Justine","Kahina","Kaina","Kamelia","Kayla","Kayna","Kelia","Kelly","Kelya","Kenza","Kessy","Khadija","Kiara","Kim","Kimberley","Kyara","Laetitia","Lalie","Laly","Lamia","Lana","Lara","Laura","Laure","Laurine","Layana","Leana","Leane","Leanne","Leelou","Leia","Leila","Leina","Lena","Leona","Leyna","Lia","Liana","Lila","Lilas","Lili","Lili-Rose","Lilia","Lilie","Lilly","Lilou","Lilwenn","Lily","Lily-Rose","Lilya","Lina","Linda","Lindsay","Line","Lisa","Lise","Lison","Livia","Liya","Loane","Loanne","Lois","Lola","Lorena","Lou","Lou-Ann","Lou-Anne","Louane","Louann","Louanne","Louisa","Louise","Louison","Louna","Luce","Lucia","Lucie","Lucile","Lucille","Lucy","Ludivine","Luna","Lya","Lyana","Lydia","Lylia","Lylou","Lyna","Léa","Léonie","Madeleine","Mae","Maelia","Maelie","Maeline","Maelly","Maellys","Maely","Maelyne","Maelyss","Maeva","Maia","Maily","Mailys","Maimouna","Maina","Maissa","Maissane","Maiwenn","Malak","Malia","Manel","Manelle","Manon","Margaux","Margot","Maria","Mariam","Marie","Marilou","Marina","Marine","Marion","Marwa","Maryam","Marylou","Mathilde","Maud","Maya","Maylis","Mayssa","Maëlle","Maëlys","Meissa","Melia","Melina","Melinda","Mellina","Melodie","Melody","Melyna","Melyne","Meriem","Meryem","Mia","Mila","Milla","Mina","Mona","Morgane","Mya","Myriam","Mélanie","Méline","Mélissa","Nada","Naelle","Naia","Naila","Naima","Nais","Naomi","Naomie","Nawel","Naya","Nayla","Neila","Nelia","Nell","Nesrine","Neyla","Nina","Ninon","Nisa","Noa","Noelie","Noeline","Nola","Nora","Norah","Nour","Noémie","Océane","Olivia","Ophélie","Oriane","Orlane","Ornella","Paloma","Paola","Pauline","Perrine","Philippine","Philomène","Prune","Pénélope","Rachel","Rahma","Rania","Raphaëlle","Romane","Romy","Rosalie","Rose","Roxane","Rébecca","Sabrina","Sacha","Safa","Safia","Safiya","Sakina","Salma","Salomé","Samia","Sana","Sara","Sarah","Sasha","Savannah","Selena","Selene","Selma","Serena","Shaima","Shaina","Shana","Shanna","Shayna","Sherine","Sidonie","Sirine","Sixtine","Sofia","Soline","Solène","Sonia","Sophia","Sophie","Soraya","Soukaina","Soumaya","Stella","Suzanne","Suzie","Syrine","Taina","Talia","Tamara","Tania","Tatiana","Tess","Tessa","Thais","Thalia","Thea","Tiffany","Tina","Tiphaine","Valentine","Vanessa","Victoire","Victoria","Violette","Wendy","Yael","Yaelle","Yasmina","Yasmine","Youna","Yousra","Yuna","Zahra","Zelie","Zia","Zoé"]

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = ["Aaron","Abdallah","Abdoulaye","Abel","Achille","Adam","Adama","Adame","Adel","Adem","Adil","Adrian","Adrien","Ahmed","Aidan","Aksel","Alan","Alban","Albin","Alessandro","Alessio","Alex","Alexandre","Alexis","Alexy","Ali","Alix","Allan","Alois","Amadou","Amaury","Ambroise","Amin","Amine","Amir","Anael","Anas","Anatole","Andrea","Andreas","Andy","Ange","Angel","Angelo","Anis","Anthony","Antoine","Anton","Antonin","Antonio","Antony","Arda","Armand","Arnaud","Arsène","Arthur","Aubin","Auguste","Augustin","Aurélien","Axel","Ayman","Aymane","Aymen","Aymeric","Ayoub","Badis","Baptiste","Basile","Bastien","Benjamin","Benoit","Bilal","Bilel","Brahim","Brandon","Brayan","Bryan","Calvin","Cameron","Camil","Camille","Cedric","Celian","Chahine","Charles","Charlie","Charly","Chris","Christopher","Clovis","Clément","Colin","Corentin","Curtis","Cyprien","Cyril","Célestin","César","Côme","Damien","Daniel","Dany","David","Denis","Diego","Dimitri","Djibril","Donovan","Dorian","Dylan","Eden","Edgar","Elias","Elijah","Elio","Eliot","Eliott","Elliot","Eloan","Eloi","Elouan","Elyas","Elyes","Emir","Emmanuel","Enes","Enzo","Eren","Eric","Erwan","Erwann","Esteban","Etan","Ethan","Ethann","Evan","Evann","Ewan","Ewen","Ewenn","Ezio","Édouard","Élie","Émeric","Émile","Émilien","Étienne","Fabien","Fabio","Fares","Flavien","Flavio","Florent","Florian","François","Félix","Gabin","Gabriel","Gaspard","Gauthier","Gautier","Gaétan","Gaël","Gianni","Giovanni","Gregory","Grégoire","Guilhem","Guillaume","Gustave","Hadrien","Hamza","Hector","Henri","Hippolyte","Hugo","Iban","Ibrahim","Ibrahima","Idris","Idriss","Ilan","Ilhan","Ilian","Ilias","Ilies","Ilyan","Ilyas","Ilyes","Ilyess","Imran","Imrane","Isaac","Ismael","Ismail","Issa","Issam","Ivan","Iyad","Iyed","Jaden","James","Jason","Jawad","Jayson","Jean","Jean-Baptiste","Jeremy","Jessim","Jessy","Jibril","Jimmy","Joachim","Joan","Johan","Johann","Jonas","Jonathan","Jordan","Joris","Joseph","Joshua","Josué","Jules","Julian","Julien","Justin","Jérémie","Kais","Kamil","Karim","Karl","Kelian","Kelyan","Kenan","Kenji","Kenny","Kenzo","Kevin","Keziah","Khalil","Kilian","Killian","Kilyan","Kylian","Kyllian","Leandro","Lenny","Leny","Lenzo","Liam","Lilian","Lino","Lisandro","Livio","Loan","Loann","Logan","Lohan","Lois","Lorenzo","Loris","Lou","Louca","Loucas","Louis","Louison","Louka","Loukas","Loïc","Lubin","Luc","Luca","Lucas","Lucien","Ludovic","Luis","Luka","Lukas","Lyam","Léandre","Léo","Léon","Léonard","Léopold","Maceo","Mae","Mahamadou","Mahdi","Mahe","Malik","Malo","Malone","Mamadou","Marc","Marceau","Marco","Marcus","Marin","Marius","Marley","Marlon","Marouane","Martin","Marvin","Marwan","Marwane","Mateo","Matheo","Mathias","Mathieu","Mathis","Mathys","Matis","Matisse","Matt","Matteo","Mattheo","Matthew","Matthias","Matthieu","Matys","Max","Maxence","Maxime","Maximilien","Mayron","Maël","Mehdi","Melvin","Melvyn","Merlin","Michael","Michel","Mickael","Miguel","Mike","Milan","Milo","Mohamed","Mohamed-Ali","Mohamed-Amine","Mohammed","Morgan","Moussa","Muhammed","Mylan","Nabil","Nadir","Nael","Nahel","Nahil","Nail","Naim","Nassim","Natan","Nathael","Nathan","Nathanael","Nelson","Neo","Nicolas","Nils","Nino","Noa","Noah","Noam","Noan","Noha","Noham","Nohan","Nohlan","Nolan","Nolann","Nolhan","Noé","Octave","Olivier","Omar","Oscar","Ousmane","Owen","Pablo","Paco","Pacome","Paolo","Paul","Philippe","Pierre","Quentin","Rafael","Raphaël","Rayan","Rayane","Reda","Riyad","Robin","Romain","Roman","Romeo","Ronan","Ruben","Rudy","Ryad","Ryan","Rémi","Rémy","Sabri","Sacha","Said","Salim","Sam","Sami","Samuel","Samy","Sandro","Sasha","Sean","Selim","Selyan","Sevan","Simeon","Simon","Soan","Sofiane","Sohan","Solal","Soren","Souleymane","Stan","Stanislas","Steven","Stéphane","Swan","Swann","Sébastien","Tao","Teddy","Teo","Thibaud","Thibault","Thibaut","Thimeo","Thomas","Théo","Théodore","Théophile","Tiago","Tidiane","Tilio","Tim","Timeo","Timote","Timothe","Timothée","Tino","Titouan","Tom","Tony","Tristan","Tymeo","Tyron","Ugo","Ulysse","Vadim","Valentin","Vianney","Victor","Vincent","Virgile","Wael","Walid","Warren","Wassim","Wesley","William","Wissem","Wyatt","Xavier","Yacine","Yael","Yanis","Yann","Yannis","Yasser","Yassin","Yassine","Ylan","Ylann","Yoan","Yoann","Yohan","Yohann","Youcef","Younes","Youssef","Yusuf","Zacharie","Zakaria"]

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = ["Alina","Amelie","Amy","Anna","Charlotte","Clara","Elisa","Ella","Emelie","Emely","Emilia","Emily","Emilie","Emma","Frida","Frieda","Greta","Hannah","Hanna","Helena","Ida","Isabel","Isabell","Isabella","Isabelle","Jana","Johanna","Julia","Klara","Lara","Laura","Lea","Leah","Lena","Leni","Leonie","Lia","Liah","Lilli","Lilly","Lina","Lisa","Lotta","Louisa","Luisa","Lya","Maja","Marie","Marlene","Mathilda","Matilda","Maya","Melina","Mia","Mila","Mira","Neele","Nele","Paula","Pia","Sara","Sarah","Sofia","Sophia","Sofie","Sophie","Victoria","Viktoria","Zoe","Zoé"]

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = ["Alexander","Anton","Ben","Benjamin","Carl","David","Elias","Emil","Eric","Erik","Fabian","Felix","Finn","Fynn","Hannes","Henri","Henry","Jacob","Jakob","Jan","Jannik","Jona","Jonah","Jonas","Jonathan","Julian","Karl","Lennard","Lennart","Leo","Leon","Liam","Linus","Louis","Luca","Lucas","Luis","Luka","Lukas","Mads","Mats","Matteo","Max","Maximilian","Mika","Moritz","Nick","Niclas","Nico","Niklas","Niko","Noah","Oscar","Oskar","Paul","Philipp","Rafael","Raphael","Samuel","Simon","Theo","Till","Tim","Tom","Vincent","Yannic","Yannick","Yannik"]

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = ["Abigail","Abril","Adriana","Agustina","Aitana","Alejandra","Alessandra","Alexa","Allison","Alma","Amanda","Amelia","Ana Paula","Ana Sofia","Ana","Andrea","Antonella","Antonia","Ariadna","Ariana","Ashley","Bianca","Camila","Carla","Carolina","Catalina","Clara","Constanza","Daniela","Delfina","Elena","Elizabeth","Emilia","Emily","Emma","Fabiana","Florencia","Fátima","Gabriela","Guadalupe","Irene","Isabel","Isabella","Isidora","Ivanna","Jazmín","Josefa","Josefina","Juana","Julia","Juliana","Julieta","Laura","Lola","Luana","Lucia","Luciana","Luna","Magdalena","Maite","Malena","Manuela","Maria José","Mariana","Mariangel","Martina","María Alejandra","María Camila","María Fernanda","María Paula","María","Micaela","Michelle","Miranda","Montserrat","Mía","Natalia","Nicole","Olivia","Paula","Paulina","Rafaela","Rebeca","Regina","Renata","Romina","Salomé","Samantha","Sara Sofía","Sara","Silvana","Sofia","Sophie","Valentina","Valeria","Valery","Victoria","Violeta","Ximena","Jimena","Zoe"]

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = ["Aarón","Adrián","Agustín","Alan","Alejandro","Alex","Alexander","Alonso","Andrés","Anthony","Antonio","Axel","Bautista","Benjamín","Bruno","Camilo","Carlos","Christian","Christopher","Cristóbal","Damián","Daniel","Dante","David","Diego","Diego Alejandro","Dylan","Eduardo","Elías","Emiliano","Emilio","Emmanuel","Esteban","Facundo","Felipe","Fernando","Francisco","Franco","Gabriel","Gael","Hugo","Ian","Ignacio","Iker","Isaac","Ivan","Jacobo","Javier","Jerónimo","Jesús","Joaquín","Jorge","Joshua","Josué","Juan","Juan David","Juan Diego","Juan Esteban","Juan José","Juan Manuel","Juan Martín","Juan Pablo","Juan Sebastián","Julián","Kevin","Lautaro","Leonardo","Lorenzo","Lucas","Luciano","Luis","Manuel","Mario","Martín","Mateo","Matthew","Matías","Maximiliano","Miguel","Miguel Ángel","Máximo","Nicolás","Pablo","Pedro","Rafael","Ricardo","Rodrigo","Samuel","Santiago","Santino","Sebastián","Sergio","Simón","Thiago","Tomas","Valentino","Valentín","Vicente"]

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;
exports.unlerp = unlerp;
exports.interpolate = interpolate;
exports.curryInterpolate = curryInterpolate;
function lerp(a, b, fac) {
  return a + (b - a) * fac;
}

function unlerp(a, b, val) {
  return (val - a) / (b - a);
}

function interpolate(xs, ys, x) {
  var lowerBound = null;
  var upperBound = null;
  var i = void 0;
  for (i = 0; i < xs.length; i++) {
    if (x > xs[i]) lowerBound = i;
  }
  for (i = xs.length - 1; i >= 0; i--) {
    if (x < xs[i]) upperBound = i;
  }

  if (upperBound === null) return ys[0];
  if (lowerBound === null) return ys[ys.length - 1];

  var fac = unlerp(xs[lowerBound], xs[upperBound], x);
  return lerp(ys[lowerBound], ys[upperBound], fac);
}

function curryInterpolate(xs, ys) {
  return function (x) {
    return interpolate(xs, ys, x);
  };
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColumnVis = __webpack_require__(227);

Object.defineProperty(exports, 'ColumnVis', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColumnVis).default;
  }
});

var _StatsChart = __webpack_require__(520);

Object.defineProperty(exports, 'StatsChart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StatsChart).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = __webpack_require__(103);

var d3 = _interopRequireWildcard(_d);

var _time = __webpack_require__(55);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Pseudo-spatial visualisation, where queues are displayed as columns. Only
 * works for models where each server has at most one input queue.
 */
var ColumnVis = function () {
  function ColumnVis(rootSelector) {
    _classCallCheck(this, ColumnVis);

    this.rootSelector = rootSelector;
    var svg = d3.select(this.rootSelector);
    svg.selectAll('*').remove();
    svg.append('g').attr('class', 'clusters');
    svg.append('g').attr('class', 'mobile-servers');
    svg.append('g').attr('class', 'timeline');
    svg.append('g').attr('class', 'stats');
  }

  _createClass(ColumnVis, [{
    key: 'draw',
    value: function draw(model) {
      var svg = d3.select(this.rootSelector);
      this.drawModel(svg, model);
      this.drawTimeline(svg, model);
    }
  }, {
    key: 'drawTimeline',
    value: function drawTimeline(svg, model) {
      var svgBbox = svg.node().getBoundingClientRect();
      svg.select('g.timeline').selectAll('text').data([{
        time: model.time
      }]).text(function () {
        return (0, _time.formatDuration)(model.time);
      }).style('text-anchor', 'middle').attr('x', svgBbox.width / 2).attr('y', function (d, i) {
        return 20 + i * 20;
      }).enter().append('text').attr('class', 'timeline-text');
    }
  }, {
    key: 'groupServers',
    value: function groupServers(model) {
      var clusters = {};
      var orderedClusters = [];
      model.walk({
        visitServer: function visitServer(server) {
          if (server.inputs.length !== 1) return;
          var queueKey = server.inputs[0].key;
          var cluster = clusters[queueKey];
          if (!cluster) {
            var queue = server.inputs[0];
            cluster = {
              queue: queue,
              label: '',
              servers: [],
              indexOffset: 0,
              open: false
            };
            clusters[queueKey] = cluster;
            orderedClusters.push(cluster);
          }
          cluster.label = server.label || cluster.label;
          cluster.open = server.open || cluster.open;
          cluster.servers.push(server);
        }
      });
      orderedClusters.reverse();
      return orderedClusters;
    }
  }, {
    key: 'getMobileServers',
    value: function getMobileServers(model) {
      return model.filter({ visitMobileServer: function visitMobileServer() {
          return true;
        } });
    }
  }, {
    key: 'applyOffsets',
    value: function applyOffsets(clusters) {
      var index = 0;
      clusters.forEach(function (cluster) {
        cluster.indexOffset = index;
        index += cluster.servers.length;
      });
      return index;
    }
  }, {
    key: 'drawModel',
    value: function drawModel(svg, model) {
      var svgBbox = svg.node().getBoundingClientRect();
      var clusters = this.groupServers(model);
      var mobileServers = this.getMobileServers(model);
      var nServers = this.applyOffsets(clusters);
      var unitWidthPx = svgBbox.width / nServers;
      var clientGeom = {
        width: function width() {
          return unitWidthPx - 10;
        },
        height: function height() {
          return 20;
        }
      };
      var serviceAreaGeom = {
        top: function top(d) {
          return svgBbox.height - (clientGeom.height(d) + 35 + 10);
        },
        height: function height(d) {
          return clientGeom.height(d) + 35;
        },
        width: function width(d) {
          return d.servers.length * unitWidthPx;
        }
      };

      var _drawServerClusters = this.drawServerClusters(svg, unitWidthPx, clusters),
          cluster = _drawServerClusters.cluster,
          clusterEnter = _drawServerClusters.clusterEnter;

      var serviceArea = this.drawServiceAreas(serviceAreaGeom, cluster, clusterEnter);
      var server = this.drawServers(serviceAreaGeom, unitWidthPx, serviceArea);
      this.drawAttendedClients(clientGeom, serviceAreaGeom, server);
      var queue = this.drawQueues(serviceAreaGeom, cluster, clusterEnter);
      this.drawQueueingClients(clientGeom, serviceAreaGeom, queue);
      this.drawMobileServers(svg, clientGeom, mobileServers);
    }
  }, {
    key: 'drawServerClusters',
    value: function drawServerClusters(svg, unitWidthPx, clusters) {
      var cluster = svg.select('g.clusters').selectAll('g.cluster').data(clusters, function (d) {
        return d.queue.key;
      });
      cluster.exit().remove();
      var clusterEnter = cluster.enter().append('g');
      cluster.merge(clusterEnter).attr('class', function (d) {
        return 'cluster ' + (d.open ? 'open' : 'closed');
      }).attr('transform', function (d) {
        return 'translate(' + d.indexOffset * unitWidthPx + ')';
      });
      return { cluster: cluster, clusterEnter: clusterEnter };
    }
  }, {
    key: 'drawServiceAreas',
    value: function drawServiceAreas(serviceAreaGeom, cluster, clusterEnter) {
      var enter = clusterEnter.append('g').attr('class', 'service-area');
      enter.append('rect').attr('x', 2).attr('rx', 4).attr('ry', 4);
      enter.append('text').style('text-anchor', 'middle').text(function (d) {
        return d.label;
      });

      var serviceArea = cluster.select('g.service-area');

      serviceArea.merge(enter).attr('transform', function (d) {
        return 'translate(0, ' + serviceAreaGeom.top(d) + ')';
      });
      serviceArea.select('rect').attr('width', function (d) {
        return serviceAreaGeom.width(d) - 4;
      }).attr('height', serviceAreaGeom.height);
      serviceArea.select('text').attr('x', function (d) {
        return serviceAreaGeom.width(d) / 2;
      }).attr('y', 20).style('text-anchor', 'middle').text(function (d) {
        return d.label;
      });

      return serviceArea;
    }
  }, {
    key: 'drawServers',
    value: function drawServers(serviceAreaGeom, unitWidthPx, serviceArea) {
      var server = serviceArea.selectAll('g.server').data(function (d) {
        return d.servers ? d.servers : [d];
      });
      server.exit().remove();
      var serverEnter = server.enter().append('g').attr('class', 'server');
      server.merge(serverEnter).attr('transform', function (d, i) {
        return 'translate(' + i * unitWidthPx + ', 0)';
      });

      return server;
    }
  }, {
    key: 'drawAttendedClients',
    value: function drawAttendedClients(clientGeom, serviceAreaGeom, server) {
      var client = server.selectAll('g.client').data(function (d) {
        return [d.client || {}];
      }, function (d) {
        return d ? d.key : null;
      });
      this.parameterizeClient(clientGeom, client, function (d, i, nodes) {
        var server = d3.select(nodes[i].parentNode).datum();
        var y = serviceAreaGeom.height(server) - clientGeom.height() - 3;
        return 'translate(5, ' + y + ')';
      });
    }
  }, {
    key: 'drawQueues',
    value: function drawQueues(serviceAreaGeom, cluster, clusterEnter) {
      var queueEnter = clusterEnter.append('g').attr('class', 'queue');
      queueEnter.append('line');

      var queue = cluster.select('g.queue');
      queue.select('line').attr('y1', 0).attr('y2', serviceAreaGeom.top).attr('x1', function (d) {
        return serviceAreaGeom.width(d) / 2;
      }).attr('x2', function (d) {
        return serviceAreaGeom.width(d) / 2;
      });
      return queue;
    }
  }, {
    key: 'drawQueueingClients',
    value: function drawQueueingClients(clientGeom, serviceAreaGeom, queue) {
      var client = queue.selectAll('g.client').data(function (d) {
        return d.queue.clients;
      }, function (d) {
        return d.key;
      });
      this.parameterizeClient(clientGeom, client, function (d, i, nodes) {
        var server = d3.select(nodes[i].parentNode).datum();
        var x = serviceAreaGeom.width(server) / 2 - clientGeom.width() / 2;
        x += d.jitter * 3;
        var y = serviceAreaGeom.top(server) - (clientGeom.height() + 4) * (i + 1);
        return 'translate(' + x + ', ' + y + ')';
      });
    }
  }, {
    key: 'clientKeyToId',
    value: function clientKeyToId(key) {
      return 'col-client-' + key;
    }
  }, {
    key: 'parameterizeClient',
    value: function parameterizeClient(clientGeom, base, transform) {
      var _this = this;

      var enter = base.enter().append('g').attr('class', 'client').attr('id', function (d) {
        return _this.clientKeyToId(d.key);
      });
      base.exit().remove();
      base.merge(enter).attr('transform', transform).attr('class', function (d) {
        return 'client ' + (d.key ? '' : 'vacant');
      });
      enter.append('rect').attr('rx', 3).attr('ry', 3);
      base.merge(enter).select('rect').attr('width', clientGeom.width).attr('height', clientGeom.height);
      enter.append('text').text(function (d) {
        return d.name;
      }).style('text-anchor', 'middle').attr('y', 12);
      enter.append('rect').attr('class', 'progress').attr('x', 1).attr('y', function (d) {
        return clientGeom.height(d) - 5;
      }).attr('rx', 2).attr('ry', 2).attr('height', 4).style('text-anchor', 'middle');
      base.merge(enter).select('text').attr('x', function (d) {
        return clientGeom.width(d) / 2;
      });
      base.merge(enter).select('rect.progress').attr('width', function (d) {
        if (!d.demands) return null;
        var initialDemands = Object.keys(d.initialDemands).map(function (key) {
          return d.initialDemands[key];
        }).reduce(function (a, b) {
          return a + b;
        }, 0);
        var demands = Object.keys(d.demands).map(function (key) {
          return d.demands[key];
        }).reduce(function (a, b) {
          return a + b;
        }, 0);
        var fraction = initialDemands ? demands / initialDemands : 0;
        return fraction * (clientGeom.width(d) - 2);
      });
    }
  }, {
    key: 'drawMobileServers',
    value: function drawMobileServers(svg, clientGeom, mobileServers) {
      var _this2 = this;

      var server = svg.select('g.mobile-servers').selectAll('g.mobile-server').data(mobileServers, function (d) {
        return d.key;
      });
      server.exit().remove();
      var serverEnter = server.enter().append('g').attr('class', 'mobile-server');
      serverEnter.append('rect').attr('rx', 4).attr('ry', 4);
      var svgBbox = svg.node().getBoundingClientRect();
      server.merge(serverEnter).attr('class', function (d) {
        return d.client ? 'mobile-server busy' : 'mobile-server idle';
      }).attr('transform', function (d) {
        if (!d.client) return null;
        var clientNode = svg.select('#' + _this2.clientKeyToId(d.client.key)).node();
        var bounds = clientNode.getBoundingClientRect();
        return 'translate(' + (bounds.left - svgBbox.left - 2) + ', ' + (bounds.top - svgBbox.top - 2) + ')';
      });
      server.select('rect').attr('width', function (d) {
        return clientGeom.width(d) + 4;
      }).attr('height', function (d) {
        return clientGeom.height(d) + 4;
      });
    }
  }]);

  return ColumnVis;
}();

exports.default = ColumnVis;

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return version; });
/* unused harmony export description */
/* unused harmony export keywords */
/* unused harmony export homepage */
/* unused harmony export license */
/* unused harmony export author */
/* unused harmony export main */
/* unused harmony export unpkg */
/* unused harmony export jsdelivr */
/* unused harmony export module */
/* unused harmony export repository */
/* unused harmony export scripts */
/* unused harmony export devDependencies */
/* unused harmony export dependencies */
var name = "d3";
var version = "4.11.0";
var description = "Data-Driven Documents";
var keywords = ["dom","visualization","svg","animation","canvas"];
var homepage = "https://d3js.org";
var license = "BSD-3-Clause";
var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
var main = "build/d3.node.js";
var unpkg = "build/d3.js";
var jsdelivr = "build/d3.js";
var module = "index";
var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
var scripts = {"pretest":"rimraf build && mkdir build && json2module package.json > build/package.js && node rollup.node","test":"tape 'test/**/*-test.js'","prepublishOnly":"npm run test && rollup -c --banner \"$(preamble)\" && uglifyjs -b beautify=false,preamble=\"'$(preamble)'\" build/d3.js -c negate_iife=false -m -o build/d3.min.js","postpublish":"git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/build/d3.js d3.v4.js && cp ../d3/build/d3.min.js d3.v4.min.js && git add d3.v4.js d3.v4.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/build/d3.js ../d3/build/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m \"${npm_package_version}\" && git tag -am \"${npm_package_version}\" v${npm_package_version} && git push && git push --tags && cd - && zip -j build/d3.zip -- LICENSE README.md API.md CHANGES.md build/d3.js build/d3.min.js"};
var devDependencies = {"json2module":"0.0","package-preamble":"0.1","rimraf":"2","rollup":"0.50","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"3","tape":"4","uglify-js":"3"};
var dependencies = {"d3-array":"1.2.1","d3-axis":"1.0.8","d3-brush":"1.0.4","d3-chord":"1.0.4","d3-collection":"1.0.4","d3-color":"1.0.3","d3-dispatch":"1.0.3","d3-drag":"1.2.1","d3-dsv":"1.0.7","d3-ease":"1.0.3","d3-force":"1.1.0","d3-format":"1.2.0","d3-geo":"1.8.1","d3-hierarchy":"1.1.5","d3-interpolate":"1.1.5","d3-path":"1.0.5","d3-polygon":"1.0.3","d3-quadtree":"1.0.3","d3-queue":"3.0.7","d3-random":"1.1.0","d3-request":"1.0.6","d3-scale":"1.0.6","d3-selection":"1.1.0","d3-shape":"1.2.0","d3-time":"1.0.7","d3-time-format":"2.0.5","d3-timer":"1.0.7","d3-transition":"1.1.0","d3-voronoi":"1.1.2","d3-zoom":"1.6.0"};


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(106);


/* harmony default export */ __webpack_exports__["a"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["b" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(113);









/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["c" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(57);





/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(107);


/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(57);




/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(21);


/* harmony default export */ __webpack_exports__["a"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(115);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_axis__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["b"]; });



/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = axisTop;
/* harmony export (immutable) */ __webpack_exports__["c"] = axisRight;
/* harmony export (immutable) */ __webpack_exports__["a"] = axisBottom;
/* harmony export (immutable) */ __webpack_exports__["b"] = axisLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(248);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_brush__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["a"]; });



/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = brushSelection;
/* harmony export (immutable) */ __webpack_exports__["b"] = brushX;
/* harmony export (immutable) */ __webpack_exports__["c"] = brushY;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noevent__ = __webpack_require__(334);









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

var X = {
  name: "x",
  handles: ["e", "w"].map(type),
  input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
  input: function(xy) { return xy; },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ __webpack_exports__["d"] = (function() {
  return brush(XY);
});

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])(brush, "start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["i" /* select */])(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        .on("mousedown.brush touchstart.brush", started);
  }

  brush.move = function(group, selection) {
    if (group.selection) {
      group
          .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
          .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["a" /* interpolate */])(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && empty(selection1) ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 && selection1 ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["b" /* interrupt */])(that);
            state.selection = selection1 == null || empty(selection1) ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
          });
    }
  };

  function redraw() {
    var group = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["i" /* select */])(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args) {
    return that.__brush.emitter || new Emitter(that, args);
  }

  function Emitter(that, args) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function() {
      if (this.starting) this.starting = false, this.emit("start");
      return this;
    },
    brush: function() {
      this.emit("brush");
      return this;
    },
    end: function() {
      if (--this.active === 0) delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function(type) {
      Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* customEvent */])(new __WEBPACK_IMPORTED_MODULE_6__event__["a" /* default */](brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function started() {
    if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].touches) { if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].changedTouches.length < __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].touches.length) return Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["a" /* default */])(); }
    else if (touchending) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].target.__data__.type,
        mode = (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx,
        dy,
        moving,
        shifting = signX && signY && __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].shiftKey,
        lockX,
        lockY,
        point0 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["f" /* mouse */])(that),
        point = point0,
        emit = emitter(that, arguments).beforestart();

    if (type === "overlay") {
      state.selection = selection = [
        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
        [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
      ];
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["i" /* select */])(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].touches) {
      group
          .on("touchmove.brush", moved, true)
          .on("touchend.brush touchcancel.brush", ended, true);
    } else {
      var view = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["i" /* select */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].view)
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);

      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["b" /* dragDisable */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].view);
    }

    Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["b" /* nopropagation */])();
    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["b" /* interrupt */])(that);
    redraw.call(that);
    emit.start();

    function moved() {
      var point1 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["f" /* mouse */])(that);
      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
        else lockX = true;
      }
      point = point1;
      moving = true;
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["a" /* default */])();
      move();
    }

    function move() {
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
          else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
          if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
          else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
          if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }

    function ended() {
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["b" /* nopropagation */])();
      if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].touches) {
        if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
        group.on("touchmove.brush touchend.brush touchcancel.brush", null);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["c" /* dragEnable */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end();
    }

    function keydowned() {
      switch (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default: return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["a" /* default */])();
    }

    function keyupped() {
      switch (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */].altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move();
          }
          break;
        }
        default: return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["a" /* default */])();
    }
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = extent.apply(this, arguments);
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(!!_), brush) : filter;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodrag__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noevent__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(287);







// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].x, y: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].y} : d;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), __WEBPACK_IMPORTED_MODULE_1_d3_selection__["f" /* mouse */], this, arguments);
    if (!gesture) return;
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["i" /* select */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].view);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
    mousemoving = false;
    mousedownx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].clientX;
    mousedowny = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].clientY;
    gesture("start");
  }

  function mousemoved() {
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
    if (!mousemoving) {
      var dx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].clientX - mousedownx, dy = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["i" /* select */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].view).on("mousemove.drag mouseup.drag", null);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag__["b" /* yesdrag */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].view, mousemoving);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, __WEBPACK_IMPORTED_MODULE_1_d3_selection__["o" /* touch */], this, arguments)) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["b" /* customEvent */])(new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* default */](drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* event */].subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["b" /* customEvent */])(new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* default */](drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(64);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(65);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(117);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
});


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(116);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(260);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
});


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(60);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(59);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(65);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(66);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(64);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(64);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DragEvent;
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(123);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(123);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(292);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(293);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["a"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hslLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(26);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(26);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hclLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(26);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(26);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["b"] = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(304);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* selection */].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* selection */].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */];


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt__ = __webpack_require__(131);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return this.each(function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__interrupt__["a" /* default */])(this, name);
  });
});


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(72);


/* harmony default export */ __webpack_exports__["a"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(72);


/* harmony default export */ __webpack_exports__["a"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["b" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(40);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["o" /* easeCubicInOut */]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["b" /* now */])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var id,
      timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]) {
    id = name._id, name = name._name;
  } else {
    id = Object(__WEBPACK_IMPORTED_MODULE_0__transition_index__["c" /* newId */])(), (timing = defaultTiming).time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["b" /* now */])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(__WEBPACK_IMPORTED_MODULE_1__transition_schedule__["e" /* default */])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */](groups, this._parents, name, id);
});


/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(132);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["g" /* namespace */])(name), i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["u" /* interpolateTransformSvg */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["g" /* namespace */])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(7);


function delayFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).delay;
});


/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(7);


function durationFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).duration;
});


/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(7);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).ease;
});


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* matcher */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, this._name, this._id);
});


/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](merges, this._parents, this._name, this._id);
});


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(7);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */] : __WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["l" /* selector */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(subgroup[i], name, id, i, subgroup, Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, name, id);
});


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["m" /* selectorAll */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, parents, name, id);
});


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* selection */].prototype.constructor;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(132);





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["n" /* style */])(this, name),
        value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["n" /* style */])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["n" /* style */])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["n" /* style */])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["n" /* style */])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["t" /* interpolateTransformCss */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(41);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(__WEBPACK_IMPORTED_MODULE_0__tween__["b" /* tweenValue */])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* newId */])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["f" /* get */])(node, id0);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["e" /* default */])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](groups, this._parents, name, id1);
});


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(7);



var root = [null];

/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule__["c" /* SCHEDULED */] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(target, type, selection) {
  this.target = target;
  this.type = type;
  this.selection = selection;
});


/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["c" /* event */].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["c" /* event */].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["c" /* event */].stopImmediatePropagation();
});


/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_chord__ = __webpack_require__(336);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_chord__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ribbon__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ribbon__["a"]; });




/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(134);



function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["s" /* range */])(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["s" /* range */])(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* max */])(0, __WEBPACK_IMPORTED_MODULE_1__math__["e" /* tau */] - padAngle * n) / k;
    dx = k ? padAngle : __WEBPACK_IMPORTED_MODULE_1__math__["e" /* tau */] / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* max */])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
});


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_path__ = __webpack_require__(15);





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        sa1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        sx0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* cos */])(sa0),
        sy0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        ta1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */];

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_3_d3_path__["a" /* path */])();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* cos */])(ta0), tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
  };

  return ribbon;
});


/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(73);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["a"] = (set);


/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return csvFormatRows; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(75);


var csv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tsvFormatRows; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(75);


var tsv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_center__ = __webpack_require__(349);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_center__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_collide__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_collide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_link__ = __webpack_require__(364);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_manyBody__ = __webpack_require__(365);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_manyBody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_radial__ = __webpack_require__(366);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_radial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_simulation__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__src_simulation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_x__ = __webpack_require__(367);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__src_x__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_y__ = __webpack_require__(368);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__src_y__["a"]; });










/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_quadtree__ = __webpack_require__(77);




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = Object(__WEBPACK_IMPORTED_MODULE_2_d3_quadtree__["a" /* quadtree */])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += x * x;
            if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["a" /* default */])(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), initialize(), force) : radius;
  };

  return force;
});


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadtree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cover__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remove__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__size__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visit__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visitAfter__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__x__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__y__ = __webpack_require__(363);













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? __WEBPACK_IMPORTED_MODULE_10__x__["b" /* defaultX */] : x, y == null ? __WEBPACK_IMPORTED_MODULE_11__y__["b" /* defaultY */] : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = __WEBPACK_IMPORTED_MODULE_0__add__["b" /* default */];
treeProto.addAll = __WEBPACK_IMPORTED_MODULE_0__add__["a" /* addAll */];
treeProto.cover = __WEBPACK_IMPORTED_MODULE_1__cover__["a" /* default */];
treeProto.data = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* default */];
treeProto.extent = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */];
treeProto.find = __WEBPACK_IMPORTED_MODULE_4__find__["a" /* default */];
treeProto.remove = __WEBPACK_IMPORTED_MODULE_5__remove__["a" /* default */];
treeProto.removeAll = __WEBPACK_IMPORTED_MODULE_5__remove__["b" /* removeAll */];
treeProto.root = __WEBPACK_IMPORTED_MODULE_6__root__["a" /* default */];
treeProto.size = __WEBPACK_IMPORTED_MODULE_7__size__["a" /* default */];
treeProto.visit = __WEBPACK_IMPORTED_MODULE_8__visit__["a" /* default */];
treeProto.visitAfter = __WEBPACK_IMPORTED_MODULE_9__visitAfter__["a" /* default */];
treeProto.x = __WEBPACK_IMPORTED_MODULE_10__x__["a" /* default */];
treeProto.y = __WEBPACK_IMPORTED_MODULE_11__y__["a" /* default */];


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addAll;
/* harmony default export */ __webpack_exports__["b"] = (function(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
});

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, inherit the existing extent.
  if (x1 < x0) x0 = this._x0, x1 = this._x1;
  if (y1 < y0) y0 = this._y0, y1 = this._y1;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}


/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else if (x0 > x || x > x1 || y0 > y || y > y1) {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
      case 0: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
        break;
      }
      case 1: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
        break;
      }
      case 2: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
        break;
      }
      case 3: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
        break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  // If the quadtree covers the point already, just return.
  else return this;

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
});


/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
});


/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
});


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(78);


/* harmony default export */ __webpack_exports__["a"] = (function(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[3], xm, ym, x2, y2),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[2], x1, ym, xm, y2),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[1], xm, y1, x2, ym),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["a" /* default */](node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
});


/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = removeAll;
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {