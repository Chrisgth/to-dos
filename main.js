/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    height: 100%;\n    margin: 0;\n    border: none;\n    background-color: white;\n    color: black;\n}\nul {\n    padding: 0;\n}\nbody {\n    display: grid;\n    grid-template: 1fr 19fr / 1fr 3fr;\n}\n* {\n    border: 1px solid black;\n}\n\nheader {\n    grid-column: 1 / end;\n    display: flex;\n}\nbutton,\nli {\n    cursor: pointer;\n    list-style: none;\n}\n#projectPopup {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; \n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n}\n#projectPopup.active {\n    opacity: 1;\n    pointer-events: all;\n}\n#formPopup {\n    background-color: white;\n}\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    overflow: scroll;\n}\n#projectOverview {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 2rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    margin-left: 100px;\n    margin-right: 100px;\n    max-height: 200px;\n    min-width: 200px;\n}\n#projectOverview > textarea {\n    max-width: 100%;\n    height: 4rem;\n    border: none;\n}\n#toDoForm > div {\n    display: flex;\n    flex-direction: column;\n    max-height: 250px;\n}\n\n#toDoDescription {\n    height: 5rem;\n}\n#allToDos > div > form {\n    display: flex;\n    flex-direction: column;\n}\n#allToDos > div {\n    display: flex;\n}\n#toDoForm {\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n.inactive {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,iCAAiC;AACrC;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,aAAa;AACjB;AACA;;IAEI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,kBAAkB;AACtB","sourcesContent":["body, html {\n    height: 100%;\n    margin: 0;\n    border: none;\n    background-color: white;\n    color: black;\n}\nul {\n    padding: 0;\n}\nbody {\n    display: grid;\n    grid-template: 1fr 19fr / 1fr 3fr;\n}\n* {\n    border: 1px solid black;\n}\n\nheader {\n    grid-column: 1 / end;\n    display: flex;\n}\nbutton,\nli {\n    cursor: pointer;\n    list-style: none;\n}\n#projectPopup {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; \n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n}\n#projectPopup.active {\n    opacity: 1;\n    pointer-events: all;\n}\n#formPopup {\n    background-color: white;\n}\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    overflow: scroll;\n}\n#projectOverview {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 2rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    margin-left: 100px;\n    margin-right: 100px;\n    max-height: 200px;\n    min-width: 200px;\n}\n#projectOverview > textarea {\n    max-width: 100%;\n    height: 4rem;\n    border: none;\n}\n#toDoForm > div {\n    display: flex;\n    flex-direction: column;\n    max-height: 250px;\n}\n\n#toDoDescription {\n    height: 5rem;\n}\n#allToDos > div > form {\n    display: flex;\n    flex-direction: column;\n}\n#allToDos > div {\n    display: flex;\n}\n#toDoForm {\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n.inactive {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");

