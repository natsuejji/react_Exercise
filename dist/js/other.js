/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"other": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/other.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/image/cake.jpg":
/*!****************************!*\
  !*** ./src/image/cake.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"image/cake.jpg\";\n\n//# sourceURL=webpack:///./src/image/cake.jpg?");

/***/ }),

/***/ "./src/other.js":
/*!**********************!*\
  !*** ./src/other.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n\nvar _nav = __webpack_require__(/*! ./js/nav.js */ \"./src/js/nav.js\");\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _side = __webpack_require__(/*! ./js/side.js */ \"./src/js/side.js\");\n\nvar _side2 = _interopRequireDefault(_side);\n\nvar _footer = __webpack_require__(/*! ./js/footer.js */ \"./src/js/footer.js\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _jumbotron = __webpack_require__(/*! ./js/jumbotron.js */ \"./src/js/jumbotron.js\");\n\nvar _jumbotron2 = _interopRequireDefault(_jumbotron);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n\n__webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nvar _cake = __webpack_require__(/*! ./image/cake.jpg */ \"./src/image/cake.jpg\");\n\nvar _cake2 = _interopRequireDefault(_cake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      var list = {\n        'text-align': 'left'\n      };\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'home work1 - other'\n          )\n        ),\n        _react2.default.createElement(_nav2.default, null),\n        _react2.default.createElement(\n          _reactstrap.Container,\n          { fluid: true, className: 'p-0 m-0' },\n          _react2.default.createElement(_jumbotron2.default, null),\n          _react2.default.createElement(\n            _reactstrap.Row,\n            null,\n            _react2.default.createElement(\n              _reactstrap.Col,\n              { xl: '2', md: '4', xs: '12' },\n              _react2.default.createElement(_side2.default, { cur: 'index' })\n            ),\n            _react2.default.createElement(\n              _reactstrap.Col,\n              { xl: '10', md: '6', xs: '12' },\n              _react2.default.createElement(\n                'div',\n                { className: \"mainContent\" },\n                _react2.default.createElement(\n                  'h3',\n                  null,\n                  '因為不知道要放什麼了只好貼上海綿蛋糕的作法'\n                ),\n                _react2.default.createElement(\n                  'ol',\n                  { style: list },\n                  _react2.default.createElement(\n                    'li',\n                    null,\n                    '\\u4F4E\\u7C89\\u904E\\u7BE9\\uFF0C\\u5976\\u6CB9\\u9694\\u6C34\\u52A0\\u71B1\\u878D\\u5316\\uFF0C\\u5099\\u7528\\u3002 \\u70E4\\u7BB1\\u9810\\u71B1170\\u5EA6\\u3002'\n                  ),\n                  _react2.default.createElement(\n                    'li',\n                    null,\n                    '\\u96DE\\u86CB\\u52A0\\u7D30\\u7802\\u7CD6\\u548C\\u9E7D\\uFF0C\\u7528\\u96FB\\u52D5\\u6253\\u86CB\\u5668\\u6253\\u5230\\u6FD5\\u6027\\u767C\\u6CE1\\uFF0C\\u5206\\u6B21\\u52A0\\u5165\\u9EB5\\u7C89\\u548C\\u9999\\u8349\\u7CBE\\u62CC\\u52FB\\uFF08\\u6C92\\u6709\\u7C89\\u7C92\\u5373\\u53EF\\uFF09\\u3002'\n                  ),\n                  _react2.default.createElement(\n                    'li',\n                    null,\n                    '\\u6316\\u4E00\\u4E9B\\u9EB5\\u7CCA\\u5230\\u878D\\u5316\\u7684\\u5976\\u6CB9\\u62CC\\u52FB\\uFF0C\\u518D\\u5012\\u5165\\u9EB5\\u7CCA\\u88E1\\u62CC\\u52FB\\uFF08\\u8981\\u8F15\\u5FEB\\uFF09\\u3002'\n                  ),\n                  _react2.default.createElement(\n                    'li',\n                    null,\n                    '\\u653E\\u51656\\u540B\\u70E4\\u6A21\\uFF08\\u6211\\u662F\\u7528\\u5FC3\\u578B\\u7684\\uFF09170\\u5EA6\\u70E425\\uFF5E30\\u5206\\u9418\\uFF08\\u8996\\u500B\\u4EBA\\u70E4\\u7BB1\\u8ABF\\u6574\\uFF09\\u3002'\n                  ),\n                  _react2.default.createElement(\n                    'li',\n                    null,\n                    '\\u70E4\\u597D\\u5012\\u6263\\u6DBC\\u4E86\\u5C31\\u53EF\\u812B\\u6A21\\uFF0C\\u6492\\u4E0A\\u7CD6\\u7C89\\u5C31\\u5F88\\u7F8E\\u5473\\u56C9\\uFF01'\n                  )\n                ),\n                _react2.default.createElement('img', { src: _cake2.default })\n              )\n            )\n          ),\n          _react2.default.createElement(_footer2.default, null)\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/other.js?");

/***/ })

/******/ });