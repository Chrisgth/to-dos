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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! trash-can.png */ "./src/trash-can.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! down-arrow.png */ "./src/down-arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! pin.png */ "./src/pin.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    height: 100%;\n    margin: 0;\n    border: none;\n    background-color: #587B7F;\n    color: black;\n}\nbody, html, textarea, input, button {\n    font-family: 'Roboto', sans-serif;\n}\nul {\n    padding: 0;\n}\nbody {\n    display: grid;\n    grid-template: 1fr 19fr / 1fr 3fr;\n}\n\n\nheader {\n    grid-column: 1 / end;\n    display: flex;\n    font-size: 2rem;\n    border-bottom: 4px solid white;\n}\nheader > p {\n    margin: 0;\n    text-align: center;\n    border: none;\n    width: 100%;\n    color: white;\n}\n#sidebar {\n    background-color: #393E41;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-right: 4px solid white;\n}\nbutton,\nli {\n    cursor: pointer;\n    list-style: none;\n}\n#projectPopup {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; \n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n}\n#projectPopup.active {\n    opacity: 1;\n    pointer-events: all;\n}\n#formPopup {\n    background-color: white;\n}\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    overflow: scroll;\n    background-color: #D3D0CB;\n    align-items: center;\n}\nmain > * {\n    background-color: white;\n}\n#projectOverview {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 1.5rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    margin-left: 100px;\n    margin-right: 100px;\n    max-height: 200px;\n    min-width: 80%;\n    background-color: #393E41;\n    color: white;\n    padding-top: 1rem;\n    border: 4px solid white;\n    border-radius: 6px;\n}\n#projectOverview > textarea {\n    max-width: 100%;\n    height: 4rem;\n    border: none;\n    background-color:#587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#projectOverview > input {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#toDoForm > div {\n    display: flex;\n    flex-direction: column;\n    max-height: 250px;\n}\n\n#toDoDescription {\n    height: 5rem;\n}\n#allToDos > div > form {\n    display: flex;\n    flex-direction: column;\n    min-width: 70%;\n}\n#allToDos > div {\n    display: flex;\n    justify-content: space-between;\n}\n#toDoForm {\n    margin-left: 100px;\n    margin-right: 100px;\n    min-width: 80%;\n    background-color: #393E41;\n    color: white;\n    padding-top: 1rem;\n    border: 4px solid white;\n    border-radius: 6px;\n}\n#toDoForm > div > textarea {\n    background-color:#587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#toDoForm > div > input {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#toDoForm > div > label {\n    border: none;\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.inactive {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n#newProject, main > button {\n    border-radius: 6px;\n    font-weight: bold;\n    font-size: larger;\n    margin-top: 1rem;\n    background-color: #587B7F;\n    color: white;\n    border: 2px solid white;\n}\n\nmain > button {\n    width: fit-content;\n}\n\n#newProject:hover, main > button:hover, #formPopup > button:hover {\n    background-color: #393E41;\n}\n\n#allProjects {\n    width: 100%;\n    color: white;\n    border-top: 4px solid white;\n    margin-top: 16px;   \n}\n\n#allProjects > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#allProjects > div > button {\n    background-color: #587B7F;\n    width: 2em;\n    height: 100%;\n    margin: 4px;\n    padding: 0;\n    font-size: 1rem;\n    border: 2px solid white;\n}\n\n#allProjects > div > button:hover {\n    background-color: #393E41;\n}\n\n#allProjects > div > li {\n    width: 100%;\n    background-color: #587B7F;\n    margin: 4px;\n    font-size: 1rem;\n    min-height: 19px;\n    border: 2px solid white;\n}\n\n#allProjects > div > li:hover {\n    background-color: #393E41;\n}\n\n#formPopup {\n    background-color: #393E41;\n    color: white;\n    border: 4px solid white;\n    border-radius: 6px;\n    min-width: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n#formPopup > div {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    order: 2;\n}\n#formPopup > div > textarea {\n    background-color:#587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n    min-height: 8rem;\n}\n#formPopup > div > input {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#formPopup > div > label {\n    border: none;\n    margin-left: 4px;\n    margin-right: 4px;\n}\n#formCloseButton {\n    background-color: #587B7F;\n    width: 2em;\n    height: 100%;\n    margin: 4px;\n    padding: 0;\n    font-size: 1rem;\n    border: 2px solid white;\n    order: 1;\n    align-self: flex-end;\n}\n#projectFormSubmit {\n    border-radius: 6px;\n    font-weight: bold;\n    font-size: larger;\n    margin-top: 1rem;\n    background-color: #587B7F;\n    color: white;\n    border: 2px solid white;\n    margin-bottom: 1rem;\n    order: 3;\n}\n\n#allToDos {\n    min-width: 80%;\n    background-color: #D3D0CB;\n}\n\n#allToDos > div{\n    background-color: #393E41;\n    color: white;\n    margin-top: 0.5rem;\n    border: 4px solid white;\n    border-radius: 6px;\n    min-width: 100%;\n    align-items: center;\n}\n#allToDos > div > form > input{\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n    height: 1rem;\n    font-size: 1rem;\n}\n#allToDos > div > form > textarea {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n    min-height: 4rem;\n}\n#allToDos>div>button:nth-child(3) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat left center;\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin: none;\n    padding: none;\n    border: none;\n    filter: invert(100%) sepia(26%) saturate(328%) hue-rotate(225deg) brightness(114%) contrast(100%);\n    margin-top: 4px;\n}\n#allToDos>div>button:nth-child(4) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat left center;\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin: none;\n    padding: none;\n    border: none;\n    filter: invert(100%) sepia(26%) saturate(328%) hue-rotate(225deg) brightness(114%) contrast(100%);\n    margin-top: 4px;\n}\n#allToDos>div>button:nth-child(5) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat left center;\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin: none;\n    padding: none;\n    border: none;\n    filter: invert(100%) sepia(26%) saturate(328%) hue-rotate(225deg) brightness(114%) contrast(100%);\n    margin-top: 4px;\n}\n#allToDos>div>form>input:disabled{\n    background-color: #393E41;\n    color: white;\n    min-height: 1.5rem;\n    font-size: 1.5rem;\n    border: none;\n}\n#allToDos>div>p {\n    margin: 0;\n    align-self: flex-start;\n    margin-top: 4px;\n}\n\n#allToDos > div > button:hover {\n    filter: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,iCAAiC;AACrC;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,iCAAiC;AACrC;;;AAGA;IACI,oBAAoB;IACpB,aAAa;IACb,eAAe;IACf,8BAA8B;AAClC;AACA;IACI,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;AACA;;IAEI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;IACd,yBAAyB;IACzB,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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\nbody, html {\n    height: 100%;\n    margin: 0;\n    border: none;\n    background-color: #587B7F;\n    color: black;\n}\nbody, html, textarea, input, button {\n    font-family: 'Roboto', sans-serif;\n}\nul {\n    padding: 0;\n}\nbody {\n    display: grid;\n    grid-template: 1fr 19fr / 1fr 3fr;\n}\n\n\nheader {\n    grid-column: 1 / end;\n    display: flex;\n    font-size: 2rem;\n    border-bottom: 4px solid white;\n}\nheader > p {\n    margin: 0;\n    text-align: center;\n    border: none;\n    width: 100%;\n    color: white;\n}\n#sidebar {\n    background-color: #393E41;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-right: 4px solid white;\n}\nbutton,\nli {\n    cursor: pointer;\n    list-style: none;\n}\n#projectPopup {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; \n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n}\n#projectPopup.active {\n    opacity: 1;\n    pointer-events: all;\n}\n#formPopup {\n    background-color: white;\n}\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    overflow: scroll;\n    background-color: #D3D0CB;\n    align-items: center;\n}\nmain > * {\n    background-color: white;\n}\n#projectOverview {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 1.5rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    margin-left: 100px;\n    margin-right: 100px;\n    max-height: 200px;\n    min-width: 80%;\n    background-color: #393E41;\n    color: white;\n    padding-top: 1rem;\n    border: 4px solid white;\n    border-radius: 6px;\n}\n#projectOverview > textarea {\n    max-width: 100%;\n    height: 4rem;\n    border: none;\n    background-color:#587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#projectOverview > input {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#toDoForm > div {\n    display: flex;\n    flex-direction: column;\n    max-height: 250px;\n}\n\n#toDoDescription {\n    height: 5rem;\n}\n#allToDos > div > form {\n    display: flex;\n    flex-direction: column;\n    min-width: 70%;\n}\n#allToDos > div {\n    display: flex;\n    justify-content: space-between;\n}\n#toDoForm {\n    margin-left: 100px;\n    margin-right: 100px;\n    min-width: 80%;\n    background-color: #393E41;\n    color: white;\n    padding-top: 1rem;\n    border: 4px solid white;\n    border-radius: 6px;\n}\n#toDoForm > div > textarea {\n    background-color:#587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#toDoForm > div > input {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#toDoForm > div > label {\n    border: none;\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.inactive {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n#newProject, main > button {\n    border-radius: 6px;\n    font-weight: bold;\n    font-size: larger;\n    margin-top: 1rem;\n    background-color: #587B7F;\n    color: white;\n    border: 2px solid white;\n}\n\nmain > button {\n    width: fit-content;\n}\n\n#newProject:hover, main > button:hover, #formPopup > button:hover {\n    background-color: #393E41;\n}\n\n#allProjects {\n    width: 100%;\n    color: white;\n    border-top: 4px solid white;\n    margin-top: 16px;   \n}\n\n#allProjects > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#allProjects > div > button {\n    background-color: #587B7F;\n    width: 2em;\n    height: 100%;\n    margin: 4px;\n    padding: 0;\n    font-size: 1rem;\n    border: 2px solid white;\n}\n\n#allProjects > div > button:hover {\n    background-color: #393E41;\n}\n\n#allProjects > div > li {\n    width: 100%;\n    background-color: #587B7F;\n    margin: 4px;\n    font-size: 1rem;\n    min-height: 19px;\n    border: 2px solid white;\n}\n\n#allProjects > div > li:hover {\n    background-color: #393E41;\n}\n\n#formPopup {\n    background-color: #393E41;\n    color: white;\n    border: 4px solid white;\n    border-radius: 6px;\n    min-width: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n#formPopup > div {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    order: 2;\n}\n#formPopup > div > textarea {\n    background-color:#587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n    min-height: 8rem;\n}\n#formPopup > div > input {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n}\n#formPopup > div > label {\n    border: none;\n    margin-left: 4px;\n    margin-right: 4px;\n}\n#formCloseButton {\n    background-color: #587B7F;\n    width: 2em;\n    height: 100%;\n    margin: 4px;\n    padding: 0;\n    font-size: 1rem;\n    border: 2px solid white;\n    order: 1;\n    align-self: flex-end;\n}\n#projectFormSubmit {\n    border-radius: 6px;\n    font-weight: bold;\n    font-size: larger;\n    margin-top: 1rem;\n    background-color: #587B7F;\n    color: white;\n    border: 2px solid white;\n    margin-bottom: 1rem;\n    order: 3;\n}\n\n#allToDos {\n    min-width: 80%;\n    background-color: #D3D0CB;\n}\n\n#allToDos > div{\n    background-color: #393E41;\n    color: white;\n    margin-top: 0.5rem;\n    border: 4px solid white;\n    border-radius: 6px;\n    min-width: 100%;\n    align-items: center;\n}\n#allToDos > div > form > input{\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n    height: 1rem;\n    font-size: 1rem;\n}\n#allToDos > div > form > textarea {\n    background-color: #587B7F;\n    color: white;\n    margin: 4px;\n    border: 2px solid white;\n    min-height: 4rem;\n}\n#allToDos>div>button:nth-child(3) {\n    background: url(trash-can.png) no-repeat left center;\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin: none;\n    padding: none;\n    border: none;\n    filter: invert(100%) sepia(26%) saturate(328%) hue-rotate(225deg) brightness(114%) contrast(100%);\n    margin-top: 4px;\n}\n#allToDos>div>button:nth-child(4) {\n    background: url(down-arrow.png) no-repeat left center;\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin: none;\n    padding: none;\n    border: none;\n    filter: invert(100%) sepia(26%) saturate(328%) hue-rotate(225deg) brightness(114%) contrast(100%);\n    margin-top: 4px;\n}\n#allToDos>div>button:nth-child(5) {\n    background: url(pin.png) no-repeat left center;\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin: none;\n    padding: none;\n    border: none;\n    filter: invert(100%) sepia(26%) saturate(328%) hue-rotate(225deg) brightness(114%) contrast(100%);\n    margin-top: 4px;\n}\n#allToDos>div>form>input:disabled{\n    background-color: #393E41;\n    color: white;\n    min-height: 1.5rem;\n    font-size: 1.5rem;\n    border: none;\n}\n#allToDos>div>p {\n    margin: 0;\n    align-self: flex-start;\n    margin-top: 4px;\n}\n\n#allToDos > div > button:hover {\n    filter: none;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

    newToDo.textContent = 'Create Task'
    newToDo.id = 'newToDo'
    newToDo.addEventListener('click', () => {
        if (_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectStorage.length === 0) {
            alert('Please create a project first')
            return
        }
        _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.newToDo(false);
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
            formInput = document.createElement('textarea')
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
    formCloseButton.id = 'formCloseButton'
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
        allToDos.innerHTML = ''
        _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.newProject(false)
        projectPopup.classList.toggle('active')
    })
    formPopup.appendChild(formCloseButton)
    formPopup.appendChild(formButton)

    body.appendChild(projectPopup)

    if ( localStorage.length !== 0 ) {
        let storage = JSON.parse(localStorage.getItem('projectStorage'))
        for (let i=0; i<storage.length; i++) {
            allToDos.innerHTML = ''
            _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.newProject(true, i)
        }
    } 
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

    const store = () => {
        localStorage.setItem('projectStorage', JSON.stringify(projectStorage))
    }

    let projectStorage = []
    let currentProject = 0

    if (localStorage.length !== 0) {
        let storage = localStorage.getItem('projectStorage')
        projectStorage = JSON.parse(storage)
        console.log(projectStorage)
    }
    const newProject = (storageCheck, storageItem) => {
        const allProjects = document.querySelector('#allProjects')
        const allToDos = document.getElementById('allToDos')
        const formPopup = document.getElementById('formPopup')
        const projectTitle = document.getElementById('projectTitle')
        const projectDesc = document.getElementById('projectDescription')

        let project = 0

        if (storageCheck === false) {
            project = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(formPopup[0].value, formPopup[1].value)
            projectStorage.push(project)
            store()
            currentProject = projectStorage[projectStorage.indexOf(project)]
        } else {
            currentProject = projectStorage[storageItem]
            project = currentProject
            for ( let i=0; i<currentProject.todos.length; i++ ){
                newToDo(true, i)
            }
        }
        projectTitle.value = currentProject.projectName
        projectDesc.value = currentProject.projectDescription

        const allProjectsDiv = document.createElement('div')
        const allProjectsLi = document.createElement('li')
        const projectRemove = document.createElement('button')

        projectRemove.textContent = 'X'

        projectRemove.addEventListener('click', () => {
            let allProjectsNodeArray = Array.from(allProjects.childNodes)
            allProjectsNodeArray[projectStorage.indexOf(project)].remove()
            if ( currentProject === projectStorage[projectStorage.indexOf(project)]){
                projectStorage.splice(projectStorage.indexOf(project), 1)
                currentProject = projectStorage[0]
                store()
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
            
                    allToDosDiv.appendChild(allToDosForm)
                    allToDosDiv.appendChild(dateDue)
                    allToDosDiv.appendChild(toDoRemove)
                    allToDosDiv.appendChild(toDoExpand)

                    if (currentProject.todos[i].isPinned === true) {
                        allToDos.prepend(allToDosDiv)
                    } else {
                        allToDos.appendChild(allToDosDiv)
                    }

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
                        store()
                    })
            
                    toDoRemove.addEventListener('click', () => {
                        let allToDosNodeArray = Array.from(allToDos.childNodes)
                        allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
                        projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
                        store()
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
                                store();
                            })
            
                            toDosDue.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDue = e.target.value
                                dateDue.textContent = e.target.value
                                console.log(projectStorage)
                                store();
                            })

                            toDosTitle.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoTitle = e.target.value
                                console.log(projectStorage)
                                store();
                            })
            
                            allToDosForm.appendChild(toDosDescription)
                            allToDosForm.appendChild(toDosDue)
                            store()
                        } else {
                            toDosTitle.disabled = true
                            for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                                allToDosForm.removeChild(allToDosForm.lastChild)
                            }
                            store()
                        }
                    })
                    store()
                } 
            } else {
                projectStorage.splice(projectStorage.indexOf(project), 1)
                store()
            }

        })

        allProjectsLi.textContent = project.projectName
        allProjectsLi.id = `project${projectStorage.indexOf(project)}`
        allProjectsDiv.appendChild(allProjectsLi)
        allProjectsDiv.appendChild(projectRemove)
        allProjects.appendChild(allProjectsDiv)

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
        
                allToDosDiv.appendChild(allToDosForm)
                allToDosDiv.appendChild(dateDue)
                allToDosDiv.appendChild(toDoRemove)
                allToDosDiv.appendChild(toDoExpand)

                if (currentProject.todos[i].isPinned === true) {
                    allToDos.prepend(allToDosDiv)
                } else {
                    allToDos.appendChild(allToDosDiv)
                }
                store()
                const toDoPin = document.createElement('button')
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
                    store()
                })
         
                toDoRemove.addEventListener('click', () => {
                    let allToDosNodeArray = Array.from(allToDos.childNodes)
                    allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
                    projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
                    store()
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
                            store();
                        })
        
                        toDosDue.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDue = e.target.value
                            dateDue.textContent = e.target.value
                            console.log(projectStorage)
                            store();
                        })

                        toDosTitle.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoTitle = e.target.value
                            console.log(projectStorage)
                            store();
                        })
        
                        allToDosForm.appendChild(toDosDescription)
                        allToDosForm.appendChild(toDosDue)
                    } else {
                        toDosTitle.disabled = true
                        for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                            allToDosForm.removeChild(allToDosForm.lastChild)
                        }
                    }
                    store()
                })
            } 
        })
    }
    const newToDo = (storageCheck, storageItem) => {
        const allToDos = document.getElementById('allToDos')
        const toDoForm = document.getElementById('toDoForm')
        let toDo = 0
        if ( storageCheck === false ) {
            toDo = (0,_toDoFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(toDoForm[0].value, toDoForm[1].value, toDoForm[2].value)
            currentProject.todos.push(toDo)
            store()
        } else {
            toDo = currentProject.todos[storageItem]
        }

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

        allToDosDiv.appendChild(allToDosForm)
        allToDosDiv.appendChild(dateDue)
        allToDosDiv.appendChild(toDoRemove)
        allToDosDiv.appendChild(toDoExpand)
        allToDosDiv.appendChild(toDoPin)

        if ( toDo.isPinned === true ){
            allToDos.prepend(allToDosDiv)
        } else {
            allToDos.appendChild(allToDosDiv)
        }

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
            store()
        })
 
        toDoRemove.addEventListener('click', () => {
            let allToDosNodeArray = Array.from(allToDos.childNodes)
            allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
            projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
            store()
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
                    store();
                })

                toDosDue.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoDue = e.target.value
                    dateDue.textContent = e.target.value
                    console.log(projectStorage)
                    store();
                })

                toDosTitle.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoTitle = e.target.value
                    console.log(projectStorage)
                    store();
                })

                allToDosForm.appendChild(toDosDescription)
                allToDosForm.appendChild(toDosDue)
                store()
            } else {
                toDosTitle.disabled = true
                for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                    allToDosForm.removeChild(allToDosForm.lastChild)
                }
                store()
            }
        })

    }

    const projectTitleEditor = (e) => {
        if ( projectStorage.length === 0 ) return;
        projectStorage[projectStorage.indexOf(currentProject)].projectName = e.target.value
        let allProjectsNodeArray = Array.from(allProjects.childNodes)
        let currentProjectDivArray = Array.from(allProjectsNodeArray[projectStorage.indexOf(currentProject)].childNodes)
        currentProjectDivArray[0].textContent = e.target.value
        store()
    }

    const projectDescriptionEditor = (e) => {
        if ( projectStorage.length === 0 ) return;
        projectStorage[projectStorage.indexOf(currentProject)].projectDescription = e.target.value
        store()
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

/***/ }),

/***/ "./src/down-arrow.png":
/*!****************************!*\
  !*** ./src/down-arrow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56b7cbaaa52c0c5a5a02.png";

/***/ }),

/***/ "./src/pin.png":
/*!*********************!*\
  !*** ./src/pin.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "013fcaaeed1394898833.png";

/***/ }),

/***/ "./src/trash-can.png":
/*!***************************!*\
  !*** ./src/trash-can.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a43245070941c6c52ce.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm9CO0FBQ3NCO0FBQ007QUFDQTtBQUNYOztBQUVyQyx3REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3RvRG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwidHJhc2gtY2FuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRvd24tYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwicGluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbmJvZHksIGh0bWwsIHRleHRhcmVhLCBpbnB1dCwgYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMTlmciAvIDFmciAzZnI7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTtcXG59XFxuaGVhZGVyID4gcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgd2hpdGU7XFxufVxcbmJ1dHRvbixcXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI3Byb2plY3RQb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbiNwcm9qZWN0UG9wdXAuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuI2Zvcm1Qb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMENCO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbiNwcm9qZWN0T3ZlcnZpZXcgPiB0ZXh0YXJlYSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiNwcm9qZWN0T3ZlcnZpZXcgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jdG9Eb0Zvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuI3RvRG9EZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNXJlbTtcXG59XFxuI2FsbFRvRG9zID4gZGl2ID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiN0b0RvRm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiA+IHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuI3RvRG9Gb3JtID4gZGl2ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuI3RvRG9Gb3JtID4gZGl2ID4gbGFiZWwge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4uaW5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbiNuZXdQcm9qZWN0LCBtYWluID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbm1haW4gPiBidXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNuZXdQcm9qZWN0OmhvdmVyLCBtYWluID4gYnV0dG9uOmhvdmVyLCAjZm9ybVBvcHVwID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG59XFxuXFxuI2FsbFByb2plY3RzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4OyAgIFxcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGxQcm9qZWN0cyA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNhbGxQcm9qZWN0cyA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxufVxcblxcbiNhbGxQcm9qZWN0cyA+IGRpdiA+IGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDE5cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxufVxcblxcbiNmb3JtUG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4jZm9ybVBvcHVwID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBvcmRlcjogMjtcXG59XFxuI2Zvcm1Qb3B1cCA+IGRpdiA+IHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogOHJlbTtcXG59XFxuI2Zvcm1Qb3B1cCA+IGRpdiA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiNmb3JtUG9wdXAgPiBkaXYgPiBsYWJlbCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcbiNmb3JtQ2xvc2VCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBvcmRlcjogMTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbiNwcm9qZWN0Rm9ybVN1Ym1pdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBvcmRlcjogMztcXG59XFxuXFxuI2FsbFRvRG9zIHtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0QwQ0I7XFxufVxcblxcbiNhbGxUb0RvcyA+IGRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2FsbFRvRG9zID4gZGl2ID4gZm9ybSA+IGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbiNhbGxUb0RvcyA+IGRpdiA+IGZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PmJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiBub25lO1xcbiAgICBwYWRkaW5nOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoMzI4JSkgaHVlLXJvdGF0ZSgyMjVkZWcpIGJyaWdodG5lc3MoMTE0JSkgY29udHJhc3QoMTAwJSk7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuI2FsbFRvRG9zPmRpdj5idXR0b246bnRoLWNoaWxkKDQpIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgcGFkZGluZzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyNiUpIHNhdHVyYXRlKDMyOCUpIGh1ZS1yb3RhdGUoMjI1ZGVnKSBicmlnaHRuZXNzKDExNCUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbiNhbGxUb0Rvcz5kaXY+YnV0dG9uOm50aC1jaGlsZCg1KSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIHBhZGRpbmc6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMjYlKSBzYXR1cmF0ZSgzMjglKSBodWUtcm90YXRlKDIyNWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PmZvcm0+aW5wdXQ6ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuI2FsbFRvRG9zID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksU0FBUztJ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SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlHQUFpRztJQUNqRyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5RUFBOEM7SUFDOUMsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osaUdBQWlHO0lBQ2pHLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5ib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5ib2R5LCBodG1sLCB0ZXh0YXJlYSwgaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDE5ZnIgLyAxZnIgM2ZyO1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgd2hpdGU7XFxufVxcbmhlYWRlciA+IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHdoaXRlO1xcbn1cXG5idXR0b24sXFxubGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbiNwcm9qZWN0UG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4jcHJvamVjdFBvcHVwLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbiNmb3JtUG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDBDQjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3Byb2plY3RPdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3ID4gdGV4dGFyZWEge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuI3RvRG9Gb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcbiNhbGxUb0RvcyA+IGRpdiA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG59XFxuI2FsbFRvRG9zID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdG9Eb0Zvcm0ge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4jdG9Eb0Zvcm0gPiBkaXYgPiB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiA+IGxhYmVsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLmluYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jbmV3UHJvamVjdCwgbWFpbiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5tYWluID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jbmV3UHJvamVjdDpob3ZlciwgbWFpbiA+IGJ1dHRvbjpob3ZlciwgI2Zvcm1Qb3B1cCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxufVxcblxcbiNhbGxQcm9qZWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDsgICBcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBsaSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxOXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2ID4gbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbn1cXG5cXG4jZm9ybVBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuI2Zvcm1Qb3B1cCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgb3JkZXI6IDI7XFxufVxcbiNmb3JtUG9wdXAgPiBkaXYgPiB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDhyZW07XFxufVxcbiNmb3JtUG9wdXAgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jZm9ybVBvcHVwID4gZGl2ID4gbGFiZWwge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4jZm9ybUNsb3NlQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgb3JkZXI6IDE7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4jcHJvamVjdEZvcm1TdWJtaXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgb3JkZXI6IDM7XFxufVxcblxcbiNhbGxUb0RvcyB7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMENCO1xcbn1cXG5cXG4jYWxsVG9Eb3MgPiBkaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNhbGxUb0RvcyA+IGRpdiA+IGZvcm0gPiBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYgPiBmb3JtID4gdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogNHJlbTtcXG59XFxuI2FsbFRvRG9zPmRpdj5idXR0b246bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKHRyYXNoLWNhbi5wbmcpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiBub25lO1xcbiAgICBwYWRkaW5nOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoMzI4JSkgaHVlLXJvdGF0ZSgyMjVkZWcpIGJyaWdodG5lc3MoMTE0JSkgY29udHJhc3QoMTAwJSk7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuI2FsbFRvRG9zPmRpdj5idXR0b246bnRoLWNoaWxkKDQpIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKGRvd24tYXJyb3cucG5nKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgcGFkZGluZzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyNiUpIHNhdHVyYXRlKDMyOCUpIGh1ZS1yb3RhdGUoMjI1ZGVnKSBicmlnaHRuZXNzKDExNCUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbiNhbGxUb0Rvcz5kaXY+YnV0dG9uOm50aC1jaGlsZCg1KSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChwaW4ucG5nKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgcGFkZGluZzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyNiUpIHNhdHVyYXRlKDMyOCUpIGh1ZS1yb3RhdGUoMjI1ZGVnKSBicmlnaHRuZXNzKDExNCUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbiNhbGxUb0Rvcz5kaXY+Zm9ybT5pbnB1dDpkaXNhYmxlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNhbGxUb0Rvcz5kaXY+cCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4jYWxsVG9Eb3MgPiBkaXYgPiBidXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCJcbi8vIGxvYWRzIHRoZSBwYWdlIHdpdGggZnVsbCBmdW5jdGlvbmFsaXR5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICAvLyBodG1sIGJvaWxlcnBsYXRlXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgcGFnZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIHBhZ2VMb2dvLnRleHRDb250ZW50ID0gJ015VG9Eb0xpc3QnXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHBhZ2VMb2dvKVxuXG4gICAgY29uc3QgbmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYWxsVG9Eb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBwcm9qZWN0T3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgZm9yKCBsZXQgaT0wOyBpPDM7IGkrKyApIHtcbiAgICAgICAgbGV0IHRvRG9Gb3JtSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgdG9Eb0Zvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbGV0IHRvRG9Gb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICAgICAgaWYgKGk9PT0wKSB7XG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0LmlkID0gJ3RvRG9OYW1lJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5uYW1lID0gJ3RvRG9OYW1lJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC5odG1sRm9yID0gJ3RvRG9OYW1lJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSdcbiAgICAgICAgfSBlbHNlIGlmIChpPT09MSkge1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQuaWQgPSAndG9Eb0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5uYW1lID0gJ3RvRG9EZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwuaHRtbEZvciA9ICd0b0RvRGVzY3JpcHRpb24nIFxuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbicgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoaT09PTIpIHtcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQuaWQgPSAndG9Eb0R1ZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQubmFtZSA9ICd0b0RvRHVlJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLmh0bWxGb3IgPSAndG9Eb0R1ZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG4gICAgICAgIH1cbiAgICAgICAgdG9Eb0Zvcm1JbnB1dERpdi5hcHBlbmRDaGlsZCh0b0RvRm9ybUxhYmVsKVxuICAgICAgICB0b0RvRm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKHRvRG9Gb3JtSW5wdXQpXG4gICAgICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtSW5wdXREaXYpXG4gICAgfVxuXG4gICAgbmV3VGFzay50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHRhc2snXG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld1Rhc2sudGV4dENvbnRlbnQgPT09ICdBZGQgbmV3IHRhc2snKSB7XG4gICAgICAgICAgICB0b0RvRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgICAgICAgICBuZXdUb0RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICAgICAgICAgIG5ld1Rhc2sudGV4dENvbnRlbnQgPSAnQ2xvc2UgdGFzayBjcmVhdGlvbidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvRG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICAgICAgICAgIG5ld1RvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgICAgICAgICAgbmV3VGFzay50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHRhc2snICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdUb0RvLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJ1xuICAgIG5ld1RvRG8uaWQgPSAnbmV3VG9EbydcbiAgICBuZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE1hbmFnZXIucHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNyZWF0ZSBhIHByb2plY3QgZmlyc3QnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE1hbmFnZXIubmV3VG9EbyhmYWxzZSk7XG4gICAgfSlcbiAgICBhbGxUb0Rvcy5pZCA9ICdhbGxUb0RvcydcbiAgICB0b0RvRm9ybS5pZCA9ICd0b0RvRm9ybSdcblxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcblxuICAgIHByb2plY3RUaXRsZS52YWx1ZSA9ICdQcm9qZWN0J1xuICAgIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSA9ICdQcm9qZWN0IERlc2NyaXB0aW9uJ1xuXG4gICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3RUaXRsZSdcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJ1xuICAgIHByb2plY3RPdmVydmlldy5pZCA9ICdwcm9qZWN0T3ZlcnZpZXcnXG5cbiAgICBwcm9qZWN0T3ZlcnZpZXcudGV4dENvbnRlbnQgPSAnUHJvamVjdCBPdmVydmlldydcblxuICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHByb2plY3RNYW5hZ2VyLnByb2plY3RUaXRsZUVkaXRvcilcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBwcm9qZWN0TWFuYWdlci5wcm9qZWN0RGVzY3JpcHRpb25FZGl0b3IpXG5cbiAgICBwcm9qZWN0T3ZlcnZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgIHByb2plY3RPdmVydmlldy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RPdmVydmlldylcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2spXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvRm9ybSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld1RvRG8pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhbGxUb0RvcylcblxuICAgIHRvRG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICBuZXdUb0RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0J1xuICAgIG5ld1Byb2plY3QuaWQgPSAnbmV3UHJvamVjdCdcbiAgICBhbGxQcm9qZWN0cy5pZCA9ICdhbGxQcm9qZWN0cydcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGxQcm9qZWN0cylcbiAgICBzaWRlYmFyLmlkID0gJ3NpZGViYXInXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKVxuXG4gICAgLy8gaGlkZGVuIHBvcC11cCBvdmVybGF5LCBtZWFudCB0byBhY3RpdmF0ZSB3aGVuIG5ldyBwcm9qZWN0IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBwcm9qZWN0UG9wdXAuaWQgPSAncHJvamVjdFBvcHVwJ1xuICAgIGZvcm1Qb3B1cC5pZCA9ICdmb3JtUG9wdXAnXG4gICAgcHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKGZvcm1Qb3B1cClcblxuICAgIGZvciggbGV0IGk9MDsgaTwyOyBpKysgKSB7XG4gICAgICAgIGxldCBmb3JtSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gICAgICAgIGlmIChpPT09MCkge1xuICAgICAgICAgICAgZm9ybUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJ1xuICAgICAgICAgICAgZm9ybUlucHV0Lm5hbWUgPSAncHJvamVjdE5hbWUnXG4gICAgICAgICAgICBmb3JtTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0TmFtZSdcbiAgICAgICAgICAgIGZvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnXG4gICAgICAgIH0gZWxzZSBpZiAoaT09PTEpIHtcbiAgICAgICAgICAgIGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgIGZvcm1JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nXG4gICAgICAgICAgICBmb3JtSW5wdXQubmFtZSA9ICdwcm9qZWN0RGVzY3JpcHRpb24nXG4gICAgICAgICAgICBmb3JtTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nIFxuICAgICAgICAgICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtTGFiZWwpXG4gICAgICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtSW5wdXQpXG4gICAgICAgIGZvcm1Qb3B1cC5hcHBlbmRDaGlsZChmb3JtSW5wdXREaXYpXG4gICAgfVxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGZvcm1DbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybUNsb3NlQnV0dG9uLmlkID0gJ2Zvcm1DbG9zZUJ1dHRvbidcbiAgICBmb3JtQ2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnWCdcbiAgICBmb3JtQ2xvc2VCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgZm9ybUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9KVxuICAgIGZvcm1CdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgZm9ybUJ1dHRvbi5pZCA9ICdwcm9qZWN0Rm9ybVN1Ym1pdCdcbiAgICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0J1xuICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb3JtUG9wdXBbMF0udmFsdWUgPT09ICcnIHx8IGZvcm1Qb3B1cFsxXS52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBkbyBub3QgbGVhdmUgZW1wdHkgZmllbGRzJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhbGxUb0Rvcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5uZXdQcm9qZWN0KGZhbHNlKVxuICAgICAgICBwcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9KVxuICAgIGZvcm1Qb3B1cC5hcHBlbmRDaGlsZChmb3JtQ2xvc2VCdXR0b24pXG4gICAgZm9ybVBvcHVwLmFwcGVuZENoaWxkKGZvcm1CdXR0b24pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHByb2plY3RQb3B1cClcblxuICAgIGlmICggbG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCApIHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0U3RvcmFnZScpKVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWxsVG9Eb3MuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLm5ld1Byb2plY3QodHJ1ZSwgaSlcbiAgICAgICAgfVxuICAgIH0gXG59IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVkIGZvciB0aGUgcHVycG9zZSBvZiBzdG9yaW5nIHRvZG9zIGNyZWF0ZWQgd2l0aCB0aGUgdG9kb2ZhY3RvcnkgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgbGV0IHRvZG9zID0gW11cbiAgICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lXG4gICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgfVxufSIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi9wcm9qZWN0RmFjdG9yeVwiXG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSBcIi4vdG9Eb0ZhY3RvcnlcIlxuZXhwb3J0IGNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHN0b3JlID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3RvcmFnZSkpXG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RTdG9yYWdlID0gW11cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSAwXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0U3RvcmFnZScpXG4gICAgICAgIHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICB9XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IChzdG9yYWdlQ2hlY2ssIHN0b3JhZ2VJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFByb2plY3RzJylcbiAgICAgICAgY29uc3QgYWxsVG9Eb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVG9Eb3MnKVxuICAgICAgICBjb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVBvcHVwJylcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REZXNjcmlwdGlvbicpXG5cbiAgICAgICAgbGV0IHByb2plY3QgPSAwXG5cbiAgICAgICAgaWYgKHN0b3JhZ2VDaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShmb3JtUG9wdXBbMF0udmFsdWUsIGZvcm1Qb3B1cFsxXS52YWx1ZSlcbiAgICAgICAgICAgIHByb2plY3RTdG9yYWdlLnB1c2gocHJvamVjdClcbiAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2Vbc3RvcmFnZUl0ZW1dXG4gICAgICAgICAgICBwcm9qZWN0ID0gY3VycmVudFByb2plY3RcbiAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8Y3VycmVudFByb2plY3QudG9kb3MubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICAgICAgICBuZXdUb0RvKHRydWUsIGkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgcHJvamVjdERlc2MudmFsdWUgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb25cblxuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgICAgIHByb2plY3RSZW1vdmUudGV4dENvbnRlbnQgPSAnWCdcblxuICAgICAgICBwcm9qZWN0UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFsbFByb2plY3RzTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0cy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgYWxsUHJvamVjdHNOb2RlQXJyYXlbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KV0ucmVtb3ZlKClcbiAgICAgICAgICAgIGlmICggY3VycmVudFByb2plY3QgPT09IHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCldKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5zcGxpY2UocHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RTdG9yYWdlWzBdXG4gICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBpZiAoIHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJ1Byb2plY3QnXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzYy52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbiBcblxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8Y3VycmVudFByb2plY3QudG9kb3MubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvRG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb1RpdGxlXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NUaXRsZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb0V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChkYXRlRHVlKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUmVtb3ZlKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1BpbilcblxuICAgICAgICAgICAgICAgICAgICB0b0RvUGluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5wcmVwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b0RvUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRvRG9zTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxUb0Rvcy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NOb2RlQXJyYXlbYWxsVG9Eb3NOb2RlQXJyYXkuaW5kZXhPZihhbGxUb0Rvc0RpdildLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3Muc3BsaWNlKGFsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRvRG9FeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0Rlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9EdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb0Rlc2MgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb0R1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvVGl0bGUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5zcGxpY2UocHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICAgICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBhbGxQcm9qZWN0c0xpLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICBhbGxQcm9qZWN0c0xpLmlkID0gYHByb2plY3Qke3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCl9YFxuICAgICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0xpKVxuICAgICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0UmVtb3ZlKVxuICAgICAgICBhbGxQcm9qZWN0cy5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0RpdilcblxuICAgICAgICBhbGxQcm9qZWN0c0xpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKHByb2plY3QpXVxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdERlc2NyaXB0aW9uXG4gICAgICAgICAgICBhbGxUb0Rvcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxjdXJyZW50UHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb0Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvRHVlXG4gICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb1RpdGxlXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc1RpdGxlKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvRXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGRhdGVEdWUpXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1JlbW92ZSlcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLmlzUGlubmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvUGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUGluKVxuXG4gICAgICAgICAgICAgICAgdG9Eb1Bpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5hcHBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9Eb1JlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRvRG9zTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxUb0Rvcy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc05vZGVBcnJheVthbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KV0ucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zLnNwbGljZShhbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KSwgMSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHRvRG9FeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0Rlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRGVzYyA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9UaXRsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxhbGxUb0Rvc0Zvcm0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgbmV3VG9EbyA9IChzdG9yYWdlQ2hlY2ssIHN0b3JhZ2VJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbFRvRG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRvRG9zJylcbiAgICAgICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0Zvcm0nKVxuICAgICAgICBsZXQgdG9EbyA9IDBcbiAgICAgICAgaWYgKCBzdG9yYWdlQ2hlY2sgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgdG9EbyA9IHRvRG9GYWN0b3J5KHRvRG9Gb3JtWzBdLnZhbHVlLCB0b0RvRm9ybVsxXS52YWx1ZSwgdG9Eb0Zvcm1bMl0udmFsdWUpXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50b2Rvcy5wdXNoKHRvRG8pXG4gICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0RvID0gY3VycmVudFByb2plY3QudG9kb3Nbc3RvcmFnZUl0ZW1dXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGxUb0Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGFsbFRvRG9zRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBjb25zdCB0b0Rvc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICAgICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9EdWVcbiAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgdG9Eb3NUaXRsZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9UaXRsZVxuXG4gICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc1RpdGxlKVxuXG4gICAgICAgIGNvbnN0IHRvRG9SZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjb25zdCB0b0RvRXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgdG9Eb1BpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChkYXRlRHVlKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUmVtb3ZlKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUGluKVxuXG4gICAgICAgIGlmICggdG9Eby5pc1Bpbm5lZCA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zRGl2KVxuICAgICAgICB9XG5cbiAgICAgICAgdG9Eb1Bpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGxUb0Rvcy5hcHBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgIH0pXG4gXG4gICAgICAgIHRvRG9SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWxsVG9Eb3NOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFRvRG9zLmNoaWxkTm9kZXMpXG4gICAgICAgICAgICBhbGxUb0Rvc05vZGVBcnJheVthbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KV0ucmVtb3ZlKClcbiAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvcy5zcGxpY2UoYWxsVG9Eb3NOb2RlQXJyYXkuaW5kZXhPZihhbGxUb0Rvc0RpdiksIDEpXG4gICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9Eb0V4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICggYWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgdG9Eb3NEdWUudHlwZSA9ICdkYXRlJ1xuICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24udmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRGVzY1xuICAgICAgICAgICAgICAgIHRvRG9zRHVlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0R1ZVxuXG4gICAgICAgICAgICAgICAgdG9Eb3NEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRGVzYyA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b0Rvc0R1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9UaXRsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEdWUpXG4gICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8YWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLnJlbW92ZUNoaWxkKGFsbFRvRG9zRm9ybS5sYXN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUaXRsZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIGlmICggcHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwICkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0ucHJvamVjdE5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBsZXQgYWxsUHJvamVjdHNOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFByb2plY3RzLmNoaWxkTm9kZXMpXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdERpdkFycmF5ID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0c05vZGVBcnJheVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0uY2hpbGROb2RlcylcbiAgICAgICAgY3VycmVudFByb2plY3REaXZBcnJheVswXS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHN0b3JlKClcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25FZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCApIHJldHVybjtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnByb2plY3REZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHN0b3JlKClcbiAgICB9XG4gXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2UsXG4gICAgICAgIG5ld1Byb2plY3QsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBuZXdUb0RvLFxuICAgICAgICBwcm9qZWN0VGl0bGVFZGl0b3IsXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbkVkaXRvcixcbiAgICB9XG59KSgpIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0b2RvIHdpdGggMyBkZWZpbmVkIHByb3BlcnRpZXMgYW5kIDIgcHJlZGVmaW5lZCBvbmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICBsZXQgdG9Eb1RpdGxlID0gdGl0bGU7XG4gICAgbGV0IHRvRG9EZXNjID0gZGVzY3JpcHRpb247XG4gICAgbGV0IHRvRG9EdWUgPSBkdWVEYXRlO1xuICAgIGxldCBpc1Bpbm5lZCA9IGZhbHNlO1xuICAgIGxldCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvRG9UaXRsZSxcbiAgICAgICAgdG9Eb0Rlc2MsXG4gICAgICAgIHRvRG9EdWUsXG4gICAgICAgIGlzUGlubmVkLFxuICAgICAgICBpc0NvbXBsZXRlZCxcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHRvRG9GYWN0b3J5IGZyb20gJy4vdG9Eb0ZhY3RvcnkuanMnXG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi9wcm9qZWN0RmFjdG9yeS5qcydcbmltcG9ydCB7cHJvamVjdE1hbmFnZXJ9IGZyb20gJy4vcHJvamVjdE1hbmFnZXInO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZUxvYWQuanMnO1xuXG5wYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==