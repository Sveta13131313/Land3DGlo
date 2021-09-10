"use strict";
self["webpackHotUpdatelocalhost"]("main",{

/***/ "./src/modules/sendFormAll.js":
/*!************************************!*\
  !*** ./src/modules/sendFormAll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sendFormAll = function sendFormAll() {
  var sendForm = function sendForm(id) {
    var errorMassage = 'Что-то пошло не так...';
    var loadMassage = 'Загрузка...';
    var successMassage = 'Спасибо! Мы скоро с вами свяжемся!';
    var form = document.getElementById(id);
    var statusMessage = document.createElement('div');
    var preloader = document.createElement('img');
    preloader.src = "./images/three-dots.svg";
    statusMessage.append(preloader);
    statusMessage.style.cssText = 'font-size: 2rem; color: white;';
    form.addEventListener('submit', function (e) {
      if (form.classList.contains('validation-error')) {
        return;
      }

      e.preventDefault();
      form.append(preloader, statusMessage);
      statusMessage.textContent = loadMassage;
      var formData = new FormData(form);
      var body = {};

      var _iterator = _createForOfIteratorHelper(formData.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var val = _step.value;
          body[val[0]] = val[1];
        } // Fetch=====================================================================

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var postData = function postData(body) {
        return fetch('./server.php', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      };

      var showMessage = function showMessage(msg) {
        preloader.remove();
        statusMessage.textContent = msg;
        setTimeout(function () {
          form.reset();
          statusMessage.remove();

          if (form.id === 'form3') {
            form.parentElement.parentElement.parentElement.style.display = 'none';
          }
        }, 2000);
      };

      postData(body).then(function (response) {
        if (response.status !== 200) {
          throw new Error('Status network not 200');
        }

        showMessage(successMassage);
      })["catch"](function (error) {
        console.error(error);
        showMessage(errorMassage);
      });
    });
  };

  sendForm('form1');
  sendForm('form2');
  sendForm('form3');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendFormAll);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3b4c638bc41fce7019e")
/******/ })();
/******/ 
/******/ }
);