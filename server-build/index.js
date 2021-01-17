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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/App.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/App.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\n  --main-radius: 5px;\\n  --main-padding: 5px;\\n  --main-color: #d6d6d6;\\n}\\n\\n.container {\\n  display: grid;\\n  height: 100vh;\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--main-color);\\n  grid-template-columns: 0.5fr 1fr 2fr;\\n  grid-template-rows: 0.1fr 5fr 0.2fr;\\n  grid-template-areas:\\n    \\\"nav nav nav\\\"\\n    \\\"sidebar main main\\\"\\n    \\\"footer footer footer\\\";\\n  grid-gap: 0.3rem;\\n  font-family: sans-serif;\\n  font-weight: 800;\\n  font-size: 12px;\\n  color: #000000;\\n}\\n\\n.nav {\\n  background-color: var(--main-color);\\n  grid-area: nav;\\n  border-radius: var(--main-radius);\\n  padding-bottom: var(--main-padding);\\n  padding: var(--main-padding);\\n}\\n\\n.footer {\\n  background-color: var(--main-color);\\n  grid-area: footer;\\n  border-radius: var(--main-radius);\\n  padding-top: var(--main-padding);\\n  text-align: center;\\n}\\n\\n@media only screen and (max-width:700px) {\\n  .container {\\n    grid-template-columns: 5fr;\\n    grid-template-rows: 0.2fr 5fr 5fr 0.2fr;\\n    grid-template-areas: \\n    \\\"nav\\\"\\n    \\\"sidebar\\\"\\n    \\\"main\\\"\\n    \\\"footer\\\"\\n    ;\\n  }\\n}\\n\\n@media (min-width:700px) {\\n  .container {\\n    grid-template-columns: 1fr 2fr;\\n    grid-template-rows: 0.2fr 5fr 0.2fr;\\n    grid-template-areas: \\n    \\\"nav nav\\\"\\n    \\\"sidebar main\\\"\\n    \\\"footer footer\\\"\\n    ;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/App.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Card.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Card.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".card {\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n    padding: 16px;\\r\\n    text-align: center;\\r\\n    background-color: #ffffff;\\r\\n    font-family: sans-serif;\\r\\n    font-weight: 800;\\r\\n    font-size: 12px;\\r\\n    color: #000000;\\r\\n    width: 150px;\\r\\n    margin: 10px;\\r\\n}\\r\\n\\r\\nspan .mission-details {\\r\\n  color:#4915dace;\\r\\n}\\r\\n\\r\\n@media (max-width:700px) {\\r\\n  .card {\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n    padding: 16px;\\r\\n    text-align: center;\\r\\n    background-color: #ffffff;\\r\\n    font-family: sans-serif;\\r\\n    font-weight: 800;\\r\\n    font-size: 12px;\\r\\n    color: #000000;\\r\\n    width: 100%;\\r\\n    margin: 10px;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Card.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Dashboard.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Dashboard.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".main {\\r\\n  display: inline-flex;\\r\\n  background-color: var(--main-color);\\r\\n  grid-area: main;\\r\\n  border-radius: var(--main-radius);\\r\\n  padding-top: var(--main-padding);\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: flex-start;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Dashboard.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/FilterBox.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/FilterBox.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\r\\n    --main-radius: 5px;\\r\\n    --main-padding: 5px;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n    background-color: #FFFFFF;\\r\\n    grid-area: sidebar;\\r\\n    border-radius: var(--main-radius);\\r\\n    padding-top: var(--main-padding);\\r\\n    justify-content: center;\\r\\n    text-align: center;\\r\\n    margin: 10px;\\r\\n}\\r\\n\\r\\n.button-toggle {\\r\\n    display:inline-block;\\r\\n    padding:0.3em 1.2em;\\r\\n    margin:0 0.1em 0.1em 0;\\r\\n    background-color:#4ef18f;\\r\\n    border:0.16em solid rgba(255,255,255,0);\\r\\n    border-radius:2em;\\r\\n    box-sizing: border-box;\\r\\n    text-decoration:none;\\r\\n    font-family:'Roboto',sans-serif;\\r\\n    font-weight:300;\\r\\n    color:#FFFFFF;\\r\\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\\r\\n    text-align:center;\\r\\n    transition: all 0.2s;\\r\\n}\\r\\n\\r\\n.button-toggle:hover{\\r\\n    border-color: rgba(255,255,255,1);\\r\\n}\\r\\n\\r\\nhr {\\r\\n    width: 50%;\\r\\n    align-self: auto;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n    align-self: left;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/FilterBox.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ignore-styles */ \"ignore-styles\");\n\n__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  ignore: [/(node_module)/],\n  presets: ['@babel/preset-env', '@babel/preset-react']\n});\n\n__webpack_require__(/*! ./server */ \"./server/server.js\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = process.env.PORT || 8000; // ...\n\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./App.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/App.css\");\n    var insertCss = __webpack_require__(/*! ../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/reducers */ \"./src/reducers/reducers.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Dashboard */ \"./src/components/Dashboard.js\");\n/* harmony import */ var _components_FilterBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/FilterBox */ \"./src/components/FilterBox.js\");\n\n\n\n\n\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_reducers__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_4__[\"logger\"]));\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"SpaceX Launch Programs\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FilterBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Developed By Anmol Tiwari\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/ACTION_TYPES.js":
/*!*************************************!*\
  !*** ./src/actions/ACTION_TYPES.js ***!
  \*************************************/
