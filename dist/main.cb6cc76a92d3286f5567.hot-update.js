"use strict";
self["webpackHotUpdatelocalhost"]("main",{

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _this = undefined;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sliderCarousel = function sliderCarousel() {
  var main = document.querySelector('.companies-wrapper'),
      wrap = document.querySelector('.companies-hor'),
      slides = document.querySelector('.companies-hor').children,
      next = document.querySelector('#test-right'),
      prev = document.querySelector('#test-left'),
      slidesToShow = 2,
      options = {
    position: 0,
    widthSlide: Math.floor(100 / slidesToShow)
  };

  var init = function init() {
    addGloClass();
    addStyle();

    if (prev && next) {
      controlSlider();
    } else {
      addArrow();
      controlSlider();
    }
  };

  var addGloClass = function addGloClass() {
    main.classList.add('glo-slider');
    wrap.classList.add('glo-slider__wrap');

    var _iterator = _createForOfIteratorHelper(slides),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        item.classList.add('glo-slider__item');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var addStyle = function addStyle() {
    var style = document.createElement('style');
    style.id = 'sliderCarusel-style';
    style.textContent = "\n        .glo-slider{\n            overflow:hidden !important;\n\n        }\n        .glo-slider__wrap{\n            display:flex !important;\n            transition:transform 0.5s !important;\n            will-change:transform !important;\n        }\n        .glo-slider__item{\n            flex: 0 0 ".concat(options.widthSlide, "% !important; \n            margin: auto 0 !important; \n        }\n        ");
    document.head.appendChild(style);
  };

  var controlSlider = function controlSlider() {
    prev.addEventListener('click', prevSlider.bind(_this));
    next.addEventListener('click', nextSlider.bind(_this));
  };

  var prevSlider = function prevSlider() {
    --options.position;
    console.log(options.widthSlide);
  };

  var nextSlider = function nextSlider() {
    ++options.position;
  };

  var addArrow = function addArrow() {};

  init();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderCarousel);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee50683032b8894686a3")
/******/ })();
/******/ 
/******/ }
);