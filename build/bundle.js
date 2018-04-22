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

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Component = function Component(name) {\n  _classCallCheck(this, Component);\n\n  this.name = name;\n};\n\nexports.default = Component;\n\n//# sourceURL=webpack:///./src/components/component.js?");

/***/ }),

/***/ "./src/components/position.js":
/*!************************************!*\
  !*** ./src/components/position.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _component = __webpack_require__(/*! ./component.js */ \"./src/components/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Position = function (_Component) {\n  _inherits(Position, _Component);\n\n  function Position(pos) {\n    _classCallCheck(this, Position);\n\n    var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, \"position\"));\n\n    _this.x = pos.x;\n    _this.y = pos.y;\n    _this.width = pos.width, _this.height = pos.height, _this.scale = pos.scale;\n    return _this;\n  }\n\n  return Position;\n}(_component2.default);\n\nexports.default = Position;\n;\n\n//# sourceURL=webpack:///./src/components/position.js?");

/***/ }),

/***/ "./src/components/sprite.js":
/*!**********************************!*\
  !*** ./src/components/sprite.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _component = __webpack_require__(/*! ./component.js */ \"./src/components/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Sprite = function (_Component) {\n  _inherits(Sprite, _Component);\n\n  function Sprite(size, imageId, rowId, layer) {\n    _classCallCheck(this, Sprite);\n\n    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, \"sprite\"));\n\n    _this.x = size.x, _this.y = size.y, _this.width = size.width;\n    _this.height = size.height;\n    _this.imageId = imageId;\n    _this.rowId = rowId;\n    _this.layer = layer;\n    return _this;\n  }\n\n  return Sprite;\n}(_component2.default);\n\nexports.default = Sprite;\n;\n\n//# sourceURL=webpack:///./src/components/sprite.js?");

/***/ }),

/***/ "./src/engine/ajax.js":
/*!****************************!*\
  !*** ./src/engine/ajax.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ajax = function () {\n  function Ajax() {\n    _classCallCheck(this, Ajax);\n\n    this.xhr = new XMLHttpRequest();\n  }\n\n  _createClass(Ajax, [{\n    key: \"send\",\n    value: function send(request) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.xhr.open(\"GET\", request, true);\n        _this.xhr.send();\n        _this.xhr.onreadystatechange = function () {\n\n          if (_this.xhr.readyState != 4) return;\n\n          if (_this.xhr.status != 200) {\n            reject(_this.xhr.statusText);\n          } else {\n            resolve(JSON.parse(_this.xhr.responseText));\n          };\n        };\n      });\n    }\n  }]);\n\n  return Ajax;\n}();\n\nexports.default = new Ajax();\n\n//# sourceURL=webpack:///./src/engine/ajax.js?");

/***/ }),

/***/ "./src/engine/data.js":
/*!****************************!*\
  !*** ./src/engine/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _resourses = __webpack_require__(/*! ./resourses.js */ \"./src/engine/resourses.js\");\n\nvar _resourses2 = _interopRequireDefault(_resourses);\n\nvar _entities = __webpack_require__(/*! ./entities.js */ \"./src/engine/entities.js\");\n\nvar _entities2 = _interopRequireDefault(_entities);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Data = function () {\n  function Data() {\n    _classCallCheck(this, Data);\n\n    this.resourses = new _resourses2.default();\n    this.entities = new _entities2.default();\n  }\n\n  _createClass(Data, [{\n    key: 'init',\n    value: function init() {\n      this.resourses.load();\n    }\n  }]);\n\n  return Data;\n}();\n\nexports.default = new Data();\n\n//# sourceURL=webpack:///./src/engine/data.js?");

/***/ }),

/***/ "./src/engine/entities.js":
/*!********************************!*\
  !*** ./src/engine/entities.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _entity = __webpack_require__(/*! ./entity.js */ \"./src/engine/entity.js\");\n\nvar _entity2 = _interopRequireDefault(_entity);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Entities() {\n  var _entities = [];\n\n  this.createEntity = function () {\n    var entity = new _entity2.default();\n    _entities.push(entity);\n    return entity;\n  };\n\n  this.find = function (requirements) {\n    return _entities.filter(function (entity) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = requirements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var requirement = _step.value;\n\n          if (!entity.checkComponent(requirement)) return false;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      ;\n      return true;\n    });\n  };\n};\n\nexports.default = Entities;\n\n//# sourceURL=webpack:///./src/engine/entities.js?");