/*! exports provided: FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAILURE, SET_LAUNCH_IND, SET_LANDING_IND, SET_YEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LAUNCH_REQUEST\", function() { return FETCH_LAUNCH_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LAUNCH_SUCCESS\", function() { return FETCH_LAUNCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LAUNCH_FAILURE\", function() { return FETCH_LAUNCH_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_LAUNCH_IND\", function() { return SET_LAUNCH_IND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_LANDING_IND\", function() { return SET_LANDING_IND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_YEAR\", function() { return SET_YEAR; });\nvar FETCH_LAUNCH_REQUEST = 'FETCH_LAUNCH_REQUEST';\nvar FETCH_LAUNCH_SUCCESS = 'FETCH_LAUNCH_SUCCESS';\nvar FETCH_LAUNCH_FAILURE = 'FETCH_LAUNCH_FAILURE';\nvar SET_LAUNCH_IND = 'SET_LAUNCH_IND';\nvar SET_LANDING_IND = 'SET_LANDING_IND';\nvar SET_YEAR = 'SET_YEAR';\n\n//# sourceURL=webpack:///./src/actions/ACTION_TYPES.js?");

/***/ }),

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! exports provided: fetchLaunchRequest, fetchLaunchSuccess, fetchLaunchFailure, setIsLaunchSuccessfulValue, setIsLandingSuccessfulValue, setLaunchYear, fetchLaunch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLaunchRequest\", function() { return fetchLaunchRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLaunchSuccess\", function() { return fetchLaunchSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLaunchFailure\", function() { return fetchLaunchFailure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsLaunchSuccessfulValue\", function() { return setIsLaunchSuccessfulValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsLandingSuccessfulValue\", function() { return setIsLandingSuccessfulValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLaunchYear\", function() { return setLaunchYear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLaunch\", function() { return fetchLaunch; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACTION_TYPES */ \"./src/actions/ACTION_TYPES.js\");\n\n\nvar fetchLaunchRequest = function fetchLaunchRequest() {\n  return {\n    type: _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_LAUNCH_REQUEST\"]\n  };\n};\nvar fetchLaunchSuccess = function fetchLaunchSuccess(launches) {\n  return {\n    type: _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_LAUNCH_SUCCESS\"],\n    payload: launches\n  };\n};\nvar fetchLaunchFailure = function fetchLaunchFailure(err) {\n  return {\n    type: _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_LAUNCH_FAILURE\"],\n    payload: err\n  };\n};\nvar setIsLaunchSuccessfulValue = function setIsLaunchSuccessfulValue(value) {\n  return {\n    type: _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__[\"SET_LAUNCH_IND\"],\n    payload: value\n  };\n};\nvar setIsLandingSuccessfulValue = function setIsLandingSuccessfulValue(value) {\n  return {\n    type: _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__[\"SET_LANDING_IND\"],\n    payload: value\n  };\n};\nvar setLaunchYear = function setLaunchYear(year) {\n  return {\n    type: _ACTION_TYPES__WEBPACK_IMPORTED_MODULE_1__[\"SET_YEAR\"],\n    payload: year\n  };\n};\nvar fetchLaunch = function fetchLaunch() {\n  return function (dispatch, getState) {\n    dispatch(fetchLaunchRequest);\n\n    var _getState = getState(),\n        launchYear = _getState.launchYear,\n        isLaunchSuccessful = _getState.isLaunchSuccessful,\n        isLandingSuccessful = _getState.isLandingSuccessful;\n\n    console.log(\"launchYear: \".concat(launchYear, \", isLandingSuccessful: \").concat(isLandingSuccessful, \", isLaunchSuccessful: \").concat(isLaunchSuccessful));\n    var URL;\n\n    if (launchYear !== '' && isLaunchSuccessful !== '' && isLandingSuccessful !== '') {\n      URL = \"https://api.spacexdata.com/v3/launches?limit=100&launch_success=\".concat(isLaunchSuccessful, \"&land_success=\").concat(isLandingSuccessful, \"&launch_year=\").concat(launchYear);\n    } else if (launchYear !== '' && isLaunchSuccessful !== '' && isLandingSuccessful === '') {\n      URL = \"https://api.spacexdata.com/v3/launches?limit=100&launch_success=\".concat(isLaunchSuccessful, \"&launch_year=\").concat(launchYear);\n    } else if (launchYear !== '' && isLandingSuccessful !== '' && isLaunchSuccessful === '') {\n      URL = \"https://api.spacexdata.com/v3/launches?limit=100&land_success=\".concat(isLandingSuccessful, \"&launch_year=\").concat(launchYear);\n    } else if (launchYear !== '' && isLandingSuccessful === '' && isLaunchSuccessful === '') {\n      URL = \"https://api.spacexdata.com/v3/launches?limit=100&launch_year=\".concat(launchYear);\n    } else {\n      URL = \"https://api.spacexdata.com/v3/launches?limit=100\";\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(URL).then(function (res) {\n      var launches = res.data;\n      dispatch(fetchLaunchSuccess(launches));\n    }).catch(function (err) {\n      var errMsg = err.message;\n      dispatch(fetchLaunchFailure(errMsg));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/actions/actions.js?");

