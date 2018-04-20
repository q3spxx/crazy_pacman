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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./modules/game.js */ \"./src/modules/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_game2.default.init();\n// game.start();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/modules/ajax.js":
/*!*****************************!*\
  !*** ./src/modules/ajax.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ajax = function () {\n  function Ajax() {\n    _classCallCheck(this, Ajax);\n\n    this.xhr = new XMLHttpRequest();\n  }\n\n  _createClass(Ajax, [{\n    key: \"send\",\n    value: function send(request) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.xhr.open(\"GET\", request, true);\n        _this.xhr.send();\n        _this.xhr.onreadystatechange = function () {\n\n          if (_this.xhr.readyState != 4) return;\n\n          if (_this.xhr.status != 200) {\n            reject(_this.xhr.statusText);\n          } else {\n            resolve(JSON.parse(_this.xhr.responseText));\n          };\n        };\n      });\n    }\n  }]);\n\n  return Ajax;\n}();\n\nexports.default = Ajax;\n\n//# sourceURL=webpack:///./src/modules/ajax.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _resourses = __webpack_require__(/*! ./resourses.js */ \"./src/modules/resourses.js\");\n\nvar _resourses2 = _interopRequireDefault(_resourses);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Data = function () {\n  function Data() {\n    _classCallCheck(this, Data);\n\n    this.resourses = new _resourses2.default();\n  }\n\n  _createClass(Data, [{\n    key: 'init',\n    value: function init() {\n      this.resourses.load();\n    }\n  }]);\n\n  return Data;\n}();\n\nexports.default = new Data();\n\n//# sourceURL=webpack:///./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _data = __webpack_require__(/*! ./data.js */ \"./src/modules/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _ajax = __webpack_require__(/*! ./ajax.js */ \"./src/modules/ajax.js\");\n\nvar _ajax2 = _interopRequireDefault(_ajax);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.interval = null;\n    this.fps = 30;\n    this.ajax = new _ajax2.default();\n    this.mobile = false;\n    this.viewport = {\n      width: 672,\n      height: 672\n    };\n  }\n\n  _createClass(Game, [{\n    key: 'init',\n    value: function init() {\n      var _this = this;\n\n      this.setViewport();\n      window.addEventListener(\"resize\", function () {\n        _this.setViewport();\n      });\n      _data2.default.init();\n    }\n  }, {\n    key: 'start',\n    value: function start() {\n      return;\n      this.interval = setInterval(function () {\n        console.log(222);\n      }, 1000 / this.fps);\n    }\n  }, {\n    key: 'stop',\n    value: function stop() {\n      clearInterval(this.interval);\n    }\n  }, {\n    key: 'setViewport',\n    value: function setViewport() {\n      if (window.innerWidth < 672) {\n        this.viewport.width = 336;\n        this.viewport.height = 336;\n        this.mobile = true;\n      } else {\n        this.viewport.width = 672;\n        this.viewport.height = 672;\n        this.mobile = false;\n      };\n      this.canvasResize();\n    }\n  }, {\n    key: 'canvasResize',\n    value: function canvasResize() {\n      var canvas = document.getElementById(\"canvas\");\n      canvas.width = this.viewport.width;\n      canvas.height = this.viewport.height;\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.default = new Game();\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/requests.js":
/*!*********************************!*\
  !*** ./src/modules/requests.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  GET_RESOURSES: \"resourses.json\"\n};\n\n//# sourceURL=webpack:///./src/modules/requests.js?");

/***/ }),

/***/ "./src/modules/resourses.js":
/*!**********************************!*\
  !*** ./src/modules/resourses.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _game = __webpack_require__(/*! ./game.js */ \"./src/modules/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nvar _requests = __webpack_require__(/*! ./requests.js */ \"./src/modules/requests.js\");\n\nvar _requests2 = _interopRequireDefault(_requests);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Resourses = function () {\n  function Resourses() {\n    _classCallCheck(this, Resourses);\n\n    this.loading = false;\n    this.images = [];\n  }\n\n  _createClass(Resourses, [{\n    key: 'load',\n    value: function load() {\n      var _this = this;\n\n      this.loading = true;\n      _game2.default.ajax.send(_requests2.default.GET_RESOURSES).then(function (response) {\n        for (var i = 0; i < response.images.length; i++) {\n          var image = new Image();\n          image.src = \"resourses/images/\" + response.images[i].name;\n          image.onload = function () {\n            console.log(\"Image loaded\");\n          };\n          _this.images.push(image);\n        };\n        console.log(response);\n      });\n    }\n  }]);\n\n  return Resourses;\n}();\n\nexports.default = Resourses;\n\n//# sourceURL=webpack:///./src/modules/resourses.js?");

/***/ })

/******/ });