/***/ }),

/***/ "./src/engine/entity.js":
/*!******************************!*\
  !*** ./src/engine/entity.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Entity = function () {\n  function Entity() {\n    _classCallCheck(this, Entity);\n\n    this.components = [];\n  }\n\n  _createClass(Entity, [{\n    key: \"addComponent\",\n    value: function addComponent(component) {\n      this.components.push(component);\n    }\n  }, {\n    key: \"checkComponent\",\n    value: function checkComponent(name) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var component = _step.value;\n\n          if (component.name === name) return true;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"getComponent\",\n    value: function getComponent(name) {\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = this.components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var component = _step2.value;\n\n          if (component.name === name) return component;\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n    }\n  }]);\n\n  return Entity;\n}();\n\nexports.default = Entity;\n\n//# sourceURL=webpack:///./src/engine/entity.js?");

/***/ }),

/***/ "./src/engine/game.js":
/*!****************************!*\
  !*** ./src/engine/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _data = __webpack_require__(/*! ./data.js */ \"./src/engine/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _view = __webpack_require__(/*! ./view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _scenes = __webpack_require__(/*! ./scenes.js */ \"./src/engine/scenes.js\");\n\nvar _scenes2 = _interopRequireDefault(_scenes);\n\nvar _systems = __webpack_require__(/*! ./systems.js */ \"./src/engine/systems.js\");\n\nvar _systems2 = _interopRequireDefault(_systems);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nconsole.log(_view2.default);\n\nvar Game = function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.element = document.getElementById(\"canvas\");\n    this.isWorking = false;\n    this.fpsCounter = 0;\n    this.lastFpsCounterUpdate = new Date().getTime();\n    this.fps = 30;\n    this.lastFrame = new Date().getTime();\n    this.scenes = new _scenes2.default();\n    this.systems = new _systems2.default();\n    this.mobile = false;\n    this.size = {\n      width: 672,\n      height: 672\n    };\n  }\n\n  _createClass(Game, [{\n    key: 'init',\n    value: function init() {\n      var _this = this;\n\n      _view2.default.setElem(this.element.getContext('2d'));\n      this.resize();\n      window.addEventListener(\"resize\", function () {\n        _this.resize();\n      });\n      _data2.default.init();\n      this.scenes.changeScene('gameplay');\n    }\n  }, {\n    key: 'start',\n    value: function start() {\n      this.isWorking = true;\n      window.requestAnimationFrame(this.gameloop.bind(this));\n    }\n  }, {\n    key: 'stop',\n    value: function stop() {\n      this.isWorking = false;\n    }\n  }, {\n    key: 'gameloop',\n    value: function gameloop() {\n      //toogle\n      if (!this.isWorking) return;\n      //fps limiter\n      var time = new Date().getTime();\n      if (time - this.lastFrame < 1000 / this.fps) {\n        setTimeout(function () {\n          window.requestAnimationFrame(this.gameloop.bind(this));\n        }.bind(this), 0);\n        return;\n      };\n      //loading\n      if (!_data2.default.resourses.loaded) {\n        window.requestAnimationFrame(this.gameloop.bind(this));\n        return;\n      }\n      //gameloop body\n      this.systems.handleStack();\n      _view2.default.render();\n\n      //fps counter\n      this.fpsCounter++;\n      if (time - this.lastFpsCounterUpdate > 1000) {\n        document.getElementById(\"fps\").innerText = \"Fps: \" + this.fpsCounter;\n        this.fpsCounter = 0;\n        this.lastFpsCounterUpdate = time;\n      };\n      //next frame\n      this.lastFrame = time;\n      window.requestAnimationFrame(this.gameloop.bind(this));\n    }\n  }, {\n    key: 'resize',\n    value: function resize() {\n      if (window.innerWidth < 672) {\n        this.size.width = 336;\n        this.size.height = 336;\n        this.mobile = true;\n      } else {\n        this.size.width = 672;\n        this.size.height = 672;\n        this.mobile = false;\n      };\n      _view2.default.setViewport(this.size);\n      this.canvasResize();\n    }\n  }, {\n    key: 'canvasResize',\n    value: function canvasResize() {\n      this.element.width = this.size.width;\n      this.element.height = this.size.height;\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.default = new Game();\n\n//# sourceURL=webpack:///./src/engine/game.js?");