// loads the page with full functionality
function pageLoad() {
    // html boilerplate
    const body = document.querySelector('body')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const sidebar = document.createElement('div')

    const pageLogo = document.createElement('p')

    pageLogo.textContent = 'MyToDoList'
    header.appendChild(pageLogo)

    const newToDo = document.createElement('button')
    const allToDos = document.createElement('ul')
    const toDoForm = document.createElement('form')
    const projectOverview = document.createElement('div')
    const newTask = document.createElement('button')

    for( let i=0; i<3; i++ ) {
        let toDoFormInputDiv = document.createElement('div')
        let toDoFormLabel = document.createElement('label')
        let toDoFormInput = document.createElement('input')

        if (i===0) {
            toDoFormInput.id = 'toDoName'
            toDoFormInput.name = 'toDoName'
            toDoFormLabel.htmlFor = 'toDoName'
            toDoFormLabel.textContent = 'Title'
        } else if (i===1) {
            toDoFormInput = document.createElement('textarea')
            toDoFormInput.id = 'toDoDescription'
            toDoFormInput.name = 'toDoDescription'
            toDoFormLabel.htmlFor = 'toDoDescription' 
            toDoFormLabel.textContent = 'Description'          
        } else if (i===2) {
            toDoFormInput.id = 'toDoDue'
            toDoFormInput.name = 'toDoDue'
            toDoFormInput.type = 'date'
            toDoFormLabel.htmlFor = 'toDoDue'
            toDoFormLabel.textContent = 'Due Date'
        }
        toDoFormInputDiv.appendChild(toDoFormLabel)
        toDoFormInputDiv.appendChild(toDoFormInput)
        toDoForm.appendChild(toDoFormInputDiv)
    }

    newTask.textContent = 'Add new task'
    newTask.addEventListener('click', () => {
        if (newTask.textContent === 'Add new task') {
            toDoForm.classList.toggle('inactive')
            newToDo.classList.toggle('inactive')
            newTask.textContent = 'Close task creation'
        } else {
            toDoForm.classList.toggle('inactive')
            newToDo.classList.toggle('inactive')
            newTask.textContent = 'Add new task'           
        }
    })

    newToDo.textContent = 'createnewtodo'
    newToDo.id = 'newToDo'
    newToDo.addEventListener('click', () => {
        if (_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectStorage.length === 0) {
            alert('Please create a project first')
            return
        }
        _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.newToDo();
    })
    allToDos.id = 'allToDos'
    toDoForm.id = 'toDoForm'

    let projectTitle = document.createElement('input')
    let projectDescription = document.createElement('textarea')

    projectTitle.value = 'Project'
    projectDescription.value = 'Project Description'

    projectTitle.id = 'projectTitle'
    projectDescription.id = 'projectDescription'
    projectOverview.id = 'projectOverview'

    projectOverview.textContent = 'Project Overview'

    projectTitle.addEventListener('input', _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectTitleEditor)
    projectDescription.addEventListener('input', _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectDescriptionEditor)

    projectOverview.appendChild(projectTitle)
    projectOverview.appendChild(projectDescription)

    main.appendChild(projectOverview)
    main.appendChild(newTask)
    main.appendChild(toDoForm)
    main.appendChild(newToDo)
    main.appendChild(allToDos)

    toDoForm.classList.toggle('inactive')
    newToDo.classList.toggle('inactive')

    const newProject = document.createElement('button')
    const allProjects = document.createElement('ul')
    newProject.addEventListener('click', () => {
        projectPopup.classList.toggle('active')
    })

    newProject.textContent = 'New Project'
    newProject.id = 'newProject'
    allProjects.id = 'allProjects'
    sidebar.appendChild(newProject)
    sidebar.appendChild(allProjects)
    sidebar.id = 'sidebar'

    body.appendChild(header)
    body.appendChild(sidebar)
    body.appendChild(main)

    // hidden pop-up overlay, meant to activate when new project button is clicked
    const projectPopup = document.createElement('div')
    const formPopup = document.createElement('form')
    projectPopup.id = 'projectPopup'
    formPopup.id = 'formPopup'
    projectPopup.appendChild(formPopup)

    for( let i=0; i<2; i++ ) {
        let formInputDiv = document.createElement('div')
        let formLabel = document.createElement('label')
        let formInput = document.createElement('input')

        if (i===0) {
            formInput.id = 'projectName'
            formInput.name = 'projectName'
            formLabel.htmlFor = 'projectName'
            formLabel.textContent = 'Project Name'
        } else if (i===1) {
            formInput.id = 'projectDescription'
            formInput.name = 'projectDescription'
            formLabel.htmlFor = 'projectDescription' 
            formLabel.textContent = 'Project Description'          
        }
        formInputDiv.appendChild(formLabel)
        formInputDiv.appendChild(formInput)
        formPopup.appendChild(formInputDiv)
    }
    const formButton = document.createElement('button')
    const formCloseButton = document.createElement('button')
    formCloseButton.textContent = 'X'
    formCloseButton.type = 'button'
    formCloseButton.addEventListener('click', () => {
        projectPopup.classList.toggle('active')
    })
    formButton.type = 'button'
    formButton.id = 'projectFormSubmit'
    formButton.textContent = 'Create Project'
    formButton.addEventListener('click', () => {
        if (formPopup[0].value === '' || formPopup[1].value === ''){
            alert('Please do not leave empty fields')
            return;
        }
        _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.newProject()
        projectPopup.classList.toggle('active')
    })
    formPopup.appendChild(formCloseButton)
    formPopup.appendChild(formButton)

    body.appendChild(projectPopup)
}

/***/ }),

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFactory)
/* harmony export */ });
// factory function created for the purpose of storing todos created with the todofactory function
function projectFactory(name, description) {
    let todos = []
    let projectName = name
    let projectDescription = description
    return {
        todos,
        projectName,
        projectDescription,
    }
}

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectManager": () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ "./src/projectFactory.js");
/* harmony import */ var _toDoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoFactory */ "./src/toDoFactory.js");