/***/ }),

/***/ "./src/components/Card.css":
/*!*********************************!*\
  !*** ./src/components/Card.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Card.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Card.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Card.css?");

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.css */ \"./src/components/Card.css\");\n/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Card(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.launch.links.mission_patch,\n    alt: \"Mission Patch\",\n    style: {\n      \"width\": \"50%\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Mission Name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-details\"\n  }, props.launch.mission_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Mission ID:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-details\"\n  }, props.launch.mission_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Launch Year:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-details\"\n  }, props.launch.launch_year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Successful Launch:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-details\"\n  }, props.launch.mission_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Successful Landing:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission-details\"\n  }, props.launch.mission_id)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/components/Card.js?");

/***/ }),

/***/ "./src/components/Dashboard.css":
/*!**************************************!*\
  !*** ./src/components/Dashboard.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Dashboard.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Dashboard.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Dashboard.css?");

/***/ }),

/***/ "./src/components/Dashboard.js":
/*!*************************************!*\
  !*** ./src/components/Dashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.js\");\n/* harmony import */ var _Dashboard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard.css */ \"./src/components/Dashboard.css\");\n/* harmony import */ var _Dashboard_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/actions */ \"./src/actions/actions.js\");\n\n\n\n\n\n\nfunction Dashboard(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    props.fetchLaunch(); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"main\"\n  }, props.launches.map(function (launch, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: key,\n      launch: launch\n    });\n  }));\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    launches: state.launches,\n    launchYear: state.launchYear,\n    isLaunchSuccessful: state.isLandingSuccessful,\n    isLandingSuccessful: state.isLandingSuccessful\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchLaunch: function fetchLaunch() {\n      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchLaunch\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Dashboard));\n\n//# sourceURL=webpack:///./src/components/Dashboard.js?");

/***/ }),

/***/ "./src/components/FilterBox.css":
/*!**************************************!*\
  !*** ./src/components/FilterBox.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./FilterBox.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/FilterBox.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/FilterBox.css?");

/***/ }),