/***/ }),

/***/ "./src/engine/manager.js":
/*!*******************************!*\
  !*** ./src/engine/manager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Manager = function Manager() {\n  _classCallCheck(this, Manager);\n};\n\nexports.default = Manager;\n\n//# sourceURL=webpack:///./src/engine/manager.js?");

/***/ }),

/***/ "./src/engine/requests.js":
/*!********************************!*\
  !*** ./src/engine/requests.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  GET_RESOURSES: \"resourses.json\"\n};\n\n//# sourceURL=webpack:///./src/engine/requests.js?");

/***/ }),

/***/ "./src/engine/resourses.js":
/*!*********************************!*\
  !*** ./src/engine/resourses.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ajax = __webpack_require__(/*! ./ajax.js */ \"./src/engine/ajax.js\");\n\nvar _ajax2 = _interopRequireDefault(_ajax);\n\nvar _requests = __webpack_require__(/*! ./requests.js */ \"./src/engine/requests.js\");\n\nvar _requests2 = _interopRequireDefault(_requests);\n\nvar _view = __webpack_require__(/*! ./view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Resourses = function () {\n  function Resourses() {\n    _classCallCheck(this, Resourses);\n\n    this.loading = false;\n    this.loaded = false;\n    this.images = [];\n    this.counter = 0;\n    this.count = 0;\n  }\n\n  _createClass(Resourses, [{\n    key: 'load',\n    value: function load() {\n      var _this = this;\n\n      this.loading = true;\n      _ajax2.default.send(_requests2.default.GET_RESOURSES).then(function (response) {\n        _this.count += response.images.length;\n        for (var i = 0; i < response.images.length; i++) {\n          var image = new Image();\n          image.onload = function () {\n            this.counter++;\n            this.checkLoadComplete();\n          }.bind(_this);\n          image.src = \"resourses/images/\" + response.images[i].name;\n          _this.images.push({\n            image: image,\n            rowSize: response.images[i].rowSize,\n            id: response.images[i].id\n          });\n        };\n      });\n    }\n  }, {\n    key: 'checkLoadComplete',\n    value: function checkLoadComplete() {\n      if (this.count === this.counter) {\n        this.loading = false;\n        this.loaded = true;\n        console.log(\"Image loaded\");\n\n        _view2.default.setImages(this.images);\n      }\n    }\n  }]);\n\n  return Resourses;\n}();\n\nexports.default = Resourses;\n\n//# sourceURL=webpack:///./src/engine/resourses.js?");

/***/ }),

/***/ "./src/engine/scenes.js":
/*!******************************!*\
  !*** ./src/engine/scenes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _gameplay = __webpack_require__(/*! ../scenes/gameplay.js */ \"./src/scenes/gameplay.js\");\n\nvar _gameplay2 = _interopRequireDefault(_gameplay);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scenes = function () {\n  function Scenes() {\n    _classCallCheck(this, Scenes);\n\n    this.scene = null;\n  }\n\n  _createClass(Scenes, [{\n    key: 'changeScene',\n    value: function changeScene(name) {\n      switch (name) {\n        case 'gameplay':\n          this.scene = new _gameplay2.default();\n          break;\n      };\n      this.scene.init();\n    }\n  }]);\n\n  return Scenes;\n}();\n\nexports.default = Scenes;\n\n//# sourceURL=webpack:///./src/engine/scenes.js?");

/***/ }),

