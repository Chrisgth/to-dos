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
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    height: 100%;\n    margin: 0;\n    border: none;\n}\nul {\n    padding: 0;\n}\nbody {\n    display: grid;\n    grid-template: 1fr 19fr / 1fr 3fr;\n}\n* {\n    border: 1px solid black;\n}\n\nheader {\n    grid-column: 1 / end;\n    display: flex;\n}\nbutton,\nli {\n    cursor: pointer;\n    list-style: none;\n}\n#projectPopup {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; \n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n}\n#projectPopup.active {\n    opacity: 1;\n    pointer-events: all;\n}\n#formPopup {\n    background-color: white;\n}\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    overflow: scroll;\n}\n#projectOverview {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 2rem\n}\n#toDoForm > div{\n    display: flex;\n    flex-direction: column;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,iCAAiC;AACrC;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,aAAa;AACjB;AACA;;IAEI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B","sourcesContent":["body, html {\n    height: 100%;\n    margin: 0;\n    border: none;\n}\nul {\n    padding: 0;\n}\nbody {\n    display: grid;\n    grid-template: 1fr 19fr / 1fr 3fr;\n}\n* {\n    border: 1px solid black;\n}\n\nheader {\n    grid-column: 1 / end;\n    display: flex;\n}\nbutton,\nli {\n    cursor: pointer;\n    list-style: none;\n}\n#projectPopup {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; \n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n}\n#projectPopup.active {\n    opacity: 1;\n    pointer-events: all;\n}\n#formPopup {\n    background-color: white;\n}\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    overflow: scroll;\n}\n#projectOverview {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 2rem\n}\n#toDoForm > div{\n    display: flex;\n    flex-direction: column;\n}"],"sourceRoot":""}]);
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
    main.appendChild(toDoForm)
    main.appendChild(newToDo)
    main.appendChild(allToDos)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELG1CQUFtQixnQkFBZ0IsbUJBQW1CLEdBQUcsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLG9CQUFvQix3Q0FBd0MsR0FBRyxLQUFLLDhCQUE4QixHQUFHLFlBQVksMkJBQTJCLG9CQUFvQixHQUFHLGVBQWUsc0JBQXNCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsYUFBYSxnQkFBZ0IsZUFBZSxlQUFlLHdDQUF3QyxvQkFBb0IsOEJBQThCLDBCQUEwQixpQkFBaUIsMkJBQTJCLEdBQUcsd0JBQXdCLGlCQUFpQiwwQkFBMEIsR0FBRyxjQUFjLDhCQUE4QixHQUFHLFFBQVEsb0JBQW9CLDZCQUE2QixnQkFBZ0IsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIseUJBQXlCLGtCQUFrQixrQkFBa0Isb0JBQW9CLDZCQUE2QixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLHNDQUFzQyxtQkFBbUIsZ0JBQWdCLG1CQUFtQixHQUFHLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxvQkFBb0Isd0NBQXdDLEdBQUcsS0FBSyw4QkFBOEIsR0FBRyxZQUFZLDJCQUEyQixvQkFBb0IsR0FBRyxlQUFlLHNCQUFzQix1QkFBdUIsR0FBRyxpQkFBaUIsc0JBQXNCLGFBQWEsZ0JBQWdCLGVBQWUsZUFBZSx3Q0FBd0Msb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUJBQWlCLDJCQUEyQixHQUFHLHdCQUF3QixpQkFBaUIsMEJBQTBCLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxRQUFRLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QixHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLHlCQUF5QixrQkFBa0Isa0JBQWtCLG9CQUFvQiw2QkFBNkIsR0FBRyxtQkFBbUI7QUFDN2xGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpRDtBQUNqRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRkFBb0M7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBc0I7QUFDOUIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQ0FBMkMsOEVBQWlDO0FBQzVFLGlEQUFpRCxvRkFBdUM7O0FBRXhGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBeUI7QUFDakM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjZDO0FBQ047QUFDaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwyREFBYztBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsMkNBQTJDLGtDQUFrQztBQUM3RTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0EscUNBQXFDLGdDQUFnQztBQUNyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsdUNBQXVDLGtDQUFrQztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzlWRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ3NCO0FBQ007QUFDQTtBQUNYOztBQUVyQyx3REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy90b0RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxOWZyIC8gMWZyIDNmcjtcXG59XFxuKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuYnV0dG9uLFxcbmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4jcHJvamVjdFBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3Byb2plY3RQb3B1cC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4jZm9ybVBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbiNwcm9qZWN0T3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbVxcbn1cXG4jdG9Eb0Zvcm0gPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDE5ZnIgLyAxZnIgM2ZyO1xcbn1cXG4qIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5idXR0b24sXFxubGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbiNwcm9qZWN0UG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4jcHJvamVjdFBvcHVwLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbiNmb3JtUG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuI3Byb2plY3RPdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtXFxufVxcbiN0b0RvRm9ybSA+IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCJcbi8vIGxvYWRzIHRoZSBwYWdlIHdpdGggZnVsbCBmdW5jdGlvbmFsaXR5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICAvLyBodG1sIGJvaWxlcnBsYXRlXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgcGFnZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIHBhZ2VMb2dvLnRleHRDb250ZW50ID0gJ015VG9Eb0xpc3QnXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHBhZ2VMb2dvKVxuXG4gICAgY29uc3QgbmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYWxsVG9Eb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBwcm9qZWN0T3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgZm9yKCBsZXQgaT0wOyBpPDM7IGkrKyApIHtcbiAgICAgICAgbGV0IHRvRG9Gb3JtSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgdG9Eb0Zvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbGV0IHRvRG9Gb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICAgICAgaWYgKGk9PT0wKSB7XG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0LmlkID0gJ3RvRG9OYW1lJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5uYW1lID0gJ3RvRG9OYW1lJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC5odG1sRm9yID0gJ3RvRG9OYW1lJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSdcbiAgICAgICAgfSBlbHNlIGlmIChpPT09MSkge1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQuaWQgPSAndG9Eb0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5uYW1lID0gJ3RvRG9EZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwuaHRtbEZvciA9ICd0b0RvRGVzY3JpcHRpb24nIFxuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbicgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoaT09PTIpIHtcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQuaWQgPSAndG9Eb0R1ZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQubmFtZSA9ICd0b0RvRHVlJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLmh0bWxGb3IgPSAndG9Eb0R1ZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG4gICAgICAgIH1cbiAgICAgICAgdG9Eb0Zvcm1JbnB1dERpdi5hcHBlbmRDaGlsZCh0b0RvRm9ybUxhYmVsKVxuICAgICAgICB0b0RvRm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKHRvRG9Gb3JtSW5wdXQpXG4gICAgICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtSW5wdXREaXYpXG4gICAgfVxuXG4gICAgbmV3VG9Eby50ZXh0Q29udGVudCA9ICdjcmVhdGVuZXd0b2RvJ1xuICAgIG5ld1RvRG8uaWQgPSAnbmV3VG9EbydcbiAgICBuZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE1hbmFnZXIucHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNyZWF0ZSBhIHByb2plY3QgZmlyc3QnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE1hbmFnZXIubmV3VG9EbygpO1xuICAgIH0pXG4gICAgYWxsVG9Eb3MuaWQgPSAnYWxsVG9Eb3MnXG4gICAgdG9Eb0Zvcm0uaWQgPSAndG9Eb0Zvcm0nXG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG5cbiAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSAnUHJvamVjdCdcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUgPSAnUHJvamVjdCBEZXNjcmlwdGlvbidcblxuICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0VGl0bGUnXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbidcbiAgICBwcm9qZWN0T3ZlcnZpZXcuaWQgPSAncHJvamVjdE92ZXJ2aWV3J1xuXG4gICAgcHJvamVjdE92ZXJ2aWV3LnRleHRDb250ZW50ID0gJ1Byb2plY3QgT3ZlcnZpZXcnXG5cbiAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBwcm9qZWN0TWFuYWdlci5wcm9qZWN0VGl0bGVFZGl0b3IpXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcHJvamVjdE1hbmFnZXIucHJvamVjdERlc2NyaXB0aW9uRWRpdG9yKVxuXG4gICAgcHJvamVjdE92ZXJ2aWV3LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgICBwcm9qZWN0T3ZlcnZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0T3ZlcnZpZXcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvRm9ybSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld1RvRG8pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhbGxUb0RvcylcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0J1xuICAgIG5ld1Byb2plY3QuaWQgPSAnbmV3UHJvamVjdCdcbiAgICBhbGxQcm9qZWN0cy5pZCA9ICdhbGxQcm9qZWN0cydcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGxQcm9qZWN0cylcbiAgICBzaWRlYmFyLmlkID0gJ3NpZGViYXInXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKVxuXG4gICAgLy8gaGlkZGVuIHBvcC11cCBvdmVybGF5LCBtZWFudCB0byBhY3RpdmF0ZSB3aGVuIG5ldyBwcm9qZWN0IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBwcm9qZWN0UG9wdXAuaWQgPSAncHJvamVjdFBvcHVwJ1xuICAgIGZvcm1Qb3B1cC5pZCA9ICdmb3JtUG9wdXAnXG4gICAgcHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKGZvcm1Qb3B1cClcblxuICAgIGZvciggbGV0IGk9MDsgaTwyOyBpKysgKSB7XG4gICAgICAgIGxldCBmb3JtSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gICAgICAgIGlmIChpPT09MCkge1xuICAgICAgICAgICAgZm9ybUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJ1xuICAgICAgICAgICAgZm9ybUlucHV0Lm5hbWUgPSAncHJvamVjdE5hbWUnXG4gICAgICAgICAgICBmb3JtTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0TmFtZSdcbiAgICAgICAgICAgIGZvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnXG4gICAgICAgIH0gZWxzZSBpZiAoaT09PTEpIHtcbiAgICAgICAgICAgIGZvcm1JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nXG4gICAgICAgICAgICBmb3JtSW5wdXQubmFtZSA9ICdwcm9qZWN0RGVzY3JpcHRpb24nXG4gICAgICAgICAgICBmb3JtTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nIFxuICAgICAgICAgICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtTGFiZWwpXG4gICAgICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtSW5wdXQpXG4gICAgICAgIGZvcm1Qb3B1cC5hcHBlbmRDaGlsZChmb3JtSW5wdXREaXYpXG4gICAgfVxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGZvcm1DbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybUNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnXG4gICAgZm9ybUNsb3NlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgIGZvcm1DbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBmb3JtQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgIGZvcm1CdXR0b24uaWQgPSAncHJvamVjdEZvcm1TdWJtaXQnXG4gICAgZm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCdcbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZm9ybVBvcHVwWzBdLnZhbHVlID09PSAnJyB8fCBmb3JtUG9wdXBbMV0udmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZG8gbm90IGxlYXZlIGVtcHR5IGZpZWxkcycpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE1hbmFnZXIubmV3UHJvamVjdCgpXG4gICAgICAgIHByb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgZm9ybVBvcHVwLmFwcGVuZENoaWxkKGZvcm1DbG9zZUJ1dHRvbilcbiAgICBmb3JtUG9wdXAuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdFBvcHVwKVxufSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2Ygc3RvcmluZyB0b2RvcyBjcmVhdGVkIHdpdGggdGhlIHRvZG9mYWN0b3J5IGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIGxldCB0b2RvcyA9IFtdXG4gICAgbGV0IHByb2plY3ROYW1lID0gbmFtZVxuICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9zLFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLFxuICAgIH1cbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvamVjdEZhY3RvcnlcIlxuaW1wb3J0IHRvRG9GYWN0b3J5IGZyb20gXCIuL3RvRG9GYWN0b3J5XCJcbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RTdG9yYWdlID0gW11cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSAwXG4gICAgY29uc3QgbmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsUHJvamVjdHMnKVxuICAgICAgICBjb25zdCBhbGxUb0RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUb0RvcycpXG4gICAgICAgIGNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUG9wdXAnKVxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJylcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERlc2NyaXB0aW9uJylcblxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KGZvcm1Qb3B1cFswXS52YWx1ZSwgZm9ybVBvcHVwWzFdLnZhbHVlKVxuICAgICAgICBwcm9qZWN0U3RvcmFnZS5wdXNoKHByb2plY3QpXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KV1cblxuICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICBwcm9qZWN0RGVzYy52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvblxuXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgY29uc3QgcHJvamVjdFJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICAgICAgcHJvamVjdFJlbW92ZS50ZXh0Q29udGVudCA9ICdSZW1vdmUnXG5cbiAgICAgICAgcHJvamVjdFJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBhbGxQcm9qZWN0c05vZGVBcnJheSA9IEFycmF5LmZyb20oYWxsUHJvamVjdHMuY2hpbGROb2RlcylcbiAgICAgICAgICAgIGFsbFByb2plY3RzTm9kZUFycmF5W3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCldLnJlbW92ZSgpXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnRQcm9qZWN0ID09PSBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKHByb2plY3QpXSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2Uuc3BsaWNlKHByb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCksIDEpXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0U3RvcmFnZVswXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvRG9zLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBpZiAoIHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJ1Byb2plY3QnXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzYy52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbiBcblxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8Y3VycmVudFByb2plY3QudG9kb3MubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvRG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb1RpdGxlXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NUaXRsZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb0V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1JlbW92ZS50ZXh0Q29udGVudCA9ICdSZW1vdmUnXG4gICAgICAgICAgICAgICAgICAgIHRvRG9FeHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGFsbFRvRG9zRm9ybSlcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoZGF0ZUR1ZSlcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1JlbW92ZSlcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb0V4cGFuZClcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QudG9kb3NbaV0uaXNQaW5uZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5hcHBlbmRDaGlsZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRvRG9QaW4udGV4dENvbnRlbnQgPSAnUGluJ1xuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUGluKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvRG9QaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRvRG9SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxsVG9Eb3NOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFRvRG9zLmNoaWxkTm9kZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc05vZGVBcnJheVthbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KV0ucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvcy5zcGxpY2UoYWxsVG9Eb3NOb2RlQXJyYXkuaW5kZXhPZihhbGxUb0Rvc0RpdiksIDEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0V4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUudHlwZSA9ICdkYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24udmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvRGVzY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRGVzYyA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9UaXRsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxhbGxUb0Rvc0Zvcm0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0ucmVtb3ZlQ2hpbGQoYWxsVG9Eb3NGb3JtLmxhc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2Uuc3BsaWNlKHByb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCksIDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBhbGxQcm9qZWN0c0xpLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICBhbGxQcm9qZWN0c0xpLmlkID0gYHByb2plY3Qke3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCl9YFxuICAgICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0xpKVxuICAgICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0UmVtb3ZlKVxuICAgICAgICBhbGxQcm9qZWN0cy5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0RpdilcblxuICAgICAgICBhbGxUb0Rvcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGN1cnJlbnRQcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGFsbFRvRG9zTGkudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvVGl0bGVcbiAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zTGkpICBcbiAgICAgICAgfSBcblxuICAgICAgICBhbGxQcm9qZWN0c0xpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKHByb2plY3QpXVxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdERlc2NyaXB0aW9uXG4gICAgICAgICAgICBhbGxUb0Rvcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxjdXJyZW50UHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb0Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvRHVlXG4gICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb1RpdGxlXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc1RpdGxlKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvRXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9Eb1JlbW92ZS50ZXh0Q29udGVudCA9ICdSZW1vdmUnXG4gICAgICAgICAgICAgICAgdG9Eb0V4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGFsbFRvRG9zRm9ybSlcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChkYXRlRHVlKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKHRvRG9SZW1vdmUpXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb0V4cGFuZClcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5wcmVwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9QaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgIHRvRG9QaW4udGV4dENvbnRlbnQgPSAnUGluJ1xuICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKHRvRG9QaW4pXG5cbiAgICAgICAgICAgICAgICB0b0RvUGluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9Eb1JlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRvRG9zTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxUb0Rvcy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc05vZGVBcnJheVthbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KV0ucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zLnNwbGljZShhbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KSwgMSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB0b0RvRXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUudHlwZSA9ICdkYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEZXNjcmlwdGlvbi52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9EZXNjXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9EdWVcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb0Rlc2MgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9EdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9UaXRsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc0Rlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRHVlKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8YWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0ucmVtb3ZlQ2hpbGQoYWxsVG9Eb3NGb3JtLmxhc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBuZXdUb0RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxUb0RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUb0RvcycpXG4gICAgICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Gb3JtJylcbiAgICAgICAgXG4gICAgICAgIGxldCB0b0RvID0gdG9Eb0ZhY3RvcnkodG9Eb0Zvcm1bMF0udmFsdWUsIHRvRG9Gb3JtWzFdLnZhbHVlLCB0b0RvRm9ybVsyXS52YWx1ZSlcbiAgICAgICAgY3VycmVudFByb2plY3QudG9kb3MucHVzaCh0b0RvKVxuXG4gICAgICAgIGNvbnN0IGFsbFRvRG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGNvbnN0IHRvRG9zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0R1ZVxuICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb1RpdGxlXG5cbiAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zVGl0bGUpXG5cbiAgICAgICAgY29uc3QgdG9Eb1JlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IHRvRG9FeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjb25zdCB0b0RvUGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICB0b0RvUmVtb3ZlLnRleHRDb250ZW50ID0gJ1JlbW92ZSdcbiAgICAgICAgdG9Eb0V4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnXG4gICAgICAgIHRvRG9QaW4udGV4dENvbnRlbnQgPSAnUGluJ1xuXG4gICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGFsbFRvRG9zRm9ybSlcbiAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoZGF0ZUR1ZSlcbiAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1JlbW92ZSlcbiAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb0V4cGFuZClcbiAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1BpbilcblxuICAgICAgICBhbGxUb0Rvcy5hcHBlbmRDaGlsZChhbGxUb0Rvc0RpdilcblxuICAgICAgICB0b0RvUGluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS5pc1Bpbm5lZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhbGxUb0Rvcy5wcmVwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS5pc1Bpbm5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS5pc1Bpbm5lZCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiBcbiAgICAgICAgdG9Eb1JlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBhbGxUb0Rvc05vZGVBcnJheSA9IEFycmF5LmZyb20oYWxsVG9Eb3MuY2hpbGROb2RlcylcbiAgICAgICAgICAgIGFsbFRvRG9zTm9kZUFycmF5W2FsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpXS5yZW1vdmUoKVxuICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zLnNwbGljZShhbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KSwgMSlcbiAgICAgICAgfSlcblxuICAgICAgICB0b0RvRXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCBhbGxUb0Rvc0Zvcm0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICB0b0Rvc0R1ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICAgICAgdG9Eb3NEZXNjcmlwdGlvbi52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9EZXNjXG4gICAgICAgICAgICAgICAgdG9Eb3NEdWUudmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRHVlXG5cbiAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9EZXNjID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvRG9zRHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9EdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb1RpdGxlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc0Rlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc0R1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUaXRsZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIGlmICggcHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwICkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0ucHJvamVjdE5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBsZXQgYWxsUHJvamVjdHNOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFByb2plY3RzLmNoaWxkTm9kZXMpXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdERpdkFycmF5ID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0c05vZGVBcnJheVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0uY2hpbGROb2RlcylcbiAgICAgICAgY3VycmVudFByb2plY3REaXZBcnJheVswXS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uRWRpdG9yID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCBwcm9qZWN0U3RvcmFnZS5sZW5ndGggPT09IDAgKSByZXR1cm47XG4gICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5wcm9qZWN0RGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZVxuICAgIH1cbiBcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZSxcbiAgICAgICAgbmV3UHJvamVjdCxcbiAgICAgICAgY3VycmVudFByb2plY3QsXG4gICAgICAgIG5ld1RvRG8sXG4gICAgICAgIHByb2plY3RUaXRsZUVkaXRvcixcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uRWRpdG9yLFxuICAgIH1cbn0pKCkiLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRvZG8gd2l0aCAzIGRlZmluZWQgcHJvcGVydGllcyBhbmQgMiBwcmVkZWZpbmVkIG9uZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIGxldCB0b0RvVGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgdG9Eb0Rlc2MgPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgdG9Eb0R1ZSA9IGR1ZURhdGU7XG4gICAgbGV0IGlzUGlubmVkID0gZmFsc2U7XG4gICAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9Eb1RpdGxlLFxuICAgICAgICB0b0RvRGVzYyxcbiAgICAgICAgdG9Eb0R1ZSxcbiAgICAgICAgaXNQaW5uZWQsXG4gICAgICAgIGlzQ29tcGxldGVkLFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB0b0RvRmFjdG9yeSBmcm9tICcuL3RvRG9GYWN0b3J5LmpzJ1xuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4vcHJvamVjdEZhY3RvcnkuanMnXG5pbXBvcnQge3Byb2plY3RNYW5hZ2VyfSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyJztcbmltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2VMb2FkLmpzJztcblxucGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=