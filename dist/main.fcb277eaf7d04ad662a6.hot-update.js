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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sliderCarousel = function sliderCarousel() {
  var main = document.querySelector('.companies-wrapper'),
      wrap = document.querySelector('.companies-hor'),
      slides = document.querySelector('.companies-hor').children;
  var slidesToShow = 4,
      options = {
    position: 0,
    infinity: true,
    widthSlide: Math.floor(100 / slidesToShow)
  },
      responsive = [{
    breakpoint: 1024,
    slidesToShow: 3
  }, {
    breakpoint: 768,
    slidesToShow: 2
  }, {
    breakpoint: 576,
    slidesToShow: 1
  }];
  var prev, next;

  var init = function init() {
    responseInit();
    addGloClass();
    addStyle();
    addArrow();
    controlSlider();
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
    var style = document.getElementById('sliderCarusel-style');

    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarusel-style';
    }

    style.textContent = "\n        .glo-slider{\n            overflow:hidden !important;\n\n        }\n        .glo-slider__wrap{\n            display:flex !important;\n            transition:transform 0.5s !important;\n            will-change:transform !important;\n        }\n        .glo-slider__item{\n            display:flex !important;\n            align-items:center;\n            justify-content:center;\n            flex: 0 0 ".concat(options.widthSlide, "% !important; \n            margin: auto 0 !important; \n        }\n        ");
    document.head.appendChild(style);
  };

  var controlSlider = function controlSlider() {
    prev.addEventListener('click', prevSlider.bind(_this));
    next.addEventListener('click', nextSlider.bind(_this));
  };

  var prevSlider = function prevSlider() {
    if (options.infinity || options.position > 0) {
      --options.position;

      if (options.position < 0) {
        options.position = slides.length - slidesToShow;
      }

      wrap.style.transform = "translateX(-".concat(options.position * options.widthSlide, "%)");
    }
  };

  var nextSlider = function nextSlider() {
    if (options.infinity || options.position < slides.length - slidesToShow) {
      ++options.position;

      if (options.position > slides.length - slidesToShow) {
        options.position = 0;
      }

      wrap.style.transform = "translateX(-".concat(options.position * options.widthSlide, "%)");
    }
  };

  var addArrow = function addArrow() {
    prev = document.createElement('button');
    next = document.createElement('button');
    prev.className = 'glo-slider__prev';
    next.className = 'glo-slider__next';
    main.appendChild(prev);
    main.appendChild(next);
    var style = document.createElement('style');
    style.textContent = "\n        .glo-slider__prev,\n        .glo-slider__next{\n            margin: 0 10px;\n            border:20px solid transparent;\n            background: transparent;\n        }\n\n        .glo-slider__next{\n            border-left-color:#19b5fe\n        }\n\n        .glo-slider__prev{\n            border-right-color:#19b5fe\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus{\n            background: transparent;\n            outline:transparent;\n        } \n        ";
    document.head.appendChild(style);
  };

  var responseInit = function responseInit() {
    var slidesToShowDefault = slidesToShow;
    var allRespone = responsive.map(function (item) {
      return item.breakpoint;
    });
    var maxResponse = Math.max.apply(Math, _toConsumableArray(allRespone));

    var checkResponse = function checkResponse() {
      var widthWindow = document.documentElement.clientWidth;

      if (widthWindow < maxResponse) {
        for (var i = 0; i < allRespone.length; i++) {
          if (widthWindow < allRespone[i]) {
            slidesToShow = responsive[i].slidesToShow;
            options.widthSlide = Math.floor(100 / slidesToShow);
            addStyle();
          } else {
            slidesToShow = slidesToShowDefault;
            options.widthSlide = Math.floor(100 / slidesToShow);
            addStyle();
          }
        }
      }
    };

    checkResponse();
    window.addEventListener('resize', checkResponse());
  };

  init();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderCarousel);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ba6fe56fa27d813987f")
/******/ })();
/******/ 
/******/ }
);