/***/ "./src/engine/systems.js":
/*!*******************************!*\
  !*** ./src/engine/systems.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _manager = __webpack_require__(/*! ./manager.js */ \"./src/engine/manager.js\");\n\nvar _manager2 = _interopRequireDefault(_manager);\n\nvar _renderProvider = __webpack_require__(/*! ../systems/render-provider.js */ \"./src/systems/render-provider.js\");\n\nvar _renderProvider2 = _interopRequireDefault(_renderProvider);\n\nvar _data = __webpack_require__(/*! ./data.js */ \"./src/engine/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Systems = function (_Manager) {\n  _inherits(Systems, _Manager);\n\n  function Systems() {\n    _classCallCheck(this, Systems);\n\n    var _this = _possibleConstructorReturn(this, (Systems.__proto__ || Object.getPrototypeOf(Systems)).call(this));\n\n    _this.renderProvider = new _renderProvider2.default();\n    return _this;\n  }\n\n  _createClass(Systems, [{\n    key: 'handleStack',\n    value: function handleStack() {\n      this.handle(this.renderProvider);\n    }\n  }, {\n    key: 'handle',\n    value: function handle(system) {\n      var entities = _data2.default.entities.find(system.requirements);\n      system.setEntities(entities);\n      system.handle();\n    }\n  }]);\n\n  return Systems;\n}(_manager2.default);\n\nexports.default = Systems;\n;\n\n//# sourceURL=webpack:///./src/engine/systems.js?");

/***/ }),

/***/ "./src/engine/view.js":
/*!****************************!*\
  !*** ./src/engine/view.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction View() {\n  var _images = [];\n  var _tasks = [];\n  var _elem = null;\n  var _viewport = {\n    width: 0,\n    height: 0\n  };\n  var _clear = function _clear() {\n    _elem.fillStyle = \"black\";\n    _elem.fillRect(0, 0, _viewport.width, _viewport.height);\n  };\n  this.setElem = function (elem) {\n    _elem = elem;\n  };\n  this.render = function () {\n    _clear();\n    var forRender = _tasks.sort(function (a, b) {\n      return a.layer > b.layer ? -1 : 1;\n    });\n    forRender.forEach(function (task) {\n      _elem.drawImage(_images[task.imageId].image, task.loc.x, task.loc.y, task.loc.width, task.loc.height, task.src.x, task.src.y, task.src.width, task.src.height);\n    });\n    _tasks = [];\n  };\n  this.addTask = function (task) {\n    _tasks.push(task);\n  };\n  this.setViewport = function (size) {\n    _viewport = {\n      width: size.width,\n      height: size.height\n    };\n  };\n  this.setImages = function (images) {\n    _images = images;\n  };\n}\n\nexports.default = new View();\n\n//# sourceURL=webpack:///./src/engine/view.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./engine/game.js */ \"./src/engine/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n  window.requestAnimationFrame = requestAnimationFrame;\n})();\n\n_game2.default.init();\n_game2.default.start();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/objects/game-object.js":
/*!************************************!*\
  !*** ./src/objects/game-object.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GameObject = function GameObject(entity) {\n  _classCallCheck(this, GameObject);\n\n  this.entity = entity;\n};\n\nexports.default = GameObject;\n\n//# sourceURL=webpack:///./src/objects/game-object.js?");

/***/ }),

/***/ "./src/objects/player.js":
/*!*******************************!*\
  !*** ./src/objects/player.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _gameObject = __webpack_require__(/*! ./game-object.js */ \"./src/objects/game-object.js\");\n\nvar _gameObject2 = _interopRequireDefault(_gameObject);\n\nvar _data = __webpack_require__(/*! ../engine/data.js */ \"./src/engine/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _position = __webpack_require__(/*! ../components/position.js */ \"./src/components/position.js\");\n\nvar _position2 = _interopRequireDefault(_position);\n\nvar _sprite = __webpack_require__(/*! ../components/sprite.js */ \"./src/components/sprite.js\");\n\nvar _sprite2 = _interopRequireDefault(_sprite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Player = function (_GameObject) {\n  _inherits(Player, _GameObject);\n\n  function Player(x, y) {\n    _classCallCheck(this, Player);\n\n    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, _data2.default.entities.createEntity()));\n\n    _this.entity.addComponent(new _position2.default({ x: x, y: y, width: 32, height: 32, scale: 1 }));\n    _this.entity.addComponent(new _sprite2.default({ x: 0, y: 0, width: 32, height: 32 }, 0, 0, 0));\n    return _this;\n  }\n\n  return Player;\n}(_gameObject2.default);\n\nexports.default = Player;\n\n//# sourceURL=webpack:///./src/objects/player.js?");