const projectManager = (() => {
    let projectStorage = []
    let currentProject = 0
    const newProject = () => {
        const allProjects = document.querySelector('#allProjects')
        const allToDos = document.getElementById('allToDos')
        const formPopup = document.getElementById('formPopup')
        const projectTitle = document.getElementById('projectTitle')
        const projectDesc = document.getElementById('projectDescription')

        let project = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(formPopup[0].value, formPopup[1].value)
        projectStorage.push(project)
        currentProject = projectStorage[projectStorage.indexOf(project)]

        projectTitle.value = currentProject.projectName
        projectDesc.value = currentProject.projectDescription

        const allProjectsDiv = document.createElement('div')
        const allProjectsLi = document.createElement('li')
        const projectRemove = document.createElement('button')

        projectRemove.textContent = 'Remove'

        projectRemove.addEventListener('click', () => {
            let allProjectsNodeArray = Array.from(allProjects.childNodes)
            allProjectsNodeArray[projectStorage.indexOf(project)].remove()
            if ( currentProject === projectStorage[projectStorage.indexOf(project)]){
                projectStorage.splice(projectStorage.indexOf(project), 1)
                currentProject = projectStorage[0]
                
                allToDos.innerHTML = ''

                if ( projectStorage.length === 0 ) {
                    projectTitle.value = 'Project'
                    projectDesc.value = 'Project Description'              
                    return
                }

                projectTitle.value = currentProject.projectName
                projectDesc.value = currentProject.projectDescription 

                for ( let i=0; i<currentProject.todos.length; i++ ) {
                    const allToDosDiv = document.createElement('div')
                    const allToDosForm = document.createElement('form')
                    const toDosTitle = document.createElement('input')
                    const dateDue = document.createElement('p')
            
                    dateDue.textContent = currentProject.todos[i].toDoDue
                    toDosTitle.disabled = true
                    toDosTitle.value = currentProject.todos[i].toDoTitle
                    
                    allToDosForm.appendChild(toDosTitle)
            
                    const toDoRemove = document.createElement('button')
                    const toDoExpand = document.createElement('button')
            
                    toDoRemove.textContent = 'Remove'
                    toDoExpand.textContent = 'Expand'
            
                    allToDosDiv.appendChild(allToDosForm)
                    allToDosDiv.appendChild(dateDue)
                    allToDosDiv.appendChild(toDoRemove)
                    allToDosDiv.appendChild(toDoExpand)

                    if (currentProject.todos[i].isPinned === true) {
                        allToDos.prepend(allToDosDiv)
                    } else {
                        allToDos.appendChild(allToDosDiv)
                    }

                    toDoPin.textContent = 'Pin'
                    allToDosDiv.appendChild(toDoPin)

                    toDoPin.addEventListener('click', () => {
                        if (projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned === false) {
                            allToDos.prepend(allToDosDiv)
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = true
                            console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)
                        } else {
                            allToDos.append(allToDosDiv)
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = false
                            console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)               
                        }
                    })
            
                    toDoRemove.addEventListener('click', () => {
                        let allToDosNodeArray = Array.from(allToDos.childNodes)
                        allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
                        projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
                    })
            
                    toDoExpand.addEventListener('click', () => {
                        if ( allToDosForm.childNodes.length === 1 ) {
                            toDosTitle.disabled = false
                            const toDosDescription = document.createElement('textarea')
                            const toDosDue = document.createElement('input')
                            toDosDue.type = 'date'
                            toDosDescription.value = currentProject.todos[i].toDoDesc
                            toDosDue.value = currentProject.todos[i].toDoDue
            
                            toDosDescription.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDesc = e.target.value
                                console.log(projectStorage)
                            })
            
                            toDosDue.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDue = e.target.value
                                dateDue.textContent = e.target.value
                                console.log(projectStorage)
                            })

                            toDosTitle.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoTitle = e.target.value
                                console.log(projectStorage)
                            })
            
                            allToDosForm.appendChild(toDosDescription)
                            allToDosForm.appendChild(toDosDue)
                        } else {
                            toDosTitle.disabled = true
                            for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                                allToDosForm.removeChild(allToDosForm.lastChild)
                            }
                        }
                    })
                } 
            } else {
                projectStorage.splice(projectStorage.indexOf(project), 1)
            }

        })

        allProjectsLi.textContent = project.projectName
        allProjectsLi.id = `project${projectStorage.indexOf(project)}`
        allProjectsDiv.appendChild(allProjectsLi)
        allProjectsDiv.appendChild(projectRemove)
        allProjects.appendChild(allProjectsDiv)

        allToDos.innerHTML = ''
        for ( let i=0; i<currentProject.todos.length; i++ ) {
            const allToDosLi = document.createElement('li')
            allToDosLi.textContent = currentProject.todos[i].toDoTitle
            allToDos.appendChild(allToDosLi)  
        } 

        allProjectsLi.addEventListener('click', () => {
            currentProject = projectStorage[projectStorage.indexOf(project)]
            projectTitle.value = currentProject.projectName
            projectDesc.value = currentProject.projectDescription
            allToDos.innerHTML = ''
            for ( let i=0; i<currentProject.todos.length; i++ ) {
                const allToDosDiv = document.createElement('div')
                const allToDosForm = document.createElement('form')
                const toDosTitle = document.createElement('input')
                const dateDue = document.createElement('p')
        
                dateDue.textContent = currentProject.todos[i].toDoDue
                toDosTitle.disabled = true
                toDosTitle.value = currentProject.todos[i].toDoTitle
        
                allToDosForm.appendChild(toDosTitle)
        
                const toDoRemove = document.createElement('button')
                const toDoExpand = document.createElement('button')
        
                toDoRemove.textContent = 'Remove'
                toDoExpand.textContent = 'Expand'
        
                allToDosDiv.appendChild(allToDosForm)
                allToDosDiv.appendChild(dateDue)
                allToDosDiv.appendChild(toDoRemove)
                allToDosDiv.appendChild(toDoExpand)

                if (currentProject.todos[i].isPinned === true) {
                    allToDos.prepend(allToDosDiv)
                } else {
                    allToDos.appendChild(allToDosDiv)
                }

                const toDoPin = document.createElement('button')
                toDoPin.textContent = 'Pin'
                allToDosDiv.appendChild(toDoPin)

                toDoPin.addEventListener('click', () => {
                    if (projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned === false) {
                        allToDos.prepend(allToDosDiv)
                        projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = true
                        console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)
                    } else {
                        allToDos.append(allToDosDiv)
                        projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = false
                        console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)               
                    }
                })
         
                toDoRemove.addEventListener('click', () => {
                    let allToDosNodeArray = Array.from(allToDos.childNodes)
                    allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
                    projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
                })
        
                toDoExpand.addEventListener('click', () => {
                    if ( allToDosForm.childNodes.length === 1 ) {
                        toDosTitle.disabled = false
                        const toDosDescription = document.createElement('textarea')
                        const toDosDue = document.createElement('input')
                        toDosDue.type = 'date'
                        toDosDescription.value = currentProject.todos[i].toDoDesc
                        toDosDue.value = currentProject.todos[i].toDoDue
        
                        toDosDescription.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDesc = e.target.value
                            console.log(projectStorage)
                        })
        
                        toDosDue.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDue = e.target.value
                            dateDue.textContent = e.target.value
                            console.log(projectStorage)
                        })

                        toDosTitle.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoTitle = e.target.value
                            console.log(projectStorage)
                        })
        
                        allToDosForm.appendChild(toDosDescription)
                        allToDosForm.appendChild(toDosDue)
                    } else {
                        toDosTitle.disabled = true
                        for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                            allToDosForm.removeChild(allToDosForm.lastChild)
                        }
                    }
                })
            } 
        })
    }
    const newToDo = () => {
        const allToDos = document.getElementById('allToDos')
        const toDoForm = document.getElementById('toDoForm')
        
        let toDo = (0,_toDoFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(toDoForm[0].value, toDoForm[1].value, toDoForm[2].value)
        currentProject.todos.push(toDo)

        const allToDosDiv = document.createElement('div')
        const allToDosForm = document.createElement('form')
        const toDosTitle = document.createElement('input')
        const dateDue = document.createElement('p')

        dateDue.textContent = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoDue
        toDosTitle.disabled = true
        toDosTitle.value = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoTitle

        allToDosForm.appendChild(toDosTitle)

        const toDoRemove = document.createElement('button')
        const toDoExpand = document.createElement('button')
        const toDoPin = document.createElement('button')

        toDoRemove.textContent = 'Remove'
        toDoExpand.textContent = 'Expand'
        toDoPin.textContent = 'Pin'

        allToDosDiv.appendChild(allToDosForm)
        allToDosDiv.appendChild(dateDue)
        allToDosDiv.appendChild(toDoRemove)
        allToDosDiv.appendChild(toDoExpand)
        allToDosDiv.appendChild(toDoPin)

        allToDos.appendChild(allToDosDiv)

        toDoPin.addEventListener('click', () => {
            if (projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned === false) {
                allToDos.prepend(allToDosDiv)
                projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned = true
                console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned)
            } else {
                allToDos.append(allToDosDiv)
                projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned = false
                console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned)               
            }
        })
 
        toDoRemove.addEventListener('click', () => {
            let allToDosNodeArray = Array.from(allToDos.childNodes)
            allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
            projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
        })

        toDoExpand.addEventListener('click', () => {
            if ( allToDosForm.childNodes.length === 1 ) {
                toDosTitle.disabled = false
                const toDosDescription = document.createElement('textarea')
                const toDosDue = document.createElement('input')
                toDosDue.type = 'date'
                toDosDescription.value = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoDesc
                toDosDue.value = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoDue

                toDosDescription.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoDesc = e.target.value
                    console.log(projectStorage)
                })

                toDosDue.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoDue = e.target.value
                    dateDue.textContent = e.target.value
                    console.log(projectStorage)
                })

                toDosTitle.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoTitle = e.target.value
                    console.log(projectStorage)
                })

                allToDosForm.appendChild(toDosDescription)
                allToDosForm.appendChild(toDosDue)
            } else {
                toDosTitle.disabled = true
                for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                    allToDosForm.removeChild(allToDosForm.lastChild)
                }
            }
        })

    }

    const projectTitleEditor = (e) => {
        if ( projectStorage.length === 0 ) return;
        projectStorage[projectStorage.indexOf(currentProject)].projectName = e.target.value
        let allProjectsNodeArray = Array.from(allProjects.childNodes)
        let currentProjectDivArray = Array.from(allProjectsNodeArray[projectStorage.indexOf(currentProject)].childNodes)
        currentProjectDivArray[0].textContent = e.target.value
    }

    const projectDescriptionEditor = (e) => {
        if ( projectStorage.length === 0 ) return;
        projectStorage[projectStorage.indexOf(currentProject)].projectDescription = e.target.value
    }
 
    return {
        projectStorage,
        newProject,
        currentProject,
        newToDo,
        projectTitleEditor,
        projectDescriptionEditor,
    }
})()

