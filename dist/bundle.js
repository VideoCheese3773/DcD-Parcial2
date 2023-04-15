/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button/Button.css":
/*!******************************************!*\
  !*** ./src/components/Button/Button.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".appButton {\\r\\n    margin-left: 5px;\\r\\n    margin-right: 5px;\\r\\n    background-color: #4CAF50;\\r\\n    border: none;\\r\\n    color: white;\\r\\n    padding: 15px 15px;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    font-size: 16px;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.appButton:hover{\\r\\n    background-color: #306d32;\\r\\n\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Button/Button.css?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.mainApp{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.title{\\r\\n    font-size: 50px;\\r\\n}\\r\\n\\r\\n.jokeContainer{\\r\\n    width: 70%;\\r\\n    margin-top: 3%;\\r\\n    padding: 1%;\\r\\n    background-color: rgb(39, 102, 196);\\r\\n    border-radius: 20px;\\r\\n    color: white;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Button/Button.ts":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeButton\": () => (/* binding */ AttributeButton),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.css */ \"./src/components/Button/Button.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\nvar AttributeButton;\n(function (AttributeButton) {\n    AttributeButton[\"btn_text\"] = \"btn_text\";\n})(AttributeButton || (AttributeButton = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn_text: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue //any\n    ) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _Button_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        const button = this.ownerDocument.createElement('button');\n        button.className = \"appButton\";\n        button.innerText = this.btn_text;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n    }\n}\ncustomElements.define('app-button', Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Button/Button.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _Button_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button/Button */ \"./src/components/Button/Button.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/styles */ \"./src/utils/styles.ts\");\n/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data */ \"./src/services/data.ts\");\n/* harmony import */ var _services_fetchCategoryJoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/fetchCategoryJoke */ \"./src/services/fetchCategoryJoke.ts\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Button/Button */ \"./src/components/Button/Button.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.buttonList = [];\n        this.actualJoke = \"Select a category to show a joke\";\n        this.actualCategory = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const dataAPI = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_3__.fetchCategories)();\n            console.log(dataAPI);\n            dataAPI.forEach((category) => {\n                const newButton = this.ownerDocument.createElement('app-button');\n                newButton.setAttribute(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__.AttributeButton.btn_text, category);\n                newButton.addEventListener('click', () => {\n                    console.log(newButton.btn_text);\n                    this.createJoke(newButton.btn_text);\n                });\n                this.buttonList.push(newButton);\n            });\n            this.render(this.buttonList);\n        });\n    }\n    createJoke(btn_text) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const jokeResult = yield (0,_services_fetchCategoryJoke__WEBPACK_IMPORTED_MODULE_4__.fetchJoke)(btn_text);\n            //console.log(\"joke\",jokeResult)\n            this.actualJoke = jokeResult;\n            this.actualCategory = btn_text;\n            this.render(this.buttonList);\n        });\n    }\n    render(buttonList) {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = \"\";\n        }\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_2__.loadCss)(this, _index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const mainApp = this.ownerDocument.createElement('section');\n        mainApp.className = \"mainApp\";\n        const title = this.ownerDocument.createElement('h1');\n        title.className = \"title\";\n        title.innerText = \"😂 Chuck Norris Jokes 😂\";\n        mainApp.appendChild(title);\n        const buttonContainer = this.ownerDocument.createElement('div');\n        buttonContainer.className = \"buttonContainer\";\n        this.buttonList.forEach((button) => {\n            buttonContainer.appendChild(button);\n        });\n        mainApp.appendChild(buttonContainer);\n        const jokeContainer = this.ownerDocument.createElement('div');\n        jokeContainer.className = \"jokeContainer\";\n        const renderCat = this.ownerDocument.createElement('h4');\n        renderCat.innerText = this.actualCategory;\n        jokeContainer.appendChild(renderCat);\n        const renderJoke = this.ownerDocument.createElement('h3');\n        renderJoke.innerText = this.actualJoke;\n        jokeContainer.appendChild(renderJoke);\n        mainApp.appendChild(jokeContainer);\n        //loadCss(this, styles)\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainApp);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/data.ts":
/*!******************************!*\
  !*** ./src/services/data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCategories\": () => (/* binding */ fetchCategories)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction fetchCategories() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://api.chucknorris.io/jokes/categories').then((res) => {\n                return res.json();\n            });\n            return data;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\nconsole.log(fetchCategories());\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/data.ts?");

/***/ }),

/***/ "./src/services/fetchCategoryJoke.ts":
/*!*******************************************!*\
  !*** ./src/services/fetchCategoryJoke.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchJoke\": () => (/* binding */ fetchJoke)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction fetchJoke(category) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => {\n                return res.json();\n            });\n            console.log(\"fetch\", data.value);\n            return data.value;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/fetchCategoryJoke.ts?");

/***/ }),

/***/ "./src/utils/styles.ts":
/*!*****************************!*\
  !*** ./src/utils/styles.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCss\": () => (/* binding */ loadCss)\n/* harmony export */ });\nconst loadCss = (elRef, styles) => {\n    var _a;\n    const css = elRef.ownerDocument.createElement(\"style\");\n    css.innerHTML = styles;\n    (_a = elRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/styles.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;