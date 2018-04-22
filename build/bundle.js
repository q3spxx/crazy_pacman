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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _component = __webpack_require__(/*! ./component.js */ \"./src/components/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Position = function (_Component) {\n  _inherits(Position, _Component);\n\n  function Position(x, y, width, height) {\n    _classCallCheck(this, Position);\n\n    var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, \"position\"));\n\n    _this.x = x;\n    _this.y = y;\n    _this.width = width;\n    _this.height = height;\n    return _this;\n  }\n\n  return Position;\n}(_component2.default);\n\nexports.default = Position;\n;\n\n//# sourceURL=webpack:///./src/components/position.js?");

/***/ }),

/***/ "./src/components/sprite.js":
/*!**********************************!*\
  !*** ./src/components/sprite.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _component = __webpack_require__(/*! ./component.js */ \"./src/components/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Sprite = function (_Component) {\n  _inherits(Sprite, _Component);\n\n  function Sprite(x, y, width, height, imageId, rowId, layer) {\n    _classCallCheck(this, Sprite);\n\n    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, \"sprite\"));\n\n    _this.x = x, _this.y = y, _this.width = width;\n    _this.height = height;\n    _this.imageId = imageId;\n    _this.rowId = rowId;\n    _this.layer = layer;\n    return _this;\n  }\n\n  return Sprite;\n}(_component2.default);\n\nexports.default = Sprite;\n;\n\n//# sourceURL=webpack:///./src/components/sprite.js?");

/***/ }),

/***/ "./src/components/text.js":
/*!********************************!*\
  !*** ./src/components/text.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _component = __webpack_require__(/*! ./component.js */ \"./src/components/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Text = function (_Component) {\n  _inherits(Text, _Component);\n\n  function Text(text, fontSize, style, color, layer) {\n    _classCallCheck(this, Text);\n\n    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, \"text\"));\n\n    _this.text = text;\n    _this.style = style;\n    _this.color = color;\n    _this.fontSize = fontSize;\n    _this.layer = layer;\n    return _this;\n  }\n\n  return Text;\n}(_component2.default);\n\nexports.default = Text;\n;\n\n//# sourceURL=webpack:///./src/components/text.js?");

/***/ }),

/***/ "./src/engine/ajax.js":
/*!****************************!*\
  !*** ./src/engine/ajax.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction Ajax() {\n  //private properties\n  var xhr = new XMLHttpRequest();\n\n  //pubclic methods\n  this.send = function (request) {\n    return new Promise(function (resolve, reject) {\n      xhr.open(\"GET\", request, true);\n      xhr.send();\n      xhr.onreadystatechange = function () {\n\n        if (xhr.readyState != 4) return;\n\n        if (xhr.status != 200) {\n          reject(xhr.statusText);\n        } else {\n          resolve(JSON.parse(xhr.responseText));\n        };\n      };\n    });\n  };\n};\n\nexports.default = new Ajax();\n\n//# sourceURL=webpack:///./src/engine/ajax.js?");

/***/ }),

/***/ "./src/engine/data.js":
/*!****************************!*\
  !*** ./src/engine/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _resourses = __webpack_require__(/*! ./resourses.js */ \"./src/engine/resourses.js\");\n\nvar _resourses2 = _interopRequireDefault(_resourses);\n\nvar _entities = __webpack_require__(/*! ./entities.js */ \"./src/engine/entities.js\");\n\nvar _entities2 = _interopRequireDefault(_entities);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Data() {\n  //private properties\n  var resourses = new _resourses2.default();\n  var entities = new _entities2.default();\n\n  //pubclic methods\n  this.getResourses = function () {\n    return resourses;\n  };\n  this.getEntities = function () {\n    return entities;\n  };\n\n  this.init = function () {\n    resourses.load();\n  };\n};\n\nexports.default = new Data();\n\n//# sourceURL=webpack:///./src/engine/data.js?");

/***/ }),

/***/ "./src/engine/entities.js":
/*!********************************!*\
  !*** ./src/engine/entities.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _entity = __webpack_require__(/*! ./entity.js */ \"./src/engine/entity.js\");\n\nvar _entity2 = _interopRequireDefault(_entity);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Entities() {\n  //private properties\n  var _entities = [];\n\n  //pubclic methods\n  this.createEntity = function () {\n    var entity = new _entity2.default();\n    _entities.push(entity);\n    return entity;\n  };\n\n  this.find = function (requirements) {\n    return _entities.filter(function (entity) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = requirements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var requirement = _step.value;\n\n          if (!entity.checkComponent(requirement)) return false;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      ;\n      return true;\n    });\n  };\n};\n\nexports.default = Entities;\n\n//# sourceURL=webpack:///./src/engine/entities.js?");

/***/ }),

/***/ "./src/engine/entity.js":
/*!******************************!*\
  !*** ./src/engine/entity.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction Entity() {\n  //private properties\n  var _components = [];\n\n  //pubclic methods\n  this.addComponent = function (component) {\n    _components.push(component);\n  };\n\n  this.checkComponent = function (name) {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = _components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var component = _step.value;\n\n        if (component.name === name) return true;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    return false;\n  };\n\n  this.getComponent = function (name) {\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = _components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var component = _step2.value;\n\n        if (component.name === name) return component;\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n          _iterator2.return();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n  };\n};\n\nexports.default = Entity;\n\n//# sourceURL=webpack:///./src/engine/entity.js?");

/***/ }),

/***/ "./src/engine/game.js":
/*!****************************!*\
  !*** ./src/engine/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _data = __webpack_require__(/*! ./data.js */ \"./src/engine/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _view = __webpack_require__(/*! ./view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _scenes = __webpack_require__(/*! ./scenes.js */ \"./src/engine/scenes.js\");\n\nvar _scenes2 = _interopRequireDefault(_scenes);\n\nvar _systems = __webpack_require__(/*! ./systems.js */ \"./src/engine/systems.js\");\n\nvar _systems2 = _interopRequireDefault(_systems);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Game() {\n  var _this = this;\n\n  //private properties\n  var _isWorking = false;\n  var _fpsCounter = 0;\n  var _lastFpsCounterUpdate = new Date().getTime();\n  var _fpsLimit = 30;\n  var _lastFrame = new Date().getTime();\n  var _scale = 1;\n  //private methods\n  var _gameloop = function _gameloop() {\n    //toogle\n    if (!_isWorking) return;\n    //fps limiter\n    var time = new Date().getTime();\n    if (time - _lastFrame < 1000 / _fpsLimit) {\n      setTimeout(function () {\n        window.requestAnimationFrame(_gameloop.bind(this));\n      }.bind(_this), 0);\n      return;\n    };\n    //loading\n    if (!_data2.default.getResourses().getLoaded()) {\n      window.requestAnimationFrame(_gameloop.bind(_this));\n      return;\n    };\n    //gameloop body\n    _systems2.default.handleStack();\n    _view2.default.render();\n    // return\n    //fps counter\n    _fpsCounter++;\n    if (time - _lastFpsCounterUpdate > 1000) {\n      document.getElementById(\"fps\").innerText = \"Fps: \" + _fpsCounter;\n      _fpsCounter = 0;\n      _lastFpsCounterUpdate = time;\n    };\n    //next frame\n    _lastFrame = time;\n    window.requestAnimationFrame(_gameloop.bind(_this));\n  };\n\n  var _resize = function _resize() {\n    window.innerWidth < 672 ? _scale = .5 : _scale = 1;\n    _view2.default.setScale(_scale);\n  };\n  //pubclic methods\n  this.init = function () {\n    _resize();\n    window.addEventListener(\"resize\", function () {\n      _resize();\n    }.bind(_this));\n    _data2.default.init();\n    _scenes2.default.changeScene('gameplay');\n  };\n  this.start = function () {\n    if (_isWorking) return false;\n    _isWorking = true;\n    window.requestAnimationFrame(_gameloop.bind(_this));\n  };\n  this.stop = function () {\n    _isWorking = false;\n  };\n}\nexports.default = new Game();\n\n//# sourceURL=webpack:///./src/engine/game.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ajax = __webpack_require__(/*! ./ajax.js */ \"./src/engine/ajax.js\");\n\nvar _ajax2 = _interopRequireDefault(_ajax);\n\nvar _requests = __webpack_require__(/*! ./requests.js */ \"./src/engine/requests.js\");\n\nvar _requests2 = _interopRequireDefault(_requests);\n\nvar _view = __webpack_require__(/*! ./view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Resourses() {\n  var _this = this;\n\n  //private properties\n  var _loading = false;\n  var _loaded = false;\n  var _images = [];\n  var _counter = 0;\n  var _count = 0;\n\n  //privat methods\n  var _checkLoadComplete = function _checkLoadComplete() {\n    if (_count === _counter) {\n      _loading = false;\n      _loaded = true;\n      console.log(\"Image loaded\");\n\n      _view2.default.setImages(_images);\n    }\n  };\n\n  //pubclic methods\n  this.getLoaded = function () {\n    return _loaded;\n  };\n  this.load = function () {\n    _loading = true;\n    _ajax2.default.send(_requests2.default.GET_RESOURSES).then(function (response) {\n      _count += response.images.length;\n      for (var i = 0; i < response.images.length; i++) {\n        var image = new Image();\n        image.onload = function () {\n          _counter++;\n          _checkLoadComplete();\n        }.bind(_this);\n        image.src = \"resourses/images/\" + response.images[i].name;\n        _images.push({\n          image: image,\n          rowSize: response.images[i].rowSize,\n          id: response.images[i].id\n        });\n      };\n    });\n  };\n};\n\nexports.default = Resourses;\n\n//# sourceURL=webpack:///./src/engine/resourses.js?");