/***/ }),

/***/ "./src/toDoFactory.js":
/*!****************************!*\
  !*** ./src/toDoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoFactory)
/* harmony export */ });
// factory function that creates a todo with 3 defined properties and 2 predefined ones
function toDoFactory(title, description, dueDate) {
    let toDoTitle = title;
    let toDoDesc = description;
    let toDoDue = dueDate;
    let isPinned = false;
    let isCompleted = false;
    return {
        toDoTitle,
        toDoDesc,
        toDoDue,
        isPinned,
        isCompleted,
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _toDoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoFactory.js */ "./src/toDoFactory.js");
/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectFactory.js */ "./src/projectFactory.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");






(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQjtBQUNzQjtBQUNNO0FBQ0E7QUFDWDs7QUFFckMsd0RBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvdG9Eb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTlmciAvIDFmciAzZnI7XFxufVxcbioge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmJ1dHRvbixcXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI3Byb2plY3RQb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbiNwcm9qZWN0UG9wdXAuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuI2Zvcm1Qb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcbiNwcm9qZWN0T3ZlcnZpZXcgPiB0ZXh0YXJlYSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2FsbFRvRG9zID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3RvRG9Gb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTlmciAvIDFmciAzZnI7XFxufVxcbioge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmJ1dHRvbixcXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI3Byb2plY3RQb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbiNwcm9qZWN0UG9wdXAuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuI2Zvcm1Qb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcbiNwcm9qZWN0T3ZlcnZpZXcgPiB0ZXh0YXJlYSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2FsbFRvRG9zID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3RvRG9Gb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIlxuLy8gbG9hZHMgdGhlIHBhZ2Ugd2l0aCBmdWxsIGZ1bmN0aW9uYWxpdHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIC8vIGh0bWwgYm9pbGVycGxhdGVcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBwYWdlTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgcGFnZUxvZ28udGV4dENvbnRlbnQgPSAnTXlUb0RvTGlzdCdcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnZUxvZ28pXG5cbiAgICBjb25zdCBuZXdUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBhbGxUb0RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IHByb2plY3RPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBmb3IoIGxldCBpPTA7IGk8MzsgaSsrICkge1xuICAgICAgICBsZXQgdG9Eb0Zvcm1JbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCB0b0RvRm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBsZXQgdG9Eb0Zvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcblxuICAgICAgICBpZiAoaT09PTApIHtcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQuaWQgPSAndG9Eb05hbWUnXG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0Lm5hbWUgPSAndG9Eb05hbWUnXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLmh0bWxGb3IgPSAndG9Eb05hbWUnXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xuICAgICAgICB9IGVsc2UgaWYgKGk9PT0xKSB7XG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5pZCA9ICd0b0RvRGVzY3JpcHRpb24nXG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0Lm5hbWUgPSAndG9Eb0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC5odG1sRm9yID0gJ3RvRG9EZXNjcmlwdGlvbicgXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJyAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChpPT09Mikge1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5pZCA9ICd0b0RvRHVlJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5uYW1lID0gJ3RvRG9EdWUnXG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0LnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwuaHRtbEZvciA9ICd0b0RvRHVlJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgfVxuICAgICAgICB0b0RvRm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKHRvRG9Gb3JtTGFiZWwpXG4gICAgICAgIHRvRG9Gb3JtSW5wdXREaXYuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1JbnB1dClcbiAgICAgICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1JbnB1dERpdilcbiAgICB9XG5cbiAgICBuZXdUYXNrLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdGFzaydcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAobmV3VGFzay50ZXh0Q29udGVudCA9PT0gJ0FkZCBuZXcgdGFzaycpIHtcbiAgICAgICAgICAgIHRvRG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICAgICAgICAgIG5ld1RvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgICAgICAgICAgbmV3VGFzay50ZXh0Q29udGVudCA9ICdDbG9zZSB0YXNrIGNyZWF0aW9uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgICAgICAgICAgbmV3VG9Eby5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgICAgICAgICBuZXdUYXNrLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdGFzaycgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIG5ld1RvRG8udGV4dENvbnRlbnQgPSAnY3JlYXRlbmV3dG9kbydcbiAgICBuZXdUb0RvLmlkID0gJ25ld1RvRG8nXG4gICAgbmV3VG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RNYW5hZ2VyLnByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjcmVhdGUgYSBwcm9qZWN0IGZpcnN0JylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLm5ld1RvRG8oKTtcbiAgICB9KVxuICAgIGFsbFRvRG9zLmlkID0gJ2FsbFRvRG9zJ1xuICAgIHRvRG9Gb3JtLmlkID0gJ3RvRG9Gb3JtJ1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJ1Byb2plY3QnXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nXG5cbiAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJ1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nXG4gICAgcHJvamVjdE92ZXJ2aWV3LmlkID0gJ3Byb2plY3RPdmVydmlldydcblxuICAgIHByb2plY3RPdmVydmlldy50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE92ZXJ2aWV3J1xuXG4gICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcHJvamVjdE1hbmFnZXIucHJvamVjdFRpdGxlRWRpdG9yKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHByb2plY3RNYW5hZ2VyLnByb2plY3REZXNjcmlwdGlvbkVkaXRvcilcblxuICAgIHByb2plY3RPdmVydmlldy5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gICAgcHJvamVjdE92ZXJ2aWV3LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbilcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdE92ZXJ2aWV3KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VGFzaylcbiAgICBtYWluLmFwcGVuZENoaWxkKHRvRG9Gb3JtKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VG9EbylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFsbFRvRG9zKVxuXG4gICAgdG9Eb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgIG5ld1RvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnXG4gICAgbmV3UHJvamVjdC5pZCA9ICduZXdQcm9qZWN0J1xuICAgIGFsbFByb2plY3RzLmlkID0gJ2FsbFByb2plY3RzJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbFByb2plY3RzKVxuICAgIHNpZGViYXIuaWQgPSAnc2lkZWJhcidcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pXG5cbiAgICAvLyBoaWRkZW4gcG9wLXVwIG92ZXJsYXksIG1lYW50IHRvIGFjdGl2YXRlIHdoZW4gbmV3IHByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHByb2plY3RQb3B1cC5pZCA9ICdwcm9qZWN0UG9wdXAnXG4gICAgZm9ybVBvcHVwLmlkID0gJ2Zvcm1Qb3B1cCdcbiAgICBwcm9qZWN0UG9wdXAuYXBwZW5kQ2hpbGQoZm9ybVBvcHVwKVxuXG4gICAgZm9yKCBsZXQgaT0wOyBpPDI7IGkrKyApIHtcbiAgICAgICAgbGV0IGZvcm1JbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBmb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICAgICAgaWYgKGk9PT0wKSB7XG4gICAgICAgICAgICBmb3JtSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnXG4gICAgICAgICAgICBmb3JtSW5wdXQubmFtZSA9ICdwcm9qZWN0TmFtZSdcbiAgICAgICAgICAgIGZvcm1MYWJlbC5odG1sRm9yID0gJ3Byb2plY3ROYW1lJ1xuICAgICAgICAgICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSdcbiAgICAgICAgfSBlbHNlIGlmIChpPT09MSkge1xuICAgICAgICAgICAgZm9ybUlucHV0LmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGZvcm1JbnB1dC5uYW1lID0gJ3Byb2plY3REZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGZvcm1MYWJlbC5odG1sRm9yID0gJ3Byb2plY3REZXNjcmlwdGlvbicgXG4gICAgICAgICAgICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbicgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1MYWJlbClcbiAgICAgICAgZm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1JbnB1dClcbiAgICAgICAgZm9ybVBvcHVwLmFwcGVuZENoaWxkKGZvcm1JbnB1dERpdilcbiAgICB9XG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgZm9ybUNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQ2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnWCdcbiAgICBmb3JtQ2xvc2VCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgZm9ybUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9KVxuICAgIGZvcm1CdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgZm9ybUJ1dHRvbi5pZCA9ICdwcm9qZWN0Rm9ybVN1Ym1pdCdcbiAgICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0J1xuICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb3JtUG9wdXBbMF0udmFsdWUgPT09ICcnIHx8IGZvcm1Qb3B1cFsxXS52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBkbyBub3QgbGVhdmUgZW1wdHkgZmllbGRzJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5uZXdQcm9qZWN0KClcbiAgICAgICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBmb3JtUG9wdXAuYXBwZW5kQ2hpbGQoZm9ybUNsb3NlQnV0dG9uKVxuICAgIGZvcm1Qb3B1cC5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0UG9wdXApXG59IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVkIGZvciB0aGUgcHVycG9zZSBvZiBzdG9yaW5nIHRvZG9zIGNyZWF0ZWQgd2l0aCB0aGUgdG9kb2ZhY3RvcnkgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgbGV0IHRvZG9zID0gW11cbiAgICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lXG4gICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgfVxufSIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi9wcm9qZWN0RmFjdG9yeVwiXG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSBcIi4vdG9Eb0ZhY3RvcnlcIlxuZXhwb3J0IGNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdFN0b3JhZ2UgPSBbXVxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IDBcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxQcm9qZWN0cycpXG4gICAgICAgIGNvbnN0IGFsbFRvRG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRvRG9zJylcbiAgICAgICAgY29uc3QgZm9ybVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qb3B1cCcpXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKVxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGVzY3JpcHRpb24nKVxuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoZm9ybVBvcHVwWzBdLnZhbHVlLCBmb3JtUG9wdXBbMV0udmFsdWUpXG4gICAgICAgIHByb2plY3RTdG9yYWdlLnB1c2gocHJvamVjdClcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKHByb2plY3QpXVxuXG4gICAgICAgIHByb2plY3RUaXRsZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3ROYW1lXG4gICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdERlc2NyaXB0aW9uXG5cbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICBwcm9qZWN0UmVtb3ZlLnRleHRDb250ZW50ID0gJ1JlbW92ZSdcblxuICAgICAgICBwcm9qZWN0UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFsbFByb2plY3RzTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0cy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgYWxsUHJvamVjdHNOb2RlQXJyYXlbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KV0ucmVtb3ZlKClcbiAgICAgICAgICAgIGlmICggY3VycmVudFByb2plY3QgPT09IHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCldKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5zcGxpY2UocHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RTdG9yYWdlWzBdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3MuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGlmICggcHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSAnUHJvamVjdCdcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2MudmFsdWUgPSAnUHJvamVjdCBEZXNjcmlwdGlvbicgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdERlc2NyaXB0aW9uIFxuXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxjdXJyZW50UHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxUb0Rvc0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvRHVlXG4gICAgICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUudmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc1RpdGxlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9SZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0RvRXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b0RvUmVtb3ZlLnRleHRDb250ZW50ID0gJ1JlbW92ZSdcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0V4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChkYXRlRHVlKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUmVtb3ZlKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdG9Eb1Bpbi50ZXh0Q29udGVudCA9ICdQaW4nXG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKHRvRG9QaW4pXG5cbiAgICAgICAgICAgICAgICAgICAgdG9Eb1Bpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5hcHBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1JlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGxUb0Rvc05vZGVBcnJheSA9IEFycmF5LmZyb20oYWxsVG9Eb3MuY2hpbGROb2RlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zTm9kZUFycmF5W2FsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpXS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zLnNwbGljZShhbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KSwgMSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b0RvRXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhbGxUb0Rvc0Zvcm0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEZXNjcmlwdGlvbi52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9EZXNjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUudmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvRHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9EZXNjID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9EdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb1RpdGxlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc0Rlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc0R1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5zcGxpY2UocHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIGFsbFByb2plY3RzTGkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lXG4gICAgICAgIGFsbFByb2plY3RzTGkuaWQgPSBgcHJvamVjdCR7cHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KX1gXG4gICAgICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKGFsbFByb2plY3RzTGkpXG4gICAgICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RSZW1vdmUpXG4gICAgICAgIGFsbFByb2plY3RzLmFwcGVuZENoaWxkKGFsbFByb2plY3RzRGl2KVxuXG4gICAgICAgIGFsbFRvRG9zLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGZvciAoIGxldCBpPTA7IGk8Y3VycmVudFByb2plY3QudG9kb3MubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBhbGxUb0Rvc0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgYWxsVG9Eb3NMaS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9UaXRsZVxuICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NMaSkgIFxuICAgICAgICB9IFxuXG4gICAgICAgIGFsbFByb2plY3RzTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCldXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICAgICAgcHJvamVjdERlc2MudmFsdWUgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb25cbiAgICAgICAgICAgIGFsbFRvRG9zLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGN1cnJlbnRQcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvRG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb0Rvc0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9EdWVcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUudmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvVGl0bGVcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zVGl0bGUpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9SZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9FeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB0b0RvUmVtb3ZlLnRleHRDb250ZW50ID0gJ1JlbW92ZSdcbiAgICAgICAgICAgICAgICB0b0RvRXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCdcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGRhdGVEdWUpXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1JlbW92ZSlcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLmlzUGlubmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb1BpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgdG9Eb1Bpbi50ZXh0Q29udGVudCA9ICdQaW4nXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1BpbilcblxuICAgICAgICAgICAgICAgIHRvRG9QaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5wcmVwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICBcbiAgICAgICAgICAgICAgICB0b0RvUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWxsVG9Eb3NOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFRvRG9zLmNoaWxkTm9kZXMpXG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zTm9kZUFycmF5W2FsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpXS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3Muc3BsaWNlKGFsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpLCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHRvRG9FeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0Rlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRGVzYyA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb0R1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb1RpdGxlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxhbGxUb0Rvc0Zvcm0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IG5ld1RvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbFRvRG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRvRG9zJylcbiAgICAgICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Zvcm0nKVxuICAgICAgICBcbiAgICAgICAgbGV0IHRvRG8gPSB0b0RvRmFjdG9yeSh0b0RvRm9ybVswXS52YWx1ZSwgdG9Eb0Zvcm1bMV0udmFsdWUsIHRvRG9Gb3JtWzJdLnZhbHVlKVxuICAgICAgICBjdXJyZW50UHJvamVjdC50b2Rvcy5wdXNoKHRvRG8pXG5cbiAgICAgICAgY29uc3QgYWxsVG9Eb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBhbGxUb0Rvc0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgY29uc3QgdG9Eb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY29uc3QgZGF0ZUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRHVlXG4gICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIHRvRG9zVGl0bGUudmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvVGl0bGVcblxuICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NUaXRsZSlcblxuICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgdG9Eb0V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IHRvRG9QaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgICAgIHRvRG9SZW1vdmUudGV4dENvbnRlbnQgPSAnUmVtb3ZlJ1xuICAgICAgICB0b0RvRXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCdcbiAgICAgICAgdG9Eb1Bpbi50ZXh0Q29udGVudCA9ICdQaW4nXG5cbiAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChkYXRlRHVlKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUmVtb3ZlKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUGluKVxuXG4gICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zRGl2KVxuXG4gICAgICAgIHRvRG9QaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS5pc1Bpbm5lZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS5pc1Bpbm5lZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuIFxuICAgICAgICB0b0RvUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFsbFRvRG9zTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxUb0Rvcy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgYWxsVG9Eb3NOb2RlQXJyYXlbYWxsVG9Eb3NOb2RlQXJyYXkuaW5kZXhPZihhbGxUb0Rvc0RpdildLnJlbW92ZSgpXG4gICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3Muc3BsaWNlKGFsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpLCAxKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRvRG9FeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIHRvRG9zRHVlLnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0Rlc2NcbiAgICAgICAgICAgICAgICB0b0Rvc0R1ZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9EdWVcblxuICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0Rlc2MgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdG9Eb3NEdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0R1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvVGl0bGUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8YWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLnJlbW92ZUNoaWxkKGFsbFRvRG9zRm9ybS5sYXN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlRWRpdG9yID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCBwcm9qZWN0U3RvcmFnZS5sZW5ndGggPT09IDAgKSByZXR1cm47XG4gICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5wcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIGxldCBhbGxQcm9qZWN0c05vZGVBcnJheSA9IEFycmF5LmZyb20oYWxsUHJvamVjdHMuY2hpbGROb2RlcylcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0RGl2QXJyYXkgPSBBcnJheS5mcm9tKGFsbFByb2plY3RzTm9kZUFycmF5W3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5jaGlsZE5vZGVzKVxuICAgICAgICBjdXJyZW50UHJvamVjdERpdkFycmF5WzBdLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWVcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25FZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCApIHJldHVybjtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnByb2plY3REZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlXG4gICAgfVxuIFxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLFxuICAgICAgICBuZXdQcm9qZWN0LFxuICAgICAgICBjdXJyZW50UHJvamVjdCxcbiAgICAgICAgbmV3VG9EbyxcbiAgICAgICAgcHJvamVjdFRpdGxlRWRpdG9yLFxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25FZGl0b3IsXG4gICAgfVxufSkoKSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdG9kbyB3aXRoIDMgZGVmaW5lZCBwcm9wZXJ0aWVzIGFuZCAyIHByZWRlZmluZWQgb25lc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Eb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgbGV0IHRvRG9UaXRsZSA9IHRpdGxlO1xuICAgIGxldCB0b0RvRGVzYyA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCB0b0RvRHVlID0gZHVlRGF0ZTtcbiAgICBsZXQgaXNQaW5uZWQgPSBmYWxzZTtcbiAgICBsZXQgaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b0RvVGl0bGUsXG4gICAgICAgIHRvRG9EZXNjLFxuICAgICAgICB0b0RvRHVlLFxuICAgICAgICBpc1Bpbm5lZCxcbiAgICAgICAgaXNDb21wbGV0ZWQsXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHRvRG9GYWN0b3J5IGZyb20gJy4vdG9Eb0ZhY3RvcnkuanMnXG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi9wcm9qZWN0RmFjdG9yeS5qcydcbmltcG9ydCB7cHJvamVjdE1hbmFnZXJ9IGZyb20gJy4vcHJvamVjdE1hbmFnZXInO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZUxvYWQuanMnO1xuXG5wYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==