/***/ }),

/***/ "./src/scenes/gameplay.js":
/*!********************************!*\
  !*** ./src/scenes/gameplay.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _scene = __webpack_require__(/*! ./scene.js */ \"./src/scenes/scene.js\");\n\nvar _scene2 = _interopRequireDefault(_scene);\n\nvar _player = __webpack_require__(/*! ../objects/player.js */ \"./src/objects/player.js\");\n\nvar _player2 = _interopRequireDefault(_player);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Gameplay = function (_Scene) {\n  _inherits(Gameplay, _Scene);\n\n  function Gameplay() {\n    _classCallCheck(this, Gameplay);\n\n    return _possibleConstructorReturn(this, (Gameplay.__proto__ || Object.getPrototypeOf(Gameplay)).call(this, \"gameplay\"));\n  }\n\n  _createClass(Gameplay, [{\n    key: 'init',\n    value: function init() {\n      this.addObject(\"player\", new _player2.default(0, 0));\n    }\n  }]);\n\n  return Gameplay;\n}(_scene2.default);\n\nexports.default = Gameplay;\n\n//# sourceURL=webpack:///./src/scenes/gameplay.js?");

/***/ }),

/***/ "./src/scenes/scene.js":
/*!*****************************!*\
  !*** ./src/scenes/scene.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = function () {\n  function Scene(name) {\n    _classCallCheck(this, Scene);\n\n    this.name = name;\n    this.objects = {};\n  }\n\n  _createClass(Scene, [{\n    key: \"addObject\",\n    value: function addObject(name, object) {\n      this.objects[name] = object;\n    }\n  }]);\n\n  return Scene;\n}();\n\nexports.default = Scene;\n\n//# sourceURL=webpack:///./src/scenes/scene.js?");

/***/ }),

/***/ "./src/systems/render-provider.js":
/*!****************************************!*\
  !*** ./src/systems/render-provider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _system = __webpack_require__(/*! ./system.js */ \"./src/systems/system.js\");\n\nvar _system2 = _interopRequireDefault(_system);\n\nvar _view = __webpack_require__(/*! ../engine/view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RenderProvider = function (_System) {\n  _inherits(RenderProvider, _System);\n\n  function RenderProvider() {\n    _classCallCheck(this, RenderProvider);\n\n    return _possibleConstructorReturn(this, (RenderProvider.__proto__ || Object.getPrototypeOf(RenderProvider)).call(this, [\"position\", \"sprite\"]));\n  }\n\n  _createClass(RenderProvider, [{\n    key: 'handle',\n    value: function handle() {\n      this.entities.forEach(function (entity) {\n        var position = entity.getComponent('position');\n        var sprite = entity.getComponent('sprite');\n\n        var task = {\n          imageId: sprite.imageId,\n          loc: {\n            x: position.x,\n            y: position.y,\n            width: position.width,\n            height: position.height\n          },\n          src: {\n            x: sprite.x,\n            y: sprite.y * sprite.rowId,\n            width: sprite.width,\n            height: sprite.height\n          }\n        };\n        _view2.default.addTask(task);\n      });\n\n      this.clear();\n    }\n  }]);\n\n  return RenderProvider;\n}(_system2.default);\n\nexports.default = RenderProvider;\n;\n\n//# sourceURL=webpack:///./src/systems/render-provider.js?");

/***/ }),

/***/ "./src/systems/system.js":
/*!*******************************!*\
  !*** ./src/systems/system.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar System = function () {\n  function System(requirements) {\n    _classCallCheck(this, System);\n\n    this.requirements = requirements;\n    this.entities = [];\n  }\n\n  _createClass(System, [{\n    key: \"setEntities\",\n    value: function setEntities(entities) {\n      this.entities = entities;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.entities = [];\n    }\n  }]);\n\n  return System;\n}();\n\nexports.default = System;\n\n//# sourceURL=webpack:///./src/systems/system.js?");

/***/ })

/******/ });