/***/ }),

/***/ "./src/engine/scenes.js":
/*!******************************!*\
  !*** ./src/engine/scenes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _gameplay = __webpack_require__(/*! ../scenes/gameplay.js */ \"./src/scenes/gameplay.js\");\n\nvar _gameplay2 = _interopRequireDefault(_gameplay);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Scenes() {\n  //private properties\n  var _scene = null;\n\n  //pubclic methods\n  this.changeScene = function (name) {\n    switch (name) {\n      case 'gameplay':\n        _scene = new _gameplay2.default();\n        break;\n    };\n    _scene.init();\n  };\n};\n\nexports.default = new Scenes();\n\n//# sourceURL=webpack:///./src/engine/scenes.js?");

/***/ }),

/***/ "./src/engine/systems.js":
/*!*******************************!*\
  !*** ./src/engine/systems.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _spriteRenderProvider2 = __webpack_require__(/*! ../systems/sprite-render-provider.js */ \"./src/systems/sprite-render-provider.js\");\n\nvar _spriteRenderProvider3 = _interopRequireDefault(_spriteRenderProvider2);\n\nvar _textRenderProvider2 = __webpack_require__(/*! ../systems/text-render-provider.js */ \"./src/systems/text-render-provider.js\");\n\nvar _textRenderProvider3 = _interopRequireDefault(_textRenderProvider2);\n\nvar _data = __webpack_require__(/*! ./data.js */ \"./src/engine/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Systems() {\n  //private properties\n  var _spriteRenderProvider = new _spriteRenderProvider3.default();\n  var _textRenderProvider = new _textRenderProvider3.default();\n  //private methods\n  var _handle = function _handle(system) {\n    var entities = _data2.default.getEntities().find(system.requirements);\n    system.setEntities(entities);\n    system.handle();\n  };\n  //pubclic methods\n  this.handleStack = function () {\n    _handle(_spriteRenderProvider);\n    _handle(_textRenderProvider);\n  };\n};\n\nexports.default = new Systems();\n\n//# sourceURL=webpack:///./src/engine/systems.js?");

/***/ }),

/***/ "./src/engine/view.js":
/*!****************************!*\
  !*** ./src/engine/view.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction View() {\n  //privat properties\n  var _images = [];\n  var _tasks = [];\n  var _elem = document.getElementById(\"canvas\");\n  var _ctx = _elem.getContext('2d');\n  var _clearColor = \"#000\";\n  var _scale = 1;\n  var _viewport = {\n    width: 0,\n    height: 0\n  };\n  //privat methods\n  var _clear = function _clear() {\n    _ctx.fillStyle = _clearColor;\n    _ctx.fillRect(0, 0, _viewport.width, _viewport.height);\n  };\n\n  var _canvasResize = function _canvasResize() {\n    _elem.width = _viewport.width;\n    _elem.height = _viewport.height;\n  };\n\n  var _resize = function _resize() {\n    _viewport.width = 672 * _scale;\n    _viewport.height = 672 * _scale;\n    _canvasResize();\n  };\n\n  var _drawImage = function _drawImage(task) {\n    _ctx.drawImage(_images[task.imageId].image, task.loc.x, task.loc.y, task.loc.width, task.loc.height, task.src.x, task.src.y, task.src.width * _scale, task.src.height * _scale);\n  };\n\n  var _fillText = function _fillText(task) {\n    _ctx.fillStyle = task.color;\n    _ctx.font = task.font;\n    _ctx.textBaseline = \"top\";\n    _ctx.fillText(task.text, task.loc.x, task.loc.y);\n  };\n\n  //public methods\n  this.setScale = function (scale) {\n    _scale = scale;\n    _resize();\n  };\n\n  this.setClearColor = function (color) {\n    _clearColor = color;\n  };\n\n  this.render = function () {\n    _clear();\n    var forRender = _tasks.sort(function (a, b) {\n      return a.layer > b.layer ? 1 : -1;\n    });\n    forRender.forEach(function (task) {\n      switch (task.type) {\n        case \"image\":\n          _drawImage(task);\n          break;\n        case \"text\":\n          _fillText(task);\n          break;\n        default:\n          return;\n      };\n    });\n    _tasks = [];\n  };\n\n  this.addTask = function (task) {\n    _tasks.push(task);\n  };\n\n  this.setViewport = function (size) {\n    _viewport = {\n      width: size.width,\n      height: size.height\n    };\n  };\n\n  this.setImages = function (images) {\n    _images = images;\n  };\n}\n\nexports.default = new View();\n\n//# sourceURL=webpack:///./src/engine/view.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _gameObject = __webpack_require__(/*! ./game-object.js */ \"./src/objects/game-object.js\");\n\nvar _gameObject2 = _interopRequireDefault(_gameObject);\n\nvar _data = __webpack_require__(/*! ../engine/data.js */ \"./src/engine/data.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _position = __webpack_require__(/*! ../components/position.js */ \"./src/components/position.js\");\n\nvar _position2 = _interopRequireDefault(_position);\n\nvar _sprite = __webpack_require__(/*! ../components/sprite.js */ \"./src/components/sprite.js\");\n\nvar _sprite2 = _interopRequireDefault(_sprite);\n\nvar _text = __webpack_require__(/*! ../components/text.js */ \"./src/components/text.js\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Player = function (_GameObject) {\n  _inherits(Player, _GameObject);\n\n  function Player(x, y) {\n    _classCallCheck(this, Player);\n\n    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, _data2.default.getEntities().createEntity()));\n\n    _this.entity.addComponent(new _position2.default(x, y, 32, 32));\n    _this.entity.addComponent(new _sprite2.default(0, 0, 32, 32, 0, 0, 0));\n    // this.entity.addComponent(new Text(\"Hello world\", 30, \"bold\", \"#fff\", 1));\n    return _this;\n  }\n\n  return Player;\n}(_gameObject2.default);\n\nexports.default = Player;\n\n//# sourceURL=webpack:///./src/objects/player.js?");

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

/***/ "./src/systems/sprite-render-provider.js":
/*!***********************************************!*\
  !*** ./src/systems/sprite-render-provider.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _system = __webpack_require__(/*! ./system.js */ \"./src/systems/system.js\");\n\nvar _system2 = _interopRequireDefault(_system);\n\nvar _view = __webpack_require__(/*! ../engine/view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SpriteRenderProvider = function (_System) {\n  _inherits(SpriteRenderProvider, _System);\n\n  function SpriteRenderProvider() {\n    _classCallCheck(this, SpriteRenderProvider);\n\n    return _possibleConstructorReturn(this, (SpriteRenderProvider.__proto__ || Object.getPrototypeOf(SpriteRenderProvider)).call(this, [\"position\", \"sprite\"]));\n  }\n\n  _createClass(SpriteRenderProvider, [{\n    key: 'handle',\n    value: function handle() {\n      this.entities.forEach(function (entity) {\n        var position = entity.getComponent('position');\n        var sprite = entity.getComponent('sprite');\n\n        var task = {\n          type: \"image\",\n          imageId: sprite.imageId,\n          layer: sprite.layer,\n          loc: {\n            x: position.x,\n            y: position.y,\n            width: position.width,\n            height: position.height\n          },\n          src: {\n            x: sprite.x,\n            y: sprite.y * sprite.rowId,\n            width: sprite.width,\n            height: sprite.height\n          }\n        };\n        _view2.default.addTask(task);\n      });\n\n      this.clear();\n    }\n  }]);\n\n  return SpriteRenderProvider;\n}(_system2.default);\n\nexports.default = SpriteRenderProvider;\n;\n\n//# sourceURL=webpack:///./src/systems/sprite-render-provider.js?");

/***/ }),

/***/ "./src/systems/system.js":
/*!*******************************!*\
  !*** ./src/systems/system.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar System = function () {\n  function System(requirements) {\n    _classCallCheck(this, System);\n\n    this.requirements = requirements;\n    this.entities = [];\n  }\n\n  _createClass(System, [{\n    key: \"setEntities\",\n    value: function setEntities(entities) {\n      this.entities = entities;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.entities = [];\n    }\n  }]);\n\n  return System;\n}();\n\nexports.default = System;\n\n//# sourceURL=webpack:///./src/systems/system.js?");

/***/ }),

/***/ "./src/systems/text-render-provider.js":
/*!*********************************************!*\
  !*** ./src/systems/text-render-provider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _system = __webpack_require__(/*! ./system.js */ \"./src/systems/system.js\");\n\nvar _system2 = _interopRequireDefault(_system);\n\nvar _view = __webpack_require__(/*! ../engine/view.js */ \"./src/engine/view.js\");\n\nvar _view2 = _interopRequireDefault(_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TextRenderProvider = function (_System) {\n  _inherits(TextRenderProvider, _System);\n\n  function TextRenderProvider() {\n    _classCallCheck(this, TextRenderProvider);\n\n    return _possibleConstructorReturn(this, (TextRenderProvider.__proto__ || Object.getPrototypeOf(TextRenderProvider)).call(this, [\"position\", \"text\"]));\n  }\n\n  _createClass(TextRenderProvider, [{\n    key: 'handle',\n    value: function handle() {\n      this.entities.forEach(function (entity) {\n        var position = entity.getComponent('position');\n        var text = entity.getComponent('text');\n\n        var task = {\n          type: \"text\",\n          text: text.text,\n          color: text.color,\n          font: text.style + ' ' + text.fontSize + 'px sans-serif',\n          loc: {\n            x: position.x,\n            y: position.y\n          },\n          layer: text.layer\n        };\n        _view2.default.addTask(task);\n      });\n\n      this.clear();\n    }\n  }]);\n\n  return TextRenderProvider;\n}(_system2.default);\n\nexports.default = TextRenderProvider;\n;\n\n//# sourceURL=webpack:///./src/systems/text-render-provider.js?");

/***/ })

/******/ });