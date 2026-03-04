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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&family=BBH+Bartle&family=Bebas+Neue&family=Luckiest+Guy&family=Roboto:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    font-family: \"Roboto\",sans-serif;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #eef4ee;\r\n}\r\nheader{\r\n    position: sticky;\r\n    top:0;\r\n    z-index: 100;;\r\n\r\n}   \r\n\r\nheader nav{\r\n    margin: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 64px;\r\n    padding: 16px 4px;\r\n    background-color: #eef4eee5;\r\n}\r\n\r\nnav button {\r\n    font-size: 16px;\r\n    border: none;\r\n    background-color: #eef4ee00;\r\n    border-radius: 24px;\r\n    cursor: pointer;\r\n    padding: 12px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.nav-button{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 40px;\r\n\r\n}\r\n/* le texte visible */\r\nnav button span {\r\n    display: block;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n@keyframes rollDown {\r\n    0%   { transform: translateY(0); }\r\n    50%  { transform: translateY(150%); }\r\n    51%  { transform: translateY(-150%); }\r\n    100% { transform: translateY(0); }\r\n}\r\n\r\nnav button:hover span {\r\n    animation: rollDown 0.25s ease forwards;\r\n}\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.home{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.main-image{\r\n    width: 100%;\r\n    object-fit: cover;\r\n    height: 60vh;\r\n    position: relative;\r\n}\r\n\r\n.button-primary{\r\n    width: 140px;\r\n    height: 50px;\r\n    align-self: center;\r\n    text-align: center;\r\n    border-radius: 8px;\r\n    padding: 12px 24px;\r\n    border: 2px solid #ffffff;\r\n    font-size: 20px;\r\n    background-color: #4e8a4200;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    bottom: 40%;\r\n    box-sizing: border-box;\r\n    color: #ffffff;\r\n    transition: 0.4s ease;\r\n}\r\n\r\n.button-primary:hover{\r\n    background-color: #ffffff;\r\n    color: #004900;\r\n    transform: 0.4s ease;\r\n}\r\n\r\n.title{\r\n    font-family: \"sora\", sans-serif;\r\n    font-size: 120px;\r\n    margin: 0;\r\n    letter-spacing: -8px;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.300);\r\n}\r\n\r\n.info{\r\n    align-self: flex-start;\r\n}\r\n\r\n.adress{\r\n    position: absolute;\r\n    top: 38%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.300);\r\n}\r\n\r\n\r\n.story{\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 240px;\r\n}\r\n\r\n.story-image{\r\n    justify-items: flex-start;\r\n    width: 450px;\r\n    height: auto;\r\n    object-fit: cover;\r\n}\r\n\r\n.divtext{\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.pstory{\r\n    white-space: pre-line;\r\n    width: 80%;\r\n    font-size: 16px;\r\n    margin-bottom: 80px;\r\n    color: #4c5c4c;\r\n}\r\n\r\nh2{\r\n    font-family: \"Sora\", \"Roboto\", sans-serif;\r\n    font-size: 36px;\r\n    margin: 80px 0px 40px 0px;\r\n    font-weight: 700;\r\n    letter-spacing: -2px;\r\n    color: #000000;\r\n}\r\n\r\n.button-reservation{\r\n    width: 140px;\r\n    height: 50px;\r\n    align-self: center;\r\n    text-align: center;\r\n    border-radius: 8px;\r\n    padding: 12px 24px;\r\n    border: 2px solid #004900;\r\n    font-size: 20px;\r\n    background-color: #4e8a4200;\r\n    cursor: pointer;\r\n    transition: 0.4s ease;\r\n    color: #004900;\r\n}\r\n\r\n.button-reservation:hover{\r\n    background-color: #004900;\r\n    transform: 0.4s ease;\r\n    color:#ffffff;\r\n    \r\n}\r\n\r\n.story, .menu {\r\n    max-width: 1200px;\r\n    margin: 100px auto;\r\n    padding: 0 40px;\r\n}\r\n\r\n.menu{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.menu-image{\r\n    justify-items: flex-end;\r\n    width: 450px;\r\n    height: auto;\r\n    object-fit: cover;\r\n    margin-left: 100px;\r\n    \r\n}\r\nh3{\r\n    color: #4c5c4c;\r\n    letter-spacing: -1px;\r\n}\r\nli{\r\n    font-size: 16px;\r\n    color: #4c5c4c;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-bottom: 12px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 80px;\r\n    width: 80%;\r\n\r\n}\r\n\r\nli span:last-child{\r\n    font-weight: 500;\r\n}\r\n.menu-div{\r\n    margin-top: -80px;\r\n}\r\n\r\n/*footer----------------------*/\r\n\r\n.footer{\r\n    max-width: 1200px;\r\n    margin: 200px auto 4px;\r\n    padding: 0 40px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    gap: 240px;\r\n    background-color: #eef4ee;\r\n}\r\n.footer h2{\r\n    font-family: \"Sora\", \"Roboto\", sans-serif;\r\n    font-size: 46px;\r\n    margin: 0px;\r\n    font-weight: 700;\r\n    letter-spacing: -2px;\r\n    color: #000000;\r\n    align-self: flex-start;\r\n}\r\n\r\n\r\n.pfooter{\r\n    white-space: pre-line;\r\n    color: #4c5c4c;\r\n}   \r\n\r\n.pfooter:last-child{\r\n    text-align: end;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/footer.js"
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\r\n\r\nfunction footer(){\r\n    const footerDiv = document.createElement(\"div\");\r\n    footerDiv.classList.add(\"footer\");\r\n    footerDiv.id = \"footer\";\r\n\r\n    const adressFooter = document.createElement(\"p\");\r\n    adressFooter.classList.add(\"pfooter\");\r\n    adressFooter.textContent =\"3 Rue Saint-Rustique, 75018 Paris\"\r\n\r\n    const h2Footer = document.createElement(\"h2\");\r\n    h2Footer.textContent = \"Verdana\";\r\n\r\n    const pHoraires = document.createElement(\"p\");\r\n    pHoraires.classList.add(\"pfooter\");\r\n    pHoraires.textContent = \"Ouvert du mardi au samedi\\n\\n12:00 - 14:00 le midi\\n\\n19:00 - 22:00 le soir\"\r\n\r\n    content.appendChild(footerDiv);\r\n    footerDiv.appendChild(adressFooter);\r\n    footerDiv.appendChild(h2Footer);\r\n    footerDiv.appendChild(pHoraires);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n/* harmony import */ var _story_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story.js */ \"./src/story.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\n\r\nconst home = document.createElement(\"div\");\r\nhome.classList.add(\"home\");\r\nhome.id = \"home\";\r\n\r\nconst titleH1 = document.createElement(\"h1\");\r\ntitleH1.textContent = \"Verdana\";\r\ntitleH1.classList.add(\"title\");\r\n\r\n\r\nconst mainImage = document.createElement(\"img\");\r\nmainImage.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\nmainImage.alt = \"Restaurant\";\r\nmainImage.classList.add(\"main-image\");\r\n\r\nconst resevationButton = document.createElement(\"button\");\r\nresevationButton.textContent =\"Réserver\";\r\nresevationButton.classList.add(\"button-primary\");\r\n\r\n\r\nconst pAdress = document.createElement(\"p\");\r\npAdress.textContent = \"3 Rue Saint-Rustique, 75018 Paris\"\r\npAdress.classList.add(\"adress\");\r\n\r\n\r\n\r\ncontent.appendChild(home);\r\nhome.appendChild(mainImage);\r\nhome.appendChild(titleH1);\r\nhome.appendChild(pAdress);\r\nhome.appendChild(resevationButton);\r\n\r\n\r\n\r\n\r\n\r\n(0,_story_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\r\nconst homeBtn = document.querySelector(\".button-home\");\r\nconst histoireBtn = document.querySelector(\".button-histoire\");\r\nconst menuBtn = document.querySelector(\".button-menu\");\r\nconst horairesBtn = document.querySelector(\".button-horaires\");\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n    document.getElementById(\"home\").scrollIntoView({behavior: \"smooth\"});\r\n});\r\n\r\nhistoireBtn.addEventListener(\"click\", () => {\r\n    document.getElementById(\"story\").scrollIntoView({behavior: \"smooth\"});\r\n});\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n    document.getElementById(\"menu\").scrollIntoView({behavior: \"smooth\"});\r\n});\r\n\r\nhorairesBtn.addEventListener(\"click\", () => {\r\n    document.getElementById(\"footer\").scrollIntoView({behavior: \"smooth\"});\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _imagee_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagee.jpeg */ \"./src/imagee.jpeg\");\n\r\nconst content = document.getElementById(\"content\");\r\n\r\n\r\nfunction menu(){\r\n\r\n    const divMenu = document.createElement(\"div\");\r\n    divMenu.classList.add(\"menu\");\r\n    divMenu.id = \"menu\";\r\n\r\n\r\n    const divMenuText = document.createElement(\"div\");\r\n    divMenuText.classList.add(\"menu-div\");\r\n    const menuH2 = document.createElement(\"h2\");\r\n    menuH2.textContent = \"Menu\";\r\n\r\n    \r\n\r\n    const imageMenu = document.createElement(\"img\");\r\n    imageMenu.src = _imagee_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    imageMenu.alt = \"Menu\"\r\n    imageMenu.classList.add(\"menu-image\");\r\n\r\n    const menuList = document.createElement(\"div\");\r\n    menuList.innerHTML =\r\n    `<h3>Entrées:</h3>\r\n    <ul>\r\n        <li><span>Tartare de tomates vertes, huile de basilic, fleur de sel</span><span>14€</span></li>\r\n        <li><span>Velouté de petits pois, crème de menthe fraîche</span><span>11€</span></li>\r\n        <li><span>Salade de haricots verts, vinaigrette au citron confit</span><span>12€</span></li>\r\n    </ul>\r\n    <h3>Plats:</h3>\r\n    <ul>\r\n        <li><span>Tian de légumes du soleil, coulis de tomate verte</span><span>22€</span></li>\r\n        <li><span>Risotto aux herbes sauvages, parmesan végétal</span><span>24€</span></li>\r\n        <li><span>Curry de pois chiches, lait de coco, coriandre fraîche</span><span>20€</span></li>\r\n\r\n    </ul>\r\n    <h3>Desserts:</h3>\r\n    <ul>\r\n        <li><span>Sorbet basilic, éclats de pistache</span><span>9€</span></li>\r\n        <li><span>Panna cotta végétale, compotée de fruits verts</span><span>10€</span></li>\r\n        <li><span>Tarte fine aux pommes vertes, caramel au thym</span><span>11€</span></li>\r\n    </ul>`;\r\n\r\n\r\n    content.appendChild(divMenu);\r\n    divMenu.appendChild(divMenuText);\r\n    divMenu.appendChild(imageMenu);\r\n    divMenuText.appendChild(menuH2);\r\n    divMenuText.appendChild(menuList);\r\n    \r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/story.js"
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ story)\n/* harmony export */ });\n/* harmony import */ var _story_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.webp */ \"./src/story.webp\");\n\r\nconst content = document.getElementById(\"content\");\r\n\r\nfunction story() {\r\n    const divStory = document.createElement(\"div\");\r\n    divStory.classList.add(\"story\");\r\n    divStory.id = \"story\";\r\n\r\n    const storyImage = document.createElement(\"img\");\r\n    storyImage.src = _story_webp__WEBPACK_IMPORTED_MODULE_0__;\r\n    storyImage.alt = \"Story\";\r\n    storyImage.classList.add(\"story-image\");\r\n\r\n    const storyText = document.createElement(\"div\");\r\n    storyText.classList.add(\"divtext\");\r\n    const storyH2 = document.createElement(\"h2\");\r\n    storyH2.textContent = \"Le restaurant\";\r\n\r\n    const pStory = document.createElement(\"p\");\r\n    pStory.classList.add(\"pstory\");\r\n    pStory.textContent = `Verdana est né d'une passion simple : montrer que manger végétarien peut être une expérience gastronomique à part entière.\\n\\n\r\nFondé en 2019 dans une ancienne riad, notre restaurant puise son inspiration dans les jardins méditerranéens et les marchés locaux. Chaque plat est une célébration des légumes de saison, travaillés avec respect et créativité.\\n\\n\r\nIci, pas de compromis — juste des saveurs vraies, une atmosphère chaleureuse, et une table où il fait bon s'attarder.`\r\n\r\n    const resevationButtonStory = document.createElement(\"button\");\r\n    resevationButtonStory.textContent =\"Réserver\";\r\n    resevationButtonStory.classList.add(\"button-reservation\");\r\n\r\n    \r\n\r\n    content.appendChild(divStory);\r\n    divStory.appendChild(storyImage);\r\n    divStory.appendChild(storyText);\r\n    storyText.appendChild(storyH2);\r\n    storyText.appendChild(pStory);\r\n    storyText.appendChild(resevationButtonStory);\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/story.js?\n}");

/***/ },

/***/ "./src/imagee.jpeg"
/*!*************************!*\
  !*** ./src/imagee.jpeg ***!
  \*************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8b3886ea54d884199df7.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imagee.jpeg?\n}");

/***/ },

/***/ "./src/restaurant.jpg"
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"087882381eedf76c2e10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.jpg?\n}");

/***/ },

/***/ "./src/story.webp"
/*!************************!*\
  !*** ./src/story.webp ***!
  \************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6849e0340ed4fe12918a.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/story.webp?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;