/***/ "./src/components/FilterBox.js":
/*!*************************************!*\
  !*** ./src/components/FilterBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ \"./src/actions/actions.js\");\n/* harmony import */ var _FilterBox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBox.css */ \"./src/components/FilterBox.css\");\n/* harmony import */ var _FilterBox_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterBox_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction FilterBox(props) {\n  var onChangeLaunchSuccessful = function onChangeLaunchSuccessful(value) {\n    switch (value) {\n      case true:\n        if (props.isLaunchSuccessful === true) {\n          props.setIsLaunchSuccessfulValue('');\n        } else {\n          props.setIsLaunchSuccessfulValue(true);\n        }\n\n        props.fetchLaunch();\n        return;\n\n      case false:\n        if (props.isLaunchSuccessful === false) {\n          props.setIsLaunchSuccessfulValue('');\n        } else {\n          props.setIsLaunchSuccessfulValue(false);\n        }\n\n        props.fetchLaunch();\n        return;\n\n      default:\n        return;\n    }\n  };\n\n  var onChangeLandingSuccessful = function onChangeLandingSuccessful(value) {\n    switch (value) {\n      case true:\n        if (props.isLandingSuccessful === true) {\n          props.setIsLandingSuccessfulValue('');\n        } else {\n          props.setIsLandingSuccessfulValue(true);\n        }\n\n        props.fetchLaunch();\n        return;\n\n      case false:\n        if (props.isLandingSuccessful === false) {\n          props.setIsLandingSuccessfulValue('');\n        } else {\n          props.setIsLandingSuccessfulValue(false);\n        }\n\n        props.fetchLaunch();\n        return;\n\n      default:\n        return;\n    }\n  };\n\n  var onChangeFilter = function onChangeFilter(year) {\n    if (year === props.launchYear) {\n      props.setLaunchYear('');\n    } else {\n      props.setLaunchYear(year);\n    }\n\n    props.fetchLaunch();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sidebar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"filter-subheading\"\n  }, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2006');\n    }\n  }, \"2006\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2007');\n    }\n  }, \"2007\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2008');\n    }\n  }, \"2008\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2009');\n    }\n  }, \"2009\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2010');\n    }\n  }, \"2010\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2011');\n    }\n  }, \"2011\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2012');\n    }\n  }, \"2012\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2013');\n    }\n  }, \"2013\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2014');\n    }\n  }, \"2014\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2015');\n    }\n  }, \"2015\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2016');\n    }\n  }, \"2016\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2017');\n    }\n  }, \"2017\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2018');\n    }\n  }, \"2018\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2019');\n    }\n  }, \"2019\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeFilter('2020');\n    }\n  }, \"2020\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"filter-subheading\"\n  }, \"Launch Successful\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeLaunchSuccessful(true);\n    }\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeLaunchSuccessful(false);\n    }\n  }, \"False\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n    className: \"filter-subheading\"\n  }, \"Landing Successful\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeLandingSuccessful(true);\n    }\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button-toggle\",\n    onClick: function onClick() {\n      return onChangeLandingSuccessful(false);\n    }\n  }, \"False\")));\n}\n\n;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    launches: state.launches,\n    launchYear: state.launchYear,\n    isLaunchSuccessful: state.isLandingSuccessful,\n    isLandingSuccessful: state.isLandingSuccessful\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setIsLaunchSuccessfulValue: function setIsLaunchSuccessfulValue(value) {\n      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"setIsLaunchSuccessfulValue\"])(value));\n    },\n    setIsLandingSuccessfulValue: function setIsLandingSuccessfulValue(value) {\n      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"setIsLandingSuccessfulValue\"])(value));\n    },\n    setLaunchYear: function setLaunchYear(year) {\n      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"setLaunchYear\"])(year));\n    },\n    fetchLaunch: function fetchLaunch() {\n      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchLaunch\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(FilterBox));\n\n//# sourceURL=webpack:///./src/components/FilterBox.js?");

/***/ }),

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ACTION_TYPES */ \"./src/actions/ACTION_TYPES.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  isLoading: false,\n  launches: [],\n  launchYear: '',\n  isLaunchSuccessful: '',\n  isLandingSuccessful: '',\n  err: ''\n};\n\nvar mainReducer = function mainReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LAUNCH_REQUEST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LAUNCH_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        launches: action.payload,\n        err: ''\n      });\n\n    case _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LAUNCH_FAILURE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        launches: [],\n        err: action.payload\n      });\n\n    case _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__[\"SET_LAUNCH_IND\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLaunchSuccessful: action.payload\n      });\n\n    case _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__[\"SET_LANDING_IND\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLandingSuccessful: action.payload\n      });\n\n    case _actions_ACTION_TYPES__WEBPACK_IMPORTED_MODULE_0__[\"SET_YEAR\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        launchYear: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainReducer);\n\n//# sourceURL=webpack:///./src/reducers/reducers.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/register\");\n\n//# sourceURL=webpack:///external_%22@babel/register%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ignore-styles\");\n\n//# sourceURL=webpack:///external_%22ignore-styles%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });